import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Cursor Motion
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Magnetic link effect (subtle)
        document.querySelectorAll('a').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0, 0)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="cursor-follow hidden lg:block" id="cursor"></div>

<div className="fixed inset-0 -z-50 mesh-gradient"></div>
<div className="fixed inset-0 -z-40 industrial-grid mask-fade"></div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference">
<div className="max-w-[100rem] mx-auto px-8 h-24 flex items-center justify-between">
<a className="text-white text-base font-semibold tracking-tighter uppercase flex items-center gap-3" href="#">
                GWAVE <span className="w-2 h-2 bg-[#DFFF00]"></span>
</a>
<div className="flex items-center gap-12 text-white/60">
<a className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] hover:text-[#DFFF00] transition-colors" href="#expertise">Expertise</a>
<a className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] hover:text-[#DFFF00] transition-colors" href="#stack">Stack</a>
<a className="px-6 py-2.5 bg-white text-black text-[0.65rem] font-bold uppercase tracking-[0.1em] rounded-full hover:bg-[#DFFF00] transition-all" href="#contact">
                    Initiate
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20">
<div className="max-w-[100rem] mx-auto px-8 w-full">
<div className="reveal max-w-5xl">
<div className="flex items-center gap-4 mb-12">
<span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-zinc-400">EST. 1982 / INDUSTRIAL SOFTWARE</span>
<div className="h-px flex-1 bg-zinc-100"></div>
</div>
<h1 className="text-[clamp(3.5rem,10vw,8rem)] font-semibold tracking-tighter leading-[0.85] mb-16">
                    A-PLAYERS <br/>
<span className="italic font-light">Engineered</span> FOR <br/>
<span className="highlighter-text">GLOBAL SCALE.</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-6">
<p className="text-base md:text-lg text-zinc-500 leading-relaxed font-normal">
                            High-concurrency systems for the world's most demanding environments. We don't build websites; we build technical infrastructure that handles millions of interactions with mathematical precision.
                        </p>
</div>
<div className="md:col-span-6 flex md:justify-end gap-4">
<div className="p-8 border border-zinc-200 rounded-3xl bg-white/50 backdrop-blur-xl">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl font-semibold tracking-tighter">1.2B+</span>
<span className="text-[#DFFF00] text-lg">●</span>
</div>
<span className="text-[0.6rem] font-bold uppercase tracking-widest text-zinc-400">Requests processed monthly</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 relative border-t border-zinc-100" id="expertise">
<div className="max-w-[100rem] mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-200/50">
<div className="reveal bg-white p-12 lg:p-20 group hover:bg-[#DFFF00] transition-all duration-700">
<div className="flex justify-between items-start mb-24">
<iconify-icon className="text-4xl text-zinc-300 group-hover:text-black" icon="solar:globus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] font-bold tracking-widest group-hover:text-black">01</span>
</div>
<h3 className="text-3xl font-semibold tracking-tighter mb-6 group-hover:text-black">Hyper-Scale <br/>Architecture</h3>
<p className="text-xs leading-relaxed text-zinc-500 group-hover:text-black/70">Redundant cloud infrastructure designed for zero-downtime deployments and multi-region synchronization.</p>
</div>
<div className="reveal delay-100 bg-white p-12 lg:p-20 group hover:bg-[#DFFF00] transition-all duration-700">
<div className="flex justify-between items-start mb-24">
<iconify-icon className="text-4xl text-zinc-300 group-hover:text-black" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] font-bold tracking-widest group-hover:text-black">02</span>
</div>
<h3 className="text-3xl font-semibold tracking-tighter mb-6 group-hover:text-black">Real-time <br/>Data Fabric</h3>
<p className="text-xs leading-relaxed text-zinc-500 group-hover:text-black/70">Proprietary logic for low-latency data processing and high-integrity state management at mass scale.</p>
</div>
<div className="reveal delay-200 bg-white p-12 lg:p-20 group hover:bg-[#DFFF00] transition-all duration-700">
<div className="flex justify-between items-start mb-24">
<iconify-icon className="text-4xl text-zinc-300 group-hover:text-black" icon="solar:shield-keyhole-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] font-bold tracking-widest group-hover:text-black">03</span>
</div>
<h3 className="text-3xl font-semibold tracking-tighter mb-6 group-hover:text-black">Hardened <br/>Security</h3>
<p className="text-xs leading-relaxed text-zinc-500 group-hover:text-black/70">Defense-in-depth engineering. Every line of code is audited for the most sophisticated threat vectors.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-40 rounded-t-[4rem] relative overflow-hidden" id="stack">
<div className="absolute top-0 right-0 w-1/2 h-full bg-[#DFFF00]/5 blur-[120px]"></div>
<div className="max-w-[100rem] mx-auto px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
<div className="reveal">
<h2 className="text-[0.65rem] font-bold text-[#DFFF00] uppercase tracking-[0.4em] mb-12">The Infrastructure</h2>
<h3 className="text-4xl md:text-6xl text-white font-semibold tracking-tighter mb-12 leading-[1.1]">The stack that moves <br/>the needle.</h3>
<div className="space-y-12">
<div className="flex gap-8 items-start border-b border-white/10 pb-12">
<span className="text-[#DFFF00] text-sm font-bold">/01</span>
<div>
<h4 className="text-white text-lg font-medium mb-2 tracking-tight">Predictive Scaling</h4>
<p className="text-zinc-500 text-xs leading-relaxed max-w-sm">We utilize AI-driven orchestration to anticipate traffic surges before they occur, ensuring cost-efficiency and uptime.</p>
</div>
</div>
<div className="flex gap-8 items-start border-b border-white/10 pb-12">
<span className="text-[#DFFF00] text-sm font-bold">/02</span>
<div>
<h4 className="text-white text-lg font-medium mb-2 tracking-tight">Immutable Deployments</h4>
<p className="text-zinc-500 text-xs leading-relaxed max-w-sm">Binary-reproducible builds that eliminate "works on my machine" and ensure absolute parity across environments.</p>
</div>
</div>
</div>
</div>
<div className="reveal delay-200 relative aspect-square">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-full border border-[#DFFF00]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute w-3/4 h-3/4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 bg-[#DFFF00] neon-glow rounded-3xl rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(223,255,0,0.5)]">
<iconify-icon className="text-4xl text-black" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-40" id="contact">
<div className="max-w-[100rem] mx-auto px-8">
<div className="reveal text-center mb-40">
<span className="text-[0.65rem] font-bold text-zinc-500 uppercase tracking-[0.5em] mb-12 block">Available for Q3-Q4 2026</span>
<h2 className="text-[clamp(3rem,8vw,6.5rem)] text-white font-semibold tracking-tighter mb-16 leading-[0.9]">
                    LEAVE THE <br/> <span className="text-zinc-700">COMPROMISE</span> <br/> TO OTHERS.
                </h2>
<a className="group relative inline-flex items-center justify-center px-16 py-8 bg-[#DFFF00] text-black text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95" href="mailto:hello@goodwave.io">
<span className="relative z-10 flex items-center gap-4">
                        Start your system
                        <iconify-icon className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
</a>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-white/5 pt-16 gap-12">
<div className="flex flex-col gap-8">
<span className="text-white text-3xl font-semibold tracking-tighter uppercase">GWAVE</span>
<p className="text-[0.6rem] text-zinc-500 uppercase tracking-[0.3em] font-bold">
                        Industrial Engineering <br/>
                        A-Players Since 1982 <br/>
                        All Rights Reserved 2026
                    </p>
</div>
<div className="flex gap-20">
<div className="flex flex-col gap-4">
<span className="text-[0.6rem] font-bold text-white uppercase tracking-widest">Connect</span>
<a className="text-xs text-zinc-500 hover:text-[#DFFF00] transition-colors uppercase tracking-widest" href="#">Twitter/X</a>
<a className="text-xs text-zinc-500 hover:text-[#DFFF00] transition-colors uppercase tracking-widest" href="#">GitHub</a>
<a className="text-xs text-zinc-500 hover:text-[#DFFF00] transition-colors uppercase tracking-widest" href="#">LinkedIn</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
