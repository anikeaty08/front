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
colors: {
slate: { 950: '#020617' },
primary: { 500: '#3b82f6', 600: '#2563eb' }
}
}
}
}



                    const testimonials = [
                        { name: "Alex R.", role: "Dropshipper", text: "Found a winner in 48 hours." },
                        { name: "Sarah M.", role: "Agency Owner", text: "The data reports are incredibly detailed." },
                        { name: "James K.", role: "Ecom Manager", text: "Saved us thousands in testing costs." },
                        { name: "David L.", role: "Shopify Pro", text: "Best ROI on research services." },
                        { name: "Emily W.", role: "Marketer", text: "Their creative angles are genius." },
                        { name: "Michael T.", role: "Founder", text: "Scaled to $50k/mo with their pick." }
                    ];
                    // Render twice for smooth loop
                    for(let i=0; i<12; i++) {
                        const t = testimonials[i % testimonials.length];
                        document.write(`
                            <div class="glass-panel w-80 p-5 rounded-xl border border-slate-800 inline-block whitespace-normal">
                                <div class="flex items-center gap-3 mb-3">
                                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-sm">${t.name[0]}</div>
                                    <div>
                                        <div class="text-sm font-semibold">${t.name}</div>
                                        <div class="text-xs text-slate-500">${t.role}</div>
                                    </div>
                                </div>
                                <p class="text-sm text-slate-300">"${t.text}"</p>
                            </div>
                        `);
                    }
                


                    const testimonials2 = [
                        { name: "Priya S.", role: "Brand Owner", text: "Finally a service that understands margins." },
                        { name: "Tom H.", role: "Media Buyer", text: "Ad copy suggestions were spot on." },
                        { name: "Lisa B.", role: "Ecom Coach", text: "I recommend this to all my students." },
                        { name: "Ryan G.", role: "Dropshipper", text: "Consistent winners every month." },
                        { name: "Kevin P.", role: "Entrepreneur", text: "Fast delivery and great support." },
                        { name: "Jessica L.", role: "Marketing Lead", text: "A game changer for Q4." }
                    ];
                    for(let i=0; i<12; i++) {
                        const t = testimonials2[i % testimonials2.length];
                        document.write(`
                            <div class="glass-panel w-80 p-5 rounded-xl border border-slate-800 inline-block whitespace-normal">
                                <div class="flex items-center gap-3 mb-3">
                                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-sm">${t.name[0]}</div>
                                    <div>
                                        <div class="text-sm font-semibold">${t.name}</div>
                                        <div class="text-xs text-slate-500">${t.role}</div>
                                    </div>
                                </div>
                                <p class="text-sm text-slate-300">"${t.text}"</p>
                            </div>
                        `);
                    }
                


        // Pricing Toggle Logic
        function togglePricing(type) {
            const monthlyPrices = document.querySelectorAll('.price-monthly');
            const yearlyPrices = document.querySelectorAll('.price-yearly');
            const btnMonthly = document.getElementById('btn-monthly');
            const btnYearly = document.getElementById('btn-yearly');

            if (type === 'yearly') {
                monthlyPrices.forEach(el => el.classList.add('hidden'));
                yearlyPrices.forEach(el => el.classList.remove('hidden'));
                btnMonthly.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                btnMonthly.classList.add('text-slate-400');
                btnYearly.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                btnYearly.classList.remove('text-slate-400');
            } else {
                monthlyPrices.forEach(el => el.classList.remove('hidden'));
                yearlyPrices.forEach(el => el.classList.add('hidden'));
                btnYearly.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                btnYearly.classList.add('text-slate-400');
                btnMonthly.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                btnMonthly.classList.remove('text-slate-400');
            }
        }

        // Canvas Wave Animation (Replicating the visual effect of canvas.tsx)
        const canvas = document.getElementById('heroCanvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let lines = [];
        const config = {
            trails: 20,
            amplitude: 50,
            frequency: 0.02,
            speed: 0.002,
            color: '100, 116, 139' // Slate-500 color base
        };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Line {
            constructor(index) {
                this.index = index;
                this.phase = (index / config.trails) * Math.PI * 2;
            }

            draw(time) {
                ctx.beginPath();
                for (let x = 0; x < width; x += 5) {
                    const y = height / 2 + 
                             Math.sin(x * config.frequency + this.phase + time * config.speed) * config.amplitude * Math.sin(x / width * Math.PI); // Dampen edges
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                const alpha = 1 - Math.abs((this.index / config.trails) - 0.5) * 2;
                ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.3})`; // Indigo
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }

        function init() {
            resize();
            for (let i = 0; i < config.trails; i++) {
                lines.push(new Line(i));
            }
        }

        function animate(time) {
            ctx.clearRect(0, 0, width, height);
            lines.forEach(line => line.draw(time));
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resize);
        init();
        animate(0);
    
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
      

<div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 nav-enter">
<nav className="glass-panel rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl shadow-indigo-500/10">
<a className="px-5 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2" href="#home">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Home</span>
</a>
<a className="px-5 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2" href="#services">
<iconify-icon icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Services</span>
</a>
<a className="px-5 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2" href="#process">
<iconify-icon icon="solar:sort-by-time-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Process</span>
</a>
<a className="px-5 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2" href="#pricing">
<iconify-icon icon="solar:tag-price-linear" width="18"></iconify-icon>
<span className="hidden md:inline">Pricing</span>
</a>
<a className="bg-slate-100 text-slate-950 px-5 py-2 rounded-full text-sm font-semibold hover:bg-white transition-all ml-1 flex items-center gap-2" href="#contact">
<span>Book Call</span>
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
</a>
</nav>
</div>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden" id="home">

<canvas className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" id="heroCanvas"></canvas>

<div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-950 to-slate-950"></div>
<div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting New Clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                Find <span className="text-gradient">Winning Products</span><br/> Before Your Competitors Do
            </h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Expert Shopify product research agency helping dropshippers discover high-margin, viral products backed by data-driven market analysis.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group" href="#pricing">
                    Start Finding Winners
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" href="#case-studies">
                    View Case Studies
                    <iconify-icon icon="solar:folder-open-linear" width="20"></iconify-icon>
</a>
</div>

<div className="mt-16 pt-8 border-t border-slate-800/50">
<p className="text-sm text-slate-500 mb-6 font-medium tracking-wide">TRUSTED BY BRANDS USING</p>
<div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-1 text-lg font-bold tracking-tighter text-white"><iconify-icon className="text-green-500" icon="simple-icons:shopify"></iconify-icon> Shopify</div>
<div className="flex items-center gap-1 text-lg font-bold tracking-tighter text-white">AutoDS</div>
<div className="flex items-center gap-1 text-lg font-bold tracking-tighter text-white">PiPiADS</div>
<div className="flex items-center gap-1 text-lg font-bold tracking-tighter text-white">Kalodata</div>
<div className="flex items-center gap-1 text-lg font-bold tracking-tighter text-white">CJ.</div>
<div className="flex items-center gap-1 text-lg font-bold tracking-tighter text-white">Zendrop</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-950" id="services">
<div className="container mx-auto px-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Comprehensive Research</h2>
<p className="text-slate-400">We go beyond simple AliExpress scrolling. Our team uses advanced tools and manual validation to ensure profitability.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-indigo-400" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">We identify who is selling what, their ad creatives, and identify market gaps you can exploit immediately.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Ad Spy Reports
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Pricing Strategy
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-purple-500/50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-purple-400" icon="solar:box-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Product Validation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Deep dive into supplier reliability, shipping times, and saturation levels to minimize risk.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Supplier Vetting
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Margin Calculation
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-pink-500/50 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
<iconify-icon className="text-pink-400" icon="solar:videocamera-record-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Creative Direction</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">We don't just find the product; we suggest the angles, hooks, and content style that converts.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-pink-400" icon="solar:check-circle-linear"></iconify-icon> Viral Hooks
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-pink-400" icon="solar:check-circle-linear"></iconify-icon> Content Strategy
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50 relative overflow-hidden" id="process">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="container mx-auto px-4 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase mb-2 block">Workflow</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How It Works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-indigo-500/50 to-slate-800 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative group">
<div className="absolute inset-0 rounded-full border border-indigo-500/30 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
<iconify-icon className="text-indigo-400" icon="solar:clipboard-list-linear" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-bold">1</div>
</div>
<h3 className="text-lg font-semibold mb-2">Submit Criteria</h3>
<p className="text-sm text-slate-400">Tell us your niche, budget, and store type.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative group">
<div className="absolute inset-0 rounded-full border border-indigo-500/30 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
<iconify-icon className="text-indigo-400" icon="solar:magnifer-linear" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-sm font-bold">2</div>
</div>
<h3 className="text-lg font-semibold mb-2">Deep Analysis</h3>
<p className="text-sm text-slate-400">Our team hunts for viral trends and validates data.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative group">
<div className="absolute inset-0 rounded-full border border-indigo-500/30 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
<iconify-icon className="text-indigo-400" icon="solar:document-text-linear" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-sm font-bold">3</div>
</div>
<h3 className="text-lg font-semibold mb-2">Receive Report</h3>
<p className="text-sm text-slate-400">Get a PDF with links, ads, and profit margins.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 shadow-xl relative group">
<div className="absolute inset-0 rounded-full border border-green-500/30 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
<div className="absolute inset-0 rounded-full bg-green-500/10 blur-xl animate-pulse"></div>
<iconify-icon className="text-green-400" icon="solar:rocket-linear" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-sm font-bold">4</div>
</div>
<h3 className="text-lg font-semibold mb-2">Launch &amp; Scale</h3>
<p className="text-sm text-slate-400">Upload to Shopify and start your ads.</p>
</div>
</div>
</div>
</section>

<section className="py-24 container mx-auto px-4" id="case-studies">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Recent Winners</h2>
<p className="text-slate-400">Products we found that generated over $100k.</p>
</div>
<a className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold flex items-center gap-1 mt-4 md:mt-0" href="#">
                View all case studies <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel rounded-xl overflow-hidden group">
<div className="h-48 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=1999&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-4 left-4 z-20">
<span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs font-semibold backdrop-blur-md">Tech Gadget</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-lg">Smart Watch Strap</h3>
<p className="text-xs text-slate-500">Found: Oct 2023</p>
</div>
<div className="text-right">
<div className="text-xl font-bold text-white">$142k</div>
<div className="text-xs text-slate-400">Revenue</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
<div>
<div className="text-sm font-medium text-slate-300">3.8%</div>
<div className="text-xs text-slate-500">Conv. Rate</div>
</div>
<div>
<div className="text-sm font-medium text-slate-300">4.2x</div>
<div className="text-xs text-slate-500">ROAS</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group">
<div className="h-48 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-4 left-4 z-20">
<span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs font-semibold backdrop-blur-md">Fashion</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-lg">Ergo Sneakers</h3>
<p className="text-xs text-slate-500">Found: Nov 2023</p>
</div>
<div className="text-right">
<div className="text-xl font-bold text-white">$89k</div>
<div className="text-xs text-slate-400">Revenue</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
<div>
<div className="text-sm font-medium text-slate-300">2.9%</div>
<div className="text-xs text-slate-500">Conv. Rate</div>
</div>
<div>
<div className="text-sm font-medium text-slate-300">3.5x</div>
<div className="text-xs text-slate-500">ROAS</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl overflow-hidden group">
<div className="h-48 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-4 left-4 z-20">
<span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs font-semibold backdrop-blur-md">Home</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-lg">Sunset Lamp</h3>
<p className="text-xs text-slate-500">Found: Dec 2023</p>
</div>
<div className="text-right">
<div className="text-xl font-bold text-white">$210k</div>
<div className="text-xs text-slate-400">Revenue</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
<div>
<div className="text-sm font-medium text-slate-300">4.1%</div>
<div className="text-xs text-slate-500">Conv. Rate</div>
</div>
<div>
<div className="text-sm font-medium text-slate-300">5.2x</div>
<div className="text-xs text-slate-500">ROAS</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 overflow-hidden">
<div className="container mx-auto px-4 mb-12 text-center">
<h2 className="text-3xl font-semibold mb-4">Trusted by 200+ Agencies</h2>
</div>

<div className="relative w-full flex overflow-x-hidden mb-6">
<div className="animate-marquee whitespace-nowrap flex gap-6 px-3">


</div>
</div>

<div className="relative w-full flex overflow-x-hidden">
<div className="animate-marquee-reverse whitespace-nowrap flex gap-6 px-3">

</div>
</div>
</section>

<section className="py-24 bg-slate-900/30" id="pricing">
<div className="container mx-auto px-4">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Simple Pricing</h2>
<p className="text-slate-400 mb-8">Choose the package that fits your scaling goals.</p>

<div className="inline-flex bg-slate-800 p-1 rounded-lg">
<button className="px-6 py-2 rounded-md text-sm font-medium bg-white text-slate-900 shadow-sm transition-all" id="btn-monthly" onclick="togglePricing('monthly')">Monthly</button>
<button className="px-6 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-white transition-all" id="btn-yearly" onclick="togglePricing('yearly')">One-Time</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col">
<h3 className="text-xl font-semibold mb-2">Basic</h3>
<p className="text-sm text-slate-500 mb-6">For beginners testing the waters.</p>
<div className="mb-6">
<span className="text-4xl font-bold price-monthly">$199</span>
<span className="text-4xl font-bold price-yearly hidden">$149</span>
<span className="text-slate-500 text-sm">/product</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> 1 Winning Product</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Competitor Analysis</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Supplier Links</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> 3-Day Delivery</li>
</ul>
<a className="w-full py-3 border border-slate-700 rounded-lg text-center font-semibold hover:bg-slate-800 transition-colors" href="#contact">Get Started</a>
</div>

<div className="relative p-8 rounded-2xl bg-gradient-to-b from-indigo-900/50 to-slate-900 border border-indigo-500 flex flex-col transform md:-translate-y-4 shadow-2xl shadow-indigo-500/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg">MOST POPULAR</div>
<h3 className="text-xl font-semibold mb-2 text-white">Standard</h3>
<p className="text-sm text-indigo-200 mb-6">For serious dropshippers.</p>
<div className="mb-6">
<span className="text-4xl font-bold text-white price-monthly">$499</span>
<span className="text-4xl font-bold text-white price-yearly hidden">$399</span>
<span className="text-slate-400 text-sm">/package</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> 3 Winning Products</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Full Ad Copy &amp; Creative</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Facebook Audience Targeting</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> 5-Day Delivery</li>
<li className="flex items-center gap-3 text-sm text-white"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Profit Margin Calc</li>
</ul>
<a className="w-full py-3 bg-indigo-600 text-white rounded-lg text-center font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25" href="#contact">Get Started</a>
</div>

<div className="glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col">
<h3 className="text-xl font-semibold mb-2">Agency</h3>
<p className="text-sm text-slate-500 mb-6">Scale multiple stores.</p>
<div className="mb-6">
<span className="text-4xl font-bold price-monthly">$999</span>
<span className="text-4xl font-bold price-yearly hidden">$899</span>
<span className="text-slate-500 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> 10 Products / Month</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Dedicated Researcher</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Video Creative Assets</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon> Priority Support</li>
</ul>
<a className="w-full py-3 border border-slate-700 rounded-lg text-center font-semibold hover:bg-slate-800 transition-colors" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12 bg-slate-950" id="contact">
<div className="container mx-auto px-4">
<div className="glass-panel rounded-3xl p-8 md:p-12 border border-slate-800 max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-indigo-950/20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">Ready to scale?</h2>
<p className="text-slate-400">Book a free consultation call to discuss your niche and goals. We guarantee finding a potential winner within the first week.</p>
<div className="flex flex-col gap-4 mt-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Email</p>
<p className="font-medium">hello@nexfind.agency</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Schedule</p>
<p className="font-medium">calendly.com/nexfind</p>
</div>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Email" type="email"/>
</div>
<input className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Store URL (Optional)" type="text"/>
<textarea className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell us about your niche..." rows="4"></textarea>
<button className="w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors" type="button">Send Request</button>
</form>
</div>
</div>
<div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
<p>© 2024 NexFind Agency. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#"><iconify-icon icon="simple-icons:twitter"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="simple-icons:linkedin"></iconify-icon></a>
</div>
</div>
</div>
</section>


    </>
  );
}
