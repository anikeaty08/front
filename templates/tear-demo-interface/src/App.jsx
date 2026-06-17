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



        // --- Data Mock ---
        const MOCK_DATA = {
        projects: [
        {
        id: 1,
        title: "Sistema de Monitoramento",
        type: "main",
        desc: "Atualização do sistema de telemetria para poços offshore, com integração de dados em tempo real.",
        team: ["Eng. de Produção", "TI Industrial"],
        deps: ["Rede Óptica Submarina", "Modelo Geológico 4D"]
        },
        {
        id: 2,
        title: "Rede Óptica Submarina",
        type: "sub",
        desc: "Instalação de backbone óptico para comunicação entre plataformas do pré-sal.",
        team: ["Engenharia Submarina"],
        deps: []
        },
        {
        id: 3,
        title: "Modelo Geológico 4D",
        type: "sub",
        desc: "Simulação geofísica com atualização contínua para otimizar a recuperação de óleo.",
        team: ["Geologia & Geofísica"],
        deps: ["Cluster HPC"]
        },
        {
        id: 4,
        title: "Cluster HPC",
        type: "sub",
        desc: "Infraestrutura de supercomputação dedicada ao processamento sísmico e simulações.",
        team: ["TI Corporativa"],
        deps: []
        },
        {
        id: 5,
        title: "Modernização UHDT",
        type: "related",
        desc: "Atualização dos reatores e catalisadores para produção de diesel S-10.",
        team: ["Refino"],
        deps: ["Sistema de Monitoramento"]
        },
        {
        id: 6,
        title: "IA Balanço de Carga",
        type: "related",
        desc: "Modelo de previsão para otimizar a oferta de derivados entre refinarias.",
        team: ["CENPES", "Data Science"],
        deps: []
        },
        {
        id: 7,
        title: "Segurança Offshore",
        type: "sub",
        desc: "Sistema de análise de riscos para plataformas e FPSOs.",
        team: ["SMS", "Eng. Segurança"],
        deps: []
        }
        ]
        };

        // --- Graph Engine (Canvas) ---
        const canvas = document.getElementById('graph-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let nodes = [];
        let links = [];
        let transform = { x: 0, y: 0, k: 1 }; 
        let isDragging = false;
        let dragStart = { x: 0, y: 0 };
        let hoveredNode = null;
        let selectedNode = null;
        let ghostNodes = []; 

        // Resize Handler
        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener('resize', resize);
        resize();

        // --- Physics ---
        function step() {
            // Repulsion
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[j].x - nodes[i].x;
                    const dy = nodes[j].y - nodes[i].y;
                    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                    const force = (5000) / (dist * dist);
                    const fx = (dx / dist) * force;
                    const fy = (dy / dist) * force;
                    
                    if (dist < 400) {
                        nodes[i].vx -= fx;
                        nodes[i].vy -= fy;
                        nodes[j].vx += fx;
                        nodes[j].vy += fy;
                    }
                }
            }

            // Spring
            links.forEach(link => {
                const dx = link.target.x - link.source.x;
                const dy = link.target.y - link.source.y;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const targetDist = 140; 
                const force = (dist - targetDist) * 0.04;

                const fx = (dx / dist) * force;
                const fy = (dy / dist) * force;

                link.source.vx += fx;
                link.source.vy += fy;
                link.target.vx -= fx;
                link.target.vy -= fy;
            });

            // Center & Move
            nodes.forEach(node => {
                const dx = (width / 2) - node.x;
                const dy = (height / 2) - node.y;
                node.vx += dx * 0.003;
                node.vy += dy * 0.003;

                node.x += node.vx;
                node.y += node.vy;

                node.vx *= 0.90;
                node.vy *= 0.90;
            });

            // Ghosts
            ghostNodes.forEach(g => {
                g.x += Math.sin(Date.now() * 0.002 + g.id) * 0.15;
                g.y += Math.cos(Date.now() * 0.002 + g.id) * 0.15;
            });
        }

        // --- Rendering (Pastel Theme) ---
        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            ctx.save();
            ctx.translate(transform.x, transform.y);
            ctx.scale(transform.k, transform.k);

            // Draw Links
            ctx.strokeStyle = "#d6d3d1"; // Stone 300
            ctx.lineWidth = 1.5;
            links.forEach(link => {
                ctx.beginPath();
                ctx.moveTo(link.source.x, link.source.y);
                ctx.lineTo(link.target.x, link.target.y);
                ctx.globalAlpha = 0.5;
                ctx.stroke();
            });

            // Helper to draw node
            const drawNodeShape = (n, isGhost) => {
                const size = n.type === 'main' ? 20 : 10;
                
                ctx.beginPath();
                ctx.arc(n.x, n.y, size, 0, Math.PI * 2);
                
                if (isGhost) {
                    ctx.fillStyle = "transparent";
                    ctx.strokeStyle = "#a8a29e";
                    ctx.lineWidth = 1;
                    ctx.setLineDash([3, 3]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                } else {
                    ctx.globalAlpha = 1;
                    // Pastel Fills
                    if (n.id === selectedNode?.id) {
                        ctx.fillStyle = "#1c1917"; // Selected = Dark
                        ctx.shadowColor = "rgba(0,0,0,0.1)";
                        ctx.shadowBlur = 20;
                    } else if (n === hoveredNode) {
                        ctx.fillStyle = "#57534e"; // Hover = Stone
                        ctx.shadowBlur = 0;
                    } else {
                        // Color based on type (Pastels)
                        if (n.type === 'main') ctx.fillStyle = "#fda4af"; // Rose 300
                        else if (n.type === 'sub') ctx.fillStyle = "#a5b4fc"; // Indigo 300
                        else ctx.fillStyle = "#6ee7b7"; // Emerald 300
                    }
                    
                    ctx.fill();
                    
                    // White border for pop
                    ctx.strokeStyle = "#fff";
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    ctx.shadowBlur = 0;

                    // Text Label
                    if (n.type === 'main' || n === hoveredNode || n.id === selectedNode?.id) {
                        ctx.fillStyle = "#44403C"; // Stone 700
                        ctx.font = n.type === 'main' ? "500 13px Inter" : "11px Inter";
                        ctx.textAlign = "center";
                        ctx.fillText(n.label, n.x, n.y + size + 18);
                    }
                }
            };

            // Draw Real Nodes
            nodes.forEach(node => drawNodeShape(node, false));
            
            // Draw Ghost Nodes
            ghostNodes.forEach(node => {
                drawNodeShape(node, true);
                if(selectedNode) {
                    ctx.beginPath();
                    ctx.moveTo(selectedNode.x, selectedNode.y);
                    ctx.lineTo(node.x, node.y);
                    ctx.strokeStyle = "#d6d3d1";
                    ctx.setLineDash([4, 4]);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            });

            ctx.restore();
            
            step();
            requestAnimationFrame(draw);
        }

        // --- Interaction Logic ---
        function initSearch(term) {
            document.getElementById('search-container').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('search-container').style.display = 'none';
                document.getElementById('controls').classList.remove('opacity-0', 'pointer-events-none');
                document.getElementById('graph-canvas').classList.remove('opacity-0');
            }, 700);

            const centerNode = { id: 1, x: width/2, y: height/2, vx: 0, vy: 0, label: term, type: 'main', data: MOCK_DATA.projects[0] };
            nodes.push(centerNode);

            MOCK_DATA.projects.slice(1).forEach((p, i) => {
                const angle = (Math.PI * 2 / 6) * i;
                const dist = 100;
                const newNode = {
                    id: p.id,
                    x: width/2 + Math.cos(angle) * dist,
                    y: height/2 + Math.sin(angle) * dist,
                    vx: 0, vy: 0,
                    label: p.title,
                    type: p.type,
                    data: p
                };
                nodes.push(newNode);
                links.push({ source: centerNode, target: newNode });
            });

            draw();
        }

        const searchInput = document.getElementById('main-search');
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim() !== "") {
                initSearch(searchInput.value);
            }
        });

        // Mouse Events
        canvas.addEventListener('mousemove', e => {
            const rect = canvas.getBoundingClientRect();
            const mx = (e.clientX - transform.x) / transform.k;
            const my = (e.clientY - transform.y) / transform.k;
            
            let hit = null;
            nodes.forEach(n => {
                const dx = mx - n.x;
                const dy = my - n.y;
                const hitRad = n.type === 'main' ? 25 : 15;
                if (dx*dx + dy*dy < hitRad*hitRad) hit = n;
            });

            if (hit !== hoveredNode) {
                hoveredNode = hit;
                canvas.style.cursor = hit ? 'pointer' : (isDragging ? 'grabbing' : 'grab');
            }

            if (isDragging) {
                transform.x += e.clientX - dragStart.x;
                transform.y += e.clientY - dragStart.y;
                dragStart.x = e.clientX;
                dragStart.y = e.clientY;
            }
        });

        canvas.addEventListener('mousedown', e => {
            if (!hoveredNode) {
                isDragging = true;
                dragStart.x = e.clientX;
                dragStart.y = e.clientY;
            }
        });

        canvas.addEventListener('mouseup', e => {
            isDragging = false;
            if (hoveredNode) {
                selectNode(hoveredNode);
            }
        });

        canvas.addEventListener('wheel', e => {
            e.preventDefault();
            const zoomSensitivity = 0.001;
            const newK = transform.k - e.deltaY * zoomSensitivity;
            if (newK > 0.1 && newK < 5) transform.k = newK;
        });

        // --- Sidebar Logic ---
        function selectNode(node) {
            selectedNode = node;
            const sb = document.getElementById('sidebar');
            const data = node.data;

            document.getElementById('sb-title').innerText = data.title;
            document.getElementById('sb-desc').innerText = data.desc;
            
            const teamContainer = document.getElementById('sb-team');
            teamContainer.innerHTML = '';
            data.team.forEach((member, idx) => {
                const div = document.createElement('div');
                div.className = "flex items-center gap-3 p-2.5 rounded-xl bg-white border border-stone-100 hover:border-stone-300 hover:shadow-md cursor-pointer group transition-all";
                // Pastel avatar colors
                const colors = ['bg-rose-100 text-rose-600', 'bg-blue-100 text-blue-600', 'bg-amber-100 text-amber-600'];
                const colorClass = colors[idx % colors.length];
                
                div.innerHTML = `
                    <div class="w-8 h-8 rounded-full ${colorClass} flex items-center justify-center text-[10px] font-bold">${member.charAt(0)}</div>
                    <span class="text-xs font-medium text-stone-600 group-hover:text-stone-900">${member}</span>
                `;
                div.addEventListener('mouseenter', () => spawnGhost(member, node));
                div.addEventListener('mouseleave', removeGhosts);
                teamContainer.appendChild(div);
            });

            const depContainer = document.getElementById('sb-deps');
            depContainer.innerHTML = '';
            if(data.deps.length === 0) {
                depContainer.innerHTML = '<span class="text-xs text-stone-400 italic pl-1">No external dependencies</span>';
            }
            data.deps.forEach(dep => {
                const div = document.createElement('div');
                div.className = "flex items-center gap-2 text-xs font-medium text-stone-500 p-2.5 border border-dashed border-stone-300 rounded-lg hover:bg-stone-50 cursor-pointer transition-colors";
                div.innerHTML = `<iconify-icon icon="solar:box-minimalistic-linear" class="text-stone-400"></iconify-icon> ${dep}`;
                div.addEventListener('mouseenter', () => spawnGhost(dep, node));
                div.addEventListener('mouseleave', removeGhosts);
                depContainer.appendChild(div);
            });

            sb.style.transform = "translateX(0)";
        }

        document.getElementById('close-sidebar').addEventListener('click', () => {
            document.getElementById('sidebar').style.transform = "translateX(-120%)";
            selectedNode = null;
        });

        function spawnGhost(label, originNode) {
            const angle = Math.random() * Math.PI * 2;
            const dist = 80;
            ghostNodes = [{
                x: originNode.x + Math.cos(angle) * dist,
                y: originNode.y + Math.sin(angle) * dist,
                label: label,
                id: Math.random()
            }];
        }

        function removeGhosts() {
            ghostNodes = [];
        }

        function resetView() {
            transform = { x: 0, y: 0, k: 1 };
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
      

<div className="bg-blob w-96 h-96 rounded-full bg-rose-100 top-0 left-0 mix-blend-multiply animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="bg-blob w-96 h-96 rounded-full bg-blue-100 bottom-0 right-0 mix-blend-multiply"></div>
<div className="bg-blob w-80 h-80 rounded-full bg-orange-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>

<nav className="absolute top-0 left-0 w-full px-8 py-6 z-50 flex justify-between items-center pointer-events-none">
<div className="flex gap-3 pointer-events-auto items-center">
<div className="flex bg-white w-8 h-8 border border-stone-200 rounded-lg items-center justify-center shadow-sm">
<iconify-icon className="text-stone-700 text-lg" icon="solar:widget-2-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-stone-800 tracking-tight font-serif">Tear</span>
</div>
<div className="flex items-center gap-6 pointer-events-auto">
<button className="text-xs text-stone-500 hover:text-stone-900 transition-colors font-medium">Documentação</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-100 to-blue-100 border border-white shadow-sm flex items-center justify-center">
<iconify-icon className="text-stone-600" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
</nav>

<canvas className="opacity-0 transition-opacity duration-1000" id="graph-canvas"></canvas>

<div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-[#FDFCF8]/95 transition-opacity duration-700" id="search-container">
<div className="w-full max-w-md flex flex-col gap-6 p-4 fade-in items-center text-center">
<div className="flex flex-col items-center gap-3 mb-2">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-rose-50 flex items-center justify-center mb-2 shadow-sm border border-stone-100">
<iconify-icon className="text-2xl text-stone-600" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h1 className="text-3xl font-serif font-medium tracking-tight text-stone-800">Tecendo Ideias</h1>
<p className="text-stone-500 text-sm max-w-xs">Visualize conexões, dependências e inteligência de projetos em um ambiente fluido.</p>
</div>
<div className="relative group w-full max-w-sm">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-stone-400 group-focus-within:text-stone-600 transition-colors text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input autocomplete="off" className="w-full bg-white border border-stone-200 text-stone-800 text-sm rounded-2xl py-4 pl-11 pr-4 placeholder:text-stone-400 focus:border-stone-300 focus:ring-4 focus:ring-stone-100 transition-all shadow-xl shadow-stone-200/50" id="main-search" placeholder="Procure por projetos..." type="text"/>
</div>
<div className="flex flex-wrap justify-center gap-2 mt-2">
<span className="px-3 py-1.5 rounded-full text-[11px] bg-rose-50 border border-rose-100 text-rose-600 hover:bg-rose-100 cursor-pointer transition-colors font-medium tracking-wide">#Inteligencia Artificial</span>
<span className="px-3 py-1.5 rounded-full text-[11px] bg-indigo-50 border border-indigo-100 text-indigo-600 hover:bg-indigo-100 cursor-pointer transition-colors font-medium tracking-wide">#Processos</span>
<span className="px-3 py-1.5 rounded-full text-[11px] bg-emerald-50 border border-emerald-100 text-emerald-600 hover:bg-emerald-100 cursor-pointer transition-colors font-medium tracking-wide">@PUC-Rio</span>
</div>
</div>
</div>

<aside className="absolute left-6 top-6 bottom-6 w-[380px] glass-panel rounded-3xl z-50 transform -translate-x-[120%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col overflow-hidden" id="sidebar">

<div className="p-8 pb-4 flex justify-between items-start">
<div className="flex flex-col gap-2">
<span className="px-2 py-1 rounded-md bg-emerald-100/50 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider w-fit flex items-center gap-1.5 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Active Project
                </span>
<h2 className="text-2xl font-serif font-medium text-stone-800 tracking-tight mt-1" id="sb-title">Project Title</h2>
<span className="text-xs font-mono text-stone-400" id="sb-id">ID-29401</span>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors" id="close-sidebar">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto px-8 py-4 space-y-8">

<div>
<p className="text-sm text-stone-600 leading-relaxed font-light" id="sb-desc">
                    Description goes here.
                </p>
</div>

<div className="space-y-4">
<h3 className="text-[11px] font-semibold text-stone-400 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Equipe
                </h3>
<div className="flex flex-col gap-2" id="sb-team">

</div>
</div>

<div className="space-y-4">
<h3 className="text-[11px] font-semibold text-stone-400 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon> Dependências
                </h3>
<div className="grid grid-cols-1 gap-2" id="sb-deps">

</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-100">
<div className="bg-white/50 p-3 rounded-xl border border-stone-100">
<span className="block text-[10px] text-stone-400 mb-1 font-medium uppercase">Timeline</span>
<span className="block text-xs text-stone-700 font-medium">Q3 2024 - Q1 2025</span>
</div>
<div className="bg-white/50 p-3 rounded-xl border border-stone-100">
<span className="block text-[10px] text-stone-400 mb-1 font-medium uppercase">Budget Code</span>
<span className="block text-xs text-stone-700 font-mono">CC-9942</span>
</div>
</div>
</div>

<div className="p-6 pt-4 bg-white/30 flex gap-3 border-t border-stone-100">
<button className="flex-1 py-3 rounded-xl bg-stone-800 text-white text-xs font-medium hover:bg-stone-700 transition-all shadow-lg shadow-stone-300/50 flex items-center justify-center gap-2">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                Open in Canvas
            </button>
<button className="p-3 rounded-xl border border-stone-200 bg-white text-stone-500 hover:text-stone-800 hover:border-stone-300 transition-colors shadow-sm">
<iconify-icon className="text-base" icon="solar:share-linear"></iconify-icon>
</button>
</div>
</aside>

<div className="absolute bottom-8 right-8 z-40 flex flex-col gap-3 opacity-0 pointer-events-none transition-opacity duration-500" id="controls">
<button className="w-12 h-12 rounded-full bg-white border border-stone-100 shadow-lg shadow-stone-200/50 flex items-center justify-center text-stone-400 hover:text-stone-700 hover:-translate-y-1 transition-all pointer-events-auto">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-white border border-stone-100 shadow-lg shadow-stone-200/50 flex items-center justify-center text-stone-400 hover:text-stone-700 hover:-translate-y-1 transition-all pointer-events-auto">
<iconify-icon className="text-xl" icon="solar:minus-circle-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-stone-800 border border-stone-800 shadow-xl shadow-stone-400/50 flex items-center justify-center text-white hover:bg-stone-700 hover:-translate-y-1 transition-all pointer-events-auto mt-2" onclick="resetView()">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</button>
</div>


    </>
  );
}
