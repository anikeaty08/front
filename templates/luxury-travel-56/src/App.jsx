import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple script to handle header background on scroll
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-black/80', 'backdrop-blur-xl', 'border-white/5');
            } else {
                header.classList.remove('bg-black/80', 'backdrop-blur-xl', 'border-white/5');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-700 border-b border-transparent hover:bg-black/80 hover:backdrop-blur-xl hover:border-white/5 group" id="main-header">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent -z-10 group-hover:hidden"></div>
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="text-white tracking-[0.25em] text-sm font-light uppercase z-10" href="#">
                TripEver
            </a>

<nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
<a className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide font-light" href="#">Our Story</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide font-light" href="#">Membership</a>
</nav>

<div className="flex items-center gap-8 z-10">
<a className="text-sm text-neutral-400 hover:text-white transition-colors tracking-wide font-light hidden sm:block" href="#">Login</a>

<div className="relative group/dropdown py-4">
<button className="flex items-center gap-2 text-sm text-neutral-400 group-hover/dropdown:text-white transition-colors font-light">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
<span>EN / USD</span>
</button>
<div className="absolute top-full right-0 mt-2 w-48 glass-panel rounded-md opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 overflow-hidden">
<div className="p-2 space-y-1">
<div className="px-4 py-2 text-xs text-neutral-500 uppercase tracking-widest border-b border-white/5 pb-2 mb-2">Region</div>
<button className="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded transition-colors flex justify-between">
                                English <span>USD</span>
</button>
<button className="w-full text-left px-4 py-2 text-sm text-neutral-500 hover:text-white hover:bg-white/5 rounded transition-colors flex justify-between">
                                Français <span>EUR</span>
</button>
<button className="w-full text-left px-4 py-2 text-sm text-neutral-500 hover:text-white hover:bg-white/5 rounded transition-colors flex justify-between">
                                日本語 <span>JPY</span>
</button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-24">

<div className="absolute inset-0 w-full h-full -z-20">
<img alt="Luxury texture" className="w-full h-full object-cover object-center opacity-40 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{animation: 'pulse-slow 20s infinite alternate'}}/>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent -z-10"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 mt-12 reveal-group">
<h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-[1.1] tracking-tight mb-8">
                The World’s Most Exclusive Travel Rates. <br className="hidden md:block"/>
<span className="text-neutral-500">For Members Only.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl mb-12 leading-relaxed">
                Access private rates across global luxury stays. Unlisted on public exchanges.
            </p>
<div className="flex flex-col items-start gap-4">
<a className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 rounded-sm transition-all duration-500 overflow-hidden" href="#inquiry">
<span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
<span className="text-sm tracking-widest text-white uppercase font-light z-10 flex items-center gap-2">
                        Request Private Access
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<span className="text-xs text-neutral-600 tracking-wide pl-2">Approval required</span>
</div>
</div>
</section>

<section className="py-32 md:py-48 relative border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="font-display text-2xl md:text-4xl text-white tracking-tight mb-6">The Hidden Market</h2>
<p className="text-sm md:text-base text-[#D4AF37] font-light tracking-wide uppercase">Members save an average of 32% on 5-star properties.</p>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">

<div className="w-full md:w-1/2 glass-panel p-8 rounded-lg relative overflow-hidden grayscale opacity-40 blur-[0.5px] transition-all duration-700 hover:blur-none hover:opacity-60">
<div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Public Exchange</p>
<p className="text-xl text-white font-display">Aman Tokyo</p>
<p className="text-sm text-neutral-400 font-light mt-1">Deluxe King City View</p>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-neutral-500 font-light">Per night</span>
<span className="text-2xl text-neutral-400 font-light line-through decoration-white/20">$1,850</span>
</div>
</div>

<div className="w-full md:w-1/2 glass-panel p-8 rounded-lg relative overflow-hidden border-[#D4AF37]/30 shadow-[0_0_40px_rgba(212,175,55,0.05)] transform md:scale-105 z-10">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] blur-[100px] opacity-10"></div>
<div className="flex justify-between items-end mb-8 border-b border-[#D4AF37]/20 pb-6">
<div>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest mb-2 flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-unlocked-linear"></iconify-icon> Private Rate
                            </p>
<p className="text-xl text-white font-display">Aman Tokyo</p>
<p className="text-sm text-neutral-300 font-light mt-1">Deluxe King City View</p>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-neutral-400 font-light">Per night</span>
<div className="text-right">
<span className="text-3xl text-white font-light block">$1,260</span>
<span className="text-xs text-[#D4AF37] tracking-wide mt-1 block">Taxes included</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#020202]">
<div className="absolute inset-0 w-full h-full opacity-30">

<div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="font-display text-2xl md:text-3xl text-center text-white tracking-tight mb-24 opacity-80">Silent Activity Across the Globe</h2>
<div className="relative w-full aspect-video md:aspect-[21/9] max-w-5xl mx-auto border border-white/5 rounded-xl bg-black/50 backdrop-blur-sm">


<div className="absolute top-[30%] left-[20%] group">
<div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse-slow shadow-[0_0_15px_#D4AF37]"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 glass-panel p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<p className="text-xs text-white mb-1">London, UK</p>
<p className="text-xs text-[#D4AF37] font-light">Saved $310</p>
</div>
</div>

<div className="absolute top-[45%] left-[60%] group">
<div className="w-2 h-2 rounded-full bg-white/50 animate-pulse-slow shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 glass-panel p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<p className="text-xs text-white mb-1">Dubai, UAE</p>
<p className="text-xs text-[#D4AF37] font-light">Saved $420</p>
</div>
</div>

<div className="absolute top-[60%] left-[80%] group">
<div className="w-2 h-2 rounded-full bg-white/30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 glass-panel p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
<p className="text-xs text-white mb-1">Tokyo, JP</p>
<p className="text-xs text-[#D4AF37] font-light">Saved $580</p>
</div>
</div>
<div className="absolute bottom-6 left-6 text-xs text-neutral-600 font-light tracking-wide">Live network activity</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">

<div className="flex justify-center mb-24 opacity-50">
<div className="flex items-center gap-8">
<div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/30 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
<div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-black">
<iconify-icon className="text-neutral-400" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/30 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="text-center group">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors duration-500 mb-6 block mx-auto" icon="solar:buildings-linear" width="32"></iconify-icon>
<h3 className="text-base text-white font-light tracking-wide mb-3">1,200,000+ Verified Properties</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Global inventory continuously synced from primary source networks.</p>
</div>
<div className="text-center group">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors duration-500 mb-6 block mx-auto" icon="solar:code-scan-linear" width="32"></iconify-icon>
<h3 className="text-base text-white font-light tracking-wide mb-3">Proprietary Mapping Tech</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Advanced room matching ensures exact comparisons across suppliers.</p>
</div>
<div className="text-center group">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors duration-500 mb-6 block mx-auto" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h3 className="text-base text-white font-light tracking-wide mb-3">Direct API Verified Rates</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">No caching. Live requests to back-end systems guarantee pricing.</p>
</div>
<div className="text-center group">
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors duration-500 mb-6 block mx-auto" icon="solar:key-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-base text-white font-light tracking-wide mb-3">Private Member Inventory</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Access distinct allocations hidden from public search engines.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#010101]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/3">
<h2 className="font-display text-3xl md:text-4xl text-white tracking-tight mb-8">See it to believe it.</h2>
<p className="text-base text-neutral-400 font-light leading-relaxed mb-8">
                        Our interface is designed for absolute clarity. Search global destinations, encounter locked wholesale rates, and execute logic to reveal your private standing.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Zero booking fees
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Transparent tax breakdown
                        </li>
</ul>
</div>

<div className="w-full lg:w-2/3">
<div className="glass-panel p-2 rounded-xl max-w-2xl mx-auto relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<div className="bg-neutral-900 rounded-lg overflow-hidden flex flex-col sm:flex-row border border-white/5">

<div className="w-full sm:w-2/5 h-48 sm:h-auto bg-[url('https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>

<div className="w-full sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between relative bg-neutral-950">
<div>
<h4 className="font-display text-lg text-white mb-1">The Ritz-Carlton, Paris</h4>
<p className="text-xs text-neutral-500 font-light mb-6">Vendôme</p>
</div>
<div className="space-y-4 relative">

<div className="flex items-center justify-between opacity-50 group-hover:opacity-0 transition-opacity duration-700 absolute inset-x-0 bottom-0 pointer-events-none">
<div className="flex items-center gap-2 text-sm text-neutral-400">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> Member Price Locked
                                        </div>
<div className="w-16 h-6 bg-white/5 rounded animate-pulse"></div>
</div>

<div className="flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
<div className="flex flex-col gap-1 text-sm">
<span className="text-[#D4AF37] flex items-center gap-2">
<iconify-icon icon="solar:unlock-linear"></iconify-icon> Unlocked
                                            </span>
</div>
<div className="text-right">
<span className="text-xs text-neutral-500 line-through block mb-1">$2,400</span>
<span className="text-2xl text-white font-light block">$1,850</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
<div className="relative pl-8 md:pl-0 md:text-center border-l md:border-l-0 md:border-t border-white/10 md:pt-8 group">
<span className="absolute left-[-17px] md:left-1/2 md:-top-[17px] md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs text-neutral-500 font-display transition-colors group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]">01</span>
<h3 className="text-lg text-white font-light tracking-wide mb-4 mt-2 md:mt-6">Request Access</h3>
<p className="text-sm text-neutral-500 font-light">Submit your inquiry. Our system reviews applications to maintain network exclusivity.</p>
</div>
<div className="relative pl-8 md:pl-0 md:text-center border-l md:border-l-0 md:border-t border-white/10 md:pt-8 group">
<span className="absolute left-[-17px] md:left-1/2 md:-top-[17px] md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs text-neutral-500 font-display transition-colors group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]">02</span>
<h3 className="text-lg text-white font-light tracking-wide mb-4 mt-2 md:mt-6">Unlock Member Rates</h3>
<p className="text-sm text-neutral-500 font-light">Once approved, log in to bypass public exchanges and view underlying costs.</p>
</div>
<div className="relative pl-8 md:pl-0 md:text-center border-l md:border-l-0 md:border-t border-white/10 md:pt-8 group">
<span className="absolute left-[-17px] md:left-1/2 md:-top-[17px] md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs text-neutral-500 font-display transition-colors group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]">03</span>
<h3 className="text-lg text-white font-light tracking-wide mb-4 mt-2 md:mt-6">Book at Better Value</h3>
<p className="text-sm text-neutral-500 font-light">Secure stays instantly. Direct integrations mean your reservation is guaranteed.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#030303]">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-xs text-neutral-500 uppercase tracking-widest mb-16">Status Levels</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">

<div className="p-8 border border-white/5 rounded-sm hover:border-white/20 transition-colors duration-500 bg-black/20 flex flex-col items-center justify-center h-40">
<h3 className="text-lg text-neutral-300 font-light tracking-wide">Access</h3>
</div>

<div className="p-8 border border-white/10 rounded-sm hover:border-[#D4AF37]/50 transition-colors duration-500 bg-black/40 flex flex-col items-center justify-center h-40 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h3 className="text-lg text-white font-light tracking-wide relative z-10">Elite</h3>
</div>

<div className="p-8 border border-white/5 rounded-sm hover:border-white/20 transition-colors duration-500 bg-black/20 flex flex-col items-center justify-center h-40">
<h3 className="text-lg text-neutral-300 font-light tracking-wide">Founder</h3>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors tracking-wide font-light border-b border-transparent hover:border-white pb-1" href="#">
                View Membership <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-40 relative border-t border-white/5 overflow-hidden" id="inquiry">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] blur-[200px] opacity-5 rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="font-display text-4xl md:text-6xl text-white tracking-tight mb-8">Access is limited.</h2>
<p className="text-lg text-neutral-400 font-light mb-16">Request your private invite to the hidden market.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div className="relative">
<input className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors" placeholder="Email Address" required="" type="email"/>
</div>
<button className="w-full group relative inline-flex justify-center items-center gap-4 px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-sm transition-colors duration-300" type="submit">
<span className="text-sm tracking-widest uppercase font-medium">Request Private Access</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-neutral-600 mt-4">Takes 30 seconds. No commitment.</p>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-white tracking-[0.25em] text-xs font-light uppercase opacity-50">
                TripEver
            </div>
<nav className="flex gap-8">
<a className="text-xs text-neutral-500 hover:text-white transition-colors font-light" href="#">Our Story</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors font-light" href="#">Membership</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors font-light" href="#">Contact</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors font-light" href="#">Security</a>
</nav>
<div className="text-xs text-neutral-600 font-light">
                © 2024 TripEver. Private Exchange.
            </div>
</div>
</footer>


    </>
  );
}
