import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#15803d', // Vibrant Forest Green (Green-700)
primaryDark: '#14532d', // Deep Green
secondary: '#f8fafc',
accent: '#d4af37', // Soft Gold
accentRed: '#dc2626',
dark: '#0f172a',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Cairo', 'sans-serif'],
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
      

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="flex shadow-primary/30 -translate-y-4 w-80 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4819234-e086-4e65-b903-5f58b014bfb4_800w.png)] bg-cover rounded-none -translate-x-8 translate-y-1 scale-75 items-center justify-center text-white">
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-primary transition-colors text-sm font-medium text-slate-600" href="#home">Home</a>
<a className="text-sm font-medium hover:text-primary transition-colors text-slate-600" href="#books">Libri</a>
<a className="text-sm font-medium hover:text-primary transition-colors text-slate-600" href="#resources">Risorse</a>
<a className="text-sm font-medium hover:text-primary transition-colors text-slate-600" href="#prodotti">Prodotti</a>
<a className="text-sm font-medium hover:text-primary transition-colors text-slate-600" href="#knowledge">Conoscenza</a>
<a className="text-sm font-medium hover:text-primary transition-colors text-slate-600" href="#contact">Contatti</a>
</div>

<div className="md:hidden flex items-center">
<button className="hover:text-primary text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-24 overflow-hidden pt-32 pb-16 relative" id="home">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-20 gap-x-5 gap-y-12 items-center">

<div className="lg:text-left text-center -translate-y-4">
<div className="inline-flex gap-2 text-primary text-xs font-semibold tracking-wide border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center bg-green-50 border-green-100" style={{}}>Nuova Collezione 2026<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span></div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-bold tracking-tight font-display mb-6 text-slate-900">Libri &amp; Risorse Educative <br/> <span className="text-primary">Islamiche</span></h1>
<p className="text-base max-w-xl mx-auto lg:mx-0 mb-8 font-normal leading-relaxed text-slate-600">
                        Scopri una collezione curata di libri, materiali didattici e guide spirituali radicate profondamente nel Corano e nella Sunnah, interamente in italiano.
                    </p>
<div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3">
<a className="w-full sm:w-auto px-6 py-3 bg-primary rounded-lg font-semibold text-sm hover:bg-primaryDark transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-white" href="#books">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
                            Acquista Libri
                        </a>
<a className="sm:w-auto transition-all flex items-center justify-center gap-2 [--fx-filter:blur(3px)_liquid-glass(0.4,10)_saturate(1.25)_noise(0.5,1,0)] text-sm font-semibold w-full border rounded-lg pt-3 pr-6 pb-3 pl-6 hover:bg-slate-50 text-slate-700 bg-white border-slate-200" href="#resources">Scarica Gratis<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full max-w-md lg:max-w-full mx-auto">
<div className="overflow-hidden group border rounded-2xl relative shadow-2xl shadow-slate-200/50 border-slate-100">

<img alt="Islamic Books" className="transform transition-transform duration-700 group-hover:scale-105 w-full h-auto object-cover rounded-md shadow blur-none backdrop-blur brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cca67f48-de25-4a1c-8b64-aefbada9ea1e_1600w.png"/>

</div>

<div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/5 -z-10"></div>
<div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl bg-primary/5 -z-10"></div>
</div>
</div>
</div>
</section>

<section className="lg:py-24 pt-20 pb-20 -translate-y-12 scale-100 bg-white" id="books">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-800">Libri in Evidenza</h2>
<p className="text-slate-500 mt-2 text-sm max-w-lg">Letteratura islamica selezionata per la tua libreria personale.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold hover:text-primaryDark transition-colors" href="#">
                    Vedi libreria completa <iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group rounded-2xl p-4 border hover:shadow-xl transition-all duration-300 bg-white border-slate-100 hover:border-slate-200 hover:shadow-slate-200/50">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-inner bg-slate-100">
<img alt="Copertina Libro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab9c4a68-c152-43fe-b441-04f7b94c9fec_800w.png" style={{}}/>
</div>
<h3 className="leading-tight text-lg font-semibold font-display mb-1 text-slate-800" style={{}}>IL MIO PRIMO LIBRO ISLAMICO</h3>
<p className="text-xs text-slate-500 mb-3 line-clamp-1">Sabbir Uddin</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-primary font-bold text-lg">€9.99</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 text-xs py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 bg-slate-800 text-white hover:bg-slate-700">
                            Aggiungi <iconify-icon className="" icon="solar:cart-plus-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group rounded-2xl p-4 border hover:shadow-xl transition-all duration-300 bg-white border-slate-100 hover:border-slate-200 hover:shadow-slate-200/50">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-inner bg-slate-100">
<img alt="Copertina Libro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7564d083-f7a7-467f-a915-2fd66d9e397b_800w.png" style={{}}/>
</div>
<h3 className="font-display text-lg font-semibold leading-tight mb-1 text-slate-800">IQRA-ATTIVITA DEI Bambini</h3>
<p className="text-xs text-slate-500 mb-3 line-clamp-1">Sabbir Uddin</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-primary font-bold text-lg">€4.99</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 text-xs py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 bg-slate-800 text-white hover:bg-slate-700">
                            Aggiungi <iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group rounded-2xl p-4 border hover:shadow-xl transition-all duration-300 bg-white border-slate-100 hover:border-slate-200 hover:shadow-slate-200/50">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-inner bg-slate-100">
<img alt="Copertina Libro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03b68e9c-db0c-4f0a-ae0d-7cd05365f4cf_800w.png" style={{}}/>
</div>
<h3 className="font-display text-lg font-semibold leading-tight mb-1 text-slate-800">La Fortezza del Musulmano</h3>
<p className="text-xs text-slate-500 mb-3 line-clamp-1">Adhkar e Duas Quotidiani</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-primary font-bold text-lg">€12.50</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 text-xs py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 bg-slate-800 text-white hover:bg-slate-700">
                            Aggiungi <iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group rounded-2xl p-4 border hover:shadow-xl transition-all duration-300 bg-white border-slate-100 hover:border-slate-200 hover:shadow-slate-200/50">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-inner bg-slate-100">
<img alt="Copertina Libro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e973669-db9a-424c-a6e8-03551ffa573c_800w.png" style={{}}/>
</div>
<h3 className="font-display text-lg font-semibold leading-tight mb-1 text-slate-800">Tafsir Ibn Kathir (Vol 1)</h3>
<p className="text-xs text-slate-500 mb-3 line-clamp-1">Esegesi del Corano</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-primary font-bold text-lg">€45.00</span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 text-xs py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 bg-slate-800 text-white hover:bg-slate-700">
                            Aggiungi <iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-24 -translate-y-4 border-t pt-20 pb-20 relative bg-slate-50 border-slate-100">
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative" id="resources">
<div className="text-center mb-16">
<span className="inline-block text-primary uppercase text-xs font-bold tracking-wider border-emerald-500 rounded-md mb-4 pt-1 pr-3 pb-1 pl-3 shadow-inner scale-150 text-neutral-50 bg-red-600/95">SCARICA Gratuiti</span>
<h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                    Laboratorio Educativo
                </h2>
<p className="text-slate-500 max-w-xl mx-auto text-sm">Scarica File stampabile, materiali educativi di alta qualità per i Studenti. Impara l'Arabo, la Salah e molto altro.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group rounded-2xl border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col bg-white border-slate-200">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Alfabeto Arabo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9cb08cf-c3f2-47a1-86b7-514213d4ad30_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-60 from-black/50"></div>
<span className="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 backdrop-blur rounded-md border text-white bg-black/20 border-white/20">PDF</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="font-display font-bold text-lg mb-2 leading-tight text-slate-800">L'Alfabeto Arabo</h3>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">Schede pratiche per imparare a scrivere le lettere arabe (Alif-Ba-Ta) con illustrazioni.</p>
<button className="mt-auto w-full py-3 rounded-lg bg-primary text-xs font-semibold hover:bg-primaryDark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-white">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                            Scarica Ora
                        </button>
</div>
</div>

<div className="group rounded-2xl border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col bg-white border-slate-200">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Salah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a52aabf0-f1a6-4f5d-a679-b2c895d182db_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-60 from-black/50"></div>
<span className="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 backdrop-blur rounded-md border text-white bg-black/20 border-white/20">Guida Visiva</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="font-display font-bold text-lg mb-2 leading-tight text-slate-800">Guida alla Salah</h3>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">Illustrazioni passo-passo per bambini per imparare le posizioni della preghiera corretta.</p>
<button className="mt-auto w-full py-3 rounded-lg bg-primary text-xs font-semibold hover:bg-primaryDark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-white">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                            Scarica Ora
                        </button>
</div>
</div>

<div className="group rounded-2xl border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col bg-white border-slate-200">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Coloring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93107fe3-664a-47f4-9b07-e5febfe42dc9_800w.webp"/>
<div className="bg-gradient-to-t to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0 from-black/50"></div>
<span className="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 backdrop-blur rounded-md border text-white bg-black/20 border-white/20">Attività</span>
</div>
<div className="flex flex-col flex-grow pt-5 pr-5 pb-5 pl-5">
<h3 className="font-display font-bold text-lg mb-2 leading-tight text-slate-800">Colora e Impara</h3>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">Libro da colorare con numeri arabi e vocabolario base per l'asilo.</p>
<button className="mt-auto w-full py-3 rounded-lg bg-primary text-xs font-semibold hover:bg-primaryDark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-white">
<iconify-icon className="" icon="solar:download-linear" width="18"></iconify-icon>
                            Scarica Ora
                        </button>
</div>
</div>

<div className="group rounded-2xl border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col bg-white border-slate-200">
<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
<img alt="Duas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ea014c7-b57c-465f-9564-cd06f0b4528f_800w.webp"/>
<div className="bg-gradient-to-t to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0 from-black/50"></div>
<span className="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 backdrop-blur rounded-md border text-white bg-black/20 border-white/20">Flashcards</span>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="font-display font-bold text-lg mb-2 leading-tight text-slate-800">Dua Quotidiani</h3>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">Carte stampabili con le suppliche del mattino e della sera in traslitterazione.</p>
<button className="mt-auto w-full py-3 rounded-lg bg-primary text-xs font-semibold hover:bg-primaryDark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-white">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                            Scarica Ora
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 -translate-y-12 max-w-7xl border-t mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 bg-white border-slate-100" id="prodotti">
<div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
<div className="">
<span className="text-primary uppercase block text-base font-medium tracking-widest mb-2">Stile di Vita</span>
<h2 className="sm:text-emerald-600 sm:text-5xl text-3xl font-extrabold font-display">Prodotti Islamici</h2>
</div>
<div className="hidden sm:block">
<button className="transition-colors text-sm font-medium border rounded-lg pt-2 pr-5 pb-2 pl-5 hover:bg-slate-200 text-slate-600 bg-slate-100 border-emerald-700">Vedi Tutti</button>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl p-6 flex items-center justify-center mb-4 relative overflow-hidden border group-hover:border-primary/20 transition-colors bg-slate-50 border-slate-100">
<img alt="Tappeto Preghiera" className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd387e6f-0b70-42b8-b240-f5be73e2d019_320w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg text-white">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-base font-medium text-slate-800" style={{}}>Abaya con Hijab Set Completo</h3>
<p className="text-xs text-slate-500 mb-2" style={{}}>Abaya set with hijab</p>
<span className="text-primary font-bold">€18.00</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl p-6 flex items-center justify-center mb-4 relative overflow-hidden border group-hover:border-primary/20 transition-colors bg-slate-50 border-slate-100">
<img alt="Miswak" className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46709754-2d53-4d2e-a0aa-227c8c70c02a_800w.jpg" style={{}}/>
</div>
<h3 className="font-medium text-base text-slate-800">Miswak Naturale</h3>
<p className="text-xs text-slate-500 mb-2">Igiene Sunnah</p>
<span className="text-primary font-bold">€3.50</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl p-6 flex items-center justify-center mb-4 relative overflow-hidden border group-hover:border-primary/20 transition-colors bg-slate-50 border-slate-100">
<img alt="Tupi" className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/019a81e1-580d-40fc-bb54-24e360643996_800w.webp" style={{}}/>
</div>
<h3 className="font-medium text-base text-slate-800">Kufi Cotone Bianco</h3>
<p className="text-xs text-slate-500 mb-2">Abbigliamento</p>
<span className="text-primary font-bold">€6.00</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl p-6 flex items-center justify-center mb-4 relative overflow-hidden border group-hover:border-primary/20 transition-colors bg-slate-50 border-slate-100">
<img alt="Panjabi" className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6987f824-e83f-4020-8837-ac7d097c5524_320w.webp" style={{}}/>
</div>
<h3 className="font-medium text-base text-slate-800">Thobe Premium</h3>
<p className="text-xs text-slate-500 mb-2">Abbigliamento Uomo</p>
<span className="text-primary font-bold">€25.00</span>
</div>
</div>
</section>

<section className="lg:py-24 border-t pt-20 pb-20 bg-slate-50 border-slate-200" id="knowledge">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4" id="knowledge">
<div className="flex items-center justify-between mb-10">
<h2 className="sm:text-4xl text-3xl font-bold tracking-tight font-display text-slate-900">Conoscenza Islamica</h2>
<a className="hidden sm:flex items-center gap-1 text-primary text-sm font-semibold hover:text-primaryDark transition-colors" href="#">
                    Tutti gli Articoli <iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer rounded-2xl p-4 border shadow-sm hover:shadow-md transition-all bg-white border-slate-200">
<div className="rounded-xl overflow-hidden mb-4 aspect-video relative bg-slate-100">
<img alt="Fiqh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<span className="absolute top-3 left-3 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-slate-700">Fiqh</span>
</div>
<h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors leading-tight text-slate-800">La Purificazione nel Corano</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Una guida completa al Wudu e al Ghusl secondo la sunnah autentica e le sue virtù.</p>
<div className="flex items-center gap-2 mt-auto text-xs font-medium text-slate-400">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>12 Ott 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>5 min lettura</span>
</div>
</article>

<article className="flex flex-col group cursor-pointer rounded-2xl p-4 border shadow-sm hover:shadow-md transition-all bg-white border-slate-200">
<div className="rounded-xl overflow-hidden mb-4 aspect-video relative bg-slate-100">
<img alt="Family" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<span className="absolute top-3 left-3 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-slate-700">Famiglia</span>
</div>
<h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors leading-tight text-slate-800">Educare Figli Virtuosi</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Consigli pratici per genitori musulmani moderni su come instillare l'amore per il Deen.</p>
<div className="flex items-center gap-2 mt-auto text-xs font-medium text-slate-400">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>10 Ott 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>8 min lettura</span>
</div>
</article>

<article className="flex flex-col group cursor-pointer rounded-2xl p-4 border shadow-sm hover:shadow-md transition-all bg-white border-slate-200">
<div className="rounded-xl overflow-hidden mb-4 aspect-video relative bg-slate-100">
<img alt="Quran" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<span className="absolute top-3 left-3 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/90 text-slate-700">Tafsir</span>
</div>
<h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors leading-tight text-slate-800">Riflessioni sulla Surah Yusuf</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Lezioni di pazienza, fiducia e destino dalla bellissima storia del Profeta Yusuf (AS).</p>
<div className="flex items-center gap-2 mt-auto text-xs font-medium text-slate-400">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>05 Ott 2023</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>12 min lettura</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="prayer">
<div className="bg-primary rounded-3xl overflow-hidden shadow-2xl relative">

<div className="absolute bottom-0 left-0 right-0 h-full bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-3">
<div className="p-10 lg:p-12 border-r bg-primaryDark/30 backdrop-blur-sm text-white border-white/10">
<h2 className="font-display text-3xl font-bold mb-4">Orari di Preghiera</h2>
<p className="text-sm font-light mb-8 text-white/80">Stabilisci la tua preghiera, poiché essa è il pilastro della religione.</p>
<div className="space-y-4">
<div className="rounded-xl p-4 backdrop-blur-md border bg-white/10 border-white/10">
<label className="text-xs block mb-1 text-white/60">Città</label>
<div className="flex items-center justify-between font-medium text-white">
<span className="" style={{}}>MEOLO, IT</span>
<iconify-icon className="" icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
</div>
<div className="rounded-xl p-4 backdrop-blur-md border bg-white/10 border-white/10">
<label className="text-xs block mb-1 text-white/60">Data</label>
<div className="flex items-center justify-between font-medium text-white">
<span className="">5/2/2026</span>
<iconify-icon className="" icon="solar:calendar-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="lg:col-span-2 lg:p-12 pt-10 pr-10 pb-10 pl-10 backdrop-blur-sm bg-white/5">
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="rounded-xl p-4 text-center border transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<span className="block text-xs mb-1 text-white/70">Fajr</span>
<span className="block font-bold text-lg text-white">05:23</span>
<span className="block text-[10px] mt-2 text-white/50">Iqamah 05:45</span>
</div>
<div className="rounded-xl p-4 text-center border transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<span className="block text-xs mb-1 text-white/70">Dhuhr</span>
<span className="block font-bold text-lg text-white">12:30</span>
<span className="block text-[10px] mt-2 text-white/50">Iqamah 13:00</span>
</div>
<div className="text-primary rounded-xl p-4 text-center shadow-lg transform scale-105 border-none bg-white">
<div className="inline-flex items-center gap-1 mb-1">
<span className="block text-primary/80 text-xs font-bold">Asr</span>
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
</div>
<span className="block text-primary font-bold text-xl">15:45</span>
<span className="block text-primary/60 text-[10px] mt-2">Iqamah 16:15</span>
</div>
<div className="rounded-xl p-4 text-center border transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<span className="block text-xs mb-1 text-white/70">Maghrib</span>
<span className="block font-bold text-lg text-white">18:12</span>
<span className="block text-[10px] mt-2 text-white/50">Iqamah 18:20</span>
</div>
<div className="rounded-xl p-4 text-center border transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<span className="block text-xs mb-1 text-white/70">Isha</span>
<span className="block font-bold text-lg text-white">19:45</span>
<span className="block text-[10px] mt-2 text-white/50">Iqamah 20:00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t bg-white border-slate-100" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="font-display text-2xl font-bold mb-6 text-slate-800">Chi è Daarul Hikmah</h2>
<p className="text-slate-500 text-sm leading-relaxed mb-8">
                        Fondata con la missione di diffondere la conoscenza islamica autentica in Italia, Daarul Hikmah serve la comunità attraverso pubblicazioni educative, laboratori e beneficenza. Ci sforziamo di connettere ogni casa con la luce del Corano e della Sunnah.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-primary shrink-0 bg-slate-50">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Scrivici</h4>
<p className="text-xs text-slate-500">salam@daarulhikmah.it</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-primary shrink-0 bg-slate-50">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Chiamaci</h4>
<p className="text-xs text-slate-500">+39 123 456 7890</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-primary shrink-0 bg-slate-50">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-slate-900">Vienici a trovare</h4>
<p className="text-xs text-slate-500">Via della Conoscenza 123, Roma</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl p-8 border bg-slate-50 border-slate-100">
<h3 className="font-bold mb-6 text-slate-800">Inviaci un messaggio</h3>
<form className="space-y-4">
<div className="">
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 text-sm placeholder:text-slate-400 bg-white border-slate-200" placeholder="Il tuo Nome" type="text"/>
</div>
<div className="">
<input className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 text-sm placeholder:text-slate-400 bg-white border-slate-200" placeholder="Indirizzo Email" type="email"/>
</div>
<div className="">
<textarea className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 text-sm placeholder:text-slate-400 bg-white border-slate-200" placeholder="Il tuo Messaggio" rows="4"></textarea>
</div>
<button className="w-full bg-primary font-semibold text-sm py-3 rounded-lg hover:bg-primaryDark transition-colors shadow-lg shadow-primary/20 text-white" type="button">
                            Invia Messaggio
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#052e16] pt-16 pb-8 border-t text-white border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="solar:book-bookmark-linear" width="24"></iconify-icon>
<span className="font-display font-bold text-lg">Daarulhikmah</span>
</div>
<p className="text-xs leading-relaxed text-white/60">Diffondere la luce della conoscenza nei cuori e nelle case di tutto il mondo.</p>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-sm text-accent">Link Rapidi</h4>
<ul className="space-y-2 text-xs text-white/70">
<li className=""><a className="transition-colors hover:text-white" href="#">Home</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Libri</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Orari Preghiera</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Chi Siamo</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-sm text-accent">Categorie</h4>
<ul className="space-y-2 text-xs text-white/70">
<li className=""><a className="transition-colors hover:text-white" href="#">Corano &amp; Tafsir</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Hadith</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Sezione Bambini</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Storia Islamica</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm text-accent">Social</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20" href="#">
<iconify-icon icon="ri:facebook-fill" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20" href="#">
<iconify-icon icon="ri:instagram-line" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/10 hover:bg-white/20" href="#">
<iconify-icon icon="ri:twitter-x-line" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/10">
<p className="text-[10px] text-white/40">© 2023 Daarulhikmah. Tutti i diritti riservati.</p>
<div className="flex gap-6 text-[10px] text-white/40">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Termini di Servizio</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
