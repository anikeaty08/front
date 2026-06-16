import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      // Initial Load Animation
      window.addEventListener('load', () => {
          document.body.classList.add('loaded');
      });

      // Simple Mobile Menu Toggle
      const menuBtn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('mobile-menu-close');
      const menu = document.getElementById('mobile-menu');

      function toggleMenu() {
          const isOpen = !menu.classList.contains('translate-x-full');
          if (isOpen) {
              menu.classList.add('translate-x-full');
              document.body.style.overflow = '';
          } else {
              menu.classList.remove('translate-x-full');
              document.body.style.overflow = 'hidden';
          }
      }

      if (menuBtn && menu && closeBtn) {
          menuBtn.addEventListener('click', toggleMenu);
          closeBtn.addEventListener('click', toggleMenu);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="z-50 relative transition-all duration-300 bg-[#0A1A2A]/90 w-full border-[#192241]/50 border-b shadow-sm backdrop-blur-sm">
<div className="md:px-12 flex w-full pt-5 pr-6 pb-5 pl-6 items-center justify-between">

<div className="flex items-center">
<a className="flex flex-col items-center group select-none focus:outline-none cursor-pointer hover:opacity-80 transition-opacity" href="index.html">
<div className="inline-flex bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7df08359-2083-43bb-af47-87f9aca233c4_320w.jpg?w=800&amp;q=80)] bg-cover rounded-full items-center justify-center">
</div>
</a>
</div>

<div className="flex items-center gap-8">

<nav className="hidden lg:flex gap-8 items-center">
<a className="text-white hover:text-white transition-colors text-sm font-medium focus:outline-none" href="index.html">
          Chaparral
        </a>
<a className="hover:text-white transition-colors focus:outline-none text-sm font-medium text-[#D3D3B9]/90" href="/transactions">
          Transactions
        </a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden sm:inline-flex hover:bg-white transition-colors duration-300 cursor-pointer decoration-0 text-sm font-medium text-[#0A1A2A] tracking-tight bg-[#D3D3B9] rounded-sm pt-2 pr-5 pb-2 pl-5" href="/contacts">
          Contactez nous
        </a>
<button className="lg:hidden text-[#D3D3B9] hover:text-white transition-colors" id="mobile-menu-btn">
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-0 z-[60] bg-[#0A1A2A] transform translate-x-full transition-transform duration-500 ease-in-out lg:hidden flex flex-col" id="mobile-menu">
<div className="flex items-center justify-between p-6 border-b border-[#D3D3B9]/10">
<div className="text-[#D3D3B9] font-serif text-xl font-medium">Menu</div>
<button className="text-[#D3D3B9] hover:text-white transition-colors" id="mobile-menu-close">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<nav className="flex flex-col p-8 gap-6 items-center justify-center flex-1">
<a className="mobile-link text-3xl font-serif text-white hover:text-white transition-colors" href="index.html">
          Chaparral
        </a>
<a className="mobile-link text-3xl font-serif text-[#D3D3B9] hover:text-white transition-colors" href="transactions.html">
          Transactions
        </a>
<a className="mobile-link mt-8 px-8 py-4 bg-[#D3D3B9] text-[#0A1A2A] font-medium rounded-sm hover:bg-white transition-colors" href="/contacts">
          Contactez nous
        </a>
</nav>
</div>


<main className="h-[calc(100vh-88px)] min-h-[600px] overflow-hidden bg-[#0A1A2A] w-full relative">
<div className="video-wrapper">
<iframe allow="autoplay; fullscreen" frameborder="0" src="https://streamable.com/e/clndd9?autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0&amp;showinfo=0&amp;background=1"></iframe>
<div className="absolute inset-0 bg-[#0A1A2A]/40 mix-blend-multiply pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2A]/90 via-[#0A1A2A]/40 to-transparent pointer-events-none">
</div>
</div>
<div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-12 pointer-events-none">
<div className="max-w-4xl pointer-events-auto mt-8">
<h1 className="serif leading-[1.05] md:text-7xl lg:text-7xl animate-hero text-5xl font-medium text-[#D3D3B9] tracking-tight mb-8 drop-shadow-2xl">La banque d'affaires <span className="text-[#D3D3B9]">des PME</span>, dédiée aux entrepreneurs dirigeants.</h1>
<p className="md:text-xl leading-relaxed animate-hero delay-100 text-lg font-light text-[#D3D3B9]/90 max-w-2xl border-[#D3D3B9]/50 border-l mb-12 pl-6 drop-shadow-md">Chaparral est une boutique de M&amp;A indépendante qui accompagne les entrepreneurs, les dirigeants et les fonds d'investissement dans leurs opérations de haut de bilan Small Cap en Europe
</p>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 right-0 z-0 opacity-[0.05] pointer-events-none overflow-hidden select-none hidden xl:block">
<span className="serif text-[30rem] leading-none tracking-tighter -mr-24 text-[#D3D3B9]">
          CF
        </span>
</div>
</main>

<section className="md:py-32 bg-[#F5F5F3] z-20 border-transparent border-t pt-24 pb-24 relative">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
<div className="flex flex-col justify-center">
<h2 className="serif md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-[#0A1A2A] tracking-tight mb-8">
              La banque d'affaires dédiée aux entrepreneurs, dirigeants et
              actionnaires.
            </h2>
<p className="md:text-xl leading-relaxed text-lg font-light text-[#0A1A2A]/70 border-[#0A1A2A]/20 border-l pl-6">Nos clients sont des dirigeants, entrepreneurs et actionnaires familiaux engagés dans une phase de structuration, de croissance ou d’évolution capitalistique de leur entreprise.</p>
</div>
<div className="relative w-full">
<div className="relative aspect-[3/4] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden group shadow-2xl border border-[#0A1A2A]/5">
<img alt="Paris" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c19d30cc-8d98-487e-81dc-ac81b1324f7b_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2A]/10 to-transparent mix-blend-multiply pointer-events-none"></div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#0A1A2A]/10 to-transparent mb-16"></div>
<div className="flex flex-col gap-12 gap-x-12 gap-y-12">
<div className="w-full">
<h3 className="serif md:text-4xl text-3xl font-medium text-[#0A1A2A] tracking-tight mb-4">
              Un positionnement clair :
              <span className="text-[#0A1A2A]/60">
                rigueur, expertise, engagement.
              </span>
</h3>
</div>
<div className="w-full grid md:grid-cols-3 gap-x-12 gap-y-16">

<div className="group">
<div className="flex gap-4 mb-5 items-center">
</div>
<h4 className="group-hover:text-[#0A1A2A]/70 transition-colors text-xl font-medium text-[#0A1A2A] tracking-tight mb-3">
                Excellence transactionnelle M&amp;A
              </h4>
<p className="leading-relaxed text-base font-light text-[#0A1A2A]/60" style={{}}>Précision d’exécution, maîtrise des processus compétitifs et accès à un réseau international d'acquéreurs corporate industriels.</p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-5">
</div>
<h4 className="group-hover:text-[#0A1A2A]/70 transition-colors text-xl font-medium text-[#0A1A2A] tracking-tight mb-3">
                Ultra expertise en financement
              </h4>
<p className="leading-relaxed text-base font-light text-[#0A1A2A]/60">Accès structuré à un écosystème equity/fonds de capital investissement, dettes et financements structurés, développé et entretenu depuis deux décennies.</p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-5">
</div>
<h4 className="group-hover:text-[#0A1A2A]/70 transition-colors text-xl font-medium text-[#0A1A2A] tracking-tight mb-3">
                Culture de boutique
              </h4>
<p className="leading-relaxed text-base font-light text-[#0A1A2A]/60">Implication senior systématique, indépendance totale et accompagnement sur mesure auprès des dirigeants et actionnaires de PME.</p>
</div>
</div>
</div>
</div>
</section>

<section className="z-30 bg-[#F5F5F3] border-[#0A1A2A]/5 border-t pt-24 pb-24 relative" id="transactions">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 gap-x-6 gap-y-6 justify-between">
<div className="max-w-xl">
<h2 className="serif md:text-5xl lg:text-5xl text-4xl font-medium text-[#0A1A2A] tracking-tight mb-4">
              Transactions récentes
            </h2>
<p className="text-lg font-light text-[#0A1A2A]/60 leading-relaxed">
              Un aperçu de nos dernières interventions auprès d'entreprises
              européennes.
            </p>
</div>
<a className="group inline-flex items-center gap-2 hover:text-[#0A1A2A] transition-colors hover:border-[#0A1A2A] text-sm font-medium text-[#0A1A2A]/70 border-[#0A1A2A]/30 border-b pb-1" href="/transactions">
            Voir toutes les transactions
            <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="w-full">

<div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-[#0A1A2A]/10 text-xs font-mono uppercase tracking-widest text-[#0A1A2A]/40">
<div className="col-span-7">Entreprise</div>
<div className="col-span-5">Secteur</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-4 py-5 border-b border-[#0A1A2A]/10 items-center hover:bg-[#0A1A2A]/[0.03] transition-colors cursor-pointer">

<div className="col-span-7 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-[#0A1A2A] text-white flex items-center justify-center text-sm font-serif font-bold tracking-tight shadow-sm">
                NS
              </div>
<div>
<span className="block text-[#0A1A2A] font-medium text-lg tracking-tight transition-colors">
                  Novacore Solutions
                </span>
</div>
</div>

<div className="col-span-5 flex items-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#0A1A2A]/5 text-[#0A1A2A]/70 border border-[#0A1A2A]/10">
                Software &amp; Technologie
              </span>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-4 py-5 border-b border-[#0A1A2A]/10 items-center hover:bg-[#0A1A2A]/[0.03] transition-colors cursor-pointer">
<div className="col-span-7 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-[#0A1A2A] text-white flex items-center justify-center text-sm font-serif font-bold tracking-tight shadow-sm">
                AE
              </div>
<div className="">
<span className="block text-[#0A1A2A] font-medium text-lg tracking-tight transition-colors">
                  Altenberg Engineering
                </span>
</div>
</div>
<div className="col-span-5 flex items-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#0A1A2A]/5 text-[#0A1A2A]/70 border border-[#0A1A2A]/10">
                Industrie Lourde
              </span>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-4 py-5 border-b border-[#0A1A2A]/10 items-center hover:bg-[#0A1A2A]/[0.03] transition-colors cursor-pointer">
<div className="col-span-7 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-[#0A1A2A] text-white flex items-center justify-center text-sm font-serif font-bold tracking-tight shadow-sm">
                VS
              </div>
<div className="">
<span className="block text-[#0A1A2A] font-medium text-lg tracking-tight transition-colors">
                  Vierra Santé
                </span>
</div>
</div>
<div className="col-span-5 flex items-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#0A1A2A]/5 text-[#0A1A2A]/70 border border-[#0A1A2A]/10">
                Santé &amp; Biotech
              </span>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-4 py-5 border-b border-[#0A1A2A]/10 items-center hover:bg-[#0A1A2A]/[0.03] transition-colors cursor-pointer">
<div className="col-span-7 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-[#0A1A2A] text-white flex items-center justify-center text-sm font-serif font-bold tracking-tight shadow-sm">
                NL
              </div>
<div className="">
<span className="block text-[#0A1A2A] font-medium text-lg tracking-tight transition-colors">
                  Nordic Logistics AB
                </span>
</div>
</div>
<div className="col-span-5 flex items-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#0A1A2A]/5 text-[#0A1A2A]/70 border border-[#0A1A2A]/10">
                Transport &amp; Logistique
              </span>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-4 py-5 border-b border-transparent items-center hover:bg-[#0A1A2A]/[0.03] transition-colors cursor-pointer">
<div className="col-span-7 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-[#0A1A2A] text-white flex items-center justify-center text-sm font-serif font-bold tracking-tight shadow-sm">
                GF
              </div>
<div className="">
<span className="block text-[#0A1A2A] font-medium text-lg tracking-tight transition-colors">
                  GreenLeaf Foods
                </span>
</div>
</div>
<div className="col-span-5 flex items-center">
<span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#0A1A2A]/5 text-[#0A1A2A]/70 border border-[#0A1A2A]/10">
                Agroalimentaire
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 z-30 bg-[#F5F5F3] relative border-t border-[#0A1A2A]/5 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="" className="w-full h-full object-cover opacity-40 mix-blend-multiply grayscale contrast-125" src="https://cdn-s-www.ledauphine.com/images/46EC4947-6CFB-4675-AA80-4701F87F0D03/NW_RAW/photo-adobe-stock.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F3] via-[#F5F5F3]/40 to-[#F5F5F3]/10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F3] via-transparent to-transparent"></div>
</div>
<div className="z-10 max-w-4xl mx-auto px-6 md:px-12 relative w-full flex flex-col items-center text-center">
<div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#0A1A2A]/5 text-[#0A1A2A]/80 border border-[#0A1A2A]/10 uppercase tracking-widest mb-8">
          Contact
        </div>
<h2 className="serif text-5xl md:text-6xl font-medium text-[#0A1A2A] tracking-tight leading-[1.05] mb-12">
          Écrivons la suite
          <span className="text-[#0A1A2A]/50 italic">ensemble.</span>
</h2>
<a className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0A1A2A] text-white text-base font-semibold tracking-wide rounded-sm hover:bg-[#0A1A2A]/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#0A1A2A]/10" href="/contacts">
          Contactez nous
          <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<footer className="bg-[#F5F5F3] z-20 border-[#0A1A2A]/5 border-t pt-8 pb-8 mt-auto">
<div className="md:px-12 text-sm text-[#0A1A2A]/40 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
        © 2025 Chaparral Finance. Tous droits réservés.
      </div>
</footer>


    </>
  );
}
