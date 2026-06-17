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



        // Three.js Scene Setup
        let scene, camera, renderer, particles, particleGeometry, particleMaterial;
        let targetScale = 1;
        let currentScale = 1;
        let targetRotationX = 0, targetRotationY = 0;
        let currentRotationX = 0, currentRotationY = 0;
        let particleCount = 10000;
        let currentPattern = 'cube';
        let currentColor = new THREE.Color(0x8b5cf6);
        let particleSize = 2;
        let originalPositions = [];
        let targetPositions = [];
        let handOpenness = 0;
        let lastFrameTime = performance.now();
        let frameCount = 0;
        let fps = 60;
        let morphProgress = 0;
        let isMorphing = false;

        const patternNames = {
            'cube': 'CUBE',
            'torus': 'TORUS',
            'galaxy': 'GALAXY',
            'heart': 'HEART',
            'dna': 'DNA HELIX'
        };

        const patternColors = {
            'cube': '#f59e0b',
            'torus': '#06b6d4',
            'galaxy': '#8b5cf6',
            'heart': '#ec4899',
            'dna': '#10b981'
        };

        // Initialize Three.js
        function initThree() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            document.getElementById('canvas-container').appendChild(renderer.domElement);

            createParticles();
            animate();

            window.addEventListener('resize', onWindowResize);
        }

        function generatePatternPositions(pattern, count) {
            const positions = [];
            
            switch(pattern) {
                case 'cube':
                    for (let i = 0; i < count; i++) {
                        const face = Math.floor(Math.random() * 6);
                        let x, y, z;
                        const size = 1.5;
                        switch(face) {
                            case 0: x = size; y = (Math.random() - 0.5) * 2 * size; z = (Math.random() - 0.5) * 2 * size; break;
                            case 1: x = -size; y = (Math.random() - 0.5) * 2 * size; z = (Math.random() - 0.5) * 2 * size; break;
                            case 2: y = size; x = (Math.random() - 0.5) * 2 * size; z = (Math.random() - 0.5) * 2 * size; break;
                            case 3: y = -size; x = (Math.random() - 0.5) * 2 * size; z = (Math.random() - 0.5) * 2 * size; break;
                            case 4: z = size; x = (Math.random() - 0.5) * 2 * size; y = (Math.random() - 0.5) * 2 * size; break;
                            case 5: z = -size; x = (Math.random() - 0.5) * 2 * size; y = (Math.random() - 0.5) * 2 * size; break;
                        }
                        positions.push(x, y, z);
                    }
                    break;
                    
                case 'torus':
                    for (let i = 0; i < count; i++) {
                        const u = Math.random() * Math.PI * 2;
                        const v = Math.random() * Math.PI * 2;
                        const R = 1.2;
                        const r = 0.5;
                        positions.push(
                            (R + r * Math.cos(v)) * Math.cos(u),
                            (R + r * Math.cos(v)) * Math.sin(u),
                            r * Math.sin(v)
                        );
                    }
                    break;
                    
                case 'galaxy':
                    for (let i = 0; i < count; i++) {
                        const arm = Math.floor(Math.random() * 4);
                        const armAngle = (arm / 4) * Math.PI * 2;
                        const distance = Math.random() * 2;
                        const angle = armAngle + distance * 2 + (Math.random() - 0.5) * 0.5;
                        const height = (Math.random() - 0.5) * 0.15 * (1 - distance / 2);
                        positions.push(
                            distance * Math.cos(angle),
                            height,
                            distance * Math.sin(angle)
                        );
                    }
                    break;
                    
                case 'heart':
                    for (let i = 0; i < count; i++) {
                        const t = Math.random() * Math.PI * 2;
                        const r = Math.random();
                        const x = 16 * Math.pow(Math.sin(t), 3) * r * 0.1;
                        const y = (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * r * 0.1;
                        const z = (Math.random() - 0.5) * 0.5;
                        positions.push(x, y, z);
                    }
                    break;

                case 'dna':
                    for (let i = 0; i < count; i++) {
                        const t = (i / count) * 8 * Math.PI;
                        const y = (i / count - 0.5) * 4;
                        const strand = Math.random() > 0.5 ? 1 : -1;
                        const radius = 0.8;
                        const offset = strand * 0.1;
                        positions.push(
                            Math.cos(t) * radius + (Math.random() - 0.5) * 0.1,
                            y + (Math.random() - 0.5) * 0.1,
                            Math.sin(t) * radius * strand + (Math.random() - 0.5) * 0.1
                        );
                    }
                    break;
            }
            
            return new Float32Array(positions);
        }

        function createParticles() {
            if (particles) {
                scene.remove(particles);
                particleGeometry.dispose();
                particleMaterial.dispose();
            }

            particleGeometry = new THREE.BufferGeometry();
            const positions = generatePatternPositions(currentPattern, particleCount);
            
            originalPositions = Array.from(positions);
            targetPositions = Array.from(positions);

            particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const colors = new Float32Array(particleCount * 3);
            for (let i = 0; i < particleCount; i++) {
                const variation = 0.7 + Math.random() * 0.6;
                colors[i * 3] = currentColor.r * variation;
                colors[i * 3 + 1] = currentColor.g * variation;
                colors[i * 3 + 2] = currentColor.b * variation;
            }
            particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            particleMaterial = new THREE.PointsMaterial({
                size: particleSize * 0.02,
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending,
                sizeAttenuation: true
            });

            particles = new THREE.Points(particleGeometry, particleMaterial);
            scene.add(particles);
        }

        function morphToPattern(newPattern) {
            if (newPattern === currentPattern) return;
            
            currentPattern = newPattern;
            const newPositions = generatePatternPositions(newPattern, particleCount);
            targetPositions = Array.from(newPositions);
            isMorphing = true;
            morphProgress = 0;

            document.getElementById('pattern-name').textContent = patternNames[newPattern];
            document.getElementById('pattern-name').style.background = `linear-gradient(to right, ${patternColors[newPattern]}, #fff, ${patternColors[newPattern]})`;
            document.getElementById('pattern-name').style.webkitBackgroundClip = 'text';
            document.getElementById('pattern-name').style.backgroundClip = 'text';
        }

        function updateParticleColors() {
            const colors = particleGeometry.attributes.color.array;
            for (let i = 0; i < particleCount; i++) {
                const variation = 0.7 + Math.random() * 0.6;
                colors[i * 3] = currentColor.r * variation;
                colors[i * 3 + 1] = currentColor.g * variation;
                colors[i * 3 + 2] = currentColor.b * variation;
            }
            particleGeometry.attributes.color.needsUpdate = true;
        }

        function animate() {
            requestAnimationFrame(animate);

            // Calculate FPS
            frameCount++;
            const now = performance.now();
            if (now - lastFrameTime >= 1000) {
                fps = frameCount;
                frameCount = 0;
                lastFrameTime = now;
                document.getElementById('fps-display').textContent = fps;
            }

            // Smooth interpolation
            currentScale += (targetScale - currentScale) * 0.08;
            currentRotationX += (targetRotationX - currentRotationX) * 0.05;
            currentRotationY += (targetRotationY - currentRotationY) * 0.05;

            // Morphing animation
            if (isMorphing) {
                morphProgress += 0.02;
                if (morphProgress >= 1) {
                    morphProgress = 1;
                    isMorphing = false;
                    originalPositions = [...targetPositions];
                }

                const positions = particleGeometry.attributes.position.array;
                const easeProgress = 1 - Math.pow(1 - morphProgress, 3); // Ease out cubic
                
                for (let i = 0; i < positions.length; i++) {
                    positions[i] = originalPositions[i] + (targetPositions[i] - originalPositions[i]) * easeProgress;
                }
                particleGeometry.attributes.position.needsUpdate = true;
            }

            if (particles) {
                particles.scale.set(currentScale, currentScale, currentScale);
                particles.rotation.x = currentRotationX * 0.5;
                particles.rotation.y += 0.003;
                particles.rotation.y += currentRotationY * 0.02;
            }

            renderer.render(scene, camera);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // Finger detection
        function isFingerExtended(landmarks, fingerTip, fingerPip) {
            const tip = landmarks[fingerTip];
            const pip = landmarks[fingerPip];
            const wrist = landmarks[0];
            
            // Check if fingertip is further from wrist than pip
            const tipDist = Math.sqrt(Math.pow(tip.x - wrist.x, 2) + Math.pow(tip.y - wrist.y, 2));
            const pipDist = Math.sqrt(Math.pow(pip.x - wrist.x, 2) + Math.pow(pip.y - wrist.y, 2));
            
            return tipDist > pipDist * 1.1;
        }

        function detectExtendedFingers(landmarks) {
            return {
                thumb: isFingerExtended(landmarks, 4, 2),
                index: isFingerExtended(landmarks, 8, 6),
                middle: isFingerExtended(landmarks, 12, 10),
                ring: isFingerExtended(landmarks, 16, 14),
                pinky: isFingerExtended(landmarks, 20, 18)
            };
        }

        // MediaPipe Hands Setup
        let hands, videoCamera;

        function initHandTracking() {
            const video = document.getElementById('video');
            const canvas = document.getElementById('hand-canvas');
            const ctx = canvas.getContext('2d');

            hands = new Hands({
                locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
            });

            hands.setOptions({
                maxNumHands: 1,
                modelComplexity: 1,
                minDetectionConfidence: 0.7,
                minTrackingConfidence: 0.5
            });

            hands.onResults((results) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Reset all finger indicators
                ['thumb', 'index', 'middle', 'ring', 'pinky'].forEach(finger => {
                    document.getElementById(`${finger}-indicator`).classList.remove('active');
                    document.getElementById(`${finger}-dot`).style.background = 'rgba(255,255,255,0.2)';
                    document.getElementById(`${finger}-dot`).style.boxShadow = 'none';
                });
                
                if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                    document.getElementById('tracking-status').classList.remove('bg-red-500');
                    document.getElementById('tracking-status').classList.add('bg-emerald-500');
                    
                    const landmarks = results.multiHandLandmarks[0];
                    
                    // Draw hand skeleton
                    ctx.strokeStyle = 'rgba(139, 92, 246, 0.8)';
                    ctx.lineWidth = 2;
                    
                    const connections = [
                        [0, 1], [1, 2], [2, 3], [3, 4],
                        [0, 5], [5, 6], [6, 7], [7, 8],
                        [5, 9], [9, 10], [10, 11], [11, 12],
                        [9, 13], [13, 14], [14, 15], [15, 16],
                        [13, 17], [17, 18], [18, 19], [19, 20],
                        [0, 17]
                    ];
                    
                    connections.forEach(([i, j]) => {
                        ctx.beginPath();
                        ctx.moveTo(landmarks[i].x * canvas.width, landmarks[i].y * canvas.height);
                        ctx.lineTo(landmarks[j].x * canvas.width, landmarks[j].y * canvas.height);
                        ctx.stroke();
                    });
                    
                    landmarks.forEach((lm, i) => {
                        ctx.beginPath();
                        ctx.arc(lm.x * canvas.width, lm.y * canvas.height, 3, 0, Math.PI * 2);
                        ctx.fillStyle = [4, 8, 12, 16, 20].includes(i) ? '#8b5cf6' : 'rgba(255, 255, 255, 0.8)';
                        ctx.fill();
                    });

                    // Detect extended fingers
                    const fingers = detectExtendedFingers(landmarks);
                    
                    // Update finger indicators and determine pattern
                    let activePattern = null;
                    let activeFinger = '--';

                    if (fingers.thumb) {
                        document.getElementById('thumb-indicator').classList.add('active');
                        document.getElementById('thumb-dot').style.background = '#10b981';
                        document.getElementById('thumb-dot').style.boxShadow = '0 0 10px #10b981';
                        activePattern = 'cube';
                        activeFinger = 'THUMB';
                    }
                    if (fingers.index) {
                        document.getElementById('index-indicator').classList.add('active');
                        document.getElementById('index-dot').style.background = '#10b981';
                        document.getElementById('index-dot').style.boxShadow = '0 0 10px #10b981';
                        activePattern = 'torus';
                        activeFinger = 'INDEX';
                    }
                    if (fingers.middle) {
                        document.getElementById('middle-indicator').classList.add('active');
                        document.getElementById('middle-dot').style.background = '#10b981';
                        document.getElementById('middle-dot').style.boxShadow = '0 0 10px #10b981';
                        activePattern = 'galaxy';
                        activeFinger = 'MIDDLE';
                    }
                    if (fingers.ring) {
                        document.getElementById('ring-indicator').classList.add('active');
                        document.getElementById('ring-dot').style.background = '#10b981';
                        document.getElementById('ring-dot').style.boxShadow = '0 0 10px #10b981';
                        activePattern = 'heart';
                        activeFinger = 'RING';
                    }
                    if (fingers.pinky) {
                        document.getElementById('pinky-indicator').classList.add('active');
                        document.getElementById('pinky-dot').style.background = '#10b981';
                        document.getElementById('pinky-dot').style.boxShadow = '0 0 10px #10b981';
                        activePattern = 'dna';
                        activeFinger = 'PINKY';
                    }

                    // Morph to the last detected pattern
                    if (activePattern) {
                        morphToPattern(activePattern);
                    }

                    document.getElementById('active-finger').textContent = activeFinger;

                    // Calculate hand openness for scale
                    const fingerTips = [landmarks[4], landmarks[8], landmarks[12], landmarks[16], landmarks[20]];
                    const wrist = landmarks[0];
                    let totalDistance = 0;
                    fingerTips.forEach(tip => {
                        const dx = tip.x - wrist.x;
                        const dy = tip.y - wrist.y;
                        totalDistance += Math.sqrt(dx * dx + dy * dy);
                    });
                    const avgDistance = totalDistance / fingerTips.length;
                    handOpenness = Math.min(1, Math.max(0, (avgDistance - 0.1) * 3));

                    const gestureText = handOpenness > 0.6 ? 'OPEN' : handOpenness > 0.3 ? 'HALF' : 'CLOSED';
                    document.getElementById('gesture-display').textContent = gestureText;

                    targetScale = 0.7 + handOpenness * 0.8;

                    // Use hand position for rotation
                    const handX = landmarks[9].x;
                    const handY = landmarks[9].y;
                    targetRotationX = (handY - 0.5) * 2;
                    targetRotationY = (handX - 0.5) * 3;

                } else {
                    document.getElementById('tracking-status').classList.remove('bg-emerald-500');
                    document.getElementById('tracking-status').classList.add('bg-red-500');
                    document.getElementById('gesture-display').textContent = '--';
                    document.getElementById('active-finger').textContent = '--';
                    
                    targetScale = 1;
                    handOpenness *= 0.95;
                }
            });

            videoCamera = new Camera(video, {
                onFrame: async () => {
                    await hands.send({ image: video });
                },
                width: 640,
                height: 480
            });
        }

        // UI Event Listeners
        document.getElementById('start-btn').addEventListener('click', async () => {
            document.getElementById('instructions').style.display = 'none';
            try {
                await videoCamera.start();
            } catch (err) {
                console.error('Camera error:', err);
                alert('Unable to access camera. Please ensure camera permissions are granted.');
            }
        });

        document.getElementById('fullscreen-btn').addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });

        // Color buttons
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.color-btn').forEach(b => {
                    b.classList.remove('active');
                    b.querySelector('div').style.opacity = '0';
                });
                btn.classList.add('active');
                btn.querySelector('div').style.opacity = '1';
                currentColor = new THREE.Color(btn.dataset.color);
                updateParticleColors();
            });
        });

        // Particle count slider
        document.getElementById('particle-count').addEventListener('input', (e) => {
            particleCount = parseInt(e.target.value);
            document.getElementById('particle-count-display').textContent = particleCount.toLocaleString();
            const percent = (particleCount - 1000) / (50000 - 1000) * 100;
            document.getElementById('particle-slider-fill').style.width = `${percent}%`;
            createParticles();
        });

        // Particle size slider
        document.getElementById('particle-size').addEventListener('input', (e) => {
            particleSize = parseFloat(e.target.value);
            document.getElementById('particle-size-display').textContent = particleSize.toFixed(1);
            const percent = (particleSize - 0.5) / (5 - 0.5) * 100;
            document.getElementById('size-slider-fill').style.width = `${percent}%`;
            if (particleMaterial) {
                particleMaterial.size = particleSize * 0.02;
            }
        });

        // Initialize
        initThree();
        initHandTracking();
    
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
      

<div className="fixed inset-0 z-0 opacity-20">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-transparent to-cyan-900/20"></div>
</div>

<div className="fixed top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
<div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="fixed top-1/2 right-1/3 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

<div className="relative w-full h-screen" id="app">

<div className="absolute inset-0 z-0" id="canvas-container"></div>

<header className="absolute top-0 left-0 right-0 z-20 p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
<div className="relative w-12 h-12 rounded-xl bg-black border border-violet-500/50 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/20"></div>
<span className="font-['Orbitron'] text-lg font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">GX</span>
</div>
</div>
<div>
<h1 className="font-['Orbitron'] text-lg font-semibold tracking-tight bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">GENESIS</h1>
<p className="text-xs text-white/40 tracking-widest uppercase">Particle Engine v2.0</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-xs text-white/60">MAINNET</span>
</div>
<button className="relative group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 backdrop-blur-xl transition-all duration-300" id="fullscreen-btn">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="relative text-white/70" height="18" icon="lucide:maximize-2" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-20 hidden lg:block">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 to-cyan-600/20 rounded-2xl blur-xl"></div>
<div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 w-56">
<div className="flex items-center gap-2 mb-5">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center">
<iconify-icon height="16" icon="lucide:hand" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white/90">GESTURE MAP</p>
<p className="text-xs text-white/40">Finger Control</p>
</div>
</div>

<div className="space-y-3">
<div className="finger-indicator flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300" id="thumb-indicator">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center">
<iconify-icon className="text-amber-400" height="18" icon="lucide:box" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-white/80">Thumb</p>
<p className="text-xs text-amber-400/80">CUBE</p>
</div>
<div className="w-2 h-2 rounded-full bg-white/20" id="thumb-dot"></div>
</div>
<div className="finger-indicator flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300" id="index-indicator">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
<iconify-icon className="text-cyan-400" height="18" icon="lucide:circle-dot" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-white/80">Index</p>
<p className="text-xs text-cyan-400/80">TORUS</p>
</div>
<div className="w-2 h-2 rounded-full bg-white/20" id="index-dot"></div>
</div>
<div className="finger-indicator flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300" id="middle-indicator">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center">
<iconify-icon className="text-violet-400" height="18" icon="lucide:sparkles" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-white/80">Middle</p>
<p className="text-xs text-violet-400/80">GALAXY</p>
</div>
<div className="w-2 h-2 rounded-full bg-white/20" id="middle-dot"></div>
</div>
<div className="finger-indicator flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300" id="ring-indicator">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 flex items-center justify-center">
<iconify-icon className="text-pink-400" height="18" icon="lucide:heart" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-white/80">Ring</p>
<p className="text-xs text-pink-400/80">HEART</p>
</div>
<div className="w-2 h-2 rounded-full bg-white/20" id="ring-dot"></div>
</div>
<div className="finger-indicator flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300" id="pinky-indicator">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center">
<iconify-icon className="text-emerald-400" height="18" icon="lucide:dna" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-medium text-white/80">Pinky</p>
<p className="text-xs text-emerald-400/80">DNA HELIX</p>
</div>
<div className="w-2 h-2 rounded-full bg-white/20" id="pinky-dot"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 z-30">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-cyan-600/30 rounded-2xl blur-lg"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl">
<video autoplay="" className="w-52 h-40 object-cover transform scale-x-[-1]" id="video" playsinline=""></video>
<canvas className="absolute inset-0 w-52 h-40 transform scale-x-[-1]" id="hand-canvas"></canvas>
<div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-xl">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" id="tracking-status"></div>
<span className="text-xs text-white/70 font-medium">LIVE</span>
</div>
<div className="absolute bottom-2 right-2 px-2 py-1 rounded-full bg-black/50 backdrop-blur-xl">
<span className="text-xs text-white/50 font-mono">640x480</span>
</div>
</div>
</div>
</div>

<div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
<div className="text-center">
<p className="text-xs text-white/40 tracking-widest uppercase mb-1">ACTIVE PATTERN</p>
<h2 className="font-['Orbitron'] text-3xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent" id="pattern-name">CUBE</h2>
</div>
</div>

<div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-600/20 to-violet-600/20 rounded-2xl blur-xl"></div>
<div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 w-64">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-violet-400 rounded-full"></div>
<h2 className="font-['Orbitron'] text-sm font-semibold tracking-tight">CONTROLS</h2>
</div>
<div className="px-2 py-1 rounded-md bg-violet-500/20 border border-violet-500/30">
<span className="text-xs text-violet-400 font-mono">v2.0</span>
</div>
</div>

<div className="mb-6">
<label className="text-xs text-white/40 uppercase tracking-widest mb-3 block font-medium">Color Scheme</label>
<div className="flex items-center gap-2">
<button className="color-btn active relative w-9 h-9 rounded-xl bg-violet-500 transition-all duration-300 hover:scale-110" data-color="#8b5cf6">
<div className="absolute inset-0 rounded-xl ring-2 ring-white/50 ring-offset-2 ring-offset-black opacity-0 transition-opacity"></div>
</button>
<button className="color-btn relative w-9 h-9 rounded-xl bg-cyan-500 transition-all duration-300 hover:scale-110" data-color="#06b6d4">
<div className="absolute inset-0 rounded-xl ring-2 ring-white/50 ring-offset-2 ring-offset-black opacity-0 transition-opacity"></div>
</button>
<button className="color-btn relative w-9 h-9 rounded-xl bg-pink-500 transition-all duration-300 hover:scale-110" data-color="#ec4899">
<div className="absolute inset-0 rounded-xl ring-2 ring-white/50 ring-offset-2 ring-offset-black opacity-0 transition-opacity"></div>
</button>
<button className="color-btn relative w-9 h-9 rounded-xl bg-emerald-500 transition-all duration-300 hover:scale-110" data-color="#10b981">
<div className="absolute inset-0 rounded-xl ring-2 ring-white/50 ring-offset-2 ring-offset-black opacity-0 transition-opacity"></div>
</button>
<button className="color-btn relative w-9 h-9 rounded-xl bg-amber-500 transition-all duration-300 hover:scale-110" data-color="#f59e0b">
<div className="absolute inset-0 rounded-xl ring-2 ring-white/50 ring-offset-2 ring-offset-black opacity-0 transition-opacity"></div>
</button>
</div>
</div>

<div className="mb-5">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-white/40 uppercase tracking-widest font-medium">Particles</label>
<span className="text-xs text-cyan-400 font-mono font-medium" id="particle-count-display">10,000</span>
</div>
<div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-200" id="particle-slider-fill" style={{width: '18%'}}></div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="particle-count" max="50000" min="1000" step="1000" type="range" value="10000"/>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-2">
<label className="text-xs text-white/40 uppercase tracking-widest font-medium">Size</label>
<span className="text-xs text-cyan-400 font-mono font-medium" id="particle-size-display">2.0</span>
</div>
<div className="relative h-2 rounded-full bg-white/10 overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-200" id="size-slider-fill" style={{width: '33%'}}></div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id="particle-size" max="5" min="0.5" step="0.1" type="range" value="2"/>
</div>
</div>

<div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
<div className="p-3 rounded-xl bg-white/5 border border-white/10">
<p className="text-xs text-white/40 mb-1 uppercase tracking-wider">FPS</p>
<p className="font-['Orbitron'] text-xl font-bold text-emerald-400" id="fps-display">60</p>
</div>
<div className="p-3 rounded-xl bg-white/5 border border-white/10">
<p className="text-xs text-white/40 mb-1 uppercase tracking-wider">Gesture</p>
<p className="font-['Orbitron'] text-xl font-bold text-violet-400" id="gesture-display">--</p>
</div>
</div>

<div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-violet-400" height="16" icon="lucide:pointer" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<span className="text-xs text-white/60">Active Finger</span>
</div>
<span className="text-xs font-medium text-cyan-400 font-mono" id="active-finger">THUMB</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
<div className="flex items-center gap-4 px-6 py-3 rounded-full bg-black/60 backdrop-blur-2xl border border-white/10">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>
<span className="text-xs text-white/60">Engine Running</span>
</div>
<div className="w-px h-4 bg-white/20"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/40" height="14" icon="lucide:cpu" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
<span className="text-xs text-white/60">WebGL 2.0</span>
</div>
<div className="w-px h-4 bg-white/20"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" height="14" icon="lucide:activity" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
<span className="text-xs text-white/60">MediaPipe Active</span>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 bg-black/98 backdrop-blur-xl flex items-center justify-center" id="instructions">
<div className="absolute inset-0 opacity-30">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
</div>
<div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="relative text-center max-w-lg px-8">

<div className="relative inline-block mb-8">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
<div className="relative w-24 h-24 rounded-3xl bg-black border border-violet-500/50 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-cyan-600/30"></div>
<span className="font-['Orbitron'] text-3xl font-bold tracking-tighter bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">GX</span>
</div>
</div>
<h2 className="font-['Orbitron'] text-3xl font-bold tracking-tight mb-3 bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">GENESIS PARTICLE ENGINE</h2>
<p className="text-white/50 text-sm mb-8 leading-relaxed">
                    Control particles with your fingers. Each finger activates a unique pattern.
                    Raise fingers to select, move hand to rotate the view.
                </p>

<div className="grid grid-cols-5 gap-3 mb-10">
<div className="p-3 rounded-xl bg-white/5 border border-amber-500/30">
<iconify-icon className="text-amber-400 mb-2" height="24" icon="lucide:box" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<p className="text-xs text-white/60">Thumb</p>
<p className="text-xs text-amber-400 font-medium">CUBE</p>
</div>
<div className="p-3 rounded-xl bg-white/5 border border-cyan-500/30">
<iconify-icon className="text-cyan-400 mb-2" height="24" icon="lucide:circle-dot" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<p className="text-xs text-white/60">Index</p>
<p className="text-xs text-cyan-400 font-medium">TORUS</p>
</div>
<div className="p-3 rounded-xl bg-white/5 border border-violet-500/30">
<iconify-icon className="text-violet-400 mb-2" height="24" icon="lucide:sparkles" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<p className="text-xs text-white/60">Middle</p>
<p className="text-xs text-violet-400 font-medium">GALAXY</p>
</div>
<div className="p-3 rounded-xl bg-white/5 border border-pink-500/30">
<iconify-icon className="text-pink-400 mb-2" height="24" icon="lucide:heart" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<p className="text-xs text-white/60">Ring</p>
<p className="text-xs text-pink-400 font-medium">HEART</p>
</div>
<div className="p-3 rounded-xl bg-white/5 border border-emerald-500/30">
<iconify-icon className="text-emerald-400 mb-2" height="24" icon="lucide:dna" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<p className="text-xs text-white/60">Pinky</p>
<p className="text-xs text-emerald-400 font-medium">DNA</p>
</div>
</div>
<button className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-xl transition-all duration-300" id="start-btn">
<div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600"></div>
<div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute inset-px rounded-xl bg-black/20"></div>
<span className="relative font-['Orbitron'] font-semibold text-sm tracking-wide">INITIALIZE SYSTEM</span>
<iconify-icon className="relative group-hover:translate-x-1 transition-transform" height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
<p className="text-xs text-white/30 mt-4">Camera access required for gesture tracking</p>
</div>
</div>
</div>
<style>
        .color-btn.active > div {
            opacity: 1 !important;
        }

        .finger-indicator.active {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.3);
            transform: scale(1.02);
        }

        .finger-indicator.active .bg-white\/20 {
            background: #10b981 !important;
            box-shadow: 0 0 10px #10b981;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    </style>


    </>
  );
}
