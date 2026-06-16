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
// Ultra dark background akin to Vercel/Linear dark mode
page: '#0B0F17',
card: '#121826',
border: '#1F2937',
primary: '#F8FAFC', // Slate 50
muted: '#94A3B8',   // Slate 400
accent: '#38BDF8',  // Sky 400
accent_glow: 'rgba(56, 189, 248, 0.15)',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'subtle-grid': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%231e293b\" fill-opacity=\"0.4\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')",
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Smooth menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('block', 'animate-fade-in');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('block');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0B0F17]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight flex items-center gap-2" href="#">
<div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                AJC Investments
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-muted font-medium">
<a className="hover:text-white transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-white transition-colors" href="#technologie">Stack</a>
<a className="hover:text-white transition-colors" href="#proces">Proces</a>
<a className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-white transition-all text-xs uppercase tracking-wide" href="#kontakt">
                    Kontakt
                </a>
</div>
<button className="md:hidden text-white" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-[#0B0F17] border-b border-white/5 p-6 space-y-4 md:hidden" id="mobile-menu">
<a className="block text-muted hover:text-white" href="#oferta">Oferta</a>
<a className="block text-muted hover:text-white" href="#technologie">Stack</a>
<a className="block text-muted hover:text-white" href="#proces">Proces</a>
<a className="block text-accent" href="#kontakt">Skontaktuj się</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-page to-page">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Dostępni developerzy Senior Java</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Skaluj IT. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">Bez ryzyka.</span>
</h1>

<p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Dostarczamy sprawdzonych inżynierów i kompletne zespoły deweloperskie w 48h. Specjalizacja: Java, Python, Cloud (AWS/Azure).
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 text-sm" href="#kontakt">
                    Umów konsultację
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-sm" href="#oferta">
                    Zobacz modele współpracy
                </a>
</div>

<div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">48h</div>
<div className="text-xs text-muted uppercase tracking-wider mt-1">Średni czas dostarczenia profilu</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Top 3%</div>
<div className="text-xs text-muted uppercase tracking-wider mt-1">Selekcja talentów</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">96%</div>
<div className="text-xs text-muted uppercase tracking-wider mt-1">Retention Rate</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-white tracking-tight">EU/US</div>
<div className="text-xs text-muted uppercase tracking-wider mt-1">Strefy czasowe</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
</header>

<section className="py-24 max-w-6xl mx-auto px-6" id="oferta">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">Obszary działania</h2>
<p className="text-muted text-sm">Precyzyjnie dobrane rozwiązania dla Twojego biznesu.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all glow-card group relative">
<div className="absolute top-8 right-8 text-accent opacity-80 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">IT Staff Augmentation</h3>
<p className="text-muted text-sm leading-relaxed max-w-md mb-8">
                    Rozszerzenie Twojego zespołu o Senior Developerów, QA i DevOpsów. Pełna integracja z Twoimi procesami. Transparentne rozliczenie T&amp;M.
                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                        Redukcja kosztów rekrutacji o 40%
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                        Dostępność w strefie czasowej klienta
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
                        Angielski B2+/C1 jako standard
                    </li>
</ul>
</div>

<div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all glow-card group">
<div className="mb-6 text-slate-400 group-hover:text-accent transition-colors">
<iconify-icon icon="solar:cloud-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Cloud &amp; DevOps</h3>
<p className="text-muted text-sm leading-relaxed mb-4">
                    Migracja, optymalizacja kosztów (FinOps) i architektura Serverless na AWS/Azure.
                </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-400">Terraform</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] text-slate-400">Kubernetes</span>
</div>
</div>

<div className="bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all glow-card group">
<div className="mb-6 text-slate-400 group-hover:text-accent transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">IT Consulting</h3>
<p className="text-muted text-sm leading-relaxed">
                    Audyt długu technologicznego, wybór stacku pod MVP i strategia cyfrowej transformacji.
                </p>
</div>

<div className="md:col-span-2 bg-card border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all glow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Dedykowane Zespoły (Managed Teams)</h3>
<p className="text-muted text-sm">Przejmujemy odpowiedzialność za delivery. PM + Tech Lead + Deweloperzy.</p>
</div>
<a className="shrink-0 px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-colors" href="#kontakt">
                    Wyceń zespół →
                </a>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.02]" id="technologie">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium text-white tracking-tight">Core Technology Stack</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">

<div className="bg-[#0B0F17] p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#121826] transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:java" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">Java</span>
</div>
<div className="bg-[#0B0F17] p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#121826] transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:python" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">Python</span>
</div>
<div className="bg-[#0B0F17] p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#121826] transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:react" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">React</span>
</div>
<div className="bg-[#0B0F17] p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#121826] transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:aws" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">AWS</span>
</div>
<div className="bg-[#0B0F17] p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#121826] transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:docker-icon" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">Docker</span>
</div>
<div className="bg-[#0B0F17] p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#121826] transition-colors group">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:typescript-icon" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">TypeScript</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="proces">
<h2 className="text-2xl font-medium text-white tracking-tight mb-16 text-center">Proces wdrożenia</h2>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-[15px] left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0"></div>

<div className="relative group">
<div className="w-8 h-8 rounded-full bg-[#0B0F17] border border-white/20 flex items-center justify-center text-xs text-white mb-6 relative z-10 group-hover:border-accent group-hover:text-accent transition-colors mx-auto md:mx-0">
                    1
                </div>
<div className="text-center md:text-left">
<h4 className="text-white font-medium mb-2">Discovery Call</h4>
<p className="text-xs text-muted leading-relaxed">Analiza wymagań technicznych i dopasowanie kultury organizacyjnej.</p>
</div>
</div>

<div className="relative group">
<div className="w-8 h-8 rounded-full bg-[#0B0F17] border border-white/20 flex items-center justify-center text-xs text-white mb-6 relative z-10 group-hover:border-accent group-hover:text-accent transition-colors mx-auto md:mx-0">
                    2
                </div>
<div className="text-center md:text-left">
<h4 className="text-white font-medium mb-2">Prezentacja Kandydatów</h4>
<p className="text-xs text-muted leading-relaxed">Blind CV w 48h. Wstępna weryfikacja techniczna przez naszych Tech Leadów.</p>
</div>
</div>

<div className="relative group">
<div className="w-8 h-8 rounded-full bg-[#0B0F17] border border-white/20 flex items-center justify-center text-xs text-white mb-6 relative z-10 group-hover:border-accent group-hover:text-accent transition-colors mx-auto md:mx-0">
                    3
                </div>
<div className="text-center md:text-left">
<h4 className="text-white font-medium mb-2">Techniczny Interview</h4>
<p className="text-xs text-muted leading-relaxed">Spotkanie z Twoim zespołem. Live coding lub weryfikacja architektoniczna.</p>
</div>
</div>

<div className="relative group">
<div className="w-8 h-8 rounded-full bg-[#0B0F17] border border-white/20 flex items-center justify-center text-xs text-white mb-6 relative z-10 group-hover:border-accent group-hover:text-accent transition-colors mx-auto md:mx-0">
                    4
                </div>
<div className="text-center md:text-left">
<h4 className="text-white font-medium mb-2">Kick-off</h4>
<p className="text-xs text-muted leading-relaxed">Podpisanie umowy, przekazanie dostępów, start sprintu.</p>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 pb-24">
<div className="border-t border-white/5 pt-12">
<h2 className="text-xl font-medium text-white mb-8">FAQ</h2>
<div className="space-y-1">
<details className="group py-4 border-b border-white/5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-slate-300 group-hover:text-white transition-colors">
                        Jakie modele rozliczeń oferujecie?
                        <iconify-icon className="text-muted group-open:rotate-45 transition-transform" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="pt-4 text-xs text-muted leading-relaxed max-w-xl">
                        Głównie Time &amp; Material (stawka godzinowa/dzienna), co zapewnia największą elastyczność. Dla projektów o sztywnym zakresie (fixed scope) możliwy jest Fixed Price.
                    </div>
</details>
<details className="group py-4 border-b border-white/5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-slate-300 group-hover:text-white transition-colors">
                        Czy mogę "wymienić" programistę?
                        <iconify-icon className="text-muted group-open:rotate-45 transition-transform" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="pt-4 text-xs text-muted leading-relaxed max-w-xl">
                        Tak. Jeśli specjalista nie spełni oczekiwań w okresie próbnym, proponujemy wymianę na nasz koszt w trybie priorytetowym.
                    </div>
</details>
<details className="group py-4 border-b border-white/5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-slate-300 group-hover:text-white transition-colors">
                        Jak dbacie o bezpieczeństwo IP?
                        <iconify-icon className="text-muted group-open:rotate-45 transition-transform" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="pt-4 text-xs text-muted leading-relaxed max-w-xl">
                        Standardem jest NDA podpisywane zarówno z nami, jak i bezpośrednio z każdym developerem. Przekazujemy pełne prawa autorskie do kodu.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0B0F17] pt-20 pb-10" id="kontakt">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-white"></div>
<span className="font-medium text-white tracking-tight">AJC Investments</span>
</div>
<h3 className="text-2xl font-medium text-white mb-6 tracking-tight">Zacznijmy projekt.</h3>
<div className="space-y-4">
<a className="flex items-center gap-3 text-sm text-muted hover:text-white transition-colors" href="mailto:contact@ajcinvestments.com">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                        contact@ajcinvestments.com
                    </a>
<a className="flex items-center gap-3 text-sm text-muted hover:text-white transition-colors" href="tel:+48000000000">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        +48 000 000 000
                    </a>
</div>
</div>
<div className="flex-1 max-w-md">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600" placeholder="Imię" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600" placeholder="Email służbowy" type="email"/>
</div>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600 resize-none" placeholder="O czym chcesz porozmawiać?" rows="3"></textarea>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors text-sm" type="button">
                        Wyślij zapytanie
                    </button>
<p className="text-[10px] text-slate-600 text-center">
                        Odpowiadamy w max. 24h. Twoje dane są bezpieczne.
                    </p>
</form>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 uppercase tracking-widest border-t border-white/5 pt-8">
<p>© 2024 AJC Investments</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Prywatność</a>
<a className="hover:text-slate-400" href="#">Regulamin</a>
</div>
</div>
</footer>


    </>
  );
}
