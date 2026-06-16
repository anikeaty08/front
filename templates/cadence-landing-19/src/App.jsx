import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



/* ─── WebGL Hero: Full-screen aurora/plasma shader ─── */
(function() {
  const canvas = document.getElementById('heroCanvas');
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: false });
  if (!gl) return;

  let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 1.5);
    const W = canvas.parentElement.clientWidth;
    const H = canvas.parentElement.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}`;
  const FRAG = `
precision highp float;
uniform float u_t;
uniform vec2 u_r;
uniform vec2 u_m;

// Simplex-style noise
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 perm(vec4 x){return mod289(((x*34.)+1.)*x);}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  const vec4 D=vec4(0,.5,1,2);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g,l.zxy);
  vec3 i2=max(g,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=perm(perm(perm(i.z+vec4(0,i1.z,i2.z,1))+i.y+vec4(0,i1.y,i2.y,1))+i.x+vec4(0,i1.x,i2.x,1));
  float n_=1./7.;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(h,vec4(0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=1.79284291400159-.85373472095314*vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

float fbm(vec3 p){
  float v=0.,a=.5;
  for(int i=0;i<5;i++){
    v+=a*snoise(p);
    p*=2.1;
    a*=.48;
  }
  return v;
}

void main(){
  vec2 uv=(gl_FragCoord.xy)/u_r;
  vec2 p=uv*2.-1.;
  p.x*=u_r.x/u_r.y;

  // Mouse influence — warp the coordinate space
  vec2 mp=u_m*2.-1.;
  mp.x*=u_r.x/u_r.y;
  float md=length(p-mp);
  float mInfluence=smoothstep(1.5,0.,md)*0.6;
  p+=normalize(p-mp+.001)*mInfluence*0.45;

  float t=u_t*0.25;

  // Layer 1: slow flowing aurora
  float n1=fbm(vec3(p*1.2+vec2(t*0.4,t*0.3),t*0.2));
  // Layer 2: faster detail
  float n2=fbm(vec3(p*2.5+vec2(-t*0.6,t*0.5),t*0.35+5.));
  // Layer 3: mouse-reactive ripple
  float n3=fbm(vec3(p*1.8+mp*0.5,t*0.5+10.));
  // Layer 4: continuous pulsing wave (always visible)
  float wave=sin(length(p)*4.0-t*2.0)*0.5+0.5;
  float n4=fbm(vec3(p*0.8+vec2(t*0.2,-t*0.15),t*0.1+20.))*wave;

  // Combine
  float n=n1*0.55+n2*0.3+n3*mInfluence*1.5+n4*0.35;

  // Color: teal to cyan to dark
  vec3 c1=vec3(0.05,0.58,0.51); // dark teal
  vec3 c2=vec3(0.18,0.84,0.75); // bright teal
  vec3 c3=vec3(0.37,0.93,0.85); // cyan highlight

  float intensity=smoothstep(-0.2,0.8,n);
  vec3 col=mix(c1,c2,intensity);
  col=mix(col,c3,smoothstep(0.5,1.0,intensity)*0.6);

  // Mouse glow: bright spot near cursor
  float glow=exp(-md*md*2.5)*0.5;
  col+=c3*glow;

  // Vignette
  float vig=1.-smoothstep(0.4,1.5,length(uv*2.-1.));

  // Overall alpha: visible and atmospheric
  float alpha=intensity*0.32*vig+glow*0.7*vig;

  // Boost center area
  float centerGlow=exp(-dot(p,p)*0.6)*0.12;
  alpha+=centerGlow;

  gl_FragColor=vec4(col,alpha);
}
  `;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
    }
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  // Full-screen quad
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
  const pLoc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(pLoc);
  gl.vertexAttribPointer(pLoc, 2, gl.FLOAT, false, 0, 0);

  const u_t = gl.getUniformLocation(prog, 'u_t');
  const u_r = gl.getUniformLocation(prog, 'u_r');
  const u_m = gl.getUniformLocation(prog, 'u_m');

  canvas.parentElement.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    tmx = (e.clientX - r.left) / r.width;
    tmy = 1.0 - (e.clientY - r.top) / r.height; // flip Y for GL
  });

  resize();
  window.addEventListener('resize', resize);

  function frame(t) {
    requestAnimationFrame(frame);
    // Smooth mouse interpolation
    mx += (tmx - mx) * 0.12;
    my += (tmy - my) * 0.12;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.useProgram(prog);
    gl.uniform1f(u_t, t * 0.001);
    gl.uniform2f(u_r, canvas.width, canvas.height);
    gl.uniform2f(u_m, mx, my);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  requestAnimationFrame(frame);
})();

/* ─── Dynamic year ─── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ─── Mobile nav ─── */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMobile.classList.toggle('open');
});

/* ─── Intersection Observer ─── */
const ioOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');

      // Trigger chart animation when product UI visible
      if (entry.target.id === 'productUI') {
        setTimeout(() => {
          document.getElementById('chartLinePath').classList.add('drawn');
          document.getElementById('chartAreaPath').classList.add('shown');
        }, 400);
      }

    }
  });
}, ioOptions);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-up, #productUI').forEach(el => io.observe(el));

/* ─── Billing toggle ─── */
const toggle = document.getElementById('billingToggle');
let isAnnual = false;
const prices = { starter: [199, 159], growth: [599, 479] };
toggle.addEventListener('click', () => {
  isAnnual = !isAnnual;
  toggle.classList.toggle('on', isAnnual);
  document.querySelector('#pricing .pricing-card:nth-child(1) .price-val').textContent = isAnnual ? prices.starter[1] : prices.starter[0];
  document.getElementById('price-growth-val').textContent = isAnnual ? prices.growth[1] : prices.growth[0];
});

/* ─── Ambient bar chart animation ─── */
const bars = document.querySelectorAll('.widget-bar');
function animateBars() {
  bars.forEach(bar => {
    const h = Math.floor(Math.random() * 60) + 30;
    bar.style.height = h + '%';
  });
}
setInterval(animateBars, 2200);

/* ─── Signal feed cycling ─── */
const signalMessages = [
  { type: 'hot',  text: 'Acme Corp — churn risk detected' },
  { type: '',     text: 'TechFlow Inc — expansion signal' },
  { type: 'warn', text: 'Vertix — deal stalled 12 days' },
  { type: '',     text: 'Meridian Co — champion hired' },
  { type: 'hot',  text: 'NovaCorp — legal review delay' },
  { type: '',     text: 'Brex Ltd — upsell opportunity' },
  { type: 'warn', text: 'Aether — QBR overdue 5 days' },
  { type: '',     text: 'Cascade Inc — renewal signal' },
];
let sigIdx = 0;
const signalWidget = document.getElementById('signalWidget');
if (signalWidget) {
  setInterval(() => {
    const rows = signalWidget.querySelectorAll('.signal-row');
    const msg = signalMessages[sigIdx % signalMessages.length];
    const oldest = rows[rows.length - 1];
    const dot = oldest.querySelector('.signal-dot');
    dot.className = 'signal-dot ' + msg.type;
    // Replace text node (second child after the dot element)
    const textNode = Array.from(oldest.childNodes).find(n => n.nodeType === 3);
    if (textNode) textNode.textContent = msg.text;
    else oldest.appendChild(document.createTextNode(msg.text));
    signalWidget.insertBefore(oldest, rows[0]);
    sigIdx++;
  }, 2800);
}

/* ─── Pipeline stage bar ambient flicker ─── */
const stageValues = [
  [85, 64, 48, 30],
  [78, 71, 55, 38],
  [90, 58, 42, 25],
  [82, 67, 52, 34],
];
let stageFrame = 0;
const stageBars = document.querySelectorAll('.pipeline-stage-bar');
setInterval(() => {
  stageFrame = (stageFrame + 1) % stageValues.length;
  stageBars.forEach((bar, i) => {
    if (stageValues[stageFrame][i] !== undefined) {
      bar.style.width = stageValues[stageFrame][i] + '%';
    }
  });
}, 3000);

/* ─── How It Works: scroll-pinned controller ─── */
const howSection = document.getElementById('how');
const howSteps = [
  { num: '01', label: 'Step 1 of 4', title: 'Connect your stack' },
  { num: '02', label: 'Step 2 of 4', title: 'Analyze every signal' },
  { num: '03', label: 'Step 3 of 4', title: 'Predict with precision' },
  { num: '04', label: 'Step 4 of 4', title: 'Act on intelligence' },
];
const howPanels = document.querySelectorAll('.how-panel');
const howDots = document.querySelectorAll('.how-dot');
const howBigNum = document.getElementById('howBigNum');
const howBigNumFill = document.getElementById('howBigNumFill');
const howLabel = document.getElementById('howLabel');
const howTitle = document.getElementById('howTitle');
const howProgressFill = document.getElementById('howProgressFill');
const howOrb1 = document.getElementById('howOrb1');
const howOrb2 = document.getElementById('howOrb2');
let currentHowStep = -1;
let gaugeDrawn = false;

function updateHowStep(step) {
  if (step === currentHowStep) return;
  currentHowStep = step;
  const s = howSteps[step];

  // Big number
  howBigNum.textContent = s.num;
  howBigNumFill.textContent = s.num;
  howBigNumFill.classList.remove('visible');
  requestAnimationFrame(() => requestAnimationFrame(() => howBigNumFill.classList.add('visible')));

  // Label + title
  howLabel.classList.remove('visible');
  howTitle.classList.remove('visible');
  setTimeout(() => {
    howLabel.textContent = s.label;
    howTitle.textContent = s.title;
    howLabel.classList.add('visible');
    howTitle.classList.add('visible');
  }, 120);

  // Panels: 3D transitions
  howPanels.forEach((p, i) => {
    p.classList.remove('active', 'behind');
    if (i === step) p.classList.add('active');
    else if (i < step) p.classList.add('behind');
  });

  // Dots
  howDots.forEach((d, i) => d.classList.toggle('active', i === step));

  // Orb movement
  const ox = step * 15;
  const oy = step * 10;
  howOrb1.style.transform = `translate(${ox}px, ${-oy}px)`;
  howOrb2.style.transform = `translate(${-ox}px, ${oy}px)`;

  // Gauge animation on step 3
  if (step === 2 && !gaugeDrawn) {
    gaugeDrawn = true;
    const ring = document.getElementById('hwGaugeRing');
    if (ring) setTimeout(() => ring.classList.add('drawn'), 300);
  }
}

function onHowScroll() {
  const rect = howSection.getBoundingClientRect();
  const sectionH = howSection.offsetHeight;
  const viewH = window.innerHeight;
  // Progress: 0 at start of section, 1 at end
  const scrolled = -rect.top;
  const scrollRange = sectionH - viewH;
  if (scrollRange <= 0) return;
  const progress = Math.max(0, Math.min(1, scrolled / scrollRange));

  // Update progress bar
  howProgressFill.style.width = (progress * 100) + '%';

  // Map progress to steps (4 steps over the scroll range)
  const step = Math.min(3, Math.floor(progress * 4));
  updateHowStep(step);
}

window.addEventListener('scroll', onHowScroll, { passive: true });
// Initial call
onHowScroll();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav>
<div className="nav-logo">Cadence</div>
<ul className="nav-links">
<li><a href="#">Platform</a></li>
<li><a href="#">Solutions</a></li>
<li><a href="#">Integrations</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">Resources</a></li>
</ul>
<div className="nav-cta">
<button className="btn-nav btn-nav-ghost">Sign in</button>
<button className="btn-nav btn-nav-solid">Get started free</button>
</div>
<div className="nav-hamburger" id="hamburger">
<span></span><span></span><span></span>
</div>
</nav>
<div className="nav-mobile" id="navMobile">
<ul>
<li><a href="#">Platform</a></li>
<li><a href="#">Solutions</a></li>
<li><a href="#">Integrations</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">Resources</a></li>
</ul>
<button className="btn-nav btn-nav-solid" style={{marginTop: '20px'}}>Get started free</button>
</div>

<section id="hero">

<canvas id="heroCanvas"></canvas>

<div className="hero-orb hero-orb-1"></div>
<div className="hero-orb hero-orb-2"></div>
<div className="hero-orb hero-orb-3"></div>

<div className="hero-stars">
<div className="hero-star hero-star-1"></div>
<div className="hero-star hero-star-2"></div>
<div className="hero-star hero-star-3"></div>
<div className="hero-star hero-star-4"></div>
<div className="hero-star hero-star-5"></div>
<div className="hero-star hero-star-6"></div>
</div>

<div className="hero-orbits">
<div className="hero-orbit hero-orbit-1"><div className="hero-orbit-dot"></div></div>
<div className="hero-orbit hero-orbit-2"><div className="hero-orbit-dot"></div></div>
<div className="hero-orbit hero-orbit-3"><div className="hero-orbit-dot"></div></div>
</div>

<div className="hero-content">
<div className="hero-eyebrow">
<span className="iconify" data-icon="lucide:zap"></span>
      Revenue Operations Platform
    </div>
<h1 className="hero-title">
      Revenue Intelligence,<br/>
<span className="text-gradient">Unified</span>
</h1>
<p className="hero-subtitle">
      Align your sales, marketing, and customer success teams on a single source of revenue truth. Predict outcomes, eliminate leakage, and close faster.
    </p>
<div className="hero-ctas">
<button className="btn-hero-primary">
<span className="iconify" data-icon="lucide:play-circle"></span>
        Start free trial
      </button>
<button className="btn-hero-ghost">
<span className="iconify" data-icon="lucide:monitor-play"></span>
        Watch demo
      </button>
</div>
<div className="hero-metrics">
<div className="hero-metric">
<span className="hero-metric-val">3.2x</span>
<span className="hero-metric-label">Pipeline velocity</span>
</div>
<div className="hero-metric-sep"></div>
<div className="hero-metric">
<span className="hero-metric-val">98.7%</span>
<span className="hero-metric-label">Forecast accuracy</span>
</div>
<div className="hero-metric-sep"></div>
<div className="hero-metric">
<span className="hero-metric-val">$2.1B</span>
<span className="hero-metric-label">Revenue managed</span>
</div>
<div className="hero-metric-sep"></div>
<div className="hero-metric">
<span className="hero-metric-val">47%</span>
<span className="hero-metric-label">Less leakage</span>
</div>
</div>
</div>
</section>

<section id="trust">
<p className="trust-label">Trusted by 2,400+ revenue teams worldwide</p>
<div className="logo-bar-wrap">
<div className="logo-track" id="logoTrack">
<span className="logo-item">Salesforce</span>
<span className="logo-item">HubSpot</span>
<span className="logo-item">Notion</span>
<span className="logo-item">Stripe</span>
<span className="logo-item">Figma</span>
<span className="logo-item">Intercom</span>
<span className="logo-item">Lattice</span>
<span className="logo-item">Rippling</span>
<span className="logo-item">Brex</span>
<span className="logo-item">Airtable</span>
<span className="logo-item">Linear</span>
<span className="logo-item">Vercel</span>

<span className="logo-item">Salesforce</span>
<span className="logo-item">HubSpot</span>
<span className="logo-item">Notion</span>
<span className="logo-item">Stripe</span>
<span className="logo-item">Figma</span>
<span className="logo-item">Intercom</span>
<span className="logo-item">Lattice</span>
<span className="logo-item">Rippling</span>
<span className="logo-item">Brex</span>
<span className="logo-item">Airtable</span>
<span className="logo-item">Linear</span>
<span className="logo-item">Vercel</span>
</div>
</div>
</section>

<section className="section" id="features">
<div className="section-sep"></div>
<div className="container">
<div className="section-header">
<span className="section-label">Platform Capabilities</span>
<h2>Every layer of revenue,<br/><span className="text-gradient">under one roof</span></h2>
<p>From pipeline analytics to AI-powered forecasting, Cadence surfaces the signals that matter before deals slip.</p>
</div>
<div className="bento-grid stagger-up" id="bentoGrid">

<div className="bento-card reveal-child">
<div className="bc-grid"></div>
<div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div>
<div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title">Pipeline Analytics</span>
<span className="bc-header-tag">Real-time</span>
</div>
<div className="bc-body">
<p>Real-time visibility into every deal stage. Spot bottlenecks, measure velocity, and track conversion rates.</p>
<div className="bento-widget" id="barWidget">
<div className="bw-status"><span className="bw-status-label">Q1 Velocity</span><span className="bw-status-val">3.2x</span></div>
<div className="widget-bars" id="barChartWidget">
<div className="widget-bar" style={{height: '45%'}}></div>
<div className="widget-bar" style={{height: '68%'}}></div>
<div className="widget-bar" style={{height: '55%'}}></div>
<div className="widget-bar" style={{height: '82%'}}></div>
<div className="widget-bar" style={{height: '60%'}}></div>
<div className="widget-bar" style={{height: '74%'}}></div>
<div className="widget-bar" style={{height: '50%'}}></div>
<div className="widget-bar" style={{height: '88%'}}></div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div>
<div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div>
<div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title">Forecast Engine</span>
<span className="bc-header-tag">AI</span>
</div>
<div className="bc-body">
<p>AI-powered predictions with 98.7% accuracy. Compare bottoms-up, top-down, and AI-assisted forecasts.</p>
<div className="bento-widget">
<div className="bw-status"><span className="bw-status-label">Accuracy</span><span className="bw-status-val">98.7%</span></div>
<div className="widget-donut">
<svg className="donut-svg" viewbox="0 0 72 72">
<circle cx="36" cy="36" fill="none" r="28" stroke="rgba(20,184,166,0.1)" strokeWidth="8"></circle>
<circle cx="36" cy="36" fill="none" opacity="0.9" r="28" stroke="#14B8A6" stroke-dasharray="126 176" stroke-dashoffset="44" strokeLinecap="round" strokeWidth="8"></circle>
<circle cx="36" cy="36" fill="none" opacity="0.5" r="28" stroke="#2DD4BF" stroke-dasharray="44 176" stroke-dashoffset="-82" strokeLinecap="round" strokeWidth="8"></circle>
<text fill="#2DD4BF" fontFamily="Outfit" fontSize="10" font-weight="300" text-anchor="middle" x="36" y="39">72%</text>
</svg>
<div className="donut-labels">
<div className="donut-item"><div className="donut-dot" style={{background: '#14B8A6'}}></div>Committed</div>
<div className="donut-item"><div className="donut-dot" style={{background: '#2DD4BF'}}></div>Best Case</div>
<div className="donut-item"><div className="donut-dot" style={{background: 'rgba(255,255,255,0.15)'}}></div>Pipeline</div>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div>
<div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div>
<div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title">Deal Intelligence</span>
<span className="bc-header-tag">Scoring</span>
</div>
<div className="bc-body">
<p>Surface at-risk deals automatically. AI coaching recommendations before executive reviews.</p>
<div className="bento-widget">
<div className="bw-status"><span className="bw-status-label">Pipeline</span><span className="bw-status-val">$2.85M</span></div>
<div className="widget-pipeline" id="pipelineWidget">
<div className="pipeline-stage">
<span className="pipeline-stage-label">Discovery</span>
<div className="pipeline-stage-bar" style={{width: '85%'}}></div>
<span className="pipeline-stage-val">$1.2M</span>
</div>
<div className="pipeline-stage">
<span className="pipeline-stage-label">Demo</span>
<div className="pipeline-stage-bar" style={{width: '64%'}}></div>
<span className="pipeline-stage-val">$840K</span>
</div>
<div className="pipeline-stage">
<span className="pipeline-stage-label">Proposal</span>
<div className="pipeline-stage-bar" style={{width: '48%'}}></div>
<span className="pipeline-stage-val">$520K</span>
</div>
<div className="pipeline-stage">
<span className="pipeline-stage-label">Negotiation</span>
<div className="pipeline-stage-bar" style={{width: '30%'}}></div>
<span className="pipeline-stage-val">$290K</span>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div>
<div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div>
<div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title">Revenue Signals</span>
<span className="bc-header-tag">Live</span>
</div>
<div className="bc-body">
<p>Detect buying intent, churn risk, and expansion opportunities as they emerge across data sources.</p>
<div className="bento-widget">
<div className="bw-status"><span className="bw-status-label">Active alerts</span><span className="bw-status-val">5 signals</span></div>
<div className="widget-signals" id="signalWidget">
<div className="signal-row"><div className="signal-dot hot"></div>Acme Corp — churn risk detected</div>
<div className="signal-row"><div className="signal-dot"></div>TechFlow Inc — expansion signal</div>
<div className="signal-row"><div className="signal-dot warn"></div>Vertix — deal stalled 12 days</div>
<div className="signal-row"><div className="signal-dot"></div>Meridian Co — champion hired</div>
<div className="signal-row"><div className="signal-dot hot"></div>NovaCorp — legal review delay</div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div>
<div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div>
<div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title">Team Performance</span>
<span className="bc-header-tag">Coaching</span>
</div>
<div className="bc-body">
<p>Benchmark reps against top performers. Coach with data — quota attainment, activity trends, win rates.</p>
<div className="bento-widget">
<div className="bw-status"><span className="bw-status-label">Avg attainment</span><span className="bw-status-val">92%</span></div>
<div className="widget-team">
<div className="team-row">
<div className="team-avatar" style={{background: 'linear-gradient(135deg,#14B8A6,#2DD4BF)'}}>SR</div>
<span className="team-name">Sarah R.</span>
<div className="team-progress"><div className="team-progress-fill" style={{width: '92%'}}></div></div>
<span className="team-score">118%</span>
</div>
<div className="team-row">
<div className="team-avatar" style={{background: 'linear-gradient(135deg,#0D9488,#14B8A6)'}}>JM</div>
<span className="team-name">James M.</span>
<div className="team-progress"><div className="team-progress-fill" style={{width: '78%'}}></div></div>
<span className="team-score">96%</span>
</div>
<div className="team-row">
<div className="team-avatar" style={{background: 'linear-gradient(135deg,#5EEAD4,#2DD4BF)'}}>AL</div>
<span className="team-name">Amy L.</span>
<div className="team-progress"><div className="team-progress-fill" style={{width: '65%'}}></div></div>
<span className="team-score">82%</span>
</div>
<div className="team-row">
<div className="team-avatar" style={{background: 'linear-gradient(135deg,#0D9488,#0F766E)'}}>DK</div>
<span className="team-name">Dev K.</span>
<div className="team-progress"><div className="team-progress-fill" style={{width: '54%'}}></div></div>
<span className="team-score">71%</span>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card reveal-child">
<div className="bc-grid"></div>
<div className="bc-shimmer"></div>
<div className="bc-corner bc-corner-tl"></div>
<div className="bc-corner bc-corner-br"></div>
<div className="bc-header">
<div className="bc-live-dot"></div>
<span className="bc-header-title">Integration Hub</span>
<span className="bc-header-tag">240+</span>
</div>
<div className="bc-body">
<p>Connect CRM, MAP, and CS tools in minutes. Bi-directional sync keeps data fresh — no manual exports.</p>
<div className="bento-widget">
<div className="bw-status"><span className="bw-status-label">Connected</span><span className="bw-status-val">8 active</span></div>
<div className="widget-integrations">
<span className="int-badge">Salesforce</span>
<span className="int-badge">HubSpot</span>
<span className="int-badge">Marketo</span>
<span className="int-badge">Slack</span>
<span className="int-badge">Gong</span>
<span className="int-badge">Outreach</span>
<span className="int-badge">Zendesk</span>
<span className="int-badge">BigQuery</span>
<span className="int-badge" style={{color: 'var(--accent-light)', borderStyle: 'dashed'}}>+232</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="metrics">
<div className="metrics-wrap">
<div className="metrics-track" id="metricsTrack">
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val" data-suffix="x" data-target="3.2">3.2x</span><span className="metric-label">Pipeline Velocity</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">98.7%</span><span className="metric-label">Forecast Accuracy</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">47%</span><span className="metric-label">Less Revenue Leakage</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">$2.1B</span><span className="metric-label">Revenue Managed</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">18 min</span><span className="metric-label">Avg Onboarding</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">240+</span><span className="metric-label">Native Integrations</span></div>

<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">3.2x</span><span className="metric-label">Pipeline Velocity</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">98.7%</span><span className="metric-label">Forecast Accuracy</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">47%</span><span className="metric-label">Less Revenue Leakage</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">$2.1B</span><span className="metric-label">Revenue Managed</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">18 min</span><span className="metric-label">Avg Onboarding</span></div>
<div className="metric-pill"><div className="metric-dot"></div><span className="metric-val">240+</span><span className="metric-label">Native Integrations</span></div>
</div>
</div>
</section>

<section id="how">
<div className="section-sep"></div>
<div className="how-sticky" id="howSticky">

<div className="how-bg-orb how-bg-orb-1" id="howOrb1"></div>
<div className="how-bg-orb how-bg-orb-2" id="howOrb2"></div>
<div className="how-bg-dots"></div>
<div className="how-mobile-header">
<span className="section-label">How It Works</span>
<h2>Revenue clarity in <span className="text-gradient">four steps</span></h2>
</div>
<div className="how-inner">

<div className="how-left">
<span className="section-label" style={{opacity: '1'}}>How It Works</span>
<div className="how-step-counter">
<div className="how-big-num" id="howBigNum">01</div>
<div className="how-big-num-fill" id="howBigNumFill">01</div>
</div>
<div className="how-left-label visible" id="howLabel">Step 1 of 4</div>
<div className="how-left-title visible" id="howTitle">Connect your stack</div>
<div className="how-progress"><div className="how-progress-fill" id="howProgressFill"></div></div>
<div className="how-dots">
<div className="how-dot active" data-step="0"></div>
<div className="how-dot" data-step="1"></div>
<div className="how-dot" data-step="2"></div>
<div className="how-dot" data-step="3"></div>
</div>
</div>

<div className="how-right">

<div className="how-panel active" data-panel="0">
<div className="hp-grid"></div>
<div className="hp-shimmer"></div>
<div className="hp-corner hp-corner-tl"></div>
<div className="hp-corner hp-corner-tr"></div>
<div className="hp-corner hp-corner-br"></div>
<div className="hp-header">
<div className="hp-live-dot"></div>
<span className="hp-header-title">Connect</span>
<span className="hp-header-badge">Integrations</span>
</div>
<div className="hp-body">
<p>One-click connections to your CRM, marketing automation, and customer success stack. No engineering required.</p>
<div className="how-panel-widget">
<div className="hw-status-row">
<span className="hw-status-label">Sync status</span>
<span className="hw-status-val">6 / 8 connected</span>
</div>
<div className="hw-integrations">
<span className="hw-int-pill glow"><span className="hw-status-dot on"></span>Salesforce</span>
<span className="hw-int-pill glow"><span className="hw-status-dot on"></span>HubSpot</span>
<span className="hw-int-pill glow"><span className="hw-status-dot on"></span>Gong</span>
<span className="hw-int-pill glow"><span className="hw-status-dot on"></span>Slack</span>
<span className="hw-int-pill glow"><span className="hw-status-dot on"></span>Outreach</span>
<span className="hw-int-pill glow"><span className="hw-status-dot on"></span>Marketo</span>
<span className="hw-int-pill"><span className="hw-status-dot off"></span>Zendesk</span>
<span className="hw-int-pill"><span className="hw-status-dot off"></span>BigQuery</span>
<span className="hw-int-pill" style={{color: 'var(--accent-light)', borderStyle: 'dashed'}}>+232 more</span>
</div>
</div>
</div>
</div>

<div className="how-panel" data-panel="1">
<div className="hp-grid"></div>
<div className="hp-shimmer"></div>
<div className="hp-corner hp-corner-tl"></div>
<div className="hp-corner hp-corner-tr"></div>
<div className="hp-corner hp-corner-br"></div>
<div className="hp-header">
<div className="hp-live-dot"></div>
<span className="hp-header-title">Analyze</span>
<span className="hp-header-badge">Live funnel</span>
</div>
<div className="hp-body">
<p>Automatic funnel mapping, data normalization across systems, and real-time anomaly detection.</p>
<div className="how-panel-widget">
<div className="hw-status-row">
<span className="hw-status-label">Conversion rate</span>
<span className="hw-status-val">Leads → Closed 12.4%</span>
</div>
<div className="hw-funnel" id="hwFunnel">
<div className="hw-funnel-row">
<span className="hw-funnel-label">Leads</span>
<div className="hw-funnel-bar-wrap"><div className="hw-funnel-bar" style={{width: '92%'}}></div></div>
<span className="hw-funnel-pct">100%</span>
<span className="hw-funnel-val">4,218</span>
</div>
<div className="hw-funnel-row">
<span className="hw-funnel-label">MQLs</span>
<div className="hw-funnel-bar-wrap"><div className="hw-funnel-bar" style={{width: '68%'}}></div></div>
<span className="hw-funnel-pct">67%</span>
<span className="hw-funnel-val">2,847</span>
</div>
<div className="hw-funnel-row">
<span className="hw-funnel-label">SQLs</span>
<div className="hw-funnel-bar-wrap"><div className="hw-funnel-bar" style={{width: '42%'}}></div></div>
<span className="hw-funnel-pct">31%</span>
<span className="hw-funnel-val">1,291</span>
</div>
<div className="hw-funnel-row">
<span className="hw-funnel-label">Closed</span>
<div className="hw-funnel-bar-wrap"><div className="hw-funnel-bar" style={{width: '24%'}}></div></div>
<span className="hw-funnel-pct">12%</span>
<span className="hw-funnel-val">$2.1M</span>
</div>
</div>
</div>
</div>
</div>

<div className="how-panel" data-panel="2">
<div className="hp-grid"></div>
<div className="hp-shimmer"></div>
<div className="hp-corner hp-corner-tl"></div>
<div className="hp-corner hp-corner-tr"></div>
<div className="hp-corner hp-corner-br"></div>
<div className="hp-header">
<div className="hp-live-dot"></div>
<span className="hp-header-title">Predict</span>
<span className="hp-header-badge">AI forecast</span>
</div>
<div className="hp-body">
<p>AI generates rolling forecasts and deal health scores, updated hourly with zero manual input.</p>
<div className="how-panel-widget">
<div className="hw-status-row">
<span className="hw-status-label">Confidence</span>
<span className="hw-status-val">87% — High</span>
</div>
<div className="hw-gauge">
<div className="hw-gauge-ring">
<svg viewbox="0 0 72 72">
<circle className="ring-bg" cx="36" cy="36" r="30"></circle>
<circle className="ring-fill" cx="36" cy="36" id="hwGaugeRing" r="30"></circle>
</svg>
<div className="hw-gauge-val">87%</div>
</div>
<div className="hw-gauge-meta">
<div className="hw-gauge-row"><div className="hw-gauge-dot" style={{background: '#2DD4BF'}}></div>Forecast confidence</div>
<div className="hw-gauge-row"><div className="hw-gauge-dot" style={{background: '#14B8A6'}}></div>Commit: $3.2M</div>
<div className="hw-gauge-row"><div className="hw-gauge-dot" style={{background: 'rgba(255,255,255,0.15)'}}></div>Best case: $4.1M</div>
<div className="hw-gauge-row"><div className="hw-gauge-dot" style={{background: '#F59E0B'}}></div>3 at-risk deals flagged</div>
</div>
</div>
</div>
</div>
</div>

<div className="how-panel" data-panel="3">
<div className="hp-grid"></div>
<div className="hp-shimmer"></div>
<div className="hp-corner hp-corner-tl"></div>
<div className="hp-corner hp-corner-tr"></div>
<div className="hp-corner hp-corner-br"></div>
<div className="hp-header">
<div className="hp-live-dot"></div>
<span className="hp-header-title">Act</span>
<span className="hp-header-badge">3 dispatched</span>
</div>
<div className="hp-body">
<p>Push insights to Slack, email digests, or CRM tasks. Coach reps and close the quarter with confidence.</p>
<div className="how-panel-widget">
<div className="hw-status-row">
<span className="hw-status-label">Activity log</span>
<span className="hw-status-val">Last 5 min</span>
</div>
<div className="hw-actions">
<div className="hw-action-row">
<div className="hw-action-dot live"></div>
<span className="hw-action-text">Alert dispatched to #revenue-ops</span>
<span className="hw-action-time">2s ago</span>
</div>
<div className="hw-action-row">
<div className="hw-action-dot live"></div>
<span className="hw-action-text">CRM task created: Follow up Acme Corp</span>
<span className="hw-action-time">14s ago</span>
</div>
<div className="hw-action-row">
<div className="hw-action-dot done"></div>
<span className="hw-action-text">Weekly digest emailed to VP Sales</span>
<span className="hw-action-time">1m ago</span>
</div>
<div className="hw-action-row">
<div className="hw-action-dot done"></div>
<span className="hw-action-text">Churn risk report sent to CS lead</span>
<span className="hw-action-time">3m ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section section-alt" id="showcase">
<div className="section-sep"></div>
<div className="container showcase-container">
<div className="section-header reveal">
<span className="section-label">Product Tour</span>
<h2>Your entire revenue motion,<br/><span className="text-gradient">at a glance</span></h2>
<p>A dashboard that updates in real time, not after a weekend data pipeline run.</p>
</div>
<div className="product-ui-wrap reveal" id="productUI">
<div className="ui-titlebar">
<div className="ui-dots">
<div className="ui-dot"></div>
<div className="ui-dot"></div>
<div className="ui-dot"></div>
</div>
<div className="ui-tabs">
<span className="ui-tab active">Revenue</span>
<span className="ui-tab">Pipeline</span>
<span className="ui-tab">Team</span>
<span className="ui-tab">Forecasts</span>
</div>
</div>
<div className="ui-body">

<div className="ui-sidebar">
<div className="ui-sidebar-logo">
<div className="ui-sidebar-logo-mark"></div>
<span className="ui-sidebar-logo-text">Cadence</span>
</div>
<div className="ui-nav-item active"><span className="iconify" data-icon="lucide:layout-dashboard"></span>Overview</div>
<div className="ui-nav-item"><span className="iconify" data-icon="lucide:bar-chart-2"></span>Pipeline</div>
<div className="ui-nav-item"><span className="iconify" data-icon="lucide:target"></span>Forecasts</div>
<div className="ui-nav-item"><span className="iconify" data-icon="lucide:users-2"></span>Teams</div>
<div className="ui-nav-item"><span className="iconify" data-icon="lucide:radio"></span>Signals</div>
<div className="ui-nav-item"><span className="iconify" data-icon="lucide:settings"></span>Settings</div>
</div>

<div className="ui-main">
<div className="ui-main-header">
<span className="ui-main-title">Revenue Overview — Q1 2026</span>
<span className="ui-date-badge">Last updated: 2 min ago</span>
</div>

<div className="ui-metrics-row">
<div className="ui-metric-card">
<div className="ui-metric-val">$4.8M</div>
<div className="ui-metric-label">ARR to Date</div>
<div className="ui-metric-delta">+12.4% MoM</div>
</div>
<div className="ui-metric-card">
<div className="ui-metric-val">$2.1M</div>
<div className="ui-metric-label">Open Pipeline</div>
<div className="ui-metric-delta">+8.2% WoW</div>
</div>
<div className="ui-metric-card">
<div className="ui-metric-val">72%</div>
<div className="ui-metric-label">Forecast Commit</div>
<div className="ui-metric-delta">+3.1pts</div>
</div>
<div className="ui-metric-card">
<div className="ui-metric-val">18 days</div>
<div className="ui-metric-label">Avg Sales Cycle</div>
<div className="ui-metric-delta" style={{color: '#4ADE80'}}>-2 days</div>
</div>
</div>

<div className="ui-chart-area">
<div className="ui-chart-title">Monthly Recurring Revenue</div>
<svg className="chart-svg" id="revChart" preserveaspectratio="none" viewbox="0 0 600 120">
<defs>
<lineargradient id="chartFillGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#14B8A6" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#14B8A6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="chart-area-fill" d="M0 110 L60 95 L120 88 L180 78 L240 70 L300 62 L360 52 L420 45 L480 35 L540 28 L600 20 L600 120 L0 120 Z" fill="url(#chartFillGrad)" id="chartAreaPath"></path>
<path className="chart-line" d="M0 110 L60 95 L120 88 L180 78 L240 70 L300 62 L360 52 L420 45 L480 35 L540 28 L600 20" id="chartLinePath"></path>

<text fill="rgba(255,255,255,0.2)" fontFamily="Inter" fontSize="6" x="0" y="118">Jan</text>
<text fill="rgba(255,255,255,0.2)" fontFamily="Inter" fontSize="6" x="120" y="118">Mar</text>
<text fill="rgba(255,255,255,0.2)" fontFamily="Inter" fontSize="6" x="240" y="118">May</text>
<text fill="rgba(255,255,255,0.2)" fontFamily="Inter" fontSize="6" x="360" y="118">Jul</text>
<text fill="rgba(255,255,255,0.2)" fontFamily="Inter" fontSize="6" x="480" y="118">Sep</text>
<text fill="rgba(255,255,255,0.2)" fontFamily="Inter" fontSize="6" x="570" y="118">Nov</text>

<circle cx="600" cy="20" fill="#2DD4BF" opacity="0.9" r="4">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="3;5;3"></animate>
</circle>
</svg>
</div>

<div className="ui-kanban" id="uiKanban">
<div className="kanban-col">
<div className="kanban-col-header">Prospecting <span className="kanban-count">12</span></div>
<div className="kanban-card">Acme Corp — $180K</div>
<div className="kanban-card">TechFlow — $95K</div>
</div>
<div className="kanban-col">
<div className="kanban-col-header">Discovery <span className="kanban-count">8</span></div>
<div className="kanban-card">Vertix Inc — $420K</div>
<div className="kanban-card">Nova Labs — $210K</div>
</div>
<div className="kanban-col">
<div className="kanban-col-header">Proposal <span className="kanban-count">5</span></div>
<div className="kanban-card">Meridian Co — $780K</div>
<div className="kanban-card">Cascade — $340K</div>
</div>
<div className="kanban-col">
<div className="kanban-col-header">Closing <span className="kanban-count">3</span></div>
<div className="kanban-card">Apex Group — $1.2M</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section" id="testimonials">
<div className="section-sep"></div>
<div className="container">
<div className="section-header reveal">
<span className="section-label">Customer Stories</span>
<h2>Revenue leaders who <span className="text-gradient">trust Cadence</span></h2>
<p>From Series A to enterprise — teams that align on revenue, win more.</p>
</div>
<div className="testimonials-layout">

<div className="testi-featured reveal-left">
<div className="testi-stars">
<span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span>
</div>
<div className="testi-quote-mark">"</div>
<p className="testi-quote">Cadence replaced four tools we were cobbling together. For the first time, my sales, marketing, and CS leads were looking at the same numbers in the same meeting. We closed Q3 at 124% — the first time we'd cracked that ceiling in three years. It wasn't magic; it was just having a single source of truth.</p>
<div className="testi-author">
<div className="testi-avatar" style={{background: 'linear-gradient(135deg,#14B8A6,#2DD4BF)'}}>MW</div>
<div>
<div className="testi-name">Marcus Webb</div>
<div className="testi-role">Chief Revenue Officer, Aether Cloud</div>
</div>
</div>
</div>

<div className="testi-stack reveal-right">
<div className="testi-card">
<div className="testi-stars" style={{marginBottom: '12px'}}>
<span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span>
</div>
<p className="testi-quote">Our forecast accuracy went from 63% to 97% within 60 days. My board stopped questioning the numbers — that alone was worth every penny of the subscription.</p>
<div className="testi-author">
<div className="testi-avatar" style={{background: 'linear-gradient(135deg,#0D9488,#14B8A6)'}}>PL</div>
<div>
<div className="testi-name">Priya Landes</div>
<div className="testi-role">VP Sales, Luminary Systems</div>
</div>
</div>
</div>
<div className="testi-card">
<div className="testi-stars" style={{marginBottom: '12px'}}>
<span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span><span className="testi-star">★</span>
</div>
<p className="testi-quote">The Signals feature alone is a churn prevention machine. We caught three at-risk accounts in the first week that our CS team had completely missed. Saved us over $300K in ARR on the first month.</p>
<div className="testi-author">
<div className="testi-avatar" style={{background: 'linear-gradient(135deg,#5EEAD4,#2DD4BF)'}}>DH</div>
<div>
<div className="testi-name">Diana Hoang</div>
<div className="testi-role">Head of Customer Success, Relay.io</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section section-alt" id="pricing">
<div className="section-sep"></div>
<div className="container">
<div className="section-header reveal">
<span className="section-label">Pricing</span>
<h2>Simple pricing, <span className="text-gradient">serious results</span></h2>
<p>No hidden fees. No per-seat traps. Every plan includes unlimited data integrations.</p>
</div>
<div className="pricing-toggle">
<span className="toggle-label">Monthly</span>
<div className="toggle-switch" id="billingToggle">
<div className="toggle-knob"></div>
</div>
<span className="toggle-label">Annual</span>
<span className="toggle-badge">Save 20%</span>
</div>
<div className="pricing-grid stagger-up">

<div className="pricing-card reveal-child">
<p className="pricing-tier">Starter</p>
<div className="pricing-price" id="price-starter"><sup>$</sup><span className="price-val">199</span></div>
<p className="pricing-price-note">per month · up to 5 seats</p>
<p className="pricing-desc">For early-stage revenue teams getting their first real look at the funnel.</p>
<ul className="pricing-features">
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Pipeline analytics dashboard</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>3 native integrations</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Weekly AI forecast</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Slack digest notifications</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>14-day data history</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Team leaderboard</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Email support</li>
</ul>
<button className="pricing-cta pricing-cta-ghost">Get started free</button>
</div>

<div className="pricing-card featured reveal-child">
<div className="pricing-popular-badge">
<span className="iconify" data-icon="lucide:star"></span>
          Most Popular
        </div>
<p className="pricing-tier">Growth</p>
<div className="pricing-price"><sup>$</sup><span className="price-val" id="price-growth-val">599</span></div>
<p className="pricing-price-note">per month · up to 25 seats</p>
<p className="pricing-desc">For scaling revenue teams that need AI forecasting and deal intelligence to close every quarter.</p>
<ul className="pricing-features">
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Everything in Starter</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Unlimited integrations</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Daily AI forecasting</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Deal intelligence &amp; signals</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Rep performance coaching</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>1-year data history</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Priority support</li>
</ul>
<button className="pricing-cta pricing-cta-solid">Start 14-day trial</button>
</div>

<div className="pricing-card reveal-child">
<p className="pricing-tier">Enterprise</p>
<div className="pricing-price" style={{fontSize: '1.8rem', letterSpacing: '-0.02em'}}>Custom</div>
<p className="pricing-price-note">unlimited seats · dedicated SLA</p>
<p className="pricing-desc">For revenue organizations that require custom data models, SSO, and white-glove onboarding.</p>
<ul className="pricing-features">
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Everything in Growth</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Custom AI model training</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>SSO / SCIM provisioning</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Dedicated CSM</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Unlimited data history</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>99.9% uptime SLA</li>
<li className="pricing-feature"><span className="iconify pricing-check" data-icon="lucide:check"></span>Private cloud deployment</li>
</ul>
<button className="pricing-cta pricing-cta-ghost">Contact sales</button>
</div>
</div>
</div>
</section>

<section id="cta-section">
<div className="container" style={{position: 'relative', zIndex: '1'}}>
<div className="reveal">
<span className="section-label">Ready to align your revenue?</span>
<h2 className="cta-title">Start closing quarters with<br/><span className="text-gradient">confidence, not guesswork</span></h2>
<p className="cta-sub">Join 2,400+ revenue teams that use Cadence to forecast accurately, close faster, and stop letting deals slip.</p>
<div className="cta-buttons">
<button className="btn-cta-primary">
<span className="iconify" data-icon="lucide:rocket"></span>
          Start free trial
        </button>
<button className="btn-cta-ghost">
<span className="iconify" data-icon="lucide:calendar"></span>
          Book a demo
        </button>
</div>
</div>
</div>
</section>

<footer style={{position: 'relative'}}>
<div className="container">
<div className="footer-grid">
<div className="footer-brand">
<div className="nav-logo" style={{marginBottom: '0'}}>Cadence</div>
<p>Revenue operations and intelligence platform for modern go-to-market teams. Forecast confidently, sell smarter.</p>
</div>
<div>
<p className="footer-col-title">Product</p>
<ul className="footer-links">
<li><a href="#">Pipeline Analytics</a></li>
<li><a href="#">Forecast Engine</a></li>
<li><a href="#">Deal Intelligence</a></li>
<li><a href="#">Revenue Signals</a></li>
<li><a href="#">Integrations</a></li>
<li><a href="#">Changelog</a></li>
</ul>
</div>
<div>
<p className="footer-col-title">Company</p>
<ul className="footer-links">
<li><a href="#">About</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">Press</a></li>
<li><a href="#">Partners</a></li>
<li><a href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="footer-col-title">Legal</p>
<ul className="footer-links">
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of Service</a></li>
<li><a href="#">Security</a></li>
<li><a href="#">Cookie Policy</a></li>
<li><a href="#">GDPR</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<span className="footer-copy">© <span id="year"></span> Cadence, Inc. All rights reserved.</span>
<div className="footer-socials">
<a className="social-link" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="social-link" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
<a className="social-link" href="#"><span className="iconify" data-icon="lucide:github"></span></a>
<a className="social-link" href="#"><span className="iconify" data-icon="lucide:youtube"></span></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
