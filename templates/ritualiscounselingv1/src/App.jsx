import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        window.addEventListener('scroll', () => {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 20) {
                nav.classList.replace('border-transparent', 'border-[#E8E0CC]/50');
            } else {
                nav.classList.replace('border-[#E8E0CC]/50', 'border-transparent');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFAF5]/95 backdrop-blur-sm border-b border-transparent transition-all duration-300" id="main-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-xl font-medium tracking-[0.1875rem] uppercase text-[#2C2A24]" href="#">
                Ritualis
            </a>
<div className="hidden lg:flex items-center gap-10">
<a className="font-sans text-xs tracking-[0.125rem] uppercase text-[#7A7770] hover:text-[#8B7435] transition-colors font-light" href="#about">About</a>
<a className="font-sans text-xs tracking-[0.125rem] uppercase text-[#7A7770] hover:text-[#8B7435] transition-colors font-light" href="#services">Services</a>
<a className="font-sans text-xs tracking-[0.125rem] uppercase text-[#7A7770] hover:text-[#8B7435] transition-colors font-light" href="#fathers">Fathers</a>
<a className="font-sans text-xs tracking-[0.125rem] uppercase text-[#7A7770] hover:text-[#8B7435] transition-colors font-light" href="#sons">Sons</a>
<a className="font-sans text-xs tracking-[0.125rem] uppercase text-[#7A7770] hover:text-[#8B7435] transition-colors font-light" href="#daughters">Daughters</a>
</div>
<a className="bg-[#8B7435] hover:bg-[#B09450] text-[#FDFAF5] font-sans text-xs tracking-[0.1875rem] uppercase px-6 py-3 transition-colors rounded-none font-light" href="#apply">
                Apply Now
            </a>
</div>
</nav>


<section className="relative min-h-[90vh] bg-[#2C2A24] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Forest Path" className="w-full h-full object-cover opacity-30 object-top" src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#2C2A24]/40 via-[#2C2A24]/80 to-[#2C2A24]"></div>
</div>

<svg className="absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none z-0" preserveaspectratio="none" viewbox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
<path d="M-100,200 C150,300 300,100 500,150 C700,200 900,50 1100,100 C1300,150 1500,250 1600,200" fill="none" stroke="#FFFFFF" strokeWidth="1"></path>
<path d="M-100,250 C150,350 300,150 500,200 C700,250 900,100 1100,150 C1300,200 1500,300 1600,250" fill="none" stroke="#FFFFFF" strokeWidth="1"></path>
<path d="M-100,300 C150,400 300,200 500,250 C700,300 900,150 1100,200 C1300,250 1500,350 1600,300" fill="none" stroke="#FFFFFF" strokeWidth="1"></path>
<path d="M-100,450 C200,300 400,600 700,450 C1000,300 1200,500 1600,400" fill="none" stroke="#FFFFFF" strokeWidth="1"></path>
</svg>
<div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl mx-auto">
<span className="font-sans text-xs tracking-[0.25rem] uppercase text-[#D4B86A] mb-8 font-light">
                A Counseling &amp; Formation Practice
            </span>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#FDFAF5] font-medium tracking-tight mb-6 leading-none translate-y-4 animate-[fade-in-up_0.8s_ease-out_forwards] opacity-0" style={{animationName: 'fade-up'}}>
                RITUALIS
            </h1>
<p className="font-serif italic text-xl md:text-2xl text-[#D4B86A] tracking-[0.125rem] mb-12">
                The Practice of Belonging
            </p>
<div className="w-12 h-px bg-[#8B7435] mb-10"></div>
<p className="font-sans text-sm text-[#A8A49A] max-w-lg mx-auto font-light leading-loose mb-14 drop-shadow-sm">
                Ancient cultures knew something we have forgotten. Boys do not grow into men by accident. Fathers do not lead families without formation. Belonging is not found. It is practiced.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#8B7435] text-[#FDFAF5] font-sans text-xs tracking-[0.1875rem] uppercase px-10 py-4 hover:bg-[#B09450] transition-colors rounded-none font-light w-full sm:w-auto text-center" href="#apply">
                    Begin Here
                </a>
<a className="border border-[#8B7435] text-[#D4B86A] bg-transparent font-sans text-xs tracking-[0.1875rem] uppercase px-10 py-4 hover:bg-[#8B7435]/10 backdrop-blur-sm transition-colors rounded-none font-light w-full sm:w-auto text-center" href="#about">
                    Learn More
                </a>
</div>
</div>
</section>

<section className="bg-[#FDFAF5] py-24 md:py-32" id="about">
<div className="max-w-4xl mx-auto px-6 text-center mb-20">
<span className="font-sans text-xs tracking-[0.15rem] uppercase text-[#7A7770] font-light mb-6 block">The Gap</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2A24] font-medium tracking-tight mb-8">Something Has Been Lost</h2>
<p className="font-sans text-sm text-[#4A4740] max-w-2xl mx-auto font-light leading-loose">
                Every culture that produced strong men, devoted fathers, and healthy communities did so through intentional structure. Not by accident. Not by comfort. The map has been lost. The markers are gone. And men are feeling it.
            </p>
</div>
<div className="w-full border-y border-[#E8E0CC]">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E0CC] max-w-7xl mx-auto">
<div className="p-16 text-center flex flex-col items-center justify-center bg-white/50 hover:bg-[#F4EFE4] transition-colors duration-500">
<span className="font-serif text-6xl md:text-7xl text-[#8B7435] tracking-tight mb-6 block leading-none">70%</span>
<span className="font-sans text-xs tracking-[0.1rem] uppercase text-[#7A7770] font-light leading-relaxed max-w-[200px]">
                        of millennial fathers report feeling unprepared to lead their families
                    </span>
</div>
<div className="p-16 text-center flex flex-col items-center justify-center bg-white/50 hover:bg-[#F4EFE4] transition-colors duration-500">
<span className="font-serif text-6xl md:text-7xl text-[#8B7435] tracking-tight mb-6 block leading-none">0</span>
<span className="font-sans text-xs tracking-[0.1rem] uppercase text-[#7A7770] font-light leading-relaxed max-w-[200px]">
                        universally recognized rites of passage remain in modern Western culture
                    </span>
</div>
<div className="p-16 text-center flex flex-col items-center justify-center bg-white/50 hover:bg-[#F4EFE4] transition-colors duration-500">
<span className="font-serif text-6xl md:text-7xl text-[#8B7435] tracking-tight mb-6 block leading-none">∞</span>
<span className="font-sans text-xs tracking-[0.1rem] uppercase text-[#7A7770] font-light leading-relaxed max-w-[200px]">
                        generations of unprocessed wounds passed silently from father to son
                    </span>
</div>
</div>
</div>
</section>

<section className="relative bg-[#2C2A24] py-32 px-6 text-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Mountains" className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-[#2C2A24]/70 mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10">
<span className="font-serif text-7xl md:text-8xl text-[#8B7435] leading-none block mb-6 h-12">"</span>
<h3 className="font-serif italic text-2xl md:text-3xl text-[#FDFAF5] font-light leading-loose tracking-wide max-w-3xl mx-auto mb-12 drop-shadow-md">
                We are not prepared for pain because we have systematically removed pain from our lives. And so when the wound inevitably comes, we feel victimized. We look for someone to blame. We medicate, self-soothe, or rage. What we rarely do is ask: What is this wound trying to teach me?
            </h3>
<span className="font-sans text-xs tracking-[0.1875rem] uppercase text-[#D4B86A] font-light block">
                From The Sacred Wound
            </span>
</div>
</section>

<section className="bg-[#F4EFE4] py-24 md:py-32 px-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="pt-8">
<span className="font-sans text-xs tracking-[0.15rem] uppercase text-[#7A7770] font-light mb-6 block">What We Do</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2A24] font-medium tracking-tight mb-8">Formation, Not Information</h2>
<div className="mb-10 w-full h-64 overflow-hidden border border-[#E8E0CC]">
<img alt="Nature detail" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<p className="font-sans text-sm text-[#4A4740] font-light leading-loose mb-10">
                    Character is not taught. It is formed through structure, relationship, ordeal, and story. Ritualis is a counseling and formation practice built on this truth. We translate ancient frameworks of masculine development into contemporary therapeutic and relational work.
                </p>
<div className="w-10 h-px bg-[#8B7435] mb-10"></div>
<p className="font-sans text-sm text-[#4A4740] font-light leading-loose">
                    We work with fathers, teenage sons, and daughters through individual counseling, cohort groups, and structured formation programs rooted in rites of passage, shadow integration, attachment theory, and Christian spirituality.
                </p>
</div>

<div className="bg-[#FDFAF5] border border-[#E8E0CC] p-10 md:p-12 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#8B7435]/5 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
<div className="relative z-10">
<h4 className="font-sans text-sm tracking-[0.1875rem] uppercase text-[#8B7435] font-light mb-12 text-center">The Formation Arc</h4>
<div className="space-y-8">

<div className="flex gap-6 items-start group">
<span className="font-serif text-4xl text-[#D4B86A] group-hover:text-[#8B7435] transition-colors w-12 shrink-0 leading-none pt-1">I</span>
<div>
<h5 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#2C2A24] font-medium mb-3">Separation</h5>
<p className="font-sans text-xs text-[#7A7770] font-light leading-loose">
                                    A definitive break from the old self. Identity conferral begins. The boy is named and sent.
                                </p>
</div>
</div>
<div className="h-px w-full bg-[#E8E0CC]"></div>

<div className="flex gap-6 items-start group">
<span className="font-serif text-4xl text-[#D4B86A] group-hover:text-[#8B7435] transition-colors w-12 shrink-0 leading-none pt-1">II</span>
<div>
<h5 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#2C2A24] font-medium mb-3">Liminality</h5>
<p className="font-sans text-xs text-[#7A7770] font-light leading-loose">
                                    The threshold. Ordeal, challenge, and encounter with the wound. The work happens here.
                                </p>
</div>
</div>
<div className="h-px w-full bg-[#E8E0CC]"></div>

<div className="flex gap-6 items-start group">
<span className="font-serif text-4xl text-[#D4B86A] group-hover:text-[#8B7435] transition-colors w-12 shrink-0 leading-none pt-1">III</span>
<div>
<h5 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#2C2A24] font-medium mb-3">Reintegration</h5>
<p className="font-sans text-xs text-[#7A7770] font-light leading-loose">
                                    The community receives the changed person. New name. New responsibility. New belonging.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FDFAF5] py-24 md:py-32 px-6">
<div className="max-w-5xl mx-auto text-center mb-16">
<span className="font-sans text-xs tracking-[0.15rem] uppercase text-[#7A7770] font-light mb-6 block">Who We Serve</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2A24] font-medium tracking-tight mb-8">Three Generations. One Practice.</h2>
<p className="font-sans text-sm text-[#4A4740] max-w-2xl mx-auto font-light leading-loose">
                Ritualis operates across three interconnected domains — because belonging cannot be practiced in isolation.
            </p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F4EFE4] border border-[#E8E0CC] flex flex-col group overflow-hidden hover:shadow-md transition-shadow duration-500" id="fathers">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-[#2C2A24]/40 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Father" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-10 flex-grow relative bg-[#F4EFE4]">
<div className="w-12 h-12 bg-[#2C2A24] flex items-center justify-center mb-6 absolute -top-6 left-10 z-20 shadow-sm">
<iconify-icon className="text-[#FDFAF5] text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#2C2A24] font-medium mb-6 mt-4">For Fathers</h3>
<p className="font-sans text-sm text-[#4A4740] font-light leading-loose">
                        You know something is missing. You want to pass something real to your son but you were never handed a map. We start with your own formation wounds before we build the path forward for him.
                    </p>
</div>
</div>

<div className="bg-[#F4EFE4] border border-[#E8E0CC] flex flex-col group overflow-hidden hover:shadow-md transition-shadow duration-500" id="sons">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-[#2C2A24]/40 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Son" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-10 flex-grow relative bg-[#F4EFE4]">
<div className="w-12 h-12 bg-[#2C2A24] flex items-center justify-center mb-6 absolute -top-6 left-10 z-20 shadow-sm">
<iconify-icon className="text-[#FDFAF5] text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#2C2A24] font-medium mb-6 mt-4">For Sons</h3>
<p className="font-sans text-sm text-[#4A4740] font-light leading-loose">
                        Adolescence without initiation is a wilderness. Teenage boys need challenge, community, and an elder who speaks identity over them. We build that container alongside their fathers.
                    </p>
</div>
</div>

<div className="bg-[#F4EFE4] border border-[#E8E0CC] flex flex-col group overflow-hidden hover:shadow-md transition-shadow duration-500" id="daughters">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-[#2C2A24]/40 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
<img alt="Daughter" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-10 flex-grow relative bg-[#F4EFE4]">
<div className="w-12 h-12 bg-[#2C2A24] flex items-center justify-center mb-6 absolute -top-6 left-10 z-20 shadow-sm">
<iconify-icon className="text-[#FDFAF5] text-xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#2C2A24] font-medium mb-6 mt-4">For Daughters</h3>
<p className="font-sans text-sm text-[#4A4740] font-light leading-loose">
                        Belonging is not a gendered need. The formation principles that shape healthy sons also shape daughters — identity conferral, ordeal, community witness, and embodied virtue.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#F4EFE4] py-24 md:py-32 border-t border-[#E8E0CC]">
<div className="max-w-6xl mx-auto px-6 text-center mb-16">
<span className="font-sans text-xs tracking-[0.15rem] uppercase text-[#7A7770] font-light mb-6 block">The Process</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2A24] font-medium tracking-tight mb-8">How Ritualis Works</h2>
<p className="font-sans text-sm text-[#4A4740] max-w-2xl mx-auto font-light leading-loose">
                Formation is not a weekend event. It is a structured arc across time — relationship-first, embodied in practice, received by community.
            </p>
</div>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E8E0CC] bg-[#E8E0CC] gap-px">

<div className="bg-[#FDFAF5] p-10 relative hover:bg-white transition-colors duration-300">
<span className="font-serif text-5xl text-[#E8E0CC] absolute top-6 right-6 leading-none">01</span>
<h3 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-6 mt-8">Initial Consult</h3>
<p className="font-sans text-xs text-[#4A4740] font-light leading-loose">
                        We begin by understanding your story, your wounds, and where you are in the arc. No program before relationship.
                    </p>
</div>

<div className="bg-[#FDFAF5] p-10 relative hover:bg-white transition-colors duration-300">
<span className="font-serif text-5xl text-[#E8E0CC] absolute top-6 right-6 leading-none">02</span>
<h3 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-6 mt-8">Formation Plan</h3>
<p className="font-sans text-xs text-[#4A4740] font-light leading-loose">
                        A customized map is built — individual sessions, cohort placement, and milestone challenges calibrated to where you are.
                    </p>
</div>

<div className="bg-[#FDFAF5] p-10 relative hover:bg-white transition-colors duration-300">
<span className="font-serif text-5xl text-[#E8E0CC] absolute top-6 right-6 leading-none">03</span>
<h3 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-6 mt-8">Ongoing Work</h3>
<p className="font-sans text-xs text-[#4A4740] font-light leading-loose">
                        Weekly or bi-weekly sessions across counseling, group cohort, and embodied practice. The arc moves. Progress is marked.
                    </p>
</div>

<div className="bg-[#FDFAF5] p-10 relative hover:bg-white transition-colors duration-300">
<span className="font-serif text-5xl text-[#E8E0CC] absolute top-6 right-6 leading-none">04</span>
<h3 className="font-sans text-xs tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-6 mt-8">Threshold Ceremony</h3>
<p className="font-sans text-xs text-[#4A4740] font-light leading-loose">
                        Meaningful transitions are marked publicly. Community witnesses the change. New identity is conferred. Belonging is practiced.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#2C2A24] py-24 md:py-32 px-6" id="services">
<div className="max-w-6xl mx-auto text-center mb-20">
<span className="font-sans text-xs tracking-[0.15rem] uppercase text-[#D4B86A] font-light mb-6 block">What We Offer</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#FDFAF5] font-medium tracking-tight mb-8">The Practice</h2>
<p className="font-sans text-sm text-[#A8A49A] max-w-2xl mx-auto font-light leading-loose">
                Three modes of engagement. One arc of formation.
            </p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative border border-[#8B7435]/30 hover:border-[#8B7435] transition-colors group cursor-default overflow-hidden p-10 md:p-12">
<div className="absolute inset-0 z-0">
<img alt="Counseling" className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1915] via-[#1A1915]/90 to-[#1A1915]/80 group-hover:bg-[#1A1915]/70 transition-colors duration-500"></div>
</div>
<div className="relative z-10 h-full flex flex-col">
<span className="font-sans text-[10px] tracking-[0.1875rem] uppercase text-[#8B7435] font-light mb-6 block">Individual</span>
<h3 className="font-serif text-2xl text-[#FDFAF5] mb-8 font-medium tracking-tight">Formation Counseling</h3>
<div className="w-8 h-px bg-[#8B7435]/40 group-hover:bg-[#8B7435] transition-colors mb-8"></div>
<p className="font-sans text-xs text-[#A8A49A] group-hover:text-[#FDFAF5] transition-colors font-light leading-loose mt-auto">
                        One-on-one therapeutic work drawing from attachment theory, shadow integration, nervous system regulation, and masculine archetypes. This is where we confront the wound and begin to transform it.
                    </p>
</div>
</div>

<div className="relative border border-[#8B7435]/30 hover:border-[#8B7435] transition-colors group cursor-default overflow-hidden p-10 md:p-12">
<div className="absolute inset-0 z-0">
<img alt="Cohort" className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1915] via-[#1A1915]/90 to-[#1A1915]/80 group-hover:bg-[#1A1915]/70 transition-colors duration-500"></div>
</div>
<div className="relative z-10 h-full flex flex-col">
<span className="font-sans text-[10px] tracking-[0.1875rem] uppercase text-[#8B7435] font-light mb-6 block">Cohort</span>
<h3 className="font-serif text-2xl text-[#FDFAF5] mb-8 font-medium tracking-tight">Father &amp; Son Groups</h3>
<div className="w-8 h-px bg-[#8B7435]/40 group-hover:bg-[#8B7435] transition-colors mb-8"></div>
<p className="font-sans text-xs text-[#A8A49A] group-hover:text-[#FDFAF5] transition-colors font-light leading-loose mt-auto">
                        Small cohorts of fathers and sons walking a structured arc together. Monthly gatherings, shared vocabulary, graduated challenge, and the witness of a community that knows your name.
                    </p>
</div>
</div>

<div className="relative border border-[#8B7435]/30 hover:border-[#8B7435] transition-colors group cursor-default overflow-hidden p-10 md:p-12">
<div className="absolute inset-0 z-0">
<img alt="Intensive" className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1915] via-[#1A1915]/90 to-[#1A1915]/80 group-hover:bg-[#1A1915]/70 transition-colors duration-500"></div>
</div>
<div className="relative z-10 h-full flex flex-col">
<span className="font-sans text-[10px] tracking-[0.1875rem] uppercase text-[#8B7435] font-light mb-6 block">Intensive</span>
<h3 className="font-serif text-2xl text-[#FDFAF5] mb-8 font-medium tracking-tight">Initiation Design</h3>
<div className="w-8 h-px bg-[#8B7435]/40 group-hover:bg-[#8B7435] transition-colors mb-8"></div>
<p className="font-sans text-xs text-[#A8A49A] group-hover:text-[#FDFAF5] transition-colors font-light leading-loose mt-auto">
                        We help fathers design and lead meaningful rites of passage for their sons. From the threshold ceremony to the five-shift formation plan — ancient structure, contemporary application.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FDFAF5] py-24 md:py-32 px-6">
<div className="max-w-6xl mx-auto text-center mb-16">
<span className="font-sans text-xs tracking-[0.15rem] uppercase text-[#7A7770] font-light mb-6 block">Rooted In</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2A24] font-medium tracking-tight mb-8">The Intellectual Foundations</h2>
<p className="font-sans text-sm text-[#4A4740] max-w-3xl mx-auto font-light leading-loose">
                Ritualis synthesizes across traditions rather than drawing from a single school. Every stream is tested against the question: does it produce formed men?
            </p>
</div>
<div className="max-w-6xl mx-auto border border-[#E8E0CC] bg-[#E8E0CC]">
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px">
<div className="bg-[#F4EFE4] p-8 text-center flex flex-col items-center hover:bg-white transition-colors duration-300">
<h3 className="font-sans text-[10px] tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-5">Anthropology</h3>
<p className="font-sans text-xs text-[#7A7770] font-light leading-loose">
                        Van Gennep, Gilmore. Cross-cultural rites of passage. The universal grammar of initiation.
                    </p>
</div>
<div className="bg-[#F4EFE4] p-8 text-center flex flex-col items-center hover:bg-white transition-colors duration-300">
<h3 className="font-sans text-[10px] tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-5">Psychology</h3>
<p className="font-sans text-xs text-[#7A7770] font-light leading-loose">
                        Jung, attachment theory, shadow integration, Beaton, nervous system regulation, trauma-informed practice.
                    </p>
</div>
<div className="bg-[#F4EFE4] p-8 text-center flex flex-col items-center hover:bg-white transition-colors duration-300">
<h3 className="font-sans text-[10px] tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-5">Theology</h3>
<p className="font-sans text-xs text-[#7A7770] font-light leading-loose">
                        Rohr's Adam's Return, Tyson's Primal Path, Christology — Jesus as the integrated masculine model.
                    </p>
</div>
<div className="bg-[#F4EFE4] p-8 text-center flex flex-col items-center hover:bg-white transition-colors duration-300">
<h3 className="font-sans text-[10px] tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-5">Virtue Ethics</h3>
<p className="font-sans text-xs text-[#7A7770] font-light leading-loose">
                        Greco-Roman paideia, arete, virtus. Stoic practice. Character formed through embodied repetition.
                    </p>
</div>
<div className="bg-[#F4EFE4] p-8 text-center flex flex-col items-center hover:bg-white transition-colors duration-300">
<h3 className="font-sans text-[10px] tracking-[0.125rem] uppercase text-[#8B7435] font-medium mb-5">Developmental</h3>
<p className="font-sans text-xs text-[#7A7770] font-light leading-loose">
                        Erikson, Piaget, Moore and Gillette's archetypes. The King, Warrior, Magician, Lover.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative bg-[#2C2A24] py-32 px-6 text-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Forest silhouette" className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#2C2A24]/70 mix-blend-multiply"></div>
</div>
<div className="max-w-4xl mx-auto relative z-10">
<span className="font-serif text-7xl md:text-8xl text-[#8B7435] leading-none block mb-6 h-12">"</span>
<h3 className="font-serif italic text-2xl md:text-3xl text-[#FDFAF5] font-light leading-loose tracking-wide max-w-3xl mx-auto mb-12 drop-shadow-md">
                If we do not transform our pain, we will most assuredly transmit it.
            </h3>
<span className="font-sans text-xs tracking-[0.1875rem] uppercase text-[#D4B86A] font-light block">
                Richard Rohr — Adam's Return
            </span>
</div>
</section>

<section className="bg-[#8B7435] py-24 px-6 text-center relative overflow-hidden" id="apply">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="font-serif text-4xl md:text-5xl text-[#FDFAF5] font-medium tracking-tight mb-6">
                The Path Begins with One Step
            </h2>
<p className="font-sans text-sm text-[#FDFAF5]/90 font-light leading-loose mb-12 max-w-lg mx-auto">
                You don't need to have it figured out. You need a map and someone who has walked it. Start with a conversation.
            </p>
<a className="inline-block bg-[#FDFAF5] text-[#8B7435] font-sans text-xs tracking-[0.1875rem] uppercase px-10 py-5 hover:bg-[#F4EFE4] transition-colors rounded-none font-medium shadow-sm" href="#">
                Schedule a Consult
            </a>
</div>
</section>

<footer className="bg-[#2C2A24] pt-24 pb-10 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-20">

<div>
<span className="font-serif text-xl tracking-[0.25rem] uppercase text-[#FDFAF5] font-medium mb-4 block">
                    RITUALIS
                </span>
<p className="font-sans text-xs text-[#888480] font-light mb-2">The Practice of Belonging</p>
<p className="font-sans text-xs text-[#555250] font-light">ritualiscounseling.com</p>
</div>

<div>
<h4 className="font-sans text-[10px] tracking-[0.125rem] uppercase text-[#555250] font-medium mb-6">Practice</h4>
<div className="space-y-4 flex flex-col">
<a className="font-sans text-xs text-[#888480] hover:text-[#D4B86A] transition-colors font-light inline-block w-max" href="#">Formation Counseling</a>
<a className="font-sans text-xs text-[#888480] hover:text-[#D4B86A] transition-colors font-light inline-block w-max" href="#">Father &amp; Son Cohorts</a>
<a className="font-sans text-xs text-[#888480] hover:text-[#D4B86A] transition-colors font-light inline-block w-max" href="#">Initiation Design</a>
<a className="font-sans text-xs text-[#D4B86A] hover:text-[#FDFAF5] transition-colors font-light inline-block w-max mt-2" href="#apply">Apply for a Consult</a>
</div>
</div>

<div>
<h4 className="font-sans text-[10px] tracking-[0.125rem] uppercase text-[#555250] font-medium mb-6">Domains</h4>
<div className="space-y-4 flex flex-col">
<a className="font-sans text-xs text-[#888480] hover:text-[#D4B86A] transition-colors font-light inline-block w-max" href="#">ritualisfathers.com</a>
<a className="font-sans text-xs text-[#888480] hover:text-[#D4B86A] transition-colors font-light inline-block w-max" href="#">ritualissons.com</a>
<a className="font-sans text-xs text-[#888480] hover:text-[#D4B86A] transition-colors font-light inline-block w-max" href="#">ritualisdaughters.com</a>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto border-t border-[#4A4740]/30 pt-8 text-center">
<p className="font-sans text-xs text-[#555250] font-light">
                © 2025 Ritualis Counseling · Nashville, TN · All rights reserved
            </p>
</div>
</footer>

    </>
  );
}
