import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
p: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
950: '#030712', // Deepest black
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- Canvas Animation: The "Drift" vs "Keel" ---
        const canvas = document.getElementById('driftCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let time = 0;

        function resize() {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            time += 0.005;

            const centerY = height / 2;
            
            // 1. The Chaotic Path (The Market / Impulse)
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            for (let x = 0; x < width; x+=2) {
                // Noise based sine wave
                const y = centerY + Math.sin(x * 0.02 + time * 5) * (Math.sin(time) * 40 + 50) 
                          + Math.cos(x * 0.05 - time) * 20;
                ctx.lineTo(x, y);
            }
            ctx.strokeStyle = '#e5e7eb'; // very light gray
            ctx.lineWidth = 2;
            ctx.stroke();

            // 2. The Corrected Path (The Keel)
            // This line stays relatively straight, cutting through the noise
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            ctx.lineTo(width, centerY);
            ctx.strokeStyle = '#111827'; // Dark gray
            ctx.lineWidth = 1.5;
            // Dashed line to represent structure
            ctx.setLineDash([4, 4]); 
            ctx.stroke();
            ctx.setLineDash([]);

            // 3. Connection lines (The Correction)
            // Occasional lines connecting chaos to order
            if(Math.random() > 0.95) {
                const x = Math.random() * width;
                const noiseY = centerY + Math.sin(x * 0.02 + time * 5) * 50;
                ctx.beginPath();
                ctx.moveTo(x, noiseY);
                ctx.lineTo(x, centerY);
                ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)'; // Red hint
                ctx.stroke();
            }

            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', resize);
        resize();
        draw();

        // --- Scroll Observer ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-p-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-p-900" data-icon="lucide:anchor" data-width="16" strokeWidth="2"></span>
<span className="text-xs font-semibold tracking-tight text-p-900 uppercase">TradeKeel</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-p-500 hover:text-p-900 transition-colors" href="#manifesto">Manifesto</a>
<a className="text-xs font-medium text-p-500 hover:text-p-900 transition-colors" href="#system">The Constraint</a>
<a className="bg-p-900 text-white px-4 py-1.5 text-[10px] font-semibold tracking-wide uppercase rounded-sm hover:bg-p-800 transition-colors" href="#terminal">
                    Access Terminal
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 border-b border-p-200 overflow-hidden">
<div className="noise-bg"></div>
<div className="absolute inset-0 grid-bg z-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-40 pointer-events-none z-0">
<canvas className="w-full h-full" id="driftCanvas"></canvas>
</div>
<div className="relative z-10 max-w-2xl px-6 text-center">
<div className="reveal active inline-flex items-center gap-2 px-3 py-1 mb-8 border border-p-200 bg-white/50 backdrop-blur-sm rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest font-medium text-p-500">The Failure Mode of Discretion</span>
</div>
<h1 className="reveal active text-5xl md:text-7xl font-semibold tracking-tighter text-p-900 mb-8 leading-[0.95] text-balance">
                The problem isn't your strategy.<br/>
<span className="text-p-400">It's your biology.</span>
</h1>
<p className="reveal active text-sm md:text-base text-p-600 leading-relaxed max-w-lg mx-auto mb-10 text-balance">
                You know the rules, yet you break them. You have a plan, yet you improvise. 
                The market doesn't punish bad ideas; it punishes the lack of conviction in good ones.
            </p>
</div>
<div className="reveal active absolute bottom-12 flex flex-col items-center gap-2 opacity-40">
<span className="text-[10px] font-mono text-p-400 uppercase tracking-widest">Why you drift</span>
<div className="w-px h-12 bg-p-300"></div>
</div>
</section>

<section className="py-24 bg-white relative border-b border-p-200" id="manifesto">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
<div className="reveal">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-p-900 mb-6">
                        Freedom is the enemy.
                    </h2>
<div className="space-y-6 text-sm text-p-600 leading-relaxed">
<p>
                            Modern trading platforms are designed to reduce friction. They want you to trade faster, more often, and with less effort. They hand you a loaded weapon and remove the safety.
                        </p>
<p>
                            Dashboards visualize your failure. Alerts notify you of opportunities you shouldn't take. Journals record mistakes after they've destroyed your equity.
                        </p>
<p className="font-medium text-p-900">
                            None of these tools solve the core issue: In the heat of the moment, you are an unreliable narrator of reality.
                        </p>
</div>
</div>
<div className="reveal relative pt-2">

<div className="border border-p-200 bg-p-50 p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="iconify" data-icon="lucide:unlock" data-width="64"></span>
</div>
<h3 className="text-xs font-mono uppercase tracking-widest text-p-500 mb-4">The Standard Environment</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-p-700">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="14"></span>
                                Unrestricted execution
                            </li>
<li className="flex items-center gap-3 text-sm text-p-700">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="14"></span>
                                Override capabilities
                            </li>
<li className="flex items-center gap-3 text-sm text-p-700">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="14"></span>
                                Emotional bias ignored
                            </li>
<li className="flex items-center gap-3 text-sm text-p-700">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="14"></span>
                                Variance treated as skill
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-p-900 text-p-50 relative overflow-hidden" id="system">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(90deg, #4b5563 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<span className="reveal text-xs font-mono text-p-400 uppercase tracking-widest mb-4 block">The Intervention</span>
<h2 className="reveal text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-10">
                Discipline, Externalized.
            </h2>
<p className="reveal text-lg text-p-300 leading-relaxed max-w-2xl mx-auto mb-16">
                TradeKeel does not empower you. It restricts you.<br/>
                It is a structural layer that sits between your impulse and the market.
            </p>
<div className="reveal grid grid-cols-1 md:grid-cols-3 gap-px bg-p-700 border border-p-700">

<div className="bg-p-950 p-8 text-left hover:bg-p-900 transition-colors duration-300 group">
<span className="iconify text-p-400 mb-4 group-hover:text-white transition-colors" data-icon="lucide:shield-ban" data-width="20"></span>
<h3 className="text-sm font-semibold text-white mb-2">Immutable Gates</h3>
<p className="text-xs text-p-400 leading-relaxed">
                        Trades are rejected unless they match pre-validated logic. No intuition allowed.
                    </p>
</div>

<div className="bg-p-950 p-8 text-left hover:bg-p-900 transition-colors duration-300 group">
<span className="iconify text-p-400 mb-4 group-hover:text-white transition-colors" data-icon="lucide:brain-circuit" data-width="20"></span>
<h3 className="text-sm font-semibold text-white mb-2">Active Memory</h3>
<p className="text-xs text-p-400 leading-relaxed">
                        The system remembers your past failures and intervenes before you repeat them.
                    </p>
</div>

<div className="bg-p-950 p-8 text-left hover:bg-p-900 transition-colors duration-300 group">
<span className="iconify text-p-400 mb-4 group-hover:text-white transition-colors" data-icon="lucide:anchor" data-width="20"></span>
<h3 className="text-sm font-semibold text-white mb-2">Drift Prevention</h3>
<p className="text-xs text-p-400 leading-relaxed">
                        Deviation from the mean is detected immediately. The Keel forces you back to center.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-p-50 border-b border-p-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal p-8 md:p-12 border border-p-200 bg-white opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-p-300"></span>
<h3 className="text-xs font-mono uppercase tracking-widest text-p-500">Incompatible Profiles</h3>
</div>
<ul className="space-y-4">
<li className="text-sm text-p-500 line-through decoration-p-300">Discretionary "feel" traders</li>
<li className="text-sm text-p-500 line-through decoration-p-300">High-frequency scalpers needing 0ms latency</li>
<li className="text-sm text-p-500 line-through decoration-p-300">Those seeking excitement or dopamine</li>
</ul>
</div>

<div className="reveal p-8 md:p-12 border border-p-900 bg-white shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-p-900"></div>
<div className="flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-p-900"></span>
<h3 className="text-xs font-mono uppercase tracking-widest text-p-900">Target Profile</h3>
</div>
<ul className="space-y-4">
<li className="text-sm text-p-900 font-medium flex items-start gap-3">
<span className="iconify mt-0.5" data-icon="lucide:check" data-width="14"></span>
                            Traders who view variance as a liability.
                        </li>
<li className="text-sm text-p-900 font-medium flex items-start gap-3">
<span className="iconify mt-0.5" data-icon="lucide:check" data-width="14"></span>
                            Systems thinkers who want to be forced to follow rules.
                        </li>
<li className="text-sm text-p-900 font-medium flex items-start gap-3">
<span className="iconify mt-0.5" data-icon="lucide:check" data-width="14"></span>
                            Those willing to sacrifice autonomy for consistency.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="terminal">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="reveal text-3xl font-semibold tracking-tight text-p-900 mb-6">
                The Environment is Ready.
            </h2>
<p className="reveal text-sm text-p-600 mb-12 max-w-lg mx-auto leading-relaxed">
                By entering, you agree to submit your logic to the validation protocol. 
                Opinions are not currency here. Only data is.
            </p>

<div className="reveal mx-auto max-w-xl bg-p-950 rounded-md shadow-2xl border border-p-800 overflow-hidden text-left mb-12 transform hover:scale-[1.01] transition-transform duration-500">

<div className="bg-p-900 px-4 py-2 flex items-center gap-2 border-b border-p-800">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-p-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-p-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-p-700"></div>
</div>
<div className="ml-auto text-[9px] font-mono text-p-500">keel_terminal_v1</div>
</div>

<div className="p-6 font-mono text-[10px] md:text-xs text-p-300 space-y-2">
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span>initialize_session</span>
</div>
<div className="text-p-500 pl-4">Loading user profile... [OK]</div>
<div className="text-p-500 pl-4">Retrieving memory vectors... [OK]</div>
<div className="flex gap-2 pt-2">
<span className="text-green-500">➜</span>
<span>check_constraints</span>
</div>
<div className="text-p-500 pl-4">Daily drawdown limit: <span className="text-p-300">ACTIVE</span></div>
<div className="text-p-500 pl-4">Strategy validation: <span className="text-p-300">REQUIRED</span></div>
<div className="pt-4 flex gap-2 animate-pulse">
<span className="text-green-500">➜</span>
<span className="bg-p-300 text-p-950 px-1">AWAITING_INPUT</span>
</div>
</div>
</div>
<div className="reveal flex flex-col items-center gap-4">
<button className="bg-p-900 text-white px-8 py-3 text-xs font-semibold tracking-wide uppercase rounded hover:bg-p-800 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    Enter Terminal
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<span className="text-[10px] text-p-400">Strict access protocols apply.</span>
</div>
</div>
</section>

<footer className="border-t border-p-200 bg-p-50 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 grayscale">
<span className="iconify" data-icon="lucide:anchor" data-width="16"></span>
<span className="text-xs font-semibold tracking-tight uppercase">TradeKeel</span>
</div>
<p className="text-[10px] text-p-400 font-mono">
                © 2024 TradeKeel Systems. Variance Minimized.
            </p>
</div>
</footer>



    </>
  );
}
