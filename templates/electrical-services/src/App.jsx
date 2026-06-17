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
brand: {
yellow: '#FACC15', // Matches the industrial yellow
dark: '#0A0A0A',   // Deep black/gray
gray: '#171717',   // Slightly lighter dark
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
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
      

<div bis_size='{"x":0,"y":0,"w":2293,"h":45,"abs_x":0,"abs_y":43}' className="bg-white border-b border-gray-100 py-3 hidden md:block">
<div bis_size='{"x":506,"y":12,"w":1280,"h":20,"abs_x":506,"abs_y":55}' className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium text-gray-500">
<div bis_size='{"x":530,"y":14,"w":72,"h":16,"abs_x":530,"abs_y":57}' className="flex items-center gap-4">
<div bis_size='{"x":530,"y":14,"w":72,"h":16,"abs_x":530,"abs_y":57}' className="flex gap-3">
<a bis_size='{"x":530,"y":14,"w":16,"h":16,"abs_x":530,"abs_y":57}' className="hover:text-brand-dark transition-colors" href="#"><svg bis_size='{"x":530,"y":14,"w":16,"h":16,"abs_x":530,"abs_y":57}' className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a bis_size='{"x":558,"y":14,"w":16,"h":16,"abs_x":558,"abs_y":57}' className="hover:text-brand-dark transition-colors" href="#"><svg bis_size='{"x":558,"y":14,"w":16,"h":16,"abs_x":558,"abs_y":57}' className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a bis_size='{"x":586,"y":14,"w":16,"h":16,"abs_x":586,"abs_y":57}' className="hover:text-brand-dark transition-colors" href="#"><svg bis_size='{"x":586,"y":14,"w":16,"h":16,"abs_x":586,"abs_y":57}' className="lucide lucide-music-2 w-4 h-4" data-lucide="music-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg></a>
</div>
</div>
<div bis_size='{"x":1502,"y":12,"w":260,"h":20,"abs_x":1502,"abs_y":55}' className="flex items-center gap-6">
<span bis_size='{"x":1502,"y":12,"w":117,"h":20,"abs_x":1502,"abs_y":55}' className="flex items-center gap-2 font-geist"><svg bis_size='{"x":1502,"y":14,"w":16,"h":16,"abs_x":1502,"abs_y":57}' className="lucide lucide-phone w-4 h-4 text-brand-yellow" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> 0420 264 105</span>
<span bis_size='{"x":1643,"y":12,"w":118,"h":20,"abs_x":1643,"abs_y":55}' className="flex items-center gap-2 font-geist"><svg bis_size='{"x":1643,"y":14,"w":16,"h":16,"abs_x":1643,"abs_y":57}' className="lucide lucide-clock w-4 h-4 text-brand-yellow" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Available 24/7</span>
</div>
</div>
</div>

<nav bis_size='{"x":0,"y":689,"w":2293,"h":81,"abs_x":0,"abs_y":732}' className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" style={{}}>
<div bis_size='{"x":506,"y":689,"w":1280,"h":80,"abs_x":506,"abs_y":732}' className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center" style={{}}>
<div bis_size='{"x":530,"y":715,"w":118,"h":28,"abs_x":530,"abs_y":758}' className="flex items-center gap-2">
<svg bis_size='{"x":530,"y":719,"w":20,"h":20,"abs_x":530,"abs_y":762}' className="lucide lucide-zap w-5 h-5 fill-brand-yellow text-brand-yellow" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span bis_size='{"x":558,"y":715,"w":90,"h":28,"abs_x":558,"abs_y":758}' className="text-xl font-semibold tracking-tight text-brand-dark font-geist">ELECTRIA</span>
</div>
<div bis_size='{"x":973,"y":719,"w":321,"h":20,"abs_x":973,"abs_y":762}' className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
<a bis_size='{"x":973,"y":719,"w":39,"h":20,"abs_x":973,"abs_y":762}' className="hover:text-brand-dark transition-colors font-geist" href="#">About</a>
<a bis_size='{"x":1044,"y":719,"w":56,"h":20,"abs_x":1044,"abs_y":762}' className="hover:text-brand-dark transition-colors font-geist" href="#">Services</a>
<a bis_size='{"x":1133,"y":719,"w":26,"h":20,"abs_x":1133,"abs_y":762}' className="hover:text-brand-dark transition-colors font-geist" href="#">FAQ</a>
<a bis_size='{"x":1192,"y":719,"w":29,"h":20,"abs_x":1192,"abs_y":762}' className="hover:text-brand-dark transition-colors font-geist" href="#">Blog</a>
<a bis_size='{"x":1254,"y":719,"w":40,"h":20,"abs_x":1254,"abs_y":762}' className="hover:text-brand-dark transition-colors font-geist" href="#">Pages</a>
</div>
<button bis_size='{"x":1618,"y":705,"w":143,"h":48,"abs_x":1618,"abs_y":748}' className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 font-geist">
                        Get a Quote
                    </button>
<button bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}' className="lg:hidden text-brand-dark">
<svg bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}' className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section bis_size='{"x":0,"y":126,"w":2293,"h":808,"abs_x":0,"abs_y":169}' className="relative bg-brand-dark pt-20 pb-32 overflow-hidden">

<div bis_size='{"x":0,"y":126,"w":128,"h":808,"abs_x":0,"abs_y":169}' className="absolute left-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div bis_size='{"x":2165,"y":126,"w":128,"h":808,"abs_x":2165,"abs_y":169}' className="absolute right-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div bis_size='{"x":506,"y":206,"w":1280,"h":600,"abs_x":506,"abs_y":249}' className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div bis_size='{"x":530,"y":244,"w":584,"h":522,"abs_x":530,"abs_y":287}' className="reveal-element in-view">

<h1 bis_size='{"x":530,"y":244,"w":584,"h":180,"abs_x":530,"abs_y":287}' className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 font-space-grotesk font-semibold">
                    RELIABLE ELECTRICAL SERVICES, WHENEVER YOU NEED THEM
                </h1>
<p bis_size='{"x":530,"y":448,"w":512,"h":58,"abs_x":530,"abs_y":491}' className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-geist">
                    Expert solutions for all your electrical needs - fast, safe, and efficient. We power your world with precision.
                </p>
<div bis_size='{"x":530,"y":547,"w":584,"h":50,"abs_x":530,"abs_y":590}' className="flex flex-wrap items-center gap-4">
<button bis_size='{"x":530,"y":548,"w":187,"h":48,"abs_x":530,"abs_y":591}' className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 font-geist">
                        0420 264 105 <div bis_size='{"x":665,"y":562,"w":20,"h":20,"abs_x":665,"abs_y":605}' className="bg-white p-1 rounded-full"><svg bis_size='{"x":669,"y":566,"w":12,"h":12,"abs_x":669,"abs_y":609}' className="lucide lucide-phone w-3 h-3" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></div>
</button>
<button bis_size='{"x":733,"y":547,"w":203,"h":50,"abs_x":733,"abs_y":590}' className="border border-gray-700 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:border-gray-500 transition-colors font-geist">
                        Explore Our Services
                    </button>
</div>
<div bis_size='{"x":530,"y":661,"w":584,"h":106,"abs_x":530,"abs_y":704}' className="mt-16 pt-8 border-t border-gray-800 grid sm:grid-cols-2 gap-8">

<div bis_size='{"x":530,"y":694,"w":276,"h":73,"abs_x":530,"abs_y":737}' className="flex gap-4 reveal-element delay-100 in-view">
<img alt="Avatar" bis_size='{"x":530,"y":694,"w":48,"h":48,"abs_x":530,"abs_y":737}' className="w-12 h-12 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div bis_size='{"x":594,"y":694,"w":212,"h":73,"abs_x":594,"abs_y":737}' className="">
<div bis_size='{"x":594,"y":694,"w":212,"h":12,"abs_x":594,"abs_y":737}' className="flex text-brand-yellow mb-1">
<svg bis_size='{"x":594,"y":694,"w":12,"h":12,"abs_x":594,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":606,"y":694,"w":12,"h":12,"abs_x":606,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":618,"y":694,"w":12,"h":12,"abs_x":618,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":630,"y":694,"w":12,"h":12,"abs_x":630,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":642,"y":694,"w":12,"h":12,"abs_x":642,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h4 bis_size='{"x":594,"y":710,"w":212,"h":20,"abs_x":594,"abs_y":753}' className="text-white text-sm font-medium mb-1 font-geist">Electria helped me so fast!</h4>
<p bis_size='{"x":594,"y":734,"w":212,"h":33,"abs_x":594,"abs_y":777}' className="text-xs text-gray-500 leading-snug font-geist">"Super friendly and got everything working perfectly."</p>
</div>
</div>

<div bis_size='{"x":838,"y":694,"w":276,"h":73,"abs_x":838,"abs_y":737}' className="flex gap-4 reveal-element delay-200">
<img alt="Avatar" bis_size='{"x":838,"y":694,"w":48,"h":48,"abs_x":838,"abs_y":737}' className="w-12 h-12 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div bis_size='{"x":902,"y":694,"w":212,"h":73,"abs_x":902,"abs_y":737}' className="">
<div bis_size='{"x":902,"y":694,"w":212,"h":12,"abs_x":902,"abs_y":737}' className="flex text-brand-yellow mb-1">
<svg bis_size='{"x":902,"y":694,"w":12,"h":12,"abs_x":902,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":914,"y":694,"w":12,"h":12,"abs_x":914,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":926,"y":694,"w":12,"h":12,"abs_x":926,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":938,"y":694,"w":12,"h":12,"abs_x":938,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":950,"y":694,"w":12,"h":12,"abs_x":950,"abs_y":737}' className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h4 bis_size='{"x":902,"y":710,"w":212,"h":20,"abs_x":902,"abs_y":753}' className="text-white text-sm font-medium mb-1 font-geist">Top-notch service!</h4>
<p bis_size='{"x":902,"y":734,"w":212,"h":33,"abs_x":902,"abs_y":777}' className="text-xs text-gray-500 leading-snug font-geist">"Team was professional, punctual, and got the job done."</p>
</div>
</div>
</div>
</div>
<div bis_size='{"x":1178,"y":206,"w":584,"h":600,"abs_x":1178,"abs_y":249}' className="relative reveal-element delay-300">
<div bis_size='{"x":1194,"y":222,"w":584,"h":600,"abs_x":1194,"abs_y":265}' className="absolute inset-0 bg-brand-yellow/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
<div bis_size='{"x":1178,"y":206,"w":584,"h":600,"abs_x":1178,"abs_y":249}' className="relative rounded-3xl overflow-hidden h-[600px] border border-gray-800">
<img alt="Electrician at work" bis_size='{"x":1179,"y":207,"w":582,"h":598,"abs_x":1179,"abs_y":250}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div bis_size='{"x":1179,"y":207,"w":582,"h":598,"abs_x":1179,"abs_y":250}' className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":934,"w":2293,"h":1024,"abs_x":0,"abs_y":977}' className="bg-white pt-24 pb-24">
<div bis_size='{"x":506,"y":1030,"w":1280,"h":832,"abs_x":506,"abs_y":1073}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":530,"y":1030,"w":1232,"h":72,"abs_x":530,"abs_y":1073}' className="flex flex-col md:flex-row md:items-end gap-6 reveal-element mb-16 gap-x-6 gap-y-6 justify-between">
<div bis_size='{"x":530,"y":1030,"w":205,"h":72,"abs_x":530,"abs_y":1073}' className="">
<div bis_size='{"x":530,"y":1030,"w":205,"h":16,"abs_x":530,"abs_y":1073}' className="flex items-center gap-3 mb-4">
<span bis_size='{"x":530,"y":1037,"w":32,"h":1,"abs_x":530,"abs_y":1080}' className="w-8 h-[1px] bg-brand-yellow"></span>
<span bis_size='{"x":574,"y":1030,"w":66,"h":16,"abs_x":574,"abs_y":1073}' className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Services</span>
</div>
<h2 bis_size='{"x":530,"y":1062,"w":205,"h":40,"abs_x":530,"abs_y":1105}' className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold">WHAT WE DO</h2>
</div>
<p bis_size='{"x":1314,"y":1050,"w":448,"h":52,"abs_x":1314,"abs_y":1093}' className="max-w-md text-gray-500 text-base leading-relaxed font-geist">
                    Your trusted partner for all electrical needs – reliable, skilled, and timely solutions you can count on.
                </p>
</div>
<div bis_size='{"x":530,"y":1166,"w":1232,"h":600,"abs_x":530,"abs_y":1209}' className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div bis_size='{"x":530,"y":1166,"w":394,"h":288,"abs_x":530,"abs_y":1209}' className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-100">
<img bis_size='{"x":530,"y":1166,"w":394,"h":288,"abs_x":530,"abs_y":1209}' className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1595856898575-9d187bd32fd6?w=800&amp;q=80"/>
<div bis_size='{"x":530,"y":1166,"w":394,"h":288,"abs_x":530,"abs_y":1209}' className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":530,"y":1377,"w":394,"h":77,"abs_x":530,"abs_y":1420}' className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span bis_size='{"x":554,"y":1402,"w":147,"h":28,"abs_x":554,"abs_y":1445}' className="text-white font-medium text-lg font-geist">Electrical Repairs</span>
<svg bis_size='{"x":881,"y":1410,"w":20,"h":20,"abs_x":881,"abs_y":1453}' className="lucide lucide-arrow-up-right text-brand-yellow w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div bis_size='{"x":949,"y":1166,"w":394,"h":288,"abs_x":949,"abs_y":1209}' className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-100">
<img bis_size='{"x":949,"y":1166,"w":394,"h":288,"abs_x":949,"abs_y":1209}' className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1647260671826-0fde2e635067?w=800&amp;q=80"/>
<div bis_size='{"x":949,"y":1166,"w":394,"h":288,"abs_x":949,"abs_y":1209}' className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":949,"y":1377,"w":394,"h":77,"abs_x":949,"abs_y":1420}' className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span bis_size='{"x":973,"y":1402,"w":166,"h":28,"abs_x":973,"abs_y":1445}' className="text-white font-medium text-lg font-geist">Lighting Installation</span>
<svg bis_size='{"x":1299,"y":1410,"w":20,"h":20,"abs_x":1299,"abs_y":1453}' className="lucide lucide-arrow-up-right text-brand-yellow w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div bis_size='{"x":1367,"y":1166,"w":394,"h":288,"abs_x":1367,"abs_y":1209}' className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-100">
<img bis_size='{"x":1367,"y":1166,"w":394,"h":288,"abs_x":1367,"abs_y":1209}' className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1754620906571-9ba64bd3ffb4?w=800&amp;q=80"/>
<div bis_size='{"x":1367,"y":1166,"w":394,"h":288,"abs_x":1367,"abs_y":1209}' className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":1367,"y":1377,"w":394,"h":77,"abs_x":1367,"abs_y":1420}' className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span bis_size='{"x":1391,"y":1402,"w":149,"h":28,"abs_x":1391,"abs_y":1445}' className="text-white font-medium text-lg font-geist">Wiring &amp; Rewiring</span>
<svg bis_size='{"x":1718,"y":1410,"w":20,"h":20,"abs_x":1718,"abs_y":1453}' className="lucide lucide-arrow-up-right text-brand-yellow w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div bis_size='{"x":530,"y":1478,"w":394,"h":288,"abs_x":530,"abs_y":1521}' className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-200">
<img bis_size='{"x":530,"y":1478,"w":394,"h":288,"abs_x":530,"abs_y":1521}' className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1635335874521-7987db781153?w=800&amp;q=80"/>
<div bis_size='{"x":530,"y":1478,"w":394,"h":288,"abs_x":530,"abs_y":1521}' className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent bg-[url(https://images.unsplash.com/photo-1607631697491-61972eecf928?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":530,"y":1689,"w":394,"h":77,"abs_x":530,"abs_y":1732}' className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span bis_size='{"x":554,"y":1714,"w":133,"h":28,"abs_x":554,"abs_y":1757}' className="text-white font-medium text-lg font-geist">Panel Upgrades</span>
<svg bis_size='{"x":881,"y":1722,"w":20,"h":20,"abs_x":881,"abs_y":1765}' className="lucide lucide-arrow-up-right text-brand-yellow w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div bis_size='{"x":949,"y":1478,"w":394,"h":288,"abs_x":949,"abs_y":1521}' className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-200">
<img bis_size='{"x":949,"y":1478,"w":394,"h":288,"abs_x":949,"abs_y":1521}' className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520234939602-6b957f8b9c1c?w=800&amp;q=80"/>
<div bis_size='{"x":949,"y":1478,"w":394,"h":288,"abs_x":949,"abs_y":1521}' className="bg-center bg-gradient-to-t from-black/90 via-black/20 to-transparent bg-[url(https://images.unsplash.com/photo-1595830807118-aef995773265?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":949,"y":1689,"w":394,"h":77,"abs_x":949,"abs_y":1732}' className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span bis_size='{"x":973,"y":1714,"w":141,"h":28,"abs_x":973,"abs_y":1757}' className="text-white font-medium text-lg font-geist">Surge Protection</span>
<svg bis_size='{"x":1299,"y":1722,"w":20,"h":20,"abs_x":1299,"abs_y":1765}' className="lucide lucide-arrow-up-right text-brand-yellow w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div bis_size='{"x":1367,"y":1478,"w":394,"h":288,"abs_x":1367,"abs_y":1521}' className="group relative rounded-2xl overflow-hidden h-72 reveal-element delay-200">
<img bis_size='{"x":1367,"y":1478,"w":394,"h":288,"abs_x":1367,"abs_y":1521}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div bis_size='{"x":1367,"y":1478,"w":394,"h":288,"abs_x":1367,"abs_y":1521}' className="bg-gradient-to-t from-black/90 via-black/20 to-transparent bg-[url(https://images.unsplash.com/photo-1627570375109-aa27d594108c?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":1367,"y":1689,"w":394,"h":77,"abs_x":1367,"abs_y":1732}' className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span bis_size='{"x":1391,"y":1714,"w":171,"h":28,"abs_x":1391,"abs_y":1757}' className="text-white font-medium text-lg font-geist">Emergency Services</span>
<svg bis_size='{"x":1718,"y":1722,"w":20,"h":20,"abs_x":1718,"abs_y":1765}' className="lucide lucide-arrow-up-right text-brand-yellow w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
<div bis_size='{"x":530,"y":1814,"w":1232,"h":48,"abs_x":530,"abs_y":1857}' className="mt-12 reveal-element">
<button bis_size='{"x":530,"y":1814,"w":167,"h":48,"abs_x":530,"abs_y":1857}' className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 font-geist">
                    All Services <svg bis_size='{"x":650,"y":1830,"w":16,"h":16,"abs_x":650,"abs_y":1873}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1958,"w":2293,"h":515,"abs_x":0,"abs_y":2001}' className="py-24 bg-brand-dark text-white relative overflow-hidden">

<div bis_size='{"x":0,"y":1958,"w":2293,"h":515,"abs_x":0,"abs_y":2001}' className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div bis_size='{"x":506,"y":2054,"w":1280,"h":323,"abs_x":506,"abs_y":2097}' className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div bis_size='{"x":530,"y":2065,"w":584,"h":300,"abs_x":530,"abs_y":2108}' className="relative h-[300px] w-full reveal-element">
<svg bis_size='{"x":530,"y":2065,"w":584,"h":300,"abs_x":530,"abs_y":2108}' className="w-full h-full text-gray-700 fill-current opacity-40" viewbox="0 0 400 250">

<defs bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}'>
<pattern bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}' height="10" id="dotPattern" patternunits="userSpaceOnUse" width="10" x="0" y="0">
<circle bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}' cx="2" cy="2" fill="currentColor" r="1.5"></circle>
</pattern>
</defs>

<path bis_size='{"x":606,"y":2094,"w":432,"h":194,"abs_x":606,"abs_y":2137}' className="" d="M20,50 Q50,20 100,30 T180,60 T250,40 T350,60 L380,150 Q300,200 200,180 T50,150 Z" fill="url(#dotPattern)"></path>

<circle bis_size='{"x":913,"y":2180,"w":9,"h":9,"abs_x":913,"abs_y":2223}' className="text-brand-yellow fill-current animate-ping" cx="280" cy="100" r="4"></circle>
<circle bis_size='{"x":913,"y":2180,"w":9,"h":9,"abs_x":913,"abs_y":2223}' className="text-brand-yellow fill-current" cx="280" cy="100" r="4"></circle>
</svg>
</div>
<div bis_size='{"x":1178,"y":2054,"w":584,"h":323,"abs_x":1178,"abs_y":2097}' className="reveal-element">
<div bis_size='{"x":1178,"y":2054,"w":584,"h":16,"abs_x":1178,"abs_y":2097}' className="flex items-center gap-3 mb-4">
<span bis_size='{"x":1178,"y":2061,"w":32,"h":1,"abs_x":1178,"abs_y":2104}' className="w-8 h-[1px] bg-brand-yellow"></span>
<span bis_size='{"x":1222,"y":2054,"w":36,"h":16,"abs_x":1222,"abs_y":2097}' className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Area</span>
</div>
<h2 bis_size='{"x":1178,"y":2086,"w":584,"h":40,"abs_x":1178,"abs_y":2129}' className="text-4xl tracking-tight mb-6 font-space-grotesk font-semibold">WHERE WE OPERATE</h2>
<p bis_size='{"x":1178,"y":2150,"w":584,"h":78,"abs_x":1178,"abs_y":2193}' className="text-gray-400 mb-10 text-base leading-relaxed font-geist">
                    We provide expert electrical services across three states and over 100 cities. From small repairs to large projects, we deliver reliable solutions wherever you need us.
                </p>
<div bis_size='{"x":1178,"y":2268,"w":584,"h":109,"abs_x":1178,"abs_y":2311}' className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-800">
<div bis_size='{"x":1178,"y":2301,"w":276,"h":76,"abs_x":1178,"abs_y":2344}' className="">
<span bis_size='{"x":1178,"y":2301,"w":276,"h":40,"abs_x":1178,"abs_y":2344}' className="block text-4xl text-white mb-2 font-space-grotesk font-semibold">3</span>
<span bis_size='{"x":1178,"y":2355,"w":131,"h":18,"abs_x":1178,"abs_y":2398}' className="text-sm text-gray-500 font-geist">States we operate in</span>
</div>
<div bis_size='{"x":1486,"y":2301,"w":276,"h":76,"abs_x":1486,"abs_y":2344}'>
<span bis_size='{"x":1486,"y":2301,"w":276,"h":40,"abs_x":1486,"abs_y":2344}' className="block text-4xl text-white mb-2 font-space-grotesk font-semibold">100+</span>
<span bis_size='{"x":1486,"y":2355,"w":157,"h":18,"abs_x":1486,"abs_y":2398}' className="text-sm text-gray-500 font-geist">Cities in our service area</span>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2473,"w":2293,"h":874,"abs_x":0,"abs_y":2516}' className="bg-white pt-24 pb-24">
<div bis_size='{"x":506,"y":2569,"w":1280,"h":682,"abs_x":506,"abs_y":2612}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":530,"y":2569,"w":1232,"h":78,"abs_x":530,"abs_y":2612}' className="flex flex-col md:flex-row justify-between mb-16 gap-10 reveal-element">
<div bis_size='{"x":530,"y":2569,"w":392,"h":78,"abs_x":530,"abs_y":2612}' className="max-w-md">
<div bis_size='{"x":530,"y":2569,"w":392,"h":16,"abs_x":530,"abs_y":2612}' className="flex items-center gap-3 mb-4">
<span bis_size='{"x":530,"y":2576,"w":32,"h":1,"abs_x":530,"abs_y":2619}' className="w-8 h-[1px] bg-brand-yellow"></span>
<span bis_size='{"x":574,"y":2569,"w":60,"h":16,"abs_x":574,"abs_y":2612}' className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Why Us?</span>
</div>
<h2 bis_size='{"x":530,"y":2601,"w":392,"h":40,"abs_x":530,"abs_y":2644}' className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold">RELIABLE AND EFFICIENT</h2>
</div>
<p bis_size='{"x":1314,"y":2569,"w":448,"h":78,"abs_x":1314,"abs_y":2612}' className="max-w-md text-gray-500 text-base leading-relaxed mt-auto font-geist">
                    We understand that when it comes to electrical issues, you need fast and effective solutions. Our skilled team delivers reliable service always.
                </p>
</div>
<div bis_size='{"x":530,"y":2711,"w":1232,"h":540,"abs_x":530,"abs_y":2754}' className="grid md:grid-cols-2 gap-6">

<div bis_size='{"x":530,"y":2711,"w":604,"h":246,"abs_x":530,"abs_y":2754}' className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-100 hover:border-brand-yellow/30 transition-colors">
<div bis_size='{"x":563,"y":2744,"w":48,"h":48,"abs_x":563,"abs_y":2787}' className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<svg bis_size='{"x":575,"y":2756,"w":24,"h":24,"abs_x":575,"abs_y":2799}' className="lucide lucide-clock text-brand-yellow w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 bis_size='{"x":563,"y":2816,"w":538,"h":28,"abs_x":563,"abs_y":2859}' className="text-xl font-semibold text-brand-dark mb-3 font-geist">Swift Response</h3>
<p bis_size='{"x":563,"y":2856,"w":538,"h":24,"abs_x":563,"abs_y":2899}' className="text-gray-500 text-base mb-6 font-geist">Count on us for prompt service when you need it most.</p>
<a bis_size='{"x":563,"y":2904,"w":538,"h":20,"abs_x":563,"abs_y":2947}' className="text-brand-yellow text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all font-geist" href="#">Learn more <svg bis_size='{"x":645,"y":2906,"w":16,"h":16,"abs_x":645,"abs_y":2949}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>

<div bis_size='{"x":1158,"y":2711,"w":604,"h":246,"abs_x":1158,"abs_y":2754}' className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-200 hover:border-brand-yellow/30 transition-colors">
<div bis_size='{"x":1191,"y":2744,"w":48,"h":48,"abs_x":1191,"abs_y":2787}' className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<svg bis_size='{"x":1203,"y":2756,"w":24,"h":24,"abs_x":1203,"abs_y":2799}' className="lucide lucide-users text-brand-yellow w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 bis_size='{"x":1191,"y":2816,"w":538,"h":28,"abs_x":1191,"abs_y":2859}' className="text-xl font-semibold text-brand-dark mb-3 font-geist">Trusted Experts</h3>
<p bis_size='{"x":1191,"y":2856,"w":538,"h":24,"abs_x":1191,"abs_y":2899}' className="text-gray-500 text-base mb-6 font-geist">Our electricians are certified and experienced, ensuring top quality.</p>
<a bis_size='{"x":1191,"y":2904,"w":538,"h":20,"abs_x":1191,"abs_y":2947}' className="text-brand-yellow text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all font-geist" href="#">Learn more <svg bis_size='{"x":1273,"y":2906,"w":16,"h":16,"abs_x":1273,"abs_y":2949}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>

<div bis_size='{"x":530,"y":2981,"w":604,"h":270,"abs_x":530,"abs_y":3024}' className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-100 hover:border-brand-yellow/30 transition-colors">
<div bis_size='{"x":563,"y":3014,"w":48,"h":48,"abs_x":563,"abs_y":3057}' className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<svg bis_size='{"x":575,"y":3026,"w":24,"h":24,"abs_x":575,"abs_y":3069}' className="lucide lucide-shield-check text-brand-yellow w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 bis_size='{"x":563,"y":3086,"w":538,"h":28,"abs_x":563,"abs_y":3129}' className="text-xl font-semibold text-brand-dark mb-3 font-geist">Safety First</h3>
<p bis_size='{"x":563,"y":3126,"w":538,"h":48,"abs_x":563,"abs_y":3169}' className="text-gray-500 text-base mb-6 font-geist">We prioritize safety in every project, keeping your home or business secure.</p>
<a bis_size='{"x":563,"y":3198,"w":538,"h":20,"abs_x":563,"abs_y":3241}' className="text-brand-yellow text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all font-geist" href="#">Learn more <svg bis_size='{"x":645,"y":3200,"w":16,"h":16,"abs_x":645,"abs_y":3243}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>

<div bis_size='{"x":1158,"y":2981,"w":604,"h":270,"abs_x":1158,"abs_y":3024}' className="bg-gray-50 p-8 rounded-2xl border border-gray-100 reveal-element delay-200 hover:border-brand-yellow/30 transition-colors">
<div bis_size='{"x":1191,"y":3014,"w":48,"h":48,"abs_x":1191,"abs_y":3057}' className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mb-6">
<svg bis_size='{"x":1203,"y":3026,"w":24,"h":24,"abs_x":1203,"abs_y":3069}' className="lucide lucide-wallet text-brand-yellow w-6 h-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 bis_size='{"x":1191,"y":3086,"w":538,"h":28,"abs_x":1191,"abs_y":3129}' className="text-xl font-semibold text-brand-dark mb-3 font-geist">Affordable Solutions</h3>
<p bis_size='{"x":1191,"y":3126,"w":538,"h":24,"abs_x":1191,"abs_y":3169}' className="text-gray-500 text-base mb-6 font-geist">High-quality service at prices that work for your budget.</p>
<a bis_size='{"x":1191,"y":3174,"w":538,"h":20,"abs_x":1191,"abs_y":3217}' className="text-brand-yellow text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all font-geist" href="#">Learn more <svg bis_size='{"x":1273,"y":3176,"w":16,"h":16,"abs_x":1273,"abs_y":3219}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3347,"w":2293,"h":692,"abs_x":0,"abs_y":3390}' className="py-24 bg-brand-dark relative">
<div bis_size='{"x":506,"y":3443,"w":1280,"h":500,"abs_x":506,"abs_y":3486}' className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div bis_size='{"x":530,"y":3443,"w":584,"h":500,"abs_x":530,"abs_y":3486}' className="relative reveal-element">
<div bis_size='{"x":530,"y":3443,"w":584,"h":500,"abs_x":530,"abs_y":3486}' className="relative rounded-3xl overflow-hidden h-[500px]">
<img bis_size='{"x":530,"y":3443,"w":584,"h":500,"abs_x":530,"abs_y":3486}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?w=1600&amp;q=80"/>

<div bis_size='{"x":810,"y":3727,"w":271,"h":183,"abs_x":810,"abs_y":3770}' className="absolute bottom-8 right-8 bg-brand-yellow p-8 rounded-2xl max-w-xs shadow-2xl">
<svg bis_size='{"x":842,"y":3759,"w":40,"h":40,"abs_x":842,"abs_y":3802}' className="lucide lucide-award w-10 h-10 text-brand-dark mb-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<div bis_size='{"x":842,"y":3815,"w":207,"h":40,"abs_x":842,"abs_y":3858}' className="text-4xl text-brand-dark mb-1 font-space-grotesk font-semibold">15 YEARS</div>
<div bis_size='{"x":842,"y":3859,"w":207,"h":19,"abs_x":842,"abs_y":3902}' className="text-sm font-medium text-brand-dark/80 leading-snug font-geist">Of experience in electrical work</div>
</div>
</div>
</div>
<div bis_size='{"x":1178,"y":3457,"w":584,"h":471,"abs_x":1178,"abs_y":3500}' className="reveal-element delay-200">
<div bis_size='{"x":1178,"y":3457,"w":584,"h":16,"abs_x":1178,"abs_y":3500}' className="flex items-center gap-3 mb-4">
<span bis_size='{"x":1178,"y":3465,"w":32,"h":1,"abs_x":1178,"abs_y":3508}' className="w-8 h-[1px] bg-brand-yellow"></span>
<span bis_size='{"x":1222,"y":3457,"w":68,"h":16,"abs_x":1222,"abs_y":3500}' className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">About Us</span>
</div>
<h2 bis_size='{"x":1178,"y":3489,"w":584,"h":40,"abs_x":1178,"abs_y":3532}' className="text-4xl text-white tracking-tight mb-6 font-space-grotesk font-semibold">PROVEN EXPERTISE YOU CAN TRUST</h2>
<p bis_size='{"x":1178,"y":3553,"w":584,"h":78,"abs_x":1178,"abs_y":3596}' className="text-gray-400 text-base leading-relaxed mb-6 font-geist">
                    With over a decade and a half of hands-on experience, we've mastered the art of delivering top-quality electrical services that consistently exceed expectations.
                </p>
<p bis_size='{"x":1178,"y":3655,"w":584,"h":52,"abs_x":1178,"abs_y":3698}' className="text-gray-400 text-base leading-relaxed mb-8 font-geist">
                    From complex troubleshooting and minor repairs to comprehensive installations, we handle it all with precision and care.
                </p>
<a bis_size='{"x":1178,"y":3739,"w":584,"h":20,"abs_x":1178,"abs_y":3782}' className="text-brand-yellow text-sm font-medium flex items-center gap-2 mb-16 hover:gap-3 transition-all font-geist" href="#">Learn more <svg bis_size='{"x":1260,"y":3741,"w":16,"h":16,"abs_x":1260,"abs_y":3784}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<div bis_size='{"x":1178,"y":3823,"w":584,"h":105,"abs_x":1178,"abs_y":3866}' className="grid grid-cols-3 gap-8 border-t border-gray-800 pt-8">
<div bis_size='{"x":1178,"y":3856,"w":173,"h":72,"abs_x":1178,"abs_y":3899}' className="text-center lg:text-left">
<span bis_size='{"x":1178,"y":3856,"w":173,"h":36,"abs_x":1178,"abs_y":3899}' className="block text-3xl text-white mb-2 font-space-grotesk font-semibold">20+</span>
<span bis_size='{"x":1178,"y":3908,"w":96,"h":16,"abs_x":1178,"abs_y":3951}' className="text-xs text-gray-500 uppercase tracking-wide font-geist">Certifications</span>
</div>
<div bis_size='{"x":1383,"y":3856,"w":173,"h":72,"abs_x":1383,"abs_y":3899}' className="text-center lg:text-left">
<span bis_size='{"x":1383,"y":3856,"w":173,"h":36,"abs_x":1383,"abs_y":3899}' className="block text-3xl text-white mb-2 font-space-grotesk font-semibold">6,000+</span>
<span bis_size='{"x":1383,"y":3908,"w":109,"h":16,"abs_x":1383,"abs_y":3951}' className="text-xs text-gray-500 uppercase tracking-wide font-geist">Completed Jobs</span>
</div>
<div bis_size='{"x":1589,"y":3856,"w":173,"h":72,"abs_x":1589,"abs_y":3899}' className="text-center lg:text-left">
<span bis_size='{"x":1589,"y":3856,"w":173,"h":36,"abs_x":1589,"abs_y":3899}' className="block text-3xl text-white mb-2 font-space-grotesk font-semibold">24/7</span>
<span bis_size='{"x":1589,"y":3908,"w":154,"h":16,"abs_x":1589,"abs_y":3951}' className="text-xs text-gray-500 uppercase tracking-wide font-geist">Emergency Availability</span>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4039,"w":2293,"h":692,"abs_x":0,"abs_y":4082}' className="py-24 bg-white">
<div bis_size='{"x":506,"y":4135,"w":1280,"h":500,"abs_x":506,"abs_y":4178}' className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
<div bis_size='{"x":530,"y":4135,"w":584,"h":496,"abs_x":530,"abs_y":4178}' className="reveal-element">
<div bis_size='{"x":530,"y":4135,"w":584,"h":16,"abs_x":530,"abs_y":4178}' className="flex items-center gap-3 mb-4">
<span bis_size='{"x":530,"y":4142,"w":32,"h":1,"abs_x":530,"abs_y":4185}' className="w-8 h-[1px] bg-brand-yellow"></span>
<span bis_size='{"x":574,"y":4135,"w":26,"h":16,"abs_x":574,"abs_y":4178}' className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">FAQ</span>
</div>
<h2 bis_size='{"x":530,"y":4167,"w":584,"h":40,"abs_x":530,"abs_y":4210}' className="text-4xl text-brand-dark tracking-tight mb-10 font-space-grotesk font-semibold">FREQUENTLY ASKED QUESTIONS</h2>
<div bis_size='{"x":530,"y":4247,"w":584,"h":296,"abs_x":530,"abs_y":4290}' className="space-y-4">
<details bis_size='{"x":530,"y":4247,"w":584,"h":62,"abs_x":530,"abs_y":4290}' className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100">
<summary bis_size='{"x":547,"y":4264,"w":550,"h":28,"abs_x":547,"abs_y":4307}' className="flex justify-between items-center font-medium text-brand-dark list-none font-geist">
                            What areas do you serve?
                            <span bis_size='{"x":1077,"y":4268,"w":20,"h":20,"abs_x":1077,"abs_y":4311}' className="transition group-open:rotate-180">
<svg bis_size='{"x":1077,"y":4268,"w":20,"h":20,"abs_x":1077,"abs_y":4311}' className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}' className="text-gray-500 text-base mt-4 leading-relaxed font-geist">
                            We serve the greater metropolitan area and surrounding suburbs, covering a 50-mile radius. Contact us to check your specific location.
                        </p>
</details>
<details bis_size='{"x":530,"y":4325,"w":584,"h":62,"abs_x":530,"abs_y":4368}' className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100">
<summary bis_size='{"x":547,"y":4342,"w":550,"h":28,"abs_x":547,"abs_y":4385}' className="flex justify-between items-center font-medium text-brand-dark list-none font-geist">
                            Do you handle small jobs?
                            <span bis_size='{"x":1077,"y":4346,"w":20,"h":20,"abs_x":1077,"abs_y":4389}' className="transition group-open:rotate-180">
<svg bis_size='{"x":1077,"y":4346,"w":20,"h":20,"abs_x":1077,"abs_y":4389}' className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}' className="text-gray-500 text-base mt-4 leading-relaxed font-geist">
                            Yes! No job is too small. From changing a light switch to full rewiring, we handle it all.
                        </p>
</details>
<details bis_size='{"x":530,"y":4403,"w":584,"h":62,"abs_x":530,"abs_y":4446}' className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100">
<summary bis_size='{"x":547,"y":4420,"w":550,"h":28,"abs_x":547,"abs_y":4463}' className="flex justify-between items-center font-medium text-brand-dark list-none font-geist">
                            How soon can you arrive?
                            <span bis_size='{"x":1077,"y":4424,"w":20,"h":20,"abs_x":1077,"abs_y":4467}' className="transition group-open:rotate-180">
<svg bis_size='{"x":1077,"y":4424,"w":20,"h":20,"abs_x":1077,"abs_y":4467}' className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}' className="text-gray-500 text-base mt-4 leading-relaxed font-geist">
                            For emergencies, we aim to be there within 2 hours. For regular appointments, we schedule at your earliest convenience.
                        </p>
</details>
<details bis_size='{"x":530,"y":4481,"w":584,"h":62,"abs_x":530,"abs_y":4524}' className="group p-4 bg-gray-50 rounded-xl cursor-pointer border border-transparent hover:border-gray-200 transition-colors open:bg-white open:shadow-lg open:shadow-gray-100">
<summary bis_size='{"x":547,"y":4498,"w":550,"h":28,"abs_x":547,"abs_y":4541}' className="flex justify-between items-center font-medium text-brand-dark list-none font-geist">
                            Do you offer free estimates?
                            <span bis_size='{"x":1077,"y":4502,"w":20,"h":20,"abs_x":1077,"abs_y":4545}' className="transition group-open:rotate-180">
<svg bis_size='{"x":1077,"y":4502,"w":20,"h":20,"abs_x":1077,"abs_y":4545}' className="lucide lucide-chevron-down w-5 h-5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<p bis_size='{"x":0,"y":689,"w":0,"h":0,"abs_x":0,"abs_y":732}' className="text-gray-500 text-base mt-4 leading-relaxed font-geist">
                            Yes, we provide free, no-obligation estimates for most major projects.
                        </p>
</details>
</div>
<div bis_size='{"x":530,"y":4583,"w":584,"h":48,"abs_x":530,"abs_y":4626}' className="mt-10">
<button bis_size='{"x":530,"y":4583,"w":191,"h":48,"abs_x":530,"abs_y":4626}' className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 font-geist">
                        More questions <svg bis_size='{"x":674,"y":4599,"w":16,"h":16,"abs_x":674,"abs_y":4642}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div bis_size='{"x":1178,"y":4135,"w":584,"h":500,"abs_x":1178,"abs_y":4178}' className="relative h-full min-h-[500px] rounded-3xl overflow-hidden reveal-element delay-200">
<img bis_size='{"x":1178,"y":4135,"w":584,"h":500,"abs_x":1178,"abs_y":4178}' className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1471871480126-59ab253c49e9?w=1600&amp;q=80"/>
</div>
</div>
</section>

<div bis_size='{"x":0,"y":4731,"w":2293,"h":48,"abs_x":0,"abs_y":4774}' className="bg-brand-yellow h-12 flex items-center overflow-hidden whitespace-nowrap">

<div bis_size='{"x":0,"y":4741,"w":2815,"h":28,"abs_x":0,"abs_y":4784}' className="animate-marquee flex gap-8 font-bold text-brand-dark text-lg uppercase tracking-wider opacity-80">
<span bis_size='{"x":0,"y":4741,"w":93,"h":28,"abs_x":0,"abs_y":4784}' className="font-geist">Electria</span> <span bis_size='{"x":125,"y":4741,"w":7,"h":28,"abs_x":125,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":165,"y":4741,"w":47,"h":28,"abs_x":165,"abs_y":4784}' className="font-geist">Fast</span> <span bis_size='{"x":245,"y":4741,"w":7,"h":28,"abs_x":245,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":284,"y":4741,"w":92,"h":28,"abs_x":284,"abs_y":4784}' className="font-geist">Reliable</span> <span bis_size='{"x":409,"y":4741,"w":7,"h":28,"abs_x":409,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":448,"y":4741,"w":49,"h":28,"abs_x":448,"abs_y":4784}' className="font-geist">Safe</span> <span bis_size='{"x":530,"y":4741,"w":7,"h":28,"abs_x":530,"abs_y":4784}' className="font-geist">•</span>
<span bis_size='{"x":569,"y":4741,"w":93,"h":28,"abs_x":569,"abs_y":4784}' className="font-geist">Electria</span> <span bis_size='{"x":695,"y":4741,"w":7,"h":28,"abs_x":695,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":734,"y":4741,"w":47,"h":28,"abs_x":734,"abs_y":4784}' className="font-geist">Fast</span> <span bis_size='{"x":814,"y":4741,"w":7,"h":28,"abs_x":814,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":854,"y":4741,"w":92,"h":28,"abs_x":854,"abs_y":4784}' className="font-geist">Reliable</span> <span bis_size='{"x":978,"y":4741,"w":7,"h":28,"abs_x":978,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":1018,"y":4741,"w":49,"h":28,"abs_x":1018,"abs_y":4784}' className="font-geist">Safe</span> <span bis_size='{"x":1099,"y":4741,"w":7,"h":28,"abs_x":1099,"abs_y":4784}' className="font-geist">•</span>
<span bis_size='{"x":1139,"y":4741,"w":93,"h":28,"abs_x":1139,"abs_y":4784}' className="font-geist">Electria</span> <span bis_size='{"x":1265,"y":4741,"w":7,"h":28,"abs_x":1265,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":1304,"y":4741,"w":47,"h":28,"abs_x":1304,"abs_y":4784}' className="font-geist">Fast</span> <span bis_size='{"x":1384,"y":4741,"w":7,"h":28,"abs_x":1384,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":1423,"y":4741,"w":92,"h":28,"abs_x":1423,"abs_y":4784}' className="font-geist">Reliable</span> <span bis_size='{"x":1548,"y":4741,"w":7,"h":28,"abs_x":1548,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":1587,"y":4741,"w":49,"h":28,"abs_x":1587,"abs_y":4784}' className="font-geist">Safe</span> <span bis_size='{"x":1669,"y":4741,"w":7,"h":28,"abs_x":1669,"abs_y":4784}' className="font-geist">•</span>
<span bis_size='{"x":1708,"y":4741,"w":93,"h":28,"abs_x":1708,"abs_y":4784}' className="font-geist">Electria</span> <span bis_size='{"x":1834,"y":4741,"w":7,"h":28,"abs_x":1834,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":1874,"y":4741,"w":47,"h":28,"abs_x":1874,"abs_y":4784}' className="font-geist">Fast</span> <span bis_size='{"x":1953,"y":4741,"w":7,"h":28,"abs_x":1953,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":1993,"y":4741,"w":92,"h":28,"abs_x":1993,"abs_y":4784}' className="font-geist">Reliable</span> <span bis_size='{"x":2117,"y":4741,"w":7,"h":28,"abs_x":2117,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":2157,"y":4741,"w":49,"h":28,"abs_x":2157,"abs_y":4784}' className="font-geist">Safe</span> <span bis_size='{"x":2238,"y":4741,"w":7,"h":28,"abs_x":2238,"abs_y":4784}' className="font-geist">•</span>
<span bis_size='{"x":2278,"y":4741,"w":93,"h":28,"abs_x":2278,"abs_y":4784}' className="font-geist">Electria</span> <span bis_size='{"x":2404,"y":4741,"w":7,"h":28,"abs_x":2404,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":2443,"y":4741,"w":47,"h":28,"abs_x":2443,"abs_y":4784}' className="font-geist">Fast</span> <span bis_size='{"x":2523,"y":4741,"w":7,"h":28,"abs_x":2523,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":2562,"y":4741,"w":92,"h":28,"abs_x":2562,"abs_y":4784}' className="font-geist">Reliable</span> <span bis_size='{"x":2687,"y":4741,"w":7,"h":28,"abs_x":2687,"abs_y":4784}' className="font-geist">•</span> <span bis_size='{"x":2726,"y":4741,"w":49,"h":28,"abs_x":2726,"abs_y":4784}' className="font-geist">Safe</span> <span bis_size='{"x":2808,"y":4741,"w":7,"h":28,"abs_x":2808,"abs_y":4784}' className="font-geist">•</span>
</div>
</div>

<section bis_size='{"x":0,"y":4779,"w":2293,"h":678,"abs_x":0,"abs_y":4822}' className="py-24 bg-brand-gray relative">
<div bis_size='{"x":506,"y":4875,"w":1280,"h":486,"abs_x":506,"abs_y":4918}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":530,"y":4875,"w":1232,"h":72,"abs_x":530,"abs_y":4918}' className="mb-16 reveal-element">
<div bis_size='{"x":530,"y":4875,"w":1232,"h":16,"abs_x":530,"abs_y":4918}' className="flex items-center gap-3 mb-4">
<span bis_size='{"x":530,"y":4882,"w":32,"h":1,"abs_x":530,"abs_y":4925}' className="w-8 h-[1px] bg-brand-yellow"></span>
<span bis_size='{"x":574,"y":4875,"w":98,"h":16,"abs_x":574,"abs_y":4918}' className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Testimonials</span>
</div>
<h2 bis_size='{"x":530,"y":4907,"w":1232,"h":40,"abs_x":530,"abs_y":4950}' className="text-4xl text-white tracking-tight font-space-grotesk font-semibold">WE HELPED THESE CLIENTS</h2>
</div>
<div bis_size='{"x":530,"y":5011,"w":1232,"h":254,"abs_x":530,"abs_y":5054}' className="grid md:grid-cols-3 gap-6">

<div bis_size='{"x":530,"y":5011,"w":394,"h":254,"abs_x":530,"abs_y":5054}' className="bg-[#222] p-8 rounded-2xl border border-white/5 reveal-element delay-100 flex flex-col justify-between">
<div bis_size='{"x":563,"y":5044,"w":328,"h":124,"abs_x":563,"abs_y":5087}' className="">
<div bis_size='{"x":563,"y":5044,"w":328,"h":16,"abs_x":563,"abs_y":5087}' className="flex text-brand-yellow mb-4">
<svg bis_size='{"x":563,"y":5044,"w":16,"h":16,"abs_x":563,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":579,"y":5044,"w":16,"h":16,"abs_x":579,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":595,"y":5044,"w":16,"h":16,"abs_x":595,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":611,"y":5044,"w":16,"h":16,"abs_x":611,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":627,"y":5044,"w":16,"h":16,"abs_x":627,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p bis_size='{"x":563,"y":5076,"w":328,"h":68,"abs_x":563,"abs_y":5119}' className="text-gray-400 text-sm leading-relaxed mb-6 font-geist">"Fantastic service! The team was prompt, professional and fixed our wiring issue in no time. They even provided useful tips."</p>
</div>
<div bis_size='{"x":563,"y":5168,"w":200,"h":64,"abs_x":563,"abs_y":5211}' className="flex items-center gap-3 bg-white text-black p-3 rounded-xl max-w-[200px]">
<img bis_size='{"x":575,"y":5180,"w":40,"h":40,"abs_x":575,"abs_y":5223}' className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div bis_size='{"x":627,"y":5182,"w":60,"h":36,"abs_x":627,"abs_y":5225}'>
<div bis_size='{"x":627,"y":5182,"w":60,"h":20,"abs_x":627,"abs_y":5225}' className="font-semibold text-sm font-geist">John R</div>
<div bis_size='{"x":627,"y":5202,"w":60,"h":16,"abs_x":627,"abs_y":5245}' className="text-xs text-gray-500 font-geist">Barangaroo, NSW</div>
</div>
</div>
</div>

<div bis_size='{"x":949,"y":5011,"w":394,"h":254,"abs_x":949,"abs_y":5054}' className="bg-[#222] p-8 rounded-2xl border border-white/5 reveal-element delay-200 flex flex-col justify-between">
<div bis_size='{"x":982,"y":5044,"w":328,"h":124,"abs_x":982,"abs_y":5087}'>
<div bis_size='{"x":982,"y":5044,"w":328,"h":16,"abs_x":982,"abs_y":5087}' className="flex text-brand-yellow mb-4">
<svg bis_size='{"x":982,"y":5044,"w":16,"h":16,"abs_x":982,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":998,"y":5044,"w":16,"h":16,"abs_x":998,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":1014,"y":5044,"w":16,"h":16,"abs_x":1014,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":1030,"y":5044,"w":16,"h":16,"abs_x":1030,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":1046,"y":5044,"w":16,"h":16,"abs_x":1046,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p bis_size='{"x":982,"y":5076,"w":328,"h":68,"abs_x":982,"abs_y":5119}' className="text-gray-400 text-sm leading-relaxed mb-6 font-geist">"We had a full panel upgrade, and the electricians were amazing. Explained everything clearly, kept the area clean. Couldn't be happier."</p>
</div>
<div bis_size='{"x":982,"y":5168,"w":200,"h":64,"abs_x":982,"abs_y":5211}' className="flex items-center gap-3 bg-white text-black p-3 rounded-xl max-w-[200px]">
<img bis_size='{"x":994,"y":5180,"w":40,"h":40,"abs_x":994,"abs_y":5223}' className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div bis_size='{"x":1046,"y":5182,"w":53,"h":36,"abs_x":1046,"abs_y":5225}'>
<div bis_size='{"x":1046,"y":5182,"w":53,"h":20,"abs_x":1046,"abs_y":5225}' className="font-semibold text-sm font-geist">Emily S.</div>
<div bis_size='{"x":1046,"y":5202,"w":53,"h":16,"abs_x":1046,"abs_y":5245}' className="text-xs text-gray-500 font-geist">Rockdale, NSW</div>
</div>
</div>
</div>

<div bis_size='{"x":1367,"y":5011,"w":394,"h":254,"abs_x":1367,"abs_y":5054}' className="bg-[#222] p-8 rounded-2xl border border-white/5 reveal-element delay-300 flex flex-col justify-between">
<div bis_size='{"x":1400,"y":5044,"w":328,"h":124,"abs_x":1400,"abs_y":5087}'>
<div bis_size='{"x":1400,"y":5044,"w":328,"h":16,"abs_x":1400,"abs_y":5087}' className="flex text-brand-yellow mb-4">
<svg bis_size='{"x":1400,"y":5044,"w":16,"h":16,"abs_x":1400,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":1416,"y":5044,"w":16,"h":16,"abs_x":1416,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":1432,"y":5044,"w":16,"h":16,"abs_x":1432,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":1448,"y":5044,"w":16,"h":16,"abs_x":1448,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":1464,"y":5044,"w":16,"h":16,"abs_x":1464,"abs_y":5087}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p bis_size='{"x":1400,"y":5076,"w":328,"h":68,"abs_x":1400,"abs_y":5119}' className="text-gray-400 text-sm leading-relaxed mb-6 font-geist">"Called them for an emergency at night, and they arrived within 30 minutes. The issue was resolved quickly and efficiently."</p>
</div>
<div bis_size='{"x":1400,"y":5168,"w":200,"h":64,"abs_x":1400,"abs_y":5211}' className="flex items-center gap-3 bg-white text-black p-3 rounded-xl max-w-[200px]">
<img bis_size='{"x":1412,"y":5180,"w":40,"h":40,"abs_x":1412,"abs_y":5223}' className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div bis_size='{"x":1464,"y":5182,"w":65,"h":36,"abs_x":1464,"abs_y":5225}'>
<div bis_size='{"x":1464,"y":5182,"w":65,"h":20,"abs_x":1464,"abs_y":5225}' className="font-semibold text-sm font-geist">Michael T.</div>
<div bis_size='{"x":1464,"y":5202,"w":65,"h":16,"abs_x":1464,"abs_y":5245}' className="text-xs text-gray-500 font-geist">Waterloo, NSW</div>
</div>
</div>
</div>
</div>
<div bis_size='{"x":530,"y":5313,"w":1232,"h":48,"abs_x":530,"abs_y":5356}' className="mt-12 reveal-element">
<button bis_size='{"x":530,"y":5313,"w":208,"h":48,"abs_x":530,"abs_y":5356}' className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 font-geist">
                    More testimonials <svg bis_size='{"x":691,"y":5329,"w":16,"h":16,"abs_x":691,"abs_y":5372}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":5457,"w":2293,"h":896,"abs_x":0,"abs_y":5500}' className="py-24 bg-gray-50">
<div bis_size='{"x":506,"y":5553,"w":1280,"h":704,"abs_x":506,"abs_y":5596}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":530,"y":5553,"w":1232,"h":72,"abs_x":530,"abs_y":5596}' className="mb-16 reveal-element">
<div bis_size='{"x":530,"y":5553,"w":1232,"h":16,"abs_x":530,"abs_y":5596}' className="flex items-center gap-3 mb-4">
<span bis_size='{"x":530,"y":5560,"w":32,"h":1,"abs_x":530,"abs_y":5603}' className="w-8 h-[1px] bg-brand-yellow"></span>
<span bis_size='{"x":574,"y":5553,"w":37,"h":16,"abs_x":574,"abs_y":5596}' className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Blog</span>
</div>
<h2 bis_size='{"x":530,"y":5585,"w":1232,"h":40,"abs_x":530,"abs_y":5628}' className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold">READ ABOUT ELECTRICITY</h2>
</div>
<div bis_size='{"x":530,"y":5689,"w":1232,"h":472,"abs_x":530,"abs_y":5732}' className="grid md:grid-cols-2 gap-8">

<div bis_size='{"x":530,"y":5689,"w":600,"h":472,"abs_x":530,"abs_y":5732}' className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-element delay-100">
<div bis_size='{"x":530,"y":5689,"w":600,"h":256,"abs_x":530,"abs_y":5732}' className="h-64 overflow-hidden">
<img bis_size='{"x":530,"y":5689,"w":600,"h":256,"abs_x":530,"abs_y":5732}' className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div bis_size='{"x":530,"y":5945,"w":600,"h":216,"abs_x":530,"abs_y":5988}' className="p-8">
<div bis_size='{"x":562,"y":5977,"w":536,"h":16,"abs_x":562,"abs_y":6020}' className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-geist">
<svg bis_size='{"x":562,"y":5979,"w":12,"h":12,"abs_x":562,"abs_y":6022}' className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> August 29, 2024
                        </div>
<h3 bis_size='{"x":562,"y":6005,"w":536,"h":28,"abs_x":562,"abs_y":6048}' className="text-xl font-semibold text-brand-dark mb-3 font-geist">How to Prepare for an Electrical Inspection</h3>
<p bis_size='{"x":562,"y":6045,"w":536,"h":40,"abs_x":562,"abs_y":6088}' className="text-gray-500 text-sm mb-6 line-clamp-2 font-geist">Ensure your home passes an electrical inspection with these helpful preparation tips covering wiring, outlets, and panels.</p>
<a bis_size='{"x":562,"y":6109,"w":536,"h":20,"abs_x":562,"abs_y":6152}' className="text-brand-yellow text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all font-geist" href="#">Read more <svg bis_size='{"x":640,"y":6111,"w":16,"h":16,"abs_x":640,"abs_y":6154}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>

<div bis_size='{"x":1162,"y":5689,"w":600,"h":472,"abs_x":1162,"abs_y":5732}' className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-element delay-200">
<div bis_size='{"x":1162,"y":5689,"w":600,"h":256,"abs_x":1162,"abs_y":5732}' className="h-64 overflow-hidden">
<img bis_size='{"x":1162,"y":5689,"w":600,"h":256,"abs_x":1162,"abs_y":5732}' className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div bis_size='{"x":1162,"y":5945,"w":600,"h":216,"abs_x":1162,"abs_y":5988}' className="p-8">
<div bis_size='{"x":1194,"y":5977,"w":536,"h":16,"abs_x":1194,"abs_y":6020}' className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-geist">
<svg bis_size='{"x":1194,"y":5979,"w":12,"h":12,"abs_x":1194,"abs_y":6022}' className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> July 15, 2024
                        </div>
<h3 bis_size='{"x":1194,"y":6005,"w":536,"h":28,"abs_x":1194,"abs_y":6048}' className="text-xl font-semibold text-brand-dark mb-3 font-geist">The Benefits of Upgrading to LED Lighting</h3>
<p bis_size='{"x":1194,"y":6045,"w":536,"h":40,"abs_x":1194,"abs_y":6088}' className="text-gray-500 text-sm mb-6 line-clamp-2 font-geist">Discover why upgrading to LED lighting is one of the best investments for your home's efficiency and longevity.</p>
<a bis_size='{"x":1194,"y":6109,"w":536,"h":20,"abs_x":1194,"abs_y":6152}' className="text-brand-yellow text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all font-geist" href="#">Read more <svg bis_size='{"x":1272,"y":6111,"w":16,"h":16,"abs_x":1272,"abs_y":6154}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
<div bis_size='{"x":530,"y":6209,"w":1232,"h":48,"abs_x":530,"abs_y":6252}' className="mt-12 reveal-element">
<button bis_size='{"x":530,"y":6209,"w":196,"h":48,"abs_x":530,"abs_y":6252}' className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 font-geist">
                    More blog posts <svg bis_size='{"x":678,"y":6225,"w":16,"h":16,"abs_x":678,"abs_y":6268}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":6353,"w":2293,"h":289,"abs_x":0,"abs_y":6396}' className="py-24 bg-brand-dark border-b border-gray-800">
<div bis_size='{"x":506,"y":6449,"w":1280,"h":96,"abs_x":506,"abs_y":6492}' className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8 reveal-element">
<h2 bis_size='{"x":530,"y":6449,"w":672,"h":96,"abs_x":530,"abs_y":6492}' className="text-4xl lg:text-5xl text-white tracking-tight max-w-2xl font-space-grotesk font-semibold">
                LET US SOLVE YOUR ELECTRICAL PROBLEMS
            </h2>
<button bis_size='{"x":1537,"y":6469,"w":224,"h":56,"abs_x":1537,"abs_y":6512}' className="bg-brand-yellow text-brand-dark px-10 py-4 rounded-full text-base font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-3 font-geist">
                0420 264 105 <div bis_size='{"x":1698,"y":6485,"w":24,"h":24,"abs_x":1698,"abs_y":6528}' className="bg-white p-1 rounded-full"><svg bis_size='{"x":1702,"y":6489,"w":16,"h":16,"abs_x":1702,"abs_y":6532}' className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></div>
</button>
</div>
</section>

<footer bis_size='{"x":0,"y":6642,"w":2293,"h":486,"abs_x":0,"abs_y":6685}' className="bg-brand-dark pt-20 pb-10 border-t border-gray-900">
<div bis_size='{"x":506,"y":6723,"w":1280,"h":365,"abs_x":506,"abs_y":6766}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":530,"y":6723,"w":1232,"h":252,"abs_x":530,"abs_y":6766}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div bis_size='{"x":530,"y":6723,"w":272,"h":252,"abs_x":530,"abs_y":6766}'>
<div bis_size='{"x":530,"y":6723,"w":272,"h":28,"abs_x":530,"abs_y":6766}' className="flex items-center gap-2 mb-6">
<svg bis_size='{"x":530,"y":6727,"w":20,"h":20,"abs_x":530,"abs_y":6770}' className="lucide lucide-zap w-5 h-5 fill-white text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span bis_size='{"x":558,"y":6723,"w":81,"h":28,"abs_x":558,"abs_y":6766}' className="text-lg font-semibold text-white tracking-tight font-geist">ELECTRIA</span>
</div>
<p bis_size='{"x":530,"y":6775,"w":272,"h":40,"abs_x":530,"abs_y":6818}' className="text-gray-500 text-sm mb-6 font-geist">Expert solutions for all your electrical needs - fast, safe, and efficient.</p>
<div bis_size='{"x":530,"y":6839,"w":272,"h":20,"abs_x":530,"abs_y":6882}' className="flex gap-4">
<a bis_size='{"x":530,"y":6839,"w":20,"h":20,"abs_x":530,"abs_y":6882}' className="text-gray-400 hover:text-brand-yellow transition-colors" href="#"><svg bis_size='{"x":530,"y":6839,"w":20,"h":20,"abs_x":530,"abs_y":6882}' className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a bis_size='{"x":566,"y":6839,"w":20,"h":20,"abs_x":566,"abs_y":6882}' className="text-gray-400 hover:text-brand-yellow transition-colors" href="#"><svg bis_size='{"x":566,"y":6839,"w":20,"h":20,"abs_x":566,"abs_y":6882}' className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a bis_size='{"x":602,"y":6839,"w":20,"h":20,"abs_x":602,"abs_y":6882}' className="text-gray-400 hover:text-brand-yellow transition-colors" href="#"><svg bis_size='{"x":602,"y":6839,"w":20,"h":20,"abs_x":602,"abs_y":6882}' className="lucide lucide-music-2 w-5 h-5" data-lucide="music-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg></a>
</div>
</div>

<div bis_size='{"x":850,"y":6723,"w":272,"h":252,"abs_x":850,"abs_y":6766}'>
<h4 bis_size='{"x":850,"y":6723,"w":272,"h":28,"abs_x":850,"abs_y":6766}' className="text-white font-medium mb-6 font-geist">PAGES</h4>
<ul bis_size='{"x":850,"y":6775,"w":272,"h":200,"abs_x":850,"abs_y":6818}' className="space-y-4 text-sm text-gray-500">
<li bis_size='{"x":850,"y":6775,"w":272,"h":20,"abs_x":850,"abs_y":6818}'><a bis_size='{"x":850,"y":6776,"w":38,"h":18,"abs_x":850,"abs_y":6819}' className="hover:text-brand-yellow transition-colors font-geist" href="#">About</a></li>
<li bis_size='{"x":850,"y":6811,"w":272,"h":20,"abs_x":850,"abs_y":6854}'><a bis_size='{"x":850,"y":6812,"w":55,"h":18,"abs_x":850,"abs_y":6855}' className="hover:text-brand-yellow transition-colors font-geist" href="#">Services</a></li>
<li bis_size='{"x":850,"y":6847,"w":272,"h":20,"abs_x":850,"abs_y":6890}'><a bis_size='{"x":850,"y":6848,"w":26,"h":18,"abs_x":850,"abs_y":6891}' className="hover:text-brand-yellow transition-colors font-geist" href="#">FAQ</a></li>
<li bis_size='{"x":850,"y":6883,"w":272,"h":20,"abs_x":850,"abs_y":6926}'><a bis_size='{"x":850,"y":6884,"w":80,"h":18,"abs_x":850,"abs_y":6927}' className="hover:text-brand-yellow transition-colors font-geist" href="#">Testimonials</a></li>
<li bis_size='{"x":850,"y":6919,"w":272,"h":20,"abs_x":850,"abs_y":6962}'><a bis_size='{"x":850,"y":6920,"w":29,"h":18,"abs_x":850,"abs_y":6963}' className="hover:text-brand-yellow transition-colors font-geist" href="#">Blog</a></li>
<li bis_size='{"x":850,"y":6955,"w":272,"h":20,"abs_x":850,"abs_y":6998}'><a bis_size='{"x":850,"y":6956,"w":50,"h":18,"abs_x":850,"abs_y":6999}' className="hover:text-brand-yellow transition-colors font-geist" href="#">Contact</a></li>
</ul>
</div>

<div bis_size='{"x":1170,"y":6723,"w":272,"h":252,"abs_x":1170,"abs_y":6766}'></div>

<div bis_size='{"x":1490,"y":6723,"w":272,"h":252,"abs_x":1490,"abs_y":6766}'>
<h4 bis_size='{"x":1490,"y":6723,"w":272,"h":28,"abs_x":1490,"abs_y":6766}' className="text-white font-medium mb-6 font-geist">CONTACT</h4>
<ul bis_size='{"x":1490,"y":6775,"w":272,"h":128,"abs_x":1490,"abs_y":6818}' className="space-y-4 text-sm text-gray-500">
<li bis_size='{"x":1490,"y":6775,"w":272,"h":20,"abs_x":1490,"abs_y":6818}' className="flex items-start gap-3 font-geist">
<svg bis_size='{"x":1490,"y":6779,"w":16,"h":16,"abs_x":1490,"abs_y":6822}' className="lucide lucide-map-pin w-4 h-4 mt-1 text-brand-yellow" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            0420 264 105 Street, New York
                        </li>
<li bis_size='{"x":1490,"y":6811,"w":272,"h":20,"abs_x":1490,"abs_y":6854}' className="flex items-center gap-3 font-geist">
<svg bis_size='{"x":1490,"y":6813,"w":16,"h":16,"abs_x":1490,"abs_y":6856}' className="lucide lucide-phone w-4 h-4 text-brand-yellow" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            0420 264 105
                        </li>
<li bis_size='{"x":1490,"y":6847,"w":272,"h":20,"abs_x":1490,"abs_y":6890}' className="flex items-center gap-3 font-geist">
<svg bis_size='{"x":1490,"y":6849,"w":16,"h":16,"abs_x":1490,"abs_y":6892}' className="lucide lucide-mail w-4 h-4 text-brand-yellow" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            example@example.com
                        </li>
<li bis_size='{"x":1490,"y":6883,"w":272,"h":20,"abs_x":1490,"abs_y":6926}' className="flex items-center gap-3 font-geist">
<svg bis_size='{"x":1490,"y":6885,"w":16,"h":16,"abs_x":1490,"abs_y":6928}' className="lucide lucide-clock w-4 h-4 text-brand-yellow" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            Available 24/7
                        </li>
</ul>
</div>
</div>
<div bis_size='{"x":530,"y":7039,"w":1232,"h":49,"abs_x":530,"abs_y":7082}' className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p bis_size='{"x":530,"y":7072,"w":132,"h":16,"abs_x":530,"abs_y":7115}' className="font-geist">© 2024 Nutria Template</p>
<div bis_size='{"x":1552,"y":7072,"w":210,"h":16,"abs_x":1552,"abs_y":7115}' className="flex items-center gap-1">
<span bis_size='{"x":1552,"y":7072,"w":102,"h":16,"abs_x":1552,"abs_y":7115}' className="font-geist">Made by <span bis_size='{"x":1602,"y":7072,"w":52,"h":16,"abs_x":1602,"abs_y":7115}' className="text-white font-geist">Sebadam</span></span>
<span bis_size='{"x":1666,"y":7072,"w":3,"h":16,"abs_x":1666,"abs_y":7115}' className="mx-2 font-geist">•</span>
<span bis_size='{"x":1682,"y":7072,"w":80,"h":16,"abs_x":1682,"abs_y":7115}' className="font-geist">Built in <span bis_size='{"x":1723,"y":7072,"w":38,"h":16,"abs_x":1723,"abs_y":7115}' className="text-white font-geist">Framer</span></span>
</div>
</div>
</div>
</footer>




    </>
  );
}
