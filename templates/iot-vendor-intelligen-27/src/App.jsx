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



{
"@context": "https://schema.org",
"@type": "WebSite",
"name": "IOTY",
"url": "https://ioty.com",
"description": "IoT vendor intelligence and deployment navigator.",
"publisher": {
"@type": "Organization",
"name": "IOTY"
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())


        const canvas = document.getElementById('hero-gl');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const spacing = 50; // Grid spacing for network
        
        function resize() {
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
            initGrid();
        }

        function initGrid() {
            particles = [];
            const cols = Math.floor(width / spacing);
            const rows = Math.floor(height / spacing);
            
            for(let i = 0; i < cols; i++) {
                for(let j = 0; j < rows; j++) {
                    // Only add particles randomly to create a sparse, connected IoT mesh feel
                    if(Math.random() > 0.65) {
                        particles.push({
                            x: i * spacing + (spacing/2) + (Math.random() * 20 - 10),
                            y: j * spacing + (spacing/2) + (Math.random() * 20 - 10),
                            baseAlpha: Math.random() * 0.3 + 0.1,
                            alpha: 0,
                            targetAlpha: Math.random() * 0.3 + 0.1,
                            flashSpeed: Math.random() * 0.02 + 0.005,
                            size: Math.random() > 0.85 ? 2.5 : 1,
                            isNode: Math.random() > 0.9 // Highlight some prime nodes
                        });
                    }
                }
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw connecting lines based on proximity (simulating IoT mesh topology)
            ctx.lineWidth = 0.5;
            for(let i = 0; i < particles.length; i++) {
                let p1 = particles[i];
                
                // Update Alpha (Flicker logic)
                p1.alpha += (p1.targetAlpha - p1.alpha) * 0.1;
                if(Math.abs(p1.alpha - p1.targetAlpha) < 0.01) {
                    p1.targetAlpha = Math.random() > 0.9 ? 0.7 : p1.baseAlpha; // Occasional data burst flash
                }

                // Draw Particle
                ctx.fillStyle = p1.isNode ? `rgba(255, 51, 0, ${p1.alpha * 2})` : `rgba(10, 10, 10, ${p1.alpha})`;
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect to nearby nodes
                for(let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p1.x - p2.x;
                    let dy = p1.y - p2.y;
                    let dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if(dist < spacing * 1.8) {
                        ctx.strokeStyle = `rgba(10, 10, 10, ${Math.min(p1.alpha, p2.alpha) * 0.25})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', resize);
        resize();
        draw();
    
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
      

<div className="pointer-events-none fixed inset-0 z-[100] mix-blend-multiply opacity-[0.04] bg-noise"></div>
<div className="pointer-events-none fixed inset-y-0 left-0 w-px bg-[#0A0A0A]/5 z-[90] ml-6 lg:ml-12"></div>
<div className="pointer-events-none fixed inset-y-0 right-0 w-px bg-[#0A0A0A]/5 z-[90] mr-6 lg:ml-12"></div>

<div className="fixed top-0 w-full z-[60] bg-[#0A0A0A] border-b border-[#333] text-white flex items-center min-h-[2.5rem]">
<div className="max-w-[90rem] mx-auto w-full px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 py-2">
<span className="font-mono text-xs uppercase tracking-widest text-[#5A5A5C] text-center sm:text-left leading-relaxed">
<strong className="text-white font-medium">ioty.com</strong> and the platform being built on it are available for partnership or acquisition by qualified IoT, connectivity, automation, and industrial technology companies.
            </span>
<a className="font-mono text-xs uppercase tracking-widest text-white hover:text-[#FF3300] transition-colors whitespace-nowrap flex items-center gap-1" href="#inquire">
                Inquire <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<nav className="fixed top-10 sm:top-10 w-full z-50 border-b border-[#0A0A0A]/10 bg-[#F8F8F7]/80 backdrop-blur-xl transition-all">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 text-[#0A0A0A] group" href="#">
<span className="text-2xl font-display font-semibold tracking-tighter uppercase leading-none mt-1 group-hover:text-[#FF3300] transition-colors duration-300">IOTY</span>
</a>
<div className="hidden lg:flex space-x-8 text-xs text-[#5A5A5C] font-mono tracking-widest uppercase">
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#platform">Platform</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#categories">Categories</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#use-cases">Use Cases</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#compare">Compare</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#insights">Insights</a>
</div>
<a className="btn-angular relative group overflow-hidden bg-[#0A0A0A] text-white text-xs font-mono px-6 py-2.5 uppercase tracking-widest flex items-center gap-2 border border-[#0A0A0A]" href="#inquire">
<span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-300 flex items-center gap-2">
                    Inquire <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
<div className="hover-layer absolute inset-0 bg-white translate-y-[101%] z-0"></div>
</a>
</div>
</nav>

<header className="relative pt-40 pb-20 lg:pt-56 lg:pb-40 px-6 lg:px-12 max-w-[90rem] mx-auto w-full min-h-[90vh] flex items-center border-b border-[#0A0A0A]/10 mt-10">

<canvas className="absolute inset-0 w-full h-full z-0 opacity-40" id="hero-gl"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F8F7]/50 to-[#F8F8F7] z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10">
<div className="lg:col-span-8 relative">

<div className="inline-flex flex-wrap items-center gap-4 mb-8 font-mono text-xs text-[#5A5A5C] uppercase tracking-widest bg-white/50 backdrop-blur-sm px-3 py-1.5 border border-[#0A0A0A]/10">
<span className="text-[#FF3300] flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span>
                        IoT Vendor Intelligence
                    </span>
</div>
<h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter leading-[0.9] mb-8 uppercase text-[#0A0A0A]">
                    Compare IoT vendors, <br/>
<span className="text-transparent text-stroke-dark" style={{WebkitTextStroke: '1px #0A0A0A', color: 'transparent'}}>deployment paths,</span> <br/>
                    and stack options <br/>
                    in one place.
                </h1>
<p className="text-[#0A0A0A] font-medium text-sm sm:text-base lg:text-lg max-w-[55ch] leading-relaxed mb-10 border-l-2 border-[#FF3300] pl-6 py-1">
                    ioty.com is being developed as an operator-grade IoT intelligence platform and is available for partnership or acquisition by qualified platform companies, telecom providers, integrators, and industrial technology operators.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="btn-angular relative group overflow-hidden bg-[#FF3300] text-white px-8 py-5 flex items-center gap-4" href="#inquire">
<span className="relative z-10 font-mono text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                            Discuss Partnership or Acquisition
                        </span>
<iconify-icon className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-300" icon="solar:round-arrow-right-linear"></iconify-icon>
<div className="hover-layer absolute inset-0 bg-[#0A0A0A] translate-y-[101%] z-0"></div>
</a>
<a className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF3300] transition-colors py-4" href="#platform">
                        Explore the Platform
                        <iconify-icon className="text-lg group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
<p className="mt-6 font-mono text-xs text-[#5A5A5C] uppercase tracking-widest max-w-[50ch]">
                    Structured around vendors, categories, use cases, comparisons, and deployment stacks.
                </p>
</div>

<div className="lg:col-span-4 hidden lg:flex flex-col justify-end pb-8">
<div className="bg-white border border-[#0A0A0A]/10 p-6 card-angular shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#F8F8F7] -mr-8 -mt-8 rotate-45 border-b border-[#0A0A0A]/10 group-hover:bg-[#FF3300] transition-colors duration-500"></div>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4 flex justify-between border-b border-[#0A0A0A]/10 pb-2">
<span>Platform Taxonomy</span>
<span>[ INDEXING ]</span>
</div>
<ul className="space-y-3 font-mono text-xs text-[#0A0A0A]">
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">CATEGORIES</span> <span>MAPPED</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">USE CASES</span> <span>DEFINED</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">DEPLOYMENT STACKS</span> <span className="text-[#FF3300]">STRUCTURING</span></li>
</ul>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 lg:px-12 max-w-[90rem] mx-auto border-b border-[#0A0A0A]/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
<div>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-6 flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Asset Overview
                </div>
<h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tighter uppercase mb-8 leading-[0.9] text-[#0A0A0A]">
                    What this is.
                </h2>
<div className="space-y-6 text-[#5A5A5C] text-sm leading-relaxed max-w-[45ch]">
<p>
                        ioty.com is a focused IoT market intelligence property in active development. The asset combines a strong brandable domain with a structured platform for researching vendors, deployment models, integration tradeoffs, and use-case fit across the IoT stack.
                    </p>
<p>
                        The opportunity includes both the ioty.com domain and the platform being built on it. The preferred path is partnership with a qualified operator that can help shape and grow the property, while acquisition is also open for aligned buyers who see strategic fit.
                    </p>
</div>
</div>
<div className="bg-white border border-[#0A0A0A]/10 p-8 lg:p-12 relative h-full">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="relative z-10 flex flex-col justify-center h-full">
<ul className="space-y-8 font-mono text-xs text-[#0A0A0A] uppercase tracking-wide">
<li className="border-b border-[#0A0A0A]/5 pb-6">
<div className="flex items-center gap-4 mb-3 font-semibold text-sm">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Vendor intelligence
                            </div>
<p className="text-[#5A5A5C] normal-case tracking-normal pl-5">Structured profiles across connectivity, device management, edge platforms, industrial sensors, fleet monitoring, and deployment partners.</p>
</li>
<li className="border-b border-[#0A0A0A]/5 pb-6">
<div className="flex items-center gap-4 mb-3 font-semibold text-sm">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Deployment guidance
                            </div>
<p className="text-[#5A5A5C] normal-case tracking-normal pl-5">Clear paths by use case, environment, fleet size, connectivity type, and implementation complexity.</p>
</li>
<li>
<div className="flex items-center gap-4 mb-3 font-semibold text-sm">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Commercially relevant structure
                            </div>
<p className="text-[#5A5A5C] normal-case tracking-normal pl-5">Built to support vendor pages, comparison pages, use-case guides, stack pages, and practical buyer research.</p>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] text-white border-y border-[#1A1A1A] relative overflow-hidden" id="platform">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,51,0,0.05)_0%,_transparent_50%)] pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="text-center mb-16 relative z-10">
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4">Architecture</div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase text-white">Explore the platform.</h2>
</div>

<div className="relative max-w-6xl mx-auto rounded-none border border-[#333] bg-[#0A0A0A] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">

<div className="h-10 border-b border-[#333] flex items-center px-4 justify-between bg-[#111]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="font-mono text-xs text-[#5A5A5C] tracking-widest">IOTY_PLATFORM // PREVIEW</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 h-auto lg:h-[500px]">

<div className="lg:col-span-3 border-r border-[#333] p-6 bg-[#0A0A0A] font-mono flex flex-col">
<div className="uppercase tracking-widest text-white text-xs mb-2">Browse by category</div>
<p className="text-[#5A5A5C] text-xs lowercase tracking-normal mb-6 font-sans">A structured view of core IoT categories and the vendors shaping each layer.</p>
<ul className="space-y-1.5 text-xs text-[#5A5A5C]">
<li className="px-2 py-1.5 hover:text-white cursor-pointer hover:bg-[#111] border-l-2 border-transparent hover:border-[#FF3300] transition-all">Connectivity</li>
<li className="px-2 py-1.5 text-white bg-[#111] border-l-2 border-[#FF3300]">Device Management</li>
<li className="px-2 py-1.5 hover:text-white cursor-pointer hover:bg-[#111] border-l-2 border-transparent hover:border-[#FF3300] transition-all">Edge Platforms</li>
<li className="px-2 py-1.5 hover:text-white cursor-pointer hover:bg-[#111] border-l-2 border-transparent hover:border-[#FF3300] transition-all">Industrial Sensors</li>
<li className="px-2 py-1.5 hover:text-white cursor-pointer hover:bg-[#111] border-l-2 border-transparent hover:border-[#FF3300] transition-all">Fleet Monitoring</li>
<li className="px-2 py-1.5 hover:text-white cursor-pointer hover:bg-[#111] border-l-2 border-transparent hover:border-[#FF3300] transition-all">Asset Tracking</li>
<li className="px-2 py-1.5 hover:text-white cursor-pointer hover:bg-[#111] border-l-2 border-transparent hover:border-[#FF3300] transition-all">Smart Building</li>
<li className="px-2 py-1.5 hover:text-white cursor-pointer hover:bg-[#111] border-l-2 border-transparent hover:border-[#FF3300] transition-all">Healthcare IoT</li>
</ul>
</div>

<div className="lg:col-span-9 p-6 lg:p-8 bg-[linear-gradient(180deg,#111_0%,#0A0A0A_100%)] relative flex flex-col gap-8">
<div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none"></div>

<div className="relative z-10 border-b border-[#333] pb-6">
<div className="uppercase tracking-widest text-white font-mono text-xs mb-2">Navigate by use case</div>
<p className="text-[#5A5A5C] text-xs mb-4 font-sans">Start with the operating environment and work backward to the right stack and vendor shortlist.</p>
<div className="flex flex-wrap gap-2 font-mono text-xs">
<span className="border border-[#333] bg-[#0A0A0A] px-3 py-1.5 text-[#5A5A5C]">Industrial automation</span>
<span className="border border-[#FF3300] bg-[#FF3300]/10 px-3 py-1.5 text-white">Logistics and fleet</span>
<span className="border border-[#333] bg-[#0A0A0A] px-3 py-1.5 text-[#5A5A5C]">Smart buildings</span>
<span className="border border-[#333] bg-[#0A0A0A] px-3 py-1.5 text-[#5A5A5C]">Healthcare environments</span>
<span className="border border-[#333] bg-[#0A0A0A] px-3 py-1.5 text-[#5A5A5C]">Remote asset monitoring</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 flex-grow">

<div className="border border-[#333] p-5 bg-[#0A0A0A] flex flex-col">
<div className="uppercase tracking-widest text-white font-mono text-xs mb-2 flex items-center gap-2">
<iconify-icon className="text-[#FF3300]" icon="solar:scale-linear"></iconify-icon> Compare vendors
                                </div>
<p className="text-[#5A5A5C] text-xs mb-6 font-sans">Head-to-head comparison pages built around deployment fit, integration factors, pricing posture when public, and ideal customer profile.</p>
<div className="mt-auto space-y-2 font-mono text-xs">
<div className="flex items-center justify-between border border-[#333] p-2 bg-[#111]">
<span className="text-[#5A5A5C]">Vendor A</span>
<span className="text-[#FF3300] text-xs px-2">VS</span>
<span className="text-white">Vendor B</span>
</div>
<div className="flex items-center justify-between border border-[#333] p-2 bg-[#111]">
<span className="text-white">LPWAN</span>
<span className="text-[#FF3300] text-xs px-2">VS</span>
<span className="text-[#5A5A5C]">Cellular</span>
</div>
<div className="flex items-center justify-between border border-[#333] p-2 bg-[#111]">
<span className="text-[#5A5A5C]">Edge-managed</span>
<span className="text-[#FF3300] text-xs px-2">VS</span>
<span className="text-white">Cloud-managed</span>
</div>
</div>
</div>

<div className="border border-[#333] p-5 bg-[#0A0A0A] flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF3300]/5 to-transparent pointer-events-none"></div>
<div className="uppercase tracking-widest text-white font-mono text-xs mb-2 flex items-center gap-2 relative z-10">
<iconify-icon className="text-[#FF3300]" icon="solar:cpu-bolt-linear"></iconify-icon> IoT Stack Selector
                                </div>
<p className="text-[#5A5A5C] text-xs mb-6 font-sans relative z-10">A lightweight selector that helps teams narrow an IoT setup by use case, fleet size, connectivity type, environment, and compliance needs.</p>
<div className="mt-auto grid grid-cols-2 gap-2 font-mono text-xs relative z-10 mb-4">
<div className="border border-[#333] bg-[#111] p-1.5 text-[#5A5A5C] flex justify-between items-center">Use case <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
<div className="border border-[#333] bg-[#111] p-1.5 text-[#5A5A5C] flex justify-between items-center">Fleet size <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
<div className="border border-[#333] bg-[#111] p-1.5 text-white border-b-[#FF3300] flex justify-between items-center">Cellular <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
<div className="border border-[#333] bg-[#111] p-1.5 text-[#5A5A5C] flex justify-between items-center">Environment <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
</div>
<button className="w-full font-mono text-xs bg-white text-[#0A0A0A] px-4 py-2 uppercase tracking-widest hover:bg-[#FF3300] hover:text-white transition-colors relative z-10">
                                    Try the Stack Selector
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#0A0A0A]/10 pb-8">
<div className="max-w-3xl">
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Audience Qualification
                </div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9]">
                    Who should inquire.
                </h2>
<p className="text-[#5A5A5C] text-sm md:text-base leading-relaxed max-w-[60ch]">
                    ioty.com is best suited to companies that already operate in IoT, industrial technology, connected infrastructure, or B2B market intelligence and want a credible platform to shape, operate, or own.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-white p-8 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-8 h-10 w-10 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold tracking-tight mb-3 uppercase text-[#0A0A0A]">IoT platform companies</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-6">
                    Expand category visibility, capture higher-intent research traffic, and own a stronger buyer education layer.
                </p>

<div className="absolute inset-x-0 h-px bg-[#FF3300]/20 -top-px group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>

<div className="bg-white p-8 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-8 h-10 w-10 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:routing-3-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold tracking-tight mb-3 uppercase text-[#0A0A0A]">Telecom &amp; connectivity providers</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-6">
                    Create a clearer path from connectivity infrastructure to solution discovery and deployment planning.
                </p>
</div>

<div className="bg-white p-8 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-8 h-10 w-10 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold tracking-tight mb-3 uppercase text-[#0A0A0A]">Industrial automation &amp; SI</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-6">
                    Use the platform to frame vendor ecosystems, deployment models, and shortlist decisions for complex environments.
                </p>
</div>

<div className="bg-white p-8 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-8 h-10 w-10 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold tracking-tight mb-3 uppercase text-[#0A0A0A]">Edge computing &amp; device mgmt</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-6">
                    Build authority around stack selection, implementation paths, and adjacent vendor categories.
                </p>
</div>

<div className="bg-white p-8 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-8 h-10 w-10 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="font-display text-xl font-semibold tracking-tight mb-3 uppercase text-[#0A0A0A]">B2B media &amp; intelligence operators</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-6">
                    Add a structured IoT property with useful page systems, category depth, and commercial upside.
                </p>
</div>
</div>
<div className="bg-[#F8F8F7] border border-[#0A0A0A]/10 p-6 text-center font-mono text-xs text-[#0A0A0A] uppercase tracking-widest max-w-3xl mx-auto">
            If you see strategic fit in operating, partnering on, or acquiring this property, this is the right time to start the conversation.
        </div>
<style>@keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }</style>
</section>

<section className="py-24 bg-white border-y border-[#0A0A0A]/10 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 relative z-10 sticky top-32">
<div className="font-mono text-xs text-[#5A5A5C] mb-6 uppercase tracking-widest flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Strategic Logic
                    </div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9] text-[#0A0A0A]">
                        Why this matters now.
                    </h2>
<p className="text-[#5A5A5C] text-sm leading-relaxed max-w-[45ch]">
                        IoT remains fragmented across vendors, deployment models, and industry-specific requirements. A well-structured property that helps buyers compare options and make faster shortlist decisions becomes more strategically valuable as its taxonomy, pages, and tools mature.
                    </p>
</div>
<div className="lg:col-span-7 relative z-10 flex flex-col gap-6">

<div className="border border-[#0A0A0A]/10 bg-[#F8F8F7] p-8 card-angular hover:bg-white transition-colors group">
<div className="font-mono text-xs text-[#0A0A0A] mb-4 flex items-center gap-4 border-b border-[#0A0A0A]/10 pb-4">
<span className="text-[#FF3300] font-bold">01</span> Early involvement shapes the category structure
                        </div>
<p className="text-[#5A5A5C] text-sm leading-relaxed">
                            A partner or acquirer can influence how vendors, stacks, and use cases are organized before the platform’s structure hardens.
                        </p>
</div>

<div className="border border-[#0A0A0A]/10 bg-[#F8F8F7] p-8 card-angular hover:bg-white transition-colors group">
<div className="font-mono text-xs text-[#0A0A0A] mb-4 flex items-center gap-4 border-b border-[#0A0A0A]/10 pb-4">
<span className="text-[#FF3300] font-bold">02</span> Utility compounds over time
                        </div>
<p className="text-[#5A5A5C] text-sm leading-relaxed">
                            As vendor pages, comparison pages, use-case guides, and selector outputs expand, the property becomes harder to replicate and more useful to control.
                        </p>
</div>

<div className="border border-[#0A0A0A]/10 bg-[#F8F8F7] p-8 card-angular hover:bg-white transition-colors group">
<div className="font-mono text-xs text-[#0A0A0A] mb-4 flex items-center gap-4 border-b border-[#0A0A0A]/10 pb-4">
<span className="text-[#FF3300] font-bold">03</span> Category position can be claimed early
                        </div>
<p className="text-[#5A5A5C] text-sm leading-relaxed">
                            The strongest independent properties in fragmented B2B markets tend to gain leverage as they become the reference layer buyers return to during evaluation.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-[#1A1A1A]" id="inquire">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,51,0,0.15)_0%,_transparent_60%)] pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-3 font-mono text-xs text-[#5A5A5C] mb-8 uppercase tracking-widest border border-[#333] px-4 py-2 bg-[#111]">
<span className="w-2 h-2 bg-[#FF3300] animate-pulse"></span>
                Inquiries Open
            </div>
<h2 className="font-display text-4xl lg:text-6xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9]">
                Discuss ioty.com
            </h2>
<p className="text-[#5A5A5C] text-sm md:text-base mb-4 leading-relaxed max-w-[55ch] mx-auto">
                The opportunity includes the ioty.com domain and the IoT intelligence platform being developed on it. Partnership is the preferred path for qualified operators who can help grow the asset, and acquisition conversations are open where strategic fit is strong.
            </p>
<p className="text-[#5A5A5C] text-sm md:text-base mb-12 leading-relaxed max-w-[55ch] mx-auto">
                If you operate in IoT, connectivity, industrial automation, edge infrastructure, or B2B technology media, we welcome direct inquiry.
            </p>
<form className="max-w-2xl mx-auto flex flex-col items-center bg-[#111] border border-[#333] p-6 sm:p-8 card-angular relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF3300] to-[#0A0A0A] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm -z-10"></div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-4">
<input className="bg-[#0A0A0A] border border-[#333] px-4 py-3 text-xs font-mono focus:outline-none focus:border-[#FF3300] w-full text-white placeholder:text-[#5A5A5C] uppercase transition-colors rounded-none" placeholder="NAME" required="" type="text"/>
<input className="bg-[#0A0A0A] border border-[#333] px-4 py-3 text-xs font-mono focus:outline-none focus:border-[#FF3300] w-full text-white placeholder:text-[#5A5A5C] uppercase transition-colors rounded-none" placeholder="WORK EMAIL" required="" type="email"/>
<input className="bg-[#0A0A0A] border border-[#333] px-4 py-3 text-xs font-mono focus:outline-none focus:border-[#FF3300] w-full text-white placeholder:text-[#5A5A5C] uppercase transition-colors rounded-none" placeholder="COMPANY" required="" type="text"/>
<div className="relative w-full">
<select className="bg-[#0A0A0A] border border-[#333] px-4 py-3 text-xs font-mono focus:outline-none focus:border-[#FF3300] w-full text-white uppercase transition-colors rounded-none appearance-none cursor-pointer" required="">
<option className="text-[#5A5A5C]" disabled="" selected="" value="">INTEREST TYPE</option>
<option value="partnership">Partnership</option>
<option value="acquisition">Acquisition</option>
<option value="operating_fit">Operating fit</option>
<option value="strategic">Strategic inquiry</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5A5A5C] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<textarea className="bg-[#0A0A0A] border border-[#333] px-4 py-3 text-xs font-mono focus:outline-none focus:border-[#FF3300] w-full text-white placeholder:text-[#5A5A5C] uppercase transition-colors rounded-none mb-6 resize-none" placeholder="SHORT MESSAGE" required="" rows="3"></textarea>
<button className="w-full bg-white text-[#0A0A0A] px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[#FF3300] hover:text-white transition-all duration-300 rounded-none flex items-center justify-center gap-2 btn-angular" type="submit">
                    Discuss Partnership or Acquisition
                    <iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-12 px-6 relative z-10">
<div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-4">
<div className="text-2xl font-display font-semibold tracking-tighter text-white uppercase leading-none mt-1">IOTY</div>
</div>
<div className="font-mono text-xs text-[#5A5A5C] flex flex-wrap justify-center gap-8 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#inquire">Partner / Acquire</a>
<a className="hover:text-white transition-colors" href="#insights">Insights</a>
<a className="hover:text-white transition-colors" href="#categories">Categories</a>
<a className="hover:text-white transition-colors" href="#compare">Compare</a>
<a className="hover:text-white transition-colors" href="#platform">Stack Selector</a>
</div>
<div className="font-mono text-xs text-[#5A5A5C] flex items-center gap-2 uppercase tracking-widest">
                ©  IOTY.COM
            </div>
</div>
</footer>



    </>
  );
}
