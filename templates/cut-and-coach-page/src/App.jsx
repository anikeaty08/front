import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('reveal-visible');
}
});
}, observerOptions);
document.querySelectorAll('section, .reveal-item').forEach(el => {
el.classList.add('reveal-on-scroll');
observer.observe(el);
});
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#E6E1DA]/80 border-b border-[#2A2A28]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl tracking-tighter font-serif font-medium flex items-center gap-2" href="#">
<span className="border border-[#2A2A28] rounded-full w-8 h-8 flex items-center justify-center text-xs">C</span>
                CUT &amp; COACH
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-[#2A2A28]/70">
<a className="hover:text-[#B45F4D] transition-colors" href="#about">Konzept</a>
<a className="hover:text-[#B45F4D] transition-colors" href="#process">Ablauf</a>
<a className="hover:text-[#B45F4D] transition-colors" href="#pricing">Preise</a>
<a className="hover:text-[#B45F4D] transition-colors" href="#host">Über mich</a>
</div>
<a className="bg-[#2A2A28] text-[#F7F6F4] text-xs font-medium px-5 py-2.5 rounded-full hover:bg-[#B45F4D] transition-colors duration-300" href="#pricing">
                Termin buchen
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="w-full lg:w-1/2 flex flex-col gap-8 reveal-item">
<div className="inline-flex items-center gap-2 text-[#B45F4D] text-xs uppercase tracking-widest font-medium">
<span className="w-8 h-[1px] bg-[#B45F4D]"></span>
                Premium Hair &amp; Mindset
            </div>
<h1 className="font-serif text-5xl lg:text-7xl lg:leading-[1.1] text-[#2A2A28] tracking-tighter">
                Erzähl das <br/><span className="italic text-[#8E9F94]">deinem</span> Frisör.
            </h1>
<p className="text-lg lg:text-xl text-[#2A2A28]/80 leading-relaxed font-light max-w-md">
                Haarschnitt und Coaching in einer Session. Ein Raum für Klarheit, Veränderung und neue Perspektiven.
            </p>
<ul className="flex flex-col gap-3 my-2">
<li className="flex items-center gap-3 text-sm text-[#2A2A28]/90">
<iconify-icon className="text-[#8E9F94] text-lg" icon="solar:check-circle-linear"></iconify-icon>
                    Persönlicher Haarschnitt ohne Zeitdruck
                </li>
<li className="flex items-center gap-3 text-sm text-[#2A2A28]/90">
<iconify-icon className="text-[#8E9F94] text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
                    Echtes Coaching während des Schneidens
                </li>
<li className="flex items-center gap-3 text-sm text-[#2A2A28]/90">
<iconify-icon className="text-[#8E9F94] text-lg" icon="solar:shield-check-linear"></iconify-icon>
                    Absolute Vertraulichkeit und Präsenz
                </li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<a className="bg-[#B45F4D] text-[#F7F6F4] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2A2A28] transition-all duration-300 text-center shadow-lg shadow-[#B45F4D]/20" href="#pricing">
                    Cut &amp; Coach Termin buchen
                </a>
<a className="border border-[#2A2A28]/20 px-8 py-4 rounded-full text-sm font-medium hover:border-[#2A2A28] transition-all duration-300 text-center flex items-center justify-center gap-2" href="#process">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    So läuft eine Session ab
                </a>
</div>
</div>
<div className="w-full lg:w-1/2 relative reveal-item" style={{transitionDelay: '200ms'}}>
<div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[2rem]">

<img alt="Calm conversation in a salon setting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2A2A28]/20 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-[#F7F6F4] p-6 rounded-xl shadow-xl max-w-xs border border-[#E6E1DA]">
<div className="flex items-start gap-4">
<iconify-icon className="text-3xl text-[#B45F4D] shrink-0" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-sm font-serif italic text-[#2A2A28]">„Ich bin mit einer Frisur gegangen – und mit einer Entscheidung.“</p>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white/40 border-y border-[#2A2A28]/5" id="about">
<div className="max-w-4xl mx-auto text-center mb-16 reveal-item">
<h2 className="font-serif text-3xl md:text-4xl text-[#2A2A28] tracking-tight mb-6">Für wen ist Cut &amp; Coach gedacht?</h2>
<p className="text-[#2A2A28]/70 max-w-xl mx-auto leading-relaxed">
                Dies ist kein Ort für Smalltalk über das Wetter. Es ist ein Ort für Menschen, die Tiefe schätzen und Wachstum suchen.
            </p>
</div>
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center reveal-item">
<div className="space-y-8">
<div className="flex gap-5 items-start group">
<div className="w-10 h-10 rounded-full bg-[#8E9F94]/20 flex items-center justify-center shrink-0 group-hover:bg-[#B45F4D] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:mind-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-lg text-[#2A2A28] mb-2">Gedanken ordnen</h3>
<p className="text-sm text-[#2A2A28]/70 leading-relaxed">Du hast viel im Kopf, stehst vor Entscheidungen oder Veränderungen und brauchst Klarheit.</p>
</div>
</div>
<div className="flex gap-5 items-start group">
<div className="w-10 h-10 rounded-full bg-[#8E9F94]/20 flex items-center justify-center shrink-0 group-hover:bg-[#B45F4D] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-lg text-[#2A2A28] mb-2">Ehrlich reden</h3>
<p className="text-sm text-[#2A2A28]/70 leading-relaxed">Du willst reden, ohne bewertet zu werden. Ein sicherer Raum für alles, was dich bewegt.</p>
</div>
</div>
<div className="flex gap-5 items-start group">
<div className="w-10 h-10 rounded-full bg-[#8E9F94]/20 flex items-center justify-center shrink-0 group-hover:bg-[#B45F4D] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-lg text-[#2A2A28] mb-2">Erlebnis statt Routine</h3>
<p className="text-sm text-[#2A2A28]/70 leading-relaxed">Du willst mit mehr gehen, als du gekommen bist. Ein Erlebnis, das nachwirkt.</p>
</div>
</div>
</div>
<div className="bg-[#F7F6F4] p-8 md:p-12 rounded-2xl text-center border border-[#E6E1DA] shadow-sm">
<iconify-icon className="text-4xl text-[#B45F4D] mb-4" icon="solar:user-speak-rounded-linear"></iconify-icon>
<h3 className="font-serif text-2xl text-[#2A2A28] mb-4 italic">Nicht für jeden.</h3>
<p className="text-[#2A2A28]/80 mb-6">Aber vielleicht genau für dich.</p>
<p className="text-sm text-[#2A2A28]/60 italic font-serif">Wenn du nur einen schnellen Haarschnitt willst, bist du hier falsch.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto" id="process">
<div className="text-center mb-16 reveal-item">
<span className="text-[#B45F4D] text-xs font-medium uppercase tracking-widest block mb-3">Die Journey</span>
<h2 className="font-serif text-3xl md:text-4xl text-[#2A2A28] tracking-tight">Dein Ablauf</h2>
<p className="mt-4 text-[#2A2A28]/60 text-sm">Alles darf, nichts muss. Du bestimmst Tiefe und Richtung.</p>
</div>
<div className="relative pl-8 md:pl-0 space-y-12 before:absolute before:left-8 md:before:left-1/2 before:top-4 before:bottom-4 before:w-[1px] before:bg-[#2A2A28]/10 before:-translate-x-1/2">

<div className="relative md:flex items-center justify-between gap-8 reveal-item">
<div className="hidden md:block md:w-1/2 md:text-right pr-12">
<h3 className="font-serif text-xl text-[#2A2A28]">Ankommen</h3>
<p className="text-sm text-[#2A2A28]/60 mt-2">Ein Getränk, Ruhe, ankommen im Raum.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#8E9F94] bg-[#E6E1DA] -translate-x-[calc(50%+1px)] md:-translate-x-[calc(50%+0.5px)] top-1.5 z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-8">
<h3 className="font-serif text-xl text-[#2A2A28] md:hidden">Ankommen</h3>
<p className="text-sm text-[#2A2A28]/60 mt-2 md:hidden">Ein Getränk, Ruhe, ankommen im Raum.</p>
</div>
</div>

<div className="relative md:flex items-center justify-between gap-8 reveal-item">
<div className="hidden md:block md:w-1/2 md:text-right pr-12 order-1"></div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#8E9F94] bg-[#E6E1DA] -translate-x-[calc(50%+1px)] md:-translate-x-[calc(50%+0.5px)] top-1.5 z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-8">
<h3 className="font-serif text-xl text-[#2A2A28]">Beratung &amp; Kopfmassage</h3>
<p className="text-sm text-[#2A2A28]/60 mt-2">Kurzes Runterkommen, Besprechung von Schnitt und Coaching-Thema.</p>
</div>
<div className="hidden md:block md:w-1/2 md:text-right pr-12">

</div>
</div>

<div className="relative md:flex items-center justify-between gap-8 reveal-item">
<div className="hidden md:block md:w-1/2 md:text-right pr-12">
<h3 className="font-serif text-xl text-[#2A2A28]">Cut &amp; Coach</h3>
<p className="text-sm text-[#2A2A28]/60 mt-2">Der Hauptteil. Schnitt und Gespräch fließen ineinander über.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#B45F4D] -translate-x-[calc(50%+1px)] md:-translate-x-[calc(50%+0.5px)] top-1.5 z-10 shadow-[0_0_0_4px_rgba(180,95,77,0.2)]"></div>
<div className="md:w-1/2 md:pl-12 pl-8">
<h3 className="font-serif text-xl text-[#2A2A28] md:hidden">Cut &amp; Coach</h3>
<p className="text-sm text-[#2A2A28]/60 mt-2 md:hidden">Der Hauptteil. Schnitt und Gespräch fließen ineinander über.</p>
</div>
</div>

<div className="relative md:flex items-center justify-between gap-8 reveal-item">
<div className="hidden md:block md:w-1/2 md:text-right pr-12 order-1"></div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#8E9F94] bg-[#E6E1DA] -translate-x-[calc(50%+1px)] md:-translate-x-[calc(50%+0.5px)] top-1.5 z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-8">
<h3 className="font-serif text-xl text-[#2A2A28]">Abschluss</h3>
<p className="text-sm text-[#2A2A28]/60 mt-2">Neuer Look, neue Klarheit. Du gehst gestärkt.</p>
</div>
<div className="hidden md:block md:w-1/2 md:text-right pr-12"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#2A2A28] text-[#F7F6F4]" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-item">
<h2 className="font-serif text-3xl md:text-5xl text-[#F7F6F4] tracking-tight mb-4">Deine Investition</h2>
<p className="text-[#F7F6F4]/60 text-sm md:text-base max-w-2xl mx-auto">Zeit ist hier kein Kostenfaktor. Tiefe schon.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-[#F7F6F4]/10 p-8 rounded-xl hover:bg-[#F7F6F4]/5 transition-colors duration-300 flex flex-col reveal-item">
<h3 className="font-serif text-xl mb-2">VIP-Style Beratung</h3>
<div className="text-2xl font-medium text-[#B45F4D] mb-4">20 €</div>
<p className="text-sm text-[#F7F6F4]/60 mb-8 flex-grow">Persönliche Beratung ohne Verpflichtung. Um sich kennenzulernen.</p>
<a className="block w-full text-center py-3 rounded border border-[#F7F6F4]/20 text-sm hover:border-[#F7F6F4] transition-colors" href="#">Termin buchen</a>
</div>

<div className="group border border-[#F7F6F4]/10 p-8 rounded-xl hover:bg-[#F7F6F4]/5 transition-colors duration-300 flex flex-col reveal-item" style={{transitionDelay: '100ms'}}>
<h3 className="font-serif text-xl mb-2">Cut Only</h3>
<div className="text-2xl font-medium text-[#B45F4D] mb-4"><span className="text-sm text-[#F7F6F4]/40 font-normal">ab</span> 67 €</div>
<p className="text-sm text-[#F7F6F4]/60 mb-8 flex-grow">Bis zu 1 Stunde.<br/>Kurz, mittel oder lang.<br/>Ohne Coaching-Fokus.</p>
<a className="block w-full text-center py-3 rounded border border-[#F7F6F4]/20 text-sm hover:border-[#F7F6F4] transition-colors" href="#">Termin buchen</a>
</div>

<div className="relative bg-[#F7F6F4] text-[#2A2A28] p-8 rounded-xl shadow-2xl scale-105 z-10 flex flex-col reveal-item" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 right-0 bg-[#B45F4D] text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg tracking-widest">Empfohlen</div>
<h3 className="font-serif text-2xl mb-2">Cut &amp; Coach</h3>
<div className="text-3xl font-medium text-[#B45F4D] mb-4"><span className="text-sm text-[#2A2A28]/40 font-normal">ab</span> 235 €</div>
<p className="text-sm text-[#2A2A28]/70 mb-6 flex-grow border-b border-[#2A2A28]/10 pb-6">
                        Haarschnitt + Coaching<br/>
                        Bis zu 1 Stunde<br/>
<strong>Ein Preis, unabhängig von Haarlänge oder Schnitt.</strong>
</p>
<ul className="text-sm text-[#2A2A28]/70 space-y-2 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#8E9F94]" icon="solar:check-circle-linear"></iconify-icon> Volle Präsenz</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#8E9F94]" icon="solar:check-circle-linear"></iconify-icon> Systemische Impulse</li>
</ul>
<a className="block w-full text-center py-3 rounded bg-[#2A2A28] text-white text-sm hover:bg-[#B45F4D] transition-colors shadow-lg" href="#">Termin buchen</a>
</div>

<div className="group border border-[#F7F6F4]/10 p-8 rounded-xl hover:bg-[#F7F6F4]/5 transition-colors duration-300 flex flex-col reveal-item" style={{transitionDelay: '300ms'}}>
<h3 className="font-serif text-xl mb-2">Style &amp; Coach</h3>
<div className="text-2xl font-medium text-[#B45F4D] mb-4"><span className="text-sm text-[#F7F6F4]/40 font-normal">ab</span> 299 €</div>
<p className="text-sm text-[#F7F6F4]/60 mb-8 flex-grow">
                        Color + Coaching (299€)<br/>
                        Cut, Color + Coaching (450€)<br/>
                        Bis zu 3 Stunden Deep Dive.
                    </p>
<a className="block w-full text-center py-3 rounded border border-[#F7F6F4]/20 text-sm hover:border-[#F7F6F4] transition-colors" href="#">Termin buchen</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="host">
<div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
<div className="w-full md:w-1/2 reveal-item">
<div className="relative">
<div className="absolute -top-4 -left-4 w-full h-full border border-[#8E9F94] rounded-sm"></div>
<img alt="Portrait der Inhaberin" className="relative z-10 w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full md:w-1/2 reveal-item">
<h2 className="font-serif text-3xl md:text-4xl text-[#2A2A28] mb-6 tracking-tight">Manchmal braucht es keinen neuen Lebensplan. Nur jemanden, der wirklich zuhört.</h2>
<div className="space-y-6 text-[#2A2A28]/80 leading-relaxed font-light">
<p>
                        Ich bin Friseurmeisterin und systemischer Coach. In meiner Arbeit verbinde ich Handwerk mit Haltung. Meine langjährige Erfahrung hat mir gezeigt: Die besten Gespräche entstehen, wenn man sich in guten Händen weiß.
                    </p>
<p>
                        Ich biete keine Therapie und kein Ratschlag-Feuerwerk. Ich biete Zuhören, Spiegeln und einen Raum, in dem Klarheit entstehen darf.
                    </p>
<ul className="grid grid-cols-2 gap-4 mt-8">
<li className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-[#B45F4D] text-lg" icon="solar:diploma-verified-linear"></iconify-icon> Friseurmeisterin
                        </li>
<li className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-[#B45F4D] text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Systemischer Coach
                        </li>
<li className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-[#B45F4D] text-lg" icon="solar:lock-keyhole-linear"></iconify-icon> Absolute Diskretion
                        </li>
<li className="flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-[#B45F4D] text-lg" icon="solar:heart-angle-linear"></iconify-icon> Langjährige Erfahrung
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/50">
<div className="max-w-6xl mx-auto">
<h2 className="font-serif text-3xl text-center mb-16 text-[#2A2A28]">Stimmen &amp; Erfahrungen</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#E6E1DA]/30 p-8 rounded-xl border border-[#E6E1DA] reveal-item">
<iconify-icon className="text-3xl text-[#8E9F94] mb-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-[#2A2A28]/80 italic mb-6">„Ich bin mit einer Frisur gegangen – und mit einer Entscheidung. Die Atmosphäre war unglaublich beruhigend.“</p>
<div className="text-xs font-bold tracking-widest uppercase text-[#B45F4D]">Sarah M.</div>
</div>
<div className="bg-[#E6E1DA]/30 p-8 rounded-xl border border-[#E6E1DA] reveal-item" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-3xl text-[#8E9F94] mb-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-[#2A2A28]/80 italic mb-6">„Das war mehr als ein Termin. Das war ein Wendepunkt. Endlich mal jemand, der nicht nur über das Wetter redet.“</p>
<div className="text-xs font-bold tracking-widest uppercase text-[#B45F4D]">Michael K.</div>
</div>
<div className="bg-[#E6E1DA]/30 p-8 rounded-xl border border-[#E6E1DA] reveal-item" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-3xl text-[#8E9F94] mb-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-[#2A2A28]/80 italic mb-6">„So ehrlich hat mir noch niemand zugehört. Der Haarschnitt ist perfekt, aber das Gespräch war das eigentliche Highlight.“</p>
<div className="text-xs font-bold tracking-widest uppercase text-[#B45F4D]">Julia S.</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#2A2A28] text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-[#B45F4D] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8E9F94] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto reveal-item">
<h2 className="font-serif text-4xl md:text-6xl text-[#F7F6F4] tracking-tight mb-6">Bereit, dir selbst zuzuhören?</h2>
<p className="text-lg text-[#F7F6F4]/70 mb-10 font-light">
                Wenn du nur einen Haarschnitt willst, bist du hier falsch.<br/>
                Wenn du Klarheit suchst, bist du hier richtig.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#B45F4D] text-[#F7F6F4] px-10 py-5 rounded-full text-base font-medium hover:bg-[#F7F6F4] hover:text-[#2A2A28] transition-all duration-300 shadow-xl shadow-[#B45F4D]/20">
                    Cut &amp; Coach Termin buchen
                </button>
<button className="border border-[#F7F6F4]/20 text-[#F7F6F4] px-10 py-5 rounded-full text-base font-medium hover:border-[#F7F6F4] transition-all duration-300">
                    Erst VIP-Beratung buchen
                </button>
</div>
</div>
</section>

<footer className="bg-[#2A2A28] border-t border-[#F7F6F4]/10 text-[#F7F6F4]/60 py-12 px-6 text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="font-serif text-[#F7F6F4] text-lg tracking-wide">CUT &amp; COACH</span>
<span>Musterstraße 12, 10115 Berlin</span>
</div>
<div className="flex gap-8">
<a className="hover:text-[#B45F4D] transition-colors" href="#">Impressum</a>
<a className="hover:text-[#B45F4D] transition-colors" href="#">Datenschutz</a>
<a className="hover:text-[#B45F4D] transition-colors" href="#">AGB</a>
</div>
<div className="flex flex-col items-center md:items-end gap-2">
<span>Mo - Fr: 10:00 - 19:00</span>
<a className="hover:text-[#B45F4D] transition-colors" href="mailto:kontakt@cutandcoach.de">kontakt@cutandcoach.de</a>
</div>
</div>
</footer>

    </>
  );
}
