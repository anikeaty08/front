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
      

<header className="flex justify-between items-center px-8 pt-8">
<div className="flex items-center gap-3">
<svg fill="none" height="38" viewBox="0 0 30 30" width="38">
<circle cx="15" cy="15" r="13" stroke="#00eaff" strokeWidth="2"></circle>
<ellipse className="orbit" cx="15" cy="15" rx="10" ry="4" stroke="#7f5cff" strokeWidth="1.2"></ellipse>
<circle className="dot-pulse" cx="15" cy="15" fill="#00eaff" r="3"></circle>
</svg>
<span className="text-2xl font-bold tracking-tight quantum-gradient glow">Cuántica</span>
</div>
<nav>
<ul className="flex gap-8 text-[#00eaff] font-medium text-lg">
<li><a className="hover:text-[#7f5cff] transition" href="#intro">Inicio</a></li>
<li><a className="hover:text-[#7f5cff] transition" href="#principios">Principios</a></li>
<li><a className="hover:text-[#7f5cff] transition" href="#aplicaciones">Aplicaciones</a></li>
</ul>
</nav>
</header>

<main className="flex-1 flex flex-col justify-center items-center px-4 relative">

<div className="absolute inset-0 pointer-events-none z-0 opacity-60">
<svg height="100%" width="100%">
<defs>
<lineargradient id="lineGrad" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#00eaff33"></stop>
<stop offset="100%" stop-color="#7f5cff11"></stop>
</lineargradient>
</defs>
<line stroke="url(#lineGrad)" strokeWidth="2" x1="10%" x2="90%" y1="5%" y2="60%"></line>
<line stroke="url(#lineGrad)" strokeWidth="2" x1="15%" x2="85%" y1="90%" y2="10%"></line>
<line stroke="url(#lineGrad)" strokeWidth="1.2" x1="40%" x2="60%" y1="0%" y2="100%"></line>
<line stroke="url(#lineGrad)" strokeWidth="1" x1="0%" x2="100%" y1="50%" y2="50%"></line>
</svg>
</div>

<section className="z-10 max-w-3xl text-center pt-24 fade-in" id="intro">
<h1 className="text-5xl md:text-6xl font-extrabold mb-6 quantum-gradient glow tracking-tight">Explora la Mecánica Cuántica</h1>
<p className="text-lg md:text-xl text-[#b3b3ff] mb-10 max-w-2xl mx-auto">
        Sumérgete en el universo donde la materia vibra, los estados se superponen y lo imposible se vuelve cotidiano. El futuro es cuántico.
      </p>
<div className="flex justify-center mb-8">
<svg className="orbit" height="140" viewBox="0 0 100 100" width="140">
<circle cx="50" cy="50" fill="none" opacity="0.5" r="38" stroke="#00eaff" strokeWidth="1.5"></circle>
<ellipse cx="50" cy="50" fill="none" rx="32" ry="12" stroke="#7f5cff" strokeWidth="1.2"></ellipse>
<ellipse cx="50" cy="50" fill="none" rx="12" ry="32" stroke="#00eaff" strokeWidth="1.2"></ellipse>
<circle cx="50" cy="50" fill="#7f5cff" opacity="0.9" r="8"></circle>
<circle className="dot-pulse" cx="75" cy="50" fill="#00eaff" r="3.5"></circle>
<circle className="dot-pulse" cx="25" cy="50" fill="#00eaff" r="3.5" style={{animationDelay: `0.6s`}}></circle>
</svg>
</div>
<a className="inline-block px-8 py-3 rounded-full font-semibold bg-[#00eaff] bg-opacity-10 text-[#00eaff] border border-[#00eaff55] shadow-xl neon-border hover:bg-opacity-20 hover:scale-105 transition text-lg" href="#principios">
        Descubre los Principios
      </a>
</section>
</main>

<section className="max-w-4xl mx-auto py-16 px-4 flex flex-col gap-10 fade-in" id="principios">
<h2 className="text-center text-3xl font-bold quantum-gradient glow mb-10">Principios Fundamentales</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#101929] bg-opacity-80 rounded-2xl p-8 shadow-lg neon-border hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden">
<span className="absolute top-4 right-6 text-[#7f5cff] text-xl opacity-30 group-hover:opacity-60 transition">∞</span>
<h3 className="text-xl font-semibold text-[#00eaff] mb-2">Superposición</h3>
<p className="text-[#b3b3ff]">Las partículas existen en varios estados simultáneamente, colapsando a uno solo al ser observadas.</p>
</div>
<div className="bg-[#101929] bg-opacity-80 rounded-2xl p-8 shadow-lg neon-border hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden">
<span className="absolute top-4 right-6 text-[#00eaff] text-xl opacity-30 group-hover:opacity-60 transition">⚛️</span>
<h3 className="text-xl font-semibold text-[#7f5cff] mb-2">Entrelazamiento</h3>
<p className="text-[#b3b3ff]">Dos partículas pueden vincularse de tal forma que, al cambiar una, la otra responde instantáneamente.</p>
</div>
<div className="bg-[#101929] bg-opacity-80 rounded-2xl p-8 shadow-lg neon-border hover:scale-[1.03] transition-all duration-300 group relative overflow-hidden">
<span className="absolute top-4 right-6 text-[#00eaff] text-xl opacity-30 group-hover:opacity-60 transition">🔹</span>
<h3 className="text-xl font-semibold text-[#00eaff] mb-2">Cuantización</h3>
<p className="text-[#b3b3ff]">La energía se presenta en paquetes discretos llamados cuantos; no existe lo continuo a nivel fundamental.</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto py-16 px-4 fade-in" id="aplicaciones">
<h2 className="text-center text-3xl font-bold quantum-gradient glow mb-12">Aplicaciones Modernas</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="relative bg-[#121f35] rounded-2xl p-8 flex flex-col items-center neon-border shadow-xl hover:scale-[1.04] transition-all duration-300 group overflow-hidden">
<div className="text-4xl mb-3 quantum-gradient group-hover:scale-110 transition">🖥️</div>
<span className="font-semibold text-[#00eaff] text-lg mb-2">Computación Cuántica</span>
<p className="text-[#b3b3ff] text-center text-sm">Procesamiento de información con cubits, resolviendo problemas imposibles para la informática clásica.</p>
<span className="absolute bottom-2 right-4 text-[#00eaff] opacity-10 text-6xl group-hover:opacity-30 transition select-none">Q</span>
</div>
<div className="relative bg-[#121f35] rounded-2xl p-8 flex flex-col items-center neon-border shadow-xl hover:scale-[1.04] transition-all duration-300 group overflow-hidden">
<div className="text-4xl mb-3 quantum-gradient group-hover:scale-110 transition">🔐</div>
<span className="font-semibold text-[#00eaff] text-lg mb-2">Criptografía Cuántica</span>
<p className="text-[#b3b3ff] text-center text-sm">Comunicación absolutamente segura gracias a las leyes físicas, imposible de interceptar sin ser detectada.</p>
<span className="absolute bottom-2 right-4 text-[#7f5cff] opacity-10 text-6xl group-hover:opacity-30 transition select-none">∞</span>
</div>
<div className="relative bg-[#121f35] rounded-2xl p-8 flex flex-col items-center neon-border shadow-xl hover:scale-[1.04] transition-all duration-300 group overflow-hidden">
<div className="text-4xl mb-3 quantum-gradient group-hover:scale-110 transition">🧬</div>
<span className="font-semibold text-[#00eaff] text-lg mb-2">Nuevos Materiales</span>
<p className="text-[#b3b3ff] text-center text-sm">Descubrimiento de superconductores, sensores médicos y avances en biotecnología gracias a la física cuántica.</p>
<span className="absolute bottom-2 right-4 text-[#00eaff] opacity-10 text-6xl group-hover:opacity-30 transition select-none">⊙</span>
</div>
</div>
</section>

<footer className="py-8 text-center text-[#7f5cff] text-sm bg-transparent mt-auto fade-in">
<span className="opacity-60">© 2024 Cuántica Innovadora — Inspirado en la tecnología y el asombro del universo.</span>
</footer>

    </>
  );
}
