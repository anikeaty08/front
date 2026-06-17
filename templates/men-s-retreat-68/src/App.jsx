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



        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        
        // Configuration
        const particleCount = 60; // Number of floating embers
        const connectionDistance = 100;
        
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = -Math.random() * 1.5 - 0.2; // Move upwards like fire
                this.size = Math.random() * 2 + 0.5;
                this.alpha = Math.random() * 0.5 + 0.1;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Reset if off screen (looping)
                if (this.y < -10) {
                    this.y = height + 10;
                    this.x = Math.random() * width;
                }
                
                // Slight oscillation
                this.x += Math.sin(this.y * 0.01) * 0.2;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(239, 68, 68, ${this.alpha})`; // Red tint
                ctx.fill();
                
                // Glow effect
                ctx.shadowBlur = 15;
                ctx.shadowColor = "rgba(220, 38, 38, 0.5)"; // Red glow
            }
        }
        
        function init() {
            resize();
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            // Draw connections for "Constellation/Tech" look if close
            ctx.shadowBlur = 0; // Reset shadow for lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(239, 68, 68, ${0.1 * (1 - dist/connectionDistance)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        window.addEventListener('resize', resize);
        init();
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg z-50 flex items-center gap-2" href="#">
<iconify-icon className="text-red-600" icon="lucide:flame" width="20"></iconify-icon>
                FORGE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors duration-300" href="#protocol">The Day</a>
<a className="hover:text-white transition-colors duration-300" href="#community">The Brotherhood</a>
<a className="hover:text-white transition-colors duration-300" href="#apply">Apply</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold tracking-tight hover:bg-neutral-200 transition-all duration-300">
                Join the waitlist
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">

<canvas className="z-0 opacity-60 absolute top-0 right-0 bottom-0 left-0" height="887" id="hero-canvas" width="1052"></canvas>

<div className="absolute inset-0 z-[-1]">
<img alt="Ocean Texture" className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
</div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">

<div className="scanner-line"></div>

<div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-white/5 rounded-full hud-spin border-dashed opacity-20"></div>

<div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full hud-spin-reverse opacity-30"></div>

<div className="absolute top-1/2 left-0 w-8 h-[1px] bg-red-500/20"></div>
<div className="absolute top-1/2 right-0 w-8 h-[1px] bg-red-500/20"></div>
<div className="absolute left-1/2 top-0 h-8 w-[1px] bg-red-500/20"></div>
<div className="absolute left-1/2 bottom-0 h-8 w-[1px] bg-red-500/20"></div>
</div>
<div className="z-10 text-center max-w-4xl relative space-y-8">
<div className="reveal inline-flex gap-2 text-xs font-medium text-red-400 bg-red-500/5 border-red-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Target: October 14th Expedition
            </div>
<h1 className="reveal reveal-delay-1 md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter relative">
                Reclaim your <br/>
<span className="text-gradient-red inline-block relative">
                    primal nature.
                    
<svg className="absolute w-full h-3 -bottom-1 left-0 text-red-600/20" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>
<p className="reveal reveal-delay-2 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                One day. No distractions. We strip away the modern noise through brotherhood, firepower, and feasting.
            </p>
<div className="reveal reveal-delay-3 flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<button className="group relative px-8 py-3.5 bg-white text-black rounded-lg text-sm font-semibold tracking-tight hover:bg-neutral-200 transition-all overflow-hidden w-full md:w-auto">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Reserve your seat
                        <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:anchor" strokeWidth="1.5"></iconify-icon>
</span>

<div className="absolute inset-0 bg-red-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
</button>
<button className="px-8 py-3.5 text-white border border-white/10 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors w-full md:w-auto backdrop-blur-sm">
                    View itinerary
                </button>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-white" icon="lucide:arrow-down" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative bg-neutral-950" id="protocol">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 text-center md:text-left">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">The Daily Protocol</h2>
<p className="text-neutral-400 max-w-xl leading-relaxed">
                    A sequence designed to break patterns and forge bonds. We combine leisure, focus, and sustenance into a single, transformative experience.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
<div className="group-hover:bg-black/20 transition-colors z-10 bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Men on Boat" className="card-zoom-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black via-black/80 to-transparent w-full z-20 pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<div className="flex items-center gap-3 mb-3 text-blue-400">
<iconify-icon icon="lucide:waves" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase">09:00 - 13:00</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">The Voyage</h3>
<p className="text-sm text-neutral-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                            Three hours on open water. Cold beers, deep conversation, and live coaching sessions while we navigate the elements. No phones, just brotherhood.
                        </p>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
<div className="group-hover:bg-black/20 transition-colors z-10 bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Shooting Range" className="card-zoom-image w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center gap-3 mb-3 text-orange-400">
<iconify-icon icon="lucide:crosshair" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase">14:00 - 17:00</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">The Hunt</h3>
<p className="text-sm text-neutral-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                            Transition to the range. Shotguns, rifles, and pistols. Focus, discipline, and adrenaline. Master the tool, master the mind.
                        </p>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
<img alt="Steak and Fire" className="card-zoom-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center gap-3 mb-3 text-red-500">
<iconify-icon icon="lucide:flame" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase">18:00 - LATE</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">The Feast</h3>
<p className="text-sm text-neutral-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                            We end as we began: together. Premium cuts of steak, open fire, and red wine. We reflect on the day and solidify the connections made.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5 relative overflow-hidden" id="community">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Brotherhood" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=3132&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-10 -left-10 w-full h-full border border-white/5 rounded-2xl -z-0 hidden md:block"></div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div>
<span className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-4 block">Beyond the Day</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">The work doesn't end<br/>when the fire goes out.</h2>
<p className="text-neutral-400 leading-relaxed text-lg">
                        The one-day intensive is the spark. The community is the fuel. For those who want more, we offer a dedicated digital sanctuary.
                    </p>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">The Inner Circle</h3>
<p className="text-sm text-neutral-500">Access to a private network of high-caliber men. Weekly accountability, business networking, and life strategy.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">The Curriculum</h3>
<p className="text-sm text-neutral-500">A structured video course breaking down the pillars of masculinity, financial sovereignty, and family leadership.</p>
</div>
</div>
</div>
<div className="pt-4">
<button className="flex items-center gap-2 text-white border-b border-red-500 pb-1 hover:text-red-400 transition-colors">
                        Learn about membership
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto text-center relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-[120px] text-white/5 font-serif select-none">"</div>
<h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-relaxed mb-8 relative z-10">
                It wasn't just a boat ride or a shooting range. It was a complete reset. I walked in heavy, and I walked out with a clarity I haven't felt in a decade. The steak was just the bonus.
            </h3>
<div className="flex flex-col items-center gap-2">
<span className="text-white font-semibold tracking-tight">James T.</span>
<span className="text-sm text-neutral-500">Attended August 2024</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 border-t border-white/5 relative" id="apply">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Choose Your Path</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">From a single spark to a complete forge. Select the intensity that matches your current mission.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="group relative flex flex-col h-full bg-neutral-900/20 border border-white/10 rounded-xl p-8 hover:border-red-500/30 hover:bg-neutral-900/40 transition-all duration-300 hover:-translate-y-1">
<div className="mb-8">
<span className="text-xs font-bold text-red-500 tracking-[0.2em] uppercase mb-3 block">The Spark</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Clarity Session</h3>
<p className="text-sm text-neutral-400 leading-relaxed h-20">
                            A single, high-intensity 90-minute deep dive to shatter one major mental block and realign your trajectory.
                        </p>
</div>
<div className="w-full h-px bg-white/5 mb-8"></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>90-Minute Strategy Call</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>Primal Assessment</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>Action Blueprint</span>
</li>
</ul>
<button className="w-full py-4 border border-white/10 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded">
                        Book Session
                    </button>
</div>

<div className="group relative flex flex-col h-full bg-neutral-900/60 border border-red-900/30 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 shadow-2xl shadow-red-900/5 hover:-translate-y-1 z-10">

<div className="absolute -top-px -right-px bg-red-700/80 text-white text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-bl-lg rounded-tr-lg backdrop-blur-sm border border-red-500/20">
                        Most Popular
                    </div>
<div className="mb-8">
<span className="text-xs font-bold text-red-500 tracking-[0.2em] uppercase mb-3 block">The Fire</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">12-Week Protocol</h3>
<p className="text-sm text-neutral-400 leading-relaxed h-20">
                            A comprehensive reconstruction of your habits, mindset, and physical presence. The complete metamorphosis.
                        </p>
</div>
<div className="w-full h-px bg-white/5 mb-8"></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>Weekly 1:1 Coaching</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>24/7 Voxer Access</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>Custom Somatic Drillset</span>
</li>
</ul>
<button className="relative w-full py-4 bg-[#A05D48] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#8a4d3a] transition-all duration-300 rounded overflow-hidden group-hover:shadow-lg group-hover:shadow-red-900/20">
<span className="relative z-10">Apply Now</span>
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</button>

<div className="absolute inset-0 bg-red-600/5 rounded-xl blur-xl -z-10 group-hover:bg-red-600/10 transition-colors"></div>
</div>

<div className="group relative flex flex-col h-full bg-neutral-900/20 border border-white/10 rounded-xl p-8 hover:border-red-500/30 hover:bg-neutral-900/40 transition-all duration-300 hover:-translate-y-1">
<div className="mb-8">
<span className="text-xs font-bold text-red-500 tracking-[0.2em] uppercase mb-3 block">The Forge</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Immersion Retreat</h3>
<p className="text-sm text-neutral-400 leading-relaxed h-20">
                            4 days in the wilderness. Disconnect from technology, reconnect with nature. A small group experience for leaders.
                        </p>
</div>
<div className="w-full h-px bg-white/5 mb-8"></div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>Lodging &amp; Organic Meals</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>Guided Expeditions</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<iconify-icon className="text-red-500 mt-0.5" icon="lucide:arrow-right" width="16"></iconify-icon>
<span>Deep Work Circles</span>
</li>
</ul>
<button className="w-full py-4 border border-white/10 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded">
                        Join Waitlist
                    </button>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="text-white font-semibold tracking-tighter text-xl flex items-center gap-2">
<iconify-icon className="text-neutral-700" icon="lucide:flame" width="18"></iconify-icon>
                    FORGE
                </span>
<p className="text-sm text-neutral-500">© 2024 Forge Daily Retreats.</p>
</div>
<div className="flex gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">The Course</a>
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
</div>
</div>
</footer>



    </>
  );
}
