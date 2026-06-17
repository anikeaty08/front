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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



(function(){
  const container = document.getElementById('lightRaysWrap');
  const canvas = document.createElement('canvas');
  canvas.id = 'light-rays-canvas';
  container.appendChild(canvas);

  const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
  if (!gl) { console.error('WebGL not supported'); return; }

  // --- Shader helpers ---
  function compileShader(gl,type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){console.error(gl.getShaderInfoLog(s));gl.deleteShader(s);return null;}return s;}
  function createProgram(gl,vs,fs){const v=compileShader(gl,gl.VERTEX_SHADER,vs),f=compileShader(gl,gl.FRAGMENT_SHADER,fs);if(!v||!f)return null;const p=gl.createProgram();gl.attachShader(p,v);gl.attachShader(p,f);gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS)){console.error(gl.getProgramInfoLog(p));gl.deleteProgram(p);return null;}return p;}

  const vertexSrc = `attribute vec2 a_position; varying vec2 vUv; void main(){vUv=a_position*0.5+0.5; gl_Position=vec4(a_position,0.0,1.0);}`;
  const fragmentSrc = `precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 rayPos;
uniform vec2 rayDir;
uniform vec3 raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2 mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;
varying vec2 vUv;
float noise(vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);}
float rayStrength(vec2 raySource,vec2 rayRefDirection,vec2 coord,float seedA,float seedB,float speed){
  vec2 sourceToCoord=coord-raySource;
  vec2 dirNorm=normalize(sourceToCoord);
  float cosAngle=dot(dirNorm,rayRefDirection);
  float distortedAngle=cosAngle+distortion*sin(iTime*2.0+length(sourceToCoord)*0.01)*0.2;
  float spreadFactor=pow(max(distortedAngle,0.0),1.0/max(lightSpread,0.001));
  float distance=length(sourceToCoord);
  float maxDistance=iResolution.x*rayLength;
  float lengthFalloff=clamp((maxDistance-distance)/maxDistance,0.0,1.0);
  float fadeFalloff=clamp((iResolution.x*fadeDistance-distance)/(iResolution.x*fadeDistance),0.5,1.0);
  float pulse=pulsating>0.5?(0.8+0.2*sin(iTime*speed*3.0)):1.0;
  float baseStrength=clamp((0.45+0.15*sin(distortedAngle*seedA+iTime*speed))+(0.3+0.2*cos(-distortedAngle*seedB+iTime*speed)),0.0,1.0);
  return baseStrength*lengthFalloff*fadeFalloff*spreadFactor*pulse;
}
void mainImage(out vec4 fragColor,in vec2 fragCoord){
  vec2 coord=vec2(fragCoord.x,iResolution.y-fragCoord.y);
  vec2 finalRayDir=rayDir;
  if(mouseInfluence>0.0){vec2 mouseScreenPos=mousePos*iResolution.xy;vec2 mouseDirection=normalize(mouseScreenPos-rayPos);finalRayDir=normalize(mix(rayDir,mouseDirection,mouseInfluence));}
  vec4 rays1=vec4(1.0)*rayStrength(rayPos,finalRayDir,coord,36.2214,21.11349,1.5*raysSpeed);
  vec4 rays2=vec4(1.0)*rayStrength(rayPos,finalRayDir,coord,22.3991,18.0234,1.1*raysSpeed);
  fragColor=rays1*0.5+rays2*0.4;
  if(noiseAmount>0.0){float n=noise(coord*0.01+iTime*0.1);fragColor.rgb*=(1.0-noiseAmount+noiseAmount*n);}
  float brightness=1.0-(coord.y/iResolution.y);
  fragColor.x*=(0.1+brightness*0.8);
  fragColor.y*=(0.3+brightness*0.6);
  fragColor.z*=(0.5+brightness*0.5);
  if(saturation!=1.0){float gray=dot(fragColor.rgb,vec3(0.299,0.587,0.114));fragColor.rgb=mix(vec3(gray),fragColor.rgb,saturation);}
  fragColor.rgb*=raysColor;
}
void main(){vec4 color; mainImage(color,gl_FragCoord.xy); gl_FragColor=color;}`;

  const program = createProgram(gl, vertexSrc, fragmentSrc);
  gl.useProgram(program);

  const posLoc = gl.getAttribLocation(program,'a_position');
  const posBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,posBuf);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc,2,gl.FLOAT,false,0,0);

  const uni = {};
  ['iTime','iResolution','rayPos','rayDir','raysColor','raysSpeed','lightSpread','rayLength','pulsating','fadeDistance','saturation','mousePos','mouseInfluence','noiseAmount','distortion'].forEach(n=>uni[n]=gl.getUniformLocation(program,n));

  // --- Component state (uppdaterade värden) ---
  const state = {
    raysColor:'#dc143c',
    raysOrigin:'top',
    raysSpeed:2.2,
    lightSpread:3.0,
    rayLength:4.9,
    pulsating:false,
    fadeDistance:2.0,
    saturation:0.6,
    mouseInfluence:0.12,
    noiseAmount:0,
    distortion:0
  };

  function hexToRgb(hex){const m=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return m?[parseInt(m[1],16)/255,parseInt(m[2],16)/255,parseInt(m[3],16)/255]:[1,1,1];}
  function getAnchorAndDir(origin,w,h){const o=0.2;switch(origin){case'top-left':return{anchor:[0,-o*h],dir:[0,1]};case'top-right':return{anchor:[w,-o*h],dir:[0,1]};case'left':return{anchor:[-o*w,0.5*h],dir:[1,0]};case'right':return{anchor:[(1+o)*w,0.5*h],dir:[-1,0]};case'bottom-left':return{anchor:[0,(1+o)*h],dir:[0,-1]};case'bottom-center':return{anchor:[0.5*w,(1+o)*h],dir:[0,-1]};case'bottom-right':return{anchor:[w,(1+o)*h],dir:[0,-1]};default:return{anchor:[0.5*w,-o*h],dir:[0,1]};}}

  const mouse={x:0.5,y:0.5},smoothMouse={x:0.5,y:0.5};
  window.addEventListener('mousemove',e=>{const r=canvas.getBoundingClientRect();mouse.x=(e.clientX-r.left)/r.width;mouse.y=(e.clientY-r.top)/r.height;});

  function resize(){const dpr=Math.min(window.devicePixelRatio||1,2);const w=Math.floor(container.clientWidth*dpr);const h=Math.floor(container.clientHeight*dpr);canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}
  window.addEventListener('resize',resize); resize();

  function setUniforms(t){
    gl.uniform1f(uni.iTime,t*0.001);
    gl.uniform2f(uni.iResolution,canvas.width,canvas.height);
    const {anchor,dir} = getAnchorAndDir(state.raysOrigin,canvas.width,canvas.height);
    gl.uniform2f(uni.rayPos,anchor[0],anchor[1]);
    gl.uniform2f(uni.rayDir,dir[0],dir[1]);
    const c = hexToRgb(state.raysColor);
    gl.uniform3f(uni.raysColor,c[0],c[1],c[2]);
    gl.uniform1f(uni.raysSpeed,state.raysSpeed);
    gl.uniform1f(uni.lightSpread,state.lightSpread);
    gl.uniform1f(uni.rayLength,state.rayLength);
    gl.uniform1f(uni.pulsating,state.pulsating?1:0);
    gl.uniform1f(uni.fadeDistance,state.fadeDistance);
    gl.uniform1f(uni.saturation,state.saturation);
    gl.uniform2f(uni.mousePos,smoothMouse.x,smoothMouse.y);
    gl.uniform1f(uni.mouseInfluence,state.mouseInfluence);
    gl.uniform1f(uni.noiseAmount,state.noiseAmount);
    gl.uniform1f(uni.distortion,state.distortion);
  }

  function frame(t){
    const s=0.92;
    smoothMouse.x=smoothMouse.x*s+(1-s)*mouse.x;
    smoothMouse.y=smoothMouse.y*s+(1-s)*mouse.y;
    setUniforms(t);
    gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES,0,6);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

})();

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
      <div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.pexels.com/video/woman-doing-a-back-massage-6628397/"></video></div>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="light-rays-container" id="lightRaysWrap"><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas><canvas height="858" id="light-rays-canvas" width="1320"></canvas></div>
<style>
.light-rays-container {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none; /* så att den inte stör klick */
  z-index: -1; /* bakgrund */
}

canvas#light-rays-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>

</div>

<div className="bg-rose-50/80 backdrop-blur-sm border-b border-rose-100 text-center py-2.5 px-4 sm:px-6 lg:px-8 z-50 relative">
<p className="sm:text-sm flex items-center justify-center gap-2 text-xs font-medium text-rose-900">{iconify-icon} Strictly professional women-only wellness service. Certified male and female therapists ensure your safety and comfort.</p>
</div>

<nav className="sticky top-0 z-40 bg-[#FCFCFB]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-stone-900 uppercase" href="#">
                        Serenité
                    </a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#testimonials">Reviews</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-stone-900 hover:bg-stone-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900" href="#booking">
                        Book Session
                    </a>

<button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none" type="button">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="">
<div className="relative overflow-hidden bg-gradient-to-b from-rose-50/40 via-[#FCFCFB] to-[#FCFCFB] pt-16 sm:pt-24 lg:pt-32 pb-16">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-medium mb-8">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
                    Premium Home Spa Experience
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 max-w-4xl mx-auto leading-tight">
                    Relax. Refresh. Rejuvenate <br className="hidden sm:block"/>
<span className="text-stone-400 font-medium">In the Comfort of Your Home.</span>
</h1>
<p className="sm:text-lg text-base text-stone-500 max-w-2xl mt-6 mr-auto ml-auto">A strictly private, safe, and professional sanctuary brought to your doorstep. Tailored therapies provided exclusively for women by certified male and female professionals.</p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="sm:w-auto inline-flex items-center justify-center hover:bg-stone-800 transition-all text-sm font-medium text-white bg-stone-900 w-full border-transparent border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#booking">
                        Book Your Session
                    </a>
<a className="sm:w-auto inline-flex items-center justify-center hover:bg-stone-50 transition-all text-sm font-medium text-stone-700 bg-white w-full border-stone-200 border rounded-full pt-3 pr-6 pb-3 pl-6" href="/+601118801582">
<iconify-icon className="mr-2 text-lg" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
                        Chat via WhatsApp
                    </a>
</div>

<div className="mt-16 pt-8 border-t border-stone-100 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
<div className="flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-600">Women Only</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<iconify-icon className="text-xl" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-600">Certified Therapists</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-600">Fully Private</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-600">Custom Service</span>
</div>
</div>
</div>
</div>

<section className="py-16 sm:py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                            A sanctuary of safety and serenity.
                        </h2>
<p className="mt-4 text-base text-stone-500">
                            We understand the importance of privacy and comfort. Our service is designed from the ground up to provide a secure environment where you can truly unwind.
                        </p>
<div className="mt-8 space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="h-8 w-8 rounded-full bg-rose-50 flex items-center justify-center">
<iconify-icon className="text-rose-600" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-stone-900">Female-Only Therapists</h3>
<p className="text-sm text-stone-500 mt-1">Every session is conducted by a vetted, professionally trained male and female therapist.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="h-8 w-8 rounded-full bg-rose-50 flex items-center justify-center">
<iconify-icon className="text-rose-600" icon="solar:star-fall-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-stone-900">Tailored to Your Demands</h3>
<p className="mt-1 text-sm text-stone-500">We fulfill every client’s needs and preferences with the highest level of care, adjusting pressure, focus areas, and atmosphere to your liking.</p>
</div>
</div>
</div>
</div>
<div className="mt-10 lg:mt-0">
<div className="aspect-w-4 aspect-h-3 rounded-2xl bg-stone-100 overflow-hidden ring-1 ring-stone-900/5 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-rose-100/40 to-stone-50/80 flex flex-col items-center justify-center text-stone-400 p-8 text-center">
<iconify-icon className="text-6xl mb-4 text-rose-200" icon="solar:lotus-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs font-medium uppercase tracking-widest text-stone-400">Professional Environment</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-[#FCFCFB]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Curated Treatments</h2>
<p className="mt-4 text-base text-stone-500">Select from our range of specialized therapies, all performed with premium oils and equipment brought to your home.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white rounded-2xl p-6 ring-1 ring-stone-200 hover:ring-rose-200 transition-all hover:shadow-md hover:shadow-rose-100/50 flex flex-col">
<div className="h-12 w-12 rounded-xl bg-stone-50 group-hover:bg-rose-50 flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-rose-600" icon="solar:body-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Full Body Massage</h3>
<p className="mt-2 text-sm text-stone-500 flex-grow">A comprehensive treatment designed to relieve tension across all major muscle groups.</p>
<div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
<span className="text-lg font-medium text-stone-900">$100 <span className="text-xs text-stone-400 font-normal">/ 60 min</span></span>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-6 ring-1 ring-stone-200 hover:ring-rose-200 transition-all hover:shadow-md hover:shadow-rose-100/50 flex flex-col">
<div className="h-12 w-12 rounded-xl bg-stone-50 group-hover:bg-rose-50 flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-rose-600" icon="solar:sleeping-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Relaxation Therapy</h3>
<p className="mt-2 text-sm text-stone-500 flex-grow">Gentle, flowing strokes intended to calm the nervous system and reduce stress.</p>
<div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
<span className="text-lg font-medium text-stone-900">$75<span className="text-xs text-stone-400 font-normal">/ 60 min</span></span>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-6 ring-1 ring-stone-200 hover:ring-rose-200 transition-all hover:shadow-md hover:shadow-rose-100/50 flex flex-col">
<div className="h-12 w-12 rounded-xl bg-stone-50 group-hover:bg-rose-50 flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-rose-600" icon="solar:droplets-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Aromatherapy</h3>
<p className="mt-2 text-sm text-stone-500 flex-grow">Combines soft massage techniques with custom-blended essential oils for deep mental clarity.</p>
<div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
<span className="text-lg font-medium text-stone-900">$80<span className="text-xs text-stone-400 font-normal">/ 60 min</span></span>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-6 ring-1 ring-stone-200 hover:ring-rose-200 transition-all hover:shadow-md hover:shadow-rose-100/50 flex flex-col">
<div className="h-12 w-12 rounded-xl bg-stone-50 group-hover:bg-rose-50 flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-2xl text-stone-700 group-hover:text-rose-600" icon="solar:masks-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 tracking-tight">Spa Treatments</h3>
<p className="mt-2 text-sm text-stone-500 flex-grow">Includes body scrubs, facials, and deep hydration wraps using premium organic products.</p>
<div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
<span className="text-lg font-medium text-stone-900">$120 <span className="text-xs text-stone-400 font-normal">/ 90 min</span></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="booking">
<div className="absolute inset-0 bg-rose-50/30 transform -skew-y-2 z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 ring-1 ring-stone-200 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-stone-100">
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-2">Reserve Your Time</h3>
<p className="text-sm text-stone-500 mb-8">Fill out the form below or contact us directly via WhatsApp for a quicker response.</p>
<form action="#" className="space-y-6" method="POST">
<div className="">
<label className="block text-sm font-medium text-stone-700" htmlFor="name">Full Name</label>
<div className="mt-1">
<input className="block w-full rounded-xl border-0 py-2.5 px-3 text-stone-900 ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 transition-shadow shadow-sm" id="name" name="name" placeholder="Jane Doe" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-stone-700" htmlFor="location">Home Address / Location</label>
<div className="mt-1">
<input className="block w-full rounded-xl border-0 py-2.5 px-3 text-stone-900 ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 transition-shadow shadow-sm" id="location" name="location" placeholder="123 Serenity Lane, Apt 4B" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-stone-700" htmlFor="service">Service</label>
<div className="mt-1 relative">
<select className="block w-full appearance-none rounded-xl border-0 py-2.5 pl-3 pr-10 text-stone-900 ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 shadow-sm bg-white" id="service" name="service">
<option>Full Body Massage</option>
<option>Relaxation Therapy</option>
<option>Aromatherapy</option>
<option>Spa Treatments</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700" htmlFor="time">Preferred Time</label>
<div className="mt-1 relative">
<input className="block w-full rounded-xl border-0 py-2.5 px-3 text-stone-900 ring-1 ring-inset ring-stone-300 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6 shadow-sm bg-white" id="time" name="time" type="datetime-local"/>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<span className="flex flex-col">
<span className="text-sm font-medium text-stone-900" id="payment-label">Pay Online via Link</span>
<span className="text-xs text-stone-500" id="payment-description">We will send a secure stripe link upon confirmation.</span>
</span>
<button aria-checked="true" aria-describedby="payment-description" aria-labelledby="payment-label" className="bg-rose-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2" role="switch" type="button">
<span aria-hidden="true" className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
</div>
<button className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-colors" type="submit">
                                    Submit Request
                                </button>
</form>
</div>

<div className="bg-stone-50 p-8 sm:p-12 flex flex-col justify-between">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-6">Contact &amp; Areas</h3>
<div className="space-y-6">
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="h-10 w-10 rounded-full bg-white ring-1 ring-stone-200 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-stone-600" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-stone-900">Direct Line</p>
<p className="text-sm text-stone-500 mt-1">+601118801582</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-[#25D366]/10 ring-1 ring-[#25D366]/30 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#25D366]" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-stone-900">WhatsApp</p>
<p className="mt-1 text-sm text-stone-500">Fastest way to book and confirm.</p>
<a className="inline-flex items-center hover:text-[#1da851] text-sm font-medium text-[#25D366] mt-2" href="/+601118801582">
                                                Click to chat <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-white ring-1 ring-stone-200 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-stone-600" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-stone-900">Service Areas</p>
<p className="mt-1 text-sm text-stone-500">Downtown, Westside, North Hills, and surrounding upscale neighborhoods. (Travel fees may apply outside a 10-mile radius).</p>
</div>
</div>
</div>
</div>
<div className="mt-10 p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex gap-3">
<iconify-icon className="text-rose-500 text-xl flex-shrink-0 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs text-stone-600 leading-relaxed">
<span className="font-semibold text-stone-900 block mb-1">Important Notice:</span>
                                    This is a strictly professional women-only wellness service. All services available and we are committed to fulfilling every client’s needs and preferences with the highest level of care and professionalism. Any inappropriate requests will result in immediate termination of the session.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 bg-[#FCFCFB] pt-16 pb-16" id="testimonials">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900">Client Experiences</h2>
<p className="mt-4 text-sm text-stone-500">Real reviews from our valued clients.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-2xl ring-1 ring-stone-200 shadow-sm flex flex-col">
<div className="flex text-rose-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 flex-grow italic">"Incredible experience. As a single woman, I was hesitant about home services, but the therapist was so professional and made me feel completely safe and relaxed. Highly recommend the Aromatherapy."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-medium text-stone-500">S.M.</div>
<span className="text-sm font-medium text-stone-900">Sarah M.</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl ring-1 ring-stone-200 shadow-sm flex flex-col">
<div className="flex text-rose-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 flex-grow italic">"The best full body massage I've had in years. They bring the whole spa experience to your living room. The bed, the music, the oils—everything was perfect and tailored exactly to my preferences."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-medium text-stone-500">E.R.</div>
<span className="text-sm font-medium text-stone-900">Elena R.</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl ring-1 ring-stone-200 shadow-sm flex flex-col">
<div className="flex text-rose-400 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-stone-600 flex-grow italic">"Booking via WhatsApp was so easy. The therapist arrived exactly on time. I felt respected and completely at ease throughout the entire relaxation session. Will definitely book again."</p>
<div className="mt-6 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-medium text-stone-500">J.T.</div>
<span className="text-sm font-medium text-stone-900">Jessica T.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-stone-100 border-t pt-16 pb-16" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-stone-50 rounded-xl p-6 ring-1 ring-stone-200 open:bg-white transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-stone-900">
                            Is this service truly for women only?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-sm text-stone-500 mt-4 leading-relaxed">
                            Yes, absolutely. To maintain a safe, comfortable, and private environment, our services are strictly limited to female clients, and all our therapists are certified female professionals.
                        </div>
</details>
<details className="group bg-stone-50 rounded-xl p-6 ring-1 ring-stone-200 open:bg-white transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-stone-900">
                            Do I need to provide anything?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-sm text-stone-500 mt-4 leading-relaxed">
                            No, we bring the entire spa experience to you. Our therapists arrive with a professional massage table, fresh linens, premium organic oils, and ambient music. You just need to provide a space to set up.
                        </div>
</details>
<details className="group bg-stone-50 rounded-xl p-6 ring-1 ring-stone-200 open:bg-white transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-stone-900">
                            How do you ensure safety and privacy?
                            <span className="transition group-open:rotate-180">
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-sm text-stone-500 mt-4 leading-relaxed">
                            All our therapists undergo rigorous background checks and professional certification. We operate under a strict code of conduct. Your personal information is kept entirely confidential and is only used for booking purposes.
                        </div>
</details>
</div>
</div>
</section>
</main>

<footer className="bg-stone-900 py-12 border-t border-stone-800 text-center sm:text-left">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
<div>
<span className="text-xl font-semibold tracking-tighter text-white uppercase">SERENITÉ</span>
<p className="mt-2 text-xs text-stone-400 max-w-xs mx-auto sm:mx-0">Premium home spa and wellness services designed exclusively for women.</p>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4 text-xs font-medium text-stone-400">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Safety Guidelines</a>
</div>
<div className="text-xs text-stone-500 sm:text-right">
                © 2023 Serenité Wellness. All rights reserved.
            </div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed shadow-[#25D366]/30 hover:-translate-y-1 transition-transform flex items-center justify-center group text-white bg-[#25D366] z-50 rounded-full pt-4 pr-4 pb-4 pl-4 right-6 bottom-6 shadow-lg" href="/+601118801582">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>

<span className="absolute right-full mr-4 bg-stone-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
            Book via WhatsApp
        </span>
</a>

    </>
  );
}
