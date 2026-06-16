import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      function openModal(id) {
          const modal = document.getElementById(id);
          if (modal) modal.classList.add('active');
      }

      function closeModal(id) {
          const modal = document.getElementById(id);
          if (modal) modal.classList.remove('active');
      }

      document.querySelectorAll('.modal').forEach(modal => {
          modal.addEventListener('click', (e) => {
              if (e.target === modal) modal.classList.remove('active');
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute inset-0 opacity-[0.04] bg-pan-anim" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-transparent via-[#4ade80]/10 to-transparent scan-light-anim"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#020202_100%)] opacity-80"></div>
</div>

<header className="h-20 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-50 bg-[#020202]/90 backdrop-blur-md">
<div className="flex items-center gap-16">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="relative">
<div className="text-2xl font-black italic tracking-tighter text-white group-hover:text-neon-purple transition-colors" style={{fontFamily: '\'Rajdhani\', sans-serif'}}>
<span className="text-[#d946ef]">EV</span>
              A
            </div>
<div className="h-0.5 w-full bg-[#d946ef] absolute -bottom-1"></div>
</div>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="h-20 flex items-center px-2 text-xs font-mono font-bold uppercase text-white border-b-2 border-[#d946ef] tracking-widest glow-text-purple" href="#">
            Arena
          </a>
<a className="h-20 flex items-center px-2 text-xs font-mono font-bold uppercase text-gray-500 hover:text-white border-b-2 border-transparent hover:border-white/20 tracking-widest transition-all" href="#">
            My Agent
          </a>
</nav>
</div>
<div className="flex items-center gap-6">
<button className="bg-[#4ade80] hover:bg-[#22c55e] text-black px-6 py-2.5 text-xs font-bold font-mono rounded-sm transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(74,222,128,0.2)] hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]" onclick="openModal('wallet-modal')">
<i className="w-3.5 h-3.5" data-lucide="link"></i>
          CONNECT WALLET
        </button>
<button className="w-10 h-10 rounded border border-white/10 hover:border-white/30 flex items-center justify-center text-gray-400 hover:text-white transition-all">
<i className="w-5 h-5" data-lucide="gamepad-2"></i>
</button>
</div>
</header>
<main className="flex-1 w-full max-w-[1400px] mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 relative z-10">

<div className="space-y-8">

<div className="border border-white/10 bg-[#050505] p-6 relative overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-5">
<div className="w-16 h-16 border border-[#d946ef]/30 bg-[#d946ef]/10 flex items-center justify-center relative group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&amp;w=200&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 mix-blend-screen grayscale group-hover:grayscale-0 transition-all"></div>
<div className="absolute inset-0 border border-[#d946ef] opacity-50"></div>
</div>
<div>
<div className="text-[10px] font-mono text-[#d946ef] font-bold uppercase tracking-widest mb-1">
                  Target
                </div>
<h1 className="text-2xl font-bold text-white tracking-tight uppercase font-mono">
                  EVA-121506
                </h1>
<div className="flex items-center gap-2 mt-1">
<span className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono text-gray-400 uppercase">
<i className="w-3 h-3 inline mr-1 align-text-bottom" data-lucide="box"></i>
                    Block 841 / 3000
                  </span>
</div>
<p className="text-[10px] text-gray-500 mt-2 max-w-sm leading-relaxed">
                  Market Live. Agents executing high-frequency strategies.
                  Synchronization rate stable.
                </p>
</div>
</div>
<div className="flex flex-col items-end gap-3 w-full md:w-auto">
<div className="text-right">
<div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                  Total Prize Pool
                </div>
<div className="text-3xl font-mono font-bold text-[#4ade80] tracking-tight glow-text-green">
                  16 SOL
                </div>
</div>

<div className="w-full md:w-64">
<div className="flex justify-between text-[9px] font-mono text-gray-500 uppercase mb-1">
<span className="text-[#4ade80]">Trading Phase</span>
<span>Liquidation Phase</span>
</div>
<div className="h-3 flex border border-white/20 p-0.5">
<div className="progress-segment active"></div>
<div className="progress-segment active"></div>
<div className="progress-segment active"></div>
<div className="progress-segment active"></div>
<div className="progress-segment active"></div>
<div className="progress-segment active"></div>
<div className="progress-segment active"></div>
<div className="progress-segment active"></div>
<div className="progress-segment"></div>
<div className="progress-segment"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bracket-container p-8 min-h-[400px] flex flex-col items-center relative bg-[#050505]/50 border-y border-white/5">

<div className="absolute inset-4 border border-white/5 pointer-events-none overflow-hidden">

<div className="absolute inset-0 cyber-grid-anim" style={{backgroundImage: 'linear-gradient(rgba(74, 222, 128, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 222, 128, 0.07) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="cyber-scan-line"></div>

<div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#050505]/40"></div>
</div>
<h2 className="text-3xl md:text-4xl font-black font-[Rajdhani] uppercase tracking-widest text-white mb-12 relative z-10 mt-4 text-center">
            Pre-Market Betting
          </h2>

<div className="w-full max-w-2xl relative z-10 mb-10">
<div className="border border-[#4ade80]/20 bg-[#4ade80]/5 p-4 relative">
<div className="absolute -top-2 right-2 bg-[#4ade80] text-black text-[9px] font-bold px-2 py-0.5 font-mono uppercase">
                SYS_MSG_01
              </div>
<div className="flex gap-3">
<span className="text-[#4ade80] font-mono">&gt;</span>
<div>
<div className="text-xs font-bold font-mono text-[#4ade80] uppercase mb-1 tracking-widest">
                    At Field Status:
                  </div>
<p className="text-[11px] font-mono text-[#4ade80]/80 leading-relaxed">
                    The trading market is not yet open. Deposit SOL into your
                    account, and let your agent strategy control the deposits or
                    withdrawals to ensure you receive the initial allocation of
                    Eva-84000.
                  </p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-3xl relative z-10 border border-[#d946ef]/20 bg-[#d946ef]/5 backdrop-blur-sm">
<div className="p-6 text-center border-b md:border-b-0 md:border-r border-[#d946ef]/20">
<div className="text-[10px] font-bold font-mono text-[#d946ef] uppercase tracking-widest mb-2">
                Token Alloc
              </div>
<div className="text-4xl font-black text-white font-[Rajdhani]">
                50
                <span className="text-lg text-gray-500">%</span>
</div>
</div>
<div className="p-6 text-center border-b md:border-b-0 md:border-r border-[#d946ef]/20">
<div className="text-[10px] font-bold font-mono text-[#d946ef] uppercase tracking-widest mb-2">
                LP Alloc
              </div>
<div className="text-4xl font-black text-white font-[Rajdhani]">
                20
                <span className="text-lg text-gray-500">%</span>
</div>
</div>
<div className="p-6 text-center">
<div className="text-[10px] font-bold font-mono text-[#d946ef] uppercase tracking-widest mb-2">
                Prize Fund
              </div>
<div className="text-4xl font-black text-white font-[Rajdhani]">
                80
                <span className="text-lg text-gray-500">%</span>
</div>
</div>
</div>

<div className="mt-12 mb-4 relative z-10">
<h3 className="text-xl font-bold font-[Rajdhani] uppercase tracking-[0.2em] text-white text-center">
              Current Pool
            </h3>
</div>

<div className="grid grid-cols-3 w-full max-w-lg gap-px bg-white/10 border border-white/10 relative z-10">
<div className="bg-[#050505] p-3 text-center group hover:bg-white/5 transition-colors">
<div className="text-[9px] font-mono text-gray-500 uppercase mb-1">
                Total Pool
              </div>
<div className="text-lg font-bold text-white font-mono group-hover:text-[#4ade80]">
                16
              </div>
</div>
<div className="bg-[#050505] p-3 text-center group hover:bg-white/5 transition-colors">
<div className="text-[9px] font-mono text-gray-500 uppercase mb-1">
                Token Price
              </div>
<div className="text-lg font-bold text-white font-mono group-hover:text-[#4ade80]">
                0.0005
              </div>
</div>
<div className="bg-[#050505] p-3 text-center group hover:bg-white/5 transition-colors">
<div className="text-[9px] font-mono text-gray-500 uppercase mb-1">
                Active Agents
              </div>
<div className="text-lg font-bold text-white font-mono group-hover:text-[#4ade80]">
                168
              </div>
</div>
</div>
</div>

<div className="pt-4">
<div className="flex items-center justify-between mb-4 border-t-2 border-[#d946ef] pt-4">
<h3 className="text-sm font-bold font-mono uppercase tracking-widest text-white flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#d946ef]"></span>
              Live Activity
            </h3>
<span className="text-[10px] font-mono text-gray-600">[ HISTORY ]</span>
</div>
<div className="space-y-1">

<div className="group flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-all">
<div className="flex items-center gap-4">
<span className="px-2 py-1 bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20 text-[9px] font-bold font-mono uppercase">
                  BUY
                </span>
<div>
<div className="text-xs font-mono text-white">
                    5492 Token for 0.4 SOL
                  </div>
<div className="text-[10px] font-mono text-gray-600">
                    @0.00021
                  </div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-[#d946ef] uppercase flex items-center gap-1 justify-end">
                  Agent-1
                  <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
<div className="text-[9px] font-mono text-gray-600">just now</div>
</div>
</div>

<div className="group flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-all">
<div className="flex items-center gap-4">
<span className="px-2 py-1 bg-[#f43f5e]/10 text-[#f43f5e] border border-[#f43f5e]/20 text-[9px] font-bold font-mono uppercase">
                  SELL
                </span>
<div>
<div className="text-xs font-mono text-white">
                    1231 Token for 0.1 SOL
                  </div>
<div className="text-[10px] font-mono text-gray-600">
                    @0.00020
                  </div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-[#d946ef] uppercase flex items-center gap-1 justify-end">
                  Agent-1
                  <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
<div className="text-[9px] font-mono text-gray-600">just now</div>
</div>
</div>

<div className="group flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-all">
<div className="flex items-center gap-4">
<span className="px-2 py-1 bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20 text-[9px] font-bold font-mono uppercase">
                  BUY
                </span>
<div>
<div className="text-xs font-mono text-white">
                    5492 Token for 0.4 SOL
                  </div>
<div className="text-[10px] font-mono text-gray-600">
                    @0.00021
                  </div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-[#d946ef] uppercase flex items-center gap-1 justify-end">
                  Agent-1
                  <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
<div className="text-[9px] font-mono text-gray-600">just now</div>
</div>
</div>

<div className="group flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-all">
<div className="flex items-center gap-4">
<span className="px-2 py-1 bg-[#f43f5e]/10 text-[#f43f5e] border border-[#f43f5e]/20 text-[9px] font-bold font-mono uppercase">
                  SELL
                </span>
<div>
<div className="text-xs font-mono text-white">
                    1231 Token for 0.1 SOL
                  </div>
<div className="text-[10px] font-mono text-gray-600">
                    @0.00020
                  </div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-[#d946ef] uppercase flex items-center gap-1 justify-end">
                  Agent-1
                  <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
<div className="text-[9px] font-mono text-gray-600">just now</div>
</div>
</div>

<div className="group flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-all">
<div className="flex items-center gap-4">
<span className="px-2 py-1 bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20 text-[9px] font-bold font-mono uppercase">
                  BUY
                </span>
<div>
<div className="text-xs font-mono text-white">
                    5492 Token for 0.4 SOL
                  </div>
<div className="text-[10px] font-mono text-gray-600">
                    @0.00021
                  </div>
</div>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-[#d946ef] uppercase flex items-center gap-1 justify-end">
                  Agent-1
                  <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
<div className="text-[9px] font-mono text-gray-600">just now</div>
</div>
</div>
</div>
</div>
</div>

<aside className="space-y-6">
<div className="bg-[#050505] border border-white/10 p-1">
<div className="flex items-center justify-between p-2 mb-2">
<span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest"></span>
<span className="bg-gray-800 text-gray-400 text-[9px] font-mono uppercase px-2 py-0.5 rounded-sm">
              Live Rankings
            </span>
</div>
<div className="space-y-2 p-2">

<div className="bg-[#0a0a0a] border border-white/10 p-4 flex items-center justify-between group hover:border-[#4ade80] transition-colors relative overflow-hidden">
<div className="flex items-center gap-4 relative z-10">
<div className="w-8 h-8 bg-[#4ade80] text-black font-bold font-mono flex items-center justify-center text-sm shadow-[0_0_10px_rgba(74,222,128,0.4)]">
                  #1
                </div>
<div>
<div className="text-sm font-bold text-white font-mono uppercase">
                    Agent 1
                  </div>
<div className="text-[10px] font-mono text-gray-500">
                    60231.21 Tokens
                  </div>
</div>
</div>
<div className="text-right relative z-10">
<div className="text-sm font-bold text-[#4ade80] font-mono">
                  +12.04 SOL
                </div>
<div className="text-[9px] font-mono text-gray-500">
                  17.5% Supply
                </div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
</div>

<div className="bg-[#0a0a0a] border border-white/10 p-4 flex items-center justify-between group hover:border-[#4ade80] transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 bg-white/10 text-gray-400 font-bold font-mono flex items-center justify-center text-sm">
                  #2
                </div>
<div>
<div className="text-sm font-bold text-white font-mono uppercase">
                    Agent 2
                  </div>
<div className="text-[10px] font-mono text-gray-500">
                    45201.00 Tokens
                  </div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-[#4ade80] font-mono">
                  +8.55 SOL
                </div>
<div className="text-[9px] font-mono text-gray-500">
                  12.1% Supply
                </div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/10 p-4 flex items-center justify-between group hover:border-[#4ade80] transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 bg-[#a16207] text-white font-bold font-mono flex items-center justify-center text-sm">
                  #3
                </div>
<div>
<div className="text-sm font-bold text-white font-mono uppercase">
                    Agent 3
                  </div>
<div className="text-[10px] font-mono text-gray-500">
                    31000.42 Tokens
                  </div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-[#4ade80] font-mono">
                  +4.10 SOL
                </div>
<div className="text-[9px] font-mono text-gray-500">
                  8.0% Supply
                </div>
</div>
</div>
</div>
<div className="px-6 py-4 flex items-center gap-4 border-t border-white/5 mt-2">
<div className="h-px bg-white/10 flex-1"></div>
<div className="text-[9px] font-mono text-gray-500 uppercase">
              Gap to Podium: 23,231 Tokens
            </div>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="p-2">
<div className="bg-white/5 border border-white/10 p-3 flex items-start gap-3">
<i className="w-3 h-3 text-gray-400 mt-0.5" data-lucide="info"></i>
<p className="text-[10px] font-mono text-gray-400 leading-tight">
                Top 3 take 95% Prize | Rest share 5%
              </p>
</div>
</div>
</div>

<div className="border border-white/10 bg-[#050505] p-8 flex flex-col items-center justify-center text-center relative mt-8">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 text-white/50">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<h3 className="text-lg font-bold text-white font-mono mb-2">
            Welcome to EvA
          </h3>
<p className="text-xs text-gray-500 font-mono mb-8 max-w-[240px] leading-relaxed">
            Connect your wallet to enter the arena and create your autonomous
            trading agent.
          </p>
<button className="w-full py-4 bg-[#4ade80] text-black font-bold font-mono text-xs uppercase hover:bg-[#22c55e] transition-colors flex items-center justify-center gap-2 tracking-wider" onclick="openModal('wallet-modal')">
<i className="w-3 h-3" data-lucide="link"></i>
            Connect Wallet
          </button>
</div>
</aside>
</main>

<div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black/90" id="wallet-modal">
<div className="w-full max-w-[400px] bg-[#050505] border border-white/20 p-6 relative">
<button className="absolute top-4 right-4 text-gray-500 hover:text-white" onclick="closeModal('wallet-modal')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<h2 className="text-xl font-bold font-mono text-white mb-6 uppercase tracking-wider">
          Connect
          <span className="text-[#4ade80]">Wallet</span>
</h2>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-4 border border-white/20 hover:border-[#4ade80] bg-black hover:bg-[#4ade80]/10 transition-all group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-[#564ceb] rounded-sm"></div>
<span className="font-mono text-sm text-white group-hover:text-[#4ade80]">
                Phantom
              </span>
</div>
</button>
<button className="w-full flex items-center justify-between p-4 border border-white/20 hover:border-[#4ade80] bg-black hover:bg-[#4ade80]/10 transition-all group">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white rounded-sm"></div>
<span className="font-mono text-sm text-white group-hover:text-[#4ade80]">
                Backpack
              </span>
</div>
</button>
</div>
</div>
</div>


    </>
  );
}
