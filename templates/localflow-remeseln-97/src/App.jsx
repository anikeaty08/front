import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Pages Data
        const pagesContent = {
            "ochrana-sukromia": {
                title: "Ochrana súkromia",
                content: `
                    <p class="text-sm text-slate-400 mb-6">Dátum účinnosti: 2026</p>
                    <p class="mb-4">LocalFlow („my“, „nás“, „naše“) rešpektuje vaše súkromie a zaväzuje sa chrániť vaše osobné údaje.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Aké údaje zhromažďujeme</h3>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Meno</li>
                        <li>Emailová adresa</li>
                        <li>Telefónne číslo</li>
                        <li>Informácie o vašej firme</li>
                        <li>Údaje o používaní webstránky</li>
                        <li>Správy odoslané cez formuláre</li>
                    </ul>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Ako používame vaše údaje</h3>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Poskytovanie a zlepšovanie našich služieb</li>
                        <li>Odpovedanie na vaše otázky</li>
                        <li>Zlepšovanie našej webstránky</li>
                        <li>Komunikáciu s vami</li>
                        <li>Poskytovanie zákazníckej podpory</li>
                    </ul>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Ochrana údajov</h3>
                    <p class="mb-4">Používame primerané bezpečnostné opatrenia na ochranu vašich údajov pred neoprávneným prístupom, zmenou alebo zneužitím.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Služby tretích strán</h3>
                    <p class="mb-4">Môžeme používať dôveryhodné služby tretích strán, ako sú hosting, analytické nástroje alebo komunikačné platformy, aby sme mohli poskytovať naše služby.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Vaše práva</h3>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Požiadať o prístup k vašim údajom</li>
                        <li>Požiadať o opravu vašich údajov</li>
                        <li>Požiadať o vymazanie vašich údajov</li>
                    </ul>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Kontakt</h3>
                    <p>Ak máte otázky, kontaktujte nás na: <span class="text-cyan-300">infolocalflowai@gmail.com</span></p>
                `
            },
            "obchodne-podmienky": {
                title: "Obchodné podmienky",
                content: `
                    <p class="mb-4">Používaním služieb LocalFlow súhlasíte s nasledujúcimi podmienkami:</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Služby</h3>
                    <p class="mb-4">LocalFlow poskytuje webstránky, automatizačné systémy a digitálne služby pre remeselníkov.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Zodpovednosť klienta</h3>
                    <p class="mb-4">Klient súhlasí s poskytnutím presných informácií a spoluprácou počas implementácie služieb.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Platby</h3>
                    <p class="mb-4">Všetky poplatky za vytvorenie a mesačné služby musia byť uhradené podľa dohody. Služby je možné zrušiť podľa podmienok dohody.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Dostupnosť služby</h3>
                    <p class="mb-4">Usilujeme sa o maximálnu dostupnosť, ale negarantujeme nepretržitú prevádzku bez výpadkov.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Obmedzenie zodpovednosti</h3>
                    <p class="mb-4">LocalFlow nezodpovedá za nepriame alebo následné škody spôsobené používaním našich služieb.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Zmeny</h3>
                    <p class="mb-4">Vyhradzujeme si právo tieto podmienky kedykoľvek aktualizovať.</p>
                    <h3 class="text-white text-lg font-semibold mt-8 mb-3">Kontakt</h3>
                    <p>infolocalflowai@gmail.com</p>
                `
            },
            "kontaktovat-podporu": {
                title: "Kontakt a podpora",
                content: `
                    <p class="mb-6">Ak potrebujete pomoc alebo máte otázky, kontaktujte nás.</p>
                    <div class="rounded-2xl border border-white/10 bg-white/5 p-5 mb-6">
                        <p class="text-xs uppercase tracking-wider text-slate-400 mb-2">Email</p>
                        <p class="text-cyan-300 break-words">infolocalflowai@gmail.com</p>
                    </div>
                    <h3 class="text-white text-lg font-semibold mt-6 mb-3">Čas odpovede</h3>
                    <p class="mb-4">Zvyčajne odpovedáme do 24 hodín.</p>
                    <h3 class="text-white text-lg font-semibold mt-6 mb-3">Podpora</h3>
                    <p>Pondelok – Piatok<br>9:00 – 17:00</p>
                `
            }
        };

        // Navigation Functions
        function navigateToPage(pageId) {
            const homeView = document.getElementById('home-view');
            const legalView = document.getElementById('legal-view');
            const legalTitle = document.getElementById('legal-title');
            const legalBody = document.getElementById('legal-body');
            const navBtn = document.getElementById('nav-action-btn');

            if (pageId === 'home') {
                homeView.classList.remove('hidden');
                legalView.classList.add('hidden');
                
                // Reset Nav Button
                navBtn.innerHTML = `
                    <a href="#pricing" class="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-xs font-medium transition-all duration-300">
                        Klientsky portál
                    </a>
                `;
            } else if (pagesContent[pageId]) {
                homeView.classList.add('hidden');
                legalView.classList.remove('hidden');
                
                // Set Content
                legalTitle.innerText = pagesContent[pageId].title;
                legalBody.innerHTML = pagesContent[pageId].content;
                
                // Change Nav Button to Back
                navBtn.innerHTML = `
                    <a href="#" onclick="window.navigateToPage('home'); return false;" class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-xs font-medium transition-all duration-300">
                        <iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> Späť na úvod
                    </a>
                `;
            }
            
            window.scrollTo(0, 0);
        }

        // Make functions globally available
        window.navigateToPage = navigateToPage;

        // Animations on Scroll
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('reveal-hidden');
                        entry.target.classList.add('reveal-visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-element').forEach((el) => {
                el.classList.add('reveal-hidden');
                observer.observe(el);
            });
        });

        // Accordion Logic
        function toggleAccordion(element) {
            const item = element.parentElement;
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
            }
        }

        // Pricing Mobile Logic
        function togglePricingFeatures(id, btn) {
            const el = document.getElementById(id);
            const isHidden = el.classList.contains('hidden');
            if (isHidden) {
                el.classList.remove('hidden');
                btn.innerHTML = 'Skryť <iconify-icon icon="solar:alt-arrow-up-linear" width="10"></iconify-icon>';
            } else {
                el.classList.add('hidden');
                btn.innerHTML = 'Zobraziť všetko <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>';
            }
        }

        // Form Logic
        async function handleFormSubmit(event) {
            event.preventDefault();
            const btn = document.getElementById('submit-btn');
            const originalContent = btn.innerHTML;
            btn.innerText = 'Odosielam...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            
            // Simulating API call for demo purposes
            // In production, this would go to the n8n webhook
            setTimeout(() => {
                document.getElementById('form-container').classList.add('hidden');
                const successView = document.getElementById('success-view');
                successView.classList.remove('hidden');
                successView.classList.add('flex');
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#007bff]/5 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00badf]/5 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0e1a]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 hover:opacity-80 transition-opacity" href="#" onclick="window.navigateToPage('home'); return false;">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00badf] to-[#007bff] flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,186,223,0.3)]">
<iconify-icon icon="solar:bolt-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">LocalFlow</span>
</a>

<div id="nav-action-btn">
<a className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-xs font-medium transition-all duration-300" href="#pricing">
                    Klientsky portál
                </a>
</div>
</div>
</nav>

<div id="main-content-wrapper">

<div id="home-view">

<main className="z-10 pt-32 lg:pt-48 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="text-center lg:text-left">
<div className="reveal-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-[11px] font-medium mb-10 uppercase tracking-widest hover:border-cyan-500/40 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00badf]"></span>
                            Vytvorené pre remeselníkov
                        </div>
<h1 className="reveal-element delay-100 text-5xl md:text-7xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.05]">
<span className="text-white">Získajte viac</span><br/>
<span className="gradient-text-accent cyan-glow-text">Zákaziek.</span>
</h1>
<p className="reveal-element delay-200 text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed">
                            Už nikdy nezmeškajte zákazku vďaka nášmu systému okamžitej odozvy. My riešime dopyty, vy pracujete.
                            <span className="text-slate-300 block mt-2">Získajte nových zákazníkov na autopilota.</span>
</p>
<div className="reveal-element delay-300 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-5">
<a className="btn-primary w-full sm:w-auto px-8 py-4 text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 group" href="#pricing">
                                Pozrieť balíky
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="reveal-element delay-300 mt-20 pt-10 border-t border-white/5 flex flex-wrap lg:justify-start justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white/60 font-medium">
<iconify-icon icon="logos:google-icon" width="18"></iconify-icon> Google Business
                            </div>
<div className="flex items-center gap-2 text-white/60 font-medium">
<iconify-icon icon="logos:whatsapp-icon" width="18"></iconify-icon> WhatsApp
                            </div>
<div className="flex items-center gap-2 text-white/60 font-medium">
<iconify-icon className="brightness-200 invert" icon="logos:stripe" width="30"></iconify-icon>
</div>
</div>
</div>

<div className="reveal-element delay-300 relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00badf]/20 blur-3xl rounded-full pointer-events-none"></div>
<div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden bg-[#0d1221]/60">
<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Čas odozvy na dopyt</div>
<div className="text-[10px] text-slate-500">Priemerný čas kontaktovania</div>
</div>
</div>
<div className="flex items-center gap-2 px-2 py-1 rounded-md bg-green-500/10 border border-green-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-bold text-green-500 tracking-wide uppercase">Naživo</span>
</div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-slate-400 font-medium">Bežná firma</span>
<span className="text-rose-400 font-semibold">3 Hodiny</span>
</div>
<div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-rose-500/60 w-0 rounded-full animate-fill" style={{-TargetWidth: '85%'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-white font-medium flex items-center gap-1">
                                            S naším systémom
                                            <iconify-icon className="text-[#00badf] animate-pulse" icon="solar:bolt-bold" width="10"></iconify-icon>
</span>
<span className="text-[#00badf] font-bold text-sm cyan-glow-text">3 Sekundy</span>
</div>
<div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(0,186,223,0.1)]">
<div className="absolute top-0 left-0 h-full bg-[#00badf] w-0 rounded-full shadow-[0_0_15px_#00badf] animate-fill" style={{-TargetWidth: '5%', animationDelay: '0.5s'}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-[10px] text-slate-500">Úspešnosť zákaziek:</span>
<span className="text-xs text-green-400 font-medium flex items-center gap-1">
<iconify-icon icon="solar:trending-up-bold" width="12"></iconify-icon>
                                    +391% Zvýšenie
                                </span>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 relative z-10" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="text-[#00badf] text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">Naše Riešenia</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
                            Všetko pre <span className="gradient-text-accent">získanie zákazníkov</span>
</h2>
<p className="text-slate-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                            Systémy navrhnuté tak, aby premenili návštevníkov stránky na platiacich klientov.
                        </p>
</div>
<div className="mobile-service-grid md:grid md:grid-cols-3 md:gap-6">

<div className="reveal-element delay-100 p-5 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group">
<div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-[#00badf]/10 flex items-center justify-center text-[#00badf] mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(0,186,223,0.3)]">
<iconify-icon className="text-[20px] md:text-[28px]" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-4 tracking-tight">Weby, ktoré predávajú</h3>
<p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-4 md:mb-8 h-auto md:h-10">
                                Moderné webstránky optimalizované pre konverziu návštevníka na zákazníka.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-[11px] font-medium text-slate-400 hover:text-slate-300 hover:border-white/10 transition-colors cursor-default">Rýchle načítanie</span>
<span className="hidden md:inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[11px] font-medium text-slate-400 hover:text-slate-300 hover:border-white/10 transition-colors cursor-default">SEO Optimalizácia</span>
</div>
</div>

<div className="reveal-element delay-200 p-5 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group">
<div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-[#00badf]/10 flex items-center justify-center text-[#00badf] mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(0,186,223,0.3)]">
<iconify-icon className="text-[20px] md:text-[28px]" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-4 tracking-tight">Okamžitá odpoveď</h3>
<p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-4 md:mb-8 h-auto md:h-10">
                                Systém, ktorý odpovie záujemcom okamžite, aj keď vy práve pracujete na zákazke.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-[11px] font-medium text-slate-400 hover:text-slate-300 hover:border-white/10 transition-colors cursor-default">24/7 Dostupnosť</span>
<span className="hidden md:inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[11px] font-medium text-slate-400 hover:text-slate-300 hover:border-white/10 transition-colors cursor-default">Zber kontaktov</span>
</div>
</div>

<div className="reveal-element delay-300 p-5 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group">
<div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-[#00badf]/10 flex items-center justify-center text-[#00badf] mb-4 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(0,186,223,0.3)]">
<iconify-icon className="text-[20px] md:text-[28px]" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base md:text-xl font-semibold text-white mb-2 md:mb-4 tracking-tight">Automatizácia</h3>
<p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-4 md:mb-8 h-auto md:h-10">
                                Pripomienky termínov a sledovanie zákaziek bez toho, aby ste museli písať správy.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-[11px] font-medium text-slate-400 hover:text-slate-300 hover:border-white/10 transition-colors cursor-default">SMS Notifikácie</span>
<span className="hidden md:inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[11px] font-medium text-slate-400 hover:text-slate-300 hover:border-white/10 transition-colors cursor-default">Kalendár</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a0e1a]/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="text-[#00badf] text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">Referencie</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                            Dôverujú nám <span className="gradient-text-accent">slovenskí remeselníci</span>
</h2>
</div>
<div className="mobile-scroll-snap testimonial-scroll md:grid md:grid-cols-3 md:gap-6">

<div className="reveal-element delay-100 glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full">
<div>
<div className="flex gap-1 text-[#00badf] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                                    "Ušetrilo mi to 10+ hodín týždenne na administratíve. Teraz sa môžem sústrediť na inštalácie bez obáv o zmeškané hovory."
                                </p>
</div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-medium">JK</div>
<div>
<div className="text-white text-sm font-medium">Ján K.</div>
<div className="text-slate-500 text-xs font-light">Hlavný inštalatér</div>
</div>
</div>
</div>

<div className="reveal-element delay-200 glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full">
<div>
<div className="flex gap-1 text-[#00badf] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                                    "Systém automatickej odpovede je prelomový. Zarezervoval 5 nových zákaziek kým som bola na stavbe. Vrelo odporúčam!"
                                </p>
</div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-medium">SM</div>
<div>
<div className="text-white text-sm font-medium">Sára M.</div>
<div className="text-slate-500 text-xs font-light">Kúrenárka</div>
</div>
</div>
</div>

<div className="reveal-element delay-300 glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full">
<div>
<div className="flex gap-1 text-[#00badf] mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                                    "Profesionálne, rýchle a moderné. Moje tržby vzrástli o 35% za prvé 3 mesiace."
                                </p>
</div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-sm font-medium">MP</div>
<div>
<div className="text-white text-sm font-medium">Marek P.</div>
<div className="text-slate-500 text-xs font-light">Elektrikár</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 md:mb-20 reveal-element">
<h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight mb-4">Vyberte si svoj balík</h2>
<p className="text-slate-400 font-light text-sm md:text-lg">Investícia, ktorá sa vám vráti s prvými zákazkami.</p>
</div>
<div className="mobile-scroll-snap pricing-scroll md:grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start pt-4 md:pt-0">

<div className="reveal-element delay-100 p-5 md:p-8 rounded-3xl glass-card flex flex-col h-full">
<div className="mb-4 md:mb-6">
<h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2 uppercase">ŠTART</h3>
<p className="text-xs text-slate-400 font-light min-h-[32px] md:min-h-[32px] leading-snug">Profesionálna webstránka, ktorá premieňa návštevníkov na zákazníkov</p>
</div>
<div className="mb-5 md:mb-8 pb-5 md:pb-8 border-b border-white/5">
<div className="flex items-end gap-2 mb-2">
<div className="flex items-baseline gap-1">
<span className="text-3xl md:text-4xl font-medium text-white">399 €</span>
</div>
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-1 md:mb-1.5">jednorazovo</span>
</div>
<div className="flex items-baseline gap-1">
<div className="flex items-baseline gap-1">
<span className="text-sm md:text-lg font-normal text-cyan-400">+ 25 €</span>
</div>
<span className="text-[10px] md:text-xs text-slate-500">/ mesačne</span>
</div>
</div>
<div className="flex-1 mb-6 md:mb-8">
<ul className="space-y-3 md:space-y-4">

<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:monitor-smartphone-linear" width="16"></iconify-icon>
<span>Profesionálna webstránka optimalizovaná na získavanie zákazníkov</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:letter-linear" width="16"></iconify-icon>
<span>Kontaktný formulár na automatické prijímanie dopytov</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:bell-linear" width="16"></iconify-icon>
<span>Okamžité upozornenie na nového zákazníka</span>
</li>

<div className="hidden md:block space-y-3 md:space-y-4" id="start-features-mobile">
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:devices-linear" width="16"></iconify-icon>
<span>Plne responzívny dizajn pre mobil aj počítač</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:magnifer-linear" width="16"></iconify-icon>
<span>Základné SEO nastavenie pre Google</span>
</li>
</div>
</ul>

<button className="md:hidden w-full text-center text-[10px] text-slate-500 hover:text-white mt-3 flex items-center justify-center gap-1 transition-colors py-1" onclick="togglePricingFeatures('start-features-mobile', this)">
                                    Zobraziť všetko <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
</div>
<button className="w-full py-2.5 md:py-3 rounded-xl border border-white/10 bg-white/5 text-white text-xs md:text-sm hover:bg-white/10 transition-all duration-300 font-medium" onclick="document.getElementById('contact').scrollIntoView()">
                                Vybrať ŠTART
                            </button>
</div>

<div className="reveal-element p-5 md:p-8 rounded-3xl bg-[#0d1326] active-card-glow relative transform lg:-translate-y-4 flex flex-col h-full z-10 overflow-visible">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 md:px-6 md:py-1.5 bg-gradient-to-r from-[#00badf] to-[#007bff] text-white text-[9px] md:text-[10px] uppercase font-bold tracking-widest rounded-full shadow-[0_0_15px_rgba(0,186,223,0.4)] border border-white/10 whitespace-nowrap w-max z-20">
                                NAJOBĽÚBENEJŠIE
                            </div>
<div className="mb-4 md:mb-6 mt-2 md:mt-0">
<h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2 flex items-center gap-2 uppercase">
                                    PROFI
                                </h3>
<p className="text-xs text-slate-400 font-light min-h-[32px] md:min-h-[32px] leading-snug">Automatický systém, ktorý zabezpečí, že neprídete o žiadneho zákazníka</p>
</div>
<div className="mb-5 md:mb-8 pb-5 md:pb-8 border-b border-white/5">
<div className="flex items-end gap-2 mb-2">
<div className="flex items-baseline gap-1">
<span className="text-4xl md:text-5xl font-medium text-white">599 €</span>
</div>
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-1 md:mb-1.5">jednorazovo</span>
</div>
<div className="flex items-baseline gap-1">
<div className="flex items-baseline gap-1">
<span className="text-sm md:text-xl font-normal text-cyan-400">+ 49 €</span>
</div>
<span className="text-[10px] md:text-xs text-slate-500">/ mesačne</span>
</div>
</div>
<div className="flex-1 mb-6 md:mb-8">
<ul className="space-y-3 md:space-y-4">

<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span className="text-white">Všetko z balíka ŠTART</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
<span className="text-white">Automatická okamžitá odpoveď zákazníkom</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
<span>Automatické ukladanie kontaktov zákazníkov</span>
</li>

<div className="hidden md:block space-y-3 md:space-y-4" id="pro-features-mobile">
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:history-linear" width="16"></iconify-icon>
<span>Automatické follow-up správy zákazníkom</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Systém, ktorý zabezpečí, že neprídete o zákazky</span>
</li>
</div>
</ul>

<button className="md:hidden w-full text-center text-[10px] text-slate-500 hover:text-white mt-3 flex items-center justify-center gap-1 transition-colors py-1" onclick="togglePricingFeatures('pro-features-mobile', this)">
                                    Zobraziť všetko <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
</div>
<button className="btn-primary w-full py-2.5 md:py-3 rounded-xl text-white text-xs md:text-sm font-medium" onclick="document.getElementById('contact').scrollIntoView()">
                                Chcem viac zákazníkov
                            </button>
</div>

<div className="reveal-element delay-200 p-5 md:p-8 rounded-3xl glass-card flex flex-col h-full">
<div className="mb-4 md:mb-6">
<h3 className="text-lg md:text-xl font-medium text-white mb-1 md:mb-2 uppercase">ELITE</h3>
<p className="text-xs text-slate-400 font-light min-h-[32px] md:min-h-[32px] leading-snug">Kompletný automatizovaný systém získavania a správy zákazníkov</p>
</div>
<div className="mb-5 md:mb-8 pb-5 md:pb-8 border-b border-white/5">
<div className="flex items-end gap-2 mb-2">
<div className="flex items-baseline gap-1">
<span className="text-3xl md:text-4xl font-medium text-white">999 €</span>
</div>
<span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium mb-1 md:mb-1.5">jednorazovo</span>
</div>
<div className="flex items-baseline gap-1">
<div className="flex items-baseline gap-1">
<span className="text-sm md:text-lg font-normal text-cyan-400">+ 89 €</span>
</div>
<span className="text-[10px] md:text-xs text-slate-500">/ mesačne</span>
</div>
</div>
<div className="flex-1 mb-6 md:mb-8">
<ul className="space-y-3 md:space-y-4">

<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="16"></iconify-icon>
<span>Všetko z balíka PROFI</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:calendar-add-linear" width="16"></iconify-icon>
<span>Automatizovaný rezervačný systém</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:smartphone-linear" width="16"></iconify-icon>
<span>SMS notifikácie o nových zákazníkoch</span>
</li>

<div className="hidden md:block space-y-3 md:space-y-4" id="elite-features-mobile">
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:sort-from-top-to-bottom-linear" width="16"></iconify-icon>
<span>Automatické follow-up sekvencie</span>
</li>
<li className="flex items-start gap-3 text-xs md:text-sm text-slate-300 font-light">
<iconify-icon className="text-[#00badf] shrink-0 mt-0.5" icon="solar:user-id-linear" width="16"></iconify-icon>
<span>Kompletný systém správy zákazníkov</span>
</li>
</div>
</ul>

<button className="md:hidden w-full text-center text-[10px] text-slate-500 hover:text-white mt-3 flex items-center justify-center gap-1 transition-colors py-1" onclick="togglePricingFeatures('elite-features-mobile', this)">
                                    Zobraziť všetko <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
</div>
<button className="w-full py-2.5 md:py-3 rounded-xl border border-white/10 bg-white/5 text-white text-xs md:text-sm hover:bg-white/10 transition-all duration-300 font-medium" onclick="document.getElementById('contact').scrollIntoView()">
                                Kontaktovať
                            </button>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16 reveal-element delay-300">
<div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#00badf]/10 border border-[#00badf]/20">
<iconify-icon className="text-[#00badf]" icon="solar:graph-up-bold" width="20"></iconify-icon>
<span className="text-white text-xs md:text-sm font-medium">Väčšina klientov získa prvého nového zákazníka do 7 dní.</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a0e1a]">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16 reveal-element">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Často kladené otázky</h2>
</div>
<div className="space-y-4">
<div className="accordion-item border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden reveal-element delay-100">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion(this)">
<span className="text-white font-medium text-sm">Bude to fungovať s mojím existujúcim číslom?</span>
<iconify-icon className="accordion-icon text-slate-400 transition-transform duration-300" icon="solar:add-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-6 text-slate-400 text-sm font-light leading-relaxed">
                                    Áno, náš systém sa bez problémov integruje s vaším súčasným nastavením. Môžete si ponechať svoje číslo a firemnú identitu.
                                </div>
</div>
</div>
<div className="accordion-item border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden reveal-element delay-100">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="toggleAccordion(this)">
<span className="text-white font-medium text-sm">Ako dlho trvá spustenie?</span>
<iconify-icon className="accordion-icon text-slate-400 transition-transform duration-300" icon="solar:add-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-6 text-slate-400 text-sm font-light leading-relaxed">
                                    Väčšinou máme váš systém plne automatizovaný a spustený do 14 dní. Celý proces nastavenia riešime za vás.
                                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-[#00badf]/5 to-transparent blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="reveal-element">
<span className="text-[#00badf] text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">Prečo my</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                            Tradičné webstránky<br/><span className="text-slate-500">už nestačia.</span><br/>Váš web musí <span className="gradient-text-accent">zarábať peniaze.</span>
</h2>
<p className="text-slate-400 font-light text-lg leading-relaxed mb-10 max-w-lg">
                            V dnešnom trhu nestačí "pekný" web. Potrebujete inteligentný systém, ktorý vám vodí zákazníkov 24/7.
                        </p>
<div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-[#00badf]/30 via-white/5 to-transparent">
<div className="bg-[#0b101e] px-6 py-5 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-[#00badf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00badf] to-[#007bff] flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(0,186,223,0.3)] z-10">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="z-10">
<p className="text-white font-medium text-lg leading-tight">Priemerná návratnosť klienta: <span className="text-[#00badf]">320%</span></p>
<p className="text-slate-500 text-sm font-light">počas prvých 6 mesiacov spolupráce.</p>
</div>
</div>
</div>
</div>

<div className="mobile-feature-grid grid grid-cols-2 sm:grid-cols-2 gap-4 reveal-element delay-200">

<div className="group p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00badf]/40 hover:bg-[#00badf]/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#00badf]/10 text-[#00badf] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[18px] md:text-[22px]" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm md:text-lg mb-2">Rýchlosť</h3>
<p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">Spustenie do 2 týždňov.</p>
</div>

<div className="group p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00badf]/40 hover:bg-[#00badf]/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#00badf]/10 text-[#00badf] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[18px] md:text-[22px]" icon="solar:graph-new-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm md:text-lg mb-2">Viac zákaziek</h3>
<p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">Nárast dopytov o 40%.</p>
</div>

<div className="group p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00badf]/40 hover:bg-[#00badf]/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#00badf]/10 text-[#00badf] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[18px] md:text-[22px]" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm md:text-lg mb-2">Efektivita</h3>
<p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">Ušetrite viac ako 10 hodín týždenne na manuálnej administratíve.</p>
</div>

<div className="group p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00badf]/40 hover:bg-[#00badf]/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#00badf]/10 text-[#00badf] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[18px] md:text-[22px]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white font-medium text-sm md:text-lg mb-2">Spoľahlivosť</h3>
<p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">99,9% dostupnosť systému s nepretržitou 24/7 technickou podporou.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a0e1a]" id="contact">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="text-[#00badf] text-xs font-semibold tracking-[0.2em] uppercase mb-6 block">Začať spoluprácu</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                            Pripravení na <span className="gradient-text-accent">viac zákaziek?</span>
</h2>
<p className="text-slate-400 font-light text-lg">Vyplňte formulár a ozveme sa vám.</p>
</div>
<div className="reveal-element delay-100 p-8 md:p-12 rounded-3xl border border-[#00badf]/20 bg-[#0d1221] shadow-[0_0_50px_-20px_rgba(0,186,223,0.1)] relative overflow-hidden transition-all duration-500" style={{minHeight: '600px'}}>
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00badf]/5 blur-[80px] rounded-full pointer-events-none"></div>

<div className="hidden absolute inset-0 z-20 flex-col items-center justify-center text-center p-8 bg-[#0d1221]/95 backdrop-blur-xl transition-all duration-500" id="success-view">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00badf] to-[#007bff] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(0,186,223,0.4)] animate-bounce">
<iconify-icon className="text-white" icon="solar:check-read-linear" strokeWidth="2" width="40"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Dopyt odoslaný!</h3>
<p className="text-slate-400 font-light text-lg max-w-md">Ďakujeme za váš záujem. Budeme vás kontaktovať čo najskôr pre dohodnutie detailov.</p>
<button className="mt-8 px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white text-sm hover:bg-white/10 transition-all font-medium" onclick="location.reload()">Späť na úvod</button>
</div>

<div id="form-container">
<form className="space-y-12 relative z-10" id="submission-form" onsubmit="handleFormSubmit(event)">
<div>
<label className="block text-sm font-medium text-white mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-[#00badf]/10 text-[#00badf] flex items-center justify-center text-xs border border-[#00badf]/20">1</span>
                                        O ktorý balík máte záujem?
                                    </label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="package" type="radio" value="Start Package"/>
<div className="h-full p-5 rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-white/20 flex flex-col justify-between gap-4">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white font-medium text-lg uppercase">ŠTART</h4>
</div>
<div className="radio-ring w-5 h-5 rounded-full border border-white/20 group-hover:border-[#00badf]/50 flex items-center justify-center transition-all duration-300">
<div className="radio-dot w-2 h-2 bg-white rounded-full opacity-0 transition-opacity duration-300"></div>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">399 €</span>
<span className="text-xs text-slate-500">+ 25 € / mes.</span>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input checked="" className="peer sr-only" name="package" type="radio" value="Pro Package"/>
<div className="h-full p-5 rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-white/20 flex flex-col justify-between gap-4">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white font-medium text-lg flex items-center gap-2 uppercase">
                                                            PROFI
                                                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 leading-none">TOP</span>
</h4>
</div>
<div className="radio-ring w-5 h-5 rounded-full border border-white/20 group-hover:border-[#00badf]/50 flex items-center justify-center transition-all duration-300">
<div className="radio-dot w-2 h-2 bg-white rounded-full opacity-0 transition-opacity duration-300"></div>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">599 €</span>
<span className="text-xs text-slate-500">+ 49 € / mes.</span>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="package" type="radio" value="Elite Package"/>
<div className="h-full p-5 rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-white/20 flex flex-col justify-between gap-4">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white font-medium text-lg uppercase">ELITE</h4>
</div>
<div className="radio-ring w-5 h-5 rounded-full border border-white/20 group-hover:border-[#00badf]/50 flex items-center justify-center transition-all duration-300">
<div className="radio-dot w-2 h-2 bg-white rounded-full opacity-0 transition-opacity duration-300"></div>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">999 €</span>
<span className="text-xs text-slate-500">+ 89 € / mes.</span>
</div>
</div>
</div>
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium text-white mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-[#00badf]/10 text-[#00badf] flex items-center justify-center text-xs border border-[#00badf]/20">2</span>
                                        Vaše údaje
                                    </label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="name">Celé meno</label>
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-600 text-sm" id="name" name="name" placeholder="Ján Novák" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="email">Emailová adresa</label>
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-600 text-sm" id="email" name="email" placeholder="jan@firma.sk" required="" type="email"/>
</div>
<div className="space-y-2 md:col-span-2">
<label className="text-xs text-slate-400 ml-1" htmlFor="phone">Telefónne číslo <span className="text-slate-600">(Voliteľné)</span></label>
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-600 text-sm" id="phone" name="phone" placeholder="+421 9xx xxx xxx" type="tel"/>
</div>
</div>
</div>
<div className="space-y-8">
<button className="w-full btn-primary py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-3 group relative overflow-hidden transition-all duration-300" id="submit-btn" type="submit">
<span className="relative z-10 btn-text">Chcem viac zákazníkov</span>
<iconify-icon className="relative z-10 group-hover:rotate-12 transition-transform btn-icon" icon="solar:stars-minimalistic-linear" width="22"></iconify-icon>
</button>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-slate-500 opacity-70">
<div className="flex items-center gap-2 text-xs font-medium">
<iconify-icon icon="solar:user-speak-linear" width="16"></iconify-icon> Slovenská podpora
                                        </div>
<div className="flex items-center gap-2 text-xs font-medium">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon> Garancia spokojnosti
                                        </div>
</div>
</div>
</form>
</div>
</div>
</div>
</section>
</div>

<div className="hidden z-10 pt-32 lg:pt-48 pr-6 pb-20 pl-6 relative min-h-screen" id="legal-view">
<div className="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-2xl border border-white/5 bg-[#0d1221]/60">
<div className="flex justify-between items-start mb-8">
<h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight" id="legal-title"></h1>
<a className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-xs font-medium" href="#" onclick="window.navigateToPage('home'); return false;">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> Späť na úvod
                    </a>
</div>
<div className="prose-custom text-slate-300 font-light leading-relaxed" id="legal-body">

</div>
<div className="mt-12 pt-8 border-t border-white/5 flex justify-center">
<a className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm" href="#" onclick="window.navigateToPage('home'); return false;">
<iconify-icon icon="solar:home-linear" width="16"></iconify-icon> Späť na hlavnú stránku
                    </a>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 bg-[#080b14] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1">
<button className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-transparent border-0 p-0 cursor-pointer text-left" onclick="window.navigateToPage('home'); window.scrollTo({top:0, behavior:'smooth'});">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#00badf] to-[#007bff] flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">LocalFlow</span>
</button>
<p className="text-[11px] text-slate-500 font-light ml-8">Viac zákaziek pre slovenských remeselníkov.</p>
</div>
<div className="flex gap-8 text-xs text-slate-400 font-light">
<button className="hover:text-cyan-400 transition-colors bg-transparent border-0 p-0 cursor-pointer text-left font-light text-xs text-slate-400" onclick="window.navigateToPage('ochrana-sukromia')">Ochrana súkromia</button>
<button className="hover:text-cyan-400 transition-colors bg-transparent border-0 p-0 cursor-pointer text-left font-light text-xs text-slate-400" onclick="window.navigateToPage('obchodne-podmienky')">Obchodné podmienky</button>
<button className="hover:text-cyan-400 transition-colors bg-transparent border-0 p-0 cursor-pointer text-left font-light text-xs text-slate-400" onclick="window.navigateToPage('kontaktovat-podporu')">Kontaktovať podporu</button>
</div>
<div className="text-[10px] text-slate-600 font-light uppercase tracking-wide">
                © 2026 LocalFlow
            </div>
</div>
</footer>



    </>
  );
}
