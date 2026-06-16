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
background: '#08080A',
surface: '#0F0F11',
surfaceHighlight: '#18181B',
primary: '#8b5cf6',
primaryGlow: '#6d28d9',
textMain: '#EDEDEF',
textMuted: '#A1A1AA',
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spark-rotate': 'sparkRotate 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
sparkRotate: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Scroll Reveal (Blur Fade Up)
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-blur').forEach(el => observer.observe(el));

            // 2. Magnetic Cards Effect
            const cards = document.querySelectorAll('[data-magnetic]');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    if(window.innerWidth < 768) return; // Disable on mobile
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -3; // Max tilt deg
                    const rotateY = ((x - centerX) / centerX) * 3;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    card.style.boxShadow = `0 10px 30px -10px rgba(255, 255, 255, 0.05)`;
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                    card.style.boxShadow = 'none';
                });
            });

            // 3. Hero "Live Agent" Simulation
            const runHeroAnimation = () => {
                const cursor = document.getElementById('agent-cursor');
                const btn = document.getElementById('btn-create');
                const ticket = document.getElementById('hero-ticket');
                
                if(!cursor || !btn || !ticket) return;

                setTimeout(() => {
                    // Move to button
                    cursor.style.top = '78%'; 
                    cursor.style.left = '42%'; 
                    
                    // "Click"
                    setTimeout(() => {
                        cursor.style.transform = 'scale(0.9)';
                        btn.classList.add('scale-95');
                        
                        setTimeout(() => {
                            cursor.style.transform = 'scale(1)';
                            btn.classList.remove('scale-95');
                            
                            // Show Ticket
                            ticket.style.opacity = '1';
                            ticket.style.transform = 'translateY(0)';
                            
                            // Move away
                            setTimeout(() => {
                                cursor.style.top = '90%';
                                cursor.style.left = '90%';
                                cursor.style.opacity = '0';
                            }, 1000);
                        }, 200);
                    }, 800);
                }, 1500); // Start delay
            };

            // Run initial animation
            runHeroAnimation();

            // 4. Random "Thinking" Pulse
            const avatar = document.getElementById('pixie-avatar');
            if(avatar) {
                setInterval(() => {
                    avatar.classList.add('animate-thought-pulse');
                    setTimeout(() => {
                        avatar.classList.remove('animate-thought-pulse');
                    }, 1500);
                }, 12000); // Every 12s
            }

            // 5. Easter Egg Microcopy
            const egg = document.getElementById('easter-egg');
            if(egg) {
                setTimeout(() => {
                    egg.classList.remove('opacity-0');
                    setTimeout(() => {
                        egg.classList.add('opacity-0');
                    }, 5000);
                }, 3000);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grain-overlay"></div>

<div className="fixed inset-0 w-full h-full pointer-events-none z-0">
<div className="absolute top-[-10%] left-[20%] w-[60vw] h-[60vw] bg-violet-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDI1Ii8+Cjwvc3ZnPg==')] opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 bg-background/60 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2 group" href="#">
<span className="w-6 h-6 flex items-center justify-center rounded bg-white/10 text-white group-hover:bg-primary/20 transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
</span>
                Pixie
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-textMuted font-medium">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-textMuted hover:text-white transition-colors font-medium" href="#">Log in</a>

<a className="spark-btn group relative px-4 py-2 text-sm font-medium text-white rounded-full transition-all shadow-[0_0_15px_-5px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)]" href="#">
<div className="spark-btn-bg"></div>
<span className="flex items-center gap-1.5">
                        Get Early Access
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary/80 mb-8 reveal-blur">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>Safe by default. Built for speed.</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] reveal-blur" style={{transitionDelay: '100ms'}}>
                Pixie is your <span className="text-gradient">agentic teammate</span> <br className="hidden md:block"/> on every call.
            </h1>
<div className="reveal-blur relative" style={{transitionDelay: '200ms'}}>
<p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-2 leading-relaxed">
                    Brainstorm, decide, and execute. Pixie turns your conversation into momentum by creating tasks, docs, and follow-ups in real-time.
                </p>

<div className="h-6 text-xs text-primary/60 font-mono transition-opacity duration-1000 opacity-0 mb-8" id="easter-egg">
                    // Pixie is listening for the next move.
                </div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 reveal-blur" style={{transitionDelay: '300ms'}}>
<button className="group px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 hover:gap-3 hover:scale-105 active:scale-95 duration-200">
                    Get Early Access
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
<button className="px-8 py-3.5 rounded-full glass text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2 hover:border-white/20">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    See Pixie in Action
                </button>
</div>

<div className="relative max-w-5xl mx-auto animate-float reveal-blur" style={{transitionDelay: '400ms'}}>
<div className="absolute inset-0 bg-violet-500/20 blur-[100px] -z-10 rounded-full"></div>
<div className="glass-panel rounded-2xl p-1 md:p-2 border border-white/10 shadow-2xl relative overflow-hidden">
<div className="bg-[#0c0c0e] rounded-xl border border-white/5 overflow-hidden flex flex-col md:flex-row h-[400px] md:h-[500px] relative">

<div className="absolute z-50 transition-all duration-700 ease-in-out pointer-events-none drop-shadow-lg opacity-0 md:opacity-100" id="agent-cursor" style={{top: '80%', left: '90%'}}>
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#8b5cf6" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="bg-primary px-2 py-0.5 rounded ml-4 -mt-2 text-[10px] font-bold text-white whitespace-nowrap">Pixie Agent</div>
</div>

<div className="w-16 md:w-20 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-surface z-10">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded bg-transparent hover:bg-white/5 flex items-center justify-center text-textMuted transition-colors">
<iconify-icon icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded bg-transparent hover:bg-white/5 flex items-center justify-center text-textMuted transition-colors">
<iconify-icon icon="solar:check-square-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 flex flex-col relative z-0">
<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-surface/50">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-sm font-medium text-white">Product Sync: Q3 Roadmap</span>
</div>
<div className="text-xs text-textMuted flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                    12:04
                                </div>
</div>
<div className="flex-1 p-6 space-y-6 overflow-hidden">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
<div className="space-y-1 text-left">
<div className="text-xs font-medium text-gray-400">Alex (Product)</div>
<div className="text-sm text-gray-200">We need to finalize the mobile onboarding flow before Friday. Can you set that up?</div>
</div>
</div>

<div className="flex gap-4 pl-4 relative">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent"></div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.4)] relative" id="pixie-avatar">
<iconify-icon icon="solar:stars-minimalistic-bold" width="16"></iconify-icon>
</div>
<div className="space-y-3 w-full max-w-md text-left">
<div className="text-xs font-medium text-primary">Pixie</div>

<div className="glass p-4 rounded-lg rounded-tl-none border border-primary/20 bg-primary/5 transition-all duration-500">
<div className="flex items-center gap-2 mb-2 text-xs font-medium text-violet-200">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
                                                Suggested Action
                                            </div>
<p className="text-sm text-white mb-3">I've drafted a Linear ticket for the mobile onboarding flow.</p>

<div className="bg-black/40 rounded border border-white/10 p-3 mb-3 transition-all duration-500 translate-y-2 opacity-0" id="hero-ticket">
<div className="flex items-center justify-between mb-1">
<span className="text-xs text-gray-400">LIN-2491</span>
<span className="text-[10px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded">High</span>
</div>
<div className="text-sm font-medium text-gray-200">Finalize Mobile Onboarding Designs</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded text-xs font-medium bg-primary text-white transition-all hover:bg-primaryGlow active:scale-95" id="btn-create">Create Ticket</button>
<button className="px-3 py-1.5 rounded text-xs font-medium bg-white/5 text-gray-400 hover:text-white transition-colors">Edit</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-sm text-textMuted mb-8 reveal-blur">Trusted by early teams shipping fast</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 reveal-blur">
<div className="text-xl font-bold tracking-tight font-sans hover:text-white transition-colors cursor-default">ACME INC.</div>
<div className="text-xl font-bold tracking-tight font-sans hover:text-white transition-colors cursor-default">KALEIDO</div>
<div className="text-xl font-bold tracking-tight font-sans hover:text-white transition-colors cursor-default">VERTEX</div>
<div className="text-xl font-bold tracking-tight font-sans hover:text-white transition-colors cursor-default">NEXUS</div>
<div className="text-xl font-bold tracking-tight font-sans hover:text-white transition-colors cursor-default">ORBIT</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight/30 px-6" id="product">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-blur">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Pixie doesn’t take notes. <span className="text-primary">Pixie gets work done.</span></h2>
<p className="text-textMuted">Move beyond transcription. Enter active participation.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 magnetic-wrap">

<div className="magnetic-card p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 hover:bg-white/[0.02] reveal-blur" data-magnetic="">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 transition-transform duration-300">
<iconify-icon icon="solar:lightbulb-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Brainstorm</h3>
<p className="text-sm text-textMuted mb-4">Generate sharp ideas, angles, and options — ranked with reasoning.</p>
<div className="text-xs text-blue-300/60 font-mono bg-blue-500/5 py-1 px-2 rounded w-fit">5 ideas → 2 best → 1 move</div>
</div>

<div className="magnetic-card p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 hover:bg-white/[0.02] reveal-blur scan-glow relative overflow-hidden" data-magnetic="" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4 transition-transform duration-300">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Decide</h3>
<p className="text-sm text-textMuted mb-4">Stop looping. Pixie drives clarity with tradeoffs and recommendations.</p>
<div className="text-xs text-violet-300/60 font-mono bg-violet-500/5 py-1 px-2 rounded w-fit">Options → criteria → decision</div>
</div>

<div className="magnetic-card p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 hover:bg-white/[0.02] reveal-blur" data-magnetic="" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 transition-transform duration-300">
<iconify-icon icon="solar:calendar-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Plan</h3>
<p className="text-sm text-textMuted mb-4">Turn discussions into structured plans with owners and milestones.</p>
<div className="text-xs text-emerald-300/60 font-mono bg-emerald-500/5 py-1 px-2 rounded w-fit">Scope → milestones → timelines</div>
</div>

<div className="magnetic-card p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 hover:bg-white/[0.02] reveal-blur" data-magnetic="" style={{transitionDelay: '300ms'}}>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4 transition-transform duration-300">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Execute</h3>
<p className="text-sm text-textMuted mb-4">Pixie drafts docs, creates tasks, and prepares follow-ups — with approval.</p>
<div className="text-xs text-orange-300/60 font-mono bg-orange-500/5 py-1 px-2 rounded w-fit">Draft → approve → done</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="how-it-works">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center reveal-blur">From conversation to execution.</h2>
<div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">

<div className="relative pl-8 md:pl-12 reveal-blur">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-surface border border-white/30 ring-4 ring-background"></div>
<div className="flex flex-col md:flex-row gap-4 md:items-start group">
<div className="flex-1 transition-transform duration-300 group-hover:translate-x-2">
<span className="text-xs font-mono text-primary mb-1 block">STEP 01</span>
<h3 className="text-xl font-medium text-white mb-2">Invite Pixie</h3>
<p className="text-textMuted text-sm leading-relaxed">Pixie joins your call like any other teammate. It listens securely, ready to jump in when you need support.</p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 reveal-blur">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-surface border border-white/30 ring-4 ring-background"></div>
<div className="flex flex-col md:flex-row gap-4 md:items-start group">
<div className="flex-1 transition-transform duration-300 group-hover:translate-x-2">
<span className="text-xs font-mono text-primary mb-1 block">STEP 02</span>
<h3 className="text-xl font-medium text-white mb-2">Ask or Assign</h3>
<p className="text-textMuted text-sm leading-relaxed">Just say: “Pixie, create tickets for these bugs” or “Pixie, draft a proposal based on this.”</p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 reveal-blur">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-surface border border-white/30 ring-4 ring-background"></div>
<div className="flex flex-col md:flex-row gap-4 md:items-start group">
<div className="flex-1 transition-transform duration-300 group-hover:translate-x-2">
<span className="text-xs font-mono text-primary mb-1 block">STEP 03</span>
<h3 className="text-xl font-medium text-white mb-2">Approve Actions</h3>
<p className="text-textMuted text-sm leading-relaxed">Pixie presents a draft in the chat. You review, tweak if needed, and hit approve. Nothing sends without you.</p>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12 reveal-blur">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
<div className="flex flex-col md:flex-row gap-4 md:items-start group">
<div className="flex-1 transition-transform duration-300 group-hover:translate-x-2">
<span className="text-xs font-mono text-primary mb-1 block">STEP 04</span>
<h3 className="text-xl font-medium text-white mb-2">Ship Faster</h3>
<p className="text-textMuted text-sm leading-relaxed">Docs created, tickets filed, emails sent. The work is done before the call ends.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight/30 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-12 reveal-blur">Built for startup chaos.</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors reveal-blur use-case-card cursor-default group">
<iconify-icon className="text-3xl text-white mb-4 transition-colors" icon="solar:roadmap-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Product Planning</h3>
<p className="text-sm text-textMuted group-hover:text-white transition-colors">Turn roadmap talk into a crisp PRD + sprint tasks instantly.</p>
<div className="prompt-reveal text-sm font-mono text-primary mt-3">“Pixie, turn this discussion into a PRD.”</div>
</div>
<div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors reveal-blur use-case-card cursor-default group" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-3xl text-white mb-4 transition-colors" icon="solar:bug-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Engineering Unblock</h3>
<p className="text-sm text-textMuted group-hover:text-white transition-colors">Debug faster with screen-aware troubleshooting and context.</p>
<div className="prompt-reveal text-sm font-mono text-primary mt-3">“Pixie, create tickets for these bugs.”</div>
</div>
<div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors reveal-blur use-case-card cursor-default group" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-3xl text-white mb-4 transition-colors" icon="solar:chat-round-dots-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Customer Feedback</h3>
<p className="text-sm text-textMuted group-hover:text-white transition-colors">Convert calls into insights, tickets, and priority lists.</p>
<div className="prompt-reveal text-sm font-mono text-primary mt-3">“Pixie, what did the user say about pricing?”</div>
</div>
<div className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors reveal-blur use-case-card cursor-default group" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-3xl text-white mb-4 transition-colors" icon="solar:case-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Founder Ops</h3>
<p className="text-sm text-textMuted group-hover:text-white transition-colors">Weekly updates, follow-ups, and coordination — handled.</p>
<div className="prompt-reveal text-sm font-mono text-primary mt-3">“Pixie, draft the follow-up email.”</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-2xl font-semibold text-white mb-8 reveal-blur">Fits your stack.</h2>
<div className="flex flex-wrap justify-center gap-6 reveal-blur">
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-white/20 transition-all hover:scale-105 duration-300 cursor-default">
<iconify-icon icon="logos:google-meet"></iconify-icon> Google Meet
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-white/20 transition-all hover:scale-105 duration-300 cursor-default">
<iconify-icon icon="logos:slack-icon"></iconify-icon> Slack
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-white/20 transition-all hover:scale-105 duration-300 cursor-default">
<iconify-icon icon="logos:notion-icon"></iconify-icon> Notion
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-white/20 transition-all hover:scale-105 duration-300 cursor-default">
<iconify-icon icon="logos:linear-icon"></iconify-icon> Linear
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-white/20 transition-all hover:scale-105 duration-300 cursor-default">
<iconify-icon icon="logos:jira"></iconify-icon> Jira
                </div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-surfaceHighlight/10 border-y border-white/5" id="security">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 reveal-blur">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left">
<h2 className="text-2xl font-semibold text-white mb-2">Safe by default.</h2>
<div className="grid sm:grid-cols-2 gap-4 text-sm text-textMuted">
<div className="flex items-center gap-2 justify-center md:justify-start">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Approval required for all actions
                    </div>
<div className="flex items-center gap-2 justify-center md:justify-start">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Least-privilege permissions
                    </div>
<div className="flex items-center gap-2 justify-center md:justify-start">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> SOC-2 compliant infrastructure
                    </div>
<div className="flex items-center gap-2 justify-center md:justify-start">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Data encrypted at rest &amp; transit
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="pricing">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 text-center reveal-blur">Start small. Scale fast.</h2>
<p className="text-textMuted text-center mb-16 reveal-blur">Simple pricing for teams of all sizes.</p>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl bg-surface border border-white/5 flex flex-col reveal-blur hover:border-white/10 transition-colors">
<div className="mb-4 text-white font-medium">Starter</div>
<div className="text-3xl font-bold text-white mb-1">$0</div>
<div className="text-sm text-textMuted mb-8">Forever free for individuals.</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon icon="solar:check-linear"></iconify-icon> Brainstorm mode</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon icon="solar:check-linear"></iconify-icon> Planning templates</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon icon="solar:check-linear"></iconify-icon> Copy/paste outputs</li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 text-sm font-medium text-white text-center hover:bg-white/5 transition-colors" href="#">Get Started</a>
</div>

<div className="p-8 rounded-2xl bg-surface/80 border border-primary/50 relative flex flex-col shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)] reveal-blur hover:-translate-y-1 transition-all duration-300 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg">Recommended</div>
<div className="mb-4 text-white font-medium">Team</div>
<div className="text-3xl font-bold text-white mb-1">$19</div>
<div className="text-sm text-textMuted mb-8">Per user / month.</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-primary" icon="solar:check-circle-bold"></iconify-icon> Task creation</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-primary" icon="solar:check-circle-bold"></iconify-icon> Docs + follow-ups</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-primary" icon="solar:check-circle-bold"></iconify-icon> Full Integrations</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-primary" icon="solar:check-circle-bold"></iconify-icon> Approval workflows</li>
</ul>
<a className="w-full py-2.5 rounded-lg bg-primary text-sm font-medium text-white text-center hover:bg-primaryGlow transition-colors shadow-lg shadow-primary/25" href="#">Get Started</a>
</div>

<div className="p-8 rounded-2xl bg-surface border border-white/5 flex flex-col reveal-blur hover:border-white/10 transition-colors" style={{transitionDelay: '100ms'}}>
<div className="mb-4 text-white font-medium">Company</div>
<div className="text-3xl font-bold text-white mb-1">Custom</div>
<div className="text-sm text-textMuted mb-8">For larger organizations.</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon icon="solar:check-linear"></iconify-icon> Admin controls</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon icon="solar:check-linear"></iconify-icon> Security review</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><iconify-icon icon="solar:check-linear"></iconify-icon> Priority support</li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 text-sm font-medium text-white text-center hover:bg-white/5 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal-blur">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">Stop talking about work. <br/> <span className="text-primary">Ship it.</span></h2>
<p className="text-lg text-textMuted mb-10 max-w-xl mx-auto">Pixie is the teammate that turns decisions into done. Join high-performing teams shipping faster today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2 hover:scale-105 duration-200 shadow-lg shadow-white/10" href="#">
                    Get Early Access
                </a>
<a className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/5 transition-colors" href="#">
                    Request a Demo
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<span className="w-5 h-5 flex items-center justify-center rounded bg-white/10 text-white">
<iconify-icon icon="solar:stars-minimalistic-linear" width="12"></iconify-icon>
</span>
                Pixie
            </div>
<div className="flex flex-wrap justify-center gap-8 text-sm text-textMuted">
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Privacy</a>
<span>© 2024 Pixie Inc.</span>
</div>
</div>
</footer>



    </>
  );
}
