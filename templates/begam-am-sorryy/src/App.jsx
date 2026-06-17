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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Elements
            const music = document.getElementById('bg-music');
            const beep = document.getElementById('flatline');
            const nextBtn = document.getElementById('next-btn');
            
            const p1 = document.getElementById('page-1');
            const p2 = document.getElementById('page-2');
            const p3 = document.getElementById('page-3');
            const p4 = document.getElementById('page-4');
            const p5 = document.getElementById('page-5');

            // --- Page 1 Initial Animations ---
            
            // Dripping / Melting effect
            document.getElementById('melting-emoji').animate([
                { transform: 'translateY(0px) scaleY(1)', filter: 'blur(0px)' },
                { transform: 'translateY(15px) scaleY(1.15)', filter: 'blur(1px)' },
                { transform: 'translateY(40px) scaleY(1.4)', filter: 'blur(3px)', opacity: 0 }
            ], { 
                duration: 4000, 
                iterations: Infinity,
                easing: 'ease-in'
            });

            // Heart glow dimming
            document.getElementById('breaking-heart').animate([
                { textShadow: '0 0 30px rgba(220, 38, 38, 0.9)' },
                { textShadow: '0 0 2px rgba(220, 38, 38, 0.1)' }
            ], { 
                duration: 4000, 
                fill: 'forwards',
                easing: 'ease-out'
            });


            // --- Flow Logic ---

            nextBtn.addEventListener('click', () => {
                // 1. Audio Fade In
                music.volume = 0;
                music.play().catch(e => console.log("Audio play failed:", e));
                
                let vol = 0;
                const fadeInt = setInterval(() => {
                    if (vol < 0.6) { 
                        vol += 0.02; 
                        music.volume = vol; 
                    } else { 
                        clearInterval(fadeInt); 
                    }
                }, 160); // Reaches 0.6 over ~5 seconds

                // 2. Transition to Page 2
                p1.style.opacity = '0';
                p1.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    p2.style.opacity = '1';
                    startPage2Sequence();
                }, 1000);
            });


            // --- Sequence Functions ---

            function startPage2Sequence() {
                const text = "Main hamesha socha karta tha... humari lambi baatein... humari muskurahatein... Magar ab, ye khamoshi mujhe andar se kha rahi hai.";
                const el = document.getElementById('typewriter-text');
                let i = 0;
                
                // Slight delay before typing starts
                setTimeout(() => {
                    function type() {
                        if (i < text.length) {
                            el.innerHTML += text.charAt(i);
                            i++;
                            // Randomize typing speed slightly for realism
                            const speed = Math.random() * 30 + 50; 
                            setTimeout(type, speed);
                        } else {
                            // Wait after typing finishes, then go to Page 3
                            setTimeout(() => {
                                p2.style.opacity = '0';
                                setTimeout(() => {
                                    p3.style.opacity = '1';
                                    startPage3Sequence();
                                }, 1000);
                            }, 4000);
                        }
                    }
                    type();
                }, 1000);
            }

            function startPage3Sequence() {
                // Background Heartbeat Pulse
                document.getElementById('pulse-bg').animate([
                    { opacity: 0.05, transform: 'scale(0.95)' },
                    { opacity: 0.15, transform: 'scale(1.05)' },
                    { opacity: 0.05, transform: 'scale(0.95)' }
                ], { duration: 1800, iterations: Infinity, easing: 'ease-in-out' });

                // Fade in text
                const textEl = document.getElementById('page-3-text');
                setTimeout(() => {
                    textEl.style.opacity = '1';
                    textEl.style.transform = 'translateY(0)';
                }, 500);

                // Move to Page 4
                setTimeout(() => {
                    p3.style.opacity = '0';
                    setTimeout(() => {
                        p4.style.opacity = '1';
                        startPage4Sequence();
                    }, 1000);
                }, 7000);
            }

            function startPage4Sequence() {
                // Distort/Blur Background
                const overlay = document.getElementById('blur-overlay');
                setTimeout(() => {
                    overlay.style.backdropFilter = 'blur(12px)';
                }, 500);

                // Fade in text
                const textEl = document.getElementById('page-4-text');
                setTimeout(() => {
                    textEl.style.opacity = '1';
                    textEl.style.transform = 'translateY(0)';
                }, 1000);

                // Move to Page 5
                setTimeout(() => {
                    p4.style.opacity = '0';
                    setTimeout(() => {
                        p5.style.opacity = '1';
                        startPage5Sequence();
                    }, 1000);
                }, 7000);
            }

            function startPage5Sequence() {
                // 1. Fade in main text
                setTimeout(() => {
                    document.getElementById('page-5-main').style.opacity = '1';
                }, 500);

                // 2. Sequentially sharpen list items
                const items = document.querySelectorAll('.confession-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.animate([
                            { filter: 'blur(8px)', opacity: 0, transform: 'translateY(10px)' },
                            { filter: 'blur(0px)', opacity: 1, transform: 'translateY(0)' }
                        ], { duration: 2500, fill: 'forwards', easing: 'ease-out' });
                    }, 3000 + (index * 2000));
                });

                // 3. The Final Strike & Audio manipulation
                const finalDelay = 3000 + (items.length * 2000) + 2000;
                
                setTimeout(() => {
                    const finalStrike = document.getElementById('final-strike');
                    finalStrike.animate([
                        { opacity: 0, transform: 'scale(0.95)' },
                        { opacity: 1, transform: 'scale(1)' }
                    ], { duration: 2000, fill: 'forwards', easing: 'ease-out' });

                    // Slowly kill the music
                    let currentPitch = 1.0;
                    let currentVol = music.volume;
                    
                    const killMusicInt = setInterval(() => {
                        if (currentPitch > 0.1) {
                            currentPitch -= 0.02;
                            currentVol -= 0.02;
                            music.playbackRate = Math.max(0.1, currentPitch);
                            music.volume = Math.max(0, currentVol);
                        } else {
                            clearInterval(killMusicInt);
                            music.pause();
                            
                            // Play flatline
                            setTimeout(() => {
                                beep.volume = 0.4;
                                beep.play().catch(e => console.log(e));
                            }, 500);
                        }
                    }, 100); // Gradual drop over ~5 seconds

                }, finalDelay);
            }

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
      

<audio id="bg-music" loop="" preload="auto">

<source src="https://cdn.pixabay.com/download/audio/2022/10/25/audio_24482f71ee.mp3?filename=sad-piano-ambient-126526.mp3" type="audio/mpeg"/>
</audio>
<audio id="flatline" preload="auto">
<source src="https://cdn.pixabay.com/download/audio/2021/08/09/audio_820c4c4ea3.mp3?filename=flatline-1-100288.mp3" type="audio/mpeg"/>
</audio>

<section className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 z-50" id="page-1">
<div className="flex flex-col items-center gap-12 mb-16 relative">

<div className="relative h-24 w-24 flex items-center justify-center">
<span className="text-6xl md:text-7xl absolute" id="melting-emoji" style={{filter: 'drop-shadow(0px 10px 10px rgba(0,0,0,0.5))'}}>🫠</span>
</div>

<div className="relative mt-8">
<span className="text-4xl md:text-5xl" id="breaking-heart" style={{textShadow: '0 0 30px rgba(220, 38, 38, 0.9)'}}>💔</span>
</div>
</div>
<button className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-800 bg-transparent text-sm font-medium tracking-tight text-neutral-400 hover:bg-neutral-900 hover:text-neutral-100 hover:border-neutral-700 transition-all duration-500" id="next-btn">
<span>Next</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</section>

<section className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-1000 px-6 md:px-12 z-40" id="page-2">
<div className="max-w-3xl w-full text-center">
<p className="text-lg md:text-2xl font-medium tracking-tight text-neutral-300 leading-relaxed min-h-[120px]" id="typewriter-text"></p>
</div>
</section>

<section className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-1000 px-6 md:px-12 z-30 overflow-hidden" id="page-3">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0" id="pulse-bg">
<div className="w-full h-full max-w-2xl max-h-2xl rounded-full" style={{background: 'radial-gradient(circle, rgba(220,38,38,0.03) 0%, rgba(5,5,5,0) 70%)'}}></div>
</div>
<div className="max-w-2xl w-full text-center relative z-10">
<p className="text-base md:text-xl font-medium tracking-tight text-neutral-400 leading-relaxed opacity-0 transform translate-y-4 transition-all duration-1000" id="page-3-text">
                "Woh pehli baat... woh 100 days ka milestone... sab kitna haseen tha na? Shayad main hi un yaadon ko sambhal nahi saka."
            </p>
</div>
</section>

<section className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-1000 px-6 md:px-12 z-20" id="page-4">

<div className="absolute inset-0 backdrop-blur-none bg-[#050505]/50 transition-all duration-3000" id="blur-overlay"></div>
<div className="max-w-2xl w-full text-center relative z-10">
<p className="text-base md:text-xl font-medium tracking-tight text-neutral-400 leading-relaxed opacity-0 transform translate-y-4 transition-all duration-1000" id="page-4-text">
                "Lekin ab main sirf ek tension hoon. Ek aisi mushkil jo tumhare sukoon mein rukawat hai. Main koshish karta hoon... par har baar haar jata hoon."
            </p>
</div>
</section>

<section className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-1000 px-6 md:px-12 z-10" id="page-5">
<div className="max-w-3xl w-full text-center flex flex-col items-center gap-12">
<p className="text-base md:text-xl font-medium tracking-tight text-neutral-400 leading-relaxed opacity-0 transition-opacity duration-1000" id="page-5-main">
                "Tum kisi aur ki wajah se khush ho... ya shayad mere bina zyada sukoon mein ho. Main tumhare liye wo nahi ban saka jo tum deserve karti ho."
            </p>
<ul className="flex flex-col gap-4 text-sm md:text-base text-neutral-500 font-medium tracking-tight">
<li className="confession-item opacity-0" style={{filter: 'blur(8px)'}}>Mera hadd se zyada sochna</li>
<li className="confession-item opacity-0" style={{filter: 'blur(8px)'}}>Meri nakamiyan</li>
<li className="confession-item opacity-0" style={{filter: 'blur(8px)'}}>Meri wajah se tumhari aankhon mein aansu</li>
</ul>
<div className="h-12 flex items-center justify-center mt-8">
<p className="text-xl md:text-3xl font-semibold tracking-tight opacity-0" id="final-strike" style={{color: '#7f1d1d', textShadow: '0 2px 10px rgba(127, 29, 29, 0.2)'}}>
                    "Sorry begam, I failed as a lover."
                </p>
</div>
</div>
</section>


    </>
  );
}
