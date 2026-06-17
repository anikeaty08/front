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



                            for(let i=0; i<40; i++) {
                                document.write(`<div class="flex-1 bg-cyan-500/80 hover:bg-cyan-400 transition-colors duration-300" style="height: ${Math.random() * 80 + 10}%; opacity: ${Math.random() * 0.5 + 0.5}"></div>`);
                            }
                         


        // --- 1. Scroll Reveal Animation ---
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // --- 2. Terminal Functionality ---
        const input = document.getElementById('cmd-input');
        const output = document.getElementById('console-output');

        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const cmd = this.value;
                if(cmd.trim() === '') return;
                
                printLog(`root@cyberdragon:~$ ${cmd}`, 'text-gray-300');
                this.value = '';
                this.disabled = true;

                // Simulate processing
                setTimeout(() => printLog(`> Initializing scan on ${cmd}...`, 'text-cyan-400'), 200);
                setTimeout(() => printLog(`> Resolving hostname...`, 'text-gray-400'), 500);
                setTimeout(() => printLog(`> Pinging 4 packets...`, 'text-gray-400'), 800);
                
                // Random Outcome
                setTimeout(() => {
                    const isSafe = Math.random() > 0.4;
                    if(isSafe) {
                        printLog(`> SUCCESS: Target appears clean.`, 'text-green-400');
                        printLog(`> NO VULNERABILITIES DETECTED.`, 'text-green-500 font-bold');
                    } else {
                        printLog(`> WARNING: Anomalies detected!`, 'text-yellow-400');
                        printLog(`> CRITICAL THREAT: Port 8080 exposed.`, 'text-red-500 font-bold');
                    }
                    input.disabled = false;
                    input.focus();
                    output.scrollTop = output.scrollHeight;
                }, 1800);
            }
        });

        function printLog(text, className) {
            const div = document.createElement('div');
            div.className = className;
            div.textContent = text;
            output.appendChild(div);
            output.scrollTop = output.scrollHeight;
        }

        // --- 3. Clock ---
        setInterval(() => {
            const now = new Date();
            document.getElementById('clock').innerText = now.toLocaleTimeString('en-US', { hour12: false });
        }, 1000);

        // --- 4. Card Mouse Move Effect ---
        document.querySelectorAll('.cyber-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
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
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none h-screen"></div>
<div className="fixed inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-0 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/50 rounded">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:code-scan-linear"></iconify-icon>
</div>
<span className="font-mono font-bold tracking-tight text-lg text-white">CYBER<span className="text-cyan-500">DRAGON</span>_V4</span>
</div>
<div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-gray-400">
<a className="hover:text-white transition-colors" href="#metrics">METRICS</a>
<a className="hover:text-white transition-colors" href="#terminal">TERMINAL</a>
<a className="hover:text-white transition-colors" href="#logs">LOGS</a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-[10px] font-mono text-green-500 border border-green-900/50 px-3 py-1 rounded-full bg-green-900/10">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    SYSTEM_ONLINE
                </div>
</div>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20 px-4">
<div className="text-center max-w-4xl mx-auto space-y-8">
<div className="font-mono text-cyan-500 text-xs tracking-[0.3em] uppercase mb-4 reveal">
                // Defense Protocol Initiated
            </div>
<h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-tight reveal" style={{transitionDelay: '100ms'}}>
<span className="glitch-wrapper" data-text="ZERO_TRUST">ZERO_TRUST</span><br/>
                ARCHITECTURE
            </h1>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                Advanced heuristic analysis for the modern web. Visualize threats, decrypt payloads, and secure your infrastructure in real-time.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8 reveal" style={{transitionDelay: '300ms'}}>
<button className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest overflow-hidden hover:bg-cyan-400 transition-colors" onclick="document.getElementById('terminal').scrollIntoView()">
<div className="absolute inset-0 w-1 bg-cyan-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    INITIALIZE_SCAN
                </button>
<button className="px-8 py-4 border border-white/20 text-white font-mono text-sm tracking-widest hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                    VIEW_DOCUMENTATION
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] font-mono tracking-widest">SCROLL</span>
<iconify-icon className="text-xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>

<div className="w-full bg-[#050505] border-y border-white/5 py-3 overflow-hidden z-10 relative">
<div className="marquee-container">
<div className="marquee-content font-mono text-xs text-gray-500 flex gap-12 items-center">
<span>THREAT_LEVEL: <span className="text-yellow-500">ELEVATED</span></span>
<span>GLOBAL_NODES: 8,492</span>
<span>PACKETS_SEC: 4.2TB</span>
<span>ENCRYPTION: AES-256-GCM</span>
<span>LAST_BREACH: NONE</span>
<span>UPTIME: 99.999%</span>

<span>THREAT_LEVEL: <span className="text-yellow-500">ELEVATED</span></span>
<span>GLOBAL_NODES: 8,492</span>
<span>PACKETS_SEC: 4.2TB</span>
<span>ENCRYPTION: AES-256-GCM</span>
<span>LAST_BREACH: NONE</span>
<span>UPTIME: 99.999%</span>
<span>THREAT_LEVEL: <span className="text-yellow-500">ELEVATED</span></span>
<span>GLOBAL_NODES: 8,492</span>
<span>PACKETS_SEC: 4.2TB</span>
<span>ENCRYPTION: AES-256-GCM</span>
<span>LAST_BREACH: NONE</span>
<span>UPTIME: 99.999%</span>
</div>
</div>
</div>

<section className="relative z-10 py-32 px-6 max-w-7xl mx-auto" id="metrics">
<div className="flex justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl font-bold text-white mb-2">SYSTEM_METRICS</h2>
<p className="text-gray-500 text-sm">Real-time telemetry from Sector 7G</p>
</div>
<div className="font-mono text-cyan-500 text-xs text-right hidden md:block">
                UPDATED: <span id="clock">00:00:00</span><br/>
                SYNC: AUTO
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 md:row-span-2 cyber-card rounded-xl p-6 flex flex-col reveal">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-xs text-gray-500 font-mono mb-1">NETWORK_TRAFFIC</div>
<div className="text-2xl text-white font-bold">842.2 <span className="text-sm text-gray-500 font-normal">Gbps</span></div>
</div>
<iconify-icon className="text-cyan-500 text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>

<div className="flex-1 flex items-end justify-between gap-1 mt-4 relative">
<div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/10"></div>
<div className="absolute inset-x-0 bottom-1/2 h-[1px] bg-white/5 border-t border-dashed border-white/10"></div>

<div className="w-full bg-cyan-900/20 h-full rounded-sm overflow-hidden flex items-end gap-[2px]">

</div>
</div>
</div>

<div className="cyber-card rounded-xl p-6 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-start mb-4">
<div className="text-xs text-gray-500 font-mono">CPU_LOAD</div>
<iconify-icon className="text-pink-500 text-xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="text-3xl text-white font-bold mb-2">42%</div>
<div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 w-[42%]"></div>
</div>
<div className="mt-4 flex gap-2 text-[10px] font-mono text-gray-400">
<div className="px-2 py-1 bg-white/5 rounded">CORE_1: 30%</div>
<div className="px-2 py-1 bg-white/5 rounded">CORE_2: 54%</div>
</div>
</div>

<div className="cyber-card rounded-xl p-6 flex flex-col items-center justify-center relative reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute top-6 left-6 text-xs text-gray-500 font-mono">ACTIVE_SCAN</div>
<div className="relative w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
<div className="absolute w-full h-full rounded-full border border-cyan-500/30 animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute w-1/2 h-1/2 rounded-full border border-white/20"></div>
<div className="w-1 h-1 bg-cyan-500 rounded-full"></div>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent rounded-full animate-spin"></div>
</div>
<div className="mt-4 text-xs font-mono text-cyan-400">Searching Sector...</div>
</div>

<div className="col-span-1 md:col-span-2 cyber-card rounded-xl p-6 reveal" style={{transitionDelay: '300ms'}}>
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-bold text-white">REJECTION_LOGS</h3>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
</div>
</div>
<div className="space-y-3 font-mono text-xs text-gray-400">
<div className="flex justify-between border-b border-white/5 pb-2">
<span>192.168.0.1</span>
<span>SQL_INJECTION</span>
<span className="text-red-500">BLOCKED</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span>10.0.0.42</span>
<span>XSS_ATTEMPT</span>
<span className="text-red-500">BLOCKED</span>
</div>
<div className="flex justify-between pb-1">
<span>45.22.19.1</span>
<span>BRUTE_FORCE</span>
<span className="text-yellow-500">FLAGGED</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 px-4 bg-[#050505] border-y border-white/5" id="terminal">
<div className="max-w-4xl mx-auto reveal">
<div className="text-center mb-10">
<iconify-icon className="text-4xl text-cyan-500 mb-4" icon="solar:command-linear"></iconify-icon>
<h2 className="text-3xl font-bold text-white">COMMAND_INTERFACE</h2>
<p className="text-gray-500 mt-2">Access the mainframe directly. Execute scan protocols.</p>
</div>
<div className="rounded-lg overflow-hidden border border-gray-800 bg-[#0c0c0c] shadow-2xl shadow-cyan-900/20">

<div className="bg-[#151515] px-4 py-2 flex items-center gap-2 border-b border-gray-800">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
<div className="flex-1 text-center text-[10px] text-gray-600 font-mono">root@cyberdragon-node-01:~</div>
</div>

<div className="p-6 font-mono text-sm h-[400px] flex flex-col" onclick="document.getElementById('cmd-input').focus()">
<div className="flex-1 overflow-y-auto space-y-1 mb-4 text-gray-400 custom-scroll" id="console-output">
<div className="text-gray-500">CyberDragon OS [Version 4.0.21]</div>
<div className="text-gray-500">(c) 2084 CyberDragon Systems. All rights reserved.</div>
<br/>
<div><span className="text-green-500">✔</span> System initialized...</div>
<div><span className="text-green-500">✔</span> Neural interface connected...</div>
<div><span className="text-cyan-500">ℹ</span> Waiting for target input...</div>
</div>
<div className="flex items-center gap-2 pt-2 border-t border-gray-800/50">
<span className="text-cyan-500 font-bold">➜</span>
<span className="text-pink-500">~</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full placeholder-gray-800" id="cmd-input" placeholder="Enter target URL or IP..." type="text"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1 reveal">
<h2 className="text-3xl font-bold text-white mb-6">DEFENSIVE<br/><span className="text-gray-600">CAPABILITIES</span></h2>
<p className="text-gray-400 leading-relaxed mb-8">
                    Our proprietary AI engine continuously learns from global attack vectors to provide preemptive security measures before threats materialize.
                </p>
<a className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm font-mono tracking-widest border-b border-cyan-400/30 pb-1" href="#">
                    EXPLORE_MODELS <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:border-cyan-500/50 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-cyan-400 transition-colors" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">Automated Hardening</h3>
<p className="text-sm text-gray-500">Automatically patches vulnerabilities in your infrastructure stack instantly.</p>
</div>

<div className="group reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:border-pink-500/50 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-pink-400 transition-colors" icon="solar:bug-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">Malware Sandboxing</h3>
<p className="text-sm text-gray-500">Isolate suspicious files in a virtualized environment to observe behavior safely.</p>
</div>

<div className="group reveal" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:border-green-500/50 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-green-400 transition-colors" icon="solar:lock-password-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">Identity Management</h3>
<p className="text-sm text-gray-500">Zero-knowledge proof authentication for enterprise-grade access control.</p>
</div>

<div className="group reveal" style={{transitionDelay: '400ms'}}>
<div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:border-yellow-500/50 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-yellow-400 transition-colors" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">Cloud Sentinel</h3>
<p className="text-sm text-gray-500">Real-time monitoring across AWS, Azure, and Google Cloud environments.</p>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<div className="font-mono text-lg font-bold text-white mb-4">CYBER<span className="text-cyan-500">DRAGON</span></div>
<p className="text-gray-600 text-sm max-w-xs">
                    Securing the digital frontier through superior intelligence and automated defense systems.
                </p>
</div>
<div className="flex gap-12 text-sm text-gray-500">
<div className="flex flex-col gap-2">
<span className="text-white font-bold mb-2">PLATFORM</span>
<a className="hover:text-cyan-400" href="#">Features</a>
<a className="hover:text-cyan-400" href="#">Integrations</a>
<a className="hover:text-cyan-400" href="#">API</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-white font-bold mb-2">COMPANY</span>
<a className="hover:text-cyan-400" href="#">About</a>
<a className="hover:text-cyan-400" href="#">Security</a>
<a className="hover:text-cyan-400" href="#">Careers</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-gray-700 font-mono">
<div>© 2084 CYBERDRAGON INC.</div>
<div className="flex gap-4">
<span>PRIVACY_PROTOCOL_V2</span>
<span>TERMS_OF_SERVICE</span>
</div>
</div>
</footer>


    </>
  );
}
