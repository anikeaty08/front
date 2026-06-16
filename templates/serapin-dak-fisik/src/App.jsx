import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
theme: {
bg: 'rgb(255, 248, 248)',
fg: 'rgb(33, 25, 29)',
primary: 'rgb(136, 75, 107)',
secondary: 'rgb(114, 87, 99)',
muted: 'rgb(241, 222, 228)',
'muted-fg': 'rgb(80, 67, 72)',
input: 'rgb(255, 240, 244)',
border: 'rgb(130, 115, 121)',
accent: 'rgb(255, 216, 232)'
}
}
}
},
plugins: []
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">

<div className="absolute inset-0 z-20 spotlight transition-opacity duration-300"></div>

<div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] morph-shape mix-blend-multiply dark:mix-blend-screen bg-[rgb(136,75,107)]/10 dark:bg-indigo-600/10" style={{animationDuration: '25s'}}></div>
<div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[80px] morph-shape mix-blend-multiply dark:mix-blend-screen bg-[rgb(255,216,232)]/30 dark:bg-blue-600/10" style={{animationDelay: '-5s', animationDuration: '20s'}}></div>

<svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<header :className="{ 'bg-theme-bg/80 dark:bg-black/70 backdrop-blur-xl border-b border-theme-border/20 dark:border-white/10': scrolled, 'bg-transparent border-transparent': !scrolled }" className="fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-default">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-theme-primary to-theme-secondary flex items-center justify-center shadow-lg shadow-theme-primary/20 text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight hidden md:block dark:text-white text-theme-fg">Serapin<span className="text-theme-primary dark:text-indigo-400">DAK</span></span>
</div>

<div className="flex items-center gap-4">
<button className="text-xs font-medium px-4 py-1.5 rounded-full dark:bg-white/10 dark:hover:bg-white/20 transition-all backdrop-blur-md border border-transparent hover:border-theme-border/30 bg-theme-muted hover:bg-theme-muted/80 text-theme-muted-fg dark:text-white">
                    Login
                </button>

<button :className="darkMode ? 'bg-slate-700' : 'bg-theme-muted'" @click="darkMode = !darkMode" className="relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary bg-theme-muted">
<span className="sr-only">Toggle Dark Mode</span>
<span :className="darkMode ? 'translate-x-5' : 'translate-x-0'" className="absolute left-1 top-1 w-5 h-5 rounded-full transition-transform duration-300 shadow-sm flex items-center justify-center bg-white translate-x-0">
<iconify-icon :icon="darkMode ? 'solar:moon-linear' : 'solar:sun-2-linear'" className="text-theme-fg" icon="solar:sun-2-linear" width="12"></iconify-icon>
</span>
</button>
</div>
</div>
</header>

<main className="max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative space-y-32">

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 min-h-[60vh] gap-x-12 gap-y-12 items-center">

<div className="space-y-6 scroll-trigger opacity-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-muted dark:bg-indigo-500/10 text-theme-primary dark:text-indigo-400 text-[10px] tracking-wider uppercase font-semibold border border-theme-border/20 dark:border-indigo-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-theme-primary dark:bg-indigo-500 animate-pulse"></span>
                    Transparansi Publik 2024
                </div>
<h1 className="text-5xl md:text-7xl tracking-tight dark:text-white leading-[1.1] font-semibold text-theme-fg">
                    Serapin <span className="bg-clip-text dark:from-indigo-400 dark:to-blue-400 text-transparent bg-gradient-to-r from-theme-primary to-theme-secondary">DAK</span>
</h1>
<p className="text-xl md:text-2xl text-theme-muted-fg dark:text-neutral-400 tracking-tight max-w-md leading-relaxed font-medium">
                    Visualisasi data realisasi fisik nasional yang akurat, terbuka, dan terintegrasi.
                </p>
<div className="flex gap-4 pt-4">
<button className="px-6 py-2.5 rounded-full bg-theme-primary dark:bg-white text-white dark:text-black font-medium text-sm hover:scale-105 transition-transform shadow-lg shadow-theme-primary/20">Jelajahi Data</button>
</div>
</div>

<div className="relative w-full max-w-md mx-auto md:ml-auto scroll-trigger delay-200 opacity-0 transform translate-y-4">
<div className="absolute -inset-1 bg-gradient-to-r from-theme-primary to-theme-secondary rounded-3xl opacity-20 blur-xl"></div>
<div className="glass dark:bg-neutral-900/60 bg-theme-bg/80 rounded-3xl p-8 relative shadow-2xl dark:shadow-black/50 shadow-theme-primary/5">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-theme-border/50 dark:via-white/50 to-transparent opacity-50"></div>
<div className="flex justify-center mb-8">
<div className="p-4 rounded-full bg-theme-input dark:bg-white/5">
<iconify-icon className="dark:text-neutral-400 text-theme-border" icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
</div>
<form @submit.prevent="" className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-theme-muted-fg ml-3">Username</label>
<div className="relative group">
<input className="w-full bg-theme-input dark:bg-white/5 border border-transparent focus:border-theme-primary/30 focus:bg-white dark:focus:bg-white/10 rounded-2xl px-4 py-3 text-sm outline-none transition-all placeholder:text-theme-border/60 text-theme-fg dark:text-white" placeholder="NIP / Email Dinas" type="text"/>
<iconify-icon className="absolute right-4 top-3.5 text-theme-border group-focus-within:text-theme-primary transition-colors" icon="solar:user-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-theme-muted-fg ml-3">Password</label>
<div className="relative group">
<input className="w-full bg-theme-input dark:bg-white/5 border border-transparent focus:border-theme-primary/30 focus:bg-white dark:focus:bg-white/10 rounded-2xl px-4 py-3 text-sm outline-none transition-all placeholder:text-theme-border/60 text-theme-fg dark:text-white" placeholder="••••••••" type="password"/>
<iconify-icon className="absolute right-4 top-3.5 text-theme-border group-focus-within:text-theme-primary transition-colors" icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
</div>
<button className="w-full mt-6 bg-theme-fg dark:bg-white text-white dark:text-black font-medium py-3 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl relative overflow-hidden group">
<span className="relative z-10">Masuk Dashboard</span>
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
</button>
</form>
</div>
</div>
</section>

<section className="w-full scroll-trigger delay-100 opacity-0">
<div className="relative rounded-3xl overflow-hidden border border-theme-border/20 dark:border-white/10 bg-theme-bg/50 dark:bg-white/5 backdrop-blur-sm p-1 shadow-sm">

<div className="bg-white dark:bg-[#121214] rounded-[22px] p-6 md:p-10 relative overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
<div>
<h2 className="text-lg font-semibold dark:text-white text-theme-fg flex items-center gap-2">
<iconify-icon className="text-theme-primary" icon="solar:graph-up-linear"></iconify-icon>
                                Realisasi Nasional
                            </h2>
<p className="text-xs text-theme-muted-fg mt-1">Data diperbarui terakhir: 09 Desember 2025</p>
</div>
<div className="text-left md:text-right">
<div className="text-3xl md:text-4xl tracking-tight dark:text-white text-theme-fg font-semibold" x-data="{ current: 0, target: 83.2 }" x-init="setTimeout(() =&gt; { const interval = setInterval(() =&gt; { current += 1.2; if(current &gt;= target) { current = target; clearInterval(interval); } }, 20); }, 500)">
<span x-text="current.toFixed(1)">0.0</span>%
                            </div>
<div className="text-sm font-medium text-theme-muted-fg">Rp13.42 Triliun Tersalurkan</div>
</div>
</div>

<div className="relative h-64 w-full mt-8 group">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-theme-border/50">
<div className="border-b border-theme-border/10 dark:border-white/5 w-full h-0"></div>
<div className="border-b border-theme-border/10 dark:border-white/5 w-full h-0"></div>
<div className="border-b border-theme-border/10 dark:border-white/5 w-full h-0"></div>
<div className="border-b border-theme-border/10 dark:border-white/5 w-full h-0"></div>
<div className="border-b border-theme-border/10 dark:border-white/5 w-full h-0"></div>
</div>

<div className="absolute inset-0 flex items-end justify-between px-2 md:px-6">

<div className="w-1 md:w-5 bg-theme-muted dark:bg-white/10 rounded-t-full h-[40%] chart-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 md:w-3 bg-theme-muted dark:bg-white/10 rounded-t-full h-[80%] chart-bar" style={{animationDelay: '0.4s'}}></div>
<div className="w-1 md:w-3 bg-theme-muted dark:bg-white/10 rounded-t-full h-[70%] chart-bar" style={{animationDelay: '0.5s'}}></div>
<div className="w-1 md:w-3 bg-theme-muted dark:bg-white/10 rounded-t-full h-[90%] chart-bar" style={{animationDelay: '0.6s'}}></div>
<div className="w-1 md:w-3 bg-theme-muted dark:bg-white/10 rounded-t-full h-[85%] chart-bar" style={{animationDelay: '0.7s'}}></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xl" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgb(136, 75, 107)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(114, 87, 99)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path className="chart-line" d="M0,70 Q10,55 20,65 T40,40 T60,50 T80,20 T100,10" fill="none" stroke="url(#lineGradient)" strokeWidth="0.5"></path>
<path className="chart-bar" d="M0,70 Q10,55 20,65 T40,40 T60,50 T80,20 T100,10 L100,100 L0,100 Z" fill="url(#lineGradient)" fillOpacity="0.1" style={{animationDelay: '0.5s'}}></path>
</svg>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full pointer-events-none mix-blend-overlay" style={{animation: 'shimmer 4s infinite linear'}}></div>
</div>
</div>
</div>
</section>

<section className="space-y-8 scroll-trigger delay-300 opacity-0">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight dark:text-white text-theme-fg">Kinerja DAK Fisik 2025</h3>
<div className="flex gap-1 md:hidden">
<iconify-icon className="animate-pulse text-theme-muted-fg" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">

<div className="min-w-[200px] snap-center bg-white dark:bg-[#121214] p-5 rounded-2xl border border-theme-border/20 dark:border-white/5 hover:border-theme-primary/50 transition-colors group cursor-default shadow-sm">
<div className="w-10 h-10 rounded-full bg-theme-muted dark:bg-blue-500/10 text-theme-primary dark:text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:file-check-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-semibold dark:text-white text-theme-fg mb-1">18.65T</div>
<div className="text-xs font-medium text-theme-muted-fg">PAGU</div>
</div>
<div className="min-w-[200px] snap-center bg-white dark:bg-[#121214] p-5 rounded-2xl border border-theme-border/20 dark:border-white/5 hover:border-theme-primary/50 transition-colors group cursor-default shadow-sm">
<div className="w-10 h-10 rounded-full bg-[rgb(255,219,200)]/30 dark:bg-indigo-500/10 text-[rgb(127,85,58)] dark:text-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:buildings-2-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-semibold dark:text-white text-theme-fg mb-1">18.47T</div>
<div className="text-xs font-medium text-theme-muted-fg">Rencana Kegiatan</div>
</div>
<div className="min-w-[200px] snap-center bg-white dark:bg-[#121214] p-5 rounded-2xl border border-theme-border/20 dark:border-white/5 hover:border-theme-primary/50 transition-colors group cursor-default shadow-sm">
<div className="w-10 h-10 rounded-full bg-[rgb(243,187,154)]/20 dark:bg-emerald-500/10 text-[rgb(127,85,58)] dark:text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-semibold dark:text-white text-theme-fg mb-1">17.69T</div>
<div className="text-xs font-medium text-theme-muted-fg">Kontrak</div>
</div>
<div className="min-w-[200px] snap-center bg-white dark:bg-[#121214] p-5 rounded-2xl border border-theme-border/20 dark:border-white/5 hover:border-theme-primary/50 transition-colors group cursor-default shadow-sm">
<div className="w-10 h-10 rounded-full bg-theme-muted/50 dark:bg-amber-500/10 text-theme-secondary dark:text-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-semibold dark:text-white text-theme-fg mb-1">13.42T</div>
<div className="text-xs font-medium text-theme-muted-fg">Penyaluran</div>
</div>
<div className="min-w-[200px] snap-center bg-white dark:bg-[#121214] p-5 rounded-2xl border border-theme-border/20 dark:border-white/5 hover:border-theme-primary/50 transition-colors group cursor-default shadow-sm">
<div className="w-10 h-10 rounded-full bg-theme-input dark:bg-rose-500/10 text-theme-primary dark:text-rose-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bell-bing-linear" width="20"></iconify-icon>
</div>
<div className="text-2xl font-semibold dark:text-white text-theme-fg mb-1">5.87T</div>
<div className="text-xs font-medium text-theme-muted-fg">Penyerapan</div>
</div>
</div>
</section>

</main>

<footer className="border-t border-theme-border/20 dark:border-white/5 bg-theme-bg dark:bg-[#020203] relative z-10 scroll-trigger delay-200 opacity-0">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-4">
<div className="flex items-center gap-2 dark:text-white text-theme-fg font-semibold tracking-tight text-lg">
<iconify-icon className="text-theme-primary" icon="solar:shield-check-linear"></iconify-icon>
                    Serapin DAK
                </div>
<p className="text-sm text-theme-muted-fg dark:text-neutral-400 max-w-xs">
                    Sistem transparansi data DAK Fisik terintegrasi.
                </p>
<p className="text-xs pt-4 text-theme-border">© 2025 Tim DAK Fisik Bidang PMK</p>
</div>

<div className="flex flex-col md:items-end justify-between">
<div className="flex gap-6 md:gap-8 text-sm font-medium text-theme-muted-fg dark:text-neutral-300">
<a className="hover:text-theme-primary transition-colors" href="#">Regulasi</a>
<a className="hover:text-theme-primary transition-colors" href="#">Panduan</a>
<a className="hover:text-theme-primary transition-colors" href="#">Sumber Data</a>
</div>
<div className="mt-8 md:mt-0 flex items-center gap-2 text-xs bg-theme-muted/30 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-transparent hover:border-theme-border/30 dark:hover:border-white/10 transition-colors text-theme-muted-fg dark:text-neutral-400">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
                    Data bersumber dari SLDK Kemenkeu
                </div>
</div>
</div>
</footer>

<div className="fixed inset-0 pointer-events-none z-0 px-6 max-w-7xl mx-auto hidden md:flex justify-between opacity-[0.03] dark:opacity-[0.05]">
<div className="w-px h-full bg-theme-fg dark:bg-white"></div>
<div className="w-px h-full bg-theme-fg dark:bg-white"></div>
<div className="w-px h-full bg-theme-fg dark:bg-white"></div>
</div>


69
    </>
  );
}
