import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // 1. Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // 2. Spotlight Effect
        const spotlightGroups = document.querySelectorAll('.spotlight-group');
        spotlightGroups.forEach(group => {
            group.addEventListener('mousemove', (e) => {
                // Update CSS variables for all cards in the group
                group.querySelectorAll('.spotlight-card, .spotlight-border').forEach(card => {
                    const cardRect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${e.clientX - cardRect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - cardRect.top}px`);
                });
            });
        });

        // 3. Carousel Logic
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        
        function showItem(index) {
            items.forEach(item => item.classList.remove('active'));
            if (index >= items.length) currentIndex = 0;
            if (index < 0) currentIndex = items.length - 1;
            items[currentIndex].classList.add('active');
        }

        document.getElementById('nextBtn')?.addEventListener('click', () => {
            currentIndex++;
            showItem(currentIndex);
        });

        document.getElementById('prevBtn')?.addEventListener('click', () => {
            currentIndex--;
            showItem(currentIndex);
        });

        // Auto rotate
        setInterval(() => {
            currentIndex++;
            showItem(currentIndex);
        }, 6000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay"></div>
<div className="bg-glow"></div>
<div className="waveform-grid"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-white/10 shadow-inner">
<div className="w-1 h-3 bg-cyan-500 rounded-full mx-[1px]"></div>
<div className="w-1 h-4 bg-zinc-500 rounded-full mx-[1px]"></div>
<div className="w-1 h-2 bg-zinc-600 rounded-full mx-[1px]"></div>
</div>
<span className="font-serif-display text-2xl tracking-tight text-white italic pt-1">Dialogue</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-mono-code text-zinc-400 uppercase tracking-widest">
<a className="hover:text-cyan-400 transition-colors" href="#features">Features</a>
<a className="hover:text-cyan-400 transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-cyan-400 transition-colors" href="#pricing">Studio</a>
</div>
<a className="relative group" href="#download">
<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-[20px] blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
<button className="cta-button group relative inline-flex items-center justify-center overflow-hidden rounded-[20px] px-4 py-2 text-xs font-mono-code font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-95" style={{background: 'radial-gradient(65.28% 65.28% at 50% 100%, rgba(34, 211, 238, 0.8) 0%, rgba(34, 211, 238, 0) 100%), linear-gradient(0deg, #09090b, #09090b)', border: '1px solid rgba(255,255,255,0.1)'}}>
<style>
        @keyframes floating-points {
            0% { transform: translateY(0); }
            85% { opacity: 0; }
            100% { transform: translateY(-30px); opacity: 0; }
        }
        .cta-button .point {
            position: absolute;
            bottom: -2px;
            width: 1px;
            height: 1px;
            background-color: #22d3ee;
            border-radius: 9999px;
            animation: floating-points infinite ease-in-out;
            pointer-events: none;
            opacity: 0;
            box-shadow: 0 0 4px #22d3ee;
        }
        .cta-button:hover .icon-arrow { transform: translateX(2px); }
        .cta-button:hover .icon-arrow path { animation: dash 0.8s linear forwards; }
        @keyframes dash {
            0% { stroke-dasharray: 0, 20; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 10, 10; stroke-dashoffset: -5; }
            100% { stroke-dasharray: 20, 0; stroke-dashoffset: -10; }
        }
    </style>
<div className="absolute inset-0 pointer-events-none">
<i className="point" style={{left: '10%', opacity: '1', animationDuration: '2.35s', animationDelay: '0.2s'}}></i>
<i className="point" style={{left: '30%', opacity: '0.7', animationDuration: '2.5s', animationDelay: '0.5s'}}></i>
<i className="point" style={{left: '25%', opacity: '0.8', animationDuration: '2.2s', animationDelay: '0.1s'}}></i>
<i className="point" style={{left: '44%', opacity: '0.6', animationDuration: '2.05s'}}></i>
<i className="point" style={{left: '50%', opacity: '1', animationDuration: '1.9s'}}></i>
<i className="point" style={{left: '75%', opacity: '0.5', animationDuration: '1.5s', animationDelay: '1.5s'}}></i>
<i className="point" style={{left: '88%', opacity: '0.9', animationDuration: '2.2s', animationDelay: '0.2s'}}></i>
<i className="point" style={{left: '58%', opacity: '0.8', animationDuration: '2.25s', animationDelay: '0.2s'}}></i>
<i className="point" style={{left: '98%', opacity: '0.6', animationDuration: '2.6s', animationDelay: '0.1s'}}></i>
<i className="point" style={{left: '65%', opacity: '1', animationDuration: '2.5s', animationDelay: '0.2s'}}></i>
</div>
<span className="relative z-10 flex items-center gap-2">
        Get Early Access
        <svg className="icon-arrow w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>

<div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
</button>
</a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
<div className="relative w-full max-w-5xl h-full opacity-60">
<div className="absolute top-10 -left-10 md:top-1/4 md:left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] md:blur-[120px] animate-blob"></div>
<div className="absolute top-20 right-0 md:top-1/3 md:right-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-600/15 rounded-full mix-blend-screen filter blur-[100px] md:blur-[120px] animate-blob animation-delay-2000"></div>
<div className="absolute bottom-10 left-20 md:bottom-1/4 md:left-1/3 w-72 h-72 md:w-96 md:h-96 bg-indigo-600/15 rounded-full mix-blend-screen filter blur-[100px] md:blur-[120px] animate-blob animation-delay-4000"></div>
</div>
</div>
<div className="max-w-5xl mx-auto text-center z-10 relative">

<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-400 text-[10px] font-mono-code tracking-widest uppercase mb-8 active backdrop-blur-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
                v2.4 (Beta) Now Live
            </div>

<h1 className="reveal md:text-8xl lg:text-9xl leading-[0.9] active text-6xl text-zinc-100 tracking-tight font-serif-display mb-8 drop-shadow-2xl">
                Seamless thought <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 italic pr-2">capture.</span>
</h1>

<p className="reveal font-mono-code text-xs md:text-sm leading-7 text-zinc-400 max-w-2xl mx-auto mb-12 active">
                Write code <span className="text-cyan-400 border-b border-cyan-900 pb-0.5">4x faster</span> using context-aware voice commands.
                Designed for the creative mind that speaks faster than it types.
            </p>

<div className="reveal flex flex-col md:flex-row items-center justify-center gap-4 active">
<a className="border-beam-btn w-full md:w-auto px-8 py-3.5 rounded-[20px] text-white hover:scale-[1.02] transition-transform" href="#download">
<span className="relative z-10 flex items-center justify-center gap-2 font-mono-code text-xs font-bold tracking-wide uppercase">
                        Download for macOS <svg aria-hidden="true" className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</span>
</a>
<button className="uppercase hover:bg-white/10 transition flex md:w-auto text-xs text-zinc-300 tracking-wide font-mono-code bg-white/5 w-full border-white/5 border rounded-[20px] pt-3.5 pr-8 pb-3.5 pl-8 relative backdrop-blur-sm gap-x-2 gap-y-2 items-center justify-center" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}>
<svg aria-hidden="true" className="lucide lucide-play-circle w-4 h-4 text-cyan-500" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg> See it in action
                </button>
</div>
</div>

<div className="reveal mt-20 max-w-5xl mx-auto relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900/50 backdrop-blur-sm shadow-2xl shadow-cyan-900/10 group active">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

<div className="aspect-[2/1] md:aspect-[21/9] flex md:p-12 w-full pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">

<div className="relative z-30 bg-zinc-200 w-full max-w-[500px] aspect-[2/1] rounded-[2rem] p-4 md:p-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),inset_0_-4px_10px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,1)] flex gap-4 md:gap-8 ring-1 ring-white/10 overflow-hidden transform group-hover:scale-[1.02] transition duration-700 ease-out">

<div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-multiply pointer-events-none"></div>

<div className="flex-1 h-full relative flex items-center justify-center pl-1">
<div className="w-full h-[85%] speaker-grid opacity-80 rounded-xl"></div>
</div>

<div className="w-[45%] h-full bg-[#09090b] rounded-xl relative overflow-hidden flex flex-col justify-between p-3 border-[2px] border-[#d4d4d8] shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]">

<div className="absolute -top-[100%] -right-[100%] w-[200%] h-[200%] bg-gradient-to-bl from-white/10 via-transparent to-transparent pointer-events-none z-20 transform rotate-12"></div>

<div className="flex justify-between items-center opacity-60 relative z-20">
<div className="flex gap-1">
<div className="w-0.5 h-0.5 rounded-full bg-cyan-500"></div>
<div className="w-0.5 h-0.5 rounded-full bg-cyan-500"></div>
</div>
<div className="text-[6px] font-mono-code text-cyan-500 animate-pulse">REC</div>
</div>

<div className="absolute inset-x-0 bottom-0 h-3/4 z-10 flex items-end opacity-90">
<div className="w-full h-full waveform-pattern opacity-80 mix-blend-screen"></div>
<div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-cyan-900/10 to-transparent"></div>
</div>

<div className="relative z-20 mt-auto self-start">
<div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded px-2 py-1">
<div className="w-2 h-2 text-cyan-300">
<svg fill="currentColor" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-[6px] font-mono-code font-medium text-white tracking-widest uppercase">Processing</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-8 z-20 flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<p className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-widest">System Active</p>
</div>
</div>
</header>

<section className="py-24 px-6 relative" id="workflow">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="reveal font-serif-display text-4xl md:text-5xl text-zinc-100 mb-4">The Friction of Thought</h2>
<p className="reveal font-mono-code text-sm text-zinc-400 leading-relaxed">
                        Traditional typing is a bottleneck. Dialogue removes the mechanical latency between your brain and your IDE.
                    </p>
</div>
<div className="reveal flex gap-2">
<button className="p-3 rounded-[20px] border border-zinc-800 hover:bg-zinc-800 text-zinc-400 transition" id="prevBtn"><svg aria-hidden="true" className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-3 rounded-[20px] border border-zinc-800 hover:bg-zinc-800 text-zinc-400 transition" id="nextBtn"><svg aria-hidden="true" className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>

<div className="spotlight-group relative min-h-[400px]" id="cardCarousel">

<div className="carousel-item w-full">
<div className="grid md:grid-cols-3 gap-6">
<div className="spotlight-card p-8 rounded-xl border border-white/5 h-full flex flex-col justify-between group bg-zinc-900/40">
<div className="spotlight-border"></div>
<div>
<div className="w-10 h-10 rounded border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
<svg aria-hidden="true" className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="font-serif-display text-2xl text-zinc-200 mb-3">Velocity</h3>
<p className="font-mono-code text-xs text-zinc-500 leading-6">Avg speaking speed: 150wpm. Avg typing speed: 40wpm. Do the math.</p>
</div>
</div>
<div className="spotlight-card p-8 rounded-xl border border-white/5 h-full flex flex-col justify-between group bg-zinc-900/40">
<div className="spotlight-border"></div>
<div>
<div className="w-10 h-10 rounded border border-purple-500/20 bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
<svg aria-hidden="true" className="lucide lucide-brain-circuit w-5 h-5" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="font-serif-display text-2xl text-zinc-200 mb-3">Context Aware</h3>
<p className="font-mono-code text-xs text-zinc-500 leading-6">Dialogue reads your open files. It knows your variable names before you say them.</p>
</div>
</div>
<div className="spotlight-card p-8 rounded-xl border border-white/5 h-full flex flex-col justify-between group bg-zinc-900/40">
<div className="spotlight-border"></div>
<div>
<div className="w-10 h-10 rounded border border-pink-500/20 bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400">
<svg aria-hidden="true" className="lucide lucide-code w-5 h-5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="font-serif-display text-2xl text-zinc-200 mb-3">Syntax Perfect</h3>
<p className="font-mono-code text-xs text-zinc-500 leading-6">Say "function user auth", get a fully typed async function skeleton.</p>
</div>
</div>
</div>
</div>

<div className="carousel-item w-full">
<div className="grid md:grid-cols-2 gap-6 h-full">
<div className="spotlight-card p-10 rounded-xl border border-white/5 h-full bg-zinc-900/40">
<div className="spotlight-border"></div>
<h3 className="text-red-400 font-mono-code text-[10px] tracking-widest uppercase mb-2">The Old Way</h3>
<h4 className="font-serif-display text-3xl text-zinc-200 mb-4">RSI &amp; Burnout</h4>
<p className="font-mono-code text-xs text-zinc-500 leading-6">Physical strain limits your output. Your hands give up before your mind does.</p>
</div>
<div className="spotlight-card p-10 rounded-xl border border-cyan-500/20 h-full bg-cyan-950/10">
<div className="spotlight-border"></div>
<h3 className="text-cyan-400 font-mono-code text-[10px] tracking-widest uppercase mb-2">The Dialogue Way</h3>
<h4 className="font-serif-display text-3xl text-zinc-200 mb-4">Infinite Flow</h4>
<p className="font-mono-code text-xs text-zinc-400 leading-6">Dictate documentation, comments, and boilerplate while walking around the room.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0c0c0e]" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal font-serif-display text-4xl md:text-5xl text-zinc-100 mb-4">The Complete Stack</h2>
<p className="reveal font-mono-code text-xs text-zinc-500">Local-first. Low latency. High accuracy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="reveal flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-mic text-zinc-400 w-4 h-4 group-hover:text-cyan-400 transition-colors" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<div>
<h4 className="font-mono-code text-sm font-bold text-zinc-200 mb-2">Whisper Model</h4>
<p className="font-mono-code text-xs text-zinc-500 leading-relaxed">Built on OpenAI's Whisper, finetuned for technical jargon and camelCase.</p>
</div>
</div>

<div className="reveal flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-purple-500/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-globe text-zinc-400 w-4 h-4 group-hover:text-purple-400 transition-colors" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div>
<h4 className="font-mono-code text-sm font-bold text-zinc-200 mb-2">50+ Languages</h4>
<p className="font-mono-code text-xs text-zinc-500 leading-relaxed">Real-time translation and native dictation support for global teams.</p>
</div>
</div>

<div className="reveal flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-green-500/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-shield text-zinc-400 w-4 h-4 group-hover:text-green-400 transition-colors" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<h4 className="font-mono-code text-sm font-bold text-zinc-200 mb-2">Local Processing</h4>
<p className="font-mono-code text-xs text-zinc-500 leading-relaxed">Your voice data never leaves your machine. Air-gapped ready.</p>
</div>
</div>

<div className="reveal flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-command text-zinc-400 w-4 h-4 group-hover:text-orange-400 transition-colors" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
</div>
<div>
<h4 className="font-mono-code text-sm font-bold text-zinc-200 mb-2">Voice Macros</h4>
<p className="font-mono-code text-xs text-zinc-500 leading-relaxed">Map phrases like "deploy prod" to complex terminal commands.</p>
</div>
</div>

<div className="reveal flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-box text-zinc-400 w-4 h-4 group-hover:text-blue-400 transition-colors" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<div>
<h4 className="font-mono-code text-sm font-bold text-zinc-200 mb-2">IDE Plugins</h4>
<p className="font-mono-code text-xs text-zinc-500 leading-relaxed">Deep integration with VS Code, JetBrains, and Xcode.</p>
</div>
</div>

<div className="reveal flex gap-5 group">
<div className="flex-shrink-0 w-10 h-10 rounded bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-pink-500/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-wand text-zinc-400 w-4 h-4 group-hover:text-pink-400 transition-colors" data-lucide="wand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9h.01"></path><path d="M17.8 6.2 19 5"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>
</div>
<div>
<h4 className="font-mono-code text-sm font-bold text-zinc-200 mb-2">Auto-Format</h4>
<p className="font-mono-code text-xs text-zinc-500 leading-relaxed">Automatic punctuation, casing, and indentation correction.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative overflow-hidden bg-zinc-950">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<h2 className="reveal font-mono-code text-[10px] tracking-[0.3em] uppercase text-cyan-500 mb-3">Metrics</h2>
<h3 className="reveal font-serif-display text-3xl md:text-5xl text-zinc-100 mb-12">By the numbers</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="reveal p-6 border-l border-zinc-800 text-left">
<div className="font-serif-display text-4xl text-zinc-100 mb-1">2.4M</div>
<div className="font-mono-code text-[10px] uppercase tracking-widest text-zinc-500">Lines Dictated</div>
</div>
<div className="reveal p-6 border-l border-zinc-800 text-left">
<div className="font-serif-display text-4xl text-zinc-100 mb-1">99.2%</div>
<div className="font-mono-code text-[10px] uppercase tracking-widest text-zinc-500">Accuracy</div>
</div>
<div className="reveal p-6 border-l border-zinc-800 text-left">
<div className="font-serif-display text-4xl text-zinc-100 mb-1">0.1s</div>
<div className="font-mono-code text-[10px] uppercase tracking-widest text-zinc-500">Latency</div>
</div>
<div className="reveal p-6 border-l border-zinc-800 text-left">
<div className="font-serif-display text-4xl text-zinc-100 mb-1">12k+</div>
<div className="font-mono-code text-[10px] uppercase tracking-widest text-zinc-500">Daily Users</div>
</div>
</div>

<div className="reveal relative h-24 md:h-32 overflow-hidden rounded-lg w-full border-y border-white/5 bg-black/50">
<div className="absolute inset-0 flex items-center animate-[scroll_20s_linear_infinite] w-[200%] gap-12 opacity-50">
<span className="font-mono-code text-xs text-zinc-600">const handleVoice = async (audio) =&gt; { return await process(audio) }</span>
<span className="font-mono-code text-xs text-cyan-900/60">git commit -m "refactor: updated voice engine params"</span>
<span className="font-mono-code text-xs text-zinc-600">import { Transcriber } from '@dialogue/core'</span>
<span className="font-mono-code text-xs text-purple-900/60">def optimize_neural_net(layers, activation): pass</span>
<span className="font-mono-code text-xs text-zinc-600">rustc main.rs --release --target wasm32-unknown-unknown</span>

<span className="font-mono-code text-xs text-zinc-600">const handleVoice = async (audio) =&gt; { return await process(audio) }</span>
<span className="font-mono-code text-xs text-cyan-900/60">git commit -m "refactor: updated voice engine params"</span>
<span className="font-mono-code text-xs text-zinc-600">import { Transcriber } from '@dialogue/core'</span>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 pointer-events-none"></div>
</div>
<style>
                @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            </style>
</div>
</section>

<section className="py-24 px-6 bg-[#08080a]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="reveal font-serif-display text-4xl md:text-6xl text-zinc-100 mb-4">Extensions</h2>
<p className="reveal font-mono-code text-xs text-zinc-400">Where you write, Dialogue listens.</p>
</div>
<button className="reveal mt-6 md:mt-0 px-6 py-3 rounded-[20px] text-xs font-mono-code border border-white/10 hover:bg-white/5 text-zinc-300 transition flex items-center gap-2">
                    View Integration Docs <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="reveal group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 aspect-[4/3]">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition duration-700 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-[#1e1e1e] rounded border border-zinc-700 p-4 shadow-2xl flex flex-col gap-2 opacity-80">
<div className="flex gap-1.5 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="h-1.5 w-1/3 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-1/2 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-3/4 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-2/3 bg-cyan-900/50 rounded-full animate-pulse mt-2"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<h3 className="font-serif-display text-3xl text-zinc-100 mb-2">VS Code</h3>
<p className="font-mono-code text-xs text-zinc-400 mb-4">First-class citizen. Command palette control and inline suggestions.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded border border-white/10 text-[10px] font-mono-code text-zinc-300 uppercase">Popular</span>
</div>
</div>
</div>

<div className="reveal group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 aspect-[4/3]">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition duration-700 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-[#18181b] rounded border border-zinc-700 p-4 shadow-2xl flex flex-col gap-3 opacity-80">
<div className="flex justify-between mb-2">
<div className="h-6 w-6 rounded bg-zinc-800"></div>
</div>
<div className="h-2 w-full bg-zinc-800 rounded"></div>
<div className="h-2 w-full bg-zinc-800 rounded"></div>
<div className="h-2 w-5/6 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<h3 className="font-serif-display text-3xl text-zinc-100 mb-2">Obsidian</h3>
<p className="font-mono-code text-xs text-zinc-400 mb-4">Dictate your second brain. Automatic linking and tagging support.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded border border-white/10 text-[10px] font-mono-code text-zinc-300 uppercase">Beta</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="download">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="reveal font-serif-display text-5xl md:text-6xl text-zinc-100 mb-6">Install Dialogue</h2>
<div className="reveal inline-flex items-center gap-4 text-xs font-mono-code text-zinc-400">
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-cyan-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Free Trial</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-cyan-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cancel anytime</span>
</div>
</div>
<div className="reveal text-center">
<div className="p-8 md:p-12 border border-zinc-800 bg-zinc-900/50 backdrop-blur rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none rounded-2xl">
<div className="absolute inset-0 bg-noise opacity-[0.05] rounded-2xl"></div>
<div className="absolute inset-0 rounded-2xl" style={{padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}>
<div className="absolute -inset-[150%] animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 75%, #22d3ee 100%)'}}></div>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
<h3 className="font-serif-display text-3xl text-zinc-200 mb-4">Start speaking your mind</h3>
<p className="font-mono-code text-xs text-zinc-500 mb-8 max-w-lg mx-auto leading-relaxed">
                        Join thousands of developers who have ditched the keyboard for first drafts.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<button className="border-beam-btn px-8 py-4 rounded-[20px] text-zinc-900 font-bold font-mono-code text-xs uppercase bg-white hover:scale-105 transition shadow-lg shadow-cyan-900/20">
                            Download Now
                        </button>
<button className="px-8 py-4 rounded-[20px] text-zinc-300 font-mono-code text-xs uppercase border border-white/10 hover:bg-white/5 transition">
                            View Pricing
                        </button>
</div>
<div className="mt-8 flex justify-center gap-6 text-[10px] font-mono-code text-zinc-600 uppercase tracking-widest">
<span>macOS 12+</span>
<span>Windows 11</span>
<span>Linux</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/5 bg-[#050505] text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<div className="flex items-center gap-2 justify-center md:justify-start mb-4">
<div className="w-4 h-4 bg-gradient-to-tr from-cyan-600 to-zinc-600 rounded-full"></div>
<span className="font-serif-display text-lg text-zinc-200 tracking-tight italic">Dialogue</span>
</div>
<p className="font-mono-code text-[10px] text-zinc-600 uppercase tracking-widest">© 2024 Dialogue Labs Inc.</p>
</div>
<div className="flex gap-8 text-[10px] font-mono-code uppercase tracking-widest text-zinc-500">
<a className="hover:text-zinc-300 transition" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition" href="#">Terms</a>
<a className="hover:text-zinc-300 transition" href="#">Twitter</a>
</div>
</div>
</footer>



    </>
  );
}
