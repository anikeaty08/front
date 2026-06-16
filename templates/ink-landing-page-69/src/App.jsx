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



"use strict";
(function () {
  const canvas = document.getElementById('c');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const config = {
    SIM_RESOLUTION:192, DYE_RESOLUTION:1024,
    DENSITY_DISSIPATION:0.74, VELOCITY_DISSIPATION:0.962,
    PRESSURE:0.8, PRESSURE_ITERATIONS:26, CURL:16,
    SPLAT_RADIUS:0.28, SPLAT_FORCE:3600,
    SHADING:true, BLOOM:true, BLOOM_ITERATIONS:8, BLOOM_RESOLUTION:256,
    BLOOM_INTENSITY:0.85, BLOOM_THRESHOLD:0.58, BLOOM_SOFT_KNEE:0.7,
    COLOR_UPDATE_SPEED:7.0, AUTO_PAINT:true, PAUSED:false,
  };
  if (reduceMotion){ config.PRESSURE_ITERATIONS=18; config.SIM_RESOLUTION=160; config.DYE_RESOLUTION=768; }

  const { gl, ext } = getWebGLContext(canvas);
  if (!gl){ drawFallback(); return; }
  if (!ext.supportLinearFiltering){ config.DYE_RESOLUTION=512; config.SHADING=false; config.BLOOM=false; }

  function getWebGLContext(canvas){
    const params={alpha:true,depth:false,stencil:false,antialias:false,preserveDrawingBuffer:false,premultipliedAlpha:false};
    let gl=canvas.getContext('webgl2',params); const isWebGL2=!!gl;
    if(!isWebGL2) gl=canvas.getContext('webgl',params)||canvas.getContext('experimental-webgl',params);
    if(!gl) return {gl:null,ext:null};
    let halfFloat,supportLinearFiltering;
    if(isWebGL2){ gl.getExtension('EXT_color_buffer_float'); supportLinearFiltering=!!gl.getExtension('OES_texture_float_linear'); }
    else { halfFloat=gl.getExtension('OES_texture_half_float'); supportLinearFiltering=!!gl.getExtension('OES_texture_half_float_linear'); }
    gl.clearColor(0.02,0.024,0.04,1.0);
    const halfFloatTexType=isWebGL2?gl.HALF_FLOAT:(halfFloat?halfFloat.HALF_FLOAT_OES:null);
    let formatRGBA,formatRG,formatR;
    if(isWebGL2){ formatRGBA=getSupportedFormat(gl,gl.RGBA16F,gl.RGBA,halfFloatTexType); formatRG=getSupportedFormat(gl,gl.RG16F,gl.RG,halfFloatTexType); formatR=getSupportedFormat(gl,gl.R16F,gl.RED,halfFloatTexType); }
    else { formatRGBA=getSupportedFormat(gl,gl.RGBA,gl.RGBA,halfFloatTexType); formatRG=getSupportedFormat(gl,gl.RGBA,gl.RGBA,halfFloatTexType); formatR=getSupportedFormat(gl,gl.RGBA,gl.RGBA,halfFloatTexType); }
    return {gl,ext:{isWebGL2,formatRGBA,formatRG,formatR,halfFloatTexType,supportLinearFiltering}};
  }
  function getSupportedFormat(gl,internalFormat,format,type){
    if(!supportRenderTextureFormat(gl,internalFormat,format,type)){ switch(internalFormat){ case gl.R16F: return getSupportedFormat(gl,gl.RG16F,gl.RG,type); case gl.RG16F: return getSupportedFormat(gl,gl.RGBA16F,gl.RGBA,type); default: return null; } }
    return {internalFormat,format};
  }
  function supportRenderTextureFormat(gl,internalFormat,format,type){
    const texture=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,texture);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D,0,internalFormat,4,4,0,format,type,null);
    const fbo=gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0);
    const status=gl.checkFramebufferStatus(gl.FRAMEBUFFER); gl.bindFramebuffer(gl.FRAMEBUFFER,null);
    return status===gl.FRAMEBUFFER_COMPLETE;
  }
  function compileShader(type,source,keywords){ source=addKeywords(source,keywords); const s=gl.createShader(type); gl.shaderSource(s,source); gl.compileShader(s); if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(s)); return s; }
  function addKeywords(source,keywords){ if(!keywords) return source; let p=''; keywords.forEach(k=>p+='#define '+k+'\n'); return p+source; }
  function createProgram(vs,fs){ const p=gl.createProgram(); gl.attachShader(p,vs); gl.attachShader(p,fs); gl.linkProgram(p); if(!gl.getProgramParameter(p,gl.LINK_STATUS)) console.warn(gl.getProgramInfoLog(p)); return p; }
  function getUniforms(program){ const u={}; const c=gl.getProgramParameter(program,gl.ACTIVE_UNIFORMS); for(let i=0;i<c;i++){ const n=gl.getActiveUniform(program,i).name; u[n]=gl.getUniformLocation(program,n); } return u; }
  class Program{ constructor(vs,fs){ this.program=createProgram(vs,fs); this.uniforms=getUniforms(this.program); } bind(){ gl.useProgram(this.program); } }
  class Material{ constructor(vs,src){ this.vertexShader=vs; this.fragmentShaderSource=src; this.programs={}; this.activeProgram=null; this.uniforms={}; }
    setKeywords(kw){ let h=0; for(let i=0;i<kw.length;i++) h+=hashCode(kw[i]); let p=this.programs[h]; if(p==null){ const fs=compileShader(gl.FRAGMENT_SHADER,this.fragmentShaderSource,kw); p=createProgram(this.vertexShader,fs); this.programs[h]=p; } if(p===this.activeProgram) return; this.uniforms=getUniforms(p); this.activeProgram=p; }
    bind(){ gl.useProgram(this.activeProgram); } }
  function hashCode(s){ if(s.length===0) return 0; let h=0; for(let i=0;i<s.length;i++){ h=(h<<5)-h+s.charCodeAt(i); h|=0; } return h; }

  const baseVertexShader=compileShader(gl.VERTEX_SHADER,`precision highp float; attribute vec2 aPosition; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform vec2 texelSize; void main(){ vUv=aPosition*0.5+0.5; vL=vUv-vec2(texelSize.x,0.0); vR=vUv+vec2(texelSize.x,0.0); vT=vUv+vec2(0.0,texelSize.y); vB=vUv-vec2(0.0,texelSize.y); gl_Position=vec4(aPosition,0.0,1.0); }`);
  const copyShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; uniform sampler2D uTexture; void main(){ gl_FragColor=texture2D(uTexture,vUv); }`);
  const clearShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; uniform sampler2D uTexture; uniform float value; void main(){ gl_FragColor=value*texture2D(uTexture,vUv); }`);
  const displayShaderSource=`precision highp float; precision highp sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uTexture; uniform sampler2D uBloom; uniform vec2 texelSize; vec3 linearToGamma(vec3 c){ c=max(c,vec3(0.0)); return max(1.055*pow(c,vec3(0.416666667))-0.055,vec3(0.0)); } void main(){ vec3 c=texture2D(uTexture,vUv).rgb;
    #ifdef SHADING
      vec3 lc=texture2D(uTexture,vL).rgb; vec3 rc=texture2D(uTexture,vR).rgb; vec3 tc=texture2D(uTexture,vT).rgb; vec3 bc=texture2D(uTexture,vB).rgb;
      float dx=length(rc)-length(lc); float dy=length(tc)-length(bc); vec3 n=normalize(vec3(dx,dy,length(texelSize))); vec3 l=vec3(0.0,0.0,1.0); float diffuse=clamp(dot(n,l)+0.7,0.7,1.0); c*=diffuse;
    #endif
    #ifdef BLOOM
      vec3 bloom=texture2D(uBloom,vUv).rgb; bloom=linearToGamma(bloom); c+=bloom;
    #endif
      c=max(c,vec3(0.0)); float lum=max(c.r,max(c.g,c.b)); if(lum>0.0001){ float mapped=lum/(1.0+0.55*max(lum-0.85,0.0)); mapped=min(mapped,0.97); c*=mapped/lum; } float a=max(c.r,max(c.g,c.b)); gl_FragColor=vec4(c,a); }`;
  const splatShader=compileShader(gl.FRAGMENT_SHADER,`precision highp float; precision highp sampler2D; varying vec2 vUv; uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius; void main(){ vec2 p=vUv-point.xy; p.x*=aspectRatio; vec3 splat=exp(-dot(p,p)/radius)*color; vec3 base=texture2D(uTarget,vUv).xyz; gl_FragColor=vec4(base+splat,1.0); }`);
  const advectionShader=compileShader(gl.FRAGMENT_SHADER,`precision highp float; precision highp sampler2D; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform vec2 dyeTexelSize; uniform float dt; uniform float dissipation; vec4 bilerp(sampler2D sam,vec2 uv,vec2 tsize){ vec2 st=uv/tsize-0.5; vec2 iuv=floor(st); vec2 fuv=fract(st); vec4 a=texture2D(sam,(iuv+vec2(0.5,0.5))*tsize); vec4 b=texture2D(sam,(iuv+vec2(1.5,0.5))*tsize); vec4 c=texture2D(sam,(iuv+vec2(0.5,1.5))*tsize); vec4 d=texture2D(sam,(iuv+vec2(1.5,1.5))*tsize); return mix(mix(a,b,fuv.x),mix(c,d,fuv.x),fuv.y); } void main(){
    #ifdef MANUAL_FILTERING
      vec2 coord=vUv-dt*bilerp(uVelocity,vUv,texelSize).xy*texelSize; vec4 result=bilerp(uSource,coord,dyeTexelSize);
    #else
      vec2 coord=vUv-dt*texture2D(uVelocity,vUv).xy*texelSize; vec4 result=texture2D(uSource,coord);
    #endif
      float decay=1.0+dissipation*dt; gl_FragColor=result/decay; }`, ext.supportLinearFiltering?null:['MANUAL_FILTERING']);
  const divergenceShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB; uniform sampler2D uVelocity; void main(){ float L=texture2D(uVelocity,vL).x; float R=texture2D(uVelocity,vR).x; float T=texture2D(uVelocity,vT).y; float B=texture2D(uVelocity,vB).y; vec2 C=texture2D(uVelocity,vUv).xy; if(vL.x<0.0){L=-C.x;} if(vR.x>1.0){R=-C.x;} if(vT.y>1.0){T=-C.y;} if(vB.y<0.0){B=-C.y;} float div=0.5*(R-L+T-B); gl_FragColor=vec4(div,0.0,0.0,1.0); }`);
  const curlShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB; uniform sampler2D uVelocity; void main(){ float L=texture2D(uVelocity,vL).y; float R=texture2D(uVelocity,vR).y; float T=texture2D(uVelocity,vT).x; float B=texture2D(uVelocity,vB).x; float vorticity=R-L-T+B; gl_FragColor=vec4(0.5*vorticity,0.0,0.0,1.0); }`);
  const vorticityShader=compileShader(gl.FRAGMENT_SHADER,`precision highp float; precision highp sampler2D; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt; void main(){ float L=texture2D(uCurl,vL).x; float R=texture2D(uCurl,vR).x; float T=texture2D(uCurl,vT).x; float B=texture2D(uCurl,vB).x; float C=texture2D(uCurl,vUv).x; vec2 force=0.5*vec2(abs(T)-abs(B),abs(R)-abs(L)); force/=length(force)+0.0001; force*=curl*C; force.y*=-1.0; vec2 velocity=texture2D(uVelocity,vUv).xy; velocity+=force*dt; velocity=min(max(velocity,-1000.0),1000.0); gl_FragColor=vec4(velocity,0.0,1.0); }`);
  const pressureShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB; uniform sampler2D uPressure; uniform sampler2D uDivergence; void main(){ float L=texture2D(uPressure,vL).x; float R=texture2D(uPressure,vR).x; float T=texture2D(uPressure,vT).x; float B=texture2D(uPressure,vB).x; float divergence=texture2D(uDivergence,vUv).x; float pressure=(L+R+B+T-divergence)*0.25; gl_FragColor=vec4(pressure,0.0,0.0,1.0); }`);
  const gradientSubtractShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB; uniform sampler2D uPressure; uniform sampler2D uVelocity; void main(){ float L=texture2D(uPressure,vL).x; float R=texture2D(uPressure,vR).x; float T=texture2D(uPressure,vT).x; float B=texture2D(uPressure,vB).x; vec2 velocity=texture2D(uVelocity,vUv).xy; velocity.xy-=vec2(R-L,T-B); gl_FragColor=vec4(velocity,0.0,1.0); }`);
  const bloomPrefilterShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying vec2 vUv; uniform sampler2D uTexture; uniform vec3 curve; uniform float threshold; void main(){ vec3 c=texture2D(uTexture,vUv).rgb; float br=max(c.r,max(c.g,c.b)); float rq=clamp(br-curve.x,0.0,curve.y); rq=curve.z*rq*rq; c*=max(rq,br-threshold)/max(br,0.0001); gl_FragColor=vec4(c,0.0); }`);
  const bloomBlurShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uTexture; void main(){ vec4 sum=vec4(0.0); sum+=texture2D(uTexture,vL); sum+=texture2D(uTexture,vR); sum+=texture2D(uTexture,vT); sum+=texture2D(uTexture,vB); sum*=0.25; gl_FragColor=sum; }`);
  const bloomFinalShader=compileShader(gl.FRAGMENT_SHADER,`precision mediump float; precision mediump sampler2D; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uTexture; uniform float intensity; void main(){ vec4 sum=vec4(0.0); sum+=texture2D(uTexture,vL); sum+=texture2D(uTexture,vR); sum+=texture2D(uTexture,vT); sum+=texture2D(uTexture,vB); sum*=0.25; gl_FragColor=sum*intensity; }`);

  const blit=(()=>{ gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),gl.STATIC_DRAW); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.createBuffer()); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),gl.STATIC_DRAW); gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0); gl.enableVertexAttribArray(0); return (target,clear=false)=>{ if(target==null){ gl.viewport(0,0,gl.drawingBufferWidth,gl.drawingBufferHeight); gl.bindFramebuffer(gl.FRAMEBUFFER,null);} else { gl.viewport(0,0,target.width,target.height); gl.bindFramebuffer(gl.FRAMEBUFFER,target.fbo);} if(clear){ gl.clearColor(0,0,0,1); gl.clear(gl.COLOR_BUFFER_BIT);} gl.drawElements(gl.TRIANGLES,6,gl.UNSIGNED_SHORT,0); }; })();

  function createFBO(w,h,internalFormat,format,type,param){ gl.activeTexture(gl.TEXTURE0); const texture=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,texture); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,param); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,param); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE); gl.texImage2D(gl.TEXTURE_2D,0,internalFormat,w,h,0,format,type,null); const fbo=gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER,fbo); gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,texture,0); gl.viewport(0,0,w,h); gl.clear(gl.COLOR_BUFFER_BIT); const texelSizeX=1.0/w,texelSizeY=1.0/h; return {texture,fbo,width:w,height:h,texelSizeX,texelSizeY,attach(id){ gl.activeTexture(gl.TEXTURE0+id); gl.bindTexture(gl.TEXTURE_2D,texture); return id; }}; }
  function createDoubleFBO(w,h,iF,f,t,p){ let a=createFBO(w,h,iF,f,t,p); let b=createFBO(w,h,iF,f,t,p); return {width:w,height:h,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a;},set read(v){a=v;},get write(){return b;},set write(v){b=v;},swap(){const t=a;a=b;b=t;}}; }
  function resizeFBO(target,w,h,iF,f,t,p){ const n=createFBO(w,h,iF,f,t,p); copyProgram.bind(); gl.uniform1i(copyProgram.uniforms.uTexture,target.attach(0)); blit(n); return n; }
  function resizeDoubleFBO(target,w,h,iF,f,t,p){ if(target.width===w&&target.height===h) return target; target.read=resizeFBO(target.read,w,h,iF,f,t,p); target.write=createFBO(w,h,iF,f,t,p); target.width=w; target.height=h; target.texelSizeX=1.0/w; target.texelSizeY=1.0/h; return target; }

  const copyProgram=new Program(baseVertexShader,copyShader);
  const clearProgram=new Program(baseVertexShader,clearShader);
  const splatProgram=new Program(baseVertexShader,splatShader);
  const advectionProgram=new Program(baseVertexShader,advectionShader);
  const divergenceProgram=new Program(baseVertexShader,divergenceShader);
  const curlProgram=new Program(baseVertexShader,curlShader);
  const vorticityProgram=new Program(baseVertexShader,vorticityShader);
  const pressureProgram=new Program(baseVertexShader,pressureShader);
  const gradienSubtractProgram=new Program(baseVertexShader,gradientSubtractShader);
  const bloomPrefilterProgram=new Program(baseVertexShader,bloomPrefilterShader);
  const bloomBlurProgram=new Program(baseVertexShader,bloomBlurShader);
  const bloomFinalProgram=new Program(baseVertexShader,bloomFinalShader);
  const displayMaterial=new Material(baseVertexShader,displayShaderSource);

  let dye,velocity,divergence,curl,pressure; let bloom; let bloomFramebuffers=[];
  function getResolution(r){ let ar=gl.drawingBufferWidth/gl.drawingBufferHeight; if(ar<1) ar=1.0/ar; const min=Math.round(r); const max=Math.round(r*ar); if(gl.drawingBufferWidth>gl.drawingBufferHeight) return {width:max,height:min}; return {width:min,height:max}; }
  function initFramebuffers(){ const simRes=getResolution(config.SIM_RESOLUTION); const dyeRes=getResolution(config.DYE_RESOLUTION); const texType=ext.halfFloatTexType; const rgba=ext.formatRGBA,rg=ext.formatRG,r=ext.formatR; const filtering=ext.supportLinearFiltering?gl.LINEAR:gl.NEAREST; gl.disable(gl.BLEND);
    if(!dye) dye=createDoubleFBO(dyeRes.width,dyeRes.height,rgba.internalFormat,rgba.format,texType,filtering); else dye=resizeDoubleFBO(dye,dyeRes.width,dyeRes.height,rgba.internalFormat,rgba.format,texType,filtering);
    if(!velocity) velocity=createDoubleFBO(simRes.width,simRes.height,rg.internalFormat,rg.format,texType,filtering); else velocity=resizeDoubleFBO(velocity,simRes.width,simRes.height,rg.internalFormat,rg.format,texType,filtering);
    divergence=createFBO(simRes.width,simRes.height,r.internalFormat,r.format,texType,gl.NEAREST);
    curl=createFBO(simRes.width,simRes.height,r.internalFormat,r.format,texType,gl.NEAREST);
    pressure=createDoubleFBO(simRes.width,simRes.height,r.internalFormat,r.format,texType,gl.NEAREST);
    initBloomFramebuffers();
  }
  function initBloomFramebuffers(){ if(!config.BLOOM) return; const res=getResolution(config.BLOOM_RESOLUTION); const texType=ext.halfFloatTexType; const rgba=ext.formatRGBA; const filtering=ext.supportLinearFiltering?gl.LINEAR:gl.NEAREST; bloom=createFBO(res.width,res.height,rgba.internalFormat,rgba.format,texType,filtering); bloomFramebuffers.length=0; for(let i=0;i<config.BLOOM_ITERATIONS;i++){ const w=res.width>>(i+1); const h=res.height>>(i+1); if(w<2||h<2) break; bloomFramebuffers.push(createFBO(w,h,rgba.internalFormat,rgba.format,texType,filtering)); } }
  function updateKeywords(){ const kw=[]; if(config.SHADING) kw.push('SHADING'); if(config.BLOOM) kw.push('BLOOM'); displayMaterial.setKeywords(kw); }
  updateKeywords(); initFramebuffers();

  // ---- palettes ----
  const PALETTES = {
    ink:   [[0.07,0.16,0.62],[0.28,0.10,0.78],[0.78,0.13,0.72],[0.98,0.32,0.42],[1.00,0.55,0.22],[0.16,0.34,0.95]],
    ash:   [[0.18,0.22,0.34],[0.26,0.28,0.40],[0.34,0.30,0.44],[0.30,0.34,0.48],[0.22,0.28,0.42],[0.16,0.22,0.36]],
    steel: [[0.10,0.30,0.66],[0.16,0.46,0.78],[0.22,0.60,0.82],[0.40,0.72,0.86],[0.20,0.40,0.74],[0.12,0.26,0.60]],
    smoke: [[0.20,0.22,0.30],[0.30,0.30,0.38],[0.40,0.38,0.44],[0.34,0.32,0.40],[0.24,0.24,0.32],[0.18,0.20,0.28]],
    neon:  [[0.95,0.10,0.62],[0.62,0.10,0.95],[0.10,0.85,0.95],[0.95,0.20,0.75],[0.40,0.20,1.00],[0.10,0.70,0.95]],
    calm:  [[0.16,0.34,0.52],[0.20,0.46,0.56],[0.28,0.56,0.58],[0.34,0.52,0.56],[0.22,0.40,0.54],[0.16,0.32,0.50]],
    ember: [[0.62,0.10,0.16],[0.86,0.22,0.14],[1.00,0.42,0.14],[1.00,0.60,0.20],[0.80,0.20,0.30],[0.55,0.10,0.20]],
  };
  let paletteCur = PALETTES.ink.map(a=>a.slice());
  let paletteTgt = PALETTES.ink.map(a=>a.slice());
  let paletteT = Math.random()*paletteCur.length;
  function paletteColor(t){ const n=paletteCur.length; const idx=((t%n)+n)%n; const i0=Math.floor(idx); const i1=(i0+1)%n; const f=idx-i0; const a=paletteCur[i0],b=paletteCur[i1]; return {r:a[0]+(b[0]-a[0])*f,g:a[1]+(b[1]-a[1])*f,b:a[2]+(b[2]-a[2])*f}; }
  function generateColor(){ paletteT+=0.45+Math.random()*0.6; const c=paletteColor(paletteT); const s=0.16; return {r:c.r*s,g:c.g*s,b:c.b*s}; }

  // ---- config target tweening ----
  const TWEEN_KEYS=['CURL','SPLAT_FORCE','BLOOM_INTENSITY','DENSITY_DISSIPATION'];
  const target={}; TWEEN_KEYS.forEach(k=>target[k]=config[k]);
  function tweenStep(){ const k=0.045; TWEEN_KEYS.forEach(key=>{ config[key]+=(target[key]-config[key])*k; }); for(let i=0;i<paletteCur.length;i++){ for(let j=0;j<3;j++){ paletteCur[i][j]+=(paletteTgt[i][j]-paletteCur[i][j])*k; } } }

  function pointerPrototype(){ return {id:-1,down:false,moved:false,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,color:{r:0.1,g:0.04,b:0.16}}; }
  const pointers=[pointerPrototype()];
  function updatePointerDown(p,id,x,y){ p.id=id; p.down=true; p.moved=false; p.texcoordX=x/canvas.width; p.texcoordY=1.0-y/canvas.height; p.prevTexcoordX=p.texcoordX; p.prevTexcoordY=p.texcoordY; p.deltaX=0; p.deltaY=0; p.color=generateColor(); }
  function updatePointerMove(p,x,y){ p.prevTexcoordX=p.texcoordX; p.prevTexcoordY=p.texcoordY; p.texcoordX=x/canvas.width; p.texcoordY=1.0-y/canvas.height; p.deltaX=correctDeltaX(p.texcoordX-p.prevTexcoordX); p.deltaY=correctDeltaY(p.texcoordY-p.prevTexcoordY); p.moved=Math.abs(p.deltaX)>0||Math.abs(p.deltaY)>0; }
  function correctDeltaX(d){ const ar=canvas.width/canvas.height; if(ar<1) d*=ar; return d; }
  function correctDeltaY(d){ const ar=canvas.width/canvas.height; if(ar>1) d/=ar; return d; }
  function correctRadius(r){ const ar=canvas.width/canvas.height; if(ar>1) r*=ar; return r; }

  function splat(x,y,dx,dy,color){ splatProgram.bind(); gl.uniform1i(splatProgram.uniforms.uTarget,velocity.read.attach(0)); gl.uniform1f(splatProgram.uniforms.aspectRatio,canvas.width/canvas.height); gl.uniform2f(splatProgram.uniforms.point,x,y); gl.uniform3f(splatProgram.uniforms.color,dx,dy,0.0); gl.uniform1f(splatProgram.uniforms.radius,correctRadius(config.SPLAT_RADIUS/100.0)); blit(velocity.write); velocity.swap(); gl.uniform1i(splatProgram.uniforms.uTarget,dye.read.attach(0)); gl.uniform3f(splatProgram.uniforms.color,color.r,color.g,color.b); blit(dye.write); dye.swap(); }
  function splatPointer(p){ const dx=p.deltaX*config.SPLAT_FORCE; const dy=p.deltaY*config.SPLAT_FORCE; splat(p.texcoordX,p.texcoordY,dx,dy,p.color); }
  function clickSplat(p){ const color=generateColor(); color.r*=9; color.g*=9; color.b*=9; const dx=10*(Math.random()-0.5); const dy=30*(Math.random()-0.5); splat(p.texcoordX,p.texcoordY,dx,dy,color); }
  const splatStack=[];
  function multipleSplats(n){ for(let i=0;i<n;i++){ const color=generateColor(); color.r*=10; color.g*=10; color.b*=10; const x=Math.random(),y=Math.random(); const dx=1000*(Math.random()-0.5); const dy=1000*(Math.random()-0.5); splat(x,y,dx,dy,color); } }

  function step(dt){ gl.disable(gl.BLEND);
    curlProgram.bind(); gl.uniform2f(curlProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(curlProgram.uniforms.uVelocity,velocity.read.attach(0)); blit(curl);
    vorticityProgram.bind(); gl.uniform2f(vorticityProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(vorticityProgram.uniforms.uVelocity,velocity.read.attach(0)); gl.uniform1i(vorticityProgram.uniforms.uCurl,curl.attach(1)); gl.uniform1f(vorticityProgram.uniforms.curl,config.CURL); gl.uniform1f(vorticityProgram.uniforms.dt,dt); blit(velocity.write); velocity.swap();
    divergenceProgram.bind(); gl.uniform2f(divergenceProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(divergenceProgram.uniforms.uVelocity,velocity.read.attach(0)); blit(divergence);
    clearProgram.bind(); gl.uniform1i(clearProgram.uniforms.uTexture,pressure.read.attach(0)); gl.uniform1f(clearProgram.uniforms.value,config.PRESSURE); blit(pressure.write); pressure.swap();
    pressureProgram.bind(); gl.uniform2f(pressureProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(pressureProgram.uniforms.uDivergence,divergence.attach(0)); for(let i=0;i<config.PRESSURE_ITERATIONS;i++){ gl.uniform1i(pressureProgram.uniforms.uPressure,pressure.read.attach(1)); blit(pressure.write); pressure.swap(); }
    gradienSubtractProgram.bind(); gl.uniform2f(gradienSubtractProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(gradienSubtractProgram.uniforms.uPressure,pressure.read.attach(0)); gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity,velocity.read.attach(1)); blit(velocity.write); velocity.swap();
    advectionProgram.bind(); gl.uniform2f(advectionProgram.uniforms.texelSize,velocity.texelSizeX,velocity.texelSizeY); if(!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize,velocity.texelSizeX,velocity.texelSizeY); gl.uniform1i(advectionProgram.uniforms.uVelocity,velocity.read.attach(0)); gl.uniform1i(advectionProgram.uniforms.uSource,velocity.read.attach(0)); gl.uniform1f(advectionProgram.uniforms.dt,dt); gl.uniform1f(advectionProgram.uniforms.dissipation,(1.0/config.VELOCITY_DISSIPATION-1.0)); blit(velocity.write); velocity.swap();
    if(!ext.supportLinearFiltering) gl.uniform2f(advectionProgram.uniforms.dyeTexelSize,dye.texelSizeX,dye.texelSizeY); gl.uniform1i(advectionProgram.uniforms.uVelocity,velocity.read.attach(0)); gl.uniform1i(advectionProgram.uniforms.uSource,dye.read.attach(1)); gl.uniform1f(advectionProgram.uniforms.dissipation,(1.0/config.DENSITY_DISSIPATION-1.0)); blit(dye.write); dye.swap();
  }
  function render(target){ if(config.BLOOM) applyBloom(dye.read,bloom); gl.disable(gl.BLEND); drawDisplay(target); }
  function drawDisplay(target){ const w=target==null?gl.drawingBufferWidth:target.width; const h=target==null?gl.drawingBufferHeight:target.height; displayMaterial.bind(); if(config.SHADING) gl.uniform2f(displayMaterial.uniforms.texelSize,1.0/w,1.0/h); gl.uniform1i(displayMaterial.uniforms.uTexture,dye.read.attach(0)); if(config.BLOOM) gl.uniform1i(displayMaterial.uniforms.uBloom,bloom.attach(1)); blit(target); }
  function applyBloom(source,destination){ if(bloomFramebuffers.length<2) return; let last=destination; gl.disable(gl.BLEND); bloomPrefilterProgram.bind(); const knee=config.BLOOM_THRESHOLD*config.BLOOM_SOFT_KNEE+0.0001; gl.uniform3f(bloomPrefilterProgram.uniforms.curve,config.BLOOM_THRESHOLD-knee,knee*2,0.25/knee); gl.uniform1f(bloomPrefilterProgram.uniforms.threshold,config.BLOOM_THRESHOLD); gl.uniform1i(bloomPrefilterProgram.uniforms.uTexture,source.attach(0)); blit(last); bloomBlurProgram.bind(); for(let i=0;i<bloomFramebuffers.length;i++){ const dest=bloomFramebuffers[i]; gl.uniform2f(bloomBlurProgram.uniforms.texelSize,last.texelSizeX,last.texelSizeY); gl.uniform1i(bloomBlurProgram.uniforms.uTexture,last.attach(0)); blit(dest); last=dest; } gl.blendFunc(gl.ONE,gl.ONE); gl.enable(gl.BLEND); for(let i=bloomFramebuffers.length-2;i>=0;i--){ const baseTex=bloomFramebuffers[i]; gl.uniform2f(bloomBlurProgram.uniforms.texelSize,last.texelSizeX,last.texelSizeY); gl.uniform1i(bloomBlurProgram.uniforms.uTexture,last.attach(0)); gl.viewport(0,0,baseTex.width,baseTex.height); blit(baseTex); last=baseTex; } gl.disable(gl.BLEND); bloomFinalProgram.bind(); gl.uniform2f(bloomFinalProgram.uniforms.texelSize,last.texelSizeX,last.texelSizeY); gl.uniform1i(bloomFinalProgram.uniforms.uTexture,last.attach(0)); gl.uniform1f(bloomFinalProgram.uniforms.intensity,config.BLOOM_INTENSITY); blit(destination); }

  let lastUpdateTime=performance.now(); let colorUpdateTimer=0.0;
  function calcDeltaTime(now){ let dt=(now-lastUpdateTime)/1000; if(!(dt>0)) dt=0; dt=Math.min(dt,0.033); lastUpdateTime=now; return dt; }
  function resizeCanvas(){ const dpr=Math.min(window.devicePixelRatio||1,2); const w=Math.floor(canvas.clientWidth*dpr); const h=Math.floor(canvas.clientHeight*dpr); if(canvas.width!==w||canvas.height!==h){ canvas.width=w; canvas.height=h; return true; } return false; }
  function updateColors(dt){ colorUpdateTimer+=dt*config.COLOR_UPDATE_SPEED; if(colorUpdateTimer>=1){ colorUpdateTimer%=1; pointers.forEach(p=>p.color=generateColor()); } }
  function applyInputs(){ if(splatStack.length>0) multipleSplats(splatStack.pop()); pointers.forEach(p=>{ if(p.moved){ p.moved=false; splatPointer(p); } }); }

  let autoT=Math.random()*1000; let autoAccum=0; let autoPrev=autoT;
  const AUTO_PAINT_INTERVAL=0.05; const AUTO_DYE_SCALE=0.85;
  const AUTO_EMITTERS=[{ax:0.40,ay:0.34,fx:0.43,fy:0.31,phx:0.0,phy:1.3},{ax:0.36,ay:0.30,fx:0.27,fy:0.52,phx:2.1,phy:0.4},{ax:0.30,ay:0.38,fx:0.61,fy:0.23,phx:4.0,phy:2.7}];
  function autoPos(e,t){ return {x:0.5+e.ax*Math.sin(t*e.fx+e.phx)*Math.cos(t*e.fy*0.6+e.phy),y:0.5+e.ay*Math.sin(t*e.fy+e.phy)}; }
  function autoPaintStep(dt){ autoT+=dt*0.62; autoAccum+=dt; if(autoAccum<AUTO_PAINT_INTERVAL) return; const span=autoAccum; autoAccum=0; const inv=span>0?(1.0/span):0.0; for(const e of AUTO_EMITTERS){ const p=autoPos(e,autoT),pp=autoPos(e,autoPrev); const dx=(p.x-pp.x)*inv*config.SPLAT_FORCE*0.30; const dy=(p.y-pp.y)*inv*config.SPLAT_FORCE*0.30; const color=generateColor(); color.r*=AUTO_DYE_SCALE; color.g*=AUTO_DYE_SCALE; color.b*=AUTO_DYE_SCALE; splat(p.x,p.y,dx,dy,color); } autoPrev=autoT; }

  let idleTimer=0;
  function frame(now){ const dt=calcDeltaTime(now); if(resizeCanvas()) initFramebuffers(); tweenStep(); updateColors(dt); applyInputs(); if(!pointers[0].down) idleTimer+=dt; else idleTimer=0; const doAuto=config.AUTO_PAINT||(idleTimer>5&&!reduceMotion)||reduceMotion; if(!config.PAUSED){ if(doAuto) autoPaintStep(dt); step(dt); } render(null); }
  function update(now){ frame(typeof now==='number'?now:performance.now()); requestAnimationFrame(update); }

  // ---- global hover painting (alive everywhere) ----
  function clientToCanvas(cx,cy){ const r=canvas.getBoundingClientRect(); return {x:(cx-r.left)*(canvas.width/r.width),y:(cy-r.top)*(canvas.height/r.height)}; }
  let lastMove=0;
  window.addEventListener('mousemove',e=>{ const now=performance.now(); if(now-lastMove<16) {} const pt=pointers[0]; const p=clientToCanvas(e.clientX,e.clientY); if(!pt.down){ pt.prevTexcoordX=pt.texcoordX||(p.x/canvas.width); pt.prevTexcoordY=pt.texcoordY||(1-p.y/canvas.height); } updatePointerMove(pt,p.x,p.y); if(!pt.down && pt.moved){ const dx=pt.deltaX*config.SPLAT_FORCE*0.42; const dy=pt.deltaY*config.SPLAT_FORCE*0.42; const c=pt.color; splat(pt.texcoordX,pt.texcoordY,dx,dy,{r:c.r*0.45,g:c.g*0.45,b:c.b*0.45}); pt.moved=false; } lastMove=now; });
  window.addEventListener('mousedown',e=>{ const p=clientToCanvas(e.clientX,e.clientY); updatePointerDown(pointers[0],-1,p.x,p.y); clickSplat(pointers[0]); });
  window.addEventListener('mouseup',()=>pointers[0].down=false);
  window.addEventListener('touchstart',e=>{ const t=e.targetTouches[0]; if(!t) return; const p=clientToCanvas(t.clientX,t.clientY); updatePointerDown(pointers[0],-1,p.x,p.y); clickSplat(pointers[0]); },{passive:true});
  window.addEventListener('touchmove',e=>{ const t=e.targetTouches[0]; if(!t) return; const p=clientToCanvas(t.clientX,t.clientY); updatePointerMove(pointers[0],p.x,p.y); },{passive:true});
  window.addEventListener('touchend',()=>pointers[0].down=false);
  document.addEventListener('visibilitychange',()=>{ if(!document.hidden) lastUpdateTime=performance.now(); });

  function drawFallback(){ const ctx=canvas.getContext('2d'); if(!ctx) return; function fit(){canvas.width=innerWidth;canvas.height=innerHeight;} fit(); window.addEventListener('resize',fit); const g=ctx.createRadialGradient(innerWidth*0.5,innerHeight*0.45,40,innerWidth*0.5,innerHeight*0.45,Math.max(innerWidth,innerHeight)*0.7); g.addColorStop(0,'#3a2b8c'); g.addColorStop(0.5,'#7a1c8a'); g.addColorStop(1,'#06070e'); ctx.fillStyle=g; ctx.fillRect(0,0,innerWidth,innerHeight); }

  resizeCanvas(); initFramebuffers();
  function seed(){ const bursts=reduceMotion?14:11; for(let i=0;i<bursts;i++){ const color=generateColor(); color.r*=8; color.g*=8; color.b*=8; const ang=(i/bursts)*Math.PI*2+Math.random()*0.6; const rad=0.10+(i/bursts)*0.30; const x=0.5+Math.cos(ang)*rad; const y=0.5+Math.sin(ang)*rad*0.9; const dx=-Math.sin(ang)*900+(Math.random()-0.5)*300; const dy=Math.cos(ang)*900+(Math.random()-0.5)*300; splat(x,y,dx,dy,color); } }
  seed();
  requestAnimationFrame(update);

  // ---- public API ----
  window.INK = {
    config, target,
    toState(obj){
      if(!obj) return;
      if(typeof obj==='string') obj={palette:obj};
      TWEEN_KEYS.forEach(k=>{ if(k in obj) target[k]=obj[k]; });
      if(obj.palette && PALETTES[obj.palette]) paletteTgt=PALETTES[obj.palette].map(a=>a.slice());
      if(obj.VELOCITY_DISSIPATION!=null) config.VELOCITY_DISSIPATION=obj.VELOCITY_DISSIPATION;
    },
    setNow(k,v){ if(k in config) config[k]=v; if(TWEEN_KEYS.includes(k)) target[k]=v; },
    burst(n=10){ splatStack.push(n); },
    // inject a directional splat at normalized coords (0..1, y down)
    splatNorm(x,y,dx,dy,strength=1){ const color=generateColor(); color.r*=8*strength; color.g*=8*strength; color.b*=8*strength; splat(x,1.0-y,dx,dy,color); },
    palettes:Object.keys(PALETTES),
    isWebGL2:ext.isWebGL2, reduceMotion
  };
})();



"use strict";
(function(){
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia && window.matchMedia('(pointer:coarse)').matches;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  const lerp=(a,b,t)=>a+(b-a)*t;
  const $=(s,c=document)=>c.querySelector(s);
  const $$=(s,c=document)=>Array.from(c.querySelectorAll(s));
  const INK=window.INK;

  /* ---------- split kinetic text helpers (already authored in markup) ---------- */

  /* ---------- per-word stagger delays ---------- */
  $$('#manifesto .line, #cta h2').forEach(line=>{
    $$('.word',line).forEach((w,i)=>w.style.setProperty('--d',(i*0.07)+'s'));
  });

  /* ---------- scroll-driven reveals (ticker-based, deterministic) ---------- */
  let revealEls=$$('.reveal,.fade,.clipUp,.mask,.word').filter(el=>!el.closest('#hero'));
  function revealStep(){
    if(!revealEls.length) return;
    const trig=innerHeight*0.86;
    revealEls=revealEls.filter(el=>{ const r=el.getBoundingClientRect(); if(r.top<trig && r.bottom>0){ el.classList.add('in'); return false; } return true; });
  }

  function playHero(){
    $$('#hero .reveal,#hero .fade,#hero .mask,#hero .clipUp').forEach((el,i)=>{
      setTimeout(()=>el.classList.add('in'), 120 + i*90);
    });
    const hero=$('#hero'); if(hero) hero.classList.add('huddle');
    const hud=$('#hudStatus'); if(hud&&INK) hud.textContent=(INK.isWebGL2?'WebGL2':'WebGL1')+' · live';
  }

  /* ---------- preloader ---------- */
  const pre=$('#pre'), preCount=$('#preCount'), preBarI=$('#preBar i');
  function runPreloader(done){
    if(reduce){ pre.classList.add('gone'); done(); return; }
    let p=0; const start=performance.now(); const dur=2100;
    function tick(now){
      const t=clamp((now-start)/dur,0,1);
      // ease-out
      const e=1-Math.pow(1-t,2.2);
      p=Math.round(e*100);
      preCount.textContent=p;
      preBarI.style.width=(e*100)+'%';
      if(t<1){ requestAnimationFrame(tick); }
      else { setTimeout(()=>{ pre.classList.add('gone'); done(); }, 260); }
    }
    requestAnimationFrame(tick);
  }

  /* ---------- pointer tracking (for magnetic buttons only) ---------- */
  let mx=innerWidth/2,my=innerHeight/2;
  if(!coarse){ window.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; },{passive:true}); }
  const magnets=$$('[data-magnetic]');
  function magnetStep(){
    if(coarse) return;
    magnets.forEach(el=>{
      const r=el.getBoundingClientRect();
      const cx=r.left+r.width/2, cy=r.top+r.height/2;
      const ddx=mx-cx, ddy=my-cy; const dist=Math.hypot(ddx,ddy);
      if(dist<r.width*0.9){ el.style.transform=`translate(${ddx*0.26}px,${ddy*0.36}px)`; }
      else { el.style.transform=''; }
    });
  }

  /* ---------- scroll index ---------- */
  const idxWrap=$('#idx');
  const idxSections=$$('section[data-idx]').filter(s=>s.getAttribute('data-idx'));
  idxSections.forEach((s,i)=>{
    const it=document.createElement('div'); it.className='it';
    it.innerHTML=`<span class="lab">${s.getAttribute('data-idx')}</span><span class="pip"></span>`;
    it.addEventListener('click',()=>s.scrollIntoView({behavior:'smooth'}));
    s._idxEl=it; idxWrap.appendChild(it);
  });

  /* ---------- count-ups ---------- */
  let countsDone=false;
  function runCounts(){
    if(countsDone) return; countsDone=true;
    $$('#spec [data-count]').forEach(el=>{
      const tgt=parseFloat(el.getAttribute('data-count')); const start=performance.now(); const dur=1400;
      function t(now){ const k=clamp((now-start)/dur,0,1); const e=1-Math.pow(1-k,3); el.firstChild ? el.textContent=Math.round(e*tgt) : null; el.textContent=Math.round(e*tgt); if(k<1) requestAnimationFrame(t); }
      requestAnimationFrame(t);
    });
  }
  const specIO=new IntersectionObserver(es=>{ es.forEach(e=>{ if(e.isIntersecting){ runCounts(); $$('#spec .spec').forEach(s=>s.classList.add('in')); specIO.disconnect(); } }); },{threshold:0.35});
  if($('#spec')) specIO.observe($('#spec'));

  /* ---------- TrueFocus band ---------- */
  (function setupTrueFocus(){
    const c=$('#trueFocus'); if(!c) return;
    const frame=$('.focus-frame',c);
    const words=(c.getAttribute('data-words')||'').split(' ').filter(Boolean);
    const spans=words.map(w=>{ const s=document.createElement('span'); s.className='focus-word'; s.textContent=w; c.appendChild(s); return s; });
    let idx=0, manual=false, manualIdx=0, active=false;
    function place(i){ const el=spans[i]; if(!el) return; const pr=c.getBoundingClientRect(); const r=el.getBoundingClientRect();
      frame.style.transform=`translate(${r.left-pr.left}px,${r.top-pr.top}px)`; frame.style.width=r.width+'px'; frame.style.height=r.height+'px'; frame.style.opacity='1';
      spans.forEach((s,j)=>s.classList.toggle('active', j===i)); }
    spans.forEach((s,i)=>{ s.addEventListener('mouseenter',()=>{ manual=true; manualIdx=i; place(i); }); s.addEventListener('mouseleave',()=>{ manual=false; }); });
    const fio=new IntersectionObserver(es=>es.forEach(e=>{ active=e.isIntersecting; if(active) place(manual?manualIdx:idx); }),{threshold:0.4});
    fio.observe(c);
    setInterval(()=>{ if(!active||manual) return; idx=(idx+1)%spans.length; place(idx); }, 1900);
    window.addEventListener('resize',()=>place(manual?manualIdx:idx),{passive:true});
    setTimeout(()=>place(0),140);
  })();

  /* ---------- DIRECT states ---------- */
  const directStates=[
    { name:'Ink',   CURL:18, SPLAT_FORCE:3800, BLOOM_INTENSITY:0.85, DENSITY_DISSIPATION:0.74, palette:'ink',   desc:'Tight, vivid filaments over deep blue &mdash; the <span class="s">signature</span> look.' },
    { name:'Smoke', CURL:6,  SPLAT_FORCE:2600, BLOOM_INTENSITY:0.34, DENSITY_DISSIPATION:0.93, palette:'smoke', desc:'Slow, heavy, monochrome &mdash; <span class="s">billowing</span> and soft.' },
    { name:'Neon',  CURL:32, SPLAT_FORCE:5400, BLOOM_INTENSITY:1.28, DENSITY_DISSIPATION:0.68, palette:'neon',  desc:'Electric and luminous &mdash; <span class="s">pure energy</span>.' },
    { name:'Calm',  CURL:11, SPLAT_FORCE:2000, BLOOM_INTENSITY:0.55, DENSITY_DISSIPATION:0.82, palette:'calm',  desc:'A gentle teal drift &mdash; <span class="s">quiet</span> and meditative.' },
  ];
  const directWord=$('#directWord');
  const directDesc=$('#directDesc'), directBarI=$('#directBar i');
  const m_curl=$('#m_curl'),m_force=$('#m_force'),m_bloom=$('#m_bloom'),m_fade=$('#m_fade');
  const b_curl=$('#b_curl'),b_force=$('#b_force'),b_bloom=$('#b_bloom'),b_fade=$('#b_fade');
  let lastPaletteIdx=0;
  function swapWord(idx){
    if(!directWord) return;
    directWord.classList.add('out');
    setTimeout(()=>{
      directWord.textContent=directStates[idx].name;
      directWord.classList.remove('out'); directWord.classList.add('inq');
      // force reflow then animate in
      void directWord.offsetWidth;
      directWord.classList.remove('inq');
    },260);
  }
  function updateDirect(p){
    const n=directStates.length;
    const sf=clamp(p,0,1)*(n-1);
    const i0=Math.floor(sf), i1=Math.min(i0+1,n-1), f=sf-i0;
    const a=directStates[i0], b=directStates[i1];
    const cur=lerp(a.CURL,b.CURL,f), force=lerp(a.SPLAT_FORCE,b.SPLAT_FORCE,f), bloom=lerp(a.BLOOM_INTENSITY,b.BLOOM_INTENSITY,f), fade=lerp(a.DENSITY_DISSIPATION,b.DENSITY_DISSIPATION,f);
    const palIdx=Math.round(sf);
    if(INK){ INK.toState({CURL:cur,SPLAT_FORCE:force,BLOOM_INTENSITY:bloom,DENSITY_DISSIPATION:fade}); }
    if(m_curl){ m_curl.textContent=Math.round(cur); m_force.textContent=Math.round(force); m_bloom.textContent=bloom.toFixed(2); m_fade.textContent=fade.toFixed(2); }
    if(b_curl){ b_curl.style.width=clamp(cur/40*100,2,100)+'%'; b_force.style.width=clamp(force/6000*100,2,100)+'%'; b_bloom.style.width=clamp(bloom/1.4*100,2,100)+'%'; b_fade.style.width=clamp((fade-0.6)/0.35*100,2,100)+'%'; }
    if(palIdx!==lastPaletteIdx){
      if(INK) INK.toState({palette:directStates[palIdx].palette});
      swapWord(palIdx);
      directDesc.innerHTML=directStates[palIdx].desc;
      lastPaletteIdx=palIdx;
    }
    if(directBarI) directBarI.style.width=(clamp(p,0,1)*100)+'%';
  }
  if(directWord) directWord.textContent=directStates[0].name;
  updateDirect(0);

  /* ---------- tension scrub ---------- */
  const tensionLines=$$('#tension [data-scrub-lines] .ln > span');
  function updateTension(p){
    const n=tensionLines.length;
    tensionLines.forEach((el,i)=>{
      const seg=clamp((p*(n+0.5) - i),0,1);
      const e=1-Math.pow(1-seg,3);
      el.parentElement.style.transform=`translateY(${(1-e)*110}%)`;
      el.parentElement.style.opacity=String(0.15+e*0.85);
    });
  }

  /* ---------- pipeline scrub ---------- */
  const pipeTrack=$('#pipeTrack');
  function updatePipe(p){
    if(!pipeTrack) return;
    const max=pipeTrack.scrollWidth - innerWidth;
    pipeTrack.style.transform=`translateX(${-clamp(p,0,1)*max}px)`;
    $$('.pstage .pbar',pipeTrack).forEach((bar,i)=>{
      const seg=clamp(p*8 - i,0,1);
      bar.style.transform=`scaleX(${seg})`;
    });
  }
  $$('.pstage .pbar').forEach(b=>b.style.transform='scaleX(0)');

  /* ---------- fluid state by active section ---------- */
  let lastFluidId='';
  function fluidByActive(active){
    if(!active||!INK) return;
    if(active.id==='direct') return; // direct handled by its scrub
    const d=active.getAttribute('data-fluid');
    if(d && active.id!==lastFluidId){ try{ INK.toState(JSON.parse(d)); lastFluidId=active.id; }catch(e){} }
  }

  /* ---------- scroll velocity → fluid kick ---------- */
  let lastScroll=window.scrollY, vel=0, kickAccum=0;

  /* ---------- main ticker ---------- */
  const prog=$('#prog');
  const glassLens=$('#glassCard'), glassSec=$('#glass');
  const pins={ tension:$('#tension'), reveal:$('#reveal'), direct:$('#direct') };
  function pinProgress(sec){ if(!sec) return 0; const r=sec.getBoundingClientRect(); return clamp(-r.top/(r.height-innerHeight),0,1); }

  function tick(){
    magnetStep();
    revealStep();
    // scroll metrics
    const sy=window.scrollY;
    const docH=document.documentElement.scrollHeight-innerHeight;
    prog.style.width=(clamp(sy/docH,0,1)*100)+'%';
    vel=sy-lastScroll; lastScroll=sy;

    // scroll-velocity fluid kick (subtle)
    if(INK){
      kickAccum+=Math.abs(vel);
      if(kickAccum>240){ const yy=clamp(0.5 - (vel/innerHeight),0.05,0.95); const dir=Math.sign(vel)||1; INK.splatNorm(Math.random()*0.9+0.05, yy, (Math.random()-0.5)*700, dir*460, 0.45); kickAccum=0; }
    }

    // glass lens parallax
    if(glassLens && glassSec && !coarse){ const r=glassSec.getBoundingClientRect(); if(r.bottom>0 && r.top<innerHeight){ const ox=(mx-innerWidth/2)/innerWidth, oy=(my-innerHeight/2)/innerHeight; glassLens.style.transform=`translate(${ox*18}px,${oy*14}px)`; } }

    // pins
    updateTension(pinProgress(pins.tension));
    const rP=pinProgress(pins.reveal);
    updatePipe(rP);
    // hide the index rail while the horizontal pipeline is pinned (it overlaps)
    idxWrap.classList.toggle('hide', rP>0.01 && rP<0.99);
    const dP=pinProgress(pins.direct);
    if(dP>0 && dP<1){ lastFluidId='direct-active'; }
    updateDirect(dP);

    // active section for index + fluid
    const center=innerHeight/2; let active=null, best=1e9;
    idxSections.forEach(s=>{ const r=s.getBoundingClientRect(); const c=r.top+r.height/2; const d=Math.abs(c-center); if(r.top<center && r.bottom>center){ if(d<best){ best=d; active=s; } } });
    idxSections.forEach(s=>{ if(s._idxEl) s._idxEl.classList.toggle('on', s===active); });
    fluidByActive(active);

    requestAnimationFrame(tick);
  }

  /* ---------- boot ---------- */
  window.addEventListener('load',()=>{},{once:true});
  runPreloader(()=>{ playHero(); });
  requestAnimationFrame(tick);

  // recompute pipe max on resize
  window.addEventListener('resize',()=>{ updatePipe(pinProgress(pins.reveal)); },{passive:true});

  // expose for verification
  window.__inkReady=true;
})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas id="c"></canvas>
<div id="vig"></div>
<div id="scrim"></div>
<div id="grain"></div>

<div id="prog"></div>
<div id="idx"></div>

<div id="pre">
<div id="preCount">0</div>
<div id="preWord">Real-time<br/>Rendered live</div>
<div id="preBar"><i></i></div>
</div>

<nav>
<div className="brand">INK<span className="d">.</span></div>
<div className="navr">
<a className="h" href="#direct">Engine</a>
<a className="h" href="#spec">Specs</a>
<a href="#cta">Get INK</a>
</div>
</nav>
<main>

<section data-fluid='{"CURL":16,"SPLAT_FORCE":3600,"BLOOM_INTENSITY":0.85,"DENSITY_DISSIPATION":0.74,"palette":"ink"}' data-idx="Hero" id="hero">
<div id="heroHud">
<span className="bracket tl"></span><span className="bracket tr"></span><span className="bracket bl"></span><span className="bracket br"></span>
</div>
<div className="wrap">
<div className="eyebrow reveal">Real-time fluid engine</div>
<h1><span className="mask"><span data-stagger="">INK<span className="d">.</span></span></span></h1>
<div className="sub">
<div className="lede reveal">Not a video. Not a loop. A living surface of <em>physics</em>, solved on your GPU sixty times a second.</div>
<div className="reveal" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '14px'}}>
<span className="chip"><span className="live"></span> <span id="hudStatus">WebGL2 · live</span></span>
<div className="meta">One file · zero deps<br/>v3.0 — 2026</div>
</div>
</div>
</div>
</section>

<section data-fluid='{"CURL":15,"SPLAT_FORCE":3400,"BLOOM_INTENSITY":0.9,"DENSITY_DISSIPATION":0.74,"palette":"ink"}' data-idx="Showcase" id="showcase">
<div className="wrap">
<div className="secHead">
<div>
<div className="eyebrow reveal">The product</div>
<h2 className="reveal" style={{fontWeight: '500', letterSpacing: '-0.035em', fontSize: 'clamp(30px,5vw,64px)'}}>One canvas. <span className="big" style={{fontSize: 'inherit'}}><span className="g">Infinite</span></span> motion.</h2>
</div>
<p className="lead reveal secHead-lead" style={{color: 'var(--muted)', maxWidth: '34ch'}}>Everything below is the live engine — no screenshots. Drag anywhere to push the dye around.</p>
</div>
<div className="showStage">
<div className="window showWin reveal clipUp">
<div className="winbar"><span className="dotr" style={{background: '#ff5f57'}}></span><span className="dotr" style={{background: '#febc2e'}}></span><span className="dotr" style={{background: '#28c840'}}></span><span className="url">ink.app / live</span></div>
<div className="winbody">
<div className="scan"></div>
<div className="wgrid"></div>
<div className="wmark">INK<span className="d">.</span></div>
<div className="whud"><span className="wstat">192³ sim · 1024² dye · WebGL2</span><span className="chip liveTag"><span className="live"></span> 60 FPS</span></div>
</div>
</div>
<div className="annot a1 reveal"><div className="glass acard"><div className="k">Solver</div><div className="v">Navier–Stokes<small>Stable-fluids, 26 pressure iterations / frame</small></div></div></div>
<div className="annot a2 reveal"><div className="glass acard"><div className="k">Dye field</div><div className="v">1024 × 1024<small>Half-float, bloom + tone-mapped</small></div></div></div>
<div className="annot a3 reveal"><div className="glass acard"><div className="k">Footprint</div><div className="v">~48 KB<small>Single file, zero dependencies</small></div></div></div>
</div>
</div>
</section>

<section data-fluid='{"CURL":10,"SPLAT_FORCE":2400,"BLOOM_INTENSITY":0.5,"DENSITY_DISSIPATION":0.82,"palette":"ash"}' data-idx="Focus" id="focus">
<div className="wrap">
<div className="focus-container" data-words="Real-time. Reactive. Alive." id="trueFocus">
<div className="focus-frame"><span className="corner tlc"></span><span className="corner trc"></span><span className="corner blc"></span><span className="corner brc"></span></div>
</div>
<div className="sublabel reveal">Three words. One engine.</div>
</div>
</section>

<section className="pin" data-fluid='{"CURL":7,"SPLAT_FORCE":2400,"BLOOM_INTENSITY":0.4,"DENSITY_DISSIPATION":0.9,"palette":"ash"}' data-idx="Idea" id="tension" style={{height: '280vh'}}>
<div className="pinStick">
<div className="wrap">
<div className="big" data-scrub-lines="">
<div className="ln"><span className="dim">Everything that ever moved</span></div>
<div className="ln"><span className="dim">across a screen</span></div>
<div className="ln">was a <span className="s">recording.</span></div>
<div className="ln" style={{marginTop: '0.4em'}}>This <span className="g">is alive.</span></div>
</div>
</div>
</div>
</section>

<section className="pin" data-fluid='{"CURL":22,"SPLAT_FORCE":4200,"BLOOM_INTENSITY":1.0,"DENSITY_DISSIPATION":0.72,"palette":"ink"}' data-idx="Physics" id="reveal" style={{height: '520vh'}}>
<div className="pinStick">
<div id="pipeHead">
<div className="wrap">
<div className="eyebrow">The loop · 8 stages every frame</div>
<div className="big" style={{fontSize: 'clamp(28px,4.4vw,64px)'}}>It’s <span className="g">physics.</span></div>
</div>
</div>
<div id="pipeTrack">
<div className="pstage"><div className="pn">STAGE 01</div><div className="pdiag"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 56 56"><path d="M28 28 q0-7 7-7 q11 0 11 12 q0 15-18 15 q-22 0-22-23"></path><circle cx="28" cy="28" fill="currentColor" r="2.4" stroke="none"></circle></svg></div><div className="pt"><span className="g">Curl</span></div><div className="pd">Measure how fast the fluid spins at every point on the grid.</div><div className="pbar"></div></div>
<div className="pstage"><div className="pn">STAGE 02</div><div className="pdiag"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 56 56"><path d="M16 32 a12 12 0 1 1 7 9"></path><path d="M23 41 l-7 2 l1.5-7.5"></path><path d="M40 24 a12 12 0 0 0-7-9" opacity="0.5"></path></svg></div><div className="pt"><span className="g">Vorticity</span></div><div className="pd">Feed energy back into those swirls so they stay wispy and never flatten out.</div><div className="pbar"></div></div>
<div className="pstage"><div className="pn">STAGE 03</div><div className="pdiag"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 56 56"><circle cx="28" cy="28" fill="currentColor" r="2.6" stroke="none"></circle><path d="M28 22V12M28 12l-3 3M28 12l3 3"></path><path d="M28 34v10M28 44l-3-3M28 44l3-3"></path><path d="M22 28H12M12 28l3-3M12 28l3 3"></path><path d="M34 28h10M44 28l-3-3M44 28l3 3"></path></svg></div><div className="pt"><span className="g">Divergence</span></div><div className="pd">Find where the fluid is wrongly compressing or pulling apart.</div><div className="pbar"></div></div>
<div className="pstage"><div className="pn">STAGE 04</div><div className="pdiag"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 56 56"><circle cx="28" cy="28" r="4"></circle><circle cx="28" cy="28" opacity="0.7" r="11"></circle><circle cx="28" cy="28" opacity="0.4" r="18"></circle></svg></div><div className="pt"><span className="g">Pressure</span></div><div className="pd">Solve twenty-six times for the field that cancels that compression.</div><div className="pbar"></div></div>
<div className="pstage"><div className="pn">STAGE 05</div><div className="pdiag"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 56 56"><path d="M10 34l8-6M10 34l9 1" opacity="0.5"></path><path d="M10 22h36M46 22l-5-4M46 22l-5 4"></path><path d="M10 34h28" opacity="0.5"></path></svg></div><div className="pt"><span className="g">Project</span></div><div className="pd">Subtract pressure from velocity. Now it is truly incompressible — a real fluid.</div><div className="pbar"></div></div>
<div className="pstage"><div className="pn">STAGE 06</div><div className="pdiag"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 56 56"><path d="M8 22q9-9 18 0t18 0"></path><path d="M8 34q9-9 18 0t18 0" opacity="0.6"></path><path d="M44 22l1-6M44 22l5-2"></path></svg></div><div className="pt"><span className="g">Advect</span></div><div className="pd">Carry the motion forward along itself, tracing each point back in time.</div><div className="pbar"></div></div>
<div className="pstage"><div className="pn">STAGE 07</div><div className="pdiag"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 56 56"><path d="M28 10c7 10 12 15 12 23a12 12 0 0 1-24 0c0-8 5-13 12-23z"></path><path d="M22 33a6 6 0 0 0 6 6" opacity="0.6"></path></svg></div><div className="pt"><span className="g">Dye</span></div><div className="pd">Push the color through the flow, then let it gently fade.</div><div className="pbar"></div></div>
<div className="pstage"><div className="pn">STAGE 08</div><div className="pdiag"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 56 56"><rect height="26" rx="3" width="38" x="9" y="13"></rect><path d="M22 46h12M28 39v7"></path><path d="M34 22l1.6 3.4L39 27l-3.4 1.6L34 32l-1.6-3.4L29 27l3.4-1.6z" fill="currentColor" stroke="none"></path></svg></div><div className="pt"><span className="g">Render</span></div><div className="pd">Light it, bloom it, tone-map it, and paint it to your screen.</div><div className="pbar"></div></div>
</div>
</div>
</section>

<section data-fluid='{"CURL":15,"SPLAT_FORCE":3200,"BLOOM_INTENSITY":0.7,"DENSITY_DISSIPATION":0.76,"palette":"steel"}' data-idx="Specs" id="spec">
<div className="wrap">
<div className="eyebrow reveal" style={{marginBottom: '40px'}}>Built different</div>
<div className="specGrid">
<div className="spec" style={{-W: '92%'}}><div className="num" data-count="60">0</div><div className="cap">Frames per second</div><div className="barwrap"><i></i></div></div>
<div className="spec" style={{-W: '100%'}}><div className="num" data-count="1">0</div><div className="cap">Single HTML file</div><div className="barwrap"><i></i></div></div>
<div className="spec" style={{-W: '10%'}}><div className="num" data-count="0">0</div><div className="cap">Dependencies</div><div className="barwrap"><i></i></div></div>
<div className="spec" style={{-W: '100%'}}><div className="num">∞</div><div className="cap">Frames, never repeating</div><div className="barwrap"><i></i></div></div>
</div>
</div>
<div className="marq" style={{marginTop: '0'}}>
<div className="track">
<span>Navier–Stokes <span className="o">·</span> GPU solver <span className="o">·</span> Vorticity confinement <span className="o">·</span> Jacobi pressure <span className="o">·</span> Semi-Lagrangian advection <span className="o">·</span> Bloom <span className="o">·</span> Half-float FBOs <span className="o">·</span> </span>
<span>Navier–Stokes <span className="o">·</span> GPU solver <span className="o">·</span> Vorticity confinement <span className="o">·</span> Jacobi pressure <span className="o">·</span> Semi-Lagrangian advection <span className="o">·</span> Bloom <span className="o">·</span> Half-float FBOs <span className="o">·</span> </span>
</div>
</div>
</section>

<section data-fluid='{"CURL":13,"SPLAT_FORCE":3000,"BLOOM_INTENSITY":0.85,"DENSITY_DISSIPATION":0.78,"palette":"steel"}' data-idx="Glass" id="glass">
<div className="gstick">
<div className="glassCard reveal" id="glassCard">
<div className="eyebrow">Glass UI</div>
<h2>Your interface, floating on the <span className="big" style={{fontSize: 'inherit'}}><span className="g">engine.</span></span></h2>
<p>Frosted panels, crisp type, living motion underneath. Layer real product UI straight over INK — menus, cards, pricing — and it stays perfectly legible while the fluid breathes behind it.</p>
<div className="gstats">
<div><div className="gn">AA</div><div className="gl">Contrast-safe text</div></div>
<div><div className="gn">60</div><div className="gl">FPS behind glass</div></div>
<div><div className="gn">0</div><div className="gl">Extra requests</div></div>
</div>
</div>
</div>
</section>

<section className="pin" data-idx="Engine" id="direct" style={{height: '440vh'}}>
<div className="pinStick">
<div className="wrap" style={{width: '100%'}}>
<div className="eyebrow" style={{marginBottom: '30px'}}>Direct the engine — with your scroll</div>
<div id="directLabels"><div className="dMask"><span className="g" id="directWord">Ink</span></div></div>
<div id="directDesc">Tight, vivid filaments over deep blue — the <span className="s">signature</span> look.</div>
<div className="glass" id="directPanel" style={{padding: '20px 22px'}}>
<div className="pr"><div className="top"><span>VORTICITY</span><span className="kv" id="m_curl">18</span></div><div className="bar"><i id="b_curl"></i></div></div>
<div className="pr"><div className="top"><span>SPLAT FORCE</span><span className="kv" id="m_force">3800</span></div><div className="bar"><i id="b_force"></i></div></div>
<div className="pr"><div className="top"><span>BLOOM</span><span className="kv" id="m_bloom">0.85</span></div><div className="bar"><i id="b_bloom"></i></div></div>
<div className="pr" style={{marginBottom: '0'}}><div className="top"><span>DYE FADE</span><span className="kv" id="m_fade">0.74</span></div><div className="bar"><i id="b_fade"></i></div></div>
</div>
</div>
<div id="directBar"><i></i></div>
</div>
</section>

<section data-idx="Embed" id="embed">
<div className="wrap">
<div className="secHead">
<div>
<div className="eyebrow reveal">Drop it anywhere</div>
<h2 className="reveal" style={{fontWeight: '600', letterSpacing: '-0.04em', lineHeight: '0.96', fontSize: 'clamp(36px,6.5vw,92px)'}}>Two tags<br/>and it’s alive.</h2>
</div>
<p className="lead2 reveal">No framework. No build step. Paste the canvas and the script into any page — a hero, a card, a full background.</p>
</div>
<div className="grid2">
<div className="editor reveal clipUp">
<div className="winbar"><span className="dotr" style={{background: '#ff5f57'}}></span><span className="dotr" style={{background: '#febc2e'}}></span><span className="dotr" style={{background: '#28c840'}}></span><span className="url" style={{color: '#7e88a8', background: 'rgba(255,255,255,0.06)'}}>index.html</span></div>
<pre><code><span className="c-com">&lt;!-- drop the engine into any page --&gt;</span>
<span className="c-tag">&lt;canvas</span> <span className="c-fn">id</span>=<span className="c-str">"ink"</span><span className="c-tag">&gt;&lt;/canvas&gt;</span>
<span className="c-tag">&lt;script </span><span className="c-fn">src</span>=<span className="c-str">"ink.js"</span><span className="c-tag">&gt;&lt;/script&gt;</span>

<span className="c-tag">&lt;script&gt;</span>
  <span className="c-key">INK</span>.<span className="c-fn">mount</span>(<span className="c-str">"#ink"</span>, {
    palette: <span className="c-str">"ink"</span>,
    curl: <span className="c-tag">18</span>,
    bloom: <span className="c-tag">0.85</span>
  })
<span className="c-tag">&lt;/script&gt;</span></code></pre>
</div>
<div className="device reveal">
<div className="frame">
<div className="demobar"><span className="dotr" style={{background: '#ff5f57'}}></span><span className="dotr" style={{background: '#febc2e'}}></span><span className="dotr" style={{background: '#28c840'}}></span></div>
<div className="demo" id="embedDemo"></div>
</div>
<div className="tagline">your-site.com — INK as a living background</div>
</div>
</div>
<div className="embed-cards">
<div className="ec reveal"><div className="n">&lt; 1<span style={{fontSize: '0.5em'}}>min</span></div><div className="t">From paste to running</div></div>
<div className="ec reveal"><div className="n">0</div><div className="t">npm installs required</div></div>
<div className="ec reveal"><div className="n">100%</div><div className="t">Runs offline, on a phone</div></div>
</div>
</div>
</section>

<section data-fluid='{"CURL":20,"SPLAT_FORCE":4600,"BLOOM_INTENSITY":1.05,"DENSITY_DISSIPATION":0.7,"palette":"ink"}' data-idx="Touch" id="touch">
<div className="center">
<div className="big reveal" style={{textAlign: 'center'}}>Now <span className="s g">touch</span> it.</div>
<div className="hint reveal">Move your cursor · drag to smear · click to burst</div>
</div>
</section>

<section data-fluid='{"CURL":13,"SPLAT_FORCE":2800,"BLOOM_INTENSITY":0.62,"DENSITY_DISSIPATION":0.8,"palette":"ember"}' data-idx="Manifesto" id="manifesto">
<div className="wrap">
<div className="line"><span className="word"><i>Interfaces</i></span> <span className="word"><i>shouldn’t</i></span> <span className="word"><i>just</i></span> <span className="word"><i>sit</i></span> <span className="word"><i>there.</i></span></div>
<div className="line alt"><span className="word"><i>They’re</i></span> <span className="word"><i className="g">meant</i></span> <span className="word"><i className="g">to</i></span> <span className="word"><i className="g">breathe</i></span></div>
<div className="line"><span className="word"><i>— to react, to flow,</i></span></div>
<div className="line alt"><span className="word"><i>to feel</i></span> <span className="word"><i>genuinely</i></span> <span className="word"><i className="s">alive.</i></span></div>
</div>
</section>

<section data-fluid='{"CURL":24,"SPLAT_FORCE":5000,"BLOOM_INTENSITY":1.15,"DENSITY_DISSIPATION":0.72,"palette":"ink"}' data-idx="Get INK" id="cta">
<div className="wrap">
<div className="eyebrow reveal" style={{justifyContent: 'center', marginBottom: '28px'}}>One file. Drop it anywhere.</div>
<h2><span className="mask"><span>Bring it</span></span><span className="mask"><span>to <span className="d">life.</span></span></span></h2>
<div className="btns reveal">
<a className="btn" data-magnetic="" href="#"><span>Get INK</span></a>
<a className="btn ghost" data-magnetic="" href="#"><span>Read the docs</span></a>
</div>
</div>
</section>
</main>
<footer data-idx="">
<div className="wrap">
<div className="top">
<div className="fmark">INK<span className="d">.</span></div>
<div className="cols">
<div className="col"><h4>Product</h4><a href="#hero">Overview</a><a href="#direct">The engine</a><a href="#spec">Specs</a><a href="#cta">Get INK</a></div>
<div className="col"><h4>Learn</h4><a href="#reveal">How it works</a><a href="#">Documentation</a><a href="#">Parameters</a></div>
<div className="col"><h4>Lineage</h4><a href="#">Jos Stam — Stable Fluids</a><a href="#">Pavel Dobryakov — WebGL Fluid</a></div>
</div>
</div>
<div className="base">
<span>© 2026 INK — Real-time fluid, rendered live.</span>
<span className="built"><span className="g"></span> Built with Claude Opus 4.8</span>
</div>
</div>
</footer>





    </>
  );
}
