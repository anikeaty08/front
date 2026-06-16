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
            // High-tech Intersection Observer for scroll animations
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-stagger').forEach((el) => observer.observe(el));

            // Navbar Active Highlight Logic for Dark Theme
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    // Adjusted offset for earlier triggering
                    if (pageYOffset >= (sectionTop - 250)) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-rose-900/20 blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-amber-900/10 blur-[150px] mix-blend-screen"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-medium tracking-tight text-lg text-white uppercase tracking-widest flex items-center gap-2" href="#">
<div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                HEARTSHARE
            </a>
<nav className="hidden md:flex items-center gap-2 bg-zinc-900/50 p-1 rounded-full border border-white/5 shadow-2xl backdrop-blur-md">
<a className="nav-link px-5 py-1.5 rounded-full text-sm font-normal text-zinc-400 border border-transparent hover:text-white hover:bg-white/5 transition-all" href="#index">The Index</a>
<a className="nav-link px-5 py-1.5 rounded-full text-sm font-normal text-zinc-400 border border-transparent hover:text-white hover:bg-white/5 transition-all" href="#how-it-works">How it works</a>
<a className="nav-link px-5 py-1.5 rounded-full text-sm font-normal text-zinc-400 border border-transparent hover:text-white hover:bg-white/5 transition-all" href="#impact">Impact</a>
</nav>
<a className="inline-flex items-center justify-center rounded-full bg-white text-zinc-950 px-5 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#contact">
                Request a private introduction
            </a>
</div>
</header>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden z-10">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-rose-300 tracking-widest uppercase mb-8 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                A New Standard
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Your Customers are Satisfied. <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 text-glow">So Why Are They Leaving?</span>
</h1>
<p className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-300 mt-8 mb-6 max-w-3xl mx-auto leading-tight">
                We make customer relationships measurable, comparable, and actionable.
            </p>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Heart Share transforms customer data into a structured understanding of emotional loyalty, evaluates how ready an organization is to act on it, and translates everything into clear strategic direction.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-amber-600 text-white px-8 py-3.5 text-sm font-medium hover:from-rose-400 hover:to-amber-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] transition-all duration-300" href="#contact">
                    Request a private introduction
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent -z-10"></div>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-rose-500/50"></div>
<span className="text-xs font-medium tracking-widest uppercase text-rose-400">What Heart Share Delivers</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                        Understanding relationships.
                    </h2>
<h3 className="text-2xl md:text-3xl font-normal tracking-tight text-zinc-500 mt-2">
                        Structuring decisions.
                    </h3>
<p className="text-base text-zinc-400 font-light mt-8 leading-relaxed border-l border-white/10 pl-6 py-2">
                        Customer relationships are complex, layered, and often misunderstood, but they are essential for businesses. The bond between customers and brands is what truly drives your business.
                    </p>
</div>
<div className="lg:col-span-7 flex flex-col gap-4">
<p className="text-sm font-medium text-white mb-2 tracking-wide uppercase">Heart Share provides:</p>

<div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-rose-500/50 hover:to-amber-500/50 transition-all duration-500 scroll-stagger">
<div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
<div className="relative flex items-start gap-5 p-6 rounded-2xl bg-zinc-950/90 backdrop-blur-xl h-full">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-colors">
<iconify-icon className="text-zinc-400 text-xl group-hover:text-rose-400 transition-colors" icon="solar:chart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-base text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">A clear measure of emotional loyalty, through our <span className="font-medium text-white group-hover:text-rose-300 transition-colors">Heart Share Index</span>.</p>
</div>
</div>
</div>
<div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-rose-500/50 hover:to-amber-500/50 transition-all duration-500 scroll-stagger" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
<div className="relative flex items-start gap-5 p-6 rounded-2xl bg-zinc-950/90 backdrop-blur-xl h-full">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-colors">
<iconify-icon className="text-zinc-400 text-xl group-hover:text-rose-400 transition-colors" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-base text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">A structured assessment of the organization’s ability to act, through our <span className="font-medium text-white group-hover:text-rose-300 transition-colors">Organizational Readiness</span>.</p>
</div>
</div>
</div>
<div className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-rose-500/50 hover:to-amber-500/50 transition-all duration-500 scroll-stagger" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
<div className="relative flex items-start gap-5 p-6 rounded-2xl bg-zinc-950/90 backdrop-blur-xl h-full">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-colors">
<iconify-icon className="text-zinc-400 text-xl group-hover:text-rose-400 transition-colors" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-base text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">A comprehensive report translating insights into strategic priorities and suggested action areas.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative">
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4 block">The Limits of Traditional Metrics</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8">
                What most companies measure is not enough
            </h2>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-16">
                Most organizations rely on satisfaction, NPS, and behavioral data to guide decisions. These metrics describe what customers do, but not <span className="text-white font-medium">why</span> they stay, leave, or advocate.
            </p>

<div className="relative py-12 px-6 rounded-3xl bg-zinc-900/20 border border-white/5 backdrop-blur-sm scroll-stagger">

<div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent -translate-y-1/2 hidden md:block"></div>
<div className="absolute top-[10%] bottom-[10%] left-1/2 w-px bg-gradient-to-b from-transparent via-rose-500/50 to-transparent -translate-x-1/2 md:hidden"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-zinc-950 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center mb-6 relative group-hover:border-rose-500/50 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] transition-all duration-500 z-10">
<div className="w-2 h-2 rounded-full bg-zinc-500 group-hover:bg-rose-400 group-hover:scale-150 transition-all duration-500"></div>
</div>
<p className="text-lg text-zinc-300 font-medium group-hover:text-white transition-colors">Satisfaction</p>
<p className="text-sm text-zinc-500 font-light mt-2">captures an outcome.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-zinc-950 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center mb-6 relative group-hover:border-rose-500/50 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] transition-all duration-500 z-10">
<div className="w-2 h-2 rounded-full bg-zinc-500 group-hover:bg-rose-400 group-hover:scale-150 transition-all duration-500"></div>
</div>
<p className="text-lg text-zinc-300 font-medium group-hover:text-white transition-colors">Behavior</p>
<p className="text-sm text-zinc-500 font-light mt-2">captures a signal.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-zinc-950 border border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.2)] flex items-center justify-center mb-6 relative group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.4)] transition-all duration-500 z-10">
<iconify-icon className="text-rose-400 text-2xl" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xl text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-amber-400">But neither captures</p>
<p className="text-lg text-rose-300 font-medium mt-1">the relationship.</p>
</div>
</div>
</div>
<p className="text-sm font-light text-zinc-500 mt-12 max-w-xl mx-auto">
                Loyalty is not transactional. It is built on emotional connection. And without measuring it, decisions remain incomplete.
            </p>
</div>
</section>

<section className="py-24 px-6 scroll-mt-20 relative z-10" id="index">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
                    A Dual System:<br className="hidden md:block"/> <span className="text-zinc-500">Understanding and Execution</span>
</h2>
<p className="text-base text-zinc-400 font-light mt-6 max-w-2xl mx-auto">Measuring relationships is not enough. The ability to act defines results. That's why we plan for action.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative overflow-hidden p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-rose-500/30 group transition-all duration-700">
<div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[80px] group-hover:bg-rose-500/20 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-zinc-950/50 border border-white/10 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-rose-500/50 transition-all duration-500">
<iconify-icon className="text-rose-400 text-3xl group-hover:drop-shadow-[0_0_10px_rgba(244,63,94,0.5)] transition-all" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Heart Share Index</h3>
<p className="text-xs font-medium text-rose-400/80 mb-6 uppercase tracking-widest">Assessment is the secret of any relationship</p>
<div className="space-y-4 text-base text-zinc-400 font-light leading-relaxed">
<p>
                                Measures the strength of customer relationships across six emotional dimensions. It captures not only what customers do, but how they feel, perceive, and connect.
                            </p>
<p className="text-sm text-zinc-500">
                                It provides benchmarking, gap identification, and a clear view of relationship quality over time.
                            </p>
</div>
</div>
</div>

<div className="relative overflow-hidden p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-amber-500/30 group transition-all duration-700">
<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-zinc-950/50 border border-white/10 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-500">
<iconify-icon className="text-amber-400 text-3xl group-hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Organizational Readiness</h3>
<p className="text-xs font-medium text-amber-400/80 mb-6 uppercase tracking-widest">Insight alone does not create change</p>
<div className="space-y-4 text-base text-zinc-400 font-light leading-relaxed">
<p>
                                Evaluates how effectively a company can translate understanding into action, across capabilities, alignment, processes, governance, and data.
                            </p>
<p className="text-sm text-zinc-500">
                                It identifies what enables execution, and what silently blocks it.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 scroll-mt-20 relative z-10" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:w-1/2">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-amber-500/50"></div>
<span className="text-xs font-medium tracking-widest uppercase text-amber-400">How It Works</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                    Every organization already has the data.
                </h2>
<p className="text-base text-zinc-400 font-light leading-relaxed">
                    What’s missing is a way to interpret, structure it and integrate it with what consumers actually say and think.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

<div className="group relative overflow-hidden rounded-3xl bg-zinc-900/20 border border-white/5 p-8 md:p-10 hover:border-white/20 transition-colors duration-500 scroll-stagger">
<div className="absolute -right-4 -bottom-4 text-[120px] font-medium text-white/[0.02] leading-none pointer-events-none group-hover:text-white/[0.04] group-hover:scale-110 transition-all duration-700">01</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-white mb-4 flex items-center gap-3">
<iconify-icon className="text-rose-400 text-2xl" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Capture
                        </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                            We integrate data across customer touchpoints, systems, and interactions, into a unique set of scores - our Heart Share Index.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-zinc-900/20 border border-white/5 p-8 md:p-10 hover:border-white/20 transition-colors duration-500 scroll-stagger" style={{transitionDelay: '100ms'}}>
<div className="absolute -right-4 -bottom-4 text-[120px] font-medium text-white/[0.02] leading-none pointer-events-none group-hover:text-white/[0.04] group-hover:scale-110 transition-all duration-700">02</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-white mb-4 flex items-center gap-3">
<iconify-icon className="text-amber-400 text-2xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Decode
                        </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                            AI identifies patterns and the emotional drivers behind behavior.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-zinc-900/20 border border-white/5 p-8 md:p-10 hover:border-white/20 transition-colors duration-500 scroll-stagger" style={{transitionDelay: '200ms'}}>
<div className="absolute -right-4 -bottom-4 text-[120px] font-medium text-white/[0.02] leading-none pointer-events-none group-hover:text-white/[0.04] group-hover:scale-110 transition-all duration-700">03</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-white mb-4 flex items-center gap-3">
<iconify-icon className="text-rose-400 text-2xl" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Quantify
                        </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                            The Index translates complexity into a clear, structured measure of relationship strength.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-zinc-900/20 border border-white/5 p-8 md:p-10 hover:border-white/20 transition-colors duration-500 scroll-stagger" style={{transitionDelay: '300ms'}}>
<div className="absolute -right-4 -bottom-4 text-[120px] font-medium text-white/[0.02] leading-none pointer-events-none group-hover:text-white/[0.04] group-hover:scale-110 transition-all duration-700">04</div>
<div className="relative z-10">
<h3 className="text-xl font-medium tracking-tight text-white mb-4 flex items-center gap-3">
<iconify-icon className="text-amber-400 text-2xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Activate
                        </h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
                            Insights are translated into priorities, decisions, and concrete actions.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-zinc-900/20 to-zinc-950">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1">
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4 block">Output: The Report</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Where insights become direction
                    </h2>
<p className="text-base text-zinc-400 font-light leading-relaxed mb-10">
                        All findings are consolidated into a structured report designed for decision-making. 
                    </p>
<div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 mb-10 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h2 className="relative text-xl md:text-2xl font-normal tracking-tight text-white z-10">
                            Not a dashboard. Not a collection of data.<br/>
<span className="mt-2 block font-medium bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-amber-400">A clear, strategic, shared point of view.</span>
</h2>
</div>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base text-zinc-300 font-light">A complete analysis of the Heart Share Index assessment</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base text-zinc-300 font-light">Organizational Readiness assessment: Key strengths and critical gaps</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base text-zinc-300 font-light">Clear, prioritized strategic approach and recommended actions</p>
</div>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed border-l border-zinc-800 pl-4">
                        Workshops and interviews with the company teams build an aligned and shared plan, immediately actionable and ready for top management presentation. It aligns teams, clarifies priorities, and creates direction.
                    </p>
</div>

<div className="order-1 lg:order-2 relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col p-8 overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(244,63,94,0.15)] transition-all duration-700">

<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-[40px]"></div>
<div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-500/20 rounded-full blur-[50px]"></div>

<div className="relative z-10 flex-1 flex flex-col">
<div className="flex justify-between items-center border-b border-white/10 pb-4 mb-8">
<div className="text-[10px] font-medium text-rose-400 tracking-widest uppercase">Strategic Output</div>
<iconify-icon className="text-zinc-500 text-lg" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div className="text-[10px] font-medium text-zinc-500 tracking-widest uppercase mb-2">Confidential Report</div>
<h3 className="text-4xl font-medium tracking-tight text-white leading-none mb-3">HEARTSHARE</h3>
<h4 className="text-lg font-light text-zinc-400 mb-auto">Relationship Analysis &amp; Strategy</h4>

<div className="mt-12 space-y-4 w-full">

<div className="flex items-end gap-2 h-32 border-b border-white/10 pb-2">
<div className="w-1/4 bg-white/5 h-[30%] rounded-t-sm backdrop-blur-sm border border-white/10 border-b-0"></div>
<div className="w-1/4 bg-white/10 h-[60%] rounded-t-sm backdrop-blur-sm border border-white/10 border-b-0"></div>
<div className="w-1/4 bg-gradient-to-t from-rose-500/80 to-rose-400 h-[100%] rounded-t-sm shadow-[0_0_15px_rgba(244,63,94,0.4)]"></div>
<div className="w-1/4 bg-gradient-to-t from-amber-500/80 to-amber-400 h-[80%] rounded-t-sm shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
</div>

<div className="w-full flex gap-2">
<div className="h-1 w-full bg-white/20 rounded-full"></div>
<div className="h-1 w-1/3 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div>
</div>
<div className="h-1 w-2/3 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 scroll-mt-20 relative z-10" id="impact">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4 block">Impact</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    What changes when relationships become measurable
                </h2>
<p className="text-base text-zinc-400 font-light max-w-2xl mx-auto">
                    When companies understand the true nature of the relationship with their customers:
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group scroll-stagger">
<iconify-icon className="text-zinc-600 group-hover:text-rose-400 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-zinc-300 font-light group-hover:text-white transition-colors">Retention becomes <span className="font-medium text-rose-300">predictable</span></span>
</div>
<div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group scroll-stagger" style={{transitionDelay: '50ms'}}>
<iconify-icon className="text-zinc-600 group-hover:text-amber-400 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-zinc-300 font-light group-hover:text-white transition-colors">Advocacy becomes a <span className="font-medium text-amber-300">growth driver</span></span>
</div>
<div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group scroll-stagger" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-zinc-600 group-hover:text-rose-400 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-zinc-300 font-light group-hover:text-white transition-colors">Marketing becomes <span className="font-medium text-rose-300">more efficient</span></span>
</div>
<div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group scroll-stagger" style={{transitionDelay: '150ms'}}>
<iconify-icon className="text-zinc-600 group-hover:text-amber-400 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-zinc-300 font-light group-hover:text-white transition-colors">Investments become <span className="font-medium text-amber-300">focused</span></span>
</div>
<div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group scroll-stagger" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-zinc-600 group-hover:text-rose-400 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-zinc-300 font-light group-hover:text-white transition-colors">Teams align around a <span className="font-medium text-rose-300">shared understanding</span></span>
</div>
<div className="flex items-center gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group scroll-stagger" style={{transitionDelay: '250ms'}}>
<iconify-icon className="text-zinc-600 group-hover:text-amber-400 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-zinc-300 font-light group-hover:text-white transition-colors">Strategy becomes <span className="font-medium text-amber-300">easier to execute</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative z-10" id="contact">
<div className="max-w-5xl mx-auto rounded-[2.5rem] p-[1px] bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-amber-500/10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative bg-zinc-950/80 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-20 text-center border border-white/5">
<span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">
                    Beyond Loyalty plans
                </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto">
                    We structure how organizations understand and grow the bond with their customers.
                </h2>
<p className="text-base md:text-lg text-zinc-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
                    Bringing visibility to what was previously invisible, and direction to what was previously uncertain.
                </p>
<div className="flex flex-col items-center justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-white text-zinc-950 px-8 py-4 text-sm font-medium hover:bg-zinc-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 w-full sm:w-auto" href="#">
                        Request a private introduction
                    </a>
<p className="text-xs text-zinc-500 font-light mt-3 max-w-xs mx-auto">A tailored walkthrough of the Heart Share system and its application to your business.</p>
</div>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5 text-center relative z-10 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-medium tracking-tight text-sm text-zinc-600 uppercase tracking-widest flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                HEARTSHARE
            </div>
<p className="text-xs text-zinc-600 font-light">© 2024 Heart Share. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
