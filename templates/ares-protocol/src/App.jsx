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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // LENIS Smooth Scroll
      const lenis = new Lenis({ duration: 1.2, easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);

      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);

      // --- THREE.JS Mars ---
      const container = document.getElementById('canvas-container');
      const hudLayer = document.getElementById('hud-layer');
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a0b);
      const camera = new THREE.PerspectiveCamera(40, container.clientWidth/container.clientHeight, 0.1, 1000);
      camera.position.z = 8;
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const vertexShader = `varying vec2 vUv; varying vec3 vNormal; varying vec3 vPosition;
      void main(){ vUv=uv; vNormal=normalize(normalMatrix*normal); vPosition=(modelViewMatrix*vec4(position,1.0)).xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
      const fragmentShader = `
      uniform vec3 colorPaper; uniform vec3 colorRust; uniform vec3 colorForest; uniform vec3 colorInk;
      uniform float time; uniform float noiseScale; uniform float dustDensity;
      varying vec2 vUv; varying vec3 vNormal; varying vec3 vPosition;
      vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;} vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
      vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);} vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
      float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
      vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
      vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
      vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy; i=mod289(i);
      vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
      float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx; vec4 j=p-49.0*floor(p*ns.z*ns.z);
      vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_); vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy;
      vec4 h=1.0-abs(x)-abs(y); vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
      vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
      vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
      vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
      vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
      p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
      vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
      return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
      void main(){
        vec3 lightDir=normalize(vec3(1.0,0.8,1.0));
        float lightIntensity=dot(vNormal,lightDir);
        float noiseVal=snoise(vPosition*noiseScale+time*0.05);
        vec3 finalColor=colorPaper;
        if(noiseVal>(0.1-(dustDensity*0.5))) finalColor=mix(colorPaper,colorRust,0.5+(dustDensity*0.2));
        if(lightIntensity<0.0) finalColor=mix(finalColor,colorForest,0.75);
        float viewDot=dot(normalize(vNormal),vec3(0,0,1));
        float rim=1.0-max(viewDot,0.0);
        finalColor+=colorInk*pow(rim,6.0)*0.3;
        gl_FragColor=vec4(finalColor,1.0);}`;

      const uniforms = {
        time:{value:0}, noiseScale:{value:2.0}, dustDensity:{value:0.8},
        colorPaper:{value:new THREE.Color('#151516')},
        colorRust:{value:new THREE.Color('#C2A878')},
        colorForest:{value:new THREE.Color('#050505')},
        colorInk:{value:new THREE.Color('#FFFFFF')}
      };
      const geometry = new THREE.IcosahedronGeometry(2.6, 64);
      const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      const pointsOfInterest = [
        { pos: new THREE.Vector3(1.5,1.8,1.2), label:"POLAR CAP ALPHA" },
        { pos: new THREE.Vector3(-0.8,0.5,2.5), label:"VALLES MARINERIS" },
        { pos: new THREE.Vector3(1.2,-1.0,2.2), label:"CRATER JEZERO" }
      ];
      const markers = pointsOfInterest.map((poi,i)=>{
        const el=document.createElement('div');
        el.style.position='absolute'; el.style.pointerEvents='none'; el.style.opacity='0'; el.style.transition='opacity 0.5s';
        el.innerHTML=`<div style="width:4px;height:4px;background:#C2A878;border-radius:50%;box-shadow:0 0 8px #C2A878"></div>
        <div style="position:absolute;top:2px;left:4px;width:40px;height:1px;background:linear-gradient(90deg,#C2A878,transparent);transform-origin:left;transform:rotate(-45deg)"></div>
        <div style="position:absolute;top:-25px;left:35px;white-space:nowrap" class="font-mono text-[10px] text-[#C2A878] tracking-widest font-semibold uppercase">
          <span class="opacity-40 mr-1">0${i+1}</span>${poi.label}</div>`;
        hudLayer.appendChild(el); return { el, pos:poi.pos };
      });

      let autoRotationSpeed = 0.0015;
      let time = 0;
      const sliderRot = document.getElementById('slider-rot');
      const sliderDust = document.getElementById('slider-dust');
      sliderRot.addEventListener('input',(e)=>{ const v=e.target.value/100; autoRotationSpeed=0.0005+(v*0.005); document.getElementById('val-rot').innerText=(v*2).toFixed(1)+'x'; });
      sliderDust.addEventListener('input',(e)=>{ const v=e.target.value/100; uniforms.dustDensity.value=v; document.getElementById('val-dust').innerText=v>0.6?'HIGH':(v>0.3?'MED':'LOW'); });

      function animate(){
        requestAnimationFrame(animate);
        time+=0.005;
        material.uniforms.time.value=time;
        sphere.rotation.y+=autoRotationSpeed;
        renderer.render(scene,camera);
        markers.forEach(m=>{
          const v=m.pos.clone(); v.applyMatrix4(sphere.matrixWorld);
          const isFront=v.z>0; v.project(camera);
          if(v.z<1 && isFront){
            const x=(v.x*.5+.5)*container.clientWidth;
            const y=(v.y*-.5+.5)*container.clientHeight;
            m.el.style.transform=`translate3d(${x}px,${y}px,0)`;
            m.el.style.opacity='1';
          } else { m.el.style.opacity='0'; }
        });
      }
      animate();
      window.addEventListener('resize',()=>{
        camera.aspect=container.clientWidth/container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth,container.clientHeight);
      });

      // Hero intro
      gsap.from('[data-hero-stagger]',{ opacity:0, y:30, duration:1, stagger:0.15, ease:'power3.out', delay:0.2 });

      // Scroll animations
      gsap.utils.toArray('section').forEach((sec)=>{
        const headings = sec.querySelectorAll('h2, h3');
        headings.forEach(h=>{
          gsap.from(h,{ scrollTrigger:{trigger:h, start:'top 85%'}, y:40, opacity:0, duration:1, ease:'power3.out' });
        });
      });

      // Journey sticky phases
      const phases = gsap.utils.toArray('.journey-phase');
      phases.forEach(p=>{
        ScrollTrigger.create({
          trigger: p,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: ()=>updatePhase(p),
          onEnterBack: ()=>updatePhase(p)
        });
        gsap.from(p,{ scrollTrigger:{trigger:p, start:'top 80%'}, y:60, opacity:0, duration:1.2, ease:'power3.out' });
      });
      function updatePhase(el){
        document.getElementById('phase-num').textContent = el.dataset.num;
        document.getElementById('phase-title').textContent = el.dataset.title;
      }

      // Marquee on scroll boost
      gsap.to('.marquee-track',{ x:'-=200', scrollTrigger:{ trigger:'.marquee-track', scrub:1 }});
    


      (function () {
        function playVideo(video) {
          var promise = video.play();
          if (promise && typeof promise.catch === "function") {
            promise.catch(function () {});
          }
        }

        function setupVideo(video) {
          if (video.__auraVideoReady === true) return;
          video.__auraVideoReady = true;
          video.removeAttribute("data-aura-video-ready");
          video.removeAttribute("data-aura-video-played");
          video.muted = true;
          video.playsInline = true;

          var preset = video.dataset.auraVideoPreset || "loop-in-view";
          if (preset === "hover") {
            video.addEventListener("mouseenter", function () {
              playVideo(video);
            });
            video.addEventListener("mouseleave", function () {
              video.pause();
              video.currentTime = 0;
            });
            return;
          }

          if (!("IntersectionObserver" in window)) {
            playVideo(video);
            return;
          }

          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                if (preset === "play-once" && video.__auraVideoPlayed === true) {
                  return;
                }
                playVideo(video);
              } else {
                video.pause();
              }
            });
          }, { threshold: 0.35 });

          if (preset === "play-once") {
            video.addEventListener("ended", function () {
              video.__auraVideoPlayed = true;
            }, { once: true });
          }

          observer.observe(video);
        }

        function setupVideos() {
          document
            .querySelectorAll("video[data-aura-video-preset]")
            .forEach(setupVideo);
        }

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", setupVideos);
        } else {
          setupVideos();
        }
      })();
    


      (function(){function splitWords(el){if(el.dataset.auraSplit==='1')return;var nodes=Array.from(el.childNodes);var frag=document.createDocumentFragment();nodes.forEach(function(node){if(node.nodeType===3){var text=node.textContent;var parts=text.split(/(\s+)/);parts.forEach(function(p){if(p.trim()===''){frag.appendChild(document.createTextNode(p));}else{var span=document.createElement('span');span.className='aura-word';span.textContent=p;frag.appendChild(span);}});}else{frag.appendChild(node);}});el.innerHTML='';el.appendChild(frag);el.dataset.auraSplit='1';}function run(){if(typeof gsap==='undefined')return;var headings=document.querySelectorAll('h1, h2, h3');headings.forEach(function(h){splitWords(h);var words=h.querySelectorAll('.aura-word');if(!words.length)return;gsap.to(words,{opacity:1,filter:'blur(0px)',y:0,duration:0.9,ease:'power3.out',stagger:0.06,scrollTrigger:{trigger:h,start:'top 88%',once:true}});});var paras=document.querySelectorAll('p, li, .font-mono, button, a, .aura-fade-target');paras.forEach(function(el){if(el.closest('nav'))return;if(el.dataset.auraFade==='1')return;el.dataset.auraFade='1';el.classList.add('aura-fade-el');gsap.to(el,{opacity:1,filter:'blur(0px)',y:0,duration:0.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}});});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}})();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 py-5 flex justify-between items-center backdrop-blur-md bg-[#0f0f10]/60 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#C2A878] shadow-[0_0_10px_#C2A878] animate-pulse"></div>
<span className="font-semibold text-xs tracking-[0.3em] uppercase">
          ARES
        </span>
</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
<a className="hover:text-white transition-colors" href="#mission">
          Mission
        </a>
<a className="hover:text-white transition-colors" href="#journey">
          Journey
        </a>
<a className="hover:text-white transition-colors" href="#origin">Origin</a>
<a className="hover:text-white transition-colors" href="#crew">Crew</a>
</div>
<button className="px-5 py-2.5 rounded-full bg-[#C2A878] text-[#0f0f10] text-[10px] font-semibold uppercase tracking-[0.25em] hover:bg-[#d8c8b8] transition-colors">
        Reserve Seat
      </button>
</nav>

<section className="relative min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">

<div className="relative w-full h-[55vh] lg:h-screen lg:flex-1 order-1 overflow-hidden" id="canvas-container">
<video aria-label="Mars surface" className="absolute inset-0 w-full h-full object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0421a7d1-35d9-4506-ac90-8934f53c608b_1600w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779103093167-2fab1ce2-440f-451f-8a34-8d953500119f.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-r from-[#0f0f10]/40 via-transparent to-[#0f0f10]/30"></div>
<div className="absolute top-24 left-8 lg:left-12 z-10 flex items-center gap-3">
<iconify-icon className="text-xl text-[#C2A878]" icon="solar:monitor-camera-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col">
<span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
              Visual Feed
            </span>
<span className="font-mono text-[10px] tracking-[0.3em] uppercase">
              Orbiter-09 // Live
            </span>
</div>
</div>
<div className="absolute bottom-8 left-8 lg:left-12 z-10 font-mono text-[10px] tracking-[0.3em] uppercase text-white/60 space-y-1">
<div>LAT 14.5684° S</div>
<div>LON 175.4726° E</div>
<div>ALT 12,400 KM</div>
</div>
<div className="absolute bottom-8 right-8 lg:right-12 z-10 font-mono text-[10px] tracking-[0.3em] uppercase text-[#C2A878]">
          [ TRANSMISSION OPEN ]
        </div>
</div>

<aside className="w-full lg:w-[480px] lg:h-screen bg-[#0f0f10] lg:border-l border-white/5 flex flex-col z-20 order-2 relative pt-20 lg:pt-24">
<div className="px-8 pb-6 flex flex-col gap-6 border-b border-white/5">
<div className="flex justify-between items-start">
<div className="inline-flex items-center gap-3 bg-[#1a1a1c] px-4 py-2 rounded-full border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#C2A878] shadow-[0_0_10px_#C2A878] animate-pulse"></div>
<span className="font-semibold text-[10px] tracking-[0.3em] uppercase text-white/90">
                Mission 2034 // T-12Y
              </span>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
<div className="space-y-5" data-hero-stagger="">
<span className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#C2A878]">
              A New Earth Awaits
            </span>
<h1 className="font-display text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              MARS
              <br/>
<span className="text-[#C2A878]">Calls.</span>
</h1>
<p className="text-sm text-white/60 leading-relaxed max-w-sm">
              The ARES Protocol opens a permanent corridor between Earth and the
              red planet. Engineered for the first generation of interplanetary
              citizens.
            </p>
<div className="flex flex-wrap gap-3 pt-2">
<button className="px-6 py-4 bg-[#C2A878] text-[#0f0f10] text-[10px] font-semibold uppercase tracking-[0.3em] rounded-2xl hover:bg-[#d8c8b8] transition-transform hover:scale-[1.02]">
                Begin Manifest
              </button>
<button className="px-6 py-4 border border-white/10 text-[10px] font-semibold uppercase tracking-[0.3em] rounded-2xl hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
                Watch Brief
              </button>
</div>
</div>
<div className="bg-[#151516] p-6 rounded-[24px] border border-white/5 space-y-5" data-hero-stagger="">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#888] text-lg" icon="solar:tuning-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] text-[#888] font-mono uppercase tracking-[0.3em]">
                Atmospheric Sim
              </span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] uppercase tracking-[0.25em] text-white/60">
<span>Rotation</span>
<span className="font-mono text-[#C2A878]" id="val-rot">0.4x</span>
</div>
<input className="w-full ares-slider" id="slider-rot" max="100" min="0" type="range" value="20"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] uppercase tracking-[0.25em] text-white/60">
<span>Dust Density</span>
<span className="font-mono text-[#C2A878]" id="val-dust">HIGH</span>
</div>
<input className="w-full ares-slider" id="slider-dust" max="100" min="0" type="range" value="80"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3" data-hero-stagger="">
<div className="bg-[#151516] p-5 rounded-2xl border border-white/5">
<div className="text-[10px] text-[#888] font-mono uppercase tracking-[0.25em] mb-2">
                Gravity
              </div>
<div className="font-mono text-sm">3.721 m/s²</div>
</div>
<div className="bg-[#151516] p-5 rounded-2xl border border-white/5">
<div className="text-[10px] text-[#888] font-mono uppercase tracking-[0.25em] mb-2">
                Avg Temp
              </div>
<div className="font-mono text-sm">-63°C</div>
</div>
</div>
</div>
</aside>
</section>
<style>
      input[type=range].ares-slider { -webkit-appearance:none; background:transparent; }
      input[type=range].ares-slider::-webkit-slider-thumb { -webkit-appearance:none; height:12px; width:12px; border-radius:50%; background:#C2A878; cursor:pointer; margin-top:-5px; box-shadow:0 0 0 2px #0f0f10, 0 0 12px rgba(194,168,120,0.6); }
      input[type=range].ares-slider::-webkit-slider-runnable-track { height:2px; background:rgba(255,255,255,0.1); border-radius:1px; }
      input[type=range].ares-slider:focus { outline:none; }
    </style>

<section className="border-y border-white/5 py-6 overflow-hidden">
<div className="flex marquee-track whitespace-nowrap font-display text-3xl lg:text-5xl">
<span className="px-8 text-white/90">Ad Astra</span>
<span className="px-8 text-[#C2A878]">✦</span>
<span className="px-8 text-white/40">Per Aspera</span>
<span className="px-8 text-[#C2A878]">✦</span>
<span className="px-8 text-white/90">The Red Frontier</span>
<span className="px-8 text-[#C2A878]">✦</span>
<span className="px-8 text-white/40">Beyond Earth</span>
<span className="px-8 text-[#C2A878]">✦</span>
<span className="px-8 text-white/90">Ad Astra</span>
<span className="px-8 text-[#C2A878]">✦</span>
<span className="px-8 text-white/40">Per Aspera</span>
<span className="px-8 text-[#C2A878]">✦</span>
<span className="px-8 text-white/90">The Red Frontier</span>
<span className="px-8 text-[#C2A878]">✦</span>
<span className="px-8 text-white/40">Beyond Earth</span>
<span className="px-8 text-[#C2A878]">✦</span>
</div>
</section>

<section className="py-32 lg:py-48 px-6 lg:px-12 relative" id="mission">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
<div className="max-w-2xl">
<div className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#C2A878] mb-6">
              [ 01 — Capabilities ]
            </div>
<h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
              Engineered for
              <br/>
              the impossible.
            </h2>
</div>
<p className="text-sm text-white/50 max-w-md leading-relaxed">
            Every system on the ARES vessel has been redesigned from first
            principles. No legacy code. No compromises.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="bg-[#1a1a1c] p-8 rounded-[24px] border border-white/5 hover-lift flex flex-col gap-6 min-h-[320px]">
<div className="flex justify-between items-start">
<span className="text-[10px] text-[#888] font-mono uppercase tracking-[0.3em]">
                01 / Propulsion
              </span>
<iconify-icon className="text-[#C2A878] text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-3xl leading-tight mt-auto">
              Fusion-Ion Hybrid Drive
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Reduces transit time to 90 days through continuous thrust
              acceleration.
            </p>
</div>

<div className="bg-[#1a1a1c] p-8 rounded-[24px] border border-white/5 hover-lift flex flex-col gap-6 min-h-[320px]">
<div className="flex justify-between items-start">
<span className="text-[10px] text-[#888] font-mono uppercase tracking-[0.3em]">
                02 / Life Support
              </span>
<iconify-icon className="text-[#C2A878] text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-3xl leading-tight mt-auto">
              Closed-Loop Biome
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              99.6% atmospheric recycling. Hydroponic gardens supply oxygen,
              water, and food.
            </p>
</div>

<div className="bg-[#1a1a1c] p-8 rounded-[24px] border border-white/5 hover-lift flex flex-col gap-6 min-h-[320px]">
<div className="flex justify-between items-start">
<span className="text-[10px] text-[#888] font-mono uppercase tracking-[0.3em]">
                03 / Habitat
              </span>
<iconify-icon className="text-[#C2A878] text-2xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-3xl leading-tight mt-auto">
              Modular Surface Units
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Pre-fabricated habitats deploy autonomously prior to crew arrival.
            </p>
</div>

<div className="bg-[#1a1a1c] p-8 rounded-[24px] border border-white/5 hover-lift flex flex-col gap-6 min-h-[320px]">
<div className="flex justify-between items-start">
<span className="text-[10px] text-[#888] font-mono uppercase tracking-[0.3em]">
                04 / Shielding
              </span>
<iconify-icon className="text-[#C2A878] text-2xl" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-3xl leading-tight mt-auto">
              Magnetospheric Bubble
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Active magnetic field deflects 94% of solar and cosmic radiation.
            </p>
</div>

<div className="bg-gradient-to-br from-[#C2A878] to-[#a0875d] text-[#0f0f10] p-8 rounded-[24px] hover-lift flex flex-col gap-6 min-h-[320px] md:col-span-2 lg:col-span-1">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-70">
                05 / Navigation
              </span>
<iconify-icon className="text-2xl" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-3xl leading-tight mt-auto">
              Autonomous Trajectory AI
            </h3>
<p className="text-sm opacity-70 leading-relaxed">
              Real-time orbital adjustments computed 10,000× per second across
              1,400 variables.
            </p>
</div>

<div className="bg-[#1a1a1c] p-8 rounded-[24px] border border-white/5 hover-lift flex flex-col gap-6 min-h-[320px]">
<div className="flex justify-between items-start">
<span className="text-[10px] text-[#888] font-mono uppercase tracking-[0.3em]">
                06 / Comms
              </span>
<iconify-icon className="text-[#C2A878] text-2xl" icon="solar:signal-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-display text-3xl leading-tight mt-auto">
              Laser Mesh Network
            </h3>
<p className="text-sm text-white/50 leading-relaxed">
              Sub-second latency to Earth via orbital relay satellite
              constellation.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 px-6 lg:px-12 bg-[#0a0a0b] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<div className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#C2A878] mb-6">
            [ 02 — Voices ]
          </div>
<h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight max-w-3xl">
            Trusted by those
            <br/>
            who look up.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="bg-[#1a1a1c] p-8 rounded-[24px] border border-white/5 flex flex-col gap-8 min-h-[340px]">
<iconify-icon className="text-[#C2A878] text-3xl" icon="solar:quote-up-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base leading-relaxed text-white/80">
              "The ARES Protocol isn't a mission. It's a quiet revolution in
              what humans permit themselves to attempt."
            </p>
<div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Dr. Lena Vasquez" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;q=80"/>
</div>
<div>
<div className="text-sm font-semibold">Dr. Lena Vasquez</div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Astrophysicist, MIT
                </div>
</div>
</div>
</div>
<div className="bg-[#1a1a1c] p-8 rounded-[24px] border border-white/5 flex flex-col gap-8 min-h-[340px]">
<iconify-icon className="text-[#C2A878] text-3xl" icon="solar:quote-up-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base leading-relaxed text-white/80">
              "I have spent forty years dreaming of Mars. ARES has built the
              bridge I thought my grandchildren would walk."
            </p>
<div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Cmdr. Hiroshi Tanaka" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&amp;q=80"/>
</div>
<div>
<div className="text-sm font-semibold">Cmdr. Hiroshi Tanaka</div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Former ISS Commander
                </div>
</div>
</div>
</div>
<div className="bg-[#1a1a1c] p-8 rounded-[24px] border border-white/5 flex flex-col gap-8 min-h-[340px]">
<iconify-icon className="text-[#C2A878] text-3xl" icon="solar:quote-up-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base leading-relaxed text-white/80">
              "The first time I saw the propulsion architecture, I understood:
              we are no longer waiting. We are going."
            </p>
<div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Ayana Okonkwo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&amp;q=80"/>
</div>
<div>
<div className="text-sm font-semibold">Ayana Okonkwo</div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Lead Propulsion Engineer
                </div>
</div>
</div>
</div>
</div>
<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 pt-12 border-t border-white/5">
<div>
<div className="font-display text-4xl lg:text-5xl text-[#C2A878]">
              2,400+
            </div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">
              Engineers
            </div>
</div>
<div>
<div className="font-display text-4xl lg:text-5xl text-[#C2A878]">
              $48B
            </div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">
              Program Budget
            </div>
</div>
<div>
<div className="font-display text-4xl lg:text-5xl text-[#C2A878]">
              14
            </div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">
              Partner Agencies
            </div>
</div>
<div>
<div className="font-display text-4xl lg:text-5xl text-[#C2A878]">
              90D
            </div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mt-2">
              Transit Time
            </div>
</div>
</div>
</div>
</section>

<section className="relative" id="journey">
<div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-12">
<div className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#C2A878] mb-6">
          [ 03 — The Journey ]
        </div>
<h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight max-w-3xl">
          Seven phases
          <br/>
          to a second world.
        </h2>
</div>
<div className="relative lg:flex lg:gap-16 max-w-7xl mx-auto px-6 lg:px-12 pb-32">

<div className="lg:w-1/2 lg:sticky lg:top-24 h-[60vh] lg:h-[80vh] flex items-center justify-center" id="journey-sticky">
<div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[24px]">
<video aria-label="Mars planet" className="absolute inset-0 w-full h-full object-cover" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15c69e03-3e71-496c-bc46-0ef7d5e83dc7_1600w.png" preload="metadata" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1779103173159-d119f402-29d2-4df4-a1cc-c560d67441c2.mp4"></video>
<div className="absolute inset-0 bg-gradient-to-b from-[#0f0f10]/30 via-transparent to-[#0f0f10]/60"></div>
<div className="absolute top-8 left-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
<div>PHASE</div>
<div className="font-display text-7xl lg:text-9xl text-[#C2A878] mt-2" id="phase-num">
                01
              </div>
</div>
<div className="absolute bottom-8 right-8 text-right">
<div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                Current Stage
              </div>
<div className="font-display text-2xl lg:text-3xl" id="phase-title">
                Pre-Flight
              </div>
</div>
</div>
</div>

<div className="lg:w-1/2 space-y-32 lg:space-y-48 lg:pt-32" id="journey-phases">
<div className="journey-phase" data-num="01" data-title="Pre-Flight">
<div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C2A878] mb-4">
              T-Minus 14 Days
            </div>
<h3 className="font-display text-4xl lg:text-5xl mb-4 tracking-tight">
              Quarantine &amp; Conditioning
            </h3>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
              Crew enters sealed isolation. Final medical baselines. Reflex
              calibration in centrifuge.
            </p>
</div>
<div className="journey-phase" data-num="02" data-title="Launch">
<div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C2A878] mb-4">
              Day 0
            </div>
<h3 className="font-display text-4xl lg:text-5xl mb-4 tracking-tight">
              Ascent to Orbit
            </h3>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
              Boost stage delivers the ARES vessel to low-Earth orbit within 11
              minutes of ignition.
            </p>
</div>
<div className="journey-phase" data-num="03" data-title="Transfer">
<div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C2A878] mb-4">
              Day 3 → 90
            </div>
<h3 className="font-display text-4xl lg:text-5xl mb-4 tracking-tight">
              Interplanetary Cruise
            </h3>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
              Continuous-thrust trajectory. Crew adapts to 0.4G simulated
              gravity through centrifugal ring.
            </p>
</div>
<div className="journey-phase" data-num="04" data-title="Approach">
<div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C2A878] mb-4">
              Day 91
            </div>
<h3 className="font-display text-4xl lg:text-5xl mb-4 tracking-tight">
              Mars Orbit Insertion
            </h3>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
              Aerobraking maneuver. Crew enters parking orbit above Valles
              Marineris landing zone.
            </p>
</div>
<div className="journey-phase" data-num="05" data-title="Descent">
<div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C2A878] mb-4">
              Day 94
            </div>
<h3 className="font-display text-4xl lg:text-5xl mb-4 tracking-tight">
              Surface Landing
            </h3>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
              Supersonic retropropulsion guides the descent vehicle to within 30
              meters of pre-positioned base.
            </p>
</div>
<div className="journey-phase" data-num="06" data-title="Settlement">
<div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C2A878] mb-4">
              Day 95 → 365
            </div>
<h3 className="font-display text-4xl lg:text-5xl mb-4 tracking-tight">
              First Year Operations
            </h3>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
              Habitat expansion, geological survey, deep drilling for
              sub-surface water reserves.
            </p>
</div>
<div className="journey-phase" data-num="07" data-title="Continuity">
<div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#C2A878] mb-4">
              Year 2 +
            </div>
<h3 className="font-display text-4xl lg:text-5xl mb-4 tracking-tight">
              Permanent Presence
            </h3>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
              Quarterly resupply flights. Civilian researcher program opens. The
              colony stands on its own.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 px-6 lg:px-12 bg-[#0a0a0b] border-y border-white/5 relative overflow-hidden" id="origin">
<div className="max-w-5xl mx-auto relative z-10">
<div className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#C2A878] mb-6">
          [ 04 — Origin ]
        </div>
<h2 className="font-display text-5xl lg:text-8xl leading-[0.95] tracking-tight mb-16">
          A protocol
          <br/>
          born from
          <span className="italic text-[#C2A878]">distance.</span>
</h2>
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-white/70">
<p>
              In 2019, a small group of propulsion engineers met in a hangar
              outside Mojave. They asked a question that had been deferred for
              sixty years:
              <span className="text-white">
                what would it actually take to live on Mars?
              </span>
</p>
<p>
              Not visit. Not plant a flag.
              <em className="text-[#C2A878]">Live.</em>
              The answer wasn't a single rocket or a single breakthrough. It was
              a protocol — a connected sequence of systems that, together, made
              the impossible into the merely difficult.
            </p>
<p>
              Six years and eleven prototype flights later, the ARES Protocol
              stands ready. The first manifest closes in fourteen months. The
              first transfer window opens in twelve years. The corridor will
              remain open thereafter, every twenty-six months, indefinitely.
            </p>
</div>
<div className="lg:col-span-5 space-y-3">
<div className="bg-[#1a1a1c] p-6 rounded-2xl border border-white/5">
<div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C2A878] mb-3">
                Founded
              </div>
<div className="font-display text-3xl">2019</div>
</div>
<div className="bg-[#1a1a1c] p-6 rounded-2xl border border-white/5">
<div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C2A878] mb-3">
                First Manifest Closes
              </div>
<div className="font-display text-3xl">2025 Q3</div>
</div>
<div className="bg-[#1a1a1c] p-6 rounded-2xl border border-white/5">
<div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C2A878] mb-3">
                Window Opens
              </div>
<div className="font-display text-3xl">2034 Aug 12</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 px-6 lg:px-12" id="crew">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
<div>
<div className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#C2A878] mb-6">
              [ 05 — Architects ]
            </div>
<h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
              The people behind
              <br/>
              the protocol.
            </h2>
</div>
<p className="text-sm text-white/50 max-w-md leading-relaxed">
            A consortium of 2,400 engineers, biologists, and pilots from
            fourteen nations — bound by one assignment.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="bg-[#1a1a1c] rounded-[24px] border border-white/5 overflow-hidden hover-lift">
<div className="aspect-[4/5] relative overflow-hidden">
<img alt="Eira Solberg" className="absolute inset-0 w-full h-full object-cover" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2989d46-5bb5-49c0-95f6-502d081b0851_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2989d46-5bb5-49c0-95f6-502d081b0851_3840w.png"/>
<div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                01
              </div>
</div>
<div className="p-6">
<div className="text-sm font-semibold mb-1">Eira Solberg</div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Chief Architect
              </div>
</div>
</div>
<div className="bg-[#1a1a1c] rounded-[24px] border border-white/5 overflow-hidden hover-lift">
<div className="aspect-[4/5] relative overflow-hidden">
<img alt="Marcus Eze" className="absolute inset-0 w-full h-full object-cover" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7519da5e-b274-4fc7-8d4b-f4a724d863c3_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7519da5e-b274-4fc7-8d4b-f4a724d863c3_3840w.png"/>
<div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                02
              </div>
</div>
<div className="p-6">
<div className="text-sm font-semibold mb-1">Marcus Eze</div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Mission Director
              </div>
</div>
</div>
<div className="bg-[#1a1a1c] rounded-[24px] border border-white/5 overflow-hidden hover-lift">
<div className="aspect-[4/5] relative overflow-hidden">
<img alt="Yuki Saito" className="absolute inset-0 w-full h-full object-cover" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4730f714-0e73-4133-b391-2ad2f4f64160_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4730f714-0e73-4133-b391-2ad2f4f64160_3840w.png"/>
<div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                03
              </div>
</div>
<div className="p-6">
<div className="text-sm font-semibold mb-1">Yuki Saito</div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Lead Pilot
              </div>
</div>
</div>
<div className="bg-[#1a1a1c] rounded-[24px] border border-white/5 overflow-hidden hover-lift">
<div className="aspect-[4/5] relative overflow-hidden">
<img alt="Aria Reyes" className="absolute inset-0 w-full h-full object-cover" data-element-src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e67c0741-344d-424a-aae3-ccafc1d19274_3840w.png" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e67c0741-344d-424a-aae3-ccafc1d19274_3840w.png"/>
<div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
                04
              </div>
</div>
<div className="p-6">
<div className="text-sm font-semibold mb-1">Aria Reyes</div>
<div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Habitat Systems
              </div>
</div>
</div>
</div>

<div className="mt-24 bg-[#1a1a1c] rounded-[32px] border border-white/5 p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#C2A878]/10 blur-3xl"></div>
<div className="relative max-w-2xl">
<div className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#C2A878] mb-4">
              Manifest closes Q3 2025
            </div>
<h3 className="font-display text-4xl lg:text-6xl leading-[0.95] tracking-tight">
              Your seat won't
              <br/>
              wait forever.
            </h3>
</div>
<div className="relative flex flex-col sm:flex-row gap-3">
<button className="px-8 py-5 bg-[#C2A878] text-[#0f0f10] text-[10px] font-semibold uppercase tracking-[0.3em] rounded-2xl hover:bg-[#d8c8b8] transition-transform hover:scale-[1.02] whitespace-nowrap">
              Reserve Now
            </button>
<button className="px-8 py-5 border border-white/10 text-[10px] font-semibold uppercase tracking-[0.3em] rounded-2xl hover:bg-white/5 transition-colors whitespace-nowrap">
              Schedule Briefing
            </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 px-6 lg:px-12 pt-20 pb-10 bg-[#0a0a0b]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 space-y-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#C2A878] shadow-[0_0_10px_#C2A878]"></div>
<span className="font-semibold text-xs tracking-[0.3em] uppercase">
                ARES Protocol
              </span>
</div>
<p className="text-sm text-white/40 leading-relaxed max-w-xs">
              United Aerospace Corporation. Building the bridge between worlds
              since 2019.
            </p>
<div className="flex gap-3">
<a className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C2A878] hover:text-[#C2A878] transition-colors">
<iconify-icon icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C2A878] hover:text-[#C2A878] transition-colors">
<iconify-icon icon="solar:youtube-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C2A878] hover:text-[#C2A878] transition-colors">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div>
<div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
              Mission
            </div>
<ul className="space-y-3 text-sm text-white/70">
<li>
<a className="hover:text-[#C2A878] transition-colors">Manifest</a>
</li>
<li>
<a className="hover:text-[#C2A878] transition-colors">Trajectory</a>
</li>
<li>
<a className="hover:text-[#C2A878] transition-colors">
                  Colonization
                </a>
</li>
<li>
<a className="hover:text-[#C2A878] transition-colors">Research</a>
</li>
</ul>
</div>
<div>
<div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
              Corporation
            </div>
<ul className="space-y-3 text-sm text-white/70">
<li>
<a className="hover:text-[#C2A878] transition-colors">About UAC</a>
</li>
<li>
<a className="hover:text-[#C2A878] transition-colors">Careers</a>
</li>
<li>
<a className="hover:text-[#C2A878] transition-colors">Press</a>
</li>
<li>
<a className="hover:text-[#C2A878] transition-colors">Investors</a>
</li>
</ul>
</div>
<div>
<div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
              Contact
            </div>
<ul className="space-y-3 text-sm text-white/70">
<li>
<a className="hover:text-[#C2A878] transition-colors">
                  Mission Control
                </a>
</li>
<li>
<a className="hover:text-[#C2A878] transition-colors">
                  Media Inquiries
                </a>
</li>
<li>
<a className="hover:text-[#C2A878] transition-colors">Support</a>
</li>
</ul>
</div>
</div>
<div className="font-display text-[16vw] leading-none tracking-tight text-[#C2A878]/10 select-none mb-10">
          ARES
        </div>
<div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-white/5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
<span>© 2034 United Aerospace Corp.</span>
<span>Ad astra per aspera.</span>
<span>v1.0.0 // Mojave, CA</span>
</div>
</div>
</footer>




    </>
  );
}
