import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YMVE1CW2Y0');
        


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 px-8 opacity-40 select-none pointer-events-none pb-24">
<div className="bg-black/10 p-4 rounded-full mb-2">
<i className="w-12 h-12 text-slate-900 stroke-[1.5]" data-lucide="shield-alert"></i>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
            Restricted
        </h1>
<p className="text-xl font-medium max-w-xs mx-auto text-slate-800">
            This page cannot be displayed in the current view.
        </p>
</div>


<div className="fixed bottom-12 left-[70%] transform -translate-x-1/2 w-64 z-50 animate-slide-up">

<div className="glass-panel rounded-2xl p-5 flex flex-col items-center text-center relative">

<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-3 shadow-md">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="compass"></i>
</div>

<h3 className="text-base font-semibold text-slate-900 tracking-tight leading-snug">
                Open in Browser
            </h3>
<p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                Tap the icon below to continue securely.
            </p>
</div>


<div className="flex justify-center -mt-[1px] animate-pointer">
<svg fill="none" height="12" viewbox="0 0 24 12" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12L0 0H24L12 12Z" fill="rgba(255, 255, 255, 0.95)"></path>
</svg>
</div>
</div>

<div className="hidden">


</div>


    </>
  );
}
