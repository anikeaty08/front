import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        class DotGrid {
            constructor(canvas, options = {}) {
                this.canvas = canvas;
                this.ctx = canvas.getContext('2d');
                this.dots = [];
                this.pointer = { x: 0, y: 0, vx: 0, vy: 0, speed: 0, lastTime: 0, lastX: 0, lastY: 0 };
                
                this.options = {
                    dotSize: 2,
                    gap: 20,
                    baseColor: '#333333',
                    activeColor: '#ffffff',
                    proximity: 120,
                    speedTrigger: 100,
                    ...options
                };

                this.init();
                this.bindEvents();
                this.animate();
            }

            init() {
                this.resize();
                this.buildGrid();
            }

            resize() {
                const rect = this.canvas.parentElement.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;
                
                this.canvas.width = rect.width * dpr;
                this.canvas.height = rect.height * dpr;
                this.canvas.style.width = rect.width + 'px';
                this.canvas.style.height = rect.height + 'px';
                
                this.ctx.scale(dpr, dpr);
                this.width = rect.width;
                this.height = rect.height;
            }

            buildGrid() {
                const { dotSize, gap } = this.options;
                const cell = dotSize + gap;
                
                const cols = Math.floor((this.width + gap) / cell);
                const rows = Math.floor((this.height + gap) / cell);
                
                const gridW = cell * cols - gap;
                const gridH = cell * rows - gap;
                
                const startX = (this.width - gridW) / 2 + dotSize / 2;
                const startY = (this.height - gridH) / 2 + dotSize / 2;
                
                this.dots = [];
                for (let y = 0; y < rows; y++) {
                    for (let x = 0; x < cols; x++) {
                        const cx = startX + x * cell;
                        const cy = startY + y * cell;
                        this.dots.push({ 
                            cx, cy, 
                            xOffset: 0, 
                            yOffset: 0,
                            targetX: 0,
                            targetY: 0,
                            animating: false
                        });
                    }
                }
            }

            hexToRgb(hex) {
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }

            animate() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                
                const { proximity, baseColor, activeColor, dotSize } = this.options;
                const { x: px, y: py } = this.pointer;
                const proxSq = proximity * proximity;
                
                const baseRgb = this.hexToRgb(baseColor);
                const activeRgb = this.hexToRgb(activeColor);
                
                for (const dot of this.dots) {
                    // Update animation
                    if (dot.animating) {
                        dot.xOffset += (dot.targetX - dot.xOffset) * 0.1;
                        dot.yOffset += (dot.targetY - dot.yOffset) * 0.1;
                        
                        if (Math.abs(dot.targetX - dot.xOffset) < 0.1 && Math.abs(dot.targetY - dot.yOffset) < 0.1) {
                            dot.animating = false;
                            dot.xOffset = dot.targetX;
                            dot.yOffset = dot.targetY;
                        }
                    }
                    
                    const ox = dot.cx + dot.xOffset;
                    const oy = dot.cy + dot.yOffset;
                    const dx = dot.cx - px;
                    const dy = dot.cy - py;
                    const dsq = dx * dx + dy * dy;
                    
                    let color = baseColor;
                    if (dsq <= proxSq && baseRgb && activeRgb) {
                        const dist = Math.sqrt(dsq);
                        const t = 1 - dist / proximity;
                        const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                        const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                        const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                        color = `rgb(${r},${g},${b})`;
                    }
                    
                    this.ctx.fillStyle = color;
                    this.ctx.beginPath();
                    this.ctx.arc(ox, oy, dotSize / 2, 0, Math.PI * 2);
                    this.ctx.fill();
                }
                
                requestAnimationFrame(() => this.animate());
            }

            bindEvents() {
                const handleMove = (e) => {
                    const rect = this.canvas.getBoundingClientRect();
                    const now = performance.now();
                    const pr = this.pointer;
                    
                    const newX = e.clientX - rect.left;
                    const newY = e.clientY - rect.top;
                    
                    if (pr.lastTime) {
                        const dt = now - pr.lastTime;
                        const dx = newX - pr.lastX;
                        const dy = newY - pr.lastY;
                        pr.vx = (dx / dt) * 1000;
                        pr.vy = (dy / dt) * 1000;
                        pr.speed = Math.hypot(pr.vx, pr.vy);
                    }
                    
                    pr.x = newX;
                    pr.y = newY;
                    pr.lastX = newX;
                    pr.lastY = newY;
                    pr.lastTime = now;
                };

                const handleClick = (e) => {
                    const rect = this.canvas.getBoundingClientRect();
                    const cx = e.clientX - rect.left;
                    const cy = e.clientY - rect.top;
                    
                    for (const dot of this.dots) {
                        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                        if (dist < 200) {
                            const falloff = Math.max(0, 1 - dist / 200);
                            const pushX = (dot.cx - cx) * 3 * falloff;
                            const pushY = (dot.cy - cy) * 3 * falloff;
                            
                            dot.targetX = pushX;
                            dot.targetY = pushY;
                            dot.animating = true;
                            
                            setTimeout(() => {
                                dot.targetX = 0;
                                dot.targetY = 0;
                                dot.animating = true;
                            }, 300);
                        }
                    }
                };

                window.addEventListener('mousemove', handleMove, { passive: true });
                window.addEventListener('click', handleClick);
                window.addEventListener('resize', () => {
                    this.resize();
                    this.buildGrid();
                });
            }
        }

        // Initialize dot grid
        const canvas = document.getElementById('dotCanvas');
        new DotGrid(canvas);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="dot-grid">
<div className="dot-grid__wrap">
<canvas className="dot-grid__canvas" height="2104" id="dotCanvas" style={{width: '1296px', height: '1052px'}} width="2592"></canvas>
</div>
</section>
<div className="glass-card rounded-3xl p-8 w-full max-w-md relative z-10">

<div className="text-center mb-8">
<div className="logo-glass inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6">
<svg className="lucide lucide-wand-sparkles lucide-wand lucide-credit-card lucide-image w-[28px] h-[28px]" data-lucide="wand-sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h1 className="text-3xl font-semibold text-white mb-3">Welcome back</h1>
<p className="text-muted text-sm">Sign in to your Linear account</p>
</div>

<form className="space-y-5 mb-6">
<div className="">
<label className="block text-sm font-medium text-white mb-2" htmlFor="email">Email</label>
<input className="input-glass w-full px-4 py-3 rounded-xl text-sm placeholder-gray-400 text-white" id="email" placeholder="Enter your email" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-white mb-2" htmlFor="password">Password</label>
<input className="input-glass w-full px-4 py-3 rounded-xl text-sm placeholder-gray-400 text-white" id="password" placeholder="Enter your password" required="" type="password"/>
</div>
<div className="flex items-center justify-between text-sm">
<label className="flex items-center cursor-pointer">
<input className="checkbox-glass w-4 h-4 rounded focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="ml-2 text-muted">Remember me</span>
</label>
<a className="text-white hover:text-gray-300 transition-colors font-medium" href="#">Forgot password?</a>
</div>
<button className="btn-primary-glass w-full py-3 px-4 rounded-xl text-white font-semibold text-sm" type="submit">
                Continue
            </button>
</form>

<div className="relative mb-6">
<div className="divider"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="px-4 text-subtle text-xs font-medium">OR</span>
</div>
</div>

<button className="btn-glass w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white mb-6">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#ffffff"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#ffffff"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#ffffff"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ffffff"></path>
</svg>
            Continue with Google
        </button>

<div className="space-y-4">
<div className="flex items-center justify-center gap-4">
<span className="feature-glass px-4 py-2 rounded-full text-xs font-medium text-white">
                    Enterprise SSO
                </span>
<span className="feature-glass px-4 py-2 rounded-full text-xs font-medium text-white">
                    2FA Protected
                </span>
</div>
<div className="text-center">
<p className="text-sm text-muted">
                    Don't have an account? 
                    <a className="text-white hover:text-gray-300 transition-colors font-semibold ml-1" href="#">Create account</a>
</p>
</div>
</div>
</div>


    </>
  );
}
