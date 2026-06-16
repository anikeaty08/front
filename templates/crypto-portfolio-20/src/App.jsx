import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });

        // Scramble Text Effect Logic
        class ScrambleText {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.originalText = el.dataset.value || el.innerText;
                this.update = this.update.bind(this);
            }
            
            setText(newText) {
                const oldText = this.el.innerText;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise((resolve) => this.resolve = resolve);
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || '';
                    const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }
            
            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="text-green-500 opacity-50">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
            
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }

        // Initialize scrambles
        const elements = document.querySelectorAll('.scramble-target');
        elements.forEach(el => {
            const scrambler = new ScrambleText(el);
            // Trigger on load
            setTimeout(() => {
                scrambler.setText(el.dataset.value);
            }, 200 + Math.random() * 300);
            
            // Trigger on hover
            el.addEventListener('mouseenter', () => {
                scrambler.setText(el.dataset.value);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#1a2e1a,transparent)] pointer-events-none opacity-40"></div>

<div className="relative w-full max-w-md bg-[#090a09]/90 backdrop-blur-sm border border-white/5 p-8 sm:p-10 shadow-2xl group z-10">

<div className="absolute -top-px -left-px w-3 h-3 border-l border-t border-green-500/50 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-green-400"></div>
<div className="absolute -top-px -right-px w-3 h-3 border-r border-t border-green-500/50 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-green-400"></div>
<div className="absolute -bottom-px -left-px w-3 h-3 border-l border-b border-green-500/50 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-green-400"></div>
<div className="absolute -bottom-px -right-px w-3 h-3 border-r border-b border-green-500/50 transition-all duration-500 group-hover:w-8 group-hover:h-8 group-hover:border-green-400"></div>

<div className="flex justify-between items-start mb-10">
<div>
<div className="flex items-center gap-2 text-green-500 text-xs tracking-widest uppercase mb-2 opacity-80">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    System.Withdraw
                </div>
<h2 className="text-3xl text-white font-medium tracking-tighter scramble-target uppercase" data-value="Withdraw Assets">[I—H+</h2>
</div>
<button className="text-zinc-600 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="space-y-6">

<div className="group/field">
<div className="relative">
<button className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 active:border-green-500/30 transition-all duration-200 h-14 px-4 flex items-center justify-between text-sm group-focus-within:border-green-500/40">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#2775ca] flex items-center justify-center text-[10px] text-white font-bold shadow-lg shadow-blue-900/20">
                                $
                            </div>
<span className="text-white font-medium tracking-tight">USDC <span className="text-zinc-500 font-normal ml-1">USD Coin</span></span>
</div>
<i className="w-4 h-4 text-zinc-600" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="group/field">
<div className="relative">
<button className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 active:border-green-500/30 transition-all duration-200 h-14 px-4 flex items-center justify-between text-sm">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="network"></i>
</div>
<span className="text-white font-medium tracking-tight">Ethereum Mainnet</span>
</div>
<span className="text-[10px] bg-white/5 border border-white/5 text-zinc-400 px-1.5 py-0.5 uppercase tracking-wide">ERC-20</span>
</button>
</div>
</div>

<div className="group/field">
<div className="relative">
<input className="w-full bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 focus:border-green-500/40 text-white placeholder-zinc-700 text-lg font-medium h-14 pl-4 pr-16 outline-none transition-all duration-200 caret-blink" placeholder="0.00" type="text"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
<span className="text-xs text-zinc-500 font-medium">USDC</span>
</div>
</div>
</div>

</div>

<div className="mt-8 pt-6 border-t border-white/5">
<button className="relative w-full overflow-hidden bg-[#4ade80] hover:bg-[#22c55e] text-black font-semibold h-12 text-sm uppercase tracking-tight transition-all duration-300 group/btn flex items-center justify-center gap-2">
<span className="relative z-10 flex items-center gap-2">
                    Confirm Withdrawal <i className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</span>

<div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-white/20 skew-x-12 z-0"></div>
</button>
</div>
</div>


    </>
  );
}
