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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed z-40 bg-stone-50/90 w-full border-stone-200/50 border-b top-0 backdrop-blur-sm">
<div className="flex h-20 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl text-stone-800 tracking-tighter font-serif" href="#">
          A &amp; S
        </a>
<nav className="hidden md:flex gap-8 uppercase text-xs text-stone-500 tracking-widest items-center">
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

<main className="bg-sage-50 pt-32 pb-32" id="guest-experience">
<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-16 max-w-3xl mx-auto">
<span className="text-xs tracking-widest uppercase text-stone-400 mb-4 block font-medium">
            Guest Experience
          </span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-stone-800 mb-6">
            Guía de Aventuras: Tu Experiencia en Perú
          </h2>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-8">
            Queremos que este viaje sea tan especial para ti como lo es para
            nosotros. Hemos preparado una guía con lo que necesitas saber para
            organizar tu estancia en este hermoso país durante el mes de junio,
            revisa todo y no olvides apuntarte a alguna de las expediciones que
            más te guste para ayudarte a coordinar con el resto de invitados.
          </p>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-900 text-white rounded-full text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:file-download-linear"></iconify-icon>
            Descargar Guía en PDF
          </a>
</div>

<div className="mb-24">
<div className="text-center mb-10">
<h3 className="font-serif text-3xl tracking-tight text-stone-800 mb-2">
              🎒 Preparativos Esenciales
            </h3>
<p className="text-sm text-stone-500 font-light">
              Clima y recomendaciones para tu maleta
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="aspect-video mb-5 rounded-xl overflow-hidden bg-stone-100">
<img alt="Lima" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h4 className="font-serif text-xl tracking-tight text-stone-800 mb-2">
                Lima (La Boda)
              </h4>
<p className="text-sm text-stone-600 font-light mb-4">
                Junio marca el inicio del invierno costero. Encontrarás días
                grises con mucha humedad (neblina), pero temperaturas frescas
                (14°C - 19°C).
              </p>
<p className="text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-100">
<strong className="font-medium text-stone-800">Outfit:</strong>
                Capas ligeras y una casaca para la noche.
              </p>
</div>
<div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="aspect-video mb-5 rounded-xl overflow-hidden bg-stone-100">
<img alt="Machu Picchu" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h4 className="font-serif text-xl tracking-tight text-stone-800 mb-2">
                Cusco y Sierra
              </h4>
<p className="text-sm text-stone-600 font-light mb-4">
                Es temporada seca y soleada. Los días son radiantes (20°C) pero
                las noches son muy frías (0°C).
              </p>
<p className="text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-100">
<strong className="font-medium text-stone-800">Outfit:</strong>
                Ropa térmica para la noche y bloqueador solar para el día.
              </p>
</div>
<div className="hover:shadow-md transition-all bg-white border-stone-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="aspect-video overflow-hidden bg-stone-100 rounded-xl mb-5">
<img alt="Selva" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f8829ee-7bff-4b74-9d6f-82dbf1a30e79_800w.jpg"/>
</div>
<h4 className="font-serif text-xl tracking-tight text-stone-800 mb-2">
                Selva (Amazonía)
              </h4>
<p className="text-sm text-stone-600 font-light mb-4">
                Puerto Maldonado / Iquitos. Clima tropical caluroso con alta
                humedad.
              </p>
<p className="text-xs text-stone-600 bg-stone-50 p-3 rounded-lg border border-stone-100">
<strong className="font-medium text-stone-800">Outfit:</strong>
                Ropa de algodón clara, manga larga y mucho repelente.
              </p>
</div>
</div>
</div>

<div className="mb-24">
<div className="text-center mb-10">
<h3 className="font-serif text-3xl tracking-tight text-stone-800 mb-2">
              📍 Nuestros Lugares Favoritos en Lima
            </h3>
<p className="text-sm text-stone-500 font-light">
              Explora el mapa para ver recomendaciones
            </p>
</div>
<div className="bg-white p-2 rounded-3xl shadow-sm border border-stone-100">
<iframe allowfullscreen="" className="rounded-2xl" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249743.7204456314!2d-77.1278636!3d-12.0266034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec3%3A0x14206cb9cc452e4a!2sLima%2C%20Per%C3%BA!5e0!3m2!1ses!2sus!4v1714486950293!5m2!1ses!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="mb-24">
<div className="text-center mb-10">
<h3 className="font-serif text-3xl tracking-tight text-stone-800 mb-2">
              Rutas Sugeridas Detalladas
            </h3>
<p className="text-sm text-stone-500 font-light">
              Elige tu propia aventura peruana
            </p>
</div>
<div className="space-y-6">
<div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
<div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
<div>
<span className="text-[0.65rem] tracking-widest uppercase text-gold-600 font-medium bg-gold-50 px-3 py-1 rounded-full">
                    15 Días
                  </span>
<h4 className="font-serif text-2xl tracking-tight text-stone-800 mt-3">
                    Ruta 1: El Gran Sur &amp; Selva Amazónica
                  </h4>
</div>
</div>
<p className="text-sm text-stone-600 font-medium mb-6">
                La ruta definitiva para quienes quieren tachar todo de su lista
                de deseos.
              </p>
<ul className="space-y-4 text-sm text-stone-600 font-light">
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 1-3: Lima (La Boda).
                    </strong>
                    Celebración y tour gastronómico en la capital.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 4-5: Paracas e Ica.
                    </strong>
                    Islas Ballestas, Reserva Nacional de Paracas y adrenalina en
                    los buggies de Huacachina.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 6-7: Arequipa.
                    </strong>
                    Vuelo a la "Ciudad Blanca". Visita al Monasterio de Santa
                    Catalina y cena frente a los volcanes.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 8-12: Cusco y Machu Picchu.
                    </strong>
                    Cusco (Aclimatación y City Tour), Valle Sagrado (Pisac y
                    Ollantaytambo), y Machu Picchu (El punto culminante).
                  </div>
</li>
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 13-15: Puerto Maldonado.
                    </strong>
                    Vuelo directo desde Cusco (45 min). Actividades: Navegación
                    por el río Madre de Dios, búsqueda de caimanes, canopy walk
                    y Lago Sandoval.
                  </div>
</li>
</ul>
</div>
<div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
<div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
<div>
<span className="text-[0.65rem] tracking-widest uppercase text-stone-500 font-medium bg-stone-100 px-3 py-1 rounded-full">
                    10 Días
                  </span>
<h4 className="font-serif text-2xl tracking-tight text-stone-800 mt-3">
                    Ruta 2: Express "Lo Esencial"
                  </h4>
</div>
</div>
<p className="text-sm text-stone-600 font-medium mb-6">
                Ideal para una experiencia completa en poco tiempo.
              </p>
<ul className="space-y-4 text-sm text-stone-600 font-light">
<li className="flex gap-3">
<span className="text-stone-400 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 1-3: Lima (La Boda).
                    </strong>
                    Bienvenida y eventos de boda.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-stone-400 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 4-5: Ruta de las Dunas.
                    </strong>
                    Viaje a Paracas e Ica para disfrutar de las Islas Ballestas
                    y el oasis de Huacachina.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-stone-400 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 6-10: El Imperio Inca.
                    </strong>
                    Vuelo a Cusco. Recorrido por el Valle Sagrado y visita
                    guiada a Machu Picchu antes de retornar a Lima.
                  </div>
</li>
</ul>
</div>
<div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
<div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
<div>
<span className="text-[0.65rem] tracking-widest uppercase text-gold-600 font-medium bg-gold-50 px-3 py-1 rounded-full">
                    15 Días
                  </span>
<h4 className="font-serif text-2xl tracking-tight text-stone-800 mt-3">
                    Ruta 3: Aventura en la Selva Norte
                  </h4>
</div>
</div>
<p className="text-sm text-stone-600 font-medium mb-6">
                Mística andina combinada con el río más caudaloso del mundo.
              </p>
<ul className="space-y-4 text-sm text-stone-600 font-light">
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 1-3: Lima (La Boda).
                    </strong>
                    Disfruta de la mejor comida del mundo en la capital.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 4-9: Cusco y Machu Picchu.
                    </strong>
                    Historia viva en los Andes, mercados locales y la maravilla
                    del mundo.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 10-15: Iquitos (Amazonas).
                    </strong>
                    Vuelo vía Lima hacia Iquitos. Actividades: Lodge en la
                    selva, navegación por el Amazonas, avistamiento de delfines
                    rosados y visita a comunidades locales.
                  </div>
</li>
</ul>
</div>
<div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
<div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
<div>
<span className="text-[0.65rem] tracking-widest uppercase text-gold-600 font-medium bg-gold-50 px-3 py-1 rounded-full">
                    15 Días
                  </span>
<h4 className="font-serif text-2xl tracking-tight text-stone-800 mt-3">
                    Ruta 4: Relax en el Norte Eterno
                  </h4>
</div>
</div>
<p className="text-sm text-stone-600 font-medium mb-6">
                Cultura histórica seguida de sol y playas de arena blanca.
              </p>
<ul className="space-y-4 text-sm text-stone-600 font-light">
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 1-3: Lima (La Boda).
                    </strong>
                    Inicio de la celebración.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 4-9: Cusco y Machu Picchu.
                    </strong>
                    Inmersión total en la cultura Inca y paisajes montañosos.
                  </div>
</li>
<li className="flex gap-3">
<span className="text-gold-500 font-medium mt-0.5">•</span>
<div>
<strong className="text-stone-800 font-medium">
                      Días 10-15: Máncora y Vichayito.
                    </strong>
                    Vuelo al norte (Piura o Talara). Actividades: Relax frente
                    al mar, surf, avistamiento de ballenas y la mejor
                    gastronomía marina del norte.
                  </div>
</li>
</ul>
</div>
</div>
</div>

<div className="mb-24">
<div className="text-center mb-10">
<h3 className="font-serif text-3xl tracking-tight text-stone-800 mb-2">
              Desglose de Costos por Actividad
            </h3>
<p className="text-sm text-stone-500 font-light">
              Estimaciones para ayudarte a planificar
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
<div className="p-6 bg-stone-50 border-b border-stone-200">
<h4 className="font-serif text-xl tracking-tight text-stone-800 mb-1">
                  1. Paracas e Ica
                </h4>
<p className="text-xs text-stone-500 font-light">
                  La Ruta de las Dunas
                </p>
</div>
<div className="p-0 overflow-x-auto flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-white text-[0.65rem] uppercase tracking-widest text-stone-400 border-b border-stone-200">
<th className="p-4 font-medium">Actividad</th>
<th className="p-4 font-medium">Mochilero</th>
<th className="p-4 font-medium">Confort</th>
</tr>
</thead>
<tbody className="text-sm text-stone-600 font-light divide-y divide-stone-100">
<tr>
<td className="p-4 font-medium text-stone-800">
                        Islas Ballestas
                      </td>
<td className="p-4">$15 - $20</td>
<td className="p-4">$40 - $50</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">
                        Reserva Paracas
                      </td>
<td className="p-4">$10</td>
<td className="p-4">$30</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">
                        Buggies &amp; Sandboard
                      </td>
<td className="p-4">$15 - $25</td>
<td className="p-4">$45+</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">
                        Cata Pisco/Vino
                      </td>
<td className="p-4">Gratis/$5</td>
<td className="p-4">$20 - $30</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
<div className="p-6 bg-stone-50 border-b border-stone-200">
<h4 className="font-serif text-xl tracking-tight text-stone-800 mb-1">
                  2. Cusco y Machu Picchu
                </h4>
<p className="text-xs text-stone-500 font-light">El Imperio Inca</p>
</div>
<div className="p-0 overflow-x-auto flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-white text-[0.65rem] uppercase tracking-widest text-stone-400 border-b border-stone-200">
<th className="p-4 font-medium">Actividad</th>
<th className="p-4 font-medium">Mochilero</th>
<th className="p-4 font-medium">Comfort</th>
</tr>
</thead>
<tbody className="text-sm text-stone-600 font-light divide-y divide-stone-100">
<tr>
<td className="p-4 font-medium text-stone-800">
                        Boleto Turístico
                      </td>
<td className="p-4">$35</td>
<td className="p-4">$35</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">
                        Tren a M. Picchu
                      </td>
<td className="p-4">$120 - $140</td>
<td className="p-4">$180 - $450</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">
                        Bus subida/bajada
                      </td>
<td className="p-4">$24</td>
<td className="p-4">$24</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">
                        Entrada M. Picchu
                      </td>
<td className="p-4">$45</td>
<td className="p-4">$45</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
<div className="p-6 bg-stone-50 border-b border-stone-200">
<h4 className="font-serif text-xl tracking-tight text-stone-800 mb-1">
                  3. Selva Amazónica
                </h4>
<p className="text-xs text-stone-500 font-light">
                  Puerto Maldonado o Iquitos (Packs 3D/2N)
                </p>
</div>
<div className="p-0 overflow-x-auto flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-white text-[0.65rem] uppercase tracking-widest text-stone-400 border-b border-stone-200">
<th className="p-4 font-medium">Destino</th>
<th className="p-4 font-medium">Mochilero</th>
<th className="p-4 font-medium">Comfort</th>
</tr>
</thead>
<tbody className="text-sm text-stone-600 font-light divide-y divide-stone-100">
<tr>
<td className="p-4 font-medium text-stone-800">
                        Puerto Maldonado
                      </td>
<td className="p-4">$250 - $350</td>
<td className="p-4">$550 - $900</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">Iquitos</td>
<td className="p-4">$200 - $300</td>
<td className="p-4">$1,200+</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
<div className="p-6 bg-stone-50 border-b border-stone-200">
<h4 className="font-serif text-xl tracking-tight text-stone-800 mb-1">
                  4. Norte Eterno
                </h4>
<p className="text-xs text-stone-500 font-light">
                  Máncora / Vichayito
                </p>
</div>
<div className="p-0 overflow-x-auto flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-white text-[0.65rem] uppercase tracking-widest text-stone-400 border-b border-stone-200">
<th className="p-4 font-medium">Actividad</th>
<th className="p-4 font-medium">Costo Estimado</th>
</tr>
</thead>
<tbody className="text-sm text-stone-600 font-light divide-y divide-stone-100">
<tr>
<td className="p-4 font-medium text-stone-800">
                        Clase de Surf
                      </td>
<td className="p-4">$20 - $35</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">
                        Avistamiento Ballenas
                      </td>
<td className="p-4">$40 - $60</td>
</tr>
<tr>
<td className="p-4 font-medium text-stone-800">
                        Cena de Mariscos
                      </td>
<td className="p-4">$15 - $40</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-stone-800 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
<iconify-icon className="absolute -bottom-6 -right-6 text-9xl text-stone-700/50 pointer-events-none" icon="solar:wallet-money-bold"></iconify-icon>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-3xl text-gold-400" icon="solar:info-circle-linear"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight">
                  Nota Importante
                </h3>
</div>
<p className="text-sm font-light leading-relaxed text-stone-300">
<strong className="text-white font-medium">
                  Presupuesto Extra:
                </strong>
                Se recomienda considerar un 20% adicional para compras de
                artesanías, propinas y cenas especiales en Lima (restaurantes
                como Central o Maido requieren reserva previa y el menú
                degustación ronda los $200-$300 USD).
              </p>
</div>
</div>
<div className="overflow-hidden bg-gold-50 border-gold-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<iconify-icon className="absolute -bottom-6 -right-6 text-9xl text-gold-200/50 pointer-events-none" icon="solar:lightbulb-bold"></iconify-icon>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-3xl text-gold-600" icon="solar:star-linear"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight text-stone-800">
                  Recomendaciones de Oro
                </h3>
</div>
<ul className="text-sm font-light text-stone-700 space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 mt-0.5 text-lg flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">
<strong className="text-stone-900 font-medium">
                      Transporte:
                    </strong>
                    Recomendamos usar Uber o Cabify en Lima por seguridad y
                    tarifas transparentes.
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 mt-0.5 text-lg flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">
<strong className="text-stone-900 font-medium">
                      Salud (Soroche):
                    </strong>
                    Para Cusco, descansa las primeras horas y toma Mate de Coca
                    para evitar el mal de altura.
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gold-500 mt-0.5 text-lg flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">
<strong className="text-stone-900 font-medium">
                      Conectividad:
                    </strong>
                    Puedes conseguir una tarjeta SIM local en centros
                    comerciales con tu pasaporte.
                  </span>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>


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
<p><a href="tel:194-12345678-0-12">194-12345678-0-12</a></p>
<p className="text-xs text-stone-400">CCI: 0021941234567801212</p>
</div>
<div>
<p className="font-medium text-stone-800 text-xs mb-1 uppercase tracking-wider">
                  Cuenta Interbank (Dólares)
                </p>
<p><a href="tel:200-987654321">200-987654321</a></p>
<p className="text-xs text-stone-400">
                  CCI:
                  <a href="tel:00320098765432145">00320098765432145</a>
</p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium transition-colors" href="#">
<iconify-icon icon="solar:link-linear"></iconify-icon>
                  Ver Mesa de Regalos Virtual
                </a>
</div>
</div>
</details>
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
