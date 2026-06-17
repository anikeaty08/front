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



        // Particles
        const particleContainer = document.getElementById('particles');
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 2 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            const duration = Math.random() * 15 + 10;
            particle.style.setProperty('--duration', `${duration}s`);
            particle.style.animationDelay = `-${Math.random() * 20}s`;
            particle.style.setProperty('--opacity', Math.random() * 0.3 + 0.1);
            particleContainer.appendChild(particle);
        }

        // Cursor
        const cursor = document.getElementById('magic-cursor');
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });
        const hoverables = document.querySelectorAll('a, button, article, .group, input, textarea, select');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.querySelector('.cursor-dot').style.transform = 'scale(2)';
                cursor.querySelector('.cursor-glow').style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.querySelector('.cursor-glow').style.background = 'radial-gradient(circle, rgba(198, 168, 124, 0.25) 0%, rgba(0,0,0,0) 70%)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.querySelector('.cursor-dot').style.transform = 'scale(1)';
                cursor.querySelector('.cursor-glow').style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.querySelector('.cursor-glow').style.background = 'radial-gradient(circle, rgba(198, 168, 124, 0.15) 0%, rgba(0,0,0,0) 70%)';
            });
        });

        // Intersection Observer
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('reveal-hidden')) {
                        entry.target.classList.add('reveal-visible');
                    }
                    if (entry.target.id === 'about-line') {
                        entry.target.classList.add('active');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-hidden').forEach(el => observer.observe(el));
        document.querySelectorAll('#about-line').forEach(el => observer.observe(el));

        // Loading
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('magic-loader').classList.add('fade-out');
            }, 1000);
        });

        // Canvas BG (Gold/Dust Effect)
        const mCanvas = document.getElementById('magic-bg');
        const mCtx = mCanvas.getContext('2d');
        let mW, mH;
        function mResize() {
            mW = mCanvas.width = window.innerWidth;
            mH = mCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', mResize);
        mResize();

        class MStream {
            constructor() {
                this.pts = [];
                this.cnt = 5;
                this.spd = Math.random() * 0.001 + 0.0005;
                this.off = Math.random() * 1000;
                for (let t = 0; t < this.cnt; t++) {
                    this.pts.push({ x: Math.random() * mW, y: mH - (mH / this.cnt) * t });
                }
            }
            update(t) {
                for (let s = 0; s < this.cnt; s++) {
                    this.pts[s].x += Math.sin(t * this.spd + s + this.off) * 1.5;
                }
            }
            draw(t) {
                t.beginPath();
                t.moveTo(this.pts[0].x, this.pts[0].y);
                for (let s = 1; s < this.pts.length - 1; s++) {
                    const e = (this.pts[s].x + this.pts[s + 1].x) / 2;
                    const i = (this.pts[s].y + this.pts[s + 1].y) / 2;
                    t.quadraticCurveTo(this.pts[s].x, this.pts[s].y, e, i);
                }
                t.strokeStyle = 'rgba(198, 168, 124, 0.05)';
                t.lineWidth = 60;
                t.lineCap = 'round';
                t.filter = 'blur(40px)';
                t.stroke();
                t.filter = 'none';
                t.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                t.lineWidth = 1;
                t.stroke();
            }
        }
        const mStreams = [new MStream(), new MStream(), new MStream()];
        function mAnim(t) {
            mCtx.clearRect(0, 0, mW, mH);
            if (window.innerWidth > 768) {
                mStreams.forEach(s => { s.update(t); s.draw(mCtx); });
            }
            requestAnimationFrame(mAnim);
        }
        mAnim(0);
        window.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / window.innerHeight;
            mCanvas.style.opacity = Math.max(0.1, 0.6 - scrollPercent * 0.5);
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
      

<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-1000" id="magic-loader">
<div className="relative w-32 h-32 mb-8 flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-[#c6a87c] opacity-20 blur-2xl animate-pulse"></div>
<div className="absolute inset-0 border border-[#c6a87c]/30 rounded-full animate-[spin_8s_linear_infinite]"></div>
<div className="absolute inset-4 border border-slate-600/30 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
<iconify-icon className="text-[#c6a87c] opacity-80 text-4xl animate-pulse" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<span className="font-cinematic text-[#c6a87c] tracking-[0.3em] text-xs uppercase animate-pulse">
            The Show Begins...
        </span>
</div>

<canvas className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40 mix-blend-screen transition-opacity duration-700" id="magic-bg"></canvas>
<div className="particle-container" id="particles"></div>
<div id="magic-cursor"><div className="cursor-dot"></div><div className="cursor-glow"></div></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
<div className="reveal-hidden pointer-events-auto flex items-center gap-3">
<a className="flex flex-col items-center leading-none group cursor-pointer" href="#">
<span className="font-ancient text-lg text-[#c6a87c] font-bold tracking-widest group-hover:text-white transition-colors">THE</span>
<span className="font-ancient text-2xl text-slate-100 font-bold tracking-[0.2em]">SHOW</span>
<span className="font-ancient text-xs text-[#c6a87c] tracking-[0.5em] mt-1 group-hover:text-white transition-colors">COMPANY</span>
</a>
</div>
<div className="hidden md:flex gap-8 pointer-events-auto reveal-hidden items-center" style={{transitionDelay: '200ms'}}>
<a className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-[#c6a87c] transition-colors duration-500" href="#about">About</a>
<a className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-[#c6a87c] transition-colors duration-500" href="#events">Events</a>
<a className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-[#c6a87c] transition-colors duration-500" href="#shows">Shows</a>
<a className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-[#c6a87c] transition-colors duration-500" href="#team">Team</a>
<a className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-[#c6a87c] transition-colors duration-500" href="#partners">Partners</a>
<a className="px-5 py-2.5 border border-[#c6a87c]/40 rounded-sm text-[10px] uppercase tracking-widest text-[#c6a87c] hover:bg-[#c6a87c]/10 hover:border-[#c6a87c] transition-all" href="#contact">
                Enquire
            </a>
</div>

<div className="md:hidden pointer-events-auto text-[#c6a87c]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
</nav>

<header className="min-h-screen flex flex-col relative items-center justify-center px-6 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Performer addressing theatre" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-[3s] scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
</div>
<div className="relative z-10 text-center max-w-6xl space-y-8 mt-20">
<div className="reveal-hidden" style={{transitionDelay: '300ms'}}>
<div className="flex items-center justify-center gap-3 text-[#c6a87c] opacity-90">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
<p className="text-xs uppercase tracking-[0.4em] font-medium">
                        Live Entertainment • Production • Comedy
                    </p>
</div>
</div>
<h1 className="reveal-hidden font-ancient text-6xl md:text-9xl tracking-tight text-slate-100 font-bold leading-none drop-shadow-2xl" style={{transitionDelay: '600ms'}}>
                THE SHOW<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6a87c] via-[#eaddcf] to-[#c6a87c] opacity-90">COMPANY</span>
</h1>
<div className="reveal-hidden" style={{transitionDelay: '900ms'}}>
<p className="font-cinematic text-lg md:text-2xl text-slate-300 italic font-light max-w-2xl mx-auto leading-relaxed">
                    Curating unforgettable comedy and live experiences that connect audiences and celebrate creativity.
                </p>
</div>
<div className="reveal-hidden pt-8" style={{transitionDelay: '1100ms'}}>
<a className="group inline-flex items-center gap-4 text-xs uppercase tracking-widest text-slate-400 hover:text-[#c6a87c] transition-colors" href="#contact">
<span className="border-b border-transparent group-hover:border-[#c6a87c] transition-all pb-1">Book an Artist</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto relative" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
<div className="hidden md:block md:col-span-1 h-full relative">
<div className="absolute left-0 top-0 bottom-0 w-px magic-line" id="about-line"></div>
</div>
<div className="md:col-span-11 space-y-12">
<div className="reveal-hidden">
<span className="text-xs text-[#c6a87c] uppercase tracking-[0.2em] opacity-80">
                        Who We Are
                    </span>
<h2 className="mt-6 font-cinematic text-4xl md:text-5xl text-slate-200 tracking-tight leading-snug">
                        Great laughter brings<br/>
<span className="text-slate-600">people together.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12 reveal-hidden text-slate-400 font-light leading-loose text-sm md:text-base">
<p>
                        At The Show Company, we believe great laughter and live entertainment bring people together like nothing else. Specialising in stand-up comedy, we curate and deliver unforgettable comedy shows across the country, featuring both emerging talent and established performers.
                    </p>
<p>
                        Beyond comedy, we also design vibrant live experiences at colleges, universities, and cultural venues — from energetic music gigs to engaging campus events. Our mission is simple: to create high-quality, memorable entertainment that connects audiences, celebrates creativity, and leaves every crowd smiling long after the curtains close.
                    </p>
</div>

<div className="pt-8 flex flex-wrap gap-6 reveal-hidden">
<div className="flex items-center gap-2 opacity-50 text-xs uppercase tracking-widest">
<iconify-icon className="text-[#c6a87c]" icon="solar:bolt-linear"></iconify-icon> Expanding into Advertising
                    </div>
<div className="flex items-center gap-2 opacity-50 text-xs uppercase tracking-widest">
<iconify-icon className="text-[#c6a87c]" icon="solar:handshake-linear"></iconify-icon> Brand Collaborations
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#08080a] relative overflow-hidden border-t border-white/5" id="shows">
<div className="px-6 md:px-12 max-w-screen-xl mx-auto">
<div className="mb-16 reveal-hidden text-center">
<span className="text-xs text-[#c6a87c] uppercase tracking-[0.2em]">Our Expertise</span>
<h3 className="font-cinematic text-3xl md:text-4xl text-slate-200 mt-4">Production Types</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-sm bg-[#050505] border border-white/5 p-10 h-96 flex flex-col justify-end reveal-hidden cursor-none">
<img alt="Concert Crowd" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-[#c6a87c]">
<iconify-icon icon="solar:diploma-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest">Campus Events</span>
</div>
<h4 className="font-cinematic text-3xl text-white mb-4">College Shows</h4>
<p className="text-sm text-slate-400 font-light mb-6 line-clamp-2">
                            Energetic music gigs and engaging campus events designed for the youth.
                        </p>
<div className="flex gap-3 text-[10px] uppercase tracking-wider text-white/70">
<span className="px-2 py-1 border border-white/10 bg-white/5">Graphic Era</span>
<span className="px-2 py-1 border border-white/10 bg-white/5">BITS</span>
<span className="px-2 py-1 border border-white/10 bg-white/5">+ More</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm bg-[#050505] border border-white/5 p-10 h-96 flex flex-col justify-end reveal-hidden cursor-none">
<img alt="Corporate Gala" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-[#c6a87c]">
<iconify-icon icon="solar:briefcase-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest">Professional</span>
</div>
<h4 className="font-cinematic text-3xl text-white mb-4">Corporate Shows</h4>
<p className="text-sm text-slate-400 font-light mb-6">
                            Tailored stand-up comedy and entertainment for galas, launches, and company retreats.
                        </p>
<div className="w-8 h-[1px] bg-[#c6a87c] group-hover:w-16 transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto space-y-32" id="events">
<div className="text-center reveal-hidden mb-16">
<h3 className="font-ancient text-4xl text-slate-200">Featured Events</h3>
</div>

<article className="group relative reveal-hidden">
<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-8 border-b border-white/5 pb-6">
<div>
<h3 className="font-cinematic text-3xl md:text-4xl text-slate-300 font-normal tracking-tight group-hover:text-[#c6a87c] transition-colors duration-700">
                        The Comedy Collective
                    </h3>
<p className="mt-2 text-xs text-slate-500 uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#c6a87c]"></span> National Tour
                    </p>
</div>
</div>
<div className="w-full aspect-[21/9] bg-[#0c0d10] overflow-hidden relative cursor-none rounded-sm">
<img alt="Comedy Mic" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1527236438218-d82077ae1f85?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
</article>

<article className="group relative reveal-hidden">
<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-8 border-b border-white/5 pb-6">
<div>
<h3 className="font-cinematic text-3xl md:text-4xl text-slate-300 font-normal tracking-tight group-hover:text-[#c6a87c] transition-colors duration-700">
                        Campus Beats '24
                    </h3>
<p className="mt-2 text-xs text-slate-500 uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#c6a87c]"></span> University Festival
                    </p>
</div>
</div>
<div className="w-full aspect-[21/9] bg-[#0c0d10] overflow-hidden relative cursor-none rounded-sm">
<img alt="Concert Lights" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-[1.5s] ease-out mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
</article>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505] relative" id="partners">
<div className="max-w-7xl mx-auto px-6 reveal-hidden">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
<div>
<p className="text-xs text-[#c6a87c] uppercase tracking-[0.3em] mb-2">Our Network</p>
<h3 className="font-cinematic text-3xl text-slate-200">Strategic Partners</h3>
</div>

<div className="glass-panel px-6 py-4 rounded-sm border border-[#c6a87c]/20 flex items-center gap-4">
<iconify-icon className="text-[#c6a87c] text-xl" icon="solar:music-note-slider-linear"></iconify-icon>
<div>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">Light &amp; Sound Partner</p>
<p className="text-slate-200 font-ancient tracking-wide">VIGOR MENTORS</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-b border-white/5 py-12">

<div className="flex items-center justify-center h-20 group hover:bg-white/5 transition-colors rounded-sm">
<span className="font-body font-bold text-slate-500 group-hover:text-slate-200 tracking-wider transition-colors">REAL HOST</span>
</div>
<div className="flex items-center justify-center h-20 group hover:bg-white/5 transition-colors rounded-sm">
<span className="font-body font-bold text-slate-500 group-hover:text-slate-200 tracking-wider transition-colors">DMF</span>
</div>
<div className="flex items-center justify-center h-20 group hover:bg-white/5 transition-colors rounded-sm">
<span className="font-body font-bold text-slate-500 group-hover:text-slate-200 tracking-wider transition-colors">PLAYGROUND</span>
</div>
<div className="flex items-center justify-center h-20 group hover:bg-white/5 transition-colors rounded-sm">
<span className="font-body font-bold text-slate-500 group-hover:text-slate-200 tracking-wider transition-colors">OML</span>
</div>
<div className="flex items-center justify-center h-20 group hover:bg-white/5 transition-colors rounded-sm">
<span className="font-body font-bold text-slate-500 group-hover:text-slate-200 tracking-wider transition-colors">ORIOLE</span>
</div>
<div className="flex items-center justify-center h-20 group hover:bg-white/5 transition-colors rounded-sm">
<span className="font-body font-bold text-slate-500 group-hover:text-slate-200 tracking-wider transition-colors">LVC</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto" id="team">
<div className="mb-16 text-center reveal-hidden">
<span className="text-xs text-[#c6a87c] uppercase tracking-[0.2em]">The Curators</span>
<h3 className="font-cinematic text-3xl md:text-4xl text-slate-200 mt-4">Meet Our Team</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 glass-panel rounded-sm reveal-hidden hover:border-[#c6a87c]/30 transition-all duration-500">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c6a87c]/20 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-[#c6a87c]" icon="solar:user-linear"></iconify-icon>
</div>
<h4 className="text-slate-200 font-cinematic text-xl">Director</h4>
<p className="text-[10px] text-[#c6a87c] uppercase tracking-widest mt-1">Production Head</p>
<div className="mt-4 pt-4 border-t border-white/5">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="solar:letter-linear"></iconify-icon>
</div>
</div>

<div className="group p-6 glass-panel rounded-sm reveal-hidden hover:border-[#c6a87c]/30 transition-all duration-500" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c6a87c]/20 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-[#c6a87c]" icon="solar:user-linear"></iconify-icon>
</div>
<h4 className="text-slate-200 font-cinematic text-xl">Creative Lead</h4>
<p className="text-[10px] text-[#c6a87c] uppercase tracking-widest mt-1">Design &amp; Concept</p>
<div className="mt-4 pt-4 border-t border-white/5">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="solar:letter-linear"></iconify-icon>
</div>
</div>

<div className="group p-6 glass-panel rounded-sm reveal-hidden hover:border-[#c6a87c]/30 transition-all duration-500" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c6a87c]/20 transition-colors">
<iconify-icon className="text-slate-400 group-hover:text-[#c6a87c]" icon="solar:user-linear"></iconify-icon>
</div>
<h4 className="text-slate-200 font-cinematic text-xl">Artist Manager</h4>
<p className="text-[10px] text-[#c6a87c] uppercase tracking-widest mt-1">Talent Relations</p>
<div className="mt-4 pt-4 border-t border-white/5">
<iconify-icon className="text-slate-500 hover:text-white cursor-pointer" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#08080a] border-t border-white/5">
<div className="max-w-screen-xl mx-auto px-6 md:px-12">
<h3 className="font-cinematic text-3xl text-slate-200 mb-12 text-center reveal-hidden">Audience Applause</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-[#050505] border border-white/5 rounded-sm relative reveal-hidden">
<iconify-icon className="text-[#c6a87c] text-2xl absolute top-6 right-6 opacity-30" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-400 text-sm font-light leading-loose mb-6">"The attention to detail was immaculate. The Show Company didn't just organize an event; they crafted a memory."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800"></div>
<div>
<p className="text-xs text-slate-300 font-medium">Rahul S.</p>
<p className="text-[10px] text-slate-600">Corporate Client</p>
</div>
</div>
</div>

<div className="p-8 bg-[#050505] border border-white/5 rounded-sm relative reveal-hidden" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-[#c6a87c] text-2xl absolute top-6 right-6 opacity-30" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-400 text-sm font-light leading-loose mb-6">"Best college fest we've had in years. The lineup was insane and the production quality was top tier."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800"></div>
<div>
<p className="text-xs text-slate-300 font-medium">Priya M.</p>
<p className="text-[10px] text-slate-600">Student Council, BITS</p>
</div>
</div>
</div>

<div className="p-8 bg-[#050505] border border-white/5 rounded-sm relative reveal-hidden" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-[#c6a87c] text-2xl absolute top-6 right-6 opacity-30" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-slate-400 text-sm font-light leading-loose mb-6">"Professional, punctual, and creatively brilliant. They handle the chaos so we can enjoy the show."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800"></div>
<div>
<p className="text-xs text-slate-300 font-medium">Ankit V.</p>
<p className="text-[10px] text-slate-600">Event Manager</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-screen-xl mx-auto border-t border-white/5" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

<div className="reveal-hidden space-y-8">
<div>
<h2 className="font-cinematic text-4xl md:text-5xl text-slate-200 mb-6">
                        Take the Stage
                    </h2>
<p className="text-slate-500 font-light leading-relaxed">
                        Are you an artist looking for management or booking? We are always looking for new talent to join our roster.
                    </p>
</div>
<div className="p-8 glass-panel border border-[#c6a87c]/20 rounded-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-[#c6a87c]/10 flex items-center justify-center text-[#c6a87c]">
<iconify-icon className="text-xl" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<h4 className="font-ancient text-xl text-slate-200">Artist Enquiry</h4>
</div>
<p className="text-xs text-slate-400 mb-6">Send your portfolio and showreel to our talent acquisition team.</p>
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c6a87c] hover:text-white transition-colors" href="mailto:talent@theshowcompany.com">
                        talent@theshowcompany.com <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="space-y-4 pt-8">
<p className="text-xs text-slate-600 uppercase tracking-widest">Connect Socially</p>
<div className="flex gap-6 text-slate-400">
<iconify-icon className="text-2xl hover:text-[#c6a87c] transition-colors cursor-pointer" icon="solar:camera-linear"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#c6a87c] transition-colors cursor-pointer" icon="solar:globus-linear"></iconify-icon>
<iconify-icon className="text-2xl hover:text-[#c6a87c] transition-colors cursor-pointer" icon="solar:letter-linear"></iconify-icon>
</div>
</div>
</div>

<div className="reveal-hidden glass-panel p-8 md:p-12 rounded-sm border border-white/5">
<h3 className="font-ancient text-2xl text-slate-200 mb-8">Customer Query</h3>
<form className="space-y-8" onsubmit="event.preventDefault();">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-slate-500">Name</label>
<input className="w-full border-b border-slate-700 py-2 text-slate-200 focus:border-[#c6a87c] transition-colors placeholder-slate-700" placeholder="Your full name" type="text"/>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-slate-500">Email</label>
<input className="w-full border-b border-slate-700 py-2 text-slate-200 focus:border-[#c6a87c] transition-colors placeholder-slate-700" placeholder="hello@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-slate-500">Subject</label>
<select className="w-full border-b border-slate-700 py-2 text-slate-400 focus:border-[#c6a87c] transition-colors bg-transparent">
<option className="bg-black">General Inquiry</option>
<option className="bg-black">Book a Show</option>
<option className="bg-black">Ticket Support</option>
<option className="bg-black">Partnership</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-slate-500">Message</label>
<textarea className="w-full border-b border-slate-700 py-2 text-slate-200 focus:border-[#c6a87c] transition-colors placeholder-slate-700 resize-none h-24" placeholder="How can we help you?"></textarea>
</div>
<button className="w-full py-4 bg-[#c6a87c]/10 border border-[#c6a87c]/30 text-[#c6a87c] text-xs uppercase tracking-[0.2em] hover:bg-[#c6a87c] hover:text-black transition-all duration-500" type="submit">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden bg-[#030303]">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#c6a87c]/10 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center justify-center text-center space-y-12 reveal-hidden">

<div className="flex flex-col items-center leading-none opacity-50 hover:opacity-100 transition-opacity">
<span className="font-ancient text-lg text-[#c6a87c] font-bold tracking-widest">THE</span>
<span className="font-ancient text-2xl text-slate-300 font-bold tracking-[0.2em]">SHOW</span>
<span className="font-ancient text-[10px] text-[#c6a87c] tracking-[0.5em] mt-1">COMPANY</span>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] text-slate-500 uppercase tracking-widest pt-8">
<a className="hover:text-[#c6a87c] transition-colors duration-500" href="#about">About</a>
<a className="hover:text-[#c6a87c] transition-colors duration-500" href="#shows">College Shows</a>
<a className="hover:text-[#c6a87c] transition-colors duration-500" href="#shows">Corporate Shows</a>
<a className="hover:text-[#c6a87c] transition-colors duration-500" href="#contact">Contact</a>
</div>
<p className="text-[10px] text-slate-800 uppercase tracking-widest mt-12">
                © 2025 The Show Company. All Rights Reserved.
            </p>
</div>
</footer>



    </>
  );
}
