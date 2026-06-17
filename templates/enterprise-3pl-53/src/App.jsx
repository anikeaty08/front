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
colors: {
primary: '#70D9FF',
darkMain: '#038CDB',
offWhite: '#EEEEEE',
black: '#000000',
white: '#FFFFFF',
},
fontFamily: {
serif: ['Noto Serif', 'Georgia', 'serif'],
sans: ['Helvetica', 'Arial', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
},
transitionDuration: {
'400': '400ms',
}
}
}
}



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
      

<nav :className="scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-transparent'" @scroll.window="scrolled = (window.pageYOffset &gt; 50)" className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b" x-data="{ scrolled: false, mobileMenu: false }">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-bold tracking-[0.15em] text-white z-50" href="#">
                LOGISTICS
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-gray-300">
<a className="hover:text-primary transition-colors duration-300" href="#scale">Solutions</a>
<a className="hover:text-primary transition-colors duration-300" href="#tech">Technology</a>
<a className="hover:text-primary transition-colors duration-300" href="#pricing">Network</a>
</div>

<div className="hidden md:block">
<a className="px-6 py-2.5 text-xs font-semibold tracking-wide uppercase bg-primary text-black hover:bg-white transition-all duration-300 rounded-sm" href="#">
                    Log In
                </a>
</div>

<button @click="mobileMenu = !mobileMenu" className="md:hidden text-white z-50 focus:outline-none">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 md:hidden z-40" x-show="mobileMenu" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 -translate-y-5" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 -translate-y-5" x-transition:leave-start="opacity-100 translate-y-0">
<a @click="mobileMenu = false" className="text-2xl font-serif text-white" href="#scale">Solutions</a>
<a @click="mobileMenu = false" className="text-2xl font-serif text-white" href="#tech">Technology</a>
<a @click="mobileMenu = false" className="text-2xl font-serif text-white" href="#pricing">Network</a>
<a className="px-8 py-3 text-sm font-bold bg-primary text-black" href="#">Log In</a>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Logistics Hub" className="w-full h-full object-cover object-center opacity-60" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 fade-in-up">
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-white">
                Unmatched 3PL Pricing &amp; Logistics Advantages — Now For U.S. Businesses
            </h1>
<div className="max-w-2xl mx-auto space-y-2">
<p className="text-lg md:text-xl text-gray-200 font-light tracking-wide">
                    No frills 3PL leveraging intelligent logistics
                </p>
<p className="text-lg md:text-xl text-gray-200 font-light tracking-wide">
                    Get unbeatable rates with unparalleled scale
                </p>
</div>
<div className="pt-6">
<a className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold tracking-widest uppercase hover:bg-primary transition-all duration-300" href="#contact">
                    Contact Sales
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse text-white/50">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</div>
</section>

<section className="relative h-screen min-h-[600px] flex items-center bg-fixed bg-cover bg-center" id="scale" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&amp'}}>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
<div className="md:col-span-1 space-y-6">
<h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white">
                    Built to Scale
                </h1>
<div className="h-0.5 w-12 bg-primary"></div>
<div className="space-y-4 text-lg text-gray-200 font-light leading-relaxed">
<p className="flex items-center gap-3">
<i className="text-primary w-5 h-5" data-lucide="warehouse"></i>
                        10+ distribution centers
                    </p>
<p className="flex items-center gap-3">
<i className="text-primary w-5 h-5" data-lucide="scaling"></i>
                        Up to 1.5 million sq ft per location
                    </p>
<p className="flex items-center gap-3">
<i className="text-primary w-5 h-5" data-lucide="package"></i>
                        Up to 1 million SKUs per location
                    </p>
</div>
</div>
</div>
</section>

<section className="relative h-screen min-h-[600px] flex items-center justify-end bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1566576912906-254331f2501d?q=80&amp'}}>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
<div className="md:col-start-2 space-y-6 md:pl-12 border-l border-white/20">
<h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white">
                    Fulfillment Specialization
                </h1>
<p className="text-xl text-primary font-medium">Specialized distribution centers for:</p>
<ul className="space-y-3 text-lg text-gray-200 font-light">
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 bg-white rounded-full"></span>
                        High-volume, small items
                    </li>
<li className="flex items-start gap-3">
<span className="mt-2 w-1.5 h-1.5 bg-white rounded-full"></span>
                        Large and heavy products
                    </li>
</ul>
</div>
</div>
</section>

<section className="relative h-screen min-h-[600px] flex items-center bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1535985839958-356396e002eb?q=80&amp'}}>
<div className="absolute inset-0 bg-black/50"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6">
<div className="max-w-3xl space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-primary text-xs font-semibold tracking-wider uppercase mb-2">
                    Industry Leading
                </div>
<h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white">
                    Automated Fulfillment
                </h1>
<p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
                    Automated storage, fulfillment, and shipment routing — second only to Amazon’s automation capabilities in the U.S.
                </p>
</div>
</div>
</section>

<section className="relative h-screen min-h-[600px] flex items-center justify-center bg-fixed bg-cover bg-center" id="tech" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp'}}>
<div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
<div className="inline-block mb-6 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
<i className="w-8 h-8 text-primary" data-lucide="network"></i>
</div>
<h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                Tech-Enabled Visibility
            </h1>
<div className="max-w-2xl mx-auto space-y-4">
<p className="text-xl text-gray-100 font-light">
                    Real-time inventory, order, and shipment tracking
                </p>
<div className="h-px w-24 bg-white/20 mx-auto"></div>
<p className="text-lg text-gray-300 font-light">
                    API and EDI integrations through Soapbox OMS
                </p>
</div>
</div>
</section>

<section className="relative h-screen min-h-[600px] flex items-center bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1628131346377-3e5f76b9787e?q=80&amp'}}>
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">

<div className="relative w-full aspect-video border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm flex items-center justify-center">
<div className="flex items-center gap-8 opacity-80">
<i className="w-16 h-16 text-gray-400" data-lucide="package-check"></i>
<i className="w-10 h-10 text-primary animate-pulse" data-lucide="arrow-left-right"></i>
<i className="w-16 h-16 text-white" data-lucide="warehouse"></i>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white">
                    Reverse Logistics
                </h1>
<p className="text-xl text-gray-200 font-light leading-relaxed">
                    Seamless, cost-effective return handling and reintegration. We turn a logistical headache into a streamlined asset recovery process.
                </p>
</div>
</div>
</section>

<section className="relative h-screen min-h-[600px] flex items-center bg-fixed bg-cover bg-center" id="pricing" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6">
<div className="max-w-2xl space-y-8">
<h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight">
                    Competitive Pricing
                </h1>
<div className="space-y-6">
<p className="text-xl text-white font-light leading-relaxed">
                        With <span className="font-medium text-primary">50,000+ shipper customers</span>, our massive scale means unbeatable pricing for U.S. businesses.
                    </p>
<p className="text-2xl font-serif italic text-gray-300">
                        Their advantage is now yours.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EEEEEE] text-black">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-black mb-4">Frequently Asked Questions</h2>
<div className="h-0.5 w-16 bg-primary mx-auto"></div>
</div>

<div className="space-y-4" x-data="{ active: null }">

<div className="border-b border-gray-300 pb-4">
<button @click="active === 1 ? active = null : active = 1" className="w-full flex justify-between items-center text-left py-2 focus:outline-none group">
<span className="text-lg font-medium text-gray-900 group-hover:text-darkMain transition-colors">Why is this 3PL different?</span>
<span className="ml-6 flex-shrink-0 text-primary">
<i :className="active === 1 ? 'rotate-180' : ''" className="w-5 h-5 transition-transform duration-300" data-lucide="chevron-down"></i>
</span>
</button>
<div x-collapse="" x-show="active === 1">
<p className="mt-4 text-gray-600 leading-relaxed font-light">
                            Leverage the power of a 50,000+ customer logistics network now available in the U.S. We combine scale with technology to offer advantages previously reserved for global giants.
                        </p>
</div>
</div>

<div className="border-b border-gray-300 pb-4">
<button @click="active === 2 ? active = null : active = 2" className="w-full flex justify-between items-center text-left py-2 focus:outline-none group">
<span className="text-lg font-medium text-gray-900 group-hover:text-darkMain transition-colors">How are the warehouses specialized and automated?</span>
<span className="ml-6 flex-shrink-0 text-primary">
<i :className="active === 2 ? 'rotate-180' : ''" className="w-5 h-5 transition-transform duration-300" data-lucide="chevron-down"></i>
</span>
</button>
<div x-collapse="" x-show="active === 2">
<p className="mt-4 text-gray-600 leading-relaxed font-light">
                            We utilize large-format networks alongside automated small-item warehouses powered by WinIT Automation, ensuring the right facility handles the right product type for maximum efficiency.
                        </p>
</div>
</div>

<div className="border-b border-gray-300 pb-4">
<button @click="active === 3 ? active = null : active = 3" className="w-full flex justify-between items-center text-left py-2 focus:outline-none group">
<span className="text-lg font-medium text-gray-900 group-hover:text-darkMain transition-colors">How do you offer the steepest discounted shipping rates?</span>
<span className="ml-6 flex-shrink-0 text-primary">
<i :className="active === 3 ? 'rotate-180' : ''" className="w-5 h-5 transition-transform duration-300" data-lucide="chevron-down"></i>
</span>
</button>
<div x-collapse="" x-show="active === 3">
<p className="mt-4 text-gray-600 leading-relaxed font-light">
                            Specialty warehouse volume unlocks industry-best pricing. By aggregating the volume of 50,000+ shippers, we negotiate rates that individual businesses simply cannot access alone.
                        </p>
</div>
</div>

<div className="border-b border-gray-300 pb-4">
<button @click="active === 4 ? active = null : active = 4" className="w-full flex justify-between items-center text-left py-2 focus:outline-none group">
<span className="text-lg font-medium text-gray-900 group-hover:text-darkMain transition-colors">What does “Advantage Unlocked” mean?</span>
<span className="ml-6 flex-shrink-0 text-primary">
<i :className="active === 4 ? 'rotate-180' : ''" className="w-5 h-5 transition-transform duration-300" data-lucide="chevron-down"></i>
</span>
</button>
<div x-collapse="" x-show="active === 4">
<p className="mt-4 text-gray-600 leading-relaxed font-light">
                            This infrastructure was previously available only to overseas businesses — until now. We are bringing these established, high-efficiency logistics rails to U.S. domestic merchants.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative min-h-[60vh] flex items-center justify-center bg-black" id="contact">
<div className="absolute inset-0 z-0">
<img alt="Global Network" className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 space-y-10">
<h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white max-w-4xl mx-auto leading-tight">
                Ready to Optimize Your Logistics?
            </h1>
<a className="inline-block px-10 py-5 bg-primary text-black text-sm font-bold tracking-widest uppercase rounded-sm hover:scale-105 hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(112,217,255,0.3)]" href="#">
                Contact Sales
            </a>
</div>
</section>

<footer className="bg-black text-gray-500 py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<span className="text-white font-bold tracking-[0.15em] text-sm">LOGISTICS</span>
</div>
<div className="text-xs font-light">
                © 2024 Enterprise 3PL. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
