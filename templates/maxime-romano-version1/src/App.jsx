import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


document.write(new Date().getFullYear())


        function switchLang(lang) {
            // Update active state in DOM
            document.querySelectorAll('[data-lang]').forEach(el => {
                if (el.getAttribute('data-lang') === lang) {
                    el.classList.add('active-lang');
                } else {
                    el.classList.remove('active-lang');
                }
            });

            // Update button styles
            const buttons = ['fr', 'en', 'es'];
            buttons.forEach(btn => {
                const buttonEl = document.getElementById('btn-' + btn);
                if (btn === lang) {
                    buttonEl.classList.add('text-white');
                    buttonEl.classList.remove('text-zinc-500');
                } else {
                    buttonEl.classList.remove('text-white');
                    buttonEl.classList.add('text-zinc-500');
                }
            });

            // Set HTML lang attribute
            document.documentElement.lang = lang;
        }

        // Auto-detect language simplified
        const userLang = navigator.language || navigator.userLanguage; 
        if (userLang.startsWith('en')) {
            switchLang('en');
        } else if (userLang.startsWith('es')) {
            switchLang('es');
        } else {
            switchLang('fr'); // Default to FR as requested
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-lg font-medium tracking-tight text-white hover:opacity-80 transition-opacity" href="#">
                MAXIME ROMANO
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">
<span className="active-lang" data-lang="fr">Services</span>
<span data-lang="en">Services</span>
<span data-lang="es">Servicios</span>
</a>
<a className="hover:text-white transition-colors" href="#products">
<span className="active-lang" data-lang="fr">Produits</span>
<span data-lang="en">Products</span>
<span data-lang="es">Productos</span>
</a>
<a className="hover:text-white transition-colors" href="#about">
<span className="active-lang" data-lang="fr">À propos</span>
<span data-lang="en">About</span>
<span data-lang="es">Sobre mí</span>
</a>
</div>

<div className="flex items-center gap-6">

<div className="flex items-center gap-3 text-xs font-medium text-zinc-500">
<button className="hover:text-white transition-colors text-white" id="btn-fr" onclick="switchLang('fr')">FR</button>
<span className="w-[1px] h-3 bg-zinc-700"></span>
<button className="hover:text-white transition-colors" id="btn-en" onclick="switchLang('en')">EN</button>
<span className="w-[1px] h-3 bg-zinc-700"></span>
<button className="hover:text-white transition-colors" id="btn-es" onclick="switchLang('es')">ES</button>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors" href="https://wa.me/971585668161" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
<span className="active-lang" data-lang="fr">WhatsApp</span>
<span data-lang="en">WhatsApp</span>
<span data-lang="es">WhatsApp</span>
</a>
</div>
</div>
</nav>

<header className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="max-w-4xl fade-in">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">
<span className="active-lang" data-lang="fr">France ↔ Émirats Arabes Unis</span>
<span data-lang="en">France ↔ United Arab Emirates</span>
<span data-lang="es">Francia ↔ Emiratos Árabes Unidos</span>
</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
<span className="active-lang" data-lang="fr">Intermédiaire stratégique<br/>pour décideurs exigeants.</span>
<span data-lang="en">Strategic intermediary<br/>for ambitious leaders.</span>
<span data-lang="es">Intermediario estratégico<br/>para líderes exigentes.</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-12 fade-in delay-100">
<span className="active-lang" data-lang="fr">Nous connectons la rigueur française au dynamisme de Dubaï. Réseau de confiance, excellence opérationnelle et discrétion absolue.</span>
<span data-lang="en">Bridging French rigor with Dubai's dynamism. Trusted network, operational excellence, and absolute discretion.</span>
<span data-lang="es">Conectando el rigor francés con el dinamismo de Dubái. Red de confianza, excelencia operativa y absoluta discreción.</span>
</p>

<div className="flex flex-col sm:flex-row gap-4 fade-in delay-200">
<a className="inline-flex items-center justify-center gap-2 bg-white text-black h-12 px-8 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors" href="https://wa.me/971585668161" target="_blank">
<span className="active-lang" data-lang="fr">Discuter sur WhatsApp</span>
<span data-lang="en">Chat on WhatsApp</span>
<span data-lang="es">Hablemos por WhatsApp</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-white/20 text-white h-12 px-8 rounded-full text-sm font-medium hover:bg-white/5 transition-colors" href="#services">
<span className="active-lang" data-lang="fr">Découvrir les services</span>
<span data-lang="en">Discover services</span>
<span data-lang="es">Descubrir servicios</span>
</a>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">
<span className="active-lang" data-lang="fr">Expertise &amp; Piliers</span>
<span data-lang="en">Expertise &amp; Pillars</span>
<span data-lang="es">Experiencia y Pilares</span>
</h2>
<p className="text-zinc-500 max-w-md">
<span className="active-lang" data-lang="fr">Une approche structurée pour sécuriser vos opérations internationales.</span>
<span data-lang="en">A structured approach to secure your international operations.</span>
<span data-lang="es">Un enfoque estructurado para asegurar sus operaciones internacionales.</span>
</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">
<span className="active-lang" data-lang="fr">Import / Export</span>
<span data-lang="en">Import / Export</span>
<span data-lang="es">Importación / Exportación</span>
</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 min-h-[40px]">
<span className="active-lang" data-lang="fr">Fluidification des échanges commerciaux entre l'Europe et le Moyen-Orient.</span>
<span data-lang="en">Streamlining trade exchanges between Europe and the Middle East.</span>
<span data-lang="es">Agilización de los intercambios comerciales entre Europa y Medio Oriente.</span>
</p>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>
<span className="active-lang" data-lang="fr">Logistique sécurisée</span>
<span data-lang="en">Secure logistics</span>
<span data-lang="es">Logística segura</span>
</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>
<span className="active-lang" data-lang="fr">Conformité douanière</span>
<span data-lang="en">Customs compliance</span>
<span data-lang="es">Cumplimiento aduanero</span>
</li>
</ul>
</div>

<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">Upgrade</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 min-h-[40px]">
<span className="active-lang" data-lang="fr">Montée en gamme de vos actifs et optimisation de la valeur perçue.</span>
<span data-lang="en">Upgrading your assets and optimizing perceived value.</span>
<span data-lang="es">Mejora de activos y optimización del valor percibido.</span>
</p>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>
<span className="active-lang" data-lang="fr">Repositionnement</span>
<span data-lang="en">Repositioning</span>
<span data-lang="es">Reposicionamiento</span>
</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>
<span className="active-lang" data-lang="fr">Valorisation</span>
<span data-lang="en">Valuation</span>
<span data-lang="es">Valoración</span>
</li>
</ul>
</div>

<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:wrench-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">
<span className="active-lang" data-lang="fr">Maintenance</span>
<span data-lang="en">Maintenance</span>
<span data-lang="es">Mantenimiento</span>
</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 min-h-[40px]">
<span className="active-lang" data-lang="fr">Gestion technique et réparation de produits à haute valeur ajoutée.</span>
<span data-lang="en">Technical management and repair of high value-added products.</span>
<span data-lang="es">Gestión técnica y reparación de productos de alto valor.</span>
</p>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>
<span className="active-lang" data-lang="fr">Expertise technique</span>
<span data-lang="en">Technical expertise</span>
<span data-lang="es">Experiencia técnica</span>
</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>
<span className="active-lang" data-lang="fr">SAV Premium</span>
<span data-lang="en">Premium Support</span>
<span data-lang="es">Soporte Premium</span>
</li>
</ul>
</div>

<div className="glass p-8 rounded-2xl group hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">Sourcing</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 min-h-[40px]">
<span className="active-lang" data-lang="fr">Identification et acquisition de produits rares ou spécifiques sur demande.</span>
<span data-lang="en">Identification and acquisition of rare or specific products on demand.</span>
<span data-lang="es">Identificación y adquisición de productos raros o específicos bajo demanda.</span>
</p>
<ul className="space-y-2 text-xs text-zinc-500">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>
<span className="active-lang" data-lang="fr">Réseau exclusif</span>
<span data-lang="en">Exclusive network</span>
<span data-lang="es">Red exclusiva</span>
</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>
<span className="active-lang" data-lang="fr">Négociation</span>
<span data-lang="en">Negotiation</span>
<span data-lang="es">Negociación</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 border-b border-white/5 pb-8 flex flex-col md:flex-row justify-between items-end">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">
<span className="active-lang" data-lang="fr">Sélection</span>
<span data-lang="en">Selection</span>
<span data-lang="es">Selección</span>
</h2>
<p className="text-zinc-500 max-w-xl text-sm">
<span className="active-lang" data-lang="fr">Traçabilité, authenticité et conformité. Une sélection rigoureuse des meilleures marques.</span>
<span data-lang="en">Traceability, authenticity, and compliance. A rigorous selection of the best brands.</span>
<span data-lang="es">Trazabilidad, autenticidad y cumplimiento. Una selección rigurosa de las mejores marcas.</span>
</p>
</div>
<a className="text-xs text-white underline underline-offset-4 mt-4 md:mt-0 hover:text-zinc-300" href="https://wa.me/971585668161">
<span className="active-lang" data-lang="fr">Demander le catalogue complet</span>
<span data-lang="en">Request full catalog</span>
<span data-lang="es">Solicitar catálogo completo</span>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="aspect-square glass rounded-xl flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 01</span>
</div>
<div className="aspect-square glass rounded-xl flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 02</span>
</div>
<div className="aspect-square glass rounded-xl flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 03</span>
</div>
<div className="aspect-square glass rounded-xl flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 04</span>
</div>
<div className="aspect-square glass rounded-xl flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 05</span>
</div>

<div className="hidden md:flex aspect-square glass rounded-xl items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 06</span>
</div>
<div className="hidden md:flex aspect-square glass rounded-xl items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 07</span>
</div>
<div className="hidden md:flex aspect-square glass rounded-xl items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 08</span>
</div>
<div className="hidden md:flex aspect-square glass rounded-xl items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 09</span>
</div>
<div className="hidden md:flex aspect-square glass rounded-xl items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="text-zinc-700 text-xs tracking-widest uppercase">Product 10</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">
<span className="active-lang" data-lang="fr">Le Pont de Confiance</span>
<span data-lang="en">The Trusted Bridge</span>
<span data-lang="es">El Puente de Confianza</span>
</h2>
<div className="space-y-6 text-zinc-400 leading-relaxed">
<p>
<span className="active-lang" data-lang="fr">Basé entre la France et les Émirats, Maxime Romano opère comme point de contact unique pour les entreprises et investisseurs cherchant fiabilité et rapidité d'exécution.</span>
<span data-lang="en">Based between France and the Emirates, Maxime Romano operates as a single point of contact for companies and investors seeking reliability and speed of execution.</span>
<span data-lang="es">Con base entre Francia y los Emiratos, Maxime Romano opera como un punto de contacto único para empresas e inversores que buscan fiabilidad y rapidez de ejecución.</span>
</p>
<p>
<span className="active-lang" data-lang="fr">Loin du bruit médiatique, nous privilégions les actions concrètes, les réseaux qualifiés et les résultats mesurables.</span>
<span data-lang="en">Far from the media noise, we prioritize concrete actions, qualified networks, and measurable results.</span>
<span data-lang="es">Lejos del ruido mediático, priorizamos acciones concretas, redes cualificadas y resultados medibles.</span>
</p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="border-l border-white/20 pl-4">
<span className="block text-white font-medium">100%</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">
<span className="active-lang" data-lang="fr">Confidentialité</span>
<span data-lang="en">Confidentiality</span>
<span data-lang="es">Confidencialidad</span>
</span>
</div>
<div className="border-l border-white/20 pl-4">
<span className="block text-white font-medium">24/7</span>
<span className="text-xs text-zinc-500 uppercase tracking-wider">
<span className="active-lang" data-lang="fr">Réactivité</span>
<span data-lang="en">Responsiveness</span>
<span data-lang="es">Reactividad</span>
</span>
</div>
</div>
</div>
<div className="relative h-full w-full min-h-[300px] rounded-2xl overflow-hidden glass flex items-center justify-center">

<div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent left-1/2"></div>
<div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent top-1/2"></div>
<div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center">
<span className="text-2xl font-light text-white">MR</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/10" id="contact">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight mb-4">
<span className="active-lang" data-lang="fr">Initier le dialogue</span>
<span data-lang="en">Start the conversation</span>
<span data-lang="es">Iniciar el diálogo</span>
</h2>
<p className="text-zinc-500 mb-10">
<span className="active-lang" data-lang="fr">Accès direct. Réponse sous 2 heures.</span>
<span data-lang="en">Direct access. Response within 2 hours.</span>
<span data-lang="es">Acceso directo. Respuesta en menos de 2 horas.</span>
</p>
<div className="glass p-8 rounded-2xl text-left">

<a className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold py-4 rounded-xl transition-all mb-8 shadow-[0_0_20px_rgba(37,211,102,0.1)] hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]" href="https://wa.me/971585668161" target="_blank">
<iconify-icon icon="solar:chat-round-dots-bold" width="24"></iconify-icon>
<span className="active-lang" data-lang="fr">Contacter Maxime via WhatsApp</span>
<span data-lang="en">Contact Maxime via WhatsApp</span>
<span data-lang="es">Contactar a Maxime por WhatsApp</span>
</a>
<div className="flex items-center gap-4 mb-8">
<div className="h-[1px] bg-white/10 flex-1"></div>
<span className="text-xs text-zinc-600 uppercase">
<span className="active-lang" data-lang="fr">ou par email</span>
<span data-lang="en">or by email</span>
<span data-lang="es">o por correo</span>
</span>
<div className="h-[1px] bg-white/10 flex-1"></div>
</div>

<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider">
<span className="active-lang" data-lang="fr">Nom</span>
<span data-lang="en">Name</span>
<span data-lang="es">Nombre</span>
</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider">
<span className="active-lang" data-lang="fr">Société</span>
<span data-lang="en">Company</span>
<span data-lang="es">Empresa</span>
</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="Company Ltd." type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors resize-none" rows="3"></textarea>
</div>
<button className="text-sm font-medium text-white hover:text-zinc-300 transition-colors flex items-center gap-2 mt-4" type="button">
<span className="active-lang" data-lang="fr">Envoyer la demande</span>
<span data-lang="en">Send request</span>
<span data-lang="es">Enviar solicitud</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-sm font-semibold tracking-tight text-white block mb-1">MAXIME ROMANO</span>
<span className="text-xs text-zinc-600 block">Paris — Dubai</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Legal</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
<div className="text-xs text-zinc-700">
                ©  Maxime Romano.
            </div>
</div>
</footer>



    </>
  );
}
