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
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
},
blue: {
500: '#3b82f6',
600: '#2563eb',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group select-none" href="#">
<span className="text-lg font-bold tracking-tighter text-white">GRAF</span>
<span className="h-4 w-[1px] bg-zinc-800"></span>
<span className="text-[10px] font-medium text-zinc-500 tracking-[0.2em] uppercase">PLUMBING</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#emergency">Emergency</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#commercial">Commercial</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex flex-col items-end mr-2" href="tel:3619948418">
<span className="text-xs font-medium text-white tracking-wide">24/7 Dispatch</span>
<span className="text-[10px] text-zinc-500">(361) 994-8418</span>
</a>
<a className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-white text-black hover:bg-zinc-200 transition-all" href="#book">
<span className="text-xs font-semibold tracking-wide">Book Online</span>
<iconify-icon className="-rotate-45" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
</div>
<div className="relative max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900/30 bg-blue-950/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs text-blue-200 font-medium tracking-wide uppercase">Available for Emergency Dispatch</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
                    Master plumbing <br/>
<span className="text-zinc-500">solutions.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md leading-relaxed font-light">
                    Premier residential and commercial plumbing services in Corpus Christi. From leak detection to full system repiping.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
<a className="w-full sm:w-auto h-12 px-8 flex items-center justify-center gap-2 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors tracking-tight text-sm" href="tel:3619948418">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon>
                        (361) 994-8418
                    </a>
<div className="flex items-center gap-4 px-6">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">DG</div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-zinc-600 flex items-center justify-center text-[10px] text-zinc-400">MR</div>
</div>
<span className="text-xs text-zinc-500 font-medium">Licensed Master Plumbers</span>
</div>
</div>
</div>

<div className="relative lg:pl-12">
<div className="card-gradient rounded-2xl p-6 lg:p-8 backdrop-blur-sm accent-glow">
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">Request Service</h3>
<p className="text-xs text-zinc-500 mb-6">Tell us about your plumbing issue.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Service Type</label>
<select className="w-full h-10 px-3 rounded-lg text-xs appearance-none">
<option>Water Leak</option>
<option>Water Heater</option>
<option>Clogged Drain</option>
<option>Toilet Repair</option>
<option>Gas Line</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Urgency</label>
<select className="w-full h-10 px-3 rounded-lg text-xs appearance-none">
<option>Emergency (ASAP)</option>
<option>Next Available</option>
<option>Schedule Future</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Address</label>
<input className="w-full h-10 px-3 rounded-lg text-xs placeholder-zinc-700" placeholder="123 Example St, Corpus Christi" type="text"/>
</div>
<div className="pt-2">
<button className="w-full h-10 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-wide transition-colors flex items-center justify-center gap-2" type="button">
                                Check Availability
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Trade Specializations</h2>
<p className="text-zinc-500 font-light text-sm max-w-lg">Full-service plumbing solutions backed by state licensure and years of field experience.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Residential</span>
<span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Commercial</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="card-gradient p-8 rounded-xl group">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:water-drop-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">Leak Detection &amp; Repair</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Advanced electronic leak detection for slab leaks, wall leaks, and yard lines to minimize property damage.</p>
</div>

<div className="card-gradient p-8 rounded-xl group">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-orange-400 transition-colors">
<iconify-icon icon="solar:flame-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">Water Heaters</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Installation and maintenance of Tankless (Rinnai/Navien) and traditional tank water heaters.</p>
</div>

<div className="card-gradient p-8 rounded-xl group">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-green-400 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">Drain Cleaning</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Hydro-jetting and cabling services for main sewer lines, kitchen sinks, and stopped-up toilets.</p>
</div>

<div className="card-gradient p-8 rounded-xl group">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-purple-400 transition-colors">
<iconify-icon icon="solar:bath-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">Fixture Installation</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Premium faucet, toilet, tub, and shower valve installation featuring Moen, Delta, and Kohler products.</p>
</div>

<div className="card-gradient p-8 rounded-xl group">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 transition-colors">
<iconify-icon icon="solar:test-tube-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">Water Treatment</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Whole-home water softeners and Reverse Osmosis (RO) drinking systems for clean water.</p>
</div>

<div className="card-gradient p-8 rounded-xl group">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-red-400 transition-colors">
<iconify-icon icon="solar:danger-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-200 mb-2">Gas Lines</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Licensed gas piping repair and installation for stoves, dryers, heaters, and outdoor kitchens.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-900 bg-black py-16 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2">
<span className="text-3xl font-medium text-white tracking-tight">RMP-12707</span>
<span className="text-[10px] text-zinc-600 uppercase tracking-widest">Master License</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-3xl font-medium text-white tracking-tight">24/7</span>
<span className="text-[10px] text-zinc-600 uppercase tracking-widest">Emergency</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-3xl font-medium text-white tracking-tight">Insured</span>
<span className="text-[10px] text-zinc-600 uppercase tracking-widest">Bonded &amp; Protected</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-3xl font-medium text-white tracking-tight">Local</span>
<span className="text-[10px] text-zinc-600 uppercase tracking-widest">Family Owned</span>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-20 pb-10 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-900 pb-12 mb-12">
<div className="md:col-span-5 space-y-6">

<a className="flex items-center gap-2 group select-none" href="#">
<span className="text-lg font-bold tracking-tighter text-white">GRAF</span>
<span className="h-4 w-[1px] bg-zinc-800"></span>
<span className="text-[10px] font-medium text-zinc-500 tracking-[0.2em] uppercase">PLUMBING</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed max-w-sm font-light">
                        Professional plumbing services regulated by the Texas State Board of Plumbing Examiners. Committed to integrity, quality, and fair pricing.
                    </p>
</div>
<div className="md:col-span-3">
<h4 className="text-white font-medium mb-6 text-xs uppercase tracking-widest">Contact</h4>
<ul className="space-y-4">
<li>
<a className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-3" href="tel:3619948418">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> 
                                (361) 994-8418
                            </a>
</li>
<li>
<a className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-3" href="mailto:service@grafplumbing.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> 
                                service@grafplumbing.com
                            </a>
</li>
<li>
<div className="text-zinc-400 text-sm flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>5961 La Costa Drive<br/>Corpus Christi, TX 78414</span>
</div>
</li>
</ul>
</div>
<div className="md:col-span-4">
<h4 className="text-white font-medium mb-6 text-xs uppercase tracking-widest">Regulatory Info</h4>
<div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
<p className="text-zinc-500 text-xs leading-relaxed">
<strong>Responsible Master Plumber:</strong><br/>
                            Dan Graf, License #12707<br/><br/>
                            Regulated by the Texas State Board of Plumbing Examiners<br/>
                            P. O. Box 4200, Austin, TX 78765<br/>
                            1-800-845-6584
                        </p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
<p>© 2024 Graf Plumbing Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
