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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Password Screen Elements
            const pwdInput = document.getElementById('password-input');
            const pwdBtn = document.getElementById('pwd-btn');
            const pwdError = document.getElementById('pwd-error');

            // Guess Screen Elements
            const guessInput = document.getElementById('guess-input');
            const guessBtn = document.getElementById('guess-btn');
            const guessError = document.getElementById('guess-error');

            // Card Flipping Logic
            let flippedCards = { 1: false, 2: false, 3: false };
            
            window.flipCard = function(num) {
                if (flippedCards[num]) return; // prevent re-flipping
                
                // Flip the current card
                document.getElementById(`card-inner-${num}`).classList.add('flipped');
                flippedCards[num] = true;

                // Unlock the next card in order
                const nextNum = num + 1;
                if (nextNum <= 3) {
                    setTimeout(() => {
                        const wrap = document.getElementById(`card-wrap-${nextNum}`);
                        const inner = document.getElementById(`card-inner-${nextNum}`);
                        const icon = document.getElementById(`icon-lock-${nextNum}`);
                        
                        wrap.classList.remove('cursor-not-allowed', 'opacity-50');
                        wrap.classList.add('cursor-pointer');
                        inner.classList.remove('pointer-events-none');
                        
                        // Change icon from lock to arrow indicating it's ready
                        icon.setAttribute('icon', 'solar:alt-arrow-right-linear');
                    }, 400); // Wait for half the flip animation
                }
            };

            // Initial Password Submit
            const handlePassword = () => {
                const pwd = pwdInput.value.trim().toLowerCase();
                if (pwd === 'diamondhands') {
                    pwdError.classList.add('hidden');
                    pwdBtn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="24" height="24"></iconify-icon>';
                    setTimeout(() => transitionScreen('screen-1', 'screen-2'), 400);
                } else {
                    pwdError.classList.remove('hidden');
                    pwdInput.classList.add('translate-x-1');
                    setTimeout(() => pwdInput.classList.remove('translate-x-1'), 100);
                }
            };

            // Final Guessing Submit
            const handleGuess = () => {
                const guess = guessInput.value.trim().toLowerCase();
                if (guess === 'mozart') {
                    guessError.classList.add('hidden');
                    guessBtn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="24" height="24"></iconify-icon>';
                    setTimeout(() => transitionToReveal(), 400);
                } else {
                    guessError.classList.remove('hidden');
                    guessError.innerText = "That's not the secret word! Keep trying.";
                    
                    guessInput.value = '';
                    guessInput.focus();
                }
            };

            // Bind Events
            pwdBtn.addEventListener('click', handlePassword);
            pwdInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handlePassword(); });
            
            guessBtn.addEventListener('click', handleGuess);
            guessInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleGuess(); });

            // Standard Screen Transition
            const transitionScreen = (hideId, showId) => {
                const hideEl = document.getElementById(hideId);
                const showEl = document.getElementById(showId);
                
                hideEl.classList.remove('opacity-100', 'translate-y-0');
                hideEl.classList.add('opacity-0', '-translate-y-4');
                
                setTimeout(() => {
                    hideEl.classList.add('hidden');
                    showEl.classList.remove('hidden');
                    void showEl.offsetWidth;
                    showEl.classList.remove('opacity-0', 'translate-y-4');
                    showEl.classList.add('opacity-100', 'translate-y-0');
                }, 700);
            };

            // Epic Final Reveal Transition
            const transitionToReveal = () => {
                const s2 = document.getElementById('screen-2');
                const s3 = document.getElementById('screen-3');
                const bgBase = document.getElementById('bg-base');
                const logo = document.getElementById('logo');
                
                s2.classList.remove('opacity-100', 'translate-y-0');
                s2.classList.add('opacity-0', '-translate-y-4');
                bgBase.classList.add('opacity-0');
                logo.classList.add('opacity-0');
                
                setTimeout(() => {
                    s2.classList.add('hidden');
                    s3.classList.remove('hidden');
                    
                    const revealBg = document.getElementById('reveal-bg');
                    const revealText = document.getElementById('reveal-text');
                    
                    setTimeout(() => {
                        s3.classList.remove('opacity-0');
                        revealBg.classList.add('scale-110');
                        
                        setTimeout(() => {
                            revealText.classList.remove('opacity-0', 'translate-y-8');
                        }, 1000);
                    }, 50);
                }, 700);
            };
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
      

<div className="fixed top-8 left-8 z-50 text-xs font-semibold tracking-tighter text-stone-400 mix-blend-multiply transition-opacity duration-1000" id="logo">
        R E V E A L
    </div>

<div className="fixed inset-0 z-0 bg-gradient-to-br from-[#faf9f8] via-[#fdfbfb] to-[#f4f1f0] transition-opacity duration-1000" id="bg-base">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
</div>

<main className="relative z-10 flex items-center justify-center min-h-[100dvh] px-6 py-12 transition-all duration-700 opacity-100 translate-y-0" id="screen-1">
<div className="w-full max-w-sm p-8 bg-white/80 backdrop-blur-xl shadow-2xl shadow-rose-100/40 rounded-[2rem] border border-white/60">
<div className="flex items-center justify-center mb-8">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-rose-50 text-rose-300 ring-4 ring-white shadow-sm">
<iconify-icon height="28" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
</div>
<h2 className="text-2xl tracking-tight text-center text-stone-800 mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Location Reveal</h2>
<p className="text-sm text-center text-stone-500 mb-8 font-light">Enter the password to continue.</p>
<div className="space-y-4">
<div>
<input className="w-full px-5 py-4 rounded-xl bg-stone-50/50 border border-stone-200 focus:outline-none focus:border-rose-200 focus:ring-4 focus:ring-rose-50 transition-all text-sm placeholder-stone-400 text-stone-800 shadow-sm appearance-none" id="password-input" placeholder="Password" type="password"/>
</div>
<p className="text-rose-400 text-xs text-center hidden transition-opacity" id="pwd-error">Oops, that doesn't seem right. Try again!</p>
<button className="w-full flex justify-center items-center bg-stone-800 text-white rounded-xl py-4 text-sm font-medium hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-200 transition-all active:scale-[0.98]" id="pwd-btn">
                    Continue
                </button>
</div>
</div>
</main>

<main className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-6 py-12 transition-all duration-700 opacity-0 translate-y-4 hidden" id="screen-2">
<div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-xl shadow-2xl shadow-rose-100/40 rounded-[2rem] border border-white/60">
<div className="flex items-center justify-center mb-6">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 text-amber-300 ring-4 ring-white shadow-sm">
<iconify-icon height="28" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
</div>
<h2 className="text-2xl tracking-tight text-center text-stone-800 mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>Guess where we're going</h2>
<p className="text-sm text-center text-stone-500 mb-8 font-light">You will get 3 guesses.</p>
<div className="space-y-3 mb-8 w-full">

<div className="perspective cursor-pointer h-20 w-full group" id="card-wrap-1" onclick="flipCard(1)">
<div className="relative w-full h-full transition-transform duration-700 preserve-3d shadow-sm rounded-xl" id="card-inner-1">

<div className="absolute inset-0 backface-hidden bg-stone-50/80 border border-stone-200 rounded-xl flex items-center justify-between px-5 hover:bg-stone-100/50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-400" height="20" icon="solar:lightbulb-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-700">Clue 1</span>
</div>
<iconify-icon className="text-stone-400" height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>

<div className="absolute inset-0 backface-hidden rotate-y-180 bg-white border border-amber-200 rounded-xl px-5 flex items-center justify-center text-center">
<span className="text-sm text-stone-600 font-light leading-relaxed">We have been to this country together before.</span>
</div>
</div>
</div>

<div className="perspective cursor-not-allowed h-20 w-full opacity-50 transition-all duration-500" id="card-wrap-2" onclick="flipCard(2)">
<div className="relative w-full h-full transition-transform duration-700 preserve-3d shadow-sm rounded-xl pointer-events-none" id="card-inner-2">

<div className="absolute inset-0 backface-hidden bg-stone-50/80 border border-stone-200 rounded-xl flex items-center justify-between px-5 hover:bg-stone-100/50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-400" height="20" icon="solar:lightbulb-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-700">Clue 2</span>
</div>
<iconify-icon className="text-stone-400" height="18" icon="solar:lock-linear" id="icon-lock-2" width="18"></iconify-icon>
</div>

<div className="absolute inset-0 backface-hidden rotate-y-180 bg-white border border-amber-200 rounded-xl px-5 flex items-center justify-center text-center">
<span className="text-sm text-stone-600 font-light leading-relaxed">We have actually been here twice.</span>
</div>
</div>
</div>

<div className="perspective cursor-not-allowed h-20 w-full opacity-50 transition-all duration-500" id="card-wrap-3" onclick="flipCard(3)">
<div className="relative w-full h-full transition-transform duration-700 preserve-3d shadow-sm rounded-xl pointer-events-none" id="card-inner-3">

<div className="absolute inset-0 backface-hidden bg-stone-50/80 border border-stone-200 rounded-xl flex items-center justify-between px-5 hover:bg-stone-100/50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-400" height="20" icon="solar:lightbulb-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-stone-700">Clue 3</span>
</div>
<iconify-icon className="text-stone-400" height="18" icon="solar:lock-linear" id="icon-lock-3" width="18"></iconify-icon>
</div>

<div className="absolute inset-0 backface-hidden rotate-y-180 bg-white border border-amber-200 rounded-xl px-5 flex items-center justify-center text-center">
<span className="text-sm text-stone-600 font-light leading-relaxed">4 of the letters in Vineet are in the name of this city.</span>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<input className="w-full px-5 py-4 rounded-xl bg-stone-50/50 border border-stone-200 focus:outline-none focus:border-amber-200 focus:ring-4 focus:ring-amber-50 transition-all text-sm placeholder-stone-400 text-stone-800 shadow-sm appearance-none" id="guess-input" placeholder="Enter the final word..." type="text"/>
<p className="text-rose-400 text-xs text-center hidden transition-opacity" id="guess-error"></p>
<button className="w-full flex justify-center items-center bg-stone-800 text-white rounded-xl py-4 text-sm font-medium hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-200 transition-all active:scale-[0.98]" id="guess-btn">
                    Submit Answer
                </button>
</div>
</div>
</main>

<main className="fixed inset-0 z-40 flex items-center justify-center hidden opacity-0 transition-opacity duration-[2000ms] ease-in-out" id="screen-3">

<div className="absolute inset-0 bg-cover bg-center transition-transform duration-[30000ms] ease-out scale-100" id="reveal-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?&amp'}}></div>
<div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-transparent"></div>
<div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full h-full">
<div className="opacity-0 translate-y-8 transition-all duration-[2500ms] ease-out flex flex-col items-center" id="reveal-text">
<h1 className="text-7xl md:text-9xl text-white drop-shadow-2xl font-normal tracking-normal" style={{fontFamily: '\'Great Vibes\', cursive', textShadow: '0 10px 40px rgba(0,0,0,0.6)'}}>
                    Vienna
                </h1>
<div className="flex items-center gap-4 mt-6 opacity-80">
<div className="h-px w-12 bg-white/40"></div>
<p className="text-xs md:text-sm tracking-widest text-white/80 uppercase font-light" style={{fontFamily: '\'Playfair Display\', serif'}}>Austria</p>
<div className="h-px w-12 bg-white/40"></div>
</div>
</div>
</div>
</main>


    </>
  );
}
