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



        // Simple Router to simulate multi-page behavior in a single file
        function router(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target page
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            }

            // Hide global CTA on contact page to avoid redundancy
            const cta = document.getElementById('global-cta');
            if(pageId === 'contact') {
                cta.style.display = 'none';
            } else {
                cta.style.display = 'block';
            }
        }

        function toggleMobile() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // Initialize logic for hiding CTA on load if on contact (rare case here but good practice)
        if(document.querySelector('#contact.active')) {
            document.getElementById('global-cta').style.display = 'none';
        }
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-zinc-900 flex items-center gap-2 group" href="#" onclick="router('home')">
<span className="w-8 h-8 bg-zinc-900 text-white flex items-center justify-center rounded-lg">
<iconify-icon icon="solar:infinity-linear" width="20"></iconify-icon>
</span>
                MEDIASUS
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<button className="hover:text-zinc-900 transition-colors nav-link" data-target="home" onclick="router('home')">Hjem</button>
<button className="hover:text-zinc-900 transition-colors nav-link" data-target="services" onclick="router('services')">Tjenester</button>
<button className="hover:text-zinc-900 transition-colors nav-link" data-target="about" onclick="router('about')">Om oss</button>
<button className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all text-xs tracking-wide" onclick="router('contact')">
                    Kontakt oss
                </button>
</div>

<button className="md:hidden text-zinc-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 shadow-lg" id="mobile-menu">
<button className="text-left text-sm font-medium" onclick="router('home'); toggleMobile()">Hjem</button>
<button className="text-left text-sm font-medium" onclick="router('services'); toggleMobile()">Tjenester</button>
<button className="text-left text-sm font-medium" onclick="router('about'); toggleMobile()">Om oss</button>
<button className="text-left text-sm font-medium" onclick="router('contact'); toggleMobile()">Kontakt</button>
</div>
</nav>

<main className="flex-grow pt-16">

<div className="page-section active" id="home">

<section className="py-24 md:py-32 border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Aksepterer nye prosjekter Q4
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                        Vi navigerer bedrifter gjennom det <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900">digitale skiftet.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Strategisk rådgivning og AI-implementering for selskaper som krever presisjon, effektivitet og skalerbarhet.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all flex items-center gap-2" onclick="router('services')">
                            Utforsk tjenester
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-8 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-full font-medium text-sm hover:bg-zinc-50 transition-all" onclick="router('contact')">
                            Start en samtale
                        </button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-6">Markedets nye realitet</h2>
<p className="text-zinc-600 leading-relaxed mb-4">
                            Teknologien akselererer raskere enn de fleste organisasjoner klarer å adaptere. Gapet mellom de som utnytter AI og de som venter, øker daglig.
                        </p>
<p className="text-zinc-600 leading-relaxed">
                            Vi ser ikke på teknologi som et verktøy, men som en fundamental strategisk ressurs som redefinerer konkurransefortrinn.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:chart-square-linear" width="32"></iconify-icon>
<div className="text-3xl font-semibold tracking-tight mb-1">40%</div>
<div className="text-xs text-zinc-500">Effektivitetsøkning</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
<iconify-icon className="text-zinc-400 mb-4" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<div className="text-3xl font-semibold tracking-tight mb-1">24/7</div>
<div className="text-xs text-zinc-500">Operasjonell drift</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Slik jobber vi</h2>
<p className="text-zinc-500">En strukturert tilnærming for maksimal verdi.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative pl-8 border-l border-zinc-200">
<span className="absolute -left-3 top-0 w-6 h-6 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-xs font-semibold">1</span>
<h3 className="text-lg font-medium mb-3">Analyse &amp; Strategi</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                Vi kartlegger nåsituasjonen, identifiserer flaskehalser og definerer hvor AI kan gi størst avkastning umiddelbart.
                            </p>
</div>

<div className="relative pl-8 border-l border-zinc-200">
<span className="absolute -left-3 top-0 w-6 h-6 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-xs font-semibold">2</span>
<h3 className="text-lg font-medium mb-3">Implementering</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                Vi utvikler og integrerer skreddersydde løsninger uten å forstyrre den daglige driften mer enn nødvendig.
                            </p>
</div>

<div className="relative pl-8 border-l border-zinc-200">
<span className="absolute -left-3 top-0 w-6 h-6 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
<h3 className="text-lg font-medium mb-3">Skalering &amp; Opplæring</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                Vi sikrer at teamet ditt behersker verktøyene og setter opp systemer for kontinuerlig forbedring.
                            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="max-w-6xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Kjerneområder</h2>
<button className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors" onclick="router('services')">
                            Alle tjenester <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer" onclick="router('service-ai-strategy')">
<iconify-icon className="mb-4 text-zinc-400 group-hover:text-white transition-colors" icon="solar:route-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-2">AI Strategi</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Helhetlig veikart for digital transformasjon.</p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer" onclick="router('service-ai-assistant')">
<iconify-icon className="mb-4 text-zinc-400 group-hover:text-white transition-colors" icon="solar:chat-round-dots-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-2">AI Assistent</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Custom chatbots og automasjon for kundeservice.</p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer" onclick="router('service-chatgpt-course')">
<iconify-icon className="mb-4 text-zinc-400 group-hover:text-white transition-colors" icon="solar:diploma-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium mb-2">ChatGPT Kurs</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Praktisk opplæring for ansatte og ledelse.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
<h3 className="text-lg font-medium mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon>
                            Dette er for deg som
                        </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-600"><span className="w-1.5 h-1.5 mt-2 bg-zinc-900 rounded-full"></span>Ønsker å automatisere repetitive oppgaver.</li>
<li className="flex gap-3 text-sm text-zinc-600"><span className="w-1.5 h-1.5 mt-2 bg-zinc-900 rounded-full"></span>Er nysgjerrig på AI, men usikker på startpunkt.</li>
<li className="flex gap-3 text-sm text-zinc-600"><span className="w-1.5 h-1.5 mt-2 bg-zinc-900 rounded-full"></span>Verdsetter datadrevne beslutninger.</li>
</ul>
</div>
<div className="p-8 rounded-3xl bg-white border border-zinc-100">
<h3 className="text-lg font-medium mb-6 flex items-center gap-2 text-zinc-400">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
                            Kanskje ikke for deg som
                        </h3>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-400"><span className="w-1.5 h-1.5 mt-2 bg-zinc-300 rounded-full"></span>Leter etter "bli rik i en fei" løsninger.</li>
<li className="flex gap-3 text-sm text-zinc-400"><span className="w-1.5 h-1.5 mt-2 bg-zinc-300 rounded-full"></span>Ikke er villig til å endre eksisterende rutiner.</li>
<li className="flex gap-3 text-sm text-zinc-400"><span className="w-1.5 h-1.5 mt-2 bg-zinc-300 rounded-full"></span>Foretrekker kortsiktige gevinster over langsiktig verdi.</li>
</ul>
</div>
</div>
</section>
</div>

<div className="page-section" id="services">
<section className="py-24 md:py-32">
<div className="max-w-6xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Vår ekspertise</h1>
<p className="text-lg text-zinc-500 max-w-2xl mb-16 font-light">
                        Vi kombinerer teknisk innsikt med forretningsforståelse for å levere løsninger som ikke bare fungerer, men som skaper varig verdi.
                    </p>
<div className="grid gap-8">

<div className="group p-8 rounded-3xl border border-zinc-200 hover:border-zinc-400 transition-all cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white hover:shadow-lg hover:shadow-zinc-100/50" onclick="router('service-ai-strategy')">
<div className="flex-1">
<h2 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-blue-600 transition-colors">AI Strategi &amp; Rådgivning</h2>
<p className="text-zinc-500 leading-relaxed max-w-xl">
                                    Vi hjelper deg å identifisere hvor AI kan gi størst verdi, og legger en konkret plan for implementering.
                                </p>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group p-8 rounded-3xl border border-zinc-200 hover:border-zinc-400 transition-all cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white hover:shadow-lg hover:shadow-zinc-100/50" onclick="router('service-ai-assistant')">
<div className="flex-1">
<h2 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-blue-600 transition-colors">Skreddersydd AI Assistent</h2>
<p className="text-zinc-500 leading-relaxed max-w-xl">
                                    Utvikling av egne GPT-modeller trent på dine data for kundeservice, internt søk eller innholdsproduksjon.
                                </p>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group p-8 rounded-3xl border border-zinc-200 hover:border-zinc-400 transition-all cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white hover:shadow-lg hover:shadow-zinc-100/50" onclick="router('service-chatgpt-course')">
<div className="flex-1">
<h2 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-blue-600 transition-colors">ChatGPT Kurs &amp; Workshops</h2>
<p className="text-zinc-500 leading-relaxed max-w-xl">
                                    Hev kompetansen internt. Vi lærer teamet ditt å bruke verktøyene effektivt og trygt i hverdagen.
                                </p>
</div>
<div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="service-ai-strategy">
<section className="py-24 md:py-32 bg-zinc-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="text-sm font-semibold tracking-wide text-zinc-500 uppercase mb-4">Tjenester</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-900">AI Strategi</h1>
<p className="text-lg text-zinc-600 leading-relaxed">
                        Fra buzzword til bunnlinje. Vi konverterer teknologisk potensial til forretningsmessig realitet.
                    </p>
</div>
</section>
<section className="py-24 max-w-4xl mx-auto px-6">
<div className="grid gap-16">
<div>
<h3 className="text-xl font-semibold mb-4">Utfordringen</h3>
<p className="text-zinc-600 leading-relaxed">
                            Mange bedrifter vet at de "bør gjøre noe med AI", men mangler en klar plan. Resultatet er ofte fragmenterte prosjekter som ikke snakker sammen, eller investeringer i verktøy som ingen bruker. Uten strategi blir innovasjon til kostnad.
                        </p>
</div>
<div>
<h3 className="text-xl font-semibold mb-4">Vår tilnærming</h3>
<p className="text-zinc-600 leading-relaxed mb-6">
                            Vi starter med forretningsmålene, ikke teknologien. Gjennom en strukturert prosess kartlegger vi dine data, prosesser og mennesker for å finne de optimale bruksområdene.
                        </p>
<div className="grid md:grid-cols-2 gap-4">
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100 text-sm font-medium">1. Modenhetsanalyse</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100 text-sm font-medium">2. Mulighetskartlegging</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100 text-sm font-medium">3. Risikovurdering &amp; Etikk</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100 text-sm font-medium">4. Implementeringsplan</div>
</div>
</div>
<div>
<h3 className="text-xl font-semibold mb-4">Typiske resultater</h3>
<ul className="space-y-3">
<li className="flex gap-3 text-zinc-600"><iconify-icon className="mt-1 text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Klarhet i investeringsbehov.</li>
<li className="flex gap-3 text-zinc-600"><iconify-icon className="mt-1 text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Redusert risiko for feilinvesteringer.</li>
<li className="flex gap-3 text-zinc-600"><iconify-icon className="mt-1 text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Konkurransefortrinn gjennom raskere adopsjon.</li>
</ul>
</div>
</div>
</section>
</div>

<div className="page-section" id="service-ai-assistant">
<section className="py-24 md:py-32 bg-zinc-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="text-sm font-semibold tracking-wide text-zinc-500 uppercase mb-4">Tjenester</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-900">AI Assistent</h1>
<p className="text-lg text-zinc-600 leading-relaxed">
                        Din bedrifts kunnskap, gjort tilgjengelig 24/7. Skreddersydde agenter som kjenner dine data.
                    </p>
</div>
</section>
<section className="py-24 max-w-4xl mx-auto px-6">
<div className="grid gap-16">
<div>
<h3 className="text-xl font-semibold mb-4">Utfordringen</h3>
<p className="text-zinc-600 leading-relaxed">
                            Ansatte bruker i snitt 20% av tiden på å lete etter informasjon. Kunder venter timer eller dager på svar som finnes i dokumentasjonen. Generiske AI-modeller kjenner ikke dine prislister, rutiner eller tone-of-voice.
                        </p>
</div>
<div>
<h3 className="text-xl font-semibold mb-4">Hva du får</h3>
<p className="text-zinc-600 leading-relaxed mb-6">
                            Vi bygger sikre, GDPR-kompatible AI-assistenter som trenes spesifikt på dine interne dokumenter, nettsider og e-poster.
                        </p>
<div className="p-6 bg-zinc-900 text-white rounded-2xl mb-6">
<div className="flex items-start gap-4 mb-4">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs">AI</div>
<div className="bg-zinc-800 p-3 rounded-lg rounded-tl-none text-sm text-zinc-200">
                                    "Basert på prosjekthåndboken fra 2023, er standard prosedyre for avvikshåndtering følgende..."
                                </div>
</div>
<div className="text-xs text-zinc-500 text-center">Eksempel på internt svar</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="service-chatgpt-course">
<section className="py-24 md:py-32 bg-zinc-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="text-sm font-semibold tracking-wide text-zinc-500 uppercase mb-4">Tjenester</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-900">ChatGPT Kurs</h1>
<p className="text-lg text-zinc-600 leading-relaxed">
                        Praktisk kompetanseheving. Fra "hvordan logge inn" til avansert prompt engineering.
                    </p>
</div>
</section>
<section className="py-24 max-w-4xl mx-auto px-6">
<div className="grid gap-12">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<h3 className="text-xl font-semibold mb-4">For ledere</h3>
<p className="text-zinc-600 text-sm leading-relaxed mb-4">Forstå mulighetsrommet, begrensningene og hvordan styre en AI-drevet organisasjon.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li>• Etikk og personvern</li>
<li>• Beslutningsstøtte</li>
<li>• Implementeringsstrategi</li>
</ul>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold mb-4">For ansatte</h3>
<p className="text-zinc-600 text-sm leading-relaxed mb-4">Konkrete teknikker for å løse daglige oppgaver raskere og bedre.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li>• Prompt engineering</li>
<li>• Analyse og oppsummering</li>
<li>• Innholdsproduksjon</li>
</ul>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="about">
<section className="py-24 md:py-32">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Om Mediasus</h1>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Mediasus ble grunnlagt på overbevisningen om at teknologi skal tjene mennesket, ikke omvendt. Vi er et spesialisert konsulenthus som bygger broen mellom kompleks AI-teknologi og praktisk forretningsverdi.
                            </p>
<p className="text-lg text-zinc-600 leading-relaxed">
                                Vi er ikke et stort byrå med hundrevis av ansatte. Vi er små, smidige og jobber tett med et selektivt utvalg kunder hvor vi vet vi kan gjøre en betydelig forskjell.
                            </p>
</div>
<div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100">
<h3 className="text-xl font-semibold mb-6">Våre prinsipper</h3>
<div className="space-y-6">
<div>
<h4 className="font-medium text-zinc-900 mb-1">Presisjon over volum</h4>
<p className="text-sm text-zinc-500">Vi leverer heller færre, bedre løsninger enn mange middelmådige.</p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-1">Åpenhet</h4>
<p className="text-sm text-zinc-500">Ingen sorte bokser. Vi forklarer teknologien slik at du forstår den.</p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-1">Langsiktighet</h4>
<p className="text-sm text-zinc-500">Vi bygger systemer som tåler tidens tann og kan skaleres.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="contact">
<section className="py-24 md:py-32">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Start dialogen</h1>
<p className="text-lg text-zinc-500 font-light">
                            Fortell oss om din utfordring. Vi svarer vanligvis innen 24 timer.
                        </p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Takk for din henvendelse!');">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Navn</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all" placeholder="Ditt navn" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">E-post</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all" placeholder="din@epost.no" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Hva gjelder det?</label>
<select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all">
<option>Strategisk rådgivning</option>
<option>AI Assistent utvikling</option>
<option>Kurs og foredrag</option>
<option>Annet</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Melding</label>
<textarea className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all" placeholder="Beskriv kort utfordringen din..." rows="5"></textarea>
</div>
<button className="w-full py-4 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-all" type="submit">
                            Send henvendelse
                        </button>
</form>
<div className="mt-12 text-center">
<p className="text-xs text-zinc-400">
                            Vi behandler dine data konfidensielt. Ved å sende inn skjemaet godtar du våre retningslinjer for personvern.
                        </p>
</div>
</div>
</section>
</div>

<section className="py-24 border-t border-zinc-100 bg-white" id="global-cta">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Klar for å ta neste steg?</h2>
<p className="text-zinc-500 max-w-xl mx-auto mb-10">
                    Vi tar en uforpliktende prat for å se om vi er en god match for dine ambisjoner.
                </p>
<button className="px-8 py-3 bg-zinc-900 text-white rounded-full font-medium text-sm hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200" onclick="router('contact')">
                    Book et møte
                </button>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="text-lg font-semibold tracking-tight text-zinc-900 flex items-center gap-2 mb-6">
<span className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded text-xs">
<iconify-icon icon="solar:infinity-linear"></iconify-icon>
</span>
                        MEDIASUS
                    </div>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                        Vi hjelper ambisiøse selskaper med å navigere det digitale landskapet gjennom strategisk AI-implementering.
                    </p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Navigasjon</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><button className="hover:text-zinc-900 transition-colors" onclick="router('home')">Hjem</button></li>
<li><button className="hover:text-zinc-900 transition-colors" onclick="router('services')">Tjenester</button></li>
<li><button className="hover:text-zinc-900 transition-colors" onclick="router('about')">Om oss</button></li>
<li><button className="hover:text-zinc-900 transition-colors" onclick="router('contact')">Kontakt</button></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Juridisk</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Personvern</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Vilkår</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 text-xs text-zinc-400">
<p>© 2023 MEDIASUS AS. Alle rettigheter reservert.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
