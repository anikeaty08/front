import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



(function(){
'use strict';

/* ===== CURSOR GLOW ===== */
const cursorGlow=document.getElementById('cursorGlow');
let mouseX=0,mouseY=0,glowX=0,glowY=0;
if(window.matchMedia('(pointer:fine)').matches){
document.addEventListener('mousemove',e=>{
  mouseX=e.clientX;mouseY=e.clientY;
});
function animateGlow(){
  glowX+=(mouseX-glowX)*0.08;
  glowY+=(mouseY-glowY)*0.08;
  cursorGlow.style.left=glowX+'px';
  cursorGlow.style.top=glowY+'px';
  requestAnimationFrame(animateGlow);
}
animateGlow();
}else{cursorGlow.style.display='none'}

/* ===== NAV SCROLL ===== */
const nav=document.getElementById('nav');
let lastScroll=0;
window.addEventListener('scroll',()=>{
const y=window.scrollY;
if(y>80)nav.classList.add('scrolled');
else nav.classList.remove('scrolled');
lastScroll=y;
},{passive:true});

/* ===== MOBILE NAV ===== */
const navToggle=document.getElementById('navToggle');
const navMobile=document.getElementById('navMobile');
let mobileOpen=false;
navToggle.addEventListener('click',()=>{
mobileOpen=!mobileOpen;
navMobile.classList.toggle('active',mobileOpen);
document.body.style.overflow=mobileOpen?'hidden':'';
});
navMobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
mobileOpen=false;
navMobile.classList.remove('active');
document.body.style.overflow='';
}));

/* ===== REVEAL ON SCROLL ===== */
const reveals=document.querySelectorAll('.reveal,.reveal-clip-left,.reveal-slide-right,.reveal-clip-up,.reveal-pop,.reveal-zoom,.reveal-soft,.stagger-children,.stagger-scale,.stagger-blur,.stagger-pop,.stagger-draw,.stagger-soft,.stagger-clip');
const revealObserver=new IntersectionObserver((entries)=>{
entries.forEach(e=>{
  if(e.isIntersecting){
    e.target.classList.add('visible');
    revealObserver.unobserve(e.target);
  }
});
},{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
reveals.forEach(el=>revealObserver.observe(el));

/* ===== SERVICE CARD MOUSE TRACKING ===== */
document.querySelectorAll('.service-card').forEach(card=>{
card.addEventListener('mousemove',e=>{
  const r=card.getBoundingClientRect();
  const x=((e.clientX-r.left)/r.width)*100;
  const y=((e.clientY-r.top)/r.height)*100;
  card.style.setProperty('--mouse-x',x+'%');
  card.style.setProperty('--mouse-y',y+'%');
});
});

/* ===== SMOOTH ANCHOR SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click',e=>{
  const target=document.querySelector(a.getAttribute('href'));
  if(target){
    e.preventDefault();
    const offset=80;
    const y=target.getBoundingClientRect().top+window.scrollY-offset;
    window.scrollTo({top:y,behavior:'smooth'});
  }
});
});

/* ===== PARALLAX ON HERO IMAGE ===== */
const heroBgImage=document.querySelector('.hero-bg-image');
window.addEventListener('scroll',()=>{
const y=window.scrollY;
if(y<window.innerHeight){
  heroBgImage.style.transform=`scale(${1+y*0.0001}) translateY(${y*0.3}px)`;
}
},{passive:true});

/* ===== COUNTER ANIMATION ===== */
const counters=document.querySelectorAll('.hero-stat-number');
const counterObserver=new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
  if(entry.isIntersecting){
    const el=entry.target;
    const text=el.textContent;
    const num=parseInt(text);
    const suffix=text.replace(/[\d]/g,'');
    let current=0;
    const step=Math.ceil(num/60);
    const interval=setInterval(()=>{
      current+=step;
      if(current>=num){current=num;clearInterval(interval)}
      el.textContent=current+suffix;
    },25);
    counterObserver.unobserve(el);
  }
});
},{threshold:0.5});
counters.forEach(c=>counterObserver.observe(c));

/* ===== WEBGL HERO BUTTON ===== */
(function initWebGLButton(){
const canvas=document.getElementById('heroBtnCanvas');
if(!canvas)return;
const gl=canvas.getContext('webgl',{alpha:true,premultipliedAlpha:false});
if(!gl)return;

function resize(){
  const btn=canvas.parentElement;
  const dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=btn.offsetWidth*dpr;
  canvas.height=btn.offsetHeight*dpr;
  gl.viewport(0,0,canvas.width,canvas.height);
}
resize();
window.addEventListener('resize',resize);

const vsrc=`attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0,1);}`;
const fsrc=`
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_hover;

// Simplex-ish noise
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1;i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;
  i=mod289(i);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m;m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;
  vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}

void main(){
  vec2 uv=gl_FragCoord.xy/u_res;
  float aspect=u_res.x/u_res.y;
  vec2 p=uv;
  p.x*=aspect;

  float t=u_time*0.15;

  // Very subtle slow noise — barely perceptible motion at rest
  float n1=snoise(p*1.8+vec2(t*0.6,-t*0.4))*0.5;
  float n2=snoise(p*3.0+vec2(-t*0.3,t*0.5)+n1*0.2)*0.3;
  float n=n1+n2;

  // Dark base palette
  vec3 dark=vec3(0.08,0.06,0.05);        // near-black
  vec3 copper=vec3(0.60,0.38,0.22);      // muted copper
  vec3 warmHL=vec3(0.85,0.62,0.40);      // warm highlight

  // At rest: almost solid dark with a hint of slow-moving warmth
  float blend=n*0.5+0.5;
  vec3 col=mix(dark,dark+vec3(0.06,0.04,0.02),blend);

  // Subtle ambient shimmer — very faint copper veins
  float shimmer=smoothstep(0.62,0.75,blend)*0.15;
  col=mix(col,copper*0.4,shimmer);

  // === HOVER: magnetic liquid light following cursor ===
  vec2 mp=u_mouse;
  mp.x*=aspect;
  float md=length(p-mp);

  // Smooth radial light centered on cursor
  float light=exp(-md*md*6.0)*u_hover;

  // Flowing distortion around cursor
  float warp=snoise(p*4.0+vec2(u_time*0.5))*0.15*u_hover;
  float light2=exp(-(md+warp)*(md+warp)*8.0)*u_hover;

  // Combine into warm bloom
  float bloom=max(light,light2*0.7);
  vec3 bloomCol=mix(copper,warmHL,smoothstep(0.0,0.7,bloom));
  col=mix(col,bloomCol,bloom*0.85);

  // Soft edge ring around cursor on hover
  float ring=smoothstep(0.02,0.0,abs(md-0.18-warp*0.5))*u_hover*0.3;
  col+=warmHL*ring;

  // Edge vignette
  float vig=smoothstep(0.0,0.1,uv.x)*smoothstep(0.0,0.1,1.0-uv.x)*
            smoothstep(0.0,0.15,uv.y)*smoothstep(0.0,0.15,1.0-uv.y);
  col*=0.8+0.2*vig;

  gl_FragColor=vec4(col,1.0);
}`;

function compile(type,src){
  const s=gl.createShader(type);
  gl.shaderSource(s,src);gl.compileShader(s);
  return s;
}
const prog=gl.createProgram();
gl.attachShader(prog,compile(gl.VERTEX_SHADER,vsrc));
gl.attachShader(prog,compile(gl.FRAGMENT_SHADER,fsrc));
gl.linkProgram(prog);gl.useProgram(prog);

const buf=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,buf);
gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
const aPos=gl.getAttribLocation(prog,'a_pos');
gl.enableVertexAttribArray(aPos);
gl.vertexAttribPointer(aPos,2,gl.FLOAT,false,0,0);

const uRes=gl.getUniformLocation(prog,'u_res');
const uTime=gl.getUniformLocation(prog,'u_time');
const uMouse=gl.getUniformLocation(prog,'u_mouse');
const uHover=gl.getUniformLocation(prog,'u_hover');

let mx=0.5,my=0.5,smx=0.5,smy=0.5,hover=0,hoverTarget=0;
const btn=canvas.parentElement;
btn.addEventListener('mouseenter',()=>{hoverTarget=1;});
btn.addEventListener('mouseleave',()=>{hoverTarget=0;});
btn.addEventListener('mousemove',e=>{
  const r=btn.getBoundingClientRect();
  mx=(e.clientX-r.left)/r.width;
  my=1.0-(e.clientY-r.top)/r.height;
});

function render(t){
  t*=0.001;
  // Smooth interpolation for premium feel
  hover+=(hoverTarget-hover)*0.045;
  smx+=(mx-smx)*0.08;
  smy+=(my-smy)*0.08;
  gl.uniform2f(uRes,canvas.width,canvas.height);
  gl.uniform1f(uTime,t);
  gl.uniform2f(uMouse,smx,smy);
  gl.uniform1f(uHover,hover);
  gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
})();


})();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-glow" id="cursorGlow" style={{left: '0px', top: '0px'}}></div>

<nav className="nav" id="nav">
<div className="container nav-inner">
<a className="nav-logo" href="#">VERD</a>
<div className="nav-links">
<a className="nav-link" href="#philosophy">Philosophy</a>
<a className="nav-link" href="#services">Services</a>
<a className="nav-link" href="#projects">Projects</a>
<a className="nav-link" href="#process">Process</a>
<a className="nav-link" href="#testimonials">Voices</a>
<a className="nav-cta" href="#contact"><i className="nav-cta-shimmer"></i><span>Start a Project</span></a>
</div>
<button aria-label="Toggle menu" className="nav-toggle" id="navToggle">
<span></span><span></span><span></span>
</button>
</div>
</nav>

<div className="nav-mobile-overlay" id="navMobile">
<a className="nav-link" href="#philosophy">Philosophy</a>
<a className="nav-link" href="#services">Services</a>
<a className="nav-link" href="#projects">Projects</a>
<a className="nav-link" href="#process">Process</a>
<a className="nav-link" href="#testimonials">Voices</a>
<a className="nav-cta" href="#contact" style={{marginTop: '1rem'}}><span>Start a Project</span></a>
</div>

<section className="hero" id="hero">
<div className="hero-bg">
<div aria-label="Modern sustainable architecture with natural materials and green surroundings" className="hero-bg-image" role="img"></div>
<div className="hero-bg-overlay"></div>
</div>
<div className="container hero-content">
<div className="hero-tag">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:buildings-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15 2h2c1.886 0 2.828 0 3.414.586S21 4.114 21 6v15.25h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.886 0-2.828.586-3.414S5.114 5 7 5h4c1.886 0 2.828 0 3.414.586S15 7.114 15 9v12.25h1.5V8.91c0-.865 0-1.659-.087-2.304c-.095-.711-.32-1.463-.938-2.08c-.618-.619-1.37-.844-2.08-.94c-.637-.085-1.418-.086-2.269-.086c.084-.387.225-.68.46-.914C12.172 2 13.114 2 15 2M5.25 8A.75.75 0 0 1 6 7.25h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
    Award-Winning Sustainable Architecture
  </div>
<h1 className="hero-title">Designing spaces<br/>that breathe with <em>nature</em></h1>
<p className="hero-description">We create architecture that doesn't just exist in the environment — it converses with it. Every structure is a dialogue between human aspiration and ecological responsibility.</p>
<div className="hero-actions">
<a className="btn-hero-webgl" href="#projects" id="heroBtn">
<canvas height="51" id="heroBtnCanvas" width="220"></canvas>
<span className="btn-hero-webgl-text">
        View Our Work
        <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</a>
<a className="btn btn-outline" href="#philosophy">
<span>Our Philosophy</span>
</a>
</div>
<div className="hero-stats">
<div className="hero-stat">
<div className="hero-stat-number">240+</div>
<div className="hero-stat-label">Projects Completed</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">18</div>
<div className="hero-stat-label">Design Awards</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">96%</div>
<div className="hero-stat-label">Client Retention</div>
</div>
</div>
</div>
</section>

<section className="philosophy section" id="philosophy">
<div className="container">
<div className="philosophy-grid">
<div className="philosophy-image reveal-clip-left">
<img alt="Sustainable building with living green wall and natural stone facade" className="bg-center object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd94331e-d343-42f7-a761-6a4ff8236725_1600w.webp"/>
</div>
<div className="philosophy-text">
<div className="section-label reveal-slide-right">Our Philosophy</div>
<h2 className="section-title reveal-slide-right reveal-delay-1">Architecture as <em>living dialogue</em></h2>
<p className="philosophy-quote reveal-slide-right reveal-delay-2">"The best buildings are not monuments to ego, but <span className="">quiet conversations</span> between place, purpose, and the passage of time."</p>
<p className="philosophy-desc reveal-slide-right reveal-delay-3">At VERD, we believe every structure should give back more than it takes. Our biophilic approach integrates passive heating, natural ventilation, living walls, and locally-sourced materials into designs that feel timeless rather than trendy.</p>
<div className="philosophy-features reveal-slide-right reveal-delay-4">
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:leaf-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 2.083a3.5 3.5 0 0 0-.713.243C6.553 4.188 4 9.395 4 13.856c0 4.24 3.183 7.724 7.25 8.109zm1.5 19.882c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zm-2.352-3.15a9.2 9.2 0 0 0-2.445-1.704a3.5 3.5 0 0 0-.713-.243v5.106zm3.028 4.594l-6.186 6.187v2.878l6.75-6.75l.132-.132a15 15 0 0 0-.696-2.183" fill="currentColor"></path></svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Net-Zero Commitment</h4>
<p className="">Every project targets net-zero carbon over its lifetime through passive design and renewable integration.</p>
</div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:pallete-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Material Honesty</h4>
<p className="">We celebrate raw materials — timber, stone, rammed earth — letting their natural character define the aesthetic.</p>
</div>
</div>
<div className="philosophy-feature">
<div className="philosophy-feature-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:compass-big-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.554 21.529c1.797 1.221 4.943-.038 11.236-2.554c1.342-.537 2.013-.806 2.54-1.267q.201-.177.378-.378c.461-.527.73-1.198 1.267-2.54c2.515-6.293 3.775-9.44 2.554-11.236a4.1 4.1 0 0 0-1.083-1.083c-1.797-1.221-4.944.037-11.236 2.554c-1.342.537-2.013.806-2.54 1.267q-.201.177-.378.378c-.461.527-.73 1.198-1.267 2.54c-2.517 6.292-3.775 9.439-2.554 11.236c.29.426.657.793 1.083 1.083M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="philosophy-feature-text">
<h4 className="">Contextual Design</h4>
<p>Every site has a story. We listen to the landscape, climate, and culture before drawing a single line.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<hr className="gradient-hr"/>

<section className="services section" id="services">
<div className="container">
<div className="services-header reveal">
<div className="">
<div className="section-label">What We Do</div>
<h2 className="section-title">Comprehensive design <em>services</em></h2>
</div>
<p className="">From initial concept to final handover, we guide every project through a meticulous, client-centered process.</p>
</div>
<div className="services-grid stagger-scale">
<div className="service-card reveal-child">
<div className="service-card-number">01</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:buildings-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M21.25 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336q.005.438.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5h-1.5V6c0-1.886 0-2.828-.586-3.414S14.636 2 12.75 2h-2c-1.886 0-2.828 0-3.414.586S6.75 4.114 6.75 6v15.25h-1.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91q-.001-.47.004-.91c-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.25 6.393 2.25 7.096 2.25 8.5v12.75h-.5a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM9 11.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m2.75 3.5a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75M9 6.25a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 6.25m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 9.25" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<h3>Architectural Design</h3>
<p>Full-service architecture from concept sketches through construction documents. Residential, commercial, and cultural projects shaped by sustainability.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">02</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:sofa-2-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 13v-1a3 3 0 0 0-2.993-3c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2.25v8zm5.75 0H17v-1a3 3 0 0 1 2.993-3a4.6 4.6 0 0 0-.07-.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5h-2.25z" fill="currentColor"></path><path d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092" fill="currentColor"></path></svg>
</div>
<h3 className="">Interior Architecture</h3>
<p className="">Spatial design that flows naturally. We curate materials, lighting, and furniture to create interiors that are both functional and emotionally resonant.</p>
</div>
<div className="service-card reveal-child" style={{-MouseX: '43.27232103454367%', -MouseY: '99.3357605944279%'}}>
<div className="service-card-number">03</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:streets-map-point-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.89 7.172C22 8.433 22 10.006 22 12c0 4.134 0 6.455-.987 7.951L15.06 14zm-1.938 13.84L14 15.06l-6.828 6.83C8.433 22 10.006 22 12 22c4.134 0 6.456 0 7.952-.988" fill="currentColor"></path><path clip-rule="evenodd" d="M12 2c4.714 0 7.071 0 8.535 1.464c.504.504.835 1.114 1.052 1.889L5.353 21.587c-.775-.217-1.385-.548-1.889-1.052C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2M5.5 8.757c0 1.785 1.117 3.868 2.86 4.613c.406.173.874.173 1.28 0c1.743-.745 2.86-2.828 2.86-4.613C12.5 6.958 10.933 5.5 9 5.5S5.5 6.958 5.5 8.757" fill="currentColor" fill-rule="evenodd"></path><path d="M10.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" fill="currentColor"></path></svg>
</div>
<h3 className="">Landscape Integration</h3>
<p className="">Architecture doesn't stop at the facade. We design landscapes that extend the living experience into gardens, courtyards, and natural terraces.</p>
</div>
<div className="service-card reveal-child">
<div className="service-card-number">04</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:lightbulb-bolt-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.5 2C7.358 2 4 5.436 4 9.674c0 2.273.966 4.315 2.499 5.72c.51.467.889.814 1.157 1.066a15 15 0 0 1 .4.39l.033.036c.237.3.288.376.318.446s.053.16.112.54c.024.15.026.406.026 1.105v.03c0 .409 0 .762.026 1.051c.027.306.087.61.248.895c.18.319.438.583.75.767c.278.165.575.226.874.254c.283.026.628.026 1.028.026h.058c.4 0 .745 0 1.028-.026c.3-.028.595-.09.875-.254a2.07 2.07 0 0 0 .749-.767c.16-.285.22-.588.248-.895c.026-.29.026-.642.025-1.051v-.03c0-.699.003-.955.026-1.105c.06-.38.082-.47.113-.54c.03-.07.081-.147.318-.446l.008-.01l.025-.026l.088-.09q.112-.113.312-.3c.268-.252.647-.599 1.157-1.067A7.74 7.74 0 0 0 19 9.674C19 5.436 15.642 2 11.5 2m1.585 17.674h-3.17q.004.145.014.258c.019.21.05.286.071.324a.7.7 0 0 0 .25.255c.037.022.111.054.316.073c.214.02.497.02.934.02s.72 0 .934-.02c.205-.019.279-.05.316-.073a.7.7 0 0 0 .25-.255c.021-.038.052-.114.07-.324q.011-.113.015-.258M12.61 8.176c.307.224.378.66.159.974l-1.178 1.687h1.402a.68.68 0 0 1 .607.379a.71.71 0 0 1-.052.724L11.6 14.731a.67.67 0 0 1-.951.162a.71.71 0 0 1-.158-.973l1.178-1.687h-1.403a.68.68 0 0 1-.606-.379a.71.71 0 0 1 .051-.725l1.948-2.79a.67.67 0 0 1 .951-.163" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<h3>Sustainability Consulting</h3>
<p>Expert guidance on LEED, Passive House, and Living Building Challenge certifications. We make green building both achievable and beautiful.</p>
</div>
<div className="service-card reveal-child" style={{-MouseX: '22.799406551687262%', -MouseY: '10.846603727975179%'}}>
<div className="service-card-number">05</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:ruler-angular-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6v2.25h3a.75.75 0 0 1 0 1.5H2v1.5h2a.75.75 0 0 1 0 1.5H2v1.5h3a.75.75 0 0 1 0 1.5H2v1.5h2a.75.75 0 0 1 0 1.5H2c.001 1.24.02 1.888.337 2.361a2 2 0 0 0 .552.552C3.393 22 4.096 22 5.5 22s2.107 0 2.611-.337a2 2 0 0 0 .552-.552C9 20.607 9 19.904 9 18.5V11c0-.943 0-1.414.293-1.707S10.057 9 11 9h7.5c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C22 7.607 22 6.904 22 5.5s0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.473-.316-1.121-.336-2.361-.337v2a.75.75 0 0 1-1.5 0V2h-1.5v3a.75.75 0 0 1-1.5 0V2h-1.5v2a.75.75 0 0 1-1.5 0V2h-1.5v3a.75.75 0 0 1-1.5 0z" fill="currentColor"></path></svg>
</div>
<h3>Renovation &amp; Retrofit</h3>
<p>Breathing new life into existing structures. We transform dated buildings into energy-efficient, modern spaces while preserving their architectural DNA.</p>
</div>
<div className="service-card reveal-child" style={{-MouseX: '43.27232103454367%', -MouseY: '1.590827564415721%'}}>
<div className="service-card-number">06</div>
<div className="service-card-icon">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:monitor-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 17c-2.828 0-4.243 0-5.121-.879c-.57-.569-.77-1.363-.84-2.621h19.923c-.07 1.258-.271 2.052-.84 2.621C20.241 17 18.827 17 16 17h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4zm2-15h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1q.002.827-.006 1.5H2.007Q1.998 11.827 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" fill="currentColor"></path></svg>
</div>
<h3 className="">3D Visualization</h3>
<p className="">Photorealistic renderings and virtual walkthroughs that let you experience your space before a single brick is laid. Decisions made with full clarity.</p>
</div>
</div>
</div>
</section>

<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item"><span>Residential</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Commercial</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Cultural</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span className="">Hospitality</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Education</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Civic</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Mixed-Use</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Wellness</span><div className="marquee-dot"></div></div>

<div className="marquee-item"><span>Residential</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Commercial</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Cultural</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Hospitality</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Education</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Civic</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Mixed-Use</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>Wellness</span><div className="marquee-dot"></div></div>
</div>
</div>

<section className="projects section" id="projects">
<div className="container">
<div className="projects-header reveal">
<div className="section-label" style={{justifyContent: 'center'}}>Featured Work</div>
<h2 className="section-title">Selected <em>projects</em></h2>
<p className="projects-subtitle">A curated selection of our most impactful work — each one a testament to the belief that architecture can heal, inspire, and sustain.</p>
</div>
<div className="projects-grid stagger-clip">
<div className="project-card reveal-child">
<img alt="Canopy House - Modern residence with expansive glass walls surrounded by forest" className="project-card-image object-cover bg-center" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b1581d6-733d-4b85-9ae5-117a9d8386ef_1600w.webp"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Residential</span>
<span className="project-card-tag">Net-Zero</span>
</div>
<h3 className="">The Canopy House</h3>
<p>A 4,200 sq ft residence nestled in Pacific Northwest forest. Cross-laminated timber structure with living roof and geothermal heating.</p>
</div>
<div className="project-card-arrow">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="project-card reveal-child">
<img alt="Terracotta pavilion with rammed earth walls and natural courtyard" className="project-card-image object-cover bg-center" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fae8a4f-dbea-4b69-b5f9-b0afdeda5fc3_1600w.webp"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Cultural</span>
<span className="project-card-tag">Rammed Earth</span>
</div>
<h3 className="">Earth Pavilion</h3>
<p className="">A community arts center built with rammed earth walls sourced from the construction site itself.</p>
</div>
<div className="project-card-arrow">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div className="project-card reveal-child">
<img alt="Modern sustainable office building with vertical gardens" className="project-card-image object-cover bg-center" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b572409-7b8b-478b-be9d-0716d805d44b_1600w.webp"/>
<div className="project-card-overlay"></div>
<div className="project-card-content">
<div className="project-card-tags">
<span className="project-card-tag">Commercial</span>
<span className="project-card-tag">LEED Platinum</span>
</div>
<h3 className="">Verde Tower</h3>
<p className="">A 12-story office complex achieving LEED Platinum with integrated vertical gardens on every floor.</p>
</div>
<div className="project-card-arrow">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6m0 0H9m9 0v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="process section" id="process">
<div className="container">
<div className="process-header reveal">
<div className="section-label" style={{justifyContent: 'center'}}>How We Work</div>
<h2 className="section-title" style={{textAlign: 'center'}}>Our design <em>process</em></h2>
</div>
<div className="process-steps stagger-draw">
<div className="process-step reveal-child">
<div className="process-step-number"><span>01</span></div>
<h4>Discover</h4>
<p>We immerse ourselves in your vision, the site, and the environmental context. Every great building begins with deep listening.</p>
</div>
<div className="process-step reveal-child">
<div className="process-step-number"><span>02</span></div>
<h4>Envision</h4>
<p className="">Through sketches, models, and 3D visualization, we explore bold possibilities. This is where imagination meets feasibility.</p>
</div>
<div className="process-step reveal-child">
<div className="process-step-number"><span>03</span></div>
<h4>Refine</h4>
<p>Materials are selected. Engineering is resolved. Every detail is scrutinized for performance, beauty, and environmental impact.</p>
</div>
<div className="process-step reveal-child">
<div className="process-step-number"><span>04</span></div>
<h4 className="">Realize</h4>
<p className="">We oversee construction with the same care we put into design. The result is a space that exceeds expectations in every dimension.</p>
</div>
</div>
</div>
</section>
<hr className="gradient-hr"/>

<section className="testimonials section" id="testimonials">
<div className="container">
<div className="testimonials-header reveal">
<div className="section-label">Client Voices</div>
<h2 className="section-title">What our clients <em>say</em></h2>
</div>
<div className="testimonials-grid stagger-blur">
<div className="testimonial-card reveal-child">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-text">"VERD transformed our outdated office into a living, breathing space. The biophilic design has genuinely improved our team's wellbeing and productivity. Every visitor is in awe."</p>
<div className="testimonial-author">
<img alt="Margaret Reynolds" className="testimonial-avatar object-cover bg-center" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=320&amp;q=80"/>
<div className="testimonial-author-info">
<h5 className="">Margaret Reynolds</h5>
<p className="">CEO, Atria Health</p>
</div>
</div>
</div>
<div className="testimonial-card reveal-child">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-text">"The Canopy House isn't just a home — it's an experience. Waking up surrounded by forest, bathed in natural light, with zero energy bills. VERD delivered something truly extraordinary."</p>
<div className="testimonial-author">
<img alt="James Kohara" className="testimonial-avatar object-cover bg-center" src="https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?w=320&amp;q=80"/>
<div className="testimonial-author-info">
<h5 className="">James Kohara</h5>
<p className="">Homeowner, Canopy House</p>
</div>
</div>
</div>
<div className="testimonial-card reveal-child">
<div className="testimonial-stars">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="testimonial-text">"Their approach to sustainability isn't performative — it's deeply integrated into every decision. The rammed earth walls of our pavilion tell a story that resonates with every visitor."</p>
<div className="testimonial-author">
<img alt="Sofia Lindgren" className="testimonial-avatar object-cover bg-center" src="https://images.unsplash.com/photo-1639986162505-c9bcccfc9712?w=320&amp;q=80"/>
<div className="testimonial-author-info">
<h5 className="">Sofia Lindgren</h5>
<p>Director, Nordic Arts Council</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="awards">
<div className="container">
<div className="awards-grid stagger-pop">
<div className="award-item reveal-child">
<div className="award-icon"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:cup-star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162" fill="currentColor"></path><path clip-rule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m.952 4.199l-.098-.176C12.474 5.34 12.284 5 12 5s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" fill="currentColor" fill-rule="evenodd"></path></svg></div>
<span>AIA Gold Medal 2024</span>
</div>
<div className="award-item reveal-child">
<div className="award-icon"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:medal-ribbons-star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6" fill="currentColor" fill-rule="evenodd"></path><path d="M4.495 12.995L2.992 14.55c-.54.56-.81.839-.904 1.076c-.213.54-.03 1.138.433 1.422c.204.124.57.163 1.305.24c.414.044.622.066.795.133c.389.149.69.462.835.864c.064.18.085.394.127.823c.075.76.113 1.14.233 1.351c.274.48.853.669 1.374.448c.228-.096.498-.376 1.039-.935l2.482-2.57a8.5 8.5 0 0 1-6.216-4.408m8.795 4.409l2.482 2.57c.54.56.81.839 1.038.936c.521.22 1.1.031 1.374-.449c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076l-1.503-1.556a8.5 8.5 0 0 1-6.216 4.408" fill="currentColor"></path></svg></div>
<span>Pritzker Nominee</span>
</div>
<div className="award-item reveal-child">
<div className="award-icon"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:verified-check-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" fill="currentColor" fill-rule="evenodd"></path></svg></div>
<span>LEED Platinum x12</span>
</div>
<div className="award-item reveal-child">
<div className="award-icon"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:earth-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.437 18.276c.988-1.862 4.281-1.862 4.281-1.862c3.432-.036 3.896-2.12 4.206-3.173a10.006 10.006 0 0 1-8.535 8.664c-.323-.68-.705-2.21.048-3.629" fill="currentColor"></path><path d="m5.006 5.834l-.412-.352a2 2 0 0 1-.098-.092A9.96 9.96 0 0 0 2 12c0 5.46 4.377 9.9 9.814 9.998c-.353-1.055-.584-2.764.298-4.425c.81-1.526 2.44-2.127 3.478-2.383a10 10 0 0 1 2.063-.275h.053c1.381-.016 1.917-.423 2.164-.702c.306-.344.426-.752.593-1.321l.022-.074a1.5 1.5 0 0 1 1.512-1.075a9.96 9.96 0 0 0-2.598-6.47c-.032.177-.07.343-.107.489c-.17.661-.454 1.375-.804 1.905c-.341.52-.949.983-1.352 1.273c-.305.219-.617.4-.873.549l-.092.053c-.232.133-.416.24-.592.355c-.356.235-.57.444-.714.727c.088.322.15.693.152 1.08c.002.922-.47 1.65-1.033 2.104a3.16 3.16 0 0 1-2 .692c-2.95-.032-4.68-2.439-4.903-4.918c-.065-.721-.389-1.498-.842-2.222a8 8 0 0 0-1.233-1.526" fill="currentColor"></path><path d="M8.575 9.447C8.388 7.363 6.781 5.421 6 4.711l-.43-.37A9.96 9.96 0 0 1 12 2c2.214 0 4.26.72 5.916 1.936c.234.711-.212 2.196-.68 2.906c-.17.257-.554.577-.976.88c-.95.683-2.15 1.02-2.76 2.278a1.42 1.42 0 0 0-.083 1.016c.06.22.1.459.1.692c.002.755-.762 1.3-1.517 1.292c-1.964-.021-3.25-1.604-3.425-3.553" fill="currentColor"></path></svg></div>
<span className="">UN Habitat Award</span>
</div>
<div className="award-item reveal-child">
<div className="award-icon"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-circle-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M10.861 9.363l-.13.235c-.145.259-.217.388-.329.473s-.252.117-.532.18l-.254.058c-.984.222-1.476.334-1.593.71c-.117.377.218.769.889 1.553l.174.203c.19.223.285.334.328.472s.029.287 0 .584l-.026.27c-.102 1.047-.152 1.57.154 1.803s.767.02 1.688-.403l.239-.11c.261-.12.392-.181.531-.181s.27.06.531.18l.239.11c.92.425 1.382.637 1.688.404s.256-.756.154-1.802l-.026-.271c-.029-.297-.043-.446 0-.584s.138-.25.328-.472l.174-.203c.67-.784 1.006-1.176.889-1.553c-.117-.376-.609-.488-1.593-.71l-.254-.058c-.28-.063-.42-.095-.532-.18s-.184-.214-.328-.473l-.131-.235C12.632 8.454 12.379 8 12 8s-.632.454-1.139 1.363" fill="currentColor" fill-rule="evenodd"></path></svg></div>
<span className="">Dezeen Studio of Year</span>
</div>
</div>
</div>
</section>

<section className="cta section" id="contact">
<div className="cta-bg">
<div className="cta-bg-image"></div>
</div>
<div className="container">
<div className="cta-content reveal-zoom">
<div className="section-label" style={{justifyContent: 'center'}}>Start Your Project</div>
<h2 className="cta-title">Let's create something <em>extraordinary</em></h2>
<p className="cta-text">Whether you're envisioning a private residence, a commercial landmark, or a community space — we'd love to explore what's possible together.</p>
<div className="cta-actions">
<a className="btn-glow" href="#">
<span style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          Schedule a Consultation
          <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</a>
<a className="btn btn-outline" href="#">
<span>hello@verdstudio.com</span>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:letter-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M18.576 7.52a.75.75 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 1.056.097" fill="currentColor" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer-grid stagger-soft">
<div className="footer-brand reveal-child">
<div className="footer-logo">VERD STUDIO</div>
<p className="">Award-winning sustainable architecture studio creating spaces that harmonize human living with the natural world. Based in Portland, designing globally.</p>
<div className="footer-social">
<a aria-label="Instagram" href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:gallery-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path><path clip-rule="evenodd" d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19c1.444.194 2.584.6 3.479 1.494c.895.895 1.3 2.035 1.494 3.48c.19 1.411.19 3.22.19 5.529v.088c0 1.909 0 3.471-.104 4.743c-.104 1.28-.317 2.347-.795 3.235q-.314.586-.785 1.057c-.895.895-2.035 1.3-3.48 1.494c-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19c-1.444-.194-2.584-.6-3.479-1.494c-.793-.793-1.203-1.78-1.42-3.006c-.215-1.203-.254-2.7-.262-4.558Q1.25 12.792 1.25 12v-.058c0-2.309 0-4.118.19-5.53c.194-1.444.6-2.584 1.494-3.479c.895-.895 2.035-1.3 3.48-1.494c1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069c-.57.57-.897 1.34-1.069 2.619c-.174 1.3-.176 3.008-.176 5.386v.844l1.001-.876a2.3 2.3 0 0 1 3.141.104l4.29 4.29a2 2 0 0 0 2.564.222l.298-.21a3 3 0 0 1 3.732.225l2.83 2.547c.286-.598.455-1.384.545-2.493c.098-1.205.099-2.707.099-4.653c0-2.378-.002-4.086-.176-5.386c-.172-1.279-.5-2.05-1.069-2.62c-.57-.569-1.34-.896-2.619-1.068c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176" fill="currentColor" fill-rule="evenodd"></path></svg></a>
<a aria-label="LinkedIn" className="" href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:case-round-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 2.75c-.978 0-1.813.625-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.073 0a.75.75 0 1 1-1.415.5A2.25 2.25 0 0 0 12 2.75" fill="currentColor" fill-rule="evenodd"></path><path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5" fill="currentColor"></path><path d="m8.01 15.37l-5.004-1.502c.03 3.114.212 5.983 1.312 6.96C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.1-.977 1.282-3.846 1.312-6.96l-5.005 1.501a2 2 0 0 1-1.246 1.65l-.7.28a5.5 5.5 0 0 1-4.086 0l-.7-.28a2 2 0 0 1-1.246-1.65M7.609 5h8.782c2.45 0 3.675 0 4.502.673q.24.195.434.434C22 6.934 22 8.159 22 10.609c0 .622 0 .932-.15 1.175a1 1 0 0 1-.1.134c-.19.214-.487.303-1.082.482L16 13.8V13a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.8l-4.668-1.4c-.595-.179-.893-.268-1.082-.482a1 1 0 0 1-.1-.134C2 11.541 2 11.231 2 10.609c0-2.45 0-3.675.673-4.502q.195-.24.434-.434C3.934 5 5.159 5 7.609 5" fill="currentColor"></path></svg></a>
<a aria-label="Pinterest" href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:pin-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m19.184 7.805l-2.965-2.967c-2.027-2.03-3.04-3.043-4.129-2.803s-1.581 1.587-2.568 4.28l-.668 1.823c-.263.718-.395 1.077-.632 1.355a2 2 0 0 1-.36.332c-.296.213-.664.314-1.4.517c-1.66.458-2.491.687-2.804 1.23a1.53 1.53 0 0 0-.204.773c.004.627.613 1.236 1.83 2.455L6.7 16.216l-4.476 4.48a.764.764 0 0 0 1.08 1.08l4.475-4.48l1.466 1.468c1.226 1.226 1.839 1.84 2.47 1.84c.265 0 .526-.068.757-.2c.548-.313.778-1.149 1.239-2.822c.202-.735.303-1.102.515-1.399q.14-.194.322-.352c.275-.238.632-.372 1.345-.64l1.844-.693c2.664-1 3.996-1.501 4.23-2.586c.235-1.086-.77-2.093-2.783-4.107" fill="currentColor"></path></svg></a>
<a aria-label="Twitter" href="#"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chat-round-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" fill="currentColor"></path></svg></a>
</div>
</div>
<div className="footer-column reveal-child">
<h4>Studio</h4>
<ul className="">
<li><a href="#">About Us</a></li>
<li className=""><a className="" href="#">Our Team</a></li>
<li className=""><a href="#">Careers</a></li>
<li className=""><a className="" href="#">Press</a></li>
</ul>
</div>
<div className="footer-column reveal-child">
<h4>Services</h4>
<ul>
<li><a href="#">Architecture</a></li>
<li><a href="#">Interior Design</a></li>
<li><a href="#">Landscape</a></li>
<li><a href="#">Consulting</a></li>
</ul>
</div>
<div className="footer-column reveal-child">
<h4>Connect</h4>
<ul>
<li><a href="#">hello@verdstudio.com</a></li>
<li><a href="#">+1 (503) 555-0142</a></li>
<li><a href="#">Portland, Oregon</a></li>
<li><a href="#">Schedule a Visit</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p className="">2026 VERD Studio. All rights reserved.</p>
<div className="footer-bottom-links">
<a href="#">Privacy Policy</a>
<a href="#">Terms of Service</a>
<a href="#">Accessibility</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
