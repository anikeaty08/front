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
      
        lucide.createIcons();

        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let shootingStars = [];
        let backgroundStars = [];
        let frequency = 2;
        let speed = 5;
        let trailLength = 150;
        let totalStars = 0;

        // Create background stars
        for (let i = 0; i < 200; i++) {
            backgroundStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.01
            });
        }

        class ShootingStar {
            constructor(meteorShower = false) {
                this.reset(meteorShower);
                this.trail = [];
            }

            reset(meteorShower = false) {
                if (meteorShower) {
                    // Meteor shower - stars come from radiant point
                    const radiantX = canvas.width * 0.7;
                    const radiantY = canvas.height * 0.3;
                    const angle = Math.random() * Math.PI / 3 - Math.PI / 6; // Spread from radiant
                    
                    this.x = radiantX + (Math.random() - 0.5) * 200;
                    this.y = radiantY + (Math.random() - 0.5) * 200;
                    this.vx = Math.cos(angle + Math.PI / 4) * (speed + Math.random() * 3);
                    this.vy = Math.sin(angle + Math.PI / 4) * (speed + Math.random() * 3);
                } else {
                    // Random shooting stars
                    const side = Math.floor(Math.random() * 4);
                    switch(side) {
                        case 0: // Top
                            this.x = Math.random() * canvas.width;
                            this.y = -50;
                            break;
                        case 1: // Right
                            this.x = canvas.width + 50;
                            this.y = Math.random() * canvas.height;
                            break;
                        case 2: // Left
                            this.x = -50;
                            this.y = Math.random() * canvas.height;
                            break;
                        case 3: // Diagonal from top corners
                            this.x = Math.random() > 0.5 ? -50 : canvas.width + 50;
                            this.y = -50;
                            break;
                    }
                    
                    const targetX = Math.random() * canvas.width;
                    const targetY = Math.random() * canvas.height;
                    const distance = Math.sqrt((targetX - this.x) ** 2 + (targetY - this.y) ** 2);
                    
                    this.vx = ((targetX - this.x) / distance) * speed;
                    this.vy = ((targetY - this.y) / distance) * speed;
                }

                this.life = 1;
                this.size = Math.random() * 3 + 1;
                this.color = this.getRandomColor();
                this.trail = [];
                this.brightness = Math.random() * 0.5 + 0.5;
            }

            getRandomColor() {
                const colors = [
                    { r: 255, g: 255, b: 255 }, // White
                    { r: 255, g: 245, b: 200 }, // Warm white
                    { r: 200, g: 220, b: 255 }, // Blue white
                    { r: 255, g: 200, b: 150 }, // Orange
                    { r: 150, g: 255, b: 200 }, // Green
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Store trail positions
                this.trail.push({ x: this.x, y: this.y, life: this.life });
                if (this.trail.length > trailLength / 5) {
                    this.trail.shift();
                }

                // Update position
                this.x += this.vx;
                this.y += this.vy;

                // Gravity effect
                this.vy += 0.1;

                // Fade out
                this.life -= 0.005;

                // Check if out of bounds or faded
                return this.life > 0 && 
                       this.x > -100 && this.x < canvas.width + 100 && 
                       this.y > -100 && this.y < canvas.height + 100;
            }

            draw() {
                ctx.save();
                
                // Draw trail
                for (let i = 0; i < this.trail.length; i++) {
                    const point = this.trail[i];
                    const alpha = (point.life * (i / this.trail.length)) * this.brightness;
                    const size = (i / this.trail.length) * this.size;
                    
                    // Outer glow
                    const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size * 3);
                    gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.8})`);
                    gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha * 0.3})`);
                    gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, size * 3, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Core
                    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Draw main star with intense glow
                const alpha = this.life * this.brightness;
                
                // Multiple glow layers for intensity
                for (let i = 0; i < 3; i++) {
                    const glowSize = this.size * (4 - i);
                    const glowAlpha = alpha * (0.3 - i * 0.1);
                    
                    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize);
                    gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${glowAlpha})`);
                    gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);
                    
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Bright core
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }

        function createShootingStar(meteorShower = false) {
            if (Math.random() < frequency / 100) {
                shootingStars.push(new ShootingStar(meteorShower));
                totalStars++;
            }
        }

        function meteorShowerEvent() {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    shootingStars.push(new ShootingStar(true));
                    totalStars++;
                }, i * 200);
            }
        }

        function animate() {
            // Clear canvas with slight trail effect
            ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw background stars with twinkling
            backgroundStars.forEach(star => {
                star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
                star.opacity = Math.max(0.1, Math.min(0.9, star.opacity));
                
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Create new shooting stars
            createShootingStar();

            // Update and draw shooting stars
            shootingStars = shootingStars.filter(star => {
                const alive = star.update();
                if (alive) {
                    star.draw();
                }
                return alive;
            });

            // Update stats
            document.getElementById('activeCount').textContent = shootingStars.length;
            document.getElementById('totalCount').textContent = totalStars;

            requestAnimationFrame(animate);
        }

        // Controls
        document.getElementById('frequency').addEventListener('input', (e) => {
            frequency = parseFloat(e.target.value);
            document.getElementById('frequencyValue').textContent = frequency;
        });

        document.getElementById('speed').addEventListener('input', (e) => {
            speed = parseFloat(e.target.value);
            document.getElementById('speedValue').textContent = speed;
        });

        document.getElementById('trailLength').addEventListener('input', (e) => {
            trailLength = parseInt(e.target.value);
            document.getElementById('trailLengthValue').textContent = trailLength;
        });

        document.getElementById('meteorShower').addEventListener('click', meteorShowerEvent);

        // Handle resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Recreate background stars for new dimensions
            backgroundStars = [];
            for (let i = 0; i < 200; i++) {
                backgroundStars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2,
                    opacity: Math.random() * 0.8 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.01
                });
            }
        });

        // Start animation
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
      

<div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-gray-950/80 to-transparent backdrop-blur-sm">
<div className="flex items-center justify-between max-w-7xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</div>
<h1 className="text-xl font-semibold tracking-tight">Shooting Stars</h1>
</div>
<div className="flex items-center space-x-4 text-sm text-gray-400">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span>Night Sky Active</span>
</div>
</div>
</div>
</div>

<div className="absolute top-20 right-6 z-10 bg-gray-900/90 backdrop-blur-md rounded-xl border border-gray-800 p-4 w-64 opacity-0 animate-slide-in-right" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
<h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center">
<i className="w-4 h-4 mr-2" data-lucide="settings"></i>
            Controls
        </h3>
<div className="space-y-4">
<div>
<label className="text-xs text-gray-400 block mb-2">Frequency</label>
<div className="flex items-center space-x-3">
<input className="flex-1 bg-gray-800 rounded-lg h-2 slider" id="frequency" max="5" min="0.5" step="0.5" type="range" value="2"/>
<span className="text-xs text-gray-300 w-8" id="frequencyValue">2</span>
</div>
</div>
<div>
<label className="text-xs text-gray-400 block mb-2">Speed</label>
<div className="flex items-center space-x-3">
<input className="flex-1 bg-gray-800 rounded-lg h-2 slider" id="speed" max="10" min="1" type="range" value="5"/>
<span className="text-xs text-gray-300 w-8" id="speedValue">5</span>
</div>
</div>
<div>
<label className="text-xs text-gray-400 block mb-2">Trail Length</label>
<div className="flex items-center space-x-3">
<input className="flex-1 bg-gray-800 rounded-lg h-2 slider" id="trailLength" max="300" min="50" type="range" value="150"/>
<span className="text-xs text-gray-300 w-8" id="trailLengthValue">150</span>
</div>
</div>
<button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-center space-x-2" id="meteorShower">
<i className="w-3 h-3" data-lucide="sparkles"></i>
<span>Meteor Shower</span>
</button>
</div>
</div>

<div className="absolute bottom-6 left-6 z-10 bg-gray-900/90 backdrop-blur-md rounded-xl border border-gray-800 p-4 opacity-0 animate-slide-in-up" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
<div className="flex space-x-6 text-xs">
<div>
<div className="text-gray-400 mb-1">Active</div>
<div className="text-blue-400 font-semibold" id="activeCount">0</div>
</div>
<div>
<div className="text-gray-400 mb-1">Total</div>
<div className="text-purple-400 font-semibold" id="totalCount">0</div>
</div>
<div>
<div className="text-gray-400 mb-1">Brightness</div>
<div className="text-yellow-400 font-semibold">✦✦✦</div>
</div>
</div>
</div>

<canvas className="w-full h-screen opacity-0 animate-fade-in" id="canvas" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}></canvas>

<style>
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(2rem); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-up {
            from { opacity: 0; transform: translateY(2rem); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out; }
        
        .slider::-webkit-slider-thumb {
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #1e293b;
        }
        
        .slider::-webkit-slider-track {
            background: #374151;
            height: 4px;
            border-radius: 2px;
        }
    </style>

    </>
  );
}
