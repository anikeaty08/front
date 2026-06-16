import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none z-0"></div>
<main className="w-full max-w-sm flex flex-col items-center z-10">

<div className="mb-14">
<span className="uppercase text-xl font-medium text-white tracking-tighter">starzz</span>
</div>

<div className="text-center mb-10 w-full">
<div className="inline-flex items-center justify-center px-3 py-1.5 mb-6 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-md text-xs text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mr-2 animate-pulse"></span>
                Accès Anticipé
            </div>
<h1 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight mb-3">Inscription Drop</h1>
<p className="text-sm text-zinc-400 max-w-[280px] mx-auto leading-relaxed">
                Inscrivez-vous pour être notifié en exclusivité avant l'ouverture publique.
            </p>
</div>

<form className="w-full flex flex-col gap-5">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-zinc-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block transition-all outline-none placeholder:text-zinc-600 text-sm text-zinc-100 bg-zinc-900/60 w-full border-zinc-800 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-12 backdrop-blur-xl" placeholder="Adresse email" required="" type="email"/>
</div>

<label className="flex items-start gap-3 mt-1 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5 shrink-0">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-900/80 peer-checked:bg-white peer-checked:border-white transition-all shadow-sm"></div>
<iconify-icon className="absolute text-[#09090b] opacity-0 peer-checked:opacity-100 transition-opacity text-sm" icon="solar:check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="leading-normal select-none group-hover:text-zinc-400 transition-colors text-xs text-zinc-500 text-left">J'accepte de recevoir des communications concernant la marque STARZZ et les prochains lancements.</span>
</label>
<button className="w-full mt-3 bg-white text-[#09090b] font-medium text-sm rounded-xl px-5 py-3.5 hover:bg-zinc-200 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#09090b] focus:ring-white shadow-[0_0_20px_rgba(255,255,255,0.05)]" type="submit">
                Valider l'inscription
            </button>
</form>

</main>

    </>
  );
}
