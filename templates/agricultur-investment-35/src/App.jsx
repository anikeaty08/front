import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                        for(let i=0; i<28; i++) {
                            const isGreen = [10, 11, 12, 17, 18].includes(i);
                            document.write(`<div class="aspect-square rounded border ${isGreen ? 'bg-[#6E8F5B] border-[#6E8F5B]' : 'bg-transparent border-[#3A2F2A]/10 hover:border-[#6E8F5B]/50'} transition-colors cursor-pointer"></div>`);
                        }
                    


        document.addEventListener("DOMContentLoaded", (event) => {
            // --- Navbar Scroll Logic ---
            const navbar = document.getElementById('navbar');
            const navBrand = document.getElementById('nav-brand');
            const navLinks = document.getElementById('nav-links');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.replace('bg-[#F3EFE6]/0', 'bg-[#F3EFE6]/80');
                    navbar.classList.add('backdrop-blur-xl', 'border', 'border-[#3A2F2A]/10');
                    navBrand.classList.replace('text-white', 'text-[#3A2F2A]');
                    navLinks.classList.replace('text-white/80', 'text-[#3A2F2A]/70');
                } else {
                    navbar.classList.replace('bg-[#F3EFE6]/80', 'bg-[#F3EFE6]/0');
                    navbar.classList.remove('backdrop-blur-xl', 'border', 'border-[#3A2F2A]/10');
                    navBrand.classList.replace('text-[#3A2F2A]', 'text-white');
                    navLinks.classList.replace('text-[#3A2F2A]/70', 'text-white/80');
                }
            });

            // --- Card 1: Process Shuffler Logic ---
            const shufflerText = document.getElementById('shuffler-text');
            const phases = ["Acquire land.", "Operate system.", "Harvest value."];
            let phaseIndex = 0;
            
            setInterval(() => {
                shufflerText.style.opacity = 0;
                shufflerText.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    phaseIndex = (phaseIndex + 1) % phases.length;
                    shufflerText.innerText = phases[phaseIndex];
                    shufflerText.style.transform = 'translateY(10px)';
                    
                    setTimeout(() => {
                        shufflerText.style.opacity = 1;
                        shufflerText.style.transform = 'translateY(0)';
                    }, 50);
                }, 400);
            }, 3000);

            // --- Card 2: Live Feed Logic ---
            const liveFeed = document.getElementById('live-feed');
            const logMessages = [
                "> Field 4A analysis complete.",
                "> Moisture levels nominal.",
                "> Yield projection updated.",
                "> Output logged to ledger.",
                "> Irrigation cycle finished.",
                "> Equipment telemetry stable.",
                "> Soil NPK assay verified."
            ];
            
            function appendLog() {
                const p = document.createElement('p');
                p.innerText = logMessages[Math.floor(Math.random() * logMessages.length)];
                p.style.opacity = '0';
                p.style.transform = 'translateY(10px)';
                p.style.transition = 'all 0.3s ease-out';
                
                liveFeed.appendChild(p);
                
                // Trigger reflow
                void p.offsetWidth;
                
                p.style.opacity = '1';
                p.style.transform = 'translateY(0)';

                if (liveFeed.children.length > 5) {
                    liveFeed.removeChild(liveFeed.firstChild);
                }
            }
            
            // Initial logs
            appendLog();
            setTimeout(appendLog, 1000);
            setTimeout(appendLog, 2500);
            
            // Ongoing
            setInterval(appendLog, 3500);

            // --- GSAP Animations ---
            gsap.registerPlugin(ScrollTrigger);

            // Hero Entrance
            const tl = gsap.timeline();
            tl.from("#hero-img", { scale: 1.1, duration: 2, ease: "power3.out" })
              .from(".hero-el", { 
                  y: 40, 
                  opacity: 0, 
                  duration: 1, 
                  stagger: 0.15, 
                  ease: "power3.out" 
              }, "-=1.5");

            // Philosophy Reveal
            // Simple split text simulation for pure HTML setup
            const philosophyContainer = document.getElementById('philosophy-trigger');
            const lines = philosophyContainer.querySelectorAll('p');
            
            lines.forEach(line => {
                // Wrap content in a span for masking
                const content = line.innerHTML;
                line.innerHTML = `<span class="line-reveal"><span>${content}</span></span>`;
            });

            gsap.to(".line-reveal span", {
                scrollTrigger: {
                    trigger: "#philosophy-trigger",
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out"
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="texture-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full px-6 py-4 flex items-center justify-between transition-all duration-500 bg-[#F3EFE6]/0" id="navbar">
<div className="font-medium text-lg tracking-tight uppercase text-white transition-colors duration-300" id="nav-brand">
            TerraYield
        </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight text-white/80 transition-colors duration-300" id="nav-links">
<a className="hover:text-white transition-colors" href="#features">Operations</a>
<a className="hover:text-white transition-colors" href="#protocol">Protocol</a>
<a className="hover:text-white transition-colors" href="#engagement">Allocation</a>
</div>
<button className="btn-magnetic bg-[#B86A3C] text-[#F3EFE6] px-6 py-2.5 rounded-full text-sm font-medium tracking-tight shadow-sm hover-lift">
            Request allocation
        </button>
</nav>

<header className="relative h-[100dvh] w-full flex items-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden bg-[#3A2F2A]">

<div className="absolute inset-0 z-0">
<img alt="Aerial farmland" className="w-full h-full object-cover opacity-70 scale-105" id="hero-img" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#3A2F2A] via-[#3A2F2A]/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
<div className="max-w-3xl" id="hero-content">
<p className="hero-el text-[#F3EFE6] font-medium text-2xl md:text-4xl tracking-tight mb-2">
                    Predictable yield from
                </p>
<h1 className="hero-el font-serif italic font-semibold text-6xl md:text-[7rem] leading-none text-[#F3EFE6] tracking-tight mb-10">
                    productive land.
                </h1>
<div className="hero-el">
<button className="btn-magnetic inline-flex items-center gap-3 bg-[#B86A3C] text-[#F3EFE6] px-8 py-4 rounded-full text-base font-medium tracking-tight shadow-lg hover-lift">
                        Get yield projection
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="hero-el hidden md:flex flex-col items-end text-[#F3EFE6]/60 font-mono text-xs text-right">
<span className="block mb-2">System Status: Active</span>
<span className="block mb-1">LAT: 41.8781° N</span>
<span className="block">LONG: 87.6298° W</span>
</div>
</div>
</header>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto relative z-20" id="features">
<div className="mb-16">
<span className="font-mono text-xs uppercase tracking-widest text-[#2F5D3A] font-medium block mb-4">Operational Proof</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#3A2F2A]">Why This Produces Cash</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F3EFE6] rounded-[2rem] border border-[#3A2F2A]/10 p-8 shadow-sm hover-lift flex flex-col h-[28rem]">
<div className="flex items-center justify-between mb-auto">
<iconify-icon className="text-2xl text-[#6E8F5B]" icon="solar:layers-linear"></iconify-icon>
<span className="font-mono text-xs text-[#3A2F2A]/50">Cycle: Continuous</span>
</div>
<div className="relative h-32 w-full mt-12 flex items-center justify-center">
<div className="absolute text-3xl font-serif italic text-[#3A2F2A] tracking-tight transition-all duration-500" id="shuffler-text">
                        Acquire land
                    </div>
</div>
<div className="mt-auto">
<h3 className="text-xl font-medium tracking-tight text-[#3A2F2A] mb-2">Verified Soil Health</h3>
<p className="text-[#3A2F2A]/70 text-sm leading-relaxed">We systematically identify and acquire assets with proven biological capacity and historical output.</p>
</div>
</div>

<div className="bg-[#F3EFE6] rounded-[2rem] border border-[#3A2F2A]/10 p-8 shadow-sm hover-lift flex flex-col h-[28rem]">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#2F5D3A] animate-pulse"></div>
<span className="font-mono text-xs text-[#2F5D3A] font-medium">System Live</span>
</div>
</div>
<div className="bg-[#3A2F2A] rounded-[1.5rem] p-6 flex-grow flex flex-col justify-end overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#3A2F2A] to-transparent z-10"></div>
<div className="font-mono text-xs text-[#F3EFE6]/70 flex flex-col gap-3 relative z-0" id="live-feed">

</div>
</div>
<div className="mt-6">
<h3 className="text-xl font-medium tracking-tight text-[#3A2F2A] mb-2">Auditable Crop Cycles</h3>
<p className="text-[#3A2F2A]/70 text-sm leading-relaxed">Every operational phase is measured, logged, and transparently available to capital partners.</p>
</div>
</div>

<div className="bg-[#F3EFE6] rounded-[2rem] border border-[#3A2F2A]/10 p-8 shadow-sm hover-lift flex flex-col h-[28rem]">
<div className="flex items-center justify-between mb-8">
<iconify-icon className="text-2xl text-[#6E8F5B]" icon="solar:calendar-linear"></iconify-icon>
<span className="font-mono text-xs text-[#3A2F2A]/50">Active Allocation</span>
</div>
<div className="grid grid-cols-7 gap-1 mb-auto">

<div className="text-center font-mono text-xs text-[#3A2F2A]/40 mb-2">S</div>
<div className="text-center font-mono text-xs text-[#3A2F2A]/40 mb-2">M</div>
<div className="text-center font-mono text-xs text-[#3A2F2A]/40 mb-2">T</div>
<div className="text-center font-mono text-xs text-[#3A2F2A]/40 mb-2">W</div>
<div className="text-center font-mono text-xs text-[#3A2F2A]/40 mb-2">T</div>
<div className="text-center font-mono text-xs text-[#3A2F2A]/40 mb-2">F</div>
<div className="text-center font-mono text-xs text-[#3A2F2A]/40 mb-2">S</div>


</div>
<div className="mt-8">
<h3 className="text-xl font-medium tracking-tight text-[#3A2F2A] mb-2">Predictable Cash Flow</h3>
<p className="text-[#3A2F2A]/70 text-sm leading-relaxed">Distributions map directly to harvest schedules and fixed-rate operational contracts.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#3A2F2A] py-32 md:py-48 px-6 md:px-12 rounded-[3rem] mx-4 md:mx-8 relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center" id="philosophy-trigger">
<p className="text-[#F3EFE6]/80 text-xl md:text-3xl font-medium tracking-tight mb-8 leading-snug">
                Most agricultural investments fail because they chase yield.
            </p>
<p className="font-serif italic font-semibold text-4xl md:text-6xl text-[#F3EFE6] tracking-tight leading-tight">
                We focus on operated land, <span className="text-[#2F5D3A]">measured output</span>, and repeatable systems.
            </p>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto" id="protocol">
<div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<span className="font-mono text-xs uppercase tracking-widest text-[#2F5D3A] font-medium block mb-4">The Protocol</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#3A2F2A] max-w-xl">How the Land Produces</h2>
</div>
<p className="text-[#3A2F2A]/70 text-sm max-w-xs font-medium">A rigid, three-phase framework applied to every acre under management.</p>
</div>
<div className="flex flex-col gap-6">

<div className="sticky top-24 bg-[#F3EFE6] border border-[#3A2F2A]/10 rounded-[2rem] p-8 md:p-12 shadow-md flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<span className="font-mono text-xs text-[#6E8F5B] mb-4 block">01 / Assessment</span>
<h3 className="text-3xl font-serif italic text-[#3A2F2A] tracking-tight mb-6">Soil, climate, feasibility.</h3>
<p className="text-[#3A2F2A]/70 text-base leading-relaxed max-w-md">We do not guess. Deep-core soil sampling, historical watershed analysis, and forward-looking climate modeling determine acquisition viability.</p>
</div>
<div className="w-full md:w-1/3 aspect-square bg-[#3A2F2A]/5 rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
<div className="w-32 h-32 border border-[#3A2F2A]/20 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-24 h-24 border border-[#3A2F2A]/30 rounded-full border-t-[#6E8F5B]"></div>
</div>
</div>
</div>

<div className="sticky top-32 bg-[#F3EFE6] border border-[#3A2F2A]/10 rounded-[2rem] p-8 md:p-12 shadow-md flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<span className="font-mono text-xs text-[#6E8F5B] mb-4 block">02 / Operation</span>
<h3 className="text-3xl font-serif italic text-[#3A2F2A] tracking-tight mb-6">Controlled execution.</h3>
<p className="text-[#3A2F2A]/70 text-base leading-relaxed max-w-md">Precision agriculture protocols are deployed. Water usage, nutrient density, and crop health are monitored via telemetry and daily site logs.</p>
</div>
<div className="w-full md:w-1/3 aspect-square bg-[#3A2F2A]/5 rounded-[1.5rem] flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#3A2F2A]/20"></div>
<div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-[#2F5D3A]/20 to-transparent animate-[bounce_4s_infinite]"></div>
</div>
</div>

<div className="sticky top-40 bg-[#F3EFE6] border border-[#3A2F2A]/10 rounded-[2rem] p-8 md:p-12 shadow-md flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<span className="font-mono text-xs text-[#6E8F5B] mb-4 block">03 / Verification</span>
<h3 className="text-3xl font-serif italic text-[#3A2F2A] tracking-tight mb-6">Measured, auditable output.</h3>
<p className="text-[#3A2F2A]/70 text-base leading-relaxed max-w-md">Yield is weighed, graded, and monetized through established supply chains. Financial outcomes are audited and distributed predictably.</p>
</div>
<div className="w-full md:w-1/3 aspect-square bg-[#3A2F2A]/5 rounded-[1.5rem] flex items-center justify-center p-8">
<div className="w-full h-full border-b border-l border-[#3A2F2A]/20 relative flex items-end pb-2 pl-2 gap-2">
<div className="w-1/4 bg-[#3A2F2A]/20 h-1/3 rounded-t-sm"></div>
<div className="w-1/4 bg-[#3A2F2A]/40 h-1/2 rounded-t-sm"></div>
<div className="w-1/4 bg-[#6E8F5B] h-3/4 rounded-t-sm"></div>
<div className="w-1/4 bg-[#B86A3C] h-full rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto" id="engagement">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#3A2F2A] mb-4">Capital Allocation</h2>
<p className="text-[#3A2F2A]/70 text-base max-w-lg mx-auto">Select a participation tier based on capital deployment capabilities and desired operational involvement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="bg-transparent border border-[#3A2F2A]/20 rounded-[2rem] p-8 flex flex-col h-[32rem]">
<h3 className="font-medium text-xl tracking-tight text-[#3A2F2A] mb-2">Foundation</h3>
<p className="text-[#3A2F2A]/60 text-sm mb-8 h-10">Baseline access to aggregated yield pools.</p>
<ul className="flex flex-col gap-4 text-sm text-[#3A2F2A] mb-auto">
<li className="flex items-center gap-3"><iconify-icon className="text-[#6E8F5B]" icon="solar:check-circle-linear"></iconify-icon> Quarterly reports</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#6E8F5B]" icon="solar:check-circle-linear"></iconify-icon> Standard yield distribution</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#6E8F5B]" icon="solar:check-circle-linear"></iconify-icon> Commingled land assets</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#3A2F2A]/20 text-[#3A2F2A] font-medium text-sm tracking-tight hover:bg-[#3A2F2A]/5 transition-colors">Start participation</button>
</div>

<div className="bg-[#F3EFE6] border-2 border-[#2F5D3A] rounded-[2rem] p-10 flex flex-col h-[36rem] shadow-xl relative z-10 md:-mx-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2F5D3A] text-[#F3EFE6] text-[10px] font-mono uppercase tracking-widest px-4 py-1 rounded-full">Primary Action</div>
<h3 className="font-medium text-2xl tracking-tight text-[#3A2F2A] mb-2">Yield</h3>
<p className="text-[#3A2F2A]/60 text-sm mb-8 h-10">Direct exposure to specific operated acreage.</p>
<ul className="flex flex-col gap-4 text-sm text-[#3A2F2A] mb-auto">
<li className="flex items-center gap-3"><iconify-icon className="text-[#2F5D3A] text-lg" icon="solar:check-circle-linear"></iconify-icon> Monthly operational logs</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#2F5D3A] text-lg" icon="solar:check-circle-linear"></iconify-icon> Priority yield distribution</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#2F5D3A] text-lg" icon="solar:check-circle-linear"></iconify-icon> Asset-specific targeting</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#2F5D3A] text-lg" icon="solar:check-circle-linear"></iconify-icon> Real-time telemetry access</li>
</ul>
<button className="btn-magnetic w-full py-4 rounded-full bg-[#B86A3C] text-[#F3EFE6] font-medium text-sm tracking-tight shadow-lg hover-lift">Request allocation</button>
</div>

<div className="bg-transparent border border-[#3A2F2A]/20 rounded-[2rem] p-8 flex flex-col h-[32rem]">
<h3 className="font-medium text-xl tracking-tight text-[#3A2F2A] mb-2">Institutional</h3>
<p className="text-[#3A2F2A]/60 text-sm mb-8 h-10">Bespoke land acquisition and operation.</p>
<ul className="flex flex-col gap-4 text-sm text-[#3A2F2A] mb-auto">
<li className="flex items-center gap-3"><iconify-icon className="text-[#6E8F5B]" icon="solar:check-circle-linear"></iconify-icon> Custom acquisition models</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#6E8F5B]" icon="solar:check-circle-linear"></iconify-icon> Board-level reporting</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#6E8F5B]" icon="solar:check-circle-linear"></iconify-icon> Sole-ownership structuring</li>
</ul>
<button className="w-full py-4 rounded-full border border-[#3A2F2A]/20 text-[#3A2F2A] font-medium text-sm tracking-tight hover:bg-[#3A2F2A]/5 transition-colors">Book land review</button>
</div>
</div>
</section>

<footer className="bg-[#3A2F2A] text-[#F3EFE6] rounded-t-[4rem] px-6 md:px-12 pt-24 pb-8 mt-12 mx-2">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<div className="max-w-xs">
<div className="font-medium text-2xl tracking-tight uppercase mb-6">TerraYield</div>
<p className="text-[#F3EFE6]/60 text-sm leading-relaxed">We operate productive land and monetize it through verified agricultural output.</p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<span className="font-mono text-xs text-[#6E8F5B] mb-2">Index</span>
<a className="text-sm text-[#F3EFE6]/80 hover:text-[#B86A3C] transition-colors" href="#">Process</a>
<a className="text-sm text-[#F3EFE6]/80 hover:text-[#B86A3C] transition-colors" href="#">Yield Data</a>
<a className="text-sm text-[#F3EFE6]/80 hover:text-[#B86A3C] transition-colors" href="#">Allocation</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-mono text-xs text-[#6E8F5B] mb-2">Legal</span>
<a className="text-sm text-[#F3EFE6]/80 hover:text-[#F3EFE6] transition-colors" href="#">Terms</a>
<a className="text-sm text-[#F3EFE6]/80 hover:text-[#F3EFE6] transition-colors" href="#">Privacy</a>
<a className="text-sm text-[#F3EFE6]/80 hover:text-[#F3EFE6] transition-colors" href="#">Audit Disclosures</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[#F3EFE6]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3 bg-[#1E1E1E]/50 px-4 py-2 rounded-full border border-[#F3EFE6]/5">
<div className="w-2 h-2 rounded-full bg-[#2F5D3A] animate-pulse shadow-[0_0_8px_#2F5D3A]"></div>
<span className="font-mono text-xs text-[#F3EFE6]/80">System Operational</span>
</div>
<p className="text-xs text-[#F3EFE6]/40 font-mono">© 2024 TerraYield Systems.</p>
</div>
</footer>



    </>
  );
}
