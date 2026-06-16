import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal, .reveal-scale');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-0 left-1/4 w-3/4 h-3/4 bg-indigo-900/10 rounded-full blur-[120px] opacity-40"></div>
<div className="absolute bottom-0 right-1/4 w-2/3 h-2/3 bg-violet-900/10 rounded-full blur-[100px] opacity-30"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-12 shadow-2xl shadow-black/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">a</div>
<span className="text-white font-medium tracking-tight">arora</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Ecosystem</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Ventures</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Stories</a>
</div>
<a className="bg-white text-neutral-950 px-5 py-2 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2" href="#">
                Start Journey
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</nav>
</div>
<main className="pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-32">

<section className="flex flex-col items-center text-center relative">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                    The Future of Medical Operations
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1] mb-8 max-w-4xl mx-auto">
                    From <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">cure</span> to <span className="italic font-serif font-light text-indigo-200">care.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto mb-12 font-light">
                    We build the silent operational infrastructure that allows medical providers to focus purely on the human experience.
                </p>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px] md:h-[600px] reveal reveal-delay-200">

<div className="md:col-span-8 relative rounded-3xl overflow-hidden group">
<img alt="Doctor and Patient" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-pulse-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">Patient Focus</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">By automating compliance, providers spend 40% more time face-to-face with patients.</p>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4 h-full">

<div className="flex-1 bg-neutral-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-indigo-500" icon="solar:graph-up-linear" width="80"></iconify-icon>
</div>
<h3 className="text-5xl font-medium text-white mb-2 tracking-tight">2.5x</h3>
<p className="text-sm text-neutral-400">Average revenue growth for partner clinics within 12 months.</p>
</div>

<div className="flex-1 relative bg-indigo-950 rounded-3xl overflow-hidden border border-white/5">
<img alt="Abstract" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 py-10 relative overflow-hidden bg-neutral-900/30">
<div className="flex gap-16 animate-[scroll_30s_linear_infinite] w-max whitespace-nowrap items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-2xl font-semibold text-white tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:atom-linear"></iconify-icon> NEXUS HEALTH</span>
<span className="text-2xl font-serif italic text-white tracking-tight">Clarify.</span>
<span className="text-2xl font-bold text-white tracking-tight flex items-center gap-2"><iconify-icon icon="solar:medical-kit-linear"></iconify-icon> MEDCORE</span>
<span className="text-2xl font-light text-white tracking-[0.2em] uppercase">Aveline</span>
<span className="text-2xl font-medium text-white tracking-tight">BioSync</span>

<span className="text-2xl font-semibold text-white tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:atom-linear"></iconify-icon> NEXUS HEALTH</span>
<span className="text-2xl font-serif italic text-white tracking-tight">Clarify.</span>
<span className="text-2xl font-bold text-white tracking-tight flex items-center gap-2"><iconify-icon icon="solar:medical-kit-linear"></iconify-icon> MEDCORE</span>
<span className="text-2xl font-light text-white tracking-[0.2em] uppercase">Aveline</span>
<span className="text-2xl font-medium text-white tracking-tight">BioSync</span>
</div>
</section>

<section>
<div className="mb-16 md:flex justify-between items-end reveal">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">The Operating System<br/>for Modern Wellness.</h2>
<p className="text-neutral-400 text-lg">We provide the full stack of operational needs—from legal frameworks to clinical protocols.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors text-sm">
                    View all modules <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 row-span-2 bg-neutral-900 rounded-[2rem] border border-white/5 p-8 md:p-12 relative overflow-hidden group reveal">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-500/10 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<span className="bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Live</span>
</div>
<div className="mt-8 mb-4">
<h3 className="text-2xl md:text-3xl font-medium text-white mb-2">Telehealth Infrastructure</h3>
<p className="text-neutral-400 max-w-sm">Seamless video consultations, vertical doctor matching, and good faith exams integrated directly into your workflow.</p>
</div>

<div className="w-full h-48 bg-neutral-950/50 rounded-xl border border-white/5 p-4 flex gap-4 backdrop-blur-sm translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
<div className="w-1/3 h-full rounded-lg bg-neutral-800 overflow-hidden relative">
<img alt="Doctor" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-2/3 h-full flex flex-col gap-3">
<div className="h-2 w-1/2 bg-neutral-800 rounded-full"></div>
<div className="h-2 w-3/4 bg-neutral-800 rounded-full"></div>
<div className="flex-1 bg-neutral-800/50 rounded-lg border border-white/5 p-3 flex items-center justify-center">
<div className="text-center">
<div className="text-xs text-neutral-500">Connection Quality</div>
<div className="text-emerald-500 text-xs font-medium flex items-center justify-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Excellent
                                        </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group reveal reveal-delay-100 hover:bg-neutral-800 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Compliance Safety Net</h3>
<p className="text-sm text-neutral-400">Automated regulatory checks and legal frameworks tailored to your state.</p>

<div className="mt-8 flex items-center justify-between bg-black/20 p-3 rounded-xl">
<span className="text-xs text-neutral-400">Auto-Renew</span>
<div className="w-10 h-5 bg-indigo-600 rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>

<div className="bg-neutral-900 rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group reveal reveal-delay-200">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Growth Analytics</h3>
<p className="text-sm text-neutral-400">Real-time dashboards tracking patient retention and revenue per visit.</p>

<div className="mt-6 flex items-end gap-1 h-12 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-1/5 bg-indigo-500/20 h-[40%] rounded-t-sm"></div>
<div className="w-1/5 bg-indigo-500/40 h-[60%] rounded-t-sm"></div>
<div className="w-1/5 bg-indigo-500/60 h-[50%] rounded-t-sm"></div>
<div className="w-1/5 bg-indigo-500/80 h-[80%] rounded-t-sm"></div>
<div className="w-1/5 bg-indigo-500 h-[100%] rounded-t-sm relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white bg-indigo-600 px-1 rounded">+24%</div>
</div>
</div>
</div>

<div className="md:col-span-3 bg-gradient-to-r from-neutral-900 to-indigo-950/30 rounded-[2rem] border border-white/5 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 reveal">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 text-indigo-400 mb-4">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest">Academy</span>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Clinical Protocols &amp; Training</h3>
<p className="text-neutral-400 mb-6">Access a library of 500+ procedures, marketing assets, and safety guidelines. Empower your staff with world-class knowledge.</p>
<a className="text-white text-sm font-medium border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">Explore Library</a>
</div>
<div className="md:w-1/2 w-full flex gap-4">

<div className="bg-neutral-800 p-4 rounded-xl w-1/2 rotate-[-3deg] border border-white/5 shadow-xl">
<div className="h-24 bg-neutral-700 rounded-lg mb-3 overflow-hidden">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-2 w-3/4 bg-neutral-600 rounded-full mb-2"></div>
<div className="h-2 w-1/2 bg-neutral-600 rounded-full"></div>
</div>
<div className="bg-neutral-800 p-4 rounded-xl w-1/2 rotate-[3deg] border border-white/5 shadow-xl translate-y-4">
<div className="h-24 bg-neutral-700 rounded-lg mb-3 overflow-hidden">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-2 w-3/4 bg-neutral-600 rounded-full mb-2"></div>
<div className="h-2 w-1/2 bg-neutral-600 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10">
<div className="relative rounded-[3rem] overflow-hidden min-h-[700px] flex items-center justify-center reveal-scale group">

<img alt="Team" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&amp;w=2091&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-neutral-950/40 backdrop-grayscale-[0.5]"></div>

<div className="relative z-10 max-w-2xl mx-auto text-center px-6">
<div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white mb-8">
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-tight">
                        Technology should feel<br/>invisible. <span className="text-white/60">Care should feel personal.</span>
</h2>
<p className="text-lg text-white/80 mb-10 leading-relaxed">
                        "Arora enabled us to scale from one clinic to five without losing the personal touch that our patients love. They handled the complexity so we could handle the care."
                    </p>
<div className="flex items-center justify-center gap-4">
<img alt="Dr Scott" className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<div className="text-white font-medium">Dr. Scott Jones</div>
<div className="text-white/60 text-sm">Founder, Medical Aesthetics</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto">
<div className="flex items-center gap-3 mb-10 reveal">
<div className="h-px bg-white/10 flex-1"></div>
<span className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Latest Insights</span>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="space-y-4">

<a className="group block p-6 md:p-8 rounded-3xl bg-neutral-900/30 hover:bg-neutral-900 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 reveal" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="space-y-2">
<div className="flex items-center gap-3 text-xs text-indigo-400 font-medium">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                STRATEGY
                            </div>
<h3 className="text-2xl font-medium text-white group-hover:text-indigo-200 transition-colors">The Shift to GLP-1 Weight Loss Programs</h3>
<p className="text-neutral-400 max-w-2xl">How aesthetic clinics are pivoting to incorporate metabolic health and what it means for operational flow.</p>
</div>
<div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                            Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block p-6 md:p-8 rounded-3xl bg-neutral-900/30 hover:bg-neutral-900 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 reveal reveal-delay-100" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="space-y-2">
<div className="flex items-center gap-3 text-xs text-indigo-400 font-medium">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                COMPLIANCE
                            </div>
<h3 className="text-2xl font-medium text-white group-hover:text-indigo-200 transition-colors">2024 Telehealth Regulations Update</h3>
<p className="text-neutral-400 max-w-2xl">Navigating the new landscape of cross-state digital prescriptions and good faith exams.</p>
</div>
<div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                            Read Article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="relative rounded-[3rem] bg-indigo-950 overflow-hidden text-center py-24 md:py-32 px-6 reveal-scale">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-indigo-500/20 blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl md:text-7xl font-medium text-white tracking-tighter">Ready to build?</h2>
<p className="text-indigo-200 text-lg md:text-xl">Join the ecosystem of forward-thinking medical entrepreneurs transforming patient care.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="bg-white text-neutral-950 px-8 py-4 rounded-full text-base font-semibold hover:bg-neutral-100 transition-colors w-full sm:w-auto">
                        Book Strategy Call
                    </button>
<button className="px-8 py-4 rounded-full text-white border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto">
                        View Case Studies
                    </button>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-neutral-950 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-medium text-white tracking-tight">arora</span>
<span className="text-neutral-600 text-sm">© 2024</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
