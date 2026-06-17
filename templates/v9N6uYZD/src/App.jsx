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



    const canvas = document.getElementById('drawing-board');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('color');
    const sizeRange = document.getElementById('size');
    const clearBtn = document.getElementById('clearBtn');
    const fadeOverlay = document.getElementById('fadeOverlay');

    // Tool buttons
    const brushBtn = document.getElementById('tool-brush');
    const bucketBtn = document.getElementById('tool-bucket');
    const vectorBtn = document.getElementById('tool-vector');
    const toolBtns = [brushBtn, bucketBtn, vectorBtn];

    // Vector preview
    const vecPreview = document.getElementById('vecPreview');
    const vctx = vecPreview.getContext('2d');

    // --- State ---
    let tool = "brush"; // brush | bucket | vector
    let mouseDown = false;
    let lastX = 0, lastY = 0;
    let startVec = null;

    // --- Tool selection ---
    function selectTool(t) {
      tool = t;
      toolBtns.forEach(btn=>btn.classList.remove("selected"));
      if (t === "brush") brushBtn.classList.add("selected");
      else if (t === "bucket") bucketBtn.classList.add("selected");
      else if (t === "vector") vectorBtn.classList.add("selected");
      clearVectorPreview();
    }
    brushBtn.onclick = ()=>selectTool("brush");
    bucketBtn.onclick = ()=>selectTool("bucket");
    vectorBtn.onclick = ()=>selectTool("vector");
    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      if (e.target.matches('input,textarea')) return;
      if (e.key==='b'||e.key==='B') selectTool('brush');
      if (e.key==='f'||e.key==='F') selectTool('bucket');
      if (e.key==='l'||e.key==='L') selectTool('vector');
    });

    // --- Drawing logic ---
    function getCoords(e) {
      let rect = canvas.getBoundingClientRect();
      let x, y;
      if (e.touches) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else {
        x = e.offsetX, y = e.offsetY;
      }
      return [x, y];
    }

    // Brush tool
    function brush_down(e) {
      e.preventDefault(); mouseDown = true;
      [lastX, lastY] = getCoords(e);
    }
    function brush_up(e) { mouseDown = false; }
    function brush_draw(e) {
      if (!mouseDown) return;
      e.preventDefault();
      let [x, y] = getCoords(e);
      ctx.strokeStyle = colorPicker.value;
      ctx.lineWidth = sizeRange.value;
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y); ctx.stroke();
      [lastX, lastY] = [x, y];
    }

    // Bucket tool (Flood fill)
    function bucket_click(e) {
      let [x, y] = getCoords(e).map(Math.floor);
      let imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
      let data = imgData.data;
      let width = imgData.width, height = imgData.height;
      let pixelPos = (y*width + x)*4;
      let target = data.slice(pixelPos, pixelPos+4);
      let fill = hexToRgba(colorPicker.value);
      if (colorsMatch(target, fill)) return;

      let queue = [[x, y]];
      let seen = new Uint8Array(width*height);
      const pixelEqual = (px) => target[0]==px[0] && target[1]==px[1] && target[2]==px[2] && target[3]==px[3];
      while(queue.length) {
        let [cx, cy] = queue.pop();
        if (cx<0||cy<0||cx>=width||cy>=height) continue;
        let idx = (cy*width+cx)*4;
        if (seen[cy*width+cx]) continue;
        let current = data.slice(idx,idx+4);
        if (!pixelEqual(current)) continue;
        for (let i=0;i<4;i++) data[idx+i]=fill[i];
        seen[cy*width+cx]=1;
        queue.push([cx+1, cy],[cx-1, cy],[cx, cy+1],[cx, cy-1]);
      }
      ctx.putImageData(imgData,0,0);
    }
    function hexToRgba(hex) {
      let c = hex.substr(1);
      if (c.length==3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
      let rgb = [parseInt(c.substr(0,2),16),parseInt(c.substr(2,2),16),parseInt(c.substr(4,2),16),255];
      return rgb;
    }
    function colorsMatch(a, b) {
      return a[0]===b[0] && a[1]===b[1] && a[2]===b[2] && a[3]===b[3];
    }

    // Vector tool (line)
    function vector_down(e) {
      e.preventDefault(); mouseDown = true;
      startVec = getCoords(e);
      drawVectorPreview(startVec, startVec);
    }
    function vector_move(e) {
      if (!mouseDown) return;
      let cur = getCoords(e);
      drawVectorPreview(startVec, cur);
    }
    function vector_up(e) {
      if (!mouseDown) return;
      e.preventDefault(); mouseDown = false;
      let endVec = getCoords(e);
      ctx.strokeStyle = colorPicker.value;
      ctx.lineWidth = sizeRange.value;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(...startVec);
      ctx.lineTo(...endVec);
      ctx.stroke();
      clearVectorPreview();
    }
    function drawVectorPreview(from, to) {
      vctx.clearRect(0,0,vecPreview.width,vecPreview.height);
      vctx.strokeStyle = colorPicker.value+"cc";
      vctx.lineWidth = sizeRange.value;
      vctx.setLineDash([6,6]); vctx.lineCap="round";
      vctx.beginPath();
      vctx.moveTo(...from); vctx.lineTo(...to); vctx.stroke();
      vctx.setLineDash([]);
    }
    function clearVectorPreview() {
      vctx.clearRect(0,0,vecPreview.width,vecPreview.height);
      mouseDown = false;
      startVec = null;
    }

    // Bind canvas events to active tool
    function remove_all_canvas_events() {
      canvas.onmousedown = canvas.onmousemove = canvas.onmouseup = canvas.onclick = null;
      canvas.ontouchstart = canvas.ontouchmove = canvas.ontouchend = null;
      vecPreview.onmousedown=vecPreview.onmousemove=vecPreview.onmouseup=null;
      vecPreview.ontouchstart=vecPreview.ontouchmove=vecPreview.ontouchend=null;
      clearVectorPreview();
    }
    function add_tool_events() {
      remove_all_canvas_events();
      if (tool==="brush") {
        canvas.onmousedown=brush_down;
        canvas.onmousemove=brush_draw;
        canvas.onmouseup=brush_up;
        canvas.onmouseout=brush_up;
        canvas.ontouchstart=(e)=>{brush_down(e)};
        canvas.ontouchmove=brush_draw;
        canvas.ontouchend=brush_up;
        canvas.ontouchcancel=brush_up;
        canvas.style.cursor="crosshair";
        vecPreview.style.pointerEvents="none";
      } else if (tool==="bucket") {
        canvas.onclick=bucket_click;
        canvas.style.cursor="pointer";
        vecPreview.style.pointerEvents="none";
      } else if (tool==="vector") {
        // Use overlay for dragging so cursor is not interrupted
        vecPreview.onmousedown = vector_down;
        vecPreview.onmousemove = vector_move;
        vecPreview.onmouseup = vector_up;
        vecPreview.style.pointerEvents='auto';
        // Touch for vector
        vecPreview.ontouchstart = (e)=>{vector_down(e)};
        vecPreview.ontouchmove = vector_move;
        vecPreview.ontouchend = vector_up;
        canvas.style.cursor="crosshair";
      }
    }
    // Re-bind tool events on tool change
    selectTool("brush");
    add_tool_events();
    toolBtns.forEach(btn=>btn.addEventListener('click', add_tool_events));
    document.addEventListener('keydown', e=>{
      if(e.key==='b'||e.key==='B' || e.key==='f'||e.key==='F' || e.key==='l'||e.key==='L') add_tool_events();
    });

    // --- Animated Clear ---
    clearBtn.addEventListener('click', () => {
      fadeOverlay.style.opacity = 0;
      fadeOverlay.classList.add('fade-out');
      setTimeout(() => {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        clearVectorPreview();
        fadeOverlay.classList.remove('fade-out');
      }, 550);
    });
    // Fade stops when drawing again
    canvas.addEventListener('mousedown', () => fadeOverlay.classList.remove('fade-out'));
    canvas.addEventListener('touchstart', () => fadeOverlay.classList.remove('fade-out'));
    vecPreview.addEventListener('mousedown', () => fadeOverlay.classList.remove('fade-out'));
    vecPreview.addEventListener('touchstart', () => fadeOverlay.classList.remove('fade-out'));
  
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
      
<div className="container">
<h2>🎨 Drawing App</h2>
<div id="controls">
<span className="toolgroup">
<button className="toolbtn selected" id="tool-brush" title="Brush (B)">✎</button>
<button className="toolbtn" id="tool-bucket" title="Bucket Fill (F)">🪣</button>
<button className="toolbtn" id="tool-vector" title="Vector Line (L)">▭</button>
</span>
<label htmlFor="color">Color</label>
<input id="color" type="color" value="#222222"/>
<label htmlFor="size">Size</label>
<input id="size" max="32" min="2" type="range" value="6"/>
<button id="clearBtn">Clear ✦</button>
</div>
<div className="canvas-container">
<canvas height="400" id="drawing-board" width="600"></canvas>
<canvas height="400" id="vecPreview" width="600"></canvas>
<div id="fadeOverlay"></div>
</div>
</div>
<div className="footer">
    Tools: Brush (✎) / Bucket (🪣) / Vector (▭) — Clear = Fade!<br/>
    Made by ChatGPT.
  </div>


    </>
  );
}
