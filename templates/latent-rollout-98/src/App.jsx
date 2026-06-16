import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        const svg = document.getElementById('rollout-svg');
        const pathsLayer = document.getElementById('paths-layer');
        const shapesLayer = document.getElementById('shapes-layer');
        
        // Configuration
        let width = window.innerWidth;
        let height = window.innerHeight;
        let centerY = height / 2;

        const CONFIG = {
            stepX: 45,        // Distance between nodes
            baseBranchProb: 0.22, 
            nodeSize: 10,     
            speed: 120        // ms per step
        };

        // State
        let branches = [];
        let animationTimer;

        // Color Logic
        function getColor(deviation, progress) {
            // progress (0-1): Left to Right
            // deviation (0-1): Center to Edge
            
            // If near center (Healthy)
            if (deviation < 0.15) {
                // Blue (start) -> Cyan -> Green (end)
                if (progress < 0.2) return 'rgb(59, 130, 246)'; // Blue
                if (progress < 0.5) return 'rgb(6, 182, 212)';  // Cyan
                return 'rgb(16, 185, 129)'; // Emerald
            } 
            
            // If diverging (Sick)
            // Green -> Yellow -> Orange -> Red based on deviation severity
            const severity = (deviation - 0.15) * 2; // Normalize 0.15-0.65 to 0-1
            
            if (severity < 0.3) return 'rgb(132, 204, 22)'; // Lime
            if (severity < 0.6) return 'rgb(245, 158, 11)'; // Amber
            if (severity < 0.8) return 'rgb(249, 115, 22)'; // Orange
            return 'rgb(244, 63, 94)'; // Rose/Red
        }

        class Branch {
            constructor(x, y, angle, depth, parentColor) {
                this.x = x;
                this.y = y;
                this.angle = angle;
                this.depth = depth;
                this.active = true;
                this.color = parentColor || 'rgb(59, 130, 246)';
                
                // "Sick branches extend less far"
                // Calculate max lifespan based on how far off-center we start
                const deviation = Math.abs(y - centerY) / (height / 2);
                const maxStepsPossible = Math.floor((width - x) / CONFIG.stepX);
                
                // Penalty factor: 0 (center) to 0.8 (edge)
                const penalty = Math.min(0.9, deviation * 2.5); 
                this.remainingSteps = Math.max(2, Math.floor(maxStepsPossible * (1 - penalty)));
                
                this.stepCount = 0;
            }

            update() {
                if (!this.active) return;
                
                if (this.remainingSteps <= 0 || this.x > width - 50) {
                    this.active = false;
                    return;
                }

                // Move forward
                const nextX = this.x + CONFIG.stepX;
                
                // Angle decay: branches tend to straighten out horizontally over time (sigmoid-like behavior)
                this.angle = this.angle * 0.7; 
                
                const nextY = this.y + (Math.sin(this.angle) * CONFIG.stepX * 1.2);

                // Draw connecting line
                this.drawLine(this.x, this.y, nextX, nextY);

                // Update properties for next step
                this.x = nextX;
                this.y = nextY;
                this.remainingSteps--;
                this.stepCount++;

                // Update color based on new position
                const progress = this.x / width;
                const deviation = Math.abs(this.y - centerY) / (height / 2);
                this.color = getColor(deviation, progress);

                // Draw geometric node
                this.drawShape(this.x, this.y, this.color);
            }

            drawLine(x1, y1, x2, y2) {
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("x1", x1);
                line.setAttribute("y1", y1);
                line.setAttribute("x2", x2);
                line.setAttribute("y2", y2);
                line.setAttribute("stroke", this.color);
                line.setAttribute("stroke-width", "2.5");
                line.setAttribute("stroke-linecap", "round");
                line.setAttribute("class", "fade-in");
                line.style.opacity = "0.8";
                pathsLayer.appendChild(line);
            }

            drawShape(x, y, color) {
                const s = CONFIG.nodeSize;
                let shape;
                // Cycle: Square -> Triangle -> Circle -> Diamond
                const type = (this.depth + this.stepCount) % 4;

                if (type === 0) { // Square
                    shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    shape.setAttribute("x", x - s/2);
                    shape.setAttribute("y", y - s/2);
                    shape.setAttribute("width", s);
                    shape.setAttribute("height", s);
                } else if (type === 1) { // Triangle
                    shape = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                    // Right pointing triangle
                    shape.setAttribute("points", `${x-s/2},${y-s/2} ${x+s/2},${y} ${x-s/2},${y+s/2}`);
                } else if (type === 2) { // Circle
                    shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                    shape.setAttribute("cx", x);
                    shape.setAttribute("cy", y);
                    shape.setAttribute("r", s/1.8);
                } else { // Diamond
                    shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    const ds = s * 0.8;
                    shape.setAttribute("x", x - ds/2);
                    shape.setAttribute("y", y - ds/2);
                    shape.setAttribute("width", ds);
                    shape.setAttribute("height", ds);
                    shape.setAttribute("transform", `rotate(45, ${x}, ${y})`);
                }

                shape.setAttribute("fill", "#000"); 
                shape.setAttribute("stroke", color);
                shape.setAttribute("stroke-width", "2");
                shape.setAttribute("class", "fade-in");
                shapesLayer.appendChild(shape);
            }
        }

        function step() {
            const activeBranches = branches.filter(b => b.active);
            if (activeBranches.length === 0) return;

            let newBranches = [];

            activeBranches.forEach(b => {
                b.update();

                // Branching Logic
                // 1. Must have remaining steps
                // 2. Chance check
                // 3. Lower chance if far from center (sick branches split less)
                if (b.active && b.remainingSteps > 1) {
                    const deviation = Math.abs(b.y - centerY) / (height/2);
                    let chance = CONFIG.baseBranchProb;
                    
                    // Reduce branching in chaotic zones to prevent mess
                    if (deviation > 0.4) chance *= 0.4;

                    if (Math.random() < chance) {
                        // Determine direction: usually away from current trajectory or random
                        const dir = Math.random() > 0.5 ? 1 : -1;
                        // Angle: ~35 degrees
                        const splitAngle = dir * (Math.PI / 5); 
                        
                        const child = new Branch(b.x, b.y, b.angle + splitAngle, b.depth + 1, b.color);
                        newBranches.push(child);
                    }
                }
            });

            branches = branches.concat(newBranches);
            
            // Loop
            animationTimer = setTimeout(step, CONFIG.speed);
        }

        function init() {
            // Reset
            clearTimeout(animationTimer);
            pathsLayer.innerHTML = '';
            shapesLayer.innerHTML = '';
            width = window.innerWidth;
            height = window.innerHeight;
            centerY = height / 2;
            branches = [];

            // Initial Trunk
            const root = new Branch(40, centerY, 0, 0, null);
            // Ensure root goes all the way
            root.remainingSteps = Math.ceil(width / CONFIG.stepX) + 2; 
            branches.push(root);
            
            // Draw start node
            root.drawShape(40, centerY, root.color);

            step();
        }

        window.addEventListener('resize', () => {
            clearTimeout(window.resizeTimer);
            window.resizeTimer = setTimeout(init, 500);
        });

        // Start
        init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 w-full p-8 flex flex-col md:flex-row justify-between items-start pointer-events-none z-20 gap-6">
<div>
<h1 className="text-white/90 font-semibold text-xl tracking-tight mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400 stroke-[1.5]" data-lucide="network"></i>
                Latent Rollout
            </h1>
<p className="text-white/40 text-xs font-medium max-w-sm leading-relaxed">
                Visualizing probabilistic state transitions. <br/>
                Central <span className="text-emerald-400">green trajectories</span> maintain coherence, while diverging <span className="text-rose-400">red branches</span> indicate degradation.
            </p>
</div>

<div className="flex flex-col gap-3 bg-neutral-900/80 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-2xl min-w-[200px]">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500 stroke-[1.5]" data-lucide="circle-dot"></i>
<span className="text-xs text-neutral-300 font-medium">Initialization</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-emerald-500 stroke-[1.5]" data-lucide="activity"></i>
<span className="text-xs text-neutral-300 font-medium">Optimal State</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-amber-500 stroke-[1.5]" data-lucide="git-branch"></i>
<span className="text-xs text-neutral-300 font-medium">Deviation</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-rose-500 stroke-[1.5]" data-lucide="x-octagon"></i>
<span className="text-xs text-neutral-300 font-medium">Terminal / Sick</span>
</div>
</div>
</div>

<div className="relative w-full h-full" id="canvas-container">
<svg className="w-full h-full" id="rollout-svg" preserveaspectratio="xMidYMid slice">
<defs>

<filter height="200%" id="neon-glow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<g filter="url(#neon-glow)" id="paths-layer"></g>
<g filter="url(#neon-glow)" id="shapes-layer"></g>
</svg>
</div>


    </>
  );
}
