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



        let currentTool = 'pen', inkColor = '#ffffff', isDrawing = false;
        let pagesData = JSON.parse(localStorage.getItem('pro_diary_v2')) || [""];
        let undoStack = [];
        let startX, startY, tempCanvas;

        const colors = ['#ffffff', '#ffeb3b', '#ff9800', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#00bcd4', '#4caf50', '#8bc34a', '#1a1a1a'];

        function init() {
            const spectrum = document.getElementById('spectrum');
            colors.forEach(c => {
                const node = document.createElement('div');
                node.className = 'color-node cursor-pointer';
                node.style.background = c;
                node.onclick = () => {
                    inkColor = c;
                    document.querySelectorAll('.color-node').forEach(n => n.classList.remove('active'));
                    node.classList.add('active');
                };
                if(c === '#ffffff') node.classList.add('active');
                spectrum.appendChild(node);
            });
            renderBook();
            window.addEventListener('resize', renderBook);
        }

        function toggleTheme() {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            document.getElementById('themeBtn').innerText = isLight ? "Onyx Mode" : "Ivory Mode";
            renderBook();
        }

        function setTool(t) {
            currentTool = t;
            document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
            document.getElementById(t + 'Btn')?.classList.add('active');
        }

        function toggleStickers() {
            const menu = document.getElementById('stickerMenu');
            menu.style.display = menu.style.display === 'grid' ? 'none' : 'grid';
        }

        function dropSticker(emoji) {
            const currentIdx = document.querySelectorAll('.page.turned').length;
            const canvas = document.getElementById(`canvas-${currentIdx}`);
            const ctx = canvas.getContext('2d');
            ctx.font = "50px serif";
            ctx.textAlign = "center";
            ctx.fillText(emoji, canvas.width/2, canvas.height/2);
            saveState(currentIdx, canvas.toDataURL());
            toggleStickers();
        }

        function setupCanvas(cvs, data, idx) {
            const ctx = cvs.getContext('2d');
            const rect = cvs.parentElement.getBoundingClientRect();
            
            // Set internal resolution to match display size
            cvs.width = rect.width;
            cvs.height = rect.height;

            if (data && data !== "") { 
                const img = new Image(); 
                img.onload = () => ctx.drawImage(img, 0, 0, cvs.width, cvs.height); 
                img.src = data; 
            }

            const getPos = (e) => {
                const r = cvs.getBoundingClientRect();
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                return { x: clientX - r.left, y: clientY - r.top };
            };

            const start = (e) => {
                isDrawing = true;
                const pos = getPos(e);
                startX = pos.x; startY = pos.y;
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                tempCanvas = cvs.toDataURL();
            };

            const move = (e) => {
                if (!isDrawing) return;
                const pos = getPos(e);
                const size = document.getElementById('sizeSlider').value;
                
                ctx.lineWidth = size;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                
                if (['pen', 'highlighter', 'eraser'].includes(currentTool)) {
                    ctx.globalAlpha = currentTool === 'highlighter' ? 0.3 : 1.0;
                    ctx.strokeStyle = currentTool === 'eraser' ? getComputedStyle(document.body).getPropertyValue('--p-bg') : inkColor;
                    if(currentTool === 'eraser') ctx.lineWidth = 40;
                    ctx.lineTo(pos.x, pos.y);
                    ctx.stroke();
                } else if(currentTool === 'rect') {
                    const img = new Image(); img.src = tempCanvas;
                    ctx.clearRect(0,0,cvs.width,cvs.height); 
                    ctx.drawImage(img,0,0);
                    ctx.globalAlpha = 1.0; ctx.strokeStyle = inkColor; 
                    ctx.strokeRect(startX, startY, pos.x-startX, pos.y-startY);
                }
            };

            const end = () => { if(isDrawing) { isDrawing = false; saveState(idx, cvs.toDataURL()); }};

            cvs.addEventListener('mousedown', start);
            window.addEventListener('mousemove', move);
            window.addEventListener('mouseup', end);
            cvs.addEventListener('touchstart', (e) => { start(e); e.preventDefault(); }, {passive: false});
            window.addEventListener('touchmove', (e) => { if(isDrawing) move(e); e.preventDefault(); }, {passive: false});
            window.addEventListener('touchend', end);
        }

        function saveState(idx, dataUrl) {
            pagesData[idx] = dataUrl;
            if(!undoStack[idx]) undoStack[idx] = [];
            undoStack[idx].push(dataUrl);
            if(undoStack[idx].length > 20) undoStack[idx].shift();
            localStorage.setItem('pro_diary_v2', JSON.stringify(pagesData));
        }

        function undo() {
            const currentIdx = document.querySelectorAll('.page.turned').length;
            if (undoStack[currentIdx]?.length > 1) {
                undoStack[currentIdx].pop();
                const prevState = undoStack[currentIdx][undoStack[currentIdx].length - 1];
                const canvas = document.getElementById(`canvas-${currentIdx}`);
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0,0,canvas.width,canvas.height);
                const img = new Image();
                img.onload = () => ctx.drawImage(img, 0, 0);
                img.src = prevState;
                pagesData[currentIdx] = prevState;
                localStorage.setItem('pro_diary_v2', JSON.stringify(pagesData));
            }
        }

        function exportCurrentPage() {
            const currentIdx = document.querySelectorAll('.page.turned').length;
            const canvas = document.getElementById(`canvas-${currentIdx}`);
            const temp = document.createElement('canvas');
            const tCtx = temp.getContext('2d');
            temp.width = canvas.width; temp.height = canvas.height;
            // Draw background color first
            tCtx.fillStyle = getComputedStyle(document.body).getPropertyValue('--p-bg');
            tCtx.fillRect(0,0,temp.width,temp.height);
            tCtx.drawImage(canvas, 0, 0);
            
            const link = document.createElement('a');
            link.download = `Diary_Page_${currentIdx + 1}_${Date.now()}.png`;
            link.href = temp.toDataURL('image/png');
            link.click();
        }

        function renderBook() {
            const container = document.getElementById('book');
            container.innerHTML = `
                <button onclick="prevPage()" class="nav-btn left-4"><i class="fas fa-chevron-left text-xs"></i></button>
                <button onclick="nextPage()" class="nav-btn right-4"><i class="fas fa-chevron-right text-xs"></i></button>
            `;
            pagesData.forEach((data, i) => {
                const div = document.createElement('div');
                div.className = 'page';
                div.style.zIndex = pagesData.length - i;
                const cvs = document.createElement('canvas');
                cvs.id = `canvas-${i}`;
                div.appendChild(cvs);
                container.appendChild(div);
                if(!undoStack[i]) undoStack[i] = [data || ""];
                setupCanvas(cvs, data, i);
            });
            updateCounter();
        }

        function updateCounter() {
            const current = document.querySelectorAll('.page.turned').length + 1;
            document.getElementById('pageCounter').innerText = `Page ${current} / ${pagesData.length}`;
        }

        function nextPage() { 
            const p = document.querySelectorAll('.page:not(.turned)'); 
            if (p.length > 1) { 
                p[0].classList.add('turned'); 
                setTimeout(updateCounter, 300);
            } 
        }

        function prevPage() { 
            const t = document.querySelectorAll('.page.turned'); 
            if (t.length > 0) { 
                t[t.length - 1].classList.remove('turned'); 
                setTimeout(updateCounter, 300);
            } 
        }

        function addNewPage() { 
            pagesData.push(""); 
            renderBook(); 
            // Smoothly move to the new page
            const turnInterval = setInterval(() => {
                const p = document.querySelectorAll('.page:not(.turned)');
                if(p.length > 1) nextPage();
                else clearInterval(turnInterval);
            }, 100);
        }

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
      
<header className="p-6 flex justify-between items-center z-50">
<button className="text-[11px] font-bold uppercase bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-md" id="themeBtn" onclick="toggleTheme()">Ivory Mode</button>
<div className="flex gap-3">
<button className="text-[11px] bg-white/10 px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider" onclick="addNewPage()">New Page</button>
<button className="bg-green-600 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20" onclick="exportCurrentPage()"><i className="fas fa-download"></i></button>
</div>
</header>
<div id="book">
<button className="nav-btn left-4" onclick="prevPage()"><i className="fas fa-chevron-left text-xs"></i></button>
<button className="nav-btn right-4" onclick="nextPage()"><i className="fas fa-chevron-right text-xs"></i></button>
</div>
<div id="stickerMenu">
<span className="cursor-pointer active:scale-125 transition" onclick="dropSticker('✨')">✨</span>
<span className="cursor-pointer active:scale-125 transition" onclick="dropSticker('🌙')">🌙</span>
<span className="cursor-pointer active:scale-125 transition" onclick="dropSticker('💜')">💜</span>
<span className="cursor-pointer active:scale-125 transition" onclick="dropSticker('🌸')">🌸</span>
<span className="cursor-pointer active:scale-125 transition" onclick="dropSticker('🦋')">🦋</span>
<span className="cursor-pointer active:scale-125 transition" onclick="dropSticker('🍃')">🍃</span>
<span className="cursor-pointer active:scale-125 transition" onclick="dropSticker('🧸')">🧸</span>
<span className="cursor-pointer active:scale-125 transition" onclick="dropSticker('☁️')">☁️</span>
</div>
<div className="toolbar">
<div className="max-w-md mx-auto flex flex-col gap-5">
<div className="flex items-center justify-between px-2">
<div className="flex items-center gap-4 flex-1">
<i className="fas fa-sliders-h text-xs opacity-40"></i>
<input className="w-full accent-[#9168b7]" id="sizeSlider" max="50" min="1" type="range" value="4"/>
</div>
<div className="flex gap-5 ml-6">
<button className="text-[10px] opacity-70 font-black uppercase tracking-widest" onclick="toggleStickers()">Stickers</button>
<button className="text-[10px] text-purple-400 font-black uppercase tracking-widest" onclick="undo()">Undo</button>
</div>
</div>
<div className="palette-scroll" id="spectrum"></div>
<div className="flex justify-between items-center bg-white/5 p-2 rounded-2xl">
<div className="flex gap-2">
<button className="tool-btn active" id="penBtn" onclick="setTool('pen')"><i className="fas fa-feather-alt"></i></button>
<button className="tool-btn" id="highlighterBtn" onclick="setTool('highlighter')"><i className="fas fa-highlighter"></i></button>
<button className="tool-btn" id="eraserBtn" onclick="setTool('eraser')"><i className="fas fa-eraser"></i></button>
<button className="tool-btn" id="rectBtn" onclick="setTool('rect')"><i className="far fa-square"></i></button>
</div>
<div className="flex gap-2 border-l border-white/10 pl-2">
<button className="tool-btn active:bg-white/20" onclick="prevPage()"><i className="fas fa-arrow-left"></i></button>
<button className="tool-btn active:bg-white/20" onclick="nextPage()"><i className="fas fa-arrow-right"></i></button>
</div>
</div>
<p className="text-center text-[9px] font-bold uppercase tracking-[0.4em] opacity-30" id="pageCounter">Page 1 / 1</p>
</div>
</div>


    </>
  );
}
