import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
primary: '#2563EB', // Blue accent
primaryDark: '#1E40AF',
stone: '#E7E5E4',
},
animation: {
'fade-in': 'fadeIn 1.2s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



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
            // Mixed to give a subtle blueish academic feel
            vec3 darkColor = uColor * 0.4;
            vec3 lightColor = uColor * 1.5;
            vec3 finalColor = mix(darkColor, lightColor, vNoise * 0.5 + 0.5);
            
            gl_FragColor = vec4(finalColor, alpha);
        }
    


        // Initialize Lucide Icons
        lucide.createIcons();

        // 3D Background Logic
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
        systemsGroup.position.set(4.0, -1.0, -4.0); 
        scene.add(systemsGroup);

        const geometry = new THREE.IcosahedronGeometry(6.0, 30);
        
        const uniforms = {
            uTime: { value: 0 },
            uDistortion: { value: 0.8 }, 
            uSize: { value: 2.0 },       
            uColor: { value: new THREE.Color('#2563EB') }, // Blue tint
            uOpacity: { value: 0.6 },
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
            const mat = new THREE.LineBasicMaterial({ color: 0x1E40AF, transparent: true, opacity: 0.1 });
            const orbit = new THREE.Line(geo, mat);
            orbit.rotation.x = rotation.x;
            orbit.rotation.y = rotation.y;
            lineGroup.add(orbit);
            return orbit;
        }

        const orbits = [
            createThinOrbit(7.0, {x: Math.PI/2, y: 0}),
            createThinOrbit(6.8, {x: Math.PI/3, y: Math.PI/6}),
            createThinOrbit(7.5, {x: Math.PI/1.8, y: Math.PI/4})
        ];

        let time = 0;
        let speed = 0.08;
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
                systemsGroup.position.set(0, 2.0, -8);
                systemsGroup.scale.set(0.8, 0.8, 0.8);
            } else {
                systemsGroup.position.set(6.0, -2.0, -2.0);
                systemsGroup.scale.set(1, 1, 1);
            }
        }
        adjustLayout();

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            systemsGroup.position.y = (window.innerWidth < 1024 ? 2.0 : -2.0) + (scrollY * 0.003);
        });

        function animate() {
            requestAnimationFrame(animate);
            time += 0.01 + (speed * 0.05);

            systemsGroup.rotation.y = time * 0.03;
            systemsGroup.rotation.z = Math.sin(time * 0.1) * 0.03;

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

        // UI Bindings for new Configuration Panel
        const levelInput = document.getElementById('input-level');
        const pagesInput = document.getElementById('input-pages');
        
        if(levelInput) {
            levelInput.addEventListener('input', (e) => {
                const val = parseInt(e.target.value);
                const labels = ["Bachelor's", "Master's", "Ph.D."];
                document.getElementById('val-level').textContent = labels[val-1];
            });
        }
        if(pagesInput) {
            pagesInput.addEventListener('input', (e) => {
                document.getElementById('val-pages').textContent = e.target.value;
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none grid-overlay z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/50 to-paper"></div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none opacity-60" id="canvas-container"><canvas className="" height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas><canvas className="" height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas><canvas className="" height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas><canvas height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas><canvas height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas><canvas height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas><canvas height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas><canvas height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas><canvas height="694" style={{display: 'block', width: '1000px', height: '694px'}} width="1000"></canvas></div>

<nav className="fixed top-0 w-full z-50 bg-paper/95 backdrop-blur-md border-b border-neutral-200 shadow-sm transition-all duration-300">

<div className="w-full border-b border-neutral-100">
<div className="flex h-14 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<button className="text-neutral-500 hover:text-ink transition-colors">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
<div className="flex gap-2 uppercase text-xl font-medium tracking-tight font-sans gap-x-2 gap-y-2 items-center">Stelwyn<i className="w-5 h-5 fill-ink" data-lucide="feather" strokeWidth="1.5"></i></div>
<div className="border border-ink px-2 py-0.5 text-xs font-mono font-medium">EN</div>
</div>
</div>

<div className="w-full max-w-screen-2xl mx-auto px-6 relative group/nav">
<div className="flex justify-center gap-10 pt-6 pb-4">
<a className="text-ink uppercase border-ink text-xs font-medium tracking-widest font-mono border-b pb-1" href="#">Ghostwriting</a>
<a className="font-mono text-xs text-neutral-500 hover:text-ink font-medium tracking-widest uppercase hover:border-b border-ink/30 pb-1 transition-all" href="#">Writing Service</a>
<a className="font-mono text-xs text-neutral-500 hover:text-ink font-medium tracking-widest uppercase hover:border-b border-ink/30 pb-1 transition-all" href="#">Prices</a>
<a className="font-mono text-xs text-neutral-500 hover:text-ink font-medium tracking-widest uppercase hover:border-b border-ink/30 pb-1 transition-all" href="#">Company</a>
<a className="font-mono text-xs text-neutral-500 hover:text-ink font-medium tracking-widest uppercase hover:border-b border-ink/30 pb-1 transition-all" href="#">Mentor</a>
</div>

<div className="flex flex-col lg:flex-row lg:gap-24 font-quicksand border-neutral-100 border-t mt-2 pt-8 pb-12 gap-x-16 gap-y-16">

<div className="flex-grow">

<div className="relative max-w-md mb-10 group">
<input className="outline-none focus:border-ink transition-colors placeholder:text-neutral-400 text-base font-light bg-transparent w-full border-neutral-300 border-b pb-3" placeholder="Filter" type="text"/>
<i className="absolute right-0 top-0 w-5 h-5 text-neutral-400 group-focus-within:text-ink transition-colors" data-lucide="search" strokeWidth="1.5"></i>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-ink/80 text-sm font-medium tracking-tight gap-x-12 gap-y-6">
<div className="flex flex-col gap-5">
<a className="hover:text-primary transition-colors" href="#">Academic Contents</a>
<a className="hover:text-primary transition-colors" href="#">Bachelor's Thesis</a>
<a className="hover:text-primary transition-colors" href="#">Essay</a>
<a className="hover:text-primary transition-colors" href="#">Management Essay</a>
<a className="hover:text-primary transition-colors" href="#">Publication</a>
<a className="hover:text-primary transition-colors" href="#">Seminar Paper</a>
</div>
<div className="flex flex-col gap-5 gap-x-5 gap-y-5">
<a className="hover:text-primary transition-colors" href="#">Advance Assessment</a>
<a className="hover:text-primary transition-colors" href="#">Coaching</a>
<a className="hover:text-primary transition-colors" href="#">Language Polishing</a>
<a className="hover:text-primary transition-colors" href="#">Master's Thesis</a>
<a className="hover:text-primary transition-colors" href="#">Research Papers</a>
<a className="hover:text-primary transition-colors" href="#">Statistics</a>
</div>
<div className="flex flex-col gap-5">
<a className="hover:text-primary transition-colors" href="#">AI Proofreading</a>
<a className="hover:text-primary transition-colors" href="#">Dissertation</a>
<a className="hover:text-primary transition-colors" href="#">Literature Review</a>
<a className="hover:text-primary transition-colors" href="#">Motivation Letter</a>
<a className="hover:text-primary transition-colors" href="#">Research Proposal</a>
<a className="hover:text-primary transition-colors" href="#">Term Papers</a>
</div>
</div>
</div>

<div className="flex flex-col gap-4 min-w-[220px]">
<a className="border border-neutral-300 rounded-full py-3 px-6 text-center text-sm font-medium tracking-tight text-ink hover:border-primary hover:text-primary transition-colors bg-white/50 hover:bg-white" href="#">Seminar Paper</a>
<a className="border border-neutral-300 rounded-full py-3 px-6 text-center text-sm font-medium tracking-tight text-ink hover:border-primary hover:text-primary transition-colors bg-white/50 hover:bg-white" href="#">Bachelor's Thesis</a>
<a className="border border-neutral-300 rounded-full py-3 px-6 text-center text-sm font-medium tracking-tight text-ink hover:border-primary hover:text-primary transition-colors bg-white/50 hover:bg-white" href="#">Master's Thesis</a>
<a className="border border-neutral-300 rounded-full py-3 px-6 text-center text-sm font-medium tracking-tight text-ink hover:border-primary hover:text-primary transition-colors bg-white/50 hover:bg-white" href="#">Dissertation</a>
<a className="border border-neutral-300 rounded-full py-3 px-6 text-center text-sm font-medium tracking-tight text-ink hover:border-primary hover:text-primary transition-colors bg-white/50 hover:bg-white" href="#">Statistics</a>
</div>
</div>
</div>
</nav>

<main className="relative z-10 flex flex-col w-full pt-[420px]"> 

<section className="min-h-[70vh] flex md:px-12 w-full max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="z-10 animate-fade-in opacity-0 w-full max-w-4xl relative" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-12 bg-primary"></div>
<span className="font-mono text-xs text-primary font-medium uppercase tracking-widest">PREMIUM ACADEMIC SERVICES</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-none tracking-tight mix-blend-multiply">
                    Academic Excellence,<br/>
<span className="italic font-light text-neutral-600">Expertly Crafted.</span>
</h1>
<p className="mt-8 max-w-xl font-sans text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                    We match you with verified academic experts to mentor, write, and refine your work. Guaranteeing originality, confidentiality, and the highest scholarly standards.
                </p>
<div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 pointer-events-auto">
<button className="group inline-flex w-fit items-center gap-3 bg-primary text-white pl-8 pr-6 py-4 rounded hover:bg-primaryDark transition-all duration-500 shadow-xl shadow-primary/20">
<span className="font-mono text-xs font-medium tracking-widest uppercase">Request Free Quote</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<div className="hidden sm:block h-px w-12 bg-neutral-300"></div>
<span className="font-serif italic text-xl text-neutral-500 tracking-tight">Strictly Confidential</span>
</div>
</div>

<div className="pointer-events-auto absolute bottom-12 right-6 md:right-12 w-[320px] vellum-glass rounded animate-fade-in opacity-0 hidden lg:block" style={{animationDelay: '0.5s'}}>
<div className="border-b border-neutral-200/60 px-6 py-4 flex justify-between items-center bg-white/60">
<span className="font-serif italic text-xl text-ink tracking-tight">Project Estimator</span>
</div>
<div className="p-6 space-y-8">
<div className="space-y-3">
<div className="flex justify-between font-mono text-xs font-medium tracking-widest text-neutral-500 uppercase">
<span>Academic Level</span>
<span className="text-primary" id="val-level">Master's</span>
</div>
<input id="input-level" max="3" min="1" step="1" type="range" value="2"/>
<div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
<span>Bachelor</span>
<span>Master</span>
<span>PhD</span>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between font-mono text-xs font-medium tracking-widest text-neutral-500 uppercase">
<span>Pages</span>
<span className="text-ink" id="val-pages">40</span>
</div>
<input id="input-pages" max="100" min="5" step="5" type="range" value="40"/>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200/50">
<div className="space-y-2">
<div className="flex justify-between font-mono text-xs font-medium tracking-widest text-neutral-400 uppercase">
<span>Originality</span>
</div>
<div className="text-lg font-serif italic text-ink">100%</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-mono text-xs font-medium tracking-widest text-neutral-400 uppercase">
<span>Availability</span>
</div>
<div className="flex items-center gap-2">
<span className="font-mono text-xs font-medium tracking-widest text-green-600/80">ONLINE</span>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 z-20 w-full max-w-screen-2xl border-neutral-200/40 border-t mt-12 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative backdrop-blur-sm">
<div className="flex flex-col items-center text-center mb-24">
<span className="font-mono text-xs text-neutral-400 font-medium uppercase tracking-widest mb-10">AUTHORS FROM TOP UNIVERSITIES</span>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
<span className="font-serif text-3xl font-medium tracking-tight">Oxford</span>
<span className="font-sans text-2xl font-light tracking-tight">Cambridge</span>
<span className="font-serif italic text-3xl tracking-tight">Stanford</span>
<span className="font-mono text-xl tracking-tight">MIT</span>
</div>
</div>

<div className="mb-8">
<span className="font-mono text-xs text-neutral-400 font-medium uppercase tracking-widest">STUDENT SUCCESS STORIES</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="vellum-glass p-8 flex flex-col justify-between min-h-[240px]">
<i className="w-8 h-8 text-primary/20 mb-4" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-serif italic text-2xl text-ink leading-snug mb-8 tracking-tight">"The mentorship provided for my thesis was exceptional. Clarified my entire research focus."</p>
<div className="border-t border-neutral-200/50 pt-4 flex items-center justify-between">
<span className="block font-mono text-xs font-medium uppercase tracking-widest text-neutral-500">Master's Student, UK</span>
<div className="flex text-primary"><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i></div>
</div>
</div>
<div className="vellum-glass p-8 flex flex-col justify-between min-h-[240px]">
<i className="w-8 h-8 text-primary/20 mb-4" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-serif italic text-2xl text-ink leading-snug mb-8 tracking-tight">"Flawless editing and formatting. Saved me weeks of stress before the final submission deadline."</p>
<div className="border-t border-neutral-200/50 pt-4 flex items-center justify-between">
<span className="block font-mono text-xs font-medium uppercase tracking-widest text-neutral-500">PhD Candidate, USA</span>
<div className="flex text-primary"><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i></div>
</div>
</div>
<div className="vellum-glass p-8 flex flex-col justify-between min-h-[240px]">
<i className="w-8 h-8 text-primary/20 mb-4" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-serif italic text-2xl text-ink leading-snug mb-8 tracking-tight">"The statistical analysis was rigorous and perfectly aligned with my initial research questions."</p>
<div className="border-t border-neutral-200/50 pt-4 flex items-center justify-between">
<span className="block font-mono text-xs font-medium uppercase tracking-widest text-neutral-500">Researcher, Germany</span>
<div className="flex text-primary"><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i><i className="w-4 h-4 fill-primary" data-lucide="star"></i></div>
</div>
</div>
</div>
</section>

<section className="w-full relative py-32 border-y border-neutral-200/50 bg-paper">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
<div className="mb-16 text-center">
<span className="font-mono text-xs text-neutral-400 font-medium uppercase tracking-widest border border-neutral-200 px-4 py-1.5 rounded-full bg-white">THE ACAD WRITE ADVANTAGE</span>
</div>
<div className="flex flex-col md:flex-row relative">

<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-neutral-200 flex-col items-center justify-center">
<div className="w-8 h-8 rounded-full border border-neutral-200 bg-paper flex items-center justify-center text-xs font-mono text-neutral-400">VS</div>
</div>

<div className="w-full md:w-1/2 md:pr-20 pb-16 md:pb-0 opacity-50 hover:opacity-80 transition-opacity">
<h3 className="font-serif italic text-4xl text-neutral-500 tracking-tight mb-12">"Writing Alone"</h3>
<div className="grid grid-cols-2 gap-8 mb-10">
<div className="flex items-center gap-4"><i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i><span className="font-mono text-xs font-medium tracking-widest uppercase">Missed Deadlines</span></div>
<div className="flex items-center gap-4"><i className="w-6 h-6" data-lucide="file-warning" strokeWidth="1.5"></i><span className="font-mono text-xs font-medium tracking-widest uppercase">Formatting Errors</span></div>
<div className="flex items-center gap-4"><i className="w-6 h-6" data-lucide="brain-circuit" strokeWidth="1.5"></i><span className="font-mono text-xs font-medium tracking-widest uppercase">Writer's Block</span></div>
<div className="flex items-center gap-4"><i className="w-6 h-6" data-lucide="search-x" strokeWidth="1.5"></i><span className="font-mono text-xs font-medium tracking-widest uppercase">Weak Research</span></div>
</div>
<p className="font-sans font-light text-neutral-500 text-lg leading-relaxed max-w-sm">
                            Endless revisions, stress over academic standards, and the constant fear of plagiarism and rejection.
                        </p>
</div>

<div className="w-full md:w-1/2 md:pl-20 pt-16 md:pt-0 border-t md:border-t-0 border-neutral-200 relative">
<h3 className="font-serif italic text-4xl text-ink tracking-tight mb-12">"Expert Mentorship"</h3>
<div className="grid grid-cols-2 gap-8 mb-10 text-ink">
<div className="flex items-center gap-4 text-primary"><i className="w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i><span className="font-mono text-xs font-medium tracking-widest uppercase">On-Time Delivery</span></div>
<div className="flex items-center gap-4 text-primary"><i className="w-6 h-6" data-lucide="file-check-2" strokeWidth="1.5"></i><span className="font-mono text-xs font-medium tracking-widest uppercase">Perfect Formatting</span></div>
<div className="flex items-center gap-4 text-primary"><i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i><span className="font-mono text-xs font-medium tracking-widest uppercase">PhD Mentors</span></div>
<div className="flex items-center gap-4 text-primary"><i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i><span className="font-mono text-xs font-medium tracking-widest uppercase">100% Original</span></div>
</div>
<p className="font-sans font-light text-ink text-lg leading-relaxed max-w-sm">
                            Direct communication with academic experts. Rigorous quality control. Confidence in every submission.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 border-y border-neutral-200/50 bg-paper/50 relative overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 text-center mb-20">
<span className="font-mono text-xs text-neutral-400 font-medium uppercase tracking-widest mb-6 block">OUR PROCESS</span>
<h2 className="font-serif text-5xl md:text-6xl text-ink leading-none tracking-tight">
                    Structured Framework.<br/>
<span className="italic text-neutral-500">Impeccable Results.</span>
</h2>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-neutral-200 rounded-full items-center justify-center bg-paper/80 backdrop-blur-md shadow-2xl z-0">
<div className="w-48 h-48 border border-neutral-200/50 rounded-full flex flex-col items-center justify-center relative bg-white">
<div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{animationDuration: '4s'}}></div>
<span className="font-serif text-2xl tracking-tight text-ink relative z-10">Quality</span>
<span className="font-mono text-xs text-neutral-400 font-medium tracking-widest mt-2 relative z-10">ASSURANCE</span>
</div>
</div>

<div className="vellum-glass p-8 relative z-10 md:col-start-1 md:row-start-1 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-mono text-xs">01</span></div>
<h4 className="font-mono text-xs font-medium uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-200/50">Consultation</h4>
<p className="font-sans font-light text-neutral-600 text-base">We define the scope, research questions, and methodology to perfectly match your university's guidelines.</p>
</div>
<div className="vellum-glass p-8 relative z-10 md:col-start-3 md:row-start-1 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-mono text-xs">02</span></div>
<h4 className="font-mono text-xs font-medium uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-200/50">Research &amp; Drafting</h4>
<p className="font-sans font-light text-neutral-600 text-base">Your assigned expert conducts deep literature review and constructs the core arguments of your paper.</p>
</div>
<div className="hidden md:block col-start-2 row-start-2"></div>
<div className="vellum-glass p-8 relative z-10 md:col-start-1 md:row-start-2 md:mt-12 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-mono text-xs">03</span></div>
<h4 className="font-mono text-xs font-medium uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-200/50">Partial Deliveries</h4>
<p className="font-sans font-light text-neutral-600 text-base">Receive chapter-by-chapter updates to provide feedback and ensure the direction aligns with your vision.</p>
</div>
<div className="vellum-glass p-8 relative z-10 md:col-start-3 md:row-start-2 md:mt-12 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-mono text-xs">04</span></div>
<h4 className="font-mono text-xs font-medium uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-200/50">Proofreading</h4>
<p className="font-sans font-light text-neutral-600 text-base">A secondary editor reviews the academic tone, grammar, and formal formatting (APA, MLA, Harvard).</p>
</div>
<div className="vellum-glass p-8 relative z-10 md:col-start-2 md:row-start-3 md:mt-8 transform hover:-translate-y-1 transition-transform">
<div className="w-8 h-8 rounded border border-neutral-200 flex items-center justify-center mb-6 bg-white"><span className="font-mono text-xs">05</span></div>
<h4 className="font-mono text-xs font-medium uppercase tracking-widest text-ink mb-4 pb-4 border-b border-neutral-200/50">Plagiarism Check</h4>
<p className="font-sans font-light text-neutral-600 text-base">Final delivery includes a certified software report guaranteeing 100% original, unique content.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-neutral-200/50 bg-paper/80 backdrop-blur-sm">
<div className="mb-16 text-center">
<span className="block font-mono text-xs text-neutral-400 font-medium uppercase tracking-widest mb-6">THE ENVIRONMENT OF SUCCESS</span>
<h2 className="font-serif text-5xl md:text-6xl text-ink leading-none tracking-tight">
                    Focus on your future.<br/>
<span className="italic text-neutral-500">Leave the writing to us.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] bg-neutral-200 border border-neutral-300 overflow-hidden mb-4 rounded flex items-center justify-center">
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply"></div>
<img alt="Writing Desk" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<span className="block font-mono text-xs text-ink font-medium uppercase tracking-widest mb-1">Dedicated Authors</span>
<span className="block font-sans font-light text-base text-neutral-500">Experts in your specific field of study.</span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] bg-neutral-200 border border-neutral-300 overflow-hidden mb-4 rounded flex items-center justify-center">
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply"></div>
<img alt="Library Archive" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<span className="block font-mono text-xs text-ink font-medium uppercase tracking-widest mb-1">Deep Research</span>
<span className="block font-sans font-light text-base text-neutral-500">Access to premium academic databases.</span>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] bg-neutral-200 border border-neutral-300 overflow-hidden mb-4 rounded flex items-center justify-center">
<div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10 mix-blend-multiply"></div>
<img alt="Graduation" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<span className="block font-mono text-xs text-ink font-medium uppercase tracking-widest mb-1">Guaranteed Success</span>
<span className="block font-sans font-light text-base text-neutral-500">Secure your degree with top marks.</span>
</div>
</div>
</section>

<section className="w-full min-h-[50vh] flex flex-col items-center justify-center text-center py-32 px-6 border-t border-neutral-200 relative bg-paper z-20">
<div className="absolute inset-0 pointer-events-none grid-overlay opacity-50 z-0"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<div className="w-12 h-12 border border-neutral-300 flex items-center justify-center rounded-full bg-white relative overflow-hidden mb-10 text-primary">
<i className="w-6 h-6" data-lucide="feather" strokeWidth="1.5"></i>
</div>
<h2 className="font-serif text-5xl md:text-7xl text-ink leading-none tracking-tight mb-8">
                    Ready to ace<br/>
<span className="italic text-neutral-500">your degree?</span>
</h2>
<p className="font-sans font-light text-neutral-600 text-lg mb-12 max-w-lg">
                    Join thousands of successful graduates. Request a free, non-binding consultation to discuss your specific academic requirements.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<button className="group flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded hover:bg-primaryDark transition-all duration-500 w-full sm:w-auto shadow-xl shadow-primary/20">
<span className="font-mono text-xs font-medium tracking-widest uppercase">Start Your Inquiry</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<a className="font-mono text-xs text-neutral-500 hover:text-ink font-medium transition-colors uppercase tracking-widest border-b border-transparent hover:border-ink pb-1" href="#">
                        View Pricing
                    </a>
</div>
</div>
<div className="absolute bottom-8 w-full text-center opacity-60">
<span className="font-mono text-xs text-neutral-400 font-medium uppercase tracking-widest">ACAD WRITE — PREMIUM GHOSTWRITING SINCE 2004</span>
</div>
</section>
</main>





    </>
  );
}
