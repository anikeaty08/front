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



    document.addEventListener('keydown', function(event) {
      // Update key info
      document.getElementById('keyCode').textContent = event.keyCode;
      document.getElementById('keyName').textContent = event.key.toUpperCase();
      
      // Highlight pressed key
      const keys = document.querySelectorAll('.key');
      keys.forEach(key => {
        const keyText = key.textContent.toLowerCase();
        const pressedKey = event.key.toLowerCase();
        
        if (keyText === pressedKey) {
          key.classList.add('active');
          setTimeout(() => {
            key.classList.remove('active');
          }, 150);
        }
      });
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
      
<div className="min-h-screen flex flex-col">
<nav className="border-b-8 border-black">
<div className="container mx-auto flex justify-between items-center px-4 py-3">
<div className="text-2xl font-bold tracking-tighter uppercase">KYO</div>
<div className="flex space-x-4">
<a className="hover:underline hover:bg-black hover:text-white px-2 text-xs uppercase" href="#">DEMOS</a>
<a className="hover:underline hover:bg-black hover:text-white px-2 text-xs uppercase" href="#">TOOLS</a>
<a className="hover:underline hover:bg-black hover:text-white px-2 text-xs uppercase" href="#">ABOUT</a>
</div>
</div>
</nav>
<main className="container mx-auto px-4 pt-8 flex-grow">
<div className="mb-8">
<h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-4">
          KEYBOARD SHORTCUTS
        </h1>
<div className="w-full h-2 bg-black mb-4"></div>
<p className="text-lg mb-4">
          PRESS ANY KEY TO SEE ITS CODE AND COMMON SHORTCUTS
        </p>
</div>
<div className="grid grid-cols-1 gap-8">

<div className="border-8 border-black p-6 bg-gray-50">
<h2 className="text-2xl font-bold mb-6 uppercase">VIRTUAL KEYBOARD</h2>
<div className="grid grid-cols-12 gap-2 mb-4">

<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center font-bold">ESC</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F1</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F2</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F3</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F4</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F5</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F6</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F7</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F8</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F9</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F10</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F11</div>
</div>

<div className="grid grid-cols-12 gap-2 mb-4">
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">`</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">1</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">2</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">3</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">4</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">5</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">6</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">7</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">8</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">9</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">0</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">⌫</div>
</div>

<div className="grid grid-cols-12 gap-2 mb-4">
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">TAB</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">Q</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">W</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">E</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">R</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">T</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">Y</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">U</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">I</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">O</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">P</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">\</div>
</div>

<div className="grid grid-cols-12 gap-2 mb-4">
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">CAPS</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">A</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">S</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">D</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">F</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">G</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">H</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">J</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">K</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">L</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">;</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">ENTER</div>
</div>

<div className="grid grid-cols-12 gap-2 mb-4">
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">SHIFT</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">Z</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">X</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">C</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">V</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">B</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">N</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">M</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">,</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">.</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">/</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">SHIFT</div>
</div>

<div className="grid grid-cols-12 gap-2">
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">CTRL</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">ALT</div>
<div className="key col-span-8 h-12 border-4 border-black flex items-center justify-center">SPACE</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">ALT</div>
<div className="key col-span-1 aspect-square border-4 border-black flex items-center justify-center">CTRL</div>
</div>
</div>

<div className="border-8 border-black p-6 bg-gray-50">
<h2 className="text-2xl font-bold mb-6 uppercase">KEY INFO</h2>
<div className="flex flex-col items-center" id="keyInfo">
<div className="text-8xl font-bold mb-4">-</div>
<div className="text-lg mb-2">KEY CODE: <span id="keyCode">-</span></div>
<div className="text-lg">KEY NAME: <span id="keyName">-</span></div>
</div>
</div>

<div className="border-8 border-black p-6 bg-gray-50">
<h2 className="text-2xl font-bold mb-6 uppercase">COMMON SHORTCUTS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="shortcuts">
<div className="border-4 border-black p-4">
<div className="font-bold mb-2">CTRL + C</div>
<div>COPY</div>
</div>
<div className="border-4 border-black p-4">
<div className="font-bold mb-2">CTRL + V</div>
<div>PASTE</div>
</div>
<div className="border-4 border-black p-4">
<div className="font-bold mb-2">CTRL + Z</div>
<div>UNDO</div>
</div>
<div className="border-4 border-black p-4">
<div className="font-bold mb-2">CTRL + Y</div>
<div>REDO</div>
</div>
</div>
</div>
</div>
</main>
<footer className="mt-8 border-t-8 border-black py-6 px-4">
<div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
<div className="text-xs uppercase">
          © 2023 KYO'S PLAYGROUND
        </div>
<div className="text-xs uppercase">
          PRESS ANY KEY TO CONTINUE
        </div>
</div>
</footer>
</div>


    </>
  );
}
