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
      
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
                        'inter': ['Inter', 'sans-serif']
                    },
                    animation: {
                        'blur-in': 'blur-in 0.8s ease-out forwards'
                    },
                    keyframes: {
                        'blur-in': {
                            '0%': { filter: 'blur(10px)', opacity: '0' },
                            '100%': { filter: 'blur(0px)', opacity: '1' }
                        }
                    }
                }
            }
        }
    


        let cameraCount = 1;
        let regolaCount = 0;
        
        function aggiungiCamera() {
            cameraCount++;
            const container = document.getElementById('camere-container');
            const newCamera = document.createElement('div');
            newCamera.className = 'camera-item border border-zinc-200 rounded-lg p-6 space-y-4';
            newCamera.innerHTML = `
                <div class="flex items-center justify-between">
                    <h3 class="font-roboto-condensed text-xl font-semibold tracking-tight text-black">Camera ${cameraCount}</h3>
                    <button type="button" onclick="rimuoviCamera(this)" class="text-red-600 hover:text-red-800 font-inter text-sm">Rimuovi</button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block font-inter text-sm font-medium text-zinc-700 mb-2">Nome camera</label>
                        <input type="text" class="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm">
                    </div>
                    
                    <div>
                        <label class="block font-inter text-sm font-medium text-zinc-700 mb-2">Grandezza (mq)</label>
                        <input type="number" min="1" class="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm">
                    </div>
                </div>
                
                <div>
                    <label class="block font-inter text-sm font-medium text-zinc-700 mb-2">Descrizione camera</label>
                    <textarea rows="3" class="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm"></textarea>
                </div>
                
                <div>
                    <label class="block font-inter text-sm font-medium text-zinc-700 mb-2">Prezzo camera (€/mese)</label>
                    <input type="number" min="0" step="0.01" class="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm">
                </div>
                
                <div>
                    <label class="block font-inter text-sm font-medium text-zinc-700 mb-2">Foto camera</label>
                    <input type="file" multiple accept="image/*" class="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm">
                </div>
            `;
            container.appendChild(newCamera);
        }
        
        function rimuoviCamera(button) {
            button.closest('.camera-item').remove();
        }

        function aggiungiRegola() {
            regolaCount++;
            const regoleList = document.getElementById('regole-list');
            const newRegola = document.createElement('div');
            newRegola.className = 'regola-item flex items-center gap-3 p-4 bg-zinc-50 rounded-md border border-zinc-200';
            newRegola.innerHTML = `
                <div class="flex-1">
                    <input type="text" placeholder="Scrivi una regola personalizzata per l'appartamento..." class="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm bg-white">
                </div>
                <button type="button" onclick="rimuoviRegola(this)" class="px-3 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md font-inter text-sm transition-colors">Rimuovi</button>
            `;
            regoleList.appendChild(newRegola);
        }
        
        function rimuoviRegola(button) {
            button.closest('.regola-item').remove();
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
      
<div className="max-w-4xl mx-auto animate-blur-in">
<div className="bg-white rounded-lg shadow-md p-8">
<h1 className="font-roboto-condensed text-7xl font-semibold tracking-tight text-black mb-4">Registra Appartamento</h1>
<p className="font-inter text-base text-zinc-600 mb-8">Inserisci i dettagli del tuo appartamento per iniziare ad affittare</p>
<form className="space-y-6">

<div className="space-y-4">
<h2 className="font-roboto-condensed text-2xl font-semibold tracking-tight text-black">Informazioni Generali</h2>
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Nome appartamento</label>
<input className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" type="text" />
</div>
<div className="space-y-4">
<label className="block text-sm font-medium text-zinc-700 font-inter mb-2">Indirizzo</label>
<div className="">
<input className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" placeholder="Via" type="text" />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<input className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" placeholder="Città" type="text" />
</div>
<div className="">
<input className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" placeholder="CAP" type="number" />
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h2 className="font-roboto-condensed text-2xl font-semibold tracking-tight text-black">Regole Appartamento</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Animali ammessi</label>
<select className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm">
<option>Seleziona</option>
<option>Sì</option>
<option>No</option>
</select>
</div>
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Coppie ammesse</label>
<select className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm">
<option>Seleziona</option>
<option>Sì</option>
<option>No</option>
</select>
</div>
</div>
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Fumatori ammessi</label>
<select className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm mb-2">
<option>Seleziona</option>
<option>Sì</option>
<option>No</option>
</select>
<input className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" placeholder="Se sì, specificare dove è consentito" type="text" />
</div>
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Spese incluse</label>
<select className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm">
<option>Seleziona</option>
<option>Sì</option>
<option>No</option>
</select>
</div>

<div className="space-y-4" id="regole-personalizzate-container">
<div className="flex items-center justify-between pt-4 border-t border-zinc-200">
<h3 className="font-roboto-condensed text-xl font-semibold tracking-tight text-black">Regole Personalizzate</h3>
<button className="px-4 py-2 bg-zinc-800 text-white rounded-md font-inter text-sm hover:bg-zinc-900 transition-colors" onClick={(e) => { aggiungiRegola() }} type="button">+ Aggiungi Regola</button>
</div>
<p className="font-inter text-sm text-zinc-600">Aggiungi regole specifiche per il tuo appartamento</p>
<div className="space-y-3" id="regole-list">

</div>
</div>
</div>

<div className="space-y-6" id="camere-container">
<div className="flex items-center justify-between">
<h2 className="font-roboto-condensed text-2xl font-semibold tracking-tight text-black">Dettagli Camere</h2>
<button className="px-4 py-2 bg-black text-white rounded-md font-inter text-sm hover:bg-zinc-800 transition-colors" onClick={(e) => { aggiungiCamera() }} type="button">+ Aggiungi Camera</button>
</div>
<div className="camera-item border border-zinc-200 rounded-lg p-6 space-y-4">
<h3 className="font-roboto-condensed text-xl font-semibold tracking-tight text-black">Camera 1</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Nome camera</label>
<input className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" type="text" />
</div>
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Grandezza (mq)</label>
<input className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" min="1" type="number" />
</div>
</div>
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Descrizione camera</label>
<textarea className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" rows="3"></textarea>
</div>
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Prezzo camera (€/mese)</label>
<input className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" min="0" step="0.01" type="number" />
</div>
<div className="">
<label className="block font-inter text-sm font-medium text-zinc-700 mb-2">Foto camera</label>
<input accept="image/*" className="w-full px-4 py-3 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-inter text-sm" multiple="" type="file" />
</div>
</div>
</div>

<div className="pt-6">
<button className="w-full bg-black text-white py-4 rounded-md font-inter text-base font-medium hover:bg-zinc-800 transition-colors" type="submit">Registra Appartamento</button>
</div>
</form>
</div>
</div>


    </>
  );
}
