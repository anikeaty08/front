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
darkMode: 'class',
theme: {
extend: {
colors: {
brand: '#145ff2',
branddark: '#0e46b5',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
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
      
<div className="bg-noise mix-blend-multiply dark:mix-blend-overlay"></div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 dark:opacity-100 transition-opacity duration-500">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-brand/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] bg-blue-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-zinc-200 dark:border-white/5 bg-white/70 dark:bg-black/50 backdrop-blur-md transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/20">
<iconify-icon icon="solar:nfc-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white group-hover:opacity-80 transition-opacity">SPINET</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-500 dark:text-zinc-400">
<a className="hover:text-brand dark:hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-brand dark:hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-brand dark:hover:text-white transition-colors" href="#enterprise">Enterprise</a>
<a className="hover:text-brand dark:hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">

<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-400 transition-colors" onclick="document.documentElement.classList.toggle('dark')">
<iconify-icon className="hidden dark:block" icon="solar:sun-linear" width="18"></iconify-icon>
<iconify-icon className="dark:hidden" icon="solar:moon-linear" width="18"></iconify-icon>
</button>
<a className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand dark:hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="h-8 px-4 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-medium hover:bg-brand dark:hover:bg-zinc-200 transition-colors" href="#">
                    Shop Card
                </a>
</div>
</div>
</nav>
<main className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/20 bg-brand/5 dark:border-white/10 dark:bg-white/5 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
<span className="text-xs font-medium text-brand dark:text-zinc-300">New: Metal Series v2.0</span>
</div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter leading-[1.1] text-zinc-900 dark:text-white">
                    Networking,<br/>
<span className="italic font-normal text-zinc-500 dark:text-zinc-500">reimagined.</span>
</h1>
<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                    Instantly share your contact info, social profiles, and payment apps with a single tap. The sustainable, smart business card for modern professionals.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-brand text-white font-medium text-sm hover:bg-branddark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25">
                        Create your card
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black/20 text-zinc-900 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Watch demo
                    </button>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-zinc-200 dark:bg-zinc-800"></div>
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-zinc-300 dark:bg-zinc-700"></div>
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-zinc-400 dark:bg-zinc-600"></div>
</div>
<div className="text-xs text-zinc-500 dark:text-zinc-500">
                        Trusted by <span className="text-zinc-900 dark:text-zinc-300 font-semibold">10,000+</span> professionals
                    </div>
</div>
</div>

<div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center card-container">
<div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent blur-[80px] rounded-full"></div>

<div className="spinet-card w-64 h-96 sm:w-72 sm:h-[26rem] rounded-2xl relative flex flex-col justify-between p-8 overflow-hidden group border-zinc-800">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noise)\\'/%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 flex justify-between items-start">
<iconify-icon className="text-white/50" icon="solar:nfc-circle-linear" width="32"></iconify-icon>
<iconify-icon className="text-white/30 rotate-90" icon="solar:wifi-linear" width="20"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 mb-4 border border-white/10"></div>
<div className="h-3 w-32 bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-20 bg-white/10 rounded-full"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="absolute top-1/4 right-10 p-3 rounded-xl bg-white/80 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 backdrop-blur-md shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<iconify-icon className="text-brand" icon="solar:user-plus-linear" width="24"></iconify-icon>
</div>
<div className="absolute bottom-1/4 left-10 p-3 rounded-xl bg-white/80 dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 backdrop-blur-md shadow-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
<iconify-icon className="text-emerald-500" icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="mt-24 border-y border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Empowering teams at</p>
<div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-zinc-900 dark:text-white">
<span className="font-semibold text-xl tracking-tight">ACME</span>
<span className="font-bold text-xl italic font-serif">Vertex</span>
<span className="font-medium text-lg tracking-[0.2em]">STRATOS</span>
<span className="font-bold text-xl flex items-center gap-1"><div className="w-4 h-4 bg-zinc-900 dark:bg-white rounded-full"></div> CIRCLE</span>
<span className="font-semibold text-xl font-mono">block_</span>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24 sm:py-32" id="features">
<div className="mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-zinc-900 dark:text-white">One card. <span className="text-zinc-400 dark:text-zinc-600">Infinite possibilities.</span></h2>
<p className="text-zinc-600 dark:text-zinc-400 max-w-xl">Replace your paper business cards with a premium PVC or Metal NFC card that lasts a lifetime.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-8 overflow-hidden hover:border-brand/30 dark:hover:border-white/20 transition-all shadow-sm">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 dark:bg-brand/10 rounded-full blur-[80px] -mr-16 -mt-16 transition-all group-hover:bg-brand/10 dark:group-hover:bg-brand/20"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-200 dark:border-white/5 text-brand">
<iconify-icon icon="solar:smartphone-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">Instant Sharing</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">Tap your Spinet card on any smartphone to instantly share your digital profile. No app required for the receiver.</p>
</div>

<div className="w-full h-48 rounded-xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-200/50 dark:from-zinc-800/50 via-transparent to-transparent"></div>
<div className="flex items-center gap-8 opacity-80">
<div className="w-16 h-24 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm"></div>
<iconify-icon className="text-brand animate-pulse" icon="solar:transfer-horizontal-linear" width="24"></iconify-icon>
<div className="w-12 h-20 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-8 overflow-hidden hover:border-brand/30 dark:hover:border-white/20 transition-all shadow-sm">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-zinc-100/50 dark:from-zinc-800/20 to-transparent"></div>
<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-200 dark:border-white/5 text-brand">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Track who views your contact info and identify top networking channels.</p>

<div className="flex items-end justify-between h-32 px-2 gap-2">
<div className="w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-500 group-hover:bg-brand/40"></div>
<div className="w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-t-sm h-[70%] group-hover:h-[85%] transition-all duration-500 delay-75 group-hover:bg-brand/60"></div>
<div className="w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-t-sm h-[50%] group-hover:h-[55%] transition-all duration-500 delay-100 group-hover:bg-brand/40"></div>
<div className="w-full bg-zinc-200 dark:bg-zinc-800/50 rounded-t-sm h-[80%] group-hover:h-[95%] transition-all duration-500 delay-150 group-hover:bg-brand/80"></div>
</div>
</div>

<div className="md:col-span-1 group relative rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-8 overflow-hidden hover:border-brand/30 dark:hover:border-white/20 transition-all shadow-sm">
<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-200 dark:border-white/5 text-emerald-500">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">Eco-Friendly</h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400">Save thousands of paper cards. One Spinet card lasts a lifetime.</p>
</div>

<div className="md:col-span-1 group relative rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-8 overflow-hidden hover:border-brand/30 dark:hover:border-white/20 transition-all shadow-sm">
<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-200 dark:border-white/5 text-brand">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">Bank-Grade Security</h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400">Your data is encrypted and stored securely. You control what you share.</p>
</div>

<div className="md:col-span-1 group relative rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-8 overflow-hidden hover:border-brand/30 dark:hover:border-white/20 transition-all shadow-sm">
<div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-zinc-200 dark:border-white/5 text-orange-500">
<iconify-icon icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">Universal</h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400">Works with all modern iPhone and Android devices seamlessly.</p>
</div>
</div>
</section>

<section className="border-y border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-zinc-900/20 py-24 transition-colors">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="relative mx-auto w-64 h-[500px] border-[6px] border-zinc-800 dark:border-zinc-800 rounded-[2.5rem] bg-zinc-950 shadow-2xl overflow-hidden">

<div className="h-full w-full bg-zinc-900 flex flex-col items-center pt-8 px-4">
<div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-zinc-700 mb-4 overflow-hidden relative">
<iconify-icon className="absolute inset-0 m-auto text-zinc-600" icon="solar:user-circle-linear" width="48"></iconify-icon>
</div>
<div className="w-32 h-4 bg-zinc-800 rounded-full mb-2"></div>
<div className="w-24 h-3 bg-zinc-800/50 rounded-full mb-8"></div>
<div className="w-full space-y-3">
<div className="h-12 w-full bg-zinc-800/50 rounded-xl flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded bg-zinc-700"></div>
<div className="w-20 h-2 bg-zinc-700 rounded"></div>
</div>
<div className="h-12 w-full bg-zinc-800/50 rounded-xl flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded bg-zinc-700"></div>
<div className="w-24 h-2 bg-zinc-700 rounded"></div>
</div>
<div className="h-12 w-full bg-zinc-800/50 rounded-xl flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded bg-zinc-700"></div>
<div className="w-16 h-2 bg-zinc-700 rounded"></div>
</div>
</div>
<div className="mt-auto mb-6 w-32 h-10 bg-white text-black text-xs font-bold rounded-full flex items-center justify-center">
                                Save Contact
                            </div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6 text-zinc-900 dark:text-white">Create your profile <br/>in seconds.</h2>
<p className="text-zinc-600 dark:text-zinc-400 mb-8">Customize your digital identity. Add your website, social media, payment links, and files. Update it anytime, anywhere.</p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-brand/10 dark:bg-zinc-800 flex items-center justify-center text-brand dark:text-white border border-brand/20 dark:border-zinc-700">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 dark:text-white">Full Customization</h4>
<p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Choose colors, layouts, and branding that fits you.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-brand/10 dark:bg-zinc-800 flex items-center justify-center text-brand dark:text-white border border-brand/20 dark:border-zinc-700">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 dark:text-white">Lead Generation</h4>
<p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Capture leads with a built-in contact form.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-brand/10 dark:bg-zinc-800 flex items-center justify-center text-brand dark:text-white border border-brand/20 dark:border-zinc-700">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 dark:text-white">QR Code Backup</h4>
<p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">Every card comes with a custom QR code for older devices.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="products">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-zinc-900 dark:text-white">Choose your material</h2>
<p className="text-zinc-600 dark:text-zinc-400">Designed for durability and style.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/20 hover:border-brand/30 hover:shadow-lg dark:hover:bg-zinc-900/40 transition-all group">
<div className="mb-8 h-48 rounded-xl bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center border border-white/5 relative shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
<span className="text-zinc-600 font-medium tracking-widest text-sm">MATTE BLACK PVC</span>
</div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white">Spinet Classic</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">Durable PVC with matte finish.</p>
</div>
<span className="text-lg font-semibold text-zinc-900 dark:text-white">$29</span>
</div>
<ul className="space-y-2 mb-8 text-sm text-zinc-500 dark:text-zinc-400">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400 dark:text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Fully Custom Printed</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-400 dark:text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> Waterproof</li>
</ul>
<button className="w-full py-3 rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-sm font-medium hover:bg-zinc-100 hover:text-zinc-900 text-zinc-600 dark:text-white dark:hover:bg-white dark:hover:text-black transition-all">Select Classic</button>
</div>

<div className="p-8 rounded-3xl border border-brand/20 dark:border-brand/20 bg-white dark:bg-zinc-900/20 hover:shadow-xl dark:hover:bg-zinc-900/40 transition-all group relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand text-[10px] font-bold uppercase tracking-wider text-white rounded-full">Best Seller</div>
<div className="mb-8 h-48 rounded-xl bg-gradient-to-br from-zinc-400 to-zinc-900 flex items-center justify-center border border-white/5 relative shadow-lg group-hover:scale-[1.02] transition-transform duration-500">
<span className="text-zinc-300 font-medium tracking-widest text-sm text-shadow">BRUSHED METAL</span>
</div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white">Spinet Metal</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">Premium stainless steel hybrid.</p>
</div>
<span className="text-lg font-semibold text-zinc-900 dark:text-white">$59</span>
</div>
<ul className="space-y-2 mb-8 text-sm text-zinc-500 dark:text-zinc-400">
<li className="flex items-center gap-2"><iconify-icon className="text-brand" icon="solar:check-circle-linear"></iconify-icon> Laser Engraved</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand" icon="solar:check-circle-linear"></iconify-icon> Heavyweight Feel</li>
</ul>
<button className="w-full py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-brand dark:hover:bg-zinc-200 transition-all">Select Metal</button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 text-center">
<div className="relative p-12 rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-900 dark:bg-zinc-900/50">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand/20 to-transparent opacity-50"></div>
<div className="relative z-10">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to upgrade your network?</h2>
<p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">Join thousands of professionals switching to the smarter, sustainable way to connect.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all w-full sm:w-auto">
                            Get your Spinet Card
                        </button>
<button className="h-12 px-8 rounded-full border border-zinc-700 text-white font-medium text-sm hover:bg-zinc-800 transition-all w-full sm:w-auto">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black pt-16 pb-8 transition-colors">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-white">
<iconify-icon icon="solar:nfc-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">SPINET</span>
</a>
<p className="text-sm text-zinc-500 dark:text-zinc-500 mb-6 max-w-xs">
                        The future of networking is here. Smart, sustainable, and seamless digital business cards for forward-thinking professionals.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-brand dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-brand dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-brand dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-500">
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Classic Card</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Metal Card</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Custom Card</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-500">
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-500">
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Compatible Devices</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand dark:hover:text-zinc-300 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-500 dark:text-zinc-600">© 2023 Spinet NFC Technologies. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-zinc-500">Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
