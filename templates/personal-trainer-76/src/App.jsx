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
      

<nav className="absolute top-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 text-white">
<div className="text-3xl font-semibold tracking-tight uppercase flex items-center gap-2">
<i className="w-8 h-8" data-lucide="activity"></i>
            DC
        </div>
<div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-wider">
<a className="hover:text-gray-300 transition-colors" href="#">Home</a>
<a className="hover:text-gray-300 transition-colors" href="#">Services</a>
<a className="hover:text-gray-300 transition-colors" href="#">About</a>
<a className="hover:text-gray-300 transition-colors" href="#">Throne Dynasty</a>
</div>
<div className="flex gap-6">
<a className="hover:text-gray-300 transition-colors" href="#"><i className="w-5 h-5" data-lucide="search"></i></a>
<a className="hover:text-gray-300 transition-colors" href="#"><i className="w-5 h-5" data-lucide="user"></i></a>
<a className="hover:text-gray-300 transition-colors" href="#"><i className="w-5 h-5" data-lucide="shopping-bag"></i></a>
</div>
</nav>

<header className="relative h-screen w-full bg-black">
<div className="absolute inset-0 z-0">
<img alt="Dino Chizinga Training" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="inline-block border border-white/30 text-white text-xs uppercase tracking-wider px-4 py-1.5 mb-6 w-max rounded-full backdrop-blur-sm">
                Accepting New Clients
            </div>
<h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight uppercase leading-[1.1] max-w-4xl">
                Certified Personal Trainer &amp; Head Coach
            </h1>
<p className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl font-medium leading-relaxed">
                @F45 Bedfordview | L1 Hyrox Coach | Nutrition Expert | Sports Recovery Practitioner. Elevate your physical and mental fortitude.
            </p>
<div className="mt-10 flex items-center gap-4">
<a className="bg-white text-black px-8 py-4 text-base font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors" href="#">
                    Book Your Session
                </a>
<div className="flex items-center gap-2 text-white/60 ml-4">
<button className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<div className="flex gap-2">
<span className="w-8 h-1 bg-white rounded-full"></span>
<span className="w-2 h-1 bg-white/30 rounded-full"></span>
<span className="w-2 h-1 bg-white/30 rounded-full"></span>
</div>
<button className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
<h2 className="text-3xl font-semibold tracking-tight">Core Services</h2>
<p className="text-lg text-gray-500 mt-2 font-medium">Tailored programs for peak performance</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Personal Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<span className="absolute bottom-6 left-6 text-white text-lg font-medium">Personal Training</span>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Online Coaching" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<span className="absolute bottom-6 left-6 text-white text-lg font-medium">Online Coaching</span>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Recovery Programs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=2906&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<span className="absolute bottom-6 left-6 text-white text-lg font-medium">Sports Recovery</span>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Nutrition Guidance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=2935&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<span className="absolute bottom-6 left-6 text-white text-lg font-medium">Nutrition Guidance</span>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer bg-gray-100">
<img alt="Throne Dynasty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=2865&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<span className="absolute bottom-6 left-6 text-white text-lg font-medium">Throne Dynasty</span>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] py-24 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-2">The Coach</h2>
<p className="text-lg text-gray-500 mb-10 font-medium">Philosophy &amp; Credentials</p>
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
<img alt="Dino Coaching" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<p className="text-lg font-medium text-gray-500 uppercase tracking-wider mb-2">Founder of Throne Dynasty</p>
<h3 className="text-4xl font-semibold tracking-tight uppercase mb-8">Dino Chizinga</h3>
<p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        My coaching philosophy is built on discipline, faith, and relentless execution. Whether you are preparing for a Hyrox competition, recovering from an injury with compression therapy, or seeking a complete lifestyle transformation, we build the foundation for your dynasty here.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-lg font-medium">
<i className="w-6 h-6 text-black" data-lucide="check"></i>
                            Certified Personal Trainer
                        </li>
<li className="flex items-center gap-4 text-lg font-medium">
<i className="w-6 h-6 text-black" data-lucide="check"></i>
                            Head Coach @ F45 Bedfordview
                        </li>
<li className="flex items-center gap-4 text-lg font-medium">
<i className="w-6 h-6 text-black" data-lucide="check"></i>
                            Level 1 Hyrox Coach
                        </li>
<li className="flex items-center gap-4 text-lg font-medium">
<i className="w-6 h-6 text-black" data-lucide="check"></i>
                            Sports Recovery Practitioner
                        </li>
</ul>
<a className="inline-block border-b-2 border-black pb-1 text-lg font-medium uppercase tracking-wide w-max hover:text-gray-600 hover:border-gray-600 transition-colors" href="#">
                        Read full bio
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 md:px-12 border-b border-gray-100">
<div className="max-w-[1600px] mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Throne Dynasty</h2>
<p className="text-lg text-gray-500 mb-10 font-medium">Christian-themed performance apparel</p>
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mt-10">
<div className="w-full aspect-square bg-[#f9f9f9] flex items-center justify-center p-10 rounded-lg">
<img alt="Throne Dynasty Apparel" className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=2960&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center max-w-lg">
<p className="text-lg font-medium text-gray-500 mb-2">Premium Activewear</p>
<h3 className="text-3xl font-semibold tracking-tight uppercase mb-6">Faith &amp; Iron Performance Tee</h3>
<div className="flex items-baseline gap-3 mb-8">
<span className="text-3xl font-semibold text-red-600">R 650.00</span>
<span className="text-sm text-gray-400 font-medium">including VAT</span>
</div>
<div className="mb-6">
<p className="text-base font-medium mb-3">Color</p>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-black border-2 border-transparent ring-2 ring-black ring-offset-2"></button>
<button className="w-8 h-8 rounded-full bg-white border border-gray-300"></button>
<button className="w-8 h-8 rounded-full bg-gray-500 border border-transparent"></button>
</div>
</div>

<div className="relative w-full border border-gray-300 px-5 py-4 flex justify-between items-center cursor-pointer mb-6 hover:border-black transition-colors">
<span className="text-lg text-gray-500 font-medium">Pick your size</span>
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
</div>
<div className="flex gap-4 w-full">
<button className="flex-1 bg-black text-white py-4 text-base font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors">
                            Shop Now
                        </button>
<button className="flex-1 bg-white border border-black text-black py-4 text-base font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors">
                            View Details
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full flex overflow-hidden bg-black">
<img alt="Gallery 1" className="w-1/5 aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 2" className="w-1/5 aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="w-1/5 aspect-square relative group cursor-pointer bg-gray-900">
<img alt="Gallery 3" className="w-full h-full object-cover group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-white" data-lucide="instagram"></i>
</div>
</div>
<img alt="Gallery 4" className="w-1/5 aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 5" className="w-1/5 aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</section>

<footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-5">
<h3 className="text-3xl font-semibold tracking-tight uppercase mb-2">Ready to transform?</h3>
<p className="text-sm text-gray-400 mb-8 font-medium">Subscribe for fitness tips, recovery advice, and Throne Dynasty updates.</p>
<form className="space-y-4">
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1">
<label className="block text-xs font-medium uppercase tracking-wider mb-2">Email Address*</label>
<input className="w-full bg-white text-black px-4 py-3 text-sm focus:outline-none rounded-none" placeholder="Enter Your Email Address" type="email"/>
</div>
<div className="w-full md:w-1/3">
<label className="block text-xs font-medium uppercase tracking-wider mb-2">Goal*</label>
<input className="w-full bg-white text-black px-4 py-3 text-sm focus:outline-none rounded-none" placeholder="e.g. Hyrox" type="text"/>
</div>
</div>
<button className="w-full border border-white bg-transparent text-white py-3 text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors" type="button">
                        Get Started
                    </button>
</form>
<div className="mt-6 text-xs text-gray-500 leading-relaxed">
                    *Required information. By submitting, you agree to receive coaching insights and promotional material. We value your privacy and keep your information secure. You can unsubscribe at any time.
                </div>
</div>

<div className="md:col-span-2 md:col-start-7">
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Programs</h4>
<ul className="space-y-4 text-sm text-gray-300 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Personal Training</a></li>
<li><a className="hover:text-white transition-colors" href="#">Online Coaching</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hyrox Prep</a></li>
<li><a className="hover:text-white transition-colors" href="#">Compression Boots</a></li>
<li><a className="hover:text-white transition-colors" href="#">Nutrition Plans</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Connect</h4>
<ul className="space-y-4 text-sm text-gray-300 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Contact Form</a></li>
<li><a className="hover:text-white transition-colors" href="#">Linktr.ee</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Throne Dynasty</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div className="md:col-span-2 flex items-end justify-end">
<div className="text-6xl font-semibold tracking-tighter uppercase leading-none opacity-20">
                    DC
                </div>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-20 text-center text-xs text-gray-600 font-medium">
            DINO CHIZINGA © 2024
        </div>
</footer>


    </>
  );
}
