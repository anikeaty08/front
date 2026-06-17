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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Router Logic
        function navigate(viewId) {
            // Hide all views
            document.getElementById('view-home').classList.add('hidden');
            document.getElementById('view-rdv').classList.add('hidden');
            document.getElementById('view-seance').classList.add('hidden');
            
            // Manage footer visibility (hide on seance page)
            const footer = document.getElementById('main-footer');
            if(viewId === 'seance') {
                footer.classList.add('hidden');
                document.body.classList.add('bg-[#0B0B0B]');
            } else {
                footer.classList.remove('hidden');
                document.body.classList.remove('bg-[#0B0B0B]');
            }

            // Show target view
            document.getElementById('view-' + viewId).classList.remove('hidden');
            window.scrollTo(0, 0);

            // If navigating to seance, reset the precheck state
            if(viewId === 'seance') {
                resetVideoRoom();
            }
        }

        // FAQ Toggle
        function toggleFaq(element) {
            const parent = element.parentElement;
            parent.classList.toggle('active');
        }

        // Video Room Logic
        let timerInterval;
        let seconds = 0;

        function resetVideoRoom() {
            document.getElementById('video-precheck').classList.remove('hidden');
            document.getElementById('video-room').classList.add('hidden');
            document.getElementById('btn-perm').classList.remove('hidden');
            document.getElementById('btn-join').classList.add('hidden');
            document.getElementById('btn-perm').innerHTML = 'Autoriser Caméra & Micro';
            clearInterval(timerInterval);
            seconds = 0;
            updateTimerDisplay();
        }

        function requestPermissions() {
            const btn = document.getElementById('btn-perm');
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Vérification...';
            
            // Simulate permission request delay
            setTimeout(() => {
                btn.classList.add('hidden');
                document.getElementById('btn-join').classList.remove('hidden');
            }, 1500);
        }

        function joinCall() {
            document.getElementById('video-precheck').classList.add('hidden');
            document.getElementById('video-room').classList.remove('hidden');
            
            // Start timer
            timerInterval = setInterval(() => {
                seconds++;
                updateTimerDisplay();
            }, 1000);
        }

        function leaveCall() {
            if(confirm("Voulez-vous vraiment quitter la séance ?")) {
                navigate('home');
            }
        }

        function updateTimerDisplay() {
            const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
            const secs = (seconds % 60).toString().padStart(2, '0');
            document.getElementById('call-timer').innerText = `${mins}:${secs}`;
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
      

<header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-[0.2em] font-medium text-[#0B0B0B] hover:opacity-70 transition-opacity" href="#" onclick="navigate('home')">
                A U R A
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-600 hover:text-[#0B0B0B] transition-colors" href="#methode" onclick="navigate('home')">La Méthode</a>
<a className="text-sm font-normal text-gray-600 hover:text-[#0B0B0B] transition-colors" href="#offres" onclick="navigate('home')">Séances</a>
<a className="text-sm font-normal text-gray-600 hover:text-[#0B0B0B] transition-colors" href="#faq" onclick="navigate('home')">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:inline-flex items-center justify-center rounded-full bg-[#3A6B5B] text-white text-sm font-medium py-2.5 px-6 transition hover:bg-[#2C5245]" onclick="navigate('rdv')">
                    Prendre RDV
                </button>
<button className="md:hidden text-gray-800 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="flex-grow pt-20" id="app-content">

<main className="block w-full" id="view-home">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8895B]/10 text-[#B8895B] text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#B8895B]"></span>
                        Consultations 100% à distance
                    </div>
<h1 className="text-4xl md:text-6xl tracking-tight font-medium leading-tight mb-6">
                        Magnétisme &amp; soins énergétiques pour retrouver <span className="text-[#B8895B]">l'équilibre</span>.
                    </h1>
<p className="text-lg md:text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto">
                        Un accompagnement bienveillant pour libérer vos blocages, apaiser votre mental et restaurer votre vitalité, confortablement depuis chez vous.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#3A6B5B] text-white text-base font-medium py-3.5 px-8 transition hover:bg-[#2C5245] shadow-sm" onclick="navigate('rdv')">
                            Réserver une séance
                        </button>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-800 text-base font-medium py-3.5 px-8 transition hover:bg-gray-50" href="#methode">
                            Comment ça marche ?
                        </a>
</div>

<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 border-t border-gray-200/60 pt-8 opacity-80">
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
                            Paiement sécurisé
                        </div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-lg" icon="solar:videocamera-linear"></iconify-icon>
                            Visio intégrée
                        </div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                            Disponibilité rapide
                        </div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-lg" icon="solar:lock-keyhole-linear"></iconify-icon>
                            Confidentialité (RGPD)
                        </div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="methode">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl tracking-tight font-medium mb-4">Un parcours fluide et rassurant</h2>
<p className="text-gray-500 text-base max-w-xl mx-auto">La distance n'altère en rien l'efficacité du soin énergétique. Voici comment se déroule notre accompagnement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-[#FBFBF8] border border-gray-100 fade-in delay-100 relative overflow-hidden group">
<div className="w-12 h-12 rounded-full bg-[#3A6B5B]/10 flex items-center justify-center text-[#3A6B5B] mb-6">
<iconify-icon className="text-2xl" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">1. Réservation</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                                Choisissez le créneau qui vous convient. Vous remplirez un bref questionnaire confidentiel pour m'aider à préparer notre séance selon vos besoins actuels.
                            </p>
</div>

<div className="p-8 rounded-2xl bg-[#FBFBF8] border border-gray-100 fade-in delay-200">
<div className="w-12 h-12 rounded-full bg-[#B8895B]/10 flex items-center justify-center text-[#B8895B] mb-6">
<iconify-icon className="text-2xl" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">2. Séance en direct</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                                Le jour J, connectez-vous directement sur ce site via un lien sécurisé. L'entretien de début de séance et le soin se font en visio, dans un espace dédié et privé.
                            </p>
</div>

<div className="p-8 rounded-2xl bg-[#FBFBF8] border border-gray-100 fade-in delay-200">
<div className="w-12 h-12 rounded-full bg-[#3A6B5B]/10 flex items-center justify-center text-[#3A6B5B] mb-6">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">3. Suivi &amp; Ancrage</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                                Après le soin énergétique, nous faisons un point. Je vous partage mes ressentis et vous donne des clés simples pour intégrer les bénéfices sur plusieurs jours.
                            </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="offres">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight font-medium mb-4">Séances &amp; Tarifs</h2>
<p className="text-gray-500 text-base max-w-xl mx-auto">Des formats adaptés à votre cheminement personnel.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col h-full">
<h3 className="text-lg font-medium mb-1">Séance Découverte</h3>
<p className="text-sm text-gray-500 mb-6">Idéal pour un premier contact</p>
<div className="text-4xl font-medium tracking-tight mb-6">45€</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Durée : 30 minutes
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Bilan énergétique rapide
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Soin de recentrage
                                </li>
</ul>
<button className="w-full rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-medium py-3 transition hover:bg-gray-50" onclick="navigate('rdv')">Choisir</button>
</div>

<div className="p-8 rounded-2xl bg-[#3A6B5B] text-white flex flex-col h-full relative shadow-xl transform md:-translate-y-4">
<div className="absolute top-0 right-8 -translate-y-1/2 bg-[#B8895B] text-white text-xs font-medium px-3 py-1 rounded-full">
                                Le plus choisi
                            </div>
<h3 className="text-lg font-medium mb-1">Séance Complète</h3>
<p className="text-white/70 text-sm mb-6">Soin en profondeur et rééquilibrage</p>
<div className="text-4xl font-medium tracking-tight mb-6">80€</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-white/90">
<iconify-icon className="text-[#B8895B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Durée : 1h00 à 1h15
                                </li>
<li className="flex items-start gap-3 text-sm text-white/90">
<iconify-icon className="text-[#B8895B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Entretien d'accueil &amp; intentions
                                </li>
<li className="flex items-start gap-3 text-sm text-white/90">
<iconify-icon className="text-[#B8895B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Travail sur l'ensemble des chakras
                                </li>
<li className="flex items-start gap-3 text-sm text-white/90">
<iconify-icon className="text-[#B8895B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Débriefing et conseils d'ancrage
                                </li>
</ul>
<button className="w-full rounded-full bg-white text-[#3A6B5B] text-sm font-medium py-3 transition hover:bg-gray-50" onclick="navigate('rdv')">Réserver</button>
</div>

<div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col h-full">
<h3 className="text-lg font-medium mb-1">Parcours Suivi</h3>
<p className="text-sm text-gray-500 mb-6">Accompagnement sur la durée (3 séances)</p>
<div className="text-4xl font-medium tracking-tight mb-6">210€</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    3 séances d'1 heure (valables 6 mois)
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Suivi d'évolution entre les séances
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Priorité sur les plannings
                                </li>
</ul>
<button className="w-full rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-medium py-3 transition hover:bg-gray-50" onclick="navigate('rdv')">Choisir</button>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-[#3A6B5B]/5 border border-[#3A6B5B]/10 rounded-2xl p-8 md:p-12 text-center">
<iconify-icon className="text-[#3A6B5B] text-3xl mb-4" icon="solar:info-circle-linear"></iconify-icon>
<h2 className="text-xl font-medium mb-4">Éthique &amp; Cadre de pratique</h2>
<p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
                            L'accompagnement énergétique est complémentaire et vise le bien-être général. <strong>Il ne remplace en aucun cas un avis, diagnostic ou traitement médical.</strong> Je n'établis pas de diagnostic et ne vous demanderai jamais d'interrompre un traitement en cours.
                        </p>
<p className="text-xs text-gray-500">
                            En cas de détresse psychologique aigüe ou d'urgence médicale, veuillez contacter le <strong>15</strong> ou le <strong>112</strong>.
                        </p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight font-medium mb-4">Ce qu'ils en disent</h2>
<div className="flex items-center justify-center gap-1 text-[#B8895B] mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-gray-400">Avis authentiques. Les ressentis peuvent varier selon chaque personne.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-[#FBFBF8] border border-gray-100">
<p className="text-sm text-gray-600 italic mb-6">"J'étais sceptique concernant le distanciel, mais la sensation de chaleur et de relâchement a été immédiate. Une vraie bulle d'air dans une période stressante."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-medium">M</div>
<div>
<div className="text-sm font-medium">Marie T.</div>
<div className="text-xs text-gray-400">Lyon</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#FBFBF8] border border-gray-100">
<p className="text-sm text-gray-600 italic mb-6">"Une écoute bienveillante incroyable. La séance m'a permis de retrouver un sommeil profond que j'avais perdu depuis des mois. Merci infiniment."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-medium">L</div>
<div>
<div className="text-sm font-medium">Laurent V.</div>
<div className="text-xs text-gray-400">Bordeaux</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#FBFBF8] border border-gray-100">
<p className="text-sm text-gray-600 italic mb-6">"Le cadre est très pro, même à travers l'écran on se sent accompagné et en sécurité. Je fais le suivi de 3 séances et l'évolution est palpable."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#B8895B]/20 flex items-center justify-center text-xs text-[#B8895B] font-medium">S</div>
<div>
<div className="text-sm font-medium">Sophie R.</div>
<div className="text-xs text-gray-400">Paris</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl tracking-tight font-medium mb-10 text-center">Questions fréquentes</h2>
<div className="border-t border-gray-200">

<div className="faq-item border-b border-gray-200 py-5">
<button className="w-full flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-medium">Une séance à distance, ça marche comment ?</span>
<iconify-icon className="faq-icon text-xl text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<p className="text-sm text-gray-600 pt-3 pb-2">L'énergie n'est pas limitée par la distance physique. Tout comme les ondes radio, l'intention énergétique voyage. La visio permet d'établir la connexion, de discuter avant et après le soin, tout en vous laissant dans le confort de votre espace sécurisant.</p>
</div>
</div>

<div className="faq-item border-b border-gray-200 py-5">
<button className="w-full flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-medium">Faut-il une caméra obligatoirement ?</span>
<iconify-icon className="faq-icon text-xl text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<p className="text-sm text-gray-600 pt-3 pb-2">La caméra est conseillée pour l'entretien de début de séance afin de créer un lien de confiance. Pendant le soin énergétique lui-même, vous pouvez choisir de l'éteindre si cela vous aide à mieux lâcher prise.</p>
</div>
</div>

<div className="faq-item border-b border-gray-200 py-5">
<button className="w-full flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-medium">Comment se passe le paiement ?</span>
<iconify-icon className="faq-icon text-xl text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<p className="text-sm text-gray-600 pt-3 pb-2">Le règlement s'effectue de manière sécurisée en ligne au moment de la réservation ou au plus tard 24h avant la séance. Une facture vous sera transmise automatiquement par email.</p>
</div>
</div>

<div className="faq-item border-b border-gray-200 py-5">
<button className="w-full flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-medium">Annulation ou report de RDV</span>
<iconify-icon className="faq-icon text-xl text-gray-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content">
<p className="text-sm text-gray-600 pt-3 pb-2">Vous pouvez annuler ou reporter votre séance jusqu'à 24h à l'avance sans frais depuis le lien reçu dans votre email de confirmation. En deçà, la séance est due.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="hidden w-full max-w-6xl mx-auto px-6 py-12" id="view-rdv">
<div className="mb-8 flex items-center gap-2">
<button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors" onclick="navigate('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Retour
                </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-8">
<div>
<h1 className="text-3xl tracking-tight font-medium mb-4">Réserver votre séance</h1>
<p className="text-sm text-gray-600 leading-relaxed">Sélectionnez la prestation souhaitée et un créneau qui vous convient. Vous recevrez un email de confirmation contenant votre lien de connexion unique.</p>
</div>
<div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-lg text-gray-400" icon="solar:laptop-linear"></iconify-icon>
                            Prérequis techniques
                        </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-xs text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Une connexion internet stable
                            </li>
<li className="flex items-start gap-2 text-xs text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Une webcam fonctionnelle (PC ou Smartphone)
                            </li>
<li className="flex items-start gap-2 text-xs text-gray-600">
<iconify-icon className="text-[#3A6B5B] text-base shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Un espace calme où vous ne serez pas dérangé(e)
                            </li>
</ul>
</div>
<div className="bg-gray-50 rounded-2xl p-6 text-xs text-gray-500">
<p className="mb-2"><strong>Un problème technique ?</strong></p>
<p>Pas d'inquiétude. Si la visio ne fonctionne pas le jour J, nous basculerons sur un appel téléphonique classique. Le soin énergétique restera tout aussi efficace.</p>
</div>
</div>

<div className="lg:col-span-3">
<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px] flex flex-col relative">

<div className="p-6 border-b border-gray-100 flex items-center justify-between">
<div>
<h2 className="text-base font-medium">A U R A - Consultations</h2>
<p className="text-xs text-gray-400 mt-1">Choisissez un horaire</p>
</div>
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>

<div className="p-6 flex-grow flex flex-col sm:flex-row gap-8">

<div className="w-full sm:w-1/2">
<div className="flex items-center justify-between mb-4">
<button className="text-gray-400 hover:text-gray-800"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<span className="text-sm font-medium">Novembre 2026</span>
<button className="text-gray-400 hover:text-gray-800"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-7 gap-1 text-center mb-2">
<div className="text-[10px] text-gray-400 font-medium">LU</div><div className="text-[10px] text-gray-400 font-medium">MA</div><div className="text-[10px] text-gray-400 font-medium">ME</div><div className="text-[10px] text-gray-400 font-medium">JE</div><div className="text-[10px] text-gray-400 font-medium">VE</div><div className="text-[10px] text-gray-400 font-medium">SA</div><div className="text-[10px] text-gray-400 font-medium">DI</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-sm">

<div className="p-2 text-gray-300">26</div><div className="p-2 text-gray-300">27</div><div className="p-2 text-gray-300">28</div><div className="p-2 text-gray-300">29</div><div className="p-2 text-gray-300">30</div><div className="p-2 text-gray-300">31</div>

<div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">1</div>
<div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">2</div>
<div className="p-2 rounded-lg bg-[#3A6B5B]/10 text-[#3A6B5B] font-medium cursor-pointer">3</div>
<div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">4</div>
<div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">5</div>
<div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">6</div>
<div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">7</div>
</div>
</div>

<div className="w-full sm:w-1/2">
<p className="text-xs text-gray-500 mb-4">Mardi 3 Novembre</p>
<div className="space-y-2">
<button className="w-full py-2.5 border border-[#3A6B5B]/30 rounded-lg text-sm text-[#3A6B5B] hover:bg-[#3A6B5B] hover:text-white transition-colors font-medium">09:30</button>
<button className="w-full py-2.5 border border-[#3A6B5B]/30 rounded-lg text-sm text-[#3A6B5B] hover:bg-[#3A6B5B] hover:text-white transition-colors font-medium">11:00</button>
<button className="w-full py-2.5 border border-[#3A6B5B]/30 rounded-lg text-sm text-[#3A6B5B] hover:bg-[#3A6B5B] hover:text-white transition-colors font-medium">14:00</button>
<button className="w-full py-2.5 border border-[#3A6B5B]/30 rounded-lg text-sm text-[#3A6B5B] hover:bg-[#3A6B5B] hover:text-white transition-colors font-medium">16:30</button>
</div>
</div>
</div>

<div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
<p className="text-xs text-gray-400 mb-3">Démo : Passez à l'étape suivante pour voir la salle de séance</p>
<button className="rounded-full bg-black text-white text-sm font-medium py-2 px-6 transition hover:bg-gray-800" onclick="navigate('seance')">
                                Simuler la confirmation &amp; aller à la séance
                            </button>
</div>
</div>
</div>
</div>
</main>

<main className="hidden w-full h-[calc(100vh-80px)] bg-[#0B0B0B] text-white relative flex flex-col" id="view-seance">

<div className="absolute inset-0 z-20 bg-[#0B0B0B] flex flex-col items-center justify-center px-6" id="video-precheck">
<div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md text-center fade-in">
<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mx-auto mb-6">
<iconify-icon className="text-3xl" icon="solar:videocamera-linear"></iconify-icon>
</div>
<h2 className="text-xl font-medium mb-2">Prêt pour votre séance ?</h2>
<p className="text-sm text-gray-400 mb-8">Votre navigateur va vous demander l'autorisation d'utiliser votre caméra et votre microphone.</p>
<div className="bg-black/30 rounded-xl p-4 mb-8 h-40 flex items-center justify-center border border-white/5 relative overflow-hidden group">
<iconify-icon className="text-5xl text-gray-600" icon="solar:user-circle-linear"></iconify-icon>
<div className="absolute bottom-3 left-3 flex gap-2">
<div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center backdrop-blur-sm"><iconify-icon icon="solar:mic-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center backdrop-blur-sm"><iconify-icon icon="solar:videocamera-linear"></iconify-icon></div>
</div>
</div>
<div className="space-y-3">
<button className="w-full rounded-full bg-[#3A6B5B] text-white text-sm font-medium py-3.5 px-8 transition hover:bg-[#2C5245]" id="btn-perm" onclick="requestPermissions()">
                            Autoriser Caméra &amp; Micro
                        </button>
<button className="hidden w-full rounded-full bg-white text-black text-sm font-medium py-3.5 px-8 transition hover:bg-gray-200" id="btn-join" onclick="joinCall()">
                            Rejoindre la salle
                        </button>
</div>
<p className="text-xs text-gray-500 mt-6 mt-4">Environnement privé &amp; chiffré. Aucun enregistrement n'est effectué.</p>
</div>
</div>

<div className="hidden flex-grow flex flex-col p-4 sm:p-6 gap-4" id="video-room">

<div className="flex items-center justify-between px-2">
<div className="flex items-center gap-3">
<div className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium flex items-center gap-2 border border-white/10">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            En direct
                        </div>
<span className="text-sm font-mono text-gray-300" id="call-timer">00:00</span>
</div>
<div className="flex items-center gap-4">
<button className="text-xs text-gray-400 hover:text-white transition flex items-center gap-1">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon> Chiffré de bout en bout
                        </button>
</div>
</div>

<div className="flex-grow flex flex-col md:flex-row gap-4 relative">

<div className="flex-grow bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

<div className="text-center z-20">
<div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl text-gray-500 mx-auto mb-4">A</div>
<h3 className="text-base font-medium">A U R A (Praticien)</h3>
<p className="text-xs text-gray-400">En attente d'arrivée...</p>
</div>

<div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-lg text-sm border border-white/10">
                            A U R A
                        </div>
</div>

<div className="w-full md:w-64 h-48 md:h-auto bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden relative flex items-center justify-center shrink-0">
<iconify-icon className="text-4xl text-gray-600" icon="solar:user-linear"></iconify-icon>
<div className="absolute bottom-3 left-3 z-20 px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-xs border border-white/10">
                            Vous
                        </div>
</div>
</div>

<div className="h-20 flex items-center justify-center gap-4 px-4">
<button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/5 transition">
<iconify-icon className="text-xl" icon="solar:mic-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/5 transition">
<iconify-icon className="text-xl" icon="solar:videocamera-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/5 transition hidden sm:flex">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</button>
<button className="px-6 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white font-medium transition shadow-lg shadow-red-500/20 ml-4" onclick="leaveCall()">
                        Quitter
                    </button>
</div>
</div>
</main>
</div>

<footer className="border-t border-gray-200 bg-[#FBFBF8] py-12 mt-auto" id="main-footer">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="text-xl tracking-[0.2em] font-medium text-[#0B0B0B] mb-4">A U R A</div>
<p className="text-xs text-gray-500 max-w-sm mb-6">Accompagnement énergétique à distance. Retrouvez votre équilibre physique, mental et émotionnel depuis votre espace de confort.</p>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#B8895B] hover:border-[#B8895B] transition" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#B8895B] hover:border-[#B8895B] transition" href="#">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Raccourcis</h4>
<ul className="space-y-2">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition" href="#methode" onclick="navigate('home')">La Méthode</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition" href="#offres" onclick="navigate('home')">Séances &amp; Tarifs</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition" href="#faq" onclick="navigate('home')">Questions fréquentes</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4">Légal</h4>
<ul className="space-y-2">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition" href="#">Mentions légales</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition" href="#">Politique de confidentialité</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-gray-400">© 2026 AURA Magnétisme. Tous droits réservés.</p>
<p className="text-[10px] text-gray-400">Hébergé en France (UE). Empreinte carbone minimisée.</p>
</div>
</footer>



    </>
  );
}
