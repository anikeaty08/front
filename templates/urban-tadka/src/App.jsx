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

        document.getElementById('input-distortion').addEventListener('input', (e) => {
            uniforms.uDistortion.value = parseFloat(e.target.value);
        });
        
        document.getElementById('input-opacity').addEventListener('input', (e) => {
            uniforms.uOpacity.value = parseFloat(e.target.value);
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
      

<header className="fixed top-0 left-0 right-0 z-50 vellum-glass-strong transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-6 h-6 border border-neutral-800 flex items-center justify-center rounded-sm bg-paper relative overflow-hidden">
<div className="absolute w-full h-[1px] bg-neutral-800 rotate-45"></div>
<div className="absolute w-full h-[1px] bg-neutral-800 -rotate-45"></div>
</div>
<span className="font-serif text-lg tracking-tight text-ink font-medium">Starbloom Studio</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="font-mono text-[11px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="#services">Services</a>
<a className="font-mono text-[11px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="#case-studies">Case Studies</a>
<a className="font-mono text-[11px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="#investment">Investment</a>
<a className="font-mono text-[11px] text-neutral-500 hover:text-ink transition-colors uppercase tracking-widest" href="#notes">Notes</a>
<button className="font-serif italic text-base px-5 py-1 border border-neutral-200 hover:border-neutral-800 hover:bg-paper transition-all text-ink rounded-full">
                    Book a Call
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
<span className="font-mono text-xs text-rust uppercase tracking-[0.2em]">F&amp;B Identity Systems</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink leading-[0.95] tracking-tight mix-blend-multiply mb-8">
                    Brand Identity for <br/>
<span className="italic font-light text-neutral-600">Hospitality &amp; Taste.</span>
</h1>
<p className="max-w-xl font-sans text-base md:text-lg text-neutral-600 font-light leading-relaxed mb-10">
                    I help restaurants, cafés, bakeries, and boutique stays build brand identities that 
                    <strong className="font-medium text-ink">increase perceived value</strong>, 
                    <strong className="font-medium text-ink">create loyalty</strong>, and 
                    <strong className="font-medium text-ink">stop you from blending in</strong>.
                    <br/><br/>
                    Not "pretty design." A brand system that holds up on menus, packaging, signage, and the feed — consistently.
                </p>
<div className="flex items-center gap-6">
<button className="group flex items-center gap-3 bg-ink text-paper pl-6 pr-5 py-3 rounded-sm hover:bg-sepia transition-all duration-500">
<span className="font-mono text-xs tracking-widest uppercase">Book a Call</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<a className="font-serif italic text-lg text-neutral-500 hover:text-ink underline decoration-neutral-300 underline-offset-4 decoration-1" href="#work">View Work</a>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 z-40 hidden md:block">
<div className="vellum-glass rounded-sm p-4 w-[240px] opacity-90 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-center mb-3 pb-2 border-b border-neutral-200/50">
<span className="font-serif italic text-sm text-ink">Atmosphere</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[9px] font-mono uppercase text-neutral-500 mb-1">
<span>Fluidity</span>
</div>
<input id="input-distortion" max="2.0" min="0" step="0.1" type="range" value="0.6"/>
</div>
<div>
<div className="flex justify-between text-[9px] font-mono uppercase text-neutral-500 mb-1">
<span>Ink Density</span>
</div>
<input id="input-opacity" max="1.0" min="0.1" step="0.05" type="range" value="0.4"/>
</div>
</div>
</div>
</div>
</section>

<main className="relative z-10 flex flex-col items-center w-full">

<section className="w-full bg-dark py-24 md:py-32 px-6 relative overflow-hidden group/section border-y border-neutral-800">

<div className="absolute inset-0 schematic-grid opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-white/10">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-rust animate-pulse"></div>
<h2 className="font-mono text-[11px] text-rust uppercase tracking-[0.2em]">Diagnostic Phase</h2>
</div>
<h3 className="font-serif text-3xl md:text-5xl text-stone">The Brand Bottleneck</h3>
</div>
<div className="hidden md:block text-right">
<div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Status</div>
<div className="font-mono text-xs text-stone bg-white/5 px-3 py-1 rounded-sm border border-white/10">SYSTEM_CRITICAL</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">

<div className="group relative bg-neutral-900/40 border border-white/10 hover:border-rust/50 hover:bg-neutral-900/80 transition-all duration-500 p-6 rounded-sm backdrop-blur-sm overflow-hidden h-[320px] flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-[10px] text-neutral-500">ERR_01</div>

<div className="h-32 w-full flex items-center justify-center relative">
<svg className="opacity-80 group-hover:opacity-100 transition-opacity" height="80" viewbox="0 0 120 80" width="120">

<line className="dash-animation" stroke="#444" stroke-dasharray="4 2" strokeWidth="2" x1="10" x2="110" y1="70" y2="70"></line>

<rect className="group-hover:animate-float" fill="none" height="20" stroke="#666" style={{animationDelay: '0s'}} width="20" x="20" y="30"></rect>
<rect className="group-hover:animate-float" fill="none" height="20" stroke="#666" style={{animationDelay: '0.2s'}} width="20" x="50" y="30"></rect>
<rect className="group-hover:animate-float" fill="none" height="20" stroke="#666" style={{animationDelay: '0.4s'}} width="20" x="80" y="30"></rect>

<rect className="group-hover:opacity-100 transition-opacity duration-300" fill="none" height="30" opacity="0" stroke="#9A3412" strokeWidth="1" width="30" x="45" y="25"></rect>
</svg>
</div>
<div>
<h4 className="font-mono text-xs text-rust uppercase tracking-widest mb-2">Visual Sameness</h4>
<p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                                Great product lost in a sea of template designs. 
                                <span className="block mt-2 text-xs text-neutral-600 font-mono group-hover:text-rust transition-colors">&gt;&gt; RESULT: BLENDING_IN</span>
</p>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/10 hover:border-rust/50 hover:bg-neutral-900/80 transition-all duration-500 p-6 rounded-sm backdrop-blur-sm overflow-hidden h-[320px] flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-[10px] text-neutral-500">ERR_02</div>

<div className="h-32 w-full flex items-center justify-center relative">
<svg className="opacity-80 group-hover:opacity-100 transition-opacity" height="100" viewbox="0 0 100 100" width="100">

<path d="M20 20 L40 60 L40 90 L60 90 L60 60 L80 20 Z" fill="none" stroke="#555" strokeWidth="1.5"></path>

<circle className="group-hover:animate-[bounce_2s_infinite]" cx="30" cy="10" fill="#999" r="2"></circle>
<circle className="group-hover:animate-[bounce_2.5s_infinite]" cx="50" cy="5" fill="#999" r="2"></circle>
<circle className="group-hover:animate-[bounce_2.2s_infinite]" cx="70" cy="15" fill="#999" r="2"></circle>

<circle className="group-hover:scale-110 transition-transform" cx="50" cy="50" fill="#1C1917" r="8" stroke="#9A3412"></circle>
<text fill="#9A3412" fontFamily="monospace" fontSize="10" text-anchor="middle" x="50" y="53">!</text>
</svg>
</div>
<div>
<h4 className="font-mono text-xs text-rust uppercase tracking-widest mb-2">Wrong Audience</h4>
<p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                                Attracting discount-hunters instead of quality-seekers.
                                <span className="block mt-2 text-xs text-neutral-600 font-mono group-hover:text-rust transition-colors">&gt;&gt; RESULT: LOW_MARGINS</span>
</p>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/10 hover:border-rust/50 hover:bg-neutral-900/80 transition-all duration-500 p-6 rounded-sm backdrop-blur-sm overflow-hidden h-[320px] flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-[10px] text-neutral-500">ERR_03</div>

<div className="h-32 w-full flex items-center justify-center relative">
<svg className="opacity-80 group-hover:opacity-100 transition-opacity" height="100" viewbox="0 0 100 100" width="100">
<g transform="translate(50,50)">

<rect className="group-hover:animate-[spin_4s_linear_infinite]" fill="none" height="40" stroke="#555" width="40" x="-20" y="-20"></rect>
<circle className="group-hover:animate-[spin_6s_linear_infinite_reverse]" fill="none" r="15" stroke="#777" stroke-dasharray="2 4"></circle>
<path className="group-hover:animate-[pulse_2s_infinite]" d="M0 -25 L20 10 L-20 10 Z" fill="none" stroke="#444"></path>

<line className="group-hover:opacity-100 group-hover:animate-glitch" opacity="0" stroke="#9A3412" strokeWidth="1" x1="-30" x2="30" y1="0" y2="0"></line>
</g>
</svg>
</div>
<div>
<h4 className="font-mono text-xs text-rust uppercase tracking-widest mb-2">Visual Entropy</h4>
<p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                                10 different designs that never look like the same brand.
                                <span className="block mt-2 text-xs text-neutral-600 font-mono group-hover:text-rust transition-colors">&gt;&gt; RESULT: NO_RECALL</span>
</p>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/10 hover:border-rust/50 hover:bg-neutral-900/80 transition-all duration-500 p-6 rounded-sm backdrop-blur-sm overflow-hidden h-[320px] flex flex-col justify-between">
<div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-[10px] text-neutral-500">ERR_04</div>

<div className="h-32 w-full flex items-center justify-center relative">
<svg className="opacity-80 group-hover:opacity-100 transition-opacity" height="100" viewbox="0 0 100 100" width="100">

<path d="M50 20 L80 30 V50 C80 70 50 90 50 90 C50 90 20 70 20 50 V30 L50 20 Z" fill="none" stroke="#555" strokeWidth="1.5"></path>

<circle className="group-hover:animate-[dash_2s_ease-in-out_infinite]" cx="50" cy="50" fill="none" r="12" stroke="#9A3412" stroke-dasharray="60" stroke-dashoffset="60" strokeWidth="2"></circle>

<text className="group-hover:opacity-0 transition-opacity" fill="#777" fontFamily="serif" fontSize="14" font-style={{}} text-anchor="middle" x="50" y="54">?</text>
</svg>
</div>
<div>
<h4 className="font-mono text-xs text-rust uppercase tracking-widest mb-2">Trust Gap</h4>
<p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                                Losing customers because the brand feels "risky" or amateur.
                                <span className="block mt-2 text-xs text-neutral-600 font-mono group-hover:text-rust transition-colors">&gt;&gt; RESULT: LOST_SALES</span>
</p>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 max-w-4xl mx-auto">
<div className="bg-neutral-900/80 p-6 text-center">
<span className="block font-serif text-3xl text-stone mb-1">~0.05s</span>
<span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">To Form an Opinion</span>
</div>
<div className="bg-neutral-900/80 p-6 text-center">
<span className="block font-serif text-3xl text-rust mb-1 animate-pulse">86%</span>
<span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">Pay More for Experience</span>
</div>
<div className="bg-neutral-900/80 p-6 text-center">
<span className="block font-serif text-3xl text-stone mb-1">$$$</span>
<span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">Left on the table</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-paper py-24 px-6 border-t border-neutral-100">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mx-auto text-center">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-4 block">The Problem</span>
<h2 className="font-serif text-5xl md:text-6xl text-ink mb-6 tracking-tight">The "Taste Gap"</h2>
<p className="font-sans text-lg text-neutral-600 font-light leading-relaxed mb-8">
                        In F&amp;B and hospitality, the product is sensory — but your brand is often not. 
                        Most businesses don't have a "design problem." They have a <span className="font-medium text-ink">perception problem</span>.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 text-center md:text-left">
<div className="p-6 border-l border-neutral-200">
<h4 className="font-serif italic text-xl text-ink mb-2">Visual Mismatch</h4>
<p className="text-sm text-neutral-500 leading-relaxed">The visuals don't match the experience. People judge before they taste.</p>
</div>
<div className="p-6 border-l border-neutral-200">
<h4 className="font-serif italic text-xl text-ink mb-2">Template Syndrome</h4>
<p className="text-sm text-neutral-500 leading-relaxed">You look like a template brand. Customers assume the food is one too.</p>
</div>
<div className="p-6 border-l border-neutral-200">
<h4 className="font-serif italic text-xl text-ink mb-2">Price Ceiling</h4>
<p className="text-sm text-neutral-500 leading-relaxed">You don't feel premium enough to charge premium. So you compete on offers.</p>
</div>
<div className="p-6 border-l border-neutral-200">
<h4 className="font-serif italic text-xl text-ink mb-2">Inconsistency</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Menu says one thing, packaging says another, Instagram says nothing.</p>
</div>
</div>
<div className="mt-16 text-center">
<p className="font-serif text-xl italic text-ink">I close that gap — by translating what you <span className="border-b border-rust/30">actually are</span> into an identity people trust.</p>
</div>
</div>
</section>

<section className="w-full bg-neutral-50 py-24 px-6 border-t border-neutral-100">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="font-serif text-4xl text-ink mb-2">Systemic Failure Analysis</h2>
<p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Why most F&amp;B brands get stuck</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 border border-neutral-200 bg-white">

<div className="p-8 md:p-10 group hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-rust uppercase tracking-widest mb-4 block">Failure Mode 01</span>
<h3 className="font-serif text-2xl text-ink mb-4">The "Logo-Only" Trap</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light">
                            You get a logo. Then you're left alone to figure out menus, packaging, signage, and social. Result: brand falls apart under pressure.
                        </p>
<div className="flex items-center gap-2 text-ink text-sm font-medium">
<i className="w-4 h-4 text-rust" data-lucide="triangle-alert"></i>
<span className="font-mono text-xs tracking-wide">Fix: Build a system, not a symbol.</span>
</div>
</div>

<div className="p-8 md:p-10 group hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-rust uppercase tracking-widest mb-4 block">Failure Mode 02</span>
<h3 className="font-serif text-2xl text-ink mb-4">Solving for "Aesthetic"</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light">
                            Your branding looks good on one post… but doesn't work on a menu, label, or takeaway bag. Style with no structure.
                        </p>
<div className="flex items-center gap-2 text-ink text-sm font-medium">
<i className="w-4 h-4 text-rust" data-lucide="triangle-alert"></i>
<span className="font-mono text-xs tracking-wide">Fix: Design for touchpoints.</span>
</div>
</div>

<div className="p-8 md:p-10 group hover:bg-neutral-50 transition-colors">
<span className="font-mono text-[10px] text-rust uppercase tracking-widest mb-4 block">Failure Mode 03</span>
<h3 className="font-serif text-2xl text-ink mb-4">"Figure It Out Later"</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light">
                            F&amp;B moves fast. So branding gets piecemealed. You spend more, get less, and nothing feels cohesive.
                        </p>
<div className="flex items-center gap-2 text-ink text-sm font-medium">
<i className="w-4 h-4 text-rust" data-lucide="triangle-alert"></i>
<span className="font-mono text-xs tracking-wide">Fix: Foundations first.</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-24 px-6 border-t border-neutral-100">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl text-ink mb-16 text-center">I only solve a few problems.<br/><span className="italic text-neutral-400">Exceptionally well.</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">

<div className="bg-white p-10 flex flex-col justify-between h-full">
<div>
<span className="font-mono text-xs text-neutral-400">01</span>
<h3 className="font-serif text-2xl mt-4 mb-4">Positioning that feels obvious</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">So customers instantly "get" what you are, who you're for, and why you're different.</p>
</div>
<div className="mt-8 pt-8 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Result: Clearer Perception</span>
</div>
</div>

<div className="bg-white p-10 flex flex-col justify-between h-full">
<div>
<span className="font-mono text-xs text-neutral-400">02</span>
<h3 className="font-serif text-2xl mt-4 mb-4">Identity systems for reality</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Logos, typography, palettes, patterns, and design rules that work across real-world applications.</p>
</div>
<div className="mt-8 pt-8 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Result: Consistent Presence</span>
</div>
</div>

<div className="bg-white p-10 flex flex-col justify-between h-full">
<div>
<span className="font-mono text-xs text-neutral-400">03</span>
<h3 className="font-serif text-2xl mt-4 mb-4">Menu &amp; Packaging Hierarchy</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Because in F&amp;B, hierarchy is everything: what's featured, what's signature, what's premium.</p>
</div>
<div className="mt-8 pt-8 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Result: Better Sales</span>
</div>
</div>

<div className="bg-white p-10 flex flex-col justify-between h-full">
<div>
<span className="font-mono text-xs text-neutral-400">04</span>
<h3 className="font-serif text-2xl mt-4 mb-4">A brand that can scale</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">New menu items. New SKUs. New branches. Your identity should expand without breaking.</p>
</div>
<div className="mt-8 pt-8 border-t border-dashed border-neutral-200">
<span className="font-mono text-[10px] uppercase tracking-widest text-rust">Result: Growth Ready</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone/30 py-24 px-6 border-t border-neutral-200">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
<div className="w-full md:w-1/3">
<div className="aspect-[3/4] bg-stone/50 rounded-sm border border-neutral-200 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-paper opacity-50"></div>
<div className="w-24 h-24 border border-sepia/20 rounded-full flex items-center justify-center">
<div className="w-20 h-20 border border-sepia/40 rounded-full"></div>
</div>
</div>
</div>
<div className="w-full md:w-2/3 pt-4">
<h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">Strategic identity design — <span className="italic">with taste.</span></h2>
<p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6">
                        Most designers ask: "What style do you like?"<br/>
                        I ask: <strong>"What should people feel — and why should they choose you?"</strong>
</p>
<p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6">
                        I'm Roshni Sugeesh — brand identity &amp; graphic designer, and founder of <strong>Starbloom Studio</strong>.
                    </p>
<p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-8">
                        Food isn't a random niche for me. I cook. I notice restraint, balance, detail, and sensory experience — and I bring that same discernment into branding. Because good branding can't fake quality. But it <em>can</em> clarify it.
                    </p>
<img alt="Signature" className="h-12 opacity-80" src="https://api.iconify.design/lucide:signature.svg?color=%231c1917&amp;strokeWidth=1"/>
</div>
</div>
</section>

<section className="w-full bg-paper py-24 px-6 border-t border-neutral-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="font-mono text-xs text-rust uppercase tracking-widest">How It Works</span>
<h2 className="font-serif text-4xl text-ink mt-3">The Starbloom Framework</h2>
</div>
<div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:h-full before:w-px before:bg-neutral-200">

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-paper border border-ink rounded-full z-10 mt-6 group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0">
<span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1 block">Stage 01</span>
<h3 className="font-serif text-2xl text-ink">Taste &amp; Truth (Discovery)</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0">
<p className="text-sm text-neutral-600 font-light mb-2">We map the reality: your product, your audience, your positioning.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">Output: Brand Direction + North Star</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-paper border border-ink rounded-full z-10 mt-6 group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0 md:order-2">
<span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1 block">Stage 02</span>
<h3 className="font-serif text-2xl text-ink">Build the System</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0 md:order-1 md:text-right">
<p className="text-sm text-neutral-600 font-light mb-2">Logo suite, typography, visual language — designed as a cohesive world.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">Output: Complete Identity System</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-paper border border-ink rounded-full z-10 mt-6 group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0">
<span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1 block">Stage 03</span>
<h3 className="font-serif text-2xl text-ink">Apply It (Touchpoints)</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0">
<p className="text-sm text-neutral-600 font-light mb-2">Menus, packaging, social, signage — based on what you actually need.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">Output: Real World Assets</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start md:justify-between group">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[4px] w-2 h-2 bg-ink rounded-full z-10 mt-6 group-hover:scale-125 transition-transform"></div>
<div className="md:w-[45%] md:text-right pl-12 md:pl-0 md:order-2">
<span className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-1 block">Stage 04</span>
<h3 className="font-serif text-2xl text-ink">Handoff &amp; Guidelines</h3>
</div>
<div className="md:w-[45%] pl-12 md:pl-0 md:order-1 md:text-right">
<p className="text-sm text-neutral-600 font-light mb-2">Clean files. Clear rules. Easy execution.</p>
<p className="font-mono text-[10px] text-rust uppercase tracking-wide">Output: Brand Guidelines + Files</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-neutral-50 py-24 px-6 border-t border-neutral-100" id="case-studies">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="font-serif text-4xl text-ink max-w-xl">Brands don't win because they look nice. They win because they're remembered.</h2>
<span className="hidden md:inline font-mono text-xs text-neutral-400 uppercase tracking-widest">Selected Works</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group cursor-pointer">
<div className="w-full aspect-video bg-white mb-6 border border-neutral-200 overflow-hidden relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-neutral-300 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute top-0 right-0 p-4 font-mono text-xs text-neutral-400 uppercase">Case 01</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-serif text-2xl text-ink">Restaurant / Café Rebrand</h3>
<p className="text-sm text-neutral-500 font-light line-clamp-2">The Problem: strong food, weak perception. We fixed positioning, identity, and menu direction.</p>
<span className="text-xs font-mono text-rust uppercase tracking-widest mt-2 group-hover:translate-x-1 transition-transform inline-block">Read Case Study →</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-video bg-white mb-6 border border-neutral-200 overflow-hidden relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-neutral-300 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
<div className="absolute top-0 right-0 p-4 font-mono text-xs text-neutral-400 uppercase">Case 02</div>
</div>
<div className="flex flex-col gap-2">
<h3 className="font-serif text-2xl text-ink">Label &amp; Packaging System</h3>
<p className="text-sm text-neutral-500 font-light line-clamp-2">"Homemade" was reading as "unprofessional". Created a scalable packaging hierarchy.</p>
<span className="text-xs font-mono text-rust uppercase tracking-widest mt-2 group-hover:translate-x-1 transition-transform inline-block">Read Case Study →</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-24 px-6 border-t border-neutral-100" id="services">
<div className="max-w-5xl mx-auto">
<h2 className="font-serif text-4xl text-center mb-16">Services</h2>
<div className="space-y-6">

<div className="border border-neutral-200 p-8 md:p-10 hover:border-neutral-400 transition-colors bg-neutral-50/50">
<div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
<h3 className="font-serif text-2xl text-ink"><span className="font-mono text-sm text-neutral-400 mr-3">01</span>Brand Identity (Signature)</h3>
<span className="font-mono text-[10px] bg-neutral-100 px-2 py-1 uppercase tracking-widest text-neutral-500 mt-2 md:mt-0 self-start md:self-auto">Most Popular</span>
</div>
<p className="text-sm text-neutral-600 font-light mb-6 max-w-2xl">Brand direction, creative strategy, logo suite, color/type systems, patterns, guidelines. Best for founders building a serious brand presence.</p>
<div className="pt-6 border-t border-dashed border-neutral-200 flex justify-between items-center">
<span className="font-mono text-xs text-neutral-400">Custom Investment</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="plus"></i>
</div>
</div>

<div className="border border-neutral-200 p-8 md:p-10 hover:border-neutral-400 transition-colors bg-neutral-50/50">
<div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
<h3 className="font-serif text-2xl text-ink"><span className="font-mono text-sm text-neutral-400 mr-3">02</span>Identity + Packaging System</h3>
</div>
<p className="text-sm text-neutral-600 font-light mb-6 max-w-2xl">Everything in signature + packaging hierarchy, layout systems, SKU logic, and print-ready files. Best for brands selling online + offline.</p>
<div className="pt-6 border-t border-dashed border-neutral-200 flex justify-between items-center">
<span className="font-mono text-xs text-neutral-400">Custom Investment</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="plus"></i>
</div>
</div>

<div className="border border-neutral-200 p-8 md:p-10 hover:border-neutral-400 transition-colors bg-neutral-50/50">
<div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
<h3 className="font-serif text-2xl text-ink"><span className="font-mono text-sm text-neutral-400 mr-3">03</span>Hospitality Collateral</h3>
</div>
<p className="text-sm text-neutral-600 font-light mb-6 max-w-2xl">Menu design, signage, table collateral, social templates. Ensure the entire experience feels cohesive.</p>
<div className="pt-6 border-t border-dashed border-neutral-200 flex justify-between items-center">
<span className="font-mono text-xs text-neutral-400">Add-on Scope</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-ink text-paper py-24 px-6 relative overflow-hidden" id="investment">
<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="font-serif text-4xl mb-8">What you'll walk away with</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-500 mt-1" data-lucide="check"></i>
<span className="font-sans font-light text-neutral-300">A brand that looks like it belongs in your price point.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-500 mt-1" data-lucide="check"></i>
<span className="font-sans font-light text-neutral-300">A system you can actually use (not a PDF that dies).</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-500 mt-1" data-lucide="check"></i>
<span className="font-sans font-light text-neutral-300">Consistency across menu, packaging, and social.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-500 mt-1" data-lucide="check"></i>
<span className="font-sans font-light text-neutral-300">Higher perceived value for better pricing.</span>
</li>
</ul>
</div>
<div className="border-t md:border-t-0 md:border-l border-neutral-800 pt-12 md:pt-0 md:pl-12">
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 block">Investment</span>
<h2 className="font-serif text-3xl mb-6">Custom pricing. Built around your reality.</h2>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-8">
                        Every project varies by scope, timeline, and complexity. I don't use cookie-cutter prices because I don't deliver cookie-cutter brands.
                    </p>
<div className="space-y-2 mb-8">
<div className="flex justify-between border-b border-neutral-800 pb-2">
<span className="font-mono text-xs text-neutral-500">Identity</span>
<span className="font-mono text-xs text-paper">Custom Quote</span>
</div>
<div className="flex justify-between border-b border-neutral-800 pb-2">
<span className="font-mono text-xs text-neutral-500">Identity + Packaging</span>
<span className="font-mono text-xs text-paper">Custom Quote</span>
</div>
</div>
<button className="w-full py-4 border border-neutral-700 hover:bg-paper hover:text-ink transition-colors font-mono text-xs uppercase tracking-widest">
                        Request a Quote
                    </button>
</div>
</div>
</section>

<section className="w-full bg-paper py-24 px-6 border-t border-neutral-100">
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="font-serif text-2xl text-ink mb-6">This is for you if...</h3>
<ul className="space-y-3 font-light text-sm text-neutral-600">
<li className="flex gap-2"><span>•</span> Your product is good and you're ready to look like it.</li>
<li className="flex gap-2"><span>•</span> You want a brand system, not just a logo.</li>
<li className="flex gap-2"><span>•</span> You care about taste, clarity, and consistency.</li>
</ul>
</div>
<div>
<h3 className="font-serif text-2xl text-neutral-400 mb-6">Not for you if...</h3>
<ul className="space-y-3 font-light text-sm text-neutral-400">
<li className="flex gap-2"><span>×</span> You want "something quick" with no strategy.</li>
<li className="flex gap-2"><span>×</span> You're collecting aesthetics instead of building a brand.</li>
<li className="flex gap-2"><span>×</span> You want 12 logo options and vibes-only decisions.</li>
</ul>
</div>
</div>
</section>

<section className="w-full bg-neutral-50 py-24 px-6 border-t border-neutral-100" id="notes">
<div className="max-w-3xl mx-auto">
<h2 className="font-serif text-3xl text-center mb-12">Frequently Asked</h2>
<div className="space-y-4">
<details className="group border-b border-neutral-200 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-ink">
                            How long does a project take?
                            <span className="text-neutral-400 group-open:rotate-180 transition-transform">↓</span>
</summary>
<p className="text-sm text-neutral-500 font-light mt-4 leading-relaxed">Most identity projects run in focused phases (4-8 weeks) depending on scope and feedback speed.</p>
</details>
<details className="group border-b border-neutral-200 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-ink">
                            Do you do just a logo?
                            <span className="text-neutral-400 group-open:rotate-180 transition-transform">↓</span>
</summary>
<p className="text-sm text-neutral-500 font-light mt-4 leading-relaxed">Rarely. F&amp;B needs a system. If you only need a logo, I'll point you to the right solution — but my best work happens with full foundations.</p>
</details>
<details className="group border-b border-neutral-200 pb-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-ink">
                            Do you work with brands outside India?
                            <span className="text-neutral-400 group-open:rotate-180 transition-transform">↓</span>
</summary>
<p className="text-sm text-neutral-500 font-light mt-4 leading-relaxed">Yes. My process is remote-friendly with clear handoffs and smooth collaboration.</p>
</details>
</div>
</div>
</section>

<footer className="w-full bg-white py-24 px-6 text-center border-t border-neutral-100">
<div className="max-w-2xl mx-auto">
<span className="font-mono text-xs text-rust uppercase tracking-widest mb-6 block">Final Call</span>
<h2 className="font-serif text-5xl md:text-6xl text-ink mb-8 tracking-tight">Ready to stop blending in?</h2>
<p className="font-sans text-neutral-600 font-light mb-10">
                    If your food is good and your experience is thoughtful — your branding should prove it before the first bite.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="bg-ink text-paper px-8 py-3 rounded-sm hover:bg-sepia transition-all duration-300 w-full md:w-auto">
<span className="font-mono text-xs tracking-widest uppercase">Book a 30-min Call</span>
</button>
<button className="border border-neutral-200 text-ink px-8 py-3 rounded-sm hover:border-neutral-800 transition-all duration-300 w-full md:w-auto">
<span className="font-mono text-xs tracking-widest uppercase">Get a Quote</span>
</button>
</div>
<div className="mt-16 pt-8 border-t border-neutral-100 flex justify-between items-center text-[10px] text-neutral-400 font-mono uppercase">
<span>© Starbloom Studio</span>
<span>Designed by Alchemy</span>
</div>
</div>
</footer>
</main>





    </>
  );
}
