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
            const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
            const points = curve.getPoints(128);
            const geo = new THREE.BufferGeometry().setFromPoints(points);
            const mat = new THREE.LineBasicMaterial({ color: 0x78350F, transparent: true, opacity: 0.15 });
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
            orbits.forEach((orbit, i) => { orbit.rotation.z += 0.002 * (i + 1); });
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
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex w-28 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66ff5f44-282f-4077-b302-731233efdcd5_320w.png)] bg-cover items-center">
<div className="flex overflow-hidden w-28 h-10 border-0 rounded-none relative items-center justify-center">
</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">Nav Link Placeholder</span>
<span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">Nav Link Placeholder</span>
<span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">Nav Link Placeholder</span>
</nav>
</div>
</header>

<section className="relative w-full min-h-[90vh] overflow-hidden bg-paper flex items-center">

<div className="absolute inset-0 z-0 opacity-60" id="canvas-container"><canvas className="" height="925" style={{display: 'block', width: '1056px', height: '740px'}} width="1320"></canvas><canvas height="925" style={{display: 'block', width: '1056px', height: '740px'}} width="1320"></canvas><canvas height="925" style={{display: 'block', width: '1536px', height: '740px'}} width="1920"></canvas><canvas height="925" style={{display: 'block', width: '1536px', height: '740px'}} width="1920"></canvas><canvas height="925" style={{display: 'block', width: '1536px', height: '740px'}} width="1920"></canvas><canvas height="925" style={{display: 'block', width: '1536px', height: '740px'}} width="1920"></canvas><canvas height="925" style={{display: 'block', width: '1536px', height: '740px'}} width="1920"></canvas><canvas height="925" style={{display: 'block', width: '1536px', height: '740px'}} width="1920"></canvas><canvas height="925" style={{display: 'block', width: '1536px', height: '740px'}} width="1920"></canvas></div>
<div className="absolute inset-0 pointer-events-none grid-overlay z-0"></div>
<div className="md:pt-48 md:pb-32 w-full max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl animate-fade-in">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-12 bg-rust"></div>
</div>
<h1 className="font-serif text-6xl md:text-8xl text-ink leading-[0.95] tracking-tight mb-8">
                    What to watch in 2026
                </h1>
<p className="leading-relaxed text-xl font-light text-neutral-600 font-sans max-w-xl mb-10">Our latest outlook challenges consensus thinking with a signals-first approach. Combining proprietary indicators and AI-enhanced tools, we examine investor behavior, regional risk dynamics and momentum shifts across equities, rates, FX and emerging markets — bringing clarity to a fast‑moving 2026.</p>
<button className="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500">
<span className="font-mono text-xs tracking-widest uppercase">Learn more</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<main className="relative z-10 flex flex-col items-center w-full">

<section className="w-full bg-paper py-24 px-6 border-b border-neutral-100">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-5xl text-ink mb-6 tracking-tight">Section Title Placeholder</h2>
<p className="font-sans text-lg text-neutral-600 font-light leading-relaxed">
                    Teaser Paragraph Placeholder: A concise summary of the insights provided in this section.
                </p>
</div>
</section>

<section className="w-full bg-neutral-50 py-24 px-6 border-b border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-2 mb-12">
<div className="w-2 h-2 rounded-full bg-rust"></div>
<h2 className="font-mono text-xs text-rust uppercase tracking-[0.2em]">In focus</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white border border-neutral-200 p-8 md:p-12">
<div className="aspect-video bg-stone/30 border border-neutral-100 flex items-center justify-center">
<span className="font-mono text-xs text-neutral-400 uppercase">Image Placeholder</span>
</div>
<div>
<h3 className="font-serif text-3xl md:text-4xl text-ink mb-6">State Street at the World Economic Forum</h3>
<p className="text-neutral-600 font-light leading-relaxed mb-8">
                            Description Placeholder: Brief overview of the event and key takeaways.
                        </p>
<button className="flex items-center gap-2 text-ink hover:text-rust transition-colors group">
<span className="font-mono text-xs tracking-widest uppercase border-b border-ink group-hover:border-rust pb-1">Read more</span>
</button>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-24 px-6 border-b border-neutral-100">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl text-ink mb-16">Our latest thinking</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">

<div className="bg-white p-10 flex flex-col h-full hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-neutral-400 uppercase mb-4">Article</span>
<h3 className="font-serif text-2xl text-ink mb-4">Title Placeholder</h3>
<p className="text-sm text-neutral-500 font-light mb-8 flex-grow">State Street PriceStats signals an inflation shift</p>
<div className="pt-6 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Learn more</span>
</div>
</div>

<div className="bg-white p-10 flex flex-col h-full hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-neutral-400 uppercase mb-4">Article</span>
<h3 className="font-serif text-2xl text-ink mb-4">Institutional Investor Indicators: December 2025</h3>
<p className="text-sm text-neutral-500 font-light mb-8 flex-grow">Subheading Placeholder</p>
<div className="pt-6 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-10 flex flex-col h-full hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-neutral-400 uppercase mb-4">Article</span>
<h3 className="font-serif text-2xl text-ink mb-4">Taking stock of 2026: A conversation with Ron O’Hanley</h3>
<p className="text-sm text-neutral-500 font-light mb-8 flex-grow">Subheading Placeholder</p>
<div className="pt-6 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-10 flex flex-col h-full hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-neutral-400 uppercase mb-4">Article</span>
<h3 className="font-serif text-2xl text-ink mb-4">Confidence revisited: The distribution of information</h3>
<p className="text-sm text-neutral-500 font-light mb-8 flex-grow">Subheading Placeholder</p>
<div className="pt-6 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-10 flex flex-col h-full hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-neutral-400 uppercase mb-4">Article</span>
<h3 className="font-serif text-2xl text-ink mb-4">The fallacy of concentration</h3>
<p className="text-sm text-neutral-500 font-light mb-8 flex-grow">Subheading Placeholder</p>
<div className="pt-6 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Button Placeholder</span>
</div>
</div>

<div className="bg-white p-10 flex flex-col h-full hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-neutral-400 uppercase mb-4">Article</span>
<h3 className="font-serif text-2xl text-ink mb-4">Data, AI and strategic partnerships: Defining success in asset management</h3>
<p className="text-sm text-neutral-500 font-light mb-8 flex-grow">Subheading Placeholder</p>
<div className="pt-6 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Button Placeholder</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-paper py-16 px-6 border-b border-neutral-100 flex justify-center">
<button className="border border-neutral-300 px-8 py-3 rounded-sm text-ink hover:border-rust hover:text-rust transition-colors">
<span className="font-mono text-xs uppercase tracking-widest">Unlock all insights</span>
</button>
</section>

<section className="w-full bg-neutral-50 py-24 px-6 border-b border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-serif text-4xl text-ink mb-4">Section Heading Placeholder</h2>
<p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Solutions designed around you</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 border border-neutral-200 hover:border-rust/30 transition-all group">
<iconify-icon className="text-rust mb-6" icon="solar:graph-up-linear" width="24"></iconify-icon>
<h3 className="font-serif text-xl text-ink mb-4">Research and Insights</h3>
<p className="text-sm text-neutral-500 font-light mb-6">Paragraph Placeholder</p>
<span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-rust transition-colors">Learn more</span>
</div>

<div className="bg-white p-8 border border-neutral-200 hover:border-rust/30 transition-all group">
<iconify-icon className="text-rust mb-6" icon="solar:wallet-linear" width="24"></iconify-icon>
<h3 className="font-serif text-xl text-ink mb-4">Cash, Deposit and Finance Solutions</h3>
<p className="text-sm text-neutral-500 font-light mb-6">Paragraph Placeholder</p>
<span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-rust transition-colors">Button Placeholder</span>
</div>

<div className="bg-white p-8 border border-neutral-200 hover:border-rust/30 transition-all group">
<iconify-icon className="text-rust mb-6" icon="solar:global-linear" width="24"></iconify-icon>
<h3 className="font-serif text-xl text-ink mb-4">Foreign Exchange Solutions</h3>
<p className="text-sm text-neutral-500 font-light mb-6">Paragraph Placeholder</p>
<span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-rust transition-colors">Button Placeholder</span>
</div>

<div className="bg-white p-8 border border-neutral-200 hover:border-rust/30 transition-all group">
<iconify-icon className="text-rust mb-6" icon="solar:chart-2-linear" width="24"></iconify-icon>
<h3 className="font-serif text-xl text-ink mb-4">Investment servicing</h3>
<p className="text-sm text-neutral-500 font-light mb-6">Paragraph Placeholder</p>
<span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-rust transition-colors">Button Placeholder</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-ink py-20 px-6 text-center">
<h2 className="font-serif text-3xl text-paper mb-8">Find your best solution</h2>
<button className="bg-paper text-ink px-8 py-3 rounded-sm hover:bg-neutral-200 transition-colors">
<span className="font-mono text-xs uppercase tracking-widest">Button Placeholder</span>
</button>
</section>

<section className="w-full bg-paper py-24 px-6 border-b border-neutral-100">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 aspect-[4/3] bg-stone/50 border border-neutral-200 flex items-center justify-center">
<span className="font-mono text-xs text-neutral-400 uppercase">Image Placeholder</span>
</div>
<div className="w-full md:w-1/2">
<h2 className="font-serif text-4xl text-ink mb-4">Inclusion and diversity</h2>
<h3 className="font-sans text-xl text-neutral-600 font-light mb-6">Fostering impact within and beyond State Street</h3>
<p className="text-neutral-500 font-light leading-relaxed mb-8">
                        Paragraph Placeholder
                    </p>
<button className="flex items-center gap-3 text-rust hover:text-ink transition-colors">
<span className="font-mono text-xs tracking-widest uppercase">Learn more</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="w-full bg-neutral-50 py-16 px-6 border-b border-neutral-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<h2 className="font-serif text-2xl text-ink">Contact Us</h2>
<div className="flex gap-6">
<div className="flex items-center gap-2 text-neutral-500 hover:text-ink cursor-pointer transition-colors">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest">Twitter Placeholder</span>
</div>
<div className="flex items-center gap-2 text-neutral-500 hover:text-ink cursor-pointer transition-colors">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest">LinkedIn Placeholder</span>
</div>
<div className="flex items-center gap-2 text-neutral-500 hover:text-ink cursor-pointer transition-colors">
<iconify-icon icon="solar:videocamera-linear" width="20"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest">YouTube Placeholder</span>
</div>
</div>
</div>
</section>

<footer className="w-full bg-white py-16 px-6">
<div className="max-w-7xl mx-auto border-t border-neutral-100 pt-8">
<div className="grid grid-cols-1 gap-8 mb-12">
<p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                        Paragraph Placeholder for legal disclaimers (e.g., Patriot Act text).
                    </p>
<p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                        Paragraph Placeholder for Terms &amp; Conditions.
                    </p>
</div>
<div className="flex justify-between items-center">
<span className="font-mono text-[10px] text-neutral-300 uppercase">© 2026 State Street Corporation. All rights reserved.</span>
</div>
</div>
</footer>
</main>





    </>
  );
}
