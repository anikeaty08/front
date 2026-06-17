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
sans: ['Geist Sans', 'sans-serif'],
mono: ['Azeret Mono', 'monospace'],
},
colors: {
bg: '#050505',
surface: '#0A0A0A',
crimson: '#EB3B3B',
crimson_dim: 'rgba(235, 59, 59, 0.1)',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
wide: '0.02em',
widest: '0.15em',
},
animation: {
'radar': 'radar 4s linear infinite',
'scan': 'scan 3s ease-in-out infinite',
'blink': 'blink 1s step-end infinite',
},
keyframes: {
radar: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' }
},
scan: {
'0%': { top: '0%', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' }
},
blink: {
'50%': { opacity: '0' }
}
}
}
}
}



        // Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Terminal Typing Effect
        const terminalContent = document.getElementById('terminal-content');
        const lines = [
            { text: "[+] Targeting 192.168.1.0/24", color: "text-zinc-400" },
            { text: "[+] Scanning ports...", color: "text-zinc-400" },
            { text: "(!) OPEN PORT 8080 DETECTED", color: "text-yellow-500" },
            { text: "> Analyzing service signatures...", color: "text-zinc-400" },
            { text: "[*] Vulnerability CVE-2023-XXXX CONFIRMED", color: "text-crimson" },
            { text: "> Escalating privileges...", color: "text-zinc-300" },
            { text: "ACCESS GRANTED.", color: "text-green-500 font-bold" },
            { text: "_", color: "animate-blink" }
        ];

        let lineIndex = 0;
        
        function addLine() {
            if (lineIndex < lines.length) {
                const line = lines[lineIndex];
                const div = document.createElement('div');
                div.className = line.color;
                div.textContent = line.text;
                
                // Remove blinking cursor from previous line
                if (lineIndex > 0) {
                    const prev = terminalContent.lastElementChild;
                    if(prev.textContent === "_") prev.remove();
                }

                terminalContent.appendChild(div);
                lineIndex++;
                
                const delay = Math.random() * 800 + 400;
                if (lineIndex < lines.length) setTimeout(addLine, delay);
            }
        }

        setTimeout(addLine, 1000);
    
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
      
<div className="noise"></div>

<div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-60"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 transition-all duration-300">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 overflow-hidden group-hover:border-crimson/50 transition-colors">
<iconify-icon className="text-white text-base relative z-10" icon="solar:shield-check-linear"></iconify-icon>
<div className="absolute inset-0 bg-crimson/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</div>
<span className="font-mono text-sm tracking-wide text-white">TRACE<span className="text-crimson">0</span></span>
</a>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
<a className="px-4 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors" href="#capabilities">Capabilities</a>
<a className="px-4 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors" href="#intelligence">Intelligence</a>
<a className="px-4 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors" href="#pricing">Engage</a>
</div>
<button className="group flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-medium rounded-sm hover:bg-zinc-200 transition-colors tracking-tight">
<span>Console Login</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">

<div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[800px] h-[800px] border border-white/5 rounded-full relative">
<div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-[25%] border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-transparent to-white/10 origin-left animate-radar"></div>
</div>
</div>
<div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
<div className="reveal active inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-crimson"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Live Threat Monitoring</span>
</div>
<h1 className="reveal delay-100 active text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white leading-[0.9] mb-8">
                PREDICT <br/>
<span className="text-zinc-600">THE UNSEEN</span>
</h1>
<p className="reveal delay-200 active max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed tracking-tight font-light mb-10">
                Advanced adversarial simulation and threat intelligence for infrastructure that cannot fail. Trace0 identifies vectors before they become breaches.
            </p>
<div className="reveal delay-300 active flex flex-col sm:flex-row gap-4 w-full justify-center">
<button className="px-8 py-3.5 bg-crimson hover:bg-red-600 text-white text-sm font-medium rounded-sm transition-all hover:shadow-[0_0_20px_rgba(235,59,59,0.3)] flex items-center justify-center gap-2 group">
                    Start Assessment
                    <iconify-icon className="text-lg" icon="solar:scanner-linear"></iconify-icon>
</button>
<button className="px-8 py-3.5 bg-transparent border border-white/10 hover:border-white/30 text-zinc-300 hover:text-white text-sm font-medium rounded-sm transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:file-download-linear"></iconify-icon>
                    View Sample Report
                </button>
</div>
</div>
<div className="absolute bottom-10 animate-bounce text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</section>

<div className="border-y border-white/5 bg-black/50 backdrop-blur-sm py-4 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:globe-linear"></iconify-icon> Global Sensors Active
            </div>
<div className="hidden md:flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Latency: 12ms
            </div>
<div className="flex items-center gap-2 text-crimson">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon> Threats Blocked: 14,209
            </div>
</div>
</div>

<section className="py-24 px-6 relative z-10" id="capabilities">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">Offensive Security</h2>
<p className="text-zinc-500 text-sm max-w-md">We adopt the mindset of the adversary to fortify your defenses.</p>
</div>
<div className="hidden md:block h-px flex-1 bg-white/10 mx-8 mb-2"></div>
<div className="font-mono text-xs text-zinc-600">SYS_MODULE_01</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass p-8 rounded-sm group relative overflow-hidden reveal delay-100">
<div className="scanline"></div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-crimson group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:bug-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Red Teaming</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">Full-scope adversarial simulation targeting people, processes, and technology to expose critical blind spots.</p>
<ul className="text-xs text-zinc-400 space-y-2 font-mono">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> Social Engineering</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> Physical Intrusion</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> Network Exploitation</li>
</ul>
</div>

<div className="glass p-8 rounded-sm group relative overflow-hidden reveal delay-200">
<div className="scanline"></div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-crimson group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:code-scan-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Source Code Audit</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">Static and dynamic analysis of application source code to identify logic flaws and vulnerabilities before deployment.</p>
<ul className="text-xs text-zinc-400 space-y-2 font-mono">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> Automated SAST</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> Manual Logic Review</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> API Security</li>
</ul>
</div>

<div className="glass p-8 rounded-sm group relative overflow-hidden reveal delay-300">
<div className="scanline"></div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-crimson group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Cloud Security</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">Comprehensive review of AWS, Azure, and GCP environments to ensure compliance and configuration integrity.</p>
<ul className="text-xs text-zinc-400 space-y-2 font-mono">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> IAM Policy Analysis</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> Container Security</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-crimson rounded-full"></span> Kubernetes Hardening</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-crimson font-mono text-xs tracking-widest uppercase mb-4 block">Intelligence Feeds</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Real-time Threat <br/>Telemetry</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
                    Our sensors ingest millions of data points daily. We correlate IoCs across global networks to provide preemptive warnings for your specific technology stack.
                </p>
<div className="flex gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-mono text-white mb-1">2.4<span className="text-crimson">M</span></div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Daily Signals</div>
</div>
<div>
<div className="text-3xl font-mono text-white mb-1">0.02<span className="text-crimson">s</span></div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest">Detection Time</div>
</div>
</div>
</div>
<div className="reveal delay-200">
<div className="glass rounded-md overflow-hidden border border-white/10 bg-[#0A0A0A]">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-zinc-500">root@trace0-node-42:~</div>
</div>
<div className="p-6 font-mono text-xs h-[300px] overflow-hidden relative">
<div className="text-zinc-400 space-y-2" id="terminal-content">
<div className="flex gap-2"><span className="text-crimson">$</span> <span>init_sequence --target=all</span></div>
<div className="text-zinc-600">Loading modules...</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">Engagement Models</h2>
<p className="text-zinc-500 text-sm">Flexible partnership structures designed for modern security teams.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-sm flex flex-col hover:border-zinc-700 transition-colors reveal delay-100">
<div className="mb-4">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Point-in-Time</h3>
<p className="text-zinc-500 text-xs mb-6 h-10">Single scope assessments for compliance or specific product launches.</p>
<div className="mt-auto">
<ul className="text-xs text-zinc-400 space-y-3 mb-8">
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Defined Scope</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Executive Report</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> One-time Retest</li>
</ul>
<button className="w-full py-2 border border-white/10 text-white text-xs hover:bg-white hover:text-black transition-colors rounded-sm">Request Quote</button>
</div>
</div>

<div className="glass p-8 rounded-sm flex flex-col border-crimson/30 relative bg-crimson_dim/5 reveal delay-200">
<div className="absolute top-0 right-0 bg-crimson text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Recommended</div>
<div className="mb-4">
<iconify-icon className="text-2xl text-crimson" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Continuous</h3>
<p className="text-zinc-500 text-xs mb-6 h-10">Ongoing security partnership integrating directly with your SDLC.</p>
<div className="mt-auto">
<ul className="text-xs text-zinc-400 space-y-3 mb-8">
<li className="flex gap-2"><iconify-icon className="text-crimson" icon="solar:check-circle-linear"></iconify-icon> Monthly Assessments</li>
<li className="flex gap-2"><iconify-icon className="text-crimson" icon="solar:check-circle-linear"></iconify-icon> Slack Integration</li>
<li className="flex gap-2"><iconify-icon className="text-crimson" icon="solar:check-circle-linear"></iconify-icon> DevSecOps Consulting</li>
</ul>
<button className="w-full py-2 bg-white text-black text-xs hover:bg-zinc-200 transition-colors rounded-sm font-medium">Start Partnership</button>
</div>
</div>

<div className="glass p-8 rounded-sm flex flex-col hover:border-zinc-700 transition-colors reveal delay-300">
<div className="mb-4">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:shield-user-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Red Team Retainer</h3>
<p className="text-zinc-500 text-xs mb-6 h-10">Advanced adversarial simulation for mature security organizations.</p>
<div className="mt-auto">
<ul className="text-xs text-zinc-400 space-y-3 mb-8">
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Multi-vector Attacks</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Blue Team Training</li>
<li className="flex gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Custom Tooling</li>
</ul>
<button className="w-full py-2 border border-white/10 text-white text-xs hover:bg-white hover:text-black transition-colors rounded-sm">Contact Sales</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="font-mono text-sm text-white">TRACE<span className="text-crimson">0</span></span>
</div>
<div className="flex gap-6 text-[11px] text-zinc-500 font-sans tracking-wide">
<a className="hover:text-white transition-colors" href="#">PRIVACY</a>
<a className="hover:text-white transition-colors" href="#">TERMS</a>
<a className="hover:text-white transition-colors" href="#">PGP KEY</a>
<a className="hover:text-white transition-colors" href="#">STATUS</a>
</div>
<div className="text-[11px] text-zinc-600 font-mono">
                © 2024 TRACE0 INC.
            </div>
</div>
</footer>



    </>
  );
}
