import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-neutral-900 flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<div className="w-5 h-5 bg-neutral-900 rounded-sm flex items-center justify-center">
<span className="text-white text-[10px] font-bold">A</span>
</div>
                AI OD ZERA
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#dla-kogo">Dla kogo</a>
<a className="hover:text-neutral-900 transition-colors" href="#korzysci">Korzyści</a>
<a className="hover:text-neutral-900 transition-colors" href="#proces">Proces</a>
<a className="hover:text-neutral-900 transition-colors" href="#opinie">Opinie</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-neutral-900/20" href="#dolacz">
                Dołącz teraz
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent blur-[100px] -z-10 rounded-full opacity-60"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Nowa edycja kursu otwarta
            </div>
<h1 className="fade-in-up delay-100 text-5xl md:text-7xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6">
                Opanuj sztuczną inteligencję. <br className="hidden md:block"/>
<span className="text-neutral-400">Bez kodowania.</span>
</h1>
<p className="fade-in-up delay-200 text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Kompletny przewodnik dla osób nietechnicznych. Zautomatyzuj pracę, oszczędzaj godziny i zwiększ zarobki, używając prostych narzędzi AI.
            </p>
<div className="fade-in-up delay-300 flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-neutral-900 text-white rounded-full font-medium text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-neutral-900/10" href="#dolacz">
                    Rozpocznij naukę
                    <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3 bg-white border border-neutral-200 text-neutral-700 rounded-full font-medium text-sm hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2" href="#dla-kogo">
</a></div></div></section>
    </>
  );
}
