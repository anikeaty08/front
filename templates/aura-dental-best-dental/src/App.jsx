import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
mono: ['Geist Mono', 'monospace'],
},
colors: {
accent: '#0ea5e9', // Sky blue/Teal for Medical/Clean feel
accent_dark: '#0284c7',
dark: '#ffffff', // Swapped to Light Mode base
slate: {
850: '#1e293b',
900: '#0f172a',
}
},
animation: {
'spin-slow': 'spin 12s linear infinite',
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-white py-2 text-[10px] tracking-wide relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-4">
<a className="hover:text-accent transition-colors flex items-center gap-1.5" href="mailto:theauradent@gmail.com">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    theauradent@gmail.com
                </a>
<span className="hidden sm:inline text-white/20">|</span>
<a className="hover:text-accent transition-colors flex items-center gap-1.5" href="tel:+919686458860">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +91 9686458860
                </a>
</div>
<div className="flex items-center gap-1.5 opacity-80 text-center sm:text-right">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                B-105, Tirth jyoti plaza, subhash bridge circle, Ahmedabad
            </div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="flex group-hover:shadow-lg transition-all duration-300 text-sm font-bold text-white bg-gradient-to-tr from-accent to-blue-600 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42e3dfaf-9617-4dd7-90a0-4e2b0acec185_320w.png?w=800&amp;q=80)] bg-contain rounded-lg shadow-md items-center justify-center">
</div>
<span className="flex flex-col items-start justify-center leading-none">
<span className="text-blue-700 font-semibold text-lg tracking-tight">Aura Dental Clinic</span>
<span className="text-slate-900 font-semibold text-sm tracking-tight">&amp; Implant Center</span>
</span>
</div>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-accent transition-colors relative group py-2" href="#about">About</a>
<a className="text-xs font-medium text-slate-500 hover:text-accent transition-colors relative group py-2" href="#services">Services</a>
<a className="text-xs font-medium text-slate-500 hover:text-accent transition-colors relative group py-2" href="#implants">Implants</a>
<a className="text-xs font-medium text-slate-500 hover:text-accent transition-colors relative group py-2" href="#tourism">Dental Tourism</a>
</nav>
<div className="flex items-center gap-4">
<a className="group relative overflow-hidden rounded-md text-xs font-semibold text-white bg-slate-900 border border-transparent hover:bg-slate-800 transition-all duration-300 pt-2 pr-4 pb-2 pl-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="tel:+919686458860">
<span className="relative z-10 flex items-center gap-2">
                        Book Appointment
                        <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
</header>
<main className="relative z-10 bg-white">

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-sky-100/50 blur-[100px] rounded-full mix-blend-multiply animate-pulse-slow"></div>
<div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-blue-50/50 blur-[80px] rounded-full mix-blend-multiply"></div>
</div>

<section className="relative overflow-hidden border-b border-slate-100 min-h-[85vh] flex items-center pt-10 pb-16 lg:pt-0 lg:pb-0">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 grid-bg opacity-60"></div>
<div className="bg-gradient-to-t from-white via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12">

<div className="flex flex-col lg:mx-0 max-w-2xl mr-auto ml-auto justify-center">
<div className="flex items-center gap-2 mb-8 reveal-on-scroll is-visible">
<div className="pl-1 pr-3 py-1 rounded-full bg-sky-50 border border-sky-100 flex items-center gap-2 hover:bg-sky-100 transition-colors cursor-default group">
<span className="flex items-center justify-center px-2 py-0.5 rounded-full bg-accent text-[9px] font-bold text-white uppercase tracking-wide">Rated #1</span>
<span className="text-slate-600 text-[11px] font-medium tracking-wide">Best Dental Clinic in Ranip, Ahmedabad</span>
</div>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] reveal-on-scroll mb-6 text-slate-900 is-visible">
<span className="block">Crafting your perfect</span>
<span className="text-gradient-primary block">smile &amp; confidence.</span>
</h1>
<p className="leading-relaxed reveal-on-scroll delay-100 text-lg font-light text-slate-500 max-w-lg mb-10 is-visible">
                        Pain-free treatments, advanced implants, and holistic care by Dr. Mohnish Jagtani &amp; Dr. Meenakshi Haryani.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal-on-scroll delay-200 is-visible">
<a className="px-8 py-4 bg-accent text-white font-semibold rounded hover:bg-accent_dark transition-all shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group" href="tel:+919686458860">
                            Schedule Visit
                            <svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="px-8 py-4 bg-white text-slate-600 font-medium rounded border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
<svg className="text-accent" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            View Location
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-400 reveal-on-scroll delay-300 is-visible">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">MJ</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">MH</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-400">+2k</div>
</div>
<p>2,000+ Happy Smiles Transformed</p>
</div>
</div>

<div className="lg:h-[600px] flex lg:justify-end reveal-on-scroll delay-100 is-visible h-[500px] relative perspective-container items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-200/30 blur-[100px] rounded-full pointer-events-none"></div>

<div className="w-full max-w-[500px] bg-white border border-slate-100 rounded-2xl hero-card-3d relative overflow-hidden group shadow-2xl">

<div className="h-12 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50 backdrop-blur-sm">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="text-[10px] font-mono text-slate-400">AURA_PATIENT_SCAN.AI</div>
</div>

<div className="p-8 relative bg-white">

<div className="flex justify-center mb-8">
<div className="relative w-48 h-48">
<div className="absolute inset-0 border-4 border-dashed border-sky-100 rounded-full animate-spin-slow"></div>
<div className="absolute inset-4 bg-sky-50 rounded-full flex items-center justify-center shadow-inner">
<svg className="text-accent" fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="80"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent w-full h-1/2 animate-shimmer" style={{backgroundSize: '100% 200%', animation: 'scan 3s linear infinite'}}></div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="p-2 bg-white rounded shadow-sm text-accent"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></div>
<div>
<div className="text-xs font-semibold text-slate-700">Implant Stability</div>
<div className="text-[10px] text-slate-400">Straumann Analysis</div>
</div>
</div>
<span className="text-sm font-bold text-green-500">98%</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="p-2 bg-white rounded shadow-sm text-accent"><svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></div>
<div>
<div className="text-xs font-semibold text-slate-700">Esthetic Score</div>
<div className="text-[10px] text-slate-400">Digital Smile Design</div>
</div>
</div>
<span className="text-sm font-bold text-accent">A+</span>
</div>
</div>

<div className="absolute -right-6 top-20 bg-white border border-slate-100 p-4 rounded-xl shadow-xl backdrop-blur-md animate-float-delayed w-48 z-20">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center text-green-600">
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-[10px] text-slate-600 font-semibold">Treatment Plan</span>
</div>
<p className="text-[10px] text-slate-400 leading-relaxed">Invisalign scan complete. Expected duration: <span className="text-slate-700 font-medium">6 Months</span>.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center group cursor-pointer reveal-on-scroll delay-100">
<div className="w-16 h-16 mx-auto bg-sky-50 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Invisalign</h3>
<p className="text-xs text-slate-500">Clear aligners for teens &amp; adults</p>
</div>
<div className="text-center group cursor-pointer reveal-on-scroll delay-200">
<div className="w-16 h-16 mx-auto bg-sky-50 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32"><path d="M2 12h20"></path><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><path d="m4 8 16-4"></path><path d="m2 12 10-4 10 4"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Dental Implants</h3>
<p className="text-xs text-slate-500">Permanent tooth replacement</p>
</div>
<div className="text-center group cursor-pointer reveal-on-scroll delay-300">
<div className="w-16 h-16 mx-auto bg-sky-50 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Digital Smile Design</h3>
<p className="text-xs text-slate-500">AI-powered cosmetic planning</p>
</div>
<div className="text-center group cursor-pointer reveal-on-scroll delay-400">
<div className="w-16 h-16 mx-auto bg-sky-50 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"></path></svg>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Full Mouth Rehab</h3>
<p className="text-xs text-slate-500">Complete restoration</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-50 border-b border-slate-200" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-[10px] text-accent ring-1 ring-accent/20 uppercase tracking-tight mb-6 font-semibold">
                            Since 2017
                        </span>
<h2 className="md:text-5xl text-4xl font-semibold text-slate-900 tracking-tighter mb-6">
                            Excellence in every <br/> <span className="text-accent">detail.</span>
</h2>
<div className="space-y-4 text-slate-600 leading-relaxed font-light">
<p>
                                Welcome to the <strong className="text-slate-900 font-medium">Aura Dental Clinic &amp; Implant Centre</strong>, a beacon of excellence established on August 15, 2017. Under the visionary leadership of <strong className="text-slate-900 font-medium">Dr. Mohnish Jagtani</strong> (Prosthodontist, 15 years exp.) and <strong className="text-slate-900 font-medium">Dr. Meenakshi Haryani</strong> (B.D.S, 10+ years exp.).
                            </p>
<p>
                                We believe in transforming smiles through holistic approaches. Our commitment to <span className="bg-sky-100 text-sky-800 px-1 rounded">painless procedures</span>, advanced treatments, and high success rates sets us apart.
                            </p>
<p>
                                Each patient is unique. We tailor our services to meet individual needs, offering regulated appointments to ensure convenience and care with every visit.
                            </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-200 flex gap-8">
<div>
<div className="text-3xl font-bold text-slate-900">15+</div>
<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Experience</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900">100%</div>
<div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Painless</div>
</div>
</div>
</div>
<div className="relative reveal-on-scroll delay-100">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 glass-card">
<div className="w-12 h-12 rounded-full bg-blue-100 mb-4 flex items-center justify-center text-blue-600 font-bold">Dr.M</div>
<h3 className="font-bold text-slate-900">Dr. Mohnish Jagtani</h3>
<p className="text-xs text-slate-500">Prosthodontist &amp; Implantologist</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 glass-card translate-y-8">
<div className="w-12 h-12 rounded-full bg-pink-100 mb-4 flex items-center justify-center text-pink-600 font-bold">Dr.M</div>
<h3 className="font-bold text-slate-900">Dr. Meenakshi Haryani</h3>
<p className="text-xs text-slate-500">Dental Surgeon (B.D.S)</p>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-sky-100/50 to-transparent rounded-full blur-3xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block font-semibold">Treatments</span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tighter">
                        Comprehensive <span className="text-slate-400">Dental Care.</span>
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-sm rounded-2xl overflow-hidden">

<div className="bg-white p-8 hover:bg-slate-50 transition-colors group reveal-on-scroll">
<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Invisalign</h3>
<p className="text-sm text-slate-500 leading-relaxed">Clear aligners for a straighter smile without braces.</p>
</div>
<div className="bg-white p-8 hover:bg-slate-50 transition-colors group reveal-on-scroll">
<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M4.5 9.5V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v5.5"></path><path d="M7 22v-8h10v8"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Crown &amp; Bridge</h3>
<p className="text-sm text-slate-500 leading-relaxed">Restore damaged teeth with high-quality prosthetics.</p>
</div>
<div className="bg-white p-8 hover:bg-slate-50 transition-colors group reveal-on-scroll">
<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Dental Implants</h3>
<p className="text-sm text-slate-500 leading-relaxed">The best long-term solution for missing teeth.</p>
</div>
<div className="bg-white p-8 hover:bg-slate-50 transition-colors group reveal-on-scroll">
<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="m9 12 2 2 4-4"></path><path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Root Canal (RCT)</h3>
<p className="text-sm text-slate-500 leading-relaxed">Save your natural tooth with painless advanced RCT.</p>
</div>
<div className="bg-white p-8 hover:bg-slate-50 transition-colors group reveal-on-scroll">
<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Dental Emergency</h3>
<p className="text-sm text-slate-500 leading-relaxed">Immediate care for kids and adults in pain.</p>
</div>
<div className="bg-white p-8 hover:bg-slate-50 transition-colors group reveal-on-scroll">
<div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Dental Tourism</h3>
<p className="text-sm text-slate-500 leading-relaxed">World-class dental care for international patients.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 mb-10 tracking-tight text-center">Frequently Asked Questions</h2>
<div className="space-y-4 reveal-on-scroll">

<details className="group bg-white rounded-lg border border-slate-200 open:border-accent/30 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-800">
                            How painful is dental treatment?
                            <span className="transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                            Dental procedures are absolutely painless at Aura Dental Clinic &amp; Implant Centre. We use the most advanced medicine and equipment for dental anaesthesia to ensure your comfort.
                        </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 open:border-accent/30 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-800">
                            How often should I have a dental check-up?
                            <span className="transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                            It is generally recommended to visit your dentist every six months for a routine check-up and cleaning. However, specific needs may require more frequent visits.
                        </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 open:border-accent/30 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-800">
                            What are the common signs of gum disease?
                            <span className="transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                            Symptoms include bleeding gums, persistent bad breath, swelling, and gum recession. Regular check-ups help detect this early.
                        </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 open:border-accent/30 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-800">
                            What options are available for replacing a missing tooth?
                            <span className="transition-transform group-open:rotate-180">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                             Dental implants, bridges, and dentures. Dental implants are a popular choice as they provide a durable, long-term solution closely mimicking natural teeth.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div className="reveal-on-scroll">
<h2 className="text-4xl font-semibold tracking-tighter mb-6">Ready to transform your smile?</h2>
<p className="text-slate-400 mb-8 max-w-md">Contact us today to schedule your consultation. We accept walk-ins during specific hours.</p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="p-2 bg-white/10 rounded"><svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
<div>
<h4 className="font-medium">Call Us</h4>
<p className="text-sm text-slate-400">+91 96864 58860</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white/10 rounded"><svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
<div>
<h4 className="font-medium">Visit Us</h4>
<p className="text-sm text-slate-400">B-105, Tirth jyoti plaza, Opp RTO gate,Near Subhash Bridge Circle, Ahmedabad</p>
</div>
</div>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-8 rounded-2xl reveal-on-scroll delay-100 backdrop-blur-sm">
<h3 className="text-lg font-semibold mb-6">Opening Hours</h3>
<div className="space-y-6 text-sm">
<div>
<span className="block text-accent text-xs font-bold uppercase tracking-wider mb-2">Appointment Only</span>
<div className="flex justify-between py-1 border-b border-white/10">
<span>Mon - Sat</span>
<span className="text-slate-300">09:00 - 14:00</span>
</div>
<div className="flex justify-between py-1 border-b border-white/10">
<span>Mon - Sat</span>
<span className="text-slate-300">15:00 - 21:00</span>
</div>
<div className="flex justify-between py-1 border-b border-white/10">
<span>Sunday</span>
<span className="text-slate-300">09:00 - 14:00</span>
</div>
</div>
<div>
<span className="block text-accent text-xs font-bold uppercase tracking-wider mb-2">Walk-In</span>
<div className="flex justify-between py-1 border-b border-white/10">
<span>Mon - Sat</span>
<span className="text-slate-300">10:00 - 13:30</span>
</div>
<div className="flex justify-between py-1 border-b border-white/10">
<span>Mon - Sat</span>
<span className="text-slate-300">17:00 - 21:00</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>
</section>
</main>

<footer className="bg-white pt-20 pb-10 relative border-t border-slate-200 text-slate-600">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg">AURA DENTAL</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                        Redefining the conventional dental experience with honesty, care, and advanced technology.
                    </p>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-accent transition-colors" href="#">Prosthodontics</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Smile Design</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Veneers</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-4 text-sm">Patients</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-accent transition-colors" href="#">New Patient</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Dental Tourism</a></li>
<li><a className="hover:text-accent transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xs text-slate-400">© 2026 All rights reserved by The Aura Dent.</span>
<div className="flex gap-6">

<a className="text-slate-400 hover:text-accent transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-400 hover:text-accent transition-colors" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
