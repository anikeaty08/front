import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // 3D Tilt Effect
    const card = document.querySelector('.tilt-card');
    const maxTilt = 18; // degrees

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width/2;
      const centerY = rect.height/2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.25s cubic-bezier(.23,1.01,.32,1)';
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute w-[60vw] h-[50vw] left-[-15vw] top-[-10vw]">
<div className="absolute w-[30vw] h-[28vw] rounded-full blur-[60px] opacity-80" style={{background: 'linear-gradient(to right, #ff2222, transparent)', left: '3vw', top: '3vw', rotate: '45deg'}}></div>
<div className="absolute w-[26vw] h-[32vw] rounded-full blur-[44px] opacity-70 bg-[#ff9900]" style={{left: '22vw', top: '5vw', rotate: '-45deg'}}></div>
<div className="absolute w-[21vw] h-[19vw] rounded-full blur-[36px] opacity-60 bg-white mix-blend-overlay" style={{left: '25vw', top: '-4vw'}}></div>
<div className="absolute w-[23vw] h-[22vw] rounded-full blur-[32px] opacity-60" style={{background: 'linear-gradient(to right, #bd0000, transparent)', left: '10vw', top: '22vw'}}></div>
</div>
</div>

<div className="mb-8 text-center">
<span className="inline-block text-sm md:text-base text-neutral-500 font-semibold tracking-wide px-4 py-2 bg-white/80 rounded-lg shadow-sm border border-neutral-200">
      Mouse over to view 3D effect
    </span>
</div>

<div className="perspective">
<div className="tilt-card relative w-[41vmin] h-[56vmin] flex flex-col justify-between rounded-2xl bg-white overflow-hidden z-10 custom-shadow">

<div className="flex justify-between items-start px-5 pt-4 text-[1.05rem] text-neutral-800 z-20 relative bg-transparent">
<div>
<div className="font-bold">Sphere</div>
<div className="text-xs opacity-75">Minimalistic Card</div>
</div>
<div className="font-bold text-base">0008</div>
</div>

<div className="absolute left-6 right-6 top-[5.9vmin] h-px bg-neutral-200/80 z-20"></div>

<div className="flex-1 flex items-center justify-center relative z-10">
<svg className="w-[26vmin] h-[26vmin]" fill="none" viewbox="0 0 200 200">
<circle cx="100" cy="100" r="94" stroke="#18181b" strokeWidth="2"></circle>
<ellipse cx="100" cy="100" fill="none" rx="94" ry="30" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="94" ry="55" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="94" ry="80" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" rx="30" ry="94" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="55" ry="94" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="80" ry="94" stroke="#18181b" strokeWidth="1"></ellipse>
<line opacity="0.5" stroke="#18181b" stroke-dasharray="7 3" strokeWidth="1" x1="100" x2="100" y1="6" y2="194"></line>
<line opacity="0.5" stroke="#18181b" stroke-dasharray="7 3" strokeWidth="1" x1="6" x2="194" y1="100" y2="100"></line>
</svg>
</div>

<div className="absolute left-6 right-6 bottom-[5.9vmin] h-px bg-neutral-200/80 z-20"></div>

<div className="flex justify-between items-end px-5 pb-4 text-[1.05rem] text-neutral-800 z-20 relative bg-transparent">
<div className="text-xs">@mengto</div>
<div></div>
</div>
</div>
</div>


    </>
  );
}
