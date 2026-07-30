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



    const globe = document.getElementById('globe');
    const controls = {
      shape: document.getElementById('shape'),
      color: document.getElementById('color'),
      dotsize: document.getElementById('dotsize'),
      radius: document.getElementById('radius'),
      numdots: document.getElementById('numdots'),
      rotspeed: document.getElementById('rotspeed'),
      breath: document.getElementById('breath')
    };
    const valDisp = {
      dotsize: document.getElementById('dotsize-val'),
      radius: document.getElementById('radius-val'),
      numdots: document.getElementById('numdots-val'),
      rotspeed: document.getElementById('rotspeed-val'),
      breath: document.getElementById('breath-val')
    };
    function updateValDisp() {
      valDisp.dotsize.textContent = controls.dotsize.value + 'px';
      valDisp.radius.textContent = controls.radius.value;
      valDisp.numdots.textContent = controls.numdots.value;
      valDisp.rotspeed.textContent = (+controls.rotspeed.value).toFixed(2);
      valDisp.breath.textContent = (+controls.breath.value).toFixed(2);
    }
    Object.keys(valDisp).forEach(k => {
      controls[k].addEventListener('input', updateValDisp);
    });
    updateValDisp();
    let dotColor="#fff", dotSize=1.5, globeRadius=140,
        globeShape="globe", numDots=250, rotationSpeed=0.44, breathingSpeed=1.4;
    let dots = [], positions = [], breathInterval=null;

    function createDots() {
      globe.innerHTML='';
      dots=[],positions=[];
      let N=numDots,R=globeRadius,shape=globeShape;
      if(shape==="globe"||shape==="oval"){
        for(let i=0;i<N;i++){
          let y=1-(i/(N-1))*2,r=Math.sqrt(1-y*y),
            t=Math.PI*(3-Math.sqrt(5))*i,x=Math.cos(t)*r,z=Math.sin(t)*r;
          if(shape==="oval")y*=.6;
          positions.push({x,y,z});
        }
      } else if(shape==="disc"){
        for(let i=0;i<N;i++){
          let t=(i/N)*2*Math.PI, r=Math.sqrt(i/N);
          positions.push({x:r*Math.cos(t),y:0,z:r*Math.sin(t)});
        }
      } else if(shape==="coil"){
        let loops=6;
        for(let i=0;i<N;i++){
          let f=i/(N-1),a=f*loops*2*Math.PI,r=0.84,y=1-2*f;
          positions.push({x:r*Math.cos(a),y:y*0.8,z:r*Math.sin(a)});
        }
      }
      for(let i=0;i<N;i++){
        let d=document.createElement('div');
        d.className='dot';
        d.style.width=d.style.height=dotSize+'px';
        d.style.background=dotColor;
        globe.appendChild(d);
        dots.push(d);
      }
    }
    function randomBreathing() {
      dots.forEach(dot=>dot.classList.remove('active'));
      const n=Math.floor(dots.length/5+Math.random()*dots.length/8),
        indices=Array.from({length:dots.length},(_,i)=>i);
      for(let i=0;i<n;++i){
        const idx=indices.splice(Math.floor(Math.random()*indices.length),1)[0];
        dots[idx].classList.add('active');
      }
    }
    function setBreathInterval() {
      if(breathInterval)clearInterval(breathInterval);
      randomBreathing();
      breathInterval=setInterval(randomBreathing,breathingSpeed*1000);
    }
    let start; function animate(ts){
      if(!start)start=ts;
      const t=(ts-start)/1000,ry=t*rotationSpeed,rx=Math.sin(t*0.35)*0.28,
            sinRy=Math.sin(ry),cosRy=Math.cos(ry),sinRx=Math.sin(rx),cosRx=Math.cos(rx);
      for(let i=0;i<dots.length;i++){
        let {x,y,z}=positions[i],
          x1=cosRy*x-sinRy*z,z1=sinRy*x+cosRy*z,
          y1=cosRx*y-sinRx*z1,z2=sinRx*y+cosRx*z1,
          R=+globeRadius,persp=290/(290+z2*R),
          px=x1*R*persp,py=y1*R*persp,scale=1;
        if(dots[i].classList.contains('active')) scale=2+0.09*Math.sin(ts/400+i);
        dots[i].style.transform=
          `translate(-50%,-50%) translate(${px}px,${py}px) scale(${scale})`;
        dots[i].style.zIndex=100+Math.round(z2*100);
      }
      requestAnimationFrame(animate);
    }
    controls.color.addEventListener('input',e=>{
      dotColor=e.target.value;dots.forEach(dot=>dot.style.background=dotColor);
    });
    controls.dotsize.addEventListener('input',e=>{
      dotSize=+e.target.value;dots.forEach(dot=>{dot.style.width=dot.style.height=dotSize+'px';});
    });
    controls.radius.addEventListener('input',e=>{globeRadius=+e.target.value;});
    controls.rotspeed.addEventListener('input',e=>{rotationSpeed=+e.target.value;});
    controls.breath.addEventListener('input',e=>{breathingSpeed=+e.target.value;setBreathInterval();});
    controls.numdots.addEventListener('input',e=>{numDots=+e.target.value;createDots();setBreathInterval();});
    controls.shape.addEventListener('change',e=>{globeShape=e.target.value;createDots();setBreathInterval();});
    function init(){createDots();setBreathInterval();requestAnimationFrame(animate);}
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
      
<div className="flex w-full h-screen">
<div className="flex-1 flex justify-center items-center relative">
<div className="globe-container" id="globe" style={{width: `310px`, height: `310px`, perspective: `1000px`}}></div>
</div>
<div className="glass-panel w-48 py-5 px-4 flex flex-col gap-2 absolute right-9 top-1/2 -translate-y-1/2">
<label className="glass-label">Shape
        <select className="glass-select w-full mt-1" id="shape">
<option selected value="globe">Globe</option>
<option value="oval">Oval</option>
<option value="disc">Disc</option>
<option value="coil">Spiral</option>
</select>
</label>
<label className="glass-label flex items-center gap-2">Color
        <input className="w-5 h-5 ml-2 rounded-2xl shadow bg-transparent border-0 p-0" id="color" type="color" value="#ffffff" />
</label>
<label className="glass-label">Dot Size
        <span className="glass-value" id="dotsize-val"></span>
<input className="glass-slider" id="dotsize" max="6" min="1" step="0.1" type="range" value="1.5" />
</label>
<label className="glass-label">Radius
        <span className="glass-value" id="radius-val"></span>
<input className="glass-slider" id="radius" max="180" min="80" step="1" type="range" value="140" />
</label>
<label className="glass-label">Dots
        <span className="glass-value" id="numdots-val"></span>
<input className="glass-slider" id="numdots" max="600" min="40" step="1" type="range" value="250" />
</label>
<label className="glass-label">Rotation
        <span className="glass-value" id="rotspeed-val"></span>
<input className="glass-slider" id="rotspeed" max="2" min="0.08" step="0.02" type="range" value="0.44" />
</label>
<label className="glass-label">Breathing
        <span className="glass-value" id="breath-val"></span>
<input className="glass-slider" id="breath" max="4" min="0.4" step="0.02" type="range" value="1.4" />
</label>
</div>
</div>


    </>
  );
}
