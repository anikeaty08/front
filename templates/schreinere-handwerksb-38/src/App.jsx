import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
wood: {
50: '#fbf7f4',
100: '#f5ebe3',
200: '#ead6c6',
300: '#debda3',
400: '#cf9c77',
500: '#8B4513',
600: '#b46b3a',
700: '#95542e',
800: '#794329',
900: '#623825',
950: '#351c12',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
container: {
center: true,
padding: '1.5rem',
screens: {
sm: '640px',
md: '768px',
lg: '1024px',
xl: '1200px',
}
},
transitionDuration: {
'2000': '2000ms',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="container mx-auto flex items-center justify-between h-20">
<a className="flex items-center gap-2 group" href="#">
<svg aria-hidden="true" data-icon="lucide:hammer" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
<div className="flex flex-col">
<span className="font-serif font-semibold text-lg tracking-tight text-stone-900 leading-none">Thomas Demming</span>
<span className="text-xs text-stone-500 tracking-wider uppercase mt-0.5">Schreinerei &amp; Design</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-wood-500 transition-colors" href="#leistungen">Leistungen</a>
<a className="text-sm font-medium text-stone-600 hover:text-wood-500 transition-colors" href="#vorteile">Vorteile</a>
<a className="text-sm font-medium text-stone-600 hover:text-wood-500 transition-colors" href="#galerie">Galerie</a>
<a className="text-sm font-medium text-stone-600 hover:text-wood-500 transition-colors" href="#bewertungen">Kundenstimmen</a>
</nav>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all bg-wood-500 border border-transparent rounded hover:bg-wood-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wood-500 shadow-sm" href="#kontakt">
                    Kontakt aufnehmen
                </a>
</div>
<button className="md:hidden text-stone-800 focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="hidden md:hidden bg-white border-t border-stone-100 absolute w-full left-0 top-20 shadow-lg" id="mobile-menu">
<div className="container flex flex-col gap-4 py-6">
<a className="text-base font-medium text-stone-600 hover:text-wood-500" href="#leistungen">Leistungen</a>
<a className="text-base font-medium text-stone-600 hover:text-wood-500" href="#vorteile">Vorteile</a>
<a className="text-base font-medium text-stone-600 hover:text-wood-500" href="#galerie">Galerie</a>
<a className="text-base font-medium text-wood-500" href="#kontakt">Beratung anfragen</a>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Moderne Holzküche Interieur" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
</div>
<div className="container relative z-10 pt-20 text-center reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
<span className="w-1.5 h-1.5 rounded-full bg-wood-400"></span>
<span className="text-xs font-medium text-white uppercase tracking-wider">Meisterbetrieb seit 20 Jahren</span>
</div>
<h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
                Willkommen in der Schreiner-Welt <br className="hidden md:block"/> von <span className="italic text-wood-300">Thomas Demming</span>
</h1>
<p className="text-lg md:text-xl text-stone-200 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Maßgeschneiderte Wohn-Träume aus Holz, Glas und Edelstahl – meisterlich umgesetzt für Ihr Zuhause.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all bg-wood-500 rounded hover:bg-wood-600 shadow-lg hover:shadow-wood-500/25" href="#kontakt">
                    Kostenlose Beratung anfragen
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all bg-white/10 backdrop-blur-sm border border-white/20 rounded hover:bg-white/20" href="#galerie">
                    Referenzen ansehen
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</section>

<section className="py-24 bg-white" id="leistungen">
<div className="container">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4 tracking-tight">Unsere Leistungen</h2>
<div className="w-12 h-1 bg-wood-500 mx-auto mb-6 rounded-full"></div>
<p className="text-lg text-stone-600">Von der detaillierten Planung bis zur perfekten Montage – alles aus einer Hand.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:chef-hat" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Einbauküchen</h3>
<p className="text-stone-600 leading-relaxed text-sm">Individuelle Küchenplanung, die Funktionalität und Design perfekt vereint.</p>
</div>

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:layout-template" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Innenausbau</h3>
<p className="text-stone-600 leading-relaxed text-sm">Kompletter Ausbau von Wohnräumen, Wandverkleidungen und Raumteilern.</p>
</div>

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-300">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:armchair" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Möbel auf Maß</h3>
<p className="text-stone-600 leading-relaxed text-sm">Einbauschränke, Regale und Unikate, exakt nach Ihren Wünschen gefertigt.</p>
</div>

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:panel-top" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></g></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Verglasung</h3>
<p className="text-stone-600 leading-relaxed text-sm">Moderne Glaslösungen, Spiegel und Ganzglasanlagen für helle Räume.</p>
</div>

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:door-open" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Fenster &amp; Türen</h3>
<p className="text-stone-600 leading-relaxed text-sm">Hochwertige Bauelemente für optimale Wärmedämmung und Ästhetik.</p>
</div>

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-300">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:feather" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8L2 22m15.5-7H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Intarsien</h3>
<p className="text-stone-600 leading-relaxed text-sm">Kunstvolle Einlegearbeiten und Restaurierung historischer Oberflächen.</p>
</div>

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:wrench" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Reparaturen</h3>
<p className="text-stone-600 leading-relaxed text-sm">Fachgerechte Instandsetzung von Möbeln, Fenstern und Holzelementen.</p>
</div>

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:hammer" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Trockenbau</h3>
<p className="text-stone-600 leading-relaxed text-sm">Flexible Raumgestaltung durch professionelle Leichtbauwände und Decken.</p>
</div>

<div className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-wood-200 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-300 hover:-translate-y-1 reveal delay-300">
<div className="w-12 h-12 rounded-lg bg-wood-100 text-wood-600 flex items-center justify-center mb-6 group-hover:bg-wood-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">Sicherheitstechnik</h3>
<p className="text-stone-600 leading-relaxed text-sm">Nachrüstung von Einbruchschutz an Fenstern und Türen für Ihre Sicherheit.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-y border-stone-200" id="vorteile">
<div className="container">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-wood-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Warum Thomas Demming?</span>
<h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-6 tracking-tight leading-snug">
                        Meisterliche Qualität trifft auf persönlichen Service
                    </h2>
<p className="text-lg text-stone-600 mb-8">
                        Wir verstehen Holz nicht nur als Werkstoff, sondern als Leidenschaft. Jedes Projekt wird mit der Sorgfalt umgesetzt, als wäre es für unser eigenes Zuhause.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-wood-500">
<svg aria-hidden="true" data-icon="lucide:award" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-1">Meisterliche Handwerkskunst</h4>
<p className="text-sm text-stone-600">Jahrelange Erfahrung und höchste Standards.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-wood-500">
<svg aria-hidden="true" data-icon="lucide:maximize-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-1">100% Maßarbeit</h4>
<p className="text-sm text-stone-600">Unikate, exakt nach Ihren Wünschen gefertigt.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-wood-500">
<svg aria-hidden="true" data-icon="lucide:calendar-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18M9 16l2 2l4-4"></path></g></svg>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-1">Termingerechte Umsetzung</h4>
<p className="text-sm text-stone-600">Verlässlichkeit ist unser Versprechen.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-wood-500">
<svg aria-hidden="true" data-icon="lucide:user-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-1">Persönliche Beratung</h4>
<p className="text-sm text-stone-600">Direkter Draht zum Meister, von Anfang an.</p>
</div>
</div>
</div>
</div>
<div className="relative reveal delay-200">
<div className="grid grid-cols-2 gap-4">
<img alt="Detailaufnahme Holzbearbeitung" className="rounded-lg shadow-lg w-full h-64 object-cover translate-y-8" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<img alt="Moderner Schrank Holz" className="rounded-lg shadow-lg w-full h-64 object-cover" src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-wood-200/50 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="galerie">
<div className="container">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div className="max-w-xl">
<h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 mb-4 tracking-tight">Lassen Sie sich inspirieren</h2>
<p className="text-stone-600">Einblicke in unsere meisterlichen Arbeiten – von der modernen Küche bis zum klassischen Wohnzimmerschrank.</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 text-sm font-medium text-white bg-wood-500 rounded cursor-default">Alle</span>
<span className="px-4 py-2 text-sm font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded cursor-default transition-colors">Küchen</span>
<span className="px-4 py-2 text-sm font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded cursor-default transition-colors">Möbel</span>
<span className="px-4 py-2 text-sm font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 rounded cursor-default transition-colors">Objekte</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
<div className="lg:col-span-2 group relative overflow-hidden rounded-lg cursor-pointer reveal delay-100">
<img alt="Hochwertige Küche" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-medium font-serif">Moderne Landhausküche</h4>
<p className="text-sm opacity-90 mt-1">Eiche massiv, geölt</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg cursor-pointer reveal delay-200">
<img alt="Schlafzimmerschrank" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-serif text-xl font-medium">Einbauschrank</h4>
<p className="text-sm opacity-90 mt-1">Weißlack matt, grifflos</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg cursor-pointer reveal delay-100">
<img alt="Wohnzimmerregal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-serif text-xl font-medium">Bibliotheks-Wand</h4>
<p className="text-sm opacity-90 mt-1">Nussbaum Furnier</p>
</div>
</div>
</div>
<div className="lg:col-span-2 group relative overflow-hidden rounded-lg cursor-pointer reveal delay-200">
<img alt="Esszimmertisch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-serif text-xl font-medium">Esstisch Unikat</h4>
<p className="text-sm opacity-90 mt-1">Wildholzkante mit Stahlgestell</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-50" id="bewertungen">
<div className="container">
<h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-stone-900 mb-16 tracking-tight reveal">Das sagen unsere Kunden</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="reveal delay-100 bg-white border-stone-100 border rounded-xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="flex text-yellow-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="" data-icon="lucide:star" data-icon-replaced="true" data-icon-set="lucide" data-lucide="star" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(234, 179, 8)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="italic text-stone-600 mb-6">"Herr Demming hat unsere Traumküche perfekt umgesetzt. Die Beratung war exzellent und die Qualität der Arbeit ist herausragend. Wir sind absolut begeistert!"</p>
<div>
<p className="font-semibold text-stone-900">Familie Müller</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Projekt: Einbauküche</p>
</div>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative reveal delay-200">
<div className="flex text-yellow-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 mb-6 italic">"Vom ersten Gespräch bis zur Montage – alles lief reibungslos und absolut professionell. Die maßgefertigten Schränke passen perfekt."</p>
<div className="">
<p className="font-semibold text-stone-900">Michael S.</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Projekt: Schlafzimmer</p>
</div>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative reveal delay-300">
<div className="flex text-yellow-500 mb-4">
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 mb-6 italic">"Endlich eine Lösung für unsere schwierige Dachschräge! Die Sonderanfertigung ist nicht nur funktional, sondern ein echter Hingucker."</p>
<div>
<p className="font-semibold text-stone-900">Andrea K.</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Projekt: Sonderanfertigung</p>
</div>
</div>
</div>
</div>
</section>

<section className="reveal bg-white bg-[url(https://images.unsplash.com/photo-1463995439889-6cc080aaf7dd?w=3840&amp;q=80)] bg-cover bg-center pt-24 pb-24" id="kontakt">
<div className="container">
<div className="relative rounded-2xl overflow-hidden shadow-2xl isolate">

<img alt="Werkstatt Hintergrund" className="absolute inset-0 -z-20 h-full w-full object-cover" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 -z-10 bg-stone-900/80"></div>
<div className="flex flex-col lg:flex-row gap-12 lg:p-20 pt-10 pr-10 pb-10 pl-10 gap-x-12 gap-y-12 items-center justify-between">
<div className="max-w-2xl relative z-10 text-white">
<h2 className="md:text-5xl text-3xl font-bold tracking-tight font-serif mb-6">Bereit für Ihr maßgeschneidertes Projekt?
    </h2>
<p className="text-stone-200 text-lg mb-8 leading-relaxed">Vereinbaren Sie jetzt ein kostenloses Beratungsgespräch. Wir
      nehmen uns Zeit für Ihre Wünsche und planen gemeinsam Ihre Wohn-Träume.</p>
<ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-stone-200 mb-8">
<li className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg> Kostenlose Erstberatung
      </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11l3 3L22 4"></path>
</g>
</svg> Unverbindliches Angebot
      </li>
</ul>
</div>
<div className="flex flex-col gap-4 w-full lg:w-auto relative z-10">
<button className="inline-flex transition-all hover:bg-wood-600 shadow-wood-900/20 hover:-translate-y-1 text-base font-semibold text-white border-transparent border rounded pt-4 pr-8 pb-4 pl-8 shadow-xl items-center justify-center">
                            Jetzt kostenlos beraten lassen
                        </button>
<div className="text-center text-stone-300 text-sm mt-2">
      oder anrufen: <a className="text-white hover:underline font-medium font-mono" href="tel:0123456789">0123 456 789</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
<div className="container">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<a className="flex items-center gap-2 mb-6" href="#">
<svg aria-hidden="true" data-icon="lucide:hammer" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
<span className="font-serif font-semibold text-lg text-stone-200">Thomas Demming</span>
</a>
<p className="text-sm leading-relaxed mb-6">
                        Ihr Partner für hochwertige Holzarbeiten. Qualität, die man sieht und fühlt.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-wood-500 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-stone-400 hover:text-wood-500 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
<div>
<h4 className="text-stone-200 font-semibold mb-6">Unternehmen</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-wood-500 transition-colors" href="#leistungen">Leistungen</a></li>
<li><a className="hover:text-wood-500 transition-colors" href="#vorteile">Über Uns</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-200 font-semibold mb-6">Rechtliches</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-wood-500 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-wood-500 transition-colors" href="#">Datenschutz</a></li>
</ul>
</div>
<div className="">
<h4 className="text-stone-200 font-semibold mb-6">Kontakt</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg aria-hidden="true" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="">Musterstraße 1212345 Musterstadt, Deutschland</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="hover:text-wood-500" href="tel:0123456789">0123 456 789</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-800 text-center text-xs">
<p>© 2023 Schreinerei Thomas Demming. Alle Rechte vorbehalten.</p>
</div>
</div>
</footer>



    </>
  );
}
