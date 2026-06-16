import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { geist: ['Geist', 'sans-serif'] },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'data-stream': 'dataStream 3s linear infinite',
            'schema-pulse': 'schemaPulse 4s ease-in-out infinite',
          },
          keyframes: {
            float: { 
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' }
            },
            dataStream: {
              '0%': { strokeDashoffset: 20 },
              '100%': { strokeDashoffset: 0 }
            },
            schemaPulse: {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
              '50%': { transform: 'scale(1.02)', opacity: 1 }
            }
          }
        }
      }
    }
  


    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');
    let time = 0;
    let waveData = Array(8).fill(0).map(() => ({
        value: Math.random() * 0.5 + 0.1,
        targetValue: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.02 + 0.01
    }));
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function updateWaveData() {
        waveData.forEach(data => {
            if (Math.random() < 0.01) {
                data.targetValue = Math.random() * 0.7 + 0.1;
            }
            const diff = data.targetValue - data.value;
            data.value += diff * data.speed;
        });
    }
    
    function draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < 8; i++) {
            const freq = waveData[i].value * 7.0;
            ctx.beginPath();
            
            for (let x = 0; x < canvas.width; x += 1) {
                const normalizedX = (x / canvas.width) * 2 - 1;
                let px = normalizedX + i * 0.04 + freq * 0.03;
                let py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
                const canvasY = (py + 1) * canvas.height / 2;
                
                if (x === 0) {
                    ctx.moveTo(x, canvasY);
                } else {
                    ctx.lineTo(x, canvasY);
                }
            }
            
            const intensity = Math.min(1, freq * 0.3);
            const r = 79 + intensity * 100;
            const g = 70 + intensity * 130;
            const b = 229;
            
            ctx.lineWidth = 1 + (i * 0.3);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
            ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
            ctx.shadowBlur = 5;
            ctx.stroke();
            ctx.shadowBlur = 0;
        }
    }
    
    function animate() {
        time += 0.02;
        updateWaveData();
        draw();
        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full" height="1052" id="visualizer" width="1113"></canvas>

<div className="fixed inset-0 flex items-center justify-center z-10 pt-4 pr-4 pb-4 pl-4">
<div className="w-full relative max-w-4xl">
<div className="relative card-border overflow-hidden rounded-2xl flex animate-float">

<div className="w-1/2 flex flex-col justify-center items-center relative pt-8 pr-8 pb-8 pl-8">

<div className="w-full h-64 rounded-xl gradient-border inner-glow overflow-hidden relative mb-6">

<div className="absolute inset-0 opacity-10">
<div className="w-full h-full animate-pulse" style={{backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 400 250">
<defs>
<lineargradient id="connectionGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: '0.8'}}></stop>
<stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: '0.8'}}></stop>
</lineargradient>
</defs>
<g fill="none" stroke="url(#connectionGradient)" strokeWidth="2">
<path className="connector" d="M200,125 L120,80 M200,125 L280,80 M200,125 L120,170 M200,125 L280,170"></path>
<circle cx="200" cy="125" fill="#3b82f6" r="4"></circle>
<circle cx="120" cy="80" fill="#4f46e5" r="3"></circle>
<circle cx="280" cy="80" fill="#8b5cf6" r="3"></circle>
<circle cx="120" cy="170" fill="#f59e0b" r="3"></circle>
<circle cx="280" cy="170" fill="#ef4444" r="3"></circle>
</g>
</svg>

<div className="absolute top-8 left-8 icon-float">
<div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-indigo-400/30 inner-glow">
<svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewbox="0 0 20 20">
</svg>
</div>
</div>
<div className="absolute top-8 right-8 icon-float">
<div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-purple-400/30 inner-glow">
<svg className="w-6 h-6 text-purple-400" fill="currentColor" viewbox="0 0 20 20">
</svg>
</div>
</div>
<div className="absolute bottom-8 left-8 icon-float">
<div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-orange-400/30 inner-glow">
<svg className="w-6 h-6 text-orange-400" fill="currentColor" viewbox="0 0 20 20">
</svg>
</div>
</div>
<div className="absolute bottom-8 right-8 icon-float">
<div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-blue-400/30 inner-glow">
<svg className="w-6 h-6 text-blue-400" fill="currentColor" viewbox="0 0 20 20">
</svg>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-schema-pulse">
<div className="w-16 h-16 glass flex items-center justify-center inner-glow border-blue-400/50 border rounded-2xl relative right-8 bottom-8">
<div className="text-2xl font-bold text-white">S</div>
</div>
</div>
</div>

<div className="text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Join our platform</h2>
<p className="text-white/70 text-sm">Connect with powerful tools and features designed for modern workflows.</p>
</div>
</div>

<div className="w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>

<div className="w-1/2 p-8 flex flex-col justify-center">
<div className="max-w-sm mx-auto w-full">
<span className="inline-block px-3 py-1 glass text-indigo-300 rounded-full text-xs font-medium mb-6 border border-indigo-400/30">Get Started</span>
<h3 className="text-xl font-medium text-white mb-6">Create Account</h3>
<form className="space-y-4">
<div className="">
<label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
<input className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none transition" placeholder="Enter your name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-white/80 mb-2">Email</label>
<input className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none transition" placeholder="you@example.com" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-white/80 mb-2">Password</label>
<input className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none transition" placeholder="Create password" type="password"/>
</div>
<button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition duration-200 transform hover:scale-[1.02] shadow-lg" type="submit">
                Sign Up
              </button>
</form>
<div className="mt-6 text-center">
<p className="text-white/60 text-sm">
                Already have an account? 
                <a className="text-indigo-400 hover:text-indigo-300 transition" href="#">Sign in</a>
</p>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
