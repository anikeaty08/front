import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="relative w-full max-w-[540px] aspect-social bg-black overflow-hidden shadow-2xl ring-1 ring-white/10 flex flex-col">

<div className="absolute inset-0 z-0">
<img alt="Portrait" className="w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>

<div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">

<header className="flex justify-between items-start w-full">
<div className="flex flex-col gap-1">
<span className="text-[10px] font-medium tracking-widest text-white/60 uppercase">
                        Edição Limitada
                    </span>
<span className="text-xs font-semibold tracking-wider text-white uppercase">
                        www.cryptoxbrasil.com.br
                    </span>
</div>
<div className="glass-panel px-3 py-1 rounded-full">
<span className="text-[10px] font-medium tracking-wide text-white/80 uppercase">@cryptoxbrasil</span>
</div>
</header>

<main className="flex flex-col gap-6 mb-8">

<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.15]">
                    Você deixa o <br/>
                    medo te impedir <br/>
<span className="flex items-center gap-3">
                        de crescer?
                        
<span className="inline-flex items-center justify-center h-8 w-16 rounded-full bg-gradient-to-br from-[#F5E6D3] to-[#EBCDA4] shadow-[0_0_15px_rgba(235,205,164,0.2)]">
<i className="text-black w-4 h-4" data-lucide="arrow-down-right"></i>
</span>
</span>
</h1>

<p className="text-sm text-gray-400 font-normal leading-relaxed max-w-xs border-l border-white/20 pl-4">
                    O mercado de criptomoedas não é complicado. 
                    O difícil é não saber por onde começar.
                </p>

<div className="mt-4">
<button className="w-full group relative inline-flex items-center justify-between glass-panel p-2 rounded-full hover:bg-white/5 transition-all duration-300">
<span className="pl-4 text-sm font-medium tracking-tight text-white">
                            Acesse Agora
                        </span>
<span className="bg-[#EBCDA4] text-black rounded-full p-2.5 transition-transform group-hover:rotate-45">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</span>
</button>
</div>
</main>

<footer className="border-t border-white/10 pt-6">
<div className="flex items-center justify-between gap-4">

<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#EBCDA4]" data-lucide="command"></i>
<span className="text-lg font-medium tracking-tighter text-white">cryptox</span>
</div>

<div className="flex items-center gap-3">
<div className="h-px w-8 bg-white/20"></div>
<span className="text-[10px] text-gray-500 font-mono tracking-wider">01 / 04</span>
</div>
</div>
<p className="mt-4 text-[10px] text-gray-600 leading-tight text-justify opacity-60">
                    Cryptox Brasil © 2024. Todos os direitos reservados. O conteúdo deste material é meramente informativo e não constitui recomendação de investimento.
                </p>
</footer>
</div>
</div>


    </>
  );
}
