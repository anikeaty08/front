import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['"Inter Tight"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
bg: '#020202',
glass: 'rgba(255, 255, 255, 0.03)',
'glass-hover': 'rgba(255, 255, 255, 0.06)',
border: 'rgba(255, 255, 255, 0.08)',
primary: '#E2E2E2',
secondary: '#888888',
accent: '#3B82F6', // Electric Blue
neon: '#D4FF00',   // Acid Green/Yellow
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #1a1a1a 0deg, #0a0a0a 180deg, #1a1a1a 360deg)',
},
animation: {
'blob': 'blob 10s infinite',
'scan': 'scan 4s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'grid-move': 'gridMove 20s linear infinite',
'slide': 'slide 2s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scan: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
gridMove: {
'0%': { backgroundPosition: '0 0' },
'100%': { backgroundPosition: '0 40px' }
},
slide: {
'0%': { left: '-20%' },
'100%': { left: '120%' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Spotlight Effect Logic
        const cards = document.querySelectorAll('.spotlight-card');
        
        document.body.addEventListener('mousemove', (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });

        // Typewriter Effect for Hero
        const typeTarget = document.querySelector('.typewriter-text');
        const commands = ['deploy model --tier=h100', 'optimize latency --region=global', 'init private-cluster'];
        let cmdIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentCmd = commands[cmdIndex];
            
            if (isDeleting) {
                typeTarget.textContent = currentCmd.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeTarget.textContent = currentCmd.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentCmd.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                cmdIndex = (cmdIndex + 1) % commands.length;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(type, speed);
        }

        setTimeout(type, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-light">
<div className="orb orb-1"></div>
<div className="orb orb-2"></div>
<div className="orb orb-3"></div>
</div>
<div className="noise"></div>

<header className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
<div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-bold tracking-tighter text-lg">C</div>
<span className="font-mono text-xs tracking-widest text-zinc-400 uppercase">Cognit v2.0</span>
</div>
<nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/5 rounded-full px-1 py-1">
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#">Product</a>
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#">Engine</a>
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#">Pricing</a>
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#">Docs</a>
</nav>
<button className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neon transition-colors duration-300 rounded-sm">
<span>Access</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="perspective-grid opacity-30"></div>
<div className="relative z-20 text-center space-y-8 max-w-5xl px-4">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">System Online</span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white leading-[0.9] mix-blend-overlay opacity-90">
<span className="block hover:text-white/50 transition-colors duration-500 cursor-default">COMPUTE</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-800">WITHOUT</span>
<span className="block italic font-light font-mono text-4xl md:text-6xl mt-4 text-neon tracking-tight opacity-80">Limits_</span>
</h1>
<p className="max-w-xl mx-auto text-sm md:text-base text-zinc-500 leading-relaxed font-mono mt-8">
                The first decentralized orchestration layer for LLMs. 
                <br/>Route inference to the edge with <span className="text-white">zero latency</span>.
            </p>

<div className="mt-16 relative w-full max-w-2xl mx-auto perspective-1000 group">

<div className="relative bg-[#050505] border border-white/10 rounded-xl p-2 shadow-2xl transform transition-transform duration-700 hover:rotate-x-2 hover:scale-[1.02] animate-float">

<div className="flex items-center bg-white/5 border border-white/5 rounded-lg px-4 py-4 backdrop-blur-sm">
<iconify-icon className="text-zinc-500 text-xl mr-4" icon="solar:command-linear"></iconify-icon>
<div className="flex-1 font-mono text-sm text-zinc-300">
<span className="text-neon mr-2">➜</span>
<span className="typewriter-text border-r-2 border-neon/50 pr-1">deploy model --tier=h100</span>
</div>
<div className="flex items-center gap-2 text-[10px] text-zinc-600 font-mono border-l border-white/10 pl-4 uppercase">
<span>⌘ K</span>
</div>
</div>

<div className="grid grid-cols-4 gap-2 mt-2">
<div className="col-span-1 h-1 bg-neon/50 rounded-full animate-pulse"></div>
<div className="col-span-1 h-1 bg-white/10 rounded-full"></div>
<div className="col-span-2 h-1 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="absolute -inset-10 bg-neon/10 blur-[60px] -z-10 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
</div>
</div>
</section>

<div className="relative z-20 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden py-10">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-grid-move" style={{animationDuration: '40s', animationDirection: 'reverse'}}>
<div className="flex items-center gap-20 px-10 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
<iconify-icon className="text-2xl" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:google"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:amazon"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:meta"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:ibm"></iconify-icon>

<iconify-icon className="text-2xl" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:google"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:amazon"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:meta"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-2xl" icon="simple-icons:ibm"></iconify-icon>
</div>
</div>
</div>

<section className="relative z-10 py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Built for the <span className="italic text-zinc-500 font-serif">Machine Age</span></h2>
<div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="spotlight-card col-span-1 md:col-span-6 lg:col-span-8 rounded-2xl p-8 flex flex-col justify-between group">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:graph-new-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Neural Routing</h3>
</div>
<p className="text-sm text-zinc-400 max-w-md">Our algorithm predicts latency spikes before they happen, re-routing requests to idle GPUs across 14 regions.</p>
</div>

<div className="relative h-48 mt-8 border-t border-l border-white/5 bg-white/[0.01] rounded-tl-xl overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<svg className="absolute bottom-0 left-0 w-full h-full overflow-visible" preserveaspectratio="none">
<path className="drop-shadow-[0_0_10px_rgba(212,255,0,0.5)]" d="M0,100 Q100,80 200,90 T400,50 T600,60 T800,10" fill="none" stroke="#D4FF00" strokeWidth="2"></path>
<path d="M0,100 Q100,80 200,90 T400,50 T600,60 T800,10 L800,200 L0,200 Z" fill="url(#gradient-area)" opacity="0.2"></path>
<defs>
<lineargradient id="gradient-area" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#D4FF00', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#D4FF00', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="spotlight-card col-span-1 md:col-span-6 lg:col-span-4 rounded-2xl p-8 flex flex-col bg-white/[0.02]">
<div className="relative z-10 mb-auto">
<div className="flex items-center justify-between mb-4">
<div className="p-2 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-[10px] uppercase font-mono text-neon bg-neon/10 px-2 py-1 rounded">SOC2 Type II</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Ironclad Security</h3>
<p className="text-sm text-zinc-400">Zero-retention policy. Your data is encrypted in a private enclave.</p>
</div>
<div className="relative h-32 w-full flex items-center justify-center mt-6">
<div className="absolute w-20 h-20 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-28 h-28 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
<iconify-icon className="text-3xl text-white relative z-10" icon="solar:lock-password-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-radial from-neon/10 to-transparent blur-xl"></div>
</div>
</div>

<div className="spotlight-card col-span-1 md:col-span-6 lg:col-span-4 rounded-2xl p-8 flex flex-col justify-end overflow-hidden group">

<div className="absolute inset-0 p-6 font-mono text-[10px] text-zinc-800 leading-relaxed overflow-hidden pointer-events-none select-none opacity-50 group-hover:opacity-20 transition-opacity">
                        import { Cognit } from '@cognit/sdk';<br/>
                        const client = new Cognit({<br/>
                          key: process.env.KEY<br/>
                        });<br/>
<br/>
                        await client.generate({<br/>
                          model: 'gpt-4-turbo',<br/>
                          context: '128k'<br/>
                        });
                     </div>
<div className="relative z-10 bg-gradient-to-t from-black via-black/90 to-transparent pt-10">
<iconify-icon className="text-white text-2xl mb-4" icon="solar:code-square-linear"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Type-Safe SDK</h3>
<p className="text-sm text-zinc-400">Full TypeScript support out of the box. Auto-complete your infrastructure.</p>
</div>
</div>

<div className="spotlight-card col-span-1 md:col-span-6 lg:col-span-8 rounded-2xl p-8 relative overflow-hidden flex flex-row items-center gap-8">
<div className="flex-1 relative z-10">
<h3 className="text-xl font-medium text-white mb-2">Global Mesh</h3>
<p className="text-sm text-zinc-400 mb-6">Deploy to 35+ edge locations instantly.</p>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse"></div>
<span className="text-xs font-mono text-zinc-300">NYC-1</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse delay-75"></div>
<span className="text-xs font-mono text-zinc-300">LHR-2</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse delay-150"></div>
<span className="text-xs font-mono text-zinc-300">TYO-4</span>
</div>
</div>
</div>

<div className="flex-1 h-full min-h-[100px] relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-32 border-t border-b border-dashed border-white/10 flex items-center justify-between px-4">
<div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
<div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent relative overflow-hidden">
<div className="absolute top-0 left-0 w-10 h-full bg-white blur-[2px] animate-slide"></div>
</div>
<div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-12">[ Trusted by Engineers ]</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"The latency reduction is actually insane. We moved our entire RAG pipeline to Cognit and saw a 400ms drop immediately."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
<div>
<div className="text-xs font-medium text-white">Alex Chen</div>
<div className="text-[10px] text-zinc-500 uppercase font-mono">CTO @ Nexus</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Finally, an orchestration layer that doesn't feel like it was built in 2010. The TS SDK is a joy to work with."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500"></div>
<div>
<div className="text-xs font-medium text-white">Sarah Miller</div>
<div className="text-[10px] text-zinc-500 uppercase font-mono">Senior Eng @ Vercel</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"We were struggling with GPU cold starts on AWS. Cognit handled routing automatically. Zero config needed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-red-500"></div>
<div>
<div className="text-xs font-medium text-white">David Park</div>
<div className="text-[10px] text-zinc-500 uppercase font-mono">Founder @ Synth</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl font-medium tracking-tighter text-white mb-2">Pricing</h2>
<p className="text-zinc-500 text-sm">Scale your inference as you grow.</p>
</div>

<div className="flex items-center gap-3 bg-white/5 p-1 rounded-lg border border-white/5">
<button className="px-4 py-1.5 text-xs font-medium text-black bg-white rounded-md shadow-sm">Monthly</button>
<button className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-white transition-colors">Yearly <span className="text-[10px] text-neon ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card rounded-2xl p-8 flex flex-col h-full bg-black">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-1">Hacker</h3>
<div className="text-3xl font-bold text-white tracking-tight">$0<span className="text-sm font-normal text-zinc-500 ml-1">/mo</span></div>
<p className="text-xs text-zinc-500 mt-4 h-10">Perfect for side projects and prototypes.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                            50k tokens / mo
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                            Llama 3 &amp; Mistral
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                            Community Support
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all">Start Free</button>
</div>

<div className="spotlight-card rounded-2xl p-8 flex flex-col h-full bg-white/[0.03] border-neon/30 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon to-transparent"></div>
<div className="mb-8">
<h3 className="text-lg font-medium text-neon mb-1">Startup</h3>
<div className="text-3xl font-bold text-white tracking-tight">$49<span className="text-sm font-normal text-zinc-500 ml-1">/mo</span></div>
<p className="text-xs text-zinc-500 mt-4 h-10">For production applications.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-neon" icon="solar:check-circle-bold"></iconify-icon>
                            2M tokens / mo
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-neon" icon="solar:check-circle-bold"></iconify-icon>
                            GPT-4 &amp; Claude 3 Opus
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-neon" icon="solar:check-circle-bold"></iconify-icon>
                            Fine-tuning API
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-neon" icon="solar:check-circle-bold"></iconify-icon>
                            Private Slack Channel
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-neon text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(212,255,0,0.2)]">Get Started</button>
</div>

<div className="spotlight-card rounded-2xl p-8 flex flex-col h-full bg-black">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-1">Scale</h3>
<div className="text-3xl font-bold text-white tracking-tight">Custom</div>
<p className="text-xs text-zinc-500 mt-4 h-10">Dedicated throughput for high volume.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited tokens
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated GPU Clusters
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                            Custom SLA
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                            On-premise deployment
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 border-t border-white/5 bg-[#030303]">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-sm font-mono text-zinc-500 mb-12 uppercase tracking-widest">[ System Specifications ]</h2>
<div className="space-y-1">

<details className="group bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<span className="text-lg text-white font-medium group-hover:text-neon transition-colors">What latency can I expect?</span>
<iconify-icon className="text-2xl text-zinc-500 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-8 pt-0">
<p className="text-zinc-400 leading-relaxed max-w-2xl border-l border-neon/30 pl-4">
                            Typical cold start is &lt;50ms. Hot requests are processed in &lt;10ms plus inference time. We utilize Websockets for real-time streaming to minimize overhead.
                        </p>
</div>
</details>

<details className="group bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<span className="text-lg text-white font-medium group-hover:text-neon transition-colors">Can I bring my own fine-tuned models?</span>
<iconify-icon className="text-2xl text-zinc-500 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-8 pt-0">
<p className="text-zinc-400 leading-relaxed max-w-2xl border-l border-neon/30 pl-4">
                            Yes. Upload GGUF or SafeTensors directly to our registry. We handle the quantization and distribution to edge nodes automatically.
                        </p>
</div>
</details>

<details className="group bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-300 open:bg-white/[0.04]">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<span className="text-lg text-white font-medium group-hover:text-neon transition-colors">Is there a free tier for developers?</span>
<iconify-icon className="text-2xl text-zinc-500 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-8 pt-0">
<p className="text-zinc-400 leading-relaxed max-w-2xl border-l border-neon/30 pl-4">
                            We offer 50k tokens/month free forever. No credit card required. Includes access to Llama-3-70b and Mistral Large.
                        </p>
</div>
</details>
</div>
</div>
</section>

<section className="relative z-10 py-32 flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full border border-white/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/[0.02] rounded-full border border-white/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-neon/[0.02] rounded-full border border-neon/20 animate-pulse-fast"></div>
</div>
<div className="relative z-20 text-center">
<h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-8">Initialize Sequence</h2>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<button className="relative px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neon transition-colors duration-300 group overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                        Start Building
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300">
                    Read Documentation
                </button>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
<div>
<div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-sm font-bold text-xl mb-6">C</div>
<p className="text-zinc-500 max-w-xs text-sm">
                        San Francisco, CA<br/>
                        Tokyo, JP<br/>
                        London, UK
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
<div>
<h4 className="font-mono text-white mb-4 uppercase text-xs tracking-wider">Product</h4>
<ul className="space-y-2 text-zinc-500">
<li className="hover:text-neon cursor-pointer transition-colors">Inference</li>
<li className="hover:text-neon cursor-pointer transition-colors">Fine-tuning</li>
<li className="hover:text-neon cursor-pointer transition-colors">Vector DB</li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase text-xs tracking-wider">Company</h4>
<ul className="space-y-2 text-zinc-500">
<li className="hover:text-neon cursor-pointer transition-colors">About</li>
<li className="hover:text-neon cursor-pointer transition-colors">Careers</li>
<li className="hover:text-neon cursor-pointer transition-colors">Blog</li>
</ul>
</div>
</div>
</div>
<div className="flex justify-between items-center border-t border-white/10 pt-8">
<p className="text-xs text-zinc-600 font-mono">© 2024 COGNIT LABS.</p>
<div className="flex gap-4">
<iconify-icon className="text-zinc-500 hover:text-white cursor-pointer transition-colors" icon="simple-icons:x"></iconify-icon>
<iconify-icon className="text-zinc-500 hover:text-white cursor-pointer transition-colors" icon="simple-icons:github"></iconify-icon>
<iconify-icon className="text-zinc-500 hover:text-white cursor-pointer transition-colors" icon="simple-icons:discord"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
