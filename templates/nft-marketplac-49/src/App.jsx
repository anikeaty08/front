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



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const interactables = document.querySelectorAll('.interactable');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Hover state for cursor
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Spotlight Effect Logic
        function handleMouseMove(e) {
            const cards = document.getElementsByClassName("spotlight-card");
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        }
        
        // Sticky Nav Blur Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-black/80');
                nav.classList.remove('bg-black/50');
            } else {
                nav.classList.add('bg-black/50');
                nav.classList.remove('bg-black/80');
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
      

<div id="cursor"></div>

<div className="noise-bg"></div>

<div className="fixed inset-0 z-0 overflow-hidden">
<div className="ambient-glow top-[-20%] left-[-10%] bg-indigo-900/20"></div>
<div className="ambient-glow bottom-[-20%] right-[-10%] bg-fuchsia-900/20" style={{animationDelay: '-5s'}}></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 backdrop-blur-md bg-black/50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="interactable flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold tracking-tighter">
                    AE
                </div>
<span className="text-lg font-semibold tracking-tight text-white group-hover:opacity-80 transition-opacity">AETHER</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="interactable hover:text-white transition-colors" href="#gallery">Drops</a>
<a className="interactable hover:text-white transition-colors" href="#creators">Creators</a>
<a className="interactable hover:text-white transition-colors" href="#about">Manifesto</a>
</div>
<div className="flex items-center gap-4">
<button className="interactable hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-xs font-medium text-white hover:border-white/20">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Connect
                </button>
<button className="md:hidden interactable text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32 relative">
<div className="flex flex-col items-start max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Live Auction: Genesis Drop 001
                </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white leading-[1.1] mb-8 mix-blend-screen interactable">
                    Collect the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-600">Unseen Future.</span>
</h1>
<p className="text-lg md:text-xl font-light text-neutral-400 max-w-2xl leading-relaxed mb-12">
                    A curated marketplace for digital artifacts. Experience the convergence of art, technology, and ownership in a decentralized ecosystem.
                </p>
<div className="flex flex-wrap items-center gap-6">
<button className="interactable group relative px-8 py-4 bg-white text-black rounded-full font-medium text-sm overflow-hidden transition-all hover:pr-10">
<span className="relative z-10 flex items-center gap-2">
                            Explore Gallery 
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
<div className="absolute inset-0 bg-neutral-200 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 z-0 duration-300"></div>
</button>
<button className="interactable group px-8 py-4 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-all flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
</div>
                        Watch Showreel
                    </button>
</div>
</div>

<div className="absolute right-0 top-10 md:top-0 w-1/3 h-full pointer-events-none hidden lg:block opacity-60">
<div className="relative w-full h-[500px]">
<div className="absolute top-10 right-10 w-64 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm rounded-2xl transform rotate-6 animate-[float_8s_ease-in-out_infinite]"></div>
<div className="absolute top-20 right-32 w-64 h-80 bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm rounded-2xl transform -rotate-3 animate-[float_10s_ease-in-out_infinite_reverse]"></div>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-black/20 backdrop-blur-sm py-8 mb-32 overflow-hidden marquee-container">
<div className="marquee-content flex gap-16 whitespace-nowrap min-w-full items-center">

<span className="text-4xl font-semibold tracking-tighter text-white/10">VERIFIED ASSETS</span>
<iconify-icon className="text-neutral-800 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-semibold tracking-tighter text-white/10">ETHEREUM NETWORK</span>
<iconify-icon className="text-neutral-800 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-semibold tracking-tighter text-white/10">SMART CONTRACTS</span>
<iconify-icon className="text-neutral-800 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-semibold tracking-tighter text-white/10">0% GAS MINTING</span>
<iconify-icon className="text-neutral-800 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-semibold tracking-tighter text-white/10">VERIFIED ASSETS</span>
<iconify-icon className="text-neutral-800 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-semibold tracking-tighter text-white/10">ETHEREUM NETWORK</span>
<iconify-icon className="text-neutral-800 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-semibold tracking-tighter text-white/10">SMART CONTRACTS</span>
<iconify-icon className="text-neutral-800 text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl font-medium text-white mb-2 tracking-tight">Recent Drops</h2>
<p className="text-sm text-neutral-500">Curated specifically for the discerning collector.</p>
</div>
<div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
<button className="interactable px-4 py-2 text-xs font-medium text-black bg-white rounded shadow-sm">All Assets</button>
<button className="interactable px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors">Photography</button>
<button className="interactable px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors">3D Render</button>
<button className="interactable px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors">Abstract</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="gallery" onmousemove="handleMouseMove(event)">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="group spotlight-card rounded-2xl relative h-full flex flex-col interactable border border-white/5 bg-neutral-900/40 backdrop-blur-md">
<div className="spotlight-border"></div>
<div className="relative flex-1 overflow-hidden m-2 rounded-xl">
<img alt="NFT" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-xs font-medium text-white flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2h 45m
                        </div>
</div>
<div className="p-5 relative z-10">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Ethereal Form #84</h3>
<p className="text-xs text-neutral-500 mt-1">@void_designer</p>
</div>
<div className="text-right">
<p className="text-xs text-neutral-500 mb-1">Current Bid</p>
<p className="text-sm font-semibold text-indigo-400 flex items-center justify-end gap-1">
<iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> 2.4 ETH
                                </p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
<span className="text-xs font-mono text-neutral-400">#A8F2</span>
<button className="text-xs text-white hover:text-indigo-400 transition-colors flex items-center gap-1">
                                Place Bid <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group spotlight-card rounded-2xl relative h-full md:col-span-2 flex flex-col interactable border border-white/5 bg-neutral-900/40 backdrop-blur-md">
<div className="spotlight-border"></div>
<div className="relative flex-1 overflow-hidden m-2 rounded-xl">
<img alt="NFT" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 max-w-sm">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Cyberpunk Dystopia Series</h3>
<p className="text-sm text-neutral-300 font-light line-clamp-2">A collection exploring the intersection of biological life and synthetic environments in a post-singularity world.</p>
</div>
</div>
<div className="p-5 flex justify-between items-center relative z-10">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;auto=format&amp;fit=crop"/></div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&amp;auto=format&amp;fit=crop"/></div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white">+4</div>
</div>
<button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors border border-white/5">
                            View Collection
                        </button>
</div>
</div>

<div className="group spotlight-card rounded-2xl relative h-full flex flex-col interactable border border-white/5 bg-neutral-900/40 backdrop-blur-md">
<div className="spotlight-border"></div>
<div className="relative flex-1 overflow-hidden m-2 rounded-xl">
<img alt="NFT" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 relative z-10">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Liquid Chrome</h3>
<p className="text-xs text-neutral-500 mt-1">@metal_heart</p>
</div>
<div className="text-right">
<p className="text-xs text-neutral-500 mb-1">Reserve</p>
<p className="text-sm font-semibold text-indigo-400 flex items-center justify-end gap-1">
<iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> 0.8 ETH
                                </p>
</div>
</div>
</div>
</div>

<div className="group spotlight-card rounded-2xl relative h-full flex flex-col interactable border border-white/5 bg-neutral-900/40 backdrop-blur-md">
<div className="spotlight-border"></div>
<div className="relative flex-1 overflow-hidden m-2 rounded-xl">
<img alt="NFT" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-indigo-500/80 backdrop-blur-sm border border-indigo-400/20 rounded-md px-2 py-0.5 text-[10px] font-bold tracking-widest text-white uppercase">
                            New
                        </div>
</div>
<div className="p-5 relative z-10">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Neon Dreams</h3>
<p className="text-xs text-neutral-500 mt-1">@light_walker</p>
</div>
<div className="text-right">
<p className="text-xs text-neutral-500 mb-1">Fixed Price</p>
<p className="text-sm font-semibold text-indigo-400 flex items-center justify-end gap-1">
<iconify-icon icon="solar:tag-price-linear"></iconify-icon> 1.2 ETH
                                </p>
</div>
</div>
</div>
</div>

<div className="group spotlight-card rounded-2xl relative h-full flex flex-col interactable border border-white/5 bg-neutral-900/40 backdrop-blur-md">
<div className="spotlight-border"></div>
<div className="relative flex-1 overflow-hidden m-2 rounded-xl">
<img alt="NFT" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 relative z-10">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Prism #02</h3>
<p className="text-xs text-neutral-500 mt-1">@geo_metrics</p>
</div>
<div className="text-right">
<p className="text-xs text-neutral-500 mb-1">Highest Bid</p>
<p className="text-sm font-semibold text-indigo-400 flex items-center justify-end gap-1">
<iconify-icon icon="solar:wad-of-money-linear"></iconify-icon> 5.0 ETH
                                </p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="interactable group px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-all text-sm font-medium inline-flex items-center gap-2">
<iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="solar:refresh-linear"></iconify-icon>
                    Load More Assets
                </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
</div>
<div className="relative z-10 p-12 md:p-20 max-w-2xl">
<iconify-icon className="text-indigo-400 text-5xl mb-6" icon="solar:shield-star-linear"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Security Meets Artistry.</h2>
<p className="text-neutral-400 text-lg font-light mb-8">
                        Every asset on Aether is verified on the blockchain. Our proprietary smart contracts ensure royalty distribution is instant and ownership is immutable.
                    </p>
<div className="flex flex-col sm:flex-row gap-8">
<div>
<p className="text-3xl font-bold text-white tracking-tight">24k+</p>
<p className="text-sm text-neutral-500 mt-1">Artists</p>
</div>
<div>
<p className="text-3xl font-bold text-white tracking-tight">$140M</p>
<p className="text-sm text-neutral-500 mt-1">Volume Traded</p>
</div>
<div>
<p className="text-3xl font-bold text-white tracking-tight">0.2s</p>
<p className="text-sm text-neutral-500 mt-1">Transaction Time</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold tracking-tighter text-xs">
                            AE
                        </div>
<span className="text-md font-semibold tracking-tight text-white">AETHER</span>
</a>
<p className="text-sm text-neutral-500 font-light max-w-xs">
                        The definitive platform for the next generation of digital creators and collectors. Building the future of provenance.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Marketplace</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-indigo-400 transition-colors interactable" href="#">All NFTs</a></li>
<li><a className="hover:text-indigo-400 transition-colors interactable" href="#">Art</a></li>
<li><a className="hover:text-indigo-400 transition-colors interactable" href="#">Collectibles</a></li>
<li><a className="hover:text-indigo-400 transition-colors interactable" href="#">Virtual Worlds</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-indigo-400 transition-colors interactable" href="#">Help Center</a></li>
<li><a className="hover:text-indigo-400 transition-colors interactable" href="#">Partners</a></li>
<li><a className="hover:text-indigo-400 transition-colors interactable" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors interactable" href="#">Newsletter</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-xs text-neutral-600">© 2024 Aether Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-neutral-500 hover:text-white transition-colors interactable" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors interactable" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors interactable" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>
</main>


    </>
  );
}
