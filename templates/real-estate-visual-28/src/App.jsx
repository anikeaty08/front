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



        document.addEventListener("DOMContentLoaded", function() {
            
            // 1. Intersection Observer for Scroll Reveal
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // 2. Global Mouse Tracking for Hero Spotlight
            document.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;
                document.documentElement.style.setProperty('--global-mouse-x', `${x}%`);
                document.documentElement.style.setProperty('--global-mouse-y', `${y}%`);
            });

            // 3. Mouse-Tracking Glow on Cards
            const handleOnMouseMove = e => {
                const { currentTarget: target } = e;
                const rect = target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                target.style.setProperty('--mouse-x', `${x}px`);
                target.style.setProperty('--mouse-y', `${y}px`);
            };

            for(const card of document.querySelectorAll('.interactive-card')) {
                card.onmousemove = e => handleOnMouseMove(e);
            }

            // 4. Smooth 3D Tilt Effect
            document.querySelectorAll('.tilt-element').forEach(el => {
                el.addEventListener('mousemove', e => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Multiplier controls the intensity of the tilt
                    const multiplier = 12;
                    const xRotate = multiplier * ((y - rect.height / 2) / rect.height);
                    const yRotate = -multiplier * ((x - rect.width / 2) / rect.width);
                    
                    el.style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg) scale3d(1.02, 1.02, 1.02)`;
                    el.style.transition = 'none'; // Instant tracking while moving
                });

                el.addEventListener('mouseleave', () => {
                    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                    el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'; // Smooth reset
                });

                el.addEventListener('mouseenter', () => {
                    el.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.8, 0.25, 1)'; // Quick catch
                });
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 animate-fade-in-up">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 tilt-element cursor-pointer" style={{transition: 'transform 0.3s ease'}}>
<iconify-icon className="text-red-600 text-2xl" icon="solar:play-circle-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg uppercase text-white">Davideo</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Systems</a>
<a className="hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors" href="#pricing">Tiers</a>
</div>
<div>
<a className="hidden md:inline-flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-medium px-4 py-2 transition-all rounded-none" href="#contact">
                    Client Portal
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 bg-grid interactive-grid pointer-events-none z-0"></div>

<div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-black to-black pointer-events-none z-0"></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
<div className="mb-8 p-4 rounded-none border border-red-600/20 bg-red-600/5 backdrop-blur-sm flex items-center justify-center animate-fade-in-up tilt-element">
<iconify-icon className="text-red-600 text-5xl md:text-6xl drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]" icon="solar:play-linear"></iconify-icon>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6 animate-fade-in-up delay-100">
                Visual Systems that <br className="hidden md:block"/>
<span className="text-gradient">Sell Space.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-10 font-normal leading-relaxed animate-fade-in-up delay-200">
                From Cinematic Detail to 3D Reality. Integrating 10-bit Cinematography, LiDAR Scanning, and Interactive Virtual Tours for premium real estate and commercial spaces.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
<a className="tilt-element bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-8 py-4 flex items-center justify-center gap-2 transition-all rounded-none border border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)]" href="#analyze">
                    Analyze My Project
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="tilt-element bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-8 py-4 flex items-center justify-center transition-all rounded-none" href="#services">
                    Explore Systems
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-12 reveal">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Capture Architecture</h2>
<p className="text-sm text-neutral-400">Precision systems for every spatial dimension.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(18rem,auto)]">

<div className="interactive-card md:col-span-2 glass-panel border border-white/5 p-8 flex flex-col justify-between group hover:border-red-600/30 transition-colors duration-500 rounded-none relative overflow-hidden reveal">
<div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
<div className="relative z-10 flex justify-between items-start mb-12 pointer-events-none">
<div className="p-3 bg-black border border-white/10 rounded-none inline-flex group-hover:border-red-600/50 transition-colors duration-500">
<iconify-icon className="text-2xl text-red-500" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-500 tracking-tight uppercase">SYS.01</span>
</div>
<div className="relative z-10 mt-auto pointer-events-none">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">10-Bit Cinematic Video</h3>
<p className="text-sm text-neutral-400 max-w-md group-hover:text-neutral-300 transition-colors duration-500">
                            Industry-standard visual storytelling utilizing Lumix GH6 and DJI Drone platforms. We deliver high-dynamic-range footage that emphasizes architectural intent and atmosphere.
                        </p>
</div>
</div>

<div className="interactive-card md:col-span-1 glass-panel border border-white/5 p-8 flex flex-col justify-between group hover:border-orange-500/30 transition-colors duration-500 rounded-none reveal" style={{transitionDelay: '100ms'}}>
<div className="relative z-10 flex justify-between items-start mb-8 pointer-events-none">
<div className="p-3 bg-black border border-white/10 rounded-none inline-flex group-hover:border-orange-500/50 transition-colors duration-500">
<iconify-icon className="text-2xl text-orange-500" icon="solar:radar-linear"></iconify-icon>
</div>
<span className="text-xs font-mono text-neutral-500 tracking-tight uppercase">SYS.02</span>
</div>
<div className="relative z-10 mt-auto pointer-events-none">
<h3 className="text-lg font-semibold tracking-tight mb-2">3D Reality Capture</h3>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500">
                            Sub-millimeter accurate spatial scanning via LiDAR and Polycam processing for precise digital twins.
                        </p>
</div>
</div>

<div className="interactive-card md:col-span-3 glass-panel border border-white/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between group hover:border-white/20 transition-colors duration-500 rounded-none gap-8 reveal" style={{transitionDelay: '200ms'}}>
<div className="relative z-10 flex-1 pointer-events-none">
<div className="p-3 bg-black border border-white/10 rounded-none inline-flex mb-6 group-hover:border-white/30 transition-colors duration-500">
<iconify-icon className="text-2xl text-white" icon="solar:panorama-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">360° Interactive Tours</h3>
<p className="text-sm text-neutral-400 max-w-2xl group-hover:text-neutral-300 transition-colors duration-500">
                            Immersive, user-driven exploration powered by Insta360 X5 sensors and custom Kuula environments. Allow prospects to navigate properties globally with zero latency.
                        </p>
</div>
<div className="relative z-10 w-full md:w-auto flex items-center justify-center shrink-0 pointer-events-none">

<div className="w-full md:w-64 h-32 bg-black border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-16 h-16 rounded-full border border-neutral-700 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500">
<div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
</div>
<div className="absolute left-0 w-full border-t border-neutral-800/50"></div>
<div className="absolute top-0 h-full border-l border-neutral-800/50"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 border-t border-white/5 relative overflow-hidden" id="workflow">
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Production Telemetry</h2>
<p className="text-sm text-neutral-400">Our systematic approach to visual data acquisition.</p>
</div>
<div className="text-xs font-mono text-neutral-500 uppercase tracking-widest border border-white/10 px-3 py-1 bg-black">
                    Protocol v2.0
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 relative">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 z-0 reveal delay-100"></div>

<div className="tilt-element relative z-10 flex flex-col items-center text-center reveal cursor-default">
<div className="w-20 h-20 bg-black border border-white/10 rounded-none flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,1)] group-hover:border-white/30 transition-all duration-300 relative">
<div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-2xl text-neutral-300 relative z-10" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="text-xs text-red-500 font-mono mb-2">PHASE 01</div>
<h4 className="text-base font-semibold tracking-tight mb-3">Spatial Analysis</h4>
<p className="text-sm text-neutral-400 pointer-events-none">Evaluating lighting metrics, flight paths, and focal points to engineer the optimal capture strategy.</p>
</div>

<div className="tilt-element relative z-10 flex flex-col items-center text-center reveal cursor-default" style={{transitionDelay: '150ms'}}>
<div className="w-20 h-20 bg-black border border-red-600/30 rounded-none flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,0,0,0.1)] group-hover:border-red-600/60 transition-all duration-300 relative">
<div className="absolute inset-0 bg-red-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-2xl text-red-500 relative z-10" icon="solar:camera-linear"></iconify-icon>
</div>
<div className="text-xs text-red-500 font-mono mb-2">PHASE 02</div>
<h4 className="text-base font-semibold tracking-tight mb-3">Data Acquisition</h4>
<p className="text-sm text-neutral-400 pointer-events-none">Deploying drone, ground, and LiDAR assets to execute the capture sequence with absolute precision.</p>
</div>

<div className="tilt-element relative z-10 flex flex-col items-center text-center reveal cursor-default" style={{transitionDelay: '300ms'}}>
<div className="w-20 h-20 bg-black border border-white/10 rounded-none flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,0,0,1)] group-hover:border-white/30 transition-all duration-300 relative">
<div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
<iconify-icon className="text-2xl text-neutral-300 relative z-10" icon="solar:monitor-camera-linear"></iconify-icon>
</div>
<div className="text-xs text-red-500 font-mono mb-2">PHASE 03</div>
<h4 className="text-base font-semibold tracking-tight mb-3">DaVinci Processing</h4>
<p className="text-sm text-neutral-400 pointer-events-none">Advanced color grading, spatial stitching, and output formatting for high-fidelity delivery.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden" id="pricing">

<div className="absolute top-0 right-1/4 w-96 h-96 bg-red-900/10 blur-[100px] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Deployment Tiers</h2>
<p className="text-sm text-neutral-400">Transparent structuring for premium visual assets.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="interactive-card glass-panel border border-white/5 p-8 flex flex-col rounded-none hover:border-white/20 transition-all duration-300 reveal">
<div className="relative z-10 h-full flex flex-col pointer-events-none">
<h3 className="text-lg font-semibold tracking-tight mb-1 text-neutral-300">Small Space</h3>
<p className="text-xs text-neutral-500 mb-6 pb-6 border-b border-white/10">Sub-2000 sq ft environments.</p>
<ul className="space-y-4 mb-8 flex-1 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                                Standard Ground Video
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                                Basic 360° Tour
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                                48hr Turnaround
                            </li>
</ul>
</div>
<button className="relative z-10 w-full py-3 text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors text-white rounded-none active:scale-[0.98]">Initialize</button>
</div>

<div className="interactive-card glow-red bg-black border border-red-600/50 p-8 flex flex-col rounded-none relative transform md:-translate-y-2 shadow-[0_10px_40px_-10px_rgba(255,0,0,0.15)] hover:border-red-500 transition-all duration-300 reveal" style={{transitionDelay: '150ms'}}>
<div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 z-20">Standard</div>
<div className="relative z-10 h-full flex flex-col pointer-events-none">
<h3 className="text-xl font-semibold tracking-tight mb-1 text-white">Estate Class</h3>
<p className="text-xs text-neutral-400 mb-6 pb-6 border-b border-white/10">Full-scale property documentation.</p>
<ul className="space-y-4 mb-8 flex-1 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon>
                                Cinematic Drone &amp; Ground
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon>
                                Custom Interactive Tour
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon>
                                DaVinci Color Grade
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:check-circle-linear"></iconify-icon>
                                Basic LiDAR Scan
                            </li>
</ul>
</div>
<button className="relative z-10 w-full py-3 text-sm font-medium bg-red-600 hover:bg-red-700 transition-colors text-white border border-red-500 rounded-none active:scale-[0.98]">Deploy Protocol</button>
</div>

<div className="interactive-card glass-panel border border-white/5 p-8 flex flex-col rounded-none hover:border-white/20 transition-all duration-300 reveal" style={{transitionDelay: '300ms'}}>
<div className="relative z-10 h-full flex flex-col pointer-events-none">
<h3 className="text-lg font-semibold tracking-tight mb-1 text-neutral-300">Commercial Resort</h3>
<p className="text-xs text-neutral-500 mb-6 pb-6 border-b border-white/10">Multi-acre / Hospitality scale.</p>
<ul className="space-y-4 mb-8 flex-1 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                                Multi-day Production
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                                Complete LiDAR Mapping
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                                Advanced FPV Drone
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                                Raw Asset Delivery
                            </li>
</ul>
</div>
<button className="relative z-10 w-full py-3 text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors text-white rounded-none active:scale-[0.98]">Contact Operations</button>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-b border-white/5 bg-black overflow-hidden flex flex-col items-center">
<p className="text-xs text-neutral-600 uppercase tracking-widest text-center mb-6 font-mono reveal">Hardware Integration</p>
<div className="w-full relative overflow-hidden flex reveal">

<div className="animate-marquee gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 cursor-default px-8 md:px-16">

<div className="flex items-center gap-2 text-sm font-medium text-white tracking-tight">
<iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear"></iconify-icon> LUMIX GH6
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-white tracking-tight">
<iconify-icon className="text-xl" icon="solar:plane-linear"></iconify-icon> DJI MINI 4 PRO
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-white tracking-tight">
<iconify-icon className="text-xl" icon="solar:scanner-linear"></iconify-icon> LiDAR CAPTURE
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-white tracking-tight">
<iconify-icon className="text-xl" icon="solar:videocamera-linear"></iconify-icon> INSTA360 X5
                </div>

<div className="flex items-center gap-2 text-sm font-medium text-white tracking-tight ml-8 md:ml-16">
<iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear"></iconify-icon> LUMIX GH6
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-white tracking-tight">
<iconify-icon className="text-xl" icon="solar:plane-linear"></iconify-icon> DJI MINI 4 PRO
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-white tracking-tight">
<iconify-icon className="text-xl" icon="solar:scanner-linear"></iconify-icon> LiDAR CAPTURE
                </div>
<div className="flex items-center gap-2 text-sm font-medium text-white tracking-tight">
<iconify-icon className="text-xl" icon="solar:videocamera-linear"></iconify-icon> INSTA360 X5
                </div>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-black text-center border-t border-neutral-900 reveal">
<div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
<div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-red-600 text-xl" icon="solar:play-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-base uppercase text-white">Davideo</span>
</div>
<p className="text-xs text-neutral-600 max-w-sm mb-6">
                Premium Visual Systems Studio.<br/> Precision engineered for modern spaces.
            </p>
<div className="flex gap-4 text-xs text-neutral-500 font-mono">
<a className="hover:text-white transition-colors" href="#">SYS_LOG</a>
<span>|</span>
<a className="hover:text-white transition-colors" href="#">SEC_PROTOCOL</a>
<span>|</span>
<a className="hover:text-white transition-colors" href="#">INIT_CONTACT</a>
</div>
<p className="text-[10px] text-neutral-700 mt-12 uppercase tracking-widest">© 2026 DAVIDEO SYSTEMS</p>
</div>
</footer>



    </>
  );
}
