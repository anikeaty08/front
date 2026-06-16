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
      

<div className="mb-10 text-center">
<span className="font-semibold text-lg tracking-tighter text-neutral-900 uppercase">Wbnr.</span>
</div>

<main className="w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-sm ring-1 ring-neutral-200/60 p-6 sm:p-10">

<div className="text-center mb-8">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-5 text-neutral-700">
<iconify-icon height="24" icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">Masterclass: Architektura Skali</h1>
<p className="text-sm text-neutral-500 leading-relaxed">Zdobądź wiedzę na temat budowania skalowalnych systemów. Dołącz do nas na żywo w ten czwartek o 19:00.</p>
</div>

<form action="#" className="space-y-5" method="POST">

<div className="space-y-1.5">
<label className="block text-sm font-medium text-neutral-700" htmlFor="name">Imię i nazwisko</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
<iconify-icon height="18" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-shadow" id="name" name="name" placeholder="Jan Kowalski" required="" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block text-sm font-medium text-neutral-700" htmlFor="email">Adres email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
<iconify-icon height="18" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 bg-white border border-neutral-200 rounded-lg text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-shadow" id="email" name="email" placeholder="jan@example.com" required="" type="email"/>
</div>
</div>

<label className="flex items-start gap-3 cursor-pointer group pt-1">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 shrink-0">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="absolute inset-0 border border-neutral-300 rounded bg-white peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors group-hover:border-neutral-400 peer-checked:group-hover:border-neutral-900"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity z-10" height="14" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 leading-relaxed select-none">
                    Zgadzam się na przetwarzanie moich danych osobowych w celu zapisu na wydarzenie oraz akceptuję <a className="text-neutral-900 hover:text-neutral-600 transition-colors" href="#">regulamin</a>.
                </span>
</label>

<div className="pt-2">
<button className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 text-white rounded-lg py-2.5 px-4 text-sm font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 transition-all active:scale-[0.98]" type="submit">
                    Zarezerwuj darmowe miejsce
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</form>

<div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-center gap-2 text-xs text-neutral-400">
<iconify-icon height="16" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Liczba miejsc jest ograniczona do 500 osób.</span>
</div>
</main>

    </>
  );
}
