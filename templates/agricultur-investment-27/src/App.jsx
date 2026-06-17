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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Module 1: Hard Step Process Loop
        const steps = ['step-assess', 'step-operate', 'step-verify'];
        let currentStepIndex = 0;
        
        setInterval(() => {
            const currentEl = document.getElementById(steps[currentStepIndex]);
            currentEl.classList.remove('bg-[#2F5D3A]', 'text-[#F3EFE6]');
            currentEl.classList.add('bg-transparent', 'text-[#1E1E1E]');
            
            currentStepIndex = (currentStepIndex + 1) % steps.length;
            
            const nextEl = document.getElementById(steps[currentStepIndex]);
            nextEl.classList.remove('bg-transparent', 'text-[#1E1E1E]');
            nextEl.classList.add('bg-[#2F5D3A]', 'text-[#F3EFE6]');
        }, 3000);

        // Module 2: Terminal Feed
        const logEntries = [
            "> telemetry sync initiated",
            "> moisture sensors active",
            "> executing nutrient protocols",
            "> satellite imagery verified",
            "> recalculating yield: 6.8%",
            "> pushing block to registry",
            "> operation cycle complete"
        ];
        let logIndex = 0;
        const feedContainer = document.getElementById('terminal-feed');
        
        setInterval(() => {
            // Remove cursor from last child
            if (feedContainer.lastElementChild && feedContainer.lastElementChild.querySelector('.sys-blink')) {
                const cursor = feedContainer.lastElementChild.querySelector('.sys-blink');
                cursor.remove();
            }

            // Manage length
            if(feedContainer.children.length >= 6) {
                feedContainer.removeChild(feedContainer.firstElementChild);
            }

            // Append new line with cursor
            const newEntry = document.createElement('div');
            newEntry.innerHTML = `${logEntries[logIndex % logEntries.length]} <span class="inline-block w-2.5 h-4 align-middle bg-[#2F5D3A] sys-blink ml-1"></span>`;
            feedContainer.appendChild(newEntry);
            
            logIndex++;
        }, 2200);

        // Module 3: Allocation Grid
        const gridContainer = document.getElementById('grid-container');
        const totalCells = 28; // 7x4

        for(let i = 0; i < totalCells; i++) {
            const cell = document.createElement('div');
            // Randomly seed some active cells
            const isActive = Math.random() > 0.8;
            
            cell.className = `w-full h-full border border-[#1E1E1E] cursor-crosshair transition-none active:bg-[#B86A3C] ${isActive ? 'bg-[#3A2F2A]' : 'bg-[#F3EFE6] hover:bg-[#6E8F5B]'}`;
            
            cell.addEventListener('mouseenter', function(e) {
                if(!this.classList.contains('locked') && !this.classList.contains('bg-[#3A2F2A]')) {
                    this.classList.replace('bg-[#F3EFE6]', 'bg-[#6E8F5B]');
                }
            });
            
            cell.addEventListener('mouseleave', function(e) {
                if(!this.classList.contains('locked') && !this.classList.contains('bg-[#3A2F2A]')) {
                    this.classList.replace('bg-[#6E8F5B]', 'bg-[#F3EFE6]');
                }
            });

            cell.addEventListener('click', function() {
                if(this.classList.contains('bg-[#3A2F2A]')) return; // Unavailable
                
                this.classList.toggle('locked');
                if(this.classList.contains('locked')) {
                    this.className = 'w-full h-full border border-[#1E1E1E] cursor-crosshair transition-none locked bg-[#6E8F5B]';
                } else {
                    this.className = 'w-full h-full border border-[#1E1E1E] cursor-crosshair transition-none hover:bg-[#6E8F5B] bg-[#F3EFE6]';
                }
            });
            
            gridContainer.appendChild(cell);
        }
    
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
      

<nav className="fixed top-0 w-full bg-[#3A2F2A] text-[#F3EFE6] border-b-2 border-[#1E1E1E] z-50 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<span className="font-semibold tracking-tighter text-xl uppercase">TerraYield</span>
<div className="hidden md:flex items-center gap-2 border border-[#6E8F5B] px-2 py-1 text-xs text-[#6E8F5B]">
<span className="w-1.5 h-1.5 bg-[#6E8F5B] inline-block sys-blink"></span> SYS.ACTIVE
            </div>
</div>
<div className="hidden lg:flex gap-8 text-sm uppercase tracking-tight">
<a className="hover:text-[#6E8F5B] transition-none" href="#console">Console</a>
<a className="hover:text-[#6E8F5B] transition-none" href="#modules">Modules</a>
<a className="hover:text-[#6E8F5B] transition-none" href="#protocol">Protocol</a>
</div>
<button className="bg-[#B86A3C] text-[#1E1E1E] font-semibold uppercase text-sm px-6 py-2 border-2 border-[#1E1E1E] hover:-translate-y-px hover:-translate-x-px hover:shadow-[3px_3px_0px_0px_#1E1E1E] active:translate-y-px active:translate-x-px active:shadow-none transition-none">
            Request Allocation
        </button>
</nav>

<header className="relative pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center border-b-2 border-[#1E1E1E] bg-sys-grid" id="console">
<div className="z-10 max-w-4xl w-full">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter uppercase leading-[1.1] mb-8 text-[#1E1E1E] bg-[#F3EFE6] inline-block px-4 border border-[#1E1E1E]">
                Predictable Yield<br/>
                From Productive Land
            </h1>
<p className="text-base md:text-xl font-medium tracking-tight uppercase mb-12 bg-[#F3EFE6] inline-block px-4 py-2 border border-[#1E1E1E]">
                Operated <span className="text-[#B86A3C] px-2">■</span> Measured <span className="text-[#B86A3C] px-2">■</span> Verified
            </p>
<div>
<button className="bg-[#3A2F2A] text-[#F3EFE6] font-semibold text-lg uppercase px-8 py-4 border-2 border-[#1E1E1E] hover:-translate-y-px hover:-translate-x-px hover:shadow-[4px_4px_0px_0px_#1E1E1E] active:translate-y-px active:translate-x-px active:shadow-none transition-none inline-flex items-center gap-3">
                    Initialize Terminal <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-3 border-b-2 border-[#1E1E1E] bg-[#F3EFE6]" id="modules">

<div className="border-b-2 lg:border-b-0 lg:border-r-2 border-[#1E1E1E] p-8 flex flex-col justify-between min-h-[400px]">
<div className="flex items-center justify-between mb-8 border-b border-[#1E1E1E] pb-4">
<span className="text-xs uppercase font-semibold tracking-tight">Mod.01</span>
<span className="text-xs uppercase font-semibold tracking-tight">Process Loop</span>
</div>
<div className="space-y-4 flex-grow flex flex-col justify-center">
<div className="border-2 border-[#1E1E1E] p-4 text-center font-semibold uppercase tracking-tight bg-[#2F5D3A] text-[#F3EFE6] transition-none" id="step-assess">
                    [ Assess ]
                </div>
<div className="flex justify-center text-[#1E1E1E]"><iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon></div>
<div className="border-2 border-[#1E1E1E] p-4 text-center font-semibold uppercase tracking-tight bg-transparent text-[#1E1E1E] transition-none" id="step-operate">
                    [ Operate ]
                </div>
<div className="flex justify-center text-[#1E1E1E]"><iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon></div>
<div className="border-2 border-[#1E1E1E] p-4 text-center font-semibold uppercase tracking-tight bg-transparent text-[#1E1E1E] transition-none" id="step-verify">
                    [ Verify ]
                </div>
</div>
</div>

<div className="bg-[#1E1E1E] text-[#2F5D3A] border-b-2 lg:border-b-0 lg:border-r-2 border-[#1E1E1E] p-8 flex flex-col min-h-[400px]">
<div className="flex items-center justify-between mb-8 border-b border-[#3A2F2A] pb-4">
<span className="text-xs uppercase font-semibold tracking-tight text-[#F3EFE6]">Mod.02</span>
<span className="text-xs uppercase font-semibold tracking-tight flex items-center gap-2">
                    System Status: Live <span className="w-2 h-2 bg-[#2F5D3A] inline-block sys-blink"></span>
</span>
</div>
<div className="flex-grow flex flex-col justify-end text-sm uppercase tracking-tight space-y-2 font-mono" id="terminal-feed">
<div>&gt; initializing connection...</div>
<div>&gt; accessing land registry...</div>
<div>&gt; soil analysis complete</div>
<div>&gt; yield projected: 6.4%</div>
<div>&gt; output verified <span className="inline-block w-2.5 h-4 align-middle bg-[#2F5D3A] sys-blink ml-1"></span></div>
</div>
</div>

<div className="p-8 flex flex-col justify-between min-h-[400px]">
<div className="flex items-center justify-between mb-8 border-b border-[#1E1E1E] pb-4">
<span className="text-xs uppercase font-semibold tracking-tight">Mod.03</span>
<span className="text-xs uppercase font-semibold tracking-tight">Allocation Grid</span>
</div>
<div className="flex-grow flex flex-col justify-center mb-8">
<div className="grid grid-cols-7 gap-1 bg-[#1E1E1E] border-2 border-[#1E1E1E] p-1 w-full aspect-[7/4]" id="grid-container">

</div>
</div>
<button className="w-full bg-[#1E1E1E] text-[#F3EFE6] font-semibold uppercase text-sm px-4 py-3 border-2 border-[#1E1E1E] hover:bg-[#3A2F2A] active:bg-[#1E1E1E] transition-none">
                [ Confirm Allocation ]
            </button>
</div>
</section>

<section className="bg-[#3A2F2A] text-[#F3EFE6] py-32 px-6 flex flex-col items-center justify-center text-center border-b-2 border-[#1E1E1E]">
<h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter uppercase max-w-4xl leading-snug">
            Most agricultural investments fail <br className="hidden md:block"/>
            because they chase promises.
        </h2>
<div className="w-full max-w-md h-px bg-[#F3EFE6] opacity-30 my-16"></div>
<h3 className="text-xl md:text-3xl font-semibold tracking-tight uppercase leading-loose max-w-3xl">
            We <span className="text-[#1E1E1E] bg-[#6E8F5B] px-3 py-1 mx-1 border border-[#1E1E1E]">Operate</span> land. <br/>
<span className="text-[#1E1E1E] bg-[#6E8F5B] px-3 py-1 mx-1 border border-[#1E1E1E]">Measure</span> output. <br/>
            And <span className="text-[#1E1E1E] bg-[#6E8F5B] px-3 py-1 mx-1 border border-[#1E1E1E]">Repeat</span>.
        </h3>
</section>

<div className="flex flex-col bg-[#F3EFE6]" id="protocol">

<section className="min-h-[60vh] border-b-2 border-[#1E1E1E] p-8 md:p-16 flex flex-col justify-between hover:bg-[#EAE5D9] transition-none group">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1E1E1E] opacity-30 group-hover:opacity-100 transition-none">01</div>
<div>
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase mb-6 text-[#1E1E1E]">Assessment</h2>
<p className="text-lg md:text-2xl uppercase font-medium tracking-tight group-hover:text-[#2F5D3A] transition-none">
                    Soil <span className="px-3 text-[#B86A3C]">•</span> Climate <span className="px-3 text-[#B86A3C]">•</span> Feasibility
                </p>
</div>
</section>

<section className="min-h-[60vh] border-b-2 border-[#1E1E1E] p-8 md:p-16 flex flex-col justify-between hover:bg-[#EAE5D9] transition-none group">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1E1E1E] opacity-30 group-hover:opacity-100 transition-none">02</div>
<div>
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase mb-6 text-[#1E1E1E]">Operation</h2>
<p className="text-lg md:text-2xl uppercase font-medium tracking-tight group-hover:text-[#2F5D3A] transition-none">
                    Controlled Execution <span className="px-3 text-[#B86A3C]">•</span> Asset Management
                </p>
</div>
</section>

<section className="min-h-[60vh] border-b-2 border-[#1E1E1E] p-8 md:p-16 flex flex-col justify-between hover:bg-[#EAE5D9] transition-none group">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1E1E1E] opacity-30 group-hover:opacity-100 transition-none">03</div>
<div>
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase mb-6 text-[#1E1E1E]">Verification</h2>
<p className="text-lg md:text-2xl uppercase font-medium tracking-tight group-hover:text-[#2F5D3A] transition-none">
                    Measured Output <span className="px-3 text-[#B86A3C]">•</span> Immutable Ledger
                </p>
</div>
</section>
</div>

<section className="py-32 px-6 border-b-2 border-[#1E1E1E] bg-[#F3EFE6] bg-sys-grid">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-center gap-4 mb-20">
<iconify-icon className="text-[#1E1E1E]" icon="solar:server-square-linear" width="32"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tighter uppercase bg-[#F3EFE6] px-4 border border-[#1E1E1E]">Allocation Tiers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#1E1E1E] bg-[#1E1E1E]">

<div className="p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-[#1E1E1E] flex flex-col bg-[#F3EFE6]">
<h3 className="text-2xl font-semibold uppercase tracking-tight mb-2">Foundation</h3>
<p className="text-xs uppercase opacity-60 mb-8 border-b-2 border-[#1E1E1E] pb-4">Standard Operational Access</p>
<ul className="space-y-4 mb-12 flex-grow text-sm uppercase tracking-tight font-medium">
<li className="flex items-start gap-3"><iconify-icon className="text-[#1E1E1E] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Standard yield plots</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1E1E1E] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Quarterly reporting</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1E1E1E] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Base registry entry</li>
</ul>
<button className="w-full bg-[#3A2F2A] text-[#F3EFE6] py-4 font-semibold uppercase border-2 border-[#1E1E1E] hover:bg-[#1E1E1E] transition-none">Select</button>
</div>

<div className="p-8 md:p-10 border-b-2 md:border-b-0 md:border-r-2 border-[#1E1E1E] md:border-x-2 md:border-[#2F5D3A] flex flex-col bg-[#EAE5D9] relative z-10 md:-my-[2px] md:-mx-[2px]">
<div className="absolute top-0 right-0 bg-[#2F5D3A] text-[#F3EFE6] text-[10px] px-3 py-1.5 border-b-2 border-l-2 border-[#1E1E1E] uppercase font-bold tracking-tight">Active Protocol</div>
<h3 className="text-2xl font-semibold uppercase tracking-tight mb-2 text-[#2F5D3A]">Yield</h3>
<p className="text-xs uppercase opacity-60 mb-8 border-b-2 border-[#1E1E1E] pb-4">Optimized Core Execution</p>
<ul className="space-y-4 mb-12 flex-grow text-sm uppercase tracking-tight font-medium">
<li className="flex items-start gap-3"><iconify-icon className="text-[#2F5D3A] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Priority plot allocation</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#2F5D3A] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Monthly raw reporting</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#2F5D3A] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Advanced soil telemetry</li>
</ul>
<button className="w-full bg-[#B86A3C] text-[#1E1E1E] py-4 font-semibold uppercase border-2 border-[#1E1E1E] hover:-translate-y-px hover:-translate-x-px hover:shadow-[4px_4px_0px_0px_#1E1E1E] active:translate-y-px active:translate-x-px active:shadow-none transition-none">Request Access</button>
</div>

<div className="p-8 md:p-10 flex flex-col bg-[#F3EFE6]">
<h3 className="text-2xl font-semibold uppercase tracking-tight mb-2">Institutional</h3>
<p className="text-xs uppercase opacity-60 mb-8 border-b-2 border-[#1E1E1E] pb-4">Custom Scale Deployments</p>
<ul className="space-y-4 mb-12 flex-grow text-sm uppercase tracking-tight font-medium">
<li className="flex items-start gap-3"><iconify-icon className="text-[#1E1E1E] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Dedicated isolated zones</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1E1E1E] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Live API data access</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#1E1E1E] mt-0.5" icon="solar:check-square-linear" width="20"></iconify-icon> Bespoke asset covenants</li>
</ul>
<button className="w-full bg-[#3A2F2A] text-[#F3EFE6] py-4 font-semibold uppercase border-2 border-[#1E1E1E] hover:bg-[#1E1E1E] transition-none">Contact Desk</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#3A2F2A] text-[#F3EFE6] px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-tight border-t-2 border-[#1E1E1E]">
<div className="flex items-center gap-3 mb-4 md:mb-0">
<span>System Status: Operational</span>
<div className="w-2 h-2 bg-[#6E8F5B] inline-block sys-blink border border-[#1E1E1E]"></div>
</div>
<div className="flex flex-wrap justify-center gap-6 opacity-60">
<a className="hover:opacity-100 hover:text-[#6E8F5B] transition-none" href="#">Legal Framework</a>
<a className="hover:opacity-100 hover:text-[#6E8F5B] transition-none" href="#">Registry Info</a>
<a className="hover:opacity-100 hover:text-[#6E8F5B] transition-none" href="#">Comm. Protocol</a>
<span>v2.4.0</span>
</div>
</footer>



    </>
  );
}
