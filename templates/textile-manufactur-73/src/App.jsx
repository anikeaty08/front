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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">

<button className="lg:hidden text-gray-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-lg font-semibold tracking-tighter uppercase text-black flex items-center gap-2" href="#">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon> V-TEX
            </a>

<div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors" href="#">Production</a>
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors" href="#">Materials</a>
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors" href="#">Sustainability</a>
<a className="text-xs font-medium text-gray-500 hover:text-black transition-colors" href="#">Studio</a>
</div>

<div className="flex items-center gap-4">
<a className="text-xs font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors" href="#">
                    Get Quote
                </a>
</div>
</div>
</nav>
<main className="flex-grow pt-16">

<header className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-white">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
<div className="relative z-10 text-center max-w-4xl px-6">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8 animate-clip-intro">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-mono text-gray-500">Next Gen Fabrication</span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter-custom leading-[0.9] text-black mb-8 flex flex-wrap justify-center gap-x-4 md:gap-x-8">

<div className="flex">
<span className="char-wrapper"><span className="char delay-1">F</span></span>
<span className="char-wrapper"><span className="char delay-2">A</span></span>
<span className="char-wrapper"><span className="char delay-3">B</span></span>
<span className="char-wrapper"><span className="char delay-4">R</span></span>
<span className="char-wrapper"><span className="char delay-5">I</span></span>
<span className="char-wrapper"><span className="char delay-1">C</span></span>
<span className="char-wrapper"><span className="char delay-2"></span></span>
</div>

<div className="flex text-gray-400">
<span className="char-wrapper"><span className="char delay-3">F</span></span>
<span className="char-wrapper"><span className="char delay-4">U</span></span>
<span className="char-wrapper"><span className="char delay-5">T</span></span>
<span className="char-wrapper"><span className="char delay-1">U</span></span>
<span className="char-wrapper"><span className="char delay-2">R</span></span>
<span className="char-wrapper"><span className="char delay-3">E</span></span>
</div>
</h1>
<p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed animate-clip-intro" style={{animationDelay: '0.4s'}}>
                    End-to-end garment production and technical fabric development for the world's most demanding fashion houses.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-clip-intro" style={{animationDelay: '0.6s'}}>
<button className="group relative px-6 py-3 bg-black text-white text-xs font-semibold tracking-wide rounded hover:bg-gray-800 transition-all overflow-hidden">
<span className="relative z-10">Explore Capabilities</span>
<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
</button>
<button className="px-6 py-3 bg-transparent text-gray-900 border border-gray-200 text-xs font-semibold tracking-wide rounded hover:border-black transition-colors">
                        Book Consultation
                    </button>
</div>
</div>

<div className="absolute bottom-10 left-10 hidden lg:block animate-clip-intro">
<p className="font-mono text-[10px] text-gray-400">LAT: 52.4862° N<br/>LNG: 1.8904° W</p>
</div>
<div className="absolute bottom-10 right-10 hidden lg:block animate-clip-intro">
<iconify-icon className="text-gray-300 animate-bounce" icon="lucide:mouse-pointer-2" width="20"></iconify-icon>
</div>
</header>

<section className="py-12 border-y border-gray-100 bg-gray-50/50">
<p className="text-center text-[10px] uppercase tracking-widest font-mono text-gray-400 mb-8">Trusted by Global Brands</p>
<div className="relative w-full overflow-hidden marquee-mask">
<div className="flex whitespace-nowrap animate-marquee-infinite items-center gap-16 md:gap-24 pl-24">

<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:nike" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:adidas" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:patagonia" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:thenorthface" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:zara" width="64"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:arcteryx" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:prada" width="64"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:uniqlo" width="48"></iconify-icon>

<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:nike" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:adidas" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:patagonia" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:thenorthface" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:zara" width="64"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:arcteryx" width="48"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:prada" width="64"></iconify-icon>
<iconify-icon className="text-gray-300 hover:text-black transition-colors" icon="simple-icons:uniqlo" width="48"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-black mb-2">Integrated Workflow</h2>
<p className="text-gray-500 text-sm">From raw fiber to finished garment in one ecosystem.</p>
</div>
<a className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black mt-4 md:mt-0" href="#">
                        View Process <iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">

<svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden md:block pointer-events-none z-0 overflow-visible" preserveaspectratio="none">

<path d="M 250 50 C 400 50, 400 50, 550 50" fill="none" stroke="#f0f0f0" strokeWidth="2"></path>
<path className="noodle-path" d="M 250 50 C 400 50, 400 50, 550 50" fill="none" stroke="url(#gradient1)" strokeWidth="2"></path>

<path d="M 850 50 C 1000 50, 1000 50, 1150 50" fill="none" stroke="#f0f0f0" strokeWidth="2"></path>
<path className="noodle-path" d="M 850 50 C 1000 50, 1000 50, 1150 50" fill="none" stroke="url(#gradient1)" strokeWidth="2" style={{animationDelay: '1.5s'}}></path>
<defs>
<lineargradient id="gradient1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#3b82f6"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>

<div className="relative z-10 bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow reveal-on-scroll">
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
<iconify-icon icon="lucide:test-tube-2" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-2">01. R&amp;D</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                            Material science lab dedicated to developing custom blends, sustainable fibers, and performance coatings.
                        </p>
</div>

<div className="relative z-10 bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow reveal-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
<iconify-icon icon="lucide:scissors" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-2">02. Production</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                            Automated cutting and precision sewing floors with capacity for 500k+ units monthly.
                        </p>
</div>

<div className="relative z-10 bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow reveal-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
<iconify-icon icon="lucide:package-check" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-2">03. Logistics</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                            Global fulfillment centers ensuring DDP delivery to 40+ countries with real-time tracking.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-8 relative group overflow-hidden rounded-xl bg-gray-200 reveal-on-scroll">
<img alt="Tech Fabric" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<span className="inline-block px-2 py-1 border border-white/20 rounded text-[10px] uppercase tracking-wider mb-3 backdrop-blur-sm">New Technology</span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">V-Shield™ Membranes</h3>
<p className="text-sm text-gray-200 max-w-md">Waterproof, breathable, and made from 100% recycled polymers.</p>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6">
<div className="relative flex-1 group overflow-hidden rounded-xl bg-gray-200 reveal-on-scroll" style={{animationDelay: '0.1s'}}>
<img alt="Production Line" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 to-transparent">
<h3 className="text-lg font-semibold text-white tracking-tight">Rapid Prototyping</h3>
<p className="text-xs text-gray-300">48h turnaround sample room.</p>
</div>
</div>
<div className="relative flex-1 group overflow-hidden rounded-xl bg-gray-200 reveal-on-scroll" style={{animationDelay: '0.2s'}}>
<img alt="Sustainable Dyeing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 to-transparent">
<h3 className="text-lg font-semibold text-white tracking-tight">Zero-Water Dyeing</h3>
<p className="text-xs text-gray-300">Eco-conscious coloring process.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black text-white">
<div className="max-w-2xl mx-auto px-6 text-center reveal-on-scroll">
<iconify-icon className="text-gray-500 mb-6" icon="lucide:infinity" width="40"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">Start Production</h2>
<p className="text-gray-400 text-sm mb-10">Join our network of forward-thinking brands. Get the 2024 Fabric Lookbook.</p>
<form className="max-w-md mx-auto flex flex-col gap-4">
<div className="flex relative">
<input className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded text-sm placeholder:text-gray-500 focus:outline-none focus:border-white transition-colors" placeholder="work@email.com" type="email"/>
<button className="absolute right-2 top-2 bottom-2 px-4 bg-white text-black text-xs font-semibold rounded hover:bg-gray-200 transition-colors" type="submit">
                            Send
                        </button>
</div>

<div className="flex items-start justify-center gap-2 mt-2">
<label className="flex items-center space-x-2 cursor-pointer">
<input className="appearance-none w-4 h-4 border border-gray-600 rounded bg-transparent checked:bg-white checked:border-white relative transition-colors cursor-pointer" type="checkbox"/>
<span className="text-[10px] text-gray-500 uppercase tracking-wider">I agree to the <span className="underline">Privacy Policy</span></span>
<style>
                                input[type="checkbox"]:checked::after {
                                    content: '';
                                    position: absolute;
                                    left: 4px;
                                    top: 1px;
                                    width: 4px;
                                    height: 8px;
                                    border: solid black;
                                    border-width: 0 2px 2px 0;
                                    transform: rotate(45deg);
                                }
                            </style>
</label>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="text-lg font-semibold tracking-tighter uppercase text-black flex items-center gap-2 mb-6" href="#">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon> V-TEX
                    </a>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                        Pioneering the future of textile manufacturing through automation, sustainability, and material innovation.
                    </p>
</div>
<div>
<h4 className="font-mono text-[10px] font-semibold uppercase text-gray-900 mb-4 tracking-widest">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">About</a></li>
<li><a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Press</a></li>
<li><a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] font-semibold uppercase text-gray-900 mb-4 tracking-widest">Solutions</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Fabrication</a></li>
<li><a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Supply Chain</a></li>
<li><a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Design Studio</a></li>
<li><a className="text-xs text-gray-500 hover:text-black transition-colors" href="#">Quality Control</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] font-semibold uppercase text-gray-900 mb-4 tracking-widest">Social</h4>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-black transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-gray-400 hover:text-black transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
<div className="col-span-2 lg:col-span-1 bg-gray-50 p-6 rounded-lg border border-gray-100">
<h4 className="font-mono text-[10px] font-semibold uppercase text-gray-900 mb-2">Status</h4>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] text-gray-600 font-medium">Factories Operational</span>
</div>
<p className="text-[10px] text-gray-400">Last updated: Today 09:00</p>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-400 uppercase tracking-wider">© 2024 V-TEX Production Group. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-gray-400 hover:text-black uppercase tracking-wider" href="#">Privacy</a>
<a className="text-[10px] text-gray-400 hover:text-black uppercase tracking-wider" href="#">Terms</a>
<a className="text-[10px] text-gray-400 hover:text-black uppercase tracking-wider" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


F
    </>
  );
}
