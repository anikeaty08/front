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



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'primary': ['Inter', 'sans-serif'],
                        'mono': ['Space Mono', 'monospace']
                    },
                    colors: {
                        'sage': {
                            50: '#f8f7f5',
                            100: '#e6e1d7',
                            200: '#c8b4a0',
                            300: '#a89080',
                            400: '#8a7060',
                            500: '#6b5545',
                            600: '#544237',
                            700: '#3c4237',
                            800: '#2a2e26',
                            900: '#1a1d18'
                        }
                    }
                }
            }
        }
    


        // Word by word animation
        function animateWords() {
            const words = document.querySelectorAll('.word');
            
            words.forEach(word => {
                const delay = parseInt(word.getAttribute('data-delay')) || 0;
                
                setTimeout(() => {
                    word.style.animation = 'word-appear 0.8s ease-out forwards';
                }, delay);
            });
        }

        // Mouse interaction
        let mouseX = 0, mouseY = 0;
        const gradient = document.getElementById('mouse-gradient');
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            gradient.style.left = (mouseX - 192) + 'px';
            gradient.style.top = (mouseY - 192) + 'px';
            gradient.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            gradient.style.opacity = '0';
        });

        // Word hover effects
        document.querySelectorAll('.word').forEach(word => {
            word.addEventListener('mouseenter', () => {
                word.style.textShadow = '0 0 20px rgba(200, 180, 160, 0.5)';
            });
            
            word.addEventListener('mouseleave', () => {
                word.style.textShadow = 'none';
            });
        });

        // Click ripple effect
        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.style.position = 'fixed';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            ripple.style.width = '4px';
            ripple.style.height = '4px';
            ripple.style.background = 'rgba(200, 180, 160, 0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'pulse-glow 1s ease-out forwards';
            document.body.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 1000);
        });

        // Initialize animations
        window.addEventListener('load', () => {
            setTimeout(animateWords, 500);
        });

        // Scroll trigger for additional animations
        let scrolled = false;
        window.addEventListener('scroll', () => {
            if (!scrolled) {
                scrolled = true;
                document.querySelectorAll('.floating-element').forEach((el, index) => {
                    setTimeout(() => {
                        el.style.animationPlayState = 'running';
                    }, index * 200);
                });
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
      

<svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="60" id="grid" patternunits="userSpaceOnUse" width="60">
<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(200,180,160,0.08)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>

<line className="grid-line" style={{animationDelay: `0.5s`}} x1="0" x2="100%" y1="20%" y2="20%"></line>
<line className="grid-line" style={{animationDelay: `1s`}} x1="0" x2="100%" y1="80%" y2="80%"></line>
<line className="grid-line" style={{animationDelay: `1.5s`}} x1="20%" x2="20%" y1="0" y2="100%"></line>
<line className="grid-line" style={{animationDelay: `2s`}} x1="80%" x2="80%" y1="0" y2="100%"></line>

<line className="grid-line" style={{animationDelay: `2.5s`, opacity: `0.05`}} x1="50%" x2="50%" y1="0" y2="100%"></line>
<line className="grid-line" style={{animationDelay: `3s`, opacity: `0.05`}} x1="0" x2="100%" y1="50%" y2="50%"></line>

<circle className="detail-dot" cx="20%" cy="20%" r="2" style={{animationDelay: `3s`}}></circle>
<circle className="detail-dot" cx="80%" cy="20%" r="2" style={{animationDelay: `3.2s`}}></circle>
<circle className="detail-dot" cx="20%" cy="80%" r="2" style={{animationDelay: `3.4s`}}></circle>
<circle className="detail-dot" cx="80%" cy="80%" r="2" style={{animationDelay: `3.6s`}}></circle>
<circle className="detail-dot" cx="50%" cy="50%" r="1.5" style={{animationDelay: `4s`}}></circle>
</svg>

<div className="corner-element top-8 left-8" style={{animationDelay: `4s`}}>
<div className="absolute top-0 left-0 w-2 h-2 bg-sage-200 opacity-30"></div>
</div>
<div className="corner-element top-8 right-8" style={{animationDelay: `4.2s`}}>
<div className="absolute top-0 right-0 w-2 h-2 bg-sage-200 opacity-30"></div>
</div>
<div className="corner-element bottom-8 left-8" style={{animationDelay: `4.4s`}}>
<div className="absolute bottom-0 left-0 w-2 h-2 bg-sage-200 opacity-30"></div>
</div>
<div className="corner-element bottom-8 right-8" style={{animationDelay: `4.6s`}}>
<div className="absolute bottom-0 right-0 w-2 h-2 bg-sage-200 opacity-30"></div>
</div>

<div className="floating-element" style={{top: `25%`, left: `15%`, animationDelay: `5s`}}></div>
<div className="floating-element" style={{top: `60%`, left: `85%`, animationDelay: `5.5s`}}></div>
<div className="floating-element" style={{top: `40%`, left: `10%`, animationDelay: `6s`}}></div>
<div className="floating-element" style={{top: `75%`, left: `90%`, animationDelay: `6.5s`}}></div>

<div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-8 py-12 md:px-16 md:py-20">

<div className="text-center">
<h2 className="text-xs md:text-sm font-mono font-light text-sage-200 uppercase tracking-[0.2em] opacity-80">
<span className="word" data-delay="0">Embrace</span>
<span className="word" data-delay="200">the</span>
<span className="word" data-delay="400">present</span>
<span className="word" data-delay="600">moment.</span>
</h2>
<div className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent opacity-30"></div>
</div>

<div className="text-center max-w-5xl mx-auto">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-sage-50 text-decoration">
<div className="mb-4 md:mb-6">
<span className="word" data-delay="800">Breathe</span>
<span className="word" data-delay="950">deeply,</span>
<span className="word" data-delay="1100">think</span>
<span className="word" data-delay="1250">clearly.</span>
</div>
<div className="text-2xl md:text-3xl lg:text-4xl font-thin text-sage-200 leading-relaxed">
<span className="word" data-delay="1600">In</span>
<span className="word" data-delay="1750">quiet</span>
<span className="word" data-delay="1900">moments</span>
<span className="word" data-delay="2050">we</span>
<span className="word" data-delay="2200">discover</span>
<span className="word" data-delay="2350">our</span>
<span className="word" data-delay="2500">inner</span>
<span className="word" data-delay="2650">wisdom</span>
<span className="word" data-delay="2800">and</span>
<span className="word" data-delay="2950">find</span>
<span className="word" data-delay="3100">balance.</span>
</div>
</h1>

<div className="absolute -left-8 top-1/2 w-4 h-px bg-sage-200 opacity-20" style={{animation: `word-appear 1s ease-out forwards`, animationDelay: `3.5s`}}></div>
<div className="absolute -right-8 top-1/2 w-4 h-px bg-sage-200 opacity-20" style={{animation: `word-appear 1s ease-out forwards`, animationDelay: `3.7s`}}></div>
</div>

<div className="text-center">
<div className="mb-4 w-16 h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent opacity-30"></div>
<h2 className="text-xs md:text-sm font-mono font-light text-sage-200 uppercase tracking-[0.2em] opacity-80">
<span className="word" data-delay="3500">Cultivate</span>
<span className="word" data-delay="3650">mindful</span>
<span className="word" data-delay="3800">awareness</span>
<span className="word" data-delay="3950">daily.</span>
</h2>

<div className="mt-6 flex justify-center space-x-4 opacity-0" style={{animation: `word-appear 1s ease-out forwards`, animationDelay: `4.5s`}}>
<div className="w-1 h-1 bg-sage-200 rounded-full opacity-40"></div>
<div className="w-1 h-1 bg-sage-200 rounded-full opacity-60"></div>
<div className="w-1 h-1 bg-sage-200 rounded-full opacity-40"></div>
</div>
</div>
</div>

<div className="fixed pointer-events-none w-96 h-96 bg-gradient-radial from-sage-200/5 to-transparent rounded-full blur-3xl transition-all duration-500 ease-out opacity-0" id="mouse-gradient"></div>


    </>
  );
}
