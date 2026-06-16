import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const btnTiktok = document.getElementById('btn-tiktok');
        const btnAll = document.getElementById('btn-all');
        const viewsValue = document.getElementById('views-value');
        const progressDot = document.getElementById('progress-dot');
        const progressBar = document.getElementById('progress-bar');
        const growthValue = document.getElementById('growth-value');

        function togglePlatform(selected) {
            if (selected === 'all') {
                btnAll.className = 'border border-white/20 bg-white/5 rounded-lg py-2 px-3 text-sm text-center text-white cursor-pointer transition-all duration-300';
                btnTiktok.className = 'border border-white/5 bg-transparent rounded-lg py-2 px-3 text-sm text-center text-neutral-500 cursor-pointer hover:bg-white/5 transition-all duration-300';
                
                viewsValue.innerText = '28.500 / Monat';
                progressDot.className = 'absolute h-3 w-3 bg-white rounded-full top-1/2 -translate-y-1/2 left-3/4 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500';
                progressBar.className = 'h-full bg-white/20 w-3/4 rounded-full transition-all duration-500';
                growthValue.innerHTML = '+76<span class="text-lg text-neutral-500">%</span>';
            } else {
                btnTiktok.className = 'border border-white/20 bg-white/5 rounded-lg py-2 px-3 text-sm text-center text-white cursor-pointer transition-all duration-300';
                btnAll.className = 'border border-white/5 bg-transparent rounded-lg py-2 px-3 text-sm text-center text-neutral-500 cursor-pointer hover:bg-white/5 transition-all duration-300';
                
                viewsValue.innerText = '10.000 / Monat';
                progressDot.className = 'absolute h-3 w-3 bg-white rounded-full top-1/2 -translate-y-1/2 left-1/3 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500';
                progressBar.className = 'h-full bg-white/20 w-1/3 rounded-full transition-all duration-500';
                growthValue.innerHTML = '+42<span class="text-lg text-neutral-500">%</span>';
            }
        }

        btnTiktok.addEventListener('click', () => togglePlatform('tiktok'));
        btnAll.addEventListener('click', () => togglePlatform('all'));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[32rem] bg-indigo-500/5 blur-[8rem] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-neutral-950/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white" href="#">SMM.A</a>
<div className="hidden md:flex items-center space-x-8 text-sm">
<a className="hover:text-white transition-colors" href="#expertise">Unsere Leistung</a>
<a className="hover:text-white transition-colors" href="#vorteile">Ihre Vorteile</a>
<a className="hover:text-white transition-colors" href="#ansatz">Strategie</a>
</div>
<a className="hidden md:inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors" href="#kontakt">
                Gespräch vereinbaren
            </a>
<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span>Kapazitäten für neue Accounts verfügbar</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                        Mehr Kunden durch eine <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">dominante Social Media Präsenz.</span>
</h1>
<p className="text-lg text-neutral-400 mb-10 leading-relaxed max-w-xl">
                        Wir sind darauf spezialisiert, Ihrem Unternehmen auf TikTok, Instagram und diversen Plattformen ein professionelles Erscheinungsbild zu verleihen. Wir steigern Ihre Aktivität, maximieren Ihre Präsenz und gewinnen so kontinuierlich neue Kunden für Sie.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
<a className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white text-neutral-950 px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors" href="#kontakt">
                            Präsenz aufbauen
                        </a>
<a className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-transparent text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors" href="#expertise">
                            So funktioniert's
                            <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-3xl blur-2xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-6 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<span className="text-xs font-medium text-neutral-500">Profil-Entwicklung</span>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-neutral-400">Social Media Aktivität</span>
<span className="text-white font-medium">+340%</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-3/4 rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-neutral-400">Neukunden-Anfragen</span>
<span className="text-white font-medium">45 / Monat</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-1/2 rounded-full"></div>
</div>
</div>

<div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between">
<span className="text-xs text-neutral-500">Plattformübergreifende Synchronisation</span>

<div className="relative inline-flex h-5 w-9 items-center rounded-full bg-white">
<span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-neutral-950 transition"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="expertise">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Sichtbarkeit, die sich in Kunden verwandelt.</h2>
<p className="text-base text-neutral-400">Ein starker Auftritt ist heute unerlässlich. Wir kümmern uns ganzheitlich um Ihre Social Media Präsenz, damit Sie sich auf Ihr Tagesgeschäft fokussieren können.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Professionelles Erscheinungsbild</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Wir kreieren einen modernen, authentischen Auftritt auf Instagram, TikTok und diversen Plattformen, der Ihr Unternehmen ins beste Licht rückt und Vertrauen schafft.
                        </p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Profil-Optimierung</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Einheitliches Branding</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Visuelle Identität</li>
</ul>
</div>

<div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon icon="solar:clapperboard-play-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Aktivität &amp; Reichweite steigern</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Durch regelmäßige, plattformgerechte Postings und Kurzvideos übernehmen wir die kontinuierliche Bespielung Ihrer Kanäle und maximieren Ihre Sichtbarkeit.
                        </p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> TikToks &amp; Instagram Reels</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Aktives Community Management</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Regelmäßige Content-Pläne</li>
</ul>
</div>

<div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Mehr Kunden gewinnen</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                            Sichtbarkeit allein reicht nicht. Wir strukturieren Ihre Präsenz so, dass aus Followern und Profilbesuchern tatsächliche Kunden für Ihr Unternehmen werden.
                        </p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Lead-Generierung</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Call-to-Action Optimierung</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-white/50" icon="solar:check-circle-linear"></iconify-icon> Conversion-Fokus</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="vorteile">
<div className="max-w-7xl mx-auto bg-white/[0.02] rounded-3xl border border-white/5 p-8 md:p-16">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Warum Unternehmen mit uns wachsen.</h2>
<p className="text-base text-neutral-400 mb-8">Ihre Zielgruppe verbringt täglich Stunden auf TikTok und Instagram. Wir sorgen dafür, dass Ihr Unternehmen dort exzellent vertreten ist und diese Aufmerksamkeit nutzt.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:target-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Gesteigerte Markenbekanntheit</h4>
<p className="text-sm text-neutral-500">Ein professioneller Auftritt auf den relevantesten Plattformen sorgt dafür, dass Ihr Name bei potenziellen Kunden dauerhaft im Gedächtnis bleibt.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-2-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Kontinuierliche Aktivität</h4>
<p className="text-sm text-neutral-500">Keine verwaisten Profile mehr. Wir halten Ihre Social Media Kanäle durch strategische Postings und Interaktionen lebendig und attraktiv.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Rundum-Sorglos-Paket</h4>
<p className="text-sm text-neutral-500">Sparen Sie sich wertvolle Zeit. Sie erhalten Zugriff auf ein Team, das von der Content-Erstellung bis zur Veröffentlichung alles für Sie übernimmt.</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-950 rounded-2xl border border-white/5 p-8 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
<h3 className="text-xl font-medium tracking-tight text-white mb-8">Potenzial für Ihr Unternehmen</h3>

<div className="space-y-8">
<div>
<div className="flex justify-between text-sm mb-3">
<span className="text-neutral-400">Aktuelle Profilaufrufe</span>
<span className="text-white font-medium" id="views-value">10.000 / Monat</span>
</div>
<div className="relative h-1 bg-neutral-800 rounded-full">
<div className="absolute h-3 w-3 bg-white rounded-full top-1/2 -translate-y-1/2 left-1/3 shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-500" id="progress-dot"></div>
<div className="h-full bg-white/20 w-1/3 rounded-full transition-all duration-500" id="progress-bar"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-3">
<span className="text-neutral-400">Plattform-Fokus</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="border border-white/20 bg-white/5 rounded-lg py-2 px-3 text-sm text-center text-white cursor-pointer transition-all duration-300" id="btn-tiktok">TikTok &amp; IG</div>
<div className="border border-white/5 bg-transparent rounded-lg py-2 px-3 text-sm text-center text-neutral-500 cursor-pointer hover:bg-white/5 transition-all duration-300" id="btn-all">Alle Netzwerke</div>
</div>
</div>
<div className="pt-6 border-t border-white/5">
<p className="text-xs text-neutral-500 mb-2">Prognostizierter Kunden-Zuwachs</p>
<p className="text-3xl font-semibold tracking-tight text-white transition-all" id="growth-value">+42<span className="text-lg text-neutral-500">%</span></p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/5" id="kontakt">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Bereit für eine starke Präsenz?</h2>
<p className="text-lg text-neutral-400 mb-10">Lassen Sie uns in einem unverbindlichen Gespräch herausfinden, wie wir das Erscheinungsbild Ihres Unternehmens auf Social Media transformieren und neue Kunden gewinnen können.</p>
<a className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-8 py-4 text-base font-medium hover:bg-neutral-200 transition-colors" href="#">
                    Kostenlose Beratung anfragen
                </a>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 px-6 text-sm text-neutral-500">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="font-medium tracking-tighter text-white text-base">SMM.A</div>
<div className="flex space-x-6">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
<a className="hover:text-white transition-colors" href="#">AGB</a>
</div>
<div className="flex space-x-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:phone-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-8 text-center md:text-left text-xs opacity-50">
            © 2024 SMM.A Agentur. Alle Rechte vorbehalten.
        </div>
</footer>


    </>
  );
}
