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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                    const roles = ["Ex-Stripe Eng", "YCW22 Founder", "AI Researcher", "Product Lead", "Growth Hacker", "Full Stack Dev", "Design Director"];
                    const colors = ["bg-blue-500", "bg-purple-500", "bg-emerald-500", "bg-rose-500", "bg-amber-500"];
                    for(let j=0; j<3; j++) {
                        for(let i=0; i<7; i++) {
                            const color = colors[Math.floor(Math.random() * colors.length)];
                            document.write(`
                                <div class="inline-flex items-center gap-3 glass-panel px-4 py-2 rounded-full border-white/5">
                                    <div class="w-6 h-6 rounded-full ${color} flex items-center justify-center text-[10px] font-medium text-white opacity-80"></div>
                                    <span class="text-xs text-gray-300 font-medium">${roles[i]}</span>
                                </div>
                            `);
                        }
                    }
                


        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Scroll Reveal Logic
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });

            // 2. Navbar Blur on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('bg-[#0A0A0A]/80');
                    navbar.classList.remove('border-b-0');
                    navbar.classList.add('border-b');
                } else {
                    navbar.classList.remove('bg-[#0A0A0A]/80');
                    navbar.classList.add('border-b-0');
                    navbar.classList.remove('border-b');
                }
            });

            // 3. 3D Mouse Parallax Effect (Desktop only)
            const sceneWrapper = document.getElementById('scene-wrapper');
            const sceneContainer = document.getElementById('hero-scene');
            
            if (sceneContainer && window.innerWidth > 1024) {
                let mouseX = 0;
                let mouseY = 0;
                let targetX = 0;
                let targetY = 0;
                let isHovering = false;

                sceneContainer.addEventListener('mousemove', (e) => {
                    const rect = sceneContainer.getBoundingClientRect();
                    // Calculate mouse position relative to center (-1 to 1)
                    targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
                    targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
                    isHovering = true;
                });

                sceneContainer.addEventListener('mouseleave', () => {
                    targetX = 0;
                    targetY = 0;
                    isHovering = false;
                });

                function animate3D() {
                    // Smooth lerping
                    mouseX += (targetX - mouseX) * 0.05;
                    mouseY += (targetY - mouseY) * 0.05;

                    // Apply rotation to wrapper
                    // Max rotation: 15 degrees
                    if(sceneWrapper) {
                         sceneWrapper.style.transform = `
                            rotateY(${mouseX * 15}deg) 
                            rotateX(${-mouseY * 15}deg)
                        `;
                    }

                    requestAnimationFrame(animate3D);
                }

                animate3D();
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-xl text-white select-none">
                CofoundR
            </div>
<a className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors border border-white/5 backdrop-blur-md" href="https://tally.so/r/2ELvWL">
                Apply Access
            </a>
</div>
</nav>

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-600/10 blur-[120px]"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-blue-900/10 blur-[150px]"></div>
</div>

<section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="flex flex-col gap-8 max-w-xl z-20 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel w-max border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-gray-300">Waitlist is now open</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
<span className="text-white">Find your co-founder.</span><br/>
<span className="text-gray-500">Build your future.</span>
</h1>
<p className="text-lg text-gray-400 font-normal leading-relaxed max-w-md">
                    Meet ambitious builders who match your skills, vision, and ambition. Not networking. <span className="text-white font-medium">Just building.</span>
</p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
<a className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3.5 px-8 rounded-full glow-button flex items-center justify-center gap-2" href="https://tally.so/r/2ELvWL">
                        Join CofoundR 
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-medium text-gray-300 hover:text-white py-3.5 px-8 rounded-full glass-panel flex items-center justify-center gap-2 transition-colors" href="#how-it-works">
                        How it works
                    </a>
</div>
</div>

<div className="hidden lg:block relative h-[600px] w-full scene-container" id="hero-scene">
<div className="absolute inset-0 scene-wrapper flex items-center justify-center" id="scene-wrapper">

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{transform: 'translateZ(-50px)'}}>
<path className="path-line" d="M 150 200 L 350 300 L 250 450 Z" fill="none" stroke="rgba(37, 99, 235, 0.3)" strokeWidth="1.5"></path>
<circle cx="350" cy="300" fill="#2563EB" r="4"></circle>
</svg>

<div className="absolute w-12 h-12 bg-blue-600 rounded-full blur-[8px] opacity-50" style={{transform: 'translateZ(20px)'}}></div>
<div className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#2563EB]" style={{transform: 'translateZ(30px)'}}>
<div className="absolute inset-0 rounded-full border border-blue-400 animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
</div>

<div className="absolute top-[15%] left-[5%] w-64 glass-panel-strong rounded-2xl p-4 card-3d animate-float-slow" style={{transform: 'translateZ(80px) rotateY(5deg)'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-lg" icon="solar:code-square-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Alex M.</div>
<div className="text-xs text-gray-400">Full-Stack Engineer</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300">React</span>
<span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300">Node.js</span>
<span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-blue-400/80">Looking for GTM</span>
</div>
</div>

<div className="absolute top-[35%] right-[0%] w-64 glass-panel-strong rounded-2xl p-4 card-3d animate-float-med" style={{transform: 'translateZ(120px) rotateY(-10deg)'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
<iconify-icon className="text-white text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Sarah K.</div>
<div className="text-xs text-gray-400">Product Designer</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300">UX/UI</span>
<span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300">Figma</span>
<span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-blue-400/80">Looking for Tech</span>
</div>
</div>

<div className="absolute bottom-[20%] left-[20%] w-64 glass-panel-strong rounded-2xl p-4 card-3d animate-float-fast" style={{transform: 'translateZ(40px) rotateX(10deg)'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-white/10">
<iconify-icon className="text-white text-lg" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">David J.</div>
<div className="text-xs text-gray-400">Growth Lead</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300">B2B Sales</span>
<span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-gray-300">Marketing</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 reveal">
                Finding a co-founder is <span className="text-gray-500">broken.</span>
</h2>
<div className="grid md:grid-cols-3 gap-8 text-left">

<div className="reveal delay-100">
<div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mb-6 border-white/10">
<iconify-icon className="text-2xl text-gray-400" icon="solar:shuffle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Too random</h3>
<p className="text-sm text-gray-400 leading-relaxed">Endless networking events and swiping apps that rely purely on luck rather than aligned intent.</p>
</div>

<div className="reveal delay-200">
<div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mb-6 border-white/10">
<iconify-icon className="text-2xl text-gray-400" icon="solar:filter-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">No filtering</h3>
<p className="text-sm text-gray-400 leading-relaxed">Hard to distinguish between ideators and actual builders who can execute and commit long-term.</p>
</div>

<div className="reveal delay-300">
<div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mb-6 border-white/10">
<iconify-icon className="text-2xl text-gray-400" icon="solar:ghost-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Ghosting</h3>
<p className="text-sm text-gray-400 leading-relaxed">Conversations fizzle out because platforms aren't designed around the actual process of starting a company.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="how-it-works">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                    We fixed it.
                </h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    A curated network engineered specifically for serious builders ready to start their next venture.
                </p>
</div>

<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
<div className="grid md:grid-cols-3 gap-12 relative z-10">

<div className="flex flex-col items-center text-center reveal delay-100 relative group">
<div className="w-24 h-24 rounded-2xl glass-panel-strong flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:-translate-y-2">
<div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
<iconify-icon className="text-3xl text-white relative z-10" icon="solar:user-id-linear"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-medium border-4 border-[#0A0A0A]">1</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Create your profile</h3>
<p className="text-sm text-gray-400">Define your skills, track record, and exactly what you are looking for in a co-founder.</p>
</div>

<div className="flex flex-col items-center text-center reveal delay-200 relative group">
<div className="w-24 h-24 rounded-2xl glass-panel-strong flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:-translate-y-2">
<div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
<iconify-icon className="text-3xl text-white relative z-10" icon="solar:radar-linear"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-medium border-4 border-[#0A0A0A]">2</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Discover &amp; match</h3>
<p className="text-sm text-gray-400">Our algorithm surfaces highly compatible builders based on complementary skills and shared vision.</p>
</div>

<div className="flex flex-col items-center text-center reveal delay-300 relative group">
<div className="w-24 h-24 rounded-2xl glass-panel-strong flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:-translate-y-2">
<div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
<iconify-icon className="text-3xl text-white relative z-10" icon="solar:rocket-linear"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-medium border-4 border-[#0A0A0A]">3</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Start building</h3>
<p className="text-sm text-gray-400">Connect, validate ideas, and start executing. Less talking, more shipping.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.04] transition-all duration-300 reveal">
<iconify-icon className="text-2xl text-blue-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Smart matching</h3>
<p className="text-xs text-gray-400 leading-relaxed">Algorithmic pairings based on personality types, skill gaps, and industry focus.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.04] transition-all duration-300 reveal delay-100">
<iconify-icon className="text-2xl text-blue-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:target-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Intent-based profiles</h3>
<p className="text-xs text-gray-400 leading-relaxed">Filter by commitment level. Full-time, nights &amp; weekends, or just exploring.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.04] transition-all duration-300 reveal delay-200">
<iconify-icon className="text-2xl text-blue-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Team building</h3>
<p className="text-xs text-gray-400 leading-relaxed">Not just for duos. Form founding teams of 3 or 4 with perfectly balanced capabilities.</p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.04] transition-all duration-300 reveal delay-300">
<iconify-icon className="text-2xl text-blue-400 mb-6 group-hover:scale-110 transition-transform" icon="solar:lock-keyhole-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Vetted network</h3>
<p className="text-xs text-gray-400 leading-relaxed">Application-only access ensures high quality. No spam, no agencies, just founders.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 overflow-hidden">
<div className="text-center mb-10 reveal">
<p className="text-sm font-medium shimmer-text">Early builders are joining CofoundR</p>
</div>
<div className="relative w-full flex overflow-hidden mask-image-gradient">
<div className="flex whitespace-nowrap gap-4 animate-[scroll-x_30s_linear_infinite] px-4 w-max">


</div>

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-blue-600/5 mix-blend-screen pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal">
<iconify-icon className="text-4xl text-blue-500 mb-8" icon="solar:verified-check-linear"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Start your journey with the <span className="text-gradient-blue">right people.</span>
</h2>
<p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
                Join CofoundR today and be among the first builders to experience a better way to start a company.
            </p>
<a className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-100 text-base font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]" href="https://tally.so/r/2ELvWL">
                Apply for Early Access
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="mt-6 text-xs text-gray-500 font-medium tracking-wide uppercase">Limited spots available for beta</p>
</div>
</section>

<footer className="py-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-semibold tracking-tighter text-lg text-white opacity-50">CofoundR</div>
<div className="text-xs text-gray-600">© 2024 CofoundR. All rights reserved.</div>
</div>
</footer>



    </>
  );
}
