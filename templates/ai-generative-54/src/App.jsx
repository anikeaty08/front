import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



      document.addEventListener("DOMContentLoaded", () => {
        const ctx = document.getElementById('performanceChart').getContext('2d');
        
        // Gradient for the line
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.4)'); // Violet
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0.0)');
    
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            datasets: [
              {
                label: 'Synapse v2',
                data: [20, 45, 70, 95, 120, 135, 140, 142, 144, 145],
                borderColor: '#8b5cf6', // Violet-500
                backgroundColor: gradient,
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4,
                fill: true
              },
              {
                label: 'Competitor',
                data: [10, 25, 40, 50, 55, 58, 60, 61, 62, 62],
                borderColor: '#404040', // Neutral-700
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4,
                pointRadius: 0,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(10, 10, 10, 0.9)',
                titleColor: '#fff',
                bodyColor: '#a3a3a3',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                titleFont: { family: 'Geist Mono', size: 10 },
                bodyFont: { family: 'Geist Mono', size: 10 }
              }
            },
            scales: {
              x: {
                display: false,
                grid: { display: false }
              },
              y: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.03)',
                  drawBorder: false
                },
                ticks: {
                  color: '#525252',
                  font: { family: 'Geist Mono', size: 9 },
                  callback: function(value) { return value }
                },
                min: 0
              }
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 mx-auto max-w-7xl grid-lines"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--accent-glow),_transparent_70%)] opacity-60 blur-3xl"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0s_both] animate">
<nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/5 bg-[#050505]/80 p-2 pl-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/5">
<a className="flex items-center gap-2 group" href="#">
<div className="h-6 w-6 rounded bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:brain-circuit" width="14"></iconify-icon>
</div>
<span className="font-medium text-sm text-white tracking-tight group-hover:text-violet-200 transition-colors">Synapse</span>
</a>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Models</a>
<a className="hover:text-white transition-colors" href="#">Playground</a>
<a className="hover:text-white transition-colors" href="#">API</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex text-[13px] font-medium text-neutral-400 hover:text-white transition-colors px-2">
            Sign In
          </button>
<button className="group relative flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 text-[13px] font-medium text-white transition-all hover:bg-neutral-800" style={{-BorderGradient: 'linear-gradient(to bottom, rgba(167, 139, 250, 0.5), rgba(167, 139, 250, 0.1))', -BorderRadiusBefore: '9999px'}}>
<span>Start Creating</span>
<iconify-icon className="transition-transform group-hover:translate-x-0.5" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</nav>
</div>

<main className="max-w-7xl mx-auto pt-12 pr-6 pb-32 pl-6 relative">

<div className="mx-auto mb-24 max-w-4xl text-center">
<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.1s_both] mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-950/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-violet-200 shadow-[0_0_15px_rgba(139,92,246,0.15)] animate">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
</span>
          Synapse v2.4 Available Now
        </div>
<h1 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-6 text-5xl font-medium leading-[0.95] tracking-tight text-white md:text-7xl animate">
          Reasoning at the
          <br/>
<span className="text-neutral-500">Speed of Thought.</span>
</h1>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mx-auto mb-10 max-w-xl text-lg font-light leading-relaxed text-neutral-400 tracking-tight animate">
          A unified workspace for multimodal generation. Create text, code, images, and audio with our most advanced reasoning engine yet.
        </p>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] w-full max-w-lg mx-auto relative group animate">
<div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-violet-600/30 to-indigo-600/30 opacity-50 blur transition duration-500 group-hover:opacity-100"></div>
<div className="relative flex items-center gap-3 bg-[#0A0A0A] border border-white/10 rounded-full p-2 pl-5 shadow-2xl">
<iconify-icon className="text-violet-500" icon="lucide:sparkles" width="18"></iconify-icon>
<span className="text-neutral-500 text-sm font-light flex-1 text-left">Describe what you want to build...</span>
<button className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="lucide:arrow-up" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 mb-32 relative gap-x-6 gap-y-6">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] relative md:col-span-8 h-[400px] md:h-[500px] group overflow-hidden rounded-3xl border border-white/5 bg-[#080808] animate hover:border-white/10 transition-all">

<div className="absolute inset-0 bg-neutral-900/50 flex flex-col">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
</div>

<div className="flex-1 p-6 flex gap-6">

<div className="w-16 border-r border-white/5 flex flex-col gap-4 items-center pt-2">
<div className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center border border-violet-500/30">
<iconify-icon icon="lucide:message-square" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-neutral-600 hover:bg-white/5 flex items-center justify-center transition-colors">
<iconify-icon icon="lucide:image" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-neutral-600 hover:bg-white/5 flex items-center justify-center transition-colors">
<iconify-icon icon="lucide:code-2" width="16"></iconify-icon>
</div>
</div>

<div className="flex-1 flex flex-col gap-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0"></div>
<div className="space-y-2">
<div className="h-2 w-24 bg-neutral-800 rounded"></div>
<div className="p-3 rounded-2xl rounded-tl-none bg-neutral-800/50 border border-white/5 text-xs text-neutral-400 leading-relaxed max-w-md">
                                Generate a React component for a real-time data dashboard with a dark theme.
                            </div>
</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex-shrink-0 flex items-center justify-center text-white text-[10px]">AI</div>
<div className="space-y-2">
<div className="flex justify-end"><div className="h-2 w-16 bg-neutral-800 rounded"></div></div>
<div className="p-4 rounded-2xl rounded-tr-none bg-neutral-900 border border-violet-500/20 text-xs text-neutral-300 font-mono relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-transparent w-3/4"></div>
<span className="text-violet-400">import</span> React, { useState, useEffect } <span className="text-violet-400">from</span> 'react';<br/>
<span className="text-violet-400">const</span> Dashboard = () =&gt; {<br/>
                                  <span className="text-indigo-400">return</span> (<br/>
                                    &lt;div className="bg-neutral-900"&gt;...
                            </div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-8 w-full pointer-events-none">
<div className="flex items-center gap-2 text-violet-400 mb-2">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-widest">
                Real-time Inference
              </span>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-1">
              Code Assistant
            </h3>
<p className="text-neutral-400 text-sm max-w-md">
              Context-aware generation with 99.8% syntax accuracy.
            </p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] md:col-span-4 flex flex-col z-10 animate gap-x-6 gap-y-6">

<div className="flex-1 overflow-hidden hover:border-white/10 transition-all group bg-[#080808] border-white/5 border rounded-3xl p-6 relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
<div className="z-10 flex flex-col h-full relative justify-end">
<div className="mb-auto p-2 bg-white/5 w-fit rounded-lg border border-white/10 backdrop-blur-md text-white">
<iconify-icon icon="lucide:image" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mt-4">
                Diffusion Model XL
              </h3>
<div className="h-px w-full bg-white/10 my-3"></div>
<div className="flex justify-between items-center">
<span className="text-[11px] text-neutral-500">Photorealistic rendering</span>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 overflow-hidden hover:border-white/10 transition-all group bg-[#080808] border-white/5 border rounded-3xl p-6 relative">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="z-10 flex flex-col h-full relative justify-end">
<div className="mb-auto p-2 bg-white/5 w-fit rounded-lg border border-white/10 backdrop-blur-md text-white">
<iconify-icon icon="lucide:bar-chart-2" width="18"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-white mt-4">Usage Analytics</h3>
<div className="h-px w-full bg-white/10 my-3"></div>
<div className="flex justify-between items-center">
<span className="text-[11px] text-neutral-500">Token optimization insights</span>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="lucide:arrow-up-right" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] mb-24">
<div className="flex flex-wrap gap-3 justify-center">
<button className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 hover:bg-white/[0.05] transition-colors hover:border-white/10">
<iconify-icon className="text-neutral-500 group-hover:text-violet-400 transition-colors" icon="lucide:pen-tool" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Copywriting</span>
</button>
<button className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 hover:bg-white/[0.05] transition-colors hover:border-white/10">
<iconify-icon className="text-neutral-500 group-hover:text-violet-400 transition-colors" icon="lucide:code-2" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Engineering</span>
</button>
<button className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 hover:bg-white/[0.05] transition-colors hover:border-white/10">
<iconify-icon className="text-neutral-500 group-hover:text-violet-400 transition-colors" icon="lucide:video" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Video Gen</span>
</button>
<button className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 hover:bg-white/[0.05] transition-colors hover:border-white/10">
<iconify-icon className="text-neutral-500 group-hover:text-violet-400 transition-colors" icon="lucide:music" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Audio Synthesis</span>
</button>
<button className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 hover:bg-white/[0.05] transition-colors hover:border-white/10">
<iconify-icon className="text-neutral-500 group-hover:text-violet-400 transition-colors" icon="lucide:database" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Data Extraction</span>
</button>
</div>
</div>

<div className="mb-32">
<div className="flex animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] mb-10 items-end justify-between">
<div className="">
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">
              Capability Matrix
            </h2>
<p className="text-neutral-500 text-sm font-light">
              Fine-tuned models for specialized tasks.
            </p>
</div>
<div className="flex gap-2">
<a className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors" href="#">
                View Documentation <iconify-icon icon="lucide:arrow-right" width="10"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A] p-6 transition-colors hover:border-white/10">
<div className="absolute top-0 right-0 p-4 opacity-50">
<iconify-icon className="text-neutral-800 -rotate-12" icon="lucide:cpu" width="40"></iconify-icon>
</div>
<div className="flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:border-violet-500/30 group-hover:text-violet-400 transition-all">
<iconify-icon icon="lucide:bot" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Synapse Chat-3</h3>
<p className="text-sm text-neutral-500 mb-6 font-light leading-relaxed">Advanced conversational agent with 128k context window and reduced hallucination rates.</p>
<div className="mt-auto pt-4 border-t border-white/5 flex gap-4 text-xs font-mono text-neutral-600">
<span>128k Context</span>
<span>$0.02 / 1k tokens</span>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A] p-6 transition-colors hover:border-white/10 shadow-2xl">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-500/10 blur-3xl rounded-full group-hover:bg-violet-500/20 transition-colors"></div>
<div className="flex flex-col h-full relative z-10">
<div className="h-10 w-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:border-violet-500/30 group-hover:text-violet-400 transition-all">
<iconify-icon icon="lucide:wand-2" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Pixel Canvas v2</h3>
<p className="text-sm text-neutral-500 mb-6 font-light leading-relaxed">Generative image model optimized for UI assets, textures, and marketing creatives.</p>
<div className="mt-auto pt-4 border-t border-white/5 flex gap-4 text-xs font-mono text-neutral-600">
<span>1024x1024</span>
<span>0.8s Latency</span>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0A0A0A] p-6 transition-colors hover:border-white/10">
<div className="flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:border-violet-500/30 group-hover:text-violet-400 transition-all">
<iconify-icon icon="lucide:file-code" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">DevCoder 7B</h3>
<p className="text-sm text-neutral-500 mb-6 font-light leading-relaxed">Specialized model for Python, TypeScript, and Rust. Autocomplete and refactoring capable.</p>
<div className="mt-auto pt-4 border-t border-white/5 flex gap-4 text-xs font-mono text-neutral-600">
<span>FIM Capability</span>
<span>Local Compatible</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="relative border-t border-white/5 bg-[#020202] py-32 overflow-hidden">
<div className="z-10 max-w-7xl mx-auto px-6 relative">
<div className="mb-20 text-center">
<h2 className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both] text-3xl font-medium tracking-tight text-white md:text-5xl">
            Integrated Architecture
          </h2>
<p className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.3s_both] mt-4 text-neutral-400 font-light">
            Built for scale, security, and developer ergonomics.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px] h-auto gap-x-4 gap-y-4">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both] col-span-1 md:col-span-2 md:row-span-2 relative rounded-3xl border border-white/5 bg-[#0A0A0A] overflow-hidden group hover:border-violet-500/20 transition-colors">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=2832&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000"></div>
<div className="bg-gradient-to-t from-black via-black/50 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-start z-10">
<div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/50 backdrop-blur shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-violet-500/30">
<iconify-icon className="text-neutral-400 group-hover:text-violet-400 transition-colors" icon="lucide:network" width="24"></iconify-icon>
</div>
<h3 className="text-white text-3xl font-medium tracking-tight mb-2">
                Distributed Neural Network
              </h3>
<p className="text-neutral-500 text-sm max-w-sm mb-6 leading-relaxed">
                Our global edge network reduces latency by up to 60%, delivering inference closer to your users.
              </p>
<button className="bg-white text-black px-6 py-2 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors">
                View Infrastructure
              </button>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.5s_both] col-span-1 md:col-span-1 overflow-hidden group flex flex-col hover:border-violet-500/20 transition-colors z-10 bg-[#0A0A0A] border-white/5 border rounded-3xl p-6 relative justify-between">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon icon="lucide:shield-check" width="60"></iconify-icon>
</div>
<div className="mt-auto relative z-10">
<h3 className="text-white text-lg font-medium mb-1">Enterprise Grade</h3>
<p className="text-[11px] text-neutral-500">SOC2 Type II Compliant</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.6s_both] col-span-1 md:col-span-1 overflow-hidden group flex flex-col bg-[#0A0A0A] hover:border-violet-500/20 transition-colors border-white/5 border rounded-3xl p-6 relative justify-between">
<div className="w-full h-24 rounded-lg bg-neutral-900 border border-white/5 mb-4 relative overflow-hidden">
<div className="absolute top-3 left-3 flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
<div className="absolute top-8 left-3 font-mono text-[8px] text-neutral-500">
                    &gt; init_sequence()<br/>
                    &gt; <span className="text-green-500">success</span>
</div>
</div>
<div className="relative z-10">
<h3 className="text-white text-lg font-medium mb-1">SDK Ready</h3>
<p className="text-[11px] text-neutral-500">Node, Python, Go</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] col-span-1 md:col-span-1 overflow-hidden group bg-[#0A0A0A] border-white/5 border rounded-3xl relative hover:border-violet-500/20 transition-colors p-6">
<div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full justify-end">
<iconify-icon className="text-violet-400 mb-4" icon="lucide:zap" width="24"></iconify-icon>
<h3 className="text-white text-lg font-medium">Fine-tuning</h3>
<p className="text-[10px] text-neutral-500 mt-1">Custom models in minutes</p>
</div>
</div>

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.7s_both] col-span-1 md:col-span-1 overflow-hidden group bg-[#0A0A0A] border-white/5 border rounded-3xl relative hover:border-violet-500/20 transition-colors p-6">
<div className="relative z-10 flex flex-col h-full justify-end">
<div className="flex -space-x-2 mb-4">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-black"></div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border border-black"></div>
<div className="w-8 h-8 rounded-full bg-neutral-600 border border-black flex items-center justify-center text-[10px] text-white">+4</div>
</div>
<h3 className="text-lg font-medium text-white">Collaboration</h3>
<p className="text-[10px] text-neutral-500 mt-1">Multi-user workspaces</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/5 bg-[#020202] py-32 overflow-hidden">

<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.2s_both]">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-300 mb-6">
<iconify-icon icon="lucide:activity" width="12"></iconify-icon>
              Performance Metrics
            </div>
<h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl mb-6">
              Unmatched
              <span className="text-neutral-500">Throughput.</span>
</h2>
<p className="leading-relaxed font-light text-neutral-400 max-w-lg mb-8">
                Experience industry-leading tokens per second. Our optimized inference engine minimizes time-to-first-token (TTFT) for seamless interactive applications.
            </p>

<div className="relative w-full rounded-2xl border border-white/10 bg-[#080808] p-6 mb-8 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<div>
<div className="text-xs font-semibold text-white">Inference Speed</div>
<div className="text-[10px] text-neutral-500 font-mono">Tokens / Second</div>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-violet-500"></div>
<span className="text-[10px] text-neutral-400">Synapse v2</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<span className="text-[10px] text-neutral-400">Competitor A</span>
</div>
</div>
</div>
<div className="h-[250px] w-full">
<canvas id="performanceChart"></canvas>
</div>
</div>

<div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
<div>
<div className="text-2xl font-medium text-white tracking-tight">145<span className="text-sm text-neutral-500 ml-1">tok/s</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Output Speed</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">12<span className="text-sm text-neutral-500 ml-1">ms</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Avg Latency</div>
</div>
<div className="">
<div className="text-2xl font-medium text-white tracking-tight">99.9<span className="text-sm text-neutral-500 ml-1">%</span></div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Uptime</div>
</div>
</div>
</div>

<div className="relative animate-on-scroll [animation:fadeInUp_0.8s_ease-out_0.4s_both]">

<div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#050505] aspect-[4/5] lg:aspect-square">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-[#050505]/80 to-transparent"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs">
<div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl p-5 shadow-2xl">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-neutral-400">status.log</span>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>
<div className="space-y-2 font-mono text-[10px]">
<div className="flex gap-2">
<span className="text-neutral-600">14:02:21</span>
<span className="text-violet-400">INFO</span>
<span className="text-neutral-300">Model loaded successfully</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">14:02:22</span>
<span className="text-blue-400">DEBUG</span>
<span className="text-neutral-300">Context context_length=32768</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">14:02:22</span>
<span className="text-green-400">SUCCESS</span>
<span className="text-neutral-300">Stream started (12ms)</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-violet-500 w-2/3 animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8">
<div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-4 flex items-center gap-4">
<div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-white">End-to-End Encrypted</h4>
<p className="text-[10px] text-neutral-500 mt-0.5">
                        Your data is never used for training without consent.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pb-12 pt-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4 group">
<div className="h-6 w-6 rounded bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:brain-circuit" width="14"></iconify-icon>
</div>
<span className="font-medium text-sm text-white tracking-tight">Synapse</span>
</div>
<p className="text-xs leading-relaxed text-neutral-500">
              Redefining the boundaries of machine creativity. Built for developers, designers, and visionaries.
            </p>
</div>
<div className="flex gap-16 text-xs text-neutral-500">
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Product</span>
<a className="hover:text-white transition-colors" href="#">Playground</a>
<a className="hover:text-white transition-colors" href="#">Models</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">API Docs</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Company</span>
<a className="hover:text-white transition-colors" href="#">Research</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-semibold text-white">Connect</span>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-8">
<p className="text-[10px] text-neutral-600">
            © 2024 Synapse AI Inc.
          </p>
<div className="flex gap-4 items-center">
<div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-green-500 font-medium">Systems Normal</span>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
