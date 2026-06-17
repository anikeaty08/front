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



        // Setup GSAP
        gsap.registerPlugin(ScrollTrigger);

        // 1. Navbar Scroll & Mini-Player
        const navbar = document.getElementById('navbar');
        const miniPlayer = document.getElementById('mini-player');
        const btnNavListen = document.getElementById('btn-nav-listen');
        const btnClosePlayer = document.getElementById('btn-close-player');

        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                navbar.classList.add('bg-[#1E2420]/90', 'backdrop-blur-xl', 'border-[#899678]/20');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('bg-[#1E2420]/90', 'backdrop-blur-xl', 'border-[#899678]/20');
                navbar.classList.add('border-transparent');
            }
        });

        btnNavListen.addEventListener('click', () => {
            miniPlayer.style.maxHeight = '64px';
        });
        btnClosePlayer.addEventListener('click', () => {
            miniPlayer.style.maxHeight = '0';
        });

        // 2. Waveform Generation & Simulation
        const generateWaveform = (containerId, barsCount, defaultOpacity, isActiveClass) => {
            const container = document.getElementById(containerId);
            if (!container) return;
            const heights = [12, 24, 16, 32, 48, 20, 14, 38, 42, 18, 26, 30, 44, 22, 16, 28]; // random pattern
            
            for (let i = 0; i < barsCount; i++) {
                const bar = document.createElement('div');
                const h = heights[i % heights.length];
                bar.className = `w-[2px] rounded-full transition-all duration-150 ease-linear ${isActiveClass ? '' : 'bg-[#899678]'}`;
                bar.style.height = `${h}px`;
                bar.style.opacity = defaultOpacity;
                if(isActiveClass) bar.classList.add('wave-bar'); 
                container.appendChild(bar);
            }
            return container.children;
        };

        const mainBars = generateWaveform('main-waveform', 60, '0.6', false);
        const miniBars = generateWaveform('mini-waveform', 16, '0.6', false);

        // Playhead Simulation
        const btnPlayClip = document.getElementById('btn-play-clip');
        const iconPlayClip = document.getElementById('icon-play-clip');
        const timeCurrent = document.getElementById('time-current');
        const playhead = document.getElementById('playhead');
        let isPlaying = false;
        let progress = 0;
        let playInterval;

        btnPlayClip.addEventListener('click', () => {
            isPlaying = !isPlaying;
            iconPlayClip.setAttribute('icon', isPlaying ? 'solar:pause-linear' : 'solar:play-linear');
            
            if (isPlaying) {
                playInterval = setInterval(() => {
                    progress += (1 / 920); // roughly 92s total
                    if (progress >= 1) { progress = 0; isPlaying = false; clearInterval(playInterval); iconPlayClip.setAttribute('icon', 'solar:play-linear'); }
                    
                    // Update visual progress
                    playhead.style.left = `${progress * 100}%`;
                    
                    // Update time text
                    const totalSeconds = Math.floor(progress * 92);
                    const mins = Math.floor(totalSeconds / 60);
                    const secs = (totalSeconds % 60).toString().padStart(2, '0');
                    timeCurrent.innerText = `${mins}:${secs}`;
                    
                    // Color bars behind playhead
                    Array.from(mainBars).forEach((bar, index) => {
                        if (bar.id === 'playhead') return;
                        if (index / 60 <= progress) {
                            bar.style.backgroundColor = '#88653D';
                            bar.style.opacity = '1';
                        } else {
                            bar.style.backgroundColor = '#899678';
                            bar.style.opacity = '0.6';
                        }
                    });
                }, 100);
            } else {
                clearInterval(playInterval);
            }
        });

        // 3. Ambient Toggle
        const ambientToggle = document.getElementById('ambient-toggle');
        const ambientIcon = document.getElementById('ambient-icon');
        let ambientOn = false;
        ambientToggle.addEventListener('click', () => {
            ambientOn = !ambientOn;
            ambientIcon.setAttribute('icon', ambientOn ? 'solar:volume-cross-linear' : 'solar:wind-linear');
            ambientIcon.parentElement.classList.toggle('text-white', ambientOn);
            ambientIcon.parentElement.classList.toggle('border-white/30', ambientOn);
        });

        // 4. GSAP Animations
        
        // Hero Entrance
        gsap.from(".hero-anim", {
            y: 40, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.2
        });

        // Host Section
        gsap.from(".host-img", {
            scrollTrigger: { trigger: ".host-trigger", start: "top 65%", once: true },
            x: -40, opacity: 0, duration: 0.8, ease: "power3.out"
        });
        gsap.from(".host-content", {
            scrollTrigger: { trigger: ".host-trigger", start: "top 65%", once: true },
            x: 40, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.15
        });

        // Roster Cards - Fixed explicitly to use fromTo to prevent getting stuck invisible
        gsap.fromTo(".roster-card", 
            { y: 40, opacity: 0 },
            { scrollTrigger: { trigger: "#roster-grid", start: "top 75%", once: true }, y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        );

        // 5. Search Demo Auto-Type
        if (!sessionStorage.getItem('searchDemoSeen')) {
            const searchInput = document.getElementById('demo-search');
            setTimeout(() => {
                searchInput.classList.add('border-[#F5F2EE]/50'); // focus ring
                const textToType = "hunting";
                let i = 0;
                const typeInterval = setInterval(() => {
                    searchInput.value += textToType[i]; i++;
                    if (i >= textToType.length) {
                        clearInterval(typeInterval);
                        setTimeout(() => {
                            let j = textToType.length;
                            const clearInterval = setInterval(() => {
                                searchInput.value = searchInput.value.slice(0, -1); j--;
                                if (j <= 0) {
                                    clearInterval(clearInterval);
                                    searchInput.classList.remove('border-[#F5F2EE]/50');
                                    sessionStorage.setItem('searchDemoSeen', 'true');
                                }
                            }, 50);
                        }, 1200);
                    }
                }, 100);
            }, 1500);
        }

        // 6. Guest Form Self-Writing Animation
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        const typeText = async (element, text, speed = 40) => {
            element.classList.add('cursor-blink');
            for(let i = 0; i < text.length; i++) {
                element.value += text[i];
                await sleep(speed);
            }
            element.classList.remove('cursor-blink');
        };

        ScrollTrigger.create({
            trigger: "#guest-form-container",
            start: "top 60%",
            once: true,
            onEnter: async () => {
                const inputs = ['f-name', 'f-built', 'f-pursuit', 'f-why'].map(id => document.getElementById(id));
                const btn = document.getElementById('f-submit');
                const overlay = document.getElementById('form-success');
                
                inputs.forEach(el => el.disabled = true);
                btn.style.pointerEvents = 'none';

                await typeText(inputs[0], "James Caldwell", 40);
                await sleep(300);
                await typeText(inputs[1], "Built a $40M logistics company from a single truck.", 40);
                await sleep(300);
                await typeText(inputs[2], "Elk hunting — 12 seasons in Wyoming.", 40);
                await sleep(300);
                await typeText(inputs[3], "Because real success is earned before it's explained.", 40);
                await sleep(800);
                
                // Submit Glow
                btn.style.boxShadow = '0 0 0 3px rgba(136,101,61,0.5)';
                await sleep(500);
                btn.style.boxShadow = 'none';
                
                // Overlay
                overlay.style.opacity = '1';
                await sleep(2000);
                overlay.style.opacity = '0';
                
                // Reset
                inputs.forEach(el => { el.value = ''; el.disabled = false; });
                btn.style.pointerEvents = 'auto';
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
      

<div className="noise-overlay"></div>

<header className="fixed top-0 w-full z-[100] transition-all duration-500 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-6 h-20 flex items-center justify-between">

<div className="font-oswald font-semibold text-sm tracking-[0.2em] text-white">
                THE HUNT FOR SUCCESS
            </div>

<nav className="hidden lg:flex items-center gap-8 font-inter text-sm text-white/80">
<a className="hover:text-white hover:-translate-y-[1px] transition-all" href="#episodes">Episodes</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all" href="#guests">Guests</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all" href="#about">About</a>
<a className="hover:text-white hover:-translate-y-[1px] transition-all" href="#apply">Apply</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 bg-[#1A2530] rounded-full py-1.5 px-3 border border-white/10">
<div className="w-2 h-2 rounded-full bg-[#88653D] animate-pulse"></div>
<span className="font-mono text-xs text-[#899678]">LIVE</span>
</div>
<button className="hidden lg:inline-flex btn-magnetic rounded-full bg-[#88653D] px-6 py-2.5" id="btn-nav-listen">
<div className="btn-bg-slide bg-[#C1623F]"></div>
<div className="btn-content text-white font-medium text-sm">Listen →</div>
</button>
<button className="lg:hidden text-white flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="max-h-0 overflow-hidden bg-[#364C61] border-b border-[#899678]/15 rounded-b-3xl transition-all duration-400 ease-out" id="mini-player">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="font-mono text-xs text-[#899678]">EP. 01</span>
<span className="font-inter text-xs text-white truncate max-w-[200px]">Building an Empire in the Outdoors Industry</span>
</div>
<div className="hidden md:flex items-end gap-1 h-6 mini-waveform">

</div>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded-full bg-[#88653D] flex items-center justify-center text-white hover:scale-105 transition-transform">
<iconify-icon height="16" icon="solar:play-linear" width="16"></iconify-icon>
</button>
<button className="text-white/60 hover:text-white" id="btn-close-player">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-[100dvh] w-full flex flex-col justify-end pb-20 pl-6 lg:pb-[120px] lg:pl-16 z-[5]">

<div className="absolute inset-0 bg-[url('https://assets.cdn.filesafe.space/urI9NXscsbbGdnXhycTH/media/69a1ee66b617a7ec6fccfc87.webp')] bg-cover bg-center"></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#1E2420]/60 via-transparent to-transparent h-[40%]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2420] via-[#1E2420]/75 to-transparent h-[70%] top-auto"></div>

<div className="relative z-10 max-w-7xl">
<h1 className="font-oswald font-semibold text-3xl lg:text-5xl text-white tracking-tight leading-[0.95] tracking-[0.02em] hero-anim">
                SUCCESS IS NOT AN ACCIDENT.
            </h1>
<h2 className="font-oswald font-semibold text-5xl lg:text-[5.5rem] text-[#899678] tracking-tight leading-[0.9] tracking-[0.01em] mt-2 hero-anim">
                IT'S A HUNT.
            </h2>
<p className="font-lora text-sm lg:text-lg text-white/65 max-w-[500px] mt-6 leading-relaxed hero-anim">
                Real conversations with entrepreneurs who built wealth, discipline, and freedom — and designed a life worth living.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-10 hero-anim">
<button className="btn-magnetic rounded-full bg-[#88653D] px-8 py-3.5 w-full sm:w-auto">
<div className="btn-bg-slide bg-[#C1623F]"></div>
<div className="btn-content text-white font-medium text-sm">Listen Now</div>
</button>
<button className="btn-magnetic rounded-full bg-transparent border border-white/40 px-8 py-3.5 w-full sm:w-auto group">
<div className="btn-bg-slide bg-[#88653D]"></div>
<div className="btn-content text-white font-normal text-sm group-hover:border-transparent transition-colors">Meet the Host</div>
</button>
</div>
</div>

<div className="absolute bottom-16 right-6 lg:bottom-24 lg:right-16 z-20 flex items-center gap-3 group cursor-pointer" id="ambient-toggle">
<span className="font-mono text-xs text-white bg-[#1A2530] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">ambient sound</span>
<div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/30 group-hover:scale-110 transition-all">
<iconify-icon height="20" icon="solar:wind-linear" id="ambient-icon" width="20"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-10 bg-[#1E2420]/60 backdrop-blur-md border-t border-white/10 overflow-hidden flex items-center">
<div className="animate-marquee font-mono text-xs text-white/70 tracking-[0.08em] whitespace-nowrap">
<span className="px-4">Bill Jordan · Outdoor Industry Founder · Ep. 01 | Dr. Marcus Reynolds · Healthcare Operator · Ep. 02 | Sarah Vance · Land Investment Strategist · Ep. 03 | James Caldwell · Private Equity Partner · Ep. 04</span>
<span className="px-4">Bill Jordan · Outdoor Industry Founder · Ep. 01 | Dr. Marcus Reynolds · Healthcare Operator · Ep. 02 | Sarah Vance · Land Investment Strategist · Ep. 03 | James Caldwell · Private Equity Partner · Ep. 04</span>
</div>
</div>
</section>

<section className="bg-[#1E2420] z-10 section-overlap py-24 px-6 lg:px-16" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="font-mono text-xs text-[#88653D] tracking-[0.2em] uppercase mb-8">NOT FOR EVERYONE.</div>
<div className="w-12 h-[2px] bg-[#88653D] mb-6"></div>
<blockquote className="font-lora italic font-semibold text-2xl lg:text-3xl text-[#F5F2EE] leading-[1.5] max-w-[420px] tracking-tight">
                    "Success should fund a life you actually want — not a self-created prison."
                </blockquote>
<p className="font-lora text-base text-[#F5F2EE]/55 leading-[1.7] mt-8 max-w-[380px]">
                    This show exists for the builder who wants both. The business and the life. The discipline and the freedom. The boardroom and the backcountry.
                </p>
</div>

<div className="flex flex-col justify-center gap-8">
<div className="space-y-4">
<div className="flex items-center gap-4 text-base">
<span className="font-mono text-sm text-[#88653D]">✕</span>
<span className="font-inter text-[#F5F2EE]/70">No recycled frameworks.</span>
</div>
<div className="flex items-center gap-4 text-base">
<span className="font-mono text-sm text-[#88653D]">✕</span>
<span className="font-inter text-[#F5F2EE]/70">No hustle theater.</span>
</div>
<div className="flex items-center gap-4 text-base">
<span className="font-mono text-sm text-[#88653D]">✕</span>
<span className="font-inter text-[#F5F2EE]/70">No surface-level advice.</span>
</div>
</div>
<div className="h-px w-full bg-[#F5F2EE]/10"></div>
<div className="space-y-4">
<div className="flex items-center gap-4 text-base">
<span className="font-mono text-sm text-[#899678]">✓</span>
<span className="font-inter font-medium text-[#F5F2EE]">Real builders.</span>
</div>
<div className="flex items-center gap-4 text-base">
<span className="font-mono text-sm text-[#899678]">✓</span>
<span className="font-inter font-medium text-[#F5F2EE]">Real stakes.</span>
</div>
<div className="flex items-center gap-4 text-base">
<span className="font-mono text-sm text-[#899678]">✓</span>
<span className="font-inter font-medium text-[#F5F2EE]">Real life design.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#364C61] z-20 section-overlap py-24 px-6 lg:px-16" id="episodes">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="relative w-full max-w-[480px] aspect-square bg-[#1A2530] rounded-[2.5rem] border border-[#899678]/20 shadow-[0_32px_80px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden order-first group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&amp;q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"></div>

<div className="absolute inset-0 opacity-40" style={{background: 'url(\'data:image/svg+xml', svg viewBox=0 0 200 200 xmlns=http: '//www.w3.org/2000/svg&gt'}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#1A2530]/40 to-[#1A2530] z-0"></div>
<span className="font-oswald font-semibold text-5xl text-[#899678] relative z-10 tracking-tight">EP. 01</span>
</div>

<div className="order-last">
<div className="font-mono text-xs text-[#88653D] tracking-[0.2em] uppercase mb-2">LATEST EPISODE</div>
<div className="font-inter text-xs text-white/50 mb-4">Episode 01</div>
<h3 className="font-oswald font-semibold text-4xl lg:text-5xl text-white leading-none tracking-tight">Bill Jordan</h3>
<h4 className="font-lora text-lg lg:text-xl text-[#899678] mt-2">Building an Empire in the Outdoors Industry</h4>
<p className="font-lora text-base text-white/70 mt-6 max-w-[480px] leading-[1.7]">
                    He built one of the most recognized brands in hunting from nothing. What most people don't know is what it cost him — and what it taught him.
                </p>
<div className="font-mono text-xs text-[#88653D] tracking-[0.2em] mt-10 mb-4">FROM 34:12</div>

<div className="w-full">
<div className="flex items-end gap-[2px] h-12 relative" id="main-waveform">

<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.4)] z-10 transition-all duration-100 ease-linear" id="playhead"></div>
</div>
<div className="flex items-center justify-between mt-4">
<button className="w-12 h-12 rounded-full bg-[#88653D] flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg" id="btn-play-clip">
<iconify-icon height="24" icon="solar:play-linear" id="icon-play-clip" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 font-mono text-xs">
<span className="text-white" id="time-current">0:00</span>
<span className="text-white/30">/</span>
<span className="text-white/50">1:32</span>
</div>
</div>
<a className="inline-flex items-center gap-2 mt-8 font-inter text-sm text-white hover:text-[#88653D] transition-colors group" href="#">
                        Hear the full conversation <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#1E2420] z-30 section-overlap py-24 px-6 lg:px-16 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center host-trigger">

<div className="relative w-full max-w-[480px] aspect-[3/4] rounded-[2rem] bg-[#1A2530] shadow-[0_24px_64px_rgba(0,0,0,0.4)] overflow-hidden host-img border border-white/5 group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&amp;q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
<div className="absolute inset-0 opacity-30" style={{background: 'url(\'data:image/svg+xml', svg viewBox=0 0 200 200 xmlns=http: '//www.w3.org/2000/svg&gt'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2420] to-transparent"></div>

<div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#88653D]"></div>

<div className="absolute bottom-10 left-0 right-0 flex items-center justify-center">
<span className="font-oswald font-semibold text-3xl text-white/50 tracking-widest text-center">SAM<br/>McGOUGH</span>
</div>
</div>

<div className="host-content">
<div className="font-mono text-xs text-[#88653D] tracking-[0.2em] uppercase">THE GUIDE</div>
<h2 className="font-oswald font-semibold text-4xl lg:text-5xl text-white mt-4 leading-none tracking-tight">DR. SAM McGOUGH</h2>
<div className="font-lora italic text-base lg:text-lg text-[#899678] mt-4 leading-[1.8] flex flex-col">
<span>Healthcare executive.</span>
<span>Systems builder.</span>
<span>Founder &amp; CEO.</span>
<span>Elk hunter.</span>
</div>
<div className="w-12 h-[2px] bg-[#88653D] my-6"></div>
<div className="space-y-4 font-lora text-base text-[#F5F2EE]/70 max-w-[520px] leading-[1.75]">
<p>Sam spent the last decade building multi-company operations in the healthcare space, learning exactly what it takes to scale complex systems without losing your sanity.</p>
<p>This show was built selfishly: to get access to the caliber of builders he wanted to learn from. The result is peer-to-peer dialogue, stripped of the usual interview posturing.</p>
<p>The outdoor connection isn't a branding exercise. It's where the real thinking happens. The discipline required in the backcountry translates directly to the boardroom.</p>
</div>
<button className="btn-magnetic rounded-full bg-transparent border border-[#899678]/40 px-6 py-3 mt-10 group">
<div className="btn-bg-slide bg-[#88653D]"></div>
<div className="btn-content text-[#899678] group-hover:text-white font-normal text-sm transition-colors">Hear Sam's Story →</div>
</button>
</div>
</div>
</section>

<section className="bg-[#1A2530] z-40 section-overlap py-24 px-6 lg:px-16" id="guests">
<div className="text-center mb-16 max-w-2xl mx-auto">
<div className="font-mono text-xs text-[#88653D] tracking-[0.2em] uppercase mb-4">THE WALL</div>
<h2 className="font-oswald font-semibold text-4xl lg:text-5xl text-white tracking-tight">28 conversations. 28 builders.</h2>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="roster-grid">

<div className="plaque-card roster-card group cursor-pointer opacity-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&amp;h=500&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/20 group-hover:via-[#1A1008]/40 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#C9A55A] bg-[#1A1008]/80 backdrop-blur-md px-2 py-1 rounded-md border border-[#C9A55A]/20">EP. 01</span>
</div>
<div>
<h5 className="font-oswald font-semibold text-2xl text-[#F5EDD8] tracking-tight group-hover:text-[#C9A55A] transition-colors leading-tight">Bill Jordan</h5>
<p className="font-inter text-xs text-[#899678] mt-1">Founder · Outdoor Industry</p>
<div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
<p className="font-lora italic text-xs text-[#F5EDD8]/70 leading-relaxed">"The real test isn't getting there — it's staying there without losing yourself."</p>
<span className="inline-block font-inter text-xs text-[#88653D] mt-3">Listen →</span>
</div>
</div>
</div>
</div>

<div className="plaque-card roster-card group cursor-pointer opacity-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&amp;h=500&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/20 group-hover:via-[#1A1008]/40 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#C9A55A] bg-[#1A1008]/80 backdrop-blur-md px-2 py-1 rounded-md border border-[#C9A55A]/20">EP. 02</span>
</div>
<div>
<h5 className="font-oswald font-semibold text-2xl text-[#F5EDD8] tracking-tight group-hover:text-[#C9A55A] transition-colors leading-tight">Marcus Reynolds</h5>
<p className="font-inter text-xs text-[#899678] mt-1">Healthcare Operator</p>
<div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
<p className="font-lora italic text-xs text-[#F5EDD8]/70 leading-relaxed">"I built the company but almost lost the life it was supposed to fund."</p>
<span className="inline-block font-inter text-xs text-[#88653D] mt-3">Listen →</span>
</div>
</div>
</div>
</div>

<div className="plaque-card roster-card group cursor-pointer opacity-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&amp;h=500&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/20 group-hover:via-[#1A1008]/40 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#C9A55A] bg-[#1A1008]/80 backdrop-blur-md px-2 py-1 rounded-md border border-[#C9A55A]/20">EP. 03</span>
</div>
<div>
<h5 className="font-oswald font-semibold text-2xl text-[#F5EDD8] tracking-tight group-hover:text-[#C9A55A] transition-colors leading-tight">Sarah Vance</h5>
<p className="font-inter text-xs text-[#899678] mt-1">Land Investment Strategist</p>
<div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
<p className="font-lora italic text-xs text-[#F5EDD8]/70 leading-relaxed">"Land doesn't lie. Neither does this kind of conversation."</p>
<span className="inline-block font-inter text-xs text-[#88653D] mt-3">Listen →</span>
</div>
</div>
</div>
</div>

<div className="plaque-card roster-card group cursor-pointer opacity-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&amp;h=500&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/20 group-hover:via-[#1A1008]/40 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#C9A55A] bg-[#1A1008]/80 backdrop-blur-md px-2 py-1 rounded-md border border-[#C9A55A]/20">EP. 04</span>
</div>
<div>
<h5 className="font-oswald font-semibold text-2xl text-[#F5EDD8] tracking-tight group-hover:text-[#C9A55A] transition-colors leading-tight">James Caldwell</h5>
<p className="font-inter text-xs text-[#899678] mt-1">Private Equity Partner</p>
<div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
<p className="font-lora italic text-xs text-[#F5EDD8]/70 leading-relaxed">"The best investments I ever made weren't financial."</p>
<span className="inline-block font-inter text-xs text-[#88653D] mt-3">Listen →</span>
</div>
</div>
</div>
</div>

<div className="plaque-card roster-card group cursor-pointer opacity-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&amp;h=500&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/20 group-hover:via-[#1A1008]/40 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#C9A55A] bg-[#1A1008]/80 backdrop-blur-md px-2 py-1 rounded-md border border-[#C9A55A]/20">EP. 05</span>
</div>
<div>
<h5 className="font-oswald font-semibold text-2xl text-[#F5EDD8] tracking-tight group-hover:text-[#C9A55A] transition-colors leading-tight">Ryan Cole</h5>
<p className="font-inter text-xs text-[#899678] mt-1">Ranch &amp; Agriculture Builder</p>
<div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
<p className="font-lora italic text-xs text-[#F5EDD8]/70 leading-relaxed">"Everything I know about patience I learned from elk country."</p>
<span className="inline-block font-inter text-xs text-[#88653D] mt-3">Listen →</span>
</div>
</div>
</div>
</div>

<div className="plaque-card roster-card group cursor-pointer opacity-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&amp;h=500&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/20 group-hover:via-[#1A1008]/40 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#C9A55A] bg-[#1A1008]/80 backdrop-blur-md px-2 py-1 rounded-md border border-[#C9A55A]/20">EP. 06</span>
</div>
<div>
<h5 className="font-oswald font-semibold text-2xl text-[#F5EDD8] tracking-tight group-hover:text-[#C9A55A] transition-colors leading-tight">Thomas Merritt</h5>
<p className="font-inter text-xs text-[#899678] mt-1">Logistics &amp; Operations CEO</p>
<div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
<p className="font-lora italic text-xs text-[#F5EDD8]/70 leading-relaxed">"Systems run businesses. Character runs the man."</p>
<span className="inline-block font-inter text-xs text-[#88653D] mt-3">Listen →</span>
</div>
</div>
</div>
</div>

<div className="plaque-card roster-card group cursor-pointer opacity-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&amp;h=500&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/20 group-hover:via-[#1A1008]/40 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#C9A55A] bg-[#1A1008]/80 backdrop-blur-md px-2 py-1 rounded-md border border-[#C9A55A]/20">EP. 07</span>
</div>
<div>
<h5 className="font-oswald font-semibold text-2xl text-[#F5EDD8] tracking-tight group-hover:text-[#C9A55A] transition-colors leading-tight">Daniel Park</h5>
<p className="font-inter text-xs text-[#899678] mt-1">Tech Founder + Conservationist</p>
<div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
<p className="font-lora italic text-xs text-[#F5EDD8]/70 leading-relaxed">"The wilderness gave me back everything the startup almost took."</p>
<span className="inline-block font-inter text-xs text-[#88653D] mt-3">Listen →</span>
</div>
</div>
</div>
</div>

<div className="plaque-card roster-card group cursor-pointer opacity-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;h=500&amp;fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1008] via-[#1A1008]/80 to-[#1A1008]/20 group-hover:via-[#1A1008]/40 transition-all duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-xs text-[#C9A55A] bg-[#1A1008]/80 backdrop-blur-md px-2 py-1 rounded-md border border-[#C9A55A]/20">EP. 08</span>
<div className="bg-[#88653D] rounded-full px-2 py-0.5"><span className="font-mono text-[9px] text-white">NEW</span></div>
</div>
<div>
<h5 className="font-oswald font-semibold text-2xl text-[#F5EDD8] tracking-tight group-hover:text-[#C9A55A] transition-colors leading-tight">Chris Hawthorne</h5>
<p className="font-inter text-xs text-[#899678] mt-1">Commercial Real Estate</p>
<div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 overflow-hidden">
<p className="font-lora italic text-xs text-[#F5EDD8]/70 leading-relaxed">"You want to understand a deal? Take the guy hunting first."</p>
<span className="inline-block font-inter text-xs text-[#88653D] mt-3">Listen →</span>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12">
<button className="btn-magnetic rounded-full bg-transparent border border-[#899678]/40 px-8 py-3 group">
<div className="btn-bg-slide bg-[#88653D]"></div>
<div className="btn-content text-white font-normal text-sm group-hover:border-transparent transition-colors">View All Guests →</div>
</button>
</div>
</section>

<section className="bg-[#1E2420] z-50 section-overlap py-24 px-6 lg:px-16" id="archive">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<div className="font-mono text-xs text-[#88653D] tracking-[0.2em] uppercase mb-4">THE FIELD NOTES</div>
<h2 className="font-oswald font-semibold text-3xl lg:text-5xl text-[#F5F2EE] tracking-tight">Find your next conversation.</h2>
</div>

<div className="max-w-[560px] mx-auto relative mb-8">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5F2EE]/40" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full bg-white/5 border border-[#F5F2EE]/15 rounded-2xl py-4 pl-12 pr-4 font-inter text-base text-[#F5F2EE] placeholder:text-[#F5F2EE]/30 focus:outline-none focus:border-[#F5F2EE]/50 transition-colors" id="demo-search" placeholder="Search episodes..." type="text"/>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto hide-scrollbar">
<button className="rounded-full px-5 py-2 font-inter text-xs transition-colors bg-[#88653D] text-white">All</button>
<button className="rounded-full px-5 py-2 font-inter text-xs transition-colors bg-transparent border border-[#F5F2EE]/20 text-[#F5F2EE]/65 hover:text-white">Business</button>
<button className="rounded-full px-5 py-2 font-inter text-xs transition-colors bg-transparent border border-[#F5F2EE]/20 text-[#F5F2EE]/65 hover:text-white">Outdoors</button>
<button className="rounded-full px-5 py-2 font-inter text-xs transition-colors bg-transparent border border-[#F5F2EE]/20 text-[#F5F2EE]/65 hover:text-white">Lifestyle</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:border-[#F5F2EE]/15 transition-all duration-250 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<span className="bg-[#364C61] font-mono text-[10px] text-white rounded-full px-2 py-0.5">Business</span>
<span className="font-mono text-xs text-[#88653D]">EP. 08</span>
</div>
<h4 className="font-oswald font-semibold text-xl text-[#F5F2EE] leading-[1.2] tracking-tight">Scale Without Sacrificing Soil</h4>
<p className="font-lora text-sm text-[#F5F2EE]/50 mt-1">Chris Hawthorne</p>
<div className="h-px bg-[#F5F2EE]/5 my-5"></div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#F5F2EE]/35" icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="font-mono text-xs text-[#F5F2EE]/40">42 min</span>
</div>
<span className="font-inter text-sm text-[#88653D] group-hover:underline">Listen →</span>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:border-[#F5F2EE]/15 transition-all duration-250 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<span className="bg-[#899678] font-mono text-[10px] text-white rounded-full px-2 py-0.5">Outdoors</span>
<span className="font-mono text-xs text-[#88653D]">EP. 07</span>
</div>
<h4 className="font-oswald font-semibold text-xl text-[#F5F2EE] leading-[1.2] tracking-tight">The Discipline of the Draw</h4>
<p className="font-lora text-sm text-[#F5F2EE]/50 mt-1">Daniel Park</p>
<div className="h-px bg-[#F5F2EE]/5 my-5"></div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#F5F2EE]/35" icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="font-mono text-xs text-[#F5F2EE]/40">56 min</span>
</div>
<span className="font-inter text-sm text-[#88653D] group-hover:underline">Listen →</span>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:border-[#F5F2EE]/15 transition-all duration-250 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<span className="bg-[#88653D] font-mono text-[10px] text-white rounded-full px-2 py-0.5">Lifestyle</span>
<span className="font-mono text-xs text-[#88653D]">EP. 06</span>
</div>
<h4 className="font-oswald font-semibold text-xl text-[#F5F2EE] leading-[1.2] tracking-tight">Designing the Unbound Life</h4>
<p className="font-lora text-sm text-[#F5F2EE]/50 mt-1">Thomas Merritt</p>
<div className="h-px bg-[#F5F2EE]/5 my-5"></div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#F5F2EE]/35" icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="font-mono text-xs text-[#F5F2EE]/40">48 min</span>
</div>
<span className="font-inter text-sm text-[#88653D] group-hover:underline">Listen →</span>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:border-[#F5F2EE]/15 transition-all duration-250 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<span className="bg-[#364C61] font-mono text-[10px] text-white rounded-full px-2 py-0.5">Business</span>
<span className="font-mono text-xs text-[#88653D]">EP. 05</span>
</div>
<h4 className="font-oswald font-semibold text-xl text-[#F5F2EE] leading-[1.2] tracking-tight">Acquisitions in the Dirt</h4>
<p className="font-lora text-sm text-[#F5F2EE]/50 mt-1">Ryan Cole</p>
<div className="h-px bg-[#F5F2EE]/5 my-5"></div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#F5F2EE]/35" icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="font-mono text-xs text-[#F5F2EE]/40">61 min</span>
</div>
<span className="font-inter text-sm text-[#88653D] group-hover:underline">Listen →</span>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:border-[#F5F2EE]/15 transition-all duration-250 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<span className="bg-[#899678] font-mono text-[10px] text-white rounded-full px-2 py-0.5">Outdoors</span>
<span className="font-mono text-xs text-[#88653D]">EP. 04</span>
</div>
<h4 className="font-oswald font-semibold text-xl text-[#F5F2EE] leading-[1.2] tracking-tight">12 Seasons in Wyoming</h4>
<p className="font-lora text-sm text-[#F5F2EE]/50 mt-1">James Caldwell</p>
<div className="h-px bg-[#F5F2EE]/5 my-5"></div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#F5F2EE]/35" icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="font-mono text-xs text-[#F5F2EE]/40">39 min</span>
</div>
<span className="font-inter text-sm text-[#88653D] group-hover:underline">Listen →</span>
</div>
</div>

<div className="bg-white/5 border border-[#F5F2EE]/10 rounded-3xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] hover:border-[#F5F2EE]/15 transition-all duration-250 group cursor-pointer">
<div className="flex justify-between items-center mb-3">
<span className="bg-[#364C61] font-mono text-[10px] text-white rounded-full px-2 py-0.5">Business</span>
<span className="font-mono text-xs text-[#88653D]">EP. 03</span>
</div>
<h4 className="font-oswald font-semibold text-xl text-[#F5F2EE] leading-[1.2] tracking-tight">The Terrain of True Wealth</h4>
<p className="font-lora text-sm text-[#F5F2EE]/50 mt-1">Sarah Vance</p>
<div className="h-px bg-[#F5F2EE]/5 my-5"></div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#F5F2EE]/35" icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="font-mono text-xs text-[#F5F2EE]/40">52 min</span>
</div>
<span className="font-inter text-sm text-[#88653D] group-hover:underline">Listen →</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#364C61] z-60 section-overlap py-24 px-6 lg:px-16" id="apply">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="font-mono text-xs text-[#88653D] tracking-[0.2em] uppercase">APPLY</div>
<h2 className="font-oswald font-semibold text-4xl lg:text-5xl text-white mt-4 leading-[1.05] tracking-tight max-w-[400px]">Think you belong in this conversation?</h2>
<p className="font-lora text-base lg:text-lg text-white/70 mt-6 leading-[1.7]">
                    This show is built for people who have actually built something — in business and in life. We're selective because our listeners are.
                </p>
<div className="mt-12">
<div className="w-12 h-[2px] bg-[#88653D] mb-6"></div>
<blockquote className="font-lora italic font-semibold text-xl lg:text-2xl text-[#899678] leading-[1.5] max-w-[380px] tracking-tight">
                        "The best conversations happen between people who've already done the work."
                    </blockquote>
</div>
</div>

<div className="relative bg-[#1A2530] rounded-[2rem] p-7 lg:p-10 border border-[#899678]/10 overflow-hidden" id="guest-form-container">
<form className="space-y-6 relative z-10" onsubmit="event.preventDefault();">
<div>
<label className="block font-inter text-xs text-white/55 uppercase tracking-[0.1em] mb-2">Name</label>
<input className="w-full bg-transparent border-b border-[#899678]/30 py-2 font-lora text-base text-white placeholder:text-white/25 focus:outline-none focus:border-[#88653D] transition-colors" id="f-name" placeholder="Your full name" type="text"/>
</div>
<div>
<label className="block font-inter text-xs text-white/55 uppercase tracking-[0.1em] mb-2">What You've Built</label>
<input className="w-full bg-transparent border-b border-[#899678]/30 py-2 font-lora text-base text-white placeholder:text-white/25 focus:outline-none focus:border-[#88653D] transition-colors" id="f-built" placeholder="Company, industry, or achievement" type="text"/>
</div>
<div>
<label className="block font-inter text-xs text-white/55 uppercase tracking-[0.1em] mb-2">Your Outdoor Pursuit</label>
<input className="w-full bg-transparent border-b border-[#899678]/30 py-2 font-lora text-base text-white placeholder:text-white/25 focus:outline-none focus:border-[#88653D] transition-colors" id="f-pursuit" placeholder="Hunting, fishing, ranching, other..." type="text"/>
</div>
<div>
<label className="block font-inter text-xs text-white/55 uppercase tracking-[0.1em] mb-2">Why This Conversation</label>
<input className="w-full bg-transparent border-b border-[#899678]/30 py-2 font-lora text-base text-white placeholder:text-white/25 focus:outline-none focus:border-[#88653D] transition-colors" id="f-why" placeholder="What would you bring to the show?" type="text"/>
</div>
<button className="w-full btn-magnetic rounded-xl bg-[#88653D] py-4 mt-8 transition-shadow" id="f-submit">
<div className="btn-bg-slide bg-[#C1623F]"></div>
<div className="btn-content text-white font-medium text-sm">Submit Your Hunt</div>
</button>
</form>

<div className="absolute inset-0 bg-[#1A2530]/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500" id="form-success">
<iconify-icon className="text-[#899678]" height="48" icon="solar:check-circle-linear" width="48"></iconify-icon>
<div className="font-mono text-xs text-white tracking-[0.15em] mt-4 uppercase">Application Received</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1A2530] z-70 section-overlap py-24 px-6 lg:px-16 flex flex-col items-center text-center">
<div className="max-w-[700px] w-full">
<h2 className="font-oswald font-semibold text-4xl lg:text-6xl text-white tracking-[0.02em] uppercase leading-none tracking-tight">SUCCESS IS EARNED.</h2>
<h2 className="font-oswald font-semibold text-4xl lg:text-6xl text-[#899678] tracking-[0.02em] uppercase leading-none mt-2 tracking-tight">FREEDOM IS DESIGNED.</h2>
<p className="font-lora text-base lg:text-lg text-white/55 mt-6">Drop every week. Miss one and you'll feel it.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 w-full">
<button className="btn-magnetic rounded-full bg-white px-8 py-4 flex-1 sm:flex-none">
<div className="btn-bg-slide bg-[#88653D]"></div>
<div className="btn-content text-[#1E2420] group-hover:text-white font-medium text-sm transition-colors">
<iconify-icon icon="solar:music-note-linear" width="18"></iconify-icon>
                        Apple Podcasts
                    </div>
</button>
<button className="btn-magnetic rounded-full bg-white px-8 py-4 flex-1 sm:flex-none">
<div className="btn-bg-slide bg-[#88653D]"></div>
<div className="btn-content text-[#1E2420] group-hover:text-white font-medium text-sm transition-colors">
<iconify-icon icon="solar:radio-minimalistic-linear" width="18"></iconify-icon>
                        Spotify
                    </div>
</button>
<button className="btn-magnetic rounded-full bg-white px-8 py-4 flex-1 sm:flex-none">
<div className="btn-bg-slide bg-[#88653D]"></div>
<div className="btn-content text-[#1E2420] group-hover:text-white font-medium text-sm transition-colors">
<iconify-icon icon="solar:videocamera-linear" width="18"></iconify-icon>
                        YouTube
                    </div>
</button>
</div>
</div>
</section>

<footer className="bg-[#1A2530] z-80 relative pt-20 pb-10 px-6 lg:px-16 overflow-hidden">

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-5 pointer-events-none z-0 w-[180px] lg:w-[300px] h-auto" fill="none" viewbox="0 0 20 18">
<path d="M10,16 L10,10 M10,10 C10,10 7,8 5,5 C4,3 4,1 5,1 C6,1 7,3 7,5" stroke="currentColor" strokeLinecap="round" strokeWidth="0.5"></path>
<path d="M10,10 C10,10 13,8 15,5 C16,3 16,1 15,1 C14,1 13,3 13,5" stroke="currentColor" strokeLinecap="round" strokeWidth="0.5"></path>
<path d="M5,5 C4,4 3,4 2,5" stroke="currentColor" strokeLinecap="round" strokeWidth="0.5"></path>
<path d="M15,5 C16,4 17,4 18,5" stroke="currentColor" strokeLinecap="round" strokeWidth="0.5"></path>
</svg>
<div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="lg:col-span-2">
<div className="font-oswald font-semibold text-lg text-white tracking-[0.15em]">THE HUNT FOR SUCCESS</div>
<div className="font-lora text-sm text-[#899678] mt-2">Built by builders. For builders.</div>
<div className="flex items-center gap-5 mt-8">
<a className="text-white/45 hover:text-white hover:-translate-y-px transition-all" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-white/45 hover:text-white hover:-translate-y-px transition-all" href="#"><iconify-icon icon="solar:videocamera-linear" width="20"></iconify-icon></a>
<a className="text-white/45 hover:text-white hover:-translate-y-px transition-all" href="#"><iconify-icon icon="solar:music-note-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<div className="font-mono text-xs text-[#899678] tracking-[0.2em] mb-4">EXPLORE</div>
<nav className="flex flex-col gap-2 font-inter text-sm text-white/55 leading-loose">
<a className="hover:text-white transition-colors w-max" href="#episodes">Episodes</a>
<a className="hover:text-white transition-colors w-max" href="#guests">Guests</a>
<a className="hover:text-white transition-colors w-max" href="#about">About</a>
<a className="hover:text-white transition-colors w-max" href="#apply">Apply</a>
</nav>
</div>

<div>
<div className="font-mono text-xs text-[#899678] tracking-[0.2em] mb-4">LISTEN ON</div>
<nav className="flex flex-col gap-2 font-inter text-sm text-white/55 leading-loose">
<a className="hover:text-white transition-colors w-max" href="#">Apple Podcasts</a>
<a className="hover:text-white transition-colors w-max" href="#">Spotify</a>
<a className="hover:text-white transition-colors w-max" href="#">YouTube</a>
</nav>
</div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="h-px w-full bg-[#899678]/10 my-12"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-inter text-xs text-white/25">© 2025 The Hunt for Success. All rights reserved.</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></div>
<div className="font-mono text-xs text-white/45 tracking-[0.12em]">SIGNAL STRONG. SEASON OPEN.</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
