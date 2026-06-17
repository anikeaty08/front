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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
primary: '#0F172A',
accent: '#3B82F6',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23f1f5f9' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
}
}
}
}



        // Custom Reveal Animation Observer
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

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Simple Budget Selection Logic for Styling
        const budgetOptions = document.querySelectorAll('.custom-checkbox input');
        budgetOptions.forEach(option => {
            option.addEventListener('change', () => {
                // Reset all
                document.querySelectorAll('.custom-checkbox div').forEach(div => {
                    div.classList.remove('bg-slate-900', 'text-white', 'border-slate-900');
                    div.classList.add('text-slate-600', 'border-slate-200');
                });
                // Set Active
                if(option.checked) {
                    const activeDiv = option.nextElementSibling;
                    activeDiv.classList.remove('text-slate-600', 'border-slate-200');
                    activeDiv.classList.add('bg-slate-900', 'text-white', 'border-slate-900');
                }
            });
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
      

<header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900 text-white">
<iconify-icon height="20" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-display font-bold text-lg tracking-tight group-hover:opacity-80 transition-opacity font-montserrat text-slate-900" style={{}}>Boost.</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 transition-colors font-montserrat hover:text-slate-900" href="#services" style={{}}>Diensten</a>
<a className="text-sm font-medium text-slate-500 transition-colors font-montserrat hover:text-slate-900" href="#work" style={{}}>Werk</a>
<a className="text-sm font-medium text-slate-500 transition-colors font-montserrat hover:text-slate-900" href="#process" style={{}}>Proces</a>
<a className="text-sm font-medium text-slate-500 transition-colors font-montserrat hover:text-slate-900" href="#pricing" style={{}}>Prijzen</a>
<a className="text-sm font-medium text-slate-500 transition-colors font-montserrat hover:text-slate-900" href="#about" style={{}}>Over ons</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:flex px-5 py-2.5 text-sm font-semibold rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg font-montserrat bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10" href="#contact" style={{}}>
                    Boek een gratis gesprek
                </a>

<button className="md:hidden text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="relative pt-20 md:pt-32">

<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-50 h-[100vh]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] hero-glow z-0 pointer-events-none opacity-60 blur-3xl"></div>

<section className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-32 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="flex-1 space-y-8 reveal active">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm text-xs font-medium mb-2 font-montserrat bg-white border-slate-200 text-slate-600" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Nieuwe projecten aangenomen voor okt
                    </div>
<h1 className="md:text-7xl leading-[1.1] text-balance text-5xl font-bold text-slate-900 tracking-tight font-manrope">Webdesign &amp; Development voor <span className="bg-clip-text text-transparent font-manrope bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Groeiende</span> Bedrijven</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed text-balance font-montserrat" style={{}}>
                        A–Z websites: strategie, design, content, development, SEO en lancering — professioneel uitgevoerd, snel opgeleverd.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
<ul className="flex flex-col gap-3 text-sm font-medium text-slate-700">
<li className="flex items-center gap-2 font-montserrat" style={{}}>
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
                                Ontworpen voor conversie
                            </li>
<li className="flex items-center gap-2 font-montserrat" style={{}}>
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
                                Goede SEO basis vanaf dag één
                            </li>
<li className="flex items-center gap-2 font-montserrat" style={{}}>
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
                                Snel, veilig, makkelijk te beheren
                            </li>
</ul>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all hover:-translate-y-1 shadow-xl font-montserrat bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/15" href="#contact" style={{}}>
                            Gratis gesprek van 20 min
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 border font-semibold rounded-full transition-all font-montserrat bg-white border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50" href="#work" style={{}}>
                            Bekijk Casestudies
                        </a>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium pt-2 text-slate-400">
<span className="flex items-center gap-1 font-montserrat" style={{}}><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Reactie binnen 24 uur</span>
<span className="flex items-center gap-1 font-montserrat" style={{}}><iconify-icon icon="solar:tag-price-linear"></iconify-icon> Vaste prijs</span>
<span className="flex items-center gap-1 font-montserrat" style={{}}><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>Helder proces</span>
</div>
</div>

<div className="flex-1 w-full relative reveal delay-200 active">
<div className="relative rounded-2xl border shadow-2xl p-2 aspect-[4/3] overflow-hidden group border-slate-200 bg-white">

<div className="absolute top-0 left-0 right-0 h-10 border-b flex items-center px-4 gap-2 z-10 bg-slate-50 border-slate-100">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 text-center">
<div className="border rounded-md py-0.5 px-3 mx-auto w-1/2 h-5 bg-white border-slate-100"></div>
</div>
</div>

<div className="mt-10 h-full w-full relative overflow-hidden bg-slate-50">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-blue-50"></div>

<div className="absolute top-8 left-8 right-8 h-32 rounded-xl shadow-sm border flex flex-col p-4 gap-3 transition-transform duration-700 group-hover:translate-y-[-5px] bg-white border-slate-100/50">
<div className="w-1/3 h-4 rounded bg-slate-100"></div>
<div className="w-2/3 h-3 rounded bg-slate-50"></div>
<div className="w-1/2 h-3 rounded bg-slate-50"></div>
</div>
<div className="absolute top-48 left-8 w-40 h-40 rounded-xl shadow-sm border p-4 transition-transform duration-700 delay-75 group-hover:translate-y-[-10px] bg-white border-slate-100/50">
<div className="w-10 h-10 rounded-full mb-4 bg-blue-100"></div>
<div className="w-full h-3 rounded mb-2 bg-slate-50"></div>
<div className="w-2/3 h-3 rounded bg-slate-50"></div>
</div>
<div className="absolute top-48 right-8 left-56 bottom-8 rounded-xl shadow-lg border p-6 flex flex-col justify-center items-center text-center transition-transform duration-700 delay-100 group-hover:translate-y-[-15px] bg-slate-900 border-slate-800">
<div className="text-4xl font-bold mb-2 font-manrope text-white/20" style={{}}>+45%</div>
<div className="text-xs font-montserrat text-white/40" style={{}}>Conversieratio</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y py-10 border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium mb-8 font-montserrat text-slate-400" style={{}}>Vertrouwd door vooruitstrevende bedrijven en startups</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-display font-bold text-xl font-montserrat text-slate-800" style={{}}><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> UNBOX</div>
<div className="flex items-center gap-2 font-display font-bold text-xl font-montserrat text-slate-800" style={{}}><iconify-icon icon="solar:graph-up-linear"></iconify-icon> SCALAR</div>
<div className="flex items-center gap-2 font-display font-bold text-xl font-montserrat text-slate-800" style={{}}><iconify-icon icon="solar:planet-linear"></iconify-icon> ORBIT</div>
<div className="flex items-center gap-2 font-display font-bold text-xl font-montserrat text-slate-800" style={{}}><iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon> STACK</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="services">
<div className="mb-16 md:text-center max-w-3xl mx-auto reveal active">
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 font-manrope text-slate-900" style={{}}>Complete digitale aanwezigheid. <br/>Zonder hoofdpijn.</h2>
<p className="text-lg text-slate-500 font-montserrat" style={{}}>Ik beheer de volledige technische en creatieve stack zodat jij je kunt richten op je bedrijf.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal active">

<div className="group p-8 rounded-2xl border hover-card bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors bg-slate-50 text-slate-900">
<iconify-icon height="24" icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 font-montserrat text-slate-900" style={{}}>Website Strategie &amp; UX</h3>
<p className="text-sm text-slate-500 leading-relaxed font-montserrat" style={{}}>De structuur en gebruikersreis plannen voor maximale conversie nog voor de eerste pixel.</p>
</div>

<div className="group p-8 rounded-2xl border hover-card bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors bg-slate-50 text-slate-900">
<iconify-icon height="24" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 font-montserrat text-slate-900" style={{}}>Webdesign (UI)</h3>
<p className="text-sm text-slate-500 leading-relaxed font-montserrat" style={{}}>Strakke, moderne esthetiek die past bij je merkidentiteit en direct vertrouwen wekt.</p>
</div>

<div className="group p-8 rounded-2xl border hover-card bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors bg-slate-50 text-slate-900">
<iconify-icon height="24" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 font-montserrat text-slate-900" style={{}}>Development</h3>
<p className="text-sm text-slate-500 leading-relaxed font-montserrat" style={{}}>Maatwerk code of CMS-implementatie. Snel, veilig en gebouwd op moderne technologie.</p>
</div>

<div className="group p-8 rounded-2xl border hover-card bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors bg-slate-50 text-slate-900">
<iconify-icon height="24" icon="solar:text-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 font-montserrat text-slate-900" style={{}}>Tekst &amp; Content</h3>
<p className="text-sm text-slate-500 leading-relaxed font-montserrat" style={{}}>Overtuigende teksten die je publiek aanspreken en aanzetten tot actie.</p>
</div>

<div className="group p-8 rounded-2xl border hover-card bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors bg-slate-50 text-slate-900">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 font-montserrat text-slate-900" style={{}}>SEO Setup</h3>
<p className="text-sm text-slate-500 leading-relaxed font-montserrat" style={{}}>Technische en on-page SEO zodat Google net zoveel van je site houdt als je gebruikers.</p>
</div>

<div className="group p-8 rounded-2xl border hover-card bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors bg-slate-50 text-slate-900">
<iconify-icon height="24" icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 font-montserrat text-slate-900" style={{}}>Prestaties</h3>
<p className="text-sm text-slate-500 leading-relaxed font-montserrat" style={{}}>Snelheidsoptimalisatie voor razendsnelle laadtijden en het behalen van Core Web Vitals.</p>
</div>

<div className="group p-8 rounded-2xl border hover-card bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors bg-slate-50 text-slate-900">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 font-montserrat text-slate-900" style={{}}>Onderhoud</h3>
<p className="text-sm text-slate-500 leading-relaxed font-montserrat" style={{}}>Doorlopende ondersteuning, updates en back-ups zodat je nooit zorgen hebt over downtime.</p>
</div>

<div className="group p-8 rounded-2xl border hover-card bg-white border-slate-200">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors bg-slate-50 text-slate-900">
<iconify-icon height="24" icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 font-montserrat text-slate-900" style={{}}>Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed font-montserrat" style={{}}>Installatie van Google Analytics en conversiemeting om echte ROI te meten.</p>
</div>
</div>
<div className="mt-12 text-center reveal active">
<p className="text-slate-500 mb-4 font-montserrat" style={{}}>Niet zeker wat je nodig hebt?</p>
<a className="text-sm font-semibold border-b pb-0.5 transition-colors font-montserrat text-slate-900 hover:text-slate-600 border-slate-300" href="#contact" style={{}}>Ik adviseer de beste route in een gratis gesprek →</a>
</div>
</section>

<section className="pt-12 pr-6 pb-12 pl-6">
<div className="md:p-16 overflow-hidden reveal active text-white bg-slate-900 max-w-7xl rounded-[2rem] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">

<div className="blur-[100px] -translate-y-1/2 bg-blue-600/20 w-[500px] h-[500px] rounded-full absolute top-0 right-0 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1">
<div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 font-montserrat bg-white/10 text-blue-300" style={{}}>Boost Launchpad</div>
<h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight font-manrope" style={{}}>Een complete website, kant-en-klaar.</h2>
<ul className="space-y-4 mb-8 text-slate-300">
<li className="flex items-center gap-3 font-montserrat" style={{}}>
<iconify-icon className="text-blue-400" icon="solar:check-square-linear"></iconify-icon>
                                Maatwerk Design &amp; Development (5 Pagina's)
                            </li>
<li className="flex items-center gap-3 font-montserrat" style={{}}>
<iconify-icon className="text-blue-400" icon="solar:check-square-linear"></iconify-icon>
                                Professionele Copywriting Inbegrepen
                            </li>
<li className="flex items-center gap-3 font-montserrat" style={{}}>
<iconify-icon className="text-blue-400" icon="solar:check-square-linear"></iconify-icon>
                                Mobiel Responsief &amp; SEO Geoptimaliseerd
                            </li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 items-center">
<a className="px-8 py-3 rounded-full font-bold transition-colors font-montserrat bg-white text-slate-900 hover:bg-slate-100" href="#contact" style={{}}>Vraag Offerte Aan</a>
<span className="text-sm font-montserrat text-slate-400" style={{}}>Vanaf €2.500</span>
</div>
</div>
<div className="flex-1 w-full md:w-auto">
<div className="border rounded-xl p-6 backdrop-blur-sm bg-white/5 border-white/10">
<div className="flex items-center gap-4 mb-6 border-b pb-4 border-white/10">
<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:rocket-bold"></iconify-icon>
</div>
<div>
<div className="font-bold font-montserrat" style={{}}>Klaar voor Lancering</div>
<div className="text-xs font-montserrat text-slate-400" style={{}}>All-inclusive pakket</div>
</div>
</div>
<div className="space-y-3">
<div className="h-2 rounded-full w-full bg-white/10"></div>
<div className="h-2 rounded-full w-3/4 bg-white/10"></div>
<div className="h-2 rounded-full w-1/2 bg-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="work">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 font-manrope text-slate-900" style={{}}>Geselecteerd Werk</h2>
<p className="text-slate-500 font-montserrat" style={{}}>Recente projecten die het verschil maakten.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold font-montserrat hover:text-slate-600" href="#" style={{}}>Bekijk alles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal active">

<div className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden border mb-6 relative bg-slate-100 border-slate-200">

<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 bg-slate-200"></div>
<div className="absolute inset-0 flex items-center justify-center font-display font-bold text-2xl font-manrope text-slate-400" style={{}}>Klantproject</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-bold mb-1 font-montserrat text-slate-900" style={{}}>FinTech Dashboard Redesign</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>UX/UI • Development</p>
</div>
<div className="text-right">
<span className="inline-block px-2 py-1 text-xs font-semibold rounded border font-montserrat bg-emerald-50 text-emerald-700 border-emerald-100" style={{}}>+32% Leads</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden border mb-6 relative bg-slate-100 border-slate-200">

<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 bg-slate-800"></div>
<div className="absolute inset-0 flex items-center justify-center font-display font-bold text-2xl font-manrope text-slate-600" style={{}}>Klantproject</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-bold mb-1 font-montserrat text-slate-900" style={{}}>E-commerce Platform</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>Strategie • Shopify • SEO</p>
</div>
<div className="text-right">
<span className="inline-block px-2 py-1 text-xs font-semibold rounded border font-montserrat bg-emerald-50 text-emerald-700 border-emerald-100" style={{}}>2x Snelheid</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-white border-slate-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16 reveal active">
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 font-manrope text-slate-900" style={{}}>Een helder proces van<br/> idee tot lancering</h2>
<p className="text-lg text-slate-500 font-montserrat" style={{}}>Geen verrassingen. Je weet precies wat er in elke fase gebeurt.</p>
</div>
<div className="relative">

<div className="absolute left-[27px] top-0 bottom-0 w-px md:hidden bg-slate-200"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 reveal active">

<div className="relative pl-16 md:pl-0">
<div className="absolute left-0 md:static w-14 h-14 border rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 shadow-sm z-10 font-montserrat bg-white border-slate-200 text-slate-900" style={{}}>01</div>
<h3 className="font-bold text-lg mb-2 font-montserrat" style={{}}>Ontdekking</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>We definiëren doelen, sitemap en user flow.</p>
</div>

<div className="relative pl-16 md:pl-0">
<div className="absolute left-0 md:static w-14 h-14 border rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 shadow-sm z-10 font-montserrat bg-white border-slate-200 text-slate-900" style={{}}>02</div>
<h3 className="font-bold text-lg mb-2 font-montserrat" style={{}}>Design</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>Wireframes en high-fidelity UI-ontwerp.</p>
</div>

<div className="relative pl-16 md:pl-0">
<div className="absolute left-0 md:static w-14 h-14 border rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 shadow-sm z-10 font-montserrat bg-white border-slate-200 text-slate-900" style={{}}>03</div>
<h3 className="font-bold text-lg mb-2 font-montserrat" style={{}}>Content</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>Integratie van teksten en media.</p>
</div>

<div className="relative pl-16 md:pl-0">
<div className="absolute left-0 md:static w-14 h-14 border rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 shadow-sm z-10 font-montserrat bg-white border-slate-200 text-slate-900" style={{}}>04</div>
<h3 className="font-bold text-lg mb-2 font-montserrat" style={{}}>Bouw</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>Ontwikkeling, responsief testen en SEO.</p>
</div>

<div className="relative pl-16 md:pl-0">
<div className="absolute left-0 md:static w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 shadow-lg z-10 font-montserrat bg-slate-900 text-white shadow-slate-900/20" style={{}}>05</div>
<h3 className="font-bold text-lg mb-2 font-montserrat" style={{}}>Lancering</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>Livegang, overdracht en ondersteuning.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal active">
<div>
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-8 font-manrope text-slate-900" style={{}}>Bureau-kwaliteit resultaten. Zonder de overhead.</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-blue-600">
<iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-bold mb-1 font-montserrat text-slate-900" style={{}}>Eén Aanspreekpunt</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>Geen accountmanagers die berichten doorgeven. Je praat direct met de bouwer van je site.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-purple-50 text-purple-600">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-bold mb-1 font-montserrat text-slate-900" style={{}}>Senior Denkniveau, Lean Uitvoering</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>Ik gebruik moderne tools en AI-workflows om sneller te werken met behoud van kwaliteit, voor premium resultaten tegen lagere kosten.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-amber-50 text-amber-600">
<iconify-icon icon="solar:stopwatch-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-bold mb-1 font-montserrat text-slate-900" style={{}}>Snelle Iteraties</h3>
<p className="text-sm text-slate-500 font-montserrat" style={{}}>Geen bureaucratie. We schakelen snel, itereren vlot en lanceren eerder.</p>
</div>
</div>
</div>
</div>
<div className="rounded-3xl p-8 relative overflow-hidden bg-slate-900 text-white">
<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl bg-white/5"></div>
<div className="relative z-10">
<div className="text-sm font-semibold uppercase tracking-wider mb-6 font-montserrat text-slate-400" style={{}}>Het Boost Verschil</div>
<div className="space-y-6">
<div className="flex justify-between items-center border-b pb-4 border-white/10">
<span className="font-montserrat" style={{}}>Communicatie</span>
<span className="font-bold font-montserrat text-emerald-400" style={{}}>Direct &amp; Snel</span>
</div>
<div className="flex justify-between items-center border-b pb-4 border-white/10">
<span className="font-montserrat" style={{}}>Doorlooptijd</span>
<span className="font-bold font-montserrat text-emerald-400" style={{}}>Weken, geen maanden</span>
</div>
<div className="flex justify-between items-center border-b pb-4 border-white/10">
<span className="font-montserrat" style={{}}>Kosten</span>
<span className="font-bold font-montserrat text-emerald-400" style={{}}>Transparant &amp; Eerlijk</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="font-montserrat" style={{}}>Kwaliteit</span>
<span className="font-bold font-montserrat text-emerald-400" style={{}}>Pixel-perfect</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-slate-50 border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal active">
<h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 font-manrope text-slate-900" style={{}}>Transparante Prijzen</h2>
<p className="text-slate-500 font-montserrat" style={{}}>Kies het pakket dat past bij jouw groeifase.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start reveal active">

<div className="p-8 rounded-2xl border transition-colors bg-white border-slate-200 hover:border-slate-300">
<h3 className="font-bold text-lg mb-2 font-montserrat" style={{}}>Starter</h3>
<p className="text-sm text-slate-500 mb-6 h-10 font-montserrat" style={{}}>Perfect voor landingspagina's of eenvoudige portfolio's.</p>
<div className="text-3xl font-display font-bold mb-8 font-manrope" style={{}}>€1.500 <span className="text-sm font-normal font-montserrat text-slate-400" style={{}}>+</span></div>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> 1 Pagina / Landingspagina</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Mobiel Responsief</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Basis SEO</li>
</ul>
<a className="block w-full py-3 px-6 rounded-lg border text-center font-semibold transition-colors font-montserrat border-slate-200 hover:bg-slate-50" href="#contact" style={{}}>Vraag Offerte</a>
</div>

<div className="p-8 rounded-2xl border shadow-xl relative scale-105 transform z-10 bg-slate-900 text-white border-slate-900">
<div className="absolute top-0 right-0 bg-blue-500 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl font-montserrat text-white" style={{}}>POPULAIR</div>
<h3 className="font-bold text-lg mb-2 font-montserrat" style={{}}>Business</h3>
<p className="mb-6 h-10 font-montserrat text-slate-400" style={{}}>Een complete website om autoriteit op te bouwen.</p>
<div className="text-3xl font-display font-bold mb-8 font-manrope" style={{}}>€3.500 <span className="text-sm font-normal font-montserrat text-slate-400" style={{}}>+</span></div>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> 5-8 Maatwerk Pagina's</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> CMS Integratie</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-blue-400" icon="solar:check-circle-bold"></iconify-icon> Geavanceerde SEO Setup</li>
</ul>
<a className="block w-full py-3 px-6 rounded-lg text-center font-bold transition-colors font-montserrat bg-white text-slate-900 hover:bg-blue-50" href="#contact" style={{}}>Kies Deze</a>
</div>

<div className="p-8 rounded-2xl border transition-colors bg-white border-slate-200 hover:border-slate-300">
<h3 className="font-bold text-lg mb-2 font-montserrat" style={{}}>Groei</h3>
<p className="text-sm text-slate-500 mb-6 h-10 font-montserrat" style={{}}>Web + Doorlopende optimalisatie &amp; SEO.</p>
<div className="text-3xl font-display font-bold mb-8 font-manrope" style={{}}>Maatwerk</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Alles in Business</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Maandelijkse SEO Artikelen</li>
<li className="flex items-center gap-2 font-montserrat" style={{}}><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Conversie Optimalisatie</li>
</ul>
<a className="block w-full py-3 px-6 rounded-lg border text-center font-semibold transition-colors font-montserrat border-slate-200 hover:bg-slate-50" href="#contact" style={{}}>Neem Contact Op</a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-display font-bold mb-12 text-center font-manrope text-slate-900" style={{}}>Veelgestelde Vragen</h2>
<div className="space-y-4">
<details className="group rounded-xl border overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold font-montserrat text-slate-900" style={{}}>Hoe lang duurt het bouwen van een website?</span>
<iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed font-montserrat" style={{}}>
                        Voor een standaard zakelijke website (5 pagina's) duurt het doorgaans 2-4 weken van start tot lancering. Landingspagina's kunnen al in 1 week klaar zijn. De planning hangt af van hoe snel we content en feedback ontvangen.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold font-montserrat text-slate-900" style={{}}>Schrijf jij de teksten?</span>
<iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed font-montserrat" style={{}}>
                        Ja! Veel klanten vinden dit lastig, dus professionele copywriting is inbegrepen in de Business en Groei pakketten. We starten met een interview om je toon te bepalen, en ik regel de rest.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold font-montserrat text-slate-900" style={{}}>Wordt mijn site mobielvriendelijk?</span>
<iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed font-montserrat" style={{}}>
                        Absoluut. Ik ontwerp mobile-first, wat betekent dat je site perfect werkt op telefoons, tablets en desktops. Dit is ook cruciaal voor SEO.
                    </div>
</details>
<details className="group rounded-xl border overflow-hidden bg-white border-slate-200">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-semibold font-montserrat text-slate-900" style={{}}>Welk platform gebruik je?</span>
<iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed font-montserrat" style={{}}>
                        Ik gebruik de beste tool voor de klus. Voor de meeste marketingsites gebruik ik Webflow of WordPress (maatwerk) of Next.js voor specifieke wensen. We bepalen de beste keuze tijdens ons gesprek.
                    </div>
</details>
</div>
</section>

<section className="py-24 border-t bg-white border-slate-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 font-manrope text-slate-900" style={{}}>Laten we iets moois bouwen.</h2>
<p className="text-lg text-slate-500 mb-10 max-w-md font-montserrat" style={{}}>Klaar om je digitale aanwezigheid te upgraden? Vul het formulier in en ik kom binnen 24 uur bij je terug met de vervolgstappen.</p>
<div className="space-y-6">
<a className="flex items-center gap-4 transition-colors group text-slate-900 hover:text-blue-600" href="mailto:hello@boostdigital.com">
<div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors bg-slate-50">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<span className="font-medium font-montserrat" style={{}}>hello@boostdigital.com</span>
</a>
<div className="flex items-center gap-4 text-slate-900">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-50">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<span className="font-medium font-montserrat" style={{}}>Gevestigd in Amsterdam, wereldwijd actief</span>
</div>
</div>
<div className="mt-12 p-6 rounded-2xl border bg-slate-50 border-slate-100">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-bold uppercase text-slate-500 tracking-wider font-montserrat" style={{}}>Huidige Status</span>
</div>
<p className="font-medium font-montserrat text-slate-900" style={{}}>Ik neem 2 nieuwe projecten aan voor oktober.</p>
</div>
</div>

<form className="rounded-3xl p-8 shadow-xl border bg-white border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-sm font-semibold font-montserrat text-slate-700" htmlFor="name" style={{}}>Naam</label>
<input className="w-full px-4 py-3 rounded-lg border focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all bg-slate-50 border-slate-200" id="name" placeholder="Jan de Vries" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold font-montserrat text-slate-700" htmlFor="email" style={{}}>E-mail</label>
<input className="w-full px-4 py-3 rounded-lg border focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all bg-slate-50 border-slate-200" id="email" placeholder="jan@bedrijf.nl" type="email"/>
</div>
</div>
<div className="space-y-2 mb-6">
<label className="text-sm font-semibold font-montserrat text-slate-700" style={{}}>Wat is je budget indicatie?</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer custom-checkbox">
<input className="hidden" name="budget" type="radio"/>
<div className="border rounded-lg py-2 px-3 text-sm text-center transition-colors font-montserrat border-slate-200 hover:bg-slate-50 text-slate-600" style={{}}>
                                        &lt; €1k
                                    </div>
</label>
<label className="cursor-pointer custom-checkbox">
<input className="hidden" name="budget" type="radio"/>
<div className="border rounded-lg py-2 px-3 text-sm text-center transition-colors font-montserrat border-slate-200 hover:bg-slate-50 text-slate-600" style={{}}>
                                        €1k-3k
                                    </div>
</label>
<label className="cursor-pointer custom-checkbox">
<input className="hidden" name="budget" type="radio"/>
<div className="border rounded-lg py-2 px-3 text-sm text-center transition-colors font-montserrat border-slate-200 hover:bg-slate-50 text-slate-600" style={{}}>
                                        €3k-8k
                                    </div>
</label>
<label className="cursor-pointer custom-checkbox">
<input className="hidden" name="budget" type="radio"/>
<div className="border rounded-lg py-2 px-3 text-sm text-center transition-colors font-montserrat border-slate-200 hover:bg-slate-50 text-slate-600" style={{}}>
                                        €8k+
                                    </div>
</label>
</div>
</div>
<div className="space-y-2 mb-8">
<label className="text-sm font-semibold font-montserrat text-slate-700" htmlFor="message" style={{}}>Projectdetails</label>
<textarea className="w-full px-4 py-3 rounded-lg border focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all resize-none bg-slate-50 border-slate-200" id="message" placeholder="Vertel me over je bedrijf en doelen..." rows="4"></textarea>
</div>
<button className="w-full py-4 font-bold rounded-lg transition-all shadow-lg hover:-translate-y-1 font-montserrat bg-slate-900 text-white hover:bg-slate-800" style={{}} type="submit">
                            Verstuur Aanvraag
                        </button>
<p className="text-center text-xs mt-4 font-montserrat text-slate-400" style={{}}>Geen spam. Ik reageer met een ruwe schatting.</p>
</form>
</div>
</div>
</section>
</main>

<footer className="pt-16 pb-8 border-t bg-white border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-slate-900 text-white">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon>
</div>
<span className="font-display font-bold text-lg tracking-tight font-montserrat" style={{}}>Boost.</span>
</div>
<p className="text-sm text-slate-500 mb-6 font-montserrat" style={{}}>Webdesign &amp; development in Amsterdam. Bouwen aan digitale producten die groei stimuleren.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon icon="brandico:twitter-bird" width="18"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon icon="brandico:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold mb-4 font-montserrat text-slate-900" style={{}}>Bedrijf</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="font-montserrat hover:text-slate-900" href="#about" style={{}}>Over ons</a></li>
<li><a className="font-montserrat hover:text-slate-900" href="#work" style={{}}>Werk</a></li>
<li><a className="font-montserrat hover:text-slate-900" href="#process" style={{}}>Proces</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 font-montserrat text-slate-900" style={{}}>Diensten</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="font-montserrat hover:text-slate-900" href="#" style={{}}>Webdesign</a></li>
<li><a className="font-montserrat hover:text-slate-900" href="#" style={{}}>Web Development</a></li>
<li><a className="font-montserrat hover:text-slate-900" href="#" style={{}}>SEO Strategie</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 font-montserrat text-slate-900" style={{}}>Juridisch</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="font-montserrat hover:text-slate-900" href="#" style={{}}>Privacybeleid</a></li>
<li><a className="font-montserrat hover:text-slate-900" href="#" style={{}}>Algemene Voorwaarden</a></li>
<li><a className="font-montserrat hover:text-slate-900" href="#" style={{}}>Cookiebeleid</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-100">
<p className="text-xs font-montserrat text-slate-400" style={{}}>© 2024 Boost Digital. Alle rechten voorbehouden.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium font-montserrat text-slate-600" style={{}}>Alle systemen operationeel</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
