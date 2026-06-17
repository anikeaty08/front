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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


</div></div>
<div className="fixed inset-0 noise-bg z-0 opacity-40"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B4A] to-[#FFB627] flex items-center justify-center text-black font-bold">G</div>
<span className="text-lg font-semibold tracking-tight text-white">GTMVERSE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="hover:text-white transition-colors" href="#solution">Ownership</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Engagement</a>
</div>
<button className="hidden sm:flex bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2 rounded-full text-xs font-medium transition-all backdrop-blur-md items-center gap-2 group">
                Check Your Growth Health
                <i className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FF6B4A]" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B4A] opacity-10 blur-[120px] rounded-full pointer-events-none animate-glow"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB627] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B4A]/20 bg-[#FF6B4A]/5 text-[#FF6B4A] text-xs font-medium mb-10 animate-float">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse"></span>
                SYSTEMATIZING GROWTH
            </div>

<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8 text-white">
                GO-TO-MARKET,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B4A] via-[#FFB627] to-[#FF6B4A] bg-[200%_auto] animate-gradient">OWNED.</span> NOT OUTSOURCED.
            </h1>
<h2 className="text-xl md:text-2xl font-light text-gray-400 mb-8 tracking-wide">Growth needs an owner.</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                At GTMVerse, Go-To-Market is owned, not outsourced. Your extended marketing team that turns fragmented efforts into predictable growth by running GTM as a single, accountable system.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-[#FF6B4A] hover:bg-[#ff5530] text-black font-semibold rounded-lg transition-all shadow-[0_0_30px_-10px_rgba(255,107,74,0.5)] flex items-center justify-center gap-2">
                    Enter the GTMVerse
                    <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/5 text-white border border-white/10 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                    Check Your Growth Health
                </button>
</div>
</div>

<div className="mt-24 w-full border-y border-white/5 bg-black/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="px-4">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">30+ <span className="text-[#3ACE67] text-2xl">Years</span></div>
<p className="text-sm text-gray-500 uppercase tracking-widest font-medium">of GTM Ownership</p>
</div>
<div className="px-4 pt-8 md:pt-0">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">20+ <span className="text-[#FFB627] text-2xl">Products</span></div>
<p className="text-sm text-gray-500 uppercase tracking-widest font-medium">SaaS, Ecomm, &amp; D2C Owned</p>
</div>
<div className="px-4 pt-8 md:pt-0">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">$100M <span className="text-[#FF6B4A] text-2xl">Rev</span></div>
<p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Revenue Influenced</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#08090b] border-b border-white/5 relative z-10">
<div className="text-center mb-10">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Trusted by SaaS, AI-Native, and Growth-Stage Teams</p>
</div>
<div className="relative w-full overflow-hidden mask-gradient-x">
<div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full items-center">

<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Zoca</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Snaptrude</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Zomentum</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Summit-holdings</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Bicycle</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">PagerGPT</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">ZingHR</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Mozen</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">GridApps</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Maintainsoft</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Prodigyteks</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">CoolTechGroup</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">NOCDOC</span>

<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Zoca</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Snaptrude</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Zomentum</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Summit-holdings</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Bicycle</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">PagerGPT</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">ZingHR</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Mozen</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">GridApps</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Maintainsoft</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">Prodigyteks</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">CoolTechGroup</span>
<span className="text-xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">NOCDOC</span>
</div>
</div>
</section>

<section className="py-32 relative bg-[#050505]" id="problem">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/2">
<div className="sticky top-32">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-tight">
                            Everyone is working,<br/>
<span className="text-gray-600">but growth isn’t.</span>
</h2>
<div className="p-8 rounded-2xl glass-panel border-l-4 border-l-[#FF6B4A]">
<p className="text-xl text-white font-medium mb-2">Core Insight</p>
<p className="text-gray-400 text-lg leading-relaxed">The problem isn’t effort. It’s ownership.</p>
</div>
<p className="mt-8 text-gray-500 italic">When growth has no owner, GTM becomes a collection of activities, not a system.</p>
</div>
</div>
<div className="md:w-1/2 grid gap-6">

<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#FF6B4A]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF6B4A]/10 transition-colors">
<i className="w-6 h-6 text-gray-500 group-hover:text-[#FF6B4A] transition-colors" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold mb-3">No Momentum</h3>
<p className="text-gray-400">Teams are busy, but momentum is missing.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#FF6B4A]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF6B4A]/10 transition-colors">
<i className="w-6 h-6 text-gray-500 group-hover:text-[#FF6B4A] transition-colors" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Silos</h3>
<p className="text-gray-400">Channels run in isolation.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#FF6B4A]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF6B4A]/10 transition-colors">
<i className="w-6 h-6 text-gray-500 group-hover:text-[#FF6B4A] transition-colors" data-lucide="trending-down"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Spikes &amp; Drops</h3>
<p className="text-gray-400">Pipeline spikes and drops unexpectedly.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#FF6B4A]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF6B4A]/10 transition-colors">
<i className="w-6 h-6 text-gray-500 group-hover:text-[#FF6B4A] transition-colors" data-lucide="help-circle"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Reactive Forecasting</h3>
<p className="text-gray-400">Forecasts feel reactive instead of reliable.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#08090b] relative overflow-hidden" id="solution">

<div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#3ACE67] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFB627] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-[#FFB627] font-semibold tracking-wider text-xs uppercase mb-4 block">How GTMVerse Fixes It</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Where Growth Breaks,<br/>And What Ownership Fixes</h2>
<p className="text-xl text-gray-400 font-light">The most common growth failure patterns we see, and how GTMVerse steps in to own and resolve them.</p>
</div>

<div className="grid grid-cols-1 gap-12">

<div className="glass-panel p-8 md:p-12 rounded-3xl border-t border-t-[#3ACE67]/50 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-[#3ACE67]" data-lucide="bar-chart-2"></i>
</div>
<div className="flex flex-col md:flex-row gap-12 relative z-10">
<div className="md:w-1/3">
<h3 className="text-2xl font-semibold text-white mb-2">Unpredictable Revenue</h3>
<p className="text-[#3ACE67] text-sm font-medium mb-6 uppercase tracking-wider">The Pattern</p>
<p className="text-gray-400 leading-relaxed">Teams stay busy, but momentum never compounds. Channels operate in isolation. Pipeline spikes, then drops.</p>
</div>
<div className="md:w-1/3 border-l border-white/10 pl-0 md:pl-12 pt-8 md:pt-0">
<p className="text-white text-sm font-medium mb-6 uppercase tracking-wider flex items-center gap-2">
<i className="w-4 h-4 text-[#3ACE67]" data-lucide="shield-check"></i> The Ownership Fix
                            </p>
<p className="text-gray-300 leading-relaxed">GTMVerse connects brand, demand, and GTM operations directly to revenue numbers using a systematic, outcome-first approach.</p>
</div>
<div className="md:w-1/3 bg-[#3ACE67]/10 rounded-2xl p-6 flex flex-col justify-center">
<p className="text-white font-semibold mb-4">The Outcome</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#3ACE67]" data-lucide="check"></i> Predictable pipeline</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#3ACE67]" data-lucide="check"></i> Clear attribution</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#3ACE67]" data-lucide="check"></i> Growth that compounds</li>
</ul>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-12 rounded-3xl border-t border-t-[#FF6B4A]/50 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-[#FF6B4A]" data-lucide="megaphone"></i>
</div>
<div className="flex flex-col md:flex-row gap-12 relative z-10">
<div className="md:w-1/3">
<h3 className="text-2xl font-semibold text-white mb-2">Disconnected Campaigns</h3>
<p className="text-[#FF6B4A] text-sm font-medium mb-6 uppercase tracking-wider">The Pattern</p>
<p className="text-gray-400 leading-relaxed">SEO, ads, content, and launches run independently. Each campaign works hard. None meet their full outcome potential.</p>
</div>
<div className="md:w-1/3 border-l border-white/10 pl-0 md:pl-12 pt-8 md:pt-0">
<p className="text-white text-sm font-medium mb-6 uppercase tracking-wider flex items-center gap-2">
<i className="w-4 h-4 text-[#FF6B4A]" data-lucide="shield-check"></i> The Ownership Fix
                            </p>
<p className="text-gray-300 leading-relaxed">GTMVerse operates campaigns as a unified demand engine, built by a shared narrative and guided by real intent signals.</p>
</div>
<div className="md:w-1/3 bg-[#FF6B4A]/10 rounded-2xl p-6 flex flex-col justify-center">
<p className="text-white font-semibold mb-4">The Outcome</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#FF6B4A]" data-lucide="check"></i> Connected execution</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#FF6B4A]" data-lucide="check"></i> Consistent messaging</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#FF6B4A]" data-lucide="check"></i> Outcome instead of noise</li>
</ul>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-12 rounded-3xl border-t border-t-[#FFB627]/50 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-[#FFB627]" data-lucide="mouse-pointer-2"></i>
</div>
<div className="flex flex-col md:flex-row gap-12 relative z-10">
<div className="md:w-1/3">
<h3 className="text-2xl font-semibold text-white mb-2">Traffic That Doesn’t Convert</h3>
<p className="text-[#FFB627] text-sm font-medium mb-6 uppercase tracking-wider">The Pattern</p>
<p className="text-gray-400 leading-relaxed">Intent, messaging, and buyer readiness are misaligned. Attention arrives, then leaks silently. Traffic ends up failing.</p>
</div>
<div className="md:w-1/3 border-l border-white/10 pl-0 md:pl-12 pt-8 md:pt-0">
<p className="text-white text-sm font-medium mb-6 uppercase tracking-wider flex items-center gap-2">
<i className="w-4 h-4 text-[#FFB627]" data-lucide="shield-check"></i> The Ownership Fix
                            </p>
<p className="text-gray-300 leading-relaxed">GTMVerse aligns narrative, funnel design, and sales enablement so traffic volume turns into genuine pipeline numbers.</p>
</div>
<div className="md:w-1/3 bg-[#FFB627]/10 rounded-2xl p-6 flex flex-col justify-center">
<p className="text-white font-semibold mb-4">The Outcome</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#FFB627]" data-lucide="check"></i> Higher demo attendance</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#FFB627]" data-lucide="check"></i> Better close rates</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><i className="w-4 h-4 text-[#FFB627]" data-lucide="check"></i> Lower CAC over time</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 text-white">How GTMVerse Owns Go-To-Market</h2>
<h3 className="text-xl text-[#FF6B4A] font-medium mb-6">The Human-Powered GTM System</h3>
<p className="text-gray-400 max-w-2xl font-light leading-relaxed">
                        We don’t sell services. We deploy operator-grade experts, each owning a critical layer of your Go-To-Market. Not consultants. Not disconnected vendors. Owners.
                    </p>
</div>
<div className="text-right hidden md:block">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm">
                       All coordinated. One owner. One outcome.
                   </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:border-[#FFB627]/30 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="bg-[#FFB627]/10 p-3 rounded-lg text-[#FFB627]">
<i className="w-6 h-6" data-lucide="compass"></i>
</div>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Discovery</span>
</div>
<h4 className="text-lg font-semibold text-white mb-1">Mathi &amp; Anurag</h4>
<p className="text-xs text-gray-500 mb-4">The Owners</p>
<p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Owns market clarity, ICP definition, and intent mapping.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-[#FF6B4A]/30 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="bg-[#FF6B4A]/10 p-3 rounded-lg text-[#FF6B4A]">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Narrative</span>
</div>
<h4 className="text-lg font-semibold text-white mb-1">Supraja &amp; Oviya</h4>
<p className="text-xs text-gray-500 mb-4">The Owners</p>
<p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Owns positioning, messaging, and how your company is understood.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-[#3ACE67]/30 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="bg-[#3ACE67]/10 p-3 rounded-lg text-[#3ACE67]">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Design</span>
</div>
<h4 className="text-lg font-semibold text-white mb-1">Jolen &amp; Shashak</h4>
<p className="text-xs text-gray-500 mb-4">The Owners</p>
<p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Owns visual systems, UX clarity, and how strategy is experienced.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-[#FF6B4A]/30 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="bg-[#FF6B4A]/10 p-3 rounded-lg text-[#FF6B4A]">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Demand</span>
</div>
<h4 className="text-lg font-semibold text-white mb-1">Rajesh &amp; Krithika</h4>
<p className="text-xs text-gray-500 mb-4">The Owners</p>
<p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Owns inbound demand across search, AI answers, content, and distribution.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-[#3ACE67]/30 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="bg-[#3ACE67]/10 p-3 rounded-lg text-[#3ACE67]">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Systems</span>
</div>
<h4 className="text-lg font-semibold text-white mb-1">Deepak &amp; Mathi</h4>
<p className="text-xs text-gray-500 mb-4">The Owners</p>
<p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Owns GTM workflows, intelligence, and scalability.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-[#FFB627]/30 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="bg-[#FFB627]/10 p-3 rounded-lg text-[#FFB627]">
<i className="w-6 h-6" data-lucide="coins"></i>
</div>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Revenue</span>
</div>
<h4 className="text-lg font-semibold text-white mb-1">Vignesh &amp; Swathi</h4>
<p className="text-xs text-gray-500 mb-4">The Owners</p>
<p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        Owns conversion, funnel performance, and sales enablement.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#08090b] border-y border-white/5" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Growth Multiplies When GTM Has an Owner</h2>
<p className="text-xl text-gray-400 font-light mb-8">No hacks. No one-off wins. These are the outcomes that follow when Go-To-Market is owned end-to-end.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#3ACE67]/10 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-[#3ACE67]" data-lucide="arrow-up-right"></i>
</div>
<div>
<h4 className="text-white font-semibold text-lg">3× growth</h4>
<p className="text-gray-500 text-sm">In qualified inbound leads</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#3ACE67]/10 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-[#3ACE67]" data-lucide="users"></i>
</div>
<div>
<h4 className="text-white font-semibold text-lg">40–70% improvement</h4>
<p className="text-gray-500 text-sm">In demo attendance</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#3ACE67]/10 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-[#3ACE67]" data-lucide="piggy-bank"></i>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Lower CAC</h4>
<p className="text-gray-500 text-sm">Through compounding inbound systems</p>
</div>
</div>
</div>
<p className="mt-10 text-xs text-gray-600 uppercase tracking-widest">Always measured conservatively. Always tied to revenue outcomes.</p>
</div>

<div className="grid gap-6">
<div className="bg-[#050505] p-8 rounded-2xl border border-white/10 relative">
<i className="w-8 h-8 text-[#FF6B4A]/20 absolute top-8 right-8" data-lucide="quote"></i>
<p className="text-gray-300 text-lg mb-6 leading-relaxed">"GTMVerse didn’t feel like an agency. It felt like someone finally owned our go-to-market. The clarity itself changed how we operated."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
<div>
<div className="text-white font-medium">Founder</div>
<div className="text-xs text-gray-500">SaaS Company</div>
</div>
</div>
</div>
<div className="bg-[#050505] p-8 rounded-2xl border border-white/10 relative ml-8">
<i className="w-8 h-8 text-[#FFB627]/20 absolute top-8 right-8" data-lucide="quote"></i>
<p className="text-gray-300 text-lg mb-6 leading-relaxed">"What stood out was how everything connected — messaging, demand, pipeline. Nothing felt random anymore."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
<div>
<div className="text-white font-medium">Head of Growth</div>
<div className="text-xs text-gray-500">AI-Native Tech</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Built for builders navigating complex growth.</h2>
<p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">GTMVerse works best with companies where scale introduces fragmentation, not simplicity.</p>
<div className="flex flex-wrap justify-center gap-4 mt-8">
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400">SaaS &amp; AI-first</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400">Service Scaling</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400">Complex D2C/B2C</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#FFB627] transition-all duration-500 group relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-[#FFB627] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="mb-8">
<span className="text-[#FFB627] text-xs font-bold uppercase tracking-widest">Tier 1</span>
<h3 className="text-3xl font-semibold text-white mt-2">Signal</h3>
<p className="text-gray-400 mt-2 text-sm">Clarity before acceleration</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-[#FFB627]" data-lucide="check"></i> Discovery Ownership
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-[#FFB627]" data-lucide="check"></i> Narrative Ownership
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#FF6B4A] transition-all duration-500 group relative overflow-hidden transform md:-translate-y-4">
<div className="absolute top-0 inset-x-0 h-1 bg-[#FF6B4A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="mb-8">
<span className="text-[#FF6B4A] text-xs font-bold uppercase tracking-widest">Tier 2</span>
<h3 className="text-3xl font-semibold text-white mt-2">Orbit</h3>
<p className="text-gray-400 mt-2 text-sm">Predictable inbound momentum</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-[#FF6B4A]" data-lucide="check"></i> Discovery &amp; Narrative
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-[#FF6B4A]" data-lucide="check"></i> Demand Ownership
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-[#FF6B4A]" data-lucide="check"></i> Systems Ownership
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#3ACE67] transition-all duration-500 group relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-[#3ACE67] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<div className="mb-8">
<span className="text-[#3ACE67] text-xs font-bold uppercase tracking-widest">Tier 3</span>
<h3 className="text-3xl font-semibold text-white mt-2">Gravity</h3>
<p className="text-gray-400 mt-2 text-sm">Compounding revenue growth</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-[#3ACE67]" data-lucide="check"></i> Full GTM Ownership
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-[#3ACE67]" data-lucide="check"></i> Principal Oversight
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<i className="w-4 h-4 text-[#3ACE67]" data-lucide="check"></i> All Modules Included
                        </li>
</ul>
</div>
</div>
<div className="mt-20 text-center">
<h3 className="text-2xl font-semibold text-white mb-2">Human-powered. AI-led. Outcome-owned.</h3>
<p className="text-gray-500 text-sm mb-6">AI helps us move faster. Humans help us move right.</p>
<div className="inline-flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-600">
<span>Human Judgment</span>
<span>•</span>
<span>AI Acceleration</span>
<span>•</span>
<span>Clear Accountability</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#030303] border-t border-white/5 pt-20 pb-10">
<div className="max-w-4xl mx-auto px-6 mb-20">
<h2 className="text-3xl font-semibold mb-12 text-center">Common Questions</h2>
<div className="space-y-6">

<div className="border-b border-white/5 pb-6">
<h3 className="text-lg font-medium text-white mb-2">What is a Go-To-Market (GTM) agency?</h3>
<p className="text-gray-500 text-sm leading-relaxed">A Go-To-Market agency helps companies bring products to market by aligning positioning, demand generation, and revenue execution. GTMVerse goes further by owning GTM end to end, not just advising on it.</p>
</div>

<div className="border-b border-white/5 pb-6">
<h3 className="text-lg font-medium text-white mb-2">How is GTMVerse different from a traditional marketing agency?</h3>
<p className="text-gray-500 text-sm leading-relaxed">Traditional agencies execute isolated services like SEO or ads. GTMVerse operates as an embedded GTM function, owning outcomes across positioning, demand, conversion, and systems with clear accountability.</p>
</div>

<div className="border-b border-white/5 pb-6">
<h3 className="text-lg font-medium text-white mb-2">How long does it take to see results?</h3>
<p className="text-gray-500 text-sm leading-relaxed">Most companies gain GTM clarity within 30–45 days, followed by compounding improvements as systems mature.</p>
</div>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center border-t border-white/5 pt-20">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-8 text-white">Growth shouldn’t feel uncertain.</h2>
<p className="text-xl text-gray-400 mb-12 font-light">When Go-To-Market has an owner, clarity replaces chaos, and momentum compounds. Let us own your Go-To-Market, end to end.</p>
<button className="px-10 py-5 bg-[#FF6B4A] hover:bg-[#ff5530] text-black font-semibold rounded-lg transition-all shadow-[0_0_50px_-10px_rgba(255,107,74,0.4)] text-lg mb-20">
                Enter the GTMVerse
            </button>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 pt-8 border-t border-white/5">
<p>© 2024 GTMVerse. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-400 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-gray-400 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
