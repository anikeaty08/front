import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const heroSlides = [
      {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80",
        alt: "Villa de prestige",
        subtitle: "Investissements & Patrimoine",
        title: "L’immobilier d’exception,<span class='block'>pensé comme un art de vivre</span>",
        description: "Découvrez des propriétés rares, des opportunités patrimoniales et un accompagnement sur mesure pour construire votre avenir."
      },
      {
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
        alt: "Intérieur élégant",
        subtitle: "Agence locale & conseil",
        title: "Des lieux choisis,<span class='block'>pour des vies bien pensées</span>",
        description: "Nous accompagnons chaque projet immobilier avec une connaissance fine du marché et une attention portée à chaque détail."
      },
      {
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
        alt: "Maison contemporaine",
        subtitle: "Acheter • Vendre • Estimer",
        title: "Votre projet immobilier,<span class='block'>guidé avec exigence et douceur</span>",
        description: "Vente, achat, estimation : bénéficiez d’un accompagnement clair, humain et précis dans tout l’Ouest Lyonnais."
      }
    ];

    let heroIndex = 0;
    let activeImage = 1;

    const heroImage1 = document.getElementById("heroImage1");
    const heroImage2 = document.getElementById("heroImage2");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const heroTitle = document.getElementById("heroTitle");
    const heroDescription = document.getElementById("heroDescription");

    function updateHeroText(slide) {
      heroSubtitle.classList.add("opacity-0");
      heroTitle.classList.add("opacity-0");
      heroDescription.classList.add("opacity-0");

      setTimeout(() => {
        heroSubtitle.textContent = slide.subtitle;
        heroTitle.innerHTML = slide.title;
        heroDescription.textContent = slide.description;

        heroSubtitle.classList.remove("opacity-0");
        heroTitle.classList.remove("opacity-0");
        heroDescription.classList.remove("opacity-0");
      }, 350);
    }

    heroSubtitle.classList.add("transition-opacity", "duration-700");
    heroTitle.classList.add("transition-opacity", "duration-700");
    heroDescription.classList.add("transition-opacity", "duration-700");

    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      const nextSlide = heroSlides[heroIndex];

      if (activeImage === 1) {
        heroImage2.src = nextSlide.image;
        heroImage2.alt = nextSlide.alt;
        heroImage2.classList.remove("opacity-0");
        heroImage2.classList.add("opacity-100");
        heroImage1.classList.remove("opacity-100");
        heroImage1.classList.add("opacity-0");
        activeImage = 2;
      } else {
        heroImage1.src = nextSlide.image;
        heroImage1.alt = nextSlide.alt;
        heroImage1.classList.remove("opacity-0");
        heroImage1.classList.add("opacity-100");
        heroImage2.classList.remove("opacity-100");
        heroImage2.classList.add("opacity-0");
        activeImage = 1;
      }

      updateHeroText(nextSlide);
    }, 5000);

    lucide.createIcons({
      attrs: {
        'stroke-width': 1.5
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen">
<div className="absolute inset-0">
<img alt="Villa de prestige" className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-1000" id="heroImage1" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=1800&amp;q=80"/>
<img alt="Intérieur élégant" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000" id="heroImage2" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&amp;fit=crop&amp;w=1800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30"></div>
</div>
<header className="absolute inset-x-0 top-0 z-30">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
<div className="flex items-center">
<div className="text-2xl font-light uppercase tracking-[0.2em] text-[#C5A96A]" style={{fontFamily: '\'Cormorant Infant\', serif'}}>
  HAMAC
</div>
</div>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-normal text-white/90 transition hover:text-white" href="#">Acheter</a>
<a className="text-sm font-normal text-white/90 transition hover:text-white" href="#">Vendre</a>
<a className="text-sm font-normal text-white/90 transition hover:text-white" href="#">Investir</a>
<a className="text-sm font-normal text-white/90 transition hover:text-white" href="#">Patrimoine</a>
<a className="text-sm font-normal text-white/90 transition hover:text-white" href="#">Contact</a>
</nav>
<button className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/15 md:hidden">
          Menu
        </button>
</div>
</header>
<section className="flex min-h-screen z-10 relative items-center justify-center">
<div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-24 text-center lg:px-10">
<div className="max-w-3xl">
<p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-opacity duration-700" id="heroSubtitle">Investissements &amp; Patrimoine</p>
<h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl transition-opacity duration-700" id="heroTitle" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            L’immobilier d’exception,
            <span className="block">pensé comme un art de vivre</span>
</h1>
<p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-7 text-white/85 sm:text-lg transition-opacity duration-700" id="heroDescription">
            Découvrez des propriétés rares, des opportunités patrimoniales et un accompagnement sur mesure pour construire votre avenir.
          </p>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-6 lg:px-10">
<div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
<div className="grid grid-cols-1 gap-0 divide-y divide-neutral-200 md:grid-cols-4 md:divide-x md:divide-y-0">
<div className="flex items-center gap-3 px-5 py-4">
<i className="h-5 w-5 text-neutral-500" data-lucide="house"></i>
<div>
<p className="text-xs font-medium text-neutral-500">Type</p>
<p className="text-sm font-normal text-neutral-900">Appartement, Villa...</p>
</div>
</div>
<div className="flex items-center gap-3 px-5 py-4">
<i className="h-5 w-5 text-neutral-500" data-lucide="map-pin"></i>
<div>
<p className="text-xs font-medium text-neutral-500">Localisation</p>
<p className="text-sm font-normal text-neutral-900">Ville ou quartier</p>
</div>
</div>
<div className="flex items-center gap-3 px-5 py-4">
<i className="h-5 w-5 text-neutral-500" data-lucide="wallet"></i>
<div>
<p className="text-xs font-medium text-neutral-500">Budget</p>
<p className="text-sm font-normal text-neutral-900">Votre enveloppe</p>
</div>
</div>
<div className="flex items-center justify-between px-5 py-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-500" data-lucide="search"></i>
<div>
<p className="text-xs font-medium text-neutral-500">Recherche</p>
<p className="text-sm font-normal text-neutral-900">Lancer la recherche</p>
</div>
</div>
<button className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-800">
                Rechercher
              </button>
</div>
</div>
</div>
</div>
</section>
</div>
<main className="bg-[#FAF8F5] pt-28">
<section className="relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-16 bg-[#FAF8F5]" style={{borderBottomLeftRadius: '100% 100%', borderBottomRightRadius: '100% 100%'}}></div>
<div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
<div className="overflow-hidden rounded-[2rem]">
<img alt="Intérieur chaleureux" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="max-w-2xl">
<h2 className="text-3xl font-light uppercase tracking-[0.15em] text-[#1B2A4A] sm:text-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Hamac — Agence immobilière dans l'Ouest Lyonnais
            </h2>
<p className="mt-4 text-xl font-light text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Accompagner chaque projet avec humanité et précision
            </p>
<div className="mt-6 space-y-4 text-base leading-7 text-[#6F7684]">
<p>
                Fondée en 2021 et implantée à Sainte-Foy-lès-Lyon, Hamac accompagne les projets immobiliers avec une attention sincère portée aux lieux, aux familles et aux trajectoires de vie.
              </p>
<p>
                Notre agence est spécialisée dans les maisons familiales, les appartements de caractère et les biens à fort potentiel, au cœur de dix communes de l’Ouest Lyonnais.
              </p>
<p>
                Nous défendons une approche locale, sensible et exigeante, où chaque conseil repose sur une connaissance fine du marché et une relation de confiance durable.
              </p>
</div>
<a className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#C5A96A] transition hover:opacity-80" href="#">
              Découvrir l'agence <span>→</span>
</a>
</div>
</div>
</div>
</section>
<section className="bg-[#1B2A4A]">
<div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
<div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
<div>
<div className="text-4xl font-light tracking-tight text-[#C5A96A] sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>127+</div>
<p className="mt-3 text-base text-white/85">familles accompagnées</p>
</div>
<div>
<div className="text-4xl font-light tracking-tight text-[#C5A96A] sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>74</div>
<p className="mt-3 text-base text-white/85">avis 5 étoiles</p>
</div>
<div>
<div className="text-4xl font-light tracking-tight text-[#C5A96A] sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>10</div>
<p className="mt-3 text-base text-white/85">communes couvertes</p>
</div>
<div>
<div className="text-4xl font-light tracking-tight text-[#C5A96A] sm:text-5xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>4,9/5</div>
<p className="mt-3 text-base text-white/85">satisfaction client</p>
</div>
</div>
</div>
</section>
<section className="relative bg-[#FAF8F5]">
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
<div className="max-w-xl">
<h2 className="text-3xl font-light uppercase tracking-[0.15em] text-[#1B2A4A] sm:text-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Estimer votre bien immobilier
            </h2>
<p className="mt-5 text-base leading-7 text-[#6F7684]">
              Profitez d’une estimation offerte, précise et contextualisée, fondée sur notre connaissance fine du marché de l’Ouest Lyonnais et sur les qualités propres de votre bien.
            </p>
</div>
<div className="rounded-[2rem] border border-[#E9E1D7] bg-white/80 p-6 shadow-sm">
<div className="flex flex-col gap-4 sm:flex-row">
<input className="w-full rounded-full border border-[#E9E1D7] bg-[#FAF8F5] px-5 py-3 text-sm text-[#1B2A4A] outline-none placeholder:text-[#6F7684]" placeholder="Adresse de votre bien" type="text"/>
<button className="rounded-full border border-[#C5A96A] bg-[#C5A96A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Estimer mon bien
              </button>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#FAF8F5]">
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
<div className="max-w-3xl">
<h2 className="text-3xl font-light uppercase tracking-[0.15em] text-[#1B2A4A] sm:text-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            Acheter dans l'Ouest Lyonnais
          </h2>
<p className="mt-4 text-base leading-7 text-[#6F7684]">
            Une sélection de biens choisis pour leur adresse, leur lumière et leur potentiel.
          </p>
</div>
<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
<article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#E9E1D7] transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="relative h-72 overflow-hidden">
<img alt="Maison à Sainte-Foy-lès-Lyon" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<span className="absolute left-4 top-4 rounded-full bg-[#C5A96A] px-3 py-1 text-xs font-medium text-white">Exclusivité</span>
</div>
<div className="p-5">
<p className="text-lg font-medium text-[#C5A96A]">895 000 €</p>
<h3 className="mt-2 text-xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Maison • Sainte-Foy-lès-Lyon</h3>
<div className="mt-3 flex flex-wrap gap-4 text-xs text-[#6F7684]">
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="ruler"></i> 165 m²</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="sofa"></i> 6 pièces</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="bed-double"></i> 4 chambres</span>
</div>
<p className="mt-4 text-base leading-6 text-[#6F7684]">Maison familiale baignée de lumière avec jardin arboré et vues dégagées.</p>
</div>
</article>
<article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#E9E1D7] transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="relative h-72 overflow-hidden">
<img alt="Appartement à Tassin" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<span className="absolute left-4 top-4 rounded-full bg-[#C5A96A] px-3 py-1 text-xs font-medium text-white">Nouveau</span>
</div>
<div className="p-5">
<p className="text-lg font-medium text-[#C5A96A]">520 000 €</p>
<h3 className="mt-2 text-xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Appartement • Tassin-la-Demi-Lune</h3>
<div className="mt-3 flex flex-wrap gap-4 text-xs text-[#6F7684]">
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="ruler"></i> 98 m²</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="sofa"></i> 4 pièces</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="bed-double"></i> 3 chambres</span>
</div>
<p className="mt-4 text-base leading-6 text-[#6F7684]">Appartement élégant avec terrasse, dans un environnement calme et verdoyant.</p>
</div>
</article>
<article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#E9E1D7] transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="relative h-72 overflow-hidden">
<img alt="Maison à Écully" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<span className="absolute left-4 top-4 rounded-full bg-[#C5A96A] px-3 py-1 text-xs font-medium text-white">Exclusivité</span>
</div>
<div className="p-5">
<p className="text-lg font-medium text-[#C5A96A]">1 240 000 €</p>
<h3 className="mt-2 text-xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Maison de caractère • Écully</h3>
<div className="mt-3 flex flex-wrap gap-4 text-xs text-[#6F7684]">
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="ruler"></i> 210 m²</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="sofa"></i> 7 pièces</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="bed-double"></i> 5 chambres</span>
</div>
<p className="mt-4 text-base leading-6 text-[#6F7684]">Volumes généreux, cachet ancien et superbe jardin à l’abri des regards.</p>
</div>
</article>
<article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#E9E1D7] transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="relative h-72 overflow-hidden">
<img alt="Maison à Francheville" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<span className="absolute left-4 top-4 rounded-full bg-[#C5A96A] px-3 py-1 text-xs font-medium text-white">Nouveau</span>
</div>
<div className="p-5">
<p className="text-lg font-medium text-[#C5A96A]">745 000 €</p>
<h3 className="mt-2 text-xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Maison • Francheville</h3>
<div className="mt-3 flex flex-wrap gap-4 text-xs text-[#6F7684]">
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="ruler"></i> 148 m²</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="sofa"></i> 5 pièces</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="bed-double"></i> 4 chambres</span>
</div>
<p className="mt-4 text-base leading-6 text-[#6F7684]">Une adresse familiale avec jardin, terrasse et belle orientation sud-ouest.</p>
</div>
</article>
<article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#E9E1D7] transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="relative h-72 overflow-hidden">
<img alt="Bien à Craponne" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<span className="absolute left-4 top-4 rounded-full bg-[#C5A96A] px-3 py-1 text-xs font-medium text-white">Exclusivité</span>
</div>
<div className="p-5">
<p className="text-lg font-medium text-[#C5A96A]">680 000 €</p>
<h3 className="mt-2 text-xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Maison • Craponne</h3>
<div className="mt-3 flex flex-wrap gap-4 text-xs text-[#6F7684]">
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="ruler"></i> 132 m²</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="sofa"></i> 5 pièces</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="bed-double"></i> 3 chambres</span>
</div>
<p className="mt-4 text-base leading-6 text-[#6F7684]">Une maison douce à vivre, entre charme contemporain et cadre résidentiel.</p>
</div>
</article>
<article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#E9E1D7] transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="relative h-72 overflow-hidden">
<img alt="Appartement à Oullins" className="h-full w-full object-cover transition duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<span className="absolute left-4 top-4 rounded-full bg-[#C5A96A] px-3 py-1 text-xs font-medium text-white">Nouveau</span>
</div>
<div className="p-5">
<p className="text-lg font-medium text-[#C5A96A]">398 000 €</p>
<h3 className="mt-2 text-xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Appartement • Oullins</h3>
<div className="mt-3 flex flex-wrap gap-4 text-xs text-[#6F7684]">
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="ruler"></i> 86 m²</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="sofa"></i> 4 pièces</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4 text-[#C5A96A]" data-lucide="bed-double"></i> 2 chambres</span>
</div>
<p className="mt-4 text-base leading-6 text-[#6F7684]">Bel appartement traversant, lumineux, proche des commerces et transports.</p>
</div>
</article>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 rounded-full border border-[#C5A96A] px-6 py-3 text-sm font-medium text-[#C5A96A] transition hover:bg-[#C5A96A] hover:text-white" href="#">
            Voir tous nos biens <span>→</span>
</a>
</div>
</div>
</section>
<section className="bg-[#E9E1D7]">
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
<div className="max-w-3xl">
<h2 className="text-3xl font-light uppercase tracking-[0.15em] text-[#1B2A4A] sm:text-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            Vendre avec Hamac
          </h2>
<p className="mt-4 text-base leading-7 text-[#6F7684]">
            Une mise en valeur sur-mesure pour révéler le meilleur de votre bien.
          </p>
</div>
<div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
<a className="relative overflow-hidden rounded-[1.75rem]" href="#">
<img alt="" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-[#1B2A4A]/45"></div>
<div className="absolute inset-x-0 bottom-0 p-6 text-white">
<h3 className="text-xl font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Nos biens en vente</h3>
<p className="mt-2 text-base text-white/85">Découvrir →</p>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem]" href="#">
<img alt="" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-[#1B2A4A]/45"></div>
<div className="absolute inset-x-0 bottom-0 p-6 text-white">
<h3 className="text-xl font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Vendre avec Hamac</h3>
<p className="mt-2 text-base text-white/85">En savoir plus →</p>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem]" href="#">
<img alt="" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-[#1B2A4A]/45"></div>
<div className="absolute inset-x-0 bottom-0 p-6 text-white">
<h3 className="text-xl font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Pré-estimer votre bien</h3>
<p className="mt-2 text-base text-white/85">Commencer →</p>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem]" href="#">
<img alt="" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-[#1B2A4A]/45"></div>
<div className="absolute inset-x-0 bottom-0 p-6 text-white">
<h3 className="text-xl font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Prendre un RDV d'estimation</h3>
<p className="mt-2 text-base text-white/85">Réserver →</p>
</div>
</a>
</div>
</div>
</section>
<section className="bg-[#FAF8F5]">
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
<div className="max-w-3xl">
<h2 className="text-3xl font-light uppercase tracking-[0.15em] text-[#1B2A4A] sm:text-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            L'Ouest Lyonnais, quartier par quartier
          </h2>
</div>
<div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
<a className="relative overflow-hidden rounded-[1.75rem] md:col-span-2 md:row-span-2" href="#">
<img alt="Sainte-Foy-lès-Lyon" className="h-full min-h-96 w-full object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-[#1B2A4A]/20 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-6 text-white">
<h3 className="text-2xl font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Sainte-Foy-lès-Lyon</h3>
<p className="mt-2 text-base text-white/85">Esprit village, vues dégagées et élégance familiale.</p>
<p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C5A96A]">5 450 € / m²</p>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem]" href="#">
<img alt="Tassin" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 text-white">
<h3 className="text-xl font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Tassin</h3>
<p className="mt-1 text-base text-white/85">Une vie pratique dans un cadre résidentiel recherché.</p>
<p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C5A96A]">5 120 € / m²</p>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem]" href="#">
<img alt="Écully" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 text-white">
<h3 className="text-xl font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Écully</h3>
<p className="mt-1 text-base text-white/85">Adresses prestigieuses et grands jardins arborés.</p>
<p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C5A96A]">6 280 € / m²</p>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem]" href="#">
<img alt="Francheville" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 text-white">
<h3 className="text-lg font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Francheville</h3>
<p className="mt-1 text-base text-white/85">Un équilibre rare entre nature et proximité de Lyon.</p>
<p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C5A96A]">4 780 € / m²</p>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem]" href="#">
<img alt="Craponne" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 text-white">
<h3 className="text-lg font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Craponne</h3>
<p className="mt-1 text-base text-white/85">Atmosphère conviviale et maisons ouvertes sur le jardin.</p>
<p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C5A96A]">4 350 € / m²</p>
</div>
</a>
<a className="relative overflow-hidden rounded-[1.75rem] md:col-span-2" href="#">
<img alt="Oullins" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 text-white">
<h3 className="text-xl font-light tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Oullins</h3>
<p className="mt-1 text-base text-white/85">Vie de quartier, mobilité et belles opportunités familiales.</p>
<p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#C5A96A]">4 620 € / m²</p>
</div>
</a>
</div>
</div>
</section>
<section className="bg-[#FAF8F5]">
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
<div className="max-w-3xl">
<h2 className="text-3xl font-light uppercase tracking-[0.15em] text-[#1B2A4A] sm:text-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            Une équipe à votre écoute
          </h2>
</div>
<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
<div className="text-center">
<img alt="Claire Martin" className="mx-auto h-28 w-28 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<h3 className="mt-5 text-2xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Claire Martin</h3>
<p className="mt-2 text-sm font-medium text-[#C5A96A]">Fondatrice</p>
<p className="mt-3 text-base leading-6 text-[#6F7684]">Une approche sensible du métier, tournée vers l’écoute et la justesse.</p>
</div>
<div className="text-center">
<img alt="Thomas Rey" className="mx-auto h-28 w-28 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<h3 className="mt-5 text-2xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Thomas Rey</h3>
<p className="mt-2 text-sm font-medium text-[#C5A96A]">Conseiller transaction</p>
<p className="mt-3 text-base leading-6 text-[#6F7684]">Passionné de lieux de vie, il accompagne chaque projet avec calme.</p>
</div>
<div className="text-center">
<img alt="Élise Bonnet" className="mx-auto h-28 w-28 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<h3 className="mt-5 text-2xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Élise Bonnet</h3>
<p className="mt-2 text-sm font-medium text-[#C5A96A]">Estimation &amp; stratégie</p>
<p className="mt-3 text-base leading-6 text-[#6F7684]">Une lecture fine du marché local pour des avis de valeur sincères.</p>
</div>
<div className="text-center">
<img alt="Julien Faure" className="mx-auto h-28 w-28 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<h3 className="mt-5 text-2xl font-light tracking-tight text-[#1B2A4A]" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Julien Faure</h3>
<p className="mt-2 text-sm font-medium text-[#C5A96A]">Relation clients</p>
<p className="mt-3 text-base leading-6 text-[#6F7684]">Toujours disponible pour rendre chaque étape plus simple et plus sereine.</p>
</div>
</div>
</div>
</section>
<section className="bg-[#F5F0EA]">
<div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
<div className="max-w-3xl">
<h2 className="text-3xl font-light uppercase tracking-[0.15em] text-[#1B2A4A] sm:text-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
            Questions fréquentes
          </h2>
</div>
<div className="mt-10 space-y-4">
<details className="group rounded-[1.5rem] border border-[#E9E1D7] bg-white p-6">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[#1B2A4A]">
              Pourquoi choisir Hamac ?
              <i className="h-5 w-5 text-[#C5A96A]" data-lucide="plus-circle"></i>
</summary>
<p className="mt-4 text-base leading-7 text-[#6F7684]">Pour notre présence locale, notre regard juste sur les biens et notre manière d’accompagner chaque client avec proximité et exigence.</p>
</details>
<details className="group rounded-[1.5rem] border border-[#E9E1D7] bg-white p-6">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[#1B2A4A]">
              Comment se déroule une vente ?
              <i className="h-5 w-5 text-[#C5A96A]" data-lucide="plus-circle"></i>
</summary>
<p className="mt-4 text-base leading-7 text-[#6F7684]">De l’estimation à la signature, nous coordonnons la stratégie de commercialisation, la mise en valeur du bien, les visites et le suivi administratif.</p>
</details>
<details className="group rounded-[1.5rem] border border-[#E9E1D7] bg-white p-6">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[#1B2A4A]">
              Quelles communes couvrez-vous ?
              <i className="h-5 w-5 text-[#C5A96A]" data-lucide="plus-circle"></i>
</summary>
<p className="mt-4 text-base leading-7 text-[#6F7684]">Nous intervenons principalement à Sainte-Foy-lès-Lyon, Tassin, Écully, Francheville, Craponne, Oullins et dans l’ensemble de l’Ouest Lyonnais.</p>
</details>
<details className="group rounded-[1.5rem] border border-[#E9E1D7] bg-white p-6">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[#1B2A4A]">
              Comment fonctionne l'estimation gratuite ?
              <i className="h-5 w-5 text-[#C5A96A]" data-lucide="plus-circle"></i>
</summary>
<p className="mt-4 text-base leading-7 text-[#6F7684]">Après un premier échange, nous analysons votre bien, son emplacement, ses qualités et les ventes récentes comparables pour vous remettre une estimation argumentée.</p>
</details>
<details className="group rounded-[1.5rem] border border-[#E9E1D7] bg-white p-6">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[#1B2A4A]">
              Proposez-vous un accompagnement d’achat ?
              <i className="h-5 w-5 text-[#C5A96A]" data-lucide="plus-circle"></i>
</summary>
<p className="mt-4 text-base leading-7 text-[#6F7684]">Oui, nous accompagnons les acquéreurs dans la définition de leur recherche, la sélection des biens, la négociation et les étapes de sécurisation du projet.</p>
</details>
</div>
</div>
</section>
<section className="bg-[#1B2A4A]">
<div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
<div className="max-w-xl text-white">
<h2 className="text-3xl font-light uppercase tracking-[0.15em] text-white sm:text-4xl" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>
              Vous avez un projet ? Parlons-en.
            </h2>
<p className="mt-5 text-base leading-7 text-white/75">
              Que vous souhaitiez vendre, acheter, faire estimer ou simplement échanger sur votre projet, notre équipe vous répond avec attention et clarté.
            </p>
</div>
<div className="rounded-[2rem] bg-white p-6 sm:p-8">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<input className="rounded-full border border-[#E9E1D7] bg-[#FAF8F5] px-5 py-3 text-sm text-[#1B2A4A] outline-none placeholder:text-[#6F7684]" placeholder="Prénom" type="text"/>
<input className="rounded-full border border-[#E9E1D7] bg-[#FAF8F5] px-5 py-3 text-sm text-[#1B2A4A] outline-none placeholder:text-[#6F7684]" placeholder="Nom" type="text"/>
<input className="rounded-full border border-[#E9E1D7] bg-[#FAF8F5] px-5 py-3 text-sm text-[#1B2A4A] outline-none placeholder:text-[#6F7684]" placeholder="Email" type="email"/>
<input className="rounded-full border border-[#E9E1D7] bg-[#FAF8F5] px-5 py-3 text-sm text-[#1B2A4A] outline-none placeholder:text-[#6F7684]" placeholder="Téléphone" type="text"/>
<input className="rounded-full border border-[#E9E1D7] bg-[#FAF8F5] px-5 py-3 text-sm text-[#1B2A4A] outline-none placeholder:text-[#6F7684]" placeholder="Commune" type="text"/>
<div className="rounded-full border border-[#E9E1D7] bg-[#FAF8F5] px-5 py-3 text-sm text-[#6F7684]">
                Vous souhaitez
              </div>
<textarea className="sm:col-span-2 rounded-[1.5rem] border border-[#E9E1D7] bg-[#FAF8F5] px-5 py-4 text-sm text-[#1B2A4A] outline-none placeholder:text-[#6F7684]" placeholder="Message" rows="5"></textarea>
</div>
<button className="mt-5 rounded-full bg-[#C5A96A] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Envoyer
            </button>
</div>
</div>
</div>
</section>
</main>
<footer className="relative overflow-hidden bg-[#1B2A4A]">
<div className="absolute inset-x-0 top-0 h-16 bg-[#1B2A4A]" style={{borderTopLeftRadius: '100% 100%', borderTopRightRadius: '100% 100%', transform: 'translateY(-50%)'}}></div>
<div className="mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-10">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
<div className="lg:col-span-2">
<div className="text-2xl font-light uppercase tracking-[0.2em] text-[#C5A96A]" style={{fontFamily: '\'Cormorant Infant\', serif'}}>
            HAMAC
          </div>
<p className="mt-5 text-base leading-7 text-white/75">
            19 Boulevard Baron du Marais<br/>
            69110 Sainte-Foy-lès-Lyon
          </p>
<p className="mt-4 text-base leading-7 text-white/75">
            04 78 00 00 00<br/>
            contact@hamac-patrimoine.fr
          </p>
</div>
<div>
<p className="text-xs uppercase tracking-[0.2em] text-white/50">Navigation</p>
<div className="mt-4 space-y-3">
<a className="block text-sm text-white/80 transition hover:text-white" href="#">Acheter</a>
<a className="block text-sm text-white/80 transition hover:text-white" href="#">Vendre</a>
<a className="block text-sm text-white/80 transition hover:text-white" href="#">Estimation</a>
<a className="block text-sm text-white/80 transition hover:text-white" href="#">Quartiers</a>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-[0.2em] text-white/50">Agence</p>
<div className="mt-4 space-y-3">
<a className="block text-sm text-white/80 transition hover:text-white" href="#">L'agence</a>
<a className="block text-sm text-white/80 transition hover:text-white" href="#">Équipe</a>
<a className="block text-sm text-white/80 transition hover:text-white" href="#">Contact</a>
</div>
<div className="mt-6 flex items-center gap-4">
<a className="text-[#C5A96A]" href="#"><i className="h-5 w-5" data-lucide="instagram"></i></a>
<a className="text-[#C5A96A]" href="#"><i className="h-5 w-5" data-lucide="linkedin"></i></a>
<a className="text-[#C5A96A]" href="#"><i className="h-5 w-5" data-lucide="facebook"></i></a>
</div>
</div>
</div>
<div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
        Mentions légales • Politique de confidentialité • Cookies
      </div>
</div>
</footer>


    </>
  );
}
