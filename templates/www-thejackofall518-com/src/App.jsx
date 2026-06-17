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
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.
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
      

<div className="bg-white border-b border-gray-100 py-3 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium text-gray-500">
<div className="flex items-center gap-4">
<div className="flex gap-3">
<a className="hover:text-brand-orange transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-brand-orange transition-colors" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2 font-geist"><svg className="lucide lucide-phone w-4 h-4 text-brand-orange" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> (702) 595-1710</span>
<span className="flex items-center gap-2 font-geist"><svg className="lucide lucide-clock w-4 h-4 text-brand-orange" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Available 24/7</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2" href="#">


<img alt="The Jackofall 518 Logo" className="w-auto h-12 object-contain" src="https://placehold.co/220x60/white/FF4D00?text=THE+JACKOFALL+518&amp;font=roboto"/>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-brand-orange transition-colors font-geist" href="#">About</a>
<a className="hover:text-brand-orange transition-colors font-geist" href="#">Services</a>
<a className="hover:text-brand-orange transition-colors font-geist" href="#">Projects</a>
<a className="hover:text-brand-orange transition-colors font-geist" href="#">FAQ</a>
<a className="hover:text-brand-orange transition-colors font-geist" href="#">Contact</a>
</div>
<button className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 font-geist shadow-lg shadow-brand-orange/20">
                Get a Quote
            </button>
<button className="lg:hidden text-brand-dark">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="overflow-hidden pt-20 pb-32 relative">

<div className="absolute left-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-element in-view">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-brand-orange"></span>
<span className="text-brand-orange text-xs font-medium tracking-widest uppercase font-geist">Professional Handyman Services</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 font-space-grotesk font-semibold uppercase">
                    Just One Call <br/><span className="text-brand-orange">Does It All</span>
</h1>
<p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-geist">
                    Electrical, plumbing, remodeling, power washing, and general maintenance. We handle it all for residential and commercial properties.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 font-geist">
                        (702) 595-1710 <div className="bg-white/20 p-1 rounded-full"><svg className="lucide lucide-phone w-3 h-3" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></div>
</button>
<button className="hover:border-gray-500 transition-colors text-sm font-medium text-white font-geist border-gray-700 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8">
                        View Our Services
                    </button>
</div>
<div className="mt-16 pt-8 border-t border-gray-800 grid sm:grid-cols-2 gap-8">

<div className="flex gap-4 reveal-element delay-100 in-view">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover grayscale opacity-80 border border-gray-700" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="">
<div className="flex text-brand-orange mb-1">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h4 className="text-white text-sm font-medium mb-1 font-geist">Fixed my plumbing issue!</h4>
<p className="text-xs text-gray-500 leading-snug font-geist">"They came on time and fixed the leak and the drywall."</p>
</div>
</div>

<div className="flex gap-4 reveal-element delay-200">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover grayscale opacity-80 border border-gray-700" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="">
<div className="flex text-brand-orange mb-1">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h4 className="text-white text-sm font-medium mb-1 font-geist">Great remodeling work</h4>
<p className="text-xs text-gray-500 leading-snug font-geist">"Professional, punctual, and highly skilled team."</p>
</div>
</div>
</div>
</div>
<div className="relative reveal-element delay-300">
<div className="absolute inset-0 bg-brand-orange/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
<div className="relative rounded-3xl overflow-hidden h-[600px] border border-gray-800">
<img alt="Handyman at work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540660290370-8aa90e95168f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>

<div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-gray-700 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-wrench w-6 h-6" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<span className="text-white font-bold text-lg font-space-grotesk">THE JACKOFALL 518</span>
</div>
<p className="text-gray-400 text-sm">Quality craftsmanship for every corner of your home.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 reveal-element mb-16 gap-x-6 gap-y-6 justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-orange"></span>
<span className="text-brand-orange text-xs font-medium tracking-widest uppercase font-geist">Our Services</span>
</div>
<h2 className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold uppercase">What We Do</h2>
</div>
<p className="max-w-md text-gray-500 text-base leading-relaxed font-geist">
                    From fixing a leaky faucet to a complete room remodel, we provide comprehensive services for all your property needs.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-100">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Electrical Repairs</span>
<svg className="lucide lucide-zap text-brand-orange w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-100">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581094794329-cd136ce404da?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Plumbing Services</span>
<svg className="lucide lucide-droplet text-brand-orange w-5 h-5" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-100">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Remodeling Projects</span>
<svg className="lucide lucide-paint-roller text-brand-orange w-5 h-5" data-lucide="paint-roller" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="16" x="2" y="2"></rect><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect height="12" rx="1" width="4" x="8" y="10"></rect></svg>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-200">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1606166325683-e6eb69d20660?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Power Washing</span>
<svg className="lucide lucide-waves text-brand-orange w-5 h-5" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-200">
<img className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">General Maintenance</span>
<svg className="lucide lucide-hammer text-brand-orange w-5 h-5" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path><path d="M17.64 15 22 10.64"></path><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V7.86c0-.55-.45-1-1-1H14.14c-.83 0-1.64.32-2.25.92l-1.25 1.25"></path></svg>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Commercial Services</span>
<svg className="lucide lucide-building-2 text-brand-orange w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
</div>
</div>
<div className="mt-12 reveal-element">
<button className="bg-brand-orange text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors inline-flex items-center gap-2 font-geist">
                    All Services <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="relative h-[300px] w-full reveal-element">
<svg className="w-full h-full text-gray-700 fill-current opacity-40" viewbox="0 0 400 250">

<defs>
<pattern height="10" id="dotPattern" patternunits="userSpaceOnUse" width="10" x="0" y="0">
<circle cx="2" cy="2" fill="currentColor" r="1.5"></circle>
</pattern>
</defs>
<path className="" d="M20,50 Q50,20 100,30 T180,60 T250,40 T350,60 L380,150 Q300,200 200,180 T50,150 Z" fill="url(#dotPattern)"></path>
<circle className="text-brand-orange fill-current animate-ping" cx="280" cy="100" r="4"></circle>
<circle className="text-brand-orange fill-current" cx="280" cy="100" r="4"></circle>
</svg>
</div>
<div className="reveal-element">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-orange"></span>
<span className="text-brand-orange text-xs font-medium tracking-widest uppercase font-geist">Service Area</span>
</div>
<h2 className="text-4xl tracking-tight mb-6 font-space-grotesk font-semibold uppercase">Serving The Community</h2>
<p className="text-gray-400 mb-10 text-base leading-relaxed font-geist">
                    We proudly serve the entire region. From residential homes to commercial complexes, our team is ready to respond to your calls promptly.
                </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-800">
<div>
<span className="block text-4xl text-white mb-2 font-space-grotesk font-semibold">100%</span>
<span className="text-sm text-gray-500 font-geist">Satisfaction Guarantee</span>
</div>
<div>
<span className="block text-4xl text-white mb-2 font-space-grotesk font-semibold">24/7</span>
<span className="text-sm text-gray-500 font-geist">Emergency Availability</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between mb-16 gap-10 reveal-element">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-orange"></span>
<span className="text-brand-orange text-xs font-medium tracking-widest uppercase font-geist">Why Choose Us</span>
</div>
<h2 className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold uppercase">The Jackofall Advantage</h2>
</div>
<p className="max-w-md text-gray-500 text-base leading-relaxed mt-auto font-geist">
                    Why juggle multiple contractors? We simplify your life with one reliable team for all your repairs and projects.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-100 hover:border-brand-orange/30 transition-colors">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<svg className="lucide lucide-phone-call text-brand-orange w-6 h-6" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">One Call Convenience</h3>
<p className="text-gray-500 text-base mb-6 font-geist">Save time and hassle. One phone call covers electrical, plumbing, renovations, and more.</p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-200 hover:border-brand-orange/30 transition-colors">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<svg className="lucide lucide-shield-check text-brand-orange w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">Licensed &amp; Insured</h3>
<p className="text-gray-500 text-base mb-6 font-geist">Professional work guaranteed. We prioritize safety and quality in every single job we undertake.</p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-100 hover:border-brand-orange/30 transition-colors">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<svg className="lucide lucide-tools text-brand-orange w-6 h-6" data-lucide="tools" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">Versatile Skills</h3>
<p className="text-gray-500 text-base mb-6 font-geist">Our team is equipped with diverse skills, meaning fewer contractors in your home and faster results.</p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-200 hover:border-brand-orange/30 transition-colors">
<div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<svg className="lucide lucide-wallet text-brand-orange w-6 h-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-3 font-geist">Affordable Pricing</h3>
<p className="text-gray-500 text-base mb-6 font-geist">Transparent quotes and competitive rates for high-quality handyman work that lasts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal-element">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-orange"></span>
<span className="text-brand-orange text-xs font-medium tracking-widest uppercase font-geist">FAQ</span>
</div>
<h2 className="text-4xl text-white tracking-tight mb-10 font-space-grotesk font-semibold uppercase">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group p-4 bg-[#1a1a1a] rounded-xl cursor-pointer border border-white/5 hover:border-white/10 transition-colors open:bg-[#222]">
<summary className="flex justify-between items-center font-medium text-white list-none font-geist">
                            What types of services do you offer?
                            <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-gray-400 text-base mt-4 leading-relaxed font-geist">
                            We are a full-service handyman company. We handle electrical repairs and installations, plumbing fixes, remodeling projects (kitchens, baths, etc.), power washing, and general property maintenance.
                        </p>
</details>
<details className="group p-4 bg-[#1a1a1a] rounded-xl cursor-pointer border border-white/5 hover:border-white/10 transition-colors open:bg-[#222]">
<summary className="flex justify-between items-center font-medium text-white list-none font-geist">
                            Do you serve commercial properties?
                            <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-gray-400 text-base mt-4 leading-relaxed font-geist">
                            Yes! The Jackofall 518 services both residential homes and commercial businesses throughout the area.
                        </p>
</details>
<details className="group p-4 bg-[#1a1a1a] rounded-xl cursor-pointer border border-white/5 hover:border-white/10 transition-colors open:bg-[#222]">
<summary className="flex justify-between items-center font-medium text-white list-none font-geist">
                            How do I get an estimate?
                            <span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p className="text-gray-400 text-base mt-4 leading-relaxed font-geist">
                            Simply give us a call at (702) 595-1710 or use our contact form. We provide transparent, no-obligation quotes for most projects.
                        </p>
</details>
</div>
</div>
<div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden reveal-element delay-200 border border-white/10">
<img className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</section>

<div className="bg-brand-orange h-12 flex items-center overflow-hidden whitespace-nowrap">
<div className="animate-marquee flex gap-8 font-bold text-white text-lg uppercase tracking-wider opacity-90">
<span className="font-geist">THE JACKOFALL 518</span> <span className="font-geist">•</span> <span className="font-geist">ELECTRICAL</span> <span className="font-geist">•</span> <span className="font-geist">PLUMBING</span> <span className="font-geist">•</span> <span className="font-geist">REMODELING</span> <span className="font-geist">•</span>
<span className="font-geist">THE JACKOFALL 518</span> <span className="font-geist">•</span> <span className="font-geist">ELECTRICAL</span> <span className="font-geist">•</span> <span className="font-geist">PLUMBING</span> <span className="font-geist">•</span> <span className="font-geist">REMODELING</span> <span className="font-geist">•</span>
<span className="font-geist">THE JACKOFALL 518</span> <span className="font-geist">•</span> <span className="font-geist">ELECTRICAL</span> <span className="font-geist">•</span> <span className="font-geist">PLUMBING</span> <span className="font-geist">•</span> <span className="font-geist">REMODELING</span> <span className="font-geist">•</span>
<span className="font-geist">THE JACKOFALL 518</span> <span className="font-geist">•</span> <span className="font-geist">ELECTRICAL</span> <span className="font-geist">•</span> <span className="font-geist">PLUMBING</span> <span className="font-geist">•</span> <span className="font-geist">REMODELING</span> <span className="font-geist">•</span>
</div>
</div>

<section className="py-24 bg-brand-dark border-b border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 reveal-element">
<h2 className="text-4xl lg:text-5xl text-white tracking-tight max-w-2xl font-space-grotesk font-semibold uppercase">
                Ready to fix your home? <span className="text-brand-orange">Just one call does it all.</span>
</h2>
<button className="bg-white text-brand-dark px-10 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-colors flex items-center gap-3 font-geist">
                (702) 595-1710 <div className="bg-brand-orange text-white p-1 rounded-full"><svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></div>
</button>
</div>
</section>

<footer className="bg-brand-dark pt-20 pb-10 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="mb-6">


<img alt="The Jackofall 518 Logo" className="h-12 w-auto object-contain" src="https://placehold.co/220x60/transparent/FFFFFF?text=THE+JACKOFALL+518&amp;font=roboto"/>
</div>
<p className="text-gray-500 text-sm mb-6 font-geist">Reliable repairs, renovations, and maintenance for the community. Fast, safe, and professional.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-brand-orange transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-400 hover:text-brand-orange transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">SERVICES</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">Electrical</a></li>
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">Plumbing</a></li>
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">Remodeling</a></li>
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">Power Washing</a></li>
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">General Maintenance</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">COMPANY</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">About Us</a></li>
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">Our Projects</a></li>
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">FAQ</a></li>
<li><a className="hover:text-brand-orange transition-colors font-geist" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-geist">CONTACT</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li className="flex items-start gap-3 font-geist">
<svg className="lucide lucide-map-pin w-4 h-4 mt-1 text-brand-orange" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Albany, NY (518 Area)
                        </li>
<li className="flex items-center gap-3 font-geist">
<svg className="lucide lucide-phone w-4 h-4 text-brand-orange" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            (702) 595-1710
                        </li>
<li className="flex items-center gap-3 font-geist">
<svg className="lucide lucide-mail w-4 h-4 text-brand-orange" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            marshall@thejackofall518.com
                        </li>
<li className="flex items-center gap-3 font-geist">
<svg className="lucide lucide-globe w-4 h-4 text-brand-orange" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            www.thejackofall518.com
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p className="font-geist">© 2024 The Jackofall 518. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
