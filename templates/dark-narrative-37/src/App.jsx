import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const preloader = document.getElementById('preloader');
        const gateLeft = document.getElementById('gate-left');
        const gateRight = document.getElementById('gate-right');
        const preloaderText = document.getElementById('preloader-text');
        const cursor = document.getElementById('cursor');
        const embersContainer = document.getElementById('embers-container');
        const heavenSection = document.getElementById('heaven');
        const heavenBg = document.getElementById('heaven-bg');
        const heavenContent = document.getElementById('heaven-content');
        const footerText = document.getElementById('footer-text');

        // 1. Preloader Logic
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloaderText.style.opacity = '0';
                
                // Open Gates
                gateLeft.style.transform = 'translateX(-100%)';
                gateRight.style.transform = 'translateX(100%)';
                
                // Fade out background after gates open
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        preloader.remove();
                    }, 1000);
                }, 1000);
            }, 1500);
        });

        // 2. Custom Cursor Logic
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.style.transform = `translate(-50%, -50%)`;
        });

        document.addEventListener('mousedown', (e) => {
            cursor.style.transform = `translate(-50%, -50%) scale(0.8)`;
            createEmberBurst(e.clientX, e.clientY);
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = `translate(-50%, -50%) scale(1)`;
        });

        // 3. Particle System (Embers)
        function createEmber() {
            if(document.hidden) return; 
            
            const ember = document.createElement('div');
            const size = Math.random() * 4 + 1;
            const startX = Math.random() * window.innerWidth;
            
            ember.style.width = size + 'px';
            ember.style.height = size + 'px';
            ember.style.background = `rgba(${255}, ${Math.random() * 100}, 0, ${Math.random()})`;
            ember.style.position = 'absolute';
            ember.style.left = startX + 'px';
            ember.style.top = '100vh';
            ember.style.borderRadius = '50%';
            ember.style.filter = 'blur(1px)';
            ember.style.animation = `emberRise ${Math.random() * 5 + 3}s linear forwards`;
            
            embersContainer.appendChild(ember);
            
            setTimeout(() => {
                ember.remove();
            }, 8000);
        }
        
        // Only spawn embers if not in heaven
        let emberInterval = setInterval(createEmber, 200);

        function createEmberBurst(x, y) {
            for(let i=0; i<8; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute w-1 h-1 bg-red-500 rounded-full pointer-events-none';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                
                const destX = (Math.random() - 0.5) * 100;
                const destY = (Math.random() - 0.5) * 100;
                
                particle.animate([
                    { transform: 'translate(0,0) scale(1)', opacity: 1 },
                    { transform: `translate(${destX}px, ${destY}px) scale(0)`, opacity: 0 }
                ], {
                    duration: 500,
                    easing: 'ease-out'
                });
                
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 500);
            }
        }

        // 4. Scroll Intersection Observer
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
        // Blur effect trigger
        const burnoutContainer = document.getElementById('burnout-container');
        if(burnoutContainer) observer.observe(burnoutContainer);

        // Heaven Transition Observer
        const heavenObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Switch theme to light
                    heavenBg.style.opacity = '1';
                    heavenContent.style.opacity = '1';
                    heavenContent.style.transform = 'translateY(0)';
                    
                    // Stop fire particles
                    clearInterval(emberInterval);
                    embersContainer.innerHTML = ''; // Clear existing
                    
                    // Update cursor color
                    cursor.querySelector('svg').classList.remove('text-red-600');
                    cursor.querySelector('svg').classList.add('text-blue-600');
                    footerText.style.color = '#71717a'; // zinc-500
                } else {
                    // Revert if scrolling back up (optional, keeps immersive feel)
                   // heavenBg.style.opacity = '0';
                }
            });
        }, { threshold: 0.3 });

        heavenObserver.observe(heavenSection);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex items-center justify-center" id="cursor">
<svg className="text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L14 8L20 10L15 14L16 20L12 16L8 20L9 14L4 10L10 8L12 2Z" fill="currentColor"></path>
</svg>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden" id="preloader">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900 via-zinc-950 to-black"></div>

<div className="absolute left-0 top-0 h-full w-1/2 bg-zinc-900 border-r border-red-900/30 flex items-center justify-end z-10 transition-transform duration-[2000ms] ease-in-out bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]" id="gate-left">
<div className="h-32 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-50 blur-sm mr-[-2px]"></div>
</div>
<div className="absolute right-0 top-0 h-full w-1/2 bg-zinc-900 border-l border-red-900/30 flex items-center justify-start z-10 transition-transform duration-[2000ms] ease-in-out bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]" id="gate-right">
<div className="h-32 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-50 blur-sm ml-[-2px]"></div>
</div>

<div className="relative z-20 flex flex-col items-center gap-4 transition-opacity duration-700" id="preloader-text">
<iconify-icon className="text-red-500 text-4xl animate-pulse" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<span className="text-red-500/80 font-mono text-xs tracking-[0.2em] uppercase">Opening the portal...</span>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-1000 ease-in-out" id="ambient-bg">
<div className="fog-img"></div>

<div className="absolute inset-0 overflow-hidden" id="embers-container"></div>
</div>

<main className="relative z-10">

<section className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6">
<div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-zinc-950 z-0"></div>
<div className="relative z-10 space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-900/50 bg-red-950/10 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs text-red-200/70 tracking-widest uppercase font-medium">Circle I</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight text-white leading-[0.9] text-glow">
                    Design<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900 italic font-serif">Inferno</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto font-light leading-relaxed">
                    Abandon all hope of efficiency, ye who enter here without a system.
                </p>
<div className="pt-8">
<iconify-icon className="text-zinc-500 text-3xl animate-bounce" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
</div>
</section>

<section className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative border-t border-red-900/10">
<div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center reveal">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The Illusion of Growth</h2>
<p className="text-zinc-400 leading-relaxed font-light">
                        At first, the warmth feels like success. Clients multiply. Projects stack. The fire is small, controlled, almost beautiful. You believe you can handle the heat.
                    </p>
<div className="flex gap-4 opacity-50">
<iconify-icon className="text-red-400 text-2xl" icon="solar:graph-up-linear"></iconify-icon>
<iconify-icon className="text-red-400 text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<div className="relative h-64 w-full bg-gradient-to-tr from-red-950/20 to-zinc-900 rounded-lg border border-red-900/20 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

<div className="w-32 h-32 rounded-full border border-red-500/30 flex items-center justify-center relative">
<div className="absolute inset-0 border border-red-500/20 rounded-full animate-ping"></div>
<iconify-icon className="text-red-500 text-4xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative border-t border-red-900/10">
<div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center reveal dir-rtl">
<div className="order-2 md:order-1 relative h-80 w-full rounded-lg border border-orange-900/20 bg-zinc-900/30 flex flex-wrap content-center justify-center gap-4 overflow-hidden p-8">

<iconify-icon className="text-orange-600 text-2xl absolute top-1/4 left-1/4 animate-[shake_5s_infinite]" icon="solar:clock-circle-linear"></iconify-icon>
<iconify-icon className="text-orange-500 text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]" icon="solar:calendar-date-linear"></iconify-icon>
<iconify-icon className="text-red-600 text-xl absolute bottom-1/4 right-1/4 animate-bounce" icon="solar:alarm-linear"></iconify-icon>
<iconify-icon className="text-orange-700 text-4xl absolute top-10 right-10 opacity-60" icon="solar:stopwatch-linear"></iconify-icon>
<iconify-icon className="text-red-500 text-2xl absolute bottom-10 left-10 opacity-50" icon="solar:hourglass-linear"></iconify-icon>
</div>
<div className="order-1 md:order-2 space-y-6">
<div className="text-orange-500 text-xs font-mono tracking-widest uppercase">Circle II</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The Chronos Curse</h2>
<p className="text-zinc-400 leading-relaxed font-light">
                        Time becomes nonlinear. Deadlines overlap like tectonic plates. The ticking sound isn't a clock—it's the cracking of your foundation.
                    </p>
</div>
</div>
</section>

<section className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative border-t border-red-900/10 bg-gradient-to-b from-transparent to-red-950/10">
<div className="max-w-3xl w-full text-center space-y-12 reveal">
<div className="space-y-4">
<div className="text-red-500 text-xs font-mono tracking-widest uppercase">Circle III</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The Ledger of Lies</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 border border-red-900/20 bg-zinc-900/40 backdrop-blur-sm rounded-lg hover:border-red-600/50 transition-colors group">
<div className="text-xs text-zinc-500 mb-2 uppercase tracking-wide">Revenue</div>
<div className="text-3xl font-mono text-white group-hover:text-red-500 group-hover:animate-[glitch_0.3s_infinite]">$12,400</div>
</div>
<div className="p-6 border border-red-900/20 bg-zinc-900/40 backdrop-blur-sm rounded-lg hover:border-red-600/50 transition-colors group">
<div className="text-xs text-zinc-500 mb-2 uppercase tracking-wide">Profit</div>
<div className="text-3xl font-mono text-zinc-500 group-hover:text-red-500 group-hover:animate-[glitch_0.2s_infinite] line-through decoration-red-600">$4,200</div>
</div>
<div className="p-6 border border-red-900/20 bg-zinc-900/40 backdrop-blur-sm rounded-lg hover:border-red-600/50 transition-colors group">
<div className="text-xs text-zinc-500 mb-2 uppercase tracking-wide">Hours</div>
<div className="text-3xl font-mono text-white group-hover:text-red-500 group-hover:animate-[glitch_0.4s_infinite]">∞</div>
</div>
</div>
<p className="text-zinc-400 max-w-lg mx-auto leading-relaxed font-light">
                    Numbers swell, but value evaporates. The math stops making sense. You are rich in tasks but poor in time.
                </p>
</div>
</section>

<section className="min-h-[80vh] flex items-center justify-center px-6 py-24 relative border-t border-red-900/10 overflow-hidden">

<div className="absolute inset-0 flex justify-between px-12 md:px-32 opacity-20 pointer-events-none">
<div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-500 to-transparent dashed-line"></div>
<div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-500 to-transparent dashed-line"></div>
<div className="w-px h-full bg-gradient-to-b from-transparent via-zinc-500 to-transparent dashed-line"></div>
</div>
<div className="max-w-4xl w-full grid md:grid-cols-2 gap-16 items-center reveal z-10">
<div className="space-y-6">
<div className="text-red-600 text-xs font-mono tracking-widest uppercase">Circle IV</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The Chains of Ops</h2>
<p className="text-zinc-400 leading-relaxed font-light">
                        Every tool adds a link. Every notification tightens the grip. You are no longer the designer; you are the operator of the machine that binds you.
                    </p>
<button className="group flex items-center gap-3 text-sm text-red-400 hover:text-red-300 transition-colors">
<span className="border-b border-red-900 pb-0.5">Feel the weight</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="relative">
<div className="absolute inset-0 bg-red-600 blur-[60px] opacity-10"></div>
<div className="relative z-10 p-8 border border-zinc-800 bg-black/80 rounded-xl space-y-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="space-y-3">
<div className="h-2 bg-zinc-800 rounded w-3/4 animate-pulse"></div>
<div className="h-2 bg-zinc-800 rounded w-full"></div>
<div className="h-2 bg-zinc-800 rounded w-5/6"></div>
<div className="h-2 bg-red-900/30 rounded w-full"></div>
</div>
<iconify-icon className="absolute -right-4 -bottom-4 text-6xl text-zinc-800 rotate-12" icon="solar:link-broken-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center justify-center px-6 py-24 relative border-t border-red-900/20 bg-gradient-to-b from-black via-red-950/20 to-black">
<div className="max-w-5xl w-full text-center space-y-8 reveal stage-blur transition-all duration-1000" id="burnout-container">
<div className="inline-flex flex-col items-center">
<iconify-icon className="text-red-500 text-5xl mb-4 animate-[pulse-red_2s_infinite]" icon="solar:flame-linear"></iconify-icon>
<h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight uppercase leading-none mix-blend-overlay">Burnout</h2>
</div>
<p className="text-xl md:text-2xl text-red-200/50 max-w-2xl mx-auto font-serif italic">
                    "Midway upon the journey of our life, I found myself within a forest dark..."
                </p>

<div className="relative h-64 w-full mt-12 overflow-hidden mask-image-gradient">
<div className="absolute inset-0 flex items-center justify-center gap-4 opacity-30 blur-[1px]">
<div className="w-64 h-40 border border-red-500/20 bg-red-900/5 rotate-[-5deg] translate-y-4"></div>
<div className="w-64 h-40 border border-red-500/20 bg-red-900/5 rotate-[10deg] -translate-x-12"></div>
<div className="w-64 h-40 border border-red-500/20 bg-red-900/5 rotate-[-15deg] translate-x-12"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="px-8 py-3 bg-red-600 text-black font-semibold tracking-tight hover:bg-red-500 transition-all hover:scale-105 shadow-[0_0_40px_rgba(220,38,38,0.5)] z-20" onclick="document.getElementById('heaven').scrollIntoView()">
                            FIND THE EXIT
                        </button>
</div>
</div>
</div>
</section>

<section className="min-h-screen relative flex items-center justify-center px-6 transition-colors duration-[2000ms] overflow-hidden" id="heaven">

<div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-[2000ms] z-0" id="heaven-bg"></div>
<div className="relative z-10 max-w-4xl w-full text-center space-y-8 opacity-0 translate-y-10 transition-all duration-[2000ms] delay-500" id="heaven-content">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-100 mb-6">
<iconify-icon className="text-blue-500 text-3xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900">
                    Operational Clarity
                </h1>
<p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
                    Ascend from the chaos. A unified system for designers who want to build, not burn.
                </p>
<div className="grid md:grid-cols-3 gap-6 pt-12 text-left">
<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<iconify-icon className="text-zinc-900 text-2xl mb-4" icon="solar:sort-linear"></iconify-icon>
<h3 className="font-semibold text-zinc-900 mb-2">Streamlined</h3>
<p className="text-sm text-zinc-500">No more jagged edges. Pure flow.</p>
</div>
<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<iconify-icon className="text-zinc-900 text-2xl mb-4" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h3 className="font-semibold text-zinc-900 mb-2">Centralized</h3>
<p className="text-sm text-zinc-500">One source of truth.</p>
</div>
<div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200">
<iconify-icon className="text-zinc-900 text-2xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="font-semibold text-zinc-900 mb-2">Protected</h3>
<p className="text-sm text-zinc-500">Guard your creative time.</p>
</div>
</div>
<div className="pt-12">
<button className="px-8 py-4 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-all">
                        Start the Ascension
                    </button>
</div>
</div>
</section>

<footer className="relative z-10 py-12 text-center text-zinc-500 text-xs uppercase tracking-widest border-t border-zinc-100/10">
<span className="text-zinc-900" id="footer-text">© Inferno Systems Inc.</span>
</footer>
</main>


    </>
  );
}
