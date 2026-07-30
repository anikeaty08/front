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



    // Nach der Animation (1s) Cube ausblenden, Karten einblenden
    setTimeout(() => {
      document.getElementById('cube').classList.add('finished');
      document.getElementById('fannedCards').style.display = 'flex';
    }, 1000);
  
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
      

<div className="w-full flex flex-col px-4 pt-2" style={{maxWidth: `360px`}}>
<div className="flex items-center justify-between text-xs opacity-70 select-none">
<span>9:30</span>
<div className="flex gap-2">
<span>🔋</span>
<span>📶</span>
<span>📡</span>
</div>
</div>
<div className="flex items-center justify-between pt-2 pb-3">
<button className="p-2 rounded-full hover:bg-white/10">
<svg height="20" viewBox="0 0 20 20" width="20"><circle cx="10" cy="10" fill="#fff" fillOpacity="0.65" r="9"></circle></svg>
</button>
<span className="font-semibold text-base mx-auto tracking-tight">WildCard Network</span>
<div className="flex gap-2">
<button className="p-2 rounded-full hover:bg-white/10">🔔</button>
<button className="p-2 rounded-full hover:bg-white/10">⋮</button>
</div>
</div>
</div>

<main className="flex flex-col items-center justify-center flex-1 w-full relative" style={{maxWidth: `360px`, minHeight: `240px`}}>
<div className="cube-container mt-2 mb-1 relative" style={{height: `180px`}}>
<div className="cube" id="cube">
<div className="cube-face cube-face-front absolute" style={{background: `linear-gradient(135deg, #00E68A 0%, #48F7B2 45%, #00B27A 100%)`, width: `100%`, height: `100%`, display: `flex`, flexDirection: `column`, alignItems: `flex-start`, justifyContent: `flex-end`, borderRadius: `18px`, padding: `20px 22px 16px 20px`, boxShadow: `0 8px 18px 0 rgba(0,0,0,0.26)`, color: `#fff`, fontWeight: `600`, fontSize: `1.1rem`, border: `1.5px solid rgba(255,255,255,0.08)`, letterSpacing: `-0.01em`, backfaceVisibility: `hidden`, transform: `rotateY(0deg) translateZ(70px)`, opacity: `0.96`}}>
<span className="text-xl mb-1">💸</span>
<span>Earn</span>
</div>
<div className="cube-face cube-face-right absolute" style={{background: `linear-gradient(135deg, #43C6AC 0%, #191654 100%)`, width: `100%`, height: `100%`, display: `flex`, flexDirection: `column`, alignItems: `flex-start`, justifyContent: `flex-end`, borderRadius: `18px`, padding: `20px 22px 16px 20px`, boxShadow: `0 8px 18px 0 rgba(0,0,0,0.26)`, color: `#fff`, fontWeight: `600`, fontSize: `1.1rem`, border: `1.5px solid rgba(255,255,255,0.08)`, letterSpacing: `-0.01em`, backfaceVisibility: `hidden`, transform: `rotateY(90deg) translateZ(70px)`, opacity: `0.96`}}>
<span className="text-xl mb-1">🎁</span>
<span>Cashback</span>
</div>
<div className="cube-face cube-face-back absolute" style={{background: `linear-gradient(135deg, #F857A6 5%, #FF5858 60%, #FFB88C 100%)`, width: `100%`, height: `100%`, display: `flex`, flexDirection: `column`, alignItems: `flex-start`, justifyContent: `flex-end`, borderRadius: `18px`, padding: `20px 22px 16px 20px`, boxShadow: `0 8px 18px 0 rgba(0,0,0,0.26)`, color: `#fff`, fontWeight: `600`, fontSize: `1.1rem`, border: `1.5px solid rgba(255,255,255,0.08)`, letterSpacing: `-0.01em`, backfaceVisibility: `hidden`, transform: `rotateY(180deg) translateZ(70px)`, opacity: `0.96`}}>
<span className="text-xl mb-1">🎲</span>
<span>Casinos</span>
</div>
<div className="cube-face cube-face-left absolute" style={{background: `linear-gradient(135deg, #FFD452 0%, #FFB88C 50%, #FF6E7F 100%)`, width: `100%`, height: `100%`, display: `flex`, flexDirection: `column`, alignItems: `flex-start`, justifyContent: `flex-end`, borderRadius: `18px`, padding: `20px 22px 16px 20px`, boxShadow: `0 8px 18px 0 rgba(0,0,0,0.26)`, color: `#fff`, fontWeight: `600`, fontSize: `1.1rem`, border: `1.5px solid rgba(255,255,255,0.08)`, letterSpacing: `-0.01em`, backfaceVisibility: `hidden`, transform: `rotateY(-90deg) translateZ(70px)`, opacity: `0.96`}}>
<span className="text-xl mb-1">🎉</span>
<span>Giveaway</span>
</div>
</div>

<div className="fanned-cards" id="fannedCards" style={{display: `none`}}>
<div className="fan-card">
<span className="text-xl mb-1">💸</span>
<span>Earn</span>
</div>
<div className="fan-card">
<span className="text-xl mb-1">🎁</span>
<span>Cashback</span>
</div>
<div className="fan-card">
<span className="text-xl mb-1">🎲</span>
<span>Casinos</span>
</div>
<div className="fan-card">
<span className="text-xl mb-1">🎉</span>
<span>Giveaway</span>
</div>
</div>
</div>
<p className="text-center text-xs text-white/70 mt-4 px-7">
      Entdecke neue Aktionen und Belohnungen! <br />Wähle eine Kategorie.
    </p>
</main>

<nav className="w-full px-2 pb-2" style={{maxWidth: `360px`}}>
<div className="flex justify-between items-center gap-1 bg-black/90 rounded-2xl py-2 shadow-lg border border-white/5">
<button className="flex flex-col items-center flex-1 text-green-400 font-semibold">
<span className="text-xl">🏠</span>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center flex-1 opacity-80 hover:text-green-400">
<span className="text-xl">💸</span>
<span className="text-xs">Earn</span>
</button>
<button className="flex flex-col items-center flex-1 opacity-80 hover:text-pink-400">
<span className="text-xl">🎁</span>
<span className="text-xs">Cashback</span>
</button>
<button className="flex flex-col items-center flex-1 opacity-80 hover:text-yellow-300">
<span className="text-xl">🎲</span>
<span className="text-xs">Casinos</span>
</button>
<button className="flex flex-col items-center flex-1 opacity-80 hover:text-purple-400">
<span className="text-xl">🎉</span>
<span className="text-xs">Giveaway</span>
</button>
</div>
<div className="flex justify-center mt-1">
<div className="w-24 h-1.5 bg-white/30 rounded-full"></div>
</div>
</nav>


    </>
  );
}
