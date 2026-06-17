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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
cyber: {
black: '#050505',
dark: '#0a0a0a',
panel: '#121212',
border: '#27272a',
accent: '#3b82f6', // Electric Blue
glow: '#06b6d4', // Cyan
matrix: '#10b981', // Green
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'cursor': 'cursor .75s step-end infinite',
'fade-in': 'fadeIn 0.8s ease-out forwards',
},
keyframes: {
cursor: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed inset-0 bg-grid z-[-1]"></div>
<div className="fixed inset-0 bg-noise z-0 opacity-20"></div>
<div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
<div className="fixed bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-cyber-black/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-lg font-medium text-zinc-100 tracking-tight" href="#">深矢</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-cyan-400 transition-colors" href="#about">About</a>
<a className="hover:text-cyan-400 transition-colors" href="#skills">Skills</a>
<a className="hover:text-cyan-400 transition-colors" href="#projects">Projects</a>
<a className="px-4 py-2 rounded border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-200 transition-all hover:border-cyan-500/30" href="#contact">
                    Hire Me
                </a>
</div>
</div>
</nav>

<main className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="order-2 lg:order-1 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                    System Online • Available for Contracts
                </div>
<h1 className="lg:text-6xl leading-[1.1] text-4xl font-medium text-zinc-100 tracking-tight mb-6">Hello, I'm <br/> <span className="text-gradient">Miya Ferguson</span></h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-lg mb-8">I am a Cybersecurity graduate with 2+ years of experience in securing information systems, conducting threat intelligence, ensuring security compliance, and building secure networks for companies and enterprises.</p>
<div className="flex flex-wrap gap-4">
<a className="group relative px-6 py-3 bg-zinc-100 text-zinc-950 font-medium rounded text-sm hover:bg-white transition-all overflow-hidden" href="#projects">
<span className="flex items-center gap-2 z-10 relative">
                            View Operations
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</span>
</a>
<a className="hover:bg-white/5 hover:border-white/20 transition-all flex items-center gap-2 text-sm font-medium text-zinc-300 border-white/10 border rounded pt-3 pr-6 pb-3 pl-6" href="https://drive.google.com/file/d/1ESG9nszc_Dpug89BmuNfzliSOMMAzaiE/view?usp=sharing">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
                        Download Resume
                    </a>
</div>
</div>

<div className="order-1 lg:order-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="relative rounded-lg border border-white/10 bg-[#050505] shadow-2xl shadow-cyan-900/10 backdrop-blur-sm overflow-hidden">

<div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
<div className="text-[10px] text-zinc-600 font-mono ml-auto">EAT-THE-WORLD-ALIVE@kali:~</div>
</div>

<div className="p-6 font-mono text-xs md:text-sm leading-6 text-zinc-300">
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span className="text-cyan-400">~</span>
<span className="">whoami</span>
</div>
<div className="text-zinc-400 mb-4">&gt; Miya Ferguson &gt; Cybersecurity Professional |  &gt; Location: Orlando, FL</div>
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span className="text-cyan-400">~</span>
<span className="">./run_diagnostics.sh --target=infrastructure</span>
</div>
<div className="text-zinc-500 mb-4">
                            [+] Initializing environment...<br/>
                            [+] Checking security protocols... <span className="text-green-500">SECURE</span><br/>
                            [+] Loading portfolio modules... <span className="text-green-500">DONE</span><br/>
                            [+] Systems optimization... <span className="text-green-500">100%</span>
</div>
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span className="text-cyan-400">~</span>
<span className="typing-cursor border-r-2 border-zinc-500 pr-1 animate-cursor">awaiting_input...</span>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="">
<div className="text-3xl font-medium text-zinc-100 tracking-tight">2+</div>
<div className="text-xs text-zinc-500 font-mono mt-1 uppercase tracking-wider">Years Experience</div>
</div>
<div className="">
<div className="text-3xl font-medium text-zinc-100 tracking-tight">30+</div>
<div className="uppercase text-xs text-zinc-500 tracking-wider font-mono mt-1">Projects completed</div>
</div>
<div className="">
<div className="text-3xl font-medium text-zinc-100 tracking-tight">100%</div>
<div className="uppercase text-xs text-zinc-500 tracking-wider font-mono mt-1">Drive</div>
</div>
<div className="">
<div className="text-3xl font-medium text-zinc-100 tracking-tight">3.8-4.0</div>
<div className="uppercase text-xs text-zinc-500 tracking-wider font-mono mt-1">GPA</div>
</div>
</div>
</div>
</div>

<section className="max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="about">
<div className="space-y-6 text-center md:text-left">
<h2 className="flex items-center gap-2 justify-center md:justify-start text-2xl font-medium text-zinc-100 tracking-tight">
<iconify-icon className="text-cyan-500" icon="lucide:user"></iconify-icon>
                Mission Profile
            </h2>
<p className="leading-relaxed text-lg font-light text-zinc-400">In today’s dynamic digital environment, I address cyber threats directly and adapt to evolving challenges. I believe ambitious goals are achieved through hard work and discipline, so I welcome demanding situations that foster growth. 
I consistently bring ambition, discipline, and teamwork to every role, stepping in where I’m needed to enhance security and resilience. My core motivation is to protect and support the most vulnerable, using my technical expertise to combat digital crime and help others build a safer future.</p>
</div>
</section>

<section className="max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="skills">
<div className="mb-16">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-4">Technical Arsenal</h2>
<p className="text-zinc-500">Skills and capabilities deployed across multiple domains.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all">
<div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-medium mb-4">Dev &amp; Architecture</h3>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm text-zinc-400 font-mono">
<span className="">Python / BASH / PowerShell</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="bg-blue-500 w-[75%] h-full"></div></div>
</li>
<li className="flex text-sm text-zinc-400 font-mono items-center justify-between">
<span className="">Network Config</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="bg-blue-500 w-[90%] h-full"></div></div>
</li>
<li className="flex text-sm text-zinc-400 font-mono items-center justify-between">
<span className="">Docker / Linux</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="bg-blue-500 w-[85%] h-full"></div></div>
</li>
<li className="flex text-sm text-zinc-400 font-mono items-center justify-between">
<span className="">Apache / NGINX</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="bg-blue-500 w-[97%] h-full"></div></div>
</li>
</ul>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-cyan-500/20 transition-all relative overflow-hidden group">
<div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 relative z-10">
<iconify-icon className="" icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-100 font-medium mb-4 relative z-10">Cybersecurity &amp; Pentesting</h3>
<ul className="space-y-3 relative z-10">
<li className="flex items-center justify-between text-sm text-zinc-400 font-mono">
<span className="">Web App Security</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-cyan-500 w-[95%]"></div></div>
</li>
<li className="flex items-center justify-between text-sm text-zinc-400 font-mono">
<span className="">Kali Linux / Metasploit</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-cyan-500 w-[90%]"></div></div>
</li>
<li className="flex items-center justify-between text-sm text-zinc-400 font-mono">
<span className="">Vulnerability Assess.</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-cyan-500 w-[92%]"></div></div>
</li>
<li className="flex text-sm text-zinc-400 font-mono items-center justify-between">
<span className="">OSINT, CKC, MITRE ATT&amp;CK, Diamond Model</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="bg-cyan-500 w-[98%] h-full"></div></div>
</li>
</ul>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all">
<div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon className="" icon="lucide:activity" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-zinc-100 mb-4">Cloud &amp; Compliance</h3>
<ul className="space-y-3">
<li className="flex text-sm text-zinc-400 font-mono items-center justify-between">
<span className="">Security Analysis</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[90%]"></div></div>
</li>
<li className="flex items-center justify-between text-sm text-zinc-400 font-mono">
<span className="">AWS / Azure</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="bg-purple-500 w-[85%] h-full"></div></div>
</li>
<li className="flex items-center justify-between text-sm text-zinc-400 font-mono">
<span className="">HIPPA / PCI DSS / GDPR / CCPA / SOX</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[95%]"></div></div>
</li>
<li className="flex items-center justify-between text-sm text-zinc-400 font-mono">
<span className="">Presenting</span>
<div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[88%]"></div></div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6 border-t border-white/5">
<div className="mb-16">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-4">Academic History</h2>
</div>
<div className="relative border-l border-white/10 ml-3 space-y-12">

<div className="relative pl-12">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
<h3 className="text-xl font-medium text-zinc-100">Bachelor of Science in Cybersecurity (B.S.)</h3>
<span className="text-xs text-cyan-400 font-mono bg-cyan-500/5 border-cyan-500/20 border rounded pt-1 pr-2 pb-1 pl-2">2025 - Present</span>
</div>
<p className="text-sm font-medium text-zinc-400 mb-4">Full Sail University, Winter Park, FL</p>
<ul className="list-disc list-outside text-zinc-400 ml-4 space-y-2 text-sm font-light">
<li className="">GPA : 3.8 / 4.0.</li>
<li className="">Relevant Coursework: Threat Intelligence &amp; Defense, Cyber Crime &amp; Incident Response, Identity &amp; Access Management, Network Security &amp; Software, Security Compliance &amp; Privacy, Data Visualization, Audit preparation and execution, Penetration Testing, OSINT.</li>
</ul>
</div>

<div className="relative pl-12">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
<h3 className="text-xl font-medium text-zinc-100">Associate of Science in Information Technology (A.S.)</h3>
<span className="text-xs text-zinc-500 font-mono border-zinc-700/50 border rounded pt-1 pr-2 pb-1 pl-2">2024 - 2025</span>
</div>
<p className="text-sm font-medium text-zinc-400 mb-4">Full Sail University, Winter Park, FL</p>
<ul className="list-disc list-outside text-zinc-400 ml-4 space-y-2 text-sm font-light">
<li className="">GPA : 3.8 / 4.0.</li>
<li className="">Relevant Coursework: Identity &amp; Access Management, Network Security &amp; Software, Security Compliance &amp;
Privacy, Threat Intelligence &amp; Defense, Software Security, Threat Protection, Cyber Crime &amp; Incident Response, Network Configuration &amp; Engineering, Coding, Virtualization, Cloud Configuration &amp; Management, </li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="projects">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-2">Projects</h2>
<p className="text-zinc-500">A handful of projects that I am proud of</p>
</div>
<a className="hover:text-white flex items-center gap-2 transition-colors text-sm text-zinc-400" href="https://drive.google.com/drive/u/4/folders/1wJgyVow4DMvO1ZpxUhkDGMTqIwoORgy1" target="_blank">View the Collection</a>
</div>
<div className="grid md:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="group overflow-hidden hover:border-cyan-500/30 transition-all duration-300 bg-[#0A0A0A] border-white/10 border rounded-xl">
<div className="flex overflow-hidden cursor-pointer bg-gradient-to-br from-zinc-900 to-zinc-950 h-48 border-white/5 border-b relative items-center justify-center" onclick="window.location.href='https://drive.google.com/file/d/1y9K_8gYCaib8ibnhtxfFWvCllNArxGFQ/view?usp=sharing'" role="button">

<div className="transform group-hover:scale-105 transition-transform duration-500 bg-black/50 w-3/4 h-3/4 border-white/10 border rounded-lg pt-4 pr-4 pb-4 pl-4 relative backdrop-blur-sm cursor-pointer" onclick="window.location.href='https://drive.google.com/file/d/1y9K_8gYCaib8ibnhtxfFWvCllNArxGFQ/view?usp=sharing'" role="button">
<div className="flex gap-2 border-white/5 border-b mb-4 pb-2 gap-x-2 gap-y-2 items-center">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<div className="h-1 w-12 bg-white/10 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/5 rounded"></div>
<div className="h-2 w-2/3 bg-white/5 rounded"></div>
<div className="h-8 w-full bg-gradient-to-r from-green-500/20 to-transparent mt-4 rounded border border-green-500/20"></div>
</div>
</div>
</div>
<div className="cursor-pointer pt-6 pr-6 pb-6 pl-6" onclick="window.location.href='https://drive.google.com/file/d/1y9K_8gYCaib8ibnhtxfFWvCllNArxGFQ/view?usp=sharing'" role="button">
<div className="flex mb-3 items-center justify-between">
<h3 className="text-lg font-medium text-zinc-100">Monthly Intelligence Report</h3>
<iconify-icon className="text-zinc-600" icon="lucide:lock" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-zinc-400 mb-4">A monthly threat intelligence report on Jasper Sleet, Scattered Spider, and KAWA4096.</p>
<div className="flex flex-wrap gap-2 text-xs text-zinc-500 font-mono gap-x-2 gap-y-2">
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Threat Intelligence</span>
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Diamond Model</span>
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">MITRE ATT&amp;CK</span>
</div>
</div>
</div>

<div className="group bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
<div className="h-48 bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-zinc-800 group-hover:text-purple-500/50 transition-colors duration-500" icon="lucide:terminal-square" width="64"></iconify-icon>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-zinc-100">Secure Network Design</h3>
<iconify-icon className="text-zinc-600" icon="lucide:file-check" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-zinc-400 mb-4">A stylized network diagram depicting a secure network layout for a main office and a separate database.</p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Networking</span>
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Secure Architecture</span>
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Network Security</span>
</div>
</div>
</div>

<div className="group bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
<div className="h-48 bg-gradient-to-br from-zinc-900 to-zinc-950 flex items-center justify-center border-b border-white/5">
<iconify-icon className="group-hover:text-blue-500/50 transition-colors duration-500 text-zinc-800" height="64" icon="lucide:presentation" style={{color: 'rgb(59, 130, 246)'}} width="64"></iconify-icon>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium text-zinc-100">COPPA Compliance Presentation</h3>
<iconify-icon className="text-zinc-600" icon="lucide:layout" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-zinc-400 mb-4">A presentation about the Children's Online Privacy and Protection Act, what it's about, and how to stay compliant with it.</p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Communication</span>
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Softskills</span>
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Presenting</span>
</div>
</div>
</div>

<div className="group bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-green-500/30 transition-all duration-300">
<div className="flex bg-gradient-to-br from-zinc-900 to-zinc-950 h-48 border-white/5 border-b items-center justify-center">
<iconify-icon className="group-hover:text-green-500/50 transition-colors duration-500 text-zinc-800" height="64" icon="lucide:bot" style={{color: 'rgb(34, 197, 94)'}} width="64"></iconify-icon>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-3 items-center justify-between cursor-pointer" onclick="window.location.href='https://drive.google.com/file/d/1eSAXF2kvCEbYhpJ_LCKOK8zfIu6vtQvo/view?usp=sharing'" role="button">
<h3 className="cursor-pointer text-lg font-medium text-zinc-100" onclick="window.location.href='https://drive.google.com/file/d/1eSAXF2kvCEbYhpJ_LCKOK8zfIu6vtQvo/view?usp=sharing'" role="button">Securing All Seven IT Domains Presentation</h3>
<iconify-icon className="text-zinc-600" icon="lucide:globe" width="16"></iconify-icon>
</div>
<p className="text-sm font-light text-zinc-400 mb-4">Briefing organization executives on how their company should go about securing all 7 IT domains.</p>
<div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Communication</span>
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Softskills</span>
<span className="bg-white/5 rounded pt-1 pr-2 pb-1 pl-2">Presenting</span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pr-6 pb-20 pl-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-zinc-700 mb-6 mx-auto" icon="lucide:fingerprint" width="40"></iconify-icon>
<h2 className="text-2xl font-medium text-zinc-200 mb-4 tracking-tight">The Philosophy</h2>
<blockquote className="md:text-2xl leading-relaxed text-xl font-light italic text-zinc-500">Aut Inveniam Viam Aut Faciam‎ <br/>"I
  shall either find a way or make one"</blockquote>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5" id="contact">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">
<div className="">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-4">Initialize Connection</h2>
<p className="font-light text-zinc-400 mb-8">I can't wait to meet you.</p>
<div className="space-y-4 mb-8">
<a className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors" href="mailto:hello@yashsharma.com">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<span className="text-sm font-mono">mnf.kumonosu@gmail.com</span>
</a>
<a className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors" href="#">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/5">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</div>
<span className="text-sm font-mono">/in/miya-ferguson-78442a314/</span>
</a>
<a className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors" href="#">
</a>
</div>
</div>

<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-zinc-200 outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all font-light" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded p-3 text-zinc-200 outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all font-light" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Project Scope</label>
<select className="w-full bg-white/5 border border-white/10 rounded p-3 text-zinc-400 outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all font-light appearance-none">
<option>Pentesting / Security Audit</option>
<option>Automation / Bot Development</option>
<option>Full Stack Engineering</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded p-3 text-zinc-200 outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all font-light" placeholder="Brief description of your requirements..." rows="4"></textarea>
</div>
<button className="hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all text-sm font-medium text-white tracking-wide bg-gradient-to-r from-cyan-600 to-blue-600 w-full rounded pt-4 pb-4" type="button">
                    TRANSMIT MESSAGE
                </button>
</form>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center">
<div className="text-xs text-zinc-600 font-mono"></div>
</footer>

    </>
  );
}
