import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Animated heading
    const line1 = "All your cards.";
    const line2 = "One place.";
    function animateLine(line, startIndex=0) {
      return line.split("").map((ch, i) => {
        const safeChar = ch === " " ? "&nbsp;" : ch;
        return `<span class="fade-up-blur" style="animation-delay:${(startIndex+i)*60}ms">${safeChar}</span>`;
      }).join("");
    }
    const heading = document.getElementById('animated-heading');
    heading.innerHTML =
      `<span>${animateLine(line1,0)}</span><span>${animateLine(line2, line1.length + 1)}</span>`;
    setTimeout(() => {
      heading.querySelectorAll('.fade-up-blur').forEach(el => el.classList.add('animated'));
    }, 100);

    // Card flip support
    (() => {
      const flipContainer = document.querySelector('.card-flip-container');
      let flipped = false;
      flipContainer.addEventListener('click', function(e) {
        if(window.innerWidth < 768) {
          flipped = !flipped;
          this.classList.toggle('flipped', flipped);
        }
      });
      flipContainer.addEventListener('keydown', function(e) {
        if(e.key === "Escape" && this.classList.contains('flipped')) {
          this.classList.remove('flipped');
        }
      });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[390px] h-[844px] rounded-[52px] bg-neutral-900 shadow-[0_12px_80px_10px_rgba(30,41,59,0.53)] border-[7px] border-neutral-800 overflow-hidden flex flex-col items-center">
<div className="absolute left-1/2 top-5 -translate-x-1/2 w-24 h-7 rounded-xl bg-black/80 border border-white/10 z-30"></div>
<div className="absolute top-28 -left-1 w-2 h-16 bg-neutral-800 rounded-l-full"></div>
<div className="absolute top-44 -right-1 w-1.5 h-10 bg-neutral-800 rounded-r-full"></div>
<div className="absolute top-56 -right-1 w-1.5 h-10 bg-neutral-800 rounded-r-full"></div>
<div className="absolute top-0 w-full px-6 py-4 flex justify-between items-center text-white text-opacity-80 z-10">
<span className="font-semibold text-[16px] tracking-tighter">9:41</span>
<div className="flex items-center gap-2">
<div className="flex gap-px items-end">
<span className="block w-1 h-1 bg-white rounded-full"></span>
<span className="block w-1.5 h-2 bg-white rounded-full"></span>
<span className="block w-2 h-3 bg-white rounded-full"></span>
</div>
<svg className="mx-1" fill="none" height="15" stroke="white" strokeWidth="1.5" width="18"><path d="M2 6a10 10 0 0 1 12 0M5 9a6 6 0 0 1 6 0M8 12h.01"></path></svg>
<div className="flex items-center">
<div className="w-6 h-3 border border-white rounded-[4px] flex items-center">
<div className="h-[10px] ml-0.5 bg-white rounded-[3px]" style={{width: '70%'}}></div>
</div>
<div className="w-0.5 h-2 bg-white rounded ml-[2px]"></div>
</div>
</div>
</div>
<div className="mt-32 mb-10 flex justify-center relative w-full px-6">
<div aria-label="Flip the card for more info" className="card-flip-container w-full aspect-[16/10] max-w-xl" tabindex="0">
<div className="card-flip-inner">
<div className="card-flip-front card w-full h-full rounded-2xl p-6 shadow-2xl relative">
<div className="wave-pattern"></div>
<div className="flex justify-between items-start relative z-10">
<div className="text-white text-xl font-bold tracking-tight">NEXUS</div>
<div className="w-8 h-8">
<svg className="w-full h-full text-white" viewbox="0 0 24 24">
<path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M8.46,14.45L7.1,13.83 c0.28-0.61,0.41-1.28,0.4-1.95c-0.01-0.67-0.17-1.33-0.46-1.92l1.38-0.59c0.36,0.74,0.56,1.54,0.57,2.37 C8.99,12.56,8.81,13.36,8.46,14.45z M11.53,16.01l-1.38,0.59c-0.53-1.04-0.79-2.19-0.77-3.35c0.02-1.16,0.32-2.3,0.88-3.31 l1.38,0.59c-0.46,0.82-0.7,1.73-0.71,2.66C11.01,14.12,11.19,15.05,11.53,16.01z M14.67,17.33l-1.38-0.59 c0.7-1.52,0.71-3.26,0.01-4.8l1.37-0.59c0.43,0.95,0.65,1.98,0.64,3.01C15.3,15.39,15.09,16.42,14.67,17.33z" fill="currentColor"></path>
</svg>
</div>
</div>
<div className="text-white text-xl font-medium tracking-widest mt-10 mb-6 relative z-10">
              4929 8256 7135 0428
            </div>
<div className="flex justify-between items-end relative z-10 mt-auto">
<div>
<div className="chip w-12 h-9 mb-4"></div>
<div className="text-white font-medium">
<div className="text-xs text-gray-300 mb-1 uppercase tracking-wider">Card Holder</div>
                  ALEX MORGAN
                </div>
</div>
<div className="flex flex-col items-end">
<div className="text-white font-medium mb-4">
<div className="text-xs text-gray-300 mb-1 uppercase tracking-wider">Expires</div>
                  09/26
                </div>
<div className="mastercard-logo">
<div className="mastercard-circle mastercard-red"></div>
<div className="mastercard-circle mastercard-yellow"></div>
<div className="mastercard-overlap"></div>
</div>
</div>
</div>
</div>
<div className="card-flip-back">
<div className="w-full px-6 mt-6">
<div className="w-full h-6 bg-black/80 mb-10 rounded"></div>
<div className="w-full flex justify-between items-center mt-4">
<div className="text-neutral-200 text-sm font-semibold">
                  CVV<br/>
<span className="inline-block px-2 py-1 mt-1 bg-neutral-800 text-neutral-100 rounded tracking-widest text-base">721</span>
</div>
<div className="text-neutral-300 text-xs text-right leading-tight" style={{maxWidth: '120px'}}>
                  Need help?<br/>
<span className="font-bold text-white">support@nexus.io</span>
</div>
</div>
<div className="w-full mt-12 flex justify-between items-end">
<span className="text-xs text-neutral-400">CUSTOMER SERVICE</span>
<span className="text-xs text-neutral-400">+1 (800) 555-2200</span>
</div>
</div>
<div className="absolute left-0 right-0 bottom-0 h-12 rounded-b-2xl bg-neutral-900/70"></div>
</div>
</div>
</div>
</div>
<div className="text-center px-8">
<h1 className="text-white text-3xl font-bold tracking-tight mb-3 leading-snug flex flex-col items-center justify-center" id="animated-heading"></h1>
<p className="text-neutral-300 text-base font-medium">
        Effortlessly manage your cards, payments, and transactions — unified in an elegant, secure experience.
      </p>
</div>

<div className="absolute left-0 right-0 flex flex-col items-center gap-6 mb-[36px]" style={{bottom: '58px'}}>

<div className="flex items-center gap-3">
<span className="w-[6px] h-[6px] rounded-full bg-white ring-dot"></span>
<span className="w-[6px] h-[6px] rounded-full bg-white/30"></span>
<span className="w-[6px] h-[6px] rounded-full bg-white/30"></span>
</div>

<div className="getstarted-wrapper w-full">
<button className="getstarted-anim" style={{outline: 'none'}}>
<span className="slide-text">Get Started</span>
<span className="slide-arrow">
<svg fill="none" height="36" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 36 36" width="36">
<path d="M13 18h10M19 12l6 6-6 6"></path>
</svg>
</span>
</button>
</div>
</div>
<div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-white/20"></div>
</div>


    </>
  );
}
