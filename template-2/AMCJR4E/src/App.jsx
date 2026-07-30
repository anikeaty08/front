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

        const launchBtn = document.getElementById('launchBtn');
        const backBtn = document.getElementById('backBtn');
        const hero = document.getElementById('hero');
        const consoleEl = document.getElementById('console');
        const nav = document.getElementById('nav');
        const dashboardSection = document.getElementById('dashboard-section');
        const modelsSection = document.getElementById('models-section');
        const deploySection = document.getElementById('deploy-section');

        launchBtn.addEventListener('click', () => {
            hero.classList.add('hidden');
            consoleEl.classList.remove('hidden');
            animateResourceBars();
        });

        backBtn.addEventListener('click', () => {
            consoleEl.classList.add('hidden');
            hero.classList.remove('hidden');
            resetResourceBars();
        });

        // Sidebar navigation logic
        nav.addEventListener('click', function(e) {
            let item = e.target.closest('.nav-item');
            if (!item) return;
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            // Section switching
            let section = item.getAttribute('data-section');
            dashboardSection.classList.add('hidden');
            modelsSection.classList.add('hidden');
            deploySection.classList.add('hidden');
            if(section === "dashboard") {
                dashboardSection.classList.remove('hidden');
            } else if(section === "models") {
                modelsSection.classList.remove('hidden');
            } else if(section === "deploy") {
                deploySection.classList.remove('hidden');
            }
        });

        // Animate resource bars and counters
        function animateResourceBars() {
            animateBar('cpu-bar', 'cpu-text', 34, 'emerald-400');
            animateBar('mem-bar', 'mem-text', 68, 'cyan-400');
            animateBar('gpu-bar', 'gpu-text', 82, 'purple-400');
            animateBar('net-bar', 'net-text', 45, 'orange-400');
        }

        function resetResourceBars() {
            document.getElementById('cpu-bar').style.width = '0%';
            document.getElementById('mem-bar').style.width = '0%';
            document.getElementById('gpu-bar').style.width = '0%';
            document.getElementById('net-bar').style.width = '0%';
            document.getElementById('cpu-text').textContent = '0%';
            document.getElementById('mem-text').textContent = '0%';
            document.getElementById('gpu-text').textContent = '0%';
            document.getElementById('net-text').textContent = '0%';
        }

        function animateBar(barId, textId, target, color) {
            const bar = document.getElementById(barId);
            const text = document.getElementById(textId);
            let start = 0;
            const duration = 1200;
            const startTime = performance.now();

            function step(now) {
                let progress = Math.min((now - startTime) / duration, 1);
                let value = Math.floor(progress * target);
                bar.style.width = value + '%';
                text.textContent = value + '%';
                if(progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    bar.style.width = target + '%';
                    text.textContent = target + '%';
                }
            }
            requestAnimationFrame(step);
        }

        // Deploy form logic (demo only)
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('deployForm');
            const status = document.getElementById('deployStatus');
            const recent = document.getElementById('recentDeployments');
            form && form.addEventListener('submit', function(e) {
                e.preventDefault();
                status.textContent = '';
                const model = document.getElementById('modelSelect').value;
                const version = document.getElementById('versionInput').value || 'latest';
                const env = document.getElementById('envSelect').value;
                status.innerHTML = `<span class="text-yellow-400">⚡ Deploying ${model} (${version}) to ${env}...</span>`;
                setTimeout(() => {
                    status.innerHTML = `<span class="text-green-400">✓ Deployment successful!</span>`;
                    // Insert the new deployment entry at the top
                    let newEntry = document.createElement('div');
                    newEntry.className = "py-3 flex justify-between items-center";
                    newEntry.innerHTML = `<div>
                        <span class="font-mono text-emerald-300">${model}</span>
                        <span class="text-gray-400 text-xs ml-2">${version}</span>
                        <span class="text-emerald-400 text-xs ml-2 bg-emerald-700/20 rounded px-2 py-0.5">${env}</span>
                    </div>
                    <span class="text-green-400 text-xs">✓ Success</span>`;
                    recent.insertBefore(newEntry, recent.firstChild);
                    form.reset();
                }, 1500);
            });
        });
    
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
      

<div className="fixed inset-0 z-0">
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
<div className="matrix-line absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-emerald-400 to-transparent opacity-40"></div>
</div>

<section className="relative z-10 min-h-screen flex items-center justify-center px-6" id="hero">
<div className="text-center max-w-4xl mx-auto">
<h1 className="pulse-headline text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                The Terminal for the AI Era
            </h1>
<p className="animate-sequence-1 text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 font-light">
                Deploy, debug, and scale AI models — faster.
            </p>
<div className="animate-sequence-2">
<button className="neon-button bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg px-12 py-4 rounded-lg border-2 border-emerald-400" id="launchBtn">
                    Launch Console
                </button>
</div>
<div className="animate-sequence-3 mt-16 flex items-center justify-center text-emerald-400 text-sm font-mono opacity-60">
<span>{">"}</span><span className="typewriter ml-1">Ready to initialize AI workflow...</span>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-20 bg-black" id="console">
<div className="console-screen h-full flex">

<div className="absolute top-0 left-0 right-0 h-16 glass-effect flex items-center justify-between px-6 z-30">
<div className="flex items-center space-x-4">
<div className="flex space-x-2">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
</div>
<span className="text-emerald-400 font-bold text-lg">AI Terminal v2.1.0</span>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2 text-emerald-400">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span className="text-sm">ONLINE</span>
</div>
<button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm text-emerald-400 border border-emerald-400/30 transition-all hover:border-emerald-400/60" id="backBtn">
                        ← EXIT
                    </button>
</div>
</div>

<div className="w-72 bg-black/90 border-r border-emerald-400/20 pt-16">
<nav className="p-4 space-y-2" id="nav">
<div className="nav-item active p-4 rounded cursor-pointer" data-section="dashboard">
<div className="flex items-center space-x-3">
<span className="font-medium text-emerald-400">Dashboard</span>
</div>
<p className="text-xs text-gray-400 mt-1 ml-1">System overview</p>
</div>
<div className="nav-item p-4 rounded cursor-pointer" data-section="models">
<div className="flex items-center space-x-3">
<span className="font-medium text-gray-300">Models</span>
</div>
<p className="text-xs text-gray-400 mt-1 ml-1">Manage AI models</p>
</div>
<div className="nav-item p-4 rounded cursor-pointer" data-section="deploy">
<div className="flex items-center space-x-3">
<span className="font-medium text-gray-300">Deploy</span>
</div>
<p className="text-xs text-gray-400 mt-1 ml-1">Production deployment</p>
</div>
<div className="nav-item p-4 rounded cursor-pointer" data-section="debug">
<div className="flex items-center space-x-3">
<span className="font-medium text-gray-300">Debug</span>
</div>
<p className="text-xs text-gray-400 mt-1 ml-1">Error diagnostics</p>
</div>
<div className="nav-item p-4 rounded cursor-pointer" data-section="analytics">
<div className="flex items-center space-x-3">
<span className="font-medium text-gray-300">Analytics</span>
</div>
<p className="text-xs text-gray-400 mt-1 ml-1">Performance metrics</p>
</div>
</nav>
</div>

<div className="flex-1 bg-black pt-16 p-6 overflow-y-auto">
<div className="max-w-6xl mx-auto">

<div id="dashboard-section">
<div className="mb-8">
<h1 className="text-3xl font-bold text-emerald-400 mb-2">System Dashboard</h1>
<p className="text-gray-400">Monitor and control your AI infrastructure</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="metric-card p-6 rounded-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-emerald-400 font-semibold">System Status</h3>
</div>
<p className="text-3xl font-bold text-white mb-2">ONLINE</p>
<p className="text-gray-400 text-sm">All systems operational</p>
</div>
<div className="metric-card p-6 rounded-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-cyan-400 font-semibold">Active Models</h3>
</div>
<p className="text-3xl font-bold text-white mb-2">12</p>
<p className="text-gray-400 text-sm">Currently deployed</p>
</div>
<div className="metric-card p-6 rounded-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-purple-400 font-semibold">Uptime</h3>
</div>
<p className="text-3xl font-bold text-white mb-2">99.9%</p>
<p className="text-gray-400 text-sm">Last 30 days</p>
</div>
<div className="metric-card p-6 rounded-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-orange-400 font-semibold">GPU Usage</h3>
</div>
<p className="text-3xl font-bold text-white mb-2">76%</p>
<p className="text-gray-400 text-sm">8/12 GPUs active</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="glass-effect rounded-lg p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-emerald-400 font-semibold">Live Terminal</h3>
<div className="flex space-x-2">
<div className="w-2 h-2 bg-red-500 rounded-full"></div>
<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
</div>
<div className="bg-black rounded p-4 text-sm space-y-2 h-64 overflow-y-auto">
<p><span className="text-emerald-400">$</span> ai-console --status</p>
<p className="text-gray-400">Initializing AI Terminal...</p>
<p className="text-green-400">✓ Models loaded successfully</p>
<p className="text-green-400">✓ GPU cluster connected</p>
<p className="text-green-400">✓ API endpoints active</p>
<p className="text-green-400">✓ Monitoring systems online</p>
<p><span className="text-emerald-400">$</span> deploy --model gpt-4-turbo</p>
<p className="text-yellow-400">⚡ Deploying model to production...</p>
<p className="text-green-400">✓ Deployment successful</p>
<p className="flex items-center">
<span className="text-emerald-400">$</span><span className="terminal-cursor ml-1">|</span>
</p>
</div>
</div>
<div className="glass-effect rounded-lg p-6">
<h3 className="text-emerald-400 font-semibold mb-4">System Resources</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-2">
<span className="text-gray-300">CPU Usage</span>
<span className="text-emerald-400 resource-perc" id="cpu-text">0%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-emerald-400 h-2 rounded-full bar-animate" id="cpu-bar" style={{width: `0%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-gray-300">Memory</span>
<span className="text-cyan-400 resource-perc" id="mem-text">0%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-cyan-400 h-2 rounded-full bar-animate" id="mem-bar" style={{width: `0%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-gray-300">GPU Memory</span>
<span className="text-purple-400 resource-perc" id="gpu-text">0%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-purple-400 h-2 rounded-full bar-animate" id="gpu-bar" style={{width: `0%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-gray-300">Network I/O</span>
<span className="text-orange-400 resource-perc" id="net-text">0%</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-orange-400 h-2 rounded-full bar-animate" id="net-bar" style={{width: `0%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="models-section">

<div className="mb-8">
<h1 className="text-3xl font-bold text-emerald-400 mb-2">Model Management</h1>
<p className="text-gray-400">View and manage all deployed AI models</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

<div className="metric-card p-6 rounded-lg flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-cyan-400 font-semibold">gpt-4-turbo</h3>
<span className="bg-emerald-600/20 text-emerald-400 px-2 py-0.5 rounded text-xs font-mono">Active</span>
</div>
<div className="mb-3 text-sm text-gray-300">OpenAI's GPT-4 Turbo model for general purpose tasks.</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-gray-400">v4.0.2</span>
<span className="text-xs text-gray-400">Last updated: 2h ago</span>
</div>
</div>
<div className="metric-card p-6 rounded-lg flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-purple-400 font-semibold">embedding-3-large</h3>
<span className="bg-emerald-600/20 text-emerald-400 px-2 py-0.5 rounded text-xs font-mono">Active</span>
</div>
<div className="mb-3 text-sm text-gray-300">Powerful embedding model for semantic search and retrieval.</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-gray-400">v3.1.0</span>
<span className="text-xs text-gray-400">Last updated: 20m ago</span>
</div>
</div>
<div className="metric-card p-6 rounded-lg flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-orange-400 font-semibold">stable-diffusion-xl</h3>
<span className="bg-orange-600/20 text-orange-400 px-2 py-0.5 rounded text-xs font-mono">Paused</span>
</div>
<div className="mb-3 text-sm text-gray-300">Image generation model for creative assets and design.</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-gray-400">v1.3.4</span>
<span className="text-xs text-gray-400">Last updated: 10h ago</span>
</div>
</div>
<div className="metric-card p-6 rounded-lg flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-emerald-400 font-semibold">custom-nlp</h3>
<span className="bg-emerald-600/20 text-emerald-400 px-2 py-0.5 rounded text-xs font-mono">Active</span>
</div>
<div className="mb-3 text-sm text-gray-300">Fine-tuned NLP model for domain-specific intent classification.</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-gray-400">v2.5.1</span>
<span className="text-xs text-gray-400">Last updated: 3d ago</span>
</div>
</div>
<div className="metric-card p-6 rounded-lg flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="text-cyan-300 font-semibold">vision-transformer</h3>
<span className="bg-emerald-600/20 text-emerald-400 px-2 py-0.5 rounded text-xs font-mono">Active</span>
</div>
<div className="mb-3 text-sm text-gray-300">Transformer-based model for image recognition tasks.</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-gray-400">v1.0.0</span>
<span className="text-xs text-gray-400">Last updated: 1w ago</span>
</div>
</div>
</div>
<div className="glass-effect rounded-lg p-6">
<h3 className="text-emerald-400 font-semibold mb-4">Actions</h3>
<div className="flex flex-wrap gap-4">
<button className="bg-emerald-500/80 hover:bg-emerald-400 text-black font-bold px-6 py-2 rounded-lg border-2 border-emerald-400 neon-button">+ Add Model</button>
<button className="bg-gray-800/90 hover:bg-gray-700 text-emerald-400 border border-emerald-400/30 px-6 py-2 rounded-lg font-bold">Import</button>
<button className="bg-gray-800/90 hover:bg-gray-700 text-emerald-400 border border-emerald-400/30 px-6 py-2 rounded-lg font-bold">Export</button>
</div>
</div>
</div>


<div className="hidden" id="deploy-section">
<div className="mb-8">
<h1 className="text-3xl font-bold text-emerald-400 mb-2">Production Deployment</h1>
<p className="text-gray-400">Deploy a new model to production and monitor recent deployments.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass-effect rounded-lg p-6 flex flex-col">
<h3 className="text-emerald-400 font-semibold mb-4">Deploy New Model</h3>
<form className="space-y-4" id="deployForm">
<div>
<label className="block text-gray-200 text-sm mb-1" htmlFor="modelSelect">Model</label>
<select className="w-full bg-black border border-emerald-400/40 rounded px-3 py-2 text-gray-200 focus:outline-none focus:border-emerald-400" id="modelSelect">
<option value="gpt-4-turbo">gpt-4-turbo</option>
<option value="embedding-3-large">embedding-3-large</option>
<option value="stable-diffusion-xl">stable-diffusion-xl</option>
<option value="custom-nlp">custom-nlp</option>
<option value="vision-transformer">vision-transformer</option>
</select>
</div>
<div>
<label className="block text-gray-200 text-sm mb-1" htmlFor="versionInput">Version</label>
<input className="w-full bg-black border border-emerald-400/40 rounded px-3 py-2 text-gray-200 focus:outline-none focus:border-emerald-400" id="versionInput" placeholder="e.g., v1.0.0" type="text" />
</div>
<div>
<label className="block text-gray-200 text-sm mb-1" htmlFor="envSelect">Environment</label>
<select className="w-full bg-black border border-emerald-400/40 rounded px-3 py-2 text-gray-200 focus:outline-none focus:border-emerald-400" id="envSelect">
<option>Production</option>
<option>Staging</option>
<option>Development</option>
</select>
</div>
<div>
<button className="neon-button bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-2 rounded-lg border-2 border-emerald-400 w-full" type="submit">Deploy</button>
</div>
</form>
<div className="mt-4 text-sm" id="deployStatus"></div>
</div>

                            Recent Deployments --{">"}
                            <div className="glass-effect rounded-lg p-6 flex flex-col">
<h3 className="textemerald-400 font-semibold mb-4">Recent Deployments</h3>
<div className="-y divide-emerald-400/10" id="recentDeployments">
<div className="py-3 flex justify-between items-center">
<div className="font-mono text-emerald-300">gpt-4-turbo
                                            {"<"} class="text-gray-400 text-xs ml-2"{">"}v4.0.2
<span className="textemerald-400 text-xs ml-2 bg-emerald-700/20 rounded px-2 py-0.5">Production</span>
</div>
<span className="text-green-400 text-xs">✓ Success</span>
</div>
<div className="py-3 flex justify-between items-center">
<div>
<span className="font-mono text-purple-300">embedding-3-large</span>
<span className="text-gray-400 text-xs ml-2">v3.1.0</span>
<span className="text-emerald-400 text-xs ml-2 bg-emerald-700/20 rounded px-2 py-0.5">Staging</span>
</div>
<span className="text-green-400 text-xs">✓ Success</span>
</div>
<div className="py-3 flex justify-between items-center">
<div>
<span className="font-mono text-orange-300">stable-diffusion-xl</span>
<span className="text-gray-400 text-xs ml-2">v1.3.4</span>
<span className="text-orange-400 text-xs ml-2 bg-orange-700/20 rounded px-2 py-0.5">Development</span>
</div>
<span className="text-yellow-400 text-xs">⚡ In Progress</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>


    </>
  );
}
