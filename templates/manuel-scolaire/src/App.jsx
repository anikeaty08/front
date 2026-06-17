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



        // Configuration universelle pour une fidélité d'export parfaite (1:1 sans décalages)
        async function getCanvasOptions() {
            // S'assurer que les polices Google Fonts sont complétements chargées
            await document.fonts.ready;
            
            return {
                scale: 3, // Multiplicateur HD pour des textes très nets et des espacements conservés
                useCORS: true,
                allowTaint: true,
                backgroundColor: null, 
                scrollY: 0, // Evite le bug de décalage si la fenêtre a été scrollée
                scrollX: 0,
                onclone: function(clonedDoc) {
                    // Les web-components (Shadow DOM de Iconify) disparaissent souvent dans html2canvas. 
                    // On les force à s'afficher en remplaçant la balise par le SVG natif calculé.
                    const originalIcons = document.querySelectorAll('iconify-icon');
                    const clonedIcons = clonedDoc.querySelectorAll('iconify-icon');
                    
                    originalIcons.forEach((origIcon, index) => {
                        if (clonedIcons[index] && origIcon.shadowRoot) {
                            const svg = origIcon.shadowRoot.querySelector('svg');
                            if (svg) {
                                const clonedSvg = svg.cloneNode(true);
                                // Forcer la conservation du style CSS de l'icône (couleurs/tailles)
                                const compStyle = window.getComputedStyle(origIcon);
                                clonedSvg.style.width = compStyle.width;
                                clonedSvg.style.height = compStyle.height;
                                clonedSvg.style.color = compStyle.color;
                                
                                clonedIcons[index].parentNode.replaceChild(clonedSvg, clonedIcons[index]);
                            }
                        }
                    });
                }
            };
        }

        async function exportPagesToPNG() {
            const loader = document.getElementById('loader');
            loader.style.display = 'flex';
            // Court délai pour permettre à l'UI d'afficher le loader et aux éléments de se stabiliser
            await new Promise(r => setTimeout(r, 600));

            const pages = document.querySelectorAll('.a5-page');
            const options = await getCanvasOptions();
            
            for (let i = 0; i < pages.length; i++) {
                try {
                    const canvas = await html2canvas(pages[i], options);
                    
                    const link = document.createElement('a');
                    link.download = `Manuel_Reussite_Page_${i + 1}.png`;
                    link.href = canvas.toDataURL('image/png'); // Format PNG natif (Lossless)
                    link.click();
                    
                    // Petit délai entre les téléchargements pour éviter un blocage par le navigateur
                    await new Promise(resolve => setTimeout(resolve, 400));
                } catch (error) {
                    console.error("Erreur d'exportation PNG page " + (i+1), error);
                }
            }
            loader.style.display = 'none';
        }

        async function exportToPDF() {
            const loader = document.getElementById('loader');
            loader.style.display = 'flex';
            // Court délai pour la stabilité
            await new Promise(r => setTimeout(r, 600));

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a5');
            const pages = document.querySelectorAll('.a5-page');
            const options = await getCanvasOptions();
            
            for (let i = 0; i < pages.length; i++) {
                try {
                    const canvas = await html2canvas(pages[i], options);
                    
                    // L'export Jpeg avec un ratio de compression à 1.0 (Maximum) empêche les artefacts sur le texte
                    const imgData = canvas.toDataURL('image/jpeg', 1.0);
                    
                    if (i > 0) {
                        pdf.addPage('a5', 'p');
                    }
                    
                    pdf.addImage(imgData, 'JPEG', 0, 0, 148, 210);
                } catch (error) {
                    console.error("Erreur d'exportation PDF page " + (i+1), error);
                }
            }
            
            pdf.save('Le_Manuel_de_la_Reussite_Scolaire.pdf');
            loader.style.display = 'none';
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
      

<div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm z-50 px-6 py-4 flex justify-between items-center" data-html2canvas-ignore="">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1B2A4A] text-[#F4A127] flex items-center justify-center font-hand text-xl font-semibold">MB</div>
<h1 className="font-sub font-semibold tracking-tight text-sm md:text-base text-[#1B2A4A]">Outils d'Exportation A5</h1>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 text-xs font-semibold hover:bg-gray-50 transition-colors text-[#1B2A4A]" onclick="exportPagesToPNG()">
<iconify-icon icon="solar:gallery-download-linear" width="1.5em"></iconify-icon>
                Exporter PNG
            </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1B2A4A] text-white border border-transparent text-xs font-semibold hover:bg-[#1B2A4A]/90 transition-colors" onclick="exportToPDF()">
<iconify-icon icon="solar:document-text-linear" width="1.5em"></iconify-icon>
                Exporter PDF
            </button>
</div>
</div>

<div className="fixed inset-0 bg-white/90 z-[60] flex flex-col items-center justify-center" data-html2canvas-ignore="" id="loader">
<iconify-icon className="text-[#F4A127] animate-bounce" icon="solar:book-bookmark-linear" width="3em"></iconify-icon>
<p className="mt-4 font-sub font-semibold tracking-tight text-lg text-[#1B2A4A]">Génération haute qualité en cours...</p>
<p className="font-body text-sm text-gray-500 mt-2">Veuillez patienter, cela garantit une typographie parfaite.</p>
</div>

<div className="flex flex-col gap-8 items-center" id="book-container">

<div className="a5-page bg-[#1B2A4A] text-white flex flex-col justify-between items-center px-[20mm] py-[25mm] relative" id="page-1">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 10l10-10H0l10 10z\' fill=\'%23F4A127\' fillOpacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')]"></div>
<div className="text-center z-10 w-full mt-8">
<p className="font-sub text-xs tracking-widest uppercase text-gray-300 mb-4 opacity-80">Préfacé par Charles Arthur Kouassi</p>
<div className="h-[2px] w-16 bg-[#F4A127] mx-auto mb-10"></div>
<h1 className="font-sub font-semibold text-2xl tracking-tight text-[#FDFAF4] mb-2 uppercase leading-snug">Le Manuel de la<br/>Réussite Scolaire</h1>
<h2 className="font-hand text-4xl tracking-tight text-[#F4A127] -rotate-2 mt-6 mb-8">09 Actions pour réussir ton année</h2>
<div className="w-full flex justify-center mb-8">

<div className="w-32 h-32 rounded-full border border-dashed border-[#F4A127]/50 flex items-center justify-center text-[#F4A127]/70 bg-white/5 backdrop-blur-sm">
<iconify-icon icon="solar:diploma-linear" width="3em"></iconify-icon>
</div>
</div>
<p className="font-sub text-xs text-gray-300 italic max-w-[80%] mx-auto">Pour collégiens et lycéens.<br/>Méthode testée et approuvée par plusieurs jeunes.</p>
</div>
<div className="z-10 text-center w-full border-t border-white/20 pt-4">
<p className="font-sub font-semibold tracking-widest text-sm uppercase text-[#F4A127]">Melon Baba</p>
</div>
</div>

<div className="a5-page page-even paper-texture relative" id="page-2">
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F4A127] opacity-5" icon="solar:sun-linear" width="15em"></iconify-icon>
<div className="flex-grow flex flex-col justify-center items-center text-center relative z-10 space-y-6">
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] -rotate-2 mb-4">Dédicace</h3>
<p className="font-sub text-sm leading-relaxed text-[#1B2A4A] italic max-w-[85%]">
                    À tous les élèves, étudiantes et étudiants qui, parfois dans le silence de leurs chambres ou dans le bruit des classes, se battent pour donner un sens à leurs efforts.
                </p>
<p className="font-sub text-sm leading-relaxed text-[#1B2A4A] italic max-w-[85%]">
                    À ceux et celles qui n’ont pas tous les moyens mais qui portent des rêves plus grands que leurs cahiers, et à ceux et celles qui possèdent beaucoup mais qui doivent apprendre à valoriser chaque ressource.
                </p>
<p className="font-sub text-sm leading-relaxed text-[#1B2A4A] italic max-w-[85%]">
                    Ce livre est pour vous, pour rappeler qu’il suffit d’une seule résolution, d’un seul pas de discipline, pour changer une année entière.
                </p>
<p className="font-sub text-sm leading-relaxed text-[#1B2A4A] italic max-w-[85%]">
                    Puisse chaque page être pour vous comme une étincelle qui rallume votre motivation et un phare qui éclaire votre chemin vers la réussite.
                </p>
</div>
</div>

<div className="a5-page page-odd paper-texture" id="page-3">
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] border-b-2 border-[#1B2A4A] pb-2 inline-block mb-8">Sommaire</h3>
<ul className="space-y-4 font-sub text-xs text-[#1B2A4A]">
<li className="flex justify-between items-end">
<span>Dédicace &amp; Remerciements</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end">
<span>Préface &amp; Introduction</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="pt-4 pb-2 font-semibold text-[#F4A127] text-sm tracking-widest uppercase">Les 09 Actions</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">1</span> Connaître son environnement</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">2</span> Distinguer "Petits enfants" et "Petits chiens"</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">3</span> Faire du temps son meilleur allié</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">4</span> Gérer les imprévus</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">5</span> Se connaître</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">6</span> Se munir de la pensée du sacrifice</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">7</span> Se former continuellement</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">8</span> Veiller à sa conduite</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="flex justify-between items-end pl-4">
<span className="flex items-center gap-2"><span className="font-hand text-base text-[#7BAF87]">9</span> Connaître ses 5 pains et 2 poissons</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
<li className="pt-4 flex justify-between items-end">
<span>Conclusion &amp; Annexes</span>
<span className="border-b border-dotted border-gray-400 flex-grow mx-2 mb-1"></span>
</li>
</ul>
</div>

<div className="a5-page page-even paper-texture" id="page-4">
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] -rotate-1 mb-4">Remerciements</h3>
<div className="font-body text-xs leading-relaxed space-y-2 mb-8">
<p>Je rends d’abord grâce à mon Père qui est dans les Cieux, Dieu Tout-Puissant, source de toute sagesse...</p>
<p>À mon père biologique, BABA COSSI BARNABÉ, pour son exemple, son amour et de m’avoir inscrit à l’école.</p>
<p>À mon parrain, HOUEHANOU GABRIEL, qui m’a inspiré professionnellement et dont le soutien financier a contribué à mes études.</p>
<p>À mes enseignants, particulièrement ceux du Lycée de Garçons de Bingerville.</p>
<p>À mon père spirituel, l’APÔTRE MOHAMMED SANOGO, et au PASTEUR CHARLES ARTHUR KOUASSI.</p>
<p>À mon mentor écrivain, TCHEKA MALOU. À mes camarades de classe, véritables sources d’inspiration.</p>
</div>
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] -rotate-1 mb-4 mt-6">Préface</h3>
<div className="font-body text-xs leading-relaxed space-y-2">
<p>Réussir son année scolaire peut sembler compliqué lorsque nous faisons face à la fatigue, aux distractions et à la pression constante des résultats. Beaucoup finissent par croire que l’échec est inévitable.</p>
<p>Le Manuel de la Réussite Scolaire repose sur une conviction forte : la réussite n’est pas réservée à une élite. Elle est accessible à tous ceux qui acceptent de changer leur manière de penser, de s’organiser et d’agir.</p>
<p>Ce qui rend ce livre particulier, c’est que son auteur est lui-même jeune. Melon Baba parle depuis une expérience récente, avec ses erreurs et ses décisions courageuses.</p>
<p className="mt-4 font-hand text-base text-right text-[#1B2A4A] font-semibold">— Charles Arthur Kouassi</p>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">4</div>
</div>

<div className="a5-page page-odd paper-texture" id="page-5">
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] -rotate-1 mb-6">Introduction Générale</h3>
<div className="bg-[#F5EAD4] p-4 rounded-lg italic font-sub text-xs mb-4 text-[#1B2A4A] border-l-4 border-[#F4A127]">
                “Réussir son année scolaire, ce n’est pas une question de chance. C’est une question de stratégie et de discipline.”
            </div>
<div className="font-body text-xs leading-relaxed space-y-3">
<p>En Côte d’Ivoire, les taux de réussite varient chaque année. Pour les trois dernières années, voici l’évolution du BEPC (31,47 % → 51,41 %) et du BAC (32,09 % → 40,15 %).</p>
<p>Ces chiffres reflètent une réalité : Ceux qui échouent ne sont pas moins intelligents. La réussite requiert de la motivation, de la méthode et de la constance.</p>
<p>En classe de seconde, au Lycée de Garçons de Bingerville, j’ai touché le fond. Ce fut un électrochoc. J’ai décidé de changer ma manière de fonctionner : j'ai réorganisé mon travail, fait le ménage dans mes fréquentations et priorisé.</p>
<p>Ce livre n’a pas la prétention de te fournir des formules magiques. Il met à ta disposition des actions concrètes et testées.</p>
</div>
<div className="mt-6 torn-paper p-4">
<h4 className="font-sub font-semibold text-[#1B2A4A] mb-2 text-sm flex items-center gap-2">
<iconify-icon className="text-[#F4A127]" icon="solar:pen-linear"></iconify-icon> Exercice de départ
                </h4>
<ul className="font-body text-xs space-y-3">
<li className="border-b border-gray-300 pb-1">Ma raison de réussir : <span className="text-gray-400">........................................</span></li>
<li className="border-b border-gray-300 pb-1">Mon objectif de moyenne : <span className="text-gray-400">........................................</span></li>
</ul>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">5</div>
</div>

<div className="a5-page page-even paper-texture" id="page-6">

<div className="h-[30mm] w-full border border-dashed border-[#7BAF87]/50 rounded-lg flex items-center justify-center mb-6 bg-[#7BAF87]/5 relative overflow-hidden">
<span className="text-[#7BAF87] font-sub tracking-widest text-[10px] uppercase opacity-60 z-10">[ illustration environnement ]</span>
<iconify-icon className="absolute text-[#7BAF87] opacity-10" icon="solar:users-group-two-rounded-linear" width="4em"></iconify-icon>
</div>
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] -rotate-1 mb-4 leading-tight">Chapitre I <br/><span className="text-2xl">Connaître Son Environnement</span></h3>
<div className="bg-[#F5EAD4] p-3 rounded-lg italic font-sub text-[11px] mb-4 text-[#1B2A4A]">
                « Celui qui marche avec les sages devient sage, mais le compagnon des insensés s’en trouve mal. » — Proverbes 13:20
            </div>
<div className="font-body text-xs leading-relaxed space-y-3">
<p>En classe de Seconde, j’ai rejoint le lycée de garçons de Bingerville. Je devais m’adapter. Je me suis entouré de camarades qui m’influençaient négativement (ils séchaient les cours, méprisaient des matières). Résultat : ma plus faible moyenne.</p>
<p>J’ai pris une décision : changer de cercle d’amis. Si tu veux réussir, choisis des amis qui t’inspirent, te corrigent et te tirent vers le haut.</p>
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm mt-4">S’informer sur son école</h4>
<p>Il est primordial de s'imprégner du règlement intérieur. Certains amis ont eu de mauvaises notes de conduite car ils ignoraient les règles (coupe de cheveux, tenue, téléphone).</p>
<p>Ensuite, il est bon de connaître tes professeurs. En première, mon prof de maths exigeait le détail des calculs sur la copie. Ne pas saisir ce fonctionnement coûtait cher en points.</p>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">6</div>
</div>

<div className="a5-page page-odd paper-texture" id="page-7">
<div className="mt-4 torn-paper p-5 h-[160mm] flex flex-col">
<h4 className="font-sub font-semibold text-[#1B2A4A] mb-4 text-sm flex items-center gap-2">
<iconify-icon className="text-[#F4A127] text-lg" icon="solar:clipboard-list-linear"></iconify-icon> Mon environnement
                </h4>
<p className="font-body text-xs mb-4">1. Liste tes amis proches et marque "+" ou "–" selon s'ils t'aident à progresser.</p>
<div className="space-y-6 flex-grow font-hand text-gray-300 text-lg leading-loose mt-2">
<div className="border-b border-[#F4A127]/30"></div>
<div className="border-b border-[#F4A127]/30"></div>
<div className="border-b border-[#F4A127]/30"></div>
<p className="font-body text-xs text-[#1B2A4A] !mt-8 mb-2 leading-normal">2. Cherche le règlement intérieur et note un élément ignoré. Choisis 2 profs et écris comment t'adapter :</p>
<div className="border-b border-[#F4A127]/30"></div>
<div className="border-b border-[#F4A127]/30"></div>
<div className="border-b border-[#F4A127]/30"></div>
<div className="border-b border-[#F4A127]/30"></div>
</div>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">7</div>
</div>

<div className="a5-page page-even paper-texture" id="page-8">
<h3 className="font-hand text-[26px] tracking-tight text-[#1B2A4A] -rotate-1 mb-4 leading-tight">Chapitre II <br/><span className="text-xl">Distinguer "Petits enfants" des "Petits chiens"</span></h3>
<div className="font-body text-xs leading-relaxed space-y-3">
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm text-[#F4A127]">Les "Petits enfants"</h4>
<p>Inspiré de Matthieu 15:24-26, ce principe souligne que toutes les matières n’ont pas le même poids.</p>
<p>Les "petits enfants", ce sont les matières avec de grands coefficients — les piliers de ton année. Elles doivent avoir la priorité dans ton temps d’étude. Leur impact sur ta moyenne est élevé.</p>
<div className="bg-blue-50/50 border-l-2 border-blue-400 p-3 rounded my-3 text-[11px]">
<strong>Exemple :</strong><br/>
                    Maths : 14/20 (Coef 4) = 56 pts<br/>
                    Français : 16/20 (Coef 2) = 32 pts<br/>
                    Total : 88 pts / 6 = 14,66/20. Les maths "pèsent" plus.
                </div>
<p>En série scientifique, les maths, PC et SVT priment. En littéraire, le français, la philo. Demande la grille officielle de ton école.</p>
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm text-[#7BAF87] mt-4">Les "Petits chiens"</h4>
<p>Ce sont les matières à petits coefficients. "Celui qui est fidèle dans les petites choses l’est aussi dans les grandes" (Luc 16:10). Ne les néglige pas ! Elles peuvent sauver ton année ou te tirer vers le bas si tu les ignores.</p>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">8</div>
</div>

<div className="a5-page page-odd paper-texture" id="page-9">
<div className="h-[30mm] w-full border border-dashed border-[#F4A127]/50 rounded-lg flex items-center justify-center mb-6 bg-[#F4A127]/5 relative overflow-hidden">
<span className="text-[#F4A127] font-sub tracking-widest text-[10px] uppercase opacity-60 z-10">[ illustration horloge / temps ]</span>
<iconify-icon className="absolute text-[#F4A127] opacity-10" icon="solar:clock-circle-linear" width="4em"></iconify-icon>
</div>
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] -rotate-1 mb-4">Chapitre III <br/><span className="text-2xl">Le Temps, Ton Meilleur Allié</span></h3>
<div className="font-body text-xs leading-relaxed space-y-3">
<p>« Enseigne-nous à bien compter nos jours, afin que nous appliquons notre cœur à la sagesse. » — Psaume 90:12</p>
<p>Chaque journée est comme un bus qui passe : si tu es prêt, tu montes. Sans maîtrise du temps, tes journées risquent de s’évaporer dans les scrolls TikTok ou les séries.</p>
<ul className="space-y-2 mt-2">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F4A127] text-sm mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Commence par les tâches importantes pendant que l'esprit est frais.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F4A127] text-sm mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Fractionne : 45 min de concentration, 10 min de pause.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F4A127] text-sm mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Prépare la journée du lendemain chaque soir.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F4A127] text-sm mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Le repos est nécessaire, ne le confonds pas avec la paresse.</span>
</li>
</ul>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">9</div>
</div>

<div className="a5-page page-even paper-texture" id="page-10">
<h3 className="font-hand text-[26px] tracking-tight text-[#1B2A4A] -rotate-1 mb-4 leading-tight">Chapitre IV <br/><span className="text-xl">Gérer les Imprévus</span></h3>
<div className="bg-[#F5EAD4] p-3 rounded-lg italic font-sub text-[11px] mb-4 text-[#1B2A4A]">
                “La seule chose certaine durant une année scolaire, c’est qu’il y aura des choses incertaines.”
            </div>
<div className="font-body text-xs leading-relaxed space-y-3">
<p>La vie scolaire n'est pas un long fleuve tranquille (contrôles surprises, grèves, maladies). C’est là qu'on découvre la résilience.</p>
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm mt-2">Réviser régulièrement</h4>
<p>Comme un sportif, tu dois t'entraîner. Réviser régulièrement fait qu'un contrôle surprise ne te fait plus paniquer.</p>
<p>Au collège en allemand, la classe bavardait. Le prof donnait des interrogations surprises : zéro pour presque tous. Le secret de ceux qui réussissaient ? "On relit les cahiers des anciens pour savoir d'avance".</p>
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm mt-2">Clés pour garder le cap :</h4>
<ol className="list-decimal pl-4 space-y-1">
<li><strong>Plan B :</strong> Fais des fiches de révision simples. En cas d'absence, tu as l'essentiel.</li>
<li><strong>Préparation mentale :</strong> Un zéro n'est qu'un instant, pas une étiquette.</li>
<li><strong>Anticipation :</strong> Lis en avance, ne sois pas en retard sur le programme.</li>
<li><strong>Garder son calme :</strong> Face aux nouvelles difficiles, reprends ton rythme pas à pas.</li>
</ol>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">10</div>
</div>

<div className="a5-page page-odd paper-texture" id="page-11">
<div className="h-[30mm] w-full border border-dashed border-[#1B2A4A]/30 rounded-lg flex items-center justify-center mb-6 bg-[#1B2A4A]/5 relative overflow-hidden">
<span className="text-[#1B2A4A] font-sub tracking-widest text-[10px] uppercase opacity-50 z-10">[ illustration cerveau / ampoule ]</span>
<iconify-icon className="absolute text-[#1B2A4A] opacity-10" icon="solar:lightbulb-bolt-linear" width="4em"></iconify-icon>
</div>
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] -rotate-1 mb-4">Chapitre V <br/><span className="text-2xl">Te Connais-Tu ?</span></h3>
<div className="font-body text-xs leading-relaxed space-y-3">
<p>Très peu d’élèves connaissent vraiment leur propre manière d’apprendre. C'est la première étape pour être efficace.</p>
<div className="space-y-2 mt-2">
<div className="border-l-2 border-[#F4A127] pl-2">
<strong className="font-sub text-[#1B2A4A]">La mémoire visuelle :</strong> Tu retiens les schémas, les couleurs, l'emplacement du texte. Fais des fiches colorées.
                    </div>
<div className="border-l-2 border-[#7BAF87] pl-2">
<strong className="font-sub text-[#1B2A4A]">La mémoire auditive :</strong> Tu apprends en écoutant le prof, les podcasts. Lis à voix haute.
                    </div>
<div className="border-l-2 border-[#1B2A4A] pl-2">
<strong className="font-sub text-[#1B2A4A]">La mémoire kinesthésique :</strong> Tu as besoin de faire. Réécris, manipule, fais des exercices.
                    </div>
</div>
<p className="mt-2">J’ai découvert que j'étais visuel en "voyant" ma page de cahier dans mon esprit lors d'un devoir. J'ai adapté ma méthode (couleurs, schémas) et mes notes ont monté.</p>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">11</div>
</div>

<div className="a5-page page-even paper-texture" id="page-12">
<h3 className="font-hand text-[26px] tracking-tight text-[#1B2A4A] -rotate-1 mb-4 leading-tight">Chapitre VI <br/><span className="text-xl">Le Sacrifice</span></h3>
<div className="bg-[#F5EAD4] p-3 rounded-lg italic font-sub text-[11px] mb-4 text-[#1B2A4A]">
                “Qu’est-ce que tu es prêt à sacrifier pour réussir ton année ?”
            </div>
<div className="font-body text-xs leading-relaxed space-y-3">
<p>La réussite se construit par des décisions répétées. Certaines nuits seront longues, certaines habitudes devront tomber.</p>
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm">A. La discipline</h4>
<p>Faire ce qui doit être fait même sans envie. Crée de bonnes routines. En Côte d’Ivoire, le "DEKAPI" (nuit blanche pour bosser) est un sacrifice exceptionnel avant un contrôle. Bien utilisé, il aide ; mal utilisé (pas de repos), il est contre-productif.</p>
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm">B. Réduire les Distractions</h4>
<p>Ton pire ennemi : les réseaux, notifications. Une heure sur TikTok = une heure perdue. Désactive les notifications, utilise le mode avion 45 min.</p>
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm">C. Sortir de sa Zone de Confort</h4>
<p>Quitte ta timidité, pose des questions, entoure-toi d'élèves qui savent. Le sacrifice est le prix du succès.</p>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">12</div>
</div>

<div className="a5-page page-odd paper-texture" id="page-13">
<h3 className="font-hand text-[26px] tracking-tight text-[#1B2A4A] -rotate-1 mb-4 leading-tight">Chapitre VII <br/><span className="text-xl">La Formation Continue</span></h3>
<div className="font-body text-xs leading-relaxed space-y-3">
<p>L’école ne fait que poser les bases. Celui qui cherche à creuser prend de l’avance.</p>
<p>En terminale, YouTube m’a sauvé en maths pour comprendre la factorisation. Aujourd'hui, tu as aussi l'IA. Mais attention : l’IA doit être utilisée avec sagesse, garde ton esprit critique.</p>
<h4 className="font-sub font-semibold text-[#1B2A4A] text-sm mt-3">Outils à exploiter :</h4>
<ul className="space-y-1">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F4A127] text-sm mt-0.5 shrink-0" icon="solar:star-linear"></iconify-icon>
<span>Exercices personnels (annales).</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F4A127] text-sm mt-0.5 shrink-0" icon="solar:star-linear"></iconify-icon>
<span>YouTube pour revoir des chapitres avec un autre angle.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F4A127] text-sm mt-0.5 shrink-0" icon="solar:star-linear"></iconify-icon>
<span>Les cahiers des anciens élèves : mines d'or (résumés, corrections).</span>
</li>
</ul>
<p className="italic text-[11px] mt-2">Choisis une matière difficile, regarde une vidéo, résume en 3 phrases, et fais un exercice lié.</p>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">13</div>
</div>

<div className="a5-page page-even paper-texture" id="page-14">
<h3 className="font-hand text-[22px] tracking-tight text-[#1B2A4A] -rotate-1 mb-2 leading-tight">Chapitre VIII <br/><span className="text-lg">Ta Conduite</span></h3>
<div className="font-body text-[11px] leading-relaxed mb-4">
<p>Le savoir ouvre les portes, mais le comportement décide si elles restent ouvertes. Ta conduite construit ta réputation. J'ai vu des camarades passer en classe supérieure car, malgré un manque de décimales, leur excellente conduite a fait plaider les profs en faveur. Sois respectueux, altruiste, salue tes professeurs.</p>
</div>
<h3 className="font-hand text-[22px] tracking-tight text-[#1B2A4A] -rotate-1 mb-2 leading-tight">Chapitre IX <br/><span className="text-lg">Tes 5 Pains et 2 Poissons</span></h3>
<div className="font-body text-[11px] leading-relaxed">
<p>Comme le jeune garçon dans la Bible (Jean 6), tu as quelque chose dans les mains. Certains ont peu de moyens, d'autres beaucoup (manuels en abondance). Avoir tout et ne pas l'utiliser, c'est l'enterrer.</p>
<p>Fais le point : travaille avec ce que tu as, complète en empruntant. La clé est ta capacité à tirer le maximum de tes ressources. Tes "5 pains et 2 poissons" suffisent si tu les gères avec fidélité.</p>
</div>
<h3 className="font-hand text-[22px] tracking-tight text-[#1B2A4A] -rotate-1 mb-2 mt-4 leading-tight">Conclusion Générale</h3>
<div className="font-body text-[11px] leading-relaxed">
<p>Ces 09 actions ne sont pas des options, mais des leviers. Ce n’est pas celui qui commence fort qui gagne, mais celui qui reste constant. Prends aujourd’hui une décision : ne laisse plus tes journées filer.</p>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">14</div>
</div>

<div className="a5-page page-odd paper-texture" id="page-15">
<h3 className="font-hand text-3xl tracking-tight text-[#1B2A4A] -rotate-1 mb-6">Annexes Pratiques</h3>
<div className="w-full bg-white border border-[#1B2A4A]/20 rounded-lg p-3 shadow-sm mb-4">
<h4 className="font-sub font-semibold text-[11px] text-[#1B2A4A] mb-2 uppercase tracking-wide">Planning hebdomadaire modèle</h4>
<div className="grid grid-cols-4 gap-1 text-[8px] font-body text-center border-b border-[#1B2A4A]/20 pb-1 mb-1 font-semibold text-[#1B2A4A]">
<div>Jour</div>
<div>Priorité 1</div>
<div>Priorité 2</div>
<div>Formation</div>
</div>
<div className="space-y-1 text-[8px] font-body text-gray-600">
<div className="grid grid-cols-4 gap-1 border-b border-gray-100 pb-1"><div className="font-semibold text-[#1B2A4A]">Lundi</div><div className="bg-[#F4A127]/10 rounded"></div><div className="bg-[#7BAF87]/10 rounded"></div><div></div></div>
<div className="grid grid-cols-4 gap-1 border-b border-gray-100 pb-1"><div className="font-semibold text-[#1B2A4A]">Mardi</div><div className="bg-[#F4A127]/10 rounded"></div><div className="bg-[#7BAF87]/10 rounded"></div><div></div></div>
<div className="grid grid-cols-4 gap-1 border-b border-gray-100 pb-1"><div className="font-semibold text-[#1B2A4A]">Merc.</div><div className="bg-[#F4A127]/10 rounded"></div><div className="bg-[#7BAF87]/10 rounded"></div><div></div></div>
<div className="grid grid-cols-4 gap-1 border-b border-gray-100 pb-1"><div className="font-semibold text-[#1B2A4A]">Jeudi</div><div className="bg-[#F4A127]/10 rounded"></div><div className="bg-[#7BAF87]/10 rounded"></div><div></div></div>
<div className="grid grid-cols-4 gap-1"><div className="font-semibold text-[#1B2A4A]">Vend.</div><div className="bg-[#F4A127]/10 rounded"></div><div className="bg-[#7BAF87]/10 rounded"></div><div></div></div>
</div>
</div>
<div className="w-full bg-white border border-[#1B2A4A]/20 rounded-lg p-3 shadow-sm">
<h4 className="font-sub font-semibold text-[11px] text-[#1B2A4A] mb-2 uppercase tracking-wide">Tableau Enfants / Chiens</h4>
<div className="grid grid-cols-4 gap-1 text-[9px] font-body border-b border-[#1B2A4A]/20 pb-1 mb-1 font-semibold text-[#1B2A4A]">
<div>Matière</div><div>Coef</div><div>Moyenne</div><div>Objectif</div>
</div>
<div className="space-y-2 text-[9px] font-body text-gray-500">
<div className="grid grid-cols-4 gap-1 border-b border-dashed border-gray-200 pb-1"><div></div><div></div><div></div><div></div></div>
<div className="grid grid-cols-4 gap-1 border-b border-dashed border-gray-200 pb-1"><div></div><div></div><div></div><div></div></div>
<div className="grid grid-cols-4 gap-1 border-b border-dashed border-gray-200 pb-1"><div></div><div></div><div></div><div></div></div>
</div>
</div>
<div className="absolute bottom-4 left-0 w-full flex justify-center text-gray-400 font-mono text-[10px]">15</div>
</div>

<div className="a5-page page-even paper-texture flex flex-col justify-center items-center text-center px-[15mm]" id="page-16">
<div className="w-20 h-20 rounded-full bg-[#1B2A4A] text-[#F4A127] flex items-center justify-center font-hand text-3xl font-semibold mb-4 border-2 border-[#F4A127]">MB</div>
<h3 className="font-sub font-semibold text-lg text-[#1B2A4A] uppercase tracking-wide mb-2">Melon Baba</h3>
<div className="font-body text-[11px] leading-relaxed space-y-2 text-gray-700">
<p>Web entrepreneur, écrivain et coach en développement personnel. Passionné par la communication digitale, il est chef de production à Mi’Com (Côte d’Ivoire).</p>
<p>Reconnu comme l’un des plus jeunes entrepreneurs de sa génération, il inspire les jeunes à libérer leur potentiel. Chrétien engagé, il partage un message d’espérance.</p>
<p>Avec ce livre, il partage des clés pratiques pour aider collégiens et lycéens à exceller et bâtir un avenir solide.</p>
</div>
<div className="mt-8 border-t border-[#1B2A4A]/20 pt-4 w-full">
<p className="font-sub font-semibold text-[#1B2A4A] text-xs uppercase tracking-widest mb-2">Le Manuel de la Réussite Scolaire</p>
<p className="font-body text-[10px] text-gray-500 italic">"Et si ta réussite dépendait simplement de 09 décisions ?"</p>
</div>
</div>
</div>



    </>
  );
}
