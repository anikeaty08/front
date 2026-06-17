import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#1f2937',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
}
}
}
}



        // Tab switching logic
        function switchTab(tabId) {
            // Hide all content sections
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show target content section
            const targetSection = document.getElementById('content-' + tabId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                targetSection.classList.add('animate-fade-in');
            }

            // Reset tab styles
            const tabs = document.querySelectorAll('.tab-btn');
            tabs.forEach(tab => {
                // Inactive styles
                tab.className = 'tab-btn group flex items-center w-full min-w-max lg:min-w-0 px-4 py-3 text-sm font-medium rounded-lg text-left transition-all duration-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900';
                
                // Reset icon color
                const icon = tab.querySelector('.iconify');
                if (icon) {
                    icon.classList.remove('text-slate-500');
                    icon.classList.add('text-slate-400');
                }
            });

            // Set active tab styles
            const activeTab = document.getElementById('tab-' + tabId);
            if (activeTab) {
                activeTab.className = 'tab-btn group flex items-center w-full min-w-max lg:min-w-0 px-4 py-3 text-sm font-medium rounded-lg text-left transition-all duration-200 bg-white text-slate-900 shadow-sm ring-1 ring-slate-200';
                
                // Set active icon color
                const icon = activeTab.querySelector('.iconify');
                if (icon) {
                    icon.classList.remove('text-slate-400');
                    icon.classList.add('text-slate-500');
                }
            }
        }

        // Accordion toggle logic
        function toggleAccordion(button) {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            // Close all other accordions in the same container (optional - keeps UI clean)
            // const currentSection = button.closest('.content-section');
            // const allButtons = currentSection.querySelectorAll('.accordion-btn');
            // allButtons.forEach(btn => {
            //    if (btn !== button) {
            //        btn.setAttribute('aria-expanded', 'false');
            //        btn.nextElementSibling.style.maxHeight = null;
            //        btn.nextElementSibling.classList.remove('open');
            //    }
            // });

            // Toggle current
            button.setAttribute('aria-expanded', !isExpanded);
            const content = button.nextElementSibling;
            
            if (!isExpanded) {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.classList.remove('open');
                content.style.maxHeight = null;
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="w-full max-w-7xl mx-auto pt-16 pb-12 px-6 lg:px-8">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-4">
<div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-3 py-1 shadow-subtle">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Centre d'aide</span>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Questions fréquentes
            </h1>
<p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed">
                Tout ce que vous devez savoir sur nos services d'infogérance, de cybersécurité, de cloud et d'intégration.
            </p>
</div>
</header>

<main className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-24">
<div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">

<nav className="lg:col-span-4 lg:sticky lg:top-8 mb-8 lg:mb-0">
<div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1 overflow-x-auto hide-scroll pb-2 lg:pb-0" role="tablist">

<button className="tab-btn group flex items-center w-full min-w-max lg:min-w-0 px-4 py-3 text-sm font-medium rounded-lg text-left transition-all duration-200 bg-white text-slate-900 shadow-sm ring-1 ring-slate-200" id="tab-infogerance" onclick="switchTab('infogerance')">
<span className="iconify w-5 h-5 mr-3 text-slate-500 group-hover:text-slate-900 transition-colors" data-icon="lucide:monitor-cog" data-strokeWidth="1.5"></span>
                        Infogérance
                    </button>

<button className="tab-btn group flex items-center w-full min-w-max lg:min-w-0 px-4 py-3 text-sm font-medium rounded-lg text-left transition-all duration-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900" id="tab-cyber" onclick="switchTab('cyber')">
<span className="iconify w-5 h-5 mr-3 text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:shield-check" data-strokeWidth="1.5"></span>
                        Cybersécurité
                    </button>

<button className="tab-btn group flex items-center w-full min-w-max lg:min-w-0 px-4 py-3 text-sm font-medium rounded-lg text-left transition-all duration-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900" id="tab-cloud" onclick="switchTab('cloud')">
<span className="iconify w-5 h-5 mr-3 text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:cloud" data-strokeWidth="1.5"></span>
                        Cloud &amp; Hébergement
                    </button>

<button className="tab-btn group flex items-center w-full min-w-max lg:min-w-0 px-4 py-3 text-sm font-medium rounded-lg text-left transition-all duration-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900" id="tab-integration" onclick="switchTab('integration')">
<span className="iconify w-5 h-5 mr-3 text-slate-400 group-hover:text-slate-900 transition-colors" data-icon="lucide:network" data-strokeWidth="1.5"></span>
                        Intégration &amp; Conseil
                    </button>
</div>
</nav>

<div className="lg:col-span-8">

<section className="content-section space-y-4" id="content-infogerance">
<div className="mb-6 border-b border-slate-200 pb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Vos questions sur la gestion de votre informatique</h2>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Gérez-vous le support pour l'ensemble de nos utilisateurs, même à distance ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Oui. Notre service inclut un support helpdesk complet pour vos collaborateurs. Nous assurons le maintien en condition opérationnelle (MCO) de vos postes de travail et serveurs, que vos équipes soient sur site ou en télétravail.
                            </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">La sécurité est-elle incluse dans le contrat d'infogérance ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Absolument. La sécurité est native dans notre approche ("Secure by Design"). Nous incluons le monitoring continu de vos serveurs et réseaux, ainsi que la gestion rigoureuse des mises à jour (Patch Management) pour prévenir les failles avant qu'elles ne soient exploitées.
                            </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Pouvez-vous collaborer avec notre service informatique interne (DSI) ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Oui. Nous intervenons régulièrement en co-administration ou en renfort. Cela permet à votre DSI de se concentrer sur les projets stratégiques ou le développement, tandis que nous gérons le quotidien, la maintenance et le monitoring.
                            </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Que se passe-t-il en cas de panne critique sur un serveur ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Notre équipe intervient immédiatement grâce à nos outils de supervision. Nous garantissons le Maintien en Condition Opérationnelle (MCO) avec des engagements de temps de rétablissement clairs pour minimiser l'impact sur votre production.
                            </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">L'offre est-elle flexible si notre entreprise grandit ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Oui. Nos contrats sont évolutifs. Que vous ayez besoin d'intégrer de nouveaux collaborateurs, de déployer de nouveaux postes ou d'étendre votre périmètre, nous ajustons les ressources et le suivi sans rupture de service.
                            </div>
</div>
</div>
</section>

<section className="content-section hidden space-y-4" id="content-cyber">
<div className="mb-6 border-b border-slate-200 pb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Vos questions sur la protection de votre SI</h2>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Quelle est la différence entre votre offre MDR/SOC et un antivirus classique ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Un antivirus est réactif, notre SOC (Security Operations Center) est proactif. Avec notre offre MDR (Managed Detection &amp; Response), nos analystes surveillent vos systèmes 24/7, chassent les menaces invisibles et interviennent humainement pour bloquer les attaques complexes que les logiciels seuls ne voient pas.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Comment aidez-vous les entreprises concernées par la directive NIS2 ou ISO 27001 ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Via notre pôle GRC (Gouvernance, Risques, Conformité). Nous vous accompagnons dans l'élaboration de politiques de sécurité, la préparation aux audits et la mise en conformité avec les normes réglementaires (Loi 05-20, ISO 27001, RGPD).
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Comment savoir si mon entreprise est actuellement vulnérable ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Nous utilisons notre VOC (Vulnerability Operations Center). Nous réalisons des tests d'intrusion (Pentests) et des audits 360° pour identifier vos failles. Nous calculons ensuite un True Risk Score pour vous dire exactement quoi corriger en priorité.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Que se passe-t-il concrètement en cas d'attaque (Ransomware, intrusion) ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Nous activons la réponse à incident. Nos experts isolent les systèmes infectés (confinement), neutralisent la menace et coordonnent la restauration des données pour un retour à la normale le plus rapide possible.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Sensibilisez-vous nos employés aux risques (Phishing, etc.) ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Oui, car l'humain est souvent la première ligne de défense. Nous proposons des programmes de sensibilisation et de formation à la cybersécurité pour renforcer la vigilance de vos équipes face aux tentatives d'ingénierie sociale.
                            </div>
</div>
</div>
</section>

<section className="content-section hidden space-y-4" id="content-cloud">
<div className="mb-6 border-b border-slate-200 pb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Vos questions sur l'hébergement et le Cloud</h2>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Où sont hébergées mes données avec NEXT2i ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Vos données sont souveraines. Elles sont hébergées principalement en France dans nos datacenters. Nous sommes également opérateurs de notre propre réseau IP (AS-203547), ce qui nous permet de maîtriser la chaîne de bout en bout.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Je suis perdu entre IaaS, BaaS et DaaS. De quoi ai-je besoin ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Nous adaptons l'offre à votre besoin : le IaaS pour louer une infrastructure virtuelle (serveurs), le BaaS pour externaliser vos sauvegardes, et le DaaS pour fournir des bureaux virtuels accessibles partout à vos employés.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Pouvez-vous gérer une architecture Cloud Hybride ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Oui. Nous connectons vos serveurs sur site (On-Premise) avec nos datacenters ou des clouds publics. Nos architectes conçoivent des environnements hybrides sécurisés pour allier flexibilité et contrôle des données critiques.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Proposez-vous des Plans de Reprise d'Activité (PRA) ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Oui. Pour garantir la résilience de votre entreprise, nous concevons des PRA (Plan de Reprise d'Activité) et PCA sur mesure. Nous identifions vos ressources essentielles pour redémarrer votre activité rapidement après un sinistre majeur.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Comment se passe la migration de mes données vers votre Cloud ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Nous gérons la migration de A à Z. Après un audit de votre existant, nos équipes planifient le transfert, optimisent l'architecture cible et assurent la bascule avec un impact minimal sur vos utilisateurs.
                            </div>
</div>
</div>
</section>

<section className="content-section hidden space-y-4" id="content-integration">
<div className="mb-6 border-b border-slate-200 pb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Vos questions sur vos projets et infrastructures</h2>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Pouvez-vous déployer des infrastructures physiques (Câblage, Wi-Fi) ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Oui. Au-delà de l'informatique, nous prenons en charge le déploiement de vos réseaux filaires, fibre optique et Wi-Fi. Nous livrons une infrastructure connectée clé en main pour vos bureaux ou sites industriels.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Qu'est-ce que l'offre de Régie et quand l'utiliser ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                La Régie consiste à mettre à votre disposition nos experts techniques directement dans vos équipes pour une durée déterminée. C'est idéal pour absorber une surcharge de travail ou apporter une expertise pointue sans recruter en interne.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Gérez-vous le déploiement de nouveaux postes informatiques ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Oui. Nous assurons le déploiement de postes, serveurs et applications. Nous préparons (masterisation), installons et connectons votre matériel pour qu'il soit opérationnel dès son arrivée sur site.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Comment se déroule une mission de conseil ou d'audit IT ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                Nous commençons par une phase d'écoute et d'audit 360° de votre existant. Nous analysons vos besoins métiers, vos contraintes techniques et vos risques pour vous proposer une feuille de route d'optimisation de votre SI claire et chiffrée.
                            </div>
</div>
</div>
<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-subtle">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none" onclick="toggleAccordion(this)">
<span className="text-sm font-medium text-slate-900 pr-4">Pouvez-vous m'aider à moderniser mon infrastructure vieillissante ?</span>
<span className="iconify accordion-icon text-slate-400 w-5 h-5 flex-shrink-0" data-icon="lucide:chevron-down" data-strokeWidth="1.5"></span>
</button>
<div className="accordion-content bg-slate-50/50">
<div className="px-6 pb-5 pt-0 text-sm text-slate-600 leading-relaxed">
                                C'est notre métier d'intégrateur. Nous vous accompagnons dans les migrations d'infrastructure et la modernisation de votre SI, en remplaçant ou en optimisant vos équipements pour gagner en performance et en sécurité.
                            </div>
</div>
</div>
</section>
</div>
</div>
</main>


    </>
  );
}
