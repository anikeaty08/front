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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#02040a',
gold: '#dea652',
goldhover: '#c89242',
card: '#0b101b',
charcoal: '#111827'
}
},
backgroundImage: {
'glow': 'radial-gradient(circle at 50% 0%, rgba(222, 166, 82, 0.08), transparent 40%)',
'card-grad': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
},
boxShadow: {
'glow': '0 0 20px -5px rgba(222, 166, 82, 0.3)',
},
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
}
}
}
}



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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas className="absolute inset-0 -z-10" height="1024" id="shader-canvas" width="1440">


</canvas></div>

<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-brand-gold/5 blur-[120px] rounded-full"></div>
</div>

<nav className="w-full max-w-[1280px] mx-auto pt-6 px-6 flex items-center justify-between z-50 relative">
<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 rounded bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 text-brand-gold">
<iconify-icon className="text-xl" icon="lucide:hard-hat"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight">Marvox<span className="text-brand-gold">Systems</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#systems">Systems</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="text-white bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-all" href="#demo">Member Login</a>
</div>
</nav>

<main className="w-full relative z-10">

<section className="md:pt-24 md:pb-32 grid lg:grid-cols-2 lg:gap-20 max-w-[1280px] mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 gap-x-12 gap-y-12 items-center">

<div className="flex flex-col items-start text-left">
<div className="inline-flex border-brand-gold/20 text-brand-gold text-xs font-medium border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
</span>
                    System Version 2.0 Now Live
                </div>
<h1 className="text-4xl md:text-6xl lg:text-[4rem] leading-[1.1] font-semibold text-white tracking-tight mb-6">
                    Complete Growth Systems For <span className="text-brand-gold">Contractors</span>
</h1>
<p className="leading-relaxed text-lg font-normal text-slate-50 max-w-xl mb-8">
                    Websites, automation, lead capture, follow-up, reviews, booking, CRM, and local SEO — all connected into one system that runs your business.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
<a className="flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-brand-goldhover transition-all shadow-glow hover:-translate-y-1" href="#demo">
                        See The System
                    </a>
<button className="flex items-center justify-center px-8 py-4 border border-slate-700 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
                        Book A Strategy Call
                    </button>
</div>

<div className="flex flex-col gap-3">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Trusted Performance</p>
<div className="flex items-center gap-6 opacity-80">
<div className="flex items-center gap-1">
<iconify-icon className="text-lg" icon="logos:google-icon"></iconify-icon>
<div className="flex text-brand-gold text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
<div className="h-4 w-px bg-slate-800"></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-lg" icon="logos:facebook"></iconify-icon>
<div className="flex text-brand-gold text-xs">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
<div className="h-4 w-px bg-slate-800"></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-brand-gold text-lg" icon="lucide:award"></iconify-icon>
<span className="text-xs text-white font-medium">Certified Partner</span>
</div>
</div>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"></div>

<div className="relative z-10 w-full max-w-md">
<img alt="Contractor using system" className="grayscale-[30%] hover:grayscale-0 transition-all duration-500 w-full h-auto object-cover border-white/10 border rounded-2xl shadow-2xl scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e42914f-d4a2-4ee7-99e3-23181f79217a_800w.png"/>

<div className="absolute -bottom-6 -left-6 bg-brand-card border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<iconify-icon className="text-xl" icon="lucide:phone-incoming"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-slate-400">New Lead</div>
<div className="text-sm font-semibold text-white">+1 (555) 293-1029</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-brand-charcoal/30 backdrop-blur-sm overflow-hidden py-12">
<div className="max-w-[1280px] mx-auto px-6 mb-8 text-center">
<h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">The proof is in the pudding — real contractors, real results</h3>
</div>

<div className="flex gap-6 overflow-x-auto pb-4 px-6 md:justify-center no-scrollbar snap-x snap-mandatory max-w-[1400px] mx-auto">

<div className="snap-center shrink-0 w-[280px] bg-brand-card border border-white/5 rounded-xl p-4 flex flex-col gap-3 group hover:border-brand-gold/30 transition-colors">
<div className="h-32 bg-slate-800 rounded-lg relative overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1621905476438-1a516815f81c?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="lucide:play"></iconify-icon>
</div>
</div>
</div>
<div>
<div className="flex text-brand-gold text-xs mb-1">★★★★★</div>
<p className="text-xs text-slate-400 line-clamp-2">"Doubled our roofing estimates in 30 days. The system just works."</p>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] bg-brand-card border border-white/5 rounded-xl p-4 flex flex-col gap-3 group hover:border-brand-gold/30 transition-colors">
<div className="h-32 bg-slate-800 rounded-lg relative overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="lucide:play"></iconify-icon>
</div>
</div>
</div>
<div>
<div className="flex text-brand-gold text-xs mb-1">★★★★★</div>
<p className="text-xs text-slate-400 line-clamp-2">"I was skeptical about 'automation' but this saves me 10 hours a week."</p>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] bg-brand-card border border-white/5 rounded-xl p-4 flex flex-col gap-3 group hover:border-brand-gold/30 transition-colors">
<div className="h-32 bg-slate-800 rounded-lg relative overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1581094794329-cd1096d7a43f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="lucide:play"></iconify-icon>
</div>
</div>
</div>
<div>
<div className="flex text-brand-gold text-xs mb-1">★★★★★</div>
<p className="text-xs text-slate-400 line-clamp-2">"Best investment for my HVAC business. The reviews tool is gold."</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 flex flex-col gap-24 md:gap-32 max-w-[1280px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-24 gap-y-24" id="systems">
<div className="text-center max-w-3xl mx-auto mb-8">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                    Simple systems that actually work
                </h2>
<p className="text-lg text-slate-400">No degrees required — just a hard hat.</p>
</div>

<div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 items-center">
<div className="order-2 lg:order-1">
<div className="w-12 h-12 bg-brand-charcoal border border-white/10 rounded-lg flex items-center justify-center text-brand-gold mb-6">
<iconify-icon className="text-2xl" icon="lucide:layout-template"></iconify-icon>
</div>
<h3 className="md:text-3xl text-2xl font-medium text-white mb-4">Contractor Website System</h3>
<p className="leading-relaxed text-slate-400 mb-8">
                        A website built to convert traffic into calls, texts, and booked jobs — not just look good.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Found on Google locally
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Review-first trust layout
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Mobile-first design
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Conversion-focused structure
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Local SEO optimized
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Fast loading
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Lead capture built-in
                        </li>
</ul>
<button className="text-brand-gold font-medium border-b border-brand-gold/30 hover:border-brand-gold pb-0.5 transition-colors">See System Demo</button>
</div>
<div className="order-1 lg:order-2 flex justify-center">

<div className="md:w-[320px] aspect-[9/19] overflow-hidden bg-[#111] w-[280px] border-[#222] border-8 rounded-[3rem] relative shadow-2xl">
<div className="flex flex-col bg-slate-900 w-full h-full absolute top-0">

<div className="flex h-16 border-white/5 border-b pr-4 pl-4 items-center justify-between">
<div className="w-4 h-4 rounded-full bg-red-500"></div>
<div className="w-20 h-2 bg-slate-700 rounded"></div>
<div className="w-6 h-6 bg-slate-700 rounded"></div>
</div>
<div className="p-4 space-y-4">
<div className="animate-pulse bg-slate-800 h-32 rounded-lg"></div>
<div className="h-4 bg-slate-800 rounded w-3/4"></div>
<div className="h-4 bg-slate-800 rounded w-1/2"></div>
<div className="h-10 bg-brand-gold rounded-lg mt-4 w-full"></div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="flex justify-center">
<div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-[#111] rounded-[3rem] border-8 border-[#222] shadow-2xl overflow-hidden">
<div className="absolute top-0 w-full h-full bg-slate-900 flex flex-col justify-center px-6 text-center">
<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
<iconify-icon className="text-3xl fill-current" icon="lucide:star"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">Review Request</h4>
<p className="text-xs text-slate-400 mb-6">How was your service with us?</p>
<div className="flex justify-center gap-2 mb-6 text-brand-gold">
<iconify-icon className="text-2xl fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-2xl fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-2xl fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-2xl fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-2xl fill-current" icon="lucide:star"></iconify-icon>
</div>
<button className="w-full py-3 bg-white text-black rounded-lg text-sm font-semibold">Submit Review</button>
</div>
</div>
</div>
<div className="">
<div className="w-12 h-12 bg-brand-charcoal border border-white/10 rounded-lg flex items-center justify-center text-brand-gold mb-6">
<iconify-icon className="text-2xl" icon="lucide:star"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Automated Review System</h3>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Turn every happy customer into a 5-star Google review automatically.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Automatic review requests
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Smart follow-ups
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> One-click reviews
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Reputation management
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Google-first reviews
                        </li>
</ul>
<button className="text-brand-gold font-medium border-b border-brand-gold/30 hover:border-brand-gold pb-0.5 transition-colors">See System Demo</button>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="w-12 h-12 bg-brand-charcoal border border-white/10 rounded-lg flex items-center justify-center text-brand-gold mb-6">
<iconify-icon className="text-2xl" icon="lucide:message-square"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Missed Call Recovery System</h3>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Never lose a lead to voicemail again. Our system texts them back instantly when you can't pick up.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Instant SMS response
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> 24/7 coverage
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Lead recovery
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Automated conversations
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Booking links
                        </li>
</ul>
<button className="text-brand-gold font-medium border-b border-brand-gold/30 hover:border-brand-gold pb-0.5 transition-colors">See System Demo</button>
</div>
<div className="order-1 lg:order-2 flex justify-center">
<div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-[#111] rounded-[3rem] border-8 border-[#222] shadow-2xl overflow-hidden">
<div className="absolute top-0 w-full h-full bg-slate-900 flex flex-col p-4 pt-10">
<div className="bg-slate-800/50 rounded-xl p-3 mb-4 max-w-[85%] self-start">
<p className="text-xs text-slate-300">Sorry I missed your call. How can we help you today?</p>
</div>
<div className="bg-brand-gold rounded-xl p-3 mb-4 max-w-[85%] self-end">
<p className="text-xs text-brand-dark font-medium">I need a quote for a roof repair.</p>
</div>
<div className="bg-slate-800/50 rounded-xl p-3 mb-4 max-w-[85%] self-start">
<p className="text-xs text-slate-300">No problem. You can book a free estimate here: <span className="text-blue-400 underline">link.com/book</span></p>
</div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="flex justify-center">
<div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-[#111] rounded-[3rem] border-8 border-[#222] shadow-2xl overflow-hidden">
<div className="absolute top-0 w-full h-full bg-slate-900 flex flex-col items-center justify-center p-6">
<div className="w-full bg-slate-800 rounded-xl p-4 border border-white/5">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon className="text-sm" icon="lucide:send"></iconify-icon>
</div>
<div className="text-xs font-medium text-white">Spring Promo Blast</div>
</div>
<div className="h-2 bg-slate-700 rounded-full w-full mb-2 overflow-hidden">
<div className="h-full bg-blue-500 w-[80%]"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-400">
<span>Sent: 450</span>
<span>Open: 68%</span>
</div>
</div>
</div>
</div>
</div>
<div>
<div className="w-12 h-12 bg-brand-charcoal border border-white/10 rounded-lg flex items-center justify-center text-brand-gold mb-6">
<iconify-icon className="text-2xl" icon="lucide:megaphone"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Customer Growth Engine</h3>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Reactivate old leads and get referrals with pre-built marketing campaigns ready to launch.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Referral campaigns
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Repeat customer campaigns
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Seasonal campaigns
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Automated outreach
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> One-click activation
                        </li>
</ul>
<button className="text-brand-gold font-medium border-b border-brand-gold/30 hover:border-brand-gold pb-0.5 transition-colors">See System Demo</button>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="w-12 h-12 bg-brand-charcoal border border-white/10 rounded-lg flex items-center justify-center text-brand-gold mb-6">
<iconify-icon className="text-2xl" icon="lucide:map-pin"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Local Lead Engine</h3>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Dominate Google Maps in your service area. Be the first option customers see.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Google Maps optimization
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Local rankings
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Organic leads
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Qualified traffic
                        </li>
<li className="flex gap-3 text-sm text-slate-300">
<iconify-icon className="text-brand-gold text-lg shrink-0" icon="lucide:check-circle-2"></iconify-icon> Long-term lead flow
                        </li>
</ul>
<button className="text-brand-gold font-medium border-b border-brand-gold/30 hover:border-brand-gold pb-0.5 transition-colors">See System Demo</button>
</div>
<div className="order-1 lg:order-2 flex justify-center">
<div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-[#111] rounded-[3rem] border-8 border-[#222] shadow-2xl overflow-hidden">
<div className="absolute top-0 w-full h-full bg-slate-900 flex flex-col pt-10 px-4">
<div className="bg-slate-800 rounded p-2 mb-2 w-full h-8 flex items-center px-3 border border-white/5">
<iconify-icon className="text-slate-500 mr-2" icon="lucide:search"></iconify-icon>
<div className="h-2 w-20 bg-slate-600 rounded"></div>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 mb-2 border border-brand-gold/30">
<div className="h-3 w-32 bg-slate-200 rounded mb-2"></div>
<div className="flex gap-1 text-brand-gold text-[10px] mb-1">★★★★★</div>
<div className="h-2 w-20 bg-slate-600 rounded"></div>
</div>
<div className="bg-slate-800/20 rounded-lg p-3 mb-2 border border-white/5">
<div className="h-3 w-24 bg-slate-600 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-700 rounded"></div>
</div>
<div className="bg-slate-800/20 rounded-lg p-3 mb-2 border border-white/5">
<div className="h-3 w-24 bg-slate-600 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-700 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 py-24 bg-brand-card/20">
<div className="max-w-[1280px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Serving all trades and more</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">

<div className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-default">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1629805492196-80415d7336e6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<span className="text-white font-semibold tracking-wide">Roofing</span>
</div>
</div>
<div className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-default">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<span className="text-white font-semibold tracking-wide">Plumbing</span>
</div>
</div>
<div className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-default">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<span className="text-white font-semibold tracking-wide">HVAC</span>
</div>
</div>
<div className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-default">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1621905476438-1a516815f81c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<span className="text-white font-semibold tracking-wide">Electrician</span>
</div>
</div>
<div className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-default">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<span className="text-white font-semibold tracking-wide">Remodeling</span>
</div>
</div>
<div className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-default">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1625722662233-03c0d8327d76?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<span className="text-white font-semibold tracking-wide">Landscaping</span>
</div>
</div>
<div className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-default">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<span className="text-white font-semibold tracking-wide">Construction</span>
</div>
</div>
<div className="group relative aspect-square bg-slate-800 rounded-xl overflow-hidden cursor-default">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1599694617757-5b23d9a16f9f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<span className="text-white font-semibold tracking-wide">Pest Control</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-[1280px] mx-auto px-6 border-b border-white/5">
<div className="text-center mb-16">
<p className="text-brand-gold font-medium mb-2">How It Works</p>
<h2 className="text-3xl font-semibold text-white">From Chaos to Control</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10 -z-10"></div>
<div className="text-center">
<div className="w-24 h-24 mx-auto bg-brand-card border border-brand-gold/20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-glow">
                        1
                    </div>
<h3 className="text-lg font-medium text-white mb-2">System Demo Call</h3>
<p className="text-slate-500 text-sm">(20 minutes)</p>
</div>
<div className="text-center">
<div className="w-24 h-24 mx-auto bg-brand-card border border-brand-gold/20 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 relative z-10 shadow-glow">
                        2
                    </div>
<h3 className="text-lg font-medium text-white mb-2">System Build</h3>
<p className="text-slate-500 text-sm">(7–10 days)</p>
</div>
<div className="text-center">
<div className="w-24 h-24 mx-auto bg-brand-gold text-brand-dark rounded-full flex items-center justify-center text-2xl font-bold mb-6 relative z-10 shadow-glow">
                        3
                    </div>
<h3 className="text-lg font-medium text-white mb-2">System Launch</h3>
<p className="text-slate-500 text-sm">(25 minutes)</p>
</div>
</div>
</section>

<section className="py-24 max-w-[1280px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white">Why contractors choose systems</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-brand-card border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-brand-gold mb-4" icon="lucide:zap"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Simple To Use</h4>
<p className="text-slate-500 text-sm">Built for guys in the field, not IT nerds.</p>
</div>

<div className="bg-brand-card border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-brand-gold mb-4" icon="lucide:dollar-sign"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Affordable</h4>
<p className="text-slate-500 text-sm">Costs less than one missed job.</p>
</div>

<div className="bg-brand-card border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-brand-gold mb-4" icon="lucide:file-x"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">No Contracts</h4>
<p className="text-slate-500 text-sm">We earn your business every month.</p>
</div>

<div className="bg-brand-card border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-brand-gold mb-4" icon="lucide:scissors"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">No Fluff</h4>
<p className="text-slate-500 text-sm">Only features that make money.</p>
</div>

<div className="bg-brand-card border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-brand-gold mb-4" icon="lucide:trending-up"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Proven Results</h4>
<p className="text-slate-500 text-sm">Systems tested on millions in revenue.</p>
</div>

<div className="bg-brand-card border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors">
<iconify-icon className="text-3xl text-brand-gold mb-4" icon="lucide:refresh-cw"></iconify-icon>
<h4 className="text-white font-medium text-lg mb-2">Constant Improvement</h4>
<p className="text-slate-500 text-sm">Updates included automatically.</p>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-brand-charcoal/30">
<div className="max-w-[1280px] mx-auto px-6 text-center">
<p className="text-sm text-slate-500 mb-8 uppercase tracking-widest">Trusted infrastructure for contractor growth</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-3xl text-white" icon="simple-icons:google"></iconify-icon>
<iconify-icon className="text-3xl text-white" icon="simple-icons:twilio"></iconify-icon>
<iconify-icon className="text-3xl text-white" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-3xl text-white" icon="simple-icons:wordpress"></iconify-icon>
<iconify-icon className="text-3xl text-white" icon="simple-icons:cloudflare"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 max-w-[800px] mx-auto px-6">
<h2 className="text-3xl font-semibold text-white text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-brand-card border border-white/5 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        When will I start seeing results?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        Many clients see an immediate uptick in lead capture within the first week of launch just from the Missed Call Text Back feature alone. SEO results typically compound over 3-6 months.
                    </div>
</details>
<details className="group bg-brand-card border border-white/5 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        How does this replace multiple tools?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        Marvox consolidates your website, CRM, email marketing, SMS marketing, review management, and calendar booking into one dashboard. You stop paying for 5 different subscriptions.
                    </div>
</details>
<details className="group bg-brand-card border border-white/5 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        What makes this different from an agency?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        Agencies charge high monthly retainers for "services". We provide a "system" you own and control, at a fraction of the cost, with no long-term contracts.
                    </div>
</details>
<details className="group bg-brand-card border border-white/5 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        Can my team use this easily?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        Yes. We have a mobile app for your team in the field. If they can send a text message, they can use Marvox.
                    </div>
</details>
<details className="group bg-brand-card border border-white/5 rounded-lg overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                        Does this replace my CRM?
                        <iconify-icon className="group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        Yes, it includes a full CRM to manage leads, pipelines, and customer data. However, if you love your current CRM, we can often integrate with it.
                    </div>
</details>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-[1280px] mx-auto bg-gradient-to-b from-brand-card to-brand-dark border border-white/10 rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Ready to install your growth system?
                    </h2>
<p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
                        See how your entire business can run from one connected system.
                    </p>
<button className="bg-brand-gold text-brand-dark font-bold text-lg px-10 py-4 rounded-lg hover:bg-brand-goldhover transition-all shadow-glow hover:-translate-y-1">
                        Book System Walkthrough
                    </button>
<p className="text-slate-600 text-xs mt-6">We don’t sell services. We install systems for contractors.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-brand-card">
<div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white opacity-50">
<iconify-icon icon="lucide:hard-hat"></iconify-icon>
<span className="font-semibold">Marvox Systems</span>
</div>
<div className="text-slate-600 text-sm">
                    © 2024 Marvox Systems. All rights reserved.
                </div>
</div>
</footer>
</main>

    </>
  );
}
