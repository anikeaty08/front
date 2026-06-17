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
      
    function selectArea(area) {
      document.querySelectorAll('.area-card').forEach(el => el.classList.remove('border-indigo-600', 'ring-2', 'bg-indigo-50'));
      document.getElementById('area-'+area).classList.add('border-indigo-600','ring-2','bg-indigo-50');
      document.getElementById('start-btn').disabled = false;
      document.getElementById('start-btn').classList.remove('opacity-50','cursor-not-allowed');
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
      
<div className="max-w-2xl mx-auto py-10 px-4">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<span className="ph-bold ph-lightbulb text-3xl text-indigo-600"></span>
<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Precifes ICFES</h1>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-indigo-700 transition">
<span className="ph-bold ph-user-circle"></span>
        Perfil
      </button>
</div>

<div className="mb-8">
<div className="flex justify-between items-center mb-1">
<span className="text-sm font-medium text-indigo-700">Progreso</span>
<span className="text-xs font-bold text-indigo-700">40%</span>
</div>
<div className="w-full bg-indigo-200 rounded-full h-3">
<div className="bg-indigo-500 h-3 rounded-full" style={{width: '40%'}}></div>
</div>
<div className="text-xs text-gray-400 mt-1">¡Vas por buen camino! 💪</div>
</div>

<div className="mb-8">
<h2 className="text-xl font-semibold text-gray-800 mb-3">Elige el área para practicar</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
<button className="area-card group rounded-lg border-2 border-transparent bg-white shadow hover:shadow-lg transition p-4 flex flex-col items-center gap-2 cursor-pointer" id="area-matematicas" onclick="selectArea('matematicas')">
<span className="ph-bold ph-function text-3xl text-pink-500 group-hover:scale-110 transition"></span>
<span className="font-bold text-gray-800">Matemáticas</span>
</button>
<button className="area-card group rounded-lg border-2 border-transparent bg-white shadow hover:shadow-lg transition p-4 flex flex-col items-center gap-2 cursor-pointer" id="area-lectura" onclick="selectArea('lectura')">
<span className="ph-bold ph-book-open-text text-3xl text-indigo-500 group-hover:scale-110 transition"></span>
<span className="font-bold text-gray-800">Lectura Crítica</span>
</button>
<button className="area-card group rounded-lg border-2 border-transparent bg-white shadow hover:shadow-lg transition p-4 flex flex-col items-center gap-2 cursor-pointer" id="area-ciencias" onclick="selectArea('ciencias')">
<span className="ph-bold ph-flask text-3xl text-green-500 group-hover:scale-110 transition"></span>
<span className="font-bold text-gray-800">Ciencias</span>
</button>
<button className="area-card group rounded-lg border-2 border-transparent bg-white shadow hover:shadow-lg transition p-4 flex flex-col items-center gap-2 cursor-pointer" id="area-sociales" onclick="selectArea('sociales')">
<span className="ph-bold ph-globe-hemisphere-west text-3xl text-yellow-500 group-hover:scale-110 transition"></span>
<span className="font-bold text-gray-800">Sociales</span>
</button>
<button className="area-card group rounded-lg border-2 border-transparent bg-white shadow hover:shadow-lg transition p-4 flex flex-col items-center gap-2 cursor-pointer" id="area-ingles" onclick="selectArea('ingles')">
<span className="ph-bold ph-translate text-3xl text-blue-500 group-hover:scale-110 transition"></span>
<span className="font-bold text-gray-800">Inglés</span>
</button>
</div>
</div>

<div className="flex flex-col items-center space-y-2">
<button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg transition hover:bg-indigo-700 opacity-50 cursor-not-allowed" disabled="" id="start-btn">
<span className="inline-flex items-center gap-2">
<span className="ph-bold ph-play-circle"></span> ¡Comenzar simulacro!
        </span>
</button>
<span className="text-sm text-gray-500">¡Demuestra lo que sabes! 🚀</span>
</div>

<div className="mt-12 text-xs text-gray-400 text-center">
      Precifes ICFES para Gen Z © 2024 <span className="ph ph-heart text-pink-400"></span>
</div>
</div>

    </>
  );
}
