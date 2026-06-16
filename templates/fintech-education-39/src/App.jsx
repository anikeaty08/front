import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Lenis Smooth Scroll ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- Custom Cursor ---
        const cursor = document.getElementById('cursor');
        const hoverTargets = document.querySelectorAll('.hover-target, a, button, input[type="range"]');

        if(window.innerWidth > 768) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            hoverTargets.forEach(target => {
                target.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                target.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });
        }

        // --- Navbar Scroll Effect ---
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#050505]/90', 'backdrop-blur-md', 'border-[#FFFFFF]/10');
                navbar.classList.remove('bg-transparent', 'border-transparent');
            } else {
                navbar.classList.remove('bg-[#050505]/90', 'backdrop-blur-md');
                navbar.classList.add('bg-transparent');
            }
        });

        // --- Mobile Menu ---
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let menuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if(menuOpen) {
                mobileMenu.classList.remove('translate-y-[-100%]');
                mobileMenu.classList.add('translate-y-0');
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="24" height="24"></iconify-icon>';
                setTimeout(() => {
                    mobileLinks.forEach(link => {
                        link.classList.remove('opacity-0', 'translate-y-4');
                    });
                }, 100);
            } else {
                mobileMenu.classList.add('translate-y-[-100%]');
                mobileMenu.classList.remove('translate-y-0');
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>';
                mobileLinks.forEach(link => {
                    link.classList.add('opacity-0', 'translate-y-4');
                });
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuOpen = false;
                mobileMenu.classList.add('translate-y-[-100%]');
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>';
                mobileLinks.forEach(l => l.classList.add('opacity-0', 'translate-y-4'));
            });
        });

        // --- Scroll Animations ---
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    if(entry.target.classList.contains('counter-wrapper') || entry.target.querySelector('.counter')) {
                        const counterEl = entry.target.classList.contains('counter') ? entry.target : entry.target.querySelector('.counter');
                        if(counterEl && !counterEl.classList.contains('counted')) animateCounter(counterEl);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-up, .line-expand').forEach(el => observer.observe(el));

        // --- Number Counter Animation ---
        function animateCounter(el) {
            el.classList.add('counted');
            const target = parseFloat(el.getAttribute('data-target'));
            const duration = 2000;
            const start = performance.now();

            function update(time) {
                const elapsed = time - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 4);
                
                const current = (ease * target).toFixed(0);
                el.innerText = new Intl.NumberFormat('en-IN').format(current);

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.innerText = new Intl.NumberFormat('en-IN').format(target);
                }
            }
            requestAnimationFrame(update);
        }

        // --- Spotlight Hover Effect ---
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // --- FAQ Accordion ---
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const btn = item.querySelector('button');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.faq-icon');

            btn.addEventListener('click', () => {
                const isOpen = content.style.height && content.style.height !== '0px';
                
                faqItems.forEach(otherItem => {
                    otherItem.querySelector('.faq-content').style.height = '0px';
                    otherItem.querySelector('.faq-icon').innerText = '+';
                    otherItem.querySelector('span').classList.remove('text-[#00E676]');
                });

                if (!isOpen) {
                    content.style.height = content.scrollHeight + 'px';
                    icon.innerText = '−';
                    btn.querySelector('span').classList.add('text-[#00E676]');
                }
            });
        });

        // --- ROI Calculator ---
        const sliderStarting = document.getElementById('slider-starting');
        const sliderMonthly = document.getElementById('slider-monthly');
        const valStarting = document.getElementById('val-starting');
        const valMonthly = document.getElementById('val-monthly');
        const valProjected = document.getElementById('projected-value');

        const formatCurrency = (num) => new Intl.NumberFormat('en-IN').format(Math.round(num));

        function calculateROI() {
            const P = parseFloat(sliderStarting.value);
            const PMT = parseFloat(sliderMonthly.value);
            const r = 0.12; 
            const n = 12; 
            const t = 10; 

            const principalFV = P * Math.pow(1 + (r/n), n*t);
            const contributionsFV = PMT * ((Math.pow(1 + (r/n), n*t) - 1) / (r/n)) * (1 + (r/n));
            const total = principalFV + contributionsFV;
            
            valStarting.innerText = '₹' + formatCurrency(P);
            valMonthly.innerText = '₹' + formatCurrency(PMT);
            
            const startVal = parseFloat(valProjected.innerText.replace(/,/g, '')) || 0;
            animateValue(valProjected, startVal, total, 400);
        }

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // easeOutExpo
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                obj.innerHTML = formatCurrency(Math.floor(easeProgress * (end - start) + start));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        sliderStarting.addEventListener('input', calculateROI);
        sliderMonthly.addEventListener('input', calculateROI);
        calculateROI();

        // --- WebGL Dot Ripple Simulation ---
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let dots = [];
        let mouse = { x: -1000, y: -1000 };
        let width, height;
        
        const config = {
            dotRadius: 1,
            spacing: 20,
            color: '#00E676',
            mouseRadius: 100,
            repelForce: 0.8
        };

        function initCanvas() {
            width = canvas.parentElement.clientWidth;
            height = canvas.parentElement.clientHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            createDots();
        }

        function createDots() {
            dots = [];
            const cols = Math.floor(width / config.spacing);
            const rows = Math.floor(height / config.spacing);
            const offsetX = (width - (cols * config.spacing)) / 2;
            const offsetY = (height - (rows * config.spacing)) / 2;

            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    dots.push({
                        baseX: offsetX + i * config.spacing,
                        baseY: offsetY + j * config.spacing,
                        x: offsetX + i * config.spacing,
                        y: offsetY + j * config.spacing,
                        radius: config.dotRadius,
                        baseOpacity: Math.random() > 0.9 ? 0.8 : 0.2
                    });
                }
            }
        }

        function drawDots() {
            ctx.clearRect(0, 0, width, height);
            
            dots.forEach(dot => {
                let dx = mouse.x - dot.baseX;
                let dy = mouse.y - dot.baseY;
                let distance = Math.sqrt(dx * dx + dy * dy);

                dot.x += (dot.baseX - dot.x) * 0.1;
                dot.y += (dot.baseY - dot.y) * 0.1;

                let currentOpacity = dot.baseOpacity;

                if (distance < config.mouseRadius) {
                    const force = (config.mouseRadius - distance) / config.mouseRadius;
                    const angle = Math.atan2(dy, dx);
                    
                    const moveX = Math.cos(angle) * force * config.spacing * config.repelForce;
                    const moveY = Math.sin(angle) * force * config.spacing * config.repelForce;
                    
                    dot.x -= moveX;
                    dot.y -= moveY;
                    
                    currentOpacity = Math.min(1, dot.baseOpacity + force);
                }

                ctx.beginPath();
                // Check if dot is "active" to draw a crosshair instead of circle for data aesthetic
                if (dot.baseOpacity > 0.7) {
                    ctx.moveTo(dot.x - 3, dot.y);
                    ctx.lineTo(dot.x + 3, dot.y);
                    ctx.moveTo(dot.x, dot.y - 3);
                    ctx.lineTo(dot.x, dot.y + 3);
                    ctx.strokeStyle = `rgba(0, 230, 118, ${currentOpacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                } else {
                    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.5})`;
                    ctx.fill();
                }
            });

            requestAnimationFrame(drawDots);
        }

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        canvas.parentElement.addEventListener('mouseleave', () => {
            mouse.x = -1000;
            mouse.y = -1000;
        });

        window.addEventListener('resize', () => {
            initCanvas();
        });

        if(window.innerWidth > 768) {
            initCanvas();
            drawDots();
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="hidden md:block" id="cursor"></div>
<div className="noise-overlay"></div>

<div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[-1]" style={{background: 'radial-gradient(circle at 80% 20%, rgba(0,230,118,0.04) 0%, transparent 60%)'}}></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-[#FFFFFF]/10 bg-transparent" id="navbar">
<div className="w-full mx-auto px-[clamp(1.5rem,3vw,3rem)] h-[clamp(4rem,8vh,5rem)] flex items-center justify-between">
<a className="font-['Clash_Display',sans-serif] font-normal text-[clamp(1.25rem,2vw,1.5rem)] tracking-tight uppercase text-[#FFFFFF] hover-target flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-[#00E676]"></div>
                FINFLOW
            </a>
<div className="hidden md:flex items-center gap-[clamp(2rem,3vw,3rem)] font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest">
<a className="text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors hover-target" href="#how-it-works">How It Works</a>
<a className="text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors hover-target" href="#features">Features</a>
<a className="text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors hover-target" href="#simulator">Simulator</a>
<a className="text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors hover-target" href="#pricing">Join</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="px-[clamp(1.25rem,2vw,1.5rem)] py-[clamp(0.75rem,1vw,0.875rem)] font-['JetBrains_Mono',monospace] font-normal text-[clamp(0.75rem,0.8vw,0.875rem)] tracking-wider uppercase text-[#050505] bg-[#00E676] rounded-none transition-all duration-300 hover:bg-[#FFFFFF] hover-target" href="#pricing">
                    Sign up for free
                </a>
</div>
<button className="md:hidden text-[#FFFFFF] hover-target p-2" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-40 translate-y-[-100%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center items-center gap-8 border-b border-[#FFFFFF]/10" id="mobile-menu">
<a className="mobile-link text-[clamp(2rem,6vw,3rem)] font-['Clash_Display',sans-serif] tracking-tight opacity-0 translate-y-4 transition-all duration-500 font-normal" href="#how-it-works">How It Works</a>
<a className="mobile-link text-[clamp(2rem,6vw,3rem)] font-['Clash_Display',sans-serif] tracking-tight opacity-0 translate-y-4 transition-all duration-500 delay-100 font-normal" href="#features">Features</a>
<a className="mobile-link text-[clamp(2rem,6vw,3rem)] font-['Clash_Display',sans-serif] tracking-tight opacity-0 translate-y-4 transition-all duration-500 delay-200 font-normal" href="#simulator">Simulator</a>
<a className="mobile-link text-[clamp(2rem,6vw,3rem)] font-['Clash_Display',sans-serif] tracking-tight opacity-0 translate-y-4 transition-all duration-500 delay-[300ms] font-normal" href="#pricing">Join</a>
</div>
<main className="border-x border-[#FFFFFF]/10 w-full max-w-[120rem] mx-auto">

<section className="relative min-h-[90vh] flex flex-col pt-[clamp(4rem,8vh,5rem)] border-b border-[#FFFFFF]/10">
<div className="grid grid-cols-1 lg:grid-cols-12 flex-grow h-full divide-y lg:divide-y-0 lg:divide-x divide-[#FFFFFF]/10">

<div className="hidden lg:flex lg:col-span-1 flex-col justify-between items-center py-8">
<span className="font-['JetBrains_Mono',monospace] text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.1em] text-[#A1A1AA] font-light [writing-mode:vertical-rl] rotate-180">/001/ Welcome</span>
<div className="w-[1px] h-32 bg-[#FFFFFF]/20"></div>
</div>

<div className="lg:col-span-8 flex flex-col justify-center p-[clamp(2rem,5vw,5rem)] relative overflow-hidden">
<h1 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(3.5rem,7vw,8rem)] leading-[0.9] tracking-tight text-[#FFFFFF] mb-[clamp(2rem,4vh,3rem)] reveal-up z-10">
                        LEARN TO<br/>
<span className="text-transparent border-text relative z-10" style={{WebkitTextStroke: '1px #00E676'}}>INVEST.</span><br/>
                        ZERO FEAR.
                    </h1>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-[clamp(2rem,4vw,3rem)] reveal-up delay-100 border-t border-[#FFFFFF]/10 pt-[clamp(2rem,4vh,3rem)] z-10 w-full">
<p className="text-[#A1A1AA] text-[clamp(1rem,1.1vw,1.125rem)] font-light leading-[1.6] max-w-[40ch]">
                            Master your money with bite-sized lessons and a zero-risk simulator. Built for India's next generation.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 shrink-0">
<a className="px-[clamp(1.5rem,2vw,2rem)] py-[clamp(1rem,1.5vw,1.25rem)] font-['JetBrains_Mono',monospace] font-normal text-[clamp(0.875rem,1vw,1rem)] uppercase tracking-wider text-[#050505] bg-[#00E676] transition-all duration-300 hover:bg-[#FFFFFF] hover-target flex items-center justify-center gap-3 group" href="#pricing">
                                Sign up for free
                                <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
<a className="px-[clamp(1.5rem,2vw,2rem)] py-[clamp(1rem,1.5vw,1.25rem)] font-['JetBrains_Mono',monospace] font-normal text-[clamp(0.875rem,1vw,1rem)] uppercase tracking-wider text-[#FFFFFF] border border-[#FFFFFF]/20 transition-all duration-300 hover:bg-[#FFFFFF]/10 hover-target flex items-center justify-center gap-3" href="#pricing">
                                Book a demo
                            </a>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col h-full relative border-t lg:border-t-0 border-[#FFFFFF]/10 bg-[#0A0A0A]">
<div className="p-[clamp(1.5rem,2vw,2rem)] border-b border-[#FFFFFF]/10 bg-[#050505]">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.05em] text-[#A1A1AA] mb-1">Simulated Capital</div>
<div className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2.5rem,3.5vw,3.5rem)] text-[#00E676] tracking-tight leading-none">₹<span className="counter" data-target="10000">0</span></div>
</div>
<div className="flex-grow relative min-h-[30vh] lg:min-h-0 overflow-hidden group hover-target">
<div className="absolute inset-0 z-10 p-4 pointer-events-none flex justify-between items-end">
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#00E676]/50">MARKET_SIM_ACTIVE</span>
<div className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse"></div>
</div>
<canvas className="w-full h-full block opacity-50 group-hover:opacity-100 transition-opacity duration-700" id="hero-canvas"></canvas>
</div>
</div>
</div>
</section>

<section className="py-[clamp(1rem,2vh,1.5rem)] border-b border-[#FFFFFF]/10 bg-[#00E676] overflow-hidden relative text-[#050505]">
<h2 className="sr-only">Platform Features</h2>
<div className="marquee-container w-full relative flex flex-col gap-2">

<div className="animate-marquee flex items-center whitespace-nowrap font-['Clash_Display',sans-serif] font-normal text-[clamp(1.5rem,2.5vw,2rem)] tracking-tight uppercase">
<span className="mx-8">Gamified Learning</span> • 
                    <span className="mx-8">Zero-Risk Simulator</span> • 
                    <span className="mx-8">AI Finance Coach</span> • 
                    <span className="mx-8">Verified Frameworks</span> • 
                    <span className="mx-8">Built for Gen Z</span> • 
                    <span className="mx-8">Gamified Learning</span> • 
                    <span className="mx-8">Zero-Risk Simulator</span> • 
                    <span className="mx-8">AI Finance Coach</span> • 
                    <span className="mx-8">Verified Frameworks</span> • 
                    <span className="mx-8">Built for Gen Z</span> • 
                </div>
</div>
</section>

<section className="relative" id="features">
<div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#FFFFFF]/10">

<div className="lg:col-span-5 p-[clamp(2rem,5vw,5rem)] bg-[#050505] relative">
<div className="sticky top-[clamp(6rem,12vh,8rem)] reveal-up">
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.05em] text-[#00E676] mb-[clamp(2rem,4vw,4rem)] block">/002/ The Core Benefits</span>
<h2 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2.5rem,4vw,4rem)] leading-[1] tracking-tight text-[#FFFFFF] mb-[clamp(1.5rem,2vw,2rem)]">
                            Finance doesn't have to be terrifying.
                        </h2>
<ul className="text-[#A1A1AA] font-light text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.6] space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00E676] mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong>Zero-Risk Simulator:</strong> Practice with virtual money. Make mistakes and learn without losing a single real rupee.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00E676] mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong>Bite-Sized Lessons:</strong> Ditch overwhelming advice. Learn through simple, jargon-free modules that actually make sense.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00E676] mt-1 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span><strong>24/7 AI Coach:</strong> Ask anything without judgment. Get instant, verified answers to build your investing confidence.</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-7 bg-[#0A0A0A] p-[clamp(1.5rem,3vw,3rem)] pb-[clamp(5rem,10vh,8rem)] relative">

<div className="sticky top-[clamp(6rem,15vh,10rem)] rounded-none border border-[#FFFFFF]/10 bg-[#121212] p-[clamp(2rem,4vw,4rem)] shadow-2xl mb-[clamp(2rem,4vh,3rem)] transition-all duration-300 hover:border-[#00E676]/50 hover-target reveal-up">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#00E676] mb-8 border-b border-[#FFFFFF]/10 pb-4 uppercase tracking-widest">Interactive Dashboard</div>
<h3 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2rem,3vw,3rem)] text-[#FFFFFF] tracking-tight mb-4">Zero-Risk Simulator</h3>
<p className="text-[#A1A1AA] font-light text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.6]">
                            Test strategies in live market conditions. We give you a virtual ₹10,000 portfolio to practice compounding, making mistakes, and learning mechanics without losing a single real rupee.
                        </p>
</div>

<div className="sticky top-[clamp(8rem,20vh,12rem)] rounded-none border border-[#FFFFFF]/10 bg-[#121212] p-[clamp(2rem,4vw,4rem)] shadow-2xl transition-all duration-300 hover:border-[#00E676]/50 hover-target reveal-up delay-100">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#A1A1AA] mb-8 border-b border-[#FFFFFF]/10 pb-4 uppercase tracking-widest">Instant Clarification</div>
<h3 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2rem,3vw,3rem)] text-[#FFFFFF] tracking-tight mb-4">24/7 AI Finance Coach</h3>
<p className="text-[#A1A1AA] font-light text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.6] mb-6">
                            Stuck on a concept? Fearful of a market drop? Our AI coach provides instant, verified, and jargon-free answers to keep your momentum going.
                        </p>
<div className="bg-[#050505] border border-[#FFFFFF]/10 p-4 font-['JetBrains_Mono',monospace] font-light text-sm text-[#A1A1AA]">
<span className="text-[#00E676]">User:</span> What exactly is a mutual fund?<br/><br/>
<span className="text-[#FFFFFF]">Coach:</span> Imagine buying a slice of a giant pizza instead of ordering 50 different ingredients...
                        </div>
</div>
</div>
</div>
</section>

<section className="border-t border-b border-[#FFFFFF]/10 bg-[#050505]" id="how-it-works">
<div className="p-[clamp(2rem,5vw,5rem)] border-b border-[#FFFFFF]/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.05em] text-[#00E676] mb-4 block reveal-up">/003/ The Roadmap</span>
<h2 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2.5rem,4vw,4rem)] leading-[1] tracking-tight text-[#FFFFFF] reveal-up delay-100">
                        How It Works.
                    </h2>
</div>
<div className="text-right hidden md:block reveal-up delay-200">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#A1A1AA]">PROGRESSION</div>
<div className="flex gap-2 mt-2">
<div className="w-8 h-[2px] bg-[#00E676]"></div>
<div className="w-8 h-[2px] bg-[#00E676]/30"></div>
<div className="w-8 h-[2px] bg-[#00E676]/30"></div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#FFFFFF]/10">

<div className="md:col-span-7 p-[clamp(2rem,4vw,4rem)] md:border-b border-[#FFFFFF]/10 relative overflow-hidden group hover:bg-[#121212] transition-colors duration-500 reveal-up">
<div className="absolute -right-4 -bottom-10 font-['Clash_Display',sans-serif] font-normal text-[clamp(10rem,15vw,20rem)] leading-none text-[#FFFFFF]/5 group-hover:text-[#00E676]/5 transition-colors duration-500 pointer-events-none select-none tracking-tighter">1</div>
<div className="relative z-10">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(1rem,1.2vw,1.25rem)] text-[#00E676] mb-[clamp(1.5rem,2vw,2rem)] border border-[#00E676]/20 inline-block px-3 py-1">STEP 01</div>
<h3 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2rem,3vw,2.5rem)] text-[#FFFFFF] mb-[clamp(1rem,1.5vw,1.5rem)] tracking-tight">Master the Basics</h3>
<p className="text-[#A1A1AA] font-light text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.6] max-w-lg">
                            Start with simple, jargon-free lessons you can finish on your phone. Build a solid financial foundation in minutes without any boring textbooks.
                        </p>
</div>
</div>

<div className="md:col-span-5 p-[clamp(2rem,4vw,4rem)] md:border-b border-[#FFFFFF]/10 relative overflow-hidden group hover:bg-[#121212] transition-colors duration-500 reveal-up delay-100">
<div className="absolute -right-4 -bottom-10 font-['Clash_Display',sans-serif] font-normal text-[clamp(10rem,15vw,20rem)] leading-none text-[#FFFFFF]/5 group-hover:text-[#00E676]/5 transition-colors duration-500 pointer-events-none select-none tracking-tighter">2</div>
<div className="relative z-10">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(1rem,1.2vw,1.25rem)] text-[#FFFFFF] mb-[clamp(1.5rem,2vw,2rem)] border border-[#FFFFFF]/20 inline-block px-3 py-1">STEP 02</div>
<h3 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2rem,3vw,2.5rem)] text-[#FFFFFF] mb-[clamp(1rem,1.5vw,1.5rem)] tracking-tight">Practice Without Fear</h3>
<p className="text-[#A1A1AA] font-light text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.6]">
                            Test strategies in our live market simulator. Build muscle memory and confidence before using your actual savings.
                        </p>
</div>
</div>

<div className="md:col-span-12 p-[clamp(2rem,4vw,4rem)] relative overflow-hidden group hover:bg-[#121212] transition-colors duration-500 reveal-up delay-200 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Clash_Display',sans-serif] font-normal text-[clamp(15rem,25vw,30rem)] leading-none text-[#FFFFFF]/5 group-hover:text-[#00E676]/5 transition-colors duration-500 pointer-events-none select-none tracking-tighter">3</div>
<div className="relative z-10 max-w-xl">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(1rem,1.2vw,1.25rem)] text-[#FFFFFF] mb-[clamp(1.5rem,2vw,2rem)] border border-[#FFFFFF]/20 inline-block px-3 py-1">STEP 03</div>
<h3 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2rem,3vw,3.5rem)] text-[#FFFFFF] mb-[clamp(1rem,1.5vw,1.5rem)] tracking-tight">Invest With Confidence</h3>
<p className="text-[#A1A1AA] font-light text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.6]">
                            Graduate to real wealth creation. Use our verified frameworks and guided pathways to start compounding your ₹1k–₹10k safely.
                        </p>
</div>
<div className="relative z-10 hidden lg:block text-right border-l border-[#FFFFFF]/10 pl-8">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#00E676] mb-2 uppercase tracking-widest">End Goal</div>
<div className="font-['Clash_Display',sans-serif] font-normal text-[clamp(1.5rem,2vw,2rem)] tracking-tight">FINANCIAL FREEDOM</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#FFFFFF]/10 bg-[#0A0A0A] relative overflow-hidden" id="simulator">
<div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#FFFFFF]/10 min-h-[70vh]">

<div className="lg:col-span-5 p-[clamp(2rem,4vw,4rem)] flex flex-col justify-center relative z-10 bg-[#050505]">
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.05em] text-[#00E676] mb-[clamp(1.5rem,2vw,2rem)] block reveal-up">/004/ Terminal Projection</span>
<h2 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2.5rem,3.5vw,3.5rem)] leading-[1] tracking-tight text-[#FFFFFF] mb-[clamp(3rem,4vw,4rem)] reveal-up delay-100">
                        See your<br/>future growth.
                    </h2>
<div className="space-y-[clamp(2rem,4vw,3rem)] reveal-up delay-200">

<div>
<div className="flex justify-between items-end mb-4 border-b border-[#FFFFFF]/20 pb-2">
<label className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase text-[#A1A1AA] tracking-widest">Current Savings (₹)</label>
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(1.25rem,1.5vw,1.5rem)] text-[#FFFFFF]" id="val-starting">₹10,000</span>
</div>
<input className="hover-target" id="slider-starting" max="100000" min="0" step="1000" type="range" value="10000"/>
</div>

<div>
<div className="flex justify-between items-end mb-4 border-b border-[#FFFFFF]/20 pb-2">
<label className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase text-[#A1A1AA] tracking-widest">Monthly SIP (₹)</label>
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(1.25rem,1.5vw,1.5rem)] text-[#FFFFFF]" id="val-monthly">₹2,000</span>
</div>
<input className="hover-target" id="slider-monthly" max="10000" min="0" step="500" type="range" value="2000"/>
</div>
</div>
</div>

<div className="lg:col-span-7 p-[clamp(2rem,4vw,4rem)] flex flex-col justify-center items-center relative z-10 overflow-hidden group">
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-40" style={{background: 'radial-gradient(circle at center, rgba(0,230,118,0.3) 0%, transparent 70%)'}}></div>
<div className="relative z-10 w-full text-center">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.875rem,1vw,1rem)] uppercase text-[#A1A1AA] mb-4 tracking-widest flex items-center justify-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse"></div>
                            Projected Portfolio (10 YR @ 12%)
                        </div>
<div className="font-['Clash_Display',sans-serif] font-normal text-[clamp(3.5rem,8vw,10rem)] leading-[0.85] text-[#00E676] tracking-tighter text-clip-mask overflow-hidden transition-all duration-300 transform group-hover:scale-105">
                            ₹<span id="projected-value">506,490</span>
</div>
</div>
<a className="absolute bottom-[clamp(2rem,4vw,4rem)] right-[clamp(2rem,4vw,4rem)] px-[clamp(1.5rem,2vw,2rem)] py-[clamp(1rem,1.5vw,1.25rem)] font-['JetBrains_Mono',monospace] font-normal text-[clamp(0.875rem,1vw,1rem)] uppercase tracking-wider text-[#FFFFFF] border border-[#FFFFFF]/20 transition-all duration-300 hover:bg-[#FFFFFF]/10 hover-target flex items-center gap-3 z-20 bg-[#0A0A0A]/50 backdrop-blur-md" href="#pricing">
                        Start Simulating
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vh,10rem)] border-b border-[#FFFFFF]/10 bg-[#050505]">
<div className="px-[clamp(2rem,5vw,5rem)] mb-[clamp(4rem,6vh,6rem)] text-center max-w-4xl mx-auto">
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.05em] text-[#00E676] mb-4 block reveal-up">/005/ User Logs</span>
<h2 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(3rem,5vw,5rem)] leading-[1] tracking-tight text-[#FFFFFF] reveal-up delay-100">
                    Trusted by students &amp; professionals.
                </h2>
</div>

<div className="px-[clamp(1.5rem,3vw,3rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,2vw,2rem)]">

<div className="flex flex-col gap-[clamp(1.5rem,2vw,2rem)] reveal-up">
<div className="spotlight-card border border-[#FFFFFF]/10 bg-[#121212] p-[clamp(2rem,3vw,3rem)]">
<div className="spotlight-content">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#00E676] mb-6 uppercase tracking-widest border-b border-[#FFFFFF]/10 pb-2">Log entry #4092</div>
<p className="text-[#FFFFFF] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.6] mb-8 font-['Clash_Display',sans-serif] tracking-tight">
                                "FinFlow took my ₹2k monthly savings and showed me exactly how to grow it without the fear of losing it all in the market."
                            </p>
<div className="flex justify-between items-end border-t border-[#FFFFFF]/10 pt-4">
<div className="font-['JetBrains_Mono',monospace] font-light text-[#FFFFFF] text-[clamp(0.875rem,1vw,1rem)]">Rahul S.</div>
<div className="text-[#A1A1AA] text-[clamp(0.75rem,0.8vw,0.875rem)] font-light font-['Inter',sans-serif]">Design Student</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-[clamp(1.5rem,2vw,2rem)] md:mt-[clamp(4rem,6vw,6rem)] reveal-up delay-100">
<div className="spotlight-card border border-[#FFFFFF]/10 bg-[#121212] p-[clamp(2rem,3vw,3rem)]">
<div className="spotlight-content">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#00E676] mb-6 uppercase tracking-widest border-b border-[#FFFFFF]/10 pb-2">Log entry #5120</div>
<p className="text-[#FFFFFF] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.6] mb-8 font-['Clash_Display',sans-serif] tracking-tight">
                                "The gamified simulator is addictive. I practiced for 3 weeks before putting real money in. Highly recommend for complete beginners."
                            </p>
<div className="flex justify-between items-end border-t border-[#FFFFFF]/10 pt-4">
<div className="font-['JetBrains_Mono',monospace] font-light text-[#FFFFFF] text-[clamp(0.875rem,1vw,1rem)]">Priya M.</div>
<div className="text-[#A1A1AA] text-[clamp(0.75rem,0.8vw,0.875rem)] font-light font-['Inter',sans-serif]">Software Engineer</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-[clamp(1.5rem,2vw,2rem)] lg:mt-[clamp(2rem,3vw,3rem)] reveal-up delay-200">
<div className="spotlight-card border border-[#FFFFFF]/10 bg-[#121212] p-[clamp(2rem,3vw,3rem)]">
<div className="spotlight-content">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#00E676] mb-6 uppercase tracking-widest border-b border-[#FFFFFF]/10 pb-2">Log entry #6841</div>
<p className="text-[#FFFFFF] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.6] mb-8 font-['Clash_Display',sans-serif] tracking-tight">
                                "Finally, a finance app that doesn't feel like a textbook. The AI coach explained mutual funds to me in 30 seconds."
                            </p>
<div className="flex justify-between items-end border-t border-[#FFFFFF]/10 pt-4">
<div className="font-['JetBrains_Mono',monospace] font-light text-[#FFFFFF] text-[clamp(0.875rem,1vw,1rem)]">Aman K.</div>
<div className="text-[#A1A1AA] text-[clamp(0.75rem,0.8vw,0.875rem)] font-light font-['Inter',sans-serif]">Marketing Exec</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#FFFFFF]/10 bg-[#0A0A0A] relative overflow-hidden py-[clamp(5rem,10vh,8rem)]" id="pricing">
<div className="px-[clamp(1.5rem,3vw,3rem)] max-w-7xl mx-auto">

<div className="text-center md:text-left mb-[clamp(3rem,5vw,4rem)] reveal-up">
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.05em] text-[#00E676] mb-4 block">/006/ Subscription</span>
<h2 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2.5rem,4vw,4rem)] leading-[1] tracking-tight text-[#FFFFFF]">
                        Start your journey.
                    </h2>
</div>

<div className="border border-[#FFFFFF]/10 bg-[#050505] relative group reveal-up delay-100 shadow-2xl">

<div className="absolute inset-0 bg-[#00E676]/[0.02] pointer-events-none transition-opacity duration-500 group-hover:bg-[#00E676]/[0.05]"></div>

<div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#FFFFFF]/10">

<div className="p-[clamp(2.5rem,5vw,5rem)] flex flex-col justify-center relative z-10">

<div className="font-['JetBrains_Mono',monospace] font-normal text-[clamp(1rem,1.2vw,1.25rem)] text-[#FFFFFF] uppercase tracking-widest mb-4 border border-[#FFFFFF]/20 inline-block px-4 py-2 w-max">Smart Start</div>
<p className="text-[#A1A1AA] font-light text-[clamp(1rem,1.1vw,1.125rem)] mb-10 leading-[1.6]">
                                Everything you need to master your money and build long-term financial confidence.
                            </p>
<div className="mb-10">
<div className="flex items-baseline gap-3 mb-4">
<span className="font-['Clash_Display',sans-serif] font-normal text-[clamp(4rem,5vw,5.5rem)] leading-none text-[#00E676] tracking-tight">₹199</span>
<span className="font-['JetBrains_Mono',monospace] font-light text-[#A1A1AA] text-[clamp(1rem,1.1vw,1.125rem)] uppercase tracking-wider">/ month</span>
</div>
<div className="inline-flex items-center gap-3 bg-[#00E676]/10 border border-[#00E676]/30 px-4 py-2 rounded-none">
<div className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse"></div>
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#00E676] uppercase tracking-wider">Free 1-Month Demo</span>
</div>
</div>
<button className="w-full py-[clamp(1.25rem,1.5vw,1.5rem)] font-['JetBrains_Mono',monospace] font-normal text-[clamp(0.875rem,1vw,1rem)] uppercase tracking-widest text-[#050505] bg-[#00E676] transition-all duration-300 hover:bg-[#FFFFFF] hover-target flex items-center justify-center gap-3">
                                Start Your Free Month
                                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="text-center text-[#A1A1AA] font-light text-xs mt-4 font-['Inter',sans-serif] tracking-wide">
                                ₹199/month after your free demo. Cancel anytime.
                            </p>
</div>

<div className="p-[clamp(2.5rem,5vw,5rem)] relative z-10 flex flex-col justify-center bg-[#0A0A0A]/30">
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#A1A1AA] uppercase tracking-widest border-b border-[#FFFFFF]/10 pb-4 mb-8">What's included in Smart Start</div>
<ul className="space-y-[clamp(1.5rem,2vw,2rem)]">

<li className="flex items-start gap-5">
<div className="p-2 bg-[#00E676]/10 border border-[#00E676]/20 shrink-0">
<iconify-icon className="text-[#00E676] block" icon="solar:book-linear" width="24"></iconify-icon>
</div>
<span className="text-[#FFFFFF] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.5] mt-1">Learn finance basics with simple, bite-sized lessons</span>
</li>

<li className="flex items-start gap-5">
<div className="p-2 bg-[#00E676]/10 border border-[#00E676]/20 shrink-0">
<iconify-icon className="text-[#00E676] block" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<span className="text-[#FFFFFF] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.5] mt-1">Practice investing safely with a basic simulator</span>
</li>

<li className="flex items-start gap-5">
<div className="p-2 bg-[#00E676]/10 border border-[#00E676]/20 shrink-0">
<iconify-icon className="text-[#00E676] block" icon="solar:lightbulb-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-[#FFFFFF] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.5] mt-1">Get daily tips to build smart money habits</span>
</li>

<li className="flex items-start gap-5">
<div className="p-2 bg-[#00E676]/10 border border-[#00E676]/20 shrink-0">
<iconify-icon className="text-[#00E676] block" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<span className="text-[#FFFFFF] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.5] mt-1">Track your progress and stay consistent</span>
</li>

<li className="flex items-start gap-5">
<div className="p-2 bg-[#00E676]/10 border border-[#00E676]/20 shrink-0">
<iconify-icon className="text-[#00E676] block" icon="solar:key-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="text-[#FFFFFF] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.5] mt-1">Access essential content to get started</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vh,10rem)] border-b border-[#FFFFFF]/10 bg-[#050505]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(4rem,6vw,8rem)] px-[clamp(2rem,5vw,5rem)]">
<div className="lg:col-span-4 reveal-up">
<span className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-[0.05em] text-[#00E676] mb-4 block">/007/ Query Database</span>
<h2 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(3rem,4vw,4.5rem)] leading-[1] tracking-tight text-[#FFFFFF]">
                        Parameters.
                    </h2>
</div>
<div className="lg:col-span-8 border-t border-[#FFFFFF]/10 reveal-up delay-100">

<div className="faq-item border-b border-[#FFFFFF]/10 group">
<button className="w-full py-[clamp(2rem,3vw,3rem)] flex justify-between items-center text-left hover-target focus:outline-none">
<span className="font-['Clash_Display',sans-serif] font-normal text-[clamp(1.5rem,2vw,2rem)] text-[#FFFFFF] pr-8 group-hover:text-[#00E676] transition-colors tracking-tight">Do I need any finance background?</span>
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(1.5rem,2vw,2rem)] text-[#FFFFFF]/50 faq-icon group-hover:text-[#00E676] transition-colors">+</div>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="pb-[clamp(2rem,3vw,3rem)] flex gap-6 border-t border-[#FFFFFF]/10 pt-6 mt-2">
<div className="w-2 h-2 bg-[#00E676] mt-2 flex-shrink-0"></div>
<p className="text-[#A1A1AA] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.6]">
                                    Zero. FinFlow is built entirely for complete beginners. We explain everything from scratch using simple analogies and jargon-free language.
                                </p>
</div>
</div>
</div>

<div className="faq-item border-b border-[#FFFFFF]/10 group">
<button className="w-full py-[clamp(2rem,3vw,3rem)] flex justify-between items-center text-left hover-target focus:outline-none">
<span className="font-['Clash_Display',sans-serif] font-normal text-[clamp(1.5rem,2vw,2rem)] text-[#FFFFFF] pr-8 group-hover:text-[#00E676] transition-colors tracking-tight">Do I need real money to start?</span>
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(1.5rem,2vw,2rem)] text-[#FFFFFF]/50 faq-icon group-hover:text-[#00E676] transition-colors">+</div>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="pb-[clamp(2rem,3vw,3rem)] flex gap-6 border-t border-[#FFFFFF]/10 pt-6 mt-2">
<div className="w-2 h-2 bg-[#00E676] mt-2 flex-shrink-0"></div>
<p className="text-[#A1A1AA] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.6]">
                                    No. Our simulator gives you virtual money to practice with. You experience real market conditions, but you only invest actual rupees when you feel 100% confident.
                                </p>
</div>
</div>
</div>

<div className="faq-item border-b border-[#FFFFFF]/10 group">
<button className="w-full py-[clamp(2rem,3vw,3rem)] flex justify-between items-center text-left hover-target focus:outline-none">
<span className="font-['Clash_Display',sans-serif] font-normal text-[clamp(1.5rem,2vw,2rem)] text-[#FFFFFF] pr-8 group-hover:text-[#00E676] transition-colors tracking-tight">How does the AI Coach work?</span>
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(1.5rem,2vw,2rem)] text-[#FFFFFF]/50 faq-icon group-hover:text-[#00E676] transition-colors">+</div>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
<div className="pb-[clamp(2rem,3vw,3rem)] flex gap-6 border-t border-[#FFFFFF]/10 pt-6 mt-2">
<div className="w-2 h-2 bg-[#00E676] mt-2 flex-shrink-0"></div>
<p className="text-[#A1A1AA] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] leading-[1.6]">
                                    It's available 24/7 right inside the platform. Ask it anything from "What is a stock?" to "How do taxes work in India?" and get instant, verified, simple answers.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="pt-[clamp(5rem,10vh,10rem)] bg-[#050505] relative overflow-hidden max-w-[120rem] mx-auto border-x border-[#FFFFFF]/10">
<div className="px-[clamp(2rem,5vw,5rem)] grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,6vw,6rem)] mb-[clamp(4rem,8vh,8rem)] border-b border-[#FFFFFF]/10 pb-[clamp(4rem,8vh,8rem)]">
<div className="md:col-span-5 reveal-up">
<div className="font-['Clash_Display',sans-serif] font-normal text-[clamp(2rem,3vw,3rem)] tracking-tight uppercase text-[#FFFFFF] mb-6 flex items-center gap-3">
<div className="w-3 h-3 bg-[#00E676]"></div>
                    FINFLOW
                </div>
<p className="text-[#A1A1AA] font-light text-[clamp(1.125rem,1.2vw,1.25rem)] max-w-sm mb-10 leading-[1.6]">
                    Learn to invest without risking a single rupee. Built for India's next generation.
                </p>
<div className="font-['JetBrains_Mono',monospace] font-light text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#00E676] mb-3 uppercase tracking-widest">Platform Updates</div>
<div className="flex flex-col sm:flex-row h-14 w-full max-w-md border border-[#FFFFFF]/20 focus-within:border-[#00E676] transition-colors">
<input className="bg-transparent px-4 text-[#FFFFFF] font-['JetBrains_Mono',monospace] font-light text-[clamp(0.875rem,1vw,1rem)] focus:outline-none flex-grow placeholder:text-[#FFFFFF]/30 hover-target" placeholder="ENTER EMAIL" type="email"/>
<button className="px-6 bg-[#FFFFFF]/10 text-[#FFFFFF] hover:bg-[#00E676] hover:text-[#050505] transition-colors hover-target font-['JetBrains_Mono',monospace] font-normal text-sm uppercase">
                        Join
                    </button>
</div>
</div>
<div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 reveal-up delay-100 font-['JetBrains_Mono',monospace] font-light text-[clamp(0.875rem,1vw,1rem)] uppercase tracking-wider">
<div className="space-y-4">
<div className="text-[#FFFFFF]/40 mb-6 text-[clamp(0.75rem,0.8vw,0.875rem)] border-b border-[#FFFFFF]/10 pb-2">Index</div>
<a className="block text-[#A1A1AA] hover:text-[#00E676] transition-colors hover-target" href="#how-it-works">How It Works</a>
<a className="block text-[#A1A1AA] hover:text-[#00E676] transition-colors hover-target" href="#features">Features</a>
<a className="block text-[#A1A1AA] hover:text-[#00E676] transition-colors hover-target" href="#simulator">Simulator</a>
</div>
<div className="space-y-4">
<div className="text-[#FFFFFF]/40 mb-6 text-[clamp(0.75rem,0.8vw,0.875rem)] border-b border-[#FFFFFF]/10 pb-2">Network</div>
<a className="block text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors hover-target flex items-center gap-2" href="#">Instagram <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
<a className="block text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors hover-target flex items-center gap-2" href="#">YouTube <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></a>
</div>
<div className="space-y-4 col-span-2 md:col-span-1">
<div className="text-[#FFFFFF]/40 mb-6 text-[clamp(0.75rem,0.8vw,0.875rem)] border-b border-[#FFFFFF]/10 pb-2">Legal</div>
<a className="block text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors hover-target" href="#">Terms</a>
<a className="block text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors hover-target" href="#">Privacy</a>
</div>
</div>
</div>

<div className="w-full overflow-hidden flex justify-center pb-8 select-none">
<h1 className="font-['Clash_Display',sans-serif] font-normal text-[clamp(8rem,18vw,22rem)] leading-[0.75] tracking-tighter text-clip-mask text-center m-0 p-0 reveal-up delay-200 uppercase w-full flex justify-between px-[clamp(2rem,5vw,5rem)]">
<span>F</span><span>I</span><span>N</span><span>F</span><span>L</span><span>O</span><span>W</span>
</h1>
</div>
<div className="w-full bg-[#00E676] py-3 text-center relative z-10 text-[#050505]">
<p className="font-['JetBrains_Mono',monospace] font-normal text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-[0.2em]">
                © 2024 FinFlow // Master money. Zero fear.
            </p>
</div>
</footer>



    </>
  );
}
