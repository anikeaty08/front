import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
outfit: ['Outfit', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
bg: '#05050A',
surface: '#0A0A12',
border: '#ffffff1a',
primary: '#0ea5e9',
'primary-glow': '#0ea5e966',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    function initChart_aura_emmx1nqw20p7nc6x() {
      if (window.chart_aura_emmx1nqw20p7nc6x_instance) {
        window.chart_aura_emmx1nqw20p7nc6x_instance.destroy();
      }
      const canvas = document.getElementById('sizeChart_aura_emmx1nqw20p7nc6x');
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      window.chart_aura_emmx1nqw20p7nc6x_instance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['XS', 'S', 'M', 'L', 'XL'],
          datasets: [{
            data: [1, 3, 2, 1, 0.5],
            backgroundColor: [
              'rgba(255, 255, 255, 0.05)',
              'rgba(14, 165, 233, 0.6)',
              'rgba(14, 165, 233, 0.4)',
              'rgba(255, 255, 255, 0.05)',
              'rgba(255, 255, 255, 0.05)'
            ],
            hoverBackgroundColor: [
              'rgba(255, 255, 255, 0.1)',
              'rgba(14, 165, 233, 0.8)',
              'rgba(14, 165, 233, 0.6)',
              'rgba(255, 255, 255, 0.1)',
              'rgba(255, 255, 255, 0.1)'
            ],
            borderRadius: 4,
            barPercentage: 0.6,
            categoryPercentage: 0.8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { 
              display: false 
            },
            tooltip: {
              backgroundColor: '#0A0A12',
              titleColor: '#ffffff',
              bodyColor: '#cbd5e1',
              borderColor: 'rgba(255, 255, 255, 0.05)',
              borderWidth: 1,
              titleFont: { family: 'JetBrains Mono, monospace', size: 12 },
              bodyFont: { family: 'JetBrains Mono, monospace', size: 12 },
              padding: 12,
              displayColors: false,
              callbacks: {
                title: function() { return null; },
                label: function(context) {
                  return context.label + ' Ratio: ' + context.parsed.y;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 3.5,
              grid: {
                color: 'rgba(71, 85, 105, 0.2)',
                drawBorder: false,
                tickLength: 0
              },
              ticks: {
                display: false
              },
              border: {
                display: false
              }
            },
            x: {
              grid: {
                display: false,
                drawBorder: false
              },
              ticks: {
                color: '#64748b',
                font: {
                  family: 'JetBrains Mono, monospace',
                  size: 12
                },
                padding: 8
              },
              border: {
                display: false
              }
            }
          }
        }
      });
    }
    
    if (typeof Chart !== 'undefined') {
      initChart_aura_emmx1nqw20p7nc6x();
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 w-[60rem] h-[30rem] bg-primary/10 blur-[100px] rounded-[100%] mix-blend-screen translate-y-[-50%]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b bg-bg/80 backdrop-blur-md border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 font-outfit font-medium tracking-tight text-lg text-white">
<iconify-icon className="text-primary text-xl" icon="solar:box-minimalistic-linear"></iconify-icon>
        Sizo AI
      </div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="transition-colors hover:text-white" href="#problem">The Cost</a>
<a className="transition-colors hover:text-white" href="#features">Intelligence</a>
<a className="transition-colors hover:text-white" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all text-white bg-white/5 border-white/10 hover:bg-white/10" href="#cta">
        Add to Shopify
      </a>
</div>
</nav>
<main className="relative z-10 flex flex-col items-center">

<section className="flex flex-col text-center w-full max-w-7xl mr-auto ml-auto pt-[12rem] pr-6 pb-24 pl-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        Works with Shopify
      </div>
<h1 className="text-4xl md:text-6xl font-outfit font-light tracking-tight leading-[1.05] mb-6 max-w-4xl text-balance text-white">
        You ordered too many <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">L’s again.</span>
</h1>
<p className="text-base md:text-lg font-light leading-relaxed max-w-2xl text-balance mb-10 text-slate-400">
        Fashion brands lose up to 20% of monthly profit from poor size distribution. Sizo connects to your store, reads your real sales data, and tells you exactly what to order — so you stop guessing and start selling through.
      </p>
<div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full gap-x-4 gap-y-4 items-center">
<a className="group sm:w-auto btn-gradient-border active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-md hover:bg-white/10 text-white bg-white/5" href="#cta">
  Add to Shopify — Free
  <svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 text-slate-300 hover:text-white" href="#how-it-works">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
          See How It Works
        </a>
</div>
<div className="mt-12 flex items-center gap-4 text-xs font-mono text-slate-500 opacity-80">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shop-linear"></iconify-icon> Shopify Native</span>
<span>·</span>
<span>More platforms coming soon</span>
<span>·</span>
<span>Free to start</span>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 border-t relative border-white/5" id="problem">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
<div className="text-center mb-16">
<span className="text-xs font-mono tracking-widest text-primary uppercase mb-4 block">The cost of guessing</span>
<h2 className="text-[2rem] md:text-[2.5rem] font-outfit font-medium tracking-tight text-white">Every restock is a bet.<br/>Most brands are losing it.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full group-hover:bg-red-500/10 transition-colors duration-500"></div>
<div className="text-[3rem] font-outfit font-light tracking-tight mb-4 text-white">20%</div>
<p className="text-sm font-light leading-relaxed flex-grow text-slate-300">
            Brands can forfeit up to 20% of monthly profits due to poor size distribution.
          </p>
<div className="mt-6 pt-4 border-t flex items-center gap-2 text-xs font-mono text-slate-500 border-white/5">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> Kyndof Inc.
          </div>
</div>
<div className="glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full group-hover:bg-amber-500/10 transition-colors duration-500"></div>
<div className="text-[3rem] font-outfit font-light tracking-tight mb-4 text-white">$140B</div>
<p className="text-sm font-light leading-relaxed flex-grow text-slate-300">
            In 2023, the fashion industry produced 2.5-5B items of excess stock, valued at $70–$140 billion in unsold inventory.
          </p>
<div className="mt-6 pt-4 border-t flex items-center gap-2 text-xs font-mono text-slate-500 border-white/5">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> ScienceDirect
          </div>
</div>
<div className="glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-500"></div>
<div className="text-[3rem] font-outfit font-light tracking-tight mb-4 text-white">55%</div>
<p className="text-sm font-light leading-relaxed flex-grow text-slate-300">
            76% of shoppers say stockouts damage brand perception — and 55% won’t come back after it happens twice.
          </p>
<div className="mt-6 pt-4 border-t flex items-center gap-2 text-xs font-mono text-slate-500 border-white/5">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> Opensend
          </div>
</div>
</div>
<div className="max-w-3xl mx-auto text-center">
<p className="text-sm md:text-base font-light leading-relaxed text-slate-400">
          The problem isn’t that brands don’t care. It’s that they’re ordering blind. Most restocks are based on last season’s gut feeling, a 1-2-2-1 default ratio, or a spreadsheet someone built in 2019. None of that reflects what your customers actually bought, in what sizes, at what rate — and what they couldn’t buy because you ran out.
        </p>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24" id="features">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-xs font-mono tracking-widest text-primary uppercase mb-4 block">Pillar 01 — Restock intelligence</span>
<h2 className="text-[2rem] md:text-[2.5rem] font-outfit font-medium tracking-tight mb-6 text-white">Order the right sizes.<br/>Every time.</h2>
<p className="text-sm font-light leading-relaxed mb-8 text-slate-400">
            After a product launches, Sizo tracks every sale and return by size. It calculates your actual demand curve — say, XS:S:M:L:XL = 4:8:5:2:1 — and when it’s time to restock, it tells you exactly what ratio to order. Based on data, not instinct.
          </p>
<ul className="space-y-6 mb-10">
<li className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-primary" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium mb-1 text-white">Real demand by size</h4>
<p className="text-sm font-light text-slate-400">Sizo separates true demand from noise. If a size sold out early, it accounts for stockout periods so your ratio reflects what customers wanted, not what was available.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-primary" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium mb-1 text-white">Confidence scoring</h4>
<p className="text-sm font-light text-slate-400">If a size only moved 12 units, Sizo flags it. You’ll know when to trust the number and when to apply your own judgment. No false precision.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-primary" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-white">Trend shifts over time</h4>
<p className="text-sm font-light text-slate-400">Is M growing? Is XL slowing? Sizo shows demand movement over 30, 60, and 90 days so your restock reflects this season’s customer.</p>
</div>
</li>
</ul>
<div className="pl-4 border-l-2 border-primary/30">
<p className="text-sm font-light italic mb-3 text-slate-300">“We used to default to a 1-2-2-1 ratio on every restock. Sizo showed us our actual curve was closer to 1-3-2-1 on our core tees. That shift alone recovered thousands in lost sales on the next PO.”</p>
<div className="text-xs font-mono text-slate-500">— Founder, Essential Wear</div>
</div>
</div>

<div className="glass-card rounded-2xl p-6 lg:p-8 relative">
<div className="flex items-center justify-between mb-8 border-b pb-4 border-white/5">
<div>
<div className="text-xs font-mono text-slate-500 mb-1">Core Heavyweight Tee</div>
<div className="text-sm font-medium text-white">Recommended Restock Ratio</div>
</div>
<div className="px-2 py-1 rounded bg-green-500/10 text-xs font-mono flex items-center gap-1 text-green-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 98% Confidence
            </div>
</div>
<div className="w-full h-48 mb-6 relative block">
<canvas className="" height="384" id="sizeChart_aura_emmx1nqw20p7nc6x" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '518px'}} width="1036"></canvas>


</div>
<div className="bg-surface rounded-lg p-4 border flex items-start gap-3 border-white/5">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
<div className="">
<div className="text-xs font-medium mb-1 text-white">Trend Shift Detected</div>
<div className="text-xs font-light text-slate-400">Demand for size Small has increased by 14% over the last 30 days compared to historical average. Adjusted PO suggested.</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 glass-card rounded-2xl p-6 lg:p-8 relative">
<div className="absolute top-4 right-4 flex gap-1">
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/10"></div>
</div>
<div className="mb-6">
<div className="text-xs font-mono text-slate-500 mb-1">New Product Setup</div>
<div className="text-sm font-medium text-white">Opening Order Generator</div>
</div>
<div className="space-y-4 mb-6">
<div className="p-3 rounded-lg border bg-white/[0.02] flex items-center justify-between border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center bg-white/5 text-slate-400"><iconify-icon icon="solar:t-shirt-linear"></iconify-icon></div>
<div>
<div className="text-xs text-white">Category</div>
<div className="text-xs font-light text-slate-400">Oversized Outerwear</div>
</div>
</div>
<iconify-icon className="text-primary" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="p-3 rounded-lg border bg-white/[0.02] flex items-center justify-between opacity-60 border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center bg-white/5 text-slate-400"><iconify-icon icon="solar:tag-linear"></iconify-icon></div>
<div>
<div className="text-xs text-white">Reference Product A</div>
<div className="text-xs font-light text-slate-400">FW22 Puffer Jacket</div>
</div>
</div>
<div className="text-xs font-mono text-slate-500">100% match</div>
</div>
<div className="p-3 rounded-lg border bg-white/[0.02] flex items-center justify-between opacity-60 border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded flex items-center justify-center bg-white/5 text-slate-400"><iconify-icon icon="solar:tag-linear"></iconify-icon></div>
<div>
<div className="text-xs text-white">Reference Product B</div>
<div className="text-xs font-light text-slate-400">SS23 Windbreaker</div>
</div>
</div>
<div className="text-xs font-mono text-slate-500">85% match</div>
</div>
</div>
<div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex flex-col items-center justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 blur-xl rounded-full"></div>
<div className="text-xs font-mono text-primary mb-2">Synthesized Opening Ratio</div>
<div className="text-lg font-outfit font-medium tracking-widest text-white">1 : 2 : 4 : 2 : 1</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono tracking-widest text-slate-500 uppercase">Pillar 02 — Launch intelligence</span>
<span className="px-2 py-0.5 rounded-full border text-[10px] font-mono bg-white/5 border-white/10 text-slate-400">In Dev</span>
</div>
<h2 className="text-[2rem] md:text-[2.5rem] font-outfit font-medium tracking-tight mb-6 text-white">Launching something new?<br/>Don’t guess the opening order.</h2>
<p className="text-sm font-light leading-relaxed mb-6 text-slate-400">
            Right now, if a product has never sold before, brands have nothing to go on. They default to equal splits across sizes, or copy a vaguely similar product from two seasons ago. Both approaches leave money on the table before the product even ships.
          </p>
<div className="mb-8">
<h4 className="text-sm font-medium mb-2 flex items-center gap-2 text-white">
<iconify-icon className="text-primary" icon="solar:magic-stick-3-linear"></iconify-icon> What's coming
            </h4>
<p className="text-sm font-light leading-relaxed text-slate-400">
              Sizo will analyze the size curves of your existing catalog — products with similar cut, category, and customer base — and use those patterns to generate a recommended opening order ratio for new launches. You’ll go into your first PO with a data-backed starting point instead of a coin flip.
            </p>
</div>
<div className="border-l-2 border-primary p-4 rounded-r-lg mb-8 bg-white/5">
<p className="text-sm font-light mb-2 text-slate-300">Only about <span className="font-medium text-white">60%</span> of fashion inventory sells at full price — the remaining 40% requires discounting. <span className="text-xs text-slate-500 font-mono">— Avantex</span></p>
<p className="text-xs font-light text-slate-400">A smarter opening order means more units moving at margin, and less dead stock hitting clearance before it finds its audience.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium border rounded-full px-6 py-2.5 transition-colors text-white bg-white/5 border-white/10 hover:bg-white/10" href="#waitlist">
            Join waitlist for early access
            <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 border-b border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono tracking-widest text-slate-500 uppercase">Pillar 03 — Quantity intelligence</span>
<span className="px-2 py-0.5 rounded-full border text-[10px] font-mono bg-white/5 border-white/10 text-slate-400">In Dev</span>
</div>
<h2 className="text-[2rem] md:text-[2.5rem] font-outfit font-medium tracking-tight mb-6 text-white">Not just which sizes —<br/>how many units, total.</h2>
<p className="text-sm font-light leading-relaxed mb-6 text-slate-400">
            Getting the ratio right is half the battle. The other half is knowing how many units to order in the first place. Order too few and you stock out in week three. Order too many and you’re paying warehouse costs on dead inventory through next season.
          </p>
<div className="mb-8">
<h4 className="text-sm font-medium mb-2 flex items-center gap-2 text-white">
<iconify-icon className="text-primary" icon="solar:calculator-linear"></iconify-icon> What's coming
            </h4>
<p className="text-sm font-light leading-relaxed text-slate-400">
              Sizo will combine your sales velocity, lead time from your supplier, and historical sell-through rate to recommend a total quantity — not just a ratio. You’ll be able to input your budget or unit target and see a projection: which sizes will stock out first, when, and by how much.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<div className="glass-card p-4 rounded-xl">
<div className="text-[1.5rem] font-outfit font-medium mb-1 text-white">53%</div>
<div className="text-xs font-light text-slate-400">of products stock out, lasting an avg of 35 days. <span className="font-mono text-[10px] text-slate-500 block mt-1">Source: 8fig</span></div>
</div>
<div className="glass-card p-4 rounded-xl">
<div className="text-[1.5rem] font-outfit font-medium mb-1 text-white">20-30%</div>
<div className="text-xs font-light text-slate-400">of capital tied up in carrying costs. <span className="font-mono text-[10px] text-slate-500 block mt-1">Source: NetSuite</span></div>
</div>
</div>
<div className="pl-4 border-l-2 border-white/20">
<p className="text-sm font-light italic mb-3 text-slate-300">“The sales simulator let us visualize our buy before committing $50k to the factory. It paid for itself on the first order.”</p>
</div>
</div>

<div className="glass-card rounded-2xl p-6 lg:p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between mb-8">
<div>
<div className="text-xs font-mono text-slate-500 mb-1">Quantity Simulator</div>
<div className="text-sm font-medium text-white">Stockout Projection</div>
</div>
<div className="flex gap-2 items-center bg-surface border rounded-md px-2 py-1 border-white/5">
<span className="text-xs text-slate-400">Budget:</span>
<span className="text-xs font-mono text-white">$15,000</span>
</div>
</div>
<div className="relative h-40 border-l border-b mb-6 border-white/10">

<div className="absolute -left-6 bottom-0 text-[10px] font-mono text-slate-500">0</div>
<div className="absolute -left-8 top-0 text-[10px] font-mono text-slate-500">500</div>

<div className="absolute -bottom-6 left-0 text-[10px] font-mono text-slate-500">Week 1</div>
<div className="absolute -bottom-6 right-0 text-[10px] font-mono text-slate-500">Week 8</div>

<div className="absolute bottom-0 left-0 w-full h-8 bg-red-500/10 border-t border-red-500/20 border-dashed"></div>
<div className="absolute bottom-1 right-2 text-[10px] font-mono text-red-400">Stockout Risk</div>


<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="opacity-80" d="M0,20 Q40,40 60,95 L100,95" fill="none" stroke="rgba(239,68,68,0.8)" strokeWidth="2"></path>
<circle cx="60" cy="95" fill="#ef4444" r="3"></circle>

<path d="M0,10 Q40,30 100,70" fill="none" stroke="rgba(14,165,233,0.8)" stroke-dasharray="4,4" strokeWidth="2"></path>
</svg>
<div className="absolute top-[85%] left-[55%] bg-surface border border-red-500/30 rounded p-1.5 shadow-lg z-10">
<div className="text-[10px] font-medium leading-none mb-1 text-red-400">Size M</div>
<div className="text-[9px] font-light leading-none text-slate-300">Stocks out Wk 5</div>
</div>
<div className="absolute top-[60%] right-[5%] bg-surface border border-primary/30 rounded p-1.5 shadow-lg z-10">
<div className="text-[10px] font-medium text-primary leading-none mb-1">Optimized</div>
<div className="text-[9px] font-light leading-none text-slate-300">+120 units</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-center w-full max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="how-it-works">
<div className="mb-16">
<h2 className="text-[2rem] font-outfit font-medium tracking-tight text-white">From connection to restock plan</h2>
</div>
<div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4">

<div className="hidden md:block absolute top-[4.5rem] left-[16.66%] right-[16.66%] h-[1px] z-0 overflow-hidden bg-white/10">
<div className="h-full w-[30%] bg-gradient-to-r from-transparent via-primary/80 to-transparent" style={{animation: 'step-slide 3s linear infinite'}}></div>
<style>
            @keyframes step-slide {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(400%); }
            }
          </style>
</div>

<div className="relative z-10 flex-1 flex flex-col items-center">
<div className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">Step 1</div>
<div className="w-20 h-20 rounded-full bg-surface border flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.02)] relative group border-white/10">
<div className="absolute inset-0 rounded-full bg-primary/20 scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"></div>
<iconify-icon className="text-[2rem] relative z-10 group-hover:text-white transition-colors text-slate-300" icon="solar:plug-circle-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-white">Connect your store</h3>
<p className="text-sm font-light leading-relaxed max-w-[16rem] text-slate-400">
            1-click Shopify integration. Read-only access to sales data. No dev work, no exports. Done in under a minute.
          </p>
</div>

<div className="relative z-10 flex-1 flex flex-col items-center">
<div className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">Step 2</div>
<div className="w-20 h-20 rounded-full bg-surface border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(14,165,233,0.1)] relative group">
<div className="absolute inset-[-4px] rounded-full border border-primary/20 animate-ping opacity-20"></div>
<iconify-icon className="text-[2rem] text-primary relative z-10" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-white">Sizo reads your data</h3>
<p className="text-sm font-light leading-relaxed max-w-[16rem] text-slate-400">
            Syncs order history by size, detects stockouts, filters noise, and builds demand curves — automatically in the background.
          </p>
</div>

<div className="relative z-10 flex-1 flex flex-col items-center">
<div className="text-xs font-mono text-primary mb-4 tracking-widest uppercase">Step 3</div>
<div className="w-20 h-20 rounded-full bg-surface border flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.02)] relative group border-white/10">
<div className="absolute inset-0 rounded-full bg-primary/20 scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"></div>
<iconify-icon className="text-[2rem] relative z-10 group-hover:text-white transition-colors text-slate-300" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-white">Get your restock plan</h3>
<p className="text-sm font-light leading-relaxed max-w-[16rem] text-slate-400">
            See recommended ratios and confidence scores. Export a clean PDF or CSV and hand it straight to your supplier.
          </p>
</div>
</div>
</section>

<section className="w-full py-24 overflow-hidden relative border-t border-white/5">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-[2rem] font-outfit font-medium tracking-tight text-white">Brands running on Sizo</h2>
</div>
<div className="flex animate-marquee gap-6 px-6">

<div className="glass-card w-[350px] shrink-0 p-6 rounded-2xl flex flex-col">
<div className="flex text-primary mb-4 gap-1">
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed flex-grow mb-6 text-slate-300">
            “We had a wholesale order that wiped out our XS stock early in the season. That completely skewed our size data. Sizo’s confidence score caught it — saved us from building next season’s order on a fluke.”
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium bg-white/10">L&amp;S</div>
<div>
<div className="text-sm font-medium text-white">COO</div>
<div className="text-xs text-slate-500 font-mono">Loom &amp; Stitch</div>
</div>
</div>
</div>

<div className="glass-card w-[350px] shrink-0 p-6 rounded-2xl flex flex-col">
<div className="flex text-primary mb-4 gap-1">
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed flex-grow mb-6 text-slate-300">
            “No more dead inventory sitting in XXL. We used to assume our customers ran large. They don’t. Sizo showed us the actual split and we’ve never had an end-of-season clearance problem since.”
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium bg-white/10">TC</div>
<div>
<div className="text-sm font-medium text-white">Founder</div>
<div className="text-xs text-slate-500 font-mono">ThreadCo</div>
</div>
</div>
</div>

<div className="glass-card w-[350px] shrink-0 p-6 rounded-2xl flex flex-col">
<div className="flex text-primary mb-4 gap-1">
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed flex-grow mb-6 text-slate-300">
            “The PDF export goes straight to our factory. We used to spend half a day building that spreadsheet by hand. Now it’s one click.”
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium bg-white/10">B.</div>
<div>
<div className="text-sm font-medium text-white">Director of Ops</div>
<div className="text-xs text-slate-500 font-mono">Basics.</div>
</div>
</div>
</div>

<div className="glass-card w-[350px] shrink-0 p-6 rounded-2xl flex flex-col">
<div className="flex text-primary mb-4 gap-1">
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed flex-grow mb-6 text-slate-300">
            “We had a wholesale order that wiped out our XS stock early in the season. That completely skewed our size data. Sizo’s confidence score caught it — saved us from building next season’s order on a fluke.”
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium bg-white/10">L&amp;S</div>
<div>
<div className="text-sm font-medium text-white">COO</div>
<div className="text-xs text-slate-500 font-mono">Loom &amp; Stitch</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-24 border-t relative border-white/5" id="pricing">
<div className="text-center mb-16">
<h2 className="text-[2rem] font-outfit font-medium tracking-tight text-white">Simple plans. No surprises.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

<div className="glass-card p-8 rounded-2xl flex flex-col">
<h3 className="text-lg font-medium mb-2 text-white">Free</h3>
<p className="text-sm font-light mb-6 h-10 text-slate-400">Good enough to see if your data tells a story.</p>
<div className="mb-8 flex items-end gap-1">
<span className="text-[2.5rem] font-outfit font-medium tracking-tight leading-none text-white">$0</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm font-light text-slate-300">
<iconify-icon className="text-slate-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
              Up to 3 SKUs
            </li>
<li className="flex items-start gap-3 text-sm font-light text-slate-300">
<iconify-icon className="text-slate-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
              Basic size curve
            </li>
<li className="flex items-start gap-3 text-sm font-light text-slate-300">
<iconify-icon className="text-slate-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
              90 days of history
            </li>
</ul>
<button className="w-full py-3 rounded-xl border text-sm font-medium transition-colors border-white/10 text-white hover:bg-white/5">
            Start Free
          </button>
</div>

<div className="relative p-8 rounded-2xl flex flex-col bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 shadow-[0_0_40px_rgba(14,165,233,0.05)]">
<div className="absolute -top-3 left-8 px-3 py-1 bg-primary text-[10px] font-mono tracking-widest uppercase rounded-full text-white">Recommended</div>
<h3 className="text-lg font-medium mb-2 mt-2 text-white">Premium</h3>
<p className="text-sm font-light mb-6 h-10 text-slate-400">For brands ready to act on their data.</p>
<div className="mb-8 flex items-end gap-1">
<span className="text-[2.5rem] font-outfit font-medium tracking-tight leading-none text-white">$49</span>
<span className="text-sm text-slate-500 font-light mb-1">/mo</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm font-light text-slate-300">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
              Unlimited SKUs
            </li>
<li className="flex items-start gap-3 text-sm font-light text-slate-300">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
              Full sales history
            </li>
<li className="flex items-start gap-3 text-sm font-light text-slate-300">
<iconify-icon className="text-primary mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
              Confidence scoring &amp; trend analysis
            </li>
</ul>
<button className="w-full py-3 rounded-xl bg-primary text-sm font-medium transition-colors shadow-[0_0_20px_rgba(14,165,233,0.3)] text-white hover:bg-sky-400">
            Add to Shopify — Free to Start
          </button>
</div>
</div>
</section>

<section className="w-full py-32 relative overflow-hidden flex flex-col items-center border-t border-white/5" id="cta">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-primary/10 blur-[100px] rounded-[100%] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
<h2 className="text-[2.5rem] md:text-[3.5rem] font-outfit font-medium tracking-tight mb-6 leading-tight text-white">
          Stop guessing.<br/>Start selling through.
        </h2>
<p className="text-base font-light leading-relaxed mb-10 text-balance text-slate-400">
          Connect your store in under a minute and see your actual size curve. It’s free to start — and the first restock you get right will pay for itself many times over.
        </p>
<a className="btn-gradient-border inline-flex rounded-full px-10 py-4 text-sm font-medium bg-bg/50 backdrop-blur-xl transition-all items-center justify-center gap-2 text-white hover:bg-white/5" href="#">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
          Analyze My Store — It's Free
        </a>
</div>
</section>
</main>
<footer className="w-full py-12 border-t flex flex-col items-center border-white/5">
<div className="flex items-center gap-2 font-outfit font-medium tracking-tight mb-4 text-white">
<iconify-icon className="text-primary" icon="solar:box-minimalistic-linear"></iconify-icon>
      Sizo
    </div>
<div className="text-xs font-light text-slate-500">
      © 2024 Sizo AI. Built for modern commerce.
    </div>
</footer>

    </>
  );
}
