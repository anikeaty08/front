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



window.onload = function() {
lucide.createIcons();
const canvas = document.getElementById('shader-canvas');
const gl = canvas.getContext('webgl');
function resize() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
}
resize();
window.addEventListener('resize', resize);
const vertexShaderSource = `
attribute vec2 aPosition;
void main() {
gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;
const fragmentShaderSource = `
precision highp float;
uniform float iTime;
uniform vec2 iResolution;
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
const vec4 C = vec4(0.211324865405187, 0.366025403784439,
-0.577350269189626, 0.024390243902439);
vec2 i  = floor(v + dot(v, C.yy) );
vec2 x0 = v -   i + dot(i, C.xx);
vec2 i1;
i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
vec4 x12 = x0.xyxy + C.xxzz;
x12.xy -= i1;
i = mod(i, 289.0);
vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
+ i.x + vec3(0.0, i1.x, 1.0 ));
vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
m = m*m ;
m = m*m ;
vec3 x = 2.0 * fract(p * C.www) - 1.0;
vec3 h = abs(x) - 0.5;
vec3 ox = floor(x + 0.5);
vec3 a0 = x - ox;
m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
vec3 g;
g.x  = a0.x  * x0.x  + h.x  * x0.y;
g.yz = a0.yz * x12.xz + h.yz * x12.yw;
return 130.0 * dot(m, g);
}
void main() {
vec2 uv = gl_FragCoord.xy / iResolution.xy;
uv.x *= iResolution.x/iResolution.y;
float time = iTime * 0.05;
vec3 color1 = vec3(0.05, 0.07, 0.12);
vec3 color2 = vec3(0.02, 0.02, 0.03);
float n = snoise(uv * 1.5 + vec2(time, time * 0.5));
vec3 bg = mix(color1, color2, n * 0.5 + 0.5);
float glow = 0.0;
glow += 0.02 / length(uv - vec2(0.5 + sin(time)*0.2, 0.5 + cos(time)*0.2));
gl_FragColor = vec4(bg + vec3(glow * 0.1, glow * 0.15, glow * 0.25), 1.0);
}
`;
function compileShader(type, source) {
const shader = gl.createShader(type);
gl.shaderSource(shader, source);
gl.compileShader(shader);
if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
return shader;
}
const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
const aPosition = gl.getAttribLocation(program, 'aPosition');
gl.enableVertexAttribArray(aPosition);
gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
const iTimeLoc = gl.getUniformLocation(program, 'iTime');
const iResLoc = gl.getUniformLocation(program, 'iResolution');
function render(time) {
gl.uniform1f(iTimeLoc, time * 0.001);
gl.uniform2f(iResLoc, canvas.width, canvas.height);
gl.drawArrays(gl.TRIANGLES, 0, 6);
requestAnimationFrame(render);
}
requestAnimationFrame(render);
};

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
      
<canvas height="826" id="shader-canvas" width="1440"></canvas>
<div className="min-h-screen flex flex-col w-full z-10 relative items-center justify-center py-20 px-4 sm:px-6">

<div className="w-full max-w-4xl mx-auto text-center mb-16 space-y-6">
<h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-[200] text-white">
        Strategic Growth &amp; <br/>
<span className="gradient-text font-[300]">AI Automation</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-[300] max-w-2xl mx-auto leading-relaxed">
        Choose the powerhouse solution designed to scale your operations and dominate your market.
      </p>
</div>

<div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="w-full relative group h-full">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="glass-effect relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-full transition-transform duration-500 hover:translate-y-[-4px]">
<div className="p-8 pb-6 relative">
<div className="flex items-start justify-between mb-6">
<div className="icon-circle">
<i className="text-blue-400 w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium tracking-wide">
                GROWTH SUITE
              </div>
</div>
<h3 className="text-2xl text-white font-[400] tracking-tight mb-2">Strategic Marketing</h3>
<div className="flex items-baseline mt-6">
<span className="text-4xl lg:text-5xl font-[200] text-white tracking-tighter">$1,000</span>
<span className="text-base text-slate-500 font-[300] ml-2">/mo</span>
</div>
<div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 h-24">
<p className="text-sm text-slate-300 leading-relaxed">
<span className="text-blue-300 font-medium">Focus:</span> 
                Comprehensive brand growth and market penetration.
              </p>
</div>
</div>
<div className="card-divider w-full"></div>
<div className="p-8 pt-6 flex-1">
<ul className="space-y-4">
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-blue-500/80 group-hover/item:text-blue-400" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Full-Funnel Strategy</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-blue-500/80 group-hover/item:text-blue-400" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Omnichannel Campaigns</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-blue-500/80 group-hover/item:text-blue-400" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Advanced Creative Direction</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-blue-500/80 group-hover/item:text-blue-400" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Performance &amp; ROI Analytics</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-blue-500/80 group-hover/item:text-blue-400" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Weekly Optimization Meetings</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-blue-500/80 group-hover/item:text-blue-400" data-lucide="check-circle-2" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Dedicated Marketing Specialist</span>
</li>
</ul>
</div>
<div className="p-8 pt-2">
<button className="w-full py-3.5 px-6 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black text-sm font-medium transition-all duration-300 flex items-center justify-center group/btn">
              Get Started
              <i className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="w-full relative group h-full">
<div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="glass-effect relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-full transition-transform duration-500 hover:translate-y-[-4px]">
<div className="p-8 pb-6 relative">
<div className="flex items-start justify-between mb-6">
<div className="icon-circle">
<i className="text-sky-400 w-6 h-6" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<div className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium tracking-wide">
                EFFICIENCY CORE
              </div>
</div>
<h3 className="text-2xl text-white font-[400] tracking-tight mb-2">AI Automation: Essentials</h3>
<div className="flex items-baseline mt-6">
<span className="text-4xl lg:text-5xl font-[200] text-white tracking-tighter">$1,000</span>
<span className="text-base text-slate-500 font-[300] ml-2">/mo</span>
</div>
<div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 h-24">
<p className="text-sm text-slate-300 leading-relaxed">
<span className="text-sky-300 font-medium">Focus:</span> 
                Streamlining core business processes through intelligent workflows.
              </p>
</div>
</div>
<div className="card-divider w-full"></div>
<div className="p-8 pt-6 flex-1">
<ul className="space-y-4">
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-sky-500/80 group-hover/item:text-sky-400" data-lucide="bot" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">3 Custom AI Automations</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-sky-500/80 group-hover/item:text-sky-400" data-lucide="workflow" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Standard Workflow Integration</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-sky-500/80 group-hover/item:text-sky-400" data-lucide="sliders-horizontal" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Basic Model Fine-Tuning</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-sky-500/80 group-hover/item:text-sky-400" data-lucide="clipboard-check" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Operational Efficiency Audit</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-sky-500/80 group-hover/item:text-sky-400" data-lucide="life-buoy" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Standard Technical Support</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-sky-500/80 group-hover/item:text-sky-400" data-lucide="server" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">99.9% Service Uptime</span>
</li>
</ul>
</div>
<div className="p-8 pt-2">
<button className="w-full py-3.5 px-6 rounded-xl bg-white text-black text-sm font-medium hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center justify-center group/btn">
              Get Started
              <i className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform text-black/60" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="w-full relative group h-full">
<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="glass-effect relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-full transition-transform duration-500 hover:translate-y-[-4px]">
<div className="p-8 pb-6 relative">
<div className="flex items-start justify-between mb-6">
<div className="icon-circle">
<i className="text-purple-400 w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium tracking-wide">
                ENTERPRISE SCALE
              </div>
</div>
<h3 className="text-2xl text-white font-[400] tracking-tight mb-2">AI Automation: Scale</h3>
<div className="flex items-baseline mt-6">
<span className="text-4xl lg:text-5xl font-[200] text-white tracking-tighter">$5,000</span>
<span className="text-base text-slate-500 font-[300] ml-2">/mo</span>
</div>
<div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 h-24">
<p className="text-sm text-slate-300 leading-relaxed">
<span className="text-purple-300 font-medium">Focus:</span> 
                Enterprise-grade transformation for complex, high-volume operations.
              </p>
</div>
</div>
<div className="card-divider w-full"></div>
<div className="p-8 pt-6 flex-1">
<ul className="space-y-4">
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-purple-500/80 group-hover/item:text-purple-400" data-lucide="sparkles" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">5+ Advanced AI Automations</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-purple-500/80 group-hover/item:text-purple-400" data-lucide="git-branch" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Multi-Step Logic &amp; Complex Data</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-purple-500/80 group-hover/item:text-purple-400" data-lucide="blocks" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Enterprise Integration Ecosystem</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-purple-500/80 group-hover/item:text-purple-400" data-lucide="brain-circuit" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Custom Neural Network Training</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-purple-500/80 group-hover/item:text-purple-400" data-lucide="crown" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">24/7 Priority White-Glove Support</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-purple-500/80 group-hover/item:text-purple-400" data-lucide="user-cog" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Solution Architect &amp; Monthly Reviews</span>
</li>
<li className="flex items-start feature-item group/item">
<div className="mt-1 mr-3 min-w-[20px]"><i className="w-5 h-5 text-purple-500/80 group-hover/item:text-purple-400" data-lucide="gauge" strokeWidth="1.5"></i></div>
<span className="text-sm text-slate-300 font-[300]">Ultra-Low Latency Resources</span>
</li>
</ul>
</div>
<div className="p-8 pt-2">
<button className="w-full py-3.5 px-6 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black text-sm font-medium transition-all duration-300 flex items-center justify-center group/btn">
              Contact Sales
              <i className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 flex items-center justify-center space-x-6 text-slate-500">
<div className="flex items-center text-xs">
<i className="w-3 h-3 mr-1.5 opacity-60" data-lucide="shield-check" strokeWidth="1.5"></i>
         Secure Payment
       </div>
<div className="w-1 h-1 rounded-full bg-slate-700"></div>
<div className="flex items-center text-xs">
<i className="w-3 h-3 mr-1.5 opacity-60" data-lucide="zap" strokeWidth="1.5"></i>
         Immediate Access
       </div>
</div>
</div>

    </>
  );
}
