import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Lucide
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        const y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
      });

      // Data (exacta, según base proporcionada)
      const DB = {
        puertas: {
          'Polaris': { material: 'Metálica', diseno: 'Vitral superior de 9 luces + 2 paneles inferiores', uso: 'Entrada principal (elegante y luminosa)', anchos: ['80cm','90cm'], colores: ['Arena','Chocolate'], incluye: 'Incluye marco y cerradura', altura: '2.13 m' },
          'Sirius': { material: 'Metálica o HDF (consultar stock)', diseno: 'Clásico de 6 paneles', uso: 'Recámaras o baños (privacidad total)', anchos: ['70cm','80cm','90cm'], colores: ['Arena','Chocolate'], incluye: 'Incluye marco y cerradura', altura: '2.13 m' },
          'Capella': { material: 'Metálica', diseno: 'Lisa / plana (minimalista)', uso: 'Pasillos, oficinas, estilo moderno', anchos: ['70cm','80cm','90cm'], colores: ['Arena','Chocolate'], incluye: 'Incluye marco y cerradura', altura: '2.13 m' },
          'Columba': { material: 'Metálica', diseno: 'Media luna superior troquelada + 4 paneles', uso: 'Fachadas clásicas', anchos: ['80cm','90cm'], colores: ['Arena','Chocolate'], incluye: 'Incluye marco y cerradura', altura: '2.13 m' },
          'Veritate': { material: 'Metálica', diseno: '4 líneas de aluminio horizontales incrustadas', uso: 'Fachadas contemporáneas', anchos: ['80cm','90cm'], colores: ['Chocolate'], incluye: 'Incluye marco y cerradura', altura: '2.13 m' },
          'Antares': { material: 'HDF', diseno: 'Lisa completa', uso: 'Interiores económicos', anchos: ['70cm','80cm','90cm'], colores: ['Arena','Chocolate','Roble'], incluye: 'Incluye marco y cerradura', altura: '2.13 m' },
          'Becrux': { material: 'Metálica', diseno: '3 vitrales rectangulares verticales en diagonal', uso: 'Entrada principal moderna', anchos: ['90cm'], colores: ['Chocolate'], incluye: 'Incluye marco y cerradura', altura: '2.13 m' }
        },
        ventanas: {
          'Corrediza (XO)': { linea: 'Nacional 1½"', sistema: 'Corrediza XO', vidrio: '3–6 mm', colores: ['Blanco','Bronce','Natural (mate)','Natural (pulido)','Gris Europa','Champagne','Madera'], notas: 'Ensamble rápido, corte a 90°, resistente a corrosión.' },
          'Guillotina': { linea: 'Nacional 1½"', sistema: 'Guillotina', vidrio: '3–6 mm', colores: ['Blanco','Bronce','Natural (mate)','Natural (pulido)','Gris Europa','Champagne','Madera'], notas: 'Ensamble rápido, corte a 90°, resistente a corrosión.' },
          'Fijo': { linea: 'Nacional 1½"', sistema: 'Fijo', vidrio: '3–6 mm', colores: ['Blanco','Bronce','Natural (mate)','Natural (pulido)','Gris Europa','Champagne','Madera'], notas: 'Ensamble rápido, corte a 90°, resistente a corrosión.' }
        }
      };

      // Helpers
      const $ = (s, p=document) => p.querySelector(s);
      const fillSelect = (sel, arr) => { sel.innerHTML = ''; arr.forEach(v => { const o = document.createElement('option'); o.value = v; o.textContent = v; sel.appendChild(o); }); };

      // Populate initial selects
      const tipoSel = $('#g-tipo'), modeloSel = $('#g-modelo'), usoSel = $('#g-uso'), anchoSel = $('#g-ancho'), colorSel = $('#g-color'), vidrioSel = $('#g-vidrio');
      function loadModelos() {
        const tipo = tipoSel.value;
        modeloSel.innerHTML = '';
        if (tipo === 'puerta') {
          Object.keys(DB.puertas).forEach(m => {
            const o = document.createElement('option'); o.value = m; o.textContent = `Puerta - ${m}`; modeloSel.appendChild(o);
          });
          vidrioSel.value = '';
          vidrioSel.disabled = true;
          const m0 = Object.keys(DB.puertas)[0];
          fillSelect(anchoSel, DB.puertas[m0].anchos);
          fillSelect(colorSel, DB.puertas[m0].colores);
        } else {
          ['Corrediza (XO)','Guillotina','Fijo'].forEach(m => {
            const o = document.createElement('option'); o.value = m; o.textContent = `Ventana - ${m}`; modeloSel.appendChild(o);
          });
          vidrioSel.disabled = false;
          const m0 = 'Corrediza (XO)';
          fillSelect(anchoSel, ['—']);
          fillSelect(colorSel, DB.ventanas[m0].colores);
        }
      }
      function onModeloChange() {
        const tipo = tipoSel.value;
        const m = modeloSel.value.replace(/^Puerta - /,'').replace(/^Ventana - /,'');
        if (tipo === 'puerta') {
          const d = DB.puertas[m];
          if (d) { fillSelect(anchoSel, d.anchos); fillSelect(colorSel, d.colores); }
          vidrioSel.value = '';
          vidrioSel.disabled = true;
        } else {
          const d = DB.ventanas[m];
          if (d) { fillSelect(colorSel, d.colores); }
          fillSelect(anchoSel, ['—']);
          vidrioSel.disabled = false;
        }
      }
      tipoSel.addEventListener('change', loadModelos);
      modeloSel.addEventListener('change', onModeloChange);
      loadModelos();

      // Generator
      const outW = $('#out-wapp'), outS = $('#out-social'), outG = $('#out-guion');
      function urgenciaLine(code) {
        switch(code){
          case 'ultima': return '🔥 Liquidación: últimas piezas. Hasta agotar existencias.';
          case 'hoy': return '🔥 Podemos entregar hoy mismo. Hasta agotar existencias.';
          case 'agotarse': return '🔥 A punto de agotarse. Apártala hoy.';
          default: return '🔥 Liquidación por tiempo limitado. Hasta agotar existencias.';
        }
      }
      function sugerenciaUso(uso) {
        if (uso === 'entrada' || uso === 'fachada') return 'Para entrada principal te van perfecto Polaris, Columba o Veritate por su construcción metálica y estética de fachada.';
        if (uso === 'bano' || uso === 'recamara') return 'Para baño o recámara recomendamos Sirius o Capella — opciones más cerradas y económicas.';
        if (uso === 'interior' || uso === 'pasillo') return 'Para interiores y pasillos, Capella o Antares son excelentes opciones por su diseño liso.';
        return '';
      }
      function buildContents() {
        const tipo = tipoSel.value;
        const modelo = modeloSel.value.replace(/^Puerta - /,'').replace(/^Ventana - /,'');
        const uso = usoSel.value;
        const ancho = anchoSel.value;
        const color = colorSel.value;
        const vidrio = vidrioSel.value;
        const urg = urgenciaLine($('#g-urgencia').value);
        const ubic = 'Col. Francisco I. Madero, Mérida.';

        if (tipo === 'puerta') {
          const d = DB.puertas[modelo];
          const lineUso = sugerenciaUso(uso);
          outW.value =
`¡Hola, vecino! 👋 Gracias por escribir.
Te recomiendo la puerta ${modelo} ${ancho !== '—' ? `de ${ancho} ` : ''}en color ${color} para tu ${uso === 'bano' ? 'baño' : uso === 'recamara' ? 'recámara' : uso}. 🚪🏠
• Material: ${d.material}
• Diseño: ${d.diseno}
• Medidas disponibles: ${d.anchos.join(', ')} (altura ${d.altura})
• Colores: ${d.colores.join(', ')}
• ${d.incluye}
${lineUso ? 'Tip: ' + lineUso : ''}
${urg}
No realizamos instalaciones, pero el kit va listo para que tu albañil lo instale. 🛠️
¿La apartamos por este medio?`;

          outS.value =
`1) 🚪 ${modelo} ${color} — ${d.diseno}
${urg}
• ${d.material} • ${d.incluye} • Altura ${d.altura}
${ubic} Sin instalación. #Outlet #Mérida

2) 🏠 Renueva tu entrada con ${modelo} (${d.anchos.join('/')}).
${urg}
Colores: ${d.colores.join(', ')}. ${ubic} Sin instalación. 🔨

3) 🔥 ¡Últimos! ${modelo} para ${d.uso}.
${d.material}. ${d.incluye}. Altura ${d.altura}.
Escríbenos para apartar. ${ubic}`;

          outG.value =
`Apertura:
"¡Hola, vecino! Soy de Outlet Marca. Vi que buscas ${uso}. Te propongo nuestra ${modelo}, es ${d.material.toLowerCase()} y luce increíble en ${d.uso.toLowerCase()}."

Diagnóstico breve:
"¿Qué ancho necesitas, 70/80/90 cm? ¿Y color: ${d.colores.join(' o ')}?"

Propuesta de valor:
"Viene con marco y cerradura, altura ${d.altura}. Diseño: ${d.diseno}. Lista para instalar con tu albañil."

Urgencia:
"${urg}"

Cierre:
"¿Te la aparto ahora mismo por WhatsApp? La guardamos a tu nombre y pasas por ella en tienda (Madero, Mérida)."

Objeción instalación:
"Nosotros no instalamos, vecino, pero el kit viene listo para que tu albañil lo coloque sin problema. 🛠️"`;
        } else {
          const d = DB.ventanas[modelo];
          const vidrioTxt = vidrio ? ` con vidrio sencillo de ${vidrio}` : ' con vidrio sencillo (3–6 mm)';
          outW.value =
`¡Hola, vecino! 👋 Sobre la ventana ${modelo}:
• Línea: ${d.linea}
• Sistema: ${d.sistema}${vidrio ? ` • Vidrio: ${vidrio}` : ' • Vidrio: 3–6 mm'}
• Colores de aluminio: ${d.colores.join(', ')}
• ${d.notas}
• ${d.notas}
${urg}
No realizamos instalaciones, pero te la entregamos lista para que tu albañil la instale. 🛠️
¿La apartamos por este medio?`;

          outS.value =
`1) 🪟 ${modelo} en aluminio — ${d.linea}
${urg}
Sistema: ${d.sistema}${vidrioTxt}.
Colores: ${d.colores.join(', ')}.
${ubic} Sin instalación. #Ventanas #Outlet #Mérida

2) Moderniza tus espacios con ${modelo}.
${urg}
Aluminio ${d.linea}${vidrio ? ` • Vidrio ${vidrio}` : ' • Vidrio 3–6 mm'} • ${d.notas}
Colores: ${d.colores.join(', ')}. ${ubic}

3) Últimas unidades: ${modelo} (${d.sistema}).
${d.linea}${vidrio ? ` • ${vidrio}` : ' • Vidrio 3–6 mm'}.
Escríbenos para apartar hoy. ${ubic} Sin instalación. 🔨`;

          outG.value =
`Apertura:
"¡Hola, vecino! Soy de Outlet Marca. Para tu ventana tipo ${modelo}, trabajamos en aluminio ${d.linea}."

Diagnóstico breve:
"¿La quieres con vidrio de 3, 4 o 6 mm? ¿Qué color de aluminio te gusta más: ${d.colores.slice(0,5).join(', ')} o ${d.colores[d.colores.length-1]}?"

Propuesta de valor:
"Es un sistema ${d.sistema.toLowerCase()}${vidrio ? ` con vidrio ${vidrio}` : ' con vidrio sencillo 3–6 mm'}. ${d.notas}."

Urgencia:
"${urg}"

Cierre:
"¿La aparto a tu nombre y pasas por ella en tienda (Madero, Mérida)? Te la dejamos lista."

Objeción instalación:
"No instalamos, vecino, pero la entregamos lista para que tu albañil la coloque sin complicaciones. 🛠️"`;
        }
      }

      // Bind generate
      $('#g-generar').addEventListener('click', () => {
        buildContents();
        // pequeña animación visual
        ['#out-wapp','#out-social','#out-guion'].forEach(sel => {
          const el = $(sel);
          el.classList.remove('ring-emerald-300','bg-emerald-50');
          void el.offsetWidth;
          el.classList.add('ring-emerald-300','bg-emerald-50');
          setTimeout(() => el.classList.remove('ring-emerald-300','bg-emerald-50'), 600);
        });
      });

      // Copy to clipboard
      document.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const sel = btn.getAttribute('data-copy');
          const target = $(sel);
          if (!target) return;
          const text = target.value || target.innerText || '';
          try {
            if (navigator.clipboard && window.isSecureContext) {
              await navigator.clipboard.writeText(text);
            } else {
              target.select(); document.execCommand('copy');
            }
            const original = btn.innerHTML;
            btn.innerHTML = `<svg data-lucide="check" width="16" height="16" stroke-width="1.5" class="w-3.5 h-3.5" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"/></svg> Copiado`;
            if (window.lucide && lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            setTimeout(() => { btn.innerHTML = original; if (window.lucide && lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }, 1200);
          } catch(e) { console.error(e); }
        });
      });

      // Generar contenidos iniciales
      buildContents();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4 text-sm">
<p className="hidden sm:flex items-center gap-4">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-phone w-4 h-4 opacity-80" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<a className="hover:underline" href="tel:+529993514016">+52 999 351 4016</a>
</span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-mail w-4 h-4 opacity-80" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:underline" href="mailto:hola@outletmarca.mx">hola@outletmarca.mx</a>
</span>
</p>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-600 px-2.5 py-1 ring-1 ring-emerald-500/20">
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Kits listos para instalar
          </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 text-rose-600 px-2.5 py-1 ring-1 ring-rose-500/20">
<svg className="lucide lucide-flame w-4 h-4" data-lucide="flame" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
            Liquidación: hasta agotar existencias
          </span>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center text-xs font-semibold tracking-tight">OM</div>
<span className="hidden sm:block text-slate-900 font-semibold tracking-tight">Outlet Marca</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline" href="#ofertas">Ofertas</a>
<a className="text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline" href="#puertas">Puertas</a>
<a className="text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline" href="#ventanas">Ventanas</a>
<a className="text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline" href="#generadores">Generadores</a>
<a className="text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline" href="#faq">FAQ</a>
<a className="text-slate-700 hover:text-slate-900 underline-offset-4 hover:underline" href="#ubicacion">Ubicación</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900/20" href="https://api.whatsapp.com/send/?phone=529993514016&amp;text=Hola%20Outlet%20Marca%2C%20quiero%20apartar%20una%20oferta&amp;type=phone_number&amp;app_absent=0">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            WhatsApp
          </a>
</div>
</div>
</header>

<section className="overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
<div className="grid lg:grid-cols-2 gap-10 gap-x-10 gap-y-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/20 text-sm">
<svg className="lucide lucide-alarm-clock w-4 h-4" data-lucide="alarm-clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
              Últimas piezas en liquidación
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">Puertas y ventanas outlet en Mérida — kits listos para instalar</h1>
<p className="mt-4 text-slate-700 text-base sm:text-lg">Vecino, renueva tu casa con ofertas reales. Entrega inmediata en Col. Francisco I. Madero. No instalamos: te entregamos el kit completo para que tú o tu albañil lo instalen. Hasta agotar existencias. 🔥</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-900/20" href="#ofertas">
                Ver ofertas de hoy
                <svg className="lucide lucide-arrow-right w-[18px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white hover:shadow-sm text-sm font-semibold text-slate-900 border-slate-900/20 border-2 rounded-lg pt-3 pr-5 pb-3 pl-5" href="#generadores">Ver productos </a><svg className="lucide lucide-arrow-right w-[18px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
<div className="rounded-lg ring-1 ring-slate-200 bg-white px-3 py-2">Entrega inmediata</div>
<div className="rounded-lg ring-1 ring-slate-200 bg-white px-3 py-2">Pagos en tienda</div>
<div className="rounded-lg ring-1 ring-slate-200 bg-white px-3 py-2">Factura disponible</div>
<div className="rounded-lg ring-1 ring-slate-200 bg-white px-3 py-2">Garantía de fábrica</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 bg-white">
<img alt="Puertas y ventanas outlet" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-5 left-4 right-4 bg-white rounded-xl shadow-lg ring-1 ring-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="text-sm">
<div className="font-medium text-slate-900">Col. Francisco I. Madero, Mérida</div>
<div className="text-slate-600">Horario: Lun–Sáb 9:00–18:00</div>
</div>
<a className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700" href="https://api.whatsapp.com/send/?phone=529993514016&amp;text=Hola%2C%20quiero%20ver%20las%20ofertas%20de%20Outlet%20Marca&amp;type=phone_number&amp;app_absent=0">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  Llamar/WhatsApp
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-16 bg-white border-slate-200 border-t pt-12 pb-12" id="ofertas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ofertas de liquidación</h2>
<p className="text-slate-600 mt-2">Modelos seleccionados con entrega inmediata. Hasta agotar existencias. 🔥</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 hover:underline underline-offset-4 text-sm text-slate-900" href="#generadores">Comprar ahora -&gt;</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] hover:bg-white overflow-hidden p-5 transition duration-300 hover:shadow-xl hover:scale-[1.01]">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Puerta Polaris</h3>
<span className="text-xs inline-flex items-center gap-1 rounded-full bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/20 px-2 py-0.5">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Últimas piezas
              </span>
</div>
<p className="text-sm text-slate-600 mt-1">Metálica, vitral superior de 9 luces + 2 paneles inferiores. Ideal para entrada principal elegante y luminosa. Incluye marco y cerradura. Altura 2.13 m.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Anchos: 80/90 cm</li>
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Colores: Arena, Chocolate</li>
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Uso: Entrada</li>
</ul>
<div className="flex mt-4 items-center justify-end">
<a className="inline-flex items-center gap-2 hover:bg-slate-800 text-sm font-semibold text-white text-justify bg-slate-900 rounded-lg px-3 py-2" href="https://api.whatsapp.com/send/?phone=529993514016&amp;text=Quiero%20apartar%20Puerta%20Polaris%20en%20liquidaci%C3%B3n&amp;type=phone_number&amp;app_absent=0">
                Apartar
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>
<article className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] hover:bg-white overflow-hidden p-5 transition duration-300 hover:shadow-xl hover:scale-[1.01]">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Puerta Columba</h3>
<span className="text-xs inline-flex items-center gap-1 rounded-full bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/20 px-2 py-0.5">
<svg className="lucide lucide-flame w-3.5 h-3.5" data-lucide="flame" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
                Liquidación
              </span>
</div>
<p className="text-sm text-slate-600 mt-1">Metálica, media luna superior troquelada + 4 paneles. Estilo clásico para fachadas. Incluye marco y cerradura. Altura 2.13 m.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Anchos: 80/90 cm</li>
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Colores: Arena, Chocolate</li>
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Uso: Fachadas clásicas</li>
</ul>
<div className="flex mt-4 items-center justify-end">
<a className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800" href="https://api.whatsapp.com/send/?phone=529993514016&amp;text=Quiero%20apartar%20Puerta%20Columba%20en%20liquidaci%C3%B3n&amp;type=phone_number&amp;app_absent=0">
                Apartar
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>
<article className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] hover:bg-white overflow-hidden p-5 transition duration-300 hover:shadow-xl hover:scale-[1.01]">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Puerta Veritate</h3>
<span className="text-xs inline-flex items-center gap-1 rounded-full bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/20 px-2 py-0.5">
<svg className="lucide lucide-alarm-clock w-3.5 h-3.5" data-lucide="alarm-clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
                Pocas unidades
              </span>
</div>
<p className="text-sm text-slate-600 mt-1">Metálica con 4 líneas de aluminio horizontales incrustadas. Moderna para fachadas contemporáneas. Incluye marco y cerradura. Altura 2.13 m.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Anchos: 80/90 cm</li>
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Color: Chocolate</li>
<li className="rounded-md bg-white ring-1 ring-slate-200 px-2 py-1">Uso: Fachadas modernas</li>
</ul>
<div className="flex mt-4 items-center justify-between">
<a className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800" href="https://api.whatsapp.com/send/?phone=529993514016&amp;text=Quiero%20apartar%20Puerta%20Veritate%20en%20liquidaci%C3%B3n&amp;type=phone_number&amp;app_absent=0">
                Apartar
                <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-[#f6f7f9] border-t border-slate-200" id="puertas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Puertas con marco y cerradura (2.13 m)</h2>
<p className="text-slate-600 mt-2">Elige por uso y ancho. Tip: Entrada principal → Polaris, Columba o Veritate por su seguridad metálica y estética. 🚪🏠</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-900 hover:underline underline-offset-4" href="#generadores">
            Responder a un cliente
            <svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
<img alt="Puerta Polaris" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Polaris</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Metálica</span>
</div>
<p className="mt-1 text-sm text-slate-600">Vitral superior de 9 luces + 2 paneles inferiores. Ideal para entrada principal.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">80/90 cm</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Arena</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Chocolate</li>
</ul>
</div>
</div>

<div className="group rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
<img alt="Puerta Sirius" className="h-44 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Sirius</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Metálica o HDF (consultar stock)</span>
</div>
<p className="mt-1 text-sm text-slate-600">Clásico de 6 paneles. Ideal para recámaras o baños (privacidad total).</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">70/80/90 cm</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Arena</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Chocolate</li>
</ul>
</div>
</div>

<div className="group rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
<img alt="Puerta Capella" className="h-44 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Capella</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Metálica</span>
</div>
<p className="mt-1 text-sm text-slate-600">Lisa / plana (minimalista). Ideal para pasillos, oficinas y estilo moderno.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">70/80/90 cm</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Arena</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Chocolate</li>
</ul>
</div>
</div>

<div className="group rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
<img alt="Puerta Columba" className="h-44 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Columba</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Metálica</span>
</div>
<p className="mt-1 text-sm text-slate-600">Media luna superior troquelada + 4 paneles. Para fachadas clásicas.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">80/90 cm</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Arena</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Chocolate</li>
</ul>
</div>
</div>

<div className="group rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
<img alt="Puerta Veritate" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Veritate</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Metálica</span>
</div>
<p className="mt-1 text-sm text-slate-600">4 líneas de aluminio horizontales. Moderna para fachadas contemporáneas.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">80/90 cm</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Color: Chocolate</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Uso: Fachada</li>
</ul>
</div>
</div>

<div className="group rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
<img alt="Puerta Antares" className="h-44 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Antares</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">HDF</span>
</div>
<p className="mt-1 text-sm text-slate-600">Lisa completa. Opción económica para interiores.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">70/80/90 cm</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Arena / Chocolate</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Roble</li>
</ul>
</div>
</div>

<div className="group rounded-xl ring-1 ring-slate-200 bg-white overflow-hidden hover:shadow-lg transition">
<img alt="Puerta Becrux" className="h-44 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Becrux</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Metálica</span>
</div>
<p className="mt-1 text-sm text-slate-600">3 vitrales rectangulares verticales en diagonal. Entrada principal moderna.</p>
<ul className="mt-3 text-xs text-slate-700 grid grid-cols-3 gap-2">
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">90 cm</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Chocolate</li>
<li className="rounded bg-[#f8fafc] ring-1 ring-slate-200 px-2 py-1">Uso: Entrada</li>
</ul>
</div>
</div>
</div>

</div>
</section>

<section className="py-12 sm:py-16 bg-white border-t border-slate-200" id="ventanas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ventanas y cancelería de aluminio</h2>
<p className="text-slate-600 mt-2">Línea Nacional (1½"). Sistemas fijos y corredizos. Vidrio sencillo 3–6 mm. Ensamble rápido, corte a 90°, resistente a corrosión.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-900 hover:underline underline-offset-4" href="#generadores">
            Redactar respuesta para cliente
            <svg className="lucide lucide-reply w-4 h-4" data-lucide="reply" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] hover:bg-white p-5 transition">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Ventana Corrediza (XO)</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Sistema</span>
</div>
<p className="text-sm text-slate-600 mt-1">Configuración XO. Aluminio 1½". Vidrio sencillo 3–6 mm.</p>
<p className="mt-2 text-xs text-slate-700">Colores: Blanco, Bronce, Natural (mate/pulido), Gris Europa, Champagne, Madera.</p>
</div>
<div className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] hover:bg-white p-5 transition">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Guillotina</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Sistema</span>
</div>
<p className="text-sm text-slate-600 mt-1">Apertura vertical. Aluminio 1½". Vidrio sencillo 3–6 mm.</p>
<p className="mt-2 text-xs text-slate-700">Colores: Blanco, Bronce, Natural (mate/pulido), Gris Europa, Champagne, Madera.</p>
</div>
<div className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] hover:bg-white p-5 transition">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Fijos</h3>
<span className="text-[11px] rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-2 py-0.5">Sistema</span>
</div>
<p className="text-sm text-slate-600 mt-1">Panel fijo. Aluminio 1½". Vidrio sencillo 3–6 mm.</p>
<p className="mt-2 text-xs text-slate-700">Colores: Blanco, Bronce, Natural (mate/pulido), Gris Europa, Champagne, Madera.</p>
</div>
</div>
</div>
</section>


<section className="py-12 sm:py-14 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">¿Listo para apartar? Respuesta en minutos por WhatsApp</h3>
<p className="text-slate-300 mt-2">Comparte el modelo y ancho. Te confirmamos existencias y te preparamos el kit. Hasta agotar existencias. 🔥</p>
</div>
<div className="flex md:justify-end">
<a className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100" href="https://api.whatsapp.com/send/?phone=529993514016&amp;text=Hola%2C%20quiero%20apartar%20una%20puerta%2Fventana%20de%20liquidaci%C3%B3n&amp;type=phone_number&amp;app_absent=0">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            Escribir por WhatsApp
          </a>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white border-t border-slate-200" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Preguntas frecuentes</h2>
<div className="mt-6 grid gap-4">
<details className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] p-5">
<summary className="cursor-pointer text-base font-semibold text-slate-900">¿Incluyen instalación?</summary>
<p className="mt-3 text-sm text-slate-700">No realizamos instalaciones. Vendemos el kit listo para instalar: puerta con marco y cerradura (2.13 m de altura) o ventana con su sistema y vidrio sencillo. Tu albañil puede instalarlo. 🛠️</p>
</details>
<details className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] p-5">
<summary className="cursor-pointer text-base font-semibold text-slate-900">¿Qué recomiendan para entrada principal?</summary>
<p className="mt-3 text-sm text-slate-700">Polaris, Columba o Veritate por su construcción metálica y estética de fachada. Para estilo moderno, Veritate; para clásico, Columba; luminosa/elegante, Polaris. 🚪🏠</p>
</details>
<details className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] p-5">
<summary className="cursor-pointer text-base font-semibold text-slate-900">¿Y para baño o recámara?</summary>
<p className="mt-3 text-sm text-slate-700">Sirius (6 paneles) o Capella (lisa) por su privacidad total y costo accesible. Para interiores económicos, Antares (HDF). 🚿🛏️</p>
</details>
<details className="group rounded-xl ring-1 ring-slate-200 bg-[#f8fafc] p-5">
<summary className="cursor-pointer text-base font-semibold text-slate-900">¿Qué especificaciones tienen las ventanas?</summary>
<p className="mt-3 text-sm text-slate-700">Línea Nacional 1½", sistemas fijos y corredizos (XO) y guillotina. Vidrio sencillo 3–6 mm. Ensamble rápido, corte a 90°, resistentes a corrosión. Colores disponibles: Blanco, Bronce, Natural (mate/pulido), Gris Europa, Champagne y Madera. 🪟</p>
</details>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-[#f6f7f9] border-t border-slate-200" id="ubicacion">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Visítanos en Mérida</h2>
<p className="mt-2 text-slate-700">Col. Francisco I. Madero, Mérida, Yucatán. Horario: Lun–Sáb 9:00–18:00.</p>
<ul className="mt-4 text-sm text-slate-700 space-y-2">
<li className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-slate-900" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Col. Francisco I. Madero, Mérida, Yuc.
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4 text-slate-900" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                +52 999 351 4016
              </li>
</ul>
<div className="mt-5 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800" href="https://api.whatsapp.com/send/?phone=529993514016&amp;text=Quiero%20indicaciones%20a%20Outlet%20Marca&amp;type=phone_number&amp;app_absent=0">
                Escribir por WhatsApp
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold border-2 border-slate-900/20 text-slate-900 hover:bg-white" href="#ofertas">
                Ver ofertas
                <svg className="lucide lucide-tag w-4 h-4" data-lucide="tag" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</a>
</div>
</div>
<div className="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
<img alt="Mapa de Mérida" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center text-xs font-semibold tracking-tight">OM</div>
<span className="text-slate-900 font-semibold tracking-tight">Outlet Marca</span>
</div>
<p className="text-sm text-slate-600 mt-3">Outlet de mejoramiento del hogar. Puertas y ventanas con entrega inmediata en Mérida.</p>
<div className="mt-4 text-xs text-slate-500">
              Precios y existencias sujetos a cambio sin previo aviso. Hasta agotar existencias.
            </div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">Catálogo</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className=""><a className="hover:text-slate-900" href="#puertas">Puertas</a></li>
<li className=""><a className="hover:text-slate-900" href="#ventanas">Ventanas</a></li>
<li><a className="hover:text-slate-900" href="#ofertas">Ofertas</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Soporte</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#faq">Preguntas frecuentes</a></li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-wrench w-4 h-4 text-slate-900" data-lucide="wrench" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
                No instalamos. Kits listos para instalar.
              </li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Contacto</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4 text-slate-900" data-lucide="phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                +52 999 351 4016
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-mail w-4 h-4 text-slate-900" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hola@outletmarca.mx
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-slate-900" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Col. Francisco I. Madero, Mérida, Yuc.
              </li>
</ul>
</div>
</div>
<div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
<p>© <span id="y">2025</span> Outlet Marca. Todos los derechos reservados.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-900" href="#ofertas">Ofertas</a>
<a className="hover:text-slate-900" href="#generadores">Generadores</a>
<a className="hover:text-slate-900" href="#faq">FAQ</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
