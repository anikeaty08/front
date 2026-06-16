import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
green: { 500: '#00FF00' }
}
}
}
}



        // 1. Smooth Scroll (Lenis)
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        gsap.registerPlugin(ScrollTrigger);

        // 2. Custom Cursor
        const cursor = document.getElementById('cursor');
        const hoverTriggers = document.querySelectorAll('.hover-trigger');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverTriggers.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // 3. Canvas Animation (Blue Grid/Dots)
        const canvas = document.getElementById('hero-canvas');
        if(canvas) {
            const ctx = canvas.getContext('2d');
            let width, height;
            let streams = [];
            const gap = 40; 

            class Stream {
                constructor(x) {
                    this.x = x;
                    this.y = Math.random() * height;
                    this.speed = Math.random() * 2 + 0.5;
                    this.length = Math.random() * 100 + 50;
                    this.opacity = Math.random() * 0.3 + 0.05;
                }
                update() {
                    this.y -= this.speed;
                    if (this.y + this.length < 0) {
                        this.y = height + Math.random() * 100;
                        this.speed = Math.random() * 2 + 0.5;
                    }
                }
                draw(ctx) {
                    // Adjusted to a very subtle blueish white to match "Blue Grid" prompt request subtly
                    ctx.strokeStyle = `rgba(180, 220, 255, 0.05)`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(this.x, 0);
                    ctx.lineTo(this.x, height);
                    ctx.stroke();

                    const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
                    gradient.addColorStop(0, `rgba(100, 200, 255, 0)`);
                    gradient.addColorStop(0.5, `rgba(100, 200, 255, ${this.opacity})`);
                    gradient.addColorStop(1, `rgba(100, 200, 255, 0)`);

                    ctx.fillStyle = gradient;
                    ctx.fillRect(this.x - 1, this.y, 3, this.length);
                    
                    // Add dots
                    ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity * 2})`;
                    ctx.fillRect(this.x - 1, this.y, 3, 3);
                }
            }

            function initCanvas() {
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
                streams = [];
                for (let x = gap / 2; x < width; x += gap) {
                    streams.push(new Stream(x));
                }
            }

            function animateCanvas() {
                ctx.clearRect(0, 0, width, height);
                streams.forEach(s => {
                    s.update();
                    s.draw(ctx);
                });
                requestAnimationFrame(animateCanvas);
            }

            window.addEventListener('resize', initCanvas);
            initCanvas();
            animateCanvas();
        }

        // 4. Hero Text Animations
        const headings = document.querySelectorAll('.mask-text span');
        headings.forEach((h, i) => {
            gsap.to(h, {
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: i * 0.1
            });
        });

        gsap.to(".animate-fade-in", { opacity: 1, duration: 1, delay: 0.5 });
        gsap.to(".animate-fade-up", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" });

        // 5. Testimonial Parallax
        const testimonialSection = document.querySelector('#testimonials');
        const cols = document.querySelectorAll('.testimonial-col');
        if(testimonialSection && cols.length) {
            cols.forEach((col) => {
                const speed = col.dataset.speed;
                gsap.to(col, {
                    y: () => (speed * 100), 
                    ease: "none",
                    scrollTrigger: {
                        trigger: testimonialSection,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }

        // 6. 3D Card Tilt
        const cards3d = document.querySelectorAll('.card-3d-wrap');
        cards3d.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                const inner = card.querySelector('.card-3d-inner');
                inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                const inner = card.querySelector('.card-3d-inner');
                inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
            });
        });
        
        // 7. FAQ Accordion Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            // Close all others
            document.querySelectorAll('#accordion-container > div').forEach(div => {
                if (div !== button.parentElement) {
                    div.querySelector('div').style.height = '0px';
                    div.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                }
            });

            if (content.style.height && content.style.height !== '0px') {
                content.style.height = '0px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.height = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
            }
        }
        
        // 8. Number Animation for Pricing
        const counter = document.getElementById('pricing-counter');
        if(counter) {
            let interval;
            const animateCounter = () => {
                let runs = 0;
                interval = setInterval(() => {
                    counter.innerText = '$' + Math.floor(Math.random() * 10000);
                    runs++;
                    if(runs > 20) {
                        clearInterval(interval);
                        counter.innerText = 'Your Custom Quote';
                    }
                }, 50);
            };
            
            ScrollTrigger.create({
                trigger: counter,
                start: "top 80%",
                onEnter: animateCounter
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-transform duration-300" id="navbar">
<div className="max-w-[1600px] mx-auto flex items-center justify-between glass rounded-full px-8 py-4">
<a className="flex items-center gap-3 group hover-trigger" href="#">

<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
<iconify-icon icon="solar:soundwave-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-display font-bold tracking-tight text-lg text-white">SIGNAL <span className="font-light text-neutral-500">PR</span></span>
</a>
<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger" href="#services">Services</a>
<a className="text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger" href="#methodology">How We Work</a>
<a className="text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors hover-trigger" href="#faq">FAQ</a>
</div>
<a className="border border-white/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover-trigger" href="https://calendly.com/signalpr" target="_blank">
                Book a Call
            </a>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden z-10 pr-6 pl-6 relative items-center justify-center pt-20">

<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0" id="hero-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 z-0 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 opacity-0 animate-fade-in hover-trigger">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-300">Web3 PR + AI Search</span>
</div>

<h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter text-white leading-[0.95] mb-12 mix-blend-difference">
<span className="mask-text"><span>BE VISIBLE</span></span>
<span className="mask-text"><span className="text-neutral-500">IN AI SEARCH</span></span>
<span className="mask-text"><span>&amp; MEDIA</span></span>
</h1>

<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-12 border-t border-white/10 pt-8 opacity-0 animate-fade-up">
<p className="text-neutral-400 text-sm max-w-sm text-left leading-relaxed">
                    First Web3 agency combining traditional PR with AI search optimization. Get mentioned by ChatGPT, Perplexity, and featured in top-tier media.
                </p>
<div className="flex gap-12 mt-8 md:mt-0">
<div className="text-left">
<div className="text-2xl font-display font-bold">50+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Projects Launched</div>
</div>
<div className="text-left">
<div className="text-2xl font-display font-bold">$100M+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500">Client Valuation</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 relative z-10 bg-[#050509] border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

<div className="sticky top-32 h-fit">
<h2 className="text-5xl md:text-6xl font-display text-white mb-8 tracking-tight">
<span className="mask-text"><span>Our</span></span>
<span className="mask-text"><span>Services</span></span>
</h2>
<p className="text-neutral-400 text-lg max-w-md mb-12 opacity-0 animate-fade-in">
        We don't just do PR; we engineer visibility. Our methodology combines traditional media relations with cutting-edge AI search optimization to ensure your project is discovered everywhere.
    </p>
<ul className="space-y-4 opacity-0 animate-fade-in">
<li className="flex items-center gap-4 text-white">
<span className="h-[1px] w-8 bg-white"></span> Web3 PR &amp; Media Relations
        </li>
<li className="flex gap-4 text-neutral-500 gap-x-4 gap-y-4 items-center">
<span className="h-[1px] w-8 bg-neutral-800"></span> AI Search Optimization (GEO)
        </li>
<li className="flex items-center gap-4 text-neutral-500">
<span className="h-[1px] w-8 bg-neutral-800"></span> Podcast Placements
        </li>
</ul>
</div>

<div className="flex flex-col gap-12">

<div className="card-3d-wrap group h-[500px] w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise">

<div className="card-element relative w-full h-64 border border-white/10 bg-[#0f0f0f]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative w-full h-full">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-[spin_15s_linear_reverse_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
<line stroke="white" strokeWidth="0.5" x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line stroke="white" strokeWidth="0.5" x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line stroke="white" strokeWidth="0.5" x1="50%" x2="50%" y1="50%" y2="80%"></line>
<circle className="animate-pulse" cx="20%" cy="20%" fill="white" r="2"></circle>
<circle className="animate-pulse" cx="80%" cy="20%" fill="white" r="2" style={{animationDelay: '0.5s'}}></circle>
</svg>
</div>
<div className="absolute bottom-3 left-4 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                    MEDIA NETWORK: 500+ OUTLETS
                                </div>
</div>

<div className="card-element relative z-10">
<h3 className="text-2xl font-display font-medium text-white mb-2">Web3 PR &amp; Media Relations</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Strategic media placements in CoinDesk, Cointelegraph, Bloomberg, Forbes, and 500+ crypto and mainstream outlets. Narrative development and crisis management.</p>
</div>
</div>
</div>

<div className="card-3d-wrap group h-[500px] w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise">

<div className="card-element relative w-full h-64 mb-6 perspective-1000">
<div className="absolute top-4 left-4 w-full h-full border border-white/5 bg-white/[0.02] rounded-xl -z-10"></div>
<div className="w-full h-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-2xl transform transition-transform group-hover:-translate-y-2">
<div className="h-8 border-b border-white/10 bg-white/[0.03] flex items-center px-3 gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="p-4 font-mono text-[11px] text-neutral-400 space-y-2 leading-relaxed">
<div className="flex gap-2"><span className="text-purple-400">const</span> <span className="text-blue-400">optimizeAI</span> = <span className="text-yellow-300">async</span> () =&gt; {</div>
<div className="pl-4"><span className="text-purple-400">await</span> llm.analyze(<span className="text-green-400">'brand_mentions'</span>);</div>
<div className="pl-4 text-neutral-600">// Optimizing for ChatGPT, Perplexity...</div>
<div className="pl-4 bg-white/10 h-3 w-32 rounded animate-type"></div>
<div>}</div>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-green-500/10 border border-green-500/30 text-green-500 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                                    AI-READY
                                </div>
</div>

<div className="card-element relative z-10">
<h3 className="text-2xl font-display font-medium text-white mb-2">AI Search Optimization (GEO)</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Generative Engine Optimization for AI assistants. Get your project mentioned when users ask ChatGPT, Perplexity, Claude, and Gemini about your industry.</p>
</div>
</div>
</div>

<div className="card-3d-wrap group h-[500px] w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise">

<div className="card-element relative w-full h-64 border border-white/10 bg-[#0f0f0f]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center gap-1">

<div className="w-2 bg-white/80 rounded-full animate-wave" style={{animationDelay: '0.1s'}}></div>
<div className="w-2 bg-white/40 rounded-full animate-wave" style={{animationDelay: '0.3s'}}></div>
<div className="w-2 bg-white/80 rounded-full animate-wave" style={{animationDelay: '0.5s'}}></div>
<div className="w-2 bg-white/30 rounded-full animate-wave" style={{animationDelay: '0.2s'}}></div>
<div className="w-2 bg-white/90 rounded-full animate-wave" style={{animationDelay: '0.4s'}}></div>
<div className="w-2 bg-white/50 rounded-full animate-wave" style={{animationDelay: '0.6s'}}></div>
<div className="w-2 bg-white/80 rounded-full animate-wave" style={{animationDelay: '0.1s'}}></div>
<div className="w-2 bg-white/40 rounded-full animate-wave" style={{animationDelay: '0.3s'}}></div>
<div className="absolute bottom-3 right-4 flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> REC
                                </div>
</div>

<div className="card-element relative z-10">
<h3 className="text-2xl font-display font-medium text-white mb-2">Podcast Placements</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Guest appearances on top Web3 podcasts. We handle outreach, preparation, and post-show amplification to maximize your thought leadership.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative border-t border-white/5" id="methodology">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-4">How We Work</h2>
<p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Our Proven Process</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="border border-white/10 bg-[#0a0a0a] rounded-2xl p-8 md:p-12 relative overflow-hidden bg-noise">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon className="text-white" icon="solar:megaphone-linear" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-display mb-12">PR Process</h3>
<div className="space-y-12 relative pl-8 border-l border-white/10">

<div className="relative group">
<span className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-black border border-white/30 group-hover:bg-white group-hover:border-white transition-colors"></span>
<h4 className="text-white font-bold mb-2">01. Discovery</h4>
<p className="text-neutral-500 text-sm">Deep dive into your project, competitors, and target audience.</p>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-black border border-white/30 group-hover:bg-white group-hover:border-white transition-colors"></span>
<h4 className="text-white font-bold mb-2">02. Strategy</h4>
<p className="text-neutral-500 text-sm">Custom media plan with outlet targeting and narrative angles.</p>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-black border border-white/30 group-hover:bg-white group-hover:border-white transition-colors"></span>
<h4 className="text-white font-bold mb-2">03. Outreach</h4>
<p className="text-neutral-500 text-sm">Journalist relationships and story pitching.</p>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-black border border-white/30 group-hover:bg-white group-hover:border-white transition-colors"></span>
<h4 className="text-white font-bold mb-2">04. Amplification</h4>
<p className="text-neutral-500 text-sm">Social proof, syndication, and ongoing coverage.</p>
</div>
</div>
</div>

<div className="border border-white/10 bg-[#0a0a0a] rounded-2xl p-8 md:p-12 relative overflow-hidden bg-noise">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon className="text-white" icon="solar:cpu-bolt-linear" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-display mb-12">LLM Optimization</h3>
<div className="space-y-12 relative pl-8 border-l border-white/10">

<div className="relative group">
<span className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-black border border-white/30 group-hover:bg-green-500 group-hover:border-green-500 transition-colors"></span>
<h4 className="text-white font-bold mb-2">01. Audit</h4>
<p className="text-neutral-500 text-sm">Analyze current AI search visibility across all major LLMs.</p>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-black border border-white/30 group-hover:bg-green-500 group-hover:border-green-500 transition-colors"></span>
<h4 className="text-white font-bold mb-2">02. Optimize</h4>
<p className="text-neutral-500 text-sm">Content restructuring for AI citation patterns.</p>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-black border border-white/30 group-hover:bg-green-500 group-hover:border-green-500 transition-colors"></span>
<h4 className="text-white font-bold mb-2">03. Authority</h4>
<p className="text-neutral-500 text-sm">Build authoritative sources that LLMs trust.</p>
</div>

<div className="relative group">
<span className="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-black border border-white/30 group-hover:bg-green-500 group-hover:border-green-500 transition-colors"></span>
<h4 className="text-white font-bold mb-2">04. Monitor</h4>
<p className="text-neutral-500 text-sm">Track mentions and adjust strategy.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative border-t border-white/10 overflow-hidden" id="testimonials">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">Client Success Stories</h2>
<p className="text-neutral-500 uppercase tracking-widest text-xs font-bold">Trusted by Web3 Leaders</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[700px] overflow-hidden relative">
<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>

<div className="flex flex-col gap-8 testimonial-col" data-speed="0.5">
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/30 transition-all group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Signal PR transformed our media presence. Within 3 months, we went from unknown to featured in Forbes and CoinDesk."</p>
<div>
<div className="text-white text-sm font-bold">Alex K.</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">CEO, DeFi Protocol</div>
</div>
</div>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/30 transition-all group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"The only PR agency that truly understands Web3."</p>
<div>
<div className="text-white text-sm font-bold">David L.</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">Founder, Web3 Infrastructure</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 testimonial-col -mt-24" data-speed="-0.3">
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/30 transition-all group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Their AI search optimization is game-changing. We now appear in ChatGPT responses when users ask about our industry."</p>
<div>
<div className="text-white text-sm font-bold">Maria S.</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">CMO, NFT Marketplace</div>
</div>
</div>
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/30 transition-all group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"Strategic execution from day one."</p>
<div>
<div className="text-white text-sm font-bold">Chris P.</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">CTO, Layer 1</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 testimonial-col" data-speed="0.6">
<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/30 transition-all group hover-trigger">
<p className="text-lg text-neutral-300 font-light mb-6 leading-relaxed">"The podcast placements they secured brought us incredible exposure and new partnerships."</p>
<div>
<div className="text-white text-sm font-bold">Jennifer W.</div>
<div className="text-neutral-600 text-xs uppercase tracking-wider">Head of Marketing, L2 Network</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#050509] border-t border-white/5 flex flex-col items-center justify-center">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-4">Investment</h2>
<p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Transparent Pricing</p>
</div>
<div className="relative w-full max-w-lg">
<div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur opacity-30"></div>
<div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-12 text-center overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-50"></div>
<div className="mb-8 h-20 flex items-center justify-center overflow-hidden">
<div className="font-display text-5xl md:text-6xl text-white font-bold" id="pricing-counter">Your Custom Quote</div>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                    Every project is unique. Let's discuss your goals and create a tailored strategy.
                </p>
<a className="inline-block w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-neutral-200 transition-colors hover-trigger" href="https://calendly.com/signalpr" target="_blank">
                    Get Your Quote
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black border-t border-white/5" id="faq">
<div className="max-w-4xl mx-auto">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-4">Questions</h2>
<p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Frequently Asked</p>
</div>
<div className="space-y-4" id="accordion-container">

<div className="group border-b border-white/10">
<button className="w-full text-left py-6 flex justify-between items-center focus:outline-none hover-trigger" onclick="toggleFaq(this)">
<span className="text-lg text-white font-medium">What makes Signal PR different?</span>
<iconify-icon className="text-neutral-500 transition-transform duration-300 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pb-6 text-neutral-400 text-sm leading-relaxed">We're the first agency to combine traditional PR with AI search optimization (GEO). While others focus only on media placements, we ensure your project is also mentioned by AI assistants like ChatGPT and Perplexity.</p>
</div>
</div>
<div className="group border-b border-white/10">
<button className="w-full text-left py-6 flex justify-between items-center focus:outline-none hover-trigger" onclick="toggleFaq(this)">
<span className="text-lg text-white font-medium">What is AI Search Optimization (GEO)?</span>
<iconify-icon className="text-neutral-500 transition-transform duration-300 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pb-6 text-neutral-400 text-sm leading-relaxed">Generative Engine Optimization is the practice of optimizing your online presence so AI assistants cite and recommend your project. As 40%+ of users now use AI for search, this is becoming essential for visibility.</p>
</div>
</div>
<div className="group border-b border-white/10">
<button className="w-full text-left py-6 flex justify-between items-center focus:outline-none hover-trigger" onclick="toggleFaq(this)">
<span className="text-lg text-white font-medium">Which media outlets do you work with?</span>
<iconify-icon className="text-neutral-500 transition-transform duration-300 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pb-6 text-neutral-400 text-sm leading-relaxed">We have relationships with 500+ outlets including CoinDesk, Cointelegraph, Decrypt, The Block, Bloomberg, Forbes, TechCrunch, and many more. We match outlets to your specific audience and goals.</p>
</div>
</div>
<div className="group border-b border-white/10">
<button className="w-full text-left py-6 flex justify-between items-center focus:outline-none hover-trigger" onclick="toggleFaq(this)">
<span className="text-lg text-white font-medium">How long does it take to see results?</span>
<iconify-icon className="text-neutral-500 transition-transform duration-300 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pb-6 text-neutral-400 text-sm leading-relaxed">PR results typically begin within 2-4 weeks with initial placements. AI search optimization takes 4-8 weeks to show measurable improvements as LLMs update their knowledge bases.</p>
</div>
</div>
<div className="group border-b border-white/10">
<button className="w-full text-left py-6 flex justify-between items-center focus:outline-none hover-trigger" onclick="toggleFaq(this)">
<span className="text-lg text-white font-medium">Do you offer podcast placements?</span>
<iconify-icon className="text-neutral-500 transition-transform duration-300 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pb-6 text-neutral-400 text-sm leading-relaxed">Yes. We secure guest appearances on top Web3 podcasts, handle all preparation, and amplify episodes post-publication to maximize your thought leadership impact.</p>
</div>
</div>
<div className="group border-b border-white/10">
<button className="w-full text-left py-6 flex justify-between items-center focus:outline-none hover-trigger" onclick="toggleFaq(this)">
<span className="text-lg text-white font-medium">What are your pricing models?</span>
<iconify-icon className="text-neutral-500 transition-transform duration-300 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pb-6 text-neutral-400 text-sm leading-relaxed">We offer monthly retainers for PR services, and project-based pricing for specific campaigns. AI search optimization packages are customized based on your current visibility and goals.</p>
</div>
</div>
<div className="group border-b border-white/10">
<button className="w-full text-left py-6 flex justify-between items-center focus:outline-none hover-trigger" onclick="toggleFaq(this)">
<span className="text-lg text-white font-medium">Can you help with crisis management?</span>
<iconify-icon className="text-neutral-500 transition-transform duration-300 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pb-6 text-neutral-400 text-sm leading-relaxed">Yes. We provide rapid response crisis management including media monitoring, statement preparation, and strategic communication to protect your reputation.</p>
</div>
</div>
<div className="group border-b border-white/10">
<button className="w-full text-left py-6 flex justify-between items-center focus:outline-none hover-trigger" onclick="toggleFaq(this)">
<span className="text-lg text-white font-medium">How do we get started?</span>
<iconify-icon className="text-neutral-500 transition-transform duration-300 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="h-0 overflow-hidden transition-all duration-300">
<p className="pb-6 text-neutral-400 text-sm leading-relaxed">Book a strategy call through our website. We'll discuss your project, goals, and create a custom proposal within 48 hours.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-[#050509] border-t border-white/5 pt-24 pb-12">
<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
<div className="lg:col-span-1 space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm overflow-hidden">
<iconify-icon icon="solar:soundwave-square-linear" width="20"></iconify-icon>
</div>
<span className="font-display font-bold tracking-tight text-lg text-white">SIGNAL <span className="font-light text-neutral-500">PR</span></span>
</a>
</div>
<div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#methodology">How We Work</a></li>
<li><a className="hover:text-white transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Telegram</a></li>
</ul>
</div>
</div>
<div className="lg:col-span-1">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-2 p-1 bg-white text-black rounded hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600 uppercase tracking-widest">
                    © 2025 Signal PR. All Rights Reserved.
                </div>
<div className="flex gap-6 text-[10px] text-neutral-600 uppercase tracking-widest">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
