import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const marquee = document.getElementById('live-ticker');
            
            const generateHex = (len) => {
                return Array.from({length: len}, () => Math.floor(Math.random() * 16).toString(16)).join('');
            };
            
            const generateEntries = () => {
                let entries = [];
                for(let i=0; i<40; i++) {
                    const isBuy = Math.random() > 0.3; // 70% buys for pump vibes
                    const amt = (Math.random() * 8000000 + 100000).toFixed(0);
                    const wallet = `0x${generateHex(4)}...${generateHex(4)}`;
                    
                    if(isBuy) {
                        entries.push(`<span class="text-green-400">🟢 ${wallet} BOUGHT ${Number(amt).toLocaleString()} $NBC</span>`);
                    } else {
                        entries.push(`<span class="text-red-500">🔴 ${wallet} SOLD ${Number(amt/5).toLocaleString()} $NBC (PAPER HANDS)</span>`);
                    }
                }
                return entries.join(' &nbsp;&nbsp; <span class="text-gray-700">|</span> &nbsp;&nbsp; ');
            };
            
            marquee.innerHTML = generateEntries();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-black border-b-4 border-black text-green-400 font-semibold text-lg md:text-xl uppercase tracking-widest relative z-50">
<marquee className="py-2 flex items-center" id="live-ticker" scrollamount="12"></marquee>
</div>

<nav className="w-full p-4 md:p-6 flex justify-between items-center border-b-4 border-black bg-white relative z-40">
<div className="text-2xl md:text-4xl font-bold tracking-tight uppercase bg-black text-white px-3 py-1 shadow-[4px_4px_0px_0px_#ff00ff] rotate-[-2deg]">
            $NBC
        </div>
<div className="flex gap-4 md:gap-6">
<a className="w-10 h-10 md:w-14 md:h-14 bg-cyan-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all text-2xl md:text-3xl" href="#">
<iconify-icon icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 md:w-14 md:h-14 bg-green-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all text-2xl md:text-3xl" href="#">
<iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 md:w-14 md:h-14 bg-fuchsia-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all text-2xl md:text-3xl" href="#">
<iconify-icon icon="solar:chart-line-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</nav>

<main className="flex-grow relative flex flex-col items-center justify-center px-4 py-20 md:py-32 w-full max-w-7xl mx-auto z-10">

<div className="absolute top-10 left-4 md:left-20 w-16 h-16 md:w-24 md:h-24 bg-fuchsia-500 border-4 border-black rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -z-10 animate-bounce" style={{animationDuration: '3s'}}></div>
<div className="absolute bottom-20 right-4 md:right-32 w-20 h-20 md:w-32 md:h-32 bg-cyan-400 border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10 flex items-center justify-center text-4xl">🚀</div>
<div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white border-4 border-black rotate-45 -z-10"></div>
<div className="absolute top-1/3 right-1/4 w-12 h-12 bg-green-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -z-10 animate-pulse"></div>

<h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-center bg-white border-8 border-black p-4 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] mb-8 leading-none">
            NachoBoca<br/>Culo
        </h1>

<div className="text-xl md:text-3xl font-semibold uppercase tracking-tight text-center bg-black text-yellow-400 border-4 border-black px-6 py-3 mb-16 shadow-[8px_8px_0px_0px_#ff00ff] rotate-[2deg]">
            The only ticker that matters: <span className="text-white font-bold">$NBC</span>
</div>

<div className="relative group cursor-pointer inline-block">
<div className="absolute inset-0 bg-black border-8 border-black translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6"></div>
<a className="relative block bg-green-500 border-8 border-black px-12 py-6 md:px-20 md:py-8 text-4xl md:text-6xl font-bold uppercase tracking-tight text-black transition-transform active:translate-x-3 active:translate-y-3 md:active:translate-x-6 md:active:translate-y-6 animate-pulse hover:animate-none hover:bg-green-400" href="#">
                Buy Now
            </a>
</div>
<p className="mt-8 text-sm md:text-base font-semibold uppercase tracking-tight text-black border-b-2 border-black inline-block">
            Slippage &gt; 99% recommended
        </p>
</main>

<section className="w-full max-w-5xl mx-auto px-4 py-10 relative z-20">
<div className="bg-black border-8 border-black p-4 md:p-8 shadow-[16px_16px_0px_0px_#00ffff] relative overflow-hidden">
<div className="absolute top-0 right-0 bg-red-600 text-white font-bold px-4 py-2 border-l-4 border-b-4 border-black animate-bounce uppercase tracking-tight text-sm md:text-base">
                UP ONLY!
            </div>
<div className="flex items-center gap-2 mb-4 text-green-400 font-semibold border-b-2 border-green-800 pb-2 text-xs md:text-sm">
<iconify-icon className="text-lg" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
<span>NBC_TERMINAL_V1.69</span>
</div>
<pre className="text-green-500 font-mono text-[10px] md:text-sm overflow-x-auto whitespace-pre leading-tight">
$NBC/SOL - 1m Ticker
======================================================
[|||||||||||||||||||         ] +69,420% 
                                                  🚀
             /\                        /\
            /  \/\                    /  \
           /      \  /\              /    \
          /        \/  \    /\      /      \
         /              \/\/  \    /        \
___/\___/                      \__/          \________
======================================================
&gt; Status: Awaiting more degenerate capital...
&gt; System: Ready to pump.
_</pre>
</div>
</section>

<section className="w-full bg-white border-y-8 border-black py-20 relative z-10">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-center mb-16 bg-fuchsia-500 text-black py-4 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] inline-block w-full rotate-[-1deg]">
                Tokenomics
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="bg-yellow-400 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-4 border-black rounded-full mb-6 flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        💸
                    </div>
<h3 className="text-3xl font-bold mb-4 tracking-tight uppercase underline decoration-4 decoration-black underline-offset-4">Taxes</h3>
<p className="text-2xl font-semibold uppercase text-red-600 bg-black px-3 py-1 mt-auto w-full">0% Taxes</p>
<p className="text-xl font-semibold uppercase mt-2">100% Chaos</p>
</div>

<div className="bg-cyan-400 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-4 border-black rounded-full mb-6 flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        🔥
                    </div>
<h3 className="text-3xl font-bold mb-4 tracking-tight uppercase underline decoration-4 decoration-black underline-offset-4">Liquidity</h3>
<p className="text-xl font-semibold uppercase mt-auto leading-relaxed border-t-4 border-black pt-4">
                        Burned harder than my ex's mix CD
                    </p>
</div>

<div className="bg-fuchsia-400 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-4 border-black rounded-full mb-6 flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        📈
                    </div>
<h3 className="text-3xl font-bold mb-4 tracking-tight uppercase underline decoration-4 decoration-black underline-offset-4">Bonding Curve</h3>
<p className="text-xl font-semibold uppercase mt-auto leading-relaxed border-t-4 border-black pt-4">
                        Trust me bro, we're going to the moon
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-black w-full border-t-8 border-black text-center pt-16 pb-8 px-4 flex flex-col items-center relative z-20">
<div className="bg-white border-4 border-red-500 p-4 md:p-8 shadow-[8px_8px_0px_0px_#ff0000] rotate-[1deg] mb-12 max-w-4xl">
<p className="text-red-600 font-bold text-lg md:text-3xl uppercase tracking-tight animate-pulse leading-snug">
                ⚠️ WARNING: NOT FINANCIAL ADVICE. THIS IS A MEME COIN. YOU WILL PROBABLY LOSE EVERYTHING. DO NOT USE RENT MONEY. ⚠️
            </p>
</div>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<a className="bg-yellow-400 text-black border-4 border-black px-6 py-2 text-xl font-bold uppercase tracking-tight shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white transition-colors" href="#">DexScreener</a>
<a className="bg-cyan-400 text-black border-4 border-black px-6 py-2 text-xl font-bold uppercase tracking-tight shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white transition-colors" href="#">Twitter (X)</a>
<a className="bg-green-400 text-black border-4 border-black px-6 py-2 text-xl font-bold uppercase tracking-tight shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white transition-colors" href="#">Telegram</a>
</div>
<p className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-widest border-t border-gray-800 pt-8 w-full">
            © 2024 $NBC Foundation. Pls don't sue us.
        </p>
</footer>



    </>
  );
}
