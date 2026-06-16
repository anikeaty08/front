import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const logs = [
                "INBOUND: 192.168.1.1 -> [REDACTED] | PROTOCOL: TCP/SYN | STATUS: BLOCKED",
                "WARNING: Unauthorized access attempt on PORT 22 (SSH)",
                "PAYLOAD DELIVERED: Node_42 encrypted successfully.",
                "CONNECTION LOST: Proxy server 7 in quadrant Alpha offline.",
                "OSINT: New vulnerability mapped (CVE-2024-XXXX) on target.",
                "TRAFFIC SPIKE: 45TB/s detected originating from subnet C.",
                "DECRYPTING... Key match found for sector 7G.",
                "BREACH ALERT: Firewall rules bypassed at perimeter."
            ];
            const terminal = document.getElementById('live-terminal-logs');
            const hexStream = document.getElementById('hex-stream');
            const statExploits = document.getElementById('stat-exploits');
            const statBreaches = document.getElementById('stat-breaches');

            setInterval(() => {
                // Update Hex Decryption String
                const chars = '0123456789ABCDEF';
                let hex = '0x';
                for(let i=0; i<64; i++) hex += chars[Math.floor(Math.random() * 16)];
                if(hexStream) hexStream.innerText = hex;
                
                // Update Glassmorphism Stats
                if(statExploits) statExploits.innerText = (Math.floor(Math.random() * 50) + 1420).toLocaleString();
                if(statBreaches) statBreaches.innerText = Math.floor(Math.random() * 5) + 32;

                // Prepend New Terminal Log
                if(terminal) {
                    const log = document.createElement('div');
                    const isAlert = Math.random() > 0.8;
                    log.className = `text-[10px] md:text-xs mb-1 font-mono-custom opacity-80 ${isAlert ? 'text-[#FF3131]' : 'text-[#00FF41]'}`;
                    log.innerText = `[${new Date().toISOString().substring(11,19)}] ` + logs[Math.floor(Math.random() * logs.length)];
                    terminal.prepend(log);
                    
                    // Maintain max log count to prevent overflow
                    if(terminal.children.length > 7) {
                        terminal.removeChild(terminal.lastChild);
                    }
                }
            }, 1800); // Ticks every 1.8s
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-[9998] opacity-[0.06] mix-blend-screen" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="pointer-events-none fixed inset-0 z-[9999] opacity-20" style={{background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px'}}></div>

<div className="fixed top-0 w-full bg-[#050505] border-b border-[#00FF41]/20 z-50 overflow-hidden py-1.5 backdrop-blur-md">
<div className="ticker-wrap font-mono-custom text-xs text-[#00FF41]/80 tracking-wider">
<div className="w-1/2 flex justify-around whitespace-nowrap">
<span>[SYS_LATENCY: 12ms]</span>
<span className="text-[#FF3131]">[ALERT: NODE_79 BREACH DETECTED]</span>
<span>[GLOBAL_TRAFFIC: ENCRYPTED]</span>
<span>[ACTIVE_TARGETS: 1,402]</span>
<span>[PACKET_LOSS: 0.01%]</span>
</div>
<div className="w-1/2 flex justify-around whitespace-nowrap">
<span>[SYS_LATENCY: 12ms]</span>
<span className="text-[#FF3131]">[ALERT: NODE_79 BREACH DETECTED]</span>
<span>[GLOBAL_TRAFFIC: ENCRYPTED]</span>
<span>[ACTIVE_TARGETS: 1,402]</span>
<span>[PACKET_LOSS: 0.01%]</span>
</div>
</div>
</div>

<header className="fixed top-12 left-0 right-0 z-40 px-4 md:px-8">
<nav className="mx-auto max-w-6xl bg-black/60 border border-white/5 backdrop-blur-xl rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_40px_rgba(0,0,0,0.8)]">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono-custom font-medium text-white tracking-tighter">
                    SS
                </div>
<span className="font-mono-custom text-sm font-medium tracking-tight text-white hidden sm:block">ShadowStack</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors malfunction-btn" data-hex="0xMAP" href="#command-center">Command Center</a>
<a className="hover:text-white transition-colors malfunction-btn" data-hex="0xARS" href="#arsenal">Arsenal</a>
<a className="hover:text-white transition-colors malfunction-btn" data-hex="0xLIV" href="#feed">Live Feed</a>
</div>

<button className="malfunction-btn flex items-center gap-2 bg-[#FF3131]/10 border border-[#FF3131]/30 text-[#FF3131] px-4 py-1.5 rounded-full text-xs font-mono-custom font-medium uppercase tracking-wider pulse-red" data-hex="0xDEADBEEF">
<span><iconify-icon className="inline-block align-middle mr-1" icon="solar:shield-network-linear" width="16"></iconify-icon>Connect VPN</span>
</button>
</nav>
</header>
<main className="flex-grow pt-32 md:pt-48 pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col gap-24 md:gap-32 relative">

<section className="flex flex-col items-center text-center gap-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/20 text-[#00FF41] text-xs font-mono-custom mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse"></span>
                v2.4.1_stable_release
            </div>
<div className="glitch-wrapper mb-2">
<h1 className="font-mono-custom text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white uppercase glitch-text" data-text="Operate in the Shadows">
                    Operate in the Shadows
                </h1>
</div>
<p className="max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed font-medium drop-shadow-md">
                The complete encrypted toolkit for Red-Teamers, Pen-Testers, and InfoSec specialists. Command your infrastructure from the abyss.
            </p>
</section>

<section className="relative w-full h-[600px] border border-[#00FF41]/30 rounded-2xl overflow-hidden bg-black shadow-[0_0_50px_rgba(0,255,65,0.05)] z-10 card-glitch group" id="command-center">

<div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none">
<span className="text-xs font-mono-custom text-[#FF3131] uppercase tracking-widest mb-1 opacity-80">Global Threat Level</span>
<div className="text-xl md:text-2xl font-mono-custom font-bold tracking-tighter threat-level-text"></div>
</div>

<div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,1)] mix-blend-multiply"></div>
<div className="absolute inset-0 z-30 pointer-events-none map-scanline opacity-30"></div>

<div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center" style={{filter: 'grayscale(1) contrast(2.5) sepia(1) hue-rotate(70deg) saturate(4) brightness(0.4)'}}></div>

<svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" preserveaspectratio="xMidYMid slice" viewbox="0 0 1000 500">
<defs>
<lineargradient id="comet" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="80%" stop-color="#FF3131" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#FF3131" stop-opacity="1"></stop>
</lineargradient>
</defs>

<path className="attack-path" d="M 200 150 Q 400 50 600 220" fill="none" stroke="url(#comet)" strokeWidth="2"></path>
<circle className="impact-ripple delay-1" cx="600" cy="220"></circle>
<circle className="animate-pulse" cx="600" cy="220" fill="#FF3131" r="3"></circle>

<path className="attack-path delay-1" d="M 850 300 Q 700 400 450 250" fill="none" stroke="url(#comet)" strokeWidth="2"></path>
<circle className="impact-ripple delay-2" cx="450" cy="250"></circle>
<circle className="animate-pulse delay-1" cx="450" cy="250" fill="#FF3131" r="3"></circle>

<path className="attack-path delay-2" d="M 350 400 Q 550 200 750 150" fill="none" stroke="url(#comet)" strokeWidth="1.5"></path>
<circle className="impact-ripple delay-3" cx="750" cy="150"></circle>
<circle className="animate-pulse delay-2" cx="750" cy="150" fill="#FF3131" r="3"></circle>

<path className="attack-path delay-3" d="M 500 100 Q 400 250 250 350" fill="none" stroke="url(#comet)" strokeWidth="2"></path>
<circle className="impact-ripple delay-1" cx="250" cy="350"></circle>
<circle className="animate-pulse delay-3" cx="250" cy="350" fill="#FF3131" r="3"></circle>
</svg>

<div className="absolute bottom-12 left-4 md:left-8 w-72 md:w-80 h-48 bg-[#050505]/80 backdrop-blur-md border border-[#00FF41]/20 rounded-lg p-4 z-40 hidden sm:flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.8)]">
<div className="flex items-center justify-between border-b border-[#00FF41]/20 pb-2 mb-3">
<span className="text-xs font-mono-custom text-[#00FF41]">/var/log/syslog</span>
<span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse"></span>
</div>
<div className="flex-grow overflow-hidden flex flex-col justify-end mask-image: linear-gradient(to top, transparent, black)" id="live-terminal-logs">

</div>
</div>

<div className="absolute top-0 right-0 h-full w-full md:w-72 bg-[#020202]/60 backdrop-blur-md border-l border-[#00FF41]/20 z-40 p-6 flex flex-col gap-8 transform translate-x-full md:translate-x-0 transition-transform hidden md:flex">
<div>
<h3 className="font-mono-custom text-[#00FF41] text-xs uppercase tracking-widest border-b border-[#00FF41]/20 pb-2 mb-4">Threat Statistics</h3>
<div className="flex flex-col gap-6">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-mono-custom mb-1">Total Exploits</span>
<span className="text-2xl font-mono-custom font-semibold text-white tracking-tight" id="stat-exploits">1,420</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-mono-custom mb-1">Active Breaches</span>
<span className="text-2xl font-mono-custom font-semibold text-[#FF3131] tracking-tight" id="stat-breaches">32</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-mono-custom mb-1">Nodes Compromised</span>
<span className="text-2xl font-mono-custom font-semibold text-[#00FF41] tracking-tight text-glow">89%</span>
</div>
</div>
</div>
<div className="mt-auto">
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-2">
<div className="h-full bg-[#FF3131] w-[92%] animate-pulse"></div>
</div>
<div className="flex justify-between text-xs font-mono-custom text-slate-500">
<span>Network Load</span>
<span className="text-[#FF3131]">92%</span>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-[#050505] border-t border-[#00FF41]/30 p-1.5 z-40 flex justify-center items-center">
<div className="font-mono-custom text-xs text-[#00FF41] opacity-70 tracking-widest truncate max-w-full px-4 text-center mix-blend-screen" id="hex-stream">
                    0xINITIATING_DECRYPTION_SEQUENCE...
                </div>
</div>
</section>

<section className="flex flex-col gap-8 scroll-mt-32 relative z-10" id="arsenal">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<h2 className="font-mono-custom text-lg md:text-xl font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-[#00FF41]" icon="solar:box-minimalistic-linear"></iconify-icon>
                    /core_arsenal
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-8 bg-[#020202] border border-white/5 rounded-xl p-6 flex flex-col relative overflow-hidden group transition-all duration-300 hover:border-[#FF3131]/50 shadow-lg card-glitch">
<div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5 relative z-10">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-[#FF3131]/50"></div>
</div>
<span className="text-xs font-mono-custom text-slate-500 ml-2">root@shadowstack:~</span>
</div>
<div className="font-mono-custom text-sm leading-relaxed relative z-10 flex-grow">
<div className="text-slate-500 mb-2">$ ./init_scan.sh -target 192.168.1.0/24</div>
<div className="text-[#00FF41] typing-container mb-2">
<span>Initializing deep network reconnaissance...</span>
</div>
<div className="text-[#FF3131] opacity-0 animate-[fadeIn_0.5s_ease-in_3.5s_forwards]">
                            [+] Discovered 42 active hosts.<br/>
                            [!] CRITICAL: Vulnerability mapped to Node 12.<br/>
                            [+] Awaiting payload execution...
                        </div>
<style>@keyframes fadeIn { to { opacity: 1; } }</style>
</div>
</div>

<div className="md:col-span-4 bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col relative group card-glitch backdrop-blur-sm">
<div className="absolute top-4 right-4 text-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity font-mono-custom text-xs">
                        [PORT: 443]
                    </div>
<iconify-icon className="text-white mb-4" icon="solar:radar-linear" width="32"></iconify-icon>
<h3 className="font-mono-custom text-base font-medium text-white mb-2">OSINT Engine</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Aggregate digital footprints across clear, deep, and dark web vectors automatically.</p>
</div>

<div className="md:col-span-4 bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col relative group card-glitch backdrop-blur-sm">
<div className="absolute top-4 right-4 text-[#FF3131] opacity-0 group-hover:opacity-100 transition-opacity font-mono-custom text-xs">
                        [CVE-2023-XXXX]
                    </div>
<iconify-icon className="text-white mb-4" icon="solar:bug-minimalistic-linear" width="32"></iconify-icon>
<h3 className="font-mono-custom text-base font-medium text-white mb-2">Exploit Framework</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Automated payload delivery system with zero-day integration capabilities.</p>
<div className="mt-auto h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#FF3131] w-[85%]"></div>
</div>
</div>

<div className="md:col-span-4 bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col relative group card-glitch backdrop-blur-sm">
<div className="absolute top-4 right-4 text-[#00FF41] opacity-0 group-hover:opacity-100 transition-opacity font-mono-custom text-xs">
                        [AES-256-GCM]
                    </div>
<iconify-icon className="text-white mb-4" icon="solar:shield-keyhole-minimalistic-linear" width="32"></iconify-icon>
<h3 className="font-mono-custom text-base font-medium text-white mb-2">Cryptographic Vault</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Military-grade obfuscation and key management for outgoing transmissions.</p>
</div>

<div className="md:col-span-4 bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col relative group card-glitch backdrop-blur-sm">
<div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity font-mono-custom text-xs">
                        [MEM_DUMP: OK]
                    </div>
<iconify-icon className="text-white mb-4" icon="solar:magnifer-linear" width="32"></iconify-icon>
<h3 className="font-mono-custom text-base font-medium text-white mb-2">Digital Forensics</h3>
<p className="text-sm text-slate-500 mb-4 flex-grow">Deep memory analysis and packet reconstruction post-breach.</p>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative z-10">

<section className="flex flex-col gap-6 scroll-mt-32" id="feed">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<h2 className="font-mono-custom text-lg md:text-xl font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-[#FF3131]" icon="solar:pulse-linear"></iconify-icon>
                        /recent_exploits
                    </h2>
<span className="text-xs font-mono-custom text-[#FF3131] uppercase tracking-widest animate-pulse">Live</span>
</div>
<div className="flex flex-col gap-3">
<div className="bg-[#020202]/80 border border-white/5 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-glitch backdrop-blur-md">
<div className="flex items-start gap-3">
<div className="mt-1">
<iconify-icon className="text-[#FF3131]" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<div className="font-mono-custom text-sm text-white mb-1">Privilege Escalation via Kernel Mod</div>
<div className="text-xs text-slate-500">Target: prod-db-01 | Vector: Memory Corruption</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded bg-[#FF3131]/10 text-[#FF3131] text-xs font-mono-custom font-medium uppercase border border-[#FF3131]/20">Critical</span>
<span className="text-xs font-mono-custom text-slate-600">2m ago</span>
</div>
</div>
<div className="bg-[#020202]/80 border border-white/5 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-glitch backdrop-blur-md">
<div className="flex items-start gap-3">
<div className="mt-1">
<iconify-icon className="text-[#00FF41]" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<div className="font-mono-custom text-sm text-white mb-1">Firewall Rule Bypassed</div>
<div className="text-xs text-slate-500">Target: gateway-alpha | Vector: Spoofing</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded bg-[#00FF41]/10 text-[#00FF41] text-xs font-mono-custom font-medium uppercase border border-[#00FF41]/20">Elevated</span>
<span className="text-xs font-mono-custom text-slate-600">14m ago</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6 scroll-mt-32" id="vault">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<h2 className="font-mono-custom text-lg md:text-xl font-medium tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:lock-password-linear"></iconify-icon>
                        /classified_vault
                    </h2>
</div>
<div className="border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden flex-grow h-full min-h-[300px] bg-black">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center filter brightness-50 contrast-125 saturate-0 blur-[2px]"></div>
<div className="absolute top-1/2 left-0 right-0 h-1 bg-[#00FF41]/20 blur-md transform -translate-y-1/2 shadow-[0_0_40px_10px_rgba(0,255,65,0.3)]"></div>
<div className="absolute inset-0 bg-black/60"></div>
</div>
<div className="relative z-10 flex flex-col items-center max-w-sm w-full">
<div className="w-16 h-16 rounded-full bg-black/50 border border-[#FF3131]/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,49,49,0.1)]">
<iconify-icon className="text-[#FF3131]" icon="solar:fingerprint-linear" width="32"></iconify-icon>
</div>
<h3 className="font-mono-custom text-base text-white mb-2">Authentication Required</h3>
<p className="text-xs text-slate-400 mb-8 font-mono-custom drop-shadow-md">Enter decryption key to access Zero-Day archives.</p>
<div className="w-full flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-black/80 border border-white/10 rounded-md py-3 px-4 text-center font-mono-custom text-[#FF3131] tracking-[0.3em] text-sm focus:outline-none cursor-not-allowed opacity-80 backdrop-blur-sm" disabled="" placeholder="DECRYPTION KEY" type="password" value="••••••••••••••••"/>
<div className="absolute inset-0 bg-transparent cursor-not-allowed" title="System Locked"></div>
</div>
<button className="w-full bg-black/50 border border-white/10 text-slate-400 py-3 rounded-md font-mono-custom text-xs uppercase tracking-widest cursor-not-allowed malfunction-btn" data-hex="0xLOCKED" disabled="">
<span>Access Denied</span>
</button>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="mt-auto border-t border-white/5 bg-[#020202] py-8 md:py-12 relative z-10">
<div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon className="text-white" icon="solar:fingerprint-minimalistic-linear" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="font-mono-custom text-white text-sm tracking-tight leading-none">ShadowStack</span>
<span className="font-mono-custom text-[#FF3131] text-xs uppercase mt-1">Burn After Reading</span>
</div>
</div>
<div className="flex gap-6 text-xs font-mono-custom text-slate-500">
<a className="hover:text-white transition-colors malfunction-btn" data-hex="0xGPG" href="#">GPG Key</a>
<a className="hover:text-white transition-colors malfunction-btn" data-hex="0xONN" href="#">Onion Router</a>
<a className="hover:text-white transition-colors malfunction-btn" data-hex="0xOPS" href="#">Terminal Ops</a>
</div>
<div className="font-mono-custom text-xs text-slate-600 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF3131] animate-pulse"></div>
                System Compromised
            </div>
</div>
</footer>



    </>
  );
}
