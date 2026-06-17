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



document.addEventListener("DOMContentLoaded", () => {
lucide.createIcons();
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

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
      

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0s_both] animate">
<nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#050505]/80 p-2 pl-4 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-black border border-white/10">

<img alt="Logo" className="h-5 w-5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-sm font-semibold tracking-tight text-white">
            StarSolutions
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Servicios</a>
<a className="hover:text-white transition-colors" href="#">Consultoría</a>
<a className="hover:text-white transition-colors" href="#">SOC 24/7</a>
<a className="hover:text-white transition-colors" href="#">Recursos</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden text-xs font-medium text-neutral-400 hover:text-white sm:block px-2" href="#">
            Área Clientes
          </a>
<button className="group relative flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all hover:bg-neutral-200">
<span>Auditoría Gratis</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 opacity-50 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>
</div>

<section className="overflow-hidden w-full pt-40 pb-32 relative bg-[#050505] z-0">

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 mx-auto max-w-7xl grid-lines-dark border-r border-l border-white/[0.05]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--accent-glow),_transparent_70%)] opacity-30 blur-[100px]"></div>
</div>
<div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.1s_both] mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.1)] animate">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
</span>
                    Centro de Defensa Activo
                </div>
<h1 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl animate">
                    Ciberseguridad
                    
                    <span className="text-neutral-600">Sin Fronteras.</span>
</h1>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mb-10 max-w-lg text-lg font-light leading-relaxed text-neutral-400 tracking-tight animate">
                    Protegemos tu infraestructura crítica con inteligencia artificial y expertos en hacking ético. Detección, respuesta y mitigación en tiempo real.
                </p>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col items-start gap-6 sm:flex-row sm:items-center animate">
<div className="relative w-full max-w-xs group">
<input className="h-12 w-full rounded-full bg-[#0F0F0F] border border-white/10 px-5 text-sm text-white placeholder:text-neutral-600 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all shadow-inner" placeholder="contacto@tuempresa.com" type="email"/>
<div className="absolute right-1 top-1 bottom-1">
<button className="h-full rounded-full bg-white px-4 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors">
                        Proteger Ahora
                        </button>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="lucide lucide-shield-check w-4 h-4 text-neutral-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Certificación ISO 27001</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center perspective-1000 animate-on-scroll [animation:fadeInUp_1s_ease-out_0.4s_both] animate">

<div className="relative z-20 w-80 h-80 md:w-[450px] md:h-[450px] animate-float">
<div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full"></div>
<img alt="3D VPN Shield" className="shield-shadow w-full h-full object-contain drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57042482-9bd6-4971-a4bf-ee65bb023733_1600w.png"/>

<div className="absolute top-10 -right-10 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl animate-float-delayed z-30">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
<svg aria-hidden="true" className="lucide lucide-lock w-5 h-5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<div className="text-xs font-bold text-white">VPN Segura</div>
<div className="text-[10px] text-neutral-400">Cifrado activo</div>
</div>
</div>
</div>
<div className="absolute bottom-20 -left-6 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl animate-float z-30" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-2">
<div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono text-white">TUNNEL: ENCRYPTED</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>
</section>

<main className="relative z-20 w-full bg-white">

<div className="mx-auto max-w-7xl px-6 -mt-24 relative z-30 pb-24">
<div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] flex flex-col gap-6 md:col-span-4 animate">
<div className="relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] group">

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none z-10"></div>
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
<span className="flex h-2 w-2 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10">
<span className="h-1 w-1 rounded-full bg-red-500 animate-pulse"></span>
</span>
                  Amenazas en Tiempo Real
                </div>
<svg aria-hidden="true" className="lucide lucide-activity text-neutral-400 w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="space-y-4">

<div className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50/50 p-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-red-200 text-red-600 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-shield-alert w-4 h-4" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-xs font-bold text-neutral-800">
                        SQL Injection Bloqueado
                      </div>
<div className="text-[10px] text-neutral-400">Ahora</div>
</div>
<div className="text-[10px] text-neutral-500">
                      Origen: IP 192.168.x.x
                    </div>
</div>
</div>

<div className="flex items-center gap-3 rounded-xl border border-transparent p-3 opacity-60">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
<svg aria-hidden="true" className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-xs font-bold text-neutral-800">
                        Escaneo de Puertos
                      </div>
<div className="text-[10px] text-neutral-400">2m atrás</div>
</div>
<div className="text-[10px] text-neutral-500">
                      Mitigado por Firewall
                    </div>
</div>
</div>

<div className="flex items-center gap-3 rounded-xl border border-transparent p-3 opacity-40">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
<svg aria-hidden="true" className="lucide lucide-user-x w-4 h-4" data-lucide="user-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line></svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-xs font-bold text-neutral-800">
                        Login Fallido (Brute Force)
                      </div>
<div className="text-[10px] text-neutral-400">5m atrás</div>
</div>
<div className="text-[10px] text-neutral-500">Cuenta bloqueada</div>
</div>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] relative md:col-span-4 animate">
<div className="flex flex-col h-full justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
<div className="">
<div className="mb-2 flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-medal text-neutral-400 w-4 h-4" data-lucide="medal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Health Score
                  </span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-neutral-900">
                  98/100
                </h3>
<p className="mt-2 text-sm text-neutral-500">
                  Tu infraestructura cumple con normas ISO 27001 y GDPR.
                </p>
</div>
<div className="mt-8 flex items-end justify-between gap-1 h-16 opacity-80 px-2">
<div className="w-1.5 bg-neutral-200 rounded-t-sm h-[40%]"></div>
<div className="w-1.5 bg-neutral-200 rounded-t-sm h-[60%]"></div>
<div className="w-1.5 bg-neutral-200 rounded-t-sm h-[45%]"></div>
<div className="w-1.5 bg-green-500 rounded-t-sm h-[80%] shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
<div className="w-1.5 bg-neutral-200 rounded-t-sm h-[50%]"></div>
<div className="w-1.5 bg-neutral-200 rounded-t-sm h-[35%]"></div>
<div className="w-1.5 bg-green-500 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
<div className="w-1.5 bg-neutral-200 rounded-t-sm h-[55%]"></div>
<div className="w-1.5 bg-neutral-200 rounded-t-sm h-[40%]"></div>
<div className="w-1.5 bg-green-500 rounded-t-sm h-[85%] shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] relative md:col-span-4 animate">
<div className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
<div className="relative z-10 flex flex-col items-center text-center">

<div className="mb-4 relative w-32 h-32 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-translate-y-2">
<img alt="3D Shield" className="w-24 h-24 object-contain drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57042482-9bd6-4971-a4bf-ee65bb023733_320w.png"/>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-blue-500/20 blur-xl rounded-full opacity-60"></div>
</div>
<h3 className="text-xl font-medium text-neutral-900">Vigilancia 360°</h3>
<p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Monitoreo continuo de endpoints y escudo activo.
                </p>
</div>

<div className="absolute inset-0 z-0 opacity-[0.03]">
<svg className="" height="100%" width="100%">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<circle className="text-black" cx="2" cy="2" fill="currentColor" r="1"></circle>
</pattern>
<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.8s_both] border-y border-neutral-100 bg-neutral-50/50 animate">
<div className="mx-auto max-w-7xl px-6 py-16 text-center">
<p className="mb-10 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            Empresas protegidas por StarSolutions
          </p>
<div className="flex flex-wrap items-center justify-center gap-12 opacity-60 transition-all duration-500 hover:opacity-100 md:gap-20 text-neutral-900 grayscale hover:grayscale-0">

<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,15 M15,10 L15,20" stroke="currentColor" strokeWidth="3"></path><text fontFamily="Arial" fontSize="16" font-weight="bold" x="30" y="20">Microsoft</text></svg>
<svg className="h-7" fill="currentColor" viewbox="0 0 60 30"><text fontFamily="Arial" fontSize="16" font-weight="bold" x="0" y="20">IBM</text></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 80 30"><text fontFamily="Arial" fontSize="16" font-weight="bold" x="0" y="20">CISCO</text></svg>
</div>
</div>
</div>

<section className="relative overflow-hidden bg-white py-32">
<div className="absolute inset-0 dot-pattern opacity-50"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both]">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                Seguridad Proactiva,
                <br/>
                no reactiva.
              </h2>
</div>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both]">
<p className="text-lg font-light leading-relaxed text-neutral-500">
                Los antivirus tradicionales ya no son suficientes. StarSolutions implementa una arquitectura Zero-Trust que asume que el peligro ya está dentro y lo neutraliza.
              </p>
<div className="mt-8 flex gap-6">
<div className="flex flex-col gap-1">
<span className="text-2xl font-bold text-neutral-900">24/7</span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                    Soporte SOC
                  </span>
</div>
<div className="h-auto w-px bg-neutral-200"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-bold text-neutral-900">15 min</span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-wide">
                    Tiempo de Respuesta
                  </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-lg">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-50 text-neutral-900 transition-transform duration-300 group-hover:scale-110 group-hover:bg-neutral-100">
<svg aria-hidden="true" className="lucide lucide-bug w-8 h-8" data-lucide="bug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-9"></path><path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"></path><path d="M14.12 3.88 16 2"></path><path d="M21 21a4 4 0 0 0-3.81-4"></path><path d="M21 5a4 4 0 0 1-3.55 3.97"></path><path d="M22 13h-4"></path><path d="M3 21a4 4 0 0 1 3.81-4"></path><path d="M3 5a4 4 0 0 0 3.55 3.97"></path><path d="M6 13H2"></path><path d="m8 2 1.88 1.88"></path><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"></path></svg>
</div>
<h3 className="mb-3 text-lg font-semibold text-neutral-900">
                Pentesting Continuo
              </h3>
<p className="text-sm leading-relaxed text-neutral-500">
                Nuestros "White Hat Hackers" prueban constantemente tus defensas para encontrar brechas antes que los criminales.
              </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-lg">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-50 text-neutral-900 transition-transform duration-300 group-hover:scale-110 group-hover:bg-neutral-100">
<svg aria-hidden="true" className="lucide lucide-globe w-8 h-8" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="mb-3 text-lg font-semibold text-neutral-900">
                SOC Virtual
              </h3>
<p className="text-sm leading-relaxed text-neutral-500">
                Un equipo de expertos monitoreando tus sistemas día y noche, listos para intervenir ante cualquier anomalía.
              </p>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-lg">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-50 text-neutral-900 transition-transform duration-300 group-hover:scale-110 group-hover:bg-neutral-100">
<svg aria-hidden="true" className="lucide lucide-file-check w-8 h-8" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="mb-3 text-lg font-semibold text-neutral-900">
                Compliance Automático
              </h3>
<p className="text-sm leading-relaxed text-neutral-500">
                Generamos reportes automáticos para cumplir con GDPR, PCI-DSS e ISO 27001 sin dolores de cabeza.
              </p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-100 bg-neutral-50/30 py-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02),_transparent_60%)]"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6">
<div className="mb-20 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Ciclo de Defensa
            </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mt-4 text-neutral-500 font-light">
              Cómo neutralizamos un ataque en cuestión de milisegundos.
            </p>
</div>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] relative rounded-3xl border border-neutral-200 bg-white p-8 md:p-12 shadow-2xl">

<div className="absolute top-[36%] md:top-1/2 left-0 w-full -translate-y-1/2 px-12 md:px-24 hidden md:block pointer-events-none z-0">
<div className="relative h-px w-full bg-neutral-100">
<div className="absolute top-1/2 -mt-0.5 h-1 w-24 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent blur-[1px]" style={{animation: 'schemaFlow 3s linear infinite'}}></div>
<div className="absolute top-1/2 -mt-0.5 h-1 w-24 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" style={{animation: 'schemaFlow 3s linear infinite 1.5s'}}></div>
</div>
</div>
<div className="grid grid-cols-1 gap-12 md:grid-cols-3 relative z-10">

<div className="group flex flex-col items-center text-center">
<div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-500/30">
<div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<svg aria-hidden="true" className="lucide lucide-scan text-neutral-400 w-7 h-7 transition-colors group-hover:text-cyan-600" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
<div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-blue-100 text-blue-600 shadow-sm">
<span className="text-[10px] font-bold">1</span>
</div>
</div>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                  Detección de Anomalía
                </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                  La IA identifica un patrón de tráfico inusual o un intento de escalada de privilegios.
                </p>
</div>

<div className="group flex flex-col items-center text-center relative">
<div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-500/20 bg-white shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-transform duration-500 group-hover:scale-110 z-10">
<svg aria-hidden="true" className="lucide lucide-bell text-cyan-600 w-8 h-8" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]"></div>
</div>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                  Aislamiento Automático
                </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                  El nodo afectado es puesto en cuarentena instantáneamente para evitar propagación.
                </p>
</div>

<div className="group flex flex-col items-center text-center">
<div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/30">
<div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
<svg aria-hidden="true" className="lucide lucide-shield-check text-neutral-400 w-7 h-7 transition-colors group-hover:text-purple-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-100 text-green-600 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">
                  Análisis Forense
                </h3>
<p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                  Generación de reporte detallado, parcheo de vulnerabilidad y restauración del servicio.
                </p>
</div>
</div>

<div className="mt-12 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-3 font-mono text-[10px] text-neutral-500 mx-auto max-w-2xl font-['JetBrains_Mono']">
<div className="flex items-center gap-4 md:gap-8 justify-center overflow-x-auto whitespace-nowrap px-2 no-scrollbar">
<div className="shrink-0 text-red-700">ALERT: MALWARE-SIG-92</div>
<div>
<span className="text-purple-600">action</span>
                  ="quarantine_host"
                  <span className="text-purple-600">target</span>
                  ="db-shard-04"
                </div>
<div className="ml-auto text-cyan-700 font-bold">MITIGATED</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-100 bg-white py-32">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] order-2 lg:order-1">

<div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-[#1e1e1e] shadow-2xl">

<div className="relative z-20 flex items-center gap-2 border-b border-white/5 bg-[#1e1e1e] px-4 py-3">
<div className="flex gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
</div>
<div className="ml-4 text-[10px] font-mono text-neutral-400 font-['JetBrains_Mono']">
                    star-cli — root@server
                  </div>
</div>

<div className="relative h-[320px] overflow-hidden bg-[#1e1e1e] px-6 font-mono text-xs leading-relaxed text-neutral-300 font-['JetBrains_Mono']">
<div className="absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-[#1e1e1e] to-transparent pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-[#1e1e1e] to-transparent pointer-events-none"></div>
<div className="animate-scroll-y py-4">
<div className="space-y-2 pb-2">
<div className="text-neutral-500">
                        root@star:~# starsol scan --target all --deep
                      </div>
<div className="text-neutral-500">
                        [init] Cargando base de datos de vulnerabilidades (CVE)...
                      </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                        Escaneando 142 endpoints...
                        <span className="text-green-500">100%</span>
</div>
<div className="text-neutral-400">
<span className="text-yellow-500">⚠</span>
                        Alerta: Puerto 22 abierto en IP pública
                      </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                        Aplicando regla firewall: DROP inbound 22
                        <span className="text-green-500">Applied</span>
</div>
<div className="text-neutral-500">
                        [net] Analizando tráfico cifrado SSL/TLS...
                      </div>
<div className="text-white">&gt; 0 Malware detectado en tráfico</div>
<div className="text-neutral-400">
<span className="text-cyan-500">i</span>
                        Reporte generado: /var/log/star-audit-2204.pdf
                      </div>
<div className="text-neutral-500">
                        root@star:~# starsol monitor --live
                      </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                        Conectado a StarSolutions Cloud SOC
                        <span className="text-green-500">Online</span>
</div>
</div>

<div className="space-y-2 pb-2">
<div className="text-neutral-500">
                          root@star:~# starsol scan --target all --deep
                        </div>
<div className="text-neutral-500">
                          [init] Cargando base de datos de vulnerabilidades (CVE)...
                        </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                          Escaneando 142 endpoints...
                          <span className="text-green-500">100%</span>
</div>
<div className="text-neutral-400">
<span className="text-yellow-500">⚠</span>
                          Alerta: Puerto 22 abierto en IP pública
                        </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                          Aplicando regla firewall: DROP inbound 22
                          <span className="text-green-500">Applied</span>
</div>
<div className="text-neutral-500">
                          [net] Analizando tráfico cifrado SSL/TLS...
                        </div>
<div className="text-white">&gt; 0 Malware detectado en tráfico</div>
<div className="text-neutral-400">
<span className="text-cyan-500">i</span>
                          Reporte generado: /var/log/star-audit-2204.pdf
                        </div>
<div className="text-neutral-500">
                          root@star:~# starsol monitor --live
                        </div>
<div className="text-neutral-400">
<span className="text-cyan-500">➜</span>
                          Conectado a StarSolutions Cloud SOC
                          <span className="text-green-500">Online</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] order-1 lg:order-2">
<h2 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Auditoría Profunda.
              </h2>
<p className="mb-8 text-neutral-500 font-light leading-relaxed">
                Nuestras herramientas de escaneo se integran directamente en tu pipeline CI/CD, asegurando que ninguna línea de código insegura llegue a producción.
              </p>
<ul className="space-y-4 text-sm text-neutral-600">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-neutral-900" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  Análisis Estático de Código (SAST)
                </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-neutral-900" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  Escaneo de Contenedores Docker
                </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-check-circle w-5 h-5 text-neutral-900" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  Gestión de Secretos y Llaves API
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-100 bg-neutral-50/50 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-4 text-3xl font-semibold text-neutral-900">
              Planes Flexibles
            </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] text-neutral-500">
              Seguridad de nivel militar para empresas de cualquier tamaño.
            </p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300">
<div className="mb-1 text-sm font-medium text-neutral-500">
                Startup
              </div>
<div className="mb-6 text-2xl font-semibold text-neutral-900">
                $299
                <span className="text-sm font-normal text-neutral-500">/mes</span>
</div>
<ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Escaneo Mensual
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Protección Web (WAF)
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Soporte por Email
                </li>
</ul>
<button className="w-full rounded-full border border-neutral-200 py-2.5 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-50">
                Comenzar Prueba
              </button>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl ring-1 ring-neutral-200">
<div className="absolute -top-3 left-6 inline-block rounded-full border border-neutral-200 bg-white px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-neutral-900 shadow-sm">
                Más Popular
              </div>
<div className="mb-1 text-sm font-medium text-neutral-500">Empresa</div>
<div className="mb-6 text-2xl font-semibold text-neutral-900">
                $999
                <span className="text-sm font-normal text-neutral-500">/mes</span>
</div>
<ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-600">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  SOC 24/7
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Pentesting Trimestral
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-cyan-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Respuesta a Incidentes
                </li>
</ul>
<button className="w-full rounded-full bg-neutral-900 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-neutral-800">
                Contactar Ventas
              </button>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300">
<div className="mb-1 text-sm font-medium text-neutral-500">
                Corporativo
              </div>
<div className="mb-6 text-2xl font-semibold text-neutral-900">Personalizado</div>
<ul className="mb-8 flex-1 space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  CISO Dedicado
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Auditoría Física
                </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  SLA Garantizado
                </li>
</ul>
<button className="w-full rounded-full border border-neutral-200 py-2.5 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-50">
                Agendar Reunión
              </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 bg-white pb-12 pt-24 text-neutral-600">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 flex items-center justify-center rounded-full bg-black text-white p-1">
<img alt="Logo" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-lg font-bold tracking-tight text-neutral-900">
                StarSolutions
              </span>
</div>
<p className="text-xs leading-relaxed text-neutral-500">
              Líderes en ciberseguridad ofensiva y defensiva. Protegiendo el futuro digital de las empresas latinoamericanas.
            </p>
</div>
<div className="flex gap-16 text-xs text-neutral-500">
<div className="flex flex-col gap-4">
<span className="font-semibold text-neutral-900">Servicios</span>
<a className="hover:text-neutral-900" href="#">Pentesting</a>
<a className="hover:text-neutral-900" href="#">SOC 24/7</a>
<a className="hover:text-neutral-900" href="#">Consultoría</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-neutral-900">Empresa</span>
<a className="hover:text-neutral-900" href="#">Sobre Nosotros</a>
<a className="hover:text-neutral-900" href="#">Carreras</a>
<a className="hover:text-neutral-900" href="#">Contacto</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-neutral-900">Legal</span>
<a className="hover:text-neutral-900" href="#">Privacidad</a>
<a className="hover:text-neutral-900" href="#">Términos</a>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-neutral-100 pt-8">
<p className="text-[10px] text-neutral-400">
            © 2024 StarSolutions Security. Todos los derechos reservados.
          </p>
<div className="flex gap-4">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-neutral-500">
              Sistemas Operativos
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
