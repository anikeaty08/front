import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
brand: {
bg: '#030014',
purple: '#2D1B69',
teal: '#0EA5A5',
neon: '#7000FF',
accent: '#00F0FF'
}
},
animation: {
'spin-slow': 'spin 15s linear infinite',
'blob': 'blob 7s infinite',
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



        lucide.createIcons();

        // 6. Performance Counters
        const animateCounter = (el) => {
            const target = parseInt(el.dataset.target);
            let current = 0;
            const increment = target / 60; 
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    el.textContent = target;
                    clearInterval(timer);
                } else {
                    el.textContent = Math.ceil(current);
                }
            }, 16);
        };

        // 8. Scroll Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Trigger counters if found
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => animateCounter(counter));
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // 4. Pricing Toggle
        let isAnnual = false;
        const togglePricing = () => {
            isAnnual = !isAnnual;
            const btnMonthly = document.getElementById('btn-monthly');
            const btnAnnual = document.getElementById('btn-annual');
            const prices = document.querySelectorAll('.price-val');
            
            if (isAnnual) {
                btnMonthly.classList.replace('bg-white/10', 'text-white/50');
                btnMonthly.classList.remove('text-white');
                btnAnnual.classList.remove('text-white/50');
                btnAnnual.classList.add('bg-white/10', 'text-white');
                
                prices.forEach(p => {
                    p.style.opacity = '0';
                    setTimeout(() => {
                        p.textContent = p.dataset.a;
                        p.style.opacity = '1';
                    }, 200);
                });
            } else {
                btnAnnual.classList.replace('bg-white/10', 'text-white/50');
                btnAnnual.classList.remove('text-white');
                btnMonthly.classList.remove('text-white/50');
                btnMonthly.classList.add('bg-white/10', 'text-white');

                prices.forEach(p => {
                    p.style.opacity = '0';
                    setTimeout(() => {
                        p.textContent = p.dataset.m;
                        p.style.opacity = '1';
                    }, 200);
                });
            }
        };

        // 5. Accordion Logic
        const toggleAccordion = (button) => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            
            if (content.style.height && content.style.height !== '0px') {
                content.style.height = '0px';
                icon.style.transform = 'rotate(0deg)';
                button.classList.replace('text-white', 'text-white/90');
            } else {
                // Close others
                document.querySelectorAll('.accordion-content').forEach(c => c.style.height = '0px');
                document.querySelectorAll('.accordion-content').forEach(c => {
                   if(c.previousElementSibling.querySelector('svg')) 
                       c.previousElementSibling.querySelector('svg').style.transform = 'rotate(0deg)';
                });

                content.style.height = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
                button.classList.replace('text-white/90', 'text-white');
            }
        };

        // 10. Demo Theme Switcher
        document.getElementById('toggle-dark').addEventListener('click', () => {
            document.getElementById('demo-canvas').style.background = '#050507';
        });
        document.getElementById('toggle-light').addEventListener('click', () => {
            document.getElementById('demo-canvas').style.background = '#e5e7eb';
        });

        // 9. Interactive Parallax for Cards (Subtle Mouse Movement)
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.flip-card-inner');
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            
            cards.forEach(card => {
                // Apply subtle rotation to the container, not interfering with the flip
                card.parentElement.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mesh-bg"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-[20%] left-[10%] w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] animate-blob mix-blend-screen"></div>
<div className="absolute top-[40%] right-[20%] w-72 h-72 bg-brand-teal/10 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-screen"></div>
<div className="absolute bottom-[20%] left-[30%] w-80 h-80 bg-brand-neon/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#030014]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#030014]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-teal rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"></div>
<i className="w-4 h-4 text-white relative z-10" data-lucide="box"></i>
</div>
<span className="font-medium tracking-tight text-white/90">Gemini<span className="text-brand-teal">3</span></span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-white/60 hover:text-white transition-colors text-xs font-medium" href="#features">Features</a>
<a className="text-white/60 hover:text-white transition-colors text-xs font-medium" href="#demo">Interactive</a>
<a className="text-white/60 hover:text-white transition-colors text-xs font-medium" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-medium transition-all group flex items-center gap-2">
<span>Console</span>
<i className="w-3 h-3 opacity-50 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 z-10">
<div className="max-w-5xl mx-auto text-center">
<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 backdrop-blur-md mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
</span>
<span className="text-xs font-medium text-brand-teal tracking-tight">Enterprise Release v3.1</span>
</div>
<h1 className="reveal-on-scroll text-6xl md:text-8xl font-medium text-white tracking-tighter leading-[1] mb-8" style={{transitionDelay: '100ms'}}>
                Physics for the<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Digital Era</span>
</h1>
<p className="reveal-on-scroll text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light" style={{transitionDelay: '200ms'}}>
                A GPU-accelerated motion engine that blends 3D transforms with organic physics. Zero layout thrashing, sub-millisecond latency.
            </p>
<div className="reveal-on-scroll flex flex-col sm:flex-row items-center justify-center gap-5" style={{transitionDelay: '300ms'}}>
<button className="relative group px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm tracking-tight overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative z-10">Start Building</span>
</button>
<button className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium tracking-tight">
                    Read Documentation
                </button>
</div>
</div>

<div className="reveal-on-scroll max-w-4xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12" style={{transitionDelay: '400ms'}}>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight flex justify-center items-end">
<span className="counter" data-target="120">0</span><span>Hz</span>
</div>
<div className="text-xs text-white/40 uppercase tracking-wider font-medium">Refresh Rate</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight flex justify-center items-end">
<span>&lt;</span><span className="counter" data-target="1">0</span><span>ms</span>
</div>
<div className="text-xs text-white/40 uppercase tracking-wider font-medium">Latency</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight flex justify-center items-end">
<span className="counter" data-target="100">0</span><span>%</span>
</div>
<div className="text-xs text-white/40 uppercase tracking-wider font-medium">GPU Usage</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white mb-1 tracking-tight flex justify-center items-end">
<span className="counter" data-target="4">0</span><span>kb</span>
</div>
<div className="text-xs text-white/40 uppercase tracking-wider font-medium">Gzipped</div>
</div>
</div>
</main>

<section className="py-24 px-6 bg-[#050508]/50 border-y border-white/5 relative" id="demo">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-medium text-white mb-2 tracking-tight">Interactive Playground</h2>
<p className="text-white/40 text-sm">Real-time compilation with instant preview.</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0 bg-white/5 p-1 rounded-lg border border-white/10">
<button className="p-2 rounded hover:bg-white/10 text-white/50 hover:text-white transition-colors" id="toggle-light"><i className="w-4 h-4" data-lucide="sun"></i></button>
<button className="p-2 rounded bg-white/10 text-white shadow-sm" id="toggle-dark"><i className="w-4 h-4" data-lucide="moon"></i></button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#0A0A0C]">

<div className="border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col min-h-[400px]">
<div className="flex items-center justify-between px-4 py-3 bg-[#0F0F12] border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<span className="text-xs text-white/30 font-mono">animate.tsx</span>
</div>
<div className="p-6 font-mono text-xs leading-relaxed text-white/80 bg-[#0A0A0C] flex-grow">
<div><span className="text-[#c678dd]">import</span> { <span className="text-[#e5c07b]">Motion</span> } <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'@gemini/core'</span>;</div>
<br/>
<div><span className="text-[#c678dd]">export</span> <span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">Card</span> = () =&gt; (</div>
<div className="pl-4"><span className="text-[#abb2bf]">&lt;</span><span className="text-[#e06c75]">Motion.div</span></div>
<div className="pl-8"><span className="text-[#d19a66]">initial</span>={{ <span className="text-[#98c379]">opacity</span>: <span className="text-[#d19a66]">0</span>, <span className="text-[#98c379]">y</span>: <span className="text-[#d19a66]">20</span> }}</div>
<div className="pl-8"><span className="text-[#d19a66]">animate</span>={{ <span className="text-[#98c379]">opacity</span>: <span className="text-[#d19a66]">1</span>, <span className="text-[#98c379]">y</span>: <span className="text-[#d19a66]">0</span> }}</div>
<div className="pl-8"><span className="text-[#d19a66]">transition</span>={{</div>
<div className="pl-12"><span className="text-[#98c379]">type</span>: <span className="text-[#98c379]">'spring'</span>,</div>
<div className="pl-12"><span className="text-[#98c379]">stiffness</span>: <span className="text-[#d19a66]">260</span>,</div>
<div className="pl-12"><span className="text-[#98c379]">damping</span>: <span className="text-[#d19a66]">20</span></div>
<div className="pl-8">}}</div>
<div className="pl-8"><span className="text-[#d19a66]">className</span>=<span className="text-[#98c379]">"card-style"</span></div>
<div className="pl-4"><span className="text-[#abb2bf]">&gt;</span></div>
<div className="pl-8 text-white/50">// Your content here</div>
<div className="pl-4"><span className="text-[#abb2bf]">&lt;/</span><span className="text-[#e06c75]">Motion.div</span><span className="text-[#abb2bf]">&gt;</span></div>
<div>);</div>
<div className="animate-pulse text-brand-teal mt-2">|</div>
</div>
</div>

<div className="relative flex items-center justify-center bg-[#050507] p-12 overflow-hidden" id="demo-canvas">
<div className="absolute inset-0 bg-[radial-gradient(#2D1B69_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
<div className="relative w-48 h-48 bg-gradient-to-br from-brand-purple to-brand-teal rounded-2xl shadow-[0_0_50px_rgba(14,165,165,0.3)] flex items-center justify-center animate-[float-particle_4s_ease-in-out_infinite]">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="layers"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-20">
<h2 className="reveal-on-scroll text-3xl font-medium text-white mb-4 tracking-tight">Architected for Speed</h2>
<div className="h-1 w-20 bg-brand-teal rounded-full reveal-on-scroll"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">

<div className="reveal-on-scroll group h-80 cursor-pointer" style={{transitionDelay: '100ms'}}>
<div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d">

<div className="absolute w-full h-full backface-hidden rounded-2xl bg-[#0A0A0C] border border-white/5 p-8 flex flex-col items-start justify-between z-20 overflow-hidden">
<div className="border-beam"></div> 
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-brand-teal">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div className="text-left">
<h3 className="text-xl font-medium text-white mb-2">Zero Latency</h3>
<p className="text-white/40 leading-relaxed">Direct compositor thread access for lag-free animations.</p>
</div>
</div>

<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[#111] border border-brand-teal/30 p-8 flex flex-col items-center justify-center z-10">
<h4 className="text-brand-teal font-medium mb-4">Technical Specs</h4>
<ul className="text-left text-white/60 space-y-2 text-xs w-full">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-brand-teal" data-lucide="check"></i> Edge Compute</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-brand-teal" data-lucide="check"></i> &lt; 1ms Init</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-brand-teal" data-lucide="check"></i> WebGL Fallback</li>
</ul>
</div>
</div>
</div>

<div className="reveal-on-scroll group h-80 cursor-pointer" style={{transitionDelay: '250ms', marginTop: '30px'}}> 
<div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d">
<div className="absolute w-full h-full backface-hidden rounded-2xl bg-[#0A0A0C] border border-white/5 p-8 flex flex-col items-start justify-between overflow-hidden">
<div className="border-beam" style={{-BeamColor: '#7000FF', animationDelay: '-1s'}}></div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-brand-neon">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<div className="text-left">
<h3 className="text-xl font-medium text-white mb-2">Hardware Accelerated</h3>
<p className="text-white/40 leading-relaxed">Leverages WebGL and WebGPU for complex particle systems.</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[#111] border border-brand-neon/30 p-8 flex flex-col items-center justify-center">
<h4 className="text-brand-neon font-medium mb-4">Benchmarks</h4>
<div className="w-full bg-white/10 h-1.5 rounded-full mb-4 overflow-hidden">
<div className="bg-brand-neon h-full w-[95%]"></div>
</div>
<p className="text-xs text-white/50">95% Faster than React Spring</p>
</div>
</div>
</div>

<div className="reveal-on-scroll group h-80 cursor-pointer" style={{transitionDelay: '400ms'}}>
<div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d">
<div className="absolute w-full h-full backface-hidden rounded-2xl bg-[#0A0A0C] border border-white/5 p-8 flex flex-col items-start justify-between overflow-hidden">
<div className="border-beam" style={{-BeamColor: '#00F0FF', animationDelay: '-2s'}}></div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-brand-accent">
<i className="w-6 h-6" data-lucide="boxes"></i>
</div>
<div className="text-left">
<h3 className="text-xl font-medium text-white mb-2">Physics Engine</h3>
<p className="text-white/40 leading-relaxed">Springs, decay, and fluid friction modeled on real-world constants.</p>
</div>
</div>
<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[#111] border border-brand-accent/30 p-8 flex flex-col items-center justify-center">
<div className="grid grid-cols-2 gap-4 w-full text-center">
<div className="bg-white/5 p-2 rounded">
<div className="text-brand-accent font-mono text-lg">90fps</div>
<div className="text-[10px] text-white/40">Mobile</div>
</div>
<div className="bg-white/5 p-2 rounded">
<div className="text-brand-accent font-mono text-lg">144fps</div>
<div className="text-[10px] text-white/40">Desktop</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#030014] relative overflow-hidden">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium text-white tracking-tight">Trusted by Engineering Teams</h2>
</div>
<div className="marquee-container relative w-full overflow-hidden">
<div className="flex gap-6 w-max marquee-content">


<div className="w-80 p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
<p className="text-white/70 text-sm leading-relaxed mb-4">"The GPU utilization is incredibly efficient. We dropped our bundle size by 40%."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
<div><div className="text-white text-xs font-medium">Sarah Jenkins</div><div className="text-white/30 text-[10px]">CTO, Vercel</div></div>
</div>
</div>
<div className="w-80 p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
<p className="text-white/70 text-sm leading-relaxed mb-4">"Finally, web animations that feel like native iOS interaction. Smooth as silk."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-cyan-500"></div>
<div><div className="text-white text-xs font-medium">Mark Chen</div><div className="text-white/30 text-[10px]">Lead Eng, Linear</div></div>
</div>
</div>
<div className="w-80 p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
<p className="text-white/70 text-sm leading-relaxed mb-4">"The physics engine is unmatched. Transitions feel organic and weighted."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
<div><div className="text-white text-xs font-medium">Alex Rivera</div><div className="text-white/30 text-[10px]">Frontend, Stripe</div></div>
</div>
</div>
<div className="w-80 p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
<p className="text-white/70 text-sm leading-relaxed mb-4">"Replaced three different libraries with Gemini 3. It just works."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500"></div>
<div><div className="text-white text-xs font-medium">Jessica Lee</div><div className="text-white/30 text-[10px]">Senior Dev, Raycast</div></div>
</div>
</div>

<div className="w-80 p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
<p className="text-white/70 text-sm leading-relaxed mb-4">"The GPU utilization is incredibly efficient. We dropped our bundle size by 40%."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
<div><div className="text-white text-xs font-medium">Sarah Jenkins</div><div className="text-white/30 text-[10px]">CTO, Vercel</div></div>
</div>
</div>
<div className="w-80 p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
<p className="text-white/70 text-sm leading-relaxed mb-4">"Finally, web animations that feel like native iOS interaction. Smooth as silk."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-cyan-500"></div>
<div><div className="text-white text-xs font-medium">Mark Chen</div><div className="text-white/30 text-[10px]">Lead Eng, Linear</div></div>
</div>
</div>
<div className="w-80 p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
<p className="text-white/70 text-sm leading-relaxed mb-4">"The physics engine is unmatched. Transitions feel organic and weighted."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500"></div>
<div><div className="text-white text-xs font-medium">Alex Rivera</div><div className="text-white/30 text-[10px]">Frontend, Stripe</div></div>
</div>
</div>
<div className="w-80 p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
<p className="text-white/70 text-sm leading-relaxed mb-4">"Replaced three different libraries with Gemini 3. It just works."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500"></div>
<div><div className="text-white text-xs font-medium">Jessica Lee</div><div className="text-white/30 text-[10px]">Senior Dev, Raycast</div></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="pricing">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-white mb-6">Simple Pricing</h2>

<div className="inline-flex items-center bg-white/5 p-1 rounded-full border border-white/10 cursor-pointer" onclick="togglePricing()">
<button className="px-6 py-2 rounded-full text-xs font-medium bg-white/10 text-white transition-all" id="btn-monthly">Monthly</button>
<button className="px-6 py-2 rounded-full text-xs font-medium text-white/50 hover:text-white transition-all" id="btn-annual">Annual <span className="text-brand-teal text-[10px] ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 hover:border-white/10 transition-colors relative">
<h3 className="text-white font-medium mb-2">Starter</h3>
<div className="text-3xl font-bold text-white mb-6 flex items-baseline gap-1">
                        $<span className="price-val" data-a="0" data-m="0">0</span><span className="text-sm font-normal text-white/40">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs text-white/60"><i className="w-4 h-4 text-white/20" data-lucide="check"></i> 10k Animations/mo</li>
<li className="flex items-center gap-3 text-xs text-white/60"><i className="w-4 h-4 text-white/20" data-lucide="check"></i> Community Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 border border-white/5 text-xs font-medium transition-all">Get Started</button>
</div>

<div className="p-8 rounded-2xl bg-[#0F0F12] border border-brand-teal/30 relative transform md:-translate-y-4 shadow-2xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-teal text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-white font-medium mb-2">Pro</h3>
<div className="text-3xl font-bold text-white mb-6 flex items-baseline gap-1">
                        $<span className="price-val" data-a="39" data-m="49">49</span><span className="text-sm font-normal text-white/40">/mo</span>
</div>

<div className="mb-6">
<div className="flex justify-between text-[10px] text-white/40 mb-1">
<span>Capacity</span>
<span>High</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-brand-teal w-0 animate-[fillBar_1.5s_ease-out_forwards_0.5s]"></div>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs text-white"><i className="w-4 h-4 text-brand-teal" data-lucide="check"></i> Unlimited Animations</li>
<li className="flex items-center gap-3 text-xs text-white"><i className="w-4 h-4 text-brand-teal" data-lucide="check"></i> Priority GPU Access</li>
<li className="flex items-center gap-3 text-xs text-white"><i className="w-4 h-4 text-brand-teal" data-lucide="check"></i> Email Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-brand-teal text-white hover:bg-[#0C8F8F] text-xs font-medium transition-all shadow-[0_0_20px_rgba(14,165,165,0.2)]">Upgrade to Pro</button>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-white font-medium mb-2">Enterprise</h3>
<div className="text-3xl font-bold text-white mb-6 flex items-baseline gap-1">
                        $<span className="price-val" data-a="159" data-m="199">199</span><span className="text-sm font-normal text-white/40">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-xs text-white/60"><i className="w-4 h-4 text-white/20" data-lucide="check"></i> Custom Shaders</li>
<li className="flex items-center gap-3 text-xs text-white/60"><i className="w-4 h-4 text-white/20" data-lucide="check"></i> Dedicated Slack Channel</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 border border-white/5 text-xs font-medium transition-all">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-white mb-12 text-center">Questions</h2>
<div className="space-y-4">

<div className="border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-4 text-left text-sm font-medium text-white/90 hover:bg-white/5 transition-colors" onclick="toggleAccordion(this)">
<span>Does it support WebGL fallback?</span>
<i className="w-4 h-4 text-white/40 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="accordion-content h-0">
<div className="p-4 text-white/50 text-xs leading-relaxed border-t border-white/5">
                        Yes. If WebGPU isn't available, we automatically fallback to WebGL 2.0, and then to CSS transforms, ensuring your site never breaks.
                    </div>
</div>
</div>

<div className="border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-4 text-left text-sm font-medium text-white/90 hover:bg-white/5 transition-colors" onclick="toggleAccordion(this)">
<span>Is it compatible with React Server Components?</span>
<i className="w-4 h-4 text-white/40 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="accordion-content h-0">
<div className="p-4 text-white/50 text-xs leading-relaxed border-t border-white/5">
                        Absolutely. Gemini 3 is fully tree-shakeable and optimized for Next.js App Router and React Server Components out of the box.
                    </div>
</div>
</div>

<div className="border border-white/10 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-4 text-left text-sm font-medium text-white/90 hover:bg-white/5 transition-colors" onclick="toggleAccordion(this)">
<span>How does the licensing work?</span>
<i className="w-4 h-4 text-white/40 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="accordion-content h-0">
<div className="p-4 text-white/50 text-xs leading-relaxed border-t border-white/5">
                        We offer a generous free tier for developers. Commercial licenses are required only when your app exceeds 10k monthly active users.
                    </div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#030014] relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-brand-purple to-brand-teal flex items-center justify-center text-white font-medium text-[10px]">G</div>
<span className="text-xs text-white/40">© 2024 Gemini 3 Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-white transition-colors text-xs" href="#">Twitter</a>
<a className="text-white/40 hover:text-white transition-colors text-xs" href="#">GitHub</a>
<a className="text-white/40 hover:text-white transition-colors text-xs" href="#">Discord</a>
</div>
</div>
</footer>



    </>
  );
}
