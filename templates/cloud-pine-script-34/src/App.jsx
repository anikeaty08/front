import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-12 border-b border-white/5 bg-[#0A0A0A] flex items-center justify-between px-3 shrink-0">

<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:code-square-linear"></iconify-icon>
<span className="font-medium text-lg tracking-tighter text-white">PineFast</span>
</div>
<div className="hidden md:flex items-center text-xs text-neutral-500 gap-1.5 ml-4">
<span className="hover:text-neutral-300 cursor-pointer transition-colors">Workspace</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="hover:text-neutral-300 cursor-pointer transition-colors">Indicators</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-neutral-300 font-medium">SuperTrend_Custom.pine</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-2 text-xs text-neutral-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            Chart Synced
        </div>

<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors">
<iconify-icon className="text-base" icon="solar:download-square-linear"></iconify-icon>
                Export
            </button>
<button className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 px-3 py-1.5 rounded-md transition-all">
<iconify-icon className="text-base" icon="solar:play-linear"></iconify-icon>
                Compile &amp; Add to Chart
            </button>
<div className="w-px h-4 bg-white/10 mx-1 hidden sm:block"></div>
<button className="text-neutral-400 hover:text-white transition-colors hidden sm:block">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
</button>
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-900 to-neutral-800 border border-white/10 flex items-center justify-center text-xs font-medium cursor-pointer ml-1">
                JD
            </div>
</div>
</header>

<div className="flex flex-1 min-h-0 overflow-hidden">

<aside className="w-12 bg-[#0A0A0A] border-r border-white/5 flex flex-col items-center py-3 gap-6 shrink-0 z-10 hidden sm:flex">
<button className="relative text-neutral-400 hover:text-white transition-colors group">
<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-emerald-500 rounded-r-full"></div>
<iconify-icon className="text-xl text-white" icon="solar:folder-linear"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:branching-paths-up-linear"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:server-square-linear"></iconify-icon>
</button>
<div className="flex-1"></div>
<button className="text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</button>
</aside>

<aside className="w-60 bg-[#0F0F0F] border-r border-white/5 flex flex-col shrink-0 hidden md:flex">
<div className="h-10 flex items-center px-4 shrink-0">
<span className="text-xs font-medium tracking-wider text-neutral-400">EXPLORER</span>
</div>
<div className="flex-1 overflow-y-auto py-2">

<div className="px-2">
<button className="w-full flex items-center gap-1.5 px-2 py-1 text-sm text-neutral-300 hover:bg-white/5 rounded transition-colors group">
<iconify-icon className="text-xs text-neutral-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
<iconify-icon className="text-neutral-400 group-hover:text-emerald-400 transition-colors" icon="solar:folder-linear"></iconify-icon>
<span className="truncate">Indicators</span>
</button>

<div className="pl-6 mt-1 flex flex-col gap-0.5">
<button className="w-full flex items-center gap-2 px-2 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
<span className="truncate">SuperTrend_Custom.pine</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-white/5 rounded transition-colors">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
<span className="truncate">RSI_Divergence.pine</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-white/5 rounded transition-colors">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
<span className="truncate">MACD_Alerts.pine</span>
</button>
</div>
</div>

<div className="px-2 mt-2">
<button className="w-full flex items-center gap-1.5 px-2 py-1 text-sm text-neutral-300 hover:bg-white/5 rounded transition-colors group">
<iconify-icon className="text-xs text-neutral-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
<iconify-icon className="text-neutral-400 group-hover:text-emerald-400 transition-colors" icon="solar:folder-linear"></iconify-icon>
<span className="truncate">Strategies</span>
</button>
</div>

<div className="px-2 mt-2">
<button className="w-full flex items-center gap-1.5 px-2 py-1 text-sm text-neutral-300 hover:bg-white/5 rounded transition-colors group">
<iconify-icon className="text-xs text-neutral-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
<iconify-icon className="text-neutral-400 group-hover:text-emerald-400 transition-colors" icon="solar:folder-linear"></iconify-icon>
<span className="truncate">Libraries</span>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col lg:flex-row min-w-0 bg-[#050505]">

<section className="flex-1 flex flex-col min-h-0 border-b lg:border-b-0 lg:border-r border-white/5 relative z-0">

<div className="h-10 bg-[#0A0A0A] border-b border-white/5 flex items-end px-2 shrink-0 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-2 h-full px-4 border-b border-emerald-500 bg-[#050505] text-emerald-400 text-sm cursor-pointer min-w-max">
<iconify-icon className="text-xs" icon="solar:document-text-linear"></iconify-icon>
                        SuperTrend_Custom.pine
                        <iconify-icon className="ml-2 text-neutral-500 hover:text-neutral-300" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 h-full px-4 text-neutral-500 text-sm hover:bg-white/5 cursor-pointer min-w-max transition-colors">
<iconify-icon className="text-xs" icon="solar:document-text-linear"></iconify-icon>
                        RSI_Divergence.pine
                    </div>
</div>

<div className="h-7 bg-[#050505] flex items-center px-4 text-xs text-neutral-500 gap-2 shrink-0">
<span>Indicators</span>
<iconify-icon className="text-[10px]" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>SuperTrend_Custom.pine</span>
<iconify-icon className="text-[10px]" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-neutral-400">indicator()</span>
</div>

<div className="flex-1 overflow-auto flex font-mono text-sm leading-relaxed pb-4">

<div className="w-12 shrink-0 bg-[#050505] text-right pr-4 py-2 text-neutral-600 text-xs flex flex-col select-none border-r border-white/5">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
<span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
<span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
<span>16</span><span>17</span><span>18</span><span>19</span><span>20</span>
<span>21</span><span>22</span>
</div>

<div className="flex-1 p-2 pl-4 text-neutral-300 whitespace-pre overflow-x-auto">
<span className="text-neutral-500">//@version=5</span>
<span className="text-blue-400">indicator</span>(<span className="text-emerald-400">"SuperTrend Custom"</span>, <span className="text-sky-300">overlay</span>=<span className="text-rose-400">true</span>)

<span className="text-neutral-500">// Inputs</span>
<span className="text-blue-200">atrPeriod</span> = <span className="text-blue-400">input.int</span>(<span className="text-amber-300">10</span>, <span className="text-emerald-400">"ATR Length"</span>)
<span className="text-blue-200">factor</span> = <span className="text-blue-400">input.float</span>(<span className="text-amber-300">3.0</span>, <span className="text-emerald-400">"Factor"</span>, <span className="text-sky-300">step</span>=<span className="text-amber-300">0.1</span>)

<span className="text-neutral-500">// Calculate SuperTrend</span>
[<span className="text-blue-200">supertrend</span>, <span className="text-blue-200">direction</span>] = <span className="text-blue-400">ta.supertrend</span>(<span className="text-blue-200">factor</span>, <span className="text-blue-200">atrPeriod</span>)

<span className="text-neutral-500">// Colors based on direction</span>
<span className="text-blue-200">bodyMiddle</span> = <span className="text-blue-400">plot</span>((<span className="text-blue-200">open</span> + <span className="text-blue-200">close</span>) / <span className="text-amber-300">2</span>, <span className="text-sky-300">display</span>=<span className="text-blue-400">display.none</span>)
<span className="text-blue-200">upTrend</span> = <span className="text-blue-200">direction</span> &lt; <span className="text-amber-300">0</span> ? <span className="text-blue-200">supertrend</span> : <span className="text-blue-400">na</span>
<span className="text-blue-200">downTrend</span> = <span className="text-blue-200">direction</span> &lt; <span className="text-amber-300">0</span> ? <span className="text-blue-400">na</span> : <span className="text-blue-200">supertrend</span>
<span className="text-neutral-500">// Plotting</span>
<span className="text-blue-400">plot</span>(<span className="text-blue-200">bodyMiddle</span>, <span className="text-emerald-400">"Body Middle"</span>)
<span className="text-blue-400">plot</span>(<span className="text-blue-200">upTrend</span>, <span className="text-emerald-400">"Up Trend"</span>, <span className="text-sky-300">color</span>=<span className="text-blue-400">color.new</span>(<span className="text-emerald-500">color.green</span>, <span className="text-amber-300">0</span>), <span className="text-sky-300">linewidth</span>=<span className="text-amber-300">2</span>)
<span className="text-blue-400">plot</span>(<span className="text-blue-200">downTrend</span>, <span className="text-emerald-400">"Down Trend"</span>, <span className="text-sky-300">color</span>=<span className="text-blue-400">color.new</span>(<span className="text-rose-500">color.red</span>, <span className="text-amber-300">0</span>), <span className="text-sky-300">linewidth</span>=<span className="text-amber-300">2</span>)

<span className="text-neutral-500">// Fill background</span>
<span className="text-blue-400">fill</span>(<span className="text-blue-200">bodyMiddle</span>, <span className="text-blue-200">upTrend</span>, <span className="text-sky-300">color</span>=<span className="text-emerald-500">color.green</span>, <span className="text-sky-300">transp</span>=<span className="text-amber-300">90</span>)
<span className="text-blue-400">fill</span>(<span className="text-blue-200">bodyMiddle</span>, <span className="text-blue-200">downTrend</span>, <span className="text-sky-300">color</span>=<span className="text-rose-500">color.red</span>, <span className="text-sky-300">transp</span>=<span className="text-amber-300">90</span>)</div>
</div>
</section>

<section className="flex-[1.2] flex flex-col min-h-[400px] lg:min-h-0 bg-[#0E0F12] relative z-0">

<div className="h-12 border-b border-white/5 bg-[#0A0A0A] flex items-center justify-between px-3 shrink-0">
<div className="flex items-center gap-1 sm:gap-3">

<div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-white/5 cursor-pointer transition-colors">
<span className="font-medium text-sm text-white tracking-tight">BTCUSD</span>
<span className="text-xs text-neutral-500">BINANCE</span>
</div>
<div className="w-px h-4 bg-white/10 mx-1 hidden sm:block"></div>

<div className="flex items-center text-sm font-medium">
<button className="px-2 py-1 text-neutral-400 hover:text-white rounded transition-colors">1m</button>
<button className="px-2 py-1 text-neutral-400 hover:text-white rounded transition-colors">5m</button>
<button className="px-2 py-1 text-neutral-400 hover:text-white rounded transition-colors">15m</button>
<button className="px-2 py-1 text-emerald-400 bg-white/5 rounded transition-colors">1H</button>
<button className="px-2 py-1 text-neutral-400 hover:text-white rounded transition-colors">4H</button>
<button className="px-2 py-1 text-neutral-400 hover:text-white rounded transition-colors">1D</button>
</div>
<div className="w-px h-4 bg-white/10 mx-1 hidden sm:block"></div>

<button className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors hidden sm:flex">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
</button>

<button className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors hidden sm:flex">
<iconify-icon className="text-lg" icon="solar:graph-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded transition-colors">
<iconify-icon className="text-lg" icon="solar:maximize-square-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 relative chart-bg overflow-hidden flex flex-col">

<div className="absolute top-3 left-4 z-10 flex flex-col gap-1 pointer-events-none">
<div className="flex items-center gap-2 text-xs">
<span className="font-medium text-white tracking-tight">Bitcoin / U.S. Dollar</span>
<span className="text-neutral-400">1h</span>
<span className="text-neutral-400">BINANCE</span>
<div className="flex gap-1.5 ml-2 font-mono">
<span className="text-neutral-500">O</span><span className="text-emerald-400">42150.0</span>
<span className="text-neutral-500">H</span><span className="text-emerald-400">42300.5</span>
<span className="text-neutral-500">L</span><span className="text-emerald-400">42010.0</span>
<span className="text-neutral-500">C</span><span className="text-emerald-400">42280.2</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs font-mono">
<span className="text-emerald-400 font-medium">SuperTrend Custom (10, 3.0)</span>
<span className="text-emerald-500">41500.50</span>
<iconify-icon className="text-neutral-500 pointer-events-auto cursor-pointer hover:text-white" icon="solar:eye-linear"></iconify-icon>
<iconify-icon className="text-neutral-500 pointer-events-auto cursor-pointer hover:text-white" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 w-full h-full flex items-center justify-center p-4">
<svg className="w-full h-full drop-shadow-lg" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="upWick" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10B981" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#10B981" stop-opacity="0.2"></stop>
</lineargradient>
</defs>

<g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
<line x1="0" x2="800" y1="50" y2="50"></line>
<line x1="0" x2="800" y1="100" y2="100"></line>
<line x1="0" x2="800" y1="150" y2="150"></line>
<line x1="0" x2="800" y1="200" y2="200"></line>
<line x1="0" x2="800" y1="250" y2="250"></line>
</g>

<g transform="translate(50, 20)">

<line stroke="#F43F5E" strokeWidth="1.5" x1="10" x2="10" y1="120" y2="180"></line>
<rect fill="#F43F5E" height="40" width="8" x="6" y="130"></rect>
<line stroke="#F43F5E" strokeWidth="1.5" x1="30" x2="30" y1="130" y2="190"></line>
<rect fill="#F43F5E" height="30" width="8" x="26" y="150"></rect>
<line stroke="#F43F5E" strokeWidth="1.5" x1="50" x2="50" y1="140" y2="220"></line>
<rect fill="#F43F5E" height="35" width="8" x="46" y="180"></rect>

<polyline fill="none" points="0,100 20,100 20,110 40,110 40,130 60,130" stroke="#F43F5E" strokeWidth="2"></polyline>

<line stroke="#10B981" strokeWidth="1.5" x1="70" x2="70" y1="150" y2="230"></line>
<rect fill="#10B981" height="55" width="8" x="66" y="160"></rect>

<line stroke="#10B981" strokeWidth="1.5" x1="90" x2="90" y1="140" y2="200"></line>
<rect fill="#0E0F12" height="20" stroke="#10B981" strokeWidth="1.5" width="8" x="86" y="145"></rect>
<line stroke="#10B981" strokeWidth="1.5" x1="110" x2="110" y1="110" y2="180"></line>
<rect fill="#10B981" height="40" width="8" x="106" y="115"></rect>
<line stroke="#10B981" strokeWidth="1.5" x1="130" x2="130" y1="90" y2="140"></line>
<rect fill="#10B981" height="30" width="8" x="126" y="95"></rect>
<line stroke="#F43F5E" strokeWidth="1.5" x1="150" x2="150" y1="100" y2="150"></line>
<rect fill="#F43F5E" height="25" width="8" x="146" y="105"></rect>
<line stroke="#10B981" strokeWidth="1.5" x1="170" x2="170" y1="60" y2="130"></line>
<rect fill="#10B981" height="45" width="8" x="166" y="70"></rect>
<line stroke="#10B981" strokeWidth="1.5" x1="190" x2="190" y1="40" y2="100"></line>
<rect fill="#10B981" height="35" width="8" x="186" y="45"></rect>

<line className="opacity-80" stroke="#10B981" strokeWidth="1.5" x1="210" x2="210" y1="30" y2="80"></line>
<rect className="opacity-90" fill="#10B981" height="20" width="8" x="206" y="40"></rect>
<line stroke="#10B981" stroke-dasharray="2,2" strokeWidth="1" x1="206" x2="220" y1="40" y2="40"></line>
<text fill="#10B981" fontFamily="monospace" fontSize="10" x="225" y="44">42280.2</text>

<polyline fill="none" points="60,240 80,240 80,220 100,220 100,190 120,190 120,170 140,170 140,170 160,170 160,140 180,140 180,110 200,110 200,110 220,110" stroke="#10B981" strokeWidth="2"></polyline>

<polygon fill="rgba(16, 185, 129, 0.05)" points="60,240 80,240 80,220 100,220 100,190 120,190 120,170 140,170 160,170 160,140 180,140 180,110 200,110 220,110 220,40 186,45 166,70 146,105 126,95 106,115 86,145 66,160"></polygon>
</g>
</svg>
</div>

<div className="absolute right-0 top-0 bottom-6 w-14 bg-[#0A0A0A]/80 border-l border-white/5 flex flex-col justify-between py-4 text-[10px] text-neutral-500 font-mono items-center backdrop-blur-sm">
<span>43000</span>
<span>42800</span>
<span>42600</span>
<span>42400</span>
<span className="text-emerald-400 bg-emerald-500/10 w-full text-center py-0.5">42280</span>
<span>42000</span>
<span>41800</span>
<span>41600</span>
<span>41400</span>
</div>

<div className="absolute bottom-0 left-0 right-14 h-6 bg-[#0A0A0A]/80 border-t border-white/5 flex items-center justify-around px-12 text-[10px] text-neutral-500 font-mono backdrop-blur-sm">
<span>10:00</span>
<span>12:00</span>
<span>14:00</span>
<span>16:00</span>
<span>18:00</span>
<span>20:00</span>
</div>
</div>
</section>
</main>
</div>

<footer className="h-6 bg-[#007ACC] text-white flex items-center justify-between px-3 text-[10px] font-medium tracking-wide shrink-0 font-sans">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 cursor-pointer hover:text-white/80">
<iconify-icon icon="solar:branching-paths-up-linear"></iconify-icon>
                main*
            </div>
<div className="flex items-center gap-1 cursor-pointer hover:text-white/80">
<iconify-icon className="text-white/70" icon="solar:close-circle-linear"></iconify-icon> 0
                <iconify-icon className="text-white/70 ml-1" icon="solar:danger-triangle-linear"></iconify-icon> 0
            </div>
<span className="opacity-80">PineFast Ready</span>
</div>
<div className="flex items-center gap-4 opacity-90">
<span className="cursor-pointer hover:opacity-100">Ln 14, Col 22</span>
<span className="cursor-pointer hover:opacity-100">Spaces: 4</span>
<span className="cursor-pointer hover:opacity-100">UTF-8</span>
<span className="cursor-pointer hover:opacity-100">Pine Script v5</span>
<iconify-icon className="cursor-pointer hover:opacity-100 text-xs" icon="solar:bell-linear"></iconify-icon>
</div>
</footer>

    </>
  );
}
