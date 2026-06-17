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



        uniform float uTime;
        uniform float uDistortion; 
        uniform float uSize;       
        uniform vec2 uMouse;

        varying float vAlpha;
        varying vec3 vPos;
        varying float vNoise;

        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        
        float snoise(vec3 v) {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx) ;
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );
            vec3 x1 = x0 - i1 + 1.0 * C.xxx;
            vec3 x2 = x0 - i2 + 2.0 * C.xxx;
            vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
            i = mod289(i);
            vec4 p = permute( permute( permute(
                        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
            float n_ = 1.0/7.0;
            vec3  ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );
            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );
            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
        }

        void main() {
            vec3 pos = position;
            
            float noiseFreq = 0.8;
            float noiseAmp = uDistortion;
            float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.2, pos.y * noiseFreq, pos.z * noiseFreq));
            
            vNoise = noise;
            
            vec3 newPos = pos + (normalize(pos) * noise * noiseAmp);

            float dist = distance(uMouse * 10.0, newPos.xy);
            float interaction = smoothstep(5.0, 0.0, dist);
            newPos += normalize(pos) * interaction * 0.8;

            vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            gl_PointSize = uSize * (20.0 / -mvPosition.z) * (1.0 + noise * 0.2);
            
            vAlpha = 1.0;
            vPos = newPos;
        }
    


        uniform vec3 uColor;
        uniform float uOpacity;
        
        varying float vNoise;
        varying vec3 vPos;

        void main() {
            vec2 center = gl_PointCoord - vec2(0.5);
            float dist = length(center);
            
            if (dist > 0.5) discard;
            
            float alpha = smoothstep(0.5, 0.1, dist) * uOpacity;
            
            vec3 darkColor = uColor * 0.3;
            vec3 lightColor = uColor * 2.5; 
            
            vec3 finalColor = mix(darkColor, lightColor, vNoise * 0.6 + 0.4);
            
            gl_FragColor = vec4(finalColor, alpha);
        }
    


        // Initialize Lucide Icons
        lucide.createIcons();

        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        
        scene.fog = new THREE.FogExp2(0x09090b, 0.035);

        const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.set(0, 0, 18);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const systemsGroup = new THREE.Group();
        systemsGroup.position.x = 4.0; 
        scene.add(systemsGroup);

        const geometry = new THREE.IcosahedronGeometry(4.0, 35);
        
        const uniforms = {
            uTime: { value: 0 },
            uDistortion: { value: 0.6 },
            uSize: { value: 1.5 },
            uColor: { value: new THREE.Color('#f97316') },
            uOpacity: { value: 0.8 },
            uMouse: { value: new THREE.Vector2(0, 0) }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent,
            uniforms: uniforms,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        systemsGroup.add(particles);

        const lineGroup = new THREE.Group();
        systemsGroup.add(lineGroup);

        function createTechOrbit(radius, rotation) {
            const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
            const points = curve.getPoints(128);
            const geo = new THREE.BufferGeometry().setFromPoints(points);
            const mat = new THREE.LineBasicMaterial({ 
                color: 0x3f3f46,
                transparent: true, 
                opacity: 0.5 
            });
            const orbit = new THREE.Line(geo, mat);
            orbit.rotation.x = rotation.x;
            orbit.rotation.y = rotation.y;
            lineGroup.add(orbit);
            return orbit;
        }

        const orbits = [
            createTechOrbit(5.5, {x: Math.PI/2, y: 0}),
            createTechOrbit(5.2, {x: Math.PI/3, y: Math.PI/6}),
            createTechOrbit(6.0, {x: Math.PI/1.8, y: Math.PI/4})
        ];

        let time = 0;
        let speed = 0.1;
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.05;
            uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.05;
        });

        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
            adjustLayout();
        });

        function adjustLayout() {
            if(window.innerWidth < 1024) {
                systemsGroup.position.set(0, 1.5, -5);
                systemsGroup.scale.set(0.8, 0.8, 0.8);
            } else {
                systemsGroup.position.set(4.5, 0, 0);
                systemsGroup.scale.set(1, 1, 1);
            }
        }
        adjustLayout();

        function animate() {
            requestAnimationFrame(animate);
            time += 0.01 + (speed * 0.05);

            systemsGroup.rotation.y = time * 0.08;
            systemsGroup.rotation.z = Math.sin(time * 0.1) * 0.05;

            lineGroup.rotation.x = Math.sin(time * 0.05) * 0.2;
            orbits.forEach((orbit, i) => {
                orbit.rotation.z += 0.003 * (i + 1);
            });

            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(0,0,0);

            uniforms.uTime.value = time;
            renderer.render(scene, camera);
        }
        animate();

        document.getElementById('input-distortion').addEventListener('input', (e) => {
            uniforms.uDistortion.value = parseFloat(e.target.value);
            document.getElementById('val-distortion').textContent = e.target.value;
        });
        document.getElementById('input-detail').addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            uniforms.uSize.value = val * 2.0; 
            document.getElementById('val-detail').textContent = val;
        });
        document.getElementById('input-speed').addEventListener('input', (e) => {
            speed = parseFloat(e.target.value);
        });
        document.getElementById('input-opacity').addEventListener('input', (e) => {
            uniforms.uOpacity.value = parseFloat(e.target.value);
        });

        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const color = btn.getAttribute('data-color');
                uniforms.uColor.value.set(color);
                
                const styleSheet = document.createElement("style");
                styleSheet.innerText = `
                    input[type=range]::-webkit-slider-thumb {
                        background: ${color} !important;
                        box-shadow: 0 0 10px ${color}80 !important;
                    }
                    input[type=range]::-webkit-slider-thumb:hover {
                        box-shadow: 0 0 15px ${color}cc !important;
                    }
                `;
                document.head.appendChild(styleSheet);
            });
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
      

<section className="relative w-full h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden border-b border-zinc-900">
<div className="absolute inset-0 pointer-events-none grid-overlay z-0"></div>
<div className="absolute inset-0 z-[1]" id="canvas-container"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
<header className="relative z-20 flex justify-between items-start animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex flex-col items-center justify-center gap-[2px] rounded bg-white text-black font-mono text-xs font-medium">
                        FF
                    </div>
<span className="text-xl tracking-tight text-white font-medium">FlowForge Systems</span>
</div>
<div className="flex items-center gap-2 pl-11 mt-1">
<span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Node Architecture</span>
<div className="h-px w-8 bg-zinc-800"></div>
</div>
</div>
<nav className="pointer-events-auto hidden md:flex items-center gap-8">
<a className="font-mono text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-widest" href="#">Capabilities</a>
<a className="font-mono text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-widest" href="#">Architecture</a>
<button className="text-sm px-5 py-2 bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors rounded-full flex items-center gap-2">
                    Book Demo
                </button>
</nav>
</header>
<div className="relative z-20 w-full max-w-4xl mt-auto md:mt-0 md:top-[-10%] animate-fade-in opacity-0" style={{animationDelay: '0.3s'}}>
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-orange-500"></div>
<span className="font-mono text-xs text-orange-500 uppercase tracking-[0.2em]">Operational Intelligence</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight font-medium text-balance">
                Automate<br/>
<span className="text-zinc-500">Everything.</span>
</h1>
<p className="mt-8 max-w-md text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                From backend workflows to full operational systems, we eliminate manual friction. Unlocking true operational velocity.
            </p>
<div className="mt-10 flex items-center gap-6 pointer-events-auto">
<button className="group flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-all duration-300 font-medium text-sm">
                    Initialize System
                    <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
<span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">System Online</span>
</div>
</div>
</div>
<div className="pointer-events-auto absolute bottom-8 right-6 md:right-12 hidden lg:flex items-center animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
<div className="w-48 tech-glass rounded-lg p-4 relative z-10 flex flex-col gap-3 mr-[-4px]">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-zinc-400" icon="solar:server-square-linear"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">WSS_Link.01</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>Packets</span><span className="text-orange-500">14.2k/s</span>
</div>
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>Latency</span><span>8ms</span>
</div>
</div>
<div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full z-20"></div>
</div>
<svg className="w-12 h-2 overflow-visible relative z-0">
<path className="animate-flow" d="M0,4 C24,4 24,4 48,4" fill="none" stroke="#f97316" stroke-dasharray="3 3" strokeWidth="1.5"></path>
</svg>
<div className="w-[280px] tech-glass rounded-lg ml-[-4px] relative z-10">
<div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-950 border border-zinc-700 rounded-full z-20"></div>
<div className="border-b border-zinc-800/60 px-4 py-3 flex justify-between items-center">
<span className="font-mono text-xs text-white uppercase tracking-widest">System Calibration</span>
<iconify-icon className="text-zinc-500" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="p-5 space-y-6">
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
<span>Flux Dynamics</span>
<span className="text-zinc-300" id="val-distortion">0.5</span>
</div>
<input id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.6"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
<span>Processing Threads</span>
<span className="text-zinc-300" id="val-detail">0.8</span>
</div>
<input id="input-detail" max="2.0" min="0.1" step="0.1" type="range" value="0.9"/>
</div>
<div className="grid grid-cols-2 gap-4 pt-2 border-t border-zinc-800/60">
<div className="space-y-2">
<div className="flex justify-between text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
<span>Clock Rate</span>
</div>
<input id="input-speed" max="0.5" min="0" step="0.01" type="range" value="0.1"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
<span>Core Density</span>
</div>
<input id="input-opacity" max="1.0" min="0.1" step="0.05" type="range" value="0.8"/>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Energy Profile</span>
<div className="flex gap-2">
<button className="w-4 h-4 rounded bg-[#f97316] border border-transparent ring-1 ring-offset-2 ring-offset-[#09090b] ring-transparent hover:ring-zinc-600 transition-all color-btn" data-color="#f97316"></button>
<button className="w-4 h-4 rounded bg-[#3b82f6] border border-transparent hover:ring-1 hover:ring-offset-2 hover:ring-offset-[#09090b] hover:ring-zinc-600 transition-all color-btn" data-color="#3b82f6"></button>
<button className="w-4 h-4 rounded bg-[#10b981] border border-transparent hover:ring-1 hover:ring-offset-2 hover:ring-offset-[#09090b] hover:ring-zinc-600 transition-all color-btn" data-color="#10b981"></button>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 left-6 md:left-12 flex flex-col gap-1 opacity-60">
<span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Protocol v4.0.1</span>
<span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Encrypted Tunnel</span>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">What We Automate</h2>
<p className="text-zinc-400 text-base md:text-lg max-w-xl font-light">End-to-end integration mapping across hardware interfaces and digital infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Supply Chain Logic</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">Autonomous routing, predictive inventory load balancing, and autonomous dispatch synchronization.</p>
</div>
<div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Data ETL Pipelines</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">Self-healing data extraction, schema normalization, and dynamic multi-node stream processing.</p>
</div>
<div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 group">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Factory Hardware</h3>
<p className="text-base text-zinc-400 font-light leading-relaxed">Direct PLC integrations, robotic arm pathing optimization, and real-time sensory array ingestion.</p>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-900 bg-zinc-950/50 relative z-20">
<div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2 relative">
<div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 group">
<img alt="Robotic arm factory automation" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
<div className="bg-zinc-900/90 backdrop-blur border border-zinc-800 px-4 py-2 rounded">
<span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Routing Latency</span>
<span className="text-lg font-medium text-white">4.2ms</span>
</div>
<div className="bg-zinc-900/90 backdrop-blur border border-zinc-800 px-4 py-2 rounded flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-[10px] font-mono text-white uppercase tracking-widest">Live Sync</span>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 space-y-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-xl" icon="solar:chart-2-linear"></iconify-icon>
<span className="font-mono text-xs text-orange-500 uppercase tracking-widest">Case Study</span>
</div>
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-white leading-tight">
                    How Global Logistics Inc reduced manual routing by 98%.
                </h2>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                    By implementing the FlowForge operational engine, GLI entirely bypassed their legacy ERP bottleneck. The system natively integrates with existing robotic arrays to process and allocate thousands of units per minute with zero human intervention.
                </p>
<div className="grid grid-cols-2 gap-8 pt-6 border-t border-zinc-900">
<div>
<div className="text-4xl tracking-tighter font-medium text-white mb-1">10x</div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Throughput Increase</div>
</div>
<div>
<div className="text-4xl tracking-tighter font-medium text-white mb-1">&lt;1s</div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Decision Latency</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 border-b border-zinc-900">
<div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-white mb-6">Integrations are baked in.</h2>
<p className="text-base md:text-lg text-zinc-400 font-light text-balance leading-relaxed">
                Connect to 370+ services, trigger workflows from any event. No migration, no lock-in.
            </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="layout" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Webflow</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Stripe</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="network" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Hubspot</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="chrome" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Google</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Snowflake</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="database" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Supabase</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="figma" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Figma</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">MongoDB</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="github" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">GitHub</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">WordPress</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="cloud" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Salesforce</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="group p-8 rounded-xl bg-[#0c0c0e] border border-zinc-800/60 hover:bg-[#121214] hover:border-zinc-700 transition-all flex flex-col items-center justify-center cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 text-zinc-400 group-hover:text-white transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<i className="w-6 h-6" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-white mb-1">Notion</span>
<div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-300 mt-2">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Connect</span>
<i className="w-3 h-3 text-blue-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="relative w-full overflow-hidden bg-[#050505] min-h-[700px] flex items-center border-b border-zinc-900">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 grid-overlay opacity-30"></div>

<div className="absolute -top-10 -right-20 w-[120%] h-[120%] flex flex-col gap-16 transform -rotate-[8deg] select-none opacity-10 blur-[1px]">
<div className="text-[140px] font-medium tracking-tighter text-zinc-500 whitespace-nowrap leading-none">Add Nodes Add Nodes Add Nodes</div>
<div className="text-[90px] font-medium tracking-tighter text-zinc-500 whitespace-nowrap leading-none ml-32">Drag nodes from here to the canvas or click to add them</div>
<div className="text-[120px] font-medium tracking-tighter text-zinc-500 whitespace-nowrap leading-none ml-64">Search nodes... Search nodes...</div>
</div>

<div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-blue-600/10 border border-blue-500/20 rounded-full px-6 py-3 backdrop-blur-sm shadow-[0_0_30px_rgba(37,99,235,0.15)]">
<span className="text-blue-400 font-medium text-lg tracking-tight flex items-center gap-2">
<i className="w-5 h-5" data-lucide="bot" strokeWidth="1.5"></i> Agent Chat
                </span>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">

<div className="w-full lg:w-1/2 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded mb-8">
<span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">New Engine</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-6 leading-[1.05] text-balance">
                    We are the easiest way to build automations &amp; AI agents for the AI era.
                </h2>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
                    AI-powered workflow execution. From conditional logic to complex orchestration — build, test, and deploy with complete flexibility.
                </p>
<button className="group flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-7 py-3.5 rounded-md transition-all duration-300 font-medium text-sm shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                    Get Started
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="w-full lg:w-5/12 flex justify-start lg:justify-end">
<div className="tech-glass p-10 rounded-2xl w-full max-w-md border border-zinc-800/80 relative overflow-hidden group bg-[#0a0a0c]/80">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-8 pr-8 leading-tight">
                        A visual workflow engine with 370+ installable nodes
                    </h3>
<div className="bg-zinc-950 border border-zinc-800/60 rounded-xl p-6 relative">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">Integrations Available</span>
<div className="text-6xl tracking-tighter font-medium text-white mb-4">800+</div>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                            Over 200 installed with a default command. Connect to any service, API, or database across your entire stack.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden bg-animated-gradient z-20 flex flex-col items-center justify-center text-center">

<div className="absolute inset-0 grid-overlay opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-amber-400 text-xl" icon="solar:star-fall-linear"></iconify-icon>
<span className="font-mono text-xs text-amber-400 uppercase tracking-widest">Early Access</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-medium text-white mb-6 text-balance">
                Ready to forge your <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">automated future?</span>
</h2>
<p className="text-base md:text-lg text-blue-100/70 font-light max-w-xl mb-10 text-balance leading-relaxed">
                Join the waitlist today. Get exclusive access to the beta and start building operational intelligence at scale.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md relative z-20">
<input className="w-full bg-[#020617]/40 border border-[#1e3a8a]/60 rounded-full px-6 py-3.5 text-sm text-white placeholder:text-blue-300/40 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all backdrop-blur-md" placeholder="Enter your work email" type="email"/>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#020617] px-8 py-3.5 rounded-full transition-all duration-300 font-medium text-sm whitespace-nowrap gold-glow hover:scale-[1.02]">
                    Sign Up
                    <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-[#09090b] pt-20 pb-10 px-6 md:px-12 relative z-20 border-t border-zinc-900">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2 flex flex-col items-start">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 flex flex-col items-center justify-center rounded bg-white text-black font-mono text-[10px] font-medium">
                        FF
                    </div>
<span className="text-lg tracking-tight text-white font-medium">FlowForge Systems</span>
</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs mb-6">
                    Automate everything. From backend workflows to full operational systems, we eliminate manual friction.
                </p>
</div>

<div>
<h4 className="text-xs font-mono text-white uppercase tracking-widest mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-mono text-white uppercase tracking-widest mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-mono text-white uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="text-sm font-light text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900/60 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-xs font-light text-zinc-600">© 2024 FlowForge Systems. All rights reserved.</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">All Systems Operational</span>
</div>
</div>
</footer>





    </>
  );
}
