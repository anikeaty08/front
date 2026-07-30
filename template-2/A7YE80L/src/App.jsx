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
      
    // Unsinnige Fun Facts
    const facts = [
      "Bananen wachsen nach oben, nicht nach unten.",
      "Ein Einhorn kann rückwärts tanzen, aber nur im Regen.",
      "Kartoffeln enthalten 0% WLAN.",
      "Donuts haben geheime Portale im Inneren.",
      "Wenn du diese Seite verlässt, wirst du kurz ein Lama sein.",
      "Quatsch ist die beste Energiequelle für Kreativität.",
      "Dieses Einhorn wurde aus Regenbogen gebaut."
    ];
    document.getElementById('funfact').onclick = function() {
      const fact = facts[Math.floor(Math.random()*facts.length)];
      document.getElementById('fact-result').textContent = fact;
    };

    // Einfaches Konfetti
    function confetti() {
      const canvas = document.getElementById('konfetti');
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = 'block';
      const pieces = [];
      const colors = ['#ff0080','#7928ca','#00cfff','#ffeb3b','#34d399','#fbbf24','#f87171','#4c51bf'];
      for(let i=0;i<120;i++) {
        pieces.push({
          x: Math.random()*canvas.width,
          y: Math.random()*canvas.height/2,
          r: Math.random()*8+4,
          c: colors[Math.floor(Math.random()*colors.length)],
          s: Math.random()*2+1,
          a: Math.random()*2*Math.PI
        });
      }
      let t=0;
      function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        for(let p of pieces) {
          ctx.save();
          ctx.translate(p.x,p.y);
          ctx.rotate(p.a);
          ctx.fillStyle = p.c;
          ctx.beginPath();
          ctx.arc(0,0,p.r,0,2*Math.PI);
          ctx.fill();
          ctx.restore();
          p.y += p.s + Math.sin(t/10+p.x/100)*0.7;
          p.x += Math.sin(t/15+p.y/100)*1.2;
        }
        t++;
        if(t<120) requestAnimationFrame(draw);
        else setTimeout(()=>canvas.style.display='none', 700);
      }
      draw();
    }
  
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
      
<h1 className="text-5xl font-extrabold rainbow-text mb-6 wiggle">GENIALE QUATSCH SEITE</h1>
<div className="flex flex-col items-center space-y-8">
<button className="px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 focus:outline-none ring-4 ring-pink-300" onClick={(e) => { alert('🎉 Überraschung! Du bist jetzt Quatsch-Meister! 🦄') }}>
      Drück mich für Quatsch!
    </button>
<div className="flex space-x-6">
<div className="bg-white rounded-full shadow-xl p-6 border-4 border-dashed border-yellow-400 spin-slow">
<img alt="Einhorn" className="w-16 h-16" src="https://em-content.zobj.net/source/microsoft-teams/337/unicorn_1f984.png" />
</div>
<div className="bg-white rounded-full shadow-xl p-6 border-4 border-dotted border-pink-400 animate-bounce">
<img alt="Kartoffel" className="w-16 h-16" src="https://em-content.zobj.net/source/microsoft-teams/337/potato_1f954.png" />
</div>
<div className="bg-white rounded-full shadow-xl p-6 border-4 border-double border-blue-400 animate-pulse">
<img alt="Donut" className="w-16 h-16" src="https://em-content.zobj.net/source/microsoft-teams/337/doughnut_1f369.png" />
</div>
</div>
<div className="mt-10 bg-white bg-opacity-80 rounded-xl shadow-lg p-8 max-w-xl text-center">
<p className="text-xl font-semibold text-gray-800 mb-4">Willkommen auf der sinnlosesten Seite des Internets!</p>
<p className="text-lg text-pink-500">Hier gibt es nichts zu holen, aber viel zu lachen.</p>
<p className="mt-3 text-blue-600 font-mono">Fun Fact: <span className="underline cursor-pointer" id="funfact">Klicke hier für Unsinn!</span></p>
<p className="mt-2 text-green-700 font-bold" id="fact-result"></p>
</div>
<div className="mt-8 flex space-x-4">
<a className="px-4 py-2 bg-yellow-400 rounded-lg font-bold shadow-lg hover:bg-yellow-300 transition-all duration-300" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        Überraschungs-Link 🎲
      </a>
<button className="px-4 py-2 bg-blue-400 text-white rounded-lg font-bold shadow-lg hover:bg-blue-300 transition-all duration-300" onClick={(e) => { confetti() }}>
        Konfetti! 🎉
      </button>
</div>
</div>
<canvas className="fixed inset-0 pointer-events-none" id="konfetti" style={{zIndex: `100`, display: `none`}}></canvas>


    </>
  );
}
