import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Custom Cursor Logic
        const cursorBubble = document.getElementById('cursor-bubble');
        const cursorDot = document.getElementById('cursor-dot');
        const body = document.body;

        let mouseX = 0;
        let mouseY = 0;
        let bubbleX = 0;
        let bubbleY = 0;
        let dotX = 0;
        let dotY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Animation Loop for Smooth Follower
        function animateCursor() {
            // Smooth delay for bubble
            bubbleX += (mouseX - bubbleX) * 0.15;
            bubbleY += (mouseY - bubbleY) * 0.15;
            
            // Faster delay for dot
            dotX += (mouseX - dotX) * 0.4;
            dotY += (mouseY - dotY) * 0.4;

            cursorBubble.style.left = `${bubbleX}px`;
            cursorBubble.style.top = `${bubbleY}px`;
            
            cursorDot.style.left = `${dotX}px`;
            cursorDot.style.top = `${dotY}px`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover Effect on Interactive Elements
        const interactiveElements = document.querySelectorAll('.interactive-target, a, button, input');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                body.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                body.classList.remove('hovering');
            });
        });

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal-element');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Unobserve after revealing
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-bubble"></div>
<div id="cursor-dot"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="group flex items-center gap-2 interactive-target" href="#">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 blur-sm rounded-full scale-50 translate-x-1 -translate-y-1"></div>
</div>
<span className="text-white font-medium tracking-tight text-lg group-hover:text-violet-300 transition-colors">bubble</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal hover:text-white transition-colors interactive-target" href="#features">Features</a>
<a className="text-sm font-normal hover:text-white transition-colors interactive-target" href="#testimonials">Stories</a>
<a className="text-sm font-normal hover:text-white transition-colors interactive-target" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-normal hover:text-white transition-colors interactive-target" href="#">Sign in</a>
<a className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all interactive-target hover:scale-105 active:scale-95 flex items-center gap-2" href="#">
<span>Get Started</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="bubble-bg w-24 h-24 left-[10%] animation-delay-0 opacity-20 bg-violet-500/20 blur-xl"></div>
<div className="bubble-bg w-32 h-32 left-[80%] animation-delay-2000 opacity-10 bg-indigo-500/20 blur-2xl" style={{animationDelay: '2s', animationDuration: '15s'}}></div>
<div className="bubble-bg w-16 h-16 left-[40%] animation-delay-4000 opacity-30 bg-fuchsia-500/20 blur-lg" style={{animationDelay: '4s', animationDuration: '12s'}}></div>
<div className="bubble-bg w-40 h-40 left-[60%] animation-delay-1000 opacity-10 bg-blue-500/20 blur-2xl" style={{animationDelay: '1s', animationDuration: '20s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
<span className="text-xs font-medium text-violet-200 tracking-wide uppercase">v2.0 is now live</span>
</div>
<h1 className="reveal-element text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Capture ideas in <br/>
<span className="text-gradient">a floating bubble.</span>
</h1>
<p className="reveal-element text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
                The frictionless workspace that floats above your apps. Organize thoughts, tasks, and collaborations without breaking your flow.
            </p>
<div className="reveal-element flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-slate-200 transition-all interactive-target overflow-hidden">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Start Floating
                        <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all interactive-target flex items-center justify-center gap-2">
<iconify-icon className="text-violet-400" icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch Demo
                </button>
</div>
</div>

<div className="reveal-element relative w-full max-w-5xl mx-auto mt-20 px-4 md:px-0 z-10">
<div className="relative rounded-t-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl accent-glow overflow-hidden aspect-[16/9] md:aspect-[21/9]">

<div className="absolute top-0 w-full h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>

<div className="absolute inset-0 pt-10 flex items-center justify-center">
<div className="relative w-64 h-64 md:w-96 md:h-96">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-transparent flex items-center justify-center backdrop-blur-md animate-pulse">
<iconify-icon className="text-violet-300 w-8 h-8" icon="lucide:mic" strokeWidth="1.5"></iconify-icon>
</div>

<div className="absolute top-10 left-10 w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center animate-[bounce_3s_infinite]">
<iconify-icon className="text-slate-500 w-5 h-5" icon="lucide:file-text" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-10 right-10 w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center animate-[bounce_4s_infinite]">
<iconify-icon className="text-slate-500 w-6 h-6" icon="lucide:image" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-1/2 right-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center animate-[bounce_5s_infinite]">
<iconify-icon className="text-emerald-500/50 w-4 h-4" icon="lucide:check-circle" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
</div>
</div>
</header>

<section className="py-24 relative overflow-hidden" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center reveal-element">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Fluid workflow designed<br/>for modern teams.</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Forget context switching. Bubble integrates seamlessly into your environment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-element group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors duration-500 interactive-target">
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-violet-400 w-6 h-6" icon="lucide:zap" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Instant Capture</h3>
<p className="text-slate-400 font-light leading-relaxed">
                        Record voice notes, screenshots, or text snippets instantly. Everything is automatically tagged and sorted.
                    </p>
</div>

<div className="reveal-element group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors duration-500 interactive-target transition-delay-100">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-400 w-6 h-6" icon="lucide:layers" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Context Aware</h3>
<p className="text-slate-400 font-light leading-relaxed">
                        Bubble knows what app you are using and suggests relevant notes, tasks, and previous context.
                    </p>
</div>

<div className="reveal-element group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors duration-500 interactive-target transition-delay-200">
<div className="w-12 h-12 rounded-full bg-fuchsia-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-fuchsia-400 w-6 h-6" icon="lucide:share-2" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Collaborative Flow</h3>
<p className="text-slate-400 font-light leading-relaxed">
                        Share bubbles with a link. No sign-up required for viewers. Real-time cursors and comments built-in.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

<div className="reveal-element p-8 md:p-12 rounded-3xl bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-violet-950/50 via-[#050505] to-black border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 interactive-target overflow-hidden">
<div className="flex-shrink-0 relative z-10">
<h3 className="text-3xl font-medium text-white mb-4 leading-tight">AI<br/>Synthesis</h3>
<p className="text-slate-400 font-light mb-10 max-w-[160px] leading-relaxed text-sm md:text-base">Our engine connects the dots between your scattered thoughts, creating cohesive summaries automatically.</p>
<a className="text-violet-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all group-hover:text-violet-300" href="#">
                            Learn more <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="relative flex-1 flex items-center justify-center md:justify-end md:pr-10 w-full">

<div className="absolute right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-violet-600/10 blur-[80px] rounded-full pointer-events-none"></div>
<iconify-icon className="relative text-white w-8 h-8 md:w-10 md:h-10 opacity-90" icon="lucide:sparkles" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="reveal-element p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden interactive-target group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-[#030303] to-[#030303]"></div>
<div className="relative z-10 text-center">
<h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">100+</h3>
<p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Integrations</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]" id="testimonials">
<div className="mb-12 text-center reveal-element px-6">
<h2 className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-2">Community</h2>
<p className="text-3xl font-medium text-white tracking-tight">Loved by creators worldwide</p>
</div>
<div className="ticker-wrap reveal-element">
<div className="ticker">

<div className="w-[350px] whitespace-normal p-6 mx-3 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interactive-target">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-medium">A</div>
<div>
<div className="text-white text-sm font-medium">Alex Chen</div>
<div className="text-slate-500 text-xs">Product Designer</div>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">"The bubble interface is incredibly intuitive. It feels like an extension of my brain rather than just software."</p>
</div>

<div className="w-[350px] whitespace-normal p-6 mx-3 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interactive-target">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-white font-medium">S</div>
<div>
<div className="text-white text-sm font-medium">Sarah Jenkins</div>
<div className="text-slate-500 text-xs">Founder</div>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">"Finally, a tool that respects my attention. The dark mode is perfect and the animations are buttery smooth."</p>
</div>

<div className="w-[350px] whitespace-normal p-6 mx-3 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interactive-target">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-fuchsia-900 flex items-center justify-center text-white font-medium">M</div>
<div>
<div className="text-white text-sm font-medium">Marcus Doi</div>
<div className="text-slate-500 text-xs">Developer</div>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">"The API integration is seamless. I've built custom workflows that have saved me hours every week."</p>
</div>

<div className="w-[350px] whitespace-normal p-6 mx-3 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interactive-target">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-white font-medium">E</div>
<div>
<div className="text-white text-sm font-medium">Elena Ross</div>
<div className="text-slate-500 text-xs">Writer</div>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">"Minimalist perfection. It gets out of the way when I need to write but is there when I need to organize."</p>
</div>

<div className="w-[350px] whitespace-normal p-6 mx-3 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interactive-target">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-medium">A</div>
<div>
<div className="text-white text-sm font-medium">Alex Chen</div>
<div className="text-slate-500 text-xs">Product Designer</div>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">"The bubble interface is incredibly intuitive. It feels like an extension of my brain rather than just software."</p>
</div>
<div className="w-[350px] whitespace-normal p-6 mx-3 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors interactive-target">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-white font-medium">S</div>
<div>
<div className="text-white text-sm font-medium">Sarah Jenkins</div>
<div className="text-slate-500 text-xs">Founder</div>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">"Finally, a tool that respects my attention. The dark mode is perfect and the animations are buttery smooth."</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="reveal-element max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-b from-[#111] to-black border border-white/10 relative overflow-hidden text-center p-12 md:p-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-violet-500/20 blur-[100px] pointer-events-none"></div>
<h2 className="relative z-10 text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">Ready to float?</h2>
<p className="relative z-10 text-slate-400 text-lg mb-10 max-w-lg mx-auto font-light">Join 10,000+ creators who have organized their chaos into bubbles.</p>
<div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<input className="w-full sm:w-80 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-violet-500 transition-colors interactive-target text-sm" placeholder="Enter your email" type="email"/>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform interactive-target text-sm">
                    Get Access
                </button>
</div>

<div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-white/5 rounded-tr-3xl bg-white/[0.01]"></div>
<div className="absolute bottom-0 right-0 w-32 h-32 border-t border-l border-white/5 rounded-tl-3xl bg-white/[0.01]"></div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-violet-600"></div>
<span className="text-white font-medium tracking-tight">bubble</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors interactive-target" href="#">Privacy</a>
<a className="hover:text-white transition-colors interactive-target" href="#">Terms</a>
<a className="hover:text-white transition-colors interactive-target" href="#">Twitter</a>
<a className="hover:text-white transition-colors interactive-target" href="#">GitHub</a>
</div>
<div className="text-xs text-slate-600">
                © 2023 Bubble Inc.
            </div>
</div>
</footer>


    </>
  );
}
