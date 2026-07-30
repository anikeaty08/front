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
            'mono': ['Space Mono', 'monospace'],
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
              900: '#1a1d18',
            },
            'turquoise': {
              50:  '#ecfeff',
              100: '#cffafe',
              200: '#a5f3fc',
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#06b6d4',
              600: '#0891b2',
              700: '#0e7490',
              800: '#155e75',
              900: '#164e63'
            }
          },
          keyframes: {
            'grid-move': {
              '0%': { transform: 'translate(0,0) scale(1)' },
              '50%': { transform: 'translate(-30px, 20px) scale(1.04)' },
              '100%': { transform: 'translate(0,0) scale(1)' }
            },
            'grid-pulse': {
              '0%,100%': { opacity: '0.26' },
              '50%': { opacity: '0.38' }
            }
          },
          animation: {
            'grid-move': 'grid-move 16s ease-in-out infinite',
            'grid-pulse': 'grid-pulse 6s ease-in-out infinite'
          }
        }
      }
    }
  


    // Animate background grid using Tailwind animation utilities, see Tailwind config above.

    // Word by word animation
    function animateWords() {
      const words = document.querySelectorAll('.word');
      words.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay')) || 0;
        setTimeout(() => {
          word.style.animation = 'word-appear 0.7s cubic-bezier(.78,-0.01,.11,1.08) forwards';
        }, delay);
      });
    }

    // Section entrance animation, sequence with delays
    function sequenceEntrance() {
      const header = document.getElementById('header-entrance');
      const hero = document.getElementById('hero-entrance');
      const headline = document.getElementById('headline-entrance');
      const herop = document.getElementById('herop-entrance');
      const cta = document.getElementById('cta-entrance');
      const herosub = document.getElementById('herosub-entrance');
      const gallery = document.getElementById('gallery-entrance');
      const footer = document.getElementById('footer-entrance');

      setTimeout(() => header.classList.add('section-visible'), 100);
      setTimeout(() => hero.classList.add('section-visible'), 300);
      setTimeout(() => headline.classList.add('section-visible'), 700);
      setTimeout(() => herop.classList.add('section-visible'), 950);
      setTimeout(() => cta.classList.add('section-visible'), 1200);
      setTimeout(() => herosub.classList.add('section-visible'), 1350);
      setTimeout(() => gallery.classList.add('section-visible'), 1600);
      setTimeout(() => footer.classList.add('section-visible'), 2000);
    }

    window.addEventListener('DOMContentLoaded', () => {
      sequenceEntrance();
      setTimeout(animateWords, 1100);
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
      

<header className="w-full shadow z-20 bg-sage-900/70 backdrop-blur-sm section-animate" id="header-entrance">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<span className="text-2xl font-bold text-sage-100 tracking-tight font-primary">Helm</span>
<nav className="space-x-8 text-base font-mono text-turquoise-200 uppercase opacity-90 hidden md:inline">
<a className="hover:text-sage-200 transition" href="#">Home</a>
<a className="hover:text-sage-200 transition" href="#">About</a>
<a className="hover:text-sage-200 transition" href="#">Support</a>
<a className="hover:text-sage-200 transition" href="#">Resources</a>
</nav>
</div>
</header>

<section className="relative text-center px-4 py-14 md:py-20 overflow-hidden section-animate" id="hero-entrance">

<div className="absolute inset-0 pointer-events-none -z-10 animate-grid-move">
<svg className="w-full h-full animate-grid-pulse" height="100%" style={{display: `block`}} width="100%">
<defs>
<pattern height="50" id="webgrid" patternunits="userSpaceOnUse" width="50">
<path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(200,180,160,0.12)" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#webgrid)" height="100%" width="100%"></rect>
</svg>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-sage-50 mb-4 section-animate" id="headline-entrance">
<span className="word" data-delay="0">Prioritize</span>
<span className="word" data-delay="200">your</span>
<span className="word" data-delay="400">well-being,</span>
<span className="word" data-delay="600">embrace</span>
<span className="word" data-delay="800">growth.</span>
</h1>
<p className="text-base sm:text-lg md:text-xl text-turquoise-200 font-thin mb-8 max-w-2xl mx-auto section-animate" id="herop-entrance">
<span className="word" data-delay="1000">Every</span>
<span className="word" data-delay="1150">small</span>
<span className="word" data-delay="1300">step</span>
<span className="word" data-delay="1450">matters.</span>
<span className="word" data-delay="1600">Find</span>
<span className="word" data-delay="1750">peace</span>
<span className="word" data-delay="1900">in</span>
<span className="word" data-delay="2050">self-care,</span>
<span className="word" data-delay="2200">hope</span>
<span className="word" data-delay="2350">in</span>
<span className="word" data-delay="2500">healing.</span>
</p>
<a className="inline-block bg-turquoise-600 hover:bg-turquoise-700 text-sage-50 font-medium py-3 px-10 rounded-full shadow-lg transition mb-6 text-lg tracking-wide section-animate" href="#" id="cta-entrance">
      Get Started
    </a>
<div className="text-xs text-turquoise-200 opacity-90 font-mono mt-2 section-animate" id="herosub-entrance">Free resources. Confidential support.</div>
</section>

<section className="relative py-10 px-4 md:px-0 max-w-6xl mx-auto w-full section-animate" id="gallery-entrance">
<div className="mb-7 text-center">
<h2 className="text-xl sm:text-2xl font-semibold text-sage-100 mb-1 tracking-tight">Your Wellness Gallery</h2>
<p className="text-base text-turquoise-100 max-w-2xl mx-auto">Explore resources, inspiration, and tools to support your mental health journey.</p>
</div>
<div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

<div className="bg-sage-900/70 rounded-2xl shadow-lg border border-sage-800 overflow-hidden flex flex-col hover:scale-[1.025] transition">
<img alt="Meditation" className="h-44 w-full object-cover object-center" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" />
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-sage-50 text-lg mb-1">Meditation Sessions</h3>
<p className="text-turquoise-200 text-sm flex-1">Guided audio and video meditations to help you find calm and reconnect.</p>
<a className="mt-4 text-turquoise-400 font-mono text-xs uppercase tracking-wide hover:text-turquoise-200" href="#">Explore</a>
</div>
</div>

<div className="bg-sage-900/70 rounded-2xl shadow-lg border border-sage-800 overflow-hidden flex flex-col hover:scale-[1.025] transition">
<img alt="Community" className="h-44 w-full object-cover object-center" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" />
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-sage-50 text-lg mb-1">Support Community</h3>
<p className="text-turquoise-200 text-sm flex-1">Join a safe, understanding space to connect and share stories with others.</p>
<a className="mt-4 text-turquoise-400 font-mono text-xs uppercase tracking-wide hover:text-turquoise-200" href="#">Join</a>
</div>
</div>

<div className="bg-sage-900/70 rounded-2xl shadow-lg border border-sage-800 overflow-hidden flex flex-col hover:scale-[1.025] transition">
<img alt="Articles" className="h-44 w-full object-cover object-center" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" />
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-sage-50 text-lg mb-1">Wellness Articles</h3>
<p className="text-turquoise-200 text-sm flex-1">Expert advice and insights for building resilience, self-care, and more.</p>
<a className="mt-4 text-turquoise-400 font-mono text-xs uppercase tracking-wide hover:text-turquoise-200" href="#">Read</a>
</div>
</div>

<div className="bg-sage-900/70 rounded-2xl shadow-lg border border-sage-800 overflow-hidden flex flex-col hover:scale-[1.025] transition">
<img alt="Breathing" className="h-44 w-full object-cover object-center" src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80" />
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-sage-50 text-lg mb-1">Breathing Exercises</h3>
<p className="text-turquoise-200 text-sm flex-1">Simple, effective guides to help you manage stress and restore balance.</p>
<a className="mt-4 text-turquoise-400 font-mono text-xs uppercase tracking-wide hover:text-turquoise-200" href="#">Try Now</a>
</div>
</div>

<div className="bg-sage-900/70 rounded-2xl shadow-lg border border-sage-800 overflow-hidden flex flex-col hover:scale-[1.025] transition">
<img alt="Hotlines" className="h-44 w-full object-cover object-center" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" />
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-sage-50 text-lg mb-1">Crisis Hotlines</h3>
<p className="text-turquoise-200 text-sm flex-1">Immediate, confidential support for when you need to talk someone now.</p>
<a className="mt-4 text-turquoise-400 font-mono text-xs uppercase tracking-wide hover:text-turquoise-200" href="#">Contact</a>
</div>
</div>

<div className="bg-sage-900/70 rounded-2xl shadow-lg border border-sage-800 overflow-hidden flex flex-col hover:scale-[1.025] transition">
<img alt="Mood Journal" className="h-44 w-full object-cover object-center" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" />
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-sage-50 text-lg mb-1">Mood Journal</h3>
<p className="text-turquoise-200 text-sm flex-1">Track your feelings, reflect, and notice patterns over time with privacy.</p>
<a className="mt-4 text-turquoise-400 font-mono text-xs uppercase tracking-wide hover:text-turquoise-200" href="#">Start</a>
</div>
</div>
</div>
</section>

<footer className="bg-sage-900/70 text-center py-6 mt-auto border-t border-sage-700/40 section-animate" id="footer-entrance">
<div className="text-xs font-mono text-turquoise-200 opacity-70">
      © 2024 Helm · All Rights Reserved
    </div>
</footer>


    </>
  );
}
