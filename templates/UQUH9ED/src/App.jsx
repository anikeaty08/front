import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
// Lucide Icons
lucide.createIcons();

// ROI Chart
const ctx = document.getElementById('roiChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    datasets: [{
      data: [100, 114, 132, 151, 172, 189],
      borderColor: '#34d399',
      backgroundColor: 'rgba(52,211,153,0.1)',
      tension: .3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false }},
    scales: {
      x: { ticks:{ color:'#94a3b8'}, grid:{display:false}},
      y: { ticks:{ color:'#94a3b8'}, grid:{color:'rgba(255,255,255,0.05)'}}
    }
  }
});

// Simple reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries)=> {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.remove('opacity-0','translate-y-6');
      revealObserver.unobserve(entry.target);
    }
  })
},{threshold:0.15});
reveals.forEach(el=>{
  el.classList.add('opacity-0','translate-y-6','transition','duration-700');
  revealObserver.observe(el);
});

// ParticlesJS config
particlesJS('particles-js',{
  particles: {
    number:{ value:45, density:{ enable:true, value_area:800 }},
    color:{ value:"#2dd4bf"},
    shape:{ type:"circle" },
    opacity:{ value:0.15, random:true },
    size:{ value:3, random:true },
    line_linked:{ enable:false },
    move:{ enable:true, speed:1, direction:"none", out_mode:"out" }
  },
  interactivity:{ detect_on:"canvas", events:{ onhover:{ enable:true, mode:"repulse" }}, modes:{ repulse:{ distance:75 } } },
  retina_detect:true
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10" id="particles-js"></div>
<header className="relative z-10">
<nav className="mx-auto flex items-center justify-between gap-6 px-6 py-6 lg:px-12 lg:py-8 max-w-7xl">
<div className="flex items-center gap-2">
<svg className="text-green-400" height="28" width="28"><use href="#radar"></use></svg>
<span className="text-lg font-semibold">Vanguard</span>
</div>
<ul className="hidden md:flex items-center gap-8 text-sm">
<li><a className="hover:text-green-400 transition" href="#features">Features</a></li>
<li><a className="hover:text-green-400 transition" href="#returns">Returns</a></li>
<li><a className="hover:text-green-400 transition" href="#fleet">Fleet</a></li>
<li><a className="hover:text-green-400 transition" href="#cta">Invest</a></li>
</ul>
<a className="inline-flex items-center gap-2 rounded-md bg-green-500/10 px-4 py-2 text-green-400 ring-1 ring-inset ring-green-400/20 hover:bg-green-600 hover:text-white transition" href="#cta">
<span>Get Started</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</nav>
<div className="mx-auto max-w-7xl px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
<div className="space-y-6">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight">Invest in the <span className="text-green-400">Future of Defense</span></h1>
<p className="text-lg text-white/70 max-w-xl">Own fractional shares of high-tech military drones, earn mission-based returns, and shape the next era of strategic security.</p>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-sm font-medium text-black hover:bg-green-400 transition" href="#cta">Begin Investing <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
<a className="inline-flex items-center gap-2 rounded-md ring-1 ring-inset ring-white/10 px-6 py-3 text-sm font-medium hover:bg-white/10 transition" href="#fleet">View Fleet</a>
</div>
</div>
<div className="relative">
<img alt="Stealth Drone" className="rounded-xl shadow-2xl ring-1 ring-white/10" src="https://images.unsplash.com/photo-1605731413082-48b6be7a9a56?auto=format&amp;fit=crop&amp;w=1100&amp;q=80"/>
<div className="absolute inset-0 rounded-xl bg-green-400/5 blur-2xl opacity-20 -z-10"></div>
</div>
</div>
</div>
</header>

<div className="mx-auto max-w-7xl px-6 lg:px-12">
<hr className="border-green-400/10"/>
</div>

<section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-20 space-y-20" id="features">
<div className="grid md:grid-cols-3 gap-10">
<div className="reveal group space-y-4">
<div className="w-12 h-12 flex items-center justify-center rounded-md bg-green-400/10 ring-1 ring-green-400/20">
<i className="w-6 h-6 text-green-400 group-hover:scale-110 transition" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-medium tracking-tight">Military-grade Assets</h3>
<p className="text-sm text-white/70">Access unmanned systems engineered for modern battlefields, backed by real deployment contracts.</p>
</div>
<div className="reveal group space-y-4">
<div className="w-12 h-12 flex items-center justify-center rounded-md bg-green-400/10 ring-1 ring-green-400/20">
<i className="w-6 h-6 text-green-400 group-hover:scale-110 transition" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-medium tracking-tight">Mission-Based Returns</h3>
<p className="text-sm text-white/70">Receive dividends after every successful sortie, transparently recorded on-chain.</p>
</div>
<div className="reveal group space-y-4">
<div className="w-12 h-12 flex items-center justify-center rounded-md bg-green-400/10 ring-1 ring-green-400/20">
<i className="w-6 h-6 text-green-400 group-hover:scale-110 transition" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-medium tracking-tight">Secure Custody</h3>
<p className="text-sm text-white/70">Our defense-compliant vaults ensure physical and digital security for every asset.</p>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-12">
<hr className="border-green-400/10"/>
</div>

<section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center" id="returns">
<div className="space-y-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Projected ROI</h2>
<p className="text-sm text-white/70 max-w-md">Our models forecast up to <span className="text-green-400">18.7% annual yield</span>, outpacing traditional defense indexes. Past performance isn’t indicative of future returns.</p>
<ul className="text-sm space-y-2 text-white/70">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>Monthly payout cycles</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>Supply chain royalties</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-green-400" data-lucide="check-circle"></i>Tax-advantaged structure</li>
</ul>
</div>
<div className="reveal bg-green-400/5 p-6 rounded-lg ring-1 ring-inset ring-green-400/10">
<div className="relative">
<p className="text-xs text-white/50 mb-2">5-year yield simulation</p>
<div><canvas id="roiChart"></canvas></div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-12">
<hr className="border-green-400/10"/>
</div>

<section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-20" id="fleet">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-12">Featured Drone Fleet</h2>
<div className="grid md:grid-cols-3 gap-6">
<figure className="relative overflow-hidden rounded-lg group reveal">
<img alt="Recon Drone" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&amp;fit=crop&amp;w=1170&amp;q=80"/>
<figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 pt-8 pb-4 px-4">
<h3 className="text-lg font-medium">Phoenix Recon</h3>
<p className="text-xs text-white/70">Long-range surveillance</p>
</figcaption>
</figure>
<figure className="relative overflow-hidden rounded-lg group reveal">
<img alt="Stealth Drone" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1585128794942-9a9115da8d28?auto=format&amp;fit=crop&amp;w=1170&amp;q=80"/>
<figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 pt-8 pb-4 px-4">
<h3 className="text-lg font-medium">Specter Stealth</h3>
<p className="text-xs text-white/70">Radar-evading strike craft</p>
</figcaption>
</figure>
<figure className="relative overflow-hidden rounded-lg group reveal">
<img alt="Cargo Drone" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&amp;fit=crop&amp;w=1170&amp;q=80"/>
<figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 pt-8 pb-4 px-4">
<h3 className="text-lg font-medium">Atlas Cargo</h3>
<p className="text-xs text-white/70">Logistics &amp; resupply</p>
</figcaption>
</figure>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-12">
<hr className="border-green-400/10"/>
</div>

<section className="relative z-10 py-24" id="cta">
<div className="mx-auto max-w-7xl px-6 lg:px-12 text-center space-y-8">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">Deploy Capital. <span className="text-green-400">Defend the Future.</span></h2>
<p className="text-white/70 max-w-xl mx-auto text-sm">Join thousands of strategic investors accelerating innovation in unmanned defense technologies.</p>
<a className="inline-flex items-center gap-2 rounded-md bg-green-500 px-8 py-4 text-sm font-medium text-black hover:bg-green-400 transition shadow-sm" href="#">Create Your Account <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</section>

<footer className="relative z-10 border-t border-green-400/10">
<div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 grid md:grid-cols-2 gap-8 text-sm">
<div className="space-y-4">
<div className="flex items-center gap-2">
<svg className="text-green-400" height="20" width="20"><use href="#radar"></use></svg>
<span className="font-medium">Vanguard Drones</span>
</div>
<p className="text-white/60">© 2024 Vanguard Defense Ventures LLC. All rights reserved.</p>
</div>
<div className="flex md:justify-end gap-8">
<a className="hover:text-green-400 transition" href="#">Terms</a>
<a className="hover:text-green-400 transition" href="#">Privacy</a>
<a className="hover:text-green-400 transition" href="#">Contact</a>
</div>
</div>
</footer>

<svg style={{display: 'none'}}>
<symbol fill="none" id="radar" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2v4"></path>
<path d="M12 18v4"></path>
<path d="M4 12h4"></path>
<path d="M16 12h4"></path>
<path d="m5.6 5.6 2.8 2.8"></path>
<path d="m15.6 15.6 2.8 2.8"></path>
<path d="m5.6 18.4 2.8-2.8"></path>
<path d="m15.6 8.4 2.8-2.8"></path>
</symbol>
</svg>


    </>
  );
}
