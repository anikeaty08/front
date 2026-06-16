import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Language Handling
        let currentLang = 'fr';

        function switchLang(lang) {
            currentLang = lang;
            const frElements = document.querySelectorAll('.lang-fr');
            const enElements = document.querySelectorAll('.lang-en');
            const btnFr = document.getElementById('btn-fr');
            const btnEn = document.getElementById('btn-en');
            
            if (lang === 'fr') {
                frElements.forEach(el => el.classList.remove('hidden'));
                enElements.forEach(el => el.classList.add('hidden'));
                
                btnFr.classList.add('text-slate-900', 'font-bold');
                btnFr.classList.remove('text-slate-400');
                btnEn.classList.add('text-slate-400');
                btnEn.classList.remove('text-slate-900', 'font-bold');
            } else {
                frElements.forEach(el => el.classList.add('hidden'));
                enElements.forEach(el => el.classList.remove('hidden'));
                
                btnEn.classList.add('text-slate-900', 'font-bold');
                btnEn.classList.remove('text-slate-400');
                btnFr.classList.add('text-slate-400');
                btnFr.classList.remove('text-slate-900', 'font-bold');
            }
        }

        const baseSupabaseUrl = 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/';
        
        function closeProject() {
            const modal = document.getElementById('project-modal');
            modal.classList.add('hidden');
            modal.classList.remove('modal-enter');
            document.body.classList.remove('modal-open');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed transition-all duration-300 z-50 bg-white/90 w-full border-gray-100 border-b backdrop-blur-md">
<div className="md:px-12 flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">


<a className="flex items-center gap-3 md:gap-5 group h-full -translate-y-1 cursor-pointer" href="/">
<svg className="group-hover:text-[#FF6600] transition-colors duration-300 mb-1 w-[60px] md:w-[77px] h-[45px] md:h-[56px]" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" style={{color: 'rgb(255, 102, 0)'}} viewbox="0 0 110 80">
<path className="" d="M15 45 L45 25" strokeWidth="4.5"></path>
<path className="" d="M22 40 V70" strokeWidth="4.5"></path>
<rect fill="currentColor" height="12" stroke="none" width="9" x="30" y="58"></rect>
<line className="" strokeWidth="1.5" x1="45" x2="95" y1="25" y2="50"></line>
<line className="" strokeWidth="1.5" x1="45" x2="90" y1="32" y2="55"></line>
<line strokeWidth="1.5" x1="45" x2="100" y1="70" y2="70"></line>
<line strokeWidth="1.5" x1="40" x2="105" y1="76" y2="76"></line>
<line strokeWidth="1.5" x1="58" x2="58" y1="5" y2="80"></line>
<line strokeWidth="1.5" x1="64" x2="64" y1="10" y2="75"></line>
</svg>
<div className="flex h-full translate-y-2 items-center">
<div className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 group-hover:text-[#FF6600] transition-colors flex items-center">
                        WIZZ<span className="font-thin">IMMO</span>
</div>
<span className="hidden lg:flex uppercase items-center text-xs font-medium text-slate-500 tracking-widest h-6 border-slate-300 border-l ml-5 pl-5 group-hover:text-[#FF6600] transition-colors">
                        Pertuis • Luberon
                    </span>
</div>
</a>

<div className="hidden lg:flex text-lg font-light text-slate-600 space-x-6 lg:space-x-8 items-center">
<a className="hover:text-[#FF6600] transition-colors" href="/#services">
<span className="lang-fr">Services</span><span className="lang-en hidden">Services</span>
</a>
<a className="hover:text-[#FF6600] transition-colors" href="/#realisations">
<span className="lang-fr">Réalisations</span><span className="lang-en hidden">Portfolio</span>
</a>
<a className="hover:text-[#FF6600] transition-colors" href="/#avis">
<span className="lang-fr">Avis</span><span className="lang-en hidden">Reviews</span>
</a>
<a className="hover:text-[#FF6600] transition-colors" href="/#international">International</a>

<div className="flex items-center gap-2 text-sm font-medium border-l border-r border-slate-200 px-4 h-6">
<button className="text-slate-900 font-bold hover:text-[#FF6600] transition-colors" id="btn-fr" onclick="switchLang('fr')">FR</button>
<span className="text-slate-300">|</span>
<button className="hover:text-[#FF6600] transition-colors text-slate-400" id="btn-en" onclick="switchLang('en')">EN</button>
</div>
<a className="wizz-btn px-6 py-3 text-sm uppercase tracking-wider font-medium rounded-sm" href="#contact">
                    Contact
                </a>
</div>

<button className="lg:hidden text-2xl text-slate-800 hover:text-[#FF6600] transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Rénovation Luberon" className="object-left brightness-[0.95] w-full h-full object-cover scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0d433e7-7569-45d2-b84b-4e10b10fb783_3840w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
</div>
<div className="container md:px-12 grid grid-cols-1 md:grid-cols-12 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="reveal md:col-span-10 lg:col-span-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-slate-200 bg-white/60 backdrop-blur-sm rounded-full">
<span className="w-2 h-2 rounded-full bg-[#FF6600]"></span>
<span className="uppercase text-xs font-medium text-slate-600 tracking-widest">
<span className="lang-fr">COURTIER EN TRAVAUX • LUBERON &amp; PAYS D'AIX</span>
<span className="lang-en hidden">RENOVATION BROKER • LUBERON &amp; AIX AREA</span>
</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight mb-8">
<span className="lang-fr">Concrétisez votre projet immobilier, du Sud Luberon au Pays d'Aix.</span>
<span className="lang-en hidden">Bring your real estate project to life, from South Luberon to Pays d'Aix.</span>
</h1>
<p className="leading-relaxed md:text-2xl md:text-slate-600 text-lg sm:text-xl font-light max-w-3xl mb-12 scale-100">
<span className="lang-fr">Basé à Pertuis, votre courtier Wizzimmo vous accompagne sur les deux rives de la Durance. Que vous soyez à Rognes, Le Puy-Sainte-Réparade ou dans le Sud Luberon, profitez d'un interlocuteur unique pour des travaux maîtrisés et sans stress.</span>
<span className="lang-en hidden">Based in Pertuis, your Wizzimmo broker guides you on both banks of the Durance river. Whether you are in Rognes, Le Puy-Sainte-Réparade or South Luberon, enjoy a single point of contact for controlled and stress-free renovation works.</span>
</p>
<div className="flex flex-col sm:flex-row gap-5">
<a className="wizz-btn px-9 py-4 text-lg font-normal tracking-wide text-center rounded-sm" href="#contact">
<span className="lang-fr">Estimer mon projet gratuitement</span>
<span className="lang-en hidden">Get a free estimate</span>
</a>
<a className="px-9 py-4 text-lg font-normal tracking-wide text-slate-700 hover:text-[#FF6600] flex items-center justify-center gap-3 transition-colors" href="#pourquoi">
<iconify-icon height="24" icon="solar:play-circle-linear" width="24"></iconify-icon>
<span className="lang-fr">Découvrir l'approche</span>
<span className="lang-en hidden">Discover our approach</span>
</a>
</div>
</div>
</div>
</header>

<section className="bg-white pt-24 pb-24 md:pt-32 md:pb-32 relative overflow-hidden" id="pourquoi">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-28">
<h2 className="text-3xl md:text-5xl font-normal text-slate-900 mb-8 tracking-tight">
<span className="lang-fr">L'exigence d'un architecte,<br/>la proximité d'un partenaire local.</span>
<span className="lang-en hidden">The standards of an architect,<br/>the proximity of a local partner.</span>
</h2>
<div className="w-20 h-1 bg-[#FF6600] mx-auto"></div>
</div>
<div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-6 lg:gap-16 snap-x snap-mandatory pb-8 -mx-6 px-6 md:-mx-12 md:px-12 lg:mx-0 lg:px-0 scrollbar-hide">

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center group p-10 md:p-12 lg:p-16 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 bg-slate-50/30 flex flex-col justify-between">
<div className="">
<div className="w-16 h-16 bg-white border border-slate-200 text-[#FF6600] flex items-center justify-center mb-8 lg:mb-10 group-hover:scale-110 transition-transform rounded-sm shadow-sm">
<iconify-icon height="32" icon="solar:wallet-money-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-6">
<span className="lang-fr">Devis Négociés &amp; Maîtrisés</span>
<span className="lang-en hidden">Negotiated &amp; Controlled Quotes</span>
</h3>
<p className="leading-relaxed text-lg font-light text-slate-500">
<span className="lang-fr">Grâce à la force du réseau Wizzimmo, nous négocions les tarifs pour vous. Votre projet est chiffré au juste prix, sans surprise finale. Vos acomptes sont sécurisés.</span>
<span className="lang-en hidden">Thanks to the power of the Wizzimmo network, we negotiate rates for you. Your project is priced fairly, with no final surprises. Your down payments are fully secured.</span>
</p>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center group p-10 md:p-12 lg:p-16 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 bg-slate-50/30 flex flex-col justify-between">
<div>
<div className="w-16 h-16 bg-white border border-slate-200 text-[#FF6600] flex items-center justify-center mb-8 lg:mb-10 group-hover:scale-110 transition-transform rounded-sm shadow-sm">
<iconify-icon height="32" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-6">
<span className="lang-fr">Artisans Locaux Sélectionnés</span>
<span className="lang-en hidden">Selected Local Craftsmen</span>
</h3>
<p className="leading-relaxed text-lg font-light text-slate-500">
<span className="lang-fr">Nous ne travaillons qu'avec des entreprises fiables du Val de Durance (84 &amp; 13). Assurances décennales vérifiées et solvabilité contrôlée pour un chantier en toute sécurité.</span>
<span className="lang-en hidden">We exclusively work with reliable companies from the Durance Valley (84 &amp; 13). Verified insurance and solvency checks ensure a completely secure construction site.</span>
</p>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center group p-10 md:p-12 lg:p-16 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 bg-slate-50/30 flex flex-col justify-between">
<div className="">
<div className="w-16 h-16 bg-white border border-slate-200 text-[#FF6600] flex items-center justify-center mb-8 lg:mb-10 group-hover:scale-110 transition-transform rounded-sm shadow-sm">
<iconify-icon className="" height="32" icon="solar:user-check-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-6">
<span className="lang-fr">Un Seul Interlocuteur</span>
<span className="lang-en hidden">A Single Point of Contact</span>
</h3>
<p className="leading-relaxed text-lg font-light text-slate-500">
<span className="lang-fr">Fini les appels interminables aux différents corps de métier. Je suis votre pilote unique, de la conception à la réception. Idéal si vous n'êtes pas sur place ou manquez de temps.</span>
<span className="lang-en hidden">No more endless calls to different trades. I am your sole pilot, from design to handover. Ideal if you are not on site or if you lack time to manage operations.</span>
</p>
</div>
</div>
</div>
<div className="flex lg:hidden justify-center gap-2 mt-4">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
</div>
</section>

<section className="md:pt-32 md:pb-32 overflow-hidden bg-slate-50 pt-24 pb-24" id="services">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
<div className="">
<span className="text-[#FF6600] text-sm font-semibold uppercase tracking-widest mb-4 block">
<span className="lang-fr">Nos Solutions</span>
<span className="lang-en hidden">Our Solutions</span>
</span>
<h2 className="text-3xl md:text-5xl font-normal text-slate-900 tracking-tight">
<span className="lang-fr">Accompagnement sur-mesure</span>
<span className="lang-en hidden">Tailor-made Support</span>
</h2>
</div>
<p className="text-slate-500 text-lg md:text-xl font-light max-w-md md:text-right">
<span className="lang-fr">Des projets techniques aux finitions esthétiques, nous couvrons tous les aspects de l'habitat.</span>
<span className="lang-en hidden">From technical projects to aesthetic finishes, we cover every aspect of your home.</span>
</p>
</div>
<div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-6 lg:gap-12 snap-x snap-mandatory pb-8 -mx-6 px-6 md:-mx-12 md:px-12 lg:mx-0 lg:px-0 scrollbar-hide">

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center bg-white group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-sm">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Conception" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af0f512b-3dfe-474c-a91b-c387a050efc6_1600w.png"/>
</div>
<div className="p-8 md:p-10 relative">
<div className="-top-8 flex text-white bg-[#FF6600] w-14 h-14 md:w-16 md:h-16 absolute right-8 shadow-xl items-center justify-center rounded-sm group-hover:-translate-y-1 transition-transform">
<iconify-icon className="" height="28" icon="solar:pen-new-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">
<span className="lang-fr">Conception &amp; Études</span>
<span className="lang-en hidden">Design &amp; Studies</span>
</h3>
<p className="text-lg font-light text-slate-500 leading-relaxed">
<span className="lang-fr">Permis de construire, déclaration préalable ou étude de sol. Nous mobilisons notre réseau d'architectes pour valider la faisabilité.</span>
<span className="lang-en hidden">Building permits, declarations or soil studies. We mobilize our network of architects to validate feasibility.</span>
</p>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center bg-white group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-sm">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Construction Neuve" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0e30230-9e5c-49b9-9b3b-f664ff04450a_1600w.png"/>
</div>
<div className="p-8 md:p-10 relative">
<div className="-top-8 md:w-16 md:h-16 flex group-hover:text-[#FF6600] group-hover:border-[#FF6600] transition-all group-hover:-translate-y-1 text-slate-900 bg-white w-14 h-14 border-slate-100 border rounded-sm absolute right-8 shadow-xl items-center justify-center">
<iconify-icon className="" height="28" icon="lucide:house" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">
<span className="lang-fr">Construction Neuve</span>
<span className="lang-en hidden">New Construction</span>
</h3>
<p className="text-lg font-light text-slate-500 leading-relaxed">
<span className="lang-fr">Maison traditionnelle ou contemporaine. Nous comparons pour vous les constructeurs partenaires fiables pour bâtir votre maison.</span>
<span className="lang-en hidden">Traditional or contemporary houses. We compare reliable partner builders to build your dream home.</span>
</p>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center bg-white group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-sm">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Extension" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7209bc3-293c-49dc-a317-dd0d13838165_1600w.png"/>
</div>
<div className="p-8 md:p-10 relative">
<div className="absolute -top-8 right-8 w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-100 text-slate-900 flex items-center justify-center shadow-xl group-hover:text-[#FF6600] group-hover:border-[#FF6600] transition-all rounded-sm group-hover:-translate-y-1">
<iconify-icon className="" height="28" icon="solar:maximize-square-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">
<span className="lang-fr">Extension &amp; Agrandissement</span>
<span className="lang-en hidden">Extension &amp; Expansion</span>
</h3>
<p className="text-lg font-light text-slate-500 leading-relaxed">
<span className="lang-fr">Besoin de m² en plus ? Extension bois, surélévation ou garage. Nous sélectionnons les spécialistes pour valoriser votre bien.</span>
<span className="lang-en hidden">Need more space? Wooden extension, elevation or garage. We select specialists to increase your property value.</span>
</p>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center bg-white group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-sm">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Rénovation Intérieure" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7aee66df-14cc-43f5-b580-a2ddf3fc409b_1600w.png"/>
</div>
<div className="p-8 md:p-10 relative">
<div className="absolute -top-8 right-8 w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-100 text-slate-900 flex items-center justify-center shadow-xl group-hover:text-[#FF6600] group-hover:border-[#FF6600] transition-all rounded-sm group-hover:-translate-y-1">
<iconify-icon className="" height="28" icon="solar:paint-roller-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">
<span className="lang-fr">Rénovation Intérieure</span>
<span className="lang-en hidden">Interior Renovation</span>
</h3>
<p className="text-lg font-light text-slate-500 leading-relaxed">
<span className="lang-fr">Du sol au plafond : cuisines, salles de bains, réagencement. Nous identifions les artisans locaux qualifiés pour transformer votre intérieur.</span>
<span className="lang-en hidden">From floor to ceiling: kitchens, bathrooms, layout. We identify qualified local craftsmen to transform your interior.</span>
</p>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center bg-white group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-sm">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Rénovation Énergétique" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b45c3c7-ad77-4e3e-931b-544ad53c4592_1600w.png"/>
</div>
<div className="p-8 md:p-10 relative">
<div className="absolute -top-8 right-8 w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-100 text-slate-900 flex items-center justify-center shadow-xl group-hover:text-[#FF6600] group-hover:border-[#FF6600] transition-all rounded-sm group-hover:-translate-y-1">
<iconify-icon height="28" icon="solar:sun-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">
<span className="lang-fr">Rénovation Énergétique</span>
<span className="lang-en hidden">Energy Renovation</span>
</h3>
<p className="text-lg font-light text-slate-500 leading-relaxed">
<span className="lang-fr">Isolation, chauffage, solaire. Un accompagnement pour améliorer votre DPE, réduire vos factures et vous guider dans les aides.</span>
<span className="lang-en hidden">Insulation, heating, solar. Support to improve your EPC, reduce your bills and guide you through available grants.</span>
</p>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center bg-white group overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-sm">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Extérieur" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/982797b8-c00a-4371-aa64-95d537bcaf54_1600w.png"/>
</div>
<div className="p-8 md:p-10 relative">
<div className="absolute -top-8 right-8 w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-100 text-slate-900 flex items-center justify-center shadow-xl group-hover:text-[#FF6600] group-hover:border-[#FF6600] transition-all rounded-sm group-hover:-translate-y-1">
<iconify-icon className="" height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">
<span className="lang-fr">Aménagements Extérieurs</span>
<span className="lang-en hidden">Outdoor Landscaping</span>
</h3>
<p className="text-lg font-light text-slate-500 leading-relaxed">
<span className="lang-fr">Piscine, terrasse, paysagisme. Créez votre coin de paradis. Nous vous mettons en relation avec les experts de l'aménagement.</span>
<span className="lang-en hidden">Pool, terrace, landscaping. Create your slice of paradise. We connect you with landscaping experts.</span>
</p>
</div>
</div>
</div>
<div className="flex lg:hidden justify-center gap-2 mt-4">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
</div>
</section>

<section className="md:pt-32 md:pb-32 overflow-hidden bg-white border-slate-100 border-t pt-24 pb-24" id="realisations">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
<div className="max-w-2xl">
<span className="text-[#FF6600] text-sm font-semibold uppercase tracking-widest mb-4 block">Portfolio</span>
<h2 className="text-3xl md:text-5xl font-normal text-slate-900 tracking-tight">
<span className="lang-fr">Nos dernières réalisations</span>
<span className="lang-en hidden">Our latest projects</span>
</h2>
</div>
<div className="">
<a className="group inline-flex items-center gap-2 text-lg font-medium text-slate-900 border-b border-slate-200 pb-1 hover:border-[#FF6600] hover:text-[#FF6600] transition-all" href="#contact">
<span className="lang-fr">Voir tous les projets</span>
<span className="lang-en hidden">View all projects</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-6 lg:gap-8 snap-x snap-mandatory pb-8 -mx-6 px-6 md:-mx-12 md:px-12 lg:mx-0 lg:px-0 scrollbar-hide">

<a className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center group cursor-pointer block" href="/villa-provencale-pertuis">
<div className="aspect-[5/4] overflow-hidden mb-6 relative rounded-sm">
<img alt="Villa Provençale Pertuis" className="transition-transform duration-700 group-hover:scale-105 cursor-pointer w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bee4890f-82e6-4bbb-9e77-2cf82bf954a5_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-center bg-black/20 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bee4890f-82e6-4bbb-9e77-2cf82bf954a5_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 items-center justify-center"></div>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold tracking-widest uppercase text-[#FF6600] mb-2">
<span className="lang-fr">Rénovation</span>
<span className="lang-en hidden">Renovation</span>
</span>
<h3 className="text-2xl font-medium text-slate-900 mb-2">Villa Provençale Pertuis</h3>
<p className="text-lg font-light text-slate-500">Pertuis</p>
</div>
</a>

<a className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center group cursor-pointer block" href="/villa-luberon">
<div className="aspect-[5/4] overflow-hidden mb-6 relative rounded-sm">
<img alt="Villa Luberon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12940c14-fc4c-41ef-a118-34b49e8cbc4a_3840w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/20 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center"></div>
</div>
<div className="flex flex-col">
<span className="uppercase text-xs font-semibold text-[#FF6600] tracking-widest mb-2">
<span className="lang-fr">Rénovation</span>
<span className="lang-en hidden">Construction</span>
</span>
<h3 className="text-2xl font-medium text-slate-900 mb-2">Villa Luberon</h3>
<p className="text-lg font-light text-slate-500">Lubéron</p>
</div>
</a>

<a className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-0 snap-center group cursor-pointer block" href="/villa-plain-pied-pertuis">
<div className="aspect-[5/4] overflow-hidden mb-6 relative rounded-sm">
<img alt="Villa plain pied" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae2ade5a-4e1c-4e7e-8b3a-462f001b1138_3840w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/20 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center"></div>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold tracking-widest uppercase text-[#FF6600] mb-2">
<span className="lang-fr">Construction</span>
<span className="lang-en hidden">Renovation</span>
</span>
<h3 className="text-2xl font-medium text-slate-900 mb-2">Villa plain pied</h3>
<p className="text-slate-500 font-light text-lg">Pertuis</p>
</div>
</a>
</div>

<div className="flex lg:hidden justify-center gap-2 mt-4">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-900 text-white overflow-hidden relative" id="international">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="inline-block px-5 py-2 border border-white/20 rounded-full text-sm font-medium uppercase tracking-widest mb-10 text-[#FF6600]">
                        English Spoken
                    </span>
<h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">
<span className="lang-fr">International Clients &amp; <br/> Secondary Homes</span>
<span className="lang-en hidden">International Clients &amp; <br/> Secondary Homes</span>
</h2>
<p className="text-slate-300 font-light text-2xl leading-relaxed mb-12">
<span className="lang-fr">Buying a property in Provence? I am your trusted local partner in Pertuis. I manage your renovation remotely with full transparency.</span>
<span className="lang-en hidden">Buying a property in Provence? I am your trusted local partner in Pertuis. I manage your renovation remotely with full transparency.</span>
</p>
<ul className="space-y-6 mb-12">
<li className="flex items-center gap-5 text-xl font-light text-slate-300">
<iconify-icon className="text-[#FF6600]" height="28" icon="solar:check-circle-linear" width="28"></iconify-icon>
                            Regular video reports &amp; WhatsApp updates
                        </li>
<li className="flex items-center gap-5 text-xl font-light text-slate-300">
<iconify-icon className="text-[#FF6600]" height="28" icon="solar:check-circle-linear" width="28"></iconify-icon>
                            Administrative paperwork assistance
                        </li>
<li className="flex items-center gap-5 text-xl font-light text-slate-300">
<iconify-icon className="text-[#FF6600]" height="28" icon="solar:check-circle-linear" width="28"></iconify-icon>
                            High-end local craftsmanship
                        </li>
</ul>
<a className="inline-block border border-white/30 hover:bg-white hover:text-slate-900 text-white px-10 py-5 text-lg font-normal transition-all rounded-sm" href="#contact">
<span className="lang-fr">Schedule a call</span>
<span className="lang-en hidden">Schedule a call</span>
</a>
</div>
<div className="relative">
<div className="aspect-[3/4] md:aspect-square relative z-10">
<img alt="Provence Stone House" className="w-full h-full object-cover grayscale-[30%] contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de8acc67-9252-4c01-8cf1-854c90ba1576_1600w.png"/>
</div>
<div className="absolute top-8 -right-4 md:-right-8 w-full h-full border border-white/20 z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="bg-slate-50 p-8 md:p-16 lg:p-24 flex flex-col md:flex-row gap-12 lg:gap-16 items-start border border-slate-100">
<div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
<div className="aspect-[3/4] bg-slate-200 relative overflow-hidden grayscale rounded-sm shadow-sm">
<img alt="Expert Wizzimmo" className="object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efce4498-d735-4ffa-8b07-39a5f87267cb_800w.jpg"/>
</div>
</div>
<div className="w-full md:w-2/3 lg:w-3/4">
<h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-8 tracking-tight mt-0">
<span className="lang-fr">Votre partenaire de confiance sur le terrain.</span>
<span className="lang-en hidden">Your trusted partner on the ground.</span>
</h2>
<div className="space-y-6 text-slate-600 font-light text-lg md:text-xl leading-relaxed">
<p>
<span className="lang-fr">Passionné par l'habitat, je suis votre tiers de confiance face à la complexité des travaux. Membre du réseau, je vous apporte la force d'une enseigne nationale et mon expertise locale à Pertuis.</span>
<span className="lang-en hidden">Passionate about housing, I act as your trusted third party facing the complexity of construction works. As a network member, I bring you the strength of a national brand combined with my local expertise in Pertuis.</span>
</p>
<p className="">
<span className="lang-fr">Que vous soyez un jeune couple réalisant son premier achat ou un investisseur exigeant, ma mission reste la même : sécuriser votre projet et garantir la qualité finale.</span>
<span className="lang-en hidden">Whether you are a young couple making your first purchase or a demanding investor, my mission remains the same: to secure your project and guarantee the final quality.</span>
</p>
</div>
<div className="flex items-center gap-4 pt-8 mt-4 border-t border-slate-200/60">
<div className="text-left">
<p className="uppercase text-base font-semibold text-slate-900 tracking-wide">TONY COULY</p>
<p className="text-sm text-slate-500">
<span className="lang-fr">Courtier Wizzimmo Pertuis</span>
<span className="lang-en hidden">Wizzimmo Broker Pertuis</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 md:py-32 border-t border-slate-200 overflow-hidden" id="avis">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
<h2 className="text-3xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight">
<span className="lang-fr">La satisfaction de nos clients</span>
<span className="lang-en hidden">Our Client Satisfaction</span>
</h2>
<div className="w-16 h-1 bg-[#FF6600] mx-auto mb-8"></div>
<p className="text-slate-500 font-light text-xl">
<span className="lang-fr">Ils nous ont confié leurs projets de vie. Voici leurs retours.</span>
<span className="lang-en hidden">They entrusted us with their life projects. Here is their feedback.</span>
</p>
</div>
<div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-6 lg:gap-8 snap-x snap-mandatory pb-8 -mx-6 px-6 md:-mx-12 md:px-12 lg:mx-0 lg:px-0 scrollbar-hide">

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-white p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col h-full">
<div className="flex text-[#FF6600] gap-1 mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-slate-600 font-light text-lg leading-relaxed mb-8 flex-grow">
<span className="lang-fr">"Un accompagnement précieux pour notre extension. Tony a su trouver les bons artisans et coordonner le chantier parfaitement. Le budget a été respecté à l'euro près."</span>
<span className="lang-en hidden">"Invaluable support for our extension. Tony found the right craftsmen and coordinated the site perfectly. The budget was respected to the euro."</span>
</blockquote>
<div className="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-medium text-sm">JL</div>
<div>
<p className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Julien L.</p>
<p className="text-xs text-slate-500">Extension à Pertuis</p>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-white p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col h-full">
<div className="flex text-[#FF6600] gap-1 mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-slate-600 font-light text-lg leading-relaxed mb-8 flex-grow">
<span className="lang-fr">"Étant à l'étranger, j'avais besoin de quelqu'un de confiance. Wizzimmo a géré la rénovation intégrale de ma résidence secondaire. Communication fluide et résultat top."</span>
<span className="lang-en hidden">"Being abroad, I needed someone I could trust. Wizzimmo managed the full renovation of my secondary residence. Smooth communication and top result."</span>
</blockquote>
<div className="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-medium text-sm">SM</div>
<div>
<p className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Sarah M.</p>
<p className="text-xs text-slate-500">
<span className="lang-fr">Rénovation à Ansouis</span>
<span className="lang-en hidden">Renovation in Ansouis</span>
</p>
</div>
</div>
</div>

<div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-white p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col h-full">
<div className="flex text-[#FF6600] gap-1 mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<blockquote className="text-slate-600 font-light text-lg leading-relaxed mb-8 flex-grow">
<span className="lang-fr">"Nous avions peur des démarches administratives pour notre piscine. L'équipe s'est occupée de tout le dossier en mairie. Un vrai gain de temps et de sérénité."</span>
<span className="lang-en hidden">"We were afraid of the administrative procedures for our pool. The team handled the entire file with the town hall. A real time saver and peace of mind."</span>
</blockquote>
<div className="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-medium text-sm">PB</div>
<div>
<p className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Pierre B.</p>
<p className="text-xs text-slate-500">
<span className="lang-fr">Piscine à Cadenet</span>
<span className="lang-en hidden">Pool in Cadenet</span>
</p>
</div>
</div>
</div>
</div>

<div className="flex lg:hidden justify-center gap-2 mt-4">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto" id="contact">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-normal text-slate-900 mb-6 tracking-tight">
<span className="lang-fr">Parlons de votre projet</span>
<span className="lang-en hidden">Let's discuss your project</span>
</h2>
<p className="text-slate-500 font-light text-xl">
<span className="lang-fr">Remplissez le formulaire ci-dessous pour une estimation gratuite sous 48h.</span>
<span className="lang-en hidden">Fill out the form below for a free estimate within 48h.</span>
</p>
</div>
<form className="space-y-12 max-w-3xl mx-auto bg-white">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" htmlFor="name">
<span className="lang-fr">Nom</span><span className="lang-en hidden">Name</span>
</label>
<input className="w-full border-b border-slate-200 py-4 text-slate-900 focus:outline-none focus:border-[#FF6600] transition-colors bg-transparent placeholder-slate-300 text-xl font-light" id="name" placeholder="Votre nom / Your Name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" htmlFor="email">Email</label>
<input className="w-full border-b border-slate-200 py-4 text-slate-900 focus:outline-none focus:border-[#FF6600] transition-colors bg-transparent placeholder-slate-300 text-xl font-light" id="email" placeholder="votre@email.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="">
<label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" htmlFor="city">
<span className="lang-fr">Ville du projet</span><span className="lang-en hidden">Project City</span>
</label>
<input className="w-full border-b border-slate-200 py-4 text-slate-900 focus:outline-none focus:border-[#FF6600] transition-colors bg-transparent placeholder-slate-300 text-xl font-light" id="city" placeholder="Pertuis, Luberon..." type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" htmlFor="type">
<span className="lang-fr">Type de projet</span><span className="lang-en hidden">Project Type</span>
</label>
<select className="focus:outline-none focus:border-[#FF6600] transition-colors text-slate-900 bg-transparent w-full border-slate-200 border-b pt-4 pb-4 text-xl font-light" id="type">
<option>Rénovation Complète</option>
<option>Extension</option>
<option>Rénovation Énergétique</option>
<option>Résidence Secondaire</option>
</select>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-500 uppercase tracking-wider mb-4" htmlFor="message">
<span className="lang-fr">Détails</span><span className="lang-en hidden">Details</span>
</label>
<textarea className="w-full border-b border-slate-200 py-4 text-slate-900 focus:outline-none focus:border-[#FF6600] transition-colors bg-transparent resize-none placeholder-slate-300 text-xl font-light" id="message" placeholder="..." rows="4"></textarea>
</div>
<div className="pt-8">
<button className="w-full wizz-btn py-5 text-lg font-medium uppercase tracking-widest rounded-sm" type="button">
<span className="lang-fr">Envoyer ma demande</span>
<span className="lang-en hidden">Send my request</span>
</button>
</div>
</form>
</section>

<footer className="bg-slate-900 text-white py-24 px-6 md:px-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
<div className="">
<div className="text-3xl font-medium tracking-tight mb-8">WIZZ<span className="font-extralight">IMMO</span></div>
<p className="text-lg font-light text-slate-400 max-w-xs mb-8">
<span className="lang-fr">Tony COULY entrepreneur indépendant membre du réseau Wizzimmo.<br/> SIRET : 999 567 464 00014</span>
<span className="lang-en hidden">Tony COULY independent contractor member of the Wizzimmo network.<br/> SIRET : 999 567 464 00014</span>
</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-[#FF6600] transition-colors" href="#"><iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#FF6600] transition-colors" href="#"><iconify-icon height="24" icon="solar:like-linear" width="24"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#FF6600] transition-colors" href="#"><iconify-icon height="24" icon="solar:link-circle-linear" width="24"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
<div className="">
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#FF6600] mb-8">
<span className="lang-fr">Zone d'intervention</span>
<span className="lang-en hidden">Service Area</span>
</h4>
<ul className="space-y-4 text-lg text-slate-400 font-light">
<li>Pertuis (84120) &amp; Alentours</li>
<li>Le Puy-Ste-Réparade &amp; Rognes</li>
<li>Venelles &amp; Meyrargues</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#FF6600] mb-8">Contact</h4>
<ul className="space-y-4 text-lg text-slate-400 font-light">
<li className="">06 69 21 47 40</li>
<li className="">tony.couly@wizzimmo.fr</li>
<li className="">
<span className="lang-fr">Lundi - Vendredi: 9h - 19h</span>
<span className="lang-en hidden">Monday - Friday: 9am - 7pm</span>
</li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-800 text-center md:text-left text-slate-600 text-base font-light">
<span className="lang-fr">© 2023 Wizzimmo. Tous droits réservés.</span>
<span className="lang-en hidden">© 2023 Wizzimmo. All rights reserved.</span>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-white hidden overflow-y-auto" id="project-modal">
<button className="fixed top-6 right-6 z-50 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg hover:text-[#FF6600] transition-colors border border-slate-100" onclick="closeProject()">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="min-h-screen">
<div id="modal-content"></div>
</div>
</div>


    </>
  );
}
