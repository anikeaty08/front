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



        const init = () => {
            const container = document.getElementById('canvas-container');
            
            // Scene
            const scene = new THREE.Scene();
            // Fog to blend globe into background
            scene.fog = new THREE.FogExp2(0x050505, 0.002);

            // Camera
            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 220;
            camera.position.y = 20;

            // Renderer
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // Controls
            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.enableZoom = false;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.8;

            // --- CREATE THE GLOBE (DOTS) ---
            const particleCount = 7000; // Number of dots
            const sphereRadius = 80;
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const colors = [];

            const colorBase = new THREE.Color(0x444444); // Dark grey dots
            const colorAccent = new THREE.Color(0xef4444); // Red dots (Tailwind red-500)

            // Fibonacci Sphere Algorithm to distribute points evenly
            const phi = Math.PI * (3 - Math.sqrt(5)); 

            for (let i = 0; i < particleCount; i++) {
                const y = 1 - (i / (particleCount - 1)) * 2; 
                const radius = Math.sqrt(1 - y * y);
                const theta = phi * i;

                const x = Math.cos(theta) * radius;
                const z = Math.sin(theta) * radius;

                // Scale to sphere size
                positions.push(x * sphereRadius, y * sphereRadius, z * sphereRadius);

                // Color logic: Some dots are red (active nodes), most are grey
                const isRed = Math.random() > 0.95; 
                if (isRed) {
                    colors.push(colorAccent.r, colorAccent.g, colorAccent.b);
                } else {
                    colors.push(colorBase.r, colorBase.g, colorBase.b);
                }
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            // Material for dots
            const material = new THREE.PointsMaterial({
                size: 0.8,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });

            const globe = new THREE.Points(geometry, material);
            scene.add(globe);

            // --- INNER GLOW SPHERE ---
            // A slightly smaller sphere to block the background stars from showing through the front
            const innerGeometry = new THREE.SphereGeometry(sphereRadius - 1, 32, 32);
            const innerMaterial = new THREE.MeshBasicMaterial({
                color: 0x000000
            });
            const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
            scene.add(innerSphere);

            // --- ATMOSPHERE GLOW ---
            // A slightly larger sphere with shader for rim lighting
            const vertexShader = `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `;
            const fragmentShader = `
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
                    gl_FragColor = vec4(0.9, 0.1, 0.1, 1.0) * intensity;
                }
            `;

            const atmosphereGeo = new THREE.SphereGeometry(sphereRadius + 5, 32, 32);
            const atmosphereMat = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide,
                transparent: true
            });
            const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
            scene.add(atmosphere);
            
            // --- CONNECTING LINES (Arcs) ---
            // Create a few random Bezier curves to simulate data flight paths
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.3 });
            
            for(let i=0; i<15; i++) {
                // Pick two random points on the sphere
                const u = Math.random();
                const v = Math.random();
                const theta1 = 2 * Math.PI * u;
                const phi1 = Math.acos(2 * v - 1);
                
                const start = new THREE.Vector3().setFromSphericalCoords(sphereRadius, phi1, theta1);
                const end = new THREE.Vector3().setFromSphericalCoords(sphereRadius, phi1 + 1, theta1 + 1); // rough offset

                // Control point height (midpoint extruded)
                const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(sphereRadius * 1.3);
                
                const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
                const points = curve.getPoints(50);
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(lineGeo, lineMaterial);
                globe.add(line); // Add to globe so it rotates with it
            }


            // Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            };

            animate();

            // Resize Handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        // Initialize when DOM is ready
        window.addEventListener('DOMContentLoaded', init);
    
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
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
<div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-red-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/20 rounded-full blur-[100px]"></div>
</div>

<div className="fixed top-0 left-0 w-full h-full z-0 opacity-80" id="canvas-container"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-red-400 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-sm font-medium tracking-tight text-white">ORBITAL</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300" href="#">Product</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300" href="#">Solutions</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300" href="#">Developers</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="text-xs text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="group relative px-5 py-2 rounded-full bg-neutral-100 text-neutral-950 overflow-hidden transition-all hover:scale-105 active:scale-95">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative text-xs font-medium flex items-center gap-2">
                        Get Started
                        <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-10 pointer-events-none">

<div className="pointer-events-auto text-center max-w-4xl px-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-light text-neutral-300 tracking-wide">VERSION 2.0 IS LIVE</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-2xl">
                The infrastructure for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">global intelligence.</span>
</h1>

<p className="text-sm md:text-base font-light text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed">
                Connect your data across borders with our low-latency orbital network. 
                Real-time visualization and analytics for the modern web.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] flex items-center gap-2">
                    Start Deploying
                    <span className="iconify" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="px-8 py-3 rounded-full border border-neutral-800 bg-black/30 text-white text-sm font-medium hover:bg-neutral-900 transition-all flex items-center gap-2 backdrop-blur-sm">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="16"></span>
                    Watch Demo
                </button>
</div>
</div>

<div className="absolute bottom-10 left-10 hidden lg:block pointer-events-auto">
<div className="glass-panel p-4 rounded-[2rem] w-64 animate-float">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full bg-red-500/10 text-red-500">
<span className="iconify" data-icon="lucide:activity" data-width="16"></span>
</div>
<div>
<div className="text-xs text-neutral-400">Latency</div>
<div className="text-sm font-medium text-white">24ms</div>
</div>
</div>
<span className="iconify text-green-500" data-icon="lucide:trending-up" data-width="16"></span>
</div>

<svg className="w-full h-8 stroke-red-500/50 fill-none" strokeWidth="2" viewbox="0 0 100 30">
<path d="M0,25 C10,25 15,10 25,15 C35,20 40,5 50,10 C60,15 65,5 75,20 C85,35 90,15 100,5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="absolute bottom-10 right-10 hidden lg:block pointer-events-auto">
<div className="glass-panel p-4 rounded-[2rem] w-64 animate-float-delayed">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-full bg-neutral-800 text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="16"></span>
</div>
<div className="text-sm font-medium">System Status</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-500">Europe-West</span>
<span className="text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Operational</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-500">Asia-Pacific</span>
<span className="text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Operational</span>
</div>
</div>
</div>
</div>
</main>

<div className="relative z-10 mt-20 pointer-events-auto">
<div className="w-full h-24 bg-gradient-to-t from-neutral-950 to-transparent"></div>
<div className="bg-neutral-950 w-full py-20 relative">

<div className="absolute top-0 left-0 w-full overflow-hidden -mt-10 pointer-events-none">
<svg className="w-full h-[100px] fill-neutral-950" preserveaspectratio="none" viewbox="0 0 1440 100">
<path d="M0,100 C480,0 960,0 1440,100 Z"></path>
</svg>
</div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="p-6 rounded-3xl border border-neutral-900 bg-neutral-900/20 hover:border-red-900/50 transition-colors group">
<div className="w-10 h-10 rounded-2xl bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
<span className="iconify text-white" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Instant Scale</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Deploy nodes instantly across the globe with our automated infrastructure.</p>
</div>
<div className="p-6 rounded-3xl border border-neutral-900 bg-neutral-900/20 hover:border-red-900/50 transition-colors group">
<div className="w-10 h-10 rounded-2xl bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
<span className="iconify text-white" data-icon="lucide:lock" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Secure Core</h3>
<p className="text-xs text-neutral-500 leading-relaxed">End-to-end encryption with quantum-resistant key generation protocols.</p>
</div>
<div className="p-6 rounded-3xl border border-neutral-900 bg-neutral-900/20 hover:border-red-900/50 transition-colors group">
<div className="w-10 h-10 rounded-2xl bg-neutral-800 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
<span className="iconify text-white" data-icon="lucide:globe-2" data-width="20"></span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Global Edge</h3>
<p className="text-xs text-neutral-500 leading-relaxed">300+ edge locations ensuring your users are never more than 50ms away.</p>
</div>
</div>
<footer className="mt-20 border-t border-neutral-900 pt-10 text-center">
<p className="text-xs text-neutral-600">© 2024 Orbital Inc. All rights reserved.</p>
</footer>
</div>
</div>

<style>
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
    </style>



    </>
  );
}
