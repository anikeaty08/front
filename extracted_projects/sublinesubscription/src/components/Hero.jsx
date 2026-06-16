export default function Hero() {
  return (
    <section className="flex flex-col max-w-[1400px] mr-auto ml-auto pt-40 pr-6 pb-20 pl-6 items-center">
        <h1 className="text-5xl md:text-7xl tracking-tight text-center leading-[1.1] max-w-4xl font-geist font-light">
            The subscription operating<br/>system for modern scaling
        </h1>
        <p className="text-lg md:text-xl text-[#b0b3b8] mt-6 text-center max-w-2xl font-geist font-light">
            Purpose-built for managing recurring revenue and reducing churn. Designed for the AI era.
        </p>

        {/* Hero Mockup Container */}
        <div className="flex overflow-hidden bg-gradient-to-br from-[#0c0d0f] to-[#050505] w-full h-[650px] border border-[#2e2e32] rounded-xl mt-16 shadow-[0_24px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/5 transition-all duration-500 hover:shadow-[0_30px_100px_rgba(0,0,0,0.8)] hover:ring-white/10 group/mockup">
            <div className="flex flex-col bg-[#0a0c10]/80 backdrop-blur-xl w-64 border-r border-[#2e2e32] pt-4 pr-4 pb-4 pl-4 z-20">
                <div className="flex items-center justify-between mb-8 group cursor-pointer hover:bg-white/[0.04] p-1.5 -ml-1.5 rounded-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center gap-3 text-sm font-medium text-white font-geist transition-transform duration-300 group-hover:translate-x-1">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-b from-[#2a2c31] to-[#1c1d21] border border-[#3e3e42] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)] flex items-center justify-center text-xs text-white font-geist group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.6)] transition-all duration-300">S</div>
                        Subline
                    </div>
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="16" className="text-[#7e828a] group-hover:text-white transition-colors"></iconify-icon>
                </div>

                <div className="space-y-0.5 text-[13px] text-[#7e828a] font-medium">
                    <div className="flex items-center gap-2 p-1.5 rounded-md bg-white/[0.04] text-white shadow-[inset_2px_0_0_#3b82f6] relative cursor-pointer hover:bg-white/[0.06] transition-all duration-300 hover:translate-x-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-50 rounded-md pointer-events-none"></div>
                        <iconify-icon icon="solar:inbox-linear" width="16" className="text-blue-400 drop-shadow-md z-10"></iconify-icon> <span className="z-10 font-geist">Inbox</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1"><iconify-icon icon="solar:card-linear" width="16" className="transition-transform group-hover:scale-110"></iconify-icon> Subscriptions</div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1"><iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon> Invoices</div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1"><iconify-icon icon="solar:pulse-linear" width="16"></iconify-icon> Metrics</div>
                </div>

                <div className="mt-8 mb-2 text-[11px] uppercase tracking-wider font-semibold text-[#7e828a] px-1.5 font-geist">Workspace</div>
                <div className="space-y-0.5 text-[13px] text-[#7e828a] font-medium">
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1"><iconify-icon icon="solar:box-linear" width="16"></iconify-icon> Products</div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1"><iconify-icon icon="solar:ticket-linear" width="16"></iconify-icon> Coupons</div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon> More</div>
                </div>

                <div className="mt-8 mb-2 text-[11px] uppercase tracking-wider font-semibold text-[#7e828a] px-1.5 flex justify-between items-center group cursor-pointer hover:text-white transition-all duration-300 font-geist">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Favorites</span>
                    <iconify-icon icon="solar:add-circle-linear" width="14" className="opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-300"></iconify-icon>
                </div>
                <div className="space-y-0.5 text-[13px] text-[#7e828a] font-medium">
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1">
                        <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></span> Enterprise Upgrade
                    </div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1"><iconify-icon icon="solar:robot-linear" width="16"></iconify-icon> Dunning Tasks</div>
                    <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-white/[0.02] hover:text-white transition-all duration-200 cursor-pointer font-geist hover:translate-x-1">
                        <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></span> Q3 Pricing
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col bg-[#0c0d0f] relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
                <div className="h-12 border-b border-[#2e2e32] bg-[#0a0c10] flex items-center justify-between px-5 text-sm text-[#b0b3b8] shrink-0">
                    <div className="flex items-center gap-3 cursor-pointer group/title">
                        <span className="text-white font-medium font-geist group-hover/title:text-blue-400 transition-colors">Enterprise Upgrade</span>
                        <div className="flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full text-[11px] font-medium text-yellow-500 font-geist group-hover/title:bg-yellow-500/20 transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.8)] animate-pulse"></span>
                            Pending Approval
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                        <span className="font-mono text-[#7e828a] font-geist">02 / 145</span>
                        <div className="flex gap-1">
                            <button className="w-6 h-6 flex items-center justify-center bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded shadow-sm hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-[#b0b3b8] hover:text-white">
                                <iconify-icon icon="solar:alt-arrow-up-linear" width="14"></iconify-icon>
                            </button>
                            <button className="w-6 h-6 flex items-center justify-center bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded shadow-sm hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-[#b0b3b8] hover:text-white">
                                <iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 p-8 overflow-y-auto no-scrollbar">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl tracking-tight text-white mb-4 font-geist font-light">Enterprise Upgrade - Acme Corp</h2>
                            <p className="text-[15px] leading-relaxed text-[#b0b3b8] mb-12 font-geist">
                                Negotiated custom pricing for Acme Corp. Need to apply a 
                                <code className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded text-[13px] font-mono shadow-sm font-geist mx-1 hover:bg-blue-500/20 transition-colors cursor-default">15% discount</code> 
                                on top of usage tiers and set net-60 invoice terms.
                            </p>

                            <div className="text-xs uppercase tracking-wider font-semibold text-[#7e828a] border-b border-[#2e2e32] pb-2 mb-8 font-geist">Activity</div>

                            <div className="space-y-4">
                                <div className="flex gap-4 group p-2 -mx-2 rounded-xl hover:bg-white/[0.02] transition-all duration-300 cursor-pointer">
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0 font-geist group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">S</div>
                                    <div className="text-[13px] leading-relaxed pt-1 group-hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-white font-medium font-geist mr-1">Subline</span>
                                        <span className="text-[#7e828a] font-geist">created the record via Salesforce integration</span>
                                        <span className="text-[#7e828a] text-[11px] ml-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist">2min ago</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 group p-2 -mx-2 rounded-xl hover:bg-white/[0.02] transition-all duration-300 cursor-pointer">
                                    <div className="w-7 h-7 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                                        <iconify-icon icon="solar:stars-bold" width="18" className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"></iconify-icon>
                                    </div>
                                    <div className="text-[13px] leading-relaxed pt-0.5 group-hover:translate-x-1 transition-transform duration-300">
                                        <span className="text-white font-medium font-geist mr-1">Billing Intelligence</span>
                                        <span className="text-[#7e828a] font-geist">added tags Enterprise and Custom Terms</span>
                                        <span className="text-[#7e828a] text-[11px] ml-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist">2min ago</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 group p-2 -mx-2 rounded-xl hover:bg-white/[0.02] transition-all duration-300 cursor-pointer">
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0 font-geist group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">K</div>
                                    <div className="pt-0.5 group-hover:translate-x-1 transition-transform duration-300">
                                        <div className="text-[13px] mb-1">
                                            <span className="text-white font-medium font-geist">kant</span>
                                            <span className="text-[#7e828a] text-[11px] ml-2 opacity-0 group-hover:opacity-100 transition-opacity font-geist">4 min ago</span>
                                        </div>
                                        <p className="text-[14px] leading-relaxed text-[#b0b3b8] font-geist">The contract is signed. Can we automate the discount application for their upcoming cycle?</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 relative group p-2 -mx-2 rounded-xl hover:bg-white/[0.02] transition-all duration-300 cursor-pointer">
                                    <div className="absolute left-[13px] top-10 bottom-0 w-px bg-gradient-to-b from-[#2e2e32] to-transparent"></div>
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0 z-10 font-geist group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">J</div>
                                    <div className="w-full pt-0.5 group-hover:translate-x-1 transition-transform duration-300">
                                        <div className="text-[13px] mb-1">
                                            <span className="text-white font-medium font-geist">jori</span>
                                            <span className="text-[#7e828a] text-[11px] ml-2 font-geist">just now</span>
                                        </div>
                                        <p className="text-[14px] text-white mb-4 font-geist"><span className="text-blue-400 font-medium bg-blue-500/10 px-1 rounded cursor-pointer hover:bg-blue-500/20 transition-colors font-geist mr-1">@Subline Agent</span>can you draft this pricing update?</p>

                                        <div className="bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md border border-white/5 ring-1 ring-white/5 rounded-xl p-4 mb-4 shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:border-white/10">
                                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <iconify-icon icon="solar:server-square-bold" width="16" className="text-blue-400"></iconify-icon>
                                                <span className="text-[13px] font-medium text-white font-geist">Subline Agent</span>
                                            </div>
                                            <div className="text-[13px] text-[#b0b3b8] flex items-center gap-2 font-geist">
                                                <iconify-icon icon="solar:refresh-circle-linear" width="14" className="animate-spin text-blue-500"></iconify-icon> 
                                                Formulating plan <span className="font-mono text-xs bg-white/5 px-1 py-0.5 rounded text-white border border-white/5 font-geist hover:bg-white/10 transition-colors cursor-pointer">SUB-2703</span>
                                                <span className="w-1 h-3 bg-blue-500 animate-pulse ml-1"></span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-[12px] text-[#7e828a] mt-2 font-geist group-hover/status:text-[#b0b3b8] transition-colors">
                                            <iconify-icon icon="solar:robot-linear" width="14"></iconify-icon> 
                                            Subline Agent moved from Todo to <span className="text-white font-geist hover:underline cursor-pointer">Pending Approval</span> · just now
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-80 border-l border-[#2e2e32] bg-[#08090b] flex flex-col shadow-[-4px_0_24px_rgba(0,0,0,0.2)] z-10 transition-transform duration-500 group-hover/mockup:translate-x-0">
                        <div className="p-5 border-b border-[#2e2e32] bg-[#0c0d0f]/50">
                            <div className="text-[11px] font-mono text-[#7e828a] tracking-wider mb-2 font-geist hover:text-white transition-colors cursor-pointer">SUB-2703</div>
                            <div className="space-y-4 mt-6">
                                <div className="flex justify-between items-center text-[13px] group/item cursor-pointer">
                                    <span className="text-[#7e828a] font-geist group-hover/item:text-white transition-colors">Value</span>
                                    <span className="text-white font-medium flex items-center gap-1.5 font-geist group-hover/item:scale-105 transition-transform"><iconify-icon icon="solar:chart-square-linear" className="text-green-500"></iconify-icon> $125k ARR</span>
                                </div>
                                <div className="flex justify-between items-center text-[13px] group/item cursor-pointer">
                                    <span className="text-[#7e828a] font-geist group-hover/item:text-white transition-colors">Owner</span>
                                    <span className="text-white flex items-center gap-1.5 font-geist group-hover/item:scale-105 transition-transform">
                                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-[8px] text-white font-geist">J</div> jori
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-[13px] group/item cursor-pointer">
                                    <span className="text-[#7e828a] font-geist group-hover/item:text-white transition-colors">Agent</span>
                                    <span className="text-white flex items-center gap-1.5 font-geist group-hover/item:scale-105 transition-transform"><iconify-icon icon="solar:server-square-bold" className="text-blue-400"></iconify-icon> Subline</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-5 flex flex-col bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_50%)]">
                            <div className="flex items-center justify-between mb-6 group/header cursor-pointer">
                                <div className="flex items-center gap-2 text-[13px] font-medium text-white font-geist transition-transform duration-300 group-hover/header:translate-x-1">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    Active Session
                                </div>
                                <iconify-icon icon="solar:close-circle-linear" width="16" className="text-[#7e828a] hover:text-white hover:rotate-90 cursor-pointer transition-all duration-300"></iconify-icon>
                            </div>

                            <div className="flex-1 space-y-5 text-[13px] leading-relaxed text-[#b0b3b8] overflow-y-auto pr-2 no-scrollbar">
                                <p className="text-white font-geist hover:translate-x-1 transition-transform duration-300">I received your request and will draft the pricing schedule.</p>
                                
                                <div className="space-y-2 border-l-2 border-[#2e2e32] pl-3 ml-1 group/logs hover:border-blue-500/50 transition-colors">
                                    <p className="flex items-center gap-2 font-geist transition-transform duration-300 group-hover/logs:translate-x-1">
                                        <iconify-icon icon="solar:check-circle-bold" className="text-green-500"></iconify-icon>
                                        Load <code className="text-[11px] font-mono bg-[#15171b] border border-[#2e2e32] px-1.5 py-0.5 rounded text-white font-geist mx-1 hover:bg-white/10 transition-colors cursor-default">acme_corp</code> profile
                                    </p>
                                    <p className="flex items-center gap-2 font-geist transition-transform duration-300 group-hover/logs:translate-x-1">
                                        <iconify-icon icon="solar:check-circle-bold" className="text-green-500"></iconify-icon>
                                        Load <code className="text-[11px] font-mono bg-[#15171b] border border-[#2e2e32] px-1.5 py-0.5 rounded text-white font-geist mx-1 hover:bg-white/10 transition-colors cursor-default">enterprise_base</code> tier
                                    </p>
                                </div>

                                <p className="font-geist hover:translate-x-1 transition-transform duration-300">I'll start by applying a flat 15% discount override to the existing structure and adjusting the payment terms to <code className="text-[11px] font-mono text-blue-400 font-geist mx-1 hover:bg-blue-500/10 px-1 rounded transition-colors cursor-default">net_60</code>.</p>
                                
                                <div className="bg-[#050505] p-3 rounded-lg border border-[#2e2e32] shadow-inner font-mono text-[11px] relative overflow-hidden font-geist hover:border-[#3e3e42] hover:shadow-black/50 transition-all duration-300 cursor-pointer group/terminal">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 group-hover/terminal:w-1.5 transition-all duration-300"></div>
                                    <span className="text-blue-400 font-geist group-hover/terminal:text-blue-300 transition-colors">API &gt; </span> <span className="group-hover/terminal:ml-1 transition-all duration-300 inline-block">Calculating projected invoice totals...</span>
                                </div>
                                
                                <div className="text-[12px] text-[#7e828a] hover:text-white cursor-pointer transition-colors inline-flex items-center gap-1.5 font-geist hover:translate-x-1 duration-300">
                                    <iconify-icon icon="solar:eye-linear"></iconify-icon> View draft diff
                                </div>

                                <div className="flex items-center gap-2 text-blue-400 font-medium mt-4 font-geist">
                                    <iconify-icon icon="solar:refresh-circle-line-duotone" width="18" className="animate-spin"></iconify-icon> Processing payload
                                </div>
                            </div>

                            <div className="mt-4 bg-[#0a0c10] border border-[#2e2e32] rounded-xl p-1.5 flex items-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] focus-within:ring-1 focus-within:ring-blue-500/30 focus-within:-translate-y-0.5 transition-all duration-300">
                                <input type="text" placeholder="Message Subline Agent..." className="bg-transparent border-none outline-none text-[13px] text-white w-full px-2 placeholder-[#7e828a]" />
                                <div className="flex gap-1 shrink-0">
                                    <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/5 hover:scale-105 active:scale-95 text-[#7e828a] hover:text-white transition-all duration-200">
                                        <iconify-icon icon="solar:paperclip-linear" width="16"></iconify-icon>
                                    </button>
                                    <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-400/50 text-white shadow-sm hover:brightness-110 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
                                        <iconify-icon icon="solar:arrow-up-linear" width="14" style={{ strokeWidth: 2 }}></iconify-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}