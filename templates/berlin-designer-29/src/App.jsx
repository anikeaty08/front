import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-sm font-medium tracking-tight uppercase flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">J</div>
                Jonas Bergmann
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#about">Über mich</a>
<a className="hover:text-white transition-colors duration-200" href="#work">Arbeiten</a>
<a className="hover:text-white transition-colors duration-200" href="#services">Leistungen</a>
<a className="hover:text-white transition-colors duration-200" href="#contact">Kontakt</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Projekt starten
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Verfügbar für neue Projekte in Berlin &amp; Remote
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                Design, das <br className="hidden md:block"/>
<span className="text-neutral-500">kommuniziert.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10 md:mb-12 font-light">
                Ich bin Jonas, ein multidisziplinärer Web- und Grafikdesigner aus Berlin. Ich helfe Marken dabei, durch klares Design und durchdachte digitale Erlebnisse ihre Stimme zu finden.
            </p>
<div className="flex flex-col md:flex-row items-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#work">
                    Portfolio ansehen
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#contact">
                    Kontakt aufnehmen
                </a>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-neutral-900/20">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold tracking-tight">KREUZBERG<span className="font-light">STUDIOS</span></span>
<span className="text-lg font-semibold tracking-tight">MITTE<span className="font-light">TECH</span></span>
<span className="text-lg font-semibold tracking-tight">SPREE<span className="font-light">VERLAG</span></span>
<span className="text-lg font-semibold tracking-tight">BAU<span className="font-light">HAUS24</span></span>
<span className="text-lg font-semibold tracking-tight">NEUKÖLLN<span className="font-light">ART</span></span>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Meine Leistungen</h2>
<p className="text-neutral-400 max-w-md font-light">Ein ganzheitlicher Ansatz von der ersten Skizze bis zum fertigen Produkt.</p>
</div>
<a className="text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#contact">Alle Services anfragen</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Webdesign &amp; UI</h3>
<p className="text-sm leading-relaxed text-neutral-400 font-light">
                        Moderne, responsive Webseiten, die nicht nur gut aussehen, sondern auch funktionieren. Fokus auf Usability und Typografie.
                    </p>
<ul className="mt-6 space-y-2">
<li className="text-xs text-neutral-500 flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full"></div>Framer &amp; Webflow</li>
<li className="text-xs text-neutral-500 flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full"></div>Landing Pages</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:printer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Print &amp; Editorial</h3>
<p className="text-sm leading-relaxed text-neutral-400 font-light">
                        Haptische Erlebnisse durch Flyer, Poster und Broschüren. Hochwertiges Layout für Events, Kunst und Kommerz.
                    </p>
<ul className="mt-6 space-y-2">
<li className="text-xs text-neutral-500 flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full"></div>Poster Design</li>
<li className="text-xs text-neutral-500 flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full"></div>Editorial Layout</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Branding</h3>
<p className="text-sm leading-relaxed text-neutral-400 font-light">
                        Entwicklung visueller Identitäten, die im Gedächtnis bleiben. Logo-Entwicklung, Farbsysteme und Typography.
                    </p>
<ul className="mt-6 space-y-2">
<li className="text-xs text-neutral-500 flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full"></div>Logo Design</li>
<li className="text-xs text-neutral-500 flex items-center gap-2"><div className="w-1 h-1 bg-neutral-500 rounded-full"></div>Brand Guidelines</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/30 border-y border-white/5" id="work">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-16">Ausgewählte Arbeiten</h2>
<div className="space-y-24">

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-800 border border-white/5">
<img alt="Project 1" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-white border border-white/20 px-3 py-1 rounded-full">Webdesign</span>
<span className="text-xs text-neutral-500">2023</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight group-hover:text-neutral-300 transition-colors">Architekturbüro Müller</h3>
<p className="text-neutral-400 font-light mb-8 leading-relaxed">
                            Ein minimalistischer Webauftritt für ein renommiertes Berliner Architekturbüro. Der Fokus lag auf großflächigen Bildern und einer zurückhaltenden Typografie, um die Bauwerke wirken zu lassen.
                        </p>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors border-b border-transparent hover:border-white pb-0.5" href="#">
                            Case Study ansehen
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
<div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-800 border border-white/5 md:order-2">
<img alt="Project 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="md:order-1">
<div className="flex items-center gap-4 mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-white border border-white/20 px-3 py-1 rounded-full">Print &amp; Poster</span>
<span className="text-xs text-neutral-500">2023</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight group-hover:text-neutral-300 transition-colors">Techno Culture Festival</h3>
<p className="text-neutral-400 font-light mb-8 leading-relaxed">
                            Visuelle Identität und Plakatserie für ein elektronisches Musikfestival in Friedrichshain. Experimentelle Typografie kombiniert mit abstrakten Formen reflektiert den dynamischen Charakter der Musik.
                        </p>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors border-b border-transparent hover:border-white pb-0.5" href="#">
                            Case Study ansehen
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-800 border border-white/5">
<img alt="Project 3" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-white border border-white/20 px-3 py-1 rounded-full">Branding</span>
<span className="text-xs text-neutral-500">2022</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight group-hover:text-neutral-300 transition-colors">Kaffeehaus Mitte</h3>
<p className="text-neutral-400 font-light mb-8 leading-relaxed">
                            Rebranding für ein lokales Spezialitäten-Café. Entwicklung eines neuen Logos, Farbkonzepts und Packaging-Designs, das Tradition und Moderne verbindet.
                        </p>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors border-b border-transparent hover:border-white pb-0.5" href="#">
                            Case Study ansehen
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="about">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-white text-4xl mb-6" icon="solar:user-circle-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8">Über mich</h2>
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-12">
                Ich lebe und arbeite in Berlin. Mit über 5 Jahren Erfahrung in der Kreativbranche verbinde ich technisches Verständnis mit ästhetischem Anspruch. Mein Ziel ist es, Komplexität zu reduzieren und Design zu schaffen, das sich selbstverständlich anfühlt. Ob digitale Produkte oder gedrucktes Papier – die Liebe zum Detail steht immer im Mittelpunkt.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div>
<div className="text-3xl font-medium text-white mb-1">5+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Jahre Erfahrung</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">40+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Projekte</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Leidenschaft</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">Bln</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Basis</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Lassen Sie uns sprechen</h2>
<p className="text-neutral-400 font-light">Haben Sie ein Projekt im Kopf? Füllen Sie das Formular aus oder schreiben Sie mir direkt an <a className="text-white underline decoration-neutral-700 underline-offset-4 hover:decoration-white transition-all" href="mailto:hallo@jonas-design.de">hallo@jonas-design.de</a></p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wider" htmlFor="name">Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder:text-neutral-700" id="name" placeholder="Max Mustermann" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder:text-neutral-700" id="email" placeholder="hallo@beispiel.de" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Interesse an</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-neutral-600">Webdesign</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-neutral-600">Branding</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-neutral-600">Print</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-block px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:border-neutral-600">Anderes</span>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-medium uppercase tracking-wider" htmlFor="message">Nachricht</label>
<textarea className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder:text-neutral-700" id="message" placeholder="Erzählen Sie mir von Ihrem Projekt..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded-md text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group" type="submit">
<span>Nachricht senden</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-neutral-500 text-xs">
                © 2023 Jonas Bergmann. Berlin. Alle Rechte vorbehalten.
            </div>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>

</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
</div>
</div>
</footer>

    </>
  );
}
