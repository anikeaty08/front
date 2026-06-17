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
                color: 0x78350F,
                transparent: true, 
                opacity: 0.15 
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
      

<header className="fixed top-0 left-0 right-0 z-50 vellum-glass-strong transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-6 h-6 border border-neutral-800 flex items-center justify-center rounded-sm bg-paper relative overflow-hidden">
<div className="absolute w-full h-[1px] bg-neutral-800 rotate-45"></div>
<div className="absolute w-full h-[1px] bg-neutral-800 -rotate-45"></div>
</div>
<span className="font-serif text-lg tracking-tight text-ink font-medium">State Street Placeholder</span>
</div>

<nav className="hidden md:flex items-center gap-6">
<span className="text-[11px] uppercase cursor-default text-neutral-400 tracking-widest font-mono">Insights
</span>
<span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest cursor-default">Nav Item 02</span>
<button className="font-serif italic text-base px-5 py-1 border border-neutral-200 hover:border-neutral-800 hover:bg-paper transition-all text-ink rounded-full">
                    Button Placeholder
                </button>
</nav>
</div>
</header>

<section className="relative w-full min-h-screen overflow-hidden bg-paper flex flex-col justify-center">

<div className="absolute inset-0 z-0 opacity-60" id="canvas-container"><canvas height="925" style={{display: 'block', width: '1056px', height: '740px'}} width="1320"></canvas></div>
<div className="absolute inset-0 pointer-events-none grid-overlay z-0"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 grid grid-cols-12 gap-12">
<div className="col-span-12 md:col-span-8 animate-fade-in">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-12 bg-rust"></div>
<span className="font-mono text-xs text-rust uppercase tracking-[0.2em]">Featured</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.95] tracking-tight mix-blend-multiply mb-8">
                    Heading Placeholder
                </h1>
<p className="max-w-xl font-sans text-xl md:text-2xl text-neutral-600 font-light leading-relaxed mb-10">
                    Subheading Placeholder
                </p>
<div className="flex items-center gap-6">
<button className="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500">
<span className="font-mono text-xs tracking-widest uppercase">Button Placeholder</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
<main className="relative z-10 flex flex-col items-center w-full">

<section className="w-full bg-white py-24 px-6 border-y border-neutral-100">
<div className="max-w-7xl mx-auto text-center md:text-left">
<div className="max-w-4xl">
<h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Section Title Placeholder</h2>
<p className="font-sans text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                        Teaser Paragraph Placeholder
                    </p>
</div>
</div>
</section>

<section className="w-full bg-neutral-50 py-24 px-6 border-b border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="font-serif text-4xl text-ink">Heading Placeholder (In focus)</h2>
</div>

<div className="bg-white border border-neutral-200 p-8 md:p-12 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="bg-neutral-100 aspect-video w-full flex items-center justify-center border border-neutral-200">
<span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Image Placeholder</span>
</div>
<div>
<h3 className="font-serif text-3xl text-ink mb-4">Subheading Placeholder</h3>
<p className="font-sans text-neutral-600 font-light leading-relaxed mb-8">
                                Description Placeholder
                            </p>
<button className="flex items-center gap-2 text-rust hover:text-ink transition-colors font-mono text-xs uppercase tracking-widest group">
                                Button Placeholder
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-paper py-24 px-6 border-b border-neutral-100">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-16">
<div className="w-2 h-2 bg-rust rounded-full"></div>
<h2 className="font-serif text-4xl text-ink">Section Heading Placeholder</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">

<div className="bg-white p-8 group hover:bg-neutral-50 transition-colors h-full flex flex-col justify-between">
<div>
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4 block">Title Placeholder</span>
<h3 className="font-serif text-xl text-ink mb-4 leading-tight">Subheading Placeholder</h3>
</div>
<div className="mt-8 pt-4 border-t border-dashed border-neutral-100">
<span className="text-xs font-mono text-rust uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-8 group hover:bg-neutral-50 transition-colors h-full flex flex-col justify-between">
<div>
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4 block">Title Placeholder</span>
<h3 className="font-serif text-xl text-ink mb-4 leading-tight">Subheading Placeholder</h3>
</div>
<div className="mt-8 pt-4 border-t border-dashed border-neutral-100">
<span className="text-xs font-mono text-rust uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-8 group hover:bg-neutral-50 transition-colors h-full flex flex-col justify-between">
<div>
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4 block">Title Placeholder</span>
<h3 className="font-serif text-xl text-ink mb-4 leading-tight">Subheading Placeholder</h3>
</div>
<div className="mt-8 pt-4 border-t border-dashed border-neutral-100">
<span className="text-xs font-mono text-rust uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-8 group hover:bg-neutral-50 transition-colors h-full flex flex-col justify-between">
<div>
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4 block">Title Placeholder</span>
<h3 className="font-serif text-xl text-ink mb-4 leading-tight">Subheading Placeholder</h3>
</div>
<div className="mt-8 pt-4 border-t border-dashed border-neutral-100">
<span className="text-xs font-mono text-rust uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-8 group hover:bg-neutral-50 transition-colors h-full flex flex-col justify-between">
<div>
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4 block">Title Placeholder</span>
<h3 className="font-serif text-xl text-ink mb-4 leading-tight">Subheading Placeholder</h3>
</div>
<div className="mt-8 pt-4 border-t border-dashed border-neutral-100">
<span className="text-xs font-mono text-rust uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-8 group hover:bg-neutral-50 transition-colors h-full flex flex-col justify-between">
<div>
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mb-4 block">Title Placeholder</span>
<h3 className="font-serif text-xl text-ink mb-4 leading-tight">Subheading Placeholder</h3>
</div>
<div className="mt-8 pt-4 border-t border-dashed border-neutral-100">
<span className="text-xs font-mono text-rust uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">Button Placeholder</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-16 px-6 border-b border-neutral-100 text-center">
<button className="font-serif italic text-xl px-8 py-3 border border-neutral-200 hover:border-neutral-800 hover:bg-paper transition-all text-ink rounded-full">
                CTA Button Placeholder
            </button>
</section>

<section className="w-full bg-neutral-50 py-24 px-6 border-b border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="font-serif text-4xl text-ink mb-4">Section Heading Placeholder</h2>
<p className="font-sans text-neutral-600 font-light">Description Placeholder</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border border-neutral-200 p-10 hover:shadow-md transition-shadow">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-4 block">Solution Card Placeholder</span>
<h3 className="font-serif text-2xl text-ink mb-4">Subheading Placeholder</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8">Paragraph Placeholder</p>
<button className="flex items-center gap-2 text-ink font-mono text-xs uppercase tracking-widest group">
                            Button Placeholder
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="bg-white border border-neutral-200 p-10 hover:shadow-md transition-shadow">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-4 block">Solution Card Placeholder</span>
<h3 className="font-serif text-2xl text-ink mb-4">Subheading Placeholder</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8">Paragraph Placeholder</p>
<button className="flex items-center gap-2 text-ink font-mono text-xs uppercase tracking-widest group">
                            Button Placeholder
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="bg-white border border-neutral-200 p-10 hover:shadow-md transition-shadow">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-4 block">Solution Card Placeholder</span>
<h3 className="font-serif text-2xl text-ink mb-4">Subheading Placeholder</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8">Paragraph Placeholder</p>
<button className="flex items-center gap-2 text-ink font-mono text-xs uppercase tracking-widest group">
                            Button Placeholder
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="bg-white border border-neutral-200 p-10 hover:shadow-md transition-shadow">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-4 block">Solution Card Placeholder</span>
<h3 className="font-serif text-2xl text-ink mb-4">Subheading Placeholder</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8">Paragraph Placeholder</p>
<button className="flex items-center gap-2 text-ink font-mono text-xs uppercase tracking-widest group">
                            Button Placeholder
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="w-full bg-ink text-paper py-20 px-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<button className="bg-paper text-ink px-10 py-4 rounded-sm hover:bg-neutral-200 transition-all duration-300">
<span className="font-mono text-xs tracking-widest uppercase">CTA Button Placeholder</span>
</button>
</div>
</section>

<section className="w-full bg-white py-24 px-6 border-b border-neutral-100">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="col-span-12 md:col-span-5">
<div className="aspect-square bg-neutral-100 border border-neutral-200 flex items-center justify-center">
<span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Image Placeholder</span>
</div>
</div>
<div className="col-span-12 md:col-span-7">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-4 block">Section Heading Placeholder</span>
<h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">Subheading Placeholder</h2>
<p className="font-sans text-neutral-600 font-light leading-relaxed mb-8 text-lg">
                        Paragraph Placeholder
                    </p>
<button className="group flex items-center gap-3 border border-neutral-300 px-6 py-3 rounded-sm hover:border-neutral-800 transition-colors">
<span className="font-mono text-xs tracking-widest uppercase text-ink">Button Placeholder</span>
</button>
</div>
</div>
</section>

<section className="w-full bg-stone/30 py-24 px-6 border-t border-neutral-200">
<div className="max-w-7xl mx-auto text-center">
<h2 className="font-serif text-3xl text-ink mb-12">Section Heading Placeholder</h2>
<div className="flex justify-center gap-8">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center bg-white">
<iconify-icon className="text-ink" icon="solar:earth-linear" width="24"></iconify-icon>
</div>
<span className="font-mono text-[10px] text-neutral-500 uppercase">Social Link</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center bg-white">
<iconify-icon className="text-ink" icon="solar:user-linear" width="24"></iconify-icon>
</div>
<span className="font-mono text-[10px] text-neutral-500 uppercase">Social Link</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center bg-white">
<iconify-icon className="text-ink" icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<span className="font-mono text-[10px] text-neutral-500 uppercase">Social Link</span>
</div>
</div>
</div>
</section>

<footer className="w-full bg-white py-16 px-6 border-t border-neutral-200">
<div className="max-w-5xl mx-auto text-center md:text-left">
<div className="mb-8">
<p className="font-sans text-xs text-neutral-400 font-light leading-relaxed mb-4">
                        Paragraph Placeholder (Legal Disclaimer)
                    </p>
<p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                        Paragraph Placeholder (Terms &amp; Conditions)
                    </p>
</div>
<div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Copyright Placeholder</span>
<span className="font-mono text-[10px] text-neutral-300 uppercase">Design System: Aura</span>
</div>
</div>
</footer>
</main>





    </>
  );
}
