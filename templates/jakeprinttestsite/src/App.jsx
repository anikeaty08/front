import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Parallax Scroll Effect for Blobs
        const layers = document.querySelectorAll('.parallax-layer');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            layers.forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed'));
                const yPos = -(scrollY * speed);
                // Apply transform without interfering with internal CSS animation
                layer.style.transform = `translateY(${yPos}px)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

<div className="parallax-layer absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]" data-speed="0.05">
<div className="w-full h-full bg-cyan-600/20 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
</div>

<div className="parallax-layer absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px]" data-speed="-0.03">
<div className="w-full h-full bg-pink-600/15 rounded-full blur-[120px] mix-blend-screen animate-blob-reverse"></div>
</div>

<div className="parallax-layer absolute top-[40%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px]" data-speed="0.08">
<div className="w-full h-full bg-yellow-600/10 rounded-full blur-[90px] mix-blend-screen animate-blob"></div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-1 group cursor-pointer">

<div className="flex -space-x-1 mr-2 opacity-100 transition-opacity">
<div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">cds<span className="font-light text-slate-400">PRINT</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all" href="#">Services</a>
<a className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all" href="#">Industries</a>
<a className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all" href="#">Sustainability</a>
<a className="hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all" href="#">Contact</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded-full text-xs font-bold hover:bg-cyan-50 transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                Request Quote
                <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
<button className="md:hidden p-2 text-slate-400">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-300 mb-8 shadow-lg shadow-cyan-900/20 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                    Now accepting new commercial partners
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                    Precision in every <br/>
<span className="cmyk-gradient-text">pixel and pigment.</span>
</h1>
<p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed mb-10">
                    High-fidelity commercial printing for industries that demand perfection. From digital on-demand to large-scale offset, we bring your vision to vibrant life.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="group flex items-center gap-2 bg-white text-slate-950 px-6 py-3.5 rounded-lg text-sm font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Start a Project
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right"></i>
</button>
<button className="flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="printer"></i>
                        Explore Equipment
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-950/50 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Specialized Industries</h2>
<p className="text-slate-400 max-w-2xl">Tailored print supply chain solutions for sector-specific requirements.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 border border-cyan-500/20">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">MedTech</h3>
<p className="text-xs text-slate-400 leading-relaxed">Device manuals &amp; packaging.</p>
</div>
<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 group-hover:text-pink-300 transition-all duration-300 border border-pink-500/20">
<i className="w-5 h-5" data-lucide="flask-conical"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Pharmaceutical</h3>
<p className="text-xs text-slate-400 leading-relaxed">Compliance &amp; labeling.</p>
</div>
<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 group-hover:text-yellow-300 transition-all duration-300 border border-yellow-500/20">
<i className="w-5 h-5" data-lucide="graduation-cap"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Education</h3>
<p className="text-xs text-slate-400 leading-relaxed">Curriculum &amp; admin materials.</p>
</div>
<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-slate-400/50 transition-all hover:bg-white/[0.07]">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:scale-110 transition-all duration-300 border border-white/10">
<i className="w-5 h-5" data-lucide="factory"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Manufacturing</h3>
<p className="text-xs text-slate-400 leading-relaxed">Safety logs &amp; tech specs.</p>
</div>
<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 border border-cyan-500/20">
<i className="w-5 h-5" data-lucide="landmark"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Government</h3>
<p className="text-xs text-slate-400 leading-relaxed">Secure forms &amp; reports.</p>
</div>

<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 group-hover:text-pink-300 transition-all duration-300 border border-pink-500/20">
<i className="w-5 h-5" data-lucide="store"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Franchises</h3>
<p className="text-xs text-slate-400 leading-relaxed">Brand consistent assets.</p>
</div>
<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 group-hover:text-yellow-300 transition-all duration-300 border border-yellow-500/20">
<i className="w-5 h-5" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Non-Profits</h3>
<p className="text-xs text-slate-400 leading-relaxed">Donor outreach &amp; mailers.</p>
</div>
<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-slate-400/50 transition-all hover:bg-white/[0.07]">
<div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 mb-4 group-hover:scale-110 transition-all duration-300 border border-white/10">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Retail Goods</h3>
<p className="text-xs text-slate-400 leading-relaxed">Point of sale &amp; packaging.</p>
</div>
<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 border border-cyan-500/20">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Finance</h3>
<p className="text-xs text-slate-400 leading-relaxed">Annual reports &amp; prospectus.</p>
</div>
<div className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-500/50 transition-all hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 group-hover:text-pink-300 transition-all duration-300 border border-pink-500/20">
<i className="w-5 h-5" data-lucide="printer-check"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Printers</h3>
<p className="text-xs text-slate-400 leading-relaxed">Wholesale overflow support.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">CMYK Perfection.<br/>Every Single Time.</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        We leverage state-of-the-art color management systems to ensure brand consistency across all substrates. Whether it's a 50,000 run offset job or a single digital prototype.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-300">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            G7 Master Qualification
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-500/20 text-pink-400">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            Variable Data Printing (VDP)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-500/20 text-yellow-400">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
                            Sustainable Forestry Initiative Certified
                        </li>
</ul>
</div>
<div className="relative">

<div className="aspect-square max-w-md mx-auto relative group">

<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-pink-500/30 to-yellow-500/30 rounded-2xl blur-2xl transform rotate-3 scale-105 opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
<div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">

<div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30"></div>
<div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/30"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/30"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30"></div>

<div className="w-full h-full flex flex-col justify-center items-center gap-1 opacity-20">
<div className="w-3/4 h-2 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
<div className="w-3/4 h-2 bg-pink-500 shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>
<div className="w-3/4 h-2 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
<div className="w-3/4 h-2 bg-white/20"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-6xl font-bold tracking-tighter text-white drop-shadow-2xl">cds</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-16 pb-12 border-t border-white/10 relative z-10 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-1 mb-4">
<span className="text-lg font-semibold tracking-tighter text-white">cds<span className="font-light text-slate-400">PRINT</span></span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Elevating commercial printing through technology, precision, and dedicated service across industries.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Equipment</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">File Requirements</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 cdsPRINT Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
<span className="text-xs text-slate-400 font-medium">Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
