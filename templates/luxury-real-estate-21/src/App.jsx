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



        // Parallax effect on scroll - only affects orbs, not navbar
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const orbs = document.querySelectorAll('.orb');
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.1;
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.property-card').forEach(card => {
            observer.observe(card);
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
      

<div bis_size='{"x":0,"y":0,"w":911,"h":557,"abs_x":440,"abs_y":43}' className="fixed inset-0 pointer-events-none overflow-hidden z-0">
<div bis_size='{"x":227,"y":139,"w":384,"h":384,"abs_x":667,"abs_y":182}' className="orb absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-full blur-3xl animate-pulse" style={{animation: '8s ease-in-out 0s infinite normal none running float1', transform: 'translateY(189.8px)'}}></div>
<div bis_size='{"x":363,"y":97,"w":320,"h":320,"abs_x":803,"abs_y":140}' className="orb absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl" style={{animation: '10s ease-in-out 0s infinite normal none running float2', transform: 'translateY(379.6px)'}}></div>
<div bis_size='{"x":351,"y":278,"w":256,"h":256,"abs_x":791,"abs_y":321}' className="orb absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-full blur-3xl" style={{animation: '12s ease-in-out 0s infinite normal none running float3', transform: 'translateY(569.4px)'}}></div>
</div>

<nav bis_size='{"x":0,"y":0,"w":911,"h":69,"abs_x":440,"abs_y":43}' className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-white/5">
<div bis_size='{"x":0,"y":0,"w":911,"h":68,"abs_x":440,"abs_y":43}' className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div bis_size='{"x":24,"y":20,"w":48,"h":28,"abs_x":464,"abs_y":63}' className="text-xl font-semibold tracking-tighter">LUXE</div>
<div bis_size='{"x":261,"y":24,"w":319,"h":20,"abs_x":701,"abs_y":67}' className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a bis_size='{"x":261,"y":24,"w":68,"h":20,"abs_x":701,"abs_y":67}' className="hover:text-white transition-all duration-300 hover:scale-105" href="#">Properties</a>
<a bis_size='{"x":361,"y":24,"w":64,"h":20,"abs_x":801,"abs_y":67}' className="hover:text-white transition-all duration-300 hover:scale-105" href="#">Locations</a>
<a bis_size='{"x":458,"y":24,"w":39,"h":20,"abs_x":898,"abs_y":67}' className="hover:text-white transition-all duration-300 hover:scale-105" href="#">About</a>
<a bis_size='{"x":529,"y":24,"w":51,"h":20,"abs_x":969,"abs_y":67}' className="hover:text-white transition-all duration-300 hover:scale-105" href="#">Contact</a>
</div>
<button bis_size='{"x":770,"y":16,"w":116,"h":36,"abs_x":1210,"abs_y":59}' className="px-5 py-2 bg-white text-zinc-950 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-white/20">
                Get Started
            </button>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":911,"h":764,"abs_x":440,"abs_y":43}' className="min-h-screen flex items-center justify-center relative pt-20">
<div bis_size='{"x":47,"y":80,"w":816,"h":684,"abs_x":487,"abs_y":123}' className="max-w-7xl mx-auto px-6 py-20 text-center">
<div bis_size='{"x":334,"y":160,"w":242,"h":34,"abs_x":774,"abs_y":203}' className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs text-zinc-400 mb-8 backdrop-blur-sm border border-white/10" style={{animation: 'fadeInUp 0.8s ease-out'}}>
<span bis_size='{"x":351,"y":173,"w":8,"h":8,"abs_x":791,"abs_y":216}' className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Now serving 50+ cities worldwide
            </div>
<h1 bis_size='{"x":71,"y":226,"w":768,"h":144,"abs_x":511,"abs_y":269}' className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6 leading-none" style={{animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
                Find Your
                <span bis_size='{"x":71,"y":298,"w":768,"h":72,"abs_x":511,"abs_y":341}' className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent" style={{animation: 'shimmer 3s ease-in-out infinite'}}>Dream Home</span>
</h1>
<p bis_size='{"x":119,"y":394,"w":672,"h":56,"abs_x":559,"abs_y":437}' className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light" style={{animation: 'fadeInUp 0.8s ease-out 0.4s both'}}>
                Discover extraordinary properties in the world's most desirable locations. Luxury living reimagined.
            </p>

<div bis_size='{"x":71,"y":498,"w":768,"h":62,"abs_x":511,"abs_y":541}' className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10" style={{animation: 'fadeInUp 0.8s ease-out 0.6s both'}}>
<div bis_size='{"x":80,"y":507,"w":750,"h":44,"abs_x":520,"abs_y":550}' className="flex flex-col md:flex-row gap-2">
<div bis_size='{"x":80,"y":507,"w":274,"h":44,"abs_x":520,"abs_y":550}' className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl">
<svg aria-hidden="true" bis_size='{"x":96,"y":519,"w":20,"h":20,"abs_x":536,"abs_y":562}' data-icon="lucide:map-pin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g bis_size='{"x":99,"y":520,"w":13,"h":16,"abs_x":539,"abs_y":563}' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path bis_size='{"x":99,"y":520,"w":13,"h":16,"abs_x":539,"abs_y":563}' d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle bis_size='{"x":104,"y":524,"w":5,"h":5,"abs_x":544,"abs_y":567}' cx="12" cy="10" r="3"></circle></g></svg>
<input bis_size='{"x":128,"y":519,"w":210,"h":20,"abs_x":568,"abs_y":562}' className="bg-transparent outline-none text-sm flex-1 placeholder-zinc-500" placeholder="Location" type="text"/>
</div>
<div bis_size='{"x":362,"y":507,"w":274,"h":44,"abs_x":802,"abs_y":550}' className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl">
<svg aria-hidden="true" bis_size='{"x":378,"y":519,"w":20,"h":20,"abs_x":818,"abs_y":562}' data-icon="lucide:home" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g bis_size='{"x":381,"y":520,"w":15,"h":15,"abs_x":821,"abs_y":563}' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path bis_size='{"x":386,"y":529,"w":5,"h":7,"abs_x":826,"abs_y":572}' d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path bis_size='{"x":381,"y":520,"w":15,"h":15,"abs_x":821,"abs_y":563}' d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<input bis_size='{"x":410,"y":519,"w":210,"h":20,"abs_x":850,"abs_y":562}' className="bg-transparent outline-none text-sm flex-1 placeholder-zinc-500" placeholder="Property Type" type="text"/>
</div>
<div bis_size='{"x":644,"y":507,"w":274,"h":44,"abs_x":1084,"abs_y":550}' className="flex-1 flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl">
<svg aria-hidden="true" bis_size='{"x":660,"y":519,"w":20,"h":20,"abs_x":1100,"abs_y":562}' data-icon="lucide:dollar-sign" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":665,"y":520,"w":10,"h":16,"abs_x":1105,"abs_y":563}' d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<input bis_size='{"x":692,"y":519,"w":210,"h":20,"abs_x":1132,"abs_y":562}' className="bg-transparent outline-none text-sm flex-1 placeholder-zinc-500" placeholder="Price Range" type="text"/>
</div>
<button bis_size='{"x":926,"y":507,"w":137,"h":44,"abs_x":1366,"abs_y":550}' className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 flex items-center gap-2">
<svg aria-hidden="true" bis_size='{"x":958,"y":520,"w":18,"h":18,"abs_x":1398,"abs_y":563}' data-icon="lucide:search" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g bis_size='{"x":960,"y":522,"w":13,"h":13,"abs_x":1400,"abs_y":565}' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path bis_size='{"x":970,"y":532,"w":3,"h":3,"abs_x":1410,"abs_y":575}' d="m21 21l-4.34-4.34"></path><circle bis_size='{"x":960,"y":522,"w":12,"h":12,"abs_x":1400,"abs_y":565}' cx="11" cy="11" r="8"></circle></g></svg>
                        Search
                    </button>
</div>
</div>

<div bis_size='{"x":71,"y":624,"w":768,"h":60,"abs_x":511,"abs_y":667}' className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16" style={{animation: 'fadeInUp 0.8s ease-out 0.8s both'}}>
<div bis_size='{"x":190,"y":624,"w":80,"h":60,"abs_x":630,"abs_y":667}' className="text-center group cursor-pointer">
<div bis_size='{"x":190,"y":624,"w":80,"h":40,"abs_x":630,"abs_y":667}' className="text-3xl md:text-4xl font-semibold tracking-tight group-hover:scale-110 transition-transform duration-300" style={{animation: 'countUp 2s ease-out'}}>15K+</div>
<div bis_size='{"x":190,"y":664,"w":80,"h":20,"abs_x":630,"abs_y":707}' className="text-sm text-zinc-500">Properties</div>
</div>
<div bis_size='{"x":334,"y":624,"w":98,"h":60,"abs_x":774,"abs_y":667}' className="text-center group cursor-pointer">
<div bis_size='{"x":334,"y":624,"w":98,"h":40,"abs_x":774,"abs_y":667}' className="text-3xl md:text-4xl font-semibold tracking-tight group-hover:scale-110 transition-transform duration-300">$2.5B</div>
<div bis_size='{"x":334,"y":664,"w":98,"h":20,"abs_x":774,"abs_y":707}' className="text-sm text-zinc-500">Total Sales</div>
</div>
<div bis_size='{"x":496,"y":624,"w":67,"h":60,"abs_x":936,"abs_y":667}' className="text-center group cursor-pointer">
<div bis_size='{"x":496,"y":624,"w":67,"h":40,"abs_x":936,"abs_y":667}' className="text-3xl md:text-4xl font-semibold tracking-tight group-hover:scale-110 transition-transform duration-300">50+</div>
<div bis_size='{"x":496,"y":664,"w":67,"h":20,"abs_x":936,"abs_y":707}' className="text-sm text-zinc-500">Cities</div>
</div>
<div bis_size='{"x":628,"y":624,"w":92,"h":60,"abs_x":1068,"abs_y":667}' className="text-center group cursor-pointer">
<div bis_size='{"x":628,"y":624,"w":92,"h":40,"abs_x":1068,"abs_y":667}' className="text-3xl md:text-4xl font-semibold tracking-tight group-hover:scale-110 transition-transform duration-300">99%</div>
<div bis_size='{"x":628,"y":664,"w":92,"h":20,"abs_x":1068,"abs_y":707}' className="text-sm text-zinc-500">Happy Clients</div>
</div>
</div>
</div>

<div bis_size='{"x":443,"y":692,"w":24,"h":40,"abs_x":883,"abs_y":735}' className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{animation: 'bounce 2s infinite'}}>
<div bis_size='{"x":443,"y":692,"w":24,"h":40,"abs_x":883,"abs_y":735}' className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center">
<div bis_size='{"x":452,"y":702,"w":6,"h":12,"abs_x":892,"abs_y":745}' className="w-1.5 h-3 bg-zinc-500 rounded-full mt-2" style={{animation: 'scrollDown 1.5s ease-in-out infinite'}}></div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":764,"w":911,"h":1298,"abs_x":440,"abs_y":807}' className="py-24 relative">
<div bis_size='{"x":0,"y":860,"w":911,"h":1106,"abs_x":440,"abs_y":903}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":860,"w":863,"h":68,"abs_x":464,"abs_y":903}' className="flex items-end justify-between mb-12">
<div bis_size='{"x":24,"y":860,"w":318,"h":68,"abs_x":464,"abs_y":903}'>
<p bis_size='{"x":24,"y":860,"w":318,"h":20,"abs_x":464,"abs_y":903}' className="text-violet-400 text-sm font-medium mb-2">Featured Properties</p>
<h2 bis_size='{"x":24,"y":888,"w":318,"h":40,"abs_x":464,"abs_y":931}' className="text-3xl md:text-4xl font-semibold tracking-tight">Exceptional Homes</h2>
</div>
<a bis_size='{"x":810,"y":908,"w":76,"h":20,"abs_x":1250,"abs_y":951}' className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group" href="#">
                    View All
                    <svg aria-hidden="true" bis_size='{"x":871,"y":910,"w":16,"h":16,"abs_x":1311,"abs_y":953}' data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":874,"y":913,"w":9,"h":9,"abs_x":1314,"abs_y":956}' d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div bis_size='{"x":24,"y":976,"w":863,"h":990,"abs_x":464,"abs_y":1019}' className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":976,"w":419,"h":483,"abs_x":464,"abs_y":1019}' className="group cursor-pointer property-card" style={{animation: '0.8s ease-out 0s 1 normal forwards running fadeInUp'}}>
<div bis_size='{"x":24,"y":976,"w":419,"h":483,"abs_x":464,"abs_y":1019}' className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
<div bis_size='{"x":25,"y":977,"w":417,"h":313,"abs_x":465,"abs_y":1020}' className="aspect-[4/3] bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 relative overflow-hidden">
<img bis_size='{"x":25,"y":977,"w":417,"h":313,"abs_x":465,"abs_y":1020}' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"/>
<div bis_size='{"x":25,"y":977,"w":417,"h":313,"abs_x":465,"abs_y":1020}' className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div bis_size='{"x":41,"y":993,"w":91,"h":24,"abs_x":481,"abs_y":1036}' className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/90 backdrop-blur-sm rounded-full text-xs font-medium">
                                New Listing
                            </div>
<button bis_size='{"x":386,"y":993,"w":40,"h":40,"abs_x":826,"abs_y":1036}' className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors hover:scale-110">
<svg aria-hidden="true" bis_size='{"x":397,"y":1004,"w":18,"h":18,"abs_x":837,"abs_y":1047}' data-icon="lucide:heart" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":399,"y":1006,"w":15,"h":12,"abs_x":839,"abs_y":1049}' d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div bis_size='{"x":25,"y":1290,"w":417,"h":168,"abs_x":465,"abs_y":1333}' className="p-5">
<div bis_size='{"x":45,"y":1310,"w":377,"h":16,"abs_x":485,"abs_y":1353}' className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
<svg aria-hidden="true" bis_size='{"x":45,"y":1311,"w":14,"h":14,"abs_x":485,"abs_y":1354}' data-icon="lucide:map-pin" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g bis_size='{"x":47,"y":1312,"w":9,"h":11,"abs_x":487,"abs_y":1355}' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path bis_size='{"x":47,"y":1312,"w":9,"h":11,"abs_x":487,"abs_y":1355}' d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle bis_size='{"x":50,"y":1315,"w":3,"h":3,"abs_x":490,"abs_y":1358}' cx="12" cy="10" r="3"></circle></g></svg>
                                Beverly Hills, CA
                            </div>
<h3 bis_size='{"x":45,"y":1334,"w":377,"h":28,"abs_x":485,"abs_y":1377}' className="text-lg font-medium mb-2 group-hover:text-violet-400 transition-colors">Modern Hillside Villa</h3>
<p bis_size='{"x":45,"y":1370,"w":377,"h":32,"abs_x":485,"abs_y":1413}' className="text-2xl font-semibold tracking-tight text-white mb-4">$4,250,000</p>
<div bis_size='{"x":45,"y":1418,"w":377,"h":20,"abs_x":485,"abs_y":1461}' className="flex items-center gap-4 text-sm text-zinc-400">
<span bis_size='{"x":45,"y":1418,"w":65,"h":20,"abs_x":485,"abs_y":1461}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":45,"y":1420,"w":16,"h":16,"abs_x":485,"abs_y":1463}' data-icon="lucide:bed-double" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":46,"y":1422,"w":13,"h":10,"abs_x":486,"abs_y":1465}' d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    5 Beds
                                </span>
<span bis_size='{"x":126,"y":1418,"w":70,"h":20,"abs_x":566,"abs_y":1461}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":126,"y":1420,"w":16,"h":16,"abs_x":566,"abs_y":1463}' data-icon="lucide:bath" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":127,"y":1422,"w":13,"h":12,"abs_x":567,"abs_y":1465}' d="M10 4L8 6m9 13v2M2 12h20M7 19v2M9 5L7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    4 Baths
                                </span>
<span bis_size='{"x":212,"y":1418,"w":87,"h":20,"abs_x":652,"abs_y":1461}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":212,"y":1420,"w":16,"h":16,"abs_x":652,"abs_y":1463}' data-icon="lucide:square" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":214,"y":1422,"w":12,"h":12,"abs_x":654,"abs_y":1465}' fill="none" height="18" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect></svg>
                                    5,200 sqft
                                </span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":467,"y":976,"w":419,"h":483,"abs_x":907,"abs_y":1019}' className="group cursor-pointer property-card" style={{animation: '0.8s ease-out 0s 1 normal forwards running fadeInUp'}}>
<div bis_size='{"x":467,"y":976,"w":419,"h":483,"abs_x":907,"abs_y":1019}' className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
<div bis_size='{"x":468,"y":977,"w":417,"h":313,"abs_x":908,"abs_y":1020}' className="aspect-[4/3] bg-gradient-to-br from-cyan-900/50 to-blue-900/50 relative overflow-hidden">
<img bis_size='{"x":468,"y":977,"w":417,"h":313,"abs_x":908,"abs_y":1020}' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"/>
<div bis_size='{"x":468,"y":977,"w":417,"h":313,"abs_x":908,"abs_y":1020}' className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div bis_size='{"x":484,"y":993,"w":74,"h":24,"abs_x":924,"abs_y":1036}' className="absolute top-4 left-4 px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-zinc-950">
                                Premium
                            </div>
<button bis_size='{"x":830,"y":993,"w":40,"h":40,"abs_x":1270,"abs_y":1036}' className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors hover:scale-110">
<svg aria-hidden="true" bis_size='{"x":841,"y":1004,"w":18,"h":18,"abs_x":1281,"abs_y":1047}' data-icon="lucide:heart" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":842,"y":1006,"w":15,"h":12,"abs_x":1282,"abs_y":1049}' d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div bis_size='{"x":468,"y":1290,"w":417,"h":168,"abs_x":908,"abs_y":1333}' className="p-5">
<div bis_size='{"x":488,"y":1310,"w":377,"h":16,"abs_x":928,"abs_y":1353}' className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
<svg aria-hidden="true" bis_size='{"x":488,"y":1311,"w":14,"h":14,"abs_x":928,"abs_y":1354}' data-icon="lucide:map-pin" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g bis_size='{"x":490,"y":1312,"w":9,"h":11,"abs_x":930,"abs_y":1355}' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path bis_size='{"x":490,"y":1312,"w":9,"h":11,"abs_x":930,"abs_y":1355}' d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle bis_size='{"x":493,"y":1315,"w":3,"h":3,"abs_x":933,"abs_y":1358}' cx="12" cy="10" r="3"></circle></g></svg>
                                Miami Beach, FL
                            </div>
<h3 bis_size='{"x":488,"y":1334,"w":377,"h":28,"abs_x":928,"abs_y":1377}' className="text-lg font-medium mb-2 group-hover:text-violet-400 transition-colors">Oceanfront Penthouse</h3>
<p bis_size='{"x":488,"y":1370,"w":377,"h":32,"abs_x":928,"abs_y":1413}' className="text-2xl font-semibold tracking-tight text-white mb-4">$8,900,000</p>
<div bis_size='{"x":488,"y":1418,"w":377,"h":20,"abs_x":928,"abs_y":1461}' className="flex items-center gap-4 text-sm text-zinc-400">
<span bis_size='{"x":488,"y":1418,"w":66,"h":20,"abs_x":928,"abs_y":1461}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":488,"y":1420,"w":16,"h":16,"abs_x":928,"abs_y":1463}' data-icon="lucide:bed-double" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":489,"y":1422,"w":13,"h":10,"abs_x":929,"abs_y":1465}' d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    4 Beds
                                </span>
<span bis_size='{"x":570,"y":1418,"w":69,"h":20,"abs_x":1010,"abs_y":1461}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":570,"y":1420,"w":16,"h":16,"abs_x":1010,"abs_y":1463}' data-icon="lucide:bath" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":572,"y":1422,"w":13,"h":12,"abs_x":1012,"abs_y":1465}' d="M10 4L8 6m9 13v2M2 12h20M7 19v2M9 5L7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    5 Baths
                                </span>
<span bis_size='{"x":656,"y":1418,"w":87,"h":20,"abs_x":1096,"abs_y":1461}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":656,"y":1420,"w":16,"h":16,"abs_x":1096,"abs_y":1463}' data-icon="lucide:square" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":658,"y":1422,"w":12,"h":12,"abs_x":1098,"abs_y":1465}' fill="none" height="18" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect></svg>
                                    4,800 sqft
                                </span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":1483,"w":419,"h":483,"abs_x":464,"abs_y":1526}' className="group cursor-pointer property-card" style={{animation: '0.8s ease-out 0s 1 normal forwards running fadeInUp'}}>
<div bis_size='{"x":24,"y":1483,"w":419,"h":483,"abs_x":464,"abs_y":1526}' className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5">
<div bis_size='{"x":25,"y":1484,"w":417,"h":313,"abs_x":465,"abs_y":1527}' className="aspect-[4/3] bg-gradient-to-br from-amber-900/50 to-orange-900/50 relative overflow-hidden">
<img bis_size='{"x":25,"y":1484,"w":417,"h":313,"abs_x":465,"abs_y":1527}' className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"/>
<div bis_size='{"x":25,"y":1484,"w":417,"h":313,"abs_x":465,"abs_y":1527}' className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<button bis_size='{"x":386,"y":1500,"w":40,"h":40,"abs_x":826,"abs_y":1543}' className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors hover:scale-110">
<svg aria-hidden="true" bis_size='{"x":397,"y":1511,"w":18,"h":18,"abs_x":837,"abs_y":1554}' data-icon="lucide:heart" data-width="18" height="18" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":399,"y":1514,"w":15,"h":12,"abs_x":839,"abs_y":1557}' d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div bis_size='{"x":25,"y":1797,"w":417,"h":168,"abs_x":465,"abs_y":1840}' className="pt-5 pr-5 pb-5 pl-5">
<div bis_size='{"x":45,"y":1817,"w":377,"h":16,"abs_x":485,"abs_y":1860}' className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
<svg aria-hidden="true" bis_size='{"x":45,"y":1818,"w":14,"h":14,"abs_x":485,"abs_y":1861}' data-icon="lucide:map-pin" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g bis_size='{"x":47,"y":1819,"w":9,"h":11,"abs_x":487,"abs_y":1862}' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path bis_size='{"x":47,"y":1819,"w":9,"h":11,"abs_x":487,"abs_y":1862}' d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle bis_size='{"x":50,"y":1822,"w":3,"h":3,"abs_x":490,"abs_y":1865}' cx="12" cy="10" r="3"></circle></g></svg>
                                Aspen, CO
                            </div>
<h3 bis_size='{"x":45,"y":1841,"w":377,"h":28,"abs_x":485,"abs_y":1884}' className="text-lg font-medium mb-2 group-hover:text-violet-400 transition-colors">Mountain Retreat Estate</h3>
<p bis_size='{"x":45,"y":1877,"w":377,"h":32,"abs_x":485,"abs_y":1920}' className="text-2xl font-semibold tracking-tight text-white mb-4">$6,750,000</p>
<div bis_size='{"x":45,"y":1925,"w":377,"h":20,"abs_x":485,"abs_y":1968}' className="flex items-center gap-4 text-sm text-zinc-400">
<span bis_size='{"x":45,"y":1925,"w":65,"h":20,"abs_x":485,"abs_y":1968}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":45,"y":1927,"w":16,"h":16,"abs_x":485,"abs_y":1970}' data-icon="lucide:bed-double" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":46,"y":1929,"w":13,"h":10,"abs_x":486,"abs_y":1972}' d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    6 Beds
                                </span>
<span bis_size='{"x":126,"y":1925,"w":69,"h":20,"abs_x":566,"abs_y":1968}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":126,"y":1927,"w":16,"h":16,"abs_x":566,"abs_y":1970}' data-icon="lucide:bath" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":128,"y":1929,"w":13,"h":12,"abs_x":568,"abs_y":1972}' d="M10 4L8 6m9 13v2M2 12h20M7 19v2M9 5L7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    7 Baths
                                </span>
<span bis_size='{"x":212,"y":1925,"w":87,"h":20,"abs_x":652,"abs_y":1968}' className="flex items-center gap-1">
<svg aria-hidden="true" bis_size='{"x":212,"y":1927,"w":16,"h":16,"abs_x":652,"abs_y":1970}' data-icon="lucide:square" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":214,"y":1929,"w":12,"h":12,"abs_x":654,"abs_y":1972}' fill="none" height="18" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect></svg>
                                    8,500 sqft
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2062,"w":911,"h":628,"abs_x":440,"abs_y":2105}' className="pt-24 pb-24 relative">
<div bis_size='{"x":0,"y":2158,"w":911,"h":436,"abs_x":440,"abs_y":2201}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":2158,"w":863,"h":436,"abs_x":464,"abs_y":2201}' className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-900/50 via-fuchsia-900/50 to-cyan-900/50 p-12 md:p-20 border border-white/10">
<div %3e%3c="" 0="" 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v0h-2v4h-4v2h4v4h2v6h4v4h-4zm6="" 34v-4h4v4h0v2h4v4h2v-4h4v-2h6zm6="" 4v0h4v4h0v2h4v4h2v6h4v4h6z\"="" 60="" 60\"="" bis_size='{"x":25,"y":2159,"w":861,"h":434,"abs_x":465,"abs_y":2202}' className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\" d="\'M36" fill="\'none\'" fillOpacity="\'0.03\'%3E%3Cpath" fill-rule="\'evenodd\'%3E%3Cg" g%3e%3c="" height="\'60\'" opacity-50"="" svg%3e')]="" viewbox="\'0" xmlns="\'http://www.w3.org/2000/svg\'%3E%3Cg"></div>

<div bis_size='{"x":766,"y":2199,"w":80,"h":80,"abs_x":1206,"abs_y":2242}' className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-2xl" style={{animation: 'float1 6s ease-in-out infinite'}}></div>
<div bis_size='{"x":65,"y":2489,"w":64,"h":64,"abs_x":505,"abs_y":2532}' className="absolute bottom-10 left-10 w-16 h-16 border border-white/10 rounded-full" style={{animation: 'float2 8s ease-in-out infinite'}}></div>
<div bis_size='{"x":105,"y":2239,"w":701,"h":274,"abs_x":545,"abs_y":2282}' className="relative text-center max-w-3xl mx-auto">
<h2 bis_size='{"x":105,"y":2239,"w":701,"h":96,"abs_x":545,"abs_y":2282}' className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Find Your Perfect Home?</h2>
<p bis_size='{"x":105,"y":2359,"w":701,"h":56,"abs_x":545,"abs_y":2402}' className="text-lg text-zinc-300 mb-10 font-light">Join thousands of satisfied clients who found their dream property with us. Start your journey today.</p>
<div bis_size='{"x":105,"y":2455,"w":701,"h":58,"abs_x":545,"abs_y":2498}' className="flex flex-col sm:flex-row gap-4 justify-center">
<button bis_size='{"x":248,"y":2455,"w":208,"h":58,"abs_x":688,"abs_y":2498}' className="px-8 py-4 bg-white text-zinc-950 rounded-full font-medium hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 flex items-center justify-center gap-2">
<svg aria-hidden="true" bis_size='{"x":280,"y":2475,"w":18,"h":18,"abs_x":720,"abs_y":2518}' data-icon="lucide:phone" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":282,"y":2476,"w":15,"h":15,"abs_x":722,"abs_y":2519}' d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Schedule a Call
                        </button>
<button bis_size='{"x":473,"y":2455,"w":189,"h":58,"abs_x":913,"abs_y":2498}' className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center gap-2">
<svg aria-hidden="true" bis_size='{"x":506,"y":2475,"w":18,"h":18,"abs_x":946,"abs_y":2518}' data-icon="lucide:play" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":509,"y":2477,"w":12,"h":13,"abs_x":949,"abs_y":2520}' d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Watch Video
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":2690,"w":911,"h":125,"abs_x":440,"abs_y":2733}' className="border-t border-white/5 py-12">
<div bis_size='{"x":0,"y":2739,"w":911,"h":28,"abs_x":440,"abs_y":2782}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":2739,"w":863,"h":28,"abs_x":464,"abs_y":2782}' className="flex flex-col md:flex-row items-center justify-between gap-6">
<div bis_size='{"x":24,"y":2739,"w":48,"h":28,"abs_x":464,"abs_y":2782}' className="text-xl font-semibold tracking-tighter">LUXE</div>
<div bis_size='{"x":248,"y":2743,"w":190,"h":20,"abs_x":688,"abs_y":2786}' className="flex items-center gap-6 text-sm text-zinc-500">
<a bis_size='{"x":248,"y":2743,"w":49,"h":20,"abs_x":688,"abs_y":2786}' className="hover:text-white transition-colors" href="#">Privacy</a>
<a bis_size='{"x":321,"y":2743,"w":41,"h":20,"abs_x":761,"abs_y":2786}' className="hover:text-white transition-colors" href="#">Terms</a>
<a bis_size='{"x":387,"y":2743,"w":51,"h":20,"abs_x":827,"abs_y":2786}' className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p bis_size='{"x":615,"y":2743,"w":271,"h":20,"abs_x":1055,"abs_y":2786}' className="text-sm text-zinc-600">© 2024 Luxe Estates. All rights reserved.</p>
</div>
</div>
</footer>
<style>
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(5deg); }
            66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        @keyframes float2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(-40px, 20px) rotate(-10deg); }
            66% { transform: translate(30px, -40px) rotate(10deg); }
        }

        @keyframes float3 {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(50px, 30px); }
        }

        @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes scrollDown {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(6px); opacity: 0.5; }
        }

        @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-10px); }
        }

        .property-card:hover {
            transform: translateY(-8px);
            transition: transform 0.4s ease-out;
        }

        h1 span {
            background-size: 200% 200%;
        }
    </style>


    </>
  );
}
