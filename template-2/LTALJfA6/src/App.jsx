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



    const recentKeys = [];
    
    document.addEventListener('keydown', function(event) {
      // Update key info
      document.getElementById('keyCode').textContent = event.keyCode;
      document.getElementById('keyName').textContent = event.key.toUpperCase();
      document.getElementById('keyInfo').querySelector('.text-6xl').textContent = event.key.toUpperCase();
      
      // Add to recent keys
      recentKeys.unshift(event.key.toUpperCase());
      if (recentKeys.length > 4) recentKeys.pop();
      
      // Update recent keys display
      const recentKeysElements = document.querySelectorAll('#recentKeys div');
      recentKeys.forEach((key, index) => {
        if (recentKeysElements[index]) {
          recentKeysElements[index].textContent = key;
        }
      });
      
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
      
<div className="max-w-7xl mx-auto">

<header className="mb-6">
<div className="bg-black text-white px-4 py-3 flex justify-between items-center">
<h1 className="text-2xl font-extrabold tracking-tight">KYO'S KEYBOARD</h1>
<div className="flex gap-4">
<a className="text-sm hover:underline" href="#">DEMOS</a>
<a className="text-sm hover:underline" href="#">ABOUT</a>
</div>
</div>
</header>

<div className="grid grid-cols-12 gap-4">

<div className="col-span-12 md:col-span-8 bg-white border-4 border-black p-4">
<div className="flex justify-between mb-4">
<h2 className="font-bold text-xl">VIRTUAL KEYBOARD</h2>
<span className="bg-[#FF3333] text-white px-2 py-1 text-xs font-bold">PRESS ANY KEY</span>
</div>

<div className="grid grid-cols-12 gap-1 mb-1">
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">ESC</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F1</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F2</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F3</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F4</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F5</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F6</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F7</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F8</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F9</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F10</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F11</div>
</div>
<div className="grid grid-cols-12 gap-1 mb-1">
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">`</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">1</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">2</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">3</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">4</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">5</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">6</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">7</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">8</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">9</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">0</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">⌫</div>
</div>
<div className="grid grid-cols-12 gap-1 mb-1">
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">TAB</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">Q</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">W</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">E</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">R</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">T</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">Y</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">U</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">I</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">O</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">P</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">\</div>
</div>
<div className="grid grid-cols-12 gap-1 mb-1">
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">CAPS</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">A</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">S</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">D</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">F</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">G</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">H</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">J</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">K</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">L</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">;</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">↵</div>
</div>
<div className="grid grid-cols-12 gap-1 mb-1">
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">⇧</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">Z</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">X</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">C</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">V</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">B</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">N</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">M</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">,</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">.</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">/</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">⇧</div>
</div>
<div className="grid grid-cols-12 gap-1">
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">⌃</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">⌥</div>
<div className="key col-span-8 h-8 bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">SPACE</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">⌥</div>
<div className="key col-span-1 aspect-square bg-[#DDDDDD] border-2 border-black flex items-center justify-center text-xs font-bold">⌃</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4">

<div className="bg-[#FFDD00] border-4 border-black p-4">
<h2 className="font-bold text-xl mb-2">KEY INFO</h2>
<div className="flex flex-col items-center" id="keyInfo">
<div className="text-6xl font-extrabold my-4">-</div>
<div className="grid grid-cols-2 gap-2 w-full">
<div className="bg-white border-2 border-black p-2 text-sm">
<span className="font-bold">CODE:</span> <span id="keyCode">-</span>
</div>
<div className="bg-white border-2 border-black p-2 text-sm">
<span className="font-bold">NAME:</span> <span id="keyName">-</span>
</div>
</div>
</div>
</div>

<div className="bg-[#00CCFF] border-4 border-black p-4">
<h2 className="font-bold text-xl mb-2">RECENT KEYS</h2>
<div className="grid grid-cols-4 gap-2" id="recentKeys">
<div className="aspect-square bg-white border-2 border-black flex items-center justify-center font-bold">-</div>
<div className="aspect-square bg-white border-2 border-black flex items-center justify-center font-bold">-</div>
<div className="aspect-square bg-white border-2 border-black flex items-center justify-center font-bold">-</div>
<div className="aspect-square bg-white border-2 border-black flex items-center justify-center font-bold">-</div>
</div>
</div>
</div>

<div className="col-span-12 bg-[#FF3333] border-4 border-black p-4">
<div className="flex justify-between mb-4">
<h2 className="font-bold text-xl text-white">COMMON SHORTCUTS</h2>
<span className="bg-white px-2 py-1 text-xs font-bold border-2 border-black">PRODUCTIVITY BOOSTERS</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2" id="shortcuts">
<div className="bg-white border-2 border-black p-3">
<div className="font-bold mb-1 text-sm">CTRL + C</div>
<div className="text-xs">COPY</div>
</div>
<div className="bg-white border-2 border-black p-3">
<div className="font-bold mb-1 text-sm">CTRL + V</div>
<div className="text-xs">PASTE</div>
</div>
<div className="bg-white border-2 border-black p-3">
<div className="font-bold mb-1 text-sm">CTRL + Z</div>
<div className="text-xs">UNDO</div>
</div>
<div className="bg-white border-2 border-black p-3">
<div className="font-bold mb-1 text-sm">CTRL + Y</div>
<div className="text-xs">REDO</div>
</div>
</div>
</div>
</div>
<footer className="mt-6 bg-black text-white p-4 flex justify-between items-center">
<div>© 2023 KYO'S PLAYGROUND</div>
<div className="text-sm">DESIGNED WITH BRUTAL SIMPLICITY</div>
</footer>
</div>


    </>
  );
}
