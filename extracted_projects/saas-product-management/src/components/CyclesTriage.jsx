import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function CyclesTriage() {
  const data = [
    { name: 'Apr 22', scope: 100, progress: 0 },
    { name: 'Apr 25', scope: 100, progress: 15 },
    { name: 'Apr 29', scope: 90, progress: 30 },
    { name: 'May 02', scope: 90, progress: 55 },
    { name: 'May 06', scope: 85, progress: 85 },
  ];

  return (
    <section className="overflow-hidden group/section text-[#F7F8F8] bg-[#050505] w-full border-white/5 border-t border-b relative">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
          
          <div className="p-8 md:p-16 flex flex-col gap-10 group/cycles hover:bg-white/[0.01] transition-colors duration-500">
            <div className="max-w-md z-10">
              <h3 className="text-2xl md:text-[26px] font-medium tracking-tight mb-3 text-white">
                Build momentum with Cycles
              </h3>
              <p className="text-[17px] text-[#8A8F98] leading-relaxed font-normal">
                Create healthy routines and focus your team on what work should happen next.
              </p>
            </div>

            <div className="relative w-full aspect-[4/3] bg-[#0E0F11] border border-white/5 rounded-xl overflow-hidden shadow-2xl p-6 flex flex-col group-hover/cycles:border-white/10 transition-colors duration-500">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"></div>

              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-white text-[13px] font-medium tracking-tight">
                    <iconify-icon icon="solar:refresh-circle-linear" width="16" height="16" className="text-[#888]"></iconify-icon>
                    Cycle 55
                  </div>
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                </div>

                <div className="flex items-center gap-4 text-[11px] font-medium text-[#666]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#444]"></div> Scope
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] shadow-[0_0_6px_rgba(94,106,210,0.4)]"></div> Progress
                  </div>
                </div>
              </div>

              <div className="relative flex-1 w-full mt-2 z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5E6AD2" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#5E6AD2" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#555' }} dy={10} />
                    <Tooltip contentStyle={{ backgroundColor: '#1A1B1E', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                    <Area type="monotone" dataKey="progress" stroke="#5E6AD2" strokeWidth={3} fillOpacity={1} fill="url(#colorProgress)" />
                    <Area type="stepAfter" dataKey="scope" stroke="#444" strokeDasharray="3 3" fill="none" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>

                <div className="absolute top-[10%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 animate-[fade-in-up_0.6s_ease-out_1.4s_forwards] pointer-events-none">
                    <div className="bg-[#1A1B1E]/90 backdrop-blur-md border border-white/10 p-2.5 rounded-lg shadow-xl flex flex-col gap-1 min-w-[100px]">
                        <div className="flex items-center justify-between gap-3">
                            <span className="text-[10px] text-[#888] font-medium uppercase tracking-wider">Velocity</span>
                            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        </div>
                        <div className="flex items-end gap-1.5">
                            <span className="text-[16px] font-medium text-white tracking-tight">42 pts</span>
                            <span className="text-[10px] text-emerald-400 font-mono mb-0.5">▲12%</span>
                        </div>
                    </div>
                    <div className="w-px h-4 bg-white/20 mx-auto"></div>
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full mx-auto -mt-0.5"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-16 flex flex-col gap-10 group/triage hover:bg-white/[0.01] transition-colors duration-500">
            <div className="max-w-md z-10">
              <h3 className="text-2xl md:text-[26px] font-medium tracking-tight mb-3 text-white">Manage incoming work with Triage</h3>
              <p className="text-lg text-[#8A8F98] leading-relaxed font-normal">Review and assign incoming bug reports, feature requests, and other unplanned work.</p>
            </div>

            <div className="relative w-full aspect-[4/3] bg-[#0E0F11] border border-white/5 rounded-xl overflow-hidden shadow-2xl group-hover/triage:border-white/10 transition-colors duration-500">
              <div className="h-10 border-b border-white/5 flex items-center px-4 bg-[#141517]">
                <span className="text-[12px] font-medium text-[#888]">Triage</span>
              </div>

              <div className="p-2 space-y-1 relative">
                
                <div className="p-3 rounded-md bg-[#1A1C1E] border border-white/5 flex items-start gap-3 relative group/item">
                  <div className="mt-0.5 w-4 h-4 rounded-sm border border-white/20 flex items-center justify-center text-[8px] text-[#888] font-bold">P</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] text-[#EEE] font-medium mb-1 truncate">Users report unexpected rate limiting</div>
                    <div className="flex items-center gap-2 text-[11px] text-[#666]">
                      <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full bg-[#333] flex items-center justify-center text-[7px] text-white">TM</div> tom</div>
                      <span>•</span>
                      <span>API Core</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-[20px] left-[60px] w-[180px] bg-[#1A1B1E] border border-white/10 rounded-lg shadow-[0_20px_40px_-5px_rgba(0,0,0,0.6)] py-1 z-20 animate-in fade-in zoom-in-95 duration-200 origin-top-left">
                    <div className="px-2 py-1.5 flex items-center gap-2.5 hover:bg-white/5 rounded mx-1 cursor-pointer text-[#CCC] transition-colors">
                      <iconify-icon icon="solar:check-read-linear" className="text-[#888]"></iconify-icon>
                      <span className="text-[13px]">Accept</span>
                      <span className="ml-auto text-[10px] text-[#555] font-mono">E</span>
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 hover:bg-white/5 rounded mx-1 cursor-pointer text-[#CCC] transition-colors">
                      <iconify-icon icon="solar:copy-linear" className="text-[#888]"></iconify-icon>
                      <span className="text-[13px]">Mark as duplicate</span>
                    </div>
                    <div className="h-px bg-white/5 my-1 mx-1"></div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 hover:bg-white/5 rounded mx-1 cursor-pointer text-[#CCC] transition-colors">
                      <iconify-icon icon="solar:close-circle-linear" className="text-[#888]"></iconify-icon>
                      <span className="text-[13px]">Decline</span>
                      <span className="ml-auto text-[10px] text-[#555] font-mono">Cmd+D</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-md hover:bg-white/[0.02] flex items-start gap-3 opacity-60">
                  <div className="mt-0.5 w-4 h-4 rounded-sm border border-white/10 flex items-center justify-center text-[8px] text-[#555]">!</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] text-[#AAA] font-medium mb-1 truncate">RangeError: Maximum call stack size exceeded</div>
                    <div className="flex items-center gap-2 text-[11px] text-[#555]">
                      <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full bg-[#222]"></div> romain</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-md hover:bg-white/[0.02] flex items-start gap-3 opacity-40">
                  <div className="mt-0.5 w-4 h-4 rounded-sm border border-white/10"></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] text-[#AAA] font-medium mb-1 truncate">Pressing "Enter" quickly when logging in via email</div>
                    <div className="flex items-center gap-2 text-[11px] text-[#555]">
                      <div className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 rounded-full bg-[#222]"></div> tuomas</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[130px] left-[140px] z-30 pointer-events-none drop-shadow-xl text-white">
                  <iconify-icon icon="solar:cursor-default-bold" width="24" height="24"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}