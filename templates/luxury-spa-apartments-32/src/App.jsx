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
      

<header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-32 md:h-40">

<div className="flex items-center gap-2 h-full py-4 shrink-0">
<span className="md:text-4xl text-3xl uppercase hover:scale-105 transition-transform duration-500 cursor-pointer text-white tracking-tight font-serif drop-shadow-md font-extralight">Serene Valley</span>
</div>

<nav className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-2xl font-extralight text-white hover:text-[#ea580c] transition-colors tracking-tight" href="#">Home</a>
<a className="text-xl font-extralight text-white hover:text-[#ea580c] transition-colors tracking-tight" href="#">About Us</a>
<a className="text-xl font-extralight text-white hover:text-[#ea580c] transition-colors tracking-tight" href="#">Services</a>
<a className="text-xl font-extralight text-white hover:text-[#ea580c] transition-colors tracking-tight" href="#">Blog</a>
<a className="text-xl font-extralight text-white hover:text-[#ea580c] transition-colors relative flex flex-col items-center group tracking-tight" href="#">
                        Contact Us
                        <span className="absolute -bottom-1 w-6 h-[1px] bg-[#ea580c]"></span>
</a>
</nav>

<div className="flex items-center gap-4 shrink-0">
<a className="hidden sm:flex items-center gap-2 text-3xl font-extralight text-white hover:text-[#ea580c] transition-colors tracking-tight" href="tel:+254728606726">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
                        +254 728 606 726
                    </a>
<button className="lg:hidden text-white hover:text-[#ea580c] transition-colors">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-[90vh] min-h-[800px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-stone-950">

<img alt="Elegant Living Room" className="w-full h-full object-cover animate-hero-img" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&amp;h=900&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-stone-950/30 pointer-events-none"></div>
<div className="z-10 text-center w-full max-w-7xl mt-32 mx-auto px-6 relative">
<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/30 border border-white/20 backdrop-blur-md mb-8 text-2xl font-extralight tracking-tight text-[#f97316] uppercase shadow-lg">
<i className="w-5 h-5" data-lucide="sofa" strokeWidth="1.5"></i>
                Refined Interior Elegance
            </div>
<h1 className="md:text-8xl lg:text-9xl text-7xl font-extralight text-white tracking-tight font-serif mb-8 drop-shadow-lg">Your Perfect Sanctuary</h1>
<p className="md:text-6xl leading-tight text-5xl text-stone-100 font-thin tracking-tight max-w-5xl mx-auto mb-16 drop-shadow-md">
                Experience unparalleled luxury in our meticulously designed living spaces, combining serene comfort with modern sophistication.
            </p>

<div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-3 max-w-6xl mx-auto shadow-2xl relative">
<div className="absolute -inset-1 bg-gradient-to-r from-[#ea580c]/30 to-transparent blur-2xl rounded-3xl -z-10"></div>
<div className="bg-white/95 rounded-2xl p-2 grid grid-cols-1 md:grid-cols-4 gap-2">
<div className="flex items-center gap-3 px-5 py-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors focus-within:ring-1 focus-within:ring-[#ea580c]/50">
<i className="w-7 h-7 text-stone-400" data-lucide="map-pin" strokeWidth="1.5"></i>
<input className="outline-none placeholder-stone-400 text-3xl font-extralight tracking-tight text-stone-900 bg-transparent w-full" placeholder="Location" type="text"/>
</div>
<div className="flex items-center gap-3 px-5 py-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors focus-within:ring-1 focus-within:ring-[#ea580c]/50">
<i className="w-7 h-7 text-stone-400" data-lucide="calendar" strokeWidth="1.5"></i>
<input className="w-full bg-transparent text-3xl tracking-tight text-stone-900 outline-none placeholder-stone-400 font-extralight" placeholder="Check-in" type="text"/>
</div>
<div className="flex items-center gap-3 px-5 py-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors focus-within:ring-1 focus-within:ring-[#ea580c]/50">
<i className="w-7 h-7 text-stone-400" data-lucide="calendar" strokeWidth="1.5"></i>
<input className="w-full bg-transparent text-3xl tracking-tight text-stone-900 outline-none placeholder-stone-400 font-extralight" placeholder="Check-out" type="text"/>
</div>
<button className="bg-[#ea580c] hover:bg-[#c2410c] text-white px-6 py-4 rounded-xl text-3xl font-extralight tracking-tight transition-all shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2 h-full w-full uppercase">
<i className="w-6 h-6" data-lucide="calendar-plus" strokeWidth="1.5"></i>
                        Book Now
                    </button>
</div>
</div>
</div>
</section>

<div className="flex justify-center -mt-8 relative z-20">
<button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-100 text-stone-400 hover:text-[#ea580c] transition-colors hover:-translate-y-1 duration-300">
<i className="w-8 h-8" data-lucide="arrow-down" strokeWidth="1.5"></i>
</button>
</div>

<section className="py-28 bg-[#f8fafc]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center max-w-5xl mx-auto mb-24">
<p className="font-['Caveat',cursive] text-5xl md:text-6xl text-[#ea580c] mb-6 tracking-tight">Why Choose</p>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1e293b] tracking-tight mb-8">Our Apartments</h2>
<p className="text-4xl text-[#334155] font-extralight mb-6 tracking-tight">Comfort, Convenience &amp; Class in Every Stay</p>
<p className="text-3xl text-[#475569] leading-relaxed max-w-4xl mx-auto font-extralight tracking-tight">
                    At Dunhill Serviced Apartments, we offer beautifully furnished, fully serviced apartments in prime Nairobi locations. Whether you're visiting for business or leisure, enjoy the perfect blend of hotel-like services and the privacy of a home with a view.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="bg-white rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1">
<div className="mb-10 text-[#ea580c]">
<i className="w-20 h-20" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-4xl md:text-5xl font-light text-[#1e293b] tracking-tight mb-6 leading-snug">Modern &amp; Stylish<br/>Living</h3>
<p className="text-3xl text-[#64748b] leading-relaxed mb-10 flex-grow font-extralight tracking-tight">
                        Spacious, stylish apartments with modern amenities, equipped kitchens, and home-like comfort overlooking the city.
                    </p>
<a className="inline-flex items-center gap-2 text-2xl font-extralight tracking-tight text-[#ea580c] hover:text-[#c2410c] transition-colors" href="#">
                        Read More
                        <i className="w-5 h-5 fill-current" data-lucide="play" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1">
<div className="mb-10 text-[#ea580c]">
<i className="w-20 h-20" data-lucide="badge-percent" strokeWidth="1.5"></i>
</div>
<h3 className="text-4xl md:text-5xl font-light text-[#1e293b] tracking-tight mb-6 leading-snug">No Hidden Charges</h3>
<p className="text-3xl text-[#64748b] leading-relaxed mb-10 flex-grow font-extralight tracking-tight">
                        What you see is what you get. No booking fees. No surprise costs. Just great value in top neighborhoods.
                    </p>
<a className="inline-flex items-center gap-2 text-2xl font-extralight tracking-tight text-[#ea580c] hover:text-[#c2410c] transition-colors" href="#">
                        Read More
                        <i className="w-5 h-5 fill-current" data-lucide="play" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white rounded-[2.5rem] p-12 shadow-sm hover:shadow-xl border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1">
<div className="mb-10 text-[#ea580c]">
<i className="w-20 h-20" data-lucide="sun-dim" strokeWidth="1.5"></i>
</div>
<h3 className="text-4xl md:text-5xl font-light text-[#1e293b] tracking-tight mb-6 leading-snug">Personalized Guest<br/>Experience</h3>
<p className="text-3xl text-[#64748b] leading-relaxed mb-10 flex-grow font-extralight tracking-tight">
                        Our team is dedicated to making your stay seamless with tailored support and enjoyable outdoor spaces.
                    </p>
<a className="inline-flex items-center gap-2 text-2xl font-extralight tracking-tight text-[#ea580c] hover:text-[#c2410c] transition-colors" href="#">
                        Read More
                        <i className="w-5 h-5 fill-current" data-lucide="play" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-20">
<div className="flex flex-col items-center justify-center mb-24">
<div className="w-16 h-[1px] bg-stone-400 mb-10"></div>
<h2 className="text-5xl md:text-6xl font-extralight font-serif text-stone-800 tracking-tight uppercase">Signature Retreats</h2>
</div>
<div className="max-w-[95rem] mx-auto px-6 space-y-8">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0e1f1c] rounded-[4rem] overflow-hidden group">
<div className="flex gap-4 p-6 h-[600px] md:h-[750px]">
<img alt="Exterior" className="w-1/2 h-full object-cover rounded-[3rem] transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&amp;q=80"/>
<img alt="Spa" className="w-1/2 h-full object-cover rounded-[3rem] transition-transform duration-700 delay-75 group-hover:scale-105" src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&amp;q=80"/>
</div>
<div className="flex flex-col items-center justify-center p-16 lg:p-32 text-center">
<h3 className="text-5xl lg:text-6xl font-extralight font-serif text-white tracking-tight uppercase mb-10">Dolce Vita Oasis</h3>
<div className="w-24 h-[1px] bg-[#ea580c] mb-8"></div>
<p className="text-2xl font-extralight text-[#ea580c] uppercase tracking-widest mb-12">Exquisitely crafted</p>
<p className="text-5xl lg:text-6xl font-extralight font-serif text-white uppercase tracking-tight leading-snug mb-16 max-w-2xl">
                        1BR + Study, 2BR + Study, 2BR Spa Suites
                    </p>
<div className="flex flex-col items-center gap-4 text-stone-300 mb-16">
<i className="w-10 h-10" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-3xl font-thin tracking-tight">Located in Serene Valley along Mvuli Road.</span>
</div>
<button className="bg-transparent border border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white px-12 py-5 rounded-full text-3xl font-extralight tracking-tight transition-all uppercase flex items-center gap-4">
                        Discover More
                        <i className="w-7 h-7" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0e1f1c] rounded-[4rem] overflow-hidden group">
<div className="flex flex-col items-center justify-center p-16 lg:p-32 text-center order-2 lg:order-1">
<h3 className="text-5xl lg:text-6xl font-extralight font-serif text-white tracking-tight uppercase mb-10">Himalaya Horizon</h3>
<div className="w-24 h-[1px] bg-[#ea580c] mb-8"></div>
<p className="text-2xl font-extralight text-[#ea580c] uppercase tracking-widest mb-12">Exquisitely crafted</p>
<p className="text-5xl lg:text-6xl font-extralight font-serif text-white uppercase tracking-tight leading-snug mb-16 max-w-2xl">
                        Luxury Studios, 1, 2 &amp; 3 Bedroom Penthouse Suites
                    </p>
<div className="flex flex-col items-center gap-4 text-stone-300 mb-16">
<i className="w-10 h-10" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-3xl font-thin tracking-tight">Located in Serene Valley along St Michaels Road.</span>
</div>
<button className="bg-transparent border border-[#ea580c] text-[#ea580c] hover:bg-[#ea580c] hover:text-white px-12 py-5 rounded-full text-3xl font-extralight tracking-tight transition-all uppercase flex items-center gap-4">
                        Discover More
                        <i className="w-7 h-7" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex gap-4 p-6 h-[600px] md:h-[750px] order-1 lg:order-2">
<img alt="Living room" className="w-1/2 h-full object-cover rounded-[3rem] transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&amp;q=80"/>
<img alt="Balcony setup" className="w-1/2 h-full object-cover rounded-[3rem] transition-transform duration-700 delay-75 group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-[95rem] mx-auto px-6 relative">
<div className="relative h-[800px] w-full lg:w-4/5 rounded-[4rem] overflow-hidden">
<img alt="Indoor Pool" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
</div>
<div className="lg:absolute right-6 lg:right-20 top-1/2 lg:-translate-y-1/2 mt-12 lg:mt-0 w-full lg:w-5/12 bg-[#304845]/95 backdrop-blur-2xl p-16 lg:p-32 rounded-[3rem] lg:rounded-[4rem] text-white shadow-2xl">
<h2 className="text-5xl lg:text-7xl font-extralight font-serif text-[#ea580c] tracking-tight mb-12">Why Serene Valley</h2>
<div className="w-20 h-[1px] bg-[#ea580c] mb-12"></div>
<p className="text-3xl md:text-4xl leading-relaxed text-stone-100 font-thin tracking-tight">
                    Our primary objective is to approach the design of every apartment from a holistic perspective, ensuring complete tranquility and supreme comfort, to capture the imagination of those seeking a true sanctuary with expansive views.
                </p>
</div>
</div>
</section>

<section className="py-40 bg-[#0e1f1c] relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-6xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-12 text-[#ea580c] backdrop-blur-sm">
<i className="w-12 h-12" data-lucide="key" strokeWidth="1.5"></i>
</div>
<h2 className="text-6xl md:text-7xl font-extralight font-serif text-white tracking-tight mb-10">Experience Serenity Firsthand</h2>
<p className="text-stone-300 text-5xl md:text-6xl mb-16 font-thin tracking-tight max-w-4xl mx-auto leading-relaxed">
                Ready to find your personal oasis? Secure your booking today or connect directly with our specialized wellness consultants.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
<a className="w-full sm:w-auto px-12 py-6 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-full text-3xl font-extralight tracking-tight transition-all shadow-[0_4px_20px_0_rgba(234,88,12,0.3)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 uppercase" href="#">
<i className="w-7 h-7" data-lucide="calendar-plus" strokeWidth="1.5"></i>
                    Book a Retreat
                </a>
<a className="w-full sm:w-auto px-12 py-6 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full text-3xl font-extralight tracking-tight transition-all hover:-translate-y-1 flex items-center justify-center gap-3 uppercase backdrop-blur-md" href="tel:+254728606726">
<i className="w-7 h-7" data-lucide="phone-call" strokeWidth="1.5"></i>
                    Speak to a Guide
                </a>
</div>
</div>
</section>

<footer className="bg-[#f8f7f5] text-stone-800 pt-28 pb-14">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">

<div className="col-span-1 flex flex-col items-center lg:items-start">
<span className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight uppercase mb-8 drop-shadow-sm cursor-pointer hover:scale-105 transition-transform duration-500 font-extralight">
                        Serene Valley
                    </span>
<p className="text-3xl font-thin tracking-tight text-stone-500 text-center lg:text-left leading-relaxed">Your sanctuary of peace and luxury living with elevated city views.</p>
</div>

<div>
<h3 className="text-3xl font-extralight tracking-tight text-stone-900 mb-10 flex items-center gap-4">
                        Quick Links <span className="w-12 h-[1px] bg-stone-300 block"></span>
</h3>
<ul className="space-y-5">
<li><a className="text-3xl font-thin tracking-tight text-stone-600 hover:text-[#ea580c] transition-colors" href="#">About Us</a></li>
<li><a className="text-3xl font-thin tracking-tight text-stone-600 hover:text-[#ea580c] transition-colors" href="#">Our Suites</a></li>
<li><a className="text-3xl font-thin tracking-tight text-stone-600 hover:text-[#ea580c] transition-colors" href="#">Spa Services</a></li>
<li><a className="text-3xl font-thin tracking-tight text-stone-600 hover:text-[#ea580c] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h3 className="text-3xl font-extralight tracking-tight text-stone-900 mb-10 flex items-center gap-4">
                        Contacts <span className="w-12 h-[1px] bg-stone-300 block"></span>
</h3>
<ul className="space-y-6">
<li className="text-3xl font-thin tracking-tight text-stone-600 leading-relaxed flex gap-4">
<i className="w-7 h-7 text-stone-400 shrink-0 mt-1" data-lucide="map-pin" strokeWidth="1.5"></i>
<span><strong className="font-thin text-stone-800">Address :</strong> Serene Valley, Central District</span>
</li>
<li className="text-3xl font-thin tracking-tight text-stone-600 flex gap-4">
<i className="w-7 h-7 text-stone-400 shrink-0 mt-1" data-lucide="phone" strokeWidth="1.5"></i>
<span>
<strong className="font-thin text-stone-800">Phone :</strong> +254 (0)728 606 726
                            </span>
</li>
<li className="text-3xl font-thin tracking-tight text-stone-600 flex gap-4 items-center">
<i className="w-7 h-7 text-stone-400 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<span><strong className="font-thin text-stone-800">Email :</strong> info@serenevalley.com</span>
</li>
</ul>
</div>

<div>
<h3 className="text-3xl font-extralight tracking-tight text-stone-900 mb-10 flex items-center gap-4">
                        Working Hours <span className="w-12 h-[1px] bg-stone-300 block"></span>
</h3>
<div className="space-y-6 text-3xl font-thin tracking-tight text-stone-600">
<div className="flex items-center gap-4">
<i className="w-7 h-7 text-stone-400" data-lucide="clock" strokeWidth="1.5"></i>
<p>Monday - Friday <br/><span className="text-stone-400">08.00 - 20.00</span></p>
</div>
<div className="flex items-center gap-4">
<i className="w-7 h-7 text-stone-400" data-lucide="clock" strokeWidth="1.5"></i>
<p>Weekend <br/><span className="text-stone-400">09.00 - 18.00</span></p>
</div>
</div>
</div>
</div>

<div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-2xl font-thin tracking-tight text-stone-500">
                    © 2026 Serene Valley Apartments &amp; Spa. All rights reserved.
                </p>
<div className="flex items-center gap-10 text-stone-400">
<a className="hover:text-[#ea580c] transition-transform hover:-translate-y-1" href="#">
<i className="w-8 h-8" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="hover:text-[#ea580c] transition-transform hover:-translate-y-1" href="#">
<i className="w-7 h-7" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="hover:text-[#ea580c] transition-transform hover:-translate-y-1" href="#">
<i className="w-8 h-8" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
