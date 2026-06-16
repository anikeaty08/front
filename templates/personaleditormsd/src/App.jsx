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
slate: {
850: '#151b2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Simple interactive script for the range slider visual update
        const slider = document.querySelector('input[type="range"]');
        const durationDisplay = document.querySelector('.font-mono.text-indigo-400');
        
        if(slider && durationDisplay) {
            slider.addEventListener('input', (e) => {
                durationDisplay.textContent = `${e.target.value} Items`;
            });
        }

        // Add subtle mouse-follow gradient effect to cards
        document.querySelectorAll('.glass-card').forEach(card => {
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
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">Personal Editor</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#portfolio">Works</a>
<a className="hover:text-white transition-colors" href="#dashboard">Dashboard</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors" href="tel:+918001238728">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    +91 8001238728
                </a>
<button className="text-xs font-medium hover:text-white transition-colors hidden sm:block">Log in</button>
<button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-medium transition-all backdrop-blur-md border border-white/10 flex items-center gap-2">
                    Start Project
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-container">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Now available in Murshidabad
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] text-glow">
                    Visuals that <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">transcend reality.</span>
</h1>
<p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
                    Premium video editing, reels, thumbnail design, and cinematography services. Plans start at just <span className="text-white font-medium">₹200</span>.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-black hover:bg-slate-200 px-6 py-3.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:clapperboard-edit-linear" width="18"></iconify-icon>
                        Book Editor
                    </button>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<iconify-icon icon="solar:videocamera-linear" width="18"></iconify-icon>
                        Hire Cinematographer
                    </button>
</div>
</div>

<div className="relative w-full h-[500px] hidden lg:flex items-center justify-center rotate-3d">

<div className="absolute w-80 h-96 bg-slate-900/80 rounded-2xl border border-white/5 shadow-2xl transform translate-x-12 -translate-y-8 -rotate-6 animate-float-delayed z-0 backdrop-blur-md"></div>

<div className="absolute w-96 h-auto bg-slate-900/90 rounded-2xl border border-white/10 shadow-2xl transform z-10 animate-float overflow-hidden">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>

<div className="p-6 space-y-6">
<div className="flex items-center justify-between">
<div className="space-y-1">
<div className="h-2 w-24 bg-white/20 rounded"></div>
<div className="h-2 w-16 bg-white/10 rounded"></div>
</div>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
</div>

<div className="space-y-3">
<div className="flex gap-2">
<div className="h-16 flex-1 bg-indigo-500/20 rounded-lg border border-indigo-500/30 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<div className="h-16 w-24 bg-white/5 rounded-lg border border-white/5"></div>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-indigo-500"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-500 font-mono">
<span>00:00</span>
<span>00:59</span>
</div>
</div>

<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 flex items-center gap-3">
<div className="bg-emerald-500/20 p-1.5 rounded-md text-emerald-400">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs text-white font-medium">Reel Render Complete</div>
<div className="text-[10px] text-slate-500">Ready for review</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-20 bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float z-20">
<div className="flex items-center gap-3">
<div className="bg-indigo-500 w-2 h-2 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-white">Live Edit</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-slate-400 font-light">Select a service to begin your creative journey.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2">
<div className="card-shine"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:video-frame-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 mb-6 border border-white/10 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon icon="solar:scissors-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Reels &amp; Editing</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">Fast-paced editing for Instagram Reels, Shorts, and long-form content. Color grading included.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Vertical &amp; Horizontal
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Unlimited Revisions
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-white font-medium">From ₹200</span>
<button className="text-xs text-white border-b border-white/20 pb-0.5 hover:border-white transition-all">Select</button>
</div>
</div>

<div className="group glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2">
<div className="card-shine"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:gallery-edit-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-white/10 group-hover:bg-purple-500/20 transition-colors">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Graphics &amp; Design</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">High-CTR thumbnails, social media posts, and channel art. Designed to convert.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-purple-400" icon="solar:check-read-linear"></iconify-icon> 24h Delivery
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-purple-400" icon="solar:check-read-linear"></iconify-icon> Source Files Included
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-white font-medium">From ₹200</span>
<button className="text-xs text-white border-b border-white/20 pb-0.5 hover:border-white transition-all">Select</button>
</div>
</div>

<div className="group glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 border-indigo-500/20">
<div className="card-shine"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:videocamera-linear" width="120"></iconify-icon>
</div>
<div className="absolute top-4 right-4 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-[10px] font-semibold px-2 py-1 rounded">
                        MURSHIDABAD ONLY
                    </div>
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-pink-400 mb-6 border border-white/10 group-hover:bg-pink-500/20 transition-colors">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Cinematography</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">On-location professional filming. Drone shots, gimbal work, and cinema-grade lighting setup.</p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-pink-400" icon="solar:check-read-linear"></iconify-icon> Raw Log Footage
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-pink-400" icon="solar:check-read-linear"></iconify-icon> Full Gear Included
                        </li>
</ul>
<div className="flex items-center justify-between mt-auto">
<span className="text-white font-medium">From ₹5,000</span>
<button className="text-xs text-white border-b border-white/20 pb-0.5 hover:border-white transition-all">Select</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-900/50">
<div className="max-w-4xl mx-auto px-6">
<div className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/10">
<div className="grid md:grid-cols-2">

<div className="p-8 md:p-10 space-y-8">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Start Project</h2>
<p className="text-xs text-slate-400 mt-1">Configure your request details.</p>
</div>
<div className="space-y-6">

<div className="space-y-2">
<label className="text-xs font-medium text-slate-300">Service Type</label>
<div className="grid grid-cols-3 gap-2">
<button className="bg-indigo-600 text-white text-xs py-2.5 rounded-lg font-medium shadow-lg shadow-indigo-500/20">Reels</button>
<button className="bg-slate-800 text-slate-400 border border-white/5 hover:bg-slate-700 text-xs py-2.5 rounded-lg transition-colors">Graphics</button>
<button className="bg-slate-800 text-slate-400 border border-white/5 hover:bg-slate-700 text-xs py-2.5 rounded-lg transition-colors">Cinema</button>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between text-xs text-slate-300">
<span>Content Quantity</span>
<span className="font-mono text-indigo-400">2 Items</span>
</div>
<input className="w-full" max="20" min="1" type="range" value="2"/>
</div>

<div className="bg-slate-950/50 rounded-xl p-4 space-y-3 border border-white/5">
<div className="flex justify-between text-xs text-slate-400">
<span>Estimated Total</span>
<span>₹400.00</span>
</div>
<div className="flex justify-between text-sm text-white font-medium pt-2 border-t border-white/5">
<span>Pay Now (50%)</span>
<span className="text-indigo-400">₹200.00</span>
</div>
</div>

<button className="w-full bg-white text-black py-3 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group">
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
                                Secure Checkout (INR)
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-500">Payments processed securely via UPI/Stripe. 50% upfront.</p>
</div>
</div>

<div className="bg-slate-950/80 p-8 md:p-10 flex flex-col justify-center border-l border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-indigo-500/5"></div>
<div className="relative z-10 space-y-6 opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Payment Successful</span>
</div>
<div className="space-y-4">
<label className="text-xs font-medium text-slate-300">Upload Raw Materials</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-500" icon="solar:link-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-900 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="Paste Google Drive Link" type="text"/>
</div>
<div className="relative">
<textarea className="w-full bg-slate-900 border border-white/10 rounded-lg py-2.5 px-4 text-xs text-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 h-24 resize-none" placeholder="Project Details &amp; Deadline..."></textarea>
</div>
<button className="w-full bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 py-2.5 rounded-lg text-xs font-medium hover:bg-indigo-600/30 transition-all">Submit Project Files</button>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm z-20 pointer-events-none">
<div className="text-center">
<iconify-icon className="text-slate-500 mb-2" icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
<p className="text-xs text-slate-400">Complete payment to unlock</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="dashboard">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Real-time Dashboard</h2>
<p className="text-slate-400 font-light">Track progress, request revisions, and download assets.</p>
</div>
<div className="glass-card rounded-2xl border border-white/10 overflow-hidden">

<div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-sm font-medium text-white">Active Projects</span>
<span className="bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded text-[10px] border border-indigo-500/20">2 Processing</span>
</div>
<div className="flex gap-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-slate-500 border-b border-white/5">
<th className="px-6 py-4 font-normal">Project ID</th>
<th className="px-6 py-4 font-normal">Service</th>
<th className="px-6 py-4 font-normal">Status</th>
<th className="px-6 py-4 font-normal">Payment</th>
<th className="px-6 py-4 font-normal">Delivery</th>
<th className="px-6 py-4 font-normal text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-white/5 transition-colors border-b border-white/5">
<td className="px-6 py-4 font-mono text-slate-400">#PE-8921</td>
<td className="px-6 py-4 text-white">Instagram Reel Edit</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] border border-yellow-500/20">
<span className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse"></span> In Progress
                                </span>
</td>
<td className="px-6 py-4 text-slate-400">₹200 Paid (50%)</td>
<td className="px-6 py-4 text-slate-400">Oct 24, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-xs text-slate-400 hover:text-white transition-colors">Details</button>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-slate-400">#PE-8804</td>
<td className="px-6 py-4 text-white">Murshidabad Drone Shoot</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] border border-blue-500/20">
                                    Scheduled
                                </span>
</td>
<td className="px-6 py-4 text-slate-400">₹5,000 Paid</td>
<td className="px-6 py-4 text-slate-400">Nov 02, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-xs text-slate-400 hover:text-white transition-colors">Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-slate-400" icon="solar:shield-user-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Editor Admin Panel</h4>
<p className="text-xs text-slate-500">Manage orders, files, and assignments.</p>
</div>
</div>
<button className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                Staff Login <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<footer className="py-12 border-t border-white/5 relative bg-black/40">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:videocamera-record-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">Personal Editor</span>
</div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed mb-4">
                    Elevating brands through visual storytelling. Based in Murshidabad, serving the world digitally.
                </p>
<a className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors" href="tel:+918001238728">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    +91 8001238728
                </a>
</div>
<div>
<h5 className="text-white text-xs font-medium mb-4">Services</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Reels &amp; Editing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Graphics Design</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Cinematography (Murshidabad)</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-medium mb-4">Legal</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-600">© 2023 Personal Editor. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="14"></iconify-icon></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="14"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
