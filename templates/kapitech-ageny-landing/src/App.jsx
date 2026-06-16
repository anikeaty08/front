import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Modal Logic
        const playBtn = document.getElementById('playReel');
        const modal = document.getElementById('reelModal');
        const closeBtn = document.getElementById('closeReel');
        const frame = document.getElementById('reelFrame');
        
        // Using a tech-related placeholder video
        const videoUrl = "https://www.youtube.com/embed/S9086pWbX8Q?autoplay=1&mute=0&controls=1&rel=0";

        playBtn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            frame.src = videoUrl;
            document.body.style.overflow = 'hidden';
        });

        const closeModal = () => {
            modal.classList.add('hidden');
            frame.src = "";
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur-md border-b bg-zinc-50/80 border-zinc-200" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-2.5">
<span className="inline-flex h-8 w-8 items-center justify-center text-sm font-semibold rounded-full text-white bg-red-600" style={{}}>K</span>
<span className="text-xl font-semibold tracking-tighter text-black">kapitech<span className="text-red-600" style={{}}>.</span></span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="transition-colors font-medium text-zinc-600 hover:text-red-600" href="#" style={{}}>Solutions</a>
<a className="transition-colors font-medium hover:text-red-600 text-zinc-600" href="#" style={{}}>About</a><a className="transition-colors font-medium text-zinc-600 hover:text-red-600" href="#" style={{}}>Services</a>
<a className="transition-colors font-medium text-zinc-600 hover:text-red-600" href="#" style={{}}>Projects <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-200 text-zinc-600" style={{}}>12</span></a>
</nav>

<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors border-zinc-200 bg-white text-zinc-900 hover:border-red-200" style={{}}>
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full text-xs font-medium transition-colors duration-300 bg-black text-white hover:bg-red-600" href="#" style={{}}>
                        Contact Us
                    </a>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">

<section className="relative overflow-hidden h-[60vh] md:h-[70vh] border rounded-3xl group bg-zinc-900 border-zinc-800" style={{}}>

<img alt="Technology Abstract" className="absolute inset-0 w-full h-full object-center object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
<div className="z-10 flex flex-col sm:p-10 md:p-14 h-full pt-6 pr-6 pb-6 pl-6 relative justify-end">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm mb-6 bg-red-600/10 border-red-600/20" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" style={{}}></span>
</span>
<span className="text-xs font-medium text-red-100" style={{}}>Innovating for the Future</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] mb-6 text-white">
                        Systemic <br/>
<span className="text-zinc-400" style={{}}>Excellence.</span>
</h1>
<p className="text-lg md:text-xl font-light max-w-lg leading-relaxed tracking-tight text-zinc-300" style={{}}>
                        PT. Kapi Technology Indonesia delivers robust IT solutions, software development, and digital transformation strategies tailored for enterprise growth.
                    </p>
</div>
<div className="mt-10 flex items-center gap-4">
<button className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg group/btn bg-white text-black hover:bg-red-600 hover:text-white" style={{}}>
<span className="text-sm font-semibold tracking-tight">Explore Solutions</span>
<svg className="lucide lucide-arrow-right h-4 w-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-12 w-12 rounded-full border backdrop-blur-sm transition-all duration-300 border-white/20 bg-white/10 text-white hover:bg-red-600 hover:border-red-600" id="playReel" style={{}}>
<svg className="lucide lucide-play h-4 w-4 ml-0.5 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4">

<article className="group relative overflow-hidden h-72 border rounded-2xl p-5 hover:shadow-xl transition-all duration-300 bg-white border-zinc-200 hover:border-red-200 hover:shadow-red-900/5" style={{}}>
<div className="absolute top-5 right-5 h-8 w-8 rounded-full flex items-center justify-center border group-hover:bg-red-50 group-hover:text-red-600 transition-colors bg-zinc-50 border-zinc-100" style={{}}>
<svg className="lucide lucide-code-2 h-4 w-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="h-full flex flex-col justify-between">
<div className="">
<span className="text-xs font-medium tracking-wide uppercase text-red-600" style={{}}>01 — Core</span>
<h3 className="mt-2 text-xl font-semibold tracking-tight leading-tight text-zinc-900" style={{}}>Software Development</h3>
</div>
<div className="">
<p className="text-sm text-zinc-500 leading-relaxed mb-4" style={{}}>Custom applications tailored to specific business logic and scalable architecture.</p>
<div className="w-full h-[1px] group-hover:bg-red-100 transition-colors bg-zinc-100" style={{}}></div>
</div>
</div>
</article>

<article className="group relative overflow-hidden h-72 border rounded-2xl p-5 transition-all duration-300 bg-zinc-900 border-zinc-800 hover:border-zinc-700" style={{}}>
<div className="absolute inset-0 opacity-20">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="">
<span className="text-xs font-medium text-red-500 tracking-wide uppercase" style={{}}>02 — Infra</span>
<h3 className="mt-2 text-xl font-semibold tracking-tight leading-tight text-white">System Integration</h3>
</div>
</div>
<div className="">
<p className="text-sm leading-relaxed text-zinc-400" style={{}}>Seamlessly connecting disparate systems to unify your business operations.</p>
</div>
</div>
</article>

<article className="group relative overflow-hidden h-72 border rounded-2xl p-5 hover:shadow-xl transition-all duration-300 bg-white border-zinc-200 hover:border-red-200 hover:shadow-red-900/5" style={{}}>
<div className="absolute top-5 right-5 h-8 w-8 rounded-full flex items-center justify-center border group-hover:bg-red-50 group-hover:text-red-600 transition-colors bg-zinc-50 border-zinc-100" style={{}}>
<svg className="lucide lucide-smartphone h-4 w-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="h-full flex flex-col justify-between">
<div className="">
<span className="text-xs font-medium tracking-wide uppercase text-red-600" style={{}}>03 — Mobile</span>
<h3 className="mt-2 text-xl font-semibold tracking-tight leading-tight text-zinc-900" style={{}}>Mobile Solutions</h3>
</div>
<div className="">
<p className="text-sm text-zinc-500 leading-relaxed mb-4" style={{}}>Native and cross-platform mobile apps designed for engagement and performance.</p>
<div className="w-full h-[1px] group-hover:bg-red-100 transition-colors bg-zinc-100" style={{}}></div>
</div>
</div>
</article>

<article className="group relative overflow-hidden h-72 border rounded-2xl p-5 hover:shadow-xl transition-all duration-300 bg-white border-zinc-200 hover:border-red-200 hover:shadow-red-900/5" style={{}}>
<div className="absolute top-5 right-5 h-8 w-8 rounded-full flex items-center justify-center border group-hover:bg-red-50 group-hover:text-red-600 transition-colors bg-zinc-50 border-zinc-100" style={{}}>
<svg className="lucide lucide-bar-chart-3 h-4 w-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="h-full flex flex-col justify-between">
<div className="">
<span className="text-xs font-medium tracking-wide uppercase text-red-600" style={{}}>04 — Data</span>
<h3 className="mt-2 text-xl font-semibold tracking-tight leading-tight text-zinc-900" style={{}}>IT Consulting &amp; Analytics</h3>
</div>
<div className="">
<p className="text-sm text-zinc-500 leading-relaxed mb-4" style={{}}>Strategic guidance and data-driven insights to optimize technology spend.</p>
<div className="w-full h-[1px] group-hover:bg-red-100 transition-colors bg-zinc-100" style={{}}></div>
</div>
</div>
</article>
</section>

<section className="border rounded-3xl p-6 md:p-10 bg-zinc-100 border-zinc-200" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="flex flex-col gap-8">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="h-1.5 w-1.5 rounded-full bg-black"></span>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest" style={{}}>About Kapitech</span>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.05] text-zinc-900" style={{}}>
                            Empowering business 
                            through <span className="text-zinc-400" style={{}}>technology.</span>
</h2>
</div>
<p className="leading-relaxed max-w-md text-zinc-600" style={{}}>
                        We are a team of dedicated engineers and strategists. At Kapitech, we don't just write code; we architect solutions that drive efficiency, security, and scalability for modern enterprises.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-200/60" style={{}}>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900" style={{}}>100+</div>
<div className="text-xs text-zinc-500 font-medium mt-1" style={{}}>Projects Delivered</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900" style={{}}>98%</div>
<div className="text-xs text-zinc-500 font-medium mt-1" style={{}}>Client Retention</div>
</div>
</div>
<div className="mt-2">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700" href="#" style={{}}>
                            Read our story 
                            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-2 gap-3 h-[400px]">
<div className="relative overflow-hidden rounded-2xl row-span-2 bg-zinc-200" style={{}}>
<img className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 p-3 backdrop-blur-md rounded-xl border bg-white/90 border-white/50">
<p className="text-xs font-semibold text-zinc-900" style={{}}>Strategic Planning</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl h-full bg-zinc-200" style={{}}>
<img className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden rounded-2xl h-full flex items-center justify-center p-6 text-center border bg-zinc-900 border-zinc-800" style={{}}>
<div className="space-y-2">
<svg className="lucide lucide-cpu h-8 w-8 mx-auto text-red-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<p className="text-sm font-medium text-white">AdvancedInfrastructure</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:p-12 overflow-hidden rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl text-white bg-black">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 blur-[100px] rounded-full pointer-events-none bg-red-600/20" style={{}}></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6 text-red-500" style={{}}>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-semibold uppercase tracking-widest">Client Success</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight">
                        "Kapitech transformed our legacy systems into a modern, agile infrastructure. Their attention to detail and technical prowess is unmatched."
                    </h2>
<div className="mt-8 flex items-center gap-4">
<div className="h-12 w-12 rounded-full border overflow-hidden bg-zinc-800 border-zinc-700" style={{}}>
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<p className="text-base font-semibold text-white">Budi Santoso</p>
<p className="text-sm text-zinc-500" style={{}}>CTO, FinTech Indonesia</p>
</div>
</div>
</div>
<div className="w-full md:w-auto backdrop-blur-md border p-6 rounded-2xl min-w-[280px] bg-zinc-900/50 border-zinc-800" style={{}}>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold tracking-tighter text-white">4.9</span>
<span className="text-zinc-500 text-lg" style={{}}>/ 5.0</span>
</div>
<div className="flex gap-1 mt-3 text-red-500" style={{}}>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs mt-4 pt-4 border-t text-zinc-400 border-zinc-800" style={{}}>Based on 50+ enterprise reviews</p>
</div>
</div>
</section>

<footer className="mt-8 border rounded-3xl p-8 md:p-12 mb-8 bg-white border-zinc-200" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="inline-flex h-6 w-6 items-center justify-center text-xs font-bold rounded-md text-white bg-black">K</span>
<span className="text-lg font-semibold tracking-tighter text-black">kapitech.</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-6" style={{}}>
                        PT. Kapi Technology Indonesia.<br/>
                        Driving innovation through code.
                    </p>
<div className="flex gap-4">
<a className="transition-colors text-zinc-400 hover:text-red-600" href="#" style={{}}><svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="transition-colors text-zinc-400 hover:text-red-600" href="#" style={{}}><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition-colors text-zinc-400 hover:text-red-600" href="#" style={{}}><svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold mb-4 text-zinc-900" style={{}}>Company</h4>
<ul className="space-y-3 text-sm text-zinc-500" style={{}}>
<li><a className="transition-colors hover:text-red-600" href="#" style={{}}>About Us</a></li>
<li><a className="transition-colors hover:text-red-600" href="#" style={{}}>Careers</a></li>
<li><a className="transition-colors hover:text-red-600" href="#" style={{}}>Contact</a></li>
<li><a className="transition-colors hover:text-red-600" href="#" style={{}}>Partners</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold mb-4 text-zinc-900" style={{}}>Services</h4>
<ul className="space-y-3 text-sm text-zinc-500" style={{}}>
<li><a className="transition-colors hover:text-red-600" href="#" style={{}}>Web Development</a></li>
<li><a className="transition-colors hover:text-red-600" href="#" style={{}}>Mobile Apps</a></li>
<li><a className="transition-colors hover:text-red-600" href="#" style={{}}>Cloud Infrastructure</a></li>
<li><a className="transition-colors hover:text-red-600" href="#" style={{}}>Consulting</a></li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-sm font-semibold mb-4 text-zinc-900" style={{}}>Stay Updated</h4>
<form className="space-y-3">
<input className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all bg-zinc-50 border-zinc-200" placeholder="Email address" style={{}} type="email"/>
<button className="w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700" style={{}} type="submit">
                            Subscribe <svg className="lucide lucide-arrow-up-right h-3.5 w-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</form>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs border-zinc-100 text-zinc-400" style={{}}>
<p>© 2024 Kapitech. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-zinc-600" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-50 hidden" id="reelModal">
<div className="absolute inset-0 backdrop-blur-sm transition-opacity bg-black/90"></div>
<div className="relative h-full w-full flex items-center justify-center p-4">
<button className="absolute top-6 right-6 z-10 transition-colors text-white/70 hover:text-white" id="closeReel">
<svg className="lucide lucide-x h-8 w-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-black border-zinc-800" style={{}}>
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="w-full h-full" frameborder="0" id="reelFrame" src=""></iframe>
</div>
</div>
</div>


    </>
  );
}
