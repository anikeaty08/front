import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
200: '#99f6e4',
300: '#5eead4',
400: '#2dd4bf',
500: '#14b8a6',
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
},
slate: {
850: '#1e293b',
900: '#0f172a',
950: '#020617',
}
},
boxShadow: {
'glow': '0 0 40px -10px rgba(13, 148, 136, 0.4)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
'card-hover': '0 0 0 1px rgba(0,0,0,0.06), 0 10px 30px -10px rgba(0,0,0,0.1)',
'float': '0 20px 40px -10px rgba(0,0,0,0.1)',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Reveal Animation Logic
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/90 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center bg-brand-600 rounded-lg shadow-sm group-hover:bg-brand-700 transition-colors">
<svg fill="none" height="20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20">
<path d="M2 20h20"></path>
<path d="M13 3l-1.5 9h5l-2.5 8"></path>
</svg>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">Let's Golf</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" type="button">
                    Download App
                </button>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-sm">
<li><a className="block py-2 px-3 text-slate-600 hover:text-brand-600 md:p-0 transition-colors" href="#features">Features</a></li>
<li><a className="block py-2 px-3 text-slate-600 hover:text-brand-600 md:p-0 transition-colors" href="#how-it-works">Hoe het werkt</a></li>
<li><a className="block py-2 px-3 text-slate-600 hover:text-brand-600 md:p-0 transition-colors" href="#testimonials">Ervaringen</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">

<div className="absolute inset-0 z-0">
<img alt="Golf course" className="w-full h-full object-cover opacity-40 grayscale-[20%]" src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/30"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-8 animate-[fadeIn_1s_ease-out] backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Nu beschikbaar in Nederland
            </div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[1]">
                Let's Golf. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-100 to-white">Together.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
                De moderne community voor de nieuwe generatie golfers. <br className="hidden md:block"/> Vind partners, boek banen en verbeter je spel.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 hover:scale-[1.02] transition-all shadow-glow active:scale-[0.98]">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.74-3.03 1.59-.67.78-1.26 2.05-1.11 3.17 1.17.09 2.35-.79 3.07-1.65z"></path></svg>
<span className="font-semibold text-sm">Download iOS</span>
</button>
<button className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all active:scale-[0.98]">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path></svg>
<span className="font-semibold text-sm">Download Android</span>
</button>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-24 reveal">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                    Features
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">Alles wat je nodig hebt</h2>
<p className="text-xl text-slate-500 font-light leading-relaxed">
                    De app combineert alle tools die je nodig hebt. Van het vinden van de baan tot het spelen van de 19e hole.
                </p>
</div>
<div className="space-y-24 md:space-y-32">

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 reveal">

<div className="flex-1 space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-700 mb-2">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Ontdek golfbanen in de buurt</h3>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                            Vind en verken de mooiste golfbanen bij jou in de buurt. Filter op afstand, prijs of faciliteiten. Bekijk gedetailleerde informatie, scorecards en reviews van andere spelers voordat je vertrekt.
                        </p>
<ul className="space-y-3 text-slate-600">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-600" data-lucide="check-circle-2"></i>
<span>GPS integratie voor nauwkeurige afstanden</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-600" data-lucide="check-circle-2"></i>
<span>Uitgebreide clubinformatie &amp; ratings</span>
</li>
</ul>
</div>

<div className="flex-1 w-full order-1 lg:order-2">
<div className="relative rounded-3xl bg-white p-4 shadow-xl shadow-slate-200/50 border border-slate-200/60 rotate-2 hover:rotate-0 transition-transform duration-500">

<div className="flex items-center justify-between mb-4 px-2">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="text-xs font-medium text-slate-400">Map View</div>
</div>

<div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-4 left-4 right-4 flex justify-between">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                        📍 5 Golfbanen gevonden
                                    </span>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1">
<div className="text-sm font-bold text-slate-900">Bernardus Golf</div>
<div className="text-[10px] text-slate-500">Cromvoirt • 18 Holes</div>
</div>
<div className="bg-brand-50 text-brand-700 text-xs font-bold px-2 py-1 rounded-md">9.8</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 reveal">

<div className="flex-1 w-full order-1">
<div className="relative rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 border border-slate-200/60 -rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center justify-between mb-6">
<h4 className="font-bold text-slate-900 text-lg">Kies een tijdstip</h4>
<span className="text-xs text-brand-600 font-semibold bg-brand-50 px-2 py-1 rounded-md">Vandaag</span>
</div>

<div className="flex justify-between gap-2 mb-6 text-center">
<div className="flex-1 p-2 rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-500/30">
<div className="text-[10px] opacity-80 uppercase font-semibold">Vrij</div>
<div className="text-lg font-bold">14</div>
</div>
<div className="flex-1 p-2 rounded-xl border border-slate-100 text-slate-400">
<div className="text-[10px] uppercase font-semibold">Zat</div>
<div className="text-lg font-bold">15</div>
</div>
<div className="flex-1 p-2 rounded-xl border border-slate-100 text-slate-400">
<div className="text-[10px] uppercase font-semibold">Zon</div>
<div className="text-lg font-bold">16</div>
</div>
<div className="flex-1 p-2 rounded-xl border border-slate-100 text-slate-400">
<div className="text-[10px] uppercase font-semibold">Maa</div>
<div className="text-lg font-bold">17</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl border border-brand-200 bg-brand-50/50 cursor-pointer hover:bg-brand-50 transition-colors group">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-orange-400" data-lucide="sun"></i>
<div>
<div className="text-sm font-bold text-slate-900">08:30</div>
<div className="text-[10px] text-slate-500">18 Holes • €75</div>
</div>
</div>
<div className="w-6 h-6 rounded-full border-2 border-brand-200 group-hover:bg-brand-500 group-hover:border-brand-500 transition-colors"></div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 cursor-pointer hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-300" data-lucide="sun"></i>
<div>
<div className="text-sm font-bold text-slate-900">09:15</div>
<div className="text-[10px] text-slate-500">18 Holes • €75</div>
</div>
</div>
<div className="w-6 h-6 rounded-full border-2 border-slate-200"></div>
</div>
</div>
<button className="w-full mt-6 bg-slate-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-lg">Bevestig Boeking</button>
</div>
</div>

<div className="flex-1 space-y-8 order-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-700 mb-2">
<i className="w-6 h-6" data-lucide="calendar-clock"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Boek een Tee Time in seconden</h3>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                            Geen gedoe meer met bellen of ingewikkelde websites. Reserveer je starttijd direct in de app. Volledige integratie met aangesloten clubs zorgt voor realtime beschikbaarheid.
                        </p>
<ul className="space-y-3 text-slate-600">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-600" data-lucide="check-circle-2"></i>
<span>Directe bevestiging in je app</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-600" data-lucide="check-circle-2"></i>
<span>Deel de reservering met je flight-genoten</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 reveal">

<div className="flex-1 space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-700 mb-2">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Vind je Perfecte Match</h3>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                            Maak connectie met golfers van jouw niveau. Of je nu een beginner bent of een single handicap speler, vind eenvoudig een flight om mee aan te sluiten.
                        </p>
<div className="flex flex-wrap gap-3 mt-6">
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Handicap 0-10</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Recreatief</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Competitief</span>
</div>
<button className="text-brand-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all mt-4">
                            Bekijk community <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="flex-1 w-full order-1 lg:order-2">
<div className="relative rounded-3xl bg-slate-900 p-6 shadow-2xl shadow-slate-900/20 rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">

<div className="absolute top-0 right-0 w-40 h-40 bg-brand-500 rounded-full blur-[60px] opacity-20"></div>
<div className="relative z-10">
<div className="text-white/60 text-xs font-bold uppercase tracking-wider mb-4">Jouw Matches</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md mb-4 hover:bg-white/20 transition-colors cursor-pointer">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover border-2 border-brand-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-white font-bold text-sm truncate">Thomas de Vries</h4>
<p className="text-white/60 text-xs truncate">Hcp 12.4 • Zoekt partner voor zondag</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-500 text-white hover:bg-brand-400">
<i className="w-4 h-4" data-lucide="message-circle"></i>
</button>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover border-2 border-transparent opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-white font-bold text-sm truncate">Sophie van Dam</h4>
<p className="text-white/60 text-xs truncate">Hcp 24.0 • Speelt bij de Haagsche</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
<i className="w-4 h-4" data-lucide="user-plus"></i>
</button>
</div>
<div className="mt-6 p-4 rounded-xl bg-brand-500/20 border border-brand-500/30 text-center">
<p className="text-brand-300 text-xs font-medium">✨ 12 nieuwe golfers in jouw regio deze week</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="testimonials">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900 via-slate-900 to-slate-900"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-16 text-center reveal">Community Stories</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors reveal backdrop-blur-sm">
<div className="flex items-center gap-1 text-brand-400 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-300 leading-relaxed font-light mb-8">"Let's Golf heeft mijn weekendroutine compleet veranderd. Ik heb via de app een vaste groep gevonden waar ik nu wekelijks mee speel. Het design is prachtig en werkt super snel."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center font-bold text-white text-xs shadow-lg shadow-brand-500/20">PB</div>
<div>
<div className="font-medium text-white text-sm">Pieter van den Berg</div>
<div className="text-xs text-slate-500">Handicap 18</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors reveal delay-100 backdrop-blur-sm">
<div className="flex items-center gap-1 text-brand-400 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-300 leading-relaxed font-light mb-8">"Eindelijk een moderne app voor golfers. Geen gedoe met bellen of trage websites. Ik boek mijn starttijden nu letterlijk in 3 seconden. Echt een aanrader voor iedereen."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-400 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-lg shadow-indigo-500/20">MJ</div>
<div>
<div className="font-medium text-white text-sm">Maria Jansen</div>
<div className="text-xs text-slate-500">Handicap 24</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">

<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-7 h-7 flex items-center justify-center bg-brand-600 rounded-lg shadow-sm">
<svg fill="none" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16">
<path d="M2 20h20"></path>
<path d="M13 3l-1.5 9h5l-2.5 8"></path>
</svg>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">Let's Golf</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Connecting golfers globally. De ultieme app om te spelen, te ontmoeten en te genieten van de sport.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Golfbanen</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Evenementen</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Bedrijf</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Over ons</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-medium">
<p>© 2024 Let's Golf Inc.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
