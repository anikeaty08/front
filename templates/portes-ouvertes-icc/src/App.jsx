import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Poppins', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
handwriting: ['Pacifico', 'cursive'],
},
colors: {
icc: {
bg: '#FDFBF7',
bgalt: '#F9F6F0',
white: '#FFFFFF',
gold: '#D4AF37',
blue: '#A8DADC',
pink: '#F1C6D0',
green: '#C9D5B5',
text: '#2D3436',
title: '#1A1A1A',
footer: '#F5F5F5'
}
},
boxShadow: {
'card': '0 4px 20px rgba(0,0,0,0.08)',
'card-hover': '0 8px 30px rgba(0,0,0,0.12)',
'glow': '0 0 20px rgba(212, 175, 55, 0.5)',
'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
},
animation: {
'heartbeat': 'heartbeat 2.5s ease-in-out infinite',
'float': 'float 6s ease-in-out infinite',
'confetti': 'confetti 10s linear infinite',
'draw-line': 'drawLine 1.5s ease-out forwards',
},
keyframes: {
heartbeat: {
'0%, 100%': { transform: 'scale(1)' },
'50%': { transform: 'scale(1.03)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
confetti: {
'0%': { transform: 'translateY(-10vh) rotate(0deg)' },
'100%': { transform: 'translateY(110vh) rotate(360deg)' },
},
drawLine: {
'0%': { height: '0' },
'100%': { height: '100%' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Animations and intersection observers existing logic here...
        
        // Modal Logic
        function openPopup() {
            const modal = document.getElementById('registration-modal');
            const backdrop = document.getElementById('modal-backdrop');
            const content = document.getElementById('modal-content');
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Trigger reflow to ensure transition runs
            void modal.offsetWidth;
            
            backdrop.classList.remove('opacity-0');
            backdrop.classList.add('opacity-100');
            
            content.classList.remove('opacity-0', 'scale-95');
            content.classList.add('opacity-100', 'scale-100');
            
            // Prevent scrolling on background
            document.body.style.overflow = 'hidden';
        }

        function closePopup() {
            const modal = document.getElementById('registration-modal');
            const backdrop = document.getElementById('modal-backdrop');
            const content = document.getElementById('modal-content');
            
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            
            content.classList.remove('opacity-100', 'scale-100');
            content.classList.add('opacity-0', 'scale-95');
            
            // Wait for transition to finish before hiding
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }, 300);
        }

        // Close modal on Escape key press
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closePopup();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
<div className="absolute inset-0" id="confetti-container"></div>
</div>

<div className="fixed bottom-0 left-0 right-0 p-4 z-40 transition-transform duration-500 transform translate-y-full md:hidden bg-icc-white/90 backdrop-blur-md border-t border-icc-footer shadow-[0_-10px_20px_rgba(0,0,0,0.05)]" id="sticky-cta">
<div className="flex items-center justify-between max-w-md mx-auto">
<div className="text-[15px] font-medium text-icc-title flex items-center gap-2">
<iconify-icon className="text-icc-gold" icon="solar:calendar-linear" width="1.2em"></iconify-icon>
                14 mai
            </div>
<button className="bg-icc-gold text-icc-white px-7 py-3 rounded-xl text-[15px] font-semibold shadow-glow transition-all active:scale-95 animate-heartbeat" onclick="openPopup()">
                Je m'inscris
            </button>
</div>
</div>


<section className="min-h-[90vh] flex flex-col md:pt-36 md:pb-24 md:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-icc-white to-icc-blue/20 z-10 pt-32 pr-6 pb-16 pl-6 relative items-center justify-center">
<div className="max-w-[800px] mx-auto text-center reveal-up mt-8 md:mt-10 is-visible">
<p className="text-[14px] md:text-[15px] font-medium tracking-widest uppercase text-icc-gold mb-6 flex items-center justify-center gap-2">
<iconify-icon icon="solar:stars-linear" width="1.2em"></iconify-icon>
                Bienvenue à la Journée Portes Ouvertes de l'ICC
            </p>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-[0.02em] font-serif text-icc-title font-bold leading-[1.3] mb-8 relative">
<span className="font-handwriting text-icc-gold text-[110%] md:text-[120%] inline-block -rotate-2 mr-2 font-normal">Vous êtes au bon endroit.</span><br/>
                Au bon moment.
            </h1>
<p className="text-base md:text-lg text-icc-text mb-10 max-w-[700px] mx-auto font-normal leading-relaxed">
                Si vous lisez ces lignes, c'est que quelque chose en vous sait. Le 14 mai 2026, l'Institut Choix et Conscience vous ouvre ses portes pour une journée exceptionnelle, 100% en ligne, dédiée à une seule chose : vous offrir les clés pour devenir acteur de votre propre transformation.
            </p>
<div className="space-y-4 text-[15px] md:text-base font-medium text-icc-title mb-12 max-w-[600px] mx-auto">
<p className="flex items-center justify-center gap-2"><iconify-icon className="text-icc-gold" icon="solar:star-circle-linear"></iconify-icon>Une journée pour choisir plutôt que subir.</p>
<p className="flex items-center justify-center gap-2"><iconify-icon className="text-icc-gold" icon="solar:star-circle-linear"></iconify-icon>Une journée pour transformer en profondeur plutôt que rester dans le mental.</p>
<p className="flex items-center justify-center gap-2"><iconify-icon className="text-icc-gold" icon="solar:star-circle-linear"></iconify-icon>Une journée pour révéler la puissance qui sommeille en vous.</p>
</div>
<div className="flex flex-col items-center">
<button className="group relative inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 bg-icc-gold text-icc-white rounded-xl font-semibold text-base md:text-lg transition-all duration-300 shadow-glow animate-heartbeat hover:bg-[#C29E30] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]" onclick="openPopup()">
<span className="relative flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear" width="1.2em"></iconify-icon>
                        JE RÉSERVE MA PLACE GRATUITE
                    </span>
</button>
<p className="mt-6 text-[14px] text-icc-text/70 flex items-center gap-1.5 font-normal">
<iconify-icon className="text-icc-gold" icon="solar:shield-check-linear"></iconify-icon>
                    C'est gratuit. Inscription sans carte bancaire.
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-icc-bgalt relative z-10" id="programme">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16 md:mb-24 reveal-up">
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] font-serif text-icc-title font-semibold mb-6">
                    Au Programme : Une Journée pour Transformer Votre Vie
                </h2>
<p className="text-base md:text-lg text-icc-text font-normal max-w-[800px] mx-auto leading-relaxed">
                    Un cheminement précis conçu pour vous faire passer de la théorie à l'intégration dans le corps.
                </p>
</div>
<div className="timeline-container wrap overflow-hidden h-full pt-4 pr-4 pb-4 pl-4 relative max-w-[1000px] mx-auto">

<div className="absolute border-l-[3px] border-icc-gold h-full left-[28px] md:left-1/2 transform md:-translate-x-1/2 top-0 z-0 timeline-line rounded-full opacity-60"></div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-bg flex items-center justify-center text-icc-gold">
<iconify-icon icon="solar:sunrise-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
<p className="text-[15px] font-medium text-icc-gold mb-2">9h00</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-3 leading-snug">Ouverture &amp; Mode d'Emploi</h3>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">Accueil chaleureux, présentation de la journée et préparation pour vivre pleinement cette expérience transformatrice.</p>
<div className="bg-icc-bgalt rounded-xl p-4 text-[14px] flex items-start gap-3">
<iconify-icon className="text-icc-gold mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Tous les participants prêts à s'engager pleinement dans leur transformation dès la première minute.</p>
</div>
</div>
</div>
</div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-blue/20 flex items-center justify-center text-[#3B8B8E]">
<iconify-icon icon="solar:brain-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
<p className="text-[15px] font-medium text-icc-blue mb-2">9h15</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-1 leading-snug">Le Choix, la Confiance et la Foi</h3>
<p className="text-[14px] text-icc-text/70 mb-4 font-medium uppercase tracking-wider">Par Jean-Luc De Wachter</p>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">Pourquoi certains choix changent tout… et d'autres rien ? Jean-Luc dévoile la mécanique profonde du choix pour engendrer la confiance et vivre avec foi.</p>
<div className="bg-icc-bgalt rounded-xl p-4 text-[14px] flex items-start gap-3">
<iconify-icon className="text-icc-gold mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Ceux qui veulent arrêter de douter et passer à l'action avec certitude.</p>
</div>
</div>
</div>
</div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-pink flex items-center justify-center text-icc-white">
<iconify-icon icon="solar:fire-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-pink rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-icc-pink/50">
<p className="text-[15px] font-semibold text-[#1A1A1A] opacity-70 mb-2">10h30</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-1 leading-snug">Initiation au <span className="font-handwriting text-icc-title text-[110%] ml-1">Protocole CALL</span></h3>
<p className="text-[14px] text-icc-title/70 mb-4 font-medium uppercase tracking-wider">Par Sophie Delrot</p>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">Et si un protocole simple en 21 étapes pouvait changer votre vie ? Découvrez cet outil révolutionnaire pour poser des choix alignés et non-négociables.</p>
<div className="bg-icc-white/60 rounded-xl p-4 text-[14px] flex items-start gap-3 backdrop-blur-sm">
<iconify-icon className="text-icc-title mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Ceux qui veulent arrêter de tolérer ce qui ne leur convient plus.</p>
</div>
</div>
</div>
</div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-pink flex items-center justify-center text-icc-white">
<iconify-icon icon="solar:heart-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-pink rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-icc-pink/50">
<p className="text-[15px] font-semibold text-[#1A1A1A] opacity-70 mb-2">11h00</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-1 leading-snug">Cercle <span className="font-handwriting text-[110%] mx-1">du Choix</span> : Amour</h3>
<p className="text-[14px] text-icc-title/70 mb-4 font-medium uppercase tracking-wider">Animé par Sophie Delrot</p>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">Un atelier en direct pour vivre le Protocole CALL dans votre chair, sur la thématique de l'amour et des relations.</p>
<div className="bg-icc-white/60 rounded-xl p-4 text-[14px] flex items-start gap-3 backdrop-blur-sm">
<iconify-icon className="text-icc-title mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Ceux qui veulent s'épanouir dans leurs relations et arrêter d'attirer les mêmes schémas.</p>
</div>
</div>
</div>
</div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-bg flex items-center justify-center text-icc-text">
<iconify-icon icon="solar:users-group-rounded-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
<p className="text-[15px] font-medium text-icc-text mb-2">12h00</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-3 leading-snug">Table Ronde des Praticiens</h3>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">Rencontrez ceux qui incarnent le changement. Une occasion unique de poser vos questions et découvrir les coulisses.</p>
<div className="bg-icc-bgalt rounded-xl p-4 text-[14px] flex items-start gap-3">
<iconify-icon className="text-icc-gold mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Ceux qui ont besoin de concret, d'exemples réels et de réponses à leurs questions.</p>
</div>
</div>
</div>
</div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 bg-icc-bg border-2 border-dashed border-icc-gold w-8 h-8 rounded-full absolute left-[12px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full flex items-center justify-center text-icc-gold">
<iconify-icon icon="solar:cup-hot-linear" width="1em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="py-2">
<p className="text-base font-semibold text-icc-title mb-1">12h30 - Pause Déjeuner</p>
<p className="text-[14px] text-icc-text/60 italic font-medium">Prenez soin de vous. Respirez. Intégrez.</p>
</div>
</div>
</div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-gold flex items-center justify-center text-icc-white">
<iconify-icon icon="solar:wallet-money-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-gold/15 rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-icc-gold/20">
<p className="text-[15px] font-semibold text-icc-gold mb-2">14h00</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-1 leading-snug">Cercle <span className="font-handwriting text-[110%] mx-1">du Choix</span> : Argent</h3>
<p className="text-[14px] text-icc-title/70 mb-4 font-medium uppercase tracking-wider">Animé par Sophie Delrot</p>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">Libérez vos blocages autour de l'argent et posez un choix qui ouvre la voie à la prospérité matérielle.</p>
<div className="bg-icc-white/80 rounded-xl p-4 text-[14px] flex items-start gap-3 backdrop-blur-sm">
<iconify-icon className="text-icc-gold mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Ceux qui veulent pacifier leur rapport à l'argent et s'ouvrir à l'abondance.</p>
</div>
</div>
</div>
</div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-blue flex items-center justify-center text-icc-white">
<iconify-icon icon="solar:infinity-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-blue rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-icc-blue/50">
<p className="text-[15px] font-semibold text-[#1A1A1A] opacity-70 mb-2">15h30</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-1 leading-snug">Initiation à l'Introspection Dynamique</h3>
<p className="text-[14px] text-icc-title/70 mb-4 font-medium uppercase tracking-wider">Par Jean-Luc De Wachter</p>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">Un processus puissant pour alchimiser ce qui vous bloque et retrouver votre centre, même au milieu du chaos.</p>
<div className="bg-icc-white/60 rounded-xl p-4 text-[14px] flex items-start gap-3 backdrop-blur-sm">
<iconify-icon className="text-icc-title mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Ceux qui se sentent souvent bloqués et veulent un outil concret pour retrouver leur centre.</p>
</div>
</div>
</div>
</div>

<div className="mb-12 md:mb-16 flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-green flex items-center justify-center text-icc-white">
<iconify-icon icon="solar:briefcase-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-green rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-icc-green/50">
<p className="text-[15px] font-semibold text-[#1A1A1A] opacity-70 mb-2">16h30</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-1 leading-snug">Cercle <span className="font-handwriting text-[110%] mx-1">du Choix</span> : Vie Pro</h3>
<p className="text-[14px] text-icc-title/70 mb-4 font-medium uppercase tracking-wider">Animé par Sophie Delrot</p>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">Un atelier pour changer de voie, trouver votre vocation ou retrouver du sens dans votre carrière actuelle.</p>
<div className="bg-icc-white/60 rounded-xl p-4 text-[14px] flex items-start gap-3 backdrop-blur-sm">
<iconify-icon className="text-icc-title mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Ceux qui s'ennuient dans leur travail ou rêvent de trouver une vocation alignée.</p>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-center w-full flex-col md:flex-row md:even:flex-row-reverse group reveal-up relative z-10">
<div className="order-1 md:w-5/12 hidden md:block"></div>
<div className="z-20 flex items-center order-1 shadow-sm bg-icc-white border border-icc-footer w-10 h-10 rounded-full absolute left-[8px] md:static md:left-auto md:transform-none">
<div className="w-full h-full rounded-full bg-icc-gold flex items-center justify-center text-icc-white">
<iconify-icon icon="solar:confetti-linear" width="1.2em"></iconify-icon>
</div>
</div>
<div className="order-1 w-full md:w-5/12 pl-12 md:pl-0 md:group-even:pr-0 md:group-even:pl-10 md:group-odd:pr-10">
<div className="bg-icc-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<p className="text-[15px] font-medium text-icc-title mb-2">17h30</p>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-3 leading-snug">Célébration &amp; Clôture</h3>
<p className="text-[15px] md:text-base text-icc-text leading-relaxed mb-5">On célèbre ensemble cette journée, les choix posés, les prises de conscience et la magie de ce qui vient de se passer.</p>
<div className="bg-icc-bgalt rounded-xl p-4 text-[14px] flex items-start gap-3">
<iconify-icon className="text-icc-gold mt-1 text-lg" icon="solar:target-linear"></iconify-icon>
<p><span className="font-medium text-icc-title block mb-1">Pour qui ?</span> Tous ceux qui ont fait le choix de dire oui à eux-mêmes aujourd'hui.</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center reveal-up">
<p className="text-[15px] font-medium text-icc-title mb-6 flex items-center justify-center gap-2">
<iconify-icon className="text-icc-gold text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
                    Cette journée vous parle ?
                </p>
<button className="inline-flex items-center justify-center px-7 py-3.5 md:px-8 md:py-4 bg-icc-blue text-icc-title hover:bg-[#8CC6C8] rounded-xl font-semibold text-base md:text-lg transition-colors duration-300" onclick="openPopup()">
                    OUI, JE VEUX VIVRE CETTE EXPÉRIENCE
                </button>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-icc-bg relative z-10">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16 md:mb-24 reveal-up">
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] font-serif text-icc-title font-semibold mb-8">
                    L'Institut Choix et Conscience : Qui Sommes-Nous ?
                </h2>
<div className="max-w-[800px] mx-auto space-y-6 text-base md:text-lg text-icc-text leading-relaxed font-normal">
<p className="italic text-icc-title font-serif text-2xl md:text-3xl text-center">"Le changement en conscience pour une transformation en profondeur !"</p>
<p className="text-center mt-6">Accompagner les individus à développer la maîtrise d'eux-mêmes pour créer de l'équilibre dans leur vie, de la joie dans leurs relations et du succès dans leurs entreprises.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1000px] mx-auto">

<div className="group bg-icc-white p-6 md:p-8 rounded-2xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-1 reveal-up">
<div className="w-14 h-14 rounded-xl bg-icc-pink/30 text-[#D87D94] flex items-center justify-center mb-6">
<iconify-icon icon="solar:heart-angle-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold text-icc-title mb-3">Amour</h3>
<p className="text-base text-icc-text leading-relaxed font-normal">Évidence. L'amour est au cœur de tout ce que nous faisons. C'est l'énergie première de toute transformation véritable.</p>
</div>

<div className="group bg-icc-white p-6 md:p-8 rounded-2xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-1 reveal-up">
<div className="w-14 h-14 rounded-xl bg-icc-green/40 text-[#6B7D50] flex items-center justify-center mb-6">
<iconify-icon icon="solar:compass-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold text-icc-title mb-3">Justesse</h3>
<p className="text-base text-icc-text leading-relaxed font-normal">Alignement, respect du rythme, pas de forcing ni de recette miracle. Nous croyons en ce qui est juste pour vous, à votre rythme.</p>
</div>

<div className="group bg-icc-white p-6 md:p-8 rounded-2xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-1 reveal-up">
<div className="w-14 h-14 rounded-xl bg-icc-blue/40 text-[#3B8B8E] flex items-center justify-center mb-6">
<iconify-icon icon="solar:moon-stars-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold text-icc-title mb-3">Transformation Intégrée</h3>
<p className="text-base text-icc-text leading-relaxed font-normal">Changement, expérience, réalité. Pas de mental ni de concepts vides. Ici, on vit la transformation dans la chair et la matière.</p>
</div>

<div className="group bg-icc-white p-6 md:p-8 rounded-2xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-1 reveal-up">
<div className="w-14 h-14 rounded-xl bg-icc-gold/20 text-[#B3932F] flex items-center justify-center mb-6">
<iconify-icon icon="solar:key-minimalistic-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-semibold text-icc-title mb-3">Autonomie Consciente</h3>
<p className="text-base text-icc-text leading-relaxed font-normal">L'ICC ne crée pas de dépendance. Nous révélons votre capacité à être acteur de votre propre changement et évolution.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-icc-bgalt overflow-hidden z-10 relative">
<div className="max-w-[1200px] mr-auto ml-auto">
<div className="text-center mb-20 md:mb-24 reveal-up">
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] font-serif text-icc-title font-semibold">Vos Intervenants : Sophie et Jean-Luc</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20">

<div className="flex flex-col reveal-up text-center items-center">
<div className="group mb-8 relative">
<div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-icc-white border-4 border-icc-pink/30 flex items-center justify-center overflow-hidden shadow-card transition-transform duration-500 group-hover:scale-105">
<div className="flex text-icc-pink/40 bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aabd7d62-9b7e-455c-9af3-aa3f73e5b847_800w.jpg)] bg-cover rounded-full items-center justify-center">
</div>
</div>
<div className="absolute -bottom-4 right-8 bg-icc-white p-3 rounded-full shadow-card border border-icc-footer animate-float text-icc-gold text-xl">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
</div>
</div>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-1">Sophie Delrot</h3>
<p className="text-[14px] md:text-[15px] font-medium text-icc-text/70 mb-6 uppercase tracking-wider">Directrice de l'ICC &amp; Magifestatrice</p>
<p className="text-base md:text-lg text-icc-text leading-relaxed mb-8 max-w-[400px]">
                        Sophie est une présence rare. Ancienne contrôleuse aérienne, elle guide aujourd'hui avec justesse et douceur. Elle crée un espace sacré pour vous écouter et passer un palier avec son approche : <span className="font-handwriting text-[120%] text-icc-gold ml-1">Joisir</span> (choisir avec joie).
                    </p>
<blockquote className="text-xl md:text-2xl font-serif italic text-icc-title border-t-2 border-b-2 border-icc-gold py-6 px-4 relative mx-auto max-w-[400px]">
                        "Tout ce qui est choisi, n'est pas subi."
                    </blockquote>
</div>

<div className="flex flex-col items-center text-center reveal-up">
<div className="relative mb-8 group">
<div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-icc-white border-4 border-icc-blue/30 flex items-center justify-center overflow-hidden shadow-card transition-transform duration-500 group-hover:scale-105">
<div className="flex text-icc-blue/40 bg-icc-white w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06ac6201-6c97-4065-805e-02d8104005be_800w.jpg)] bg-cover bg-center rounded-full items-center justify-center">
</div>
</div>
<div className="absolute -bottom-4 left-8 bg-icc-white p-3 rounded-full shadow-card border border-icc-footer animate-float text-icc-gold text-xl" style={{animationDelay: '-3s'}}>
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</div>
</div>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-1">Jean-Luc De Wachter</h3>
<p className="text-[14px] md:text-[15px] font-medium text-icc-text/70 mb-6 uppercase tracking-wider">Philosophe &amp; Auteur</p>
<p className="text-base md:text-lg text-icc-text leading-relaxed mb-8 max-w-[400px]">
                        Inventeur du Protocole CALL® et de l'Introspection Dynamique. Après avoir frôlé la faillite, il a découvert la mécanique du choix non-négociable. Il transmet aujourd'hui ces clés pour transformer les trajectoires de vie.
                    </p>
<blockquote className="text-xl md:text-2xl font-serif italic text-icc-title border-t-2 border-b-2 border-icc-gold py-6 px-4 relative mx-auto max-w-[400px]">
                        "Tout ce qui est négociable est négocié. Ne laissons pas être négocié notre essentiel !"
                    </blockquote>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-icc-bg relative z-10">
<div className="max-w-[800px] mx-auto">
<div className="text-center mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] font-serif text-icc-title font-semibold flex items-center justify-center flex-col md:flex-row gap-4">
<iconify-icon className="text-icc-gold" icon="solar:gift-linear"></iconify-icon>
                    Cette Journée Est Pour Vous Si…
                </h2>
</div>
<div className="space-y-5">
<div className="checklist-item flex items-start gap-5 p-6 md:p-8 bg-icc-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 reveal-up" style={{transitionDelay: '0ms'}}>
<div className="flex-shrink-0 mt-1">
<svg className="text-icc-gold" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" fillOpacity="0.1" height="24" rx="6" width="24"></rect>
<path className="check-path" d="M7 12.5L10.5 16L17 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<p className="text-base md:text-lg text-icc-text pt-0.5 leading-snug font-normal">Vous avez la sensation de subir votre vie</p>
</div>
<div className="checklist-item flex items-start gap-5 p-6 md:p-8 bg-icc-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 reveal-up" style={{transitionDelay: '100ms'}}>
<div className="flex-shrink-0 mt-1">
<svg className="text-icc-gold" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" fillOpacity="0.1" height="24" rx="6" width="24"></rect>
<path className="check-path" d="M7 12.5L10.5 16L17 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<p className="text-base md:text-lg text-icc-text pt-0.5 leading-snug font-normal">Ce que vous voulez n'aboutit pas ou est négocié</p>
</div>
<div className="checklist-item flex items-start gap-5 p-6 md:p-8 bg-icc-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="flex-shrink-0 mt-1">
<svg className="text-icc-gold" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" fillOpacity="0.1" height="24" rx="6" width="24"></rect>
<path className="check-path" d="M7 12.5L10.5 16L17 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<p className="text-base md:text-lg text-icc-text pt-0.5 leading-snug font-normal">Vous dites "NON" et ce n'est pas entendu, respecté</p>
</div>
<div className="checklist-item flex items-start gap-5 p-6 md:p-8 bg-icc-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 reveal-up" style={{transitionDelay: '300ms'}}>
<div className="flex-shrink-0 mt-1">
<svg className="text-icc-gold" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" fillOpacity="0.1" height="24" rx="6" width="24"></rect>
<path className="check-path" d="M7 12.5L10.5 16L17 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<p className="text-base md:text-lg text-icc-text pt-0.5 leading-snug font-normal">Choisir est compliqué pour vous</p>
</div>
<div className="checklist-item flex items-start gap-5 p-6 md:p-8 bg-icc-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 reveal-up" style={{transitionDelay: '400ms'}}>
<div className="flex-shrink-0 mt-1">
<svg className="text-icc-gold" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" fillOpacity="0.1" height="24" rx="6" width="24"></rect>
<path className="check-path" d="M7 12.5L10.5 16L17 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<p className="text-base md:text-lg text-icc-text pt-0.5 leading-snug font-normal">Vous doutez beaucoup et manquez de confiance en vous</p>
</div>
<div className="checklist-item flex items-start gap-5 p-6 md:p-8 bg-icc-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 reveal-up" style={{transitionDelay: '500ms'}}>
<div className="flex-shrink-0 mt-1">
<svg className="text-icc-gold" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" fillOpacity="0.1" height="24" rx="6" width="24"></rect>
<path className="check-path" d="M7 12.5L10.5 16L17 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<p className="text-base md:text-lg text-icc-text pt-0.5 leading-snug font-normal">Vous en avez assez de tolérer ce qui ne vous convient pas ou plus</p>
</div>
<div className="checklist-item flex items-start gap-5 p-6 md:p-8 bg-icc-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 reveal-up" style={{transitionDelay: '600ms'}}>
<div className="flex-shrink-0 mt-1">
<svg className="text-icc-gold" fill="none" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect fill="currentColor" fillOpacity="0.1" height="24" rx="6" width="24"></rect>
<path className="check-path" d="M7 12.5L10.5 16L17 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
<p className="text-base md:text-lg text-icc-text pt-0.5 leading-snug font-normal">Vous commencez à vous dire : "Là, ça suffit."</p>
</div>
</div>
<div className="mt-20 text-center reveal-up">
<p className="text-2xl md:text-3xl font-serif text-icc-title font-semibold">Alors oui : <span className="font-handwriting text-[120%] text-icc-gold ml-2 font-normal">vous êtes au bon endroit.</span></p>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-icc-bg to-icc-gold/10 relative z-10" id="register">
<div className="max-w-[700px] mx-auto mb-20 reveal-up">
<div className="bg-icc-white rounded-2xl p-8 md:p-12 border-2 border-icc-gold shadow-card text-center">
<h2 className="text-2xl md:text-3xl font-serif text-icc-title font-semibold mb-10">Informations Pratiques</h2>
<div className="space-y-6 text-base md:text-lg text-icc-text font-normal">
<div className="flex items-center justify-center gap-3">
<iconify-icon className="text-icc-gold text-2xl" icon="solar:calendar-date-linear"></iconify-icon>
<p><span className="font-semibold text-icc-title">Date :</span> Mercredi 14 mai 2026</p>
</div>
<div className="w-16 h-px bg-icc-footer mx-auto"></div>
<div className="flex flex-col items-center justify-center gap-1">
<div className="flex items-center gap-3">
<iconify-icon className="text-icc-gold text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
<p><span className="font-semibold text-icc-title">Horaires :</span> 9h00 — 17h30</p>
</div>
<p className="text-[14px] text-icc-text/60 italic">(pause déjeuner de 12h30 à 14h00)</p>
</div>
<div className="w-16 h-px bg-icc-footer mx-auto"></div>
<div className="flex items-center justify-center gap-3">
<iconify-icon className="text-icc-gold text-2xl" icon="solar:laptop-linear"></iconify-icon>
<p><span className="font-semibold text-icc-title">Format :</span> 100% en ligne</p>
</div>
<div className="w-16 h-px bg-icc-footer mx-auto"></div>
<div className="flex items-center justify-center gap-3">
<iconify-icon className="text-icc-gold text-2xl" icon="solar:tag-price-linear"></iconify-icon>
<p><span className="font-semibold text-icc-title">Tarif :</span> <span className="text-[#6B7D50] bg-icc-green/30 px-3 py-1 rounded-md font-semibold tracking-wide text-[15px]">GRATUIT</span></p>
</div>
</div>
</div>
</div>
<div className="max-w-[800px] mx-auto text-center reveal-up">
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.02em] font-serif text-icc-title font-semibold mb-8">
                Réservez Votre Place Maintenant
            </h2>
<p className="text-base md:text-lg text-icc-text mb-12 leading-relaxed font-normal">
                Cette journée pourrait bien être celle où tout bascule.<br className="hidden sm:block"/>
                Celle où vous posez <strong className="font-semibold text-icc-title">LE choix</strong> qui change tout.<br className="hidden sm:block"/>
                Celle où vous retrouvez votre pouvoir, votre clarté, votre joie.
            </p>
<div className="flex flex-col items-center">
<button className="group relative inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 md:px-10 md:py-5 bg-icc-gold text-icc-white rounded-xl font-semibold text-base md:text-lg transition-all duration-300 shadow-glow animate-heartbeat hover:bg-[#C29E30] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] mb-6" onclick="openPopup()">
<span className="relative flex items-center gap-3">
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:sparkles-linear" width="1.3em"></iconify-icon>
                        OUI, JE CHOISIS DE PARTICIPER
                    </span>
</button>
<p className="text-[14px] text-icc-text/70 flex items-center gap-2 mb-12 font-normal">
<iconify-icon className="text-icc-gold text-lg" icon="solar:shield-check-linear"></iconify-icon>
                    Inscription gratuite | Aucune carte bancaire requise
                </p>
<p className="font-handwriting text-[180%] text-icc-gold opacity-90 font-normal">
                    Ainsi soit-il.
                </p>
</div>
</div>
</section>

<footer className="bg-icc-footer py-12 text-center relative z-10">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="registration-modal">

<div className="absolute inset-0 bg-icc-title/60 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="modal-backdrop" onclick="closePopup()"></div>

<div className="relative w-full max-w-[480px] bg-icc-white rounded-3xl shadow-modal p-8 md:p-10 m-4 transform scale-95 opacity-0 transition-all duration-300 border border-icc-footer" id="modal-content">

<button aria-label="Fermer" className="absolute top-5 right-5 text-icc-text/40 hover:text-icc-title transition-colors z-10 p-2" onclick="closePopup()">
<iconify-icon icon="solar:close-circle-linear" width="1.6em"></iconify-icon>
</button>

<div className="text-center mb-8">
<div className="w-14 h-14 bg-icc-gold/10 rounded-2xl text-icc-gold flex items-center justify-center mx-auto mb-5">
<iconify-icon icon="solar:ticket-linear" width="1.8em"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-serif font-semibold text-icc-title mb-3">Réservez votre place</h3>
<p className="text-[15px] text-icc-text/80 font-normal leading-relaxed">Renseignez vos informations ci-dessous pour recevoir votre accès à cette journée exceptionnelle.</p>
</div>

<form accept-charset="UTF-8" action="https://www.karkadann.org/form/69bbaca4b3044r7yftpgpqapamnnssmr3u/" className="space-y-5" method="post">
<input name="form_name" type="hidden" value="Formulaire Portes Ouvertes ICC 2026"/>
<div className="space-y-4">
<div>
<input className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-icc-bg text-icc-title text-[15px] focus:outline-none focus:border-icc-gold focus:ring-1 focus:ring-icc-gold transition-all placeholder:text-gray-400" id="form_input566601" name="fname" placeholder="Votre prénom *" required="" type="text" value=""/>
</div>
<div>
<input className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-icc-bg text-icc-title text-[15px] focus:outline-none focus:border-icc-gold focus:ring-1 focus:ring-icc-gold transition-all placeholder:text-gray-400" id="form_input566602" name="email" placeholder="Votre adresse email *" required="" type="email" value=""/>
</div>
</div>
<label className="flex items-start gap-3 cursor-pointer group pt-2 pb-2" htmlFor="rgpd566603">
<div className="relative flex items-center justify-center mt-0.5 flex-shrink-0">
<input className="peer appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-icc-gold checked:border-icc-gold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-icc-gold/30" data-no-uniform="true" id="rgpd566603" name="rgpd" required="" type="checkbox" value="1"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear" width="1.1em"></iconify-icon>
</div>
<span className="text-xs text-icc-text/60 leading-relaxed flex-1 group-hover:text-icc-text/80 transition-colors">
                        En indiquant votre adresse mail, vous acceptez en échange de notre cadeau que nous vous adressions des offres personnalisées de formations. Vous pouvez vous désinscrire à tout moment en nous adressant un mail et à travers les liens de désinscription.
                    </span>
<input name="rgpd_notice" type="hidden" value="En indiquant votre adresse mail, vous acceptez en échange de notre cadeau que nous vous adressions des offres personnalisées de formations. Vous pouvez vous désinscrire à tout moment en nous adressant un mail et à travers les liens de désinscription."/>
</label>
<button className="w-full py-4 bg-icc-title text-icc-white rounded-xl font-semibold text-[15px] transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-lg flex items-center justify-center gap-2 mt-4" id="btn_submit_566604" type="submit">
                    Valider mon inscription
                    <iconify-icon icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
</button>
<p className="text-center text-xs text-icc-text/50 mt-5 flex items-center justify-center gap-1.5 font-medium">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
                    Vos données sont sécurisées
                </p>
</form>
</div>
</div>


    </>
  );
}
