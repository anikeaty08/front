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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="text-2xl font-serif text-white tracking-tight hover:text-white/80 transition-colors" href="#">
                    SalonSalon
                </a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#home">Salon</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#about">O nás</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#pricing">Ceník</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#gallery">Galerie</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#contact">Kontakt</a>
</div>

<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Salon Interior" className="w-full h-full object-cover opacity-40" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/salon05-e1570519484697.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Selective Professional
            </div>
<h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight tracking-tight">
                Krása začíná <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-slate-400">zdravými vlasy</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                Kadeřnické služby a prodej vlasové kosmetiky italské značky SELECTIVE PROFESSIONAL. Profesionální péče v srdci Vinohrad.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-[#0a0a0a] bg-white rounded-full hover:bg-slate-200 transition-all duration-200" href="#contact">
                    Objednat se
                </a>
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white border border-white/20 bg-white/5 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200" href="#pricing">
                    Prohlédnout ceník
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] relative border-b border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="mb-20">
<div className="flex items-center gap-2 mb-8 text-purple-400">
<iconify-icon height="24" icon="solar:scissors-square-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-widest uppercase">Náš Tým</span>
</div>
<h2 className="text-3xl md:text-4xl text-white mb-12 tracking-tight">V našem salonu stříhá Milan a Jirka</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10">
<img alt="Milan" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/ja01.jpg"/>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10">
<img alt="Jirka" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/ja02-e1570519539341.jpeg"/>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-900 border border-white/10">
<img alt="Team" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/my03.jpeg"/>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-8 text-purple-400">
<iconify-icon height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-widest uppercase">Atmosféra</span>
</div>
<h2 className="text-3xl md:text-4xl text-white mb-12 tracking-tight">V našem salonu hlídá Mia a Julli</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-xl overflow-hidden border border-white/10">
<img alt="Mia a Julli" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/pes04.jpeg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border border-white/10">
<img alt="Mia a Julli" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/pes03.jpeg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border border-white/10">
<img alt="Mia a Julli" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/pes02.jpeg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border border-white/10">
<img alt="Mia a Julli" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/pes01.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/50 border-b border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl md:text-4xl text-white mb-2 tracking-tight">Ceník Služeb</h2>
<p className="text-slate-400 mb-10 font-light">Ceny jsou uvedeny včetně DPH a mohou se lišit dle náročnosti.</p>
<div className="space-y-0">

<div className="flex justify-between items-baseline py-4 border-b border-white/10 hover:bg-white/5 px-4 rounded-lg -mx-4 transition-colors">
<span className="text-slate-200 font-medium">Střih krátké vlasy</span>
<span className="text-purple-300 font-medium">od 750 Kč</span>
</div>

<div className="flex justify-between items-baseline py-4 border-b border-white/10 hover:bg-white/5 px-4 rounded-lg -mx-4 transition-colors">
<span className="text-slate-200 font-medium">Střih středně dlouhé vlasy</span>
<span className="text-purple-300 font-medium">od 850 Kč</span>
</div>

<div className="flex justify-between items-baseline py-4 border-b border-white/10 hover:bg-white/5 px-4 rounded-lg -mx-4 transition-colors">
<span className="text-slate-200 font-medium">Střih dlouhé vlasy</span>
<span className="text-purple-300 font-medium">od 950 Kč</span>
</div>

<div className="py-6 border-b border-white/10 hover:bg-white/5 px-4 rounded-lg -mx-4 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<span className="text-slate-200 font-medium">Balíček č. 1</span>
<span className="text-purple-300 font-medium">od 1600 Kč</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-[80%]">
                                Barvení, mytí, maska a balzám, oplachování, střih, styling.
                            </p>
</div>

<div className="py-6 border-b border-white/10 hover:bg-white/5 px-4 rounded-lg -mx-4 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<span className="text-slate-200 font-medium">Balíček č. 2</span>
<span className="text-purple-300 font-medium">od 1750 Kč</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-[80%]">
                                Barvení, mytí, balzám, oplachování, melírování, mytí, maska, oplachování, střih, styling.
                            </p>
</div>
</div>
<p className="mt-8 text-sm text-slate-500 italic">* Dále cena dohodou.</p>
</div>

<div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden border border-white/10">
<img alt="Vlasová kosmetika Selective Professional" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="http://www.salonsalon.cz/wp-content/uploads/2021/09/kosmetika-768x1024.jpeg"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
<p className="text-white font-serif text-xl">Selective Professional</p>
<p className="text-slate-400 text-sm mt-1">Prémiová italská kosmetika</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a]" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl text-white mb-4 tracking-tight">Ukázky naší práce</h2>
<p className="text-slate-400 font-light">Inspirujte se proměnami našich klientek.</p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Hair style" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/vlasy16.jpeg"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Hair style" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/vlasy09.jpeg"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Hair style" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/vlasy17-e1570519240736.jpeg"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Hair style" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/vlasy13-e1570519400514.jpeg"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Hair style" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/vlasy15-e1570519034366.jpeg"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Hair style" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/vlasy01-e1570519477867.jpeg"/>
</div>
<div className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Hair style" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2021/07/hlava11-1.jpeg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/5 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl text-white mb-8 tracking-tight">Kde nás najdete</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 text-purple-400">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Rezervace</h4>
<p className="text-slate-400 text-lg">+420 606 562 164</p>
<p className="text-slate-500 text-sm mt-1">Provozovatel: Jiří Pokorný</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 text-purple-400">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Adresa</h4>
<p className="text-slate-400">Záhřebská 18, Praha 2, Vinohrady</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 text-purple-400">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-3">Otevírací doba</h4>
<div className="grid grid-cols-[80px_1fr] gap-y-2 text-sm text-slate-400">
<span>Pondělí</span> <span>11:00 – 21:00</span>
<span>Úterý</span> <span>11:00 – 21:00</span>
<span>Středa</span> <span>—</span>
<span>Čtvrtek</span> <span>11:00 – 21:00</span>
<span>Pátek</span> <span>11:00 – 21:00</span>
</div>
<p className="text-slate-500 text-xs mt-3">* Dále dle dohody</p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
<a className="block w-full h-full group" href="https://www.google.com/maps/place/Salon+Salon+kade%C5%99nictv%C3%AD/@50.0738863,14.4333863,16z/data=!4m5!3m4!1s0x470b94889d7e4fd5:0x3524e6e3754be4d9!8m2!3d50.07179!4d14.4369277" target="_blank">
<img alt="Mapa kadeřnictví" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="http://www.salonsalon.cz/wp-content/uploads/2019/10/mapa-1.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
<span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Otevřít mapu
                            </span>
</div>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-xl font-serif text-white tracking-tight">SalonSalon</span>
<p className="text-slate-500 text-sm mt-2">© 2026 SalonSalon. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
