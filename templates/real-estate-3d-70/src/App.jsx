import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f2023',
950: '#09090b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-xl border-black/5 bg-gray-50/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr flex items-center justify-center border group-hover:border-white/20 transition-colors from-gray-200 to-gray-300 border-black/10">
<span className="font-medium text-xs tracking-tighter text-black">V</span>
</div>
<span className="font-medium tracking-tight text-sm text-black">VOTH <span className="text-gray-500 font-normal">3D-TOUREN</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors hover:text-black" href="#services">Leistungen</a>
<a className="transition-colors hover:text-black" href="#features">Vorteile</a>
<a className="transition-colors hover:text-black" href="#portfolio">Portfolio</a>
<a className="transition-colors hover:text-black" href="#about">Über uns</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex h-9 items-center justify-center px-4 rounded-full text-xs font-medium transition-all bg-black text-gray-50 hover:bg-gray-800" href="#contact">
                    Kontakt
                </a>
<button className="md:hidden text-black">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex text-xs font-medium border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center text-gray-700 bg-black/5 border-black/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-600"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Verfügbar in Düren &amp; NRW
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-black">
                Immobilien erleben.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b to-gray-500 from-gray-800">Bevor man ankommt.</span>
</h1>
<p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-gray-600">
                Hochwertige Immobilienfotografie, 3D-Rundgänge und Drohnenaufnahmen für Makler und Eigentümer. Setzen Sie Ihr Objekt in Düren perfekt in Szene.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-11 px-8 rounded-full text-sm font-medium transition-all flex items-center gap-2 bg-black text-gray-50 hover:bg-gray-800" href="#contact">
                    Angebot anfragen
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="h-11 px-8 rounded-full border text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm border-black/10 bg-gray-100/50 text-black hover:bg-gray-200" href="#portfolio">
                    Portfolio ansehen
                </a>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-20">
<div className="relative rounded-2xl border p-2 backdrop-blur-sm shadow-2xl shadow-blue-500/10 border-black/10 bg-gray-100/50">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent z-10 rounded-xl pointer-events-none to-gray-50/80"></div>
<img alt="Modern Interior" className="md:h-[600px] opacity-90 w-full h-[400px] object-cover rounded-xl translate-y-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c442149d-b4d9-48f3-be28-6d3addbc7047_1600w.webp" style={{maskImage: 'linear-gradient(270deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(270deg, transparent, black 0%, black 100%, transparent)'}}/>
<div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
<div className="backdrop-blur-md border p-4 rounded-xl bg-white/50 border-black/10">
<div className="flex items-center gap-3">
<iconify-icon className="text-black" icon="lucide:box" width="20"></iconify-icon>
<div className="">
<p className="text-xs font-medium text-black">3D Scan Technology</p>
<p className="text-[10px] text-gray-600">Matterport Compatible</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t relative border-black/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-black">Unsere Expertise</h2>
<p className="max-w-md text-sm leading-relaxed text-gray-600">
                        Wir kombinieren modernste Technik mit ästhetischem Anspruch, um Verkaufszeiten zu verkürzen und Exposés aufzuwerten.
                    </p>
</div>
<a className="text-sm transition-colors flex items-center gap-1 text-black hover:text-gray-700" href="#">
                    Alle Leistungen <iconify-icon icon="lucide:arrow-up-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border transition-all bg-gray-100/30 border-black/5 hover:border-black/10 hover:bg-gray-100/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border bg-gray-200/50 text-black border-black/5">
<iconify-icon icon="lucide:view" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-black">3D-Rundgänge</h3>
<p className="text-sm leading-relaxed mb-6 text-gray-600">
                        Interaktive Besichtigungen für Interessenten. Sparen Sie Zeit durch digitale Vorab-Besichtigungen mit Matterport-Technologie.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-blue-600" icon="lucide:check" width="12"></iconify-icon> Virtuelles Puppenhaus
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-blue-600" icon="lucide:check" width="12"></iconify-icon> Maßhaltige Grundrisse
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border transition-all bg-gray-100/30 border-black/5 hover:border-black/10 hover:bg-gray-100/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border bg-gray-200/50 text-black border-black/5">
<iconify-icon icon="lucide:camera" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-black">HDR Fotografie</h3>
<p className="text-sm leading-relaxed mb-6 text-gray-600">
                        Kristallklare Weitwinkelaufnahmen mit perfekter Belichtung. Wir fangen die Atmosphäre und das Licht jedes Raumes ein.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-blue-600" icon="lucide:check" width="12"></iconify-icon> Blue-Sky Garantie
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-blue-600" icon="lucide:check" width="12"></iconify-icon> High-End Retusche
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border transition-all bg-gray-100/30 border-black/5 hover:border-black/10 hover:bg-gray-100/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border bg-gray-200/50 text-black border-black/5">
<iconify-icon icon="lucide:plane" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-black">Drohnenaufnahmen</h3>
<p className="text-sm leading-relaxed mb-6 text-gray-600">
                        Luftbilder zeigen die Lage und das Grundstück in seiner ganzen Pracht. Perfekt für Exposés von freistehenden Objekten.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-blue-600" icon="lucide:check" width="12"></iconify-icon> 4K Video &amp; Foto
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-blue-600" icon="lucide:check" width="12"></iconify-icon> Lagevisualisierung
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t relative overflow-hidden border-black/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-black">Warum VOTH?</h2>
<p className="max-w-md text-sm leading-relaxed text-gray-600">
                        Wir liefern nicht nur Bilder, sondern Verkaufswerkzeuge. Optimiert für Portale wie ImmoScout24 und Ihre eigene Website.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">

<div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br p-8 flex flex-col justify-between group transition-all from-zinc-100/40 to-zinc-100/10 border-black/10 hover:border-black/20">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border bg-zinc-200/50 text-black border-black/5">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black">24h Lieferung</h3>
</div>
<p className="text-sm leading-relaxed text-gray-600">
                        Ihre Daten stehen Ihnen am nächsten Werktag vollständig bearbeitet zum Download bereit.
                    </p>
</div>

<div className="md:col-span-2 relative overflow-hidden rounded-2xl border flex group transition-all bg-zinc-100/20 border-black/10 hover:border-black/20">
<div className="absolute inset-0 bg-gradient-to-r to-transparent z-10 from-zinc-100 via-zinc-100/80"></div>
<img alt="Camera Tech" className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="relative z-20 p-8 flex flex-col justify-center h-full max-w-md">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 rounded text-[10px] font-medium border bg-blue-500/10 border-blue-500/20 text-blue-600">HIGH-END</span>
</div>
<h3 className="text-2xl font-medium mb-2 text-black">Technologie-Vorsprung</h3>
<p className="text-sm leading-relaxed text-gray-600">
                            Wir nutzen modernste Matterport-Scanner und Vollformat-Kameras. Das Ergebnis sind gestochen scharfe Bilder und fehlerfreie 3D-Modelle, die beeindrucken.
                        </p>
</div>
</div>

<div className="md:col-span-2 relative overflow-hidden rounded-2xl border flex flex-row-reverse group transition-all bg-zinc-100/20 border-black/10 hover:border-black/20">
<div className="absolute inset-0 bg-gradient-to-l to-transparent z-10 from-zinc-100 via-zinc-100/80"></div>
<img alt="Interior Quality" className="absolute left-0 top-0 h-full w-2/3 object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 p-8 flex flex-col justify-center h-full max-w-md text-right items-end ml-auto">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 rounded text-[10px] font-medium border bg-purple-500/10 border-purple-500/20 text-purple-600">HDR &amp; 4K</span>
</div>
<h3 className="text-2xl font-medium mb-2 text-black">Perfektion im Detail</h3>
<p className="text-sm leading-relaxed text-gray-600">
                           Dank HDR-Belichtungsreihen garantieren wir helle Räume und klare Fensterblicke ("Blue Sky"), selbst bei schwierigen Lichtverhältnissen.
                       </p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border bg-gradient-to-bl p-8 flex flex-col justify-between group transition-all from-zinc-100/40 to-zinc-100/10 border-black/10 hover:border-black/20">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
<div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 border bg-zinc-200/50 text-black border-black/5">
<iconify-icon icon="lucide:share-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black">Multi-Plattform</h3>
</div>
<p className="text-sm leading-relaxed text-gray-600">
                    Unsere Daten sind optimiert für ImmoScout24, Immowelt und Ihre Social Media Kanäle.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-12 text-black">Ausgewählte Projekte</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative aspect-[4/3] overflow-hidden rounded-xl border cursor-pointer border-black/10">
<img alt="Villa Düren" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity from-white/80"></div>
<div className="absolute bottom-6 left-6">
<p className="font-medium text-sm text-black">Stadtvilla Gürzenich</p>
<p className="text-xs mt-1 text-gray-600">3D Tour &amp; Foto</p>
</div>
<div className="absolute top-4 right-4 backdrop-blur border rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 bg-white/50 border-black/10">
<iconify-icon className="text-black" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-xl border cursor-pointer border-black/10">
<img alt="Penthouse" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity from-white/80"></div>
<div className="absolute bottom-6 left-6">
<p className="font-medium text-sm text-black">Penthouse Markt</p>
<p className="text-xs mt-1 text-gray-600">Interieur Fotografie</p>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-xl border cursor-pointer border-black/10">
<img alt="Modern Home" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity from-white/80"></div>
<div className="absolute bottom-6 left-6">
<p className="font-medium text-sm text-black">Neubau Birkesdorf</p>
<p className="text-xs mt-1 text-gray-600">Drohne &amp; Video</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 bg-gray-100/20" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-20 h-20 mx-auto rounded-full border flex items-center justify-center mb-8 overflow-hidden bg-gray-200 border-black/10">
<iconify-icon className="text-gray-500" icon="lucide:user" width="32"></iconify-icon>

</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 text-black">Alexander Voth</h2>
<p className="text-sm md:text-base leading-relaxed mb-8 text-gray-600">
                Als spezialisierter Immobilienfotograf in Düren unterstütze ich Makler, Architekten und private Eigentümer dabei, den wahren Wert ihrer Objekte sichtbar zu machen. Mit modernster Technik und einem geschulten Auge für Architektur und Design.
            </p>
<div className="flex items-center justify-center gap-8 border-t pt-8 border-black/5">
<div>
<p className="text-2xl font-medium tracking-tight text-black">100+</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Projekte</p>
</div>
<div>
<p className="text-2xl font-medium tracking-tight text-black">4K</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Qualität</p>
</div>
<div>
<p className="text-2xl font-medium tracking-tight text-black">24h</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Lieferung</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t relative overflow-hidden border-black/5" id="contact">

<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-black">Kontakt aufnehmen</h2>
<p className="text-sm text-gray-600">Lassen Sie uns über Ihr Projekt sprechen. Antwort innerhalb von 24h.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-gray-500 font-medium ml-1">Vorname</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all bg-gray-100/50 border-black/10 text-black" placeholder="Max" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 font-medium ml-1">Nachname</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all bg-gray-100/50 border-black/10 text-black" placeholder="Mustermann" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 font-medium ml-1">Email Adresse</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all bg-gray-100/50 border-black/10 text-black" placeholder="max@beispiel.de" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 font-medium ml-1">Interesse an</label>
<select className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all appearance-none cursor-pointer bg-gray-100/50 border-black/10 text-black">
<option>Komplettpaket</option>
<option>3D-Rundgang</option>
<option>Immobilienfotos</option>
<option>Drohnenaufnahme</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs text-gray-500 font-medium ml-1">Nachricht</label>
<textarea className="w-full border rounded-lg px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all bg-gray-100/50 border-black/10 text-black" placeholder="Erzählen Sie mir von Ihrem Objekt..." rows="4"></textarea>
</div>
<button className="w-full font-medium h-12 rounded-lg text-sm mt-4 transition-colors flex items-center justify-center gap-2 bg-black text-gray-50 hover:bg-gray-800" type="button">
                    Nachricht senden
                    <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</form>
<div className="mt-12 flex items-center justify-center gap-6 text-gray-500">
<a className="transition-colors hover:text-black" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="transition-colors hover:text-black" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="transition-colors hover:text-black" href="#">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-12 border-t border-black/5 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 opacity-50">
<div className="w-6 h-6 rounded flex items-center justify-center border bg-gray-200 border-black/10">
<span className="font-medium text-[10px] tracking-tighter text-black">V</span>
</div>
<span className="text-xs text-gray-600">© 2024 VOTH 3D-TOUREN</span>
</div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="transition-colors hover:text-gray-700" href="#">Impressum</a>
<a className="transition-colors hover:text-gray-700" href="#">Datenschutz</a>
<a className="transition-colors hover:text-gray-700" href="#">AGB</a>
</div>
</div>
</footer>

    </>
  );
}
