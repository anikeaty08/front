import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
sage: {
DEFAULT: '#7D9A78',
light: '#A8C4A2',
dark: '#5C7358',
},
cream: {
DEFAULT: '#F5F1EB',
dark: '#E8E0D5',
},
terra: {
DEFAULT: '#C48B6E',
light: '#D4A88F',
},
charcoal: '#3D3D3D',
warmgray: '#6B6B6B',
softwhite: '#FAFAF8'
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Source Sans 3"', 'sans-serif'],
hand: ['"Caveat"', 'cursive'],
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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-serif font-medium text-xl tracking-tight text-charcoal">
                        Lebensbegleiter<span className="text-sage">Niederrhein</span>
</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-warmgray hover:text-sage transition-colors" href="#philosophie">Philosophie</a>
<a className="text-sm font-medium text-warmgray hover:text-sage transition-colors" href="#leistungen">Leistungen</a>
<a className="text-sm font-medium text-warmgray hover:text-sage transition-colors" href="#familie">Für Angehörige</a>
<a className="px-5 py-2.5 rounded-full bg-sage text-white text-sm font-medium hover:bg-sage-dark transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2" href="#kontakt">
<span>Kostenloses Erstgespräch</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-charcoal p-2">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0 opacity-30">

<svg className="absolute top-0 right-0 w-1/2 h-full text-cream-dark transform translate-x-1/4" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,89.9,-2.4C89.7,13.1,86.6,28.5,78.2,41.2C69.8,53.9,56.1,63.9,41.7,71.2C27.3,78.5,12.2,83.1,-1.9,86.4C-16,89.7,-30.1,91.7,-42.9,85.6C-55.7,79.5,-67.2,65.3,-75.8,49.6C-84.4,33.9,-90.1,16.7,-88.9,0.7C-87.7,-15.3,-79.6,-30.1,-69.3,-42.6C-59,-55.1,-46.5,-65.3,-33.4,-73C-20.3,-80.7,-6.6,-85.9,5.2,-94.9L17,92L0,0Z" fill="currentColor" transform="translate(100 100)"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-sage/20 text-sage-dark text-xs font-medium tracking-wide">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                        ALPEN • XANTEN • RHEINBERG
                    </div>
<h1 className="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-charcoal leading-[1.1]">
                        Wir sind mehr als <br/>
<span className="text-sage italic pr-2">Haushaltshilfe.</span>
</h1>
<p className="text-lg lg:text-xl text-warmgray leading-relaxed max-w-xl">
                        Lebensbegleiter Niederrhein erfüllt Herzenswünsche und verbindet Generationen. Wir erledigen nicht nur Aufgaben – wir begleiten Sie oder Ihre Eltern durch die eigene Geschichte.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-terra text-white text-base font-medium hover:bg-terra-light transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5" href="#kontakt">
                            Kennenlernen vereinbaren
                        </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-white border border-warmgray/20 text-charcoal text-base font-medium hover:bg-cream transition-all" href="#philosophie">
                            Unser Konzept
                        </a>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-sage/20 flex items-center justify-center text-xs text-sage-dark font-medium">JD</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-terra/20 flex items-center justify-center text-xs text-terra font-medium">MK</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-cream-dark flex items-center justify-center text-xs text-charcoal font-medium">LS</div>
</div>
<p className="text-sm text-warmgray">Vertraut von Familien am Niederrhein</p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">

<img alt="Senior lady smiling in garden" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1543335541-11a5477c7c34?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
<div className="flex items-start gap-4">
<div className="p-3 bg-cream rounded-full text-sage-dark">
<iconify-icon icon="lucide:quote" width="20"></iconify-icon>
</div>
<div>
<p className="font-hand text-xl text-charcoal mb-2">"Endlich wieder den Rhein sehen – das war mein größter Wunsch."</p>
<p className="text-xs font-medium text-warmgray uppercase tracking-widest">Maria W. (82) aus Alpen</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-cream" id="philosophie">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-charcoal mb-4">Warum wir anders sind</h2>
<p className="text-warmgray">Pflege ist wichtig, aber das Leben besteht aus mehr als Medizin und Haushalt. Wir bringen Freude zurück in den Alltag.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-sage/20 transition-all duration-300 hover:shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-sage/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 rounded-xl bg-sage/10 text-sage flex items-center justify-center mb-6">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-charcoal mb-3">Wunsch des Monats</h3>
<p className="text-warmgray text-sm leading-relaxed mb-4">
                        Einmal im Monat fragen wir: "Was wünschen Sie sich wirklich?" Ob Omas Rezept backen oder ein Besuch im alten Heimatdorf – wir machen es möglich.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-sage-dark">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
<span>Individuelle Erfüllung</span>
</li>
<li className="flex items-center gap-2 text-xs text-sage-dark">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
<span>Foto-Erinnerung für die Familie</span>
</li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-terra/20 transition-all duration-300 hover:shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-terra/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 rounded-xl bg-terra/10 text-terra flex items-center justify-center mb-6">
<iconify-icon icon="lucide:network" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-charcoal mb-3">Die Familienbrücke</h3>
<p className="text-warmgray text-sm leading-relaxed mb-4">
                        Wir sind Ihre Augen und Ohren vor Ort. Mit wöchentlichen Updates und emotionalen Einblicken halten wir Sie nah am Geschehen, auch aus der Ferne.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-terra">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
<span>Wöchentliche Foto-Updates</span>
</li>
<li className="flex items-center gap-2 text-xs text-terra">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
<span>Videocalls mit Enkeln</span>
</li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-charcoal/10 transition-all duration-300 hover:shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 rounded-xl bg-gray-100 text-charcoal flex items-center justify-center mb-6">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-charcoal mb-3">Persönlich &amp; Transparent</h3>
<p className="text-warmgray text-sm leading-relaxed mb-4">
                        Keine wechselnden Gesichter. Ihr Elternteil bekommt eine feste Bezugsperson. Dazu bieten wir minutengenaue Abrechnung und eine Zufriedenheitsgarantie.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-charcoal">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
<span>Feste Bezugsperson</span>
</li>
<li className="flex items-center gap-2 text-xs text-charcoal">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
<span>Geld-zurück-Garantie (1. Monat)</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-sage rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<iconify-icon className="absolute -top-20 -left-20 text-white" icon="lucide:flower-2" width="400"></iconify-icon>
</div>
<div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-md border border-white/10 mb-6">
                            Unser Herzstück
                        </div>
<h2 className="font-serif text-3xl lg:text-5xl font-medium text-white mb-6 leading-tight">
                            "Was wünschen Sie sich <span className="italic font-light">wirklich?</span>"
                        </h2>
<p className="text-white/90 text-lg leading-relaxed mb-8 font-light">
                            Oft sind es die kleinen Dinge, die das Leben lebenswert machen. Ein Spaziergang an der Xantener Südsee, ein Stück Kuchen im Lieblingscafé oder einfach nur das Sortieren alter Fotos. Wir nehmen uns die Zeit dafür – jeden Monat aufs Neue.
                        </p>
<a className="inline-flex items-center gap-2 bg-cream text-sage-dark px-6 py-3 rounded-xl font-medium hover:bg-white transition-colors" href="#kontakt">
<span>Wunsch erfüllen lassen</span>
<iconify-icon icon="lucide:heart" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 mt-8">
<img alt="Walking in nature" className="rounded-2xl shadow-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
<p className="font-hand text-white text-xl">"Wieder mal am Rhein sitzen."</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-terra p-4 rounded-2xl shadow-lg">
<iconify-icon className="text-white mb-2" icon="lucide:camera" width="32"></iconify-icon>
<p className="text-white/90 text-sm">Wir dokumentieren jeden Wunscherfüller-Moment für Sie.</p>
</div>
<img alt="Looking at old photos" className="rounded-2xl shadow-lg object-cover h-56 w-full" src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-softwhite" id="leistungen">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-charcoal mb-4">Praktische Hilfe mit Herz</h2>
<p className="text-warmgray">Neben den besonderen Momenten kümmern wir uns verlässlich um den Alltag. Flexibel buchbar, transparent abgerechnet.</p>
</div>
<a className="text-sage font-medium hover:text-sage-dark flex items-center gap-2 group" href="#preise">
                    Alle Leistungen ansehen
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sage/30 transition-colors">
<div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center text-sage-dark mb-6">
<iconify-icon icon="lucide:coffee" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-charcoal mb-2">Gesellschaft &amp; Aktivierung</h3>
<p className="text-sm text-warmgray">Gemeinsame Spaziergänge, Vorlesen, Spiele spielen oder einfach nur Zuhören bei einer Tasse Kaffee.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sage/30 transition-colors">
<div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center text-sage-dark mb-6">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-charcoal mb-2">Haushalt &amp; Einkäufe</h3>
<p className="text-sm text-warmgray">Unterstützung beim Einkaufen in Alpen/Xanten, leichte Hausarbeit, Kochen nach alten Rezepten.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sage/30 transition-colors">
<div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center text-sage-dark mb-6">
<iconify-icon icon="lucide:calendar-clock" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-charcoal mb-2">Terminbegleitung</h3>
<p className="text-sm text-warmgray">Sichere Begleitung zum Arzt, zur Therapie oder zum Friseur. Wir kümmern uns um den Transport.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sage/30 transition-colors">
<div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center text-sage-dark mb-6">
<iconify-icon icon="lucide:smartphone" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-charcoal mb-2">Technik-Hilfe</h3>
<p className="text-sm text-warmgray">Einrichtung von Tablets für Videocalls, Erklärung von Smartphones, damit der Draht zur Familie steht.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sage/30 transition-colors">
<div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center text-sage-dark mb-6">
<iconify-icon icon="lucide:file-heart" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-charcoal mb-2">Bürokratie-Entlastung</h3>
<p className="text-sm text-warmgray">Hilfe beim Sortieren von Post, Ausfüllen von Formularen und Organisation von Unterlagen.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-sage/30 transition-colors">
<div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center text-sage-dark mb-6">
<iconify-icon icon="lucide:dog" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-lg text-charcoal mb-2">Tierversorgung</h3>
<p className="text-sm text-warmgray">Gassi gehen mit dem Hund, Tierarztbesuche oder Futtereinkauf für das geliebte Haustier.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream-dark" id="kontakt">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
<div className="grid md:grid-cols-5">
<div className="md:col-span-3 p-10 lg:p-12">
<span className="text-terra font-medium text-sm tracking-wide uppercase mb-2 block">Kostenloses Erstgespräch</span>
<h2 className="font-serif text-3xl font-medium text-charcoal mb-6">Lernen wir uns kennen.</h2>
<p className="text-warmgray mb-8">
                            Jede Geschichte ist anders. Erzählen Sie uns von Ihrer Situation. Wir kommen gerne für ein unverbindliches Kennenlernen in Alpen und Umgebung vorbei.
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-sage-dark">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs text-warmgray">Rufen Sie uns an</p>
<p className="font-medium text-charcoal text-lg">02802 / 123 456</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-sage-dark">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs text-warmgray">Oder schreiben Sie uns</p>
<p className="font-medium text-charcoal text-lg">hallo@lebensbegleiter-niederrhein.de</p>
</div>
</div>
</div>
<button className="w-full bg-sage text-white font-medium py-3.5 rounded-xl hover:bg-sage-dark transition-all shadow-md flex justify-center items-center gap-2">
<span>Termin anfragen</span>
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
</button>
</div>
<div className="md:col-span-2 bg-sage-dark relative flex flex-col justify-between p-10">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 text-white/90">
<h3 className="font-serif text-xl mb-4">Unser Gebiet</h3>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> Alpen (46519)
                                </li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> Xanten
                                </li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> Rheinberg
                                </li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> Sonsbeck
                                </li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon> Wesel (linksrheinisch)
                                </li>
</ul>
</div>
<div className="relative z-10 mt-8 pt-8 border-t border-white/20">
<p className="font-hand text-white text-xl">"Wir freuen uns auf Sie!"</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-charcoal text-white/80 py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-white">
<iconify-icon icon="lucide:heart-handshake" width="16"></iconify-icon>
</div>
<span className="font-serif font-medium text-xl tracking-tight text-white">
                            Lebensbegleiter
                        </span>
</div>
<p className="text-sm leading-relaxed max-w-sm text-white/60">
                        Individuelle Seniorenbegleitung im Herzen des Niederrheins. Wir schaffen Brücken zwischen Generationen und erfüllen Herzenswünsche.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Rechtliches</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-sage transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-sage transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-sage transition-colors" href="#">AGB</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Kontakt</h4>
<address className="not-italic text-sm text-white/60 space-y-2">
<p>Burgstraße 12</p>
<p>46519 Alpen</p>
<p className="mt-4">Tel: 02802 / 123 456</p>
</address>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
<p>© 2024 Lebensbegleiter Niederrhein. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<span>Mit <iconify-icon className="inline text-terra" icon="lucide:heart" width="10"></iconify-icon> gemacht am Niederrhein</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
