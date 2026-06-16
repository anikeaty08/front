import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // FAQ Logic
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.setAttribute('icon', 'solar:minus-circle-linear');
                icon.classList.add('text-white');
                icon.classList.remove('text-zinc-500');
            } else {
                content.classList.add('hidden');
                icon.setAttribute('icon', 'solar:add-circle-linear');
                icon.classList.remove('text-white');
                icon.classList.add('text-zinc-500');
            }
        }

        // Add some interaction to the fake calendar buttons
        const timeSlots = document.querySelectorAll('#booking-section button');
        timeSlots.forEach(btn => {
            btn.addEventListener('click', function() {
                // Just visual feedback logic for the prototype
                // In real implementation, Calendly handles this inside the iframe
                if(this.querySelector('.font-medium')) return; // Ignore location buttons for this quick script
                
                // Reset others
                timeSlots.forEach(b => {
                   if(!b.querySelector('.font-medium')) {
                       b.classList.remove('border-yellow-400', 'bg-zinc-900');
                       b.classList.add('border-zinc-800');
                   }
                });

                // Set active
                this.classList.remove('border-zinc-800');
                this.classList.add('border-yellow-400', 'bg-zinc-900');
                
                alert("Pour ce prototype, la réservation simule une redirection vers le formulaire final.");
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full py-6 absolute top-0 z-40 border-b border-white/10 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-2">

<div className="text-xl font-bold tracking-tighter uppercase text-white">
                    FIT'N GO
                </div>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium text-white hover:text-yellow-400 transition-colors" href="#booking-section">
                    Nos Studios
                </a>
<a className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-yellow-400 transition-colors" href="#booking-section">
                    Réserver
                </a>
</div>
</div>
</nav>


<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Gym Atmosphere" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center mt-12">
<div className="space-y-8 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-semibold text-yellow-400 tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
                    Technologie EMS Nouvelle Génération
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[0.95]">
                    Sculptez votre<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-600">lifestyle.</span>
</h1>
<p className="text-lg text-zinc-300 font-light max-w-lg leading-relaxed border-l border-white/20 pl-6">
                    L'efficacité de 4 heures de sport en seulement 20 minutes. Une expérience premium, un coach dédié, des résultats visibles.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-sm hover:bg-white transition-all duration-300" href="#booking-section">
                        Réserver ma séance offerte
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full font-medium text-sm text-white border border-white/20 hover:bg-white/5 transition-all" href="#lifestyle">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Découvrir le concept
                    </a>
</div>
</div>

<div className="hidden lg:flex justify-end relative fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="relative w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 rotate-3">
<img className="w-full h-full object-cover lifestyle-img" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
<div className="flex items-end justify-between">
<div>
<p className="text-zinc-400 text-xs uppercase tracking-widest mb-1">Calories</p>
<p className="text-3xl font-bold text-white">500<span className="text-yellow-400 text-lg">+</span></p>
</div>
<div className="mb-1">
<iconify-icon className="text-yellow-400 text-3xl" icon="solar:fire-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<div className="bg-black border-y border-zinc-900 overflow-hidden py-4">
<div className="flex whitespace-nowrap gap-16 animate-marquee opacity-40">

<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Performance</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Technologie</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Bien-être</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Coaching</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Résultats</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Performance</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Technologie</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Bien-être</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Coaching</span>
<span className="text-lg font-semibold tracking-widest uppercase text-zinc-500">Résultats</span>
</div>
</div>

<section className="py-24 bg-zinc-950" id="lifestyle">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4 sticky top-24">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">L'expérience<br/>Fit'n Go</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8">
                        Loin de l'agitation des salles de sport classiques. Ici, chaque détail est pensé pour votre confort. Vestiaires privatifs, produits de soin, ambiance tamisée et coaching personnalisé.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:t-shirt-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Tenue technique fournie</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:bottle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Hydratation &amp; Serviettes</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-400">
<iconify-icon icon="solar:bath-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Douches individuelles premium</span>
</li>
</ul>
</div>

<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4 h-full">

<div className="row-span-2 relative group overflow-hidden rounded-2xl">
<img className="w-full h-full object-cover lifestyle-img" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-square">
<img className="w-full h-full object-cover lifestyle-img" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative group overflow-hidden rounded-2xl aspect-square">
<img className="w-full h-full object-cover lifestyle-img" src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-2 relative group overflow-hidden rounded-2xl aspect-[2/1]">
<img className="w-full h-full object-cover lifestyle-img" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
<p className="text-xs text-white font-medium">Séance avec Coach Thomas</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="booking-section">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute right-0 top-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">Réservez votre créneau</h2>
<p className="text-zinc-400">Sélectionnez le studio et l'horaire qui vous convient.</p>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[600px]">

<div className="w-full md:w-1/3 bg-zinc-800/50 p-8 border-b md:border-b-0 md:border-r border-zinc-700/50 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-6">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Séance Découverte</h3>
<div className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-4">
<span className="px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/20">Gratuit</span>
<span>45 min</span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Ce créneau comprend :
                        </p>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Bilan corporel complet</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Prêt de la tenue EMS</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Séance d'essai (20 min)</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Débriefing avec le coach</span>
</li>
</ul>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<p className="text-xs text-zinc-500">Une question avant de réserver ?</p>
<p className="text-sm text-white font-medium mt-1">01 02 03 04 05</p>
</div>
</div>

<div className="w-full md:w-2/3 bg-zinc-950 relative">

<div className="w-full h-full flex flex-col">

<div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
<span className="text-sm text-zinc-400 font-medium">Octobre 2023</span>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scroll p-6">

<div className="mb-6">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Choisir un studio</label>
<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-yellow-500 bg-yellow-500/5 text-white transition-all">
<span className="font-medium text-sm">Paris 11</span>
<span className="text-[10px] text-zinc-400">Bastille</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900 text-zinc-400 hover:text-white transition-all">
<span className="font-medium text-sm">Lyon 06</span>
<span className="text-[10px] text-zinc-500">Brotteaux</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900 text-zinc-400 hover:text-white transition-all">
<span className="font-medium text-sm">Bordeaux</span>
<span className="text-[10px] text-zinc-500">Centre</span>
</button>
<button className="flex flex-col items-center justify-center p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900 text-zinc-400 hover:text-white transition-all">
<span className="font-medium text-sm">Nice</span>
<span className="text-[10px] text-zinc-500">Promenade</span>
</button>
</div>
</div>

<div className="mb-2">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Disponibilités</label>
<div className="grid grid-cols-3 gap-3">
<div className="text-center p-2 rounded-lg bg-zinc-900 border border-zinc-800">
<div className="text-xs text-zinc-500 mb-1">Lun</div>
<div className="font-medium text-white">12</div>
</div>
<div className="text-center p-2 rounded-lg bg-white text-black border border-white">
<div className="text-xs text-zinc-500 mb-1">Mar</div>
<div className="font-bold">13</div>
</div>
<div className="text-center p-2 rounded-lg bg-zinc-900 border border-zinc-800">
<div className="text-xs text-zinc-500 mb-1">Mer</div>
<div className="font-medium text-white">14</div>
</div>
</div>
</div>

<div className="mt-4 space-y-2">
<button className="w-full flex justify-between items-center p-3 rounded-lg border border-zinc-800 hover:border-yellow-400/50 hover:bg-zinc-900 group transition-all">
<span className="text-sm text-zinc-300 group-hover:text-white">09:00</span>
<iconify-icon className="text-zinc-600 group-hover:text-yellow-400" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex justify-between items-center p-3 rounded-lg border border-zinc-800 hover:border-yellow-400/50 hover:bg-zinc-900 group transition-all">
<span className="text-sm text-zinc-300 group-hover:text-white">10:30</span>
<iconify-icon className="text-zinc-600 group-hover:text-yellow-400" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full flex justify-between items-center p-3 rounded-lg border border-zinc-800 hover:border-yellow-400/50 hover:bg-zinc-900 group transition-all">
<span className="text-sm text-zinc-300 group-hover:text-white">14:00</span>
<iconify-icon className="text-zinc-600 group-hover:text-yellow-400" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="mt-8 p-4 rounded bg-blue-500/10 border border-blue-500/20 text-center">
<p className="text-xs text-blue-300 font-mono">

                                    &lt;!-- Ici intégrer le code iframe Calendly --&gt;
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-center mb-10 text-white">Questions fréquentes</h2>
<div className="space-y-3" id="faq-container">
<div className="border border-zinc-800 rounded-lg bg-zinc-900/30 overflow-hidden">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-white hover:bg-zinc-800/50 transition-colors" onclick="toggleFaq(this)">
<span>Dois-je être sportif ?</span>
<iconify-icon className="text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden p-5 pt-0 text-sm text-zinc-400 leading-relaxed">
                        Absolument pas. L'EMS est justement idéale pour reprendre le sport en douceur ou booster ses performances. Le coach règle l'intensité pour chaque personne.
                    </div>
</div>
<div className="border border-zinc-800 rounded-lg bg-zinc-900/30 overflow-hidden">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-white hover:bg-zinc-800/50 transition-colors" onclick="toggleFaq(this)">
<span>Que dois-je apporter ?</span>
<iconify-icon className="text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden p-5 pt-0 text-sm text-zinc-400 leading-relaxed">
                        Rien ! Nous fournissons la tenue, la serviette et les produits de douche. Venez les mains dans les poches.
                    </div>
</div>
<div className="border border-zinc-800 rounded-lg bg-zinc-900/30 overflow-hidden">
<button className="w-full flex justify-between items-center p-5 text-left font-medium text-white hover:bg-zinc-800/50 transition-colors" onclick="toggleFaq(this)">
<span>Est-ce efficace pour la cellulite ?</span>
<iconify-icon className="text-zinc-500" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="hidden p-5 pt-0 text-sm text-zinc-400 leading-relaxed">
                        Oui, l'EMS stimule la circulation sanguine et le drainage lymphatique, ce qui aide considérablement à réduire l'aspect peau d'orange.
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-zinc-900 pt-16 pb-8 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="text-xl font-bold tracking-tighter text-white mb-6">FIT'N GO</div>
<p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
                        Le studio de sport nouvelle génération. Technologie, design et performance au service de votre corps.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Studios</h4>
<ul className="space-y-3 text-zinc-500 text-xs">
<li className="hover:text-yellow-400 cursor-pointer transition-colors">Paris 11 - Bastille</li>
<li className="hover:text-yellow-400 cursor-pointer transition-colors">Lyon 6 - Brotteaux</li>
<li className="hover:text-yellow-400 cursor-pointer transition-colors">Bordeaux - Centre</li>
<li className="hover:text-yellow-400 cursor-pointer transition-colors">Nice - Promenade</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Concept</h4>
<ul className="space-y-3 text-zinc-500 text-xs">
<li><a className="hover:text-white" href="#">Technologie EMS</a></li>
<li><a className="hover:text-white" href="#">Coaching</a></li>
<li><a className="hover:text-white" href="#">Tarifs</a></li>
<li><a className="hover:text-white" href="#">Devenir Franchisé</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Informations</h4>
<ul className="space-y-3 text-zinc-500 text-xs">
<li><a className="hover:text-white" href="#">Mentions légales</a></li>
<li><a className="hover:text-white" href="#">CGV</a></li>
<li><a className="hover:text-white" href="#">Politique de confidentialité</a></li>
<li>contact@fitn-go.fr</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-xs">© 2023 Fit'n Go. Tous droits réservés.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-zinc-500 text-xs">Système de réservation en ligne</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
