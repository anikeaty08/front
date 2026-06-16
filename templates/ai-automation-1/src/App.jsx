import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030014]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-lg flex items-center justify-center text-black font-bold text-xs">O</div>
<span className="font-semibold tracking-wide text-lg">ONYX<span className="text-cyan-400">LABS</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Vibe Check</a>
<a className="hover:text-white transition-colors" href="#">The Playbook</a>
<a className="hover:text-white transition-colors" href="#">Feed</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-fuchsia-500 hover:bg-fuchsia-400 rounded-full transition-all shadow-[0_0_15px_rgba(217,70,239,0.4)]" href="#">
                Join the Club
            </a>
</div>
</nav>

<header className="lg:pt-52 lg:pb-32 overflow-hidden pt-40 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll relative">

<div aria-hidden="true" className="absolute -inset-20 -z-10 pointer-events-none overflow-hidden select-none opacity-60 mix-blend-screen">
<div className="absolute top-0 right-10 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-[80px] animate-pulse"></div>
<div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_800px_at_50%_200px,rgba(120,50,255,0.05),transparent)]"></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-medium mb-8 relative z-10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    NOW LIVE: NEXT-GEN OPS
                </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight font-serif mb-8 text-white relative z-10">
                    Your <br/>
                    Business. <br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-fuchsia-300 pr-2">Future-</span><br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Proofed.</span> <br/>
                    Instantly.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed font-light mb-10 relative z-10">
                    We're not just your "automation guys." We're your co-pilots. We build the brains and the brawn that let you focus on the vibes while we handle the grind.
                </p>
<div className="flex flex-col sm:flex-row gap-4 relative z-10">
<button className="px-8 py-4 bg-white text-black font-semibold rounded-md hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group">
                        LET'S RIDE 
                        <svg aria-hidden="true" className="lucide lucide-zap w-4 h-4 group-hover:fill-current transition-all" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-md hover:bg-white/5 transition-colors uppercase text-sm tracking-wide">
                        See the Magic
                    </button>
</div>
</div>

<div className="relative reveal-on-scroll delay-200">

<div className="absolute -top-10 -right-10 w-24 h-24 bg-fuchsia-600 rounded-2xl rotate-12 blur-2xl opacity-40 animate-pulse"></div>

<div className="relative bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2 overflow-hidden shadow-2xl">
<div className="absolute top-4 right-4 z-20">
<div className="w-12 h-12 bg-black/60 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-500">
<svg aria-hidden="true" className="lucide lucide-sparkles text-fuchsia-500 w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
</div>
<div className="relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden group">
<img alt="Futuristic Building" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
<p className="font-serif italic text-xl md:text-2xl text-white/90 leading-tight">
                                "The future isn't coming, it's already here. You just need the keys."
                            </p>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 z-30">
<div className="w-16 h-16 bg-[#0a0a0a] border border-cyan-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)] animate-spin-slow">
<svg aria-hidden="true" className="lucide lucide-loader-2 text-cyan-400 w-8 h-8 animate-spin" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-on-scroll">
<p className="text-xs font-bold tracking-[0.2em] text-fuchsia-500 uppercase mb-4">The Manifest</p>
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
                    Automation is boring. <br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Evolution is the goal.</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-10">

<div className="group relative p-8 md:p-12 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 rounded-lg bg-cyan-900/20 border border-cyan-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-hourglass text-cyan-400 w-6 h-6" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
</div>
<h3 className="font-serif text-2xl text-white mb-4">Kill the "Busy Work"</h3>
<p className="text-neutral-400 leading-relaxed font-light text-lg">
                        You started this to create, not to copy-paste. We automate the repetitive stuff so your big brain can stay focused on the moves that actually matter.
                    </p>
</div>

<div className="group relative p-8 md:p-12 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 rounded-lg bg-fuchsia-900/20 border border-fuchsia-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-rocket text-fuchsia-400 w-6 h-6" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="font-serif text-2xl text-white mb-4">Built to Scale</h3>
<p className="text-neutral-400 leading-relaxed font-light text-lg">
                        We don't do band-aids. We build iron-clad systems that grow with you. It's like upgrading from a tricycle to a warp-drive spaceship.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<p className="text-xs font-bold tracking-[0.2em] text-cyan-500 uppercase mb-16 reveal-on-scroll">The Arsenal</p>
<h2 className="text-5xl md:text-7xl font-serif mb-24 reveal-on-scroll">Level Up <br/> Your Ops</h2>

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 mb-32 reveal-on-scroll">
<div className="w-full md:w-1/2 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-2 overflow-hidden aspect-video flex items-center justify-center">

<div className="w-full h-full bg-neutral-900/50 rounded-lg relative overflow-hidden">
<div className="absolute top-4 left-4 right-4 h-32 border-b border-white/5 flex items-end pb-4 space-x-1">
<div className="w-full bg-fuchsia-500/20 h-[40%] rounded-sm"></div>
<div className="w-full bg-fuchsia-500/30 h-[70%] rounded-sm"></div>
<div className="w-full bg-fuchsia-500/50 h-[50%] rounded-sm"></div>
<div className="w-full bg-fuchsia-500/80 h-[90%] rounded-sm"></div>
<div className="w-full bg-fuchsia-500/40 h-[60%] rounded-sm"></div>
</div>
<div className="absolute bottom-4 left-4">
<div className="flex space-x-2">
<div className="w-20 h-2 bg-white/10 rounded-full"></div>
<div className="w-10 h-2 bg-white/10 rounded-full"></div>
</div>
</div>
<img alt="Chart" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="text-8xl font-bold text-white/5 font-serif absolute -translate-y-20 -translate-x-10 pointer-events-none">01</div>
<h3 className="text-3xl md:text-4xl font-serif italic mb-6">Clone Your Talent</h3>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
                        We use AI to capture your brand's unique voice and decision logic. It's you, but online 24/7, across every channel, closing deals while you sleep.
                    </p>
<div className="flex gap-3 flex-wrap mb-8">
<span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-fuchsia-300 border border-fuchsia-900/50 bg-fuchsia-900/20 rounded-full">AI Voice Models</span>
<span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-fuchsia-300 border border-fuchsia-900/50 bg-fuchsia-900/20 rounded-full">Decision Frameworks</span>
</div>
<a className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white border-b border-white/30 pb-1 hover:border-white transition-all group" href="#">
                        See The Case Study 
                        <svg aria-hidden="true" className="lucide lucide-arrow-up-right ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 reveal-on-scroll">
<div className="w-full md:w-1/2 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-2 overflow-hidden aspect-video flex items-center justify-center">

<div className="w-full h-full bg-neutral-900/50 rounded-lg relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
<img alt="Globe" className="w-[120%] h-[120%] object-cover opacity-60 mix-blend-screen" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-grid opacity-20"></div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="text-8xl font-bold text-white/5 font-serif absolute -translate-y-20 -translate-x-6 pointer-events-none">02</div>
<h3 className="text-3xl md:text-4xl font-serif italic mb-6">Self-Driving Growth</h3>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
                        Your sales funnel shouldn't need a babysitter. We build end-to-end autonomous loops that find leads, nurture them, and book them without you lifting a finger.
                    </p>
<div className="flex gap-3 flex-wrap mb-8">
<span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300 border border-cyan-900/50 bg-cyan-900/20 rounded-full">Auto-Lead Gen</span>
<span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300 border border-cyan-900/50 bg-cyan-900/20 rounded-full">Predictive Revenue</span>
</div>
<a className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white border-b border-white/30 pb-1 hover:border-white transition-all group" href="#">
                        Get The Blueprints 
                        <svg aria-hidden="true" className="lucide lucide-arrow-right ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="mt-32 flex justify-end">
<p className="text-fuchsia-500 font-serif italic text-2xl max-w-sm text-right reveal-on-scroll">
                    "Don't just compete. Dominate the timeline."
                </p>
</div>
</div>
</section>

<section className="py-32 md:py-48 relative border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-12 flex justify-center reveal-on-scroll">
<svg aria-hidden="true" className="lucide lucide-quote text-white/20 w-12 h-12 fill-current" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="text-3xl md:text-5xl font-serif leading-tight mb-16 reveal-on-scroll">
                "ONYX AI didn't just give us tools; they gave us our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500 italic">lives back</span>. We're 5x'ing our volume and I'm actually at the beach."
            </blockquote>
<div className="flex flex-col items-center justify-center reveal-on-scroll delay-100">
<div className="w-16 h-16 rounded-full border-2 border-cyan-500/50 p-1 mb-4">
<img alt="User" className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-bold tracking-widest text-sm text-white uppercase mb-1">Elena Vance</div>
<div className="text-xs font-medium text-cyan-400 tracking-wider">CEO, VANCE CAPITAL GROUPS</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-24 pb-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded flex items-center justify-center text-black font-bold text-[10px]">O</div>
<span className="font-semibold tracking-wide text-md">ONYX<span className="text-cyan-400">LABS</span></span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                        The next era of human + AI partnership. We build the future so you can live in it.
                    </p>
</div>
<div className="md:col-start-3">
<h4 className="font-serif text-white mb-6">Navigation</h4>
<ul className="space-y-4 text-sm font-medium text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Vibe Check</a></li>
<li><a className="hover:text-white transition-colors" href="#">Playbook</a></li>
<li><a className="hover:text-white transition-colors" href="#">Investment</a></li>
<li><a className="hover:text-white transition-colors" href="#">Feed</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-white mb-6">Let's Connect</h4>
<ul className="space-y-4 text-sm font-medium text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">X / Twitter</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">hello@onyxlabs.ai</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 uppercase tracking-wider font-semibold">
<div>© 2024 ONYX AI Labs. Stay Hip. Stay Hungry.</div>
<div className="flex gap-6">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
