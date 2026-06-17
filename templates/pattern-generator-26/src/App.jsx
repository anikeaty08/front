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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const canvas = document.getElementById('patternCanvas');
        const ctx = canvas.getContext('2d');
        
        // --- 1. Pattern State ---
        const state = {
            density: 64,          // Used as max columns logic
            blockSize: 12,
            blockSpacing: 6,
            shapeMode: 'square',  // square, hex, diag, scatter
            animationSpeed: 10,
            opacity: 80,
            rotation: 45,
            waveIntensity: 60,
            motionFlow: 'Radial Outward',
            blocks: []            // Stored generated blocks
        };

        let width, height;
        let animFrameId = null;
        let mouseX = -1000, mouseY = -1000;

        // Initialize / Resize Canvas
        function resize() {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.parentElement.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            updatePatternAndRebuild();
        }

        window.addEventListener('resize', resize);
        
        // Mouse tracking for interactive effect
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });
        
        canvas.addEventListener('mouseleave', () => {
            mouseX = -1000;
            mouseY = -1000;
        });

        // --- 2. Grid Generator ---
        function generatePatternGrid() {
            state.blocks = [];
            
            // Map density to total visible grid bounds (cols/rows)
            const cols = state.density;
            const rows = Math.floor(cols * (height / width));

            const totalWidth = cols * (state.blockSize + state.blockSpacing);
            const totalHeight = rows * (state.blockSize + state.blockSpacing);
            
            // Center the grid
            const startX = (width - totalWidth) / 2;
            const startY = (height - totalHeight) / 2;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    let px = startX + x * (state.blockSize + state.blockSpacing);
                    let py = startY + y * (state.blockSize + state.blockSpacing);

                    // Apply Shape Modes structurally
                    if (state.shapeMode === 'hex' && y % 2 !== 0) {
                        px += (state.blockSize + state.blockSpacing) / 2;
                    } else if (state.shapeMode === 'diag') {
                        py += (x % 2 !== 0) ? (state.blockSize + state.blockSpacing) / 2 : 0;
                    } else if (state.shapeMode === 'scatter') {
                        px += (Math.random() - 0.5) * state.blockSpacing * 1.5;
                        py += (Math.random() - 0.5) * state.blockSpacing * 1.5;
                    }

                    // Store calculated structural data
                    state.blocks.push({ col: x, row: y, px, py });
                }
            }
        }

        // --- 3. Update & Rebuild System ---
        function updatePatternAndRebuild() {
            // Cancel previous frame to prevent stacking optimizations
            if (animFrameId) {
                cancelAnimationFrame(animFrameId);
            }
            // Clear array & recalculate logic
            generatePatternGrid();
            // Restart frame loop
            animFrameId = requestAnimationFrame(renderPattern);
        }

        // --- 4. Renderer ---
        function renderPattern(time) {
            ctx.clearRect(0, 0, width, height);
            
            const t = time * 0.00015 * (state.animationSpeed / 10);
            
            const waveMult = state.waveIntensity / 100;
            const baseRotation = (state.rotation * Math.PI) / 180;
            const opacityMult = state.opacity / 100;

            // Loop through stored grid blocks
            for (let i = 0; i < state.blocks.length; i++) {
                const block = state.blocks[i];
                let wave = 0;

                // Motion Flow Selection
                if (state.motionFlow === 'Radial Outward') {
                    const distanceCenter = Math.sqrt(Math.pow(block.col - state.density/2, 2) + Math.pow(block.row - (state.density * (height/width))/2, 2));
                    wave = Math.sin(distanceCenter * 0.3 - t * 2) * Math.cos(block.col * 0.1 + t);
                } else if (state.motionFlow === 'Left to Right') {
                    wave = Math.sin(block.col * 0.2 - t * 2);
                } else if (state.motionFlow === 'Top to Bottom') {
                    wave = Math.sin(block.row * 0.2 - t * 2);
                } else if (state.motionFlow === 'Perlin Noise') {
                    wave = Math.sin(block.col * 0.2 + t) * Math.cos(block.row * 0.2 - t * 0.5);
                }

                // Mouse interaction repulsion/scale logic
                const dx = block.px + state.blockSize/2 - mouseX;
                const dy = block.py + state.blockSize/2 - mouseY;
                const distMouse = Math.sqrt(dx*dx + dy*dy);
                
                let hoverScale = 0;
                let hoverGlow = 0;
                if (distMouse < 120) {
                    const intensity = (120 - distMouse) / 120;
                    hoverScale = intensity * 0.4; 
                    hoverGlow = intensity;
                }

                // Compute final transformations based on interactive state
                const scale = 0.5 + (wave * 0.25 * waveMult) + hoverScale;
                const finalSize = Math.max(2, state.blockSize * scale);
                
                const colorVal = Math.floor(255 * (0.15 + (scale * 0.5) + (hoverGlow * 0.4)));
                const clampedColor = Math.min(255, Math.max(20, colorVal));

                ctx.fillStyle = `rgba(${clampedColor}, ${clampedColor}, ${clampedColor}, ${opacityMult})`;
                
                ctx.save();
                ctx.translate(block.px + state.blockSize/2, block.py + state.blockSize/2);
                ctx.rotate((wave * Math.PI * 0.1 * waveMult) + baseRotation); 
                
                ctx.beginPath();
                ctx.roundRect(-finalSize/2, -finalSize/2, finalSize, finalSize, 2);
                ctx.fill();
                
                ctx.restore();
            }
            
            animFrameId = requestAnimationFrame(renderPattern);
        }

        // --- 5. Control Event Binding ---
        function bindControl(sliderId, valId, stateKey, isStructural, formatter = (v) => v) {
            const slider = document.getElementById(sliderId);
            const display = document.getElementById(valId);
            
            slider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                state[stateKey] = val;
                
                if (display) display.innerText = formatter(val);
                
                // If structure parameters are touched, full rebuild is required
                if (isStructural) {
                    updatePatternAndRebuild();
                }
            });
        }

        // Structural Controls (Triggers rebuild)
        bindControl('densitySlider', 'densityVal', 'density', true);
        bindControl('sizeSlider', 'sizeVal', 'blockSize', true);
        bindControl('spacingSlider', 'spacingVal', 'blockSpacing', true);

        // Animation/Effect Controls (State update only)
        bindControl('speedSlider', 'speedVal', 'animationSpeed', false, v => (v/10).toFixed(1) + 'x');
        bindControl('waveSlider', 'waveVal', 'waveIntensity', false);
        bindControl('rotationSlider', 'rotationVal', 'rotation', false, v => v + '°');
        bindControl('opacitySlider', 'opacityVal', 'opacity', false, v => (v/100).toFixed(1));
        
        // Unmapped sliders for visual completion (effects setup can be scaled)
        bindControl('glowSlider', 'glowVal', 'glow', false);
        bindControl('depthSlider', 'depthVal', 'depth', false);
        bindControl('noiseSlider', 'noiseVal', 'noise', false);

        // Motion Flow Select
        document.getElementById('motionFlowSelect').addEventListener('change', (e) => {
            state.motionFlow = e.target.value;
        });

        // Shape Mode Buttons Setup
        const shapeButtons = document.querySelectorAll('.shape-mode-btn');
        shapeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update CSS styling to reflect selection
                shapeButtons.forEach(b => {
                    b.classList.remove('bg-neutral-800', 'text-white', 'shadow-sm', 'font-medium');
                    b.classList.add('text-neutral-500', 'hover:text-white', 'font-normal');
                });
                e.currentTarget.classList.remove('text-neutral-500', 'hover:text-white', 'font-normal');
                e.currentTarget.classList.add('bg-neutral-800', 'text-white', 'shadow-sm', 'font-medium');
                
                // Update Structural State and Rebuild
                state.shapeMode = e.currentTarget.dataset.mode;
                updatePatternAndRebuild();
            });
        });

        // Initialize on boot
        setTimeout(() => {
            resize();
        }, 50);
    
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
      

<header className="w-full flex items-center justify-between px-6 py-8 max-w-[90%] mx-auto">
<div className="text-xl font-medium tracking-tighter text-white select-none tracking-widest uppercase">PTTRN</div>
<div className="flex items-center gap-6">
<button className="text-sm font-normal text-neutral-500 hover:text-white transition-colors duration-200">Reset Settings</button>
<button className="text-sm font-normal text-neutral-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5">
<iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon>
                Random
            </button>
<div className="w-px h-4 bg-neutral-800"></div>
<button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors duration-200 shadow-sm">
<iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
                Export
            </button>
</div>
</header>
<main className="w-full max-w-[90%] mx-auto flex flex-col gap-8">

<section className="w-full h-[60vh] bg-black rounded-2xl border border-neutral-800/60 relative overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.02)]">
<canvas className="absolute inset-0 w-full h-full z-0" id="patternCanvas"></canvas>

<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10"></div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-800/50 z-20 pointer-events-none opacity-50">
<iconify-icon className="text-neutral-400" icon="solar:cursor-linear" width="14"></iconify-icon>
<span className="text-xs font-light text-neutral-400 tracking-wide">Interactive Canvas</span>
</div>
</section>

<section className="w-full bg-[#0A0A0A] rounded-2xl border border-neutral-800/50 p-8 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="flex flex-col gap-8 gap-x-8 gap-y-8">
<h3 className="text-lg font-medium text-white tracking-tight flex items-center gap-2.5">
<iconify-icon className="text-neutral-500" icon="solar:widget-3-linear" width="20"></iconify-icon>
                        Structure
                    </h3>
<div className="flex flex-col gap-6">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span className="">Grid Density</span>
<span className="text-neutral-500 font-mono" id="densityVal">64</span>
</div>
<input id="densitySlider" max="120" min="10" type="range" value="64"/>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Block Size</span>
<span className="text-neutral-500 font-mono" id="sizeVal">12</span>
</div>
<input id="sizeSlider" max="40" min="4" type="range" value="12"/>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Block Spacing</span>
<span className="text-neutral-500 font-mono" id="spacingVal">6</span>
</div>
<input className="" id="spacingSlider" max="40" min="2" type="range" value="6"/>
</div>

<div className="flex flex-col gap-3 pt-2">
<span className="text-xs font-normal text-neutral-400 mb-1">Pattern Mode</span>
<div className="flex p-1 bg-neutral-900/50 rounded-lg border border-neutral-800/80">
<button className="shape-mode-btn flex-1 text-xs py-1.5 rounded-md bg-neutral-800 text-white shadow-sm font-medium transition-colors" data-mode="square">Square</button>
<button className="shape-mode-btn flex-1 text-xs py-1.5 rounded-md text-neutral-500 hover:text-white font-normal transition-colors" data-mode="hex">Hex</button>
<button className="shape-mode-btn flex-1 text-xs py-1.5 rounded-md text-neutral-500 hover:text-white font-normal transition-colors" data-mode="diag">Diag</button>
<button className="shape-mode-btn flex-1 text-xs py-1.5 rounded-md text-neutral-500 hover:text-white font-normal transition-colors" data-mode="scatter">Scatter</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8">
<h3 className="text-lg font-medium text-white tracking-tight flex items-center gap-2.5">
<iconify-icon className="text-neutral-500" icon="solar:play-stream-linear" width="20"></iconify-icon>
                        Animation
                    </h3>
<div className="flex flex-col gap-6">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Speed Multiplier</span>
<span className="text-neutral-500 font-mono" id="speedVal">1.0x</span>
</div>
<input id="speedSlider" max="50" min="1" type="range" value="10"/>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Wave Intensity</span>
<span className="text-neutral-500 font-mono" id="waveVal">60</span>
</div>
<input id="waveSlider" max="100" min="0" type="range" value="60"/>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Rotation Offset</span>
<span className="text-neutral-500 font-mono" id="rotationVal">45°</span>
</div>
<input id="rotationSlider" max="360" min="0" type="range" value="45"/>
</div>

<div className="flex flex-col gap-3 pt-2">
<span className="text-xs font-normal text-neutral-400 mb-1">Motion Flow</span>
<div className="relative w-full">
<select className="w-full appearance-none bg-neutral-900/50 border border-neutral-800/80 text-white text-xs py-2 px-3 rounded-lg focus:outline-none focus:border-neutral-600 cursor-pointer font-normal" id="motionFlowSelect">
<option value="Radial Outward">Radial Outward</option>
<option value="Left to Right">Left to Right</option>
<option value="Top to Bottom">Top to Bottom</option>
<option value="Perlin Noise">Perlin Noise</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8">
<h3 className="text-lg font-medium text-white tracking-tight flex items-center gap-2.5">
<iconify-icon className="text-neutral-500" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
                        Effects
                    </h3>
<div className="flex flex-col gap-6">

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Base Opacity</span>
<span className="text-neutral-500 font-mono" id="opacityVal">0.8</span>
</div>
<input id="opacitySlider" max="100" min="1" type="range" value="80"/>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Glow Emit</span>
<span className="text-neutral-500 font-mono" id="glowVal">20</span>
</div>
<input id="glowSlider" max="100" min="0" type="range" value="20"/>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Depth Axis</span>
<span className="text-neutral-500 font-mono" id="depthVal">5</span>
</div>
<input id="depthSlider" max="20" min="0" type="range" value="5"/>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-normal text-neutral-400">
<span>Chromatic Noise</span>
<span className="text-neutral-500 font-mono" id="noiseVal">0</span>
</div>
<input id="noiseSlider" max="50" min="0" type="range" value="0"/>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#0A0A0A] rounded-2xl border border-neutral-800/50 p-6 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div className="flex flex-wrap items-center gap-8">

<div className="flex items-center gap-6">
<div className="flex flex-col gap-2 items-center">
<div className="w-6 h-6 rounded-full border border-neutral-700 bg-black cursor-pointer ring-2 ring-transparent hover:ring-neutral-700 transition-all shadow-inner relative overflow-hidden">
<input className="absolute -inset-2 opacity-0 cursor-pointer w-[200%] h-[200%]" type="color" value="#000000"/>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Bg</span>
</div>
<div className="w-px h-6 bg-neutral-800"></div>
<div className="flex flex-col gap-2 items-center">
<div className="w-6 h-6 rounded-full border border-neutral-700 bg-white cursor-pointer ring-2 ring-transparent hover:ring-neutral-700 transition-all shadow-inner relative overflow-hidden">
<input className="absolute -inset-2 opacity-0 cursor-pointer w-[200%] h-[200%]" type="color" value="#ffffff"/>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Primary</span>
</div>
<div className="flex flex-col gap-2 items-center">
<div className="w-6 h-6 rounded-full border border-neutral-700 bg-neutral-600 cursor-pointer ring-2 ring-transparent hover:ring-neutral-700 transition-all shadow-inner relative overflow-hidden">
<input className="absolute -inset-2 opacity-0 cursor-pointer w-[200%] h-[200%]" type="color" value="#525252"/>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Secondary</span>
</div>
</div>
<div className="h-8 w-px bg-neutral-800 hidden md:block"></div>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="block w-8 h-4 rounded-full bg-neutral-800 transition-colors toggle-label border border-neutral-700"></div>
<div className="dot absolute left-0.5 top-0.5 w-3 h-3 rounded-full transition transform translate-x-4 bg-white"></div>
</div>
<span className="text-xs font-normal text-neutral-400 group-hover:text-white transition-colors">Gradient Interpolation</span>
</label>
</div>

<div className="flex flex-col gap-2 w-full md:w-auto">
<span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest md:text-right">Palettes</span>
<div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-neutral-500 cursor-pointer ring-1 ring-white/20 hover:scale-110 transition-transform"></div>
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-900 cursor-pointer border border-neutral-800 hover:scale-110 transition-transform"></div>
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-900 cursor-pointer border border-neutral-800 hover:scale-110 transition-transform"></div>
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-900 cursor-pointer border border-neutral-800 hover:scale-110 transition-transform"></div>
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-red-900 cursor-pointer border border-neutral-800 hover:scale-110 transition-transform"></div>
<div className="w-px h-4 bg-neutral-800 mx-1"></div>
<button className="w-6 h-6 rounded-full border border-dashed border-neutral-700 flex items-center justify-center hover:border-neutral-400 hover:text-white text-neutral-500 transition-colors bg-neutral-900/50">
<iconify-icon icon="solar:dices-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="w-full flex flex-col gap-6 pt-4">
<h2 className="text-lg font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:gallery-minimalistic-linear" width="20"></iconify-icon>
                Presets Library
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">

<div className="group cursor-pointer flex flex-col gap-3">
<div className="w-full aspect-square bg-[#0A0A0A] rounded-xl border border-neutral-800/60 overflow-hidden relative group-hover:border-neutral-500 transition-colors duration-300 flex items-center justify-center mini-grid">
<div className="w-8 h-8 rounded-sm bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-500 ease-out"></div>
</div>
<span className="text-xs font-normal text-neutral-500 group-hover:text-neutral-300 transition-colors">Pulse Grid</span>
</div>

<div className="group cursor-pointer flex flex-col gap-3">
<div className="w-full aspect-square bg-[#0A0A0A] rounded-xl border border-neutral-800/60 overflow-hidden relative group-hover:border-neutral-500 transition-colors duration-300 flex items-center justify-center">
<div className="grid grid-cols-3 gap-1 rotate-12 group-hover:rotate-0 transition-transform duration-500">
<div className="w-2 h-2 bg-neutral-400 rounded-sm"></div><div className="w-2 h-2 bg-white rounded-sm"></div><div className="w-2 h-2 bg-neutral-600 rounded-sm"></div>
<div className="w-2 h-2 bg-white rounded-sm"></div><div className="w-2 h-2 bg-neutral-400 rounded-sm"></div><div className="w-2 h-2 bg-white rounded-sm"></div>
<div className="w-2 h-2 bg-neutral-600 rounded-sm"></div><div className="w-2 h-2 bg-white rounded-sm"></div><div className="w-2 h-2 bg-neutral-400 rounded-sm"></div>
</div>
</div>
<span className="text-xs font-normal text-neutral-500 group-hover:text-neutral-300 transition-colors">Digital Noise</span>
</div>

</div>
</section>
</main>



    </>
  );
}
