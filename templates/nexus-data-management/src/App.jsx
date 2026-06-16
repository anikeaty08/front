import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config={darkMode:'class'}



function toggleTheme() { document.documentElement.classList.toggle('dark'); }



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
      

<nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
<div className="sm:px-6 lg:px-8 flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer w-48 hover:opacity-80 transition-opacity">
<svg className="animate-[spin_20s_linear_infinite]" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 12L12 22L22 12L12 2Z" fill="none" stroke="#FF5A1F" strokeWidth="2"></path>
<path d="M12 7L7 12L12 17L17 12L12 7Z" fill="#FF5A1F"></path>
</svg>
<span className="font-mono text-xl font-bold tracking-tighter text-white">
            NEXUS_
          </span>
</div>

<div className="hidden md:flex flex-1 justify-center items-center space-x-8">
<a className="text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-[#FF5A1F] transition-colors" href="#">
            [ Architecture ]
          </a>
<a className="text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-[#FF5A1F] transition-colors" href="#">
            [ Pipelines ]
          </a>
<a className="text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-[#FF5A1F] transition-colors" href="#">
            [ Observability ]
          </a>
<a className="text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-[#FF5A1F] transition-colors" href="#">
            [ Docs ]
          </a>
</div>

<div className="hidden md:flex items-center justify-end gap-6 w-48">
<button className="text-slate-500 hover:text-[#FF5A1F] transition-colors p-2 flex items-center justify-center mr-2" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block w-5 h-5" icon="solar:sun-linear"></iconify-icon>
<iconify-icon className="block dark:hidden w-5 h-5" icon="solar:moon-bold"></iconify-icon>
</button>
<a className="hover:text-white transition-colors text-xs font-mono tracking-widest uppercase text-slate-400" href="#">
            &gt; Sign_in
          </a>
<a className="bg-[#FF5A1F]/10 border border-[#FF5A1F]/50 text-[#FF5A1F] px-5 py-2 rounded-sm text-xs font-mono uppercase tracking-widest hover:bg-[#FF5A1F] hover:text-white transition-all hover:shadow-[0_0_15px_rgba(255,90,31,0.4)]" href="#">
            Deploy
          </a>
</div>
</div>
</nav>

<main className="sm:px-6 lg:px-8 flex flex-col max-w-7xl z-10 mr-auto ml-auto pt-40 pr-4 pb-24 pl-4 relative">
<div className="absolute inset-y-0 w-[100vw] left-1/2 -translate-x-1/2 z-[-1] bg-slate-950 overflow-hidden pointer-events-none">

<div className="absolute top-[-15%] left-[5%] w-[70vw] h-[70vw] rounded-full bg-[#FF5A1F] mix-blend-screen filter blur-[180px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#10b981] mix-blend-screen filter blur-[180px] opacity-10"></div>

<svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="tech-grid" patternunits="userSpaceOnUse" width="40">
<rect fill="none" height="40" stroke="rgba(255, 90, 31, 0.3)" strokeWidth="0.5" width="40"></rect>
<circle cx="40" cy="40" fill="rgba(255, 90, 31, 0.8)" r="1"></circle>
</pattern>
</defs>
<rect fill="url(#tech-grid)" height="100%" width="100%"></rect>
</svg>
<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[1px]"></div>
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
</div>
<div className="flex flex-col lg:flex-row gap-16 lg:gap-8 w-full gap-x-16 gap-y-16 items-center">

<div className="lg:w-1/2 flex flex-col items-start w-full relative z-20">
<div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FF5A1F] mb-8 border border-[#FF5A1F]/30 rounded-sm px-4 py-2 bg-[#FF5A1F]/5 shadow-[0_0_10px_rgba(255,90,31,0.1)] cursor-pointer group">
<div className="w-1.5 h-1.5 bg-[#FF5A1F] animate-ping"></div>
<span>&lt; Smart Data Management /&gt;</span>
</div>
<h1 className="leading-[1.1] sm:text-6xl lg:text-7xl xl:text-7xl text-5xl font-normal text-white tracking-tighter font-bricolage mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Manage your data.
            <br/>
            No extra work
            <span className="animate-pulse text-[#FF5A1F]">_</span>
</h1>
<p className="leading-relaxed text-base lg:text-lg font-mono text-slate-400 max-w-2xl mb-12 border-l-2 border-slate-800 pl-4">
            Build, launch, and track your data systems easily. Focus on your
            ideas while we handle the technical details.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-sm text-sm font-mono uppercase tracking-widest hover:bg-[#FF5A1F] hover:text-white transition-all hover:shadow-[0_0_20px_rgba(255,90,31,0.3)] flex items-center justify-center gap-3" href="#">
<div className="w-1.5 h-1.5 bg-current animate-pulse"></div>
              Start_Now
            </a>
<a className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-3 rounded-sm text-sm font-mono uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center" href="#">
              Read_Guide
            </a>
</div>
</div>

<div className="lg:w-1/2 flex z-0 w-full h-[500px] relative items-center justify-center">

<svg className="z-0 absolute top-0 right-0 bottom-0 left-0 w-[592px] h-[500px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(203, 213, 225)', width: '592px', height: '500px'}}>

<path className="text-slate-800/50" d="M 15% 5% V 15% H 25% V 30%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 5% 40% H 15% V 30%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 35% 10% V 20% H 45% V 10%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 10% 95% V 85% H 20% V 75%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 30% 90% V 70% H 40% V 80%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 85% 5% V 15% H 70% V 25%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 95% 30% H 80% V 40%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 60% 15% V 25% H 55%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 85% 95% V 85% H 75% V 70%" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-800/50" d="M 65% 90% V 70% H 55%" fill="none" stroke="currentColor" strokeWidth="1"></path>

<path d="M 10% 20% H 25% V 50% H 50%" stroke="#FF5A1F" stroke-opacity="0.2" strokeWidth="1"></path>
<path d="M 10% 80% H 35% V 50% H 50%" stroke="#FF5A1F" stroke-opacity="0.2" strokeWidth="1"></path>
<path d="M 90% 20% H 75% V 50% H 50%" stroke="#10b981" stroke-opacity="0.2" strokeWidth="1"></path>
<path d="M 90% 80% H 65% V 50% H 50%" stroke="#10b981" stroke-opacity="0.2" strokeWidth="1"></path>

<path className="animate-dash-flow" d="M 10% 20% H 25% V 50% H 50%" stroke="#FF5A1F" stroke-dasharray="4 8" stroke-opacity="0.3" strokeWidth="1"></path>
<path className="animate-dash-flow" d="M 10% 80% H 35% V 50% H 50%" stroke="#FF5A1F" stroke-dasharray="4 8" stroke-opacity="0.3" strokeWidth="1"></path>
<path className="animate-dash-flow" d="M 90% 20% H 75% V 50% H 50%" stroke="#10b981" stroke-dasharray="4 8" stroke-opacity="0.3" strokeWidth="1"></path>
<path className="animate-dash-flow" d="M 90% 80% H 65% V 50% H 50%" stroke="#10b981" stroke-dasharray="4 8" stroke-opacity="0.3" strokeWidth="1"></path>

<path d="M 10% 20% H 25% V 50% H 50%" fill="none" pathlength="100" stroke="#FF5A1F" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="2" style={{animation: 'trail-flow-svg 5s infinite linear 0s'}}></path>
<path d="M 10% 80% H 35% V 50% H 50%" fill="none" pathlength="100" stroke="#FF5A1F" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="2" style={{animation: 'trail-flow-svg 5.6s infinite linear 0.5s'}}></path>
<path d="M 90% 20% H 75% V 50% H 50%" fill="none" pathlength="100" stroke="#10b981" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="2" style={{animation: 'trail-flow-svg 4.4s infinite linear 1s'}}></path>
<path d="M 90% 80% H 65% V 50% H 50%" fill="none" pathlength="100" stroke="#10b981" stroke-dasharray="20 100" strokeLinecap="round" strokeWidth="2" style={{animation: 'trail-flow-svg 5.2s infinite linear 0.2s'}}></path>
</svg>

<div className="absolute w-2 h-2 bg-[#FF5A1F] shadow-[0_0_15px_#FF5A1F] z-10" style={{animation: 'maze-flow-1 5s infinite linear 0s'}}></div>
<div className="absolute w-2 h-2 bg-[#FF5A1F] shadow-[0_0_15px_#FF5A1F] z-10" style={{animation: 'maze-flow-2 5.6s infinite linear 0.5s'}}></div>
<div className="absolute w-2 h-2 bg-[#10b981] shadow-[0_0_15px_#10b981] z-10" style={{animation: 'maze-flow-3 4.4s infinite linear 1s'}}></div>
<div className="absolute w-2 h-2 bg-[#10b981] shadow-[0_0_15px_#10b981] z-10" style={{animation: 'maze-flow-4 5.2s infinite linear 0.2s'}}></div>

<div className="relative z-30 w-44 h-44 bg-slate-900/90 backdrop-blur-xl rounded-sm border border-[#FF5A1F]/40 shadow-[0_0_40px_rgba(255,90,31,0.15)] flex flex-col items-center justify-center group cursor-pointer transition-transform hover:scale-105 duration-500">
<div className="absolute inset-0 border border-[#FF5A1F]/20 blur-[2px] animate-pulse-ring pointer-events-none" style={{animationName: 'pulse-ring-orange', boxShadow: '0 0 0 0 rgba(255,90,31,0.2)'}}></div>

<div className="absolute w-[110%] h-[110%] border border-dashed border-[#FF5A1F]/30 rounded-full animate-spin-slow"></div>
<div className="absolute w-[130%] h-[130%] border border-[#10b981]/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
<div className="w-12 h-12 bg-black border border-[#FF5A1F]/30 rounded-sm flex items-center justify-center mb-3 relative z-10 shadow-inner">
<iconify-icon className="w-6 h-6 text-[#FF5A1F]" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-mono tracking-widest text-white relative z-10 uppercase">
              Control_Plane
            </span>
<div className="flex items-center gap-1.5 mt-2 relative z-10">
<div className="w-1.5 h-1.5 bg-[#10b981] animate-pulse"></div>
<span className="text-[10px] font-mono text-slate-500 uppercase">
                Syncing...
              </span>
</div>
</div>

<div className="absolute top-[20%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-slate-900 border border-white/10 shadow-2xl rounded-sm flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300 cursor-pointer">
<iconify-icon className="w-6 h-6 text-slate-400 mb-2" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-mono text-slate-500 uppercase">
              Ingest
            </span>
</div>
<div className="absolute top-[80%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-slate-900 border border-white/10 shadow-2xl rounded-sm flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300 cursor-pointer">
<iconify-icon className="w-6 h-6 text-slate-400 mb-2" icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-mono text-slate-500 uppercase">
              Transform
            </span>
</div>
<div className="absolute top-[20%] left-[90%] -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-slate-900 border border-white/10 shadow-2xl rounded-sm flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300 cursor-pointer">
<iconify-icon className="w-6 h-6 text-[#10b981] mb-2" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-mono text-slate-500 uppercase">
              Analytics
            </span>
</div>
<div className="absolute top-[80%] left-[90%] -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-slate-900 border border-white/10 shadow-2xl rounded-sm flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300 cursor-pointer">
<iconify-icon className="w-6 h-6 text-[#10b981] mb-2" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] font-mono text-slate-500 uppercase">
              Storage
            </span>
</div>
</div>
</div>

<div className="w-full relative mt-32 transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl z-20">
<div className="absolute -inset-0.5 bg-gradient-to-b from-[#FF5A1F]/30 to-[#10b981]/30 blur-xl opacity-50 z-0 mix-blend-screen"></div>
<div className="rounded-sm border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden relative z-10">
<div className="h-10 border-b border-slate-800 flex items-center px-4 justify-between bg-slate-900">
<div className="flex gap-2 w-1/3">
<div className="w-2.5 h-2.5 bg-slate-700 hover:bg-[#FF5A1F] transition-colors cursor-pointer"></div>
<div className="w-2.5 h-2.5 bg-slate-700 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
<div className="w-2.5 h-2.5 bg-slate-700 hover:bg-[#10b981] transition-colors cursor-pointer"></div>
</div>
<div className="flex-1 flex justify-center w-1/3">
<div className="text-[10px] font-mono text-[#FF5A1F] flex items-center gap-2 bg-black px-4 py-1 border border-slate-800">
<iconify-icon className="w-3 h-3 text-slate-500" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
                ssh root@nexus.dev/us-east
              </div>
</div>
<div className="flex items-center justify-end w-1/3 gap-2">
<div className="flex items-center gap-2 text-[#10b981] text-[10px] font-mono uppercase">
<div className="w-1.5 h-1.5 bg-[#10b981] animate-pulse"></div>
                SYS.OK
              </div>
</div>
</div>
<div className="flex h-[400px] bg-black p-6 gap-6 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_2rem] pointer-events-none mix-blend-screen"></div>
<div className="w-64 flex flex-col gap-3 relative z-10">
<div className="h-8 bg-slate-900 border border-slate-800 flex items-center px-3 gap-3 text-slate-500">
<div className="w-2 h-2 bg-slate-700"></div>
<div className="font-mono text-[10px] uppercase">init.sh</div>
</div>
<div className="h-8 bg-slate-900 border border-slate-800 flex items-center px-3 gap-3 text-[#10b981]">
<div className="w-2 h-2 bg-[#10b981]"></div>
<div className="font-mono text-[10px] uppercase">
                  monitor.config
                </div>
</div>
<div className="h-8 bg-slate-900 border border-slate-800 flex items-center px-3 gap-3 text-slate-500">
<div className="w-2 h-2 bg-slate-700"></div>
<div className="font-mono text-[10px] uppercase">
                  cluster_map.json
                </div>
</div>
</div>
<div className="flex-1 flex flex-col gap-6 relative z-10">
<div className="flex gap-4">
<div className="flex-1 h-28 bg-slate-900 border border-slate-800 p-5 flex flex-col justify-between group hover:border-[#FF5A1F]/50 transition-colors">
<div className="text-[#FF5A1F] group-hover:scale-110 transition-transform">
<iconify-icon className="w-5 h-5" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-mono text-white">14.2k</div>
<div className="text-[10px] font-mono text-slate-500 uppercase">
                      Req/s
                    </div>
</div>
</div>
<div className="flex-1 h-28 bg-slate-900 border border-slate-800 p-5 flex flex-col justify-between group hover:border-yellow-500/50 transition-colors">
<div className="text-yellow-500 group-hover:scale-110 transition-transform">
<iconify-icon className="w-5 h-5" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-mono text-white">8.4ms</div>
<div className="text-[10px] font-mono text-slate-500 uppercase">
                      Latency
                    </div>
</div>
</div>
<div className="flex-1 h-28 bg-slate-900 border border-slate-800 p-5 flex flex-col justify-between group hover:border-[#10b981]/50 transition-colors">
<div className="text-[#10b981] group-hover:scale-110 transition-transform">
<iconify-icon className="w-5 h-5" icon="solar:server-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-mono text-white">0024</div>
<div className="text-[10px] font-mono text-slate-500 uppercase">
                      Active Nodes
                    </div>
</div>
</div>
</div>
<div className="flex-1 bg-slate-900 border border-slate-800 p-6 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FF5A1F]/10 to-transparent"></div>
<svg className="w-full h-full text-[#FF5A1F]" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 30 Q10 20 20 30 T40 25 T60 35 T80 20 T100 15 L100 40 Z" fill="currentColor" fillOpacity="0.1"></path>
<path d="M0 30 Q10 20 20 30 T40 25 T60 35 T80 20 T100 15" fill="none" stroke="currentColor" strokeWidth="1" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="absolute top-1/2 left-[60%] w-2 h-2 bg-white border border-[#FF5A1F] shadow-[0_0_15px_#FF5A1F] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-black relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
<span className="text-[10px] font-mono tracking-widest text-slate-600 uppercase">
          &gt;&gt; Connected_Endpoints
        </span>
</div>
<div className="flex overflow-hidden relative w-full">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-marquee whitespace-nowrap gap-24 items-center w-max">

<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-[#FF5A1F] animate-spin-slow" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
            Node_01
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-[#10b981] animate-pulse" icon="solar:triangle-linear" strokeWidth="1.5"></iconify-icon>
            Node_02
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-white" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
            Node_03
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-[#FF5A1F] animate-[spin_4s_linear_infinite]" icon="solar:record-circle-linear" strokeWidth="1.5"></iconify-icon>
            Node_04
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-[#10b981] animate-pulse" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
            Node_05
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-white" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
            Node_06
          </div>

<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-[#FF5A1F] animate-spin-slow" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
            Node_01
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-[#10b981] animate-pulse" icon="solar:triangle-linear" strokeWidth="1.5"></iconify-icon>
            Node_02
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-white" icon="solar:hashtag-linear" strokeWidth="1.5"></iconify-icon>
            Node_03
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-[#FF5A1F] animate-[spin_4s_linear_infinite]" icon="solar:record-circle-linear" strokeWidth="1.5"></iconify-icon>
            Node_04
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-[#10b981] animate-pulse" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
            Node_05
          </div>
<div className="flex items-center gap-3 text-lg font-mono text-slate-500 uppercase">
<iconify-icon className="w-6 h-6 text-white" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
            Node_06
          </div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-[#020617]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-20 items-center">
<div className="lg:w-1/2">
<span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] mb-6 block animate-pulse">
              &gt; Consensus &amp; State
            </span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-8 leading-tight">
              Always accurate data, everywhere.
            </h2>
<p className="leading-relaxed text-base font-mono text-slate-400 mb-10">
              Nexus ensures your data settings are always up to date across all
              your systems instantly.
            </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm font-mono text-slate-300">
<div className="w-6 h-6 border border-[#FF5A1F]/50 bg-[#FF5A1F]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="w-4 h-4 text-[#FF5A1F]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
                [ Separate management and storage ]
              </li>
<li className="flex items-center gap-4 text-sm font-mono text-slate-300">
<div className="w-6 h-6 border border-[#FF5A1F]/50 bg-[#FF5A1F]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="w-4 h-4 text-[#FF5A1F]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
                [ Flexible data copying ]
              </li>
<li className="flex items-center gap-4 text-sm font-mono text-slate-300">
<div className="w-6 h-6 border border-[#FF5A1F]/50 bg-[#FF5A1F]/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="w-4 h-4 text-[#FF5A1F]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
                [ Automatic backup and recovery ]
              </li>
</ul>
</div>
<div className="lg:w-1/2 w-full">
<div className="bg-black border border-white/5 p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col gap-6">

<div className="border border-slate-800 bg-slate-900/50 p-6">
<div className="flex items-center gap-3 mb-4 text-white font-mono text-sm tracking-widest uppercase">
<iconify-icon className="w-5 h-5 text-[#FF5A1F]" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
                    Control_Plane
                  </div>
<div className="flex justify-between items-center px-4 py-3 bg-black border border-slate-800">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-[#FF5A1F] animate-ping"></div>
<div className="text-xs font-mono text-slate-300 uppercase">
                        Leader_Node
                      </div>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-slate-600 animate-pulse"></div>
<span className="text-[10px] font-mono text-slate-500 uppercase">
                          Follower
                        </span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-slate-600 animate-pulse" style={{animationDelay: '0.5s'}}></div>
<span className="text-[10px] font-mono text-slate-500 uppercase">
                          Follower
                        </span>
</div>
</div>
</div>
</div>

<div className="flex justify-center -my-3 relative z-20 h-12">
<div className="w-px h-full border-l border-dashed border-[#FF5A1F]/40 relative overflow-hidden">

<div className="absolute w-1.5 h-1.5 bg-[#FF5A1F] left-1/2 -translate-x-1/2 top-0 animate-[pulse_1s_linear_infinite]"></div>
</div>
</div>

<div className="border border-slate-800 bg-slate-900/50 p-6">
<div className="flex items-center gap-3 mb-4 text-white font-mono text-sm tracking-widest uppercase">
<iconify-icon className="w-5 h-5 text-[#10b981]" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
                    Data_Plane
                  </div>
<div className="grid grid-cols-3 gap-4">
<div className="bg-black border border-slate-800 p-4 text-center hover:border-[#10b981]/50 transition-colors">
<iconify-icon className="w-6 h-6 mx-auto mb-2 text-slate-600 group-hover:text-[#10b981] transition-colors" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-[10px] font-mono text-slate-400 uppercase">
                        Shard_01
                      </div>
</div>
<div className="bg-black border border-slate-800 p-4 text-center hover:border-[#10b981]/50 transition-colors">
<iconify-icon className="w-6 h-6 mx-auto mb-2 text-slate-600 group-hover:text-[#10b981] transition-colors delay-75" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-[10px] font-mono text-slate-400 uppercase">
                        Shard_02
                      </div>
</div>
<div className="bg-black border border-slate-800 p-4 text-center hover:border-[#10b981]/50 transition-colors">
<iconify-icon className="w-6 h-6 mx-auto mb-2 text-slate-600 group-hover:text-[#10b981] transition-colors delay-150" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-[10px] font-mono text-slate-400 uppercase">
                        Shard_03
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-black w-full z-10 border-white/5 pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<span className="text-xs font-mono uppercase tracking-widest text-[#10b981] mb-6 block">
            &gt; Platform_Capabilities
          </span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-6">
            Powerful building blocks.
          </h2>
<p className="text-base font-mono text-slate-500 max-w-3xl mx-auto">
            Fast and reliable connections. Move your data without any delays.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-900/50 border border-slate-800 p-8 flex flex-col justify-between h-[400px] group hover:border-[#10b981]/50 transition-colors duration-500">
<div>
<h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">
                [ Data_Checking ]
              </h3>
<p className="text-sm font-mono text-slate-500">
                Make sure your data is correct before it enters your system.
              </p>
</div>
<div className="flex justify-start mt-8 relative">
<div className="w-16 h-16 bg-black border border-slate-800 flex items-center justify-center relative z-10 group-hover:border-[#10b981]/50 transition-colors">
<iconify-icon className="text-[#10b981] w-8 h-8" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800 p-8 flex flex-col justify-between h-[400px] group hover:border-[#FF5A1F]/50 transition-colors duration-500 delay-75">
<div>
<h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">
                [ Reliable_Processing ]
              </h3>
<p className="text-sm font-mono text-slate-500">
                Make sure your important tasks run exactly once, without
                repeats.
              </p>
</div>
<div className="flex justify-start items-center gap-4 mt-8">
<div className="w-16 h-16 bg-black border border-slate-800 flex items-center justify-center text-slate-500 group-hover:rotate-180 transition-transform duration-700">
<iconify-icon className="w-8 h-8" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-4 h-4 bg-[#FF5A1F] shadow-[0_0_15px_#FF5A1F] animate-pulse"></div>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800 p-8 flex flex-col justify-between h-[400px] group hover:border-cyan-500/50 transition-colors duration-500 delay-150">
<div>
<h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">
                [ Built-in_Tracking ]
              </h3>
<p className="text-sm font-mono text-slate-500">
                Keep a close eye on your system and send reports anywhere.
              </p>
</div>
<div className="flex justify-start mt-8 relative">
<div className="w-16 h-16 bg-black border border-slate-800 flex items-center justify-center relative z-10 group-hover:border-cyan-500/50 transition-colors">
<iconify-icon className="text-cyan-400 w-8 h-8" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden bg-[#020617] border-b border-white/5">

<div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<span className="text-xs font-mono uppercase tracking-widest text-cyan-500 mb-6 block">
          &lt; Network_Topology /&gt;
        </span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-24">
          Easy connections.
        </h2>
<div className="relative w-full max-w-2xl mx-auto aspect-[16/9] mb-20">

<svg className="absolute inset-0 w-full h-full z-0" fill="none">

<line stroke="#06b6d4" stroke-opacity="0.2" strokeWidth="1" x1="15%" x2="50%" y1="10%" y2="50%"></line>
<line stroke="#10b981" stroke-opacity="0.2" strokeWidth="1" x1="85%" x2="50%" y1="10%" y2="50%"></line>
<line stroke="#06b6d4" stroke-opacity="0.2" strokeWidth="1" x1="5%" x2="50%" y1="50%" y2="50%"></line>
<line stroke="#10b981" stroke-opacity="0.2" strokeWidth="1" x1="95%" x2="50%" y1="50%" y2="50%"></line>
<line stroke="#06b6d4" stroke-opacity="0.2" strokeWidth="1" x1="15%" x2="50%" y1="90%" y2="50%"></line>
<line stroke="#10b981" stroke-opacity="0.2" strokeWidth="1" x1="85%" x2="50%" y1="90%" y2="50%"></line>

<line className="animate-dash-flow opacity-70" stroke="#06b6d4" stroke-dasharray="2 4" strokeWidth="1" x1="15%" x2="50%" y1="10%" y2="50%"></line>
<line className="animate-dash-flow opacity-70" stroke="#10b981" stroke-dasharray="2 4" strokeWidth="1" x1="50%" x2="85%" y1="50%" y2="10%"></line>
<line className="animate-dash-flow opacity-70" stroke="#06b6d4" stroke-dasharray="2 4" strokeWidth="1" x1="5%" x2="50%" y1="50%" y2="50%"></line>
<line className="animate-dash-flow opacity-70" stroke="#10b981" stroke-dasharray="2 4" strokeWidth="1" x1="50%" x2="95%" y1="50%" y2="50%"></line>
<line className="animate-dash-flow opacity-70" stroke="#06b6d4" stroke-dasharray="2 4" strokeWidth="1" x1="15%" x2="50%" y1="90%" y2="50%"></line>
<line className="animate-dash-flow opacity-70" stroke="#10b981" stroke-dasharray="2 4" strokeWidth="1" x1="50%" x2="85%" y1="50%" y2="90%"></line>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black border border-white/20 shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center text-white z-20 group hover:scale-105 transition-transform hover:border-cyan-500">
<svg className="animate-[spin_10s_linear_infinite]" fill="none" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 12L12 22L22 12L12 2Z" fill="none" stroke="#06b6d4" strokeWidth="1"></path>
<path d="M12 7L7 12L12 17L17 12L12 7Z" fill="#10b981"></path>
</svg>
</div>

<div className="absolute top-[10%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black border border-slate-800 flex items-center justify-center text-slate-500 z-20 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-crosshair">
<iconify-icon className="w-6 h-6" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[10%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black border border-slate-800 flex items-center justify-center text-slate-500 z-20 hover:text-[#10b981] hover:border-[#10b981] transition-all cursor-crosshair">
<iconify-icon className="w-6 h-6" icon="solar:server-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[50%] left-[5%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black border border-slate-800 flex items-center justify-center text-slate-500 z-20 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-crosshair">
<iconify-icon className="w-6 h-6" icon="solar:cloud-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[50%] left-[95%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black border border-slate-800 flex items-center justify-center text-slate-500 z-20 hover:text-[#10b981] hover:border-[#10b981] transition-all cursor-crosshair">
<iconify-icon className="w-6 h-6" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[90%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black border border-slate-800 flex items-center justify-center text-slate-500 z-20 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-crosshair">
<iconify-icon className="w-6 h-6" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute top-[90%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black border border-slate-800 flex items-center justify-center text-slate-500 z-20 hover:text-[#10b981] hover:border-[#10b981] transition-all cursor-crosshair">
<iconify-icon className="w-6 h-6" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<a className="inline-flex bg-transparent text-white border border-white/20 px-6 py-3 text-sm font-mono uppercase tracking-widest hover:bg-white/5 transition-all items-center gap-3 mt-10" href="#">
<iconify-icon className="w-5 h-5" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
          Explore_Registry
        </a>
</div>
</section>

<section className="py-32 relative z-10 bg-[#020617]">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] mb-6 block">
            &gt; Allocations
          </span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-6">
            Clear pricing.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-black p-8 border border-slate-800 flex flex-col hover:border-slate-600 transition-all duration-300">
<h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">
              [ Starter ]
            </h3>
<div className="flex items-end gap-1 mb-2">
<span className="text-5xl font-mono text-white">$0.00</span>
<span className="text-xs font-mono text-slate-500 mb-2">/mo</span>
</div>
<p className="text-xs font-mono text-slate-500 mb-8 min-h-[48px]">
              Basic features for getting started.
            </p>
<button className="w-full py-3 border border-white/20 text-white text-xs font-mono uppercase tracking-widest mb-8 hover:bg-white/5 transition-colors flex justify-center items-center gap-2 group">
              Init_Plan
              <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="text-xs font-mono text-slate-400 mb-6 uppercase border-b border-slate-800 pb-2">
              Specs
            </div>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-xs font-mono text-slate-400">
<iconify-icon className="w-4 h-4 text-slate-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Base Analytics
              </li>
<li className="flex items-start gap-3 text-xs font-mono text-slate-400">
<iconify-icon className="w-4 h-4 text-slate-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                3 IAM Users
              </li>
<li className="flex items-start gap-3 text-xs font-mono text-slate-400">
<iconify-icon className="w-4 h-4 text-slate-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Standard SLA
              </li>
</ul>
</div>

<div className="bg-black p-8 border border-slate-800 flex flex-col hover:border-slate-600 transition-all duration-300">
<h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">
              [ Growth ]
            </h3>
<div className="flex items-end gap-1 mb-2">
<span className="text-5xl font-mono text-white">$19.00</span>
<span className="text-xs font-mono text-slate-500 mb-2">/mo</span>
</div>
<p className="text-xs font-mono text-slate-500 mb-8 min-h-[48px]">
              Morefeatures for growing teams.
            </p>
<button className="w-full py-3 border border-[#FF5A1F] text-[#FF5A1F] text-xs font-mono uppercase tracking-widest mb-8 hover:bg-[#FF5A1F] hover:text-white transition-colors flex justify-center items-center gap-2 group shadow-[0_0_15px_rgba(255,90,31,0.1)] hover:shadow-[0_0_20px_rgba(255,90,31,0.3)]">
              Init_Plan
              <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="text-xs font-mono text-slate-400 mb-6 uppercase border-b border-slate-800 pb-2">
              Specs
            </div>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-xs font-mono text-slate-300">
<iconify-icon className="w-4 h-4 text-[#FF5A1F] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Advanced Analytics
              </li>
<li className="flex items-start gap-3 text-xs font-mono text-slate-300">
<iconify-icon className="w-4 h-4 text-[#FF5A1F] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                10 IAM Users
              </li>
<li className="flex items-start gap-3 text-xs font-mono text-slate-300">
<iconify-icon className="w-4 h-4 text-[#FF5A1F] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Priority SLA
              </li>
</ul>
</div>

<div className="bg-slate-900/50 p-8 border border-[#10b981]/50 flex flex-col relative transform lg:-translate-y-4 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#10b981] text-black px-3 py-1 text-[10px] font-mono uppercase tracking-widest shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              Recommended
            </div>
<h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">
              [ Scale ]
            </h3>
<div className="flex items-end gap-1 mb-2">
<span className="text-5xl font-mono text-white">$49.00</span>
<span className="text-xs font-mono text-slate-500 mb-2">/mo</span>
</div>
<p className="text-xs font-mono text-slate-500 mb-8 min-h-[48px]">
              High performance for production systems.
            </p>
<button className="w-full py-3 bg-[#10b981] text-black text-xs font-mono uppercase tracking-widest mb-8 hover:bg-[#0ea5e9] hover:text-white transition-all duration-300 flex justify-center items-center gap-2 group shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              Init_Plan
              <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="text-xs font-mono text-[#10b981] mb-6 uppercase border-b border-[#10b981]/30 pb-2">
              Specs
            </div>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-xs font-mono text-white">
<iconify-icon className="w-4 h-4 text-[#10b981] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Real-time Analytics
              </li>
<li className="flex items-start gap-3 text-xs font-mono text-white">
<iconify-icon className="w-4 h-4 text-[#10b981] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Unlimited IAM Users
              </li>
<li className="flex items-start gap-3 text-xs font-mono text-white">
<iconify-icon className="w-4 h-4 text-[#10b981] shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                24/7 Phone Support
              </li>
</ul>
</div>

<div className="bg-black p-8 border border-slate-800 flex flex-col hover:border-slate-600 transition-all duration-300">
<h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">
              [ Enterprise ]
            </h3>
<div className="flex items-end gap-1 mb-2">
<span className="text-5xl font-mono text-white tracking-tighter">Custom</span>
</div>
<p className="text-xs font-mono text-slate-500 mb-8 min-h-[48px] mt-[10px]">
              Custom solutions for global scale operations.
            </p>
<button className="w-full py-3 border border-white/20 text-white text-xs font-mono uppercase tracking-widest mb-8 hover:bg-white/5 transition-colors flex justify-center items-center gap-2 group">
              Contact_Sales
              <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="text-xs font-mono text-slate-400 mb-6 uppercase border-b border-slate-800 pb-2">
              Specs
            </div>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3 text-xs font-mono text-slate-400">
<iconify-icon className="w-4 h-4 text-slate-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                Dedicated Clusters
              </li>
<li className="flex items-start gap-3 text-xs font-mono text-slate-400">
<iconify-icon className="w-4 h-4 text-slate-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                VPC Peering
              </li>
<li className="flex items-start gap-3 text-xs font-mono text-slate-400">
<iconify-icon className="w-4 h-4 text-slate-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                White-glove Setup
              </li>
</ul>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-20 pb-10 relative overflow-hidden z-10">

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF5A1F]/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-80 transition-opacity w-fit">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 12L12 22L22 12L12 2Z" fill="none" stroke="#FF5A1F" strokeWidth="2"></path>
<path d="M12 7L7 12L12 17L17 12L12 7Z" fill="#FF5A1F"></path>
</svg>
<span className="font-mono text-lg font-bold tracking-tighter text-white">NEXUS_</span>
</div>
<p className="text-xs font-mono text-slate-500 leading-relaxed mb-6 pr-4">
              Next-generation data management. Built for engineers who care about performance and reliability.
            </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-[#FF5A1F] transition-colors" href="#">
<iconify-icon className="w-5 h-5" icon="ri:twitter-x-line"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon className="w-5 h-5" icon="ri:github-line"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-[#10b981] transition-colors" href="#">
</a></div></div></div></div></footer>
    </>
  );
}
