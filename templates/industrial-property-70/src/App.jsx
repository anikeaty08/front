import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)] group-hover:shadow-[0_0_15px_rgba(249,115,22,0.8)] transition-shadow"></div>
<span className="tracking-tighter font-semibold text-lg text-white">PRPRTCH</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-400 hover:text-orange-400 transition-colors" href="#features">Platform</a>
<a className="text-sm font-medium text-zinc-400 hover:text-orange-400 transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-zinc-400 hover:text-orange-400 transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-orange-500 rounded-md hover:bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all" href="#estimate">
                    Book Service
                </a>
</div>
<button className="md:hidden text-zinc-400 hover:text-orange-500 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-40 overflow-hidden flex flex-col items-center text-center px-6 border-b border-zinc-800">

<div className="absolute inset-0 z-0">
<img alt="Industrial Maintenance" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400 mb-8 hover:bg-orange-500/20 transition-colors cursor-pointer backdrop-blur-sm">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
<span>On-Demand Industrial Repair</span>
<iconify-icon className="text-orange-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                Expert maintenance, <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-glow">deployed instantly.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                The unified platform for commercial and residential repairs. 
                Pay per dispatch, no monthly fees. Real-time tracking and expert resolution.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-black bg-orange-500 rounded-md hover:bg-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all" href="#estimate">
                    Request Dispatch
                    <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-zinc-900 border border-zinc-700 rounded-md hover:border-orange-500/50 hover:bg-zinc-800 transition-colors group" href="#">
<iconify-icon className="group-hover:text-orange-400 transition-colors" icon="solar:document-text-linear"></iconify-icon>
                    View Services
                </a>
</div>
</div>
</section>

<section className="py-12 border-b border-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-black to-orange-500/5"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-8">Trusted by facility managers at</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="tracking-tighter font-semibold text-xl text-white">ACME CORP</span>
<span className="tracking-tighter font-semibold text-xl text-white">GLOBEX</span>
<span className="tracking-tighter font-semibold text-xl text-white">SOYUZ</span>
<span className="tracking-tighter font-semibold text-xl text-white">INERTA</span>
<span className="tracking-tighter font-semibold text-xl text-white">VERTEX</span>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-800 relative bg-zinc-950 animate-bg-pan bg-gradient-to-br from-black via-zinc-950 to-orange-950/20" id="estimate">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Calculate Dispatch Fee</h2>
<p className="text-base text-zinc-400">Configure your parameters to get a real-time one-time service quote.</p>
</div>
<div className="bg-black/80 backdrop-blur-xl border border-zinc-800 rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)] transition-all duration-500">
<form className="space-y-8" onsubmit="event.preventDefault();">

<div className="space-y-2">
<label className="block text-sm font-medium text-zinc-300">Service Category</label>
<div className="relative group">
<select className="w-full appearance-none bg-zinc-900 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors cursor-pointer group-hover:border-zinc-600">
<option value="plumbing">Plumbing &amp; Water Systems</option>
<option value="hvac">HVAC Diagnostics &amp; Repair</option>
<option value="electrical">Electrical Troubleshooting</option>
<option value="appliance">Appliance Repair</option>
<option value="structural">Emergency Board-up / Structural</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none group-hover:text-orange-400 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="block text-sm font-medium text-zinc-300">Facility Size</label>
<span className="text-sm font-medium text-orange-400" id="sqft-value">2,500 sq ft</span>
</div>
<input className="range-slider" max="10000" min="500" oninput="document.getElementById('sqft-value').innerText = this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' sq ft'" step="100" type="range" value="2500"/>
<div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
<span>500 sq ft</span>
<span>10,000+ sq ft</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-zinc-800">

<div className="flex items-center justify-between p-4 rounded-md border border-zinc-800 bg-zinc-900 hover:border-orange-500/40 transition-colors group">
<div>
<h4 className="text-sm font-medium text-white group-hover:text-orange-100 transition-colors">Emergency Response</h4>
<p className="text-xs text-zinc-500 mt-0.5">Under 2-hour arrival</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500 peer-checked:shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
</label>
</div>

<div className="flex items-center justify-between p-4 rounded-md border border-zinc-800 bg-zinc-900 hover:border-orange-500/40 transition-colors group">
<div>
<h4 className="text-sm font-medium text-white group-hover:text-orange-100 transition-colors">Commercial Site</h4>
<p className="text-xs text-zinc-500 mt-0.5">Requires COI/Permits</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500 peer-checked:shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
</label>
</div>
</div>

<div className="pt-4">
<label className="flex items-start cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 mr-3">
<input className="sr-only peer" required="" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-600 rounded bg-zinc-900 peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:shadow-[0_0_8px_rgba(249,115,22,0.6)] transition-all flex items-center justify-center group-hover:border-orange-400">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 transition-opacity text-xs font-bold" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">I agree to the <a className="text-orange-400 hover:text-orange-300 underline underline-offset-2" href="#">Terms of Service</a> for one-time dispatch.</span>
</label>
</div>
<button className="w-full py-3 px-4 bg-orange-500 text-black text-sm font-semibold rounded-md hover:bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all flex items-center justify-center gap-2" type="submit">
                        Get Dispatch Fee
                        <iconify-icon icon="solar:calculator-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-zinc-800" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Precision engineering.</h2>
<p className="text-lg text-zinc-400">Built for singular, high-stakes repair scenarios. No subscriptions, just results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-zinc-950 rounded-xl border border-zinc-800 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:text-orange-500 transition-all duration-500 scale-110 group-hover:scale-100">
<iconify-icon height="160" icon="solar:buildings-linear" width="160"></iconify-icon>
</div>
<div className="mb-24 relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all">
<iconify-icon className="text-orange-500 group-hover:text-black transition-colors" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-orange-50 transition-colors">Rigorous Compliance</h3>
<p className="text-base text-zinc-400 max-w-md">Every technician dispatched is pre-verified for local commercial building codes, insurance requirements, and safety protocols.</p>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-orange-400 relative z-10 cursor-pointer group/link">
                        View compliance standards <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="bg-zinc-950 rounded-xl border border-zinc-800 p-8 flex flex-col justify-between group hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300 relative overflow-hidden">
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-[40px] group-hover:bg-orange-500/40 transition-colors"></div>
<div className="mb-12 relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-orange-400 transition-colors" height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Rapid Deployment</h3>
<p className="text-base text-zinc-400">Intelligent routing algorithms assign the closest qualified pro within seconds of payment.</p>
</div>
</div>

<div className="bg-zinc-950 rounded-xl border border-zinc-800 p-8 flex flex-col justify-between group hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300 relative overflow-hidden">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] group-hover:bg-orange-500/30 transition-colors"></div>
<div className="mb-12 relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-orange-400 transition-colors" height="20" icon="solar:thermometer-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Specialized HVAC</h3>
<p className="text-base text-zinc-400">Access to tier-1 diagnostic equipment and freon handling certified experts.</p>
</div>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-zinc-800 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-orange-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.15),transparent_50%)] pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity"></div>
<div className="mb-24 relative z-10">
<div className="w-10 h-10 rounded-lg bg-black border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-white group-hover:text-orange-400 transition-colors" height="20" icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Transparent Flat Fees</h3>
<p className="text-base text-zinc-400 max-w-md">No hidden monthly subscriptions. You only pay the dispatch fee and approved parts/labor costs per job.</p>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-white relative z-10 cursor-pointer group/link hover:text-orange-400 transition-colors">
                        View pricing model <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-b border-zinc-800 overflow-hidden relative">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-orange-500/5 blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<iconify-icon className="text-orange-500" height="20" icon="solar:radar-linear" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Track progress in real-time.</h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        From the moment you pay the dispatch fee, watch the technician's ETA, view diagnostic photos, and approve repair costs through a single encrypted link.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<iconify-icon className="text-orange-500 mt-1 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.8)] rounded-full transition-all" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<strong className="text-sm font-medium text-white block group-hover:text-orange-100 transition-colors">GPS Tracking</strong>
<span className="text-sm text-zinc-500">Live map view of technician approach.</span>
</div>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-orange-500 mt-1 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.8)] rounded-full transition-all" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<strong className="text-sm font-medium text-white block group-hover:text-orange-100 transition-colors">Digital Approvals</strong>
<span className="text-sm text-zinc-500">One-click sign-off on additional parts.</span>
</div>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-orange-500 mt-1 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.8)] rounded-full transition-all" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<strong className="text-sm font-medium text-white block group-hover:text-orange-100 transition-colors">Instant Invoicing</strong>
<span className="text-sm text-zinc-500">Receipts generated the moment work concludes.</span>
</div>
</li>
</ul>
</div>
<div className="relative bg-black rounded-2xl border border-zinc-800 p-8 h-[500px] flex items-center justify-center shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] group hover:border-orange-500/30 transition-colors duration-500">

<div className="w-full max-w-sm bg-zinc-950 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-zinc-800 p-4 space-y-4 relative z-10 transform translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center justify-between border-b border-zinc-800 pb-3">
<div className="h-4 w-24 bg-zinc-800 rounded"></div>
<div className="h-4 w-12 bg-orange-500/20 rounded border border-orange-500/30 animate-pulse"></div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded-md bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-orange-500" icon="solar:map-point-linear"></iconify-icon></div>
<div className="flex-1"><div className="h-3 w-32 bg-zinc-700 rounded mb-1"></div><div className="h-2 w-20 bg-zinc-800 rounded"></div></div>
<div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,1)]"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded-md bg-zinc-900 border border-zinc-800">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="solar:camera-linear"></iconify-icon></div>
<div className="flex-1"><div className="h-3 w-28 bg-zinc-700 rounded mb-1"></div><div className="h-2 w-16 bg-zinc-800 rounded"></div></div>
</div>
<div className="flex items-center gap-3 p-2 rounded-md bg-zinc-900 border border-zinc-800">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="solar:document-linear"></iconify-icon></div>
<div className="flex-1"><div className="h-3 w-36 bg-zinc-700 rounded mb-1"></div><div className="h-2 w-24 bg-zinc-800 rounded"></div></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800 text-center">
<div className="pt-8 md:pt-0 flex flex-col items-center group">
<p className="text-4xl font-semibold tracking-tight text-white mb-2 group-hover:text-orange-400 group-hover:text-glow transition-all duration-300">98%</p>
<p className="text-sm font-medium text-zinc-500">First-visit fix rate</p>
</div>
<div className="pt-8 md:pt-0 flex flex-col items-center group">
<p className="text-4xl font-semibold tracking-tight text-white mb-2 group-hover:text-orange-400 group-hover:text-glow transition-all duration-300">45m</p>
<p className="text-sm font-medium text-zinc-500">Avg. arrival time</p>
</div>
<div className="pt-8 md:pt-0 flex flex-col items-center group">
<p className="text-4xl font-semibold tracking-tight text-white mb-2 group-hover:text-orange-400 group-hover:text-glow transition-all duration-300">Zero</p>
<p className="text-sm font-medium text-zinc-500">Monthly fees</p>
</div>
<div className="pt-8 md:pt-0 flex flex-col items-center group">
<p className="text-4xl font-semibold tracking-tight text-white mb-2 group-hover:text-orange-400 group-hover:text-glow transition-all duration-300">24/7</p>
<p className="text-sm font-medium text-zinc-500">Dispatch availability</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-b border-zinc-800 relative" id="pricing">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-orange-500/10 blur-[120px] pointer-events-none rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Pay per dispatch.</h2>
<p className="text-lg text-zinc-400">No subscriptions. No retainers. Just book a service when things break.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-black rounded-2xl border border-zinc-800 p-8 flex flex-col hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300 group">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-orange-400 transition-colors">Standard Diagnostic</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Next-day service for non-critical repairs and inspections.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">$95</span>
<span className="text-sm text-zinc-500"> flat fee</span>
</div>
<a className="w-full py-2.5 px-4 bg-zinc-900 text-white text-sm font-medium rounded-md border border-zinc-700 hover:border-orange-500/50 hover:bg-zinc-800 transition-colors text-center mb-8" href="#">Book Standard</a>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Scheduled 24-48h window</li>
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> 1 hour on-site diagnostic</li>
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Itemized repair quote</li>
</ul>
</div>

<div className="bg-gradient-to-b from-zinc-900 to-black rounded-2xl border border-orange-500/50 p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(249,115,22,0.15)] hover:shadow-[0_0_60px_rgba(249,115,22,0.25)] hover:border-orange-500 transition-all duration-300 group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]">Emergency</div>
<h3 className="text-lg font-medium text-white mb-2">Priority Dispatch</h3>
<p className="text-sm text-zinc-400 mb-6 line-clamp-2">Immediate deployment for active leaks, power loss, or critical failures.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">$249</span>
<span className="text-sm text-zinc-400"> flat fee</span>
</div>
<a className="w-full py-2.5 px-4 bg-orange-500 text-black text-sm font-semibold rounded-md hover:bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all text-center mb-8" href="#">Deploy Now</a>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-3 text-sm text-zinc-200"><iconify-icon className="text-orange-500" icon="solar:siren-rounded-linear"></iconify-icon> Under 2-hour arrival</li>
<li className="flex items-center gap-3 text-sm text-zinc-200"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> 24/7 availability</li>
<li className="flex items-center gap-3 text-sm text-zinc-200"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Senior technician assigned</li>
<li className="flex items-center gap-3 text-sm text-zinc-200"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Temporary patching included</li>
</ul>
</div>

<div className="bg-black rounded-2xl border border-zinc-800 p-8 flex flex-col hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-300 group">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-orange-400 transition-colors">Project Installation</h3>
<p className="text-sm text-zinc-500 mb-6 line-clamp-2">Full system replacements and commercial renovations.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">Custom</span>
</div>
<a className="w-full py-2.5 px-4 bg-zinc-900 text-white text-sm font-medium rounded-md border border-zinc-700 hover:border-orange-500/50 hover:bg-zinc-800 transition-colors text-center mb-8" href="#">Request Quote</a>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Free virtual consultation</li>
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Multi-trade coordination</li>
<li className="flex items-center gap-3 text-sm text-zinc-400"><iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Permit management</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-zinc-800 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white">Trusted by facility managers.</h2>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="animate-marquee py-4">

<div className="w-80 mx-4 p-6 bg-zinc-950 border border-zinc-800 rounded-xl flex-shrink-0 hover:border-orange-500/30 transition-colors">
<div className="flex text-orange-500 mb-4 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">"The pay-per-dispatch model is brilliant. We don't waste money on retainers, and the tech arrived in 40 minutes for our water main leak."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="solar:user-linear"></iconify-icon></div>
<div>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-zinc-500">Director of Facilities, Vertex</p>
</div>
</div>
</div>
<div className="w-80 mx-4 p-6 bg-zinc-950 border border-zinc-800 rounded-xl flex-shrink-0 hover:border-orange-500/30 transition-colors">
<div className="flex text-orange-500 mb-4 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">"Cancelled our expensive maintenance contracts. Propertech's flat fee emergency dispatch is faster and cheaper than our old vendor."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="solar:user-linear"></iconify-icon></div>
<div>
<p className="text-sm font-medium text-white">Michael Chen</p>
<p className="text-xs text-zinc-500">Operations Manager, Inerta</p>
</div>
</div>
</div>
<div className="w-80 mx-4 p-6 bg-zinc-950 border border-zinc-800 rounded-xl flex-shrink-0 hover:border-orange-500/30 transition-colors">
<div className="flex text-orange-500 mb-4 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">"Transparent pricing, no hidden fees. The quote provided after the diagnostic was exact. Zero surprises."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="solar:user-linear"></iconify-icon></div>
<div>
<p className="text-sm font-medium text-white">David Ross</p>
<p className="text-xs text-zinc-500">Commercial Landlord</p>
</div>
</div>
</div>

<div className="w-80 mx-4 p-6 bg-zinc-950 border border-zinc-800 rounded-xl flex-shrink-0 hover:border-orange-500/30 transition-colors">
<div className="flex text-orange-500 mb-4 drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">"The pay-per-dispatch model is brilliant. We don't waste money on retainers, and the tech arrived in 40 minutes for our water main leak."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-500" icon="solar:user-linear"></iconify-icon></div>
<div>
<p className="text-sm font-medium text-white">Sarah Jenkins</p>
<p className="text-xs text-zinc-500">Director of Facilities, Vertex</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-b border-zinc-800">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-10 text-center">Dispatch details</h2>
<div className="space-y-4">
<details className="group border border-zinc-800 bg-black rounded-lg [&amp;_summary::-webkit-details-marker]:hidden hover:border-orange-500/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-white font-medium text-base group-hover:text-orange-400 transition-colors">
                        What happens after I pay the dispatch fee?
                        <iconify-icon className="transition group-open:-rotate-180 text-zinc-500 group-hover:text-orange-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                        Once the flat fee is authorized, our system instantly assigns the nearest qualified technician. You will receive a tracking link via SMS to monitor their ETA in real-time. The tech will diagnose the issue and provide a hard quote for parts and labor before any further work begins.
                    </div>
</details>
<details className="group border border-zinc-800 bg-black rounded-lg [&amp;_summary::-webkit-details-marker]:hidden hover:border-orange-500/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-white font-medium text-base group-hover:text-orange-400 transition-colors">
                        Are there any hidden monthly costs?
                        <iconify-icon className="transition group-open:-rotate-180 text-zinc-500 group-hover:text-orange-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                        Absolutely not. We operate strictly on a per-dispatch basis. You only pay when you need us. Creating an account to manage your properties and view past invoices is completely free.
                    </div>
</details>
<details className="group border border-zinc-800 bg-black rounded-lg [&amp;_summary::-webkit-details-marker]:hidden hover:border-orange-500/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-5 text-white font-medium text-base group-hover:text-orange-400 transition-colors">
                        What if the issue cannot be fixed immediately?
                        <iconify-icon className="transition group-open:-rotate-180 text-zinc-500 group-hover:text-orange-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                        If specialized parts need to be ordered, the technician will secure the site, stop any active damage (like patching a leak), and provide an estimate for the return visit. You do not pay a second dispatch fee when they return to install the part.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-black py-16 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<span className="tracking-tighter font-semibold text-lg mb-4 block text-white flex items-center gap-2">
<div className="w-4 h-4 rounded bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
                        PRPRTCH
                    </span>
<p className="text-sm text-zinc-500 max-w-sm mb-6">
                        Industrial-grade property maintenance. On-demand dispatch, transparent pricing, zero subscriptions.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="solar:github-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-orange-500 transition-colors" href="#"><iconify-icon icon="solar:figma-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Emergency Dispatch</a></li>
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">HVAC Repair</a></li>
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Commercial Plumbing</a></li>
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Electrical Systems</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Vendor Network</a></li>
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Contact Support</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-zinc-500 hover:text-orange-400 transition-colors" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500">
                    © 2024 Propertech Inc. All rights reserved.
                </p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse"></div>
<span className="text-xs text-zinc-400">Network online</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
