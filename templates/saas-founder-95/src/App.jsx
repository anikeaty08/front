import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Lenis Smooth Scroll Setup
            if (window.innerWidth >= 768) {
                const lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    direction: 'vertical',
                    smooth: true,
                });

                function raf(time) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }
                requestAnimationFrame(raf);

                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) lenis.scrollTo(target);
                    });
                });
            }

            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav :className="scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-6'" className="fixed w-full z-50 transition-all duration-300 border-b">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<a className="text-xl font-medium tracking-tighter flex items-center gap-2 text-white" href="#">
<div className="w-6 h-6 rounded flex items-center justify-center bg-white text-black">
<iconify-icon className="text-sm" icon="solar:infinity-linear" strokeWidth="2"></iconify-icon>
</div>
                FNDR
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="transition-colors tracking-tight hover:text-white" href="#network">The Network</a>
<a className="transition-colors tracking-tight hover:text-white" href="#how-it-works">How it Works</a>
<a className="transition-colors tracking-tight hover:text-white" href="#manifesto">Manifesto</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-normal transition-colors tracking-tight text-zinc-400 hover:text-white" href="#login">Sign In</a>
<a className="text-sm font-medium px-4 py-2 rounded-md transition-colors tracking-tight bg-white text-black hover:bg-zinc-200" href="#apply">Apply for Access</a>
</div>

<button @click="mobileMenu = !mobileMenu" className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon :icon="mobileMenu ? 'solar:close-linear' : 'solar:hamburger-menu-linear'" className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div :className="mobileMenu ? 'max-h-96 py-6' : 'max-h-0 py-0 border-transparent'" className="absolute top-full left-0 w-full border-b md:hidden transition-all duration-300 overflow-hidden max-h-0 py-0 border-transparent bg-black border-white/10">
<div className="flex flex-col gap-4 px-6 text-base font-normal tracking-tight text-zinc-400">
<a @click="mobileMenu = false" className="hover:text-white" href="#network">The Network</a>
<a @click="mobileMenu = false" className="hover:text-white" href="#how-it-works">How it Works</a>
<a @click="mobileMenu = false" className="hover:text-white" href="#manifesto">Manifesto</a>
<div className="h-px my-2 bg-white/10"></div>
<a @click="mobileMenu = false" className="hover:text-white" href="#login">Sign In</a>
<a @click="mobileMenu = false" className="text-white" href="#apply">Apply for Access →</a>
</div>
</div>
</nav>
<main className="">

<section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm text-xs font-normal mb-8 animate-fade-in-up border-white/10 bg-white/5 text-zinc-300">
<span className="w-1.5 h-1.5 rounded-full animate-[pulse-subtle_2s_ease-in-out_infinite] bg-white"></span>
                    Currently accepting Batch #14 applications
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b to-zinc-500 mb-6 animate-fade-in-up leading-[1.1] from-white" style={{animationDelay: '100ms'}}>
                    Stop building in<br/>a vacuum.
                </h1>
<p className="text-lg md:text-xl font-normal max-w-2xl mx-auto tracking-tight mb-10 animate-fade-in-up leading-relaxed text-zinc-400" style={{animationDelay: '200ms'}}>
                    A curated network where B2B SaaS founders exchange product feedback, beta testers, and audience reach with non-competing tools.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
<a className="w-full sm:w-auto text-sm font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200" href="#apply">
                        Apply for Access
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-transparent border text-sm font-normal px-6 py-3 rounded-md transition-colors text-center border-white/10 text-white hover:bg-white/5" href="#how-it-works">
                        Explore the Network
                    </a>
</div>
</div>

<div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-20 animate-fade-in-up" style={{animationDelay: '400ms'}}>
<div className="glass-panel rounded-xl overflow-hidden shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent pointer-events-none z-10 to-black/80"></div>

<div className="h-12 border-b flex items-center px-4 gap-2 bg-[#050505] border-white/10">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<div className="mx-auto text-xs text-zinc-500 font-medium tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:lock-linear" strokeWidth="1.5"></iconify-icon>
                            app.fndr.network/matches
                        </div>
</div>

<div className="p-6 md:p-8 bg-[#050505] grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="space-y-6 hidden md:block border-r pr-6 border-white/5">
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Your Profile</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-md border flex items-center justify-center bg-zinc-900 border-white/10">
<iconify-icon className="text-zinc-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">AnalyticsPro</div>
<div className="text-xs text-zinc-500">B2B SaaS • $5k MRR</div>
</div>
</div>
</div>
<div className="space-y-2">
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Metrics</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-400">Newsletter Subs</span>
<span className="text-white">4,200</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-zinc-400">Active Users</span>
<span className="text-white">850</span>
</div>
</div>
</div>

<div className="md:col-span-2 space-y-4">
<div className="flex justify-between items-center mb-2">
<div className="text-sm font-medium text-white">Suggested Collaborations</div>
<div className="text-xs px-2 py-1 rounded border bg-white/5 text-zinc-400 border-white/5">High Overlap</div>
</div>

<div className="glass-panel p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0 bg-zinc-900 border-white/10">
<span className="text-sm font-medium">MR</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium truncate text-white">MailReach</span>
<span className="text-[10px] text-zinc-500 px-1.5 py-0.5 rounded bg-white/5">Adjacent</span>
</div>
<div className="text-xs truncate text-zinc-400">Email deliverability tool. Matches your audience.</div>
</div>
<div className="w-full sm:w-auto mt-2 sm:mt-0">
<button className="w-full text-xs font-medium px-3 py-1.5 rounded transition-colors bg-white text-black hover:bg-zinc-200">Propose Swap</button>
</div>
</div>

<div className="glass-panel p-4 rounded-lg flex flex-col sm:flex-row gap-4 items-start sm:items-center opacity-75">
<div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0 bg-zinc-900 border-white/10">
<span className="text-sm font-medium text-zinc-400">DB</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium truncate text-white">DataBase.so</span>
<span className="text-[10px] text-zinc-500 px-1.5 py-0.5 rounded bg-white/5">Complementary</span>
</div>
<div className="text-xs truncate text-zinc-400">No-code backend. Looking for beta testers.</div>
</div>
<div className="w-full sm:w-auto mt-2 sm:mt-0">
<button className="w-full bg-transparent border text-xs font-medium px-3 py-1.5 rounded transition-colors border-white/10 text-white hover:bg-white/5">View Profile</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#020202] py-8 overflow-hidden relative border-white/5">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10"></div>
<div className="flex items-center gap-8 md:gap-16 w-max animate-scroll">

<div className="flex items-center gap-16 px-8 text-zinc-600">
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:planet-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">AcmeCorp</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">FlashData</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:shield-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">SecureAuth</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">BlockStack</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">NexusDB</span></div>
</div>

<div className="flex items-center gap-16 px-8 text-zinc-600">
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:planet-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">AcmeCorp</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">FlashData</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:shield-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">SecureAuth</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">BlockStack</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon><span className="text-sm font-medium tracking-tight">NexusDB</span></div>
</div>
</div>
</section>

<section className="py-16 border-b bg-black border-white/5">
<div className="max-w-7xl mx-auto px-6 reveal">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
<div className="px-4 text-center md:text-left">
<div className="text-xs text-zinc-500 font-normal tracking-tight mb-1">Total Reach Exchanged</div>
<div className="text-3xl md:text-4xl font-normal tracking-tighter text-white">2.4M+</div>
</div>
<div className="px-4 text-center md:text-left">
<div className="text-xs text-zinc-500 font-normal tracking-tight mb-1">Active Founders</div>
<div className="text-3xl md:text-4xl font-normal tracking-tighter text-white">850+</div>
</div>
<div className="px-4 text-center md:text-left">
<div className="text-xs text-zinc-500 font-normal tracking-tight mb-1">Successful Swaps</div>
<div className="text-3xl md:text-4xl font-normal tracking-tighter text-white">12k</div>
</div>
<div className="px-4 text-center md:text-left">
<div className="text-xs text-zinc-500 font-normal tracking-tight mb-1">Avg. CAC Reduction</div>
<div className="text-3xl md:text-4xl font-normal tracking-tighter text-white">100%</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="network">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4 leading-[1.1] text-white">Infrastructure for zero-CAC growth.</h2>
<p className="text-base tracking-tight leading-relaxed text-zinc-400">Stop paying platforms for access to your own potential users. We algorithmically match you with founders who serve the same persona, but solve a different problem.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[300px]">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group subtle-glow reveal">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-xl text-zinc-400" icon="solar:radar-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white">Audience Overlap Engine</h3>
</div>
<p className="text-sm text-zinc-400">Our system analyzes user demographics to find non-competing products with &gt;80% audience overlap.</p>
</div>

<div className="absolute -bottom-10 -right-10 w-64 h-64 md:w-80 md:h-80 bg-[#0A0A0A] rounded-full border flex items-center justify-center opacity-50 group-hover:opacity-100 transition-all duration-700 border-white/10">
<div className="w-48 h-48 md:w-60 md:h-60 rounded-full border flex items-center justify-center relative border-white/5">
<div className="absolute w-32 h-32 rounded-full border -left-4 mix-blend-screen border-zinc-700/50 bg-white/5"></div>
<div className="absolute w-32 h-32 rounded-full border right-0 mix-blend-screen border-zinc-700/50 bg-white/5"></div>
<div className="flex z-20 text-xs font-mono absolute top-0 right-0 bottom-0 left-0 items-center justify-center text-white/50"><img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c6792c9-df94-4d30-ab39-19acf0000479_800w.png"/>92% MATCH</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group subtle-glow reveal reveal-delay-1">
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-xl text-zinc-400" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white">Strictly Vetted</h3>
</div>
<p className="text-sm mb-auto text-zinc-400">Only real products with traction. No vaporware, no agencies, no spam.</p>
<div className="mt-6 flex flex-col gap-2">
<div className="flex items-center gap-3 text-xs text-zinc-500 p-2 rounded border bg-white/5 border-white/5">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Identity Verified
                                </div>
<div className="flex items-center gap-3 text-xs text-zinc-500 p-2 rounded border bg-white/5 border-white/5">
<iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Active MRR Confirmed
                                </div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group subtle-glow reveal">
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-xl text-zinc-400" icon="solar:settings-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white">Auto-Routing</h3>
</div>
<p className="text-sm mb-6 text-zinc-400">Set your parameters and let the network route relevant collaboration requests to your inbox.</p>

<div className="mt-auto bg-[#050505] border rounded-lg p-3 flex justify-between items-center border-white/10">
<span className="text-xs font-medium tracking-tight text-zinc-400">Accepting Beta Testers</span>
<div className="w-8 h-4 rounded-full relative cursor-pointer bg-white">
<div className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full shadow bg-black"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group subtle-glow reveal reveal-delay-1 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1 max-w-sm">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-xl text-zinc-400" icon="solar:hand-shake-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white">Symmetric Value Exchange</h3>
</div>
<p className="text-sm mb-4 text-zinc-400">Trade newsletter shoutouts, in-app placements, or deep product feedback. The network enforces a 1:1 value ratio to ensure fairness.</p>
<a className="text-xs border-b pb-0.5 transition-colors text-white border-white/30 hover:border-white" href="#">Read our fair-trade manifesto →</a>
</div>
<div className="flex-1 w-full bg-[#050505] border rounded-xl p-4 flex flex-col gap-3 relative border-white/10">

<div className="flex items-start gap-3 opacity-60">
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs bg-zinc-800">A</div>
<div className="border rounded-lg rounded-tl-none p-3 text-xs w-full bg-zinc-900 border-white/5 text-zinc-400">
                                    Will trade a mention in our newsletter (3k subs) for 5 deep QA sessions.
                                </div>
</div>
<div className="flex items-start gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-medium bg-white text-black">You</div>
<div className="border rounded-lg rounded-tr-none p-3 text-xs w-full text-right bg-white/10 border-white/20 text-white">
                                    Deal. Sending over the staging link now.
                                </div>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-32 relative border-t overflow-hidden border-white/5 bg-black">

<div className="absolute inset-0 z-0 flex items-center justify-center">
<div className="w-full max-w-lg h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 leading-[1.1] text-white">Engagement Engine Workflow.</h2>
<p className="text-base tracking-tight leading-relaxed mb-8 text-zinc-400">Whenever a new action occurs, the platform automatically generates engagement opportunities. Turn a single update into a synchronized cascade of distribution events.</p>
<div className="flex flex-col gap-4 text-sm text-zinc-400">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="tracking-tight">Zero manual data entry required</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="tracking-tight">Algorithmic audience targeting</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-white" icon="solar:check-circle-linear"></iconify-icon>
<span className="tracking-tight">Instant multi-channel distribution</span>
</div>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="relative w-full max-w-md">

<div className="absolute left-[19px] top-10 bottom-10 w-px bg-gradient-to-b to-transparent from-white/30 via-white/10"></div>
<div className="flex flex-col gap-4">

<div className="relative z-10 flex items-center gap-5 reveal">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white">
<iconify-icon className="text-lg text-black" icon="solar:box-linear"></iconify-icon>
</div>
<div className="glass-panel px-5 py-4 rounded-xl flex-1 subtle-glow border-white/20 bg-white/5">
<div className="text-[10px] font-mono mb-1 tracking-wider text-zinc-400">TRIGGER</div>
<div className="text-sm font-medium tracking-tight text-white">New tool posted</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-5 reveal reveal-delay-1 mt-2">
<div className="w-10 h-10 rounded-full bg-[#050505] border flex items-center justify-center shrink-0 border-white/10">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="glass-panel px-5 py-3.5 rounded-lg flex-1 relative overflow-hidden group border-white/5">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/5"></div>
<div className="text-sm font-medium tracking-tight text-zinc-300">Create discovery feed post</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-5 reveal reveal-delay-1">
<div className="w-10 h-10 rounded-full bg-[#050505] border flex items-center justify-center shrink-0 border-white/10">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<div className="glass-panel px-5 py-3.5 rounded-lg flex-1 relative overflow-hidden group border-white/5">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/5"></div>
<div className="text-sm font-medium tracking-tight text-zinc-300">Create feedback tasks</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-5 reveal reveal-delay-1">
<div className="w-10 h-10 rounded-full bg-[#050505] border flex items-center justify-center shrink-0 border-white/10">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:user-id-linear"></iconify-icon>
</div>
<div className="glass-panel px-5 py-3.5 rounded-lg flex-1 relative overflow-hidden group border-white/5">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/5"></div>
<div className="text-sm font-medium tracking-tight text-zinc-300">Create tester request card</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-5 reveal reveal-delay-1">
<div className="w-10 h-10 rounded-full bg-[#050505] border flex items-center justify-center shrink-0 border-white/10">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:chat-square-linear"></iconify-icon>
</div>
<div className="glass-panel px-5 py-3.5 rounded-lg flex-1 relative overflow-hidden group border-white/5">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/5"></div>
<div className="text-sm font-medium tracking-tight text-zinc-300">Generate discussion prompt</div>
</div>
</div>

<div className="relative z-10 flex items-center gap-5 reveal reveal-delay-2 mt-2">
<div className="w-10 h-10 rounded-full bg-[#050505] border flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)] border-white/10">
<div className="w-2.5 h-2.5 rounded-full animate-pulse bg-white"></div>
</div>
<div className="px-5 py-2 flex-1">
<div className="text-sm font-medium tracking-tight flex items-center gap-2 text-white">
                                    Send notifications
                                </div>
<div className="text-xs text-zinc-500 mt-1 tracking-tight">Alerts dispatched to relevant founder matches.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#020202] border-t pt-32 pb-32 border-white/5" id="how-it-works">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-24 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4 text-white">How the exchange works.</h2>
<p className="tracking-tight text-zinc-400">A deterministic protocol for audience growth.</p>
</div>
<div className="relative border-l ml-4 md:ml-0 md:border-none space-y-16 border-white/10">

<div className="relative pl-8 md:pl-0 md:flex items-center gap-12 group reveal">
<div className="absolute left-0 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity hidden md:block from-white"></div>
<div className="md:w-1/2 md:text-right pr-0 md:pr-12 relative">
<div className="absolute left-[-37px] top-1 w-6 h-6 rounded-full bg-[#020202] border flex items-center justify-center md:hidden border-white/20">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
<div className="text-sm font-medium mb-2 tracking-tight text-white">01. Profile Initialization</div>
<p className="text-sm text-zinc-500 leading-relaxed">Connect your product. Define your target audience, current metrics, and what you're willing to offer (newsletters, testing, integration).</p>
</div>
<div className="hidden md:flex w-12 h-12 rounded-full border bg-[#0A0A0A] items-center justify-center shrink-0 relative z-10 group-hover:border-white/30 transition-colors border-white/10">
<span className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">01</span>
</div>
<div className="hidden md:block md:w-1/2 pl-12">
<div className="h-24 glass-panel rounded-lg w-full flex items-center px-4 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-white"></div>
<div className="space-y-2 w-full">
<div className="h-2 rounded w-1/3 bg-white/10"></div>
<div className="w-2/3 h-2 rounded bg-emerald-400/10"></div>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-0 md:flex items-center gap-12 flex-row-reverse group reveal">
<div className="md:w-1/2 pl-0 md:pl-12 relative">
<div className="absolute left-[-37px] top-1 w-6 h-6 rounded-full bg-[#020202] border flex items-center justify-center md:hidden border-white/20">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
<div className="text-sm font-medium mb-2 tracking-tight text-white">02. Algorithm Matching</div>
<p className="text-sm text-zinc-500 leading-relaxed">Our engine scans the network to find products serving your exact ICP without competing with your core feature set.</p>
</div>
<div className="hidden md:flex w-12 h-12 rounded-full border bg-[#0A0A0A] items-center justify-center shrink-0 relative z-10 group-hover:border-white/30 transition-colors border-white/10">
<span className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">02</span>
</div>
<div className="hidden md:block md:w-1/2 pr-12">
<div className="h-24 glass-panel rounded-lg w-full flex items-center justify-center relative overflow-hidden gap-4">
<div className="w-8 h-8 rounded-full border flex items-center justify-center border-white/20"><iconify-icon className="text-zinc-500 text-xs" icon="solar:user-linear"></iconify-icon></div>
<div className="w-12 h-px relative bg-white/20"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] bg-[#0A0A0A] px-1 text-white">SYNC</div></div>
<div className="w-8 h-8 rounded-full border flex items-center justify-center border-white/20"><iconify-icon className="text-zinc-500 text-xs" icon="solar:user-circle-linear"></iconify-icon></div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-0 md:flex items-center gap-12 group reveal">
<div className="md:w-1/2 md:text-right pr-0 md:pr-12 relative">
<div className="absolute left-[-37px] top-1 w-6 h-6 rounded-full bg-[#020202] border flex items-center justify-center md:hidden border-white/20">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
<div className="text-sm font-medium mb-2 tracking-tight text-white">03. Establish Protocol</div>
<p className="text-sm text-zinc-500 leading-relaxed">Review the proposed exchange. Accept, decline, or negotiate terms directly within our secure messaging interface.</p>
</div>
<div className="hidden md:flex w-12 h-12 rounded-full border bg-[#0A0A0A] items-center justify-center shrink-0 relative z-10 group-hover:border-white/30 transition-colors border-white/10">
<span className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">03</span>
</div>
<div className="hidden md:block md:w-1/2 pl-12">
<div className="h-24 glass-panel rounded-lg w-full flex items-center justify-center relative overflow-hidden">
<div className="text-xs px-3 py-1.5 rounded font-medium shadow-lg bg-white text-black">Confirm Exchange</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="apply">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
</div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4 text-white">Request Access.</h2>
<p className="text-sm tracking-tight text-zinc-400">Currently reviewing applications for Batch #14. We maintain strict quality control to ensure value for all members.</p>
</div>
<div className="glass-panel rounded-2xl p-6 md:p-8 reveal reveal-delay-1">
<form className="space-y-5">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium">Full Name</label>
<input className="w-full bg-[#050505] border rounded-lg px-4 py-3 placeholder-zinc-700 text-sm focus:outline-none focus:border-white/30 transition-colors border-white/10 text-white" placeholder="Lee Robinson" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium">Startup URL</label>
<input className="w-full bg-[#050505] border rounded-lg px-4 py-3 placeholder-zinc-700 text-sm focus:outline-none focus:border-white/30 transition-colors border-white/10 text-white" placeholder="https://yourstartup.com" type="url"/>
</div>

<div className="space-y-1.5" x-data="{ open: false, selected: 'Select MRR Range' }">
<label className="text-xs text-zinc-500 font-medium">Current MRR (Confidential)</label>
<div className="relative">
<button :className="selected === 'Select MRR Range' ? 'text-zinc-700' : 'text-white'" @click="open = !open" className="w-full bg-[#050505] border rounded-lg px-4 py-3 text-sm flex justify-between items-center text-left transition-colors focus:outline-none focus:border-white/30 border-white/10 text-zinc-700" type="button">
<span x-text="selected">Select MRR Range</span>
<iconify-icon :className="open ? 'rotate-180' : ''" className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div @click.away="open = false" className="absolute top-full left-0 w-full mt-1 bg-[#0A0A0A] border rounded-lg overflow-hidden z-20 shadow-xl border-white/10" style={{display: 'none'}} x-show="open">
<div className="p-1 flex flex-col gap-1">
<div @click="selected = 'Pre-revenue (Beta)'; open = false" className="px-3 py-2 text-sm rounded cursor-pointer transition-colors text-zinc-300 hover:bg-white/5 hover:text-white">Pre-revenue (Beta)</div>
<div @click="selected = '$0 - $1k'; open = false" className="px-3 py-2 text-sm rounded cursor-pointer transition-colors text-zinc-300 hover:bg-white/5 hover:text-white">$0 - $1k</div>
<div @click="selected = '$1k - $10k'; open = false" className="px-3 py-2 text-sm rounded cursor-pointer transition-colors text-zinc-300 hover:bg-white/5 hover:text-white">$1k - $10k</div>
<div @click="selected = '$10k+'; open = false" className="px-3 py-2 text-sm rounded cursor-pointer transition-colors text-zinc-300 hover:bg-white/5 hover:text-white">$10k+</div>
</div>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full text-sm font-medium py-3 rounded-lg transition-colors flex justify-center items-center gap-2 group bg-white text-black hover:bg-zinc-200" type="submit">
                                Submit Application
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-center mt-4 text-zinc-600">By applying, you agree to our strict no-spam and fair-exchange manifesto.</p>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t pt-16 pb-8 relative overflow-hidden border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 reveal">
<div>
<a className="text-xl font-medium tracking-tighter flex items-center gap-2 mb-4 text-white" href="#">
<div className="w-6 h-6 rounded border flex items-center justify-center border-white/20 text-white">
<iconify-icon className="text-sm" icon="solar:infinity-linear" strokeWidth="2"></iconify-icon>
</div>
                        FNDR
                    </a>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">The private protocol for SaaS builders to exchange distribution, QA, and growth.</p>
</div>
<div className="flex gap-12 md:gap-24 text-sm">
<div className="flex flex-col gap-3">
<span className="font-medium mb-1 text-white">Platform</span>
<a className="text-zinc-500 transition-colors hover:text-white" href="#">Directory</a>
<a className="text-zinc-500 transition-colors hover:text-white" href="#">Manifesto</a>
<a className="text-zinc-500 transition-colors hover:text-white" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-medium mb-1 text-white">Legal</span>
<a className="text-zinc-500 transition-colors hover:text-white" href="#">Privacy</a>
<a className="text-zinc-500 transition-colors hover:text-white" href="#">Terms</a>
<a className="text-zinc-500 transition-colors hover:text-white" href="#">Code of Conduct</a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono reveal reveal-delay-1 border-white/5 text-zinc-600">
<div>© 2024 Founder Network (FNDR). All rights reserved.</div>
<div className="flex items-center gap-4">
<span>System Status: Operational</span>
<span className="w-2 h-2 rounded-full animate-pulse bg-white/50"></span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none select-none leading-none z-0 mix-blend-screen w-full text-center">
            FNDR
        </div>
</footer>



    </>
  );
}
