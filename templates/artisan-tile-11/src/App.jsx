import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Simple Intersection Observer for scroll reveals
document.addEventListener('DOMContentLoaded', () => {
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 transition-all duration-300 backdrop-blur-sm bg-[#F9F7F4]/80 border-b border-[#104D62]/5">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="brand-font text-3xl font-semibold tracking-tighter text-[#104D62]" href="#">MIP</a>
<div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#55D6C2] transition-colors duration-300" href="#catalogue">Catalogue</a>
<a className="hover:text-[#EED52B] transition-colors duration-300" href="#savoir-faire">Savoir-faire</a>
<a className="hover:text-[#DFB2F4] transition-colors duration-300" href="#atelier">L'Atelier</a>
<a className="hover:text-[#55D6C2] transition-colors duration-300" href="#propos">À Propos</a>
</div>
<a className="hidden md:flex items-center gap-2 border border-[#104D62] px-5 py-2 rounded-full text-xs font-semibold tracking-widest hover:bg-[#104D62] hover:text-[#F9F7F4] transition-all duration-300 group" href="#contact">
                CONTACT
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-[#104D62]">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Mains travaillant l'argile" className="w-full h-full object-cover opacity-90 brightness-[0.85]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#104D62]/20 mix-blend-multiply"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-[#F9F7F4] reveal">
<p className="text-sm md:text-base tracking-[0.2em] font-light mb-6 uppercase">Artisanat Provençal</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] mb-8">
                À vous d'imaginer,<br/>
                de choisir, de créer.
            </h1>
<div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
<a className="bg-[#EED52B] text-[#104D62] px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-[#F9F7F4] transition-colors duration-300 flex items-center justify-center gap-2" href="#catalogue">
                    Voir la collection
                    <iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</a>
<a className="border border-[#F9F7F4] text-[#F9F7F4] px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-[#F9F7F4] hover:text-[#104D62] transition-colors duration-300" href="#savoir-faire">
                    Notre savoir-faire
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#F9F7F4] animate-bounce">
<iconify-icon icon="solar:arrow-down-linear" width="32"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8 brand-font">
                "Chez MIP nous aimons le rétro modernisé, des touches de couleurs assumées, le bon goût selon ses goûts."
            </h2>
<div className="w-24 h-[1px] bg-[#EED52B] mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center reveal">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#DFB2F4]/20 flex items-center justify-center mb-6 text-[#104D62]">
<iconify-icon icon="solar:hand-stars-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Fait à la main</h3>
<p className="text-slate-600 leading-relaxed font-light">Chaque carreau est unique. Les légères imperfections sont la signature de l'humain derrière l'outil.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#EED52B]/20 flex items-center justify-center mb-6 text-[#104D62]">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Made in Provence</h3>
<p className="text-slate-600 leading-relaxed font-light">Un atelier baigné de soleil où l'on mélange pigments et ciment avec passion et lenteur.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#55D6C2]/20 flex items-center justify-center mb-6 text-[#104D62]">
<iconify-icon icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Sur Mesure</h3>
<p className="text-slate-600 leading-relaxed font-light">Réinventez vos espaces avec moi. Teintes personnalisées et calepinages audacieux.</p>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="catalogue">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<span className="text-[#EED52B] font-semibold tracking-wider text-sm uppercase mb-2 block">Le Catalogue</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight brand-font text-[#104D62]">Nos Collections</h2>
</div>

<div className="flex flex-wrap gap-3 mt-6 md:mt-0">
<button className="px-4 py-2 bg-[#104D62] text-white rounded-full text-sm transition hover:shadow-lg">Tout voir</button>
<button className="px-4 py-2 bg-[#F9F7F4] text-[#104D62] border border-gray-200 rounded-full text-sm hover:bg-[#DFB2F4]/30 transition">Motifs 20x20</button>
<button className="px-4 py-2 bg-[#F9F7F4] text-[#104D62] border border-gray-200 rounded-full text-sm hover:bg-[#EED52B]/30 transition">Unis 10x10</button>
<button className="px-4 py-2 bg-[#F9F7F4] text-[#104D62] border border-gray-200 rounded-full text-sm hover:bg-[#55D6C2]/30 transition">Collabs</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer reveal">
<div className="aspect-square bg-[#F9F7F4] overflow-hidden rounded-xl relative shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
<img alt="Motif Floral Teal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Motif</div>
</div>
<div className="mt-5 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium brand-font">Jardin d'Hiver</h3>
<p className="text-sm text-slate-500 mt-1">20x20cm • Set de 4</p>
</div>
<div className="w-6 h-6 rounded-full bg-[#104D62]"></div>
</div>
</div>

<div className="group cursor-pointer reveal">
<div className="aspect-square bg-[#F9F7F4] overflow-hidden rounded-xl relative shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
<img alt="Motif Géométrique Jaune" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Collab</div>
</div>
<div className="mt-5 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium brand-font">Soleil Levant</h3>
<p className="text-sm text-slate-500 mt-1">20x20cm • Set de 4</p>
</div>
<div className="flex gap-1">
<div className="w-6 h-6 rounded-full bg-[#EED52B]"></div>
<div className="w-6 h-6 rounded-full bg-[#F9F7F4] border border-gray-200"></div>
</div>
</div>
</div>

<div className="group cursor-pointer reveal">
<div className="aspect-square bg-[#F9F7F4] overflow-hidden rounded-xl relative shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
<img alt="Uni Menthe" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Uni</div>
</div>
<div className="mt-5 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium brand-font">Menthe à l'Eau</h3>
<p className="text-sm text-slate-500 mt-1">10x10cm • Piece</p>
</div>
<div className="w-6 h-6 rounded-full bg-[#55D6C2]"></div>
</div>
</div>

<div className="group cursor-pointer reveal">
<div className="aspect-square bg-[#F9F7F4] overflow-hidden rounded-xl relative shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 ease-out">
<img alt="Motif Lavande" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Motif</div>
</div>
<div className="mt-5 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium brand-font">Rétro Chic</h3>
<p className="text-sm text-slate-500 mt-1">20x20cm • Set de 4</p>
</div>
<div className="flex gap-1">
<div className="w-6 h-6 rounded-full bg-[#DFB2F4]"></div>
<div className="w-6 h-6 rounded-full bg-[#104D62]"></div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-sm text-slate-500 mb-4">Besoin d'un devis sur mesure ?</p>
<a className="inline-block border-b-2 border-[#104D62] pb-1 hover:text-[#55D6C2] hover:border-[#55D6C2] transition-colors font-medium" href="#contact">Demander une estimation</a>
</div>
</div>
</section>

<section className="py-24 bg-[#104D62] text-[#F9F7F4]" id="savoir-faire">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#EED52B] rounded-full blur-2xl opacity-20"></div>
<img alt="Atelier process" className="rounded-lg shadow-2xl relative z-10 w-full h-[600px] object-cover grayscale-[20%] hover:grayscale-0 transition duration-700" src="https://images.unsplash.com/photo-1594046243098-0fceea9d451e?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#55D6C2] rounded-full blur-3xl opacity-20"></div>
</div>

<div className="space-y-10 reveal">
<div>
<span className="text-[#55D6C2] tracking-widest text-xs font-bold uppercase mb-2 block">Le Savoir-Faire</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight brand-font mb-6 leading-tight">La beauté prend du temps.</h2>
<p className="text-lg text-gray-300 font-light leading-relaxed">
                            Grâce à sa fabrication artisanale, le rendu est plus profond, plus vivant. Ici, pas de fours industriels. Juste de la patience.
                        </p>
</div>
<div className="space-y-8">
<div className="flex gap-5">
<div className="shrink-0 mt-1 text-[#EED52B]">
<iconify-icon icon="solar:pen-new-square-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2">1. Le Dessin</h4>
<p className="text-sm text-gray-400 font-light">Motifs dessinés à la main, inspirés par la nature provençale et le design géométrique.</p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1 text-[#EED52B]">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2">2. Le Diviseur</h4>
<p className="text-sm text-gray-400 font-light">Nos moules en laiton sont fabriqués au Maroc par un artisan avec 30 ans d'expérience.</p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 mt-1 text-[#EED52B]">
<iconify-icon icon="solar:clock-circle-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-medium mb-2">3. La Cure</h4>
<p className="text-sm text-gray-400 font-light">4 semaines de séchage naturel. Produire mieux, c'est aussi savoir attendre.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E8F6F4] relative overflow-hidden" id="atelier">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DFB2F4] rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-12 lg:items-center">
<div className="lg:w-1/2 reveal">
<span className="text-[#104D62] tracking-widest text-xs font-bold uppercase mb-2 block">Expérience</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight brand-font mb-6 text-[#104D62]">L'Atelier Découverte</h2>
<p className="text-slate-600 text-lg mb-8 font-light">
                        Venez mettre les mains dans la matière. Durant 3 heures, je vous ouvre les portes de l'atelier pour créer vos propres carreaux. Matériel, tabliers et rafraîchissements inclus.
                    </p>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-[#104D62]/5 mb-8">
<div className="flex items-center gap-4 mb-4">
<div className="bg-[#EED52B]/20 p-2 rounded-full text-[#104D62]">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="font-medium text-[#104D62]">2 participants max</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-[#EED52B]/20 p-2 rounded-full text-[#104D62]">
<iconify-icon icon="solar:ticket-linear" width="24"></iconify-icon>
</div>
<span className="font-medium text-[#104D62]">Chèques-cadeaux disponibles</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-3 bg-[#104D62] text-white rounded-md hover:bg-[#0d3d4e] transition-colors duration-300 font-medium tracking-wide" href="#contact">
                        Réserver une session
                    </a>
</div>
<div className="lg:w-1/2 reveal">
<div className="relative">
<img alt="Workshop participant" className="rounded-xl shadow-lg w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-lg shadow-sm max-w-xs">
<p className="text-[#104D62] italic text-sm">"Un moment hors du temps. L'odeur du ciment frais, la lumière... inoubliable."</p>
<p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-wider">— Sophie, participante</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6 text-center reveal" id="propos">
<div className="mb-10 inline-block p-1 border rounded-full border-gray-200">
<img alt="Fondatrice" className="w-24 h-24 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h2 className="text-3xl md:text-4xl brand-font font-medium mb-6 text-[#104D62]">L'âme de MIP</h2>
<p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
            "MIP est né d'une envie simple : produire mieux, plus près, et avec du sens. Passionnée par les motifs et la couleur, j'ai voulu redonner ses lettres de noblesse au carreau de ciment traditionnel tout en lui insufflant une énergie contemporaine."
        </p>
<div className="mt-12 flex justify-center gap-8 opacity-70">
<img alt="Logo Region" className="h-10 grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<div className="h-10 border-l border-gray-300"></div>
<span className="text-sm font-bold tracking-widest uppercase self-center text-slate-400">Artisanat d'Art</span>
</div>
</section>

<div className="w-full overflow-hidden bg-white py-4 border-y border-gray-100">
<div className="flex justify-center mb-6">
<a className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#104D62] hover:text-[#DFB2F4] transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
                Suivez @MIP_Carreaux
             </a>
</div>
<div className="flex gap-1 md:gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x">
<img className="h-48 md:h-64 aspect-square object-cover snap-center shrink-0 grayscale-[20%] hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-48 md:h-64 aspect-square object-cover snap-center shrink-0 grayscale-[20%] hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-48 md:h-64 aspect-square object-cover snap-center shrink-0 grayscale-[20%] hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-48 md:h-64 aspect-square object-cover snap-center shrink-0 grayscale-[20%] hover:grayscale-0 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img className="h-48 md:h-64 aspect-square object-cover snap-center shrink-0 grayscale-[20%] hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<footer className="bg-[#104D62] text-[#F9F7F4] pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight brand-font mb-6">Parlons de votre projet</h2>
<p className="text-gray-300 font-light mb-10 text-lg">
                    Que ce soit pour une commande sur mesure, une question sur un motif, ou pour réserver un atelier. Je vous réponds personnellement.
                </p>
<div className="space-y-6 text-sm tracking-wide">
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-[#EED52B]" icon="solar:map-point-linear" width="20"></iconify-icon>
<div>
<p className="font-bold uppercase">L'Atelier</p>
<p className="text-gray-400">12 Chemin des Oliviers<br/>13100 Aix-en-Provence, France</p>
<p className="text-xs text-gray-500 mt-1 italic">Visites sur rendez-vous uniquement</p>
</div>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-[#EED52B]" icon="solar:letter-linear" width="20"></iconify-icon>
<a className="hover:text-[#55D6C2] transition-colors" href="mailto:bonjour@mip-carreaux.fr">bonjour@mip-carreaux.fr</a>
</div>
</div>
</div>
<div className="reveal">
<form className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
<div className="grid grid-cols-2 gap-6">
<div className="group relative">
<label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Nom</label>
<input className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[#55D6C2] transition-colors placeholder-transparent" type="text"/>
</div>
<div className="group relative">
<label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Email</label>
<input className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[#55D6C2] transition-colors placeholder-transparent" type="email"/>
</div>
</div>
<div className="group relative">
<label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Sujet</label>
<select className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[#55D6C2] transition-colors appearance-none cursor-pointer">
<option className="text-black">Demande de devis</option>
<option className="text-black">Réservation Atelier</option>
<option className="text-black">Collaboration</option>
<option className="text-black">Autre</option>
</select>
<div className="absolute right-0 bottom-3 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="group relative">
<label className="text-xs uppercase tracking-widest text-gray-400 mb-2 block">Message</label>
<textarea className="w-full bg-transparent border-b border-gray-600 py-2 text-white focus:outline-none focus:border-[#55D6C2] transition-colors resize-none" rows="4"></textarea>
</div>
<button className="w-full bg-[#EED52B] text-[#104D62] font-bold py-4 rounded-md tracking-wide hover:bg-white transition-colors duration-300" type="submit">
                        Envoyer le message
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
<p>© 2023 MIP - Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</div>
</div>
</footer>

    </>
  );
}
