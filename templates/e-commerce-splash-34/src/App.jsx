import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="flex-1 flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto relative z-10">

<div className="mb-6 drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] transform transition-transform duration-1000 ease-out scale-100 animate-[pulse_3s_ease-in-out_infinite]">
<img alt="Koli Logo" className="w-48 sm:w-56 h-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<h1 className="text-xl sm:text-2xl font-normal text-[#1A1A2E] tracking-tight text-center mb-12" style={{fontFamily: '\'Poppins\', sans-serif'}}>
            Shop from China. Ship in Groups.
        </h1>

<div className="flex justify-center items-center h-12 w-12 opacity-90">
<i className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF6B00] animate-spin" data-lucide="loader-circle" strokeWidth="1.5"></i>
</div>
</main>

<footer className="w-full pb-10 pt-4 px-6 text-center z-10 relative">
<p className="text-sm sm:text-base font-normal text-slate-500/80 inline-flex items-center justify-center gap-2.5 tracking-wide">
            Securely delivering to Cameroon <span className="text-base sm:text-lg grayscale-[0.2]">🇨🇲</span>
</p>
</footer>


    </>
  );
}
