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



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
},
plugins: []
};



    // WebGL Aurora Background - Finance/Crypto Palette
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const canvas = document.getElementById('aurora-canvas');
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.replaceWith(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '-10';

    const material = new THREE.ShaderMaterial({
        uniforms: {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
        fragmentShader: `
            uniform float iTime;
            uniform vec2 iResolution;
            #define NUM_OCTAVES 3
            float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
            float noise(vec2 p){
                vec2 ip = floor(p);
                vec2 u = fract(p);
                u = u*u*(3.0-2.0*u);
                float res = mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
                return res*res;
            }
            float fbm(vec2 x) {
                float v = 0.0;
                float a = 0.3;
                vec2 shift = vec2(100);    
                mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
                for (int i = 0; i < NUM_OCTAVES; ++i) {
                    v += a * noise(x);
                    x = rot * x * 2.0 + shift;
                    a *= 0.4;
                }
                return v;
            }
            void main() {
                vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
                vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
                vec4 o = vec4(0.0);
                float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
                for(float i = 0.0; i++ < 35.0;) {
                    vec2 v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5;
                    float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
                    vec4 auroraColors = vec4(0.05 + 0.1 * sin(i * 0.2), 0.3 + 0.2 * cos(i * 0.3), 0.2 + 0.2 * sin(i * 0.4), 1.0);
                    o += auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5))) * (1.0 + tailNoise * 0.8) * 0.6;
                }
                gl_FragColor = tanh(pow(o / 100.0, vec4(1.6))); 
            }
        `
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    function animate() {
        requestAnimationFrame(animate);
        material.uniforms.iTime.value += 0.016;
        renderer.render(scene, camera);
    }
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    });
    animate();
  


        // Initialize Lucide icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<canvas id="aurora-canvas" style={{display: 'block', width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', zIndex: '-10'}}></canvas>


</div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md bg-[#050505]/70 border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3 group select-none">

<div className="relative flex items-center justify-center w-9 h-9 rounded-[10px] bg-gradient-to-br shadow-[0_0_15px_-3px_rgba(132,204,22,0.4)] ring-1 transition-transform duration-300 group-hover:scale-105 from-lime-400 via-emerald-500 to-teal-600 ring-white/10">
<div className="absolute inset-0 bg-gradient-to-tr to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px] from-white/20"></div>
<svg className="w-5 h-5 drop-shadow-sm relative z-10 text-[#020617]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-[17px] font-semibold tracking-tight group-hover:text-lime-100 transition-colors text-white">ICoin</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-400">
<a className="transition-colors hover:text-lime-400" href="#about">About</a>
<a className="transition-colors hover:text-lime-400" href="#how-it-works">How It Works</a>
<a className="transition-colors hover:text-lime-400" href="#referral">Referral</a>
<a className="transition-colors hover:text-lime-400" href="#tokenomics">Tokenomics</a>
<a className="transition-colors hover:text-lime-400" href="#roadmap">Roadmap</a>
<a className="transition-colors hover:text-lime-400" href="#community">Community</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-stone-400 hover:text-white hover:bg-white/5 transition-colors" title="Command Palette">
<svg className="lucide lucide-search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
<a className="hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#bef264] hover:bg-[#a3e635] shadow-[0_0_20px_-5px_rgba(190,242,100,0.3)] text-black tracking-tight" href="#">
                    Invest Now
                </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] -z-10 pointer-events-none bg-emerald-900/20"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

<div className="flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-medium mb-8 backdrop-blur-sm bg-white/5 border-white/10 text-lime-200/80">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-lime-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                        ICN Token Live &amp; Automated
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-white">
                        Grow Your Wealth With <br/>
<span className="acid-gradient-text">Intelligent Investing.</span>
</h1>
<p className="text-lg lg:text-xl mb-4 leading-relaxed max-w-lg text-stone-400">
                        ICoin delivers automated earnings, powerful referral rewards, and long-term growth — powered by the native ICN Token.
                    </p>
<p className="text-xs text-stone-600 mb-10 font-mono">⚠️ Disclaimer: ICoin is NOT affiliated with OpenAI or any official AI provider.</p>
<div className="flex flex-wrap items-center gap-4 mb-16">
<button className="h-14 px-8 rounded-full hover:bg-[#a3e635] font-semibold transition-all shadow-[0_0_30px_-5px_rgba(190,242,100,0.4)] flex items-center gap-2 group bg-[#bef264] text-black tracking-tight">
                            Invest Now
                        </button>
<button className="h-14 px-8 rounded-full border font-medium transition-all backdrop-blur-sm flex items-center gap-2 border-white/10 bg-white/5 hover:bg-white/10 text-white">
                            View Tokenomics
                        </button>
</div>

<div className="grid grid-cols-3 gap-8 w-full max-w-lg border-t border-white/5 pt-8">
<div>
<div className="text-2xl font-mono text-white tracking-tight">$42M+</div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wide">Daily Volume</div>
</div>
<div>
<div className="text-2xl font-mono text-white tracking-tight">150K+</div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wide">Active Users</div>
</div>
<div>
<div className="text-2xl font-mono text-white tracking-tight">12.5%</div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wide">Avg. Monthly Yield</div>
</div>
</div>
</div>

<div className="relative flex justify-center lg:justify-end perspective-[1000px]">
<div className="absolute inset-0 bg-gradient-to-tr blur-[60px] rounded-full -z-10 transform scale-90 from-emerald-600/20 to-lime-600/20"></div>

<div className="absolute top-10 -left-8 z-20 animate-[float_6s_ease-in-out_infinite]">
<div className="glass-card p-4 rounded-2xl shadow-2xl w-60 transform -rotate-6 border border-white/10">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-emerald-500/20 rounded-lg text-emerald-300">
<svg className="lucide lucide-trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<div>
<div className="text-xs font-bold text-white">Yield Update</div>
<div className="text-[10px] text-stone-400">Smart Portfolio A</div>
</div>
</div>
</div>
<div className="text-2xl font-mono font-bold text-[#bef264] mb-1">+12.4%</div>
<div className="text-[10px] text-stone-400">Current month performance</div>
</div>
</div>

<div className="relative w-[320px] sm:w-[360px] h-[680px] bg-[#0a0a0a] rounded-[40px] border-[6px] border-[#202022] shadow-2xl overflow-hidden z-10 flex flex-col">

<div className="px-6 pt-4 pb-2 flex justify-between items-center text-[10px] font-medium text-stone-400">
<span>ICoin App</span>
<div className="flex gap-1.5">
<svg className="lucide lucide-wifi" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 0 1 10 10 4 4 0 0 1-4 4 6 6 0 0 1-12 0 4 4 0 0 1-4-4 10 10 0 0 1 10-10z"></path><path d="M12 8a6 6 0 0 1 6 6 2 2 0 0 1-2 2 4 4 0 0 1-8 0 2 2 0 0 1-2-2 6 6 0 0 1 6-6z"></path><path d="M12 14a2 2 0 0 1 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z"></path></svg>
</div>
</div>

<div className="px-4 py-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-[#bef264] text-black">ICN</div>
<div className="">
<div className="text-sm font-medium text-white">ICoin Assist</div>
<div className="text-[10px] text-emerald-400">Automated • Online</div>
</div>
</div>
</div>

<div className="flex-1 p-4 space-y-6 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b to-transparent pointer-events-none from-emerald-900/5"></div>

<div className="flex flex-col gap-1 items-end">
<div className="bg-[#27272a] self-end rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] border border-white/5">
<p className="text-xs leading-relaxed text-stone-200">How much can I earn with the Platinum plan?</p>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="chat-bubble-gradient self-start rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%] shadow-lg shadow-emerald-900/20">
<p className="text-xs leading-relaxed text-white">Returns vary by market conditions, but Platinum tier investors currently see ~15-18% APY. Plus, you earn bonus ICN tokens on every deposit.</p>
</div>
</div>

<div className="flex flex-col gap-1 items-end">
<div className="bg-[#27272a] self-end rounded-2xl rounded-tr-none px-4 py-3 max-w-[85%] border border-white/5">
<p className="text-xs leading-relaxed text-stone-200">Is there a referral system?</p>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="chat-bubble-gradient self-start rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%] shadow-lg shadow-emerald-900/20">
<p className="text-xs leading-relaxed text-white">Yes! You earn 5% commissions on direct invites and 2% on secondary levels. Here is your dashboard:</p>
</div>
<div className="bg-[#18181b] rounded-xl p-3 border border-lime-500/20 relative overflow-hidden group ml-1 w-[80%]">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#bef264]"></div>
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-medium uppercase tracking-wide text-[#bef264]">Referral Earnings</span>
</div>
<p className="text-lg font-mono font-bold text-white">2,450 ICN</p>
<p className="text-[10px] text-stone-500 mt-0.5">~$1,225 USD Value</p>
</div>
</div>
</div>

<div className="p-4 bg-[#0a0a0a] border-t z-20 border-white/5">
<div className="flex items-center gap-3">
<div className="flex-1 bg-[#18181b] h-9 rounded-full px-4 flex items-center text-xs text-stone-500 border border-white/5">
                                    Ask about staking...
                                </div>
<button className="w-9 h-9 rounded-full flex items-center justify-center transition-all bg-lime-900/20 text-lime-400">
<svg className="lucide lucide-arrow-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
<div className="flex justify-center mt-4 mb-1">
<div className="w-32 h-1 rounded-full bg-white/20"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-white/[0.01] border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                        The Future of <br/> <span className="text-lime-400">Intelligent Investing</span>
</h2>
<p className="text-lg mb-6 leading-relaxed text-stone-400">
                        ICoin isn't just a token; it's a complete automated investment ecosystem. We combine diversified, algorithm-assisted strategies with a powerful community-driven growth model.
                    </p>
<div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 mb-8">
<p className="text-xs text-red-300 font-mono">⚠️ Disclaimer: ICoin is a financial technology platform and is NOT affiliated with OpenAI, ChatGPT, or any official AI provider.</p>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-lime-500/10 p-2 rounded text-lime-400">
<svg className="lucide lucide-bot" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Automated Earnings</h4>
<p className="text-sm text-stone-400">Set your risk profile and let our protocols manage diversification.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-lime-500/10 p-2 rounded text-lime-400">
<svg className="lucide lucide-wallet" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Fast Withdrawals</h4>
<p className="text-sm text-stone-400">Access your capital instantly. Liquidity is always priority #1.</p>
</div>
</li>
</ul>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-lime-500/10 to-emerald-500/10 blur-3xl rounded-full opacity-40"></div>
<div className="relative border rounded-2xl p-1 bg-[#0a0a0a] border-white/5 overflow-hidden">
<div className="grid grid-cols-2 gap-px bg-white/5">
<div className="bg-[#0c0c0e] p-8 flex flex-col items-center text-center">
<span className="text-4xl font-mono text-white mb-2 font-light">12%</span>
<span className="text-xs text-stone-500 uppercase tracking-widest">Target APY</span>
</div>
<div className="bg-[#0c0c0e] p-8 flex flex-col items-center text-center">
<span className="text-4xl font-mono text-lime-400 mb-2 font-light">0%</span>
<span className="text-xs text-stone-500 uppercase tracking-widest">Management Fees</span>
</div>
<div className="bg-[#0c0c0e] p-8 flex flex-col items-center text-center">
<span className="text-4xl font-mono text-emerald-400 mb-2 font-light">24/7</span>
<span className="text-xs text-stone-500 uppercase tracking-widest">Monitoring</span>
</div>
<div className="bg-[#0c0c0e] p-8 flex flex-col items-center text-center">
<span className="text-4xl font-mono text-white mb-2 font-light">ICN</span>
<span className="text-xs text-stone-500 uppercase tracking-widest">Native Token</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Why Invest in ICoin?</h2>
<p className="text-stone-400 max-w-2xl mx-auto">Institutional-grade strategies accessible to everyone. Secure, transparent, and rewarding.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border bg-[#0a0a0a] border-white/5 hover:border-lime-500/30 transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-4 group-hover:text-lime-400 transition-colors text-white">
<svg className="lucide lucide-bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">High Return Potential</h3>
<p className="text-sm text-stone-400 leading-relaxed">Our automated strategies adapt to market volatility to maximize yield while protecting principal.</p>
</div>

<div className="p-6 rounded-2xl border bg-[#0a0a0a] border-white/5 hover:border-emerald-500/30 transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-4 group-hover:text-emerald-400 transition-colors text-white">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Secure &amp; Transparent</h3>
<p className="text-sm text-stone-400 leading-relaxed">Blockchain-verified transactions and real-time dashboard metrics ensure you always know where your money is.</p>
</div>

<div className="p-6 rounded-2xl border bg-[#0a0a0a] border-white/5 hover:border-teal-500/30 transition-all group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-4 group-hover:text-teal-400 transition-colors text-white">
<svg className="lucide lucide-users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 19a6 6 0 0 0-12 0"></path><circle cx="8" cy="9" r="4"></circle><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Referral Rewards</h3>
<p className="text-sm text-stone-400 leading-relaxed">Earn significant commissions by inviting others. The more the network grows, the more you earn.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-[#0a0a0a] border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 text-center relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
<span className="text-2xl font-bold text-white">1</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Create Account</h3>
<p className="text-sm text-stone-400">Connect your wallet or sign up via email in seconds.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-[#111] border border-lime-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(190,242,100,0.2)]">
<span className="text-2xl font-bold text-lime-400">2</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Choose Plan</h3>
<p className="text-sm text-stone-400">Select a staking or investment plan that fits your goals.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
<span className="text-2xl font-bold text-white">3</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Earn &amp; Withdraw</h3>
<p className="text-sm text-stone-400">Receive daily returns in ICN or USDT and withdraw anytime.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="referral">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-teal-500/10 border-teal-500/20 text-teal-300">
                        Available Now
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                        Earn More With <br/> Every Invite.
                    </h2>
<p className="text-lg text-stone-400 mb-8">
                        Our multi-level referral program is designed to reward community builders. Track your network, view earnings in real-time, and get paid instantly in ICN.
                    </p>
<div className="space-y-4 mb-8">

<div className="flex gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-800">
<svg className="lucide lucide-user text-stone-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="rounded-2xl rounded-tl-none p-4 w-full border bg-neutral-900/50 border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-stone-500">User Command</span>
</div>
<p className="text-sm text-stone-300">Check my referral commission for this week.</p>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg bg-[#bef264]">
<svg className="lucide lucide-coins text-black" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div className="border border-emerald-500/20 rounded-2xl rounded-tr-none p-4 w-full bg-emerald-900/20">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-emerald-400">System Response</span>
</div>
<p className="text-sm text-emerald-100">You have earned <span className="font-bold">1,250 ICN</span> from 5 active referrals this week. Wallet updated.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-lime-500/10 blur-[80px] rounded-full opacity-30"></div>
<div className="glass-card p-8 rounded-2xl border border-white/10 relative z-10">
<div className="flex justify-between items-center mb-8">
<h3 className="text-white font-medium">Referral Network</h3>
<span className="text-xs bg-lime-500/20 text-lime-300 px-2 py-1 rounded">Level 1 Active</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full bg-[#bef264] flex items-center justify-center shadow-[0_0_20px_rgba(190,242,100,0.5)] z-10">
<span className="font-bold text-black">YOU</span>
</div>
<div className="h-8 w-px bg-gradient-to-b from-[#bef264] to-white/20"></div>
<div className="grid grid-cols-3 gap-8 w-full">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/20 flex items-center justify-center mb-2 text-white text-xs">A</div>
<div className="text-[10px] text-lime-400">+50 ICN</div>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/20 flex items-center justify-center mb-2 text-white text-xs">B</div>
<div className="text-[10px] text-lime-400">+120 ICN</div>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/20 flex items-center justify-center mb-2 text-white text-xs">C</div>
<div className="text-[10px] text-stone-500">Pending</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-[#0a0a0a] border-white/5" id="tokenomics">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">ICN Tokenomics</h2>
<p className="text-stone-400">A balanced distribution designed for long-term sustainability.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="grid grid-cols-2 gap-4">
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5">
<div className="text-xs text-stone-500 uppercase tracking-wide mb-1">Token Name</div>
<div className="text-xl font-medium text-white">ICoin</div>
</div>
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5">
<div className="text-xs text-stone-500 uppercase tracking-wide mb-1">Symbol</div>
<div className="text-xl font-medium text-lime-400">ICN</div>
</div>
<div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 col-span-2">
<div className="text-xs text-stone-500 uppercase tracking-wide mb-1">Contract Address</div>
<div className="flex items-center justify-between">
<code className="text-sm text-stone-300 font-mono">0x7aC...92B4</code>
<button className="text-xs text-lime-400 hover:text-lime-300">Copy</button>
</div>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4">Vesting Schedule</h4>
<div className="relative pl-6 border-l border-white/10 space-y-6">
<div className="relative">
<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-lime-500"></span>
<div className="text-sm text-white">TGE (Token Gen Event)</div>
<div className="text-xs text-stone-500">10% Unlocked for Liquidity</div>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-stone-700"></span>
<div className="text-sm text-white">Month 6</div>
<div className="text-xs text-stone-500">Team Vesting Begins (Linear)</div>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-stone-700"></span>
<div className="text-sm text-white">Month 12</div>
<div className="text-xs text-stone-500">Ecosystem Rewards Fully Active</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center relative">

<div className="w-64 h-64 rounded-full relative" style="background: conic-gradient(
                            #10b981 0% 40%, 
                            #bef264 40% 65%, 
                            #0d9488 65% 80%, 
                            #3f3f46 80% 100%
                         );">
<div className="absolute inset-4 bg-[#0a0a0a] rounded-full flex items-center justify-center flex-col">
<span className="text-3xl font-bold text-white">100M</span>
<span className="text-xs text-stone-500">Total Supply</span>
</div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur p-4 rounded-xl border border-white/10 text-xs space-y-2">
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500 rounded-sm"></div> <span className="text-stone-300">40% Ecosystem</span></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#bef264] rounded-sm"></div> <span className="text-stone-300">25% Liquidity</span></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-teal-600 rounded-sm"></div> <span className="text-stone-300">15% Team</span></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-zinc-700 rounded-sm"></div> <span className="text-stone-300">20% Rewards</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b bg-white/[0.01] border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-sm font-mono text-lime-400 mb-8 flex items-center gap-2">
<span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-lime-400"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span></span>
                Live Network Stats
            </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-mono text-white mb-1">12,405</div>
<div className="text-xs text-stone-500">Active Investors</div>
</div>
<div>
<div className="text-3xl font-mono text-white mb-1">$8.2M</div>
<div className="text-xs text-stone-500">Total Returns Paid</div>
</div>
<div>
<div className="text-3xl font-mono text-white mb-1">450K</div>
<div className="text-xs text-stone-500">ICN Staked</div>
</div>
<div>
<div className="text-3xl font-mono text-white mb-1">24/7</div>
<div className="text-xs text-stone-500">System Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="roadmap">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 text-center">Roadmap</h2>
<div className="grid md:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl border bg-[#0a0a0a] border-lime-500/50 relative">
<div className="absolute top-4 right-4 text-lime-400"><svg className="lucide lucide-check-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg></div>
<div className="text-xs font-mono text-lime-400 mb-2">Phase 1</div>
<h4 className="text-white font-medium mb-2">Platform Launch</h4>
<p className="text-xs text-stone-400">Core investment engine, Wallet integration, Basic dashboard.</p>
</div>
<div className="p-6 rounded-2xl border bg-[#0a0a0a] border-lime-500/20 relative">
<div className="absolute top-4 right-4 text-lime-400 animate-pulse"><svg className="lucide lucide-loader" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg></div>
<div className="text-xs font-mono text-white mb-2">Phase 2</div>
<h4 className="text-white font-medium mb-2">Referral Engine</h4>
<p className="text-xs text-stone-400">Multi-level tracking, Commission payouts, Leaderboards.</p>
</div>
<div className="p-6 rounded-2xl border bg-[#0a0a0a] border-white/5 opacity-60">
<div className="text-xs font-mono text-stone-500 mb-2">Phase 3</div>
<h4 className="text-white font-medium mb-2">ICN Ecosystem</h4>
<p className="text-xs text-stone-400">Staking V2, Governance voting, Mobile App Beta.</p>
</div>
<div className="p-6 rounded-2xl border bg-[#0a0a0a] border-white/5 opacity-60">
<div className="text-xs font-mono text-stone-500 mb-2">Phase 4</div>
<h4 className="text-white font-medium mb-2">Global Scaling</h4>
<p className="text-xs text-stone-400">Institutional partnerships, Cross-chain bridges.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-[#0a0a0a] border-white/5" id="community">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium text-white mb-6">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group border border-white/5 rounded-lg bg-neutral-900/30 open:bg-neutral-900/50">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-stone-300 group-open:text-white list-none">
                                How do I start investing?
                                <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-stone-400 text-sm p-4 pt-0 leading-relaxed">
                                Simply connect your wallet, purchase ICN or deposit USDT, and select an investment plan. Rewards start generating automatically every 24 hours.
                            </div>
</details>
<details className="group border border-white/5 rounded-lg bg-neutral-900/30">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-stone-300 group-open:text-white list-none">
                                Is there a lock-up period?
                                <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-stone-400 text-sm p-4 pt-0 leading-relaxed">
                                Basic plans have no lock-up. Premium high-yield plans may require a 30-day staking period for maximum returns.
                            </div>
</details>
<details className="group border border-white/5 rounded-lg bg-neutral-900/30">
<summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-medium text-stone-300 group-open:text-white list-none">
                                How does the referral bonus work?
                                <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-stone-400 text-sm p-4 pt-0 leading-relaxed">
                                Share your unique link. When someone invests using your link, you instantly receive 5% of their deposit in ICN tokens directly to your wallet.
                            </div>
</details>
</div>
</div>

<div className="flex flex-col justify-center items-center text-center p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent">
<h3 className="text-2xl font-medium text-white mb-4">Join the ICoin Community</h3>
<p className="text-stone-400 mb-8 max-w-sm">Connect with 150,000+ investors, get real-time signals, and participate in governance.</p>
<div className="flex flex-wrap justify-center gap-4">
<button className="px-6 py-3 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium text-sm transition-colors flex items-center gap-2">
                            Discord
                        </button>
<button className="px-6 py-3 rounded-full bg-[#229ED9] hover:bg-[#1d8ebf] text-white font-medium text-sm transition-colors flex items-center gap-2">
                            Telegram
                        </button>
<button className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors flex items-center gap-2">
<svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                            Twitter / X
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 bg-[#050505] border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="bg-gradient-to-br from-lime-500 to-emerald-600 w-6 h-6 rounded flex items-center justify-center text-black font-bold text-xs">I</div>
<span className="text-lg font-bold text-white">ICoin</span>
</div>
<p className="text-sm text-stone-500 max-w-xs">
                        The next generation of automated wealth creation. Secure, transparent, and decentralized.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-lime-400" href="#">Invest</a></li>
<li><a className="hover:text-lime-400" href="#">Tokenomics</a></li>
<li><a className="hover:text-lime-400" href="#">Roadmap</a></li>
<li><a className="hover:text-lime-400" href="#">Whitepaper</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white" href="#">Terms of Service</a></li>
<li><a className="hover:text-white" href="#">Risk Disclosure</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-stone-600">
                    © 2024 ICoin Protocol. All rights reserved.
                </div>
<div className="text-xs text-stone-600 font-mono text-center md:text-right">
                    ⚠️ Disclaimer: ICoin is NOT affiliated with OpenAI or any official AI provider. <br/>
                    Cryptocurrency investments carry inherent risks.
                </div>
</div>
</div>
</footer>


    </>
  );
}
