import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
orange: '#F36F21',
black: '#050505',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
scroll: 'scroll 60s linear infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full max-w-[1600px] inset-x-0 mx-auto z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 z-50 relative" href="#">
<img alt="Fysiotherapie Overschie Logo" className="w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fe65b23-f579-44c1-99d2-a5131b8566b7_320w.png"/>
</a>

<div className="hidden lg:flex gap-8 gap-x-8 gap-y-8 items-center">

<div className="relative group">
<button className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors py-6">
              Fysiotherapie
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-200 group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 overflow-hidden">
<div className="grid grid-cols-2 p-1">
<div className="p-4 space-y-1">
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3 pl-2">
                    Klachten
                  </span>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                    Rug &amp; Nek
                  </a>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                    Schouder
                  </a>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                    Knie &amp; Enkel
                  </a>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                    Sportblessure
                  </a>
</div>
<div className="p-4 space-y-1 bg-slate-50/50">
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3 pl-2">
                    Behandelingen
                  </span>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                    Manueel
                  </a>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                    Dry Needling
                  </a>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                    Revalidatie
                  </a>
</div>
</div>
</div>
</div>

<a className="hover:text-brand-orange transition-colors text-sm font-bold text-slate-900" href="#">
            EGYM
          </a>
<a className="flex items-center gap-1.5 hover:text-brand-orange transition-colors text-sm font-semibold text-slate-900" href="#">
            Orthopedisch Consult
          </a>

<a className="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors" href="#">
            Over Ons
          </a>

<div className="relative group">
<button className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors py-6">
              Praktische Info
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform duration-200 group-hover:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute top-full right-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 p-1">
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                Tarieven
              </a>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                Vergoedingen
              </a>
<a className="block px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-brand-orange text-sm font-medium text-slate-600 transition-colors" href="#">
                Contact
              </a>
</div>
</div>
</div>

<div className="hidden lg:block">
<button className="bg-brand-orange text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            Maak Afspraak
          </button>
</div>

<button className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" id="mobile-menu-open">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="fixed inset-0 z-[60] bg-white transform translate-x-full transition-transform duration-300 opacity-0 pointer-events-none lg:hidden flex flex-col" id="mobile-menu" style={{backgroundColor: 'white'}}>
<div className="p-6 flex items-center justify-between border-b border-slate-100">
<span className="text-lg font-bold tracking-tight text-slate-900">
            Menu
          </span>
<button className="p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" id="mobile-menu-close">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
<a className="text-lg font-semibold text-slate-600 hover:text-brand-orange" href="#">
            Fysiotherapie
          </a>
<a className="text-lg font-bold text-slate-900 hover:text-brand-orange" href="#">
            E-Gym
          </a>
<a className="flex items-center gap-2 text-lg font-semibold text-brand-orange bg-orange-50 p-3 -mx-3 rounded-xl" href="#">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            Orthopedisch Consult
          </a>
<a className="text-lg font-semibold text-slate-600 hover:text-brand-orange" href="#">
            Over Ons
          </a>
<a className="text-lg font-semibold text-slate-600 hover:text-brand-orange" href="#">
            Praktische Info
          </a>
<div className="mt-auto pt-6 border-t border-slate-100">
<button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-transform">
              Maak Afspraak
            </button>
</div>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-28 pb-12 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

<div className="reveal active max-w-xl">
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-brand-orange text-xs font-bold uppercase tracking-wide mb-4 md:mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
</span>
              Nieuwe patiënten welkom
            </div>
<h1 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[1.05] mb-4 md:mb-8">
              Zorg die werkt.
              <br/>
<span className="text-slate-400">Punt.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-6 leading-relaxed font-normal max-w-md">
              Moderne fysiotherapie in Overschie. Wij combineren manuele
              expertise met data-gedreven herstel.
            </p>
<div className="flex items-center justify-center md:justify-start gap-3 mb-8 md:mb-10">
<div className="flex gap-1 text-brand-orange">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-slate-500 font-medium text-base">
                4.8/5 op Zorgkaart &amp; Google
              </span>
</div>
<div className="hidden md:flex items-center gap-6">
<button className="bg-brand-orange text-white px-8 py-4 rounded-full text-base font-medium hover:translate-y-[-2px] transition-transform shadow-xl shadow-orange-500/25 flex items-center gap-2">
                Maak Afspraak
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex items-center gap-3 text-sm font-medium text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<span>4.9/5 Zorgkaart</span>
</div>
</div>
</div>

<div className="relative reveal delay-200 hidden md:block active">
<div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden bg-slate-100 relative shadow-2xl shadow-slate-200/50 group">
<img alt="Therapie sessie" className="object-cover w-full h-full card-zoom-image" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>

<div className="absolute bottom-8 left-8 right-8 md:right-auto bg-white/90 backdrop-blur-lg px-6 py-5 rounded-2xl shadow-xl border border-white/50">
<div className="flex items-start gap-4">
<div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-sm font-bold text-slate-900 mb-1">
                      Volledig Vergoed
                    </p>
<p className="text-xs text-slate-500">
                      Contracten met alle verzekeraars in Nederland.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-24 md:py-32 bg-brand-black flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 opacity-60">
<img alt="Dark Gym" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center reveal active">
<h2 className="md:text-7xl text-5xl font-bold text-white tracking-tighter mb-10 drop-shadow-xl">
          Fit &amp; Vitaal in 30 minuten.
        </h2>

<button className="group relative px-10 py-4 bg-transparent border-2 border-white rounded-full text-white font-medium overflow-hidden transition-colors duration-300 hover:bg-white hover:text-brand-black">
<span className="z-10 flex items-center gap-3 text-lg tracking-wide relative">
            Ontdek EGYM
          </span>
</button>
</div>
</section>

<section className="md:py-32 bg-white pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6 mb-8 md:mb-16 flex items-end justify-between reveal active">
<div className="max-w-lg">
<h3 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tighter mb-3">
            Kies je klacht
          </h3>
<p className="text-slate-500 text-lg">
            Selecteer waar je last van hebt voor een persoonlijk behandelplan.
          </p>
</div>
<div className="hidden md:flex gap-3">
<button className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-slate-700 hover:text-brand-orange hover:shadow-lg transition-all active:scale-95" id="scroll-left">
<svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center text-slate-700 hover:text-brand-orange hover:shadow-lg transition-all active:scale-95" id="scroll-right">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="w-full overflow-x-auto flex gap-4 px-[17.5vw] md:px-[calc(50vw-10rem)] py-12 snap-x snap-mandatory scroll-smooth no-scrollbar items-center" id="complaints-scroll-container">
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Nek &amp; Hoofd" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Nek &amp; Hoofd
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Hoofdpijn, Stijve nek, Whiplash
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Schouder" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Schouder
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Frozen shoulder, Peesklachten
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Rug" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Rug
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Spit, Hernia, Ischias
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Arm &amp; Pols" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Arm &amp; Pols
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Tennisarm, Carpaal Tunnel
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Heup &amp; Bekken" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Heup &amp; Bekken
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Artrose, Instabiliteit
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Knie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Knie
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Meniscus, Kruisband
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Enkel &amp; Voet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Enkel &amp; Voet
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Hielspoor, Verzwikking
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Sportblessure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Sportblessure
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Zweepslag, Spierscheur
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.915816)', opacity: '0.663262', zIndex: '1'}}>
<img alt="Revalidatie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Revalidatie
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Na operatie, Botbreuk
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.999529)', opacity: '0.998115', zIndex: '10'}}>
<img alt="Nek &amp; Hoofd" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Nek &amp; Hoofd
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Hoofdpijn, Stijve nek, Whiplash
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.916328)', opacity: '0.665314', zIndex: '1'}}>
<img alt="Schouder" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Schouder
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Frozen shoulder, Peesklachten
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Rug" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Rug
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Spit, Hernia, Ischias
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Arm &amp; Pols" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Arm &amp; Pols
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Tennisarm, Carpaal Tunnel
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Heup &amp; Bekken" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Heup &amp; Bekken
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Artrose, Instabiliteit
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Knie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Knie
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Meniscus, Kruisband
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Enkel &amp; Voet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Enkel &amp; Voet
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Hielspoor, Verzwikking
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Sportblessure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Sportblessure
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Zweepslag, Spierscheur
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Revalidatie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Revalidatie
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Na operatie, Botbreuk
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Nek &amp; Hoofd" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Nek &amp; Hoofd
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Hoofdpijn, Stijve nek, Whiplash
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Schouder" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Schouder
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Frozen shoulder, Peesklachten
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Rug" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Rug
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Spit, Hernia, Ischias
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Arm &amp; Pols" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Arm &amp; Pols
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Tennisarm, Carpaal Tunnel
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Heup &amp; Bekken" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Heup &amp; Bekken
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Artrose, Instabiliteit
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Knie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&amp;w=1974&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Knie
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Meniscus, Kruisband
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Enkel &amp; Voet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Enkel &amp; Voet
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Hielspoor, Verzwikking
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Sportblessure" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Sportblessure
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Zweepslag, Spierscheur
            </p>
</div>
</a>
<a className="complaint-card relative shrink-0 w-[65vw] md:w-80 h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 snap-center" href="#" style={{transform: 'scale(0.9)', opacity: '0.6', zIndex: '1'}}>
<img alt="Revalidatie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
<h4 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-none tracking-tight">
              Revalidatie
            </h4>
<p className="text-white/80 text-sm font-medium leading-snug md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
              Na operatie, Botbreuk
            </p>
</div>
</a>
</div>
</section>
<section className="relative w-full py-32 bg-[#050505] overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 w-full h-full pointer-events-none">
<svg className="w-full h-full opacity-40" fill="none" preserveaspectratio="xMidYMid slice" viewbox="0 0 800 600">
<defs>
<lineargradient id="beam-grad" x1="0" x2="1" y1="0" y2="0">
<stop stop-color="#F36F21" stop-opacity="0"></stop>
<stop offset="0.5" stop-color="#F36F21"></stop>
<stop offset="1" stop-color="#F36F21" stop-opacity="0"></stop>
</lineargradient>
</defs>
<g transform="translate(400,300)">

<circle className="animate-sonar" cx="0" cy="0" r="0" stroke="#F36F21"></circle>
<circle className="animate-sonar delay-1000" cx="0" cy="0" r="0" stroke="#F36F21"></circle>
<circle className="animate-sonar delay-2000" cx="0" cy="0" r="0" stroke="#F36F21"></circle>

<circle cx="0" cy="0" r="100" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"></circle>
<circle cx="0" cy="0" r="200" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"></circle>

<path className="animate-beam" d="M0 0 L400 0" stroke="url(#beam-grad)" strokeWidth="2"></path>
<path className="animate-beam delay-1000" d="M0 0 L-400 0" stroke="url(#beam-grad)" strokeWidth="2"></path>
<path className="animate-beam delay-2000" d="M0 0 L0 300" stroke="url(#beam-grad)" strokeWidth="2"></path>
</g>
</svg>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-12 text-center shadow-2xl relative overflow-hidden group reveal active">

<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<span className="text-brand-orange font-bold tracking-widest uppercase text-xs md:text-sm mb-6 block">
            Orthopedisch Consult &amp; Second Opinion
          </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Loop je vast in de
            
            reguliere zorg?
          </h2>
<p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Voor complexe klachten waar protocollen niet werken. Wij combineren
            de 4XT-methode, fascia-therapie en manuele technieken voor direct
            resultaat.
          </p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-white/80 font-medium text-sm md:text-base">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#F36F21]"></span>
              4XT Revalidatie
            </div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#F36F21]"></span>
              Fascia &amp; Ketens
            </div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#F36F21]"></span>
              Second Opinion
            </div>
</div>
<button className="shiny-btn group inline-flex items-center gap-2">
<span className="relative z-10">Bekijk Orthopedisch Consult</span>
<svg className="relative z-10 transition-transform group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</section>

<section className="md:py-24 bg-white border-slate-100 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16 text-center reveal">
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4">
          Overschie spreekt.
        </h2>
<p className="text-lg font-medium text-slate-500">
          Beoordeeld met een 9+ op Zorgkaart &amp; Google.
        </p>
</div>
<div className="relative w-full overflow-hidden pb-10 reveal">
<div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">

<div className="w-[300px] md:w-[350px] bg-white p-8 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col gap-6 shrink-0">
<div className="flex text-brand-orange gap-1">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-700 font-medium text-lg leading-relaxed">
              "Eindelijk van mijn rugpijn af! Super fijne begeleiding en
              duidelijke oefeningen."
            </p>
<div className="mt-auto flex items-center justify-between">
<span className="font-bold text-slate-900">Anja V.</span>
<div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                Zorgkaart
              </div>
</div>
</div>
<div className="w-[300px] md:w-[350px] bg-white p-8 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-100 flex flex-col gap-6 shrink-0">
<div className="flex text-brand-orange gap-1">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-700 font-medium text-lg leading-relaxed">
              "Ze nemen echt de tijd voor je. De E-Gym cirkel is ook een
              aanrader!"
            </p>
<div className="mt-auto flex items-center justify-between">
<span className="font-bold text-slate-900">Mark de J.</span>
<div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-wider">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                Google
              </div>
</div>
</div>
<div className="md:w-[350px] shadow-slate-200/50 flex flex-col gap-6 shrink-0 bg-white w-[300px] border-slate-100 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-lg gap-x-6 gap-y-6">
<div className="flex text-brand-orange gap-1">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg></div></div></div></div></section>
    </>
  );
}
