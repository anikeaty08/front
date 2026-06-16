import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cinzel', 'serif'],
},
letterSpacing: {
'widest': '0.25em',
},
colors: {
gold: {
300: '#D9B56F',
400: '#C49F58',
500: '#A6823C',
},
bg: {
900: '#050505',
800: '#0A0A0A',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
},
animation: {
'fade-up': 'fadeUp 1s cubic-bezier(0.2, 1, 0.4, 1) forwards',
'slow-spin': 'spin 30s linear infinite',
},
keyframes: {
fadeUp: { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('reveal-visible');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'var(--tw-bg-noise)'}}></div>

<nav className="fixed w-full z-40 top-0 left-0 bg-bg-900/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-xl tracking-widest text-white" href="#">PETRA <span className="text-gold-300">HAVLÍČKOVÁ</span></a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#about">O Salonu</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#services">Služby</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#prices">Ceník</a>
<a className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#gallery">Foto</a>
<a className="px-5 py-2 border border-gold-300/30 text-gold-300 text-xs uppercase tracking-widest hover:bg-gold-300 hover:text-black transition-all rounded-sm" href="#contact">Kontakt</a>
</div>

<button className="md:hidden text-white"><iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon></button>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-30 grayscale filter" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb246?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-bg-900/50 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
<span className="block text-gold-300 text-xs uppercase tracking-[0.3em] animate-fade-up" style={{animationDelay: '0.1s'}}>Brno Bohunice</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight animate-fade-up" style={{animationDelay: '0.3s'}}>
                Kadeřnictví<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500 italic font-light">Petra Havlíčková</span>
</h1>
<p className="text-neutral-400 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed animate-fade-up" style={{animationDelay: '0.5s'}}>
                Profesionální zručnost, moderní střihy a individuální péče pro vaše vlasy.
            </p>
<div className="pt-8 animate-fade-up" style={{animationDelay: '0.7s'}}>
<a className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gold-300 transition-all duration-300" href="#contact">
<span>Objednat se</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-bg-900 relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-serif text-white">Vítejte v <span className="text-gold-300 italic">Salonu</span></h2>
<div className="w-16 h-px bg-white/20"></div>
<p className="text-neutral-400 leading-relaxed font-light">
                        Vítejte v hairsalonu, ve kterém najdete profesionální služby. Svým klientkám nabízím vynikající ceny a perfektní servis. V neposlední řadě Vám ráda poradím, co s Vašimi vlasy a zároveň doporučím vhodnou kosmetiku přesně pro Váš typ vlasů.
                    </p>
<div className="bg-bg-800 border border-white/5 p-6 mt-8">
<p className="text-gold-300 text-sm italic font-serif text-center">
                            "Kvalitní vlasová kosmetika renomované italské značky INSIGHT."
                        </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 reveal-on-scroll">
<div className="glass-panel p-6 flex flex-col items-center text-center gap-4 hover:border-gold-300/30 transition-colors">
<iconify-icon className="text-gold-300 text-3xl" icon="solar:scissors-square-linear"></iconify-icon>
<span className="text-white text-xs uppercase tracking-widest">Kreativní<br/>Střihy</span>
</div>
<div className="glass-panel p-6 flex flex-col items-center text-center gap-4 hover:border-gold-300/30 transition-colors">
<iconify-icon className="text-gold-300 text-3xl" icon="solar:palette-linear"></iconify-icon>
<span className="text-white text-xs uppercase tracking-widest">Barvení &amp;<br/>Melír</span>
</div>
<div className="glass-panel p-6 flex flex-col items-center text-center gap-4 hover:border-gold-300/30 transition-colors">
<iconify-icon className="text-gold-300 text-3xl" icon="solar:cosmetic-linear"></iconify-icon>
<span className="text-white text-xs uppercase tracking-widest">Péče &amp;<br/>Zábaly</span>
</div>
<div className="glass-panel p-6 flex flex-col items-center text-center gap-4 hover:border-gold-300/30 transition-colors">
<iconify-icon className="text-gold-300 text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-white text-xs uppercase tracking-widest">Styling &amp;<br/>Poradenství</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-800 border-t border-white/5" id="services">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-gold-300 text-xs uppercase tracking-widest mb-4 block reveal-on-scroll">Co nabízím</span>
<h2 className="text-3xl md:text-4xl font-serif text-white mb-16 reveal-on-scroll">Kompletní Péče</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left reveal-on-scroll">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
<iconify-icon className="text-gold-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Poradenství střihu, barvy i celkového vzhledu
                    </li>
<li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
<iconify-icon className="text-gold-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Střihy dámské: klasické i nové moderní
                    </li>
<li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
<iconify-icon className="text-gold-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Úpravu běžných účesů pro denní nošení
                    </li>
<li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
<iconify-icon className="text-gold-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Kulmování a žehlení
                    </li>
</ul>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
<iconify-icon className="text-gold-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Barvení, přeliv vlasů, melír
                    </li>
<li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
<iconify-icon className="text-gold-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Krátkodobá i dlouhodobá výživa vlasů
                    </li>
<li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
<iconify-icon className="text-gold-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Ošetření namáhaných či poškozených vlasů
                    </li>
<li className="flex items-start gap-3 text-neutral-400 text-sm font-light">
<iconify-icon className="text-gold-300 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                        Prodej kosmetiky INSIGHT
                    </li>
</ul>
</div>
</div>
</section>

<section className="overflow-hidden bg-bg-900 border-white/5 border-t pt-24 pb-24 relative" id="prices">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-300/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Ceník <span className="text-neutral-700 italic">Služeb</span></h2>
<p className="text-neutral-500 text-xs tracking-widest uppercase">Ceny jsou orientační a smluvní</p>
</div>
<div className="space-y-8 reveal-on-scroll">

<div className="flex items-end justify-between border-b border-white/10 pb-4 group">
<div>
<h3 className="text-lg font-serif text-white group-hover:text-gold-300 transition-colors">Dámský Střih</h3>
<p className="text-neutral-500 text-xs mt-1">Včetně mytí a stylingu</p>
</div>
<div className="text-right">
<span className="text-xl font-light text-white">700 - 800,-</span>
<span className="text-xs text-neutral-500 block">Kč</span>
</div>
</div>

<div className="flex items-end justify-between border-b border-white/10 pb-4 group">
<div>
<h3 className="text-lg font-serif text-white group-hover:text-gold-300 transition-colors">Barva</h3>
<p className="text-neutral-500 text-xs mt-1">Kompletní barvení</p>
</div>
<div className="text-right">
<span className="text-xl font-light text-white">1100 - 1500,-</span>
<span className="text-xs text-neutral-500 block">Kč</span>
</div>
</div>

<div className="flex items-end justify-between border-b border-white/10 pb-4 group">
<div>
<h3 className="text-lg font-serif text-white group-hover:text-gold-300 transition-colors">Melír</h3>
<p className="text-neutral-500 text-xs mt-1">Techniky prosvětlení</p>
</div>
<div className="text-right">
<span className="text-xl font-light text-white">1800 - 2250,-</span>
<span className="text-xs text-neutral-500 block">Kč</span>
</div>
</div>

<div className="flex items-end justify-between border-b border-white/10 pb-4 group">
<div>
<h3 className="text-lg font-serif text-white group-hover:text-gold-300 transition-colors">Odbarvení a Tónování</h3>
<p className="text-neutral-500 text-xs mt-1">Změna odstínu a péče</p>
</div>
<div className="text-right">
<span className="text-xl font-light text-white">1500 - 2250,-</span>
<span className="text-xs text-neutral-500 block">Kč</span>
</div>
</div>
</div>
<div className="mt-12 text-center reveal-on-scroll">
<p className="text-gold-300/80 text-xs font-light italic border border-gold-300/20 inline-block px-6 py-2 rounded-full bg-gold-300/5">
                    * Ceny platné od 1.1.2026
                </p>
</div>
</div>
</section>

<section className="py-24 bg-bg-800" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<h2 className="md:text-5xl reveal-on-scroll text-3xl text-white font-serif text-center mb-16">Fotogalerie</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative overflow-hidden aspect-[3/4] reveal-on-scroll">
<img alt="Účes 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 hover:opacity-100" src="https://kadernictvihavlickova.websnadno.cz/obrazek_whatsapp__2024-04-16_v_20.32.56_47c70794.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-bg-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-gold-300 text-xs uppercase tracking-widest">Detail</span>
</div>
</div>
<div className="group relative overflow-hidden aspect-[4/3] md:aspect-[3/4] reveal-on-scroll" style={{animationDelay: '0.1s'}}>
<img alt="Účes 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 hover:opacity-100" src="https://kadernictvihavlickova.websnadno.cz/obrazek_whatsapp__2024-04-16_v_20.32.57_76b3811e.jpg"/>
</div>
<div className="group relative overflow-hidden aspect-[4/3] md:aspect-[3/4] reveal-on-scroll" style={{animationDelay: '0.2s'}}>
<img alt="Účes 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 hover:opacity-100" src="https://kadernictvihavlickova.websnadno.cz/obrazek_whatsapp__2024-04-16_v_20.32.57_130f6e93.jpg"/>
</div>
<div className="group relative overflow-hidden aspect-[3/4] reveal-on-scroll" style={{animationDelay: '0.3s'}}>
<img alt="Účes 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 hover:opacity-100" src="https://kadernictvihavlickova.websnadno.cz/obrazek_whatsapp__2024-04-16_v_20.32.58_455865b3.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-900 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="space-y-12 reveal-on-scroll">
<div>
<span className="text-gold-300 text-xs uppercase tracking-widest mb-2 block">Kontakt</span>
<h2 className="text-4xl font-serif text-white">Kde nás <span className="italic text-neutral-600">najdete</span></h2>
</div>
<div className="space-y-8">
<div className="flex gap-6 items-start group">
<div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-gold-300 group-hover:bg-gold-300 group-hover:text-black transition-all">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-serif text-lg mb-1">Adresa</h4>
<p className="text-neutral-400 text-sm leading-relaxed">
                                    Běloruská 6<br/>
                                    62500 Brno - Bohunice
                                </p>
</div>
</div>
<div className="flex gap-6 items-start group">
<div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-gold-300 group-hover:bg-gold-300 group-hover:text-black transition-all">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-serif text-lg mb-1">Objednávky</h4>
<p className="text-neutral-400 text-sm mb-2">Objednávky pouze telefonicky předem.</p>
<a className="text-white text-xl hover:text-gold-300 transition-colors" href="tel:608767538">608 767 538</a>
</div>
</div>
<div className="flex gap-6 items-start group">
<div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-gold-300 group-hover:bg-gold-300 group-hover:text-black transition-all">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-serif text-lg mb-1">Otevírací doba</h4>
<ul className="text-neutral-400 text-sm space-y-1">
<li className="flex justify-between w-40"><span>Po - Čt</span> <span className="text-white">10:00 - 18:00</span></li>
<li className="flex justify-between w-40 text-neutral-600"><span>Pá - Ne</span> <span>Zavřeno</span></li>
</ul>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-bg-800 border border-white/10 rounded-sm overflow-hidden reveal-on-scroll">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.2323789423635!2d16.574686976865612!3d49.17697487932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471295b9b9a67a0d%3A0x6c764c6e9a0f0a0!2sB%C4%9Blorusk%C3%A1%206%2C%20625%2000%20Brno-Bohunice!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-bg-900/90 backdrop-blur-md p-6 border border-white/10">
<span className="text-gold-300 text-xs uppercase tracking-widest block mb-1">Kadeřnictví</span>
<span className="text-white font-serif text-lg">Petra Havlíčková</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-serif text-xl text-white tracking-widest">PETRA HAVLÍČKOVÁ</span>
<p className="text-neutral-500 text-xs mt-2">© 2024 Všechna práva vyhrazena.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white text-xs uppercase tracking-widest transition-colors" href="#">Instagram</a>
<a className="text-neutral-500 hover:text-white text-xs uppercase tracking-widest transition-colors" href="#">Facebook</a>
</div>
</div>
</footer>

    </>
  );
}
