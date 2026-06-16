import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        geist: ['Geist', 'sans-serif'],
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-md w-full">
<h1 className="font-geist text-[32px] font-light tracking-tight text-center mb-6">Virtual Payment Card</h1>
<p className="text-[16px] text-center mb-8 text-gray-300">Tap the card to flip and see details</p>
<div className="card relative mx-auto w-full max-w-[380px] h-[220px] cursor-pointer" onclick="this.classList.toggle('flipped')">

<div className="card-front rounded-xl glass-card overflow-hidden">
<div className="shimmer"></div>
<div className="p-6 flex flex-col h-full">
<div className="flex justify-between items-start">
<div className="font-geist text-[20px] font-light tracking-tight">NEXUS</div>
<svg className="w-10 h-10 text-white opacity-80" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="12" cy="12" fill="none" r="7" stroke="currentColor" strokeWidth="0.5"></circle>
<circle cx="12" cy="12" fill="none" r="4" stroke="currentColor" strokeWidth="0.5"></circle>
</svg>
</div>
<div className="flex items-center mt-6">
<div className="chip w-10 h-8 rounded-md relative overflow-hidden"></div>
<div className="ml-2 w-6 h-6">
<svg className="w-full h-full" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M8.5 14L7 12.5L10.5 9L12.5 11L16 7.5L17.5 9L12.5 14L10.5 12L8.5 14Z" fill="white" fillOpacity="0.8"></path>
</svg>
</div>
</div>
<div className="mt-5 tracking-widest text-[14px]">
<span>4921</span>
<span className="mx-2">8901</span>
<span className="mx-2">●●●●</span>
<span className="mx-2">7631</span>
</div>
<div className="mt-auto flex justify-between items-end">
<div>
<div className="text-[12px] opacity-70 mb-1">CARD HOLDER</div>
<div className="text-[14px]">JAMIE CHEN</div>
</div>
<div>
<div className="text-[12px] opacity-70 mb-1">EXPIRES</div>
<div className="text-[14px]">05/29</div>
</div>
</div>
</div>
</div>

<div className="card-back rounded-xl glass-card overflow-hidden">
<div className="w-full h-12 bg-black mt-6"></div>
<div className="p-6 flex flex-col h-[calc(100%-24px)]">
<div className="flex justify-end items-center mb-4">
<div className="bg-white/20 p-2 w-16 rounded text-right">
<span className="font-mono text-[14px]">921</span>
</div>
<div className="ml-2 text-[12px] opacity-70">CVV</div>
</div>
<div className="text-[12px] opacity-70 leading-relaxed mt-4">
                        This card is issued by Nexus Financial pursuant to license by Global Card Network.
                    </div>
<div className="mt-auto pb-2 text-[12px] flex justify-between">
<span>Card ID: NX-387542</span>
<span className="text-blue-300">nexus.financial</span>
</div>
</div>
</div>
</div>
<p className="text-[12px] text-center mt-6 text-gray-400">This design uses a glass morphism effect with secure payment technology</p>
</div>

    </>
  );
}
