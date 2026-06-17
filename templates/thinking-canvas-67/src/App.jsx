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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State Management
        let nodes = [];
        let connections = [];
        let chatHistory = [];
        let selectedNodeId = null;
        let isFocusMode = false;
        let dragTarget = null;
        let zoom = 1;

        const nodeTypes = {
            project: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-100', icon: 'solar:folder-2-linear', label: 'Project' },
            task: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-100', icon: 'solar:check-square-linear', label: 'Task' },
            problem: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-100', icon: 'solar:danger-linear', label: 'Problem' },
            constraint: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-100', icon: 'solar:lock-linear', label: 'Constraint' },
            resource: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100', icon: 'solar:case-linear', label: 'Resource' },
            idea: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-100', icon: 'solar:lightbulb-linear', label: 'Idea' },
            question: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-100', icon: 'solar:help-linear', label: 'Question' }
        };

        // Initialize
        window.onload = () => {
            loadState();
            renderCanvas();
        };

        function saveState() {
            const state = { nodes, connections, chatHistory };
            localStorage.setItem('thinking_canvas_state', JSON.stringify(state));
        }

        function loadState() {
            const saved = localStorage.getItem('thinking_canvas_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                nodes = parsed.nodes || [];
                connections = parsed.connections || [];
                chatHistory = parsed.chatHistory || [];
                chatHistory.forEach(msg => appendToChatUI(msg.sender, msg.text));
            }
        }

        // Chat Logic
        function handleKey(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                organizeInput();
            }
        }

        function appendToChatUI(sender, text) {
            const container = document.getElementById('chatHistory');
            const div = document.createElement('div');
            div.className = `p-3 rounded-xl text-sm ${sender === 'user' ? 'bg-slate-100 ml-6 text-slate-800' : 'bg-white border border-slate-100 mr-6 text-slate-600'}`;
            div.textContent = text;
            container.appendChild(div);
            container.scrollTop = container.scrollHeight;
        }

        function organizeInput() {
            const input = document.getElementById('userInput');
            const text = input.value.trim();
            if (!text) return;

            appendToChatUI('user', text);
            input.value = '';

            // Simulate AI Processing
            const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 3);
            const newNodes = [];
            const timestamp = Date.now();

            sentences.forEach((s, idx) => {
                let type = 'task';
                const low = s.toLowerCase();
                if (low.includes('need') || low.includes('replace') || low.includes('buy')) type = 'task';
                if (low.includes('problem') || low.includes('difficult') || low.includes('issue')) type = 'problem';
                if (low.includes('can\'t') || low.includes('must') || low.includes('limited')) type = 'constraint';
                if (low.includes('?')) type = 'question';
                if (low.includes('project') || low.includes('goal')) type = 'project';
                if (low.includes('use') || low.includes('with') || low.includes('resource')) type = 'resource';

                const newNode = {
                    id: `node-${timestamp}-${idx}`,
                    type: type,
                    text: s.trim(),
                    x: 100 + (Math.random() * 200),
                    y: 100 + (idx * 120),
                    width: 220
                };
                newNodes.push(newNode);
                nodes.push(newNode);

                // Auto-connect sequentially for the thought dump
                if (idx > 0) {
                    connections.push({ from: newNodes[idx-1].id, to: newNode.id });
                }
            });

            appendToChatUI('ai', `I've organized ${newNodes.length} thoughts onto your canvas. I've categorized them by type and connected related ideas.`);
            saveState();
            renderCanvas();
        }

        // Canvas Rendering
        function renderCanvas() {
            const canvas = document.getElementById('canvas');
            const svg = document.getElementById('connectionsLayer');
            canvas.innerHTML = '';
            svg.innerHTML = '';

            // Draw Connections
            connections.forEach(conn => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                if (fromNode && toNode) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const startX = fromNode.x + 110;
                    const startY = fromNode.y + 40;
                    const endX = toNode.x + 110;
                    const endY = toNode.y + 40;
                    
                    const dx = endX - startX;
                    const dy = endY - startY;
                    const d = `M ${startX} ${startY} C ${startX + dx/2} ${startY}, ${startX + dx/2} ${endY}, ${endX} ${endY}`;
                    
                    line.setAttribute('d', d);
                    line.setAttribute('class', 'connection-line');
                    svg.appendChild(line);
                }
            });

            // Draw Nodes
            nodes.forEach(node => {
                const typeInfo = nodeTypes[node.type];
                const nodeEl = document.createElement('div');
                const isBlocker = (node.type === 'problem' || node.type === 'constraint');
                const opacityClass = (isFocusMode && !isBlocker) ? 'opacity-20' : 'opacity-100';
                
                nodeEl.className = `absolute node-transition group cursor-grab p-4 rounded-2xl border bg-white shadow-sm hover:shadow-md ${typeInfo.border} w-[13.75rem] ${opacityClass} ${selectedNodeId === node.id ? 'ring-2 ring-slate-400' : ''}`;
                nodeEl.style.transform = `translate(${node.x}px, ${node.y}px)`;
                nodeEl.dataset.id = node.id;

                nodeEl.innerHTML = `
                    <div class="flex items-start justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <div class="${typeInfo.bg} ${typeInfo.text} p-1.5 rounded-lg flex items-center justify-center">
                                <iconify-icon icon="${typeInfo.icon}" stroke-width="1.5"></iconify-icon>
                            </div>
                            <span class="text-[0.625rem] font-semibold uppercase tracking-wider ${typeInfo.text}">${typeInfo.label}</span>
                        </div>
                        <button onclick="deleteNode('${node.id}')" class="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-rose-500 transition-all">
                            <iconify-icon icon="solar:trash-bin-minimalistic-linear"></iconify-icon>
                        </button>
                    </div>
                    <div contenteditable="true" onblur="updateNodeText('${node.id}', this.innerText)" class="text-xs leading-relaxed text-slate-700 focus:outline-none min-h-[2.5rem]">${node.text}</div>
                `;

                nodeEl.onmousedown = (e) => startDrag(e, node.id);
                nodeEl.onclick = (e) => { e.stopPropagation(); selectNode(node.id); };
                canvas.appendChild(nodeEl);
            });
        }

        // Drag & Interaction
        function startDrag(e, id) {
            if (e.target.closest('button') || e.target.getAttribute('contenteditable')) return;
            dragTarget = nodes.find(n => n.id === id);
            const initialX = e.clientX;
            const initialY = e.clientY;
            const startX = dragTarget.x;
            const startY = dragTarget.y;

            document.onmousemove = (moveE) => {
                if (dragTarget) {
                    dragTarget.x = startX + (moveE.clientX - initialX);
                    dragTarget.y = startY + (moveE.clientY - initialY);
                    renderCanvas();
                }
            };

            document.onmouseup = () => {
                document.onmousemove = null;
                dragTarget = null;
                saveState();
            };
        }

        function selectNode(id) {
            selectedNodeId = id;
            renderCanvas();
        }

        function updateNodeText(id, newText) {
            const node = nodes.find(n => n.id === id);
            if (node) {
                node.text = newText;
                saveState();
            }
        }

        function deleteNode(id) {
            nodes = nodes.filter(n => n.id !== id);
            connections = connections.filter(c => c.from !== id && c.to !== id);
            saveState();
            renderCanvas();
        }

        function clearCanvas() {
            if (confirm('Are you sure you want to clear the canvas?')) {
                nodes = [];
                connections = [];
                chatHistory = [];
                document.getElementById('chatHistory').innerHTML = '';
                saveState();
                renderCanvas();
            }
        }

        // Specialized Actions
        function breakDownSelected() {
            if (!selectedNodeId) {
                appendToChatUI('ai', 'Please select a node on the canvas to break it down.');
                return;
            }
            const parent = nodes.find(n => n.id === selectedNodeId);
            const breakdownItems = [
                `Research requirements for ${parent.text.slice(0, 20)}...`,
                `Identify key stakeholders/materials`,
                `Define success criteria for this step`,
                `Allocate budget or time blocks`
            ];
            
            const timestamp = Date.now();
            breakdownItems.forEach((text, i) => {
                const childId = `node-${timestamp}-${i}`;
                nodes.push({
                    id: childId,
                    type: 'task',
                    text: text,
                    x: parent.x + 300,
                    y: parent.y + (i * 80) - 120,
                });
                connections.push({ from: parent.id, to: childId });
            });
            
            appendToChatUI('ai', `I've broken down "${parent.text.substring(0, 30)}..." into 4 actionable tasks.`);
            saveState();
            renderCanvas();
        }

        function findBlockers() {
            const blockers = nodes.filter(n => n.type === 'problem' || n.type === 'constraint');
            if (blockers.length > 0) {
                appendToChatUI('ai', `I found ${blockers.length} blockers. Focus on these to clear the path.`);
                isFocusMode = true;
                updateFocusUI();
            } else {
                const questions = nodes.filter(n => n.type === 'question');
                if (questions.length > 0) {
                    appendToChatUI('ai', `No explicit blockers, but you have ${questions.length} unanswered questions that might be slowing you down.`);
                } else {
                    appendToChatUI('ai', "Everything looks clear! No immediate blockers identified.");
                }
            }
            renderCanvas();
        }

        function toggleFocus() {
            isFocusMode = !isFocusMode;
            updateFocusUI();
            renderCanvas();
        }

        function updateFocusUI() {
            const thumb = document.getElementById('focusThumb');
            const toggle = document.getElementById('focusToggle');
            if (isFocusMode) {
                thumb.style.transform = 'translateX(1rem)';
                toggle.classList.replace('bg-slate-200', 'bg-slate-900');
            } else {
                thumb.style.transform = 'translateX(0)';
                toggle.classList.replace('bg-slate-900', 'bg-slate-200');
            }
        }

        function createNewNode() {
            const newNode = {
                id: `node-${Date.now()}`,
                type: 'idea',
                text: 'New thought...',
                x: 300,
                y: 300
            };
            nodes.push(newNode);
            saveState();
            renderCanvas();
        }

        // Snapshot Management
        function saveSnapshotPrompt() {
            const name = prompt("Enter a name for this snapshot:", `Session ${new Date().toLocaleTimeString()}`);
            if (!name) return;
            
            const snapshots = JSON.parse(localStorage.getItem('thinking_canvas_snapshots') || '[]');
            snapshots.push({
                name,
                timestamp: Date.now(),
                data: { nodes, connections, chatHistory }
            });
            localStorage.setItem('thinking_canvas_snapshots', JSON.stringify(snapshots));
            appendToChatUI('ai', `Snapshot "${name}" saved successfully.`);
        }

        function openSnapshots() {
            const snapshots = JSON.parse(localStorage.getItem('thinking_canvas_snapshots') || '[]');
            const list = document.getElementById('snapshotList');
            list.innerHTML = snapshots.length ? '' : '<p class="text-xs text-slate-400 p-4">No snapshots saved yet.</p>';
            
            snapshots.sort((a,b) => b.timestamp - a.timestamp).forEach((s, idx) => {
                const item = document.createElement('div');
                item.className = "flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors";
                item.innerHTML = `
                    <div>
                        <div class="text-xs font-semibold text-slate-800">${s.name}</div>
                        <div class="text-[0.625rem] text-slate-400">${new Date(s.timestamp).toLocaleString()}</div>
                    </div>
                    <button onclick="loadSnapshot(${s.timestamp})" class="text-xs font-medium text-slate-600 hover:text-slate-900">Load</button>
                `;
                list.appendChild(item);
            });
            document.getElementById('snapshotModal').classList.remove('hidden');
        }

        function loadSnapshot(ts) {
            const snapshots = JSON.parse(localStorage.getItem('thinking_canvas_snapshots') || '[]');
            const snap = snapshots.find(s => s.timestamp === ts);
            if (snap) {
                nodes = snap.data.nodes;
                connections = snap.data.connections;
                chatHistory = snap.data.chatHistory;
                document.getElementById('chatHistory').innerHTML = '';
                chatHistory.forEach(msg => appendToChatUI(msg.sender, msg.text));
                renderCanvas();
                closeSnapshots();
            }
        }

        function closeSnapshots() {
            document.getElementById('snapshotModal').classList.add('hidden');
        }

        function zoomCanvas(factor) {
            zoom *= factor;
            document.getElementById('canvas').style.transform = `scale(${zoom})`;
            document.getElementById('connectionsLayer').style.transform = `scale(${zoom})`;
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
      

<header className="h-14 border-b border-slate-100 flex items-center justify-between px-6 shrink-0 bg-white z-20">
<div className="flex items-center gap-3">
<div className="font-semibold tracking-tighter text-lg">TC</div>
<div className="h-4 w-px bg-slate-200"></div>
<h1 className="text-sm font-medium text-slate-500 tracking-tight">Thinking Canvas</h1>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
<span className="text-xs font-medium text-slate-600">Focus View</span>
<button className="w-8 h-4 bg-slate-200 rounded-full relative transition-colors" id="focusToggle" onclick="toggleFocus()">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full transition-transform" id="focusThumb"></div>
</button>
</div>
<button className="text-slate-500 hover:text-slate-900 transition-colors" onclick="openSnapshots()">
<iconify-icon className="text-xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>
<main className="flex-1 flex overflow-hidden">

<section className="w-full md:w-[22rem] border-r border-slate-100 flex flex-col bg-slate-50/30 z-10">
<div className="flex-1 overflow-y-auto p-4 space-y-4" id="chatHistory">

<div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
<p className="text-sm text-slate-600 leading-relaxed">
                        Welcome. Dump your messy thoughts here, and I'll help you map them out. Projects, constraints, problems, or questions—just type it all out.
                    </p>
</div>
</div>
<div className="p-4 bg-white border-t border-slate-100 space-y-3">
<textarea className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl p-3 h-24 focus:ring-1 focus:ring-slate-300 focus:outline-none transition-all resize-none" id="userInput" onkeydown="handleKey(event)" placeholder="Describe your project or thought..."></textarea>
<div className="grid grid-cols-2 gap-2">
<button className="col-span-2 bg-slate-900 text-white text-xs font-medium py-2.5 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2" onclick="organizeInput()">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                        Organize on Canvas
                    </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs font-medium py-2 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2" onclick="breakDownSelected()">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
                        Break Down
                    </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs font-medium py-2 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2" onclick="findBlockers()">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
                        Blockers
                    </button>
</div>
<div className="flex items-center justify-between pt-2">
<button className="text-[0.625rem] text-slate-400 hover:text-rose-500 font-medium uppercase tracking-wider" onclick="clearCanvas()">Clear Canvas</button>
<button className="text-[0.625rem] text-slate-400 hover:text-slate-900 font-medium uppercase tracking-wider" onclick="saveSnapshotPrompt()">Save Snapshot</button>
</div>
</div>
</section>

<section className="flex-1 relative overflow-hidden canvas-grid" id="canvas-container">
<svg className="absolute inset-0 w-full h-full" id="connectionsLayer"></svg>
<div className="absolute inset-0 w-full h-full" id="canvas"></div>

<div className="absolute bottom-6 right-6 flex flex-col gap-2">
<button className="w-10 h-10 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all" onclick="createNewNode()">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="flex flex-col bg-white border border-slate-200 rounded-xl shadow-lg p-1">
<button className="p-2 text-slate-400 hover:text-slate-900" onclick="zoomCanvas(1.1)"><iconify-icon icon="solar:magnifer-zoom-in-linear"></iconify-icon></button>
<button className="p-2 text-slate-400 hover:text-slate-900" onclick="zoomCanvas(0.9)"><iconify-icon icon="solar:magnifer-zoom-out-linear"></iconify-icon></button>
</div>
</div>
</section>
</main>

<div className="hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-6" id="snapshotModal">
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="font-semibold tracking-tight">Snapshots</h3>
<button onclick="closeSnapshots()"><iconify-icon className="text-xl text-slate-400" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="p-4 max-h-96 overflow-y-auto space-y-2" id="snapshotList"></div>
</div>
</div>


    </>
  );
}
