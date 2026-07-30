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
                        'mono': ['JetBrains Mono', 'monospace']
                    },
                    colors: {
                        'shock': '#00ff00',
                        'brutal-black': '#000000',
                        'brutal-white': '#ffffff'
                    }
                }
            }
        }
    


        // Glitch effect on scroll
        window.addEventListener('scroll', () => {
            const glitchElements = document.querySelectorAll('.glitch-text');
            glitchElements.forEach(element => {
                if (Math.random() > 0.98) {
                    element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                    setTimeout(() => {
                        element.style.transform = 'translate(0, 0)';
                    }, 100);
                }
            });
        });

        // Random flash effects
        setInterval(() => {
            const flashElements = document.querySelectorAll('.flash-bg');
            flashElements.forEach(element => {
                if (Math.random() > 0.7) {
                    element.style.backgroundColor = '#ffffff';
                    setTimeout(() => {
                        element.style.backgroundColor = '#00ff00';
                    }, 100);
                }
            });
        }, 2000);
    
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
      

<div className="fixed inset-0 brutal-grid opacity-20"></div>

<header className="fixed top-0 w-full bg-brutal-black brutal-border border-t-0 border-l-0 border-r-0 z-50 h-16">
<div className="flex items-center justify-between h-full px-8">
<div className="glitch-text text-2xl font-black">BRUTAL.DEV</div>
<div className="flex space-x-8">
<button className="text-lg font-bold hover:bg-shock hover:text-black px-4 py-2 transition-all duration-100">WORK</button>
<button className="text-lg font-bold hover:bg-shock hover:text-black px-4 py-2 transition-all duration-100">INFO</button>
<button className="text-lg font-bold hover:bg-shock hover:text-black px-4 py-2 transition-all duration-100">CONTACT</button>
</div>
</div>
</header>

<main className="pt-16">

<section className="min-h-screen flex items-center justify-center relative">
<div className="text-center max-w-6xl mx-auto px-8">
<h1 className="text-8xl md:text-9xl font-black leading-none mb-8">
<div className="glitch-text">NO</div>
<div className="glitch-text text-shock">FLUFF</div>
<div className="glitch-text">DESIGN</div>
</h1>
<div className="type-effect text-2xl font-bold mb-12 mx-auto max-w-4xl">
                    RAW DIGITAL EXPERIENCES FOR FEARLESS BRANDS
                </div>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<button className="brutal-border bg-shock text-black px-12 py-6 text-xl font-black hover:bg-brutal-white transition-all duration-100">
                        VIEW WORK
                    </button>
<button className="brutal-border bg-brutal-black text-shock px-12 py-6 text-xl font-black hover:bg-shock hover:text-black transition-all duration-100">
                        HIRE ME
                    </button>
</div>
</div>

<div className="absolute top-1/4 left-1/4 w-4 h-4 bg-shock flash-bg"></div>
<div className="absolute top-3/4 right-1/4 w-6 h-6 bg-brutal-white"></div>
<div className="absolute top-1/2 right-1/3 w-2 h-2 bg-shock"></div>
</section>

<section className="py-20 px-8">
<h2 className="text-6xl font-black mb-16 text-center glitch-text">SELECTED WORK</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">

<div className="brutal-border bg-brutal-black hover:bg-shock hover:text-black transition-all duration-100 group cursor-pointer">
<div className="p-8">
<div className="w-full h-64 bg-brutal-white mb-6 flex items-center justify-center">
<div className="text-6xl font-black text-brutal-black group-hover:text-shock">01</div>
</div>
<h3 className="text-3xl font-black mb-4">CRYPTO EXCHANGE</h3>
<p className="text-lg font-bold">WEB3 / FINTECH / BRUTAL UX</p>
</div>
</div>

<div className="brutal-border bg-brutal-black hover:bg-shock hover:text-black transition-all duration-100 group cursor-pointer">
<div className="p-8">
<div className="w-full h-64 bg-shock mb-6 flex items-center justify-center">
<div className="text-6xl font-black text-brutal-black">02</div>
</div>
<h3 className="text-3xl font-black mb-4">TECH STARTUP</h3>
<p className="text-lg font-bold">BRAND / IDENTITY / HARDCORE</p>
</div>
</div>

<div className="brutal-border bg-brutal-black hover:bg-shock hover:text-black transition-all duration-100 group cursor-pointer">
<div className="p-8">
<div className="w-full h-64 bg-brutal-white mb-6 flex items-center justify-center">
<div className="text-6xl font-black text-brutal-black group-hover:text-shock">03</div>
</div>
<h3 className="text-3xl font-black mb-4">CREATIVE AGENCY</h3>
<p className="text-lg font-bold">WEB / MOTION / EXTREME</p>
</div>
</div>

<div className="brutal-border bg-brutal-black hover:bg-shock hover:text-black transition-all duration-100 group cursor-pointer">
<div className="p-8">
<div className="w-full h-64 bg-shock mb-6 flex items-center justify-center">
<div className="text-6xl font-black text-brutal-black">04</div>
</div>
<h3 className="text-3xl font-black mb-4">NFT PLATFORM</h3>
<p className="text-lg font-bold">BLOCKCHAIN / UI / UNFILTERED</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-8 bg-shock">
<div className="max-w-7xl mx-auto">
<h2 className="text-6xl font-black mb-16 text-center text-brutal-black">CAPABILITIES</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="brutal-border border-black bg-brutal-black p-8">
<h3 className="text-3xl font-black mb-6 text-shock">DESIGN</h3>
<ul className="space-y-3 text-lg font-bold">
<li>BRUTALIST UI/UX</li>
<li>IDENTITY SYSTEMS</li>
<li>EXPERIMENTAL LAYOUTS</li>
<li>MOTION GRAPHICS</li>
</ul>
</div>
<div className="brutal-border border-black bg-brutal-black p-8">
<h3 className="text-3xl font-black mb-6 text-shock">DEVELOPMENT</h3>
<ul className="space-y-3 text-lg font-bold">
<li>REACT / NEXT.JS</li>
<li>WEB3 INTEGRATION</li>
<li>CUSTOM ANIMATIONS</li>
<li>PERFORMANCE OPTIMIZATION</li>
</ul>
</div>
<div className="brutal-border border-black bg-brutal-black p-8">
<h3 className="text-3xl font-black mb-6 text-shock">STRATEGY</h3>
<ul className="space-y-3 text-lg font-bold">
<li>BRAND POSITIONING</li>
<li>USER RESEARCH</li>
<li>DIGITAL TRANSFORMATION</li>
<li>GROWTH HACKING</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-8">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-6xl font-black mb-8 glitch-text">READY TO BUILD?</h2>
<p className="text-2xl font-bold mb-12">LET'S CREATE SOMETHING UNCOMPROMISING</p>
<div className="flex flex-col md:flex-row gap-8 justify-center">
<div className="brutal-border p-8 bg-brutal-black">
<h3 className="text-2xl font-black mb-4 text-shock">EMAIL</h3>
<p className="text-lg font-bold">HELLO@BRUTAL.DEV</p>
</div>
<div className="brutal-border p-8 bg-shock text-brutal-black">
<h3 className="text-2xl font-black mb-4">SCHEDULE</h3>
<p className="text-lg font-bold">BOOK A CALL</p>
</div>
</div>
</div>
</section>
</main>

<footer className="brutal-border border-l-0 border-r-0 border-b-0 py-8 px-8">
<div className="flex justify-between items-center max-w-7xl mx-auto">
<div className="text-lg font-black">© 2024 BRUTAL.DEV</div>
<div className="flex space-x-8">
<a className="text-lg font-bold hover:text-shock transition-colors duration-100" href="#">TWITTER</a>
<a className="text-lg font-bold hover:text-shock transition-colors duration-100" href="#">GITHUB</a>
<a className="text-lg font-bold hover:text-shock transition-colors duration-100" href="#">LINKEDIN</a>
</div>
</div>
</footer>


    </>
  );
}
