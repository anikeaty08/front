import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        window.addEventListener("load", () => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Magnetic Button Effect
            document.querySelectorAll('.magnetic-btn').forEach(btn => {
                btn.addEventListener('mousemove', e => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(btn, {x: x * 0.2, y: y * 0.2, scale: 1.03, ease: "power2.out", duration: 0.3});
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, {x: 0, y: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 0.7});
                });
            });

            // 2. Navbar Morphing
            const nav = document.getElementById('navbar');
            ScrollTrigger.create({
                start: 'top -50',
                onUpdate: self => {
                    if(window.scrollY > 50) {
                        nav.classList.add('bg-[#FAF8F5]/80', 'backdrop-blur-xl', 'border-[#2A2A35]/10', 'text-[#0D0D12]');
                        nav.classList.remove('bg-transparent', 'text-[#FAF8F5]', 'border-transparent');
                    } else {
                        nav.classList.add('bg-transparent', 'text-[#FAF8F5]', 'border-transparent');
                        nav.classList.remove('bg-[#FAF8F5]/80', 'backdrop-blur-xl', 'border-[#2A2A35]/10', 'text-[#0D0D12]');
                    }
                }
            });

            // 3. Hero Entrance Animation
            gsap.from('.hero-text', {
                y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2
            });

            // 4. Diagnostic Shuffler Array Logic
            const shufflerData = [
                { id: "01", label: "Cortisol baseline", value: "Normal" },
                { id: "02", label: "Synaptic load", value: "Elevated" },
                { id: "03", label: "Focus depth", value: "Optimal" }
            ];
            const shufflerContainer = document.getElementById('shuffler-container');
            
            // Build DOM elements
            shufflerData.forEach((data, i) => {
                const el = document.createElement('div');
                el.className = 'shuffle-card absolute w-full h-24 bg-[#0D0D12] rounded-[1rem] p-4 text-[#FAF8F5] shadow-xl border border-[#C9A84C]/20 flex flex-col justify-between';
                el.innerHTML = `
                    <div class="flex justify-between items-start w-full">
                        <span class="font-['JetBrains_Mono'] text-[#C9A84C] text-[10px]">SRC_${data.id}</span>
                        <iconify-icon icon="solar:health-linear" class="text-white/50"></iconify-icon>
                    </div>
                    <div class="flex justify-between items-end w-full">
                        <span class="text-xs font-medium">${data.label}</span>
                        <span class="text-[10px] bg-white/10 px-2 py-1 rounded text-white/80">${data.value}</span>
                    </div>
                `;
                shufflerContainer.appendChild(el);
            });

            const shuffleCardsDOM = gsap.utils.toArray('.shuffle-card');
            let shuffleStates = [
                { y: 0, scale: 1, zIndex: 30, opacity: 1 },
                { y: 16, scale: 0.92, zIndex: 20, opacity: 0.7 },
                { y: 32, scale: 0.84, zIndex: 10, opacity: 0.3 }
            ];
            
            // Initial Set
            shuffleCardsDOM.forEach((card, i) => gsap.set(card, shuffleStates[i]));

            // Interval Loop
            setInterval(() => {
                shuffleStates.unshift(shuffleStates.pop()); // Cycle states
                shuffleCardsDOM.forEach((card, i) => {
                    gsap.to(card, {
                        ...shuffleStates[i],
                        duration: 0.8,
                        ease: "back.out(1.2)"
                    });
                });
            }, 3000);

            // 5. Telemetry Typewriter
            const twSpan = document.getElementById('tw-text');
            const twMessages = [
                "Initializing neural link...", 
                "Parsing theta wave density...", 
                "Circadian rhythm match: 94%", 
                "Compiling focus protocol..."
            ];
            let msgIdx = 0, charIdx = 0, isDeleting = false;
            
            function typeWriter() {
                const currentMsg = twMessages[msgIdx];
                if(isDeleting) {
                    twSpan.innerText = currentMsg.substring(0, charIdx--);
                } else {
                    twSpan.innerText = currentMsg.substring(0, charIdx++);
                }
                
                let speed = isDeleting ? 20 : 60;
                
                if(!isDeleting && charIdx === currentMsg.length + 1) {
                    speed = 2500; // Pause at end of sentence
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    msgIdx = (msgIdx + 1) % twMessages.length;
                    speed = 500; // Pause before new sentence
                }
                setTimeout(typeWriter, speed);
            }
            setTimeout(typeWriter, 1500);

            // 6. Cursor Protocol Scheduler SVG Animation
            const cursor = document.getElementById('cursor-svg');
            const targetCell = document.getElementById('target-cell');
            const targetBtn = document.getElementById('target-btn');
            
            const scheduleTl = gsap.timeline({repeat: -1, repeatDelay: 1.5});
            scheduleTl.set(cursor, {x: -20, y: -20})
                .to(cursor, {duration: 1.2, x: 125, y: 45, ease: 'power2.inOut'}) // Move to Wed cell
                .to(cursor, {scale: 0.8, duration: 0.1, yoyo: true, repeat: 1}) // Click
                .to(targetCell, {backgroundColor: '#C9A84C', borderColor: '#C9A84C', duration: 0.2}, "-=0.1")
                .to(cursor, {duration: 1, x: 140, y: 155, ease: 'power2.inOut'}) // Move to Button
                .to(cursor, {scale: 0.8, duration: 0.1, yoyo: true, repeat: 1}) // Click
                .to(targetBtn, {scale: 0.95, duration: 0.1, yoyo: true, repeat: 1}, "-=0.1")
                .to(targetCell, {backgroundColor: 'transparent', borderColor: 'rgba(42,42,53,0.1)', duration: 0.4, delay: 0.8}) // Reset cell
                .to(cursor, {opacity: 0, duration: 0.3}, "-=0.2")
                .set(cursor, {x: -20, y: -20, opacity: 1});

            // 7. Philosophy Section Parallax & Reveal
            gsap.to('#ph-texture', {
                y: "-20%",
                ease: "none",
                scrollTrigger: {
                    trigger: '#philosophy',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.from('.ph-line', {
                y: 30, opacity: 0, duration: 1.2, stagger: 0.3, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#philosophy',
                    start: "top 65%"
                }
            });

            // 8. Protocol Sticky Stacking Mechanics
            const protocolCards = gsap.utils.toArray('.protocol-card');
            protocolCards.forEach((card, i) => {
                if (i < protocolCards.length - 1) {
                    const inner = card.querySelector('.protocol-inner');
                    gsap.to(inner, {
                        scale: 0.92,
                        filter: "blur(12px)",
                        opacity: 0.4,
                        scrollTrigger: {
                            trigger: protocolCards[i+1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true
                        }
                    });
                }
            });

            // 9. Protocol Animations
            // Laser scan
            gsap.to('#laser-line', {
                top: "100%",
                duration: 2.5,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

            // EKG Path
            gsap.to('#ekg-path', {
                strokeDashoffset: 0,
                duration: 2.5,
                ease: "none",
                repeat: -1
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg style={{pointerEvents: 'none', position: 'fixed', inset: '0', zIndex: '9999', height: '100vh', width: '100vw', opacity: '0.05', mixBlendMode: 'overlay'}}>
<filter id="noiseFilter">
<feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-8 py-4 rounded-[2rem] transition-all duration-500 w-[92%] max-w-5xl bg-transparent text-[#FAF8F5] border border-transparent" id="navbar">
<div className="text-xs font-semibold tracking-tighter uppercase">AICOFFEECHAT</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-tight">
<a className="hover:-translate-y-[1px] transition-transform duration-300" href="#features">Telemetry</a>
<a className="hover:-translate-y-[1px] transition-transform duration-300" href="#philosophy">Philosophy</a>
<a className="hover:-translate-y-[1px] transition-transform duration-300" href="#protocol">Protocol</a>
</div>
<button className="magnetic-btn relative overflow-hidden group bg-[#C9A84C] text-[#0D0D12] rounded-[2rem] px-5 py-2.5 text-xs font-medium tracking-tight hover:-translate-y-[1px] transition-transform duration-300">
<span className="absolute inset-0 bg-[#FAF8F5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
<span className="relative z-10 transition-colors duration-500 group-hover:text-[#0D0D12]">Initiate</span>
</button>
</nav>

<section className="relative h-[100dvh] w-full flex items-end pb-24 pl-6 md:pl-20 overflow-hidden bg-[#0D0D12]">

<img alt="Luxury Architecture" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/60 to-transparent z-10"></div>
<div className="relative z-20 flex flex-col items-start w-full max-w-4xl">
<h1 className="hero-text font-['Inter'] text-2xl md:text-5xl font-medium tracking-tight text-[#FAF8F5]">
                Cognitive mastery meets
            </h1>
<h2 className="hero-text font-['Playfair_Display'] italic text-[5rem] md:text-[10rem] leading-[0.9] text-[#C9A84C] tracking-tight mt-1 md:mt-2">
                Precision.
            </h2>
<div className="hero-text mt-10 md:mt-16">
<button className="magnetic-btn relative overflow-hidden group bg-[#FAF8F5] text-[#0D0D12] rounded-[2rem] px-8 py-4 text-sm font-medium tracking-tight hover:-translate-y-[1px] transition-transform duration-300">
<span className="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
<span className="relative z-10 group-hover:text-[#0D0D12] transition-colors duration-500 flex items-center gap-2">
                        Request Access
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 bg-[#FAF8F5] relative z-20" id="features">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="feature-card bg-white rounded-[2rem] border border-[#2A2A35]/10 shadow-sm p-8 flex flex-col gap-8 h-[28rem]">
<div className="flex flex-col gap-2">
<h3 className="text-lg font-medium tracking-tight text-[#0D0D12]">Biomarker Tracking</h3>
<p className="text-sm text-[#2A2A35]/60 leading-relaxed">Continuous cellular analysis cycles dynamically to isolate performance degradation.</p>
</div>
<div className="relative w-full h-full flex items-center justify-center">
<div className="relative w-full max-w-[16rem] h-32" id="shuffler-container">

</div>
</div>
</div>

<div className="feature-card bg-white rounded-[2rem] border border-[#2A2A35]/10 shadow-sm p-8 flex flex-col gap-8 h-[28rem]">
<div className="flex flex-col gap-2">
<h3 className="text-lg font-medium tracking-tight text-[#0D0D12]">Neural Telemetry</h3>
<p className="text-sm text-[#2A2A35]/60 leading-relaxed">Live-feed synaptic response data translated into actionable focus metrics.</p>
</div>
<div className="w-full h-full bg-[#0D0D12] rounded-[1.5rem] p-5 flex flex-col shadow-inner overflow-hidden relative">
<div className="flex items-center gap-2 mb-4 border-b border-[#2A2A35] pb-3">
<div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse"></div>
<span className="text-[10px] text-[#FAF8F5]/50 font-['JetBrains_Mono'] uppercase tracking-widest">Live Feed</span>
</div>
<div className="font-['JetBrains_Mono'] text-xs text-[#FAF8F5] leading-loose">
<span className="text-[#C9A84C]" id="tw-text"></span><span className="animate-pulse">_</span>
</div>
</div>
</div>

<div className="feature-card bg-white rounded-[2rem] border border-[#2A2A35]/10 shadow-sm p-8 flex flex-col gap-8 h-[28rem]">
<div className="flex flex-col gap-2">
<h3 className="text-lg font-medium tracking-tight text-[#0D0D12]">Adaptive Protocols</h3>
<p className="text-sm text-[#2A2A35]/60 leading-relaxed">Automated cognitive scheduling maps directly to your natural circadian rhythm.</p>
</div>
<div className="w-full h-full bg-[#FAF8F5] rounded-[1.5rem] border border-[#2A2A35]/5 p-5 relative overflow-hidden flex flex-col items-center justify-center">
<div className="grid grid-cols-7 gap-2 w-full mb-6">
<div className="text-[10px] text-center font-medium text-[#2A2A35]/40">S</div>
<div className="text-[10px] text-center font-medium text-[#2A2A35]/40">M</div>
<div className="text-[10px] text-center font-medium text-[#2A2A35]/40">T</div>
<div className="text-[10px] text-center font-medium text-[#2A2A35]/40">W</div>
<div className="text-[10px] text-center font-medium text-[#2A2A35]/40">T</div>
<div className="text-[10px] text-center font-medium text-[#2A2A35]/40">F</div>
<div className="text-[10px] text-center font-medium text-[#2A2A35]/40">S</div>

<div className="h-6 w-full rounded-[0.25rem] border border-[#2A2A35]/10"></div>
<div className="h-6 w-full rounded-[0.25rem] border border-[#2A2A35]/10"></div>
<div className="h-6 w-full rounded-[0.25rem] border border-[#2A2A35]/10"></div>
<div className="h-6 w-full rounded-[0.25rem] border border-[#2A2A35]/10 transition-colors duration-200" id="target-cell"></div>
<div className="h-6 w-full rounded-[0.25rem] border border-[#2A2A35]/10"></div>
<div className="h-6 w-full rounded-[0.25rem] border border-[#2A2A35]/10"></div>
<div className="h-6 w-full rounded-[0.25rem] border border-[#2A2A35]/10"></div>
</div>
<div className="px-4 py-2 rounded-full bg-[#0D0D12] text-[#FAF8F5] text-[10px] font-medium transition-transform" id="target-btn">
                        Engage Routine
                    </div>
<iconify-icon className="absolute text-2xl text-[#2A2A35]" icon="solar:cursor-default-linear" id="cursor-svg" style={{strokeWidth: '1.5', zIndex: '50', top: '-20px', left: '-20px'}}></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative py-40 px-6 md:px-20 bg-[#0D0D12] overflow-hidden flex flex-col justify-center min-h-[80vh]" id="philosophy">

<img className="absolute inset-0 w-full h-[120%] object-cover opacity-[0.15] z-0" id="ph-texture" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center'}}/>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12 md:gap-20">
<p className="ph-line font-['Inter'] text-lg md:text-2xl text-[#FAF8F5]/50 tracking-tight font-medium max-w-2xl">
                Most performance platforms focus on: endless raw data without context or correction.
            </p>
<p className="ph-line font-['Playfair_Display'] italic text-4xl md:text-7xl text-[#FAF8F5] leading-tight md:leading-[1.1] tracking-tight">
                We focus on: <span className="text-[#C9A84C]">Orchestrated clarity.</span>
</p>
</div>
</section>

<section className="relative bg-[#FAF8F5] pb-32" id="protocol">

<div className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center p-6 md:p-12">
<div className="protocol-inner w-full max-w-7xl h-full max-h-[85vh] bg-white rounded-[3rem] border border-[#2A2A35]/10 shadow-2xl flex flex-col md:flex-row overflow-hidden">
<div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center h-full">
<span className="font-['JetBrains_Mono'] text-[#C9A84C] text-sm mb-6">01</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0D0D12] mb-6">Biometric Baseline</h3>
<p className="text-base text-[#2A2A35]/60 leading-relaxed max-w-md">We establish a highly personalized signature of your neural architecture, measuring resting state and peak exertion thresholds.</p>
</div>
<div className="w-full md:w-1/2 bg-[#0D0D12] relative h-full flex items-center justify-center overflow-hidden">

<svg className="w-64 h-64 animate-[spin_20s_linear_infinite] opacity-80" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="80" stroke="#C9A84C" stroke-dasharray="4 8" strokeWidth="1"></circle>
<circle className="animate-[spin_15s_linear_infinite_reverse]" cx="100" cy="100" fill="none" r="60" stroke="#FAF8F5" stroke-dasharray="10 10" strokeWidth="0.5" style={{transformOrigin: 'center'}}></circle>
<path d="M100 0 L100 200 M0 100 L200 100" opacity="0.3" stroke="#C9A84C" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center p-6 md:p-12">
<div className="protocol-inner w-full max-w-7xl h-full max-h-[85vh] bg-white rounded-[3rem] border border-[#2A2A35]/10 shadow-2xl flex flex-col md:flex-row overflow-hidden">
<div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center h-full">
<span className="font-['JetBrains_Mono'] text-[#C9A84C] text-sm mb-6">02</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0D0D12] mb-6">Telemetry Scan</h3>
<p className="text-base text-[#2A2A35]/60 leading-relaxed max-w-md">Real-time analysis overlays your active schedule, identifying cognitive friction points and micro-fatigue markers.</p>
</div>
<div className="w-full md:w-1/2 bg-[#0D0D12] relative h-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201, 168, 76, 0.2) 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>

<div className="absolute left-0 w-full h-[2px] bg-[#C9A84C] z-10" id="laser-line" style={{boxShadow: '0 0 20px 2px #C9A84C', top: '0'}}></div>
</div>
</div>
</div>

<div className="protocol-card sticky top-0 h-[100dvh] w-full flex items-center justify-center p-6 md:p-12">
<div className="protocol-inner w-full max-w-7xl h-full max-h-[85vh] bg-white rounded-[3rem] border border-[#2A2A35]/10 shadow-2xl flex flex-col md:flex-row overflow-hidden">
<div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center h-full">
<span className="font-['JetBrains_Mono'] text-[#C9A84C] text-sm mb-6">03</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0D0D12] mb-6">Adaptive Sync</h3>
<p className="text-base text-[#2A2A35]/60 leading-relaxed max-w-md">Our intelligence engine calibrates your environment and tasks, guiding you into a sustained state of flow.</p>
</div>
<div className="w-full md:w-1/2 bg-[#0D0D12] relative h-full flex items-center justify-center overflow-hidden">

<svg className="opacity-90" height="200" viewbox="0 0 500 200" width="100%">
<path d="M0 100 L150 100 L170 60 L190 150 L210 20 L230 130 L250 100 L500 100" fill="none" id="ekg-path" stroke="#C9A84C" strokeWidth="2" style={{strokeDasharray: '600', strokeDashoffset: '600'}}></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 bg-[#FAF8F5] relative z-20">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0D0D12] mb-20 text-center">Membership Tiers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center">

<div className="bg-white rounded-[2rem] border border-[#2A2A35]/10 p-10 flex flex-col items-start shadow-sm">
<h4 className="font-['JetBrains_Mono'] text-xs text-[#2A2A35]/50 uppercase tracking-widest mb-4">Foundation</h4>
<div className="text-3xl font-medium text-[#0D0D12] mb-2 tracking-tight">Initiate</div>
<p className="text-sm text-[#2A2A35]/60 mb-10 h-10">Essential cognitive mapping for individual professionals.</p>
<ul className="flex flex-col gap-4 text-sm text-[#2A2A35]/80 mb-12 w-full">
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon> Baseline telemetry</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon> Daily rhythm analysis</li>
<li className="flex items-center gap-3 opacity-40"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> Adaptive scheduling</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#2A2A35]/10 text-[#0D0D12] text-sm font-medium hover:bg-[#FAF8F5] transition-colors">Select Tier</button>
</div>

<div className="bg-[#0D0D12] rounded-[2.5rem] border border-[#C9A84C]/30 p-12 flex flex-col items-start shadow-2xl relative z-10 md:scale-105">
<div className="absolute top-6 right-6 bg-[#C9A84C]/10 text-[#C9A84C] text-[10px] font-['JetBrains_Mono'] px-3 py-1 rounded-full border border-[#C9A84C]/20">Most Selected</div>
<h4 className="font-['JetBrains_Mono'] text-xs text-[#C9A84C] uppercase tracking-widest mb-4">Optimization</h4>
<div className="text-4xl font-medium text-[#FAF8F5] mb-2 tracking-tight">Resonance</div>
<p className="text-sm text-[#FAF8F5]/60 mb-10 h-10">Advanced telemetry and real-time protocol adjustments.</p>
<ul className="flex flex-col gap-4 text-sm text-[#FAF8F5]/90 mb-12 w-full">
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon> Continuous telemetry feed</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon> Adaptive scheduling engine</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon> Hardware sensor integration</li>
</ul>
<button className="magnetic-btn w-full relative overflow-hidden group bg-[#C9A84C] text-[#0D0D12] rounded-full py-4 text-sm font-medium tracking-tight">
<span className="absolute inset-0 bg-[#FAF8F5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
<span className="relative z-10 group-hover:text-[#0D0D12] transition-colors duration-500">Acquire Access</span>
</button>
</div>

<div className="bg-white rounded-[2rem] border border-[#2A2A35]/10 p-10 flex flex-col items-start shadow-sm">
<h4 className="font-['JetBrains_Mono'] text-xs text-[#2A2A35]/50 uppercase tracking-widest mb-4">Enterprise</h4>
<div className="text-3xl font-medium text-[#0D0D12] mb-2 tracking-tight">Apex</div>
<p className="text-sm text-[#2A2A35]/60 mb-10 h-10">Architectural deployment for elite executive teams.</p>
<ul className="flex flex-col gap-4 text-sm text-[#2A2A35]/80 mb-12 w-full">
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon> Team telemetry dashboard</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon> Custom hardware allocation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A84C]" icon="solar:check-circle-linear"></iconify-icon> Dedicated neurologist</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#2A2A35]/10 text-[#0D0D12] text-sm font-medium hover:bg-[#FAF8F5] transition-colors">Contact Strategy</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#0D0D12] text-[#FAF8F5] rounded-t-[4rem] px-8 py-16 md:px-24 md:py-24 mt-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
<div className="flex flex-col gap-6 max-w-sm">
<div className="text-2xl font-semibold tracking-tighter uppercase">AICOFFEECHAT</div>
<p className="text-sm text-[#FAF8F5]/50 leading-relaxed">Precision longevity medicine and cognitive architecture powered by biological telemetry.</p>

<div className="flex items-center gap-3 mt-8 bg-white/5 w-max px-4 py-2 rounded-full border border-white/10">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#FAF8F5]/80">System Operational</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto text-sm">
<div className="flex flex-col gap-4">
<span className="font-['JetBrains_Mono'] text-xs text-[#C9A84C] mb-2 uppercase tracking-widest">Platform</span>
<a className="text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors hover:-translate-y-[1px] inline-block" href="#">Telemetry</a>
<a className="text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors hover:-translate-y-[1px] inline-block" href="#">Hardware</a>
<a className="text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors hover:-translate-y-[1px] inline-block" href="#">Research</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-['JetBrains_Mono'] text-xs text-[#C9A84C] mb-2 uppercase tracking-widest">Company</span>
<a className="text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors hover:-translate-y-[1px] inline-block" href="#">Manifesto</a>
<a className="text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors hover:-translate-y-[1px] inline-block" href="#">Careers</a>
<a className="text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors hover:-translate-y-[1px] inline-block" href="#">Press</a>
</div>
<div className="flex flex-col gap-4 col-span-2 md:col-span-1">
<span className="font-['JetBrains_Mono'] text-xs text-[#C9A84C] mb-2 uppercase tracking-widest">Legal</span>
<a className="text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors hover:-translate-y-[1px] inline-block" href="#">Privacy Protocol</a>
<a className="text-[#FAF8F5]/70 hover:text-[#FAF8F5] transition-colors hover:-translate-y-[1px] inline-block" href="#">Terms of Access</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#FAF8F5]/40 relative z-10">
<span>© 2024 AICoffeeChat OS Labs. All rights reserved.</span>
<span className="font-['JetBrains_Mono'] mt-4 md:mt-0">V 2.4.1</span>
</div>
</footer>



    </>
  );
}
