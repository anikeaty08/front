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



        // --- 1. SETUP THREE.JS ---
        const container = document.getElementById('canvas-container');
        const hudLayer = document.getElementById('hud-layer');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0b);

        const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 8;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // --- 2. SHADER MATERIAL ---
        const vertexShader = `
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;
            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform vec3 colorPaper;
            uniform vec3 colorRust;
            uniform vec3 colorForest;
            uniform vec3 colorInk;
            uniform float time;
            uniform float noiseScale;
            uniform float dustDensity;
            varying vec2 vUv;
            varying vec3 vNormal;
            varying vec3 vPosition;

            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
            vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
            float snoise(vec3 v) {
                const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                vec3 i  = floor(v + dot(v, C.yyy));
                vec3 x0 = v - i + dot(i, C.xxx);
                vec3 g = step(x0.yzx, x0.xyz);
                vec3 l = 1.0 - g;
                vec3 i1 = min( g.xyz, l.zxy );
                vec3 i2 = max( g.xyz, l.zxy );
                vec3 x1 = x0 - i1 + C.xxx;
                vec3 x2 = x0 - i2 + C.yyy;
                vec3 x3 = x0 - D.yyy;
                i = mod289(i);
                vec4 p = permute( permute( permute( 
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                float n_ = 0.142857142857;
                vec3  ns = n_ * D.wyz - D.xzx;
                vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
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
                p0 *= norm.x;
                p1 *= norm.y;
                p2 *= norm.z;
                p3 *= norm.w;
                vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                m = m * m;
                return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
            }

            void main() {
                vec3 lightDir = normalize(vec3(1.0, 0.8, 1.0));
                float lightIntensity = dot(vNormal, lightDir);
                float noiseVal = snoise(vPosition * noiseScale + time * 0.05);
                
                vec3 finalColor = colorPaper; 
                if (noiseVal > (0.1 - (dustDensity * 0.5))) finalColor = mix(colorPaper, colorRust, 0.5 + (dustDensity * 0.2));
                if (lightIntensity < 0.0) finalColor = mix(finalColor, colorForest, 0.75);
                
                float viewDot = dot(normalize(vNormal), vec3(0,0,1));
                float rim = 1.0 - max(viewDot, 0.0);
                finalColor += colorInk * pow(rim, 6.0) * 0.3;
                
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        const uniforms = {
            time: { value: 0 },
            noiseScale: { value: 2.0 },
            dustDensity: { value: 0.5 },
            colorPaper: { value: new THREE.Color('#151516') },
            colorRust: { value: new THREE.Color('#D8C8B8') },
            colorForest: { value: new THREE.Color('#050505') },
            colorInk: { value: new THREE.Color('#FFFFFF') }
        };

        const geometry = new THREE.IcosahedronGeometry(2.8, 128);
        const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // --- 3. HUD MARKERS ---
        const pointsOfInterest = [
            { pos: new THREE.Vector3(1.5, 1.8, 1.2), label: "POLAR CAP ALPHA" },
            { pos: new THREE.Vector3(-0.8, 0.5, 2.5), label: "VALLES MARINERIS" },
            { pos: new THREE.Vector3(1.2, -1.0, 2.2), label: "CRATER JEZERO" }
        ];

        const markers = pointsOfInterest.map((poi, index) => {
            const el = document.createElement('div');
            el.className = 'hud-marker';
            el.innerHTML = `
                <div class="hud-dot"></div>
                <div class="hud-line"></div>
                <div class="hud-text font-mono text-[10px] text-[#C2A878] tracking-widest font-semibold uppercase">
                    <span class="opacity-40 mr-1">0${index+1}</span>${poi.label}
                </div>
            `;
            hudLayer.appendChild(el);
            return { el, pos: poi.pos };
        });

        // --- 4. ANIMATION & CONTROLS ---
        let autoRotationSpeed = 0.001;
        let time = 0;

        const sliderRot = document.getElementById('slider-rot');
        const sliderNoise = document.getElementById('slider-noise');
        const sliderDust = document.getElementById('slider-dust');

        if(sliderRot) {
            sliderRot.addEventListener('input', (e) => {
                const val = e.target.value / 100;
                autoRotationSpeed = 0.0005 + (val * 0.005);
                document.getElementById('val-rot').innerText = (val * 2).toFixed(1) + 'x';
            });
            sliderNoise.addEventListener('input', (e) => {
                const val = e.target.value / 100;
                uniforms.noiseScale.value = 1.0 + (val * 3.0);
                document.getElementById('val-noise').innerText = Math.round(val * 100) + '%';
            });
            sliderDust.addEventListener('input', (e) => {
                const val = e.target.value / 100;
                uniforms.dustDensity.value = val;
                document.getElementById('val-dust').innerText = val > 0.6 ? 'HIGH' : (val > 0.3 ? 'MED' : 'LOW');
            });
        }

        function animate() {
            requestAnimationFrame(animate);
            time += 0.005;
            material.uniforms.time.value = time;
            sphere.rotation.y += autoRotationSpeed;
            renderer.render(scene, camera);

            markers.forEach(marker => {
                const v = marker.pos.clone();
                v.applyMatrix4(sphere.matrixWorld);
                const isFront = v.z > 0;
                v.project(camera);

                if (v.z < 1 && isFront) {
                    const x = (v.x * .5 + .5) * container.clientWidth;
                    const y = (v.y * -.5 + .5) * container.clientHeight;
                    marker.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                    marker.el.style.opacity = '1';
                } else {
                    marker.el.style.opacity = '0';
                }
            });
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });

        // --- 5. TAB SWITCHING ---
        window.switchTab = function(tabId, btnElement) {
            document.querySelectorAll('.nav-link').forEach(el => {
                el.classList.remove('active', 'text-[#f0f0f0]');
                el.classList.add('text-[#666]');
            });
            btnElement.classList.add('active', 'text-[#f0f0f0]');
            btnElement.classList.remove('text-[#666]');

            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            const target = document.getElementById('tab-' + tabId);
            if(target) target.classList.add('active');
        }

        // --- 6. REFINED INTRO ANIMATION ---
        document.addEventListener('DOMContentLoaded', () => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            gsap.set("#main-body", { opacity: 1 });
            gsap.set(".fade-element", { opacity: 0, x: -20 });
            gsap.set(sphere.scale, { x: 0.1, y: 0.1, z: 0.1 });
            gsap.set(sphere.rotation, { x: 0.5 });

            tl.to("#ui-sidebar", {
                x: 0,
                duration: 1.4,
                ease: "expo.out"
            })
            .to(sphere.scale, {
                x: 1, y: 1, z: 1,
                duration: 2.5,
                ease: "elastic.out(1, 0.75)"
            }, "-=1")
            .to(".fade-element", {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2
            }, "-=1.5")
            .from(".stagger-item", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.12,
                clearProps: "all"
            }, "-=1.2");
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
      

<div className="relative w-full h-[40vh] lg:h-full lg:flex-1 bg-[#0a0a0b] order-1 overflow-hidden pointer-events-none" id="canvas-container">
<div className="absolute top-10 left-10 z-10 flex items-center gap-4 mix-blend-difference fade-element">
<iconify-icon className="text-2xl text-[#C2A878]" icon="solar:monitor-camera-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col">
<span className="font-mono text-xs tracking-widest uppercase text-white/40">Visual Feed</span>
<span className="font-mono text-xs tracking-widest uppercase">Orbiter-09 // Active</span>
</div>
</div>
<div className="absolute inset-0 z-0" id="hud-layer">

</div>
</div>

<aside className="w-full lg:w-[480px] h-full bg-[#0f0f10] border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col z-20 order-2 relative shadow-2xl overflow-hidden translate-x-full" id="ui-sidebar">

<header className="p-8 pb-4 flex flex-col gap-8 sticky top-0 bg-[#0f0f10]/95 backdrop-blur-sm z-30 border-b border-white/5">
<div className="flex justify-between items-start">
<div className="inline-flex items-center gap-3 bg-[#1a1a1c] px-5 py-2.5 rounded-full border border-white/5 w-fit">
<div className="w-1.5 h-1.5 rounded-full bg-[#C2A878] shadow-[0_0_10px_#C2A878] animate-pulse"></div>
<span className="font-semibold text-xs tracking-widest uppercase text-white/90">UAC // ARES</span>
</div>
<div className="flex gap-4">
<button className="text-white/30 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<nav className="flex gap-8 text-xs uppercase font-semibold tracking-widest text-[#666]">
<button className="nav-link active text-[#f0f0f0] transition-colors pb-1 text-left relative" onclick="switchTab('manifest', this)">Manifest</button>
<button className="nav-link hover:text-white transition-colors pb-1 text-left" onclick="switchTab('trajectory', this)">Trajectory</button>
<button className="nav-link text-[#C2A878]/70 hover:text-[#C2A878] transition-colors pb-1 text-left" onclick="switchTab('colonize', this)">Colonize</button>
</nav>
</header>

<div className="flex-1 overflow-y-auto px-8 pb-12 space-y-10 scroll-smooth" id="scroll-content">
<div className="space-y-6 mt-6 stagger-item">
<h1 className="font-display text-8xl lg:text-9xl leading-none tracking-tight text-[#f0f0f0]">
                    MARS
                </h1>
<div className="flex flex-wrap gap-3">
<span className="px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium uppercase tracking-widest text-white/80">Mission 2034</span>
<span className="px-5 py-3 rounded-full border border-[#D8C8B8] bg-[#D8C8B8] text-xs font-semibold uppercase tracking-widest text-[#0f0f10] transition-transform hover:scale-105 cursor-pointer">Terraform Protocol</span>
</div>
</div>
<div className="tab-content active space-y-10" id="tab-manifest">
<div className="bg-[#151516] p-8 rounded-[32px] border border-white/5 space-y-6 stagger-item">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#888888] text-xl" icon="solar:tuning-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-[#888888] font-mono uppercase tracking-widest">Atmospheric Control</span>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs uppercase tracking-widest text-white/60">
<span>Rotation Velocity</span>
<span className="font-mono" id="val-rot">1.0x</span>
</div>
<input className="w-full" id="slider-rot" max="100" min="0" type="range" value="20"/>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs uppercase tracking-widest text-white/60">
<span>Surface Roughness</span>
<span className="font-mono" id="val-noise">45%</span>
</div>
<input className="w-full" id="slider-noise" max="100" min="0" type="range" value="45"/>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs uppercase tracking-widest text-white/60">
<span>Dust Density</span>
<span className="font-mono" id="val-dust">High</span>
</div>
<input className="w-full" id="slider-dust" max="100" min="0" type="range" value="80"/>
</div>
</div>
<div className="bg-[#1a1a1c] p-8 rounded-[32px] border border-white/5 flex flex-col gap-6 stagger-item hover:border-white/10 transition-colors group">
<div className="flex justify-between items-start">
<span className="text-xs text-[#888888] font-mono uppercase tracking-widest">Atmospheric Profile</span>
<iconify-icon className="text-[#888888] text-2xl group-hover:text-[#D8C8B8] transition-colors" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-3xl text-[#D8C8B8] font-semibold leading-none tracking-tight">95% Carbon Dioxide</div>
<div className="grid grid-cols-2 gap-8 mt-4">
<div className="flex flex-col gap-2 border-t border-white/5 pt-5">
<span className="text-xs text-[#888888] uppercase tracking-widest">Gravity</span>
<span className="font-mono text-base font-semibold text-[#f0f0f0]">3.721 m/s²</span>
</div>
<div className="flex flex-col gap-2 border-t border-white/5 pt-5">
<span className="text-xs text-[#888888] uppercase tracking-widest">Temperature</span>
<span className="font-mono text-base font-semibold text-[#f0f0f0]">-63°C Avg</span>
</div>
</div>
</div>
<div className="bg-[#1a1a1c] p-8 rounded-[32px] border border-white/5 flex flex-col gap-8 stagger-item hover:border-white/10 transition-colors">
<div className="flex justify-between items-center">
<div className="flex flex-col gap-2">
<span className="text-xs text-[#888888] uppercase tracking-widest">Target Location</span>
<span className="font-mono text-sm font-semibold text-[#f0f0f0]">VALLES MARINERIS // SEC-7</span>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-end border-t border-white/5 pt-6">
<div className="flex flex-col gap-2">
<span className="text-xs text-[#888888] uppercase tracking-widest">Arrival Estimate</span>
<span className="font-mono text-2xl font-semibold text-[#C2A878] tracking-tight">T-MINUS 12Y</span>
</div>
<iconify-icon className="text-white/20 text-3xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="tab-content hidden space-y-10" id="tab-trajectory">
<div className="bg-[#1a1a1c] p-8 rounded-[32px] border border-white/5 flex flex-col gap-8">
<div className="flex justify-between items-center">
<span className="text-xs text-[#888888] font-mono uppercase tracking-widest">Flight Path</span>
<div className="px-3 py-1 rounded bg-green-500/10 border border-green-500/20 text-[10px] text-green-500 uppercase tracking-widest font-mono">Optimal</div>
</div>
<div className="relative pl-6 space-y-10 before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-white/20 before:to-transparent">
<div className="relative pl-10">
<div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#1a1a1c] border border-[#C2A878] z-10"></div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white">LEO Injection</span>
<span className="text-xs text-[#888888] font-mono">T-MINUS 00:00:00</span>
</div>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#1a1a1c] border border-white/20 z-10"></div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white/50">Hohmann Transfer</span>
<span className="text-xs text-[#888888] font-mono">T-PLUS 3 DAYS</span>
</div>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#1a1a1c] border border-white/20 z-10"></div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-white/50">Mars Orbit Insertion</span>
<span className="text-xs text-[#888888] font-mono">T-PLUS 7 MONTHS</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="bg-[#151516] p-6 rounded-[24px] border border-white/5 space-y-3">
<iconify-icon className="text-[#C2A878] text-2xl mb-1" icon="solar:asteroid-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs text-[#888] uppercase tracking-widest">Velocity</div>
<div className="font-mono text-sm text-white">28,000 km/h</div>
</div>
<div className="bg-[#151516] p-6 rounded-[24px] border border-white/5 space-y-3">
<iconify-icon className="text-[#C2A878] text-2xl mb-1" icon="solar:fuel-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs text-[#888] uppercase tracking-widest">Fuel Rsrv</div>
<div className="font-mono text-sm text-white">84%</div>
</div>
</div>
</div>
<div className="tab-content hidden space-y-8" id="tab-colonize">
<div className="text-xs text-[#888888] font-mono uppercase tracking-widest mb-2">Select Modules</div>
<div className="grid grid-cols-1 gap-4">
<label className="checkbox-custom cursor-pointer bg-[#1a1a1c] p-6 rounded-[24px] border border-white/5 flex items-center gap-6 hover:border-white/20 transition-colors">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-6 h-6 rounded border border-white/20 flex items-center justify-center transition-all bg-[#0f0f10]">
<iconify-icon className="text-black text-sm opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-sm font-semibold text-white">Habitation Unit A1</span>
<span className="text-xs text-[#888] font-mono">80T</span>
</div>
<div className="text-xs text-[#666] mt-1">Life support for 6 crew members.</div>
</div>
</label>
<label className="checkbox-custom cursor-pointer bg-[#1a1a1c] p-6 rounded-[24px] border border-white/5 flex items-center gap-6 hover:border-white/20 transition-colors">
<input className="hidden" type="checkbox"/>
<div className="w-6 h-6 rounded border border-white/20 flex items-center justify-center transition-all bg-[#0f0f10]">
<iconify-icon className="text-black text-sm opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-sm font-semibold text-white">Solar Array Alpha</span>
<span className="text-xs text-[#888] font-mono">120T</span>
</div>
<div className="text-xs text-[#666] mt-1">1.2GW continuous power generation.</div>
</div>
</label>
</div>
<div className="pt-6">
<button className="w-full py-5 bg-[#C2A878] text-[#0f0f10] text-xs font-semibold uppercase tracking-widest rounded-2xl hover:bg-[#b09665] transition-transform hover:scale-[1.02] active:scale-95">
                        Initiate Launch Sequence
                    </button>
</div>
</div>
<div className="py-12 opacity-30 text-[10px] text-center tracking-[0.4em] font-mono uppercase stagger-item">
                © 2034 UNITED AEROSPACE CORP
            </div>
</div>
</aside>


    </>
  );
}
