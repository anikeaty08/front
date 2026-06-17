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



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .reveal-blur').forEach((el) => observer.observe(el));
            
            // Magnetic Button Effect
            document.querySelectorAll('.magnetic-btn').forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = `translate(0px, 0px) scale(1)`;
                });
            });

            // 3D Parallax & Tilt for Hero Section
            const heroSection = document.getElementById('hero-section');
            const tiltContainer = document.getElementById('hero-tilt-container');

            if (window.innerWidth > 768) { // Only apply on desktop
                heroSection.addEventListener('mousemove', (e) => {
                    // Calculate rotation angles based on cursor position (relative to center)
                    const xAxis = (window.innerWidth / 2 - e.pageX) / 40; 
                    const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
                    
                    tiltContainer.style.transition = 'none'; // Remove transition for smooth tracking
                    tiltContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
                });

                heroSection.addEventListener('mouseenter', () => {
                    tiltContainer.style.transition = 'transform 0.1s ease-out';
                });

                heroSection.addEventListener('mouseleave', () => {
                    tiltContainer.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                    tiltContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
                });
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
      

<div className="cinematic-noise"></div>

<nav className="fixed w-full z-40 top-0 pt-6 pb-4 px-6 md:px-12 backdrop-blur-2xl bg-[#030303]/40 border-b border-white/5 transition-all duration-700 reveal">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="text-xl font-medium tracking-tighter text-white uppercase" href="#" style={{letterSpacing: '-0.05em'}}>Voice.</a>
<div className="hidden md:flex gap-10 text-xs font-medium text-neutral-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors duration-500" href="#about">About</a>
<a className="hover:text-white transition-colors duration-500" href="#demos">Demos</a>
<a className="hover:text-white transition-colors duration-500" href="#ai-agent">AI Agent</a>
</div>
<a className="text-xs font-medium px-6 py-2.5 rounded-full border border-white/10 hover:border-[#8b0000]/50 hover:bg-[#8b0000]/10 transition-all duration-500 text-white uppercase tracking-widest" href="#book">Book Session</a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 overflow-hidden hero-perspective cursor-crosshair" id="hero-section">

<div className="aurora-bg"></div>

<div className="particle w-2 h-2 top-[20%] left-[15%] hidden md:block" style={{animationDelay: '0s'}}></div>
<div className="particle w-3 h-3 top-[60%] right-[20%] hidden md:block" style={{animationDelay: '2s'}}></div>
<div className="particle w-1.5 h-1.5 bottom-[30%] left-[30%] hidden md:block" style={{animationDelay: '4s'}}></div>
<div className="particle w-2 h-2 top-[40%] right-[35%] hidden md:block" style={{animationDelay: '1s'}}></div>

<div className="z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center hero-3d-element" id="hero-tilt-container">

<div className="relative w-full h-40 md:h-56 mb-16 flex items-end justify-center layer-back">
<div className="sound-ring" style={{animationDelay: '0s'}}></div>
<div className="sound-ring" style={{animationDelay: '1.3s'}}></div>
<div className="sound-ring" style={{animationDelay: '2.6s'}}></div>

<div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-64 h-8 bg-[#ff2a4b] blur-[50px] opacity-20 rounded-[100%]"></div>

<div className="relative z-10 flex items-end justify-center gap-[4px] h-full w-full opacity-90 mix-blend-screen reveal-blur layer-front">

<div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent blur-md rounded-b-full"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-1 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-2 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-3 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-4 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-5 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-6 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-7 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-8 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-9 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-10 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-8 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-6 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-4 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-2 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-1 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-3 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-5 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-7 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-9 shadow-[0_0_15px_#8b0000]"></div>
<div className="w-1 md:w-[6px] rounded-t-full wave-bar wb-10 shadow-[0_0_15px_#8b0000]"></div>
</div>
</div>

<div className="layer-mid w-full">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-shine mb-8 leading-[0.9] reveal delay-100 drop-shadow-2xl">
                    A Voice That <br className="hidden md:block"/> Commands.
                </h1>
<p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-14 font-light tracking-wide reveal delay-200">
                    Premium cinematic voice acting for commercials, trailers, and immersive storytelling. Feel the resonance.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 reveal delay-300 layer-front">

<button className="magnetic-btn group relative flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full text-sm font-medium uppercase tracking-widest overflow-hidden hover:bg-neutral-200 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all">
<iconify-icon className="text-2xl relative z-10" icon="solar:play-circle-linear"></iconify-icon>
<span className="relative z-10">Listen Now</span>
</button>

<a className="px-10 py-5 rounded-full text-sm font-medium uppercase tracking-widest text-white border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm" href="#book">
                    Book a Session
                </a>
</div>

<div className="glass-card w-full max-w-lg mx-auto rounded-3xl p-5 flex items-center gap-6 relative overflow-visible group reveal delay-300 layer-front shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10">

<div className="absolute -inset-1 bg-gradient-to-r from-[#8b0000]/30 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
<button className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 hover:bg-[#8b0000] hover:border-[#8b0000] transition-all duration-500 shrink-0 shadow-lg group-hover:shadow-[0_0_25px_rgba(139,0,0,0.6)] group-hover:scale-110 relative z-10">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</button>
<div className="flex-1 flex flex-col gap-3 z-10">
<div className="flex justify-between items-center text-xs font-medium text-neutral-400 uppercase tracking-widest">
<span className="text-white drop-shadow-md">Cinematic Reel</span>
<span>0:42 / 1:45</span>
</div>

<div className="scrub-line overflow-visible">
<div className="scrub-progress">
<div className="scrub-dot transform group-hover:scale-150 transition-transform"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 relative" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
<div className="space-y-10 reveal">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-neutral-300 uppercase tracking-widest">
<div className="w-1.5 h-1.5 rounded-full bg-[#8b0000] shadow-[0_0_8px_#8b0000]"></div>
                    The Talent
                </div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white leading-tight">
                    A signature sound <br/>for premium brands.
                </h2>
<p className="text-neutral-400 text-lg leading-relaxed font-light tracking-wide">
                    A deep, charismatic voice trusted by studios and storytellers worldwide. Whether it's the gritty intensity of a AAA video game antagonist, the smooth allure of a luxury car commercial, or the commanding presence of a theatrical trailer, the delivery is always meticulously crafted to evoke emotion.
                </p>
<div className="pt-8 flex items-center gap-12 border-t border-white/5">
<div className="flex flex-col gap-2">
<span className="text-5xl font-medium text-white tracking-tighter">10<span className="text-[#8b0000]">+</span></span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Years Exp.</span>
</div>
<div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
<div className="flex flex-col gap-2">
<span className="text-5xl font-medium text-white tracking-tighter">Pro</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Home Studio</span>
</div>
</div>
</div>
<div className="relative group reveal-blur">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#8b0000]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative aspect-[3/4] bg-[#080808] rounded-[2.5rem] border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/40 to-transparent"></div>
<iconify-icon className="text-9xl text-neutral-800/50 relative z-10 transition-transform duration-1000 group-hover:scale-105" icon="solar:user-linear"></iconify-icon>

<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40 z-20 mix-blend-multiply"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-gradient-to-b from-[#030303] via-neutral-950/20 to-[#030303] border-y border-white/5 relative" id="demos">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal">
<div>
<h2 className="text-5xl font-medium tracking-tighter text-white mb-6">Master Reels.</h2>
<p className="text-neutral-400 text-lg font-light tracking-wide">Experience the range and depth across various genres.</p>
</div>
<button className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-[#8b0000] hover:text-white transition-colors duration-500 pb-2 border-b border-[#8b0000]/30 hover:border-white">
                    Download All <iconify-icon className="text-lg" icon="solar:download-linear"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-[2rem] flex flex-col gap-6 group cursor-pointer reveal delay-100">
<div className="flex justify-between items-start">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 group-hover:bg-[#8b0000] group-hover:border-[#8b0000] group-hover:shadow-[0_0_30px_rgba(139,0,0,0.4)] transition-all duration-700 shrink-0">
<iconify-icon className="text-3xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors duration-500">1:12</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Luxury Commercial</h3>
<div className="scrub-line opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<div className="scrub-progress" style={{width: '0%'}}>
<div className="scrub-dot opacity-0 group-hover:opacity-100"></div>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-[2rem] flex flex-col gap-6 group cursor-pointer reveal delay-200">
<div className="flex justify-between items-start">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 group-hover:bg-[#8b0000] group-hover:border-[#8b0000] group-hover:shadow-[0_0_30px_rgba(139,0,0,0.4)] transition-all duration-700 shrink-0">
<iconify-icon className="text-3xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors duration-500">0:45</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Theatrical Trailer</h3>
<div className="scrub-line opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<div className="scrub-progress" style={{width: '0%'}}>
<div className="scrub-dot opacity-0 group-hover:opacity-100"></div>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-[2rem] flex flex-col gap-6 group cursor-pointer reveal delay-100">
<div className="flex justify-between items-start">
<div className="w-16 h-16 rounded-full bg-[#8b0000] flex items-center justify-center text-white shadow-[0_0_30px_rgba(139,0,0,0.3)] transition-all duration-700 shrink-0">
<iconify-icon className="text-3xl" icon="solar:pause-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-white uppercase tracking-widest">2:05</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">AAA Game Antagonist</h3>
<div className="scrub-line">
<div className="scrub-progress" style={{width: '45%'}}>
<div className="scrub-dot"></div>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-[2rem] flex flex-col gap-6 group cursor-pointer reveal delay-200">
<div className="flex justify-between items-start">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/5 group-hover:bg-[#8b0000] group-hover:border-[#8b0000] group-hover:shadow-[0_0_30px_rgba(139,0,0,0.4)] transition-all duration-700 shrink-0">
<iconify-icon className="text-3xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest group-hover:text-white transition-colors duration-500">3:30</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Cinematic Narration</h3>
<div className="scrub-line opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<div className="scrub-progress" style={{width: '0%'}}>
<div className="scrub-dot opacity-0 group-hover:opacity-100"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto text-center reveal">
<h2 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 mb-16">Expertise &amp; Applications</h2>
<div className="flex flex-wrap justify-center gap-6">
<div className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 text-neutral-400 hover:text-white group">
<iconify-icon className="text-2xl text-[#8b0000] group-hover:scale-110 transition-transform duration-500" icon="solar:tv-linear"></iconify-icon>
<span className="font-light tracking-wide">Commercials</span>
</div>
<div className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 text-neutral-400 hover:text-white group">
<iconify-icon className="text-2xl text-[#8b0000] group-hover:scale-110 transition-transform duration-500" icon="solar:gamepad-linear"></iconify-icon>
<span className="font-light tracking-wide">Video Games</span>
</div>
<div className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 text-neutral-400 hover:text-white group">
<iconify-icon className="text-2xl text-[#8b0000] group-hover:scale-110 transition-transform duration-500" icon="solar:clapperboard-play-linear"></iconify-icon>
<span className="font-light tracking-wide">Film Trailers</span>
</div>
<div className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 text-neutral-400 hover:text-white group">
<iconify-icon className="text-2xl text-[#8b0000] group-hover:scale-110 transition-transform duration-500" icon="solar:book-linear"></iconify-icon>
<span className="font-light tracking-wide">Audiobooks</span>
</div>
<div className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 text-neutral-400 hover:text-white group">
<iconify-icon className="text-2xl text-[#8b0000] group-hover:scale-110 transition-transform duration-500" icon="solar:microphone-3-linear"></iconify-icon>
<span className="font-light tracking-wide">Documentaries</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 relative overflow-hidden" id="ai-agent">
<div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#600000]/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
<div className="reveal">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#8b0000]/10 border border-[#8b0000]/20 text-xs font-medium text-[#ff4d6d] uppercase tracking-widest mb-8">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Experience
                </div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-8 leading-tight">
                    Converse with the <br/>Digital Persona.
                </h2>
<p className="text-neutral-400 text-lg leading-relaxed font-light tracking-wide mb-10">
                    Experience the voice dynamically. My tonal qualities have been meticulously mapped into an advanced conversational AI. Request a script read, adjust the emotional weight, and hear the results in real-time.
                </p>
<ul className="space-y-6 mb-12 text-sm font-light text-neutral-300 tracking-wide">
<li className="flex items-center gap-4"><iconify-icon className="text-[#8b0000] text-xl" icon="solar:check-circle-linear"></iconify-icon> Instant bespoke script readings</li>
<li className="flex items-center gap-4"><iconify-icon className="text-[#8b0000] text-xl" icon="solar:check-circle-linear"></iconify-icon> Real-time emotional &amp; tonal mapping</li>
<li className="flex items-center gap-4"><iconify-icon className="text-[#8b0000] text-xl" icon="solar:check-circle-linear"></iconify-icon> 24/7 interactive sonic portfolio</li>
</ul>
</div>
<div className="glass-card rounded-[2.5rem] p-8 border border-white/5 relative shadow-2xl bg-gradient-to-b from-white/[0.03] to-transparent reveal delay-200">
<div className="flex items-center gap-5 mb-8 pb-6 border-b border-white/5">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8b0000] to-red-700 flex items-center justify-center shadow-[0_0_20px_rgba(139,0,0,0.4)]">
<iconify-icon className="text-white text-xl" icon="solar:soundwave-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-wide">The Voice AI</h4>
<p className="text-xs text-neutral-400 flex items-center gap-2 mt-1 uppercase tracking-widest"><span className="w-1.5 h-1.5 rounded-full bg-[#ff4d6d] shadow-[0_0_5px_#ff4d6d] animate-pulse"></span> Synchronized</p>
</div>
</div>
<div className="space-y-6 mb-8 font-light text-sm tracking-wide">
<div className="flex justify-end">
<div className="bg-white/5 border border-white/10 text-neutral-200 rounded-2xl rounded-tr-sm px-6 py-4 max-w-[80%]">
                            Read this with a dark, cinematic intensity.
                        </div>
</div>
<div className="flex justify-start">
<div className="glass-card border border-[#8b0000]/30 text-white rounded-2xl rounded-tl-sm px-6 py-6 max-w-[90%] w-full relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b0000] to-transparent opacity-50"></div>
<p className="mb-6 text-neutral-300">"In a world where shadows dictate the truth, one man must stand against the dark..."</p>
<div className="flex items-center gap-4 bg-[#030303]/60 rounded-xl p-3 border border-white/5">
<button className="w-10 h-10 rounded-full bg-[#8b0000] flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(139,0,0,0.4)]">
<iconify-icon className="text-lg" icon="solar:pause-linear"></iconify-icon>
</button>
<div className="flex-1 flex gap-[3px] h-5 opacity-80 items-center justify-center overflow-hidden">
<div className="h-[30%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-1"></div>
<div className="h-[70%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-2"></div>
<div className="h-[100%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-3"></div>
<div className="h-[50%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-4"></div>
<div className="h-[80%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-5"></div>
<div className="h-[40%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-6"></div>
<div className="h-[90%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-7"></div>
<div className="h-[60%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-8"></div>
<div className="h-[30%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-9"></div>
<div className="h-[70%] w-1 bg-[#ff4d6d] rounded-full wave-bar wb-10"></div>
</div>
<span className="text-xs text-neutral-400 w-8 text-right font-medium">0:04</span>
</div>
</div>
</div>
</div>
<div className="relative mt-4">
<input className="w-full bg-[#030303] border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white focus:outline-none focus:border-[#8b0000]/50 transition-colors placeholder:text-neutral-600 font-light tracking-wide shadow-inner" placeholder="Type a message or script..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/5">
<iconify-icon className="text-lg" icon="solar:microphone-2-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-neutral-950/20 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8b0000]/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 text-center mb-16 reveal">Client Acclaim</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass-card p-10 rounded-[2rem] relative overflow-hidden group reveal delay-100">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
<iconify-icon className="text-8xl text-white" icon="solar:quote-right-linear"></iconify-icon>
</div>
<div className="flex gap-1.5 mb-8 text-[#8b0000]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl text-neutral-300 font-light leading-relaxed mb-10 tracking-wide">
                        "The depth and texture of the read elevated our entire campaign. It wasn't just reading lines; it was breathing life into the brand's core identity. Flawless."
                    </p>
<div className="flex items-center gap-5 border-t border-white/5 pt-6">
<div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
<span className="text-xs font-medium text-neutral-500 uppercase">SJ</span>
</div>
<div>
<h5 className="text-sm font-medium text-white tracking-wide">Sarah Jenkins</h5>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Creative Director, Apex Auto</p>
</div>
</div>
</div>
<div className="glass-card p-10 rounded-[2rem] relative overflow-hidden group reveal delay-200">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
<iconify-icon className="text-8xl text-white" icon="solar:quote-right-linear"></iconify-icon>
</div>
<div className="flex gap-1.5 mb-8 text-[#8b0000]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl text-neutral-300 font-light leading-relaxed mb-10 tracking-wide">
                        "Finding the right presence for our antagonist was tough until we heard this demo. The performance was chilling, commanding, and anchored the story perfectly."
                    </p>
<div className="flex items-center gap-5 border-t border-white/5 pt-6">
<div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
<span className="text-xs font-medium text-neutral-500 uppercase">DC</span>
</div>
<div>
<h5 className="text-sm font-medium text-white tracking-wide">David Chen</h5>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Lead Audio, Nexus Games</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 relative overflow-hidden flex justify-center border-t border-white/5" id="book">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-4xl h-[80%] bg-[#600000]/15 blur-[150px] rounded-full z-0 pointer-events-none"></div>
<div className="relative z-10 w-full max-w-5xl glass-card border border-white/5 rounded-[3rem] p-16 md:p-24 text-center overflow-hidden reveal">
<div className="absolute bottom-0 left-0 w-full h-40 opacity-5 flex items-end justify-center gap-2 pointer-events-none">
<div className="h-[20%] w-2 bg-white rounded-t-full"></div>
<div className="h-[50%] w-2 bg-white rounded-t-full"></div>
<div className="h-[100%] w-2 bg-white rounded-t-full"></div>
<div className="h-[70%] w-2 bg-white rounded-t-full"></div>
<div className="h-[30%] w-2 bg-white rounded-t-full"></div>
<div className="h-[80%] w-2 bg-white rounded-t-full"></div>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8">
                Ready to Sound Premium?
            </h2>
<p className="text-neutral-400 text-xl mb-14 max-w-2xl mx-auto font-light tracking-wide">
                Secure a professional recording session. Fast turnarounds, broadcast-quality audio, and directed sessions available globally.
            </p>
<button className="magnetic-btn inline-flex items-center justify-center gap-4 bg-white text-black px-12 py-6 rounded-full text-sm font-medium uppercase tracking-widest hover:scale-105 hover:bg-neutral-200 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                Schedule a Call <iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</button>
</div>
</section>

<footer className="py-16 px-6 md:px-12 border-t border-white/5 relative z-10 bg-[#020202]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-2xl font-medium tracking-tighter text-white uppercase" style={{letterSpacing: '-0.05em'}}>VOICE.</div>
<div className="flex gap-8 text-neutral-600">
<a className="hover:text-white transition-colors duration-500" href="#"><iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors duration-500" href="#"><iconify-icon className="text-2xl" icon="solar:link-circle-linear"></iconify-icon></a>
</div>
<p className="text-xs text-neutral-600 font-light uppercase tracking-widest">
                © 2024 Voice Studio. All rights reserved.
            </p>
</div>
</footer>

<a className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-[#030303]/80 backdrop-blur-2xl border border-white/10 rounded-full pl-3 pr-6 py-3 text-white cursor-pointer hover:bg-[#0a0a0a] hover:border-[#8b0000]/50 transition-all duration-500 group shadow-2xl" href="#ai-agent">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8b0000] to-red-700 flex items-center justify-center relative shadow-[0_0_20px_rgba(139,0,0,0.5)]">
<iconify-icon className="text-xl relative z-10" icon="solar:microphone-3-linear"></iconify-icon>
<div className="absolute inset-0 bg-[#8b0000] rounded-full animate-ping opacity-30"></div>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">Talk to AI</span>
</a>



    </>
  );
}
