import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Initialize Lucide icons
        lucide.createIcons();

        // Three.js setup
        let scene, camera, renderer, car, ground;
        let keys = {};
        let carSpeed = 0;
        let carRotation = 0;
        let maxSpeed = 0.5;
        let acceleration = 0.01;
        let deceleration = 0.008;
        let turnSpeed = 0.03;

        function init() {
            // Scene
            scene = new THREE.Scene();
            scene.fog = new THREE.Fog(0x1a1a1a, 10, 100);

            // Camera
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            
            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight - 80);
            renderer.setClearColor(0x1a1a1a);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            document.getElementById('canvas-container').appendChild(renderer.domElement);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(10, 10, 5);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
            scene.add(directionalLight);

            // Ground
            const groundGeometry = new THREE.PlaneGeometry(100, 100);
            const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x2a2a2a });
            ground = new THREE.Mesh(groundGeometry, groundMaterial);
            ground.rotation.x = -Math.PI / 2;
            ground.receiveShadow = true;
            scene.add(ground);

            // Grid
            const gridHelper = new THREE.GridHelper(100, 100, 0x404040, 0x404040);
            scene.add(gridHelper);

            // Car
            createCar();

            // Camera position
            camera.position.set(0, 8, 10);
            camera.lookAt(0, 0, 0);

            // Event listeners
            document.addEventListener('keydown', onKeyDown);
            document.addEventListener('keyup', onKeyUp);
            document.getElementById('resetBtn').addEventListener('click', resetCar);
            window.addEventListener('resize', onWindowResize);
        }

        function createCar() {
            car = new THREE.Group();

            // Car body
            const bodyGeometry = new THREE.BoxGeometry(2, 0.8, 4);
            const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x3b82f6 });
            const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
            body.position.y = 0.5;
            body.castShadow = true;
            car.add(body);

            // Car roof
            const roofGeometry = new THREE.BoxGeometry(1.6, 0.6, 2);
            const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x2563eb });
            const roof = new THREE.Mesh(roofGeometry, roofMaterial);
            roof.position.y = 1.1;
            roof.position.z = -0.3;
            roof.castShadow = true;
            car.add(roof);

            // Wheels
            const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 8);
            const wheelMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
            
            const positions = [
                [-1.2, 0.3, 1.3],
                [1.2, 0.3, 1.3],
                [-1.2, 0.3, -1.3],
                [1.2, 0.3, -1.3]
            ];

            positions.forEach(pos => {
                const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
                wheel.position.set(...pos);
                wheel.rotation.z = Math.PI / 2;
                wheel.castShadow = true;
                car.add(wheel);
            });

            car.position.y = 0.1;
            car.castShadow = true;
            scene.add(car);
        }

        function onKeyDown(event) {
            keys[event.code] = true;
        }

        function onKeyUp(event) {
            keys[event.code] = false;
        }

        function updateCar() {
            let accelerating = false;
            let braking = false;
            let turningLeft = false;
            let turningRight = false;

            if (keys['KeyW']) {
                carSpeed = Math.min(carSpeed + acceleration, maxSpeed);
                accelerating = true;
            }
            if (keys['KeyS']) {
                if (carSpeed > 0) {
                    carSpeed = Math.max(carSpeed - deceleration * 2, 0);
                    braking = true;
                } else {
                    carSpeed = Math.max(carSpeed - acceleration, -maxSpeed * 0.5);
                }
            }
            if (keys['KeyA']) {
                if (Math.abs(carSpeed) > 0.01) {
                    carRotation += turnSpeed * (carSpeed > 0 ? 1 : -1);
                    turningLeft = true;
                }
            }
            if (keys['KeyD']) {
                if (Math.abs(carSpeed) > 0.01) {
                    carRotation -= turnSpeed * (carSpeed > 0 ? 1 : -1);
                    turningRight = true;
                }
            }

            if (!accelerating && !braking) {
                carSpeed *= 0.95;
            }

            // Apply movement
            car.position.x += Math.sin(carRotation) * carSpeed;
            car.position.z += Math.cos(carRotation) * carSpeed;
            car.rotation.y = carRotation;

            // Update camera
            const cameraDistance = 10;
            const cameraHeight = 6;
            camera.position.x = car.position.x - Math.sin(carRotation) * cameraDistance;
            camera.position.z = car.position.z - Math.cos(carRotation) * cameraDistance;
            camera.position.y = car.position.y + cameraHeight;
            camera.lookAt(car.position);

            // Update UI
            const speedKmh = Math.abs(carSpeed) * 100;
            document.getElementById('speedometer').textContent = Math.round(speedKmh);
            
            const rpm = 800 + Math.abs(carSpeed) * 4000;
            document.getElementById('rpmDisplay').textContent = Math.round(rpm);
            
            const gear = carSpeed < -0.01 ? 'R' : carSpeed < 0.01 ? 'N' : 'D';
            document.getElementById('gearDisplay').textContent = gear;
        }

        function resetCar() {
            car.position.set(0, 0.1, 0);
            car.rotation.y = 0;
            carSpeed = 0;
            carRotation = 0;
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / (window.innerHeight - 80);
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight - 80);
        }

        function animate() {
            requestAnimationFrame(animate);
            updateCar();
            renderer.render(scene, camera);
        }

        // Start the simulation
        init();
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 flex flex-col">

<header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700/50 p-4 animate-[slideDown_0.6s_ease-out]">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
<i className="w-5 h-5" data-lucide="car"></i>
</div>
<h1 className="text-xl font-semibold tracking-tight">Car Simulator</h1>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">Speed: <span className="text-blue-400 font-medium" id="speedometer">0</span> km/h</div>
<button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition-colors duration-200" id="resetBtn">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
</button>
</div>
</div>
</header>

<div className="flex-1 relative">

<div className="absolute inset-0 animate-[fadeIn_0.8s_ease-out_0.2s_both]" id="canvas-container"></div>

<div className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 animate-[slideUp_0.6s_ease-out_0.4s_both]">
<h3 className="text-sm font-medium mb-3 text-gray-300">Controls</h3>
<div className="space-y-2 text-xs text-gray-400">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-white font-medium">W</div>
<span>Accelerate</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-white font-medium">S</div>
<span>Brake/Reverse</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-white font-medium">A</div>
<span>Turn Left</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-white font-medium">D</div>
<span>Turn Right</span>
</div>
</div>
</div>

<div className="absolute top-4 right-4 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 animate-[slideDown_0.6s_ease-out_0.6s_both]">
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm text-gray-400">Engine</span>
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" id="engineStatus"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-400">Gear</span>
<span className="text-sm font-medium" id="gearDisplay">D</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-400">RPM</span>
<span className="text-sm font-medium" id="rpmDisplay">800</span>
</div>
</div>
</div>
</div>
</div>

<style>
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>

    </>
  );
}
