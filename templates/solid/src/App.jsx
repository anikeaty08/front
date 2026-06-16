import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animate');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});



            window.switchPipelineVisual = function(mode) {
                const container = document.getElementById('pipeline-controller');
                if (!container) return;

                // Reset Animation Loop
                container.classList.remove('mode-bitcoin', 'mode-gold', 'mode-stable');
                void container.offsetWidth; // Trigger reflow to restart CSS animations
                container.classList.add('mode-' + mode);

                // Update Tab State
                ['bitcoin', 'gold', 'stable'].forEach(m => {
                    const btn = document.getElementById('tab-' + m);
                    if(m === mode) {
                        btn.className = "px-5 py-2.5 rounded-md text-sm font-medium transition-all border border-white/10 bg-zinc-800 text-white shadow-sm flex items-center gap-2";
                    } else {
                        btn.className = "px-5 py-2.5 rounded-md text-sm font-medium transition-all border border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 flex items-center gap-2";
                    }
                });

                // Config Data
                const config = {
                    bitcoin: {
                        titles: ['Node Infra', 'Coinbase API', 'Unchained PoR', 'Ingestion Engine', 'Event Store'],
                        subs: ['RPC / WSS', 'Custody Data', 'Signatures', 'Block Processing', 'Immutable Ledger'],
                        icons: ['solar:server-square-bold-duotone', 'solar:cloud-bold-duotone', 'solar:shield-check-bold-duotone'],
                        colors: ['text-zinc-400', 'text-zinc-400', 'text-zinc-400'],
                        latency: 'Latency: 24ms'
                    },
                    gold: {
                        titles: ["Brink's Vault", 'Bureau Veritas', 'LBMA Fix', 'Normalization', 'Event Store'],
                        subs: ['Secure FTP', 'Audit PDF', 'PM Price', 'OCR & Parsing', 'Immutable Ledger'],
                        icons: ['solar:safe-square-bold-duotone', 'solar:document-text-bold-duotone', 'solar:graph-up-bold-duotone'],
                        colors: ['text-yellow-500', 'text-yellow-500', 'text-yellow-500'],
                        latency: 'Latency: 24hrs'
                    },
                    stable: {
                        titles: ['Circle Mint', 'Chainlink Oracle', 'Burn Logs', 'Solvency Check', 'Event Store'],
                        subs: ['Treasury API', 'Price Feed', 'On-chain', 'Risk Analysis', 'Immutable Ledger'],
                        icons: ['solar:dollar-minimalistic-bold-duotone', 'simple-icons:chainlink', 'solar:link-circle-bold-duotone'],
                        colors: ['text-blue-500', 'text-blue-500', 'text-blue-500'],
                        latency: 'Latency: 200ms'
                    }
                };

                const data = config[mode];

                // Update Text
                ['src-1', 'src-2', 'src-3', 'mid', 'end'].forEach((prefix, i) => {
                    document.getElementById(prefix + '-title').innerText = data.titles[i];
                    document.getElementById(prefix + '-sub').innerText = data.subs[i];
                });

                // Update Icons
                ['src-1', 'src-2', 'src-3'].forEach((prefix, i) => {
                    const iconContainer = document.getElementById(prefix + '-icon');
                    iconContainer.innerHTML = `<iconify-icon icon="${data.icons[i]}" class="text-xl"></iconify-icon>`;
                    // Remove old color classes and add new ones
                    iconContainer.className = `w-8 h-8 rounded-lg bg-black flex items-center justify-center border border-white/5 transition-colors ${data.colors[i]}`;
                });

                document.getElementById('latency-stat').innerText = data.latency;

                // Hard Reset Particles to Ensure Sync
                const particles = container.querySelectorAll('.pipeline-particle');
                particles.forEach(p => {
                    p.style.animationName = 'none';
                    void p.offsetWidth;
                    p.style.animationName = '';
                });
            };

            // Init
            window.switchPipelineVisual('bitcoin');
          


          function switchPipeline(tab) {
              // Hide all views
              ['bitcoin', 'gold', 'stable'].forEach(t => {
                  document.getElementById(`pipeline-${t}`).classList.add('hidden');
                  document.getElementById(`tab-${t}`).classList.replace('tab-active', 'tab-inactive');
                  document.getElementById(`tab-${t}`).classList.remove('bg-zinc-800');
              });

              // Show selected view
              document.getElementById(`pipeline-${tab}`).classList.remove('hidden');
              const activeBtn = document.getElementById(`tab-${tab}`);
              activeBtn.classList.replace('tab-inactive', 'tab-active');

              // Adjust specific colors for active tab if needed
              const colors = {
                  bitcoin: 'rgba(245, 158, 11, 0.1)',
                  gold: 'rgba(234, 179, 8, 0.1)',
                  stable: 'rgba(59, 130, 246, 0.1)'
              };
              // activeBtn.style.backgroundColor = 'rgba(39, 39, 42, 1)';
          }
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-black"></div>
<div className="absolute inset-0 grid-bg opacity-40 mask-image-b"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-amber-500 text-xl" icon="solar:cube-side-bold-duotone"></iconify-icon>
</div>
<span className="text-white font-semibold text-lg tracking-tight">
            Solid
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Custody</a>
<a className="hover:text-white transition-colors" href="#">Network</a>
<a className="hover:text-white transition-colors" href="#">Developers</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
            Log in
          </a>
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
            Start Building
          </button>
</div>
</div>
</nav>

<main className="z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col text-center max-w-4xl mr-auto mb-16 ml-auto items-center">
<div className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-200/90 text-xs font-medium mb-8 animate">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
            Introducing Real-Time Reserves API
          </div>
<h1 className="animate-on-scroll delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-[0.95] animate">
            Hard-asset infrastructure
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-600">
              for the digital age.
            </span>
</h1>
<p className="animate-on-scroll delay-200 md:text-xl leading-relaxed animate text-lg text-zinc-400 max-w-2xl mb-10">
            The evidence-first platform for institutional assets. Programmable
            <span className="text-zinc-200">Gold</span>
            ,
            <span className="text-zinc-200">Bitcoin</span>
            , and
            <span className="text-zinc-200">Stablecoins</span>
            powered by event-driven architecture.
          </p>
<div className="animate-on-scroll delay-300 flex flex-col sm:flex-row items-center gap-4 animate">
<button className="shiny-cta group">
<span className="flex items-center gap-2">
                Get API Keys
                <iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="px-6 py-4 rounded-full text-zinc-300 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors">
<iconify-icon className="text-xl" icon="solar:document-text-bold-duotone"></iconify-icon>
              Read Documentation
            </button>
</div>
</div>

<div className="animate-on-scroll delay-300 relative max-w-5xl mx-auto mt-12 animate">
<div className="-inset-1 bg-gradient-to-r from-amber-500/20 via-zinc-500/20 to-indigo-500/20 opacity-50 rounded-2xl absolute blur-lg"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0B] shadow-2xl overflow-hidden">


<div className="grid md:grid-cols-2"></div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">
          Trust Infrastructure For
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-3xl text-white" icon="simple-icons:jpmorgan"></iconify-icon>
<iconify-icon className="text-3xl text-white" icon="simple-icons:blackrock"></iconify-icon>
<iconify-icon className="text-3xl text-white" icon="cib:goldman-sachs"></iconify-icon>
<iconify-icon className="text-3xl text-white" icon="simple-icons:coinbase"></iconify-icon>
<iconify-icon className="text-3xl text-white" icon="simple-icons:bitgo"></iconify-icon>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto">

<div className="md:flex mb-16 items-end justify-between animate-on-scroll animate">
<div className="">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">
              Infrastructure built on
              <br/>
              evidence, not promises.
            </h2>
<p className="text-zinc-400 max-w-lg">
              We replace trust with cryptographic proof. Direct ownership of
              allocated assets in insured vaults.
            </p>
</div>
<button className="hidden md:flex gap-2 hover:text-amber-400 transition-colors md:mt-0 text-sm font-medium text-amber-500 mt-6 gap-x-2 gap-y-2 items-center">
            View Coverage Map
            <iconify-icon className="text-lg" icon="solar:map-arrow-right-bold-duotone"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

<div className="group relative rounded-2xl bg-zinc-900/50 border border-white/5 p-8 overflow-hidden hover:border-amber-500/30 transition-colors duration-300 animate-on-scroll">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="z-10 relative">
<div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-6 text-amber-500">
<iconify-icon className="text-2xl" icon="solar:safe-square-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Allocated Custody
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                Assets are titled directly to you in segregated vaults. Not a
                balance sheet liability. Bankruptcy remote by design.
              </p>
</div>
</div>

<div className="group relative rounded-2xl bg-zinc-900/50 border border-white/5 p-8 overflow-hidden hover:border-indigo-500/30 transition-colors duration-300 animate-on-scroll delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="z-10 relative">
<div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
<iconify-icon className="text-2xl" icon="solar:graph-up-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Event-Driven Ledger
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                Every movement, audit, and rebalancing is a discrete event.
                Subscribe to webhooks for real-time reconciliation.
              </p>
</div>
</div>

<div className="group relative rounded-2xl bg-zinc-900/50 border border-white/5 p-8 overflow-hidden hover:border-emerald-500/30 transition-colors duration-300 animate-on-scroll delay-200">
<div className="group-hover:opacity-100 transition-opacity bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 relative">
<div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-6 text-emerald-500">
<iconify-icon className="text-2xl" icon="solar:verified-check-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
                Proof of Reserves
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                Daily attestations from top-tier audit firms, cryptographically
                linked to on-chain assets. Verify, don't trust.
              </p>
</div>
</div>
</div>

<div className="mb-24 animate-on-scroll delay-100 animate">
<div className="flex flex-col items-center text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400 mb-4">
<iconify-icon className="text-amber-500" icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
              System Design
            </div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-3">
              The Architecture Stack
            </h3>
<p className="text-zinc-400 text-sm max-w-md">
              Vertical logic flow with Governance overlay and Agent feedback
              loops. Designed for modularity and high-assurance execution.
            </p>
</div>

<div className="relative rounded-3xl bg-[#0e0e10] border border-white/5 p-6 md:p-10 overflow-hidden shadow-2xl">

<div className="grid-bg opacity-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-10">

<div className="w-full relative z-20">
<div className="w-full p-4 rounded-xl bg-zinc-900/90 border border-indigo-500/30 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(99,102,241,0.1)] flex flex-col items-center justify-center text-center">
<h4 className="text-indigo-200 font-semibold text-sm flex items-center gap-2 mb-1">
<iconify-icon className="text-lg" icon="solar:shield-user-bold-duotone"></iconify-icon>
                    Governance / Control Plane
                  </h4>
<p className="text-indigo-400/60 text-xs font-mono tracking-tight">
                    Policies, limits, proof requirements, model parameters.
                  </p>
</div>
</div>

<div className="relative">

<div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">

<div className="group p-4 rounded-xl bg-zinc-900/60 border border-white/10 relative flex flex-col h-full">
<div className="mb-3 text-zinc-500">
<iconify-icon className="text-2xl" icon="solar:smartphone-bold-duotone"></iconify-icon>
</div>
<h4 className="text-zinc-200 font-medium text-sm mb-1">
                      Surface Layer
                    </h4>
<p className="text-zinc-500 text-[11px] leading-relaxed">
                      User app, onboarding, intents (no execution).
                    </p>

<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700 bg-[#0e0e10] rounded-full p-0.5">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-4 rounded-xl bg-zinc-900/60 border border-white/10 relative flex flex-col h-full">
<div className="mb-3 text-amber-500/80">
<iconify-icon className="text-2xl" icon="solar:pie-chart-2-bold-duotone"></iconify-icon>
</div>
<h4 className="text-zinc-200 font-medium text-sm mb-1">
                      Portfolio Engine
                    </h4>
<p className="text-zinc-500 text-[11px] leading-relaxed">
                      Allocation &amp; routing logic.
                    </p>

<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700 bg-[#0e0e10] rounded-full p-0.5">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-4 rounded-xl bg-zinc-900/60 border border-white/10 relative flex flex-col h-full">
<div className="mb-3 text-indigo-500/80">
<iconify-icon className="text-2xl" icon="solar:safe-square-bold-duotone"></iconify-icon>
</div>
<h4 className="text-zinc-200 font-medium text-sm mb-1">
                      Custody Layer
                    </h4>
<p className="text-zinc-500 text-[11px] leading-relaxed">
                      Executes flows with banks &amp; vaults.
                    </p>

<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700 bg-[#0e0e10] rounded-full p-0.5">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-4 rounded-xl bg-zinc-900/60 border border-white/10 relative flex flex-col h-full">
<div className="mb-3 text-blue-400/80">
<iconify-icon className="text-2xl" icon="solar:eye-bold-duotone"></iconify-icon>
</div>
<h4 className="text-zinc-200 font-medium text-sm mb-1">
                      Transparency Layer
                    </h4>
<p className="text-zinc-500 text-[11px] leading-relaxed">
                      Ingests and validates external evidence only.
                    </p>

<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700 bg-[#0e0e10] rounded-full p-0.5">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-4 rounded-xl bg-zinc-950 border border-white/20 shadow-lg relative flex flex-col h-full overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="mb-3 text-white">
<iconify-icon className="text-2xl" icon="solar:database-bold-duotone"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm mb-1">
                        Canonical Event Store
                      </h4>
<p className="text-zinc-400 text-[11px] leading-relaxed">
                        Unified append-only ledger of all actions and proofs.
                      </p>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
<span>Intent</span>
<span className="text-zinc-800">→</span>
<span>Planning</span>
<span className="text-zinc-800">→</span>
<span>Execution</span>
<span className="text-zinc-800">→</span>
<span>Evidence</span>
<span className="text-zinc-800">→</span>
<span className="text-white">Truth</span>
</div>
</div>

<div className="relative">

<div className="hidden md:block absolute -top-10 right-[10%] w-px h-10 border-l border-dashed border-zinc-700 z-0"></div>


<div className="hidden md:block absolute top-12 left-0 right-[16%] h-24 pointer-events-none z-0">

<div className="absolute bottom-0 left-[10%] right-0 border-b border-dashed border-red-500/20"></div>

<div className="absolute bottom-0 left-[10%] h-[160px] border-l border-dashed border-red-500/20 -translate-x-1/2"></div>

<div className="absolute bottom-0 left-[30%] h-[160px] border-l border-dashed border-red-500/20 -translate-x-1/2"></div>

<div className="absolute top-0 right-0 h-full border-r border-dashed border-red-500/20"></div>

<div className="absolute bottom-[160px] left-[10%] -translate-x-1/2 -mb-2 bg-[#0e0e10] px-1 text-[9px] text-red-400/80 font-mono whitespace-nowrap">
                    nudges / limits
                  </div>
<div className="absolute bottom-[160px] left-[30%] -translate-x-1/2 -mb-2 bg-[#0e0e10] px-1 text-[9px] text-red-400/80 font-mono whitespace-nowrap">
                    constraints
                  </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 max-w-4xl ml-auto">

<div className="group p-4 rounded-xl bg-zinc-900/40 border border-white/5 relative flex flex-col h-full">
<div className="mb-3 text-purple-400/80">
<iconify-icon className="text-2xl" icon="solar:server-square-bold-duotone"></iconify-icon>
</div>
<h4 className="text-zinc-200 font-medium text-sm mb-1">
                      Memory / Trust Graph
                    </h4>
<p className="text-zinc-500 text-[11px] leading-relaxed">
                      Projections &amp; relationships derived from events.
                    </p>

<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700 bg-[#0e0e10] rounded-full p-0.5">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-4 rounded-xl bg-zinc-900/40 border border-white/5 relative flex flex-col h-full">
<div className="mb-3 text-emerald-500/80">
<iconify-icon className="text-2xl" icon="solar:graph-up-bold-duotone"></iconify-icon>
</div>
<h4 className="text-zinc-200 font-medium text-sm mb-1">
                      Trust Score Engine
                    </h4>
<p className="text-zinc-500 text-[11px] leading-relaxed">
                      Computes scores from graph + time-decay rules.
                    </p>

<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700 bg-[#0e0e10] rounded-full p-0.5">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-4 rounded-xl bg-red-950/10 border border-red-500/20 relative flex flex-col h-full">
<div className="mb-3 text-red-400">
<iconify-icon className="text-2xl" icon="solar:danger-circle-bold-duotone"></iconify-icon>
</div>
<h4 className="text-red-200 font-medium text-sm mb-1">
                      Agent Layer
                    </h4>
<p className="text-red-200/50 text-[11px] leading-relaxed">
                      Continuous risk monitoring &amp; automated interventions.
                    </p>
</div>
</div>

<div className="flex items-center justify-end gap-2 mt-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest pr-12">
<span className="text-white">Truth</span>
<span className="text-zinc-800">→</span>
<span>Memory</span>
<span className="text-zinc-800">→</span>
<span>Trust</span>
<span className="text-zinc-800">→</span>
<span className="text-red-400/80">Intervention</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-4xl mx-auto md:py-12 min-h-[1200px] select-none text-sm font-mono pt-12 pb-12">

<div className="md:hidden flex flex-col gap-6 px-4">
<div className="p-4 rounded-xl bg-zinc-900 border border-indigo-500/30">
<div className="flex items-center gap-3 mb-2">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
<span className="text-indigo-200 font-semibold">Surface Layer</span>
</div>
<div className="text-xs text-zinc-500 text-center py-1 border-y border-dashed border-zinc-800 my-2">
                Intents
              </div>
</div>
<div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700">
<div className="flex items-center gap-3 mb-2">
<svg className="text-zinc-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
<span className="text-zinc-200 font-semibold">
                  Portfolio Engine
                </span>
</div>
<div className="text-xs text-zinc-500 text-center py-1 border-y border-dashed border-zinc-800 my-2">
                Plans
              </div>
</div>
<div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700">
<div className="flex items-center gap-3 mb-2">
<svg className="text-zinc-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="text-zinc-200 font-semibold">Custody Layer</span>
</div>
<div className="text-xs text-zinc-500 text-center py-1 border-y border-dashed border-zinc-800 my-2">
                Positions
              </div>
</div>
<div className="p-4 rounded-xl bg-zinc-900 border border-zinc-700">
<div className="flex items-center gap-3 mb-2">
<svg className="text-zinc-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<span className="text-zinc-200 font-semibold">
                  Transparency Layer
                </span>
</div>
<div className="text-xs text-zinc-500 text-center py-1 border-y border-dashed border-zinc-800 my-2">
                Proofs
              </div>
</div>
<div className="p-4 rounded-xl bg-black border border-white/20 shadow-lg">
<div className="flex items-center gap-3 mb-2">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>
<span className="text-white font-semibold">
                  Canonical Event Store
                </span>
</div>
<div className="text-xs text-zinc-500 text-center py-1 border-y border-dashed border-zinc-800 my-2">
                Projections
              </div>
</div>
<div className="p-4 rounded-xl bg-zinc-900 border border-indigo-500/30">
<div className="flex items-center gap-3 mb-2">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M20 17h2v4h-2z"></path>
<path d="M12 17h2v4h-2z"></path>
<path d="M4 17h2v4H4z"></path>
<path d="m22 17-5-5.83"></path>
<path d="m13 11.17 5 5.83"></path>
<path d="m2 17 5-5.83"></path>
<path d="m7 11.17 6 5.83"></path>
<path d="M12 2v9"></path>
</svg>
<span className="text-indigo-200 font-semibold">
                  Memory / Graph
                </span>
</div>
<div className="text-xs text-zinc-500 text-center py-1 border-y border-dashed border-zinc-800 my-2">
                Features
              </div>
</div>
<div className="p-4 rounded-xl bg-zinc-900 border border-emerald-500/30">
<div className="flex items-center gap-3 mb-2">
<svg className="text-emerald-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-emerald-100 font-semibold">
                  Trust Score Engine
                </span>
</div>
<div className="text-xs text-zinc-500 text-center py-1 border-y border-dashed border-zinc-800 my-2">
                Scores
              </div>
</div>
<div className="p-4 rounded-xl bg-red-950/20 border border-red-500/50">
<div className="flex items-center gap-3 mb-2">
<svg className="text-red-500" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="text-red-100 font-semibold">Agent Layer</span>
</div>
</div>
</div>

<div className="hidden md:block relative w-full h-[1200px]">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow-amber" markerheight="10" markerunits="strokeWidth" markerwidth="10" orient="auto" refx="9" refy="3">
<path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"></path>
</marker>
<marker id="arrow-red" markerheight="10" markerunits="strokeWidth" markerwidth="10" orient="auto" refx="9" refy="3">
<path d="M0,0 L0,6 L9,3 z" fill="#ef4444"></path>
</marker>
<marker id="arrow-zinc" markerheight="10" markerunits="strokeWidth" markerwidth="10" orient="auto" refx="9" refy="3">
<path d="M0,0 L0,6 L9,3 z" fill="#52525b"></path>
</marker>
</defs>


<path d="M 640 90 C 640 130, 480 130, 480 170" fill="none" marker-end="url(#arrow-amber)" stroke="#f59e0b" stroke-opacity="0.8" strokeWidth="1.5"></path>

<path d="M 440 240 C 440 280, 240 280, 240 330" fill="none" marker-end="url(#arrow-amber)" stroke="#f59e0b" stroke-opacity="0.8" strokeWidth="1.5"></path>

<path d="M 240 400 L 240 470" fill="none" marker-end="url(#arrow-amber)" stroke="#f59e0b" stroke-opacity="0.8" strokeWidth="1.5"></path>

<path d="M 240 540 C 240 580, 440 580, 440 610" fill="none" marker-end="url(#arrow-amber)" stroke="#f59e0b" stroke-opacity="0.8" strokeWidth="1.5"></path>

<path d="M 448 690 L 448 760" fill="none" marker-end="url(#arrow-amber)" stroke="#f59e0b" stroke-opacity="0.8" strokeWidth="1.5"></path>

<path d="M 448 830 L 448 900" fill="none" marker-end="url(#arrow-amber)" stroke="#f59e0b" stroke-opacity="0.8" strokeWidth="1.5"></path>

<path d="M 448 970 C 448 1010, 640 1010, 640 1040" fill="none" marker-end="url(#arrow-amber)" stroke="#f59e0b" stroke-opacity="0.8" strokeWidth="1.5"></path>


<path d="M 720 1070 C 900 1070, 900 60, 740 60" fill="none" marker-end="url(#arrow-red)" stroke="#ef4444" stroke-dasharray="4 2" stroke-opacity="0.6" strokeWidth="1.5"></path>

<path d="M 640 1040 C 580 900, 580 300, 520 230" fill="none" marker-end="url(#arrow-red)" stroke="#ef4444" stroke-dasharray="4 2" stroke-opacity="0.6" strokeWidth="1.5"></path>


<path d="M 480 240 C 500 300, 500 500, 480 610" fill="none" marker-end="url(#arrow-zinc)" stroke="#52525b" stroke-dasharray="3 3" stroke-opacity="0.5" strokeWidth="1"></path>

<path d="M 320 365 C 380 365, 400 500, 420 610" fill="none" marker-end="url(#arrow-zinc)" stroke="#52525b" stroke-dasharray="3 3" stroke-opacity="0.5" strokeWidth="1"></path>

<path d="M 640 1040 C 600 900, 550 800, 480 680" fill="none" marker-end="url(#arrow-zinc)" stroke="#52525b" stroke-dasharray="3 3" stroke-opacity="0.5" strokeWidth="1"></path>
</svg>

<div className="absolute right-[10%] top-[30px] w-56 z-10">
<div className="relative bg-slate-900/90 border border-indigo-500/40 p-4 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.15)] backdrop-blur-sm group hover:border-indigo-400 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-indigo-200 font-semibold tracking-tight">
                    Surface Layer
                  </span>
<svg className="text-indigo-400" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
</div>
<div className="text-[10px] text-indigo-400/60 font-mono">
                  CLIENT INTERFACE
                </div>
</div>

<div className="absolute -bottom-8 left-0 -translate-x-6 bg-black border border-amber-500/30 text-amber-500 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Intents
              </div>
</div>

<div className="absolute left-1/2 top-[170px] -translate-x-1/2 w-56 z-10">
<div className="relative bg-slate-900/90 border border-zinc-700 p-4 rounded-xl shadow-lg backdrop-blur-sm group hover:border-amber-500/40 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-zinc-200 font-semibold tracking-tight">
                    Portfolio Engine
                  </span>
<svg className="text-amber-500" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
</div>
<div className="text-[10px] text-zinc-500 font-mono">
                  ORDER ROUTING
                </div>
</div>

<div className="absolute -bottom-8 left-0 -translate-x-8 bg-black border border-amber-500/30 text-amber-500 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Plans
              </div>

<div className="absolute top-1/2 -right-8 translate-x-full bg-black border border-zinc-700 text-zinc-500 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
                Events
              </div>
</div>

<div className="absolute left-[15%] top-[330px] w-56 z-10">
<div className="relative bg-slate-900/90 border border-zinc-700 p-4 rounded-xl shadow-lg backdrop-blur-sm group hover:border-zinc-500 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-zinc-200 font-semibold tracking-tight">
                    Custody Layer
                  </span>
<svg className="text-zinc-400" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="text-[10px] text-zinc-500 font-mono">
                  SETTLEMENT
                </div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black border border-amber-500/30 text-amber-500 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Positions
              </div>
</div>

<div className="absolute left-[15%] top-[470px] w-56 z-10">
<div className="relative bg-slate-900/90 border border-zinc-700 p-4 rounded-xl shadow-lg backdrop-blur-sm group hover:border-blue-400/40 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-zinc-200 font-semibold tracking-tight">
                    Transparency Layer
                  </span>
<svg className="text-blue-400" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="text-[10px] text-zinc-500 font-mono">
                  EXTERNAL AUDIT
                </div>
</div>

<div className="absolute -bottom-6 right-0 translate-x-12 bg-black border border-amber-500/30 text-amber-500 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Proofs
              </div>
</div>

<div className="absolute left-1/2 top-[610px] -translate-x-1/2 w-64 z-20">
<div className="absolute -inset-4 bg-white/5 rounded-full blur-xl animate-pulse pointer-events-none"></div>
<div className="relative bg-black border-2 border-white p-5 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] group">
<div className="absolute inset-0 bg-zinc-900/50 rounded-2xl"></div>
<div className="relative z-10 flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
<span className="text-white font-bold tracking-tight">
                        Event Store
                      </span>
</div>
<span className="text-[10px] text-zinc-400 font-mono uppercase">
                      Immutable Ledger
                    </span>
</div>
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
<path className="" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>
</div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black border border-amber-500/30 text-amber-500 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Projections
              </div>
</div>

<div className="absolute left-1/2 top-[760px] -translate-x-1/2 w-56 z-10">
<div className="relative bg-slate-900/90 border border-indigo-500/30 p-4 rounded-xl shadow-lg backdrop-blur-sm group hover:border-indigo-400 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-indigo-200 font-semibold tracking-tight">
                    Memory Graph
                  </span>
<svg className="text-indigo-400" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<circle cx="12" cy="12" r="3"></circle>
<circle cx="19" cy="5" r="3"></circle>
<circle cx="5" cy="5" r="3"></circle>
<circle cx="19" cy="19" r="3"></circle>
<circle cx="5" cy="19" r="3"></circle>
<line x1="12" x2="19" y1="12" y2="5"></line>
<line x1="12" x2="5" y1="12" y2="5"></line>
<line x1="12" x2="19" y1="12" y2="19"></line>
<line x1="12" x2="5" y1="12" y2="19"></line>
</svg>
</div>
<div className="text-[10px] text-zinc-500 font-mono">
                  STATE RECONSTRUCTION
                </div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black border border-amber-500/30 text-amber-500 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Features
              </div>
</div>

<div className="absolute left-1/2 top-[900px] -translate-x-1/2 w-56 z-10">
<div className="relative bg-slate-900/90 border border-emerald-500/30 p-4 rounded-xl shadow-lg backdrop-blur-sm group hover:border-emerald-400 transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-emerald-100 font-semibold tracking-tight">
                    Trust Score
                  </span>
<svg className="text-emerald-400" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="text-[10px] text-emerald-500/60 font-mono">
                  DYNAMIC SCORING
                </div>
</div>

<div className="absolute -bottom-8 right-0 translate-x-6 bg-black border border-amber-500/30 text-amber-500 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Scores
              </div>
</div>

<div className="absolute right-[10%] top-[1040px] w-64 z-20">
<div className="absolute -inset-1 border border-dashed border-red-500/30 rounded-2xl animate-[spin_10s_linear_infinite]"></div>
<div className="relative bg-red-950/40 border border-red-500/50 p-5 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.25)] flex items-center justify-between group">
<div className="flex flex-col">
<span className="text-red-100 font-bold tracking-tight text-lg">
                    Agent Layer
                  </span>
<span className="text-[10px] text-red-400 uppercase tracking-widest mt-0.5">
                    Automated Risk Control
                  </span>
</div>
<svg className="text-red-500 animate-pulse" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
</div>

<div className="absolute top-1/2 -right-16 -translate-y-1/2 rotate-90 bg-black border border-red-500/30 text-red-400 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Limits Loop
              </div>

<div className="absolute -top-12 left-0 -translate-y-1/2 bg-black border border-red-500/30 text-red-400 text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider z-20 shadow-lg">
                Constraints
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] border-white/5 border-t pt-12 pb-12 relative">

<div className="max-w-[1400px] mx-auto px-6 overflow-x-auto">
<div className="min-w-[1000px] relative font-mono text-xs">

<div className="grid grid-cols-10 gap-4 mb-8 relative z-20">
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-orange-500/30 text-orange-200 rounded text-center w-full">
                User
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-blue-500/30 text-blue-200 rounded text-center w-full">
                Surface Layer
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-zinc-700 text-zinc-300 rounded text-center w-full">
                KYC Provider
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-orange-500/30 text-orange-200 rounded text-center w-full">
                Portfolio Engine
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-blue-500/30 text-blue-200 rounded text-center w-full">
                Custody Layer
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-zinc-700 text-zinc-300 rounded text-center w-full">
                Transparency Layer
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-white/30 text-white rounded text-center w-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Canonical Event Store
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-purple-500/30 text-purple-200 rounded text-center w-full">
                Memory / Trust Graph
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-green-500/30 text-green-200 rounded text-center w-full">
                Trust Score Engine
              </div>
</div>
<div className="flex justify-center">
<div className="px-3 py-2 bg-[#0e0e10] border border-red-500/30 text-red-200 rounded text-center w-full">
                Agent Layer
              </div>
</div>
</div>

<div className="relative h-[900px] w-full bg-[#0A0A0B] rounded-xl border border-white/5 overflow-hidden shadow-2xl">

<div className="absolute inset-0 grid grid-cols-10 pointer-events-none">
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
<div className="border-r border-orange-500/20 h-full mx-auto w-0 relative left-[50%]"></div>
</div>

<div className="w-full absolute top-0">

<div className="h-6 bg-amber-100/90 text-amber-900 flex items-center justify-center font-bold uppercase tracking-wider text-[10px]">
                Phase 1: Identity &amp; Intent
              </div>

<div className="flex uppercase text-[10px] font-bold text-amber-900 tracking-wider bg-amber-100/90 h-6 mt-[340px] items-center justify-center">
                Phase 2: Funding, Execution &amp; Proofs
              </div>

<div className="h-6 bg-amber-100/90 text-amber-900 flex items-center justify-center font-bold uppercase tracking-wider text-[10px] mt-[240px]">
                Phase 3: The Truth Pipeline
              </div>

<div className="h-6 bg-amber-100/90 text-amber-900 flex items-center justify-center font-bold uppercase tracking-wider text-[10px] mt-[120px]">
                Phase 4: Feedback &amp; Display
              </div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow" markerheight="6" markerwidth="6" orient="auto" refx="5" refy="3">
<path d="M0,0 L0,6 L6,3 z" fill="#e4e4e7"></path>
</marker>
<marker id="arrow-dashed" markerheight="6" markerwidth="6" orient="auto" refx="5" refy="3">
<path d="M0,0 L0,6 L6,3 z" fill="#71717a"></path>
</marker>
</defs>


<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="5%" x2="15%" y1="60" y2="60"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="10%" y="55">
                Create Account
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="15%" x2="25%" y1="90" y2="90"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="20%" y="85">
                Request KYC/AML Checks
              </text>

<line marker-end="url(#arrow-dashed)" stroke="#71717a" stroke-dasharray="4 2" strokeWidth="1" x1="25%" x2="15%" y1="120" y2="120"></line>
<text fill="#71717a" fontSize="10" text-anchor="middle" x="20%" y="115">
                Verification Result
              </text>


<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="15%" x2="65%" y1="150" y2="150"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="40%" y="145">
                kyc_result event
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="15%" x2="35%" y1="180" y2="180"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="25%" y="175">
                Normalized Intent
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="35%" x2="65%" y1="210" y2="210"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="50%" y="205">
                user_intent event
              </text>

<line marker-end="url(#arrow-dashed)" stroke="#71717a" stroke-dasharray="4 2" strokeWidth="1" x1="35%" x2="15%" y1="240" y2="240"></line>
<text fill="#71717a" fontSize="10" text-anchor="middle" x="25%" y="235">
                Proposed Portfolio
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="35%" x2="65%" y1="270" y2="270"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="50%" y="265">
                engine_plan event
              </text>


<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="5%" x2="15%" y1="410" y2="410"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="10%" y="405">
                First Deposit
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="15%" x2="35%" y1="440" y2="440"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="25%" y="435">
                Funding Intent
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="35%" x2="45%" y1="470" y2="470"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="40%" y="465">
                Execute Deposit Plan
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="45%" x2="65%" y1="500" y2="500"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="55%" y="495">
                execution &amp; balance events
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="45%" x2="55%" y1="530" y2="530"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="50%" y="525">
                Custody Metadata / Positions
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="55%" x2="65%" y1="560" y2="560"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="60%" y="555">
                validated proof events
              </text>


<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="65%" x2="75%" y1="650" y2="650"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="70%" y="645">
                Event Stream (Actions + Proofs)
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="75%" x2="85%" y1="680" y2="680"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="80%" y="675">
                Graph Features &amp; History
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="85%" x2="65%" y1="710" y2="710"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="75%" y="705">
                trust_score_updated event
              </text>

<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="85%" x2="95%" y1="740" y2="740"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="90%" y="735">
                Trust Scores &amp; Risk State
              </text>


<line marker-end="url(#arrow)" stroke="#e4e4e7" strokeWidth="1" x1="95%" x2="65%" y1="800" y2="800"></line>
<text fill="#e4e4e7" fontSize="10" text-anchor="middle" x="80%" y="795">
                intervention event
              </text>

<path d="M 950 820 L 950 840 L 150 840 L 150 820" fill="none" marker-end="url(#arrow-dashed)" stroke="#71717a" stroke-dasharray="4 2" strokeWidth="1" vector-effect="non-scaling-stroke"></path>

<line marker-end="url(#arrow-dashed)" stroke="#71717a" stroke-dasharray="4 2" strokeWidth="1" x1="95%" x2="15%" y1="830" y2="830"></line>
<text fill="#71717a" fontSize="10" text-anchor="middle" x="55%" y="825">
                Constraints / Limits
              </text>

<line marker-end="url(#arrow-dashed)" stroke="#71717a" stroke-dasharray="4 2" strokeWidth="1" x1="65%" x2="5%" y1="860" y2="860"></line>
<text fill="#71717a" fontSize="10" text-anchor="middle" x="35%" y="855">
                Account Funded + Trust Score
              </text>
</svg>

<div className="absolute bottom-16 right-4 w-[90%] h-24 border border-dashed border-red-500/20 rounded pointer-events-none"></div>
<div className="absolute bottom-[85px] right-6 text-[10px] text-red-500/50 uppercase font-bold">
              [Risk Detected]
            </div>
</div>
</div>
</div>
</section>

<section className="bg-[#050A14] pt-20 pr-6 pb-20 pl-6 relative">

<div className="max-w-4xl mx-auto text-center relative z-10 mb-32">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
          Start building on Solid today.
        </h2>
<p className="text-lg text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
          Join the new standard for hard-asset infrastructure. No setup fees for
          development environments.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="hover:bg-zinc-200 transition-colors font-medium text-black bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Create Free Account
          </button>
<button className="px-8 py-3.5 rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors font-medium">
            Contact Sales
          </button>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto mb-20">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/5"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-[#050A14] px-4 text-sm text-zinc-500 uppercase tracking-widest font-mono">
            Security Pipeline
          </span>
</div>
</div>

<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20 text-xs font-medium text-amber-500 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
            High-assurance Fintech
          </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            The Redemption Gauntlet
          </h2>
<p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Every transaction must survive the gauntlet. Automated risk agents
            block suspicious activity in milliseconds, protecting your treasury
            24/7.
          </p>
</div>

<div className="md:p-12 overflow-hidden bg-[#03060a] border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

<div className="overflow-x-auto md:pb-0 scrollbar-hide pb-8">
<div className="relative flex items-center justify-between min-w-[900px] gap-4 mb-12 px-4 pt-8">

<div className="absolute top-[calc(50%+16px)] left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2"></div>

<div className="absolute top-[calc(50%+16px)] left-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 -translate-y-1/2 opacity-60 shadow-[0_0_15px_#f59e0b] animate-gauntlet-line origin-left"></div>

<div className="absolute top-[calc(50%+16px)] w-3 h-3 bg-white rounded-full -translate-y-1/2 shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20 animate-gauntlet-packet">
<div className="absolute inset-0 bg-white rounded-full animate-ping opacity-50"></div>
</div>

<div className="relative z-10 group flex flex-col items-center gap-4 w-20">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg group-hover:border-amber-500/50 group-hover:text-amber-500 transition-colors z-10">
<svg className="lucide lucide-user" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-[#03060a] px-2 py-1 rounded border border-zinc-800/50">
                  User Intent
                </div>
</div>

<div className="relative z-10 group flex flex-col items-center gap-4 w-20">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors z-10">
<svg className="lucide lucide-layout-template" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-[#03060a] px-2 py-1 rounded border border-zinc-800/50">
                  Surface
                </div>
</div>

<div className="relative z-10 group flex flex-col items-center gap-4 w-20">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg group-hover:border-white/50 group-hover:text-white transition-colors z-10">
<svg className="lucide lucide-database" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>
</div>
<div className="text-[10px] uppercase text-zinc-500 tracking-wider font-mono bg-[#03060a] border-zinc-800/50 border rounded pt-1 pr-2 pb-1 pl-2">
                  eventstore
                </div>
</div>

<div className="relative z-10 group flex flex-col items-center gap-4 w-24">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-16 h-16 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
<div className="w-14 h-14 rounded-2xl bg-[#050A14] border-2 border-red-500/50 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] z-10 relative">
<svg className="lucide lucide-shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>

<div className="absolute inset-0 border-2 border-red-500 rounded-2xl animate-gauntlet-scan opacity-0"></div>
</div>
<div className="text-[10px] uppercase font-bold text-red-500 tracking-wider bg-[#03060a] border-red-900/50 border rounded pt-1 pr-2 pb-1 pl-2 shadow-lg">
                  Agent Scan
                </div>
</div>

<div className="relative z-10 group flex flex-col items-center gap-4 w-20">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg group-hover:border-amber-500/50 group-hover:text-amber-500 transition-colors z-10">
<svg className="lucide lucide-pie-chart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
</div>
<div className="text-[10px] uppercase text-zinc-500 tracking-wider font-mono bg-[#03060a] border-zinc-800/50 border rounded pt-1 pr-2 pb-1 pl-2">
                  Engine
                </div>
</div>

<div className="relative z-10 group flex flex-col items-center gap-4 w-20">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors z-10">
<svg className="lucide lucide-landmark" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<line x1="3" x2="21" y1="2" y2="2"></line>
<line x1="3" x2="21" y1="22" y2="22"></line>
<line x1="6" x2="6" y1="6" y2="18"></line>
<line x1="18" x2="18" y1="6" y2="18"></line>
<path d="M6 6h12l-6-4Z"></path>
<path d="M3 22v-3"></path>
<path className="" d="M21 22v-3"></path>
</svg>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-[#03060a] px-2 py-1 rounded border border-zinc-800/50">
                  Custody
                </div>
</div>

<div className="relative z-10 group flex flex-col items-center gap-4 w-20">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg group-hover:border-emerald-500/50 group-hover:text-emerald-500 transition-colors z-10">
<svg className="lucide lucide-file-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path className="" d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="m9 15 2 2 4-4"></path>
</svg>
</div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider bg-[#03060a] px-2 py-1 rounded border border-zinc-800/50">
                  Proof
                </div>
</div>

<div className="relative z-10 group flex flex-col items-center gap-4 w-20">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-lg group-hover:border-amber-500/50 group-hover:text-amber-500 transition-colors animate-pulse z-10">
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path className="" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="text-[10px] uppercase text-zinc-500 tracking-wider font-mono bg-[#03060a] border-zinc-800/50 border rounded pt-1 pr-2 pb-1 pl-2">
                  Trust Score
                </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-white/5 border-t pt-10 gap-x-8 gap-y-8">
<div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors group">
<h3 className="text-white font-semibold mb-3 flex items-center gap-3">
<div className="p-1.5 rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-lock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
                Gatekeeper Logic
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                The Agent blocks risky withdrawals before they reach the bank
                based on live Trust Scores, creating an automated firewall.
              </p>
</div>
<div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors group">
<h3 className="text-white font-semibold mb-3 flex items-center gap-3">
<div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-zap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4z"></path>
</svg>
</div>
                Event-Driven
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                No external services write directly to the core ledger. Only
                internal layers emit events, ensuring cryptographic data
                integrity.
              </p>
</div>
<div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors group">
<h3 className="flex items-center gap-3 font-semibold text-white mb-3">
<div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-split" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18">
<path d="M16 3h5v5"></path>
<path d="M8 3H3v5"></path>
<path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
<path d="m15 9 6-6"></path>
</svg>
</div>
                Transparency/Proof layer
              </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                Custody executes the move; Transparency proves it happened. They
                are separate logic domains to prevent conflict of interest.
              </p>
</div>
</div>
</div>
</div>
<style>
        .grid-bg { background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 40px 40px; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes gauntlet-packet {
            0% { left: 4%; transform: translate(-50%, -50%); background-color: #ffffff; }
            14% { left: 17%; transform: translate(-50%, -50%); }
            28% { left: 30%; transform: translate(-50%, -50%); }
            40% { left: 44%; transform: translate(-50%, -50%); background-color: #ffffff; box-shadow: 0 0 20px rgba(255,255,255,0.8); }
            42% { left: 44%; transform: translate(-50%, -50%); background-color: #ef4444; box-shadow: 0 0 30px rgba(239,68,68,0.8); } /* Scan Red */
            55% { left: 44%; transform: translate(-50%, -50%); background-color: #22c55e; box-shadow: 0 0 30px rgba(34,197,94,0.8); } /* Pass Green */
            58% { left: 44%; transform: translate(-50%, -50%); background-color: #ffffff; box-shadow: 0 0 20px rgba(255,255,255,0.8); }
            65% { left: 57%; transform: translate(-50%, -50%); }
            78% { left: 70%; transform: translate(-50%, -50%); }
            90% { left: 83%; transform: translate(-50%, -50%); }
            100% { left: 96%; transform: translate(-50%, -50%); }
        }
        @keyframes gauntlet-line {
            0% { width: 4%; opacity: 0; }
            10% { opacity: 1; }
            40% { width: 44%; }
            55% { width: 44%; }
            100% { width: 96%; opacity: 0; }
        }
        @keyframes gauntlet-scan {
            0%, 40% { transform: scale(1); opacity: 0; }
            42% { transform: scale(1.1); opacity: 0.8; border-color: #ef4444; }
            48% { transform: scale(1.5); opacity: 0; border-color: #ef4444; }
            50% { transform: scale(1.1); opacity: 0.8; border-color: #22c55e; }
            55% { transform: scale(1.5); opacity: 0; border-color: #22c55e; }
            100% { transform: scale(1); opacity: 0; }
        }
        .animate-gauntlet-packet { animation: gauntlet-packet 8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-gauntlet-line { animation: gauntlet-line 8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-gauntlet-scan { animation: gauntlet-scan 8s linear infinite; }
      </style>
</section>

<footer className="bg-black border-white/10 border-t pt-16 pr-6 pb-8 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-amber-500 text-xl" icon="solar:cube-side-bold-duotone"></iconify-icon>
<span className="text-white font-semibold text-lg">Solid</span>
</div>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Custody
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  Exchange
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="">
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  Customers
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  Documentation
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  Status
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-sm">
            © 2024 Solid Infrastructure Inc. All rights reserved.
          </div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:github"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
<section className="overflow-hidden selection:bg-amber-500/30 selection:text-amber-200 bg-black border-white/10 border-t pt-24 pb-24 relative" id="pipeline-visualizer">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<style>
          .pipeline-card {
              background: rgba(24, 24, 27, 0.8);
              border: 1px solid rgba(255, 255, 255, 0.08);
              backdrop-filter: blur(12px);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .pipeline-card:hover {
              border-color: rgba(255, 255, 255, 0.2);
              transform: translateY(-2px);
              box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
          }
          .flow-line {
              stroke-dasharray: 8 4;
              animation: flowAnimation 20s linear infinite;
              stroke-linecap: round;
          }
          @keyframes flowAnimation {
              to { stroke-dashoffset: -200; }
          }
          .tab-active {
              background-color: rgba(39, 39, 42, 1);
              color: #fff;
              border-color: rgba(255, 255, 255, 0.1);
          }
          .tab-inactive {
              color: #a1a1aa;
              border-color: transparent;
          }
          .tab-inactive:hover {
              color: #fff;
              background-color: rgba(39, 39, 42, 0.5);
          }
          .glow-point {
              filter: drop-shadow(0 0 8px currentColor);
          }
        </style>

<div className="flex flex-col md:flex-row md:items-end gap-6 mb-10 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Data Pipelines &amp; Ingestion
            </h2>
<p className="text-zinc-400 text-lg leading-relaxed">
              Real-time visualization of asset-specific data velocities. We
              normalize fragmented external data into a unified canonical event
              stream.
            </p>
</div>

<div className="flex p-1 rounded-lg bg-zinc-900/50 border border-white/10 backdrop-blur-md self-start md:self-end">
<button className="px-5 py-2.5 rounded-md text-sm font-medium transition-all border border-white/10 bg-zinc-800 text-white shadow-sm flex items-center gap-2" id="tab-bitcoin" onclick="window.switchPipelineVisual('bitcoin')">
<iconify-icon className="text-amber-500 text-lg" icon="solar:server-square-bold-duotone"></iconify-icon>
              Bitcoin
            </button>
<button className="px-5 py-2.5 rounded-md text-sm font-medium transition-all border border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 flex items-center gap-2" id="tab-gold" onclick="window.switchPipelineVisual('gold')">
<iconify-icon className="text-yellow-500 text-lg" icon="solar:safe-square-bold-duotone"></iconify-icon>
              Physical Gold
            </button>
<button className="px-5 py-2.5 rounded-md text-sm font-medium transition-all border border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 flex items-center gap-2" id="tab-stable" onclick="window.switchPipelineVisual('stable')">
<iconify-icon className="text-blue-500 text-lg" icon="solar:dollar-minimalistic-bold-duotone"></iconify-icon>
              Stablecoins
            </button>
</div>
</div>

<div className="relative bg-[#050505] rounded-2xl border border-white/10 h-[600px] overflow-hidden shadow-2xl">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute top-0 left-0 w-full flex justify-between px-16 py-6 text-[10px] uppercase tracking-widest text-zinc-600 font-mono z-0 pointer-events-none">
<div className="w-48 text-center">Data Sources</div>
<div className="w-64 text-center pl-8">Ingestion Layer</div>
<div className="w-64 text-center">Canonical Store</div>
</div>

<div className="relative w-full h-[600px] flex items-center justify-center bg-zinc-950/50 rounded-3xl overflow-hidden group select-none mode-bitcoin transition-colors duration-500" id="pipeline-controller">
<style>
              .pipeline-path { fill: none; stroke-width: 2; stroke-dasharray: 8 6; stroke-linecap: round; transition: stroke 0.3s ease; }
              .pipeline-particle { pointer-events: none; }

              /* Animation Definitions */
              @keyframes flow-fast { 0% { offset-distance: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
              @keyframes flow-moderate { 0% { offset-distance: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }
              @keyframes flow-slow { 0% { offset-distance: 0%; opacity: 0; transform: scale(0.9); } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; transform: scale(0.9); } }

              /* Solvency Pulse for Stablecoins */
              @keyframes pulse-solvency {
                  0% { border-color: #3b82f6; box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
                  33% { border-color: #ef4444; box-shadow: 0 0 25px rgba(239, 68, 68, 0.5); }
                  66% { border-color: #22c55e; box-shadow: 0 0 25px rgba(34, 197, 94, 0.5); }
                  100% { border-color: #3b82f6; box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
              }

              /* MODE: BITCOIN (Orange, Fast Dots) */
              .mode-bitcoin .particle-dot { display: block; fill: #f59e0b; filter: drop-shadow(0 0 4px #f59e0b); animation: flow-fast 0.8s linear infinite; }
              .mode-bitcoin .particle-doc { display: none; }
              .mode-bitcoin .pipeline-path { stroke: rgba(245, 158, 11, 0.3); }
              .mode-bitcoin .ingestion-node { border-color: rgba(245, 158, 11, 0.3); }

              /* MODE: GOLD (Yellow, Slow Docs) */
              .mode-gold .particle-dot { display: none; }
              .mode-gold .particle-doc { display: block; fill: #facc15; filter: drop-shadow(0 0 2px rgba(250, 204, 21, 0.5)); animation: flow-slow 5s linear infinite; }
              .mode-gold .pipeline-path { stroke: rgba(250, 204, 21, 0.2); }
              .mode-gold .ingestion-node { border-color: rgba(250, 204, 21, 0.3); }

              /* MODE: STABLE (Blue, Moderate Dots, Pulsing Node) */
              .mode-stable .particle-dot { display: block; fill: #3b82f6; filter: drop-shadow(0 0 4px #3b82f6); animation: flow-moderate 2.5s linear infinite; }
              .mode-stable .particle-doc { display: none; }
              .mode-stable .pipeline-path { stroke: rgba(59, 130, 246, 0.3); }
              .mode-stable .ingestion-node { animation: pulse-solvency 3s infinite ease-in-out; border-width: 2px; }

              /* Path Assignments & Delays */
              .p-1 { offset-path: path("M 180 120 C 350 120 350 300 520 300"); }
              .p-2 { offset-path: path("M 180 300 L 520 300"); animation-delay: 0.2s; }
              .p-3 { offset-path: path("M 180 480 C 350 480 350 300 520 300"); animation-delay: 0.4s; }
              .p-out { offset-path: path("M 680 300 L 920 300"); animation-delay: 0.1s; }

              /* Staggered Delays for Gold */
              .mode-gold .p-2 { animation-delay: 1.5s; }
              .mode-gold .p-3 { animation-delay: 3.0s; }
              .mode-gold .p-out { animation-delay: 0.8s; }
            </style>
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="xMidYMid meet" viewbox="0 0 1100 600">

<path className="pipeline-path" d="M 180 120 C 350 120 350 300 520 300"></path>
<path className="pipeline-path" d="M 180 300 L 520 300"></path>
<path className="pipeline-path" d="M 180 480 C 350 480 350 300 520 300"></path>
<path className="pipeline-path" d="M 680 300 L 920 300"></path>

<circle className="pipeline-particle particle-dot p-1" r="4"></circle>
<circle className="pipeline-particle particle-dot p-2" r="4"></circle>
<circle className="pipeline-particle particle-dot p-3" r="4"></circle>
<circle className="pipeline-particle particle-dot p-out" r="4"></circle>

<g className="pipeline-particle particle-doc p-1">
<rect height="16" rx="2" width="12" x="-6" y="-8"></rect>
<line opacity="0.5" stroke="black" strokeWidth="1" x1="-3" x2="3" y1="-2" y2="-2"></line>
<line opacity="0.5" stroke="black" strokeWidth="1" x1="-3" x2="3" y1="2" y2="2"></line>
</g>
<g className="pipeline-particle particle-doc p-2">
<rect height="16" rx="2" width="12" x="-6" y="-8"></rect>
<line opacity="0.5" stroke="black" strokeWidth="1" x1="-3" x2="3" y1="-2" y2="-2"></line>
<line opacity="0.5" stroke="black" strokeWidth="1" x1="-3" x2="3" y1="2" y2="2"></line>
</g>
<g className="pipeline-particle particle-doc p-3">
<rect height="16" rx="2" width="12" x="-6" y="-8"></rect>
<line opacity="0.5" stroke="black" strokeWidth="1" x1="-3" x2="3" y1="-2" y2="-2"></line>
<line opacity="0.5" stroke="black" strokeWidth="1" x1="-3" x2="3" y1="2" y2="2"></line>
</g>
<g className="pipeline-particle particle-doc p-out">
<rect height="16" rx="2" width="12" x="-6" y="-8"></rect>
<line opacity="0.5" stroke="black" strokeWidth="1" x1="-3" x2="3" y1="-2" y2="-2"></line>
<line opacity="0.5" stroke="black" strokeWidth="1" x1="-3" x2="3" y1="2" y2="2"></line>
</g>
</svg>

<div className="z-10 flex w-full h-full max-w-5xl pt-12 pr-8 pb-12 pl-8 relative justify-between">

<div className="flex flex-col justify-between h-full w-48 py-4">

<div className="relative group">
<div className="absolute inset-0 bg-zinc-800/50 rounded-xl blur-sm group-hover:bg-zinc-700/50 transition-colors"></div>
<div className="relative bg-zinc-900 border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-lg">
<div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-zinc-400 border border-white/5 transition-colors" id="src-1-icon">
<iconify-icon className="text-xl" icon="solar:server-square-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-zinc-100 tracking-tight" id="src-1-title">
                        Node Infra
                      </div>
<div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wide" id="src-1-sub">
                        RPC / WSS
                      </div>
</div>
</div>
<div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-700 border border-zinc-900"></div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-zinc-800/50 rounded-xl blur-sm group-hover:bg-zinc-700/50 transition-colors"></div>
<div className="relative bg-zinc-900 border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-lg">
<div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-zinc-400 border border-white/5 transition-colors" id="src-2-icon">
<iconify-icon className="text-xl" icon="solar:cloud-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-zinc-100 tracking-tight" id="src-2-title">
                        Coinbase API
                      </div>
<div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wide" id="src-2-sub">
                        Custody Data
                      </div>
</div>
</div>
<div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-700 border border-zinc-900"></div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-zinc-800/50 rounded-xl blur-sm group-hover:bg-zinc-700/50 transition-colors"></div>
<div className="relative bg-zinc-900 border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-lg">
<div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-zinc-400 border border-white/5 transition-colors" id="src-3-icon">
<iconify-icon className="text-xl" icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-zinc-100 tracking-tight" id="src-3-title">
                        Unchained PoR
                      </div>
<div className="text-[9px] text-zinc-500 font-mono uppercase tracking-wide" id="src-3-sub">
                        Signatures
                      </div>
</div>
</div>
<div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-700 border border-zinc-900"></div>
</div>
</div>

<div className="flex flex-col justify-center items-center">
<div className="ingestion-node relative w-64 h-32 rounded-2xl bg-zinc-900/90 border border-zinc-700/50 flex flex-col items-center justify-center text-center gap-3 shadow-2xl backdrop-blur-xl transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white z-10 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:chip-bold-duotone"></iconify-icon>
</div>
<div className="z-10">
<div className="text-sm font-semibold text-white tracking-tight" id="mid-title">
                      Ingestion Engine
                    </div>
<div className="text-[10px] text-zinc-400 font-mono mt-0.5" id="mid-sub">
                      Normalization Layer
                    </div>
</div>
<div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-600 border border-zinc-800"></div>
<div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-600 border border-zinc-800"></div>
</div>
<div className="mt-8 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] font-mono text-zinc-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span id="latency-stat">Latency: 24ms</span>
</div>
</div>

<div className="flex flex-col justify-center w-64">
<div className="relative bg-black border border-white/10 p-5 rounded-xl shadow-2xl flex items-center gap-4 group hover:border-white/20 transition-all">
<div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white relative z-10">
<iconify-icon className="text-2xl" icon="solar:database-bold-duotone"></iconify-icon>
</div>
<div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20"></div>
</div>
<div>
<div className="text-sm font-bold text-white tracking-tight" id="end-title">
                      Event Store
                    </div>
<div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide" id="end-sub">
                      Immutable Ledger
                    </div>
</div>
<div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-700 border border-zinc-900"></div>
</div>
</div>
</div>
</div>

</div>

</div>

<style>
        .text-vertical-rl { writing-mode: vertical-rl; }

        @keyframes pulse-green {
            0%, 100% { border-color: rgba(16, 185, 129, 0.5); box-shadow: 0 0 40px -5px rgba(16, 185, 129, 0.2); }
            50% { border-color: rgba(16, 185, 129, 1); box-shadow: 0 0 60px -5px rgba(16, 185, 129, 0.4); }
        }
        .animate-pulse-green { animation: pulse-green 1s ease-in-out infinite; }

        @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      </style>
</section>

    </>
  );
}
