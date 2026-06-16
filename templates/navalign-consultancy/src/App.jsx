import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
background: '#0F121A',
surface: '#161b26',
primary: '#B20D0D',
primaryLight: '#E61515',
glass: 'rgba(255, 255, 255, 0.03)',
glassBorder: 'rgba(255, 255, 255, 0.08)',
},
fontFamily: {
saira: ['Saira', 'sans-serif'],
montserrat: ['Montserrat', 'sans-serif'],
},
animation: {
'shimmer': 'shimmer 2s linear infinite',
'gradient': 'gradient 8s linear infinite',
'spin-slow': 'spin 3s linear infinite',
},
keyframes: {
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' }
},
gradient: {
'0%, 100%': { backgroundPosition: '0% 50%' },
'50%': { backgroundPosition: '100% 50%' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 100, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.6, random: true }, // Increased opacity
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.25, width: 1 }, // Increased line opacity
                    move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                },
                retina_detect: true
            });

            // Intersection Observer for Reveal Animation
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 pointer-events-none" id="particles-js"><canvas className="particles-js-canvas-el" height="1275" style={{width: '100%', height: '100%'}} width="2072"></canvas></div>



<nav className="fixed transition-all duration-300 bg-[#0F121A]/80 w-full z-50 border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="/#">
<div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(178,13,13,0.5)]">
<svg className="w-6 h-6" fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="6" x2="18" y1="18" y2="6"></line>
<polyline className="" points="6 6 18 6 18 18"></polyline>
</svg>
</div>
<span className="group-hover:text-primary transition-colors text-2xl font-bold text-white tracking-widest font-saira">ALIGN AI</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#probleem">Probleem</a>
<a className="hover:text-white transition-colors" href="#aanpak">Aanpak</a>
<a className="hover:text-white transition-colors" href="#cases">Cases</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden md:block">
<a className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group" href="#cta-plan">
<span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#B20D0D_0%,#ffffff_50%,#B20D0D_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0F121A] px-5 py-2.5 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-[#161b26]">
                        Doe de AI-nulmeting
                    </span>
</a>
</div>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden reveal active pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium uppercase tracking-wider mb-8 animate-float">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Strategische AI Partner
        </div>

<h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6 text-white drop-shadow-lg tracking-tight">
            Je hebt geen AI-probleem.<br/>
<span className="text-gradient-red">Je hebt een richting-probleem.</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Iedereen praat over AI. Niemand weet wat écht werkt voor jouw organisatie. Wij geven je een plan dat
            vooruitgang brengt—stap voor stap, meetbaar, zonder gokwerk.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<a className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-medium shadow-[0_0_20px_rgba(178,13,13,0.4)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(178,13,13,0.6)]" href="#contact">
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>
<span className="relative z-20 flex items-center gap-2">
<svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2a9 9 0 0 1 9 9"></path>
<path d="M13 6a5 5 0 0 1 5 5"></path>
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
                    Plan een gratis AI-strategiecall
                </span>
</a>

<a className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 group relative overflow-hidden bg-[linear-gradient(110deg,#161b26,45%,#B20D0D,55%,#161b26)] bg-[length:200%_100%] animate-shimmer border border-white/10 transition-colors" href="#scan">
                Doe eerst de AI-integratie scan
                <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-surface/50 backdrop-blur-sm reveal active">
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<div className="flex items-start gap-4 mb-4">
<svg className="lucide lucide-quote w-8 h-8 text-primary shrink-0" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-lg text-white font-light italic">
                            "De grootste winst was niet technologie, maar duidelijkheid. We weten nu wat wel loont en wat niet."
                        </p>
</div>
<div className="pl-12">
<p className="font-medium text-white">Informatree</p>
<p className="text-sm text-slate-500">Financiële dienstverlening</p>
</div>
</div>
<div className="space-y-3">
<p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">Resultaat</p>
<div className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="lucide lucide-arrow-right w-4 h-4 text-primary" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        Prijsopstellingen teruggebracht van halve dag naar 45 minuten
                    </div>
<div className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="lucide lucide-arrow-right w-4 h-4 text-primary" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        Adviestrajecten geautomatiseerd zonder kwaliteitsverlies
                    </div>
<div className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="lucide lucide-arrow-right w-4 h-4 text-primary" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        Schaalbaarheid zonder extra personeel
                    </div>
</div>
</div>
</div>
</div>

<section className="bg-[#0F121A] pt-24 pr-6 pb-24 pl-6 relative reveal active" id="probleem">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
<div className="">
<h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">Waarom 2026 het <span className="text-primary">omslagpunt</span> is</h2>
<div className="space-y-6 text-slate-400 font-light">
<p className=""><strong className="text-white">73%</strong> van de MKB-bedrijven experimenteert met AI. Maar slechts <strong className="text-white">15%</strong> heeft een structureel plan.</p>
<div className="p-6 rounded-2xl glass-card border-l-4 border-l-primary">
<h4 className="text-white font-medium mb-4">Bedrijven die wél een strategie hebben:</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Besparen 15–20 uur per week per medewerker op repetitief werk
                            </li>
<li className="flex items-start gap-3 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Verkorten doorlooptijden met 40–60%
                            </li>
<li className="flex items-start gap-3 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mt-1 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Verlagen foutmarges in kritieke processen tot bijna nul
                            </li>
</ul>
</div>
</div>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-6 tracking-tight">Elke maand uitstel betekent:</h3>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-4 p-4 rounded-xl bg-red-900/5 border border-red-500/10">
<div className="p-2 bg-red-500/10 rounded-lg text-red-500 shrink-0">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<p className="text-slate-300 text-sm">Tientallen uren verspild aan handmatige taken</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-red-900/5 border border-red-500/10">
<div className="p-2 bg-red-500/10 rounded-lg text-red-500 shrink-0">
<svg className="lucide lucide-trending-down w-5 h-5" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
<div className="">
<p className="text-slate-300 text-sm">Grotere afstand tot concurrenten die wél automatiseren</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-red-900/5 border border-red-500/10">
<div className="p-2 bg-red-500/10 rounded-lg text-red-500 shrink-0">
<svg className="lucide lucide-coins w-5 h-5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div>
<p className="text-slate-300 text-sm">Hogere investeringen later om alsnog bij te trekken</p>
</div>
</div>
</div>
<div className="text-center md:text-left">
<p className="text-white text-lg font-medium mb-4">De vraag is niet meer óf je AI inzet. De vraag is: heb je een strategie, of gok je?</p>
<a className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium group" href="#contact">
                        Plan een strategiecall <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#0F121A] border-white/5 py-20 reveal">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Klinkt dit <span className="text-primary">herkenbaar</span>?</h2>
<div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 font-light italic">
<span className="px-4 py-2 bg-white/5 rounded-full">"We hebben tien AI-ideeën, maar geen idee welke echt rendement opleveren."</span>
<span className="px-4 py-2 bg-white/5 rounded-full">"Als we te laat zijn, lopen we achter de feiten aan."</span>
<span className="px-4 py-2 bg-white/5 rounded-full">"Ik wil niet investeren in projecten zonder duidelijke uitkomst."</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
<svg className="lucide lucide-hourglass w-8 h-8 text-orange-400 mb-4" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
<p className="text-sm text-slate-300 font-light">Handmatige taken die veel onnodige tijd beslaan</p>
</div>
<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
<svg className="lucide lucide-alert-triangle w-8 h-8 text-red-400 mb-4" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<p className="text-sm text-slate-300 font-light">Fouten die marges aantasten en klanten kosten</p>
</div>
<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
<svg className="lucide lucide-snail w-8 h-8 text-yellow-400 mb-4" data-lucide="snail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"></path><circle cx="10" cy="13" r="8"></circle><path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"></path><path d="M18 3 19.1 5.2"></path><path d="M22 3 20.9 5.2"></path></svg>
<p className="text-sm text-slate-300 font-light">Trage verwerkingstijden waardoor klanten ergens anders gaan kijken</p>
</div>
<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
<svg className="lucide lucide-database w-8 h-8 text-blue-400 mb-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<p className="text-sm text-slate-300 font-light">Data die niet benut wordt</p>
</div>
<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
<svg className="lucide lucide-users w-8 h-8 text-purple-400 mb-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<p className="text-sm text-slate-300 font-light">Teams die geen tijd meer hebben voor waardevol werk</p>
</div>
<div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex flex-col justify-center">
<p className="text-white font-medium mb-1">Dit speelt niet "later", maar nu.</p>
<p className="text-xs text-slate-400">Bedrijven die automatiseren met AI, lopen elke maand verder uit.</p>
</div>
</div>
</div>
</section>

<section className="text-center bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#b20d0d]/20 to-[#0f121a]/75 px-6 py-24 reveal">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">Wij brengen <span className="text-primary">richting, rendement en rust</span></h2>
<p className="text-lg text-slate-400 mb-8 font-light">
                Align AI is een strategische én operationele AI Partner voor het MKB. Wij zorgen dat organisaties grip krijgen op hun processen, hun AI-koers en dat automatisering meer oplevert dan het kost.
            </p>
<div className="flex flex-wrap justify-center gap-8 mb-10">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-check-circle w-5 h-5 text-primary" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Stagnatie doorbreken
                </div>
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-check-circle w-5 h-5 text-primary" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Versnipperde experimenten voorkomen
                </div>
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-check-circle w-5 h-5 text-primary" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> AI inzetten waar het direct waarde creëert
                </div>
</div>
<p className="text-xl font-medium text-white italic">"Zonder strategie wordt AI een belasting. Met Align AI wordt het een hefboom voor groei."</p>
</div>
</section>

<section className="bg-gradient-to-t from-black/10 to-black/0 px-6 py-24 relative reveal" id="aanpak">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5 backdrop-blur text-xs text-slate-300">
                    Het Align AI transformatieplan
                </div>
<h2 className="text-4xl font-semibold text-white tracking-tight">Drie fases naar <span className="text-primary">resultaat</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="group glass-card flex flex-col overflow-hidden isolate h-full rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute -bottom-1 -right-1 text-[280px] leading-none font-saira font-semibold text-primary/20 select-none pointer-events-none tracking-tighter z-0">
    1</div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">AI Audit en Strategie</h3>
<p className="text-slate-400 text-sm mb-4 italic">Inzicht in waar kansen liggen en waar processen nu vertragen.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-300 font-light flex-grow">
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Analyse van processen en bottlenecks
      </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Berekening van tijd en kosten per
        afdeling
      </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Prioriteiten gebaseerd op echte business
        impact
      </li>
</ul>
<div className="pt-4 border-t border-white/10 mt-auto">
<p className="text-xs text-slate-500 font-medium uppercase mb-1">Uitkomst:</p>
<p className="text-sm text-white">Een actieplan dat direct de juiste knoppen raakt. Je weet wat wel loont en wat niet.
      </p>
</div>
</div>
</div>

<div className="group glass-card flex flex-col border-primary/30 overflow-hidden isolate h-full rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute -bottom-1 -right-1 text-[280px] leading-none font-saira font-semibold text-primary/20 select-none pointer-events-none tracking-tighter z-0">
        2</div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Implementatie &amp; Development</h3>
<p className="text-slate-400 text-sm mb-4 italic">Oplossingen die je organisatie sneller, slimmer en schaalbaarder
            maken.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-300 font-light flex-grow">
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Automatiseren van tijdrovende
                taken
            </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Verlagen van foutkansen
            </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Versnellen van doorlooptijden
            </li>
</ul>
<div className="pt-4 border-t border-white/10 mt-auto">
<p className="text-xs text-slate-500 font-medium uppercase mb-1">Uitkomst:</p>
<p className="text-sm text-white">Zichtbare tijdwinst en lagere operationele druk binnen 60 tot 90 dagen.</p>
</div>
</div>
</div>

<div className="group glass-card flex flex-col overflow-hidden isolate h-full rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute -bottom-1 -right-1 text-[280px] leading-none font-saira font-semibold text-primary/20 select-none pointer-events-none tracking-tighter z-0">
        3</div>
<div className="relative z-10 flex flex-col h-full">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Aftersales, Consultancy &amp; Training</h3>
<p className="text-slate-400 text-sm mb-4 italic">Zorgen dat verbetering blijvend wordt.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-300 font-light flex-grow">
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Training voor teams
            </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Optimalisatie op basis van
                performance
            </li>
<li className="flex items-start gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Begeleiding bij nieuwe kansen en
                risico's
            </li>
</ul>
<div className="pt-4 border-t border-white/10 mt-auto">
<p className="text-xs text-slate-500 font-medium uppercase mb-1">Uitkomst:</p>
<p className="text-sm text-white">Een organisatie die vooruit blijft bewegen en niet terugvalt in oude patronen.
            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 reveal" id="cases">
<div className="max-w-7xl mx-auto">
<div className="glass-card rounded-3xl p-8 md:p-12 border-l-4 border-l-primary relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-[50px] pointer-events-none"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-12">
<div className="">
<div className="text-sm text-primary font-bold tracking-wider uppercase mb-2">Case Study</div>
<h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">Informatree</h2>
<h3 className="text-xl text-slate-400 mb-6 tracking-tight">Van AI-ideeën naar <span className="text-primary">duidelijke keuzes</span> met impact</h3>
<div className="space-y-6 text-slate-300 text-sm font-light leading-relaxed">
<div className="">
<h4 className="text-white font-medium mb-1">Situatie:</h4>
<p className="">Informatree ondersteunt jonge ondernemers met financiële administratie, belastingaangiften en persoonlijk advies. Een kennisintensieve dienstverlening, waarin tijd direct geld is. Het team zag volop kansen voor automatisering en AI, maar liep vast op een herkenbaar probleem: te veel ideeën, te weinig overzicht. Prijsopstellingen en adviestrajecten kostten soms uren tot een halve dag, en elk nieuw automatiseringsidee voelde logisch, maar onzeker in rendement.</p>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Aanpak:</h4>
<p className="">De AI-audit van Align AI bracht daar verandering in. Door processen, workflows en tijdsbesteding systematisch in kaart te brengen, werd direct duidelijk waar AI écht waarde kon toevoegen en waar niet. Ideeën die meer zouden kosten dan opleveren, vielen bewust af. De focus verschoof naar laaghangend fruit met directe tijdswinst.</p>
</div>
</div>
</div>
<div className="flex flex-col justify-between">
<div className="bg-surface/50 rounded-2xl p-6 border border-white/5 mb-6">
<h4 className="text-white font-medium mb-4">Resultaat:</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0"><svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></div>
                                    Prijsopstellingen teruggebracht van halve dag naar 45 minuten
                                </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0"><svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></div>
                                    Adviestrajecten geautomatiseerd zonder kwaliteitsverlies
                                </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0"><svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></div>
                                    Schaalbaarheid zonder extra personeel
                                </li>
</ul>
</div>
<div className="glass-card p-6 rounded-2xl relative">
<svg className="lucide lucide-quote absolute -top-3 -left-3 w-8 h-8 text-primary bg-[#0F121A] rounded-full p-1.5 border border-white/10" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-slate-300 italic mb-3 text-sm">"De grootste winst was niet technologie, maar duidelijkheid. We weten nu wat wel loont en wat niet."</p>
<p className="text-xs text-slate-500 mt-2">Het resultaat was niet alleen efficiëntie, maar rust en richting. Informatree kan nu gefundeerde keuzes maken.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0F121A] pt-24 pr-6 pb-24 pl-6 reveal" id="reviews">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white text-center mb-16 tracking-tight">Wat <span className="text-primary">anderen zeggen</span></h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="glass-card p-6 rounded-2xl">
<div className="flex text-primary mb-3"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg></div>
<p className="text-slate-300 text-sm mb-4 italic">"We hadden tien AI-ideeën, maar geen idee wat rendement zou opleveren.
      Align AI bracht structuur. Nu investeren we met vertrouwen, niet op gevoel."</p>
<p className="text-white text-sm font-medium">Joris Hendriksen</p>
<p className="text-xs text-slate-500">Operationeel Manager, Groothandel (45 mdw)</p>
</div>

<div className="glass-card p-6 rounded-2xl">
<div className="flex text-primary mb-3"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg></div>
<p className="text-slate-300 text-sm mb-4 italic">"Binnen 60 dagen merkbare tijdwinst. Onze teams focussen nu op
      klanten, niet op administratie. De ROI was duidelijk vanaf week acht."</p>
<p className="text-white text-sm font-medium">Linda van Dijk</p>
<p className="text-xs text-slate-500">Directeur, Zakelijke Dienstverlening (12 mdw)</p>
</div>

<div className="glass-card p-6 rounded-2xl">
<div className="flex text-primary mb-3"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg></div>
<p className="text-slate-300 text-sm mb-4 italic">"Align AI denkt mee als partner, niet als leverancier. Ze begrijpen
      dat adoptie minstens zo belangrijk is als technologie. Onze teams werkten binnen drie weken anders."</p>
<p className="text-white text-sm font-medium">Sophie Bakker</p>
<p className="text-xs text-slate-500">IT-verantwoordelijke, Marketing (18 mdw)</p>
</div>

<div className="glass-card p-6 rounded-2xl">
<div className="flex text-primary mb-3"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg></div>
<p className="text-slate-300 text-sm mb-4 italic">"De audit was een eye-opener. Kleine aanpassingen, grote impact. We
      schalen nu zonder extra personeel—dat was het doel, en dat hebben we bereikt."</p>
<p className="text-white text-sm font-medium">Tom de Groot</p>
<p className="text-xs text-slate-500">Directeur, Logistiek (35 mdw)</p>
</div>
</div>
</div>
</section>

<section className="border-y reveal bg-[#0f121a] border-white/5 px-6 py-24">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

<div className="">
<h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">Voor wie dit <span className="text-primary">nú relevant</span> is</h3>
<p className="text-slate-400 mb-4">Organisaties met 5 tot 50 medewerkers die:</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3 text-slate-300 text-sm font-light"><svg className="lucide lucide-check w-4 h-4 text-primary mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Merken dat processen groei afremmen</li>
<li className="flex items-start gap-3 text-slate-300 text-sm font-light"><svg className="lucide lucide-check w-4 h-4 text-primary mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Zien dat concurrenten sneller leveren of reageren</li>
<li className="flex items-start gap-3 text-slate-300 text-sm font-light"><svg className="lucide lucide-check w-4 h-4 text-primary mt-1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Weten dat AI nodig is maar geen routekaart hebben</li>
</ul>
<p className="text-sm text-slate-500 font-medium uppercase">Typische sectoren:</p>
<p className="text-slate-400 text-sm">Productie, logistiek en handel, zakelijke dienstverlening, bedrijven met veel repeterend werk.</p>
</div>

<div className="space-y-6">
<div className="glass-card p-6 rounded-2xl">
<h4 className="text-white font-medium mb-2 flex items-center gap-2"><svg className="lucide lucide-help-circle w-4 h-4 text-slate-500" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg> "Zijn we niet te klein voor AI?"</h4>
<p className="text-slate-400 text-sm font-light">Juist niet. Kleinere teams profiteren direct van tijdwinst en lagere druk. Geen bureaucratie, snellere beslissingen, directe impact op je werkdruk. AI is niet alleen voor grote bedrijven—het is een hefboom voor MKB dat snel wil groeien.</p>
</div>
<div className="glass-card p-6 rounded-2xl">
<h4 className="text-white font-medium mb-2 flex items-center gap-2"><svg className="lucide lucide-help-circle w-4 h-4 text-slate-500" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg> "Wat als we geen IT-afdeling hebben?"</h4>
<p className="text-slate-400 text-sm font-light">Dat is precies waarom we er zijn. Wij bouwen, integreren én beheren. Jij richt je op je kernbusiness. Je hebt geen IT-team nodig—je hebt een partner nodig die het voor je regelt.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative reveal">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-white mb-8 tracking-tight">Wat <span className="text-primary">niets doen</span> echt betekent</h2>
<p className="text-slate-400 mb-8 font-light max-w-2xl mx-auto">
                Stilstand lijkt neutraal, maar het tikt door in tijd, energie en gemiste kansen.
            </p>
<div className="grid md:grid-cols-2 gap-4 text-left mb-12">
<div className="p-4 rounded-xl bg-red-900/10 border border-red-500/10 flex items-center gap-3">
<svg className="lucide lucide-x-circle text-red-500 w-5 h-5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> <span className="text-slate-300">Hogere druk op medewerkers</span>
</div>
<div className="p-4 rounded-xl bg-red-900/10 border border-red-500/10 flex items-center gap-3">
<svg className="lucide lucide-x-circle text-red-500 w-5 h-5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> <span className="text-slate-300">Gemiste commerciële kansen</span>
</div>
<div className="p-4 rounded-xl bg-red-900/10 border border-red-500/10 flex items-center gap-3">
<svg className="lucide lucide-x-circle text-red-500 w-5 h-5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> <span className="text-slate-300">Meer fouten en herstelwerk</span>
</div>
<div className="p-4 rounded-xl bg-red-900/10 border border-red-500/10 flex items-center gap-3">
<svg className="lucide lucide-x-circle text-red-500 w-5 h-5" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> <span className="text-slate-300">Oplopende operationele kosten</span>
</div>
</div>
<div className="glass-card p-8 rounded-2xl inline-block max-w-2xl">
<h4 className="text-white font-medium mb-2">"Wat kost het om te wachten?"</h4>
<p className="text-slate-400 text-sm font-light mb-4">Gemiddeld tientallen tot honderden uren per maand aan inefficiëntie. Plus vertraging in sales, service en operatie. Elke maand dat je wacht, wordt de afstand tot snellere concurrenten groter. Benut AI nu als kans, wacht niet tot het een laatste redmiddel wordt.</p>

<a className="inline-block px-6 py-3 rounded-lg text-sm font-medium transition-colors bg-[linear-gradient(110deg,#161b26,45%,#B20D0D,55%,#161b26)] bg-[length:200%_100%] animate-shimmer text-white border border-white/10" href="#contact">Plan een strategiecall</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0F121A] border-y border-white/5 reveal">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white text-center mb-12 tracking-tight">Hoe <span className="text-primary">vooruitgang</span> eruitziet</h2>
<p className="text-center text-slate-400 mb-12">Bedrijven die met Align AI werken:</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="glass-card p-4 rounded-xl text-center flex flex-col items-center justify-center">
<svg className="lucide lucide-calendar-days w-8 h-8 text-primary mb-3" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="text-sm text-white">Winnen weken per jaar per medewerker</span>
</div>
<div className="glass-card p-4 rounded-xl text-center flex flex-col items-center justify-center">
<svg className="lucide lucide-target w-8 h-8 text-primary mb-3" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-sm text-white">Reduceren fouten in kernprocessen</span>
</div>
<div className="glass-card p-4 rounded-xl text-center flex flex-col items-center justify-center">
<svg className="lucide lucide-zap w-8 h-8 text-primary mb-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm text-white">Reageren sneller dan hun markt</span>
</div>
<div className="glass-card p-4 rounded-xl text-center flex flex-col items-center justify-center">
<svg className="lucide lucide-trending-up w-8 h-8 text-primary mb-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm text-white">Verhogen marges door minder verspilling</span>
</div>
<div className="glass-card p-4 rounded-xl text-center flex flex-col items-center justify-center">
<svg className="lucide lucide-users w-8 h-8 text-primary mb-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm text-white">Groeien zonder direct extra personeel</span>
</div>
</div>
<p className="text-center text-sm text-slate-500 mt-8 italic">Voordeel ontstaat niet door meer theorie, maar door beter georganiseerde processen.</p>
</div>
</section>

<section className="py-24 px-6 reveal">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

<div className="p-8 rounded-2xl border border-white/5 bg-white/5">
<h3 className="text-xl font-bold text-slate-300 mb-6">Andere partijen</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-400"><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Verkopen losse AI-tools</li>
<li className="flex items-center gap-3 text-slate-400"><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Leveren extra complexiteit</li>
<li className="flex items-center gap-3 text-slate-400"><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Bouwen projecten zonder duidelijk doel</li>
</ul>
</div>
<div className="glass-card p-8 rounded-2xl border-primary/30 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
<h3 className="text-xl font-bold text-white mb-6">Align AI</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-primary" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Vertrekt vanuit echte businessprioriteiten</li>
<li className="flex items-center gap-3 text-white"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-primary" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Bouwt alleen wat rendement en schaalbaarheid oplevert</li>
<li className="flex items-center gap-3 text-white"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-primary" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Garandeert een werkend, geïntegreerd systeem</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#0F121A] reveal" id="cta-plan">

<div className="absolute inset-0 z-0">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(178,13,13,0.15),transparent_70%)]"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Klaar om te stoppen met gokken?</h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                    Krijg helderheid over waar AI voor jouw bedrijf waarde toevoegt. Geen salespraatje, maar een concreet gesprek over jouw processen.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">

<a className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-medium shadow-[0_0_20px_rgba(178,13,13,0.4)] overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(178,13,13,0.6)]" href="#contact">
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"></div>
<span className="relative z-20 flex items-center gap-2">
<svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2a9 9 0 0 1 9 9"></path>
<path d="M13 6a5 5 0 0 1 5 5"></path>
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
                            Plan een gratis AI-strategiecall
                        </span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto reveal">
<h2 className="text-3xl font-semibold text-white text-center mb-12">Veelgestelde vragen</h2>
<div className="space-y-4">
<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-white">Is AI echt zo urgent?</span>
<span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 border-t border-white/5 mt-4 group-open:mt-0 transition-all font-light">
<p>Ja. Bedrijven die nu optimaliseren vergroten hun voorsprong in kosten, snelheid en capaciteit. Elke maand uitstel is gemiste efficiëntie en oplopende druk.</p>
</div>
</details>
<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-white">Wat kost niets doen ons?</span>
<span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 border-t border-white/5 mt-4 group-open:mt-0 transition-all font-light">
<p>Gemiddeld tientallen tot honderden uren per maand aan inefficiëntie, plus vertraging in sales, service en operatie. De afstand tot concurrenten groeit elke maand.</p>
</div>
</details>
<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-white">Zijn we te klein voor AI?</span>
<span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-slate-400 px-6 pb-6 pt-0 border-t border-white/5 mt-4 group-open:mt-0 transition-all font-light">
<p>Juist niet. Kleinere teams profiteren direct van tijdwinst en lagere druk. AI is een hefboom voor MKB dat snel wil groeien—zonder bureaucratie, met directe impact.</p>
</div>
</details>
<details className="group glass-card rounded-xl overflow-hidden">
<summary className="flex cursor-pointer list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="font-medium text-white">Hoe snel zien we resultaat?</span>
<span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span></summary></details></div></section>
<footer className="bg-[#0b0d13] pt-20 pb-10 px-6 border-t border-white/10">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center shrink-0">
<svg className="w-5 h-5" fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="18" y1="18" y2="6"></line>
<polyline points="6 6 18 6 18 18"></polyline>
</svg>
</div>
<span className="text-xl font-bold tracking-widest text-white font-saira">ALIGN AI</span>
</a>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Bescherm je positie in de markt. Wij helpen MKB-bedrijven om AI niet als gadget, maar als strategisch wapen in te zetten.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 -2.5-3-5.5-3-.5 0-1 .1-1.3.1 1 2.9 3.2 4.9 6.6 4.9z"></path></svg></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Navigatie</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-primary transition-colors" href="#probleem">Het Probleem</a></li>
<li><a className="hover:text-primary transition-colors" href="#aanpak">Onze Aanpak</a></li>
<li><a className="hover:text-primary transition-colors" href="#cases">Cases &amp; Resultaten</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Diensten</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-primary transition-colors" href="#">AI Audit &amp; Strategie</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Proces Automatisering</a></li>
<li><a className="hover:text-primary transition-colors" href="#">In-house Training</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-start gap-3">
<svg className="mt-0.5 shrink-0 text-primary" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<a className="hover:text-white transition-colors" href="mailto:info@alignai.nl">info@alignai.nl</a>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 shrink-0 text-primary" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<a className="hover:text-white transition-colors" href="tel:+31201234567">+31 (0)20 123 4567</a>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 shrink-0 text-primary" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Amsterdam, Nederland</span>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2024 Align AI. Alle rechten voorbehouden.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacyverklaring</a>
<a className="hover:text-white transition-colors" href="#">Algemene Voorwaarden</a>
<a className="hover:text-white transition-colors" href="#">Cookiebeleid</a>
</div>
</div>
</div>
</footer>
    </>
  );
}
