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
      

<nav className="z-50 md:px-12 w-full border-white/10 border-b pt-6 pr-6 pb-6 pl-6 absolute top-0">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">

<a className="flex items-center gap-3 group" href="index.html">
<div className="bg-green-800/80 p-2 rounded-sm backdrop-blur-sm border border-white/20 group-hover:bg-green-800 transition-colors">
<iconify-icon className="text-amber-400 text-2xl" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white font-serif tracking-widest uppercase text-sm hidden md:block">
            Kingdom Cuts
          </span>
</a>

<div className="hidden md:flex gap-8 text-white/80 text-sm font-medium tracking-wide">
<a className="hover:text-amber-400 transition-colors" href="index.html">HOME</a>
<a className="hover:text-amber-400 transition-colors text-amber-400" href="services.html">
            SERVICES
          </a>
<a className="hover:text-amber-400 transition-colors" href="about.html">ABOUT</a>
<a className="hover:text-amber-400 transition-colors" href="gallery.html">GALLERY</a>
</div>

<a className="bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold py-2 px-5 rounded-sm transition-colors tracking-wide" href="booking.html">
          BOOK NOW
        </a>
</div>
</nav>

<header className="relative bg-[#0F1524] h-[50vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Barber Tools" className="w-full h-full object-cover opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F1524] to-transparent"></div>
</div>
<div className="z-10 text-center px-6 relative">
<span className="text-amber-500 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
          Menu &amp; Pricing
        </span>
<h1 className="text-5xl md:text-6xl text-white font-serif tracking-tight mb-4">
          Service Menu
        </h1>
<p className="text-slate-400 text-lg font-light max-w-lg mx-auto">
          Expert grooming services tailored to your lifestyle. Precision, style,
          and luxury in every detail.
        </p>
</div>
</header>

<div className="h-3 w-full barber-stripe"></div>

<section className="bg-white pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 md:px-12">

<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 tracking-tight">
            Grooming Services
          </h2>
<div className="w-16 h-1 bg-amber-400 mx-auto mb-6"></div>
<p className="text-slate-500 font-light max-w-2xl mx-auto">
            All services include a personal consultation to tailor the look to
            your features and lifestyle.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

<div>
<div className="flex items-end gap-4 mb-8 border-b border-slate-200 pb-2">
<h3 className="text-2xl font-serif text-slate-900 tracking-tight">The Cuts</h3>
</div>
<ul className="space-y-8">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Kingdom Classic
                  </span>
<span className="font-serif text-amber-600 text-lg">$45</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                  Signature cut. Includes shampoo, precision shear/clipper work,
                  hot towel finish, and styling.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Skin Fade
                  </span>
<span className="font-serif text-amber-600 text-lg">$50</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                  Seamless fade down to skin using foil shavers or straight
                  razor. Wash included.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Buzz Cut
                  </span>
<span className="font-serif text-amber-600 text-lg">$30</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                  Single guard all over with a tapered neck and line-up.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Young Kings
                  </span>
<span className="font-serif text-amber-600 text-lg">$35</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                  For princes under 12. Classic cut and style.
                </p>
</li>
</ul>
</div>

<div>
<div className="flex items-end gap-4 mb-8 border-b border-slate-200 pb-2">
<h3 className="text-2xl font-serif text-slate-900 tracking-tight">
                Shave &amp; Beard
              </h3>
</div>
<ul className="space-y-8">
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Royal Shave
                  </span>
<span className="font-serif text-amber-600 text-lg">$55</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                  Traditional straight razor shave with pre-shave oil, hot
                  towels, and essential oils.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Beard Sculpting
                  </span>
<span className="font-serif text-amber-600 text-lg">$35</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                  Shape, trim, and detail your beard. Includes line-up and beard
                  oil application.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Head Shave
                  </span>
<span className="font-serif text-amber-600 text-lg">$50</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                  Full hot towel straight razor shave for the scalp.
                </p>
</li>
<li className="group">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                    Line Up
                  </span>
<span className="font-serif text-amber-600 text-lg">$20</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                  Crisp perimeter lines only. Razor finish included.
                </p>
</li>
</ul>
</div>
</div>

<div className="mt-20">
<h3 className="text-2xl font-serif text-slate-900 mb-8 text-center tracking-tight">
            The Royal Treatment
          </h3>
<div className="grid md:grid-cols-2 gap-6">

<a className="bg-slate-50 p-8 border border-slate-200 hover:border-amber-400 transition-colors group cursor-pointer block" href="booking.html">
<div className="flex justify-between items-start mb-4">
<h4 className="font-semibold text-xl text-slate-900 tracking-tight">The Full Crown</h4>
<span className="bg-slate-900 text-amber-500 text-xs font-semibold px-2 py-1 uppercase tracking-widest">
                  $90
                </span>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Combine our Kingdom Classic Cut with a Royal Shave for the
                ultimate grooming session. Relax and rejuvenate.
              </p>
<span className="text-xs font-semibold uppercase tracking-widest text-amber-600 group-hover:text-amber-500 transition-colors">
                Book Appointment →
              </span>
</a>

<a className="bg-[#0B101E] p-8 border border-slate-800 hover:border-amber-500/50 transition-colors group cursor-pointer block" href="booking.html">
<div className="flex justify-between items-start mb-4">
<h4 className="font-semibold text-xl text-white tracking-tight">The Groom</h4>
<span className="bg-amber-500 text-slate-900 text-xs font-semibold px-2 py-1 uppercase tracking-widest">
                  $120
                </span>
</div>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Haircut + Shave + Facial. The premier package to prepare you for
                your wedding or special event.
              </p>
<span className="text-xs font-semibold uppercase tracking-widest text-white group-hover:text-amber-400 transition-colors">
                Book Appointment →
              </span>
</a>
</div>
</div>
</div>
</section>

<div className="h-3 w-full barber-stripe"></div>

<footer className="bg-[#0B101E] text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<a className="bg-green-900/40 p-4 inline-block mb-6 border border-white/5 hover:bg-green-900/60 transition-colors" href="index.html">
<iconify-icon className="text-slate-300 text-3xl" icon="solar:crown-linear"></iconify-icon>
</a>
<p className="text-sm leading-relaxed mb-6">
              The premier destination for the modern man. Experience luxury,
              precision, and tradition in the heart of North Carolina.
            </p>
</div>

<div>
<h4 className="text-amber-500 font-serif text-lg mb-6">
              Hours of Operation
            </h4>
<ul className="space-y-3 text-sm">
<li className="flex justify-between">
<span>Mon - Fri:</span>
<span className="text-slate-200">9am - 8pm</span>
</li>
<li className="flex justify-between">
<span>Saturday:</span>
<span className="text-slate-200">8am - 6pm</span>
</li>
<li className="flex justify-between">
<span>Sunday:</span>
<span className="text-slate-200">10am - 4pm</span>
</li>
</ul>
</div>

<div>
<h4 className="text-amber-500 font-serif text-lg mb-6">
              Visit The Kingdom
            </h4>
<ul className="space-y-3 text-sm">
<li>123 Regent Street,<br/>Durham, NC 27701</li>
<li className="mt-4"><a className="hover:text-amber-400 transition-colors" href="tel:+15550000000">(555) 123-4567</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="mailto:info@kingdomcuts.com">info@kingdomcuts.com</a></li>
</ul>
</div>

<div>
<h4 className="text-amber-500 font-serif text-lg mb-6">
              Join The Court
            </h4>
<div className="flex gap-2 mb-6">
<a className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors text-xs text-white" href="https://facebook.com" target="_blank">
                FB
              </a>
<a className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors text-xs text-white" href="https://instagram.com" target="_blank">
                IG
              </a>
<a className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors text-xs text-white" href="https://twitter.com" target="_blank">
                TW
              </a>
</div>
<a className="w-full block text-center bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold py-3 text-xs tracking-widest uppercase transition-colors rounded-sm" href="booking.html">
              Book Appointment
            </a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide text-slate-600">
<p>
            © 2023 Kingdom Cuts Barber &amp; Salon. All Rights Reserved. Long
            Live The King.
          </p>
</div>
</div>
</footer>

    </>
  );
}
