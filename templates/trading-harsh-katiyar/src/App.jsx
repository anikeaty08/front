import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    /* 
     * Advanced Smooth Canvas Animation
     * Simulates a flowing financial chart with gradient fill
     */
    const canvas = document.getElementById('chart');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let points = [];
    const pointCount = 40; // More points for smoother curve
    const speed = 0.3;     // Drift speed
    
    // Initialize
    function init() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      points = [];
      const step = width / (pointCount - 1);
      
      for(let i = 0; i < pointCount; i++) {
        points.push({
          x: i * step,
          y: height * 0.5 + (Math.random() - 0.5) * (height * 0.4),
          targetY: height * 0.5 + (Math.random() - 0.5) * (height * 0.4),
          angle: Math.random() * Math.PI * 2
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Update points
      points.forEach((p, i) => {
        // Organic vertical movement
        p.angle += 0.01;
        p.y += Math.sin(p.angle) * 0.5;
        
        // Gentle target seeking
        p.y += (p.targetY - p.y) * 0.02;
        
        // Randomly reset target occasionally
        if(Math.random() < 0.005) {
          p.targetY = height * 0.5 + (Math.random() - 0.5) * (height * 0.4);
        }
      });

      // Gradient setup
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.0)');
      gradient.addColorStop(0.5, 'rgba(0, 229, 255, 0.05)'); // Very subtle cyan
      gradient.addColorStop(1, 'rgba(0, 229, 255, 0.0)');

      // Draw Curve
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      // Quadratic Curve for smoothness
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      
      // Connect to last point
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      
      // Styling Line
      ctx.strokeStyle = '#00e5ff';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00e5ff';
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset shadow for fill

      // Close path for fill
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);
    init();
    animate();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="chart"></canvas>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0f1a]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-[#00e5ff]" data-icon="lucide:activity" data-width="20"></span>
<span className="text-sm font-medium tracking-tight text-white uppercase">Trading Visuals</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#features">Why Us</a>
<a className="text-white bg-white/5 border border-white/10 px-4 py-1.5 rounded-full hover:bg-white/10 transition-all" href="#">Get Started</a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00e5ff] rounded-full opacity-[0.03] blur-[100px] -z-10 pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-8 animate-[fadeIn_1s_ease-out]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e5ff] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e5ff]"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-[#00e5ff]">System Operational</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 text-glow leading-[1.1]">
      Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Visuals</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-light leading-relaxed mb-10">
      Professional animation infrastructure for financial content creators. High-fidelity charting backgrounds and cinematic portfolios.
    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="group relative px-8 py-3 rounded-full bg-[#00e5ff] text-[#0b0f1a] text-sm font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]" href="#services">
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center gap-2">
          Explore Services
          <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</a>
<a className="px-8 py-3 rounded-full border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2" href="#demo">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
        Watch Reel
      </a>
</div>

<div className="mt-20 glass-card p-1 rounded-xl border border-white/10 hidden md:block opacity-60">
<div className="flex items-center gap-8 px-6 py-3">
<div className="flex flex-col items-start">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">BTC/USD</span>
<span className="text-sm font-mono text-[#00e5ff]">$48,291.02</span>
</div>
<div className="h-8 w-[1px] bg-white/10"></div>
<div className="flex flex-col items-start">
<span className="text-[10px] text-slate-500 uppercase tracking-wider">24h Vol</span>
<span className="text-sm font-mono text-white">$1.2B</span>
</div>
<div className="h-8 w-[1px] bg-white/10"></div>

<div className="flex items-center gap-3">
<span className="text-[10px] text-slate-400">Live Feed</span>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#00e5ff]/30 checked:border-[#00e5ff] transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-slate-800 cursor-pointer border border-white/10" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">What We Offer</h2>
<p className="text-slate-400 font-light max-w-sm text-sm">Elevate your brand with institutional-grade visuals designed for the modern trader.</p>
</div>
<div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent mx-8 mb-2 hidden md:block"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-card p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-[#00e5ff]">
<span className="iconify" data-icon="lucide:monitor-smartphone" data-width="48"></span>
</div>
<div className="h-10 w-10 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] mb-6 border border-[#00e5ff]/20">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Live Trading Backgrounds</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
            Real-time algorithmic visual loops. Perfect for YouTube backgrounds, streams, or website headers.
          </p>
</div>

<div className="group glass-card p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-[#00e5ff]">
<span className="iconify" data-icon="lucide:film" data-width="48"></span>
</div>
<div className="h-10 w-10 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] mb-6 border border-[#00e5ff]/20">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Cinematic Portfolio</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
            High-definition montage edits of your trading journey, styled with premium motion graphics.
          </p>
</div>

<div className="group glass-card p-8 rounded-2xl hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-[#00e5ff]">
<span className="iconify" data-icon="lucide:layout" data-width="48"></span>
</div>
<div className="h-10 w-10 rounded-full bg-[#00e5ff]/10 flex items-center justify-center text-[#00e5ff] mb-6 border border-[#00e5ff]/20">
<span className="iconify" data-icon="lucide:globe" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Brand Web Design</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
            Minimalist, high-conversion websites for trading communities, educators, and prop firms.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#0b0f1a]" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Why Choose Us</h2>
<p className="text-slate-400 font-light text-sm">Designed for performance, built for aesthetics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

<div className="bg-[#0b0f1a] p-10 flex flex-col items-center text-center group hover:bg-[#0f1422] transition-colors">
<div className="mb-4 text-slate-500 group-hover:text-[#00e5ff] transition-colors">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-white mb-2">Ultra Premium Look</h3>
<p className="text-xs text-slate-400 font-light">Dark mode aesthetics inspired by top fintech platforms like Stripe and Linear.</p>
</div>

<div className="bg-[#0b0f1a] p-10 flex flex-col items-center text-center group hover:bg-[#0f1422] transition-colors">
<div className="mb-4 text-slate-500 group-hover:text-[#00e5ff] transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-white mb-2">Smooth Animations</h3>
<p className="text-xs text-slate-400 font-light">60FPS web-optimized renders that don't lag your browser or stream.</p>
</div>

<div className="bg-[#0b0f1a] p-10 flex flex-col items-center text-center group hover:bg-[#0f1422] transition-colors">
<div className="mb-4 text-slate-500 group-hover:text-[#00e5ff] transition-colors">
<span className="iconify" data-icon="lucide:box" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-white mb-2">Modern Trading UI</h3>
<p className="text-xs text-slate-400 font-light">Custom components that mimic professional terminal interfaces.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto rounded-3xl p-12 relative overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent text-center">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/50 to-transparent"></div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Ready to upgrade your visuals?</h2>
<p className="text-slate-400 text-sm font-light mb-8 max-w-lg mx-auto">Join hundreds of professional traders who trust us with their brand identity.</p>
<a className="inline-block px-8 py-3 rounded-full bg-white text-[#0b0f1a] text-sm font-medium hover:bg-slate-200 transition-colors" href="#">
        Start Project
      </a>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#0b0f1a]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-60">
<span className="iconify" data-icon="lucide:activity" data-width="16"></span>
<span className="text-xs font-medium tracking-widest uppercase">Trading Visuals</span>
</div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
<div className="text-[10px] text-slate-600">
        © 2026 Trading Visuals. All Rights Reserved.
      </div>
</div>
</footer>


    </>
  );
}
