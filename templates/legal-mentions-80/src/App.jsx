import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[var(--bg)]"></div>
<div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(circle at 30% 30%, #3DA5E0 0%, rgba(61,165,224,0) 55%)'}}></div>
<div className="absolute top-40 right-0 h-[26rem] w-[26rem] translate-x-1/3 rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(circle at 30% 30%, #2C8CC4 0%, rgba(44,140,196,0) 55%)'}}></div>
</div>

<header className="sticky top-0 z-50">
<div className="border-b border-black/10" style={{background: 'rgba(246,247,249,0.78)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)'}}>
<div className="mx-auto max-w-7xl px-5 sm:px-6">
<div className="flex gap-3 h-16 items-center justify-between">

<button className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 bg-[var(--white)] px-3 py-2 text-[var(--title)] hover:shadow-sm transition" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="sr-only">Menu</span>
</button>

<a className="inline-flex items-center gap-3" href="#">
<img alt="PreviBiz Logo" className="cursor-pointer w-auto h-8 object-contain" onclick="window.location.href='/home'" role="button" src="https://storage.googleapis.com/msgsndr/ufEMw1jWgRKbbTXtCpWs/media/6981f63499f1bf7ef05f42ed.png"/>
</a>

<nav className="hidden md:flex items-center gap-7 text-sm font-normal text-[var(--text)]">
<a className="hover:text-[var(--title)] transition" href="#tarifs">Tarifs</a>
<a className="hover:text-[var(--title)] transition" href="#accompagnement">Accompagnement</a>
<a className="hover:text-[var(--title)] transition" href="#temoignages">Témoignages</a>
<a className="hover:text-[var(--title)] transition" href="#faq">FAQ</a>
<a className="hover:text-[var(--title)] transition" href="/contact">Contact</a>

<a className="inline-flex items-center gap-1.5 border-[var(--blue)]/20 text-[var(--blueDark)] transition hover:bg-[var(--blue)]/10 hover:border-[var(--blue)]/30 text-xs font-medium border rounded-full pt-1 pr-3 pb-1 pl-3" href="/coaching">
<iconify-icon icon="solar:dumbbell-large-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
              Offre Fitness
            </a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center justify-center text-[var(--title)] hover:shadow-sm transition text-sm font-semibold border-black/10 border rounded-xl pt-2 pr-4 pb-2 pl-4" href="https://previbiz.previsionnel.app/login">
              Se connecter
            </a>
<a className="inline-flex items-center justify-center text-[var(--white)] transition text-sm font-semibold rounded-xl pt-2 pr-4 pb-2 pl-4" href="https://buy.stripe.com/8wM9E02qb7pqgcE7sx" style={{background: 'linear-gradient(180deg, #3DA5E0 0%, #2C8CC4 100%)'}}>
              Je commence maintenant
            </a>
</div>

<a className="md:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold text-[var(--white)]" href="#start" style={{background: 'linear-gradient(180deg, #3DA5E0 0%, #2C8CC4 100%)'}}>
            Commencer
          </a>
</div>
</div>

<div className="md:hidden hidden border-t border-black/10 bg-[var(--bg)]" id="mobileMenu">
<div className="mx-auto max-w-7xl px-5 sm:px-6 py-4">
<div className="grid gap-2 text-sm">
<a className="rounded-xl border border-black/10 bg-[var(--white)] px-4 py-3 font-normal text-[var(--title)]" href="#tarifs">Tarifs</a>
<a className="rounded-xl border border-black/10 bg-[var(--white)] px-4 py-3 font-normal text-[var(--title)]" href="#accompagnement">Accompagnement</a>
<a className="rounded-xl border border-black/10 bg-[var(--white)] px-4 py-3 font-normal text-[var(--title)]" href="#temoignages">Témoignages</a>
<a className="rounded-xl border border-black/10 bg-[var(--white)] px-4 py-3 font-normal text-[var(--title)]" href="#faq">FAQ</a>
<a className="rounded-xl border border-black/10 bg-[var(--white)] px-4 py-3 font-normal text-[var(--title)]" href="/contact">Contact</a>
<a className="flex items-center gap-2 rounded-xl border border-[var(--blue)]/20 bg-[var(--blue)]/5 px-4 py-3 font-medium text-[var(--blueDark)]" href="/fitness">
<iconify-icon icon="solar:dumbbell-large-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
               Découvrir l'offre Fitness
            </a>
<div className="grid grid-cols-2 gap-2 pt-2">
<a className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-[var(--white)] px-4 py-3 text-sm font-semibold text-[var(--title)]" href="#login">
                Se connecter
              </a>
<a className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-[var(--white)]" href="#start" style={{background: 'linear-gradient(180deg, #3DA5E0 0%, #2C8CC4 100%)'}}>
                Je commence maintenant
              </a>
</div>
</div>
</div>
</div>
</div>
</header>
<main className="">

<section className="overflow-hidden relative bg-[var(--bg)]">
<div className="sm:px-6 sm:pt-12 lg:pt-16 sm:pb-20 max-w-7xl mr-auto ml-auto pt-10 pr-5 pb-16 pl-5">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[var(--white)] px-3 py-1.5 text-xs font-semibold text-[var(--title)]">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--blue)]"></span>
        Prends le contrôle, pas la calculatrice.
      </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--title)] leading-[1.05]">
        Pilote ton entreprise avec un temps d'avance.
      </h1>
<p className="mt-5 text-base sm:text-lg font-normal text-[var(--text)] leading-relaxed max-w-xl">
        Fatigué des tableurs Excel et des bilans qu'on lit trop tard ? PreviBiz simplifie ta gestion financière et
        t'aide à prendre les bonnes décisions, au bon moment.
      </p>
<div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
<a className="group inline-flex items-center justify-center gap-2 text-[var(--white)] transition text-sm font-semibold rounded-xl pt-3 pr-5 pb-3 pl-5 shadow-sm" href="https://buy.stripe.com/8wM9E02qb7pqgcE7sx" id="start" style={{background: 'linear-gradient(180deg, #3DA5E0 0%, #2C8CC4 100%)'}}>
          Je commence maintenant
          <iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<div className="rounded-xl border border-black/10 bg-[var(--white)] px-5 py-3">
<div className="flex items-baseline justify-between gap-4">
<div className="text-sm font-semibold text-[var(--title)]">49,90€ HT / mois</div>
<div className="text-xs font-normal text-[var(--text)]">Sans engagement</div>
</div>
</div>
</div>

<div className="mt-5 flex items-start">
<a className="group inline-flex items-center gap-2 text-[var(--text)] transition hover:bg-black/5 hover:text-[var(--title)] -ml-1 text-xs font-medium border-transparent border rounded-lg pt-1.5 pr-3 pb-1.5" href="/coaching">
<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--blue)]/10 text-[var(--blue)]">
<iconify-icon icon="solar:dumbbell-large-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
<span className="group-hover:opacity-100 leading-tight opacity-80" onclick="window.location.href='/coaching'" role="button">Clubs &amp; Salles de sport ? <span className="decoration-dotted underline underline-offset-2" onclick="window.location.href='/coaching'" role="button">Voir l'offre dédiée</span></span>
<iconify-icon className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="bg-gray-50 border-black/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex gap-2 text-[var(--title)] gap-x-2 gap-y-2 items-center">
<iconify-icon className="" icon="solar:chart-linear" strokeWidth="1.5" width="18"></iconify-icon>
<div className="text-sm font-semibold">Anticipe</div>
</div>
<div className="text-[var(--text)] text-xs font-normal mt-1">Voir avant les autres.
    Une lecture immédiate de la trajectoire financière.</div>
</div>
<div className="bg-gray-50 border-black/10 border rounded-2xl px-4 py-4">
<div className="flex items-center gap-2 text-[var(--title)]">
<iconify-icon className="" icon="solar:target-linear" strokeWidth="1.5" width="18"></iconify-icon>
<div className="text-sm font-semibold">Pilotage</div>
</div>
<div className="text-[var(--text)] text-xs font-normal mt-1">Choisir en connaissance de cause.
Chaque arbitrage repose sur des chiffres fiables.</div>
</div>
<div className="bg-gray-50 border-black/10 border rounded-2xl px-4 py-4">
<div className="flex gap-2 text-[var(--title)] gap-x-2 gap-y-2 items-center">
<iconify-icon className="" icon="solar:shield-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
<div className="text-sm font-semibold">Maîtrise</div>
</div>
<div className="mt-1 text-xs font-normal text-[var(--text)]">Garder le contrôle.
Tu sais pourquoi tu gagnes ou perds de l’argent.</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="group relative">

<div className="-inset-2 opacity-60 rounded-3xl absolute blur-2xl" style={{background: 'radial-gradient(circle at 25% 20%, #3DA5E0 0%, rgba(61,165,224,0) 55%), radial-gradient(circle at 70% 75%, #2C8CC4 0%, rgba(44,140,196,0) 55%)'}}>
</div>

<div className="overflow-hidden aspect-[1832/1080] w-full border-black/10 border rounded-3xl relative shadow-sm">
<video autoplay="" className="cursor-pointer w-full h-full object-cover" loop="" muted="" onclick="window.location.href='https://storage.googleapis.com/msgsndr/ufEMw1jWgRKbbTXtCpWs/media/69825d3ad048731098da6f49.mp4'" playsinline="" role="button">
<source src="https://storage.googleapis.com/msgsndr/ufEMw1jWgRKbbTXtCpWs/media/6981fc4b6860b8fc151f4f92.mp4" type="video/mp4"/>
      Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
</div>

<div className="mt-4 flex items-center justify-between text-xs font-normal text-[var(--text)]">
<div className="inline-flex items-center gap-2">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="16"></iconify-icon>
      Anticipation
    </div>
<div className="inline-flex items-center gap-2">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="16"></iconify-icon>
      Pilotage
    </div>
<div className="inline-flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
      Maîtrise
    </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 text-white bg-[var(--bg-dark)] py-14">
<div className="mx-auto max-w-7xl px-5 sm:px-6">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Anticipe, décide, avance.
            </h2>
<div className="mt-5 space-y-3 text-base font-normal text-[var(--text-dark-muted)] leading-relaxed">
<p className="">Gérer une entreprise, ce n'est pas attendre le bilan pour comprendre ce qui s'est passé.</p>
<p className="">Avec PreviBiz, tu prévois, tu pilotes et tu décides avant qu'il ne soit trop tard.</p>
<p className="">C'est l'outil de clarté que tout dirigeant devrait avoir.</p>
</div>
<div className="mt-7 rounded-2xl border border-[var(--border-dark)] bg-[var(--card-dark)] p-5">
<div className="flex items-center gap-2 text-sm font-semibold text-white tracking-tight">
<iconify-icon icon="solar:case-round-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Pilotage financier
              </div>
<div className="text-[var(--text-dark-muted)] leading-relaxed text-xs font-normal mt-2">
  Une lecture claire pour décider vite et juste.
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<article className="group relative overflow-hidden rounded-3xl border border-[var(--border-dark)] bg-[var(--card-dark)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--blue)]/30">

<img className="absolute top-0 right-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 opacity-10 grayscale rounded-full object-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg-dark)] border border-[var(--border-dark)] text-white">
<iconify-icon className="" icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="h-2 w-2 rounded-full bg-[var(--blue)] shadow-[0_0_10px_rgba(61,165,224,0.4)]"></div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-white">Crée ton Business Plan simplement</h3>
<p className="text-[var(--text-dark-muted)] leading-relaxed text-sm font-normal mt-2">
                    Monte ton prévisionnel sans Excel ni formules. Idéal pour les demandes BPI, les banques ou les investisseurs.
                  </p>
</div>
</article>
<article className="group rounded-3xl border border-[var(--border-dark)] bg-[var(--card-dark)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--blue)]/30">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg-dark)] border border-[var(--border-dark)] text-white">
<iconify-icon className="" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="h-2 w-2 rounded-full bg-[var(--blue)] shadow-[0_0_10px_rgba(61,165,224,0.4)]"></div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-white">Pilote ton activité en temps réel</h3>
<p className="mt-2 text-sm font-normal text-[var(--text-dark-muted)] leading-relaxed">
                  Suis ton chiffre d'affaires, ta trésorerie et ta rentabilité mois après mois.
                </p>
</article>
<article className="group rounded-3xl border border-[var(--border-dark)] bg-[var(--card-dark)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--blue)]/30 sm:col-span-2 lg:col-span-1">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg-dark)] border border-[var(--border-dark)] text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="h-2 w-2 rounded-full bg-[var(--blue)] shadow-[0_0_10px_rgba(61,165,224,0.4)]"></div>
</div>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-white">Décide avec sérénité</h3>
<p className="mt-2 text-sm font-normal text-[var(--text-dark-muted)] leading-relaxed">
                  Tes données sont sécurisées et sauvegardées sur des serveurs français protégés.
                </p>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14 bg-[var(--white)]">
<div className="mx-auto max-w-7xl px-5 sm:px-6">
<div className="rounded-3xl border border-black/10 bg-[var(--bg)] overflow-hidden shadow-sm">
<div className="grid lg:grid-cols-12">
<div className="lg:col-span-6 sm:p-10 pt-6 pr-6 pb-6 pl-6">
<h2 className="sm:text-4xl text-[var(--title)] text-3xl font-semibold tracking-tight">Avant d’aller plus loin, faisons un point.</h2>
<div className="mt-4 text-base font-normal text-[var(--text)] leading-relaxed">
<p className="">Sans jargon, sans engagement.</p>
<p className="">Un échange court pour savoir si PreviBiz est pertinent pour toi.</p>
</div>
<ul className="mt-6 space-y-3 text-sm font-normal text-[var(--text)]">
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--white)] border border-black/10 text-[var(--title)]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
  Avoir une première lecture structurée de tes chiffres
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--white)] border border-black/10 text-[var(--title)]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
  Comprendre si ton activité est pilotable dans PreviBiz
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--white)] border border-black/10 text-[var(--title)]">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
  Voir si ça vaut la peine d’aller plus loin
</li>
</ul>
</div>
<div className="lg:col-span-6 lg:border-t-0 lg:border-l sm:p-10 border-black/10 border-t pt-6 pr-6 pb-6 pl-6">
<div className="ep-iFrameContainer" id="inline-TLjuMbWGS98HBEaUfctP-div" style={{borderRadius: '35px', display: 'block'}}><div className="ep-wrapper" id="inline-TLjuMbWGS98HBEaUfctP-wrapper" style={{borderRadius: '35px'}}><iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="TLjuMbWGS98HBEaUfctP" data-form-name="Formulaire site previbiz" data-height="490" data-iframe-resizer-initialized="true" data-layout="{'id':'INLINE'}" data-layout-iframe-id="inline-TLjuMbWGS98HBEaUfctP" data-trigger-type="alwaysShow" data-trigger-value="" id="inline-TLjuMbWGS98HBEaUfctP" name="cfde1321-faf3-466e-9917-0897f473d123" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/TLjuMbWGS98HBEaUfctP" style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px', pointerEvents: 'none', overflow: 'auto', display: 'none'}} title="Formulaire site previbiz">
</iframe></div></div>

</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14">
<div className="mx-auto max-w-7xl px-5 sm:px-6">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--title)]">
              Tout-en-un : tes analyses financières simplifiées
            </h2>
<p className="mt-4 text-base font-normal text-[var(--text)] leading-relaxed">
              Avec PreviBiz, tu accèdes à tous les outils essentiels du pilotage d'entreprise dans une interface claire et intuitive.
            </p>
<div className="mt-7 rounded-3xl border border-black/10 bg-[var(--white)] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg)] border border-black/10 text-[var(--title)]">
<iconify-icon icon="solar:calculator-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<div className="">
<div className="text-sm font-semibold text-[var(--title)] tracking-tight">Prévisionnel automatisé</div>
<div className="mt-1 text-xs font-normal text-[var(--text)] leading-relaxed">Crée ton prévisionnel complet sans tableur.</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg)] border border-black/10 text-[var(--title)]">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<div className="">
<div className="text-sm font-semibold text-[var(--title)] tracking-tight">Stress-tests intégrés</div>
<div className="mt-1 text-xs font-normal text-[var(--text)] leading-relaxed">Simule les scénarios optimistes ou pessimistes.</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-3xl border border-black/10 bg-[var(--white)] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg)] border border-black/10 text-[var(--title)]">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<div className="text-sm font-semibold text-[var(--title)] tracking-tight">Tableaux de bord</div>
</div>
<div className="mt-2 text-sm font-normal text-[var(--text)] leading-relaxed">
                  Visualise la performance de ton activité
                </div>
</div>
<div className="rounded-3xl border border-black/10 bg-[var(--white)] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg)] border border-black/10 text-[var(--title)]">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<div className="text-sm font-semibold text-[var(--title)] tracking-tight">Synchro comptable</div>
</div>
<div className="mt-2 text-sm font-normal text-[var(--text)] leading-relaxed">
                  Reste aligné avec ta réalité financière
                </div>
</div>
<div className="rounded-3xl border border-black/10 bg-[var(--white)] p-6 sm:col-span-2">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg)] border border-black/10 text-[var(--title)]">
<iconify-icon icon="solar:export-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<div className="text-sm font-semibold text-[var(--title)] tracking-tight">Exports intelligents</div>
</div>
<div className="mt-2 text-sm font-normal text-[var(--text)] leading-relaxed">
                  PDF, Excel ou Word prêts à partager
                </div>
</div>
<div className="rounded-3xl border border-black/10 bg-[var(--title)] p-6 sm:col-span-2">
<div className="flex items-start gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--white)] text-[var(--title)]">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<div className="">
<div className="text-base font-semibold tracking-tight text-[var(--white)]">PreviBiz transforme les chiffres en décisions.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 overflow-hidden bg-[var(--bg-dark)] text-white pt-14 pb-14 relative" id="tarifs">

<div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[100px] opacity-20" style={{background: 'radial-gradient(circle, #3DA5E0 0%, transparent 70%)'}}></div>
<div className="sm:px-6 z-10 max-w-7xl mx-auto pr-5 pl-5 relative">
<div className="flex flex-col items-center justify-center text-center gap-4 mb-12">
<h2 className="sm:text-5xl text-3xl font-semibold text-white tracking-tight max-w-2xl">Choisis ta formule</h2>
<p className="text-[var(--text-dark-muted)] text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Une tarification simple et transparente pour piloter ton entreprise. Commence maintenant, sans engagement.
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">

<article className="relative rounded-3xl border border-[var(--blue)] bg-[var(--card-dark)] p-8 shadow-2xl shadow-[var(--blue)]/10 overflow-hidden lg:scale-105 z-10 transition-transform duration-300">

<div className="absolute inset-0 bg-gradient-to-b from-[var(--blue)]/10 via-transparent to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div className="">
<div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wide font-bold text-white mb-2" style={{background: 'linear-gradient(180deg, #3DA5E0 0%, #2C8CC4 100%)', boxShadow: '0 2px 10px rgba(61, 165, 224, 0.3)'}}>
<iconify-icon className="" icon="solar:star-bold" width="12"></iconify-icon>
                    Recommandé
                  </div>
<h3 className="text-lg font-semibold text-white tracking-tight">Formule Mensuelle</h3>
</div>
<div className="text-right">
<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">49,90€</div>
<div className="text-sm font-normal text-[var(--text-dark-muted)]">HT / mois</div>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 text-sm font-medium text-white">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--blue)]/20 text-[var(--blue)]">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
                  Sans engagement de durée
                </div>
<div className="flex items-start gap-3 text-sm font-normal text-[var(--text-dark-muted)]">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--border-dark)] text-[var(--text-dark-muted)]">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
                  1 dossier complet inclus
                </div>
<div className="flex items-start gap-3 text-sm font-normal text-[var(--text-dark-muted)]">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--border-dark)] text-[var(--text-dark-muted)]">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
                  Fonctions de pilotage avancées
                </div>
<div className="flex items-start gap-3 text-sm font-normal text-[var(--text-dark-muted)]">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--border-dark)] text-[var(--text-dark-muted)]">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
                  Synchronisation bancaire
                </div>
</div>
<a className="group relative flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-semibold text-white transition hover:brightness-110 overflow-hidden" href="https://buy.stripe.com/8wM9E02qb7pqgcE7sx" style={{background: 'linear-gradient(180deg, #3DA5E0 0%, #2C8CC4 100%)', boxShadow: '0 4px 20px rgba(61, 165, 224, 0.2)'}}>
<span className="">Je choisis cette formule</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</article>

<article className="rounded-3xl border border-[var(--border-dark)] bg-[var(--card-dark)]/40 p-8 hover:bg-[var(--card-dark)] transition duration-300">
<div className="flex items-center justify-between mb-8">
<div className="">
<div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-dark)] bg-[var(--bg-dark)] px-2.5 py-1 text-[10px] uppercase tracking-wide font-semibold text-[var(--text-dark-muted)] mb-2">
                    Long terme
                  </div>
<h3 className="text-lg font-semibold text-[var(--text-dark-muted)] tracking-tight">Formule Annuelle</h3>
</div>
<div className="text-right opacity-80">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">499€</div>
<div className="text-sm font-normal text-[var(--text-dark-muted)]">HT / an</div>
</div>
</div>
<div className="space-y-4 mb-8 opacity-75">
<div className="flex items-start gap-3 text-sm font-normal text-[var(--text-dark-muted)]">
<iconify-icon className="shrink-0 text-[var(--text-dark-muted)]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  2 mois offerts (économisez 100€)
                </div>
<div className="flex items-start gap-3 text-sm font-normal text-[var(--text-dark-muted)]">
<iconify-icon className="shrink-0 text-[var(--text-dark-muted)]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Engagement 12 mois
                </div>
<div className="flex items-start gap-3 text-sm font-normal text-[var(--text-dark-muted)]">
<iconify-icon className="shrink-0 text-[var(--text-dark-muted)]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Paiement unique
                </div>
<div className="flex items-start gap-3 text-sm font-normal text-[var(--text-dark-muted)]">
<iconify-icon className="shrink-0 text-[var(--text-dark-muted)]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                  Mêmes fonctionnalités
                </div>
</div>
<a className="flex items-center justify-center gap-2 border-[var(--border-dark)] transition hover:bg-[var(--border-dark)] text-sm font-semibold text-white bg-transparent w-full border rounded-2xl pt-3 pb-3" href="https://buy.stripe.com/cN203q5CndNO0dG5kq">Je choisis cette formule</a>
</article>
</div>
</div>
</section>

<section className="py-14 sm:py-20 bg-[var(--bg)]" id="accompagnement">
<div className="mx-auto max-w-7xl px-5 sm:px-6">
<div className="rounded-3xl border border-black/10 bg-[var(--white)] shadow-sm overflow-hidden">
<div className="grid lg:grid-cols-12">
<div className="lg:col-span-7 sm:p-10 pt-6 pr-6 pb-6 pl-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--title)]">
                Un expert à tes côtés pour piloter ton entreprise
              </h2>
<div className="mt-4 text-base font-normal text-[var(--text)] leading-relaxed space-y-3">
<p className="">Certaines décisions méritent d'être prises avec un autre regard.</p>
<p className="">L'accompagnement mensuel PreviBiz est fait pour toi si tu veux :</p>
</div>
<ul className="mt-6 space-y-3 text-sm font-normal text-[var(--text)]">
<li className="flex items-start gap-3">
<iconify-icon className="text-[var(--blueDark)]" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                  Comprendre tes chiffres sans jargon
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[var(--blueDark)]" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                  Lire ton bilan et identifier les leviers de rentabilité
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[var(--blueDark)]" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                  Ajuster ton plan d'action avec un expert
                </li>
</ul>
</div>
<div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-black/10 bg-[var(--bg)] p-6 sm:p-10">

<div className="mb-5 overflow-hidden rounded-2xl border border-black/10 bg-[var(--white)] h-40 relative">
<img className="opacity-90 w-full h-full object-contain absolute top-0 right-0 bottom-0 left-0 grayscale" src="https://storage.googleapis.com/msgsndr/ufEMw1jWgRKbbTXtCpWs/media/697f25c91f68d1500ab3e70d.png?w=800&amp;q=80"/>
</div>
<div className="rounded-3xl border border-black/10 bg-[var(--white)] p-6">
<div className="flex items-start justify-between gap-3">
<div className="">
<div className="text-sm font-semibold text-[var(--title)] tracking-tight">Offre :</div>
<div className="mt-2 text-sm font-normal text-[var(--text)] leading-relaxed">2h de visio par mois avec un coach financier</div>
</div>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--title)] text-[var(--white)]">
<iconify-icon icon="solar:videocamera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</span>
</div>
<div className="mt-5 rounded-2xl border border-black/10 bg-[var(--bg)] p-4">
<div className="text-xs font-normal text-[var(--text)]">Prix :</div>
<div className="mt-1 text-3xl font-semibold tracking-tight text-[var(--title)]">350€ HT / mois</div>
<div className="mt-1 text-sm font-normal text-[var(--text)]">Sans engagement</div>
</div>
<a className="inline-flex items-center justify-center gap-2 text-[var(--white)] transition text-sm font-semibold w-full rounded-2xl mt-5 pt-3 pr-5 pb-3 pl-5 shadow-sm" href="https://buy.stripe.com/28E14mdhr5Ol2Gf0H0fQI0g" style={{background: 'linear-gradient(180deg, #3DA5E0 0%, #2C8CC4 100%)'}}>
                  Souscrire à l’accompagnement
                  <iconify-icon className="" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>

<div className="mt-4 border-t border-black/10 pt-4">
<a className="group flex items-center justify-between gap-3 text-xs font-medium text-[var(--text)] transition hover:text-[var(--blue)]" href="/fitness">
<span className="">Gérant de salle de sport ? <span className="block text-[var(--title)] font-semibold" onclick="window.location.href='/coaching'" role="button">Voir l'offre dédiée</span></span>
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--blue)]/10 text-[var(--blue)] transition group-hover:bg-[var(--blue)] group-hover:text-white">
<iconify-icon className="" height="16" icon="solar:dumbbell-large-minimalistic-linear" style={{color: 'rgb(255, 255, 255)'}} width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 text-white pt-14 pb-14 relative bg-[var(--bg-dark)]" id="temoignages">
<div className="sm:px-6 max-w-7xl z-10 mr-auto ml-auto pr-5 pl-5 relative">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center mb-10">
          Ceux qui ont repris le contrôle
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="md:col-span-2 rounded-3xl border border-[var(--border-dark)] bg-[var(--card-dark)] p-8 relative overflow-hidden group hover:border-[var(--blue)]/30 transition duration-300">
<div className="absolute -right-10 -top-10 text-[var(--bg-dark)] opacity-100">
<iconify-icon icon="solar:quote-up-square-linear" strokeWidth="1.5" style={{color: 'rgba(255,255,255,0.03)'}} width="150"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center gap-1 text-[var(--blue)] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="sm:text-2xl leading-tight text-xl font-medium text-white">"Le prévisionnel n'a jamais été aussi clair. Mon banquier a validé le dossier de financement rapidement grâce aux exports PreviBiz."</blockquote>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-[var(--bg-dark)] border border-[var(--border-dark)] overflow-hidden">
<img className="h-full w-full object-cover grayscale" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<div className="text-sm font-semibold text-white">Jean D.</div>
<div className="text-xs font-normal text-[var(--text-dark-muted)]">Fondateur, Secteur BTP</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-[var(--border-dark)] bg-[var(--card-dark)] p-6 flex flex-col justify-between hover:border-[var(--blue)]/30 transition duration-300">
<div className="">
<div className="flex items-center gap-1 text-[var(--blue)] mb-3 opacity-80">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-[var(--text-dark-muted)] leading-relaxed text-sm font-normal">"Depuis le Covid, je me sers de PreviBiz pour ajuster mes prévisions en temps réel. Impossible de revenir en arrière."</p>
</div>
<div className="mt-5 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[var(--bg-dark)] border border-[var(--border-dark)] overflow-hidden">
<img className="h-full w-full object-cover grayscale" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1961&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<div className="text-xs font-semibold text-white">Sarah L.</div>
<div className="text-[10px] font-normal text-[var(--text-dark-muted)]">E-commerce</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-[var(--border-dark)] bg-[var(--card-dark)] p-6 flex flex-col justify-between hover:border-[var(--blue)]/30 transition duration-300">
<div className="">
<div className="flex items-center gap-1 text-[var(--blue)] mb-3 opacity-80">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-sm font-normal text-[var(--text-dark-muted)] leading-relaxed">
                "L'accompagnement m'a permis de comprendre pourquoi je perdais de la marge. Aujourd'hui, on est rentable."
              </p>
</div>
<div className="mt-5 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-[var(--bg-dark)] border border-[var(--border-dark)] overflow-hidden">
<img className="h-full w-full object-cover grayscale" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs font-semibold text-white">Marc P.</div>
<div className="text-[10px] font-normal text-[var(--text-dark-muted)]">Agence Conseil</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl border border-[var(--border-dark)] bg-[var(--card-dark)] p-6 flex items-center justify-between gap-6 hover:border-[var(--blue)]/30 transition duration-300">
<div className="max-w-md">
<div className="flex items-center gap-1 text-[var(--blue)] mb-3">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-base font-medium text-white">
                 "Un outil français, sécurisé et pensé pour les dirigeants qui ne sont pas comptables. C'est exactement ce qu'il manquait."
               </p>
<div className="mt-4 flex items-center gap-3">
<div className="text-xs font-semibold text-white">Thomas V.</div>
<span className="h-1 w-1 rounded-full bg-[var(--text-dark-muted)]"></span>
<div className="text-xs font-normal text-[var(--text-dark-muted)]">Startup SaaS</div>
</div>
</div>
<div className="hidden sm:flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--bg-dark)] text-[var(--blueDark)] border border-[var(--border-dark)]">
<iconify-icon className="" icon="solar:shield-check-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 bg-[var(--bg)]" id="faq">
<div className="mx-auto max-w-7xl px-5 sm:px-6">
<div className="grid md:grid-cols-12 lg:gap-16 gap-x-10 gap-y-10">

<div className="md:col-span-4 lg:col-span-4">
<div className="sticky top-24">
<div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[var(--white)] px-3 py-1.5 text-xs font-semibold text-[var(--title)] mb-5">
<iconify-icon icon="solar:question-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                  Aide
                </div>
<h2 className="text-3xl font-semibold tracking-tight text-[var(--title)]">
                  Questions fréquentes
                </h2>
<p className="mt-4 text-sm text-[var(--text)] leading-relaxed">
                  Tout ce que vous devez savoir avant de commencer.
                </p>
<div className="mt-8 rounded-2xl border border-black/10 bg-[var(--white)] p-5">
<div className="text-sm font-semibold text-[var(--title)]">Une autre question ?</div>
<p className="mt-2 text-xs text-[var(--text)] leading-relaxed mb-4">
                    Notre équipe est disponible pour vous répondre directement.
                  </p>
<a className="inline-flex items-center gap-2 text-[var(--blueDark)] hover:text-[var(--blue)] transition text-xs font-semibold" href="/contact">
                    Contacter le support
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="md:col-span-8 lg:col-span-8 space-y-4">

<details className="group rounded-2xl border border-black/10 bg-[var(--white)] overflow-hidden open:ring-1 open:ring-[var(--blue)] transition-all duration-300">
<summary className="flex cursor-pointer list-none text-[var(--title)] select-none text-base font-medium pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<span className="">Quels sont les tarifs de PréviBiz ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center text-[var(--blue)]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm font-normal text-[var(--text)] leading-relaxed">
                Uniquement 49,90€ HT par mois, aucun engagement !
              </div>
</details>

<details className="group rounded-2xl border border-black/10 bg-[var(--white)] overflow-hidden open:ring-1 open:ring-[var(--blue)] transition-all duration-300">
<summary className="flex cursor-pointer list-none text-[var(--title)] select-none text-base font-medium pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<span className="">A qui s'adresse PréviBiz ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center text-[var(--blue)]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm font-normal text-[var(--text)] leading-relaxed">
                PreviBiz est conçu pour les chefs d'entreprise, les investisseurs et les entrepreneurs qui souhaitent obtenir des réponses claires rapidement. En quelques minutes, vous pouvez évaluer le potentiel d'un projet, que ce soit en termes de rentabilité ou de croissance. PreviBiz rend l'analyse financière et la prise de décision plus simples et plus rapides pour ceux qui cherchent à diriger leur entreprise de manière plus éclairée.
              </div>
</details>

<details className="group rounded-2xl border border-black/10 bg-[var(--white)] overflow-hidden open:ring-1 open:ring-[var(--blue)] transition-all duration-300" open="">
<summary className="flex cursor-pointer items-center justify-between p-5 list-none text-[var(--title)] font-medium text-base select-none">
<span className="">Ai-je besoin de compétences en finance pour utiliser PréviBiz ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center text-[var(--blue)]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm font-normal text-[var(--text)] leading-relaxed">
                Pas du tout ! PreviBiz a été conçu pour être facile à utiliser, que vous soyez novice ou expert en finance. Grâce à son interface conviviale, vous pouvez élaborer des projections financières en toute simplicité, et ce, en seulement quelques clics.
              </div>
</details>

<details className="group rounded-2xl border border-black/10 bg-[var(--white)] overflow-hidden open:ring-1 open:ring-[var(--blue)] transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-5 list-none text-[var(--title)] font-medium text-base select-none">
<span className="">Quels sont les avantages de l'outil de stress-testing ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center text-[var(--blue)]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm font-normal text-[var(--text)] leading-relaxed">
                Le stress-testing de PréviBiz vous donne la possibilité d'examiner diverses situations pour votre entreprise, en créant à la fois des scénarios optimistes et pessimistes. Ce processus vous guide dans la reconnaissance des vulnérabilités et vous permet de prendre des actions préventives pour mettre votre entreprise à l'abri des turbulences économiques inattendues.
              </div>
</details>

<details className="group rounded-2xl border border-black/10 bg-[var(--white)] overflow-hidden open:ring-1 open:ring-[var(--blue)] transition-all duration-300">
<summary className="flex cursor-pointer list-none text-[var(--title)] select-none text-base font-medium pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<span className="">Qui peut accéder à mon tableau de bord et comment le partager ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center text-[var(--blue)]">
<iconify-icon className="" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm font-normal text-[var(--text)] leading-relaxed">
                Avec PreviBiz, il est simple de communiquer vos prévisions financières à d'autres personnes intéressées, comme des collègues, des investisseurs ou des conseillers financiers. Vous pouvez soit créer un rapport complet, soit exporter vos données dans divers formats, y compris PDF, Excel et Word.
              </div>
</details>

<details className="group rounded-2xl border border-black/10 bg-[var(--white)] overflow-hidden open:ring-1 open:ring-[var(--blue)] transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-5 list-none text-[var(--title)] font-medium text-base select-none">
<span className="">Est-ce que PréviBiz offre une assistance en ligne ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center text-[var(--blue)]">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm font-normal text-[var(--text)] leading-relaxed">
                Oui, PréviBiz propose une assistance en ligne pour répondre à toutes vos questions sur l'utilisation de l'outil. Vous pouvez contacter le support par e-mail pour obtenir de l'aide.
              </div>
</details>

<details className="group rounded-2xl border border-black/10 bg-[var(--white)] overflow-hidden open:ring-1 open:ring-[var(--blue)] transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-5 list-none text-[var(--title)] font-medium text-base select-none">
<span className="">Comment PreviBiz assure-t-il la sécurité des données ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 flex items-center text-[var(--blue)]">
<iconify-icon className="" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0 text-sm font-normal text-[var(--text)] leading-relaxed">
                Effectivement, PréviBiz adopte des protocoles de sécurité de pointe pour assurer la protection et la confidentialité de vos données. Les informations sont sauvegardées sur des serveurs hautement sécurisés et bénéficient d'un cryptage durant les transferts.
              </div>
</details>
</div>
</div>
</div>
</section>

<footer className="border-t border-[var(--border-dark)] bg-[var(--bg-dark)] py-12" id="contact">
<div className="mx-auto max-w-7xl px-5 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">

<div className="flex flex-col md:items-start items-center gap-3">
<img alt="PreviBiz Logo" className="h-6 w-auto object-contain opacity-80 grayscale hover:grayscale-0 transition cursor-pointer" onclick="window.location.href='/home'" src="https://storage.googleapis.com/msgsndr/ufEMw1jWgRKbbTXtCpWs/media/6981f63499f1bf7ef05f42ed.png"/>
<p className="text-sm font-normal text-[var(--text-dark-muted)]">© 2024 PreviBiz. Tous droits réservés.</p>
</div>

<nav className="flex flex-wrap justify-center gap-6 text-sm font-normal text-[var(--text-dark-muted)]">
<a className="hover:text-white transition" href="#tarifs">Tarifs</a>
<a className="hover:text-white transition" href="#accompagnement">Accompagnement</a>
<a className="hover:text-white transition" href="/contact">Contact</a>
<a className="hover:text-white transition" href="https://documentation.previsionnel.app/">Documentation</a>
<a className="hover:text-white transition" href="/mentions">Mentions légales</a>
</nav>
</div>
</footer>
</main>

<div className="ep-overlay" id="popup-B55uGJDi3R3mXfrJs22X-overlay" style={{display: 'none'}}><div className="ep-iFrameContainer" id="popup-B55uGJDi3R3mXfrJs22X-div" style={{borderRadius: '25px', height: '800px', width: '650px', background: 'rgb(255, 255, 255)', display: 'none'}}><div className="ep-wrapper" id="popup-B55uGJDi3R3mXfrJs22X-wrapper" style={{borderRadius: '25px'}}><div className="ep-header" id="popup-B55uGJDi3R3mXfrJs22X-header" style={{width: '650px', display: 'flex'}}><div className="ep-close-icon" id="popup-B55uGJDi3R3mXfrJs22X-close-icon"><svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" strokeWidth="2" style={{color: 'rgb(74, 74, 74)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3 5.70875C17.91 5.31875 17.28 5.31875 16.89 5.70875L12 10.5888L7.11 5.69875C6.72 5.30875 6.09 5.30875 5.7 5.69875C5.31 6.08875 5.31 6.71875 5.7 7.10875L10.59 11.9988L5.7 16.8887C5.31 17.2787 5.31 17.9087 5.7 18.2987C6.09 18.6887 6.72 18.6887 7.11 18.2987L12 13.4087L16.89 18.2987C17.28 18.6887 17.91 18.6887 18.3 18.2987C18.69 17.9087 18.69 17.2787 18.3 16.8887L13.41 11.9988L18.3 7.10875C18.68 6.72875 18.68 6.08875 18.3 5.70875Z" fill="#475467"></path>
</svg>
</div></div><div className="ep-minimize-text-container" id="popup-B55uGJDi3R3mXfrJs22X-minimize-text" style={{display: 'none'}}><span className="ep-minimize-text" id="popup-B55uGJDi3R3mXfrJs22X-minimize-text-span" style={{padding: '10px 30px'}} title="Form 1">Form 1</span></div><iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="B55uGJDi3R3mXfrJs22X" data-form-name="Form 1" data-height="912" data-iframe-resizer-initialized="true" data-layout="{'id':'POPUP'}" data-layout-iframe-id="popup-B55uGJDi3R3mXfrJs22X" data-trigger-type="showOnScrolling" data-trigger-value="60" id="popup-B55uGJDi3R3mXfrJs22X" name="8bc2d105-4388-490f-9a6b-37b0644d47d3" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/B55uGJDi3R3mXfrJs22X" style={{width: '650px', height: '100%', border: 'none', borderRadius: '3px', pointerEvents: 'none', overflow: 'auto', display: 'none'}} title="Form 1">
</iframe></div></div></div>


    </>
  );
}
