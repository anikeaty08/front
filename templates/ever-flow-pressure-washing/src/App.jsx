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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0367a6', // Updated to match Even Flow Blue
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
},
accent: {
500: '#10b981',
600: '#059669',
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'scroll': 'scroll 40s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });

        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }
    
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
      

<nav className="fixed w-full z-50 glass transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 overflow-hidden rounded-lg shadow-lg group-hover:scale-105 transition-transform">
<img alt="Even Flow Logo" className="w-full h-full object-cover" src="https://evenflowpressurewashing.com/wp-content/uploads/2022/02/cropped-Logo-516-square.jpg"/>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-slate-900 leading-none">Even Flow</span>
<span className="text-xs font-medium text-slate-500 tracking-wide uppercase">Pressure Washing</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-500 transition-colors" href="#locations">Service Area</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 flex items-center gap-2 hover:text-brand-500 transition-colors" href="tel:5083082041">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    508-308-2041
                </a>
<a className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#contact">
                    Get a Quote
                </a>
</div>

<button className="md:hidden text-slate-900 p-2" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-base font-medium text-slate-800 py-2 border-b border-gray-50" href="#services">Services</a>
<a className="text-base font-medium text-slate-800 py-2 border-b border-gray-50" href="#about">About</a>
<a className="text-base font-medium text-slate-800 py-2 border-b border-gray-50" href="#reviews">Reviews</a>
<a className="bg-brand-500 text-white text-center py-3 rounded-lg font-medium mt-2" href="#contact">Get a Free Quote</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Clean house exterior in Massachusetts" className="w-full h-full object-cover opacity-50" src="https://evenflowpressurewashing.com/wp-content/uploads/2020/03/Massachusetts-House-Pressure-Washed-a.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left flex flex-col md:flex-row items-center gap-12">
<div className="md:w-3/5 space-y-8 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
<span className="text-brand-100 text-xs font-medium tracking-wide uppercase">Serving Worcester &amp; Middlesex Counties</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight">
                    It's Time for Your House to <span className="text-brand-400">Look New Again.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
                    Restore the pride in your home. We use safe, low-pressure soft washing to remove moss, algae, and grime without damaging your property.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
<a className="bg-white text-slate-900 hover:bg-brand-50 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]" href="#contact">
                        Get a Free Quote
                    </a>
<a className="glass-dark text-white hover:bg-brand-500/50 text-base font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2" href="#services">
                        Our Services
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="pt-8 flex flex-wrap gap-6 justify-center md:justify-start text-slate-400 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400" icon="solar:shield-check-linear" width="20"></iconify-icon>
                        Fully Insured
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-accent-500" icon="solar:leaf-linear" width="20"></iconify-icon>
                        Eco-Safe Products
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:medal-star-linear" width="20"></iconify-icon>
                        Top Rated Locally
                    </div>
</div>
</div>

<div className="md:w-2/5 hidden md:block animate-fade-in delay-100">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
<h3 className="text-white text-xl font-medium mb-6">Real Results</h3>
<div className="relative h-64 rounded-2xl overflow-hidden">
<img alt="Dirty vs Clean Siding" className="absolute inset-0 w-full h-full object-cover" src="https://evenflowpressurewashing.com/wp-content/uploads/2020/03/exterior-siding-wash-service-MA.jpg"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-white font-medium">Siding Restoration</div>
</div>
<div className="mt-6 flex justify-between items-center text-white/80 text-sm">
<span>Safe low-pressure wash</span>
<iconify-icon className="text-accent-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Complete Exterior Cleaning</h3>
<p className="text-slate-500 font-light leading-relaxed">
                    We don't just blast dirt. We use specialized techniques to safely restore every surface of your property.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">House Washing</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Safe low-pressure soft washing removes mold and algae from vinyl and wood siding without damage.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cloud-sun-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Roof Washing</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Remove black streaks (gloeocapsa magma) that eat limestone in shingles. Extend your roof's life by up to 10 years.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Fence &amp; Deck</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Restoration for wood and vinyl fences and decks. We remove graying wood fibers and grime to prepare for staining or sealing.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Commercial Property</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Attract tenants and customers with clean storefronts, sidewalks, and parking lots. We handle large-scale commercial cleaning.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal delay-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Fleet Washing</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Keep your company vehicles looking professional. We offer specialized mobile fleet washing services.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 reveal delay-200">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Rust Removal</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Specialized treatment to remove stubborn rust stains from concrete, siding, and other surfaces without abrasion.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="about">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<h2 className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-3">About Even Flow</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 leading-tight">Locally Owned.<br/>Environmentally Safe.</h3>
<p className="text-slate-300 font-light mb-6 leading-relaxed">
                    Even Flow Pressure Washing is a locally owned business dedicated to helping Worcester and Middlesex County homeowners protect their investments.
                </p>
<p className="text-slate-300 font-light mb-8 leading-relaxed">
                    Our founder noticed that homes in the south were consistently cleaner despite higher humidity. The secret? Regular soft washing. Just like scheduling an oil change for your car, regular exterior cleaning makes your building materials last longer.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-300" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Safe for Pets &amp; Plants</h4>
<p className="text-sm text-slate-400 mt-1">We use organic, biodegradable detergents rather than harsh chemicals.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-300" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">100% Satisfaction Guarantee</h4>
<p className="text-sm text-slate-400 mt-1">If you are not 100% satisfied, we will get back to work.</p>
</div>
</div>
</div>
</div>
<div className="relative reveal delay-100">
<div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
<img alt="Safe soft washing technique" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://evenflowpressurewashing.com/wp-content/uploads/2020/03/Pressure-Washing-Safe-for-Pets-and-Plants.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="text-white text-lg font-medium mb-1">Soft Wash Technology</div>
<p className="text-slate-300 text-sm">Low pressure, high effectiveness.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50/50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-3">Testimonials</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">What Our Customers Say</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all reveal">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                        "I am so impressed with Even Flow Pressure Washing! Rob and his crew came to my 90-year old mother's house to clean the moss buildup. It will be the smartest decision you ever make!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">PC</div>
<div>
<div className="text-sm font-semibold text-slate-900">Penny C.</div>
<div className="text-xs text-slate-500">Ashburnham, MA</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all reveal delay-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                        "Rob was friendly, responsive, and professional. He took the time to look over the property to suggest the best services. I would absolutely recommend Even Flow!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">AC</div>
<div>
<div className="text-sm font-semibold text-slate-900">Adam C.</div>
<div className="text-xs text-slate-500">West Boylston, MA</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all reveal delay-200">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                        "What a nice job! The roof looks 10 years younger. Rob explained everything well. Would highly recommend this service. I will never attempt to do this project on my own again."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">MW</div>
<div>
<div className="text-sm font-semibold text-slate-900">Mike W.</div>
<div className="text-xs text-slate-500">Princeton, MA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-slate-900 border-y border-slate-800 py-6 overflow-hidden" id="locations">
<div className="max-w-7xl mx-auto px-6 mb-4">
<h4 className="text-white text-xs font-semibold uppercase tracking-wider text-center md:text-left">Serving Worcester &amp; Middlesex Counties</h4>
</div>
<div className="relative flex overflow-x-hidden">
<div className="py-2 animate-scroll whitespace-nowrap flex gap-8">
<span className="text-slate-400 text-sm font-light mx-4">Acton • Ashburnham • Ashland • Athol • Auburn • Ayer • Barre • Belmont • Berlin • Bolton • Boylston • Blackstone • Brookfield • Charlton • Clinton • Cochituate • Concord • Devens • Douglas • Dudley • East Brookfield • Fitchburg • Framingham • Gardner • Grafton • Groton • Hardwick • Harvard • Holden • Hopedale • Hopkinton • Hubbardston • Hudson • Lancaster • Leicester • Leominster • Lexington • Littleton • Lunenburg • Marlborough • Maynard • Mendon • Milford • Millbury • Millville • Natick • Northborough • Northbridge • Oakham • Oxford • Paxton • Pepperell • Petersham • Princeton • Reading • Royalston • Rutland • Shirley • Shrewsbury • Southborough • Southbridge • Spencer • Sterling • Stoneham • Sturbridge • Sudbury • Sutton • Templeton • Townsend • Upton • Uxbridge • Warren • Watertown • Webster • Westborough • West Boylston • Westminster • Weston • Winchendon • Winchester • Worcester</span>
<span className="text-slate-400 text-sm font-light mx-4">Acton • Ashburnham • Ashland • Athol • Auburn • Ayer • Barre • Belmont • Berlin • Bolton • Boylston • Blackstone • Brookfield • Charlton • Clinton • Cochituate • Concord • Devens • Douglas • Dudley • East Brookfield • Fitchburg • Framingham • Gardner • Grafton • Groton • Hardwick • Harvard • Holden • Hopedale • Hopkinton • Hubbardston • Hudson • Lancaster • Leicester • Leominster • Lexington • Littleton • Lunenburg • Marlborough • Maynard • Mendon • Milford • Millbury • Millville • Natick • Northborough • Northbridge • Oakham • Oxford • Paxton • Pepperell • Petersham • Princeton • Reading • Royalston • Rutland • Shirley • Shrewsbury • Southborough • Southbridge • Spencer • Sterling • Stoneham • Sturbridge • Sudbury • Sutton • Templeton • Townsend • Upton • Uxbridge • Warren • Watertown • Webster • Westborough • West Boylston • Westminster • Weston • Winchendon • Winchester • Worcester</span>
</div>
</div>
</div>

<section className="py-24 bg-white" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row reveal">

<div className="md:w-2/5 p-12 bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold mb-2">Get a Free Quote</h3>
<p className="text-slate-400 text-sm mb-8 font-light">Fill out the form and we'll get back to you within 24 hours.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Phone</div>
<div className="font-medium"><a className="hover:text-brand-400 transition-colors" href="tel:5083082041">508-308-2041</a></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Email</div>
<div className="font-medium"><a className="hover:text-brand-400 transition-colors" href="mailto:info@evenflowpressurewashing.com">info@evenflowpressurewashing.com</a></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Area</div>
<div className="font-medium">Worcester &amp; Middlesex Counties</div>
</div>
</div>
</div>
</div>
<div className="mt-12 relative z-10">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-3">Awards &amp; Affiliations</div>
<div className="flex gap-4 items-center">

<img alt="Angi Leads" className="h-8 opacity-80 bg-white rounded p-1" src="https://evenflowpressurewashing.com/wp-content/uploads/2022/04/Angileads-1-1.png"/>
<img alt="PWNA" className="h-8 opacity-80 bg-white rounded p-1" src="https://evenflowpressurewashing.com/wp-content/uploads/2020/03/PWNA-logo.gif"/>
</div>
</div>
</div>

<div className="md:w-3/5 p-12 bg-white">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 form-input transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 form-input transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 form-input transition-all" placeholder="(508) 000-0000" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 form-input transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 form-input transition-all" placeholder="Street Address, City, Zip" type="text"/>
</div>
<div className="space-y-3">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Services Needed</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Roof Washing</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">House Washing</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Fence/Deck</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="w-4 h-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Commercial/Fleet</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 form-input transition-all" placeholder="Tell us about your project..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-3.5 rounded-lg shadow-lg hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5" type="button">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 overflow-hidden rounded shadow-sm">
<img alt="Logo" className="w-full h-full object-cover" src="https://evenflowpressurewashing.com/wp-content/uploads/2022/02/cropped-Logo-516-square.jpg"/>
</div>
<span className="text-lg font-semibold text-slate-900">Even Flow Pressure Washing</span>
</div>
<p className="text-slate-500 text-sm mb-8">Residential &amp; Commercial Pressure Washing Service</p>
<div className="text-slate-400 text-xs text-center">
                © 2026 Even Flow Pressure Washing. All Rights Reserved.
            </div>
</div>
</footer>


    </>
  );
}
