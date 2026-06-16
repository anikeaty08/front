import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
background: '#0a0510',
accent: '#8b5cf6',
glow: '#d946ef',
muted: '#c4b5fd',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Initialize Smooth Scrolling (Lenis)
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

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Header Background Blur on Scroll
        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: { className: 'bg-black/60', targets: '#header' },
        });
        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: { className: 'backdrop-blur-xl', targets: '#header' },
        });
        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: { className: 'border-white/10', targets: '#header' },
        });

        // Hero Load Animation
        gsap.from('.hero-element', {
            y: 40,
            opacity: 0,
            duration: 1.5,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });

        // Story Beats Animation
        const storyBeats = document.querySelectorAll('.story-beat');
        storyBeats.forEach((beat) => {
            const lines = beat.querySelectorAll('.story-line');
            const fadeUps = beat.querySelectorAll('.fade-up-element');

            if (lines.length > 0) {
                gsap.to(lines, {
                    scrollTrigger: {
                        trigger: beat,
                        start: "top 60%",
                    },
                    y: "0%",
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power4.out"
                });
            }

            if (fadeUps.length > 0) {
                gsap.to(fadeUps, {
                    scrollTrigger: {
                        trigger: beat,
                        start: "top 70%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power2.out"
                });
            }
        });

        // Generic Section Titles
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

        // Why Intima Cards
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: '.feature-card',
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Marketplace Preview
        gsap.from('.market-text', {
            scrollTrigger: {
                trigger: '#marketplace',
                start: "top 70%",
            },
            x: -50,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        });

        gsap.from('.market-card', {
            scrollTrigger: {
                trigger: '#marketplace',
                start: "top 70%",
            },
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.2
        });

        // Token Grid
        gsap.from('.token-grid > div', {
            scrollTrigger: {
                trigger: '.token-grid',
                start: "top 80%",
            },
            scale: 0.95,
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out"
        });

        // Roadmap Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#roadmap',
                start: "top 60%",
            }
        });

        tl.to('#roadmap-line', {
            width: '100%',
            duration: 2,
            ease: "power1.inOut"
        });

        gsap.from('.roadmap-phase', {
            scrollTrigger: {
                trigger: '#roadmap',
                start: "top 50%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            delay: 0.5
        });

        // Simulate dot coloring based on timeline (purely visual for demo)
        setTimeout(() => {
            ScrollTrigger.create({
                trigger: '#roadmap',
                start: "top 40%",
                onEnter: () => {
                    const dots = document.querySelectorAll('.phase-dot');
                    dots.forEach((dot, index) => {
                        setTimeout(() => {
                            dot.classList.remove('border-slate-600', 'bg-background');
                            dot.classList.add('border-accent', 'bg-background', 'shadow-[0_0_15px_rgba(139,92,246,0.5)]');
                        }, index * 300 + 1500); // sync roughly with line animation
                    });
                }
            });
        }, 1000);


        // How to Buy Cards
        gsap.from('.step-card', {
            scrollTrigger: {
                trigger: '#how-to-buy',
                start: "top 70%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out"
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen"></div>
<div className="fixed top-[40%] right-[-10%] w-[600px] h-[600px] bg-glow/5 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen"></div>
<div className="fixed bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen"></div>

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between border-b border-transparent" id="header">
<a className="font-serif text-2xl tracking-[0.2em] uppercase text-white hover:text-muted transition-colors z-10" href="#">Intima</a>
<nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
<a className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-white transition-colors" href="#marketplace">Marketplace</a>
<a className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-white transition-colors" href="#token">Token</a>
<a className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="text-xs uppercase tracking-[0.15em] text-slate-300 hover:text-white transition-colors" href="#how-to-buy">How to Buy</a>
</nav>
<a className="relative group z-10" href="#how-to-buy">
<div className="absolute inset-0 bg-accent rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
<div className="relative bg-accent/90 border border-white/10 px-8 py-3 rounded-full text-sm font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:bg-accent transition-colors backdrop-blur-sm flex items-center gap-2">
                Buy INTIMA
            </div>
</a>
</header>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center z-10">
<div className="hero-element inline-flex items-center gap-3 border border-accent/30 bg-accent/5 backdrop-blur-sm rounded-full px-5 py-2 mb-10">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
<span className="text-xs uppercase tracking-[0.15em] text-muted font-medium">Solana · 0% Tax · Hybrid Token</span>
</div>
<h1 className="hero-element font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight text-white leading-[0.9] max-w-5xl mb-8">
            Digital Pleasure.<br/>
<span className="italic text-slate-200">Real Connection.</span>
</h1>
<p className="hero-element text-xl md:text-2xl text-slate-300 font-light max-w-2xl mb-12 leading-relaxed">
            Feel Something Again. Hybrid memecoin built on Solana for adults only.
        </p>
<div className="hero-element flex flex-col sm:flex-row items-center gap-6 mb-16">
<a className="relative group w-full sm:w-auto" href="#how-to-buy">
<div className="absolute inset-0 bg-accent rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="relative bg-accent text-white px-10 py-4 rounded-full text-lg border border-white/10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-[1.02]">
                    Buy INTIMA
                </div>
</a>
<a className="w-full sm:w-auto px-10 py-4 rounded-full text-lg text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2" href="#marketplace">
                Explore Marketplace <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="hero-element flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400 font-light">
<span>Solana</span>
<span className="w-1 h-1 rounded-full bg-slate-600 mt-2"></span>
<span>0% Tax</span>
<span className="w-1 h-1 rounded-full bg-slate-600 mt-2"></span>
<span>Marketplace Utility</span>
<span className="w-1 h-1 rounded-full bg-slate-600 mt-2"></span>
<span>Hybrid Token</span>
</div>
</section>

<section className="relative w-full z-10">

<div className="story-beat min-h-screen flex flex-col items-center justify-center px-4 py-32">
<h2 className="font-serif text-6xl md:text-8xl lg:text-[8rem] tracking-tight leading-[1.1] text-center text-white">
<span className="block overflow-hidden pb-2"><span className="story-line block translate-y-full opacity-0">Not everyone</span></span>
<span className="block overflow-hidden pb-2"><span className="story-line block translate-y-full opacity-0 text-slate-300 italic">talks about</span></span>
<span className="block overflow-hidden"><span className="story-line block translate-y-full opacity-0">desire.</span></span>
</h2>
</div>

<div className="story-beat min-h-screen flex flex-col items-center justify-center px-4 py-32">
<h2 className="font-serif text-6xl md:text-8xl lg:text-[8rem] tracking-tight leading-[1.1] text-center text-white">
<span className="block overflow-hidden pb-2"><span className="story-line block translate-y-full opacity-0">But everyone</span></span>
<span className="block overflow-hidden"><span className="story-line block translate-y-full opacity-0 text-accent">feels it.</span></span>
</h2>
</div>

<div className="story-beat min-h-screen flex items-center px-6 md:px-20 relative max-w-7xl mx-auto">
<div className="absolute left-6 md:left-20 top-1/4 translate-y-[-50%] text-xs text-accent uppercase tracking-[0.2em] fade-up-element opacity-0">
                + Origin
            </div>
<div className="max-w-3xl fade-up-element opacity-0">
<p className="text-3xl md:text-5xl text-slate-200 font-light leading-snug">
                    INTIMA is a hybrid memecoin built on Solana. Born in crypto. Designed exclusively for adults.
                </p>
</div>
</div>

<div className="story-beat min-h-screen flex items-center justify-end px-6 md:px-20 relative max-w-7xl mx-auto text-right w-full">
<div className="max-w-3xl ml-auto fade-up-element opacity-0">
<p className="text-3xl md:text-5xl text-slate-200 font-light leading-snug">
                    It connects digital energy with real-world lifestyle products — confidence, chemistry, intimacy.
                </p>
</div>
</div>

<div className="story-beat min-h-screen flex flex-col items-center justify-center px-4 py-32 text-center">
<h2 className="font-serif text-6xl md:text-8xl lg:text-[8rem] tracking-tight leading-[1.1] text-white mb-10">
<span className="block overflow-hidden pb-2"><span className="story-line block translate-y-full opacity-0">This is not</span></span>
<span className="block overflow-hidden"><span className="story-line block translate-y-full opacity-0">about hype.</span></span>
</h2>
<p className="text-2xl md:text-3xl text-muted font-light fade-up-element opacity-0">It's about adults choosing to feel.</p>
</div>

<div className="story-beat min-h-screen flex flex-col items-center justify-center px-4 py-32 text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen fade-up-element opacity-0"></div>
<h2 className="font-serif text-6xl md:text-8xl lg:text-[8rem] tracking-tight leading-[1.1] text-white">
<span className="block overflow-hidden pb-2"><span className="story-line block translate-y-full opacity-0 text-slate-400">No shame.</span></span>
<span className="block overflow-hidden pb-2"><span className="story-line block translate-y-full opacity-0 text-slate-300">No pretending.</span></span>
<span className="block overflow-hidden"><span className="story-line block translate-y-full opacity-0">Just <span className="bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent">intention.</span></span></span>
</h2>
</div>

<div className="story-beat min-h-screen flex flex-col items-center justify-center px-4 py-32 text-center relative">
<div className="absolute left-6 md:left-20 top-1/2 translate-y-[-50%] text-xs text-accent uppercase tracking-[0.2em] fade-up-element opacity-0 hidden lg:block">
                + Community
            </div>
<h2 className="font-serif text-6xl md:text-8xl lg:text-[8rem] tracking-tight leading-[1.1] text-white">
<span className="block overflow-hidden pb-2"><span className="story-line block translate-y-full opacity-0">For those</span></span>
<span className="block overflow-hidden pb-2"><span className="story-line block translate-y-full opacity-0 italic">who feel</span></span>
<span className="block overflow-hidden"><span className="story-line block translate-y-full opacity-0">deeply.</span></span>
</h2>
</div>

<div className="story-beat min-h-screen flex flex-col items-center justify-center px-4 py-32 text-center max-w-4xl mx-auto">
<div className="space-y-16 text-2xl md:text-4xl leading-relaxed font-light">
<div className="fade-up-element opacity-0 text-slate-400">
<p>For the curious.</p>
<p>For the confident.</p>
<p>For the ones who explore boldly.</p>
</div>
<div className="fade-up-element opacity-0 text-white font-normal">
<p>INTIMA welcomes every adult.</p>
</div>
<div className="fade-up-element opacity-0 text-slate-400">
<p>This is not about labels.</p>
<p>It's about sensation. Emotion. Chemistry.</p>
</div>
</div>
</div>

<div className="story-beat min-h-[80vh] flex flex-col items-center justify-center px-4 py-32 text-center max-w-5xl mx-auto">
<div className="fade-up-element opacity-0 text-3xl md:text-5xl font-light text-slate-300 leading-snug mb-16">
<p className="mb-8 text-white">Different bodies. Different stories.<br/>One shared spark.</p>
<p>If you believe pleasure is part of being human —<br/>you're already one of us.</p>
</div>
<div className="w-px h-24 bg-gradient-to-b from-accent/50 to-transparent fade-up-element opacity-0"></div>
</div>
</section>

<section className="py-32 px-4 relative z-10">
<div className="max-w-7xl mx-auto">
<h2 className="section-title font-serif text-5xl md:text-7xl tracking-tight text-center mb-24 text-white">
                Built different. <span className="italic text-slate-400">On purpose.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="feature-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<span className="text-xs text-accent uppercase tracking-[0.15em] mb-6 block font-medium">/01</span>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4">Hybrid by Design</h3>
<p className="text-slate-300 font-light leading-relaxed">Born in crypto. Built for real-world adult experiences. INTIMA connects blockchain energy with physical lifestyle, products and curated digital access.</p>
</div>
</div>

<div className="feature-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<span className="text-xs text-accent uppercase tracking-[0.15em] mb-6 block font-medium">/02</span>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4">Access &amp; Perks</h3>
<p className="text-slate-300 font-light leading-relaxed">Holders unlock selected lifestyle products, future benefits, and exclusive access within the INTIMA ecosystem. Ownership means more than holding — it means access.</p>
</div>
</div>

<div className="feature-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<span className="text-xs text-accent uppercase tracking-[0.15em] mb-6 block font-medium">/03</span>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4">Marketplace Utility</h3>
<p className="text-slate-300 font-light leading-relaxed">INTIMA is not only something you hold. It can be used inside the INTIMA Marketplace, where digital value meets real-world sensation.</p>
</div>
</div>

<div className="feature-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<span className="text-xs text-accent uppercase tracking-[0.15em] mb-6 block font-medium">/04</span>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4">Real Chemistry</h3>
<p className="text-slate-300 font-light leading-relaxed">Attraction is real. Touch matters. Chemistry changes everything. INTIMA connects adults who understand the unspoken side of life.</p>
</div>
</div>

<div className="feature-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<span className="text-xs text-accent uppercase tracking-[0.15em] mb-6 block font-medium">/05</span>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4">No Labels. Just Desire.</h3>
<p className="text-slate-300 font-light leading-relaxed">Pleasure belongs to adults. Without judgment. Without categories. Without apology.</p>
</div>
</div>

<div className="feature-card bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl p-10 relative overflow-hidden group hover:border-accent/30 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<span className="text-xs text-accent uppercase tracking-[0.15em] mb-6 block font-medium">/06</span>
<h3 className="text-2xl font-sans tracking-tight text-white mb-4">Risk &amp; Responsibility</h3>
<p className="text-slate-300 font-light leading-relaxed">INTIMA is an experimental memecoin aiming to build real-world utility. Its value may rise or fall. Only use what you are comfortable dedicating.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-10 overflow-hidden" id="marketplace">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
<div className="market-text pr-0 lg:pr-10">
<h2 className="font-serif text-5xl md:text-7xl tracking-tight text-white mb-10 leading-[1.1]">
                    Where digital value meets <span className="text-accent italic">real sensation.</span>
</h2>
<div className="space-y-6 text-xl text-slate-300 font-light leading-relaxed mb-12">
<p>INTIMA is not only something you hold.<br/>It's something you can use.</p>
<p>Curated adult lifestyle products.<br/>Limited drops. Selected creators.<br/>Future real-world integrations.</p>
</div>
<div className="flex items-center gap-4">
<button className="px-8 py-3 rounded-full text-lg text-white border border-white/20 bg-white/5 backdrop-blur-md cursor-default opacity-70">
                        Explore Marketplace
                    </button>
<span className="text-xs text-accent border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-full uppercase tracking-[0.15em] font-medium">
                        Coming Soon
                    </span>
</div>
</div>
<div className="market-card relative">
<div className="absolute -inset-10 bg-glow/10 blur-[100px] rounded-full pointer-events-none -z-10 mix-blend-screen"></div>
<div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-4 h-[600px] flex flex-col shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

<div className="w-full flex-1 bg-gradient-to-b from-[#1a1025] to-background rounded-[2rem] mb-8 relative overflow-hidden border border-white/5 flex items-center justify-center">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'10\' height=\\'10\' viewBox=\\'0 0 10 10\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.02\\' fill-rule=\\'evenodd\\'%3E%3Cpath d=\\'M0 0h10v10H0z\\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
<i className="w-16 h-16 text-white/10 stroke-[1]" data-lucide="droplet"></i>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
</div>

<div className="px-6 pb-6 relative z-10">
<div className="flex justify-between items-start mb-2">
<h3 className="text-3xl font-serif tracking-tight text-white">TEMPO</h3>
<span className="text-xs text-muted uppercase tracking-[0.15em]">Concept</span>
</div>
<p className="text-accent text-sm tracking-wide mb-6">by INTIMA</p>
<div className="space-y-4 text-sm font-light">
<p className="text-slate-300">A potential first step into real-world utility.</p>
<p className="text-slate-400">Designed for men's confidence. Built for discretion.</p>
<div className="w-full h-px bg-white/10 my-4"></div>
<p className="font-serif italic text-slate-500 text-lg">"Sometimes what is used by one is enjoyed by at least two."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-10" id="token">
<div className="max-w-4xl mx-auto text-center">
<h2 className="section-title font-serif text-5xl md:text-6xl tracking-tight text-white mb-16">Transparent by design.</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 token-grid">
<div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center gap-3 hover:bg-white/[0.05] transition-colors">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium">Symbol</span>
<span className="text-2xl text-white font-serif tracking-tight">INTIMA</span>
</div>
<div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center gap-3 hover:bg-white/[0.05] transition-colors">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium">Chain</span>
<span className="text-2xl text-white font-serif tracking-tight">Solana</span>
</div>
<div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center gap-3 hover:bg-white/[0.05] transition-colors">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium">Tax</span>
<span className="text-2xl text-accent font-serif tracking-tight">0%</span>
</div>
<div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center gap-3 hover:bg-white/[0.05] transition-colors">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium">Total Supply</span>
<span className="text-2xl text-white font-serif tracking-tight">100,000,000</span>
</div>
<div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center gap-3 hover:bg-white/[0.05] transition-colors">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium">Decimals</span>
<span className="text-2xl text-white font-serif tracking-tight">4</span>
</div>
<div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-center gap-3 hover:bg-white/[0.05] transition-colors">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium">Liquidity</span>
<span className="text-2xl text-white font-serif tracking-tight">Locked</span>
</div>
</div>
<div className="flex flex-col items-center gap-4 text-sm font-light text-slate-400 fade-up-element">
<p>Ownership: <span className="text-slate-300">To be renounced after ecosystem stabilization</span></p>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
<span>Official Contract:</span>
<span className="text-white font-mono tracking-wider">TBA AT LAUNCH</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden" id="roadmap">
<div className="px-4 max-w-7xl mx-auto mb-20 text-center">
<h2 className="section-title font-serif text-5xl md:text-7xl tracking-tight text-white">The path forward.</h2>
</div>
<div className="relative w-full">

<div className="overflow-x-auto pb-16 px-4 md:px-20 scroll-smooth" style={{scrollbarWidth: 'none'}}>
<div className="flex w-max min-w-full relative pt-10">

<div className="absolute top-10 left-0 h-[1px] w-full bg-white/10"></div>
<div className="absolute top-10 left-0 h-[2px] bg-gradient-to-r from-accent via-glow to-transparent shadow-[0_0_10px_rgba(217,70,239,0.5)] w-0" id="roadmap-line"></div>

<div className="flex gap-8 lg:gap-16">

<div className="roadmap-phase w-[320px] md:w-[400px] flex-shrink-0 relative pt-12">
<div className="absolute top-0 left-8 w-3 h-3 -mt-[5px] rounded-full bg-background border-2 border-accent shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10"></div>
<div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-3xl p-8 h-full">
<span className="text-xs text-accent uppercase tracking-[0.15em] font-medium block mb-2">Phase 1 · Q2 2026</span>
<h3 className="text-2xl font-serif tracking-tight text-white mb-6">Controlled Launch</h3>
<ul className="space-y-3 text-slate-400 font-light text-base">
<li className="flex gap-3"><i className="w-5 h-5 text-accent/70 shrink-0" data-lucide="check"></i> Token deployed on Solana</li>
<li className="flex gap-3"><i className="w-5 h-5 text-accent/70 shrink-0" data-lucide="check"></i> Ultra-limited private allocation</li>
<li className="flex gap-3"><i className="w-5 h-5 text-accent/70 shrink-0" data-lucide="check"></i> Official Raydium liquidity pool</li>
<li className="flex gap-3"><i className="w-5 h-5 text-accent/70 shrink-0" data-lucide="check"></i> Contract verified on Solscan</li>
<li className="flex gap-3"><i className="w-5 h-5 text-accent/70 shrink-0" data-lucide="check"></i> Website live</li>
</ul>
</div>
</div>

<div className="roadmap-phase w-[320px] md:w-[400px] flex-shrink-0 relative pt-12">
<div className="absolute top-0 left-8 w-3 h-3 -mt-[5px] rounded-full bg-background border-2 border-slate-600 z-10 transition-colors duration-500 phase-dot"></div>
<div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-3xl p-8 h-full">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium block mb-2">Phase 2 · Q3 2026</span>
<h3 className="text-2xl font-serif tracking-tight text-white mb-6">Utility Activation</h3>
<ul className="space-y-3 text-slate-400 font-light text-base">
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Initial marketplace products listed</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Limited drops for early holders</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Selected creators accepting INTIMA</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Liquidity expansion</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Public swap expanded</li>
</ul>
</div>
</div>

<div className="roadmap-phase w-[320px] md:w-[400px] flex-shrink-0 relative pt-12">
<div className="absolute top-0 left-8 w-3 h-3 -mt-[5px] rounded-full bg-background border-2 border-slate-600 z-10 transition-colors duration-500 phase-dot"></div>
<div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-3xl p-8 h-full">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium block mb-2">Phase 3 · Q4 2026</span>
<h3 className="text-2xl font-serif tracking-tight text-white mb-6">Marketplace Expansion</h3>
<ul className="space-y-3 text-slate-400 font-light text-base">
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Curated creators onboarded</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> New product categories</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Improved filters &amp; private access</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Holder-based access tiers</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Early reward mechanics</li>
</ul>
</div>
</div>

<div className="roadmap-phase w-[320px] md:w-[400px] flex-shrink-0 relative pt-12">
<div className="absolute top-0 left-8 w-3 h-3 -mt-[5px] rounded-full bg-background border-2 border-slate-600 z-10 transition-colors duration-500 phase-dot"></div>
<div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-3xl p-8 h-full">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium block mb-2">Phase 4 · Q1 2027</span>
<h3 className="text-2xl font-serif tracking-tight text-white mb-6">Stabilization</h3>
<ul className="space-y-3 text-slate-400 font-light text-base">
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Liquidity depth reinforced</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Selective long-term lock</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Ownership renounced</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Operational sustainability</li>
</ul>
</div>
</div>

<div className="roadmap-phase w-[320px] md:w-[400px] flex-shrink-0 relative pt-12 pr-8">
<div className="absolute top-0 left-8 w-3 h-3 -mt-[5px] rounded-full bg-background border-2 border-slate-600 z-10 transition-colors duration-500 phase-dot"></div>
<div className="bg-white/[0.02] border border-white/10 backdrop-blur-md rounded-3xl p-8 h-full">
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] font-medium block mb-2">Phase 5</span>
<h3 className="text-2xl font-serif tracking-tight text-white mb-6">Cultural Crossover</h3>
<ul className="space-y-3 text-slate-400 font-light text-base">
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Strategic crypto collaborations</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Web3 social integration</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Creator campaigns</li>
<li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0"></div> Digital + physical activations</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-md p-3 rounded-full border border-white/10 text-white/50 animate-pulse md:hidden pointer-events-none">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-10" id="how-to-buy">
<div className="max-w-7xl mx-auto">
<h2 className="section-title font-serif text-5xl md:text-7xl tracking-tight text-center mb-20 text-white">Get started in four steps.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="step-card bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden group">
<div className="text-5xl font-serif text-white/5 absolute top-4 right-6 pointer-events-none group-hover:text-white/10 transition-colors">01</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4 mt-6">Create a Wallet</h3>
<p className="text-slate-400 font-light text-base leading-relaxed">Download and install Phantom Wallet from the official source. Create your wallet and securely store your recovery phrase.</p>
</div>

<div className="step-card bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden group">
<div className="text-5xl font-serif text-white/5 absolute top-4 right-6 pointer-events-none group-hover:text-white/10 transition-colors">02</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4 mt-6">Get USDC</h3>
<p className="text-slate-400 font-light text-base leading-relaxed">Buy USDC using card, exchange, or transfer. Send USDC to your Phantom wallet using the Solana network.</p>
</div>

<div className="step-card bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden group">
<div className="text-5xl font-serif text-white/5 absolute top-4 right-6 pointer-events-none group-hover:text-white/10 transition-colors">03</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4 mt-6">Swap to INTIMA</h3>
<p className="text-slate-400 font-light text-base leading-relaxed">Use the official contract address. Swap directly via Raydium or inside Phantom. Availability remains limited initially.</p>
</div>

<div className="step-card bg-white/[0.02] border border-accent/20 bg-accent/5 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden group shadow-[0_0_30px_rgba(139,92,246,0.05)]">
<div className="text-5xl font-serif text-accent/10 absolute top-4 right-6 pointer-events-none group-hover:text-accent/20 transition-colors">04</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4 mt-6">Hold It. Use It.</h3>
<p className="text-slate-300 font-light text-base leading-relaxed">Keep INTIMA as part of the ecosystem or use it in the marketplace when available. Access. Utility. Discretion.</p>
</div>
</div>
<div className="text-center fade-up-element">
<p className="inline-flex items-center gap-2 text-sm text-yellow-500/80 bg-yellow-500/10 border border-yellow-500/20 px-6 py-3 rounded-full font-light">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
                    Always verify the official contract before swapping.
                </p>
</div>
</div>
</section>

<footer className="relative z-10 pt-20 pb-10 px-6 md:px-12 bg-black/40 backdrop-blur-lg border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
<div>
<a className="font-serif text-3xl tracking-[0.2em] uppercase text-white block mb-2" href="#">Intima</a>
<p className="text-slate-500 text-sm font-light">Digital Pleasure. Real Connection.</p>
</div>
<nav className="flex flex-wrap gap-x-10 gap-y-4">
<a className="text-xs uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-colors" href="#marketplace">Marketplace</a>
<a className="text-xs uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-colors" href="#token">Token</a>
<a className="text-xs uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="text-xs uppercase tracking-[0.15em] text-slate-400 hover:text-white transition-colors" href="#how-to-buy">How to Buy</a>
<a className="text-xs uppercase tracking-[0.15em] text-accent hover:text-white transition-colors flex items-center gap-1" href="#">X (Twitter) <i className="w-3 h-3" data-lucide="arrow-up-right"></i></a>
</nav>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
<p className="text-xs text-slate-600 font-light">© 2024 INTIMA. All rights reserved.</p>
<p className="text-xs text-slate-500 font-light max-w-2xl lg:text-right leading-relaxed">
                ⚠️ INTIMA will never send direct messages or ask for private keys, seed phrases, approvals or payments. INTIMA is an experimental memecoin intended for adults only (18+). This website is provided for informational purposes only. Nothing on this site constitutes financial advice. DYOR.
            </p>
</div>
</footer>


    </>
  );
}
