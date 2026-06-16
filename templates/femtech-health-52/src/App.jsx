import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mouse tracking for WebGL-like ambient effects
        const root = document.documentElement;
        let isMoving = false;
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!isMoving) {
                isMoving = true;
                requestAnimationFrame(updateCursorProps);
            }
        });

        function updateCursorProps() {
            root.style.setProperty('--cursor-x', `${mouseX}px`);
            root.style.setProperty('--cursor-y', `${mouseY}px`);
            isMoving = false;
        }

        // Intersection Observer for Reveal Animations & SVG Drawing
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Trigger number counters if present
                    if(entry.target.classList.contains('count-up') || entry.target.querySelector('.count-up')) {
                        const counters = entry.target.classList.contains('count-up') ? [entry.target] : entry.target.querySelectorAll('.count-up');
                        counters.forEach(counter => {
                            if(!counter.classList.contains('counted')) {
                                animateValue(counter, 0, parseInt(counter.getAttribute('data-target')), 1500);
                                counter.classList.add('counted');
                            }
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .section-glow-line, .path-draw, .count-up').forEach(el => {
            observer.observe(el);
        });

        // Number Counter Animation Function
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // Ease out cubic
                const easeOut = 1 - Math.pow(1 - progress, 3);
                obj.innerHTML = Math.floor(easeOut * (end - start) + start) + (obj.innerHTML.includes('%') ? '%' : '');
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    obj.innerHTML = end + (obj.innerHTML.includes('%') ? '%' : '');
                }
            };
            window.requestAnimationFrame(step);
        }

        // Simulate random ambient ripples in background (Optional enhancement for "clinical calm")
        setInterval(() => {
            const overlay = document.getElementById('heroRipple');
            if(overlay) {
                overlay.style.opacity = Math.random() * 0.5 + 0.5;
                setTimeout(() => overlay.style.opacity = 1, 1000);
            }
        }, 4000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grid-lines"></div>
<div className="thermal-overlay" id="thermalOverlay"></div>

<nav className="fixed top-0 w-full z-50 bg-[#0B0D10]/80 backdrop-blur-[20px] border-b border-[#1E2228]/50">
<div className="container-custom h-16 flex items-center justify-between px-4 sm:px-0">
<div className="font-display font-bold text-[clamp(1rem,1.5vw,1.25rem)] tracking-tight">MenoMorph</div>
<div className="hidden md:flex items-center gap-8 text-[clamp(0.75rem,0.9vw,0.875rem)] font-medium text-[#8B8D91]">
<a className="hover:text-[#F0EDE8] transition-colors relative group" href="#science">
                    Science
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#FF6B4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
<a className="hover:text-[#F0EDE8] transition-colors relative group" href="#aura-ring">
                    Aura-Ring
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#FF6B4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
<a className="hover:text-[#F0EDE8] transition-colors relative group" href="#meno-pro">
                    Meno-Pro
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#FF6B4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
<a className="hover:text-[#F0EDE8] transition-colors relative group" href="#research">
                    Research
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#FF6B4A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
</div>
<button className="hidden md:inline-flex btn-primary px-5 py-2 text-[clamp(0.75rem,0.85vw,0.875rem)] font-display font-semibold">
<span className="btn-primary-inner">
<span className="btn-text-1">Pre-Order</span>
<span className="btn-text-2">Reserve Now</span>
</span>
</button>
<button className="md:hidden text-[#F0EDE8]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden z-10">
<div className="hero-ripple" id="heroRipple"></div>
<div className="container-custom relative z-10 flex flex-col items-center text-center px-4 sm:px-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1E2228] bg-[#14171C]/50 backdrop-blur-sm mb-8 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF] animate-pulse"></span>
<span className="text-[clamp(0.7rem,0.8vw,0.75rem)] font-mono text-[#8B8D91]">2,400+ women in clinical beta · HIPAA compliant</span>
</div>
<h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight mb-6 max-w-4xl reveal" style={{transitionDelay: '100ms'}}>
                Don't just survive <br/><span className="text-[#8B8D91]">the change.</span>
</h1>
<p className="text-[clamp(1rem,1.2vw,1.125rem)] text-[#8B8D91] max-w-2xl mb-10 leading-[1.6] reveal" style={{transitionDelay: '200ms'}}>
                Aura-Ring detects hot flashes before they hit. Meno-GPT translates your hormones into precise, actionable protocols.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<button className="btn-primary px-8 py-4 w-full sm:w-auto text-[clamp(0.875rem,1vw,1rem)] font-display font-semibold">
<span className="btn-primary-inner">
<span className="btn-text-1">Pre-Order Aura-Ring — $149</span>
<span className="btn-text-2">Reserve Your Device</span>
</span>
</button>
<button className="btn-secondary px-6 py-4 w-full sm:w-auto text-[clamp(0.875rem,1vw,1rem)] font-medium text-[#F0EDE8] flex items-center justify-center gap-2">
<span>Watch the Science</span>
<iconify-icon className="text-[#8B8D91]" height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="mt-20 relative w-full max-w-lg h-64 reveal" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">

<svg className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" fill="none" viewbox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">

<path d="M50 100C50 72.3858 117.157 50 200 50C282.843 50 350 72.3858 350 100C350 127.614 282.843 150 200 150C117.157 150 50 127.614 50 100Z" stroke="#2A2D33" strokeWidth="8"></path>
<path d="M50 100C50 127.614 117.157 150 200 150C282.843 150 350 127.614 350 100" stroke="#14171C" strokeLinecap="round" strokeWidth="8"></path>

<g transform="translate(160, 135)">
<rect fill="#0B0D10" height="24" rx="12" stroke="#1E2228" strokeWidth="2" width="80"></rect>

<circle cx="40" cy="12" fill="#FF6B4A" filter="drop-shadow(0 0 8px #FF6B4A)" r="3">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
</g>

<g opacity="0.6" transform="translate(100, 20)">
<path d="M0 40 Q 50 40, 70 20 T 140 30 T 200 10" fill="none" stroke="#4A9EFF" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="70" cy="20" fill="#4A9EFF" r="3"></circle>
<text fill="#4A9EFF" fontFamily="JetBrains Mono" fontSize="10" x="75" y="15">37.2°</text>
</g>
</svg>
</div>
</div>
</div>
</section>

<div className="section-glow-line observer-target"></div>

<section className="section-pad relative z-10 px-4 sm:px-0" id="problem">
<div className="container-custom">
<div className="font-mono text-[clamp(0.75rem,0.85vw,0.875rem)] text-[#8B8D91] mb-8 reveal">/001/ THE PROBLEM</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

<div className="col-span-1 md:col-span-7 pr-0 md:pr-12">
<h2 className="font-display font-semibold text-[clamp(2rem,3vw,2.5rem)] leading-tight tracking-tight mb-10 reveal">
                        Your cycle is broadcasting.<br/>Nothing is listening.
                    </h2>
<div className="flex flex-col gap-4">

<div className="bento-card p-6 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B8D91] mt-1" icon="solar:chart-line-down-linear" width="20"></iconify-icon>
<div>
<p className="text-[clamp(0.875rem,1vw,1rem)] text-[#F0EDE8] leading-[1.6]">
<span className="font-mono text-[#FF6B4A] mr-2">73%</span>
                                        of women can't predict their next hot flash.
                                    </p>
</div>
</div>
</div>
<div className="bento-card p-6 reveal ml-0 md:ml-6" style={{transitionDelay: '200ms'}}>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B8D91] mt-1" icon="solar:moon-sleep-linear" width="20"></iconify-icon>
<div>
<p className="text-[clamp(0.875rem,1vw,1rem)] text-[#F0EDE8] leading-[1.6]">
                                        Sleep disruption averages <span className="font-mono text-[#FF6B4A]">4.2</span> nights per week during perimenopause.
                                    </p>
</div>
</div>
</div>
<div className="bento-card p-6 reveal ml-0 md:ml-12" style={{transitionDelay: '300ms'}}>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B8D91] mt-1" icon="solar:pill-linear" width="20"></iconify-icon>
<div>
<p className="text-[clamp(0.875rem,1vw,1rem)] text-[#F0EDE8] leading-[1.6]">
                                        Most supplement recommendations aren't synced to your actual fluctuations.
                                    </p>
</div>
</div>
</div>
<div className="bento-card p-6 reveal ml-0 md:ml-16" style={{transitionDelay: '400ms'}}>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#8B8D91] mt-1" icon="solar:documents-linear" width="20"></iconify-icon>
<div>
<p className="text-[clamp(0.875rem,1vw,1rem)] text-[#F0EDE8] leading-[1.6]">
                                        HRT decisions made without continuous data are educated guesses.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-5 flex items-center justify-center reveal" style={{transitionDelay: '300ms'}}>
<div className="w-full bg-[#14171C] border border-[#1E2228] rounded-xl p-6 relative overflow-hidden thermal-hover group">
<div className="flex justify-between items-center mb-6">
<span className="font-mono text-[0.65rem] text-[#8B8D91]">24HR CORE TEMP</span>
<span className="font-mono text-[0.65rem] text-[#FF6B4A] thermal-target">LIVE</span>
</div>

<div className="relative w-full aspect-[4/3]">
<svg className="w-full h-full overflow-visible" viewbox="0 0 300 200">

<line stroke="#1E2228" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="300" y1="50" y2="50"></line>
<line stroke="#1E2228" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="300" y1="100" y2="100"></line>
<line stroke="#1E2228" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="300" y1="150" y2="150"></line>

<path className="path-draw observer-target" d="M0 120 Q 30 110, 60 120 T 120 130 T 150 40 Q 160 20, 170 80 T 210 120 T 260 50 Q 270 30, 280 110 T 300 120" fill="none" stroke="url(#thermalGrad)" strokeWidth="2"></path>

<defs>
<lineargradient id="thermalGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#4A9EFF"></stop>
<stop offset="40%" stop-color="#4A9EFF"></stop>
<stop offset="50%" stop-color="#FF6B4A"></stop> 
<stop offset="60%" stop-color="#4A9EFF"></stop>
<stop offset="85%" stop-color="#FF6B4A"></stop> 
<stop offset="100%" stop-color="#4A9EFF"></stop>
</lineargradient>
</defs>

<g className="group-hover:opacity-100 transition-opacity" transform="translate(150, 40)">
<circle className="animate-pulse" cx="0" cy="0" fill="#FF6B4A" r="4"></circle>
<line stroke="#FF6B4A" strokeWidth="1" x1="0" x2="0" y1="4" y2="20"></line>
<text fill="#F0EDE8" fontFamily="JetBrains Mono" fontSize="8" x="5" y="-5">FLASH</text>
</g>
<g transform="translate(260, 50)">
<circle className="animate-pulse" cx="0" cy="0" fill="#FF6B4A" r="4"></circle>
<text fill="#F0EDE8" fontFamily="JetBrains Mono" fontSize="8" x="5" y="-5">FLASH</text>
</g>
</svg>
</div>

<div className="flex justify-between mt-4 font-mono text-[0.6rem] text-[#8B8D91]">
<span>00:00</span>
<span>08:00</span>
<span>16:00</span>
<span>24:00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="section-glow-line observer-target"></div>

<section className="section-pad relative z-10 px-4 sm:px-0" id="aura-ring">
<div className="container-custom">
<div className="text-center mb-16 reveal">
<div className="font-mono text-[clamp(0.75rem,0.85vw,0.875rem)] text-[#8B8D91] mb-4">/002/ HARDWARE</div>
<h2 className="font-display font-semibold text-[clamp(2rem,3vw,2.5rem)] tracking-tight">Thermo-Sync Technology</h2>
</div>
<div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">

<div className="flex md:hidden flex-col gap-4 w-full">
<div className="bento-card p-4"><p className="text-sm">Non-invasive skin sensor detects core temperature shifts 45s before conscious onset.</p></div>
<div className="bento-card p-4"><p className="text-sm">Continuous monitoring — not spot checks.</p></div>
<div className="bento-card p-4"><p className="text-sm">Instantly triggers paired cooling device or haptic breathing prompt.</p></div>
<div className="bento-card p-4"><p className="text-sm">14-day battery. Waterproof. Sleep-comfortable.</p></div>
</div>

<div className="hidden md:flex flex-col gap-24 w-1/3 text-right pr-8 z-10">
<div className="reveal relative">
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#8B8D91]">Non-invasive skin sensor detects core temperature shifts 45s before conscious onset.</p>

<div className="absolute top-1/2 -right-8 w-8 h-[1px] bg-[#2A2D33]"></div>
</div>
<div className="reveal relative" style={{transitionDelay: '100ms'}}>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#8B8D91]">Continuous monitoring — not spot checks.</p>
<div className="absolute top-1/2 -right-8 w-8 h-[1px] bg-[#2A2D33]"></div>
</div>
</div>

<div className="relative w-full md:w-1/3 aspect-square flex items-center justify-center reveal" style={{transitionDelay: '200ms'}}>

<div className="absolute inset-0 bg-[#4A9EFF]/5 blur-[100px] rounded-full"></div>

<svg className="w-[80%] h-[80%] relative z-10 drop-shadow-2xl" viewbox="0 0 200 200">

<circle cx="100" cy="100" fill="none" r="80" stroke="#14171C" strokeWidth="20"></circle>
<circle cx="100" cy="100" fill="none" r="70" stroke="#0B0D10" strokeWidth="2"></circle>
<circle cx="100" cy="100" fill="none" r="90" stroke="#1E2228" strokeWidth="1"></circle>

<path d="M 80 20 A 80 80 0 0 1 120 20 L 115 40 A 60 60 0 0 0 85 40 Z" fill="#0B0D10" stroke="#2A2D33" strokeWidth="1"></path>

<circle className="animate-pulse" cx="90" cy="30" fill="#4A9EFF" r="2"></circle>
<circle cx="100" cy="28" fill="#FF6B4A" r="2">
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
<circle className="animate-pulse" cx="110" cy="30" fill="#4A9EFF" r="2"></circle>
</svg>
</div>

<div className="hidden md:flex flex-col gap-24 w-1/3 text-left pl-8 z-10">
<div className="reveal relative" style={{transitionDelay: '300ms'}}>
<div className="absolute top-1/2 -left-8 w-8 h-[1px] bg-[#2A2D33]"></div>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#8B8D91]">Instantly triggers paired cooling device or haptic breathing prompt.</p>
</div>
<div className="reveal relative" style={{transitionDelay: '400ms'}}>
<div className="absolute top-1/2 -left-8 w-8 h-[1px] bg-[#2A2D33]"></div>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#8B8D91]">14-day battery. Waterproof. Sleep-comfortable.</p>
</div>
</div>
</div>
</div>
</section>

<div className="section-glow-line observer-target"></div>

<section className="section-pad relative z-10 px-4 sm:px-0">
<div className="container-custom">
<div className="font-mono text-[clamp(0.75rem,0.85vw,0.875rem)] text-[#8B8D91] mb-8 reveal">/003/ ECOSYSTEM</div>
<h2 className="font-display font-semibold text-[clamp(2rem,3vw,2.5rem)] tracking-tight mb-12 reveal">Three layers. One data loop.</h2>

<div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 auto-rows-fr">

<div className="bento-card col-span-1 md:col-span-3 p-6 sm:p-8 flex flex-col justify-between reveal">
<div>
<iconify-icon className="text-[#4A9EFF] mb-4" icon="solar:leaf-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-lg text-[#F0EDE8] mb-2 tracking-tight">Hormone-Mapped Nutrition</h3>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#8B8D91] leading-relaxed">App syncs wearable data to suggest Magnesium, Phytoestrogens, or Vitamin D based on your cycle phase and sleep quality. No more guessing.</p>
</div>
</div>
<div className="bento-card col-span-1 md:col-span-3 p-6 sm:p-8 flex flex-col justify-between reveal" style={{transitionDelay: '100ms'}}>
<div>
<iconify-icon className="text-[#FF6B4A] mb-4" icon="solar:cpu-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-lg text-[#F0EDE8] mb-2 tracking-tight">Meno-GPT Assistant</h3>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#8B8D91] leading-relaxed">Private, HIPAA-compliant AI trained on 14,000+ endocrinology papers. Ask about HRT options. Get data reports formatted for your doctor.</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-2 p-6 flex flex-col justify-between reveal" style={{transitionDelay: '200ms'}}>
<div>
<h3 className="font-display font-semibold text-base text-[#F0EDE8] mb-2 tracking-tight">Cycle Phase Detection</h3>
<p className="text-sm text-[#8B8D91]">Algorithm identifies perimenopause stage based on temperature variance patterns.</p>
</div>
</div>
<div className="bento-card col-span-1 md:col-span-2 p-6 flex flex-col justify-between reveal" style={{transitionDelay: '300ms'}}>
<div>
<h3 className="font-display font-semibold text-base text-[#F0EDE8] mb-2 tracking-tight">Sleep Architecture</h3>
<p className="text-sm text-[#8B8D91]">Tracks sleep stages correlated with hormonal fluctuations.</p>
</div>
</div>
<div className="bento-card col-span-1 md:col-span-2 p-6 flex flex-col justify-between reveal" style={{transitionDelay: '400ms'}}>
<div>
<h3 className="font-display font-semibold text-base text-[#F0EDE8] mb-2 tracking-tight">Supplement Timing</h3>
<p className="text-sm text-[#8B8D91]">Optimal intake windows based on absorption data + your cycle.</p>
</div>
</div>

<div className="bento-card col-span-1 md:col-span-3 p-6 sm:p-8 flex flex-col justify-between reveal" style={{transitionDelay: '500ms'}}>
<div>
<iconify-icon className="text-[#8B8D91] mb-4" icon="solar:file-check-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-lg text-[#F0EDE8] mb-2 tracking-tight">Doctor-Ready Reports</h3>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#8B8D91] leading-relaxed">One-tap export of 30-day symptom data with trend analysis, designed specifically for OB-GYN review.</p>
</div>
</div>
<div className="bento-card col-span-1 md:col-span-3 p-6 sm:p-8 flex flex-col justify-between thermal-hover reveal" style={{transitionDelay: '600ms'}}>
<div>
<iconify-icon className="thermal-target text-[#8B8D91] mb-4 transition-colors" icon="solar:snowflake-linear" width="24"></iconify-icon>
<h3 className="font-display font-semibold text-lg text-[#F0EDE8] mb-2 tracking-tight">Cooling Integration</h3>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#8B8D91] leading-relaxed">Aura-Ring triggers Aura-Cool wrist pod for immediate flash mitigation before you even feel the heat.</p>
</div>
</div>
</div>
</div>
</section>

<div className="section-glow-line observer-target"></div>

<section className="section-pad relative z-10 px-4 sm:px-0 bg-[#0B0D10]">
<div className="container-custom">
<div className="text-center mb-12 reveal">
<div className="font-mono text-[clamp(0.75rem,0.85vw,0.875rem)] text-[#8B8D91] mb-4">/004/ INTELLIGENCE</div>
<h2 className="font-display font-semibold text-[clamp(2rem,3vw,2.5rem)] tracking-tight">Your hormonal fingerprint, visualized.</h2>
</div>

<div className="w-full max-w-5xl mx-auto border border-[#1E2228] rounded-xl bg-[#14171C] overflow-hidden shadow-2xl reveal">

<div className="h-10 border-b border-[#1E2228] flex items-center px-4 justify-between bg-[#0B0D10]/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#2A2D33]"></div>
<div className="w-3 h-3 rounded-full bg-[#2A2D33]"></div>
<div className="w-3 h-3 rounded-full bg-[#2A2D33]"></div>
</div>
<div className="font-mono text-[0.65rem] text-[#8B8D91]">SARAH MITCHELL · DAY 47 · PERI PHASE 2</div>
<div className="w-10"></div>
</div>

<div className="flex border-b border-[#1E2228] px-4 pt-2 gap-6 overflow-x-auto no-scrollbar">
<div className="pb-2 border-b-2 border-[#FF6B4A] text-sm font-medium text-[#F0EDE8] whitespace-nowrap cursor-pointer">Temperature</div>
<div className="pb-2 border-b-2 border-transparent text-sm font-medium text-[#8B8D91] hover:text-[#F0EDE8] whitespace-nowrap cursor-pointer transition-colors">Sleep</div>
<div className="pb-2 border-b-2 border-transparent text-sm font-medium text-[#8B8D91] hover:text-[#F0EDE8] whitespace-nowrap cursor-pointer transition-colors">Nutrition</div>
<div className="pb-2 border-b-2 border-transparent text-sm font-medium text-[#8B8D91] hover:text-[#F0EDE8] whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1">
                        Meno-GPT <iconify-icon className="text-[#FF6B4A]" icon="solar:sparkles-linear" width="14"></iconify-icon>
</div>
</div>

<div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 bg-[#0B0D10]">

<div className="md:col-span-2 bento-card p-4 sm:p-6 thermal-hover">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-sm font-medium text-[#8B8D91] mb-1">Core Temperature Variance</h4>
<div className="text-2xl font-display font-semibold flex items-center gap-2">
                                    36.8°C <span className="text-xs font-mono text-[#4A9EFF] px-2 py-0.5 bg-[#4A9EFF]/10 rounded border border-[#4A9EFF]/20">STABLE</span>
</div>
</div>
<div className="text-right">
<h4 className="text-xs font-medium text-[#8B8D91] mb-1">Next Flash Predicted</h4>
<div className="text-sm font-mono text-[#FF6B4A] thermal-target">in 2.3 hours</div>
</div>
</div>

<div className="w-full h-40 relative group">

<div className="absolute top-4 left-1/3 opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-[#14171C] border border-[#1E2228] p-2 rounded shadow-lg pointer-events-none">
<div className="text-[0.65rem] font-mono text-[#8B8D91]">02:14 AM</div>
<div className="text-sm font-bold text-[#FF6B4A]">37.4°C <span className="text-[0.65rem] font-normal text-[#8B8D91]">Peak</span></div>
</div>
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 400 100">
<line stroke="#1E2228" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>

<path d="M0 60 L 40 55 L 80 65 L 120 20 L 140 50 L 200 55 L 240 60 L 280 15 L 300 55 L 360 50 L 400 60" fill="none" stroke="#4A9EFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<circle className="cursor-pointer hover:fill-[#FF6B4A] transition-colors" cx="120" cy="20" fill="#14171C" r="4" stroke="#FF6B4A" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:fill-[#FF6B4A] transition-colors" cx="280" cy="15" fill="#14171C" r="4" stroke="#FF6B4A" strokeWidth="2"></circle>

<rect fill="url(#predGrad)" height="100" opacity="0.2" width="60" x="340" y="0"></rect>
<defs>
<lineargradient id="predGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="100%" stop-color="#FF6B4A"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="md:col-span-1 flex flex-col gap-4">

<div className="bento-card data-peel-container flex-1">

<div className="data-peel-top p-4 sm:p-5">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#4A9EFF]" icon="solar:leaf-linear"></iconify-icon>
<h4 className="text-xs font-semibold uppercase tracking-wider text-[#8B8D91]">Today's Protocol</h4>
</div>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF] mt-1.5 shrink-0"></div>
<span><span className="text-[#F0EDE8]">Magnesium 400mg</span> <span className="text-[#8B8D91]">(dinner)</span></span>
</li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF] mt-1.5 shrink-0"></div>
<span><span className="text-[#F0EDE8]">Phytoestrogen</span> <span className="text-[#8B8D91]">(morning)</span></span>
</li>
<li className="flex items-start gap-2 opacity-50">
<div className="w-1.5 h-1.5 rounded-full border border-[#8B8D91] mt-1.5 shrink-0"></div>
<span className="line-through">Vitamin D</span> <span className="text-xs ml-1">(Adequate)</span>
</li>
</ul>
<div className="mt-auto pt-4 text-[0.65rem] text-center text-[#8B8D91] uppercase tracking-wider">Hover for data</div>
</div>

<div className="data-peel-under">
<h5 className="text-xs font-mono text-[#4A9EFF] mb-2">ABSORPTION METRICS</h5>
<div className="space-y-2">
<div>
<div className="flex justify-between text-[0.65rem] text-[#8B8D91] mb-1"><span>Mg Uptake</span><span>82%</span></div>
<div className="h-1 w-full bg-[#1E2228] rounded-full overflow-hidden"><div className="h-full bg-[#4A9EFF] w-[82%]"></div></div>
</div>
<div>
<div className="flex justify-between text-[0.65rem] text-[#8B8D91] mb-1"><span>Estrogen Var.</span><span>-12%</span></div>
<div className="h-1 w-full bg-[#1E2228] rounded-full overflow-hidden"><div className="h-full bg-[#FF6B4A] w-[30%]"></div></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-3 bento-card p-4 sm:p-5 flex items-start gap-4 bg-[#14171C]/50 border-[#FF6B4A]/20">
<div className="p-2 bg-[#FF6B4A]/10 rounded-lg shrink-0">
<iconify-icon className="text-[#FF6B4A]" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-mono text-[#8B8D91] mb-1">MENO-GPT INSIGHT</h4>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#F0EDE8] leading-relaxed">
                                "Your temperature variance has decreased <span className="text-[#4A9EFF] font-mono">12%</span> since starting Magnesium supplementation. Consider maintaining current dose through Phase 2 of your cycle."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="section-glow-line observer-target"></div>

<section className="section-pad relative z-10 px-4 sm:px-0">
<div className="container-custom relative">
<div className="text-center mb-16 reveal">
<div className="font-mono text-[clamp(0.75rem,0.85vw,0.875rem)] text-[#8B8D91] mb-4">/005/ PROCESS</div>
<h2 className="font-display font-semibold text-[clamp(2rem,3vw,2.5rem)] tracking-tight">From sync to action in 45 seconds.</h2>
</div>

<div className="absolute left-4 md:left-1/2 top-[12rem] bottom-0 w-[1px] bg-[#1E2228] md:-translate-x-1/2"></div>
<div className="flex flex-col gap-12 md:gap-8 relative z-10">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal">
<div className="hidden md:block w-5/12"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#14171C] border-2 border-[#1E2228] md:-translate-x-1/2 flex items-center justify-center -translate-x-3.5 md:-translate-x-1/2 z-10">
<span className="font-mono text-[10px] text-[#8B8D91]">01</span>
</div>
<div className="w-full md:w-5/12 pl-12 md:pl-0">
<div className="bento-card p-6">
<p className="text-sm text-[#8B8D91]">Wear Aura-Ring continuously. Sensor calibrates to your baseline in 72 hours.</p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal">
<div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-12 md:text-right order-2 md:order-1">
<div className="bento-card p-6">
<p className="text-sm text-[#8B8D91]">Thermo-Sync detects temperature shift pattern. Algorithm classifies as pre-flash.</p>
</div>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#14171C] border-2 border-[#1E2228] flex items-center justify-center -translate-x-3.5 md:-translate-x-1/2 z-10 order-1 md:order-2">
<span className="font-mono text-[10px] text-[#8B8D91]">02</span>
</div>
<div className="hidden md:block w-5/12 order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal thermal-hover">
<div className="hidden md:block w-5/12"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#14171C] border-2 border-[#FF6B4A] flex items-center justify-center -translate-x-3.5 md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(255,107,74,0.3)]">
<span className="font-mono text-[10px] text-[#FF6B4A]">03</span>
</div>
<div className="w-full md:w-5/12 pl-12 md:pl-0">
<div className="bento-card p-6 border-[#FF6B4A]/30">
<p className="text-sm text-[#F0EDE8]"><span className="text-[#FF6B4A] font-medium">45 seconds before onset:</span> haptic breathing prompt OR cooling device activation.</p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal">
<div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-12 md:text-right order-2 md:order-1">
<div className="bento-card p-6">
<p className="text-sm text-[#8B8D91]">Flash mitigated or eliminated. Data logged securely to your profile.</p>
</div>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#14171C] border-2 border-[#1E2228] flex items-center justify-center -translate-x-3.5 md:-translate-x-1/2 z-10 order-1 md:order-2">
<span className="font-mono text-[10px] text-[#8B8D91]">04</span>
</div>
<div className="hidden md:block w-5/12 order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal">
<div className="hidden md:block w-5/12"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#14171C] border-2 border-[#1E2228] flex items-center justify-center -translate-x-3.5 md:-translate-x-1/2 z-10">
<span className="font-mono text-[10px] text-[#8B8D91]">05</span>
</div>
<div className="w-full md:w-5/12 pl-12 md:pl-0">
<div className="bento-card p-6">
<p className="text-sm text-[#8B8D91]">Meno-GPT analyzes cumulative data. Adjusts nutrition and supplement recommendations.</p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full reveal">
<div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-12 md:text-right order-2 md:order-1">
<div className="bento-card p-6">
<p className="text-sm text-[#8B8D91]">Monthly report generated. Share with your practitioner for informed HRT decisions.</p>
</div>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#14171C] border-2 border-[#1E2228] flex items-center justify-center -translate-x-3.5 md:-translate-x-1/2 z-10 order-1 md:order-2">
<span className="font-mono text-[10px] text-[#8B8D91]">06</span>
</div>
<div className="hidden md:block w-5/12 order-3"></div>
</div>
</div>
</div>
</section>

<div className="section-glow-line observer-target"></div>

<section className="section-pad relative z-10 px-4 sm:px-0" id="research">
<div className="container-custom">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div>
<div className="font-mono text-[clamp(0.75rem,0.85vw,0.875rem)] text-[#8B8D91] mb-6 reveal">/006/ CLINICAL PROOF</div>
<h2 className="font-display font-semibold text-[clamp(2rem,3vw,2.5rem)] tracking-tight mb-12 reveal">Beta results don't lie.</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="reveal" style={{transitionDelay: '100ms'}}>
<div className="font-mono text-4xl sm:text-5xl text-[#4A9EFF] mb-2 count-up" data-target="67">%</div>
<p className="text-sm text-[#8B8D91]">reduction in reported hot flash severity</p>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<div className="font-mono text-4xl sm:text-5xl text-[#4A9EFF] mb-2"><span className="count-up" data-target="4">0</span><span className="text-2xl">.2h</span></div>
<p className="text-sm text-[#8B8D91]">average weekly sleep recovery</p>
</div>
<div className="reveal" style={{transitionDelay: '300ms'}}>
<div className="font-mono text-4xl sm:text-5xl text-[#4A9EFF] mb-2 count-up" data-target="89">%</div>
<p className="text-sm text-[#8B8D91]">of users continued past 90-day trial</p>
</div>
<div className="reveal thermal-hover" style={{transitionDelay: '400ms'}}>
<div className="font-mono text-4xl sm:text-5xl text-[#FF6B4A] mb-2 thermal-target"><span className="count-up" data-target="12">0</span><span className="text-2xl">m</span></div>
<p className="text-sm text-[#8B8D91]">average time from prediction to mitigation</p>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="bento-card p-6 sm:p-8 reveal" style={{transitionDelay: '200ms'}}>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#F0EDE8] italic mb-6">"Finally, continuous data instead of patient recall. I adjusted three patients' HRT protocols based on Aura-Ring data last month."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1E2228] flex items-center justify-center font-display font-bold text-[#8B8D91]">RT</div>
<div>
<div className="text-sm font-medium">Dr. Rebecca Torres</div>
<div className="text-xs text-[#8B8D91]">OB-GYN, Endocrinology Specialist</div>
</div>
</div>
</div>
<div className="bento-card p-6 sm:p-8 reveal" style={{transitionDelay: '300ms'}}>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#F0EDE8] italic mb-6">"I went from 8 night sweats per week to 2. The breathing prompts actually work. I was incredibly skeptical."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1E2228] flex items-center justify-center font-display font-bold text-[#8B8D91]">JK</div>
<div>
<div className="text-sm font-medium">Jennifer K., 51</div>
<div className="text-xs text-[#8B8D91]">Beta User #042</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="section-glow-line observer-target"></div>

<section className="section-pad relative z-10 px-4 sm:px-0 bg-[#0B0D10]" id="meno-pro">
<div className="container-custom max-w-5xl">
<div className="text-center mb-16 reveal">
<div className="font-mono text-[clamp(0.75rem,0.85vw,0.875rem)] text-[#8B8D91] mb-4">/007/ ACCESS</div>
<h2 className="font-display font-semibold text-[clamp(2rem,3vw,2.5rem)] tracking-tight">Aura-Ring detects. Meno-Pro delivers.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

<div className="bento-card p-8 flex flex-col reveal">
<h3 className="font-display font-semibold text-2xl mb-2">Aura-Ring Only</h3>
<div className="text-3xl font-display mb-6">$149 <span className="text-sm text-[#8B8D91] font-sans font-normal">one-time</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-[#8B8D91]">
<iconify-icon className="text-[#4A9EFF] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Thermo-Sync hardware
                        </li>
<li className="flex items-start gap-3 text-sm text-[#8B8D91]">
<iconify-icon className="text-[#4A9EFF] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Basic temperature tracking app
                        </li>
<li className="flex items-start gap-3 text-sm text-[#8B8D91]">
<iconify-icon className="text-[#4A9EFF] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            30-day Meno-Pro trial included
                        </li>
</ul>
<button className="btn-secondary w-full py-3 text-sm font-medium text-[#F0EDE8]">
<span>Pre-Order Hardware</span>
</button>
</div>

<div className="bento-card p-8 flex flex-col border-[#FF6B4A]/40 relative overflow-hidden reveal shadow-[0_0_30px_rgba(255,107,74,0.05)]" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 bg-[#FF6B4A] text-[#0B0D10] text-[0.65rem] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg font-mono">
                        Most Effective
                    </div>
<h3 className="font-display font-semibold text-2xl mb-2">Meno-Pro Sub</h3>
<div className="text-3xl font-display mb-6">$15<span className="text-sm text-[#8B8D91] font-sans font-normal">/month + $149 hardware</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-[#F0EDE8]">
<iconify-icon className="text-[#FF6B4A] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Aura-Ring
                        </li>
<li className="flex items-start gap-3 text-sm text-[#F0EDE8]">
<iconify-icon className="text-[#FF6B4A] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Hormone-Mapped Nutrition syncing
                        </li>
<li className="flex items-start gap-3 text-sm text-[#F0EDE8]">
<iconify-icon className="text-[#FF6B4A] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            24/7 Meno-GPT AI access
                        </li>
<li className="flex items-start gap-3 text-sm text-[#F0EDE8]">
<iconify-icon className="text-[#FF6B4A] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Doctor-ready report generation
                        </li>
<li className="flex items-start gap-3 text-sm text-[#F0EDE8]">
<iconify-icon className="text-[#FF6B4A] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Priority cooling device integration
                        </li>
</ul>
<button className="btn-primary w-full py-4 text-sm font-display font-semibold">
<span className="btn-primary-inner">
<span className="btn-text-1">Start Meno-Pro + Ring</span>
<span className="btn-text-2">Reserve Full Ecosystem</span>
</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 px-4 sm:px-0 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,74,0.05)_0%,transparent_70%)] pointer-events-none"></div>
<div className="container-custom flex flex-col items-center text-center relative z-10">
<h2 className="font-display font-semibold text-[clamp(2.5rem,5vw,4rem)] tracking-tight mb-6 max-w-3xl leading-[1.1] reveal">
                Your hormones are data.<br/>Start reading them.
            </h2>
<p className="text-[clamp(1rem,1.1vw,1.125rem)] text-[#8B8D91] mb-10 reveal" style={{transitionDelay: '100ms'}}>
                Pre-order ships Q2 2025. 30-day money-back guarantee.
            </p>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<button className="btn-primary px-10 py-5 text-[clamp(0.875rem,1vw,1rem)] font-display font-semibold mb-6">
<span className="btn-primary-inner">
<span className="btn-text-1">Reserve Your Aura-Ring</span>
<span className="btn-text-2">Secure Your Spot</span>
</span>
</button>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-[#8B8D91] reveal" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-[#4A9EFF]" icon="solar:shield-check-linear"></iconify-icon>
                Join 2,400+ women who stopped guessing.
            </div>
</div>
</section>

<footer className="border-t border-[#1E2228] bg-[#0B0D10] pt-16 pb-8 relative z-10 px-4 sm:px-0">
<div className="container-custom">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 md:col-span-2">
<div className="font-display font-bold text-xl tracking-tight mb-4 text-[#F0EDE8]">MenoMorph</div>
<p className="text-sm text-[#8B8D91] mb-6 max-w-sm">Master the data behind the change. Subscribe for clinical updates and early access drops.</p>
<div className="flex gap-2 max-w-sm">
<input className="bg-[#14171C] border border-[#1E2228] rounded-md px-4 py-2 text-sm text-[#F0EDE8] w-full focus:outline-none focus:border-[#FF6B4A] transition-colors" placeholder="Email address" type="email"/>
<button className="bg-[#2A2D33] text-[#F0EDE8] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FF6B4A] hover:text-[#0B0D10] transition-colors">Join</button>
</div>
</div>

<div>
<h4 className="font-mono text-[0.65rem] text-[#8B8D91] mb-4">PRODUCT</h4>
<ul className="space-y-3 text-sm text-[#F0EDE8]">
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Aura-Ring</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Meno-Pro</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Cooling Device</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">App</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[0.65rem] text-[#8B8D91] mb-4">SCIENCE</h4>
<ul className="space-y-3 text-sm text-[#F0EDE8]">
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Research Library</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Clinical Trials</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Meno-GPT Whitepaper</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Advisory Board</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[0.65rem] text-[#8B8D91] mb-4">SUPPORT</h4>
<ul className="space-y-3 text-sm text-[#F0EDE8]">
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-[#FF6B4A] transition-colors flex items-center gap-1" href="#">Privacy <iconify-icon icon="solar:lock-linear" width="12"></iconify-icon></a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1E2228] text-xs text-[#8B8D91]">
<p>© 2025 MenoMorph Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-[#F0EDE8]" href="#">Terms</a>
<a className="hover:text-[#F0EDE8]" href="#">HIPAA Compliance</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
