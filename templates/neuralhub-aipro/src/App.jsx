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
      

<header className="sticky top-0 z-50 w-full bg-[#1b1b1b] border-b border-neutral-800">
<div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between gap-4">

<div className="flex items-center gap-4 shrink-0">
<button className="lg:hidden text-white hover:text-[#ff9000] transition-colors">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<a className="group flex items-center gap-1 tracking-tighter text-2xl text-white hover:opacity-90 transition-opacity" href="#">
<span className="font-semibold">Neural</span>
<span className="hub-orange text-black font-semibold px-1.5 py-0.5 rounded-sm">Hub</span>
</a>
</div>

<div className="hidden md:flex flex-1 max-w-2xl mx-auto relative group">
<input className="w-full bg-[#2a2a2a] text-sm text-white px-4 py-2.5 rounded-l-md border border-transparent focus:border-[#ff9000] focus:ring-0 focus:outline-none transition-all placeholder-neutral-500" placeholder="Search for clean code, huge datasets, 4090s..." type="text"/>
<button className="bg-[#2a2a2a] hover:bg-neutral-800 text-white px-4 py-2 rounded-r-md border-l border-neutral-700 transition-colors">
<i className="w-5 h-5 group-hover:text-[#ff9000] transition-colors" data-lucide="camera"></i>
</button>
<button className="absolute right-14 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white">
<i className="w-4 h-4" data-lucide="mic"></i>
</button>
</div>

<div className="flex items-center gap-3 sm:gap-6 shrink-0 text-sm font-medium">
<a className="hidden lg:flex items-center gap-2 hover:text-[#ff9000] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="upload-cloud"></i>
<span>Inject Data</span>
</a>
<a className="hidden lg:flex items-center gap-2 hover:text-[#ff9000] transition-colors" href="#">
<i className="w-5 h-5 text-[#ff9000]" data-lucide="zap"></i>
<span>Premium <span className="text-[10px] bg-[#ff9000] text-black px-1 rounded ml-1">NEW</span></span>
</a>
<div className="flex items-center gap-3 text-white">
<button className="hover:text-[#ff9000]">Log In</button>
<button className="hub-orange text-black px-4 py-1.5 rounded-sm hover:opacity-90 transition-opacity">Sign Up</button>
</div>
</div>
</div>
</header>

<nav className="bg-[#1b1b1b] border-b border-neutral-800 hidden md:block">
<div className="max-w-[1600px] mx-auto px-4">
<ul className="flex items-center gap-8 text-sm h-12 overflow-x-auto no-scrollbar">
<li><a className="text-white border-b-2 border-[#ff9000] h-12 flex items-center px-1" href="#">Home</a></li>
<li><a className="hover:text-[#ff9000] transition-colors whitespace-nowrap" href="#">Videos</a></li>
<li><a className="hover:text-[#ff9000] transition-colors whitespace-nowrap" href="#">Categories</a></li>
<li><a className="hover:text-[#ff9000] transition-colors whitespace-nowrap flex items-center gap-1" href="#">Live <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span></a></li>
<li><a className="hover:text-[#ff9000] transition-colors whitespace-nowrap" href="#">Community</a></li>
<li><a className="hover:text-[#ff9000] transition-colors whitespace-nowrap" href="#">Photos</a></li>
<li><a className="hover:text-[#ff9000] transition-colors whitespace-nowrap" href="#">Model Directory</a></li>
</ul>
</div>
</nav>

<div className="max-w-[1600px] mx-auto px-4 py-6">
<div className="w-full h-24 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded border border-neutral-800 flex items-center justify-between px-8 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] opacity-10 bg-cover bg-center"></div>
<div className="relative z-10">
<h3 className="text-xl font-semibold text-white tracking-tight">Expand your context window today.</h3>
<p className="text-neutral-400 text-sm">Get unlimited tokens and zero latency with NeuralHub Premium.</p>
</div>
<button className="relative z-10 border border-[#ff9000] text-[#ff9000] px-6 py-2 rounded uppercase text-xs font-semibold tracking-wider hover:bg-[#ff9000] hover:text-black transition-all">
                Upgrade Now
            </button>
</div>
</div>

<main className="max-w-[1600px] mx-auto px-4 pb-20">

<div className="flex items-end justify-between mb-6 border-b border-neutral-800 pb-2">
<h2 className="text-2xl text-white font-medium tracking-tight">Hot Training Data <span className="text-sm text-neutral-500 ml-2 font-normal">Recommended for your algorithm</span></h2>
<div className="flex gap-2 text-xs">
<button className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1 rounded transition-colors">Most Viewed</button>
<button className="bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1 rounded transition-colors">Top Rated</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-800 rounded overflow-hidden mb-2">
<img alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-700">
                        12:45
                    </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
<i className="w-12 h-12 text-white fill-black/50" data-lucide="play-circle"></i>
</div>
<div className="absolute top-0 left-0 w-full h-1 bg-[#ff9000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
</div>
<h3 className="text-sm text-white font-medium group-hover:text-[#ff9000] transition-colors line-clamp-2 leading-tight tracking-tight mb-1">
                    Dirty cable management gets organized by strict sysadmin
                </h3>
<div className="flex items-center justify-between text-xs text-neutral-500">
<span className="hover:text-white transition-colors">SysAdmin_xx</span>
<div className="flex items-center gap-2">
<span>1.2M views</span>
<span className="text-green-500">98%</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-800 rounded overflow-hidden mb-2">
<img alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-700">
                        45:00
                    </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
<i className="w-12 h-12 text-white fill-black/50" data-lucide="play-circle"></i>
</div>
</div>
<h3 className="text-sm text-white font-medium group-hover:text-[#ff9000] transition-colors line-clamp-2 leading-tight tracking-tight mb-1">
                    Hot thermal paste spread slowly over naked CPU die (UNCENSORED)
                </h3>
<div className="flex items-center justify-between text-xs text-neutral-500">
<span className="hover:text-white transition-colors">Overclock_King</span>
<div className="flex items-center gap-2">
<span>890K views</span>
<span className="text-green-500">99%</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-800 rounded overflow-hidden mb-2">
<img alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-700">
                        04:20
                    </div>
<div className="absolute top-2 left-2 bg-[#ff9000] text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                        HD
                    </div>
</div>
<h3 className="text-sm text-white font-medium group-hover:text-[#ff9000] transition-colors line-clamp-2 leading-tight tracking-tight mb-1">
                    Perfectly indented JSON with zero syntax errors (Satisfaction Guaranteed)
                </h3>
<div className="flex items-center justify-between text-xs text-neutral-500">
<span className="hover:text-white transition-colors">Backend_Beauty</span>
<div className="flex items-center gap-2">
<span>3.4M views</span>
<span className="text-green-500">100%</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-800 rounded overflow-hidden mb-2">
<img alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-700">
                        18:30
                    </div>
</div>
<h3 className="text-sm text-white font-medium group-hover:text-[#ff9000] transition-colors line-clamp-2 leading-tight tracking-tight mb-1">
                    Step-GPU gets stuck in PCIe slot while installing drivers
                </h3>
<div className="flex items-center justify-between text-xs text-neutral-500">
<span className="hover:text-white transition-colors">Hardware_Hub</span>
<div className="flex items-center gap-2">
<span>5M views</span>
<span className="text-green-500">92%</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-800 rounded overflow-hidden mb-2">
<img alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-700">
                        08:15
                    </div>
</div>
<h3 className="text-sm text-white font-medium group-hover:text-[#ff9000] transition-colors line-clamp-2 leading-tight tracking-tight mb-1">
                    Massive dataset gets completely normalized and cleaned
                </h3>
<div className="flex items-center justify-between text-xs text-neutral-500">
<span className="hover:text-white transition-colors">Data_Scientist_69</span>
<div className="flex items-center gap-2">
<span>600K views</span>
<span className="text-green-500">95%</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-800 rounded overflow-hidden mb-2">
<img alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-700">
                        58:00
                    </div>
<div className="absolute top-2 left-2 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                        Live
                    </div>
</div>
<h3 className="text-sm text-white font-medium group-hover:text-[#ff9000] transition-colors line-clamp-2 leading-tight tracking-tight mb-1">
                    POV: Watching defrag process reach 100% completion
                </h3>
<div className="flex items-center justify-between text-xs text-neutral-500">
<span className="hover:text-white transition-colors">Legacy_System</span>
<div className="flex items-center gap-2">
<span>22K watching</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-800 rounded overflow-hidden mb-2">
<img alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-700">
                        22:10
                    </div>
</div>
<h3 className="text-sm text-white font-medium group-hover:text-[#ff9000] transition-colors line-clamp-2 leading-tight tracking-tight mb-1">
                    Hardcore Crypto Mining Farm - Fan Noise ASMR
                </h3>
<div className="flex items-center justify-between text-xs text-neutral-500">
<span className="hover:text-white transition-colors">Hash_Rate_High</span>
<div className="flex items-center gap-2">
<span>400K views</span>
<span className="text-green-500">88%</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-800 rounded overflow-hidden mb-2">
<img alt="thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded border border-neutral-700">
                        15:00
                    </div>
</div>
<h3 className="text-sm text-white font-medium group-hover:text-[#ff9000] transition-colors line-clamp-2 leading-tight tracking-tight mb-1">
                    Unauthorized penetration testing on secure firewall
                </h3>
<div className="flex items-center justify-between text-xs text-neutral-500">
<span className="hover:text-white transition-colors">Red_Team_Leader</span>
<div className="flex items-center gap-2">
<span>900K views</span>
<span className="text-green-500">94%</span>
</div>
</div>
</div>
</div>

<div className="mt-12">
<h2 className="text-lg text-white font-medium tracking-tight mb-4">Popular Categories</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
<a className="group relative h-20 rounded overflow-hidden bg-neutral-800 border border-neutral-800 hover:border-[#ff9000] transition-colors" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1550063873-ab792950096b?q=80&amp;w=400"/>
<span className="absolute bottom-2 left-3 z-20 text-sm font-medium text-white group-hover:text-[#ff9000]">Unsupervised</span>
</a>
<a className="group relative h-20 rounded overflow-hidden bg-neutral-800 border border-neutral-800 hover:border-[#ff9000] transition-colors" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&amp;w=400"/>
<span className="absolute bottom-2 left-3 z-20 text-sm font-medium text-white group-hover:text-[#ff9000]">Bare Metal</span>
</a>
<a className="group relative h-20 rounded overflow-hidden bg-neutral-800 border border-neutral-800 hover:border-[#ff9000] transition-colors" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute bottom-2 left-3 z-20 text-sm font-medium text-white group-hover:text-[#ff9000]">Compilation</span>
</a>
<a className="group relative h-20 rounded overflow-hidden bg-neutral-800 border border-neutral-800 hover:border-[#ff9000] transition-colors" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="absolute bottom-2 left-3 z-20 text-sm font-medium text-white group-hover:text-[#ff9000]">Deep Learning</span>
</a>
<a className="group relative h-20 rounded overflow-hidden bg-neutral-800 border border-neutral-800 hover:border-[#ff9000] transition-colors" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=400"/>
<span className="absolute bottom-2 left-3 z-20 text-sm font-medium text-white group-hover:text-[#ff9000]">Big Data</span>
</a>
<a className="group relative h-20 rounded overflow-hidden bg-neutral-800 border border-neutral-800 hover:border-[#ff9000] transition-colors" href="#">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
<img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&amp;w=400"/>
<span className="absolute bottom-2 left-3 z-20 text-sm font-medium text-white group-hover:text-[#ff9000]">Robotics</span>
</a>
</div>
</div>
</main>

<footer className="border-t border-neutral-800 bg-[#1b1b1b] pt-12 pb-8">
<div className="max-w-[1600px] mx-auto px-4 text-center">
<div className="flex justify-center gap-8 mb-8 text-neutral-400 text-sm font-medium">
<a className="hover:text-[#ff9000] transition-colors" href="#">Mobile</a>
<a className="hover:text-[#ff9000] transition-colors" href="#">Tablets</a>
<a className="hover:text-[#ff9000] transition-colors" href="#">API</a>
<a className="hover:text-[#ff9000] transition-colors" href="#">Terms</a>
<a className="hover:text-[#ff9000] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#ff9000] transition-colors" href="#">DMCA</a>
<a className="hover:text-[#ff9000] transition-colors" href="#">2257 Exempt</a>
</div>
<div className="flex justify-center gap-4 mb-8">
<button className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#ff9000] hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="twitter"></i>
</button>
<button className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#ff9000] hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="instagram"></i>
</button>
<button className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#ff9000] hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="youtube"></i>
</button>
</div>
<p className="text-neutral-600 text-xs tracking-tight">
                © 2024 NeuralHub. All algorithms reserved. <br/>
                NeuralHub represents an automated content aggregation system. All models appearing on this website are 18+ version releases.
            </p>
</div>
</footer>


    </>
  );
}
