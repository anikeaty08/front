import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
paper: '#FDFCF8',
ink: '#1C1917',
sepia: '#78350F',
stone: '#E7E5E4',
rust: '#9A3412',
dark: '#0C0A09'
},
animation: {
'fade-in': 'fadeIn 1.2s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
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
        // Simplex noise function
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
    


        lucide.createIcons();

        // --- MAIN HERO SCENE ---
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
        systemsGroup.position.x = 4.0; 
        scene.add(systemsGroup);

        const geometry = new THREE.IcosahedronGeometry(4.5, 30);
        
        const uniforms = {
            uTime: { value: 0 },
            uDistortion: { value: 0.6 },
            uSize: { value: 2.5 },
            uColor: { value: new THREE.Color('#1C1917') },
            uOpacity: { value: 0.4 },
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
            const mat = new THREE.LineBasicMaterial({ color: 0x78350F, transparent: true, opacity: 0.15 });
            const orbit = new THREE.Line(geo, mat);
            orbit.rotation.x = rotation.x; orbit.rotation.y = rotation.y;
            lineGroup.add(orbit);
            return orbit;
        }

        const orbits = [
            createThinOrbit(5.5, {x: Math.PI/2, y: 0}),
            createThinOrbit(5.2, {x: Math.PI/3, y: Math.PI/6}),
            createThinOrbit(6.0, {x: Math.PI/1.8, y: Math.PI/4})
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
            if(window.innerWidth < 768) {
                systemsGroup.position.set(0, 4.0, -10);
                systemsGroup.scale.set(0.6, 0.6, 0.6);
            } else {
                systemsGroup.position.set(6.0, 0, -2);
                systemsGroup.scale.set(1, 1, 1);
            }
        }
        adjustLayout();

        // --- ADDITIONAL 3D ELEMENTS ---
        const miniScenes = [];

        function initMiniScene(canvasId, type) {
            const cvs = document.getElementById(canvasId);
            if(!cvs) return;
            const renderer = new THREE.WebGLRenderer({ canvas: cvs, alpha: true, antialias: true });
            renderer.setPixelRatio(1); 
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, cvs.clientWidth/cvs.clientHeight, 0.1, 100);
            camera.position.z = 5;

            let mesh;
            if (type === 'knot') {
                const geo = new THREE.TorusKnotGeometry(1.2, 0.15, 100, 16);
                const mat = new THREE.MeshBasicMaterial({ color: 0x9A3412, wireframe: true, transparent: true, opacity: 0.3 });
                mesh = new THREE.Mesh(geo, mat);
                scene.add(mesh);
            } else if (type === 'grid') {
                const geo = new THREE.IcosahedronGeometry(1.8, 1);
                const mat = new THREE.MeshBasicMaterial({ color: 0x1C1917, wireframe: true, transparent: true, opacity: 0.15 });
                mesh = new THREE.Mesh(geo, mat);
                scene.add(mesh);
            } else if (type === 'octa') {
                const geo = new THREE.OctahedronGeometry(1.5, 0);
                const mat = new THREE.MeshBasicMaterial({ color: 0x9A3412, wireframe: true });
                mesh = new THREE.Mesh(geo, mat);
                scene.add(mesh);
            } else if (type === 'rings') {
                mesh = new THREE.Group();
                const r1 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.05, 16, 50), new THREE.MeshBasicMaterial({color: 0x78350F, wireframe: true}));
                const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.05, 16, 50), new THREE.MeshBasicMaterial({color: 0x1C1917, wireframe: true}));
                r2.rotation.x = Math.PI/2;
                mesh.add(r1); mesh.add(r2);
                scene.add(mesh);
            }

            miniScenes.push({ renderer, scene, camera, mesh, type });
        }

        // Initialize additional scenes
        initMiniScene('focus-3d', 'knot');
        initMiniScene('insight-3d', 'grid');
        initMiniScene('sol-1-3d', 'octa');
        initMiniScene('sol-2-3d', 'rings');

        function animate() {
            requestAnimationFrame(animate);
            time += 0.01 + (speed * 0.05);

            // Main Hero Animation
            systemsGroup.rotation.y = time * 0.05;
            systemsGroup.rotation.z = Math.sin(time * 0.1) * 0.05;
            lineGroup.rotation.x = Math.sin(time * 0.05) * 0.2;
            orbits.forEach((orbit, i) => { orbit.rotation.z += 0.002 * (i + 1); });
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(0,0,0);
            uniforms.uTime.value = time;
            renderer.render(scene, camera);

            // Mini Scenes Animation
            miniScenes.forEach(m => {
                if(m.mesh) {
                    m.mesh.rotation.y += 0.005;
                    m.mesh.rotation.x += 0.002;
                    if(m.type === 'rings') {
                         m.mesh.children[0].rotation.x += 0.01;
                         m.mesh.children[1].rotation.y += 0.01;
                    }
                }
                m.renderer.render(m.scene, m.camera);
            });
        }
        animate();

        document.getElementById('input-distortion').addEventListener('input', (e) => {
            uniforms.uDistortion.value = parseFloat(e.target.value);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 vellum-glass-strong transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 border border-neutral-800 flex items-center justify-center rounded-sm bg-paper relative overflow-hidden">
<div className="absolute w-full h-[1px] bg-neutral-800 rotate-45"></div>
<div className="absolute w-full h-[1px] bg-neutral-800 -rotate-45"></div>
</div>
<span className="font-serif text-lg tracking-tight text-ink font-medium">State Street</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="font-mono text-xs text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="#thinking">Insights</a>
<a className="font-mono text-xs text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="#solutions">Solutions</a>
<a className="hover:text-ink transition-colors uppercase text-xs text-neutral-500 tracking-widest font-mono" href="/#diversity">About US</a>
<button className="hover:border-neutral-800 hover:bg-paper transition-all text-ink text-base italic font-serif border-neutral-200 border rounded-full pt-1 pr-5 pb-1 pl-5">United States</button>
</nav>
</div>
</header>

<section className="relative w-full min-h-screen overflow-hidden bg-paper">

<div className="absolute inset-0 z-0 opacity-60" id="canvas-container"></div>
<div className="absolute inset-0 pointer-events-none grid-overlay z-0"></div>
<div className="md:pt-48 md:pb-32 flex flex-col md:grid md:grid-cols-12 min-h-screen w-full max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 relative gap-x-12 gap-y-12">
<div className="col-span-9 animate-fade-in">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-12 bg-rust"></div>
<span className="font-mono text-xs text-rust uppercase tracking-[0.2em]">Market Outlook</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.95] tracking-tight mix-blend-multiply mb-8">
                    What to watch <br/>
<span className="italic font-light text-neutral-600">in 2026</span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-neutral-600 font-sans max-w-xl mb-10">Our latest outlook challenges consensus thinking with a signals-first approach. Combining proprietary indicators and AI-enhanced tools, we examine investor behavior, regional risk dynamics and momentum shifts across equities, rates, FX and emerging markets.</p>
<div className="flex gap-x-6 gap-y-6 items-center">
<button className="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500">
<span className="uppercase text-xs tracking-widest font-mono">Learn More</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="absolute bottom-6 right-6 z-40 hidden md:block">
<div className="vellum-glass rounded-sm p-4 w-[240px] opacity-90 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-center mb-3 pb-2 border-b border-neutral-200/50">
<span className="font-serif italic text-sm text-ink">Market Volatility</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="space-y-3">
<div className="">
<div className="flex justify-between text-[9px] font-mono uppercase text-neutral-500 mb-1">
<span>Flux</span>
</div>
<input className="" id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.6"/>
</div>
</div>
</div>
</div>
</section>

<main className="relative z-10 flex flex-col items-center w-full">

<section className="w-full bg-neutral-50 py-24 px-6 border-y border-neutral-200" id="focus">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-2 mb-12">
<div className="w-2 h-2 rounded-full bg-rust animate-pulse"></div>
<h2 className="font-mono text-xs text-rust uppercase tracking-[0.2em]">In focus</h2>
</div>
<div className="bg-white border border-neutral-200 p-0 md:p-0 flex flex-col md:flex-row group hover:shadow-xl transition-shadow duration-500">
<div className="w-full md:w-1/2 aspect-video md:aspect-auto bg-stone/20 relative overflow-hidden border-b md:border-b-0 md:border-r border-neutral-200">

<div className="absolute inset-0 z-0">
<canvas className="w-full h-full opacity-60" id="focus-3d"></canvas>
</div>

<div className="flex relative z-10 w-full h-full pointer-events-none items-center justify-center">
<svg className="opacity-30 group-hover:opacity-60 transition-opacity duration-700" height="200" viewbox="0 0 200 200" width="200">
<circle className="group-hover:scale-110 transition-transform duration-[2s]" cx="100" cy="100" fill="none" r="80" stroke="#78350F" strokeWidth="1"></circle>
</svg>
</div>
</div>
<div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative z-10">
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4">Featured Insight</span>
<h3 className="font-serif text-3xl md:text-4xl text-ink mb-6 tracking-tight">State Street Global Markets: Inflation, Rates and the Dollar</h3>
<p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-8">
                            With inflation showing signs of persistence and global rates shifting, what is the outlook for the US Dollar in 2025? Our latest research dives into the macroeconomic indicators.
                        </p>
<div className="flex items-center gap-2 text-rust group-hover:gap-4 transition-all">
<span className="font-mono text-xs uppercase tracking-widest cursor-pointer">Read more</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full border-neutral-100 border-b pt-24 pr-6 pb-24 pl-6" id="thinking">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<div className="">
<span className="font-mono text-xs text-rust uppercase tracking-widest">Insights</span>
<h2 className="font-serif text-4xl text-ink mt-3 tracking-tight">Our latest thinking</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-neutral-500 hover:text-ink transition-colors pb-1 border-b border-transparent hover:border-neutral-200" href="#">
<span className="font-mono text-xs uppercase tracking-widest">View Archive</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-x-6 gap-y-6">

<div className="lg:col-span-2 group relative flex flex-col justify-between h-full min-h-[400px] bg-neutral-50 border border-neutral-200 p-8 md:p-12 transition-all duration-500 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-100/50 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
<canvas className="w-full h-full" id="insight-3d"></canvas>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<span className="w-2 h-2 rounded-full bg-ink group-hover:scale-125 transition-transform duration-300"></span>
<span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Market Commentary</span>
</div>
<h3 className="md:text-4xl text-ink leading-[1.1] group-hover:text-rust transition-colors duration-300 text-3xl tracking-tight font-serif mb-6">State Street PriceStats signals an inflation shift</h3>
<p className="leading-relaxed text-base font-light text-neutral-600 font-sans max-w-lg mb-8">US inflation softened in December as State Street PriceStats data signalled a renewed disinflationary trend.</p>
</div>
<div className="relative z-10 flex items-center justify-between border-t border-neutral-200 pt-8 mt-auto">
<span className="font-mono text-[10px] uppercase tracking-widest text-ink font-medium">Read Full Report</span>
<div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center group-hover:border-rust group-hover:text-rust transition-all duration-300 bg-white">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full bg-white border border-neutral-200 p-8 transition-all duration-300 hover:border-neutral-400 hover:-translate-y-1">
<div className="mb-auto">
<div className="flex items-center justify-between mb-6">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Private Markets</span>
<iconify-icon className="text-neutral-300 group-hover:text-rust transition-colors" icon="solar:pie-chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-ink leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-neutral-300 text-2xl font-serif mb-4">Institutional Investor Indicators: December 2025</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500 font-sans">A 0.36 basis point rise in risk appetite shows a move from bonds to equities.</p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-2 text-neutral-400 group-hover:text-ink transition-colors">
<span className="font-mono text-[10px] uppercase tracking-widest">Read Article</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col h-full bg-white border border-neutral-200 p-8 transition-all duration-300 hover:border-neutral-400 hover:-translate-y-1">
<div className="mb-auto">
<div className="flex items-center justify-between mb-6">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">ETF Landscape</span>
<iconify-icon className="text-neutral-300 group-hover:text-rust transition-colors" icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<h3 className="text-ink leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-neutral-300 text-2xl font-serif mb-4">Taking stock of 2026: A conversation with Ron O’Hanley</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500 font-sans">In this Street Signals episode, State Street Chairman and CEO Ron O’Hanley delivers a clear-eyed assessment.</p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-2 text-neutral-400 group-hover:text-ink transition-colors">
<span className="font-mono text-[10px] uppercase tracking-widest">Read Article</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col h-full bg-white border border-neutral-200 p-8 transition-all duration-300 hover:border-neutral-400 hover:-translate-y-1">
<div className="mb-auto">
<div className="flex items-center justify-between mb-6">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Operations</span>
<iconify-icon className="text-neutral-300 group-hover:text-rust transition-colors" icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h3 className="text-ink leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-neutral-300 text-2xl font-serif mb-4">Confidence revisited: The distribution of information</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500 font-sans">Relevance-Based Prediction can assess a prediction’s reliability from the consistency of information.</p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-2 text-neutral-400 group-hover:text-ink transition-colors">
<span className="font-mono text-[10px] uppercase tracking-widest">Read Article</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="group relative flex flex-col h-full bg-white border border-neutral-200 p-8 transition-all duration-300 hover:border-neutral-400 hover:-translate-y-1">
<div className="mb-auto">
<div className="flex items-center justify-between mb-6">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Digital Assets</span>
<iconify-icon className="text-neutral-300 group-hover:text-rust transition-colors" icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-ink leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-neutral-300 text-2xl font-serif mb-4">The fallacy of concentration</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500 font-sans">Concerned about index concentration? Our research shows that large-cap dominance doesn’t increase risk.</p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-2 text-neutral-400 group-hover:text-ink transition-colors">
<span className="font-mono text-[10px] uppercase tracking-widest">Read Article</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex px-20 gap-x-6 gap-y-6 items-center">
<button className="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500">
<span className="uppercase text-xs tracking-widest font-mono">Learn More</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="w-full bg-paper py-24 px-6 border-b border-neutral-100" id="solutions">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl text-ink mb-16 text-center tracking-tight">Solutions for <span className="italic text-neutral-400">today’s markets</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">

<div className="bg-white p-10 flex flex-col justify-between h-full hover:bg-neutral-50 transition-colors group relative overflow-hidden">

<div className="absolute top-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<canvas className="w-full h-full" id="sol-1-3d"></canvas>
</div>
<div className="relative z-10">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-rust transition-colors" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h3 className="text-ink text-2xl font-serif mb-4">Research and Insights</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500">Identify risks, formulate growth strategies and make better-informed investment decisions.</p>
</div>
<div className="mt-8 pt-8 border-t border-dashed border-neutral-200 flex items-center gap-2 relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-ink group-hover:text-rust transition-colors">Learn More</span>
<iconify-icon className="text-neutral-400 group-hover:text-rust transition-colors" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex flex-col hover:bg-neutral-50 transition-colors group bg-white h-full pt-10 pr-10 pb-10 pl-10 justify-between">
<div className="">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-rust transition-colors" icon="solar:wallet-money-linear" width="32"></iconify-icon>
<h3 className="font-serif text-2xl mb-4 text-ink">Cash, Deposit and Finance</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500">Take control of your reporting, payments and overall daily cash position with our cash management solutions.</p>
</div>
<div className="mt-8 pt-8 border-t border-dashed border-neutral-200 flex items-center gap-2">
<span className="font-mono text-[10px] uppercase tracking-widest text-ink group-hover:text-rust transition-colors">Learn More</span>
<iconify-icon className="text-neutral-400 group-hover:text-rust transition-colors" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="bg-white p-10 flex flex-col justify-between h-full hover:bg-neutral-50 transition-colors group relative overflow-hidden">

<div className="absolute top-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<canvas className="w-full h-full" id="sol-2-3d"></canvas>
</div>
<div className="relative z-10">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-rust transition-colors" icon="solar:global-linear" width="32"></iconify-icon>
<h3 className="font-serif text-2xl mb-4 text-ink">Foreign Exchange Solutions</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500">Our client-first FX trading solutions help you tap into new sources of liquidity.</p>
</div>
<div className="mt-8 pt-8 border-t border-dashed border-neutral-200 flex items-center gap-2 relative z-10">
<span className="font-mono text-[10px] uppercase tracking-widest text-ink group-hover:text-rust transition-colors">Learn More</span>
<iconify-icon className="text-neutral-400 group-hover:text-rust transition-colors" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="bg-white p-10 flex flex-col justify-between h-full hover:bg-neutral-50 transition-colors group">
<div className="">
<iconify-icon className="text-neutral-400 mb-6 group-hover:text-rust transition-colors" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h3 className="font-serif text-2xl mb-4 text-ink">Investment Servicing</h3>
<p className="leading-relaxed text-sm font-light text-neutral-500">The right back-office servicing model can help you do a lot: unlock growth, gain efficiencies.</p>
</div>
<div className="mt-8 pt-8 border-t border-dashed border-neutral-200 flex items-center gap-2">
<span className="font-mono text-[10px] uppercase tracking-widest text-ink group-hover:text-rust transition-colors">Learn More</span>
<iconify-icon className="text-neutral-400 group-hover:text-rust transition-colors" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone/20 py-24 px-6 border-b border-neutral-200" id="diversity">
<div className="max-w-4xl mx-auto text-center">
<div className="flex flex-col items-center gap-4">
<div className="w-px h-12 bg-neutral-300"></div>
<span className="font-mono text-xs text-rust uppercase tracking-widest">Culture</span>
<h2 className="font-serif text-4xl text-ink mb-6">Inclusion and diversity</h2>
<p className="font-sans text-base md:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl mb-10">
                        We believe that a diverse workforce and an inclusive culture are essential to our success. We are committed to fostering an environment where every employee feels valued.
                    </p>
<a className="font-serif italic text-lg text-neutral-500 hover:text-ink underline decoration-neutral-300 underline-offset-4 decoration-1 hover:decoration-rust transition-all" href="#">
                        Learn more about our commitment
                    </a>
</div>
</div>
</section>

<footer className="w-full bg-dark text-stone py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 schematic-grid opacity-20 pointer-events-none"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto relative">
<div className="grid grid-cols-1 md:grid-cols-4 border-white/10 border-b mb-16 pb-16 gap-x-0 gap-y-x-0">
<div className="col-span-1 md:col-span-1">
<span className="font-serif text-xl tracking-tight text-white mb-6 block">State Street</span>
<p className="leading-relaxed text-xs text-neutral-500 w-80 max-w-md">This website is intended for the user's own use in reviewing information available here about State Street Corporation.</p>
</div>
<div className="col-span-1 flex flex-col md:col-span-3 md:flex-row md:items-center relative left-20 gap-x-8 gap-y-8 items-start justify-end">
<a className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon className="" icon="solar:plain-linear" width="20"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest">Twitter</span>
</a>
<a className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest">LinkedIn</span>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
<span className="">© 2026 State Street Corporation. All rights reserved.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Legal</a>
<a className="hover:text-white transition-colors" href="#">Global Privacy Notice</a>
</div>
</div>
</div>
</footer>
</main>





    </>
  );
}
