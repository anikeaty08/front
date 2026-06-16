import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            // Fog for depth in light mode
            scene.fog = new THREE.FogExp2(0xf5f5f7, 0.05);
            
            // Camera setup
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 6;

            // Renderer setup
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            // Group to hold parts
            const coreGroup = new THREE.Group();
            scene.add(coreGroup);

            // Materials for Light Mode (Dark Wireframes)
            const wireMaterial = new THREE.MeshBasicMaterial({ color: 0x111111, wireframe: true, transparent: true, opacity: 0.08 });
            const accentMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.15 });

            // 1. Icosahedron (The Core Structure)
            const icoGeometry = new THREE.IcosahedronGeometry(2.5, 1);
            const ico = new THREE.Mesh(icoGeometry, wireMaterial);
            coreGroup.add(ico);

            // 2. Inner Sphere
            const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
            const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent: true, opacity: 0.05 });
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            coreGroup.add(sphere);

            // 3. Rotating Rings (Orbitals)
            const ringGeo = new THREE.TorusGeometry(3.5, 0.02, 16, 100);
            const ring1 = new THREE.Mesh(ringGeo, accentMaterial);
            const ring2 = new THREE.Mesh(ringGeo, accentMaterial);
            const ring3 = new THREE.Mesh(ringGeo, accentMaterial);
            
            ring1.rotation.x = Math.PI / 2;
            ring2.rotation.x = Math.PI / 3;
            ring2.rotation.y = Math.PI / 3;
            
            coreGroup.add(ring1);
            coreGroup.add(ring2);
            coreGroup.add(ring3);

            // 4. Particles (Data points)
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 400;
            const posArray = new Float32Array(particlesCount * 3);
            
            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 15;
            }
            
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.03,
                color: 0x111111,
                transparent: true,
                opacity: 0.4
            });
            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            // Position adjustments
            if (window.innerWidth > 1024) {
                coreGroup.position.x = 3; 
                particlesMesh.position.x = 2;
            } else {
                coreGroup.position.y = 1;
            }

            // Animation Loop
            let mouseX = 0;
            let mouseY = 0;
            let targetX = 0;
            let targetY = 0;

            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - windowHalfX);
                mouseY = (event.clientY - windowHalfY);
            });

            const animate = () => {
                requestAnimationFrame(animate);

                targetX = mouseX * 0.0005;
                targetY = mouseY * 0.0005;

                // Complex rotations
                ico.rotation.y += 0.002;
                ico.rotation.x -= 0.001;
                
                sphere.rotation.y -= 0.005;
                
                ring1.rotation.x += 0.002;
                ring1.rotation.y += 0.002;
                
                ring2.rotation.z -= 0.002;

                // Mouse Interaction
                coreGroup.rotation.y += 0.05 * (targetX - coreGroup.rotation.y);
                coreGroup.rotation.x += 0.05 * (targetY - coreGroup.rotation.x);
                
                particlesMesh.rotation.y = -coreGroup.rotation.y * 0.2;

                renderer.render(scene, camera);
            };

            animate();

            // Resize Handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                
                if (window.innerWidth > 1024) {
                    coreGroup.position.x = 3;
                } else {
                    coreGroup.position.x = 0;
                }
            });
        };

        // Initialize when DOM ready
        document.addEventListener('DOMContentLoaded', initThreeJS);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="canvas-container"></div>

<div className="fixed inset-0 pointer-events-none z-[-1] bg-grid h-screen"></div>

<nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-white/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-black" icon="solar:bolt-circle-bold" width="24"></iconify-icon>
<span className="text-sm font-semibold tracking-widest uppercase text-black">Volture</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#">Vehicles</a>
<a className="hover:text-black transition-colors" href="#">App</a>
<a className="hover:text-black transition-colors" href="#">Charging</a>
<a className="hover:text-black transition-colors" href="#">Shop</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm text-neutral-500 hover:text-black transition-colors">Account</button>
<button className="group relative px-4 py-2 text-xs font-semibold text-white bg-black rounded-full overflow-hidden transition-all hover:bg-neutral-800 shadow-lg shadow-black/10">
<span className="relative z-10">Order Now</span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-white shadow-sm text-xs text-neutral-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="font-medium">Model X-Ray Available</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.95] text-neutral-900">
                    Structure <br/>
<span className="text-neutral-400">of</span> Pure <br/>
                    Motion.
                </h1>
<p className="text-lg text-neutral-500 max-w-md font-normal leading-relaxed">
                    Designed for the connected world. Experience the seamless integration of hardware and software.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all shadow-xl shadow-black/10 flex items-center gap-2">
                        Configure
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-8 py-3 border border-black/10 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-50 transition-colors">
                        View Specs
                    </button>
</div>
<div className="flex gap-12 pt-12 border-t border-black/5">
<div>
<p className="text-3xl font-semibold tracking-tight">800<span className="text-sm align-top">V</span></p>
<p className="text-xs text-neutral-400 font-medium uppercase tracking-wide mt-1">Architecture</p>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight">1.9<span className="text-sm align-top">s</span></p>
<p className="text-xs text-neutral-400 font-medium uppercase tracking-wide mt-1">0-60 mph</p>
</div>
</div>
</div>

<div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end">

<div className="iphone-mockup w-[280px] h-[560px] animate-[float_6s_ease-in-out_infinite] z-20">
<div className="iphone-notch"></div>

<div className="h-full w-full bg-neutral-50 flex flex-col relative">

<div className="h-1/2 w-full bg-neutral-200 relative overflow-hidden">

<div className="absolute inset-0 opacity-30 bg-[url('https://api.iconify.design/solar:map-point-linear.svg')] bg-center bg-no-repeat bg-[length:50px_50px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
<iconify-icon className="text-blue-500 rotate-45 text-xl" icon="solar:navigation-bold"></iconify-icon>
</div>
</div>

<div className="h-1/2 w-full p-6 flex flex-col justify-between bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative -mt-6">
<div>
<div className="flex justify-between items-end mb-1">
<h3 className="text-lg font-bold text-neutral-900">Volture One</h3>
<span className="text-xs text-green-500 font-medium flex items-center gap-1">
<iconify-icon icon="solar:battery-charge-bold"></iconify-icon> 85%
                                    </span>
</div>
<p className="text-xs text-neutral-400 mb-6">Parked • 23°C Interior</p>
<div className="grid grid-cols-4 gap-4 mb-6">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:lock-keyhole-unlocked-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-400 font-medium">Unlock</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:fan-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-400 font-medium">Climate</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-400 font-medium">Charge</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:menu-dots-linear"></iconify-icon>
</div>
<span className="text-[10px] text-neutral-400 font-medium">More</span>
</div>
</div>
</div>
<button className="w-full py-3 bg-neutral-900 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2">
<iconify-icon icon="solar:key-linear"></iconify-icon>
                                Phone Key Active
                            </button>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-blue-500/10 blur-[80px] -z-10 rounded-full"></div>
</div>
</div>
</main>

<section className="px-6 py-24 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Ecosystem &amp; Accessories</h2>
<p className="text-neutral-500 max-w-xl">Fully integrated charging solutions for home and travel.</p>
</div>
<a className="text-sm font-medium text-black underline decoration-neutral-300 underline-offset-4 hover:decoration-black transition-all" href="#">Visit Shop</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-panel rounded-3xl p-8 relative overflow-hidden transition-all hover:bg-white/80 h-[400px]">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:bolt-circle-bold" width="180"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div>
<div className="inline-block p-3 rounded-xl bg-neutral-100 text-neutral-900 mb-6">
<iconify-icon icon="solar:plug-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Wall Connector</h3>
<p className="text-sm text-neutral-500 mt-2">The fastest way to charge at home. Up to 44 miles of range per hour.</p>
</div>

<div className="flex items-center justify-center mt-8">
<div className="relative w-24 h-32 bg-neutral-100 rounded-xl border border-neutral-200 shadow-sm flex flex-col items-center justify-center">
<div className="w-1 h-full bg-gradient-to-b from-neutral-300 to-transparent absolute left-1/2 transform -translate-x-1/2"></div>
<div className="w-16 h-20 bg-white rounded-lg border border-neutral-200 z-10 shadow-sm flex items-center justify-center">
<div className="w-1 h-8 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-6 border-t border-neutral-200/50">
<span className="text-lg font-semibold">$450</span>
<button className="text-xs font-medium bg-black text-white px-3 py-1.5 rounded-full">Add</button>
</div>
</div>
</div>

<div className="group glass-panel rounded-3xl p-0 relative overflow-hidden transition-all hover:bg-white/80 h-[400px] col-span-1 md:col-span-2">
<div className="grid grid-cols-1 md:grid-cols-2 h-full">
<div className="p-8 flex flex-col justify-between h-full relative z-10">
<div>
<div className="inline-block p-3 rounded-xl bg-neutral-100 text-neutral-900 mb-6">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Intelligent Routing</h3>
<p className="text-sm text-neutral-500 mt-2 max-w-xs">Trip planner automatically calculates charging stops based on your driving style and elevation.</p>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:map-arrow-right-bold" width="20"></iconify-icon>
</div>
<div className="text-xs font-medium text-neutral-600">
<div>San Francisco <span className="text-neutral-400">→</span> Los Angeles</div>
<div className="text-neutral-400">2 stops • 5h 45m</div>
</div>
</div>
</div>

<div className="bg-neutral-200 h-full relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

<svg className="absolute inset-0 w-full h-full" style={{strokeDasharray: '10', animation: 'dash 30s linear infinite'}}>
<path d="M 50 350 Q 150 250 200 150 T 350 50" fill="none" stroke="#3b82f6" strokeWidth="4"></path>
</svg>

<div className="absolute bottom-[50px] left-[50px] w-4 h-4 bg-white border-4 border-blue-500 rounded-full shadow-lg"></div>
<div className="absolute top-[50px] right-[50px] w-4 h-4 bg-black border-4 border-white rounded-full shadow-lg"></div>

<div className="absolute top-[140px] left-[190px] bg-white p-3 rounded-xl shadow-xl border border-neutral-100 transform translate-x-[-50%]">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:bolt-bold"></iconify-icon>
<div className="text-[10px] font-bold">Supercharger</div>
</div>
<div className="text-[10px] text-neutral-500 mt-1">15 min stop</div>
</div>
</div>
</div>
</div>

<div className="group glass-panel rounded-3xl p-8 relative overflow-hidden transition-all hover:bg-white/80 h-[400px]">
<div className="relative z-10 flex flex-col justify-between h-full">
<div>
<div className="inline-block p-3 rounded-xl bg-neutral-100 text-neutral-900 mb-6">
<iconify-icon icon="solar:case-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Mobile Kit</h3>
<p className="text-sm text-neutral-500 mt-2">Charge anywhere with standard outlets. Includes adapters for multiple socket types.</p>
</div>

<div className="flex items-center justify-center mt-4">
<iconify-icon className="text-neutral-300 group-hover:text-neutral-400 transition-colors" icon="solar:cable-circle-linear" width="100"></iconify-icon>
</div>
<div className="flex justify-between items-center pt-6 border-t border-neutral-200/50">
<span className="text-lg font-semibold">$230</span>
<button className="text-xs font-medium bg-white border border-neutral-200 text-neutral-900 px-3 py-1.5 rounded-full hover:bg-neutral-50">View Details</button>
</div>
</div>
</div>

<div className="group glass-panel rounded-3xl p-8 relative overflow-hidden transition-all hover:bg-white/80 h-[400px] col-span-1 md:col-span-2">
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Real-time Analytics</h3>
<p className="text-sm text-neutral-500 mt-2">Monitor energy consumption and battery health.</p>
</div>
<div className="p-2 bg-neutral-100 rounded-lg">
<iconify-icon icon="solar:chart-2-bold" width="20"></iconify-icon>
</div>
</div>

<div className="flex items-end gap-2 h-32 mt-8 px-4 border-b border-neutral-200 pb-4">
<div className="w-full bg-blue-50 rounded-t-lg h-[40%] relative group-hover:h-[60%] transition-all duration-700"></div>
<div className="w-full bg-blue-100 rounded-t-lg h-[60%] relative group-hover:h-[80%] transition-all duration-700 delay-75"></div>
<div className="w-full bg-blue-200 rounded-t-lg h-[30%] relative group-hover:h-[50%] transition-all duration-700 delay-100"></div>
<div className="w-full bg-blue-300 rounded-t-lg h-[75%] relative group-hover:h-[90%] transition-all duration-700 delay-150"></div>
<div className="w-full bg-blue-400 rounded-t-lg h-[50%] relative group-hover:h-[70%] transition-all duration-700 delay-200"></div>
<div className="w-full bg-neutral-900 rounded-t-lg h-[85%] relative group-hover:h-[95%] transition-all duration-700 delay-300 shadow-lg">
<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded">245Wh/mi</div>
</div>
<div className="w-full bg-blue-400 rounded-t-lg h-[65%] relative group-hover:h-[75%] transition-all duration-700 delay-100"></div>
</div>
<div className="flex gap-4 mt-2">
<div className="text-xs text-neutral-500">
<span className="block text-xl font-semibold text-neutral-900">32<span className="text-sm">%</span></span>
                                 Savings vs Gas
                             </div>
<div className="w-px bg-neutral-200"></div>
<div className="text-xs text-neutral-500">
<span className="block text-xl font-semibold text-neutral-900">1.2<span className="text-sm">t</span></span>
                                 CO2 Saved
                             </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">Ready to drive?</h2>
<p className="text-neutral-500 mb-8">Delivery estimates updated daily based on configuration.</p>
<div className="flex gap-4">
<div className="h-10 w-10 rounded-full bg-neutral-900 border-2 border-white shadow-lg cursor-pointer ring-2 ring-transparent hover:ring-neutral-300 transition-all"></div>
<div className="h-10 w-10 rounded-full bg-neutral-400 border-2 border-white shadow-sm cursor-pointer hover:shadow-md transition-all"></div>
<div className="h-10 w-10 rounded-full bg-blue-600 border-2 border-white shadow-sm cursor-pointer hover:shadow-md transition-all"></div>
<div className="h-10 w-10 rounded-full bg-neutral-100 border-2 border-white shadow-sm cursor-pointer hover:shadow-md transition-all"></div>
</div>
</div>
<div className="w-full md:w-auto">
<button className="w-full md:w-auto px-12 py-4 bg-neutral-900 text-white font-medium rounded-full hover:scale-105 hover:bg-black transition-all duration-300 shadow-xl shadow-neutral-900/10">
                    Design Yours
                </button>
</div>
</div>
</section>
<footer className="border-t border-neutral-200 py-12 px-6 bg-neutral-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:bolt-circle-bold" width="20"></iconify-icon>
<span className="text-sm text-neutral-500 font-medium">Volture © 2023</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500 font-medium">
<a className="hover:text-black transition-colors" href="#">Privacy</a>
<a className="hover:text-black transition-colors" href="#">Legal</a>
<a className="hover:text-black transition-colors" href="#">Careers</a>
</div>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-black transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-black transition-colors" href="#"><iconify-icon icon="solar:brand-x-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
