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



            var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
          


      // Initialize Lucide Icons
      lucide.createIcons();
    


      (function() {
        const canvas = document.getElementById('liquid-metal');
        if(!canvas) return;
        const gl = canvas.getContext('webgl');
        if (!gl) return;
        const vs = `attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}`;
        const fs = `
          precision highp float;
          uniform vec2 r;
          uniform float t;
          mat2 rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
          void main(){
            vec2 uv = gl_FragCoord.xy / r.xy;
            uv.x *= r.x / r.y;
            vec2 p = uv * 3.0;
            for(float i=1.0;i<6.0;i++){
                p *= rot(t*0.05);
                p.x += 0.5/i * sin(i*2.0*p.y + t*0.2);
                p.y += 0.5/i * cos(i*1.5*p.x + t*0.2);
            }
            float v = sin(p.x+p.y)*0.5+0.5;
            vec3 c = mix(vec3(0.01,0.02,0.05), vec3(0.03,0.1,0.3), smoothstep(0.1,0.5,v));
            c = mix(c, vec3(0.1,0.3,0.7), smoothstep(0.5,0.8,v));
            c = mix(c, vec3(0.4,0.7,1.0), smoothstep(0.8,0.95,v));
            c = mix(c, vec3(0.8,0.9,1.0), smoothstep(0.95,1.0,v));
            gl_FragColor = vec4(c, 1.0);
          }
        `;
        function cS(src, type) {
          const s = gl.createShader(type);
          gl.shaderSource(s, src);
          gl.compileShader(s);
          return s;
        }
        const p = gl.createProgram();
        gl.attachShader(p, cS(vs, gl.VERTEX_SHADER));
        gl.attachShader(p, cS(fs, gl.FRAGMENT_SHADER));
        gl.linkProgram(p);
        gl.useProgram(p);
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
        const pos = gl.getAttribLocation(p, 'p');
        gl.enableVertexAttribArray(pos);
        gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
        const locR = gl.getUniformLocation(p, 'r');
        const locT = gl.getUniformLocation(p, 't');
        function resize() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          gl.viewport(0, 0, canvas.width, canvas.height);
          gl.uniform2f(locR, canvas.width, canvas.height);
        }
        window.addEventListener('resize', resize);
        resize();
        let start = performance.now();
        function draw() {
          gl.uniform1f(locT, (performance.now() - start) * 0.001);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
          requestAnimationFrame(draw);
        }
        draw();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83bda1c6-785c-49c3-aedc-459c432fc79e_3840w.png?w=800&amp'}}></div>

<div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#020617]">
<canvas className="w-full h-full pointer-events-none" height="767" id="liquid-metal" width="1440"></canvas>
<div className="absolute inset-0 bg-[#020617]/35 backdrop-blur-[60px] pointer-events-none"></div>
</div>

<div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] blur-[150px] rounded-full mix-blend-screen bg-blue-900/20"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[150px] rounded-full mix-blend-screen bg-indigo-900/15"></div>
<div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] blur-[120px] rounded-full mix-blend-screen bg-blue-700/10"></div>
</div>

<nav className="fixed border-white/[0.04] bg-[#020617]/70 w-full z-50 border-b top-0 backdrop-blur-xl">
<div className="lg:px-8 flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group transition-colors text-2xl font-semibold tracking-tight opacity-100" href="#">
<img alt="FlowingSea AI Logo" className="h-10 md:h-12 w-auto object-contain transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83bda1c6-785c-49c3-aedc-459c432fc79e_320w.png"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300/50 to-white group-hover:text-white transition-colors">
            FlowingSea AI
          </span>
</a>
<div className="hidden md:flex items-center gap-10 text-[15px] font-medium">
<a className="transition-colors text-slate-400 hover:text-white" href="#solutions">
            Solutions
          </a>
<a className="transition-colors text-slate-400 hover:text-white" href="#about">
            About
          </a>
<a className="transition-colors text-slate-400 hover:text-white" href="#contact">
            Contact
          </a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-11 px-7 rounded-full text-[15px] font-semibold border border-blue-500/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all bg-blue-600/20 hover:bg-blue-600/40 hover:border-blue-400/50 text-blue-50" href="#contact">
          Start Now
        </a>
<button className="md:hidden text-slate-400 hover:text-white">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="flex-grow md:pt-48 md:pb-40 z-10 pt-40 pb-32 relative">
<div className="lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">

<div className="z-10 relative">
<h1 className="md:text-[5.5rem] leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
            Reclaim Time.
            <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
              Build Better Systems.
            </span>
<br/>
            Drive Stronger Results.
          </h1>
<p className="md:text-xl leading-relaxed text-lg font-medium max-w-lg mb-10 text-slate-400">
            We don't just talk AI. We deliver it. We help companies identify AI
            opportunities that will actually transform their business, then we
            build it, deploy it, and train your team to use it.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full text-[#030308] text-base font-semibold transition-colors bg-white hover:bg-slate-200" href="#contact">
              Book an Automation Audit
            </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white/[0.05] text-base font-medium border border-white/[0.08] hover:bg-white/[0.1] transition-colors gap-2 group text-white" href="#solutions">
              See Capabilities
              <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="relative h-[400px] md:h-[600px] w-full hidden lg:flex items-center justify-center pointer-events-none">

<div className="absolute w-[600px] h-[600px] blur-[100px] rounded-full bg-blue-600/10"></div>

<div className="relative w-[480px] h-[480px] flex items-center justify-center">

<div className="absolute z-20 w-24 h-24 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] border backdrop-blur-md from-blue-600/20 to-indigo-600/20 border-blue-400/30">
<i className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] text-white" data-lucide="bot" strokeWidth="1.5"></i>
</div>

<div className="absolute w-[220px] h-[220px] rounded-full border border-blue-500/[0.15]"></div>
<div className="absolute w-[340px] h-[340px] rounded-full border-2 border-white/[0.03] border-dashed"></div>
<div className="absolute w-[460px] h-[460px] rounded-full border border-white/[0.02]"></div>

<div className="absolute w-[460px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
<div className="absolute h-[460px] w-[1px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>


<div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#0a0a14] border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] z-10 backdrop-blur-md">
<i className="w-5 h-5 text-blue-400" data-lucide="database" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#0a0a14] border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] z-10 backdrop-blur-md">
<i className="w-5 h-5 text-blue-400" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#0a0a14] border border-indigo-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)] z-10 backdrop-blur-md">
<i className="w-5 h-5 text-indigo-400" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-3">
<div className="w-12 h-12 rounded-full bg-[#0a0a14] border border-indigo-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)] z-10 backdrop-blur-md">
<i className="w-5 h-5 text-indigo-400" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute w-7 h-7 rounded-lg bg-blue-500/10 border flex items-center justify-center top-[90px] right-[90px] backdrop-blur-sm rotate-12 z-10 border-blue-400/20">
<i className="w-3.5 h-3.5 text-blue-300" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="absolute w-7 h-7 rounded-lg bg-indigo-500/10 border flex items-center justify-center bottom-[90px] left-[90px] backdrop-blur-sm -rotate-12 z-10 border-indigo-400/20">
<i className="w-3.5 h-3.5 text-indigo-300" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<div className="absolute w-7 h-7 rounded-lg border flex items-center justify-center bottom-[110px] right-[70px] backdrop-blur-sm rotate-45 z-10 bg-white/5 border-white/10">
<i className="w-3.5 h-3.5 text-slate-300" data-lucide="file-text" strokeWidth="1.5"></i>
</div>

<div className="absolute w-2 h-2 rounded-full shadow-[0_0_10px_#60a5fa] top-[240px] left-[80px] bg-blue-400"></div>
<div className="absolute w-2 h-2 rounded-full shadow-[0_0_10px_#818cf8] top-[80px] left-[240px] bg-indigo-400"></div>
<div className="absolute w-1.5 h-1.5 rounded-full shadow-[0_0_10px_#93c5fd] top-[240px] right-[120px] bg-blue-300"></div>
</div>
</div>
</div>
</main>

<section className="md:py-40 border-white/[0.04] bg-gradient-to-b from-white/[0.01] to-transparent z-10 border-t pt-32 pb-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-20">
<h2 className="text-sm font-semibold tracking-wider uppercase mb-6 text-blue-400">
            Our Mission
          </h2>
<p className="md:text-5xl leading-[1.2] text-3xl font-semibold text-white tracking-tight max-w-4xl mr-auto mb-8 ml-auto">
            Realising the infinite possibilities of AI by bridging the gap
            between businesses and what’s possible.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-10 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-400" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              Save Up To 80% Of Repetitive Admin Time
            </h3>
<p className="text-lg font-medium text-slate-400">
              Replace manual tasks, repetitive follow-ups, and operational
              busywork with intelligent systems that run quietly in the
              background.
            </p>
</div>
<div className="p-10 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-indigo-400" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              Respond To New Leads In Under 60 Seconds
            </h3>
<p className="text-lg font-medium text-slate-400">
              Capture, qualify, and respond to inbound enquiries instantly so
              opportunities are not lost through delay.
            </p>
</div>
<div className="p-10 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-400" data-lucide="workflow" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">
              Turn Disconnected Tools Into One Streamlined Workflow
            </h3>
<p className="text-lg font-medium text-slate-400">
              Connect your systems, remove duplication, and create a cleaner
              operational flow across the business.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 relative z-10 border-t border-white/[0.04]" id="solutions">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full pointer-events-none bg-blue-900/10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
            Capabilities
          </h2>
<p className="text-xl max-w-2xl font-medium text-slate-400">
            Automation systems designed to remove friction, connect workflows,
            and create leverage across the business.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

<div className="md:col-span-2 lg:col-span-2 md:row-span-2 p-10 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.06] transition-all flex flex-col min-h-[360px] group">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-auto">
<i className="w-6 h-6 text-indigo-400" data-lucide="mic"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mt-12 mb-4 text-white">
              AI Voice Agents
            </h3>
<p className="text-lg font-medium text-slate-400">
              Handle outbound calls, inbound booking, qualification, and
              first-line conversations with natural AI assistants.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-400" data-lucide="magnet"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">
              Lead Follow-Up
            </h3>
<p className="text-[15px] font-medium leading-relaxed text-slate-400">
              Respond instantly, qualify leads automatically, and eliminate
              missed opportunities.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-indigo-400" data-lucide="calendar-check"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">
              Smart Scheduling
            </h3>
<p className="text-[15px] font-medium leading-relaxed text-slate-400">
              Automate bookings, confirmations, reminders, and reduce calendar
              friction.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-400" data-lucide="table-properties"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">
              CRM &amp; Data Sync
            </h3>
<p className="text-[15px] font-medium leading-relaxed text-slate-400">
              Keep Airtable, HubSpot, and internal systems perfectly connected
              and always up to date.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-400" data-lucide="settings-2"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">
              Operations &amp; Admin
            </h3>
<p className="text-[15px] font-medium leading-relaxed text-slate-400">
              Remove repetitive internal tasks and connect the tools your team
              already uses every day.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-indigo-400" data-lucide="message-square-text"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">
              Support Assistants
            </h3>
<p className="text-[15px] font-medium leading-relaxed text-slate-400">
              Deploy intelligent assistants trained on your business to resolve
              customer queries instantly.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.04] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-blue-400" data-lucide="file-text"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-white">
              Reporting &amp; Insights
            </h3>
<p className="text-[15px] font-medium leading-relaxed text-slate-400">
              Automatically generate summaries, reports, and key data insights
              without manual effort.
            </p>
</div>

<div className="md:col-span-2 lg:col-span-2 md:row-span-2 p-10 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.06] transition-all flex flex-col min-h-[360px] group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-auto">
<i className="w-6 h-6 text-blue-400" data-lucide="blocks"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight mt-12 mb-4 text-white">
              Custom Workflow Systems
            </h3>
<p className="text-lg font-medium text-slate-400">
              Bespoke automation architecture designed around the way your
              business actually operates.
            </p>
</div>
</div>
</div>
</section>


<section className="border-white/[0.04] overflow-hidden md:py-40 z-10 border-t pt-32 pb-32 relative" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[150px] rounded-full pointer-events-none mix-blend-screen bg-blue-600/15"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="md:p-20 border-white/[0.08] overflow-hidden text-center bg-gradient-to-b from-white/[0.04] to-transparent border rounded-[2rem] pt-10 pr-10 pb-10 pl-10 relative shadow-2xl backdrop-blur-2xl">

<div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent to-transparent via-blue-400/30"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
            See What Could Be Automated
          </h2>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<iframe className="" data-tally-embed-widget-initialized="1" data-tally-src="https://tally.so/embed/zxJarq?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1" frameborder="0" height="786" id="iFrameResizer0" loading="lazy" marginheight="0" marginwidth="0" scrolling="no" src="https://tally.so/embed/zxJarq?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1&amp;originPage=srcdoc" style={{overflow: 'hidden', height: '789.5px'}} title="How can we help?" width="100%"></iframe>

<p></p>

</div>
</div>
</section>































<footer className="border-white/[0.04] z-10 bg-[#030308] border-t pt-12 pb-12 relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 font-semibold tracking-tight text-white/50">
<img alt="FlowingSea AI Logo" className="h-8 md:h-10 w-auto object-contain transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83bda1c6-785c-49c3-aedc-459c432fc79e_320w.png"/>
          FlowingSea AI
        </div>
<p className="text-base font-medium text-slate-500">
          © 2026 FlowingSea Limited. All rights reserved.
        </p>
<div className="flex gap-6 text-base font-medium">
<a className="text-slate-500 transition-colors hover:text-white" href="#">
            Privacy
          </a>
<a className="text-slate-500 transition-colors hover:text-white" href="#">
            Terms
          </a>
</div>
</div>
</footer>


<div className="fixed inset-0 z-[9999] pointer-events-none border-[12px] md:border-[16px] border-[#020617] rounded-[2rem] md:rounded-[2.5rem]"></div>

    </>
  );
}
