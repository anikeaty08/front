import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });

            const progressBar = document.getElementById('scroll-progress');
            window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height);
                if(progressBar) progressBar.style.transform = `scaleX(${scrolled})`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="KTqMxoqKvnDFSDZ3vtrg"></div></div>

<div className="fixed pointer-events-none z-[100] opacity-[0.02] mix-blend-screen top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-0 left-0 h-0.5 bg-white z-[110] origin-left transition-transform duration-150 ease-out" id="scroll-progress" style={{transform: 'scaleX(0)'}}></div>

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-6 reveal in-view">
</div>
<main className="">

<section className="overflow-hidden z-20 bg-gradient-to-b from-[#3bf79f]/10 to-white/0 w-full border-white/5 border-t pt-32 pb-32 relative"><div className="absolute inset-0" data-container-bg="true"><div data-us-project="KTqMxoqKvnDFSDZ3vtrg"></div></div>
<div className="z-10 text-center max-w-[1000px] mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal flex items-center justify-center gap-4 mb-8 in-view">
</div><h2 className="reveal delay-100 leading-[1.1] md:text-8xl text-3xl font-medium text-white tracking-tight in-view">Architects of Growth</h2><h2 className="reveal delay-100 leading-[1.1] md:text-7xl in-view text-3xl font-medium text-white tracking-tight mt-7 mb-7">Not Just consultants</h2><h2 className="reveal delay-100 leading-[1.1] md:text-2xl in-view text-3xl font-light text-[#888888] mt-7 mb-4">Operating at the highest levels of global business</h2>
</div>
<button className="sm:w-auto hover:bg-[#e0e0e0] transition-all duration-300 flex text-sm font-medium text-black bg-white w-full rounded-full mr-auto ml-auto pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center" style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}>
                        Start the Transformation
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button></section>

<section className="overflow-hidden z-20 bg-[#050505] w-full border-white/5 border-t pt-32 pb-32 relative">
<div className="text-center max-w-[1000px] z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal flex items-center justify-center gap-4 mb-8 in-view">
<span className="uppercase text-xs text-[#666] tracking-widest">The Mission</span>
</div>
<h2 className="reveal delay-100 md:text-5xl leading-[1.1] text-3xl font-medium text-white tracking-tight in-view">Bridging the gap between <br/><span className="bg-gradient-to-t from-[#00fa4b]/90 to-[#fdfffa] xl:bg-clip-text xl:text-transparent">early traction and enterprise scale.</span></h2>
<p className="reveal delay-200 md:text-xl leading-relaxed text-lg text-[#888] max-w-3xl mt-8 mr-auto ml-auto in-view">Over the years, our work has been defined by guiding organizations through the high-friction transition from emerging market players to dominant eight and nine-figure enterprises. We eliminate the three primary bottlenecks that prevent businesses from achieving true institutional scale:</p>
</div>
</section>


<section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#050505] border-y border-white/5 z-30 group cursor-pointer">
<div className="absolute inset-0 z-0 scale-105 transform-gpu bg-fixed transition-transform duration-1000 group-hover:scale-100 opacity-20 grayscale" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}></div>
<div className="bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 pt-32 pb-32 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-20 text-center px-6 reveal flex flex-col items-center">
<div className="flex group-hover:bg-white group-hover:text-black group-hover:scale-105 transition-all duration-500 text-white bg-white/5 w-16 h-16 border-white/10 border rounded-full mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon className="text-2xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight text-white font-medium leading-tight">
                    Aligning around outcomes, <br/><span className="text-[#888]">not just activity.</span>
</h2>
<div className="mt-6 text-xs text-[#666] flex items-center gap-2">
<iconify-icon icon="solar:chart-line-up-linear"></iconify-icon> Watch the framework deep-dive (12 min)
                </div>
</div>
</section>

<section className="lg:px-12 z-40 bg-[radial-gradient(circle_at_left,var(--tw-gradient-stops))] from-[#d6ffec]/80 via-[#ffffff] to-[#f5f5f5] pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 relative">

<div className="lg:w-1/3">
<div className="sticky top-32 reveal">
<h2 className="md:text-5xl leading-[1.1] text-4xl font-medium text-blue-950 tracking-tight font-poppins mb-6">The Metriks Framework</h2>
<p className="leading-relaxed text-base text-neutral-950 mb-8">A clinical approach to unraveling operational debt, securing growth capital, and engineering lucrative exits</p>
</div>
</div>

<div className="lg:w-2/3 flex flex-col gap-4 gap-x-4 gap-y-4">

<div className="reveal reveal-up bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 hover:border-white/15 transition-all duration-500">
<div className="flex border-white/5 border-b mb-6 pb-6 items-end justify-between">
<div className="">
<div className="text-[#666] text-xs font-mono mb-2">PHASE 01</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Infrastructure &amp; Transformation</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="border-white/[0.02] bg-[#111] border rounded-xl pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="text-xs text-[#888] mb-2">Objective</div>
<div className="leading-relaxed text-sm text-white">Identify and eliminate operational debt. We rebuild the backend architecture to support high-volume, modern enterprise demands.</div>
</div>
<div className="bg-[#111] p-5 rounded-xl border border-white/[0.02]">
<div className="text-xs text-[#888] mb-2">Output</div>
<div className="leading-relaxed text-sm text-white">Custom automated workflows, integrated tech stacks, and a systematized, repeatable revenue engine.</div>
</div>
</div>
</div>

<div className="reveal reveal-up transform -ml-2 lg:-ml-4 z-10 bg-[#111] border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-[1.01]">
<div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
<div className="flex justify-between items-end mb-6 border-b border-white/10 pb-6">
<div className="">
<div className="text-[#888] text-xs font-mono mb-2">PHASE 02</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Funding &amp; Capital Partnerships</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white/5 p-5 rounded-xl border border-white/5">
<div className="text-xs text-[#888] mb-2">Focus</div>
<div className="leading-relaxed text-sm text-white">Bridge the liquidity gap. We align your newly optimized infrastructure with the right funding partners to fuel aggressive market expansion.</div>
</div>
<div className="bg-white/5 border-white/5 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="text-xs text-[#888] mb-2">Metrics</div>
<div className="leading-relaxed text-sm text-white">Investor-ready reporting, capital introduction, and strategic partnership scaling.</div>
</div>
</div>
</div><div className="reveal reveal-up transform -ml-2 lg:-ml-4 z-10 bg-[#111] border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-[1.01]">
<div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
<div className="flex justify-between items-end mb-6 border-b border-white/10 pb-6">
<div className="">
<div className="text-xs text-[#888] font-mono mb-2">PHASE 03</div>
<h3 className="text-2xl font-medium text-white tracking-tight">M&amp;A Advisory &amp; Exit Strategy</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white/5 p-5 rounded-xl border border-white/5">
<div className="text-xs text-[#888] mb-2">Focus</div>
<div className="leading-relaxed text-sm text-white">Transition from operator to owner. We optimize every facet of the business for maximum valuation and buyer appeal.</div>
</div>
<div className="bg-white/5 border-white/5 border rounded-xl pt-5 pr-5 pb-5 pl-5">
<div className="text-xs text-[#888] mb-2">Metrics</div>
<div className="leading-relaxed text-sm text-white">Due-diligence readiness, EBITDA optimization, and a definitive roadmap to a premier exit.</div>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="bg-[#050505] py-32 px-6 relative overflow-hidden z-30 border-y border-white/5">
<div className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] z-0 opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center max-w-[800px] mr-auto ml-auto relative">
<iconify-icon className="text-4xl text-[#333] mb-8 mx-auto block" icon="solar:quote-right-linear"></iconify-icon>
<h2 className="reveal md:text-4xl lg:text-5xl leading-[1.2] text-3xl font-medium text-white tracking-tight mb-10">"Growth is a byproduct of alignment. <span className="text-[#666]">Activity does not equal outcomes until the system is unified.</span>"</h2><h2 className="reveal md:text-4xl lg:text-5xl leading-[1.2] text-3xl font-medium text-white tracking-tight mb-10"></h2>
<div className="reveal delay-200 inline-flex items-center gap-4">
<span className="w-1 h-1 rounded-full bg-[#444]"></span>
</div>
</div>
</section>

<section className="bg-[#000000] relative z-20">
<div className="lg:py-32 flex flex-col lg:flex-row max-w-[1200px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center">

<div className="lg:w-1/2 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-[#111] text-xs text-[#888] mb-6">
                        Advisory &amp; Consulting
                    </div>
<h2 className="md:text-5xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">Was thinking we could put stats here, e.g 

Key Metrics of the Protocol

- 66.4% Average MRR increase in first 12 months.

4.7x Average ROI in first 12 months.

47% Average Pipeline growth through systematic outreach.</h2>
<div className="flex flex-col gap-4 text-sm text-[#888]">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666]" icon="solar:buildings-linear"></iconify-icon>
<span>San Francisco, CA &amp; Remote</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666]" icon="solar:letter-linear"></iconify-icon>
<span className="">partnerships@apex-gtm.com</span>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full reveal delay-200">
</div>
</div><div className="lg:py-32 flex flex-col lg:flex-row max-w-[1200px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-center">

<div className="lg:w-1/2 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-[#111] text-xs text-[#888] mb-6">
                        Advisory &amp; Consulting
                    </div>
<h2 className="text-4xl md:text-5xl text-white tracking-tight font-medium mb-6 leading-[1.1]">
                        Request a <br/><span className="text-[#666]">Growth Audit</span>
</h2>
<p className="leading-relaxed text-lg text-[#888] max-w-md mb-10">We limit engagements to companies that have proven product-market fit and are ready to restructure for scale. Tell us where you're at.</p>
<div className="flex flex-col gap-4 text-sm text-[#888]">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666]" icon="solar:buildings-linear"></iconify-icon>
<span>San Francisco, CA &amp; Remote</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-[#666]" icon="solar:letter-linear"></iconify-icon>
<span className="">partnerships@apex-gtm.com</span>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full reveal delay-200">
<div className="bg-[#0a0a0a] rounded-2xl p-8 lg:p-10 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.02)]">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
<span className="text-white text-sm font-medium">Audit Application</span>
<iconify-icon className="text-[#666] text-xl" icon="solar:clipboard-text-linear"></iconify-icon>
</div>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="">
<label className="text-[#888] text-xs block mb-2">Name</label>
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-white/30 focus:bg-white/[0.02] transition-colors placeholder:text-[#444]" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="text-[#888] text-xs block mb-2">Work Email</label>
<input className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-white/30 focus:bg-white/[0.02] transition-colors placeholder:text-[#444]" placeholder="jane@company.com" type="email"/>
</div>
</div>

<div className="">
<label className="text-[#888] text-xs block mb-2">Current ARR Stage</label>
<div className="relative">
<select className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-white/30 appearance-none cursor-pointer">
<option>$1M - $5M (Early Scale)</option>
<option>$5M - $20M (Growth Phase)</option>
<option>$20M+ (Enterprise Prep)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="">
<label className="text-[#888] text-xs block mb-2">Primary Bottleneck</label>
<textarea className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-white/30 focus:bg-white/[0.02] transition-colors placeholder:text-[#444] resize-none" placeholder="E.g., Sales cycles are lengthening, churn is rising, or marketing pipeline is low quality..." rows="3"></textarea>
</div>

<div className="flex items-start gap-3 pt-2 pb-4">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5">
<input className="peer appearance-none w-4 h-4 border border-white/20 rounded-sm bg-[#111] checked:bg-white checked:border-white cursor-pointer transition-all" type="checkbox"/>
<iconify-icon className="absolute text-black text-xs opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-[#666] leading-tight">I agree to share this information for assessment purposes under a mutual NDA framework.</span>
</div>
<button className="w-full bg-white text-black rounded-lg py-3.5 text-sm font-medium hover:bg-[#e0e0e0] transition-colors flex justify-center items-center gap-2" type="button">
                                Submit for Review
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="relative bg-[#050505] py-24 overflow-hidden text-center border-t border-white/5 z-30">
<div className="absolute inset-0 z-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-20"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 reveal">
<p className="text-xs text-[#888] mb-4">
                    Open Source Operations
                </p>
<h2 className="text-3xl md:text-5xl leading-[1.1] mb-6 tracking-tight text-white font-medium">
                    Read the <span className="text-[#666]">Value Creation Playbook.</span>
</h2>
<p className="text-base md:text-lg text-[#888] leading-relaxed mb-10 max-w-xl mx-auto">
                    A comprehensive teardown of the metrics, processes, and org structures needed to cross the chasm into hyper-scale.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#111] border border-white/10 text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:document-add-linear"></iconify-icon> Download PDF
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-[#000000] text-[#888] pt-16 pb-8 border-t border-white/5 relative z-40">
<div className="max-w-[1200px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<h3 className="text-xl tracking-tight text-white mb-4 font-medium flex items-center">
<iconify-icon className="mr-2" icon="solar:chart-square-linear"></iconify-icon>
                        APEX
                    </h3>
<p className="text-xs text-[#666] mb-6 leading-relaxed">
                        Operating partners for revenue growth. Clarifying strategy, tightening ICP, building real GTM motion.
                    </p>
<div className="flex gap-4">
<a className="text-[#666] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="text-[#666] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="text-xs font-medium text-white mb-4">Firm</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">Approach</a></li>
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">Framework</a></li>
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">The Playbook</a></li>
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">Articles</a></li>
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">Templates</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-[#666] hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#444]">
                    © 2024 Apex GTM Partners. All rights reserved.
                </p>
<div className="flex items-center gap-2 text-xs text-[#444]">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Systems Operational
                </div>
</div>
</div>
</footer>


    </>
  );
}
