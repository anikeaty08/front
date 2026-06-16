import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Inter"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
colors: {
bg: '#050505',
surface: '#0A0A0A',
surfaceHighlight: '#121212',
border: '#262626',
borderHighlight: '#404040',
text: '#E5E5E5',
subtle: '#A3A3A3',
accent: '#FFFFFF',
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        // Dark fog for seamless blending
        scene.fog = new THREE.FogExp2(0x050505, 0.03);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Particle System
        const geometry = new THREE.BufferGeometry();
        const count = 1500;
        const positions = new Float32Array(count * 3);
        
        for(let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 25; // Spread particles
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Material - Simple white dots
        const material = new THREE.PointsMaterial({
            size: 0.03,
            color: 0x444444,
            transparent: true,
            opacity: 0.6,
        });
        
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Animation
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (event) => {
            mouseX = event.clientX / window.innerWidth - 0.5;
            mouseY = event.clientY / window.innerHeight - 0.5;
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            
            // Subtle rotation
            particles.rotation.y += 0.0005;
            particles.rotation.x += 0.0002;

            // Mouse interaction parallax
            camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;

            renderer.render(scene, camera);
        };

        animate();
    


        (function(){
            const section = document.getElementById('protocol-flow');
            const header = document.getElementById('flow-header');
            const line = document.getElementById('flow-line');
            const steps = section.querySelectorAll('.flow-step');

            function handleScroll() {
                if (!section) return;
                const rect = section.getBoundingClientRect();
                const viewH = window.innerHeight;
                
                // Total distance the section stays pinned
                const travelDistance = rect.height - viewH;
                
                // How far have we scrolled into the section
                const scrolled = -rect.top;
                
                let progress = scrolled / travelDistance;
                progress = Math.max(0, Math.min(1, progress));

                // Fade header
                if (progress > 0.05) header.style.opacity = '1';
                else header.style.opacity = '0';

                // Draw Line
                line.style.height = (progress * 100) + '%';

                // Activate Steps
                steps.forEach(step => {
                    const t = parseFloat(step.dataset.threshold);
                    // Add a small buffer for activation
                    if (progress >= t) {
                        if (progress < t + 0.18) {
                            // Current Active Step
                            step.classList.add('active');
                            step.classList.replace('opacity-20', 'opacity-100');
                            step.style.transform = 'scale(1.02)';
                        } else {
                            // Passed Step (dim it slightly but keep it visible)
                            step.classList.add('active');
                            step.classList.replace('opacity-20', 'opacity-50');
                            step.style.transform = 'scale(1)';
                        }
                    } else {
                        // Future Step
                        step.classList.remove('active');
                        step.classList.replace('opacity-100', 'opacity-20');
                        step.classList.replace('opacity-50', 'opacity-20');
                        step.style.transform = 'scale(1)';
                    }
                });
            };

            window.addEventListener('scroll', handleScroll, {passive: true});
            handleScroll(); // Init
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 opacity-40 pointer-events-none" id="canvas-container"></div>
<div className="fixed inset-0 z-0 tech-grid pointer-events-none"></div>

<header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 border-b border-white/5 glass transition-all duration-300">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="text-white group-hover:rotate-90 transition-transform duration-700">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-mono text-sm font-semibold tracking-tight text-white">PROTOCOL<span className="text-subtle">_ZERO</span></span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-subtle hover:text-white transition-colors" href="#">Manifesto</a>
<a className="text-xs font-medium text-subtle hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-xs font-medium text-subtle hover:text-white transition-colors" href="#">Github</a>
</nav>
<div className="flex items-center gap-4">
<button className="group relative overflow-hidden bg-white text-black text-xs font-semibold px-5 py-2 rounded hover:bg-neutral-200 transition-all">
<span className="relative z-10 flex items-center gap-2">
                        Initialize Agent
                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 px-6 border-b border-border/50">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-mono text-[10px] tracking-wide text-subtle uppercase">Mainnet Alpha Live</span>
</div>
<h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9]">
                    Privacy is <br/>
<span className="text-subtle font-light">Programmable.</span>
</h1>
<p className="max-w-md font-sans text-base text-subtle leading-relaxed">
                    The first playbook for AI agents that respects secrecy. 
                    Define behavior in <span className="font-mono text-xs bg-white/10 px-1 rounded text-white">SKILLS.md</span>. 
                    Execute via ZK-proofs. Your secrets never leave your machine.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="group relative px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-all flex items-center gap-2">
<span>Read the Schema</span>
<iconify-icon icon="solar:file-text-linear" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 border border-white/10 text-white text-sm font-medium rounded hover:bg-white/5 transition-all flex items-center gap-2 font-mono">
                        $ npm install @protocol/zero
                    </button>
</div>
</div>

<div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-purple-500/10 blur-[100px] rounded-full"></div>
<div className="w-full h-full bg-surface border border-border rounded-xl shadow-2xl overflow-hidden relative group">

<div className="h-10 border-b border-border flex items-center px-4 gap-2 bg-surfaceHighlight">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-border"></div>
<div className="w-2.5 h-2.5 rounded-full bg-border"></div>
</div>
<span className="ml-auto font-mono text-[10px] text-subtle">SKILLS.md</span>
</div>

<div className="p-6 font-mono text-xs leading-relaxed text-subtle">
<div className="flex gap-4">
<span className="text-white/20 select-none">01</span>
<span className="text-purple-400"># Skill: Private Token Swap</span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">02</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">03</span>
<span className="text-blue-400">trigger:</span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">04</span>
<span className="pl-4 text-emerald-300">phrase: "Swap tokens privately"</span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">05</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">06</span>
<span className="text-blue-400">execution:</span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">07</span>
<span className="pl-4 text-white">type: zk_proof</span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">08</span>
<span className="pl-4 text-white">prover: ./bin/groth16_prover</span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">09</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">10</span>
<span className="text-red-400">constraints:</span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">11</span>
<span className="pl-4 text-subtle">- <span className="text-white">NEVER_LOG_SECRETS</span></span>
</div>
<div className="flex gap-4">
<span className="text-white/20 select-none">12</span>
<span className="pl-4 text-subtle">- <span className="text-white">VERIFY_WITNESS_LOCAL</span></span>
</div>
<div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
<span className="text-emerald-500 flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Validated
                            </span>
<span className="typing-cursor text-white">Generating Proof...</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-bg border-b border-border/50" id="protocol-flow" style={{height: '400vh'}}>
<div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
<div className="max-w-5xl w-full px-6 relative z-10 flex flex-col items-center h-full py-20">

<div className="text-center mb-12 shrink-0 transition-opacity duration-700" id="flow-header">
<h2 className="font-sans text-3xl md:text-4xl font-medium text-white tracking-tight mb-3">
                        The Privacy Pipeline
                    </h2>
<p className="text-subtle text-sm font-mono uppercase tracking-wider">From intent to immutable proof</p>
</div>
<div className="relative w-full max-w-4xl flex-1 flex flex-col justify-center my-auto">

<div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/5 -translate-x-1/2"></div>
<div className="absolute left-1/2 top-4 w-px bg-white -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)] shadow-[0_0_15px_rgba(255,255,255,0.5)]" id="flow-line"></div>
<div className="space-y-24 py-8 relative">

<div className="flow-step group flex items-center justify-between w-full opacity-20 transition-all duration-500" data-threshold="0.1">
<div className="w-[42%] text-right pr-12">
<span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest block mb-2">01 Definition</span>
<h3 className="font-sans text-xl font-medium text-white mb-2">The Playbook</h3>
<p className="text-sm text-subtle leading-relaxed">
                                    We create a <span className="text-white font-mono bg-white/10 px-1 rounded">SKILLS.md</span> file. It tells the AI exactly what to do, defining private swaps and shielded trades without ambiguity.
                                </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-4 h-4 rounded-full border border-white/20 bg-bg group-[.active]:border-white group-[.active]:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
</div>
<div className="w-[42%] pl-12">
<div className="bg-surfaceHighlight border border-white/10 p-4 rounded-lg w-fit">
<iconify-icon className="text-white mb-2" icon="solar:document-text-linear" width="32"></iconify-icon>
<div className="space-y-1">
<div className="h-1.5 w-24 bg-white/20 rounded"></div>
<div className="h-1.5 w-16 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>

<div className="flow-step group flex items-center justify-between w-full opacity-20 transition-all duration-500" data-threshold="0.25">
<div className="w-[42%] text-right pr-12 flex justify-end">
<div className="bg-surfaceHighlight border border-white/10 px-4 py-3 rounded-t-lg rounded-bl-lg w-fit">
<p className="text-sm text-white font-medium">"Swap 1000 USDC privately."</p>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-4 h-4 rounded-full border border-white/20 bg-bg group-[.active]:border-white group-[.active]:bg-white transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-12">
<span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest block mb-2">02 Recognition</span>
<h3 className="font-sans text-xl font-medium text-white mb-2">Intent &amp; Validate</h3>
<p className="text-sm text-subtle leading-relaxed">
                                    The bot reads the playbook. It validates inputs locally against the schema. No data hits the network yet.
                                </p>
</div>
</div>

<div className="flow-step group flex items-center justify-between w-full opacity-20 transition-all duration-500" data-threshold="0.45">
<div className="w-[42%] text-right pr-12">
<span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest block mb-2">03 Execution</span>
<h3 className="font-sans text-xl font-medium text-white mb-2">The Black Box</h3>
<p className="text-sm text-subtle leading-relaxed">
                                    The local ZK prover runs as a black box. <span className="text-white">Secrets in, Proof out.</span> The AI never prints the witness.
                                </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-4 h-4 rounded-full border border-white/20 bg-bg group-[.active]:border-white group-[.active]:bg-white transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-12">
<div className="w-16 h-16 bg-black border border-white/20 rounded flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/50 transition-colors">
<div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-[.active]:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white z-10" icon="solar:lock-password-unlocked-linear" width="32"></iconify-icon>
</div>
</div>
</div>

<div className="flow-step group flex items-center justify-between w-full opacity-20 transition-all duration-500" data-threshold="0.65">
<div className="w-[42%] text-right pr-12 flex justify-end">
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-red-400 font-mono justify-end">
<span>Never log secrets</span> <iconify-icon icon="solar:close-circle-bold"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-xs text-emerald-400 font-mono justify-end">
<span>Only submit proofs</span> <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>
<div className="relative shrink-0 z-10">
<div className="w-4 h-4 rounded-full border border-white/20 bg-bg group-[.active]:border-white group-[.active]:bg-white transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-12">
<span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest block mb-2">04 Safety</span>
<h3 className="font-sans text-xl font-medium text-white mb-2">Enforced by Design</h3>
<p className="text-sm text-subtle leading-relaxed">
                                    Useful, not dangerous. Progressive disclosure loads only what is needed: <span className="font-mono text-xs">SCHEMA</span>, <span className="font-mono text-xs">EXAMPLES</span>, <span className="font-mono text-xs">SECURITY</span>.
                                </p>
</div>
</div>

<div className="flow-step group flex items-center justify-between w-full opacity-20 transition-all duration-500" data-threshold="0.85">
<div className="w-[42%] text-right pr-12">
<span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest block mb-2">05 Growth</span>
<h3 className="font-sans text-xl font-medium text-white mb-2">Narrative as Demand</h3>
<p className="text-sm text-subtle leading-relaxed">
                                    Once the agent works, the skill becomes a feature. The feature drives the token. You aren't just launching a coin, you're launching programmable behavior.
                                </p>
</div>
<div className="relative shrink-0 z-10">
<div className="w-4 h-4 rounded-full border border-white/20 bg-bg group-[.active]:border-white group-[.active]:bg-white transition-colors duration-300"></div>
</div>
<div className="w-[42%] pl-12">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded font-mono text-xs font-bold">
<span>$DEGEN</span>
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-surface relative">
<div className="max-w-7xl mx-auto">
<div className="mb-20 max-w-2xl">
<h2 className="font-sans text-4xl font-medium text-white tracking-tight mb-6">
                    Structured Reasoning. <br/>
<span className="text-subtle">Zero Leakage.</span>
</h2>
<p className="text-subtle text-lg leading-relaxed">
                    Most agents are black boxes that leak data. Protocol Zero isolates the reasoning layer from the execution layer using client-side proofs.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group relative bg-bg border border-border rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 tech-grid opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-surfaceHighlight border border-white/10 rounded flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Local Prover</h3>
<p className="text-subtle max-w-md">Run the ZK circuit locally. The network only sees the verified output (the transaction), never the inputs (your strategy).</p>
</div>

<div className="mt-12 w-full h-32 relative border-t border-border flex items-center justify-around font-mono text-xs">
<div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
<span>Input</span>
</div>
<div className="h-px flex-1 bg-border relative mx-4">
<div className="absolute inset-0 bg-white w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
</div>
<div className="w-24 h-12 border border-emerald-500/30 bg-emerald-500/5 rounded flex items-center justify-center text-emerald-400">
                                PROVER
                            </div>
<div className="h-px flex-1 bg-border relative mx-4">
<div className="absolute inset-0 bg-white w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-500 origin-left"></div>
</div>
<div className="flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity delay-700">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
<span>Chain</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 group relative bg-bg border border-border rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="p-10 h-full flex flex-col">
<div className="w-10 h-10 bg-surfaceHighlight border border-white/10 rounded flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Modular Logic</h3>
<p className="text-sm text-subtle mb-8">
                            Load only what you need. <span className="text-white">SKILLS</span> define what, <span className="text-white">SCHEMA</span> defines format.
                        </p>
<div className="mt-auto space-y-2">
<div className="flex items-center gap-3 p-3 bg-surfaceHighlight border border-border rounded text-xs font-mono text-subtle group-hover:translate-x-2 transition-transform duration-300">
<iconify-icon icon="solar:file-text-linear"></iconify-icon> SKILLS.md
                            </div>
<div className="flex items-center gap-3 p-3 bg-surfaceHighlight border border-border rounded text-xs font-mono text-subtle group-hover:translate-x-2 transition-transform duration-300 delay-75">
<iconify-icon icon="solar:code-file-linear"></iconify-icon> SCHEMA.json
                            </div>
<div className="flex items-center gap-3 p-3 bg-surfaceHighlight border border-border rounded text-xs font-mono text-subtle group-hover:translate-x-2 transition-transform duration-300 delay-150">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon> SECURITY.md
                            </div>
</div>
</div>
</div>

<div className="md:col-span-12 group relative bg-[#0D0D0D] border border-border rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<h3 className="text-2xl font-medium text-white mb-4">Launch a Programmable Narrative</h3>
<p className="text-subtle leading-relaxed mb-6">
                                You aren't just deploying a token. You are deploying a verifiable agent with specific instructions on how to create value.
                             </p>
<button className="text-white border-b border-white pb-1 text-sm hover:opacity-70 transition-opacity">View Example Repo</button>
</div>
<div className="flex-1 w-full max-w-xl">
<div className="rounded-lg bg-black border border-white/10 p-4 font-mono text-[10px] md:text-xs text-subtle shadow-2xl">
<div className="flex gap-2 mb-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<p className="mb-1"><span className="text-purple-400">const</span> agent = <span className="text-yellow-200">new</span> <span className="text-blue-300">PrivacyAgent</span>({</p>
<p className="pl-4 mb-1">skills: <span className="text-emerald-300">"./SKILLS.md"</span>,</p>
<p className="pl-4 mb-1">proofType: <span className="text-emerald-300">"groth16"</span>,</p>
<p className="pl-4 mb-1">chain: <span className="text-emerald-300">"mainnet"</span></p>
<p className="mb-1">});</p>
<p className="mb-1 text-gray-600">// Listen for triggers</p>
<p className="mb-1">agent.<span className="text-blue-300">on</span>(<span className="text-emerald-300">"intent"</span>, <span className="text-purple-400">async</span> (ctx) =&gt; {</p>
<p className="pl-4 mb-1"><span className="text-purple-400">const</span> proof = <span className="text-purple-400">await</span> ctx.<span className="text-blue-300">prove</span>();</p>
<p className="pl-4 mb-1"><span className="text-purple-400">await</span> ctx.<span className="text-blue-300">submit</span>(proof);</p>
<p className="mb-1">});</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-border bg-bg">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs space-y-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:shield-keyhole-linear"></iconify-icon>
<span className="font-bold text-sm tracking-tight text-white">PROTOCOL_ZERO</span>
</div>
<p className="text-xs text-subtle leading-relaxed">
                    Programmable privacy for the agent economy.
                </p>
<div className="text-[10px] text-subtle/50">
                    © 2024 Protocol Zero Labs.
                </div>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Protocol</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-white transition-colors" href="#">Skills.md Specification</a></li>
<li><a className="hover:text-white transition-colors" href="#">Prover Binary</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security Audit</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-white uppercase tracking-wider">Community</h4>
<ul className="space-y-2 text-xs text-subtle">
<li><a className="hover:text-white transition-colors" href="#">Github</a></li>
<li><a className="hover:text-white transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-white transition-colors" href="#">Governance</a></li>
</ul>
</div>
</div>
</div>
</footer>





    </>
  );
}
