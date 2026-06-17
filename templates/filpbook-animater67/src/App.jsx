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



        // --- State ---
        const canvas = document.getElementById('draw-canvas');
        const onionCanvas = document.getElementById('onion-canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const onionCtx = onionCanvas.getContext('2d');
        
        // Initial Canvas Setup
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        const state = {
            frames: [],
            currentFrameIndex: 0,
            isPlaying: false,
            onionSkin: false,
            gridEnabled: false,
            tool: 'pen', 
            color: '#000000',
            brushSize: 5,
            penSize: 5,       
            eraserSize: 20,   
            isDrawing: false,
            zoom: 1.0,
            fps: 12,
            playTimer: null,
            width: 800,
            height: 600,
            undoStack: [],
            redoStack: [],
            dragSrcIndex: null,
            lineStart: { x: 0, y: 0 },
            snapshot: null,
            renderId: 0
        };

        // --- Init ---
        function init() {
            saveCurrentFrameToMemory(); 
            renderTimeline();
            updateUI();
            updateHistoryButtons();
            
            // Listeners
            canvas.addEventListener('mousedown', handleMouseDown);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mouseout', stopDrawing);
            
            // Touch support
            canvas.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const mouseEvent = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
                canvas.dispatchEvent(mouseEvent);
            }, { passive: false });
            
            canvas.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                const mouseEvent = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                });
                canvas.dispatchEvent(mouseEvent);
            }, { passive: false });
            
            canvas.addEventListener('touchend', (e) => {
                e.preventDefault();
                const mouseEvent = new MouseEvent("mouseup", {});
                canvas.dispatchEvent(mouseEvent);
            });

            // Keyboard Shortcuts
            document.addEventListener('keydown', (e) => {
                if (e.target.tagName === 'INPUT') return; // Don't trigger when typing

                if (e.ctrlKey || e.metaKey) {
                    if (e.key === 'z') { e.preventDefault(); undo(); }
                    else if (e.key === 'y' || (e.shiftKey && e.key === 'Z')) { e.preventDefault(); redo(); }
                } else {
                    switch(e.key.toLowerCase()) {
                        case ' ': e.preventDefault(); playAnimation(); break;
                        case 'arrowleft': if(!state.isPlaying) { saveCurrentFrameToMemory(); if(state.currentFrameIndex > 0) loadFrame(state.currentFrameIndex - 1); } break;
                        case 'arrowright': if(!state.isPlaying) { saveCurrentFrameToMemory(); if(state.currentFrameIndex < state.frames.length - 1) loadFrame(state.currentFrameIndex + 1); } break;
                        case 'o': toggleOnionSkin(); break;
                        case 'b': setTool('pen'); break;
                        case 'e': setTool('eraser'); break;
                        case 'f': setTool('bucket'); break;
                        case 'g': toggleGrid(); break;
                        case 'l': setTool('line'); break;
                        case 'r': setTool('rect'); break;
                        case 'c': setTool('circle'); break;
                        case 'n': if(e.key === 'N') addFrame(); else setTool('pencil'); break;
                        case 'd': if(e.key === 'D') duplicateFrame(); break;
                        case 'm': setTool('marker'); break;
                        case 'delete': case 'backspace': clearFrame(); break;
                    }
                }
            });

            document.getElementById('onion-toggle-btn').addEventListener('click', toggleOnionSkin);
            
            // FPS Slider
            document.getElementById('fps-slider').addEventListener('input', (e) => {
                state.fps = parseInt(e.target.value);
                document.getElementById('fps-display').innerText = state.fps;
                if(state.isPlaying) playAnimation(); 
            });

            // Tween Slider
            document.getElementById('tween-slider').addEventListener('input', (e) => {
                document.getElementById('tween-count-display').innerText = e.target.value;
            });

            // Init size slider
            const slider = document.getElementById('size-slider');
            slider.value = state.penSize;
        }

        // --- Zoom Logic ---
        window.adjustZoom = (delta) => {
            let newZoom = Math.round((state.zoom + delta) * 10) / 10;
            if (newZoom < 0.2) newZoom = 0.2;
            if (newZoom > 3.0) newZoom = 3.0;
            state.zoom = newZoom;
            
            const wrapper = document.getElementById('canvas-wrapper');
            wrapper.style.transform = `scale(${state.zoom})`;
            
            const display = document.getElementById('zoom-display');
            display.innerText = `${Math.round(state.zoom * 100)}%`;
            
            // Show toast
            const toast = document.getElementById('zoom-toast');
            toast.innerText = `${Math.round(state.zoom * 100)}%`;
            toast.classList.remove('opacity-0');
            setTimeout(() => toast.classList.add('opacity-0'), 1000);
        };

        window.toggleGrid = () => {
            state.gridEnabled = !state.gridEnabled;
            const grid = document.getElementById('grid-overlay');
            const btn = document.getElementById('grid-btn');
            
            if (state.gridEnabled) {
                grid.classList.remove('opacity-0');
                btn.classList.add('bg-zinc-800', 'text-white');
                btn.classList.remove('text-zinc-400');
            } else {
                grid.classList.add('opacity-0');
                btn.classList.remove('bg-zinc-800', 'text-white');
                btn.classList.add('text-zinc-400');
            }
        };
        
        window.toggleShortcuts = () => {
            const modal = document.getElementById('shortcuts-modal');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                void modal.offsetWidth;
                modal.classList.remove('opacity-0');
                modal.querySelector('div').classList.remove('scale-95');
                modal.querySelector('div').classList.add('scale-100');
            } else {
                modal.classList.add('opacity-0');
                modal.querySelector('div').classList.remove('scale-100');
                modal.querySelector('div').classList.add('scale-95');
                setTimeout(() => modal.classList.add('hidden'), 200);
            }
        };

        // --- History / Undo / Redo ---
        function saveHistory() {
            if (state.undoStack.length > 20) state.undoStack.shift();
            state.undoStack.push(canvas.toDataURL());
            state.redoStack = []; 
            updateHistoryButtons();
        }

        window.undo = () => {
            if (state.undoStack.length === 0) return;
            state.redoStack.push(canvas.toDataURL());
            
            const previousState = state.undoStack.pop();
            const img = new Image();
            img.onload = () => {
                ctx.clearRect(0, 0, state.width, state.height);
                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 1.0;
                ctx.drawImage(img, 0, 0);
                saveCurrentFrameToMemory(); 
                updateTimelineThumbnail(state.currentFrameIndex);
                renderOnionSkin(state.currentFrameIndex);
            };
            img.src = previousState;
            updateHistoryButtons();
        };

        window.redo = () => {
            if (state.redoStack.length === 0) return;
            state.undoStack.push(canvas.toDataURL());
            
            const nextState = state.redoStack.pop();
            const img = new Image();
            img.onload = () => {
                ctx.clearRect(0, 0, state.width, state.height);
                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 1.0;
                ctx.drawImage(img, 0, 0);
                saveCurrentFrameToMemory();
                updateTimelineThumbnail(state.currentFrameIndex);
                renderOnionSkin(state.currentFrameIndex);
            };
            img.src = nextState;
            updateHistoryButtons();
        };

        function updateHistoryButtons() {
            const undoBtn = document.getElementById('btn-undo');
            const redoBtn = document.getElementById('btn-redo');
            undoBtn.disabled = state.undoStack.length === 0;
            redoBtn.disabled = state.redoStack.length === 0;
        }

        function resetHistory() {
            state.undoStack = [];
            state.redoStack = [];
            updateHistoryButtons();
        }

        // --- Drawing Logic ---
        function getCoordinates(e) {
            const rect = canvas.getBoundingClientRect();
            // Important: Handle zoom scale calculation
            const scaleX = (canvas.width / rect.width);
            const scaleY = (canvas.height / rect.height);
            
            return {
                x: Math.floor((e.clientX - rect.left) * scaleX),
                y: Math.floor((e.clientY - rect.top) * scaleY)
            };
        }

        function handleMouseDown(e) {
            if (state.isPlaying) return;
            saveHistory();

            if (state.tool === 'bucket') {
                const { x, y } = getCoordinates(e);
                fillArea(x, y, state.color);
                saveCurrentFrameToMemory();
                updateTimelineThumbnail(state.currentFrameIndex);
                return;
            }

            startDrawing(e);
        }

        function startDrawing(e) {
            state.isDrawing = true;
            const { x, y } = getCoordinates(e);

            if (state.tool === 'line' || state.tool === 'rect' || state.tool === 'circle') {
                state.lineStart = { x, y };
                state.snapshot = ctx.getImageData(0, 0, state.width, state.height);
            } else {
                ctx.beginPath();
                ctx.moveTo(x, y);
            }
            
            ctx.lineWidth = state.brushSize;
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1.0;
            
            if (state.tool === 'eraser') {
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineCap = 'round';
            } else {
                ctx.globalCompositeOperation = 'source-over';
                ctx.strokeStyle = state.color;
                
                switch(state.tool) {
                    case 'pencil': ctx.lineCap = 'round'; ctx.globalAlpha = 0.7; break;
                    case 'marker': ctx.lineCap = 'butt'; ctx.globalAlpha = 0.4; ctx.lineWidth = state.brushSize * 2; break;
                    case 'line': case 'rect': case 'circle': ctx.lineCap = 'round'; ctx.globalAlpha = 1.0; break;
                    case 'pen': default: ctx.lineCap = 'round'; ctx.globalAlpha = 1.0; break;
                }
            }
        }

        function draw(e) {
            if (!state.isDrawing) return;
            if (state.tool === 'bucket') return;
            
            const { x, y } = getCoordinates(e);

            if (state.tool === 'line') {
                ctx.putImageData(state.snapshot, 0, 0);
                ctx.beginPath();
                ctx.moveTo(state.lineStart.x, state.lineStart.y);
                ctx.lineTo(x, y);
                ctx.stroke();
            } else if (state.tool === 'rect') {
                ctx.putImageData(state.snapshot, 0, 0);
                const width = x - state.lineStart.x;
                const height = y - state.lineStart.y;
                ctx.strokeRect(state.lineStart.x, state.lineStart.y, width, height);
            } else if (state.tool === 'circle') {
                ctx.putImageData(state.snapshot, 0, 0);
                ctx.beginPath();
                const radius = Math.sqrt(Math.pow(x - state.lineStart.x, 2) + Math.pow(y - state.lineStart.y, 2));
                ctx.arc(state.lineStart.x, state.lineStart.y, radius, 0, 2 * Math.PI);
                ctx.stroke();
            } else {
                ctx.lineTo(x, y);
                ctx.stroke();
            }
        }

        function stopDrawing() {
            if (!state.isDrawing) return;
            state.isDrawing = false;
            ctx.closePath();
            saveCurrentFrameToMemory();
            updateTimelineThumbnail(state.currentFrameIndex);
        }
        
        window.clearFrame = () => {
            saveHistory();
            ctx.clearRect(0, 0, state.width, state.height);
            saveCurrentFrameToMemory();
            updateTimelineThumbnail(state.currentFrameIndex);
            renderOnionSkin(state.currentFrameIndex);
        }

        // --- Bucket Fill ---
        function fillArea(startX, startY, fillColorHex) {
            const imageData = ctx.getImageData(0, 0, state.width, state.height);
            const data = imageData.data;
            const width = state.width;
            const height = state.height;
            
            const fr = parseInt(fillColorHex.slice(1, 3), 16);
            const fg = parseInt(fillColorHex.slice(3, 5), 16);
            const fb = parseInt(fillColorHex.slice(5, 7), 16);
            const fa = 255; 

            const targetIndex = (startY * width + startX) * 4;
            const tr = data[targetIndex];
            const tg = data[targetIndex + 1];
            const tb = data[targetIndex + 2];
            const ta = data[targetIndex + 3];

            if (Math.abs(tr - fr) < 5 && Math.abs(tg - fg) < 5 && Math.abs(tb - fb) < 5 && Math.abs(ta - fa) < 5) return;

            const tolerance = 60; 
            const stack = [[startX, startY]];
            
            while (stack.length) {
                const [x, y] = stack.pop();
                const idx = (y * width + x) * 4;

                if (x < 0 || x >= width || y < 0 || y >= height) continue;
                
                const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
                let match = false;
                if (ta === 0) match = a < 50; 
                else match = (Math.abs(r - tr) <= tolerance && Math.abs(g - tg) <= tolerance && Math.abs(b - tb) <= tolerance && Math.abs(a - ta) <= tolerance);

                if (match) {
                    data[idx] = fr; data[idx + 1] = fg; data[idx + 2] = fb; data[idx + 3] = fa;
                    stack.push([x + 1, y]); stack.push([x - 1, y]); stack.push([x, y + 1]); stack.push([x, y - 1]);
                }
            }
            ctx.putImageData(imageData, 0, 0);
        }

        // --- Tool Management ---
        window.setTool = (tool) => {
            state.tool = tool;
            document.querySelectorAll('.tool-btn').forEach(btn => {
                const isActive = btn.id === `tool-${tool}`;
                if (isActive) btn.className = 'tool-btn p-2 rounded-lg bg-zinc-800 text-white shadow-sm ring-1 ring-white/10 transition-all w-full flex justify-center group relative';
                else btn.className = 'tool-btn p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-all w-full flex justify-center relative';
            });
            
            const slider = document.getElementById('size-slider');
            if (tool === 'eraser') {
                state.brushSize = state.eraserSize;
                slider.value = state.eraserSize;
            } else {
                state.brushSize = state.penSize;
                slider.value = state.penSize;
            }
            canvas.style.cursor = tool === 'bucket' ? 'cell' : 'crosshair';
        };

        window.triggerColorPicker = () => document.getElementById('custom-color-input').click();
        window.handleCustomColor = (color) => {
            const palette = document.getElementById('color-palette');
            const wrapper = document.getElementById('custom-color-wrapper');
            const newBtn = document.createElement('div');
            newBtn.className = "w-6 h-6 rounded-full border border-zinc-700 cursor-pointer hover:scale-110 transition-transform color-btn shadow-md shrink-0";
            newBtn.style.backgroundColor = color;
            newBtn.dataset.color = color;
            newBtn.onclick = () => setColor(color);
            palette.insertBefore(newBtn, wrapper);
            setColor(color);
        };
        window.setColor = (color) => {
            state.color = color;
            if (state.tool === 'eraser') setTool('pen');
            document.querySelectorAll('.color-btn').forEach(btn => {
                if(btn.dataset.color === color) btn.classList.add('ring-2', 'ring-indigo-500', 'ring-offset-2', 'ring-offset-zinc-900');
                else btn.classList.remove('ring-2', 'ring-indigo-500', 'ring-offset-2', 'ring-offset-zinc-900');
            });
        };
        window.setBrushSize = (size) => {
            const val = parseInt(size);
            state.brushSize = val;
            if (state.tool === 'eraser') state.eraserSize = val;
            else state.penSize = val;
        };

        // --- Frame Management ---
        function saveCurrentFrameToMemory() {
            const dataURL = canvas.toDataURL();
            if (state.frames[state.currentFrameIndex] !== undefined) state.frames[state.currentFrameIndex] = dataURL;
            else state.frames.push(dataURL);
        }

        function loadFrame(index) {
            resetHistory();
            ctx.clearRect(0, 0, state.width, state.height);
            const img = new Image();
            img.onload = () => {
                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 1.0;
                ctx.drawImage(img, 0, 0);
            };
            img.src = state.frames[index];
            state.currentFrameIndex = index;
            renderOnionSkin(index);
            updateTimelineSelection();
        }

        window.addFrame = () => {
            saveCurrentFrameToMemory();
            const blankCanvas = document.createElement('canvas');
            blankCanvas.width = state.width;
            blankCanvas.height = state.height;
            state.frames.splice(state.currentFrameIndex + 1, 0, blankCanvas.toDataURL());
            renderTimeline();
            loadFrame(state.currentFrameIndex + 1);
            updateFrameCount();
        };
        
        window.duplicateFrame = () => {
            saveCurrentFrameToMemory();
            const currentData = state.frames[state.currentFrameIndex];
            state.frames.splice(state.currentFrameIndex + 1, 0, currentData);
            renderTimeline();
            loadFrame(state.currentFrameIndex + 1);
            updateFrameCount();
        };

        window.deleteFrame = () => {
            if (state.frames.length <= 1) {
                clearFrame();
                return;
            }
            state.frames.splice(state.currentFrameIndex, 1);
            if (state.currentFrameIndex >= state.frames.length) state.currentFrameIndex = state.frames.length - 1;
            renderTimeline();
            loadFrame(state.currentFrameIndex);
            updateFrameCount();
        };

        // --- Drag Drop ---
        function handleDragStart(e, index) { state.dragSrcIndex = index; e.dataTransfer.effectAllowed = 'move'; e.currentTarget.classList.add('frame-dragging'); }
        function handleDragOver(e) { if (e.preventDefault) e.preventDefault(); e.dataTransfer.dropEffect = 'move'; return false; }
        function handleDragEnter(e) { e.currentTarget.classList.add('frame-drag-over'); }
        function handleDragLeave(e) { e.currentTarget.classList.remove('frame-drag-over'); }
        function handleDrop(e, targetIndex) {
            e.stopPropagation(); e.currentTarget.classList.remove('frame-drag-over'); e.currentTarget.classList.remove('frame-dragging');
            const srcIndex = state.dragSrcIndex;
            if (srcIndex === targetIndex || srcIndex === null) return;
            const frameToMove = state.frames[srcIndex];
            state.frames.splice(srcIndex, 1);
            state.frames.splice(targetIndex, 0, frameToMove);
            if (state.currentFrameIndex === srcIndex) state.currentFrameIndex = targetIndex;
            else { if (srcIndex < state.currentFrameIndex && targetIndex >= state.currentFrameIndex) state.currentFrameIndex--;
            else if (srcIndex > state.currentFrameIndex && targetIndex <= state.currentFrameIndex) state.currentFrameIndex++; }
            state.dragSrcIndex = null;
            renderTimeline();
            renderOnionSkin(state.currentFrameIndex);
        }

        // --- Timeline UI ---
        function renderTimeline() {
            const container = document.getElementById('frames-container');
            container.innerHTML = '';
            state.frames.forEach((frameData, index) => {
                const btn = document.createElement('div');
                btn.className = `flex-shrink-0 w-24 h-24 rounded-lg bg-white border-2 cursor-pointer relative overflow-hidden group transition-all select-none ${index === state.currentFrameIndex ? 'border-indigo-500 ring-2 ring-indigo-500/30' : 'border-zinc-700 opacity-60 hover:opacity-100 hover:border-zinc-500'}`;
                btn.draggable = true;
                btn.addEventListener('dragstart', (e) => handleDragStart(e, index));
                btn.addEventListener('dragover', handleDragOver);
                btn.addEventListener('dragenter', handleDragEnter);
                btn.addEventListener('dragleave', handleDragLeave);
                btn.addEventListener('drop', (e) => handleDrop(e, index));
                btn.addEventListener('dragend', (e) => { e.currentTarget.classList.remove('frame-dragging'); document.querySelectorAll('.frame-drag-over').forEach(el => el.classList.remove('frame-drag-over')); });
                const label = document.createElement('span');
                label.className = "absolute top-1 left-2 text-[10px] font-bold text-zinc-400 bg-zinc-900/80 px-1.5 rounded z-10 pointer-events-none";
                label.innerText = index + 1;
                const img = new Image();
                img.src = frameData;
                img.className = "w-full h-full object-contain pointer-events-none bg-white";
                btn.appendChild(label); btn.appendChild(img);
                btn.onclick = () => { if(!state.isPlaying && index !== state.currentFrameIndex) { saveCurrentFrameToMemory(); loadFrame(index); } };
                container.appendChild(btn);
            });
        }

        function updateTimelineThumbnail(index) {
            const container = document.getElementById('frames-container');
            if (container.children[index]) { const img = container.children[index].querySelector('img'); img.src = state.frames[index]; }
        }

        function updateTimelineSelection() {
            const container = document.getElementById('frames-container');
            Array.from(container.children).forEach((child, idx) => {
                if (idx === state.currentFrameIndex) {
                    child.className = `flex-shrink-0 w-24 h-24 rounded-lg bg-white border-2 cursor-pointer relative overflow-hidden group transition-all border-indigo-500 ring-2 ring-indigo-500/30 select-none`;
                    child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else child.className = `flex-shrink-0 w-24 h-24 rounded-lg bg-white border-2 cursor-pointer relative overflow-hidden group transition-all border-zinc-700 opacity-60 hover:opacity-100 hover:border-zinc-500 select-none`;
            });
        }

        function updateFrameCount() { }

        // --- Advanced Onion Skin ---
        function toggleOnionSkin() {
            state.onionSkin = !state.onionSkin;
            const btn = document.getElementById('onion-toggle-btn');
            const indicator = document.getElementById('onion-indicator');
            const canvasEl = document.getElementById('onion-canvas');
            
            if (state.onionSkin) {
                btn.classList.add('bg-zinc-800', 'text-white', 'border-zinc-600');
                btn.classList.remove('bg-zinc-900');
                indicator.classList.remove('bg-zinc-600');
                indicator.classList.add('bg-green-500', 'shadow-[0_0_8px_rgba(34,197,94,0.6)]');
                canvasEl.classList.remove('opacity-0');
                canvasEl.classList.add('opacity-100'); // Full opacity, alpha handled in context
                renderOnionSkin(state.currentFrameIndex);
            } else {
                btn.classList.remove('bg-zinc-800', 'text-white', 'border-zinc-600');
                btn.classList.add('bg-zinc-900');
                indicator.classList.add('bg-zinc-600');
                indicator.classList.remove('bg-green-500', 'shadow-[0_0_8px_rgba(34,197,94,0.6)]');
                canvasEl.classList.add('opacity-0');
                canvasEl.classList.remove('opacity-100');
                onionCtx.clearRect(0, 0, state.width, state.height);
            }
        }

        function renderOnionSkin(targetIndex = state.currentFrameIndex) {
            onionCtx.clearRect(0, 0, state.width, state.height);
            if (!state.onionSkin) return;

            const prevIndex = targetIndex - 1;
            const nextIndex = targetIndex + 1;

            // Previous frame (Stronger opacity)
            if (prevIndex >= 0 && state.frames[prevIndex]) {
                const img = new Image();
                img.onload = () => {
                    onionCtx.globalAlpha = 0.3; // 30% visibility
                    onionCtx.drawImage(img, 0, 0);
                    onionCtx.globalAlpha = 1.0;
                };
                img.src = state.frames[prevIndex];
            }

            // Next frame (Fainter opacity, optional but helpful)
            if (nextIndex < state.frames.length && state.frames[nextIndex]) {
                const img = new Image();
                img.onload = () => {
                    onionCtx.globalAlpha = 0.15; // 15% visibility
                    onionCtx.drawImage(img, 0, 0);
                    onionCtx.globalAlpha = 1.0;
                };
                img.src = state.frames[nextIndex];
            }
        }

        // --- Playback ---
        function preloadImages(srcArray) {
            return Promise.all(srcArray.map(src => {
                return new Promise(resolve => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.src = src;
                });
            }));
        }

        window.playAnimation = async () => {
            if (state.isPlaying) { stopAnimation(); return; }
            saveCurrentFrameToMemory();
            if (state.frames.length === 0) return;
            state.isPlaying = true;
            
            const btn = document.getElementById('play-btn');
            btn.innerHTML = '<span class="iconify" data-icon="lucide:square" data-width="14"></span> Stop';
            btn.classList.add('bg-indigo-500', 'text-white', 'hover:bg-indigo-600');
            btn.classList.remove('bg-white', 'text-zinc-950', 'hover:bg-zinc-200');
            onionCanvas.classList.add('opacity-0');
            
            const images = await preloadImages(state.frames);
            let playIndex = 0;
            
            const animate = () => {
                if (!state.isPlaying) return;
                ctx.clearRect(0, 0, state.width, state.height);
                ctx.globalAlpha = 1.0;
                ctx.drawImage(images[playIndex], 0, 0);
                
                const container = document.getElementById('frames-container');
                Array.from(container.children).forEach((child, idx) => {
                        if(idx === playIndex) child.classList.add('ring-2', 'ring-indigo-500');
                        else child.classList.remove('ring-2', 'ring-indigo-500');
                });
                playIndex = (playIndex + 1) % images.length;
                state.playTimer = setTimeout(animate, 1000 / state.fps);
            };
            animate();
        };

        function stopAnimation() {
            state.isPlaying = false;
            clearTimeout(state.playTimer);
            const btn = document.getElementById('play-btn');
            btn.innerHTML = '<span class="iconify" data-icon="lucide:play" data-width="14"></span> Play';
            btn.classList.remove('bg-indigo-500', 'text-white', 'hover:bg-indigo-600');
            btn.classList.add('bg-white', 'text-zinc-950', 'hover:bg-zinc-200');
            loadFrame(state.currentFrameIndex);
            if(state.onionSkin) {
                onionCanvas.classList.remove('opacity-0');
                onionCanvas.classList.add('opacity-100');
                renderOnionSkin(state.currentFrameIndex);
            }
        }

        // --- Tweening ---
        window.toggleTweenModal = () => {
            saveCurrentFrameToMemory();
            const modal = document.getElementById('tween-modal');
            const content = document.getElementById('tween-content');
            if (state.currentFrameIndex >= state.frames.length - 1) { alert("Select a frame that has a subsequent frame to generate tweens."); return; }
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden'); void modal.offsetWidth; modal.classList.remove('opacity-0');
                content.classList.remove('scale-95'); content.classList.add('scale-100');
            } else {
                modal.classList.add('opacity-0'); content.classList.remove('scale-100'); content.classList.add('scale-95');
                setTimeout(() => modal.classList.add('hidden'), 200);
            }
        };

        function getLayerCentroid(img) {
            const tC = document.createElement('canvas');
            tC.width = state.width; tC.height = state.height;
            const tX = tC.getContext('2d');
            tX.drawImage(img, 0, 0);
            const data = tX.getImageData(0, 0, state.width, state.height).data;
            let sumX = 0, sumY = 0, count = 0;
            for(let i = 0; i < data.length; i += 16) {
                if(data[i+3] > 20) {
                    const pIdx = i / 4;
                    const x = pIdx % state.width; const y = Math.floor(pIdx / state.width);
                    sumX += x; sumY += y; count++;
                }
            }
            if(count === 0) return null; 
            return { x: sumX / count, y: sumY / count };
        }

        function smoothstep(t) { return t * t * (3 - 2 * t); }

        window.generateTweens = async () => {
            toggleTweenModal(); 
            showLoading("Generating Frames", "Calculating motion paths...");
            await new Promise(r => setTimeout(r, 50));
            const frameCount = parseInt(document.getElementById('tween-slider').value);
            const startIdx = state.currentFrameIndex;
            const endIdx = startIdx + 1;
            try {
                const imgStart = await new Promise(resolve => { const img = new Image(); img.onload = () => resolve(img); img.src = state.frames[startIdx]; });
                const imgEnd = await new Promise(resolve => { const img = new Image(); img.onload = () => resolve(img); img.src = state.frames[endIdx]; });
                const startCentroid = getLayerCentroid(imgStart);
                const endCentroid = getLayerCentroid(imgEnd);
                const newFrames = [];
                const tempCanvas = document.createElement('canvas'); tempCanvas.width = state.width; tempCanvas.height = state.height;
                const tempCtx = tempCanvas.getContext('2d');
                
                for(let i = 1; i <= frameCount; i++) {
                    const t = i / (frameCount + 1); const easeT = smoothstep(t); 
                    tempCtx.clearRect(0, 0, state.width, state.height);
                    let startOffsetX = 0, startOffsetY = 0, endOffsetX = 0, endOffsetY = 0;
                    if (startCentroid && endCentroid) {
                        const totalDx = endCentroid.x - startCentroid.x; const totalDy = endCentroid.y - startCentroid.y;
                        startOffsetX = totalDx * easeT; startOffsetY = totalDy * easeT;
                        endOffsetX = (easeT - 1) * totalDx; endOffsetY = (easeT - 1) * totalDy;
                    }
                    tempCtx.save(); tempCtx.globalAlpha = 1 - easeT; tempCtx.translate(startOffsetX, startOffsetY);
                    tempCtx.drawImage(imgStart, 0, 0); tempCtx.restore();
                    tempCtx.save(); tempCtx.globalAlpha = easeT; tempCtx.translate(endOffsetX, endOffsetY);
                    tempCtx.drawImage(imgEnd, 0, 0); tempCtx.restore();
                    newFrames.push(tempCanvas.toDataURL());
                }
                state.frames.splice(startIdx + 1, 0, ...newFrames);
                state.currentFrameIndex = startIdx + frameCount + 1;
                hideLoading(); renderTimeline(); loadFrame(state.currentFrameIndex); updateFrameCount();
            } catch (e) { console.error(e); hideLoading(); alert("Error generating tweens."); }
        };

        // --- Export ---
        window.toggleExportModal = () => {
            const modal = document.getElementById('export-modal');
            const content = document.getElementById('export-content');
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden'); void modal.offsetWidth; modal.classList.remove('opacity-0');
                content.classList.remove('scale-95'); content.classList.add('scale-100');
                if(state.isPlaying) stopAnimation();
            } else {
                modal.classList.add('opacity-0'); content.classList.remove('scale-100'); content.classList.add('scale-95');
                setTimeout(() => modal.classList.add('hidden'), 200);
            }
        };

        function showLoading(text, subtext = "Please wait") {
            const overlay = document.getElementById('loading-overlay');
            document.getElementById('loading-text').innerText = text;
            document.getElementById('loading-subtext').innerText = subtext;
            overlay.classList.remove('hidden');
        }
        function hideLoading() { document.getElementById('loading-overlay').classList.add('hidden'); }

        window.exportGIF = async () => {
            if (state.frames.length === 0) return;
            showLoading("Initializing...", "Fetching worker script...");
            try {
                const workerResponse = await fetch('https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js');
                if (!workerResponse.ok) throw new Error("Failed to fetch worker");
                const workerBlob = await workerResponse.blob();
                const workerUrl = URL.createObjectURL(workerBlob);
                const gif = new GIF({ workers: 2, quality: 10, width: state.width, height: state.height, workerScript: workerUrl });
                const images = await preloadImages(state.frames);
                const delay = 1000 / state.fps;
                const tempCanvas = document.createElement('canvas'); tempCanvas.width = state.width; tempCanvas.height = state.height;
                const tempCtx = tempCanvas.getContext('2d');
                images.forEach((img, index) => {
                    showLoading("Processing Frames", `Frame ${index + 1} of ${images.length}`);
                    tempCtx.fillStyle = '#ffffff'; tempCtx.fillRect(0, 0, state.width, state.height); tempCtx.drawImage(img, 0, 0);
                    gif.addFrame(tempCtx, { copy: true, delay: delay });
                });
                showLoading("Rendering GIF", "This might take a moment...");
                gif.on('finished', (blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a'); a.href = url; a.download = `animation-${Date.now()}.gif`; a.click();
                    URL.revokeObjectURL(url); URL.revokeObjectURL(workerUrl); hideLoading();
                });
                gif.render();
            } catch (e) { console.error(e); alert("Failed to generate GIF. Error: " + e.message); hideLoading(); }
        };

        window.exportVideo = async () => {
             if (state.frames.length === 0) return;
             showLoading("Recording Video", "Initializing recorder...");
             await new Promise(r => setTimeout(r, 100));
             const streamCanvas = document.createElement('canvas'); streamCanvas.width = state.width; streamCanvas.height = state.height;
             const streamCtx = streamCanvas.getContext('2d');
             const images = await preloadImages(state.frames);
             const mimeType = MediaRecorder.isTypeSupported('video/mp4') ? 'video/mp4' : 'video/webm'; 
             const stream = streamCanvas.captureStream(state.fps);
             const recorder = new MediaRecorder(stream, { mimeType: mimeType, videoBitsPerSecond: 2500000 });
             const chunks = [];
             recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
             recorder.onstop = () => {
                 const blob = new Blob(chunks, { type: mimeType }); const url = URL.createObjectURL(blob);
                 const a = document.createElement('a'); a.href = url; a.download = `animation-${Date.now()}.mp4`; a.click();
                 URL.revokeObjectURL(url); hideLoading();
             };
             recorder.start();
             const delay = 1000 / state.fps;
             for (let i = 0; i < images.length; i++) {
                 showLoading("Recording Video", `Frame ${i + 1} of ${images.length}`);
                 streamCtx.clearRect(0, 0, state.width, state.height);
                 streamCtx.fillStyle = "#ffffff"; streamCtx.fillRect(0, 0, state.width, state.height);
                 streamCtx.drawImage(images[i], 0, 0);
                 await new Promise(r => setTimeout(r, delay));
             }
             await new Promise(r => setTimeout(r, 100));
             recorder.stop();
        };

        function updateUI() { updateFrameCount(); }
        init();
    
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
      

<header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-900/50 backdrop-blur-sm z-50">
<div className="flex items-center gap-4">
<div className="font-semibold text-lg tracking-tight text-white flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:aperture" data-width="20" strokeWidth="1.5"></span>
                ANIMATE
            </div>
<div className="h-4 w-px bg-zinc-800 mx-2"></div>

<div className="flex items-center bg-zinc-900 rounded-md border border-zinc-800 p-0.5">
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors" onclick="adjustZoom(-0.1)" title="Zoom Out">
<span className="iconify" data-icon="lucide:minus" data-width="14"></span>
</button>
<span className="text-[10px] font-mono w-10 text-center text-zinc-400 font-medium" id="zoom-display">100%</span>
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors" onclick="adjustZoom(0.1)" title="Zoom In">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>

<button className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors ml-2" id="grid-btn" onclick="toggleGrid()" title="Toggle Grid (G)">
<span className="iconify" data-icon="lucide:grid-3x3" data-width="18"></span>
</button>
</div>
<div className="flex items-center gap-3">

<button className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-500 hover:text-white transition-colors mr-1" onclick="toggleShortcuts()" title="Keyboard Shortcuts">
<span className="iconify" data-icon="lucide:keyboard" data-width="18"></span>
</button>
<div className="h-4 w-px bg-zinc-800 mx-1"></div>
<div className="flex items-center gap-1 mr-2 border-r border-zinc-800 pr-4">
<button className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed" id="btn-undo" onclick="undo()" title="Undo (Ctrl+Z)">
<span className="iconify" data-icon="lucide:undo-2" data-width="16"></span>
</button>
<button className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed" id="btn-redo" onclick="redo()" title="Redo (Ctrl+Y)">
<span className="iconify" data-icon="lucide:redo-2" data-width="16"></span>
</button>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors text-xs font-medium group relative" id="onion-toggle-btn" title="Onion Skin (O)">
<span className="iconify text-zinc-400 group-hover:text-white transition-colors" data-icon="lucide:layers" data-width="14"></span>
<span>Onion</span>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600 ml-1 transition-colors" id="onion-indicator"></div>
</button>
<button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-white text-zinc-950 hover:bg-zinc-200 transition-colors text-xs font-semibold shadow-lg shadow-white/5 min-w-[80px] justify-center" id="play-btn" onclick="playAnimation()" title="Play/Stop (Space)">
<span className="iconify" data-icon="lucide:play" data-width="14"></span>
                Play
            </button>
<button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition-colors text-xs font-semibold shadow-lg shadow-indigo-500/10 ml-2" onclick="toggleExportModal()">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                Export
            </button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-16 border-r border-zinc-800 flex flex-col items-center bg-zinc-900/30 z-40 h-full overflow-hidden">

<div className="flex-shrink-0 w-full px-2 py-4 flex flex-col gap-2 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800/50 z-20 shadow-sm overflow-y-auto max-h-[60vh] sidebar-scroll">
<button className="tool-btn p-2 rounded-lg bg-zinc-800 text-white shadow-sm ring-1 ring-white/10 transition-all w-full flex justify-center group relative" id="tool-pen" onclick="setTool('pen')" title="Pen (B)">
<span className="iconify" data-icon="lucide:pen-tool" data-width="18"></span>
</button>
<button className="tool-btn p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-all w-full flex justify-center group relative" id="tool-pencil" onclick="setTool('pencil')" title="Pencil (N)">
<span className="iconify" data-icon="lucide:pencil" data-width="18"></span>
</button>
<button className="tool-btn p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-all w-full flex justify-center group relative" id="tool-marker" onclick="setTool('marker')" title="Marker (M)">
<span className="iconify" data-icon="lucide:highlighter" data-width="18"></span>
</button>
<div className="h-px bg-zinc-800 w-full my-0.5 opacity-50"></div>
<button className="tool-btn p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-all w-full flex justify-center group relative" id="tool-line" onclick="setTool('line')" title="Line Tool (L)">
<span className="iconify" data-icon="lucide:slash" data-width="18"></span>
</button>

<button className="tool-btn p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-all w-full flex justify-center group relative" id="tool-rect" onclick="setTool('rect')" title="Rectangle (R)">
<span className="iconify" data-icon="lucide:square" data-width="18"></span>
</button>
<button className="tool-btn p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-all w-full flex justify-center group relative" id="tool-circle" onclick="setTool('circle')" title="Circle (C)">
<span className="iconify" data-icon="lucide:circle" data-width="18"></span>
</button>
<div className="h-px bg-zinc-800 w-full my-0.5 opacity-50"></div>
<button className="tool-btn p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-all w-full flex justify-center group relative" id="tool-bucket" onclick="setTool('bucket')" title="Bucket Fill (F)">
<span className="iconify" data-icon="lucide:paint-bucket" data-width="18"></span>
</button>
<button className="tool-btn p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-all w-full flex justify-center relative" id="tool-eraser" onclick="setTool('eraser')" title="Eraser (E)">
<span className="iconify" data-icon="lucide:eraser" data-width="18"></span>
</button>
</div>

<div className="flex-1 w-full overflow-y-auto sidebar-scroll py-3 px-2">
<div className="flex flex-col gap-3 items-center w-full min-h-min" id="color-palette">
<div className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold mb-1">Color</div>
<div className="w-6 h-6 rounded-full bg-black border border-zinc-700 cursor-pointer hover:scale-110 transition-transform ring-2 ring-indigo-500 ring-offset-2 ring-offset-zinc-900 color-btn shadow-md shrink-0" data-color="#000000" onclick="setColor('#000000')"></div>
<div className="w-6 h-6 rounded-full bg-white border border-zinc-700 cursor-pointer hover:scale-110 transition-transform color-btn shadow-md shrink-0" data-color="#ffffff" onclick="setColor('#ffffff')"></div>
<div className="w-6 h-6 rounded-full bg-red-500 border border-zinc-700 cursor-pointer hover:scale-110 transition-transform color-btn shadow-md shrink-0" data-color="#ef4444" onclick="setColor('#ef4444')"></div>
<div className="w-6 h-6 rounded-full bg-blue-500 border border-zinc-700 cursor-pointer hover:scale-110 transition-transform color-btn shadow-md shrink-0" data-color="#3b82f6" onclick="setColor('#3b82f6')"></div>
<div className="w-6 h-6 rounded-full bg-green-500 border border-zinc-700 cursor-pointer hover:scale-110 transition-transform color-btn shadow-md shrink-0" data-color="#22c55e" onclick="setColor('#22c55e')"></div>
<div className="w-6 h-6 rounded-full bg-yellow-500 border border-zinc-700 cursor-pointer hover:scale-110 transition-transform color-btn shadow-md shrink-0" data-color="#eab308" onclick="setColor('#eab308')"></div>
<div className="w-6 h-6 rounded-full bg-purple-500 border border-zinc-700 cursor-pointer hover:scale-110 transition-transform color-btn shadow-md shrink-0" data-color="#a855f7" onclick="setColor('#a855f7')"></div>
<div className="relative group mt-1 shrink-0" id="custom-color-wrapper">
<input className="fixed top-0 left-0 opacity-0 pointer-events-none" id="custom-color-input" onchange="handleCustomColor(this.value)" type="color"/>
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 border border-zinc-700 cursor-pointer group-hover:scale-110 transition-transform flex items-center justify-center shadow-md hover:shadow-indigo-500/20" onclick="triggerColorPicker()" title="Add Custom Color">
<span className="iconify text-white/90 drop-shadow-sm" data-icon="lucide:plus" data-width="12"></span>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-full px-2 py-4 bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-800/50 z-20 flex flex-col items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
<div className="flex flex-col items-center gap-1 w-full">
<span className="text-[10px] uppercase tracking-wider text-zinc-600 font-semibold">Size</span>
<input className="w-full h-20" id="size-slider" max="50" min="1" oninput="setBrushSize(this.value)" style={{writingMode: 'bt-lr', WebkitAppearance: 'slider-vertical'}} type="range" value="5"/>
</div>
</div>
</aside>

<section className="flex-1 relative bg-zinc-950 flex items-center justify-center overflow-auto p-0 canvas-bg" id="workspace">

<div className="relative shadow-2xl shadow-black transition-transform duration-100 ease-linear origin-center" id="canvas-wrapper" style={{transform: 'scale(1)', width: '800px', height: '600px'}}>

<div className="absolute inset-0 bg-white" style={{zIndex: '0'}}></div>

<div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-200 grid-overlay border border-zinc-200" id="grid-overlay" style={{zIndex: '5'}}></div>

<canvas className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-150" height="600" id="onion-canvas" style={{zIndex: '1', mixBlendMode: 'multiply'}} width="800"></canvas>

<canvas className="relative cursor-crosshair touch-none" height="600" id="draw-canvas" style={{zIndex: '2'}} width="800"></canvas>
</div>

<div className="absolute bottom-6 right-6 px-3 py-1.5 bg-zinc-900/80 backdrop-blur text-white text-xs font-mono rounded-md border border-zinc-800 pointer-events-none opacity-0 transition-opacity" id="zoom-toast">
                100%
            </div>
</section>
</main>

<footer className="h-48 border-t border-zinc-800 bg-zinc-900/80 flex flex-col z-50">

<div className="h-10 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-900">
<div className="flex items-center gap-4">
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-500 font-medium">FPS</span>
<div className="flex items-center gap-2 group">
<input className="w-20 accent-indigo-500 cursor-pointer" id="fps-slider" max="30" min="1" type="range" value="12"/>
<span className="text-xs font-mono text-zinc-300 w-5 text-right font-medium" id="fps-display">12</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-red-400 transition-colors mr-1 group" onclick="clearFrame()" title="Clear Canvas (Del)">
<span className="iconify" data-icon="lucide:eraser" data-width="14"></span>
<span className="text-xs font-medium">Clear</span>
</button>
<div className="h-4 w-px bg-zinc-700 mx-1"></div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-indigo-400 transition-colors mr-1 group" onclick="toggleTweenModal()" title="Generate In-betweens (Tweens)">
<span className="iconify group-hover:animate-pulse" data-icon="lucide:sparkles" data-width="14"></span>
<span className="text-xs font-medium">Tween</span>
</button>
<div className="h-4 w-px bg-zinc-700 mx-1"></div>
<button className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" onclick="duplicateFrame()" title="Duplicate Frame (D)">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</button>
<button className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-red-400 transition-colors" onclick="deleteFrame()" title="Delete Frame (Backspace)">
<span className="iconify" data-icon="lucide:trash-2" data-width="16"></span>
</button>
<div className="h-4 w-px bg-zinc-700 mx-1"></div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-colors border border-zinc-700" onclick="addFrame()" title="New Frame (N)">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                    New Frame
                </button>
</div>
</div>

<div className="flex-1 overflow-x-auto overflow-y-hidden p-4">
<div className="flex gap-3 h-full items-center min-w-max px-2" id="frames-container">

</div>
</div>
</footer>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] hidden flex items-center justify-center transition-opacity opacity-0" id="shortcuts-modal" onclick="toggleShortcuts()">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-6 w-[400px] transform scale-95 transition-transform" onclick="event.stopPropagation()">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:keyboard" data-width="20"></span>
<h3 className="text-lg font-semibold text-white tracking-tight">Keyboard Shortcuts</h3>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="toggleShortcuts()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
<div className="flex justify-between text-zinc-400"><span>Play / Stop</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">Space</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Undo</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">Ctrl+Z</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Redo</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">Ctrl+Y</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Toggle Onion</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">O</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Prev Frame</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">←</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Next Frame</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">→</kbd></div>
<div className="col-span-2 h-px bg-zinc-800 my-1"></div>
<div className="flex justify-between text-zinc-400"><span>Pen</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">B</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Eraser</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">E</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Shapes</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">R / C</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Line Tool</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">L</kbd></div>
<div className="flex justify-between text-zinc-400"><span>Toggle Grid</span> <kbd className="font-mono text-zinc-200 bg-zinc-800 px-1.5 rounded">G</kbd></div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] hidden flex items-center justify-center transition-opacity opacity-0" id="export-modal">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-6 w-96 transform scale-95 transition-transform" id="export-content">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-white tracking-tight">Export Animation</h3>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="toggleExportModal()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="space-y-4">
<button className="w-full flex items-center justify-between p-4 rounded-lg border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-600 transition-all group" onclick="exportGIF()">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
<span className="iconify" data-icon="lucide:image" data-width="20"></span>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white">Export as GIF</div>
<div className="text-xs text-zinc-500">Looping animated image</div>
</div>
</div>
<span className="iconify text-zinc-600 group-hover:text-zinc-400" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-lg border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-600 transition-all group" onclick="exportVideo()">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 group-hover:text-pink-300 transition-colors">
<span className="iconify" data-icon="lucide:video" data-width="20"></span>
</div>
<div className="text-left">
<div className="text-sm font-medium text-white">Export as Video</div>
<div className="text-xs text-zinc-500">MP4 video format</div>
</div>
</div>
<span className="iconify text-zinc-600 group-hover:text-zinc-400" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
<div className="mt-4 text-xs font-medium text-center text-zinc-500 h-4" id="export-status"></div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] hidden flex items-center justify-center transition-opacity opacity-0" id="tween-modal">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl p-6 w-80 transform scale-95 transition-transform" id="tween-content">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2 text-white">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-width="18"></span>
<h3 className="text-md font-semibold tracking-tight">Smart Tween</h3>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="toggleTweenModal()">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</button>
</div>
<div className="space-y-6">
<div className="text-xs text-zinc-400 leading-relaxed">
                    Generates smooth motion frames between drawings. Uses <span className="text-zinc-300 font-medium">centroid interpolation</span> to simulate movement rather than just fading.
                </div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium text-zinc-300">
<span>Frames to Insert</span>
<span className="font-mono text-indigo-400" id="tween-count-display">3</span>
</div>
<input className="w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-indigo-500" id="tween-slider" max="20" min="1" type="range" value="5"/>
<div className="flex justify-between text-[10px] text-zinc-600 font-medium px-0.5">
<span>1</span>
<span>10</span>
<span>20</span>
</div>
</div>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-all text-xs font-semibold shadow-lg shadow-indigo-500/20 active:scale-95 flex items-center justify-center gap-2" onclick="generateTweens()">
<span className="iconify" data-icon="lucide:wand-2" data-width="14"></span>
                    Generate Frames
                </button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-[70] hidden flex flex-col items-center justify-center" id="loading-overlay">
<div className="w-12 h-12 border-4 border-zinc-800 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
<div className="text-white font-medium tracking-tight" id="loading-text">Rendering...</div>
<div className="text-zinc-500 text-sm mt-1" id="loading-subtext">Please wait</div>
</div>


    </>
  );
}
