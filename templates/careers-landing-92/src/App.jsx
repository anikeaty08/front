import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: '#192745',
orange: {
light: '#F08017',
dark: '#AA3117',
},
charcoal: '#1e293b'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-sm');
                header.classList.replace('bg-white/80', 'bg-white');
            } else {
                header.classList.remove('shadow-sm');
                header.classList.replace('bg-white', 'bg-white/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-heading font-semibold text-navy text-lg tracking-widest uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-orange-light text-2xl" icon="solar:waterdrops-linear"></iconify-icon>
                MEES VAN DEN BRINK
            </a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-navy hover:text-orange-light transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-navy hover:text-orange-light transition-colors" href="#over-ons">Over ons</a>
<a className="text-sm font-medium text-navy hover:text-orange-light transition-colors" href="#afdelingen">Afdelingen</a>
<a className="text-sm font-medium text-navy hover:text-orange-light transition-colors" href="#verhalen">Verhalen</a>
<a className="text-sm font-medium text-navy hover:text-orange-light transition-colors" href="#vacatures">Vacatures</a>
<a className="text-sm font-medium text-navy hover:text-orange-light transition-colors" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-brand rounded-md hover:shadow-lg hover:shadow-orange-light/20 hover:-translate-y-0.5 transition-all duration-300" href="#vacatures">
                Bekijk Vacatures
            </a>
<button className="lg:hidden text-navy text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-[95vh] flex items-center justify-start pt-20">
<div className="absolute inset-0 z-0">
<img alt="Industrial Team" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy/85 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>

<div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-light/20 blur-[120px] rounded-full pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full animate-fade-in">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-light/10 border border-orange-light/20 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-light animate-pulse"></span>
<span className="text-xs font-medium text-orange-light tracking-wide uppercase">Mees van den Brink team</span>
</div>
<h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-4">
                    Word deel van ons <br/>groeiende team
                </h1>
<div className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient tracking-tight mb-6 uppercase">
                    DE VERBINDENDE FACTOR
                </div>
<p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light">
                    ...dat ben jij! Sluit je aan bij de Mees familie en bouw mee aan hoogwaardige, veilige verbindingen in de industrie.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-gradient-brand rounded-md hover:shadow-lg hover:shadow-orange-light/30 hover:-translate-y-0.5 transition-all duration-300" href="#vacatures">
                        Bekijk Vacatures
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-white/20 rounded-md hover:bg-white/5 transition-all duration-300" href="#over-ons">
                        Meer over ons
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="over-ons">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-gray-50 border border-gray-100 rounded-xl p-10 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon className="text-9xl text-navy" icon="solar:target-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-6">
<iconify-icon className="text-white text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h2 className="font-heading text-2xl font-semibold text-navy tracking-tight mb-4">Missie</h2>
<p className="text-gray-600 leading-relaxed text-sm">
                            Mees van den Brink levert slangen, koppelingen en slangassemblages die betrouwbaar presteren in veeleisende omgevingen. Met 24/7 bereikbaarheid, diepgaande productkennis en slimme digitale ondersteuning helpen we klanten in elke sector, waar stilstand geen optie is.
                        </p>
</div>
</div>

<div className="bg-white border border-gray-100 shadow-sm rounded-xl p-10 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-brand"></div>
<div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon className="text-9xl text-orange-light" icon="solar:eye-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-orange-light/10 text-orange-light flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:eye-linear"></iconify-icon>
</div>
<h2 className="font-heading text-2xl font-semibold text-navy tracking-tight mb-4">Visie</h2>
<p className="text-gray-600 leading-relaxed text-sm">
                            Wij willen op een duurzame manier blijven groeien en de meest betrouwbare slangen- en koppelingenpartner van Europa zijn. Een partner die niet alleen levert, maar vroeg aanhaakt bij ontwerp, onderhoud en vervanging. Met langlopende samenwerkingen, duidelijke afspraken en gekoppelde digitale systemen zorgen we voor continuïteit en veiligheid.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f8fafc]">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="font-heading text-sm font-medium text-orange-dark uppercase tracking-widest mb-3">Onze Basis</h2>
<h3 className="font-heading text-3xl md:text-4xl font-semibold text-navy tracking-tight mb-6">Kernwaarden – F.O.R.C.E.</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                    Bij ons werk je niet alleen aan producten of opdrachten, je werkt aan verbinding. Tussen collega's onderling, tussen afdelingen, en tussen klantvraag en oplossing. Om dat elke dag goed te doen, hebben we een gezamenlijke basis nodig. FORCE is hoe we met elkaar omgaan als het druk is, hoe we keuzes maken, en hoe we kwaliteit leveren waar we trots op zijn.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-orange-light/30 transition-colors group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-md bg-navy text-white font-heading font-semibold text-xl flex items-center justify-center group-hover:bg-orange-light transition-colors">F</div>
<h4 className="font-heading text-xl font-semibold text-navy">Flexibel</h4>
</div>
<p className="text-sm font-medium text-charcoal mb-2">Bewegen mee met onze klant</p>
<p className="text-xs text-gray-500 leading-relaxed">Wij luisteren, vragen door en passen ons aan aan iedere situatie. Met 24/7 bereikbaarheid en meedenken in alternatieven.</p>
</div>

<div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-orange-light/30 transition-colors group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-md bg-navy text-white font-heading font-semibold text-xl flex items-center justify-center group-hover:bg-orange-light transition-colors">O</div>
<h4 className="font-heading text-xl font-semibold text-navy">Oplossingsgericht</h4>
</div>
<p className="text-sm font-medium text-charcoal mb-2">De beste oplossing voor elke situatie</p>
<p className="text-xs text-gray-500 leading-relaxed">Niet de slang staat centraal, maar het vraagstuk van de klant. We doorvragen, adviseren en denken mee over veiligheid en onderhoud.</p>
</div>

<div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-orange-light/30 transition-colors group">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-md bg-navy text-white font-heading font-semibold text-xl flex items-center justify-center group-hover:bg-orange-light transition-colors">R</div>
<h4 className="font-heading text-xl font-semibold text-navy">Relatiegedreven</h4>
</div>
<p className="text-sm font-medium text-charcoal mb-2">Duurzame samenwerkingen</p>
<p className="text-xs text-gray-500 leading-relaxed">We sturen op langdurige partnerships met vaste contactpersonen die het bedrijf en installaties kennen.</p>
</div>

<div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-orange-light/30 transition-colors group lg:col-start-1 lg:ml-auto lg:w-full max-w-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-md bg-navy text-white font-heading font-semibold text-xl flex items-center justify-center group-hover:bg-orange-light transition-colors">C</div>
<h4 className="font-heading text-xl font-semibold text-navy">Consistent</h4>
</div>
<p className="text-sm font-medium text-charcoal mb-2">Betrouwbaar en herkenbaar</p>
<p className="text-xs text-gray-500 leading-relaxed">Bij elke vestiging in Europa dezelfde kwaliteit, service en informatie. Afspraak is afspraak.</p>
</div>

<div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:border-orange-light/30 transition-colors group lg:col-start-2 lg:col-span-2 lg:mr-auto lg:w-full max-w-sm">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-md bg-navy text-white font-heading font-semibold text-xl flex items-center justify-center group-hover:bg-orange-light transition-colors">E</div>
<h4 className="font-heading text-xl font-semibold text-navy">Expertise</h4>
</div>
<p className="text-sm font-medium text-charcoal mb-2">Vakmensen in slangen en koppelingen</p>
<p className="text-xs text-gray-500 leading-relaxed">Advies gebaseerd op normen, berekeningen en praktijkervaring. We delen kennis en ontwikkelen continu.</p>
</div>
</div>
</div>
</section>

<section className="bg-gradient-brand py-20 relative overflow-hidden">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
<iconify-icon className="text-white/10 text-[250px]" icon="solar:quote-right-bold"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Onze Belofte</h2>
<p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto mb-8">
                Jij bent de verbindende factor, wij zorgen dat jij kunt groeien. Bij ons krijg je werk dat ertoe doet, een team dat je opvangt en ruimte om elke dag beter te worden. Je krijgt vertrouwen en verantwoordelijkheid, en je merkt het verschil van korte lijnen: ideeën worden gehoord, beslissingen worden genomen en je staat er nooit alleen voor.
            </p>
<div className="text-white font-heading font-medium tracking-widest uppercase text-sm mb-10 opacity-80">
                — Performing under pressure —
            </div>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-orange-dark bg-white rounded-md hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-300" href="#vacatures">
                Plan jouw volgende stap
            </a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-heading text-3xl font-semibold text-navy tracking-tight mb-4">Wat Ons Vooruit Drijft</h2>
<p className="text-gray-500 text-sm max-w-2xl">Onze waarden zijn niet zomaar woorden op een muur – ze vormen de basis van alles wat we doen en hoe we samenwerken.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full border border-gray-100 flex items-center justify-center text-orange-light shadow-sm">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<div>
<h4 className="font-heading text-lg font-semibold text-navy mb-1">Innovatie &amp; Groei</h4>
<p className="text-xs text-gray-500 leading-relaxed">We blijven onszelf en onze processen vernieuwen om de markt voor te blijven.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full border border-gray-100 flex items-center justify-center text-orange-light shadow-sm">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<h4 className="font-heading text-lg font-semibold text-navy mb-1">Samenwerking</h4>
<p className="text-xs text-gray-500 leading-relaxed">Succes bereiken we samen, door kennis te delen en elkaar te ondersteunen.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full border border-gray-100 flex items-center justify-center text-orange-light shadow-sm">
<iconify-icon className="text-2xl" icon="solar:medal-star-linear"></iconify-icon>
</div>
<div>
<h4 className="font-heading text-lg font-semibold text-navy mb-1">Excellentie</h4>
<p className="text-xs text-gray-500 leading-relaxed">Kwaliteit in alles wat we doen, van product tot klantenservice.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full border border-gray-100 flex items-center justify-center text-orange-light shadow-sm">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<h4 className="font-heading text-lg font-semibold text-navy mb-1">Duurzaamheid</h4>
<p className="text-xs text-gray-500 leading-relaxed">Verantwoordelijkheid nemen voor een toekomstbestendige industrie.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full border border-gray-100 flex items-center justify-center text-orange-light shadow-sm">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div>
<h4 className="font-heading text-lg font-semibold text-navy mb-1">Work-Life Balance</h4>
<p className="text-xs text-gray-500 leading-relaxed">Hard werken gaat hand in hand met goed rusten en flexibiliteit.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 shrink-0 rounded-full border border-gray-100 flex items-center justify-center text-orange-light shadow-sm">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<div>
<h4 className="font-heading text-lg font-semibold text-navy mb-1">Continu Leren</h4>
<p className="text-xs text-gray-500 leading-relaxed">Ruimte en budget voor jouw professionele en persoonlijke ontwikkeling.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[500px] flex items-center justify-center">
<div className="absolute inset-0">
<img alt="Warehouse" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-navy/70"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl">
<h2 className="font-heading text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Waar Kwaliteit Tot Stand Komt</h2>
<p className="text-white/80 text-sm md:text-base font-light">Duizenden producten, 24/7 beschikbaar, vakkundig beheerd door ons team</p>
</div>
</section>

<section className="py-24 bg-gray-50" id="afdelingen">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="font-heading text-3xl font-semibold text-navy tracking-tight mb-4">Vind Jouw Plek</h2>
<p className="text-gray-500 text-sm">Ontdek de diverse teams die Mees van den Brink tot een leider in innovatie maken.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300" href="#vacatures">
<div className="h-48 overflow-hidden relative">
<img alt="Assemblage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold text-navy">85+ teamleden</div>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-orange-dark transition-colors">Assemblage &amp; Productie</h3>
<p className="text-xs text-gray-500 mb-6 line-clamp-2">Vakmanschap en precisie bij het samenstellen van hoogwaardige slangassemblages.</p>
<div className="flex items-center text-orange-light text-xs font-semibold uppercase tracking-wider">
                            Ontdek Mogelijkheden <iconify-icon className="ml-2 text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300" href="#vacatures">
<div className="h-48 overflow-hidden relative">
<img alt="Technische Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold text-navy">60+ teamleden</div>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-orange-dark transition-colors">Technische Service</h3>
<p className="text-xs text-gray-500 mb-6 line-clamp-2">Deskundig advies en probleemoplossing voor de meest complexe industriële uitdagingen.</p>
<div className="flex items-center text-orange-light text-xs font-semibold uppercase tracking-wider">
                            Ontdek Mogelijkheden <iconify-icon className="ml-2 text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300" href="#vacatures">
<div className="h-48 overflow-hidden relative">
<img alt="Logistiek" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold text-navy">70+ teamleden</div>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-orange-dark transition-colors">Logistiek &amp; Distributie</h3>
<p className="text-xs text-gray-500 mb-6 line-clamp-2">Zorgen dat de juiste producten snel en veilig op de juiste plek in Europa aankomen.</p>
<div className="flex items-center text-orange-light text-xs font-semibold uppercase tracking-wider">
                            Ontdek Mogelijkheden <iconify-icon className="ml-2 text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300" href="#vacatures">
<div className="h-48 overflow-hidden relative">
<img alt="Sales" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold text-navy">50+ teamleden</div>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-orange-dark transition-colors">Sales &amp; Support</h3>
<p className="text-xs text-gray-500 mb-6 line-clamp-2">Het bouwen van sterke klantrelaties en het leveren van uitmuntende service.</p>
<div className="flex items-center text-orange-light text-xs font-semibold uppercase tracking-wider">
                            Ontdek Mogelijkheden <iconify-icon className="ml-2 text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300" href="#vacatures">
<div className="h-48 overflow-hidden relative">
<img alt="Kwaliteit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold text-navy">35+ teamleden</div>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-orange-dark transition-colors">Kwaliteit &amp; Innovatie</h3>
<p className="text-xs text-gray-500 mb-6 line-clamp-2">Borgen van de hoogste standaarden en ontwikkelen van nieuwe technische oplossingen.</p>
<div className="flex items-center text-orange-light text-xs font-semibold uppercase tracking-wider">
                            Ontdek Mogelijkheden <iconify-icon className="ml-2 text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300" href="#vacatures">
<div className="h-48 overflow-hidden relative">
<img alt="Magazijn" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-semibold text-navy">45+ teamleden</div>
</div>
<div className="p-6">
<h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-orange-dark transition-colors">Magazijn &amp; Voorraadbeheer</h3>
<p className="text-xs text-gray-500 mb-6 line-clamp-2">De ruggengraat van onze 24/7 operatie, sturend op beschikbaarheid en efficiëntie.</p>
<div className="flex items-center text-orange-light text-xs font-semibold uppercase tracking-wider">
                            Ontdek Mogelijkheden <iconify-icon className="ml-2 text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="verhalen">

<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 rounded-l-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="font-heading text-3xl font-semibold text-navy tracking-tight mb-4">Ontmoet Ons Team</h2>
<p className="text-gray-500 text-sm">Echte verhalen van echte mensen die Mees van den Brink een uitzonderlijke werkplek maken.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Tim Bakker" className="w-14 h-14 rounded-full object-cover border-2 border-orange-light/20" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-heading font-semibold text-navy">Tim Bakker</h4>
<p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Technisch Specialist · 4 jaar</p>
</div>
</div>
<h5 className="text-charcoal font-semibold mb-3 text-sm">Vakmanschap in slangen en koppelingen</h5>
<p className="text-gray-500 text-xs leading-relaxed mb-6 italic">"Bij Mees werk ik met de beste producten en technieken. Elke dag leer ik bij en help ik klanten met complexe uitdagingen. De vrijheid die ik hier krijg is fantastisch."</p>
<a className="text-orange-light text-xs font-semibold hover:text-orange-dark transition-colors inline-flex items-center" href="#">
                        Lees Tim's verhaal <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 md:-translate-y-4">
<div className="flex items-center gap-4 mb-6">
<img alt="Lisa de Vries" className="w-14 h-14 rounded-full object-cover border-2 border-orange-light/20" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-heading font-semibold text-navy">Lisa de Vries</h4>
<p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Service Engineer · 3 jaar</p>
</div>
</div>
<h5 className="text-charcoal font-semibold mb-3 text-sm">Precisie in assemblage</h5>
<p className="text-gray-500 text-xs leading-relaxed mb-6 italic">"De technologie en precisie waarmee we werken is indrukwekkend. Ik ben trots op wat we maken en de impact die het heeft op de veiligheid bij onze klanten."</p>
<a className="text-orange-light text-xs font-semibold hover:text-orange-dark transition-colors inline-flex items-center" href="#">
                        Lees Lisa's verhaal <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Mark Hendriks" className="w-14 h-14 rounded-full object-cover border-2 border-orange-light/20" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-heading font-semibold text-navy">Mark Hendriks</h4>
<p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Logistics Coordinator · 5 jaar</p>
</div>
</div>
<h5 className="text-charcoal font-semibold mb-3 text-sm">24/7 service die verschil maakt</h5>
<p className="text-gray-500 text-xs leading-relaxed mb-6 italic">"We zorgen dat onze klanten altijd geholpen worden, dag en nacht. Die betrouwbaarheid, gecombineerd met de sfeer in het team, maakt ons ijzersterk."</p>
<a className="text-orange-light text-xs font-semibold hover:text-orange-dark transition-colors inline-flex items-center" href="#">
                        Lees Mark's verhaal <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-navy bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-all duration-300" href="#">
                    Bekijk Alle Verhalen
                </a>
</div>
</div>
</section>

<section className="py-24 bg-navy text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3">
<h2 className="font-heading text-3xl font-semibold tracking-tight mb-4 text-white">We Zorgen voor Onze Mensen</h2>
<p className="text-gray-300 text-sm font-light leading-relaxed">
                    Naast een geweldig salaris bieden we een compleet pakket ontworpen om jouw welzijn, groei en geluk te ondersteunen, zowel binnen als buiten het werk.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6">
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Competitief Salaris</h4>
<p className="text-[11px] text-gray-400">Marktconform en meegroeiend</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:diploma-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Opleidingsbudget</h4>
<p className="text-[11px] text-gray-400">Ruimte voor jouw ontwikkeling</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Flexibele Uren</h4>
<p className="text-[11px] text-gray-400">Balans die bij jou past</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:home-wifi-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Hybride Werken</h4>
<p className="text-[11px] text-gray-400">Afhankelijk van je functie</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:heart-pulse-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Gezondheid &amp; Welzijn</h4>
<p className="text-[11px] text-gray-400">Vitaliteitsprogramma's</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:calendar-date-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">28 Vakantiedagen</h4>
<p className="text-[11px] text-gray-400">Tijd om op te laden</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Nieuwste Apparatuur</h4>
<p className="text-[11px] text-gray-400">Tools om uit te blinken</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:party-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Team Evenementen</h4>
<p className="text-[11px] text-gray-400">Vier successen samen</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:emoji-funny-circle-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Ouderschapsverlof</h4>
<p className="text-[11px] text-gray-400">Aandacht voor familie</p>
</div>
<div>
<iconify-icon className="text-3xl text-orange-light mb-4" icon="solar:bus-linear"></iconify-icon>
<h4 className="font-heading text-sm font-semibold mb-1">Reiskostenvergoeding</h4>
<p className="text-[11px] text-gray-400">Eerlijke compensatie</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="vacatures">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="font-heading text-3xl font-semibold text-navy tracking-tight mb-4">Actuele Vacatures</h2>
<p className="text-gray-500 text-sm">Vind jouw perfecte rol en zet de volgende stap in je carrière met ons.</p>
</div>

<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 mb-10">
<div className="flex-1 relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 text-sm bg-transparent border-none focus:ring-0 outline-none text-charcoal placeholder:text-gray-400" placeholder="Zoek op functie..." type="text"/>
</div>
<div className="h-px w-full md:w-px md:h-10 bg-gray-200 self-center"></div>
<div className="md:w-48">
<select className="w-full py-2.5 px-3 text-sm bg-transparent border-none focus:ring-0 outline-none text-charcoal cursor-pointer font-medium">
<option value="">Alle Afdelingen</option>
<option value="sales">Sales &amp; Support</option>
<option value="tech">Technische Service</option>
<option value="logistics">Logistiek</option>
</select>
</div>
<div className="h-px w-full md:w-px md:h-10 bg-gray-200 self-center"></div>
<div className="md:w-48">
<select className="w-full py-2.5 px-3 text-sm bg-transparent border-none focus:ring-0 outline-none text-charcoal cursor-pointer font-medium">
<option value="">Alle Locaties</option>
<option value="nl">Nederland</option>
<option value="be">België</option>
<option value="de">Duitsland</option>
</select>
</div>
</div>

<div className="space-y-3">

<div className="group bg-white border border-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-orange-light/40 hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="font-heading text-base font-semibold text-navy group-hover:text-orange-dark transition-colors">UX Designer</h3>
<span className="px-2 py-0.5 bg-orange-light/10 text-orange-dark text-[10px] font-semibold rounded uppercase tracking-wider">Uitgelicht</span>
</div>
<p className="text-xs text-gray-500 mb-2">Vormgeven aan onze digitale klantbeleving en interne systemen.</p>
<div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Innovatie</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Amsterdam (Hybride)</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Full-time</span>
</div>
</div>
<div>
<button className="px-5 py-2 text-xs font-semibold text-navy bg-gray-50 border border-gray-200 rounded hover:bg-navy hover:text-white transition-colors duration-300 whitespace-nowrap">Bekijk Details</button>
</div>
</div>

<div className="group bg-white border border-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-orange-light/40 hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="font-heading text-base font-semibold text-navy group-hover:text-orange-dark transition-colors">HR Business Partner</h3>
</div>
<p className="text-xs text-gray-500 mb-2">Ondersteunen en adviseren van management bij strategische HR-vraagstukken.</p>
<div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> HR</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Haaksbergen</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 32-40 uur</span>
</div>
</div>
<div>
<button className="px-5 py-2 text-xs font-semibold text-navy bg-gray-50 border border-gray-200 rounded hover:bg-navy hover:text-white transition-colors duration-300 whitespace-nowrap">Bekijk Details</button>
</div>
</div>

<div className="group bg-white border border-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-orange-light/40 hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="font-heading text-base font-semibold text-navy group-hover:text-orange-dark transition-colors">Marketing Specialist</h3>
</div>
<p className="text-xs text-gray-500 mb-2">Uitvoeren van B2B marketingcampagnes voor de Europese markt.</p>
<div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Marketing</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Haaksbergen (Hybride)</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Full-time</span>
</div>
</div>
<div>
<button className="px-5 py-2 text-xs font-semibold text-navy bg-gray-50 border border-gray-200 rounded hover:bg-navy hover:text-white transition-colors duration-300 whitespace-nowrap">Bekijk Details</button>
</div>
</div>

<div className="group bg-white border border-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-orange-light/40 hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="font-heading text-base font-semibold text-navy group-hover:text-orange-dark transition-colors">Financial Analyst</h3>
</div>
<p className="text-xs text-gray-500 mb-2">Analyseren van financiële data om managementbeslissingen te onderbouwen.</p>
<div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Finance</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Haaksbergen</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Full-time</span>
</div>
</div>
<div>
<button className="px-5 py-2 text-xs font-semibold text-navy bg-gray-50 border border-gray-200 rounded hover:bg-navy hover:text-white transition-colors duration-300 whitespace-nowrap">Bekijk Details</button>
</div>
</div>

<div className="group bg-white border border-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-orange-light/40 hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="font-heading text-base font-semibold text-navy group-hover:text-orange-dark transition-colors">Product Manager</h3>
<span className="px-2 py-0.5 bg-orange-light/10 text-orange-dark text-[10px] font-semibold rounded uppercase tracking-wider">Nieuw</span>
</div>
<p className="text-xs text-gray-500 mb-2">Verantwoordelijk voor de ontwikkeling en levenscyclus van nieuwe koppelingen.</p>
<div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Innovatie</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Haaksbergen</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Full-time</span>
</div>
</div>
<div>
<button className="px-5 py-2 text-xs font-semibold text-navy bg-gray-50 border border-gray-200 rounded hover:bg-navy hover:text-white transition-colors duration-300 whitespace-nowrap">Bekijk Details</button>
</div>
</div>

<div className="group bg-white border border-gray-100 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-orange-light/40 hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="font-heading text-base font-semibold text-navy group-hover:text-orange-dark transition-colors">Senior Software Engineer</h3>
</div>
<p className="text-xs text-gray-500 mb-2">Ontwikkelen van interne applicaties voor efficiënter magazijnbeheer.</p>
<div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> IT</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Remote / Haaksbergen</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Full-time</span>
</div>
</div>
<div>
<button className="px-5 py-2 text-xs font-semibold text-navy bg-gray-50 border border-gray-200 rounded hover:bg-navy hover:text-white transition-colors duration-300 whitespace-nowrap">Bekijk Details</button>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-sm text-gray-500 mb-4">Staat jouw droombaan er niet tussen?</p>
<a className="inline-flex text-sm font-semibold text-orange-light hover:text-orange-dark transition-colors border-b border-orange-light/30 hover:border-orange-dark pb-0.5" href="#">Stuur een open sollicitatie</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="flex-1">
<div className="mb-12">
<h2 className="font-heading text-3xl font-semibold text-navy tracking-tight mb-4">Jouw Reis Begint Hier</h2>
<p className="text-gray-500 text-sm">We hebben ons wervingsproces ontworpen om transparant, efficiënt en respectvol te zijn voor jouw tijd.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-5 left-6 right-6 h-px bg-gray-200 z-0"></div>
<div className="flex flex-col md:flex-row justify-between gap-6 relative z-10 overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">

<div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 min-w-[140px]">
<div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-heading font-semibold text-sm shrink-0 shadow-sm border-4 border-white">1</div>
<div>
<h4 className="font-heading font-semibold text-charcoal text-sm">Solliciteer</h4>
<p className="text-[10px] text-gray-400 mt-1">Direct online</p>
</div>
</div>

<div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 min-w-[140px]">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-heading font-semibold text-sm shrink-0 border-4 border-white">2</div>
<div>
<h4 className="font-heading font-semibold text-charcoal text-sm">Beoordeling</h4>
<p className="text-[10px] text-gray-400 mt-1">Binnen 3 dagen</p>
</div>
</div>

<div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 min-w-[140px]">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-heading font-semibold text-sm shrink-0 border-4 border-white">3</div>
<div>
<h4 className="font-heading font-semibold text-charcoal text-sm">Eerste Gesprek</h4>
<p className="text-[10px] text-gray-400 mt-1">Digitaal / Locatie</p>
</div>
</div>

<div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 min-w-[140px]">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-heading font-semibold text-sm shrink-0 border-4 border-white">4</div>
<div>
<h4 className="font-heading font-semibold text-charcoal text-sm">Assessment</h4>
<p className="text-[10px] text-gray-400 mt-1">Rol afhankelijk</p>
</div>
</div>

<div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 min-w-[140px]">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-heading font-semibold text-sm shrink-0 border-4 border-white">5</div>
<div>
<h4 className="font-heading font-semibold text-charcoal text-sm">Team Gesprek</h4>
<p className="text-[10px] text-gray-400 mt-1">Ontmoet collega's</p>
</div>
</div>

<div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 min-w-[140px]">
<div className="w-10 h-10 rounded-full bg-orange-light/20 text-orange-dark flex items-center justify-center font-heading font-semibold text-sm shrink-0 border-4 border-white">6</div>
<div>
<h4 className="font-heading font-semibold text-charcoal text-sm">Welkom</h4>
<p className="text-[10px] text-gray-400 mt-1">Aanbod &amp; Onboarding</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:w-[350px] shrink-0">
<div className="bg-gray-50 border border-gray-100 p-8 rounded-xl">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-2xl text-orange-light" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-navy">Tips voor Je Sollicitatie</h3>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-light mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-gray-600 leading-relaxed">Pas je CV aan om relevante ervaring te benadrukken</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-light mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-gray-600 leading-relaxed">Voeg een korte motivatiebrief toe waarin je je motivatie uitlegt</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-light mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-gray-600 leading-relaxed">Onderzoek ons bedrijf en kom voorbereid met vragen</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-light mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-gray-600 leading-relaxed">Wees jezelf – wij waarderen authenticiteit</span>
</li>
</ul>
<div className="pt-6 border-t border-gray-200">
<p className="text-[11px] text-gray-500 mb-1">Vragen over het proces?</p>
<a className="text-sm font-medium text-navy hover:text-orange-light transition-colors" href="mailto:careers@meesvandenbrink.nl">careers@meesvandenbrink.nl</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-brand py-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-heading text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Klaar om je aan te Sluiten?</h2>
<p className="text-white/90 text-sm md:text-base font-light mb-10">
                Zet de volgende stap in je carrière. Of je nu de perfecte rol hebt gevonden of jezelf wilt voorstellen, we horen graag van je.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-navy bg-white rounded-md hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-300" href="#vacatures">
                    Bekijk Vacatures
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-all duration-300" href="#">
                    Open Sollicitatie
                </a>
</div>
<p className="text-[11px] text-white/70 tracking-wide">Gemiddelde tijd tot aanname: 3–4 weken <span className="mx-2">·</span> We reageren op elke sollicitatie</p>
</div>
</section>

<footer className="bg-[#0b1221] text-gray-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<a className="font-heading font-semibold text-white text-lg tracking-widest uppercase flex items-center gap-2 mb-6 opacity-90" href="#">
<iconify-icon className="text-orange-light text-2xl" icon="solar:waterdrops-linear"></iconify-icon>
                        MEES VAN DEN BRINK
                    </a>
<p className="text-sm leading-relaxed text-gray-400 font-light pr-4">
                        Bouw morgen samen. Word deel van ons team van gepassioneerde individuen die echte impact maken in de industrie.
                    </p>
</div>

<div>
<h5 className="font-heading text-white font-medium text-sm mb-4 tracking-wide">Bedrijf</h5>
<ul className="space-y-3">
<li><a className="text-xs hover:text-orange-light transition-colors" href="#">Over Ons</a></li>
<li><a className="text-xs hover:text-orange-light transition-colors" href="#">Ons Verhaal</a></li>
<li><a className="text-xs hover:text-orange-light transition-colors" href="#">Leiderschap</a></li>
<li><a className="text-xs hover:text-orange-light transition-colors" href="#">Nieuws &amp; Pers</a></li>
</ul>
</div>

<div>
<h5 className="font-heading text-white font-medium text-sm mb-4 tracking-wide">Voor Kandidaten</h5>
<ul className="space-y-3">
<li><a className="text-xs hover:text-orange-light transition-colors" href="#vacatures">Alle Vacatures</a></li>
<li><a className="text-xs hover:text-orange-light transition-colors" href="#">Sollicitatie Tips</a></li>
<li><a className="text-xs hover:text-orange-light transition-colors" href="#">Veelgestelde Vragen</a></li>
<li><a className="text-xs hover:text-orange-light transition-colors" href="#verhalen">Medewerker Verhalen</a></li>
</ul>
</div>

<div>
<h5 className="font-heading text-white font-medium text-sm mb-4 tracking-wide">Contact</h5>
<ul className="space-y-3">
<li><a className="text-xs hover:text-orange-light transition-colors flex items-center gap-2" href="mailto:careers@meesvandenbrink.nl"><iconify-icon className="text-sm" icon="solar:letter-linear"></iconify-icon> careers@meesvandenbrink.nl</a></li>
<li><a className="text-xs hover:text-orange-light transition-colors flex items-center gap-2" href="tel:+31201234567"><iconify-icon className="text-sm" icon="solar:phone-linear"></iconify-icon> +31 20 123 4567</a></li>
<li className="text-xs flex items-start gap-2 pt-2">
<iconify-icon className="text-sm mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Keizersgracht 123<br/>1015 CJ Amsterdam</span>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[11px] text-gray-500">© 2024 Mees van den Brink. Alle rechten voorbehouden.</p>
<div className="flex items-center gap-6">
<a className="text-[11px] text-gray-500 hover:text-white transition-colors" href="#">Privacybeleid</a>
<a className="text-[11px] text-gray-500 hover:text-white transition-colors" href="#">Algemene Voorwaarden</a>
<a className="text-[11px] text-gray-500 hover:text-white transition-colors flex items-center gap-1" href="#" onclick="window.scrollTo(0,0); return false;">
                        Terug naar boven <iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
