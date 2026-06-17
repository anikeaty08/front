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



        function copyIP() {
            const ipText = document.getElementById('server-ip').innerText;
            navigator.clipboard.writeText(ipText).then(() => {
                const feedback = document.getElementById('copy-feedback');
                const icon = document.getElementById('copy-icon');
                
                feedback.classList.remove('opacity-0');
                feedback.classList.add('opacity-100');
                icon.style.opacity = '0';
                
                setTimeout(() => {
                    feedback.classList.remove('opacity-100');
                    feedback.classList.add('opacity-0');
                    icon.style.opacity = '1';
                }, 2000);
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
      <div className="top-0 w-full h-screen -z-10 bg-cover bg-center blur-sm fixed brightness-50 invert-0" data-alpha-mask="100" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37f1f4d2-1f77-4b02-8130-3729cb88c6f9_800w.png?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)'}}></div>


<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/20">D</div>
<span className="text-white font-medium tracking-tight text-lg">DIABLO SERVER</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-white hover:text-emerald-400 transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#community">Community</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    Store
                </a>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-colors text-xs font-medium tracking-tight group">
<iconify-icon icon="logos:google-icon" width="14"></iconify-icon>
<span>Login with Google</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex gap-2 animate-fade-in text-xs font-medium text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 translate-x-1 -translate-y-16 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Server is Online • 1.20.4
            </div>
<h1 className="md:text-7xl lg:text-8xl -translate-x-1 text-5xl font-semibold text-white tracking-tight mb-6 blur-none -translate-y-16 -skew-x-10" style={{maskImage: 'linear-gradient(60deg, transparent, black 30%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(60deg, transparent, black 30%, black 80%, transparent)'}}>
                SMP DIABLO <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">limits.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto -translate-x-4 -translate-y-16" style={{maskImage: 'linear-gradient(130deg, transparent, black 10%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 10%, black 85%, transparent)'}}>
                Join an immersive survival experience hosted on high-performance nodes. Build, battle, and explore a world without boundaries.
            </p>

<div className="flex flex-col items-center gap-4">
<div className="group flex hover:border-emerald-500/30 transition-all duration-300 cursor-pointer bg-zinc-900/50 border-white/10 border rounded-xl pt-1 pr-2 pb-1 pl-1 relative backdrop-blur-sm -translate-y-16 items-center" onclick="copyIP()">
<div className="px-4 py-3 flex items-center gap-3">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-0.5">Server Address</div>
<div className="font-mono text-white text-sm md:text-base tracking-wide" id="server-ip">in1.candynodes.xyz:6550</div>
</div>
</div>
<div className="pl-4 pr-3 border-l border-white/5">
<span className="text-xs font-medium text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-1/2 -translate-y-1/2" id="copy-feedback">Copied!</span>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors group-hover:opacity-0 transition-opacity duration-200" icon="lucide:copy" id="copy-icon" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<p className="text-xs text-zinc-600">Click to copy address</p>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-zinc-900/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">99.9%</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Uptime</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">500+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Active Players</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">12ms</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Low Latency</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide">Support</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Community Gallery</h2>
<p className="text-zinc-400 max-w-md">Showcase your best builds and moments. Join the community and upload
                    your
                    screenshots directly.</p>
</div>
<button className="inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">
<iconify-icon className="" icon="lucide:upload-cloud" strokeWidth="1.5" width="18"></iconify-icon>
                    Upload Screenshot
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 gap-y-4">

<div className="group relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-zoom-in">
<img alt="Minecraft Landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
<p className="text-white text-sm font-medium">Spawn Castle</p>
<p className="text-xs text-zinc-400">By BuilderJohn</p>
</div>
</div>

<div className="group relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-zoom-in">
<img alt="Minecraft Build" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
<p className="text-white text-sm font-medium">Nether Hub</p>
<p className="text-xs text-zinc-400">By RedstoneMaster</p>
</div>
</div>

<div className="group relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-white/5 cursor-zoom-in">
<img alt="Minecraft Survival" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
<p className="text-white text-sm font-medium">Village Trade Center</p>
<p className="text-xs text-zinc-400">By CraftySteve</p>
</div>
</div>

<div className="group relative aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900/30 border border-dashed border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/50 transition-all cursor-pointer flex flex-col items-center justify-center gap-3">
<div className="p-3 rounded-full bg-zinc-800 text-zinc-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">Add your shot</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
<iconify-icon icon="lucide:swords" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">PVP Arena</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Engage in balanced combat with custom kits and ranked matchmaking systems.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
<iconify-icon icon="lucide:pickaxe" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Economy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Player-driven economy with dynamic shops, auction house, and trading.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Land Claim</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Protect your builds with our intuitive golden shovel claiming system.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to start your journey?</h2>
<p className="text-zinc-400 mb-8">Join thousands of other players on CandyNodes today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" onclick="copyIP()">
<iconify-icon className="fill-current" icon="lucide:play" strokeWidth="1.5" width="16"></iconify-icon>
                    Join Server
                </button>
<button className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Discord
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">C</div>
<span className="text-white font-medium tracking-tight">CANDYNODES</span>
</div>
<p className="text-sm text-zinc-500">The ultimate Minecraft survival experience designed for community and creativity.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
<div>
<h4 className="text-white text-sm font-medium mb-4">Play</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Survival</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Skyblock</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Creative</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Support</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Store</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Vote</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Staff</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Rules</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-xs text-zinc-600">
<p>© 2024 CandyNodes Network. Not affiliated with Mojang AB.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:youtube" strokeWidth="1.5" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
