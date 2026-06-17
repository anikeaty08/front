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
'brand-yellow': '#DFFF00',
'brand-dark': '#050505',
'brand-panel': '#0A0A0A',
'brand-zinc': '#121212',
'brand-border': '#27272a',
},
fontFamily: {
'display': ['Anton', 'sans-serif'],
'sans': ['Inter', 'sans-serif'],
'body': ['Manrope', 'sans-serif'],
'mono': ['Space Mono', 'monospace'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
'dots': "radial-gradient(#333 1px, transparent 1px)",
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



      lucide.createIcons();
      
      // Scroll Progress Handler
      window.addEventListener('scroll', () => {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          document.getElementById('scroll-progress').style.width = scrolled + "%";
      });

      // Simple parallax effect for hero image
      window.addEventListener('scroll', () => {
          const scrolled = window.scrollY;
          const heroImg = document.getElementById('hero-image');
          if (heroImg && scrolled < 1000) {
              heroImg.style.transform = `translateY(${scrolled * 0.15}px) scale(${1 + scrolled * 0.0002})`;
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
      

<div className="grain"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-brand-dark/80 backdrop-blur-xl supports-[backdrop-filter]:bg-brand-dark/60">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="group flex items-center gap-4" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center font-display text-xl group-hover:bg-brand-yellow transition-colors">I</div>
<div className="hidden md:flex flex-col">
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">We Are</span>
<span className="text-sm font-bold uppercase tracking-wide text-white group-hover:text-brand-yellow transition-colors leading-none">Impactors</span>
</div>
</a>

<div className="hidden md:flex items-center gap-12">
<div className="flex items-center gap-8">
<a className="text-[10px] font-mono font-medium text-zinc-400 hover:text-brand-yellow uppercase tracking-widest transition-colors" href="#">Archive</a>
<a className="text-[10px] font-mono font-medium text-zinc-400 hover:text-brand-yellow uppercase tracking-widest transition-colors" href="#">Studio</a>
<a className="text-[10px] font-mono font-medium text-white hover:text-brand-yellow uppercase tracking-widest transition-colors flex items-center gap-2" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse"></span>
                    Live News
                </a>
</div>
<a className="border border-zinc-700 hover:border-brand-yellow px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:text-black hover:bg-brand-yellow transition-all duration-300" href="#">
                Subscribe
            </a>
</div>

<button className="md:hidden text-white hover:text-brand-yellow transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="w-full h-[1px] bg-zinc-800">
<div className="h-full bg-brand-yellow w-0 transition-all duration-100 ease-out" id="scroll-progress"></div>
</div>
</nav>

<main className="relative min-h-screen border-x border-zinc-800/50 max-w-screen-2xl mx-auto bg-brand-dark">

<header className="pt-40 pb-16 px-6 md:px-12 relative z-10 border-b border-zinc-800">
<div className="max-w-screen-xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
<div className="flex items-center gap-3">
<span className="px-2 py-1 bg-brand-yellow text-black text-[10px] font-mono font-bold uppercase tracking-widest">New Campaign</span>
<span className="px-2 py-1 border border-zinc-700 text-zinc-400 text-[10px] font-mono uppercase tracking-widest">Read: 5 min</span>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-4">
<span>Published Oct 24, 2023</span>
<span className="w-px h-3 bg-zinc-800"></span>
<span>London, UK</span>
</div>
</div>
<h1 className="text-6xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-display uppercase text-white leading-[0.85] tracking-tight mb-16">
                    Revolt launches<br/>
<span className="text-zinc-700 transition-colors duration-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-yellow hover:to-white cursor-default">Digital Initiative</span>
</h1>
</div>
</header>

<div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative border-b border-zinc-800 group">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
<img alt="Article Hero" className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-[2s] ease-out" id="hero-image" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2200&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-black/80 to-transparent">
<p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest max-w-screen-2xl mx-auto px-6 md:px-6">
                     Img 01 — The digital frontier of legislative change
                 </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

<aside className="hidden lg:block lg:col-span-3 border-r border-zinc-800 p-8">
<div className="sticky top-24 flex flex-col gap-12">

<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-800 overflow-hidden grayscale">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<div>
<p className="text-xs font-bold text-white uppercase tracking-wider">Sarah Jenks</p>
<p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Editor in Chief</p>
</div>
</div>

<div className="flex flex-col gap-2">
<span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Share</span>
<button className="flex items-center gap-3 text-zinc-400 hover:text-brand-yellow transition-colors group">
<i className="w-4 h-4" data-lucide="twitter"></i>
<span className="text-xs uppercase font-medium tracking-wider opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">Twitter</span>
</button>
<button className="flex items-center gap-3 text-zinc-400 hover:text-brand-yellow transition-colors group">
<i className="w-4 h-4" data-lucide="linkedin"></i>
<span className="text-xs uppercase font-medium tracking-wider opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">LinkedIn</span>
</button>
<button className="flex items-center gap-3 text-zinc-400 hover:text-brand-yellow transition-colors group">
<i className="w-4 h-4" data-lucide="link"></i>
<span className="text-xs uppercase font-medium tracking-wider opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">Copy Link</span>
</button>
</div>

<div>
<span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4 block">Topics</span>
<div className="flex flex-wrap gap-2">
<span className="text-xs text-zinc-400 border border-zinc-800 px-2 py-1 hover:border-zinc-500 cursor-pointer transition-colors">#Activism</span>
<span className="text-xs text-zinc-400 border border-zinc-800 px-2 py-1 hover:border-zinc-500 cursor-pointer transition-colors">#Digital</span>
</div>
</div>
</div>
</aside>

<article className="col-span-1 lg:col-span-9 p-6 md:p-16 lg:p-24 relative">
<div className="max-w-3xl">
<p className="drop-cap text-xl md:text-2xl text-zinc-300 font-body font-light leading-relaxed mb-12">
                        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
                    </p>
<p className="text-lg text-zinc-400 font-body font-light leading-relaxed mb-12">
                        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                    </p>

<div className="bg-zinc-900/30 border border-zinc-800 p-8 my-16 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<i className="text-zinc-700 w-6 h-6 group-hover:rotate-180 transition-transform duration-700" data-lucide="asterisk"></i>
</div>
<h3 className="font-mono text-xs uppercase tracking-widest text-brand-yellow mb-4">Key Insight</h3>
<p className="text-xl md:text-3xl font-display uppercase text-white leading-tight">
                            "Digital infrastructure is no longer just a support system; it is the battlefield itself."
                        </p>
</div>
<h2 className="text-3xl md:text-4xl font-display uppercase text-white mt-20 mb-8 flex items-center gap-4">
<span className="text-brand-yellow text-lg align-top">01.</span>
                        The Structure of Change
                    </h2>
<p className="text-lg text-zinc-400 font-body font-light leading-relaxed mb-8">
                        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. 
                    </p>

<figure className="my-16 -mr-6 md:-mr-16 lg:-mr-24 relative border border-zinc-800 bg-zinc-900">
<img alt="Data visualization" className="w-full h-auto grayscale opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute bottom-4 left-4 flex gap-4">
<div className="bg-black/80 backdrop-blur-md px-3 py-1 border border-zinc-800">
<span className="text-[10px] font-mono text-brand-yellow uppercase tracking-widest">Figure 2.1</span>
</div>
</figcaption>
</figure>
<p className="text-lg text-zinc-400 font-body font-light leading-relaxed mb-12">
                        Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque.
                    </p>
<blockquote className="pl-6 border-l-2 border-brand-yellow/50 my-16">
<p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                            To ignore the digital realm is to ignore the primary venue of modern discourse.
                        </p>
</blockquote>
<p className="text-lg text-zinc-400 font-body font-light leading-relaxed mb-12">
                        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum.
                    </p>
<div className="h-px w-24 bg-brand-yellow my-16"></div>
<div className="flex items-center justify-between border border-zinc-800 bg-zinc-900/20 p-6 hover:border-zinc-600 transition-colors cursor-pointer group">
<div className="flex flex-col gap-1">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Up Next</span>
<span className="text-lg font-display uppercase text-white group-hover:text-brand-yellow transition-colors">Legislative Impact 2024</span>
</div>
<i className="text-white group-hover:translate-x-2 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>
</article>
</div>

<section className="border-y border-zinc-800 bg-zinc-950">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-zinc-800 border-b border-zinc-800">

<div className="col-span-2 md:col-span-2 lg:col-span-1 p-8 flex items-center justify-center bg-zinc-900/50">
<span className="font-mono text-xs uppercase tracking-widest text-zinc-500 text-center">Supported By</span>
</div>

<div className="group p-8 flex items-center justify-center hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-8 h-8 text-zinc-600 group-hover:text-brand-yellow transition-colors" data-lucide="triangle"></i>
</div>
<div className="group p-8 flex items-center justify-center hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-8 h-8 text-zinc-600 group-hover:text-brand-yellow transition-colors" data-lucide="hexagon"></i>
</div>
<div className="group p-8 flex items-center justify-center hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-8 h-8 text-zinc-600 group-hover:text-brand-yellow transition-colors" data-lucide="circle"></i>
</div>
<div className="group p-8 flex items-center justify-center hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<i className="w-8 h-8 text-zinc-600 group-hover:text-brand-yellow transition-colors" data-lucide="square"></i>
</div>
<div className="group p-8 flex items-center justify-center hover:bg-zinc-900 transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-display text-xl text-zinc-600 group-hover:text-brand-yellow uppercase tracking-widest">Linear</span>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-brand-dark relative border-b border-zinc-800">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
<div className="mb-12 px-6 md:px-12 flex justify-between items-end max-w-screen-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-display uppercase text-white">Latest from the Wire</h2>
<a className="hidden md:inline-block text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors border-b border-zinc-800 hover:border-white pb-1" href="#">View All</a>
</div>

<div className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-8 no-scrollbar snap-x snap-mandatory">

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
<div className="aspect-[4/3] w-full bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden relative">
<div className="absolute top-4 left-4 z-20">
<span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase">Video</span>
</div>
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1616588589676-60b30c3c67c0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-display uppercase text-white leading-none group-hover:text-brand-yellow transition-colors mb-2">Systems of Oppression</h3>
<p className="text-xs font-mono text-zinc-500 uppercase">Analysis • 4 min read</p>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
<div className="aspect-[4/3] w-full bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden relative">
<div className="absolute top-4 left-4 z-20">
<span className="px-2 py-1 bg-zinc-800 text-white text-[10px] font-bold uppercase border border-zinc-600">Article</span>
</div>
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1550740550-3479f67f4e11?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-display uppercase text-white leading-none group-hover:text-brand-yellow transition-colors mb-2">The Urban Data Shift</h3>
<p className="text-xs font-mono text-zinc-500 uppercase">Report • 12 min read</p>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
<div className="aspect-[4/3] w-full bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-display uppercase text-white leading-none group-hover:text-brand-yellow transition-colors mb-2">Hardware for Good</h3>
<p className="text-xs font-mono text-zinc-500 uppercase">Tech • 6 min read</p>
</article>

<article className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
<div className="aspect-[4/3] w-full bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-2xl font-display uppercase text-white leading-none group-hover:text-brand-yellow transition-colors mb-2">Protocol Zero</h3>
<p className="text-xs font-mono text-zinc-500 uppercase">Update • 2 min read</p>
</article>
</div>
</section>

<section className="bg-brand-yellow text-brand-dark py-24 px-6 md:px-12">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
<div className="max-w-xl">
<h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.9] mb-6 tracking-tight">Don't miss the signal.</h2>
<p className="font-mono text-sm uppercase tracking-wide opacity-80 max-w-sm">Join 24,000+ impactors receiving weekly intelligence on digital activism.</p>
</div>
<div className="w-full md:w-auto flex-1 max-w-md">
<form className="flex flex-col gap-4">
<div className="relative">
<input className="w-full bg-transparent border-b-2 border-black placeholder-black/50 py-4 text-xl font-medium focus:outline-none focus:border-white transition-colors" placeholder="Email Address" type="email"/>
<i className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6" data-lucide="arrow-right"></i>
</div>
<div className="flex items-center gap-2">
<input className="appearance-none w-4 h-4 border border-black bg-transparent checked:bg-black transition-colors cursor-pointer" id="consent" type="checkbox"/>
<label className="text-[10px] font-mono uppercase tracking-widest cursor-pointer select-none" htmlFor="consent">I agree to the data policy</label>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-800 relative z-10">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

<div className="md:col-span-4 flex flex-col justify-between">
<div>
<a className="inline-block mb-8" href="#">
<span className="text-4xl font-display uppercase tracking-wide text-white">Impactors</span>
</a>
<p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                             A digital-first collective focused on legislative change through high-impact storytelling and brutalist transparency.
                         </p>
</div>
</div>

<div className="md:col-span-2">
<h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Platform</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Manifesto</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Campaigns</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Data</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Events</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Company</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>

<div className="md:col-span-4 lg:col-span-3 lg:col-start-10">
<h4 className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all group" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">© 2024 We Are Impactors Inc.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
