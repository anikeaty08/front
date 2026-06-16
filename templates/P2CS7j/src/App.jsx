import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');
    const card = document.querySelector('.card-container');
    
    function resizeCanvas() {
      canvas.width = card.offsetWidth;
      canvas.height = card.offsetHeight;
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
      width: halfWidth,
      height: 4,
      range: halfHeight * 0.9,
      
      render: function(ctx, delta) {
        const pos = this.pos;
        const minWidth = (this.width * 0.25);
        const lineWidth = minWidth + (this.width * 0.75 * pos);
        const lineHeight = Math.cos(delta + (pos * offset)) * this.height;
        const x = (width - minWidth) * (1 - pos);
        const y = (Math.sin(delta + (pos * offset)) * (this.range/2 + this.range/2 * pos)) + halfHeight;
        
        ctx.globalAlpha = 0.3 + (0.65 * (1 - pos));
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
  }, []);

  return (
    <>
      
<div className="card-container rounded-xl shadow-2xl border border-white/10">
<canvas id="animationCanvas"></canvas>
<div className="card-content p-8 text-white">
<h2 className="text-2xl font-semibold mb-4">Digital Experience</h2>
<p className="text-white/80 mb-6">Transform your workflow with our intuitive platform designed for the modern digital landscape.</p>
<div className="flex items-center space-x-4">
<button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors">
          Get Started
        </button>
<a className="text-orange-300 hover:text-orange-200 transition-colors" href="#">Learn more →</a>
</div>
<div className="border-t border-white/10 mt-6 pt-4">
<div className="flex justify-between text-white/70">
<span>Updated today</span>
<span>v2.0.4</span>
</div>
</div>
</div>
</div>


    </>
  );
}
