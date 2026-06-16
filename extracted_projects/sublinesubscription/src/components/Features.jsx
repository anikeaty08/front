export default function Features() {
  return (
    <>
      {/* Feature 1 */}
      <section className="max-w-[1200px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
              <h2 className="text-4xl md:text-5xl tracking-tight text-white leading-tight font-geist font-light">Make revenue recovery self-driving</h2>
              <div>
                  <p className="text-lg text-[#b0b3b8] leading-relaxed font-geist">Turn failed payments and churn risks into automated workflows that route
                      to the right sequence, reducing involuntary churn silently.</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors group font-geist">
                      1.0 Recovery 
                      <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" className="transform transition-transform group-hover:translate-x-1"></iconify-icon>
                  </a>
              </div>
          </div>

          <div className="w-full rounded-xl border border-[#2e2e32] bg-[#0c0d0f] h-[500px] flex overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/5 relative">
              <div className="w-1/2 border-r border-[#2e2e32] p-6 flex flex-col bg-gradient-to-b from-[#0a0c10] to-[#0c0d0f] z-10">
                  <div className="flex items-center justify-between mb-8 text-sm text-[#b0b3b8] border-b border-[#2e2e32] pb-4">
                      <div className="flex items-center gap-2 font-medium font-geist">
                          <iconify-icon icon="solar:hashtag-linear" width="16" height="16"></iconify-icon> 
                          Thread in <span className="text-white font-geist">#billing-alerts</span>
                      </div>
                      <button className="hover:text-white transition-colors">
                          <iconify-icon icon="solar:menu-dots-circle-linear" width="18" height="18"></iconify-icon>
                      </button>
                  </div>

                  <div className="flex-1 space-y-6 overflow-hidden relative">
                      <div className="flex gap-4 group">
                          <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/10 shrink-0">
                              <img src="https://webassets.linear.app/images/ornj730p/production/f79251b06e9edeeacbf2875384defe629e000b3c-352x352.png?w=72&q=95&auto=format&dpr=2" alt="lena" className="w-full h-full object-cover" />
                          </div>
                          <div>
                              <div className="text-sm flex items-baseline gap-2">
                                  <span className="font-medium text-white font-geist">lena</span>
                                  <span className="text-[#7e828a] text-xs font-geist">1:27 PM</span>
                              </div>
                              <p className="text-sm text-[#b0b3b8] mt-1 leading-relaxed font-geist">Acme Corp's primary card just failed on their annual renewal. Risk is <span className="text-red-400 font-medium font-geist">$125k ARR</span>.</p>
                          </div>
                      </div>
                      
                      <div className="flex gap-4 group">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-sm font-medium text-white ring-1 ring-white/10 shrink-0 font-geist">d</div>
                          <div>
                              <div className="text-sm flex items-baseline gap-2">
                                  <span className="font-medium text-white font-geist">didier</span>
                                  <span className="text-[#7e828a] text-xs font-geist">1:27 PM</span>
                              </div>
                              <p className="text-sm text-[#b0b3b8] mt-1 leading-relaxed font-geist">Looks like an expired card issue. We shouldn't pause their account yet.</p>
                          </div>
                      </div>

                      <div className="flex gap-4 group">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-sm font-medium text-white ring-1 ring-white/10 shrink-0 font-geist">a</div>
                          <div>
                              <div className="text-sm flex items-baseline gap-2">
                                  <span className="font-medium text-white font-geist">andreas</span>
                                  <span className="text-[#7e828a] text-xs font-geist">1:27 PM</span>
                              </div>
                              <p className="text-sm text-[#b0b3b8] mt-1 leading-relaxed font-geist">I'll have Subline trigger the grace-period sequence and email their billing contact.</p>
                          </div>
                      </div>
                  </div>

                  <div className="mt-4 bg-[#15171b] border border-[#2e2e32] focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all rounded-xl p-3 flex flex-col gap-3 shadow-inner">
                      <div className="text-sm text-white flex items-center gap-1">
                          <span className="text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded font-medium shadow-[0_0_8px_rgba(96,165,250,0.2)] font-geist">@Subline</span>
                          <span className="font-geist">initialize dunning sequence for Acme</span>
                          <span className="w-0.5 h-4 bg-blue-500 animate-pulse ml-0.5"></span>
                      </div>
                      <div className="flex justify-between items-center text-[#7e828a]">
                          <div className="flex gap-3">
                              <button className="hover:text-white transition-colors"><iconify-icon icon="solar:add-circle-linear" width="18" height="18"></iconify-icon></button>
                              <button className="hover:text-white transition-colors"><iconify-icon icon="solar:smile-circle-linear" width="18" height="18"></iconify-icon></button>
                              <button className="hover:text-white transition-colors"><iconify-icon icon="solar:mention-circle-linear" width="18" height="18"></iconify-icon></button>
                          </div>
                          <button className="text-blue-500 hover:text-blue-400 transition-colors bg-blue-500/10 p-1.5 rounded-md">
                              <iconify-icon icon="solar:plain-2-bold" width="16" height="16" className="transform -rotate-45"></iconify-icon>
                          </button>
                      </div>
                  </div>
              </div>

              <div className="w-1/2 p-6 bg-[#0c0d0f] flex gap-5 overflow-hidden relative">
                <div className="opacity-10 absolute top-0 right-0 bottom-0 left-0"></div>
                <div className="flex-1 flex flex-col gap-3 min-w-[200px] z-10">
                  <div className="text-sm font-medium text-white flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-geist">
                      <span className="w-2 h-2 rounded-full border-2 border-[#7e828a]"></span> Failed
                    </div>
                    <span className="text-[#7e828a] text-xs bg-white/5 px-2 py-0.5 rounded-full font-geist">12</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-3 bg-white/[0.01] rounded-xl p-2 border border-white/[0.02]">
                    <div className="bg-[#15171b] border border-[#2e2e32] rounded-lg p-3 flex flex-col gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="text-xs text-[#7e828a] font-mono font-geist">INV-826</div>
                      <div className="text-sm text-white font-medium font-geist">Startup Plan - TechFlow</div>
                      <div className="flex gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded font-geist">Insufficient Funds</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#1c1f26] to-[#15171b] border border-blue-500/30 rounded-lg p-3 flex flex-col gap-2.5 relative shadow-[0_4px_20px_rgba(59,130,246,0.1)] transform scale-[1.02] transition-transform">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-blue-400 font-mono font-geist">INV-508</div>
                        <img src="https://webassets.linear.app/images/ornj730p/production/f79251b06e9edeeacbf2875384defe629e000b3c-352x352.png?w=72&q=95&auto=format&dpr=2" alt="" className="w-5 h-5 rounded-full ring-1 ring-white/10 opacity-50" />
                      </div>
                      <div className="text-sm text-white font-medium font-geist">Enterprise - Acme Corp</div>
                      <div className="flex gap-2 mt-1">
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded flex items-center gap-1 font-geist">
                          <iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Recovery
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#15171b] border border-[#2e2e32] rounded-lg p-3 flex flex-col gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="text-xs text-[#7e828a] font-mono font-geist">INV-992</div>
                      <div className="text-sm text-white font-medium font-geist">Agency Tier - CreativeBox</div>
                      <div className="flex gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded font-geist">Card Expired</span>
                      </div>
                    </div>

                    <div className="bg-[#15171b] border border-[#2e2e32] rounded-lg p-3 flex flex-col gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="text-xs text-[#7e828a] font-mono font-geist">INV-1104</div>
                      <div className="text-sm text-white font-medium font-geist">Usage Overage - CloudFlow</div>
                      <div className="flex gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded font-geist">Do Not Honor</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-3 min-w-[200px] z-10">
                  <div className="text-sm font-medium text-white flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 font-geist">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></span> In Recovery
                    </div>
                    <span className="text-[#7e828a] text-xs bg-white/5 px-2 py-0.5 rounded-full font-geist">8</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-3 bg-white/[0.01] rounded-xl p-2 border border-white/[0.02]">
                    <div className="bg-[#15171b] border border-[#2e2e32] rounded-lg p-3 flex flex-col gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="text-xs text-[#7e828a] font-mono font-geist">INV-1487</div>
                      <div className="text-sm text-[#b0b3b8] font-medium font-geist">Pro Plan - DesignCo</div>
                    </div>

                    <div className="bg-[#15171b] border border-[#2e2e32] rounded-lg p-3 flex flex-col gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="text-xs text-[#7e828a] font-mono font-geist">INV-1028</div>
                      <div className="text-sm text-[#b0b3b8] font-medium font-geist">Basic Plan - WebDev</div>
                      <div className="flex gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded font-geist">Retrying</span>
                      </div>
                    </div>

                    <div className="bg-[#15171b] border border-[#2e2e32] rounded-lg p-3 flex flex-col gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="text-xs text-[#7e828a] font-mono font-geist">INV-902</div>
                      <div className="text-sm text-[#b0b3b8] font-medium font-geist">Enterprise - Zenith Corp</div>
                      <div className="flex gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2 py-0.5 rounded font-geist">Grace Period</span>
                      </div>
                    </div>

                    <div className="bg-[#15171b] border border-[#2e2e32] rounded-lg p-3 flex flex-col gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="text-xs text-[#7e828a] font-mono font-geist">INV-775</div>
                      <div className="text-sm text-[#b0b3b8] font-medium font-geist">Team Plan - DataSync</div>
                      <div className="flex gap-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded font-geist">Dunning Day 3</span>
                      </div>
                    </div>

                    <div className="bg-[#15171b] border border-[#2e2e32] rounded-lg p-3 flex flex-col gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="text-xs text-[#7e828a] font-mono font-geist">INV-612</div>
                      <div className="text-sm text-[#b0b3b8] font-medium font-geist">Starter Plan - NeoUI</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0c0d0f] to-transparent pointer-events-none z-20"></div>
              </div>
          </div>
      </section>

      {/* Feature 2 */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
              <h2 className="text-4xl md:text-5xl tracking-tight font-geist font-light">Define pricing and packaging</h2>
              <div>
                  <p className="text-lg text-[#b0b3b8] font-geist">Plan and navigate pricing changes effortlessly. Align your team on tier structures, usage limits, and seamless grandfathering.</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-normal text-[#b0b3b8] hover:text-white transition-colors font-geist">2.0 Plans <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon></a>
              </div>
          </div>

          <div className="w-full rounded-xl border border-[#2e2e32] bg-[#0c0d0f] h-[400px] flex flex-col overflow-hidden">
              <div className="flex border-b border-[#2e2e32] bg-[#0a0c10]">
                  <div className="w-64 border-r border-[#2e2e32] p-4 text-sm font-normal text-white flex items-center font-geist">Pricing Rollouts</div>
                  <div className="flex-1 flex text-xs text-[#7e828a] overflow-hidden">
                      <div className="flex-1 flex flex-col border-r border-[#2e2e32]">
                          <div className="text-center py-2 border-b border-[#2e2e32] font-geist">MAR</div>
                          <div className="flex justify-around py-1"><span className="opacity-50 font-geist">16</span><span className="font-geist">23</span><span className="font-geist">2</span><span className="font-geist">9</span><span className="font-geist">16</span><span className="font-geist">23</span><span className="font-geist">30</span></div>
                      </div>
                       <div className="flex-1 flex flex-col border-r border-[#2e2e32]">
                          <div className="text-center py-2 border-b border-[#2e2e32] text-white font-geist">APR</div>
                          <div className="flex justify-around py-1"><span className="font-geist">6</span><span className="font-geist">13</span><span className="font-geist">20</span><span className="font-geist">27</span><span className="text-white font-geist">4</span><span className="font-geist">11</span></div>
                      </div>
                      <div className="flex-1 flex flex-col border-r border-[#2e2e32]">
                          <div className="text-center py-2 border-b border-[#2e2e32] font-geist">MAY</div>
                          <div className="flex justify-around py-1"><span className="font-geist">18</span><span className="font-geist">25</span><span className="font-geist">1</span><span className="font-geist">8</span><span className="font-geist">15</span></div>
                      </div>
                      <div className="flex-1 flex flex-col border-r border-[#2e2e32]">
                          <div className="text-center py-2 border-b border-[#2e2e32] font-geist">JUN</div>
                          <div className="flex justify-around py-1"><span className="font-geist">22</span><span className="font-geist">29</span><span className="font-geist">6</span><span className="font-geist">13</span><span className="font-geist">20</span></div>
                      </div>
                  </div>
              </div>

              <div className="flex-1 flex">
                  <div className="w-64 border-r border-[#2e2e32] bg-[#0a0c10] p-2 space-y-1">
                      <div className="flex items-center justify-between p-2 rounded bg-white/5">
                          <div className="flex items-center gap-2 text-sm text-white font-geist"><span className="w-2 h-2 rounded bg-blue-500"></span> V2 Pricing</div>
                      </div>
                      <div className="flex items-center justify-between p-2 pl-6">
                          <div className="flex items-center gap-2 text-sm text-[#b0b3b8] font-geist"><iconify-icon icon="solar:layers-linear" width="16" height="16" className="text-blue-400"></iconify-icon> Base Tiers</div>
                      </div>
                       <div className="flex items-center justify-between p-2 pl-6">
                          <div className="flex items-center gap-2 text-sm text-[#b0b3b8] font-geist"><iconify-icon icon="solar:bolt-linear" width="16" height="16" className="text-purple-400"></iconify-icon> Usage Add-ons</div>
                      </div>

                      <div className="flex items-center justify-between p-2 mt-4">
                          <div className="flex items-center gap-2 text-sm text-white font-geist"><span className="w-2 h-2 rounded bg-red-500"></span> Legacy Migration</div>
                      </div>
                      <div className="flex items-center justify-between p-2 pl-6">
                          <div className="flex items-center gap-2 text-sm text-[#b0b3b8] font-geist"><span className="w-4 h-4 rounded-full bg-red-900 flex items-center justify-center text-xs text-red-300 font-geist">G</span> Grandfathering</div>
                      </div>
                  </div>

                  <div className="flex-1 relative bg-[radial-gradient(#2e2e32_1px,transparent_1px)] [background-size:24px_24px] opacity-80 overflow-hidden">
                      <div className="absolute inset-y-0 left-[25%] w-px bg-[#2e2e32]"></div>
                      <div className="absolute inset-y-0 left-[50%] w-px bg-[#2e2e32]"></div>
                      <div className="absolute inset-y-0 left-[75%] w-px bg-[#2e2e32]"></div>
                      
                      <div className="absolute inset-y-0 left-[35%] w-px bg-blue-500/50 shadow-[0_0_8px_rgba(59,130,246,0.5)] z-0"></div>

                      <div className="absolute top-[50px] left-[15%] w-[40%] h-6 bg-purple-500/20 border border-purple-500/50 rounded flex items-center px-2 text-xs text-white z-10 shadow-[0_0_15px_rgba(168,85,247,0.15)] font-geist">
                          New Pro Tier <span className="ml-1 w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                      </div>
                      
                      <div className="absolute top-[90px] left-[5%] w-[30%] h-6 bg-green-500/20 border border-green-500/50 rounded flex items-center px-2 text-xs text-white z-10 font-geist">
                          Overage Billing <span className="ml-1 w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      </div>
                      
                      <div className="absolute top-[170px] left-[60%] w-[25%] h-6 bg-red-500/20 border border-red-500/50 rounded flex items-center px-2 text-xs text-white z-10 font-geist">
                          Cohort Migration <span className="ml-1 w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Feature 3 */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
              <h2 className="text-4xl md:text-5xl tracking-tight font-geist font-light">Automate complex billing workflows</h2>
              <div>
                  <p className="text-lg text-[#b0b3b8] font-geist">Build and deploy billing logic that works alongside your team. Automate
                      custom invoice generation, tax handling, and bespoke terms easily.</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-normal text-[#b0b3b8] hover:text-white transition-colors font-geist">3.0
                      Automate <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon></a>
              </div>
          </div>

          <div className="flex overflow-hidden bg-gradient-to-br from-[#0c0d0f] to-[#050505] w-full h-[450px] border-[#2e2e32] border rounded-xl shadow-2xl ring-1 ring-white/5">
              <div className="flex flex-col font-mono bg-[#050505] w-1/2 border-r border-[#2e2e32] relative z-10 shadow-[8px_0_24px_rgba(0,0,0,0.2)]">
                  <div className="h-12 border-b border-[#2e2e32] bg-[#0a0c10] flex items-center px-4 justify-between shrink-0">
                      <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#ed6a5e] border border-[#d24f46]/50"></div>
                          <div className="w-3 h-3 rounded-full bg-[#f4bf4f] border border-[#d2a336]/50"></div>
                          <div className="w-3 h-3 rounded-full bg-[#61c554] border border-[#4a9f3e]/50"></div>
                      </div>
                      <div className="text-[11px] text-[#7e828a] flex items-center gap-2 bg-[#15171b] px-3 py-1 rounded-md border border-[#2e2e32] shadow-inner font-geist">
                          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
                          webhook-listener.sh
                      </div>
                  </div>

                  <div className="p-6 text-[13px] leading-relaxed text-[#b0b3b8] flex-1 overflow-y-auto relative">
                      <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#0a0c10]/50 border-r border-[#2e2e32]/50 pointer-events-none"></div>
                      
                      <div className="pl-6 space-y-3">
                          <div className="flex items-start">
                              <span className="text-[#7e828a] select-none mr-4 font-geist">1</span>
                              <p><span className="text-blue-400 font-medium font-geist">POST</span> <span className="text-white font-geist">/v1/webhooks/invoice.created</span> <span className="text-[#7e828a] font-geist">200 OK</span></p>
                          </div>
                          <div className="flex items-start">
                              <span className="text-[#7e828a] select-none mr-4 font-geist">2</span>
                              <p className="text-[#7e828a] font-geist">// Executing custom routing logic...</p>
                          </div>
                          <div className="flex items-start">
                              <span className="text-[#7e828a] select-none mr-4 font-geist">3</span>
                              <p className="font-geist">Evaluating customer tags for <span className="text-purple-400 bg-purple-500/10 px-1 rounded font-geist">cus_9x12</span></p>
                          </div>
                          <div className="flex items-start">
                              <span className="text-[#7e828a] select-none mr-4 font-geist">4</span>
                              <p className="text-emerald-400 font-geist">Match found: <span className="text-white font-geist">['enterprise', 'net_60']</span></p>
                          </div>
                          <div className="flex items-start">
                              <span className="text-[#7e828a] select-none mr-4 font-geist">5</span>
                              <p className="font-geist">Applying standard enterprise overrides...</p>
                          </div>
                          <div className="flex items-start mt-4 pt-2 border-t border-[#2e2e32]/50">
                              <span className="text-[#7e828a] select-none mr-4 font-geist">6</span>
                              <div className="flex items-center gap-2 text-white font-geist">
                                  <iconify-icon icon="solar:refresh-circle-line-duotone" width="16" height="16" className="animate-spin text-blue-500"></iconify-icon> 
                                  Processing routing assignment
                                  <span className="w-1.5 h-4 bg-blue-500 animate-pulse ml-0.5"></span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="w-1/2 bg-[#0c0d0f] relative flex justify-center items-center p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#2e2e32_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
                  
                  <div className="w-full max-w-[340px] bg-[#121316]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_24px_48px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden relative z-10 flex flex-col">
                      <div className="p-3 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
                          <iconify-icon icon="solar:magnifer-linear" className="text-[#7e828a]" width="18"></iconify-icon>
                          <input type="text" placeholder="Route action to..." className="bg-transparent border-none outline-none text-white w-full text-sm placeholder-[#7e828a]" defaultValue="Subline Agent" />
                          <div className="text-[10px] font-mono text-[#7e828a] border border-[#2e2e32] px-1.5 py-0.5 rounded bg-[#0c0d0f] font-geist">⌘K</div>
                      </div>

                      <div className="p-2 space-y-0.5">
                          <div className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 text-white text-sm cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                              <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                                      <iconify-icon icon="solar:magic-stick-3-bold" className="text-white" width="14"></iconify-icon>
                                  </div>
                                  <span className="font-medium font-geist">Subline Agent</span>
                                  <span className="bg-blue-500/20 border border-blue-500/30 text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded text-blue-400 font-geist">Auto</span>
                              </div>
                              <iconify-icon icon="solar:check-circle-bold" width="18" height="18" className="text-blue-500"></iconify-icon>
                          </div>

                          <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-[#b0b3b8] text-sm cursor-pointer transition-colors group">
                              <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-medium border border-white/10 group-hover:border-white/20 font-geist">S</div>
                                  <span className="group-hover:text-white transition-colors font-geist">Steven <span className="text-[#7e828a] font-geist">(Finance)</span></span>
                              </div>
                              <span className="text-[10px] font-mono text-[#7e828a] opacity-0 group-hover:opacity-100 transition-opacity font-geist">↵</span>
                          </div>

                          <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-[#b0b3b8] text-sm cursor-pointer transition-colors group">
                              <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-xs font-medium border border-white/10 group-hover:border-white/20 font-geist">E</div>
                                  <span className="group-hover:text-white transition-colors font-geist">Ema <span className="text-[#7e828a] font-geist">(Sales)</span></span>
                              </div>
                              <span className="text-[10px] font-mono text-[#7e828a] opacity-0 group-hover:opacity-100 transition-opacity font-geist">⌘1</span>
                          </div>

                          <div className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 text-[#b0b3b8] text-sm cursor-pointer transition-colors group">
                              <div className="flex items-center gap-3">
                                  <div className="w-6 h-6 rounded-md bg-[#15171b] border border-[#2e2e32] flex items-center justify-center text-[#7e828a] group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                                      <iconify-icon icon="solar:server-square-linear" width="14"></iconify-icon>
                                  </div>
                                  <span className="group-hover:text-white transition-colors font-geist">Salesforce Sync</span>
                              </div>
                              <span className="bg-[#2e2e32] text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded text-[#7e828a] font-geist">Integration</span>
                          </div>
                      </div>
                      
                      <div className="p-2 border-t border-white/5 bg-white/[0.01] flex justify-between items-center text-[#7e828a] text-xs">
                          <span className="font-geist">Select routing rule</span>
                          <div className="flex gap-1">
                              <iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon>
                              <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Feature 4 */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
              <h2 className="text-4xl md:text-5xl tracking-tight font-geist font-light">Review pricing and API changes</h2>
              <div>
                  <p className="text-lg text-[#b0b3b8] font-geist">Understand billing configurations at a glance with structural diffs. Safely preview how pricing changes will affect your MRR before going live.</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-normal text-[#b0b3b8] hover:text-white transition-colors font-geist">4.0 Previews <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon></a>
              </div>
          </div>

          <div className="flex flex-col overflow-hidden text-[13px] font-mono bg-gradient-to-br from-[#0c0d0f] to-[#050505] w-full border border-[#2e2e32] rounded-xl shadow-2xl ring-1 ring-white/5">
              <div className="flex items-center justify-between bg-[#0a0c10] border-b border-[#2e2e32]">
                  <div className="flex items-center">
                      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0c0d0f] border-r border-[#2e2e32] relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                          <iconify-icon icon="solar:document-text-bold" className="text-blue-400" width="15"></iconify-icon>
                          <span className="text-[#e2e8f0] font-medium tracking-wide font-geist">create.js</span>
                      </div>
                      <div className="px-4 py-2 text-[#7e828a] text-xs flex items-center gap-1.5 cursor-pointer hover:text-[#b0b3b8] transition-colors font-geist">
                          <iconify-icon icon="solar:folder-linear"></iconify-icon> api / subscriptions
                      </div>
                  </div>
                  <div className="pr-4 flex gap-1">
                      <button className="bg-[#2e2e32] text-white text-[10px] px-2.5 py-1 rounded shadow-sm transition-colors uppercase tracking-wider font-medium font-geist">Split</button>
                      <button className="bg-transparent hover:bg-white/5 text-[#7e828a] text-[10px] px-2.5 py-1 rounded transition-colors uppercase tracking-wider font-medium font-geist">Unified</button>
                  </div>
              </div>

              <div className="flex flex-1 relative">
                  <div className="flex-1 border-r border-[#2e2e32] bg-[#0c0d0f] overflow-x-auto py-4">
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">1</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist"><span className="text-[#c678dd] font-geist">const</span> subline <span className="text-[#56b6c2] font-geist">=</span> <span className="text-[#61afef] font-geist">require</span>(<span className="text-[#98c379] font-geist">'subline-node'</span>)</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">2</div>
                          <div className="text-[#b0b3b8] whitespace-pre"></div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">3</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist"><span className="text-[#c678dd] font-geist">const</span> subscription <span className="text-[#56b6c2] font-geist">=</span> <span className="text-[#c678dd] font-geist">await</span> subline.subscriptions.<span className="text-[#61afef] font-geist">create</span>({`{`}</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">4</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  customer<span className="text-[#56b6c2] font-geist">:</span> <span className="text-[#98c379] font-geist">'cus_9x12'</span>,</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">5</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  items<span className="text-[#56b6c2] font-geist">:</span> [</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">6</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">    {`{`} price<span className="text-[#56b6c2] font-geist">:</span> <span className="text-[#98c379] font-geist">'price_enterprise_base'</span> {`}`},</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">7</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  ],</div>
                      </div>

                      <div className="flex items-center bg-red-500/[0.08] relative group h-6 px-2 border-y border-red-500/[0.15]">
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-500"></div>
                          <div className="w-8 text-right pr-4 text-red-500/60 select-none text-xs font-geist">8</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  collection_method<span className="text-[#56b6c2] font-geist">:</span> <span className="bg-red-500/20 text-red-300 px-0.5 rounded font-geist">'charge_automatically'</span>,</div>
                      </div>

                      <div className="flex items-center h-6 px-2 bg-[#1a1c20]/40 relative border-b border-[#2e2e32]/30">
                          <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(255,255,255,0.03)_4px,rgba(255,255,255,0.03)_8px)] pointer-events-none"></div>
                          <div className="w-8 text-right pr-4 text-[#4a4d54]/30 select-none text-xs font-geist">-</div>
                          <div className="text-transparent whitespace-pre"></div>
                      </div>
                      <div className="flex items-center h-6 px-2 bg-[#1a1c20]/40 relative border-b border-[#2e2e32]/30">
                          <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(255,255,255,0.03)_4px,rgba(255,255,255,0.03)_8px)] pointer-events-none"></div>
                          <div className="w-8 text-right pr-4 text-[#4a4d54]/30 select-none text-xs font-geist">-</div>
                          <div className="text-transparent whitespace-pre"></div>
                      </div>

                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">9</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">{`})`}</div>
                      </div>
                  </div>

                  <div className="flex-1 bg-[#0c0d0f] overflow-x-auto py-4">
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">1</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist"><span className="text-[#c678dd] font-geist">const</span> subline <span className="text-[#56b6c2] font-geist">=</span> <span className="text-[#61afef] font-geist">require</span>(<span className="text-[#98c379] font-geist">'subline-node'</span>)</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">2</div>
                          <div className="text-[#b0b3b8] whitespace-pre"></div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">3</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist"><span className="text-[#c678dd] font-geist">const</span> subscription <span className="text-[#56b6c2] font-geist">=</span> <span className="text-[#c678dd] font-geist">await</span> subline.subscriptions.<span className="text-[#61afef] font-geist">create</span>({`{`}</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">4</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  customer<span className="text-[#56b6c2] font-geist">:</span> <span className="text-[#98c379] font-geist">'cus_9x12'</span>,</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">5</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  items<span className="text-[#56b6c2] font-geist">:</span> [</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">6</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">    {`{`} price<span className="text-[#56b6c2] font-geist">:</span> <span className="text-[#98c379] font-geist">'price_enterprise_base'</span> {`}`},</div>
                      </div>
                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">7</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  ],</div>
                      </div>

                      <div className="flex items-center bg-green-500/[0.08] relative group h-6 px-2 border-t border-green-500/[0.15]">
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-green-500"></div>
                          <div className="w-8 text-right pr-4 text-green-500/60 select-none text-xs font-geist">8</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  collection_method<span className="text-[#56b6c2] font-geist">:</span> <span className="bg-green-500/20 text-green-300 px-0.5 rounded font-geist">'send_invoice'</span>,</div>
                      </div>
                      <div className="flex items-center bg-green-500/[0.08] relative group h-6 px-2">
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-green-500"></div>
                          <div className="w-8 text-right pr-4 text-green-500/60 select-none text-xs font-geist">9</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  <span className="bg-green-500/20 text-green-100 px-0.5 rounded font-geist">days_until_due<span className="text-[#56b6c2] font-geist">:</span> 60</span>,</div>
                      </div>
                      <div className="flex items-center bg-green-500/[0.08] relative group h-6 px-2 border-b border-green-500/[0.15]">
                          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-green-500"></div>
                          <div className="w-8 text-right pr-4 text-green-500/60 select-none text-xs font-geist">10</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">  <span className="bg-green-500/20 text-green-100 px-0.5 rounded font-geist">discounts<span className="text-[#56b6c2] font-geist">:</span> [{`{`} coupon<span className="text-[#56b6c2] font-geist">:</span> <span className="text-[#98c379] font-geist">'15_OFF_CUSTOM'</span> {`}`}]</span>,</div>
                      </div>

                      <div className="flex items-center hover:bg-white/[0.02] h-6 px-2">
                          <div className="w-8 text-right pr-4 text-[#4a4d54] select-none text-xs font-geist">11</div>
                          <div className="text-[#b0b3b8] whitespace-pre font-geist">{`})`}</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Feature 5 */}
      <section className="max-w-[1200px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
              <h2 className="text-4xl md:text-5xl tracking-tight font-geist font-light">Understand revenue at scale</h2>
              <div>
                  <p className="text-lg text-[#b0b3b8] font-geist">Take the guesswork out of your metrics with real-time analytics, cohort tracking, and dashboards that surface critical revenue insights.</p>
                  <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-normal text-[#b0b3b8] hover:text-white transition-colors font-geist">5.0 Analytics <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon></a>
              </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 h-[500px]">
              <div className="rounded-xl border border-[#2e2e32] bg-gradient-to-br from-[#121316] to-[#0c0d0f] shadow-2xl flex flex-col p-6 overflow-hidden ring-1 ring-white/5 relative group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>

                  <div className="flex justify-between items-center mb-6 relative z-10">
                      <h3 className="text-lg font-medium text-white font-geist">Weekly Revenue Pulse</h3>
                      <button className="flex items-center gap-2 bg-gradient-to-b from-[#2a2c31] to-[#1c1d21] border border-[#3e3e42] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)] px-3 py-1.5 rounded-full text-xs font-medium text-white hover:brightness-110 transition-all active:scale-95 cursor-pointer font-geist">
                          <iconify-icon icon="solar:play-circle-bold" width="14" height="14" className="text-blue-400"></iconify-icon>
                          Listen <span className="text-[#7e828a] ml-1 font-mono font-geist">1.0x</span>
                      </button>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-medium border-b border-[#2e2e32] pb-3 mb-4 text-[#b0b3b8] relative z-10">
                      <span className="text-white relative font-geist">
                          Insights
                          <div className="absolute -bottom-[13px] left-0 right-0 h-0.5 bg-blue-500 rounded-t-full shadow-[0_-2px_8px_rgba(59,130,246,0.5)]"></div>
                      </span>
                      <span className="hover:text-white cursor-pointer transition-colors font-geist">Transcript</span>
                  </div>

                  <div className="space-y-4 overflow-y-auto relative z-10 pr-2 no-scrollbar">
                      <div className="bg-[#15171b]/80 backdrop-blur-sm border border-[#2e2e32] p-4 rounded-lg shadow-sm hover:border-blue-500/30 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                              <div className="font-medium text-white font-geist">MRR Growth</div>
                              <div className="text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded flex items-center gap-1 font-geist">
                                  <iconify-icon icon="solar:trend-up-bold"></iconify-icon> Up 12%
                              </div>
                          </div>
                          <div className="text-xs text-[#7e828a] flex items-center gap-2 mb-3 font-geist">
                              <iconify-icon icon="solar:magic-stick-3-linear" className="text-purple-400"></iconify-icon> AI Engine · 1 day ago
                          </div>
                          <div className="text-sm text-[#b0b3b8] space-y-2">
                              <div className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                                  <p className="font-geist">Enterprise upgrades accounted for <span className="text-white font-medium font-geist">60% of new MRR</span>.</p>
                              </div>
                              <div className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                                  <p className="font-geist">Dunning automation recovered <span className="text-white font-medium font-geist">$14,000</span> this week.</p>
                              </div>
                          </div>
                      </div>

                      <div className="bg-[#15171b]/80 backdrop-blur-sm border border-[#2e2e32] p-4 rounded-lg shadow-sm hover:border-yellow-500/30 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                              <div className="font-medium text-white font-geist">Churn Risk</div>
                              <div className="text-[10px] font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-0.5 rounded flex items-center gap-1 font-geist">
                                  <iconify-icon icon="solar:danger-triangle-bold"></iconify-icon> Monitor
                              </div>
                          </div>
                          <div className="text-xs text-[#7e828a] flex items-center gap-2 mb-3 font-geist">
                              <iconify-icon icon="solar:magic-stick-3-linear" className="text-purple-400"></iconify-icon> AI Engine · 3 hours ago
                          </div>
                          <div className="text-sm text-[#b0b3b8] space-y-2">
                              <div className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(234,179,8,0.6)] animate-pulse"></div>
                                  <p className="font-geist">Slight uptick in basic tier cancellations detected in the last 48 hours.</p>
                              </div>
                              <div className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#4a4d54] mt-1.5 shrink-0"></div>
                                  <p className="font-geist">Consider adjusting onboarding flow for self-serve users.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col overflow-hidden bg-gradient-to-br from-[#121316] to-[#0c0d0f] border-[#2e2e32] border ring-white/5 ring-1 rounded-xl p-6 relative shadow-lg group hover:ring-2 hover:ring-blue-500/30 transition-shadow duration-300 cursor-pointer">
                  <h3 className="text-sm font-medium text-white mb-6 font-geist">Churn rate by cohort</h3>

                  <div className="flex-1 relative flex">
                      <div className="w-10 flex flex-col justify-between text-[11px] font-mono text-[#7e828a] pb-8 relative z-10">
                          <span className="font-geist">5.0%</span><span className="font-geist">4.0%</span><span className="font-geist">3.0%</span><span className="font-geist">2.0%</span><span className="font-geist">1.0%</span><span className="font-geist">0.0%</span>
                      </div>

                      <div className="flex-1 relative flex justify-between items-end pb-8">
                          <div className="absolute inset-0 bottom-8 flex flex-col justify-between z-0">
                              <div className="w-full h-px bg-[#2e2e32]/30"></div>
                              <div className="w-full h-px bg-[#2e2e32]/30"></div>
                              <div className="w-full h-px bg-[#2e2e32]/30"></div>
                              <div className="w-full h-px bg-[#2e2e32]/30"></div>
                              <div className="w-full h-px bg-[#2e2e32]/30"></div>
                              <div className="w-full h-px bg-[#2e2e32]/30"></div>
                          </div>

                          <div className="absolute inset-0 bottom-8 z-10">
                              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                                  <defs>
                                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)"></stop>
                                          <stop offset="100%" stopColor="rgba(168, 85, 247, 0)"></stop>
                                      </linearGradient>
                                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                          <stop offset="0%" stopColor="#3b82f6"></stop>
                                          <stop offset="50%" stopColor="#a855f7"></stop>
                                          <stop offset="100%" stopColor="#ec4899"></stop>
                                      </linearGradient>
                                  </defs>
                                  <path d="M0,80 C20,75 30,30 50,40 C70,50 80,85 100,75 L100,100 L0,100 Z" fill="url(#chartGradient)"></path>
                                  <path d="M0,80 C20,75 30,30 50,40 C70,50 80,85 100,75" fill="none" stroke="url(#lineGradient)" strokeWidth="1" className="drop-shadow-[0_1px_3px_rgba(168,85,247,0.3)]"></path>
                              </svg>
                          </div>

                          <div className="absolute top-0 bottom-8 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-b from-white/[0.03] to-transparent border-x border-white/[0.05] z-0"></div>
                          <div className="absolute top-[40%] bottom-8 left-1/2 w-px bg-white/10 z-0"></div>

                          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                              <div className="w-4 h-4 rounded-full bg-purple-500/10 flex items-center justify-center animate-pulse">
                                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"></div>
                              </div>

                              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-[#1c1f26]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center">
                                  <span className="text-white font-medium text-sm drop-shadow-md font-geist">2.1%</span>
                                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1c1f26] border-b border-r border-white/10 transform rotate-45"></div>
                              </div>
                          </div>

                          <div className="absolute bottom-0 w-full flex justify-between text-[11px] font-medium text-[#7e828a] px-4">
                              <span className="text-blue-400 font-geist">Q1</span>
                              <span className="text-white relative bg-white/10 px-2 py-0.5 rounded font-geist">Q2</span>
                              <span className="font-geist">Q3</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-sm text-[#7e828a]">
              <div className="font-geist">5.1 <span className="ml-2 text-white font-geist">MRR</span></div>
              <div className="font-geist">5.2 <span className="ml-2 font-geist">Cohorts</span></div>
              <div className="font-geist">5.3 <span className="ml-2 font-geist">LTV/CAC</span></div>
          </div>
      </section>
    </>
  );
}