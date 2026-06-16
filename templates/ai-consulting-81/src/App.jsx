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

/* CURSOR GLOW */
const cursorGlow = document.getElementById('cursorGlow');
let mouseX=0,mouseY=0,glowX=0,glowY=0;
if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY;});
  function animateGlow(){
    glowX+=(mouseX-glowX)*0.08;
    glowY+=(mouseY-glowY)*0.08;
    cursorGlow.style.left=glowX+'px';
    cursorGlow.style.top=glowY+'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}else{cursorGlow.style.display='none'}

/* NAV SCROLL */
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>{
  if(window.scrollY>80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
},{passive:true});

/* MOBILE NAV */
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
let mobileOpen = false;
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

/* SERVICE CARD MOUSE TRACKING */
document.querySelectorAll('.service-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mouse-x',((e.clientX-r.left)/r.width*100)+'%');
    card.style.setProperty('--mouse-y',((e.clientY-r.top)/r.height*100)+'%');
  });
});

/* HERO PARALLAX */
const heroBgImage = document.querySelector('.hero-bg-image');
if(heroBgImage){
  window.addEventListener('scroll',()=>{
    const y=window.scrollY;
    if(y<window.innerHeight){
      heroBgImage.style.transform=`scale(${1+y*0.0001}) translateY(${y*0.3}px)`;
    }
  },{passive:true});
}

/* REVEAL ON SCROLL */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      if(entry.target.classList.contains('chart-card')){
        entry.target.classList.add('is-visible');
      }
      if(entry.target.dataset.anim==='metric'){
        entry.target.style.opacity='1';
        entry.target.style.transform='translateY(0)';
      }
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.08,rootMargin:'0px 0px -40px 0px'});

document.querySelectorAll('.reveal,.reveal-clip-left,.reveal-slide-right,.reveal-zoom,.stagger-children,.stagger-scale,.stagger-blur,.stagger-draw,.stagger-soft,.stagger-clip,.chart-card,[data-anim="metric"]').forEach(el=>observer.observe(el));

/* WEBGL HERO BUTTON */
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
uniform vec2 u_res;uniform float u_time;uniform vec2 u_mouse;uniform float u_hover;
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);
  vec2 i1;i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m;m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}
void main(){
  vec2 uv=gl_FragCoord.xy/u_res;float aspect=u_res.x/u_res.y;
  vec2 p=uv;p.x*=aspect;float t=u_time*0.15;
  float n1=snoise(p*1.8+vec2(t*0.6,-t*0.4))*0.5;
  float n2=snoise(p*3.0+vec2(-t*0.3,t*0.5)+n1*0.2)*0.3;
  float n=n1+n2;
  vec3 dark=vec3(0.08,0.06,0.05);vec3 copper=vec3(0.60,0.38,0.22);vec3 warmHL=vec3(0.85,0.62,0.40);
  float blend=n*0.5+0.5;vec3 col=mix(dark,dark+vec3(0.06,0.04,0.02),blend);
  float shimmer=smoothstep(0.62,0.75,blend)*0.15;col=mix(col,copper*0.4,shimmer);
  vec2 mp=u_mouse;mp.x*=aspect;float md=length(p-mp);
  float light=exp(-md*md*6.0)*u_hover;
  float warp=snoise(p*4.0+vec2(u_time*0.5))*0.15*u_hover;
  float light2=exp(-(md+warp)*(md+warp)*8.0)*u_hover;
  float bloom=max(light,light2*0.7);
  vec3 bloomCol=mix(copper,warmHL,smoothstep(0.0,0.7,bloom));
  col=mix(col,bloomCol,bloom*0.85);
  float ring=smoothstep(0.02,0.0,abs(md-0.18-warp*0.5))*u_hover*0.3;col+=warmHL*ring;
  float vig=smoothstep(0.0,0.1,uv.x)*smoothstep(0.0,0.1,1.0-uv.x)*smoothstep(0.0,0.15,uv.y)*smoothstep(0.0,0.15,1.0-uv.y);
  col*=0.8+0.2*vig;gl_FragColor=vec4(col,1.0);
}`;
  function compile(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s;}
  const prog=gl.createProgram();
  gl.attachShader(prog,compile(gl.VERTEX_SHADER,vsrc));
  gl.attachShader(prog,compile(gl.FRAGMENT_SHADER,fsrc));
  gl.linkProgram(prog);gl.useProgram(prog);
  const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  const aPos=gl.getAttribLocation(prog,'a_pos');
  gl.enableVertexAttribArray(aPos);gl.vertexAttribPointer(aPos,2,gl.FLOAT,false,0,0);
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
    t*=0.001;hover+=(hoverTarget-hover)*0.045;
    smx+=(mx-smx)*0.08;smy+=(my-smy)*0.08;
    gl.uniform2f(uRes,canvas.width,canvas.height);
    gl.uniform1f(uTime,t);gl.uniform2f(uMouse,smx,smy);gl.uniform1f(uHover,hover);
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
<a className="nav-logo" href="/home">INTELLI</a>
<div className="nav-links">
<a className="nav-link active" href="/home">HOME</a>
<a className="nav-link" href="/ki">KI</a>
<a className="nav-link" href="/leistungen">LEISTUNGEN</a>
<a className="nav-link" href="/marketing">MARKETING</a>
<a className="nav-link" href="/loesung">LÖSUNG</a>
<a className="nav-link" href="/prozess">PROZESS</a>
<a className="nav-link" href="/journal">JOURNAL</a>
<a className="nav-cta" href="/kontakt"><i className="nav-cta-shimmer"></i><span className="">JETZT KONTAKTIEREN</span></a>
</div>
<button aria-label="Toggle menu" className="nav-toggle" id="navToggle">
<span></span><span></span><span></span>
</button>
</div>
</nav>

<div className="nav-mobile-overlay" id="navMobile">
<a className="nav-link active" href="/home">HOME</a>
<a className="nav-link" href="/ki">KI</a>
<a className="nav-link" href="/leistungen">LEISTUNGEN</a>
<a className="nav-link" href="/marketing">MARKETING</a>
<a className="nav-link" href="/loesung">LÖSUNG</a>
<a className="nav-link" href="/prozess">PROZESS</a>
<a className="nav-link" href="/journal">JOURNAL</a>
<a className="nav-cta" href="/kontakt" style={{marginTop: '1rem'}}><span>JETZT KONTAKTIEREN</span></a>
</div>
<main className="" id="view-home">

<section className="hero" id="hero">
<div className="hero-bg">
<div aria-label="Modern abstract data representation" className="hero-bg-image" role="img"></div>
<div className="hero-bg-overlay"></div>
</div>
<div className="container hero-content">
<div className="hero-tag">Strategische Unternehmensberatung</div>
<h1 className="hero-title">Strategische<br/><em className="shimmer">Unternehmensberatung</em><br/>für den Mittelstand</h1>
<p className="hero-description">Wir unterstützen Unternehmen bei der Analyse, Optimierung und Digitalisierung ihrer Geschäftsprozesse für mehr Effizienz, nachhaltiges Wachstum und zukunftsfähige Strukturen.</p>
<div className="hero-actions">
<a className="btn-hero-webgl" href="/kontakt" id="heroBtn">
<canvas height="112" id="heroBtnCanvas" width="530"></canvas>
<span className="btn-hero-webgl-text">
            Projekt Starten
            <iconify-icon height="1.2em" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</a>
<a className="btn btn-outline" href="/ki">
<span className="">Unsere Philosophie</span>
</a>
</div>
<div className="hero-stats">
<div className="hero-stat">
<div className="hero-stat-number">50+</div>
<div className="hero-stat-label">Beratungsprojekte</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">4+</div>
<div className="hero-stat-label">Jahre Erfahrung</div>
</div>
<div className="hero-stat">
<div className="hero-stat-number">100%</div>
<div className="hero-stat-label">Praxisorientierte Beratung</div>
</div>
</div>
</div>
</section>

<div className="marquee-section">
<div className="marquee-track">
<div className="marquee-item"><span>ANALYSE</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>STRATEGIE</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>PROZESSE</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>DIGITALISIERUNG</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>EFFIZIENZ</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>WACHSTUM</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>ANALYSE</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>STRATEGIE</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>PROZESSE</span><div className="marquee-dot"></div></div>
<div className="marquee-item"><span>DIGITALISIERUNG</span><div className="marquee-dot"></div></div>
</div>
</div>

<section className="philosophy section" id="philosophy">
<div className="container">
<div className="philosophy-grid">
<div className="philosophy-image reveal-clip-left aspect-[4/5] max-md:aspect-video">
<img alt="Abstract connection points representing AI automation" className="" loading="lazy" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&amp;q=80"/>
</div>
<div className="reveal-slide-right w-full max-w-xl">
<p className="leading-relaxed text-base font-light text-[#D9D2CA] tracking-tight mb-12">
            Die Welt verändert sich. Wer heute nicht automatisiert, verliert morgen den Anschluss. Durch präzise KI-Automatisierung eliminieren wir Ineffizienzen und schaffen strategischen Raum für Innovation und nachhaltiges Wachstum.
          </p>
<div className="flex flex-col gap-8">
<div className="flex flex-row items-start gap-6">
<div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#221f1d] border border-[#38302b] text-[#D4A07A]">
<iconify-icon height="1.4em" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="1.4em"></iconify-icon>
</div>
<div className="flex flex-col gap-2 pt-0.5">
<h4 className="text-lg font-medium text-[#F5F0EB]">Operative Exzellenz</h4>
<p className="leading-relaxed text-base text-[#9C9789]">Durch präzise KI-Automatisierung eliminieren wir Ineffizienzen und steigern die operative Marge signifikant.</p>
</div>
</div>
<div className="flex flex-row items-start gap-6">
<div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#221f1d] border border-[#38302b] text-[#D4A07A]">
<iconify-icon height="1.4em" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="1.4em"></iconify-icon>
</div>
<div className="flex flex-col gap-2 pt-0.5">
<h4 className="text-lg font-medium text-[#F5F0EB]">Strategische Freiheit</h4>
<p className="text-base text-[#9C9789] leading-relaxed">Befreien Sie Ihre Key-Player von administrativen Lasten und schaffen Raum für Innovation.</p>
</div>
</div>
<div className="flex flex-row items-start gap-6">
<div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#221f1d] border border-[#38302b] text-[#D4A07A]">
<iconify-icon height="1.4em" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="1.4em"></iconify-icon>
</div>
<div className="flex flex-col gap-2 pt-0.5">
<h4 className="text-lg font-medium text-[#F5F0EB]">Wettbewerbsvorteil</h4>
<p className="text-base text-[#9C9789] leading-relaxed">Sichern Sie sich durch den frühzeitigen Einsatz von KI eine Vorreiterrolle in Ihrem Marktsegment.</p>
</div>
</div>
<div className="flex flex-row items-start gap-6">
<div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#221f1d] border border-[#38302b] text-[#D4A07A]">
<iconify-icon height="1.4em" icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="1.4em"></iconify-icon>
</div>
<div className="flex flex-col gap-2 pt-0.5">
<h4 className="text-lg font-medium text-[#F5F0EB]">Skalierbare Prozesse</h4>
<p className="leading-relaxed text-base text-[#9C9789]">Wir entwickeln Infrastrukturen, die mit Ihrem Erfolg wachsen – ohne proportional steigende Fixkosten.</p>
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
<div className="section-label">Unsere Leistungen</div>
<h2 className="section-title">Maßgeschneiderte Lösungen<br/>für Ihr <em>Wachstum</em></h2>
</div>
<a className="btn btn-outline" href="/leistungen" style={{alignSelf: 'flex-end', marginBottom: '0.5rem'}}>
<span>Alle Leistungen ansehen</span>
</a>
</div>
<div className="services-grid stagger-scale">
<div className="service-card">
<div className="service-card-number">01</div>
<div className="service-card-icon">
<iconify-icon height="2em" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="2em"></iconify-icon>
</div>
<h3>Strategische KI-Beratung</h3>
<p>Ganzheitliche Begleitung bei der Einführung von KI. Von der Identifikation von Use-Cases bis zur Implementierung.</p>
<ul className="service-card-list">
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> KI-Readiness Audit</li>
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> Custom AI Agent Frameworks</li>
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> Governance &amp; Ethik-Richtlinien</li>
</ul>
</div>
<div className="service-card">
<div className="service-card-number">02</div>
<div className="service-card-icon">
<iconify-icon height="2em" icon="solar:widget-linear" style={{strokeWidth: '1.5'}} width="2em"></iconify-icon>
</div>
<h3>Prozess-Reengineering</h3>
<p>Radikale Neugestaltung Ihrer Kernprozesse. Wir kombinieren Lean-Methoden mit modernster Automatisierung.</p>
<ul className="service-card-list">
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> End-to-End Workflow Design</li>
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> System-Architektur-Beratung</li>
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> Change Management Begleitung</li>
</ul>
</div>
<div className="service-card">
<div className="service-card-number">03</div>
<div className="service-card-icon">
<iconify-icon height="2em" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="2em"></iconify-icon>
</div>
<h3>Data-Driven Growth</h3>
<p>Wachstumsstrategien basierend auf Daten. Wir nutzen KI für Analysen und konvertierende Funnel-Systeme.</p>
<ul className="service-card-list">
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> Predictive Analytics</li>
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> Automatisierte Lead-Gen</li>
<li><iconify-icon height="1.2em" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> Performance-Skalierung</li>
</ul>
</div>
</div>
</div>
</section>

<section className="impact section relative" id="referenzen">
<div className="container relative z-10">
<div className="flex flex-col items-center text-center mb-16 reveal">
<div className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.18em] uppercase text-[#C17F59] mb-4">
<span className="w-8 h-px bg-gradient-to-r from-[#C17F59] to-transparent"></span>
          Wirtschaftlichkeit &amp; Impact
          <span className="w-8 h-px bg-gradient-to-l from-[#C17F59] to-transparent"></span>
</div>
<h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.15] text-[#F5F0EB] tracking-tight mb-4">Messbare Erfolge durch <em className="not-italic text-[#D4A07A]">Optimierung</em></h2>
<p className="text-[0.95rem] leading-[1.7] text-[#9C9789] max-w-[560px]">KI ist kein Selbstzweck, es ist ein Hebel für Ihre Profitabilität. Unsere Daten zeigen den klaren Vorteil der Automatisierung.</p>
</div>
<div className="flex flex-col gap-6 w-full max-w-[1100px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="relative bg-[#1A1917] border border-[#2A2825] rounded-3xl p-8 sm:p-10 overflow-hidden group chart-card hover:border-[#D4A07A]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,122,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 relative z-10">
<h3 className="font-display text-xl sm:text-2xl text-[#F5F0EB] tracking-tight">Zeitaufwand pro Woche (Std.)</h3>
<div className="flex items-center gap-4 text-xs text-[#9C9789]">
<div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#D4A07A]"></div>KI-Automatisiert</div>
<div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#5A6B7C]"></div>Manuell</div>
</div>
</div>
<div className="relative h-[220px] w-full flex items-end justify-between px-2 sm:px-6 z-10">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
<div className="w-full h-px border-t border-dashed border-[#38302b] flex items-center"><span className="absolute -left-6 text-[10px] text-[#6B675E]">60</span></div>
<div className="w-full h-px border-t border-dashed border-[#38302b] flex items-center"><span className="absolute -left-6 text-[10px] text-[#6B675E]">45</span></div>
<div className="w-full h-px border-t border-dashed border-[#38302b] flex items-center"><span className="absolute -left-6 text-[10px] text-[#6B675E]">30</span></div>
<div className="w-full h-px border-t border-dashed border-[#38302b] flex items-center"><span className="absolute -left-6 text-[10px] text-[#6B675E]">15</span></div>
<div className="w-full h-px border-t border-[#38302b] flex items-center"><span className="absolute -left-6 text-[10px] text-[#6B675E]">0</span></div>
</div>
<div className="relative z-10 flex gap-1.5 sm:gap-2 items-end h-full w-[16%] justify-center">
<div className="w-full max-w-[32px] bg-[#5A6B7C] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '75%'}}></div>
<div className="w-full max-w-[32px] bg-gradient-to-t from-[#C4704E] to-[#E8B894] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '35%'}}></div>
<span className="absolute -bottom-8 text-[9px] sm:text-[10px] text-[#6B675E] whitespace-nowrap text-center tracking-wide">Support</span>
</div>
<div className="relative z-10 flex gap-1.5 sm:gap-2 items-end h-full w-[16%] justify-center">
<div className="w-full max-w-[32px] bg-[#5A6B7C] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '60%'}}></div>
<div className="w-full max-w-[32px] bg-gradient-to-t from-[#C4704E] to-[#E8B894] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '25%'}}></div>
<span className="absolute -bottom-8 text-[9px] sm:text-[10px] text-[#6B675E] whitespace-nowrap text-center tracking-wide">Daten</span>
</div>
<div className="relative z-10 flex gap-1.5 sm:gap-2 items-end h-full w-[16%] justify-center">
<div className="w-full max-w-[32px] bg-[#5A6B7C] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '50%'}}></div>
<div className="w-full max-w-[32px] bg-gradient-to-t from-[#C4704E] to-[#E8B894] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '20%'}}></div>
<span className="absolute -bottom-8 text-[9px] sm:text-[10px] text-[#6B675E] whitespace-nowrap text-center tracking-wide">Content</span>
</div>
<div className="relative z-10 flex gap-1.5 sm:gap-2 items-end h-full w-[16%] justify-center">
<div className="w-full max-w-[32px] bg-[#5A6B7C] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '40%'}}></div>
<div className="w-full max-w-[32px] bg-gradient-to-t from-[#C4704E] to-[#E8B894] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '15%'}}></div>
<span className="absolute -bottom-8 text-[9px] sm:text-[10px] text-[#6B675E] whitespace-nowrap text-center tracking-wide">Finanzen</span>
</div>
<div className="relative z-10 flex gap-1.5 sm:gap-2 items-end h-full w-[16%] justify-center">
<div className="w-full max-w-[32px] bg-[#5A6B7C] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '35%'}}></div>
<div className="w-full max-w-[32px] bg-gradient-to-t from-[#C4704E] to-[#E8B894] rounded-t-sm origin-bottom" data-anim="bar" style={{height: '12%'}}></div>
<span className="absolute -bottom-8 text-[9px] sm:text-[10px] text-[#6B675E] whitespace-nowrap text-center tracking-wide">Reporting</span>
</div>
</div>
<div className="mt-14 text-center text-[0.75rem] text-[#6B675E] italic relative z-10">* Realistische Zeitersparnis von ca. 30-50% in Schlüsselbereichen.</div>
</div>

<div className="relative bg-[#1A1917] border border-[#2A2825] rounded-3xl p-8 sm:p-10 overflow-hidden group chart-card hover:border-[#D4A07A]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,122,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 relative z-10">
<h3 className="font-display text-xl sm:text-2xl text-[#F5F0EB] tracking-tight">Kostenentwicklung &amp; ROI (€)</h3>
<div className="flex items-center gap-4 text-xs text-[#9C9789]">
<div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#D4A07A]"></div>Ersparnis</div>
<div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#5A6B7C]"></div>Kosten</div>
</div>
</div>
<div className="relative h-[220px] w-full mt-4 z-10">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
<div className="w-full h-px border-t border-dashed border-[#38302b] flex items-center"><span className="absolute -left-8 text-[10px] text-[#6B675E]">10000</span></div>
<div className="w-full h-px border-t border-dashed border-[#38302b] flex items-center"><span className="absolute -left-8 text-[10px] text-[#6B675E]">7500</span></div>
<div className="w-full h-px border-t border-dashed border-[#38302b] flex items-center"><span className="absolute -left-8 text-[10px] text-[#6B675E]">5000</span></div>
<div className="w-full h-px border-t border-dashed border-[#38302b] flex items-center"><span className="absolute -left-8 text-[10px] text-[#6B675E]">2500</span></div>
<div className="w-full h-px border-t border-[#38302b] flex items-center"><span className="absolute -left-8 text-[10px] text-[#6B675E]">0</span></div>
</div>
<div className="absolute -bottom-8 left-0 right-0 flex justify-between text-[9px] sm:text-[10px] text-[#6B675E] tracking-wide">
<span>M 1</span><span>M 3</span><span>M 6</span><span>M 9</span><span>M 12</span>
</div>
<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 220">
<defs>
<lineargradient id="area-grey" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#5A6B7C" stop-opacity="0.12"></stop><stop offset="100%" stop-color="#5A6B7C" stop-opacity="0"></stop></lineargradient>
<lineargradient id="area-copper" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#D4A07A" stop-opacity="0.25"></stop><stop offset="100%" stop-color="#D4A07A" stop-opacity="0"></stop></lineargradient>
<clippath id="chart-reveal-clip"><rect className="chart-reveal-rect" height="240" width="0" x="0" y="-10"></rect></clippath>
</defs>
<g clipPath="url(#chart-reveal-clip)"><path d="M0,0 Q600,20 1000,60 L1000,220 L0,220 Z" fill="url(#area-grey)"></path></g>
<path className="chart-line-grey" d="M0,0 Q600,20 1000,60" fill="none" stroke="#5A6B7C" strokeWidth="1.5"></path>
<g clipPath="url(#chart-reveal-clip)"><path d="M0,220 Q600,210 1000,120 L1000,220 L0,220 Z" fill="url(#area-copper)"></path></g>
<path className="chart-line-copper" d="M0,220 Q600,210 1000,120" fill="none" stroke="#D4A07A" strokeWidth="2"></path>
</svg>
</div>
<div className="mt-14 text-center text-[0.75rem] text-[#6B675E] italic relative z-10">* Amortisierung der Investition (ROI) meist innerhalb der ersten 12 Monate.</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
<div className="bg-[#1A1917] border border-[#2A2825] rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#D4A07A]/30 transition-all duration-500 opacity-0 translate-y-8" data-anim="metric" style={{transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,122,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="font-display text-4xl sm:text-5xl text-[#D4A07A] mb-3 tracking-tight">35%</div>
<h4 className="text-[0.95rem] text-[#F5F0EB] font-medium mb-1.5 relative z-10">Effizienzgewinn</h4>
<p className="text-sm text-[#9C9789] relative z-10 font-light">Durch Automatisierung</p>
</div>
<div className="bg-[#1A1917] border border-[#2A2825] rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#D4A07A]/30 transition-all duration-500 opacity-0 translate-y-8" data-anim="metric" style={{transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,122,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="font-display text-4xl sm:text-5xl text-[#D4A07A] mb-3 tracking-tight">20%</div>
<h4 className="text-[0.95rem] text-[#F5F0EB] font-medium mb-1.5 relative z-10">Kostenoptimierung</h4>
<p className="text-sm text-[#9C9789] relative z-10 font-light">In administrativen Bereichen</p>
</div>
<div className="bg-[#1A1917] border border-[#2A2825] rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#D4A07A]/30 transition-all duration-500 opacity-0 translate-y-8" data-anim="metric" style={{transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,122,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="font-display text-4xl sm:text-5xl text-[#D4A07A] mb-3 tracking-tight">12 Mon.</div>
<h4 className="text-[0.95rem] text-[#F5F0EB] font-medium mb-1.5 relative z-10">Ø ROI</h4>
<p className="text-sm text-[#9C9789] relative z-10 font-light">Realistische Amortisierung</p>
</div>
</div>
</div>
</div>
</section>

<section className="process section" id="prozess">
<div className="container">
<div className="process-header reveal">
<div className="section-label" style={{justifyContent: 'center'}}>So funktioniert unsere Zusammenarbeit</div>
<h2 className="section-title" style={{textAlign: 'center'}}>In vier klaren Schritten<br/>zum automatisierten <em>Unternehmen</em></h2>
</div>
<div className="process-steps stagger-draw">
<div className="process-step">
<div className="process-step-number"><span>01</span></div>
<h4>Audit</h4>
<p>Tiefgehende Analyse Ihrer bestehenden Wertschöpfungskette und Identifikation von Potentialen. Evaluierung der Datengrundlage.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>02</span></div>
<h4>Strategie</h4>
<p className="">Entwicklung einer klaren Roadmap zur digitalen Transformation unter Berücksichtigung Ihrer wirtschaftlichen und strategischen Ziele.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>03</span></div>
<h4>Execution</h4>
<p>Präzise Implementierung der KI-Lösungen durch unsere Experten in Ihre bestehende IT-Landschaft mit minimalem operativen Impact.</p>
</div>
<div className="process-step">
<div className="process-step-number"><span>04</span></div>
<h4>Monitoring</h4>
<p>Kontinuierliche Erfolgsmessung, Schulung Ihrer Mitarbeiter und iterative Optimierung der Systeme für maximale Performance.</p>
</div>
</div>
</div>
</section>
<hr className="gradient-hr"/>

<section className="testimonials section" id="testimonials">
<div className="container mx-auto w-full max-w-7xl">
<div className="mb-12 flex flex-col items-start">
<div className="mb-6 flex items-center gap-4">
<div className="h-px w-8 bg-[#C17F59]"></div>
<span className="text-xs font-medium uppercase tracking-[0.15em] text-[#C17F59]">Referenzen</span>
</div>
<h2 className="font-serif text-4xl tracking-tight text-[#F5F0EB] md:text-5xl">
          Was unsere Kunden <em className="font-serif italic text-[#D4A07A]">sagen</em>
</h2>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="flex h-full flex-col rounded-3xl border border-[#2A2825] bg-[#1A1917] p-8 transition-colors hover:border-[#D4A07A]/30">
<div className="mb-6 flex gap-1 text-[#C9A96E]">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow text-base italic leading-relaxed text-[#D9D2CA]">"Die Zusammenarbeit mit INTELLI hat unsere Erwartungen übertroffen. Unsere Lead-Generierung läuft jetzt fast vollständig automatisiert, was unseren Umsatz messbar gesteigert hat."</p>
<hr className="my-6 border-t border-[#38302b]"/>
<div className="flex items-center gap-4">
<img alt="Michael Schmidt" className="h-12 w-12 rounded-full object-cover opacity-80 grayscale" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div className="">
<h4 className="text-sm font-medium text-[#F5F0EB]">Michael Schmidt</h4>
<p className="text-xs text-[#9C9789]">Geschäftsführer, Schmidt Logistik GmbH</p>
</div>
</div>
</div>
<div className="flex h-full flex-col rounded-3xl border border-[#2A2825] bg-[#1A1917] p-8 transition-colors hover:border-[#D4A07A]/30">
<div className="mb-6 flex gap-1 text-[#C9A96E]">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow text-base italic leading-relaxed text-[#D9D2CA]">"Endlich haben wir wieder Zeit für das Wesentliche. Die KI-Workflows sparen uns wöchentlich über 15 Stunden manuelle Arbeit. Ein absoluter Gamechanger für unser Team."</p>
<hr className="my-6 border-t border-[#38302b]"/>
<div className="flex items-center gap-4">
<img alt="Sarah Weber" className="h-12 w-12 rounded-full object-cover opacity-80 grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<h4 className="text-sm font-medium text-[#F5F0EB]">Sarah Weber</h4>
<p className="text-xs text-[#9C9789]">Marketing Director, Creative Agency X</p>
</div>
</div>
</div>
<div className="flex h-full flex-col rounded-3xl border border-[#2A2825] bg-[#1A1917] p-8 transition-colors hover:border-[#D4A07A]/30">
<div className="mb-6 flex gap-1 text-[#C9A96E]">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="flex-grow text-base italic leading-relaxed text-[#D9D2CA]">"Dank der strategischen Beratung von INTELLI konnten wir unsere Prozesskosten um über 20% senken. Die Implementierung der KI-Lösungen verlief absolut reibungslos."</p>
<hr className="my-6 border-t border-[#38302b]"/>
<div className="flex items-center gap-4">
<img alt="Thomas Müller" className="h-12 w-12 rounded-full object-cover opacity-80 grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;q=80"/>
<div>
<h4 className="text-sm font-medium text-[#F5F0EB]">Thomas Müller</h4>
<p className="text-xs text-[#9C9789]">COO, TechSolutions AG</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="cta section" id="contact">
<div className="cta-bg absolute inset-0 z-[20] w-full h-full bg-[#0F0F0E] flex flex-col items-center justify-center overflow-hidden">
<div className="[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 pointer-events-none hidden md:block">
<div className="absolute top-0 bottom-0 left-[20%] w-px bg-gradient-to-b from-transparent via-[#C17F59]/20 to-transparent"></div>
<div className="absolute top-0 bottom-0 right-[20%] w-px bg-gradient-to-b from-transparent via-[#C17F59]/20 to-transparent"></div>
<div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C17F59]/20 to-transparent"></div>
<div className="absolute bottom-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C17F59]/20 to-transparent"></div>
<div className="absolute top-[20%] left-[20%] w-[3px] h-[3px] bg-[#D4A07A] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_2px_#D4A07A]"></div>
<div className="absolute top-[20%] right-[20%] w-[3px] h-[3px] bg-[#D4A07A] rounded-full translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_2px_#D4A07A]"></div>
<div className="absolute bottom-[20%] left-[20%] w-[3px] h-[3px] bg-[#D4A07A] rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_12px_2px_#D4A07A]"></div>
<div className="absolute bottom-[20%] right-[20%] w-[3px] h-[3px] bg-[#D4A07A] rounded-full translate-x-1/2 translate-y-1/2 shadow-[0_0_12px_2px_#D4A07A]"></div>
</div>
<div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
<div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-[#C17F59]/20 bg-[#C17F59]/5 mb-8 text-[0.7rem] font-medium text-[#D4A07A] tracking-[0.18em] uppercase shadow-[0_0_20px_rgba(212,160,122,0.1)] backdrop-blur-md">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
      Projekt Starten
    </div>
<h2 className="text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.1] font-normal text-[#F5F0EB] tracking-tight mb-6" style={{fontFamily: 'var(--font-display)'}}>Gemeinsam Ihr Unternehmen <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-[#C17F59] to-[#C9A96E]">weiterentwickeln</span></h2>
<p className="text-[1rem] leading-[1.7] font-light text-[#9C9789] max-w-[600px] mr-auto mb-12 ml-auto" style={{fontFamily: 'var(--font-body)'}}>Von der Analyse bestehender Strukturen bis zur Umsetzung neuer Strategien begleiten wir Unternehmen bei der nachhaltigen Verbesserung von Prozessen, Organisation und Wettbewerbsfähigkeit.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="relative overflow-hidden rounded-full p-[1px] group inline-flex w-full sm:w-auto shadow-[0_0_40px_rgba(193,127,89,0.15)] hover:shadow-[0_0_60px_rgba(193,127,89,0.3)] transition-shadow duration-500" href="/kontakt">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#C17F59_100%)]"></span>
<span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#1A1917] px-8 py-4 text-[0.78rem] uppercase tracking-[0.1em] font-medium text-[#F5F0EB] backdrop-blur-3xl transition-colors group-hover:bg-[#22211E]">
          Jetzt Termin vereinbaren
          <svg className="ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-[0.78rem] uppercase tracking-[0.1em] font-medium text-[#F5F0EB] bg-transparent border border-[#C17F59]/30 rounded-full hover:bg-[#C17F59]/10 hover:border-[#C17F59] transition-all duration-300 w-full sm:w-auto group" href="tel:+4915223393086">
        Direkt anrufen
        <svg className="ml-2 group-hover:text-[#D4A07A] transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</a>
</div>
</div>
</div>
<div className="container">
<div className="cta-content reveal-zoom">
<div className="section-label" style={{justifyContent: 'center'}}>Projekt Starten</div>
<h2 className="cta-title">Bereit für die <em className="shimmer">Transformation</em>?</h2>
<p className="cta-text">Sichern Sie sich jetzt Ihr strategisches Erstgespräch und erfahren Sie, wie wir Ihr Unternehmen für das KI-Zeitalter aufstellen.</p>
<div className="cta-actions">
<a className="btn-glow" href="/kontakt">
<span style={{position: 'relative', zIndex: '1', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              Jetzt Termin vereinbaren
              <iconify-icon height="1.2em" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</span>
</a>
<a className="btn btn-outline" href="tel:+4915223393086">
<span>Direkt anrufen</span>
<iconify-icon height="1.2em" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</main>

<div className="hidden pt-[clamp(8rem,15vh,12rem)] pb-20 min-h-[80vh]" id="view-impressum">
<div className="container max-w-3xl">
<a className="inline-flex items-center gap-2 text-[#9C9789] hover:text-[#D4A07A] transition-colors mb-8 text-sm uppercase tracking-widest" href="/home">
<iconify-icon height="1.2em" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon>
      Zurück
    </a>
<div className="section-label mb-8">Rechtliches</div>
<h1 className="font-display text-4xl md:text-5xl text-[#F5F0EB] mb-12 tracking-tight">Impressum</h1>
<div className="space-y-8 text-[#9C9789] text-[0.95rem] leading-relaxed">
<div><h2 className="font-display text-2xl text-[#F5F0EB] mb-3">Angaben gemäß § 5 TMG</h2><p>INTELLI Beratung GmbH<br/>Franz-Werfel-Straße 30<br/>51067 Köln</p></div>
<div><h2 className="font-display text-2xl text-[#F5F0EB] mb-3">Vertreten durch:</h2><p>Max Mustermann (Geschäftsführer)</p></div>
<div><h2 className="font-display text-2xl text-[#F5F0EB] mb-3">Kontakt:</h2><p>Telefon: +49 (0) 152 233 930 86<br/>E-Mail: <a className="text-[#D4A07A] hover:underline" href="mailto:info@intelli-beratung.de">info@intelli-beratung.de</a></p></div>
</div>
</div>
</div>
<hr className="gradient-hr"/>

<footer className="footer">
<div className="container">
<div className="footer-grid stagger-soft" id="footerGrid">
<div className="footer-brand">
<div className="footer-logo">INTELLI</div>
<p>Wir unterstützen Unternehmen bei der Optimierung von Geschäftsprozessen, der Digitalisierung von Abläufen und der nachhaltigen Weiterentwicklung ihrer Organisation durch Künstliche Intelligenz.</p>
<div className="footer-social">
<a aria-label="LinkedIn" href="#"><iconify-icon height="1.2em" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon></a>
<a aria-label="Twitter" href="#"><iconify-icon height="1.2em" icon="solar:hashtag-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon></a>
<a aria-label="Instagram" href="#"><iconify-icon height="1.2em" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon></a>
</div>
</div>
<div className="footer-column">
<h4>Navigation</h4>
<ul>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/home">Home</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/ki">KI</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/leistungen">Leistungen</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/marketing">Marketing</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/loesung">Lösung</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/prozess">Prozess</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/journal">Journal</a></li>
</ul>
</div>
<div className="footer-column">
<h4>Leistungen</h4>
<ul>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/leistungen#digitalisierung">KI-Strategie &amp; Digitalisierung</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/leistungen#marketing">Marketingstrategie &amp; Kundengewinnung</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/leistungen#prozesse">Prozessoptimierung &amp; Effizienzsteigerung</a></li>
<li><iconify-icon height="1.2em" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="/leistungen#strategie">Strategische Unternehmensentwicklung</a></li>
</ul>
</div>
<div className="footer-column">
<h4>Kontakt</h4>
<ul>
<li><iconify-icon height="1.2em" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <span>Franz-Werfel-Straße 30<br/>51067 Köln</span></li>
<li><iconify-icon height="1.2em" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="tel:+4915223393086">+49 (0) 152 233 930 86</a></li>
<li><iconify-icon height="1.2em" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="1.2em"></iconify-icon> <a href="mailto:info@intelli-beratung.de">info@intelli-beratung.de</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<p>© 2024 INTELLI Beratung GmbH. Alle Rechte vorbehalten.</p>
<div className="footer-bottom-links">
<a href="/impressum">Impressum</a>
<a href="/datenschutz">Datenschutz</a>
<a href="/agb">AGB</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
