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
      

<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21e22335-9a60-48b6-a141-b08d47fdfb25_3840w.jpg?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', animation: 'kenburns 25s ease-in-out infinite alternate'}}></div>
<main className="relative min-h-screen w-full overflow-hidden flex flex-col">

<div className="absolute inset-0 z-0 overflow-hidden">

<div className="absolute inset-0 bg-cover bg-center bg-no-repeat origin-center" style={{backgroundImage: 'url(\'rancho-mirage-sunset.jpg\')', animation: 'kenburns 25s ease-in-out infinite alternate'}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70"></div>
<div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
</div>

<header className="relative z-10 w-full px-6 py-6 md:px-12 flex justify-between items-center" style={{opacity: '0', animation: 'fadeUp 1s ease-out forwards', animationDelay: '0.1s'}}>
<div className="flex items-center gap-3">
<iconify-icon className="text-3xl text-white" icon="solar:buildings-linear"></iconify-icon>
<span className="text-2xl font-medium tracking-tight text-white">Oasis Escrow</span>
</div>
<nav className="hidden md:flex items-center gap-10">
<a className="text-lg font-light text-white/90 hover:text-white transition-colors duration-300" href="#">Services</a>
<a className="text-lg font-light text-white/90 hover:text-white transition-colors duration-300" href="#">Company</a>
<a className="text-lg font-light text-white/90 hover:text-white transition-colors duration-300" href="#">Resources</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="text-lg font-light text-white hover:text-white/80 transition-colors duration-300" href="#">Sign In</a>
<a className="text-lg font-medium text-black bg-white px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors duration-300" href="#">
                    Open Escrow
                </a>
</div>
<button className="md:hidden text-white/90 hover:text-white transition-colors">
<iconify-icon className="text-4xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</header>

<div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-12 md:mt-0">

<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-10" style={{opacity: '0', animation: 'fadeUp 1s ease-out forwards', animationDelay: '0.3s'}}>
<iconify-icon className="text-xl text-white" icon="solar:map-point-linear"></iconify-icon>
<span className="text-lg font-light text-white">Based in Rancho Mirage, CA</span>
</div>

<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white mb-8 leading-none drop-shadow-lg" style={{opacity: '0', animation: 'fadeUp 1s ease-out forwards', animationDelay: '0.5s'}}>
                Flawless<br/>closings.
            </h1>
<p className="text-xl md:text-3xl text-white/80 max-w-3xl mb-14 font-light leading-relaxed drop-shadow-md" style={{opacity: '0', animation: 'fadeUp 1s ease-out forwards', animationDelay: '0.7s'}}>
                Elevating the standard of real estate transactions in the Coachella Valley. Secure, transparent, and seamless escrow services.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto" style={{opacity: '0', animation: 'fadeUp 1s ease-out forwards', animationDelay: '0.9s'}}>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full text-xl font-medium hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300" href="#">
                    Get Started
                    <iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-black/40 text-white border border-white/30 rounded-full text-xl font-medium hover:bg-white/20 backdrop-blur-md transition-all duration-300" href="#">
                    Speak with an Officer
                </a>
</div>
</div>

<div className="relative z-10 w-full px-6 py-10 border-t border-white/20 bg-black/30 backdrop-blur-md mt-auto hidden md:flex flex-col md:flex-row justify-between items-center gap-8" style={{opacity: '0', animation: 'fadeUp 1s ease-out forwards', animationDelay: '1.1s'}}>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
<iconify-icon className="text-3xl text-white" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-white drop-shadow-md">Bank-level Security</span>
<span className="text-lg font-light text-white/80">Your funds are protected</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
<iconify-icon className="text-3xl text-white" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-white drop-shadow-md">Fast Processing</span>
<span className="text-lg font-light text-white/80">Streamlined timelines</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
<iconify-icon className="text-3xl text-white" icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-white drop-shadow-md">Expert Officers</span>
<span className="text-lg font-light text-white/80">Decades of combined experience</span>
</div>
</div>
</div>
</main>

    </>
  );
}
