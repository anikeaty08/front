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



window.__WEEK_DAYS__=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function(){
      if (window.__artPlaygroundInit) return;
      window.__artPlaygroundInit = true;

      function init() {
        if (typeof p5 === 'undefined') { setTimeout(init, 200); return; }
        if (typeof lucide !== 'undefined') lucide.createIcons();

        const palettes = {
          ocean:  ['#0d3b66','#1b6ca8','#2a9d8f','#48cae4','#e9f5fb'],
          ember:  ['#370617','#9d0208','#e85d04','#f48c06','#ffd166'],
          forest: ['#1b4332','#2d6a4f','#52b788','#95d5b2','#d8f3dc'],
          dusk:   ['#240046','#7b2d8b','#c77dff','#e0aaff','#ffd6ff'],
        };
        let myP5 = null;

        function getCode(type, seed, pal, complexity) {
          const map = {
            flowfield: `randomSeed(${seed}); noiseSeed(${seed});\n// ${complexity*120} particles follow Perlin noise vectors\nfor (let i = 0; i < ${complexity*120}; i++)\n  particles.push(new Particle());`,
            tree: `randomSeed(${seed});\n// Recursive branching, min length ${Math.max(3,18-complexity)}\nfunction branch(len) {\n  line(0,0,0,-len);\n  translate(0,-len);\n  if (len > ${Math.max(3,18-complexity)}) {\n    push(); rotate(PI/5.5); branch(len*0.68); pop();\n    push(); rotate(-PI/5.5); branch(len*0.68); pop();\n  }\n}`,
            particles: `randomSeed(${seed}); noiseSeed(${seed});\n// ${complexity*90} particles, noise-steered\nclass Particle {\n  constructor() {\n    this.pos = createVector(width/2, height/2);\n    this.vel = p5.Vector.random2D().mult(random(0.5,3.5));\n  }\n}`,
            noise: `randomSeed(${seed}); noiseSeed(${seed});\n// ${2+complexity} stacked noise layers\nfor (let li = 0; li < layers; li++) {\n  beginShape();\n  for (let x = 0; x <= width; x += 2) {\n    let h = base - noise(x*0.004 + li*10) * amplitude;\n    vertex(x, h);\n  }\n  endShape(CLOSE);\n}`,
          };
          return map[type] || '';
        }

        function makeSketch(type, seed, palKey, complexity) {
          const pal = palettes[palKey];
          return function(p) {
            let particles = [], flowfield;
            let cols, rows; const sc = 18;
            p.setup = function() {
              const wrap = document.getElementById('art-canvasWrap');
              const w = wrap.offsetWidth || 400;
              const h = Math.round(w * 0.56);
              const cnv = p.createCanvas(w, h);
              cnv.parent('art-canvasWrap');
              p.randomSeed(seed); p.noiseSeed(seed);
              p.background(8,8,15);
              cols = p.floor(w/sc); rows = p.floor(h/sc);
              flowfield = new Array(cols*rows);
              if (type==='flowfield') {
                p.strokeWeight(0.8);
                for (let i=0;i<complexity*120;i++) particles.push({
                  pos:p.createVector(p.random(p.width),p.random(p.height)),
                  vel:p.createVector(0,0), acc:p.createVector(0,0),
                  col: pal[p.floor(p.random(pal.length))]
                });
              } else if (type==='particles') {
                p.strokeWeight(1.2);
                for (let i=0;i<complexity*90;i++) {
                  const a=p.random(p.TWO_PI), sp=p.random(0.5,3.5), ml=p.random(60,180);
                  particles.push({
                    pos:p.createVector(p.width/2,p.height/2),
                    vel:p.createVector(p.cos(a)*sp,p.sin(a)*sp),
                    acc:p.createVector(0,0), life:ml, maxLife:ml,
                    col: pal[p.floor(p.random(pal.length))]
                  });
                }
              } else if (type==='tree') {
                p.noLoop(); p.push(); p.translate(p.width/2, p.height);
                drawTree(p, 60+complexity*6, 0, pal); p.pop();
              } else if (type==='noise') {
                p.noLoop(); drawNoiseLandscape(p, pal, complexity);
              }
            };
            p.draw = function() {
              if (type==='flowfield') {
                p.background(8,8,15,6);
                let yoff=0;
                for (let y=0;y<rows;y++) {
                  let xoff=0;
                  for (let x=0;x<cols;x++) {
                    const angle = p.noise(xoff,yoff,p.frameCount*0.003)*p.TWO_PI*2;
                    flowfield[x+y*cols] = p5.Vector.fromAngle(angle);
                    xoff+=0.1;
                  }
                  yoff+=0.1;
                }
                for (const pt of particles) {
                  const xi=p.constrain(p.floor(pt.pos.x/sc),0,cols-1);
                  const yi=p.constrain(p.floor(pt.pos.y/sc),0,rows-1);
                  const f=flowfield[xi+yi*cols].copy();
                  pt.acc.add(f); pt.vel.add(pt.acc); pt.vel.limit(3);
                  pt.pos.add(pt.vel); pt.acc.mult(0);
                  if (pt.pos.x<0) pt.pos.x=p.width;
                  if (pt.pos.x>p.width) pt.pos.x=0;
                  if (pt.pos.y<0) pt.pos.y=p.height;
                  if (pt.pos.y>p.height) pt.pos.y=0;
                  p.stroke(pt.col+'bb'); p.point(pt.pos.x,pt.pos.y);
                }
              } else if (type==='particles') {
                p.background(8,8,15,10);
                for (const pt of particles) {
                  pt.life--;
                  if (pt.life<=0) {
                    const a=p.random(p.TWO_PI), sp=p.random(0.5,3.5);
                    pt.pos.set(p.width/2,p.height/2);
                    pt.vel.set(p.cos(a)*sp,p.sin(a)*sp);
                    pt.life=pt.maxLife;
                  }
                  const nx=p.noise(pt.pos.x*0.003,pt.pos.y*0.003,p.frameCount*0.005);
                  const ny=p.noise(pt.pos.y*0.003,pt.pos.x*0.003,p.frameCount*0.005+100);
                  pt.acc.set((nx-0.5)*0.6,(ny-0.5)*0.6);
                  pt.vel.add(pt.acc); pt.vel.limit(4); pt.pos.add(pt.vel);
                  const alpha=Math.round(p.map(pt.life,0,pt.maxLife,0,210));
                  p.stroke(pt.col+alpha.toString(16).padStart(2,'0'));
                  p.point(pt.pos.x,pt.pos.y);
                }
              }
            };
            function drawTree(p,len,depth,pal) {
              if (len<4) return;
              p.stroke(pal[p.constrain(depth,0,pal.length-1)]);
              p.strokeWeight(p.max(0.5,4-depth*0.4));
              p.line(0,0,0,-len); p.translate(0,-len);
              p.push(); p.rotate(p.PI/5.5+p.random(-0.1,0.1)); drawTree(p,len*0.68,depth+1,pal); p.pop();
              p.push(); p.rotate(-p.PI/5.5+p.random(-0.1,0.1)); drawTree(p,len*0.68,depth+1,pal); p.pop();
            }
            function drawNoiseLandscape(p,pal,complexity) {
              p.noStroke();
              const layers=Math.min(pal.length,2+complexity);
              for (let li=0;li<layers;li++) {
                const offset=(li+1)*500;
                const amplitude=p.height*(0.55-li*0.08);
                const base=p.height*(0.55+li*0.07);
                p.fill(pal[li]+'dd');
                p.beginShape(); p.vertex(0,p.height);
                for (let x=0;x<=p.width;x+=2) {
                  const h=base-p.noise(x*0.004+li*10,offset)*amplitude;
                  p.vertex(x,h);
                }
                p.vertex(p.width,p.height); p.endShape(p.CLOSE);
              }
            }
          };
        }

        function launch() {
          if (myP5) { myP5.remove(); myP5=null; }
          document.getElementById('art-canvasWrap').innerHTML='';
          const type=document.getElementById('art-sketchType').value;
          const seed=parseInt(document.getElementById('art-seedInput').value)||42;
          const pal=document.getElementById('art-paletteSelect').value;
          const comp=parseInt(document.getElementById('art-param1').value);
          document.getElementById('art-codeBlock').textContent=getCode(type,seed,pal,comp);
          myP5=new p5(makeSketch(type,seed,pal,comp));
        }

        document.getElementById('art-generateBtn').addEventListener('click',launch);
        document.getElementById('art-randomSeedBtn').addEventListener('click',()=>{
          document.getElementById('art-seedInput').value=Math.floor(Math.random()*99999);
          launch();
        });
        document.getElementById('art-saveBtn').addEventListener('click',()=>{ if (myP5) myP5.save('generative-art.png'); });
        document.getElementById('art-sketchType').addEventListener('change',()=>{
          const labels={flowfield:'Complexity',tree:'Branching',particles:'Complexity',noise:'Layers'};
          document.getElementById('art-param1Label').textContent=labels[document.getElementById('art-sketchType').value]||'Complexity';
          launch();
        });
        document.getElementById('art-param1').addEventListener('input',()=>{
          document.getElementById('art-param1Val').textContent=document.getElementById('art-param1').value;
          launch();
        });
        document.getElementById('art-paletteSelect').addEventListener('change',launch);
        setTimeout(launch, 100);
      }
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
      else init();
    })();
  


      (function(){const state={meals:[],groceries:[],plan:{Monday:'',Tuesday:'',Wednesday:'',Thursday:'',Friday:'',Saturday:'',Sunday:''}};function parseIngredients(meal){const m=meal.match(/\(([^)]+)\)\s*$/);if(!m)return[];return m[1].split(',').map(s=>s.trim().toLowerCase()).filter(Boolean);}function ingredientFreq(){const freq={};state.meals.forEach(meal=>{parseIngredients(meal).forEach(ing=>{freq[ing]=(freq[ing]||0)+1;});});return freq;}function renderMeals(){const ul=document.getElementById('meal-list');if(!ul)return;ul.innerHTML=state.meals.map(m=>`<li class="flex items-center justify-between gap-3 bg-white/[0.02] border border-white/[0.05] rounded-lg px-3 py-2"><span class="text-white/70">${escapeHtml(m)}</span><button class="text-[10px] text-white/40 hover:text-white/70 transition-colors" data-remove-meal="${escapeAttr(m)}">Remove</button></li>`).join('')||'<li class="text-white/40 text-sm">No meals yet.</li>';document.querySelectorAll('[data-remove-meal]').forEach(btn=>btn.onclick=()=>{const val=btn.getAttribute('data-remove-meal');state.meals=state.meals.filter(x=>x!==val);Object.keys(state.plan).forEach(d=>{if(state.plan[d]===val)state.plan[d]='';});renderAll();});}function renderMealSelects(){const meals=state.meals;document.querySelectorAll('select[data-day]').forEach(sel=>{const day=sel.getAttribute('data-day');const current=state.plan[day]||'';sel.innerHTML=['<option value="">— Select a meal —</option>',...meals.map(m=>`<option value="${escapeAttr(m)}">${escapeHtml(m)}</option>`)].join('');sel.value=current;sel.onchange=()=>{state.plan[day]=sel.value;};});}function renderGroceries(){const ul=document.getElementById('grocery-list');if(!ul)return;ul.innerHTML=state.groceries.map((g,idx)=>`<li class="flex items-center justify-between gap-3 bg-white/[0.02] border border-white/[0.05] rounded-lg px-3 py-2"><label class="flex items-center gap-3 cursor-pointer"><input type="checkbox" class="accent-[#50c878]" data-g-idx="${idx}"><span class="text-white/70">${escapeHtml(g)}</span></label><button class="text-[10px] text-white/40 hover:text-white/70 transition-colors" data-remove-g="${idx}">Remove</button></li>`).join('')||'<li class="text-white/40 text-sm">No grocery items yet.</li>';document.querySelectorAll('[data-remove-g]').forEach(btn=>btn.onclick=()=>{const i=parseInt(btn.getAttribute('data-remove-g'),10);state.groceries.splice(i,1);renderGroceries();});}function renderStats(){const freq=ingredientFreq();const weekly=[];const monthly=[];Object.entries(freq).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).forEach(([ing,count])=>{(count>=3?weekly:monthly).push({ing,count});});const w=document.getElementById('weekly-essentials');const m=document.getElementById('monthly-staples');if(w)w.innerHTML=(weekly.length?weekly:[]).map(x=>`<li class="flex items-center justify-between bg-white/[0.02] border border-white/[0.05] rounded-lg px-3 py-2"><span>${escapeHtml(x.ing)}</span><span class="text-[10px] text-white/40">${x.count}</span></li>`).join('')||'<li class="text-white/40 text-sm">None yet.</li>';if(m)m.innerHTML=(monthly.length?monthly:[]).map(x=>`<li class="flex items-center justify-between bg-white/[0.02] border border-white/[0.05] rounded-lg px-3 py-2"><span>${escapeHtml(x.ing)}</span><span class="text-[10px] text-white/40">${x.count}</span></li>`).join('')||'<li class="text-white/40 text-sm">None yet.</li>';}function renderAll(){renderMeals();renderMealSelects();renderGroceries();renderStats();}function addMeal(val){const v=(val||'').trim();if(!v)return;state.meals=[...new Set([v,...state.meals])];renderAll();}function addGrocery(val){const v=(val||'').trim();if(!v)return;state.groceries=[...new Set([v,...state.groceries])];renderGroceries();}function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}function escapeAttr(s){return String(s).replace(/"/g,'&quot;');}function setupTabs(){const links=[...document.querySelectorAll('header nav a')];function show(hash){const h=(hash||'#home').toLowerCase();const map={"#home":"home","#meals":"meals","#groceries":"groceries","#stats":"stats"};Object.values(map).forEach(id=>{const el=document.getElementById(id);if(el)el.style.display=(('#'+id)===h||('#'+id)===('#'+map[h])? 'block':'none');});if(h==='#home'){document.getElementById('home').style.display='block';}links.forEach(a=>{const active=(a.getAttribute('href')||'').toLowerCase()===h;a.classList.toggle('text-white',active);a.classList.toggle('text-white/70',!active);});}links.forEach(a=>a.addEventListener('click',e=>{const href=a.getAttribute('href');if(href&&href.startsWith('#')){e.preventDefault();history.replaceState(null,'',href);show(href);}}));show(location.hash||'#home');}function setupQuickAdd(){const fab=document.getElementById('fab');const panel=document.getElementById('quick-add');const close=document.getElementById('quick-close');const save=document.getElementById('quick-save');const input=document.getElementById('quick-meal');if(!fab||!panel)return;function toggle(on){panel.classList.toggle('hidden',!on);if(on){setTimeout(()=>input&&input.focus(),0);}}fab.onclick=()=>toggle(panel.classList.contains('hidden'));close&& (close.onclick=()=>toggle(false));save&& (save.onclick=()=>{addMeal(input.value);input.value='';toggle(false);});input&&input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addMeal(input.value);input.value='';toggle(false);}});}function setupForms(){const addMealBtn=document.getElementById('add-meal');const mealInput=document.getElementById('meal-input');addMealBtn&&addMealBtn.addEventListener('click',()=>{addMeal(mealInput.value);mealInput.value='';});mealInput&&mealInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addMeal(mealInput.value);mealInput.value='';}});const addG=document.getElementById('add-grocery');const gIn=document.getElementById('grocery-input');addG&&addG.addEventListener('click',()=>{addGrocery(gIn.value);gIn.value='';});gIn&&gIn.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addGrocery(gIn.value);gIn.value='';}});}document.addEventListener('DOMContentLoaded',()=>{setupTabs();setupQuickAdd();setupForms();renderAll();});})();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div aria-hidden="false" className="" id="screensaver-overlay">
<div className="aura-background-component">
<div data-us-project="3YA05lqUmo5Ut8ATn6Qy"></div>
</div>
<div className="screensaver-dim"></div>
</div>

<canvas className="fixed inset-0 z-[-2] pointer-events-none opacity-30" height="745" id="webgl-bg" width="1000"></canvas>
<canvas className="fixed inset-0 pointer-events-none z-[-1] opacity-60" height="745" id="particle-canvas" width="1000"></canvas>

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-white/5 blur-[100px] animate-pulse" style={{animationDuration: '6s'}}></div>
<div className="absolute -top-[10%] -left-[10%] w-[80vw] h-[25vh] bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-[60px] origin-top-left" style={{animation: 'ray-sweep 7s ease-in-out infinite'}}></div>
<div className="absolute -top-[5%] -left-[5%] w-[60vw] h-[12vh] bg-gradient-to-r from-white/15 via-white/5 to-transparent blur-[30px] origin-top-left" style={{animation: 'ray-sweep-2 5s ease-in-out infinite alternate', animationDelay: '1s'}}></div>
<div className="absolute -top-[2%] -left-[2%] w-[40vw] h-[3vh] bg-gradient-to-r from-white/40 via-white/10 to-transparent blur-[15px] origin-top-left" style={{animation: 'core-pulse 3s ease-in-out infinite', mixBlendMode: 'overlay'}}></div>
<div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[40vw] h-[70vh] bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent blur-[80px] origin-top" style={{animation: 'center-beam 6s ease-in-out infinite'}}></div>
</div>
<div className="fixed top-[-10%] right-[10%] w-[60vw] h-[120vh] pointer-events-none z-[-1]" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', transform: 'rotate(-35deg)', filter: 'blur(80px)', transformOrigin: 'top center'}}></div>

<header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl z-50 rounded-full p-[1px]" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)', boxShadow: '0 16px 32px -8px rgba(0,0,0,0.8)'}}>
<div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] backdrop-blur-2xl relative overflow-hidden" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.15), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="flex items-center gap-3 relative z-10">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#333] to-[#111] flex items-center justify-center border border-black" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)'}}>
<iconify-icon className="text-white/90" icon="solar:user-circle-linear" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
</div>
<span className="text-sm font-normal text-white tracking-tighter" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            THEO'S WEEKLY MENU
          </span>
</div>
<nav className="hidden md:flex items-center gap-8 relative z-10">
<a className="text-sm font-light hover:text-white transition-colors text-white" href="#home" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Home
          </a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors" href="#meals" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Go-To Meals
          </a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors" href="#groceries" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Groceries
          </a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors" href="#stats" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Stats
          </a>
</nav>
<div className="flex items-center gap-4 relative z-10">
<div className="relative inline-flex group">
<div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-b from-white/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<button className="relative px-5 py-1.5 rounded-full text-xs font-light text-white bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 3px rgba(0,0,0,0.6), 0 4px 8px -2px rgba(0,0,0,0.6)', textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Quick Add
            </button>
</div>
</div>
</div>
</header>

<main className="container sm:px-12 lg:px-24 min-h-[800px] xl:max-h-[950px] flex flex-col lg:flex-row lg:gap-0 overflow-hidden z-10 h-screen max-h-[1000px] mr-auto ml-auto pt-40 pr-6 pb-20 pl-6 relative gap-x-12 gap-y-12 items-center justify-between" style={{minHeight: 'auto', height: 'auto', maxHeight: 'none'}}>
<div className="lg:w-5/12 flex flex-col lg:pt-0 overflow-y-auto sm:pr-6 z-20 animate-fadeInUp w-full max-h-[85vh] pt-12 pr-2 pb-20 items-start" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(255, 255, 255, 0.15) transparent', maxHeight: 'none', display: 'block'}}>
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.08]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.08)'}}>
<span className="w-1.5 h-1.5 rounded-full bg-[#50c878]" style={{boxShadow: '0 0 8px #50c878'}}></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-light">Meal Planner</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05] mb-4" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
    Theo's Weekly
    <span className="block bg-gradient-to-r from-[#50c878] to-[#7be0a0] bg-clip-text text-transparent">Menu</span>
</h1>
<p className="text-sm text-white/60 font-light leading-relaxed mb-8 max-w-md">
    Holding down the fort. Check this landing page to catch up with what I have planned so far. But first, enjoy the generative code art below.
  </p>

<section className="w-full mb-10 rounded-2xl bg-gradient-to-b from-[#13131e] to-[#0c0c14] border border-[#2a2a3a] overflow-hidden" style={{boxShadow: '0 24px 48px -12px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.04)', fontFamily: '\'Courier New\', monospace'}}>
<div className="px-5 py-3 border-b border-[#2a2a3a] flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#7b7bcc]"></span>
<h2 className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-light">Generative Art Playground</h2>
</div>
<div className="flex gap-1.5">
<span className="w-2 h-2 rounded-full bg-white/10"></span>
<span className="w-2 h-2 rounded-full bg-white/10"></span>
<span className="w-2 h-2 rounded-full bg-white/10"></span>
</div>
</div>
<div className="p-5">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase tracking-[0.15em] text-white/40">Sketch</label>
<div className="relative">
<select className="w-full appearance-none bg-[#0c0c14] border border-[#2a2a3a] text-[#e8e4d9] text-[13px] px-3 py-2 rounded-md focus:outline-none focus:border-[#5a5aaa] cursor-pointer pr-8" id="art-sketchType" style={{fontFamily: '\'Courier New\', monospace'}}>
<option value="flowfield">Flow field</option>
<option value="tree">Recursive tree</option>
<option value="particles">Particle burst</option>
<option value="noise">Noise landscape</option>
</select>
<i className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase tracking-[0.15em] text-white/40">Seed</label>
<input className="text-[13px] focus:outline-none focus:border-[#5a5aaa] text-[#e8e4d9] bg-[#0c0c14] w-full border-[#2a2a3a] border rounded-md pt-2 pr-3 pb-2 pl-3" id="art-seedInput" max="99999" min="0" style={{fontFamily: '\'Courier New\', monospace'}} type="number" value="42"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase tracking-[0.15em] text-white/40">Palette</label>
<div className="relative">
<select className="w-full appearance-none bg-[#0c0c14] border border-[#2a2a3a] text-[#e8e4d9] text-[13px] px-3 py-2 rounded-md focus:outline-none focus:border-[#5a5aaa] cursor-pointer pr-8" id="art-paletteSelect" style={{fontFamily: '\'Courier New\', monospace'}}>
<option value="ocean">Ocean</option>
<option value="ember">Ember</option>
<option value="forest">Forest</option>
<option value="dusk">Dusk</option>
</select>
<i className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] uppercase tracking-[0.15em] text-white/40" id="art-param1Label">Complexity</label>
<div className="flex items-center gap-2.5">
<input className="flex-1" id="art-param1" max="10" min="1" step="1" style={{accentColor: '#7b7bcc'}} type="range" value="5"/>
<span className="text-xs text-white/60 min-w-[18px] text-right" id="art-param1Val">5</span>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2">
<button className="flex-1 min-w-[100px] bg-transparent border border-[#3a3a5a] text-white/70 text-[11px] uppercase tracking-[0.1em] px-3.5 py-2.5 rounded-md hover:bg-[#1e1e30] hover:border-[#7b7bcc] hover:text-white transition-colors" id="art-generateBtn" style={{fontFamily: '\'Courier New\', monospace'}}>Generate</button>
<button className="flex-1 min-w-[100px] bg-transparent border border-[#3a3a5a] text-white/70 text-[11px] uppercase tracking-[0.1em] px-3.5 py-2.5 rounded-md hover:bg-[#1e1e30] hover:border-[#7b7bcc] hover:text-white transition-colors" id="art-randomSeedBtn" style={{fontFamily: '\'Courier New\', monospace'}}>Random seed</button>
<button className="flex-1 min-w-[100px] bg-transparent border border-[#3a3a5a] text-white/70 text-[11px] uppercase tracking-[0.1em] px-3.5 py-2.5 rounded-md hover:bg-[#1e1e30] hover:border-[#7b7bcc] hover:text-white transition-colors" id="art-saveBtn" style={{fontFamily: '\'Courier New\', monospace'}}>Save PNG</button>
</div>
</div>

<div className="w-full border-t border-[#2a2a3a] bg-[#08080f] overflow-hidden" id="art-canvasWrap" style={{lineHeight: '0'}}><canvas className="" height="724" id="defaultCanvas0" style={{width: '646px', height: '362px'}} width="1292"></canvas></div>

<pre className="bg-[#0c0c14] border-t border-[#2a2a3a] p-4 text-[11px] text-[#7b7bcc] overflow-x-auto leading-[1.7] whitespace-pre" id="art-codeBlock" style={{fontFamily: '\'Courier New\', monospace'}}>randomSeed(42); noiseSeed(42);
// 600 particles follow Perlin noise vectors
for (let i = 0; i &lt; 600; i++)
  particles.push(new Particle());</pre>
</section>


<section className="w-full flex flex-col gap-4">
<div className="flex items-center justify-between gap-4">
<div className="">
<h2 className="text-2xl font-light text-white tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>Weekly Planner</h2>
<p className="text-xs text-white/50 font-light mt-1">Choose meals for each day. Meals list is shared across tabs.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 relative overflow-hidden hover:scale-[1.01] transition-transform">
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Monday</div>
<select className="w-full bg-[#0a0a0a] text-white/80 border border-white/[0.06] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#50c878]/40" data-day="Monday"><option value="">— Select a meal —</option></select>
</div>
<div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 relative overflow-hidden hover:scale-[1.01] transition-transform">
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Tuesday</div>
<select className="w-full bg-[#0a0a0a] text-white/80 border border-white/[0.06] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#50c878]/40" data-day="Tuesday"><option value="">— Select a meal —</option></select>
</div>
<div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 relative overflow-hidden hover:scale-[1.01] transition-transform">
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Wednesday</div>
<select className="w-full bg-[#0a0a0a] text-white/80 border border-white/[0.06] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#50c878]/40" data-day="Wednesday"><option value="">— Select a meal —</option></select>
</div>
<div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 relative overflow-hidden hover:scale-[1.01] transition-transform">
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Thursday</div>
<select className="w-full bg-[#0a0a0a] text-white/80 border border-white/[0.06] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#50c878]/40" data-day="Thursday"><option value="">— Select a meal —</option></select>
</div>
<div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 relative overflow-hidden hover:scale-[1.01] transition-transform">
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Friday</div>
<select className="w-full bg-[#0a0a0a] text-white/80 border border-white/[0.06] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#50c878]/40" data-day="Friday"><option value="">— Select a meal —</option></select>
</div>
<div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 relative overflow-hidden hover:scale-[1.01] transition-transform">
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Saturday</div>
<select className="w-full bg-[#0a0a0a] text-white/80 border border-white/[0.06] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#50c878]/40" data-day="Saturday"><option value="">— Select a meal —</option></select>
</div>
<div className="bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.06] rounded-xl p-4 relative overflow-hidden hover:scale-[1.01] transition-transform sm:col-span-2">
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">Sunday</div>
<select className="w-full bg-[#0a0a0a] text-white/80 border border-white/[0.06] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#50c878]/40" data-day="Sunday"><option value="">— Select a meal —</option></select>
</div>
</div>
</section>
</div>
<div className="w-full lg:w-7/12 relative h-[500px] sm:h-[600px] lg:h-[650px] xl:h-[750px] flex items-center justify-center pointer-events-none" style={{perspective: '1200px', display: 'none'}}>
<div className="relative w-full max-w-[600px] aspect-square" id="scene-container" style={{transformStyle: 'preserve-3d', transform: 'rotateY(-18deg) rotateX(12deg) rotateZ(4deg)'}}>

<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#181818] to-[#0a0a0a] overflow-hidden relative" style={{transform: 'translateZ(-100px) scale(1.1)', boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.08), inset 0 -2px 12px rgba(0,0,0,0.9), 0 24px 48px -12px rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.05)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '6px 6px'}}></div>
<div className="h-16 border-b border-white/[0.04] flex items-center px-6 gap-4 opacity-50 relative z-10">
<iconify-icon className="text-white/60" icon="solar:document-text-linear" width="14"></iconify-icon>
<span className="text-xs text-white/60 tracking-wide font-light">
                Theo's Tracker
              </span>
<iconify-icon className="text-white/40" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-xs text-white/60 tracking-wide font-light">
                My Tasks
              </span>
</div>
<div className="p-6 opacity-40 flex flex-col gap-6 relative z-10">
<h2 className="text-xl font-light tracking-tight text-white flex items-center gap-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                School &amp; Projects
                <iconify-icon className="text-white/50" icon="solar:link-minimalistic-linear" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
</h2>
<div className="flex flex-col gap-3 mt-4 w-2/3">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-white/30 flex items-center justify-center bg-white/10">
<iconify-icon className="text-white/80" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<div className="h-3 rounded-full bg-white/20 w-full"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-white/30 flex items-center justify-center bg-white/10">
<iconify-icon className="text-white/80" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<div className="h-3 rounded-full bg-white/20 w-3/4"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-white/20"></div>
<div className="h-3 rounded-full bg-white/10 w-5/6"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center gap-6" style={{transform: 'translateZ(50px)'}}>

<div className="w-[90%] sm:w-[420px] rounded-2xl bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative" id="card-1" style={{boxShadow: '0 24px 48px -12px rgba(0,0,0,0.9)', transform: 'translateX(20px) translateY(-30px)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04] relative z-10" style={{boxShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#a855f7]" icon="solar:mic-2-linear" width="14"></iconify-icon>
<span className="text-xs font-light text-white/80" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      Voice Log
                    </span>
</div>
<span className="text-[10px] text-white/40">Synced</span>
</div>
<div className="p-5 flex flex-col gap-4 relative z-10">
<div>
<h3 className="text-sm sm:text-base text-white font-normal mb-1.5 tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      Physics Notes
                    </h3>
<p className="text-xs text-white/50 leading-relaxed font-light line-clamp-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      Just dictated my physics notes to Siri. Formulas saved
                      directly to my school tracker.
                    </p>
</div>
<div className="mt-2 flex items-center justify-between border-t border-white/[0.04] pt-4">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/[0.05] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-[10px] text-white/70">
<iconify-icon icon="solar:soundwave-linear" width="12"></iconify-icon>
                      Voice Transcribed
                    </div>
</div>
</div>
</div>
</div>

<div className="w-[90%] sm:w-[420px] rounded-2xl bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative" id="card-2" style={{boxShadow: '0 24px 48px -12px rgba(0,0,0,0.9)', transform: 'translateX(-30px) translateY(10px)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04] relative z-10">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#f59e0b]" icon="solar:bell-linear" width="14"></iconify-icon>
<span className="text-xs font-light text-white/80">
                      Family Nudge
                    </span>
</div>
<span className="text-[10px] text-white/40">Today, 5:00 PM</span>
</div>
<div className="p-5 flex flex-col gap-4 relative z-10">
<div className="flex items-center gap-3">
<div className="px-2.5 py-1 rounded bg-gradient-to-b from-[#3a2d1d] to-[#241a10] text-[#f59e0b] text-[10px] font-normal tracking-wide border border-[#523d25]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.4)'}}>
                      Home Duty
                    </div>
</div>
<div className="pr-6">
<h3 className="text-sm sm:text-base text-white font-normal mb-1.5 tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      Empty Dishwasher &amp; Take out Trash
                    </h3>
</div>
<div className="mt-2 flex items-center justify-between gap-4 border-t border-white/[0.04] pt-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#10b981]" icon="solar:wallet-linear" width="14"></iconify-icon>
<span className="text-xs text-white/70 font-light">
                        Reward: $5.00
                      </span>
</div>
<button className="px-3 py-1 text-[10px] text-white bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded border border-white/[0.1] shadow-sm">
                      Mark Done
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


<section className="sm:px-6 sm:pt-16 sm:pb-32 w-full z-10 pt-16 pr-4 pb-16 pl-4 relative" id="milestones" style={{display: 'none'}}>
<div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] text-white mb-6" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Recent Wins
          <br/>
<span className="italic text-white/90 font-extralight" style={{fontFamily: '"Playfair Display", serif'}}></span>
</h2>
<p className="sm:text-base leading-relaxed text-sm font-light text-white/60 max-w-lg" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
          A live feed of my school assignments and voice notes, keeping everyone
          in the loop without lifting a finger.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1080px] mr-auto ml-auto">

<div className="rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden p-8 flex flex-col gap-6" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="relative z-10 flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white/80" icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-normal text-white tracking-tight">
                  Granola Public To-Dos
                </h3>
<p className="text-xs text-white/50 font-light">Recent Wins</p>
</div>
</div>
<div className="relative z-10 flex flex-col gap-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#10b981]" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-light text-white/80 line-through decoration-white/20">
                    Complete History Essay
                  </span>
</div>
<span className="text-[10px] text-white/40">Yesterday</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#10b981]" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-light text-white/80 line-through decoration-white/20">
                    Read Chapter 4
                  </span>
</div>
<span className="text-[10px] text-white/40">Monday</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#10b981]" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-light text-white/80 line-through decoration-white/20">
                    Organize Desk Space
                  </span>
</div>
<span className="text-[10px] text-white/40">Sunday</span>
</div>
</div>
</div>
</div>

<div className="rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden p-8 flex flex-col gap-6" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="relative z-10 flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a855f7]/20 to-transparent border border-[#a855f7]/30 flex items-center justify-center">
<iconify-icon className="text-[#a855f7]" icon="solar:mic-2-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-normal tracking-tight text-white">
                  Siri Voice Notes
                </h3>
<p className="text-xs text-white/50 font-light">
                  Family Broadcasts
                </p>
</div>
</div>
<div className="relative z-10 flex flex-col gap-4">
<div className="p-4 rounded-xl border border-white/[0.05] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-[#a855f7]"></div>
<span className="text-xs text-white/60 uppercase tracking-widest">
                    Voice Memo
                  </span>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed">
                  Hey Siri, remind the family I'll be late for dinner on
                  Thursday because of soccer practice.
                </p>
<div className="mt-3 text-[10px] text-[#a855f7] font-medium tracking-wide flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                  Added to Family Calendar
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 sm:px-6 w-full pt-20 pr-4 pb-32 pl-4 relative" id="home-management" style={{display: 'none'}}>
<div className="flex flex-col text-center max-w-3xl mr-auto mb-16 ml-auto items-center">
<h2 className="sm:text-4xl lg:text-5xl leading-[1.1] text-3xl font-light text-white tracking-tight mb-6" style={{textShadow: 'rgba(0, 0, 0, 0.5) 0px 2px 4px'}}>
          The Kitchen
        </h2>
<p className="text-sm sm:text-base text-white/60 max-w-lg leading-relaxed font-light" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
          See what's for dinner, what we need from the store, and check off my
          chores. Tap the tick boxes or just tell Siri I'm done.
        </p>
</div>

<div className="group bg-gradient-to-b from-[#1e1e1e] to-[#121212] w-full max-w-[1200px] rounded-[2rem] mr-auto ml-auto pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{boxShadow: '0 24px 48px -12px rgba(0,0,0,0.9)'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="overflow-hidden flex flex-col bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] w-full rounded-[2rem] relative" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>

<div className="border-white/[0.04] flex z-20 bg-[#0a0a0a]/50 h-12 border-b pr-4 pl-4 relative backdrop-blur-md items-center">
<div className="flex gap-1.5 w-20">
<div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
</div>
<div className="border-white/[0.05] text-[10px] flex gap-2 font-light text-white/40 tracking-wide border rounded-full mr-auto ml-auto pt-1.5 pr-6 pb-1.5 pl-6 gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:lock-linear" width="12"></iconify-icon>
              theo.home.local
            </div>
<div className="w-20 flex justify-end"></div>
</div>
<div className="flex min-h-[600px] relative z-10 flex-col md:flex-row">

<div className="hidden md:flex border-white/[0.04] flex-col bg-[#0a0a0a] w-64 z-20 border-r pt-5 pr-5 pb-5 pl-5 relative backdrop-blur-md gap-x-6 gap-y-6">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-lg bg-[#50c878]/10 flex items-center justify-center text-[#50c878] border border-[#50c878]/20" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.5)'}}>
<i className="w-[18px] h-[18px]" data-lucide="chef-hat"></i>
</div>
<span className="text-white text-sm font-light">Theo's Menu</span>
</div>
<div className="flex flex-col gap-1 mt-2">

<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#50c878]/10 text-[#50c878] text-sm cursor-pointer border border-[#50c878]/20 font-extralight transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-[#50c878]" data-lucide="home"></i>
                    Home
                  </div>
</div>

<div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/50 text-sm hover:bg-white/[0.02] hover:text-[#50c878] transition-colors cursor-pointer font-extralight">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="utensils"></i>
                    Go-To Meals
                  </div>
</div>

<div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/50 text-sm hover:bg-white/[0.02] hover:text-[#50c878] transition-colors cursor-pointer font-extralight">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
                    Groceries
                  </div>
<span className="text-[10px] bg-white/[0.05] px-1.5 py-0.5 rounded text-white/40 border border-white/[0.05]">
                    14
                  </span>
</div>

<div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/50 text-sm hover:bg-white/[0.02] hover:text-[#50c878] transition-colors cursor-pointer font-extralight">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
                    Stats
                  </div>
</div>
</div>
<div className="mt-auto pt-5 border-t border-white/[0.04]">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#50c878] to-[#1e5a34] flex items-center justify-center text-xs text-white border border-[#50c878]/20 shadow-[0_0_10px_rgba(80,200,120,0.15)]">
                    T
                  </div>
<div className="flex flex-col">
<span className="text-sm text-white font-light">Theo</span>
<span className="text-[10px] text-white/50 font-extralight mt-0.5">
                      Admin
                    </span>
</div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-y-auto relative hide-scrollbar">
<div className="flex mb-8 items-center justify-between">
<div className="">
<h3 className="text-xl md:text-2xl text-white font-normal tracking-tight mb-1">
                    Family Board
                  </h3>
<p className="text-xs text-white/50 font-light">
                    Meals, groceries &amp; chore tracking
                  </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 flex flex-col gap-4">
<h4 className="text-xs font-light text-white/50 uppercase tracking-widest">
                    Menu Plan
                  </h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">

<div className="border-white/[0.05] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border rounded-xl pt-4 pr-4 pb-4 pl-4" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">
                        Monday
                      </div>
<div className="text-sm text-white font-light">
                        Lemon Herb Salmon
                      </div>
<div className="text-xs text-white/50 mt-1">
                        Asparagus, Quinoa
                      </div>
</div>

<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">
                        Tuesday
                      </div>
<div className="text-sm text-white font-light">
                        Chicken Tacos
                      </div>
<div className="text-xs text-white/50 mt-1">
                        Salsa, Guacamole
                      </div>
</div>

<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">
                        Wednesday
                      </div>
<div className="text-sm text-white font-light">
                        Vegetable Stir Fry
                      </div>
<div className="text-xs text-white/50 mt-1">
                        Tofu, Brown Rice
                      </div>
</div>

<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="text-[10px] text-white/40 mb-2 uppercase tracking-wide">
                        Thursday
                      </div>
<div className="text-sm text-white font-light">
                        Pasta Bolognese
                      </div>
<div className="text-xs text-white/50 mt-1">Garlic Bread</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<h4 className="text-xs font-light text-white/50 uppercase tracking-widest">
                    Grocery Checklist
                  </h4>
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] flex flex-col gap-3" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-white/40 transition-colors">
<iconify-icon className="text-transparent" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<span className="text-sm text-white/80 font-light group-hover:text-white transition-colors">
                        Almond Milk
                      </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-white/40 transition-colors">
<iconify-icon className="text-transparent" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<span className="text-sm text-white/80 font-light group-hover:text-white transition-colors">
                        Free-range Eggs
                      </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#10b981]/50 flex items-center justify-center bg-[#10b981]/10">
<iconify-icon className="text-[#10b981]" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<span className="text-sm text-white/40 font-light line-through">
                        Fresh Spinach
                      </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#10b981]/50 flex items-center justify-center bg-[#10b981]/10">
<iconify-icon className="text-[#10b981]" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
<span className="text-sm text-white/40 font-light line-through">
                        Salmon Fillets
                      </span>
</label>
<div className="mt-2 pt-3 border-t border-white/[0.04]">
<button className="w-full py-1.5 text-[10px] text-white/60 bg-white/[0.03] hover:bg-white/[0.06] rounded border border-white/[0.05] transition-colors flex items-center justify-center gap-1">
<iconify-icon icon="solar:add-circle-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
