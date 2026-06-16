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
      

<nav className="fixed top-0 w-full z-50 bg-[#d6cfc0] text-[#2a2a2a] px-6 py-5 flex justify-between items-center border-b border-white/10 shadow-sm">
<button className="p-2 hover:bg-black/5 rounded-md transition-colors duration-200">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
<div className="text-sm font-semibold tracking-[0.25em] uppercase select-none">
            N a s e e b
        </div>
<button className="p-2 hover:bg-black/5 rounded-md transition-colors duration-200">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="user"></i>
</button>
</nav>

<main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover blur-md scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-neutral-900/40"></div>
</div>

<div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-16">

<div className="mb-10 fade-in-up">
<svg className="text-[#c5a059] drop-shadow-2xl" fill="none" height="90" viewbox="0 0 100 100" width="90" xmlns="http://www.w3.org/2000/svg">
<path d="M25 15 V85" stroke="currentColor" strokeLinecap="square" strokeWidth="6"></path>
<path d="M38 15 V85" opacity="0.6" stroke="currentColor" strokeLinecap="square" strokeWidth="2"></path>
<path d="M25 15 L75 85" stroke="currentColor" strokeLinecap="square" strokeWidth="6"></path>
<path d="M75 15 V85" stroke="currentColor" strokeLinecap="square" strokeWidth="6"></path>
</svg>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] fade-in-up delay-100 drop-shadow-sm">
                Vind je levenspartner <br className="hidden md:block"/> met Naseeb
            </h1>

<p className="text-xl md:text-2xl text-neutral-300 font-normal mb-2 max-w-3xl leading-relaxed fade-in-up delay-200">
                Ontvang matches gebaseerd op je voorkeuren conform de Islamitische richtlijnen.
            </p>

<p className="text-lg text-neutral-400 font-medium mb-12 fade-in-up delay-200">
                Voor Nederland én België!
            </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto fade-in-up delay-300">

<a className="group relative inline-flex items-center justify-center h-14 px-8 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white rounded-full transition-all duration-300 border border-white/10 min-w-[200px] shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#">
<i className="w-5 h-5 mr-2.5 stroke-[1.5] text-[#c5a059]" data-lucide="pencil"></i>
<span className="text-lg font-medium">Inschrijven</span>
</a>

<a className="group relative inline-flex items-center justify-center h-14 px-8 bg-[#d6cfc0] hover:bg-[#e6dfd0] text-[#1a1a1a] rounded-full transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#">
<i className="w-5 h-5 mr-2.5 stroke-[1.5]" data-lucide="log-in"></i>
<span className="text-lg font-medium">Inloggen</span>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer animate-bounce">
<i className="w-8 h-8 text-white stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</main>


    </>
  );
}
