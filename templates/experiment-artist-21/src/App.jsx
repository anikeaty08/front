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



        lucide.createIcons();
    
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full h-screen pointer-events-none z-40 p-6 md:p-12 mix-blend-difference text-white">
<a className="pointer-events-auto absolute top-8 left-8 text-2xl font-bold tracking-tighter hover:text-[#EA580C] transition-colors duration-300" href="#">LC.</a>
<div className="absolute top-8 right-8 flex gap-6 md:gap-12 text-lg font-semibold tracking-tight">
<a className="pointer-events-auto hover:rotate-6 hover:text-[#06B6D4] transition-all transform inline-block" href="#">Galería</a>
<a className="pointer-events-auto hover:-rotate-6 hover:text-[#059669] transition-all transform inline-block" href="#">Manifiesto</a>
<a className="pointer-events-auto hover:scale-110 hover:text-[#F59E0B] transition-all transform inline-block" href="#">Contacto</a>
</div>
<div className="absolute bottom-8 right-8 pointer-events-auto">
<button className="bg-white text-black rounded-full p-4 hover:scale-110 transition-transform">
<i data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1E3A8A]">

<div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#06B6D4] to-[#059669] opacity-80 z-0"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(234,88,12,0.6)_0%,_transparent_50%)] z-0 mix-blend-overlay"></div>

<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#92400E] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-3xl opacity-40 animate-drift"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#F59E0B] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-3xl opacity-30 animate-float"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-8 items-center h-full">

<div className="md:col-span-6 relative h-[60vh] md:h-[80vh] flex items-center justify-center order-2 md:order-1">
<div className="relative w-full h-full animate-float">

<div className="absolute inset-0 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden border-4 border-[#06B6D4] shadow-2xl rotate-3">
<img alt="Obra Azul Intensa" className="w-full h-full object-cover scale-110" src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-blue-900/20 mix-blend-color-burn"></div>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#EA580C] rounded-[50%_50%_40%_60%_/_50%_40%_60%_50%] mix-blend-multiply opacity-90 animate-float-delayed z-20 flex items-center justify-center">
<span className="text-white font-bold transform -rotate-12">Nueva<br/>Serie</span>
</div>
</div>
</div>

<div className="md:col-span-6 text-white relative z-20 order-1 md:order-2 flex flex-col items-start justify-center">
<h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mix-blend-lighten mb-4">
                    LAURA<br/>
<span className="text-[#F59E0B] italic font-normal text-6xl md:text-8xl ml-8 md:ml-20">Cárdenas</span>
</h1>
<p className="text-xl md:text-2xl font-light tracking-wide mb-8 max-w-md ml-2 border-l-2 border-[#EA580C] pl-6 py-2">
                    Arte Experimental Contemporáneo.<br/>
<span className="italic text-[#06B6D4]">Donde la naturaleza se transforma en emoción.</span>
</p>

<a className="group relative inline-flex items-center justify-center" href="#collection">
<div className="absolute inset-0 w-48 h-20 bg-[#EA580C] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] group-hover:bg-[#F59E0B] group-hover:scale-110 transition-all duration-300"></div>
<span className="relative z-10 text-white font-bold text-lg tracking-widest uppercase pl-4">Explorar Colección <i className="inline ml-2 w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
</div>
</div>
</header>

<section className="relative py-20 px-6 bg-gradient-to-b from-[#EA580C] to-[#1E3A8A] text-white overflow-hidden">
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center">

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#92400E] rounded-[40%_60%_60%_40%] flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform border border-white/20">
<i className="w-10 h-10 text-white" data-lucide="brush"></i>
</div>
<h3 className="text-2xl font-bold mb-2">Caos Controlado</h3>
<p className="text-sm opacity-80 leading-relaxed max-w-xs">Técnicas únicas de mosaico y superposición gestual.</p>
</div>

<div className="flex flex-col items-center text-center group mt-12 md:mt-0">
<div className="w-28 h-28 bg-[#059669] rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] flex items-center justify-center mb-6 shadow-lg group-hover:-rotate-12 transition-transform border border-white/20">
<i className="w-12 h-12 text-white" data-lucide="leaf"></i>
</div>
<h3 className="text-2xl font-bold mb-2">Naturaleza Viva</h3>
<p className="text-sm opacity-80 leading-relaxed max-w-xs">Fragmentos orgánicos reinterpretados en abstracción.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-[#06B6D4] rounded-[30%_70%_70%_30%] flex items-center justify-center mb-6 shadow-lg group-hover:rotate-180 transition-transform duration-700 border border-white/20">
<i className="w-10 h-10 text-white" data-lucide="map"></i>
</div>
<h3 className="text-2xl font-bold mb-2">Sin Fronteras</h3>
<p className="text-sm opacity-80 leading-relaxed max-w-xs">Obras presentes en colecciones privadas de 6 países.</p>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-5 text-white pointer-events-none whitespace-nowrap">
            ABSTRACTO
        </div>
</section>

<section className="relative py-32 bg-[#e5e5e5] overflow-hidden" id="collection">

<div className="absolute top-20 left-0 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute bottom-20 right-0 w-96 h-96 bg-[#92400E]/20 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<h2 className="text-6xl md:text-8xl font-bold text-[#1E3A8A] mb-20 tracking-tighter text-center md:text-left mix-blend-darken">
                OBRAS <span className="text-[#EA580C] italic font-serif">Destacadas</span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-8">

<div className="md:col-span-7 relative group cursor-pointer">
<div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden rotate-1 transition-all duration-500 group-hover:rotate-0 shadow-xl">
<img alt="Abstract Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1E3A8A]/0 group-hover:bg-[#1E3A8A]/60 transition-colors duration-300 flex items-center justify-center">
<span className="text-4xl font-bold text-white opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300">$2,400 USD</span>
</div>
</div>
<h3 className="absolute -bottom-10 -right-4 text-3xl font-bold text-[#92400E] bg-white px-4 py-2 rotate-2 shadow-lg z-20">Explosión Floral</h3>
</div>

<div className="md:col-span-4 md:col-start-9 md:mt-20 relative group cursor-pointer">
<div className="relative aspect-[3/4] rounded-[50px_20px_50px_20px] overflow-hidden -rotate-2 transition-all duration-500 group-hover:rotate-0 shadow-xl border-4 border-[#059669]">
<img alt="Abstract Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#059669]/0 group-hover:bg-[#059669]/60 transition-colors duration-300 flex items-center justify-center">
<span className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100">$1,800 USD</span>
</div>
</div>
<h3 className="absolute -top-6 -left-8 text-2xl font-bold text-[#1E3A8A] bg-[#F59E0B] px-4 py-1 -rotate-3 z-20">Mareas Bajas</h3>
</div>

<div className="md:col-span-3 md:col-start-2 md:-mt-32 relative group cursor-pointer z-30">
<div className="relative w-full aspect-square rounded-full overflow-hidden hover:scale-110 transition-all duration-500 shadow-2xl border-4 border-white">
<img alt="Abstract Art" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#EA580C]/0 group-hover:bg-[#EA580C]/70 transition-colors duration-300 flex items-center justify-center">
<span className="text-xl font-bold text-white opacity-0 group-hover:opacity-100">$850 USD</span>
</div>
</div>
</div>

<div className="md:col-span-6 md:col-start-5 md:mt-12 relative group cursor-pointer">
<div className="relative aspect-video rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden rotate-1 transition-all duration-500 group-hover:rotate-3 shadow-xl hover:shadow-2xl">
<img alt="Abstract Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#92400E]/0 group-hover:bg-[#92400E]/70 transition-colors duration-300 flex items-center justify-center">
<span className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100">$3,200 USD</span>
</div>
</div>
<h3 className="absolute bottom-4 left-10 text-4xl font-black text-white mix-blend-difference">Horizonte de Fuego</h3>
</div>

<div className="md:col-span-12 relative mt-20 h-24 overflow-visible pointer-events-none">
<div className="absolute top-0 left-[-10%] w-[120%] h-40 bg-[#1E3A8A] opacity-90 rotate-2 transform skew-y-3"></div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#1E3A8A] text-[#f0f0f0] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-[#000000] via-[#1E3A8A] to-[#059669] opacity-90"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1">
<div className="w-full aspect-[4/5] rounded-[40%_60%_70%_30%_/_40%_30%_70%_60%] overflow-hidden border-8 border-[#F59E0B] rotate-2 shadow-2xl">
<img alt="Laura Artist" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-4 w-32 h-32 bg-[#06B6D4] rounded-full flex items-center justify-center text-center p-4 font-bold text-[#1E3A8A] leading-tight shadow-lg animate-float">
                    Alma<br/>Mexicana
                </div>
</div>

<div className="order-1 md:order-2">
<h2 className="text-6xl font-bold mb-8 leading-none tracking-tight">
                    MÁS ALLÁ DEL<br/>
<span className="text-[#EA580C] text-7xl font-serif italic">Lienzo</span>
</h2>
<div className="space-y-6 text-xl font-light leading-relaxed">
<p className="pl-6 border-l-4 border-[#059669]">
                        Mi estudio es un laboratorio. No busco la perfección, busco la <span className="text-[#F59E0B] font-bold">energía pura</span>. Cada obra es un diálogo entre el control y el accidente.
                    </p>
<p>
                        Desde los pigmentos naturales hasta los acrílicos industriales, mi trabajo explora la tensión de la vida moderna.
                    </p>
</div>
<div className="mt-12">
<a className="inline-block relative px-10 py-4 font-bold text-white transition-transform hover:-translate-y-1" href="#">
<span className="absolute inset-0 bg-[#EA580C] rounded-[10px_30px_10px_40px] rotate-2"></span>
<span className="relative">Leer Bio Completa</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#fff] relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-5xl font-bold text-center mb-20 text-[#1E3A8A]">PROCESOS <span className="font-serif italic text-[#92400E]">Creativos</span></h2>
<div className="flex flex-wrap justify-center gap-10 md:gap-20">

<div className="relative w-80 h-96 group">
<div className="absolute inset-0 bg-[#1E3A8A] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-90 transition-all duration-300 group-hover:rounded-[50%]"></div>
<img alt="Texture" className="absolute inset-0 w-full h-full object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
<i className="w-12 h-12 mb-4" data-lucide="layers"></i>
<h3 className="text-2xl font-bold">Superposición</h3>
<p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Capas de historia y color.</p>
</div>
</div>

<div className="relative w-80 h-96 group mt-12 md:mt-0">
<div className="absolute inset-0 bg-[#059669] rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] opacity-90 transition-all duration-300 group-hover:rounded-[50%]"></div>
<img alt="Texture" className="absolute inset-0 w-full h-full object-cover rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] opacity-40 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
<i className="w-12 h-12 mb-4" data-lucide="droplets"></i>
<h3 className="text-2xl font-bold">Goteo (Drip)</h3>
<p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Gravedad como herramienta.</p>
</div>
</div>

<div className="relative w-80 h-96 group">
<div className="absolute inset-0 bg-[#EA580C] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-90 transition-all duration-300 group-hover:rounded-[50%]"></div>
<img alt="Texture" className="absolute inset-0 w-full h-full object-cover rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] opacity-40 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
<i className="w-12 h-12 mb-4" data-lucide="palette"></i>
<h3 className="text-2xl font-bold">Pigmento Puro</h3>
<p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Saturación máxima.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#f4f4f4] border-t border-[#d4d4d4] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B] rounded-full blur-[100px] opacity-20"></div>
<p className="text-center font-bold tracking-widest text-[#92400E] mb-12 uppercase">Exhibida en</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-3xl font-serif font-black tracking-tighter">Art Basel</span>
<span className="text-2xl font-mono font-bold">MOMA <span className="text-xs align-top">Shop</span></span>
<span className="text-3xl font-sans font-black italic">ZONA MACO</span>
<span className="text-2xl font-serif font-bold border-b-2 border-black">Gagosian</span>
</div>
</div>
</section>

<section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

<img alt="Large Art Piece" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent mix-blend-multiply"></div>
<div className="relative z-10 text-center px-4">
<h2 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none shadow-black drop-shadow-lg">
                ARTE <span className="text-[#06B6D4] italic">Único</span><br/>
                PARA TU ESPACIO
            </h2>
<a className="inline-block group mt-8" href="#">
<div className="relative w-64 h-64 flex items-center justify-center">
<div className="absolute inset-0 bg-[#EA580C] rounded-full blur-md group-hover:blur-lg group-hover:bg-[#F59E0B] transition-all duration-300 animate-pulse"></div>
<div className="absolute inset-2 bg-gradient-to-br from-[#EA580C] to-[#92400E] rounded-full flex items-center justify-center border-4 border-white/20">
<span className="text-2xl font-bold text-white uppercase tracking-widest text-center leading-none">Adquirir<br/>Obra</span>
</div>
</div>
</a>
</div>
</section>

<footer className="bg-[#0f172a] text-white pt-24 pb-12 relative overflow-hidden">

<div className="absolute top-[-50px] left-0 w-full h-24 bg-[#0f172a] rounded-[50%_50%_0_0_/_100%_100%_0_0] scale-x-110"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
<div className="md:col-span-2">
<a className="text-5xl font-bold tracking-tighter mb-6 inline-block hover:text-[#06B6D4] transition-colors" href="#">LC.</a>
<p className="max-w-sm text-gray-400 text-lg">
                    Arte que desafía la forma y celebra el color. Cada pieza es un universo contenido en lienzo.
                </p>
</div>
<div>
<h4 className="font-bold text-[#EA580C] mb-6 uppercase tracking-widest">Explorar</h4>
<ul className="space-y-4 text-lg">
<li><a className="hover:pl-2 transition-all hover:text-[#F59E0B]" href="#">Obras Disponibles</a></li>
<li><a className="hover:pl-2 transition-all hover:text-[#F59E0B]" href="#">Ediciones Limitadas</a></li>
<li><a className="hover:pl-2 transition-all hover:text-[#F59E0B]" href="#">Exposiciones</a></li>
<li><a className="hover:pl-2 transition-all hover:text-[#F59E0B]" href="#">Prensa</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-[#EA580C] mb-6 uppercase tracking-widest">Conectar</h4>
<div className="flex gap-4">
<a className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-colors" href="#">
<i data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1DA1F2] transition-colors" href="#">
<i data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#EA580C] transition-colors" href="#">
<i data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="text-center mt-20 pt-10 border-t border-white/10 text-gray-500 text-sm">
            © 2023 Laura Cárdenas Studio. Todos los derechos reservados. Diseño Experimental.
        </div>
</footer>


    </>
  );
}
