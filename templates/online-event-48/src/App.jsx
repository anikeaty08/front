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
colors: {
slate: {
850: '#151e2e',
}
},
boxShadow: {
'glow': '0 0 40px -10px rgba(14, 165, 233, 0.15)',
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
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
      

<section className="min-h-screen flex flex-col overflow-hidden pt-20 pr-4 pb-20 pl-4 relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b to-transparent rounded-[100%] blur-3xl opacity-60 from-indigo-50/50"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-t to-transparent rounded-full blur-3xl opacity-40 from-cyan-50/30"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>
<div className="z-10 animate-fade-in text-center w-full max-w-2xl mr-auto ml-auto relative space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-subtle mb-4 bg-white border-neutral-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500">Evento Online Gratuito</span>
</div>

<div className="space-y-4">
<h1 className="md:text-7xl leading-[0.95] text-5xl tracking-tight font-serif text-neutral-900" style={{}}>Recomenzar <br/> <span className="italic text-gradient-brand">para Sanar</span></h1>
<p className="text-base md:text-lg text-neutral-500 font-light max-w-lg mx-auto leading-relaxed">
                    Un viaje de 3 días hacia la restauración de tu identidad y el descubrimiento de tu verdad redimida.
                </p>
<div className="flex items-center justify-center gap-6 text-sm font-medium text-neutral-800">
<span className="flex items-center gap-1.5"><svg aria-hidden="true" className="iconify text-sky-500 iconify--lucide" data-icon="lucide:calendar" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg> 26, 28 y 30 Enero</span>
<span className="flex items-center gap-1.5"><svg aria-hidden="true" className="iconify text-sky-500 iconify--lucide" data-icon="lucide:clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> 7:00 PM CDMX</span>
</div>
</div>

<div className="mt-10 p-2 rounded-2xl shadow-xl border max-w-md mx-auto transform transition-all hover:scale-[1.01] bg-white shadow-neutral-200/50 border-neutral-100">
<form className="flex flex-col gap-2">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify group-focus-within:text-sky-500 transition-colors iconify--lucide text-slate-400" data-icon="lucide:user" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<input className="focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-neutral-400 outline-none text-sm w-full border-0 ring-1 rounded-xl pt-3 pb-3 pl-10 hover:bg-neutral-50/50 text-neutral-800 bg-neutral-50 ring-neutral-200" placeholder="Tu nombre completo" type="text"/>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify group-focus-within:text-sky-500 transition-colors iconify--lucide text-slate-400" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<input className="w-full focus:bg-white text-sm border-0 rounded-xl py-3 pl-10 ring-1 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-neutral-400 outline-none bg-neutral-50 hover:bg-neutral-50/50 text-neutral-800 ring-neutral-200" placeholder="Tu mejor correo electrónico" type="email"/>
</div>
<button className="mt-1 w-full font-medium py-3 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group bg-neutral-900 hover:bg-neutral-800 text-white shadow-neutral-900/10" type="button">
<span className="">Reservar mi Lugar</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-[10px] mt-1 text-neutral-400">Tus datos están protegidos. Únete a +5,000 personas.</p>
</form>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-100 bg-white">
<div className="max-w-5xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-serif mb-4 tracking-tight text-neutral-900">¿Qué descubrirás esta semana?</h2>
<p className="text-neutral-500 font-light leading-relaxed">
                    2026 es el año de los <span className="font-medium text-neutral-800">GIFTS</span>. Un tiempo para dejar lo viejo y abrazar una nueva forma de responder a la vida.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group p-8 rounded-3xl border transition-all duration-300 hover:shadow-card bg-neutral-50 hover:bg-white border-neutral-100 hover:border-neutral-200">
<div className="flex items-start justify-between mb-6">
<div className="p-3 rounded-2xl border shadow-sm bg-white border-neutral-100">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:heart-off" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655m-2.846 2.812l-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761M2 2l20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-300">Día 01</span>
</div>
<h3 className="text-lg font-semibold mb-2 text-neutral-900">Sanar la Raíz</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light">
                        Entenderás por qué las heridas no sanadas siguen gobernando tus reacciones y cómo dejar de herir a los que más amas. No basta con orar; es necesario ir profundo.
                    </p>
</div>

<div className="group p-8 rounded-3xl border transition-all duration-300 hover:shadow-card bg-white border-neutral-100 hover:border-neutral-200">
<div className="mb-6 p-3 w-fit rounded-2xl border bg-indigo-50 border-indigo-100">
<svg aria-hidden="true" className="iconify iconify--lucide text-sky-600" data-icon="lucide:sparkles" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-neutral-900">Identidad GIFT</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light">
                        Recupera tu valor. Vuelve a verte como un regalo de Dios, único e irrepetible.
                    </p>
</div>

<div className="group p-8 rounded-3xl border transition-all duration-300 hover:shadow-card bg-white border-neutral-100 hover:border-neutral-200">
<div className="mb-6 p-3 w-fit rounded-2xl border bg-cyan-50 border-cyan-100">
<svg aria-hidden="true" className="iconify iconify--lucide text-indigo-600" data-icon="lucide:refresh-cw" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-neutral-900">Restauración Real</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light">
                        Herramientas prácticas para que el cambio no sea solo una emoción pasajera.
                    </p>
</div>

<div className="lg:col-span-2 group p-8 rounded-3xl border transition-all duration-300 hover:shadow-card bg-neutral-50 hover:bg-white border-neutral-100 hover:border-neutral-200">
<div className="flex items-start justify-between mb-6">
<div className="p-3 rounded-2xl border shadow-sm bg-white border-neutral-100">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-300">Meta</span>
</div>
<h3 className="text-lg font-semibold mb-2 text-neutral-900">Vivir lo Nuevo</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light">
                        El objetivo final no es solo sanar el pasado, sino habilitarte para un futuro donde ames con libertad, vivas desde tu verdad y abraces el sueño de Dios.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-neutral-900 text-white">

<div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none bg-indigo-900/20"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-5/12">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-500 blur"></div>
<div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-800">

<img alt="Rebeca Barba" className="w-full h-full object-cover opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t to-transparent from-black/80">
<p className="font-serif text-2xl text-white">Rebeca Barba</p>
<p className="text-xs uppercase tracking-widest mt-1 text-indigo-200">Consagrada &amp; Autora</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-7/12 space-y-8">
<h2 className="text-3xl font-serif tracking-tight">"Sanar es posible.Amar de nuevo es posible."</h2>
<div className="space-y-4 font-light leading-relaxed text-neutral-300">
<p className="">
                            Soy consagrada del Regnum Christi y he dedicado mi vida a la Teología del Cuerpo de Juan Pablo II. He acompañado a miles de personas a restaurar sus relaciones y descubrir su valor.
                        </p>
<p>
                            Pero más allá de mis estudios en Ciencias Religiosas y Familia, te hablo desde mi propia humanidad. Yo también he tenido que recomenzar.
                        </p>
</div>
<div className="pt-6 border-t border-neutral-800">
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-sky-500 iconify--lucide" data-icon="lucide:book-open" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-neutral-400">Teología del Cuerpo</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-sky-500 iconify--lucide" data-icon="lucide:heart-handshake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-neutral-400">Sanación Interior</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-sky-500 iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span className="text-sm text-neutral-400">Acompañamiento</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t bg-white border-neutral-100">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-xs font-bold tracking-tight uppercase text-neutral-900">RECOMENZAR PARA SANAR</span>
<p className="text-[10px] mt-1 text-neutral-400">© 2024 Rebeca Barba. Todos los derechos reservados.</p>
</div>
<div className="flex gap-6">
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
