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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
modal: {
bg: '#0c0c0c',
card: '#161616',
border: '#2a2a2a',
green: '#3ee683',
greenDim: 'rgba(62, 230, 131, 0.1)',
text: '#e4e4e7',
muted: '#a1a1aa'
}
},
animation: {
'blink': 'blink 1s step-end infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
},
keyframes: {
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
pulseGlow: {
'0%, 100%': { boxShadow: '0 0 20px -5px rgba(62, 230, 131, 0.1)' },
'50%': { boxShadow: '0 0 30px 0px rgba(62, 230, 131, 0.3)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const canvas = document.getElementById('matrix-rain');
            const ctx = canvas.getContext('2d');

            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;

            // Characters to use (Katakana + Latin + Numbers for that authentic Matrix feel)
            const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
            const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const nums = '0123456789';
            const alphabet = katakana + latin + nums;

            const fontSize = 14;
            const columns = width / fontSize;

            const rainDrops = [];

            // Initialize drops
            for(let x = 0; x < columns; x++) {
                rainDrops[x] = Math.random() * height / fontSize; // Randomize start positions
            }

            const draw = () => {
                // Black with very low opacity to create the trail effect
                ctx.fillStyle = 'rgba(12, 12, 12, 0.05)'; 
                ctx.fillRect(0, 0, width, height);

                ctx.font = fontSize + 'px "JetBrains Mono", monospace';

                for(let i = 0; i < rainDrops.length; i++) {
                    // Random character
                    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                    
                    // Color logic: Head of the drop is brighter white/green, trail is modal green
                    const isHead = Math.random() > 0.95;
                    ctx.fillStyle = isHead ? '#ffffff' : '#3ee683'; // Modal Green or White

                    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                    if(rainDrops[i] * fontSize > height && Math.random() > 0.975){
                        rainDrops[i] = 0;
                    }
                    rainDrops[i]++;
                }
            };

            // Run animation
            const interval = setInterval(draw, 33);

            // Handle Resize
            window.addEventListener('resize', () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                // Re-initialize columns on resize to prevent gaps
                const newColumns = width / fontSize;
                // Preserve old drops where possible, add new ones
                for(let x = 0; x < newColumns; x++) {
                    if (!rainDrops[x]) rainDrops[x] = Math.random() * height / fontSize;
                }
            });
        });
    
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
      

<canvas className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none" id="matrix-rain"></canvas>

<div className="fixed inset-0 z-0 pointer-events-none opacity-30 grid-bg"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-modal-green rounded-[2px] flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(62,230,131,0.6)] transition-all duration-300">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="font-mono font-medium text-lg tracking-tighter text-white">MODAL</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm text-modal-muted font-medium">
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-modal-muted hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-1.5 rounded-[4px] hover:bg-modal-green hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" href="#">
                    Sign up
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-modal-green mb-8 shadow-[0_0_20px_rgba(62,230,131,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-modal-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-modal-green"></span>
</span>
<span className="tracking-wide">SYSTEM OPERATIONAL</span>
</div>
<h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                    The high-performance<br/>
<span className="text-modal-muted">serverless stack.</span>
</h1>
<p className="text-lg text-modal-muted mb-10 leading-relaxed font-light max-w-lg">
                    Run generative AI models, large-scale batch jobs, and job queues. Define container environments in code. No YAML, no hassle.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-modal-green text-black px-6 py-3 rounded-[4px] font-medium text-sm hover:shadow-[0_0_30px_rgba(62,230,131,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
<span>Deploy now</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-[4px] font-medium text-sm border border-white/10 hover:bg-white/5 hover:border-white/20 text-white transition-all flex items-center gap-2">
<iconify-icon className="text-modal-muted" icon="lucide:terminal" width="16"></iconify-icon>
<span>Read the docs</span>
</button>
</div>
<div className="mt-12 flex items-center gap-6 text-xs text-modal-muted font-mono">
<div className="flex items-center gap-2">
<iconify-icon className="text-modal-green" icon="lucide:check"></iconify-icon>
<span>Pythonic API</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-modal-green" icon="lucide:check"></iconify-icon>
<span>GPU Support</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-modal-green" icon="lucide:check"></iconify-icon>
<span>Instant Boot</span>
</div>
</div>
</div>

<div className="relative lg:h-[500px] w-full flex items-center justify-center animate-float" style={{animationDuration: '8s'}}>

<div className="absolute inset-0 bg-modal-green/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="w-full bg-[#0c0c0c]/90 border border-white/10 rounded-lg shadow-2xl overflow-hidden backdrop-blur-md relative group">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#111]">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="text-[10px] font-mono text-modal-muted flex items-center gap-2 opacity-60">
<iconify-icon icon="lucide:shield" width="12"></iconify-icon>
                            encrypted connection
                        </div>
</div>

<div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto relative">
<div className="flex gap-4">
<div className="flex flex-col text-right text-modal-muted/30 select-none">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
</div>
<div className="w-full">

<div>
<span className="code-token-keyword">import</span> modal<br/>
<br/>
                                    stub = modal.<span className="code-token-function">Stub</span>(<span className="code-token-string">"matrix-simulation"</span>)<br/>
<br/>
<span className="code-token-keyword">@stub.function</span>(<span className="code-token-keyword">gpu</span>=<span className="code-token-string">"H100"</span>)<br/>
<span className="code-token-keyword">def</span> <span className="code-token-function">enter_matrix</span>(user):<br/>
                                        print(<span className="code-token-string">f"Wake up, {user}..."</span>)<br/>
                                        <span className="code-token-keyword">return</span> <span className="code-token-function">NeuralLink</span>.connect()<br/>
<br/>
<span className="code-token-keyword">@stub.local_entrypoint</span>()<br/>
<span className="code-token-keyword">def</span> <span className="code-token-function">main</span>():<br/>
                                        enter_matrix.remote(<span className="code-token-string">"Neo"</span>)
                                </div>

<div className="mt-4 pt-4 border-t border-white/10 text-modal-green">
<div className="flex items-center gap-2 mb-2 opacity-50 text-[10px] uppercase tracking-widest">
                                        System Output
                                    </div>
<div className="opacity-90">
<span className="text-modal-muted">$</span> modal run matrix.py
                                    </div>
<div className="mt-2 text-modal-muted">
<span className="text-blue-400">✓</span> Verified identity.<br/>
<span className="text-blue-400">✓</span> Signal locked.<br/>
<span className="text-yellow-400">⠋</span> Uploading consciousness...<br/>
<span className="text-modal-green animate-pulse">Connected to H100 Cluster [128 nodes]</span>
</div>
<span className="inline-block w-2 h-4 bg-modal-green align-middle animate-blink ml-1"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.01] backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center group cursor-default">
<div className="text-3xl font-mono font-medium text-white mb-1 group-hover:text-modal-green group-hover:scale-110 transition-all duration-300">0.5s</div>
<div className="text-xs text-modal-muted uppercase tracking-wider">Cold Start</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl font-mono font-medium text-white mb-1 group-hover:text-modal-green group-hover:scale-110 transition-all duration-300">10k+</div>
<div className="text-xs text-modal-muted uppercase tracking-wider">GPUs Available</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl font-mono font-medium text-white mb-1 group-hover:text-modal-green group-hover:scale-110 transition-all duration-300">100TB</div>
<div className="text-xs text-modal-muted uppercase tracking-wider">Shared Volumes</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl font-mono font-medium text-white mb-1 group-hover:text-modal-green group-hover:scale-110 transition-all duration-300">99.9%</div>
<div className="text-xs text-modal-muted uppercase tracking-wider">Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6 relative">

<div className="mb-20 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-modal-green mb-6">
<iconify-icon icon="lucide:cpu" width="12"></iconify-icon>
<span>Infrastructure as Code</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                    Scale beyond limits. <br className="hidden sm:block" />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-modal-green to-emerald-400">Forget the hardware.</span>
</br></h2>
<p className="text-modal-muted text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Remove the friction of infrastructure. From prototype to production in minutes, not months.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-xl bg-modal-card/80 backdrop-blur-sm border border-modal-border hover:border-modal-green/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-modal-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#222] border border-white/10 flex items-center justify-center mb-6 text-modal-green group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:server" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Any GPU, instantly</h3>
<p className="text-sm text-modal-muted leading-relaxed">
                            Access H100s, A100s, A10Gs, and T4s within seconds. Pay only for the compute time you actually use.
                        </p>
</div>
</div>
<div className="group relative p-8 rounded-xl bg-modal-card/80 backdrop-blur-sm border border-modal-border hover:border-modal-green/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-modal-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#222] border border-white/10 flex items-center justify-center mb-6 text-modal-green group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:box-select" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Custom Environments</h3>
<p className="text-sm text-modal-muted leading-relaxed">
                            Define your container image in Python. pip install packages, apt-get dependencies, and bring your own Dockerfiles.
                        </p>
</div>
</div>
<div className="group relative p-8 rounded-xl bg-modal-card/80 backdrop-blur-sm border border-modal-border hover:border-modal-green/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-modal-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#222] border border-white/10 flex items-center justify-center mb-6 text-modal-green group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Sub-second cold starts</h3>
<p className="text-sm text-modal-muted leading-relaxed">
                            Our custom runtime boots containers in milliseconds, making serverless viable for latency-sensitive AI inference.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-12 bg-[#080808]/90 backdrop-blur relative z-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-modal-green rounded-[1px] flex items-center justify-center"></div>
<span className="font-mono font-bold tracking-tight text-white">MODAL</span>
</div>
<div className="text-zinc-600 font-mono text-xs">
                    © 2024 Modal Labs Inc. // EST. 2021
                </div>
<div className="flex items-center gap-2 text-modal-muted font-mono text-xs">
<span className="w-1.5 h-1.5 rounded-full bg-modal-green animate-pulse"></span>
                    ALL SYSTEMS OPERATIONAL
                </div>
</div>
</div>
</footer>



    </>
  );
}
