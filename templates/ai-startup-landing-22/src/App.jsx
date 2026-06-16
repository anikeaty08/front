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
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
bg: '#050510',
glass: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)',
brand: {
purple: '#A855F7',
blue: '#3B82F6',
pink: '#EC4899',
cyan: '#06b6d4'
}
},
backgroundImage: {
'neon-gradient': 'linear-gradient(to right, #A855F7, #3B82F6, #EC4899)',
'mesh': 'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.1) 0%, rgba(5, 5, 16, 0) 50%)',
},
animation: {
'spin-slow': 'spin 20s linear infinite',
'spin-reverse-slow': 'spin 25s linear infinite reverse',
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
'scroll': 'scroll 40s linear infinite',
'scan': 'scan 4s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
'pulse-glow': {
'0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
'50%': { opacity: 0.8, transform: 'scale(1.05)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
scan: {
'0%': { top: '0%' },
'100%': { top: '100%' },
}
}
}
}
}



        // Scroll Reveal
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" style={{animationDelay: '2s'}}></div>
<div className="absolute inset-0 grid-bg opacity-30"></div>

<div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-50 animate-float"></div>
<div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-brand-pink rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-brand-blue rounded-full opacity-40 animate-float" style={{animationDelay: '3s'}}></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#050510]/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-display font-bold text-2xl tracking-widest text-white flex items-center gap-2" href="#">
<span className="w-2 h-8 bg-gradient-to-b from-brand-purple to-brand-blue rounded-full"></span>
                NEXXITY
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors relative group" href="#">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#mission">
                    Mission
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#features">
                    Upcoming
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#about">
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#contact">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all group-hover:w-full"></span>
</a>
</div>

<a className="hidden md:block group relative px-6 py-2.5 rounded-full overflow-hidden" href="#">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-purple to-brand-blue opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-blue to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative z-10 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    Join Bootcamp
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 reveal-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/5 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></span>
<span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple">NEXXITY</span>
</div>
<h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-white">
                    India’s next revolution isn’t noise — it’s <span className="text-gradient-main">intelligence.</span><br/>
                    And we’re building it.
                </h1>
<p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-4 max-w-xl">
                    From Zero to Exponential Growth: Mastering the AI Advantage.
                </p>
<p className="text-gray-500 text-sm md:text-base font-light mb-10 max-w-lg border-l-2 border-brand-purple/30 pl-4">
                    Industrial-grade frameworks engineered in India — building AI innovation for India’s next generation of builders and founders.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="px-8 py-4 rounded-full bg-white text-bg text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">
                        Explore Nexxity
                        <iconify-icon className="text-lg text-brand-purple" icon="solar:stars-minimalistic-linear"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 text-white text-sm font-bold uppercase tracking-widest transition-all hover:border-white/40">
                        Let's Connect
                    </button>
</div>
<p className="mt-8 text-xs font-mono text-gray-500 tracking-wider">
                    // NEXXITY is not a tool — it’s your closest AI companion.
                </p>
</div>

<div className="relative h-[500px] lg:h-[700px] flex items-center justify-center reveal-up delay-200 perspective-[1000px]">

<div className="absolute inset-0 orb-glow blur-[80px] opacity-60"></div>

<div className="relative w-64 h-64 md:w-96 md:h-96 preserve-3d animate-float">

<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black via-brand-purple/20 to-brand-blue/20 backdrop-blur-sm border border-white/10 shadow-[inset_0_0_60px_rgba(168,85,247,0.2)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full blur-[40px] opacity-20 animate-pulse"></div>

<div className="absolute inset-[-20%] rounded-full border border-brand-purple/30 border-dashed animate-spin-slow opacity-60"></div>
<div className="absolute inset-[-40%] rounded-full border border-brand-blue/20 animate-spin-reverse-slow opacity-40"></div>

<div className="absolute top-0 left-1/2 w-2 h-2 bg-brand-pink rounded-full shadow-[0_0_10px_#EC4899] animate-spin-slow origin-[0_192px]"></div>
<div className="absolute bottom-0 right-1/2 w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_10px_#06b6d4] animate-spin-reverse-slow origin-[0_-220px]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="glass-panel rounded-3xl p-8 md:p-12 border-l-4 border-l-brand-purple reveal-up">
<div className="grid md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-7 order-2 md:order-1">
<div className="mb-6">
<span className="text-xs font-bold text-brand-purple uppercase tracking-widest mb-2 block">Founder &amp; CTO of Nexxity</span>
<h2 className="font-display text-4xl text-white font-medium">Ariv</h2>
</div>
<blockquote className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                            "Hi, I’m Ariv, founder of Nexxity. At Nexxity, we’re closing the gap between biological limits and digital potential — building AI that doesn’t feel like a tool, but like your closest companion: the one that stays with you 24/7, reduces the weight of life, and makes your work flow effortlessly."
                        </blockquote>
<div className="mt-8 flex gap-4">
<iconify-icon className="text-brand-purple text-2xl" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm text-gray-400 font-mono self-center uppercase tracking-widest">Neural Architecture Lead</span>
</div>
</div>

<div className="md:col-span-5 order-1 md:order-2 flex justify-center relative">

<div className="relative w-64 h-80 rounded-2xl overflow-hidden border border-brand-purple/50 group">
<div className="absolute inset-0 bg-gradient-to-b from-brand-purple/20 to-transparent z-10 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>

<div className="absolute w-full h-1 bg-brand-purple/50 shadow-[0_0_15px_#A855F7] animate-scan opacity-50 z-20"></div>

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-purple"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-purple"></div>
</div>

<div className="absolute inset-0 bg-brand-purple blur-[60px] opacity-20 -z-10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="mission">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-card rounded-[3rem] p-10 md:p-20 relative overflow-hidden reveal-up">

<div className="absolute inset-0 grid-bg opacity-50 z-0"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-8">
                            MISSION
                        </h2>
<div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
<p>
                                "I am building Nexxity to transform India into a global hub of AI innovation. Our mission is to create systems that help you operate faster, think clearer, and live lighter."
                            </p>
<p>
                                We don't just support your tasks; we <span className="text-white font-normal">simplify your decisions, automate your growth, and scale your impact.</span> Join us in rewriting the future—one system at a time.
                            </p>
</div>
</div>
<div className="relative h-[400px] flex items-center justify-center">

<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 shadow-[inset_0_0_50px_rgba(59,130,246,0.2)] animate-spin-slow preserve-3d bg-[#050510]">

<div className="absolute inset-0 rounded-full opacity-30" style={{background: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #3B82F6 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #3B82F6 20px)'}}></div>

<div className="absolute top-[40%] left-[60%] w-8 h-8 bg-brand-pink rounded-full blur-[10px] animate-pulse"></div>

<div className="absolute -inset-10 border border-white/5 rounded-full skew-y-12"></div>
<div className="absolute -inset-20 border border-white/5 rounded-full -skew-x-12 opacity-50"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center reveal-up">
<h2 className="font-display text-4xl font-semibold tracking-tight text-white mb-2">Upcoming Features</h2>
<p className="text-brand-purple text-sm uppercase tracking-widest">More Features Coming Soon...</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-10 rounded-3xl group relative overflow-hidden reveal-up hover:rotate-1 transition-transform duration-500">
<div className="absolute top-4 right-4 px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-purple border border-brand-purple/20">Upcoming</div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-transparent border border-brand-purple/30 flex items-center justify-center mb-8 text-brand-purple text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:square-academic-cap-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Student Hub</h3>
<p className="text-gray-500 text-sm font-light">AI-driven academic navigation and personalized learning paths.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-brand-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="glass-card p-10 rounded-3xl group relative overflow-hidden reveal-up delay-100 hover:rotate-1 transition-transform duration-500">
<div className="absolute top-4 right-4 px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-blue border border-brand-blue/20">Upcoming</div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-transparent border border-brand-blue/30 flex items-center justify-center mb-8 text-brand-blue text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Next Leader</h3>
<p className="text-gray-500 text-sm font-light">Leadership simulation and strategic decision-making support.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>

<div className="glass-card p-10 rounded-3xl group relative overflow-hidden reveal-up delay-200 hover:rotate-1 transition-transform duration-500">
<div className="absolute top-4 right-4 px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-pink border border-brand-pink/20">Upcoming</div>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-pink/20 to-transparent border border-brand-pink/30 flex items-center justify-center mb-8 text-brand-pink text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:case-round-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">Business Professionals</h3>
<p className="text-gray-500 text-sm font-light">Enterprise-grade automation and market analysis tools.</p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-black border-y border-white/10">

<div className="absolute inset-0 opacity-20" style={{background: 'repeating-linear-gradient(transparent, transparent 2px, #3B82F6 3px, transparent 4px)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center reveal-up">
<span className="text-brand-blue font-mono text-xs uppercase tracking-[0.3em] mb-4">Upcoming Mission: Nexxity Phase 2</span>
<h2 className="font-display text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-6">
                PROJECT<br/>GHOST-WIRE
            </h2>
<div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
<span className="w-2 h-2 rounded-full bg-brand-blue animate-ping"></span>
<span className="text-sm text-gray-300 font-light tracking-widest uppercase">Closest Companion</span>
</div>

<div className="mt-16 relative w-full max-w-2xl h-64 border-x border-t border-brand-blue/20 rounded-t-full flex items-end justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent"></div>
<div className="w-full h-1 bg-brand-blue/50 shadow-[0_0_20px_#3B82F6] animate-scan absolute top-0"></div>
<div className="text-center pb-8 opacity-50">
<iconify-icon className="text-6xl text-brand-blue animate-pulse" icon="solar:face-scan-square-linear"></iconify-icon>
<div className="mt-2 font-mono text-xs text-brand-blue">INITIALIZING NEURAL LINK...</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<h2 className="font-display text-4xl font-semibold tracking-tight text-white mb-12 text-center reveal-up">WHY AI IMPORTANT</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl text-center reveal-up">
<div className="text-5xl font-display font-bold text-gradient-main mb-2">180M</div>
<p className="text-sm font-medium text-white uppercase tracking-widest">New Jobs Created</p>
<p className="text-xs text-gray-500 mt-2">Driven by AI demand</p>
</div>

<div className="glass-card p-8 rounded-2xl text-center reveal-up delay-100">
<div className="text-5xl font-display font-bold text-white mb-2">78M</div>
<p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Jobs Displaced</p>
<p className="text-xs text-gray-500 mt-2">Automation shift</p>
</div>

<div className="glass-card p-8 rounded-2xl text-center reveal-up delay-200">
<div className="text-5xl font-display font-bold text-white mb-2">300M</div>
<p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Jobs Impacted</p>
<p className="text-xs text-gray-500 mt-2">Experts Say</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#050510]/50 backdrop-blur relative overflow-hidden">
<div className="absolute inset-0 bg-brand-purple/5 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 mb-10">
<h2 className="font-display text-2xl font-semibold tracking-tight text-white reveal-up">EXPERTS SAY</h2>
</div>
<div className="flex overflow-hidden w-full group">
<div className="flex gap-8 animate-scroll hover:pause-on-hover whitespace-nowrap pl-6">

<div className="w-[400px] md:w-[500px] glass-card p-8 rounded-xl shrink-0 whitespace-normal hover:scale-[1.02] transition-transform">
<p className="text-lg text-gray-300 font-light mb-4">"AI will reshape the global workforce faster than any previous industrial revolution."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs font-bold text-white uppercase">Industry Leader</div>
</div>
</div>

<div className="w-[400px] md:w-[500px] glass-card p-8 rounded-xl shrink-0 whitespace-normal hover:scale-[1.02] transition-transform">
<p className="text-lg text-gray-300 font-light mb-4">"The next billion-dollar companies will be built with AI-first execution systems."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs font-bold text-white uppercase">Tech Visionary</div>
</div>
</div>

<div className="w-[400px] md:w-[500px] glass-card p-8 rounded-xl shrink-0 whitespace-normal hover:scale-[1.02] transition-transform">
<p className="text-lg text-gray-300 font-light mb-4">"Automation and intelligence will become the foundation of modern business growth."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs font-bold text-white uppercase">Economist</div>
</div>
</div>

<div className="w-[400px] md:w-[500px] glass-card p-8 rounded-xl shrink-0 whitespace-normal hover:scale-[1.02] transition-transform">
<p className="text-lg text-gray-300 font-light mb-4">"AI is not replacing humans — it is upgrading human potential."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs font-bold text-white uppercase">Futurist</div>
</div>
</div>

<div className="w-[400px] md:w-[500px] glass-card p-8 rounded-xl shrink-0 whitespace-normal hover:scale-[1.02] transition-transform">
<p className="text-lg text-gray-300 font-light mb-4">"AI will reshape the global workforce faster than any previous industrial revolution."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700"></div>
<div className="text-xs font-bold text-white uppercase">Industry Leader</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="about">
<div className="max-w-7xl mx-auto">
<h2 className="font-display text-4xl font-semibold tracking-tight text-white mb-12 text-center reveal-up">About Us</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl text-center group reveal-up hover:-translate-y-2 transition-transform">
<div className="w-24 h-24 mx-auto rounded-full bg-gray-800 border-2 border-brand-purple/50 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-brand-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h3 className="text-lg font-bold text-white">Veer</h3>
<p className="text-xs text-brand-purple uppercase tracking-widest mt-1">CEO</p>
</div>

<div className="glass-card p-6 rounded-2xl text-center group reveal-up delay-100 hover:-translate-y-2 transition-transform">
<div className="w-24 h-24 mx-auto rounded-full bg-gray-800 border-2 border-brand-blue/50 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-brand-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h3 className="text-lg font-bold text-white">Harsh</h3>
<p className="text-xs text-brand-blue uppercase tracking-widest mt-1">CTO</p>
</div>

<div className="glass-card p-6 rounded-2xl text-center group reveal-up delay-200 hover:-translate-y-2 transition-transform">
<div className="w-24 h-24 mx-auto rounded-full bg-gray-800 border-2 border-brand-cyan/50 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-brand-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h3 className="text-lg font-bold text-white">Suraj</h3>
<p className="text-xs text-brand-cyan uppercase tracking-widest mt-1">CISO</p>
</div>

<div className="glass-card p-6 rounded-2xl text-center group reveal-up delay-300 hover:-translate-y-2 transition-transform">
<div className="w-24 h-24 mx-auto rounded-full bg-gray-800 border-2 border-brand-pink/50 mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-brand-pink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h3 className="text-lg font-bold text-white">Devansh</h3>
<p className="text-xs text-brand-pink uppercase tracking-widest mt-1">CCO</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 bg-black" id="contact">
<div className="max-w-2xl mx-auto text-center reveal-up">
<h2 className="font-display text-4xl font-semibold tracking-tight text-white mb-2">LET'S CONNECT</h2>
<p className="text-gray-500 mb-10">Ascend with Nexxity.</p>
<form className="space-y-4 text-left">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-gray-500 uppercase tracking-wider ml-2">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 uppercase tracking-wider ml-2">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 uppercase tracking-wider ml-2">Subject</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 uppercase tracking-wider ml-2">Brief Content</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors" rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.4)]" type="button">
                    Send Message
                </button>
</form>
<div className="mt-8 text-sm text-gray-500">
                Direct Connect – <a className="text-white hover:text-brand-purple transition-colors" href="mailto:thearivsarkar@gmail.com">thearivsarkar@gmail.com</a>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/10 bg-[#050510]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
<div>NEXXITY — Building AI India’s Future.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:brand-linkedin-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
