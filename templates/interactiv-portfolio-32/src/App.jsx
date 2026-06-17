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



        // State Management
        const state = {
            clickCount: 0,
            yesStreak: 0,
            noStreak: 0,
            lastInteraction: Date.now(),
            hesitationTriggered: false,
            stage: 'loop', // loop, climax_q, climax_a, final
        };

        // DOM Elements
        const textContainer = document.getElementById('text-container');
        const mainText = document.getElementById('main-text');
        const controls = document.getElementById('controls');
        const btnYes = document.getElementById('btn-yes');
        const btnNo = document.getElementById('btn-no');
        const finalLayer = document.getElementById('final-layer');
        const app = document.getElementById('app');

        // Content Banks
        const neutralQuestions = [
            "IS IT NECESSARY?",
            "DO YOU KNOW THE COST?",
            "IS THIS YOUR CHOICE?",
            "ARE YOU WATCHING CLOSELY?",
            "IS IT WORTH THE RISK?",
            "DO YOU TRUST THE PROCESS?",
            "IS SILENCE AN ANSWER?"
        ];

        const complianceQuestions = [
            "TOO EASY TO AGREE?",
            "JUST FOLLOWING ORDERS?",
            "NO QUESTIONS ASKED?",
            "BLIND OBEDIENCE?",
            "IS YES YOUR DEFAULT?"
        ];

        const avoidanceQuestions = [
            "RUNNING AWAY?",
            "NOTHING IS GOOD ENOUGH?",
            "ARE YOU AFRAID TO COMMIT?",
            "AVOIDANCE IS A HABIT.",
            "WHY DO YOU RESIST?"
        ];

        const hesitationQuestions = [
            "WHY DO YOU HESITATE?",
            "DOUBTING YOURSELF?",
            "TIME IS RUNNING OUT.",
            "UNCERTAINTY IS EXPENSIVE."
        ];

        // Logic
        function updateText(newText, nextAction = null) {
            // Fade Out
            textContainer.classList.remove('fade-enter-active');
            textContainer.classList.add('fade-exit-active');

            setTimeout(() => {
                // Change Content
                mainText.innerHTML = newText;
                
                // Reset Animation Classes
                textContainer.classList.remove('fade-exit-active');
                textContainer.classList.add('fade-enter');
                
                // Trigger Reflow
                void textContainer.offsetWidth;
                
                // Fade In
                textContainer.classList.remove('fade-enter');
                textContainer.classList.add('fade-enter-active');

                if (nextAction) nextAction();
            }, 500);
        }

        function handleInteraction(choice) {
            const now = Date.now();
            const timeDelta = now - state.lastInteraction;
            state.lastInteraction = now;
            state.clickCount++;
            state.hesitationTriggered = false; // Reset hesitation flag

            // Analyze Patterns
            if (choice === 'yes') {
                state.yesStreak++;
                state.noStreak = 0;
            } else {
                state.noStreak++;
                state.yesStreak = 0;
            }

            // Climax Trigger
            if (state.clickCount >= 8) {
                triggerClimax();
                return;
            }

            // Determine Next Question
            let nextQuestion = "";

            // Hesitation check (logic handled by interval, but we can comment on speed here)
            if (timeDelta > 4000 && state.clickCount > 2) {
                 nextQuestion = hesitationQuestions[Math.floor(Math.random() * hesitationQuestions.length)];
            } 
            else if (state.yesStreak >= 3) {
                nextQuestion = complianceQuestions[Math.min(state.yesStreak - 3, complianceQuestions.length - 1)];
            }
            else if (state.noStreak >= 3) {
                nextQuestion = avoidanceQuestions[Math.min(state.noStreak - 3, avoidanceQuestions.length - 1)];
            }
            else {
                nextQuestion = neutralQuestions[Math.floor(Math.random() * neutralQuestions.length)];
            }

            updateText(nextQuestion);
        }

        function triggerClimax() {
            state.stage = 'climax_q';
            
            // Fade out buttons permanently
            controls.classList.remove('fade-enter-active');
            controls.classList.add('fade-exit-active');
            setTimeout(() => controls.remove(), 500);

            // Climax Question
            updateText("ARE YOU SURE<br>YOU WANT A PERFECT PORTFOLIO?");

            // Auto advance to answer
            setTimeout(() => {
                state.stage = 'climax_a';
                // Use smaller, simpler text for the answer
                // Directly manipulating styles for the shift in tone
                textContainer.classList.remove('fade-enter-active');
                textContainer.classList.add('fade-exit-active');
                
                setTimeout(() => {
                    mainText.className = "text-xl md:text-2xl font-normal text-zinc-400 tracking-normal lowercase";
                    mainText.innerHTML = "because i don't build perfect things.";
                    
                    textContainer.classList.remove('fade-exit-active');
                    textContainer.classList.add('fade-enter-active');
                    
                    // Auto advance to final
                    setTimeout(triggerFinal, 3000);
                }, 500);

            }, 3000);
        }

        function triggerFinal() {
            state.stage = 'final';
            
            // Fade out the answer
            textContainer.classList.remove('fade-enter-active');
            textContainer.classList.add('fade-exit-active');
            setTimeout(() => textContainer.remove(), 500);

            // Reveal Final Layer
            setTimeout(() => {
                finalLayer.classList.remove('hidden', 'opacity-0');
                finalLayer.classList.add('fade-enter-active', 'flex');
            }, 600);
        }

        // Hesitation Watcher
        setInterval(() => {
            if (state.stage !== 'loop') return;
            
            const now = Date.now();
            if (now - state.lastInteraction > 5000 && !state.hesitationTriggered && state.clickCount > 0) {
                state.hesitationTriggered = true;
                updateText("THE SILENCE IS LOUD.");
            }
        }, 1000);

        // Event Listeners
        btnYes.addEventListener('click', () => handleInteraction('yes'));
        btnNo.addEventListener('click', () => handleInteraction('no'));

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (state.stage !== 'loop') return;
            if (e.key === 'y' || e.key === 'Y') handleInteraction('yes');
            if (e.key === 'n' || e.key === 'N') handleInteraction('no');
        });

    
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
      

<main className="relative w-full max-w-4xl px-6 flex flex-col items-center justify-center h-full" id="app">

<div className="mb-12 text-center min-h-[120px] flex items-center justify-center fade-enter-active" id="text-container">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight text-white" id="main-text">
                ARE YOU SURE?
            </h1>
</div>

<div className="flex flex-row gap-6 md:gap-12 fade-enter-active" id="controls">
<button className="group relative px-8 py-3 rounded text-sm font-medium tracking-wide text-zinc-400 border border-zinc-800 hover:text-black hover:bg-white hover:border-transparent transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-white/20" id="btn-yes">
<span className="relative z-10">[ yes ]</span>
</button>
<button className="group relative px-8 py-3 rounded text-sm font-medium tracking-wide text-zinc-400 border border-zinc-800 hover:text-black hover:bg-white hover:border-transparent transition-all duration-300 ease-out focus:outline-none focus:ring-1 focus:ring-white/20" id="btn-no">
<span className="relative z-10">[ no ]</span>
</button>
</div>

<div className="hidden opacity-0 flex-col items-start space-y-8 max-w-md w-full" id="final-layer">
<div className="space-y-6">
<p className="text-sm text-zinc-500 font-medium tracking-wide uppercase">what I build</p>
<ul className="space-y-3 text-lg md:text-xl font-normal text-zinc-300 tracking-tight leading-snug">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                        systems with constraints
                    </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                        things that break
                    </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                        things that matter
                    </li>
</ul>
</div>
<div className="pt-8 border-t border-zinc-900 w-full">
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-zinc-400 transition-colors duration-300 group" href="#">
<span>Lets work</span>
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</main>


    </>
  );
}
