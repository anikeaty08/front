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



        // Initialize Lucide icons with stroke width 1.5 as requested
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
      

<div className="absolute top-0 w-full z-50 border-b border-white/10">
<div className="max-w-[90rem] mx-auto px-4 md:px-8 flex items-center justify-between h-14">
<div className="flex items-center gap-6 text-base text-zinc-300">
<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
<i className="w-4 h-4 text-orange-500" data-lucide="phone"></i>
<span>Call Us 24/7: +977 980 000 0000</span>
</div>
</div>
<div className="flex items-center gap-6 text-base text-zinc-300">
<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
<span>EN</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
<div className="flex items-center gap-4">
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="facebook"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="instagram"></i>
</div>
</div>
</div>
</div>

<nav className="absolute top-14 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-sm">
<div className="max-w-[90rem] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<div className="w-10 h-10 bg-orange-500 flex items-center justify-center [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%,0_80%)]">
<i className="w-6 h-6 text-white" data-lucide="mountain"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">HimalayanTreks</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-base font-medium text-white">
<a className="text-orange-500" href="#">Home <i className="w-3 h-3 inline" data-lucide="chevron-down"></i></a>
<a className="hover:text-orange-500 transition-colors" href="#">Destinations <i className="w-3 h-3 inline" data-lucide="chevron-down"></i></a>
<a className="hover:text-orange-500 transition-colors" href="#">Trekking <i className="w-3 h-3 inline" data-lucide="chevron-down"></i></a>
<a className="hover:text-orange-500 transition-colors" href="#">Climbing <i className="w-3 h-3 inline" data-lucide="chevron-down"></i></a>
<a className="hover:text-orange-500 transition-colors" href="#">About Us</a>
<a className="hover:text-orange-500 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-6">
<i className="w-5 h-5 text-white cursor-pointer hover:text-orange-500 transition-colors" data-lucide="search"></i>
<button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 items-center gap-2 font-medium transition-colors text-base [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))]">
                    Book Your Trek
                    <div className="bg-white/20 p-1">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center pt-20">
<div className="absolute inset-0 z-0">
<img alt="Annapurna Base Camp" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=3000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/70"></div>
</div>
<div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-16">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight mb-6">
                Discover the Ultimate <br/> Himalayan Adventure
            </h1>
<p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                At the heart of the world's highest peaks, we offer unparalleled trekking experiences that push boundaries and forge lifelong memories.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-medium transition-colors text-lg flex items-center gap-3 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%,0_calc(100%-12px))] w-full sm:w-auto justify-center">
                    Explore Packages
                    <div className="bg-white/20 p-1">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
<button className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4 font-medium transition-colors text-lg flex items-center gap-3 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%,0_calc(100%-12px))] w-full sm:w-auto justify-center">
                    Contact Experts
                    <div className="bg-orange-500 p-1">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>
<button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors z-20 hidden md:flex">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors z-20 hidden md:flex">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</header>

<section className="relative z-20 max-w-[90rem] mx-auto px-4 md:px-8 -mt-24 mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-10 shadow-xl shadow-zinc-200/50 [clip-path:polygon(2.5rem_0,100%_0,100%_100%,0_100%,0_2.5rem)] border border-zinc-100 group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 rounded-full border border-orange-200 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Safety Assured</h3>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">Expert guides trained in high-altitude first aid ensuring your well-being on every trail.</p>
<a className="text-orange-500 font-medium text-lg flex items-center gap-2 group-hover:text-orange-600" href="#">
                    READ MORE <i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>

<div className="bg-white p-10 shadow-xl shadow-zinc-200/50 [clip-path:polygon(2.5rem_0,100%_0,100%_100%,0_100%,0_2.5rem)] border border-zinc-100 group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 rounded-full border border-orange-200 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" data-lucide="globe"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Local Expertise</h3>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">Decades of experience navigating the rugged terrains and rich cultures of the Himalayas.</p>
<a className="text-orange-500 font-medium text-lg flex items-center gap-2 group-hover:text-orange-600" href="#">
                    READ MORE <i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>

<div className="bg-white p-10 shadow-xl shadow-zinc-200/50 [clip-path:polygon(2.5rem_0,100%_0,100%_100%,0_100%,0_2.5rem)] border border-zinc-100 group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 rounded-full border border-orange-200 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" data-lucide="compass"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Custom Itineraries</h3>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">Tailored treks designed for your fitness level, timeframe, and adventure aspirations.</p>
<a className="text-orange-500 font-medium text-lg flex items-center gap-2 group-hover:text-orange-600" href="#">
                    READ MORE <i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>

<div className="bg-white p-10 shadow-xl shadow-zinc-200/50 [clip-path:polygon(2.5rem_0,100%_0,100%_100%,0_100%,0_2.5rem)] border border-zinc-100 group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 rounded-full border border-orange-200 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
<i className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" data-lucide="leaf"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Eco-Friendly</h3>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">Committed to sustainable tourism, leaving no trace, and supporting local communities.</p>
<a className="text-orange-500 font-medium text-lg flex items-center gap-2 group-hover:text-orange-600" href="#">
                    READ MORE <i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>
</div>
</section>

<div className="max-w-[90rem] mx-auto px-4 md:px-8 mb-32 border-b border-zinc-200 pb-16">
<div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale">
<div className="flex items-center gap-3"><i className="w-8 h-8" data-lucide="mountain-snow"></i><span className="text-2xl font-bold tracking-tight">NTA</span></div>
<div className="flex items-center gap-3"><i className="w-8 h-8" data-lucide="tent"></i><span className="text-2xl font-bold tracking-tight">SherpaGear</span></div>
<div className="flex items-center gap-3"><i className="w-8 h-8" data-lucide="map"></i><span className="text-2xl font-bold tracking-tight">TrekNepal</span></div>
<div className="flex items-center gap-3"><i className="w-8 h-8" data-lucide="camera"></i><span className="text-2xl font-bold tracking-tight">HimalayanViews</span></div>
<div className="flex items-center gap-3"><i className="w-8 h-8" data-lucide="backpack"></i><span className="text-2xl font-bold tracking-tight">Altitude</span></div>
</div>
</div>

<section className="max-w-[90rem] mx-auto px-4 md:px-8 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-6 -left-6 w-32 h-32 bg-zinc-100 rounded-full z-0"></div>
<img alt="Trekkers" className="relative z-10 w-4/5 h-[600px] object-cover rounded-tr-[4rem] rounded-bl-[4rem]" src="https://images.unsplash.com/photo-1543165365-07232ed12fad?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Guide" className="absolute bottom-10 right-0 w-[45%] h-64 object-cover border-8 border-white rounded-tl-[3rem] z-20 shadow-xl" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1/2 -right-8 -translate-y-1/2 w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl z-30 border border-zinc-100">
<span className="text-4xl font-semibold tracking-tight text-orange-500">24+</span>
<span className="text-base font-medium text-zinc-600 mt-1">Years of Experience</span>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">Who We Are</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                    Premier Trekking <br/> Agency in Nepal
                </h2>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    Founded with a passion for the mountains, we have been guiding adventurers through the breathtaking landscapes of Nepal for over two decades. Our commitment to safety, sustainability, and authentic experiences sets us apart.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="check-circle-2"></i>
<span className="text-lg font-medium">Licensed Local Guides</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="check-circle-2"></i>
<span className="text-lg font-medium">Quality Equipment</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="check-circle-2"></i>
<span className="text-lg font-medium">Flexible Booking</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="check-circle-2"></i>
<span className="text-lg font-medium">24/7 Support</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="check-circle-2"></i>
<span className="text-lg font-medium">Small Group Sizes</span>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-orange-500" data-lucide="check-circle-2"></i>
<span className="text-lg font-medium">Best Price Guarantee</span>
</div>
</div>
<div className="flex items-center gap-8">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-medium transition-colors text-lg flex items-center gap-3 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%,0_calc(100%-12px))]">
                        About Us
                        <div className="bg-white/20 p-1">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full border border-orange-200 flex items-center justify-center text-orange-500">
<i className="w-6 h-6" data-lucide="phone-call"></i>
</div>
<div>
<span className="block text-base text-zinc-500 font-medium">Call Us 24/7</span>
<span className="block text-xl font-semibold tracking-tight">+977 980 000 0000</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-100 py-32">
<div className="max-w-[90rem] mx-auto px-4 md:px-8">
<div className="flex flex-col items-center text-center mb-16">
<div className="flex items-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">Our Services</span>
<div className="h-px w-12 bg-orange-500"></div>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl leading-tight">
                    We Provide Exceptional Trekking Experiences
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative">
<div className="h-64 overflow-hidden [clip-path:polygon(2rem_0,100%_0,100%_100%,0_100%,0_2rem)]">
<img alt="Everest" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-4 right-4 text-white/50 text-6xl font-semibold tracking-tight mix-blend-overlay">01</div>
<div className="bg-white p-8 relative -mt-8 mx-4 shadow-xl border border-zinc-100 z-10 [clip-path:polygon(0_0,100%_0,100%_100%,1.5rem_100%,0_calc(100%-1.5rem))]">
<div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center absolute -top-8 left-8 [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))]">
<i className="w-8 h-8" data-lucide="mountain-snow"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mt-6 mb-4">Everest Region</h3>
<p className="text-lg text-zinc-600 mb-6 line-clamp-2">Journey to the base of the world's highest peak and explore Sherpa culture.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Everest Base Camp</li>
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Gokyo Lakes</li>
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Three Passes Trek</li>
</ul>
<a className="text-orange-500 font-medium text-lg flex items-center gap-2 group-hover:text-orange-600" href="#">
                            READ MORE <i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>
</div>

<div className="group relative">
<div className="h-64 overflow-hidden [clip-path:polygon(2rem_0,100%_0,100%_100%,0_100%,0_2rem)]">
<img alt="Annapurna" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-4 right-4 text-white/50 text-6xl font-semibold tracking-tight mix-blend-overlay">02</div>
<div className="bg-white p-8 relative -mt-8 mx-4 shadow-xl border border-zinc-100 z-10 [clip-path:polygon(0_0,100%_0,100%_100%,1.5rem_100%,0_calc(100%-1.5rem))]">
<div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center absolute -top-8 left-8 [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))]">
<i className="w-8 h-8" data-lucide="map"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mt-6 mb-4">Annapurna Region</h3>
<p className="text-lg text-zinc-600 mb-6 line-clamp-2">Diverse landscapes ranging from lush valleys to arid high-altitude deserts.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Annapurna Circuit</li>
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Annapurna Base Camp</li>
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Poon Hill Trek</li>
</ul>
<a className="text-orange-500 font-medium text-lg flex items-center gap-2 group-hover:text-orange-600" href="#">
                            READ MORE <i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>
</div>

<div className="group relative">
<div className="h-64 overflow-hidden [clip-path:polygon(2rem_0,100%_0,100%_100%,0_100%,0_2rem)]">
<img alt="Langtang" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-4 right-4 text-white/50 text-6xl font-semibold tracking-tight mix-blend-overlay">03</div>
<div className="bg-white p-8 relative -mt-8 mx-4 shadow-xl border border-zinc-100 z-10 [clip-path:polygon(0_0,100%_0,100%_100%,1.5rem_100%,0_calc(100%-1.5rem))]">
<div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center absolute -top-8 left-8 [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))]">
<i className="w-8 h-8" data-lucide="trees"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mt-6 mb-4">Langtang Valley</h3>
<p className="text-lg text-zinc-600 mb-6 line-clamp-2">A beautiful valley of glaciers, pine forests, and rich Tibetan culture.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Langtang Valley Trek</li>
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Gosainkunda Lake</li>
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Tamang Heritage</li>
</ul>
<a className="text-orange-500 font-medium text-lg flex items-center gap-2 group-hover:text-orange-600" href="#">
                            READ MORE <i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>
</div>

<div className="group relative">
<div className="h-64 overflow-hidden [clip-path:polygon(2rem_0,100%_0,100%_100%,0_100%,0_2rem)]">
<img alt="Climbing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-4 right-4 text-white/50 text-6xl font-semibold tracking-tight mix-blend-overlay">04</div>
<div className="bg-white p-8 relative -mt-8 mx-4 shadow-xl border border-zinc-100 z-10 [clip-path:polygon(0_0,100%_0,100%_100%,1.5rem_100%,0_calc(100%-1.5rem))]">
<div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center absolute -top-8 left-8 [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))]">
<i className="w-8 h-8" data-lucide="pickaxe"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mt-6 mb-4">Peak Climbing</h3>
<p className="text-lg text-zinc-600 mb-6 line-clamp-2">Scale the majestic peaks of the Himalayas with expert mountaineering guides.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Island Peak</li>
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Mera Peak</li>
<li className="flex items-center gap-3 text-lg text-zinc-600"><i className="w-5 h-5 text-orange-500" data-lucide="check"></i> Lobuche East</li>
</ul>
<a className="text-orange-500 font-medium text-lg flex items-center gap-2 group-hover:text-orange-600" href="#">
                            READ MORE <i className="w-4 h-4" data-lucide="plus"></i>
</a>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-xl text-zinc-600">We turn your dreams into reality. We don't stop until you're at the summit.</p>
<button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-medium transition-colors text-lg inline-flex items-center gap-3 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%,0_calc(100%-12px))]">
                    View All Packages
                    <div className="bg-white/20 p-1">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 md:px-8 py-32 border-b border-zinc-200">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
<div>
<div className="flex items-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">Why Choose Us</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                    Overcoming Himalayan Challenges
                </h2>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    Trekking in high altitudes presents unique challenges. With our extensive experience, rigorous safety protocols, and deep local knowledge, we mitigate risks and ensure a smooth, unforgettable journey. We prepare you for the altitude, weather, and terrain.
                </p>
<div className="flex items-center gap-8">
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-medium transition-colors text-lg flex items-center gap-3 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%,0_calc(100%-12px))]">
                        More About Us
                        <div className="bg-white/20 p-1">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
<div className="flex items-center gap-3">
<div className="flex -space-x-4">
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-base">
<span className="font-bold block">Join our 10k+</span>
<span className="text-zinc-500">Satisfied Trekkers</span>
</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Trekking Team" className="w-full h-[500px] object-cover [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)]" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-full shadow-2xl border border-zinc-100">
<div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white text-white">
<i className="w-10 h-10" data-lucide="award"></i>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-orange-50/50 p-10 border border-orange-100 [clip-path:polygon(2rem_0,100%_0,100%_100%,0_100%,0_2rem)]">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-orange-500">
<i className="w-7 h-7" data-lucide="activity"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Altitude Acclimatization</h4>
<p className="text-lg text-zinc-600 leading-relaxed">Carefully planned itineraries to ensure proper acclimatization and prevent altitude sickness.</p>
</div>
<div className="bg-orange-50/50 p-10 border border-orange-100 [clip-path:polygon(2rem_0,100%_0,100%_100%,0_100%,0_2rem)]">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-orange-500">
<i className="w-7 h-7" data-lucide="users"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Experienced Sherpas</h4>
<p className="text-lg text-zinc-600 leading-relaxed">Our backbone consists of native Sherpa guides who intimately know every trail and weather pattern.</p>
</div>
<div className="bg-orange-50/50 p-10 border border-orange-100 [clip-path:polygon(2rem_0,100%_0,100%_100%,0_100%,0_2rem)]">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-orange-500">
<i className="w-7 h-7" data-lucide="heart-handshake"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Community Support</h4>
<p className="text-lg text-zinc-600 leading-relaxed">We employ local staff, utilize local lodges, and contribute to regional development projects.</p>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>
<div className="max-w-[90rem] mx-auto px-4 md:px-8 relative z-10">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">Trek With Integrity</span>
<div className="h-px w-12 bg-orange-500"></div>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Why Choose Us?</h2>
<p className="text-lg text-zinc-600 max-w-2xl mx-auto">Success in the Himalayas requires dedication. We've built our reputation on trust, safety, and delivering awe-inspiring experiences since 2000.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-zinc-200">
<button className="text-lg font-semibold tracking-tight text-zinc-900 border-b-2 border-orange-500 pb-4 px-4 uppercase">About Us</button>
<button className="text-lg font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-300 pb-4 px-4 uppercase transition-colors">Our Skills</button>
<button className="text-lg font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-300 pb-4 px-4 uppercase transition-colors">Our Awards</button>
<button className="text-lg font-medium text-zinc-500 hover:text-zinc-900 border-b-2 border-transparent hover:border-zinc-300 pb-4 px-4 uppercase transition-colors">High Quality</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<img alt="Team" className="w-full h-[400px] object-cover [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)]" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-3xl font-semibold tracking-tight mb-6 leading-tight">Founded in 2000, we are a pioneering trekking agency in Nepal.</h3>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                        Born from a love of the mountains, our agency started with a small team of passionate guides. Today, we are recognized for our unwavering commitment to client safety, environmental sustainability, and providing authentic cultural immersions alongside world-class trekking.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-orange-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-lg font-medium text-zinc-800">Quality and Process Driven with Innovative Eco Practices</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-orange-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-lg font-medium text-zinc-800">Understanding Your Requirements for the Perfect Trek</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-orange-500 mt-1 shrink-0" data-lucide="check-circle"></i>
<span className="text-lg font-medium text-zinc-800">Final Experience Exceeding Expectations Every Time</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 md:px-8 py-32 border-t border-zinc-200">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
<div className="flex items-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">Our Top Packages</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight">
                    We Have the Perfect Trek in 2024
                </h2>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-medium transition-colors text-lg flex items-center gap-3 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%,0_calc(100%-12px))]">
                    View All Packages
                    <div className="bg-white/20 p-1">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
</div>
<div className="lg:col-span-8 space-y-16">

<div className="group cursor-pointer">
<div className="w-full h-[400px] overflow-hidden [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)] mb-6">
<img alt="Everest" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between">
<div>
<div className="flex gap-4 mb-3">
<span className="text-base text-orange-500 font-medium">Everest Region</span>
<span className="text-base text-zinc-400">14 Days</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight group-hover:text-orange-500 transition-colors">Everest Base Camp Trek</h3>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full h-[400px] overflow-hidden [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)] mb-6">
<img alt="Annapurna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between">
<div>
<div className="flex gap-4 mb-3">
<span className="text-base text-orange-500 font-medium">Annapurna Region</span>
<span className="text-base text-zinc-400">10 Days</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight group-hover:text-orange-500 transition-colors">Annapurna Sanctuary Trek</h3>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full h-[400px] overflow-hidden [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)] mb-6">
<img alt="Manaslu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-start justify-between">
<div>
<div className="flex gap-4 mb-3">
<span className="text-base text-orange-500 font-medium">Remote Region</span>
<span className="text-base text-zinc-400">18 Days</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight group-hover:text-orange-500 transition-colors">Manaslu Circuit Trek</h3>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-400 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-100 py-16 border-y border-zinc-200">
<div className="max-w-[90rem] mx-auto px-4 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-300/50">
<div className="px-4">
<span className="block text-5xl font-semibold tracking-tight text-orange-500 mb-2">10k+</span>
<span className="text-lg font-medium text-zinc-700">Happy Trekkers</span>
</div>
<div className="px-4">
<span className="block text-5xl font-semibold tracking-tight text-orange-500 mb-2">50+</span>
<span className="text-lg font-medium text-zinc-700">Trekking Routes</span>
</div>
<div className="px-4">
<span className="block text-5xl font-semibold tracking-tight text-orange-500 mb-2">99%</span>
<span className="text-lg font-medium text-zinc-700">Success Rate</span>
</div>
<div className="px-4">
<span className="block text-5xl font-semibold tracking-tight text-orange-500 mb-2">150+</span>
<span className="text-lg font-medium text-zinc-700">Expert Guides</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 py-32 relative overflow-hidden text-white">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=3000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10"></div>
<div className="max-w-[90rem] mx-auto px-4 md:px-8 relative z-10">
<div className="text-center mb-24">
<div className="flex items-center justify-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">How It Works</span>
<div className="h-px w-12 bg-orange-500"></div>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Our Trekking Process</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px border-t-2 border-dashed border-zinc-700 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">

<div className="text-center relative">
<div className="text-9xl font-bold text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 z-0 tracking-tighter">01</div>
<div className="w-24 h-24 bg-orange-500 mx-auto flex items-center justify-center relative z-10 mb-8 [clip-path:polygon(0_0,100%_0,100%_100%,15px_100%,0_calc(100%-15px))]">
<i className="w-10 h-10 text-white" data-lucide="map"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Plan Your Trip</h3>
<p className="text-lg text-zinc-400">Consult with our experts to choose the right trek, customize the itinerary, and prepare necessary permits.</p>
</div>

<div className="text-center relative">
<div className="text-9xl font-bold text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 z-0 tracking-tighter">02</div>
<div className="w-24 h-24 bg-orange-500 mx-auto flex items-center justify-center relative z-10 mb-8 [clip-path:polygon(0_0,100%_0,100%_100%,15px_100%,0_calc(100%-15px))]">
<i className="w-10 h-10 text-white" data-lucide="plane-landing"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Arrive &amp; Briefing</h3>
<p className="text-lg text-zinc-400">Arrive in Kathmandu, get a detailed pre-trek briefing, check equipment, and meet your guide.</p>
</div>

<div className="text-center relative">
<div className="text-9xl font-bold text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 z-0 tracking-tighter">03</div>
<div className="w-24 h-24 bg-orange-500 mx-auto flex items-center justify-center relative z-10 mb-8 [clip-path:polygon(0_0,100%_0,100%_100%,15px_100%,0_calc(100%-15px))]">
<i className="w-10 h-10 text-white" data-lucide="footprints"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Start Trekking</h3>
<p className="text-lg text-zinc-400">Begin your adventure with our expert team, focusing on safety, enjoyment, and cultural immersion.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 relative">
<div className="max-w-[90rem] mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<div className="flex items-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">Our Testimonials</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-xl leading-tight">
                        Trusted by Adventurers Worldwide
                    </h2>
</div>
<div className="flex items-center gap-3 bg-white p-4 shadow-sm border border-zinc-100 rounded-full">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-base">
<span className="font-bold block text-sm">Join our 10k+</span>
<span className="text-zinc-500 text-xs">Satisfied Trekkers</span>
</div>
</div>
</div>
<div className="relative">
<div className="flex gap-8 overflow-hidden">

<div className="w-full md:w-1/2 shrink-0 bg-white p-10 border border-zinc-100 shadow-xl shadow-zinc-200/50 [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)] relative">
<div className="absolute top-0 left-0 w-16 h-16 bg-orange-500 flex items-center justify-center text-white [clip-path:polygon(0_0,100%_0,100%_100%,0_calc(100%-1rem))]">
<i className="w-6 h-6 -translate-y-1" data-lucide="quote"></i>
</div>
<div className="flex gap-1 text-orange-500 mb-6 pl-12">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-4">"Best Experience in the Himalayas"</h4>
<p className="text-lg text-zinc-600 mb-8 italic">"They know the mountains and their approach is highly professional. The guides made sure we were safe, well-fed, and acclimatized. An absolute dream team for EBC."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<h5 className="font-semibold text-lg text-zinc-900">John Smith</h5>
<span className="text-base text-zinc-500">Trekker from UK</span>
</div>
</div>
<i className="absolute bottom-8 right-8 w-24 h-24 text-zinc-100 -z-10" data-lucide="quote"></i>
</div>

<div className="w-full md:w-1/2 shrink-0 bg-white p-10 border border-zinc-100 shadow-xl shadow-zinc-200/50 [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)] relative">
<div className="absolute top-0 left-0 w-16 h-16 bg-orange-500 flex items-center justify-center text-white [clip-path:polygon(0_0,100%_0,100%_100%,0_calc(100%-1rem))]">
<i className="w-6 h-6 -translate-y-1" data-lucide="quote"></i>
</div>
<div className="flex gap-1 text-orange-500 mb-6 pl-12">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight mb-4">"Exceptional Service &amp; Safety"</h4>
<p className="text-lg text-zinc-600 mb-8 italic">"Their attention to detail regarding our health at high altitude was commendable. The Annapurna Circuit was challenging but their support made it enjoyable."</p>
<div className="flex items-center gap-4">
<img alt="User" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<h5 className="font-semibold text-lg text-zinc-900">Sarah Jenkins</h5>
<span className="text-base text-zinc-500">Adventure Blogger</span>
</div>
</div>
<i className="absolute bottom-8 right-8 w-24 h-24 text-zinc-100 -z-10" data-lucide="quote"></i>
</div>
</div>
<button className="absolute top-1/2 -translate-y-1/2 -left-6 w-12 h-12 bg-white border border-zinc-200 shadow-md flex items-center justify-center hover:text-orange-500 transition-colors z-10 hidden md:flex">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<button className="absolute top-1/2 -translate-y-1/2 -right-6 w-12 h-12 bg-orange-500 text-white shadow-md flex items-center justify-center hover:bg-orange-600 transition-colors z-10 hidden md:flex">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<div className="bg-orange-600 text-white py-4 overflow-hidden flex whitespace-nowrap border-y-4 border-orange-700">
<div className="flex items-center animate-[marquee_20s_linear_infinite] gap-12 text-2xl font-medium tracking-wide">
<span>Everest Base Camp</span>
<i className="w-6 h-6" data-lucide="asterisk"></i>
<span>Annapurna Circuit</span>
<i className="w-6 h-6" data-lucide="asterisk"></i>
<span>Langtang Valley</span>
<i className="w-6 h-6" data-lucide="asterisk"></i>
<span>Manaslu Trek</span>
<i className="w-6 h-6" data-lucide="asterisk"></i>
<span>Peak Climbing</span>
<i className="w-6 h-6" data-lucide="asterisk"></i>
<span>Everest Base Camp</span>
<i className="w-6 h-6" data-lucide="asterisk"></i>
<span>Annapurna Circuit</span>
<i className="w-6 h-6" data-lucide="asterisk"></i>
</div>
<style>
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        </style>
</div>

<section className="py-32 bg-white">
<div className="max-w-[90rem] mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="relative h-[700px]">
<img alt="Guide looking at map" className="w-full h-full object-cover [clip-path:polygon(4rem_0,100%_0,100%_100%,0_100%,0_4rem)]" src="https://images.unsplash.com/photo-1543165365-07232ed12fad?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl [clip-path:polygon(1rem_0,100%_0,100%_100%,0_100%,0_1rem)]">
<span className="text-orange-500 font-bold text-xl block mb-1">Need Help?</span>
<span className="text-zinc-600 font-medium">Contact our experts</span>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">Our FAQs</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10 leading-tight">
                        Frequently Asked Questions
                    </h2>
<div className="space-y-4">
<details className="group bg-zinc-50 border border-zinc-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white transition-colors" open="">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-xl">
                                Do I need previous trekking experience?
                                <span className="bg-orange-100 text-orange-500 p-2 rounded-full group-open:bg-orange-500 group-open:text-white transition-colors">
<i className="w-5 h-5 group-open:hidden" data-lucide="plus"></i>
<i className="w-5 h-5 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-4 text-zinc-600 text-lg leading-relaxed">
                                Not necessarily. We offer treks for all levels. While treks like EBC require good fitness, routes like Ghorepani Poon Hill are suitable for beginners. We assess your fitness and recommend the best fit.
                            </p>
</details>
<details className="group bg-zinc-50 border border-zinc-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white transition-colors">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-xl">
                                What is the best time to trek in Nepal?
                                <span className="bg-orange-100 text-orange-500 p-2 rounded-full group-open:bg-orange-500 group-open:text-white transition-colors">
<i className="w-5 h-5 group-open:hidden" data-lucide="plus"></i>
<i className="w-5 h-5 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-4 text-zinc-600 text-lg leading-relaxed">
                                The best seasons are Autumn (Sept-Nov) for clear skies and Spring (March-May) for blooming rhododendrons. Winter is cold but peaceful, while Monsoon (June-Aug) is good for rain-shadow areas like Mustang.
                            </p>
</details>
<details className="group bg-zinc-50 border border-zinc-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white transition-colors">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-xl">
                                How do you handle altitude sickness?
                                <span className="bg-orange-100 text-orange-500 p-2 rounded-full group-open:bg-orange-500 group-open:text-white transition-colors">
<i className="w-5 h-5 group-open:hidden" data-lucide="plus"></i>
<i className="w-5 h-5 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-4 text-zinc-600 text-lg leading-relaxed">
                                Our itineraries include ample acclimatization days. Our guides are trained to recognize early symptoms, carry pulse oximeters, and have protocols in place including immediate descent or helicopter evacuation if necessary.
                            </p>
</details>
<details className="group bg-zinc-50 border border-zinc-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white transition-colors">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-xl">
                                What kind of accommodation is provided?
                                <span className="bg-orange-100 text-orange-500 p-2 rounded-full group-open:bg-orange-500 group-open:text-white transition-colors">
<i className="w-5 h-5 group-open:hidden" data-lucide="plus"></i>
<i className="w-5 h-5 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-4 text-zinc-600 text-lg leading-relaxed">
                                Most treks utilize 'teahouses'—basic but comfortable mountain lodges offering warm beds and hearty local/western meals. For remote treks, we provide full camping gear.
                            </p>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="bg-orange-600 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
<div className="max-w-[90rem] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
<div className="py-20 md:py-32 md:w-1/2">
<div className="flex items-center gap-4 mb-4">
<div className="h-px w-12 bg-white"></div>
<span className="text-white font-medium tracking-widest text-base uppercase">Start Your Adventure</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Ready for the Trek <br/> of a Lifetime?
                </h2>
<p className="text-xl text-orange-100 mb-10 max-w-lg">
                    Join us to explore the majestic Himalayas. We handle the logistics; you focus on the journey.
                </p>
<button className="bg-zinc-900 hover:bg-black text-white px-8 py-4 font-medium transition-colors text-lg flex items-center gap-3 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%,0_calc(100%-12px))]">
                    Book Your Trek Now
                    <div className="bg-white/20 p-1">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</button>
</div>
<div className="md:w-1/2 flex justify-end items-end h-full mt-10 md:mt-0">
<img alt="Trekker pointing" className="w-[80%] max-w-[500px] object-contain drop-shadow-2xl translate-y-8" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 20%)', maskImage: 'linear-gradient(to top, transparent 5%, black 20%)'}}/>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50">
<div className="max-w-[90rem] mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-4 mb-4">
<div className="h-px w-12 bg-orange-500"></div>
<span className="text-orange-500 font-medium tracking-widest text-base uppercase">Our Blog &amp; News</span>
<div className="h-px w-12 bg-orange-500"></div>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Articles &amp; Trekking Tips</h2>
<p className="text-lg text-zinc-600 max-w-2xl mx-auto">Stay updated with the latest trail conditions, gear reviews, and stories from the Himalayas.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group cursor-pointer relative">
<div className="h-[500px] overflow-hidden [clip-path:polygon(3rem_0,100%_0,100%_100%,0_100%,0_3rem)] relative">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-orange-500 text-white p-4 text-center [clip-path:polygon(1rem_0,100%_0,100%_100%,0_100%,0_1rem)] min-w-[5rem]">
<span className="block text-2xl font-bold">23</span>
<span className="block text-sm uppercase">Apr</span>
</div>
</div>
<div className="mt-6">
<div className="flex items-center gap-6 text-base text-zinc-500 mb-3">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="user"></i> By Admin</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="message-square"></i> 02 Comments</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight group-hover:text-orange-500 transition-colors leading-tight">Essential Gear Guide for the Everest Base Camp Trek</h3>
</div>
</div>

<div className="space-y-8">

<div className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
<div className="w-full sm:w-48 h-40 shrink-0 overflow-hidden [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)] relative">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 text-center min-w-[3.5rem]">
<span className="block text-lg font-bold">18</span>
<span className="block text-xs uppercase">Apr</span>
</div>
</div>
<div>
<div className="flex items-center gap-4 text-sm text-zinc-500 mb-2">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-orange-500" data-lucide="user"></i> Admin</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-orange-500" data-lucide="message-square"></i> 05 Comments</span>
</div>
<h4 className="text-xl font-semibold tracking-tight group-hover:text-orange-500 transition-colors mb-2">How to Prevent Altitude Sickness in Nepal</h4>
<p className="text-zinc-600 line-clamp-2 text-base">Learn the crucial steps to acclimatize properly and stay healthy at high altitudes.</p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
<div className="w-full sm:w-48 h-40 shrink-0 overflow-hidden [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)] relative">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 text-center min-w-[3.5rem]">
<span className="block text-lg font-bold">12</span>
<span className="block text-xs uppercase">Apr</span>
</div>
</div>
<div>
<div className="flex items-center gap-4 text-sm text-zinc-500 mb-2">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-orange-500" data-lucide="user"></i> Admin</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-orange-500" data-lucide="message-square"></i> 12 Comments</span>
</div>
<h4 className="text-xl font-semibold tracking-tight group-hover:text-orange-500 transition-colors mb-2">Best Teahouses on the Annapurna Circuit</h4>
<p className="text-zinc-600 line-clamp-2 text-base">Our top picks for comfort, food, and views along the famous Annapurna trail.</p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
<div className="w-full sm:w-48 h-40 shrink-0 overflow-hidden [clip-path:polygon(1.5rem_0,100%_0,100%_100%,0_100%,0_1.5rem)] relative">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 text-center min-w-[3.5rem]">
<span className="block text-lg font-bold">05</span>
<span className="block text-xs uppercase">Apr</span>
</div>
</div>
<div>
<div className="flex items-center gap-4 text-sm text-zinc-500 mb-2">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-orange-500" data-lucide="user"></i> Admin</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-orange-500" data-lucide="message-square"></i> 01 Comments</span>
</div>
<h4 className="text-xl font-semibold tracking-tight group-hover:text-orange-500 transition-colors mb-2">Cultural Etiquette When Trekking in Nepal</h4>
<p className="text-zinc-600 line-clamp-2 text-base">Respect local traditions and make meaningful connections with mountain communities.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-zinc-800 text-zinc-300">
<div className="max-w-[90rem] mx-auto px-4 md:px-8 py-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-700">
<div className="flex items-center gap-4 sm:px-4 py-4 sm:py-0">
<div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded-sm text-orange-500 shrink-0">
<i className="w-6 h-6" data-lucide="phone-call"></i>
</div>
<div>
<span className="block text-base font-semibold text-white mb-1">Call Us</span>
<span className="text-base">+977 980 000 0000</span>
</div>
</div>
<div className="flex items-center gap-4 sm:px-4 py-4 sm:py-0">
<div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded-sm text-orange-500 shrink-0">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<div>
<span className="block text-base font-semibold text-white mb-1">Email Us</span>
<span className="text-base">info@himalayantreks.com</span>
</div>
</div>
<div className="flex items-center gap-4 sm:px-4 py-4 sm:py-0">
<div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded-sm text-orange-500 shrink-0">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<span className="block text-base font-semibold text-white mb-1">Opening Hour</span>
<span className="text-base">Mon - Sun: 08am - 08pm</span>
</div>
</div>
<div className="flex items-center gap-4 sm:px-4 py-4 sm:py-0">
<div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded-sm text-orange-500 shrink-0">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<span className="block text-base font-semibold text-white mb-1">Location</span>
<span className="text-base">Thamel, Kathmandu, Nepal</span>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-zinc-900 text-zinc-400 py-20 border-t border-zinc-800">
<div className="max-w-[90rem] mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 text-white mb-6">
<div className="w-8 h-8 bg-orange-500 flex items-center justify-center [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%,0_80%)]">
<i className="w-5 h-5 text-white" data-lucide="mountain"></i>
</div>
<span className="text-xl font-semibold tracking-tight">HimalayanTreks</span>
</div>
<p className="text-base leading-relaxed mb-6">
                        Your trusted partner for safe, sustainable, and unforgettable adventures in the majestic Himalayas. Let us guide your next journey.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors rounded-sm" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors rounded-sm" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 border border-zinc-700 flex items-center justify-center hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors rounded-sm" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-semibold text-white mb-6 tracking-tight">Our Treks</h4>
<ul className="space-y-4 text-base">
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> Everest Base Camp</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> Annapurna Circuit</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> Langtang Valley</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> Manaslu Circuit</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> Peak Climbing</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold text-white mb-6 tracking-tight">Quick Links</h4>
<ul className="space-y-4 text-base">
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> About Agency</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> Meet Our Guides</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> Contact Us</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> Trekking Preparation</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><i className="w-3 h-3 text-orange-500" data-lucide="chevron-right"></i> FAQs</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold text-white mb-6 tracking-tight">Subscribe Now</h4>
<p className="text-base mb-6">Subscribe to our newsletter &amp; event right now to be updated on new routes and offers.</p>
<form className="flex flex-col gap-3">
<input className="bg-zinc-800 border-none text-white px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none w-full text-base" placeholder="Your email address" type="email"/>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-medium transition-colors text-base flex justify-center items-center gap-2 w-full [clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%-10px))]" type="submit">
                            Subscribe Now
                            <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between text-base gap-4 text-zinc-500">
<p>Copyright 2024 - All Rights Reserved By HimalayanTreks</p>
<div className="flex items-center gap-6">
<a className="hover:text-orange-500 transition-colors" href="#">Privacy policy</a>
<a className="hover:text-orange-500 transition-colors" href="#">Terms of use</a>
<a className="hover:text-orange-500 transition-colors" href="#">Site map</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
