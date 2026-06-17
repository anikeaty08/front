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



        const container = document.getElementById('canvas-container');
        const fillPath = document.getElementById('fill-path');
        const borderPath = document.getElementById('border-path');
        const rubberBand = document.getElementById('rubber-band');
        const pointsGroup = document.getElementById('points-group');
        const hintText = document.getElementById('hint-text');
        
        const tabPoly = document.getElementById('tab-poly');
        const tabLasso = document.getElementById('tab-lasso');
        const statusText = document.getElementById('status-text');
        const statusIcon = document.getElementById('status-icon');
        
        let activeTool = 'poly'; // 'poly', 'lasso', 'move'
        
        let completedPolygons = []; // Stores arrays of points for finished shapes
        let currentPoints = [];     // Stores points for shape currently being drawn
        let isDrawing = false;

        // Tool Selection Logic
        function setTool(tool) {
            activeTool = tool;
            
            // Visual Update: Floating Tool
            const moveBtn = document.getElementById('tool-move');
            if (tool === 'move') {
                 moveBtn.classList.add('bg-indigo-500/10', 'text-indigo-400', 'border-indigo-500/20');
                 moveBtn.classList.remove('text-zinc-400', 'hover:bg-zinc-800');
            } else {
                 moveBtn.classList.remove('bg-indigo-500/10', 'text-indigo-400', 'border-indigo-500/20');
                 moveBtn.classList.add('text-zinc-400', 'hover:bg-zinc-800');
            }

            // Visual Update: Sidebar Tabs
            // Reset styles
            const activeClass = ['text-white', 'bg-zinc-800', 'shadow-sm', 'ring-1', 'ring-white/10'];
            const inactiveClass = ['text-zinc-500', 'hover:text-zinc-300'];
            
            tabPoly.classList.remove(...activeClass);
            tabPoly.classList.add(...inactiveClass);
            tabLasso.classList.remove(...activeClass);
            tabLasso.classList.add(...inactiveClass);

            if (tool === 'poly' || (tool === 'move' && statusText.innerText === 'Polygonal')) {
                tabPoly.classList.remove(...inactiveClass);
                tabPoly.classList.add(...activeClass);
                statusText.innerText = 'Polygonal';
                statusIcon.setAttribute('icon', 'solar:ruler-pen-linear');
                hintText.innerText = 'Clique para adicionar pontos';
                activeTool = tool === 'move' ? 'move' : 'poly';
            } 
            else if (tool === 'lasso' || (tool === 'move' && statusText.innerText === 'Irregular')) {
                tabLasso.classList.remove(...inactiveClass);
                tabLasso.classList.add(...activeClass);
                statusText.innerText = 'Irregular';
                statusIcon.setAttribute('icon', 'solar:pen-2-linear');
                hintText.innerText = 'Clique e arraste para desenhar';
                activeTool = tool === 'move' ? 'move' : 'lasso';
            } else if (tool === 'move') {
                 hintText.innerText = 'Arraste para mover o canvas';
            }

            // Cleanup
            if(tool !== 'move') {
                 // Don't clear unfinished current points when just switching tools, unless necessary
                 // But for simplicity in this demo, let's reset incomplete shapes when switching modes
                 currentPoints = [];
                 renderAllPaths();
                 renderPoints();
            }
        }

        function getMousePos(evt) {
            const rect = container.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        function pointsToPathString(pts, close = false) {
            if (pts.length === 0) return '';
            let d = `M ${pts[0].x} ${pts[0].y}`;
            for (let i = 1; i < pts.length; i++) {
                d += ` L ${pts[i].x} ${pts[i].y}`;
            }
            if (close) d += ' Z';
            return d;
        }

        function renderAllPaths() {
            let combinedD = '';

            // Add all completed polygons (works for both Poly and Irregular/Lasso shapes)
            completedPolygons.forEach(poly => {
                combinedD += pointsToPathString(poly, true) + ' ';
            });

            // Add current incomplete polygon
            if (currentPoints.length > 0) {
                // If lasso, we visually close it dynamically for better feedback
                const autoClose = activeTool === 'lasso';
                combinedD += pointsToPathString(currentPoints, autoClose);
            }

            fillPath.setAttribute('d', combinedD);
            borderPath.setAttribute('d', combinedD);
        }

        function renderPoints() {
            pointsGroup.innerHTML = '';
            // Only show vertices for Poly mode, not Lasso
            if (activeTool !== 'poly' || currentPoints.length === 0) return;

            currentPoints.forEach((p, i) => {
                const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute('cx', p.x);
                circle.setAttribute('cy', p.y);
                circle.setAttribute('r', i === 0 ? '4' : '3');
                circle.setAttribute('fill', i === 0 ? '#ffffff' : '#18181b'); 
                circle.setAttribute('stroke', i === 0 ? '#6366f1' : '#6366f1');
                circle.setAttribute('stroke-width', '1.5');
                pointsGroup.appendChild(circle);
            });
        }

        function commitShape() {
            // Simplify lasso points to avoid too many nodes (basic optimization)
            if (activeTool === 'lasso' && currentPoints.length > 10) {
                // Simple filter: take every 2nd point to smooth slightly
                currentPoints = currentPoints.filter((_, i) => i % 2 === 0);
            }

            if(currentPoints.length > 2) {
                completedPolygons.push([...currentPoints]);
            }
            currentPoints = [];
            rubberBand.classList.add('opacity-0');
            renderAllPaths();
            renderPoints();
            hintText.innerText = activeTool === 'lasso' ? 'Clique e arraste para desenhar nova área' : 'Clique para adicionar pontos';
        }
        
        function undoLast() {
            if(currentPoints.length > 0) {
                // Remove last point
                currentPoints.pop();
                renderAllPaths();
                renderPoints();
            } else if (completedPolygons.length > 0) {
                // Remove last completed shape
                completedPolygons.pop();
                renderAllPaths();
            }
        }

        function clearAll() {
            completedPolygons = [];
            currentPoints = [];
            isDrawing = false;
            renderAllPaths();
            renderPoints();
            rubberBand.classList.add('opacity-0');
        }

        // --- Event Listeners ---

        container.addEventListener('mousedown', (e) => {
            if (activeTool === 'move') return;

            const pos = getMousePos(e);

            if (activeTool === 'lasso') {
                isDrawing = true;
                currentPoints = [pos];
                renderAllPaths();
            } else if (activeTool === 'poly') {
                // Check for closure
                if (currentPoints.length > 2) {
                    const dx = pos.x - currentPoints[0].x;
                    const dy = pos.y - currentPoints[0].y;
                    if (Math.hypot(dx, dy) < 15) { 
                        commitShape();
                        return;
                    }
                }
                currentPoints.push(pos);
                renderAllPaths();
                renderPoints();
            }
        });

        window.addEventListener('mousemove', (e) => {
            if(activeTool === 'move') return;
            const pos = getMousePos(e);

            // Lasso Mode
            if (activeTool === 'lasso' && isDrawing) {
                currentPoints.push(pos);
                renderAllPaths();
            }

            // Poly Mode
            if (activeTool === 'poly' && currentPoints.length > 0) {
                const lastPoint = currentPoints[currentPoints.length - 1];
                rubberBand.classList.remove('opacity-0');
                rubberBand.setAttribute('x1', lastPoint.x);
                rubberBand.setAttribute('y1', lastPoint.y);
                rubberBand.setAttribute('x2', pos.x);
                rubberBand.setAttribute('y2', pos.y);

                if(currentPoints.length > 2) {
                    const dist = Math.hypot(pos.x - currentPoints[0].x, pos.y - currentPoints[0].y);
                    if(dist < 15) {
                        hintText.innerText = "Clique para fechar forma";
                        container.style.cursor = "pointer";
                    } else {
                        hintText.innerText = "Clique para adicionar pontos";
                        container.style.cursor = "crosshair";
                    }
                }
            } else {
                rubberBand.classList.add('opacity-0');
            }
        });

        window.addEventListener('mouseup', () => {
            if (activeTool === 'lasso' && isDrawing) {
                isDrawing = false;
                commitShape(); // Auto-close and save lasso shape
            }
        });

        container.addEventListener('dblclick', (e) => {
            if (activeTool === 'poly' && currentPoints.length > 2) {
                e.preventDefault();
                commitShape();
            }
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if(currentPoints.length > 0) {
                    currentPoints = [];
                    renderAllPaths();
                    renderPoints();
                    rubberBand.classList.add('opacity-0');
                }
            }
            if (e.key === 'Enter' && activeTool === 'poly' && currentPoints.length > 2) {
                commitShape();
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                undoLast();
            }
        });

        // Initialize
        setTool('poly');
    
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
      

<header className="h-14 border-b border-zinc-800/80 bg-zinc-900 flex items-center justify-between px-5 shrink-0 z-20">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="text-white text-[10px] font-bold">A</span>
</div>
<h1 className="text-white font-semibold text-sm tracking-tight">AnimaAe</h1>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-3">
<div className="flex flex-col items-end">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Créditos: <span className="text-zinc-100">150</span></span>
<div className="w-24 h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-indigo-500 w-2/3 rounded-full"></div>
</div>
</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-zinc-800 border border-zinc-700 text-zinc-400 uppercase">PRO</span>
<button className="px-3 py-1.5 rounded-md bg-white text-black text-xs font-semibold hover:opacity-90 transition-opacity">Upgrade</button>
<div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] font-medium text-zinc-400 cursor-pointer">JD</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-14 border-r border-zinc-800/80 bg-zinc-900 flex flex-col items-center py-4 gap-1 shrink-0">
<button className="w-9 h-9 rounded-md bg-zinc-800 text-white flex items-center justify-center border border-zinc-700 shadow-sm">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="flex-1"></div>
<button className="w-9 h-9 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors flex items-center justify-center mb-2">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</aside>

<main className="flex-1 relative bg-zinc-950 bg-canvas-dots flex items-center justify-center overflow-hidden p-8 select-none">

<div className="absolute top-6 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-xl px-1.5 py-1.5 flex items-center gap-0.5 shadow-2xl z-30">
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition-colors tool-btn group" id="tool-move" onclick="setTool('move')" title="Mover">
<iconify-icon className="group-hover:text-zinc-200" icon="solar:cursor-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-800 mx-1.5"></div>

<div className="flex items-center gap-2 px-2">
<iconify-icon className="text-indigo-400" icon="solar:ruler-pen-linear" id="status-icon"></iconify-icon>
<span className="text-[10px] font-semibold text-indigo-100 uppercase tracking-wider" id="status-text">Polygonal</span>
</div>
<div className="w-px h-4 bg-zinc-800 mx-1.5"></div>
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 transition-colors" onclick="undoLast()" title="Desfazer">
<iconify-icon icon="solar:undo-left-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="p-2 hover:bg-red-500/10 hover:text-red-400 rounded-lg text-zinc-400 transition-colors" onclick="clearAll()" title="Limpar tudo">
<iconify-icon icon="solar:trash-bin-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="relative rounded-lg overflow-hidden shadow-2xl border border-zinc-800/50 group max-w-5xl max-h-[75vh] cursor-crosshair ring-1 ring-black/20" id="canvas-container">

<img className="w-full h-full object-cover block select-none pointer-events-none opacity-90" id="main-image" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<svg className="absolute inset-0 w-full h-full z-10" id="selection-svg">
<defs>
<filter height="140%" id="dropshadow" width="140%" x="-20%" y="-20%">
<fedropshadow dx="0" dy="1" flood-color="#000" flood-opacity="0.5" stddeviation="1"></fedropshadow>
</filter>
</defs>

<g id="paths-group">
<path d="" fill="rgba(99, 102, 241, 0.2)" id="fill-path" stroke="none"></path>
<path className="marching-ants" d="" fill="none" filter="url(#dropshadow)" id="border-path" stroke="white" strokeWidth="1.5"></path>
</g>

<line className="opacity-0" id="rubber-band" stroke="#6366f1" stroke-dasharray="4" strokeWidth="1.5" x1="0" x2="0" y1="0" y2="0"></line>

<g id="points-group"></g>
</svg>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-950/90 backdrop-blur px-4 py-2 rounded-full border border-zinc-800 shadow-xl flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-indigo-400" icon="solar:info-circle-linear" id="hint-icon" width="14"></iconify-icon>
<span className="text-[10px] text-zinc-300 font-medium uppercase tracking-wider" id="hint-text">Clique para adicionar pontos</span>
</div>
</div>

<button className="absolute bottom-10 right-10 bg-indigo-600 hover:bg-indigo-500 text-white pl-4 pr-5 py-3 rounded-xl shadow-lg shadow-indigo-900/20 flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 z-20 group">
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-semibold text-xs tracking-wide">Processar Seleção</span>
</button>
</main>

<aside className="w-72 border-l border-zinc-800/80 bg-zinc-900 flex flex-col shrink-0">

<div className="h-14 border-b border-zinc-800/80 flex items-center px-5 bg-zinc-900">
<h2 className="text-xs font-semibold text-zinc-100 tracking-wider uppercase flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:tuning-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Propriedades
                </h2>
</div>

<div className="px-5 py-4 border-b border-zinc-800/50">
<label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2 block">Modo de Recorte</label>
<div className="bg-zinc-950 p-1 rounded-lg border border-zinc-800 flex relative">
<button className="flex-1 flex items-center justify-center gap-2 py-1.5 text-[11px] font-medium rounded-md transition-all text-white bg-zinc-800 shadow-sm ring-1 ring-white/10" id="tab-poly" onclick="setTool('poly')">
<iconify-icon icon="solar:ruler-pen-linear" width="14"></iconify-icon>
                        Polygonal
                    </button>
<button className="flex-1 flex items-center justify-center gap-2 py-1.5 text-[11px] font-medium rounded-md transition-all text-zinc-500 hover:text-zinc-300" id="tab-lasso" onclick="setTool('lasso')">
<iconify-icon icon="solar:pen-2-linear" width="14"></iconify-icon>
                        Irregular
                    </button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-8">
<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-300">Suavização (Feather)</label>
<span className="text-[10px] font-mono text-zinc-500 bg-zinc-800 px-1.5 rounded">8px</span>
</div>
<input max="100" min="0" type="range" value="8"/>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-300">Expansão</label>
<span className="text-[10px] font-mono text-zinc-500 bg-zinc-800 px-1.5 rounded">+2px</span>
</div>
<input max="100" min="0" type="range" value="20"/>
</div>
<div className="w-full h-px bg-zinc-800"></div>
<div className="space-y-4">
<label className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest">Opções</label>
<label className="flex items-center gap-3 cursor-pointer group checkbox-wrapper select-none">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 bg-zinc-800 group-hover:border-zinc-500 flex items-center justify-center transition-colors">
<iconify-icon className="text-white hidden" icon="solar:check-read-linear" strokeWidth="2" width="10"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 group-hover:text-zinc-100 transition-colors">Autodetectar Bordas</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group checkbox-wrapper select-none">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-600 bg-zinc-800 group-hover:border-zinc-500 flex items-center justify-center transition-colors">
<iconify-icon className="text-white hidden" icon="solar:check-read-linear" strokeWidth="2" width="10"></iconify-icon>
</div>
<span className="text-xs text-zinc-300 group-hover:text-zinc-100 transition-colors">Inverter Seleção</span>
</label>
</div>
</div>
<div className="p-4 border-t border-zinc-800/80 bg-zinc-900">
<button className="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700 transition-colors">Exportar Máscara</button>
</div>
</aside>
</div>


    </>
  );
}
