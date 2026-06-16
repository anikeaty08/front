import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
  


    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gray-500"></span>
</button>

<div className="flex items-center gap-2 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 px-3 py-2 hover:bg-gray-800/80 shadow-sm">
<img alt="Profile" className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
<span className="text-sm font-geist">Alex Chen</span>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</nav>

<div className="relative z-10 flex flex-col gap-14 lg:flex-row lg:items-center mt-14">

<div className="max-w-2xl">

<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 px-4 py-2 text-xs font-semibold tracking-wide text-gray-300 shadow-sm">
<svg className="h-4 w-4 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
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
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
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
<div className="w-full h-full animate-pulse" style={{backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 320 180">
<defs>
</defs>
<g fill="none" stroke="url(#connectionGradient)" strokeWidth="1.5">

<path className="connector" d="M80,60 L140,60 L140,90 L200,90"></path>
<path className="connector" d="M200,90 L240,90 L240,60 L280,60"></path>
<path className="connector" d="M140,90 L140,120 L200,120"></path>
<path className="connector" d="M200,120 L240,120 L240,150 L200,150"></path>

<circle cx="80" cy="60" fill="#9ca3af" r="3"></circle>
<circle cx="200" cy="90" fill="#6b7280" r="3"></circle>
<circle cx="280" cy="60" fill="#4b5563" r="3"></circle>
<circle cx="200" cy="120" fill="#94a3b8" r="3"></circle>
<circle cx="200" cy="150" fill="#64748b" r="3"></circle>
</g>
</svg>

<div className="absolute inset-0 w-full h-full">

<div className="absolute top-3 left-1/2 transform -translate-x-1/2 schema-pulse">
<div className="w-8 h-8 glass rounded-xl flex items-center justify-center border border-gray-400/30 inner-glow">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 2L3 7l7 5 7-5-7-5zM3 13l7 5 7-5M3 10l7 5 7-5"></path>
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
                  Explore <svg className="w-3 h-3 ml-1" fill="none" viewbox="0 0 24 24"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
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
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<circle cx="12" cy="16" r="1"></circle>
<path d="m7 11V7a5 5 0 0 1 10 0v4"></path>
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
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
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
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
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
<svg className="w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
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
<svg className="w-3 h-3 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<path d="M12 9v4"></path>
<path d="m12 17.02.01 0"></path>
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
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<circle cx="12" cy="16" r="1"></circle>
<path d="m7 11V7a5 5 0 0 1 10 0v4"></path>
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
<svg className="w-3 h-3 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
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
<svg className="w-3 h-3 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="m22 21-3-3"></path>
<path d="m19 18 3 3"></path>
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
<svg className="w-4 h-4 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle cx="12" cy="8" r="6"></circle>
</svg>
          Security Certifications
        </h4>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 glass rounded-xl border border-gray-400/20 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white font-geist">SOC 2 Type II</div>
<div className="text-xs text-gray-400 font-geist">Security Framework</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 glass rounded-xl border border-gray-400/20 flex items-center justify-center">
<svg className="w-5 h-5 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 9h6v6H9z"></path>
</svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white font-geist">ISO 27001</div>
<div className="text-xs text-gray-400 font-geist">Information Security</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 glass rounded-xl border border-gray-400/20 flex items-center justify-center">
<svg className="w-5 h-5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h20v18H2z"></path>
<path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path>
<path d="M9 9h1v1H9z"></path>
<path d="M14 9h1v1h-1z"></path>
</svg>
</div>
<div className="text-center">
<div className="text-xs font-medium text-white font-geist">FIPS 140-2</div>
<div className="text-xs text-gray-400 font-geist">Cryptographic Standards</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-12 h-12 glass rounded-xl border border-gray-400/20 flex items-center justify-center">
<svg className="w-5 h-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
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
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<h3 className="font-medium text-white font-geist">Institutional Custody</h3>
<p className="text-gray-400 text-sm mt-1 font-geist">Hardware security modules &amp; cold storage</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-5 h-5 text-green-400 flex-shrink-0 mt-1">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="">
<h3 className="font-medium text-white font-geist">Priority Trading</h3>
<p className="text-gray-400 text-sm mt-1 font-geist">Zero fees + advanced order types</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="m22 21-3-3"></path>
<path d="m19 18 3 3"></path>
</svg>
</div>
<div className="">
<h3 className="font-medium text-white font-geist">Dedicated Support</h3>
<p className="text-gray-400 text-sm mt-1 font-geist">24/7 expert assistance &amp; account manager</p>
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
<svg className="w-4 h-4 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="m7 11V7a5 5 0 0 1 10 0v4"></path>
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
<input className="w-full p-4 border border-gray-700/60 rounded-xl bg-gray-900/60 text-gray-100 text-base backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="1234 5678 9012 3456" type="text"/>
</div>
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-xs text-gray-400 mb-2 font-medium font-geist">Expiry</label>
<input className="w-full p-4 border border-gray-700/60 rounded-xl bg-gray-900/60 text-gray-100 text-base backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="MM / YY" type="text"/>
</div>
<div className="flex-1">
<label className="block text-xs text-gray-400 mb-2 font-medium font-geist">CVC</label>
<input className="w-full p-4 border border-gray-700/60 rounded-xl bg-gray-900/60 text-gray-100 text-base backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="123" type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs text-gray-400 mb-2 font-medium font-geist">Cardholder name</label>
<input className="w-full p-4 border border-gray-700/60 rounded-xl bg-gray-900/60 text-gray-100 text-base backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="Alex Chen" type="text"/>
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
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
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
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="m7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
<svg className="w-3 h-3 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-xs font-medium text-blue-400 tracking-wider uppercase font-geist">Security &amp; Custody</span>
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
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 7 6 6-6 6"></path>
<path d="M7 7v10"></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-xs font-medium text-green-400 tracking-wider uppercase font-geist">Trading &amp; Fees</span>
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
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="m22 21-3-3"></path>
             3 3"&gt;
          </svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
<svg className="w-3 h-3 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle ="text-xs="" cx="12" cy="12" font-geist"="" font-medium="" text-purple-400="" tracking-wider="" uppercase="">Support &amp; Service
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
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group md:col-span-2 lg:col-span-1">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle cx="12" cy="8" r="6"></circle>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 9h6v6H9z"></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
<svg className="w-3 h-3 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
<span className="text-xs font-medium text-orange-400 tracking-wider uppercase font-geist">Compliance &amp; Regulation</span>
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
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 1v6m0 6v6"></path>
<path d="m21 12-6-6m-6 6-6-6"></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2L3 7l7 5 7-5-7-5zM3 13l7 5 7-5M3 10l7 5 7-5"></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
<svg className="w-3 h-3 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2L3 7l7 5 7-5-7-5zM3 13l7 5 7-5M3 10l7 5 7-5"></path>
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
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</article>

<article className="card-border rounded-2xl p-8 sm:p-10 flex flex-col h-full relative group">
<div className="absolute top-4 left-4">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L8 7l4 5 4-5-4-5z"></path>
<path d="M8 7v10c0 1.1.9 2 2 2h4a2 2 0 002-2V7"></path>
<path d="M16 7L12 2 8 7h8z"></path>
</svg>
</div>
<div className="absolute top-4 right-4">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20h20"></path>
<path d="M7 16v4"></path>
<path d="M12 12v8"></path>
<path d="M17 8v12"></path>
</svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<svg className="w-3 h-3 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20h20"></path>
<path d="M7 16v4"></path>
<path d="M12 12v8"></path>
<path d="M17 8v12"></path>
</svg>
<span className="text-xs font-medium text-emerald-400 tracking-wider uppercase font-geist">DeFi &amp; Staking</span>
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
          <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</article>
</div>

<div className="text-center">
<div className="inline-flex flex-col sm:flex-row gap-4">
<a className="group inline-flex items-center gap-3 rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-800/60 hover:border-gray-600 transition-all duration-300 font-geist" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
<polyline 20,8"=""></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10,9 9,9 8,9"></polyline>
           All Security FAQs
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</svg></a>
<a className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-sm font-medium tracking-wide text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-geist" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
          Contact Security Team
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
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
<input className="flex-1 bg-gray-900/60 border border-gray-700/60 rounded-xl px-4 py-3 text-gray-100 backdrop-blur-md transition-all focus:border-blue-400/60 focus:ring-1 focus:ring-blue-400/60 font-geist" placeholder="Enter your email address" type="email"/>
<button className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl px-6 py-3 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition hover:from-blue-600 hover:to-blue-700 font-geist">
              Subscribe Now
            </button>
</div>
</div>
<div className="hidden md:flex justify-end">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl rotate-3"></div>
<img alt="Crypto analytics dashboard" className="relative w-80 h-60 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d74ed30-6f3a-4ffd-81e1-7530eb6610ca_800w.jpg"/>
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
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full glass border border-gray-400/30 flex items-center justify-center hover:border-blue-400/50 transition" href="#">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewbox="0 0 24 24">
<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 0z"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full glass border border-gray-400/30 flex items-center justify-center hover:border-blue-400/50 transition" href="#">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewbox="0 0 24 24">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full glass border border-gray-400/30 flex items-center justify-center hover:border-blue-400/50 transition" href="#">
<svg className="w-4 h-4 text-gray-300" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"></path>
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
