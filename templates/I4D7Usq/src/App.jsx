import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.NET({
        el: "#onboard-vanta",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 300,
        minWidth: 300,
        scale: 1,
        scaleMobile: 1,
        color: 0x60a5fa,
        backgroundColor: 0x0a1224,
        points: 10,
        maxDistance: 20,
        spacing: 18,
        showDots: true
      });
      function animateLetters(elementId, text) {
        const container = document.getElementById(elementId);
        container.innerHTML = "";
        [...text].forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.className = "letter-animate";
          span.style.animationDelay = (i * 55) + "ms";
          container.appendChild(span);
        });
      }
      animateLetters('animated-onboard-title', 'Welcome!');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative flex flex-col items-center justify-center min-h-screen w-full">
<div className="iphone-frame">
<div className="notch"><div className="notch-dot"></div></div>
<div className="frame-buttons"></div>
<div className="frame-buttons long"></div>
<div className="frame-buttons right"></div>
<div className="absolute inset-0 z-0 pointer-events-none" id="onboard-vanta"></div>
<main className="relative z-10 w-full flex flex-col items-center pt-24 pb-8 px-4 h-full overflow-y-auto">
<div className="flex flex-col gap-2 items-center">
<h1 className="text-3xl font-bold text-white mb-1 text-center" id="animated-onboard-title"></h1>
<p className="text-gray-300 text-center max-w-xs text-sm">Visualize your secure, real-time infrastructure. Let’s show you how it works!</p>
</div>
<nav className="mt-10 w-full flex flex-col gap-6">
<div className="bg-gray-900/80 border border-gray-800 rounded-xl px-5 py-4 flex gap-4 items-center shadow-sm">
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-base">1</span>
<div>
<div className="text-white font-semibold text-base">Connect your network</div>
<div className="text-gray-400 text-xs mt-0.5">Integrate your accounts and data streams securely.</div>
</div>
</div>
<div className="bg-gray-900/80 border border-gray-800 rounded-xl px-5 py-4 flex gap-4 items-center shadow-sm">
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-base">2</span>
<div>
<div className="text-white font-semibold text-base">View insights</div>
<div className="text-gray-400 text-xs mt-0.5">See your live network status and trends instantly.</div>
</div>
</div>
<div className="bg-gray-900/80 border border-gray-800 rounded-xl px-5 py-4 flex gap-4 items-center shadow-sm">
<span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-bold text-base">3</span>
<div>
<div className="text-white font-semibold text-base">Take action</div>
<div className="text-gray-400 text-xs mt-0.5">Manage alerts, settings, and more smartly.</div>
</div>
</div>
</nav>

<button className="mt-14 w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white text-lg shadow-lg transition active:scale-95">
          Get Started
        </button>
</main>
</div>
</div>


    </>
  );
}
