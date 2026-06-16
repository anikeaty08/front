import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
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

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="min-h-screen flex overflow-hidden pt-20 pb-32 relative items-center justify-center">
<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Fond" className="object-center transition-opacity duration-1000 bg-center opacity-30 w-full h-full object-contain mt-2 mb-2 grayscale" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06ac6201-6c97-4065-805e-02d8104005be_1600w.jpg"/>
<div className="bg-gradient-to-b from-[#0A0A0A]/20 via-[#0A0A0A]/70 to-[#0A0A0A] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-center bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80 border-0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="z-10 flex flex-col text-center w-full max-w-4xl mt-12 mr-auto ml-auto pr-6 pl-6 relative items-center justify-center">
<div className="reveal transition-all duration-1000 ease-out delay-100">
<span className="text-[#D4AF37] font-[Inter,sans-serif] font-light tracking-widest uppercase text-sm mb-8 block">Un humain qui parle à des humains</span>
<h1 className="md:text-7xl leading-tight text-5xl font-normal text-[#F5F5F5] tracking-tight font-[Cormorant,serif] mb-10">La cohérence crée la puissance.</h1>
<p className="text-xl md:text-2xl text-[#F5F5F5]/70 font-light mb-10 tracking-wide">
                    Clarté. Force. Alignement.
                </p>
<a className="inline-flex items-center gap-3 border border-[#D4AF37] text-[#D4AF37] px-10 py-5 rounded-full hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-500 font-light text-lg group" href="#offres">
                    Travailler avec moi 
                    <i className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" data-lucide="arrow-down"></i>
</a>
</div>
</div>
</section>

<section className="border-y border-slate-950 border-0 pr-6 pl-6 relative">
<div className="md:py-[80px] reveal transition-all duration-1000 ease-out text-center max-w-3xl border-0 mr-auto ml-auto pt-[60px] pb-[60px]">

<div className="text-[#B8860B] font-medium uppercase tracking-[4px] text-xs mb-6 font-['Inter',sans-serif]">
                Une lettre par semaine
            </div>

<h2 className="font-['Playfair_Display',serif] font-semibold text-3xl md:text-4xl text-white tracking-tight mb-4">
                Un humain parle à un leader.
            </h2>

<div className="font-['Playfair_Display',serif] italic text-base text-[#F5F5F5] mb-8">
                Pas de méthode. Pas de performance.<br/>
                Une vérité. Chaque semaine.
            </div>

<p className="font-['Inter',sans-serif] font-light text-sm text-[#CCCCCC] max-w-[500px] mx-auto mb-10 leading-relaxed">
                Chaque semaine, j'écris à ceux qui ont beaucoup accompli<br className="hidden md:block"/>
                — et qui sentent que leur prochaine étape exige autre chose.<br className="hidden md:block"/>
                Pas plus de stratégie. Plus de profondeur.<br className="hidden md:block"/>
                Si vous êtes prêt à recevoir ce qui dit vrai,<br className="hidden md:block"/>
                cette lettre est pour vous.
            </p>

<div className="max-w-[480px] mx-auto transition-opacity duration-500" id="optin-form-container">
<form accept-charset="UTF-8" action="https://www.karkadann.org/form/69de868af315ciqi05up66vkf6cvz3c2wk/" className="flex flex-col gap-4" method="post">
<input name="form_name" type="hidden" value="Un humain parle à un leader"/>
<input className="placeholder:text-[#555555] focus:outline-none focus:ring-1 focus:ring-[#B8860B] transition-shadow text-sm font-light text-[#F5F5F5] bg-[#222222] w-full border-[#B8860B] border rounded-none pt-3.5 pr-4 pb-3.5 pl-4" id="form_input568067" name="fname" placeholder="Votre prénom *" required="" type="text" value=""/>
<input className="placeholder:text-[#555555] focus:outline-none focus:ring-1 focus:ring-[#B8860B] transition-shadow text-sm font-light text-[#F5F5F5] bg-[#222222] w-full border-[#B8860B] border rounded-none pt-3.5 pr-4 pb-3.5 pl-4" id="form_input568068" name="email" placeholder="Votre adresse email *" required="" type="email" value=""/>
<label className="block cursor-pointer text-left mt-2 text-xs text-[#555555] leading-relaxed font-light" htmlFor="rgpd568069">
<input checked="" className="float-left mt-0.5 mr-3 w-4 h-4 accent-[#B8860B] cursor-pointer" data-no-uniform="true" id="rgpd568069" name="rgpd" type="checkbox" value="1"/>
                        En indiquant votre adresse mail, vous acceptez de recevoir chaque semaine la lettre ouverte de Jean-Luc De Wachter et de temps à autre une offre personnalisée. Vous pouvez vous désinscrire à tout moment en nous adressant un mail ou à travers les liens de désinscription.
                        <input name="rgpd_notice" type="hidden" value="En indiquant votre adresse mail, vous acceptez de recevoir chaque semaine la lettre ouverte de Jean-Luc De Wachter et de temps à autre une offre personnalisée. Vous pouvez vous désinscrire à tout moment en nous adressant un mail ou à travers les liens de désinscription."/>
</label>
<button className="hover:bg-[#9c7109] transition-colors whitespace-nowrap text-sm font-medium text-[#1A1A1A] font-['Inter',sans-serif] bg-[#B8860B] rounded-none pt-3.5 pr-6 pb-3.5 pl-6 w-full mt-2" id="btn_submit_568070" type="submit">Je m'inscris</button>
</form>

<div className="font-['Inter',sans-serif] font-light text-xs text-[#555555] mt-6">
                    Aucun spam. Aucune revente. Une lettre. C'est tout.
                </div>
</div>
</div>
</section>

<section className="md:py-48 pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-12 reveal transition-all duration-1000 ease-out">
<h2 className="text-3xl md:text-4xl font-[Cormorant,serif] font-normal tracking-tight leading-snug">
                Je ne suis pas un coach.<br/>
                Je ne suis pas un consultant.<br/>
                Je ne suis pas un thérapeute.
            </h2>
<div className="space-y-8 text-lg md:text-xl text-[#F5F5F5]/70 font-light leading-relaxed">
<p className="-multi">J'accompagne les leaders prêts à découvrir un degré de vérité supérieur.</p>
<p className="">Mon travail : créer l'espace où la cohérence peut émerger.

La cohérence entre qui vous êtes au plus profond — et ce que vous manifestez dans le monde.

Entre votre vérité essentielle — et votre posture de leader.</p>
<p className="md:text-2xl text-xl font-normal text-[#F5F5F5]">La plupart des leaders à fort impact veulent bâtir plus grand.

Pas par ego. Pas par ambition vide.

Mais parce qu'ils portent une vision qui mérite d'être incarnée pleinement.</p>
<p className="">Et pour bâtir plus grand, il faut des fondations plus profondes.

C'est là que commence mon travail : créer la cohérence totale qui permet de soutenir une vision plus grande.</p>
</div>
<div className="text-[#D4AF37] font-[Cormorant,serif] text-2xl md:text-3xl italic tracking-wide mt-8">
                Clarté. Force. Alignement.
            </div>
</div>
</section>

<section className="border-y md:py-48 border-[#F5F5F5]/5 pt-32 pr-6 pb-32 pl-6">
<div className="reveal transition-all duration-1000 ease-out text-center max-w-3xl mr-auto ml-auto">
<h2 className="md:text-5xl text-4xl font-normal text-[#D4AF37] tracking-tight font-[Cormorant,serif] mb-16">Nous cherchons ensemble la cohérence entre ces 3 niveaux :</h2>
<div className="space-y-12 text-lg md:text-xl text-[#F5F5F5]/80 font-light leading-relaxed flex flex-col items-center">
<div className="space-y-4">
<p className="">L'essence — La vérité absolue, l'ordre cosmique, ce qui EST</p>
<p className="">L'être — Votre être essentiel, votre nature profonde, qui vous êtes vraiment</p>
<p className="">La posture — Comment vous vous manifestez dans le monde, vos actions, vos décisions</p>
</div>
<div className="space-y-4 text-[#F5F5F5]">
<p className="">La plupart des leaders vivent une dissonance entre ces trois niveaux. Ils sentent l'essence, mais leur être n'est pas connectée. Ou leur être sait, mais leur posture ne suit pas. Ou leur posture est alignée avec leur être, mais déconnectée de l'essence.</p>
<p className="">Ensemble, nous cherchons la cohérence totale.

Quand ces trois niveaux sont alignés, vous retrouvez clarté, force et alignement.

Tout devient fluide. Évident. Puissant.</p>
</div>
<div className="space-y-4 text-[#F5F5F5]/60 mt-8">
<p className="uppercase tracking-widest text-sm mb-6">Comment ?</p>
<p className="">Très simplement.</p>
<p className="">Sans rien de spectaculaire.</p>
</div>
<div className="text-2xl font-[Cormorant,serif] text-[#D4AF37] italic my-8">
                    Avec du temps, du lien et de la foi.
                </div>
<div className="space-y-4 text-[#F5F5F5]/60">
<p>Ce ne sera pas immédiat.</p>
<p>Ce ne sera pas magique.</p>
</div>
<p className="text-2xl md:text-3xl font-[Cormorant,serif] text-[#F5F5F5] mt-4">
                    Ce sera vrai.
                </p>
</div>
</div>
</section>

<section className="md:py-48 cursor-pointer pt-32 pr-6 pb-32 pl-6" id="offres" onclick="window.location.href='/home'" role="button">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-24 reveal transition-all duration-1000 ease-out">
<span className="text-[#D4AF37] font-light tracking-widest uppercase text-sm mb-6 block">Mes Offres</span>
<h2 className="text-4xl md:text-5xl font-[Cormorant,serif] font-normal tracking-tight mb-6">
                    Comment nous pouvons travailler ensemble
                </h2>
<p className="text-lg text-[#F5F5F5]/60 font-light">
                    Je travaille avec un nombre très limité de personnes chaque année.
                </p>
</div>
<div className="flex flex-col gap-8 md:gap-12 w-full">
<div className="reveal transition-all duration-1000 ease-out md:p-14 hover:border-[#D4AF37]/30 transition-colors duration-500 flex flex-col text-center border-[#F5F5F5]/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 items-center">
<h3 className="text-3xl md:text-4xl font-[Cormorant,serif] font-normal tracking-tight text-[#F5F5F5] mb-6">Conseil Privé "Singularité"</h3>
<p className="text-lg font-light text-[#F5F5F5]/70 max-w-2xl mb-8">Accompagnement sur mesure pour leaders à haut niveau d'impact qui cherchent à créer une singularité dans leurs résultats ou dans la manière de les atteindre.</p>
<div className="space-y-6 text-[#F5F5F5]/60 font-light mb-10 max-w-2xl">
<p className="">Format : sur-mesure </p>
<p className="">Ma proposition est simple : une traversée et de l'autre côté... une singularité. Quelque chose qui ne serait jamais arrivé normalement. Mais qui a été rendu possible par un alignement de votre trajectoire et un plus haut degré de cohérence.</p>
<p className="">Très simplement. Sans rien de spectaculaire. En vérité.</p>
</div>
<div className="flex flex-col items-center gap-2 mb-10">
<span className="text-xl font-light text-[#F5F5F5]">Sur devis</span>
<span className="uppercase text-sm text-[#D4AF37] tracking-widest">4 places par an</span>
</div>
<a className="hover:bg-[#D4AF37] transition-colors duration-300 md:w-auto text-lg font-light text-[#0A0A0A] bg-[#F5F5F5] w-full rounded-full pt-4 pr-10 pb-4 pl-10" href="https://tally.so/r/VLlWvg">Candidater</a>
</div>
<div className="reveal transition-all duration-1000 ease-out md:p-14 hover:border-[#D4AF37]/30 transition-colors duration-500 flex flex-col text-center border-[#F5F5F5]/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 items-center">
<h3 className="md:text-4xl text-3xl font-normal text-[#F5F5F5] tracking-tight font-[Cormorant,serif] mb-6">Immersion sur-mesure "L'Instant"</h3>
<p className="text-lg font-light text-[#F5F5F5]/70 max-w-2xl mb-8">Une immersion créée spécifiquement pour vous, sur une question précise, une impasse, une décision complexe.</p>
<div className="space-y-6 text-[#F5F5F5]/60 font-light mb-10 max-w-2xl">
<p className="">Format : Préparation approfondie + demi-journée intensive de travail + suivi personnalisé pendant 1 mois</p>
<p className="">Ce n'est pas un coaching. Ce n'est pas un simple rendez-vous.</p>
<p className="">C'est un espace puissant où nous créons ensemble les conditions pour que la cohérence émerge.</p>
</div>
<div className="mb-10">
<span className="text-xl font-light text-[#F5F5F5]">1.900€ht</span>
</div>
<a className="hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-colors duration-300 md:w-auto text-lg font-light text-[#F5F5F5] w-full border-[#F5F5F5]/30 border rounded-full pt-4 pr-10 pb-4 pl-10" href="https://www.linkedin.com/messaging/compose/?recipient=jean-luc-de-wachter-3270236a">Se renseigner</a>
</div>
<div className="reveal transition-all duration-1000 ease-out bg-[#F5F5F5]/[0.02] border border-[#F5F5F5]/10 rounded-3xl p-8 md:p-14 hover:border-[#D4AF37]/30 transition-colors duration-500 text-center flex flex-col items-center">
<h3 className="text-3xl md:text-4xl font-[Cormorant,serif] font-normal tracking-tight text-[#F5F5F5] mb-6">Retraite "Les Précurseurs"</h3>
<p className="text-lg font-light text-[#F5F5F5]/70 max-w-2xl mb-8">Immersion en petit groupe pour leaders qui veulent toucher la profondeur, établir la cohérence pour un tout nouveau niveau de puissance alignée.</p>
<div className="space-y-6 text-[#F5F5F5]/60 font-light mb-10 max-w-2xl">
<p className="">Format : 3,5 jours (8 personnes max)<br/>Prochaine édition : Automne 2026</p>
<p className="">Intention : Obtenir la clarté nécessaire pour prendre de grandes décisions, à partir d'un plus haut degré de vérité — et donc d'alignement et d'impact.</p>
<p className="">Un espace puissant pour toucher ce qui est vrai en soi et installer un niveau de cohérence supérieur.</p>
</div>
<div className="mb-10">
<span className="text-xl font-light text-[#F5F5F5]">5.000€ht (all-inclusive)</span>
</div>
<a className="hover:bg-[#F5F5F5] hover:text-[#0A0A0A] transition-colors duration-300 md:w-auto text-lg font-light text-[#F5F5F5] w-full border-[#F5F5F5]/30 border rounded-full pt-4 pr-10 pb-4 pl-10" href="https://tally.so/r/zxz82R">
                        Rejoindre la liste d'attente
                    </a>
</div>
</div>
</div>
</section>

<section className="md:py-48 border-y border-[#F5F5F5]/5 px-6 py-32">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-24 reveal transition-all duration-1000 ease-out">
<h2 className="text-4xl md:text-5xl font-[Cormorant,serif] font-normal tracking-tight mb-6">
                    Ce que disent ceux qui ont travaillé avec moi
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
<div className="reveal transition-all duration-1000 ease-out p-10 border border-[#F5F5F5]/10 bg-[#0A0A0A]/50 rounded-2xl flex flex-col">
<i className="text-[#D4AF37]/50 mb-8 w-10 h-10" data-lucide="quote"></i>
<h4 className="text-2xl font-[Cormorant,serif] text-[#F5F5F5] mb-6 tracking-tight">"Main de fer dans un gant de velours."</h4>
<p className="text-lg text-[#F5F5F5]/70 font-light mb-8 leading-relaxed flex-grow">
                        "Jean-Luc, pour moi est une main de fer dans un gant de velours. Il a ce type de vibration qui ancre dans le Présent et le Vivant, nous mettant, avec amour, face à nos incohérences, nos mensonges personnels, nos zones de dénis, tout en nous invitant à palper encore plus profondément cet espace d'éternité, cette délicieuse connexion au Divin."
                    </p>
<div className="text-sm text-[#D4AF37] uppercase tracking-widest pt-6 border-t border-[#F5F5F5]/10">
                        — Sylvie Retailleau, auteure et éditrice
                    </div>
</div>
<div className="reveal transition-all duration-1000 ease-out p-10 border border-[#F5F5F5]/10 bg-[#0A0A0A]/50 rounded-2xl flex flex-col delay-100">
<i className="text-[#D4AF37]/50 mb-8 w-10 h-10" data-lucide="quote"></i>
<h4 className="text-2xl font-[Cormorant,serif] text-[#F5F5F5] mb-6 tracking-tight">"Puissance et finesse."</h4>
<p className="text-lg text-[#F5F5F5]/70 font-light mb-8 leading-relaxed flex-grow">
                        "Les échanges avec Jean-Luc m'ont surpris par leur puissance et par leur finesse en même temps. La force de Jean-Luc, cest de pouvoir allier vraiment spiritualité et business. Il a une perception extrêmement fine de l'être humain."
                    </p>
<div className="text-sm text-[#D4AF37] uppercase tracking-widest pt-6 border-t border-[#F5F5F5]/10">
                        — Christian Junod, expert francophone de la relation à l'argent
                    </div>
</div>
<div className="reveal transition-all duration-1000 ease-out p-10 border border-[#F5F5F5]/10 bg-[#0A0A0A]/50 rounded-2xl flex flex-col">
<i className="text-[#D4AF37]/50 mb-8 w-10 h-10" data-lucide="quote"></i>
<h4 className="text-2xl font-[Cormorant,serif] text-[#F5F5F5] mb-6 tracking-tight">"La pépite."</h4>
<p className="text-lg text-[#F5F5F5]/70 font-light mb-8 leading-relaxed flex-grow">
                        "Jean-Luc est quelqu'un de très authentique, très juste. Il va vraiment donner la petite pépite dont la personne a besoin pour transformer ou débloquer quelque chose."
                    </p>
<div className="text-sm text-[#D4AF37] uppercase tracking-widest pt-6 border-t border-[#F5F5F5]/10">
                        — Morgane Le Moël, entrepreneure et dirigeante
                    </div>
</div>
<div className="reveal transition-all duration-1000 ease-out p-10 border border-[#F5F5F5]/10 bg-[#0A0A0A]/50 rounded-2xl flex flex-col delay-100">
<i className="text-[#D4AF37]/50 mb-8 w-10 h-10" data-lucide="quote"></i>
<h4 className="text-2xl font-[Cormorant,serif] text-[#F5F5F5] mb-6 tracking-tight">"Profondeur."</h4>
<p className="text-lg text-[#F5F5F5]/70 font-light mb-8 leading-relaxed flex-grow">
                        "Jean-Luc arrive en permanence à nous amener à des endroits où on ne pensait même pas qu'il était possible d'aller. La profondeur de ces questions amène la puissance des réponses."
                    </p>
<div className="text-sm text-[#D4AF37] uppercase tracking-widest pt-6 border-t border-[#F5F5F5]/10">
                        — Cédric Esserméant, medium d'affaire
                    </div>
</div>
</div>
</div>
</section>

<section className="md:py-48 text-center pt-32 pr-6 pb-32 pl-6">
<div className="max-w-3xl mx-auto flex flex-col items-center reveal transition-all duration-1000 ease-out">
<span className="text-[#D4AF37] font-light tracking-widest uppercase text-sm mb-6 block">Mon parcours</span>
<h2 className="text-4xl md:text-5xl font-[Cormorant,serif] font-normal tracking-tight mb-12">
                Le chemin parcouru
            </h2>
<p className="text-lg md:text-xl text-[#F5F5F5]/70 font-light leading-relaxed mb-8">
                Entrepreneur depuis 2008, j'ai lancé et contribué à plusieurs entreprises à 6 et 7 chiffres. J'ai dirigé jusqu'à 10 personnes, conçu des stratégies digitales, accompagné plus de 1000 entrepreneurs, coachs, freelances et dirigeants.
            </p>
<p className="text-lg md:text-xl text-[#F5F5F5]/70 font-light leading-relaxed mb-16">
                J'ai fondé le Cercle Stelair, créé le Protocole CALL®, publié "Business Bénédiction" et "Je te dis la vérité".
            </p>
<div className="text-2xl md:text-3xl font-[Cormorant,serif] text-[#F5F5F5] mb-16 leading-snug">
                Ce que je transmets, ce n'est pas une recette.<br/>
<span className="text-[#D4AF37] italic">C'est un art de vivre en vérité.</span>
</div>
<p className="uppercase text-lg font-light text-[#F5F5F5]/50 tracking-widest mb-16">À l'ère de l'IA, je suis un humain qui parle à des humains.</p>

<div className="mt-8 relative w-full max-w-xl mx-auto flex justify-center items-center group cursor-default">

<div className="absolute inset-0 bg-[#D4AF37] opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition-opacity duration-700"></div>
<img alt="Ouvrages et Protocole CALL par Jean-Luc De Wachter" className="group-hover:-translate-y-2 transition-transform duration-700 ease-out w-full h-auto object-contain z-10 relative drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1efbc6a-8bcb-4da7-ac5c-fa19b5a974bc_1600w.png"/>
</div>
</div>
</section>

<section className="md:py-48 overflow-hidden pt-32 pr-6 pb-32 pl-6 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10 flex flex-col items-center reveal transition-all duration-1000 ease-out">
<h2 className="md:text-6xl text-5xl font-normal tracking-tight font-[Cormorant,serif] mb-8">Si l'appel est là.</h2>
<p className="text-xl font-light text-[#F5F5F5]/80 mb-6">Vous savez déjà si c'est le bon moment pour vous.</p>
<p className="text-lg font-light text-[#F5F5F5]/60 mb-16">Pas besoin de me convaincre. Pas besoin de vous convaincre.<br/> Si c'est le moment pour vous de fréquenter votre vérité, envoyez-moi un message.</p>
<a className="inline-flex items-center justify-center gap-3 hover:bg-[#F5F5F5] hover:scale-105 transition-all duration-500 md:w-auto text-lg font-normal text-[#0A0A0A] bg-[#D4AF37] w-full rounded-full pt-5 pr-10 pb-5 pl-10" href="https://www.linkedin.com/messaging/compose/?recipient=jean-luc-de-wachter-3270236a" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="linkedin"></i>
                M'envoyer un message sur LinkedIn
            </a>
</div>
</section>

<footer className="py-12 px-6 border-t border-[#F5F5F5]/10 text-center">
<div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
<p className="text-[#D4AF37] font-[Cormorant,serif] text-2xl italic tracking-wide">
                Jean-Luc De Wachter
            </p>
<p className="text-sm text-[#F5F5F5]/40 font-light tracking-wider uppercase">
                Un humain qui parle à des humains
            </p>
</div>
</footer>



    </>
  );
}
