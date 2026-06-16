import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Intersection Observer for Animations ---
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // --- Mock IDE Interaction ---
        const typeWriterElement = document.getElementById('typewriter-text');
        const statusElement = document.getElementById('ai-status');
        
        function typeText(text, i = 0) {
            if (i < text.length) {
                typeWriterElement.innerHTML += text.charAt(i);
                setTimeout(() => typeText(text, i + 1), 30); // Typing speed
            } else {
                statusElement.innerText = "Code generated successfully.";
                statusElement.classList.add('text-green-400');
            }
        }

        window.triggerAI = function(action) {
            typeWriterElement.innerHTML = "";
            statusElement.classList.remove('text-green-400');
            
            if (action === 'generate') {
                statusElement.innerText = "Generating with Llama 3...";
                setTimeout(() => {
                    const code = `<div class="pl-8"><span class="token-kw">return</span> <span class="token-str">'Hello World'</span>;</div><div class="pl-4">}</div>`;
                    typeWriterElement.innerHTML = code; // Instant for layout simplicity in this demo, or typeText for plain text
                    statusElement.innerText = "Done.";
                    statusElement.classList.add('text-green-400');
                }, 800);
            } else if (action === 'refactor') {
                statusElement.innerText = "Refactoring...";
                setTimeout(() => {
                    statusElement.innerText = "Optimized imports and types.";
                    statusElement.classList.add('text-green-400');
                }, 1000);
            }
        };

        // --- Three.js Dark Atmosphere ---
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.02); // Dense dark fog

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;
        camera.position.y = 10;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Digital Grid Landscape
        const geometry = new THREE.PlaneGeometry(200, 200, 40, 40);
        // Displace vertices for terrain
        const count = geometry.attributes.position.count;
        const positionAttribute = geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);
            positionAttribute.setZ(i, Math.sin(x/10) * Math.cos(y/10) * 5);
        }
        geometry.computeVertexNormals();

        const material = new THREE.MeshBasicMaterial({ 
            color: 0x222222, 
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -10;
        scene.add(plane);

        // Floating Particles (Red accents)
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 200;
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 100;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.2,
            color: 0xef4444, // Red-500
            transparent: true,
            opacity: 0.6
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Animation Loop
        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time += 0.002;

            // Rotate grid slightly
            plane.rotation.z = time * 0.5;
            
            // Move particles
            particlesMesh.rotation.y = time * 0.2;
            particlesMesh.rotation.x = time * 0.1;

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="canvas-container"></div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<iconify-icon className="text-red-600" icon="solar:cherry-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="text-sm font-medium tracking-tight text-white opacity-90">Cherry IDE</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-500">
<a className="hover:text-red-500 transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-red-500 transition-colors duration-200" href="#manifesto">Open Source</a>
<a className="hover:text-red-500 transition-colors duration-200" href="#community">Community</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="https://github.com/cherry-ide">Star on GitHub</a>
<button className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 hover:border-red-500/50 transition-all duration-200 shadow-[0_0_15px_rgba(220,38,38,0.1)]">
                    Download Beta
                </button>
</div>
</div>
</header>

<div className="relative z-10 w-full pt-20">

<section className="min-h-[90vh] flex flex-col items-center px-4 md:px-6 max-w-7xl mx-auto pt-16">
<div className="reveal flex flex-col items-center text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] uppercase tracking-widest font-medium text-red-500 bg-red-950/30 border border-red-900/50 rounded-full backdrop-blur-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
<span>v0.9.2 Early Access</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                    Your code.<br/>
                    Your models.
                </h1>
<p className="text-base md:text-lg text-neutral-500 font-light max-w-lg tracking-wide leading-relaxed">
                    The open-source AI editor that gives you full control. <br className="hidden md:block"/>
                    Bring any local LLM or API. No black boxes.
                </p>
<div className="flex items-center gap-4 mt-8">
<button className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 hover:shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] transition-all duration-200">
                        Download for Mac
                        <iconify-icon icon="solar:apple-linear" width="16"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-neutral-400 bg-transparent border border-neutral-800 rounded hover:text-white hover:border-neutral-600 transition-all duration-200">
                        View Roadmap
                    </button>
</div>
</div>

<div className="reveal delay-100 w-full max-w-5xl rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black overflow-hidden flex flex-col md:flex-row h-[500px] mb-20 relative group">

<div className="hidden md:flex w-64 flex-col border-r border-white/5 bg-[#0f0f0f]">
<div className="p-3 text-[10px] font-bold text-neutral-500 uppercase tracking-wider flex justify-between items-center">
                        Explorer
                        <iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5 px-2">
<div className="flex items-center gap-2 px-2 py-1 text-xs text-neutral-400 hover:bg-white/5 rounded cursor-pointer">
<iconify-icon icon="solar:folder-with-files-linear" width="14"></iconify-icon> src
                        </div>
<div className="flex items-center gap-2 px-2 py-1 text-xs text-neutral-400 hover:bg-white/5 rounded cursor-pointer pl-6">
<iconify-icon icon="solar:folder-linear" width="14"></iconify-icon> components
                        </div>
<div className="flex items-center gap-2 px-2 py-1 text-xs text-red-400 bg-red-500/5 rounded cursor-pointer pl-6 border-l-2 border-red-500">
<iconify-icon icon="solar:code-file-linear" width="14"></iconify-icon> App.tsx
                        </div>
<div className="flex items-center gap-2 px-2 py-1 text-xs text-neutral-500 hover:bg-white/5 rounded cursor-pointer pl-6">
<iconify-icon icon="solar:code-file-linear" width="14"></iconify-icon> utils.ts
                        </div>
</div>
</div>

<div className="flex-1 flex flex-col relative bg-[#0a0a0a]">

<div className="flex items-center border-b border-white/5 bg-[#0a0a0a] h-9">
<div className="px-4 h-full flex items-center gap-2 text-xs text-neutral-300 border-t border-red-500 bg-[#121212]">
<iconify-icon className="text-blue-400" icon="solar:typescript-linear" width="12"></iconify-icon>
                            App.tsx
                            <iconify-icon className="ml-2 opacity-50 hover:opacity-100 cursor-pointer" icon="solar:close-circle-linear" width="12"></iconify-icon>
</div>
</div>

<div className="flex-1 p-6 font-mono text-sm leading-6 overflow-hidden relative" id="code-editor">

<div className="flex gap-4">
<div className="flex flex-col text-neutral-700 select-none text-right w-6">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
</div>
<div className="text-neutral-400">
<div><span className="token-kw">import</span> React <span className="token-kw">from</span> <span className="token-str">'react'</span>;</div>
<div><span className="token-kw">import</span> { useAI } <span className="token-kw">from</span> <span className="token-str">'@cherry/core'</span>;</div>
<br/>
<div><span className="token-kw">export default function</span> <span className="token-func">App</span>() {</div>
<div className="pl-4"><span className="token-comment">// Connect to local Llama 3 instance</span></div>
<div className="pl-4"><span className="token-kw">const</span> { suggest } <span className="token-op">=</span> <span className="token-func">useAI</span>({</div>
<div className="pl-8">model: <span className="token-str">'llama-3-8b-local'</span>,</div>
<div className="pl-8">temperature: <span className="token-kw">0.7</span></div>
<div className="pl-4">});</div>
<br/>
<div className="pl-4 flex items-center">
<span className="token-kw">return</span> (
                                    <span className="ml-1" id="typewriter-text"></span><span className="w-1.5 h-4 bg-red-500 cursor-blink inline-block align-middle ml-0.5"></span>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 md:right-12 w-80 glass-panel rounded-lg shadow-2xl p-3 flex flex-col gap-3 transition-transform duration-300 translate-y-0 z-20">
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<span className="text-xs font-medium text-neutral-300">Cherry Assistant</span>
</div>
<select className="bg-black/20 border border-white/10 text-[10px] text-neutral-400 rounded px-2 py-0.5 outline-none focus:border-red-500/50">
<option>Llama 3 (Local)</option>
<option>GPT-4o</option>
<option>Claude 3.5 Sonnet</option>
</select>
</div>
<div className="bg-black/30 rounded p-2 text-xs text-neutral-400 italic" id="ai-status">
                                Ready to generate code...
                            </div>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center justify-center gap-1.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-neutral-300 hover:bg-white/10 hover:border-red-500/30 transition-colors" onclick="triggerAI('generate')">
<iconify-icon className="text-red-400" icon="solar:magic-stick-linear"></iconify-icon> Generate
                                </button>
<button className="flex items-center justify-center gap-1.5 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-neutral-300 hover:bg-white/10 hover:border-red-500/30 transition-colors" onclick="triggerAI('refactor')">
<iconify-icon icon="solar:refresh-linear"></iconify-icon> Refactor
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-neutral-600 animate-pulse">
<span className="uppercase tracking-widest text-[10px]">Explore Features</span>
<iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-[#080808]" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="reveal">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Built for the <span className="text-red-500">Post-GPT</span> Era</h2>
<p className="text-neutral-500 max-w-md text-sm leading-relaxed">
                            A development environment designed from the ground up to integrate deterministic code with probabilistic AI generation.
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 p-8 rounded border border-white/5 bg-[#0f0f0f] hover:border-red-500/20 transition-colors duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/10 transition-all duration-500"></div>
<div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center mb-6 text-neutral-400 group-hover:text-red-500 transition-colors">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-neutral-200">Model Agnostic</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Switch between OpenAI, Anthropic, Mistral, or Ollama instantly. Configure per-project or per-file.
                        </p>
</div>

<div className="reveal delay-200 p-8 rounded border border-white/5 bg-[#0f0f0f] hover:border-red-500/20 transition-colors duration-300 group relative overflow-hidden">
<div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center mb-6 text-neutral-400 group-hover:text-red-500 transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-neutral-200">Privacy First</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Your code never leaves your machine unless you want it to. Full support for offline, local LLM inference.
                        </p>
</div>

<div className="reveal delay-300 p-8 rounded border border-white/5 bg-[#0f0f0f] hover:border-red-500/20 transition-colors duration-300 group relative overflow-hidden">
<div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center mb-6 text-neutral-400 group-hover:text-red-500 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-neutral-200">Context Aware</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Cherry indexes your entire codebase locally using vector embeddings for accurate RAG without API fees.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-2xl font-medium text-white mb-2">Workflow integration</h2>
<p className="text-neutral-500 text-sm">Drop-in replacement for VS Code.</p>
</div>
<div className="space-y-4">

<div className="reveal delay-100 flex items-center gap-6 p-6 rounded border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors">
<div className="font-mono text-red-500/50 text-xl">01</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm">Import Extensions</h4>
<p className="text-neutral-500 text-xs mt-1">Automatically migrates your VS Code extensions and settings.</p>
</div>
<div className="font-mono text-xs text-neutral-600 bg-black px-2 py-1 rounded border border-white/5">cherry import --vscode</div>
</div>

<div className="reveal delay-200 flex items-center gap-6 p-6 rounded border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors">
<div className="font-mono text-red-500/50 text-xl">02</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm">Connect Provider</h4>
<p className="text-neutral-500 text-xs mt-1">Set your API keys or point to a local inference server port.</p>
</div>
<div className="font-mono text-xs text-neutral-600 bg-black px-2 py-1 rounded border border-white/5">cherry config set provider ollama</div>
</div>

<div className="reveal delay-300 flex items-center gap-6 p-6 rounded border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors">
<div className="font-mono text-red-500/50 text-xl">03</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm">Start Coding</h4>
<p className="text-neutral-500 text-xs mt-1">Use Cmd+K to generate, Cmd+L to chat. Stay in the flow.</p>
</div>
<div className="hidden md:block text-neutral-600"><iconify-icon icon="solar:keyboard-linear" width="20"></iconify-icon></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#080808]">
<div className="max-w-5xl mx-auto">
<div className="overflow-x-auto reveal">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10">
<th className="py-4 pl-4 text-xs font-medium text-neutral-500 uppercase tracking-wider w-1/3">Feature</th>
<th className="py-4 text-xs font-medium text-red-500 uppercase tracking-wider w-1/3">Cherry IDE</th>
<th className="py-4 text-xs font-medium text-neutral-600 uppercase tracking-wider w-1/3">Standard AI Editors</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
<td className="py-4 pl-4 font-medium text-neutral-300">Model Selection</td>
<td className="py-4 text-white">Any (Local + Cloud)</td>
<td className="py-4 text-neutral-500">Vendor Locked</td>
</tr>
<tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
<td className="py-4 pl-4 font-medium text-neutral-300">Code Privacy</td>
<td className="py-4 text-white">100% Local Capable</td>
<td className="py-4 text-neutral-500">Cloud Required</td>
</tr>
<tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
<td className="py-4 pl-4 font-medium text-neutral-300">Telemetry</td>
<td className="py-4 text-white">Opt-in Only</td>
<td className="py-4 text-neutral-500">Always On</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-4 pl-4 font-medium text-neutral-300">License</td>
<td className="py-4 text-white">Open Source (MIT)</td>
<td className="py-4 text-neutral-500">Proprietary</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a]" id="community">
<div className="max-w-4xl mx-auto text-center reveal">
<div className="w-16 h-16 mx-auto bg-red-600/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20 text-red-500">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                    Built by the <span className="text-red-500">Vibebros</span>
</h2>
<p className="text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed mb-10">
                    Cherry IDE is a community effort to reclaim the developer experience. We build in public, ship daily, and listen to feedback.
                </p>
<div className="flex items-center justify-center gap-4">
<a className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="solar:brand-discord-linear" width="16"></iconify-icon> Join Discord
                    </a>
<a className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon> Star on GitHub
                    </a>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#020202] text-xs">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon className="text-red-800" icon="solar:cherry-linear" width="16"></iconify-icon>
<span>© 2024 Cherry IDE</span>
</div>
<div className="flex gap-6 text-neutral-500">
<a className="hover:text-red-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-red-500 transition-colors" href="#">Terms</a>
<a className="hover:text-red-500 transition-colors" href="#">Security</a>
<a className="hover:text-red-500 transition-colors" href="#">Manifesto</a>
</div>
<div className="flex items-center gap-2 text-neutral-600">
<span className="w-2 h-2 rounded-full bg-emerald-500/50"></span>
<span>All Systems Operational</span>
</div>
</div>
</footer>
</div>



    </>
  );
}
