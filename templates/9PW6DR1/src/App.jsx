import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      const container = document.getElementById('meteor-container');
      const meteorCount = 18;
      for (let i = 0; i < meteorCount; i++) {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        const delay = Math.random() * 6;
        const duration = Math.random() * 4 + 3;
        const topPosition = Math.random() * 100;
        const leftPosition = Math.floor(Math.random() * 300) - 300;
        meteor.style.top = `${topPosition}%`;
        meteor.style.left = `${leftPosition}px`;
        meteor.style.animationDelay = `${delay}s`;
        meteor.style.animationDuration = `${duration}s`;
        // Color variety
        if (i % 3 === 0) {
          meteor.style.background = 'rgba(167, 139, 250, 0.8)';
          meteor.style.boxShadow = '0 0 1px rgba(167, 139, 250, 0.15)';
        } else if (i % 4 === 0) {
          meteor.style.background = 'rgba(96, 165, 250, 0.8)';
          meteor.style.boxShadow = '0 0 1px rgba(96, 165, 250, 0.15)';
        }
        container.appendChild(meteor);
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[350px] h-[210px] rounded-2xl shadow-2xl border border-gray-800 bg-black/40 overflow-hidden">

<div className="absolute inset-0 bg-gray-950/90 z-0 pointer-events-none" id="meteor-container"></div>

<div className="relative z-10 h-full w-full flex flex-col justify-between p-6">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="uppercase tracking-widest text-[10px] font-semibold text-gray-300/80 mb-1">Cosmic Bank</span>
<span className="text-xs text-violet-200/70 tracking-wider">Premium</span>
</div>

<div className="w-10 h-7 bg-gradient-to-br from-gray-200/80 to-gray-400/80 rounded-lg flex items-center justify-center relative">
<svg className="w-7 h-5" fill="none" viewbox="0 0 44 28" xmlns="http://www.w3.org/2000/svg">
<rect fill="#d1d5db" height="18" rx="5" width="44" y="5"></rect>
<rect fill="#f3f4f6" height="28" rx="5" width="30" x="7" y="0"></rect>
<rect fill="#e5e7eb" height="12" rx="2" width="16" x="14" y="8"></rect>
<rect fill="#9ca3af" height="4" rx="1" width="6" x="19" y="12"></rect>
</svg>
<div className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-300/50"></div>
</div>
</div>

<div className="mt-5 mb-2 select-none">
<span className="block text-base md:text-lg font-mono tracking-widest text-white drop-shadow">5132  8745  2367  4412</span>
</div>
<div className="flex items-end justify-between">
<div className="flex flex-col gap-2">
<div>
<span className="text-[10px] text-gray-400 tracking-widest uppercase">Card Holder</span>
<div className="text-sm font-semibold text-white tracking-wide mt-0.5">ALEX STRIDER</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<div className="flex flex-col">
<span className="text-[10px] text-gray-400 uppercase tracking-widest">Expires</span>
<span className="text-sm text-white font-semibold tracking-wider mt-0.5">08/28</span>
</div>

<div className="flex items-center gap-1 mt-2">
<span className="inline-block w-5 h-5 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-300 opacity-80"></span>
<span className="inline-block w-5 h-5 rounded-full bg-gradient-to-tl from-orange-700 to-red-400 opacity-80 -ml-2"></span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
