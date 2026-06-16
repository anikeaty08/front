import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center">
<span className="font-semibold tracking-tighter text-lg">N</span>
</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:text-neutral-200 transition-colors">NEXUS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#shop">Refurbished</a>
<a className="hover:text-white transition-colors" href="#repair">Repairs</a>
<a className="hover:text-white transition-colors" href="#process">How it works</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs font-medium py-2 px-4 rounded-full border border-white/10 transition-all duration-300" href="#repair">
<span>Book Service</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="tracking-wide uppercase text-[10px] font-medium">New Inventory Added</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Revive your tech.<br/>
<span className="text-neutral-500">Restore your connection.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                Expert repairs for the devices you love, and a curated marketplace for premium refurbished smartphones. Quality guaranteed.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto bg-white text-black hover:bg-neutral-200 px-8 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2" href="#shop">
                    Browse Shop
                    <iconify-icon icon="solar:shop-2-linear" width="18"></iconify-icon>
</a>
<a className="w-full md:w-auto bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-700 px-8 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2" href="#repair">
                    Start Repair
                    <iconify-icon icon="solar:wrench-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</header>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start gap-2">
<iconify-icon className="text-white mb-2" icon="solar:verified-check-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium text-sm">6-Month Warranty</h3>
<p className="text-xs text-neutral-500">On all repairs &amp; sales</p>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<iconify-icon className="text-white mb-2" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium text-sm">30-Min Service</h3>
<p className="text-xs text-neutral-500">For screen replacements</p>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<iconify-icon className="text-white mb-2" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium text-sm">Original Parts</h3>
<p className="text-xs text-neutral-500">OEM quality components</p>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<iconify-icon className="text-white mb-2" icon="solar:leaf-linear" width="24"></iconify-icon>
<h3 className="text-white font-medium text-sm">Eco-Friendly</h3>
<p className="text-xs text-neutral-500">Reducing e-waste globally</p>
</div>
</div>
</section>

<section className="py-24 relative" id="shop">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Selected Inventory</h2>
<p className="text-neutral-500 text-sm max-w-md">Professionally inspected and refurbished devices. Like new, for less.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-md bg-white/10 text-white text-xs font-medium border border-white/10">All</button>
<button className="px-4 py-2 rounded-md bg-transparent text-neutral-400 hover:text-white text-xs font-medium border border-transparent hover:bg-white/5 transition-all">Apple</button>
<button className="px-4 py-2 rounded-md bg-transparent text-neutral-400 hover:text-white text-xs font-medium border border-transparent hover:bg-white/5 transition-all">Samsung</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
<img alt="iPhone 15" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white border border-white/10">Excellent Condition</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-white font-medium text-base tracking-tight">iPhone 15 Pro</h3>
<p className="text-neutral-500 text-xs mt-1">128GB • Natural Titanium</p>
</div>
<span className="text-white font-medium text-sm">$899</span>
</div>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
<div className="flex items-center gap-1 text-[10px] text-neutral-400">
<iconify-icon icon="solar:battery-charge-linear"></iconify-icon>
<span>100% Battery</span>
</div>
<div className="flex items-center gap-1 text-[10px] text-neutral-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>12M Warranty</span>
</div>
</div>
<a className="mt-4 w-full block text-center py-2 rounded bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors" href="https://wa.me/15550000000?text=Hi,%20I'm%20interested%20in%20the%20iPhone%2015%20Pro">
                            Purchase via WhatsApp
                        </a>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
<img alt="Samsung S23" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white border border-white/10">Good Condition</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-white font-medium text-base tracking-tight">Samsung Galaxy S23</h3>
<p className="text-neutral-500 text-xs mt-1">256GB • Phantom Black</p>
</div>
<span className="text-white font-medium text-sm">$649</span>
</div>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
<div className="flex items-center gap-1 text-[10px] text-neutral-400">
<iconify-icon icon="solar:battery-charge-linear"></iconify-icon>
<span>95% Battery</span>
</div>
<div className="flex items-center gap-1 text-[10px] text-neutral-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>6M Warranty</span>
</div>
</div>
<a className="mt-4 w-full block text-center py-2 rounded bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors" href="https://wa.me/15550000000?text=Hi,%20I'm%20interested%20in%20the%20Samsung%20S23">
                            Purchase via WhatsApp
                        </a>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
<img alt="Pixel 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-white border border-white/10">Like New</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-white font-medium text-base tracking-tight">Google Pixel 7</h3>
<p className="text-neutral-500 text-xs mt-1">128GB • Obsidian</p>
</div>
<span className="text-white font-medium text-sm">$499</span>
</div>
<div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
<div className="flex items-center gap-1 text-[10px] text-neutral-400">
<iconify-icon icon="solar:battery-charge-linear"></iconify-icon>
<span>98% Battery</span>
</div>
<div className="flex items-center gap-1 text-[10px] text-neutral-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>12M Warranty</span>
</div>
</div>
<a className="mt-4 w-full block text-center py-2 rounded bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors" href="https://wa.me/15550000000?text=Hi,%20I'm%20interested%20in%20the%20Pixel%207">
                            Purchase via WhatsApp
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900" id="repair">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-3">Book a Repair</h2>
<p className="text-neutral-500 text-sm">Select your issue and schedule a visit instantly via WhatsApp.</p>
</div>

<div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl shadow-black/50">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-6">
<div className="flex flex-col gap-2">
<span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Common Repairs</span>
<div className="space-y-3">
<label className="flex items-center justify-between group cursor-pointer p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:screencast-2-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Screen Replacement</span>
</div>
<div className="w-4 h-4 rounded-full border border-neutral-600 group-hover:border-white"></div>
</label>
<label className="flex items-center justify-between group cursor-pointer p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:battery-charge-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Battery Replacement</span>
</div>
<div className="w-4 h-4 rounded-full border border-neutral-600 group-hover:border-white"></div>
</label>
<label className="flex items-center justify-between group cursor-pointer p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:water-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Liquid Damage</span>
</div>
<div className="w-4 h-4 rounded-full border border-neutral-600 group-hover:border-white"></div>
</label>
</div>
</div>
</div>

<div className="flex flex-col justify-between h-full">
<div>
<span className="text-xs uppercase tracking-wider text-neutral-500 font-medium mb-4 block">Estimated Turnaround</span>
<h4 className="text-4xl font-medium text-white tracking-tight mb-2">~45 Mins</h4>
<p className="text-xs text-neutral-500">For standard screen and battery repairs. Complex issues may take 24-48 hours.</p>
</div>
<div className="mt-8 md:mt-0">
<a className="group w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]" href="https://wa.me/15550000000?text=Hello,%20I%20would%20like%20to%20book%20a%20repair%20service.">
<iconify-icon icon="solar:brand-whatsapp-linear" strokeWidth="2" width="24"></iconify-icon>
<span>Book via WhatsApp</span>
</a>
<p className="text-center text-[10px] text-neutral-600 mt-3">You will be redirected to WhatsApp chat.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 text-white flex items-center justify-center text-xs font-semibold">N</div>
<span className="text-neutral-500 text-sm tracking-tight">© 2024 Nexus Inc.</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
