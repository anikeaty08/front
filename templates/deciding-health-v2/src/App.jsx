import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"DM Sans"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'],
},
colors: {
brand: {
navy: '#1a2234',
orange: '#e8a838',
cream: '#f5f2eb',
peach: '#f4c4a8',
gray: '#6b6b6b',
white: '#ffffff',
}
},
backgroundImage: {
'paper-texture': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
},
boxShadow: {
'sketch': '4px 4px 0px 0px #1a2234',
'sketch-hover': '2px 2px 0px 0px #1a2234',
'card': '0 4px 20px -2px rgba(26, 34, 52, 0.1)',
}
}
}
}



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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-paper-texture mix-blend-multiply"></div>

<nav className="fixed top-0 w-full z-40 bg-brand-cream/95 backdrop-blur-sm border-b-2 border-brand-navy/10">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex flex-col group" href="#">
<div className="flex items-center gap-2">
<span className="icon-[lucide--compass] w-6 h-6 text-brand-orange"></span>
<span className="font-serif font-bold text-2xl text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors">Deciding Health</span>
</div>
<span className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-gray uppercase pl-8">The Podcast</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-bold tracking-widest uppercase text-brand-navy hover:text-brand-orange transition-colors" href="#episodes">Episodes</a>
<a className="text-xs font-bold tracking-widest uppercase text-brand-navy hover:text-brand-orange transition-colors" href="#hosts">Hosts</a>
<a className="text-xs font-bold tracking-widest uppercase text-brand-navy hover:text-brand-orange transition-colors" href="#framework">Our Framework</a>
<button className="sketchy-btn border-2 border-brand-navy px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-navy hover:text-brand-white transform hover:-rotate-1">
                    Contact
                </button>
</div>

<button className="md:hidden text-brand-navy">
<span className="icon-[lucide--menu] w-6 h-6"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 relative z-10">

<div className="lg:col-span-6 flex flex-col justify-center items-start space-y-8 reveal active">

<div className="relative inline-block mb-2">
<div className="absolute inset-0 border-2 border-brand-orange sketchy-oval transform -rotate-2"></div>
<span className="relative block px-5 py-2 text-[10px] font-bold tracking-[0.15em] text-brand-navy uppercase">
                        New Episode Streaming
                    </span>
</div>
<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-brand-navy leading-[1.05] tracking-tight">
                    Better decisions. <br/>
<span className="marker-highlight inline-block px-1 transform -rotate-1">Better health.</span> <br/>
                    Lower costs.
                </h1>
<p className="text-lg text-brand-gray font-sans font-light leading-relaxed max-w-lg">
                    A healthcare CEO and a consumer psychologist decode the <span className="border-b-2 border-brand-peach border-dashed">hidden forces</span> shaping your health, your wallet, and your life.
                </p>
<div className="flex flex-wrap items-center gap-6 pt-4">
<button className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest shadow-sketch hover:shadow-sketch-hover hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-3">
<span className="icon-[lucide--play] w-4 h-4 fill-current"></span>
                        Latest Episode
                    </button>
<button className="sketchy-btn bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-white transition-colors">
                        Subscribe
                    </button>
</div>
</div>

<div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end reveal delay-100 active">

<svg className="absolute -top-12 -left-12 w-24 h-24 text-brand-navy/20 transform rotate-12 z-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path d="M10,50 Q30,20 60,10" marker-end="url(#arrowhead)"></path>
<defs>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="currentColor" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>
</svg>
<div className="w-full max-w-md bg-brand-white border-2 border-brand-navy sketchy-box p-8 shadow-card relative z-10 transform rotate-1 transition-transform hover:rotate-0 duration-500">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-brand-cream/80 border-l border-r border-brand-white/50 backdrop-blur-sm transform -rotate-2 opacity-60 shadow-sm"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-2">
<span className="icon-[lucide--radio] w-4 h-4 text-brand-orange animate-pulse"></span>
<span className="text-[10px] font-bold tracking-[0.2em] text-brand-navy uppercase">Now Playing • Ep 14</span>
</div>
<span className="text-xs font-mono text-brand-gray">12:45 / 34:28</span>
</div>
<h3 className="font-serif text-2xl font-medium text-brand-navy leading-tight mb-2">Service F*ckery: Why Healthcare CX is Broken</h3>
<p className="text-sm text-brand-gray mb-8 font-light leading-relaxed">
                        We analyze why booking a flight is easier than booking a doctor, and the economic incentives that keep it that way.
                    </p>

<div className="flex items-center justify-between gap-1 h-12 mb-6 px-2 bg-brand-cream/50 rounded-lg border border-brand-navy/5">
<div className="w-1 bg-brand-navy h-full bar"></div>
<div className="w-1 bg-brand-navy h-1/2 bar"></div>
<div className="w-1 bg-brand-navy h-3/4 bar"></div>
<div className="w-1 bg-brand-orange h-full bar"></div>
<div className="w-1 bg-brand-orange h-2/3 bar"></div>
<div className="w-1 bg-brand-orange h-1/3 bar"></div>
<div className="w-1 bg-brand-navy h-full bar"></div>
<div className="w-1 bg-brand-navy h-1/2 bar"></div>
<div className="w-1 bg-brand-navy h-3/4 bar"></div>
<div className="w-1 bg-brand-navy h-full bar"></div>
<div className="w-1 bg-brand-navy h-2/3 bar"></div>
<div className="w-1 bg-brand-navy h-1/3 bar"></div>
<div className="w-1 bg-brand-navy h-full bar"></div>
<div className="w-1 bg-brand-peach h-1/2 bar"></div>
<div className="w-1 bg-brand-peach h-full bar"></div>
<div className="w-1 bg-brand-navy h-2/3 bar"></div>
<div className="w-1 bg-brand-navy h-1/3 bar"></div>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-full bg-brand-orange border-2 border-brand-navy flex items-center justify-center hover:scale-105 transition-transform">
<span className="icon-[lucide--pause] w-5 h-5 text-brand-navy fill-current"></span>
</button>
<div className="h-1 bg-brand-navy/10 flex-1 rounded-full overflow-hidden">
<div className="h-full bg-brand-navy w-1/3 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-orange rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-y-2 border-brand-navy/10 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center reveal">
<div className="inline-block border-2 border-brand-navy px-4 py-1 mb-6 sketchy-box transform -rotate-1">
<span className="font-bold text-xs tracking-widest text-brand-navy uppercase">The Problem</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-brand-navy max-w-3xl mx-auto leading-tight">
                    Healthcare is <span className="marker-highlight px-2">30% waste</span>. Most of it comes from <span className="border-b-4 border-brand-orange/50">bad decisions</span>.
                </h2>
<p className="mt-6 text-brand-gray font-light max-w-2xl mx-auto text-lg">
                    Americans spend more on healthcare than any other nation, yet our outcomes consistently rank last among peers. The system isn't broken—it's designed to perform exactly this way.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-12 mt-20">

<div className="relative text-center group reveal">

<svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 text-brand-navy stroke-[1.5] opacity-80" fill="none" viewbox="0 0 100 100">
<path d="M50,0 Q60,30 50,70" marker-end="url(#arrowhead-down)" stroke="currentColor"></path>
</svg>
<div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch">
<span className="block font-serif text-5xl font-medium text-brand-navy mb-2">$4.3T</span>
<span className="font-sans text-xs font-bold tracking-widest text-brand-gray uppercase">US Annual Spend</span>
</div>
</div>

<div className="relative text-center group reveal delay-100">
<svg className="absolute -top-8 -right-4 w-16 h-16 text-brand-orange stroke-[2] opacity-80 transform rotate-12" fill="none" viewbox="0 0 100 100">
<path d="M10,10 Q50,50 10,90" stroke="currentColor"></path>
</svg>
<div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch">
<span className="block font-serif text-5xl font-medium text-brand-navy mb-2">~25%</span>
<span className="font-sans text-xs font-bold tracking-widest text-brand-gray uppercase">Admin Complexity</span>
</div>
</div>

<div className="relative text-center group reveal delay-200">
<div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch">
<span className="block font-serif text-5xl font-medium text-brand-navy mb-2">#1</span>
<span className="font-sans text-xs font-bold tracking-widest text-brand-gray uppercase">Bankruptcy Cause</span>
</div>

<svg className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 text-brand-orange" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<defs>
<marker id="arrowhead-down" markerheight="7" markerwidth="10" orient="auto" refx="5" refy="7">
<polygon fill="#1a2234" points="0 0, 5 7, 10 0"></polygon>
</marker>
</defs>
</section>

<section className="py-24 bg-brand-white relative" id="hosts">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(#1a2234 1px, transparent 1px), linear-gradient(90deg, #1a2234 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: '0.03'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-4 sticky top-32 reveal">
<span className="font-bold text-xs tracking-widest text-brand-gray uppercase mb-4 block">The Investigators</span>
<h2 className="font-serif text-4xl font-medium text-brand-navy mb-6 leading-tight">
                        The C-Suite Meets <br/><span className="italic text-brand-orange">The Lab</span>
</h2>
<p className="text-brand-gray font-light mb-8 font-sans">
                        Two perspectives, one mission: Decoding the economics and psychology of healthcare.
                    </p>

<svg className="w-24 h-12 text-brand-navy transform rotate-6" fill="none" viewbox="0 0 100 50">
<path d="M0,25 Q50,0 90,25" marker-end="url(#arrowhead)" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
</div>
<div className="lg:col-span-8 grid md:grid-cols-2 gap-12">

<div className="relative group reveal delay-100">
<div className="aspect-[4/5] bg-brand-cream border-2 border-brand-navy sketchy-box mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sketch">
<img alt="Dan McCoy" className="w-full h-full object-cover mix-blend-multiply" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/6871ff72df18ed78b83aff41.png"/>
</div>
<div className="relative">
<span className="absolute -top-10 -left-2 bg-brand-navy text-brand-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest transform -rotate-3">The Insider</span>
<h4 className="font-serif text-2xl text-brand-navy">Dan McCoy, MD</h4>
<p className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">Former Chief Medical Officer</p>
<p className="text-sm text-brand-gray leading-relaxed">
                                "I've sat in the boardrooms where these decisions get made. The incentives are often aligned against the patient."
                            </p>
</div>
</div>

<div className="relative group reveal delay-200">
<div className="aspect-[4/5] bg-brand-cream border-2 border-brand-navy sketchy-box mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sketch">
<img alt="Dr. Kelli Frias" className="w-full h-full object-cover mix-blend-multiply" src="https://www.american.edu/uploads/profiles/large/Frias_website300_1.png"/>
</div>
<div className="relative">
<span className="absolute -top-10 -right-2 bg-brand-orange text-brand-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest transform rotate-2">The Scientist</span>
<h4 className="font-serif text-2xl text-brand-navy">Dr. Kelli Frias</h4>
<p className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">Consumer Psychologist</p>
<p className="text-sm text-brand-gray leading-relaxed">
                                "We think we make rational choices about health. My research proves we are predictably irrational."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t-2 border-brand-navy/10" id="episodes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<span className="font-bold text-xs tracking-widest text-brand-gray uppercase mb-2 block">Case Files</span>
<h2 className="font-serif text-4xl font-medium text-brand-navy">Recent Dossiers</h2>
</div>
<a className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-orange transition-colors" href="#">
<span className="wavy-underline">View Archive</span>
<span className="icon-[lucide--arrow-right] group-hover:translate-x-1 transition-transform"></span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-x-8 gap-y-16">

<article className="group cursor-pointer reveal">
<div className="relative aspect-video bg-brand-navy mb-6 border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
<img className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-brand-white border-2 border-brand-navy px-2 py-1 font-bold text-[10px] tracking-widest uppercase">EP 15</div>
</div>
<div className="space-y-3">
<span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5 inline-block">System Errors</span>
<h4 className="font-serif text-xl font-medium text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
                            The Sunk Cost Fallacy in Your Medical Care
                        </h4>
<p className="text-sm text-brand-gray font-light leading-relaxed line-clamp-2">
                            Why do we stick with treatments that aren't working? Evidence #4A: The psychology of "investment".
                        </p>
</div>
</article>

<article className="group cursor-pointer reveal delay-100">
<div className="relative aspect-video bg-brand-navy mb-6 border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
<img className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-brand-white border-2 border-brand-navy px-2 py-1 font-bold text-[10px] tracking-widest uppercase">EP 14</div>
</div>
<div className="space-y-3">
<span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5 inline-block">Consumer Defense</span>
<h4 className="font-serif text-xl font-medium text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
                            Service F*ckery: Why Healthcare CX is Broken
                        </h4>
<p className="text-sm text-brand-gray font-light leading-relaxed line-clamp-2">
                            The deliberate design choices that make healthcare frustrating. Investigation into dark patterns.
                        </p>
</div>
</article>

<article className="group cursor-pointer reveal delay-200">
<div className="relative aspect-video bg-brand-navy mb-6 border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
<img className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-brand-white border-2 border-brand-navy px-2 py-1 font-bold text-[10px] tracking-widest uppercase">EP 13</div>
</div>
<div className="space-y-3">
<span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5 inline-block">Psychology</span>
<h4 className="font-serif text-xl font-medium text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
                            The Psychology of People Who Never Go to the Doctor
                        </h4>
<p className="text-sm text-brand-gray font-light leading-relaxed line-clamp-2">
                            Avoidance is a strategy. We discuss fear, control, and the "Ostrich Effect".
                        </p>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 bg-brand-navy relative overflow-hidden text-brand-cream" id="subscribe">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23e8a838\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10 reveal">
<div className="w-16 h-16 bg-brand-orange text-brand-navy mx-auto mb-8 flex items-center justify-center rounded-full border-2 border-brand-cream transform rotate-3">
<span className="icon-[lucide--mail] w-8 h-8"></span>
</div>
<h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Get the Decision Brief</h2>
<p className="text-brand-cream/70 mb-10 font-light leading-relaxed text-lg">
                Weekly insights on healthcare decisions—research, frameworks, and what we're seeing in the market. No fluff, just data.
            </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 px-6 py-4 bg-brand-navy border-2 border-brand-cream focus:outline-none focus:border-brand-orange placeholder-brand-cream/30 text-xs font-bold tracking-wide uppercase sketchy-box" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="bg-brand-orange text-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-widest border-2 border-transparent hover:bg-brand-cream transition-colors sketchy-btn shadow-lg" type="button">
                    Subscribe
                </button>
</form>
<p className="text-[10px] font-sans font-bold text-brand-cream/50 mt-6 uppercase tracking-widest">Join 12,000+ Healthcare Leaders</p>
</div>
</section>

<footer className="bg-brand-cream border-t border-brand-navy/10 py-20 relative">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2" href="#">
<span className="icon-[lucide--compass] w-5 h-5 text-brand-navy"></span>
<span className="font-serif font-bold text-lg text-brand-navy tracking-tight">Deciding Health</span>
</a>
<p className="text-xs font-sans text-brand-gray max-w-sm leading-relaxed">
                    A journalistic inquiry into the economics of health. <br/>Est. 2024.
                </p>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Listen On</h4>
<ul className="space-y-3 text-sm font-sans font-medium text-brand-navy">
<li><a className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all" href="#">Apple Podcasts</a></li>
<li><a className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all" href="#">Spotify</a></li>
<li><a className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all" href="#">YouTube</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Legal</h4>
<ul className="space-y-3 text-sm font-sans font-medium text-brand-navy">
<li><a className="hover:text-brand-orange transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-navy/5 flex justify-between items-center text-[10px] font-sans font-bold text-brand-gray uppercase tracking-widest">
<span>© 2026 Deciding Health. All rights reserved.</span>
<span>Case File #88392</span>
</div>
</footer>



    </>
  );
}
