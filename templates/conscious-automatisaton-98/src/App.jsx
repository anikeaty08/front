import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        const form = document.getElementById('webhook-form');
        const submitBtn = document.getElementById('submit-btn');
        const modal = document.getElementById('success-modal');
        const modalContent = document.getElementById('success-modal-content');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const originalBtnContent = submitBtn.innerHTML;
            
            // Set loading state
            submitBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon><span>Envoi en cours...</span>';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

            try {
                // Using no-cors prevents CORS issues on front-end for simple webhook ingest
                await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Reset form
                form.reset();
                
                // Show modal slightly delayed to allow scroll to start
                setTimeout(() => {
                    showModal();
                }, 400);

            } catch (error) {
                console.error('Erreur lors de l\'envoi:', error);
                alert("Une erreur est survenue lors de l'envoi de votre demande.");
            } finally {
                // Restore button state
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
            }
        });

        function showModal() {
            modal.classList.remove('hidden');
            // Force browser reflow to enable transition
            void modal.offsetWidth;
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            // Wait for transition to finish before hiding
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-orange-50/80 border-b border-orange-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium tracking-tighter text-sm md:text-base uppercase text-orange-900">
                C O N S C I E N C E
            </div>
<div className="hidden md:flex gap-8 text-sm text-orange-500 font-medium">
<a className="hover:text-orange-900 transition-colors" href="#particuliers">L'Application</a>
<a className="hover:text-orange-900 transition-colors" href="#professionnels">Service Sur Mesure</a>
</div>
<a className="text-xs md:text-sm bg-orange-900 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-800 transition-colors shadow-sm" href="#contact">
                Prendre rendez-vous
            </a>
</div>
</nav>

<main>
<section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto relative">
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-orange-200/30 blur-3xl rounded-full -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-orange-600 text-xs font-medium mb-8 border border-orange-200/80 shadow-sm">
<iconify-icon icon="solar:moon-stars-linear" width="14"></iconify-icon>
                Animateur de conscience
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-orange-900 mb-6 leading-[1.1]">
               Sublimez votre quotidien.<br className="hidden md:block"/>
<span className="text-orange-400">Automatisez le reste.</span>
</h1>
<p className="text-base md:text-lg text-orange-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Deux chemins vers un seul but : prendre le temps de se retrouver. Découvrez une application pour redonner du sens, et un service d'automatisation sur mesure pour se libérer du temps et le prendre.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
<a className="w-full sm:w-auto bg-orange-900 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-800 transition-all flex items-center justify-center gap-2 shadow-md" href="#particuliers">
                    Découvrir l'App <iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-orange-900 border border-orange-200 px-6 py-3 rounded-full font-medium hover:bg-orange-50 transition-all flex items-center justify-center gap-2 shadow-sm" href="#professionnels">
                    Solutions Pro <iconify-icon icon="solar:widget-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-orange-100" id="particuliers">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-orange-900">Pour Vous : L'Art de Vivre</h2>
<p className="text-sm md:text-base text-orange-500 leading-relaxed">Une application pratique conçue pour briser la mécanique du quotidien, sortir du pilote automatique et recréer des routines sacrées pour vivre pleinement en conscience.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl bg-orange-50/50 border border-orange-100 transition-colors hover:bg-orange-50">
<div className="w-10 h-10 rounded-2xl bg-white border border-orange-200 flex items-center justify-center mb-6 text-orange-700 shadow-sm">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 tracking-tight text-orange-900">Conscience des habitudes</h3>
<p className="text-sm text-orange-500 leading-relaxed">Identifiez vos schémas répétitifs et reprenez le contrôle : agir plutôt que réagir.</p>
</div>
<div className="p-8 rounded-3xl bg-orange-50/50 border border-orange-100 transition-colors hover:bg-orange-50">
<div className="w-10 h-10 rounded-2xl bg-white border border-orange-200 flex items-center justify-center mb-6 text-orange-700 shadow-sm">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 tracking-tight text-orange-900">Routines Sacrées</h3>
<p className="text-sm text-orange-500 leading-relaxed">Transformez des instants banals, le normal en véritables rituels pour sublimer et apprécier chaque instant.</p>
</div>
<div className="p-8 rounded-3xl bg-orange-50/50 border border-orange-100 transition-colors hover:bg-orange-50">
<div className="w-10 h-10 rounded-2xl bg-white border border-orange-200 flex items-center justify-center mb-6 text-orange-700 shadow-sm">
<iconify-icon icon="solar:sun-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 tracking-tight text-orange-900">Présence à soi</h3>
<p className="text-sm text-orange-500 leading-relaxed">Un accompagnement évolutif pour retrouver du gout, l'essence et s'aligner en profondeur à l'instant présent.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-orange-900 text-orange-50 overflow-hidden relative" id="professionnels">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-800/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-800 border border-orange-700 text-orange-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:buildings-2-linear" width="14"></iconify-icon>
                            Solopreneurs &amp; PME
                        </div>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6 leading-[1.2] text-white">
                            Ne soyez plus victime <br className="hidden md:block"/>
<span className="text-orange-500">de votre succès.</span>
</h2>
<p className="text-sm md:text-base text-orange-400 mb-8 leading-relaxed max-w-lg">
                            Vous manquez de temps pour développer votre vision ou profiter de votre vie personnelle ? Mon service d'automatisation sur mesure clé en main s'occupe de l'invisible.
                            Prenez 20 minutes pour un audit gratuit 
                        </p>
<div className="space-y-5 mb-8">
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-orange-800 p-1.5 rounded-lg border border-orange-700 text-orange-300">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-orange-200 mb-1">Gagnez un temps précieux</h4>
<p className="text-xs text-orange-500">Déléguez les tâches répétitives aux systèmes et recentrez-vous sur l'essentiel.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-orange-800 p-1.5 rounded-lg border border-orange-700 text-orange-300">
<iconify-icon icon="solar:wallet-money-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-orange-200 mb-1">Économisez pour mieux investir</h4>
<p className="text-xs text-orange-500">Réduisez vos coûts opérationnels de manière optimale grâce à des séquences automatisés.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 bg-orange-800 p-1.5 rounded-lg border border-orange-700 text-orange-300">
<iconify-icon icon="solar:scale-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-orange-200 mb-1">Retrouvez l'équilibre</h4>
<p className="text-xs text-orange-500">Une structure fiable qui tourne sans vous, pour réconcilier vie professionnelle et personnelle.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-md mx-auto lg:max-w-none">
<div className="bg-[#111] border border-orange-800 rounded-3xl p-6 shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-br from-orange-800/10 to-transparent rounded-3xl"></div>
<div className="flex items-center justify-between mb-6 border-b border-orange-800 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-orange-800"></div>
<div className="w-3 h-3 rounded-full bg-orange-800"></div>
<div className="w-3 h-3 rounded-full bg-orange-800"></div>
</div>
<div className="text-xs text-orange-600 font-medium font-mono">Workflow en cours</div>
</div>
<div className="space-y-4 relative z-10">
<div className="bg-orange-900/50 rounded-xl border border-orange-800 p-4 flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-orange-800 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:inbox-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-orange-700 rounded-full mb-2"></div>
<div className="h-1.5 w-16 bg-orange-800 rounded-full"></div>
</div>
</div>
<div className="flex justify-center my-2">
<div className="w-px h-6 bg-orange-800"></div>
</div>
<div className="bg-orange-900/50 rounded-xl border border-orange-800 p-4 flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-orange-800 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-32 bg-orange-700 rounded-full mb-2"></div>
<div className="h-1.5 w-20 bg-orange-800 rounded-full"></div>
</div>
<div className="w-2 h-2 rounded-full bg-amber-500/50 blur-[2px]"></div>
</div>
<div className="flex justify-center my-2">
<div className="w-px h-6 bg-orange-800"></div>
</div>
<div className="bg-orange-900/50 rounded-xl border border-orange-800 p-4 flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-orange-800 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-20 bg-orange-700 rounded-full mb-2"></div>
<div className="h-1.5 w-24 bg-orange-800 rounded-full"></div>
</div>
<iconify-icon className="text-orange-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 text-center max-w-2xl mx-auto">
<iconify-icon className="text-orange-300 mb-6" icon="solar:infinity-linear" width="32"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4 text-orange-900">Le temps est notre ressource la plus sacrée.</h3>
<p className="text-sm md:text-base text-orange-500 leading-relaxed">
                Que vous cherchiez à redonner du sens à vos journées ou à vous libérer de l'opérationnel, l'objectif demeure : dégager de l'espace mental pour s'ouvrir et se permettre de ressentir pour vivre pleinement.
            </p>
</section>

<section className="py-24 px-6 bg-orange-100/50 border-t border-orange-200/60" id="contact">
<div className="max-w-xl mx-auto">
<div className="bg-white rounded-[2rem] p-8 md:p-10 border border-orange-200/80 shadow-sm">
<h2 className="text-2xl font-semibold tracking-tight mb-2 text-orange-900 text-center">Initié la transformation</h2>
<p className="text-sm text-orange-500 mb-10 text-center">Choisissez votre voie et parlez-moi de votre besoin.</p>
<form action="https://n8n.srv999617.hstgr.cloud/webhook/9329bcef-4fc3-4354-9f11-6bcdcf5ba678" className="space-y-6" id="webhook-form" method="POST">

<div className="grid grid-cols-2 gap-4 mb-2">
<label className="relative cursor-pointer group">
<input checked="" className="peer sr-only" name="service" type="radio" value="application"/>
<div className="p-4 rounded-2xl border border-orange-200 bg-orange-50 peer-checked:border-orange-900 peer-checked:bg-white peer-checked:shadow-sm transition-all text-center group-hover:border-orange-300">
<iconify-icon className="text-orange-400 peer-checked:text-orange-900 mb-2 transition-colors" icon="solar:smartphone-linear" width="24"></iconify-icon>
<div className="text-sm font-medium text-orange-700 peer-checked:text-orange-900 transition-colors">Particulier</div>
<div className="text-[11px] text-orange-400 mt-0.5">L'Application</div>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="service" type="radio" value="automatisation"/>
<div className="p-4 rounded-2xl border border-orange-200 bg-orange-50 peer-checked:border-orange-900 peer-checked:bg-white peer-checked:shadow-sm transition-all text-center group-hover:border-orange-300">
<iconify-icon className="text-orange-400 peer-checked:text-orange-900 mb-2 transition-colors" icon="solar:cpu-linear" width="24"></iconify-icon>
<div className="text-sm font-medium text-orange-700 peer-checked:text-orange-900 transition-colors">Professionnel</div>
<div className="text-[11px] text-orange-400 mt-0.5">Automatisation</div>
</div>
</label>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-orange-700 mb-1.5 ml-1" htmlFor="name">Prénom &amp; Nom</label>
<input className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-orange-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-900 transition-all text-sm text-orange-900 placeholder-orange-400" id="name" name="name" placeholder="Jean Dupont" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-orange-700 mb-1.5 ml-1" htmlFor="email">Adresse email</label>
<input className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-orange-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-900 transition-all text-sm text-orange-900 placeholder-orange-400" id="email" name="email" placeholder="jean@exemple.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-orange-700 mb-1.5 ml-1" htmlFor="message">Votre situation actuelle</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-orange-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-900/10 focus:border-orange-900 transition-all text-sm text-orange-900 placeholder-orange-400 resize-none" id="message" name="message" placeholder="Décrivez brièvement ce que vous souhaitez accomplir ou automatiser..." rows="4"></textarea>
</div>
</div>
<button className="w-full bg-orange-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-orange-800 transition-colors shadow-md flex items-center justify-center gap-2 text-sm mt-2" id="submit-btn" type="submit">
<span>Envoyer la demande</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-orange-400 text-center mt-4">Vos données restent confidentielles et ne seront jamais partagées.</p>
</form>
</div>
</div>
</section>
</main>

<footer className="py-10 text-center border-t border-orange-200 bg-white">
<div className="font-medium tracking-tighter text-sm uppercase text-orange-300 mb-3">
            C N S C N C E
        </div>
<p className="text-xs text-orange-400">© 2024. Créer du temps, éveiller l'esprit.</p>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300" id="success-modal">
<div className="absolute inset-0 bg-orange-900/20 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="bg-white rounded-[2rem] p-8 max-w-sm w-full mx-4 shadow-2xl relative z-10 transform scale-95 transition-transform duration-300 border border-orange-100" id="success-modal-content">
<div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 text-orange-900 mx-auto shadow-sm">
<iconify-icon icon="solar:letter-opened-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-center text-orange-900 mb-2">Demande envoyée</h3>
<p className="text-sm text-orange-500 text-center mb-8 leading-relaxed">Regarder votre boite mail pour poursuivre.</p>
<button className="w-full bg-orange-900 text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-orange-800 transition-colors shadow-sm" onclick="closeModal()">
                Fermer
            </button>
</div>
</div>



    </>
  );
}
