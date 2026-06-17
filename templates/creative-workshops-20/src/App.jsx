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
      

<div className="fixed inset-0 pointer-events-none z-50 grainy-bg mix-blend-multiply"></div>

<nav className="fixed top-0 w-full z-40 glass-panel border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter uppercase text-stone-900" href="#">
                    Kallitexno
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#workshops">Workshops</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#schedule">Schedule</a>
<a className="text-sm font-normal text-stone-500 hover:text-stone-900 transition-colors" href="#about">Atelier</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-normal text-stone-900 hover:text-stone-600 transition-colors" href="#">Log in</a>
<a className="bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors px-4 py-2 rounded-full text-xs font-medium tracking-wide" href="#">
                    Book a Seat
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-br from-stone-200 via-orange-50/50 to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-stone-500"></span>
</span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wider">Athens, Greece</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                The art of <span className="font-serif italic text-stone-600">making</span> <br/> with your hands.
            </h1>
<p className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Kallitexno is a premium workshop space dedicated to the tangible arts. 
                Experience pottery, painting, and culinary craftsmanship in a serene environment.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-stone-900 text-white rounded-lg text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-200/50">
                    Explore Workshops <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-stone-200 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-50 transition-all">
                    View Gallery
                </button>
</div>
</div>
</header>

<section className="py-24 border-t border-stone-200" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-4">Crafted for Creators</h2>
<p className="text-stone-500 max-w-xl">We provide the space, materials, and guidance. You provide the inspiration. A sanctuary for modern artistry.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
<img alt="Pottery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1502613374390-8da7aa532177?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
<div className="text-white">
<h3 className="text-2xl font-medium tracking-tight mb-2">Ceramic &amp; Pottery</h3>
<p className="text-stone-300 font-light text-sm max-w-sm">Master the wheel with expert guidance. Create timeless vessels using locally sourced Greek clay.</p>
</div>
</div>
</div>

<div className="md:col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-orange-50 border border-stone-200 p-8 flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-white border border-orange-100 flex items-center justify-center text-orange-400 mb-4">
<i className="w-5 h-5" data-lucide="cookie"></i>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Cookie Art</h3>
<p className="text-stone-500 text-sm">Intricate royal icing techniques for edible masterpieces.</p>
</div>
</div>

<div className="md:col-span-1 row-span-2 relative group overflow-hidden rounded-2xl bg-white border border-stone-200 p-8 flex flex-col items-center text-center justify-center hover:shadow-lg transition-shadow duration-300">
<div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mx-auto mb-6 shadow-sm">
<i className="w-8 h-8 text-stone-700" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">Fine Art</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                            Oil, acrylic, and watercolor sessions led by renowned Athenian artists.
                        </p>
</div>
</div>

<div className="md:col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 p-8 text-white flex flex-col justify-between">
<div className="flex justify-between items-start">
<i className="w-5 h-5 text-stone-400" data-lucide="map-pin"></i>
<span className="text-xs font-mono text-stone-500">37.98, 23.72</span>
</div>
<div>
<h3 className="text-lg font-medium mb-1">Athens Atelier</h3>
<p className="text-stone-400 text-sm">A sun-drenched neoclassical space.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="workshops">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Upcoming Curricula</h2>
<p className="text-stone-500 mt-2">Select a discipline to begin your journey.</p>
</div>
<a className="text-sm font-medium text-stone-900 border-b border-stone-300 hover:border-stone-900 transition-colors pb-0.5 w-max" href="#">View Full Calendar</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group flex flex-col gap-4">
<div className="relative overflow-hidden rounded-lg bg-stone-100 aspect-[4/3]">
<img alt="Pottery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-900 border border-stone-200">
                            €65 / Session
                        </div>
</div>
<div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-2 uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-stone-400"></span> Beginner
                        </div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">Intro to Wheel Throwing</h3>
<p className="text-sm text-stone-500 mt-2 line-clamp-2">Learn the fundamentals of centering clay and shaping cylinders on the potter's wheel.</p>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="relative overflow-hidden rounded-lg bg-stone-100 aspect-[4/3]">
<img alt="Cookies" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&amp;w=2665&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-900 border border-stone-200">
                            €45 / Session
                        </div>
</div>
<div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-2 uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-orange-300"></span> Intermediate
                        </div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">Botanical Cookie Decor</h3>
<p className="text-sm text-stone-500 mt-2 line-clamp-2">Master the art of piping floral designs and delicate leaves on sugar cookies.</p>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="relative overflow-hidden rounded-lg bg-stone-100 aspect-[4/3]">
<img alt="Painting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-900 border border-stone-200">
                            €55 / Session
                        </div>
</div>
<div>
<div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-2 uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-stone-400"></span> All Levels
                        </div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">Abstract Acrylics</h3>
<p className="text-sm text-stone-500 mt-2 line-clamp-2">Express yourself through color theory and texture layering techniques.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6" id="schedule">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium text-stone-900 tracking-tight">This Week at Kallitexno</h2>
</div>
<div className="space-y-4">

<div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-xl border border-stone-200 hover:border-stone-400 bg-white hover:shadow-sm transition-all cursor-pointer">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-stone-50 border border-stone-200 text-stone-900">
<span className="text-xs font-bold uppercase">Oct</span>
<span className="text-xl font-serif font-medium">12</span>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Advanced Pottery: Glazing</h4>
<div className="flex items-center gap-3 mt-1 text-sm text-stone-500">
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="clock"></i> 17:00 - 19:00</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Studio A</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-xs text-stone-500 font-medium">+4</div>
</div>
<button className="px-5 py-2 rounded-full border border-stone-200 text-stone-900 text-xs font-medium hover:bg-stone-900 hover:text-white transition-colors">
                        Join
                    </button>
</div>
</div>

<div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-xl border border-stone-200 hover:border-stone-400 bg-white hover:shadow-sm transition-all cursor-pointer">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-stone-50 border border-stone-200 text-stone-900">
<span className="text-xs font-bold uppercase">Oct</span>
<span className="text-xl font-serif font-medium">14</span>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Sugar Cookies &amp; Royal Icing</h4>
<div className="flex items-center gap-3 mt-1 text-sm text-stone-500">
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="clock"></i> 10:00 - 13:00</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Kitchen Lab</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=9"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=12"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-xs text-stone-500 font-medium">+8</div>
</div>
<button className="px-5 py-2 rounded-full border border-stone-200 text-stone-900 text-xs font-medium hover:bg-stone-900 hover:text-white transition-colors">
                        Join
                    </button>
</div>
</div>

<div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-xl border border-stone-200 hover:border-stone-400 bg-white hover:shadow-sm transition-all cursor-pointer">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-stone-50 border border-stone-200 text-stone-900">
<span className="text-xs font-bold uppercase">Oct</span>
<span className="text-xl font-serif font-medium">15</span>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Oil Painting on Canvas</h4>
<div className="flex items-center gap-3 mt-1 text-sm text-stone-500">
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="clock"></i> 14:00 - 18:00</span>
<span className="w-1 h-1 rounded-full bg-stone-300"></span>
<span>Studio B</span>
</div>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4">
<span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded">2 Spots Left</span>
<button className="px-5 py-2 rounded-full border border-stone-200 text-stone-900 text-xs font-medium hover:bg-stone-900 hover:text-white transition-colors">
                        Join
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-stone-200 bg-stone-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="flex justify-center mb-6">
<i className="w-8 h-8 text-stone-300 fill-current" data-lucide="quote"></i>
</div>
<h3 className="text-2xl md:text-3xl font-serif font-medium text-stone-900 mb-8 leading-snug">
                "Kallitexno is not just a workshop; it's a retreat for the soul. The pottery session was the most grounding experience I've had in Athens."
            </h3>
<div className="flex items-center justify-center gap-3">
<img alt="Eleni K." className="w-10 h-10 rounded-full border border-stone-300" src="https://i.pravatar.cc/100?img=32"/>
<div className="text-left">
<p className="text-sm font-medium text-stone-900">Eleni K.</p>
<p className="text-xs text-stone-500">Attended Ceramic Art</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="bg-stone-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
<h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight mb-4 relative z-10">Join our creative community</h2>
<p className="text-stone-400 mb-8 max-w-lg mx-auto text-sm md:text-base relative z-10">Get early access to schedule releases and special events.</p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto relative z-10">
<input className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all" placeholder="email@address.com" type="email"/>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-200 transition-colors" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="border-t border-stone-200 bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-bold tracking-tighter uppercase text-stone-900 block mb-6" href="#">
                        Kallitexno
                    </a>
<p className="text-xs text-stone-500 max-w-xs">
                        A premium space for creators in Athens, Greece. Pottery, Art, Culinary.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Workshops</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Pottery</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Painting</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Cookie Art</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Private Events</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">About Us</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Careers</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Contact</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-stone-400 hover:text-stone-900" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2023 Kallitexno Workshops. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-stone-400 hover:text-stone-600" href="#">Privacy Policy</a>
<a className="text-xs text-stone-400 hover:text-stone-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
