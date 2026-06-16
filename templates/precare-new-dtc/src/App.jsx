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
paper: '#F8FAFC',
ink: '#0F172A',
sepia: '#334155',
stone: '#E2E8F0',
rust: '#0D9488',
dark: '#020617'
},
animation: {
'fade-in': 'fadeIn 1.2s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'glitch': 'glitch 2s infinite',
'slide-up': 'slideUp 0.5s ease-out forwards'
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
glitch: {
'0%': { transform: 'translate(0)' },
'20%': { transform: 'translate(-2px, 2px)' },
'40%': { transform: 'translate(-2px, -2px)' },
'60%': { transform: 'translate(2px, 2px)' },
'80%': { transform: 'translate(2px, -2px)' },
'100%': { transform: 'translate(0)' }
},
slideUp: {
'0%': { transform: 'translateY(100%)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' }
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
            
            // Softer, slower noise for health context
            float noiseFreq = 0.3;
            float noiseAmp = uDistortion;
            float noise = snoise(vec3(pos.x * noiseFreq + uTime * 0.05, pos.y * noiseFreq, pos.z * noiseFreq));
            
            vNoise = noise;
            
            vec3 newPos = pos + (normalize(pos) * noise * noiseAmp);

            // Gentle mouse interaction
            float dist = distance(uMouse * 10.0, newPos.xy);
            float interaction = smoothstep(5.0, 0.0, dist);
            newPos += normalize(pos) * interaction * 0.3;

            vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            gl_PointSize = uSize * (20.0 / -mvPosition.z) * (1.0 + noise * 0.3);
            
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
            
            // Shift color slightly based on noise for organic feel
            vec3 col1 = uColor; 
            vec3 col2 = uColor + vec3(0.1, 0.1, 0.2); // SLightly bluer/lighter
            
            vec3 finalColor = mix(col1, col2, vNoise * 0.5 + 0.5);
            
            gl_FragColor = vec4(finalColor, alpha);
        }
    


        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        // Updated fog for cleaner look
        scene.fog = new THREE.FogExp2(0xF8FAFC, 0.035);

        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 18);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const systemsGroup = new THREE.Group();
        systemsGroup.position.x = 4.0; 
        scene.add(systemsGroup);

        const geometry = new THREE.IcosahedronGeometry(4.5, 40); // Increased detail for smoother look
        
        const uniforms = {
            uTime: { value: 0 },
            uDistortion: { value: 0.3 },
            uSize: { value: 2.0 },
            uColor: { value: new THREE.Color('#334155') }, // Slate-700
            uOpacity: { value: 0.5 },
            uMouse: { value: new THREE.Vector2(0, 0) }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent,
            uniforms: uniforms,
            transparent: true,
            depthWrite: false,
            blending: THREE.NormalBlending // Changed from Additive to Normal for calmer look
        });

        const particles = new THREE.Points(geometry, material);
        systemsGroup.add(particles);

        const lineGroup = new THREE.Group();
        systemsGroup.add(lineGroup);

        // Created smoother, thinner orbits
        function createThinOrbit(radius, rotation) {
            const curve = new THREE.EllipseCurve(
                0, 0,
                radius, radius,
                0, 2 * Math.PI,
                false,
                0
            );
            const points = curve.getPoints(128);
            const geo = new THREE.BufferGeometry().setFromPoints(points);
            const mat = new THREE.LineBasicMaterial({ 
                color: 0x0D9488, // Teal
                transparent: true, 
                opacity: 0.1 
            });
            const orbit = new THREE.Line(geo, mat);
            orbit.rotation.x = rotation.x;
            orbit.rotation.y = rotation.y;
            lineGroup.add(orbit);
            return orbit;
        }

        const orbits = [
            createThinOrbit(5.5, {x: Math.PI/2, y: 0}),
            createThinOrbit(5.2, {x: Math.PI/3, y: Math.PI/6}),
            createThinOrbit(6.0, {x: Math.PI/1.8, y: Math.PI/4})
        ];

        let time = 0;
        let speed = 0.05; // Slower speed
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

        function animate() {
            requestAnimationFrame(animate);
            time += 0.01 + (speed * 0.05);

            systemsGroup.rotation.y = time * 0.03; // Slower rotation
            systemsGroup.rotation.z = Math.sin(time * 0.05) * 0.03;

            lineGroup.rotation.x = Math.sin(time * 0.05) * 0.1;
            orbits.forEach((orbit, i) => {
                orbit.rotation.z += 0.001 * (i + 1);
            });

            camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
            camera.lookAt(0,0,0);

            uniforms.uTime.value = time;
            renderer.render(scene, camera);
        }
        animate();

        document.getElementById('input-distortion').addEventListener('input', (e) => {
            uniforms.uDistortion.value = parseFloat(e.target.value);
        });
        
        document.getElementById('input-opacity').addEventListener('input', (e) => {
            uniforms.uOpacity.value = parseFloat(e.target.value);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 vellum-glass-strong transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-6 h-6 border border-slate-800 flex items-center justify-center rounded-sm bg-paper relative overflow-hidden text-rust">
<iconify-icon icon="solar:health-linear" width="16"></iconify-icon>
</div>
<span className="font-sans text-lg tracking-tight text-ink font-semibold">Clearly</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="font-mono text-[11px] text-slate-500 hover:text-ink transition-colors uppercase tracking-widest" href="#how-it-works">How It Works</a>
<a className="font-mono text-[11px] text-slate-500 hover:text-ink transition-colors uppercase tracking-widest" href="#for-doctors">For Doctors</a>
<a className="font-mono text-[11px] text-slate-500 hover:text-ink transition-colors uppercase tracking-widest" href="#privacy">Privacy</a>
<button className="font-sans font-medium text-sm px-5 py-1.5 bg-ink text-white hover:bg-rust transition-all rounded-full">
                    Get Started
                </button>
</nav>
</div>
</header>

<section className="relative w-full min-h-screen overflow-hidden bg-paper">

<div className="absolute inset-0 z-0 opacity-60" id="canvas-container"></div>

<div className="absolute inset-0 pointer-events-none grid-overlay z-0"></div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col md:grid md:grid-cols-12 gap-12 min-h-screen">
<div className="col-span-8 animate-fade-in">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-12 bg-rust"></div>
<span className="font-mono text-xs text-rust uppercase tracking-[0.2em]">Context, Not Noise</span>
</div>
<h1 className="font-sans text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.95] tracking-tight font-semibold mb-8">
                    Your Health, <br/>
<span className="italic font-light text-slate-500 font-serif">Clearly.</span>
</h1>
<p className="max-w-xl font-sans text-base md:text-lg text-slate-600 font-light leading-relaxed mb-10">
                    A simple way to understand your body — before appointments, between visits, and over time.
                    <br/><br/>
                    No diagnoses. No guessing. Just context you control so conversations with doctors are calmer, clearer, and more productive.
                </p>
<div className="flex items-center gap-6">
<button className="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-rust transition-all duration-500 shadow-lg shadow-slate-200">
<span className="font-mono text-xs tracking-widest uppercase">Get Started</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<span className="font-mono text-[10px] text-slate-400 uppercase tracking-wide">No credit card required</span>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 z-40 hidden md:block">
<div className="vellum-glass rounded-sm p-4 w-[240px] opacity-90 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-200/50">
<span className="font-serif italic text-sm text-ink">Clarity</span>
<div className="w-1.5 h-1.5 rounded-full bg-rust animate-pulse"></div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[9px] font-mono uppercase text-slate-500 mb-1">
<span>Focus</span>
</div>
<input id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.3"/>
</div>
<div>
<div className="flex justify-between text-[9px] font-mono uppercase text-slate-500 mb-1">
<span>Density</span>
</div>
<input id="input-opacity" max="1.0" min="0.1" step="0.05" type="range" value="0.5"/>
</div>
</div>
</div>
</div>
</section>

<main className="relative z-10 flex flex-col items-center w-full">

<section className="w-full bg-dark py-24 md:py-32 px-6 relative overflow-hidden group/section border-y border-slate-800">

<div className="absolute inset-0 schematic-grid opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-white/10">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-rust animate-pulse"></div>
<h2 className="font-mono text-[11px] text-rust uppercase tracking-[0.2em]">In Plain English</h2>
</div>
<h3 className="font-serif text-3xl md:text-5xl text-stone">What This Is</h3>
</div>
<div className="hidden md:block text-right">
<div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1">Concept</div>
<div className="font-mono text-xs text-stone bg-white/5 px-3 py-1 rounded-sm border border-white/10">PERSONAL_CONTEXT</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-rust/50 hover:bg-slate-900/80 transition-all duration-500 p-6 rounded-sm backdrop-blur-sm overflow-hidden h-[340px] flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50 text-slate-500">
<iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
</div>

<div className="h-32 w-full flex items-center justify-center relative">
<svg className="opacity-80 group-hover:opacity-100 transition-opacity" height="100" viewbox="0 0 100 100" width="100">
<circle cx="50" cy="50" fill="none" r="30" stroke="#475569" strokeWidth="1"></circle>
<circle className="group-hover:animate-[dash_2s_ease-out_forwards]" cx="50" cy="50" fill="none" r="30" stroke="#0D9488" stroke-dasharray="180" stroke-dashoffset="180" strokeWidth="1.5"></circle>
<path className="group-hover:opacity-100 opacity-0 transition-opacity delay-300" d="M40 50 L50 60 L60 40" fill="none" stroke="#E2E8F0" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-mono text-xs text-rust uppercase tracking-widest mb-2">Capture Scans</h4>
<p className="font-sans text-sm text-slate-400 font-light leading-relaxed">
                                Capture tongue scans over time. A simple photo record that builds a timeline of your body's baseline.
                            </p>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-rust/50 hover:bg-slate-900/80 transition-all duration-500 p-6 rounded-sm backdrop-blur-sm overflow-hidden h-[340px] flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50 text-slate-500">
<iconify-icon icon="solar:notes-minimalistic-linear" width="20"></iconify-icon>
</div>

<div className="h-32 w-full flex items-center justify-center relative">
<div className="flex gap-2 items-end h-16">
<div className="w-2 bg-slate-700 h-8 group-hover:h-12 transition-all duration-500"></div>
<div className="w-2 bg-slate-700 h-10 group-hover:h-8 transition-all duration-500 delay-75"></div>
<div className="w-2 bg-slate-700 h-6 group-hover:h-14 transition-all duration-500 delay-100"></div>
<div className="w-2 bg-rust h-12 group-hover:h-10 transition-all duration-500 delay-150"></div>
</div>
</div>
<div>
<h4 className="font-mono text-xs text-rust uppercase tracking-widest mb-2">Track Changes</h4>
<p className="font-sans text-sm text-slate-400 font-light leading-relaxed">
                                Note changes around meals, habits, or medications. See cause and effect clearly.
                            </p>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-rust/50 hover:bg-slate-900/80 transition-all duration-500 p-6 rounded-sm backdrop-blur-sm overflow-hidden h-[340px] flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50 text-slate-500">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>

<div className="h-32 w-full flex items-center justify-center relative">
<svg className="opacity-80" height="60" viewbox="0 0 100 60" width="100">
<path d="M10 50 C 30 50, 40 20, 90 20" fill="none" stroke="#475569" strokeWidth="2"></path>
<circle className="animate-pulse" cx="90" cy="20" fill="#0D9488" r="3"></circle>
</svg>
</div>
<div>
<h4 className="font-mono text-xs text-rust uppercase tracking-widest mb-2">Simple Trends</h4>
<p className="font-sans text-sm text-slate-400 font-light leading-relaxed">
                                Spot simple patterns in hydration, inflammation, or coating without complex medical jargon.
                            </p>
</div>
</div>

<div className="group relative bg-slate-900/40 border border-white/10 hover:border-rust/50 hover:bg-slate-900/80 transition-all duration-500 p-6 rounded-sm backdrop-blur-sm overflow-hidden h-[340px] flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50 text-slate-500">
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>

<div className="h-32 w-full flex items-center justify-center relative">
<div className="w-16 h-20 border border-slate-600 rounded-sm p-2 flex flex-col gap-2 group-hover:-translate-y-2 transition-transform">
<div className="w-full h-1 bg-slate-600 rounded-full"></div>
<div className="w-2/3 h-1 bg-slate-600 rounded-full"></div>
<div className="w-full h-1 bg-slate-600 rounded-full mt-2"></div>
<div className="absolute bottom-4 right-4 text-rust opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<h4 className="font-mono text-xs text-rust uppercase tracking-widest mb-2">Visit Ready</h4>
<p className="font-sans text-sm text-slate-400 font-light leading-relaxed">
                                Prepare clear summaries for visits. Share only what you choose, when you choose.
                            </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 border border-slate-800 max-w-4xl mx-auto">
<div className="bg-slate-900/80 p-6 text-center">
<span className="block font-serif italic text-2xl text-stone mb-1">Timeline</span>
<span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">For Your Body</span>
</div>
<div className="bg-slate-900/80 p-6 text-center">
<span className="block font-serif italic text-2xl text-rust mb-1 animate-pulse">Context</span>
<span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Not Conclusions</span>
</div>
<div className="bg-slate-900/80 p-6 text-center">
<span className="block font-serif italic text-2xl text-stone mb-1">Privacy</span>
<span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">You Control It</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-paper py-24 px-6 border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mx-auto text-center">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-4 block">The Missing Piece</span>
<h2 className="font-serif text-5xl md:text-6xl text-ink mb-6 tracking-tight">Why the Tongue?</h2>
<p className="font-sans text-lg text-slate-600 font-light leading-relaxed mb-8">
                        Doctors already look at it — briefly. The problem is they only see a <span className="font-medium text-ink">single moment</span>, once or twice a year.
                    </p>
<p className="font-sans text-lg text-slate-600 font-light leading-relaxed">
                        Tracking it over time gives <strong>context</strong>, not conclusions. That context is often what’s missing in appointments.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16 text-center">
<div className="p-6 border-t md:border-t-0 md:border-l border-slate-200">
<iconify-icon className="text-rust mb-4" icon="solar:waterdrops-linear" width="24"></iconify-icon>
<h4 className="font-sans font-medium text-ink mb-2">Hydration</h4>
</div>
<div className="p-6 border-t md:border-t-0 md:border-l border-slate-200">
<iconify-icon className="text-rust mb-4" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
<h4 className="font-sans font-medium text-ink mb-2">Stress</h4>
</div>
<div className="p-6 border-t md:border-t-0 md:border-l border-slate-200">
<iconify-icon className="text-rust mb-4" icon="solar:fire-linear" width="24"></iconify-icon>
<h4 className="font-sans font-medium text-ink mb-2">Inflammation</h4>
</div>
<div className="p-6 border-t md:border-t-0 md:border-l border-slate-200">
<iconify-icon className="text-rust mb-4" icon="solar:chef-hat-heart-linear" width="24"></iconify-icon>
<h4 className="font-sans font-medium text-ink mb-2">Diet</h4>
</div>
<div className="p-6 border-t md:border-t-0 md:border-l border-slate-200">
<iconify-icon className="text-rust mb-4" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
<h4 className="font-sans font-medium text-ink mb-2">Recovery</h4>
</div>
</div>
</div>
</section>

<section className="w-full bg-slate-50 py-24 px-6 border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-6">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-4 block">For Patients</span>
<h2 className="font-serif text-4xl md:text-5xl text-ink mb-6 tracking-tight">Show up clearly.</h2>
<p className="font-sans text-lg text-slate-600 font-light leading-relaxed mb-10">
                            This is a tool to help you show up clearly — not to diagnose you or label your health.
                        </p>
<div className="pl-6 border-l border-slate-200 mb-10">
<p className="font-sans text-base text-slate-800 font-medium mb-4">
                                Most people know something feels off, but struggle to explain:
                            </p>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<div className="h-px w-4 bg-rust"></div>
<span className="text-slate-600 font-light">when it started</span>
</li>
<li className="flex items-center gap-3">
<div className="h-px w-4 bg-rust"></div>
<span className="text-slate-600 font-light">what changed</span>
</li>
<li className="flex items-center gap-3">
<div className="h-px w-4 bg-rust"></div>
<span className="text-slate-600 font-light">what helped</span>
</li>
<li className="flex items-center gap-3">
<div className="h-px w-4 bg-slate-300"></div>
<span className="text-slate-400 font-light line-through decoration-slate-300">what didn't</span>
</li>
</ul>
</div>
<p className="font-sans text-base text-slate-600 font-light leading-relaxed">
                            This system helps you keep a simple, visual record over time — so you don’t have to rely on memory in a stressful moment.
                        </p>
</div>

<div className="lg:col-span-6 flex flex-col justify-center">

<div className="bg-white p-8 border border-slate-200 rounded-sm shadow-sm mb-8">
<h3 className="font-serif text-xl text-ink mb-6 flex items-center gap-2">
<iconify-icon className="text-rust" icon="solar:shield-check-linear"></iconify-icon>
                                You Control
                            </h3>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm text-slate-600">What you track</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm text-slate-600">What you share</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm text-slate-600">When you share it</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm text-slate-600">With whom</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-slate-100">
<p className="text-xs text-slate-500 font-mono">
                                    Nothing is sent to a provider unless you choose to share it.
                                </p>
</div>
</div>

<div>
<span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-4 block">What patients use this for</span>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[16px] text-rust"><iconify-icon icon="solar:clipboard-list-linear"></iconify-icon></div>
<span className="text-sm text-slate-600 font-light">Preparing for appointments</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[16px] text-rust"><iconify-icon icon="solar:graph-new-linear"></iconify-icon></div>
<span className="text-sm text-slate-600 font-light">Tracking how habits, food, hydration, or recovery affect them</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[16px] text-rust"><iconify-icon icon="solar:chat-line-linear"></iconify-icon></div>
<span className="text-sm text-slate-600 font-light">Communicating more clearly with doctors and dentists</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[16px] text-rust"><iconify-icon icon="solar:folder-with-files-linear"></iconify-icon></div>
<span className="text-sm text-slate-600 font-light">Keeping a personal health record they can carry anywhere</span>
</li>
</ul>
<div className="mt-8 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-rust"></div>
<p className="font-serif italic text-lg text-ink">This is about context, not conclusions.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-24 px-6 border-t border-slate-100" id="how-it-works">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="font-mono text-xs text-rust uppercase tracking-widest">Process</span>
<h2 className="font-serif text-4xl text-ink mt-3">How It Works</h2>
</div>
<div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:h-full before:w-px before:bg-slate-200">

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-white border border-ink rounded-full z-10 mt-6 group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0">
<span className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-1 block">Step 01</span>
<h3 className="font-serif text-2xl text-ink">Take a Scan</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0">
<p className="text-sm text-slate-600 font-light mb-2">Use your phone. You’ll get real-time feedback on photo quality so you know the scan is usable.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">No medical interpretation shown.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-white border border-ink rounded-full z-10 mt-6 group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0 md:order-2">
<span className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-1 block">Step 02</span>
<h3 className="font-serif text-2xl text-ink">Create Simple Experiments</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0 md:order-1 md:text-right">
<p className="text-sm text-slate-600 font-light mb-2">Group scans around real life: Before &amp; after meals, better hydration, or medication changes.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">Optional. Nothing is forced.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-white border border-ink rounded-full z-10 mt-6 group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0">
<span className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-1 block">Step 03</span>
<h3 className="font-serif text-2xl text-ink">See Trends, Not Noise</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0">
<p className="text-sm text-slate-600 font-light mb-2">Clean timelines and subtle indicators. No red alerts or panic signals.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">Just patterns over time.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-rust border border-rust rounded-full z-10 mt-6 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(13,148,136,0.4)]"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0 md:order-2">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-1 block">The Key Feature</span>
<h3 className="font-serif text-2xl text-ink">Prepare for Appointments</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0 md:order-1 md:text-right">
<p className="text-sm text-slate-600 font-light mb-2">Generate a summary of what changed, what stayed the same, and your top questions.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">Explain clearly, even when rushed.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-white border border-ink rounded-full z-10 mt-6 group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0">
<span className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-1 block">Step 05</span>
<h3 className="font-serif text-2xl text-ink">Share on Your Terms</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0">
<p className="text-sm text-slate-600 font-light mb-2">You control what is shared, with whom, and for how long.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">Doctors see exactly what you send.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-24 px-6 border-t border-slate-100" id="for-doctors">
<div className="max-w-4xl mx-auto text-center mb-16">
<span className="font-mono text-xs text-rust uppercase tracking-widest">Quietly Powerful</span>
<h2 className="font-serif text-4xl text-ink mt-3">For Doctors</h2>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
<div className="bg-white p-10 text-center hover:bg-slate-50 transition-colors">
<iconify-icon className="text-slate-400 mb-4 mx-auto" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<h3 className="font-sans font-medium text-lg mb-2">Visits are faster</h3>
<p className="text-xs text-slate-500 leading-relaxed">Less time trying to remember timelines.</p>
</div>
<div className="bg-white p-10 text-center hover:bg-slate-50 transition-colors">
<iconify-icon className="text-slate-400 mb-4 mx-auto" icon="solar:file-check-linear" width="32"></iconify-icon>
<h3 className="font-sans font-medium text-lg mb-2">History is clearer</h3>
<p className="text-xs text-slate-500 leading-relaxed">Visual context replaces vague memory.</p>
</div>
<div className="bg-white p-10 text-center hover:bg-slate-50 transition-colors">
<iconify-icon className="text-slate-400 mb-4 mx-auto" icon="solar:scale-linear" width="32"></iconify-icon>
<h3 className="font-sans font-medium text-lg mb-2">Decisions are easier</h3>
<p className="text-xs text-slate-500 leading-relaxed">Better data leads to better confidence.</p>
</div>
<div className="bg-white p-10 text-center hover:bg-slate-50 transition-colors">
<iconify-icon className="text-slate-400 mb-4 mx-auto" icon="solar:chat-round-check-linear" width="32"></iconify-icon>
<h3 className="font-sans font-medium text-lg mb-2">Fewer Follow-ups</h3>
<p className="text-xs text-slate-500 leading-relaxed">"What did we decide again?" becomes rare.</p>
</div>
</div>
<div className="text-center mt-12 max-w-2xl mx-auto">
<p className="font-serif italic text-lg text-slate-600">This doesn’t replace clinical judgment. It supports it.</p>
</div>
</section>

<section className="w-full bg-slate-900 py-24 px-6 border-b border-slate-800">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-white/10">
<div>
<span className="font-mono text-xs text-rust uppercase tracking-widest block mb-2">The Philosophy</span>
<h2 className="font-serif text-3xl md:text-4xl text-white">Bridging Patient &amp; Provider</h2>
</div>
<div className="mt-4 md:mt-0 max-w-sm text-right">
<p className="text-slate-400 font-light text-sm">
                            This system works because patients and providers see the same information — framed appropriately.
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-800/30 border border-white/5 p-8 rounded-sm">
<div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-6">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-sans text-xl text-white mb-2">Patients see</h3>
<p className="font-serif italic text-lg text-rust mb-4">a personal record</p>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            A safe space to track everything without judgment, ensuring nothing is forgotten.
                        </p>
</div>

<div className="bg-slate-800/30 border border-white/5 p-8 rounded-sm">
<div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-6">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h3 className="font-sans text-xl text-white mb-2">Providers see</h3>
<p className="font-serif italic text-lg text-rust mb-4">structured context</p>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Information filtered for relevance and clarity, respecting their time and expertise.
                        </p>
</div>

<div className="bg-slate-800/30 border border-white/5 p-8 rounded-sm relative overflow-hidden">
<div className="absolute inset-0 schematic-grid opacity-20 pointer-events-none"></div>
<div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 mb-6 relative z-10">
<iconify-icon icon="solar:connection-linear" width="24"></iconify-icon>
</div>
<h3 className="font-sans text-xl text-white mb-2 relative z-10">Neither sees</h3>
<p className="font-serif italic text-lg text-slate-400 mb-4 relative z-10">automated conclusions</p>
<p className="text-sm text-slate-500 font-light leading-relaxed relative z-10">
                            We bridge the gap with data, not AI diagnoses. The conversation remains human.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-ink text-paper py-24 px-6 relative overflow-hidden" id="privacy">
<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 items-center">
<div>
<h2 className="font-serif text-4xl mb-8 text-white">Privacy Comes First</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                        This is a personal record, not social media.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-rust mt-1" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-sans font-light text-slate-300">Your data belongs to you.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-rust mt-1" icon="solar:lock-password-linear"></iconify-icon>
<span className="font-sans font-light text-slate-300">Nothing is shared by default.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-rust mt-1" icon="solar:eye-closed-linear"></iconify-icon>
<span className="font-sans font-light text-slate-300">No public feeds. No selling data.</span>
</li>
</ul>
</div>
<div className="border-t md:border-t-0 md:border-l border-slate-800 pt-12 md:pt-0 md:pl-12">
<span className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4 block">Start Simple</span>
<h2 className="font-serif text-3xl mb-6 text-white">Use it only when it helps.</h2>
<div className="space-y-4 mb-8 text-sm font-light text-slate-400">
<p>• One scan.</p>
<p>• No experiments.</p>
<p>• No sharing.</p>
</div>
<p className="text-slate-500 text-sm mb-8">You don't need to change your life to start understanding it.</p>
<button className="w-full py-4 border border-slate-700 hover:bg-paper hover:text-ink transition-colors font-mono text-xs uppercase tracking-widest text-white">
                        Read Privacy Policy
                    </button>
</div>
</div>
</section>

<footer className="w-full bg-white py-24 px-6 text-center border-t border-slate-100">
<div className="max-w-2xl mx-auto">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-6 block">Get Started</span>
<h2 className="font-serif text-4xl md:text-5xl text-ink mb-8 tracking-tight">A calmer way to understand your health.</h2>
<p className="font-sans text-slate-600 font-light mb-10">
                    And explain it when it matters.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="bg-ink text-paper px-10 py-4 rounded-sm hover:bg-rust transition-all duration-300 w-full md:w-auto shadow-xl shadow-slate-200">
<span className="font-mono text-xs tracking-widest uppercase">Start Free</span>
</button>
</div>
<p className="mt-6 text-xs text-slate-400 font-mono">No credit card required.</p>
<div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-mono uppercase">
<span>© Clearly Health Inc.</span>
<span>Patient First Design</span>
</div>
</div>
</footer>
</main>





    </>
  );
}
