import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
paper: '#FDFCF8',
ink: '#121212',
sepia: '#78350F',
stone: '#E7E5E4',
rust: '#9A3412',
cyber: '#E11D48',
'cyber-dark': '#9F1239'
},
animation: {
'fade-in': 'fadeIn 1.2s ease-out forwards',
'marquee': 'marquee 40s linear infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blink': 'blink 1s step-end infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' }
},
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
},
shimmer: {
'0%': { backgroundPosition: '0 0' },
'100%': { backgroundPosition: '-200% 0' }
}
}
}
}
}



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
            float noiseFreq = 0.4;
            float noiseAmp = uDistortion;
            float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.15, pos.y * noiseFreq, pos.z * noiseFreq));
            vNoise = noise;
            vec3 newPos = pos + (normalize(pos) * noise * noiseAmp * 0.5);
            newPos.x += noise * 0.2;
            float dist = distance(uMouse * 15.0, newPos.xy);
            float interaction = smoothstep(5.0, 0.0, dist);
            newPos.z += interaction * 1.5;
            vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            gl_PointSize = uSize * (20.0 / -mvPosition.z) * (0.8 + noise * 0.4);
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
            vec3 darkColor = uColor * 0.6;
            vec3 lightColor = uColor * 1.6; 
            vec3 finalColor = mix(darkColor, lightColor, vNoise * 0.5 + 0.5);
            gl_FragColor = vec4(finalColor, alpha);
        }
    


        lucide.createIcons();

        // --- NEW FEATURES START ---

        // 1. Decipher Text Effect
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        
        function decipher(element) {
            let iterations = 0;
            const finalValue = element.dataset.value;
            const interval = setInterval(() => {
                element.innerText = finalValue
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return finalValue[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");
                
                if (iterations >= finalValue.length) { 
                    clearInterval(interval);
                    element.innerText = finalValue; // Ensure exact match at end
                }
                
                iterations += 1/3; // Speed control
            }, 30);
        }

        // Trigger decipher on load
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".decipher-target").forEach(el => decipher(el));
        });

        // 2. Spotlight Effect for Cards
        const cardsGrid = document.getElementById("cards-grid");
        const cards = document.querySelectorAll(".spotlight-card");
        
        if(cardsGrid) {
            cardsGrid.addEventListener("mousemove", (e) => {
                for(const card of cards) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                }
            });
        }

        // 3. Magnetic Button Effect
        const magneticBtn = document.getElementById('magnetic-btn');
        if(magneticBtn) {
            magneticBtn.addEventListener('mousemove', (e) => {
                const rect = magneticBtn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Strength of pull
                magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });

            magneticBtn.addEventListener('mouseleave', () => {
                magneticBtn.style.transform = 'translate(0px, 0px)';
            });
        }

        // --- NEW FEATURES END ---

        // 3D SCENE SETUP (PRESERVED)
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        // Slightly darker fog to make particles pop on light background
        scene.fog = new THREE.FogExp2(0xFDFCF8, 0.035);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 16);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        // IMPORTANT: Clear any static HTML content that might have been in the container
        if(container) {
            container.innerHTML = '';
            container.appendChild(renderer.domElement);
        }

        const systemsGroup = new THREE.Group();
        systemsGroup.position.x = 4.0; 
        scene.add(systemsGroup);

        function createLogoPoints(scale = 1.5, density = 12000) {
            const shape = new THREE.Shape();
            shape.moveTo(1.5, 1.0); 
            shape.lineTo(4.5, 1.0);
            shape.lineTo(4.8, 3.5); 
            shape.lineTo(-1.0, 3.5); 
            shape.lineTo(-4.0, 0.5); 
            shape.bezierCurveTo(-4.0, -2.5, -2.5, -3.5, 0.0, -3.5);
            shape.lineTo(3.5, -3.5);
            shape.lineTo(4.0, -1.5); 
            shape.lineTo(1.5, -1.5); 
            shape.bezierCurveTo(-0.5, -1.5, -1.2, -0.8, -1.2, 0.0);
            shape.bezierCurveTo(-1.2, 0.8, -0.5, 1.0, 1.5, 1.0);
            const extrudeSettings = { steps: 2, depth: 1.5, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.2, bevelSegments: 4 };
            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            geometry.center();
            const posAttribute = geometry.attributes.position;
            const faces = posAttribute.count / 3;
            const points = new Float32Array(density * 3);
            const _v1 = new THREE.Vector3(); const _v2 = new THREE.Vector3(); const _v3 = new THREE.Vector3();
            let totalArea = 0; const areas = [];
            for (let i = 0; i < faces; i++) {
                _v1.fromBufferAttribute(posAttribute, i * 3 + 0);
                _v2.fromBufferAttribute(posAttribute, i * 3 + 1);
                _v3.fromBufferAttribute(posAttribute, i * 3 + 2);
                const area = 0.5 * new THREE.Vector3().crossVectors(_v2.sub(_v1), _v3.sub(_v1)).length();
                totalArea += area; areas.push(area);
            }
            let pIndex = 0;
            for (let i = 0; i < faces; i++) {
                const count = Math.floor((areas[i] / totalArea) * density);
                _v1.fromBufferAttribute(posAttribute, i * 3 + 0);
                _v2.fromBufferAttribute(posAttribute, i * 3 + 1);
                _v3.fromBufferAttribute(posAttribute, i * 3 + 2);
                for (let j = 0; j < count; j++) {
                    const r1 = Math.random(); const r2 = Math.random(); const sqrtR1 = Math.sqrt(r1);
                    const a = 1 - sqrtR1; const b = sqrtR1 * (1 - r2); const c = sqrtR1 * r2;
                    const x = a * _v1.x + b * _v2.x + c * _v3.x;
                    const y = a * _v1.y + b * _v2.y + c * _v3.y;
                    const z = a * _v1.z + b * _v2.z + c * _v3.z;
                    points[pIndex++] = x * scale; points[pIndex++] = y * scale; points[pIndex++] = z * scale;
                }
            }
            const bufferGeo = new THREE.BufferGeometry();
            bufferGeo.setAttribute('position', new THREE.BufferAttribute(points, 3));
            return bufferGeo;
        }

        const uniforms = {
            uTime: { value: 0 },
            uDistortion: { value: 0.6 },
            uSize: { value: 3.5 },
            uColor: { value: new THREE.Color('#121212') },
            uOpacity: { value: 0.8 },
            uMouse: { value: new THREE.Vector2(0, 0) }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent,
            uniforms: uniforms,
            transparent: true, depthWrite: false, blending: THREE.NormalBlending
        });

        const logoGeo = createLogoPoints(1.2, 15000);
        const particles = new THREE.Points(logoGeo, material);
        particles.rotation.x = -0.2; particles.rotation.y = -0.4;
        systemsGroup.add(particles);

        const lineGroup = new THREE.Group();
        systemsGroup.add(lineGroup);

        function createThinOrbit(radiusX, radiusY, rotation) {
            const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0, 2 * Math.PI, false, 0);
            const points = curve.getPoints(128);
            const geo = new THREE.BufferGeometry().setFromPoints(points);
            const mat = new THREE.LineBasicMaterial({ color: 0x78350F, transparent: true, opacity: 0.12 });
            const orbit = new THREE.Line(geo, mat);
            orbit.rotation.x = rotation.x; orbit.rotation.y = rotation.y;
            lineGroup.add(orbit);
            return orbit;
        }
        const orbits = [
            createThinOrbit(6.5, 6.5, {x: Math.PI/2, y: 0}),
            createThinOrbit(7.0, 5.0, {x: Math.PI/3, y: Math.PI/6}),
            createThinOrbit(8.0, 8.0, {x: Math.PI/1.8, y: Math.PI/4})
        ];

        let time = 0; let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            uniforms.uMouse.value.x += (mouseX - uniforms.uMouse.value.x) * 0.05;
            uniforms.uMouse.value.y += (mouseY - uniforms.uMouse.value.y) * 0.05;
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            adjustLayout();
        });

        function adjustLayout() {
            if(window.innerWidth < 1024) {
                systemsGroup.position.set(0, 1.0, -2);
                systemsGroup.scale.set(0.65, 0.65, 0.65);
            } else {
                systemsGroup.position.set(4.0, 0, 0);
                systemsGroup.scale.set(1, 1, 1);
            }
        }
        adjustLayout();

        function animate() {
            requestAnimationFrame(animate);
            time += 0.015;
            particles.rotation.y = -0.4 + Math.sin(time * 0.2) * 0.1;
            particles.rotation.z = Math.cos(time * 0.15) * 0.05;
            lineGroup.rotation.y = time * 0.05;
            orbits.forEach((orbit, i) => { orbit.rotation.z += 0.001 * (i + 1); });
            camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
            camera.lookAt(0,0,0);
            uniforms.uTime.value = time;
            renderer.render(scene, camera);
        }
        animate();

        // 3D Controls Interaction logic
        const distInput = document.getElementById('input-distortion');
        if(distInput) {
            distInput.addEventListener('input', (e) => { uniforms.uDistortion.value = parseFloat(e.target.value); });
        }
        const detailInput = document.getElementById('input-detail');
        if(detailInput) {
            detailInput.addEventListener('input', (e) => { uniforms.uSize.value = parseFloat(e.target.value) * 4.0; });
        }
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const color = btn.getAttribute('data-color');
                uniforms.uColor.value.set(color);
                lineGroup.children.forEach(line => line.material.color.set(color));
            });
        });

        // Console Typing Logic
        const logContainer = document.getElementById('console-logs');
        const logs = [
            "Connecting to remote host...",
            "Handshake verified.",
            "Token extracted: 0x9A4F...",
            "Bypassing WAF ruleset...",
            "Injection point found: /api/v1/query",
            "Payload delivery: SUCCESS",
            "Escalating privileges...",
            "Session established.",
            "Analyzing network topology...",
            "Lateral movement detected.",
        ];

        function addLog() {
            if (!logContainer) return;
            const msg = logs[Math.floor(Math.random() * logs.length)];
            const div = document.createElement('div');
            div.className = "mb-1";
            div.textContent = `> ${msg}`;
            logContainer.appendChild(div);
            logContainer.scrollTop = logContainer.scrollHeight;
            
            // Keep list length manageable
            if(logContainer.children.length > 8) {
                logContainer.removeChild(logContainer.firstChild);
            }
        }
        // Add random logs occasionally
        setInterval(addLog, 2500);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full -z-10 bg-cover bg-center h-1/4 brightness-200 saturate-200" data-alpha-mask="100" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/892780a5-0be7-4a11-9b46-5c695c16ac2e_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)'}}></div>

<div className="red-team-border"></div>

<div className="noise-overlay"></div>
<div className="scanlines"></div>
<div className="fixed inset-0 pointer-events-none grid-overlay z-0"></div>

<div className="fixed inset-0 z-0 opacity-60 md:opacity-100 pointer-events-none" id="canvas-container"></div>

<div className="relative z-10 w-full flex flex-col min-h-screen">

<header className="fixed flex md:p-10 vellum-glass md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none animate-fade-in transition-all duration-300 z-50 pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 items-start justify-between">
<div className="flex flex-col gap-1.5 gap-x-1.5 gap-y-1.5">
<div className="flex items-center gap-3">
</div>
<div className="flex items-center gap-2 pl-[3.25rem]">
<div className="h-px w-6 bg-cyber/40"></div>
</div>
</div>
<nav className="hidden md:flex items-center gap-10">
<a className="font-mono text-[11px] hover:text-cyber transition-colors uppercase tracking-[0.2em] font-medium font-sans text-zinc-500" href="#roadmap" style={{}}>Roadmap</a>
<a className="font-mono text-[11px] hover:text-cyber transition-colors uppercase tracking-[0.2em] font-medium font-sans text-zinc-500" href="#faq" style={{}}>FAQ</a>
<a className="font-serif italic text-lg px-7 py-2 border hover:border-cyber transition-colors text-ink rounded-full bg-paper/60 hover:bg-paper/90 backdrop-blur-sm font-sans border-zinc-200" href="#contact" style={{}}>
                    Book a Meeting
                </a>
</nav>
</header>

<section className="min-h-screen flex flex-col md:px-12 md:pt-0 pt-32 pr-6 pl-6 relative justify-center">
<div className="flex flex-col lg:flex-row lg:items-center w-full max-w-7xl mr-auto ml-auto relative items-center">

<div className="lg:w-1/2 opacity-0 w-full z-20 translate-y-16 animate-fade-in" style={{animationDelay: '0.3s', position: 'relative'}}>
<div className="flex items-center gap-4 mb-8">
<div className="h-px w-12 bg-cyber shadow-[0_0_8px_rgba(225,29,72,0.6)]"></div>
<span className="font-mono text-[11px] text-cyber uppercase tracking-[0.25em] font-semibold font-sans">Offensive Security</span>
<span className="font-mono text-[11px] uppercase tracking-widest font-sans text-zinc-400" style={{}}>• Confidential by default</span>
</div>
<h1 className="md:text-7xl lg:text-[5.5rem] text-ink leading-[1] text-glow text-5xl font-light tracking-tighter font-newsreader mix-blend-multiply">
<span className="decipher-target" data-value="Enterprise Penetration">Enterprise Penetration</span>
<span className="font-light text-zinc-500/90 font-newsreader ml-2 decipher-target" data-value="Testing">Testing</span>
</h1>
<h2 className="mt-8 text-lg md:text-xl font-normal max-w-xl leading-relaxed font-sans text-zinc-600" style={{}}>
                        Red Team–led assessments with an executive-ready reporting workflow. We identify the breach before it happens.
                    </h2>
<div className="mt-8 flex flex-wrap items-center gap-4 max-w-lg border-l-2 border-cyber/20 pl-5 py-1">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-mono font-semibold bg-cyber/5 text-cyber tracking-wider border border-cyber/10 font-sans">RED TEAM</span>
<p className="font-mono text-[11px] font-sans text-zinc-500" style={{}}>
                            Partnered with Positive Technologies — 300+ specialists.
                        </p>
</div>
<div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">

<a className="group btn-shimmer relative flex items-center gap-3 bg-ink text-paper pl-7 pr-6 py-3.5 rounded-sm hover:bg-cyber transition-all duration-200 shadow-xl hover:shadow-[0_0_25px_rgba(225,29,72,0.3)] will-change-transform" href="#contact" id="magnetic-btn">
<span className="font-mono text-[11px] tracking-widest uppercase font-semibold font-sans relative z-10">Book a Meeting</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="hidden sm:block h-px w-12 bg-zinc-300" style={{}}></div>
<a className="font-serif italic text-lg hover:text-ink transition-colors border-b border-transparent hover:border-cyber/50 pb-0.5 font-sans text-zinc-500" href="#roadmap" style={{}}>
                            View Process
                        </a>
</div>
</div>

<div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
<div className="relative w-full max-w-[24rem] vellum-glass rounded-sm border shadow-2xl backdrop-blur-2xl overflow-hidden group hover:border-cyber/30 transition-colors duration-500 border-zinc-300/60" style={{}}>

<div className="flex items-center justify-between px-5 py-3.5 border-b bg-white/40 border-zinc-200/60" style={{}}>
<div className="flex items-center gap-2.5">
<svg className="lucide lucide-terminal w-4 h-4 text-neutral-400" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
<span className="font-mono text-[10px] font-bold text-ink uppercase tracking-widest font-sans">Red Team Console</span>
</div>
<div className="flex items-center gap-2">
<span className="font-mono text-[9px] text-cyber tracking-[3px] font-bold font-sans">████<span className="opacity-30 font-sans">░</span></span>
</div>
</div>

<div className="p-5 grid grid-cols-1 gap-3.5">

<div className="flex items-center justify-between border-b pb-2 border-zinc-100" style={{}}>
<span className="font-mono text-[9px] uppercase tracking-widest font-medium font-sans text-zinc-500" style={{}}>ENGAGEMENT</span>
<span className="font-mono text-[9px] text-cyber font-bold uppercase bg-cyber/5 px-2 py-0.5 rounded border border-cyber/10 tracking-wider font-sans">ARMED</span>
</div>

<div className="flex items-center justify-between border-b pb-2 border-zinc-100" style={{}}>
<span className="font-mono text-[9px] uppercase tracking-widest font-medium font-sans text-zinc-500" style={{}}>ROE STATUS</span>
<span className="font-mono text-[9px] text-ink font-bold uppercase tracking-wider font-sans">APPROVED</span>
</div>

<div className="flex items-center justify-between border-b pb-2 border-zinc-100" style={{}}>
<span className="font-mono text-[9px] uppercase tracking-widest font-medium font-sans text-zinc-500" style={{}}>SCOPE</span>
<span className="font-mono text-[9px] text-ink font-bold uppercase tracking-wider font-sans">CONFIRMED</span>
</div>

<div className="flex items-center justify-between pb-1">
<span className="font-mono text-[9px] uppercase tracking-widest font-medium font-sans text-zinc-500" style={{}}>VALIDATION</span>
<span className="font-mono text-[9px] text-ink font-bold uppercase tracking-wider font-sans">MANUAL</span>
</div>
</div>

<div className="bg-[#0A0A0A] border-t p-4 h-36 relative overflow-hidden flex flex-col justify-end border-zinc-200/50" style={{}}>
<div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')] opacity-10"></div>
<div className="font-mono text-[10px] leading-relaxed console-scroll overflow-y-auto text-zinc-400" id="console-logs" style={{}}><div className="mb-1 font-sans">&gt; Session established.</div><div className="mb-1 font-sans">&gt; Injection point found: /api/v1/query</div><div className="mb-1 font-sans">&gt; Injection point found: /api/v1/query</div><div className="mb-1 font-sans">&gt; Escalating privileges...</div><div className="mb-1 font-sans">&gt; Escalating privileges...</div><div className="mb-1 font-sans">&gt; Token extracted: 0x9A4F...</div><div className="mb-1 font-sans">&gt; Injection point found: /api/v1/query</div><div className="mb-1 font-sans">&gt; Session established.</div><div className="mb-1 font-sans">&gt; Session established.</div><div className="mb-1 font-sans">&gt; Token extracted: 0x9A4F...</div></div>
<div className="flex items-center gap-1.5 mt-2">
<span className="text-cyber font-mono text-[11px] font-bold font-sans">&gt;</span>
<span className="w-2 h-4 bg-cyber animate-blink"></span>
</div>
</div>

<div className="px-4 py-2.5 border-t bg-zinc-50/80 border-zinc-200/50" style={{}}>
<div className="flex items-center justify-between">
<span className="font-mono text-[9px] font-medium font-sans text-zinc-500" style={{}}>REPORT GENERATION: PENDING</span>
<span className="font-mono text-[8px] opacity-60 font-sans text-zinc-400" style={{}}>NO CLIENT DATA</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute bottom-12 right-12 w-[280px] vellum-glass rounded-sm animate-fade-in opacity-0 transform scale-95 origin-bottom-right z-30 shadow-2xl" style={{animationDelay: '0.6s'}}>
<div className="border-b px-5 py-3.5 flex justify-between items-center bg-yellow/20 border-zinc-200/60" style={{}}>
<span className="font-serif italic text-lg text-ink font-medium font-sans">Visual Calibration</span>
<div className="w-2 h-2 rounded-full bg-green-500/50 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
</div>
<div className="pt-5 pr-5 pb-5 pl-5 space-y-5">
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono tracking-widest uppercase font-medium text-zinc-500" style={{}}>
<span className="font-sans">Network Noise</span>
</div>
<input className="" id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.6"/>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono tracking-widest uppercase font-medium text-zinc-500" style={{}}>
<span className="font-sans">Scanning Density</span>
</div>
<input className="" id="input-detail" max="2.0" min="0.5" step="0.1" type="range" value="0.9"/>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-mono text-[10px] uppercase tracking-widest font-medium font-sans text-zinc-400" style={{}}>Mode</span>
<div className="flex gap-2.5">
<button className="w-3.5 h-3.5 rounded-full bg-[#121212] hover:ring-1 hover:ring-offset-1 transition-all color-btn hover:ring-zinc-300" data-color="#121212" style={{}}></button>
<button className="w-3.5 h-3.5 hover:ring-1 hover:ring-offset-1 hover:ring-cyber transition-all color-btn bg-[#E11D48] rounded-full shadow-[0_0_8px_rgba(225,29,72,0.5)]" data-color="#E11D48"></button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-16 border-y bg-paper/50 backdrop-blur-sm overflow-hidden relative z-10 border-zinc-200/40" style={{}}>
<div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
<h3 className="text-2xl font-newsreader font-light text-zinc-400" style={{}}>Trusted By</h3>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-20 group-hover:[animation-play-state:paused] opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>CLIENT I</span>
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>Global Corp</span>
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>FINANCE</span>
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>Construct</span>
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>ENERGY</span>
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>TechSystems</span>
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>BahrainGov</span>
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>RetailGrp</span>
<span className="text-3xl hover:text-cyber transition-colors cursor-default tracking-tight font-newsreader font-light text-zinc-400" style={{}}>LOGISTICS</span>
</div>
<div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-paper to-transparent z-10"></div>
<div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-paper to-transparent z-10"></div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-yellow/20 border-b backdrop-blur-sm relative z-10 border-zinc-200/50" style={{}}>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber/30 to-transparent"></div>
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 text-center md:text-left">
<h2 className="text-4xl md:text-5xl text-ink mb-6 tracking-tight font-newsreader font-light" style={{}}>Enterprise Engagement</h2>
<p className="text-2xl mb-8 leading-snug font-newsreader font-light text-zinc-600" style={{}}>
                        No public rates. Pricing is tailored to scope and complexity.
                    </p>
<div className="flex flex-col items-start gap-3 text-sm font-medium text-zinc-500" style={{}}>
<div className="flex items-center gap-2.5">
<div className="p-0.5 rounded-full bg-cyber/10 text-cyber"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-sans">Custom Scope Definition</span>
</div>
<div className="flex items-center gap-2.5">
<div className="p-0.5 rounded-full bg-cyber/10 text-cyber"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-sans">Black / Grey / White Box</span>
</div>
</div>
</div>

<div className="md:w-1/2 w-full">
<div className="vellum-glass p-10 rounded-sm border shadow-xl text-center md:text-left relative overflow-hidden border-zinc-300" style={{}}>
<div className="absolute -top-10 -right-10 w-32 h-32 bg-cyber/5 rounded-full blur-3xl"></div>
<p className="text-2xl text-ink mb-6 relative z-10 font-newsreader font-light" style={{}}>"Security is a process, not a product."</p>
<p className="font-normal text-base leading-7 relative z-10 font-sans text-zinc-600" style={{}}>
                            We integrate seamlessly with your SOC and internal teams to ensure every finding is actionable, reproducible, and impactful.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-4xl mx-auto w-full relative z-10" id="roadmap">
<div className="text-center mb-20">
<h2 className="text-5xl text-ink tracking-tight font-newsreader font-light" style={{}}>Your Roadmap</h2>
<div className="h-px w-16 bg-cyber mx-auto mt-6"></div>
</div>
<div className="relative pl-8 md:pl-0">

<div className="absolute left-8 md:left-[50%] top-0 bottom-0 w-px transform md:-translate-x-1/2 bg-zinc-200" style={{}}></div>
<div className="space-y-16">

<div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
<div className="order-1 md:w-5/12 md:text-right md:pr-10 pl-8 md:pl-0">
<h4 className="text-2xl text-ink group-hover:text-cyber transition-colors font-newsreader font-light" style={{}}>Book a Meeting with an Expert</h4>
</div>
<div className="order-2 absolute left-[-4px] md:relative md:left-auto flex items-center justify-center w-2.5 h-2.5 rounded-full bg-paper border-2 border-cyber shadow-[0_0_12px_rgba(225,29,72,0.6)] z-10"></div>
<div className="order-3 md:w-5/12 md:pl-10 pl-8 md:pl-0">
<p className="text-[11px] font-mono uppercase tracking-[0.2em] font-medium font-sans text-zinc-400" style={{}}>01 / Initial Contact</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
<div className="order-1 md:w-5/12 md:text-right md:pr-10 pl-8 md:pl-0">
<p className="hidden md:block text-[11px] font-mono uppercase tracking-[0.2em] font-medium font-sans text-zinc-400" style={{}}>02 / Legal</p>
<h4 className="md:hidden text-2xl text-ink font-newsreader font-light" style={{}}>NDA + Scope Confirmation</h4>
</div>
<div className="order-2 absolute left-[-4px] md:relative md:left-auto flex items-center justify-center w-2.5 h-2.5 rounded-full bg-paper border-2 group-hover:border-cyber transition-colors z-10 border-zinc-300" style={{}}></div>
<div className="order-3 md:w-5/12 md:pl-10 pl-8 md:pl-0">
<h4 className="hidden md:block text-2xl text-ink group-hover:text-cyber transition-colors font-newsreader font-light" style={{}}>NDA (if required) + Scope Confirmation</h4>
<p className="md:hidden text-[11px] font-mono uppercase tracking-[0.2em] font-medium mt-1 font-sans text-zinc-400" style={{}}>02 / Legal</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
<div className="order-1 md:w-5/12 md:text-right md:pr-10 pl-8 md:pl-0">
<h4 className="text-2xl text-ink group-hover:text-cyber transition-colors font-newsreader font-light" style={{}}>Questionnaire (shared after meeting)</h4>
</div>
<div className="order-2 absolute left-[-4px] md:relative md:left-auto flex items-center justify-center w-2.5 h-2.5 rounded-full bg-paper border-2 group-hover:border-cyber transition-colors z-10 border-zinc-300" style={{}}></div>
<div className="order-3 md:w-5/12 md:pl-10 pl-8 md:pl-0">
<p className="text-[11px] font-mono uppercase tracking-[0.2em] font-medium font-sans text-zinc-400" style={{}}>03 / Information Gathering</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
<div className="order-1 md:w-5/12 md:text-right md:pr-10 pl-8 md:pl-0">
<p className="hidden md:block text-[11px] font-mono uppercase tracking-[0.2em] font-medium font-sans text-zinc-400" style={{}}>04 / Execution</p>
<h4 className="md:hidden text-2xl text-ink font-newsreader font-light" style={{}}>Testing &amp; Validation</h4>
</div>
<div className="order-2 absolute left-[-4px] md:relative md:left-auto flex items-center justify-center w-2.5 h-2.5 rounded-full bg-paper border-2 group-hover:border-cyber transition-colors z-10 border-zinc-300" style={{}}></div>
<div className="order-3 md:w-5/12 md:pl-10 pl-8 md:pl-0">
<h4 className="hidden md:block text-2xl text-ink group-hover:text-cyber transition-colors font-newsreader font-light" style={{}}>Testing &amp; Validation</h4>
<h4 className="md:hidden text-sm mt-1 font-sans text-zinc-500" style={{}}>(manual confirmation + tool-assisted)</h4>
<p className="md:hidden text-[11px] font-mono uppercase tracking-[0.2em] font-medium mt-2 font-sans text-zinc-400" style={{}}>04 / Execution</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
<div className="order-1 md:w-5/12 md:text-right md:pr-10 pl-8 md:pl-0">
<h4 className="text-2xl text-ink group-hover:text-cyber transition-colors font-newsreader font-light" style={{}}>Reporting + Executive Debrief</h4>
</div>
<div className="order-2 absolute left-[-4px] md:relative md:left-auto flex items-center justify-center w-2.5 h-2.5 rounded-full bg-paper border-2 group-hover:border-cyber transition-colors z-10 border-zinc-300" style={{}}></div>
<div className="order-3 md:w-5/12 md:pl-10 pl-8 md:pl-0">
<p className="text-[11px] font-mono uppercase tracking-[0.2em] font-medium font-sans text-zinc-400" style={{}}>05 / Delivery</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full border-t relative z-10 border-zinc-200/50" style={{}}>
<div className="flex flex-col md:flex-row gap-16 md:gap-32">
<div className="md:w-1/3 sticky top-32 h-fit">
<h2 className="text-5xl md:text-6xl text-ink leading-[0.9] tracking-tighter font-newsreader font-light" style={{}}>What We Do</h2>
<div className="h-px w-20 bg-cyber mt-8 mb-8"></div>
<p className="font-normal text-lg leading-relaxed font-sans text-zinc-500" style={{}}>
                        Comprehensive offensive security assessments tailored to enterprise complexity. We simulate real-world attacks.
                    </p>
</div>

<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-5 group/container" id="cards-grid">

<div className="spotlight-card vellum-glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-500 flex flex-col justify-between">
<div className="relative z-10">
<svg className="lucide lucide-globe w-6 h-6 hover:text-cyber mb-6 transition-colors text-neutral-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<h3 className="text-2xl text-ink mb-3 tracking-tight font-newsreader font-light" style={{}}>External Penetration Testing</h3>
<p className="text-sm font-normal leading-relaxed font-sans text-zinc-500" style={{}}>Perimeter assessment focusing on internet-facing assets and exposed services.</p>
</div>
</div>

<div className="spotlight-card vellum-glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-500 flex flex-col justify-between">
<div className="relative z-10">
<svg className="lucide lucide-network w-6 h-6 hover:text-cyber mb-6 transition-colors text-neutral-400" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
<h3 className="text-2xl text-ink mb-3 tracking-tight font-newsreader font-light" style={{}}>Internal &amp; AD</h3>
<p className="text-sm font-normal leading-relaxed font-sans text-zinc-500" style={{}}>Lateral movement simulation, Active Directory security validation, and privilege escalation.</p>
</div>
</div>

<div className="spotlight-card vellum-glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-500 flex flex-col justify-between">
<div className="relative z-10">
<svg className="lucide lucide-layout w-6 h-6 hover:text-cyber mb-6 transition-colors text-neutral-400" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<h3 className="text-2xl text-ink mb-3 tracking-tight font-newsreader font-light" style={{}}>Web App &amp; API</h3>
<p className="text-sm font-normal leading-relaxed font-sans text-zinc-500" style={{}}>Finding logic flaws, injection points, and authentication bypasses in critical apps.</p>
</div>
</div>

<div className="spotlight-card vellum-glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-500 flex flex-col justify-between">
<div className="relative z-10">
<svg className="lucide lucide-cloud w-6 h-6 hover:text-cyber mb-6 transition-colors text-neutral-400" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<h3 className="text-2xl text-ink mb-3 tracking-tight font-newsreader font-light" style={{}}>Cloud Security</h3>
<p className="text-sm font-normal leading-relaxed font-sans text-zinc-500" style={{}}>AWS, Azure, and config review for cloud-native stacks and container orchestration.</p>
</div>
</div>

<div className="spotlight-card vellum-glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-500 flex flex-col justify-between">
<div className="relative z-10">
<svg className="lucide lucide-wifi w-6 h-6 hover:text-cyber mb-6 transition-colors text-neutral-400" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<h3 className="text-2xl text-ink mb-3 tracking-tight font-newsreader font-light" style={{}}>Wireless Testing</h3>
<p className="text-sm font-normal leading-relaxed font-sans text-zinc-500" style={{}}>On-site assessment of Wi-Fi segregation, encryption, and rogue AP detection.</p>
</div>
</div>

<div className="spotlight-card vellum-glass p-8 rounded-sm hover:-translate-y-1 transition-transform duration-500 flex flex-col justify-between">
<div className="relative z-10">
<svg className="lucide lucide-crosshair w-6 h-6 hover:text-cyber mb-6 transition-colors text-neutral-400" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
<h3 className="text-2xl text-ink mb-3 tracking-tight font-newsreader font-light" style={{}}>Red Team Exercise</h3>
<p className="text-sm font-normal leading-relaxed font-sans text-zinc-500" style={{}}>Full-scope adversarial simulation (TIBER-like) to test people, process, and tech.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t relative z-10 bg-zinc-50/50 border-zinc-200/50" style={{}}>
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h3 className="text-4xl text-ink tracking-tight font-newsreader font-light" style={{}}>What You Get</h3>
<p className="font-normal mt-4 font-sans text-zinc-500" style={{}}>Standard deliverables for every engagement</p>
</div>
<div className="vellum-glass p-10 md:p-12 rounded-sm shadow-sm">
<ul className="grid md:grid-cols-2 gap-x-16 gap-y-8">
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyber/10 flex items-center justify-center text-cyber flex-shrink-0"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-lg font-sans text-zinc-700" style={{}}>Executive summary (Non-technical)</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyber/10 flex items-center justify-center text-cyber flex-shrink-0"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-lg font-sans text-zinc-700" style={{}}>Validated findings (Proof of Concept)</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyber/10 flex items-center justify-center text-cyber flex-shrink-0"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-lg font-sans text-zinc-700" style={{}}>Risk-ranked remediation roadmap</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyber/10 flex items-center justify-center text-cyber flex-shrink-0"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-lg font-sans text-zinc-700" style={{}}>Evidence pack + attack-path narrative</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyber/10 flex items-center justify-center text-cyber flex-shrink-0"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-lg font-sans text-zinc-700" style={{}}>Optional re-test validation</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-cyber/10 flex items-center justify-center text-cyber flex-shrink-0"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-lg font-sans text-zinc-700" style={{}}>Direct access to technical lead</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 border-t relative z-10 bg-zinc-50 border-zinc-200" style={{}}>
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<h4 className="font-mono text-[10px] uppercase tracking-widest font-bold mb-6 font-sans text-zinc-500" style={{}}>Tools &amp; Capabilities</h4>
<ul className="font-sans font-normal text-base space-y-3 text-zinc-700" style={{}}>
<li className="font-sans">• PT Application Inspector</li>
<li className="font-sans">• MaxPatrol VM</li>
<li className="font-sans">• MaxPatrol SIEM / PT NAD (where applicable)</li>
<li className="font-sans">• PT Sandbox / MultiScanner</li>
</ul>
<div className="mt-6 pt-6 border-t border-zinc-200" style={{}}>
<p className="text-[11px] font-mono font-sans text-zinc-400" style={{}}>Full details shared under NDA based on client requirements.</p>
<p className="text-[11px] font-mono font-sans text-zinc-400" style={{}}>Critical findings are manually validated to reduce false positives.</p>
</div>
</div>

<div className="vellum-glass p-8 border-l-4 border-l-cyber rounded-r-sm">
<h4 className="text-3xl text-ink mb-4 tracking-tight font-newsreader font-light" style={{}}>Questionnaire</h4>
<p className="font-normal text-base mb-6 leading-relaxed font-sans text-zinc-600" style={{}}>
                        The official scoping questionnaire is shared after the expert meeting (and NDA if required).
                    </p>
<p className="font-mono text-[10px] uppercase tracking-widest text-cyber font-semibold font-sans">
                        This protects confidentiality and ensures correct scope definition.
                    </p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 flex justify-center w-full relative z-10" id="contact">
<div className="vellum-glass rounded-sm w-full max-w-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">

<div className="absolute inset-0 pointer-events-none opacity-20 grid-overlay z-0"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-10">
<h2 className="text-4xl md:text-5xl text-ink tracking-tight font-newsreader font-light" style={{}}>Request a Meeting</h2>
<div className="w-3 h-3 rounded-full bg-cyber animate-pulse shadow-[0_0_12px_rgba(225,29,72,0.8)]"></div>
</div>
<p className="text-base mb-10 max-w-lg font-sans text-zinc-500" style={{}}>
                        A short Zoom call to confirm scope, timelines, and engagement model. We prioritize enterprise clients.
                    </p>
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest font-bold font-sans text-zinc-500" style={{}}>Name</label>
<input placeholder="Full Name" type="text"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest font-bold font-sans text-zinc-500" style={{}}>Email</label>
<input className="" placeholder="work@company.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest font-bold font-sans text-zinc-500" style={{}}>Company</label>
<input placeholder="Organization Name" type="text"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest font-bold font-sans text-zinc-500" style={{}}>Role/Title</label>
<input className="" placeholder="Job Title" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest font-bold font-sans text-zinc-500" style={{}}>Country</label>
<input placeholder="Bahrain / GCC / Other" type="text"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest font-bold font-sans text-zinc-500" style={{}}>Meeting Window</label>
<select className="w-full bg-transparent border-b py-2.5 text-sm font-normal focus:border-ink outline-none border-zinc-300" style={{}}>
<option className="font-sans">This Week</option>
<option className="font-sans">Next Week</option>
<option className="font-sans">ASAP</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="font-mono text-[10px] uppercase tracking-widest font-bold font-sans text-zinc-500" style={{}}>What you want tested</label>
<textarea className="py-2" placeholder="Brief description of assets or objectives..." rows="2"></textarea>
</div>
<div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<button className="w-full md:w-auto bg-ink text-paper px-10 py-4 rounded-sm hover:bg-cyber transition-colors duration-300 font-mono text-[11px] uppercase tracking-widest font-semibold shadow-xl hover:shadow-[0_0_25px_rgba(225,29,72,0.4)] font-sans" type="button">
                                Request Meeting
                            </button>
<span className="font-serif italic text-base font-sans text-zinc-400" style={{}}>We respond within 1 business day.</span>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-4xl mx-auto w-full border-t relative z-10 border-zinc-200/50" id="faq" style={{}}>
<h2 className="text-4xl mb-16 text-center tracking-tight font-newsreader font-light" style={{}}>Frequent Questions</h2>
<div className="space-y-5">

<details className="group vellum-glass rounded-sm">
<summary className="flex justify-between items-center p-6 font-serif text-xl text-ink hover:text-cyber transition-colors italic cursor-pointer font-sans">
                        Difference between a scan and a pen test?
                        <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="px-6 pb-6 pt-0 font-normal text-base leading-relaxed border-t mt-4 font-sans text-zinc-600 border-zinc-200/50" style={{}}>
                        A scan is automated and often produces false positives. A penetration test validates real exploitability, confirms impact, and explains the likely attack path.
                    </div>
</details>

<details className="group vellum-glass rounded-sm">
<summary className="flex justify-between items-center p-6 font-serif text-xl text-ink hover:text-cyber transition-colors italic cursor-pointer font-sans">
                        What types of testing do you provide?
                        <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="px-6 pb-6 pt-0 font-normal text-base leading-relaxed border-t mt-4 font-sans text-zinc-600 border-zinc-200/50" style={{}}>
                        External, internal network/Active Directory, web applications, APIs, cloud environments, wireless (optional), and Red Team exercises (optional), based on scope.
                    </div>
</details>

<details className="group vellum-glass rounded-sm">
<summary className="flex justify-between items-center p-6 font-serif text-xl text-ink hover:text-cyber transition-colors italic cursor-pointer font-sans">
                        How long does an engagement take?
                        <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="px-6 pb-6 pt-0 font-normal text-base leading-relaxed border-t mt-4 font-sans text-zinc-600 border-zinc-200/50" style={{}}>
                        It depends on scope and asset count. Most enterprise engagements run from 1 to 4 weeks including scoping, testing, and reporting.
                    </div>
</details>

<details className="group vellum-glass rounded-sm">
<summary className="flex justify-between items-center p-6 font-serif text-xl text-ink hover:text-cyber transition-colors italic cursor-pointer font-sans">
                        Will testing cause downtime?
                        <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="px-6 pb-6 pt-0 font-normal text-base leading-relaxed border-t mt-4 font-sans text-zinc-600 border-zinc-200/50" style={{}}>
                        We define Rules of Engagement and safe testing windows in advance. We prioritize controlled validation and avoid disruptive actions unless explicitly authorized.
                    </div>
</details>

<details className="group vellum-glass rounded-sm">
<summary className="flex justify-between items-center p-6 font-serif text-xl text-ink hover:text-cyber transition-colors italic cursor-pointer font-sans">
                        Do you require credentials?
                        <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="px-6 pb-6 pt-0 font-normal text-base leading-relaxed border-t mt-4 font-sans text-zinc-600 border-zinc-200/50" style={{}}>
                        Not always. We can operate black-box, grey-box, or white-box depending on objectives, risk tolerance, and the systems in scope.
                    </div>
</details>
</div>
</section>

<footer className="py-16 px-6 md:px-12 border-t bg-paper relative z-20 border-zinc-200/50" style={{}}>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
<div className="space-y-4">
<span className="text-2xl tracking-tighter text-ink block mb-2 font-newsreader font-light" style={{}}>Cypher.</span>
<p className="font-mono text-[10px] uppercase tracking-widest font-medium font-sans text-zinc-400" style={{}}>Authorized testing only.</p>
<p className="font-mono text-[10px] uppercase tracking-widest font-medium font-sans text-zinc-400" style={{}}>© 2024 Cypher Security.</p>
</div>
<div className="text-right space-y-3">
<p className="text-sm font-normal font-sans text-zinc-500" style={{}}>Confidentiality-first. Client references available under NDA.</p>
<div className="flex items-center justify-end gap-5 mt-2">
<span className="font-serif italic text-lg font-sans text-zinc-500" style={{}}>Manama, Bahrain</span>
<div className="w-px h-4 bg-zinc-300" style={{}}></div>
<a className="font-mono text-[11px] text-ink hover:text-cyber transition-colors font-medium font-sans" href="mailto:arm@cyphersecurity.ai">arm@cyphersecurity.ai</a>
</div>
</div>
</div>
</footer>
</div>





    </>
  );
}
