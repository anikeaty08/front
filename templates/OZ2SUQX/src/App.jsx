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



        const canvas = document.getElementById('shader-bg');
        const ctx = canvas.getContext('2d');
        let w = window.innerWidth, h = window.innerHeight;
        function resize() {
            w = window.innerWidth; h = window.innerHeight;
            canvas.width = w; canvas.height = h;
        }
        resize();
        window.addEventListener('resize', resize);

        function f(x, y, t) {
            return Math.sin(x + Math.sin(y + t * 0.1)) * Math.sin(y * x * 0.1 + t * 0.2);
        }

        function drawVectorField(t) {
            ctx.clearRect(0, 0, w, h);
            const scale = 6;
            const density = 52; // grid lines

            for (let i = 0; i < density; i++) {
                for (let j = 0; j < density; j++) {
                    let px = i / density - 0.5, py = j / density - 0.5;
                    px *= w / h;
                    px *= scale; py *= scale;
                    let ep = 0.05;
                    let t0 = f(px, py, t);
                    let t1 = f(px + ep, py, t);
                    let t2 = f(px, py + ep, t);
                    let gx = (t1 - t0) / ep, gy = (t2 - t0) / ep;
                    let vx = -gy, vy = gx;
                    let len = Math.sqrt(vx * vx + vy * vy) + 0.01;
                    vx /= len; vy /= len;
                    let m = Math.min(0.1, Math.pow(len, 0.5) * (0.45 / density));
                    vx *= m * h; vy *= m * h;
                    const r = Math.floor(180 + 70 * vx);
                    const g = Math.floor(140 + 90 * vy);
                    const b = 210;
                    ctx.strokeStyle = `rgba(${r},${g},${b},0.85)`;
                    ctx.beginPath();
                    let cx = (i + 0.5) * w / density,
                        cy = (j + 0.5) * h / density;
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(cx + vx, cy + vy);
                    ctx.stroke();
                    let angle = Math.atan2(vy, vx);
                    ctx.beginPath();
                    ctx.moveTo(cx + vx, cy + vy);
                    ctx.lineTo(cx + vx - 3 * Math.cos(angle - Math.PI/6), cy + vy - 3 * Math.sin(angle - Math.PI/6));
                    ctx.moveTo(cx + vx, cy + vy);
                    ctx.lineTo(cx + vx - 3 * Math.cos(angle + Math.PI/6), cy + vy - 3 * Math.sin(angle + Math.PI/6));
                    ctx.stroke();
                }
            }
        }

        function animate() {
            const now = performance.now() / 1000;
            drawVectorField(now);
            requestAnimationFrame(animate);
        }

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
      
<canvas id="shader-bg"></canvas>
<div className="content-container">
<div className="w-full max-w-5xl">
<div className="gradient-border">
<div className="gradient-border-inner flex overflow-hidden">

<div className="w-1/2 relative">

<div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-emerald-500"></div>
<div className="px-6 py-4 section-bg relative">
<div className="absolute bottom-0 left-0 right-0 section-border"></div>
<h2 className="text-sm font-medium text-gray-300">Get started</h2>
</div>
<div className="space-y-6 card-bg p-6 pb-24">

<div className="p-4 stat-bg rounded-lg border border-gray-700/50">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white">Setup progress</h3>
<span className="text-xs text-cyan-400 font-medium">2 of 5 complete</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-2 mb-4">
<div className="progress-gradient h-2 rounded-full" style={{width: '40%'}}></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-sm text-white">Create your workspace</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 flex items-center justify-center">
<svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-sm text-white">Set up your profile</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
<span className="text-sm text-gray-400">Invite team members</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
<span className="text-sm text-gray-400">Create your first project</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
<span className="text-sm text-gray-400">Set up integrations</span>
</div>
</div>
</div>

<div className="p-4 stat-bg rounded-lg border border-gray-700/50">
<h3 className="text-sm font-medium text-white mb-3">Invite teammates</h3>
<div className="flex gap-2">
<input className="flex-1 h-8 px-3 rounded-md input-bg border border-gray-600 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors" placeholder="colleague@company.com" type="email"/>
<button className="h-8 px-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white text-sm font-medium rounded-md transition-all">
                                        Send
                                    </button>
</div>
<p className="text-xs text-gray-400 mt-2">Collaborate faster with your team</p>
</div>

<div className="p-4 stat-bg rounded-lg border border-gray-700/50">
<h3 className="text-sm font-medium text-white mb-3">Quick actions</h3>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50 rounded-md transition-colors border border-transparent hover:border-violet-500/30">
<svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                        Create new project
                                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50 rounded-md transition-colors border border-transparent hover:border-cyan-500/30">
<svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                        Import from GitHub
                                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50 rounded-md transition-colors border border-transparent hover:border-emerald-500/30">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                                        Configure settings
                                    </button>
</div>
</div>
</div>
<div className="section-bg relative bg-[transparent] px-6 py-4">
<div className="absolute top-0 left-0 right-0 section-border"></div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-white">Welcome to Aura</p>
<p className="text-xs text-gray-400">Let's build something great together</p>
</div>
<button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white text-sm font-medium rounded-md transition-all">
                                    Continue setup
                                </button>
</div>
</div>
</div>

<div className="w-1/2">
<div className="px-6 py-4 section-bg relative">
<div className="absolute bottom-0 left-0 right-0 section-border"></div>
<h2 className="text-sm font-medium text-gray-300">Your workspace</h2>
</div>
<div className="space-y-6 px-6 py-6 h-full" style={{background: 'rgba(13, 15, 20, 0.9)', backdropFilter: 'blur(10px)'}}>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 stat-bg rounded-lg border border-emerald-500/30">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-emerald-400 uppercase tracking-wide font-medium">Active Issues</span>
</div>
<div className="text-2xl font-bold text-white">247</div>
</div>
<div className="p-4 stat-bg rounded-lg border border-violet-500/30">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-violet-500"></div>
<span className="text-xs text-violet-400 uppercase tracking-wide font-medium">In Progress</span>
</div>
<div className="text-2xl font-bold text-white">18</div>
</div>
</div>

<div className="p-4 stat-bg rounded-lg border border-gray-700/50">
<h3 className="text-sm font-medium text-white mb-3">Recent issues</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 input-bg rounded-lg border border-red-500/20">
<div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white truncate">Fix authentication bug in login flow</p>
<p className="text-xs text-red-400">HIGH-247 • Engineering</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 input-bg rounded-lg border border-orange-500/20">
<div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white truncate">Update user dashboard design</p>
<p className="text-xs text-orange-400">MED-183 • Design</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 input-bg rounded-lg border border-blue-500/20">
<div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white truncate">Implement search functionality</p>
<p className="text-xs text-blue-400">LOW-156 • Engineering</p>
</div>
</div>
</div>
</div>

<div className="p-4 stat-bg rounded-lg border border-gray-700/50">
<h3 className="text-sm font-medium text-white mb-3">Team members</h3>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white text-sm font-medium border border-violet-400/30">
                                        A
                                    </div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-sm font-medium border border-cyan-400/30">
                                        S
                                    </div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-sm font-medium border border-emerald-400/30">
                                        M
                                    </div>
<button className="w-8 h-8 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center text-gray-400 hover:border-violet-500 hover:text-violet-500 transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="p-4 stat-bg rounded-lg border border-gray-700/50">
<h3 className="text-sm font-medium text-white mb-3">Activity this week</h3>
<div className="flex items-end justify-between h-24 gap-1">
<div className="bg-gray-700 w-6 rounded-sm" style={{height: '20%'}}></div>
<div className="bg-gray-700 w-6 rounded-sm" style={{height: '40%'}}></div>
<div className="bg-gradient-to-t from-violet-600 to-violet-500 w-6 rounded-sm" style={{height: '85%'}}></div>
<div className="bg-gradient-to-t from-cyan-600 to-cyan-500 w-6 rounded-sm" style={{height: '100%'}}></div>
<div className="bg-gradient-to-t from-emerald-600 to-emerald-500 w-6 rounded-sm" style={{height: '60%'}}></div>
<div className="bg-gray-700 w-6 rounded-sm" style={{height: '30%'}}></div>
<div className="bg-gray-700 w-6 rounded-sm" style={{height: '15%'}}></div>
</div>
<div className="flex justify-between text-xs text-gray-400 mt-2">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
