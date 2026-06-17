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



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    precision highp float;

uniform vec2 iResolution;
uniform float iTime;

vec3 hash( vec3 p ) {
  p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
            dot(p,vec3(269.5,183.3,246.1)),
            dot(p,vec3(113.5,271.9,124.6)));
  return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise( in vec3 p ) {
  vec3 i = floor( p );
  vec3 f = fract( p );
  vec3 u = f*f*(3.0-2.0*f);
  return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),
                      dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                 mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),
                      dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
            mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),
                      dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                 mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),
                      dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec3 stars_direction = normalize(vec3(uv * 2.0 - 1.0, 1.0));
  float stars_threshold = 8.0;
  float stars_exposure = 200.0;
  float stars = pow(clamp(noise(stars_direction * 200.0), 0.0, 1.0), stars_threshold) * stars_exposure;
  stars *= mix(0.4, 1.4, noise(stars_direction * 100.0 + vec3(iTime)));
  gl_FragColor = vec4(vec3(stars),1.0);
}



    const canvas = document.getElementById('shader-canvas');
const gl = canvas.getContext('webgl');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
}
window.addEventListener('resize', resize);
resize();

function compileShader(gl, source, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

const vertSrc = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragSrc = document.getElementById('fragShader').textContent;

const vertShader = compileShader(gl, vertSrc, gl.VERTEX_SHADER);
const fragShader = compileShader(gl, fragSrc, gl.FRAGMENT_SHADER);

const program = gl.createProgram();
gl.attachShader(program, vertShader);
gl.attachShader(program, fragShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(program));
}
gl.useProgram(program);

const posLoc = gl.getAttribLocation(program, 'position');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
  -1, -1, 1, -1, -1, 1,
  -1, 1, 1, -1, 1, 1,
]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(posLoc);
gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

const iResolution = gl.getUniformLocation(program, 'iResolution');
const iTime = gl.getUniformLocation(program, 'iTime');

function render(time) {
  gl.uniform2f(iResolution, canvas.width, canvas.height);
  gl.uniform1f(iTime, time * 0.001);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
  


            function selectPlan(plan) {
                const data = {
                    creator: {
                        title: "The Deep Audit",
                        price: "$997",
                        desc: "A complete forensic analysis of your Klaviyo account to find lost revenue opportunities.",
                        features: ["50-Point Account Inspection", "Flow Gap Analysis", "Deliverability Check", "Strategy Roadmap PDF"]
                    },
                    pro: {
                        title: "Growth Retainer",
                        price: "$3,500",
                        desc: "Monthly management of your core flows and weekly campaigns to drive consistent revenue.",
                        features: ["4 Core Flows Optimized", "4 Campaigns Per Month", "Weekly Reporting", "A/B Testing"]
                    },
                    agency: {
                        title: "Full Scaling",
                        price: "$6,500",
                        desc: "Aggressive scaling strategy for brands doing $100k+/mo. Full team management.",
                        features: ["Unlimited Flow Optimization", "12 Campaigns Per Month", "SMS Marketing Included", "Dedicated Slack Channel"]
                    }
                };

                const selected = data[plan];
                document.getElementById('plan-title').textContent = selected.title;
                document.getElementById('plan-price').textContent = selected.price;
                document.getElementById('plan-desc').textContent = selected.desc;
                document.getElementById('plan-price').nextElementSibling.textContent = plan === 'creator' ? '/one-time' : '/month';

                const featureContainer = document.getElementById('plan-features');
                featureContainer.innerHTML = selected.features.map(f => `
             <div class="flex items-center gap-4 group/item">
                  <div class="flex-none transition-transform group-hover/item:translate-x-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span class="text-white text-sm font-sans">
                    ${f}
                  </span>
                </div>
          `).join('');

                const buttons = ['creator', 'pro', 'agency'];
                buttons.forEach(b => {
                    const btn = document.getElementById('btn-' + b);
                    const path = document.getElementById('path-' + b);
                    const icon = btn.querySelector('i');

                    if (b === plan) {
                        btn.className = "relative w-full flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] transition-transform hover:scale-[1.02] group border-t border-white/20";
                        if(icon) {
                            icon.classList.add('fill-white/20');
                            icon.classList.remove('text-neutral-500');
                        }
                        const dot = document.getElementById('active-dot');
                        btn.appendChild(dot);
                        if(path) {
                            path.setAttribute('stroke', '#f97316');
                            path.setAttribute('stroke-dasharray', '8 8');
                            path.classList.remove('opacity-20');
                            path.classList.add('animate-flow', 'shadow-[0_0_15px_rgba(249,115,22,0.5)]');
                        }
                    } else {
                        btn.className = "w-full flex items-center justify-between p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left";
                        if(icon) {
                            icon.classList.remove('fill-white/20');
                            icon.classList.add('text-neutral-500');
                        }
                        if(path) {
                            path.setAttribute('stroke', '#525252');
                            path.setAttribute('stroke-dasharray', '6 6');
                            path.classList.add('opacity-20');
                            path.classList.remove('animate-flow', 'shadow-[0_0_15px_rgba(249,115,22,0.5)]');
                        }
                    }
                });
            }
            // Initialize icons
            lucide.createIcons();
        
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 invert-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas className="absolute inset-0 -z-10" height="1024" id="shader-canvas" width="1440">


</canvas></div>

<div className="fixed inset-0 -z-50 pointer-events-none w-full h-full overflow-hidden">

<video autoplay="" className="absolute top-0 left-0 w-full h-full object-cover opacity-50 scale-110" loop="" muted="" playsinline="">

<source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/60"></div>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050505]/60 to-[#050505]"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-900/10 blur-[120px] rounded-full mix-blend-screen" style={{}}></div>
</div>

<nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-white/5 animate-entry delay-75">

<div className="flex gap-2 items-center">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 backdrop-blur-md" style={{}}>
<svg className="lucide lucide-tornado w-5 h-5 text-orange-500" data-lucide="tornado" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4H3"></path><path d="M18 8H6"></path><path d="M19 12H9"></path><path d="M16 16h-6"></path><path d="M11 20H9"></path></svg>
</div>
<span className="text-xl text-white font-sans font-semibold tracking-tight">
                Tornado
            </span>
</div>

<div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1 backdrop-blur-md">
<a className="px-4 py-1.5 bg-neutral-800/80 rounded-full text-xs text-white flex items-center gap-2 border border-white/5 shadow-inner font-sans" href="#" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500" style={{}}></span>
                Services
            </a>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans" href="#" style={{}}>
                Case Studies
            </a>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans" href="#" style={{}}>
                Process
            </a>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-sans" href="#" style={{}}>
                Pricing
            </a>
</div>

<a className="hidden md:block hover:brightness-110 transition-all text-sm text-white bg-gradient-to-b from-orange-400 to-orange-600 border-white/20 rounded-full border-t pt-2 pr-5 pb-2 pl-5 shadow-[0_0_15px_-3px_rgba(249,115,22,0.4)] font-sans font-medium" href="#" style={{}}>
            Book an Audit
        </a>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-20 pl-6 relative items-center">

<div className="lg:col-span-7 flex flex-col relative items-start z-10">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-xs text-neutral-300 animate-entry delay-100 shadow-lg" style={{}}>
<svg className="lucide lucide-zap w-3.5 h-3.5 text-orange-400 fill-orange-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-sans font-medium">Klaviyo Elite Partners</span>
</div>

<h1 className="lg:text-[76px] leading-[1.05] animate-entry delay-150 text-5xl font-light text-white tracking-tight font-bricolage mb-6 drop-shadow-2xl">
                EMAIL FLOWS
                <span className="inline-flex align-middle mx-1"></span>
                THAT
                <br/>
                PRINT REVENUE
                <br/>
                ON AUTOPILOT.
            </h1>

<p className="text-lg text-neutral-300 max-w-xl mb-10 leading-relaxed font-sans animate-entry delay-200 drop-shadow-lg" style={{}}>
                We design high-converting Klaviyo flows and campaigns for 7-figure e-commerce brands. Stop leaving revenue on the table.
            </p>

<div className="flex flex-wrap gap-4 mb-20 items-center animate-entry delay-300">
<button className="group relative flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-t from-yellow-200 via-orange-400 to-orange-500 px-8 py-3 text-lg font-semibold text-[#2c1306] shadow-[0_0_40px_-5px_rgba(249,115,22,0.6)] ring-1 ring-inset ring-white/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-5px_rgba(249,115,22,0.8)] font-sans" style={{}}>
<span className="font-sans">Get Your ROI Audit</span>
</button>
<button className="px-8 py-3 rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-sm text-lg hover:bg-white/20 transition-colors font-sans font-medium">
                    View Results
                </button>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end lg:mt-0 animate-entry delay-500 z-10 mt-0 relative justify-center">

<div className="relative w-[360px] bg-black/20 backdrop-blur-3xl rounded-[40px] p-8 border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden transition-all hover:scale-[1.01] duration-500" style={{}}>

<div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen" style={{}}></div>
<div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen" style={{}}></div>

<div className="flex justify-between items-start mb-8 relative z-10">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" style={{}}></span>
</span>
<span className="text-[11px] font-medium uppercase tracking-wider text-white/60 font-sans" style={{}}>Live Revenue</span>
</div>
<h3 className="text-xl text-white font-medium tracking-tight font-sans">Attributed Revenue</h3>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md transition-colors hover:bg-white/10 cursor-pointer" style={{}}>
<svg className="lucide lucide-more-horizontal text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>

<div className="mb-10 relative z-10">
<div className="flex items-end gap-3 mb-2">
<span className="text-5xl font-light text-white tracking-tight font-sans">$142,390</span>
</div>
<p className="text-[13px] text-neutral-400 font-sans">Last 30 days via Klaviyo flows.</p>
</div>

<div className="space-y-5 mb-8 relative z-10">

<div className="flex items-center gap-4 group">
<div className="w-[42px] h-[42px] rounded-[10px] bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-shopping-bag text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div className="flex-1 min-w-0 border-b border-white/5 pb-2">
<div className="flex justify-between items-center mb-1.5">
<span className="text-[15px] text-white font-medium truncate font-sans">Abandoned Cart</span>
<span className="text-[15px] text-white font-medium font-sans">$45k</span>
</div>

<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full w-[70%]" style={{}}></div>
</div>
</div>
</div>

<div className="flex items-center gap-4 group">
<div className="w-[42px] h-[42px] rounded-[10px] bg-neutral-800 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-mail-open text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
</div>
<div className="flex-1 min-w-0 border-b border-white/5 pb-2">
<div className="flex justify-between items-center mb-1.5">
<span className="text-[15px] text-white font-medium truncate font-sans">Welcome Series</span>
<span className="text-[15px] text-white font-medium font-sans">$28k</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-neutral-500 rounded-full w-[45%]" style={{}}></div>
</div>
</div>
</div>
</div>

<button className="w-full bg-white text-black font-medium text-[15px] py-3.5 rounded-full hover:bg-neutral-100 transition-colors shadow-lg active:scale-95 duration-200 mb-6 font-sans tracking-tight" style={{}}>
            View Dashboard
        </button>

<div className="grid grid-cols-2 gap-3">
<div className="bg-white/5 rounded-2xl p-3 border border-white/5 backdrop-blur-sm">
<span className="block text-[10px] text-neutral-400 uppercase tracking-wide font-medium mb-1 font-sans">Open Rate</span>
<span className="text-[16px] text-white font-medium font-sans">42.8%</span>
</div>
<div className="bg-white/5 rounded-2xl p-3 border border-white/5 backdrop-blur-sm">
<span className="block text-[10px] text-neutral-400 uppercase tracking-wide font-medium mb-1 font-sans">CTR</span>
<span className="text-[16px] text-white font-medium font-sans">3.2%</span>
</div>
</div>
</div>
</div>
</main>

<section className="-mt-4 lg:-mt-8 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto pt-0 px-2.5 lg:px-0 pb-24 relative z-10 animate">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-orange-600/20 blur-[100px] rounded-full z-0" style={{}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-neutral-900/80 rounded-2xl ring-white/10 ring-1 relative shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] backdrop-blur-lg animate" style={{}}>

<div className="-top-10 -right-10 bg-orange-500/10 w-56 h-56 rounded-full absolute blur-3xl" style={{}}></div>

<div className="flex sm:px-6 bg-white/5 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3 text-sm text-neutral-400" style={{}}>
<a className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-sans font-medium" href="#" style={{}}>
<div className="w-4 h-4 rounded bg-orange-500 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-tornado w-2.5 h-2.5 text-black" data-lucide="tornado" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4H3"></path><path d="M18 8H6"></path><path d="M19 12H9"></path><path d="M16 16h-6"></path><path d="M11 20H9"></path></svg>
</div>
                            Tornado OS
                        </a>
<span className="opacity-40 font-sans">/</span>
<span className="text-white font-sans">Client: Apex Gear</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 text-green-400 ring-1 ring-green-500/20 px-2 py-0.5 text-[11px] font-sans font-medium" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{}}></span>
                            Live
                        </span>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-black/40 ring-1 ring-white/10 rounded-lg pl-2.5 pr-2.5 h-8">
<svg className="lucide lucide-search w-3.5 h-3.5 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none w-48 font-sans" placeholder="Search flows..." type="text"/>
</div>
</div>
</div>

<div className="grid grid-cols-12">

<aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-white/5 border-white/5 border-r">
<div className="px-4 py-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 text-white shadow-inner text-xs font-medium transition-all px-3 py-2 border border-white/10 font-sans">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                                New Campaign
                            </button>
</div>
<nav className="px-3 pb-4 space-y-6 overflow-y-auto">
<div>
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans font-semibold tracking-wider" style={{}}>
                                    Strategy
                                </div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-white bg-white/5 ring-1 ring-white/10 shadow-inner font-sans font-medium" href="#">
<svg className="lucide lucide-git-branch w-4 h-4 text-orange-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                                            Flows
                                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-megaphone w-4 h-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
                                            Campaigns
                                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                                            Segments
                                        </a>
</li>
</ul>
</div>
<div>
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-sans font-semibold tracking-wider" style={{}}>
                                    Analytics
                                </div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
                                            Performance
                                        </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors font-sans font-medium" href="#" style={{}}>
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                                            Live View
                                        </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px] bg-black/20 relative overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute top-0 left-0 right-0 p-6 z-10 flex justify-between items-start pointer-events-none">
<div>
<h3 className="text-xl font-medium text-white font-bricolage tracking-tight">Post-Purchase: VIP Upsell</h3>
<p className="text-xs text-neutral-500 font-sans mt-1" style={{}}>Logic: High AOV &gt; $150</p>
</div>
<div className="pointer-events-auto">
<button className="bg-orange-600 hover:bg-orange-500 text-white text-xs px-3 py-1.5 rounded-md font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.4)]" style={{}}>
                                    Edit Flow
                                </button>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center pt-12 gap-8 scale-90 sm:scale-100">

<div className="w-64 bg-[#111] border border-white/10 rounded-xl p-4 shadow-xl relative group hover:border-orange-500/50 transition-colors" style={{}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111] border border-white/10 px-2 py-0.5 rounded text-[10px] text-neutral-400 uppercase tracking-wider font-semibold" style={{}}>Trigger</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-900/30 text-green-400 flex items-center justify-center border border-green-500/20" style={{}}>
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div>
<div className="text-sm text-white font-medium">Order Placed</div>
<div className="text-[10px] text-neutral-500" style={{}}>Value &gt; $150</div>
</div>
</div>

<div className="absolute -bottom-8 left-1/2 w-px h-8 bg-white/10"></div>
</div>

<div className="w-64 bg-[#111] border border-white/10 rounded-xl p-3 shadow-xl relative flex items-center gap-3 hover:border-white/30 transition-colors">
<div className="w-8 h-8 rounded-lg bg-neutral-800 text-neutral-400 flex items-center justify-center border border-white/5" style={{}}>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<div className="text-sm text-white font-medium">Wait 4 Hours</div>
</div>

<div className="absolute -bottom-8 left-1/2 w-px h-8 bg-white/10"></div>
</div>

<div className="w-64 bg-[#111] border border-orange-500/30 rounded-xl p-4 shadow-[0_0_30px_-10px_rgba(249,115,22,0.15)] relative" style={{}}>
<div className="absolute -left-14 top-1/2 -translate-y-1/2 text-[10px] text-green-400 font-mono bg-green-500/10 px-2 py-1 rounded border border-green-500/20" style={{}}>
                                    Open: 62%
                                </div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<div className="text-sm text-white font-medium">VIP Welcome</div>
<div className="text-[10px] text-neutral-500" style={{}}>"Thanks for joining..."</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 lg:col-span-3 bg-white/5 border-l border-white/5 min-h-[520px]">
<div className="px-4 sm:px-5 py-4 space-y-4">

<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-2 uppercase font-sans font-semibold tracking-wider" style={{}}>
                                    Flow Analytics
                                </div>
<div className="flex items-baseline gap-1 mb-3">
<span className="text-2xl text-white font-bricolage font-light">$12,402</span>
<span className="text-[10px] text-neutral-500" style={{}}>/mo</span>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-400" style={{}}>Sent</span>
<span className="text-white">1,240</span>
</div>
<div className="w-full bg-white/5 h-1 rounded-full">
<div className="bg-neutral-600 h-1 rounded-full w-full" style={{}}></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-400" style={{}}>Open Rate</span>
<span className="text-green-400" style={{}}>58%</span>
</div>
<div className="w-full bg-white/5 h-1 rounded-full">
<div className="bg-green-500 h-1 rounded-full w-[58%]" style={{}}></div>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-400" style={{}}>Click Rate</span>
<span className="text-blue-400" style={{}}>4.2%</span>
</div>
<div className="w-full bg-white/5 h-1 rounded-full">
<div className="bg-blue-500 h-1 rounded-full w-[12%]" style={{}}></div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-3 uppercase font-sans font-semibold tracking-wider" style={{}}>
                                    Smart Sending
                                </div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300 font-sans" style={{}}>
                                            Exclude Unengaged
                                        </span>
<button aria-pressed="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-orange-500/20 ring-1 ring-orange-500/30" style={{}}>
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-orange-400 translate-x-4 transition-transform shadow-sm" style={{}}></span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300 font-sans" style={{}}>
                                            A/B Test Subject
                                        </span>
<button aria-pressed="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-orange-500/20 ring-1 ring-orange-500/30" style={{}}>
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-orange-400 translate-x-4 transition-transform shadow-sm" style={{}}></span>
</button>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative mx-2.5 lg:mx-auto bg-black/40 backdrop-blur-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="flex mb-0 items-center justify-between">
<div className="flex flex-col text-left">
<div className="flex flex-col lg:flex-row gap-4 mb-3 gap-x-4 gap-y-4 items-start lg:items-center">
<span className="text-8xl text-white/5 font-bricolage font-light tracking-tight">
                        01.
                    </span>
<div className="space-y-2">
<h2 className="md:text-5xl text-4xl text-white font-bricolage font-light tracking-tight">
                            The Revenue Engine
                        </h2>
<p className="leading-relaxed text-lg text-neutral-400 max-w-2xl font-sans" style={{}}>
                            We don't just send emails. We build comprehensive retention systems that capture lost sales, increase LTV, and build brand loyalty.
                        </p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12 gap-x-8 gap-y-8">

<div className="md:p-10 flex flex-col overflow-hidden group/card hover:border-white/20 transition-colors duration-500 bg-[#0A0A0A]/80 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover/card:opacity-100" style={{}}></div>

<div className="grid grid-cols-3 gap-4 mb-12 relative z-10">

<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300" style={{}}>
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
                            Segmentation
                        </span>
</div>

<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300" style={{}}>
<svg className="lucide lucide-pen-tool w-6 h-6" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
                            Custom Design
                        </span>
</div>

<div className="flex flex-col items-center text-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300" style={{}}>
<svg className="lucide lucide-refresh-cw w-6 h-6" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<span className="text-xs text-neutral-500 leading-tight group-hover:text-neutral-300 transition-colors font-sans" style={{}}>
                            Automation
                        </span>
</div>
</div>

<div className="mb-6 relative z-10">
<div className="grid grid-cols-4 text-xs font-medium text-neutral-500 uppercase tracking-wide mb-4 px-2" style={{}}>
<div className="col-span-2 font-sans">Campaign</div>
<div className="text-right font-sans">Sent</div>
<div className="text-right font-sans">Rev</div>
</div>

<div className="grid grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 hover:bg-white/[0.02] transition-colors rounded-lg" style={{}}>
<div className="col-span-2 text-neutral-300 flex items-center gap-2 font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600" style={{}}></span>
                            Summer_Sale_01
                        </div>
<div className="text-right font-sans">45k</div>
<div className="text-right text-neutral-300 font-sans font-mono" style={{}}>$12k</div>
</div>

<div className="grid grid-cols-4 text-sm text-neutral-400 py-4 border-t border-white/5 px-2 relative overflow-hidden rounded-lg group" style={{}}>
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" style={{}}></div>
<div className="col-span-2 text-white flex items-center gap-2 relative z-10 font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" style={{}}></span>
</span>
                            BFCM_Vip_Early
                        </div>
<div className="text-right text-white relative z-10 font-sans">
                            12k
                        </div>
<div className="text-right text-orange-400 relative z-10 font-sans font-mono font-medium" style={{}}>
                            $48k
                        </div>
</div>
</div>
</div>

<div className="overflow-hidden min-h-[450px] flex items-center justify-center bg-[#0A0A0A]/80 border-white/10 border rounded-3xl relative group/orbit">

<div className="opacity-80 absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.15)_0%,_rgba(0,0,0,0)_70%)]"></div>

<div className="flex md:scale-100 transition-transform duration-500 w-full h-full relative scale-[0.65] items-center justify-center">

<div className="absolute flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[180px] h-[180px] rounded-full border border-orange-500/30" style={{}}></div>
</div>
<div className="absolute flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[340px] h-[340px] rounded-full border border-orange-500/20" style={{}}></div>
</div>
<div className="absolute flex items-center justify-center pointer-events-none opacity-10">
<div className="w-[500px] h-[500px] rounded-full border border-orange-500/10" style={{}}></div>
</div>

<div className="relative w-24 h-24 rounded-full bg-[#120a05] border border-orange-500/50 flex items-center justify-center shadow-[0_0_50px_-5px_rgba(249,115,22,0.5)] z-20" style={{}}>
<div className="animate-ping opacity-20 border-orange-500 border rounded-full absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
<svg className="lucide lucide-tornado w-12 h-12 text-orange-500 z-30 relative" data-lucide="tornado" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4H3"></path><path d="M18 8H6"></path><path d="M19 12H9"></path><path d="M16 16h-6"></path><path d="M11 20H9"></path></svg>
</div>

<div className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite]">

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(0deg) translateY(-170px) rotate(0deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-green-500/50 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]" style={{}}>
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(72deg) translateY(-170px) rotate(-72deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-purple-500/50 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]" style={{}}>
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(144deg) translateY(-170px) rotate(-144deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-orange-500/50 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]" style={{}}>
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(216deg) translateY(-170px) rotate(-216deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-blue-500/50 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]" style={{}}>
<svg className="lucide lucide-package w-5 h-5" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10" style={{transform: 'translate(-50%, -50%) rotate(288deg) translateY(-170px) rotate(-288deg)'}}>
<div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-yellow-500/50 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]" style={{}}>
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12">

<div className="flex flex-col items-start group">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300" style={{}}></div>
<svg className="lucide lucide-scan-line w-6 h-6 text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
<h3 className="text-xl text-white mb-3 font-sans font-medium">
                        Flow Audits
                    </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-sans" style={{}}>
                        We identify leaks in your funnel. From Welcome Series to Win-Backs, we optimize every touchpoint.
                    </p>
</div>

<div className="flex flex-col items-start group">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300" style={{}}></div>
<svg className="lucide lucide-palette w-6 h-6 text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<h3 className="text-xl text-white mb-3 font-sans font-medium">
                        On-Brand Design
                    </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-sans" style={{}}>
                        Our emails don't look like templates. They are custom-coded extensions of your brand identity.
                    </p>
</div>

<div className="flex flex-col group items-start">
<div className="w-8 h-px bg-neutral-700 mb-6 group-hover:bg-orange-500 transition-colors duration-300" style={{}}></div>
<svg className="lucide lucide-trending-up w-6 h-6 text-neutral-400 mb-5 group-hover:text-orange-500 transition-colors" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="text-xl text-white mb-3 font-sans font-medium">
                        Predictive Analytics
                    </h3>
<p className="text-sm text-neutral-400 leading-relaxed font-sans" style={{}}>
                        We use data to predict customer lifetime value and trigger campaigns before they churn.
                    </p>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-12 pr-10 pb-12 pl-10 relative mx-2.5 lg:mx-auto bg-black/40 backdrop-blur-md" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 relative gap-x-12 gap-y-12 items-center">
<style>
                @keyframes flow {
                    from { stroke-dashoffset: 24; }
                    to { stroke-dashoffset: 0; }
                }
                .animate-flow {
                    animation: flow 1s linear infinite;
                }
            </style>

<div className="lg:col-span-5 flex flex-col justify-center">

<div className="flex gap-4 mb-3 gap-x-4 gap-y-4 items-center">
<span className="text-6xl text-white/5 font-bricolage font-light tracking-tight">
                        02.
                    </span>
<div className="space-y-2">
<h2 className="md:text-4xl text-4xl text-white font-bricolage font-light tracking-tight">
                            Partner with Tornado
                        </h2>
</div>
</div>

<p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-lg font-sans" style={{}}>
                    Choose how you want to scale. From one-time audits to full-service retainer management.
                </p>

<div className="flex flex-col gap-4 w-full relative z-10 max-w-md">

<button className="relative w-full flex items-center justify-between p-5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] transition-transform hover:scale-[1.02] group border-t border-white/20" id="btn-creator" onclick="selectPlan('creator')" style={{}}>
<span className="text-xl font-sans font-medium">The Deep Audit</span>
<svg className="lucide lucide-search w-5 h-5 fill-white/20" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>

<div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full translate-x-1/2 ring-4 ring-[#050505] transition-all duration-300" id="active-dot" style={{}}></div>
</button>

<button className="w-full flex items-center justify-between p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left" id="btn-pro" onclick="selectPlan('pro')" style={{}}>
<span className="text-xl group-hover:text-white font-sans font-medium">Growth Retainer</span>
<svg className="lucide lucide-rocket w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</button>

<button className="w-full flex items-center justify-between p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left" id="btn-agency" onclick="selectPlan('agency')" style={{}}>
<span className="text-xl group-hover:text-white font-sans font-medium">
                            Full Scaling
                        </span>
<svg className="lucide lucide-globe w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
</div>
</div>

<div className="hidden lg:block lg:col-span-2 h-[400px] z-10 relative translate-y-16 gap-x-12 gap-y-12">
<svg className="w-full h-full absolute inset-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 200 400">

<path className="animate-flow shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300" d="M-50 160 C 80 160, 80 200, 180 200 L 240 200" fill="none" id="path-creator" stroke="#f97316" stroke-dasharray="8 8" strokeWidth="2"></path>

<path className="opacity-20 transition-all duration-300" d="M-50 250 C 80 250, 80 200, 180 200 L 240 200" fill="none" id="path-pro" stroke="#525252" stroke-dasharray="6 6" strokeWidth="2"></path>

<path className="opacity-20 transition-all duration-300" d="M-50 340 C 80 340, 80 200, 180 200 L 240 200" fill="none" id="path-agency" stroke="#525252" stroke-dasharray="6 6" strokeWidth="2"></path>

<path d="M230 195 L 240 200 L 230 205" fill="none" stroke="#f97316" strokeWidth="2"></path>
<circle cx="240" cy="200" fill="#f97316" r="2"></circle>
</svg>
</div>

<div className="lg:col-span-5 relative h-full">
<div className="relative w-full h-full bg-neutral-900/95 rounded-[32px] p-[2px] electric-card overflow-hidden group backdrop-blur-xl" style={{}}>

<div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent opacity-80 z-0" style={{}}></div>

<div className="relative z-10 bg-[#0A0A0A]/95 rounded-[30px] h-full p-8 lg:p-10 flex flex-col overflow-hidden">

<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" style={{}}></div>

<div className="flex items-center justify-between mb-2 relative z-10">
<h3 className="text-3xl text-white font-bricolage font-light tracking-tight" id="plan-title">
                                The Deep Audit
                            </h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 font-bricolage font-light tracking-tight" id="plan-price" style={{}}>
                                    $997
                                </span>
<span className="text-sm text-orange-500/80 font-sans" style={{}}>
                                    /one-time
                                </span>
</div>
</div>

<p className="text-neutral-400 mt-6 mb-8 text-sm leading-relaxed border-b border-white/10 pb-8 relative z-10 font-sans" id="plan-desc" style={{}}>
                            A complete forensic analysis of your Klaviyo account to find lost revenue opportunities.
                        </p>

<div className="space-y-6 mb-10 relative z-10 flex-grow font-sans" id="plan-features">
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="lucide lucide-check w-3 h-3 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-sm font-sans">50-Point Account Inspection</span>
</div>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="lucide lucide-check w-3 h-3 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-sm font-sans">
                                    Flow Gap Analysis
                                </span>
</div>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="lucide lucide-check w-3 h-3 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-sm font-sans">
                                    Deliverability Check
                                </span>
</div>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="lucide lucide-check w-3 h-3 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-white text-sm font-sans">
                                    Strategy Roadmap PDF
                                </span>
</div>
</div>
<button className="w-full py-4 rounded-xl bg-white text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors mt-auto font-sans relative z-10" style={{}}>
                            Book Audit
                        </button>
</div>
</div>
</div>
</div>

</section>

    </>
  );
}
