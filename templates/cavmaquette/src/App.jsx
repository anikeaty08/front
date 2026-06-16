import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gold: '#fdb933',
burgundy: '#681822',
dark: '#1a1a1a',
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
900: '#1c1917',
}
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
},
backgroundImage: {
'grain': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
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
      

<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-stone-50/90 border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">

<a className="flex items-center gap-3 group relative py-2" href="#">

<img className="hidden" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgNTAwIj4KICA8cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSIxNSIgeT0iMTUiIHdpZHRoPSI0NzAiIGhlaWdodD0iNDcwIiBzdHJva2U9IiM2ODE4MjIiIHN0cm9rZS13aWR0aD0iMjAiIGZpbGw9Im5vbmUiLz4KICA8ZyBmaWxsPSIjNjgxODIyIj4KICAgIDxwYXRoIGQ9Ik0xNDAgMTUwIEMgODAgMTUwIDgwIDM1MCAxNDAgMzUwIEwgMTYwIDM1MCBMIDE2MCAzMDAgTCAxNDAgMzAwIEMgMTIwIDMwMCAxMjAgMjAwIDE0MCAyMDAgTCAxNjAgMjAwIEwgMTYwIDE1MCBaIiAvPgogICAgPHBhdGggZD0iTTM2MCAxNTAgTCAzNDAgMTUwIEwgMzgwIDM1MCBMIDQyMCAzNTAgTCA0NjAgMTUwIEwgNDQwIDE1MCBMIDQwMCAzMTAgWiIvPgogICAgPHBhdGggZD0iTTI1MCAxMDAgTCAyMzAgMTAwIEwgMjMwIDg1IEwgMjgwIDg1IEwgMjgwIDEwMCBMIDI2MCAxMDAgTCAyNjAgMTMwIEwgMjEwIDE1MCBMIDIyMCA0MDAgTCAyODAgNDAwIEwgMjkwIDE1MCBMIDI0MCAxMzAgWiIgLz4KICAgIDx0ZXh0IHg9IjI1MCIgeT0iNDQwIiBmb250LWZhbWlseT0iJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjIiPlJHV0lTVE8gJiBWSU48L3RleHQ+CiAgICA8cGF0aCBkPSJNMjUwIDQxMCBMIDI1MCA0NjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNjAiIC8+CiAgICA8dGV4dCB4PSIyNTAiIHk9"/>
<img alt="CAV Logo" className="group-hover:scale-105 transition-transform duration-300 w-20 h-20 object-contain rounded-sm shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2cca1c6-6a4f-4184-9e8a-a7fff35970c0_320w.png?w=800&amp;q=80"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-burgundy transition-colors" href="#moments">Occasions</a>
<a className="text-sm font-medium text-stone-600 hover:text-burgundy transition-colors" href="#cave">La Cave</a>
<a className="text-sm font-medium text-stone-600 hover:text-burgundy transition-colors" href="#produits">Produits</a>
<a className="px-5 py-2 rounded-full border border-burgundy/10 text-burgundy text-sm font-medium hover:bg-burgundy hover:text-gold transition-colors duration-300" href="#trouver">
                    Nous trouver
                </a>
</div>
<button className="md:hidden text-2xl text-burgundy">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-burgundy text-xs font-semibold uppercase tracking-wider mb-6 reveal border border-gold/20">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Au cœur de Gap
                </div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-dark mb-8 reveal reveal-delay-1 text-balance">
                    L'exception <br/> <i className="font-light text-stone-400">dans votre</i> <br/> verre.
                </h1>
<p className="text-stone-600 text-lg md:text-xl font-light max-w-lg mb-10 reveal reveal-delay-2 leading-relaxed">
                    Une cave chaleureuse où se rencontrent grands crus, pépites locales et spiritueux d'exception. Trouvez la bouteille parfaite pour chaque moment.
                </p>
<div className="flex items-center gap-6 reveal reveal-delay-3">
<a className="group flex items-center gap-3 bg-burgundy text-white pl-6 pr-2 py-2 rounded-full hover:bg-gold hover:text-burgundy transition-colors duration-500 shadow-lg shadow-burgundy/20" href="#moments">
<span className="text-sm font-semibold">Je choisis mon vin</span>
<span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-burgundy/10">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
<div className="md:col-span-5 relative reveal reveal-delay-3">
<div className="aspect-[4/5] rounded-t-[10rem] rounded-b-2xl overflow-hidden img-zoom-container relative shadow-2xl shadow-stone-200 border-4 border-white">
<img alt="Verre de vin ambiance" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl border border-stone-100 shadow-lg">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-burgundy uppercase tracking-widest font-semibold">Sélection</span>
<span className="font-serif text-lg text-dark font-medium">Vins &amp; Spiritueux</span>
</div>
<div className="w-10 h-10 rounded-full bg-gold text-burgundy flex items-center justify-center text-xl shadow-inner">
<iconify-icon icon="solar:wineglass-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-10 -right-10 w-full h-full border border-gold/40 rounded-t-[10rem] rounded-b-2xl"></div>
</div>
</div>
</header>

<div className="border-y border-burgundy/10 bg-white py-4 overflow-hidden whitespace-nowrap">
<div className="inline-flex animate-marquee gap-12 text-stone-300 font-serif text-4xl italic">
<span>Rouge</span> <span className="text-gold text-2xl not-italic">✦</span>
<span>Blanc</span> <span className="text-gold text-2xl not-italic">✦</span>
<span>Bulles</span> <span className="text-gold text-2xl not-italic">✦</span>
<span>Spiritueux</span> <span className="text-gold text-2xl not-italic">✦</span>
<span>Produits Locaux</span> <span className="text-gold text-2xl not-italic">✦</span>
<span>Bières Artisanales</span> <span className="text-gold text-2xl not-italic">✦</span>
<span>Rouge</span> <span className="text-gold text-2xl not-italic">✦</span>
<span>Blanc</span> <span className="text-gold text-2xl not-italic">✦</span>
</div>
</div>

<section className="py-20 px-6 bg-stone-50 border-b border-stone-200" id="moments">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<span className="text-burgundy uppercase tracking-widest text-xs font-bold mb-3 block">Guide interactif</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-dark">Quel est le moment ?</h2>
<p className="text-stone-500 font-light mt-3 max-w-xl mx-auto">Laissez-vous guider par l'occasion, nous trouvons la bouteille idéale.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<button className="group flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-2xl hover:border-gold hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-burgundy transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-dark group-hover:text-burgundy transition-colors">Entre amis</span>
</button>
<button className="group flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-2xl hover:border-gold hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-burgundy transition-colors">
<iconify-icon icon="solar:heart-shine-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-dark group-hover:text-burgundy transition-colors">Romantique</span>
</button>
<button className="group flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-2xl hover:border-gold hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-burgundy transition-colors">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-dark group-hover:text-burgundy transition-colors">Cadeau</span>
</button>
<button className="group flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-2xl hover:border-gold hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-burgundy transition-colors">
<iconify-icon icon="solar:fire-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-dark group-hover:text-burgundy transition-colors">Viande rouge</span>
</button>
<button className="group flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-2xl hover:border-gold hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-burgundy transition-colors">
<iconify-icon icon="solar:water-sun-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-dark group-hover:text-burgundy transition-colors">Poisson</span>
</button>
<button className="group flex flex-col items-center justify-center p-6 bg-white border border-stone-200 rounded-2xl hover:border-gold hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-stone-50 text-stone-400 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-burgundy transition-colors">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-semibold text-dark group-hover:text-burgundy transition-colors">Fromage</span>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="cave">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2 order-2 md:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 mt-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden img-zoom-container shadow-md">
<img alt="Cave details" className="img-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8db91a5d-520f-4394-9d49-52f54fc5bbfb_800w.png"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[3/4] rounded-2xl overflow-hidden img-zoom-container shadow-md">
<img alt="Vin texture" className="img-zoom w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ca3b236-c572-42ab-ba81-5ad5dea66eb2_800w.png"/>
</div>
<div className="p-6 bg-gold/10 rounded-2xl border border-gold/20">
<p className="font-serif text-2xl text-burgundy leading-tight">"Le vin est la poésie de la terre."</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 order-1 md:order-2">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-dark mb-6">Un cadre chaleureux pour les épicuriens.</h2>
<div className="w-12 h-1 bg-gradient-to-r from-burgundy to-gold mb-8"></div>
<p className="text-stone-600 font-light text-lg mb-6 leading-relaxed">
                        Situé au cœur de Gap, le Comptoir à Vin est bien plus qu'une boutique : c'est un lieu de vie. Nous avons conçu cet espace pour qu'il soit à la fois élégant et accueillant, où chaque bouteille raconte une histoire.
                    </p>
<p className="text-stone-600 font-light text-lg mb-8 leading-relaxed">
                        Que vous soyez à la recherche d'un grand cru classé, d'une bière artisanale locale ou d'un spiritueux rare, nous privilégions la qualité et l'authenticité.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-dark">
<iconify-icon className="text-gold text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium">Conseils personnalisés</span>
</li>
<li className="flex items-center gap-3 text-dark">
<iconify-icon className="text-gold text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium">Produits locaux &amp; Circuits courts</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="produits">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-burgundy uppercase tracking-widest text-xs font-bold mb-3 block">La Boutique</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-dark">Notre Collection</h2>
</div>
<div className="flex gap-2 mt-6 md:mt-0">
<button className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center hover:bg-burgundy hover:border-burgundy hover:text-white transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center hover:bg-burgundy hover:border-burgundy hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative cursor-pointer">
<div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative shadow-sm">
<div className="group-hover:bg-dark/0 transition-colors bg-[url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1600&amp;q=80)] bg-cover bg-center z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Vins" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-20 flex gap-2">
<span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase text-burgundy tracking-wide">Vins</span>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-2xl text-dark group-hover:text-burgundy transition-colors">Vins &amp; Champagnes</h3>
</div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold rounded-md mb-3">
<iconify-icon className="text-burgundy text-xs" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-bold text-burgundy uppercase tracking-wide">Idéal pour : Entre amis</span>
</div>
<p className="text-stone-500 font-light text-sm">Une sélection rigoureuse des meilleurs vignobles français et étrangers.</p>
</div>

<div className="group relative cursor-pointer mt-0 md:-mt-12">
<div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative border-4 border-white shadow-lg">
<div className="group-hover:bg-dark/0 transition-colors bg-center bg-[url(https://images.unsplash.com/photo-1562601579-599dec564e06?w=800&amp;q=80)] bg-cover z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Spiritueux" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase text-burgundy tracking-wide">Spiritueux</span>
</div>
</div>
<h3 className="font-serif text-2xl text-dark mb-2 group-hover:text-burgundy transition-colors">Alcools &amp; Spiritueux</h3>
<div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold rounded-md mb-3">
<iconify-icon className="text-burgundy text-xs" icon="solar:gift-linear"></iconify-icon>
<span className="text-xs font-bold text-burgundy uppercase tracking-wide">Idéal pour : Cadeau</span>
</div>
<p className="text-stone-500 font-light text-sm">Whisky, Rhum, Gin. Des eaux-de-vie d'exception pour les connaisseurs.</p>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative shadow-sm">
<div className="group-hover:bg-dark/0 transition-colors bg-[url(https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&amp;q=80)] bg-cover bg-center z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Local" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&amp;w=2002&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase text-burgundy tracking-wide">Local</span>
</div>
</div>
<h3 className="font-serif text-2xl text-dark mb-2 group-hover:text-burgundy transition-colors">Bières &amp; Terroir</h3>
<div className="inline-flex items-center gap-1.5 px-2 py-1 bg-gold rounded-md mb-3">
<iconify-icon className="text-burgundy text-xs" icon="solar:chef-hat-linear"></iconify-icon>
<span className="text-xs font-bold text-burgundy uppercase tracking-wide">Idéal pour : Fromage &amp; Apéro</span>
</div>
<p className="text-stone-500 font-light text-sm">Le meilleur de Gap et ses environs. Bières artisanales et produits gourmands.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark text-stone-100 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">L'art de recevoir et de conseiller.</h2>
<p className="text-stone-400 font-light text-lg mb-8">
                        Chez nous, chaque client est unique. Que vous prépariez un dîner entre amis, un cadeau d'entreprise ou que vous cherchiez simplement à vous faire plaisir, nous prenons le temps de vous guider.
                    </p>
<div className="flex flex-col gap-6">

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-burgundy/20 border border-burgundy/50 flex items-center justify-center shrink-0 text-gold">
<iconify-icon icon="solar:wineglass-triangle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-white">Sélection sur-mesure</h4>
<p className="text-sm text-stone-500 font-light mt-1">Nous trouvons la bouteille parfaite pour votre budget et vos goûts.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-burgundy/20 border border-burgundy/50 flex items-center justify-center shrink-0 text-gold">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg text-white">Coffrets Cadeaux</h4>
<p className="text-sm text-stone-500 font-light mt-1">Des compositions élégantes pour toutes les occasions.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gold/10 rounded-full blur-3xl opacity-20"></div>
<div className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-3xl relative">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
<span className="font-serif text-xl">Horaires d'ouverture</span>
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</div>
<ul className="space-y-4 font-light text-stone-300">
<li className="flex justify-between">
<span>Mardi - Jeudi</span>
<span>10:00 - 12:30 / 15:00 - 19:30</span>
</li>
<li className="flex justify-between">
<span>Vendredi - Samedi</span>
<span>10:00 - 19:30</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/10 text-center">
<p className="font-serif italic text-gold">"La vie est trop courte pour boire du mauvais vin."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-stone-200" id="trouver">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12">

<div className="md:w-1/3 flex flex-col justify-center">
<iconify-icon className="text-4xl text-burgundy mb-6" icon="solar:map-point-wave-linear"></iconify-icon>
<h2 className="font-serif text-4xl tracking-tight text-dark mb-6">Nous rendre visite</h2>
<p className="text-stone-500 font-light mb-8 text-lg">
                        Venez découvrir notre sélection en boutique. Parking disponible pour charger vos caisses en toute simplicité.
                    </p>
<div className="space-y-6">
<div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 group hover:border-gold/50 hover:bg-gold/5 transition-colors">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-dark mt-1" icon="solar:signpost-2-linear"></iconify-icon>
<div>
<h4 className="font-medium text-dark">Adresse</h4>
<p className="text-stone-600 font-light mt-1">43 Avenue Emile Didier<br/>05000 Gap</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-burgundy font-semibold border-b border-burgundy/20 pb-1 hover:border-gold hover:text-gold transition-colors" href="https://maps.google.com/?q=43+Av.+Emile+Didier,+05000+Gap" target="_blank">
                            Itinéraire Google Maps
                            <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="md:w-2/3 h-[400px] md:h-auto rounded-3xl overflow-hidden shadow-2xl shadow-stone-200 border border-stone-100 relative">
<iframe className="w-full h-full absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700" frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?q=43%20Av.%20Emile%20Didier%2C%2005000%20Gap&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="Comptoir à Vin Map" width="100%">
</iframe>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 overflow-hidden">

<div className="absolute inset-0 bg-burgundy z-0"></div>
<div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')] opacity-5 md:opacity-10 pointer-events-none"></div>

<div className="absolute top-10 right-10 opacity-10 text-gold animate-float z-0">
<iconify-icon icon="solar:wineglass-triangle-linear" width="120"></iconify-icon>
</div>
<div className="absolute bottom-10 left-10 opacity-10 text-white animate-float-delayed z-0">
<iconify-icon icon="solar:bottle-linear" width="100"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-6 border border-gold/20 backdrop-blur-sm">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                Club Privilège
            </div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white mb-6">
                Ne manquez aucune <span className="italic text-gold font-light">dégustation.</span>
</h2>
<p className="text-stone-300 font-light text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Rejoignez notre cercle d'amateurs pour recevoir nos invitations exclusives, nos arrivages rares et nos conseils de saison.
            </p>
<form className="max-w-md mx-auto group">
<div className="relative flex items-center">
<div className="absolute left-4 text-stone-400 group-focus-within:text-gold transition-colors duration-300">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<input className="w-full pl-12 pr-32 py-4 bg-white/5 border border-white/20 rounded-full text-white placeholder-stone-400 focus:outline-none focus:border-gold focus:bg-white/10 focus:ring-1 focus:ring-gold transition-all duration-300" placeholder="Votre adresse email" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gold hover:bg-white text-burgundy font-medium px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(253,185,51,0.3)] flex items-center gap-2" type="submit">
<span>S'inscrire</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="mt-4 flex items-center justify-center gap-2">
<label className="custom-checkbox flex items-center cursor-pointer relative">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-stone-500 rounded flex items-center justify-center transition-colors">
<iconify-icon className="text-burgundy text-[10px] opacity-0 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-2 text-xs text-stone-400 font-light hover:text-stone-300 transition-colors">J'accepte de recevoir les actualités du Comptoir.</span>
</label>
</div>
</form>
</div>
</section>

<footer className="bg-dark text-stone-400 py-16 px-6 border-t-4 border-gold" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6 text-white" href="#">

<img alt="CAV Logo" className="bg-[#232323] w-24 h-24 object-contain rounded-sm pt-1 pr-1 pb-1 pl-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2cca1c6-6a4f-4184-9e8a-a7fff35970c0_320w.png"/>
</a>
<p className="text-sm font-light leading-relaxed mb-6">
                        Votre destination vins &amp; spiritueux à Gap. Une sélection rigoureuse, un conseil avisé et une passion partagée.
                    </p>
<div className="flex gap-4">
<a className="flex items-center justify-center hover:bg-gold hover:text-burgundy hover:border-gold transition-colors w-8 h-8 border-white/10 border rounded-full" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="flex items-center justify-center hover:bg-gold hover:text-burgundy hover:border-gold transition-colors w-8 h-8 border-white/10 border rounded-full" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-medium mb-4">Navigation</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-gold transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-gold transition-colors" href="#">La Cave</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Produits</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-gold transition-colors" href="#">Vins Rouges</a></li>
<li><a className="hover:text-gold transition-colors" href="#">Champagnes</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-gold" icon="solar:map-point-linear"></iconify-icon>
<span>43 Av. Emile Didier<br/>05000 Gap, France</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gold" icon="solar:phone-linear"></iconify-icon>
<span>04 92 00 00 00</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p className="">© 2023 Comptoir à Vin Gap. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Mentions légales</a>
<a className="hover:text-white" href="#">Politique de confidentialité</a>
<span className="text-stone-600">L'abus d'alcool est dangereux pour la santé.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
