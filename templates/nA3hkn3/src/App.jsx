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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
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
<h2 className="text-4xl font-bold mb-4">Powerful <span className="gradient-text">Features</span></h2>
<p className="text-white/70 max-w-2xl mx-auto text-lg">Discover how our platform can transform your workflow with these innovative capabilities designed for modern teams.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
<div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
<svg className="h-7 w-7 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Real-time Collaboration</h3>
<p className="text-white/70 mb-4">Work together seamlessly with your team in real-time, with changes synced instantly across all devices.</p>
<ul className="space-y-2">
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Concurrent editing</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Live cursor tracking</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Instant notifications</span>
</li>
</ul>
</div>

<div className="feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
<div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
<svg className="h-7 w-7 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Smart Automation</h3>
<p className="text-white/70 mb-4">Automate repetitive tasks and workflows to save time and reduce errors in your processes.</p>
<ul className="space-y-2">
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Custom workflow builder</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Scheduled actions</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Integration with 30+ apps</span>
</li>
</ul>
</div>

<div className="feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
<div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
<svg className="h-7 w-7 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
<p className="text-white/70 mb-4">Gain valuable insights with comprehensive analytics and reporting tools built into the platform.</p>
<ul className="space-y-2">
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Interactive dashboards</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Custom report generation</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Trend forecasting</span>
</li>
</ul>
</div>

<div className="feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
<div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
<svg className="h-7 w-7 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
<p className="text-white/70 mb-4">Keep your data safe with enterprise-grade security features and compliance standards.</p>
<ul className="space-y-2">
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">End-to-end encryption</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Role-based access control</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">GDPR &amp; HIPAA compliant</span>
</li>
</ul>
</div>

<div className="feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
<div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
<svg className="h-7 w-7 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
<p className="text-white/70 mb-4">Scale your operations with our reliable cloud infrastructure that grows with your business.</p>
<ul className="space-y-2">
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">99.9% uptime guarantee</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Auto-scaling resources</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Global CDN distribution</span>
</li>
</ul>
</div>

<div className="feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
<div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
<svg className="h-7 w-7 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
<p className="text-white/70 mb-4">Get help when you need it with our dedicated support team available around the clock.</p>
<ul className="space-y-2">
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Live chat support</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Dedicated success manager</span>
</li>
<li className="flex items-center">
<svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
<span className="text-white/80">Comprehensive knowledge base</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors" href="#">
            Explore All Features
          </a>
</div>
</div>
</section>
</div>


    </>
  );
}
