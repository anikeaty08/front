import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Grotesk', 'monospace'],
tech: ['Share Tech Mono', 'monospace']
},
colors: {
luxota: {
bg: '#020203',
card: '#08080A',
border: '#ffffff08',
accent: '#00A896', // Travel Portal Muted Teal
accentGlow: '#00A89640',
dim: '#9ca3af',
surface: '#ffffff03'
}
},
letterSpacing: { tighter: '-0.04em', tightest: '-0.07em' },
animation: {
'blob': 'blob 10s infinite',
'text-shimmer': 'text-shimmer 3s ease-out infinite alternate',
'float': 'float 6s ease-in-out infinite',
'scan': 'scan 3s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
'text-shimmer': {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '100% 50%' },
},
'float': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
'scan': {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' }
}
}
}
}
}



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            // Initial Load Animations
            const tl = gsap.timeline();
            tl.to(".reveal-nav", { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
              .to(".reveal-hero", { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=0.5")
              .to(".reveal-visual", { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, "-=0.8");

            // Smooth Scroll
            const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time)=>{ lenis.raf(time * 1000) });

            // Cursor Logic
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');
            const cursorText = document.querySelector('.cursor-text'); 
            let mouseX = 0, mouseY = 0;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX; mouseY = e.clientY;
                cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                gsap.to(cursorOutline, { x: mouseX, y: mouseY, duration: 0.15, ease: "power2.out" });
                
                document.querySelectorAll('.spotlight-card').forEach(card => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${mouseX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${mouseY - rect.top}px`);
                });
            });

            // Particles
            particlesJS('particles-js', {
                particles: {
                    number: { value: 60, density: { enable: true, value_area: 800 } }, color: { value: "#00A896" }, shape: { type: "circle" },
                    opacity: { value: 0.2, random: false }, size: { value: 2, random: true },
                    line_linked: { enable: true, distance: 150, color: "#00A896", opacity: 0.1, width: 1 },
                    move: { enable: true, speed: 0.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                },
                interactivity: {
                    detect_on: "window",
                    events: { onhover: { enable: true, mode: "grab" }, resize: true },
                    modes: { grab: { distance: 200, line_linked: { opacity: 0.3 } } }
                },
                retina_detect: true
            });

            // Counter Animation
            gsap.utils.toArray('.counter').forEach(counter => {
                const target = counter.getAttribute('data-target');
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: "power2.out",
                    scrollTrigger: { trigger: counter, start: "top 85%" }
                });
            });

            // General Reveals
            gsap.utils.toArray('.reveal-fade').forEach((el) => {
                gsap.to(el, { scrollTrigger: { trigger: el, start: "top 85%" }, y: 0, x: 0, opacity: 1, duration: 1, ease: "power3.out" });
            });
            gsap.utils.toArray('.reveal-stat').forEach((el, i) => {
                gsap.to(el, { scrollTrigger: { trigger: el, start: "top 85%" }, y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: "power3.out" });
            });

            // Horizontal Scroll for Architecture
            let mm = gsap.matchMedia();
            mm.add("(min-width: 1024px)", () => {
                const track = document.getElementById("cards-track");
                const pinSection = document.getElementById("architecture-pin");
                if (track && pinSection) {
                    const cardGraphics = document.querySelectorAll(".card-graphic-wrapper > div");
                    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 100);

                    gsap.to(track, { x: getScrollAmount, ease: "none", scrollTrigger: { trigger: pinSection, start: "top top", end: "+=3000", pin: true, scrub: 1, invalidateOnRefresh: true } });
                    gsap.to(cardGraphics, { x: -50, ease: "none", scrollTrigger: { trigger: pinSection, start: "top top", end: "+=3000", scrub: 1 } });
                }
            });

            // Preloader Complete Logic
            setTimeout(() => {
                document.getElementById('preloader').style.display = 'none';
            }, 1600); // Wait for the initial animation to finish if needed, or simply hide it since it's an inner page

            // 3D Perspective Card Tilt
            const container = document.querySelector('.perspective-container');
            if (container) {
                const inner = container.querySelector('.transform');
                
                container.addEventListener('mousemove', (e) => {
                    const rect = container.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -5;
                    const rotateY = ((x - centerX) / centerX) * 5;
                    
                    gsap.to(inner, { 
                        rotationX: rotateX, 
                        rotationY: rotateY, 
                        duration: 0.5, 
                        ease: "power2.out" 
                    });
                });

                container.addEventListener('mouseleave', () => {
                    gsap.to(inner, { rotationX: 0, rotationY: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-light">
<div className="blob blob-1"></div><div className="blob blob-2"></div>
</div>
<div className="noise"></div>

<div id="preloader">
<div className="flex flex-col items-center justify-center gap-6 text-center z-50">
<div className="relative">
<div className="text-[12rem] font-medium leading-none tracking-tighter text-white/5 relative z-10 font-sans"><span id="counter">0</span>%</div>
<div className="absolute inset-0 bg-gradient-to-t from-luxota-bg via-transparent to-transparent z-20"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="flex items-center gap-3 text-xs font-mono text-luxota-accent uppercase tracking-[0.2em]">
<iconify-icon className="animate-spin text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
<span>Loading Engine</span>
</div>
<div className="w-48 h-[1px] bg-white/10 mt-2 overflow-hidden rounded-full">
<div className="w-full h-full bg-gradient-to-r from-luxota-accent to-white origin-left scale-x-0" id="loader-bar"></div>
</div>
</div>
</div>
</div>

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:flex"><span className="cursor-text"></span></div>

<nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none opacity-0 reveal-nav">
<div className="pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl transition-all duration-500 hover:border-white/20">
<a className="px-5 py-2 text-xs font-medium text-white/50 hover:text-white rounded-full hover:bg-white/5 transition-all" href="index.html">Home</a>
<div className="w-px h-3 bg-white/10 mx-1"></div>
<a className="px-5 py-2 text-xs font-bold text-luxota-bg bg-luxota-accent rounded-full transition-all shadow-[0_0_15px_rgba(0,168,150,0.4)]" href="travel_portal.html">Travel Portal</a>
<a className="px-5 py-2 text-xs font-medium text-white/50 hover:text-white rounded-full hover:bg-white/5 transition-all" href="sharehub.html">ShareHub</a>
<a className="px-5 py-2 text-xs font-medium text-white/50 hover:text-white rounded-full hover:bg-white/5 transition-all" href="trustee.html">Trustee</a>
</div>
</nav>

<div className="fixed top-9 left-8 z-40 mix-blend-difference pointer-events-none opacity-0 reveal-nav">
<a className="text-sm font-semibold tracking-tight text-white flex items-center gap-3 pointer-events-auto" href="index.html">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-luxota-accent shadow-[0_0_15px_#00A896]"></span>
</div>
<span className="tracking-[0.2em] text-xs">LUXOTA / PORTAL</span>
</a>
</div>

<section className="relative min-h-screen flex items-center pt-20 pb-20 px-6 overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-30 mask-radial"></div>
<div className="absolute inset-0 -z-10" id="particles-js"></div>
<div className="max-w-7xl mx-auto relative z-10 w-full">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="lg:w-1/2">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 opacity-0 reveal-hero">
<iconify-icon className="text-luxota-accent" icon="solar:code-square-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">Headless Architecture</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tightest text-white leading-[0.95] mb-8 opacity-0 reveal-hero">
                        Pixel-perfect <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-luxota-accent to-white animate-text-shimmer">booking experiences.</span>
</h1>
<p className="text-lg text-luxota-dim leading-relaxed mb-10 max-w-xl opacity-0 reveal-hero">
                        A fully headless, API-first booking engine designed for agencies who refuse to look like everyone else. Build your storefront in React, Vue, or Swift — we handle the logic.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 opacity-0 reveal-hero">
<button className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,168,150,0.5)]">
                            Read Documentation <iconify-icon className="text-lg" icon="solar:documents-minimalistic-linear"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            View Live Demo
                        </button>
</div>
</div>

<div className="lg:w-1/2 w-full perspective-container opacity-0 reveal-visual scale-95 h-[500px] lg:h-[600px] flex items-center justify-center">
<div className="relative w-full max-w-[500px] aspect-[4/3] group">

<div className="absolute inset-0 bg-luxota-accent/20 blur-[100px] rounded-full"></div>

<div className="relative w-full h-full transform transition-all duration-700 hover:rotate-y-12 preserve-3d" id="tilt-element">

<div className="absolute top-0 right-0 w-[80%] h-auto bg-[#0A0A0C]/90 border border-white/10 rounded-xl p-6 shadow-2xl transform translate-x-4 -translate-y-4 rotate-6 z-10 backdrop-blur-xl animate-float" style={{animationDelay: '-1s'}}>
<div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
<div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div><div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div></div>
<span className="text-[10px] text-luxota-dim font-mono ml-2">api/v2/flights/search</span>
</div>
<div className="font-tech text-xs leading-6">
<pre><code className="language-json"><span className="token punctuation">{</span>
  <span className="token property">"id"</span><span className="token punctuation">:</span> <span className="token string">"flt_8x92a"</span><span className="token punctuation">,</span>
  <span className="token property">"route"</span><span className="token punctuation">:</span> <span className="token punctuation">{</span>
    <span className="token property">"origin"</span><span className="token punctuation">:</span> <span className="token string">"LHR"</span><span className="token punctuation">,</span>
    <span className="token property">"dest"</span><span className="token punctuation">:</span> <span className="token string">"HND"</span>
  <span className="token punctuation">}</span><span className="token punctuation">,</span>
  <span className="token property">"price"</span><span className="token punctuation">:</span> <span className="token number">1420.50</span>
<span className="token punctuation">}</span></code></pre>
</div>
<div className="scan-line animate-scan"></div>
</div>

<div className="absolute bottom-0 left-0 w-[85%] h-auto bg-white/[0.02] border border-white/20 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)] transform -translate-x-4 translate-y-4 -rotate-2 z-20 backdrop-blur-xl animate-float">
<div className="h-40 bg-[url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80')] bg-cover bg-center relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/50 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="text-[10px] font-bold bg-white text-black px-2 py-0.5 rounded mb-1 w-fit">BUSINESS</div>
<div className="text-white font-medium text-lg">London to Tokyo</div>
</div>
</div>
<div className="p-5 bg-[#0A0A0C]">
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-luxota-dim mb-1">Total Price</div>
<div className="text-2xl font-medium text-white">£1,420<span className="text-sm text-luxota-dim">.50</span></div>
</div>
<button className="w-10 h-10 rounded-full bg-luxota-accent flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,168,150,0.5)] hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute -top-10 right-10 w-[1px] h-20 bg-gradient-to-b from-transparent via-luxota-accent to-transparent z-[-1]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-16 relative z-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left reveal-stat opacity-0 translate-y-4">
<div className="text-4xl font-mono font-light text-white mb-2"><span className="counter" data-target="99">0</span>.9%</div>
<div className="text-xs text-luxota-dim uppercase tracking-wider font-medium">Uptime SLA</div>
</div>
<div className="text-center md:text-left reveal-stat opacity-0 translate-y-4">
<div className="text-4xl font-mono font-light text-white mb-2"><span className="counter" data-target="150">0</span>ms</div>
<div className="text-xs text-luxota-dim uppercase tracking-wider font-medium">Avg Search Latency</div>
</div>
<div className="text-center md:text-left reveal-stat opacity-0 translate-y-4">
<div className="text-4xl font-mono font-light text-white mb-2">React</div>
<div className="text-xs text-luxota-dim uppercase tracking-wider font-medium">Native Components</div>
</div>
<div className="text-center md:text-left reveal-stat opacity-0 translate-y-4">
<div className="text-4xl font-mono font-light text-white mb-2">PCI-1</div>
<div className="text-xs text-luxota-dim uppercase tracking-wider font-medium">Level 1 Compliant</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center md:text-left reveal-fade opacity-0">
<span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ CAPABILITIES ]</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white max-w-2xl leading-tight">
                    Built for developers,<br/>
<span className="text-luxota-dim">designed for conversion.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card rounded-3xl p-8 bg-[#050507] group hover:border-luxota-accent/30 transition-colors reveal-fade opacity-0 translate-y-8">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:bg-luxota-accent/10 group-hover:border-luxota-accent/20 group-hover:shadow-[0_0_20px_rgba(0,168,150,0.2)]">
<iconify-icon className="text-2xl text-white group-hover:text-luxota-accent transition-colors" icon="solar:devices-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium mb-4">Omnichannel Ready</h3>
<p className="text-base text-luxota-dim leading-relaxed font-light">
                        Build once, deploy everywhere. The same API powers your web platform, iOS app, and Android application, ensuring consistent data across all customer touchpoints.
                    </p>
</div>

<div className="spotlight-card rounded-3xl p-8 bg-[#050507] group hover:border-luxota-accent/30 transition-colors reveal-fade opacity-0 translate-y-8" style={{transitionDelay: '0.1s'}}>
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:bg-luxota-accent/10 group-hover:border-luxota-accent/20 group-hover:shadow-[0_0_20px_rgba(0,168,150,0.2)]">
<iconify-icon className="text-2xl text-white group-hover:text-luxota-accent transition-colors" icon="solar:pallete-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium mb-4">Infinite Theming</h3>
<p className="text-base text-luxota-dim leading-relaxed font-light">
                        No generic templates. You control the CSS, the layout, and the flow. Our UI Kit provides unstyled primitives that inherit your brand's design system automatically.
                    </p>
</div>

<div className="spotlight-card rounded-3xl p-8 bg-[#050507] group hover:border-luxota-accent/30 transition-colors reveal-fade opacity-0 translate-y-8" style={{transitionDelay: '0.2s'}}>
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 border border-white/5 group-hover:bg-luxota-accent/10 group-hover:border-luxota-accent/20 group-hover:shadow-[0_0_20px_rgba(0,168,150,0.2)]">
<iconify-icon className="text-2xl text-white group-hover:text-luxota-accent transition-colors" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium mb-4">Smart Cache</h3>
<p className="text-base text-luxota-dim leading-relaxed font-light">
                        Availability caching at the edge. We reduce GDS look-to-book ratios and serve search results instantly using our proprietary distributed caching layer.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020203] border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(0,168,150,0.03),transparent_70%)]"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="reveal-fade opacity-0 translate-x-[-20px]">
<span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest uppercase">[ Integration Made Simple ]</span>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">Drop-in <br/>React Components</h2>
<p className="text-luxota-dim text-lg mb-8 font-light leading-relaxed">
                     Don't want to build from scratch? Use <span className="text-white font-mono bg-white/5 px-2 py-1 rounded">@luxota/ui</span>. A library of pre-built, accessible, and responsive travel components that just work.
                 </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-white/90 bg-white/[0.02] p-3 rounded-lg border border-white/5"><iconify-icon className="text-luxota-accent text-xl" icon="solar:check-circle-bold"></iconify-icon> Ready-to-use Search Forms</li>
<li className="flex items-center gap-4 text-white/90 bg-white/[0.02] p-3 rounded-lg border border-white/5"><iconify-icon className="text-luxota-accent text-xl" icon="solar:check-circle-bold"></iconify-icon> Filterable Flight Result Cards</li>
<li className="flex items-center gap-4 text-white/90 bg-white/[0.02] p-3 rounded-lg border border-white/5"><iconify-icon className="text-luxota-accent text-xl" icon="solar:check-circle-bold"></iconify-icon> Secure Passenger Detail Inputs</li>
</ul>
<a className="inline-flex items-center gap-2 text-luxota-accent hover:text-white transition-colors font-medium border-b border-luxota-accent/30 hover:border-white pb-1" href="#">
                     Explore the Component Library <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative group reveal-fade opacity-0 translate-x-[20px]">
<div className="absolute -inset-1 bg-gradient-to-r from-luxota-accent to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-[#0E0E10] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs text-luxota-accent font-mono bg-luxota-accent/10 px-2 py-1 rounded">FlightSearch.jsx</span>
</div>
<pre className="language-jsx text-sm overflow-x-auto leading-loose"><code>import { SearchWidget, Results } from '@luxota/ui';

export default function BookingPage() {
  return (
    &lt;div className="luxota-container"&gt;
      &lt;h1&gt;Find your next journey&lt;/h1&gt;
      
      {/* Pre-connected to Luxota API */}
      &lt;SearchWidget 
        theme="dark" 
        cabins={['economy', 'business']}
        onSearch={(data) =&gt; console.log(data)}
      /&gt;

      &lt;Results 
        skeletonColor="#1a1a1a"
        layout="grid"
      /&gt;
    &lt;/div&gt;
  );
}</code></pre>
</div>
</div>
</div>
</section>

<div className="relative z-30 bg-luxota-bg" id="architecture-wrapper">
<section className="hidden lg:block h-screen relative" id="architecture-pin">
<div className="h-full w-full overflow-hidden bg-luxota-bg flex flex-col justify-center border-t border-white/5">
<div className="absolute top-12 left-0 w-full px-12 flex justify-between items-end z-20">
<div>
<span className="text-xs text-luxota-accent font-mono mb-3 block tracking-widest">[ ENGINE WORKFLOWS ]</span>
<h2 className="text-4xl font-medium text-white tracking-tight">The Operational Pipeline</h2>
</div>
<div className="flex items-center gap-3 text-white/30">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="animate-bounce text-lg" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-mono tracking-widest">SCROLL TO EXPLORE</span>
</div>
</div>
<div className="flex gap-16 px-24 pl-[20vw] items-center h-full w-max" id="cards-track">

<div className="w-[60vw] max-w-[800px] h-[60vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-1/2 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="text-luxota-accent font-mono text-sm mb-6 tracking-widest">01 — Phase</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Search</h3>
<p className="text-lg text-luxota-dim leading-relaxed font-light">
                                    Global inventory aggregation. Flights, hotels, and transfers are queried in real-time across the ecosystem to ensure the best possible pricing and availability.
                                </p>
</div>
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent border border-white/10 shadow-[0_0_20px_rgba(0,168,150,0.1)]">
<iconify-icon className="text-3xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
</div>
<div className="w-1/2 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-luxota-accent/5 to-transparent flex items-center justify-center card-graphic-wrapper">

<div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
<div className="absolute w-full h-[1px] bg-luxota-accent/30 rotate-45"></div>
<div className="absolute w-full h-[1px] bg-luxota-accent/30 -rotate-45"></div>
<div className="absolute w-[1px] h-full bg-luxota-accent/30"></div>
<div className="absolute w-full h-[1px] bg-luxota-accent/30"></div>
<div className="w-16 h-16 bg-[#08080A] rounded-full border border-luxota-accent flex items-center justify-center shadow-[0_0_30px_#00A89640] z-10">
<div className="w-3 h-3 bg-luxota-accent rounded-full animate-pulse"></div>
</div>
<div className="absolute top-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute bottom-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute left-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="absolute right-0 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
</div>
</div>

<div className="w-[60vw] max-w-[800px] h-[60vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-1/2 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="text-luxota-accent font-mono text-sm mb-6 tracking-widest">02 — Phase</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Booking</h3>
<p className="text-lg text-luxota-dim leading-relaxed font-light">
                                    Seamless workflows and instant PNR generation. Captures traveler data, enforces markup rules, and holds inventory securely.
                                </p>
</div>
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent border border-white/10 shadow-[0_0_20px_rgba(0,168,150,0.1)]">
<iconify-icon className="text-3xl" icon="solar:calendar-add-linear"></iconify-icon>
</div>
</div>
<div className="w-1/2 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-luxota-accent/5 to-transparent flex items-center justify-center card-graphic-wrapper">
<div className="flex flex-col gap-4 w-64 transform rotate-6">
<div className="w-full h-16 bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="flex-1 h-2 bg-white/20 rounded"></div>
</div>
<div className="w-full h-16 bg-luxota-accent/10 border border-luxota-accent/30 rounded-xl p-4 flex items-center gap-4 translate-x-4 shadow-[0_0_20px_#00A89620]">
<div className="w-8 h-8 rounded bg-luxota-accent/20"></div>
<div className="flex-1 h-2 bg-luxota-accent/50 rounded"></div>
</div>
<div className="w-full h-16 bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="flex-1 h-2 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>

<div className="w-[60vw] max-w-[800px] h-[60vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-1/2 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="text-luxota-accent font-mono text-sm mb-6 tracking-widest">03 — Phase</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Transaction</h3>
<p className="text-lg text-luxota-dim leading-relaxed font-light">
                                    Secure order processing and payment handling. Connects to local and global gateways with built-in fraud prevention.
                                </p>
</div>
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent border border-white/10 shadow-[0_0_20px_rgba(0,168,150,0.1)]">
<iconify-icon className="text-3xl" icon="solar:card-transfer-linear"></iconify-icon>
</div>
</div>
<div className="w-1/2 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-luxota-accent/5 to-transparent flex items-center justify-center card-graphic-wrapper">
<div className="w-72 h-48 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md transform -rotate-6">
<div className="flex justify-between items-center">
<iconify-icon className="text-4xl text-luxota-accent" icon="solar:sim-card-line-duotone"></iconify-icon>
<iconify-icon className="text-2xl text-white/30 rotate-90" icon="solar:wifi-router-minimalistic-bold"></iconify-icon>
</div>
<div>
<div className="w-3/4 h-4 bg-white/20 rounded mb-2"></div>
<div className="w-1/2 h-3 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>

<div className="w-[60vw] max-w-[800px] h-[60vh] spotlight-card rounded-[2.5rem] p-16 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#050507]">
<div className="w-1/2 flex flex-col justify-between relative z-10 h-full">
<div>
<div className="text-luxota-accent font-mono text-sm mb-6 tracking-widest">04 — Phase</div>
<h3 className="text-5xl text-white font-medium mb-6 tracking-tight">Delivery</h3>
<p className="text-lg text-luxota-dim leading-relaxed font-light">
                                    Automated ticket issuance and client documentation. Vouchers are generated instantly and dispatched via connected email infrastructure.
                                </p>
</div>
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent border border-white/10 shadow-[0_0_20px_rgba(0,168,150,0.1)]">
<iconify-icon className="text-3xl" icon="solar:ticket-linear"></iconify-icon>
</div>
</div>
<div className="w-1/2 absolute right-0 top-0 bottom-0 bg-gradient-to-l from-luxota-accent/5 to-transparent flex items-center justify-center card-graphic-wrapper">
<div className="relative w-48 h-64 bg-white border border-white/20 rounded-lg p-6 shadow-2xl transform rotate-3 flex flex-col gap-4">
<div className="w-full h-8 bg-gray-200 rounded"></div>
<div className="w-full border-b-2 border-dashed border-gray-300 my-2"></div>
<div className="flex justify-between">
<div className="w-12 h-12 bg-gray-200 rounded-full"></div>
<div className="w-12 h-12 bg-luxota-accent/20 rounded-full flex items-center justify-center"><iconify-icon className="text-luxota-accent text-xl" icon="solar:check-circle-bold"></iconify-icon></div>
</div>
<div className="mt-auto w-full h-12 bg-black rounded flex items-center justify-center">
<div className="w-3/4 h-2 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="block lg:hidden px-6 py-20 space-y-8 bg-luxota-bg border-t border-white/5">
<span className="text-xs text-luxota-accent font-mono mb-2 block tracking-widest">[ ENGINE WORKFLOWS ]</span>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">Search</h3>
<p className="text-sm text-luxota-dim font-light">Global inventory aggregation and intelligent routing.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">Booking</h3>
<p className="text-sm text-luxota-dim font-light">Seamless workflows and instant PNR generation.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">Transaction</h3>
<p className="text-sm text-luxota-dim font-light">Secure order processing and payment handling.</p>
</div>
<div className="spotlight-card rounded-3xl p-8 border border-white/10">
<h3 className="text-2xl text-white font-medium mb-2">Delivery</h3>
<p className="text-sm text-luxota-dim font-light">Automated ticket issuance and client documentation.</p>
</div>
</section>

<section className="min-h-[70vh] flex flex-col items-center justify-center px-6 relative overflow-hidden border-t border-white/5" id="action">
<div className="absolute inset-0 bg-gradient-to-t from-luxota-accent/10 to-transparent pointer-events-none"></div>
<div className="relative z-10 text-center max-w-5xl">
<span className="text-xs text-luxota-accent font-mono mb-6 block tracking-[0.3em] uppercase">The First Step in Agency Maturity</span>
<h2 className="text-6xl md:text-8xl font-medium tracking-tightest text-white mb-16 leading-[0.85]">
                Launch your<br/> portal — <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 italic font-serif">now.</span>
</h2>
<div className="flex flex-col items-center gap-10">
<button className="group relative bg-white text-black px-16 py-6 rounded-full font-bold text-xl overflow-hidden transition-transform hover:scale-105 shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_-15px_rgba(0,168,150,0.5)]">
<span className="relative z-10 flex items-center gap-3">
                        Instant Live 
                        <iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:bolt-bold"></iconify-icon>
</span>
<div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
</button>
</div>
</div>
</section>

<footer className="relative py-24 px-6 border-t border-white/5 bg-[#020203] overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-luxota-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-5%] left-0 right-0 select-none pointer-events-none flex justify-center opacity-[0.03]">
<h1 className="text-[18vw] font-bold text-white tracking-tighter leading-none">LUXOTA</h1>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-24">
<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Company</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-white transition-colors duration-300" href="#">About Luxota</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Vision &amp; North Star</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Platform</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="text-white font-medium" href="travel_portal.html">Travel Portal</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="sharehub.html">ShareHub</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="trustee.html">Trustee</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="index.html#commercial">Commercial Model</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Resources</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-white transition-colors duration-300" href="index.html#maturity">Agency Maturity Levels</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Agencies in Ecosystem</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Case Snapshots</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="index.html#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">Legal</h4>
<ul className="space-y-5 text-sm text-luxota-dim font-light">
<li><a className="hover:text-white transition-colors duration-300" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Imprint</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-luxota-dim/60 font-mono tracking-wider gap-4">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
<span className="uppercase">Luxota Operating System</span>
</div>
<div>© 2026 Luxota. All rights reserved.</div>
</div>
</div>
</footer>


    </>
  );
}
