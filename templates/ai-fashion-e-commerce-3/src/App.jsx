import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Trigger path animation on hover for charts
        const paths = document.querySelectorAll('.path-anim');
        paths.forEach(path => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            
            // Simple intersection observer to trigger animation
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        path.style.strokeDashoffset = '0';
                    }
                });
            });
            observer.observe(path);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-black/10 bg-[#f3f4ef]/90 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto flex justify-between items-center h-16 px-4 md:px-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#0f1f12] text-[#d4ff33] rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-[#0f1f12]">Airtist</span>
</div>
<a className="group flex items-center gap-2 text-sm font-medium bg-[#0f1f12] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all" href="#demo">
                Demander une démo
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="absolute top-0 bottom-0 left-[25%] w-px bg-black/5 hidden xl:block pointer-events-none"></div>
<div className="absolute top-0 bottom-0 left-[50%] w-px bg-black/5 hidden xl:block pointer-events-none"></div>
<div className="absolute top-0 bottom-0 left-[75%] w-px bg-black/5 hidden xl:block pointer-events-none"></div>
</nav>

<main className="pt-16 border-l border-r border-black/10 max-w-screen-2xl mx-auto relative bg-[#f3f4ef]">

<section className="relative z-10">
<div className="border-b border-black/10">
<div className="px-4 md:px-8 py-12 md:py-20">
<h1 className="text-[14vw] md:text-[11rem] leading-[0.8] font-semibold tracking-tighter-custom text-[#0f1f12]">
                        Photos
                    </h1>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 border-b border-black/10 min-h-[240px]">
<div className="col-span-1 md:col-span-5 relative border-b md:border-b-0 md:border-r border-black/10 h-64 md:h-auto overflow-hidden bg-white/40">
<div className="grid-lines absolute inset-0 opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center gap-8">

<div className="relative group">
<iconify-icon className="text-black/20" icon="solar:t-shirt-bold" width="64"></iconify-icon>
<div className="absolute -top-4 -right-4 bg-white border border-black/10 text-[10px] px-2 py-1 rounded shadow-sm">Input</div>
</div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-[#d4ff33] animate-[pulse_1s_infinite]"></div>
<div className="w-2 h-2 rounded-full bg-[#d4ff33] animate-[pulse_1s_infinite_0.2s]"></div>
<div className="w-2 h-2 rounded-full bg-[#d4ff33] animate-[pulse_1s_infinite_0.4s]"></div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[#d4ff33] rounded-full opacity-20 animate-sonar"></div>
<iconify-icon className="text-[#0f1f12] relative z-10" icon="solar:user-bold" width="64"></iconify-icon>
<div className="absolute -bottom-4 -right-4 bg-[#0f1f12] text-[#d4ff33] text-[10px] px-2 py-1 rounded shadow-sm">AI Generated</div>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-3 border-b md:border-b-0 md:border-r border-black/10 flex items-center justify-center p-8 bg-[#f3f4ef]">
<div className="text-center">
<div className="text-sm font-mono uppercase tracking-widest text-[#0f1f12]/60 mb-2">Coût Studio</div>
<div className="text-4xl font-bold text-[#0f1f12] flex items-center justify-center gap-2">
<span className="line-through opacity-30">$5k</span>
<span className="text-[#4ade80]">$0</span>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-4 flex items-center px-4 md:px-8 py-8 md:py-0">
<h2 className="text-[12vw] md:text-[7rem] leading-none font-semibold tracking-tighter-custom text-[#0f1f12]">
                        Pro
                    </h2>
</div>
</div>
<div className="border-b border-black/10">
<div className="px-4 md:px-8 py-10 md:py-16">
<h2 className="text-[10vw] md:text-[8rem] leading-[0.9] font-semibold tracking-tighter-custom text-[#0f1f12]">
                        Sans Studio
                    </h2>
<p className="text-xl md:text-2xl mt-8 max-w-2xl text-black/60">
                        Transformez vos photos de vêtements à plat ou mannequins vitrine en visuels portés par des humains réalistes grâce à l'IA.
                    </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-black/10">
<div className="col-span-1 md:col-span-2 border-grid p-8 md:p-12 flex flex-col justify-center bg-white">
<span className="text-xs font-mono uppercase tracking-widest text-[#4ade80] mb-2">01. Personnalisation Totale</span>
<h3 className="text-4xl font-semibold tracking-tighter-custom mb-4">Diversité sur demande</h3>
<p className="text-lg text-black/60 max-w-md">Ne vous limitez plus à un seul modèle. Choisissez l'ethnie, l'âge, la morphologie et l'expression pour cibler parfaitement votre audience.</p>
</div>
<div className="col-span-1 border-grid p-8 bg-[#f3f4ef] flex flex-col justify-center relative overflow-hidden group">
<div className="grid grid-cols-2 gap-4 mb-4">

<div className="aspect-square rounded-full bg-[#ffe0bd] border-2 border-transparent group-hover:border-[#0f1f12] transition-colors relative overflow-hidden"></div>
<div className="aspect-square rounded-full bg-[#5c3a2a] border-2 border-transparent group-hover:border-[#0f1f12] transition-colors relative overflow-hidden"></div>
<div className="aspect-square rounded-full bg-[#eac086] border-2 border-transparent group-hover:border-[#0f1f12] transition-colors relative overflow-hidden"></div>
<div className="aspect-square rounded-full bg-[#f5d0b0] border-2 border-transparent group-hover:border-[#0f1f12] transition-colors relative overflow-hidden"></div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-[10px] shadow border border-black/5 whitespace-nowrap">
                    Ethnie: <span className="font-bold">Globale</span>
</div>
</div>
<div className="col-span-1 border-grid p-8 bg-[#0f1f12] text-white flex flex-col justify-between group">
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1 opacity-60">Age</div>
<div className="h-1 bg-[#333] rounded-full overflow-hidden">
<div className="h-full bg-[#d4ff33] w-[30%] group-hover:w-[70%] transition-all duration-1000"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1 opacity-60">Emotion</div>
<div className="h-1 bg-[#333] rounded-full overflow-hidden">
<div className="h-full bg-[#ffb8d0] w-[80%] group-hover:w-[40%] transition-all duration-1000"></div>
</div>
</div>
</div>
<div className="mt-8 flex justify-end">
<iconify-icon className="text-white/20 group-hover:text-white transition-colors" icon="solar:tuning-square-2-bold" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 border-b border-black/10 bg-white">

<div className="col-span-1 border-grid p-10 flex flex-col h-[300px] justify-between relative overflow-hidden group hover:bg-[#f3f4ef] transition-colors">
<div className="absolute top-4 right-4 font-mono text-4xl text-black/5 font-bold group-hover:text-black/10">01</div>
<div>
<div className="w-12 h-12 bg-[#0f1f12] rounded-full text-white flex items-center justify-center mb-6">
<iconify-icon icon="solar:upload-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Importez vos photos</h3>
<p className="text-sm text-black/60">Vêtements à plat (Ghost mannequin) ou sur mannequin de vitrine.</p>
</div>
<div className="w-full h-32 border-2 border-dashed border-black/10 rounded-lg flex items-center justify-center bg-white">
<iconify-icon className="text-black/30" icon="solar:t-shirt-linear" width="32"></iconify-icon>
</div>
</div>

<div className="col-span-1 border-grid p-10 flex flex-col h-[300px] justify-between relative overflow-hidden group hover:bg-[#f3f4ef] transition-colors">
<div className="absolute top-4 right-4 font-mono text-4xl text-black/5 font-bold group-hover:text-black/10">02</div>
<div>
<div className="w-12 h-12 bg-[#d4ff33] rounded-full text-[#0f1f12] flex items-center justify-center mb-6">
<iconify-icon icon="solar:magic-stick-3-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Générez avec l'IA</h3>
<p className="text-sm text-black/60">Notre moteur transforme instantanément la photo en visuel réaliste.</p>
</div>
<div className="relative w-full h-2 bg-black/5 rounded-full overflow-hidden mt-4">
<div className="absolute inset-y-0 left-0 bg-[#0f1f12] w-2/3 animate-[scan_2s_linear_infinite]" style={{animationDirection: 'alternate', width: '100%'}}></div>
</div>
</div>

<div className="col-span-1 border-grid p-10 flex flex-col h-[300px] justify-between relative overflow-hidden group hover:bg-[#f3f4ef] transition-colors">
<div className="absolute top-4 right-4 font-mono text-4xl text-black/5 font-bold group-hover:text-black/10">03</div>
<div>
<div className="w-12 h-12 bg-[#ffb8d0] rounded-full text-[#0f1f12] flex items-center justify-center mb-6">
<iconify-icon icon="solar:bag-heart-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Vendez sur Shopify</h3>
<p className="text-sm text-black/60">Exportez en haute définition pour vos fiches produits.</p>
</div>
<div className="flex items-center gap-2 mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#4ade80]" icon="solar:shop-bold"></iconify-icon>
<span className="text-xs font-mono">Sync Complete</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 border-b border-black/10">
<div className="col-span-1 border-grid p-12 bg-[#0f1f12] text-[#f3f4ef] relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-4xl text-[#d4ff33]" icon="solar:graph-up-bold"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tighter-custom mb-4">Impact Business</h3>
<p className="text-white/60 mb-8 max-w-sm">Une meilleure esthétique améliore la confiance et booste les conversions. Vos clients se projettent mieux.</p>
<div className="flex items-end justify-between gap-4 h-40 mt-8 max-w-sm">
<div className="w-full group text-center">
<div className="w-full bg-[#333] rounded-t h-20 mb-2 group-hover:bg-[#444] transition-colors"></div>
<span className="text-xs opacity-50">Ghost</span>
</div>
<div className="w-full group text-center">
<div className="w-full bg-gradient-to-t from-[#4ade80] to-[#d4ff33] rounded-t h-32 mb-2 relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded">+45%</div>
</div>
<span className="text-xs text-[#d4ff33]">Airtist</span>
</div>
</div>
</div>
<div className="col-span-1 border-grid p-12 bg-white relative overflow-hidden flex flex-col justify-center">
<span className="text-xs font-mono uppercase tracking-widest text-[#ffb8d0] mb-2">Vitesse de mise en marché</span>
<h3 className="text-3xl font-semibold tracking-tighter-custom mb-6">Catalogue prêt en minutes</h3>
<div className="space-y-4">

<div className="flex items-center justify-between p-4 border border-black/5 rounded-lg bg-[#f3f4ef] opacity-60">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
<span className="text-sm">Shooting Traditionnel</span>
</div>
<span className="text-sm font-mono">2-3 Semaines</span>
</div>

<div className="flex items-center justify-between p-4 border-l-4 border-[#d4ff33] shadow-md rounded-r-lg bg-white">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#0f1f12]" icon="solar:bolt-bold" width="20"></iconify-icon>
<span className="text-sm font-semibold">Génération Airtist</span>
</div>
<span className="text-sm font-mono font-bold text-[#4ade80]">Instantoné</span>
</div>
</div>
</div>
</section>

<section className="border-b border-black/10 bg-[#f3f4ef] py-12">
<div className="max-w-4xl mx-auto px-4 text-center mb-8">
<h3 className="text-xl font-semibold">Adopté par les e-commerçants innovants</h3>
</div>
<div className="overflow-hidden">
<div className="flex animate-ticker whitespace-nowrap gap-6 px-4">

<div className="w-80 bg-white border border-black/5 p-6 rounded-xl shrink-0">
<div className="flex gap-1 mb-3 text-[#d4ff33]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed opacity-80 whitespace-normal">"J'ai économisé 3000€ sur mon dernier lancement. Les photos sont bluffantes."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#ffb8d0] flex items-center justify-center text-[10px] font-bold">L</div>
<div className="flex flex-col text-left">
<span className="text-xs font-bold">Lucie M.</span>
<span className="text-[10px] opacity-50">Mode Éthique</span>
</div>
</div>
</div>

<div className="w-80 bg-white border border-black/5 p-6 rounded-xl shrink-0">
<div className="flex gap-1 mb-3 text-[#d4ff33]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed opacity-80 whitespace-normal">"L'intégration dans mon workflow Shopify est super fluide."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#4ade80] flex items-center justify-center text-[10px] font-bold">T</div>
<div className="flex flex-col text-left">
<span className="text-xs font-bold">Thomas D.</span>
<span className="text-[10px] opacity-50">Streetwear Brand</span>
</div>
</div>
</div>

<div className="w-80 bg-white border border-black/5 p-6 rounded-xl shrink-0">
<div className="flex gap-1 mb-3 text-[#d4ff33]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed opacity-80 whitespace-normal">"La diversité des modèles a vraiment aidé mes clients à se projeter."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#0f1f12] text-white flex items-center justify-center text-[10px] font-bold">S</div>
<div className="flex flex-col text-left">
<span className="text-xs font-bold">Sarah K.</span>
<span className="text-[10px] opacity-50">Bijoux &amp; Accessoires</span>
</div>
</div>
</div>

<div className="w-80 bg-white border border-black/5 p-6 rounded-xl shrink-0">
<div className="flex gap-1 mb-3 text-[#d4ff33]">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed opacity-80 whitespace-normal">"J'ai économisé 3000€ sur mon dernier lancement. Les photos sont bluffantes."</p>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#ffb8d0] flex items-center justify-center text-[10px] font-bold">L</div>
<div className="flex flex-col text-left">
<span className="text-xs font-bold">Lucie M.</span>
<span className="text-[10px] opacity-50">Mode Éthique</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10" id="demo">

<div className="col-span-1 border-grid p-12 bg-[#0f1f12] text-white flex flex-col justify-center relative">
<div className="absolute inset-0 dot-matrix opacity-10"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter-custom mb-6 relative z-10">
                     Voyez Airtist sur<br/>
<span className="text-[#d4ff33]">vos produits</span>
</h2>
<p className="text-lg text-white/60 mb-8 max-w-md relative z-10">
                     Laissez-nous votre URL Shopify. Nous générerons gratuitement 3 exemples de modèles portant vos produits pour vous montrer la puissance de l'outil.
                 </p>
<ul className="space-y-4 relative z-10">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#4ade80] flex items-center justify-center text-black">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm">Démo personnalisée gratuite</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#4ade80] flex items-center justify-center text-black">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm">Accès anticipé à la Beta</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#4ade80] flex items-center justify-center text-black">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm">Pas de carte bancaire requise</span>
</li>
</ul>
</div>

<div className="col-span-1 border-grid p-8 md:p-12 bg-white flex items-center justify-center">
<div className="w-full max-w-md bg-[#f3f4ef] border border-black/5 rounded-2xl p-8 shadow-sm">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="flex gap-4">
<div className="w-1/2 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider opacity-60">Prénom</label>
<input className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4ff33] focus:border-transparent transition-all" placeholder="Jean" type="text"/>
</div>
<div className="w-1/2 space-y-2">
<label className="text-xs font-bold uppercase tracking-wider opacity-60">Nom</label>
<input className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4ff33] focus:border-transparent transition-all" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider opacity-60">Email Professionnel</label>
<input className="w-full px-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4ff33] focus:border-transparent transition-all" placeholder="jean@maboutique.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider opacity-60 flex items-center gap-2">
                                URL de la boutique 
                                <iconify-icon className="text-black/40" icon="solar:shop-linear"></iconify-icon>
</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 text-sm">https://</span>
<input className="w-full pl-16 pr-4 py-3 rounded-lg border border-black/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4ff33] focus:border-transparent transition-all" placeholder="maboutique.myshopify.com" type="text"/>
</div>
</div>
<button className="w-full bg-[#0f1f12] text-white font-semibold py-4 rounded-lg shadow-lg hover:bg-black hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group" type="submit">
                            Obtenir ma démo
                            <iconify-icon className="text-[#d4ff33] group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</button>
<p className="text-xs text-center text-black/40 mt-4">Nous respectons vos données. Vos photos ne sont pas partagées.</p>
</form>
</div>
</div>
</section>

<section className="relative z-10 bg-[#f3f4ef] text-[#0f1f12] py-12 px-4 md:px-8 border-t border-black/10">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#0f1f12]" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
<span className="font-bold">Airtist</span>
</div>
<div className="flex gap-8 text-sm font-medium opacity-60">
<a className="hover:opacity-100 transition-opacity" href="#">Fonctionnalités</a>
<a className="hover:opacity-100 transition-opacity" href="#">Tarifs</a>
<a className="hover:opacity-100 transition-opacity" href="#">Connexion</a>
</div>
<div className="text-sm opacity-40">© 2024 Airtist AI.</div>
</div>
</section>
</main>


    </>
  );
}
