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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full" id="visualizer"></canvas>

<div className="fixed inset-0 flex items-center justify-center p-4 z-10">
<div className="w-full relative max-w-xs">

<div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float">

<div className="p-4 flex justify-center relative">
<div className="w-full h-48 rounded-xl gradient-border inner-glow overflow-hidden relative">

<div className="absolute inset-0 opacity-10">
<div className="w-full h-full animate-pulse" style={{backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: `15px 15px`}}></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 180">
<defs>
<lineargradient id="connectionGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: `#4f46e5`, stopOpacity: `0.8`}}></stop>
<stop offset="50%" style={{stopColor: `#3b82f6`, stopOpacity: `1`}}></stop>
<stop offset="100%" style={{stopColor: `#8b5cf6`, stopOpacity: `0.8`}}></stop>
</lineargradient>
</defs>
<g fill="none" stroke="url(#connectionGradient)" strokeWidth="1.5">

<path className="connector" d="M80,60 L140,60 L140,90 L200,90"></path>
<path className="connector" d="M200,90 L240,90 L240,60 L280,60"></path>
<path className="connector" d="M140,90 L140,120 L200,120"></path>
<path className="connector" d="M200,120 L240,120 L240,150 L200,150"></path>

<circle cx="80" cy="60" fill="#4f46e5" r="3"></circle>
<circle cx="200" cy="90" fill="#3b82f6" r="3"></circle>
<circle cx="280" cy="60" fill="#8b5cf6" r="3"></circle>
<circle cx="200" cy="120" fill="#f59e0b" r="3"></circle>
<circle cx="200" cy="150" fill="#ef4444" r="3"></circle>
</g>
</svg>

<div className="absolute inset-0 w-full h-full">

<div className="absolute top-3 left-1/2 transform -translate-x-1/2 animate-schema-pulse">
<div className="w-8 h-8 glass rounded-xl flex items-center justify-center border border-indigo-400/30 inner-glow">
<svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
</svg>
</div>
</div>

<div className="absolute left-3 top-12 table-float">
<div className="w-16 h-12 glass rounded-lg gradient-border shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-white text-[7px] px-1.5 py-0.5 font-medium border-b border-white/10">users</div>
<div className="px-1.5 py-0.5 space-y-0.5">
<div className="flex items-center space-x-0.5">
<div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
<div className="h-0.5 w-6 bg-white/30 rounded"></div>
</div>
<div className="h-0.5 w-4 bg-white/20 rounded"></div>
<div className="h-0.5 w-7 bg-white/20 rounded"></div>
</div>
</div>
</div>
<div className="absolute right-3 top-12 table-float">
<div className="w-16 h-12 glass rounded-lg gradient-border shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white text-[7px] px-1.5 py-0.5 font-medium border-b border-white/10">orders</div>
<div className="px-1.5 py-0.5 space-y-0.5">
<div className="flex items-center space-x-0.5">
<div className="w-1 h-1 bg-blue-400 rounded-full"></div>
<div className="h-0.5 w-6 bg-white/30 rounded"></div>
</div>
<div className="h-0.5 w-3 bg-white/20 rounded"></div>
<div className="h-0.5 w-5 bg-white/20 rounded"></div>
</div>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 top-24 table-float">
<div className="w-16 h-12 glass rounded-lg gradient-border shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white text-[7px] px-1.5 py-0.5 font-medium border-b border-white/10">products</div>
<div className="px-1.5 py-0.5 space-y-0.5">
<div className="flex items-center space-x-0.5">
<div className="w-1 h-1 bg-purple-400 rounded-full"></div>
<div className="h-0.5 w-6 bg-white/30 rounded"></div>
</div>
<div className="h-0.5 w-6 bg-white/20 rounded"></div>
<div className="h-0.5 w-4 bg-white/20 rounded"></div>
</div>
</div>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 table-float">
<div className="w-16 h-12 glass rounded-lg gradient-border shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white text-[7px] px-1.5 py-0.5 font-medium border-b border-white/10">analytics</div>
<div className="px-1.5 py-0.5 space-y-0.5">
<div className="flex items-center space-x-0.5">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<div className="h-0.5 w-6 bg-white/30 rounded"></div>
</div>
<div className="h-0.5 w-3 bg-white/20 rounded"></div>
<div className="h-0.5 w-5 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

<div className="p-4">
<span className="inline-block px-3 py-1 glass text-indigo-300 rounded-full text-xs font-medium mb-3 border border-indigo-400/30">Database</span>
<h3 className="text-lg font-medium text-white mb-2">Schema Management</h3>
<p className="text-white/70 mb-4 leading-relaxed text-xs">
            Design, optimize and maintain your database structure with powerful schema tools.
          </p>
<div className="flex justify-between items-center">
<a className="text-indigo-400 hover:text-indigo-300 transition flex items-center text-xs font-medium glass px-3 py-1.5 rounded-lg border border-indigo-400/30" href="#">
              Manage
              <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<span className="text-white/50 text-xs glass px-2 py-1 rounded-full border border-white/10">Live</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
