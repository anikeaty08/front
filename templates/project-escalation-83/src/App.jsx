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



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });



        lucide.createIcons();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-10 mix-blend-screen saturate-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="947" style={{width: '100%', height: '100%'}} width="1422"></canvas></div></div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-900/10 via-[#0B1121]/50 to-[#050A14]"></div>

<div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]"></div>

<div className="absolute top-[10%] right-[20%] w-[1px] h-[300px] bg-gradient-to-b from-blue-400/0 via-blue-400/30 to-blue-400/0 transform rotate-45 opacity-20"></div>
<div className="absolute top-[30%] right-[30%] w-[1px] h-[150px] bg-gradient-to-b from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 transform rotate-45 opacity-30"></div>
<div className="absolute top-[5%] right-[10%] w-[2px] h-[400px] bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 transform rotate-45 opacity-20"></div>
<div className="absolute bottom-[20%] left-[5%] w-[1px] h-[500px] bg-gradient-to-b from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 transform rotate-45 opacity-20"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050A14]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="grid grid-cols-2 gap-1">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-sm"></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-sm"></div>
</div>
<span className="text-lg font-medium tracking-tight text-white font-sans" style={{}}>Project Escalation</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-blue-400 transition-colors font-sans" href="#manifesto" style={{}}>Philosophy</a>
<a className="hover:text-blue-400 transition-colors font-sans" href="#services" style={{}}>Services</a>
<a className="hover:text-blue-400 transition-colors font-sans" href="#comparison" style={{}}>Approach</a>
<a className="hover:text-blue-400 transition-colors font-sans" href="#pricing" style={{}}>Engage</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-all hover:border-white/20" href="#contact">
<span className="font-sans" style={{}}>Client Login</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-slate-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="md:pt-48 md:pb-24 z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-widest text-blue-300 font-sans" style={{}}>Pre-Legal Dispute Resolution</span>
</div>
<h1 className="text-5xl md:text-7xl text-white tracking-tight leading-[1.1] mb-8 font-newsreader font-light" style={{}}>
                Resolve disputes before <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400 font-newsreader font-light" style={{}}>attorneys take control.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 font-newsreader font-light">
                We take over hostile client situations, bring structure to chaos, and guide disputes toward resolution — protecting your reputation and your margin.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 font-sans" href="#contact" style={{}}>
                    Request Escalation Review
                    <svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 font-sans" href="#manifesto" style={{}}>
                    Read Our Manifesto
                </a>
</div>

<div className="pt-10 border-t border-white/5">
<p className="text-sm text-slate-500 font-medium mb-8 font-sans" style={{}}>Trusted by general contractors &amp; specialty firms handling complex infrastructure</p>

<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100 mb-12">
<span className="text-xl font-bold tracking-tighter text-white font-sans" style={{}}>APEX<span className="font-light text-slate-300 font-sans" style={{}}>CIVIL</span></span>
<span className="text-lg font-semibold tracking-[0.2em] text-white font-sans" style={{}}>MERIDIAN</span>
<span className="text-xl font-black italic tracking-tight text-white font-sans" style={{}}>VANGUARD</span>
<span className="text-lg font-medium tracking-tight text-white flex items-center gap-2 font-sans" style={{}}>
<span className="w-2 h-2 bg-blue-500 rounded-sm"></span>STRATA
                    </span>
<span className="text-xl font-serif font-bold text-white tracking-tight font-sans" style={{}}>HORIZON</span>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/5 pt-8">
<div className="text-center group">
<div className="text-3xl text-white mb-1 group-hover:text-blue-400 transition-colors font-newsreader font-light">$500M+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-widest font-sans" style={{}}>Dispute Value Managed</div>
</div>
<div className="text-center group">
<div className="text-3xl text-white mb-1 group-hover:text-blue-400 transition-colors font-newsreader font-light">94%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-widest font-sans" style={{}}>Pre-Legal Resolution</div>
</div>
<div className="text-center group">
<div className="text-3xl text-white mb-1 group-hover:text-blue-400 transition-colors font-newsreader font-light">14 Days</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-widest font-sans" style={{}}>Avg. Response Time</div>
</div>
<div className="text-center group">
<div className="text-3xl text-white mb-1 group-hover:text-blue-400 transition-colors font-newsreader font-light">Zero</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-widest font-sans" style={{}}>Litigation Required</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#080d1a]" id="manifesto">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="space-y-8">
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-newsreader font-light" style={{}}>
                        Most contractors don’t fail because of bad work — they fail because of bad conflict.
                    </h2>
<div className="space-y-6 text-lg text-slate-400 leading-relaxed">
<p className="font-sans" style={{}}>
                            In today’s economy, disputes move faster than ever. Payments get delayed. Clients get emotional. Threats escalate. Reputations are put at risk.
                        </p>
<p className="pl-4 border-l-2 border-blue-500/50 text-slate-300 italic font-sans" style={{}}>
                            And once lawyers enter the picture, time, money, and control are lost.
                        </p>
<p className="font-sans" style={{}}>
                            We exist to stop that before it happens. We take over hostile client situations, bring structure to chaos, and guide disputes toward resolution — before they become legal or financial disasters.
                        </p>
<p className="text-white font-medium font-sans" style={{}}>
                            We don’t replace attorneys or arbitration. 
                            We make sure you don’t need them.
                        </p>
</div>
</div>

<div className="relative p-8 md:p-12 rounded-2xl bg-[#0B1221] border border-white/5 shadow-2xl">

<div className="absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent blur-xl"></div>
<h3 className="text-2xl text-white mb-6 flex items-center gap-3 font-newsreader font-light">
<svg className="lucide lucide-activity w-6 h-6 text-blue-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                        The Industry Has Changed
                    </h3>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
<div>
<h4 className="text-lg text-slate-200 font-medium font-sans" style={{}}>Projects are larger.</h4>
<p className="text-base text-slate-500 mt-1 font-sans" style={{}}>Scale brings complexity and higher stakes.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
<div>
<h4 className="text-lg text-slate-200 font-medium font-sans" style={{}}>Timelines are tighter.</h4>
<p className="text-base text-slate-500 mt-1 font-sans" style={{}}>There is no margin for emotional delay.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
<div>
<h4 className="text-lg text-slate-200 font-medium font-sans" style={{}}>Inefficiency is fatal.</h4>
<p className="text-base text-slate-500 mt-1 font-sans" style={{}}>Clients are demanding and tolerance is gone.</p>
</div>
</li>
</ul>
<div className="mt-10 pt-8 border-t border-white/5">
<p className="text-lg font-medium text-blue-200 font-sans" style={{}}>
                            Handle conflict professionally — or watch it destroy margins, cash flow, and reputation.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-[#050A14]" id="comparison">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl text-white tracking-tight mb-6 font-newsreader font-light">Built Different by Design</h2>
<p className="text-xl text-slate-400 max-w-2xl mx-auto font-sans" style={{}}>
                    Traditional ADR companies like AAA or JAMS operate after disputes become legal. We operate before that point.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="p-8 rounded-2xl border border-white/5 bg-slate-900/30 text-slate-500">
<div className="flex items-center gap-3 mb-8">
<svg className="lucide lucide-scale w-6 h-6" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
<h3 className="text-xl font-medium text-slate-400 font-sans" style={{}}>Traditional ADR / Legal</h3>
</div>
<ul className="space-y-4 font-light text-lg">
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-900/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Handle formal cases
                        </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-900/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Strictly Neutral
                        </li>
<li className="flex items-center gap-3 font-sans" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-900/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            Procedural &amp; Slow
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-900/10 text-slate-300 shadow-[0_0_50px_-20px_rgba(37,99,235,0.15)] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
<div className="flex items-center gap-3 mb-8">
<svg className="lucide lucide-shield w-6 h-6 text-blue-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<h3 className="text-xl font-medium text-white font-sans" style={{}}>Project Escalation Management</h3>
</div>
<ul className="space-y-4 text-lg">
<li className="flex items-center gap-3 text-white font-sans" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Handle live situations
                        </li>
<li className="flex items-center gap-3 text-white font-sans" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Contractor-aligned
                        </li>
<li className="flex items-center gap-3 text-white font-sans" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Operational &amp; Fast
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-y border-white/5 bg-[#080d1a]" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
<svg className="lucide lucide-message-square-warning w-6 h-6 text-blue-400" data-lucide="message-square-warning" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M12 15h.01"></path><path d="M12 7v4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white font-sans" style={{}}>Communication Takeover</h3>
<p className="text-base text-slate-400 leading-relaxed font-sans" style={{}}>
                        We step in between you and angry clients, filtering the noise and professionally managing every interaction.
                    </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 text-indigo-400" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-lg font-medium text-white font-sans" style={{}}>De-escalation Strategy</h3>
<p className="text-base text-slate-400 leading-relaxed font-sans" style={{}}>
                        Tactical moves to lower the temperature, remove emotion, and focus on contractual facts.
                    </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
<svg className="lucide lucide-wallet w-6 h-6 text-cyan-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white font-sans" style={{}}>Payment &amp; Exit</h3>
<p className="text-base text-slate-400 leading-relaxed font-sans" style={{}}>
                        We push disputes toward payment release, scope clarity, or a controlled, documented exit.
                    </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-slate-700/30 flex items-center justify-center border border-slate-600/30 group-hover:bg-slate-700/50 transition-colors">
<svg className="lucide lucide-file-check w-6 h-6 text-slate-300" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white font-sans" style={{}}>Defensive Documentation</h3>
<p className="text-base text-slate-400 leading-relaxed font-sans" style={{}}>
                        Protecting against chargebacks and lawsuits with pristine paper trails if legal action becomes necessary.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-white tracking-tight text-center mb-16 font-newsreader font-light">Engagement Structures</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-blue-500/30 hover:to-blue-600/10 transition-all duration-500">
<div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative h-full bg-[#0B1121] rounded-xl p-8 lg:p-10 flex flex-col">
<div className="mb-6">
<span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-sans" style={{}}>For Active Crises</span>
<h3 className="text-2xl text-white mt-2 font-newsreader font-light">Project Escalation Takeover</h3>
<p className="text-lg text-slate-400 mt-4 font-sans" style={{}}>A flat-fee engagement to resolve a single, live dispute quickly.</p>
</div>
<div className="w-full h-px bg-white/10 my-6"></div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-slate-300 font-sans" style={{}}>
<svg className="lucide lucide-arrow-right-circle w-5 h-5 text-blue-500" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
                                Immediate communication takeover
                            </li>
<li className="flex items-center gap-3 text-slate-300 font-sans" style={{}}>
<svg className="lucide lucide-arrow-right-circle w-5 h-5 text-blue-500" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
                                De-escalation strategy execution
                            </li>
<li className="flex items-center gap-3 text-slate-300 font-sans" style={{}}>
<svg className="lucide lucide-arrow-right-circle w-5 h-5 text-blue-500" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
                                Payment &amp; scope negotiation
                            </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors font-sans" href="#contact" style={{}}>
                            Initialize Takeover
                        </a>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-blue-500/20 to-indigo-500/10">
<div className="absolute inset-0 bg-indigo-500/10 blur-xl opacity-20"></div>
<div className="relative h-full bg-[#0B1221] rounded-xl p-8 lg:p-10 flex flex-col">
<div className="mb-6">
<span className="text-xs font-bold uppercase tracking-widest text-indigo-400 font-sans" style={{}}>For Corporate Protection</span>
<h3 className="text-2xl text-white mt-2 font-newsreader font-light">Ongoing Risk Retainer</h3>
<p className="text-lg text-slate-400 mt-4 font-sans" style={{}}>Monthly protection for firms that want disputes handled before they explode.</p>
</div>
<div className="w-full h-px bg-white/10 my-6"></div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-center gap-3 text-slate-300 font-sans" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-indigo-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Priority escalation handling
                            </li>
<li className="flex items-center gap-3 text-slate-300 font-sans" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-indigo-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Continuous risk management
                            </li>
<li className="flex items-center gap-3 text-slate-300 font-sans" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-indigo-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Dispute prevention consulting
                            </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors shadow-lg shadow-indigo-500/20 font-sans" href="#contact" style={{}}>
                            Secure Retainer
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 overflow-hidden" id="contact">

<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative">
<h2 className="text-4xl md:text-6xl text-white tracking-tight mb-8 font-newsreader font-light" style={{}}>
                Stop the bleeding. <br/>
<span className="text-slate-500 font-newsreader font-light" style={{}}>Regain control today.</span>
</h2>
<p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto font-sans" style={{}}>
                Confidential. Fast. Contractor-aligned. <br/>
                Let us assess your situation before it reaches the courtroom.
            </p>
<form className="max-w-md mx-auto space-y-4 mb-8">
<div className="flex flex-col gap-4">
<input className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all" placeholder="Work Email Address" type="email"/>
<button className="w-full px-8 py-4 bg-white text-[#050A14] hover:bg-blue-50 rounded-lg font-medium transition-all flex items-center justify-center gap-2 font-sans" style={{}} type="submit">
                        Request Escalation Review
                        <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
<p className="text-sm text-slate-600 font-sans" style={{}}>
                Your inquiry is strictly confidential. We are not a law firm.
            </p>
</div>
</section>

<footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-[#020408] text-sm text-slate-500">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
<span className="font-medium text-slate-400 font-sans" style={{}}>Project Escalation Management</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Privacy</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>Terms</a>
<a className="hover:text-white transition-colors font-sans" href="#" style={{}}>LinkedIn</a>
</div>
<p className="font-sans" style={{}}>© 2024 Project Escalation Management.</p>
</div>
</footer>


    </>
  );
}
