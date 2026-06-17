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
obsidian: '#050505',
charcoal: '#0A0A0A',
orange: {
400: '#fb923c',
500: '#f97316',
600: '#ea580c',
900: '#431407'
},
alabaster: '#FAFAFA',
muted: '#737373'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
},
animation: {
'beam': 'beam 3s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
beam: {
'0%': { strokeDashoffset: '1000' },
'100%': { strokeDashoffset: '0' }
}
}
}
}
}



        // 1. GSAP INITIALIZATION
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animations
        const tl = gsap.timeline();
        tl.from(".hero-anim", {
            y: 50,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out"
        });

        // Text Reveal Animation for Manifesto
        gsap.utils.toArray('.reveal-text').forEach(text => {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                y: 30,
                opacity: 0.2,
                filter: "blur(5px)",
                duration: 1.5,
                ease: "power2.out"
            });
        });
        
        // Element by Element Slide/Fade/Blur In
        gsap.utils.toArray('.anim-slide-in').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1,
                ease: "power3.out"
            });
        });

        // Number Counter Animation
        gsap.utils.toArray('.counter').forEach(counter => {
            const target = counter.getAttribute('data-target');
            gsap.to(counter, {
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true
                },
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power1.inOut"
            });
        });

        // 2. CANVAS PARTICLE ANIMATION
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.3; 
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                // Orange Tint
                ctx.fillStyle = 'rgba(249, 115, 22, 0.4)'; 
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.min(window.innerWidth / 10, 80);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        resize();
        initParticles();
        animateParticles();
    
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
      

<nav className="fixed top-0 w-full z-50 h-20 border-b border-white/5 bg-obsidian/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

<div className="w-40 md:w-48 text-white relative group">
<div className="absolute -inset-2 bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
<svg className="w-full h-auto text-white fill-current relative z-10" fill="none" viewbox="0 0 185 49" xmlns="http://www.w3.org/2000/svg">
<g className="" style={{fill: 'currentColor'}}>
<path d="M12 37C18.6274 37 24 31.6274 24 25C24 18.3726 18.6274 13 12 13C5.37258 13 0 18.3726 0 25C0 31.6274 5.37258 37 12 37ZM12 32.5C7.85786 32.5 4.5 29.1421 4.5 25C4.5 20.8579 7.85786 17.5 12 17.5C16.1421 17.5 19.5 20.8579 19.5 25C19.5 29.1421 16.1421 32.5 12 32.5Z"></path>
<path className="" d="M53.5 38.5C50.1 38.5 47.4 37.6 45.5 35.7C43.5 33.9 42.5 31.2 42.5 27.8V21.4C42.5 18 43.5 15.3 45.5 13.5C47.4 11.6 50.1 10.7 53.5 10.7C56.8 10.7 59.5 11.6 61.5 13.5C63.5 15.3 64.5 18 64.5 21.4V27.8C64.5 31.2 63.5 33.9 61.5 35.7C59.5 37.6 56.8 38.5 53.5 38.5ZM53.5 34C55.4 34 56.8 33.4 57.9 32.3C58.9 31.3 59.4 29.8 59.4 28V21.2C59.4 19.4 58.9 18 57.9 16.9C56.8 15.8 55.4 15.2 53.5 15.2C51.6 15.2 50.2 15.8 49.1 16.9C48 18 47.5 19.4 47.5 21.2V28C47.5 29.8 48 31.3 49.1 32.3C50.2 33.4 51.6 34 53.5 34ZM73.3 38L66.5 11.3H71.7L77.3 34.7H77.9L83.5 11.3H88.7L81.9 38H73.3ZM91.9 38V11.3H97V38H91.9ZM101.2 38V33.5H104.7V15.7H101.2V11.3H112.2C115.8 11.3 118.5 12.2 120.4 14C122.2 15.8 123.2 18.5 123.2 22.1V27.1C123.2 30.7 122.2 33.4 120.4 35.2C118.5 37 115.8 38 112.2 38H101.2ZM109.8 33.4H112.3C114.3 33.4 115.8 32.8 116.7 31.8C117.7 30.7 118.1 29.2 118.1 27.3V21.9C118.1 20 117.7 18.5 116.7 17.4C115.8 16.4 114.3 15.8 112.3 15.8H109.8V33.4ZM127.4 38V11.3H132.4V38H127.4ZM147.7 38.5C145.5 38.5 143.7 38.1 142.1 37.3C140.5 36.5 139.3 35.3 138.5 33.9C137.7 32.4 137.3 30.6 137.3 28.6V11.3H142.3V28.7C142.3 30.3 142.8 31.6 143.7 32.6C144.6 33.5 146 34 147.7 34C149.5 34 150.8 33.5 151.7 32.6C152.7 31.6 153.1 30.3 153.1 28.7V11.3H158.2V28.6C158.2 30.6 157.8 32.4 156.9 33.9C156.1 35.3 154.9 36.5 153.3 37.3C151.8 38.1 149.9 38.5 147.7 38.5ZM172.3 38.5C170.3 38.5 168.4 38.1 166.9 37.4C165.3 36.6 164.1 35.6 163.2 34.2C162.3 32.8 161.8 31.2 161.8 29.3V28.2H166.8V29.3C166.8 30.9 167.3 32.1 168.3 32.9C169.3 33.7 170.6 34.1 172.3 34.1C174.1 34.1 175.3 33.7 176.2 33C177 32.3 177.5 31.5 177.5 30.4C177.5 29.7 177.3 29.1 176.8 28.6C176.4 28.1 175.8 27.8 175 27.5C174.2 27.2 173.2 26.9 172.1 26.7L171.2 26.5C169.4 26.1 167.8 25.6 166.5 24.9C165.2 24.3 164.2 23.5 163.5 22.5C162.8 21.4 162.4 20.1 162.4 18.5C162.4 16.9 162.8 15.5 163.6 14.3C164.4 13.2 165.5 12.3 166.9 11.7C168.3 11 170 10.7 171.9 10.7C173.8 10.7 175.5 11.1 176.9 11.7C178.4 12.3 179.6 13.3 180.5 14.6C181.3 15.9 181.7 17.5 181.7 19.4V20.6H176.8V19.4C176.8 18.4 176.6 17.6 176.2 17C175.8 16.3 175.2 15.9 174.5 15.6C173.8 15.3 172.9 15.1 171.9 15.1C170.3 15.1 169.2 15.4 168.5 16C167.8 16.6 167.4 17.4 167.4 18.3C167.4 19 167.6 19.6 167.9 20C168.3 20.5 168.8 20.9 169.5 21.2C170.2 21.5 171 21.7 172.1 22L173 22.2C174.9 22.6 176.5 23.1 177.9 23.7C179.4 24.4 180.5 25.2 181.3 26.2C182 27.3 182.4 28.6 182.4 30.2C182.4 31.9 182 33.3 181.2 34.6C180.4 35.8 179.2 36.7 177.7 37.5C176.2 38.1 174.4 38.5 172.3 38.5Z"></path>
</g>
</svg>
</div>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#ecosystem">Ecosystem</a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
</div>

<div className="hidden md:block p-[1px] bg-gradient-to-r from-white/20 to-orange-500/50 rounded-full group hover:from-white/30 hover:to-orange-500 transition-all duration-300">
<a className="flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-obsidian/50 backdrop-blur rounded-full group-hover:bg-orange-500/10 transition-all duration-300" href="#contact">
                    Book Strategy Audit
                </a>
</div>

<div className="md:hidden text-white cursor-pointer">

<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 14L5 10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M12 17L12 7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M19 14L19 10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

<canvas height="1017" id="hero-canvas" width="993"></canvas>

<div className="absolute inset-0 bg-grid pointer-events-none opacity-20"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
<defs>
<lineargradient id="beam-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>

<path className="noodle-path" d="M200,0 L200,800"></path>
<path className="beam-path" d="M200,0 L200,800" style={{animationDuration: '5s'}}></path>

<path className="noodle-path hidden lg:block" d="M800,0 C800,300 1200,300 1200,800"></path>
<path className="beam-path hidden lg:block" d="M800,0 C800,300 1200,300 1200,800" style={{animationDuration: '7s'}}></path>
</svg>
<div className="relative max-w-7xl mx-auto px-6 pt-20 z-10 w-full">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-10 md:col-start-1">
<p className="text-orange-500 tracking-[0.2em] text-xs font-semibold uppercase mb-6 hero-anim" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
                        /// Deploying Intelligence
                    </p>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] text-white tracking-tight hero-anim mb-8 font-space-grotesk" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
                        ROI-DRIVEN AI.<br/>
                        ENGINEERED FOR<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic font-serif pr-2 font-space-grotesk" style={{}}>ENTERPRISE.</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed hero-anim mb-10 font-light" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
                        We bridge the gap between executive strategy and production-grade engineering. While others deliver slide decks, Ovidius delivers intelligent systems that operationalize your business.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 hero-anim" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>

<div className="p-[1px] bg-gradient-to-br from-white to-gray-500 rounded-lg group">
<button className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors relative overflow-hidden">
<span className="relative z-10">View Our Work</span>
</button>
</div>

<div className="p-[1px] bg-gradient-to-br from-white/20 to-orange-500/20 rounded-lg group hover:from-orange-500/50 hover:to-orange-500/50 transition-all duration-300">
<button className="w-full h-full px-8 py-4 bg-black/50 backdrop-blur-sm text-white font-medium rounded-lg flex items-center justify-center gap-2 group-hover:bg-orange-950/20 transition-all">
                                Partner with Us
                                
<svg className="w-4 h-4 group-hover:translate-x-1 transition-transform text-orange-500" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12L20 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M14 6L20 12L14 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="mt-16 flex items-center gap-4 text-sm text-gray-500 hero-anim" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold border border-black shadow-[0_0_15px_rgba(249,115,22,0.4)]">B</div>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] text-black font-bold border border-black">F5</div>
</div>
<p>Trusted by Fortune 500 Leaders &amp; The BenAI Community</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="leading-tight reveal-text md:text-3xl text-3xl font-light text-gray-200 font-manrope" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="block font-space-grotesk opacity-30 mb-8">The AI landscape is noisy.</span>
                You have likely sat through countless pitches. You have seen the hype cycles. You might have even paid consultants who handed you a roadmap but left you without a vehicle.
                
                <span className="font-semibold text-white font-space-grotesk drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">We don’t do that.</span>
                
                At Ovidius, we believe strategy without execution is hallucination. We build bespoke AI infrastructure for companies earning $10M+.
            </h2>
</div>
</section>

<section className="py-24 bg-charcoal border-y border-white/5 overflow-hidden relative" id="ecosystem">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group anim-slide-in" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>

<div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur-2xl"></div>
<div className="relative h-[600px] w-full bg-gray-900 rounded-2xl overflow-hidden grayscale contrast-125 border border-white/10 group-hover:border-orange-500/30 transition-colors">
<img alt="Ben - Founder" className="opacity-80 mix-blend-overlay w-full h-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
<h3 className="text-white font-display text-2xl font-semibold font-space-grotesk" style={{}}>BenAI</h3>
<p className="text-orange-400 font-mono text-sm mt-1 flex items-center gap-2">
<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                                110K+ SUBSCRIBERS
                            </p>
</div>
</div>
</div>

<div className="anim-slide-in" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 font-space-grotesk" style={{}}>Born from the Pulse of the Industry.</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                        Ovidius isn’t just an agency. It is the deployment arm of <span className="text-white font-medium">BenAI</span>, one of the world's most influential B2B AI communities. While traditional agencies scramble to read the documentation, we are writing the curriculum.
                    </p>
<div className="grid grid-cols-2 gap-6 mt-12">

<div className="gradient-border-wrapper from-orange-500/20">
<div className="p-6 glass-panel h-full">
<div className="text-3xl font-display font-semibold text-white mb-2 counter font-space-grotesk" data-target="110" style={{}}>110</div>
<div className="text-sm text-gray-500 uppercase tracking-wider">K+ Community</div>
</div>
</div>

<div className="gradient-border-wrapper from-orange-500/20">
<div className="p-6 glass-panel h-full">
<div className="text-3xl font-display font-semibold text-white mb-2 counter font-space-grotesk" data-target="35" style={{}}>35</div>
<div className="text-sm text-gray-500 uppercase tracking-wider">K+ Business Pros</div>
</div>
</div>

<div className="gradient-border-wrapper from-orange-500/20">
<div className="p-6 glass-panel h-full">
<div className="text-3xl font-display font-semibold text-white mb-2 counter font-space-grotesk" data-target="1000" style={{}}>1000</div>
<div className="text-sm text-gray-500 uppercase tracking-wider">+ Execs Trained</div>
</div>
</div>

<div className="gradient-border-wrapper from-orange-500/20">
<div className="p-6 glass-panel h-full">
<div className="text-3xl font-display font-semibold text-white mb-2 counter font-space-grotesk" data-target="100" style={{}}>100</div>
<div className="text-sm text-gray-500 uppercase tracking-wider">% Deployment Focus</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32 relative" id="expertise">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">

<path className="noodle-path" d="M0,400 L2000,400"></path>
<path className="beam-path" d="M0,400 L2000,400" style={{animationDuration: '4s'}}></path>
</svg>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 anim-slide-in" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<h2 className="font-display text-4xl md:text-6xl font-semibold mb-4 font-space-grotesk" style={{}}>Beyond Simple Automation.</h2>
<p className="text-gray-400 text-xl max-w-2xl font-light">We don't just chat. We build engines.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">

<div className="md:col-span-2 md:row-span-2 anim-slide-in h-full" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="gradient-border-wrapper from-orange-500/40 h-full group hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all">
<div className="glass-panel p-10 h-full flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center mb-6 text-orange-400 group-hover:text-orange-300 transition-colors">

<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9L14 14L10 10L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M19 9V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M19 9H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-3xl font-display font-semibold text-white mb-4 font-space-grotesk" style={{}}>Strategic Auditing &amp; Implementation</h3>
<p className="text-gray-400 leading-relaxed text-lg font-light">We audit your current infrastructure to identify high-impact, low-risk AI entry points. We map the ROI before writing a single line of code. We identify bottlenecks in your revenue streams that can be unclogged with intelligence.</p>
</div>

<div className="mt-8 h-48 w-full border-t border-r border-white/10 relative opacity-50">
<div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-orange-500/10"></div>
<div className="absolute bottom-0 left-1/3 w-1/3 h-3/4 bg-orange-500/20"></div>
<div className="absolute bottom-0 left-2/3 w-1/3 h-full bg-orange-500/30"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 anim-slide-in h-full" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="gradient-border-wrapper from-orange-500/40 h-full group">
<div className="glass-panel p-10 h-full flex flex-col relative overflow-hidden">
<div className="relative z-10 flex-1 flex flex-col">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6 text-white group-hover:border-orange-500/30 group-hover:text-orange-400 transition-all">

<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7C20 8.65685 16.4183 10 12 10C7.58172 10 4 8.65685 4 7C4 5.34315 7.58172 4 12 4C16.4183 4 20 5.34315 20 7Z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M20 17C20 18.6569 16.4183 20 12 20C7.58172 20 4 18.6569 4 17M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M4 7V17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M20 7V17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<h3 className="text-2xl font-display font-semibold text-white mb-4 font-space-grotesk" style={{}}>Enterprise RAG Systems</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">Secure, private Large Language Models trained on your proprietary data. Turn your company’s knowledge base into an active intelligence engine without data leakage.</p>
<ul className="text-xs text-gray-500 space-y-3 mt-auto">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>Vector Database Setup</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>Context Window Opt</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>On-Premise Deploy</li>
</ul>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 anim-slide-in h-full" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="gradient-border-wrapper from-orange-500/40 h-full group">
<div className="glass-panel p-8 h-full">
<h3 className="text-xl font-display font-semibold text-white mb-2">Autonomous Agents</h3>
<p className="text-gray-400 text-sm font-light">Operationalize workflows. Agents that execute tasks, file reports, and manage data.</p>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 anim-slide-in h-full" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="gradient-border-wrapper from-orange-500/40 h-full group">
<div className="glass-panel p-8 h-full flex items-center justify-between">
<div>
<h3 className="text-xl font-display font-semibold text-white mb-2">Computer Vision &amp; Predictive Analytics</h3>
<p className="text-gray-400 text-sm max-w-sm font-light">Forecasting models and visual QC for manufacturing and logistics.</p>
</div>
<div className="text-orange-500 opacity-50 group-hover:opacity-100 transition-opacity">

<svg className="w-10 h-10" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12C3 12 6 5 12 5C18 5 21 12 21 12C21 12 18 19 12 19C6 19 3 12 3 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="12" cy="12" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-12 anim-slide-in" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>Engineering Business Impact</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer anim-slide-in" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="h-64 bg-gray-800 rounded-xl mb-6 relative overflow-hidden border border-white/5 group-hover:border-orange-500/30 transition-all">
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs text-white border border-white/10">Financial Services</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-obsidian rounded border border-white/10 p-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
<div className="w-full h-2 bg-gray-700 rounded mb-2"></div>
<div className="w-2/3 h-2 bg-gray-700 rounded mb-4"></div>
<div className="flex gap-2">
<div className="w-1/2 h-20 bg-orange-500/10 rounded border border-orange-500/20"></div>
<div className="w-1/2 h-20 bg-gray-700/20 rounded"></div>
</div>
</div>
</div>
</div>
<div className="flex items-end gap-4 mb-2">
<h3 className="text-3xl font-display font-semibold text-white group-hover:text-orange-500 transition-colors font-space-grotesk" style={{}}>-85%</h3>
<span className="text-gray-400 text-sm mb-1.5">Manual Review Time</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed max-w-sm">Deployed a localized LLM with OCR for a London Financial Firm. $1.2M Annualized Savings.</p>
</div>

<div className="group cursor-pointer anim-slide-in" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<div className="h-64 bg-gray-800 rounded-xl mb-6 relative overflow-hidden border border-white/5 group-hover:border-orange-500/30 transition-all">
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs text-white border border-white/10">E-Commerce</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-orange-600/20 border border-orange-500 flex items-center justify-center animate-pulse-slow">
<div className="w-8 h-8 bg-orange-500 rounded-full shadow-[0_0_20px_#f97316]"></div>
</div>
</div>
</div>
<div className="flex items-end gap-4 mb-2">
<h3 className="text-3xl font-display font-semibold text-white group-hover:text-orange-500 transition-colors font-space-grotesk" style={{}}>+18pts</h3>
<span className="text-gray-400 text-sm mb-1.5">CSAT Score Increase</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed max-w-sm">Omnichannel AI Agent handling Tier-1 tickets for a Dubai Retail Giant. 24/7 coverage achieved instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-obsidian border-b border-white/5">
<div className="marquee-container overflow-hidden whitespace-nowrap relative max-w-7xl mx-auto">
<div className="marquee-content inline-block">
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>PYTHON</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>LANGCHAIN</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>OPENAI</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>PINECONE</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>AZURE AI</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>AWS SAGEMAKER</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>LLAMAINDEX</span>

<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>PYTHON</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>LANGCHAIN</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>OPENAI</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>PINECONE</span>
<span className="text-2xl font-display font-semibold text-gray-800 mx-8 hover:text-orange-500 transition-colors cursor-default font-space-grotesk" style={{}}>AZURE AI</span>
</div>
</div>
<p className="text-center text-gray-600 text-sm mt-8 tracking-wide">Platform Agnostic. Engineering Obsessed.</p>
</section>

<section className="py-24 bg-charcoal">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display text-3xl font-semibold mb-12 anim-slide-in font-space-grotesk" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>Questions Leaders Ask</h2>
<div className="space-y-4 anim-slide-in" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<details className="group glass-panel rounded-lg open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 group-hover:text-orange-400 transition-colors">
<span>How do you differ from Big 4 consulting firms?</span>
<span className="transition group-open:rotate-180 text-orange-500">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</summary>
<div className="text-gray-400 mt-0 px-6 pb-6 leading-relaxed font-light">
                        They give you a 100-page strategy deck and a bill. We give you a GitHub repository, a deployed application, and a tangible ROI. We are builders, not just thinkers.
                    </div>
</details>
<details className="group glass-panel rounded-lg open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 group-hover:text-orange-400 transition-colors">
<span>Is our data safe?</span>
<span className="transition group-open:rotate-180 text-orange-500">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</summary>
<div className="text-gray-400 mt-0 px-6 pb-6 leading-relaxed font-light">
                        Security is our baseline. We specialize in enterprise-grade deployments, utilizing private VPCs, on-premise LLMs, and strict RBAC. Your data never trains public models.
                    </div>
</details>
<details className="group glass-panel rounded-lg open:bg-white/5 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 group-hover:text-orange-400 transition-colors">
<span>How fast can we see results?</span>
<span className="transition group-open:rotate-180 text-orange-500">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
</summary>
<div className="text-gray-400 mt-0 px-6 pb-6 leading-relaxed font-light">
                        Our "Thin Slice" methodology usually delivers a working prototype within 4 to 6 weeks. We ignore the waterfall method and focus on immediate value validation.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-obsidian relative overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 anim-slide-in" style={{translate: 'none', rotate: 'none', scale: 'none', filter: 'blur(10px)', opacity: '0', transform: 'translate(0px, 50px)'}}>
<h2 className="font-display text-4xl md:text-6xl font-semibold mb-8 font-space-grotesk" style={{}}>
                The gap between companies that <span className="text-orange-500 italic font-space-grotesk" style={{}}>use</span> AI and companies that <span className="text-orange-500 italic font-space-grotesk" style={{}}>are</span> AI is widening.
            </h2>
<p className="text-gray-400 text-xl mb-12 font-light">You have the vision. We have the engineering. Let's build.</p>
<div className="inline-block p-[1px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-shadow duration-500">
<button className="px-10 py-5 bg-white text-black font-semibold text-lg rounded-full hover:scale-105 transition-transform duration-300">
                    Book Your Discovery Call
                </button>
</div>
<p className="mt-6 text-sm text-gray-500">Strictly for companies with $10M+ annual revenue.</p>
</div>
</section>

<footer className="py-12 bg-black border-t border-white/10 text-sm text-gray-500">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-display font-bold text-white text-lg tracking-tight">Ovidius AI</span>
<span>© 2025</span>
</div>
<div className="flex gap-6">
<a className="hover:text-orange-500 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-orange-500 transition-colors" href="#">YouTube (BenAI)</a>
<a className="hover:text-orange-500 transition-colors" href="#">Twitter</a>
</div>
<div className="flex gap-6">
<span>New York</span>
<span>London</span>
<span>Dubai</span>
</div>
</div>
</footer>



    </>
  );
}
