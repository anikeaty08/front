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



        // --------------------------------------------------------
        // THREE.JS SETUP
        // --------------------------------------------------------
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050A14, 0.02);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 15);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // GROUPS
        const universeGroup = new THREE.Group();
        const globeGroup = new THREE.Group();
        universeGroup.add(globeGroup);
        scene.add(universeGroup);

        // --- 1. STARS BACKGROUND ---
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 1500;
        const posArray = new Float32Array(starsCount * 3);
        
        for(let i = 0; i < starsCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 80;
        }
        
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starsMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });
        const starMesh = new THREE.Points(starsGeometry, starsMaterial);
        universeGroup.add(starMesh);

        // --- 2. EARTH ---
        const geometry = new THREE.SphereGeometry(5, 64, 64);
        const textureLoader = new THREE.TextureLoader();
        
        const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
        const specTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');
        const normalTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg');
        const lightsTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png');
        const cloudsTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png');

        const material = new THREE.MeshPhongMaterial({
            map: earthTexture,
            specularMap: specTexture,
            normalMap: normalTexture,
            emissiveMap: lightsTexture,
            emissive: 0xffcc33,
            emissiveIntensity: 0.6,
            color: 0x152030,
            specular: 0x555555,
            shininess: 10
        });
        const globe = new THREE.Mesh(geometry, material);
        globeGroup.add(globe);

        // --- 3. CLOUDS ---
        const cloudGeo = new THREE.SphereGeometry(5.08, 64, 64);
        const cloudMat = new THREE.MeshLambertMaterial({
            map: cloudsTexture,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide
        });
        const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
        globeGroup.add(cloudMesh);

        // --- 4. ATMOSPHERE GLOW ---
        const atmosphereGeo = new THREE.SphereGeometry(5.2, 64, 64);
        const atmosphereMat = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 3.0);
                    gl_FragColor = vec4(0.96, 0.62, 0.04, 1.0) * intensity * 1.5;
                }
            `,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true
        });
        const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
        globeGroup.add(atmosphere);

        // --- 5. CONNECTIONS ---
        const connectionsGroup = new THREE.Group();
        globeGroup.add(connectionsGroup);
        const trafficParticles = [];

        function latLonToVector3(lat, lon, radius) {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lon + 180) * (Math.PI / 180);
            const x = -(radius * Math.sin(phi) * Math.cos(theta));
            const z = (radius * Math.sin(phi) * Math.sin(theta));
            const y = (radius * Math.cos(phi));
            return new THREE.Vector3(x, y, z);
        }

        function createArc(startLat, startLon, endLat, endLon) {
            const start = latLonToVector3(startLat, startLon, 5);
            const end = latLonToVector3(endLat, endLon, 5);
            const dist = start.distanceTo(end);
            const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(5 + (dist * 0.2));
            const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
            const points = curve.getPoints(50);
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            
            const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 });
            const line = new THREE.Line(geometry, material);
            connectionsGroup.add(line);

            const particleGeo = new THREE.SphereGeometry(0.06, 8, 8);
            const particleMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
            const particle = new THREE.Mesh(particleGeo, particleMat);
            connectionsGroup.add(particle);
            
            trafficParticles.push({ mesh: particle, curve: curve, progress: Math.random() });
        }

        const cities = [
            {lat: 40.71, lon: -74.00}, {lat: 51.50, lon: -0.12},
            {lat: 35.68, lon: 139.69}, {lat: -33.86, lon: 151.20},
            {lat: -22.90, lon: -43.17}, {lat: 25.20, lon: 55.27},
            {lat: 1.35, lon: 103.81}, {lat: 48.85, lon: 2.35},
            {lat: 37.77, lon: -122.41}, {lat: 19.07, lon: 72.87}
        ];

        for(let i=0; i<cities.length; i++) {
            for(let k=0; k<2; k++) {
                const targetIndex = (i + Math.floor(Math.random() * (cities.length - 1)) + 1) % cities.length;
                createArc(cities[i].lat, cities[i].lon, cities[targetIndex].lat, cities[targetIndex].lon);
            }
        }

        cities.forEach(city => {
            const pos = latLonToVector3(city.lat, city.lon, 5.01);
            const markerGeo = new THREE.RingGeometry(0.06, 0.08, 32);
            const markerMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, side: THREE.DoubleSide });
            const marker = new THREE.Mesh(markerGeo, markerMat);
            marker.position.copy(pos);
            marker.lookAt(0,0,0);
            globeGroup.add(marker);
        });

        // --- LIGHTING ---
        const ambientLight = new THREE.AmbientLight(0x050505);
        scene.add(ambientLight);
        const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
        sunLight.position.set(10, 5, 10);
        scene.add(sunLight);
        const rimLight = new THREE.SpotLight(0xf59e0b, 8);
        rimLight.position.set(-10, 10, -5);
        rimLight.lookAt(0,0,0);
        scene.add(rimLight);

        // --- ANIMATION LOOP ---
        let mouseX = 0;
        let mouseY = 0;
        window.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        function animate() {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.0005;
            cloudMesh.rotation.y += 0.0007;
            cloudMesh.rotation.x += 0.0001;
            atmosphere.rotation.y += 0.0005;

            trafficParticles.forEach(p => {
                p.progress += 0.004;
                if(p.progress > 1) p.progress = 0;
                const point = p.curve.getPoint(p.progress);
                p.mesh.position.copy(point);
            });

            starMesh.rotation.y -= 0.0002;
            gsap.to(universeGroup.rotation, {
                x: mouseY * 0.1,
                y: mouseX * 0.1,
                duration: 1,
                ease: "power2.out"
            });

            renderer.render(scene, camera);
        }
        animate();

        // --- SCROLL ANIMATION (GSAP) ---
        gsap.registerPlugin(ScrollTrigger);

        // Initial state
        globeGroup.rotation.x = 0.2;
        globeGroup.rotation.y = 4.5;
        
        // Sequence: 
        // 1. Hero: Globe on right (default-ish) -> Move to Left for Features
        // 2. Features: Globe stays Left, rotates
        // 3. Tech Dive: Globe drops down/centers

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        });

        // Phase 1: Move globe to left side so Features grid can be on right
        tl.to(globeGroup.position, { x: -3.5, z: -2, duration: 5 }, "phase1")
          .to(globeGroup.rotation, { y: "+=1.5", x: 0.4, duration: 5 }, "phase1")
          
        // Phase 2: Rotate while scrolling through grid
          .to(globeGroup.position, { x: -4, y: 1, z: -3, duration: 5 }, "phase2")
          .to(globeGroup.rotation, { y: "+=1.2", x: -0.2, duration: 5 }, "phase2")
          
        // Phase 3: Center and drop for Tech section
          .to(globeGroup.position, { x: 0, y: -6, z: 2, duration: 5 }, "phase3")
          .to(globeGroup.rotation, { y: "+=1.0", x: 0.5, duration: 5 }, "phase3");

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
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
      

<div id="canvas-container"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center border-b border-white/5 bg-[#050A14]/80 backdrop-blur-md">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded border border-amber-500/30 bg-amber-500/10 flex items-center justify-center">
<iconify-icon className="text-amber-400 text-lg" icon="solar:globe-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold tracking-widest text-white uppercase">The Diplomatic</span>
<span className="text-[10px] tracking-widest text-zinc-400 uppercase">Informer</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-[11px] font-medium text-zinc-400 tracking-widest uppercase">
<a className="hover:text-amber-400 transition-colors" href="#">Global Affairs</a>
<a className="text-white transition-colors" href="#">Intelligence</a>
<a className="hover:text-amber-400 transition-colors" href="#">Events</a>
</div>
<button className="hidden md:flex items-center gap-2 border border-white/10 px-4 py-2 rounded text-[10px] font-medium hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 uppercase tracking-wider bg-white/5">
<span>Login</span>
</button>
</nav>

<div className="relative z-10">

<section className="min-h-screen flex flex-col justify-center px-6 md:px-24 w-full section-1 pt-20">
<div className="max-w-3xl w-full z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-950/10 backdrop-blur-sm w-fit">
<iconify-icon className="text-amber-500" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-[10px] font-semibold text-amber-500 uppercase tracking-widest">System Features v2.4</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-white">
                        Strategic <br/>
<span className="gold-gradient-text">Capabilities.</span>
</h1>
<p className="text-sm md:text-base text-zinc-400 max-w-lg font-light leading-relaxed tracking-wide border-l border-amber-500/30 pl-6">
                        An integrated suite of intelligence tools designed for the modern statecraft. Monitor, analyze, and predict outcomes with military-grade precision.
                    </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5 w-full md:w-3/4">
<div>
<div className="text-2xl font-semibold text-white tracking-tight">12ms</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Latency</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">AES-256</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Encryption</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">140+</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Data Sources</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">99.9%</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Uptime</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center w-full section-2 px-6 md:px-24 py-20">
<div className="w-full flex justify-end">

<div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="border-gradient group">
<div className="border-gradient-inner p-6 flex flex-col justify-between h-full glass-card">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-amber-400 text-xl" height="24" icon="solar:graph-new-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Predictive Analytics</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
                                    Proprietary algorithms that process millions of data points to forecast diplomatic shifts before they occur.
                                </p>
</div>
</div>
</div>

<div className="border-gradient group">
<div className="border-gradient-inner p-6 flex flex-col justify-between h-full glass-card">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-amber-400 text-xl" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Sovereign Security</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
                                    End-to-end encrypted communication channels designed for sensitive state-level correspondence.
                                </p>
</div>
</div>
</div>

<div className="border-gradient group md:col-span-2">
<div className="border-gradient-inner p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 glass-card">
<div className="flex-1">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-amber-400 text-xl" height="24" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Global Sentiment Pulse</h3>
<p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                    Real-time aggregation of media and public sentiment across 196 nations, visualized in our command dashboard.
                                </p>
</div>

<div className="w-full md:w-1/3 bg-black/50 border border-white/10 rounded p-3 space-y-2">
<div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
<span>Region</span>
<span>Stability</span>
</div>
<div className="flex items-center justify-between text-xs text-zinc-300 border-b border-white/5 pb-1">
<span>EMEA</span>
<span className="text-emerald-500">94%</span>
</div>
<div className="flex items-center justify-between text-xs text-zinc-300 border-b border-white/5 pb-1">
<span>APAC</span>
<span className="text-amber-500">87%</span>
</div>
<div className="flex items-center justify-between text-xs text-zinc-300">
<span>LATAM</span>
<span className="text-emerald-500">91%</span>
</div>
</div>
</div>
</div>

<div className="border-gradient group">
<div className="border-gradient-inner p-6 flex flex-col justify-between h-full glass-card">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-amber-400 text-xl" height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Policy Archives</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
                                    Instant access to historical treaties, agreements, and classified briefs via semantic search.
                                </p>
</div>
</div>
</div>

<div className="border-gradient group">
<div className="border-gradient-inner p-6 flex flex-col justify-between h-full glass-card">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-amber-400 text-xl" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Envoy Network</h3>
<p className="text-xs text-zinc-400 leading-relaxed">
                                    Secure directory and connection protocols for verified diplomatic personnel worldwide.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center justify-center w-full section-3 px-6 md:px-24">
<div className="w-full max-w-4xl flex flex-col items-center text-center space-y-12">
<div className="space-y-4">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">The Intelligence Engine</h2>
<p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
                        Built on a decentralized node architecture, ensuring data sovereignty and resilience against systemic shocks.
                    </p>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-md">
<div className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center gap-4 hover:bg-white/5 transition-colors duration-300">
<iconify-icon className="text-amber-500 text-3xl" icon="solar:database-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider">Ingestion</h4>
<p className="text-[11px] text-zinc-500 leading-relaxed">
                            Satellites, News Feeds, Economic Reports, OSINT
                        </p>
</div>
<div className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center gap-4 hover:bg-white/5 transition-colors duration-300 relative">

<div className="hidden md:block absolute top-1/2 -left-3 w-6 h-[1px] bg-amber-500/50 z-10"></div>
<iconify-icon className="text-amber-500 text-3xl" icon="solar:cpu-bolt-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider">Processing</h4>
<p className="text-[11px] text-zinc-500 leading-relaxed">
                            NLP, Sentiment Analysis, Pattern Recognition
                        </p>
</div>
<div className="p-8 flex flex-col items-center gap-4 hover:bg-white/5 transition-colors duration-300 relative">
<div className="hidden md:block absolute top-1/2 -left-3 w-6 h-[1px] bg-amber-500/50 z-10"></div>
<iconify-icon className="text-amber-500 text-3xl" icon="solar:presentation-graph-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider">Insight</h4>
<p className="text-[11px] text-zinc-500 leading-relaxed">
                            Actionable Briefs, Heatmaps, Threat Alerts
                        </p>
</div>
</div>
<div className="pt-4">
<button className="inline-flex items-center gap-2 text-zinc-400 text-xs font-semibold tracking-widest hover:text-amber-400 transition-colors uppercase">
                        View Technical Documentation
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="h-[80vh] flex flex-col items-center justify-center w-full section-4 px-6 text-center">
<div className="max-w-2xl space-y-8 bg-[#050A14]/80 p-12 rounded-2xl border border-white/5 backdrop-blur-sm relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white relative z-10">
                    Join the<br/><span className="text-zinc-600">Inner Circle</span>
</h2>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto relative z-10">
                    Access exclusive reports, private events, and a network of global decision-makers.
                </p>
<div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
<input className="bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 w-full md:w-64 placeholder:text-zinc-600 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-amber-500 text-black px-6 py-3 rounded text-xs font-semibold tracking-widest hover:bg-amber-400 transition-all uppercase">
                        Request Access
                    </button>
</div>
<div className="pt-8 text-[10px] text-zinc-600 uppercase tracking-widest relative z-10">
                    © 2024 The Diplomatic Informer
                </div>
</div>
</section>
</div>


    </>
  );
}
