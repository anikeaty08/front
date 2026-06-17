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



        const canvas = document.getElementById('snow-canvas');
        const ctx = canvas.getContext('2d');
        const hero = document.getElementById('hero');

        let particles = [];
        // Increased density significantly
        const particleCount = 1800; 
        let mouse = { x: -100, y: -100 };

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = hero.offsetHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                // Increased thickness/size
                this.size = Math.random() * 2.8 + 1.2; 
                // Higher fall speed for a more intense feel
                this.speedY = Math.random() * 3.5 + 2.5; 
                this.speedX = (Math.random() - 0.5) * 1.5;
                // Higher opacity for visibility
                this.opacity = Math.random() * 0.7 + 0.3;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceArea = 180;

                if (distance < forceArea) {
                    const force = (forceArea - distance) / forceArea;
                    const directionX = dx / distance * force * 12;
                    const directionY = dy / distance * force * 12;
                    this.x += directionX;
                    this.y += directionY;
                }

                if (this.y > canvas.height) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        initParticles();
        animate();
    
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
      
<div className="fixed inset-0 bg-noise z-50 mix-blend-overlay pointer-events-none"></div>
<nav className="fixed top-0 w-full z-40 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-sm">
<div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-industrial text-2xl tracking-tighter text-white font-medium uppercase border border-white/20 px-2 py-1 hover:bg-white hover:text-black transition-colors" href="#">
                BCTV<span className="text-[#009944]">.</span>
</a>
<div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-industrial text-gray-400">
<a className="hover:text-white transition-colors" href="#episodes">Episodes</a>
<a className="hover:text-white transition-colors" href="#cities">Cities</a>
<a className="hover:text-[#009944] transition-colors" href="#book">Book</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>
<header className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10" id="hero">
<canvas id="snow-canvas"></canvas>
<div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-16">
<h1 className="font-industrial text-[12vw] leading-[0.85] font-medium uppercase text-white tracking-tighter mb-6">
                Block Check <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700">TV</span>
</h1>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-12">
<p className="font-industrial text-lg md:text-2xl uppercase tracking-widest text-gray-400 border-l-2 border-[#009944] pl-4">
                    Street interviews <span className="mx-2 text-[#009944]">//</span> Day in the life <span className="mx-2 text-[#009944]">//</span> City to city
                </p>
</div>
<p className="font-body text-xs md:text-sm text-gray-500 mb-12 uppercase tracking-[0.3em]">
                If it passes the block, it passes.
            </p>
<div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-md mx-auto md:max-w-none">
<a className="group relative px-10 py-5 bg-white text-black font-industrial uppercase tracking-widest text-sm font-medium hover:bg-[#009944] transition-colors duration-200 w-full md:w-auto text-center" href="#episodes">
                    Watch Episodes
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-black group-hover:bg-white"></span>
</a>
<a className="group relative px-10 py-5 bg-transparent border border-white/30 text-white font-industrial uppercase tracking-widest text-sm font-medium hover:border-[#eab308] hover:text-[#eab308] transition-colors duration-200 w-full md:w-auto text-center" href="#book">
                    Book a Block Check
                </a>
</div>
</div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>
</header>
<section className="py-24 border-b border-white/10 bg-[#0c0c0c]">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<h2 className="font-industrial text-5xl md:text-7xl font-medium uppercase tracking-tighter leading-none text-white">
                    We Pull Up.<br/>
                    We Document.<br/>
                    We Verify.
                </h2>
<div className="flex flex-col justify-end">
<p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                        Block Check TV is a city-driven street interview platform capturing artists, entrepreneurs, and culture in real environments. No scripts. No filters. Real people. Real blocks.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
<div className="bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-colors group">
<iconify-icon className="text-4xl text-[#009944] mb-6 group-hover:scale-110 transition-transform duration-300" icon="solar:map-point-linear"></iconify-icon>
<h3 className="font-industrial text-2xl uppercase tracking-wide text-white mb-4">Pull Up</h3>
<p className="text-gray-500 text-xs leading-relaxed">We come to you. Your environment, your terms. We capture the essence of the location.</p>
</div>
<div className="bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-colors group">
<iconify-icon className="text-4xl text-white mb-6 group-hover:text-[#eab308] transition-colors duration-300" icon="solar:videocamera-record-linear"></iconify-icon>
<h3 className="font-industrial text-2xl uppercase tracking-wide text-white mb-4">Temperature Check</h3>
<p className="text-gray-500 text-xs leading-relaxed">Candid conversations about the grind, the city, and the movement. Uncut documentation.</p>
</div>
<div className="bg-[#0a0a0a] p-10 hover:bg-[#0f0f0f] transition-colors group">
<iconify-icon className="text-4xl text-white mb-6 group-hover:text-[#009944] transition-colors duration-300" icon="solar:verified-check-linear"></iconify-icon>
<h3 className="font-industrial text-2xl uppercase tracking-wide text-white mb-4">City Certified</h3>
<p className="text-gray-500 text-xs leading-relaxed">If it's on Block Check, it's verified. We provide the platform for authenticity.</p>
</div>
</div>
</div>
</section>
<section className="py-24 border-b border-white/10" id="episodes">
<div className="max-w-screen-2xl mx-auto px-6 mb-12 flex items-end justify-between">
<h2 className="font-industrial text-5xl font-medium uppercase tracking-tighter text-white">Latest Drops</h2>
<div className="hidden md:block w-32 h-[1px] bg-white/30 mb-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
<div className="group relative aspect-[3/4] border-r border-b border-white/10 overflow-hidden cursor-pointer slash-hover bg-[#111]">
<div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 bg-[url('https://images.unsplash.com/photo-1576506542790-512445485a3d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<span className="inline-block px-2 py-1 mb-3 text-xs font-industrial uppercase tracking-widest bg-[#009944] text-black font-medium">Atlanta</span>
<h3 className="font-industrial text-3xl text-white uppercase mb-1">Lil Baby</h3>
<div className="flex items-center gap-2 text-white font-industrial uppercase text-sm group-hover:text-[#eab308] transition-colors">
                        Watch Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative aspect-[3/4] border-r border-b border-white/10 overflow-hidden cursor-pointer slash-hover bg-[#111]">
<div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 bg-[url('https://images.unsplash.com/photo-1527153857715-390862d1d390?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<span className="inline-block px-2 py-1 mb-3 text-xs font-industrial uppercase tracking-widest bg-white text-black font-medium">Detroit</span>
<h3 className="font-industrial text-3xl text-white uppercase mb-1">Babyface Ray</h3>
<div className="flex items-center gap-2 text-white font-industrial uppercase text-sm group-hover:text-[#eab308] transition-colors">
                        Watch Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative aspect-[3/4] border-r border-b border-white/10 overflow-hidden cursor-pointer slash-hover bg-[#111]">
<div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 bg-[url('https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<span className="inline-block px-2 py-1 mb-3 text-xs font-industrial uppercase tracking-widest bg-white text-black font-medium">Chicago</span>
<h3 className="font-industrial text-3xl text-white uppercase mb-1">G Herbo</h3>
<div className="flex items-center gap-2 text-white font-industrial uppercase text-sm group-hover:text-[#eab308] transition-colors">
                        Watch Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative aspect-[3/4] border-b border-white/10 overflow-hidden cursor-pointer slash-hover bg-[#111]">
<div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 bg-[url('https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<span className="inline-block px-2 py-1 mb-3 text-xs font-industrial uppercase tracking-widest bg-[#eab308] text-black font-medium">Miami</span>
<h3 className="font-industrial text-3xl text-white uppercase mb-1">Rick Ross</h3>
<div className="flex items-center gap-2 text-white font-industrial uppercase text-sm group-hover:text-[#eab308] transition-colors">
                        Watch Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-black pt-24 pb-12">
<div className="max-w-screen-2xl mx-auto px-6 text-center">
<a className="font-industrial text-4xl tracking-tighter text-white uppercase mb-6 inline-block" href="#">
                Block Check TV<span className="text-[#009944]">.</span>
</a>
<p className="text-[10px] text-gray-700 font-body uppercase tracking-[0.4em]">© 2024 Block Check TV. Verified Culture.</p>
</div>
</footer>


    </>
  );
}
