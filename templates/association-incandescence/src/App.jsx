import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(element => {
                observer.observe(element);
            });

            // Navbar background transition on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('border-white/10', 'shadow-sm');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('border-white/10', 'shadow-sm');
                    navbar.classList.add('border-transparent');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f596d7e4-0ab1-4a92-923e-fa74e239c8f9_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#1a1a1a]/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white tracking-tight font-medium text-sm flex items-center gap-2 group" href="#hero">
<svg className="group-hover:rotate-180 transition-transform duration-700 ease-in-out fill-none stroke-white" height="20" style={{strokeWidth: '4'}} viewbox="0 0 100 100" width="20">

<path d="M50 50 m-10 0 a10 10 0 1 0 20 0 a20 20 0 1 1 -40 0 a30 30 0 1 0 60 0"></path>
</svg>
<span className="" style={{letterSpacing: '-0.05em'}}>ASSOCIATION INCANDESCENCE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-[#cccccc]">
<a className="hover:text-white transition-colors" href="#mission">Mission</a>
<a className="hover:text-white transition-colors" href="#icc">ICC</a>
<a className="hover:text-white transition-colors" href="#editions">Éditions</a>
<a className="hover:text-white transition-colors" href="#enseignement">Enseignement</a>
<a className="text-white bg-[#2d2d2d] px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors font-medium" href="#adhesion">Adhérer</a>
</div>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] relative items-center justify-center" id="hero">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
<svg className="animate-[spin_120s_linear_infinite] fill-none stroke-white" height="800" style={{strokeWidth: '0.5'}} viewbox="0 0 100 100" width="800">
<circle cx="50" cy="50" r="10"></circle>
<circle cx="50" cy="20" r="5"></circle><circle cx="50" cy="80" r="5"></circle>
<circle cx="24" cy="35" r="5"></circle><circle cx="76" cy="65" r="5"></circle>
<circle cx="24" cy="65" r="5"></circle><circle cx="76" cy="35" r="5"></circle>
<path d="M50 50 m-15 0 a15 15 0 1 0 30 0 a30 30 0 1 1 -60 0 a45 45 0 1 0 90 0"></path>
</svg>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-16 reveal transition-all duration-1000 opacity-100 translate-y-0">

<div className="group cursor-default flex w-32 h-32 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aec7754b-5c68-43cd-aadd-df3693953af5_320w.png)] bg-cover bg-center mb-8 items-center justify-center">
</div>
<h1 className="text-5xl md:text-6xl text-white tracking-tight mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Association Incandescence
            </h1>
<p className="text-xl md:text-2xl text-[#cccccc] italic max-w-2xl leading-relaxed mb-16">
                "Aider l'humain à répondre à sa quête de vérité, en dehors de tout dogme religieux"
            </p>

<div className="bg-[#2d2d2d]/50 backdrop-blur-md border border-[#666666]/30 rounded-2xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 w-full">
<div className="text-left flex items-start gap-4">
<div className="bg-white/10 p-3 rounded-full mt-1">
<iconify-icon className="text-white" height="24" icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-[#cccccc] text-xs tracking-wider uppercase mb-1 font-medium">Événement en direct</div>
<h3 className="text-xl text-white tracking-tight mb-1" style={{fontFamily: 'Georgia, serif'}}>Journée Portes Ouvertes ICC</h3>
<p className="text-sm text-[#cccccc]">Institut Choix et Conscience • Jeudi 14 Mai 2026</p>
</div>
</div>
<a className="shrink-0 hover:bg-[#cccccc] transition-all hover:-translate-y-0.5 font-medium text-[#1a1a1a] bg-white rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="https://institut-choix-et-conscience.org/portes-ouvertes-2026">
                    Réserver ma place
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-[#666666]" height="24" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="bg-[#f5f5f5] pt-32 pr-6 pb-32 pl-6" id="mission">
<div className="flex flex-col reveal transition-all duration-1000 text-center max-w-4xl mr-auto ml-auto items-center">
<h2 className="text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-12" style={{fontFamily: 'Georgia, serif'}}>Notre Raison d'Être</h2>
<p className="text-lg md:text-xl text-[#2d2d2d] leading-relaxed mb-12 max-w-3xl">
                L'Association Incandescence propose d'aider les individus à répondre à leur quête de vérité en dehors de tout dogme religieux.
            </p>
<ul className="flex flex-col gap-4 text-left mb-16">
<li className="flex text-lg text-[#2d2d2d] gap-x-4 gap-y-4 items-center">Des formations d'éveil de conscience</li>
<li className="flex text-lg text-[#2d2d2d] gap-x-4 gap-y-4 items-center">L'édition de livres et livrets</li>
<li className="flex text-lg text-[#2d2d2d] gap-x-4 gap-y-4 items-center">L'organisation de conférences, séminaires et retraites</li>
</ul>
<div className="border-t border-[#cccccc] pt-12 w-full max-w-2xl text-left">
<h3 className="text-xs text-[#666666] uppercase tracking-widest mb-6 font-medium">Notre finalité :</h3>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#666666] mt-1" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<p className="text-[#2d2d2d]">Permettre aux individus de reconnecter avec leur élan intime et de retrouver leur autonomie spirituelle.</p>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#666666] mt-1" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<p className="text-[#2d2d2d]">Documenter et rendre disponible à l'humanité des outils d'introspection et de discernement rigoureux.</p>
</div>
</div>
</div>
<a className="mt-16 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2d2d2d] transition-all hover:-translate-y-0.5 shadow-md" href="#adhesion">
                Adhérer à l'association
            </a>
</div>
</section>

<section className="relative py-32 px-6 bg-[#1a1a1a] overflow-hidden text-center" id="septieme">

<div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
<svg className="fill-none stroke-white" height="600" style={{strokeWidth: '0.5'}} viewbox="0 0 100 100" width="600">
<circle cx="50" cy="50" r="40"></circle>
<circle cx="50" cy="10" r="10"></circle><circle cx="50" cy="90" r="10"></circle>
<circle cx="15" cy="30" r="10"></circle><circle cx="85" cy="70" r="10"></circle>
<circle cx="15" cy="70" r="10"></circle><circle cx="85" cy="30" r="10"></circle>
<path d="M50 50 m-20 0 a20 20 0 1 0 40 0 a40 40 0 1 1 -80 0 a60 60 0 1 0 120 0"></path>
</svg>
</div>
<div className="relative z-10 max-w-4xl mx-auto reveal transition-all duration-1000">
<span className="text-[#cccccc] text-xs uppercase tracking-widest font-medium block mb-4">Notre Direction</span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-12" style={{fontFamily: 'Georgia, serif'}}>Le 7ème Membre</h2>
<p className="text-lg md:text-xl text-[#cccccc] leading-relaxed max-w-3xl mx-auto">
                L'Association est portée par 6 fondateurs au service d'un 7ème membre invisible : la Vérité. Inspirés par les principes sources de Peter Koenig, nous considérons que toute décision majeure doit résonner avec ce 7ème membre. L'unanimité n'est pas un consensus politique, mais l'écoute de la voix de l'Un qui se manifeste à travers le collectif.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-[#f5f5f5]" id="poles-intro">
<div className="max-w-6xl mx-auto reveal transition-all duration-1000">
<div className="text-center mb-16">
<span className="text-[#666666] text-xs uppercase tracking-widest font-medium block mb-4">Nos Activités</span>
<h2 className="text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-8" style={{fontFamily: 'Georgia, serif'}}>Les 3 Pôles</h2>
<p className="text-lg text-[#666666] max-w-2xl mx-auto">
                    L'association Incandescence s'est structurée en 3 pôles. Ces pôles sont complémentaires et proposent des points d'entrée différents, toujours en cohérence avec la mission de l'association.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group bg-white p-8 rounded-2xl border border-[#cccccc]/40 hover:border-[#666666]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm flex flex-col justify-between h-48" href="#icc">
<span className="text-[#cccccc] text-2xl font-light font-mono">01</span>
<div className="">
<h3 className="text-xl text-[#1a1a1a] tracking-tight mb-1 font-medium">ICC</h3>
<p className="text-sm text-[#666666]">Institut Choix et Conscience</p>
</div>
</a>

<a className="group bg-white p-8 rounded-2xl border border-[#cccccc]/40 hover:border-[#666666]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm flex flex-col justify-between h-48" href="#editions">
<span className="text-[#cccccc] text-2xl font-light font-mono">02</span>
<div>
<h3 className="text-xl text-[#1a1a1a] tracking-tight mb-1 font-medium">Éditions</h3>
<p className="text-sm text-[#666666]">Les Éditions Incandescence</p>
</div>
</a>

<a className="group bg-white p-8 rounded-2xl border border-[#cccccc]/40 hover:border-[#666666]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm flex flex-col justify-between h-48" href="#enseignement">
<span className="text-[#cccccc] text-2xl font-light font-mono">03</span>
<div className="">
<h3 className="text-xl text-[#1a1a1a] tracking-tight mb-1 font-medium">Enseignement</h3>
<p className="text-sm text-[#666666]">Un chemin vers l'essentiel</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white border-t border-[#f5f5f5]" id="icc">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/3 reveal transition-all duration-1000">
<div className="sticky top-32">
<span className="text-[#f5f5f5] text-8xl md:text-9xl font-medium tracking-tighter leading-none block mb-4" style={{textShadow: '1px 1px 0 #cccccc, -1px -1px 0 #cccccc, 1px -1px 0 #cccccc, -1px 1px 0 #cccccc'}}>01</span>
<h2 className="text-4xl text-[#1a1a1a] tracking-tight mb-2" style={{fontFamily: 'Georgia, serif'}}>ICC</h2>
<p className="text-lg text-[#666666]">Institut Choix et Conscience</p>
</div>
</div>

<div className="lg:w-2/3 reveal transition-all duration-1000 delay-100">
<h3 className="text-2xl md:text-3xl text-[#1a1a1a] tracking-tight leading-tight mb-8" style={{fontFamily: 'Georgia, serif'}}>
                    Apprendre à choisir en conscience et développer sa conscience par le choix
                </h3>
<p className="text-lg text-[#2d2d2d] mb-16 leading-relaxed">
                    Dans un monde saturé d'indécision, l'ICC forme un réseau de praticiens et d'animateurs dédiés à ramener la clarté dans les processus de décision personnels et professionnels.
                </p>

<div className="mb-16">
<h4 className="text-xs text-[#666666] uppercase tracking-widest font-medium mb-8 pb-4 border-b border-[#f5f5f5]">Deux Protocoles Innovants</h4>
<div className="mb-12">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-[#1a1a1a]" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h5 className="text-xl font-medium text-[#1a1a1a]">Le Protocole CALL</h5>
</div>
<p className="text-[#666666] mb-6">Une méthode rigoureuse en 21 étapes pour déconstruire l'illusion du compromis et faire des choix non-négociables alignés avec soi-même.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 bg-[#f5f5f5] rounded-xl">
<span className="block text-sm font-medium text-[#1a1a1a] mb-1">Choisir</span>
<span className="text-sm text-[#666666]">Identifier et formuler le cœur de la décision.</span>
</div>
<div className="p-4 bg-[#f5f5f5] rounded-xl">
<span className="block text-sm font-medium text-[#1a1a1a] mb-1">Accueillir</span>
<span className="text-sm text-[#666666]">Recevoir enseignements et épreuves nécessaires.</span>
</div>
<div className="p-4 bg-[#f5f5f5] rounded-xl">
<span className="block text-sm font-medium text-[#1a1a1a] mb-1">Libérer</span>
<span className="text-sm text-[#666666]">Dégager les obstacles mentaux et émotionnels.</span>
</div>
<div className="p-4 bg-[#f5f5f5] rounded-xl">
<span className="block text-sm font-medium text-[#1a1a1a] mb-1">Lier</span>
<span className="text-sm text-[#666666]">Relier le choix à l'être et l'essence pour une pleine cohérence.</span>
</div>
</div>
</div>
<div className="">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-[#1a1a1a]" height="24" icon="solar:eye-scan-linear" width="24"></iconify-icon>
<h5 className="text-xl font-medium text-[#1a1a1a]">L'Introspection Dynamique</h5>
</div>
<p className="text-[#666666]">Une pratique de présence pour observer, comprendre et transformer ses doutes et ses peurs en clarté agissante.</p>
</div>
</div>

<div className="mb-16">
<h4 className="text-xs text-[#666666] uppercase tracking-widest font-medium mb-8 pb-4 border-b border-[#f5f5f5]">Formations Disponibles</h4>
<div className="flex flex-col gap-6 pl-6 border-l-2 border-[#f5f5f5] mb-8">
<div className="">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-[#cccccc]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h6 className="text-base font-medium text-[#1a1a1a]">Animateur de Cercle du Choix</h6>
</div>
<p className="text-sm text-[#666666]">Guider des groupes dans la pratique collective.</p>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-[#cccccc]" icon="solar:diploma-linear"></iconify-icon>
<h6 className="text-base font-medium text-[#1a1a1a]">Praticien CALL</h6>
</div>
<p className="text-sm text-[#666666]">Accompagnement individuel certifié.</p>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-[#cccccc]" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
<h6 className="text-base font-medium text-[#1a1a1a]">Introspection Dynamique</h6>
</div>
<p className="text-sm text-[#666666]">Maîtriser l'art du questionnement intérieur.</p>
</div>
</div>
<div className="bg-[#f5f5f5] p-4 rounded-xl flex items-start gap-4 mb-8">
<iconify-icon className="text-[#666666] mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div className="">
<p className="text-sm font-medium text-[#2d2d2d] mb-1">Formation animée par Sophie Delrot, directrice de l'ICC et formatrice et Jean-Luc De Wachter, inventeur des protocoles et formateur.</p>
<p className="text-xs text-[#666666]">Ces formations sont exclusivement proposées aux membres de l'association.</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[#1a1a1a] font-medium hover:text-[#666666] transition-colors group" href="#adhesion">
                        Adhérer pour y accéder
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#fafafa] border-[#f5f5f5] border-t pt-32 pr-6 pb-32 pl-6" id="editions">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3 reveal transition-all duration-1000">
<div className="sticky top-32">
<span className="text-[#f5f5f5] text-8xl md:text-9xl font-medium tracking-tighter leading-none block mb-4" style={{textShadow: '1px 1px 0 #e5e5e5, -1px -1px 0 #e5e5e5, 1px -1px 0 #e5e5e5, -1px 1px 0 #e5e5e5'}}>02</span>
<h2 className="text-4xl text-[#1a1a1a] tracking-tight mb-2" style={{fontFamily: 'Georgia, serif'}}>Éditions</h2>
<p className="text-lg text-[#666666]">Les Éditions Incandescence</p>
</div>
</div>
<div className="lg:w-2/3 reveal transition-all duration-1000 delay-100">
<h3 className="text-2xl md:text-3xl text-[#1a1a1a] tracking-tight leading-tight mb-4" style={{fontFamily: 'Georgia, serif'}}>
                    Éditer la vérité, sans compromis
                </h3>
<p className="text-sm text-[#666666] mb-12 flex items-center gap-2">
<iconify-icon icon="solar:user-linear"></iconify-icon> Direction : Annick Berquin
                </p>
<div className="mb-16">
<h4 className="text-xs text-[#666666] uppercase tracking-widest font-medium mb-8 pb-4 border-b border-[#e5e5e5]">Notre Mission Éditoriale</h4>
<p className="text-[#2d2d2d] leading-relaxed">
                        Les Éditions Incandescence publient des ouvrages qui tranchent avec la spiritualité de consommation. Nous éditons des textes exigeants, qui invitent le lecteur à une véritable bascule intérieure.
                    </p>
</div>
<div className="mb-16">
<h4 className="text-xs text-[#666666] uppercase tracking-widest font-medium mb-8 pb-4 border-b border-[#e5e5e5]">Ouvrages Parus</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="bg-white p-6 rounded-2xl border border-[#e5e5e5] shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-14 bg-[#1a1a1a] rounded mb-6 flex items-center justify-center shadow-inner">
<iconify-icon className="text-white" icon="solar:book-linear" width="20"></iconify-icon>
</div>
<h5 className="text-lg font-medium text-[#1a1a1a] mb-1">Je te dis la vérité</h5>
<p className="text-sm text-[#666666] mb-4">Par Jean-Luc De Wachter</p>
<p className="text-sm text-[#2d2d2d] mb-6 line-clamp-3">Un dialogue sans concession sur la nature de l'éveil et l'illusion des chemins spirituels formatés.</p>
<blockquote className="text-xs italic text-[#666666] border-l-2 border-[#cccccc] pl-3 py-1">
                                "À ceux qui disent chercher, je réponds : arrêtez de chercher, trouvez."
                            </blockquote>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#e5e5e5] shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-14 bg-[#f5f5f5] border border-[#e5e5e5] rounded mb-6 flex items-center justify-center">
<iconify-icon className="text-[#1a1a1a]" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<h5 className="text-lg font-medium text-[#1a1a1a] mb-1">Sublime Prétexte</h5>
<p className="text-sm text-[#666666] mb-4">Par Anita B.</p>
<p className="text-sm text-[#2d2d2d] line-clamp-3">Une exploration poétique et acérée des mécanismes de l'ego face à la nudité de l'instant présent.</p>
</div>
</div>
<div className="flex items-center gap-3 text-sm text-[#666666] mb-6">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
<span>Les livres sont actuellement proposés en exclusivité aux membres.</span>
</div>
<a className="inline-flex items-center gap-2 hover:text-[#666666] transition-colors group font-medium text-[#1a1a1a]" href="#adhesion">
                        Devenir membre
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white border-t border-[#f5f5f5]" id="enseignement">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3 reveal transition-all duration-1000">
<div className="sticky top-32">
<span className="text-[#f5f5f5] text-8xl md:text-9xl font-medium tracking-tighter leading-none block mb-4" style={{textShadow: '1px 1px 0 #cccccc, -1px -1px 0 #cccccc, 1px -1px 0 #cccccc, -1px 1px 0 #cccccc'}}>03</span>
<h2 className="text-4xl text-[#1a1a1a] tracking-tight mb-2" style={{fontFamily: 'Georgia, serif'}}>Enseignement</h2>
<p className="text-lg text-[#666666]">Un chemin vers l'essentiel</p>
</div>
</div>
<div className="lg:w-2/3 reveal transition-all duration-1000 delay-100">
<p className="text-sm text-[#666666] mb-12 flex items-center gap-2">
<iconify-icon icon="solar:user-linear"></iconify-icon> Transmis par Jean-Luc De Wachter
                </p>
<div className="mb-16">
<h4 className="text-xs text-[#666666] uppercase tracking-widest font-medium mb-8 pb-4 border-b border-[#f5f5f5]">Notre Approche</h4>
<p className="text-[#2d2d2d] leading-relaxed mb-6">
                        L'enseignement dispensé ne repose sur aucune croyance. Il est une invitation directe à l'expérience de la Vérité, de l'Absolu, dépouillée de tout artifice romantique ou spirituel.
                    </p>
</div>
<div className="mb-16">
<h4 className="text-xs text-[#666666] uppercase tracking-widest font-medium mb-8 pb-4 border-b border-[#f5f5f5]">Format des Rencontres</h4>
<div className="space-y-6">
<div className="flex gap-4 p-6 bg-[#fafafa] rounded-2xl border border-[#f5f5f5]">
<div className="bg-white p-3 rounded-full h-fit shadow-sm">
<iconify-icon className="text-[#1a1a1a]" icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div className="">
<h5 className="text-lg font-medium text-[#1a1a1a] mb-2">Séminaires en présentiel</h5>
<p className="text-[#666666] text-sm leading-relaxed">Des week-ends d'immersion totale dédiés à la déconstruction des conditionnements et à l'ancrage dans la présence.</p>
</div>
</div>
<div className="flex gap-4 p-6 bg-[#fafafa] rounded-2xl border border-[#f5f5f5]">
<div className="bg-white p-3 rounded-full h-fit shadow-sm">
<iconify-icon className="text-[#1a1a1a]" icon="solar:home-smile-angle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h5 className="text-lg font-medium text-[#1a1a1a] mb-2">Retraite d'été</h5>
<p className="leading-relaxed text-sm text-[#666666]">4 jours de silence, de dialogues et de pratiques intenses pour intégrer l'enseignement au cœur de la vie quotidienne.</p>
</div>
</div>
</div>
</div>
<div className="mb-16">
<h4 className="text-xs text-[#666666] uppercase tracking-widest font-medium mb-8 pb-4 border-b border-[#f5f5f5]">Au Cœur de l'Enseignement</h4>
<div className="bg-[#f5f5f5] p-8 rounded-2xl relative">
<iconify-icon className="text-[#cccccc] absolute top-6 left-6 opacity-50" icon="solar:quote-right-bold" width="40"></iconify-icon>
<blockquote className="md:text-xl leading-relaxed text-lg font-medium italic text-[#2d2d2d] text-center z-10 relative" style={{fontFamily: 'Georgia, serif'}}>"Toute forme de spiritualité est un fantasme qui apparaît du refus de la vérité. 
Seule la dévotion à la vérité, pour la vérité elle-même, lorsque celle-ci est 
sincère, conduit à une liberté pour l'individu et pour le collectif."</blockquote>
<p className="text-center text-sm text-[#666666] mt-6">— Jean-Luc De Wachter, <span className="italic">Je te dis la vérité</span></p>
</div>
</div>
<div className="flex items-center gap-3 text-sm text-[#666666] mb-6 border-l-2 border-[#cccccc] pl-4">
<span>Cet enseignement est réservé aux membres de l'association.</span>
</div>
<a className="inline-flex items-center gap-2 text-[#1a1a1a] font-medium hover:text-[#666666] transition-colors group" href="#adhesion">
                    Rejoindre l'association
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#1a1a1a] text-white" id="fondateurs">
<div className="max-w-6xl mx-auto reveal transition-all duration-1000">
<div className="text-center mb-20">
<span className="text-[#cccccc] text-xs uppercase tracking-widest font-medium block mb-4">Au service du 7ème</span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight" style={{fontFamily: 'Georgia, serif'}}>Les 6 Membres Fondateurs</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#2d2d2d]/30 border border-[#cccccc]/10 rounded-2xl p-8 hover:bg-[#2d2d2d]/50 hover:border-[#cccccc]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#1a1a1a] border border-[#cccccc]/20 rounded-full flex items-center justify-center mb-6 text-[#cccccc] font-medium tracking-widest text-sm group-hover:bg-white group-hover:text-black transition-colors">
                        JLD
                    </div>
<h3 className="text-lg font-medium mb-1">Jean-Luc De Wachter</h3>
<p className="text-sm text-[#cccccc] mb-6">Président</p>
<div className="h-px w-full bg-gradient-to-r from-[#cccccc]/20 to-transparent mb-6"></div>
<p className="text-sm text-[#cccccc] leading-relaxed">Enseignant, créateur du protocole CALL et de l'Introspection Dynamique.</p>
</div>

<div className="bg-[#2d2d2d]/30 border border-[#cccccc]/10 rounded-2xl p-8 hover:bg-[#2d2d2d]/50 hover:border-[#cccccc]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#1a1a1a] border border-[#cccccc]/20 rounded-full flex items-center justify-center mb-6 text-[#cccccc] font-medium tracking-widest text-sm group-hover:bg-white group-hover:text-black transition-colors">
                        SD
                    </div>
<h3 className="text-lg font-medium mb-1">Sophie Delrot</h3>
<p className="text-sm text-[#cccccc] mb-6">Co-Présidente</p>
<div className="h-px w-full bg-gradient-to-r from-[#cccccc]/20 to-transparent mb-6"></div>
<p className="leading-relaxed text-sm text-[#cccccc]">Responsable DE L'ICC et formatrice.</p>
</div>

<div className="bg-[#2d2d2d]/30 border border-[#cccccc]/10 rounded-2xl p-8 hover:bg-[#2d2d2d]/50 hover:border-[#cccccc]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#1a1a1a] border border-[#cccccc]/20 rounded-full flex items-center justify-center mb-6 text-[#cccccc] font-medium tracking-widest text-sm group-hover:bg-white group-hover:text-black transition-colors">
                        MD
                    </div>
<h3 className="text-lg font-medium mb-1">Maïthé Denis</h3>
<p className="text-sm text-[#cccccc] mb-6">Secrétaire</p>
<div className="h-px w-full bg-gradient-to-r from-[#cccccc]/20 to-transparent mb-6"></div>
<p className="text-sm text-[#cccccc] leading-relaxed">Garante du cadre administratif et juridique de l'association.</p>
</div>

<div className="bg-[#2d2d2d]/30 border border-[#cccccc]/10 rounded-2xl p-8 hover:bg-[#2d2d2d]/50 hover:border-[#cccccc]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#1a1a1a] border border-[#cccccc]/20 rounded-full flex items-center justify-center mb-6 text-[#cccccc] font-medium tracking-widest text-sm group-hover:bg-white group-hover:text-black transition-colors">
                        SB
                    </div>
<h3 className="text-lg font-medium mb-1">Stéphanie Bonnaventure</h3>
<p className="text-sm text-[#cccccc] mb-6">Co-Secrétaire</p>
<div className="h-px w-full bg-gradient-to-r from-[#cccccc]/20 to-transparent mb-6"></div>
<p className="text-sm text-[#cccccc] leading-relaxed">Soutien logistique et coordination des événements en présentiel.</p>
</div>

<div className="bg-[#2d2d2d]/30 border border-[#cccccc]/10 rounded-2xl p-8 hover:bg-[#2d2d2d]/50 hover:border-[#cccccc]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#1a1a1a] border border-[#cccccc]/20 rounded-full flex items-center justify-center mb-6 text-[#cccccc] font-medium tracking-widest text-sm group-hover:bg-white group-hover:text-black transition-colors">
                        AB
                    </div>
<h3 className="text-lg font-medium mb-1">Annick Berquin</h3>
<p className="text-sm text-[#cccccc] mb-6">Trésorière</p>
<div className="h-px w-full bg-gradient-to-r from-[#cccccc]/20 to-transparent mb-6"></div>
<p className="text-sm text-[#cccccc] leading-relaxed">Responsable financière et Directrice des Éditions Incandescence.</p>
</div>

<div className="bg-[#2d2d2d]/30 border border-[#cccccc]/10 rounded-2xl p-8 hover:bg-[#2d2d2d]/50 hover:border-[#cccccc]/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#1a1a1a] border border-[#cccccc]/20 rounded-full flex items-center justify-center mb-6 text-[#cccccc] font-medium tracking-widest text-sm group-hover:bg-white group-hover:text-black transition-colors">
                        GL
                    </div>
<h3 className="text-lg font-medium mb-1">Gilles Langellotti</h3>
<p className="text-sm text-[#cccccc] mb-6">Co-Trésorier</p>
<div className="h-px w-full bg-gradient-to-r from-[#cccccc]/20 to-transparent mb-6"></div>
<p className="text-sm text-[#cccccc] leading-relaxed">Vision stratégique et soutien au développement des trois pôles.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-[#f5f5f5] to-[#e5e5e5]" id="adhesion">
<div className="max-w-4xl mx-auto reveal transition-all duration-1000">
<div className="text-center mb-16">
<span className="text-[#666666] text-xs uppercase tracking-widest font-medium block mb-4">Rejoignez-nous</span>
<h2 className="text-4xl md:text-5xl text-[#1a1a1a] tracking-tight mb-8" style={{fontFamily: 'Georgia, serif'}}>Adhérer à l'Association</h2>
<p className="text-lg text-[#2d2d2d] leading-relaxed max-w-2xl mx-auto">
                    En devenant membre, vous soutenez notre mission et accédez à l'ensemble de nos ressources.
                </p>
</div>
<div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 mb-16 border border-white">
<ul className="space-y-4 mb-0">
<li className="flex items-center gap-4 text-[#2d2d2d]">
<div className="bg-[#f5f5f5] p-1.5 rounded-full"><iconify-icon className="text-[#1a1a1a] block" icon="solar:check-read-linear"></iconify-icon></div>
<span>La vidéothèque exclusive de l'association</span>
</li>
<li className="flex items-center gap-4 text-[#2d2d2d]">
<div className="bg-[#f5f5f5] p-1.5 rounded-full"><iconify-icon className="text-[#1a1a1a] block" icon="solar:check-read-linear"></iconify-icon></div>
<span>Les informations en avant-première sur tous les événements</span>
</li>
<li className="flex items-center gap-4 text-[#2d2d2d]">
<div className="bg-[#f5f5f5] p-1.5 rounded-full"><iconify-icon className="text-[#1a1a1a] block" icon="solar:check-read-linear"></iconify-icon></div>
<span>Accès aux séminaires, retraites et formations</span>
</li>
</ul>
</div>
<div className="text-center">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
</div>
<a className="inline-flex items-center justify-center gap-3 hover:bg-[#2d2d2d] transition-all hover:-translate-y-1 hover:shadow-xl sm:w-auto group text-lg font-medium text-white bg-[#1a1a1a] w-full rounded-full pt-5 pr-12 pb-5 pl-12 shadow-md" href="https://www.helloasso.com/associations/association-incandescence">
<span className="">Adhérer sur HelloAsso</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="relative bg-[#1a1a1a] text-[#cccccc] py-16 px-6 overflow-hidden border-t border-white/10">

<div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
<svg className="fill-none stroke-white" height="400" style={{strokeWidth: '1'}} viewbox="0 0 100 100" width="400">
<circle cx="50" cy="50" r="30"></circle>
</svg>
</div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
<div className="mb-8">
<svg className="fill-none stroke-white mx-auto mb-4" height="40" style={{strokeWidth: '3'}} viewbox="0 0 100 100" width="40">
<circle cx="50" cy="50" r="10"></circle>
<path d="M50 50 m-15 0 a15 15 0 1 0 30 0 a30 30 0 1 1 -60 0"></path>
</svg>
<h2 className="text-xl text-white tracking-tight" style={{fontFamily: 'Georgia, serif'}}>Association Incandescence</h2>
<p className="text-sm mt-1">Loi 1901 - Dégagée de tout dogme religieux</p>
</div>
<div className="flex flex-col gap-2 text-sm text-[#666666] mb-12">
<p>111 chemin de Lasserre, Lartigue (32450)</p>
<a className="hover:text-white transition-colors" href="mailto:contact@association-incandescence.org">contact@association-incandescence.org</a>
</div>
<div className="w-12 h-px bg-[#333333] mb-8"></div>
<p className="text-xs text-[#666666]">
                © 2026 Association Incandescence - Tous droits réservés.
            </p>
</div>
</footer>



    </>
  );
}
