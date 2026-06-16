import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const width = canvas.width;
    const height = canvas.height;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    
    const lineCount = 40;
    const color = '#FF694B';
    const offset = Math.PI * 3.5;
    
    ctx.shadowBlur = 10;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    
    function Line(pos) { this.pos = pos; }
    
    Line.prototype = {
      constructor: Line,
      pos: 0,
      width: width * 0.8,
      height: 4,
      range: height * 0.4,
      
      render: function(ctx, delta) {
        const pos = this.pos;
        const minWidth = (this.width * 0.25);
        const lineWidth = minWidth + (this.width * 0.75 * pos);
        const lineHeight = Math.cos(delta + (pos * offset)) * this.height;
        const x = (width - minWidth) * (1 - pos);
        const y = (Math.sin(delta + (pos * offset)) * (this.range/2 + this.range/2 * pos)) + height * 0.6;
        
        ctx.globalAlpha = 0.2 + (0.5 * (1 - pos));
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
      wave += 0.01;
      ctx.clearRect(0, 0, width, height);
      lines.forEach(function(line) { line.render(ctx, wave); });
    }
    
    render();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen flex flex-col">
<div className="animation-container">
<canvas id="animationCanvas"></canvas>
</div>
<header className="py-6 px-8 relative z-10">
<div className="container mx-auto flex justify-between items-center">
<div className="flex items-center">
<svg className="h-8 w-8 text-orange-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span className="ml-3 text-xl font-bold text-white">Pulse</span>
</div>
<nav className="hidden md:flex space-x-8 text-sm">
<a className="text-white/80 hover:text-white transition-colors" href="#">Features</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">About</a>
</nav>
<div className="flex items-center space-x-4">
<a className="text-white/80 hover:text-white transition-colors" href="#">Sign in</a>
<a className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors" href="#">
            Get Started
          </a>
</div>
</div>
</header>
<main className="flex-grow flex items-center">
<div className="container mx-auto px-8 py-12 hero-content">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Accelerate Your <span className="gradient-text">Digital Experience</span>
</h1>
<p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Transform your workflow with our intuitive platform designed for the modern digital landscape. Build, deploy, and scale with confidence.
          </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
<a className="glow-button bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors" href="#">
              Start Free Trial
            </a>
<a className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors" href="#">
              Watch Demo
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
<div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
<div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
<p className="text-white/70">Experience unparalleled speed with our optimized infrastructure.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
<div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Secure by Design</h3>
<p className="text-white/70">Enterprise-grade security with end-to-end encryption.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
<div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
<svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Actionable Insights</h3>
<p className="text-white/70">Real-time analytics to help you make data-driven decisions.</p>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
