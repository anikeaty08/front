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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/30 rounded-full blur-[120px] opacity-40"></div>
</div>

<div className="grain-overlay"></div>
<div className="relative z-10 max-w-screen-md mx-auto px-6">

<section className="min-h-screen flex flex-col bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1faadad-1ba7-40d2-89a6-fa9bf0d37857_1600w.png)] bg-cover pt-20 pb-20 items-center justify-center">
<div className="reveal-delay-1 mb-8">
<div className="inline-flex items-center justify-center w-px h-16 bg-gradient-to-b from-transparent via-neutral-700 to-transparent"></div>
</div>
<h1 className="reveal-delay-2 md:text-8xl lg:text-9xl text-glow leading-none text-6xl font-medium text-white tracking-tighter mb-8">
                AURA 808
            </h1>
<p className="reveal-delay-3 md:text-lg text-sm font-light text-gray-50 tracking-wide max-w-sm mr-auto mb-12 ml-auto">Moja hudba je tvoje útočisko.
</p>
<div className="reveal-delay-4">
</div>
</section>

<section className="py-32 flex flex-col items-start border-t border-neutral-900/50" id="new-single">
<div className="w-full mb-12 flex items-center justify-between">
<span className="uppercase text-xs text-gray-50 tracking-widest font-mono">New Single</span>
<span className="uppercase text-xs text-gray-50 tracking-widest font-mono">8 Feb 2026</span>
</div>
<div className="group cursor-pointer w-full">
<h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight leading-tight mb-4 transition-colors duration-500 group-hover:text-neutral-400">
                    Nevoníš po mne,
                    voníš po výhovorke
                </h2>
<p className="text-sm font-light italic text-neutral-500 tracking-wide mb-10"></p>
<button className="flex group/btn cursor-pointer items-center" onclick="window.location.href='https://youtube.com/shorts/kxzF1QSTav4'" role="button">
<div className="flex transition-all duration-300 group-hover/btn:bg-white group-hover/btn:border-white group-hover/btn:text-black text-white w-12 h-12 border-neutral-800 border rounded-full items-center justify-center">
<iconify-icon className="" height="20" icon="solar:alt-arrow-right-outline" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)'}} width="20"></iconify-icon>
</div>
<span className="uppercase group-hover/btn:translate-x-1 transition-transform duration-300 text-xs text-white tracking-widest" onclick="window.location.href='https://youtube.com/shorts/kxzF1QSTav4'" role="button">▶️ New Single</span>
</button>
</div>
</section>


<footer className="text-center pt-24 pb-24">
<div className="inline-flex items-center justify-center mb-8">
<iconify-icon className="text-neutral-600" height="24" icon="solar:infinity-linear" strokeWidth="1.5" style={{color: 'rgb(82, 82, 82)'}} width="24"></iconify-icon>
</div>
<p className="uppercase text-lg text-gray-50 tracking-[0.2em] mb-2">AURA 808</p>
<p className="text-5xl font-light text-gray-50" onclick="window.location.href='https://linktr.ee/Aura808Music'" role="button">▶️ LISTEN TO MY MUSIC
</p>
</footer>
</div>

    </>
  );
}
