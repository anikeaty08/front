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
serif: ['Playfair Display', 'serif'],
},
colors: {
wood: {
50: '#fbf7f3',
100: '#f5efe8',
200: '#eaddce',
300: '#dcc2af',
800: '#653326', // Mahogany
900: '#4a251b',
}
}
}
}
}



        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'text-wood-900');
                navbar.classList.remove('text-white', 'py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'text-wood-900', 'py-2');
                navbar.classList.add('text-white', 'py-4');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4 text-white" id="navbar">
<div className="container mx-auto px-6 flex justify-between items-center">

<a className="flex items-center gap-2 group" href="#">
<div className="flex flex-col leading-none">
<span className="uppercase text-xs font-medium tracking-[0.2em]">Il Falegname</span>
<span className="text-xs italic font-serif opacity-90">di Marco e Alberto Incerti</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:opacity-70 transition-opacity" href="#home">Home</a>
<a className="hover:opacity-70 transition-opacity" href="#chi-siamo">Chi Siamo</a>
<a className="hover:opacity-70 transition-opacity" href="#servizi">Servizi</a>
<a className="hover:opacity-70 transition-opacity" href="#contatti">Contatti</a>
</div>

<button className="md:hidden p-1" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full border-b shadow-lg md:hidden bg-white text-stone-900 border-stone-100" id="mobile-menu" style={{}}>
<div className="flex flex-col p-6 gap-4 text-sm font-medium">
<a className="block py-2 border-b border-stone-100" href="#home" style={{}}>Home</a>
<a className="block py-2 border-b border-stone-100" href="#chi-siamo" style={{}}>Chi Siamo</a>
<a className="block py-2 border-b border-stone-100" href="#servizi" style={{}}>Servizi</a>
<a className="block py-2" href="#contatti">Contatti</a>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 bg-stone-900" style={{}}>
<img alt="Carpentry Workshop" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="cursor-pointer bg-gradient-to-b via-transparent from-black/40 to-black/60 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://firebasestorage.googleapis.com/v0/b/il-falegname-54546.firebasestorage.app/o/Hero%20Image_202512071946.jpeg?alt=media&amp;token=b42d8253-a857-4371-8fbc-98d0459182aa'" role="button"></div>
</div>

<div className="relative z-10 text-center p-6 max-w-4xl mx-auto flex flex-col items-center text-white">
<div className="md:h-32 md:w-32 border-[1px] flex w-24 h-24 border-white/30 rounded-full mb-8 backdrop-blur-sm items-center justify-center cursor-pointer" onclick="window.location.href='https://firebasestorage.googleapis.com/v0/b/il-falegname-54546.firebasestorage.app/o/Removal-533.png?alt=media&amp;token=7fad4db3-50d3-4d45-9e18-36b6924b254c'" role="button">
<svg aria-hidden="true" className="iconify md:h-16 md:w-16 iconify--lucide w-[48px] h-[48px]" data-icon="lucide:axe" data-icon-replaced="true" data-strokeWidth="1" height="1em" role="img" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="m14 12l-8.381 8.38a1 1 0 0 1-3.001-3L11 9"></path><path className="" d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"></path></g></svg>
</div>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-4">
                Il Falegname
                <span className="block text-2xl md:text-3xl italic font-normal mt-2 opacity-90">di Alberto e Marco Incerti</span>
</h1>
<div className="h-px w-24 my-6 bg-white/50"></div>
<p className="font-sans text-sm md:text-base tracking-widest uppercase opacity-80">
                Arte · Tradizione · Passione
            </p>
</div>

<a className="absolute bottom-8 animate-bounce transition-colors text-white/80 hover:text-white" href="#chi-siamo">
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:arrow-down" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</section>

<section className="py-24 bg-white" id="chi-siamo">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2 space-y-8">
<div>
<span className="text-xs font-semibold tracking-widest uppercase mb-2 block text-wood-800">La Nostra Storia</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-snug text-stone-900" style={{}}>
                            Maestri del legno da oltre un secolo
                        </h2>
</div>
<p className="leading-relaxed font-light text-lg text-stone-600" style={{}}>
                        Da cinque generazioni, la famiglia Incerti trasforma il legno grezzo in opere che abitano le vostre case. Alberto e Marco uniscono la sapienza della tradizione artigiana alle moderne tecniche di lavorazione, garantendo un prodotto unico che profuma di storia.
                    </p>
<blockquote className="border-l-2 pl-6 italic font-serif text-xl border-wood-800 text-stone-800" style={{}}>
                        "Crediamo nel lavoro fatto bene, quello che dura una vita e racconta una storia in ogni venatura."
                    </blockquote>
<div className="flex flex-wrap gap-6 mt-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-wood-50 text-wood-800">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:award" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<span className="text-sm font-medium text-stone-900" style={{}}>5 Generazioni</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-wood-50 text-wood-800">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<span className="text-sm font-medium text-stone-900" style={{}}>Garanzia Artigiana</span>
</div>
</div>
</div>

<div className="lg:w-1/2 relative">
<div className="absolute -top-4 -left-4 w-full h-full border rounded-sm border-stone-200" style={{}}></div>
<img alt="Bottega Storica" className="relative z-10 w-full h-auto rounded-sm shadow-xl grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-50" id="servizi">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-widest uppercase mb-2 block text-wood-800">Cosa Facciamo</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-stone-900" style={{}}>Lavorazioni su misura</h2>
<p className="text-stone-500 font-light" style={{}}>Ogni progetto è unico, studiato per integrarsi perfettamente con il vostro ambiente.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white border-stone-100" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-wood-800 group-hover:text-white transition-colors bg-wood-50 text-wood-800">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:door-open" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900" style={{}}>Porte Interne</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Design esclusivo e legni pregiati per dividere gli spazi con eleganza. Dal classico al moderno.</p>
</div>

<div className="group p-8 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white border-stone-100" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-wood-800 group-hover:text-white transition-colors bg-wood-50 text-wood-800">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:shield" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900" style={{}}>Porte Blindate</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>La sicurezza incontra lo stile. Rivestimenti in legno personalizzati su strutture certificate.</p>
</div>

<div className="group p-8 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white border-stone-100" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-wood-800 group-hover:text-white transition-colors bg-wood-50 text-wood-800">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:layout-grid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900" style={{}}>Finestre e Infissi</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Efficienza energetica e isolamento acustico senza compromettere l'estetica della facciata.</p>
</div>

<div className="group p-8 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white border-stone-100" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-wood-800 group-hover:text-white transition-colors bg-wood-50 text-wood-800">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:sun" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900" style={{}}>Scuri</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Protezione dagli agenti atmosferici e privacy, realizzati con legni trattati per la massima durata.</p>
</div>

<div className="group p-8 rounded-lg border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white border-stone-100" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-wood-800 group-hover:text-white transition-colors bg-wood-50 text-wood-800">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:hammer" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900" style={{}}>Restauro &amp; Riparazioni</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Ridiamo vita ai vostri mobili e infissi antichi con tecniche di restauro conservativo.</p>
</div>

<div className="group p-8 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center cursor-pointer bg-wood-800" onclick="window.location.href='#contatti'">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white/10 text-white">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-white">Progetti Speciali</h3>
<p className="text-sm leading-relaxed mb-6 text-white/70">Hai un'idea particolare? Parliamone. Realizziamo arredi unici su disegno.</p>
<span className="text-xs font-semibold uppercase tracking-widest border-b pb-1 group-hover:border-white transition-colors text-white border-white/30">Contattaci</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none bg-wood-50"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-widest uppercase mb-2 block text-wood-800">La Garanzia Incerti</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900" style={{}}>Perché sceglierci</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="flex flex-col items-center">
<div className="w-16 h-16 border rounded-full flex items-center justify-center mb-6 bg-stone-50 border-stone-100 text-wood-800" style={{}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-icon="lucide:ruler" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900" style={{}}>Sopralluogo Chiaro</h3>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed" style={{}}>Nessuna sorpresa. Veniamo da te, prendiamo le misure e forniamo preventivi trasparenti e dettagliati.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 border rounded-full flex items-center justify-center mb-6 bg-stone-50 border-stone-100 text-wood-800" style={{}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-icon="lucide:sparkles" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900" style={{}}>Montaggio a Regola d'Arte</h3>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed" style={{}}>Pulizia, precisione e rispetto per la tua casa. Installiamo i nostri prodotti con la massima cura.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 border rounded-full flex items-center justify-center mb-6 bg-stone-50 border-stone-100 text-wood-800" style={{}}>
<svg aria-hidden="true" className="iconify w-7 h-7 iconify--lucide" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-900" style={{}}>Assistenza Post-Vendita</h3>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed" style={{}}>Il nostro lavoro non finisce con il montaggio. Siamo sempre disponibili per manutenzione e supporto.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-50" id="contatti">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-widest uppercase mb-2 block text-wood-800">Contattaci</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-stone-900" style={{}}>Parliamo del tuo progetto</h2>
<p className="text-stone-500 font-light" style={{}}>Vieni a trovarci in bottega o chiamaci per un appuntamento.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-lg shadow-sm text-center flex flex-col items-center border-t-4 bg-white border-wood-800">
<div className="mb-4 text-wood-800">
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<h3 className="font-medium mb-2 text-stone-900" style={{}}>La Bottega</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>Via Matteotti 144<br/>San Possidonio (MO)</p>
</div>

<div className="p-8 rounded-lg shadow-sm text-center flex flex-col items-center border-t-4 bg-white border-wood-800">
<div className="mb-4 text-wood-800">
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-medium mb-2 text-stone-900" style={{}}>Telefono</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-2" style={{}}>Lun-Ven: 08:00 - 18:00</p>
<a className="text-lg font-serif transition-colors text-wood-800 hover:text-wood-900" href="tel:+390535123456">+39 0535 123 456</a>
</div>

<div className="p-8 rounded-lg shadow-sm text-center flex flex-col items-center border-t-4 bg-white border-wood-800">
<div className="mb-4 text-wood-800">
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<h3 className="font-medium mb-2 text-stone-900" style={{}}>Email</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-2" style={{}}>Richiedi un preventivo</p>
<a className="text-sm font-medium hover:underline text-wood-800" href="mailto:info@ilfalegnameincerti.it">info@ilfalegnameincerti.it</a>
</div>
</div>
</div>
</section>

<footer className="py-16 text-sm bg-stone-900 text-stone-400" style={{}}>
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4 text-stone-100" style={{}}>
<div className="h-6 w-6 border border-current rounded flex items-center justify-center">
<svg aria-hidden="true" className="iconify w-3 h-3 iconify--lucide" data-icon="lucide:hammer" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<span className="uppercase text-xs tracking-[0.2em] font-medium">Il Falegname</span>
</div>
<p className="leading-relaxed max-w-sm opacity-80">
                        Falegnameria artigianale fondata sulla passione e tramandata da padre in figlio. Qualità, precisione e amore per il legno.
                    </p>
</div>

<div>
<h4 className="font-medium mb-4 text-white">Navigazione</h4>
<ul className="space-y-2">
<li><a className="transition-colors hover:text-white" href="#home">Home</a></li>
<li><a className="transition-colors hover:text-white" href="#chi-siamo">Chi Siamo</a></li>
<li><a className="transition-colors hover:text-white" href="#servizi">Servizi</a></li>
<li><a className="transition-colors hover:text-white" href="#contatti">Contatti</a></li>
</ul>
</div>

<div>
<h4 className="font-medium mb-4 text-white">Contatti Rapidi</h4>
<ul className="space-y-2">
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify min-w-[16px] mt-0.5 iconify--lucide" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span>Via Matteotti 144, San Possidonio</span>
</li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify min-w-[16px] iconify--lucide" data-icon="lucide:phone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="hover:text-white" href="tel:+390535123456">+39 0535 123 456</a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60 border-stone-800" style={{}}>
<p>© 2024 Il Falegname di Alberto e Marco Incerti. Tutti i diritti riservati.</p>
<p>P.IVA 01234567890</p>
</div>
</div>
</footer>



    </>
  );
}
