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



    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');
    const container = document.querySelector('.animation-container');
    
    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const width = canvas.width;
    const height = canvas.height;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    
    const lineCount = 40;
    const color = '#FFFFFF';
    const offset = Math.PI * 3.5;
    
    ctx.shadowBlur = 5;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    
    function Line(pos) { this.pos = pos; }
    
    Line.prototype = {
      constructor: Line,
      pos: 0,
      width: halfWidth,
      height: 2,
      range: halfHeight * 0.9,
      
      render: function(ctx, delta) {
        const pos = this.pos;
        const minWidth = (this.width * 0.25);
        const lineWidth = minWidth + (this.width * 0.75 * pos);
        const lineHeight = Math.cos(delta + (pos * offset)) * this.height;
        const x = (width - minWidth) * (1 - pos);
        const y = (Math.sin(delta + (pos * offset)) * (this.range/2 + this.range/2 * pos)) + halfHeight;
        
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.rect(x, y, lineWidth, lineHeight);
        ctx.closePath();
        ctx.fill();
      }
    };
    
    const lines = [];
    
    for (let i = 0; i < lineCount; i++) {
      lines.push(new Line(i / lineCount));
    }
    
    let wave = 0;
    function render() {
      requestAnimationFrame(render);
      wave += 0.02;
      ctx.clearRect(0, 0, width, height);
      lines.forEach(function(line) { line.render(ctx, wave); });
    }
    
    render();
  
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
      
<div className="max-w-5xl w-full mx-auto rounded-xl shadow-2xl overflow-hidden">
<div className="flex flex-col md:flex-row">

<div className="animation-container w-full md:w-1/2 h-64 md:h-auto bg-[#2b2640] p-8 relative flex flex-col justify-between">
<canvas id="animationCanvas"></canvas>
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-indigo-500/20 rounded-full text-indigo-300 text-xs mb-4">DIGITAL PLATFORM</div>
<h3 className="text-xl font-semibold text-white mb-2">Streamline Your Workflow</h3>
<p className="text-white/70 text-sm">Powerful tools for modern teams</p>
</div>

<div className="relative z-10 mt-auto">
<div className="grid grid-cols-4 gap-2 border-t border-white/10 pt-4 mt-4">
<div className="text-center">
<div className="text-lg font-light text-white">99.9%</div>
<div className="text-xs text-white/60">Uptime</div>
</div>
<div className="text-center">
<div className="text-lg font-light text-white">24/7</div>
<div className="text-xs text-white/60">Support</div>
</div>
<div className="text-center">
<div className="text-lg font-light text-white">500+</div>
<div className="text-xs text-white/60">Integrations</div>
</div>
<div className="text-center">
<div className="text-lg font-light text-white">15k+</div>
<div className="text-xs text-white/60">Users</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 bg-[#1f1c31] p-8 text-white">
<div className="flex items-center mb-6">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h2 className="text-2xl font-semibold ml-3">Digital Experience</h2>
</div>
<p className="text-white/80 mb-6">Transform your digital workflow with our intuitive platform designed for modern businesses and creators.</p>
<div className="space-y-4 mb-6">
<div className="flex items-start">
<svg className="w-5 h-5 text-indigo-400 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<div className="ml-3">
<h3 className="font-medium">AI-Powered Analytics</h3>
<p className="text-sm text-white/70">Gain insights through real-time data visualization</p>
</div>
</div>
<div className="flex items-start">
<svg className="w-5 h-5 text-indigo-400 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<div className="ml-3">
<h3 className="font-medium">Seamless Integration</h3>
<p className="text-sm text-white/70">Works with your existing tools and platforms</p>
</div>
</div>
<div className="flex items-start">
<svg className="w-5 h-5 text-indigo-400 mt-0.5" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"></path>
</svg>
<div className="ml-3">
<h3 className="font-medium">Enterprise Security</h3>
<p className="text-sm text-white/70">End-to-end encryption and compliance</p>
</div>
</div>
</div>
<div className="flex items-center space-x-4 mb-6">
<button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            Get Started
          </button>
<a className="text-indigo-300 hover:text-indigo-200 transition-colors text-sm" href="#">Learn more →</a>
</div>
<div className="border-t border-white/10 pt-4">
<div className="flex justify-between text-white/70 text-sm">
<span>Version 2.0.4</span>
<span>Updated: May 2023</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
