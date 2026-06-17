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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      gsap.registerPlugin(ScrollTrigger);

      /* ── CURSOR ── */
      const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
      let mx=0,my=0,rx=0,ry=0;
      document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
      (function animRing(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)})();

      /* ── BG PARTICLES (global) ── */
      const canvas=document.getElementById('particle-canvas'),ctx=canvas.getContext('2d');
      let W,H,pts=[];
      function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
      resize();window.addEventListener('resize',resize);
      function initPts(){pts=[];const n=Math.floor(W*H/16000);for(let i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.2+.3,a:Math.random()*.4+.08})}
      initPts();
      (function drawPts(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(212,255,71,${p.a})`;ctx.fill()});for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<90){ctx.beginPath();ctx.strokeStyle=`rgba(212,255,71,${.05*(1-d/90)})`;ctx.lineWidth=.4;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}requestAnimationFrame(drawPts)})();

      /* ══════════════════════════════════════════
         HERO CANVAS — Topographic noise field
         Layered sine-based contour lines that shift
         and breathe, creating a living landscape
         ══════════════════════════════════════════ */
      (function(){
        const hc=document.getElementById('hero-canvas');
        if(!hc)return;
        const hctx=hc.getContext('2d');
        let HW,HH,t=0;

        function resizeHero(){
          HW=hc.width=hc.offsetWidth;
          HH=hc.height=hc.offsetHeight;
        }
        resizeHero();
        window.addEventListener('resize',resizeHero);

        /* Simplex-like noise via layered sines */
        function noise(x,y,t){
          return(
            Math.sin(x*0.006+t*0.3)*0.4+
            Math.sin(y*0.008+t*0.2)*0.3+
            Math.sin((x+y)*0.005+t*0.15)*0.2+
            Math.sin(x*0.012-y*0.007+t*0.4)*0.1+
            Math.sin(x*0.003+y*0.009+t*0.1)*0.25+
            Math.cos(x*0.007-t*0.25)*0.15+
            Math.cos(y*0.011+t*0.18)*0.12
          )/1.52;
        }

        /* Marching squares contour extractor */
        function getContours(field,W,H,threshold){
          const lines=[];
          for(let y=0;y<H-1;y++){
            for(let x=0;x<W-1;x++){
              const tl=field[y*W+x],tr=field[y*W+x+1];
              const bl=field[(y+1)*W+x],br=field[(y+1)*W+x+1];
              const idx=((tl>threshold)?8:0)|((tr>threshold)?4:0)|((br>threshold)?2:0)|((bl>threshold)?1:0);
              if(idx===0||idx===15)continue;
              /* Interpolation helper */
              const lerp=(a,b)=>(threshold-a)/(b-a);
              const top={x:x+lerp(tl,tr),y};
              const bottom={x:x+lerp(bl,br),y:y+1};
              const left={x,y:y+lerp(tl,bl)};
              const right={x:x+1,y:y+lerp(tr,br)};
              const edges={1:[bottom,left],2:[right,bottom],3:[right,left],
                4:[top,right],5:[top,left,bottom,right],6:[top,bottom],
                7:[top,left],8:[top,left],9:[top,bottom],
                10:[left,top,right,bottom],11:[top,right],
                12:[left,right],13:[right,bottom],14:[left,bottom]};
              const pts=edges[idx]||[];
              if(pts.length>=2)lines.push([pts[0],pts[1]]);
              if(pts.length===4)lines.push([pts[2],pts[3]]);
            }
          }
          return lines;
        }

        const COLS=60,ROWS=40;

        function drawFrame(){
          t+=0.005;
          hctx.clearRect(0,0,HW,HH);

          /* Build field */
          const field=new Float32Array(COLS*ROWS);
          for(let row=0;row<ROWS;row++){
            for(let col=0;col<COLS;col++){
              const nx=col/COLS*HW,ny=row/ROWS*HH;
              field[row*COLS+col]=noise(nx,ny,t);
            }
          }

          const scaleX=HW/(COLS-1),scaleY=HH/(ROWS-1);

          /* Draw multiple threshold levels = contour lines */
          const levels=[
            {thr:-0.55,alpha:0.04,w:0.5,color:'212,255,71'},
            {thr:-0.35,alpha:0.06,w:0.5,color:'212,255,71'},
            {thr:-0.15,alpha:0.09,w:0.5,color:'212,255,71'},
            {thr:0.0, alpha:0.12,w:0.8,color:'168,240,232'},
            {thr:0.15,alpha:0.10,w:0.5,color:'212,255,71'},
            {thr:0.32,alpha:0.07,w:0.5,color:'212,255,71'},
            {thr:0.50,alpha:0.05,w:0.5,color:'242,237,230'},
          ];

          levels.forEach(({thr,alpha,w,color})=>{
            const lines=getContours(field,COLS,ROWS,thr);
            hctx.strokeStyle=`rgba(${color},${alpha})`;
            hctx.lineWidth=w;
            hctx.lineCap='round';
            lines.forEach(([p0,p1])=>{
              hctx.beginPath();
              hctx.moveTo(p0.x*scaleX,p0.y*scaleY);
              hctx.lineTo(p1.x*scaleX,p1.y*scaleY);
              hctx.stroke();
            });
          });

          /* Glowing accent dots at high-density intersections */
          const hotspots=[];
          for(let i=0;i<field.length;i++){
            const v=Math.abs(field[i]);
            if(v>0.42&&v<0.48&&Math.random()<0.003){
              const col=i%COLS,row=Math.floor(i/COLS);
              hotspots.push({x:col*scaleX,y:row*scaleY,v});
            }
          }
          hotspots.forEach(h=>{
            const r=(h.v-0.42)/0.06;
            hctx.beginPath();
            hctx.arc(h.x,h.y,1.5,0,Math.PI*2);
            hctx.fillStyle=`rgba(212,255,71,${0.3+r*0.4})`;
            hctx.fill();
          });

          /* Perspective grid lines — converging to vanishing point */
          const vx=HW*0.62,vy=HH*0.38;
          hctx.lineWidth=0.3;
          for(let i=0;i<12;i++){
            const angle=(i/12)*Math.PI*2+t*0.015;
            const ex=vx+Math.cos(angle)*HW*1.2;
            const ey=vy+Math.sin(angle)*HH*1.2;
            const dist=Math.sqrt((ex-vx)**2+(ey-vy)**2);
            const grad=hctx.createLinearGradient(vx,vy,ex,ey);
            grad.addColorStop(0,'rgba(212,255,71,0)');
            grad.addColorStop(0.3,`rgba(212,255,71,${0.04+Math.sin(t+i)*0.02})`);
            grad.addColorStop(1,'rgba(212,255,71,0)');
            hctx.strokeStyle=grad;
            hctx.beginPath();
            hctx.moveTo(vx,vy);
            hctx.lineTo(ex,ey);
            hctx.stroke();
          }

          requestAnimationFrame(drawFrame);
        }
        drawFrame();

        /* Floating data node labels */
        const nodeData=[
          'inference.edge.01','latency:11ms','model.router','token.budget','embedding.v3',
          'stream.active','fallback:ready','cache.hit:94%','region:us-east','cost:$0.002'
        ];
        const nodesEl=document.getElementById('heroNodes');
        if(nodesEl){
          nodeData.forEach((label,i)=>{
            const el=document.createElement('div');
            el.className='hnode';
            el.innerHTML=`<span class="hnode-dot"></span>${label}`;
            el.style.left=`${10+Math.random()*75}%`;
            el.style.top=`${8+Math.random()*75}%`;
            nodesEl.appendChild(el);
            /* Staggered light-up */
            setTimeout(()=>el.classList.add('lit'),1200+i*350);
            /* Drift slowly */
            setInterval(()=>{
              const nx=parseFloat(el.style.left)+(Math.random()-.5)*0.4;
              const ny=parseFloat(el.style.top)+(Math.random()-.5)*0.3;
              el.style.left=Math.max(5,Math.min(88,nx))+'%';
              el.style.top=Math.max(5,Math.min(88,ny))+'%';
              el.style.transition='left 3s ease, top 3s ease';
            },3000+i*400);
          });
        }
      })();

      /* ── NAV SCROLLED STATE ── */
      (function(){
        const nav=document.querySelector('nav');
        window.addEventListener('scroll',()=>{
          nav.classList.toggle('scrolled',window.scrollY>60);
        },{passive:true});
      })();

      /* ── BENTO TILT + IMAGE PARALLAX ── */
      document.querySelectorAll('.bento-cell[data-tilt]').forEach(cell=>{
        const img=cell.querySelector('.bento-img');
        cell.addEventListener('mousemove',e=>{
          const r=cell.getBoundingClientRect();
          const px=(e.clientX-r.left)/r.width-.5;
          const py=(e.clientY-r.top)/r.height-.5;
          cell.style.transform=`translateY(-4px) rotateX(${-py*4}deg) rotateY(${px*4}deg)`;
          cell.style.transformStyle='preserve-3d';
          if(img)img.style.transform=`scale(1.12) translate(${-px*10}px,${-py*10}px)`;
        });
        cell.addEventListener('mouseleave',()=>{
          cell.style.transform='';
          if(img)img.style.transform='';
        });
      });

      /* ══════════════════════════════════════════
         HERO MOUSE-FOLLOW GLOW
         ══════════════════════════════════════════ */
      (function(){
        const glow=document.getElementById('hero-glow');
        const hero=document.getElementById('hero');
        if(!glow||!hero)return;
        let gx=window.innerWidth/2,gy=window.innerHeight*0.45;
        let tx=gx,ty=gy;
        let active=false;

        hero.addEventListener('mousemove',e=>{
          const r=hero.getBoundingClientRect();
          tx=e.clientX-r.left;
          ty=e.clientY-r.top;
          if(!active){active=true;glow.classList.add('on');}
        });
        hero.addEventListener('mouseleave',()=>{
          active=false;
          glow.classList.remove('on');
        });

        (function loop(){
          gx+=(tx-gx)*0.07;
          gy+=(ty-gy)*0.07;
          glow.style.left=gx+'px';
          glow.style.top=gy+'px';
          requestAnimationFrame(loop);
        })();
      })();

      /* ══════════════════════════════════════════
         GSAP HERO PARALLAX & SCROLL EFFECTS
         ══════════════════════════════════════════ */
      window.addEventListener('load',()=>{
        // Remove any saved GSAP spacer wrappers if this code was copied from a live preview.
        document.querySelectorAll('.pin-spacer').forEach(spacer=>{
          const child=spacer.querySelector('#hero-parallax-wrap');
          if(child && spacer.parentNode) spacer.parentNode.replaceChild(child, spacer);
        });
        ScrollTrigger.refresh();

        /* ─ 1. CANVAS scale + fade on scroll ─ */
        gsap.to('#hero-canvas',{
          scale:1.08,
          opacity:0,
          ease:'none',
          scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true}
        });

        /* ─ Glow fades out on scroll ─ */
        gsap.to('#hero-glow',{
          opacity:0,
          scale:1.3,
          ease:'none',
          scrollTrigger:{trigger:'#hero',start:'top top',end:'50% top',scrub:true}
        });

        /* ─ 2. Vignette deepens ─ */
        gsap.to('.hero-vignette',{
          opacity:2,
          ease:'none',
          scrollTrigger:{trigger:'#hero',start:'top top',end:'80% top',scrub:true}
        });

        /* ─ 3. Floating nodes drift upward and fade ─ */
        gsap.to('.hnode',{
          y:-60,
          opacity:0,
          stagger:0.05,
          ease:'none',
          scrollTrigger:{trigger:'#hero',start:'top top',end:'60% top',scrub:true}
        });

        /* ─ 4. Eyebrow flies LEFT ─ */
        gsap.to('#heroEyebrow',{
          x:-120,
          opacity:0,
          ease:'power2.in',
          scrollTrigger:{trigger:'#hero',start:'15% top',end:'55% top',scrub:true}
        });

        /* ─ 5. Headline line 0 — drift LEFT + up ─ */
        gsap.to('#hline0',{
          x:-80,
          y:-40,
          opacity:0,
          ease:'power1.in',
          scrollTrigger:{trigger:'#hero',start:'10% top',end:'50% top',scrub:true}
        });

        /* ─ 6. Headline line 1 — scale up + fade ─ */
        gsap.to('#hline1',{
          scale:1.06,
          y:-20,
          opacity:0,
          ease:'power1.in',
          transformOrigin:'left center',
          scrollTrigger:{trigger:'#hero',start:'15% top',end:'55% top',scrub:true}
        });

        /* ─ 7. Ghost line flies RIGHT ─ */
        gsap.to('#hline2',{
          x:100,
          opacity:0,
          ease:'power1.in',
          scrollTrigger:{trigger:'#hero',start:'20% top',end:'55% top',scrub:true}
        });

        /* ─ 8. Sub + actions slide down + fade ─ */
        gsap.to(['#heroSub','#heroActions'],{
          y:50,
          opacity:0,
          stagger:0.08,
          ease:'none',
          scrollTrigger:{trigger:'#hero',start:'25% top',end:'60% top',scrub:true}
        });

        /* ─ 9. Stats strip — each cell peels downward ─ */
        gsap.to('.stat',{
          y:70,
          opacity:0,
          stagger:0.12,
          ease:'none',
          scrollTrigger:{trigger:'#hero',start:'30% top',end:'65% top',scrub:true}
        });

        /* ─ 10. Brief desktop-only pin. Mobile is not pinned to avoid tall empty space. ─ */
        if (window.matchMedia('(min-width: 769px)').matches) {
          ScrollTrigger.create({
            trigger:'#hero-parallax-wrap',
            start:'top top',
            end:'+=18%',
            pin:true,
            pinSpacing:true,
            anticipatePin:1
          });
        }
      });

      /* ── INTERSECTION REVEAL ── */
      const revealObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible')}})},{threshold:.1});
      document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%4*.1)+'s';revealObs.observe(el)});

      /* ── SCRAMBLE TEXT ── */
      const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
      function scramble(el){const orig=el.dataset.text;let iter=0;const iv=setInterval(()=>{el.textContent=orig.split('').map((_,i)=>i<iter?orig[i]:chars[Math.floor(Math.random()*chars.length)]).join('');if(iter>=orig.length)clearInterval(iv);iter+=.5},40)}
      document.querySelectorAll('.step').forEach(step=>{step.addEventListener('mouseenter',()=>{const el=step.querySelector('.scramble');if(el)scramble(el)})});

      /* ── INTEGRATION SVG PATH DRAW ── */
      const integObs=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){setTimeout(()=>{document.querySelectorAll('.node-path').forEach((p,i)=>{setTimeout(()=>{p.classList.add('drawn')},i*120)})},200);integObs.disconnect()}},{threshold:.3});
      const integEl=document.getElementById('integViz');if(integEl)integObs.observe(integEl);

      /* ── COUNTER ANIMATION ── */
      function animateCounter(el){const display=el.dataset.display;const frames=60;let f=0;const iv=setInterval(()=>{f++;const t=f/frames;const ease=1-Math.pow(1-t,3);el.textContent=display.replace(/[\d.]+/,m=>{const v=parseFloat(m);const curr=v*ease;return curr<10?curr.toFixed(1):Math.round(curr)});if(f>=frames){el.textContent=display;clearInterval(iv)}},16)}
      const counterObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.metric-n[data-display]').forEach(el=>{animateCounter(el)});counterObs.unobserve(e.target)}})},{threshold:.4});
      document.querySelectorAll('.metrics-inner').forEach(el=>counterObs.observe(el));

      /* ── DRAG-SCROLL process track ── */
      const track=document.getElementById('processTrack');
      if(track){let isDown=false,startX,scrollLeft;track.addEventListener('mousedown',e=>{isDown=true;track.style.cursor='grabbing';startX=e.pageX-track.offsetLeft;scrollLeft=track.scrollLeft});track.addEventListener('mouseleave',()=>{isDown=false;track.style.cursor='grab'});track.addEventListener('mouseup',()=>{isDown=false;track.style.cursor='grab'});track.addEventListener('mousemove',e=>{if(!isDown)return;e.preventDefault();const x=e.pageX-track.offsetLeft;track.scrollLeft=scrollLeft-(x-startX)*1.2})}

      /* ── TESTIMONIALS ── */
      const testimonials=[
        {q:"Vektor cut our model integration work from weeks to hours. We now ship AI features in a single sprint.",name:"Alicia Torres",role:"VP Eng · Runway",init:"AT",stars:5},
        {q:"The routing intelligence is genuinely magic. We stopped overpaying for GPT-4 on tasks that Haiku handles just fine.",name:"James Osei",role:"Staff Eng · Linear",init:"JO",stars:5},
        {q:"Finally, an AI infra layer that doesn't make me feel like I'm gluing 12 things together with duct tape.",name:"Yuna Park",role:"CTO · Bastion AI",init:"YP",stars:5},
        {q:"The observability alone is worth the price. We caught a prompt regression before it hit 1% of users.",name:"Marcus Webb",role:"Lead Eng · Notion",init:"MW",stars:5},
        {q:"Switched from rolling our own router to Vektor in an afternoon. Best afternoon of my engineering career.",name:"Priya Mehta",role:"Founding Eng · Codeium",init:"PM",stars:5},
        {q:"Edge routing means our EU customers stopped complaining about latency. That's worth more than the subscription.",name:"Felix Braun",role:"Principal Eng · Loom",init:"FB",stars:5},
        {q:"We A/B test prompt variants across models using Vektor's traffic splitting. The ROI visibility is incredible.",name:"Sofia Andrade",role:"AI Eng · Retool",init:"SA",stars:5},
        {q:"The zero-config fallback routing has saved us three times during OpenAI outages. Customers never noticed.",name:"Chen Wei",role:"Platform Eng · Supabase",init:"CW",stars:5},
      ];
      function makeCard(t){return`<div class="testi-card"><div class="testi-stars">${'★'.repeat(t.stars)}</div><p class="testi-quote">"${t.q}"</p><div class="testi-author"><div class="testi-avatar">${t.init}</div><div><p class="testi-name">${t.name}</p><p class="testi-role">${t.role}</p></div></div></div>`}
      const colA=document.getElementById('colA'),colB=document.getElementById('colB');
      if(colA&&colB){
        const half=Math.ceil(testimonials.length/2);
        const aItems=testimonials.slice(0,half);
        const bItems=testimonials.slice(half);
        const aHTML=aItems.map(makeCard).join('');colA.innerHTML=aHTML+aHTML;
        const bHTML=bItems.map(makeCard).join('');colB.innerHTML=bHTML+bHTML;
      }

      /* ── PROCESS CARD ARC RESET ── */
      document.querySelectorAll('.process-card').forEach(c=>{c.addEventListener('mouseleave',()=>{const arc=c.querySelector('.pi-arc');arc.style.animation='none';void arc.offsetWidth;arc.style.animation=''})});

      /* ══ PRICING CALCULATOR ══ */
      (function(){
        const tokenSlider=document.getElementById('tokenSlider');
        const seatSlider=document.getElementById('seatSlider');
        const tokenVal=document.getElementById('tokenVal');
        const seatVal=document.getElementById('seatVal');
        const calcPrice=document.getElementById('calcPrice');
        const calcPer=document.getElementById('calcPer');
        const calcBadge=document.getElementById('calcBadge');
        const calcResult=document.getElementById('calcResult');
        const toggleTrack=document.getElementById('toggleTrack');
        const pricingToggle=document.getElementById('pricingToggle');
        const layout=document.getElementById('pricingLayout');
        if(!tokenSlider)return;

        let isAnnual=false;

        const PLANS=[
          {id:'starter',name:'Starter plan',maxTokensM:1,maxSeats:1,basePrice:0,label:'Free forever'},
          {id:'pro',name:'Pro plan',maxTokensM:50,maxSeats:5,basePrice:49,label:'per seat / mo'},
          {id:'team',name:'Team plan',maxTokensM:200,maxSeats:10,basePrice:199,label:'up to 10 seats'},
          {id:'enterprise',name:'Enterprise',maxTokensM:Infinity,maxSeats:Infinity,basePrice:null,label:'Custom pricing'},
        ];

        function getTokensM(v){
          // 0-100 slider → 1M to 500M+ nonlinear
          if(v<=20) return Math.round(v/20*10);        // 0-20 → 0-10M
          if(v<=50) return Math.round(10+(v-20)/30*90); // 20-50 → 10-100M
          if(v<=80) return Math.round(100+(v-50)/30*400); // 50-80 → 100-500M
          return Infinity;
        }

        function fmt(n){
          if(n>=1000)return(n/1000).toFixed(0)+'B';
          if(n>=100)return n.toFixed(0)+'M';
          return n.toFixed(0)+'M';
        }

        function getPlan(tokensM,seats){
          if(tokensM===Infinity||seats>10)return PLANS[3];
          if(tokensM>50||seats>5)return PLANS[2];
          if(tokensM>1||seats>1)return PLANS[1];
          return PLANS[0];
        }

        function rollNumber(el,newVal){
          el.classList.remove('rolling');
          void el.offsetWidth;
          el.textContent=newVal;
          el.classList.add('rolling');
        }

        let currentPlanId='starter';

        function burstParticles(rowEl){
          const pc=document.getElementById('priceCanvas');
          if(!pc)return;
          const pr=layout.getBoundingClientRect();
          const rr=rowEl.getBoundingClientRect();
          pc.width=pr.width;pc.height=pr.height;
          const cx=rr.left-pr.left+rr.width/2;
          const cy=rr.top-pr.top+rr.height*.2;
          const ctx2=pc.getContext('2d');
          const bursts=Array.from({length:28},()=>({
            x:cx,y:cy,
            vx:(Math.random()-.5)*6,
            vy:(Math.random()-.5)*4-1,
            r:Math.random()*3+1,
            life:1,
            decay:Math.random()*.04+.025
          }));
          function draw(){
            ctx2.clearRect(0,0,pc.width,pc.height);
            let alive=false;
            bursts.forEach(b=>{
              b.x+=b.vx;b.y+=b.vy;b.vy+=.12;b.life-=b.decay;
              if(b.life>0){
                alive=true;
                ctx2.beginPath();ctx2.arc(b.x,b.y,b.r*b.life,0,Math.PI*2);
                ctx2.fillStyle=`rgba(212,255,71,${b.life*.9})`;ctx2.fill();
              }
            });
            if(alive)requestAnimationFrame(draw);
            else ctx2.clearRect(0,0,pc.width,pc.height);
          }
          draw();
        }

        function activateRow(planId){
          if(planId===currentPlanId)return;
          currentPlanId=planId;
          document.querySelectorAll('.price-card-v').forEach(r=>{
            r.classList.remove('active');
            const b=r.querySelector('.beam');
            b.style.animation='none';void b.offsetWidth;
          });
          const row=document.getElementById('row-'+planId);
          if(row){
            row.classList.add('active');
            burstParticles(row);
            /* auto-scroll the active card into view */
            const area=document.getElementById('priceCardsArea');
            if(area){
              const target=row.offsetLeft-area.offsetWidth/2+row.offsetWidth/2;
              area.scrollTo({left:Math.max(0,target),behavior:'smooth'});
            }
          }
        }

        function update(){
          const tv=parseInt(tokenSlider.value);
          const seats=parseInt(seatSlider.value);
          const tokensM=getTokensM(tv);
          tokenVal.textContent=tokensM===Infinity?'500M+':fmt(tokensM);
          seatVal.textContent=seats;

          const plan=getPlan(tokensM,seats);
          activateRow(plan.id);

          // Update calc display
          if(plan.basePrice===null){
            rollNumber(calcPrice,'—');
            calcPer.textContent='Contact us for volume pricing';
            calcBadge.textContent=plan.name;
          } else if(plan.basePrice===0){
            rollNumber(calcPrice,'0');
            calcPer.textContent='Free forever · no credit card needed';
            calcBadge.textContent=plan.name;
          } else {
            let total=plan.id==='pro'?plan.basePrice*seats:plan.basePrice;
            if(isAnnual)total=Math.round(total*.8);
            rollNumber(calcPrice,total.toLocaleString());
            calcPer.textContent=isAnnual?'per month, billed annually':'per month';
            calcBadge.textContent=plan.name+(isAnnual?' · 20% off':'');
          }

          // Flash the result box
          calcResult.classList.remove('highlight');
          void calcResult.offsetWidth;
          calcResult.classList.add('highlight');
          setTimeout(()=>calcResult.classList.remove('highlight'),400);

          // Update annual prices shown on rows
          const mult=isAnnual?.8:1;
          const proP=document.getElementById('p-pro');
          const teamP=document.getElementById('p-team');
          if(proP)proP.textContent=Math.round(49*mult);
          if(teamP)teamP.textContent=Math.round(199*mult);
          const pp=document.getElementById('period-pro');
          const pt=document.getElementById('period-team');
          if(pp)pp.textContent=isAnnual?'per seat / yr (billed ann.)':'per seat / mo';
          if(pt)pt.textContent=isAnnual?'up to 10 seats / yr':'up to 10 seats / mo';
        }

        tokenSlider.addEventListener('input',update);
        seatSlider.addEventListener('input',update);

        toggleTrack.addEventListener('click',()=>{
          isAnnual=!isAnnual;
          toggleTrack.classList.toggle('on',isAnnual);
          pricingToggle.classList.toggle('annual-active',isAnnual);
          update();
        });

        // Click a card to manually select
        document.querySelectorAll('.price-card-v').forEach(row=>{
          row.addEventListener('click',e=>{
            if(e.target.closest('.pcv-btn'))return;
            const pid=row.dataset.plan;
            if(pid===currentPlanId)return;
            document.querySelectorAll('.price-card-v').forEach(r=>{r.classList.remove('active');const b=r.querySelector('.beam');b.style.animation='none';void b.offsetWidth;});
            row.classList.add('active');
            burstParticles(row);
            currentPlanId=pid;
          });
        });

        /* Drag-to-scroll on the cards area */
        const area=document.getElementById('priceCardsArea');
        if(area){
          let down=false,sx,sl,moved=false;
          area.addEventListener('mousedown',e=>{down=true;moved=false;area.style.cursor='grabbing';sx=e.pageX-area.offsetLeft;sl=area.scrollLeft});
          area.addEventListener('mouseleave',()=>{down=false;area.style.cursor='grab'});
          area.addEventListener('mouseup',()=>{down=false;area.style.cursor='grab'});
          area.addEventListener('mousemove',e=>{
            if(!down)return;
            e.preventDefault();
            const x=e.pageX-area.offsetLeft;
            if(Math.abs(x-sx)>4)moved=true;
            area.scrollLeft=sl-(x-sx)*1.1;
          });
          /* prevent click-select after a drag */
          area.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false}},true);
        }

        update();
      })();
    


      (function(){
        const ts=[
          {q:"Vektor cut our model integration work from weeks to hours. We now ship AI features in a single sprint.",name:"Alicia Torres",role:"VP Eng · Runway",img:"https://i.pravatar.cc/100?img=1",stars:5},
          {q:"The routing intelligence is genuinely magic. We stopped overpaying for GPT-4 on tasks that Haiku handles just fine.",name:"James Osei",role:"Staff Eng · Linear",img:"https://i.pravatar.cc/100?img=2",stars:5},
          {q:"Finally, an AI infra layer that doesn't make me feel like I'm gluing 12 things together with duct tape.",name:"Yuna Park",role:"CTO · Bastion AI",img:"https://i.pravatar.cc/100?img=3",stars:5},
          {q:"The observability alone is worth the price. We caught a prompt regression before it hit 1% of users.",name:"Marcus Webb",role:"Lead Eng · Notion",img:"https://i.pravatar.cc/100?img=4",stars:5},
          {q:"Switched from rolling our own router to Vektor in an afternoon. Best afternoon of my engineering career.",name:"Priya Mehta",role:"Founding Eng · Codeium",img:"https://i.pravatar.cc/100?img=5",stars:5},
          {q:"Edge routing means our EU customers stopped complaining about latency. That's worth more than the subscription.",name:"Felix Braun",role:"Principal Eng · Loom",img:"https://i.pravatar.cc/100?img=6",stars:5},
          {q:"We A/B test prompt variants across models using Vektor's traffic splitting. The ROI visibility is incredible.",name:"Sofia Andrade",role:"AI Eng · Retool",img:"https://i.pravatar.cc/100?img=7",stars:5},
          {q:"The zero-config fallback routing has saved us three times during OpenAI outages. Customers never noticed.",name:"Chen Wei",role:"Platform Eng · Supabase",img:"https://i.pravatar.cc/100?img=8",stars:5}
        ];
        function mc(t){return `<div class="testi-card"><div class="testi-stars">${'★'.repeat(t.stars)}</div><p class="testi-quote">"${t.q}"</p><div class="testi-author"><div class="testi-avatar"><img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${t.name}"></div><div><p class="testi-name">${t.name}</p><p class="testi-role">${t.role}</p></div></div></div>`;}
        window.addEventListener('DOMContentLoaded', () => {
          const cA=document.getElementById('colA');
          const cB=document.getElementById('colB');
          if(cA && cB){
            const h=Math.ceil(ts.length/2);
            const aH=ts.slice(0,h).map(mc).join(''); cA.innerHTML=aH+aH;
            const bH=ts.slice(h).map(mc).join(''); cB.innerHTML=bH+bH;
          }
        });
      })();
    


      document.addEventListener('DOMContentLoaded', () => {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.querySelector('.nav-links');
        const burgerIcon = document.getElementById('burgerIcon');
        const closeIcon = document.getElementById('closeIcon');
        if (menuBtn && navLinks) {
          menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const isOpen = navLinks.classList.contains('open');
            burgerIcon.style.display = isOpen ? 'none' : 'block';
            closeIcon.style.display = isOpen ? 'block' : 'none';
          });
          navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
              navLinks.classList.remove('open');
              burgerIcon.style.display = 'block';
              closeIcon.style.display = 'none';
            });
          });
        }
      });
    
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
      
<canvas height="818" id="particle-canvas" width="1512"></canvas>
<div id="cursor" style={{left: '547px', top: '5px'}}></div>
<div id="cursor-ring" style={{left: '0px', top: '0px'}}></div>

<nav className="">
<a className="nav-logo" href="#">
        VEKT
        <span>◉</span>
        R
      </a>
<ul className="nav-links">
<li><a href="#">Platform</a></li>
<li><a href="#">Docs</a></li>
<li><a href="#pricing">Pricing</a></li>
<li><a href="#">Blog</a></li>
</ul>
<div className="nav-actions" style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
<button className="nav-cta">Get access</button>
<button className="mobile-menu-btn" id="mobileMenuBtn">
<svg fill="none" height="24" id="burgerIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
<svg fill="none" height="24" id="closeIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{display: 'none'}} viewbox="0 0 24 24" width="24">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
</nav>

<div id="hero-parallax-wrap">
<section className="hero" id="hero">

<canvas height="818" id="hero-canvas" width="1512"></canvas>
<div className="hero-vignette"></div>
<div className="hero-noise"></div>
<div id="hero-glow" style={{left: '756px', top: '368.1px'}}></div>

<div className="hero-nodes" id="heroNodes">
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        inference.edge.01
      </div>
<div className="hnode" style={{left: '50.6737%', top: '46.256%'}}>
<span className="hnode-dot"></span>
        latency:11ms
      </div>
<div className="hnode" style={{left: '41.6664%', top: '11.1186%'}}>
<span className="hnode-dot"></span>
        model.router
      </div>
<div className="hnode" style={{left: '80.3167%', top: '81.9268%'}}>
<span className="hnode-dot"></span>
        token.budget
      </div>
<div className="hnode" style={{left: '76.6003%', top: '17.953%'}}>
<span className="hnode-dot"></span>
        embedding.v3
      </div>
<div className="hnode" style={{left: '45.2184%', top: '38.5411%'}}>
<span className="hnode-dot"></span>
        stream.active
      </div>
<div className="hnode" style={{left: '21.7566%', top: '9.8209%'}}>
<span className="hnode-dot"></span>
        fallback:ready
      </div>
<div className="hnode" style={{left: '50.5107%', top: '31.3831%'}}>
<span className="hnode-dot"></span>
        cache.hit:94%
      </div>
<div className="hnode" style={{left: '50.7176%', top: '35.5886%'}}>
<span className="hnode-dot"></span>
        region:us-east
      </div>
<div className="hnode" style={{left: '45.893%', top: '61.0861%'}}>
<span className="hnode-dot"></span>
        cost:$0.002
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        inference.edge.01
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        latency:11ms
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        model.router
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        token.budget
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        embedding.v3
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        stream.active
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        fallback:ready
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        cache.hit:94%
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        region:us-east
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        cost:$0.002
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        inference.edge.01
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        latency:11ms
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        model.router
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        token.budget
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        embedding.v3
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        stream.active
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        fallback:ready
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        cache.hit:94%
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        region:us-east
      </div>
<div className="hnode" style={{left: '20.238%', top: '35.3864%'}}>
<span className="hnode-dot"></span>
        cost:$0.002
      </div>
</div>

<div className="hero-content" id="heroContent">
<p className="hero-eyebrow" id="heroEyebrow">
        Intelligence Infrastructure · v2.4
      </p>
<h1 className="hero-headline" id="heroHeadline">
<span className="hero-line" id="hline0">Build systems</span>
<br/>
<span className="hero-line" id="hline1" style={{transformOrigin: '0% 50%'}}>
          that
          <em className="">think</em>
</span>
<br/>
<span className="hero-line hero-line-ghost" id="hline2" style={{color: 'rgba(242,237,230,.2)', marginLeft: '4vw', display: 'block'}}>
          faster than you
        </span>
</h1>
<p className="hero-sub" id="heroSub">
        Vektor orchestrates your AI workflows at the infrastructure
        layer — no glue code, no latency surprises. Ship in hours, not
        sprints.
      </p>
<div className="hero-actions" id="heroActions">
<a className="btn-primary" href="#">
          Start building free
          <svg fill="none" height="14" viewbox="0 0 14 14" width="14">
<path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
</svg>
</a>
<a className="btn-ghost" href="#">Watch demo →</a>
</div>
<div className="hero-stats" id="heroStats">
<div className="stat">
<div className="stat-num">
            4.2
            <span>B</span>
</div>
<div className="stat-label">API calls / month</div>
</div>
<div className="stat">
<div className="stat-num">
            99.
            <span className="">98</span>
</div>
<div className="stat-label">Uptime SLA</div>
</div>
<div className="stat">
<div className="stat-num">
<span>&lt;</span>
            12
          </div>
<div className="stat-label">ms p99 latency</div>
</div>
<div className="stat">
<div className="stat-num">
            380
            <span>+</span>
</div>
<div className="stat-label">Enterprise clients</div>
</div>
</div>
</div>
</section>
</div>

<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item">
          Realtime inference
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Vector embeddings
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Model routing
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Auto-scaling pipelines
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Edge deployment
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Observability layer
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Rate-limit controls
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Multi-model orchestration
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Realtime inference
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Vector embeddings
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Model routing
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Auto-scaling pipelines
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Edge deployment
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Observability layer
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Rate-limit controls
          <span className="sep"></span>
</div>
<div className="marquee-item">
          Multi-model orchestration
          <span className="sep"></span>
</div>
</div>
</div>

<section className="features">
<p className="section-tag">Core platform</p>
<div className="feat-grid">
<div className="feat-card tall reveal" style={{transitionDelay: '0s'}}>
<div className="">
<div className="feat-num">01</div>
<div className="feat-icon-wrap">⚡</div>
<h3 className="feat-title">
              Adaptive model
              <br/>
              routing at scale
            </h3>
<p className="feat-body">
              Route every request to the optimal model based on cost, latency,
              and capability — automatically. No config files, no manual tuning.
            </p>
</div>
<div>
<p style={{fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(242,237,230,.25)', marginBottom: '12px'}}>
              Live throughput
            </p>
<div className="feat-chart">
<div className="bar-c" style={{height: '35%', animationDelay: '.1s'}}></div>
<div className="bar-c" style={{height: '55%', animationDelay: '.15s'}}></div>
<div className="bar-c" style={{height: '42%', animationDelay: '.2s'}}></div>
<div className="bar-c" style={{height: '78%', animationDelay: '.25s'}}></div>
<div className="bar-c" style={{height: '62%', animationDelay: '.3s'}}></div>
<div className="bar-c" style={{height: '90%', animationDelay: '.35s'}}></div>
<div className="bar-c" style={{height: '70%', animationDelay: '.4s'}}></div>
<div className="bar-c" style={{height: '85%', animationDelay: '.45s', background: 'rgba(212,255,71,.3)'}}></div>
</div>
</div>
</div>
<div className="feat-card accent reveal" style={{transitionDelay: '0.1s'}}>
<div className="feat-num">02</div>
<div className="feat-icon-wrap">◎</div>
<h3 className="feat-title">
            Sub-12ms
            <br/>
            response
          </h3>
<div className="feat-donut">
<svg height="80" viewbox="0 0 80 80" width="80">
<circle className="donut-track" cx="40" cy="40" r="35"></circle>
<circle className="donut-fill" cx="40" cy="40" r="35"></circle>
</svg>
<div className="feat-donut-label">75%</div>
</div>
<p className="feat-body" style={{fontSize: '11px'}}>
            Faster than industry avg.
          </p>
</div>
<div className="feat-card reveal" style={{transitionDelay: '0.2s'}}>
<div className="feat-num">03</div>
<div className="feat-icon-wrap">⟳</div>
<h3 className="feat-title">
            Zero-downtime
            <br/>
            deploys
          </h3>
<div className="feat-flow">
<div className="flow-line"></div>
<div className="flow-line"></div>
<div className="flow-line"></div>
</div>
<p className="feat-body" style={{fontSize: '11px'}}>
            Blue-green deploys with instant rollback.
          </p>
</div>
<div className="feat-card reveal" style={{transitionDelay: '0.3s'}}>
<div className="feat-num">04</div>
<div className="feat-icon-wrap">⊞</div>
<h3 className="feat-title">
            Unified
            <br/>
            observability
          </h3>
<p className="feat-body" style={{fontSize: '11px', marginTop: '12px'}}>
            Full traces, cost breakdowns, and anomaly detection in one
            dashboard.
          </p>
</div>
<div className="feat-card reveal" style={{background: 'rgba(168, 240, 232, 0.03)', transitionDelay: '0s'}}>
<div className="feat-num">05</div>
<div className="feat-icon-wrap" style={{borderColor: 'rgba(168,240,232,.2)'}}>
            ⬡
          </div>
<h3 className="feat-title" style={{color: 'var(--ice)'}}>
            Edge-native
            <br/>
            everywhere
          </h3>
<p className="feat-body" style={{fontSize: '11px', marginTop: '12px'}}>
            Deploy to 200+ PoPs. Your users never notice the latency cliff.
          </p>
</div>
</div>
</section>

<section className="bento">
<p className="section-tag">In the wild</p>
<div className="bento-grid">
<div className="bento-cell b-big reveal" data-tilt="" style={{transitionDelay: '0.1s'}}>
<img alt="Server infrastructure" className="bento-img" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ee0afe2-e108-42af-a584-d4ebcd1ec4a1_1600w.png"/>
<div className="bento-tint"></div>
<div className="bento-scan"></div>
<div className="bento-arrow">→</div>
<div className="bento-meta">
<p className="bento-kicker">Infrastructure</p>
<h3 className="bento-title">Global edge network</h3>
<p className="bento-desc">
              200+ points of presence routing every request to the nearest
              available model endpoint, automatically.
            </p>
</div>
</div>
<div className="bento-cell b-stat reveal" style={{transitionDelay: '0.2s'}}>
<div>
<div className="b-stat-num">
              4.2
              <span>B</span>
</div>
<p className="b-stat-label">Requests / month</p>
</div>
<div className="b-stat-spark">
<div className="b-spark-bar" style={{height: '30%'}}></div>
<div className="b-spark-bar" style={{height: '45%'}}></div>
<div className="b-spark-bar" style={{height: '38%'}}></div>
<div className="b-spark-bar" style={{height: '62%'}}></div>
<div className="b-spark-bar" style={{height: '55%'}}></div>
<div className="b-spark-bar" style={{height: '78%'}}></div>
<div className="b-spark-bar" style={{height: '70%'}}></div>
<div className="b-spark-bar" style={{height: '92%'}}></div>
</div>
</div>
<div className="bento-cell reveal" data-tilt="" style={{transitionDelay: '0.3s'}}>
<img alt="Analytics dashboard" className="bento-img" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e7bbf0b-fdb2-4a02-b8c8-46266e9f30d4_800w.webp"/>
<div className="bento-tint"></div>
<div className="bento-scan"></div>
<div className="bento-arrow">→</div>
<div className="bento-meta">
<p className="bento-kicker">Observability</p>
<h3 className="bento-title">Live dashboards</h3>
</div>
</div>
<div className="bento-cell b-tall reveal" data-tilt="" style={{transitionDelay: '0s'}}>
<img alt="Network cables" className="bento-img" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/225dd491-fdd9-474d-8947-f3c72f370d67/800w.jpg"/>
<div className="bento-tint"></div>
<div className="bento-scan"></div>
<div className="bento-arrow">→</div>
<div className="bento-meta">
<p className="bento-kicker">Security</p>
<h3 className="bento-title">SOC 2 Type II certified</h3>
<p className="bento-desc">
              End-to-end encryption, zero data retention modes, and on-prem
              deployment for regulated industries.
            </p>
</div>
</div>
<div className="bento-cell b-quote reveal" style={{transitionDelay: '0.1s'}}>
<div className="b-quote-mark">"</div>
<p className="b-quote-text">
            Vektor is the missing layer between our product and every AI
            provider.
          </p>
<p className="b-quote-who">CTO · Bastion AI</p>
</div>
<div className="bento-cell b-wide reveal" data-tilt="" style={{transitionDelay: '0.2s'}}>
<img alt="Code on screen" className="bento-img" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/502c4b24-fa28-45d3-94da-4346703e446b_1600w.jpg"/>
<div className="bento-tint"></div>
<div className="bento-scan"></div>
<div className="bento-arrow">→</div>
<div className="bento-meta">
<p className="bento-kicker">Developer experience</p>
<h3 className="bento-title">One SDK, every model</h3>
<p className="bento-desc">
              Type-safe clients for TypeScript, Python, Go, and Rust. Switch
              providers with a one-line change.
            </p>
</div>
</div>
</div>
</section>

<section className="how">
<div className="how-inner">
<div className="how-left">
<div className="section-tag reveal" style={{transitionDelay: '0.3s'}}>
            How it works
          </div>
<h2 className="how-big reveal" style={{transitionDelay: '0s'}}>
            Simple
            <br/>
            by
            <em>design</em>
</h2>
<p className="how-desc reveal" style={{transitionDelay: '0.1s'}}>
            Four steps from zero to production-grade AI infrastructure. No PhD
            required.
          </p>
</div>
<div className="steps">
<div className="step reveal" style={{transitionDelay: '0.2s'}}>
<div className="step-idx">01</div>
<div className="step-content">
<p className="step-label">Connect</p>
<h3 className="step-title scramble" data-text="Install the SDK">
                Install the SDK
              </h3>
<p className="step-body">
                One npm install. Our SDK auto-discovers your runtime and
                configures itself. No YAML, no infra tickets.
              </p>
<div className="step-bar"></div>
</div>
</div>
<div className="step reveal" style={{transitionDelay: '0.3s'}}>
<div className="step-idx">02</div>
<div className="step-content">
<p className="step-label">Configure</p>
<h3 className="step-title scramble" data-text="Define your models">
                Define your models
              </h3>
<p className="step-body">
                Declare which models you want access to. We handle auth, rate
                limiting, and fallback routing automatically.
              </p>
<div className="step-bar"></div>
</div>
</div>
<div className="step reveal" style={{transitionDelay: '0s'}}>
<div className="step-idx">03</div>
<div className="step-content">
<p className="step-label">Ship</p>
<h3 className="step-title scramble" data-text="Deploy anywhere">
                Deploy anywhere
              </h3>
<p className="step-body">
                Push to any cloud, edge runtime, or on-prem server. Vektor
                follows your existing CI/CD pipeline.
              </p>
<div className="step-bar"></div>
</div>
</div>
<div className="step reveal" style={{transitionDelay: '0.1s'}}>
<div className="step-idx">04</div>
<div className="step-content">
<p className="step-label">Observe</p>
<h3 className="step-title scramble" data-text="Monitor &amp; optimize">
                Monitor &amp; optimize
              </h3>
<p className="step-body">
                Full cost attribution, latency heatmaps, and anomaly alerts.
                Know exactly what your AI is spending and why.
              </p>
<div className="step-bar"></div>
</div>
</div>
</div>
</div>
</section>

<div className="logos-section">
<p className="logos-label">Trusted by engineering teams at</p>
<div className="logos-tape">
<div className="logo-cell">
<span className="logo-name">Stripe</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Notion</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Linear</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Vercel</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Figma</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Loom</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Supabase</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Retool</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Codeium</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Runway</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Stripe</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Notion</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Linear</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Vercel</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Figma</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Loom</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Supabase</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Retool</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Codeium</span>
<span className="logo-dot"></span>
</div>
<div className="logo-cell">
<span className="logo-name">Runway</span>
<span className="logo-dot"></span>
</div>
</div>
</div>

<div className="diagonal-section">
<div className="diagonal-inner">
<div className="diagonal-text reveal" style={{transitionDelay: '0.2s'}}>
<h2 className="diagonal-headline">
            One SDK.
            <br/>
<em>Infinite</em>
<br/>
            models.
          </h2>
<p className="diagonal-body">
            Stop rewriting integrations every time a new frontier model drops.
            Vektor's unified SDK abstracts provider differences so you stay
            focused on product — not plumbing.
          </p>
<a className="btn-primary" href="#" style={{marginTop: '28px', display: 'inline-flex'}}>
            Read the docs →
          </a>
</div>
<div className="terminal reveal" style={{transitionDelay: '0.3s'}}>
<div className="term-bar">
<div className="term-dot" style={{background: '#ff5f57'}}></div>
<div className="term-dot" style={{background: '#febc2e'}}></div>
<div className="term-dot" style={{background: '#28c840'}}></div>
<span style={{fontSize: '11px', color: 'rgba(242,237,230,.2)', marginLeft: '8px'}}>
              vektor.init
            </span>
</div>
<div className="term-body">
<div>
<span className="term-prompt">$</span>
<span className="term-cmd">npm install @vektor/sdk</span>
</div>
<div className="term-out">✓ Installed in 0.4s</div>
<div style={{marginTop: '8px'}}>
<span className="term-prompt">›</span>
<span className="term-cmd">import Vektor from '@vektor/sdk'</span>
</div>
<div>
<span className="term-prompt">›</span>
<span className="term-cmd">const vk = new Vektor({ key })</span>
</div>
<div style={{marginTop: '8px'}}>
<span className="term-prompt">›</span>
<span className="term-cmd">await vk.run('gpt-4o', prompt)</span>
</div>
<div className="term-out">← { tokens: 412, ms: 11, cost: $0.002 }</div>
<div style={{marginTop: '8px'}}>
<span className="term-prompt">›</span>
<span className="term-cursor"></span>
</div>
</div>
</div>
</div>
</div>

<section className="integrations">
<div className="integ-inner">
<div className="integ-text">
<div className="section-tag reveal" style={{transitionDelay: '0s'}}>
            Integrations
          </div>
<h2 className="integ-headline reveal" style={{transitionDelay: '0.1s'}}>
            Every model.
            <br/>
<em>One</em>
            hub.
          </h2>
<p className="integ-body reveal" style={{transitionDelay: '0.2s'}}>
            Connect to every major AI provider through a single endpoint. Switch
            models mid-flight without touching your application code.
          </p>
<div className="integ-chips reveal" style={{transitionDelay: '0.3s'}}>
<span className="chip">OpenAI</span>
<span className="chip">Anthropic</span>
<span className="chip">Gemini</span>
<span className="chip">Mistral</span>
<span className="chip">Llama 3</span>
<span className="chip">Cohere</span>
<span className="chip">Grok</span>
<span className="chip">Groq</span>
<span className="chip">+ 40 more</span>
</div>
</div>
<div className="integ-viz reveal" id="integViz" style={{transitionDelay: '0s'}}>
<svg className="integ-svg" fill="none" id="integSvg" viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">

<circle className="pulse-ring" cx="200" cy="200" r="20"></circle>
<circle className="pulse-ring" cx="200" cy="200" r="20"></circle>
<circle className="pulse-ring" cx="200" cy="200" r="20"></circle>

<path className="node-path" d="M200,200 L200,60" id="np0"></path>
<path className="node-path" d="M200,200 L318,130" id="np1"></path>
<path className="node-path" d="M200,200 L340,200" id="np2"></path>
<path className="node-path" d="M200,200 L318,270" id="np3"></path>
<path className="node-path" d="M200,200 L200,340" id="np4"></path>
<path className="node-path" d="M200,200 L82,270" id="np5"></path>
<path className="node-path" d="M200,200 L60,200" id="np6"></path>
<path className="node-path" d="M200,200 L82,130" id="np7"></path>

<g className="node-group" data-label="OpenAI">
<circle className="node-circle" cx="200" cy="60" r="28"></circle>
<text className="node-label" x="200" y="60">OpenAI</text>
</g>
<g className="node-group" data-label="Gemini">
<circle className="node-circle" cx="318" cy="130" r="28"></circle>
<text className="node-label" x="318" y="130">Gemini</text>
</g>
<g className="node-group" data-label="Cohere">
<circle className="node-circle" cx="340" cy="200" r="28"></circle>
<text className="node-label" x="340" y="200">Cohere</text>
</g>
<g className="node-group" data-label="Llama">
<circle className="node-circle" cx="318" cy="270" r="28"></circle>
<text className="node-label" x="318" y="270">Llama</text>
</g>
<g className="node-group" data-label="Mistral">
<circle className="node-circle" cx="200" cy="340" r="28"></circle>
<text className="node-label" x="200" y="340">Mistral</text>
</g>
<g className="node-group" data-label="Groq">
<circle className="node-circle" cx="82" cy="270" r="28"></circle>
<text className="node-label" x="82" y="270">Groq</text>
</g>
<g className="node-group" data-label="Grok">
<circle className="node-circle" cx="60" cy="200" r="28"></circle>
<text className="node-label" x="60" y="200">Grok</text>
</g>
<g className="node-group" data-label="Claude">
<circle className="node-circle" cx="82" cy="130" r="28"></circle>
<text className="node-label" x="82" y="130">Claude</text>
</g>

<circle className="node-center" cx="200" cy="200" r="32"></circle>
<text className="node-center-label" x="200" y="200">VEKTR</text>
</svg>
</div>
</div>
</section>

<section className="metrics">
<div className="metrics-inner">
<div className="metric-cell reveal" style={{transitionDelay: '0.1s'}}>
<div className="metric-bg">01</div>
<span className="metric-n" data-display="4.2B+" data-suffix="B+" data-target="4200000000">
            4.2B+
          </span>
<p className="metric-label">Requests served</p>
<p className="metric-sub">Last 30 days across all regions</p>
</div>
<div className="metric-cell reveal" style={{transitionDelay: '0.2s'}}>
<div className="metric-bg">02</div>
<span className="metric-n" data-display="99.98%" data-suffix="%" data-target="99.98">
            99.98%
          </span>
<p className="metric-label">Platform uptime</p>
<p className="metric-sub">12-month rolling average</p>
</div>
<div className="metric-cell reveal" style={{transitionDelay: '0.3s'}}>
<div className="metric-bg">03</div>
<span className="metric-n" data-display="11ms" data-suffix="ms" data-target="11">
<span className="metric-unit">&lt;</span>
            11ms
          </span>
<p className="metric-label">Median latency</p>
<p className="metric-sub">p50 globally, edge-routed</p>
</div>
<div className="metric-cell reveal" style={{transitionDelay: '0s'}}>
<div className="metric-bg">04</div>
<span className="metric-n" data-display="380+" data-suffix="+" data-target="380">
            380+
          </span>
<p className="metric-label">Enterprise teams</p>
<p className="metric-sub">From seed to Fortune 500</p>
</div>
</div>
</section>

<section className="process">
<div className="process-header">
<div className="section-tag reveal" style={{transitionDelay: '0.1s'}}>
          The workflow
        </div>
<h2 className="process-headline reveal" style={{transitionDelay: '0.2s'}}>
          From idea to
          <br/>
<em>production</em>
          fast
        </h2>
</div>
<div className="process-track-wrap" id="processTrack" style={{cursor: 'grab'}}>
<div className="process-track">
<div className="process-card">
<div className="process-card-num">01</div>
<div className="process-icon">
<svg height="48" viewbox="0 0 48 48" width="48">
<circle className="pi-circle" cx="24" cy="24" r="20"></circle>
<path className="pi-arc" d="M24,4 A20,20 0 0,1 44,24"></path>
</svg>
</div>
<p className="process-card-step">Step one</p>
<h3 className="process-card-title">Architect your pipeline</h3>
<p className="process-card-body">
              Map your AI use-cases to Vektor's pipeline primitives. Route,
              chain, and parallelize model calls using a declarative graph
              syntax.
            </p>
</div>
<div className="process-arrow">→</div>
<div className="process-card">
<div className="process-card-num">02</div>
<div className="process-icon">
<svg className="" height="48" viewbox="0 0 48 48" width="48">
<circle className="pi-circle" cx="24" cy="24" r="20"></circle>
<path className="pi-arc" d="M24,4 A20,20 0 0,1 44,24 A20,20 0 0,1 24,44"></path>
</svg>
</div>
<p className="process-card-step">Step two</p>
<h3 className="process-card-title">Integrate in minutes</h3>
<p className="process-card-body">
              Drop in our SDK and call
              <code style={{color: 'var(--acid)', fontSize: '10px'}}>vk.run()</code>
              . Vektor handles auth, retries, and fallbacks across every
              provider automatically.
            </p>
</div>
<div className="process-arrow">→</div>
<div className="process-card">
<div className="process-card-num">03</div>
<div className="process-icon">
<svg height="48" viewbox="0 0 48 48" width="48">
<circle className="pi-circle" cx="24" cy="24" r="20"></circle>
<path className="pi-arc" d="M24,4 A20,20 0 1,1 23.9,4"></path>
</svg>
</div>
<p className="process-card-step">Step three</p>
<h3 className="process-card-title">Test with confidence</h3>
<p className="process-card-body">
              Replay production traces in staging. Regression-test prompt
              changes before they touch users. Catch quality drifts
              automatically.
            </p>
</div>
<div className="process-arrow">→</div>
<div className="process-card">
<div className="process-card-num">04</div>
<div className="process-icon">
<svg height="48" viewbox="0 0 48 48" width="48">
<circle className="pi-circle" cx="24" cy="24" r="20"></circle>
<path className="pi-arc" d="M4,24 A20,20 0 0,1 44,24"></path>
</svg>
</div>
<p className="process-card-step">Step four</p>
<h3 className="process-card-title">Deploy to the edge</h3>
<p className="process-card-body">
              One command deploys your pipeline to 200+ global PoPs. Requests
              automatically route to the closest available model endpoint.
            </p>
</div>
<div className="process-arrow">→</div>
<div className="process-card" style={{background: 'rgba(212,255,71,.04)'}}>
<div className="process-card-num">05</div>
<div className="process-icon">
<svg height="48" viewbox="0 0 48 48" width="48">
<circle className="pi-circle" cx="24" cy="24" r="20"></circle>
<path className="pi-arc" d="M24,4 A20,20 0 1,1 24,44 A20,20 0 1,1 24,4" stroke="var(--acid)"></path>
</svg>
</div>
<p className="process-card-step">Step five</p>
<h3 className="process-card-title">Observe everything</h3>
<p className="process-card-body">
              Live dashboards show token spend, latency percentiles, and error
              rates. Anomaly alerts fire before users notice anything is wrong.
            </p>
</div>
</div>
</div>
</section>

<section className="testimonials">
<div className="testi-header">
<div className="section-tag" style={{display: 'inline-flex', marginBottom: '16px'}}>
          What teams say
        </div>
<h2 className="testi-headline">
          Loved by
          <br/>
<em className="">builders</em>
</h2>
</div>
<div className="testi-cols" style={{maskImage: 'linear-gradient(180deg, transparent, black 35%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 35%, black 60%, transparent)'}}>
<div className="testi-col testi-col-a" id="colA">
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "Vektor cut our model integration work from weeks to hours. We now
              ship AI features in a single sprint."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Alicia Torres" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1574eec9-016e-40cc-8d2d-04de1c9cc1b0_800w.png"/>
</div>
<div>
<p className="testi-name">Alicia Torres</p>
<p className="testi-role">VP Eng · Runway</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "The routing intelligence is genuinely magic. We stopped
              overpaying for GPT-4 on tasks that Haiku handles just fine."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="James Osei" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/533a16b9-9e5e-49d1-a4ea-83f9178889ff_320w.png"/>
</div>
<div>
<p className="testi-name">James Osei</p>
<p className="testi-role">Staff Eng · Linear</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "Finally, an AI infra layer that doesn't make me feel like I'm
              gluing 12 things together with duct tape."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Yuna Park" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72adc0f8-ad1f-4732-a5bf-c000b45152a2_320w.webp"/>
</div>
<div>
<p className="testi-name">Yuna Park</p>
<p className="testi-role">CTO · Bastion AI</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "The observability alone is worth the price. We caught a prompt
              regression before it hit 1% of users."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Marcus Webb" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec6a5cab-715c-44c6-9cd8-aff440c886f6_320w.webp"/>
</div>
<div>
<p className="testi-name">Marcus Webb</p>
<p className="testi-role">Lead Eng · Notion</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "Vektor cut our model integration work from weeks to hours. We now
              ship AI features in a single sprint."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Alicia Torres" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fc26ef9-ae15-4f56-ac63-077c7659dafa_320w.png"/>
</div>
<div>
<p className="testi-name">Alicia Torres</p>
<p className="testi-role">VP Eng · Runway</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "The routing intelligence is genuinely magic. We stopped
              overpaying for GPT-4 on tasks that Haiku handles just fine."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="James Osei" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8434c85-a821-467d-8899-e9f0d5e32184_320w.webp"/>
</div>
<div>
<p className="testi-name">James Osei</p>
<p className="testi-role">Staff Eng · Linear</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "Finally, an AI infra layer that doesn't make me feel like I'm
              gluing 12 things together with duct tape."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Yuna Park" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp"/>
</div>
<div>
<p className="testi-name">Yuna Park</p>
<p className="testi-role">CTO · Bastion AI</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "The observability alone is worth the price. We caught a prompt
              regression before it hit 1% of users."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Marcus Webb" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03517ac1-a924-43ae-88b0-64089e9abe04_320w.webp"/>
</div>
<div>
<p className="testi-name">Marcus Webb</p>
<p className="testi-role">Lead Eng · Notion</p>
</div>
</div>
</div>
</div>
<div className="testi-col testi-col-b" id="colB">
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "Switched from rolling our own router to Vektor in an afternoon.
              Best afternoon of my engineering career."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Priya Mehta" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a47fdc81-bd26-49ad-af4d-e2e22283b996_320w.png"/>
</div>
<div>
<p className="testi-name">Priya Mehta</p>
<p className="testi-role">Founding Eng · Codeium</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "Edge routing means our EU customers stopped complaining about
              latency. That's worth more than the subscription."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Felix Braun" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf728e3d-89a4-468d-96e5-d2d55f70e406_320w.webp"/>
</div>
<div>
<p className="testi-name">Felix Braun</p>
<p className="testi-role">Principal Eng · Loom</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "We A/B test prompt variants across models using Vektor's traffic
              splitting. The ROI visibility is incredible."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Sofia Andrade" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd0dc97c-a094-49ac-8265-f47f1efa3939_320w.webp"/>
</div>
<div>
<p className="testi-name">Sofia Andrade</p>
<p className="testi-role">AI Eng · Retool</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "The zero-config fallback routing has saved us three times during
              OpenAI outages. Customers never noticed."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Chen Wei" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/152b527e-f3bb-44db-98a8-e224a84a1318_320w.webp"/>
</div>
<div>
<p className="testi-name">Chen Wei</p>
<p className="testi-role">Platform Eng · Supabase</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "Switched from rolling our own router to Vektor in an afternoon.
              Best afternoon of my engineering career."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Priya Mehta" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23c92345-65be-44d2-b48a-3073db88554d_320w.webp"/>
</div>
<div>
<p className="testi-name">Priya Mehta</p>
<p className="testi-role">Founding Eng · Codeium</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "Edge routing means our EU customers stopped complaining about
              latency. That's worth more than the subscription."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Felix Braun" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp"/>
</div>
<div>
<p className="testi-name">Felix Braun</p>
<p className="testi-role">Principal Eng · Loom</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "We A/B test prompt variants across models using Vektor's traffic
              splitting. The ROI visibility is incredible."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Sofia Andrade" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9f2a6f7-f473-484f-9db4-504cae45afd1_320w.webp"/>
</div>
<div>
<p className="testi-name">Sofia Andrade</p>
<p className="testi-role">AI Eng · Retool</p>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars">★★★★★</div>
<p className="testi-quote">
              "The zero-config fallback routing has saved us three times during
              OpenAI outages. Customers never noticed."
            </p>
<div className="testi-author">
<div className="testi-avatar">
<img alt="Chen Wei" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg"/>
</div>
<div>
<p className="testi-name">Chen Wei</p>
<p className="testi-role">Platform Eng · Supabase</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pricing" id="pricing">
<div className="section-tag">Simple pricing</div>
<h2 className="pricing-headline tracking-tight" style={{fontWeight: '500'}}>
        Build your
        <br/>
<em style={{fontWeight: '400'}}>perfect</em>
        plan
      </h2>
<p className="pricing-sub">
        Slide to estimate your usage. We pick the right tier. No surprises.
      </p>
<div className="pricing-toggle" id="pricingToggle" style={{fontWeight: '500'}}>
        Monthly
        <div className="toggle-track" id="toggleTrack">
<div className="toggle-thumb"></div>
</div>
        Annual
        <span className="toggle-save">Save 20%</span>
</div>
<div className="pricing-layout" id="pricingLayout">
<canvas height="514" id="priceCanvas" width="1416"></canvas>

<div className="price-calc">
<p className="calc-title tracking-tight" style={{fontWeight: '500'}}>
            Usage estimator
          </p>
<div>
<div className="calc-label" style={{fontWeight: '500'}}>
              Monthly tokens
              <span className="calc-val" id="tokenVal">10M</span>
</div>
<input className="calc-range" id="tokenSlider" max="100" min="0" type="range" value="20"/>
<div className="calc-ticks">
<span className="calc-tick">1M</span>
<span className="calc-tick">50M</span>
<span className="calc-tick">500M</span>
<span className="calc-tick">∞</span>
</div>
</div>
<div>
<div className="calc-label" style={{fontWeight: '500'}}>
              Team seats
              <span className="calc-val" id="seatVal">3</span>
</div>
<input className="calc-range" id="seatSlider" max="50" min="1" type="range" value="3"/>
<div className="calc-ticks">
<span className="calc-tick">1</span>
<span className="calc-tick">10</span>
<span className="calc-tick">25</span>
<span className="calc-tick">50+</span>
</div>
</div>
<div className="calc-result" id="calcResult">
<p className="calc-result-label" style={{fontWeight: '500'}}>
              Estimated monthly
            </p>
<div className="calc-result-amt tracking-tight" style={{fontWeight: '500'}}>
<span className="calc-result-currency">$</span>
<span className="rolling" id="calcPrice">147</span>
</div>
<p className="calc-result-per" id="calcPer">per month</p>
<div className="calc-plan-badge" id="calcBadge" style={{fontWeight: '500'}}>
              Pro plan
            </div>
</div>
</div>

<div className="w-full" style={{maxWidth: '100%', overflow: 'hidden'}}>
<div className="price-cards-area overflow-x-auto w-full" id="priceCardsArea" style={{cursor: 'grab', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', paddingBottom: '1rem', scrollbarWidth: 'thin'}}>
<div className="price-cards-track flex" style={{display: 'flex', gap: '1.5rem', minWidth: 'max-content'}}>
<div className="price-card-v shrink-0 snap-start" data-plan="starter" id="row-starter" style={{flexShrink: '0', scrollSnapAlign: 'start'}}>
<div className="beam" style={{animation: 'auto ease 0s 1 normal none running none'}}></div>
<span className="pcv-badge">Recommended</span>
<p className="pcv-tier tracking-tight" style={{fontWeight: '500'}}>
                  Starter
                </p>
<div className="pcv-amt tracking-tight" style={{fontWeight: '500'}}>
<span className="pcv-dollar">$</span>
<span id="p-starter">0</span>
</div>
<p className="pcv-period">free forever</p>
<div className="pcv-divider"></div>
<div className="pcv-features">
<div className="prf">
<span className="prf-dot"></span>
                    1M tokens / month
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    3 model providers
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    Community support
                  </div>
<div className="prf prf-muted">
<span className="prf-dot"></span>
                    Edge deployment
                  </div>
</div>
<a className="pcv-btn" href="#" style={{fontWeight: '500'}}>
                  Get started
                </a>
</div>
<div className="price-card-v shrink-0 snap-start active" data-plan="pro" id="row-pro" style={{flexShrink: '0', scrollSnapAlign: 'start'}}>
<div className="beam" style={{animation: 'auto ease 0s 1 normal none running none'}}></div>
<span className="pcv-badge">Recommended</span>
<p className="pcv-tier tracking-tight" style={{fontWeight: '500'}}>
                  Pro
                </p>
<div className="pcv-amt tracking-tight" style={{fontWeight: '500'}}>
<span className="pcv-dollar">$</span>
<span id="p-pro">49</span>
</div>
<p className="pcv-period" id="period-pro">per seat / mo</p>
<div className="pcv-divider"></div>
<div className="pcv-features">
<div className="prf">
<span className="prf-dot"></span>
                    50M tokens / month
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    All model providers
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    Priority support
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    Edge deployment
                  </div>
</div>
<a className="pcv-btn" href="#" style={{fontWeight: '500'}}>
                  Start trial
                </a>
</div>
<div className="price-card-v shrink-0 snap-start" data-plan="team" id="row-team" style={{flexShrink: '0', scrollSnapAlign: 'start'}}>
<div className="beam" style={{animation: 'auto ease 0s 1 normal none running none'}}></div>
<span className="pcv-badge">Recommended</span>
<p className="pcv-tier tracking-tight" style={{fontWeight: '500'}}>
                  Team
                </p>
<div className="pcv-amt tracking-tight" style={{fontWeight: '500'}}>
<span className="pcv-dollar">$</span>
<span id="p-team">199</span>
</div>
<p className="pcv-period" id="period-team">up to 10 seats / mo</p>
<div className="pcv-divider"></div>
<div className="pcv-features">
<div className="prf">
<span className="prf-dot"></span>
                    200M tokens / month
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    Shared workspace
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    SSO + audit logs
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    99.95% SLA
                  </div>
</div>
<a className="pcv-btn" href="#" style={{fontWeight: '500'}}>
                  Start trial
                </a>
</div>
<div className="price-card-v enterprise shrink-0 snap-start" data-plan="enterprise" id="row-enterprise" style={{flexShrink: '0', scrollSnapAlign: 'start'}}>
<div className="beam" style={{animation: 'auto ease 0s 1 normal none running none'}}></div>
<span className="pcv-badge">Recommended</span>
<p className="pcv-tier tracking-tight" style={{fontWeight: '500'}}>
                  Enterprise
                </p>
<div className="pcv-amt tracking-tight" style={{fontWeight: '500'}}>
<span id="p-enterprise">Custom</span>
</div>
<p className="pcv-period">volume pricing</p>
<div className="pcv-divider"></div>
<div className="pcv-features">
<div className="prf">
<span className="prf-dot"></span>
                    Unlimited tokens
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    Dedicated infra + on-prem
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    24/7 support + SLA
                  </div>
<div className="prf">
<span className="prf-dot"></span>
                    Custom contracts
                  </div>
</div>
<a className="pcv-btn" href="#" style={{fontWeight: '500'}}>
                  Talk to sales
                </a>
</div>
</div>
</div>
<div className="price-scroll-hint" style={{fontWeight: '500'}}>
            Drag or scroll
            <svg fill="none" height="10" viewbox="0 0 14 10" width="14">
<path d="M1 5h11M9 1.5L12.5 5 9 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="cta-section">
<div className="cta-bg">
<div className="cta-orb"></div>
<div className="cta-orb"></div>
<div className="cta-orb"></div>
</div>
<div className="cta-scan"></div>
<div className="cta-ghost">SHIP</div>
<div className="cta-inner">
<div className="cta-tag">Now in public beta</div>
<h2 className="cta-big">
          The last
          <br/>
          AI infra
          <br/>
          you'll
          <em>ever</em>
          need
        </h2>
<p className="cta-sub">
          Join 380+ engineering teams who've standardized on Vektor. Start free,
          scale without limits.
        </p>
<div className="cta-actions">
<a className="btn-primary" href="#">Start for free — no credit card</a>
<a className="btn-draw" href="#">
<span className="edge-t"></span>
<span className="edge-b"></span>
            Schedule a demo
          </a>
</div>
</div>
</section>

<footer>
<div className="foot-logo">
        VEKT
        <span>◉</span>
        R
      </div>
<p className="foot-copy">© 2025 Vektor Inc. All rights reserved.</p>
<ul className="foot-links">
<li><a href="#">Privacy</a></li>
<li><a href="#">Terms</a></li>
<li><a href="#">Status</a></li>
<li><a href="#">GitHub</a></li>
</ul>
</footer>







    </>
  );
}
