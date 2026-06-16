import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // 3D Globe Initialization
        import createGlobe from 'https://cdn.skypack.dev/cobe';

        const canvas = document.getElementById("cobe");
        let phi = 0;

        createGlobe(canvas, {
            devicePixelRatio: 2,
            width: 1000 * 2,
            height: 1000 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.1, 0.1], 
            markerColor: [0.85, 0.46, 0.02], // Gold/Amber
            glowColor: [0.3, 0.2, 0.05],
            markers: [
                { location: [14.5995, 120.9842], size: 0.1 }, // Manila
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.003;
            }
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-white hover:text-amber-200 transition-colors uppercase" href="#">
                KISHA<span className="text-amber-500">.</span>DESIGN
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-amber-400 transition-colors" href="#about">About</a>
<a className="hover:text-amber-400 transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-amber-400 transition-colors" href="#bonuses">Bonuses</a>
<a className="hover:text-amber-400 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-6">
<a className="hover:bg-amber-50 transition-all hover:shadow-[0_0_20px_rgba(217,119,6,0.4)] text-xs font-semibold text-black tracking-wide bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="/www.calendly.com/kishamarieparubrub">
                    ENROLL NOW
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

<div className="absolute inset-0 z-0 flex items-center justify-center globe-fade-in pointer-events-auto">
<canvas className="opacity-40 mix-blend-screen" height="2000" id="cobe" style={{width: '1000px', height: '1000px', maxWidth: '100%', aspectRatio: '1'}} width="2000"></canvas>
</div>
<div className="container mx-auto px-6 text-center z-10 fade-in-up pointer-events-none" style={{animationDelay: '0.1s'}}>
<div className="inline-flex pointer-events-auto gap-2 bg-neutral-900/80 border-neutral-800 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-lg backdrop-blur-sm items-center">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-400">
                    New Cohort Open
                </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] max-w-5xl mx-auto">
                Learn Funnel Design and 
                Land Your First Client in 
                <span className="text-gold-gradient italic pr-2">Less Than 30 Days</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Even if you have zero design background, zero tech skills, and no experience yet. Start your journey to 20-50k/month.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 pointer-events-auto">
<a className="group relative px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full font-semibold tracking-tight overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all" href="#enroll">
<span className="relative z-10 flex items-center gap-2">
                        Enroll Now
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="px-8 py-3.5 text-neutral-300 border border-neutral-800 rounded-full font-medium tracking-tight hover:bg-neutral-900 hover:text-white hover:border-neutral-700 transition-all bg-black/30 backdrop-blur-sm" href="#about">
                    Meet Kisha
                </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600 z-20">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="py-24 bg-neutral-950 relative z-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">Real Talk</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Is This Your Situation Right Now?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-white/5 bg-neutral-900/20 rounded-2xl hover:bg-neutral-900/40 transition duration-500 group">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors">
<svg className="lucide lucide-x w-5 h-5 text-red-400 group-hover:text-amber-500 transition-colors" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<h3 className="text-white text-lg font-medium mb-3">Overwhelmed &amp; Confused</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                        Super interested ka bang matuto ng Funnel Design, pero... overwhelmed sa sobrang daming technical terms at tutorials online na nakaka-overwhelm at hindi mo alam saan magsisimula?
                    </p>
</div>

<div className="p-8 border border-white/5 bg-neutral-900/20 rounded-2xl hover:bg-neutral-900/40 transition duration-500 group">
<div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-target w-5 h-5 text-amber-500" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-white text-lg font-medium mb-3">Income Goals</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                        Gusto mong magkaroon ng 20-50k per month na extra income by offering funnel design services to businesses and clients kahit nasa bahay ka lang?
                    </p>
</div>

<div className="p-8 border border-white/5 bg-neutral-900/20 rounded-2xl hover:bg-neutral-900/40 transition duration-500 group">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors">
<svg className="lucide lucide-trending-up w-5 h-5 text-blue-400 group-hover:text-amber-500 transition-colors" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-white text-lg font-medium mb-3">Career Growth</h3>
<p className="text-neutral-400 text-sm leading-relaxed font-light">
                        Gusto mong mag-upskill at matuto ng high-value specialization para mas matulungan pa yung clients mo sa business nya?
                    </p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-xl text-white font-medium tracking-tight">Then you are in the <span className="text-gold-gradient">right place.</span></p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-[#080808]" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-amber-900/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative bg-neutral-900 rounded-2xl aspect-[4/5] overflow-hidden border border-white/10">

<div className="flex text-neutral-600 bg-neutral-800 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac4ec4cd-671a-4c07-9012-8c8ec4436bc2_1600w.jpg)] bg-cover bg-center items-center justify-center">
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-neutral-950 border border-white/10 p-4 rounded-xl shadow-xl backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-black flex items-center justify-center text-[10px] text-black font-bold">IG</div>
<div className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center text-[10px] text-black font-bold">FB</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">TT</div>
</div>
<div className="text-xs font-medium text-white">
<p>Featured on</p>
<p className="text-neutral-400">Social Media</p>
</div>
</div>
</div>
</div>

<div className="">
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4 block">Your Instructor</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8">Meet Kisha</h2>
<div className="space-y-6 text-neutral-400 text-base leading-relaxed font-light">
<p className="text-white text-lg font-normal">
                            Hi guys, my name is Kisha. I am a Social Media Manager turned Funnel Designer for service based businesses.
                        </p>
<p className="">
                            Some of you might know me from TikTok and Facebook where I share short videos about freelancing, marketing, and funnel design.
                        </p>
<p className="italic border-l-2 border-amber-500 pl-4 text-neutral-300">
                            "Dahil doon, ang daming nagme message sakin kung paano magsimula sa funnel design, ano dapat unahin, at paano siya gawing real skill na pwedeng pagkakitaan."
                        </p>
<p className="">
                            That is why I created this mini course. I want to teach funnel design in the simplest way possible so you can start offering it as a service, help more clients, and earn more while working from home.
                        </p>
</div>
<div className="mt-10">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
<div className="grid grid-cols-3 gap-6">
<div className="">
<div className="text-2xl font-light text-white mb-1">Simple</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">No Jargon</div>
</div>
<div>
<div className="text-2xl font-light text-white mb-1">Fast</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">&lt; 30 Days</div>
</div>
<div>
<div className="text-2xl font-light text-white mb-1">Proven</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest">Real Skills</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative z-20" id="curriculum">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between border-b border-white/5 pb-8">
<div>
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">Syllabus</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">What You Will Learn</h2>
</div>
<p className="mt-6 md:mt-0 text-neutral-400 max-w-sm text-sm leading-relaxed text-right">
                    From zero knowledge to landing your first client. <br/>
                    Practical, direct, and no fluff.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-5 text-amber-500 border border-white/5">
<svg className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Funnel Fundamentals</h3>
<p className="text-neutral-500 text-sm">Learn what a funnel is in simple words and how it differs from websites.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-5 text-amber-500 border border-white/5">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Difference vs Websites</h3>
<p className="text-neutral-500 text-sm">Know the difference between funnels, landing pages, and websites.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-5 text-amber-500 border border-white/5">
<svg className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-white font-medium mb-2">Planning</h3>
<p className="text-neutral-500 text-sm">Plan a simple booking funnel for any service based business.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-5 text-amber-500 border border-white/5">
<svg className="lucide lucide-hammer w-5 h-5" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Building in GHL</h3>
<p className="text-neutral-500 text-sm">Build that booking funnel inside GoHighLevel step-by-step.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 transition duration-300">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-5 text-amber-500 border border-white/5">
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-white font-medium mb-2">Portfolio Creation</h3>
<p className="text-neutral-500 text-sm">Create a simple portfolio that you can send to clients immediately.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-gradient-to-br from-neutral-900/30 to-amber-900/10 hover:bg-neutral-900/50 transition duration-300 border-amber-500/20">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-5 text-amber-500 border border-white/5">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Client Outreach</h3>
<p className="text-neutral-500 text-sm">Start reaching out so you can land your first funnel client.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5" id="bonuses">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-4 border border-amber-500/20">
                    Done For You
                </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    I don't want you starting from a <span className="text-neutral-500">blank page.</span>
</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto font-light">
                    When you join, you also get these bonuses designed para mas mapadali ang work mo. Instead of guessing, follow the templates.
                </p>
</div>
<div className="space-y-4">

<div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-amber-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-check-square w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-lg mb-1">Landing Page Development Checklist</h4>
<p className="text-neutral-500 text-sm leading-relaxed">Step by step checklist from planning to final QA. Follow the list habang nag build ka para wala kang mamiss.</p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-amber-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-list-checks w-5 h-5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-lg mb-1">Booking Funnel Checklist</h4>
<p className="text-neutral-500 text-sm leading-relaxed">Clear list of everything your booking funnel needs. Pages, automations, confirmations, reminders, tracking and more.</p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-amber-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-lg mb-1">Proposal Template</h4>
<p className="text-neutral-500 text-sm leading-relaxed">Copy paste proposal you can edit. Send it to clients and look like a pro kahit first time mo pa lang.</p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-amber-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-lg mb-1">Editable Contract Template</h4>
<p className="text-neutral-500 text-sm leading-relaxed">Simple and client friendly contract to protect your time, scope, and payments. Fill in the blanks lang.</p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-amber-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-help-circle w-5 h-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-lg mb-1">Client Onboarding Questionnaire</h4>
<p className="text-neutral-500 text-sm leading-relaxed">Questions to ask every new client so kompleto agad ang info and assets. No more back and forth.</p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-amber-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-layout-template w-5 h-5" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-lg mb-1">Templates &amp; Prompts Pack</h4>
<p className="text-neutral-500 text-sm leading-relaxed">ClickUp Project Management Tutorial, Landing Page Templates for different industries, and ChatGPT Prompts for Funnel Designers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950 z-20 overflow-hidden" id="enroll">
<div className="bg-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-neutral-950 to-neutral-950 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e5d20f7-c97d-4cfa-853d-50a3f1d87fa9_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0 brightness-50"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
                Start Your Funnel Journey
            </h2>
<p className="text-neutral-400 mb-12 text-lg max-w-xl mx-auto font-light leading-relaxed">
                Move faster and feel more confident as a funnel designer. Join the mini course today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(245,158,11,0.3)] text-lg tracking-tight">
                    Enroll Now
                </button>
</div>
<div className="mt-8 flex justify-center items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="">Secure Checkout • Instant Access</span>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 z-20 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">
                Frequently Asked Questions
            </h2>
<div className="space-y-2">

<details className="group bg-neutral-900/20 border border-white/5 rounded-lg open:bg-neutral-900/40 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none p-5">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                            Do I need experience?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-neutral-400 text-sm px-5 pb-5 leading-relaxed border-t border-white/5 pt-4">
                        None! This course is designed for absolute beginners. We start from the very basics of what a funnel is.
                    </div>
</details>

<details className="group bg-neutral-900/20 border border-white/5 rounded-lg open:bg-neutral-900/40 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none p-5">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                            Is this for me if I am working full time?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-neutral-400 text-sm px-5 pb-5 leading-relaxed border-t border-white/5 pt-4">
                        Yes. This is a mini-course designed to be consumed quickly so you can start executing. You can learn at your own pace.
                    </div>
</details>

<details className="group bg-neutral-900/20 border border-white/5 rounded-lg open:bg-neutral-900/40 transition-colors">
<summary className="flex justify-between items-center cursor-pointer list-none p-5">
<span className="text-neutral-200 font-medium text-sm group-hover:text-amber-500 transition-colors">
                            Do I get lifetime access?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-neutral-400 text-sm px-5 pb-5 leading-relaxed border-t border-white/5 pt-4">
                        Yes! Once you enroll, you have lifetime access to the materials and any future updates to this mini-course.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 z-20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-bold tracking-tighter text-white mb-6 block uppercase" href="#">
                        KISHA<span className="text-amber-500">.</span>DESIGN
                    </a>
<p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">
                        Helping freelancers and SMMs upskill to Funnel Design and land high-paying clients from home.
                    </p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="font-bold text-sm">TikTok</span>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Course</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-amber-500 transition-colors" href="#about">About</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#curriculum">Syllabus</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#bonuses">Bonuses</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-amber-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600">
                    © 2023 Kisha Designs. All rights reserved.
                </div>
<div className="text-xs text-neutral-700 font-bold tracking-widest uppercase">
                    Designed with <svg className="lucide lucide-heart w-3 h-3 inline mx-1" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> in Philippines
                </div>
</div>
</div>
</footer>


    </>
  );
}
