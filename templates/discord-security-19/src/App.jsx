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
serif: ['Instrument Serif', 'serif'],
},
colors: {
brand: {
// Changed to Discord-like Blurple/Indigo
green: '#5865F2',
glow: '#818CF8',
dark: '#020204',
panel: '#0A0B10',
border: 'rgba(255,255,255,0.08)'
}
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 40s linear infinite',
'dash': 'dash 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
dash: {
'to': { strokeDashoffset: '24' }
}
}
}
}
}



        // Scroll Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
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
      

<div className="fixed inset-0 pointer-events-none -z-10 bg-grid"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[600px] bg-brand-green/10 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>

<nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[92%] max-w-5xl z-50 transition-all duration-300">
<div className="glass-panel rounded-full p-2 pl-4 md:pl-6 flex items-center justify-between shadow-2xl shadow-brand-green/10">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-brand-green rounded-full shadow-[0_0_12px_rgba(88,101,242,0.8)]"></div>
<span className="text-sm font-medium tracking-wide font-sans text-white/90">GuildGuard</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#security">Security</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors" href="#customers">Servers</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-xs font-normal text-white/60 hover:text-white transition-colors px-4" href="#">Login</a>
<button className="bg-white text-brand-dark px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs font-medium hover:bg-brand-green hover:text-white transition-all duration-300">
                    Add to Discord
                </button>
</div>
</div>
</nav>
<main className="pt-32 md:pt-40 pb-20">

<section className="container mx-auto px-6 max-w-6xl text-center mb-20 md:mb-32 relative">
<div className="reveal active flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 backdrop-blur-sm mb-6 md:mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-green"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-[10px] md:text-[11px] font-medium text-brand-green tracking-wide uppercase">Discord TOS Compliant</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white tracking-tight leading-[0.95] mb-6 md:mb-8">
                    The Safety Net for <br className="hidden md:block"/>
<span className="text-white/50 italic pr-2">Modern</span> <span className="text-gradient">Communities.</span>
</h1>
<p className="text-base md:text-xl font-light text-white/50 max-w-2xl leading-relaxed mb-8 md:mb-10 mx-auto">
                    Instantly backup members, roles, and channels. Recover from raids, nukes, and accidental deletions with a single command.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4">
<button className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-brand-dark">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020402_0%,#5865F2_50%,#020402_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-panel px-8 py-3.5 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-[#0f1016]">
                            Start Backup
                            <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-white/60 hover:text-white transition-colors border border-transparent hover:border-white/10 hover:bg-white/5">
                        Read Documentation
                    </button>
</div>
</div>
</section>

<section className="container mx-auto px-4 max-w-7xl mb-24 md:mb-40 reveal">
<div className="relative group perspective-[2000px]">

<div className="absolute -inset-1 bg-gradient-to-r from-brand-green to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

<div className="relative rounded-xl bg-[#0A0B10] border border-brand-border overflow-hidden shadow-2xl transform transition-transform duration-700 md:hover:rotate-x-2">

<div className="h-10 border-b border-brand-border flex items-center px-4 justify-between bg-white/[0.02]">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] font-mono text-white/30 flex items-center gap-2">
<span className="iconify" data-icon="lucide:shield-check" data-width="10"></span>
                            guildguard.gg/dashboard/members
                        </div>
</div>
<div className="flex flex-col md:flex-row h-auto md:h-[700px]">

<div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-brand-border p-4 flex md:flex-col gap-1 hidden md:flex">
<div className="text-xs font-medium text-white/40 mb-4 px-2 tracking-wider">SERVER ID: 9483...</div>
<div className="flex items-center gap-3 px-3 py-2 bg-brand-green/10 text-brand-green rounded-md text-sm font-medium cursor-pointer">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
                                Members
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:database-backup" data-width="16"></span>
                                Backups
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-md text-sm font-medium cursor-pointer transition-colors">
<span className="iconify" data-icon="lucide:shield-alert" data-width="16"></span>
                                Anti-Nuke
                            </div>
<div className="mt-auto hidden md:block">
<div className="p-3 rounded-lg border border-brand-border bg-white/[0.02]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] text-white/50">Backup Slots</span>
<span className="text-[10px] text-white">4/5</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-brand-green w-[80%]"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 p-4 md:p-8 bg-gradient-to-br from-[#0A0B10] to-[#050508] relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="flex flex-col md:flex-row justify-between md:items-end mb-8 md:mb-10 relative z-10 gap-4">
<div>
<h2 className="text-xl md:text-2xl font-medium text-white mb-1">Member Stability</h2>
<p className="text-sm text-white/50 font-light">Real-time tracking of joins, leaves, and restorations.</p>
</div>
<div className="flex items-center gap-3">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-green"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-xs text-brand-green font-mono">PROTECTED</span>
<div className="h-8 w-[1px] bg-white/10 mx-2"></div>
<button className="flex items-center gap-2 text-xs text-white/70 bg-white/5 border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:history" data-width="12"></span>
                                        Last 24h
                                    </button>
</div>
</div>

<div className="w-full overflow-x-auto pb-4 md:pb-0">
<div className="min-w-[500px] h-64 flex items-end justify-between gap-2 mb-8 md:mb-12 relative z-10 pl-4 border-l border-white/5 border-b pb-4">

<div className="w-full bg-brand-green/10 h-[30%] rounded-t-sm relative group hover:bg-brand-green/20 transition-all duration-300">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] text-white bg-black border border-white/10 px-2 py-1 rounded transition-opacity">254</div>
</div>
<div className="w-full bg-brand-green/10 h-[45%] rounded-t-sm relative group hover:bg-brand-green/20 transition-all duration-300"></div>
<div className="w-full bg-brand-green/10 h-[35%] rounded-t-sm relative group hover:bg-brand-green/20 transition-all duration-300"></div>
<div className="w-full bg-brand-green/10 h-[60%] rounded-t-sm relative group hover:bg-brand-green/20 transition-all duration-300"></div>
<div className="w-full bg-brand-green/20 h-[50%] rounded-t-sm relative group hover:bg-brand-green/30 transition-all duration-300"></div>
<div className="w-full bg-brand-green/20 h-[75%] rounded-t-sm relative group hover:bg-brand-green/30 transition-all duration-300"></div>
<div className="w-full bg-brand-green/30 h-[55%] rounded-t-sm relative group hover:bg-brand-green/40 transition-all duration-300"></div>
<div className="w-full bg-gradient-to-t from-brand-green/40 to-brand-green/80 h-[85%] rounded-t-sm relative shadow-[0_0_20px_rgba(88,101,242,0.2)]"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
<div className="glass-panel p-5 rounded-lg">
<div className="flex items-start justify-between mb-4">
<div className="p-2 rounded-md bg-white/5 text-white/70">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
</div>
<span className="text-xs font-mono text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+12%</span>
</div>
<div className="text-2xl font-medium text-white mb-1">12,450</div>
<div className="text-xs text-white/40">Total Members</div>
</div>
<div className="glass-panel p-5 rounded-lg">
<div className="flex items-start justify-between mb-4">
<div className="p-2 rounded-md bg-white/5 text-white/70">
<span className="iconify" data-icon="lucide:server" data-width="18"></span>
</div>
<span className="text-xs font-mono text-white/30 bg-white/5 px-1.5 py-0.5 rounded">SYNC</span>
</div>
<div className="text-2xl font-medium text-white mb-1">99.9%</div>
<div className="text-xs text-white/40">Restore Accuracy</div>
</div>
<div className="glass-panel p-5 rounded-lg border-brand-green/20 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-green/5"></div>
<div className="flex items-start justify-between mb-4 relative z-10">
<div className="p-2 rounded-md bg-brand-green/20 text-brand-green">
<span className="iconify" data-icon="lucide:database" data-width="18"></span>
</div>
</div>
<div className="text-2xl font-medium text-white mb-1 relative z-10">Active</div>
<div className="text-xs text-white/40 relative z-10">Backup Status</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 bg-white/[0.01] py-12 mb-32 overflow-hidden">
<div className="text-center mb-8">
<p className="text-xs font-medium text-white/30 uppercase tracking-[0.2em] px-4">Trusted by the largest communities</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee flex gap-24 whitespace-nowrap opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500 pl-4">
<span className="text-xl font-medium tracking-tight font-serif">AnimeHub</span>
<span className="text-xl font-bold tracking-tighter">ValoComp</span>
<span className="text-xl font-light tracking-widest font-sans">CRYPTOVERSE</span>
<span className="text-xl font-medium italic font-serif">PixelArt</span>
<span className="text-xl font-semibold tracking-tight">TechSupport</span>
<span className="text-xl font-medium tracking-tight font-serif">AnimeHub</span>
<span className="text-xl font-bold tracking-tighter">ValoComp</span>
<span className="text-xl font-light tracking-widest font-sans">CRYPTOVERSE</span>
<span className="text-xl font-medium italic font-serif">PixelArt</span>
<span className="text-xl font-semibold tracking-tight">TechSupport</span>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32" id="features">
<div className="mb-16 md:text-center max-w-2xl mx-auto reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Complete Server Immunity</h2>
<p className="text-white/50 font-light leading-relaxed">
                    Don't let a rogue admin or targeted attack destroy years of community building. Our engine snapshots your server state every hour.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 rounded-3xl bg-[#0A0B10] border border-white/10 p-8 md:p-10 relative overflow-hidden group reveal">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 blur-[80px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-green">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="20"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Instant Member Recovery</h3>
<p className="text-white/50 text-sm font-light leading-relaxed max-w-md">
                                When disaster strikes, verify your identity and watch as members, roles, and permissions are automatically restored via OAuth2.
                            </p>
</div>

<div className="w-full h-24 md:h-32 relative border-t border-white/5 mt-4 pt-6">
<div className="flex justify-between items-center px-4 md:px-12">
<div className="flex flex-col items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
<span className="iconify text-white/40" data-icon="lucide:database" data-width="14"></span>
</div>
<div className="w-1 h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
</div>
<div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#5865F2] animate-pulse"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center shadow-[0_0_20px_rgba(88,101,242,0.3)]">
<span className="iconify" data-icon="lucide:user-plus" data-width="18"></span>
</div>
<div className="text-[10px] text-brand-green font-mono mt-1">RESTORING...</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-[#0A0B10] border border-white/10 p-8 relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/80">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Audit Logs</h3>
<p className="text-white/50 text-sm font-light mb-8">
                        Permanent, immutable logs of every action taken on your server.
                    </p>

<div className="bg-white/5 rounded-lg p-4 border border-white/5 transform group-hover:scale-105 transition-transform duration-500 origin-bottom">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
<span className="text-red-400">WARN</span> User_01 kicked
                            </div>
<div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
<span className="text-brand-green">INFO</span> Snapshot saved
                            </div>
<div className="flex items-center gap-2 text-[10px] text-white/60 font-mono">
<span className="text-brand-green">INFO</span> Restore initiated
                            </div>
<div className="w-full h-1 bg-white/5 rounded-full mt-1"></div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-[#0A0B10] border border-white/10 p-8 relative overflow-hidden group reveal delay-100">
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full"></div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<span className="iconify" data-icon="lucide:siren" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Anti-Nuke</h3>
<p className="text-white/50 text-sm font-light mb-8">
                        Automatically lock down channels if suspicious mass-deletion is detected.
                    </p>
<div className="relative h-24">
<div className="absolute inset-0 flex items-center gap-1">

<div className="relative w-full bg-white/5 rounded-xl p-3 flex items-center justify-between border border-white/5">
<span className="text-xs text-white/60">Lockdown Mode</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer toggle-checkbox" type="checkbox" value=""/>
<div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-green toggle-label"></div>
</label>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl bg-[#0A0B10] border border-white/10 p-8 md:p-10 relative overflow-hidden group reveal">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 h-full">
<div className="max-w-xs">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/80">
<span className="iconify" data-icon="lucide:terminal" data-width="20"></span>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Developer API</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">
                                Built for bot developers. Trigger restores, check backup integrity, and manage whitelists programmatically.
                            </p>
</div>

<div className="w-full md:w-[320px] bg-[#020402] border border-white/10 rounded-xl p-4 font-mono text-[10px] text-gray-400 shadow-2xl relative">
<div className="flex gap-1.5 mb-3">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="space-y-1">
<p><span className="text-purple-400">const</span> <span className="text-blue-400">backup</span> = <span className="text-purple-400">await</span> guard.<span className="text-yellow-300">restore</span>({</p>
<p className="pl-4"><span className="text-white">guild_id:</span> <span className="text-green-400">'9834...'</span>,</p>
<p className="pl-4"><span className="text-white">target:</span> <span className="text-green-400">'members'</span>,</p>
<p className="pl-4"><span className="text-white">force:</span> <span className="text-green-400">true</span></p>
<p>});</p>
<p className="text-gray-600">// Returns restored count</p>
</div>
<div className="absolute -right-2 -bottom-2 w-full h-full border border-brand-green/20 rounded-xl -z-10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative overflow-hidden border-y border-white/5">
<div className="absolute inset-0 bg-brand-green/5 mix-blend-overlay"></div>
<div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-8">From Ruin to Recovery</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">

<div className="flex flex-col gap-4 items-center opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
<div className="relative w-64 h-64">

<div className="absolute top-0 left-10 p-3 bg-white/5 border border-white/10 rounded-lg transform -rotate-12">
<span className="iconify text-red-400" data-icon="lucide:user-x" data-width="24"></span>
</div>
<div className="absolute bottom-10 right-4 p-3 bg-white/5 border border-white/10 rounded-lg transform rotate-6">
<span className="iconify text-yellow-400" data-icon="lucide:alert-triangle" data-width="24"></span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white/5 border border-white/10 rounded-lg transform -rotate-3 z-10">
<span className="iconify text-white/60" data-icon="lucide:trash-2" data-width="32"></span>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none" viewbox="0 0 100 100">
<path d="M30,30 Q50,50 70,30" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2"></path>
<path d="M30,70 Q50,50 70,70" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="2,2"></path>
</svg>
</div>
<p className="text-sm font-medium text-white/40 uppercase tracking-widest">Server Nuked</p>
</div>

<div className="flex flex-col gap-4 items-center">
<div className="relative w-64 h-64 flex items-center justify-center">
<div className="absolute inset-0 border border-brand-green/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-brand-green/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-24 h-24 bg-brand-panel rounded-full border border-brand-green/30 flex items-center justify-center shadow-[0_0_30px_rgba(88,101,242,0.2)] relative z-10">
<div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:shield-check" data-width="32"></span>
</div>
</div>

<div className="absolute top-0 left-1/2 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#5865F2]"></div>
<div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-brand-green/50 rounded-full"></div>
</div>
<p className="text-sm font-medium text-brand-green uppercase tracking-widest">Instant Restore</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-4xl text-center mb-24 mt-24">
<div className="glass-panel p-10 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden reveal">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-green/10 to-transparent pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6 relative z-10">Don't wait until it's too late.</h2>
<p className="text-base md:text-lg text-white/50 font-light mb-10 max-w-lg mx-auto relative z-10">
                    Join 10,000+ communities using GuildGuard to secure their hard work and memories.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
<button className="bg-white text-brand-dark px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-xl shadow-white/5">
                        Add to Server
                    </button>
<button className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        View Premium
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020402] pt-20 pb-10">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 bg-brand-green rounded-full"></div>
<span className="text-sm font-medium tracking-wide text-white">GuildGuard</span>
</div>
<p className="text-white/40 text-sm max-w-xs font-light">
                        The ultimate security layer for Discord communities. Not affiliated with Discord Inc.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Product</h4>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Backup</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Anti-Nuke</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Restore</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Resources</h4>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Support</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-sm">Legal</h4>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Terms</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Security</a>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 sm:gap-0">
<span className="text-white/20 text-xs font-mono">© 2024 GuildGuard Inc.</span>
<div className="flex gap-4">
<span className="iconify text-white/40 hover:text-white cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify text-white/40 hover:text-white cursor-pointer transition-colors" data-icon="lucide:linkedin" data-width="16"></span>
<span className="iconify text-white/40 hover:text-white cursor-pointer transition-colors" data-icon="lucide:github" data-width="16"></span>
</div>
</div>
</div>
</footer>


    </>
  );
}
