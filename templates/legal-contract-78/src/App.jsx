import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Estado de análisis (simulado)
      const statusPill = document.getElementById('statusPill');
      const statusText = document.getElementById('statusText');
      const statusSpinner = document.getElementById('statusSpinner');
      function setProcessed() {
        statusText.textContent = 'Procesado';
        statusSpinner.replaceWith(createIcon('check-circle', 'h-4 w-4 text-green-600'));
        statusPill.classList.remove('border-slate-200');
        statusPill.classList.add('border-green-200', 'bg-white');
      }
      // Simula transición de "Analizando…" a "Procesado"
      setTimeout(setProcessed, 1800);

      // Iconos lucide inline
      function createIcon(name, cls) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('style', 'stroke-width: 1.5;');
        svg.setAttribute('class', cls);
        const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        switch (name) {
          case 'check-circle':
            p.setAttribute('d', 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3');
            break;
          default:
            p.setAttribute('d', 'M12 12');
        }
        svg.appendChild(p);
        return svg;
      }

      // Scroll y resaltado
      const docScroll = document.getElementById('docScroll');
      function highlightAndScrollTo(target) {
        const el = typeof target === 'string' ? document.querySelector(target) : target;
        if (!el) return;
        const top = el.offsetTop - 16;
        docScroll.scrollTo({ top, behavior: 'smooth' });
        // Resalte temporal
        const originalBg = el.style.backgroundColor;
        el.classList.add('ring-2','ring-blue-400/50','rounded-md');
        el.style.transition = 'background-color 600ms ease';
        el.style.backgroundColor = 'rgba(219,234,254,0.6)'; // blue-100
        setTimeout(() => {
          el.style.backgroundColor = originalBg || '';
          el.classList.remove('ring-2','ring-blue-400/50');
        }, 1600);
      }

      // Click en botones "Ir al documento" y chips
      function wireAnchorClicks(scope) {
        scope.querySelectorAll('[data-target]').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const sel = btn.getAttribute('data-target');
            if (!sel) return;
            highlightAndScrollTo(sel);
          });
        });
      }
      wireAnchorClicks(document);

      // Marcadores del rail sincronizados (opcionalmente se podrían recalcular)
      // Indicador de página
      const pageIndicator = document.getElementById('pageIndicator');
      function updatePageIndicator() {
        const pages = Array.from(docScroll.querySelectorAll('.rounded-lg.border'));
        const scrollTop = docScroll.scrollTop;
        const viewMid = scrollTop + docScroll.clientHeight / 2;
        let current = 1;
        pages.forEach((card, idx) => {
          const box = card.getBoundingClientRect();
          const top = card.offsetTop;
          const bottom = top + card.offsetHeight;
          if (viewMid >= top && viewMid <= bottom) current = idx + 1;
        });
        pageIndicator.textContent = `Pág. ${current} de ${pages.length}`;
      }
      docScroll.addEventListener('scroll', () => {
        updatePageIndicator();
      });
      updatePageIndicator();

      // Notas: guardado automático
      const notes = document.getElementById('userNotes');
      const notesStatus = document.getElementById('notesStatus');
      const clearNotes = document.getElementById('clearNotes');
      const NOTES_KEY = 'lcai_user_notes';
      let saveTimer;
      function loadNotes() {
        const v = localStorage.getItem(NOTES_KEY);
        if (v) notes.value = v;
      }
      function saveNotes() {
        localStorage.setItem(NOTES_KEY, notes.value || '');
        notesStatus.textContent = 'Guardado';
      }
      notes.addEventListener('input', () => {
        notesStatus.textContent = 'Guardando…';
        clearTimeout(saveTimer);
        saveTimer = setTimeout(saveNotes, 700);
      });
      clearNotes.addEventListener('click', () => {
        notes.value = '';
        saveNotes();
      });
      loadNotes();

      // Subir documento reinicia estado (simulado)
      function setAnalyzing() {
        statusText.textContent = 'Analizando…';
        const hasCheck = statusPill.querySelector('svg');
        if (hasCheck) hasCheck.remove();
        const spinner = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        spinner.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        spinner.setAttribute('viewBox', '0 0 24 24');
        spinner.setAttribute('fill', 'none');
        spinner.setAttribute('stroke', 'currentColor');
        spinner.setAttribute('style', 'stroke-width: 1.5;');
        spinner.setAttribute('class', 'h-4 w-4 text-blue-600');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M21 12a9 9 0 1 1-6.219-8.56');
        spinner.appendChild(path);
        statusPill.insertBefore(spinner, statusText);
        statusPill.classList.remove('border-green-200');
        statusPill.classList.add('border-slate-200');
        setTimeout(setProcessed, 1800);
      }
      const fileInput = document.getElementById('fileInput');
      const fileInputMobile = document.getElementById('fileInputMobile');
      [fileInput, fileInputMobile].forEach(inp => {
        if (!inp) return;
        inp.addEventListener('change', () => setAnalyzing());
      });

      // Descargar resumen (txt simple)
      function collectSummary() {
        const items = Array.from(document.querySelectorAll('#summaryList > div')).map(card => {
          const title = card.querySelector('h3')?.textContent?.trim() || '';
          const desc = card.querySelector('p')?.textContent?.trim() || '';
          return `- ${title}: ${desc}`;
        });
        const notesText = notes.value ? `\n\nNotas del usuario:\n${notes.value}` : '';
        return `Resumen Inteligente\n\n${items.join('\n')}${notesText}\n`;
      }
      function downloadSummary() {
        const content = collectSummary();
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resumen_contrato.txt';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
      const downloadBtn = document.getElementById('downloadBtn');
      const downloadBtnMobile = document.getElementById('downloadBtnMobile');
      [downloadBtn, downloadBtnMobile].forEach(btn => btn?.addEventListener('click', downloadSummary));

      // Tabs móvil
      const tabResumen = document.getElementById('tabResumen');
      const tabDocumento = document.getElementById('tabDocumento');
      const panelResumen = document.getElementById('panelResumen');
      const panelDocumento = document.getElementById('panelDocumento');

      function showResumen() {
        panelResumen.classList.remove('hidden');
        panelDocumento.classList.add('hidden');
        tabResumen.classList.add('bg-slate-100','text-slate-700');
        tabDocumento.classList.remove('bg-slate-100','text-slate-700');
      }
      function showDocumento() {
        panelDocumento.classList.remove('hidden');
        panelResumen.classList.add('hidden');
        tabDocumento.classList.add('bg-slate-100','text-slate-700');
        tabResumen.classList.remove('bg-slate-100','text-slate-700');
      }
      if (tabResumen && tabDocumento) {
        tabResumen.addEventListener('click', showResumen);
        tabDocumento.addEventListener('click', showDocumento);
      }
      // Estado inicial móvil
      if (window.innerWidth < 1024) {
        showResumen();
      }

      // Accesos rápidos de teclado (opcional)
      document.addEventListener('keydown', (e) => {
        if (e.key === 'f' && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          highlightAndScrollTo('#a-finanzas');
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center tracking-tight text-sm font-semibold select-none">
            LC
          </div>
<div className="flex flex-col">
<div className="text-lg sm:text-xl tracking-tight font-semibold text-slate-900">
              Legal Contract AI
            </div>
<div className="text-xs text-slate-500 -mt-0.5">
              Precisión • Confianza • Eficiencia
            </div>
</div>
</div>

<div className="hidden md:flex items-center gap-3">

<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600" id="statusPill">
<svg className="h-4 w-4 text-blue-600" fill="none" id="statusSpinner" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
</svg>
<span id="statusText">Analizando…</span>
</div>
</div>

<div className="md:hidden flex items-center gap-2">
<label className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-9 h-9 cursor-pointer">
<input className="hidden" id="fileInputMobile" type="file"/>
<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="M7 10l5-5 5 5"></path>
<path d="M12 15V5"></path>
</svg>
</label>
<button className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white w-9 h-9" id="downloadBtnMobile">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="M7 10l5 5 5-5"></path>
<path d="M12 15V3"></path>
</svg>
</button>
</div>
</div>

<div className="md:hidden border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
<div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 w-full">
<button className="flex-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 bg-slate-100" id="tabResumen">
              Resumen
            </button>
<button className="flex-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-800" id="tabDocumento">
              Documento
            </button>
</div>
</div>
</div>
</header>

<main className="pt-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-4">

<aside className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden" id="panelResumen">
<div className="p-5 sm:p-6">
<div className="flex items-start justify-between">
<div>
<h1 className="text-2xl tracking-tight font-semibold text-slate-900">
                    Resumen Inteligente
                  </h1>
<p className="mt-1 text-sm text-slate-500">
                    Contenido generado por IA a partir del documento cargado.
                  </p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
<svg className="h-4.5 w-4.5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
                  Calidad asistida por IA
                </div>
</div>

<div className="mt-5">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium text-slate-900 tracking-tight">
                    Atajos
                  </h2>
</div>
<div className="mt-3 flex flex-wrap gap-2" id="shortcutChips">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-target="#a-confidencialidad">
<svg className="h-4.5 w-4.5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17v4"></path>
<path d="M8 21h8"></path>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
<rect height="11" rx="2" width="18" x="3" y="11"></rect>
</svg>
                    Confidencialidad
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-target="#a-terminacion">
<svg className="h-4.5 w-4.5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
</svg>
                    Terminación
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-target="#a-penalidades">
<svg className="h-4.5 w-4.5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9v2"></path>
<path d="M12 17h.01"></path>
<path d="M19 18H5"></path>
<path d="M7 18V5a5 5 0 0 1 10 0v13"></path>
</svg>
                    Penalidades
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-target="#a-plazos">
<svg className="h-4.5 w-4.5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="16" x="4" y="4"></rect>
<path d="M8 11h8"></path>
<path d="M8 15h6"></path>
</svg>
                    Plazos
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-target="#a-pagos">
<svg className="h-4.5 w-4.5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1v22"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
                    Pagos
                  </button>
</div>
</div>

<div className="mt-6 space-y-3" id="summaryList">

<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21h8"></path>
<path d="M12 17V3"></path>
<path d="M5 8h14"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Cláusulas relevantes
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-clausulas">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Incluye definiciones, alcance, confidencialidad y
                        terminación anticipada.
                      </p>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11l3 3L22 4"></path>
<path d="M21 12v7a2 2 0 0 1-2 2H7l-4 4V6a2 2 0 0 1 2-2h11"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Obligaciones
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-obligaciones">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Responsabilidades del proveedor y del cliente sobre
                        entregables y soporte.
                      </p>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Riesgos
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-riesgos">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Limitaciones de responsabilidad, penalidades y rescisión
                        unilateral.
                      </p>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="16" x="4" y="4"></rect>
<path d="M8 11h8"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Fechas clave
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-fechas">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Vigencia, renovación, plazos de aviso y entregas.
                      </p>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1v22"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Términos financieros
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-finanzas">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Precios, impuestos, reajustes, penalidades y condiciones
                        de pago.
                      </p>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Partes involucradas
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-partes">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Identificación de las partes, representantes y
                        domicilios legales.
                      </p>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
<path d="M21 18H3l9-16 9 16z"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Advertencias importantes
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-advertencias">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Zonas de riesgo: cambios unilaterales, confidencialidad
                        y exclusividad.
                      </p>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17v4"></path>
<path d="M8 21h8"></path>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
<rect height="11" rx="2" width="18" x="3" y="11"></rect>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Confidencialidad
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-confidencialidad">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        No divulgación por 5 años y medidas razonables de
                        protección.
                      </p>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M19 6v14a2 2 0 0 1-2 2H7l-4 4V6a2 2 0 0 1 2-2h11"></path>
<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Terminación
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-terminacion">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Aviso previo de 30 días; incumplimiento material permite
                        rescisión inmediata.
                      </p>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/30 transition">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="h-5 w-5 text-blue-700" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9v2"></path>
<path d="M12 17h.01"></path>
<path d="M19 18H5"></path>
<path d="M7 18V5a5 5 0 0 1 10 0v13"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">
                          Penalidades
                        </h3>
<button className="inline-flex items-center gap-1 rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-blue-300 hover:text-blue-700" data-target="#a-penalidades">
                          Ir al documento
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
<p className="mt-1.5 text-sm text-slate-600">
                        Créditos del 10% por evento por incumplimiento del SLA
                        (máximo 40%).
                      </p>
</div>
</div>
</div>
</div>

<div className="mt-6">
<h2 className="text-base font-medium text-slate-900 tracking-tight">
                  Notas del usuario
                </h2>
<div className="mt-2 rounded-lg border border-slate-200 bg-slate-50">
<textarea className="w-full bg-transparent p-3 sm:p-4 text-sm text-slate-700 outline-none resize-y min-h-[6rem]" id="userNotes" placeholder="Escribe tus observaciones. Guardado automático…"></textarea>
<div className="flex items-center justify-between px-3 sm:px-4 py-2 border-t border-slate-200 bg-white">
<div className="text-xs text-slate-500" id="notesStatus">
                      Guardado
                    </div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">Privado</span>
<button className="text-xs text-slate-600 hover:text-blue-700" id="clearNotes">
                        Borrar
                      </button>
</div>
</div>
</div>
</div>
</div>
</aside>

<section className="lg:col-span-7 relative rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden" id="panelDocumento">

<div className="flex items-center justify-between px-4 sm:px-5 py-2 border-b border-slate-200 bg-slate-50/60">
<div className="flex items-center gap-2 text-xs text-slate-500">
<svg className="h-4.5 w-4.5 text-slate-600" fill="none" stroke="currentColor" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="18" x="3" y="4"></rect>
<path d="M7 8h10"></path>
</svg>
                Visor del documento
              </div>
<div className="text-xs text-slate-600" id="pageIndicator">
                Pág. 1 de 3
              </div>
</div>

<div className="absolute inset-y-0 right-0 w-9 hidden sm:flex items-center">
<div className="relative mx-auto h-[80%] w-1 rounded-full bg-slate-200/70">

<button className="anchor-dot absolute -left-1.5 h-3 w-3 rounded-full bg-blue-600/70 hover:bg-blue-700 transition" data-target="#a-clausulas" style={{top: '8%'}}></button>
<button className="anchor-dot absolute -left-1.5 h-3 w-3 rounded-full bg-blue-600/70 hover:bg-blue-700 transition" data-target="#a-obligaciones" style={{top: '22%'}}></button>
<button className="anchor-dot absolute -left-1.5 h-3 w-3 rounded-full bg-blue-600/70 hover:bg-blue-700 transition" data-target="#a-riesgos" style={{top: '40%'}}></button>
<button className="anchor-dot absolute -left-1.5 h-3 w-3 rounded-full bg-blue-600/70 hover:bg-blue-700 transition" data-target="#a-fechas" style={{top: '56%'}}></button>
<button className="anchor-dot absolute -left-1.5 h-3 w-3 rounded-full bg-blue-600/70 hover:bg-blue-700 transition" data-target="#a-finanzas" style={{top: '68%'}}></button>
<button className="anchor-dot absolute -left-1.5 h-3 w-3 rounded-full bg-blue-600/70 hover:bg-blue-700 transition" data-target="#a-partes" style={{top: '80%'}}></button>
<button className="anchor-dot absolute -left-1.5 h-3 w-3 rounded-full bg-blue-600/70 hover:bg-blue-700 transition" data-target="#a-advertencias" style={{top: '90%'}}></button>
</div>
</div>

<div className="relative h-[70vh] sm:h-[74vh] md:h-[76vh] lg:h-[78vh] overflow-y-auto scroll-smooth" id="docScroll">

<div className="mx-auto max-w-3xl px-5 sm:px-8 py-8">
<div className="rounded-lg border border-slate-200 bg-white shadow-sm">
<div className="p-6 sm:p-8">
<h2 className="text-xl font-medium tracking-tight text-slate-900" style={{fontFamily: 'Lexend, Inter, system-ui'}}>
                      Contrato de Servicios
                    </h2>
<p className="mt-1 text-sm text-slate-500">
                      Ref: 2025-ACME-001
                    </p>
<p className="mt-6 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors" id="a-partes">
                      Entre ACME S.A., con domicilio en Ciudad A, representada
                      por Juan Pérez (“Proveedor”), y Beta Ltd., con domicilio
                      en Ciudad B, representada por Ana Gómez (“Cliente”), se
                      celebra el presente contrato de servicios.
                    </p>
<h3 className="mt-8 text-lg font-medium tracking-tight text-slate-900" id="a-clausulas" style={{fontFamily: 'Lexend, Inter, system-ui'}}>
                      Cláusulas principales
                    </h3>
<p className="mt-3 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors">
                      Definiciones: “Servicio” significa las actividades
                      descritas en el Anexo A. “Información Confidencial”
                      significa toda información no pública revelada por las
                      Partes.
                    </p>
<p className="mt-4 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors" id="a-confidencialidad">
                      Confidencialidad: Cada Parte se obliga a no divulgar
                      Información Confidencial por un plazo de cinco (5) años,
                      utilizando medidas razonables para su protección.
                    </p>
<p className="mt-4 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors" id="a-terminacion">
                      Terminación: Cualquiera de las Partes podrá rescindir con
                      aviso previo de treinta (30) días. El incumplimiento
                      material faculta la rescisión inmediata.
                    </p>
<h3 className="mt-8 text-lg font-medium tracking-tight text-slate-900" id="a-obligaciones" style={{fontFamily: 'Lexend, Inter, system-ui'}}>
                      Obligaciones
                    </h3>
<ul className="mt-3 space-y-3">
<li className="text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors">
                        El Proveedor entregará reportes mensuales y mantendrá
                        niveles de servicio conforme al Acuerdo de Niveles
                        (SLA).
                      </li>
<li className="text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors">
                        El Cliente facilitará acceso a sistemas y designará un
                        punto de contacto responsable para la coordinación.
                      </li>
</ul>
</div>
<div className="flex items-center justify-end px-6 sm:px-8 py-2 border-t border-slate-200 bg-slate-50">
<span className="text-xs text-slate-500">Página 1</span>
</div>
</div>
</div>

<div className="mx-auto max-w-3xl px-5 sm:px-8 py-8">
<div className="rounded-lg border border-slate-200 bg-white shadow-sm">
<div className="p-6 sm:p-8">
<h3 className="text-lg font-medium tracking-tight text-slate-900" id="a-fechas" style={{fontFamily: 'Lexend, Inter, system-ui'}}>
                      Vigencia y plazos
                    </h3>
<p className="mt-3 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors" id="a-plazos">
                      Vigencia inicial de doce (12) meses desde la Fecha
                      Efectiva. Renovación automática por periodos iguales salvo
                      aviso con treinta (30) días de anticipación.
                    </p>
<h3 className="mt-8 text-lg font-medium tracking-tight text-slate-900" id="a-finanzas" style={{fontFamily: 'Lexend, Inter, system-ui'}}>
                      Términos financieros
                    </h3>
<p className="mt-3 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors" id="a-pagos">
                      Honorarios: USD 12,000 mensuales. Facturación dentro de
                      los primeros cinco (5) días hábiles. Pago neto treinta
                      (30) días. Interés moratorio del 1.5% mensual por
                      retrasos.
                    </p>
<p className="mt-4 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors">
                      Impuestos: cada Parte asumirá los tributos que le
                      correspondan conforme a la ley aplicable.
                    </p>
<h3 className="mt-8 text-lg font-medium tracking-tight text-slate-900" id="a-penalidades" style={{fontFamily: 'Lexend, Inter, system-ui'}}>
                      Penalidades
                    </h3>
<p className="mt-3 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors">
                      En caso de incumplimiento del SLA, el Proveedor otorgará
                      créditos de servicio equivalentes al 10% de la tarifa
                      mensual por cada evento, hasta un máximo del 40%.
                    </p>
</div>
<div className="flex items-center justify-end px-6 sm:px-8 py-2 border-t border-slate-200 bg-slate-50">
<span className="text-xs text-slate-500">Página 2</span>
</div>
</div>
</div>

<div className="mx-auto max-w-3xl px-5 sm:px-8 py-8">
<div className="rounded-lg border border-slate-200 bg-white shadow-sm">
<div className="p-6 sm:p-8">
<h3 className="text-lg font-medium tracking-tight text-slate-900" id="a-riesgos" style={{fontFamily: 'Lexend, Inter, system-ui'}}>
                      Riesgos y limitaciones
                    </h3>
<p className="mt-3 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors">
                      Limitación de responsabilidad: ninguna Parte será
                      responsable por daños indirectos o consecuenciales. El
                      tope de responsabilidad se limita a los pagos efectuados
                      en los últimos seis (6) meses.
                    </p>
<h3 className="mt-8 text-lg font-medium tracking-tight text-slate-900" id="a-advertencias" style={{fontFamily: 'Lexend, Inter, system-ui'}}>
                      Advertencias
                    </h3>
<p className="mt-3 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors">
                      Exclusividad: el Cliente reconoce que el Proveedor puede
                      prestar servicios similares a terceros, sin que ello
                      implique conflicto de intereses, salvo acuerdo por escrito
                      en contrario.
                    </p>
<p className="mt-4 text-[1rem] leading-relaxed text-slate-800 font-serif transition-colors">
                      Cambios unilaterales: cualquier modificación deberá
                      realizarse mediante adenda firmada por ambas Partes.
                    </p>
</div>
<div className="flex items-center justify-between px-6 sm:px-8 py-2 border-t border-slate-200 bg-slate-50">
<span className="text-xs text-slate-500">Página 3</span>
<span className="text-xs text-slate-500">
                      Fin del documento
                    </span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

<footer className="py-6">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
<p className="text-xs text-slate-500">© 2025 Legal Contract AI</p>
<div className="hidden sm:flex items-center gap-4 text-xs text-slate-500">
<a className="hover:text-slate-700" href="#">Términos</a>
<a className="hover:text-slate-700" href="#">Privacidad</a>
<a className="hover:text-slate-700" href="#">Soporte</a>
</div>
</div>
</footer>



    </>
  );
}
