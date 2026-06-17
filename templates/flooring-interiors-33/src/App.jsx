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
      

<nav className="fixed w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-24">

<div className="flex-shrink-0 flex items-center gap-3">
<span className="serif text-3xl tracking-tight text-stone-800 font-medium italic">floor'd.</span>
</div>

<div className="hidden md:flex items-center space-x-10">
<a className="text-lg font-normal text-stone-600 hover:text-stone-900 transition-colors" href="#collections">Collections</a>
<a className="text-lg font-normal text-stone-600 hover:text-stone-900 transition-colors" href="#about">Our Approach</a>
<a className="text-lg font-normal text-stone-600 hover:text-stone-900 transition-colors" href="#stories">Stories</a>
<a className="text-lg font-normal text-[#8C8C7A] hover:text-[#6B6B5C] transition-colors flex items-center gap-2" href="#private-studio">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                        The Studio
                    </a>
</div>

<div className="hidden md:flex">
<a className="px-8 py-3 bg-[#4A4A40] text-[#F9F4F0] text-lg rounded-full hover:bg-[#383830] transition-all duration-300 font-normal shadow-sm hover:shadow-md" href="#contact">
                        Start Your Project
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-600 hover:text-stone-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Warm cozy living room with wood floors" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&amp;w=3270&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#F9F4F0]/90 via-[#F9F4F0]/40 to-[#F9F4F0]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-[#EBE5DE] text-[#8C8C7A] text-sm mb-10 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#A5A593]"></span>
<span className="tracking-wide uppercase text-xs font-medium">Est. 2024</span>
</div>
<h1 className="text-5xl lg:text-8xl font-medium tracking-tight text-[#2C2C24] mb-8 serif leading-[1.05]">
                Make room for <br className="hidden lg:block"/> <span className="italic text-[#8C8C7A]">beautiful</span> living.
            </h1>
<p className="mt-6 max-w-2xl mx-auto text-xl lg:text-2xl text-stone-600 font-light leading-relaxed">
                Flooring is more than a surface—it's the foundation of your family's memories. From sun-drenched hardwoods to the softest wool carpets, we help you create a home that feels as good as it looks.
            </p>
<div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
<a className="w-full sm:w-auto px-10 py-4 bg-[#4A4A40] text-[#F9F4F0] text-lg rounded-full hover:bg-[#383830] transition-colors flex items-center justify-center gap-3 group shadow-lg shadow-[#4A4A40]/10" href="#collections">
                    Browse Collections
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-10 py-4 bg-white border border-[#E5E0DA] text-[#4A4A40] text-lg rounded-full hover:bg-[#FAF9F6] transition-colors flex items-center justify-center gap-2 shadow-sm" href="#process">
<i className="w-4 h-4 text-[#A5A593]" data-lucide="play-circle"></i>
                    See Our Process
                </a>
</div>
</div>
</header>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative pl-4 pt-4">
<div className="absolute top-0 left-0 w-full h-full border border-[#EBE5DE] rounded-2xl -translate-x-4 -translate-y-4"></div>
<div className="aspect-[4/5] rounded-xl overflow-hidden relative group shadow-2xl shadow-stone-200">
<img alt="Sunlit living room with warm wood floors" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&amp;w=2834&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#F9F4F0] rounded-full flex items-center justify-center p-6 text-center shadow-xl hidden lg:flex">
<p className="serif text-xl italic text-[#4A4A40] leading-snug">"The details are not the details. They make the design."</p>
</div>
</div>
<div className="order-first lg:order-last">
<span className="text-[#8C8C7A] font-medium tracking-widest uppercase text-xs mb-4 block">Our Philosophy</span>
<h2 className="serif text-4xl lg:text-6xl text-[#2C2C24] tracking-tight mb-8">Guided by design,<br/>grounded in comfort.</h2>
<p className="text-xl text-stone-600 font-light leading-relaxed mb-10">
                        We believe that choosing flooring should be as enjoyable as living on it. Whether you're refreshing a nursery, renovating a kitchen, or building your dream home, our curated selection is designed to simplify the overwhelming and highlight the exquisite.
                    </p>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="flex-shrink-0 mt-1">
<div className="w-12 h-12 rounded-full bg-[#F4F1ED] group-hover:bg-[#EBE5DE] transition-colors flex items-center justify-center text-[#4A4A40]">
<i className="w-5 h-5" data-lucide="coffee"></i>
</div>
</div>
<div>
<h4 className="text-2xl serif text-[#2C2C24]">Everyday Essentials</h4>
<p className="text-lg text-stone-500 font-light mt-2">Durable, beautiful luxury vinyl and laminates that stand up to pets, playdates, and spilled coffee.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="flex-shrink-0 mt-1">
<div className="w-12 h-12 rounded-full bg-[#F4F1ED] group-hover:bg-[#EBE5DE] transition-colors flex items-center justify-center text-[#4A4A40]">
<i className="w-5 h-5" data-lucide="sparkle"></i>
</div>
</div>
<div>
<h4 className="text-2xl serif text-[#2C2C24]">The Designer Edit</h4>
<p className="text-lg text-stone-500 font-light mt-2">Hand-scraped hardwoods, artisanal tiles, and wool carpets for those rooms that deserve a little extra drama.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-[#F9F4F0]" id="collections">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-[#8C8C7A] font-medium tracking-widest uppercase text-xs mb-3 block">Material Library</span>
<h2 className="serif text-4xl lg:text-5xl text-[#2C2C24] tracking-tight">Textures &amp; Tones</h2>
<p className="mt-4 text-xl text-stone-500 font-light">Explore our hand-picked favorites, organized by feel and function.</p>
</div>
<a className="text-[#4A4A40] border-b border-[#4A4A40] pb-1 hover:text-black transition-colors text-lg" href="#">View Full Catalog</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
<img alt="Warm Hardwood Flooring" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1574353457199-a657c9634e56?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-3xl text-[#2C2C24] group-hover:italic transition-all">Natural Wood</h3>
<p className="text-stone-500 text-lg mt-2 font-light">White Oak, Walnut, Maple</p>
</div>
<div className="w-12 h-12 rounded-full border border-[#D6D6C8] flex items-center justify-center group-hover:bg-[#4A4A40] group-hover:border-[#4A4A40] group-hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group cursor-pointer md:translate-y-16">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
<img alt="Soft Textured Carpet" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-3xl text-[#2C2C24] group-hover:italic transition-all">Soft Surfaces</h3>
<p className="text-stone-500 text-lg mt-2 font-light">Loop, Plush, Patterned Wool</p>
</div>
<div className="w-12 h-12 rounded-full border border-[#D6D6C8] flex items-center justify-center group-hover:bg-[#4A4A40] group-hover:border-[#4A4A40] group-hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
<img alt="Elegant Stone Tile" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1600566753086-00f18cf6b3ea?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-3xl text-[#2C2C24] group-hover:italic transition-all">Stone &amp; Tile</h3>
<p className="text-stone-500 text-lg mt-2 font-light">Limestone, Marble, Porcelain</p>
</div>
<div className="w-12 h-12 rounded-full border border-[#D6D6C8] flex items-center justify-center group-hover:bg-[#4A4A40] group-hover:border-[#4A4A40] group-hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sage-bg py-24 lg:py-32" id="stories">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
<div className="lg:w-1/3 text-right lg:text-right">
<h2 className="serif text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] opacity-95">
                        hundreds of<br/>happy<br/><span className="italic text-[#E8E8E0]">families</span>
</h2>
</div>
<div className="lg:w-2/3 grid md:grid-cols-2 gap-12 lg:gap-16 pt-4">

<div>
<i className="w-10 h-10 text-white/40 mb-6 fill-current rotate-180" data-lucide="quote"></i>
<p className="text-xl text-[#F0F0E8] leading-relaxed font-light mb-8">
                            "They stuck to our agreed-upon budget and went out of their way to help us find exactly what we wanted for our new nursery. We are thrilled with the softness of the carpet and have already recommended them to our neighbors."
                        </p>
<div>
<p className="serif text-2xl text-white mb-1">Sarah J.</p>
<p className="text-xs tracking-widest uppercase text-white/60 font-medium">Local Homeowner</p>
</div>
</div>

<div>
<i className="w-10 h-10 text-white/40 mb-6 fill-current rotate-180" data-lucide="quote"></i>
<p className="text-xl text-[#F0F0E8] leading-relaxed font-light mb-8">
                            "I am highly impressed; amazing customer service, beautiful flooring options, and fast installation. All my questions about durability were answered with patience, and the final look transformed our entire downstairs."
                        </p>
<div>
<p className="serif text-2xl text-white mb-1">Mindy M.</p>
<p className="text-xs tracking-widest uppercase text-white/60 font-medium">Interior Enthusiast</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-[#2A2624]" id="private-studio">
<div className="absolute inset-0 opacity-20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&amp;w=2836&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#E5E0DA] text-sm mb-8">
<i className="w-3 h-3" data-lucide="gem"></i>
<span className="tracking-widest uppercase text-xs font-medium">Bespoke Services</span>
</div>
<h2 className="serif text-5xl lg:text-7xl text-[#F5F2EE] tracking-tight mb-8">The Design Studio.</h2>
<p className="text-xl text-[#ABA8A0] font-light leading-relaxed mb-10 max-w-lg">
                        For those seeking something truly unique. Access our library of limited-run imports, custom-stained hardwoods, and artisan mosaics. A private consultation space where your vision has no limits.
                    </p>
<button className="px-10 py-4 bg-[#A5A593] text-white text-lg rounded-full hover:bg-[#949483] transition-all duration-300 font-normal tracking-wide flex items-center justify-center gap-3">
                        Request Studio Access
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="lg:w-1/2 w-full">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-12 relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="h-40 rounded-lg overflow-hidden relative">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-48 rounded-lg overflow-hidden relative">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1597218868425-62128e6c7886?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4">
<div className="h-48 rounded-lg overflow-hidden relative">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1595515106968-d055a6d58548?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-40 rounded-lg overflow-hidden relative">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1616469829581-73943f445302?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-12 lg:gap-8">
<div className="text-center group p-6 rounded-2xl hover:bg-[#F9F4F0] transition-colors duration-500">
<div className="mx-auto w-14 h-14 rounded-full bg-[#F4F1ED] flex items-center justify-center text-[#4A4A40] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart"></i>
</div>
<h3 className="serif text-2xl text-[#2C2C24] mb-3">Heartfelt Service</h3>
<p className="text-stone-500 text-lg font-light leading-relaxed">We listen more than we speak. Understanding your lifestyle allows us to recommend floors you'll love for years.</p>
</div>
<div className="text-center group p-6 rounded-2xl hover:bg-[#F9F4F0] transition-colors duration-500">
<div className="mx-auto w-14 h-14 rounded-full bg-[#F4F1ED] flex items-center justify-center text-[#4A4A40] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<h3 className="serif text-2xl text-[#2C2C24] mb-3">Meticulous Install</h3>
<p className="text-stone-500 text-lg font-light leading-relaxed">Our craftsmen treat your home with the utmost respect, ensuring a clean, precise, and timely installation.</p>
</div>
<div className="text-center group p-6 rounded-2xl hover:bg-[#F9F4F0] transition-colors duration-500">
<div className="mx-auto w-14 h-14 rounded-full bg-[#F4F1ED] flex items-center justify-center text-[#4A4A40] mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sun"></i>
</div>
<h3 className="serif text-2xl text-[#2C2C24] mb-3">Transparent Value</h3>
<p className="text-stone-500 text-lg font-light leading-relaxed">Honest pricing without hidden fees. We work to maximize the impact of your budget without compromising quality.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9F4F0]" id="contact">
<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
<span className="text-[#8C8C7A] font-medium tracking-widest uppercase text-xs mb-6 block">Let's Connect</span>
<h2 className="serif text-4xl lg:text-5xl text-[#2C2C24] tracking-tight mb-6">Ready to transform your space?</h2>
<p className="text-xl text-stone-600 font-light mb-12">Whether you're just gathering ideas or ready to install, we'd love to chat about your project over a coffee.</p>
<form className="space-y-4 text-left max-w-lg mx-auto">
<div className="grid grid-cols-2 gap-4">
<input className="w-full px-5 py-4 bg-white border border-[#EBE5DE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A5A593] placeholder:text-[#BDBDA8] font-light text-lg" placeholder="First Name" type="text"/>
<input className="w-full px-5 py-4 bg-white border border-[#EBE5DE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A5A593] placeholder:text-[#BDBDA8] font-light text-lg" placeholder="Last Name" type="text"/>
</div>
<input className="w-full px-5 py-4 bg-white border border-[#EBE5DE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A5A593] placeholder:text-[#BDBDA8] font-light text-lg" placeholder="Email Address" type="email"/>
<button className="w-full py-5 bg-[#4A4A40] text-[#F9F4F0] text-lg rounded-xl hover:bg-[#383830] transition-colors shadow-lg shadow-[#4A4A40]/10 mt-2" type="button">
                    Schedule Free Consultation
                </button>
</form>
<p className="mt-8 text-stone-400 text-sm font-light">Prefer to call? We're at <span className="text-[#4A4A40] font-medium ml-1">507.216.8787</span></p>
</div>
</section>

<footer className="bg-white border-t border-[#F0F0E8] py-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="serif text-2xl tracking-tight text-stone-800 font-medium italic">floor'd.</span>
</div>
<div>
<h4 className="font-medium text-[#2C2C24] mb-4">Explore</h4>
<ul className="space-y-2 text-stone-500 font-light">
<li><a className="hover:text-[#A5A593] transition-colors" href="#">Collections</a></li>
<li><a className="hover:text-[#A5A593] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#A5A593] transition-colors" href="#">The Studio</a></li>
<li><a className="hover:text-[#A5A593] transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-[#2C2C24] mb-4">Visit Us</h4>
<p className="text-stone-500 font-light leading-relaxed">
                        1219 7th St NW,<br/>
                        Rochester, MN 55901
                    </p>
</div>
<div>
<h4 className="font-medium text-[#2C2C24] mb-4">Hours</h4>
<ul className="space-y-1 text-stone-500 font-light">
<li className="flex justify-between"><span>Mon—Fri</span> <span>10:30—5:30</span></li>
<li className="flex justify-between"><span>Saturday</span> <span>9:00—3:00</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-[#F0F0E8] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-[#8C8C7A] text-sm font-light">© 2024 floor'd. Designed with care.</span>
<div className="flex gap-6">
<a className="text-[#BDBDA8] hover:text-[#4A4A40] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-[#BDBDA8] hover:text-[#4A4A40] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-[#BDBDA8] hover:text-[#4A4A40] transition-colors" href="#"><i className="w-5 h-5" data-lucide="pinterest"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
