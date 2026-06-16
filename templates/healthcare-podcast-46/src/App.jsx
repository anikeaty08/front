import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>

<nav className="fixed top-0 w-full z-40 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-slate-900/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center bg-blue-500 text-white transform group-hover:rotate-12 transition-transform duration-300">
<iconify-icon icon="solar:plane-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-serif font-semibold text-lg text-slate-900 tracking-tight leading-none">Healthcare</span>
<span className="font-serif font-medium text-sm text-slate-500 tracking-tight leading-none">Without Borders</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-semibold tracking-widest uppercase text-slate-600 hover:text-blue-600 transition-colors" href="#episodes">Episodes</a>
<a className="text-xs font-semibold tracking-widest uppercase text-slate-600 hover:text-blue-600 transition-colors" href="#guide">Patient Guide</a>
<a className="text-xs font-semibold tracking-widest uppercase text-slate-600 hover:text-blue-600 transition-colors" href="#about">About Medifly</a>
<button className="sketchy-btn border-2 border-slate-900 px-5 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-slate-900 hover:text-white transform hover:-rotate-1">
                    Subscribe
                </button>
</div>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<svg className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none" viewbox="0 0 800 600">
<path className="flight-path" d="M100,300 Q400,100 700,300" fill="none" stroke="#0f172a" strokeWidth="2"></path>
<path className="flight-path" d="M50,400 Q300,500 600,200" fill="none" stroke="#0f172a" strokeWidth="2" style={{animationDelay: '-5s'}}></path>
<circle cx="100" cy="300" fill="#0f172a" r="4"></circle>
<circle cx="700" cy="300" fill="#0f172a" r="4"></circle>
</svg>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 relative z-10">

<div className="lg:col-span-7 flex flex-col justify-center items-start space-y-8 reveal active">
<div className="inline-flex items-center gap-2 border border-slate-900/20 rounded-full px-4 py-1.5 bg-white shadow-sm">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase">
                        Season 2 Live
                    </span>
</div>
<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-slate-900 leading-[1.05] tracking-tight">
                    Better decisions. <br/>
<span className="marker-highlight px-1">Better health.</span>
</h1>
<p className="text-lg text-slate-600 font-sans font-light leading-relaxed max-w-lg">
                    Cross-border healthcare is a $100B industry built on confusion. <strong>Kevin Cho (CEO, Medifly)</strong> explores the fragmented journey of medical tourism—and how to navigate it safely.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="sketchy-btn bg-slate-900 text-white border-2 border-slate-900 px-8 py-4 font-semibold text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Listen Now
                    </button>
<button className="sketchy-btn bg-transparent text-slate-900 border-2 border-slate-900 px-8 py-4 font-semibold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                        View The Guide
                    </button>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-slate-400 pt-4">
<span>Available on:</span>
<iconify-icon className="text-slate-900" icon="solar:podcast-linear" width="20"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:music-note-linear" width="20"></iconify-icon>
<iconify-icon className="text-slate-900" icon="solar:play-stream-linear" width="20"></iconify-icon>
</div>
</div>

<div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end reveal delay-100 active">

<div className="absolute -top-10 -right-10 w-32 h-32 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute -bottom-5 -left-5 w-24 h-24 border-2 border-dashed border-slate-900/10 rounded-full"></div>
<div className="w-full bg-white border-2 border-slate-900 sketchy-box overflow-hidden relative z-10 transform rotate-2 transition-transform hover:rotate-0 duration-500">

<div className="bg-slate-900 p-6 flex justify-between items-center text-white">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:globe-linear" width="24"></iconify-icon>
<span className="font-sans font-bold text-xs tracking-[0.2em] uppercase">Medifly Airways</span>
</div>
<span className="font-mono text-xs text-blue-200">EP-042</span>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-6 border-b border-dashed border-slate-200 pb-6">
<div>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Origin</span>
<span className="text-2xl font-serif text-slate-900">Confusion</span>
</div>
<div className="flex flex-col items-center px-4 mt-2">
<iconify-icon className="text-blue-500 transform rotate-90" icon="solar:plane-linear" width="24"></iconify-icon>
<span className="text-[8px] font-bold text-slate-400 mt-1">1h 14m</span>
</div>
<div className="text-right">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Destination</span>
<span className="text-2xl font-serif text-slate-900">Clarity</span>
</div>
</div>
<h3 className="font-serif text-xl font-medium text-slate-900 leading-tight mb-2">The Hidden Costs of "Cheap" Surgery</h3>
<p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">
                            We break down the itemized bills of three major medical hubs: Turkey, Mexico, and Thailand.
                        </p>

<div className="flex items-center justify-between gap-1 h-8 mb-6 px-3 py-1 bg-slate-50 rounded border border-slate-100">
<div className="w-1 bg-slate-900 h-full bar"></div>
<div className="w-1 bg-slate-900 h-1/2 bar"></div>
<div className="w-1 bg-blue-500 h-3/4 bar"></div>
<div className="w-1 bg-blue-500 h-full bar"></div>
<div className="w-1 bg-blue-500 h-2/3 bar"></div>
<div className="w-1 bg-slate-900 h-1/3 bar"></div>
<div className="w-1 bg-slate-900 h-full bar"></div>
<div className="w-1 bg-slate-900 h-1/2 bar"></div>
<div className="w-1 bg-slate-900 h-3/4 bar"></div>
<div className="w-1 bg-blue-500 h-full bar"></div>
<div className="w-1 bg-slate-900 h-2/3 bar"></div>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:scale-105 transition-transform text-white">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="18"></iconify-icon>
</button>
<div className="h-1 bg-slate-100 flex-1 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-1/3 rounded-full relative"></div>
</div>
<span className="font-mono text-[10px] text-slate-400">12:45</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-y border-slate-900/5 relative bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-block border border-slate-900 px-3 py-1 mb-6 rounded-full bg-blue-50">
<span className="font-bold text-[10px] tracking-widest text-blue-600 uppercase">The Reality</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
                        The journey is <br/>
<span className="decoration-blue-400 decoration-wavy underline underline-offset-4 decoration-2">fragmented</span>.
                    </h2>
<p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
                        Each year, millions travel abroad for healthcare. But the industry is built on <strong>information asymmetry</strong>. You see the marketing brochures; we see the operational realities.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Opaque Pricing:</strong> Hidden fees that appear only after you land.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Vetted vs. Verified:</strong> The massive difference between a certificate and safety.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Aftercare Gap:</strong> What happens when you fly home?</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-6 reveal delay-100">
<div className="bg-[#f8f7f4] border-2 border-slate-900 sketchy-box p-6 flex flex-col items-center text-center justify-center aspect-square hover:bg-blue-50 transition-colors">
<iconify-icon className="text-blue-600 mb-3" icon="solar:users-group-rounded-linear" width="40"></iconify-icon>
<span className="font-serif text-3xl text-slate-900 mb-1">14M+</span>
<span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Medical Tourists/Yr</span>
</div>
<div className="bg-[#f8f7f4] border-2 border-slate-900 sketchy-box p-6 flex flex-col items-center text-center justify-center aspect-square mt-8 hover:bg-blue-50 transition-colors">
<iconify-icon className="text-blue-600 mb-3" icon="solar:wallet-money-linear" width="40"></iconify-icon>
<span className="font-serif text-3xl text-slate-900 mb-1">40-80%</span>
<span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Cost Savings</span>
</div>
<div className="bg-[#f8f7f4] border-2 border-slate-900 sketchy-box p-6 flex flex-col items-center text-center justify-center aspect-square -mt-8 hover:bg-blue-50 transition-colors">
<iconify-icon className="text-blue-600 mb-3" icon="solar:map-point-linear" width="40"></iconify-icon>
<span className="font-serif text-3xl text-slate-900 mb-1">72</span>
<span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Countries</span>
</div>
<div className="bg-[#f8f7f4] border-2 border-slate-900 sketchy-box p-6 flex flex-col items-center text-center justify-center aspect-square hover:bg-blue-50 transition-colors">
<iconify-icon className="text-blue-600 mb-3" icon="solar:danger-triangle-linear" width="40"></iconify-icon>
<span className="font-serif text-3xl text-slate-900 mb-1">?</span>
<span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Unknown Risks</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 bg-white border-2 border-slate-900 sketchy-box p-8 md:p-12 shadow-[8px_8px_0px_0px_#2563eb]">
<div className="w-full md:w-1/3 relative reveal">
<div className="aspect-[3/4] overflow-hidden border-2 border-slate-900 rounded-2xl relative grayscale hover:grayscale-0 transition-all duration-500">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>

<img alt="Kevin Cho" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest border-2 border-slate-900 transform rotate-3">
                        The Host
                    </div>
</div>
<div className="w-full md:w-2/3 reveal delay-100">
<h3 className="font-serif text-3xl text-slate-900 mb-2">Kevin Cho</h3>
<p className="font-sans text-xs font-bold tracking-widest text-blue-600 uppercase mb-6">CEO of Medifly</p>
<div className="space-y-4 text-slate-600 font-light leading-relaxed">
<p>
                            "I founded Medifly after witnessing my own father struggle to navigate an overseas surgery. The care was excellent, but the logistics were a nightmare."
                        </p>
<p>
                            This podcast isn't about promoting medical tourism. It's about <strong>radical transparency</strong>. We bring on surgeons, insurers, and patients to dismantle the borders that restrict access to quality, affordable care.
                        </p>
</div>
<div className="mt-8 flex gap-4">
<a className="text-slate-900 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-900 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="episodes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<span className="font-bold text-xs tracking-widest text-slate-400 uppercase mb-2 block">Flight Log</span>
<h2 className="font-serif text-4xl font-medium text-slate-900">Latest Episodes</h2>
</div>
<button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors">
<span className="underline decoration-wavy decoration-blue-400 underline-offset-4">View All Flights</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer reveal">
<div className="relative aspect-[16/10] bg-slate-200 mb-6 border-2 border-slate-900 rounded-xl overflow-hidden shadow-sm group-hover:shadow-[4px_4px_0px_0px_#0f172a] transition-all">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2668&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-slate-900 px-2 py-1 font-bold text-[10px] tracking-widest uppercase">Dental</div>
</div>
<div className="space-y-2">
<span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Ep 12 • Turkey</span>
<h4 className="font-serif text-xl font-medium text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                            The "Hollywood Smile" Reality Check
                        </h4>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-2">
                            What veneers actually do to your teeth, and why Istanbul became the world's dentist.
                        </p>
</div>
</article>

<article className="group cursor-pointer reveal delay-100">
<div className="relative aspect-[16/10] bg-slate-200 mb-6 border-2 border-slate-900 rounded-xl overflow-hidden shadow-sm group-hover:shadow-[4px_4px_0px_0px_#0f172a] transition-all">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-slate-900 px-2 py-1 font-bold text-[10px] tracking-widest uppercase">Surgery</div>
</div>
<div className="space-y-2">
<span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Ep 11 • South Korea</span>
<h4 className="font-serif text-xl font-medium text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                            Precision, Speed, and Automation
                        </h4>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-2">
                            How Seoul's clinics process patients with the efficiency of a tech startup, and what we lose in the process.
                        </p>
</div>
</article>

<article className="group cursor-pointer reveal delay-200">
<div className="relative aspect-[16/10] bg-slate-200 mb-6 border-2 border-slate-900 rounded-xl overflow-hidden shadow-sm group-hover:shadow-[4px_4px_0px_0px_#0f172a] transition-all">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-slate-900 px-2 py-1 font-bold text-[10px] tracking-widest uppercase">Policy</div>
</div>
<div className="space-y-2">
<span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Ep 10 • Global</span>
<h4 className="font-serif text-xl font-medium text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                            When Insurance Stops at the Border
                        </h4>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-2">
                            A deep dive into portability laws and the new startups trying to insure your medical trip.
                        </p>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative overflow-hidden text-white" id="guide">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10 reveal">
<div className="w-16 h-16 bg-blue-600 text-white mx-auto mb-8 flex items-center justify-center rounded-full border-2 border-white transform -rotate-6 shadow-lg">
<iconify-icon icon="solar:letter-linear" width="32"></iconify-icon>
</div>
<h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">The Pre-Flight Checklist</h2>
<p className="text-slate-300 mb-10 font-light leading-relaxed text-lg">
                Don't fly blind. Get our weekly breakdown of safe clinics, changing regulations, and the economics of global health.
            </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 px-6 py-4 bg-slate-800 border-2 border-slate-700 text-white focus:outline-none focus:border-blue-500 placeholder-slate-500 text-xs font-bold tracking-wide uppercase rounded-lg transition-colors" placeholder="YOUR EMAIL ADDRESS" type="email"/>
<button className="bg-blue-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest border-2 border-transparent hover:bg-white hover:text-slate-900 transition-colors sketchy-btn shadow-lg" type="button">
                    Subscribe
                </button>
</form>
<div className="mt-8 flex items-center justify-center gap-2 opacity-50 text-[10px] uppercase tracking-widest">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>No spam. Unsubscribe anytime.</span>
</div>
</div>
</section>

<footer className="bg-[#fdfbf7] border-t border-slate-900/10 py-20 relative">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:plane-linear" width="12"></iconify-icon>
</div>
<span className="font-serif font-bold text-lg text-slate-900 tracking-tight">Healthcare Without Borders</span>
</a>
<p className="text-xs font-sans text-slate-500 max-w-sm leading-relaxed">
                    A Medifly Production. <br/>
                    Connecting patients to the world's best care through radical transparency.
                </p>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Listen</h4>
<ul className="space-y-3 text-sm font-sans font-medium text-slate-700">
<li><a className="hover:text-blue-600 hover:underline decoration-wavy underline-offset-4 decoration-blue-400 transition-all" href="#">Apple Podcasts</a></li>
<li><a className="hover:text-blue-600 hover:underline decoration-wavy underline-offset-4 decoration-blue-400 transition-all" href="#">Spotify</a></li>
<li><a className="hover:text-blue-600 hover:underline decoration-wavy underline-offset-4 decoration-blue-400 transition-all" href="#">YouTube</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company</h4>
<ul className="space-y-3 text-sm font-sans font-medium text-slate-700">
<li><a className="hover:text-blue-600 transition-colors" href="#">About Medifly</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Suggest a Topic</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Sponsorship</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest gap-4">
<span>© 2024 Medifly Inc. All rights reserved.</span>
<div className="flex items-center gap-4">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
