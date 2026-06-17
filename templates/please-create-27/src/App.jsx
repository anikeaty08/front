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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      const contract = '9NoBrAinErXXXXXXXfakeXXXXXXXXXXXXXXX123456789';

      const copyButton = document.getElementById('copyButton');
      const copyStatus = document.getElementById('copyStatus');
      const downloadTxt = document.getElementById('downloadTxt');
      const downloadJson = document.getElementById('downloadJson');

      if (copyButton) {
        copyButton.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(contract);
            if (copyStatus) {
              copyStatus.classList.remove('hidden');
              setTimeout(() => copyStatus.classList.add('hidden'), 2000);
            }
          } catch (e) {
            console.error('Copy failed', e);
          }
        });
      }

      function downloadFile(filename, content) {
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      if (downloadTxt) {
        downloadTxt.addEventListener('click', (e) => {
          e.preventDefault();
          downloadFile('nobrainer-contract.txt', contract + '\n');
        });
      }

      if (downloadJson) {
        downloadJson.addEventListener('click', (e) => {
          e.preventDefault();
          const json = JSON.stringify(
            {
              name: 'NoBrainer Meme Token',
              symbol: 'NOBRAINER',
              chain: 'solana',
              decimals: 9,
              contract,
            },
            null,
            2
          );
          downloadFile('nobrainer-contract.json', json);
        });
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
      

<div className="w-full flex justify-center bg-slate-950">
<div data-us-project="R61mZMBSJoF84QYdHASF" style={{width: '1440px', height: '900px'}}></div>
</div>

<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-teal-500/40 blur-3xl opacity-60"></div>
<div className="absolute top-40 -left-10 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl opacity-60"></div>
<div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl opacity-60"></div>
</div>

<header className="w-full">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-teal-400 via-fuchsia-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-teal-500/40 ring-1 ring-slate-700/60">
<span className="text-sm font-semibold tracking-tight">NB</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight leading-tight">
                NoBrainer
              </span>
<span className="text-sm text-slate-400 leading-tight">
                $NOBRAINER • Solana
              </span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#about">About</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#tokenomics">Tokenomics</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#memes">Memes</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#contract">Contract</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1.5 text-sm font-medium text-slate-100 hover:border-teal-400/80 hover:text-teal-200 hover:bg-slate-900/90 transition-colors">
<span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"></span>
              Live on Solana
            </button>
<a className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-4 py-1.5 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-300 transition-colors" href="#contract">
              Get $NOBRAINER
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</a>
</div>
</div>
</header>

<main className="flex-1">
<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-teal-400/50 bg-slate-900/60 px-3 py-1 text-xs text-teal-100 shadow-sm shadow-teal-500/30">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 7H9.5a3.5 3.5 0 0 0 0 7H14a3 3 0 0 1 0 6H6"></path>
</svg>
</span>
<span className="font-medium tracking-tight">
                NoBrainer • The meme that already finished the race.
              </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              $NOBRAINER on Solana:<br/>
              brainless speed, galaxy gains.
            </h1>
<p className="text-base md:text-lg text-slate-300 max-w-xl">
              NoBrainer is the overpowered runner whose brain already exploded from winning. A hyper-fast meme token on Solana built for degens who don’t need to think twice.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-400 px-6 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-teal-500/40 hover:bg-teal-300 transition-colors" href="#contract">
                Download Contract Address
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20h16"></path>
<path d="M8 10l4 4 4-4"></path>
<path d="M12 4v10"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-6 py-2 text-sm font-medium text-slate-100 hover:border-fuchsia-400/80 hover:text-fuchsia-200 hover:bg-slate-900/90 transition-colors" href="#memes">
                View Meme Gallery
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</a>
</div>
<div className="flex flex-wrap gap-6 pt-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="M17 8.5a5 5 0 0 0-10 0c0 3 5 5 5 5s5-2 5-5Z"></path>
</svg>
</div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-slate-100">
                    Lightning-fast chain
                  </p>
<p className="text-xs text-slate-400">
                    Built natively on Solana for degens with 0 patience.
                  </p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-full bg-fuchsia-400/20 flex items-center justify-center text-fuchsia-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6h15"></path>
<path d="M3 12h12"></path>
<path d="M9 18h12"></path>
</svg>
</div>
<div className="space-y-0.5">
<p className="text-sm font-medium text-slate-100">
                    Community-first
                  </p>
<p className="text-xs text-slate-400">
                    0 braincells, 100% vibes, memes and on-chain chaos.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden">
<div className="aspect-[4/5] sm:aspect-[4/4] relative">
<img alt="NoBrainer Meme Runner" className="absolute inset-0 h-full w-full object-cover opacity-90" src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

<div className="absolute left-4 right-4 bottom-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 text-xs text-slate-200">
<span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(244,114,182,0.9)]"></span>
                      Brain already exploded
                    </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-3 py-1 text-xs text-teal-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h7v9H3z"></path>
<path d="M14 3h7v5h-7z"></path>
<path d="M14 12h7v9h-7z"></path>
<path d="M3 16h7v5H3z"></path>
</svg>
                      Meme Season
                    </span>
</div>
<div className="rounded-2xl bg-slate-950/80 border border-slate-700/80 px-4 py-3 flex items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-xs text-slate-400 uppercase tracking-tight">
                        Runner
                      </p>
<p className="text-base font-semibold tracking-tight">
                        NoBrainer • $NOBRAINER
                      </p>
<p className="text-xs text-slate-400">
                        The only token that sprints faster than your attention span.
                      </p>
</div>
<div className="flex flex-col items-end gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300 border border-emerald-400/60">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                        Live
                      </span>
<span className="text-right text-xs text-slate-400">
                        TPS
                      </span>
<span className="text-lg font-semibold tracking-tight text-emerald-300">
                        65,000+
                      </span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md">
<div className="mx-auto w-full rounded-2xl border border-slate-800/80 bg-slate-950/90 backdrop-blur-xl shadow-xl px-5 py-4 flex items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-xs text-slate-400 uppercase tracking-tight">
                    Degens onboarded
                  </p>
<p className="text-lg font-semibold tracking-tight">
                    42,069+
                  </p>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-400 uppercase tracking-tight">
                    Market cap
                  </p>
<p className="text-lg font-semibold tracking-tight text-teal-300">
                    $NO BRAIN
                  </p>
</div>
<div className="flex flex-col items-end gap-1">
<p className="text-xs text-slate-400 uppercase tracking-tight">
                    Status
                  </p>
<span className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/70 px-3 py-1 text-xs text-fuchsia-100">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300"></span>
                    Meme Overdrive
                  </span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20" id="about">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="md:col-span-1 space-y-4">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                What is NoBrainer?
              </h2>
<p className="text-base text-slate-300">
                NoBrainer is a meme token born from the idea that by the time you think about it, the opportunity is already gone. Our mascot is a brainless sprinter who left rationality far behind the starting line.
              </p>
</div>
<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 flex flex-col gap-3">
<div className="h-8 w-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-3l-2 2-2-2H7a2 2 0 0 1-2-2Z"></path>
<path d="M8 11h8"></path>
</svg>
</div>
<h3 className="text-base font-semibold tracking-tight">
                  Meme-first, protocol-later
                </h3>
<p className="text-sm text-slate-400">
                  We start with culture: viral art, short-form chaos, and community in-jokes. Utility comes when the community demands it, not before.
                </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 flex flex-col gap-3">
<div className="h-8 w-8 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v10"></path>
<path d="M6 13l6 8 6-8"></path>
<circle cx="12" cy="3" r="2"></circle>
</svg>
</div>
<h3 className="text-base font-semibold tracking-tight">
                  Speedrun to virality
                </h3>
<p className="text-sm text-slate-400">
                  Low fees and instant finality make every meme drop feel like a 100m sprint. Deploy, share, and ape in seconds.
                </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 flex flex-col gap-3">
<div className="h-8 w-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path>
<path d="M14 17H5"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<h3 className="text-base font-semibold tracking-tight">
                  Built for brainless clicks
                </h3>
<p className="text-sm text-slate-400">
                  Simple branding, simple flows. Connect wallet, grab the contract, and sprint into the chaos.
                </p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20" id="tokenomics">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Tokenomics for the brainless.
              </h2>
<p className="mt-2 text-base text-slate-300 max-w-xl">
                No reflections, no complicated taxes, no 12-page whitepaper. Just a supply, a community wallet, and an on-chain scoreboard.
              </p>
</div>
<div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950/80 px-4 py-2 text-xs text-slate-300 gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span>Total Supply:</span>
<span className="font-semibold tracking-tight text-slate-50">
                1,000,000,000 $NOBRAINER
              </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">
                  Liquidity
                </h3>
<span className="rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/50 px-3 py-0.5 text-xs">
                  60%
                </span>
</div>
<p className="text-sm text-slate-400">
                Majority of supply goes straight to liquidity pools. No hidden brain wallets waiting to dump.
              </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">
                  Community Vault
                </h3>
<span className="rounded-full bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-400/50 px-3 py-0.5 text-xs">
                  25%
                </span>
</div>
<p className="text-sm text-slate-400">
                Reserved for meme bounties, art contests, raids, and insane experiments the community dreams up.
              </p>
</div>
<div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">
                  Team &amp; Ops
                </h3>
<span className="rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-400/50 px-3 py-0.5 text-xs">
                  15%
                </span>
</div>
<p className="text-sm text-slate-400">
                Locked and vested. Even the team doesn’t trust their own brains with instant unlocks.
              </p>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20" id="memes">
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Meme Gallery
              </h2>
<p className="mt-2 text-base text-slate-300">
                Screenshots, edits, cursed crops — every frame a reminder: thinking is optional.
              </p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-200 hover:border-teal-400/80 hover:text-teal-200 transition-colors">
              Submit your meme
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
<div className="group relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60">
<img alt="NoBrainer runner meme" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-100"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-100">
<div>
<p className="font-medium tracking-tight">
                    Starting line, zero thoughts
                  </p>
<p className="text-slate-400">
                    “I already won in my head.”
                  </p>
</div>
<span className="rounded-full bg-slate-900/80 border border-slate-700 px-3 py-1">
                  #OG
                </span>
</div>
</div>
<div className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 flex flex-col justify-between">
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-semibold tracking-tight">
                  “It’s a no-brainer.”
                </p>
<span className="rounded-full bg-emerald-500/15 text-emerald-300 px-3 py-0.5 text-xs border border-emerald-400/50">
                  Copypasta
                </span>
</div>
<p className="text-sm text-slate-300">
                When your friend asks why you aped into a token with a brainless runner and rainbow explosion.
              </p>
<div className="mt-4 flex items-center justify-between text-xs text-slate-400">
<span>Posted by @degendad</span>
<span>69k reposts</span>
</div>
</div>
<div className="group relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/40 via-teal-500/30 to-indigo-500/40 mix-blend-screen opacity-70"></div>
<div className="relative h-full flex flex-col justify-between p-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-slate-950/80 flex items-center justify-center text-teal-300 border border-slate-700">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
<div>
<p className="text-xs text-slate-200 uppercase tracking-tight">
                      Template
                    </p>
<p className="text-sm text-slate-50 font-medium tracking-tight">
                      “Thinking vs buying $NOBRAINER”
                    </p>
</div>
</div>
<div className="mt-3 space-y-2 text-xs text-slate-100">
<div className="flex justify-between bg-slate-950/60 rounded-lg px-3 py-2 border border-slate-800/80">
<span>Thinking</span>
<span className="text-slate-400">0x still broke</span>
</div>
<div className="flex justify-between bg-slate-950/60 rounded-lg px-3 py-2 border border-emerald-500/60">
<span>Buying $NOBRAINER</span>
<span className="text-emerald-300">+69 IQ (imaginary)</span>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-slate-200">
<span>Download PSD / PNG template</span>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 border border-slate-700 px-3 py-1 hover:border-teal-400/80 hover:text-teal-200 transition-colors">
                    Save
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20h16"></path>
<path d="M8 10l4 4 4-4"></path>
<path d="M12 4v10"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-24" id="contract">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
<div className="space-y-4">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Contract address — download &amp; ape.
              </h2>
<p className="text-base text-slate-300">
                Keep the official $NOBRAINER Solana contract at your fingertips. Download it as a text file, QR-ready snippet, or copy it directly to your clipboard.
              </p>
<div className="space-y-3">
<label className="text-xs text-slate-400 uppercase tracking-tight" htmlFor="contractAddress">
                  Official Solana Contract
                </label>
<div className="flex flex-col sm:flex-row gap-2">
<div className="flex-1 inline-flex items-center rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs text-slate-200">
<span className="truncate select-all" id="contractAddress">
                      9NoBrAinErXXXXXXXfakeXXXXXXXXXXXXXXX123456789
                    </span>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-medium text-slate-100 border border-slate-700 hover:border-teal-400/80 hover:text-teal-200 hover:bg-slate-900/90 transition-colors" id="copyButton">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="12" x="8" y="8"></rect>
<path d="M4 16V6a2 2 0 0 1 2-2h10"></path>
</svg>
                    Copy
                  </button>
</div>
<p className="text-xs text-emerald-300 hidden" id="copyStatus">
                  Copied to clipboard. Don’t think, just paste.
                </p>
</div>
<div className="space-y-3 pt-2">
<p className="text-xs text-slate-400 uppercase tracking-tight">
                  Download
                </p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-4 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-md shadow-teal-500/40 hover:bg-teal-300 transition-colors" href="#" id="downloadTxt">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path>
<path d="M14 2v6h6"></path>
<path d="M12 18v-6"></path>
<path d="M9 15l3 3 3-3"></path>
</svg>
                    Download .txt
                  </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-xs font-medium text-slate-100 border border-slate-700 hover:border-fuchsia-400/80 hover:text-fuchsia-200 transition-colors" href="#" id="downloadJson">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v4H4z"></path>
<path d="M4 12h16v4H4z"></path>
<path d="M4 20h16"></path>
</svg>
                    Download JSON
                  </a>
<a className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-xs font-medium text-slate-100 border border-slate-700 hover:border-indigo-400/80 hover:text-indigo-200 transition-colors" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 9h6v6H9z"></path>
</svg>
                    QR snippet (soon)
                  </a>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-xl p-4 md:p-5 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span>nobrainer-contract.ts</span>
</div>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300 border border-slate-700 hover:border-teal-400/80 hover:text-teal-200 transition-colors">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2"></path>
<path d="M17 6h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"></path>
<path d="m14 7-4 10"></path>
</svg>
                  View code
                </button>
</div>
<div className="rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden">
<div className="flex items-center gap-1 px-3 py-2 border-b border-slate-800">
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
</div>
<pre className="text-xs md:text-sm text-slate-200 p-3 md:p-4 overflow-x-auto"><code><span className="text-slate-500">// Copy into your Solana script, or import JSON.</span>
<span className="text-sky-400">const</span> NOBRAINER_MINT <span className="text-sky-400">=</span> <span className="text-emerald-300">'9NoBrAinErXXXXXXXfakeXXXXXXXXXXXXXXX123456789'</span><span className="text-slate-200">;</span>

<span className="text-sky-400">const</span> config <span className="text-sky-400">=</span> <span className="text-emerald-300">{</span>
  symbol<span className="text-slate-200">:</span> <span className="text-emerald-300">'NOBRAINER'</span><span className="text-slate-200">,</span>
  name<span className="text-slate-200">:</span> <span className="text-emerald-300">'NoBrainer Meme Token'</span><span className="text-slate-200">,</span>
  decimals<span className="text-slate-200">:</span> <span className="text-amber-300">9</span><span className="text-slate-200">,</span>
  chain<span className="text-slate-200">:</span> <span className="text-emerald-300">'solana'</span><span className="text-slate-200">,</span>
  totalSupply<span className="text-slate-200">:</span> <span className="text-amber-300">1_000_000_000</span>
<span className="text-emerald-300">}</span><span className="text-slate-200">;</span>

<span className="text-sky-400">export</span> <span className="text-sky-400">default</span> <span className="text-slate-200">{</span> NOBRAINER_MINT<span className="text-slate-200">,</span> config <span className="text-slate-200">};</span></code></pre>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/80 bg-slate-950/80">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3 text-xs text-slate-400">
<span className="font-medium text-slate-200 tracking-tight">
              NoBrainer • $NOBRAINER
            </span>
<span className="hidden sm:inline-block">|</span>
<span>Solana meme token. 0 IQ, 100% send.</span>
</div>
<div className="flex items-center gap-4 text-xs text-slate-400">
<a className="hover:text-teal-300 transition-colors" href="#">X / Twitter</a>
<a className="hover:text-fuchsia-300 transition-colors" href="#">Telegram</a>
<a className="hover:text-indigo-300 transition-colors" href="#">Docs (soon)</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
