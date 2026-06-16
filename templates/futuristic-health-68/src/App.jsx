import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
moss: '#1A3A1A',     // dim terminal
clay: '#FFB000',     // amber phosphor
cream: '#0D0D0D',    // crt black (background)
charcoal: '#33FF33', // green phosphor (primary)
offwhite: '#0A1A0A'  // deep terminal
},
fontFamily: {
outfit: ['"VT323"', 'monospace'],
jakarta: ['"Fira Code"', 'monospace'],
drama: ['"VT323"', 'monospace'],
mono: ['"Fira Code"', 'monospace'],
},
transitionTimingFunction: {
'organic': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            
            // Register GSAP plugins
            gsap.registerPlugin(ScrollTrigger);

            // Initialize Lenis (Smooth Scroll)
            const lenis = new Lenis({
                lerp: 0.08,
                smoothWheel: true,
                touchMultiplier: 1.5,
            });

            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0, 0);

            // Scroll Progress Bar
            gsap.to('#scroll-progress', {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.1
                }
            });

            // Custom Cursor Logic
            const cursor = document.getElementById('custom-cursor');
            if (window.matchMedia("(hover: hover)").matches) {
                window.addEventListener('mousemove', (e) => {
                    // Smooth tracking
                    gsap.to(cursor, {
                        x: e.clientX,
                        y: e.clientY,
                        duration: 0.15,
                        ease: 'power2.out'
                    });
                });

                document.querySelectorAll('.hover-trigger').forEach(el => {
                    el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                    el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
                });
            }

            // Magnetic Buttons (Smoother)
            const magnetics = document.querySelectorAll('.magnetic-wrap');
            magnetics.forEach(wrap => {
                const btn = wrap.querySelector('button');
                if(!btn) return;
                
                wrap.addEventListener('mousemove', (e) => {
                    const rect = wrap.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
                    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
                    gsap.to(btn, { x, y, duration: 0.4, ease: 'power3.out' });
                });
                wrap.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
                });
            });

            // Scramble Text Effect
            const chars = '!<>-_\\/[]{}—=+*^?#________';
            document.querySelectorAll('.scramble-text').forEach(el => {
                const originalText = el.getAttribute('data-text');
                
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 90%",
                    onEnter: () => scrambleText(el, originalText)
                });
                
                el.addEventListener('mouseenter', () => scrambleText(el, originalText));
            });

            function scrambleText(element, finalString) {
                let iteration = 0;
                clearInterval(element.interval);
                
                element.interval = setInterval(() => {
                    element.innerText = finalString
                        .split("")
                        .map((letter, index) => {
                            if(index < iteration) return finalString[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("");
                    
                    if(iteration >= finalString.length) clearInterval(element.interval);
                    iteration += 1 / 3; 
                }, 30);
            }

            // FAQ Accordion Logic
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const btn = item.querySelector('button');
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');
                
                btn.addEventListener('click', () => {
                    const isOpen = item.classList.contains('active');
                    
                    // Close all others
                    faqItems.forEach(other => {
                        other.classList.remove('active');
                        gsap.to(other.querySelector('.faq-content'), { height: 0, duration: 0.4, ease: 'power3.out' });
                        gsap.to(other.querySelector('.faq-icon'), { rotation: 0, duration: 0.3 });
                    });

                    // Toggle current
                    if (!isOpen) {
                        item.classList.add('active');
                        gsap.set(content, { height: 'auto' });
                        const h = content.offsetHeight;
                        gsap.set(content, { height: 0 });
                        gsap.to(content, { height: h, duration: 0.5, ease: 'power3.out' });
                        gsap.to(icon, { rotation: 45, duration: 0.3 });
                    }
                });
            });

            // Context for GSAP Animations
            let ctx = gsap.context(() => {
                
                // Preloader Sequence (Smoother)
                const tlPreload = gsap.timeline();
                
                tlPreload.to('#loader-progress', {
                    scaleX: 1,
                    duration: 2,
                    ease: 'power3.inOut',
                    onUpdate: function() {
                        document.getElementById('loader-percent').innerText = Math.round(this.progress() * 100) + '%';
                    }
                })
                .to('#preloader', {
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power4.inOut',
                    delay: 0.2
                })
                // Hero Reveal
                .to('.hero-image-wrap', {
                    clipPath: 'inset(0 0% 0 0)',
                    duration: 1.2,
                    ease: 'power4.out'
                }, "-=0.4")
                .from('.hero-image', {
                    scale: 1.2,
                    duration: 2,
                    ease: 'power2.out'
                }, "-=1.2")
                .from('.hero-content > *', {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out'
                }, "-=0.8");

                // Global Scroll Reveals (Y-axis) - Smoother
                gsap.utils.toArray('.scroll-reveal-y').forEach(el => {
                    gsap.from(el, {
                        scrollTrigger: { trigger: el, start: "top 85%" },
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power3.out'
                    });
                });

                // Global Scroll Reveals (Stagger children)
                gsap.utils.toArray('.scroll-reveal-stagger').forEach(el => {
                    const html = el.innerHTML;
                    el.innerHTML = `<div class="overflow-hidden"><div class="stagger-el">${html}</div></div>`;
                    
                    gsap.from(el.querySelector('.stagger-el'), {
                        scrollTrigger: { trigger: el, start: "top 85%" },
                        yPercent: 100,
                        opacity: 0,
                        duration: 1,
                        ease: 'power4.out'
                    });
                });

                // F04: Waveform Draw
                gsap.fromTo('.waveform-path', 
                    { strokeDasharray: 1000, strokeDashoffset: 1000 },
                    {
                        strokeDashoffset: 0,
                        duration: 3,
                        ease: 'power2.inOut',
                        scrollTrigger: {
                            trigger: '.waveform-path',
                            start: "top 90%",
                            once: true
                        }
                    }
                );

                // F08: Counter Dash
                const counter = document.querySelector('.counter-val');
                const target = parseFloat(counter.getAttribute('data-target'));
                gsap.to(counter, {
                    scrollTrigger: { trigger: counter, start: "top 90%" },
                    innerHTML: target,
                    duration: 2.5,
                    ease: 'power3.out',
                    snap: { innerHTML: 0.1 },
                    onUpdate: function() {
                        counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                    }
                });

                // Footer Parallax
                gsap.from('#footer-brand', {
                    scrollTrigger: {
                        trigger: '#footer',
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: 1
                    },
                    y: -100,
                    opacity: 0,
                    scale: 0.95,
                    ease: 'none'
                });

            }); // end ctx

            // Cleanup on unload
            window.addEventListener("unload", () => {
                ctx.revert();
                lenis.destroy();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 right-0 w-[2px] h-full bg-charcoal/10 z-[9999]">
<div className="w-full h-full bg-clay" id="scroll-progress"></div>
</div>

<div className="noise-bg"></div>

<div id="custom-cursor"></div>

<div className="fixed inset-0 z-[500] bg-cream flex items-center justify-center flex-col" id="preloader">
<div className="overflow-hidden mb-6">
<h1 className="font-outfit text-4xl tracking-tighter text-charcoal font-medium scramble-text" data-text="&gt; BOOT_SEQ..." id="loader-brand">&gt; BOOT_SEQ...</h1>
</div>
<div className="w-64 h-[1px] bg-charcoal/20 relative">
<div className="absolute top-0 left-0 h-full bg-charcoal origin-left scale-x-0 shadow-[0_0_10px_#33FF33]" id="loader-progress"></div>
</div>
<div className="mt-6 flex justify-between w-64 font-mono text-xs text-charcoal/50 tracking-widest uppercase">
<span>SYS.MEM</span>
<span className="text-clay" id="loader-percent">0%</span>
</div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-7xl flex items-center justify-between px-6 py-4 rounded-none bg-cream/80 backdrop-blur-md border border-charcoal/30 transition-colors duration-300" id="navbar">
<a className="font-outfit text-2xl tracking-tighter font-medium text-charcoal hover-trigger nav-item scramble-text" data-text="NURA_OS" href="#">NURA_OS</a>
<div className="hidden md:flex items-center gap-12 font-jakarta text-xs font-medium text-charcoal/60">
<a className="hover:text-charcoal transition-colors hover-trigger nav-item relative overflow-hidden group" href="#protocol">
                &gt; PROTOCOL
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal origin-left scale-x-0 transition-transform duration-500 ease-organic group-hover:scale-x-100"></span>
</a>
<a className="hover:text-charcoal transition-colors hover-trigger nav-item relative overflow-hidden group" href="#telemetry">
                &gt; TELEMETRY
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal origin-left scale-x-0 transition-transform duration-500 ease-organic group-hover:scale-x-100"></span>
</a>
<a className="hover:text-charcoal transition-colors hover-trigger nav-item relative overflow-hidden group" href="#faq">
                &gt; LOGS
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-charcoal origin-left scale-x-0 transition-transform duration-500 ease-organic group-hover:scale-x-100"></span>
</a>
</div>
<button className="text-charcoal px-6 py-2 rounded-none text-xs font-medium hover-trigger transition-all overflow-hidden group relative border border-charcoal/30 hover:border-charcoal hover:shadow-[0_0_15px_rgba(51,255,51,0.2)] bg-charcoal/5">
<span className="relative z-10">&gt; INIT_ACCESS</span>
</button>
</nav>
<main>

<section className="relative min-h-[100dvh] flex flex-col md:flex-row overflow-hidden border-b border-charcoal/20">

<div className="w-full md:w-[55%] h-[50dvh] md:h-[100dvh] relative z-0 hero-image-wrap clip-hero border-r border-charcoal/20">
<img alt="Dark biological flora" className="w-full h-full object-cover object-center scale-110 hero-image crt-image opacity-70" loading="lazy" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-cream via-transparent to-transparent"></div>
</div>

<div className="w-full md:w-[45%] bg-cream text-charcoal flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 min-h-[50dvh] md:min-h-[100dvh] z-10 relative">
<div className="hero-content relative z-10">
<div className="font-mono text-xs tracking-widest uppercase text-clay mb-8 flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse shadow-[0_0_8px_#FFB000]"></span>
                        SYSTEM ONLINE
                    </div>
<h1 className="font-outfit text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.85] font-medium mb-8">
                        &gt; INITIATING <br/>
<span className="font-jakarta text-charcoal/50 text-4xl md:text-5xl lg:text-6xl tracking-tight block mt-2">TELEMETRY_</span>
</h1>
<p className="font-jakarta text-sm text-charcoal/60 max-w-md leading-relaxed mb-12 text-balance uppercase border-l border-charcoal/20 pl-4">
                        Precision longevity medicine engineered from your cellular data. Continuous extraction meets epigenetic intervention.
                    </p>
<div className="flex items-center gap-6 group hover-trigger cursor-pointer w-max">
<div className="w-12 h-[1px] bg-charcoal/40 group-hover:w-24 group-hover:bg-charcoal transition-all duration-500 ease-organic"></div>
<span className="font-mono text-xs text-charcoal/50 uppercase tracking-widest group-hover:text-charcoal transition-colors">SCROLL_DOWN</span>
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(51,255,51,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,255,51,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
</div>
</section>

<section className="relative min-h-[100dvh] py-32 bg-cream px-6 border-b border-charcoal/20" id="protocol">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 scroll-reveal-y">
<div>
<div className="font-mono text-xs text-clay mb-4 uppercase tracking-widest">&gt; SYS.MODULES</div>
<h2 className="font-outfit text-5xl md:text-6xl tracking-tight font-medium text-charcoal uppercase">
                            NURA_PROTOCOL
                        </h2>
</div>
<p className="font-mono text-xs text-charcoal/50 max-w-xs mt-6 md:mt-0 uppercase tracking-widest leading-relaxed">
                        Data harvesting meets physiological intervention.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="feature-card glow-border relative bg-offwhite/50 backdrop-blur-sm p-8 min-h-[28rem] flex flex-col justify-between border border-charcoal/20 hover-trigger overflow-hidden group transition-all duration-500 hover:bg-offwhite">
<div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-charcoal/10 group-hover:border-charcoal/30 transition-colors"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-12">
<div className="font-mono text-xs text-charcoal/40 group-hover:text-clay transition-colors">01</div>
<iconify-icon className="text-xl text-charcoal/40 group-hover:text-charcoal transition-colors" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="font-outfit text-3xl font-medium text-charcoal mb-4 uppercase">&gt; Mapping</h3>
<p className="font-jakarta text-xs text-charcoal/60 leading-relaxed max-w-[90%] uppercase">Extraction of 10^6 biological data points per millisecond.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-32 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 400 100">
<path className="waveform-path" d="M0,50 L50,50 L60,20 L70,80 L80,50 L150,50 L160,30 L170,70 L180,50 L250,50 L260,10 L270,90 L280,50 L400,50" fill="none" stroke="#33FF33" strokeLinecap="square" strokeWidth="1"></path>
</svg>
</div>
</div>

<div className="feature-card glow-border relative bg-offwhite/50 backdrop-blur-sm p-8 min-h-[28rem] flex flex-col justify-between border border-charcoal/20 hover-trigger overflow-hidden group transition-all duration-500 hover:bg-offwhite">
<div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-charcoal/10 group-hover:border-charcoal/30 transition-colors"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-12">
<div className="font-mono text-xs text-charcoal/40 group-hover:text-clay transition-colors">02</div>
<iconify-icon className="text-xl text-charcoal/40 group-hover:text-charcoal transition-colors" icon="solar:radar-linear"></iconify-icon>
</div>
<h3 className="font-outfit text-3xl font-medium text-charcoal mb-4 uppercase">&gt; Forecasting</h3>
<p className="font-jakarta text-xs text-charcoal/60 leading-relaxed max-w-[90%] uppercase">Predicting physiological decay before clinical manifestation.</p>
</div>
<div className="mt-auto relative z-10 border-t border-charcoal/20 pt-6 group-hover:border-charcoal/50 transition-colors">
<div className="flex items-baseline gap-2 text-charcoal">
<span className="counter-val font-outfit text-6xl tracking-tighter font-medium" data-target="99.8">0.0</span>
<span className="font-mono text-xs text-clay">%</span>
</div>
<div className="font-mono text-[10px] text-charcoal/40 uppercase tracking-widest mt-2">&gt; ACCURACY_RATING</div>
</div>
</div>

<div className="feature-card glow-border relative bg-offwhite/50 backdrop-blur-sm p-8 min-h-[28rem] flex flex-col justify-between border border-charcoal/20 hover-trigger overflow-hidden group transition-all duration-500 hover:bg-offwhite">
<div className="absolute top-0 right-0 w-16 h-16 border-l border-b border-charcoal/10 group-hover:border-charcoal/30 transition-colors z-20"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-12">
<div className="font-mono text-xs text-charcoal/40 group-hover:text-clay transition-colors">03</div>
<iconify-icon className="text-xl text-charcoal/40 group-hover:text-charcoal transition-colors" icon="solar:dna-linear"></iconify-icon>
</div>
<h3 className="font-outfit text-3xl font-medium text-charcoal mb-4 uppercase">&gt; Reversal</h3>
<p className="font-jakarta text-xs text-charcoal/60 leading-relaxed max-w-[90%] uppercase">Targeted molecular therapeutics to restore cellular state.</p>
</div>
<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-screen">
<img alt="Microscopy" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 crt-image" src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 z-10 translate-y-[-100%] group-hover:animate-[scan_2s_linear_infinite]"></div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-cream px-6 border-b border-charcoal/20 overflow-hidden" id="telemetry">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 scroll-reveal-y">
<h2 className="font-outfit text-4xl md:text-5xl tracking-tight text-charcoal uppercase mb-4 scramble-text" data-text="&gt; LIVE_TELEMETRY">&gt; LIVE_TELEMETRY</h2>
<p className="font-mono text-xs text-charcoal/50 uppercase tracking-widest">Global user biometrics // Encrypted</p>
</div>

<div className="border border-charcoal/20 bg-offwhite/30 backdrop-blur-sm rounded-none overflow-hidden scroll-reveal-y hover-trigger group">

<div className="border-b border-charcoal/20 bg-charcoal/5 px-4 py-3 flex items-center justify-between">
<div className="flex gap-2">
<div className="w-2 h-2 bg-charcoal/30 rounded-full"></div>
<div className="w-2 h-2 bg-charcoal/30 rounded-full"></div>
<div className="w-2 h-2 bg-clay/50 rounded-full"></div>
</div>
<div className="font-mono text-[10px] text-charcoal/40 uppercase tracking-widest">TERMINAL.EXE - ROOT ACCESS</div>
</div>

<div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

<div className="col-span-1 space-y-6">
<div>
<div className="font-mono text-[10px] text-clay uppercase tracking-widest mb-2">HEART_RATE_VRIABILITY</div>
<div className="font-outfit text-4xl text-charcoal">84<span className="text-lg text-charcoal/40">ms</span></div>
</div>
<div className="w-full h-[1px] bg-charcoal/10"></div>
<div>
<div className="font-mono text-[10px] text-clay uppercase tracking-widest mb-2">TELOMERE_LENGTH</div>
<div className="font-outfit text-4xl text-charcoal">6.2<span className="text-lg text-charcoal/40">kb</span></div>
</div>
<div className="w-full h-[1px] bg-charcoal/10"></div>
<div className="pt-4">
<div className="font-mono text-xs text-charcoal/60 uppercase leading-relaxed typewriter-text h-16">
                                    &gt; Analysing mitochondrial function...
                                    &gt; Optimizing NAD+ levels...
                                    &gt; Process complete.
                                </div>
</div>
</div>

<div className="col-span-1 md:col-span-2 relative h-64 md:h-auto border border-charcoal/10 bg-charcoal/[0.02] p-4 flex items-end gap-2 md:gap-4 group-hover:border-charcoal/30 transition-colors">
<div className="absolute top-4 left-4 font-mono text-[10px] text-charcoal/40 uppercase">&gt; CELLULAR_REJUVENATION_INDEX</div>

<div className="w-full bg-charcoal/20 transition-all duration-1000 group-hover:bg-charcoal/60" style={{height: '30%'}}></div>
<div className="w-full bg-charcoal/20 transition-all duration-1000 delay-75 group-hover:bg-charcoal/40" style={{height: '45%'}}></div>
<div className="w-full bg-charcoal/20 transition-all duration-1000 delay-100 group-hover:bg-charcoal/70" style={{height: '60%'}}></div>
<div className="w-full bg-charcoal/20 transition-all duration-1000 delay-150 group-hover:bg-charcoal/50" style={{height: '40%'}}></div>
<div className="w-full bg-charcoal/20 transition-all duration-1000 delay-200 group-hover:bg-charcoal/80" style={{height: '75%'}}></div>
<div className="w-full bg-charcoal/20 transition-all duration-1000 delay-300 group-hover:bg-charcoal/90" style={{height: '85%'}}></div>
<div className="w-full bg-charcoal/40 transition-all duration-1000 delay-500 group-hover:bg-clay shadow-[0_0_15px_rgba(255,176,0,0.2)]" style={{height: '100%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-cream px-6 border-b border-charcoal/20" id="faq">
<div className="max-w-4xl mx-auto">
<div className="mb-16 scroll-reveal-y flex flex-col md:flex-row justify-between items-end border-b border-charcoal/20 pb-8">
<h2 className="font-outfit text-4xl md:text-5xl tracking-tight text-charcoal uppercase scramble-text" data-text="&gt; SYSTEM_LOGS">&gt; SYSTEM_LOGS</h2>
<span className="font-mono text-xs text-charcoal/40 uppercase tracking-widest mt-4 md:mt-0">QUERY_DATABASE</span>
</div>
<div className="space-y-0">

<div className="faq-item border-b border-charcoal/10 group scroll-reveal-y">
<button className="w-full py-6 flex justify-between items-center hover-trigger text-left">
<span className="font-jakarta text-sm text-charcoal/80 uppercase group-hover:text-charcoal transition-colors">01 // What is epigenetic reversal?</span>
<iconify-icon className="text-charcoal/40 text-xl group-hover:text-charcoal transition-transform duration-300 faq-icon" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-500 ease-organic">
<p className="font-jakarta text-xs text-charcoal/50 leading-relaxed pb-6 uppercase max-w-2xl">
                                It is the process of resetting the molecular markers on your DNA that accumulate with age. By targeting specific Yamanaka factors, we instruct aged cells to return to a youthful, functional state without losing their identity.
                            </p>
</div>
</div>

<div className="faq-item border-b border-charcoal/10 group scroll-reveal-y">
<button className="w-full py-6 flex justify-between items-center hover-trigger text-left">
<span className="font-jakarta text-sm text-charcoal/80 uppercase group-hover:text-charcoal transition-colors">02 // How is telemetry collected?</span>
<iconify-icon className="text-charcoal/40 text-xl group-hover:text-charcoal transition-transform duration-300 faq-icon" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-500 ease-organic">
<p className="font-jakarta text-xs text-charcoal/50 leading-relaxed pb-6 uppercase max-w-2xl">
                                Data is harvested through a combination of continuous subcutaneous biosensors and monthly liquid biopsies. This streams directly to the NURA_OS node, forming a high-fidelity digital twin of your physiology.
                            </p>
</div>
</div>

<div className="faq-item border-b border-charcoal/10 group scroll-reveal-y">
<button className="w-full py-6 flex justify-between items-center hover-trigger text-left">
<span className="font-jakarta text-sm text-charcoal/80 uppercase group-hover:text-charcoal transition-colors">03 // Is the protocol safe?</span>
<iconify-icon className="text-charcoal/40 text-xl group-hover:text-charcoal transition-transform duration-300 faq-icon" icon="solar:add-linear"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-500 ease-organic">
<p className="font-jakarta text-xs text-charcoal/50 leading-relaxed pb-6 uppercase max-w-2xl">
                                Protocol safety is dynamically governed by our AI oversight system. Interventions are micro-dosed and monitored in real-time. If telemetry indicates deviation from optimal trajectories, the protocol halts instantly.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[50dvh] bg-offwhite py-32 flex flex-col items-center justify-center px-6 border-b border-charcoal/20 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-5">
<iconify-icon className="w-full h-full text-[40rem]" icon="solar:dna-linear"></iconify-icon>
</div>
<div className="relative z-10 text-center flex flex-col items-center">
<iconify-icon className="text-clay text-2xl mb-8 scroll-reveal-y animate-spin-slow" icon="solar:asterisk-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-outfit text-3xl md:text-5xl text-charcoal max-w-3xl text-center leading-[1.1] tracking-tight scroll-reveal-stagger uppercase">
                    &gt; THE LIMIT OF HUMAN LIFESPAN IS AN ENGINEERING PROBLEM. <br/><span className="text-charcoal/40 block mt-2">&gt; AND ENGINEERING PROBLEMS HAVE SOLUTIONS.</span>
</h2>
<div className="mt-12 font-mono text-[10px] text-charcoal/40 uppercase tracking-widest scroll-reveal-y border border-charcoal/20 px-4 py-2 rounded-full">SYS_AUTHOR: DR. ARIS VANE</div>
</div>
</section>

<section className="relative min-h-[60dvh] bg-cream py-32 flex flex-col items-center justify-center overflow-hidden border-b border-charcoal/20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-charcoal opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 text-center flex flex-col items-center px-6 w-full max-w-2xl">
<div className="font-mono text-xs text-clay mb-6 uppercase tracking-widest scramble-text" data-text="&gt; READY_STATE">&gt; READY_STATE</div>
<h2 className="font-outfit text-5xl md:text-7xl font-medium tracking-tight text-charcoal mb-12 uppercase leading-[0.9]">
                    EXECUTE <br/>
<span className="text-charcoal/30">SEQUENCE.</span>
</h2>
<div className="magnetic-wrap hover-trigger w-full md:w-auto" id="gravity-btn-wrap">
<button className="w-full md:w-auto relative bg-transparent text-charcoal border border-charcoal/30 px-12 py-5 text-sm font-jakarta font-medium flex items-center justify-center gap-4 transition-all duration-500 ease-organic hover:border-charcoal hover:shadow-[0_0_30px_rgba(51,255,51,0.15)] group overflow-hidden uppercase tracking-wider">

<div className="absolute inset-0 bg-charcoal translate-y-[101%] transition-transform duration-500 ease-organic group-hover:translate-y-0 z-0"></div>
<span className="relative z-10 group-hover:text-cream transition-colors duration-300">&gt; REQUEST_CONSULTATION</span>
<iconify-icon className="relative z-10 text-lg group-hover:translate-x-2 group-hover:text-cream transition-all duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="mt-8 flex items-center gap-4 border-t border-charcoal/10 pt-8 w-full justify-center">
<span className="w-2 h-2 rounded-full bg-clay/50 animate-pulse"></span>
<p className="font-mono text-[10px] text-charcoal/40 uppercase tracking-widest">WAITLIST_CAPACITY: 420 // <span className="text-charcoal/70">SECURE CONNECTION</span></p>
</div>
</div>
</section>

<footer className="bg-offwhite min-h-[80dvh] flex flex-col justify-end pt-24 pb-8 px-8 md:px-16 overflow-hidden relative" id="footer">

<div className="absolute inset-0 bg-[linear-gradient(rgba(51,255,51,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(51,255,51,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0"></div>
<div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-24 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 font-jakarta text-xs text-charcoal/60 w-full md:w-auto mb-16 md:mb-0">
<div className="flex flex-col gap-4">
<h4 className="font-mono text-[10px] text-clay uppercase tracking-widest mb-2 border-b border-charcoal/20 pb-2">/PROTOCOL</h4>
<a className="hover:text-charcoal transition-colors w-max" href="#">&gt; TELEMETRY</a>
<a className="hover:text-charcoal transition-colors w-max" href="#">&gt; FORECASTING</a>
<a className="hover:text-charcoal transition-colors w-max" href="#">&gt; INTERVENTION</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-mono text-[10px] text-clay uppercase tracking-widest mb-2 border-b border-charcoal/20 pb-2">/SYSTEM</h4>
<a className="hover:text-charcoal transition-colors w-max" href="#">&gt; MANIFESTO</a>
<a className="hover:text-charcoal transition-colors w-max" href="#">&gt; LOGS</a>
<a className="hover:text-charcoal transition-colors w-max" href="#">&gt; PROCESSES</a>
</div>
<div className="flex flex-col gap-4 col-span-2 md:col-span-1">
<h4 className="font-mono text-[10px] text-clay uppercase tracking-widest mb-2 border-b border-charcoal/20 pb-2">/ROOT</h4>
<a className="hover:text-charcoal transition-colors w-max" href="#">&gt; SECURE</a>
<a className="hover:text-charcoal transition-colors w-max" href="#">&gt; TERMS</a>
<div className="mt-4 flex gap-4 text-xl">
<a className="hover:text-charcoal transition-colors" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-charcoal transition-colors" href="#"><iconify-icon icon="solar:link-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="text-left md:text-right font-mono text-[10px] text-charcoal/40 uppercase tracking-widest">
<p className="flex items-center gap-2 md:justify-end"><span className="w-1.5 h-1.5 bg-clay block rounded-full"></span> SYSTEM_HALTED.</p>
<p className="mt-2">&gt; (C) 2026 NURA_OS_V4.2</p>
</div>
</div>

<div className="w-full relative z-0 flex justify-center items-end border-t border-charcoal/10 pt-8" id="footer-brand">
<h2 className="font-outfit font-medium tracking-tighter text-[20vw] leading-[0.75] text-charcoal/[0.03] select-none hover:text-charcoal/[0.05] transition-colors duration-1000">NURA_OS</h2>
</div>
</footer>
</main>

<style>
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(400%); }
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
        }
    </style>


    </>
  );
}
