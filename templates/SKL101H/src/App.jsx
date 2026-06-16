import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Global variables
        let currentAnimation = 'pulse';
        let currentColor = '#3b82f6';
        let currentGlow = 'rgba(59, 130, 246, 0.6)';
        let intensity = 80;
        let speed = 1;
        let soundEnabled = false;
        let isPlaying = false;
        let megaActive = false;
        let laserActive = false;
        let matrixActive = false;
        let hologramActive = false;
        let multiStickActive = false;

        // Get DOM elements
        const lightHead = document.getElementById('lightHead');
        const statusText = document.getElementById('statusText');
        const modeText = document.getElementById('modeText');
        const energyLevel = document.getElementById('energyLevel');
        const intensityValue = document.getElementById('intensityValue');
        const speedValue = document.getElementById('speedValue');

        // Set color function
        function setColor(color, glow) {
            currentColor = color;
            currentGlow = glow;
            updateLightStick();
            updateStatus('Color Changed', 'Custom');
        }

        // Set gradient color function
        function setGradientColor(type) {
            const gradients = {
                rainbow: {
                    background: 'linear-gradient(135deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff)',
                    glow: 'rgba(255, 255, 255, 0.8)'
                },
                sunset: {
                    background: 'linear-gradient(135deg, #ff4500, #ff6347, #ff8c00, #ffd700)',
                    glow: 'rgba(255, 165, 0, 0.8)'
                },
                ocean: {
                    background: 'linear-gradient(135deg, #0080ff, #00bfff, #40e0d0, #00ffff)',
                    glow: 'rgba(0, 191, 255, 0.8)'
                },
                galaxy: {
                    background: 'linear-gradient(135deg, #4c1d95, #5b21b6, #7c3aed, #a855f7)',
                    glow: 'rgba(139, 92, 246, 0.8)'
                }
            };

            if (gradients[type]) {
                lightHead.style.background = gradients[type].background;
                currentGlow = gradients[type].glow;
                updateGlow();
                updateStatus('Gradient Applied', type.charAt(0).toUpperCase() + type.slice(1));
            }
        }

        // Set custom color
        function setCustomColor() {
            const customColor = document.getElementById('customColor').value;
            const r = parseInt(customColor.substr(1, 2), 16);
            const g = parseInt(customColor.substr(3, 2), 16);
            const b = parseInt(customColor.substr(5, 2), 16);
            const glow = `rgba(${r}, ${g}, ${b}, 0.8)`;
            setColor(customColor, glow);
        }

        // Set animation
        function setAnimation(animation) {
            // Remove all animation classes
            const animations = ['pulse', 'strobe', 'rainbow', 'wave', 'spin', 'bounce', 'glow-intense', 'shake', 'zoom', 'disco', 'breathe', 'lightning', 'flicker', 'spiral', 'heartbeat', 'explosion', 'ripple', 'twist', 'magnetic', 'plasma', 'supernova', 'vortex', 'hypnotic'];
            animations.forEach(anim => lightHead.classList.remove(anim));
            
            // Add new animation
            currentAnimation = animation;
            lightHead.classList.add(animation);
            updateStatus('Animation Set', animation.charAt(0).toUpperCase() + animation.slice(1));
        }

        // Update intensity
        function updateIntensity(value) {
            intensity = value;
            intensityValue.textContent = value + '%';
            updateLightStick();
            updateEnergyLevel(value);
        }

        // Update speed
        function updateSpeed(value) {
            speed = value;
            speedValue.textContent = value + 'x';
            lightHead.style.animationDuration = (1 / value) + 's';
        }

        // Update light stick appearance
        function updateLightStick() {
            lightHead.style.background = `linear-gradient(135deg, ${currentColor}, ${adjustBrightness(currentColor, -20)})`;
            updateGlow();
        }

        // Update glow effect
        function updateGlow() {
            const glowIntensity = intensity / 100;
            const baseGlow = 50 * glowIntensity;
            const maxGlow = 100 * glowIntensity;
            lightHead.style.boxShadow = `0 0 ${baseGlow}px ${currentGlow}, 0 0 ${maxGlow}px ${currentGlow}`;
        }

        // Adjust brightness utility
        function adjustBrightness(hex, percent) {
            const num = parseInt(hex.replace("#", ""), 16);
            const amt = Math.round(2.55 * percent);
            const R = (num >> 16) + amt;
            const G = (num >> 8 & 0x00FF) + amt;
            const B = (num & 0x0000FF) + amt;
            return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
                (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
                (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
        }

        // Update status display
        function updateStatus(status, mode) {
            statusText.textContent = status;
            modeText.textContent = mode;
        }

        // Update energy level
        function updateEnergyLevel(level) {
            energyLevel.textContent = level + '%';
            const color = level > 50 ? 'text-green-400' : level > 25 ? 'text-yellow-400' : 'text-red-400';
            energyLevel.className = color;
        }

        // Randomize function
        function randomize() {
            const colors = ['#ff0000', '#ff4500', '#ffa500', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#8000ff', '#ff1493', '#adff2f'];
            const animations = ['pulse', 'strobe', 'rainbow', 'wave', 'spin', 'bounce', 'disco', 'lightning', 'heartbeat'];
            
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            const randomIntensity = Math.floor(Math.random() * 90) + 10;
            
            setColor(randomColor, `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`);
            setAnimation(randomAnimation);
            updateIntensity(randomIntensity);
            document.getElementById('intensitySlider').value = randomIntensity;
            
            updateStatus('Randomized', 'Random Mode');
        }

        // Toggle play/party mode
        function togglePlay() {
            isPlaying = !isPlaying;
            const playBtn = document.getElementById('playBtn');
            
            if (isPlaying) {
                playBtn.innerHTML = '<i data-lucide="pause" class="w-4 h-4 inline mr-1"></i>Stop';
                playBtn.classList.remove('from-green-500', 'to-emerald-500');
                playBtn.classList.add('from-red-500', 'to-red-600');
                startPartyMode();
            } else {
                playBtn.innerHTML = '<i data-lucide="play" class="w-4 h-4 inline mr-1"></i>Party';
                playBtn.classList.remove('from-red-500', 'to-red-600');
                playBtn.classList.add('from-green-500', 'to-emerald-500');
                stopPartyMode();
            }
            lucide.createIcons();
        }

        // Start party mode
        function startPartyMode() {
            updateStatus('Party Active', 'Party Mode');
            // Rapidly change colors and animations
            setInterval(() => {
                if (isPlaying) randomize();
            }, 2000);
        }

        // Stop party mode
        function stopPartyMode() {
            updateStatus('Party Stopped', 'Standard');
        }

        // Mega mode
        function megaMode() {
            megaActive = !megaActive;
            const megaBtn = document.getElementById('megaBtn');
            
            if (megaActive) {
                megaBtn.textContent = 'MEGA ON';
                lightHead.classList.add('glow-intense', 'zoom');
                updateIntensity(100);
                document.getElementById('intensitySlider').value = 100;
                updateStatus('MEGA MODE', 'Ultra Power');
                createParticles();
            } else {
                megaBtn.innerHTML = '<i data-lucide="zap" class="w-4 h-4 inline mr-1"></i>MEGA';
                lightHead.classList.remove('glow-intense', 'zoom');
                updateStatus('Normal Mode', 'Standard');
                clearParticles();
            }
            lucide.createIcons();
        }

        // Create particle effects
        function createParticles() {
            const particles = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                particles.appendChild(particle);
            }
        }

        // Clear particles
        function clearParticles() {
            document.getElementById('particles').innerHTML = '';
        }

        // Laser mode
        function laserMode() {
            laserActive = !laserActive;
            const laserBtn = document.getElementById('laserBtn');
            const laserBeam = document.getElementById('laserBeam');
            
            if (laserActive) {
                laserBtn.textContent = 'LASER ON';
                laserBeam.classList.add('laser-beam');
                updateStatus('Laser Active', 'Laser Mode');
            } else {
                laserBtn.innerHTML = '<i data-lucide="target" class="w-4 h-4 inline mr-1"></i>Laser';
                laserBeam.classList.remove('laser-beam');
                updateStatus('Laser Off', 'Standard');
            }
            lucide.createIcons();
        }

        // Matrix mode
        function matrixMode() {
            matrixActive = !matrixActive;
            const matrixBtn = document.getElementById('matrixBtn');
            
            if (matrixActive) {
                matrixBtn.textContent = 'MATRIX ON';
                lightHead.classList.add('matrix-effect');
                setColor('#00ff00', 'rgba(0, 255, 0, 0.8)');
                updateStatus('Matrix Active', 'Digital Mode');
            } else {
                matrixBtn.innerHTML = '<i data-lucide="binary" class="w-4 h-4 inline mr-1"></i>Matrix';
                lightHead.classList.remove('matrix-effect');
                updateStatus('Matrix Off', 'Standard');
            }
            lucide.createIcons();
        }

        // Hologram mode
        function hologramMode() {
            hologramActive = !hologramActive;
            const hologramBtn = document.getElementById('hologramBtn');
            
            if (hologramActive) {
                hologramBtn.textContent = 'HOLO ON';
                lightHead.classList.add('holographic');
                updateStatus('Hologram Active', 'Holographic');
            } else {
                hologramBtn.innerHTML = '<i data-lucide="diamond" class="w-4 h-4 inline mr-1"></i>Holo';
                lightHead.classList.remove('holographic');
                updateStatus('Hologram Off', 'Standard');
            }
            lucide.createIcons();
        }

        // Multi-stick mode
        function multiStickMode() {
            multiStickActive = !multiStickActive;
            const multiBtn = document.getElementById('multiBtn');
            const sideSticks = document.getElementById('sideSticks');
            
            if (multiStickActive) {
                multiBtn.textContent = 'MULTI ON';
                sideSticks.style.opacity = '1';
                updateStatus('Multi-Stick', 'Triple Power');
            } else {
                multiBtn.innerHTML = '<i data-lucide="copy" class="w-4 h-4 inline mr-1"></i>Multi';
                sideSticks.style.opacity = '0';
                updateStatus('Single Stick', 'Standard');
            }
            lucide.createIcons();
        }

        // Toggle sound
        function toggleSound() {
            soundEnabled = !soundEnabled;
            const soundBtn = document.getElementById('soundBtn');
            
            if (soundEnabled) {
                soundBtn.innerHTML = '<i data-lucide="volume-2" class="w-4 h-4 inline mr-1"></i>On';
                soundBtn.classList.remove('bg-gray-300', 'text-gray-700');
                soundBtn.classList.add('bg-green-500', 'text-white');
            } else {
                soundBtn.innerHTML = '<i data-lucide="volume-off" class="w-4 h-4 inline mr-1"></i>Off';
                soundBtn.classList.remove('bg-green-500', 'text-white');
                soundBtn.classList.add('bg-gray-300', 'text-gray-700');
            }
            lucide.createIcons();
        }

        // Set preset modes
        function setPreset(preset) {
            const presets = {
                concert: { color: '#3b82f6', animation: 'wave', intensity: 70 },
                rave: { color: '#ff0080', animation: 'strobe', intensity: 100 },
                chill: { color: '#40e0d0', animation: 'breathe', intensity: 40 },
                party: { color: '#ff4500', animation: 'disco', intensity: 90 },
                fire: { color: '#ff4500', animation: 'flicker', intensity: 85 },
                ice: { color: '#00bfff', animation: 'pulse', intensity: 60 }
            };
            
            if (presets[preset]) {
                const p = presets[preset];
                setColor(p.color, `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`);
                setAnimation(p.animation);
                updateIntensity(p.intensity);
                document.getElementById('intensitySlider').value = p.intensity;
                updateStatus(`${preset.charAt(0).toUpperCase() + preset.slice(1)} Mode`, preset.toUpperCase());
            }
        }

        // Reset all
        function resetAll() {
            // Reset all modes
            isPlaying = false;
            megaActive = false;
            laserActive = false;
            matrixActive = false;
            hologramActive = false;
            multiStickActive = false;
            
            // Reset UI
            document.getElementById('playBtn').innerHTML = '<i data-lucide="play" class="w-4 h-4 inline mr-1"></i>Party';
            document.getElementById('megaBtn').innerHTML = '<i data-lucide="zap" class="w-4 h-4 inline mr-1"></i>MEGA';
            document.getElementById('laserBtn').innerHTML = '<i data-lucide="target" class="w-4 h-4 inline mr-1"></i>Laser';
            document.getElementById('matrixBtn').innerHTML = '<i data-lucide="binary" class="w-4 h-4 inline mr-1"></i>Matrix';
            document.getElementById('hologramBtn').innerHTML = '<i data-lucide="diamond" class="w-4 h-4 inline mr-1"></i>Holo';
            document.getElementById('multiBtn').innerHTML = '<i data-lucide="copy" class="w-4 h-4 inline mr-1"></i>Multi';
            
            // Reset light stick
            setColor('#3b82f6', 'rgba(59, 130, 246, 0.6)');
            setAnimation('pulse');
            updateIntensity(80);
            document.getElementById('intensitySlider').value = 80;
            document.getElementById('speedSlider').value = 1;
            updateSpeed(1);
            
            // Clear effects
            clearParticles();
            document.getElementById('laserBeam').classList.remove('laser-beam');
            document.getElementById('sideSticks').style.opacity = '0';
            
            // Remove all classes
            lightHead.className = 'absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-80 rounded-full border-4 border-white shadow-2xl light-glow pulse';
            
            updateStatus('Reset Complete', 'Standard');
            lucide.createIcons();
        }

        // Share configuration
        function shareConfig() {
            const config = {
                color: currentColor,
                animation: currentAnimation,
                intensity: intensity,
                speed: speed
            };
            
            navigator.clipboard.writeText(JSON.stringify(config)).then(() => {
                alert('Light stick configuration copied to clipboard!');
            }).catch(() => {
                alert('Unable to copy configuration. Please try again.');
            });
        }

        // Initialize the light stick
        document.addEventListener('DOMContentLoaded', function() {
            updateLightStick();
            updateStatus('Ready', 'Standard');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="container mx-auto px-4 py-8">

<div className="text-center mb-12 fade-in" style={{animationDelay: '0.1s'}}>
<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">Ultimate Light Stick Maker</h1>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Create the most amazing virtual light stick with advanced effects, animations, and interactive features!</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">

<div className="slide-up" style={{animationDelay: '0.2s'}}>
<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none" id="particles"></div>
<div className="absolute inset-0 pointer-events-none" id="energyField"></div>
<div className="absolute inset-0 pointer-events-none" id="laserBeam"></div>
<h2 className="text-2xl font-medium text-gray-900 mb-8 tracking-tight relative z-10">Your Light Stick</h2>

<div className="relative mx-auto mb-8 z-10" style={{width: '160px', height: '400px'}}>

<div className="absolute left-1/2 transform -translate-x-1/2" style={{width: '120px', height: '400px'}}>

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 light-stick rounded-b-lg border-2 border-gray-300">
<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-400 rounded"></div>
<div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-500 rounded"></div>
<div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full" id="powerLight"></div>
<div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-blue-400 rounded-full" id="modeIndicator"></div>
</div>
</div>

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-80 rounded-full border-4 border-white shadow-2xl light-glow" id="lightHead" style={{background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', boxShadow: '0 0 50px rgba(59, 130, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.3)'}}>

<div className="absolute inset-2 rounded-full opacity-80" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), transparent 60%)'}}></div>

<div className="absolute inset-0" id="sparkles">
<div className="absolute top-8 left-4 w-2 h-2 bg-white rounded-full opacity-90 pulse"></div>
<div className="absolute top-16 right-3 w-1 h-1 bg-white rounded-full opacity-80 pulse" style={{animationDelay: '0.3s'}}></div>
<div className="absolute bottom-12 left-6 w-1.5 h-1.5 bg-white rounded-full opacity-75 pulse" style={{animationDelay: '0.6s'}}></div>
<div className="absolute top-32 left-2 w-1 h-1 bg-white rounded-full opacity-60 pulse" style={{animationDelay: '0.9s'}}></div>
<div className="absolute bottom-20 right-4 w-2 h-2 bg-white rounded-full opacity-70 pulse" style={{animationDelay: '1.2s'}}></div>
</div>

<div className="absolute inset-0 rounded-full opacity-0" id="laserEffect"></div>

<div className="absolute inset-0" id="energyRings">
<div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-2 border border-white rounded-full opacity-60"></div>
<div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-14 h-2 border border-white rounded-full opacity-40"></div>
<div className="absolute top-30 left-1/2 transform -translate-x-1/2 w-12 h-2 border border-white rounded-full opacity-20"></div>
</div>
</div>
</div>

<div className="absolute inset-0 opacity-0" id="sideSticks">
<div className="absolute left-0 top-8 w-12 h-60 bg-gradient-to-b from-red-500 to-red-700 rounded-full shadow-lg pulse"></div>
<div className="absolute right-0 top-8 w-12 h-60 bg-gradient-to-b from-green-500 to-green-700 rounded-full shadow-lg pulse" style={{animationDelay: '0.5s'}}></div>
</div>
</div>

<div className="relative z-10 mb-6 bg-gray-900 rounded-lg p-4 text-white">
<div className="text-sm font-mono" id="statusDisplay">
<div>Status: <span className="text-green-400" id="statusText">Ready</span></div>
<div>Mode: <span className="text-blue-400" id="modeText">Standard</span></div>
<div>Energy: <span className="text-yellow-400" id="energyLevel">100%</span></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
<button className="px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" onclick="randomize()">
<i className="w-4 h-4 inline mr-1" data-lucide="shuffle"></i>
                            Random
                        </button>
<button className="px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" id="playBtn" onclick="togglePlay()">
<i className="w-4 h-4 inline mr-1" data-lucide="play"></i>
                            Party
                        </button>
<button className="px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" id="megaBtn" onclick="megaMode()">
<i className="w-4 h-4 inline mr-1" data-lucide="zap"></i>
                            MEGA
                        </button>
<button className="px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" id="laserBtn" onclick="laserMode()">
<i className="w-4 h-4 inline mr-1" data-lucide="target"></i>
                            Laser
                        </button>
<button className="px-3 py-2 bg-gradient-to-r from-green-600 to-green-800 text-white font-medium rounded-xl hover:from-green-700 hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" id="matrixBtn" onclick="matrixMode()">
<i className="w-4 h-4 inline mr-1" data-lucide="binary"></i>
                            Matrix
                        </button>
<button className="px-3 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" id="hologramBtn" onclick="hologramMode()">
<i className="w-4 h-4 inline mr-1" data-lucide="diamond"></i>
                            Holo
                        </button>
<button className="px-3 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" id="multiBtn" onclick="multiStickMode()">
<i className="w-4 h-4 inline mr-1" data-lucide="copy"></i>
                            Multi
                        </button>
<button className="px-3 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" onclick="resetAll()">
<i className="w-4 h-4 inline mr-1" data-lucide="rotate-ccw"></i>
                            Reset
                        </button>
</div>
</div>
</div>

<div className="slide-up" style={{animationDelay: '0.3s'}}>
<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-h-[900px] overflow-y-auto">
<h2 className="text-2xl font-medium text-gray-900 mb-8 tracking-tight">Advanced Controls</h2>

<div className="mb-8">
<label className="block text-sm font-medium text-gray-700 mb-4">Color Palette</label>

<div className="grid grid-cols-8 gap-2 mb-4">
<button className="w-8 h-8 rounded-lg bg-red-500 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#ff0000', 'rgba(255, 0, 0, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-orange-600 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#ff4500', 'rgba(255, 69, 0, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-orange-400 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#ffa500', 'rgba(255, 165, 0, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-yellow-400 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#ffff00', 'rgba(255, 255, 0, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-green-500 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#00ff00', 'rgba(0, 255, 0, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-cyan-400 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#00ffff', 'rgba(0, 255, 255, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-blue-500 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#0000ff', 'rgba(0, 0, 255, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-purple-500 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#8000ff', 'rgba(128, 0, 255, 0.8)')"></button>
</div>

<div className="grid grid-cols-8 gap-2 mb-4">
<button className="w-8 h-8 rounded-lg bg-pink-500 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#ff1493', 'rgba(255, 20, 147, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-pink-400 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#ff69b4', 'rgba(255, 105, 180, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-fuchsia-500 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#ff00ff', 'rgba(255, 0, 255, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-lime-400 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#adff2f', 'rgba(173, 255, 47, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-emerald-400 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#00ff7f', 'rgba(0, 255, 127, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-turquoise hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#40e0d0', 'rgba(64, 224, 208, 0.8)')" style={{backgroundColor: '#40e0d0'}}></button>
<button className="w-8 h-8 rounded-lg bg-blue-400 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#1e90ff', 'rgba(30, 144, 255, 0.8)')"></button>
<button className="w-8 h-8 rounded-lg bg-purple-400 hover:scale-110 transition-transform duration-200 shadow-lg" onclick="setColor('#9370db', 'rgba(147, 112, 219, 0.8)')"></button>
</div>

<div className="grid grid-cols-4 gap-3 mb-4">
<button className="px-3 py-2 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg" onclick="setGradientColor('rainbow')">
                                Rainbow
                            </button>
<button className="px-3 py-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg" onclick="setGradientColor('sunset')">
                                Sunset
                            </button>
<button className="px-3 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg" onclick="setGradientColor('ocean')">
                                Ocean
                            </button>
<button className="px-3 py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-200 shadow-lg" onclick="setGradientColor('galaxy')">
                                Galaxy
                            </button>
</div>

<div className="flex gap-3 mb-4">
<input className="w-12 h-10 rounded-lg border-2 border-gray-300 cursor-pointer" id="customColor" onchange="setCustomColor()" type="color" value="#3b82f6"/>
<button className="flex-1 px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200" onclick="setCustomColor()">
                                Use Custom Color
                            </button>
</div>
</div>

<div className="mb-8">
<label className="block text-sm font-medium text-gray-700 mb-4">Animation Effects</label>
<div className="grid grid-cols-2 gap-3">
<button className="px-3 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200" onclick="setAnimation('pulse')">
                                Pulse
                            </button>
<button className="px-3 py-2 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-200" onclick="setAnimation('strobe')">
                                Strobe
                            </button>
<button className="px-3 py-2 bg-gradient-to-r from-red-500 to-purple-500 text-white font-medium rounded-lg hover:from-red-600 hover:to-purple-600 transition-colors duration-200" onclick="setAnimation('rainbow')">
                                Rainbow
                            </button>
<button className="px-3 py-2 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-colors duration-200" onclick="setAnimation('wave')">
                                Wave
                            </button>
<button className="px-3 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-200" onclick="setAnimation('spin')">
                                Spin
                            </button>
<button className="px-3 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200" onclick="setAnimation('bounce')">
                                Bounce
                            </button>
<button className="px-3 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600 transition-colors duration-200" onclick="setAnimation('glow-intense')">
                                Intense Glow
                            </button>
<button className="px-3 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-200" onclick="setAnimation('shake')">
                                Shake
                            </button>
<button className="px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors duration-200" onclick="setAnimation('disco')">
                                Disco
                            </button>
<button className="px-3 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors duration-200" onclick="setAnimation('lightning')">
                                Lightning
                            </button>
<button className="px-3 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200" onclick="setAnimation('heartbeat')">
                                Heartbeat
                            </button>
<button className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-colors duration-200" onclick="setAnimation('hypnotic')">
                                Hypnotic
                            </button>
</div>
</div>

<div className="mb-8">
<label className="block text-sm font-medium text-gray-700 mb-4">Light Intensity</label>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-4" id="intensitySlider" max="100" min="10" onchange="updateIntensity(this.value)" type="range" value="80"/>
<div className="flex justify-between text-sm text-gray-500">
<span>Dim</span>
<span id="intensityValue">80%</span>
<span>Bright</span>
</div>
</div>

<div className="mb-8">
<label className="block text-sm font-medium text-gray-700 mb-4">Animation Speed</label>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-4" id="speedSlider" max="5" min="0.5" onchange="updateSpeed(this.value)" step="0.1" type="range" value="1"/>
<div className="flex justify-between text-sm text-gray-500">
<span>Slow</span>
<span id="speedValue">1x</span>
<span>Fast</span>
</div>
</div>

<div className="mb-8">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-gray-700">Sound Effects</label>
<button className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors duration-200" id="soundBtn" onclick="toggleSound()">
<i className="w-4 h-4 inline mr-1" data-lucide="volume-off"></i>
                                Off
                            </button>
</div>
</div>

<div className="mb-8">
<label className="block text-sm font-medium text-gray-700 mb-4">Preset Modes</label>
<div className="grid grid-cols-1 gap-3">
<button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg" onclick="setPreset('concert')">
                                🎵 Concert Mode
                            </button>
<button className="px-4 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-200 shadow-lg" onclick="setPreset('rave')">
                                🎉 Rave Mode
                            </button>
<button className="px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-lg" onclick="setPreset('chill')">
                                😌 Chill Mode
                            </button>
<button className="px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg" onclick="setPreset('party')">
                                🎊 Party Mode
                            </button>
<button className="px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-medium rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg" onclick="setPreset('fire')">
                                🔥 Fire Mode
                            </button>
<button className="px-4 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-medium rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-lg" onclick="setPreset('ice')">
                                ❄️ Ice Mode
                            </button>
</div>
</div>

<div className="text-center">
<button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" onclick="shareConfig()">
<i className="w-4 h-4 inline mr-2" data-lucide="share-2"></i>
                            Share Your Creation
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
