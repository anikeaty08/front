import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['Cormorant Garamond', 'serif'],
sans: ['Inter', 'sans-serif'],
},
colors: {
gold: {
400: '#D4AF37',
500: '#C5A028',
600: '#AA8A22',
},
stone: {
50: '#FAFAF9',
100: '#F5F5F4',
200: '#E7E5E4',
300: '#D6D3D1',
400: '#A8A29E',
500: '#78716C',
600: '#57534E',
700: '#44403C',
800: '#292524',
900: '#1C1917',
},
sage: {
50: '#F4F7F4',
100: '#E6EBE6',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            function updateCountdown() {
              const target = new Date('June 12, 2027 00:00:00').getTime();
              const now = new Date().getTime();
              const diff = target - now;
              if(diff > 0) {
                document.getElementById('cd-days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
                document.getElementById('cd-hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
                document.getElementById('cd-mins').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                document.getElementById('cd-secs').innerText = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
              }
            }
            setInterval(updateCountdown, 1000);
            updateCountdown();
          


(function () {
    const ENDPOINT = "https://script.google.com/macros/s/AKfycbzCB6SUhDQWypzFjBU4EVjyg3Z1FiY6VjG8JFOaV5lngqCXpBaJ3v86xo1uL5llJh6v/exec";

    const form = document.getElementById("rsvp-form");
    const status = document.getElementById("rsvp-status");
    const btn = document.getElementById("rsvp-submit");
    if (!form) return;

    // ---------- VALIDACIÓN ----------
    function clearError(el) {
        if (!el) return;
        el.classList.remove("ring-2", "ring-red-400", "border-red-400");
        // Para los radios: quitar borde rojo del wrapper
        const wrapper = el.closest(".rsvp-attendance-wrapper");
        if (wrapper) wrapper.classList.remove("ring-2", "ring-red-400", "rounded-xl");
    }

    function markError(el) {
        if (!el) return;
        el.classList.add("ring-2", "ring-red-400");
        if (el.tagName === "INPUT" && el.type === "text" || el.tagName === "INPUT" && el.type === "email") {
            el.classList.add("border-red-400");
        }
    }

    function validate() {
        // Limpiar errores previos
        form.querySelectorAll("[name]").forEach(clearError);
        const banner = document.getElementById("rsvp-validation-banner");
        if (banner) banner.classList.add("hidden");
        const attendanceWrapper = document.getElementById("attendance-wrapper");
        if (attendanceWrapper) attendanceWrapper.classList.remove("ring-2", "ring-red-400", "rounded-xl");

        const errors = [];

        // 1. Nombre
        const nombre = form.querySelector('[name="nombre"]');
        if (!nombre.value.trim()) {
            markError(nombre);
            errors.push(nombre);
        }

        // 2. Email
        const email = form.querySelector('[name="email"]');
        if (!email.value.trim() || !email.checkValidity()) {
            markError(email);
            errors.push(email);
        }

        // 3. Asistencia
        const attendance = form.querySelector('[name="attendance"]:checked');
        if (!attendance) {
            if (attendanceWrapper) attendanceWrapper.classList.add("ring-2", "ring-red-400", "rounded-xl");
            errors.push(attendanceWrapper);
        }

        // 4. Solo si asiste: plan_aventura
        if (attendance && attendance.value === "yes") {
            const plan = form.querySelector('[name="plan_aventura"]');
            if (!plan.value) {
                markError(plan);
                errors.push(plan);
            }
        }

        if (errors.length > 0) {
            // Mostrar banner
            if (banner) {
                banner.classList.remove("hidden");
                banner.textContent = "Por favor, completa los campos marcados en rojo.";
            }
            // Scroll al primer error
            const first = errors[0];
            if (first && first.scrollIntoView) {
                first.scrollIntoView({ behavior: "smooth", block: "center" });
                if (first.focus) setTimeout(() => first.focus({ preventScroll: true }), 300);
            }
            return false;
        }
        return true;
    }

    // Limpiar el rojo cuando el usuario interactúa
    form.addEventListener("input", function (e) {
        if (e.target.name) clearError(e.target);
    });
    form.addEventListener("change", function (e) {
        if (e.target.name) clearError(e.target);
        if (e.target.name === "attendance") {
            const wrapper = document.getElementById("attendance-wrapper");
            if (wrapper) wrapper.classList.remove("ring-2", "ring-red-400", "rounded-xl");
        }
    });

    // ---------- ENVÍO ----------
    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        if (!validate()) return;

        const data = new FormData(form);
        ["evento_preboda", "evento_civil", "evento_garden"].forEach(function (n) {
            if (!data.has(n)) data.append(n, "no");
        });
        data.append("timestamp", new Date().toISOString());

        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = "Enviando…";
        status.classList.remove("hidden");
        status.className = "text-center text-sm mt-4 text-stone-500";
        status.textContent = "";

        try {
            await fetch(ENDPOINT, { method: "POST", body: data });
            status.textContent = "¡Gracias! Tu confirmación ha sido registrada. 🤍";
            status.className = "text-center text-sm mt-4 text-gold-600";
            form.reset();
            btn.textContent = "Enviado ✓";
        } catch (err) {
            status.textContent = "Hubo un problema. Por favor, escríbenos directamente.";
            status.className = "text-center text-sm mt-4 text-red-500";
            btn.disabled = false;
            btn.textContent = originalText;
        }
    });
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed flex flex-col cursor-pointer transition-all duration-1000 ease-in-out bg-stone-50 z-50 top-0 right-0 bottom-0 left-0 items-center justify-center" onclick="this.style.pointerEvents='none'; const icon=this.querySelector('iconify-icon'); icon.setAttribute('icon','solar:letter-opened-linear'); icon.classList.add('scale-125','-translate-y-2'); const p=this.querySelector('p'); p.classList.add('opacity-0'); setTimeout(()=&gt;{p.textContent='Estás Invitado'; p.classList.remove('opacity-0');},300); setTimeout(()=&gt;{this.classList.add('opacity-0','-translate-y-12'); setTimeout(()=&gt;this.remove(),1000);},1200);">
<div className="flex flex-col transition-transform duration-500 hover:scale-105 items-center">
<iconify-icon className="transition-all duration-500 ease-out text-5xl text-gold-500 mb-6" height="48" icon="solar:letter-linear" style={{color: 'rgb(197, 160, 40)'}} width="48"></iconify-icon>
<div className="font-serif text-3xl tracking-tighter text-stone-800">
          A &amp; S
        </div>
<p className="uppercase transition-opacity duration-300 text-xs font-light text-stone-400 tracking-widest mt-4">
          Tocar para abrir
        </p>
</div>
</div>

<header className="fixed top-0 w-full z-40 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-xl tracking-tighter text-stone-800" href="#">
          A &amp; S
        </a>
<nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-stone-500">
<a className="hover:text-gold-600 transition-colors" href="#la-boda">
            La Boda
          </a>
<a className="hover:text-gold-600 transition-colors" href="#guest-experience">
            Guest Experience
          </a>
</nav>
<a className="text-[0.65rem] tracking-widest uppercase text-white bg-gold-500 hover:bg-gold-600 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg font-medium hover:-translate-y-0.5" href="#confirmar">
          Confirmar
        </a>
</div>
</header>

<main className="" id="la-boda">

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Romantic background" className="w-full h-full object-cover opacity-50 filter blur-md scale-105" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/80 via-[#FAF8F5]/50 to-stone-50 backdrop-blur-[3px]"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-12 md:mt-0">
<span className="text-[0.65rem] tracking-[0.35em] uppercase text-[#7A6A5C] mb-6 font-medium">
            SAVE THE DATE
          </span>
<div className="w-px h-16 bg-[#D9CBB8] mb-10"></div>
<h1 className="font-serif text-6xl md:text-8xl tracking-tight text-[#4A3C31] mb-6 leading-none">
            Adrian
            <span className="text-[#E28D83] font-light italic px-2">&amp;</span>
            Sofia
          </h1>
<p className="text-xs md:text-sm text-[#7A6A5C] font-light tracking-[0.2em] uppercase mb-24">
            June 12, 2027 · Lima, Peru
          </p>
<div className="flex items-center justify-center gap-8 md:gap-20 text-[#4A3C31]">
<div className="flex flex-col items-center">
<span className="font-serif text-4xl md:text-5xl tracking-tight mb-3" id="cd-days">
                404
              </span>
<span className="text-[0.6rem] tracking-[0.25em] uppercase font-medium text-[#9A8A7C]">
                DAYS
              </span>
</div>
<div className="flex flex-col items-center">
<span className="font-serif text-4xl md:text-5xl tracking-tight mb-3" id="cd-hours">
                03
              </span>
<span className="text-[0.6rem] tracking-[0.25em] uppercase font-medium text-[#9A8A7C]">
                HOURS
              </span>
</div>
<div className="flex flex-col items-center">
<span className="font-serif text-4xl md:text-5xl tracking-tight mb-3" id="cd-mins">
                38
              </span>
<span className="text-[0.6rem] tracking-[0.25em] uppercase font-medium text-[#9A8A7C]">
                MINS
              </span>
</div>
<div className="flex flex-col items-center">
<span className="font-serif text-4xl md:text-5xl tracking-tight mb-3" id="cd-secs">
                48
              </span>
<span className="text-[0.6rem] tracking-[0.25em] uppercase font-medium text-[#9A8A7C]">
                SECS
              </span>
</div>
</div>
<a className="mt-16 inline-flex items-center justify-center text-xs tracking-widest uppercase text-white bg-gold-500 hover:bg-gold-600 px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-medium hover:-translate-y-0.5" href="#confirmar">
            Confirmar Asistencia
          </a>

</div>
</section>

<section className="py-32 bg-stone-50 timeline-container relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="font-serif text-4xl tracking-tight text-stone-800 mb-4">
              El Itinerario
            </h2>
<p className="text-sm text-stone-500 font-light">
              Acompáñanos a través de los momentos de nuestro gran día.
            </p>
</div>
<div className="relative pl-4 md:pl-0">

<div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2"></div>
<div className="timeline-line absolute left-[15px] md:left-1/2 top-0 w-px bg-gold-400 -translate-x-1/2 h-0 transition-all duration-1000"></div>

<div className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-20 group">
<div className="hidden md:block w-5/12 text-right pr-12">
<h3 className="font-serif text-2xl tracking-tight text-stone-800 mb-2">
                  The Welcome Pisco
                </h3>
<p className="text-xs text-stone-500 font-light">Pre-boda</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-stone-50 border border-stone-200 -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-gold-400 transition-colors">
<div className="w-2 h-2 rounded-full bg-gold-500"></div>
</div>
<div className="w-full md:w-5/12 pl-12 md:pl-12">
<div className="md:hidden mb-2">
<h3 className="font-serif text-2xl tracking-tight text-stone-800">
                    The Welcome Pisco
                  </h3>
<p className="text-xs text-gold-600 mb-2">Pre-boda</p>
</div>
<div className="bg-gradient-to-br from-white to-stone-50/50 p-6 rounded-2xl border border-stone-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<p className="text-sm text-stone-600 italic">
                    Día1: "Brindemos antes del 'Sí'"
                  </p>
<div className="mt-4 flex items-center gap-2 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>5:00 PM</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row-reverse justify-between items-start md:items-center mb-20 group">
<div className="hidden md:block w-5/12 text-left pl-12">
<h3 className="font-serif text-2xl tracking-tight text-stone-800 mb-2">
                  La Unión Civil
                </h3>
<p className="text-xs text-stone-500 font-light">
                  Ceremonia Principal
                </p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-stone-50 border border-stone-200 -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-gold-400 transition-colors">
<div className="w-2 h-2 rounded-full bg-gold-500"></div>
</div>
<div className="w-full md:w-5/12 pl-12 md:pr-12 md:pl-0 text-left md:text-right">
<div className="md:hidden mb-2">
<h3 className="font-serif text-2xl tracking-tight text-stone-800">
                    La Unión Civil
                  </h3>
<p className="text-xs text-gold-600 mb-2">Ceremonia</p>
</div>
<div className="bg-gradient-to-br from-white to-stone-50/50 p-6 rounded-2xl border border-stone-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<p className="text-sm text-stone-600 italic">
                    Día2: "Nuestra promesa"
                  </p>
<div className="mt-4 flex items-center md:justify-end gap-2 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>6:30 PM</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row justify-between items-start md:items-center group">
<div className="hidden md:block w-5/12 text-right pr-12">
<h3 className="font-serif text-2xl tracking-tight text-stone-800 mb-2">
                  The Garden Party
                </h3>
<p className="text-xs text-stone-500 font-light">Recepción</p>
</div>
<div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-stone-50 border border-stone-200 -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-gold-400 transition-colors">
<div className="w-2 h-2 rounded-full bg-gold-500"></div>
</div>
<div className="w-full md:w-5/12 pl-12 md:pl-12">
<div className="md:hidden mb-2">
<h3 className="font-serif text-2xl tracking-tight text-stone-800">
                    The Garden Party
                  </h3>
<p className="text-xs text-gold-600 mb-2">Recepción</p>
</div>
<div className="bg-gradient-to-br from-white to-stone-50/50 p-6 rounded-2xl border border-stone-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<p className="text-sm text-stone-600 italic">
                    Día2: "Nuestra noche"
                  </p>
<div className="mt-4 flex items-center gap-2 text-xs text-stone-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>8:00 PM hasta el amanecer</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-white via-stone-50/40 to-white border-y border-stone-100/60">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100">
<img alt="Adrian &amp; Sofia" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div>
<h2 className="font-serif text-3xl tracking-tight text-stone-800 mb-8">
              Detalles de la Celebración
            </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center flex-shrink-0 text-stone-600">
<iconify-icon className="text-xl" icon="solar:hanger-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-800 mb-1">
                    Dress Code
                  </h4>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                    Formal Elegante. Sugerimos evitar colores blancos, crudos o
                    tonos excesivamente claros para las damas.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center flex-shrink-0 text-stone-600">
<iconify-icon className="text-xl" icon="solar:map-arrow-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-stone-800 mb-1">
                    Ubicación
                  </h4>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-3">
                    Sede Granadinas, La Molina, Lima. La direccion exacta la
                    revelaremos días antes.
                  </p>
<a className="inline-flex items-center gap-2 text-xs text-gold-600 hover:text-gold-700 uppercase tracking-widest transition-colors" href="#">
                    Proximamente: Ver en mapa
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="py-32 bg-sage-50" id="guest-experience">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20 max-w-2xl mx-auto">
<span className="text-xs tracking-widest uppercase text-stone-400 mb-4 block font-medium">
            Para los invitados de Adrian &amp; Sofia
          </span>
<h2 className="font-serif text-4xl tracking-tight text-stone-800 mb-6">
            Guía de Viaje y Aventura
          </h2>
<p className="text-sm text-stone-500 font-light leading-relaxed">
            Queremos que tu experiencia en Perú sea inolvidable, aquí
            encontrarás recomendaciones para tu estadía en Lima y opciones para
            explorar el país. ESTAREMOS ACTUALIZANDO LA PAGINA CON MAS
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
<div className="bg-gradient-to-br from-white to-stone-50/50 p-8 rounded-2xl border border-stone-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-gold-500 mb-4" icon="solar:buildings-linear"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-stone-800 mb-2">
              Alojamiento
            </h3>
<p className="text-xs text-stone-500 font-light mb-4">
              Te sugerimos hospedarte cerca de La Molina y zonas estratégicas
              como Miraflores.
            </p>
<a className="text-xs text-stone-800 border-b border-stone-300 hover:border-gold-500 transition-colors pb-0.5" href="#">
              Pronto: hoteles sugeridos
            </a>
</div>
<div className="bg-gradient-to-br from-white to-stone-50/50 p-8 rounded-2xl border border-stone-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-gold-500 mb-4" icon="solar:routing-2-linear"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-stone-800 mb-2">
              Seguridad &amp; Transporte
            </h3>
<p className="text-xs text-stone-500 font-light mb-4">
              Recomendaciones para moverte seguro. Sugerimos usar apps de taxi
              oficiales como uber.
            </p>
<a className="text-xs text-stone-800 border-b border-stone-300 hover:border-gold-500 transition-colors pb-0.5" href="#">
              Tips de movilidad
            </a>
</div>
<div className="bg-gradient-to-br from-white to-stone-50/50 p-8 rounded-2xl border border-stone-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-gold-500 mb-4" icon="solar:sun-fog-linear"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-stone-800 mb-2">
              Kit de Viaje
            </h3>
<p className="text-xs text-stone-500 font-light mb-4">
              El clima en noviembre es primaveral. Moneda local: Soles (PEN).
            </p>
<a className="text-xs text-stone-800 border-b border-stone-300 hover:border-gold-500 transition-colors pb-0.5" href="#">
              Información útil
            </a>
</div>
</div>

<div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
<div className="p-8 md:p-12 border-b border-stone-100 text-center">
<h3 className="font-serif text-3xl tracking-tight text-stone-800 mb-3">
              Aventura, Presupuestos y Tiempos
            </h3>
<p className="text-sm text-stone-500 font-light">
              ¿Vienes de fuera? Mira estas aventuras según tu disponibilidad.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-8 md:p-10 border-b md:border-r border-stone-100">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[0.65rem] tracking-widest uppercase text-gold-600 font-medium bg-gold-50 px-2 py-1 rounded">
                    15 Días
                  </span>
<h4 className="font-serif text-2xl tracking-tight text-stone-800 mt-3">
                    El Gran Sur &amp; Selva
                  </h4>
</div>
<iconify-icon className="text-2xl text-stone-300" icon="solar:map-linear"></iconify-icon>
</div>
<p className="text-sm text-stone-600 font-light mb-5">
                La ruta más completa para tachar todo de la lista de deseos.
              </p>
<ul className="space-y-3 text-sm text-stone-600 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Paracas e Ica. Arequipa.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Cusco y Machu Picchu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Puerto Maldonado (Amazonia)</span>
</li>
</ul>
</div>
<div className="p-8 md:p-10 border-b border-stone-100 bg-stone-50/30">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[0.65rem] tracking-widest uppercase text-stone-400 font-medium bg-stone-100 px-2 py-1 rounded">
                    10 Días
                  </span>
<h4 className="font-serif text-2xl tracking-tight text-stone-800 mt-3">
                    Express 'Lo Esencial'
                  </h4>
</div>
<iconify-icon className="text-2xl text-stone-300" icon="solar:routing-2-linear"></iconify-icon>
</div>
<p className="text-sm text-stone-600 font-light mb-5">
                Para vivir la magia de Perú en poco tiempo.
              </p>
<ul className="space-y-3 text-sm text-stone-600 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Ruta de las Dunas (Ica/Paracas)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Cusco &amp; Machu Picchu completo</span>
</li>
</ul>
</div>
<div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-stone-100 bg-stone-50/30">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[0.65rem] tracking-widest uppercase text-gold-600 font-medium bg-gold-50 px-2 py-1 rounded">
                    15 Días
                  </span>
<h4 className="font-serif text-2xl tracking-tight text-stone-800 mt-3">
                    Selva Norte
                  </h4>
</div>
<iconify-icon className="text-2xl text-stone-300" icon="solar:leaf-linear"></iconify-icon>
</div>
<p className="text-sm text-stone-600 font-light mb-5">
                Mística andina y el río Amazonas.
              </p>
<ul className="space-y-3 text-sm text-stone-600 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Cusco / Machu Picchu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                    Vuelo a Iquitos (Lodge en la selva y delfines rosados)
                  </span>
</li>
</ul>
</div>
<div className="p-8 md:p-10">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[0.65rem] tracking-widest uppercase text-gold-600 font-medium bg-gold-50 px-2 py-1 rounded">
                    15 Días
                  </span>
<h4 className="font-serif text-2xl tracking-tight text-stone-800 mt-3">
                    Relax Norte Eterno
                  </h4>
</div>
<iconify-icon className="text-2xl text-stone-300" icon="solar:sun-2-linear"></iconify-icon>
</div>
<p className="text-sm text-stone-600 font-light mb-5">
                Historia inca y descanso en playas de arena blanca.
              </p>
<ul className="space-y-3 text-sm text-stone-600 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Cusco / Machu Picchu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Vuelo a Máncora/Vichayito (Surf y relax)</span>
</li>
</ul>
</div>
</div>
<div className="p-6 border-t border-stone-100 text-center bg-stone-50/50">
<a className="inline-flex items-center gap-2 text-xs text-gold-600 hover:text-gold-700 uppercase tracking-widest transition-colors font-medium" href="#">
              PRONTO ACTUALIZAREMOS MAS
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</main>

<main className="py-32 bg-white relative" id="confirmar">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl tracking-tight text-stone-800 mb-4">
            La historia de Sofia &amp; Adrian no está completa
            <span className="text-gold-600 italic font-light">sin ti</span>
</h2>
<p className="text-sm text-stone-500 font-light">
            Por favor, déjanos saber tu interés inicial mientras confirmamos la
            fecha exacta de Junio 2027.
          </p>
</div>
<div className="bg-gradient-to-b from-white to-stone-50/30 p-8 md:p-14 rounded-[2rem] shadow-2xl border border-stone-200/60 transition-shadow hover:shadow-3xl">
<form className="space-y-12" id="rsvp-form">

<div className="space-y-8">
<div>
<h3 className="text-xs tracking-widest uppercase text-stone-400 font-medium mb-6 flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-[0.6rem]">1</span>
                Tus Datos
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<label className="block text-xs text-stone-500 mb-1">Nombre Completo</label>
<input className="form-input text-stone-800" name="nombre" placeholder="Ej. Carlos Mendoza" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-stone-500 mb-1">Correo Electrónico</label>
<input className="form-input text-stone-800" name="email" placeholder="correo@ejemplo.com" required="" type="email"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="attendance-wrapper">
<label className="relative flex items-center justify-center p-4 border border-stone-200 rounded-xl cursor-pointer hover:border-gold-400 transition-colors group">
<input className="peer sr-only" name="attendance" type="radio" value="yes"/>
<div className="text-sm font-medium text-stone-600 peer-checked:text-gold-600 transition-colors">Asistiré con gusto</div>
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-gold-500 rounded-xl transition-colors"></div>
</label>
<label className="relative flex items-center justify-center p-4 border border-stone-200 rounded-xl cursor-pointer hover:border-stone-400 transition-colors group">
<input className="peer sr-only" name="attendance" type="radio" value="no"/>
<div className="text-sm font-medium text-stone-600 peer-checked:text-stone-800 transition-colors">Lamentablemente no podré</div>
<div className="absolute inset-0 border-2 border-transparent peer-checked:border-stone-800 rounded-xl transition-colors"></div>
</label>
</div>
</div>
<hr className="border-stone-100"/>

<div>
<h3 className="text-xs tracking-widest uppercase text-stone-400 font-medium mb-6 flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-[0.6rem]">2</span>
            ¿A qué eventos asistirás?
        </h3>
<div className="space-y-4">
<label className="custom-checkbox-wrapper flex items-start gap-4 cursor-pointer p-3 hover:bg-stone-50 rounded-lg transition-colors -ml-3">
<input checked="" className="sr-only" name="evento_preboda" type="checkbox" value="si"/>
<div className="w-4 h-4 mt-0.5 border border-stone-300 rounded flex-shrink-0 transition-colors flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div>
<span className="text-sm font-medium text-stone-800 block">Pre-boda: The Welcome Pisco</span>
</div>
</label>
<label className="custom-checkbox-wrapper flex items-start gap-4 cursor-pointer p-3 hover:bg-stone-50 rounded-lg transition-colors -ml-3">
<input checked="" className="sr-only" name="evento_civil" type="checkbox" value="si"/>
<div className="w-4 h-4 mt-0.5 border border-stone-300 rounded flex-shrink-0 transition-colors flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div>
<span className="text-sm font-medium text-stone-800 block">La Unión Civil</span>
</div>
</label>
<label className="custom-checkbox-wrapper flex items-start gap-4 cursor-pointer p-3 hover:bg-stone-50 rounded-lg transition-colors -ml-3">
<input checked="" className="sr-only" name="evento_garden" type="checkbox" value="si"/>
<div className="w-4 h-4 mt-0.5 border border-stone-300 rounded flex-shrink-0 transition-colors flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<div>
<span className="text-sm font-medium text-stone-800 block">The Garden Party</span>
</div>
</label>
</div>
</div>
<hr className="border-stone-100"/>

<div>
<h3 className="text-xs tracking-widest uppercase text-stone-400 font-medium mb-6 flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-[0.6rem]">3</span>
            Aventura y Viajes
        </h3>
<label className="block text-xs text-stone-500 mb-2">¿Te interesa unirte a alguna actividad sugerida?</label>
<div className="relative">
<select className="w-full appearance-none bg-stone-50 border border-stone-200 text-stone-800 text-sm rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-gold-400 transition-colors cursor-pointer" name="plan_aventura">
<option disabled="" selected="" value="">Selecciona un plan...</option>
<option value="express">Plan Express (10 días)</option>
<option value="full">Full Adventure (15 días)</option>
<option value="own">Ya tengo mi propio plan</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<hr className="border-stone-100"/>

<div>
<h3 className="text-xs tracking-widest uppercase text-stone-400 font-medium mb-6 flex items-center gap-2">
<span className="w-5 h-5 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-[0.6rem]">4</span>
            Detalles Finales
        </h3>
<div className="space-y-6">
<div>
<label className="block text-xs text-stone-500 mb-1">Restricciones alimentarias / Alergias</label>
<input className="form-input text-stone-800" name="alergias" placeholder="Ninguna" type="text"/>
</div>
<div>
<label className="block text-xs text-stone-500 mb-1">¿Qué canción te haría correr a la pista de baile?</label>
<input className="form-input text-stone-800" name="cancion" placeholder="Ej. Dancing Queen - ABBA" type="text"/>
</div>
</div>
</div>
<p className="hidden text-center text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg py-3 px-4" id="rsvp-validation-banner"></p>
<button className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-medium transition-colors shadow-sm disabled:opacity-50" id="rsvp-submit" type="submit">
        Enviar Confirmación
    </button>
<p className="text-center text-sm mt-4 hidden" id="rsvp-status"></p>
</form>

</div>

<div className="mt-24 text-center max-w-xl mx-auto">
<iconify-icon className="text-4xl text-gold-500 mb-6" icon="solar:box-minimalistic-linear"></iconify-icon>
<p className="text-sm text-stone-600 font-light mb-8 leading-relaxed">
            Tu presencia es nuestro mejor regalo, pero si deseas tener un
            detalle con nosotros, hemos habilitado las siguientes opciones:
          </p>
<details className="group bg-stone-50 rounded-2xl border border-stone-100 overflow-hidden text-left cursor-pointer">
<summary className="flex justify-between items-center p-6 text-sm font-medium text-stone-800">
              Opciones de Regalo
              <iconify-icon className="text-stone-400 transition-transform group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 border-t border-stone-100 mt-2 text-sm text-stone-600 font-light space-y-4">
<div>
<p className="font-medium text-stone-800 text-xs mb-1 uppercase tracking-wider">
                  Cuenta BCP (Soles)
                </p>
<p><a href="tel:194-12345678-0-12">194-31958595-0-06</a></p>
<p className="text-xs text-stone-400">CCI: 00219413195859500699</p>
</div>
<div>
<p className="font-medium text-stone-800 text-xs mb-1 uppercase tracking-wider">
                  REVOLUT (Euros)
                </p>
<p>
<a href="tel:200-987654321">-ES60 1583 0001 1790 3235 5127</a>
</p>
<p className="text-xs text-stone-400">
                  :
                  <a href="tel:00320098765432145"></a>
</p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium transition-colors" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon>
                  PROXIMAMENTE Mesa de Regalos Virtual
                </a>
</div>
</div>
</details>
</div>
</div>
</main>

<footer className="py-20 bg-stone-900 text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
<iconify-icon className="text-9xl text-white" icon="solar:hearts-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h2 className="font-serif text-3xl tracking-tight text-white mb-2">
          ¡Nos vemos en Lima!
        </h2>
<div className="font-serif text-xl tracking-tighter text-stone-500 mt-8">
          A &amp; S
        </div>
</div>
</footer>

    </>
  );
}
