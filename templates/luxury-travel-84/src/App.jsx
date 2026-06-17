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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
sky: { 450: '#38bdf8' }
},
animation: {
'fade-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
}
}
}
}



        uniform float uTime;
        varying float vAlpha;
        // Simplex Noise 
        vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
        vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
        vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
        float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+1.0*C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.0+3.0*C.xxx;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}

        void main() {
            vec3 pos = position;
            // Calmer, slower undulation for "Relaxation" vibe
            float noise = snoise(vec3(pos.x * 0.3 + uTime * 0.05, pos.y * 0.3, pos.z * 0.3));
            vec3 finalPos = pos + (normalize(pos) * noise * 0.25);

            vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            gl_PointSize = 3.5 * (30.0 / -mvPosition.z);
            vAlpha = 1.0 - smoothstep(12.0, 28.0, -mvPosition.z);
        }
    


        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
            vec2 center = gl_PointCoord - vec2(0.5);
            float d = length(center);
            if (d > 0.5) discard;
            float alpha = smoothstep(0.5, 0.3, d) * vAlpha;
            gl_FragColor = vec4(uColor, alpha * 0.85); // Slightly more transparent
        }
    


        lucide.createIcons();

        // Scene Setup
        const canvasContainer = document.getElementById('canvas-container');
        const svgLayer = document.getElementById('connection-lines');
        const trackersLayer = document.getElementById('trackers-layer');

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xf8fafc, 0.03);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 28;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        canvasContainer.appendChild(renderer.domElement);

        const worldGroup = new THREE.Group();
        scene.add(worldGroup);

        // Particle Sphere
        const geometry = new THREE.SphereGeometry(7, 84, 84); // slightly more detail
        const uniforms = {
            uTime: { value: 0 },
            uColor: { value: new THREE.Color('#38bdf8') }
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
        worldGroup.add(particles);

        // Define Vacation Pins (Popular destinations)
        const pins = [
            { id: "PAR", label: "Paris", lat: 48, lon: 2, vec: new THREE.Vector3(-1.2, 4.0, 5.2), el: null }, // Europe
            { id: "KYO", label: "Kyoto", lat: 35, lon: 139, vec: new THREE.Vector3(5.8, 1.9, 3.0), el: null }, // Asia
            { id: "MLE", label: "Maldives", lat: 3, lon: 73, vec: new THREE.Vector3(3.5, -1.0, 5.8), el: null }, // Indian Ocean
            { id: "SANT", label: "Santorini", lat: 36, lon: 25, vec: new THREE.Vector3(0.5, 3.0, 6.0), el: null }, // Med
            { id: "NYC", label: "New York", lat: 40, lon: -74, vec: new THREE.Vector3(-5.5, 1.8, 3.8), el: null }, // US
            { id: "RIO", label: "Rio", lat: -22, lon: -43, vec: new THREE.Vector3(-4.0, -3.5, 5.0), el: null } // S. America
        ];

        // Create Pin Elements
        pins.forEach(pin => {
            const el = document.createElement('div');
            el.className = 'point-marker';
            el.innerHTML = `
                <div class="pin-wrapper">
                    <div class="point-tag">
                        <span class="text-[10px] font-bold text-slate-700 tracking-tight uppercase">${pin.label}</span>
                        <span class="text-[9px] text-sky-500 font-medium tracking-wide">Explore</span>
                    </div>
                    <div class="pin-head"></div>
                    <div class="pin-stem"></div>
                </div>
            `;
            trackersLayer.appendChild(el);
            pin.el = el;
        });

        // Create Connections (Routes offered)
        const voyages = [
            { from: 'PAR', to: 'NYC' }, 
            { from: 'PAR', to: 'SANT' }, 
            { from: 'MLE', to: 'KYO' }, 
            { from: 'NYC', to: 'RIO' }, 
            { from: 'SANT', to: 'MLE' } 
        ];

        voyages.forEach(v => {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("class", "flight-line active");
            line.style.animationDelay = `${Math.random() * 2}s`;
            svgLayer.appendChild(line);
            v.el = line;
            v.p1 = pins.find(p => p.id === v.from);
            v.p2 = pins.find(p => p.id === v.to);
        });

        // Animation Loop
        let time = 0;
        let mouseX = 0;
        let mouseY = 0;
        let targetRotX = 0;
        let targetRotY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        function animate() {
            requestAnimationFrame(animate);
            time += 0.005;
            uniforms.uTime.value = time * 40;

            // Rotation
            worldGroup.rotation.y += 0.001; // Slower rotation for relaxed feel
            targetRotY = mouseX * 0.15;
            targetRotX = mouseY * 0.15;
            worldGroup.rotation.y += (targetRotY - worldGroup.rotation.y) * 0.05;
            worldGroup.rotation.x += (targetRotX - worldGroup.rotation.x) * 0.05;

            // Update Pins
            const coords = {}; 

            pins.forEach(pin => {
                const tempV = pin.vec.clone();
                tempV.applyEuler(worldGroup.rotation);
                tempV.add(worldGroup.position);
                
                const zDepth = tempV.z;
                tempV.project(camera);

                const x = (tempV.x * .5 + .5) * window.innerWidth;
                const y = (-(tempV.y * .5) + .5) * window.innerHeight;

                coords[pin.id] = { x, y, z: zDepth };

                pin.el.style.transform = `translate(${x}px, ${y}px)`;
                
                if (zDepth > 5.8) { 
                    pin.el.style.opacity = 1;
                    pin.el.classList.add('visible');
                } else { 
                    pin.el.style.opacity = 0;
                    pin.el.classList.remove('visible');
                }
            });

            // Update Lines
            voyages.forEach(v => {
                const c1 = coords[v.from];
                const c2 = coords[v.to];

                if(c1 && c2 && c1.z > 5.5 && c2.z > 5.5) {
                    v.el.setAttribute('x1', c1.x);
                    v.el.setAttribute('y1', c1.y);
                    v.el.setAttribute('x2', c2.x);
                    v.el.setAttribute('y2', c2.y);
                    v.el.style.opacity = 0.5;
                } else {
                    v.el.style.opacity = 0;
                }
            });

            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

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
      

<div className="absolute w-[900px] h-[900px] rounded-full pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 opacity-50" id="ambient-glow" style={{background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(0,0,0,0) 60%)'}}></div>

<svg id="connection-lines">
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#0ea5e9', stopOpacity: '0.0'}}></stop>
<stop offset="50%" style={{stopColor: '#0ea5e9', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: '#0ea5e9', stopOpacity: '0.0'}}></stop>
</lineargradient>
</defs>
</svg>

<div id="trackers-layer"></div>

<div className="absolute inset-0 z-1" id="canvas-container"></div>

<main className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-8 md:p-12">

<header className="animate-slide-up opacity-0 pointer-events-auto" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-sky-600 border border-slate-200 shadow-sm group-hover:shadow-md transition-all duration-300">
<i className="w-5 h-5" data-lucide="compass" strokeWidth="1.5"></i>
</div>
<div>
<span className="block text-sm font-bold text-slate-800 tracking-tight">ATLAS</span>
<span className="flex items-center gap-1.5 mt-0.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-wide">Concierge En Ligne</span>
</span>
</div>
</div>
</header>

<div className="max-w-xl animate-slide-up opacity-0" style={{animationDelay: '0.2s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-slate-200/50 backdrop-blur-md mb-6 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-sky-500"></span>
<span className="text-[11px] font-medium text-slate-600 uppercase tracking-wide">Collection Été 2024</span>
</div>
<h1 className="font-sans text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[0.95] mb-6">
                L'art de <br/>
<span className="text-slate-400/80">s'évader.</span>
</h1>
<p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm font-medium">
                Des séjours sur mesure et des expériences exclusives dans 142 pays. Laissez-nous dessiner votre prochain voyage.
            </p>
<div className="flex items-center gap-4 mt-8 pointer-events-auto">
<button className="h-10 px-5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all hover:translate-y-[-1px] shadow-xl shadow-slate-900/10 flex items-center gap-2">
                    Explorer les Destinations
                </button>
<button className="h-10 px-5 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i> Rendez-vous
                </button>
</div>
</div>

<div className="self-end pointer-events-auto glass-panel rounded-2xl animate-fade-in opacity-0 w-80 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]" style={{animationDelay: '0.4s'}}>
<div className="px-5 py-3.5 border-b border-slate-100/80 bg-slate-50/30 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" data-lucide="sparkles"></i>
<span className="text-xs font-semibold text-slate-700 uppercase tracking-tight">Populaire</span>
</div>
<div className="flex gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
</div>
</div>
<div className="p-2">

<div className="flight-item flex items-center justify-between p-3 rounded-xl cursor-pointer group mb-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="sunset"></i>
</div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<span className="text-xs font-bold text-slate-800">Santorin, Grèce</span>
</div>
<span className="text-[10px] text-slate-500 font-medium">Villa Privée • 7 Nuits</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs font-bold text-slate-900">€2,450</span>
<span className="block text-[9px] text-emerald-600 font-medium">Disponible</span>
</div>
</div>

<div className="flight-item flex items-center justify-between p-3 rounded-xl cursor-pointer group mb-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center border border-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="flower-2"></i>
</div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<span className="text-xs font-bold text-slate-800">Kyoto, Japon</span>
</div>
<span className="text-[10px] text-slate-500 font-medium">Culture &amp; Zen • 10 Nuits</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs font-bold text-slate-900">€3,800</span>
<span className="block text-[9px] text-amber-600 font-medium">Dernières places</span>
</div>
</div>

<div className="flight-item flex items-center justify-between p-3 rounded-xl cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center border border-teal-100 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="waves"></i>
</div>
<div>
<div className="flex items-center gap-2 mb-0.5">
<span className="text-xs font-bold text-slate-800">Maldives</span>
</div>
<span className="text-[10px] text-slate-500 font-medium">Bungalow • Tout Inclus</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs font-bold text-slate-900">€4,200</span>
<span className="block text-[9px] text-emerald-600 font-medium">Offre Spéciale</span>
</div>
</div>
</div>
<div className="px-4 py-3 bg-slate-50/50 border-t border-slate-100 flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
<span className="text-[10px] font-semibold text-slate-500 flex items-center gap-1.5 uppercase tracking-wide">
                    Voir tout le catalogue <i className="w-3 h-3" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</main>





    </>
  );
}
