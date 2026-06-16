import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
neon: '#C0FF00',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'bounce-slow': 'bounce 3s infinite',
'blob': 'blob 10s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. Cursor Spotlight Animation (Hero Section)
        const heroSection = document.getElementById('hero-section');
        const spotlight = document.querySelector('.cursor-spotlight');

        if(heroSection && spotlight) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                spotlight.style.setProperty('--x', `${x}px`);
                spotlight.style.setProperty('--y', `${y}px`);
            });
        }

        // 2. Scroll Animations (IntersectionObserver)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // 3. Process Line Animation
        const processLine = document.querySelector('.process-line-fill');
        const processSection = document.querySelector('.process-line')?.parentElement?.parentElement;
        
        if(processSection && processLine) {
            const lineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        processLine.style.width = '100%';
                    } else {
                        processLine.style.width = '0';
                    }
                });
            }, { threshold: 0.2 });
            lineObserver.observe(processSection);
        }

        // 4. Accordion Logic
        const accordions = document.querySelectorAll('.accordion-btn');
        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('[data-lucide="plus"]');
                
                document.querySelectorAll('.accordion-content').forEach(c => {
                    if (c !== content) {
                        c.classList.remove('open');
                        c.style.maxHeight = null;
                        const otherIcon = c.previousElementSibling.querySelector('svg');
                        if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                content.classList.toggle('open');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                    icon.style.transition = 'transform 0.3s';
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    icon.style.transform = 'rotate(45deg)';
                    icon.style.transition = 'transform 0.3s';
                }
            });
        });

        // 5. Modal Logic
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');

        window.openModal = function() {
            modalOverlay.classList.remove('hidden');
            setTimeout(() => {
                modalOverlay.classList.remove('opacity-0');
                modalContent.classList.remove('scale-100');
                modalContent.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        window.closeModal = function() {
            modalOverlay.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        if(modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
        }

        /* ---------------------------------------------------------
           PIPELINE ANIMATION SCRIPTS
           --------------------------------------------------------- */
        
        const svgContainer = document.getElementById('pipeline-svg-container');
        const pathBg = document.getElementById('pipeline-path-bg');
        const pathActive = document.getElementById('pipeline-path-active');
        const nodes = [
            document.getElementById('node-1'),
            document.getElementById('node-2'),
            document.getElementById('node-3'),
            document.getElementById('node-4'),
            document.getElementById('node-5')
        ];

        function drawPath() {
            if (!nodes[0]) return;
            
            // Check if element is visible (not hidden on mobile)
            if (getComputedStyle(svgContainer).display === 'none') return;

            const containerRect = document.getElementById('steps-container').getBoundingClientRect();
            const svgRect = svgContainer.getBoundingClientRect();
            
            let d = "";
            let points = [];

            nodes.forEach((node, index) => {
                const rect = node.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2 - svgRect.left;
                const centerY = rect.top + rect.height / 2 - svgRect.top;
                points.push({ x: centerX, y: centerY });
            });

            if (points.length > 0) {
                d += `M ${points[0].x} ${points[0].y}`;
                
                for (let i = 0; i < points.length - 1; i++) {
                    const p1 = points[i];
                    const p2 = points[i+1];
                    const cp1y = p1.y + (p2.y - p1.y) / 2;
                    const cp2y = p1.y + (p2.y - p1.y) / 2;
                    d += ` C ${p1.x} ${cp1y}, ${p2.x} ${cp2y}, ${p2.x} ${p2.y}`;
                }
            }

            pathBg.setAttribute('d', d);
            pathActive.setAttribute('d', d);
            
            const length = pathBg.getTotalLength();
            pathActive.style.strokeDasharray = length;
        }

        function updateScroll() {
            const pipelineSection = document.getElementById('pipeline-section');
            if(!pipelineSection) return;

            const rect = pipelineSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Activate nodes on scroll regardless of line visibility
            nodes.forEach((node, index) => {
                const nodeRect = node.getBoundingClientRect();
                if (nodeRect.top < windowHeight * 0.7) {
                    node.classList.add('active');
                } else {
                    node.classList.remove('active');
                }
            });

            // If line is hidden, skip drawing logic
            if (getComputedStyle(svgContainer).display === 'none') return;

            const start = windowHeight * 0.8;
            const end = -rect.height + windowHeight * 0.5;
            
            let progress = (start - rect.top) / (start - end);
            
            const length = pathBg.getTotalLength();
            const offset = length - (length * (progress * 1.5));
            
            pathActive.style.strokeDashoffset = Math.max(0, Math.min(length, offset));
        }

        // Shopify Counter Logic
        let count = 0;
        const counterEl = document.getElementById('shopify-counter');
        const node1 = document.getElementById('node-1');
        
        if(counterEl && node1) {
            setInterval(() => {
                if (node1.classList.contains('active')) {
                    count++;
                    if (count > 59) count = 0;
                    counterEl.innerText = count < 10 ? '0' + count : count;
                }
            }, 100);
        }

        window.addEventListener('resize', drawPath);
        window.addEventListener('scroll', updateScroll);
        
        setTimeout(() => {
            drawPath();
            updateScroll();
        }, 500);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto">
<span className="font-display font-semibold tracking-tighter text-lg uppercase" style={{}}>Streetlab <span className="text-zinc-500" style={{}}>×</span> Bandits</span>
</div>
<div className="pointer-events-auto hidden md:block">
<button className="group flex items-center gap-2 text-sm font-medium hover:text-neon transition-colors" onclick="document.getElementById('fit-check').scrollIntoView()" style={{}}>
                Start Project <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<div className="fixed bottom-6 right-6 z-40">
<button className="bg-neon font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg flex items-center gap-2 text-black" onclick="document.getElementById('fit-check').scrollIntoView()" style={{}}>
            Start My Brand <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden border-b border-zinc-900" id="hero-section" style={{}}>

<div className="cursor-spotlight"></div>

<div className="absolute inset-0 w-full h-full bg-black overflow-hidden pointer-events-none">

<div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-teal-900 rounded-full mix-blend-screen filter blur-[100px] opacity-25 animate-blob"></div>

<div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-emerald-900 rounded-full mix-blend-screen filter blur-[100px] opacity-25 animate-blob animation-delay-2000"></div>

<div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-lime-900 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 opacity-[0.07] z-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>
<div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">

<svg className="lucide lucide-shirt absolute top-1/4 left-1/4 w-32 h-32 opacity-[0.03] -rotate-12 text-zinc-500" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
<svg className="lucide lucide-printer absolute bottom-1/4 right-1/4 w-40 h-40 opacity-[0.03] rotate-6 text-zinc-500" data-lucide="printer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg>
</div>
<div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md text-xs font-mono text-white reveal-on-scroll border-white/10 bg-white/5 is-visible" style={{}}>
<span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
                ACCEPTING NEW CLIENTS FOR Q1
            </div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] reveal-on-scroll delay-100 text-white is-visible" style={{textShadow: '0 0 40px rgba(16, 185, 129, 0.1)'}}>
                We Build Streetwear <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-400 to-zinc-600" style={{}}>Brands That Sell.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed reveal-on-scroll delay-200 text-zinc-400 is-visible" style={{}}>
                Print-On-Demand + Branding + Marketing.<br/>
<span className="text-zinc-500" style={{}}>All under one roof.</span>
</p>
<div className="pt-8 reveal-on-scroll delay-300 is-visible">
<button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-200 bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon focus:ring-offset-black text-black hover:bg-neon hover:scale-105" onclick="document.getElementById('fit-check').scrollIntoView()" style={{}}>
                    Start My Brand
                    <svg className="lucide lucide-arrow-right w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 border bg-transparent transition-transform group-hover:translate-x-1 group-hover:translate-y-1 border-white/30" style={{}}></div>
</button>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-900 bg-zinc-950/50" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
<div className="lg:col-span-1 reveal-on-scroll">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter leading-tight" style={{}}>
                        Launch your streetwear brand in <span className="text-neon" style={{}}>30 days.</span>
</h2>
</div>
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-4 reveal-on-scroll delay-100 border-l pl-6 border-zinc-800" style={{}}>
<svg className="lucide lucide-factory w-8 h-8 text-neon" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
<h3 className="font-display text-lg font-semibold" style={{}}>Premium POD Manufacturing</h3>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>High GSM fabrics, DTF Prints, and you don't need to hold inventory its on us</p>
</div>
<div className="space-y-4 reveal-on-scroll delay-200 border-l pl-6 border-zinc-800" style={{}}>
<svg className="lucide lucide-pen-tool w-8 h-8 text-neon" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<h3 className="font-display text-lg font-semibold" style={{}}>Branding + Creative</h3>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>Identity design, lookbooks, and visual storytelling that resonates with Gen-Z.</p>
</div>
<div className="space-y-4 reveal-on-scroll delay-300 border-l pl-6 border-zinc-800" style={{}}>
<svg className="lucide lucide-trending-up w-8 h-8 text-neon" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="font-display text-lg font-semibold" style={{}}>90-Day Marketing Plan</h3>
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>Meta ads, influencer seeding strategies, and email flows set up for scale.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter mb-4" style={{}}>The Streetwear Launch Pack</h2>
<div className="inline-block px-4 py-1 border rounded-full text-xs font-mono uppercase tracking-widest border-zinc-800 text-zinc-400" style={{}}>
<span className="text-red-500 mr-2" style={{}}>●</span> Limited Slots Available
                </div>
</div>
<div className="relative border p-8 md:p-12 rounded-2xl reveal-on-scroll neon-glow bg-zinc-900/30 border-zinc-800" style={{}}>
<div className="absolute top-0 right-0 p-4">
<svg className="lucide lucide-sparkles w-6 h-6 text-neon" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-6">
<h3 className="font-mono text-neon text-sm uppercase tracking-wider" style={{}}>What You Get</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 shrink-0 mt-0.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-zinc-300" style={{}}>30-Day Launch System</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 shrink-0 mt-0.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-zinc-300" style={{}}>Custom designs <span className="text-zinc-500 text-sm" style={{}}>(Labels &amp; Tags included)</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 shrink-0 mt-0.5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-zinc-300" style={{}}>Special Ad Creative</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-neon shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neon font-medium" style={{}}>Priority Launch Support</span>
</li>
</ul>
</div>
<div className="flex flex-col justify-between border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-12 border-zinc-800" style={{}}>
<div className="">
<p className="text-sm mb-2 text-zinc-400" style={{}}>Bonus Highlights</p>
<div className="space-y-3">
<div className="border p-3 rounded flex items-center gap-3 bg-zinc-900 border-zinc-800" style={{}}>
<svg className="lucide lucide-video w-4 h-4 text-neon" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="text-sm text-zinc-200" style={{}}>Influencer Marketing Guide</span>
</div>
<div className="border p-3 rounded flex items-center gap-3 bg-zinc-900 border-zinc-800" style={{}}>
<svg className="lucide lucide-box w-4 h-4 text-neon" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-sm text-zinc-200" style={{}}>Custom Packaging Mockups</span>
</div>
</div>
</div>
<div className="mt-8">
<button className="w-full font-semibold py-4 hover:bg-neon transition-colors duration-300 bg-white text-black" onclick="document.getElementById('fit-check').scrollIntoView()" style={{}}>
                                Apply For Access
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-900 bg-zinc-950" style={{}}>
<div className="max-w-3xl mx-auto px-6 text-center reveal-on-scroll">
<div className="mb-6 flex justify-center">
<div className="w-16 h-16 rounded-full border border-neon/30 bg-neon/5 flex items-center justify-center">
<svg className="lucide lucide-shield-check w-8 h-8 text-neon" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<h2 className="font-display text-3xl font-semibold mb-6" style={{}}>Our Launch Guarantee</h2>
<p className="text-lg leading-relaxed text-zinc-300" style={{}}>
                If our launch plan doesn't project at least <span className="font-semibold text-white" style={{}}>₹5,00,000</span> in revenue potential based on our audit, we refund the consultation fee and give you the launch playbook for free.
            </p>
</div>
</section>

<section className="py-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-on-scroll">
<div>
<h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tighter mb-4" style={{}}>Brands We've Helped Build</h2>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 border rounded-full text-xs font-mono border-zinc-800 text-zinc-400" style={{}}>50+ Brands Launched</span>
<span className="px-4 py-2 border rounded-full text-xs font-mono border-zinc-800 text-zinc-400" style={{}}>98% QC Pass Rate</span>
<span className="px-4 py-2 border rounded-full text-xs font-mono border-zinc-800 text-zinc-400" style={{}}>Fast Turnaround</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-x-6 gap-y-6">

<div className="group border p-8 transition-colors reveal-on-scroll delay-100 border-zinc-800 bg-zinc-900/20 hover:border-zinc-600" style={{}}>
<div className="h-12 mb-8 flex items-center">
<span className="font-display font-bold text-2xl tracking-tight" style={{}}>HAUNTREX©</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b pb-2 border-zinc-800" style={{}}>
<span className="text-zinc-500" style={{}}>Before</span>
<span className="text-zinc-300" style={{}}>Struggling to start</span>
</div>
<div className="flex justify-between items-center text-sm border-b pb-2 border-zinc-800" style={{}}>
<span className="text-zinc-500" style={{}}>After</span>
<span className="text-neon font-mono" style={{}}>₹21L Rev / Month</span>
</div>
<p className="text-sm mt-4 pt-2 text-zinc-400" style={{}}>End to end management from designing to Marketing</p>
</div>
</div>

<div className="group border p-8 transition-colors reveal-on-scroll delay-200 border-zinc-800 bg-zinc-900/20 hover:border-zinc-600" style={{}}>
<div className="h-12 mb-8 flex items-center">
<span className="font-display font-bold text-2xl tracking-tight italic" style={{}}>BLUECLOVER</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b pb-2 border-zinc-800" style={{}}>
<span className="text-zinc-500" style={{}}>Before</span>
<span className="text-zinc-300" style={{}}>Struggling with ads</span>
</div>
<div className="flex justify-between items-center text-sm border-b pb-2 border-zinc-800" style={{}}>
<span className="text-zinc-500" style={{}}>After</span>
<span className="text-neon font-mono" style={{}}>8.7x ROAS</span>
</div>
<p className="text-sm mt-4 pt-2 text-zinc-400" style={{}}>Rebranded visual identity and optimized ad strategy.</p>
</div>
</div>

<div className="group border p-8 transition-colors reveal-on-scroll delay-300 border-zinc-800 bg-zinc-900/20 hover:border-zinc-600" style={{}}>
<div className="h-12 mb-8 flex items-center">
<span className="font-display font-bold text-2xl tracking-tight text-zinc-100" style={{}}>BLVKOUT</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b pb-2 border-zinc-800" style={{}}>
<span className="text-zinc-500" style={{}}>Before</span>
<span className="text-zinc-300" style={{}}>Sold out 0 stock</span>
</div>
<div className="flex justify-between items-center text-sm border-b pb-2 border-zinc-800" style={{}}>
<span className="text-zinc-500" style={{}}>After</span>
<span className="text-neon font-mono" style={{}}>Sold out 500 units</span>
</div>
<p className="text-sm mt-4 pt-2 text-zinc-400" style={{}}>Rapid prototyping and drop-shipping logistics setup.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-zinc-950 border-zinc-900" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-3xl font-semibold mb-16 text-center reveal-on-scroll" style={{}}>How We Build Your Brand</h2>
<div className="relative grid md:grid-cols-4 gap-8">
<div className="hidden md:block absolute top-6 left-0 w-full h-px -z-10 bg-zinc-800" style={{}}>
<div className="h-full bg-neon w-0 transition-all duration-1000 ease-out process-line-fill"></div>
</div>
<div className="group relative reveal-on-scroll delay-100">
<div className="w-12 h-12 border group-hover:border-neon group-hover:text-neon transition-colors flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 z-10 bg-black border-zinc-700 text-white" style={{}}>1</div>
<h3 className="text-lg font-semibold mb-2 text-center md:text-left" style={{}}>Idea</h3>
<p className="text-sm text-center md:text-left text-zinc-400" style={{}}>Concept validation and market research.</p>
</div>
<div className="group relative reveal-on-scroll delay-200">
<div className="w-12 h-12 border group-hover:border-neon group-hover:text-neon transition-colors flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 z-10 bg-black border-zinc-700 text-white" style={{}}>2</div>
<h3 className="text-lg font-semibold mb-2 text-center md:text-left" style={{}}>Design</h3>
<p className="text-sm text-center md:text-left text-zinc-400" style={{}}>Apparel design, tech packs, and sampling.</p>
</div>
<div className="group relative reveal-on-scroll delay-300">
<div className="w-12 h-12 border group-hover:border-neon group-hover:text-neon transition-colors flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 z-10 bg-black border-zinc-700 text-white" style={{}}>3</div>
<h3 className="text-lg font-semibold mb-2 text-center md:text-left" style={{}}>Manufacture</h3>
<p className="text-sm text-center md:text-left text-zinc-400" style={{}}>Bulk production with strict QC checks.</p>
</div>
<div className="group relative reveal-on-scroll delay-100">
<div className="w-12 h-12 border group-hover:border-neon group-hover:text-neon transition-colors flex items-center justify-center rounded-full mb-6 mx-auto md:mx-0 z-10 bg-black border-zinc-700 text-white" style={{}}>4</div>
<h3 className="text-lg font-semibold mb-2 text-center md:text-left" style={{}}>Market &amp; Scale</h3>
<p className="text-sm text-center md:text-left text-zinc-400" style={{}}>Launch campaigns and ad optimization.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-black" id="pipeline-section" style={{}}>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-24 relative z-20">
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-4" style={{}}>The Automated Flow</h2>
<p className="text-zinc-400" style={{}}>Scroll down to see the process.</p>
</div>

<svg className="hidden md:block" id="pipeline-svg-container">
<path className="path-bg" d="M 717.2000122070312 396 C 717.2000122070312 596, 333.1999969482422 596, 333.1999969482422 796 C 333.1999969482422 995.9999389648438, 717.2000122070312 995.9999389648438, 717.2000122070312 1195.9998779296875 C 717.2000122070312 1395.9998779296875, 333.1999969482422 1395.9998779296875, 333.1999969482422 1595.9998779296875 C 333.1999969482422 1795.9998779296875, 717.2000122070312 1795.9998779296875, 717.2000122070312 1995.9998779296875" id="pipeline-path-bg"></path>
<path className="path-active" d="M 717.2000122070312 396 C 717.2000122070312 596, 333.1999969482422 596, 333.1999969482422 796 C 333.1999969482422 995.9999389648438, 717.2000122070312 995.9999389648438, 717.2000122070312 1195.9998779296875 C 717.2000122070312 1395.9998779296875, 333.1999969482422 1395.9998779296875, 333.1999969482422 1595.9998779296875 C 333.1999969482422 1795.9998779296875, 717.2000122070312 1795.9998779296875, 717.2000122070312 1995.9998779296875" id="pipeline-path-active" style={{strokeDashoffset: '0', strokeDasharray: '2343.52'}}></path>
</svg>

<div className="relative z-10 space-y-24 md:space-y-0" id="steps-container">

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center md:min-h-[400px]">

<div className="order-2 md:order-1 text-left md:text-right space-y-4 px-4 md:px-0">
<div className="inline-block px-3 py-1 bg-neon/10 text-neon text-xs font-mono border border-neon/20 rounded" style={{}}>01. INTAKE</div>
<h3 className="text-3xl font-semibold font-display" style={{}}>Order Received</h3>
<p className="text-sm text-zinc-400" style={{}}>Shopify API instantly syncs new orders. Live Counter.</p>
</div>

<div className="order-1 md:order-2 flex justify-center md:justify-start">
<div className="process-node w-64 h-64 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-zinc-800" id="node-1" style={{}}>
<iconify-icon className="mb-4 text-white" icon="simple-icons:shopify" width="50"></iconify-icon>
<div className="font-mono text-4xl font-bold text-neon" id="shopify-counter" style={{}}>0</div>
<div className="text-[10px] text-zinc-500 uppercase mt-1 tracking-widest" style={{}}>Active Orders</div>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center md:min-h-[400px]">

<div className="order-1 md:order-1 flex justify-center md:justify-end">
<div className="process-node w-64 h-64 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-zinc-800" id="node-2" style={{}}>
<div className="iso-stack">

<div className="iso-layer">
<div className="skel-line"></div>
<div className="skel-line short"></div>
</div>

<div className="iso-layer">
<div className="skel-line"></div>
<div className="skel-line short"></div>
</div>

<div className="iso-layer">
<div className="flex justify-between items-center mb-1">
<span className="text-[8px] text-neon font-mono" style={{}}>BATCH-01</span>
</div>
<div className="skel-line"></div>
<div className="skel-line short"></div>
<div className="check-badge">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="text-xs mt-8 text-zinc-400" style={{}}>Production Scheduled</div>
</div>
</div>

<div className="order-2 md:order-2 text-left space-y-4 px-4 md:px-0">
<div className="inline-block px-3 py-1 bg-neon/10 text-neon text-xs font-mono border border-neon/20 rounded" style={{}}>02. PLANNING</div>
<h3 className="text-3xl font-semibold font-display" style={{}}>Scheduled</h3>
<p className="text-sm text-zinc-400" style={{}}>Order routed to batch. Time allocated automatically.</p>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center md:min-h-[400px]">

<div className="order-2 md:order-1 text-left md:text-right space-y-4 px-4 md:px-0">
<div className="inline-block px-3 py-1 bg-neon/10 text-neon text-xs font-mono border border-neon/20 rounded" style={{}}>03. PRODUCTION</div>
<h3 className="text-3xl font-semibold font-display" style={{}}>Manufacturing</h3>
<p className="text-sm text-zinc-400" style={{}}>Automated DTG printing with precision gears.</p>
</div>

<div className="order-1 md:order-2 flex justify-center md:justify-start">
<div className="process-node w-64 h-64 rounded-2xl flex items-center justify-center relative overflow-hidden border border-zinc-800" id="node-3" style={{}}>
<div className="relative">
<iconify-icon className="absolute -top-6 -left-6 gear-spin text-zinc-700" icon="lucide:settings" style={{}} width="80"></iconify-icon>
<iconify-icon className="text-neon absolute -bottom-4 -right-4 gear-spin" icon="lucide:settings" style={{animationDirection: 'reverse', animationDuration: '3s'}} width="50"></iconify-icon>
<iconify-icon className="relative z-10 text-white" icon="lucide:shirt" width="60"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center md:min-h-[400px]">

<div className="order-1 md:order-1 flex justify-center md:justify-end">
<div className="process-node w-64 h-64 rounded-2xl flex items-center justify-center relative overflow-hidden border border-zinc-800" id="node-4" style={{}}>
<div className="cube-wrapper">
<div className="cube-face face-front"></div>
<div className="cube-face face-back"></div>
<div className="cube-face face-right"></div>
<div className="cube-face face-left"></div>
<div className="cube-face face-bottom"></div>

<div className="flap flap-front"></div>
<div className="flap flap-back"></div>

<div className="box-item flex items-center justify-center">
<iconify-icon className="text-black" icon="lucide:shirt" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="order-2 md:order-2 text-left space-y-4 px-4 md:px-0">
<div className="inline-block px-3 py-1 bg-neon/10 text-neon text-xs font-mono border border-neon/20 rounded" style={{}}>04. PACKING</div>
<h3 className="text-3xl font-semibold font-display" style={{}}>Smart Packing</h3>
<p className="text-sm text-zinc-400" style={{}}>Item drops in, box seals automatically.</p>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center md:min-h-[400px]">

<div className="order-2 md:order-1 text-left md:text-right space-y-4 px-4 md:px-0">
<div className="inline-block px-3 py-1 bg-neon/10 text-neon text-xs font-mono border border-neon/20 rounded" style={{}}>05. DELIVERY</div>
<h3 className="text-3xl font-semibold font-display" style={{}}>Dispatched</h3>
<p className="text-sm text-zinc-400" style={{}}>Truck leaves the facility. Tracking sent.</p>
</div>

<div className="order-1 md:order-2 flex justify-center md:justify-start">
<div className="process-node w-64 h-64 rounded-2xl flex items-center justify-center relative overflow-hidden border border-zinc-800" id="node-5" style={{}}>
<div className="truck-body relative">
<iconify-icon className="text-neon z-20 relative" icon="lucide:truck" width="80"></iconify-icon>

<div className="absolute bottom-0 -left-2 w-full h-full pointer-events-none">
<div className="smoke-puff w-4 h-4"></div>
<div className="smoke-puff w-3 h-3 left-[-5px]"></div>
<div className="smoke-puff w-5 h-5 left-[-10px]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950" style={{}}>
<div className="max-w-6xl mx-auto px-6">
<h2 className="font-display text-3xl font-semibold mb-12 text-center" style={{}}>We're Not For Everyone</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="border p-8 rounded-lg reveal-on-scroll border-green-900/30 bg-green-950/10" style={{}}>
<h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{}}>
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                        We are a match if...
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-300" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            You value quality manufacturing over cheap pricing.
                        </li>
<li className="flex items-start gap-3 text-zinc-300" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            You want branding &amp; ads done professionally.
                        </li>
<li className="flex items-start gap-3 text-zinc-300" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-green-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            You are ready to build a real asset, not just a side hustle.
                        </li>
</ul>
</div>
<div className="border p-8 rounded-lg reveal-on-scroll delay-100 border-red-900/30 bg-red-950/10" style={{}}>
<h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{}}>
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
                        We are NOT for you if...
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-300" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            You are looking for the cheapest vendor in the market.
                        </li>
<li className="flex items-start gap-3 text-zinc-300" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            You aren't serious about investing in marketing.
                        </li>
<li className="flex items-start gap-3 text-zinc-300" style={{}}>
<svg className="lucide lucide-x w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            You have no clear goals or vision.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-panel border-y border-zinc-800" id="fit-check" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b to-transparent pointer-events-none from-zinc-900/50" style={{}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-on-scroll">
<div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-neon/20">
<svg className="lucide lucide-clipboard-check w-10 h-10 text-neon" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter mb-6" style={{}}>60-Second Fit Check</h2>
<p className="text-xl mb-12 max-w-2xl mx-auto font-light text-zinc-400" style={{}}>
                We only work with a few brands each month. Answer a few quick questions to see if we're a good match for your launch.
            </p>
<button className="bg-neon text-black hover:bg-white animate-bounce-slow transition-all hover:shadow-[0_0_50px_rgba(192,255,0,0.5)] transform hover:-translate-y-1 text-lg font-semibold rounded-none pt-5 pr-10 pb-5 pl-10 shadow-[0_0_30px_rgba(192,255,0,0.3)] cursor-pointer" onclick="window.location.href='https://tally.so/r/kde5y6'" role="button">
                Start Questionnaire →
            </button>
<p className="mt-4 text-xs text-zinc-500 font-mono" style={{}}>Takes less than 1 minute • No obligation</p>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-display text-3xl font-semibold mb-4" style={{}}>Choose Your Launch Budget</h2>
<p className="text-zinc-400" style={{}}>Pricing helps us match you with the right launch plan.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="border p-8 transition-colors reveal-on-scroll border-zinc-800 bg-zinc-900/30 hover:border-zinc-600" style={{}}>
<h3 className="text-lg font-semibold mb-2 text-zinc-300" style={{}}>Starter</h3>
<p className="text-3xl font-display font-semibold mb-6" style={{}}>From ₹5L</p>
<ul className="text-sm space-y-2 mb-8 text-zinc-400" style={{}}>
<li style={{}}>• Basic Branding</li>
<li style={{}}>• 5 SKUs POD</li>
<li style={{}}>• Launch Strategy</li>
</ul>
</div>
<div className="border border-neon p-8 relative reveal-on-scroll delay-100 bg-zinc-900/60" style={{}}>
<div className="absolute top-0 right-0 bg-neon text-xs font-bold px-3 py-1 uppercase text-black" style={{}}>Most Popular</div>
<h3 className="text-lg font-semibold text-neon mb-2" style={{}}>Scale</h3>
<p className="text-3xl font-display font-semibold mb-6" style={{}}>From ₹10L</p>
<ul className="text-sm space-y-2 mb-8 text-zinc-300" style={{}}>
<li style={{}}>• Full Brand Identity</li>
<li style={{}}>• 10 SKUs + Custom Labels</li>
<li style={{}}>• 90-Day Marketing Mgmt</li>
</ul>
</div>
<div className="border p-8 transition-colors reveal-on-scroll delay-200 border-zinc-800 bg-zinc-900/30 hover:border-zinc-600" style={{}}>
<h3 className="text-lg font-semibold mb-2 text-zinc-300" style={{}}>Enterprise</h3>
<p className="text-3xl font-display font-semibold mb-6" style={{}}>Custom</p>
<ul className="text-sm space-y-2 mb-8 text-zinc-400" style={{}}>
<li style={{}}>• Complete Brand Overhaul</li>
<li style={{}}>• Unlimited SKUs</li>
<li style={{}}>• Dedicated Account Mgr</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900" style={{}}>
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display text-3xl font-semibold mb-12 text-center reveal-on-scroll" style={{}}>Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="border-b pb-4 reveal-on-scroll border-zinc-800" style={{}}>
<button className="accordion-btn w-full flex justify-between items-center text-left py-2 hover:text-neon transition-colors focus:outline-none">
<span className="text-lg font-medium" style={{}}>What's included in the launch?</span>
<svg className="lucide lucide-plus w-5 h-5 text-zinc-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="accordion-content">
<p className="pt-2 pb-4 leading-relaxed text-zinc-400" style={{}}>Everything you need: Manufacturing of your initial stock, complete branding (logo, colors, typography), and a comprehensive 90-day marketing strategy to get sales from day one.</p>
</div>
</div>
<div className="border-b pb-4 reveal-on-scroll delay-100 border-zinc-800" style={{}}>
<button className="accordion-btn w-full flex justify-between items-center text-left py-2 hover:text-neon transition-colors focus:outline-none">
<span className="text-lg font-medium" style={{}}>How fast is delivery?</span>
<svg className="lucide lucide-plus w-5 h-5 text-zinc-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="accordion-content">
<p className="pt-2 pb-4 leading-relaxed text-zinc-400" style={{}}>Our typical turnaround for sampling is 7-10 days. Bulk production takes 14-20 days depending on complexity. Direct-to-customer orders dispatch within 48 hours.</p>
</div>
</div>
<div className="border-b pb-4 reveal-on-scroll delay-200 border-zinc-800" style={{}}>
<button className="accordion-btn w-full flex justify-between items-center text-left py-2 hover:text-neon transition-colors focus:outline-none">
<span className="text-lg font-medium" style={{}}>What if I don't have designs?</span>
<svg className="lucide lucide-plus w-5 h-5 text-zinc-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="accordion-content">
<p className="pt-2 pb-4 leading-relaxed text-zinc-400" style={{}}>No problem. Our in-house design team specializes in streetwear aesthetics. We can create designs from scratch based on your vision or mood boards.</p>
</div>
</div>
<div className="border-b pb-4 reveal-on-scroll delay-300 border-zinc-800" style={{}}>
<button className="accordion-btn w-full flex justify-between items-center text-left py-2 hover:text-neon transition-colors focus:outline-none">
<span className="text-lg font-medium" style={{}}>How do you guarantee results?</span>
<svg className="lucide lucide-plus w-5 h-5 text-zinc-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="accordion-content">
<p className="pt-2 pb-4 leading-relaxed text-zinc-400" style={{}}>We perform a detailed audit before taking you on. If our data shows your niche isn't viable for our minimum revenue targets, we won't take your money. If we proceed, we back it with our refund guarantee.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center px-6 bg-zinc-950" style={{}}>
<div className="max-w-2xl mx-auto reveal-on-scroll">
<h2 className="font-display text-3xl font-semibold mb-4" style={{}}>Book Your Strategy Call</h2>
<p className="mb-8 text-zinc-400" style={{}}>Available only for qualified applicants who pass the Fit Check.</p>
<button className="bg-neon text-black hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 font-semibold px-8 py-4 text-lg inline-flex items-center gap-2 rounded-none" onclick="document.getElementById('fit-check').scrollIntoView({ behavior: 'smooth' })">
                Book Now
                <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<footer className="py-12 border-t text-center border-zinc-900 bg-black" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<p className="font-display font-semibold tracking-tight mb-4 text-white" style={{}}>Streetlab Studios <span className="text-zinc-600" style={{}}>×</span> Marketing Bandits</p>
<p className="text-zinc-500 text-sm mb-8" style={{}}>info@streetlabstudios.com</p>
<p className="text-xs text-zinc-700" style={{}}>© 2025 All Rights Reserved. Streetwear infrastructure for the modern age.</p>
</div>
</footer>

<div className="fixed inset-0 z-[60] backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 bg-black/90" id="modal-overlay">
<div className="w-full max-w-2xl h-[80vh] border rounded-lg relative transform scale-95 transition-transform duration-300 flex flex-col bg-zinc-900 border-zinc-800" id="modal-content" style={{}}>
<div className="flex justify-between items-center p-6 border-b border-zinc-800" style={{}}>
<h3 className="font-display text-xl font-semibold" style={{}}>Fit Check Questionnaire</h3>
<button className="text-zinc-400 hover:text-white" onclick="closeModal()" style={{}}>
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 flex items-center justify-center p-6 bg-zinc-950" style={{}}>
<div className="text-center text-zinc-500 space-y-4" style={{}}>
<svg className="lucide lucide-file-text w-16 h-16 mx-auto opacity-20" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<p className="font-mono" style={{}}>[Typeform / Tally Embed Placeholder]</p>
<p className="text-sm max-w-sm mx-auto" style={{}}>This area would contain the embedded questionnaire form.</p>
</div>
</div>
</div>
</div>



    </>
  );
}
