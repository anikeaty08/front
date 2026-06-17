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



        // Generate Table Rows
        const tbody = document.getElementById('table-body');
        const generateRows = () => {
            let html = '';
            for(let i=0; i<6; i++) {
                html += `
                <tr class="border-b border-[#18221b] hover:bg-[#0c120e]/50 transition-colors group">
                    <td class="py-4 text-[#86968b]">BATCH-2025-12-01-001</td>
                    <td class="py-4">
                        <a href="#" class="flex items-center gap-2 hover:text-white transition-colors text-white w-fit">
                            0x1234...5678
                            <iconify-icon icon="solar:export-linear" class="text-sm text-[#86968b] group-hover:text-white transition-colors"></iconify-icon>
                        </a>
                    </td>
                    <td class="py-4 text-[#86968b]">12/24/2025 23:59:59</td>
                    <td class="py-4 text-right text-[#7cf58a]">$888.88</td>
                </tr>
                `;
            }
            tbody.innerHTML = html;
        };
        generateRows();

        // Interactions

        // 1. Tabs
        const tabs = document.querySelectorAll('#table-tabs button');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                tabs.forEach(t => {
                    t.classList.remove('border-white', 'text-white');
                    t.classList.add('border-transparent', 'text-[#86968b]');
                });
                e.target.classList.remove('border-transparent', 'text-[#86968b]');
                e.target.classList.add('border-white', 'text-white');
                
                // Simulate loading data
                tbody.style.opacity = '0.3';
                setTimeout(() => {
                    tbody.style.opacity = '1';
                }, 300);
            });
        });

        // 2. Bind Input
        const bindInput = document.getElementById('bind-input');
        const bindSubmit = document.getElementById('bind-submit');

        bindSubmit.addEventListener('click', () => {
            if(bindInput.value.trim() !== '') {
                const originalText = bindSubmit.textContent;
                bindSubmit.textContent = 'Bound ✓';
                bindSubmit.classList.add('text-[#7cf58a]', 'border-[#7cf58a]');
                bindInput.disabled = true;
                
                setTimeout(() => {
                    bindSubmit.textContent = 'Bind';
                    bindSubmit.classList.remove('text-[#7cf58a]', 'border-[#7cf58a]');
                    bindInput.value = '';
                    bindInput.disabled = false;
                }, 2000);
            } else {
                bindInput.classList.add('border-red-500/50');
                bindInput.classList.remove('border-[#18221b]');
                setTimeout(() => {
                    bindInput.classList.remove('border-red-500/50');
                    bindInput.classList.add('border-[#18221b]');
                }, 1000);
            }
        });

        // 3. Create Code Button
        const createBtn = document.getElementById('create-code-btn');
        createBtn.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="animate-pulse">Generating...</span>';
            this.classList.add('opacity-80', 'cursor-not-allowed');
            
            setTimeout(() => {
                this.innerHTML = 'Code: TXF-NEO-X9';
                this.classList.remove('opacity-80', 'cursor-not-allowed');
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 3000);
            }, 1000);
        });

        // 4. Claim Button
        const claimBtn = document.getElementById('claim-btn');
        claimBtn.addEventListener('click', function() {
            const icon = this.querySelector('iconify-icon');
            icon.classList.add('animate-spin');
            setTimeout(() => {
                icon.classList.remove('animate-spin');
                alert('No rewards available to claim at the moment.');
            }, 800);
        });

    
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
      

<nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#070908]/90 backdrop-blur-md border-b border-[#18221b]">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-[#7cf58a] font-normal tracking-tight" href="#">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
<span className="text-white">TxFlow</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm text-[#86968b]">
<a className="hover:text-white transition-colors" href="#">Trade</a>
<a className="hover:text-white transition-colors" href="#">Vaults</a>
<a className="hover:text-white transition-colors" href="#">Portfolio</a>
<a className="hover:text-white transition-colors" href="#">Explorer</a>
<a className="hover:text-white transition-colors" href="#">Testnet</a>
<a className="text-white transition-colors" href="#">Referrals</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Points</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm">
<div className="hidden lg:flex items-center gap-2 px-3 py-1.5 border border-[#18221b] text-[#7cf58a] font-mono text-xs tracking-tight bg-[#0c120e]">
<span className="text-[#86968b]">BLOCK</span> 123894763
            </div>
<button className="p-2 border border-[#18221b] hover:border-[#7cf58a] transition-colors bg-[#0c120e] text-[#86968b] hover:text-[#7cf58a] flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:layers-linear"></iconify-icon>
</button>
<button className="px-4 py-1.5 border border-[#7cf58a] text-[#7cf58a] font-normal hover:bg-[#7cf58a]/10 transition-colors">
                DEPOSIT
            </button>
<button className="flex items-center gap-2 px-3 py-1.5 border border-[#18221b] bg-[#0c120e] hover:border-[#7cf58a] hover:text-white transition-colors font-mono text-xs">
<div className="w-2 h-2 bg-[#7cf58a]"></div>
                0xEbBe...3EDC
                <iconify-icon className="text-base text-[#86968b]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-1 max-w-[1400px] w-full mx-auto px-6 py-12 space-y-12">

<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight max-w-2xl">
                Earn up to a <span className="text-[#7cf58a]">10% Rebate</span> when you invite friends!
            </h1>
<div className="flex flex-col items-end gap-3 shrink-0">
<button className="flex items-center gap-2 px-6 py-2.5 border border-[#7cf58a] text-[#7cf58a] font-normal hover:bg-[#7cf58a]/10 transition-colors active:scale-95 transform" id="claim-btn">
                    Claim Rewards
                    <iconify-icon className="text-lg" icon="solar:gift-linear"></iconify-icon>
</button>
<a className="flex items-center gap-1 text-xs font-mono text-[#86968b] hover:text-white transition-colors uppercase tracking-widest" href="#">
                    View Ruleset
                    <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#18221b] divide-y lg:divide-y-0 lg:divide-x divide-[#18221b]">
<div className="p-6 space-y-2 hover:bg-[#0c120e] transition-colors">
<div className="flex items-center gap-2 text-xs text-[#86968b] uppercase tracking-widest">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Traders Referred
                </div>
<div className="text-3xl font-normal tracking-tight">$0.00</div>
</div>
<div className="p-6 space-y-2 hover:bg-[#0c120e] transition-colors">
<div className="flex items-center gap-2 text-xs text-[#86968b] uppercase tracking-widest">
<iconify-icon className="text-base" icon="solar:archive-linear"></iconify-icon>
                    Claimed Rebate
                </div>
<div className="text-3xl font-normal tracking-tight">$0.00</div>
</div>
<div className="p-6 space-y-2 hover:bg-[#0c120e] transition-colors">
<div className="flex items-center gap-2 text-xs text-[#86968b] uppercase tracking-widest">
<iconify-icon className="text-base" icon="solar:box-minimalistic-linear"></iconify-icon>
                    Claimable Rebate
                </div>
<div className="text-3xl font-normal tracking-tight">$0.00</div>
</div>
<div className="p-6 space-y-2 hover:bg-[#0c120e] transition-colors">
<div className="flex items-center gap-2 text-xs text-[#86968b] uppercase tracking-widest">
<iconify-icon className="text-base" icon="solar:cup-star-linear"></iconify-icon>
                    Total Earned
                </div>
<div className="text-3xl font-normal tracking-tight">$1,111.12</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-6 relative p-8 border border-[#18221b] bg-[#0a0d0b] flex flex-col justify-between group">

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#7cf58a] transition-all group-hover:w-3 group-hover:h-3"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#7cf58a] transition-all group-hover:w-3 group-hover:h-3"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#7cf58a] transition-all group-hover:w-3 group-hover:h-3"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#7cf58a] transition-all group-hover:w-3 group-hover:h-3"></div>
<div className="space-y-8">
<div className="space-y-3">
<h2 className="text-2xl font-normal tracking-tight">
                            Refer Users &amp; <br/>
<span className="text-[#7cf58a]">Earn 10% Commission</span>
</h2>
<p className="text-sm text-[#86968b] leading-relaxed pr-4">
                            Reach $10k in trading volume to create a referral code and receive 10% of the net fees generated by your referrals
                        </p>
</div>
<div className="space-y-3">
<div className="flex justify-between items-end text-xs font-mono">
<span className="text-[#7cf58a]">$1,111.12 <span className="text-[#86968b]">Traded</span></span>
<span className="text-[#86968b]">$8,888.88 Remaining</span>
</div>
<div className="flex gap-1 h-2">
<div className="w-3 bg-[#7cf58a]"></div>
<div className="w-3 bg-[#7cf58a]"></div>
<div className="w-3 bg-[#7cf58a]"></div>
<div className="w-3 bg-[#7cf58a]"></div>
<div className="flex-1 bg-[#18221b]"></div>
</div>
</div>
<button className="w-full py-3 bg-[#7cf58a] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] text-black font-normal hover:opacity-90 transition-all active:scale-[0.98]" id="create-code-btn">
                        Create Referral Code
                    </button>
</div>
<div className="mt-12 pt-8 border-t border-[#18221b] space-y-6">
<div className="space-y-2">
<h3 className="text-lg font-normal tracking-tight">Bind A Referral Code</h3>
<p className="text-sm text-[#86968b]">Bind a referral code to get a 5% discount on your first $50M in trades</p>
</div>
<div className="relative flex items-center">
<iconify-icon className="text-base text-[#86968b] absolute left-4 pointer-events-none" icon="solar:link-linear"></iconify-icon>
<input className="w-full bg-transparent border border-[#18221b] py-3 pl-10 pr-24 text-sm focus:outline-none focus:border-[#7cf58a] transition-colors placeholder:text-[#3d4d42] font-mono" id="bind-input" placeholder="Input Binding Code" type="text"/>
<button className="absolute right-2 px-6 py-1.5 text-sm font-normal hover:border-[#7cf58a] hover:text-[#7cf58a] transition-colors bg-[#111913] border border-[#18221b] text-white" id="bind-submit">
                            Bind
                        </button>
</div>
</div>
</div>

<div className="lg:col-span-6 space-y-6">
<h3 className="text-xl font-normal tracking-tight">Rebate Structure</h3>
<div className="space-y-4">

<div className="relative p-6 bg-[#0a0d0b] border border-[#18221b] border-l-2 border-l-[#7cf58a] flex items-center justify-between hover:bg-[#0c120e] hover:-translate-y-1 hover:border-dashed hover:border-[#7cf58a] hover:shadow-[0_8px_30px_-10px_rgba(124,245,138,0.15)] transition-all duration-300 group cursor-pointer">

<div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#070908] border border-[#18221b] border-l-transparent group-hover:border-[#7cf58a] group-hover:border-l-transparent transition-colors z-10"></div>
<div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#070908] border border-[#18221b] border-r-transparent group-hover:border-[#7cf58a] group-hover:border-r-transparent transition-colors z-10"></div>
<div className="space-y-3 relative z-20">
<span className="inline-block px-2 py-0.5 border border-[#18221b] group-hover:border-[#7cf58a]/50 group-hover:text-[#7cf58a] transition-colors text-[10px] uppercase tracking-widest text-[#86968b]">Primary</span>
<div>
<h4 className="text-base font-normal group-hover:text-[#7cf58a] transition-colors">Inviter Rebate</h4>
<p className="text-xs text-[#86968b] font-mono mt-1 max-w-[280px]">// You receive 10% of your invitee's trading fees as commission</p>
</div>
</div>

<div className="pl-6 py-2 border-l border-dashed border-transparent group-hover:border-[#7cf58a]/30 transition-colors relative z-20 shrink-0">
<div className="text-4xl font-normal text-[#7cf58a] tracking-tight group-hover:scale-105 transition-transform origin-right">10%</div>
</div>
</div>

<div className="relative p-6 bg-[#0a0d0b] border border-[#18221b] flex items-center justify-between hover:bg-[#0c120e] hover:-translate-y-1 hover:border-dashed hover:border-[#7cf58a] hover:shadow-[0_8px_30px_-10px_rgba(124,245,138,0.15)] transition-all duration-300 group cursor-pointer">

<div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#070908] border border-[#18221b] border-l-transparent group-hover:border-[#7cf58a] group-hover:border-l-transparent transition-colors z-10"></div>
<div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#070908] border border-[#18221b] border-r-transparent group-hover:border-[#7cf58a] group-hover:border-r-transparent transition-colors z-10"></div>
<div className="space-y-3 relative z-20">
<span className="inline-block px-2 py-0.5 border border-[#18221b] group-hover:border-[#7cf58a]/50 group-hover:text-[#7cf58a] transition-colors text-[10px] uppercase tracking-widest text-[#86968b]">Passive</span>
<div>
<h4 className="text-base font-normal group-hover:text-[#7cf58a] transition-colors">XP Boost</h4>
<p className="text-xs text-[#86968b] font-mono mt-1 max-w-[280px]">// Invitees and inviters receive +5% boost in XP</p>
</div>
</div>

<div className="pl-6 py-2 border-l border-dashed border-transparent group-hover:border-[#7cf58a]/30 transition-colors relative z-20 shrink-0">
<div className="text-4xl font-normal tracking-tight text-white group-hover:text-[#7cf58a] group-hover:scale-105 transition-all origin-right">+5%</div>
</div>
</div>

<div className="relative p-6 bg-[#0a0d0b] border border-[#18221b] flex items-center justify-between hover:bg-[#0c120e] hover:-translate-y-1 hover:border-dashed hover:border-[#7cf58a] hover:shadow-[0_8px_30px_-10px_rgba(124,245,138,0.15)] transition-all duration-300 group cursor-pointer">

<div className="absolute -left-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#070908] border border-[#18221b] border-l-transparent group-hover:border-[#7cf58a] group-hover:border-l-transparent transition-colors z-10"></div>
<div className="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#070908] border border-[#18221b] border-r-transparent group-hover:border-[#7cf58a] group-hover:border-r-transparent transition-colors z-10"></div>
<div className="space-y-3 relative z-20">
<span className="inline-block px-2 py-0.5 border border-[#18221b] group-hover:border-[#7cf58a]/50 group-hover:text-[#7cf58a] transition-colors text-[10px] uppercase tracking-widest text-[#86968b]">Bonus</span>
<div>
<h4 className="text-base font-normal group-hover:text-[#7cf58a] transition-colors">Fee Discount</h4>
<p className="text-xs text-[#86968b] font-mono mt-1 max-w-[280px]">// Invitees enjoy a 5% discount on trading fees</p>
</div>
</div>

<div className="pl-6 py-2 border-l border-dashed border-transparent group-hover:border-[#7cf58a]/30 transition-colors relative z-20 shrink-0">
<div className="text-4xl font-normal tracking-tight text-white group-hover:text-[#7cf58a] group-hover:scale-105 transition-all origin-right">5%</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4 pt-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#18221b]">
<div className="flex space-x-8 overflow-x-auto no-scrollbar" id="table-tabs">
<button className="pb-3 border-b-2 border-white text-sm font-normal whitespace-nowrap active-tab transition-all">Invitee List</button>
<button className="pb-3 border-b-2 border-transparent text-[#86968b] hover:text-white text-sm font-normal whitespace-nowrap transition-all">Affiliate List</button>
<button className="pb-3 border-b-2 border-transparent text-[#86968b] hover:text-white text-sm font-normal whitespace-nowrap transition-all">Claim Records</button>
<button className="pb-3 border-b-2 border-transparent text-[#86968b] hover:text-white text-sm font-normal whitespace-nowrap transition-all">Commission Records</button>
</div>
<div className="text-sm font-mono tracking-tight pb-3">Total Invitees Invited: 4</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="text-[10px] text-[#86968b] uppercase tracking-widest font-mono border-b border-[#18221b]">
<th className="py-4 font-normal">Batch Number</th>
<th className="py-4 font-normal">Receiving Address</th>
<th className="py-4 font-normal">Time</th>
<th className="py-4 font-normal text-right">Referral Commission</th>
</tr>
</thead>
<tbody className="text-sm font-mono" id="table-body">

</tbody>
</table>
</div>
<div className="flex justify-between items-center text-[10px] font-mono text-[#4b5950] uppercase pt-4">
<span>root@txflow:~/data/rankings</span>
<span>global_rankings.json</span>
</div>
</div>
</main>


    </>
  );
}
