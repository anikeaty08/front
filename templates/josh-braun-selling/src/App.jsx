import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
        });

        const scene = document.getElementById('interactive-scene');
        const cube = document.getElementById('cube');
        let isHovering = false;

        if (scene && cube) {
            scene.addEventListener('mousemove', (e) => {
                isHovering = true;
                const rect = scene.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; 
                const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
                const rotY = x * 60;
                const rotX = -y * 60;
                cube.style.animation = 'none';
                cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            });

            scene.addEventListener('mouseleave', () => {
                isHovering = false;
                cube.style.animation = 'spinCube 20s infinite linear';
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main navigation" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-blue-500/10 overflow-hidden group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 bg-blue-500/10 w-9 h-9 border-blue-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-blue-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Josh Braun</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-blue-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg shadow-blue-500/20" href="#booking">
                    Book a Strategy Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-blue-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(59,130,246,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-signal"></span>
                    Empathetic Selling Frameworks
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Sell Without <br/> <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">Sounding Salesy.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    Josh Braun helps sales professionals improve outreach, build trust, and create conversations that actually feel human.
                </p>

<div className="max-w-4xl mx-auto mt-8 mb-12 w-full aspect-video rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl shadow-blue-500/5">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
<iconify-icon className="text-blue-500 ml-1" icon="solar:play-bold" width="28"></iconify-icon>
</div>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2">Video Placeholder</span>
<span className="text-white font-medium text-lg tracking-tight">Watch Josh Explain Empathetic Selling</span>
</div>
<div className="flex flex-col mb-20 items-center justify-center">
<div className="flex w-full max-w-lg mb-6 pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-500 px-8 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-600 shadow-[0_0_40px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/50" href="#booking">
                            Book a Strategy Call
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>

<div aria-hidden="true" className="cube-scene hidden md:flex flex-row items-center justify-between w-full z-10 max-w-5xl mx-auto relative" id="interactive-scene" style={{minHeight: '550px', padding: '2rem 0'}}>
<style>
                        @keyframes pulseLine {
                            0% { left: -10%; opacity: 0; }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { left: 100%; opacity: 0; }
                        }
                        @keyframes floatGentle {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-4px); }
                        }
                        @keyframes pulseGlow {
                            0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.05); border-color: rgba(59, 130, 246, 0.2); }
                            50% { box-shadow: 0 0 50px rgba(59, 130, 246, 0.2); border-color: rgba(59, 130, 246, 0.4); }
                        }
                    </style>

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0 pointer-events-none"></div>
<div className="absolute top-1/2 left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent -translate-y-1/2 z-0 pointer-events-none" style={{animation: 'pulseLine 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>

<div className="w-[280px] flex flex-col gap-3 z-10">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide pl-1 mb-2">1. Outdated Methods</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out infinite'}}>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 z-10 shrink-0">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">Scripted Pitches</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Automated and forced</span>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 1.5s infinite'}}>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 z-10 shrink-0">
<iconify-icon icon="solar:volume-loud-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">Self-Centered</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Focusing only on the product</span>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 3s infinite'}}>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 z-10 shrink-0">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-normal text-zinc-200 truncate">Transactional</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Ignoring buyer friction</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative min-w-[320px] z-10 px-4">
<div className="text-xs font-mono text-blue-500 uppercase tracking-wide mb-6 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                            2. Josh Braun Framework
                        </div>
<div className="relative bg-black/90 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 w-full max-w-[340px] z-10" style={{animation: 'pulseGlow 4s ease-in-out infinite'}}>
<div className="absolute -inset-4 bg-gradient-to-b from-blue-500/20 to-transparent opacity-30 blur-2xl pointer-events-none rounded-[3rem] z-[-1]"></div>
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] shrink-0">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xl font-medium text-white tracking-tight truncate">Empathetic Selling</div>
<div className="text-xs text-blue-400 font-mono flex items-center gap-1.5 mt-1.5">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span> Human-focused
                                    </div>
</div>
</div>
<div className="space-y-2.5">
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors hover:bg-zinc-900 hover:border-white/10">
<div className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-white/5 shrink-0">01</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-normal text-zinc-200 truncate">Buyer Perspective</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5 truncate">Understand their world</div>
</div>
<iconify-icon className="text-blue-500 shrink-0" icon="solar:user-speak-linear" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors hover:bg-zinc-900 hover:border-white/10">
<div className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-white/5 shrink-0">02</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-normal text-zinc-200 truncate">Natural Conversations</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5 truncate">Remove sales breath</div>
</div>
<iconify-icon className="text-blue-500 shrink-0" icon="solar:chat-round-line-linear" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors hover:bg-zinc-900 hover:border-white/10">
<div className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs font-mono text-zinc-400 border border-white/5 shrink-0">03</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-normal text-zinc-200 truncate">Build Trust</div>
<div className="text-xs text-zinc-500 font-mono mt-0.5 truncate">Authentic relationships</div>
</div>
<iconify-icon className="text-blue-500 shrink-0" icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-[280px] flex flex-col gap-3 z-10">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide text-right pr-1 mb-2">3. Better Outcomes</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 0.5s infinite'}}>
<div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex flex-col text-right flex-1 min-w-0 z-10">
<span className="text-sm font-normal text-zinc-200 truncate">Higher Responses</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Prospects actually reply</span>
</div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-400 z-10 shrink-0">
<iconify-icon icon="solar:letter-opened-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 2s infinite'}}>
<div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex flex-col text-right flex-1 min-w-0 z-10">
<span className="text-sm font-normal text-zinc-200 truncate">Deeper Trust</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Eliminate friction</span>
</div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-400 z-10 shrink-0">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 shadow-lg relative group transition-all hover:border-white/10" style={{animation: 'floatGentle 6s ease-in-out 3.5s infinite'}}>
<div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<div className="flex flex-col text-right flex-1 min-w-0 z-10">
<span className="text-sm font-normal text-zinc-200 truncate">Authentic Relationships</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Sales without the push</span>
</div>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-400 z-10 shrink-0">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-mono text-zinc-500 uppercase tracking-wide mb-8">Sales professionals learning empathetic selling from Josh Braun</p>
<div className="flex items-center justify-center p-8 rounded-2xl bg-zinc-900/30 border border-white/5 max-w-4xl mx-auto h-32">
<span className="text-zinc-500 font-mono text-sm tracking-widest">IMAGE PLACEHOLDER: Logos</span>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#020202] relative z-20" id="pain-points">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
                    Why Most Sales Outreach <br className="hidden md:block"/>Gets Ignored
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 text-left">

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-5">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Messages feel scripted</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Prospects can immediately tell when a message sounds automated or forced.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-5">
<iconify-icon icon="solar:volume-loud-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Salespeople focus on pitching</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Instead of understanding the buyer’s perspective and their unique challenges.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-5">
<iconify-icon icon="solar:shield-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Trust is missing</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Buyers hesitate when outreach feels purely transactional and one-sided.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-5">
<iconify-icon icon="solar:sad-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Outreach feels uncomfortable</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Many salespeople dislike sending messages that feel overly pushy.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-y border-white/5 relative" id="why-josh">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Why Sales Professionals Learn From Josh Braun</h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto">Mastering communication techniques that remove friction and naturally align with how people buy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:heart-angle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Empathetic selling approach</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Helping salespeople understand the buyer’s perspective. Enter the conversation already happening in their mind instead of forcing your own narrative.</p>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Human-centered outreach</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Teaching conversations that feel natural. No fake enthusiasm or robotic scripts.</p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Practical sales communication</h3>
<p className="text-zinc-400 text-base leading-relaxed">Strategies designed for real conversations, tested by real sales professionals.</p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center overflow-hidden gap-4">
<div className="relative z-10 max-w-md">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Focus on trust</h3>
<p className="text-zinc-400 text-base leading-relaxed">Helping sellers build authentic relationships with prospects. People buy when they feel understood, not when they feel pressured.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="aspect-[21/9] w-full bg-zinc-900/30 rounded-3xl border border-white/10 flex flex-col items-center justify-center mb-10 shadow-2xl">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:gallery-wide-linear" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">IMAGE PLACEHOLDER</span>
<span className="text-zinc-400 mt-2 text-sm">Sales professionals applying Josh Braun’s outreach insights</span>
</div>
<p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto font-light">
                    Sales professionals follow Josh Braun’s insights to improve their outreach conversations and build stronger relationships with prospects.
                 </p>
</div>
</section>

<section className="py-32 bg-black border-b border-white/5" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How Sales Professionals Improve Outreach
                    </h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A clear, human-focused process that bridges the gap between sellers and buyers.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:user-speak-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 1</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Understand the Buyer Perspective</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                            Recognize how prospects experience sales outreach. Stop focusing on what you want to sell, and start focusing on the problems they are trying to solve.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 2</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Improve Sales Conversations</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                            Learn how to communicate without sounding scripted. Remove the sales breath, lower the pressure, and have conversations that invite honest dialogue.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#000] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Step 3</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Build Trust With Prospects</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                            Create outreach that feels authentic and human. Foster relationships that lead to sustainable pipelines, not just immediate (and rare) transactions.
                        </p>
</div>
</div>

<div className="mt-16 flex justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-500 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20" href="#booking">
                        Improve My Outreach
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5 relative" id="included">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">What's Included</h2>
<p className="text-zinc-400 text-base">Comprehensive training and coaching programs designed for modern sales teams.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-4 hover:border-white/20 transition-colors">
<iconify-icon className="text-blue-500" icon="solar:presentation-chart-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white">Sales Communication Training</h3>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-4 hover:border-white/20 transition-colors">
<iconify-icon className="text-blue-500" icon="solar:diagram-down-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white">Empathetic Selling Frameworks</h3>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-4 hover:border-white/20 transition-colors">
<iconify-icon className="text-blue-500" icon="solar:lightbulb-bolt-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white">Outreach Strategy Coaching</h3>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-4 hover:border-white/20 transition-colors md:col-span-2 lg:col-span-1 lg:col-start-2">
<iconify-icon className="text-blue-500" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white">Sales Conversation Workshops</h3>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-4 hover:border-white/20 transition-colors lg:col-start-3">
<iconify-icon className="text-blue-500" icon="solar:medal-star-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white">Sales Coaching Programs</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="aspect-square rounded-3xl bg-zinc-900/30 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:user-circle-bold-duotone" width="64"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">IMAGE PLACEHOLDER</span>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-8">Hi, I'm Josh Braun.</h2>
<div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
<p>
                                I help sales professionals improve outreach by focusing on empathy, trust, and authentic conversations.
                            </p>
<p>
                                My goal is to help sellers communicate in a way that feels natural for both them and their prospects. No gimmicks, no pressure—just honest dialogue that builds trust from the very first touchpoint.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="grid grid-cols-1 gap-4">

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-3">
<h3 className="text-lg font-medium text-white tracking-tight">Who is this designed for?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sales professionals who want to improve outreach conversations.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-3">
<h3 className="text-lg font-medium text-white tracking-tight">Is this sales training or coaching?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Both — combining practical training with coaching.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-3">
<h3 className="text-lg font-medium text-white tracking-tight">Does this help experienced salespeople?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Yes. The focus is improving communication and trust, regardless of experience level.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-3">
<h3 className="text-lg font-medium text-white tracking-tight">What makes this approach different?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">The focus is on empathetic selling and human-centered outreach, avoiding traditional high-pressure tactics.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col gap-3">
<h3 className="text-lg font-medium text-white tracking-tight">How do we get started?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Book a strategy call to explore how we can improve your outreach.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Improve Your <br/> Sales Conversations
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a conversation with Josh Braun to explore how empathetic selling can improve your outreach and sales conversations.
                        </p>
<div className="flex items-center gap-3 mt-4">

<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-500 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 shadow-lg shadow-blue-500/20" href="#">
                                Book My Call
                                <iconify-icon className="transition-transform group-hover:scale-110" icon="solar:calendar-date-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 mt-8 lg:mt-0">
<div className="cal-inline-container flex items-center justify-center" id="my-cal-inline-15min" style={{width: '100%', height: '100%', overflow: 'scroll'}}>
<span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">CALENDLY PLACEHOLDER</span>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-12 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<a className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg group" href="/">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:user-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
                    Josh Braun
                </a>
<div className="text-zinc-600 text-xs text-center md:text-left">
                    © 2024 Josh Braun. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
