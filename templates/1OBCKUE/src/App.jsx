import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'mono': ['JetBrains Mono', 'monospace']
                    },
                    colors: {
                        'cyber-cyan': '#00FFFF',
                        'steel': '#C0C0C0'
                    }
                }
            }
        }
    


        // Toggle switches animation
        document.querySelectorAll('.toggle-switch').forEach(toggle => {
            toggle.addEventListener('change', function() {
                if (this.checked) {
                    this.style.background = '#00FFFF';
                } else {
                    this.style.background = '#4B5563';
                }
            });
        });

        // Range slider updates
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', function() {
                const value = this.value;
                const max = this.max;
                const percentage = (value / max) * 100;
                this.style.background = `linear-gradient(to right, #00FFFF 0%, #00FFFF ${percentage}%, #374151 ${percentage}%, #374151 100%)`;
            });
        });

        // Simulate real-time system updates
        setInterval(() => {
            const cpuUsage = Math.floor(Math.random() * 40) + 20;
            const memoryUsage = Math.floor(Math.random() * 30) + 60;
            const neuralLoad = Math.floor(Math.random() * 20) + 80;
            
            document.querySelector('aside').innerHTML = document.querySelector('aside').innerHTML.replace(/CPU Usage[\s\S]*?23%/, `CPU Usage</span><span class="text-cyber-cyan">${cpuUsage}%`);
        }, 5000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="100" id="neural-grid" patternunits="userSpaceOnUse" width="100">
<circle cx="50" cy="50" fill="#00FFFF" opacity="0.3" r="1"></circle>
<line opacity="0.2" stroke="#00FFFF" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50"></line>
<line opacity="0.2" stroke="#00FFFF" strokeWidth="0.5" x1="50" x2="50" y1="0" y2="100"></line>
</pattern>
</defs>
<rect fill="url(#neural-grid)" height="100%" width="100%"></rect>

<path d="M100,100 Q300,200 500,150 T900,100" fill="none" opacity="0.3" stroke="#00FFFF" strokeWidth="1"></path>
<path d="M50,300 Q400,250 700,400 T1100,350" fill="none" opacity="0.2" stroke="#00FFFF" strokeWidth="1"></path>
<circle className="neural-node" cx="200" cy="150" fill="#00FFFF" r="3" style={{animationDelay: '0s'}}></circle>
<circle className="neural-node" cx="600" cy="200" fill="#00FFFF" r="3" style={{animationDelay: '1s'}}></circle>
<circle className="neural-node" cx="800" cy="400" fill="#00FFFF" r="3" style={{animationDelay: '2s'}}></circle>
</svg>

<header className="relative z-20 border-b border-cyan-500/30 bg-black/90 backdrop-blur-sm">
<div className="flex items-center justify-between px-8 py-4">
<div className="flex items-center space-x-4">
<div className="w-8 h-8 bg-cyber-cyan rounded-sm flex items-center justify-center text-black font-bold">AI</div>
<div>
<h1 className="text-xl font-bold text-cyber-cyan">INTELLIGENCE CORE</h1>
<p className="text-xs text-steel">Neural Configuration Interface</p>
</div>
</div>
<div className="flex items-center space-x-6">
<div className="text-sm text-steel">
<span className="text-cyber-cyan">●</span> ONLINE
                </div>
<div className="text-sm text-steel">v3.7.2</div>
<div className="w-2 h-2 bg-cyber-cyan rounded-full cyber-glow"></div>
</div>
</div>
</header>

<div className="flex h-screen">

<aside className="w-80 bg-black/95 border-r border-cyan-500/30 p-6 overflow-y-auto">
<nav className="space-y-2">
<div className="mb-8">
<h2 className="text-cyber-cyan font-bold mb-4">CORE MODULES</h2>
<div className="space-y-2">
<a className="block p-3 bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/20 transition-all" href="#">
<span className="text-sm">⚙️</span> SYSTEM SETTINGS
                        </a>
<a className="block p-3 hover:bg-white/5 text-steel hover:text-white transition-all" href="#">
<span className="text-sm">🧠</span> NEURAL NETWORKS
                        </a>
<a className="block p-3 hover:bg-white/5 text-steel hover:text-white transition-all" href="#">
<span className="text-sm">💬</span> LANGUAGE MODELS
                        </a>
<a className="block p-3 hover:bg-white/5 text-steel hover:text-white transition-all" href="#">
<span className="text-sm">🔍</span> ANALYTICS
                        </a>
<a className="block p-3 hover:bg-white/5 text-steel hover:text-white transition-all" href="#">
<span className="text-sm">🛡️</span> SECURITY
                        </a>
</div>
</div>
<div className="mb-8">
<h3 className="text-steel text-sm font-bold mb-4">SYSTEM STATUS</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between">
<span className="text-steel">CPU Usage</span>
<span className="text-cyber-cyan">23%</span>
</div>
<div className="w-full bg-gray-800 h-1 rounded">
<div className="bg-cyber-cyan h-1 rounded w-1/4"></div>
</div>
<div className="flex justify-between">
<span className="text-steel">Memory</span>
<span className="text-cyber-cyan">67%</span>
</div>
<div className="w-full bg-gray-800 h-1 rounded">
<div className="bg-cyber-cyan h-1 rounded w-2/3"></div>
</div>
<div className="flex justify-between">
<span className="text-steel">Neural Load</span>
<span className="text-cyber-cyan">89%</span>
</div>
<div className="w-full bg-gray-800 h-1 rounded">
<div className="bg-cyber-cyan h-1 rounded w-5/6"></div>
</div>
</div>
</div>
</nav>
</aside>

<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-6xl mx-auto">
<div className="mb-8">
<h1 className="text-3xl font-bold text-cyber-cyan mb-2">SYSTEM SETTINGS</h1>
<p className="text-steel">Configure AI Intelligence Core parameters and neural network behavior</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="setting-panel bg-black/60 border border-cyan-500/30 p-6 rounded">
<h2 className="text-xl font-bold text-cyber-cyan mb-6 flex items-center">
<span className="w-2 h-2 bg-cyber-cyan rounded-full mr-3 cyber-glow"></span>
                            CORE CONFIGURATION
                        </h2>
<div className="space-y-6">
<div>
<label className="block text-sm font-bold text-steel mb-2">Processing Mode</label>
<select className="w-full bg-black border border-cyan-500/30 text-cyber-cyan p-3 rounded focus:border-cyber-cyan focus:outline-none">
<option>High Performance</option>
<option>Balanced</option>
<option>Power Efficient</option>
</select>
</div>
<div>
<label className="block text-sm font-bold text-steel mb-2">Neural Threads</label>
<input className="w-full slider-track bg-gray-800 rounded appearance-none h-2" max="64" min="1" type="range" value="32"/>
<div className="flex justify-between text-xs text-steel mt-1">
<span>1</span><span className="text-cyber-cyan">32</span><span>64</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-steel">Auto-optimization</span>
<input checked="" className="toggle-switch w-12 h-6 bg-gray-600 rounded-full appearance-none cursor-pointer" type="checkbox"/>
</div>
</div>
</div>

<div className="setting-panel bg-black/60 border border-cyan-500/30 p-6 rounded">
<h2 className="text-xl font-bold text-cyber-cyan mb-6 flex items-center">
<span className="w-2 h-2 bg-cyber-cyan rounded-full mr-3 cyber-glow"></span>
                            LANGUAGE MODEL
                        </h2>
<div className="space-y-6">
<div>
<label className="block text-sm font-bold text-steel mb-2">Temperature</label>
<input className="w-full slider-track bg-gray-800 rounded appearance-none h-2" max="2" min="0" step="0.1" type="range" value="0.7"/>
<div className="flex justify-between text-xs text-steel mt-1">
<span>0.0</span><span className="text-cyber-cyan">0.7</span><span>2.0</span>
</div>
</div>
<div>
<label className="block text-sm font-bold text-steel mb-2">Max Tokens</label>
<input className="w-full bg-black border border-cyan-500/30 text-cyber-cyan p-3 rounded focus:border-cyber-cyan focus:outline-none" type="number" value="2048"/>
</div>
<div className="flex items-center justify-between">
<span className="text-steel">Stream responses</span>
<input checked="" className="toggle-switch w-12 h-6 bg-gray-600 rounded-full appearance-none cursor-pointer" type="checkbox"/>
</div>
</div>
</div>

<div className="setting-panel bg-black/60 border border-cyan-500/30 p-6 rounded">
<h2 className="text-xl font-bold text-cyber-cyan mb-6 flex items-center">
<span className="w-2 h-2 bg-cyber-cyan rounded-full mr-3 cyber-glow"></span>
                            SECURITY &amp; PRIVACY
                        </h2>
<div className="space-y-6">
<div className="flex items-center justify-between">
<span className="text-steel">Data encryption</span>
<input checked="" className="toggle-switch w-12 h-6 bg-gray-600 rounded-full appearance-none cursor-pointer" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<span className="text-steel">Anonymous mode</span>
<input className="toggle-switch w-12 h-6 bg-gray-600 rounded-full appearance-none cursor-pointer" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<span className="text-steel">Auto-delete logs</span>
<input checked="" className="toggle-switch w-12 h-6 bg-gray-600 rounded-full appearance-none cursor-pointer" type="checkbox"/>
</div>
<div>
<label className="block text-sm font-bold text-steel mb-2">Session timeout (minutes)</label>
<input className="w-full bg-black border border-cyan-500/30 text-cyber-cyan p-3 rounded focus:border-cyber-cyan focus:outline-none" type="number" value="30"/>
</div>
</div>
</div>

<div className="setting-panel bg-black/60 border border-cyan-500/30 p-6 rounded">
<h2 className="text-xl font-bold text-cyber-cyan mb-6 flex items-center">
<span className="w-2 h-2 bg-cyber-cyan rounded-full mr-3 cyber-glow"></span>
                            ADVANCED
                        </h2>
<div className="space-y-6">
<div>
<label className="block text-sm font-bold text-steel mb-2">API Endpoint</label>
<input className="w-full bg-black border border-cyan-500/30 text-cyber-cyan p-3 rounded focus:border-cyber-cyan focus:outline-none text-sm" type="text" value="https://api.intelligence-core.ai/v1"/>
</div>
<div className="flex items-center justify-between">
<span className="text-steel">Debug mode</span>
<input className="toggle-switch w-12 h-6 bg-gray-600 rounded-full appearance-none cursor-pointer" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<span className="text-steel">Experimental features</span>
<input className="toggle-switch w-12 h-6 bg-gray-600 rounded-full appearance-none cursor-pointer" type="checkbox"/>
</div>
</div>
</div>
</div>

<div className="flex justify-end space-x-4 mt-8">
<button className="px-6 py-3 border border-steel text-steel hover:bg-steel hover:text-black transition-all duration-300">
                        RESET TO DEFAULTS
                    </button>
<button className="px-6 py-3 bg-cyber-cyan text-black font-bold hover:bg-cyan-400 transition-all duration-300 cyber-glow">
                        APPLY CHANGES
                    </button>
</div>
</div>
</main>
</div>

<div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent data-stream"></div>


    </>
  );
}
