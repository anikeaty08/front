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
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
brand: ['Montserrat', 'sans-serif'],
},
colors: {
brand: {
dark: '#191818',    // Your Charcoal
gold: '#E6B546',    // Your Gold
cream: '#F3EFE9',   // Your Cream
goldDim: '#B38D36', // Darker shade for gradients
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'draw': 'draw 2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
'fade-in': 'fadeIn 1.2s ease-out forwards',
'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
draw: {
'0%': { strokeDashoffset: '100' },
'100%': { strokeDashoffset: '0' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(40px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2600&amp;auto=format&amp;fit=crop')] opacity-[0.07] grayscale mix-blend-overlay"></div>

<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-brand-dark/30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark"></div>

<div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] bg-brand-gold/5 rounded-full blur-[150px] animate-pulse-slow"></div>

<div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
</div>

<header className="relative z-50 w-full pt-8 px-6 md:px-12 border-b border-white/[0.03]">
<div className="max-w-[1400px] mx-auto flex items-center justify-between h-14">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8">
<svg className="w-full h-full stroke-brand-gold stroke-[5] fill-none" style={{strokeLinecap: 'square'}} viewbox="0 0 100 100">
<path className="origin-center group-hover:rotate-180 transition-transform duration-700 ease-out" d="M 60 20 A 30 30 0 1 0 60 80"></path>
<line x1="60" x2="85" y1="20" y2="85"></line>
<line x1="35" x2="70" y1="52" y2="52"></line>
</svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-serif tracking-tight text-brand-cream leading-none group-hover:text-brand-gold transition-colors duration-300">CÓRDOVA</span>
<span className="text-[0.6rem] font-brand font-medium tracking-[0.25em] text-brand-gold leading-none mt-1 opacity-80">ABOGADOS</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-10">
<a className="text-[13px] font-medium text-brand-cream/60 hover:text-brand-gold transition-colors tracking-wide" href="#">La Firma</a>
<a className="text-[13px] font-medium text-brand-cream/60 hover:text-brand-gold transition-colors tracking-wide" href="#">Equipo</a>
<a className="text-[13px] font-medium text-brand-cream/60 hover:text-brand-gold transition-colors tracking-wide" href="#">Áreas</a>
<a className="px-5 py-2 rounded-sm border border-brand-cream/10 text-[13px] font-medium text-brand-cream hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-300" href="#">
                    Contacto
                </a>
</nav>

<button className="md:hidden text-brand-cream hover:text-brand-gold transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</header>

<main className="relative z-10 w-full min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-10 pb-20">
<div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
<div className="opacity-0 animate-slide-up">

<div className="inline-flex items-center gap-3 mb-8 pl-1">
<span className="h-[1px] w-8 bg-brand-gold/60"></span>
<span className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase">Excelencia Legal</span>
</div>

<h1 className="font-serif text-5xl md:text-7xl xl:text-8xl text-brand-cream leading-[0.95] tracking-tight mb-8 gold-glow">
                        Defensa <br/>
<span className="italic font-light text-brand-gold opacity-90">Integral</span> &amp; 
                        <span className="relative">
                            Estratégica
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-gold/30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>
<p className="text-lg text-brand-cream/60 font-light leading-relaxed max-w-lg mb-12 border-l border-brand-gold/20 pl-6">
                        Tres generaciones unidas por una misma pasión. Combinamos la tradición jurídica con una visión innovadora para proteger su legado.
                    </p>

<div className="flex flex-wrap items-center gap-6">
<a className="group flex items-center gap-3 bg-brand-gold text-brand-dark px-8 py-3.5 rounded-[2px] text-sm font-semibold tracking-wide hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(230,181,70,0.2)]" href="#">
<span>AGENDAR CONSULTA</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="group px-6 py-3.5 rounded-[2px] border border-brand-cream/10 text-sm font-medium text-brand-cream hover:bg-brand-cream/5 hover:border-brand-cream/30 transition-all flex items-center gap-2" href="#">
<span>Conoce la Firma</span>
</a>
</div>
</div>

<div className="mt-20 grid grid-cols-3 gap-8 border-t border-brand-cream/5 pt-8 max-w-md opacity-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
<div>
<p className="text-3xl font-serif text-brand-cream mb-1">70+</p>
<p className="text-[10px] uppercase tracking-widest text-brand-cream/40">Años de Exp.</p>
</div>
<div>
<p className="text-3xl font-serif text-brand-cream mb-1">3ª</p>
<p className="text-[10px] uppercase tracking-widest text-brand-cream/40">Generación</p>
</div>
<div>
<p className="text-3xl font-serif text-brand-cream mb-1">98%</p>
<p className="text-[10px] uppercase tracking-widest text-brand-cream/40">Éxito</p>
</div>
</div>
</div>

<div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-10 lg:mb-0 perspective-1000">
<div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/5 rounded-full blur-3xl"></div>
<svg className="w-full h-full gold-glow-strong" viewbox="0 0 200 200">
<defs>
<lineargradient id="goldGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#F3EFE9', stopOpacity: '1'}}></stop> 
<stop offset="40%" style={{stopColor: '#E6B546', stopOpacity: '1'}}></stop> 
<stop offset="100%" style={{stopColor: '#B38D36', stopOpacity: '1'}}></stop> 
</lineargradient>
</defs>

<circle className="animate-[spin_20s_linear_infinite]" cx="100" cy="100" fill="none" r="90" stroke="#E6B546" stroke-dasharray="4 4" stroke-opacity="0.2" strokeWidth="0.5" style={{transformOrigin: 'center'}}>
</circle>

<g fill="none" stroke="url(#goldGradient)" strokeLinecap="square" strokeWidth="2.5" transform="translate(0,0)">

<path className="logo-path" d="M 110 45 A 55 55 0 1 0 110 155" style={{strokeDasharray: '400', strokeDashoffset: '400', animation: 'draw 2s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.3s'}}>
</path>

<line className="logo-path" style={{strokeDasharray: '200', strokeDashoffset: '200', animation: 'draw 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.8s'}} x1="110" x2="155" y1="45" y2="155">
</line>

<line className="logo-path" style={{strokeDasharray: '100', strokeDashoffset: '100', animation: 'draw 1s cubic-bezier(0.22, 1, 0.36, 1) forwards 1.2s', opacity: '0.8'}} x1="75" x2="135" y1="105" y2="105">
</line>
</g>

<circle className="animate-ping opacity-75" cx="155" cy="155" fill="#E6B546" r="3"></circle>
<circle cx="110" cy="45" fill="#F3EFE9" r="2"></circle>
</svg>

<div className="absolute -bottom-6 -left-6 bg-brand-cream/5 backdrop-blur-md border border-brand-cream/10 p-4 rounded-md shadow-2xl opacity-0 animate-slide-up" style={{animationDelay: '1.5s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
<i className="w-4 h-4" data-lucide="scale"></i>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-brand-cream/50">Especialidad</div>
<div className="text-xs font-serif text-brand-cream">Derecho Corporativo</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-brand-cream">Descubre</span>
<i className="w-4 h-4 text-brand-gold" data-lucide="chevron-down"></i>
</div>

<div className="absolute bottom-0 w-full z-20 border-t border-brand-cream/5 bg-brand-dark/50 backdrop-blur-sm">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
<div className="flex justify-between items-center text-xs text-brand-cream/40 font-brand tracking-wider uppercase">
<span className="hidden md:inline">© 2024 Córdova Abogados</span>
<div className="flex gap-8">
<span className="hover:text-brand-gold transition-colors cursor-pointer">Integridad</span>
<span className="hover:text-brand-gold transition-colors cursor-pointer">Excelencia</span>
<span className="hover:text-brand-gold transition-colors cursor-pointer">Compromiso</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
