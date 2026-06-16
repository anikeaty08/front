import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
gold: {
400: '#d4af37',
500: '#c5a028',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.25em',
},
animation: {
'fade-in': 'fadeIn 1.5s ease-out forwards',
'slide-up': 'slideUp 1s ease-out 0.3s forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
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
      

<header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white transition-all duration-500 hover:mix-blend-normal hover:bg-white/95 hover:backdrop-blur-md hover:text-stone-900 group border-b border-transparent hover:border-stone-100">
<div className="max-w-[1800px] mx-auto px-6 py-5 flex justify-between items-center">

<div className="flex items-center gap-6">
<div className="flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer hover:text-stone-400 transition-colors">
<span className="font-bold">DE</span>
<span className="opacity-50">|</span>
<span className="opacity-50">EN</span>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-stone-400 transition-colors" href="tel:+49123456789">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
</a>
</div>

<a className="absolute left-1/2 -translate-x-1/2 text-center flex flex-col items-center" href="#">
<span className="font-serif text-2xl tracking-tighter font-medium">HATTAT-DECKER</span>
</a>

<nav className="flex items-center gap-8">
<a className="text-xs uppercase tracking-widest hover:text-stone-400 transition-colors hidden md:block" href="#shop">Shop</a>
<a className="text-xs uppercase tracking-widest hover:text-stone-400 transition-colors" href="#contact">Kontakt</a>
<button className="relative group-hover:text-stone-900">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18"></span>
</button>
</nav>
</div>
</header>

<section className="relative h-screen w-full overflow-hidden bg-stone-900">

<div className="absolute inset-0 z-0">

<img alt="Champagne Village Church and Vineyards" className="w-full h-full object-cover opacity-60 animate-fade-in filter contrast-[0.95] saturate-[0.8] brightness-75" src="https://images.unsplash.com/photo-1568449902694-a2134a41f692?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/10"></div>
</div>
<div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
<span className="text-xs md:text-sm uppercase tracking-[0.2em] text-stone-300 mb-6 animate-slide-up opacity-0" style={{animationDelay: '0.2s'}}>
                Côteaux Sud d'Epernay, Champagne, France
            </span>
<h1 className="font-serif text-5xl md:text-8xl text-white leading-[0.9] tracking-tight mb-8 font-light animate-slide-up opacity-0" style={{animationDelay: '0.4s'}}>
                Tradition seit 1961
            </h1>
<p className="font-serif text-2xl md:text-3xl italic text-stone-200 font-light animate-slide-up opacity-0" style={{animationDelay: '0.6s'}}>
                Erlesen, elegant, außergewöhnlich
            </p>

<div className="mt-16 flex gap-8 opacity-60 text-white animate-slide-up" style={{animationDelay: '0.8s'}}>
<span className="iconify" data-icon="lucide:award" data-width="24" style={{strokeWidth: '1'}}></span>
<span className="iconify" data-icon="lucide:leaf" data-width="24" style={{strokeWidth: '1'}}></span>
<span className="iconify" data-icon="lucide:grape" data-width="24" style={{strokeWidth: '1'}}></span>
<span className="iconify" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1'}}></span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-b border-stone-200">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="group">
<div className="mb-4 text-stone-400 group-hover:text-stone-800 transition-colors">
<span className="iconify" data-icon="lucide:map-pin" data-width="28" style={{strokeWidth: '1.25'}}></span>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-900">Top-Lage</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">Südhänge in Épernay (Champagne, FR)</p>
</div>

<div className="group">
<div className="mb-4 text-stone-400 group-hover:text-stone-800 transition-colors">
<span className="iconify" data-icon="lucide:hourglass" data-width="28" style={{strokeWidth: '1.25'}}></span>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-900">Geduld &amp; Zeit</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">Mind. 3 Jahre gereift und mind. 6 Monate im Lager.</p>
</div>

<div className="group">
<div className="mb-4 text-stone-400 group-hover:text-stone-800 transition-colors">
<span className="iconify" data-icon="lucide:hand-metal" data-width="28" style={{strokeWidth: '1.25'}}></span>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-900">Handwerk</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">Per Hand gerüttelt und degorgiert.</p>
</div>

<div className="group">
<div className="mb-4 text-stone-400 group-hover:text-stone-800 transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="28" style={{strokeWidth: '1.25'}}></span>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-900">Tradition</h3>
<p className="text-sm text-stone-600 font-light leading-relaxed">60+ Jahre Familientradition &amp; Top-Lieferant für Feinkost.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="bg-stone-900 text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors w-full sm:w-auto text-center" href="#shop">
                    Champagne kaufen
                </a>
<a className="bg-transparent border border-stone-300 text-stone-900 px-8 py-4 text-xs uppercase tracking-widest hover:bg-white transition-colors w-full sm:w-auto text-center" href="#b2b">
                    Gewerbekunde? Hier anfragen
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white overflow-hidden">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1">
<span className="text-xs uppercase tracking-widest text-stone-400 block mb-6">Weingut in “Côteaux Sud d’Epernay”</span>
<h2 className="font-serif text-4xl md:text-6xl text-stone-900 leading-[1.1] tracking-tight mb-8 font-light">
                    Die perfekte Lage zwischen <br/> <span className="italic text-stone-500">Vallée de la Marne</span> und <span className="italic text-stone-500">Côte des Blancs</span>
</h2>
<div className="text-stone-600 font-light text-sm md:text-base leading-relaxed space-y-6 max-w-xl">
<p>
                        Unser Weingut liegt im Herzen der Côteaux Sud d’Epernay, einem außergewöhnlichen Terroir an der Schnittstelle zweier ikonischer Champagnerregionen: der Vallée de la Marne und der Côte des Blancs. Diese besondere Position vereint das Beste aus beiden Welten – die fruchtbetonte Intensität der Marne und die elegante Mineralität der Blancs.
                    </p>
<p>
                        Die Vielseitigkeit der Böden, von kalkreichen Hängen bis hin zu tonhaltigen Parzellen, spiegelt sich in unserer Rebsortenverteilung wider: Pinot Meunier, Chardonnay und Pinot Noir gedeihen hier jeweils unter idealen Voraussetzungen und formen gemeinsam das Profil unserer Cuvées.
                    </p>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[60vh] lg:h-[80vh] w-full overflow-hidden">
<img alt="Terroir Landscape" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105" src="https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 text-white text-[10px] uppercase tracking-widest bg-stone-900/50 backdrop-blur-sm px-4 py-2">
                    Südhänge in Épernay
                </div>
</div>
</div>
</section>

<section className="w-full bg-stone-50 border-t border-stone-200">
<div className="grid grid-cols-1 md:grid-cols-3 h-auto divide-y md:divide-y-0 md:divide-x divide-stone-200">

<div className="group relative h-[80vh] flex flex-col justify-end p-10 overflow-hidden bg-stone-100 hover:bg-stone-200 transition-colors duration-700">

<img alt="Meunier" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-700 grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1596614120359-99433433878b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<span className="block text-4xl font-serif italic text-stone-300 mb-4 group-hover:text-stone-400 transition-colors">~46.7%</span>
<h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Pinot Meunier</h3>
<p className="text-xs uppercase tracking-widest text-stone-500 mb-6 group-hover:text-stone-800">Frisch, verspielt und charaktervoll</p>
<p className="text-sm font-light text-stone-600 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Bekannt für seine feine Aromatik und lebendige Frische ist Pinot Meunier die heimliche Seele der Champagne. Besonders auf den tonhaltigeren Böden im Westen gedeiht der Meunier hervorragend.
                    </p>
</div>
</div>

<div className="group relative h-[80vh] flex flex-col justify-end p-10 overflow-hidden bg-white hover:bg-stone-50 transition-colors duration-700">
<img alt="Chardonnay" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-700 grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1601267426174-889d38072ae0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<span className="block text-4xl font-serif italic text-stone-300 mb-4 group-hover:text-stone-400 transition-colors">Majorität</span>
<h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Chardonnay</h3>
<p className="text-xs uppercase tracking-widest text-stone-500 mb-6 group-hover:text-stone-800">Fein, elegant und mineralisch</p>
<p className="text-sm font-light text-stone-600 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Chardonnay aus den östlichen Lagen steht für Finesse und zeitlose Raffinesse. Das Zusammenspiel aus mineralreichen Böden und kühleren Mikroklimata bringt Klarheit und Spannung.
                    </p>
</div>
</div>

<div className="group relative h-[80vh] flex flex-col justify-end p-10 overflow-hidden bg-stone-900 hover:bg-stone-800 transition-colors duration-700 text-stone-100">
<img alt="Pinot Noir" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay" src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<span className="block text-4xl font-serif italic text-stone-600 mb-4 group-hover:text-stone-500 transition-colors">12.3%</span>
<h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Pinot Noir</h3>
<p className="text-xs uppercase tracking-widest text-stone-400 mb-6 group-hover:text-stone-300">Strukturiert, kraftvoll und voller Tiefe</p>
<p className="text-sm font-light text-stone-400 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        Pinot Noir ist die kräftige, charakterbildende Komponente. Auf ausgewählten Hanglagen mit guter Sonneneinstrahlung zeigt der Pinot Noir seine ganze Stärke: Struktur und Ausdruck.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-16">
<span className="text-xs uppercase tracking-widest text-stone-500 block mb-4">Die Philosophie</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-light">
                    Anbau, Weinlese <span className="italic text-stone-400">&amp;</span> Reifung
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="bg-white p-10 shadow-sm border border-stone-100">
<ul className="space-y-8">
<li className="flex gap-4 items-start">
<span className="iconify text-stone-400 mt-1 flex-shrink-0" data-icon="lucide:building-2" data-width="20"></span>
<div>
<h4 className="font-serif text-xl mb-1">Genossenschaft Chavot-Courcourt</h4>
<p className="text-sm text-stone-500 font-light">Seit 80 Jahren Teil der Winzergenossenschaft. Regionale Expertise und tägliche Qualitätskontrollen.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<span className="iconify text-stone-400 mt-1 flex-shrink-0" data-icon="lucide:calendar-clock" data-width="20"></span>
<div>
<h4 className="font-serif text-xl mb-1">Die Weinlese</h4>
<p className="text-sm text-stone-500 font-light">Erntezeit von Ende August bis Mitte September. Unterstützung durch 15-köpfige Familie &amp; Freunde.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<span className="iconify text-stone-400 mt-1 flex-shrink-0" data-icon="lucide:sprout" data-width="20"></span>
<div>
<h4 className="font-serif text-xl mb-1">Nachhaltiger Anbau</h4>
<p className="text-sm text-stone-500 font-light">Gezielter Pflanzenschutz, schonende Düngung, Biodiversitätsschutz und reduzierter CO₂-Fußabdruck.</p>
</div>
</li>
</ul>
</div>
<div className="relative h-full min-h-[400px] w-full bg-stone-200">
<img alt="Grape Harvest" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1598155523122-38423bb4d6cf?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-stone-200 bg-white">
<div className="max-w-[1800px] mx-auto text-center">
<span className="text-xs uppercase tracking-widest text-stone-400 block mb-12">Hattat-Decker in Medien</span>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<a className="font-serif text-2xl hover:text-stone-900 transition-colors" href="#">Le Guide Michelin</a>
<a className="font-serif text-2xl hover:text-stone-900 transition-colors" href="#">Gault&amp;Millau</a>
<a className="font-serif text-2xl hover:text-stone-900 transition-colors" href="#">Decanter</a>
<a className="font-serif text-2xl hover:text-stone-900 transition-colors" href="#">Bayerischer Rundfunk</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden" id="shop">

<div className="absolute top-0 right-0 w-1/3 h-full bg-stone-800/20 blur-3xl rounded-full translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-stone-800/20 blur-3xl rounded-full -translate-x-1/3"></div>
<div className="px-6 mb-12 max-w-[1800px] mx-auto flex justify-between items-end relative z-10">
<div>
<span className="text-xs uppercase tracking-widest text-stone-500 block mb-2">Die Kollektion</span>
<h2 className="font-serif text-4xl md:text-5xl font-light">Ausgewählte Cuvées</h2>
</div>

<div className="hidden md:flex gap-6 items-center">
<span className="text-[10px] uppercase tracking-widest text-stone-600">Drag to Explore</span>
<div className="flex gap-2">
<div className="w-12 h-[1px] bg-stone-700"></div>
<span className="iconify text-stone-500" data-icon="lucide:move-right" data-width="16"></span>
</div>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 no-scrollbar w-full relative z-10">

<div className="snap-center shrink-0 w-[90vw] md:w-[460px] h-[640px] relative group bg-stone-950/50 border border-stone-800 hover:border-stone-700 transition-all duration-700 overflow-hidden flex flex-col items-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-96 bg-stone-700/20 blur-[60px] rounded-full group-hover:bg-stone-600/30 transition-colors duration-700"></div>

<div className="absolute inset-0 p-8 flex flex-col justify-between z-20">

<div className="flex justify-between items-start w-full opacity-80">
<span className="text-[10px] uppercase tracking-[0.25em] text-stone-400">Highlight des Hauses</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 border border-stone-800 px-2 py-1 rounded-sm">Signature</span>
</div>


<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<img alt="Blanc de Blancs Bottle" className="h-[75%] object-contain mix-blend-screen contrast-125 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-95 group-hover:scale-100" src="https://images.unsplash.com/photo-1594140700877-c91845184852?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">

<h3 className="font-serif text-6xl text-white/10 italic leading-none whitespace-nowrap blur-[1px]">Blanc de Blancs</h3>
</div>

<div className="mt-auto w-full relative z-30">
<div className="text-center mb-8">
<h3 className="font-serif text-4xl text-stone-100 mb-2">Blanc de Blancs</h3>
<p className="text-sm font-light text-stone-400 italic mb-4 opacity-80 group-hover:opacity-100 transition-opacity">Die Essenz des Chardonnay.</p>

<div className="flex justify-center gap-3 text-[10px] uppercase tracking-widest text-stone-500 mb-8">
<span>Frisch</span>
<span className="text-stone-700">•</span>
<span>Mineralisch</span>
<span className="text-stone-700">•</span>
<span>Elegant</span>
</div>
</div>

<div className="border-t border-stone-800 pt-6 grid grid-cols-3 gap-2 text-center">
<div>
<span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Traube</span>
<span className="text-xs text-stone-300">100% Chard.</span>
</div>
<div className="border-l border-stone-800">
<span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Temp</span>
<span className="text-xs text-stone-300">7–9 °C</span>
</div>
<div className="border-l border-stone-800">
<span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Dosage</span>
<span className="text-xs text-stone-300">9 g/L</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-full bg-stone-900/90 flex flex-col justify-center items-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
<p className="text-xs text-stone-400 max-w-[200px] text-center mb-6 font-light leading-relaxed">
                                Ein Chardonnay von beeindruckender Finesse. Zitrusnoten, weiße Blüten und feine Perlage.
                            </p>
<button className="bg-white text-stone-950 px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors">
                                In den Warenkorb
                            </button>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[90vw] md:w-[460px] h-[640px] relative group bg-stone-950/50 border border-stone-800 hover:border-stone-700 transition-all duration-700 overflow-hidden flex flex-col items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-96 bg-stone-700/20 blur-[60px] rounded-full group-hover:bg-gold-500/10 transition-colors duration-700"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
<div className="flex justify-between items-start w-full opacity-80">
<span className="text-[10px] uppercase tracking-[0.25em] text-stone-400">Grand Vintage</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 border border-stone-800 px-2 py-1 rounded-sm">2015</span>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<img alt="Millésime" className="h-[75%] object-contain mix-blend-screen contrast-125 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-95 group-hover:scale-100" src="https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
<h3 className="font-serif text-6xl text-white/10 italic leading-none whitespace-nowrap blur-[1px]">Millésime</h3>
</div>
<div className="mt-auto w-full relative z-30">
<div className="text-center mb-8">
<h3 className="font-serif text-4xl text-stone-100 mb-2">Millésime 2015</h3>
<p className="text-sm font-light text-stone-400 italic mb-4 opacity-80 group-hover:opacity-100 transition-opacity">Zeitlose Eleganz in Gold.</p>
<div className="flex justify-center gap-3 text-[10px] uppercase tracking-widest text-stone-500 mb-8">
<span>Reif</span><span className="text-stone-700">•</span><span>Komplex</span><span className="text-stone-700">•</span><span>Honig</span>
</div>
</div>
<div className="border-t border-stone-800 pt-6 grid grid-cols-3 gap-2 text-center">
<div><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Traube</span><span className="text-xs text-stone-300">Blend</span></div>
<div className="border-l border-stone-800"><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Temp</span><span className="text-xs text-stone-300">10–12 °C</span></div>
<div className="border-l border-stone-800"><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Dosage</span><span className="text-xs text-stone-300">6 g/L</span></div>
</div>
<div className="absolute bottom-0 left-0 w-full h-full bg-stone-900/90 flex flex-col justify-center items-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
<p className="text-xs text-stone-400 max-w-[200px] text-center mb-6 font-light leading-relaxed">Ein Jahrgang von außergewöhnlicher Reife. Komplexe Aromen von getrockneten Früchten.</p>
<button className="bg-white text-stone-950 px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors">In den Warenkorb</button>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[90vw] md:w-[460px] h-[640px] relative group bg-stone-950/50 border border-stone-800 hover:border-stone-700 transition-all duration-700 overflow-hidden flex flex-col items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-96 bg-stone-700/20 blur-[60px] rounded-full group-hover:bg-red-900/10 transition-colors duration-700"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
<div className="flex justify-between items-start w-full opacity-80">
<span className="text-[10px] uppercase tracking-[0.25em] text-stone-400">Terroir Pur</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 border border-stone-800 px-2 py-1 rounded-sm">Brut Nature</span>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<img alt="Blanc de Noirs" className="h-[75%] object-contain mix-blend-screen contrast-125 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-95 group-hover:scale-100" src="https://images.unsplash.com/photo-1620217572390-5a3d00b6540c?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
<h3 className="font-serif text-6xl text-white/10 italic leading-none whitespace-nowrap blur-[1px]">Noir</h3>
</div>
<div className="mt-auto w-full relative z-30">
<div className="text-center mb-8">
<h3 className="font-serif text-4xl text-stone-100 mb-2">Blanc de Noirs</h3>
<p className="text-sm font-light text-stone-400 italic mb-4 opacity-80 group-hover:opacity-100 transition-opacity">Kraftvoller Purismus.</p>
<div className="flex justify-center gap-3 text-[10px] uppercase tracking-widest text-stone-500 mb-8">
<span>Dunkel</span><span className="text-stone-700">•</span><span>Strukturiert</span><span className="text-stone-700">•</span><span>Pur</span>
</div>
</div>
<div className="border-t border-stone-800 pt-6 grid grid-cols-3 gap-2 text-center">
<div><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Traube</span><span className="text-xs text-stone-300">PM &amp; PN</span></div>
<div className="border-l border-stone-800"><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Temp</span><span className="text-xs text-stone-300">8–10 °C</span></div>
<div className="border-l border-stone-800"><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Dosage</span><span className="text-xs text-stone-300">0 g/L</span></div>
</div>
<div className="absolute bottom-0 left-0 w-full h-full bg-stone-900/90 flex flex-col justify-center items-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
<p className="text-xs text-stone-400 max-w-[200px] text-center mb-6 font-light leading-relaxed">100% dunkle Trauben, keine Dosage. Der reine Ausdruck des Terroirs.</p>
<button className="bg-white text-stone-950 px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors">In den Warenkorb</button>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[90vw] md:w-[460px] h-[640px] relative group bg-stone-950/50 border border-stone-800 hover:border-stone-700 transition-all duration-700 overflow-hidden flex flex-col items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-96 bg-stone-700/20 blur-[60px] rounded-full group-hover:bg-red-500/10 transition-colors duration-700"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
<div className="flex justify-between items-start w-full opacity-80">
<span className="text-[10px] uppercase tracking-[0.25em] text-stone-400">Cuvée Rosé</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 border border-stone-800 px-2 py-1 rounded-sm">Rosé</span>
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<img alt="Rosé" className="h-[75%] object-contain mix-blend-screen contrast-125 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-95 group-hover:scale-100" src="https://images.unsplash.com/photo-1558582736-231a4773c3b0?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
<h3 className="font-serif text-6xl text-white/10 italic leading-none whitespace-nowrap blur-[1px]">Rosé</h3>
</div>
<div className="mt-auto w-full relative z-30">
<div className="text-center mb-8">
<h3 className="font-serif text-4xl text-stone-100 mb-2">Rosé</h3>
<p className="text-sm font-light text-stone-400 italic mb-4 opacity-80 group-hover:opacity-100 transition-opacity">Verführung in Rot.</p>
<div className="flex justify-center gap-3 text-[10px] uppercase tracking-widest text-stone-500 mb-8">
<span>Beeren</span><span className="text-stone-700">•</span><span>Fein</span><span className="text-stone-700">•</span><span>Lebendig</span>
</div>
</div>
<div className="border-t border-stone-800 pt-6 grid grid-cols-3 gap-2 text-center">
<div><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Traube</span><span className="text-xs text-stone-300">Blend</span></div>
<div className="border-l border-stone-800"><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Temp</span><span className="text-xs text-stone-300">9–11 °C</span></div>
<div className="border-l border-stone-800"><span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">Dosage</span><span className="text-xs text-stone-300">8 g/L</span></div>
</div>
<div className="absolute bottom-0 left-0 w-full h-full bg-stone-900/90 flex flex-col justify-center items-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
<p className="text-xs text-stone-400 max-w-[200px] text-center mb-6 font-light leading-relaxed">Rote Beerenfrüchte und eine feine Perlage. Ein verführerischer Rosé für besondere Momente.</p>
<button className="bg-white text-stone-950 px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-200 transition-colors">In den Warenkorb</button>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[100px] flex items-center justify-center text-stone-600 opacity-50">
<span className="iconify" data-icon="lucide:arrow-right" data-width="24"></span>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-200" id="b2b">
<div className="max-w-4xl mx-auto text-center">
<span className="iconify mx-auto mb-8 text-stone-500" data-icon="lucide:utensils-crossed" data-width="32" style={{strokeWidth: '1'}}></span>
<h2 className="font-serif text-4xl md:text-5xl mb-8 text-stone-900">Champagner direkt beim Winzer kaufen</h2>
<p className="text-stone-600 font-light leading-relaxed mb-12">
                Winzerchampagner steht für Herkunft, Handwerk und unverfälschte Qualität. Für unsere Partner in der Gastronomie und Hotellerie bieten wir exklusive Konditionen und persönliche Beratung. Bringen Sie ein Stück Côteaux Sud d'Epernay auf Ihre Karte.
            </p>
<a className="inline-block border border-stone-900 px-10 py-4 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors" href="#contact">
                Anfrage für Gastronomie
            </a>
</div>
</section>

<section className="py-32 px-6 bg-stone-50">
<div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
<div className="lg:w-1/3 sticky top-32 h-fit">
<span className="text-xs uppercase tracking-widest text-stone-500 mb-6 block">Die Geschichte</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">Familienhandwerk seit über 60 Jahren</h2>
<p className="text-stone-600 text-sm font-light leading-relaxed">
                    Verwurzelt in der Champagne, verbunden durch Generationen. Jede Flasche erzählt die Geschichte unserer Familie.
                </p>
</div>
<div className="lg:w-2/3 border-l border-stone-300 pl-8 md:pl-16 space-y-20">

<div className="relative group">
<span className="absolute -left-[41px] md:-left-[73px] top-2 w-3 h-3 rounded-full bg-stone-300 group-hover:bg-stone-900 transition-colors"></span>
<span className="block text-4xl font-serif text-stone-300 mb-2 group-hover:text-stone-900 transition-colors">1853</span>
<h3 className="text-lg font-medium mb-2">Die Gründung</h3>
<p className="text-stone-500 font-light text-sm max-w-md">Die ersten Reben werden gepflanzt. Der Grundstein für das heutige Weingut wird gelegt.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] md:-left-[73px] top-2 w-3 h-3 rounded-full bg-stone-300 group-hover:bg-stone-900 transition-colors"></span>
<span className="block text-4xl font-serif text-stone-300 mb-2 group-hover:text-stone-900 transition-colors">1961</span>
<h3 className="text-lg font-medium mb-2">Simone &amp; Robert</h3>
<p className="text-stone-500 font-light text-sm max-w-md">Maison Côteaux wird offiziell von Simone und Robert Hattat gegründet.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] md:-left-[73px] top-2 w-3 h-3 rounded-full bg-stone-300 group-hover:bg-stone-900 transition-colors"></span>
<span className="block text-4xl font-serif text-stone-300 mb-2 group-hover:text-stone-900 transition-colors">2005</span>
<h3 className="text-lg font-medium mb-2">Neue Generation</h3>
<p className="text-stone-500 font-light text-sm max-w-md">Die nächste Generation übernimmt die Verantwortung und führt moderne, nachhaltige Methoden ein.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] md:-left-[73px] top-2 w-3 h-3 rounded-full bg-stone-300 group-hover:bg-stone-900 transition-colors"></span>
<span className="block text-4xl font-serif text-stone-300 mb-2 group-hover:text-stone-900 transition-colors">2012</span>
<h3 className="text-lg font-medium mb-2">Nach Bayern</h3>
<p className="text-stone-500 font-light text-sm max-w-md">Expansion des Vertriebs und Aufbau einer zweiten Heimat in Bayern.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] md:-left-[73px] top-2 w-3 h-3 rounded-full bg-stone-900"></span>
<span className="block text-4xl font-serif text-stone-900 mb-2">2018</span>
<h3 className="text-lg font-medium mb-2">Offiziell Winzerin</h3>
<p className="text-stone-500 font-light text-sm max-w-md">Vollständige Übernahme und Zertifizierung als unabhängige Winzerin.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-100">
<div className="max-w-3xl mx-auto text-center">
<span className="text-xs uppercase tracking-widest text-stone-400 mb-8 block">Hattat-Decker im Fernsehen</span>
<blockquote className="font-serif text-2xl md:text-3xl italic text-stone-800 leading-relaxed mb-8">
                "Ein Champagner, der die Seele des Terroirs einfängt. Authentisch, rein und von beeindruckender Qualität."
            </blockquote>
<cite className="text-xs uppercase tracking-widest text-stone-500 not-italic">
                — Bayerischer Rundfunk (BR Fernsehen), Mai 2023
            </cite>
</div>
</section>

<section className="py-24 px-6 bg-stone-50">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<a className="group bg-white p-8 border border-stone-100 hover:border-stone-300 transition-all shadow-sm hover:shadow-md" href="#shop">
<span className="iconify text-stone-400 mb-4 group-hover:text-stone-900 transition-colors" data-icon="lucide:shopping-bag" data-width="24"></span>
<h3 className="font-serif text-xl mb-2">Online Shop</h3>
<p className="text-xs text-stone-500">Perlende Perfektion für jeden Anlass.</p>
</a>
<a className="group bg-white p-8 border border-stone-100 hover:border-stone-300 transition-all shadow-sm hover:shadow-md" href="#">
<span className="iconify text-stone-400 mb-4 group-hover:text-stone-900 transition-colors" data-icon="lucide:wine" data-width="24"></span>
<h3 className="font-serif text-xl mb-2">Verkostungen</h3>
<p className="text-xs text-stone-500">Erleben Sie Champagner vor Ort.</p>
</a>
<a className="group bg-white p-8 border border-stone-100 hover:border-stone-300 transition-all shadow-sm hover:shadow-md" href="#b2b">
<span className="iconify text-stone-400 mb-4 group-hover:text-stone-900 transition-colors" data-icon="lucide:briefcase" data-width="24"></span>
<h3 className="font-serif text-xl mb-2">B2B &amp; Gastro</h3>
<p className="text-xs text-stone-500">Exklusive Angebote für Gewerbe.</p>
</a>
<a className="group bg-white p-8 border border-stone-100 hover:border-stone-300 transition-all shadow-sm hover:shadow-md" href="#">
<span className="iconify text-stone-400 mb-4 group-hover:text-stone-900 transition-colors" data-icon="lucide:gift" data-width="24"></span>
<h3 className="font-serif text-xl mb-2">Geschenke</h3>
<p className="text-xs text-stone-500">Edle Präsente für Partner &amp; Freunde.</p>
</a>
</div>
</section>

<footer className="bg-stone-900 text-stone-300 py-24 px-6 border-t border-stone-800" id="contact">
<div className="max-w-[1000px] mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl text-white mb-6">Kontaktieren Sie uns</h2>
<p className="text-sm font-light text-stone-500 max-w-md mx-auto">
                    Haben Sie Fragen zu unseren Champagnern oder wünschen Sie eine persönliche Beratung?
                </p>
</div>
<form className="max-w-lg mx-auto space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-500">Vorname</label>
<input className="w-full bg-stone-800/50 border-b border-stone-700 py-3 text-sm focus:outline-none focus:border-stone-400 focus:bg-stone-800 transition-colors" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-500">Nachname</label>
<input className="w-full bg-stone-800/50 border-b border-stone-700 py-3 text-sm focus:outline-none focus:border-stone-400 focus:bg-stone-800 transition-colors" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-500">E-Mail</label>
<input className="w-full bg-stone-800/50 border-b border-stone-700 py-3 text-sm focus:outline-none focus:border-stone-400 focus:bg-stone-800 transition-colors" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-500">Telefon</label>
<input className="w-full bg-stone-800/50 border-b border-stone-700 py-3 text-sm focus:outline-none focus:border-stone-400 focus:bg-stone-800 transition-colors" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-stone-500">Nachricht</label>
<textarea className="w-full bg-stone-800/50 border-b border-stone-700 py-3 text-sm focus:outline-none focus:border-stone-400 focus:bg-stone-800 transition-colors resize-none" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-stone-100 text-stone-900 text-xs uppercase tracking-widest hover:bg-white transition-colors mt-8" type="button">
                    Senden
                </button>
</form>
<div className="mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 uppercase tracking-widest">
<span>© 2024 Hattat-Decker</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-400" href="#">Impressum</a>
<a className="hover:text-stone-400" href="#">Datenschutz</a>
<a className="hover:text-stone-400" href="#">AGB</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
