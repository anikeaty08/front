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
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.fade-in-section');
            sections.forEach(section => {
                observer.observe(section);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-zinc-200/50 rounded-full blur-[120px] opacity-40 mix-blend-multiply animate-pulse" style={{animationDuration: '10s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-slate-200/50 rounded-full blur-[120px] opacity-40 mix-blend-multiply"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-2xl">
<div className="flex items-center gap-2 p-2 pr-2 pl-6 rounded-full border border-white/60 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:bg-white/70 hover:scale-[1.01]">
<a className="font-semibold tracking-tighter text-lg mr-6 text-zinc-900 flex items-center gap-2" href="#">
<span className="w-5 h-5 bg-zinc-900 rounded-full flex items-center justify-center">
<span className="text-white text-[10px] font-bold">S</span>
</span>
                STANCEX
            </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-zinc-900 transition-colors" href="#platform">Platform</a>
<a className="hover:text-zinc-900 transition-colors" href="#research">Research</a>
</div>
<div className="ml-4 pl-4 border-l border-zinc-200/50">
<a className="group relative flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide overflow-hidden hover:shadow-lg hover:shadow-zinc-500/20 transition-all duration-300" href="#">
<span className="relative z-10">Access System</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0 bg-zinc-50">

<div className="absolute inset-0 opacity-40 grayscale mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>

<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/80"></div>
</div>

<div className="relative z-10 w-full max-w-4xl px-6">
<div className="md:p-20 animate-fade-in-slow text-center bg-white/20 border-white/40 border rounded-[2rem] mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-2xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-[1.05]">
                    The Infrastructure <br/>
<span className="text-zinc-800">of an Empire.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-600 font-normal mb-12 tracking-tight max-w-2xl mx-auto">
                    You build the vision. Zoey builds the reality.
                </p>
<button className="group px-10 py-5 rounded-full bg-zinc-900 text-white font-medium text-base transition-all duration-500 hover:scale-[1.02] shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_-5px_rgba(59,130,246,0.7)] border border-transparent hover:border-blue-500/30 flex items-center gap-3 mx-auto">
                    Meet Your New Partner
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<section className="py-12 border-y border-zinc-100/50 bg-white/20 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 fade-in-section">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Trusted by global innovators</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<h3 className="text-lg font-semibold tracking-tighter text-zinc-800">ACME<span className="font-light">CORP</span></h3>
<h3 className="text-lg font-bold tracking-tight text-zinc-800 italic">Vertex.</h3>
<h3 className="text-lg font-medium tracking-widest text-zinc-800">HORIZON</h3>
<h3 className="text-lg font-semibold tracking-tight text-zinc-800 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-zinc-800"></span>NEXUS</h3>
<h3 className="text-lg font-light tracking-tighter text-zinc-800">O U T L I E R</h3>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="platform">
<div className="max-w-6xl mx-auto">
<div className="mb-20 max-w-2xl fade-in-section">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6">Designed for complexity. <br/>Simplified for speed.</h2>
<p className="text-zinc-500 text-lg">Our unified platform orchestrates data flow across your entire organization with military-grade precision and consumer-grade aesthetics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">

<div className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-white/40 border border-white/60 backdrop-blur-xl shadow-sm p-10 flex flex-col relative overflow-hidden group fade-in-section hover:shadow-lg transition-all duration-500">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center mb-6">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Real-time Synchronization</h3>
<p className="text-zinc-500 max-w-sm">Changes propagate instantly across all nodes. No latency, no conflicts.</p>
</div>

<div className="absolute inset-0 top-[40%] md:top-[30%] left-[10%] opacity-80 group-hover:scale-[1.02] transition-transform duration-700">

<div className="w-full h-full bg-white rounded-tl-2xl shadow-xl border border-zinc-100 p-6">
<div className="flex items-center gap-4 mb-8 border-b border-zinc-50 pb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center bg-zinc-50/50 p-3 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-200"></div>
<div className="h-2 w-24 bg-zinc-200 rounded-full"></div>
</div>
<div className="h-2 w-12 bg-emerald-100 rounded-full"></div>
</div>
<div className="flex justify-between items-center bg-zinc-50/50 p-3 rounded-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-200"></div>
<div className="h-2 w-32 bg-zinc-200 rounded-full"></div>
</div>
<div className="h-2 w-12 bg-emerald-100 rounded-full"></div>
</div>
<div className="flex justify-between items-center bg-zinc-50/50 p-3 rounded-lg opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-200"></div>
<div className="h-2 w-20 bg-zinc-200 rounded-full"></div>
</div>
<div className="h-2 w-8 bg-zinc-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-[2.5rem] bg-[#F5F5F7] border border-white/20 p-8 flex flex-col justify-between relative overflow-hidden fade-in-section hover:bg-white/50 transition-colors duration-500">
<div>
<div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center mb-4">
<svg aria-hidden="true" data-icon="lucide:lock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">Sovereign Identity</h3>
</div>

<div className="mt-8 p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-600">Encryption</span>
<div className="w-10 h-6 bg-zinc-900 rounded-full relative cursor-pointer">
<div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>

<div className="rounded-[2.5rem] bg-white/40 border border-white/60 backdrop-blur-xl shadow-sm p-8 flex flex-col relative overflow-hidden fade-in-section group">
<div className="z-10">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Global Analytics</h3>
<p className="text-xs text-zinc-500">Predictive modeling at scale.</p>
</div>
<div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-center px-8 pb-8">
<div className="flex items-end gap-2 w-full h-full">
<div className="w-1/5 bg-zinc-200 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-500"></div>
<div className="w-1/5 bg-zinc-300 rounded-t-sm h-[50%] group-hover:h-[60%] transition-all duration-500 delay-75"></div>
<div className="w-1/5 bg-zinc-800 rounded-t-sm h-[70%] group-hover:h-[90%] transition-all duration-500 delay-100 shadow-[0_0_15px_rgba(0,0,0,0.2)]"></div>
<div className="w-1/5 bg-zinc-300 rounded-t-sm h-[45%] group-hover:h-[55%] transition-all duration-500 delay-150"></div>
<div className="w-1/5 bg-zinc-200 rounded-t-sm h-[60%] group-hover:h-[65%] transition-all duration-500 delay-200"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 text-white relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-800/30 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/50 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10 fade-in-section">
<div>
<span className="text-xs font-medium text-zinc-400 tracking-widest uppercase mb-4 block">Engine Core</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 leading-tight">Built on the <br/>edge of possibility.</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    We've removed the friction between thought and execution. Our API responds in sub-milliseconds, ensuring your infrastructure is always one step ahead of the market.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                        99.999% Historical Uptime
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                        Automated compliance across 50+ jurisdictions
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                        Quantum-resistant encryption standards
                    </li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl blur opacity-30"></div>
<div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="font-mono text-sm space-y-2">
<div className="flex gap-2">
<span className="text-zinc-500">1</span>
<span className="text-purple-400">const</span> <span className="text-blue-400">stance</span> <span className="text-zinc-300">=</span> <span className="text-yellow-300">await</span> <span className="text-blue-400">System</span>.<span className="text-yellow-300">init</span>({
                        </div>
<div className="flex gap-2">
<span className="text-zinc-500">2</span>
<span className="pl-4 text-zinc-300">mode:</span> <span className="text-green-400">'autonomous'</span>,
                        </div>
<div className="flex gap-2">
<span className="text-zinc-500">3</span>
<span className="pl-4 text-zinc-300">sync:</span> <span className="text-blue-400">true</span>,
                        </div>
<div className="flex gap-2">
<span className="text-zinc-500">4</span>
<span className="pl-4 text-zinc-300">latency:</span> <span className="text-orange-400">0</span>
</div>
<div className="flex gap-2">
<span className="text-zinc-500">5</span>
<span className="text-zinc-300">});</span>
</div>
<div className="flex gap-2 pt-2">
<span className="text-zinc-500">6</span>
<span className="text-zinc-500">// System initialized in 2ms</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto text-center fade-in-section">
<div className="mb-10 text-6xl text-zinc-200">"</div>
<h3 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-900 leading-snug mb-8">
                StanceX isn't just a tool; it's a fundamental shift in how we approach data architecture. It feels like software from the future.
            </h3>
<div className="flex flex-col items-center justify-center gap-2">
<div className="w-12 h-12 bg-zinc-200 rounded-full overflow-hidden mb-2">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=e5e7eb"/>
</div>
<div className="font-semibold text-zinc-900">Elena Rostova</div>
<div className="text-sm text-zinc-500">CTO, Hyperion Dynamics</div>
</div>
</div>
</section>

<section className="py-20 px-6 mb-20">
<div className="max-w-5xl mx-auto relative fade-in-section">

<div className="relative overflow-hidden rounded-[3rem] bg-white border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-12 md:p-24 text-center z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-900 mb-6">Ready to upgrade?</h2>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">Join the forward-thinking companies building on StanceX today. Experience the difference of precision engineering.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 hover:shadow-xl hover:shadow-zinc-300/50">
                        Get Started Now
                    </button>
<button className="px-8 py-4 rounded-full bg-white border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-50 transition-all">
                        Contact Sales
                    </button>
</div>
</div>

<div className="absolute top-10 left-0 right-0 h-full bg-gradient-to-r from-blue-100 to-purple-100 blur-[80px] -z-10 opacity-60"></div>
</div>
</section>

<footer className="border-t border-zinc-200/60 bg-white/40 backdrop-blur-md pt-20 pb-10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
<div className="col-span-2 md:col-span-1">
<a className="font-bold tracking-tighter text-xl text-zinc-900 mb-6 block" href="#">STANCEX</a>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Redefining the standards of digital infrastructure with elegance and precision.
                    </p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Security</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Connect</h4>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200/60 text-xs text-zinc-400">
<div>© 2024 StanceX Systems Inc. All rights reserved.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
