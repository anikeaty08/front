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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", function() {
            const reveals = document.querySelectorAll(".reveal");

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add("active");
                    }
                });
            };

            window.addEventListener("scroll", revealOnScroll);
            revealOnScroll(); // Trigger on load
        });
    
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
      

<section className="relative min-h-screen bg-[#1A1A1A] flex items-center justify-center py-20 px-6 overflow-hidden">
<div className="noise-bg"></div>
<div className="z-10 flex flex-col md:mt-0 reveal active w-full max-w-4xl mt-12 mr-auto ml-auto relative items-center">
<p className="uppercase text-xs font-light text-[#D4AF37] tracking-[4px] text-center mb-6">
                FORMATION À L'ACCOMPAGNEMENT · ICC
            </p>
<div className="h-px bg-[#D4AF37] w-[50px] mr-auto mb-8 ml-auto"></div>
<h1 className="playfair md:text-6xl leading-[1.25] text-4xl font-semibold text-[#FDFBF7] tracking-tight text-center mb-6">Formation Praticien CALL®</h1>
<p className="playfair font-light italic text-lg md:text-2xl text-[#FDFBF7]/85 text-center leading-[1.7] mb-10">
                Devenez accompagnant du choix profond.<br/>
                Transformez en profondeur et embellissez<br/>
                des trajectoires de vie.
            </p>
<div className="w-[60px] h-px bg-[#D4AF37] mx-auto mb-8"></div>
<div className="font-light text-base text-[#FDFBF7]/65 text-center leading-[1.8] max-w-[680px] mb-8 space-y-6">
<p className="">Dans un monde surinformé, suradapté,<br/>
                où les décisions sont prises par peur ou inertie,<br/>
                où l'humain est déconnecté du sens et dispersé...</p>
<p className="">Faire des choix conscients répond à un besoin vital<br/>
                de notre époque où tout devient de plus en plus automatique.</p>
<p className="">Il est urgent de former des accompagnants capables<br/>
                d'ouvrir des espaces d'écoute profonde de soi<br/>
                lors de passages décisifs dans la vie des personnes.</p>
</div>
<p className="playfair font-semibold italic text-xl md:text-2xl tracking-tight text-[#D4AF37] text-center mb-12">
                Et si vous deveniez celui ou celle<br/>
                qui accompagne ces transformations profondes ?
            </p>
<div className="flex flex-col md:flex-row gap-4 mb-10">
<div className="border border-[#D4AF37] bg-[#D4AF37]/15 rounded-lg px-5 py-2.5 flex items-center justify-center text-center">
<span className="font-normal text-sm text-[#D4AF37]">Août / Sept 2026</span>
</div>
<div className="border border-[#D4AF37] bg-[#D4AF37]/15 rounded-lg px-5 py-2.5 flex items-center justify-center text-center">
<span className="font-normal text-sm text-[#D4AF37]">Certification incluse</span>
</div>
</div>
<button className="group relative bg-[#D4AF37] text-white font-normal text-base rounded-[10px] px-12 py-4 mb-16 shadow-[0_4px_14px_rgba(212,175,55,0.2)] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(212,175,55,0.4)] transition-all duration-400 ease-out">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">JE VEUX DEVENIR PRATICIEN CALL®</span>
<div className="absolute inset-0 bg-white/20 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<div className="text-[#D4AF37]/50 bounce-slow">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 bg-[#FDFBF7]">
<div className="max-w-6xl mx-auto reveal">
<p className="font-light text-xs tracking-[3px] uppercase text-[#D4AF37] text-center mb-4">
                LE MONDE ACTUEL : UN BESOIN URGENT
            </p>
<h2 className="playfair font-semibold text-3xl md:text-5xl tracking-tight text-[#1A1A1A] text-center mb-16">
                Ce que nous constatons.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="bg-[#F9F6F0] rounded-[14px] p-10 pt-9 relative overflow-hidden reveal delay-100">
<div className="bg-[#6B8F71]/30 h-1 absolute top-0 right-0 left-0"></div>
<h3 className="playfair font-medium text-xl tracking-tight text-[#1A1A1A] mb-5">
                        Ce que nous constatons
                    </h3>
<div className="w-[30px] h-px bg-[#D4AF37] mb-5"></div>
<ul className="space-y-3 font-light text-base text-[#2D3436] leading-[1.8]">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2D3436]/50 mt-1 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span className="">Surinformé, suradapté</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2D3436]/50 mt-1 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span>Décisions prises par peur ou inertie</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2D3436]/50 mt-1 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span>Déconnecté du sens, dispersé</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2D3436]/50 mt-1 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span>Humain manipulé, dépossédé de son pouvoir</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2D3436]/50 mt-1 shrink-0" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span>Compromissions toxiques et subis quotidiens</span>
</li>
</ul>
</div>

<div className="bg-[#FDFBF7] rounded-[14px] p-10 pt-9 relative overflow-hidden shadow-[0_4px_20px_rgba(212,175,55,0.12)] reveal delay-200">
<div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]"></div>
<h3 className="playfair font-medium text-xl tracking-tight text-[#1A1A1A] mb-5">
                        Ce que nous créons ensemble
                    </h3>
<div className="w-[30px] h-px bg-[#D4AF37] mb-5"></div>
<ul className="space-y-3 font-light text-base text-[#2D3436] leading-[1.8]">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-1 shrink-0" icon="solar:star-linear" width="18"></iconify-icon>
<span className="">Des humains souverains capables de dire : "Ceci est non négociable"</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-1 shrink-0" icon="solar:star-linear" width="18"></iconify-icon>
<span className="">Retrouver son autorité intérieure et ne plus<br/>donner son pouvoir</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-1 shrink-0" icon="solar:star-linear" width="18"></iconify-icon>
<span className="">Des décisions incarnées et assumées</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-1 shrink-0" icon="solar:star-linear" width="18"></iconify-icon>
<span className="">Moins de compromissions toxiques,<br/>plus de choisis !</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-1 shrink-0" icon="solar:star-linear" width="18"></iconify-icon>
<span>Retour à la source, en soi,<br/>et œuvrer à partir de là</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 bg-[#F9F6F0]">
<div className="max-w-[800px] mx-auto text-center reveal">
<p className="font-light text-xs tracking-[3px] uppercase text-[#D4AF37] mb-4">
                LA MISSION DE L'INSTITUT
            </p>
<h2 className="playfair md:text-5xl text-3xl font-semibold text-[#1A1A1A] tracking-tight mb-12">Créer un réseau de personnes capables d'accompagner l'humain à choisir en conscience dans un monde saturé d'indécision.</h2>
<div className="w-[60px] h-px bg-[#D4AF37] mx-auto mb-12"></div>
<p className="font-light text-base text-[#2D3436] leading-[1.8] mb-8">
                Avec la formation Praticien CALL®, nous visons à :
            </p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal delay-100">
<div className="flex flex-col text-center bg-white rounded-[14px] pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] items-center">
<iconify-icon className="text-[#D4AF37] mb-6" height="40" icon="solar:users-group-two-rounded-linear" style={{color: 'rgb(212, 175, 55)'}} width="40"></iconify-icon>
<p className="font-normal text-base text-[#1A1A1A]">
                    Transformer en profondeur et embellir<br/>
                    des trajectoires de vie
                </p>
</div>
<div className="flex flex-col text-center bg-white rounded-[14px] pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] items-center">
<iconify-icon className="text-[#A8DADC] mb-6" icon="solar:door-open-linear" width="40"></iconify-icon>
<p className="font-normal text-base text-[#1A1A1A]">
                    Former des accompagnants capables<br/>
                    d'ouvrir des passages décisifs
                </p>
</div>
<div className="bg-white rounded-[14px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center flex flex-col items-center">
<iconify-icon className="text-[#C9D5B5] mb-6" icon="solar:nodes-linear" width="40"></iconify-icon>
<p className="font-normal text-base text-[#1A1A1A]">
                    Créer un réseau de praticiens maîtrisant<br/>
                    le protocole CALL®
                </p>
</div>
</div>
</section>

<section className="md:py-24 bg-[#FDFBF7] pt-12 pr-6 pb-12 pl-6">
<div className="max-w-6xl mx-auto reveal">
<p className="font-light text-xs tracking-[3px] uppercase text-[#D4AF37] text-center mb-4">
                CE QUE VOUS ALLEZ POUVOIR FAIRE
            </p>
<h2 className="playfair font-semibold text-3xl md:text-5xl tracking-tight text-[#1A1A1A] text-center mb-16">
                Trois dimensions de votre nouveau rôle.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#FDFBF7] rounded-[14px] px-7 py-9 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 reveal delay-100">
<div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]"></div>
<iconify-icon className="text-[#D4AF37] mb-6" icon="solar:hand-heart-linear" width="44"></iconify-icon>
<h3 className="playfair font-medium text-2xl tracking-tight text-[#1A1A1A] mb-5">
                        Accompagner en Profondeur
                    </h3>
<div className="w-[30px] h-px bg-[#D4AF37] mb-6"></div>
<ul className="space-y-3 font-light text-base text-[#2D3436] leading-[1.8]">
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span>Accompagner dans des choix de vie non négociables</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span>Ouvrir des passages décisifs dans leur trajectoire</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span>Transformer en profondeur et embellir des vies</span>
</li>
</ul>
</div>

<div className="overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 reveal delay-200 bg-[#FDFBF7] rounded-[14px] pt-9 pr-7 pb-9 pl-7 relative shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
<div className="bg-[#C96A4A] h-1 absolute top-0 right-0 left-0"></div>
<iconify-icon className="text-[#A8DADC] mb-6" height="44" icon="solar:routing-3-linear" style={{color: 'rgb(201, 106, 74)'}} width="44"></iconify-icon>
<h3 className="playfair font-medium text-2xl tracking-tight text-[#1A1A1A] mb-5">
                        Maîtriser le Protocole CALL®
                    </h3>
<div className="w-[30px] h-px bg-[#D4AF37] mb-6"></div>
<ul className="space-y-3 font-light text-base text-[#2D3436] leading-[1.8]">
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span className="">Maîtrise complète du protocole (21 étapes)</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span className="">Utiliser le protocole pour vous-même</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span>Accompagner en individuel</span>
</li>
</ul>
</div>

<div className="overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 reveal delay-300 bg-[#FDFBF7] rounded-[14px] pt-9 pr-7 pb-9 pl-7 relative shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
<div className="bg-[#6B8F71] h-1 absolute top-0 right-0 left-0"></div>
<iconify-icon className="text-[#C9D5B5] mb-6" height="44" icon="solar:suitcase-linear" style={{color: 'rgb(107, 143, 113)'}} width="44"></iconify-icon>
<h3 className="playfair font-medium text-2xl tracking-tight text-[#1A1A1A] mb-5">
                        En Faire un Outil Professionnel
                    </h3>
<div className="w-[30px] h-px bg-[#D4AF37] mb-6"></div>
<ul className="space-y-3 font-light text-base text-[#2D3436] leading-[1.8]">
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span className="">Capacité d'en faire un outil professionnel central</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span className="">Accompagner en cabinet, en ligne, en entreprise</span>
</li>
<li className="flex items-start gap-2">
<span className="text-[#D4AF37] mt-1 shrink-0">•</span>
<span className="">Intégrer le Protocole CALL® dans votre pratique existante</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="md:py-24 overflow-hidden bg-[#1A1A1A] pt-12 pr-6 pb-12 pl-6 relative">
<div className="noise-bg"></div>
<div className="relative z-10 max-w-6xl mx-auto">
<div className="reveal">
<p className="uppercase text-xs font-light text-[#d4af37] tracking-[3px] text-center mb-4">
                    CE QUE VOUS ALLEZ OBTENIR
                </p>
<h2 className="playfair font-semibold text-3xl md:text-5xl tracking-tight text-[#FDFBF7] text-center mb-16">
                    Votre transformation complète.
                </h2>
</div>
<div className="flex flex-col gap-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#FDFBF7] rounded-[14px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-center flex flex-col items-center reveal delay-100">
<span className="playfair font-semibold text-4xl text-[#D4AF37]/30 mb-4 block">01</span>
<iconify-icon className="text-[#D4AF37] mb-5" height="40" icon="solar:routing-3-linear" style={{color: 'rgb(212, 175, 55)'}} width="40"></iconify-icon>
<p className="font-normal text-base text-[#1A1A1A] leading-[1.7]">
                            Une maîtrise complète du protocole CALL®<br/>
                            (21 étapes)
                        </p>
</div>
<div className="bg-[#FDFBF7] rounded-[14px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-center flex flex-col items-center reveal delay-200">
<span className="playfair font-semibold text-4xl text-[#D4AF37]/30 mb-4 block">02</span>
<iconify-icon className="text-[#D4AF37] mb-5" icon="solar:infinity-linear" width="40"></iconify-icon>
<p className="font-normal text-base text-[#1A1A1A] leading-[1.7]">
                            Une transformation personnelle profonde<br/>
                            (vous vivrez le protocole de l'intérieur)
                        </p>
</div>
<div className="bg-[#FDFBF7] rounded-[14px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-center flex flex-col items-center reveal delay-300">
<span className="playfair font-semibold text-4xl text-[#D4AF37]/30 mb-4 block">03</span>
<iconify-icon className="text-[#D4AF37] mb-5" icon="solar:medal-ribbons-star-linear" width="40"></iconify-icon>
<p className="font-normal text-base text-[#1A1A1A] leading-[1.7]">
                            Une certification Praticien CALL®<br/>
                            &amp; L'autorisation d'accompagnement individuel
                        </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 md:w-2/3 mx-auto gap-6">
<div className="bg-[#FDFBF7] rounded-[14px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-center flex flex-col items-center reveal delay-100">
<span className="playfair font-semibold text-4xl text-[#D4AF37]/30 mb-4 block">04</span>
<iconify-icon className="text-[#D4AF37] mb-5" icon="solar:users-group-rounded-linear" width="40"></iconify-icon>
<p className="font-normal text-base text-[#1A1A1A] leading-[1.7]">
                            3 séances individuelles avec Sophie Delrot<br/>
                            (accompagnement personnalisé)
                        </p>
</div>
<div className="bg-[#FDFBF7] rounded-[14px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-center flex flex-col items-center reveal delay-200">
<span className="playfair font-semibold text-4xl text-[#D4AF37]/30 mb-4 block">05</span>
<iconify-icon className="text-[#D4AF37] mb-5" icon="solar:nodes-linear" width="40"></iconify-icon>
<p className="font-normal text-base text-[#1A1A1A] leading-[1.7]">
                            Un binôme de pratique pour affiner votre posture<br/>
                            &amp; L'accès au réseau
                        </p>
</div>
</div>
</div>
<div className="mt-16 text-center reveal">
<button className="group relative bg-[#D4AF37] text-white font-normal text-base rounded-[10px] px-12 py-4 shadow-[0_4px_14px_rgba(212,175,55,0.2)] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(212,175,55,0.4)] transition-all duration-400 ease-out">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">OUI, JE REJOINS LA FORMATION</span>
<div className="absolute inset-0 bg-white/20 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 bg-[#F9F6F0]">
<div className="max-w-4xl mx-auto reveal">
<p className="font-light text-xs tracking-[3px] uppercase text-[#D4AF37] text-center mb-4">
                LE PROGRAMME COMPLET
            </p>
<h2 className="playfair font-semibold text-3xl md:text-5xl tracking-tight text-[#1A1A1A] text-center mb-4">
                6 jours en ligne + 1 week-end en présentiel à Lartigue
            </h2>
<p className="font-light text-base text-[#2D3436]/60 text-center mb-16">
                Formatrice : Sophie Delrot
            </p>
<div className="relative">

<div className="absolute left-[16px] md:left-[180px] top-[40px] bottom-[40px] w-px bg-[#D4AF37]/60"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start reveal">
<div className="w-full md:w-[180px] pl-[40px] md:pl-0 md:pr-10 flex flex-col items-start md:items-end shrink-0 pt-2 mb-4 md:mb-0">
<span className="text-xs font-normal text-[#2D3436] bg-[#A8DADC]/20 border-[#A8DADC]/30 border rounded-md mb-2 pt-1 pr-3 pb-1 pl-3">En ligne</span>
<span className="font-extralight text-sm text-[#2D3436]/50">12 septembre 2026</span>
</div>
<div className="absolute left-[16px] md:left-[180px] top-[14px] md:top-[12px] w-3.5 h-3.5 rounded-full bg-[#D4AF37] transform -translate-x-1/2"></div>
<div className="w-full md:flex-1 pl-[40px] md:pl-10">
<div className="bg-white rounded-[14px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
<h3 className="playfair font-medium text-xl tracking-tight text-[#1A1A1A] mb-4">JOUR 1 — Le Protocole CALL et ses Essentiels</h3>
<div className="w-[30px] h-px bg-[#D4AF37] mb-4"></div>
<ul className="space-y-2 font-light text-sm text-[#2D3436] leading-[1.8]">
<li className="">Les 7 phénomènes internes du protocole</li>
<li className="">Les 21 étapes en détail</li>
<li className="">Les fondations pour accompagner avec justesse</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start reveal">
<div className="w-full md:w-[180px] pl-[40px] md:pl-0 md:pr-10 flex flex-col items-start md:items-end shrink-0 pt-2 mb-4 md:mb-0">
<span className="bg-[#A8DADC]/20 border border-[#A8DADC]/30 rounded-md px-3 py-1 font-normal text-xs text-[#2D3436] mb-2">En ligne</span>
<span className="font-extralight text-sm text-[#2D3436]/50">26 septembre 2026</span>
</div>
<div className="absolute left-[16px] md:left-[180px] top-[14px] md:top-[12px] w-3.5 h-3.5 rounded-full bg-[#D4AF37] transform -translate-x-1/2"></div>
<div className="w-full md:flex-1 pl-[40px] md:pl-10">
<div className="bg-white rounded-[14px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
<h3 className="playfair font-medium text-xl tracking-tight text-[#1A1A1A] mb-4">JOUR 2 — Les Subtilités du Protocole CALL</h3>
<ul className="space-y-2 font-light text-sm text-[#2D3436] leading-[1.8]">
<li>Les nuances et subtilités du protocole</li>
<li>Comment adapter le protocole à chaque personne</li>
<li>Les pièges à éviter</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start reveal">
<div className="w-full md:w-[180px] pl-[40px] md:pl-0 md:pr-10 flex flex-col items-start md:items-end shrink-0 pt-2 mb-4 md:mb-0">
<span className="bg-[#A8DADC]/20 border border-[#A8DADC]/30 rounded-md px-3 py-1 font-normal text-xs text-[#2D3436] mb-2">En ligne</span>
<span className="font-extralight text-sm text-[#2D3436]/50">10 octobre 2026</span>
</div>
<div className="absolute left-[16px] md:left-[180px] top-[14px] md:top-[12px] w-3.5 h-3.5 rounded-full bg-[#D4AF37] transform -translate-x-1/2"></div>
<div className="w-full md:flex-1 pl-[40px] md:pl-10">
<div className="bg-white rounded-[14px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
<h3 className="playfair font-medium text-xl tracking-tight text-[#1A1A1A] mb-4">JOUR 3 — Acquérir la Posture du Praticien</h3>
<ul className="space-y-2 font-light text-sm text-[#2D3436] leading-[1.8]">
<li>La posture juste du praticien</li>
<li>Comment tenir un espace sacré pour l'autre</li>
<li>L'éthique de l'accompagnement</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start reveal">
<div className="w-full md:w-[180px] pl-[40px] md:pl-0 md:pr-10 flex flex-col items-start md:items-end shrink-0 pt-2 mb-4 md:mb-0">
<span className="bg-[#A8DADC]/20 border border-[#A8DADC]/30 rounded-md px-3 py-1 font-normal text-xs text-[#2D3436] mb-2">En ligne</span>
<span className="font-extralight text-sm text-[#2D3436]/50">24 octobre 2026</span>
</div>
<div className="absolute left-[16px] md:left-[180px] top-[14px] md:top-[12px] w-3.5 h-3.5 rounded-full bg-[#D4AF37] transform -translate-x-1/2"></div>
<div className="w-full md:flex-1 pl-[40px] md:pl-10">
<div className="bg-white rounded-[14px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
<h3 className="playfair font-medium text-xl tracking-tight text-[#1A1A1A] mb-4">JOUR 4 — Affiner la Posture du Praticien CALL</h3>
<ul className="space-y-2 font-light text-sm text-[#2D3436] leading-[1.8]">
<li>Les angles morts de l'accompagnant</li>
<li>Les subtilités d'un cadre sécuritaire et sécurisant</li>
<li>La posture maîtrisée</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start reveal">
<div className="w-full md:w-[180px] pl-[40px] md:pl-0 md:pr-10 flex flex-col items-start md:items-end shrink-0 pt-2 mb-4 md:mb-0">
<span className="bg-[#A8DADC]/20 border border-[#A8DADC]/30 rounded-md px-3 py-1 font-normal text-xs text-[#2D3436] mb-2">En ligne</span>
<span className="font-extralight text-sm text-[#2D3436]/50">7 novembre 2026</span>
</div>
<div className="absolute left-[16px] md:left-[180px] top-[14px] md:top-[12px] w-3.5 h-3.5 rounded-full bg-[#D4AF37] transform -translate-x-1/2"></div>
<div className="w-full md:flex-1 pl-[40px] md:pl-10">
<div className="bg-white rounded-[14px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
<h3 className="playfair font-medium text-xl tracking-tight text-[#1A1A1A] mb-4">JOUR 5 — Dépouillement Personnel</h3>
<ul className="space-y-2 font-light text-sm text-[#2D3436] leading-[1.8]">
<li className="">De soi à Soi</li>
<li className="">S'offrir à l'autre sans entrer dans le Sauveur</li>
<li className="">Au coeur du choix ultime</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start reveal">
<div className="w-full md:w-[180px] pl-[40px] md:pl-0 md:pr-10 flex flex-col items-start md:items-end shrink-0 pt-2 mb-4 md:mb-0">
<span className="bg-[#A8DADC]/20 border border-[#A8DADC]/30 rounded-md px-3 py-1 font-normal text-xs text-[#2D3436] mb-2">En ligne</span>
<span className="font-extralight text-sm text-[#2D3436]/50">21 novembre 2026</span>
</div>
<div className="absolute left-[16px] md:left-[180px] top-[14px] md:top-[12px] w-3.5 h-3.5 rounded-full bg-[#D4AF37] transform -translate-x-1/2"></div>
<div className="w-full md:flex-1 pl-[40px] md:pl-10">
<div className="bg-white rounded-[14px] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
<h3 className="playfair font-medium text-xl tracking-tight text-[#1A1A1A] mb-4">JOUR 6 — Déployer son Influence</h3>
<ul className="space-y-2 font-light text-sm text-[#2D3436] leading-[1.8]">
<li>Libérer son rayonnement pour être visible</li>
<li>Affirmer sa présence par la proposition<br/>de soi non-négociable</li>
<li>Choisir sa place</li>
</ul>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start reveal">
<div className="w-full md:w-[180px] pl-[40px] md:pl-0 md:pr-10 flex flex-col items-start md:items-end shrink-0 pt-2 mb-4 md:mb-0">
<span className="bg-[#D4AF37]/15 border border-[#D4AF37]/30 rounded-md px-3 py-1 font-normal text-xs text-[#C9A227] mb-2">Présentiel · Lartigue</span>
<span className="font-extralight text-sm text-[#2D3436]/50">5-6 décembre 2026</span>
</div>
<div className="absolute left-[16px] md:left-[180px] top-[14px] md:top-[12px] w-3.5 h-3.5 rounded-full bg-[#D4AF37] transform -translate-x-1/2 ring-4 ring-[#F9F6F0]"></div>
<div className="w-full md:flex-1 pl-[40px] md:pl-10">
<div className="bg-[#D4AF37]/[0.06] border border-[#D4AF37]/20 rounded-[14px] p-8 shadow-[0_4px_20px_rgba(212,175,55,0.05)]">
<h3 className="playfair font-medium text-xl tracking-tight text-[#D4AF37] mb-4">WEEK-END — Certification</h3>
<ul className="space-y-2 font-light text-sm text-[#2D3436] leading-[1.8] mb-6">
<li>Initiation à l'Introspection Dynamique</li>
<li>Cercle du Choix : expérience collective finale</li>
<li>Certification : Remise de l'attestation officielle</li>
</ul>
<div className="w-[40px] h-px bg-[#D4AF37]/30 mx-auto mb-4"></div>
<p className="playfair font-light italic text-base text-[#1A1A1A] text-center leading-[1.7]">
                                    Votre certification officielle et l'autorisation<br/>
                                    d'accompagner en individuel avec le protocole CALL®.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 bg-[#FDFBF7]">
<div className="max-w-[800px] mx-auto text-center reveal">
<p className="font-light text-xs tracking-[3px] uppercase text-[#D4AF37] mb-12">
                L'AMBIANCE DE CETTE FORMATION
            </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-12">
<div className="playfair font-semibold italic text-4xl md:text-5xl text-[#D4AF37]">
                    Sécurisante
                </div>
<div className="playfair md:text-5xl text-4xl font-semibold italic text-[#C96A4A]">
                    Profonde
                </div>
<div className="playfair md:text-5xl text-4xl font-semibold italic text-[#6B8F71]">
                    Humaine
                </div>
</div>
<div className="w-[60px] h-px bg-[#D4AF37] mx-auto mb-10"></div>
<p className="playfair font-light italic text-xl md:text-2xl text-[#1A1A1A] leading-[1.9] max-w-[680px] mx-auto">
                Une formation exigeante qui vous transformera<br/>
                autant qu'elle vous formera.<br/><br/>
                Un espace sacré pour devenir un accompagnant<br/>
                juste, puissant et aligné.
            </p>
</div>
</section>

<section className="py-12 md:py-24 px-6 bg-[#F9F6F0]">
<div className="max-w-6xl mx-auto reveal">
<p className="font-light text-xs tracking-[3px] uppercase text-[#D4AF37] text-center mb-4">
                VOTRE FORMATRICE &amp; L'INVENTEUR
            </p>
<h2 className="playfair font-semibold text-3xl md:text-5xl tracking-tight text-[#1A1A1A] text-center mb-16">
                Des humains avant tout.
            </h2>
<div className="flex flex-col md:flex-row gap-16 md:gap-20 gap-x-16 gap-y-16 justify-center">

<div className="flex flex-col items-center max-w-[480px] text-center reveal delay-100">
<div className="border-[3px] flex bg-[#FDFBF7] w-[200px] h-[200px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52d77306-a897-4fb9-912d-d082313eb7f6_800w.png)] bg-cover bg-center rounded-full mb-8 shadow-[0_8px_30px_rgba(212,175,55,0.15)] items-center justify-center">
</div>
<h3 className="playfair font-semibold text-3xl tracking-tight text-[#1A1A1A] mb-2">
                        Sophie Delrot
                    </h3>
<p className="font-normal text-xs tracking-[2px] uppercase text-[#D4AF37] mb-6">
                        DIRECTRICE ICC · FORMATRICE
                    </p>
<div className="w-[40px] h-px bg-[#D4AF37] mx-auto mb-6"></div>
<p className="font-light text-base text-[#2D3436] leading-[1.8]">
                        Hypersensible, ancienne contrôleuse aérienne,<br/>
                        elle guide aujourd'hui avec justesse, clarté et douceur.<br/>
                        Magifestatrice, elle relie le visible et l'invisible,<br/>
                        créant un espace sacré pour s'écouter<br/>
                        et passer un palier.
                    </p>
</div>

<div className="flex flex-col items-center max-w-[480px] text-center reveal delay-200">
<div className="border-[3px] flex w-[200px] h-[200px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6df3d010-7f54-4989-98b3-7a2e172d16a0_800w.png)] bg-cover bg-center rounded-full mb-8 shadow-[0_8px_30px_rgba(212,175,55,0.15)] items-center justify-center">
</div>
<h3 className="playfair font-semibold text-3xl tracking-tight text-[#1A1A1A] mb-2">
                        Jean-Luc De Wachter
                    </h3>
<p className="font-normal text-xs tracking-[2px] uppercase text-[#D4AF37] mb-6">
                        AUTEUR · PENSEUR · INVENTEUR DU PROTOCOLE CALL®
                    </p>
<div className="w-[40px] h-px bg-[#D4AF37] mx-auto mb-6"></div>
<p className="font-light text-base text-[#2D3436] leading-[1.8]">
                        Auteur, penseur et créateur visionnaire.<br/>
                        En 2015, au bord de la faillite, il pose un choix<br/>
                        si puissant qu'il devient non-négociable…<br/>
                        et sa vie bascule.<br/>
                        Il transmet aujourd'hui l'ingénierie<br/>
                        du choix non-négociable.
                    </p>
</div>
</div>
</div>
</section>

<section className="md:py-24 bg-[#FDFBF7] pt-12 pr-6 pb-12 pl-6">
<div className="reveal max-w-5xl mr-auto ml-auto">
<p className="font-light text-xs tracking-[3px] uppercase text-[#D4AF37] text-center mb-4">
                ANIMATEUR VS PRATICIEN CALL®
            </p>
<h2 className="playfair font-semibold text-3xl md:text-5xl tracking-tight text-[#1A1A1A] text-center mb-16">
                Quelle voie est faite pour vous ?
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

<div className="bg-[#F9F6F0] opacity-85 rounded-[14px] p-10 pt-9 relative overflow-hidden flex flex-col h-full reveal delay-100">
<div className="bg-[#6B8F71] h-1 absolute top-0 right-0 left-0"></div>
<h3 className="playfair font-medium text-2xl tracking-tight text-[#1A1A1A] mb-8">
                        Animateur de Cercle du Choix©
                    </h3>
<div className="space-y-5 flex-1 mb-10">
<div>
<span className="font-normal text-sm text-[#2D3436]/50 tracking-[1px] block mb-1">Public :</span>
<span className="font-light text-base text-[#2D3436]">Groupes / Collectifs</span>
</div>
<div className="">
<span className="font-normal text-sm text-[#2D3436]/50 tracking-[1px] block mb-1">Format :</span>
<span className="font-light text-base text-[#2D3436]">Cercles (1h-1h30)</span>
</div>
<div className="">
<span className="font-normal text-sm text-[#2D3436]/50 tracking-[1px] block mb-1">Objectif :</span>
<span className="font-light text-base text-[#2D3436]">Choix alignés en groupe</span>
</div>
</div>
<div className="mb-8">
<span className="playfair text-3xl font-semibold text-[#6B8F71]/70">1 200€</span>
</div>
<button className="w-full bg-transparent border-[1.5px] border-[#D4AF37] text-[#D4AF37] font-normal text-base rounded-[10px] px-8 py-4 hover:bg-[#D4AF37]/5 transition-colors duration-300">
                        Découvrir →
                    </button>
</div>

<div className="bg-white rounded-[14px] p-10 pt-9 relative overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.2)] flex flex-col h-full transform md:-translate-y-2 reveal delay-200">
<div className="absolute top-0 left-0 right-0 h-1 bg-[#D4AF37]"></div>
<div className="absolute top-6 right-6 bg-[#D4AF37] text-white font-normal text-xs rounded-md px-3 py-1">
                        Recommandé
                    </div>
<h3 className="playfair font-medium text-2xl tracking-tight text-[#1A1A1A] mb-8 pr-24">
                        Praticien du Protocole CALL®
                    </h3>
<div className="space-y-5 flex-1 mb-10">
<div className="">
<span className="font-normal text-sm text-[#2D3436]/50 tracking-[1px] block mb-1">Public :</span>
<span className="font-light text-base text-[#2D3436]">Individuel</span>
</div>
<div className="">
<span className="font-normal text-sm text-[#2D3436]/50 tracking-[1px] block mb-1">Format :</span>
<span className="font-light text-base text-[#2D3436]">Séances en profondeur</span>
</div>
<div className="">
<span className="font-normal text-sm text-[#2D3436]/50 tracking-[1px] block mb-1">Objectif :</span>
<span className="font-light text-base text-[#2D3436]">Transformer des trajectoires</span>
</div>
</div>
<div className="mb-8">
<span className="playfair font-semibold text-4xl text-[#D4AF37]">3 300€</span>
</div>
<button className="w-full group relative bg-[#D4AF37] text-white font-normal text-base rounded-[10px] px-8 py-4 shadow-[0_4px_14px_rgba(212,175,55,0.2)] hover:shadow-[0_6px_24px_rgba(212,175,55,0.4)] transition-all duration-300">
<span className="relative z-10">Je rejoins la formation →</span>
<div className="absolute inset-0 bg-white/20 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 bg-[#1A1A1A] relative overflow-hidden text-center">
<div className="noise-bg"></div>
<div className="relative z-10 max-w-[800px] mx-auto reveal">
<div className="playfair text-[80px] leading-none text-[#D4AF37]/25 mb-4">"</div>
<p className="playfair font-light italic text-lg md:text-2xl text-[#FDFBF7] leading-[1.9] mb-6">
                Ce protocole, je l'ai enseigné à des centaines<br/>
                de personnes et le niveau de responsabilité<br/>
                et donc de pouvoir sur la vie qu'elles ont développé<br/>
                en prouve l'efficacité.
            </p>
<div className="w-[40px] h-px bg-[#D4AF37] mx-auto mb-4"></div>
<p className="font-normal text-sm text-[#D4AF37] mb-1">
                Jean-Luc De Wachter
            </p>
<p className="font-extralight text-sm text-[#FDFBF7]/50 mb-16">
                Inventeur du Protocole CALL®
            </p>
<div className="w-4/5 h-px bg-[#FDFBF7]/10 mx-auto mb-16"></div>
<h2 className="playfair font-semibold text-3xl md:text-5xl tracking-tight text-[#FDFBF7] mb-8">
                Devenez Praticien CALL®
            </h2>
<p className="font-light text-lg text-[#FDFBF7]/70 leading-[1.8] mb-6">
                Le monde a besoin d'accompagnants capables<br/>
                d'aider à faire des choix profonds<br/>
                et à franchir des étapes décisives.
            </p>
<p className="playfair font-light italic text-xl text-[#D4AF37] mb-12">
                « Ce qui est au point de départ sera à l'arrivée. »
            </p>
<div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
<div className="border border-[#D4AF37] bg-[#D4AF37]/15 rounded-lg px-5 py-2.5">
<span className="font-normal text-sm text-[#D4AF37]">Août / Sept 2026</span>
</div>
<div className="border border-[#D4AF37] bg-[#D4AF37]/15 rounded-lg px-5 py-2.5">
<span className="font-normal text-sm text-[#D4AF37]">Certification incluse</span>
</div>
</div>
<button className="group relative bg-[#D4AF37] text-white font-normal text-lg md:text-xl rounded-[10px] px-14 py-5 mb-6 shadow-[0_6px_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,175,55,0.5)] transition-all duration-400 ease-out">
<span className="relative z-10 transition-colors duration-300">OUI, JE REJOINS LA FORMATION</span>
<div className="absolute inset-0 bg-white/20 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<p className="font-extralight text-sm text-[#FDFBF7]/35 mt-2 tracking-wide">
                ✨ Ainsi soit-il. ✨
            </p>
</div>
</section>

<footer className="bg-[#1A1A1A] py-12 relative text-center">
<div className="absolute top-0 left-0 right-0 h-px bg-[#FDFBF7]/[0.08]"></div>
<div className="playfair font-semibold text-xl text-[#D4AF37] mb-3 tracking-tight">
            ICC
        </div>
<p className="font-extralight text-sm text-[#FDFBF7]/40 mb-5 leading-relaxed">
            © 2026 · Institut Choix et Conscience (ICC)<br/>
            · Tous Droits Réservés
        </p>
<div className="font-light text-sm text-[#FDFBF7]/40 space-x-2">
<a className="hover:text-[#D4AF37] transition-colors duration-300" href="http://institut-choix-et-conscience.org/mentions-legales">Mentions Légales</a>
<span>·</span>
<a className="hover:text-[#D4AF37] transition-colors duration-300" href="http://institut-choix-et-conscience.org/cgv">CGV</a>
</div>
</footer>



    </>
  );
}
