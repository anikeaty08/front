import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b', // Deep dark background
},
brand: {
500: '#59acf2', // Their original blue, modernized
600: '#3b82f6',
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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-40 h-auto overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity">

<img alt="Galvanizacija Lovrić" className="w-full object-contain filter brightness-150 contrast-125" src="https://www.galvanizacija-lovric.hr/wp-content/uploads/2016/04/logoGL1x.png"/>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#about">O nama</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#services">Usluge</a>
<a className="hover:text-white transition-colors text-zinc-400" href="#restoration">Restauracija</a>
<a className="hover:text-white transition-colors text-zinc-400" href="#references">Reference</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center hover:bg-white/20 transition-all text-sm font-medium text-white bg-white/10 border-white/10 border rounded-full pt-2 pr-5 pb-2 pl-5" href="#contact">
                    Kontakt
                </a>
<button className="lg:hidden text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Pogon" className="w-full h-full object-cover opacity-40" src="https://www.galvanizacija-lovric.hr/wp-content/uploads/2016/04/GalvanizacijaLovric60.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="bg-zinc-950/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-xs font-medium uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                Industrijski Lider od 2000.
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white text-glow leading-[1.1]">
                Zaštita metala <br/>
<span className="text-zinc-500">bez kompromisa.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                Najbolji izbor za toplo i hladno pocinčavanje, restauraciju i industrijsku zaštitu metala u Istri. Pogon od 2500 m² građen po najvišim ISO standardima.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-3 bg-brand-500 text-white font-medium rounded-full hover:bg-brand-600 transition-all flex items-center justify-center gap-2" href="#services">
                    Naše Usluge
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-800 text-zinc-300 font-medium rounded-full hover:bg-zinc-700 transition-all" href="#contact">
                    Zatražite Ponudu
                </a>
</div>

<div className="pt-12 flex flex-wrap justify-center gap-4 opacity-70">
<div className="px-4 py-2 border border-white/10 rounded bg-black/40 backdrop-blur-sm text-xs text-zinc-400 font-mono">ISO 9001:2015</div>
<div className="px-4 py-2 border border-white/10 rounded bg-black/40 backdrop-blur-sm text-xs text-zinc-400 font-mono">ISO 14001:2015</div>
<div className="px-4 py-2 border border-white/10 rounded bg-black/40 backdrop-blur-sm text-xs text-zinc-400 font-mono">ISO 45001:2018</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-b pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Tradicija i moderna tehnologija</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg">
<p>
                        Obrt za galvanizaciju Lovrić započeo je s radom 2000. godine. Danas zapošljavamo preko 25 stručnjaka s tendencijom rasta.
                    </p>
<p>
                        Poslujemo u objektu površine <span className="text-white font-medium">2500 m²</span>, građenom u skladu sa strogim standardima zaštite okoliša. Koristimo ekološki prihvatljivu tehnologiju uz konstantno praćenje kvalitete.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="p-6 rounded-2xl bg-zinc-900 border border-white/5">
<iconify-icon className="text-brand-500 text-3xl mb-3" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="text-2xl text-white font-medium">3500+</div>
<div className="text-sm text-zinc-500">Zadovoljnih partnera</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-900 border border-white/5">
<iconify-icon className="text-brand-500 text-3xl mb-3" icon="solar:factory-2-linear"></iconify-icon>
<div className="text-2xl text-white font-medium">70t</div>
<div className="text-sm text-zinc-500">Dnevni kapacitet</div>
</div>
</div>
</div>
<div className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 group">
<img alt="Pogon" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://www.galvanizacija-lovric.hr/wp-content/uploads/2016/04/galvanizacija-lovric.jpg"/>
<div className="bg-gradient-to-t from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8">
<p className="text-white text-lg font-medium">Industrijska zona Galižana</p>
<p className="text-zinc-400 text-sm">Naš moderni pogon</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<span className="text-brand-500 font-medium tracking-wide text-sm uppercase">Naše Usluge</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mt-3">Sveobuhvatna obrada metala</h2>
</div>
<p className="text-zinc-500 max-w-sm mt-4 md:mt-0">
                    Od toplo pocinčavanja do precizne galvanizacije, nudimo kompletna rješenja na jednom mjestu.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-500/30 transition-colors">
<div className="h-64 overflow-hidden">
<img alt="Toplo cinčanje" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://www.galvanizacija-lovric.hr/wp-content/uploads/2016/04/kada-toplo.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium mb-3">Toplo Cinčanje</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6">
                            Najučinkovitija zaštita čelika. Kapacitet kade 70 tona dnevno. Dimenzije kade: 6500 x 1200 x 3000 mm. Mogućnost cinčanja većih komada uz okretanje.
                        </p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Zaštita od korozije</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Cestovna oprema</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Građevinske armature</li>
</ul>
</div>
</div>

<div className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-500/30 transition-colors">
<div className="h-64 overflow-hidden">
<img alt="Hladno cinčanje" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://www.galvanizacija-lovric.hr/wp-content/uploads/2016/04/kada-hladno.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium mb-3">Hladno Cinčanje</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6">
                            Elektrolitički postupak za precizne predmete. Kapacitet 50 tona/dan. 5 kada dimenzija 2300 x 1500 x 800 mm. Idealno za vijke i sitne elemente.
                        </p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Bubnjevi i vješalice</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Plava, žuta, crna pasivizacija</li>
</ul>
</div>
</div>

<div className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-500/30 transition-colors lg:translate-y-8">
<div className="h-64 overflow-hidden">
<img alt="Restauracija" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://www.galvanizacija-lovric.hr/wp-content/uploads/2016/04/restauracija1-tn.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium mb-3">Restauracija</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6">
                            Obnova sakralnih i luksuznih predmeta. Poliranje, čišćenje i nanošenje novih prevlaka (zlato, srebro) na oštećene dijelove.
                        </p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Pozlata (24k) i posrebrivanje</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Sakralni objekti i oldtimeri</li>
</ul>
</div>
</div>

<div className="col-span-1 lg:col-span-3 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-zinc-900 transition-colors">
<div className="text-zinc-400 mb-2"><iconify-icon icon="solar:medal-star-linear" width="32"></iconify-icon></div>
<h4 className="text-white font-medium">Niklovanje</h4>
<p className="text-xs text-zinc-500 mt-1">Sjajno i mat, kapacitet 15t/dan</p>
</div>
<div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-zinc-900 transition-colors">
<div className="text-zinc-400 mb-2"><iconify-icon icon="solar:cup-first-linear" width="32"></iconify-icon></div>
<h4 className="text-white font-medium">Pozlata</h4>
<p className="text-xs text-zinc-500 mt-1">24 karatno zlato</p>
</div>
<div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-zinc-900 transition-colors">
<div className="text-zinc-400 mb-2"><iconify-icon icon="solar:magnet-linear" width="32"></iconify-icon></div>
<h4 className="text-white font-medium">Bakrenje</h4>
<p className="text-xs text-zinc-500 mt-1">Cijanidno i alkalno</p>
</div>
<div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-zinc-900 transition-colors">
<div className="text-zinc-400 mb-2"><iconify-icon icon="solar:filters-linear" width="32"></iconify-icon></div>
<h4 className="text-white font-medium">Poliranje</h4>
<p className="text-xs text-zinc-500 mt-1">Priprema i završna obrada</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-black overflow-hidden" id="references">
<div className="max-w-7xl mx-auto px-6 mb-10 text-center">
<h3 className="text-lg text-zinc-400 font-light">Povjerenje nam ukazuju vodeće tvrtke u regiji</h3>
</div>

<div className="relative w-full overflow-hidden">
<div className="flex gap-16 animate-marquee whitespace-nowrap px-6 justify-center flex-wrap">
<span className="text-2xl font-semibold text-zinc-600 hover:text-white transition-colors cursor-default">ULJANIK</span>
<span className="text-2xl font-semibold text-zinc-600 hover:text-white transition-colors cursor-default">3. MAJ</span>
<span className="text-2xl font-semibold text-zinc-600 hover:text-white transition-colors cursor-default">VIKTOR LENAC</span>
<span className="text-2xl font-semibold text-zinc-600 hover:text-white transition-colors cursor-default">IKEA</span>
<span className="text-2xl font-semibold text-zinc-600 hover:text-white transition-colors cursor-default">TEHNOMONT</span>
<span className="text-2xl font-semibold text-zinc-600 hover:text-white transition-colors cursor-default">CATERPILLAR</span>
<span className="text-2xl font-semibold text-zinc-600 hover:text-white transition-colors cursor-default">GEBERIT</span>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-10">
<div>
<h2 className="text-4xl font-medium text-white tracking-tight mb-4">Kontaktirajte nas</h2>
<p className="text-zinc-400 text-lg font-light">Imate pitanja ili trebate ponudu? Naš tim vam stoji na raspolaganju.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Adresa</h4>
<p className="text-zinc-400">Industrijska zona Galižana 3152100 Pula, Hrvatska</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Telefon</h4>
<p className="text-zinc-400">+385 52 535 658</p>
<p className="text-zinc-500 text-sm mt-1">Radno vrijeme: Pon-Pet 7-15h</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Email</h4>
<a className="text-brand-500 hover:text-brand-400 transition-colors" href="mailto:galvanizacija@inet.hr">galvanizacija@inet.hr</a>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-white/5 rounded-3xl p-8 shadow-2xl">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm text-zinc-400 ml-1">Ime</label>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Vaše ime" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm text-zinc-400 ml-1">Email</label>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="vas@email.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-zinc-400 ml-1">Predmet</label>
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Upit za pocinčavanje..." type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm text-zinc-400 ml-1">Poruka</label>
<textarea className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Kako vam možemo pomoći?" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-all shadow-lg shadow-brand-500/20" type="submit">
                            Pošalji Upit
                        </button>
</form>
</div>
</div>
</div>
</section>

<div className="w-full h-96 bg-zinc-900 border-t border-white/5 relative grayscale hover:grayscale-0 transition-all duration-700">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.8673748232675!2d13.86316391583095!3d44.92165507909865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47632b7e12616f73%3A0x6b4f74d48d08c6b9!2sIndustrijska%20zona%20Gali%C5%BEana%2031%2C%2052100%2C%20Pula!5e0!3m2!1sen!2shr!4v1647867283912!5m2!1sen!2shr" style={{border: '0', filter: 'invert(90%) hue-rotate(180deg)'}} width="100%">
</iframe>
</div>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<a className="text-xl font-medium text-white tracking-tight" href="#">Galvanizacija<span className="text-brand-500">Lovrić</span></a>
<p className="text-zinc-600 text-sm mt-2">© 2024 Sva prava pridržana.</p>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Pravila Privatnosti</a>
<a className="hover:text-white transition-colors" href="#">Uvjeti Korištenja</a>
</div>
</div>
</footer>

    </>
  );
}
