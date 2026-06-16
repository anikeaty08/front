import React from 'react';

const ProductMontage = () => {
  return (
    <section className="overflow-hidden clip-diagonal-reverse -mt-20 lg:pt-48 lg:-mt-32 lg:pb-0 bg-slate-50 z-10 pt-40 pb-32 relative">
      <div className="max-w-[1080px] mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-normal tracking-wide uppercase text-sm mb-3">Unified Platform</h2>
          <h3 className="text-4xl font-normal text-slate-800 mb-6 tracking-tight">A fully integrated suite of payments products</h3>
          <p className="text-lg font-light text-slate-500">
            Bring together everything that’s required to build websites and apps that accept payments and send payouts globally. NexusPay’s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces.
          </p>
        </div>

        {/* Adapted Component Widgets Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Masterclass / Session Card */}
          <div className="md:col-span-5 flex justify-center w-full">
            <section className="flex-1 overflow-hidden hover:-translate-y-1 transition-transform duration-500 bg-slate-900 w-full max-w-md border-slate-800 border rounded-[2.2rem] relative shadow-2xl">
              
              {/* Status bar */}
              <div className="px-5 pt-5 flex items-center justify-between text-[11px] text-slate-300 border-b border-slate-800/70 pb-3">
                <span className="font-sans">09:42</span>
                <div className="flex items-center gap-1.5 text-xs">
                  <iconify-icon icon="solar:wifi-bold-duotone" width="14" height="14"></iconify-icon>
                  <span className="font-sans">Strong</span>
                </div>
              </div>

              {/* Hero image */}
              <div className="overflow-hidden rounded-[1.8rem] mt-3 mr-3 ml-3 relative">
                <img className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aed3fd3d-584e-4710-b31a-6fd39d3a21c4_1600w.webp" alt="Masterclass Speaker" />
                <div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-[11px] text-slate-200 font-sans">
                      48,210 merchants · Live cohort
                    </p>
                    <p className="text-xs text-slate-400 max-w-xs font-sans">
                      After the live block, the recording and notes will appear here automatically.
                    </p>
                  </div>
                  <button className="flex outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80 flex-none text-slate-100 bg-black/50 w-9 h-9 border-white/10 border rounded-full backdrop-blur items-center justify-center transition hover:bg-black/70" type="button">
                    <iconify-icon icon="solar:menu-dots-bold-duotone" width="16" height="16"></iconify-icon>
                  </button>
                </div>
              </div>

              {/* Content under hero */}
              <div className="mt-6 pr-6 pb-6 pl-6 space-y-6">
                <div className="space-y-1 border-b border-slate-800/70 pb-4">
                  <p className="text-xs font-medium text-purple-400 uppercase tracking-[0.2em] font-sans">
                    MASTERCLASS · Live Series
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-50 font-sans">
                    Optimising Conversion Rates
                  </h2>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Learn how to dynamically route payments to local acquirers across the globe to increase acceptance naturally.
                  </p>
                </div>

                {/* Action buttons circle */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="h-11 w-11 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-500/20 hover:bg-purple-400 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80" type="button">
                      <iconify-icon icon="solar:play-bold-duotone" width="20" height="20" className="translate-x-[1px]"></iconify-icon>
                    </button>
                    <div className="text-xs">
                      <p className="text-slate-200 font-medium font-sans">
                        Watch now
                      </p>
                      <p className="text-slate-500 font-sans">
                        Starts in 18 minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <button className="flex hover:bg-slate-700 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80 bg-slate-800 w-10 h-10 rounded-full items-center justify-center" type="button">
                      <iconify-icon icon="solar:chart-bold-duotone" width="16" height="16"></iconify-icon>
                    </button>
                    <button className="flex hover:bg-slate-700 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80 bg-slate-800 w-10 h-10 rounded-full items-center justify-center" type="button">
                      <iconify-icon icon="solar:pie-chart-bold-duotone" width="16" height="16"></iconify-icon>
                    </button>
                    <button className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-500/80" type="button">
                      <iconify-icon icon="solar:widget-3-bold-duotone" width="16" height="16"></iconify-icon>
                    </button>
                  </div>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-3 gap-4 text-[11px] text-slate-400 border-t border-slate-800/70 pt-4">
                  <div>
                    <p className="uppercase tracking-[0.22em] font-medium font-sans">Level</p>
                    <p className="mt-1 text-slate-50 font-medium font-sans">Advanced</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.22em] font-medium font-sans">Length</p>
                    <p className="mt-1 text-slate-50 font-medium font-sans">45 mins</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.22em] font-medium font-sans">Impact</p>
                    <p className="mt-1 text-slate-50 font-medium font-sans">High</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Glassmorphic Status Card & Bar Chart */}
          <div className="md:col-span-7 flex flex-col gap-8 w-full">
            
            {/* Glassmorphic Settlement Dashboard Widget */}
            <div className="card-top w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-slate-900 rounded-[1.5rem] shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-[1.5rem] border border-white/10" style={{ maskImage: 'linear-gradient(135deg, white, transparent 60%)' }}></div>
              <div className="absolute inset-0 border-white/5 border rounded-[1.5rem]" style={{ maskImage: 'linear-gradient(135deg, transparent 60%, white)' }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-[1.5rem] bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]"></div>
              
              <div className="flex flex-col h-full p-6 pb-7 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-3/4">
                    <h1 className="text-[26px] leading-tight tracking-tight font-sans font-medium text-white">Settlement Engine</h1>
                    <p className="text-slate-400 text-sm font-light mt-1 font-sans">Automated • Real-time Routing</p>
                  </div>
                  <div className="w-1/4 text-right">
                    <div className="text-[20px] font-semibold font-mono text-white tracking-tight">PAYOUTS</div>
                    <div className="flex items-center justify-end gap-1.5 mt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(16, 185, 129, 0.4)' }}></div>
                      <span className="text-xs text-emerald-400 font-sans tracking-wider font-medium">SETTLING</span>
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto w-full mb-5 mt-3">
                  <div className="absolute inset-0 translate-y-2 scale-[0.98] rounded-xl bg-slate-950/80 ring-1 ring-white/5 blur-[0.3px]"></div>
                  <div className="relative rounded-xl bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,8,23,0.95))] ring-1 ring-white/10 overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-slate-900/60">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-slate-800/40 px-2.5 py-1 text-[11px] text-slate-300">
                        <iconify-icon icon="solar:folder-code-bold-duotone" width="14" height="14" className="text-indigo-400"></iconify-icon>
                        <span className="text-slate-300/80 font-mono">router.ts</span>
                      </div>
                    </div>
                    <div className="relative h-32">
                      <div className="absolute inset-0 grid grid-cols-[36px_1fr]">
                        <div className="select-none border-r border-white/5 bg-slate-900/30 px-2 py-3 text-[11px] leading-5 text-slate-500/70 text-right pr-3 font-mono">
                          <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
                        </div>
                        <pre className="m-0 overflow-hidden px-5 py-3 text-[12px] leading-5 text-slate-300 font-mono"><span className="text-indigo-400">class</span> <span className="text-amber-200">SettlementEngine</span> {'{'}
      <span className="text-indigo-400">async</span> <span className="text-blue-300">routeFunds</span>(batch) {'{'}
        <span className="text-indigo-400">for</span> (<span className="text-indigo-400">const</span> tx <span className="text-indigo-400">of</span> batch) {'{'}
          <span className="text-indigo-400">await</span> <span className="text-red-400">this</span>.acquirer.<span className="text-blue-300">transfer</span>(tx.amount, tx.dest);
        {'}'}
      {'}'}</pre>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#020817] to-transparent"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mb-5 max-w-lg">
                  <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5 w-1/3">
                    <div className="text-2xl sm:text-3xl leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent font-sans font-medium">
                      4.2<span className="text-lg sm:text-xl">M</span>
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-widest font-sans mt-1 text-slate-300">DAILY VOL</div>
                  </div>
                  <div className="w-px h-12 my-auto bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5 w-1/3">
                    <div className="text-2xl sm:text-3xl leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent font-sans font-medium">
                      99.9<span className="text-lg sm:text-xl font-sans">%</span>
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-widest font-sans mt-1 text-slate-300">SUCCESS</div>
                  </div>
                  <div className="w-px h-12 my-auto bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                  <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5 w-1/3">
                    <div className="text-2xl sm:text-3xl leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent font-sans font-medium">
                      12<span className="text-lg sm:text-xl">k</span>
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-widest font-sans mt-1 text-slate-300">ROUTED</div>
                  </div>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5"></div>
                
                <div className="flex flex-wrap gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_12px_rgba(99,102,241,0.2)] font-sans">
                    <iconify-icon icon="solar:sitemap-bold-duotone" width="14" height="14"></iconify-icon>
                    SMART ROUTING
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] font-sans">
                    <iconify-icon icon="solar:chart-square-bold-duotone" width="14" height="14"></iconify-icon>
                    RECONCILIATION
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 cursor-pointer transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] font-sans">
                    <iconify-icon icon="solar:bolt-bold-duotone" width="14" height="14"></iconify-icon>
                    INSTANT PAYOUTS
                  </span>
                </div>
                
                <div className="rounded-lg px-3 py-1.5 font-mono text-[11px] relative overflow-hidden mb-5 border border-white/5" style={{ background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)' }}>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-sans tracking-widest">DEPLOYMENT: PRODUCTION</span>
                    <span className="text-slate-200 font-sans">v4.0.1-stable</span>
                  </div>
                </div>
                
                <div className="mt-auto flex justify-between w-full">
                  <div className="flex flex-col gap-2">
                    <span className="text-slate-400 flex items-center gap-2 text-[11px] font-medium tracking-wide">
                      <iconify-icon icon="solar:server-square-bold-duotone" width="14" height="14"></iconify-icon>
                      <span className="font-sans">GLOBAL REACH</span>
                    </span>
                    <span className="text-slate-500 flex items-center gap-2 text-[11px] font-medium tracking-wide">
                      <iconify-icon icon="solar:wallet-money-bold-duotone" width="14" height="14"></iconify-icon>
                      <span className="font-sans">MULTI-CURRENCY</span>
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-slate-400 flex items-center gap-2 text-[11px] font-medium tracking-wide">
                      <span className="font-sans">COMPLIANT</span>
                      <iconify-icon icon="solar:shield-check-bold-duotone" width="14" height="14"></iconify-icon>
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" style={{ boxShadow: '0 0 6px rgba(129, 140, 248, 0.6)' }}></div>
                    </span>
                    <p className="text-[12px] text-slate-300 font-medium flex items-center gap-1.5 cursor-pointer hover:text-indigo-300 transition-colors">
                      <iconify-icon icon="solar:link-circle-bold-duotone" width="14" height="14"></iconify-icon>
                      <span className="font-sans">api.nexuspay.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal Revenue Widget */}
            <section className="flex flex-col shadow-xl shadow-slate-200/50 bg-white border-slate-200 border rounded-3xl p-6 w-full hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Revenue plan</p>
                  <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-slate-800">Seasonal Volume</h2>
                </div>
                <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 transition border border-slate-200 text-slate-600">
                  <iconify-icon icon="solar:refresh-circle-bold-duotone" width="20" height="20"></iconify-icon>
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                {/* Months scale */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 px-1">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span className="font-semibold text-indigo-600">Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
                
                {/* Bars */}
                <div className="mt-1 grid grid-cols-12 gap-2 h-32 items-end">
                  <div className="rounded-t-full bg-slate-100 h-[26%] w-full"></div>
                  <div className="rounded-t-full bg-slate-100 h-[32%] w-full"></div>
                  <div className="rounded-t-full bg-slate-100 h-[45%] w-full"></div>
                  <div className="rounded-t-full bg-indigo-600 h-[68%] shadow-md shadow-indigo-600/30 border-t border-indigo-400 w-full relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-indigo-600">$14k</div>
                  </div>
                  <div className="rounded-t-full bg-indigo-100 h-[74%] w-full"></div>
                  <div className="rounded-t-full bg-indigo-100 h-[80%] w-full"></div>
                  <div className="rounded-t-full bg-indigo-100 h-[92%] w-full"></div>
                  <div className="rounded-t-full bg-indigo-100 h-[100%] w-full"></div>
                  <div className="rounded-t-full bg-slate-100 h-[77%] w-full"></div>
                  <div className="rounded-t-full bg-slate-50 h-[60%] w-full"></div>
                  <div className="rounded-t-full bg-slate-50 h-[40%] w-full"></div>
                  <div className="rounded-t-full bg-slate-50 h-[34%] w-full"></div>
                </div>

                {/* Range + percentage */}
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <div className="flex-1 max-w-[140px]">
                    <p className="text-[11px] text-slate-500 mb-1.5">Current month</p>
                    <button className="w-full flex items-center justify-between rounded-xl bg-white px-3 py-2 text-xs font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                      <span>April</span>
                      <iconify-icon icon="solar:alt-arrow-down-bold-duotone" width="14" height="14" className="text-slate-400"></iconify-icon>
                    </button>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-[11px] text-slate-500 mb-0.5">Revenue target</p>
                    <p className="text-2xl font-semibold tracking-tight text-slate-800">114%</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductMontage;