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



        function showPage(pageId) {
            // Cacher toutes les sections
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => {
                    if(!el.classList.contains('active')) el.style.display = 'none';
                }, 500); // Match CSS transition
            });

            // Afficher la cible
            const target = document.getElementById(pageId);
            target.style.display = 'block';
            
            // Petit délai pour permettre l'animation CSS
            setTimeout(() => {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 10);
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
      

<header className="sticky top-0 z-50 bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-[var(--border-color)]">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden text-[var(--text-main)]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="flex flex-col items-center group" href="#" onclick="showPage('home')">
<span className="font-serif text-xl tracking-tight font-medium group-hover:opacity-70 transition-opacity">Maison &amp; Décoration</span>
<span className="text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)] mt-0.5">Paris • Since 2023</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
<button className="hover:text-[var(--text-main)] transition-colors" onclick="showPage('home')">Accueil</button>
<button className="hover:text-[var(--text-main)] transition-colors text-[var(--text-main)]" onclick="showPage('home')">Journal</button>
<button className="hover:text-[var(--text-main)] transition-colors">Projets</button>
<button className="hover:text-[var(--text-main)] transition-colors">Boutique</button>
</nav>

<div className="flex items-center gap-5 text-[var(--text-main)]">
<button className="hover:text-[var(--text-muted)] transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-[var(--text-muted)] transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--accent)] rounded-full"></span>
</button>
</div>
</div>
</header>

<main className="page-section active flex-grow" id="home">

<section className="relative border-b border-[var(--border-color)]">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
<div className="flex flex-col justify-center p-12 lg:p-24 bg-[var(--bg-secondary)] border-b lg:border-b-0 lg:border-r border-[var(--border-color)]">
<span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] mb-6 block font-bold">Édition Octobre</span>
<h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-[var(--text-main)] mb-8 tracking-tight">
                        L'art de vivre <br/> <i className="font-light">moderne</i>.
                    </h1>
<p className="text-[var(--text-muted)] max-w-md mb-10 leading-relaxed font-light">
                        Explorez nos dernières inspirations pour un intérieur qui allie esthétique intemporelle et confort contemporain.
                    </p>
<div className="flex gap-6">
<button className="bg-[var(--text-main)] text-white px-8 py-4 text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
                            S'abonner
                        </button>
<button className="border border-[var(--border-color)] bg-white px-8 py-4 text-xs uppercase tracking-widest hover:border-[var(--text-main)] transition-colors">
                            Voir le catalogue
                        </button>
</div>
</div>
<div className="relative h-96 lg:h-auto overflow-hidden">
<img alt="Interior Hero" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 py-20">
<div className="flex justify-between items-end mb-12">
<h2 className="font-serif text-3xl">À la une ce mois-ci</h2>
<a className="text-xs uppercase tracking-widest border-b border-[var(--text-main)] pb-1 hover:opacity-60 transition-opacity" href="#">Tout voir</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer md:col-span-2" onclick="showPage('article-detail')">
<div className="relative overflow-hidden aspect-[16/9] mb-6 bg-gray-100">
<img alt="Art Deco" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=3200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 text-[9px] uppercase tracking-widest font-bold">Nouveau</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
<span>Tendances</span>
<span className="w-1 h-1 bg-[var(--text-muted)] rounded-full opacity-50"></span>
<span>5 min de lecture</span>
</div>
<h3 className="font-serif text-3xl group-hover:underline decoration-1 underline-offset-4 decoration-[var(--border-color)]">
                            Art déco moderne : réinterpréter le style des années 20
                        </h3>
<p className="text-[var(--text-muted)] max-w-xl line-clamp-2">
                            Loin d'être une simple nostalgie, le retour de l'Art Déco célèbre la fusion entre le faste d'antan et le minimalisme contemporain.
                        </p>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4] mb-6 bg-gray-100">
<img alt="Ceramic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594040226829-7f251ab46d80?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
<span>Objet</span>
</div>
<h3 className="font-serif text-xl group-hover:underline decoration-1 underline-offset-4 decoration-[var(--border-color)]">
                            La céramique brute
                        </h3>
<p className="text-sm text-[var(--text-muted)]">Retour aux sources et matériaux naturels.</p>
</div>
</article>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-[var(--border-color)]">

<article className="group cursor-pointer flex flex-col md:flex-row gap-6 items-center" onclick="showPage('article-cocooning')">
<div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-gray-100 relative">
<img alt="Chambre Cocooning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522771753035-1a5b6562f329?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-2">
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
<span>Lifestyle</span>
</div>
<h3 className="font-serif text-xl group-hover:underline decoration-1 underline-offset-4 decoration-[var(--border-color)]">
                            Comment créer une ambiance cocooning dans sa chambre
                        </h3>
<p className="text-sm text-[var(--text-muted)] line-clamp-2">
                             Découvrez les astuces pour transformer votre chambre en un véritable cocon douillet et apaisant.
                        </p>
<span className="text-[10px] uppercase tracking-widest font-bold mt-2 flex items-center gap-2">Lire l'article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</article>

<article className="group cursor-pointer flex flex-col md:flex-row gap-6 items-center" onclick="showPage('article-durable')">
<div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-gray-100 relative">
<img alt="Décoration Durable" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 flex flex-col gap-2">
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
<span>Éco-Responsable</span>
</div>
<h3 className="font-serif text-xl group-hover:underline decoration-1 underline-offset-4 decoration-[var(--border-color)]">
                            Décoration durable : astuces pour un intérieur éco-responsable
                        </h3>
<p className="text-sm text-[var(--text-muted)] line-clamp-2">
                             Adoptez une décoration durable et respectueuse de l'environnement avec ces astuces simples.
                        </p>
<span className="text-[10px] uppercase tracking-widest font-bold mt-2 flex items-center gap-2">Lire l'article <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</article>
</div>
</section>

<section className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] py-20">
<div className="max-w-md mx-auto text-center px-6">
<iconify-icon className="mb-4 text-[var(--text-muted)]" icon="solar:letter-linear" width="32"></iconify-icon>
<h3 className="font-serif text-2xl mb-4">La Newsletter</h3>
<p className="text-sm text-[var(--text-muted)] mb-6">Recevez nos articles et inspirations chaque semaine.</p>
<div className="flex gap-2">
<input className="w-full bg-white border border-[var(--border-color)] px-4 py-2 text-sm focus:outline-none focus:border-[var(--text-main)]" placeholder="votre@email.com" type="email"/>
<button className="bg-[var(--text-main)] text-white px-6 py-2 text-xs uppercase tracking-widest hover:opacity-90">OK</button>
</div>
</div>
</section>
</main>

<main className="page-section flex-grow bg-white" id="article-detail">

<div className="max-w-3xl mx-auto px-6 py-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
<a className="hover:text-[var(--text-main)]" href="#" onclick="showPage('home')">Accueil</a>
<span>/</span>
<a className="hover:text-[var(--text-main)]" href="#">Journal</a>
<span>/</span>
<span className="text-[var(--text-main)] font-bold">Art Déco</span>
</div>

<div className="max-w-3xl mx-auto px-6 mb-12 text-center">
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--text-main)] mb-6 leading-tight tracking-tight">
                Art déco moderne : réinterpréter le style des années 20
            </h1>
<div className="flex items-center justify-center gap-6 text-xs text-[var(--text-muted)] border-t border-b border-[var(--border-color)] py-4 inline-flex w-full md:w-auto px-12">
<span className="font-medium text-[var(--text-main)] uppercase tracking-wider text-[10px]">Sophie Dubois</span>
<span>•</span>
<span className="uppercase tracking-wider text-[10px]">14 Octobre</span>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 mb-16">
<div className="aspect-[21/9] overflow-hidden bg-gray-100">
<img alt="Art Deco Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=3200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<article className="max-w-2xl mx-auto px-6 pb-24 article-content text-[17px] font-light">
<p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[var(--text-main)]">
                L'Art Déco n'a jamais vraiment disparu, mais il connaît aujourd'hui une renaissance spectaculaire. Loin d'être une simple nostalgie des années folles, ce retour célèbre la fusion entre le faste d'antan et le minimalisme contemporain.
            </p>
<p>
                C'est une réinterprétation audacieuse qui conserve l'élégance des formes géométriques tout en les adaptant à nos besoins de lumière et d'espace. Comment intégrer ce style emblématique sans transformer son intérieur en musée ?
            </p>
<h2>La Géométrie comme Signature</h2>
<p>
                L'âme du style Art Déco réside dans ses lignes. Oubliez les courbes organiques du style Bohème ; ici, nous célébrons la symétrie, les arcs parfaits et les motifs en escalier. Cependant, la version moderne tempère cette rigueur.
            </p>
<p>
                On opte pour un papier peint aux motifs graphiques sur un seul mur, ou un tapis aux lignes architecturales qui structure l'espace sans l'alourdir. Les miroirs, pièces maîtresses, adoptent des formes octogonales ou soleil.
            </p>
<div className="my-12 p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center">
<iconify-icon className="mb-4 text-[var(--accent)]" icon="solar:quote-up-square-linear" width="30"></iconify-icon>
<p className="font-serif text-xl italic text-[var(--text-main)]">"Le luxe moderne ne crie pas, il murmure à travers la qualité des matériaux."</p>
</div>
<h2>Matériaux Nobles : Laiton et Velours</h2>
<p>
                Si les années 20 abusaient parfois de la dorure, le "Néo Art Déco" préfère le laiton brossé. Plus doux, plus mat, il accroche la lumière avec sophistication. Il se marie divinement avec le marbre veiné pour les tables basses ou le velours profond (bleu nuit, vert émeraude) qui habille canapés et fauteuils.
            </p>
<div className="mt-12 pt-8 border-t border-[var(--border-color)] flex justify-between items-center">
<button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-[var(--text-muted)] transition-colors" onclick="showPage('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                    Retour à l'accueil
                </button>
<div className="flex gap-4">
<iconify-icon className="cursor-pointer hover:text-[var(--accent)] transition-colors" icon="solar:share-linear"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-[var(--accent)] transition-colors" icon="solar:bookmark-linear"></iconify-icon>
</div>
</div>
</article>
</main>

<main className="page-section flex-grow bg-white" id="article-cocooning">
<div className="max-w-3xl mx-auto px-6 py-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
<a className="hover:text-[var(--text-main)]" href="#" onclick="showPage('home')">Accueil</a>
<span>/</span>
<a className="hover:text-[var(--text-main)]" href="#">Journal</a>
<span>/</span>
<span className="text-[var(--text-main)] font-bold">Cocooning</span>
</div>
<div className="max-w-3xl mx-auto px-6 mb-12 text-center">
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--text-main)] mb-6 leading-tight tracking-tight">
                Comment créer une ambiance cocooning dans sa chambre
            </h1>
<div className="flex items-center justify-center gap-6 text-xs text-[var(--text-muted)] border-t border-b border-[var(--border-color)] py-4 inline-flex w-full md:w-auto px-12">
<span className="font-medium text-[var(--text-main)] uppercase tracking-wider text-[10px]">La Rédaction</span>
<span>•</span>
<span className="uppercase tracking-wider text-[10px]">20 Octobre</span>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 mb-16">
<div className="aspect-[21/9] overflow-hidden bg-gray-100">
<img alt="Chambre Cocooning" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522771753035-1a5b6562f329?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<article className="max-w-2xl mx-auto px-6 pb-24 article-content text-[17px] font-light">
<p>La décoration durable répond à une prise de conscience environnementale croissante tout en créant des espaces de vie sains et authentiques. Cette approche concilie esthétique, éthique et bien-être, prouvant qu'il est possible de décorer son intérieur avec style tout en respectant la planète.</p>
<h2>Le Choix des Matériaux Naturels</h2>
<p>Les matériaux naturels constituent la base d'une décoration durable. Le bois certifié FSC, le bambou à croissance rapide, le liège renouvelable et le rotin durable offrent des alternatives écologiques tout en apportant chaleur et authenticité à votre intérieur.</p>
<h2>La Seconde Vie des Meubles</h2>
<p>Voici les avantages de choisir des meubles d'occasion ou vintage :</p>
<ul>
<li>Réduction de l'empreinte carbone</li>
<li>Pièces uniques avec histoire et caractère</li>
<li>Prix souvent plus avantageux</li>
<li>Qualité de fabrication supérieure</li>
<li>Possibilité de personnalisation</li>
</ul>
<h2>L'Importance des Finitions Écologiques</h2>
<p>Les peintures et vernis écologiques, sans COV (Composés Organiques Volatils), préservent la qualité de l'air intérieur tout en offrant un rendu esthétique impeccable. Les enduits naturels comme la chaux ou l'argile apportent texture et caractère aux murs.</p>
<h2>Les Textiles Responsables</h2>
<p>Les textiles naturels et biologiques créent une atmosphère saine et confortable. Le lin, naturellement antibactérien et durable, le coton biologique cultivé sans pesticides, et la laine naturelle offrent des options respectueuses de l'environnement.</p>
<h2>La Purification Naturelle</h2>
<p>Les plantes d'intérieur jouent un rôle crucial dans une décoration durable. Elles purifient l'air, régulent l'humidité et créent une connexion directe avec la nature, tout en apportant vie et fraîcheur à votre espace.</p>
<h2>L'Optimisation de l'Éclairage</h2>
<p>L'utilisation maximale de la lumière naturelle réduit la consommation d'énergie. Pour l'éclairage artificiel, les LED basse consommation et les systèmes d'éclairage intelligents permettent d'économiser l'énergie tout en créant des ambiances variées.</p>
<h2>La Réduction des Déchets</h2>
<p>La décoration durable implique une réflexion sur le cycle de vie des objets. Privilégiez les articles sans emballage superflu, réutilisez les contenants existants et recyclez créativement les matériaux pour créer des éléments décoratifs uniques.</p>
<h2>L'Upcycling Créatif</h2>
<p>La transformation créative d'objets existants permet de réduire les déchets tout en créant des pièces uniques. Un vieux meuble repeint, une caisse en bois transformée en étagère, des bocaux convertis en luminaires : les possibilités sont infinies.</p>
<p>La décoration durable n'est pas une contrainte mais une opportunité de créer un intérieur plus authentique et personnel. Elle nous invite à repenser notre rapport aux objets et aux matériaux, tout en contribuant à la préservation de notre environnement. En adoptant ces principes, vous créez non seulement un espace de vie plus sain mais participez également à un mouvement plus large vers un mode de vie plus responsable.</p>
<div className="mt-12 pt-8 border-t border-[var(--border-color)] flex justify-between items-center">
<button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-[var(--text-muted)] transition-colors" onclick="showPage('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                    Retour à l'accueil
                </button>
<div className="flex gap-4">
<iconify-icon className="cursor-pointer hover:text-[var(--accent)] transition-colors" icon="solar:share-linear"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-[var(--accent)] transition-colors" icon="solar:bookmark-linear"></iconify-icon>
</div>
</div>
</article>
</main>

<main className="page-section flex-grow bg-white" id="article-durable">
<div className="max-w-3xl mx-auto px-6 py-8 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
<a className="hover:text-[var(--text-main)]" href="#" onclick="showPage('home')">Accueil</a>
<span>/</span>
<a className="hover:text-[var(--text-main)]" href="#">Journal</a>
<span>/</span>
<span className="text-[var(--text-main)] font-bold">Durable</span>
</div>
<div className="max-w-3xl mx-auto px-6 mb-12 text-center">
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--text-main)] mb-6 leading-tight tracking-tight">
                Décoration durable : astuces pour un intérieur éco-responsable
            </h1>
<div className="flex items-center justify-center gap-6 text-xs text-[var(--text-muted)] border-t border-b border-[var(--border-color)] py-4 inline-flex w-full md:w-auto px-12">
<span className="font-medium text-[var(--text-main)] uppercase tracking-wider text-[10px]">Sarah Green</span>
<span>•</span>
<span className="uppercase tracking-wider text-[10px]">22 Octobre</span>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 mb-16">
<div className="aspect-[21/9] overflow-hidden bg-gray-100">
<img alt="Interieur Durable" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<article className="max-w-2xl mx-auto px-6 pb-24 article-content text-[17px] font-light">
<p>La décoration durable répond à une prise de conscience environnementale croissante tout en créant des espaces de vie sains et authentiques. Cette approche concilie esthétique, éthique et bien-être, prouvant qu'il est possible de décorer son intérieur avec style tout en respectant la planète.</p>
<h2>Le Choix des Matériaux Naturels</h2>
<p>Les matériaux naturels constituent la base d'une décoration durable. Le bois certifié FSC, le bambou à croissance rapide, le liège renouvelable et le rotin durable offrent des alternatives écologiques tout en apportant chaleur et authenticité à votre intérieur.</p>
<h2>La Seconde Vie des Meubles</h2>
<p>Voici les avantages de choisir des meubles d'occasion ou vintage :</p>
<ul>
<li>Réduction de l'empreinte carbone</li>
<li>Pièces uniques avec histoire et caractère</li>
<li>Prix souvent plus avantageux</li>
<li>Qualité de fabrication supérieure</li>
<li>Possibilité de personnalisation</li>
</ul>
<h2>L'Importance des Finitions Écologiques</h2>
<p>Les peintures et vernis écologiques, sans COV (Composés Organiques Volatils), préservent la qualité de l'air intérieur tout en offrant un rendu esthétique impeccable. Les enduits naturels comme la chaux ou l'argile apportent texture et caractère aux murs.</p>
<h2>Les Textiles Responsables</h2>
<p>Les textiles naturels et biologiques créent une atmosphère saine et confortable. Le lin, naturellement antibactérien et durable, le coton biologique cultivé sans pesticides, et la laine naturelle offrent des options respectueuses de l'environnement.</p>
<h2>La Purification Naturelle</h2>
<p>Les plantes d'intérieur jouent un rôle crucial dans une décoration durable. Elles purifient l'air, régulent l'humidité et créent une connexion directe avec la nature, tout en apportant vie et fraîcheur à votre espace.</p>
<h2>L'Optimisation de l'Éclairage</h2>
<p>L'utilisation maximale de la lumière naturelle réduit la consommation d'énergie. Pour l'éclairage artificiel, les LED basse consommation et les systèmes d'éclairage intelligents permettent d'économiser l'énergie tout en créant des ambiances variées.</p>
<h2>La Réduction des Déchets</h2>
<p>La décoration durable implique une réflexion sur le cycle de vie des objets. Privilégiez les articles sans emballage superflu, réutilisez les contenants existants et recyclez créativement les matériaux pour créer des éléments décoratifs uniques.</p>
<h2>L'Upcycling Créatif</h2>
<p>La transformation créative d'objets existants permet de réduire les déchets tout en créant des pièces uniques. Un vieux meuble repeint, une caisse en bois transformée en étagère, des bocaux convertis en luminaires : les possibilités sont infinies.</p>
<p>La décoration durable n'est pas une contrainte mais une opportunité de créer un intérieur plus authentique et personnel. Elle nous invite à repenser notre rapport aux objets et aux matériaux, tout en contribuant à la préservation de notre environnement. En adoptant ces principes, vous créez non seulement un espace de vie plus sain mais participez également à un mouvement plus large vers un mode de vie plus responsable.</p>
<div className="mt-12 pt-8 border-t border-[var(--border-color)] flex justify-between items-center">
<button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-[var(--text-muted)] transition-colors" onclick="showPage('home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                    Retour à l'accueil
                </button>
<div className="flex gap-4">
<iconify-icon className="cursor-pointer hover:text-[var(--accent)] transition-colors" icon="solar:share-linear"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-[var(--accent)] transition-colors" icon="solar:bookmark-linear"></iconify-icon>
</div>
</div>
</article>
</main>

<footer className="border-t border-[var(--border-color)] py-12 bg-white mt-auto">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-serif text-lg tracking-tight">Maison &amp; Décoration</span>
<div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] flex gap-6">
<a className="hover:text-[var(--text-main)]" href="#">Mentions Légales</a>
<a className="hover:text-[var(--text-main)]" href="#">Contact</a>
<a className="hover:text-[var(--text-main)]" href="#">Instagram</a>
</div>
</div>
</footer>


    </>
  );
}
