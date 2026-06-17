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
display: ['Sora', 'sans-serif'],
},
colors: {
brand: {
indigo: '#2E1065',
purple: '#7C3AED',
dark: '#030712',
card: '#111827',
soft: '#F8FAFC',
subtext: '#94A3B8',
},
accent: {
cyan: '#06B6D4',
lime: '#A3E635',
orange: '#FB923C',
pink: '#F43F5E',
yellow: '#FACC15',
}
},
backgroundImage: {
'gradient-brand': 'linear-gradient(120deg, #7C3AED 0%, #06B6D4 100%)',
'gradient-hot': 'linear-gradient(135deg, #F43F5E 0%, #FACC15 100%)',
'gradient-dark': 'radial-gradient(circle at center, #1e1b4b 0%, #030712 100%)',
},
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Custom Cursor Logic
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');
        
        // Use logic to only run on desktop to prevent mobile issues
        if (window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                // Simple follow for dot
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                // Lag effect for outline
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            });

            // Hover interactions
            const hoverables = document.querySelectorAll('.hoverable');
            hoverables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    document.body.classList.add('hovering');
                });
                el.addEventListener('mouseleave', () => {
                    document.body.classList.remove('hovering');
                });
            });
        }

        // SPA Navigation Logic
        function switchPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Initialize Tilt (simple version without library)
        // Note: For complex tilt, Vanilla-Tilt.js is recommended, but here we use CSS pseudo-3d mostly
        // This JS adds a subtle movement to background blobs on mouse move
        document.addEventListener('mousemove', (e) => {
            const blobs = document.querySelectorAll('.animate-blob');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            blobs.forEach((blob, index) => {
                const speed = (index + 1) * 20;
                blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
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
      

<div className="noise-bg"></div>

<div className="cursor-dot hidden md:block" id="cursor-dot" style={{left: '578px', top: '0px'}}></div>
<div className="cursor-outline hidden md:block" id="cursor-outline"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" style={{transform: 'translate(13.1364px, 0px)'}}></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000" style={{transform: 'translate(26.2727px, 0px)'}}></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-accent-pink/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000" style={{transform: 'translate(39.4091px, 0px)'}}></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] md:w-auto">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

<a className="hoverable flex items-center gap-2 px-4 group" href="#" onclick="switchPage('landing')">
<div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform">
<span className="font-display font-bold text-lg text-white">C</span>
</div>
<span className="font-display font-semibold tracking-tight text-lg text-white hidden md:block">CONTAINER</span>
</a>

<ul className="flex items-center gap-1 mx-2">
<li><button className="hoverable px-4 py-2 text-sm font-medium text-brand-subtext hover:text-white hover:bg-white/10 rounded-full transition-all" onclick="switchPage('explore')">Explore</button></li>
<li className=""><button className="hoverable px-4 py-2 text-sm font-medium text-brand-subtext hover:text-white hover:bg-white/10 rounded-full transition-all" onclick="switchPage('search')">AI Search</button></li>
<li className=""><button className="hoverable px-4 py-2 text-sm font-medium text-brand-subtext hover:text-white hover:bg-white/10 rounded-full transition-all" onclick="switchPage('dashboard')">Creators</button></li>
</ul>

<div className="flex items-center gap-2 px-2">
<button className="hoverable hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/5 text-sm font-medium px-4 py-2 rounded-full transition-all group" onclick="switchPage('upload')">
<iconify-icon icon="lucide:upload-cloud" strokeWidth="1.5" width="18"></iconify-icon>
                    Upload
                </button>
<button className="hoverable w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-accent-lime transition-all" onclick="switchPage('profile')">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</button>
</div>
</div>
</nav>

<main className="min-h-screen md:px-8 max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-20 pl-4">

<section className="page-section active" id="landing">
<div className="flex flex-col items-center justify-center text-center min-h-[60vh] relative">

<div className="absolute top-10 left-10 md:left-20 animate-float hidden lg:block hoverable">
<div className="bg-brand-card/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 rotate-[-6deg] hover:rotate-0 transition-transform duration-500 shadow-2xl">
<img className="w-32 h-32 object-cover rounded-xl mb-2" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-brand-subtext">3D Abstract</span>
<div className="w-2 h-2 rounded-full bg-accent-lime"></div>
</div>
</div>
</div>
<div className="absolute bottom-10 right-10 md:right-20 animate-float hidden lg:block hoverable" style={{animationDelay: '1.5s'}}>
<div className="bg-brand-card/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 rotate-[6deg] hover:rotate-0 transition-transform duration-500 shadow-2xl">
<img className="w-32 h-32 object-cover rounded-xl mb-2" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-brand-subtext">Vector Art</span>
<div className="w-2 h-2 rounded-full bg-accent-pink"></div>
</div>
</div>
</div>
<div className="inline-flex border-accent-cyan/30 text-accent-cyan uppercase hover:bg-accent-cyan/20 transition-colors cursor-default text-xs font-semibold tracking-wider border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center">
<iconify-icon className="" icon="lucide:sparkles" width="14"></iconify-icon>
                    The Creative Hub of Africa
                </div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white mb-8">
                    Where <span className="italic font-light text-gradient">Ghanaian</span> <br/> Creativity Lives.
                </h1>
<p className="font-sans text-brand-subtext text-lg md:text-xl max-w-2xl mb-12 font-light">
                    Discover, share, and download assets built by the boldest minds. 
                    From Accra to the world, join the movement.
                </p>
<div className="flex flex-col md:flex-row items-center gap-4">
<button className="hoverable group relative px-8 py-4 bg-white text-brand-dark font-display font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95" onclick="switchPage('explore')">
<span className="relative z-10 flex items-center gap-2">
                            Start Exploring
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity"></div>
</button>
<button className="hoverable px-8 py-4 bg-transparent border border-white/20 text-white font-display font-medium rounded-full hover:bg-white/5 transition-all flex items-center gap-2" onclick="switchPage('upload')">
<iconify-icon icon="lucide:upload" width="18"></iconify-icon>
                        Upload Asset
                    </button>
</div>
</div>

<div className="mt-20">
<div className="flex items-center justify-between mb-8">
<h3 className="font-display text-2xl font-semibold tracking-tight">Trending Now</h3>
<button className="text-brand-subtext hover:text-accent-lime text-sm flex items-center gap-1 transition-colors hoverable">View all <iconify-icon icon="lucide:arrow-right"></iconify-icon></button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="hoverable group relative h-80 rounded-3xl overflow-hidden cursor-pointer tilt-card" onclick="switchPage('detail')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-white hover:text-accent-pink transition-colors" icon="lucide:heart" width="20"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="font-display font-semibold text-lg text-white mb-1">Afro-Futurism 3D</h4>
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=50&amp;q=80"/>
<span className="text-xs text-brand-subtext">Kwame Design</span>
</div>
</div>
</div>

<div className="hoverable group relative h-80 rounded-3xl overflow-hidden cursor-pointer tilt-card mt-8 md:mt-0" onclick="switchPage('detail')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="font-display font-semibold text-lg text-white mb-1">Kente Patterns UI</h4>
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=50&amp;q=80"/>
<span className="text-xs text-brand-subtext">Ama Arts</span>
</div>
</div>
</div>

<div className="hoverable group relative h-80 rounded-3xl overflow-hidden cursor-pointer tilt-card" onclick="switchPage('detail')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="font-display font-semibold text-lg text-white mb-1">Neon Accra</h4>
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=50&amp;q=80"/>
<span className="text-xs text-brand-subtext">Jay Pixels</span>
</div>
</div>
</div>

<div className="hoverable group relative h-80 rounded-3xl overflow-hidden cursor-pointer tilt-card mt-8 md:mt-0" onclick="switchPage('detail')">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h4 className="font-display font-semibold text-lg text-white mb-1">Glass Icons</h4>
<div className="flex items-center gap-2">
<img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;w=50&amp;q=80"/>
<span className="text-xs text-brand-subtext">Studio 57</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="explore">
<div className="flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 shrink-0">
<div className="sticky top-28 space-y-8">
<div>
<h3 className="font-display font-semibold text-lg mb-4">Categories</h3>
<ul className="space-y-2">
<li><a className="block text-accent-lime font-medium" href="#">All Assets</a></li>
<li><a className="block text-brand-subtext hover:text-white transition-colors hoverable" href="#">3D Models</a></li>
<li><a className="block text-brand-subtext hover:text-white transition-colors hoverable" href="#">Vector Graphics</a></li>
</ul>
</div>
<div>
<h3 className="font-display font-semibold text-lg mb-4">Style</h3>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 bg-brand-card border border-white/10 rounded-lg text-xs text-brand-subtext hover:bg-white/10 hoverable">Minimal</button>
<button className="px-3 py-1 bg-brand-card border border-white/10 rounded-lg text-xs text-brand-subtext hover:bg-white/10 hoverable">Retro</button>
<button className="px-3 py-1 bg-brand-card border border-white/10 rounded-lg text-xs text-brand-subtext hover:bg-white/10 hoverable">Abstract</button>
</div>
</div>
<div>
<h3 className="font-display font-semibold text-lg mb-4">Colors</h3>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-accent-cyan cursor-pointer hover:scale-125 transition-transform hoverable"></div>
<div className="w-6 h-6 rounded-full bg-accent-pink cursor-pointer hover:scale-125 transition-transform hoverable"></div>
<div className="w-6 h-6 rounded-full bg-accent-lime cursor-pointer hover:scale-125 transition-transform hoverable"></div>
<div className="w-6 h-6 rounded-full bg-accent-orange cursor-pointer hover:scale-125 transition-transform hoverable"></div>
</div>
</div>
</div>
</aside>

<div className="flex-1">
<div className="masonry-grid">

<div className="hoverable masonry-item group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent-purple/50 transition-colors cursor-pointer relative tilt-card" onclick="switchPage('detail')">
<img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-4">
<div className="flex justify-between items-start">
<h4 className="font-display font-semibold text-white">Fluid Shapes 01</h4>
<span className="bg-white/10 text-[10px] px-2 py-0.5 rounded text-white">Free</span>
</div>
</div>

<div className="absolute inset-0 bg-brand-indigo/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
<button className="w-12 h-12 rounded-full bg-white text-brand-dark flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="lucide:download" width="24"></iconify-icon>
</button>
<p className="text-white font-medium text-sm">Download Asset</p>
</div>
</div>
<div className="hoverable masonry-item group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent-purple/50 transition-colors cursor-pointer relative tilt-card" onclick="switchPage('detail')">
<img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1633511090164-b43840ea1607?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-4">
<h4 className="font-display font-semibold text-white">Abstract Cube</h4>
</div>
</div>
<div className="hoverable masonry-item group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent-purple/50 transition-colors cursor-pointer relative tilt-card" onclick="switchPage('detail')">
<img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-4">
<h4 className="font-display font-semibold text-white">Pattern Set</h4>
</div>
</div>
<div className="hoverable masonry-item group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent-purple/50 transition-colors cursor-pointer relative tilt-card" onclick="switchPage('detail')">
<img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-4">
<h4 className="font-display font-semibold text-white">Dark Mode UI</h4>
</div>
</div>
<div className="hoverable masonry-item group bg-brand-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent-purple/50 transition-colors cursor-pointer relative tilt-card" onclick="switchPage('detail')">
<img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-4">
<h4 className="font-display font-semibold text-white">Cyber Security Illus</h4>
</div>
</div>
</div>

<div className="py-12 flex justify-center">
<div className="w-8 h-8 border-2 border-brand-purple border-t-transparent rounded-full animate-spin"></div>
</div>
</div>
</div>
</section>

<section className="page-section" id="search">
<div className="min-h-[70vh] flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
<div className="inline-block px-3 py-1 mb-6 rounded-full bg-gradient-hot text-brand-dark text-xs font-bold tracking-widest uppercase animate-pulse-slow">
                    AI Powered
                </div>
<h2 className="font-display font-semibold text-4xl md:text-5xl mb-8">What are you visualizing?</h2>
<div className="w-full relative group">
<div className="absolute -inset-1 bg-gradient-brand rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-brand-card rounded-2xl p-2 flex items-center">
<button className="p-4 text-brand-subtext hover:text-white transition-colors hoverable">
<iconify-icon icon="lucide:mic" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<input className="w-full bg-transparent text-xl md:text-2xl font-light text-white placeholder-brand-subtext/50 outline-none h-16 px-2" placeholder="Describe a monument with blue sky..." type="text"/>
<button className="bg-white text-brand-dark rounded-xl px-6 py-3 font-semibold hover:bg-accent-lime transition-colors hoverable">
                            Generate
                        </button>
</div>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-3">
<span className="text-sm text-brand-subtext mr-2">Try:</span>
<button className="hoverable px-4 py-1.5 rounded-full border border-white/10 hover:border-accent-cyan hover:bg-accent-cyan/10 text-brand-subtext hover:text-accent-cyan transition-all text-sm">"Afrofuturist City"</button>
<button className="hoverable px-4 py-1.5 rounded-full border border-white/10 hover:border-accent-pink hover:bg-accent-pink/10 text-brand-subtext hover:text-accent-pink transition-all text-sm">"Golden Stool 3D"</button>
<button className="hoverable px-4 py-1.5 rounded-full border border-white/10 hover:border-accent-yellow hover:bg-accent-yellow/10 text-brand-subtext hover:text-accent-yellow transition-all text-sm">"Minimalist Logo"</button>
</div>

<div className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 pointer-events-none filter blur-sm select-none">
<div className="aspect-square bg-brand-card rounded-xl"></div>
<div className="aspect-square bg-brand-card rounded-xl"></div>
<div className="aspect-square bg-brand-card rounded-xl"></div>
<div className="aspect-square bg-brand-card rounded-xl"></div>
</div>
</div>
</section>

<section className="page-section" id="detail">
<button className="mb-6 hoverable flex items-center gap-2 text-brand-subtext hover:text-white transition-colors" onclick="switchPage('explore')">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon> Back
            </button>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-8">
<div className="bg-brand-card rounded-3xl overflow-hidden border border-white/5 relative group">
<img className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-6 right-6 flex gap-2">
<button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors hoverable">
<iconify-icon icon="lucide:maximize" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="mt-12">
<h3 className="font-display font-semibold text-xl mb-6">Comments (3)</h3>
<div className="space-y-6">
<div className="flex gap-4">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;w=50&amp;q=80"/>
<div>
<h5 className="font-medium text-white">Yaw Boakye</h5>
<p className="text-brand-subtext text-sm mt-1">This texture is insane! Love the lighting.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-8">
<div>
<h1 className="font-display font-semibold text-3xl md:text-4xl leading-tight mb-2">Afro-Futurism 3D Concept</h1>
<div className="flex items-center gap-2 mb-6">
<span className="text-brand-subtext text-sm">by</span>
<a className="flex items-center gap-2 hover:text-accent-cyan transition-colors hoverable" href="#" onclick="switchPage('profile')">
<img className="w-6 h-6 rounded-full border border-white/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=40&amp;q=80"/>
<span className="font-medium text-sm border-b border-transparent hover:border-accent-cyan">Kwame Design</span>
</a>
</div>
<button className="hoverable w-full py-4 bg-white text-brand-dark rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent-lime transition-all hover:scale-[1.02] active:scale-[0.98]">
<iconify-icon icon="lucide:download-cloud" width="20"></iconify-icon>
                            Download Asset
                        </button>
<div className="flex items-center gap-4 mt-4">
<button className="hoverable flex-1 py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:heart" width="18"></iconify-icon>
                                Like (245)
                            </button>
<button className="hoverable flex-1 py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:share-2" width="18"></iconify-icon>
                                Share
                            </button>
</div>
</div>

<div className="bg-brand-card/50 p-6 rounded-2xl border border-white/5">
<div className="flex items-center justify-between mb-4">
<h4 className="font-display font-medium text-sm uppercase tracking-wider text-brand-subtext">AI Generated Tags</h4>
<span className="text-[10px] bg-accent-green/20 text-accent-lime px-2 py-0.5 rounded">98% Conf.</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-brand-indigo rounded-lg text-xs text-accent-cyan border border-accent-cyan/20">3D Render</span>
<span className="px-3 py-1 bg-brand-indigo rounded-lg text-xs text-accent-pink border border-accent-pink/20">Abstract</span>
<span className="px-3 py-1 bg-brand-indigo rounded-lg text-xs text-accent-yellow border border-accent-yellow/20">Gold</span>
<span className="px-3 py-1 bg-brand-indigo rounded-lg text-xs text-accent-lime border border-accent-lime/20">Ghana</span>
<span className="px-3 py-1 bg-brand-indigo rounded-lg text-xs text-white border border-white/10">Texture</span>
</div>
</div>

<div className="space-y-4 text-sm text-brand-subtext">
<div className="flex justify-between border-b border-white/5 pb-2">
<span>File Type</span>
<span className="text-white">OBJ, PNG</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>Dimensions</span>
<span className="text-white">4000 x 4000 px</span>
</div>
<div className="flex justify-between pb-2">
<span>License</span>
<span className="text-white">Commercial</span>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="dashboard">
<h2 className="font-display font-semibold text-3xl mb-8">Dashboard</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-brand-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-purple/20 rounded-full blur-xl group-hover:bg-accent-purple/30 transition-colors"></div>
<h3 className="text-brand-subtext font-medium mb-2">Total Downloads</h3>
<p className="font-display font-bold text-4xl text-white">12,405</p>
<div className="mt-4 text-xs text-accent-lime flex items-center gap-1">
<iconify-icon icon="lucide:trending-up"></iconify-icon> +15% this week
                    </div>
</div>
<div className="bg-brand-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-pink/20 rounded-full blur-xl group-hover:bg-accent-pink/30 transition-colors"></div>
<h3 className="text-brand-subtext font-medium mb-2">Profile Views</h3>
<p className="font-display font-bold text-4xl text-white">45.2k</p>
<div className="mt-4 text-xs text-accent-lime flex items-center gap-1">
<iconify-icon icon="lucide:trending-up"></iconify-icon> +8% this week
                    </div>
</div>
<div className="bg-brand-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-xl group-hover:bg-accent-cyan/30 transition-colors"></div>
<h3 className="text-brand-subtext font-medium mb-2">Earnings</h3>
<p className="font-display font-bold text-4xl text-white">GH₵ 2,850</p>
<div className="mt-4 text-xs text-brand-subtext">Pending payout</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-brand-card rounded-2xl border border-white/5 p-6">
<div className="flex items-center justify-between mb-8">
<h4 className="font-semibold text-lg">Activity</h4>
<select className="bg-white/5 border border-white/10 rounded-lg text-xs px-2 py-1 outline-none">
<option>Last 30 Days</option>
</select>
</div>

<div className="flex items-end justify-between h-48 gap-2">
<div className="w-full bg-white/5 rounded-t-sm hover:bg-accent-purple transition-colors h-[40%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-accent-purple transition-colors h-[60%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-accent-purple transition-colors h-[30%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-accent-purple transition-colors h-[80%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-accent-purple transition-colors h-[50%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-accent-purple transition-colors h-[70%]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-accent-purple transition-colors h-[90%] bg-accent-purple shadow-[0_0_15px_rgba(124,58,237,0.5)]"></div>
<div className="w-full bg-white/5 rounded-t-sm hover:bg-accent-purple transition-colors h-[65%]"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-brand-subtext">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="bg-brand-card rounded-2xl border border-white/5 p-6">
<h4 className="font-semibold text-lg mb-6">Recent Uploads</h4>
<div className="space-y-4">
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer hoverable">
<div className="w-10 h-10 rounded-lg bg-white/10 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="font-medium text-sm">Neon Vibes</div>
<div className="text-xs text-brand-subtext">2 mins ago</div>
</div>
<span className="text-xs text-accent-lime">Live</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer hoverable">
<div className="w-10 h-10 rounded-lg bg-white/10 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="font-medium text-sm">Tech Pattern</div>
<div className="text-xs text-brand-subtext">2 days ago</div>
</div>
<span className="text-xs text-accent-lime">Live</span>
</div>
</div>
<button className="hoverable w-full mt-6 py-2 border border-dashed border-white/20 rounded-lg text-sm text-brand-subtext hover:text-white hover:border-white transition-colors" onclick="switchPage('upload')">
                        + Upload New
                     </button>
</div>
</div>
</section>

<section className="page-section" id="upload">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10">
<h2 className="font-display font-semibold text-3xl mb-2">Share your creation</h2>
<p className="text-brand-subtext">Drag and drop your assets here. AI will handle the tagging.</p>
</div>
<div className="w-full h-80 border-2 border-dashed border-brand-purple/50 bg-brand-purple/5 rounded-3xl flex flex-col items-center justify-center relative hover:bg-brand-purple/10 transition-colors cursor-pointer group hoverable">
<div className="w-20 h-20 rounded-full bg-brand-indigo flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(124,58,237,0.3)]">
<iconify-icon className="text-accent-cyan" icon="lucide:cloud-upload" width="32"></iconify-icon>
</div>
<p className="font-medium text-lg">Drop your creative juice here</p>
<p className="text-sm text-brand-subtext mt-2">Supports JPG, PNG, OBJ, FBX</p>

<div className="absolute top-10 right-10 bg-accent-lime/20 text-accent-lime text-xs px-3 py-1 rounded-full animate-bounce delay-100 opacity-50">AI Analyzing...</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2 text-brand-subtext">Asset Name</label>
<input className="w-full bg-brand-card border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent-purple focus:ring-1 focus:ring-accent-purple outline-none transition-all" placeholder="e.g., Abstract Ghana Map" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-brand-subtext">Category</label>
<select className="w-full bg-brand-card border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent-purple outline-none appearance-none">
<option>3D Illustration</option>
<option>Vector</option>
<option>Photography</option>
</select>
</div>
</div>
<div className="mt-8">
<label className="block text-sm font-medium mb-2 text-brand-subtext">AI Suggested Tags</label>
<div className="flex flex-wrap gap-2">
<span className="animate-pulse bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-accent-cyan"></div> Generating...
                        </span>
</div>
</div>
<div className="mt-10 flex justify-end gap-4">
<button className="hoverable px-6 py-3 rounded-xl font-medium text-brand-subtext hover:text-white transition-colors" onclick="switchPage('landing')">Cancel</button>
<button className="hoverable px-8 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow">Publish Asset</button>
</div>
</div>
</section>

<section className="page-section" id="profile">
<div className="relative mb-24">

<div className="h-64 w-full rounded-3xl overflow-hidden bg-gradient-to-r from-brand-indigo via-brand-purple to-accent-pink">
<div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
</div>

<div className="absolute -bottom-16 left-6 md:left-12 flex items-end gap-6">
<div className="w-32 h-32 rounded-full border-4 border-brand-dark overflow-hidden bg-brand-card">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="mb-4">
<h1 className="font-display font-bold text-3xl">Adwoa Creative</h1>
<p className="text-brand-subtext">Digital Artist • Accra, GH</p>
</div>
</div>
<div className="absolute -bottom-12 right-6 md:right-12 flex gap-3">
<button className="hoverable px-6 py-2 bg-white text-brand-dark font-semibold rounded-full hover:bg-accent-lime transition-colors">Follow</button>
<button className="hoverable w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<aside className="space-y-6">
<div className="bg-brand-card rounded-2xl p-6 border border-white/5">
<h3 className="font-display font-semibold mb-4">About</h3>
<p className="text-brand-subtext text-sm leading-relaxed">
                            Obsessed with blending traditional African patterns with futuristic 3D elements. Building the visual language of the future.
                        </p>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 text-sm text-brand-subtext">
<iconify-icon icon="lucide:map-pin"></iconify-icon> Accra, Ghana
                            </div>
<div className="flex items-center gap-3 text-sm text-brand-subtext">
<iconify-icon icon="lucide:link"></iconify-icon> <a className="text-accent-cyan hover:underline" href="#">adwoa.art</a>
</div>
</div>
</div>
<div className="bg-brand-card rounded-2xl p-6 border border-white/5">
<h3 className="font-display font-semibold mb-4">Stats</h3>
<div className="flex justify-between items-center mb-2">
<span className="text-brand-subtext text-sm">Followers</span>
<span className="font-bold">12k</span>
</div>
<div className="flex justify-between items-center">
<span className="text-brand-subtext text-sm">Likes</span>
<span className="font-bold">45k</span>
</div>
</div>
</aside>

<div className="lg:col-span-3">
<div className="flex gap-6 border-b border-white/10 mb-8 pb-1">
<button className="pb-3 border-b-2 border-accent-pink font-medium text-white">Portfolio</button>
<button className="pb-3 border-b-2 border-transparent text-brand-subtext hover:text-white transition-colors hoverable">Liked</button>
<button className="pb-3 border-b-2 border-transparent text-brand-subtext hover:text-white transition-colors hoverable">About</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="hoverable group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer" onclick="switchPage('detail')">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:eye" width="32"></iconify-icon>
</div>
</div>
<div className="hoverable group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer" onclick="switchPage('detail')">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:eye" width="32"></iconify-icon>
</div>
</div>
<div className="hoverable group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer" onclick="switchPage('detail')">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:eye" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-brand-dark py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-brand-dark font-bold">C</div>
<span className="font-display font-semibold tracking-tight text-white">CONTAINER</span>
</div>
<p className="text-brand-subtext text-sm">© 2024 Container Inc. Made with love in Accra.</p>
<div className="flex gap-4">
<a className="text-brand-subtext hover:text-white hoverable" href="#"><iconify-icon icon="lucide:twitter"></iconify-icon></a>
<a className="text-brand-subtext hover:text-white hoverable" href="#"><iconify-icon icon="lucide:instagram"></iconify-icon></a>
<a className="text-brand-subtext hover:text-white hoverable" href="#"><iconify-icon icon="lucide:dribbble"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
