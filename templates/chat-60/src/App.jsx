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
      
<main className="w-full max-w-[26rem] bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-neutral-200/60 p-7 sm:p-9 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 opacity-50"></div>

<div className="mb-10">
<span className="text-base font-medium tracking-tighter text-neutral-950 uppercase select-none">
                FRM.
            </span>
</div>

<div className="mb-8">
<h1 className="text-2xl font-medium tracking-tight text-neutral-950 mb-2">
                Zostańmy w kontakcie
            </h1>
<p className="text-sm text-neutral-500 leading-relaxed font-light">
                Zostaw swoje dane poniżej. Nasz zespół skontaktuje się z Tobą wkrótce.
            </p>
</div>

<form action="https://hooks.zapier.com/hooks/catch/19140629/unuhq2b/" className="space-y-5" method="POST">

<div className="space-y-1.5 group">
<label className="block text-sm font-medium text-neutral-700 transition-colors group-focus-within:text-neutral-900" htmlFor="imie">
                    Imię
                </label>
<div className="relative flex items-center">
<div className="absolute left-3.5 flex items-center justify-center text-neutral-400 group-focus-within:text-neutral-700 transition-colors">
<iconify-icon height="18" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-2.5 bg-[#fcfcfc] border border-neutral-200/80 rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-100 focus:border-neutral-400 transition-all duration-300" id="imie" name="imie" placeholder="Jan Kowalski" required="" type="text"/>
</div>
</div>

<div className="space-y-1.5 group">
<label className="block text-sm font-medium text-neutral-700 transition-colors group-focus-within:text-neutral-900" htmlFor="email">
                    Adres email
                </label>
<div className="relative flex items-center">
<div className="absolute left-3.5 flex items-center justify-center text-neutral-400 group-focus-within:text-neutral-700 transition-colors">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-2.5 bg-[#fcfcfc] border border-neutral-200/80 rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-100 focus:border-neutral-400 transition-all duration-300" id="email" name="email" placeholder="jan@przyklad.pl" required="" type="email"/>
</div>
</div>

<div className="space-y-1.5 group">
<label className="block text-sm font-medium text-neutral-700 transition-colors group-focus-within:text-neutral-900" htmlFor="telefon">
                    Numer telefonu
                </label>
<div className="relative flex items-center">
<div className="absolute left-3.5 flex items-center justify-center text-neutral-400 group-focus-within:text-neutral-700 transition-colors">
<iconify-icon height="18" icon="solar:phone-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-2.5 bg-[#fcfcfc] border border-neutral-200/80 rounded-xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-100 focus:border-neutral-400 transition-all duration-300" id="telefon" name="telefon" placeholder="+48 000 000 000" required="" type="tel"/>
</div>
</div>

<div className="pt-3">
<button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] focus:ring-offset-2 active:scale-[0.98]" type="submit">
<span>Wyślij zapytanie</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</button>
</div>

<div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-neutral-400 font-light">
<iconify-icon height="14" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
<span>Twoje dane są przesyłane bezpiecznie.</span>
</div>
</form>
</main>

    </>
  );
}
