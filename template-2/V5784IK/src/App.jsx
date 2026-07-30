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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
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
        const r = 156 + intensity * 50;
        const g = 163 + intensity * 50;
        const b = 175;
        ctx.lineWidth = 1 + (i * 0.3);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.4)`;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.3)`;
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
  
}

{

    lucide.createIcons();
  
}
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
      

<canvas className="fixed inset-0 w-full h-full z-0" height="817" id="visualizer" width="1500"></canvas>

<section className="relative max-w-7xl sm:px-10 sm:py-12 lg:py-16 shadow-black/20 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] z-10 text-gray-100 bg-gray-900/60 border-gray-800 border rounded-[40px] mt-8 mr-auto mb-8 ml-auto pt-8 pr-6 pb-8 pl-6 shadow-2xl backdrop-blur-2xl">

<nav className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

<a className="flex items-center gap-2 text-lg font-semibold" href="#">
<span className="font-geist">CryptoVault</span>
</a>

<div className="flex flex-1 flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-end">
<ul className="hidden items-center gap-4 text-sm font-medium sm:flex">
<li className=""><a className="rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 px-4 py-2 shadow-sm font-geist" href="#">Dashboard</a></li>
<li><a className="hover:text-gray-300 font-geist" href="#">Trading</a></li>
<li className=""><a className="hover:text-gray-300 font-geist" href="#">Portfolio</a></li>
</ul>

<div className="flex items-center gap-4">

<button className="relative rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 p-2 hover:bg-gray-800/80 shadow-sm">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gray-500"></span>
</button>

<div className="flex items-center gap-2 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 px-3 py-2 hover:bg-gray-800/80 shadow-sm">
<img alt="Profile" className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
<span className="text-sm font-geist">Alex Chen</span>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
</div>
</div>
</nav>

<div className="relative z-10 flex flex-col gap-14 lg:flex-row lg:items-center mt-14">

<div className="max-w-2xl">

<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 px-4 py-2 text-xs font-semibold tracking-wide text-gray-300 shadow-sm">
<svg className="h-4 w-4 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="font-geist">Trusted by 2M+ Investors Worldwide</span>
</div>

<h1 className="text-6xl leading-tight sm:text-7xl lg:text-7xl tracking-tight font-geist">
          SECURE YOUR 
          DIGITAL WEALTH 
          WITH CONFIDENCE
        </h1>

<p className="mt-6 text-lg text-gray-400 leading-relaxed font-geist">
          Advanced encryption, institutional-grade security, and lightning-fast transactions. 
          Join the future of decentralized finance with zero fees on your first $10,000.
        </p>

<div className="flex flex-wrap gap-4 mt-10">
<a className="rounded-full bg-gray-200 text-gray-900 px-8 py-4 text-sm shadow-lg transition hover:bg-gray-300 hover:scale-105 font-geist" href="#">Start Trading Now</a>
<a className="flex items-center gap-2 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 px-6 py-4 text-sm hover:bg-gray-800/80 shadow-sm font-geist" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
            Watch Demo
          </a>
</div>
</div>

<div className="max-w-sm lg:mx-0 mr-auto ml-auto">
<div className="w-full relative">

<div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float">

<div className="p-4 flex justify-center relative">
<div className="w-full h-48 rounded-xl gradient-border inner-glow overflow-hidden relative">

<div className="absolute inset-0 opacity-10">
<div className="w-full h-full animate-pulse" style={{backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: `15px 15px`}}></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 180">
<defs>
</defs>
<g fill="none" stroke="url(#connectionGradient)" strokeWidth="1.5">

<path className="connector"></path>
<path className="connector"></path>
<path className="connector"></path>
<path className="connector"></path>

<circle cx="80" cy="60" fill="#9ca3af"></circle>
<circle cx="200" cy="90" fill="#6b7280"></circle>
<circle cx="280" cy="60" fill="#4b5563"></circle>
<circle cx="200" cy="120" fill="#94a3b8"></circle>
<circle cx="200" cy="150" fill="#64748b"></circle>
</g>
</svg>

<div className="absolute inset-0 w-full h-full">

<div className="absolute top-3 left-1/2 transform -translate-x-1/2 schema-pulse">
<div className="w-8 h-8 glass rounded-xl flex items-center justify-center border border-gray-400/30 inner-glow">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
<path></path>
</svg>
</div>
</div>

<div className="absolute left-3 top-12 wallet-float">
<div className="w-16 h-12 glass rounded-lg gradient-border shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-white text-[7px] px-1.5 py-0.5 font-medium border-b border-white/10 font-geist">Bitcoin</div>
<div className="px-1.5 py-0.5 space-y-0.5">
<div className="flex items-center space-x-0.5">
<div className="w-1 h-1 bg-orange-400 rounded-full"></div>
<div className="h-0.5 w-6 bg-white/30 rounded"></div>
</div>
<div className="h-0.5 w-4 bg-white/20 rounded"></div>
<div className="h-0.5 w-7 bg-white/20 rounded"></div>
</div>
</div>
</div>
<div className="absolute right-3 top-12 wallet-float">
<div className="w-16 h-12 glass rounded-lg gradient-border shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-gray-600/20 to-gray-700/20 text-white text-[7px] px-1.5 py-0.5 font-medium border-b border-white/10 font-geist">Ethereum</div>
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
<div className="absolute left-1/2 transform -translate-x-1/2 top-24 wallet-float">
<div className="w-16 h-12 glass rounded-lg gradient-border shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-gray-700/20 to-gray-800/20 text-white text-[7px] px-1.5 py-0.5 font-medium border-b border-white/10 font-geist">Solana</div>
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
<div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 wallet-float">
<div className="w-16 h-12 glass rounded-lg gradient-border shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-white text-[7px] px-1.5 py-0.5 font-medium border-b border-white/10 font-geist">DeFi Pool</div>
<div className="px-1.5 py-0.5 space-y-0.5">
<div className="flex items-center space-x-0.5">
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
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
<span className="inline-block px-3 py-1 glass text-gray-300 rounded-full text-xs font-medium mb-3 border border-gray-400/30 font-geist">Network</span>
<h3 className="text-lg font-medium text-white mb-2 font-geist">Multi-Chain Portfolio</h3>
<p className="text-white/70 mb-4 leading-relaxed text-xs font-geist">
                Manage your crypto assets across multiple blockchains with real-time synchronization.
              </p>
<div className="flex justify-between items-center">
<a className="text-gray-300 hover:text-gray-100 transition flex items-center text-xs font-medium glass px-3 py-1.5 rounded-lg border border-gray-400/30 font-geist" href="#">
                  Explore <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<span className="text-white/50 text-xs glass px-2 py-1 rounded-full border border-white/10 font-geist">Live</span>
</div>
</div>
</div>
</div>
</div>
</div><div className="relative z-10 mt-20">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-44 mb-44 items-start">

<div className="space-y-8">
<div className="">
<span className="inline-flex items-center gap-2 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 px-4 py-2 text-xs font-medium tracking-wide text-gray-300 shadow-sm mb-6">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18"></rect>
<circle cx="12" cy="16"></circle>
<path></path>
</svg>
          Enterprise Security
        </span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-geist text-white mb-6">
          Bank-grade security
          
          <span className="text-gray-400">infrastructure</span>
</h2>
<p className="text-lg text-gray-400 leading-relaxed max-w-lg font-geist">
          Military-grade encryption, multi-signature wallets, and institutional custody solutions designed for the most demanding security requirements.
        </p>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="space-y-8">
<div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-6 items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl glass border border-gray-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<h3 className="text-sm font-medium text-white font-geist">Multi-Sig Custody</h3>
</div>
<div className="">
<p className="text-sm text-gray-400 mb-3 leading-relaxed font-geist">
              Advanced multi-signature wallet architecture with hardware security modules and distributed key management.
            </p>
<div className="flex gap-2 text-xs">
<span className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 font-geist">Hardware HSM</span>
<span className="px-2 py-1 bg-green-500/10 text-green-300 rounded-full border border-green-500/20 font-geist">Cold Storage</span>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-6 items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl glass border border-gray-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<h3 className="text-sm font-medium text-white font-geist">Zero-Knowledge Proofs</h3>
</div>
<div>
<p className="text-sm text-gray-400 mb-3 leading-relaxed font-geist">
              Privacy-preserving transaction verification using cutting-edge zero-knowledge cryptography protocols.
            </p>
<div className="flex gap-2 text-xs">
<span className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 font-geist">zk-SNARKs</span>
<span className="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20 font-geist">Private Pools</span>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-6 items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl glass border border-gray-400/30 flex items-center justify-center">
<svg className="w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
</svg>
</div>
<h3 className="text-sm font-medium text-white font-geist">Real-time Monitoring</h3>
</div>
<div>
<p className="text-sm text-gray-400 mb-3 leading-relaxed font-geist">
              AI-powered threat detection with 24/7 monitoring across all transactions and wallet activities.
            </p>
<div className="flex gap-2 text-xs">
<span className="px-2 py-1 bg-red-500/10 text-red-300 rounded-full border border-red-500/20 font-geist">AI Detection</span>
<span className="px-2 py-1 bg-yellow-500/10 text-yellow-300 rounded-full border border-yellow-500/20 font-geist">24/7 SOC</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="relative card-border rounded-2xl overflow-hidden h-[320px] lg:h-[420px]">
<div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-700/20"></div>
<div className="absolute top-4 right-4 flex items-center gap-2 text-xs text-gray-400">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="font-geist">Security Status: Active</span>
</div>

<div className="absolute inset-0 p-6">
<div className="grid grid-cols-2 gap-4 h-full">

<div className="glass rounded-xl p-4 border border-gray-400/20">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-lg glass border border-gray-400/30 flex items-center justify-center">
<svg className="w-3 h-3 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
</div>
<span className="text-xs font-medium text-white font-geist">Threats Blocked</span>
</div>
<div className="space-y-2">
<div className="text-2xl font-medium text-white font-geist">1,247</div>
<div className="text-xs text-gray-400 font-geist">Last 24h</div>
</div>
</div>

<div className="glass rounded-xl p-4 border border-gray-400/20">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-lg glass border border-gray-400/30 flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18"></rect>
<circle cx="12" cy="16"></circle>
<path></path>
</svg>
</div>
<span className="text-xs font-medium text-white font-geist">Secure Wallets</span>
</div>
<div className="space-y-2">
<div className="text-2xl font-medium text-white font-geist">99.9%</div>
<div className="text-xs text-gray-400 font-geist">Uptime</div>
</div>
</div>

<div className="glass rounded-xl p-4 border border-gray-400/20">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-lg glass border border-gray-400/30 flex items-center justify-center">
<svg className="w-3 h-3 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<span className="text-xs font-medium text-white font-geist">Encryption</span>
</div>
<div className="space-y-2">
<div className="text-2xl font-medium text-white font-geist">AES-256</div>
<div className="text-xs text-gray-400 font-geist">Military Grade</div>
</div>
</div>

<div className="glass rounded-xl p-4 border border-gray-400/20">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-lg glass border border-gray-400/30 flex items-center justify-center">
<svg className="w-3 h-3 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="9" cy="7"></circle>
<path></path>
<path></path>
</svg>
</div>
<span className="text-xs font-medium text-white font-geist">Multi-Sig</span>
</div>
<div className="space-y-2">
<div className="text-2xl font-medium text-white font-geist">3/5</div>
<div className="text-xs text-gray-400 font-geist">Required Keys</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass border border-gray-400/20 rounded-xl p-6">
<h4 className="flex items-center gap-2 text-sm font-medium text-white mb-4 font-geist">
<svg className="w-4 h-4 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="8"></circle>
</svg>
          Security Certifications
        </h4>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 glass rounded-xl border border-gray-400/20 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white font-geist">SOC 2 Type II</div>
<div className="text-xs text-gray-400 font-geist">Security Framework</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 glass rounded-xl border border-gray-400/20 flex items-center justify-center">
<svg className="w-5 h-5 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18"></rect>
<path></path>
</svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white font-geist">ISO 27001</div>
<div className="text-xs text-gray-400 font-geist">Information Security</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 glass rounded-xl border border-gray-400/20 flex items-center justify-center">
<svg className="w-5 h-5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white font-geist">FIPS 140-2</div>
<div className="text-xs text-gray-400 font-geist">Cryptographic Standards</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 glass rounded-xl border border-gray-400/20 flex items-center justify-center">
<svg className="w-5 h-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
<line></line>
<line></line>
</svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white font-geist">GDPR Ready</div>
<div className="text-xs text-gray-400 font-geist">Data Protection</div>
</div>
</div>
</div>
</div>
</div>
</div><div className="relative z-10 mt-32">
<div className="max-w-5xl mx-auto bg-gray-900/95 rounded-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-700/50 backdrop-blur-xl shadow-2xl">

<div className="w-full lg:w-2/5 p-8 lg:p-12 bg-gray-900/90 space-y-8">
<div className="">
<div className="flex items-center gap-2 mb-6">
<span className="text-blue-400 font-medium text-lg tracking-wide font-geist">CryptoVault</span>
</div>
<h2 className="text-3xl lg:text-4xl font-medium mb-4 text-white tracking-tight font-geist">
          Enterprise Wallet
        </h2>
<p className="text-gray-400 leading-relaxed text-base font-geist">
          Unlock institutional-grade security features, priority support, and advanced trading tools. 
          Complete with hardware wallet integration, white-label solutions, and dedicated account management.
        </p>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<div className="">
<h3 className="font-medium text-white font-geist">Institutional Custody</h3>
<p className="text-gray-400 text-sm mt-1 font-geist">Hardware security modules & cold storage</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-5 h-5 text-green-400 flex-shrink-0 mt-1">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div className="">
<h3 className="font-medium text-white font-geist">Priority Trading</h3>
<p className="text-gray-400 text-sm mt-1 font-geist">Zero fees + advanced order types</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="9" cy="7"></circle>
<path></path>
<path></path>
</svg>
</div>
<div className="">
<h3 className="font-medium text-white font-geist">Dedicated Support</h3>
<p className="text-gray-400 text-sm mt-1 font-geist">24/7 expert assistance & account manager</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-3/5 flex flex-col justify-center p-8 lg:p-12 bg-gray-800/50">
<div className="w-full max-w-lg mx-auto bg-gray-800/80 rounded-2xl border border-gray-700/60 p-8 backdrop-blur-xl">

<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium text-white tracking-tight font-geist">Upgrade Plan</h3>
<div className="flex items-end gap-2">
<span className="text-4xl font-medium text-blue-400 font-geist">$299</span>
<span className="text-base text-gray-400 font-medium mb-1 font-geist">/month</span>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

<div className="space-y-3 mb-8">
<div className="flex justify-between">
<span className="text-gray-400 font-geist">Enterprise Wallet</span>
<span className="text-gray-200 font-medium font-geist">$299</span>
</div>
<div className="flex justify-between">
<span className="text-gray-400 font-geist">Hardware Integration</span>
<span className="text-green-400 font-medium font-geist">Included</span>
</div>
<div className="flex justify-between">
<span className="text-gray-400 font-geist">Priority Support</span>
<span className="text-green-400 font-medium font-geist">Included</span>
</div>
<div className="flex justify-between text-blue-400 font-medium">
<span className="font-geist">Early Access Discount</span>
<span className="font-geist">-$100</span>
</div>
<div className="pt-4 mt-4 border-t border-gray-700/60 flex justify-between">
<span className="font-medium text-gray-200 font-geist">Total</span>
<span className="font-medium text-white font-geist">$199.00</span>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

<h4 className="text-xs font-medium text-gray-400 mb-4 tracking-wide font-geist">PAYMENT METHOD</h4>
<div className="flex gap-2 mb-6">
<button className="flex-1 py-3 px-4 border border-blue-400/60 rounded-xl flex items-center justify-center bg-gray-800/60 text-blue-400 text-sm font-medium backdrop-blur-md transition-all hover:bg-gray-700/60 font-geist" type="button">
<svg className="w-4 h-4 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18"></rect>
<path></path>
</svg>
            Card
          </button>
<button className="flex-1 py-3 px-4 border border-gray-700/60 rounded-xl flex items-center justify-center bg-gray-800/40 text-gray-400 text-sm font-medium backdrop-blur-md transition-all hover:bg-gray-700/40 font-geist" type="button">
            Crypto
          </button>
<button className="flex-1 py-3 px-4 border border-gray-700/60 rounded-xl flex items-center justify-center bg-gray-800/40 text-gray-400 text-sm font-medium backdrop-blur-md transition-all hover:bg-gray-700/40 font-geist" type="button">
            Wire
          </button>
</div>

<form className="space-y-5">
<div className="">
<label className="block text-xs text-gray-400 mb-2 font-medium font-geist">Card number</label>
<input className="w-full p-4 border border-gray-700/60 rounded-xl bg-gray-900/60 text-gray-100 text-base backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="1234 5678 9012 3456" type="text" />
</div>
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-xs text-gray-400 mb-2 font-medium font-geist">Expiry</label>
<input className="w-full p-4 border border-gray-700/60 rounded-xl bg-gray-900/60 text-gray-100 text-base backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="MM / YY" type="text" />
</div>
<div className="flex-1">
<label className="block text-xs text-gray-400 mb-2 font-medium font-geist">CVC</label>
<input className="w-full p-4 border border-gray-700/60 rounded-xl bg-gray-900/60 text-gray-100 text-base backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="123" type="text" />
</div>
</div>
<div className="">
<label className="block text-xs text-gray-400 mb-2 font-medium font-geist">Cardholder name</label>
<input className="w-full p-4 border border-gray-700/60 rounded-xl bg-gray-900/60 text-gray-100 text-base backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="Alex Chen" type="text" />
</div>
<button className="w-full py-4 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02] shadow-lg font-geist" type="submit">
            Upgrade for $199/month
          </button>
<p className="text-xs text-gray-500 text-center mt-4 leading-relaxed font-geist">
            By upgrading, you agree to our Enterprise Terms of Service.
            Cancel anytime. No setup fees.
          </p>
</form>
</div>
</div>
</div>
</div><div className="relative z-10 mt-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">

<div className="text-center mb-16 sm:mb-20 fade-in">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
<path></path>
</svg>
<span className="text-xs sm:text-sm font-medium text-blue-400 tracking-wider uppercase font-geist">Frequently Asked Questions</span>
</div>
<h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight mb-6 font-geist">
<span className="block text-white mb-2">CRYPTO</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">QUESTIONS</span>
</h2>
<p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-geist">
        Get answers to the most common questions about digital asset security, trading, and our enterprise-grade wallet solutions.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">

<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18"></rect>
<path></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
<svg className="w-3 h-3 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-xs font-medium text-blue-400 tracking-wider uppercase font-geist">Security & Custody</span>
</div>
<h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight text-white font-geist font-medium">
            How secure are my crypto assets with CryptoVault?
          </h3>
<p className="text-gray-400 text-sm sm:text-base leading-relaxed font-geist">
            We use military-grade AES-256 encryption, multi-signature wallets, and store 98% of assets in cold storage with hardware security modules.
          </p>
</div>
<button className="mt-8 group inline text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-all duration-300 font-geist">
          Read Full Answer
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line></line>
<path></path>
</svg>
<span className="text-xs font-medium text-green-400 tracking-wider uppercase font-geist">Trading & Fees</span>
</div>
<h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight text-white font-geist font-medium">
            What trading fees does CryptoVault charge?
          </h3>
<p className="text-gray-400 text-sm sm:text-base leading-relaxed font-geist">
            Enterprise users enjoy zero trading fees on all transactions, while standard users pay industry-low 0.1% maker and 0.2% taker fees.
          </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-all duration-300 font-geist">
          Read Full Answer
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="9" cy="7"></circle>
<path></path>
             3 3"{">"}
          </svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
<svg className="w-3 h-3 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12" font-medium="" text-purple-400="" tracking-wider="" uppercase="">Support & Service
          </circle></svg></div>
<h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight text-white font-geist font-medium">
            Do Enterprise users get dedicated support?
          </h3>
<p className="text-gray-400 text-sm sm:text-base leading-relaxed font-geist">
            Yes! Enterprise users receive 24/7 priority support with dedicated account managers and direct phone access to our security team.
          </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-all duration-300 font-geist">
          Read Full Answer
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group md:col-span-2 lg:col-span-1">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="8"></circle>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18"></rect>
<path></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
<svg className="w-3 h-3 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="text-xs font-medium text-orange-400 tracking-wider uppercase font-geist">Compliance & Regulation</span>
</div>
<h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight text-white font-geist font-medium">
            Is CryptoVault regulated and compliant?
          </h3>
<p className="text-gray-400 text-sm sm:text-base leading-relaxed font-geist">
            We maintain SOC 2 Type II, ISO 27001, and FIPS 140-2 compliance. Licensed in 47 jurisdictions with full regulatory oversight.
          </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-all duration-300 font-geist">
          Read Full Answer
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
<path></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
<svg className="w-3 h-3 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="text-xs font-medium text-cyan-400 tracking-wider uppercase font-geist">Multi-Chain Support</span>
</div>
<h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight text-white font-geist font-medium">
            Which blockchains does CryptoVault support?
          </h3>
<p className="text-gray-400 text-sm sm:text-base leading-relaxed font-geist">
            We support 15+ major blockchains including Bitcoin, Ethereum, Solana, Polygon, Avalanche, and all major Layer 2 solutions.
          </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-all duration-300 font-geist">
          Read Full Answer
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<svg className="w-3 h-3 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
<span className="text-xs font-medium text-emerald-400 tracking-wider uppercase font-geist">DeFi & Staking</span>
</div>
<h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight text-white font-geist font-medium">
            Can I stake and earn yield on my crypto?
          </h3>
<p className="text-gray-400 text-sm sm:text-base leading-relaxed font-geist">
            Access institutional-grade staking with up to 12% APY on major assets, plus curated DeFi pools with automated yield optimization.
          </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 hover:text-white transition-all duration-300 font-geist">
          Read Full Answer
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</button>
</article>
</div>

<div className="text-center">
<div className="inline-flex flex-col sm:flex-row gap-4">
<a className="group inline-flex items-center gap-3 rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-800/60 hover:border-gray-600 transition-all duration-300 font-geist" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<polyline></polyline>
<line></line>
<line></line>
<polyline points="10,9 9,9 8,9"></polyline>
           All Security FAQs
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</svg></a>
<a className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-sm font-medium tracking-wide text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-geist" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
          Contact Security Team
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</a>
</div>
<p className="mt-6 text-sm text-gray-500 font-geist">
        Need immediate help? Our security experts are available 24/7 for Enterprise users.
      </p>
</div>
</div>
</div><footer className="relative z-10 mt-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-20"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

<div className="card-border rounded-2xl p-8 md:p-12 mb-16">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="">
<h3 className="text-2xl md:text-3xl font-medium mb-4 text-white tracking-tight font-geist">
            Stay ahead of crypto markets
          </h3>
<p className="text-gray-400 mb-6 leading-relaxed font-geist">
            Get exclusive market insights, security updates, and early access to new features. Join 2M+ investors already in the know.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<input className="flex-1 bg-gray-900/60 border border-gray-700/60 rounded-xl px-4 py-3 text-gray-100 backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="Enter your email address" type="email" />
<button className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl px-6 py-3 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition hover:from-blue-600 hover:to-blue-700 font-geist">
              Subscribe Now
            </button>
</div>
</div>
<div className="hidden md:flex justify-end">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl rotate-3"></div>
<img alt="Crypto analytics dashboard" className="relative w-80 h-60 object-cover rounded-xl" src="/assets/4d74ed30-6f3a-4ffd-81e1-7530eb6610ca_800w.jpg" />
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="text-xl font-medium text-white font-geist">CryptoVault</span>
</div>
<p className="text-gray-400 mb-6 leading-relaxed font-geist">
          Secure digital wealth management with institutional-grade security and lightning-fast transactions.
        </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full glass border border-gray-400/30 flex items-center justify-center hover:border-blue-400/50 transition" href="#">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full glass border border-gray-400/30 flex items-center justify-center hover:border-blue-400/50 transition" href="#">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full glass border border-gray-400/30 flex items-center justify-center hover:border-blue-400/50 transition" href="#">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full glass border border-gray-400/30 flex items-center justify-center hover:border-blue-400/50 transition" href="#">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
</a>
</div>
</div>

<div className="">
<h4 className="font-medium text-lg mb-4 text-white font-geist">Platform</h4>
<ul className="space-y-3">
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Trading</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Portfolio</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Staking</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">DeFi Pools</a></li>
<li><a className="text-gray-400 hover:text-white transition font-geist" href="#">NFT Marketplace</a></li>
</ul>
</div>

<div className="">
<h4 className="font-medium text-lg mb-4 text-white font-geist">Security</h4>
<ul className="space-y-3">
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Multi-Sig Wallets</a></li>
<li><a className="text-gray-400 hover:text-white transition font-geist" href="#">Cold Storage</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Insurance</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Audit Reports</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Bug Bounty</a></li>
</ul>
</div>

<div className="">
<h4 className="font-medium text-lg mb-4 text-white font-geist">Company</h4>
<ul className="space-y-3">
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">About Us</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Careers</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Press</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Investors</a></li>
<li className=""><a className="text-gray-400 hover:text-white transition font-geist" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm mb-4 md:mb-0 font-geist">
        © 2024 CryptoVault. All rights reserved. Licensed and regulated.
      </p>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-gray-400 hover:text-white text-sm transition font-geist" href="#">Terms of Service</a>
<a className="text-gray-400 hover:text-white text-sm transition font-geist" href="#">Privacy Policy</a>
<a className="text-gray-400 hover:text-white text-sm transition font-geist" href="#">Risk Disclosure</a>
<a className="text-gray-400 hover:text-white text-sm transition font-geist" href="#">Compliance</a>
</div>
</div>
</div>
</footer>
</div>
</section>





    </>
  );
}
