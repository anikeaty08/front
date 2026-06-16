import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
            vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
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
            float noiseFreq = 0.5;
            float noiseAmp = uDistortion;
            float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.1, pos.y * noiseFreq, pos.z * noiseFreq));
            
            vNoise = noise;
            vec3 newPos = pos + (normalize(pos) * noise * noiseAmp);

            float dist = distance(uMouse * 10.0, newPos.xy);
            float interaction = smoothstep(5.0, 0.0, dist);
            newPos += normalize(pos) * interaction * 0.5;

            vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            gl_PointSize = uSize * (24.0 / -mvPosition.z) * (1.0 + noise * 0.5);
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
            
            float alpha = smoothstep(0.5, 0.2, dist) * uOpacity;
            vec3 darkColor = uColor * 0.5;
            vec3 lightColor = uColor * 1.8;
            vec3 finalColor = mix(darkColor, lightColor, vNoise * 0.5 + 0.5);
            
            gl_FragColor = vec4(finalColor, alpha);
        }
    


        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xFDFCF8, 0.035);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 18);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const systemsGroup = new THREE.Group();
        systemsGroup.position.set(4.0, 2.0, -2.0); 
        scene.add(systemsGroup);

        const geometry = new THREE.IcosahedronGeometry(5.0, 30);
        
        const uniforms = {
            uTime: { value: 0 },
            uDistortion: { value: 0.8 }, 
            uSize: { value: 2.7 },       
            uColor: { value: new THREE.Color('#1C1917') },
            uOpacity: { value: 0.8 },
            uMouse: { value: new THREE.Vector2(0, 0) }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent,
            uniforms: uniforms,
            transparent: true,
            depthWrite: false,
            blending: THREE.NormalBlending
        });

        const particles = new THREE.Points(geometry, material);
        systemsGroup.add(particles);

        const lineGroup = new THREE.Group();
        systemsGroup.add(lineGroup);

        function createThinOrbit(radius, rotation) {
            const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
            const points = curve.getPoints(128);
            const geo = new THREE.BufferGeometry().setFromPoints(points);
            const mat = new THREE.LineBasicMaterial({ color: 0x9A3412, transparent: true, opacity: 0.15 });
            const orbit = new THREE.Line(geo, mat);
            orbit.rotation.x = rotation.x;
            orbit.rotation.y = rotation.y;
            lineGroup.add(orbit);
            return orbit;
        }

        const orbits = [
            createThinOrbit(6.0, {x: Math.PI/2, y: 0}),
            createThinOrbit(5.8, {x: Math.PI/3, y: Math.PI/6}),
            createThinOrbit(6.5, {x: Math.PI/1.8, y: Math.PI/4})
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
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            adjustLayout();
        });

        function adjustLayout() {
            if(window.innerWidth < 1024) {
                systemsGroup.position.set(0, 3.0, -6);
                systemsGroup.scale.set(0.8, 0.8, 0.8);
            } else {
                systemsGroup.position.set(6.0, 0, 0);
                systemsGroup.scale.set(1, 1, 1);
            }
        }
        adjustLayout();

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            systemsGroup.position.y = (window.innerWidth < 1024 ? 3.0 : 0) + (scrollY * 0.002);
        });

        function animate() {
            requestAnimationFrame(animate);
            time += 0.01 + (speed * 0.05);

            systemsGroup.rotation.y = time * 0.05;
            systemsGroup.rotation.z = Math.sin(time * 0.1) * 0.05;

            lineGroup.rotation.x = Math.sin(time * 0.05) * 0.2;
            orbits.forEach((orbit, i) => {
                orbit.rotation.z += 0.002 * (i + 1);
            });

            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(0,0,0);

            uniforms.uTime.value = time;
            renderer.render(scene, camera);
        }
        animate();

        // UI Bindings
        const distInput = document.getElementById('input-distortion');
        if(distInput) {
            distInput.addEventListener('input', (e) => {
                uniforms.uDistortion.value = parseFloat(e.target.value);
                document.getElementById('val-distortion').textContent = e.target.value;
            });
            document.getElementById('input-detail').addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                uniforms.uSize.value = val * 3.0; 
                document.getElementById('val-detail').textContent = val;
            });
        }
        
        // Sticky Nav
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('py-2');
            } else {
                nav.classList.remove('py-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(28, 25, 23, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(28, 25, 23, 0.03) 1px, transparent 1px)'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFCF8]/50 to-[#FDFCF8]"></div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none opacity-80" id="canvas-container"><canvas height="852" style={{display: 'block', width: '1318px', height: '1137px'}} width="988"></canvas></div>

<nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/85 backdrop-blur-md border-b border-[#1C1917]/10 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 border border-neutral-800 flex items-center justify-center rounded-sm bg-[#FDFCF8] relative overflow-hidden group-hover:bg-neutral-100 transition-colors">
<div className="absolute w-full h-px bg-neutral-800 rotate-45"></div>
<div className="absolute w-full h-px bg-neutral-800 -rotate-45"></div>
</div>
<span className="text-xl font-normal text-[#1C1917] tracking-tight font-['Cormorant_Garamond',serif]">Fermiy.ai</span>
</a>

<div className="hidden md:flex items-center gap-10">
<div className="relative group h-20 flex items-center">
<button className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 hover:text-[#1C1917] transition-colors uppercase tracking-widest flex items-center gap-1">
                        Platform <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-[#FDFCF8]/95 backdrop-blur-xl border border-[#1C1917]/10 shadow-[0_20px_40px_-4px_rgba(28,25,23,0.05)] rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 py-2">
<a className="block px-6 py-3 font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-500 hover:text-[#1C1917] hover:bg-neutral-100/50 uppercase transition-colors" href="#">Wireframing</a>
<a className="block px-6 py-3 font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-500 hover:text-[#1C1917] hover:bg-neutral-100/50 uppercase transition-colors" href="#">Components</a>
<a className="block px-6 py-3 font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-500 hover:text-[#1C1917] hover:bg-neutral-100/50 uppercase transition-colors" href="#">Design Systems</a>
<a className="block px-6 py-3 font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-500 hover:text-[#1C1917] hover:bg-neutral-100/50 uppercase transition-colors" href="#">Prototyping</a>
<a className="block px-6 py-3 font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-500 hover:text-[#1C1917] hover:bg-neutral-100/50 uppercase transition-colors" href="#">Code Export</a>
</div>
</div>
<a className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 hover:text-[#1C1917] transition-colors uppercase tracking-widest" href="#">Showcase</a>
<a className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 hover:text-[#1C1917] transition-colors uppercase tracking-widest" href="#">Documentation</a>
</div>

<button className="font-['Cormorant_Garamond',serif] italic font-normal text-lg px-6 py-1 border border-neutral-200 hover:border-neutral-800 transition-colors text-[#1C1917] rounded-full hidden md:block">
                Start Generating
            </button>
</div>
</nav>

<main className="relative z-10 flex flex-col w-full">

<section className="relative w-full min-h-screen flex items-center pt-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="relative z-10 w-full max-w-4xl animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-12 bg-[#9A3412]"></div>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-[#9A3412] uppercase tracking-widest">GENERATIVE AI — UI DESIGN</span>
</div>
<h1 className="font-['Cormorant_Garamond',serif] font-light text-5xl md:text-7xl lg:text-8xl text-[#1C1917] leading-none tracking-tight mix-blend-multiply">
                    Agentic AI for<br/>
<span className="italic font-extralight text-neutral-600">Application Design</span>
</h1>
<p className="mt-8 max-w-md font-['Inter',sans-serif] text-sm md:text-base text-neutral-600 font-extralight leading-relaxed">
                    Aura.ai orchestrates and generates your entire user interface — from first wireframe to final code export — ensuring pixel-perfect consistency across your whole product ecosystem.
                </p>
<div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 pointer-events-auto">
<button className="group inline-flex w-fit items-center gap-3 bg-[#1C1917] text-[#FDFCF8] pl-6 pr-5 py-4 rounded-sm hover:bg-[#9A3412] transition-all duration-500 shadow-xl shadow-[#1C1917]/10">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">START DESIGNING</span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden sm:block h-px w-12 bg-neutral-300"></div>
<span className="font-['Cormorant_Garamond',serif] italic font-normal text-lg text-neutral-500 tracking-tight">BETA LIVE — V1.0</span>
</div>
<div className="mt-20 flex flex-col gap-1 opacity-50">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 uppercase tracking-widest">SECTOR: DESIGN TECHNOLOGY</span>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 uppercase tracking-widest">PLATFORM: AURA.AI</span>
</div>
</div>

<div className="pointer-events-auto absolute bottom-12 right-6 md:right-12 w-[300px] bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-[0_20px_40px_-4px_rgba(28,25,23,0.05)] rounded-sm animate-fade-in opacity-0 hidden lg:block" style={{animationDelay: '0.5s'}}>
<div className="border-b border-neutral-200/60 px-5 py-4 flex justify-between items-center bg-white/40">
<span className="font-['Cormorant_Garamond',serif] italic font-normal text-xl text-[#1C1917] tracking-tight">Generative Engine</span>
</div>
<div className="p-6 space-y-8">
<div className="space-y-3">
<div className="flex justify-between font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-500 uppercase">
<span>CREATIVITY</span>
<span id="val-distortion">0.8</span>
</div>
<input id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.8"/>
</div>
<div className="space-y-3">
<div className="flex justify-between font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-500 uppercase">
<span>CONSISTENCY</span>
<span id="val-detail">0.9</span>
</div>
<input id="input-detail" max="2.0" min="0.1" step="0.1" type="range" value="0.9"/>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200/50">
<div className="space-y-2">
<div className="flex justify-between font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-400 uppercase">
<span>COMPONENTS</span>
</div>
<div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden"><div className="h-full bg-[#1C1917] w-[92%]"></div></div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-neutral-400 uppercase">
<span>LAYOUTS</span>
</div>
<div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden"><div className="h-full bg-[#1C1917] w-[88%]"></div></div>
</div>
</div>
<div className="pt-2 flex items-center justify-between">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-neutral-400">AI LAYER</span>
<div className="flex items-center gap-2">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest text-green-600/80">IDLE</span>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-neutral-200/40 relative z-20 bg-[#FDFCF8]/80 backdrop-blur-sm">

<div className="flex flex-col items-center text-center mb-24">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 uppercase tracking-widest mb-10">TRUSTED BY PRODUCT TEAMS AT</span>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
<span className="font-['Inter',sans-serif] text-2xl font-normal tracking-tight">Nexus</span>
<span className="font-['Inter',sans-serif] text-xl font-normal tracking-tight">Quantum</span>
<span className="font-['Cormorant_Garamond',serif] italic font-normal text-2xl tracking-tight">Horizon Systems</span>
<span className="font-['JetBrains_Mono',monospace] text-lg font-light tracking-tight">APEX</span>
</div>
<div className="mt-12 inline-flex items-center gap-3 border border-neutral-300 px-5 py-2 rounded-full bg-white/50">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 uppercase tracking-widest">AS FEATURED IN —</span>
<span className="font-['Cormorant_Garamond',serif] italic font-normal text-lg tracking-tight text-[#1C1917]">Design Review</span>
</div>
</div>

<div className="mb-8">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 uppercase tracking-widest">WHAT DESIGNERS ARE SAYING</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-sm p-8 flex flex-col justify-between min-h-[240px]">
<iconify-icon className="text-3xl text-[#9A3412]/20 mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="font-['Cormorant_Garamond',serif] italic font-normal text-xl md:text-2xl text-[#1C1917] leading-snug mb-8 tracking-tight">"Generated a fully responsive dashboard system in under 10 minutes."</p>
<div className="border-t border-neutral-200/50 pt-4">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-neutral-500">Lead Designer, FinTech</span>
</div>
</div>

<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-sm p-8 flex flex-col justify-between min-h-[240px]">
<iconify-icon className="text-3xl text-[#9A3412]/20 mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="font-['Cormorant_Garamond',serif] italic font-normal text-xl md:text-2xl text-[#1C1917] leading-snug mb-8 tracking-tight">"The code export actually respects our strict internal design tokens."</p>
<div className="border-t border-neutral-200/50 pt-4">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-neutral-500">Front-End Engineer</span>
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-neutral-400 mt-1">SaaS Platform</span>
</div>
</div>

<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-sm p-8 flex flex-col justify-between min-h-[240px]">
<iconify-icon className="text-3xl text-[#9A3412]/20 mb-4" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="font-['Cormorant_Garamond',serif] italic font-normal text-xl md:text-2xl text-[#1C1917] leading-snug mb-8 tracking-tight">"Finally, an AI that understands the structural logic of design systems."</p>
<div className="border-t border-neutral-200/50 pt-4">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-neutral-500">Product Director</span>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 border-y border-neutral-200/50 bg-[#FDFCF8]">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
<div className="mb-16 text-center">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 uppercase tracking-widest border border-neutral-200 px-4 py-1.5 rounded-full bg-white">THE SHIFT</span>
</div>
<div className="flex flex-col md:flex-row relative">

<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200 flex-col items-center justify-center">
<div className="w-8 h-8 rounded-full border border-neutral-200 bg-[#FDFCF8] flex items-center justify-center text-xs font-['JetBrains_Mono',monospace] font-light text-neutral-400">VS</div>
</div>

<div className="w-full md:w-1/2 md:pr-20 pb-16 md:pb-0 opacity-50 grayscale hover:opacity-80 transition-opacity">
<h3 className="font-['Cormorant_Garamond',serif] italic font-light text-4xl text-neutral-500 tracking-tight mb-12">"Today's Reality"</h3>
<div className="grid grid-cols-2 gap-8 mb-10">
<div className="flex items-center gap-4"><iconify-icon className="text-2xl" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon><span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">Manual Drawing</span></div>
<div className="flex items-center gap-4"><iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon><span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">Disconnected UI</span></div>
<div className="flex items-center gap-4"><iconify-icon className="text-2xl" icon="solar:monitor-camera-linear" strokeWidth="1.5"></iconify-icon><span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">Inconsistent Spacing</span></div>
<div className="flex items-center gap-4"><iconify-icon className="text-2xl" icon="solar:documents-linear" strokeWidth="1.5"></iconify-icon><span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">Painful Handoff</span></div>
</div>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-500 leading-relaxed max-w-sm">
                            Pixel pushing. Fragmented components. Repetitive tasks. Developers struggle to interpret static frames into functional code.
                        </p>
</div>

<div className="w-full md:w-1/2 md:pl-20 pt-16 md:pt-0 border-t md:border-t-0 border-neutral-200 relative">
<h3 className="font-['Cormorant_Garamond',serif] italic font-light text-4xl text-[#1C1917] tracking-tight mb-12">"The Aura Layer"</h3>
<div className="grid grid-cols-2 gap-8 mb-10 text-[#1C1917]">
<div className="flex items-center gap-4 text-[#9A3412]"><iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon><span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">Prompt to UI</span></div>
<div className="flex items-center gap-4 text-[#9A3412]"><iconify-icon className="text-2xl" icon="solar:ruler-cross-pen-linear" strokeWidth="1.5"></iconify-icon><span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">Unified Tokens</span></div>
<div className="flex items-center gap-4 text-[#9A3412]"><iconify-icon className="text-2xl" icon="solar:smartphone-update-linear" strokeWidth="1.5"></iconify-icon><span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">Auto Responsive</span></div>
<div className="flex items-center gap-4 text-[#9A3412]"><iconify-icon className="text-2xl" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon><span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">Instant Export</span></div>
</div>
<p className="font-['Inter',sans-serif] font-extralight text-[#1C1917] leading-relaxed max-w-sm">
                            Generative systems. Synchronized data. Every component logically structured. Every layout ready for production code.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 max-w-screen-2xl mx-auto relative z-10 bg-[#FDFCF8]/90 backdrop-blur-md">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 uppercase tracking-widest mb-8">WHY AURA.AI</span>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<h2 className="font-['Cormorant_Garamond',serif] font-light text-5xl md:text-7xl text-[#1C1917] leading-none tracking-tight">
                    One Prompt.<br/>
<span className="italic font-light text-neutral-500">Endless Variations.</span>
</h2>
<div className="flex items-center">
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 text-lg leading-relaxed max-w-lg">
                        Aura.ai doesn't just draw rectangles. It sits as an intelligent orchestration layer — understanding design systems, generating accessible markup, and outputting clean framework code without manual intervention.
                    </p>
</div>
</div>

<div className="w-full border border-neutral-200/60 bg-white/40 rounded-sm p-8 mb-20 flex flex-col md:flex-row justify-between items-center gap-8 text-center bg-[#FDFCF8]/85 backdrop-blur-md shadow-sm">
<div className="w-full md:w-1/3 p-6 border border-neutral-200 bg-[#FDFCF8] shadow-sm">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 uppercase tracking-widest mb-2">INPUT LAYER</span>
<span className="font-['Cormorant_Garamond',serif] italic font-normal text-2xl tracking-tight">Idea &amp; Tokens</span>
</div>
<div className="flex flex-col items-center text-[#9A3412]">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest mb-2 opacity-60">GENERATES</span>
<iconify-icon className="text-3xl rotate-90 md:rotate-0" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full md:w-1/3 p-8 bg-[#1C1917] text-[#FDFCF8] shadow-xl rounded-sm transform scale-105">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-[#FDFCF8]/60 uppercase tracking-widest mb-2">INTELLIGENCE</span>
<span className="font-['Cormorant_Garamond',serif] italic font-normal text-3xl tracking-tight">Aura Engine</span>
</div>
<div className="flex flex-col items-center text-[#9A3412]">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest mb-2 opacity-60">EXPORTS</span>
<iconify-icon className="text-3xl rotate-90 md:rotate-0" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-full md:w-1/3 p-6 border border-neutral-200 bg-[#FDFCF8] shadow-sm">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 uppercase tracking-widest mb-2">OUTPUT</span>
<span className="font-['Cormorant_Garamond',serif] italic font-normal text-2xl tracking-tight">React / Vue / Figma</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 p-8 border-t-2 border-t-neutral-800">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-200">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400">01</span>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-[#1C1917] uppercase tracking-widest">TOKEN-AWARE</span>
</div>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 leading-relaxed text-sm">Adapts seamlessly to your existing brand guidelines, spacing scales, and typography rules in real-time.</p>
</div>
<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 p-8 border-t-2 border-t-neutral-800">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-200">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400">02</span>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-[#1C1917] uppercase tracking-widest">AGENTIC LOGIC</span>
</div>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 leading-relaxed text-sm">Autonomous decision-making that resolves complex UX patterns, edge cases, and responsive reflowing.</p>
</div>
<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 p-8 border-t-2 border-t-neutral-800">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-200">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400">03</span>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-[#1C1917] uppercase tracking-widest">PRODUCTION CODE</span>
</div>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 leading-relaxed text-sm">Generates clean, semantic, and accessible markup paired with standard framework components.</p>
</div>
</div>
</section>

<section className="w-full py-32 border-y border-neutral-200/50 bg-[#FDFCF8]/50 relative overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 text-center mb-20">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 uppercase tracking-widest mb-6 block">THE PLATFORM</span>
<h2 className="font-['Cormorant_Garamond',serif] font-light text-5xl md:text-6xl text-[#1C1917] leading-none tracking-tight">
                    Five Pillars.<br/>
<span className="italic font-light text-neutral-500">One Cohesive Product.</span>
</h2>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-neutral-200 rounded-full items-center justify-center bg-[#FDFCF8]/80 backdrop-blur-md shadow-2xl z-0">
<div className="w-48 h-48 border border-neutral-200/50 rounded-full flex flex-col items-center justify-center relative bg-white">
<div className="absolute inset-0 rounded-full border border-[#9A3412]/20 animate-ping" style={{animationDuration: '4s'}}></div>
<span className="font-['Cormorant_Garamond',serif] font-normal text-2xl tracking-tight text-[#1C1917] relative z-10">Aura.ai</span>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 tracking-widest mt-2 relative z-10">CORE</span>
</div>
</div>

<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-sm p-8 relative z-10 md:col-start-1 md:row-start-1 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-['JetBrains_Mono',monospace] font-light text-xs">01</span></div>
<h4 className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-[#1C1917] mb-4 pb-4 border-b border-neutral-200/50">WIREFRAMING</h4>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 text-sm">Rapid low-fidelity ideation to validate complex user flows instantly before committing to visual styles.</p>
</div>

<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-sm p-8 relative z-10 md:col-start-3 md:row-start-1 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-['JetBrains_Mono',monospace] font-light text-xs">02</span></div>
<h4 className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-[#1C1917] mb-4 pb-4 border-b border-neutral-200/50">COMPONENTS</h4>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 text-sm">Auto-generation of interactive UI elements with comprehensive states, variants, and accessibility traits.</p>
</div>

<div className="hidden md:block col-start-2 row-start-2"></div>

<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-sm p-8 relative z-10 md:col-start-1 md:row-start-2 md:mt-12 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-['JetBrains_Mono',monospace] font-light text-xs">03</span></div>
<h4 className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-[#1C1917] mb-4 pb-4 border-b border-neutral-200/50">DESIGN SYSTEMS</h4>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 text-sm">Centralized source of truth maintaining visual harmony across colors, typography, and spacing metrics.</p>
</div>

<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-sm p-8 relative z-10 md:col-start-3 md:row-start-2 md:mt-12 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-['JetBrains_Mono',monospace] font-light text-xs">04</span></div>
<h4 className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-[#1C1917] mb-4 pb-4 border-b border-neutral-200/50">PROTOTYPING</h4>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 text-sm">Clickable, high-fidelity prototypes generated in seconds to test interactions and gather stakeholder feedback.</p>
</div>

<div className="bg-[#FDFCF8]/85 backdrop-blur-md border border-[#1C1917]/10 shadow-sm p-8 relative z-10 md:col-start-2 md:row-start-3 md:mt-8 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-['JetBrains_Mono',monospace] font-light text-xs">05</span></div>
<h4 className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-[#1C1917] mb-4 pb-4 border-b border-neutral-200/50">CODE EXPORT</h4>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 text-sm">Zero-config export to React, Vue, or raw HTML/Tailwind, mirroring your exact architectural preferences.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-[#FDFCF8]">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 uppercase tracking-widest mb-16">INDUSTRY METRICS</span>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="flex flex-col border border-neutral-200 p-10 md:p-16 relative bg-white/50">
<div className="absolute top-0 left-0 w-full h-1 bg-neutral-800"></div>
<iconify-icon className="text-4xl text-neutral-300 mb-8" icon="solar:documents-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Cormorant_Garamond',serif] italic font-light text-5xl md:text-6xl text-[#1C1917] tracking-tight leading-none mb-8">"The End of Manual UI Design"</h3>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light uppercase tracking-widest text-neutral-500 mb-10 block">— Tech Design Quarterly</span>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 text-lg leading-relaxed mt-auto border-t border-neutral-200 pt-8">
                        Aura.ai is setting a new baseline for digital product creation — the first generative platform to successfully cross the chasm from static image generation to functional, code-ready interfaces.
                    </p>
</div>

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-3 mb-12 border border-neutral-200 px-4 py-1.5 rounded-full w-fit">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-600 uppercase tracking-widest">LIVE DATA — ENTERPRISE TEAMS</span>
</div>
<div className="space-y-12">
<div className="flex flex-col border-b border-neutral-200 pb-8">
<span className="font-['Cormorant_Garamond',serif] font-normal text-6xl text-[#1C1917] tracking-tight mb-2">10x</span>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 uppercase tracking-widest">Faster iteration cycle from brief to prototype</span>
</div>
<div className="flex flex-col border-b border-neutral-200 pb-8">
<span className="font-['Cormorant_Garamond',serif] font-normal text-6xl text-[#1C1917] tracking-tight mb-2">100%</span>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 uppercase tracking-widest">Compliance with internal design tokens</span>
</div>
<div className="flex flex-col">
<span className="font-['Cormorant_Garamond',serif] font-normal text-6xl text-[#1C1917] tracking-tight mb-2">0</span>
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 uppercase tracking-widest">Friction during developer handoff</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-neutral-200/50 bg-[#FDFCF8]/80 backdrop-blur-sm">
<div className="mb-16">
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 uppercase tracking-widest mb-6">CASE STUDIES</span>
<h2 className="font-['Cormorant_Garamond',serif] font-light text-5xl md:text-6xl text-[#1C1917] leading-none tracking-tight">
                    The Architecture of<br/>
<span className="italic font-light text-neutral-500">Modern Software</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative w-full aspect-video bg-neutral-200 border border-neutral-300 overflow-hidden mb-4 rounded-sm flex items-center justify-center">
<div className="absolute inset-0 bg-[#1C1917]/5 group-hover:bg-[#1C1917]/10 transition-colors z-10"></div>
<img alt="Code Interface" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur border border-neutral-200 flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-[#1C1917] translate-x-0.5" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-[#1C1917] uppercase tracking-widest mb-1">"The FinTech Scale-up"</span>
<span className="block font-['Inter',sans-serif] font-extralight text-sm text-neutral-500">Generated a full trading dashboard in days.</span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-video bg-neutral-200 border border-neutral-300 overflow-hidden mb-4 rounded-sm flex items-center justify-center">
<div className="absolute inset-0 bg-[#1C1917]/5 group-hover:bg-[#1C1917]/10 transition-colors z-10"></div>
<img alt="Data Visualization UI" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur border border-neutral-200 flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-[#1C1917] translate-x-0.5" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-[#1C1917] uppercase tracking-widest mb-1">"Enterprise Migration"</span>
<span className="block font-['Inter',sans-serif] font-extralight text-sm text-neutral-500">Updating 500+ legacy screens automatically.</span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-video bg-neutral-200 border border-neutral-300 overflow-hidden mb-4 rounded-sm flex items-center justify-center">
<div className="absolute inset-0 bg-[#1C1917]/5 group-hover:bg-[#1C1917]/10 transition-colors z-10"></div>
<img alt="Design System Tools" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur border border-neutral-200 flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-[#1C1917] translate-x-0.5" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<span className="block font-['JetBrains_Mono',monospace] text-xs font-light text-[#1C1917] uppercase tracking-widest mb-1">"Agency Workflow"</span>
<span className="block font-['Inter',sans-serif] font-extralight text-sm text-neutral-500">From client brief to interactive prototype.</span>
</div>
</div>
</section>

<section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center py-32 px-6 border-t border-neutral-200 relative bg-[#FDFCF8] z-20">
<div className="absolute inset-0 pointer-events-none opacity-50 z-0" style={{backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(28, 25, 23, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(28, 25, 23, 0.03) 1px, transparent 1px)'}}></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<div className="w-12 h-12 border border-neutral-800 flex items-center justify-center rounded-sm bg-white relative overflow-hidden mb-10">
<div className="absolute w-full h-px bg-neutral-800 rotate-45"></div>
<div className="absolute w-full h-px bg-neutral-800 -rotate-45"></div>
</div>
<h2 className="font-['Cormorant_Garamond',serif] font-light text-5xl md:text-7xl text-[#1C1917] leading-none tracking-tight mb-8">
                    Ready to Generate<br/>
<span className="italic font-light text-neutral-500">Your Next Product?</span>
</h2>
<p className="font-['Inter',sans-serif] font-extralight text-neutral-600 text-lg mb-12 max-w-lg">
                    Join the design and engineering teams already building the future. Experience Aura.ai live.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<button className="group flex items-center justify-center gap-3 bg-[#1C1917] text-[#FDFCF8] px-8 py-4 rounded-sm hover:bg-[#9A3412] transition-all duration-500 w-full sm:w-auto shadow-xl shadow-[#1C1917]/10">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light tracking-widest uppercase">REQUEST ACCESS</span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-500 hover:text-[#1C1917] transition-colors uppercase tracking-widest border-b border-transparent hover:border-[#1C1917] pb-1" href="#">
                        Read the Docs
                    </a>
</div>
</div>

<div className="absolute bottom-8 w-full text-center opacity-60">
<span className="font-['JetBrains_Mono',monospace] text-xs font-light text-neutral-400 uppercase tracking-widest">AURA.AI — GENERATIVE UI INTELLIGENCE</span>
</div>
</section>
</main>





    </>
  );
}
