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
        const y = (Math.sin(delta + (pos * offset)) * (this.range/2 + this.range/2 * pos)) + height * 0.7;
        
        ctx.globalAlpha = 0.15 + (0.4 * (1 - pos));
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
      
<div className="relative min-h-screen">
<div className="animation-container">
<canvas id="animationCanvas"></canvas>
</div>
<section className="relative z-10 py-20 px-6">
<div className="container mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4">What Our <span className="gradient-text">Customers</span> Say</h2>
<p className="text-white/70 max-w-2xl mx-auto text-lg">Discover how our platform has helped businesses across industries transform their digital operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full relative">
<div className="quote-mark">"</div>
<div className="relative z-10">
<p className="text-white/90 mb-6 italic">"We've seen a 40% increase in team productivity since implementing this platform. The real-time collaboration features have transformed how our distributed team works together."</p>
<div className="flex items-center">
<img alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/45.jpg"/>
<div>
<h4 className="font-semibold">Sarah Johnson</h4>
<p className="text-white/60 text-sm">CTO at TechForward</p>
</div>
</div>
<div className="flex mt-4">
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
</div>

<div className="testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full relative">
<div className="quote-mark">"</div>
<div className="relative z-10">
<p className="text-white/90 mb-6 italic">"The analytics capabilities have given us insights we never had before. We've been able to identify bottlenecks and optimize our processes in ways that directly impact our bottom line."</p>
<div className="flex items-center">
<img alt="David Chen" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<h4 className="font-semibold">David Chen</h4>
<p className="text-white/60 text-sm">Operations Director at GrowthScale</p>
</div>
</div>
<div className="flex mt-4">
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
</div>

<div className="testimonial-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full relative">
<div className="quote-mark">"</div>
<div className="relative z-10">
<p className="text-white/90 mb-6 italic">"Security was our top concern when choosing a platform. The enterprise-grade protection and compliance features gave us the confidence to move our sensitive operations to the cloud."</p>
<div className="flex items-center">
<img alt="Maya Patel" className="w-12 h-12 rounded-full mr-4" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<h4 className="font-semibold">Maya Patel</h4>
<p className="text-white/60 text-sm">Security Lead at SecureFinance</p>
</div>
</div>
<div className="flex mt-4">
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
<div className="text-center md:text-left">
<p className="text-xl font-semibold mb-2">Ready to transform your digital experience?</p>
<p className="text-white/70">Join thousands of satisfied customers today.</p>
</div>
<a className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors" href="#">
            Start Your Free Trial
          </a>
</div>
</div>
</section>
</div>


    </>
  );
}
