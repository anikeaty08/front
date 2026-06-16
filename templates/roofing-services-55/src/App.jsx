import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto border-b border-slate-100">
<div className="flex flex-col xl:flex-row gap-16 xl:gap-20 items-start justify-between">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 flex-1 w-full">

<div className="flex flex-col group">
<span className="text-2xl font-semibold text-slate-900 tracking-tight mb-5">1</span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Visite du chantier</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Nous venons sur chantier afin de visualiser les travaux à réaliser.
                    </p>
</div>

<div className="flex flex-col group">
<span className="text-2xl font-semibold text-slate-900 tracking-tight mb-5">2</span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Devis</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Nous vous remettons un devis gratuit dans les jours qui suivent notre visite.
                    </p>
</div>

<div className="flex flex-col group">
<span className="text-2xl font-semibold text-slate-900 tracking-tight mb-5">3</span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Travaux</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Nos équipes qualifiées concrétisent votre projet de toiture.
                    </p>
</div>

<div className="flex flex-col group">
<span className="text-2xl font-semibold text-slate-900 tracking-tight mb-5">4</span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Service après-vente</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Nous répondons à toutes vos questions, même après le chantier.
                    </p>
</div>
</div>

<div className="flex flex-col gap-4 w-full xl:w-72 shrink-0 pt-10 xl:pt-0 border-t xl:border-t-0 border-slate-100 mt-6 xl:mt-0">
<a className="inline-flex items-center justify-center gap-2.5 w-full rounded-xl border border-[#E31E33] bg-white px-6 py-3.5 text-lg font-medium text-[#E31E33] transition-colors hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-[#E31E33] focus:ring-offset-2" href="tel:028996769">
<i className="h-5 w-5" data-lucide="phone" strokeWidth="1.5"></i>
<span>02 899 67 69</span>
</a>
<a className="inline-flex items-center justify-center w-full rounded-xl bg-[#E31E33] px-6 py-3.5 text-lg font-medium text-white shadow-sm transition-all hover:bg-[#C81A2D] focus:outline-none focus:ring-2 focus:ring-[#E31E33] focus:ring-offset-2" href="#devis">
                    Devis gratuit
                </a>
</div>
</div>
</section>


    </>
  );
}
