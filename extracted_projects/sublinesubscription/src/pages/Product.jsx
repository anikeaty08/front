import { useState } from 'react';

export default function Product() {
  const [activeTab, setActiveTab] = useState('billing');

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1200px] mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-24 mt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-[#b0b3b8] font-geist mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
          Subline OS 2.0
        </div>
        <h1 className="text-5xl md:text-7xl tracking-tight text-white mb-6 font-geist font-light">
          The complete <br />revenue platform
        </h1>
        <p className="text-xl text-[#b0b3b8] max-w-2xl mx-auto font-geist font-light">
          Everything you need to manage subscriptions, automate billing, and recognize revenue in one unified operating system.
        </p>
      </div>

      {/* Main Feature Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
          {['billing', 'invoicing', 'analytics', 'recovery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium font-geist capitalize transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#15171b] text-white shadow-lg border border-white/10' 
                  : 'text-[#7e828a] hover:text-[#b0b3b8]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Areas */}
      <div className="w-full bg-[#0c0d0f] border border-[#2e2e32] rounded-2xl overflow-hidden mb-32 shadow-2xl relative min-h-[500px]">
        {activeTab === 'billing' && (
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center animate-in fade-in duration-500">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-geist font-light text-white tracking-tight">Flexible Subscription Engine</h2>
              <p className="text-[#b0b3b8] font-geist leading-relaxed">
                Build any pricing model you can imagine. From flat-rate to complex usage-based tiers, our engine handles grandfathering, prorations, and seamless upgrades automatically.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-blue-500"></iconify-icon> Real-time usage aggregation
                </li>
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-blue-500"></iconify-icon> Automatic proration handling
                </li>
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-blue-500"></iconify-icon> Multi-currency out of the box
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl opacity-30"></div>
              <div className="bg-[#15171b] border border-[#2e2e32] rounded-xl p-6 relative z-10 shadow-xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2e2e32]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <iconify-icon icon="solar:box-minimalistic-bold" className="text-white"></iconify-icon>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white font-geist">Enterprise Plan</div>
                      <div className="text-xs text-[#7e828a] font-geist">Monthly • Usage Based</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white font-geist">$999.00</div>
                    <div className="text-xs text-green-400 font-geist">Active</div>
                  </div>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-[#7e828a]">Base Fee</span>
                    <span className="text-white">$499.00</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-[#7e828a]">API Calls (1.2M)</span>
                    <span className="text-white">$350.00</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-white/5 border border-white/5">
                    <span className="text-[#7e828a]">Storage (500GB)</span>
                    <span className="text-white">$150.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'invoicing' && (
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center animate-in fade-in duration-500">
             <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-geist font-light text-white tracking-tight">Smart Invoicing & Tax</h2>
              <p className="text-[#b0b3b8] font-geist leading-relaxed">
                Generate compliant, beautifully branded invoices globally. Subline automatically calculates taxes, applies custom payment terms, and reconciles incoming wire transfers.
              </p>
               <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-purple-500"></iconify-icon> Automated global tax calculation
                </li>
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-purple-500"></iconify-icon> Custom net terms (Net 30/60/90)
                </li>
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-purple-500"></iconify-icon> White-labeled customer portal
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full flex justify-center relative">
              <div className="bg-white rounded-xl p-6 w-[80%] shadow-2xl relative z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="flex justify-between items-start mb-8 pb-6 border-b border-gray-100">
                    <div>
                      <iconify-icon icon="solar:layers-linear" width="24" className="text-black mb-2"></iconify-icon>
                      <div className="text-xs text-gray-500 font-geist">Invoice #INV-2024-081</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-medium text-black font-geist mb-1">$1,249.00</div>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-geist">Due in 30 days</div>
                    </div>
                 </div>
                 <div className="space-y-4 mb-8">
                    <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-4/6"></div>
                 </div>
                 <button className="w-full bg-black text-white text-xs font-medium py-2.5 rounded-lg font-geist hover:bg-gray-800 transition-colors">
                   Pay Invoice
                 </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center animate-in fade-in duration-500">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-geist font-light text-white tracking-tight">Revenue Intelligence</h2>
              <p className="text-[#b0b3b8] font-geist leading-relaxed">
                Stop guessing. Get boardroom-ready metrics instantly. Subline perfectly calculates MRR, ARR, churn, and LTV with granular filtering by cohort or product line.
              </p>
               <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-emerald-500"></iconify-icon> Real-time MRR movements
                </li>
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-emerald-500"></iconify-icon> Cohort retention analysis
                </li>
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-emerald-500"></iconify-icon> Revenue recognition sync
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full relative">
               <div className="bg-[#15171b] border border-[#2e2e32] rounded-xl p-6 shadow-xl h-[280px] flex flex-col justify-end relative overflow-hidden group">
                  <div className="absolute top-6 left-6">
                    <div className="text-sm text-[#7e828a] font-geist mb-1">Net MRR Growth</div>
                    <div className="text-2xl font-medium text-white font-geist flex items-center gap-3">
                      $48,250 <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full flex items-center gap-1"><iconify-icon icon="solar:trend-up-bold"></iconify-icon> 12.5%</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-32 pt-4 border-b border-[#2e2e32] relative z-10">
                    {[30, 45, 40, 60, 55, 70, 85, 80, 95].map((h, i) => (
                      <div key={i} className="w-full bg-emerald-500/20 rounded-t-sm relative group/bar hover:bg-emerald-500/40 transition-colors cursor-pointer" style={{ height: `${h}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2e2e32] text-xs text-white px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap font-geist">${h}k</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-[#7e828a] pt-3 font-geist">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'recovery' && (
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center animate-in fade-in duration-500">
             <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-geist font-light text-white tracking-tight">AI Dunning & Recovery</h2>
              <p className="text-[#b0b3b8] font-geist leading-relaxed">
                Recover failed payments silently. Our ML models analyze decline codes to determine the optimal retry schedule, while smart campaigns handle customer outreach.
              </p>
               <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-orange-500"></iconify-icon> Smart retry routing
                </li>
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-orange-500"></iconify-icon> Automated email sequences
                </li>
                <li className="flex items-center gap-3 text-sm text-[#b0b3b8] font-geist">
                  <iconify-icon icon="solar:check-circle-bold" className="text-orange-500"></iconify-icon> Card account updater
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full relative space-y-3">
               <div className="bg-[#15171b] border border-[#2e2e32] rounded-xl p-4 flex items-center justify-between shadow-md">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                     <iconify-icon icon="solar:card-line-duotone" className="text-red-400"></iconify-icon>
                   </div>
                   <div>
                     <div className="text-sm font-medium text-white font-geist">Insufficient Funds</div>
                     <div className="text-xs text-[#7e828a] font-geist">Acme Corp • $1,250</div>
                   </div>
                 </div>
                 <span className="text-[10px] bg-[#2e2e32] text-white px-2 py-1 rounded-md font-geist">Failed</span>
               </div>
               
               <div className="flex justify-center py-1">
                 <div className="w-px h-6 bg-[#2e2e32]"></div>
               </div>

               <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-4 flex items-center justify-between shadow-md ml-8">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                     <iconify-icon icon="solar:magic-stick-3-bold" className="text-orange-400"></iconify-icon>
                   </div>
                   <div>
                     <div className="text-sm font-medium text-white font-geist">Smart Retry Scheduled</div>
                     <div className="text-xs text-[#7e828a] font-geist">Optimal window: 14:00 GMT</div>
                   </div>
                 </div>
                 <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-1 rounded-md font-geist border border-orange-500/30">Pending</span>
               </div>
               
               <div className="flex justify-center py-1">
                 <div className="w-px h-6 bg-[#2e2e32]"></div>
               </div>

               <div className="bg-[#15171b] border border-[#2e2e32] rounded-xl p-4 flex items-center justify-between shadow-md ml-16 opacity-50">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-[#2e2e32] flex items-center justify-center">
                     <iconify-icon icon="solar:letter-linear" className="text-[#7e828a]"></iconify-icon>
                   </div>
                   <div>
                     <div className="text-sm font-medium text-white font-geist">Dunning Email #1</div>
                     <div className="text-xs text-[#7e828a] font-geist">If retry fails</div>
                   </div>
                 </div>
                 <span className="text-[10px] bg-[#2e2e32] text-[#7e828a] px-2 py-1 rounded-md font-geist">Queued</span>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Bento Grid Features */}
      <div className="mb-16">
        <h2 className="text-3xl tracking-tight text-white mb-10 font-geist font-light text-center">Built for modern software teams</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#0c0d0f] border border-[#2e2e32] rounded-2xl p-8 hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
            <iconify-icon icon="solar:code-circle-linear" width="32" className="text-white mb-6"></iconify-icon>
            <h3 className="text-xl text-white font-medium mb-3 font-geist">Developer-first API</h3>
            <p className="text-[#b0b3b8] font-geist leading-relaxed max-w-md">
              A meticulously designed REST API with typed SDKs, reliable webhooks, and idempotent endpoints. Built to be integrated in hours, not weeks.
            </p>
            <div className="mt-8 bg-[#15171b] border border-[#2e2e32] rounded-xl p-4 font-mono text-sm">
              <div className="text-blue-400 mb-2">// Create a subscription</div>
              <div className="text-white">await subline.subscriptions.create({`{`}</div>
              <div className="text-[#98c379] ml-4">customer: 'cus_123',</div>
              <div className="text-[#98c379] ml-4">plan: 'pro_monthly'</div>
              <div className="text-white">{`}`});</div>
            </div>
          </div>

          <div className="bg-[#0c0d0f] border border-[#2e2e32] rounded-2xl p-8 hover:border-white/10 transition-colors">
            <iconify-icon icon="solar:lock-keyhole-linear" width="32" className="text-white mb-6"></iconify-icon>
            <h3 className="text-xl text-white font-medium mb-3 font-geist">Enterprise Security</h3>
            <p className="text-[#b0b3b8] font-geist leading-relaxed">
              SOC2 Type II certified, GDPR compliant, and built on bank-grade infrastructure.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white font-geist"><iconify-icon icon="solar:shield-check-bold" className="text-green-500"></iconify-icon> SOC 2 Type II</div>
              <div className="flex items-center gap-3 text-sm text-white font-geist"><iconify-icon icon="solar:shield-check-bold" className="text-green-500"></iconify-icon> PCI-DSS Level 1</div>
              <div className="flex items-center gap-3 text-sm text-white font-geist"><iconify-icon icon="solar:shield-check-bold" className="text-green-500"></iconify-icon> GDPR Compliant</div>
            </div>
          </div>

          <div className="bg-[#0c0d0f] border border-[#2e2e32] rounded-2xl p-8 hover:border-white/10 transition-colors">
            <iconify-icon icon="solar:database-linear" width="32" className="text-white mb-6"></iconify-icon>
            <h3 className="text-xl text-white font-medium mb-3 font-geist">Data Portability</h3>
            <p className="text-[#b0b3b8] font-geist leading-relaxed">
              Export your data to your warehouse instantly. Snowflake, BigQuery, and Redshift integrations natively supported.
            </p>
          </div>

          <div className="md:col-span-2 bg-gradient-to-br from-[#12141a] to-[#0c0d0f] border border-[#2e2e32] rounded-2xl p-8 hover:border-white/10 transition-colors relative overflow-hidden">
             <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
               <iconify-icon icon="solar:cpu-bold-duotone" width="300" className="text-blue-500"></iconify-icon>
             </div>
             <div className="relative z-10">
              <iconify-icon icon="solar:rocket-linear" width="32" className="text-white mb-6"></iconify-icon>
              <h3 className="text-xl text-white font-medium mb-3 font-geist">Scale infinitely</h3>
              <p className="text-[#b0b3b8] font-geist leading-relaxed max-w-md">
                Subline processes billions of events and handles millions of active subscriptions with 99.999% uptime. Focus on your product, we'll handle the billing infrastructure.
              </p>
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-light text-white font-geist mb-1">10k+</div>
                  <div className="text-xs text-[#7e828a] font-geist uppercase tracking-wider font-semibold">Events / Sec</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-white font-geist mb-1">99.999%</div>
                  <div className="text-xs text-[#7e828a] font-geist uppercase tracking-wider font-semibold">Uptime SLA</div>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}