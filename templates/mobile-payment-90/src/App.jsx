import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[414px] h-[896px] max-h-[100dvh] cosmic-bg sm:rounded-[44px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden border-[8px] border-white flex flex-col">

<div className="absolute top-40 -left-12 text-slate-300/40 pointer-events-none floating-icon blur-[1px]" style={{-Rot: '15deg'}}>
<iconify-icon height="140" icon="solar:shield-check-bold-duotone" width="140"></iconify-icon>
</div>
<div className="absolute bottom-64 -right-16 text-purple-200/30 pointer-events-none floating-icon blur-[2px]" style={{-Rot: '-20deg', animationDelay: '-3s'}}>
<iconify-icon height="180" icon="solar:shield-keyhole-bold-duotone" width="180"></iconify-icon>
</div>

<header className="flex justify-between items-center px-6 pt-12 pb-4 z-20 relative">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm border border-slate-200/50 text-slate-600 hover:text-slate-900 hover:bg-white transition-all">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<h1 className="text-sm font-semibold tracking-tighter text-slate-900 uppercase tracking-widest">Koli</h1>
<div className="w-10 h-10"></div> 
</header>

<main className="flex-1 overflow-y-auto pb-40 z-10 relative">

<section className="mx-5 mt-2 p-7 rounded-[28px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center justify-center text-center relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none"></div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-1.5 relative z-10">Mon total à payer</span>
<div className="flex items-baseline justify-center gap-1.5 relative z-10 mb-4">
<h2 className="text-3xl font-medium tracking-tight text-purple-700 leading-none">247,500</h2>
<span className="text-base font-medium text-purple-500">FCFA</span>
</div>

<div className="w-full pt-4 border-t border-slate-100/80 flex flex-col gap-2 relative z-10">
<div className="flex justify-between items-center w-full">
<span className="text-xs text-slate-500">Article</span>
<span className="text-xs font-medium text-slate-700">245,000 FCFA</span>
</div>
<div className="flex justify-between items-center w-full">
<span className="text-xs text-slate-500">Ma part du Fret</span>
<span className="text-xs font-medium text-slate-700">2,500 FCFA</span>
</div>
</div>
</section>

<section className="px-5 mt-8 flex flex-col gap-4">
<h3 className="text-sm font-medium text-slate-500 px-2 mb-1">Moyens de paiement</h3>

<label className="w-full p-5 rounded-[28px] mtn-bg tile-3d flex items-center justify-between cursor-pointer group border border-yellow-300 relative overflow-hidden">
<input checked="" className="peer sr-only" name="payment_method" type="radio"/>
<div className="absolute inset-0 bg-white opacity-0 peer-checked:opacity-10 transition-opacity"></div>
<div className="flex items-center gap-4 relative z-10">

<div className="w-14 h-14 rounded-[18px] bg-white flex items-center justify-center shadow-sm border border-yellow-100">
<span className="font-medium text-base tracking-tighter text-slate-900">MTN</span>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 tracking-tight leading-tight">Payer avec MTN</h4>
<p className="text-xs text-slate-700/80 mt-0.5">Mobile Money</p>
</div>
</div>

<div className="w-6 h-6 rounded-full border-2 border-slate-900/20 peer-checked:border-slate-900 flex items-center justify-center relative z-10 transition-colors bg-white/50">
<div className="w-2.5 h-2.5 rounded-full bg-slate-900 scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
</div>
</label>

<label className="w-full p-5 rounded-[28px] bg-white tile-3d flex items-center justify-between cursor-pointer group border border-slate-100 relative overflow-hidden">
<input className="peer sr-only" name="payment_method" type="radio"/>
<div className="absolute inset-0 bg-slate-50 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-4 relative z-10">

<div className="w-14 h-14 rounded-[18px] bg-[#fff0e5] flex items-center justify-center shadow-sm border border-orange-100">
<span className="font-medium text-base tracking-tighter text-orange-500">ORG</span>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 tracking-tight leading-tight">Payer avec Orange</h4>
<p className="text-xs text-slate-500 mt-0.5">Orange Money</p>
</div>
</div>

<div className="w-6 h-6 rounded-full border-2 border-slate-300 peer-checked:border-orange-500 flex items-center justify-center relative z-10 transition-colors bg-white">
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
</div>
</label>
</section>

<section className="mx-5 mt-8 p-5 rounded-[24px] bg-white/60 backdrop-blur-md border border-white shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-center justify-between relative z-10">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<iconify-icon className="text-purple-500 text-lg" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800 tracking-tight">Utiliser mon Solde Koli</span>
</div>
<span className="text-xs text-slate-500 mt-1 pl-6">Solde: 15,000 FCFA</span>
</div>

<div className="relative inline-block w-11 h-6 align-middle select-none">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 top-0 left-0 opacity-0 w-full h-full" id="wallet-toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer shadow-inner" htmlFor="wallet-toggle"></label>
</input></div>
</section>
</main>

<div className="absolute bottom-0 left-0 right-0 p-5 pt-12 bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent z-30">
<button className="w-full py-4 rounded-[20px] btn-primary-gradient text-white font-medium text-base tracking-tight flex justify-center items-center gap-2.5 active:scale-[0.98] transition-transform">
<span>⚡ Valider ma part &amp; Payer</span>
</button>
<p className="text-xs text-slate-400 text-center mt-4 px-2 leading-relaxed tracking-wide">
                Votre paiement valide votre place dans le groupe. Chacun paie son propre article.
            </p>
</div>
</div>

    </>
  );
}
