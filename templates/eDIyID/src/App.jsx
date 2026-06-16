import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const addBallBtn = document.getElementById('add-ball');
    const clearBtn = document.getElementById('clear');
    const rainbowBtn = document.getElementById('toggle-rainbow');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsPanel = document.getElementById('settings-panel');
    const closeSettingsBtn = document.getElementById('close-settings');
    
    // Settings elements
    const speedSlider = document.getElementById('speed');
    const speedValue = document.getElementById('speed-value');
    const trailSlider = document.getElementById('trail-length');
    const trailValue = document.getElementById('trail-value');
    const sizeSlider = document.getElementById('size');
    const sizeValue = document.getElementById('size-value');
    const fadeSlider = document.getElementById('fade');
    const fadeValue = document.getElementById('fade-value');
    
    // Set canvas size to be larger
    canvas.width = Math.min(1200, window.innerWidth - 40);
    canvas.height = Math.min(600, window.innerHeight - 150);
    
    let balls = [];
    let rainbowMode = false;
    let speedMultiplier = 1;
    let sizeMultiplier = 1;
    let fadeAmount = 0.2;
    let defaultTrailLength = 15;
    
    // Create linear gradient background for canvas
    const canvasGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    canvasGradient.addColorStop(0, '#1e293b');
    canvasGradient.addColorStop(1, '#0f172a');
    
    class Ball {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.baseRadius = 5 + Math.random() * 8;
        this.baseDx = (Math.random() - 0.5) * 6;
        this.baseDy = (Math.random() - 0.5) * 6;
        this.hue = Math.random() * 360;
        this.color = `hsl(${this.hue}, 80%, 60%)`;
        this.trail = [];
        this.hueShift = 0;
      }
      
      update() {
        if (rainbowMode) {
          this.hueShift = (this.hueShift + 1) % 360;
          this.color = `hsl(${(this.hue + this.hueShift) % 360}, 80%, 60%)`;
        }
        
        const radius = this.baseRadius * sizeMultiplier;
        const dx = this.baseDx * speedMultiplier;
        const dy = this.baseDy * speedMultiplier;
        
        this.trail.push({x: this.x, y: this.y});
        
        if (this.trail.length > defaultTrailLength) {
          this.trail.shift();
        }
        
        this.x += dx;
        this.y += dy;
        
        if (this.x + radius > canvas.width || this.x - radius < 0) {
          this.baseDx = -this.baseDx;
        }
        
        if (this.y + radius > canvas.height || this.y - radius < 0) {
          this.baseDy = -this.baseDy;
        }
      }
      
      draw() {
        const radius = this.baseRadius * sizeMultiplier;
        
        if (this.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(this.trail[0].x, this.trail[0].y);
          
          for (let i = 1; i < this.trail.length; i++) {
            ctx.lineTo(this.trail[i].x, this.trail[i].y);
          }
          
          const gradient = ctx.createLinearGradient(
            this.trail[0].x, this.trail[0].y, 
            this.trail[this.trail.length-1].x, this.trail[this.trail.length-1].y
          );
          
          const color = this.color;
          gradient.addColorStop(0, color.replace('hsl', 'hsla').replace(')', ', 0.1)'));
          gradient.addColorStop(1, color);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = radius * 1.5;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    function animate() {
      ctx.fillStyle = canvasGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = `rgba(15, 23, 42, ${fadeAmount})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      balls.forEach(ball => {
        ball.update();
        ball.draw();
      });
      
      requestAnimationFrame(animate);
    }
    
    // Add initial balls
    for (let i = 0; i < 8; i++) {
      balls.push(new Ball());
    }
    
    // Start animation
    animate();
    
    // Event listeners
    addBallBtn.addEventListener('click', () => balls.push(new Ball()));
    clearBtn.addEventListener('click', () => balls = []);
    rainbowBtn.addEventListener('click', () => {
      rainbowMode = !rainbowMode;
      rainbowBtn.classList.toggle('ring-2');
      rainbowBtn.classList.toggle('ring-white');
    });
    
    settingsBtn.addEventListener('click', () => {
      settingsPanel.classList.add('open');
    });
    
    closeSettingsBtn.addEventListener('click', () => {
      settingsPanel.classList.remove('open');
    });
    
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      balls.push(new Ball(e.clientX - rect.left, e.clientY - rect.top));
    });
    
    // Settings listeners
    speedSlider.addEventListener('input', (e) => {
      speedMultiplier = parseFloat(e.target.value);
      speedValue.textContent = speedMultiplier.toFixed(1) + 'x';
    });
    
    trailSlider.addEventListener('input', (e) => {
      defaultTrailLength = parseInt(e.target.value);
      trailValue.textContent = defaultTrailLength;
    });
    
    sizeSlider.addEventListener('input', (e) => {
      sizeMultiplier = parseFloat(e.target.value);
      sizeValue.textContent = sizeMultiplier.toFixed(1) + 'x';
    });
    
    fadeSlider.addEventListener('input', (e) => {
      fadeAmount = parseFloat(e.target.value);
      fadeValue.textContent = fadeAmount.toFixed(2);
    });
    
    // Resize handler
    window.addEventListener('resize', () => {
      canvas.width = Math.min(1200, window.innerWidth - 40);
      canvas.height = Math.min(600, window.innerHeight - 150);
      
      // Update canvas gradient
      canvasGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      canvasGradient.addColorStop(0, '#1e293b');
      canvasGradient.addColorStop(1, '#0f172a');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="text-center w-full max-w-4xl relative">
<h1 className="text-2xl font-bold text-white mb-2">Colorful Bouncing Balls</h1>
<div className="mb-4 flex flex-wrap gap-3 justify-center">
<button className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90" id="add-ball">Add Ball</button>
<button className="px-3 py-1 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-lg hover:opacity-90" id="clear">Clear All</button>
<button className="px-3 py-1 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg hover:opacity-90" id="toggle-rainbow">Rainbow Mode</button>
<button className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:opacity-90" id="settings-btn">Settings</button>
</div>
<div className="relative">
<canvas className="w-full border-2 border-gray-700 rounded-lg shadow-lg" id="canvas"></canvas>

<div className="settings-panel absolute bottom-0 left-0 right-0 p-4 rounded-t-lg shadow-lg z-10" id="settings-panel">
<div className="flex justify-between items-center mb-3">
<h3 className="text-white font-bold">Experimental Settings</h3>
<button className="text-white hover:text-gray-300" id="close-settings">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white text-sm">
<div>
<div className="flex justify-between">
<label htmlFor="speed">Speed</label>
<span className="bg-gradient-to-r from-blue-500 to-blue-600 px-2 rounded" id="speed-value">1.0x</span>
</div>
<input className="w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" id="speed" max="3" min="0.1" step="0.1" type="range" value="1"/>
</div>
<div>
<div className="flex justify-between">
<label htmlFor="trail-length">Trail Length</label>
<span className="bg-gradient-to-r from-purple-500 to-purple-600 px-2 rounded" id="trail-value">15</span>
</div>
<input className="w-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" id="trail-length" max="50" min="1" type="range" value="15"/>
</div>
<div>
<div className="flex justify-between">
<label htmlFor="size">Ball Size</label>
<span className="bg-gradient-to-r from-green-500 to-green-600 px-2 rounded" id="size-value">1.0x</span>
</div>
<input className="w-full bg-gradient-to-r from-green-400 to-green-600 rounded-full" id="size" max="3" min="0.2" step="0.1" type="range" value="1"/>
</div>
<div>
<div className="flex justify-between">
<label htmlFor="fade">Fade Effect</label>
<span className="bg-gradient-to-r from-red-500 to-red-600 px-2 rounded" id="fade-value">0.2</span>
</div>
<input className="w-full bg-gradient-to-r from-red-400 to-red-600 rounded-full" id="fade" max="0.5" min="0" step="0.01" type="range" value="0.2"/>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
