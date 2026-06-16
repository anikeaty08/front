import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
lime: {
400: '#D4FF3E', // High-vis lime
500: '#BEF202',
}
},
animation: {
'fade-in-up': 'fadeInUp 1s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-15px)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Scroll Reveal Observer
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

            // 2. 3D Parallax & Tilt Effect for Sneaker
            const heroSection = document.getElementById('hero');
            const sneakerWrap = document.getElementById('sneaker-wrap');
            const sneakerImg = document.getElementById('hero-sneaker');

            heroSection.addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                
                // Rotate the container container slightly
                sneakerWrap.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
                
                // Move image slightly for depth (parallax)
                sneakerImg.style.transform = `translateZ(50px) translateX(${xAxis * -0.5}px)`;
            });

            // Reset on mouse leave
            heroSection.addEventListener('mouseleave', () => {
                sneakerWrap.style.transform = `rotateY(0deg) rotateX(0deg)`;
                sneakerImg.style.transform = `translateZ(0px)`;
            });

            // 3. Color Swatch Switching
            const swatches = document.querySelectorAll('.swatch-btn');
            
            swatches.forEach(swatch => {
                swatch.addEventListener('click', function() {
                    // Remove active ring from all
                    swatches.forEach(btn => btn.classList.remove('ring-2', 'ring-white'));
                    // Add active ring to clicked
                    this.classList.add('ring-2', 'ring-white');
                    
                    const color = this.getAttribute('data-color');
                    let hueRotate = '0deg';
                    let saturate = '1';
                    
                    if (color === 'lime') { hueRotate = '0deg'; saturate = '1'; }
                    if (color === 'blue') { hueRotate = '190deg'; saturate = '1.2'; }
                    if (color === 'purple') { hueRotate = '260deg'; saturate = '0.8'; }
                    if (color === 'black') { hueRotate = '0deg'; saturate = '0'; } // Grayscale for black

                    // Apply filter to image to change color
                    sneakerImg.style.filter = `drop-shadow(0 20px 40px rgba(0,0,0,0.5)) hue-rotate(${hueRotate}) saturate(${saturate})`;
                });
            });

            // 4. Parallax Scrolling for Images
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                document.querySelectorAll('.parallax-img').forEach(img => {
                    const speed = 0.05;
                    img.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });

            // 5. Review Carousel
            const container = document.getElementById('reviews-container');
            document.getElementById('next-review').addEventListener('click', () => {
                container.scrollBy({ left: 300, behavior: 'smooth' });
            });
            document.getElementById('prev-review').addEventListener('click', () => {
                container.scrollBy({ left: -300, behavior: 'smooth' });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-bg"></div>

<div className="fixed inset-0 z-[-1] overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-lime-400/5 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 backdrop-blur-md bg-zinc-950/60 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter text-white uppercase group" href="#">
                Ae<span className="text-lime-400">ro</span>.
            </a>

<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-light">
<a className="hover:text-white transition-colors" href="#">New</a>
<a className="hover:text-white transition-colors" href="#">Men</a>
<a className="hover:text-white transition-colors" href="#">Women</a>
<a className="hover:text-white transition-colors" href="#">Tech</a>
<a className="hover:text-white transition-colors" href="#">Reviews</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-lime-400 rounded-full"></span>
</button>
<a className="ml-2 px-5 py-2 text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-colors tracking-wide" href="#">
                    BUY NOW
                </a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

<div className="lg:col-span-5 flex flex-col items-start gap-6 order-2 lg:order-1">
<div className="reveal-on-scroll opacity-0" style={{transitionDelay: '0.1s'}}>
<span className="text-lime-400 text-xs font-medium tracking-[0.2em] uppercase border border-lime-400/20 px-3 py-1 rounded-full bg-lime-400/5">New Arrival</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tighter reveal-on-scroll opacity-0" style={{transitionDelay: '0.2s'}}>
                    RUN <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">LIGHT</span>.<br/>
                    LOOK SHARP.
                </h1>
<p className="text-zinc-400 font-light text-base md:text-lg max-w-md leading-relaxed reveal-on-scroll opacity-0" style={{transitionDelay: '0.3s'}}>
                    Engineered with adaptive mesh and energy-return foam. Designed for the city, built for performance. Experience zero gravity.
                </p>
<div className="flex items-center gap-4 mt-4 reveal-on-scroll opacity-0" style={{transitionDelay: '0.4s'}}>
<button className="px-8 py-4 bg-lime-400 text-black text-sm font-semibold tracking-wide hover:bg-lime-300 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,255,62,0.3)]">
                        SHOP NOW
                    </button>
<button className="px-8 py-4 glass-panel text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-all flex items-center gap-2 group">
<iconify-icon className="group-hover:text-lime-400 transition-colors" icon="solar:play-circle-linear" width="20"></iconify-icon>
                        WATCH DEMO
                    </button>
</div>
</div>

<div className="lg:col-span-4 relative flex items-center justify-center order-1 lg:order-2 h-[50vh] lg:h-auto group cursor-crosshair sneaker-container" id="sneaker-wrap">

<div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 to-transparent blur-[80px] rounded-full opacity-60"></div>


<img alt="Aero Sneaker" className="sneaker-img relative w-[120%] max-w-[500px] object-contain animate-float z-20" id="hero-sneaker" src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-11.png"/>

<div className="highlight-sweep z-30 opacity-30"></div>
</div>

<div className="lg:col-span-3 flex flex-col justify-center items-end order-3 reveal-on-scroll opacity-0" style={{transitionDelay: '0.6s'}}>
<div className="glass-panel p-6 w-full max-w-xs rounded-none backdrop-blur-xl space-y-6">
<div className="flex justify-between items-end border-b border-white/10 pb-4">
<div className="flex flex-col">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Price</span>
<span className="text-2xl font-semibold text-white">$189.00</span>
</div>
<div className="flex flex-col items-end">
<div className="flex text-lime-400 text-xs gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="opacity-50" icon="solar:star-bold-duotone"></iconify-icon>
</div>
<span className="text-zinc-500 text-[10px] mt-1">4.8 (1.2k Reviews)</span>
</div>
</div>

<div className="space-y-3">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Colorway</span>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-[#D4FF3E] ring-2 ring-white ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-110 active:scale-95 swatch-btn" data-color="lime"></button>
<button className="w-8 h-8 rounded-full bg-[#3b82f6] hover:ring-2 hover:ring-white/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-110 active:scale-95 swatch-btn" data-color="blue"></button>
<button className="w-8 h-8 rounded-full bg-[#a855f7] hover:ring-2 hover:ring-white/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-110 active:scale-95 swatch-btn" data-color="purple"></button>
<button className="w-8 h-8 rounded-full bg-[#18181b] border border-white/20 hover:ring-2 hover:ring-white/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-110 active:scale-95 swatch-btn" data-color="black"></button>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Size (US)</span>
<a className="text-xs text-lime-400 underline decoration-zinc-700 underline-offset-2 hover:text-white transition-colors" href="#">Size Guide</a>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="h-8 glass-panel text-xs text-zinc-400 hover:bg-white hover:text-black transition-colors">7</button>
<button className="h-8 glass-panel text-xs text-zinc-400 hover:bg-white hover:text-black transition-colors">8</button>
<button className="h-8 bg-white text-black text-xs font-medium">9</button>
<button className="h-8 glass-panel text-xs text-zinc-400 hover:bg-white hover:text-black transition-colors">10</button>
</div>
</div>
<button className="w-full py-3 border border-white/20 text-white text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                        Add to Cart <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
<iconify-icon className="text-zinc-400" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</header>

<section className="py-24 relative z-10 border-t border-white/5 bg-zinc-950/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AeroMesh™ Breathable</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">
                        Precision-engineered knit allows for maximum airflow while maintaining structural integrity during high-intensity movement.
                    </p>
</div>

<div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Kinetic Return Foam</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">
                        Our proprietary sole compound absorbs impact and returns 40% more energy with every stride you take.
                    </p>
</div>

<div className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-500 reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Grip 360 Control</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">
                        Adaptive tread pattern ensures optimal traction on wet urban surfaces and gym floors alike.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="space-y-8 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">ENGINEERED<br/>FOR <span className="text-lime-400">SPEED</span>.</h2>
<div className="border-t border-white/10">
<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium list-none">
<span>Material Composition</span>
<iconify-icon className="text-zinc-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 font-light mt-4 text-sm leading-relaxed max-w-md">
                            Upper: 80% Recycled Polyester Flyknit. Midsole: Nitrogen-infused EVA foam. Outsole: Carbon rubber blend for high abrasion resistance.
                        </p>
</details>
<div className="border-b border-white/10"></div>
<details className="group py-6 cursor-pointer">
<summary className="flex justify-between items-center text-lg font-medium list-none">
<span>Weight &amp; Drop</span>
<iconify-icon className="text-zinc-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 font-light mt-4 text-sm leading-relaxed max-w-md">
                            Weight: 210g (Men's Size 9). Heel-to-toe drop: 6mm. Designed for a natural foot strike and maximum proprioception.
                        </p>
</details>
<div className="border-b border-white/10"></div>
<details className="group py-6 cursor-pointer" open="">
<summary className="flex justify-between items-center text-lg font-medium list-none">
<span>Sustainability</span>
<iconify-icon className="text-zinc-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 font-light mt-4 text-sm leading-relaxed max-w-md">
                            100% vegan construction. Shipped in recycled packaging. We offset the carbon footprint of every pair sold through our reforestation partners.
                        </p>
</details>
<div className="border-b border-white/10"></div>
</div>
</div>

<div className="relative h-[600px] w-full reveal-on-scroll delay-200">
<div className="absolute inset-0 bg-zinc-800 overflow-hidden">
<img alt="Sneaker Detail" className="absolute inset-0 w-full h-[120%] object-cover object-center opacity-60 parallax-img" src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{top: '-10%'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
</div>

<div className="absolute bottom-10 left-10 glass-panel p-4 backdrop-blur-md border-l-2 border-lime-400 max-w-[200px]">
<span className="text-xs text-lime-400 uppercase tracking-widest font-semibold block mb-1">Focus</span>
<p className="text-xs text-white">Reinforced heel counter for maximum stability during lateral movements.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 reveal-on-scroll">
<h2 className="text-3xl font-medium tracking-tight">ATHLETE <span className="text-zinc-500">INSIGHTS</span></h2>
<div className="flex gap-2">
<button className="w-10 h-10 glass-panel flex items-center justify-center hover:bg-white hover:text-black transition-colors" id="prev-review">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 glass-panel flex items-center justify-center hover:bg-white hover:text-black transition-colors" id="next-review">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar" id="reviews-container" style={{scrollbarWidth: 'none'}}>

<div className="min-w-[300px] md:min-w-[400px] snap-start glass-panel p-8 flex flex-col justify-between h-[250px] reveal-on-scroll">
<div>
<div className="flex text-lime-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg font-light leading-relaxed">"The energy return is real. I shaved 30 seconds off my 5k personal best in the first week."</p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 bg-zinc-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-zinc-500">Pro Runner</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-start glass-panel p-8 flex flex-col justify-between h-[250px] reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div>
<div className="flex text-lime-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-lg font-light leading-relaxed">"Clean design that works with my street style, but performs like a beast in the gym."</p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 bg-zinc-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-medium text-white">Marcus Chen</p>
<p className="text-xs text-zinc-500">Crossfit Coach</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-start glass-panel p-8 flex flex-col justify-between h-[250px] reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div>
<div className="flex text-lime-400 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg font-light leading-relaxed">"Finally, a shoe that breathes properly. My feet stay cool even during 2 hour marathon training."</p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 bg-zinc-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-sm font-medium text-white">Elena Rodriguez</p>
<p className="text-xs text-zinc-500">Marathoner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-medium tracking-tight">LOOK <span className="text-lime-400">CLOSER</span>.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 h-[600px] gap-1 md:gap-2">
<div className="relative overflow-hidden group reveal-on-scroll h-full md:col-span-2 row-span-2">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden group reveal-on-scroll h-full">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden group reveal-on-scroll h-full">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden group reveal-on-scroll md:col-span-2 h-full">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-32 relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-lime-400/5 z-0"></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
<div className="relative z-10 max-w-xl mx-auto px-6 text-center reveal-on-scroll">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6">READY TO FLY?</h2>
<p className="text-zinc-400 font-light mb-10">Join the waitlist for the limited "Midnight Lime" edition drop.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
<input className="bg-zinc-900/80 border border-white/10 text-white px-5 py-3 outline-none focus:border-lime-400 transition-colors w-full rounded-sm placeholder:text-zinc-600" placeholder="email@address.com" type="email"/>
<button className="bg-lime-400 text-black font-semibold px-6 py-3 whitespace-nowrap hover:bg-lime-300 transition-colors rounded-sm">
                    GET NOTIFIED
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-medium tracking-tighter text-white uppercase mb-6 block" href="#">
                        Ae<span className="text-lime-400">ro</span>.
                    </a>
<p className="text-zinc-500 text-sm font-light max-w-xs leading-relaxed">
                        Redefining performance footwear through material innovation and minimalist design principles.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Shop</h4>
<ul className="space-y-2 text-sm text-zinc-500 font-light">
<li><a className="hover:text-lime-400 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Men</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Women</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500 font-light">
<li><a className="hover:text-lime-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Technology</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600 font-light">
<p>© 2023 Aero Footwear Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<div className="flex gap-3 ml-4 text-zinc-400">
<iconify-icon className="hover:text-lime-400 cursor-pointer transition-colors" icon="solar:brand-instagram-linear"></iconify-icon>
<iconify-icon className="hover:text-lime-400 cursor-pointer transition-colors" icon="solar:brand-twitter-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
