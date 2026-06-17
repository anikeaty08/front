import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Use the confetti-canvas for tsparticles confetti
        function runConfetti() {
            confetti({
                particleCount: 120,
                spread: 100,
                origin: { y: 0.5 },
                colors: ['#3B82F6', '#818CF8', '#A5B4FC', '#38BDF8', '#F472B6', '#FDE68A', '#FFFFFF', "#6366F1"],
                shapes: ["circle", "square"],
                scalar: 1.1,
                gravity: 0.7,
                ticks: 210,
                zIndex: 40,
                disableForReducedMotion: true
            });
        }
        // Celebrate on load and when pressing the celebrate button
        window.addEventListener('load', () => {
            setTimeout(runConfetti, 350);
        });
        document.getElementById('confettiButton').addEventListener('click', runConfetti);
        // Modal close and CTA actions
        function closeModal() {
            document.querySelector('.max-w-md').classList.add('hidden');
            document.querySelector('.fixed.inset-0').classList.add('hidden');
            document.getElementById('confetti-canvas').classList.add('hidden');
        }
        window.addEventListener('keydown', function(e) {
            if(e.key === 'Escape') closeModal();
        });
        document.getElementById('ctaButton').addEventListener('click', function() {
            window.location.href = "#dashboard";
        });

        // Render confetti on a custom canvas for a more immersive effect
        (function hookConfettiCanvas() {
            const canvas = document.getElementById('confetti-canvas');
            if (window.confetti && canvas) {
                window.confetti = window.confetti.create(canvas, { resize: true, useWorker: true });
            }
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<canvas className="confetti-canvas" id="confetti-canvas"></canvas>

<div className="fixed inset-0 bg-black bg-opacity-60 backdrop z-10"></div>

<div className="w-full max-w-md bg-gradient-to-b from-[#172554]/90 via-[#13151A]/95 to-[#090A0D]/95 border border-[#2D2F36] rounded-xl shadow-2xl overflow-hidden relative z-20 modal-animation ring-glow">

<div className="h-1.5 w-full gradient-bar"></div>

<div className="relative z-10 flex flex-col p-7 pb-6">
<div className="flex justify-between items-start mb-5">
<div className="flex items-center">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-400/40 flex items-center justify-center mr-4 shadow-lg">
<svg className="h-5 w-5 text-blue-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
<h3 className="text-slate-100 text-xl font-semibold tracking-tight">Success! 🎉</h3>
</div>
<button aria-label="Close" className="text-slate-400 hover:text-slate-200 transition-colors" id="closeButton" onclick="closeModal()">
<svg className="h-6 w-6" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
<div className="py-2">
<p className="text-slate-300 text-base leading-relaxed">
                    Your changes have been successfully saved.<br/>
                    All team members will now see the updated workflow.
                </p>
<div className="mt-8 flex flex-col space-y-3">
<button className="w-full px-5 py-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 hover:from-blue-700 hover:to-indigo-500 text-white text-base font-bold rounded-lg shadow-lg transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none" id="ctaButton">
                        Go to Dashboard
                    </button>
<button className="w-full px-4 py-2 bg-[#22243a] hover:bg-[#2a2e4b] text-blue-200 text-sm font-medium rounded-md border border-blue-800/30 transition-colors duration-150" id="confettiButton">
                        Celebrate again 🎊
                    </button>
</div>
<div className="mt-6 pt-4 border-t border-[#28304b]">
<div className="flex items-center justify-between">
<span className="text-slate-500 text-xs">Created just now</span>
<div className="flex items-center text-xs text-slate-500">
<span className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-animation"></span>
                            System message
                        </div>
</div>
</div>
</div>
</div>

<div className="h-1 w-full gradient-bar"></div>
</div>


    </>
  );
}
