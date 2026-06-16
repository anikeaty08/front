import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons({ strokeWidth: 1.5 });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: 'url("https://i.ibb.co/Tx5Xxb2P/grad-1.webp?w=800&amp'}}></div>
<main className="w-full max-w-md flex flex-col items-center">

<img alt="Logo da TrendlyAI" className="w-48 mb-10 animate-fade-in-up object-cover" src="https://i.ibb.co/DfMChfL8/Trendly-AI-branco.webp?w=800&amp;q=80"/>

<div className="w-full liquid-glass rounded-3xl p-8 flex flex-col text-center animate-fade-in-up" style={{animationDelay: '100ms'}}>

<div className="flex-grow flex flex-col items-center justify-center gap-6 py-8">

<div className="liquid-glass-icon-bg w-20 h-20 rounded-full flex items-center justify-center animate-fade-in-up" style={{animationDelay: '200ms'}}>

<i className="w-10 h-10 text-white" data-lucide="mail-check"></i>
</div>

<div className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
<h2 className="text-2xl font-semibold tracking-tight mb-2" style={{fontFamily: '\'Geist\', sans-serif'}}>Link Enviado!</h2>
<p className="text-white/70 text-sm max-w-xs leading-relaxed">
                        Verifique sua caixa de entrada (e a pasta de spam) para encontrar o link de redefinição de senha.
                    </p>
</div>


<a className="primary-action-btn w-full max-w-xs text-white text-[15px] font-semibold py-3 rounded-xl shadow-lg text-center mt-4 animate-fade-in-up" href="#" style={{animationDelay: '400ms'}}>
                    Ok, entendi
                </a>
</div>

<div className="flex items-center justify-center gap-2 text-xs text-white/40 animate-fade-in-up" style={{animationDelay: '500ms'}}>
<i className="w-3 h-3" data-lucide="lock"></i>
<span>Protegido por Supabase</span>
</div>
</div>
</main>


    </>
  );
}
