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
serif: ['"DM Serif Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
sand: {
50: '#FAF9F7',
100: '#F0EBE5',
200: '#E6DDD3',
300: '#D6C7B5',
},
earth: {
400: '#A68A76',
500: '#9C7E6A',
600: '#8C705F',
800: '#543D32',
900: '#3D2B24',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
},
animation: {
'float': 'float 6s ease-in-out infinite',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'spin-slow': 'spin 15s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
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
      

<div className="fixed inset-0 bg-noise opacity-60 pointer-events-none z-[60] mix-blend-multiply"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-sand-50/80 border-b border-earth-900/5">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-2xl tracking-tighter text-earth-900 hover:opacity-70 transition-opacity" href="#">CEC<span className="text-earth-500">.</span></a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-earth-800/80">
<a className="hover:text-earth-600 transition-colors" href="#concepto">Concepto</a>
<a className="hover:text-earth-600 transition-colors" href="#speakers">Speakers</a>
<a className="hover:text-earth-600 transition-colors" href="#agenda">Agenda</a>
<a className="hover:text-earth-600 transition-colors" href="#experiencia">Experiencia</a>
<a className="hover:text-earth-600 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex bg-earth-900 text-sand-50 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-earth-800 hover:shadow-lg hover:shadow-earth-900/10 hover:-translate-y-0.5" href="#registro">
                Reservar Lugar
            </a>
</div>
</nav>

<header className="min-h-screen flex flex-col pt-20 relative overflow-hidden justify-center items-center">

<div className="absolute top-1/4 -left-20 w-64 h-64 bg-earth-300/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-earth-400/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 -mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-earth-900/10 bg-white/30 backdrop-blur-sm animate-fade-up" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-earth-600 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-earth-600 font-semibold">Conferencia 2025</span>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-[9.5rem] leading-[0.85] text-earth-900 tracking-tighter text-balance animate-fade-up [animation-delay:100ms]">
                Cuando estoy <br/>
<span className="italic text-earth-500 relative inline-block" style={{}}>
                    contigo
                    <svg className="absolute w-full h-3 -bottom-1 md:-bottom-4 left-0 text-earth-300 -z-10" preserveaspectratio="none" viewbox="0 0 100 20"><path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</span>
</h1>
<p className="text-earth-800/70 md:text-xl animate-fade-up [animation-delay:200ms] text-lg font-light tracking-wide max-w-lg mr-auto ml-auto" style={{}}>Salmo 73: 25-26</p>

<div className="grid grid-cols-4 gap-6 md:gap-12 max-w-lg mx-auto pt-6 animate-fade-up [animation-delay:300ms]">
<div className="text-center group cursor-default">
<span className="font-serif text-4xl text-earth-900 group-hover:text-earth-600 transition-colors">23</span>
<span className="block text-[10px] uppercase tracking-widest text-earth-500 mt-1">Días</span>
</div>
<div className="text-center group cursor-default">
<span className="font-serif text-4xl text-earth-900 group-hover:text-earth-600 transition-colors">08</span>
<span className="block text-[10px] uppercase tracking-widest text-earth-500 mt-1">Hrs</span>
</div>
<div className="text-center group cursor-default">
<span className="font-serif text-4xl text-earth-900 group-hover:text-earth-600 transition-colors">45</span>
<span className="block text-[10px] uppercase tracking-widest text-earth-500 mt-1">Min</span>
</div>
<div className="text-center group cursor-default">
<span className="font-serif text-4xl text-earth-900 group-hover:text-earth-600 transition-colors">12</span>
<span className="block text-[10px] uppercase tracking-widest text-earth-500 mt-1">Seg</span>
</div>
</div>
</div>

<div className="w-full absolute bottom-0 left-0 pointer-events-none z-0">
<svg className="w-full h-auto min-h-[150px]" preserveaspectratio="none" viewbox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
<path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#E6DDD3" fillOpacity="0.5"></path>
<path d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,234.7C672,256,768,288,864,277.3C960,267,1056,213,1152,202.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff" fillOpacity="1"></path>
</svg>
</div>
</header>

<section className="bg-white pt-24 pb-24 relative" id="concepto">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-2 md:order-1">
<div className="inline-flex items-center gap-3">
<span className="h-[1px] w-12 bg-earth-400"></span>
<span className="text-earth-500 font-semibold text-xs tracking-widest uppercase">La Visión</span>
</div>
<h2 className="font-serif text-5xl md:text-6xl text-earth-900 leading-[1.1]">
                    Despojar el ruido,<br/>encontrar <span className="italic text-earth-500">la paz</span>
</h2>
<div className="space-y-6 text-earth-800/70 font-light text-lg leading-relaxed">
<p className="">Vivimos saturadas de información y expectativas. "Cuando estoy contigo" no es una conferencia para hacer más, sino un espacio para ser. </p>
<p className="">Diseñamos cada momento —desde la música hasta el café— para crear una atmósfera donde puedas bajar la guardia y respirar profundo.</p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-earth-900 font-medium border-b border-earth-300 hover:border-earth-900 transition-colors pb-1" href="#experiencia">
                        Descubre la experiencia <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m7 7l10 10m0-10v10H7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="relative order-1 md:order-2 h-[550px] w-full group">

<div className="absolute inset-0 mask-arch overflow-hidden shadow-2xl z-10 bg-sand-200">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>

<div className="absolute -bottom-6 -left-6 z-20 bg-sand-50 p-6 rounded-full shadow-xl animate-spin-slow hidden md:block border border-earth-100">
<svg className="w-28 h-28 text-earth-900" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="curve"></path>
<text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-current">
<textpath style={{}} xlink:href="#curve">Renovación • Espiritual • Pausa •</textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-earth-500 iconify--lucide" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sand-50 relative" id="speakers">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-earth-500 font-semibold text-xs tracking-widest uppercase mb-2 block">Invitadas 2025</span>
<h2 className="font-serif text-5xl text-earth-900">Voces que <span className="italic text-earth-500">inspiran</span></h2>
</div>
<p className="text-earth-800/60 max-w-md text-sm leading-relaxed text-right md:text-left">
                    Mujeres que han caminado por el desierto y han encontrado manantiales. Sus historias te desafiarán.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative">
<div className="aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative">
<div className="absolute inset-0 bg-earth-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1609172265063-e3b8a927a3c3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl text-earth-900">Elena Vasquez</h3>
<p className="text-earth-500 italic font-serif mb-2">"Restaurando el Altar"</p>
<div className="w-full h-[1px] bg-earth-200 mx-auto my-4 max-w-[50px]"></div>
<p className="text-xs text-earth-800/60 font-medium uppercase tracking-wider">Autora &amp; Conferencista</p>
</div>
</div>

<div className="group relative md:-mt-12">
<div className="aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative shadow-xl">
<div className="absolute inset-0 bg-earth-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534008770281-7996c5683935?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute top-4 right-4 bg-sand-50/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-earth-900 z-20">Keynote</div>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl text-earth-900">Sofia M. Ruiz</h3>
<p className="text-earth-500 italic font-serif mb-2">"Identidad en el Desierto"</p>
<div className="w-full h-[1px] bg-earth-200 mx-auto my-4 max-w-[50px]"></div>
<p className="text-xs text-earth-800/60 font-medium uppercase tracking-wider">Psicóloga Clínica</p>
</div>
</div>

<div className="group relative">
<div className="aspect-[3/4] overflow-hidden rounded-t-[100px] rounded-b-2xl mb-6 relative">
<div className="absolute inset-0 bg-earth-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl text-earth-900">Banda CEC</h3>
<p className="text-earth-500 italic font-serif mb-2">Worship Experience</p>
<div className="w-full h-[1px] bg-earth-200 mx-auto my-4 max-w-[50px]"></div>
<p className="text-xs text-earth-800/60 font-medium uppercase tracking-wider">Colectivo Musical</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-earth-100" id="agenda">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-earth-500 font-semibold text-xs tracking-widest uppercase">Itinerario</span>
<h2 className="font-serif text-4xl text-earth-900 mt-2">Sábado 15 de Noviembre</h2>
</div>
<div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-earth-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-earth-200 bg-sand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<svg aria-hidden="true" className="iconify text-earth-600 iconify--lucide" data-icon="lucide:coffee" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-sand-50 p-6 rounded-2xl border border-earth-100 hover:border-earth-300 transition-colors">
<div className="flex justify-between items-start mb-1">
<span className="font-serif text-xl text-earth-900">Registro &amp; Café</span>
<span className="text-xs font-bold text-earth-500 bg-earth-100/50 px-2 py-1 rounded">08:00 AM</span>
</div>
<p className="text-earth-800/60 text-sm">Recoge tu Welcome Kit y disfruta de un café de especialidad antes de iniciar.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-earth-200 bg-sand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<svg aria-hidden="true" className="iconify text-earth-600 iconify--lucide" data-icon="lucide:music" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></g></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-sand-50 p-6 rounded-2xl border border-earth-100 hover:border-earth-300 transition-colors">
<div className="flex justify-between items-start mb-1">
<span className="font-serif text-xl text-earth-900">Sesión 1: Apertura</span>
<span className="text-xs font-bold text-earth-500 bg-earth-100/50 px-2 py-1 rounded">09:30 AM</span>
</div>
<p className="text-earth-800/60 text-sm">Adoración con Banda CEC y mensaje de bienvenida.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-earth-200 bg-sand-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<svg aria-hidden="true" className="iconify text-earth-600 iconify--lucide" data-icon="lucide:mic" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-sand-50 p-6 rounded-2xl border border-earth-100 hover:border-earth-300 transition-colors">
<div className="flex justify-between items-start mb-1">
<span className="font-serif text-xl text-earth-900">Plenaria Principal</span>
<span className="text-xs font-bold text-earth-500 bg-earth-100/50 px-2 py-1 rounded">11:00 AM</span>
</div>
<p className="text-earth-800/60 text-sm">Elena Vasquez: "Restaurando el Altar".</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-earth-900 text-sand-50 relative overflow-hidden" id="experiencia">

<div className="absolute top-0 right-0 opacity-10 pointer-events-none w-full h-full">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path d="M0 100 C 30 20 60 20 100 100 Z" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-12 text-center md:text-left">
<span className="text-sand-300 font-medium text-xs tracking-widest uppercase">The Vibe</span>
<h3 className="font-serif text-4xl lg:text-5xl text-sand-50 mt-2">Estética y <span className="italic text-sand-300">Corazón</span></h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bg-earth-800/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:bg-earth-800 transition-colors duration-500">
<div className="absolute top-8 right-8 text-sand-300 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h4 className="font-serif text-3xl mb-2 text-sand-50">Welcome Kit</h4>
<p className="text-sand-200/80 font-light" style={{}}>Tote bag exclusiva, journal de oración personalizado y regalos curados de nuestros sponsors. Diseñado para usarse todo el año.</p>
<div className="mt-6 w-full h-48 rounded-xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 bg-sand-100/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between group hover:bg-white/10 transition-colors">
<div className="space-y-2">
<h4 className="font-serif text-2xl text-sand-50">Specialty Coffee</h4>
<p className="text-sm text-sand-200/70">Baristas ilimitados. Lattes con arte.</p>
</div>
<svg aria-hidden="true" className="iconify text-sand-300 group-hover:scale-110 transition-transform iconify--lucide" data-icon="lucide:coffee" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="md:col-span-1 md:row-span-1 bg-sand-100/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors">
<div className="bg-white/10 p-4 rounded-full mb-4 text-sand-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:camera" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</div>
<h4 className="font-serif text-xl text-sand-50">Photo Spots</h4>
<p className="text-xs text-sand-200/70 mt-2">#CoquetteVibes</p>
</div>

<div className="md:col-span-1 md:row-span-1 bg-earth-600 border border-white/10 rounded-3xl p-6 flex flex-col justify-between group overflow-hidden">
<div className="absolute inset-0 bg-earth-900/20 mix-blend-overlay"></div>
<svg aria-hidden="true" className="iconify text-sand-100 relative z-10 iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<div className="relative z-10">
<h4 className="font-serif text-xl text-sand-50">Community</h4>
<p className="text-xs text-sand-100/80 mt-1">Conecta con amigas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6 mb-10 flex justify-between items-end">
<div>
<span className="text-earth-500 font-semibold text-xs tracking-widest uppercase">Testimonios</span>
<h2 className="font-serif text-4xl text-earth-900 mt-2">Lo que dicen <span className="italic text-earth-500">ellas</span></h2>
</div>

<div className="flex gap-2">
<div className="w-8 h-8 rounded-full border border-earth-200 flex items-center justify-center text-earth-400"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-left" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="w-8 h-8 rounded-full bg-earth-900 text-sand-50 flex items-center justify-center"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-10 no-scrollbar snap-x snap-mandatory max-w-[1600px] mx-auto">

<div className="min-w-[320px] md:min-w-[400px] bg-sand-50 p-8 rounded-2xl border border-earth-100 snap-center hover:border-earth-300 transition-colors">
<div className="text-earth-300 mb-4"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:quote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<p className="text-earth-800/80 font-light italic mb-6 leading-relaxed text-lg">"Fue un fin de semana que marcó un antes y un después en mi relación con Dios. Los detalles, el café, todo increíblemente cuidado."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover grayscale" src="https://randomuser.me/api/portraits/women/44.jpg" style={{}}/>
<div>
<p className="font-serif text-earth-900 text-sm">Ana Lucía</p>
<p className="text-[10px] uppercase tracking-wider text-earth-500" style={{}}>Asistente 2024</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] bg-sand-50 p-8 rounded-2xl border border-earth-100 snap-center hover:border-earth-300 transition-colors">
<div className="text-earth-300 mb-4"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:quote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<p className="text-earth-800/80 font-light italic mb-6 leading-relaxed text-lg">"Fui sola porque soy nueva en la ciudad y salí con un grupo de amigas precioso. El ambiente es acogedor y nada religioso."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover grayscale" src="https://randomuser.me/api/portraits/women/28.jpg"/>
<div>
<p className="font-serif text-earth-900 text-sm">Mariana G.</p>
<p className="text-[10px] uppercase tracking-wider text-earth-500" style={{}}>Estudiante</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] bg-sand-50 p-8 rounded-2xl border border-earth-100 snap-center hover:border-earth-300 transition-colors">
<div className="text-earth-300 mb-4"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:quote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<p className="text-earth-800/80 font-light italic mb-6 leading-relaxed text-lg">"Necesitaba este respiro. Salí con el corazón lleno y nuevas fuerzas. ¡Ya tengo mi entrada para este año!"</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover grayscale" src="https://randomuser.me/api/portraits/women/65.jpg"/>
<div>
<p className="font-serif text-earth-900 text-sm">Carla Méndez</p>
<p className="text-[10px] uppercase tracking-wider text-earth-500" style={{}}>Emprendedora</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sand-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-serif text-4xl text-center text-earth-900 mb-12">Preguntas Frecuentes</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-earth-100 overflow-hidden transition-all duration-300 hover:shadow-md open:shadow-md">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-earth-900 select-none">
                        ¿Cuál es el código de vestimenta?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-earth-400"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</summary>
<div className="px-6 pb-6 text-earth-800/70 text-sm leading-relaxed border-t border-dashed border-earth-100 pt-4">
                        El estilo es "Smart Casual" o "Coquette Casual" en tonos tierra/neutros. Queremos que te sientas cómoda pero arreglada para la ocasión. ¡Habrá muchos spots para fotos!
                    </div>
</details>
<details className="group bg-white rounded-xl border border-earth-100 overflow-hidden transition-all duration-300 hover:shadow-md open:shadow-md">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-earth-900 select-none">
                        ¿Habrá cuidado de niños?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-earth-400"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</summary>
<div className="px-6 pb-6 text-earth-800/70 text-sm leading-relaxed border-t border-dashed border-earth-100 pt-4">
                        Este evento está diseñado para tu descanso total, por lo que no contaremos con área de niños. Es un tiempo exclusivamente para ti.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-earth-100 overflow-hidden transition-all duration-300 hover:shadow-md open:shadow-md">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-earth-900 select-none">
                        ¿Qué incluye el ticket?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-earth-400"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</summary>
<div className="px-6 pb-6 text-earth-800/70 text-sm leading-relaxed border-t border-dashed border-earth-100 pt-4">
                        Acceso a todas las conferencias y talleres, Welcome Kit (Tote bag + Journal), Coffee Break ilimitado y acceso a la experiencia de adoración.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="registro">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sand-100 via-white to-white"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 space-y-6 text-center md:text-left">
<h2 className="font-serif text-6xl text-earth-900 tracking-tighter">Tu lugar<br/>te espera</h2>
<p className="text-lg text-earth-800/70 font-light max-w-md mx-auto md:mx-0">
                    No dejes pasar esta oportunidad de renovación. El cupo es limitado para mantener la intimidad del evento.
                </p>
<div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-60 grayscale mt-8">
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> Pago Seguro</div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:ticket" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Ticket Digital</div>
</div>
</div>
<div className="md:w-1/2 w-full">
<div className="relative max-w-sm mx-auto group">

<div className="absolute -inset-1 bg-gradient-to-r from-earth-300 to-earth-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

<div className="relative bg-sand-50 border border-sand-200 rounded-[1.8rem] p-8 md:p-10 shadow-2xl">

<div className="absolute top-1/2 -left-3 w-6 h-6 bg-white rounded-full"></div>
<div className="absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full"></div>
<div className="flex justify-between items-start mb-8 border-b border-dashed border-earth-300 pb-8">
<div>
<span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-earth-500 mb-2" style={{}}>Pase General</span>
<span className="font-serif text-4xl text-earth-900">Acceso Total</span>
<ul className="mt-4 space-y-2 text-sm text-earth-600">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-earth-400 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Conferencias</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-earth-400 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Welcome Kit</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-earth-400 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Coffee Break</li>
</ul>
</div>
</div>
<div className="flex items-end justify-between mb-6">
<span className="text-sm text-earth-500 font-medium">Precio final</span>
<span className="font-serif text-5xl text-earth-900">Q125</span>
</div>
<button className="w-full bg-earth-900 text-sand-50 py-4 rounded-xl font-medium tracking-wide hover:bg-earth-800 transition-all duration-300 shadow-lg shadow-earth-900/20 flex items-center justify-center gap-2 group/btn relative overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                            COMPRAR AHORA <svg aria-hidden="true" className="iconify group-hover/btn:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-earth-900 text-sand-200 pt-20 pb-28 md:pb-10 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="space-y-4">
<p className="font-serif text-4xl text-sand-50">Cuando estoy contigo</p>
<p className="text-sand-200/60 font-light max-w-xs" style={{}}>Conferencia de Mujeres 2025. <br/>Un evento para el alma.</p>
</div>
<div className="flex gap-12 text-sm">
<div className="flex flex-col gap-4">
<span className="font-bold text-sand-50 uppercase tracking-widest text-xs">Evento</span>
<a className="hover:text-white transition-colors" href="#speakers">Speakers</a>
<a className="hover:text-white transition-colors" href="#agenda">Agenda</a>
<a className="hover:text-white transition-colors" href="#faq">Ayuda</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-bold text-sand-50 uppercase tracking-widest text-xs">Social</span>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg> Instagram</a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Facebook</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40">
<p>© 2025 Iglesia CEC. Todos los derechos reservados.</p>
<div className="flex gap-4">
<a href="#">Privacidad</a>
<a href="#">Términos</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:hidden z-40">
<a className="flex items-center justify-between px-6 py-4 bg-earth-900/90 backdrop-blur-md text-sand-50 rounded-full shadow-2xl border border-white/10 group" href="#registro">
<span className="font-serif text-lg">Inscribirme</span>
<span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full group-hover:bg-white/20 transition-colors">
                Q125 <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
</div>

    </>
  );
}
