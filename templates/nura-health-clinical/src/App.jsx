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
moss: '#2E4036',
clay: '#CC5833',
cream: '#F2F0E9',
charcoal: '#1A1A1A'
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
display: ['"Outfit"', 'sans-serif'],
serif: ['"Cormorant Garamond"', 'serif'],
mono: ['"JetBrains Mono"', 'monospace']
},
transitionTimingFunction: {
'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            
            gsap.registerPlugin(ScrollTrigger);

            // 1. NAVBAR MORPH LOGIC
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.remove('bg-transparent', 'text-cream', 'border-transparent');
                    nav.classList.add('bg-white/60', 'backdrop-blur-md', 'text-moss', 'border-moss/10');
                    nav.querySelector('button').classList.replace('bg-white/10', 'bg-moss');
                    nav.querySelector('button').classList.replace('text-cream', 'text-cream');
                    nav.querySelector('button').classList.replace('border-white/10', 'border-transparent');
                } else {
                    nav.classList.add('bg-transparent', 'text-cream', 'border-transparent');
                    nav.classList.remove('bg-white/60', 'backdrop-blur-md', 'text-moss', 'border-moss/10');
                    nav.querySelector('button').classList.replace('bg-moss', 'bg-white/10');
                    nav.querySelector('button').classList.replace('border-transparent', 'border-white/10');
                }
            });

            // 2. HERO GSAP FADE UP
            gsap.fromTo('.hero-anim', 
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
            );

            // 3. DIAGNOSTIC SHUFFLER (Vanilla JS Spring logic)
            const cards = Array.from(document.querySelectorAll('.shuffler-card'));
            let order = [0, 1, 2];
            
            function updateCards() {
                cards.forEach((card, i) => {
                    const posIndex = order.indexOf(i);
                    const yOffset = posIndex * 20; // px
                    const scale = 1 - (posIndex * 0.08);
                    const opacity = 1 - (posIndex * 0.4);
                    const zIndex = 3 - posIndex;
                    
                    card.style.transform = `translateY(${yOffset}px) scale(${scale})`;
                    card.style.opacity = opacity;
                    card.style.zIndex = zIndex;
                });
            }
            updateCards(); // initial set
            setInterval(() => {
                order.unshift(order.pop());
                updateCards();
            }, 3000);

            // 4. TELEMETRY TYPEWRITER
            const messages = [
                "Optimizing Circadian Rhythm...",
                "Analyzing Cortisol curve...",
                "Adjusting macronutrient ratios...",
                "Sleep latency improved by 14%."
            ];
            let msgIndex = 0;
            let charIndex = 0;
            const typeContainer = document.getElementById('typewriter');
            let isTyping = true;

            function typeWriter() {
                const currentMsg = messages[msgIndex];
                if (isTyping) {
                    if (charIndex < currentMsg.length) {
                        typeContainer.innerHTML = currentMsg.substring(0, charIndex + 1);
                        charIndex++;
                        setTimeout(typeWriter, Math.random() * 50 + 50); // variance for realism
                    } else {
                        isTyping = false;
                        setTimeout(typeWriter, 2000); // pause at end
                    }
                } else {
                    if (charIndex > 0) {
                        typeContainer.innerHTML = currentMsg.substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(typeWriter, 30);
                    } else {
                        isTyping = true;
                        msgIndex = (msgIndex + 1) % messages.length;
                        setTimeout(typeWriter, 500);
                    }
                }
            }
            setTimeout(typeWriter, 1500);

            // 5. MOCK CURSOR PROTOCOL SCHEDULER
            const cursor = document.getElementById('mock-cursor');
            const targetDay = document.getElementById('target-day');
            const saveBtn = document.getElementById('save-btn');
            
            // Wait for layout to settle
            setTimeout(() => {
                const tlCursor = gsap.timeline({ repeat: -1, repeatDelay: 1 });
                
                // Get relative positions within container
                const containerRect = cursor.parentElement.getBoundingClientRect();
                const dayRect = targetDay.getBoundingClientRect();
                const btnRect = saveBtn.getBoundingClientRect();
                
                const dayX = dayRect.left - containerRect.left + (dayRect.width/2);
                const dayY = dayRect.top - containerRect.top + (dayRect.height/2);
                
                const btnX = btnRect.left - containerRect.left + (btnRect.width/2);
                const btnY = btnRect.top - containerRect.top + (btnRect.height/2);

                tlCursor
                    .to(cursor, { top: dayY, left: dayX, duration: 1.5, ease: "power2.inOut" })
                    .to(cursor, { scale: 0.8, duration: 0.1 }) // click down
                    .to(targetDay, { backgroundColor: '#2E4036', duration: 0.2 }, "<") // activate
                    .to(cursor, { scale: 1, duration: 0.1 }) // click up
                    .to(cursor, { top: btnY, left: btnX, duration: 1, ease: "power2.inOut", delay: 0.5 })
                    .to(cursor, { scale: 0.8, duration: 0.1 }) // click down
                    .to(saveBtn, { scale: 0.95, duration: 0.1 }, "<")
                    .to(cursor, { scale: 1, duration: 0.1 }) // click up
                    .to(saveBtn, { scale: 1, duration: 0.1 }, "<")
                    .to(cursor, { top: '80%', left: '80%', duration: 1.5, ease: "power2.inOut", delay: 0.5 })
                    .to(targetDay, { backgroundColor: 'rgba(46, 64, 54, 0.2)', duration: 0.5 }, "-=1"); // reset
            }, 1000);

            // 6. PHILOSOPHY SPLIT TEXT REVEAL
            function setupSplitText(selector) {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    const text = el.innerText;
                    el.innerHTML = '';
                    const words = text.split(' ');
                    words.forEach((word, index) => {
                        const wordWrap = document.createElement('span');
                        wordWrap.className = 'word-wrap';
                        const wordInner = document.createElement('span');
                        wordInner.className = 'word-inner';
                        wordInner.innerText = word + (index < words.length - 1 ? '\u00A0' : ''); // add non-breaking space
                        wordWrap.appendChild(wordInner);
                        el.appendChild(wordWrap);
                    });
                });
            }
            
            setupSplitText('.reveal-text');
            setupSplitText('.reveal-text-main');

            gsap.utils.toArray('.reveal-text .word-inner').forEach((word, i) => {
                gsap.to(word, {
                    y: '0%',
                    ease: 'power3.out',
                    duration: 1,
                    scrollTrigger: {
                        trigger: '#philosophy',
                        start: 'top 60%',
                    },
                    delay: i * 0.05
                });
            });

            gsap.utils.toArray('.reveal-text-main .word-inner').forEach((word, i) => {
                gsap.to(word, {
                    y: '0%',
                    ease: 'power4.out',
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: '#philosophy',
                        start: 'top 50%',
                    },
                    delay: (i * 0.08) + 0.3
                });
            });

            // Parallax BG
            gsap.to('#parallax-bg', {
                y: '20%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '#philosophy',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // 7. PROTOCOL STICKY STACKING ARCHIVE
            const protocolCards = gsap.utils.toArray('.protocol-card');
            
            protocolCards.forEach((card, i) => {
                if (i === 0) return; // Skip first card
                
                const prevCard = protocolCards[i - 1];
                const prevContent = prevCard.querySelector('.protocol-content');
                
                // When current card enters, animate previous card content
                gsap.to(prevContent, {
                    scale: 0.9,
                    filter: 'blur(15px)',
                    opacity: 0.4,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
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
      
<div className="noise-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl bg-transparent text-cream border border-transparent" id="navbar">
<div className="font-display font-medium tracking-[0.2em] text-sm uppercase">
            N u r a
        </div>
<div className="hidden md:flex items-center gap-8 font-medium text-xs tracking-wide uppercase">
<a className="hover:opacity-70 transition-opacity" href="#features">Intelligence</a>
<a className="hover:opacity-70 transition-opacity" href="#philosophy">Philosophy</a>
<a className="hover:opacity-70 transition-opacity" href="#protocol">Protocol</a>
</div>
<button className="font-medium text-xs uppercase tracking-wide px-4 py-2 rounded-full backdrop-blur-sm transition-colors border bg-white/10 hover:bg-white/20 border-white/10">
            Apply
        </button>
</nav>

<header className="relative h-[100dvh] w-full overflow-hidden flex items-end">
<div className="absolute inset-0 w-full h-full">
<img alt="Dark Forest" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-moss/40 via-moss/80 to-charcoal"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32">
<div className="max-w-4xl hero-content">
<p className="hero-anim text-clay font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse"></span>
                    System Initialized
                </p>
<h1 className="flex flex-col gap-2">
<span className="hero-anim font-display font-medium text-5xl md:text-7xl lg:text-[6rem] tracking-tighter text-cream leading-none">
                        Nature is the
                    </span>
<span className="hero-anim font-serif italic font-medium text-6xl md:text-8xl lg:text-[8rem] tracking-tight text-cream leading-none mt-2 pr-4">
                        Algorithm.
                    </span>
</h1>
<p className="hero-anim mt-10 text-cream/70 font-sans text-sm md:text-base max-w-md leading-relaxed">
                    Bridging biological telemetry with precision protocols. We don't guess; we compute optimal human vitality.
                </p>
</div>
</div>
</header>

<section className="py-32 bg-cream relative z-20 rounded-t-[3rem] -mt-10 overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-charcoal">Functional Telemetry</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-moss/10 rounded-[2rem] p-8 h-[28rem] relative flex flex-col bg-white">
<div className="flex items-center justify-between mb-8">
<span className="font-mono text-xs text-moss uppercase tracking-wider">Audit Intel</span>
<iconify-icon className="text-xl text-moss/50" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative flex-1 flex justify-center items-center mt-4 perspective-[1000px]" id="shuffler-container">

<div className="shuffler-card absolute w-full max-w-[200px] bg-cream border border-moss/10 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center gap-2">
<span className="text-xs text-charcoal/60 uppercase tracking-wide">Epigenetic Age</span>
<span className="font-serif italic text-3xl text-moss">32.4</span>
</div>
<div className="shuffler-card absolute w-full max-w-[200px] bg-cream border border-moss/10 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center gap-2">
<span className="text-xs text-charcoal/60 uppercase tracking-wide">Microbiome Score</span>
<span className="font-serif italic text-3xl text-moss">94/100</span>
</div>
<div className="shuffler-card absolute w-full max-w-[200px] bg-cream border border-moss/10 rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center gap-2">
<span className="text-xs text-charcoal/60 uppercase tracking-wide">Cortisol Opt.</span>
<span className="font-serif italic text-3xl text-moss">Peak</span>
</div>
</div>
</div>

<div className="bg-charcoal rounded-[2rem] p-8 h-[28rem] flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 bg-moss/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex items-center justify-between mb-auto relative z-10">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-clay animate-pulse shadow-[0_0_8px_rgba(204,88,51,0.6)]"></span>
<span className="font-mono text-xs text-cream/70 uppercase tracking-wider">Live Stream</span>
</div>
<iconify-icon className="text-xl text-cream/30" icon="solar:code-scan-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="mt-8 relative z-10 h-full flex flex-col justify-end pb-4">
<div className="font-mono text-sm text-moss mb-2">&gt; system.connect()</div>
<div className="font-mono text-sm text-cream/90 min-h-[4rem] typing-cursor" id="typewriter"></div>
</div>
</div>

<div className="border border-moss/10 rounded-[2rem] p-8 h-[28rem] flex flex-col relative overflow-hidden bg-white">
<div className="flex items-center justify-between mb-8">
<span className="font-mono text-xs text-moss uppercase tracking-wider">Protocol Schedule</span>
<iconify-icon className="text-xl text-moss/50" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="grid grid-cols-7 gap-1 w-full mt-4">
<div className="text-[10px] text-center text-charcoal/40 mb-2">S</div>
<div className="text-[10px] text-center text-charcoal/40 mb-2">M</div>
<div className="text-[10px] text-center text-charcoal/40 mb-2">T</div>
<div className="text-[10px] text-center text-charcoal/40 mb-2">W</div>
<div className="text-[10px] text-center text-charcoal/40 mb-2">T</div>
<div className="text-[10px] text-center text-charcoal/40 mb-2">F</div>
<div className="text-[10px] text-center text-charcoal/40 mb-2">S</div>

<div className="aspect-square rounded-md bg-cream border border-moss/5"></div>
<div className="aspect-square rounded-md bg-cream border border-moss/5"></div>
<div className="aspect-square rounded-md bg-moss/20 border border-moss/10" id="target-day"></div>
<div className="aspect-square rounded-md bg-cream border border-moss/5"></div>
<div className="aspect-square rounded-md bg-cream border border-moss/5"></div>
<div className="aspect-square rounded-md bg-cream border border-moss/5"></div>
<div className="aspect-square rounded-md bg-cream border border-moss/5"></div>
</div>
<div className="mt-auto pt-6 flex justify-between items-center border-t border-moss/5">
<div className="text-xs text-charcoal/60">Week 04</div>
<div className="text-[10px] uppercase tracking-wider bg-moss text-cream px-3 py-1.5 rounded-full transition-transform" id="save-btn">Save</div>
</div>

<svg className="absolute w-5 h-5 drop-shadow-md z-20 pointer-events-none" fill="none" id="mock-cursor" style={{top: '80%', left: '80%', transform: 'translate(-50%, -50%)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L10.3704 21.8385C10.603 22.4897 11.5367 22.4716 11.7423 21.8122L14.2885 13.6331C14.3828 13.3303 14.6158 13.0907 14.9163 12.9877L23.0134 10.213C23.6661 9.9894 23.6698 9.05607 23.018 8.82855L4 4Z" fill="#1A1A1A" stroke="white" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-40 bg-charcoal text-cream relative overflow-hidden rounded-[3rem] mx-2 md:mx-6 my-10" id="philosophy">

<div className="absolute inset-0 z-0">
<img alt="Organic Texture" className="w-full h-[120%] object-cover opacity-20 filter grayscale" id="parallax-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply"></div>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<p className="font-mono text-sm text-moss mb-12 uppercase tracking-widest">The Shift</p>
<h3 className="font-sans text-xl md:text-3xl text-cream/40 mb-8 font-light tracking-tight reveal-text">
                Modern medicine asks: What is wrong?
            </h3>
<h2 className="font-serif italic font-medium text-5xl md:text-7xl lg:text-[6rem] tracking-tight leading-[1.1] text-cream reveal-text-main mt-4">
                We ask: What is optimal?
            </h2>
</div>
</section>

<section className="relative bg-cream pb-32" id="protocol">
<div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-charcoal">The Framework</h2>
</div>

<div className="protocol-card sticky top-0 h-screen flex items-center justify-center p-6 pt-24" style={{zIndex: '10'}}>
<div className="protocol-content w-full max-w-5xl border border-moss/10 rounded-[3rem] h-[80vh] shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative bg-white">
<div className="flex-1 z-10">
<span className="font-mono text-xs text-moss uppercase tracking-wider mb-4 block">Phase 01</span>
<h3 className="font-display font-medium text-4xl tracking-tight text-charcoal mb-6">Deep Diagnostics</h3>
<p className="text-charcoal/70 font-sans text-sm md:text-base max-w-md leading-relaxed">
                        Complete biological mapping. We sequence epigenetics, analyze microbiome diversity, and track real-time cellular metabolic outputs.
                    </p>
</div>
<div className="flex-1 relative h-full flex items-center justify-center min-h-[300px]">
<iconify-icon className="text-[12rem] text-moss/20 animate-spin-slow" icon="solar:dna-linear" strokeWidth="1"></iconify-icon>
<iconify-icon className="text-[12rem] text-clay/40 absolute animate-spin-slow" icon="solar:dna-linear" strokeWidth="1" style={{animationDirection: 'reverse'}}></iconify-icon>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-screen flex items-center justify-center p-6 pt-24" style={{zIndex: '20'}}>
<div className="protocol-content w-full max-w-5xl bg-moss border border-charcoal/20 rounded-[3rem] h-[80vh] shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative text-cream">
<div className="flex-1 z-10">
<span className="font-mono text-xs text-clay uppercase tracking-wider mb-4 block">Phase 02</span>
<h3 className="font-display font-medium text-4xl tracking-tight text-cream mb-6">Algorithmic Analysis</h3>
<p className="text-cream/70 font-sans text-sm md:text-base max-w-md leading-relaxed">
                        Data meets machine learning. Millions of data points cross-referenced against global longevity models to identify your specific optimization levers.
                    </p>
</div>
<div className="flex-1 relative w-full h-full min-h-[300px] bg-charcoal/40 rounded-3xl overflow-hidden laser-grid flex items-center justify-center border border-cream/10">
<div className="laser-line"></div>
<iconify-icon className="text-7xl text-cream/20 z-0" icon="solar:cpu-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-screen flex items-center justify-center p-6 pt-24" style={{zIndex: '30'}}>
<div className="protocol-content w-full max-w-5xl bg-charcoal border border-moss/20 rounded-[3rem] h-[80vh] shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative text-cream">
<div className="flex-1 z-10">
<span className="font-mono text-xs text-moss uppercase tracking-wider mb-4 block">Phase 03</span>
<h3 className="font-display font-medium text-4xl tracking-tight text-cream mb-6">Adaptive Synthesis</h3>
<p className="text-cream/70 font-sans text-sm md:text-base max-w-md leading-relaxed">
                        A dynamically adjusting protocol. Supplements, movement, and sleep parameters modified in real-time based on your continuous feedback loop.
                    </p>
</div>
<div className="flex-1 relative w-full h-full flex items-center justify-center min-h-[300px]">
<svg className="w-full h-auto drop-shadow-[0_0_15px_rgba(46,64,54,0.8)]" viewbox="0 0 400 200">
<path d="M 0 100 L 100 100 L 120 50 L 150 150 L 180 20 L 220 180 L 250 80 L 270 100 L 400 100" fill="none" stroke="#2E4036" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path className="ekg-path" d="M 0 100 L 100 100 L 120 50 L 150 150 L 180 20 L 220 180 L 250 80 L 270 100 L 400 100" fill="none" stroke="#CC5833" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cream">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-charcoal mb-4">Access the Lab</h2>
<p className="text-charcoal/60 font-sans text-sm">Select your level of biological engagement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="border border-charcoal/10 rounded-[2rem] p-10 flex flex-col items-start shadow-sm bg-white">
<span className="font-mono text-xs text-charcoal/50 uppercase tracking-wider mb-2">Base</span>
<h4 className="font-display text-2xl text-charcoal mb-6">Foundations</h4>
<div className="mb-8 font-serif italic text-4xl text-charcoal">$249<span className="text-sm font-sans not-italic text-charcoal/50">/mo</span></div>
<ul className="space-y-4 text-sm text-charcoal/70 mb-10 w-full">
<li className="flex items-center gap-3"><iconify-icon className="text-moss" icon="solar:check-circle-linear"></iconify-icon> Quarterly Blood Panel</li>
<li className="flex items-center gap-3"><iconify-icon className="text-moss" icon="solar:check-circle-linear"></iconify-icon> Digital Dashboard</li>
<li className="flex items-center gap-3"><iconify-icon className="text-moss" icon="solar:check-circle-linear"></iconify-icon> Standard Supplements</li>
</ul>
<button className="w-full py-4 rounded-full border border-charcoal/20 text-xs uppercase tracking-wide font-medium hover:bg-charcoal hover:text-cream transition-colors mt-auto">Select</button>
</div>

<div className="bg-moss text-cream border border-moss rounded-[2.5rem] p-12 flex flex-col items-start shadow-2xl relative transform md:scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-clay text-cream text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-mono">Recommended</div>
<span className="font-mono text-xs text-cream/50 uppercase tracking-wider mb-2">Optimize</span>
<h4 className="font-display text-3xl text-cream mb-6">Performance</h4>
<div className="mb-8 font-serif italic text-5xl text-cream">$699<span className="text-sm font-sans not-italic text-cream/50">/mo</span></div>
<ul className="space-y-4 text-sm text-cream/80 mb-10 w-full">
<li className="flex items-center gap-3"><iconify-icon className="text-clay" icon="solar:check-circle-linear"></iconify-icon> Monthly Biomarker Audit</li>
<li className="flex items-center gap-3"><iconify-icon className="text-clay" icon="solar:check-circle-linear"></iconify-icon> Microbiome Sequencing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-clay" icon="solar:check-circle-linear"></iconify-icon> Custom Compounded Rx</li>
</ul>
<button className="magnetic-btn w-full py-4 rounded-full bg-clay text-cream text-xs uppercase tracking-wide font-medium mt-auto">Initiate Protocol</button>
</div>

<div className="border border-charcoal/10 rounded-[2rem] p-10 flex flex-col items-start shadow-sm bg-white">
<span className="font-mono text-xs text-charcoal/50 uppercase tracking-wider mb-2">Limitless</span>
<h4 className="font-display text-2xl text-charcoal mb-6">Apex</h4>
<div className="mb-8 font-serif italic text-4xl text-charcoal">$1,499<span className="text-sm font-sans not-italic text-charcoal/50">/mo</span></div>
<ul className="space-y-4 text-sm text-charcoal/70 mb-10 w-full">
<li className="flex items-center gap-3"><iconify-icon className="text-moss" icon="solar:check-circle-linear"></iconify-icon> Weekly Clinical Review</li>
<li className="flex items-center gap-3"><iconify-icon className="text-moss" icon="solar:check-circle-linear"></iconify-icon> Full Genome Sequencing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-moss" icon="solar:check-circle-linear"></iconify-icon> Dedicated Physiologist</li>
</ul>
<button className="w-full py-4 rounded-full border border-charcoal/20 text-xs uppercase tracking-wide font-medium hover:bg-charcoal hover:text-cream transition-colors mt-auto">Apply</button>
</div>
</div>
</div>
</section>

<footer className="bg-charcoal text-cream rounded-t-[4rem] pt-24 pb-12 px-6 relative z-10 mt-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
<div>
<div className="font-display font-medium tracking-[0.2em] text-2xl uppercase mb-6">N u r a</div>
<div className="flex items-center gap-3 mt-4">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
<span className="font-mono text-[10px] text-cream/50 uppercase tracking-widest">System Operational</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-xs font-mono uppercase tracking-wider text-cream/60">
<div className="flex flex-col gap-4">
<a className="hover:text-cream transition-colors" href="#">Intelligence</a>
<a className="hover:text-cream transition-colors" href="#">Protocols</a>
<a className="hover:text-cream transition-colors" href="#">Case Studies</a>
</div>
<div className="flex flex-col gap-4">
<a className="hover:text-cream transition-colors" href="#">Manifesto</a>
<a className="hover:text-cream transition-colors" href="#">Clinical Team</a>
<a className="hover:text-cream transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4 col-span-2 md:col-span-1">
<a className="hover:text-cream transition-colors" href="#">Client Portal</a>
<a className="hover:text-cream transition-colors" href="#">API Docs</a>
<a className="hover:text-cream transition-colors" href="#">Privacy Auth</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-cream/30 uppercase tracking-widest">
<p>© 2024 Nura Health Systems. All biological rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-cream/80 transition-colors" href="#">Terms</a>
<a className="hover:text-cream/80 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>



    </>
  );
}
