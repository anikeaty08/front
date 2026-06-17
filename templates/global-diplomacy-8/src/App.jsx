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



        lucide.createIcons();

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
            // Randomly spread stars
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
        
        // High quality textures for better look
        const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
        const specTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');
        const normalTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg');
        const lightsTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png');
        const cloudsTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png');

        // Darker, high contrast earth material with city lights
        const material = new THREE.MeshPhongMaterial({
            map: earthTexture,
            specularMap: specTexture,
            normalMap: normalTexture,
            emissiveMap: lightsTexture,
            emissive: 0xffcc33, // Golden lights
            emissiveIntensity: 0.6,
            color: 0x152030, // Dark blueish base
            specular: 0x555555,
            shininess: 10
        });
        const globe = new THREE.Mesh(geometry, material);
        globeGroup.add(globe);

        // --- 3. CLOUDS (Separate Layer) ---
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

        // --- 5. CONNECTIONS & DATA TRAFFIC ---
        const connectionsGroup = new THREE.Group();
        globeGroup.add(connectionsGroup);

        const trafficParticles = []; // Store particles to animate

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
            
            // Curve height depends on distance
            const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(5 + (dist * 0.2));
            
            const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
            const points = curve.getPoints(50);
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            
            // Faint static line
            const material = new THREE.LineBasicMaterial({ 
                color: 0xffffff, 
                transparent: true, 
                opacity: 0.1 
            });
            const line = new THREE.Line(geometry, material);
            connectionsGroup.add(line);

            // Add Moving Particle (Data Packet)
            const particleGeo = new THREE.SphereGeometry(0.06, 8, 8);
            const particleMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b }); // Amber particle
            const particle = new THREE.Mesh(particleGeo, particleMat);
            connectionsGroup.add(particle);
            
            // Store particle data for animation
            trafficParticles.push({
                mesh: particle,
                curve: curve,
                progress: Math.random() // Random start
            });
        }

        const cities = [
            {lat: 40.71, lon: -74.00}, {lat: 51.50, lon: -0.12}, // NY, London
            {lat: 35.68, lon: 139.69}, {lat: -33.86, lon: 151.20}, // Tokyo, Sydney
            {lat: -22.90, lon: -43.17}, {lat: 25.20, lon: 55.27}, // Rio, Dubai
            {lat: 1.35, lon: 103.81}, {lat: 48.85, lon: 2.35}, // Singapore, Paris
            {lat: 37.77, lon: -122.41}, {lat: 19.07, lon: 72.87} // SF, Mumbai
        ];

        // Generate random connections
        for(let i=0; i<cities.length; i++) {
            // Connect to 2 random other cities
            for(let k=0; k<2; k++) {
                const targetIndex = (i + Math.floor(Math.random() * (cities.length - 1)) + 1) % cities.length;
                createArc(cities[i].lat, cities[i].lon, cities[targetIndex].lat, cities[targetIndex].lon);
            }
        }

        // Add glow markers at cities
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
        
        const rimLight = new THREE.SpotLight(0xf59e0b, 8); // Stronger Amber rim
        rimLight.position.set(-10, 10, -5);
        rimLight.lookAt(0,0,0);
        scene.add(rimLight);

        // --- INTERACTION ---
        let mouseX = 0;
        let mouseY = 0;
        window.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // --- ANIMATION LOOP ---
        function animate() {
            requestAnimationFrame(animate);

            // 1. Globe Rotation (Base)
            globe.rotation.y += 0.0005;
            
            // 2. Cloud Rotation (Different speed for depth)
            cloudMesh.rotation.y += 0.0007;
            cloudMesh.rotation.x += 0.0001;

            // 3. Atmosphere
            atmosphere.rotation.y += 0.0005;

            // 4. Data Traffic Animation
            trafficParticles.forEach(p => {
                p.progress += 0.004;
                if(p.progress > 1) p.progress = 0;
                
                const point = p.curve.getPoint(p.progress);
                p.mesh.position.copy(point);
            });

            // 5. Starfield Drift
            starMesh.rotation.y -= 0.0002;

            // 6. Interactive Parallax (Mouse)
            // Gently tilt the whole group based on mouse
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

        globeGroup.rotation.x = 0.2;
        globeGroup.rotation.y = 4.5;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        });

        tl.to(globeGroup.position, { x: 3.5, z: -2, duration: 5 }, "phase1")
          .to(globeGroup.rotation, { y: "+=1.5", x: 0.4, duration: 5 }, "phase1")
          
          .to(globeGroup.position, { x: -3.5, y: 0, z: -1, duration: 5 }, "phase2")
          .to(globeGroup.rotation, { y: "+=1.2", x: -0.2, duration: 5 }, "phase2")
          
          .to(globeGroup.position, { x: 0, y: -5, z: 2, duration: 5 }, "phase3")
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
<i className="w-4 h-4 text-amber-400" data-lucide="globe"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold tracking-widest text-white uppercase">The Diplomatic</span>
<span className="text-[10px] tracking-widest text-zinc-400 uppercase">Informer</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-[11px] font-medium text-zinc-400 tracking-widest uppercase">
<a className="hover:text-amber-400 transition-colors" href="#">Global Affairs</a>
<a className="hover:text-amber-400 transition-colors" href="#">Intelligence</a>
<a className="hover:text-amber-400 transition-colors" href="#">Events</a>
</div>
<button className="hidden md:flex items-center gap-2 border border-white/10 px-4 py-2 rounded text-[10px] font-medium hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300 uppercase tracking-wider bg-white/5">
<span>Login</span>
</button>
</nav>

<div className="relative z-10">

<section className="h-screen flex flex-col justify-center px-6 md:px-24 w-full section-1">
<div className="max-w-4xl w-full">
<div className="space-y-6">
<div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-950/20 backdrop-blur-sm w-fit">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
</span>
<span className="text-[10px] font-semibold text-amber-500 uppercase tracking-widest">Global Intelligence Network</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] text-white">
                        Global <br/>
<span className="gold-gradient-text">Diplomacy.</span>
</h1>
<p className="text-sm md:text-base text-zinc-400 max-w-xl font-light leading-relaxed tracking-wide border-l border-amber-500/30 pl-6">
                        Bridging nations, institutions, and opportunities through data-driven intelligence and strategic communication.
                    </p>
<div className="pt-6 flex gap-4">
<button className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded text-xs font-semibold tracking-widest hover:bg-zinc-200 transition-all duration-300">
<span>START BRIEFING</span>
<i className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" data-lucide="arrow-down"></i>
</button>
</div>
</div>
</div>
</section>

<section className="h-screen flex items-center w-full section-2 px-6 md:px-24">
<div className="w-full md:w-1/2">

<div className="p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-lg space-y-6 max-w-md">
<i className="w-6 h-6 text-amber-500 mb-4" data-lucide="network"></i>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Borderless<br/>Connectivity</h2>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Our proprietary network spans 120+ countries, offering real-time insights into geopolitical shifts and market opportunities. We visualize the data that moves the world.
                    </p>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
<div>
<div className="text-2xl font-semibold text-white">196</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Countries Monitored</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">24/7</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Live Updates</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen flex items-center justify-end w-full section-3 px-6 md:px-24">
<div className="w-full md:w-1/2 flex justify-end">
<div className="p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-lg space-y-6 max-w-md text-right">
<div className="flex justify-end mb-4"><i className="w-6 h-6 text-amber-500" data-lucide="cpu"></i></div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Predictive<br/>Intelligence</h2>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Leveraging advanced algorithms to forecast diplomatic outcomes. From trade agreements to policy shifts, stay ahead of the curve with The Informer.
                    </p>
<div className="pt-4">
<button className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest hover:text-amber-300">
                            VIEW CASE STUDIES <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="h-[80vh] flex flex-col items-center justify-center w-full section-4 px-6 text-center">
<div className="max-w-2xl space-y-8 bg-[#050A14]/80 p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Join the<br/><span className="text-zinc-600">Inner Circle</span></h2>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
                    Access exclusive reports, private events, and a network of global decision-makers.
                </p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<input className="bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 w-full md:w-64 placeholder:text-zinc-600" placeholder="Enter your email" type="email"/>
<button className="bg-amber-500 text-black px-6 py-3 rounded text-xs font-semibold tracking-widest hover:bg-amber-400 transition-all uppercase">
                        Request Access
                    </button>
</div>
<div className="pt-8 text-[10px] text-zinc-600 uppercase tracking-widest">
                    © 2024 The Diplomatic Informer
                </div>
</div>
</section>
</div>


    </>
  );
}
