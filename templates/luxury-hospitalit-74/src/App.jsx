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
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
stone: {
50: '#F9F8F6',
100: '#F2F0EB',
200: '#E6E2D8',
300: '#D1CCC0',
800: '#3D3A35',
900: '#1C1B19',
}
},
letterSpacing: {
tightest: '-0.05em',
},
animation: {
'fade-in': 'fadeIn 1.5s ease-out forwards',
'slide-up': 'slideUp 1s ease-out forwards',
'island-drop': 'islandDrop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
},
islandDrop: {
'0%': { transform: 'translateY(-150%) scale(0.9)', opacity: '0' },
'100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
}
}
}
}
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
      

<div className="grain-overlay"></div>

<nav className="fixed top-8 left-0 w-full flex justify-center z-50 pointer-events-none">
<div className="pointer-events-auto bg-[#1C1B19]/90 backdrop-blur-xl text-stone-200 rounded-full p-1.5 flex items-center shadow-2xl shadow-black/20 border border-white/10 animate-island-drop hover:bg-[#1C1B19] transition-colors duration-500">

<a className="px-6 font-serif text-xl tracking-tight text-white hover:text-stone-300 transition-colors" href="#">
                AETHER
            </a>

<div className="h-4 w-px bg-white/10 hidden md:block"></div>

<div className="hidden md:flex items-center gap-8 px-6">
<a className="text-xs uppercase tracking-widest hover:text-white text-stone-400 transition-colors" href="#">Stay</a>
<a className="text-xs uppercase tracking-widest hover:text-white text-stone-400 transition-colors" href="#">Dining</a>
<a className="text-xs uppercase tracking-widest hover:text-white text-stone-400 transition-colors" href="#">Wellness</a>
</div>

<div className="flex items-center gap-1 pl-2 md:pl-0">

<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-stone-400 hover:text-white group">
<iconify-icon height="20" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<button className="bg-stone-800 hover:bg-stone-700 text-white h-10 px-5 rounded-full flex items-center gap-2 transition-all border border-white/5 shadow-lg shadow-black/50">
<span className="text-xs uppercase tracking-widest hidden md:block">Menu</span>
<iconify-icon height="18" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Minimalist Architecture" className="w-full h-full object-cover object-top animate-fade-in brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 text-white flex flex-col md:flex-row justify-between items-end animate-slide-up">
<div className="max-w-2xl">
<p className="text-xs uppercase tracking-widest mb-4 opacity-80">Collection 01 — The Desert</p>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none font-light mb-6">
                    Silence is the <br/> <span className="italic">ultimate</span> luxury.
                </h1>
</div>
<div className="hidden md:flex flex-col items-end gap-4 pb-2">
<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
<iconify-icon height="20" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</button>
<span className="text-xs uppercase tracking-widest">Scroll</span>
</div>
</div>
</div>
</header>

<div className="relative z-30 -mt-10 mx-4 md:mx-auto max-w-5xl bg-[#F9F8F6] p-2 md:p-4 shadow-2xl shadow-stone-200/50">
<form className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-2 md:px-6 py-2">
<div className="w-full md:w-auto flex flex-col border-b md:border-b-0 md:border-r border-stone-200 pb-2 md:pb-0 md:pr-8">
<label className="text-xs uppercase tracking-widest text-stone-500 mb-1 scale-90 origin-left">Location</label>
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-medium text-stone-900">Kyoto, Japan</span>
<iconify-icon className="ml-2 text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-auto flex flex-col border-b md:border-b-0 md:border-r border-stone-200 pb-2 md:pb-0 md:px-8">
<label className="text-xs uppercase tracking-widest text-stone-500 mb-1 scale-90 origin-left">Check In</label>
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-medium text-stone-900">Oct 24, 2023</span>
<iconify-icon className="ml-2 text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-auto flex flex-col border-b md:border-b-0 md:border-r border-stone-200 pb-2 md:pb-0 md:px-8">
<label className="text-xs uppercase tracking-widest text-stone-500 mb-1 scale-90 origin-left">Check Out</label>
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-medium text-stone-900">Oct 28, 2023</span>
<iconify-icon className="ml-2 text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
<div className="w-full md:w-auto flex flex-col pb-2 md:pb-0 md:px-8">
<label className="text-xs uppercase tracking-widest text-stone-500 mb-1 scale-90 origin-left">Guests</label>
<div className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-medium text-stone-900">02 Adults</span>
<iconify-icon className="ml-2 text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<button className="w-full md:w-auto bg-stone-900 text-stone-50 px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors duration-300" type="button">
                Search
            </button>
</form>
</div>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4">
<div className="w-12 h-[1px] bg-stone-900 mb-8"></div>
<span className="text-xs uppercase tracking-widest text-stone-500 block mb-2">Our Philosophy</span>
<p className="text-sm font-light leading-relaxed text-stone-600 max-w-xs">
                    Curating spaces that blend seamlessly with nature, offering a sanctuary for the mind and a feast for the senses.
                </p>
</div>
<div className="md:col-span-8">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight font-light leading-tight text-stone-900">
                    We believe in the architecture of emotion. Spaces designed not just to be seen, but to be <span className="italic font-normal">felt</span> deeply.
                </h2>
<div className="mt-12 flex items-center gap-2 group cursor-pointer">
<span className="text-xs uppercase tracking-widest text-stone-900 border-b border-transparent group-hover:border-stone-900 transition-all pb-0.5">Read The Journal</span>
<iconify-icon className="text-stone-900 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

<div className="group relative overflow-hidden cursor-pointer h-[60vh] md:h-[80vh]">
<img alt="Stone Hotel" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs uppercase tracking-widest mb-2 opacity-80 scale-90 origin-left">Amangiri, Utah</p>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight">The Stone House</h3>
</div>
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white" height="32" icon="solar:arrow-right-up-linear" width="32"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-4 md:gap-8 h-[60vh] md:h-[80vh]">

<div className="group relative overflow-hidden cursor-pointer flex-1">
<img alt="Minimal Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs uppercase tracking-widest mb-2 opacity-80 scale-90 origin-left">Kyoto, Japan</p>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight">Koto Residence</h3>
</div>
</div>

<div className="group relative overflow-hidden cursor-pointer flex-1">
<img alt="Desert Pool" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs uppercase tracking-widest mb-2 opacity-80 scale-90 origin-left">Marrakech, Morocco</p>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight">Dune Pavilion</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 px-6 md:px-12">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12">
<div className="flex flex-col gap-6">
<iconify-icon className="text-stone-800" height="32" icon="solar:chef-hat-heart-linear" width="32"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight text-stone-900">Culinary Arts</h3>
<p className="text-sm font-light leading-relaxed text-stone-600">
                        Seasonal menus crafted by world-renowned chefs using locally sourced ingredients, respecting the earth and the palette.
                    </p>
<a className="text-xs uppercase tracking-widest text-stone-900 mt-2 flex items-center gap-2 hover:opacity-60 transition-opacity" href="#">
                        Explore Dining <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-6">
<iconify-icon className="text-stone-800" height="32" icon="solar:lotus-linear" width="32"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight text-stone-900">Holistic Wellness</h3>
<p className="text-sm font-light leading-relaxed text-stone-600">
                        Spa treatments grounded in ancient traditions. Spaces designed for meditation, yoga, and complete rejuvenation of the spirit.
                    </p>
<a className="text-xs uppercase tracking-widest text-stone-900 mt-2 flex items-center gap-2 hover:opacity-60 transition-opacity" href="#">
                        View Treatments <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-6">
<iconify-icon className="text-stone-800" height="32" icon="solar:armchair-2-linear" width="32"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight text-stone-900">Bespoke Design</h3>
<p className="text-sm font-light leading-relaxed text-stone-600">
                        Interiors curated by leading minimalists. Every texture, shadow, and object is placed with intention and precision.
                    </p>
<a className="text-xs uppercase tracking-widest text-stone-900 mt-2 flex items-center gap-2 hover:opacity-60 transition-opacity" href="#">
                        Architecture <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-24 px-6 md:px-12">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-0">
<div className="flex flex-col gap-8 max-w-md">
<h4 className="font-serif text-3xl text-stone-200 tracking-tight">Join the inner circle.</h4>
<div className="relative group">
<input className="bg-transparent border-b border-stone-700 w-full py-4 text-sm text-stone-200 focus:outline-none focus:border-stone-200 transition-colors placeholder:text-stone-600" placeholder="Email Address" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-500 group-focus-within:text-stone-200 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-xs text-stone-600 leading-relaxed">
                    By subscribing, you agree to our Privacy Policy. <br/>We respect the sanctity of your inbox.
                </p>
</div>
<div className="flex gap-16 md:gap-32">
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-widest text-stone-500 mb-2">Social</span>
<a className="text-sm hover:text-stone-200 transition-colors" href="#">Instagram</a>
<a className="text-sm hover:text-stone-200 transition-colors" href="#">Pinterest</a>
<a className="text-sm hover:text-stone-200 transition-colors" href="#">Twitter</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-widest text-stone-500 mb-2">Company</span>
<a className="text-sm hover:text-stone-200 transition-colors" href="#">About</a>
<a className="text-sm hover:text-stone-200 transition-colors" href="#">Careers</a>
<a className="text-sm hover:text-stone-200 transition-colors" href="#">Press</a>
<a className="text-sm hover:text-stone-200 transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="font-serif text-xl tracking-tight text-stone-600">AETHER</span>
<span className="text-xs uppercase tracking-widest text-stone-600 scale-90">© 2023 Aether Hospitality Group</span>
</div>
</footer>

    </>
  );
}
