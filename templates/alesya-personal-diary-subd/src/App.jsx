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



        let currentColor = '#2d3436';
        let isDrawing = false;
        let pagesData = JSON.parse(localStorage.getItem('velvet_sketches')) || [];

        function init() {
            if (pagesData.length === 0) pagesData.push(""); // Start with one blank page
            renderBook();
        }

        function renderBook() {
            const container = document.getElementById('book');
            container.innerHTML = '';

            pagesData.forEach((data, i) => {
                const div = document.createElement('div');
                div.className = 'page';
                div.style.zIndex = pagesData.length - i;
                
                const canvas = document.createElement('canvas');
                canvas.id = `canvas-${i}`;
                div.appendChild(canvas);
                
                // Page Header
                const info = document.createElement('div');
                info.className = 'absolute top-4 left-4 pointer-events-none opacity-20 text-[10px] uppercase font-bold';
                info.innerText = `Page ${i + 1}`;
                div.appendChild(info);

                container.appendChild(div);
                setupCanvas(canvas, data, i);
                setupGestures(div, i);
            });
        }

        function setupCanvas(canvas, savedData, index) {
            const ctx = canvas.getContext('2d');
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            if (savedData) {
                const img = new Image();
                img.onload = () => ctx.drawImage(img, 0, 0);
                img.src = savedData;
            }

            const startDraw = (e) => {
                isDrawing = true;
                ctx.beginPath();
                const pos = getPos(e, canvas);
                ctx.moveTo(pos.x, pos.y);
            };

            const draw = (e) => {
                if (!isDrawing) return;
                const pos = getPos(e, canvas);
                ctx.lineTo(pos.x, pos.y);
                ctx.strokeStyle = currentColor;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                ctx.stroke();
            };

            const endDraw = () => {
                if (!isDrawing) return;
                isDrawing = false;
                savePage(index, canvas.toDataURL());
            };

            canvas.addEventListener('mousedown', startDraw);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', endDraw);
            canvas.addEventListener('touchstart', (e) => { startDraw(e.touches[0]); e.preventDefault(); });
            canvas.addEventListener('touchmove', (e) => { draw(e.touches[0]); e.preventDefault(); });
            canvas.addEventListener('touchend', endDraw);
        }

        function getPos(e, canvas) {
            const rect = canvas.getBoundingClientRect();
            return { x: e.clientX - rect.left, y: e.clientY - rect.top };
        }

        function setupGestures(pageElement, index) {
            const mc = new Hammer(pageElement);
            // We only trigger flip if swiping from the right edge to avoid drawing interference
            mc.on("swipeleft", (e) => {
                if (e.center.x > window.innerWidth * 0.5) pageElement.classList.add('turned');
            });
            mc.on("swiperight", () => {
                const prev = pageElement.previousElementSibling;
                if (prev) prev.classList.remove('turned');
            });
        }

        function setColor(color, el) {
            currentColor = color;
            document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            el.classList.add('active');
        }

        function addNewPage() {
            pagesData.push("");
            saveAll();
            renderBook();
        }

        function savePage(index, data) {
            pagesData[index] = data;
            saveAll();
        }

        function saveAll() {
            localStorage.setItem('velvet_sketches', JSON.stringify(pagesData));
        }

        function clearCanvas() {
            const activePageIdx = [...document.querySelectorAll('.page')].filter(p => !p.classList.contains('turned')).length - 1;
            const canvas = document.getElementById(`canvas-${activePageIdx}`);
            if (canvas) {
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                savePage(activePageIdx, "");
            }
        }

        function resetDiary() {
            if(confirm("Erase your entire book?")) {
                localStorage.removeItem('velvet_sketches');
                pagesData = [""];
                renderBook();
            }
        }

        window.onload = init;
    
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
      
<header className="p-6 flex justify-between items-center relative z-50">
<div>
<h1 className="text-lg font-bold">Velvet Pages</h1>
<p className="text-[9px] uppercase tracking-widest opacity-40">Portrait Sketchbook</p>
</div>
<div className="flex gap-4">
<button className="text-[10px] opacity-40 uppercase" onclick="clearCanvas()">Clear Page</button>
<button className="text-[10px] text-red-400 uppercase" onclick="resetDiary()">Reset Book</button>
</div>
</header>
<div id="book">
</div>
<div className="toolbar">
<div className="max-w-md mx-auto flex flex-col gap-4">
<div className="flex justify-center gap-4 items-center">
<div className="color-dot active" onclick="setColor('#2d3436', this)" style={{background: '#2d3436'}}></div>
<div className="color-dot" onclick="setColor('#9168b7', this)" style={{background: '#9168b7'}}></div>
<div className="color-dot" onclick="setColor('#e74c3c', this)" style={{background: '#e74c3c'}}></div>
<div className="color-dot" onclick="setColor('#2ecc71', this)" style={{background: '#2ecc71'}}></div>
<div className="color-dot" onclick="setColor('#3498db', this)" style={{background: '#3498db'}}></div>
</div>
<div className="flex justify-between items-center px-4">
<p className="text-[10px] opacity-40 uppercase tracking-tighter">Swipe edges to turn</p>
<button className="bg-[#9168b7] px-6 py-2 rounded-full text-xs font-bold shadow-lg" onclick="addNewPage()">Add New Page</button>
</div>
</div>
</div>


    </>
  );
}
