import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        gsap.registerPlugin(ScrollTrigger);

        // --- 1. Prism ---
        gsap.timeline()
            .from(".prism-card", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" })
            .from(".title-anim", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
            .to(".fade-in-up", { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.5");
        
        gsap.to(".gradient-blob", { x: "random(-100, 100)", y: "random(-100, 100)", duration: "random(10, 20)", repeat: -1, yoyo: true, ease: "sine.inOut" });

        // --- 2. Swiss ---
        gsap.timeline({ scrollTrigger: { trigger: "#swiss", start: "top 60%" } })
            .from(".swiss-title", { y: 100, opacity: 0, duration: 1, ease: "power3.out" })
            .to(".swiss-panel", { y: 0, opacity: 1, duration: 0.8 });

        // --- 3. Terminal ---
        gsap.timeline({ scrollTrigger: { trigger: "#terminal", start: "top 60%" } })
            .to(".terminal-box", { opacity: 1, duration: 0.5 });

        // --- 4. Aurora ---
        gsap.timeline({ scrollTrigger: { trigger: "#aurora", start: "top 60%" } })
            .to(".aurora-title", { scale: 1, opacity: 1, duration: 1.5, ease: "power4.out" })
            .to(".aurora-desc", { opacity: 1, duration: 1 }, "-=1");

        // --- 5. Bento (New) ---
        gsap.timeline({ scrollTrigger: { trigger: "#bento", start: "top 70%" } })
            .to(".bento-card", { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" });

        // --- 6. Marquee (New) ---
        // Animation handled by CSS keyframes, subtle parallax on scroll
        gsap.to(".marquee-content", { scrollTrigger: { trigger: "#marquee", scrub: 1 }, xPercent: -10 });

        // --- 7. Void (New) ---
        gsap.timeline({ scrollTrigger: { trigger: "#void", start: "top 60%" } })
            .from(".void-text", { clipPath: "inset(0 100% 0 0)", duration: 1.2, ease: "power4.inOut" });

        // --- 8. Mesh (New) ---
        gsap.timeline({ scrollTrigger: { trigger: "#mesh", start: "top 60%" } })
            .to(".mesh-element", { y: 0, scale: 1, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" });

        // --- 9. Command (New) ---
        gsap.timeline({ scrollTrigger: { trigger: "#command", start: "top 60%" } })
            .to(".cmd-palette", { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });

        // --- 10. Eclipse (New) ---
        const spotlight = document.getElementById('spotlight');
        const eclipseSection = document.getElementById('eclipse');
        eclipseSection.addEventListener('mousemove', (e) => {
            const rect = eclipseSection.getBoundingClientRect();
            spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="concept-section relative h-screen w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden text-white" id="prism">
<div className="noise-bg"></div>
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="gradient-blob bg-indigo-600 w-[40vw] h-[40vw] top-[-10%] left-[-10%]" data-speed="0.5"></div>
<div className="gradient-blob bg-purple-600 w-[35vw] h-[35vw] bottom-[10%] right-[-5%]" data-speed="0.8"></div>
</div>
<div className="prism-card relative z-10 glass-dark rounded-3xl p-12 md:p-20 max-w-4xl w-[90%] text-center border-slate-800">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase mb-8 text-indigo-200">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span> Beta Access
            </div>
<h1 className="text-5xl md:text-8xl font-grotesk tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8 leading-[0.9] title-anim">
                Redefining the<br/>Digital Standard.
            </h1>
<form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto mt-12 fade-in-up opacity-0">
<input className="w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500/50 transition-all font-light text-sm" placeholder="Email address" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors text-sm whitespace-nowrap">Notify Me</button>
</form>
</div>
</section>

<section className="concept-section relative min-h-screen w-full bg-[#F3F3F3] text-black flex flex-col md:flex-row overflow-hidden" id="swiss">
<div className="absolute inset-0 grid grid-cols-[repeat(12,minmax(0,1fr))] pointer-events-none z-0 opacity-10">
<div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div><div className="border-l border-black h-full"></div>
</div>
<div className="w-full md:w-1/2 p-12 flex flex-col justify-between z-10 border-r border-black/5">
<span className="tracking-tight font-semibold text-lg">NEUE.</span>
<h1 className="text-7xl md:text-9xl tracking-tighter font-semibold leading-[0.85] text-black mix-blend-multiply swiss-title">
                Pure<br/>Form<br/><span className="text-zinc-400">Function.</span>
</h1>
<div className="flex items-center gap-2 text-sm font-medium tracking-tight"><span className="w-2 h-2 bg-green-500 rounded-full"></span> System Online Soon</div>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center p-12 relative">
<div className="space-y-6 max-w-md swiss-panel opacity-0 translate-y-10">
<span className="text-xs font-bold uppercase tracking-widest text-black">Join Waitlist</span>
<div className="flex items-center border-b border-black/20 pb-4"><input className="bg-transparent w-full outline-none text-2xl font-light placeholder-zinc-300 text-black" placeholder="Email address" type="email"/><iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon></div>
</div>
</div>
</section>

<section className="concept-section relative min-h-screen w-full bg-[#050505] text-[#D4D4D4] font-mono-custom flex flex-col items-center justify-center p-6" id="terminal">
<div className="cyber-grid absolute inset-0 opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-[20%] animate-[scan_4s_linear_infinite] pointer-events-none"></div>
<div className="z-10 w-full max-w-4xl border border-white/10 bg-black/80 backdrop-blur-md p-1 rounded-lg terminal-box opacity-0">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5"><div className="w-3 h-3 rounded-full bg-red-500/50"></div><div className="w-3 h-3 rounded-full bg-yellow-500/50"></div><div className="w-3 h-3 rounded-full bg-emerald-500/50"></div></div>
<div className="p-12 space-y-8">
<p className="text-emerald-500 text-sm flex items-center gap-2"><iconify-icon icon="solar:code-square-linear"></iconify-icon> root@system:~/project_x $ <span className="text-white">init_sequence.sh</span><span className="cursor-blink bg-emerald-500 w-2 h-4 inline-block ml-1"></span></p>
<h1 className="text-4xl md:text-6xl text-white/90 leading-tight">Constructing the<br/>Infrastructure.</h1>
<div className="flex gap-0 border border-white/20 rounded overflow-hidden max-w-lg"><div className="bg-white/5 px-4 py-3 border-r border-white/10"><iconify-icon className="text-emerald-500" icon="solar:terminal-linear"></iconify-icon></div><input className="bg-transparent border-none outline-none text-white w-full px-4 focus:bg-white/5 transition-colors" placeholder="Enter access_key" type="text"/><button className="px-6 bg-white text-black text-xs uppercase font-bold hover:bg-emerald-400">Run</button></div>
</div>
</div>
</section>

<section className="concept-section relative min-h-screen w-full bg-black text-white flex flex-col justify-end p-12 overflow-hidden" id="aurora">
<div className="absolute inset-0 pointer-events-none"><div className="absolute bottom-[-50%] left-[-20%] w-[80vw] h-[80vw] bg-teal-900/40 blur-[100px] rounded-full mix-blend-screen aurora-beam"></div><div className="absolute bottom-[-50%] right-[-20%] w-[80vw] h-[80vw] bg-emerald-900/40 blur-[100px] rounded-full mix-blend-screen aurora-beam"></div></div>
<main className="relative z-10 text-center max-w-5xl mx-auto mb-20">
<h1 className="text-6xl md:text-[8rem] font-semibold tracking-tighter leading-[0.8] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 aurora-title opacity-0 scale-90">Peak<br/>Performance</h1>
<p className="text-emerald-100/60 text-xl font-light mt-8 aurora-desc opacity-0">Software designed for the top 1%.</p>
</main>
</section>

<section className="concept-section relative min-h-screen w-full bg-[#080808] text-white flex items-center justify-center p-4 md:p-12 font-inter overflow-hidden" id="bento">
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 w-full max-w-6xl h-[80vh]">

<div className="md:col-span-2 md:row-span-2 bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:border-white/10 transition-colors group relative overflow-hidden bento-card opacity-0 translate-y-10">
<div className="absolute top-0 right-0 p-[20%] bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-blue-500/30 transition-all"></div>
<div><iconify-icon className="text-white/80 mb-6" icon="solar:layers-minimalistic-linear" width="40"></iconify-icon></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight">Everything is<br/>Connected.</h2>
</div>

<div className="md:col-span-1 md:row-span-1 bg-neutral-900/50 border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center hover:border-white/10 transition-colors bento-card opacity-0 translate-y-10">
<span className="text-4xl font-mono-custom mb-1">14</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Days Left</span>
</div>

<div className="md:col-span-1 md:row-span-2 bg-white text-black rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden bento-card opacity-0 translate-y-10">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="z-10"><h3 className="text-2xl font-bold tracking-tight leading-none mb-2">Early<br/>Access</h3><p className="text-xs text-neutral-500">Limited spots available.</p></div>
<div className="z-10 relative"><input className="w-full bg-transparent border-b border-black/20 py-2 text-sm outline-none placeholder-neutral-500" placeholder="Email" type="email"/><button className="absolute right-0 bottom-2"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button></div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-neutral-900/50 border border-white/5 rounded-3xl p-6 flex items-center gap-4 hover:border-white/10 transition-colors bento-card opacity-0 translate-y-10">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><iconify-icon className="text-white" icon="solar:graph-up-linear"></iconify-icon></div>
<div><span className="block text-sm font-medium">Analytics</span><span className="text-xs text-neutral-500">Real-time data</span></div>
</div>

<div className="md:col-span-3 md:row-span-1 bg-neutral-900/50 border border-white/5 rounded-3xl p-8 flex items-center justify-between hover:border-white/10 transition-colors bento-card opacity-0 translate-y-10">
<div className="flex flex-col"><span className="text-lg font-medium">Platform V2</span><span className="text-neutral-500 text-sm">Rebuilt from the ground up for speed.</span></div>
<iconify-icon className="text-neutral-700" icon="solar:cpu-linear" width="48"></iconify-icon>
</div>

<div className="md:col-span-1 md:row-span-1 bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 rounded-3xl p-6 flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-colors cursor-pointer bento-card opacity-0 translate-y-10">
<iconify-icon className="text-[#1DA1F2]" icon="solar:plain-linear" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="concept-section relative h-screen w-full bg-[#EBEBEB] text-[#1a1a1a] flex flex-col justify-center overflow-hidden" id="marquee">
<div className="absolute top-0 left-0 w-full p-8 flex justify-between uppercase text-xs font-bold tracking-widest z-20">
<span>Studio_01</span><span>Coming 2024</span>
</div>
<div className="relative z-10 flex flex-col items-center justify-center h-full mix-blend-difference text-white">
<div className="glass-dark px-10 py-12 rounded-2xl max-w-lg text-center border border-white/10 backdrop-blur-xl">
<h3 className="text-2xl font-instrument italic mb-4">The new narrative</h3>
<p className="text-sm text-gray-300 font-light leading-relaxed mb-8">Stories told through motion and interaction. A platform for modern storytellers.</p>
<div className="flex items-center bg-white/10 rounded-full p-1 pl-4 border border-white/10">
<input className="bg-transparent outline-none text-sm font-light w-full placeholder-gray-500" placeholder="your@email.com" type="email"/>
<button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col justify-center gap-0 pointer-events-none select-none opacity-10">
<div className="marquee-container">
<div className="marquee-content text-[15vh] font-black tracking-tighter leading-none font-grotesk">
                     CREATIVE MOTION DIGITAL ART EXPERIENCE INTERACTION CREATIVE MOTION DIGITAL ART EXPERIENCE INTERACTION
                </div>
<div className="marquee-content text-[15vh] font-black tracking-tighter leading-none font-grotesk">
                     CREATIVE MOTION DIGITAL ART EXPERIENCE INTERACTION CREATIVE MOTION DIGITAL ART EXPERIENCE INTERACTION
                </div>
</div>
<div className="marquee-container">
<div className="marquee-content text-[15vh] font-black tracking-tighter leading-none font-grotesk" style={{animationDirection: 'reverse'}}>
                     FUTURE DESIGN SYSTEM INTERFACE LAYOUT FUTURE DESIGN SYSTEM INTERFACE LAYOUT
                </div>
<div className="marquee-content text-[15vh] font-black tracking-tighter leading-none font-grotesk" style={{animationDirection: 'reverse'}}>
                     FUTURE DESIGN SYSTEM INTERFACE LAYOUT FUTURE DESIGN SYSTEM INTERFACE LAYOUT
                </div>
</div>
<div className="marquee-container">
<div className="marquee-content text-[15vh] font-black tracking-tighter leading-none font-grotesk">
                     DEVELOPMENT CODE SYNTAX LOGIC DEVELOPMENT CODE SYNTAX LOGIC
                </div>
<div className="marquee-content text-[15vh] font-black tracking-tighter leading-none font-grotesk">
                     DEVELOPMENT CODE SYNTAX LOGIC DEVELOPMENT CODE SYNTAX LOGIC
                </div>
</div>
</div>
</section>

<section className="concept-section relative min-h-screen w-full bg-white text-black p-8 md:p-12 flex flex-col justify-between" id="void">
<div className="absolute inset-0 grid grid-cols-2 pointer-events-none border-x border-black/10 mx-8 md:mx-12">
<div className="border-r border-black/10 h-full"></div>
</div>
<header className="flex justify-between items-start z-10 font-mono-custom text-xs">
<div className="border border-black px-2 py-1 uppercase">Proto_Type_V1</div>
<div className="flex gap-4">
<span>LAT: 40.7128</span>
<span>LON: 74.0060</span>
</div>
</header>
<main className="z-10 relative">
<h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8] mb-8 mix-blend-exclusion void-text clip-path-inset">
                Radical<br/>Simplicity
            </h1>
<div className="bg-black text-white p-6 max-w-sm ml-auto mr-0 md:mr-20 transform hover:-translate-y-2 transition-transform duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
<p className="font-mono-custom text-xs mb-6 leading-relaxed">
                    OBJECTIVE: ELIMINATE NOISE.<br/>
                    STATUS: PENDING LAUNCH.<br/>
                    PRIORITY: CRITICAL.
                </p>
<div className="border-t border-white/20 pt-4 flex gap-2">
<input className="bg-transparent border border-white/40 px-3 py-2 w-full text-xs font-mono-custom placeholder-white/30 focus:border-white outline-none" placeholder="ACCESS CODE" type="text"/>
<button className="bg-white text-black px-4 text-xs font-bold hover:bg-neutral-300">GO</button>
</div>
</div>
</main>
<footer className="z-10 font-mono-custom text-xs flex justify-between items-end border-t border-black pt-4">
<span className="animate-pulse">_SYSTEM_READY</span>
<span>(C) 2024</span>
</footer>
</section>

<section className="concept-section relative h-screen w-full bg-[#111] overflow-hidden flex items-center justify-center" id="mesh">
<div className="absolute inset-0 bg-black">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-rose-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4s]"></div>
<div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-orange-500/20 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute bottom-1/4 left-1/4 w-[50vw] h-[50vw] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen"></div>
</div>
<div className="relative z-10 text-center space-y-8">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg mesh-element opacity-0 scale-90">
<iconify-icon className="text-orange-300" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium text-orange-100/80 tracking-wide">Magic is coming</span>
</div>
<h1 className="text-5xl md:text-7xl font-instrument text-white italic leading-tight mesh-element opacity-0 translate-y-4">
                Imagine <span className="not-italic font-grotesk font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-rose-200">Better.</span>
</h1>
<div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-xl flex gap-2 shadow-2xl mesh-element opacity-0 translate-y-4">
<input className="bg-transparent w-full px-4 text-white placeholder-white/30 focus:outline-none text-sm" placeholder="Enter your email" type="email"/>
<button className="bg-gradient-to-r from-orange-400 to-rose-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-lg hover:shadow-orange-500/20 hover:opacity-90 transition-all">Join</button>
</div>
</div>
</section>

<section className="concept-section relative min-h-screen w-full bg-zinc-950 text-white flex flex-col items-center justify-center font-inter" id="command">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.5)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>
<div className="w-full max-w-2xl px-6 relative z-10">
<div className="text-center mb-12">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white">Unlock your workflow.</h1>
<p className="text-zinc-400 text-lg">The command center for your entire digital life.</p>
</div>

<div className="bg-[#1A1A1A] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-[1.01] hover:border-white/20 cmd-palette opacity-0 scale-95">
<div className="border-b border-white/5 p-4 flex items-center gap-3">
<iconify-icon className="text-zinc-500 w-5 h-5" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-zinc-500 text-sm">Type a command or search...</span>
<span className="ml-auto text-xs text-zinc-600 bg-white/5 px-2 py-0.5 rounded border border-white/5">⌘ K</span>
</div>
<div className="p-2">
<div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Suggestions</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 cursor-pointer group">
<div className="p-1.5 bg-indigo-500 text-white rounded"><iconify-icon icon="solar:rocket-linear"></iconify-icon></div>
<div className="flex-1">
<div className="text-sm font-medium text-indigo-200 group-hover:text-white transition-colors">Request Early Access</div>
<div className="text-xs text-indigo-400/60">Get notified when we launch</div>
</div>
<iconify-icon className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer mt-1 group transition-colors">
<div className="p-1.5 bg-zinc-800 text-zinc-400 rounded"><iconify-icon icon="solar:document-text-linear"></iconify-icon></div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-300">Read Documentation</div>
<div className="text-xs text-zinc-600">Learn about the features</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer mt-1 group transition-colors">
<div className="p-1.5 bg-zinc-800 text-zinc-400 rounded"><iconify-icon icon="solar:user-plus-linear"></iconify-icon></div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-300">Invite Team</div>
<div className="text-xs text-zinc-600">Collaborate with others</div>
</div>
</div>
</div>
<div className="bg-zinc-900/50 p-2 text-center text-[10px] text-zinc-600 border-t border-white/5">
                    Press <span className="text-zinc-400">↵</span> to select
                </div>
</div>
</div>
</section>

<section className="concept-section relative h-screen w-full bg-black flex items-center justify-center overflow-hidden cursor-none" id="eclipse">

<div className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] bg-white rounded-full mix-blend-exclusion blur-[100px] opacity-20 transition-transform duration-75" id="spotlight" style={{transform: 'translate(-50%, -50%)'}}></div>
<div className="relative z-10 text-center mix-blend-difference text-white px-6">
<div className="mb-4 flex justify-center"><iconify-icon className="animate-spin-slow" icon="solar:eclipse-bold" width="60"></iconify-icon></div>
<h1 className="text-5xl md:text-8xl font-grotesk font-bold tracking-tighter mb-4">Shadow<br/>Mode.</h1>
<p className="text-xl md:text-2xl font-light text-gray-300 max-w-lg mx-auto leading-relaxed">
                Sometimes the best way to be seen is to disappear.
            </p>
<div className="mt-12 opacity-50 hover:opacity-100 transition-opacity">
<span className="border-b border-white pb-1 text-sm uppercase tracking-widest cursor-pointer">Unveil Project</span>
</div>
</div>
</section>

<section className="concept-section relative min-h-screen w-full flex flex-col md:flex-row" id="split">

<div className="w-full md:w-1/2 bg-zinc-100 flex items-center justify-center p-12 relative overflow-hidden group">
<div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:20px_20px]"></div>
<div className="relative z-10 space-y-6 max-w-sm">
<div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg shadow-xl group-hover:scale-110 transition-transform"><iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon></div>
<h2 className="text-4xl font-semibold text-zinc-900 tracking-tight">Designers</h2>
<p className="text-zinc-500">Craft pixel perfect experiences with a tool built for precision.</p>
<button className="text-sm font-semibold border-b border-black pb-0.5 hover:text-indigo-600 hover:border-indigo-600 transition-colors">View Canvas</button>
</div>
</div>

<div className="w-full md:w-1/2 bg-zinc-900 flex items-center justify-center p-12 relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
<div className="relative z-10 space-y-6 max-w-sm">
<div className="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-lg shadow-xl shadow-indigo-500/20 group-hover:scale-110 transition-transform"><iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon></div>
<h2 className="text-4xl font-semibold text-white tracking-tight">Developers</h2>
<p className="text-zinc-400">Ship faster with automated handoffs and clean generated code.</p>
<button className="text-sm font-semibold text-white border-b border-white pb-0.5 hover:text-indigo-400 hover:border-indigo-400 transition-colors">View Docs</button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center font-bold z-20 shadow-xl text-xs border-4 border-zinc-100 md:border-transparent">
            VS
        </div>
</section>


    </>
  );
}
