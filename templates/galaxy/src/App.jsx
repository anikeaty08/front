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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


    lucide.createIcons();

    // --- Pricing Logic ---
    const tiers = {
      nebula: {
        title: "Nebula Plan",
        price: "$0",
        capacity: "100 Stars",
        bar: "30%",
        features: ["Up to 20 Active Goals", "Basic Constellations", "Public Profile", "Standard Support"]
      },
      supernova: {
        title: "Supernova Plan",
        price: "$12",
        capacity: "Unlimited",
        bar: "100%",
        features: ["Unlimited Goals", "AI Assistant Access", "Full 3D Galaxy View", "Priority Support"]
      }
    };

    function setTier(tier) {
      const data = tiers[tier];
      
      // Update Buttons
      document.getElementById('btn-nebula').className = tier === 'nebula' 
        ? "px-6 py-2 rounded-lg text-sm font-medium transition-all text-white bg-white/10 shadow-sm border border-white/10"
        : "px-6 py-2 rounded-lg text-sm font-medium transition-all text-white/50 hover:text-white";
        
      document.getElementById('btn-supernova').className = tier === 'supernova'
        ? "px-6 py-2 rounded-lg text-sm font-medium transition-all text-white bg-white/10 shadow-sm border border-white/10"
        : "px-6 py-2 rounded-lg text-sm font-medium transition-all text-white/50 hover:text-white";

      // Update Text
      document.getElementById('tier-title').innerText = data.title;
      document.getElementById('tier-price').innerText = data.price;
      document.getElementById('capacity-text').innerText = data.capacity;
      document.getElementById('capacity-bar').style.width = data.bar;

      // Update Visuals (Switch Canvas Opacity)
      if (tier === 'nebula') {
        document.getElementById('nebula-canvas').classList.remove('opacity-0');
        document.getElementById('supernova-canvas').classList.add('opacity-0');
      } else {
        document.getElementById('nebula-canvas').classList.add('opacity-0');
        document.getElementById('supernova-canvas').classList.remove('opacity-0');
      }

      // Update Features
      const list = document.getElementById('tier-features');
      list.innerHTML = '';
      data.features.forEach(feat => {
        list.insertAdjacentHTML('beforeend', `
          <li class="flex items-center gap-3 text-sm text-white/80 animate-fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-orange-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${feat}
          </li>
        `);
      });
    }

    // --- Arcane Orb (Nebula Shader) ---
    function initNebula() {
      const canvas = document.getElementById('nebula-canvas');
      if (!canvas || !window.THREE) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const vertexShader = `void main() { gl_Position = vec4(position, 1.0); }`;
      const fragmentShader = `precision highp float;
        uniform vec2 resolution;
        uniform float time;
        uniform vec2 mouse;
        uniform float hue;
        uniform float intensity;

        vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
        }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = mod(((i.y + vec3(0.0, i1.y, 1.0)) * 34.0 + 1.0) * (i.x + vec3(0.0, i1.x, 1.0)), 289.0);
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m; m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
          float t = time * 0.2;
          float dist = length(uv);
          
          // Noise fields
          float n1 = snoise(vec2(uv.x * 1.5, uv.y * 1.5 - t));
          float n2 = snoise(vec2(uv.x * 3.0 + t, uv.y * 3.0));
          
          float nebula = n1 * 0.5 + n2 * 0.25;
          nebula = smoothstep(0.1, 0.8, nebula + 0.5 - dist * 0.5);
          
          vec3 color = hsv2rgb(vec3(0.7 + n1 * 0.1, 0.8, nebula * intensity)); // Purple/Blue hue
          
          // Star dust
          float dust = snoise(uv * 10.0 + t) * snoise(uv * 20.0 - t);
          color += vec3(smoothstep(0.6, 0.9, dust)) * 0.3;

          gl_FragColor = vec4(color, 1.0);
        }
      `;

      const uniforms = {
        resolution: { value: [canvas.clientWidth, canvas.clientHeight] },
        time: { value: 0 },
        hue: { value: 260 },
        intensity: { value: 1.2 }
      };

      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms }));
      scene.add(mesh);

      function resize() {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        uniforms.resolution.value = [canvas.clientWidth, canvas.clientHeight];
      }
      window.addEventListener('resize', resize);
      resize();

      function animate() {
        uniforms.time.value += 0.02;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
    }

    // --- Warp Tunnel (Supernova Shader) ---
    function initSupernova() {
      const canvas = document.getElementById('supernova-canvas');
      if (!canvas) return;

      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) return;

      const vsSource = `#version 300 es
        in vec2 a_position;
        void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
      `;
      const fsSource = `#version 300 es
        precision highp float;
        uniform float u_time;
        uniform vec2  u_resolution;
        out vec4 fragColor;
        
        vec3 palette(float t) {
          // Orange/Red/Gold palette for Supernova
          vec3 a = vec3(0.5, 0.5, 0.5);
          vec3 b = vec3(0.5, 0.5, 0.5);
          vec3 c = vec3(1.0, 1.0, 1.0);
          vec3 d = vec3(0.263, 0.416, 0.557); // Iridescent
          return a + b * cos(6.28318 * (c * t + d));
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
          vec2 uv0 = uv;
          vec3 finalColor = vec3(0.0);
          
          for(float i = 0.0; i < 3.0; i++) {
             uv = fract(uv * 1.5) - 0.5;
             float d = length(uv) * exp(-length(uv0));
             vec3 col = palette(length(uv0) + i*.4 + u_time*.4);
             d = sin(d*8. + u_time)/8.;
             d = abs(d);
             d = pow(0.01 / d, 1.2);
             finalColor += col * d;
          }
          
          fragColor = vec4(finalColor, 1.0);
        }
      `;

      function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error(gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      }

      const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
      const program = gl.createProgram();
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

      const vao = gl.createVertexArray();
      gl.bindVertexArray(vao);
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      const timeLoc = gl.getUniformLocation(program, "u_time");
      const resLoc = gl.getUniformLocation(program, "u_resolution");

      function resize() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
      window.addEventListener('resize', resize);
      resize();

      function render(time) {
        time *= 0.001;
        gl.useProgram(program);
        gl.bindVertexArray(vao);
        gl.uniform1f(timeLoc, time);
        gl.uniform2f(resLoc, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    }

    // Initialize Shaders
    window.addEventListener('load', () => {
      initNebula();
      initSupernova();
    });
  
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(249,115,22,0.08),rgba(0,0,0,0))]"></div>
<div className="absolute inset-0 cosmic-grid opacity-40"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#030305]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20">
<i className="w-4 h-4 text-orange-500" data-lucide="orbit"></i>
<div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md"></div>
</div>
<span className="text-sm font-semibold tracking-wide text-white font-display">
          GALAXY GOALS
        </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" href="#features">Features</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" href="#galaxy">Public Galaxy</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-white/60 hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-5 py-2 rounded-full bg-white text-black text-xs font-semibold overflow-hidden transition-all hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]" href="#">
<span className="relative z-10">Start Journey</span>
</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0 opacity-80 scale-105">
<iframe frameborder="0" height="100%" src="https://my.spline.design/blackhole-AD7AoWtwjynTFwT2zvPTjewM/" style={{pointerEvents: 'none'}} width="100%"></iframe>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#030305] via-[#030305]/20 to-transparent"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-b from-[#030305] via-transparent to-transparent h-32"></div>

<div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md mb-8 animate-fade-up opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[11px] font-semibold text-orange-200 tracking-wider uppercase">Universe v1.0 Live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[0.95] animate-fade-up delay-100 opacity-0">
        Turn ambitions<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-amber-600 text-glow">into constellations.</span>
</h1>
<p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 font-light leading-relaxed animate-fade-up delay-200 opacity-0">
        Visualize your life's goals as glowing stars. Connect them to form your personal galaxy and track your journey through the cosmos.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300 opacity-0">
<button className="h-12 px-8 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold transition-all shadow-[0_0_25px_rgba(234,88,12,0.3)] hover:shadow-[0_0_35px_rgba(234,88,12,0.5)] flex items-center gap-2 group">
<i className="w-4 h-4 group-hover:-translate-y-1 transition-transform" data-lucide="rocket"></i>
          Explore Your Galaxy
        </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors backdrop-blur-md flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i>
          Create New Goal
        </button>
</div>
</div>
</header>

<section className="relative z-20 py-24 px-6 border-t border-white/5 bg-[#030305]" id="galaxy">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Your universe, visualized.</h2>
<p className="text-white/50">Experience goal tracking in a fully interactive 3D space. Watch stars ignite as you make progress.</p>
</div>

<div className="relative rounded-xl border border-white/10 bg-[#0E0F12] shadow-2xl overflow-hidden group animate-fade-up delay-100 opacity-0">
<div className="absolute top-[-10%] left-[30%] w-[40%] h-[300px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="relative z-10 h-12 border-b border-white/5 bg-[#0E0F12] flex items-center px-4 justify-between select-none">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner"></div>
<div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-inner"></div>
<div className="w-3 h-3 rounded-full bg-[#28C840] shadow-inner"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/40 border border-white/5 text-[11px] text-white/40 font-medium">
<i className="w-3 h-3" data-lucide="layout"></i>
<span>galaxy-builder.app</span>
</div>
<div className="flex items-center gap-3">
<button className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
<button className="px-3 py-1.5 rounded bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-semibold transition-colors shadow-lg shadow-orange-900/20">
              Publish
            </button>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row h-[650px] bg-[#0E0F12] text-white overflow-hidden">

<div className="hidden md:flex w-60 flex-shrink-0 border-r border-white/5 flex-col bg-[#0E0F12]">
<div className="p-4">
<div className="text-[10px] font-bold text-white/30 mb-4 uppercase tracking-wider">Star Maps</div>
<div className="space-y-1">
<div className="flex items-center gap-2.5 px-3 py-2 rounded bg-white/5 text-white text-xs font-medium cursor-pointer border border-white/5">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="orbit"></i>
<span>Marathon</span>
</div>
<div className="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-white/5 text-white/50 hover:text-white text-xs font-medium cursor-pointer transition-colors">
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<span>Milestones</span>
</div>
<div className="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-white/5 text-white/50 hover:text-white text-xs font-medium cursor-pointer transition-colors">
<i className="w-3.5 h-3.5" data-lucide="list-todo"></i>
<span>Habits</span>
</div>
</div>
</div>
<div className="p-4 pt-0 mt-2">
<div className="text-[10px] font-bold text-white/30 mb-4 uppercase tracking-wider">Resources</div>
<div className="space-y-1">
<div className="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-white/5 text-white/50 hover:text-white text-xs font-medium cursor-pointer transition-colors">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
<span>Boosters</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#09090b] relative flex flex-col overflow-y-auto no-scrollbar">
<div className="p-8 md:p-12 pb-0">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<span className="text-xs font-medium text-orange-500">Goal · Active</span>
</div>
<h2 className="text-4xl md:text-5xl font-playfair text-white mb-10 tracking-tight leading-tight">Run your first marathon</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<div className="bg-[#18181b] border border-white/5 rounded-lg p-5 flex flex-col justify-between h-36 hover:border-white/10 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start">
<span className="text-xs text-white/40 font-medium">Distance</span>
<i className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 transition-colors" data-lucide="map"></i>
</div>
<div>
<div className="text-2xl font-semibold text-white mb-1">42.2 km</div>
<div className="text-[11px] text-orange-500 font-medium">Full Course</div>
</div>
</div>
<div className="bg-[#18181b] border border-white/5 rounded-lg p-5 flex flex-col justify-between h-36 hover:border-white/10 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start">
<span className="text-xs text-white/40 font-medium">Frequency</span>
<i className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 transition-colors" data-lucide="calendar-clock"></i>
</div>
<div>
<div className="text-2xl font-semibold text-white mb-1">Weekly</div>
<div className="text-[11px] text-white/40">4 sessions/week</div>
</div>
</div>
</div>
<div className="bg-[#18181b] border border-white/5 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4 w-full sm:w-auto">
<div className="w-10 h-10 rounded bg-[#27150a] border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
<i className="w-5 h-5" data-lucide="watch"></i>
</div>
<div>
<div className="text-sm font-semibold text-white">Sync Devices</div>
<div className="text-[11px] text-white/40">Garmin • Apple Health</div>
</div>
</div>
<button className="w-full sm:w-auto px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold rounded transition-colors shadow-[0_0_15px_rgba(234,88,12,0.2)]">
                    Sync Now
                 </button>
</div>
</div>
</div>

<div className="hidden lg:block w-72 flex-shrink-0 border-l border-white/5 bg-[#0E0F12] p-5">
<div className="mb-6">
<div className="text-[10px] font-bold text-white/30 mb-6 uppercase tracking-wider">Properties</div>
<div className="mb-8">
<div className="flex justify-between text-xs mb-3">
<span className="text-white/60">Intensity</span>
<span className="text-white font-mono">100%</span>
</div>
<div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
<div className="h-full bg-orange-500 w-full rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
</div>
</div>
<div className="mb-6">
<div className="text-xs text-white/60 mb-2">Theme</div>
<div className="flex items-center gap-2 p-2 rounded border border-white/5 bg-[#18181b]">
<div className="w-4 h-4 rounded bg-[#F97316] shadow-sm"></div>
<span className="text-xs font-mono text-white/80">#F97316</span>
</div>
</div>
<div className="mb-6">
<div className="text-xs text-white/60 mb-2">Duration</div>
<div className="flex gap-2">
<div className="flex-1 flex items-center gap-2 px-3 py-2 rounded border border-white/5 bg-[#18181b] text-xs text-white">
<span>6 months</span>
</div>
<div className="w-9 flex items-center justify-center rounded border border-white/5 bg-[#18181b] text-white/40 hover:text-white hover:bg-white/5 transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative z-10" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 star-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-all duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-orange-400">
<i className="w-5 h-5" data-lucide="share-2"></i>
</div>
<h3 className="text-xl text-white font-semibold mb-2">Constellation Links</h3>
<p className="text-sm text-white/60 max-w-md leading-relaxed">
            Connect related goals to visualize the bigger picture. A marathon goal connects to your daily runs, diet, and sleep tracking, forming a complex web of progress.
          </p>
</div>
<div className="mt-8 h-32 w-full border border-dashed border-white/10 rounded-lg relative overflow-hidden">
<svg className="absolute inset-0 w-full h-full text-orange-500/30">
<circle className="animate-pulse" cx="20%" cy="50%" fill="currentColor" r="4"></circle>
<circle cx="80%" cy="30%" fill="currentColor" r="3"></circle>
<circle cx="60%" cy="70%" fill="currentColor" r="3"></circle>
<path d="M 20% 50% L 80% 30% L 60% 70% Z" fill="none" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
</div>
<div className="star-card rounded-2xl p-8 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-400 transition-colors">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg text-white font-semibold mb-2">Starlight Progress</h3>
<p className="text-sm text-white/60 leading-relaxed">
          As you complete tasks, your stars glow brighter. Build streaks to ignite supernovas.
        </p>
<div className="mt-6 flex gap-1">
<div className="h-1 flex-1 bg-orange-500 rounded-full shadow-[0_0_10px_orange]"></div>
<div className="h-1 flex-1 bg-orange-500/50 rounded-full"></div>
<div className="h-1 flex-1 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="star-card rounded-2xl p-8 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-orange-400 transition-colors">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-lg text-white font-semibold mb-2">Public Galaxy</h3>
<p className="text-sm text-white/60 leading-relaxed">
          Share a read-only view of your completed constellations. Inspire others with your universe.
        </p>
</div>
<div className="md:col-span-2 star-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-orange-400">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<h3 className="text-xl text-white font-semibold mb-2">AI Flight Assistant</h3>
<p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Stuck on a goal? Our AI suggests micro-tasks to get you moving again, breaking down massive ambitions into orbital steps.
          </p>
</div>
<div className="w-full md:w-64 bg-black/40 rounded-lg border border-white/5 p-4 relative font-mono text-xs text-white/70">
<div className="typing-effect">
            &gt; Analyzing trajectory...<br/>
            &gt; Suggestion: Add "Read 10 pages" to "Finish Book" goal.<br/>
            &gt; <span className="animate-pulse">_</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="pricing">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white mb-4">Choose your vessel.</h2>
<p className="text-white/50">Begin your journey to the stars with plans designed for every explorer.</p>
</div>

<div className="max-w-4xl mx-auto">
<div className="flex justify-center mb-10">
<div className="inline-flex rounded-xl border border-white/5 bg-white/[0.02] p-1">
<button className="px-6 py-2 rounded-lg text-sm font-medium transition-all text-white bg-white/10 shadow-sm border border-white/10" id="btn-nebula" onclick="setTier('nebula')">Nebula</button>
<button className="px-6 py-2 rounded-lg text-sm font-medium transition-all text-white/50 hover:text-white" id="btn-supernova" onclick="setTier('supernova')">Supernova</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 items-center">

<div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center group">

<canvas className="absolute inset-0 w-full h-full transition-opacity duration-700" id="nebula-canvas"></canvas>

<canvas className="absolute inset-0 w-full h-full transition-opacity duration-700 opacity-0" id="supernova-canvas"></canvas>
<div className="absolute bottom-6 left-6 right-6 z-10">
<div className="flex justify-between text-xs text-white/40 uppercase tracking-widest mb-2">
<span>Capacity</span>
<span id="capacity-text">100 Stars</span>
</div>
<div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
<div className="h-full bg-orange-500 w-[30%] transition-all duration-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" id="capacity-bar"></div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-[#0E0F12]">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-semibold text-white" id="tier-title">Nebula Plan</h3>
<p className="text-sm text-white/50 mt-1">Perfect for personal growth.</p>
</div>
<div className="text-right">
<div className="text-3xl font-bold text-white tracking-tight" id="tier-price">$0</div>
<div className="text-[10px] text-white/40 uppercase">Forever</div>
</div>
</div>
<ul className="space-y-4 mb-8" id="tier-features">
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i>
              Up to 20 Active Goals
            </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i>
              Basic Constellations
            </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-4 h-4 text-orange-500" data-lucide="check"></i>
              Public Profile
            </li>
</ul>
<button className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
            Start Mission
            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<div className="max-w-7xl sm:px-6 sm:mt-10 mt-8 mr-auto mb-16 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/10 backdrop-blur-sm text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-6 sm:p-8">

<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-80 overflow-hidden">
<div data-us-project="46mWiXYbqO2WF63cqk3A" style={{width: '100%', height: '100%'}}></div>
</div>

<div className="absolute inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-20%,rgba(249,115,22,0.05),transparent_60%)]"></div>
</div>

<div className="relative z-10">
<h2 className="text-[10vw] sm:text-[8vw] lg:text-[7vw] leading-[0.9] font-semibold tracking-tighter font-display">
<span className="block">Ready to launch</span>
<span className="block text-white/60">your legacy?</span>
</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="">
<p className="text-sm text-white/60 font-sans">Get Started</p>
<a className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-white font-sans" href="mailto:orbit@galaxygoals.app">
<i className="w-5 h-5 stroke-[1.5] flex-shrink-0" data-lucide="mail"></i>
<span className="break-all">orbit@galaxygoals.app</span>
</a>
</div>

<div className="">
<p className="text-sm text-white/60 font-sans">Flight Assessment</p>
<a className="inline-flex items-center gap-2 hover:bg-white/90 text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full mt-2 pt-3 pr-5 pb-3 pl-5 transition-colors duration-200" href="#contact">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span className="font-sans">Book Flight Plan</span>
</a>
</div>

<div className="">
<p className="text-sm text-white/60 font-sans">Join the Fleet</p>
<div className="flex flex-wrap gap-3 mt-2 items-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full pt-3 pr-4 pb-3 pl-4 hover:bg-white/90 transition-colors duration-200" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
<span className="font-sans">14,843 Stars</span>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 text-gray-900 bg-white border-white/10 border rounded-full hover:bg-white/90 transition-colors duration-200" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
</div>
</div>
</div>
<div className="mt-8 border-t border-white/10"></div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="">
<p className="text-sm text-white/60 font-sans">Navigation</p>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline font-sans text-white" href="#galaxy">Constellations</a>
<a className="font-medium tracking-tight hover:underline font-sans text-white" href="#features">Mission Control</a>
<a className="font-medium tracking-tight hover:underline font-sans text-white" href="#pricing">Fuel Pricing</a>
<a className="font-medium tracking-tight hover:underline font-sans text-white" href="#">Transmission Log</a>
</div>
</div>

<div className="">
<p className="text-sm text-white/60 font-sans">Protocols</p>
<div className="mt-3 grid grid-cols-1 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline font-sans text-white" href="#">Terms of Trajectory</a>
<a className="font-medium tracking-tight hover:underline font-sans text-white" href="#">Privacy Signal</a>
</div>
</div>
</div>
<p className="mt-6 text-center text-xs text-white/70 font-sans">© <span id="year">2024</span> Galaxy Goals Inc — Crafted in Deep Space</p>
</div>
</div>
</div>




    </>
  );
}
