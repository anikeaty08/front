import React from 'react'
import FlashlightCard from './ui/FlashlightCard'

const Validation = () => {
  return (
    <section className="overflow-hidden lg:py-32 text-white w-full z-20 pt-24 pb-24 relative">
      {/* Background Grid Lines (Hero Style) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 left-[6%]"></div>
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 left-[28%]">
          <div className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent beam-v" style={{ animation: 'beam-v 7s infinite' }}></div>
        </div>
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 left-[62%]">
          <div className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent beam-v" style={{ animation: 'beam-v 5s infinite 2s' }}></div>
        </div>
        <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 right-[6%]"></div>
        <div className="absolute left-0 right-0 h-[1px] bg-white/5 top-0"></div>
        <div className="absolute left-0 right-0 h-[1px] bg-white/5 bottom-0"></div>
      </div>

      <div className="lg:px-[6%] z-10 max-w-[1600px] mr-auto ml-auto pr-6 pl-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-8 gap-x-8 gap-y-8">
          
          {/* Left Column: Header + Feature Image */}
          <div className="lg:col-span-7 flex flex-col gap-6 gap-x-6 gap-y-6">
            <FlashlightCard className="hover:bg-white/[0.04] transition-all duration-500 border border-white/5 hover:border-white/10 rounded-sm backdrop-blur-lg p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center min-h-[240px]">
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

              <h2 className="leading-[0.95] lg:text-6xl text-4xl font-medium text-white tracking-tighter z-10 mb-2 relative">
                Validation from Global
                <span className="text-white/30"> Infrastructure Leaders.</span>
              </h2>
              <div className="absolute -top-6 -right-6 opacity-[0.03] text-white">
                <iconify-icon icon="solar:chat-square-like-bold-duotone" width="240"></iconify-icon>
              </div>
            </FlashlightCard>

            <FlashlightCard className="lg:h-[500px] overflow-hidden h-[420px] border-white/5 hover:border-white/10 border rounded-sm relative backdrop-blur-lg transition-all duration-500 shadow-sm">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5326861-9214-4075-b2d4-dedfcf9cc3ea_1600w.webp" alt="Data Network Structure" className="transition-transform duration-1000 group-hover:scale-105 filter group-hover:saturate-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" />
              <div className="bg-gradient-to-t from-black/60 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

              <div className="absolute bottom-10 right-10 text-right">
                <span className="block text-6xl lg:text-8xl font-semibold text-white tracking-tighter shadow-black/20 drop-shadow-lg">99.99%</span>
                <span className="block text-white/80 font-mono text-sm uppercase tracking-widest mt-0">Uptime Guaranteed</span>
              </div>

              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-sm text-[10px] font-mono uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                Live Metrics
              </div>
            </FlashlightCard>
          </div>

          {/* Right Column: Testimonials Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <FlashlightCard className="hover:bg-white/[0.04] text-white p-10 rounded-sm transform transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col justify-between border border-white/5 hover:border-white/10 backdrop-blur-lg">
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex gap-1 text-purple-400 mb-8">
                  <iconify-icon icon="solar:star-bold-duotone" width="20"></iconify-icon>
                  <iconify-icon icon="solar:star-bold-duotone" width="20"></iconify-icon>
                  <iconify-icon icon="solar:star-bold-duotone" width="20"></iconify-icon>
                  <iconify-icon icon="solar:star-bold-duotone" width="20"></iconify-icon>
                  <iconify-icon icon="solar:star-bold-duotone" width="20"></iconify-icon>
                </div>
                <p className="text-xl font-light leading-relaxed mb-10 text-white/90">
                  "SAKURA's predictive modeling slashed our latency by 40% in just two weeks. The recursive optimization agents are basically magic for our devops pipeline."
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-6 relative z-10">
                <div className="flex items-center gap-4">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc6dc108-07ea-4b25-98fb-c8196765a394_320w.webp" alt="Elena Rostova" className="w-12 h-12 rounded-full border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all object-cover" />
                  <div>
                    <h4 className="font-medium text-white text-base">Elena Rostova</h4>
                    <div className="flex items-center gap-2 text-xs text-white/40 mt-1">
                      <span className="uppercase tracking-wide">CTO</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                      <iconify-icon icon="simple-icons:openai" width="14" class="opacity-60"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 group-hover:bg-purple-500 group-hover:text-white transition-all cursor-pointer">
                  <iconify-icon icon="solar:arrow-right-up-bold-duotone" width="20"></iconify-icon>
                </div>
              </div>
            </FlashlightCard>

            <FlashlightCard className="hover:bg-white/[0.04] p-8 rounded-sm border border-white/5 hover:border-white/10 transform transition-all duration-500 hover:-translate-y-1 relative text-white backdrop-blur-lg">
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>
              
              <div className="flex gap-1 text-purple-400 mb-6 relative z-10">
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
              </div>

              <p className="text-base font-normal leading-relaxed mb-8 text-slate-400 relative z-10">
                "The centralized storage substrate is incredibly robust. We migrated 5PB of data without a single packet loss. Absolutely essential infrastructure."
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-6 relative z-10">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Marcus Chen" className="w-10 h-10 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="font-medium text-white text-sm">Marcus Chen</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span>VP Eng</span>
                      <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                      <iconify-icon icon="simple-icons:vercel" width="14"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:bg-purple-600 group-hover:text-white transition-all cursor-pointer">
                  <iconify-icon icon="solar:arrow-right-up-bold-duotone" width="16"></iconify-icon>
                </div>
              </div>
            </FlashlightCard>

            <FlashlightCard className="hover:bg-white/[0.04] p-8 rounded-sm border border-white/5 hover:border-white/10 transform transition-all duration-500 hover:-translate-y-1 relative backdrop-blur-lg">
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)', zIndex: 0 }}></div>
              <div className="pointer-events-none absolute -inset-px rounded-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.4), transparent 40%)', zIndex: 0, WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>

              <div className="flex gap-1 text-purple-400 mb-6 relative z-10">
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
                <iconify-icon icon="solar:star-bold-duotone" width="18"></iconify-icon>
              </div>

              <p className="text-base font-normal leading-relaxed mb-8 text-slate-400 relative z-10">
                "Finally, observability that actually makes sense. The holistic view dashboard saved our ops team hundreds of hours in Q3 alone."
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-6 relative z-10">
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="Sarah Jenkins" className="w-10 h-10 rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="font-medium text-white text-sm">Sarah Jenkins</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span>DevRel</span>
                      <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                      <iconify-icon icon="simple-icons:stripe" width="14"></iconify-icon>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 group-hover:bg-purple-600 group-hover:text-white transition-all cursor-pointer">
                  <iconify-icon icon="solar:arrow-right-up-bold-duotone" width="16"></iconify-icon>
                </div>
              </div>
            </FlashlightCard>

          </div>
        </div>

        {/* Bottom Banner CTA */}
        <div className="hover:bg-white/[0.04] rounded-sm p-8 lg:px-12 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group border border-white/5 hover:border-white/10 backdrop-blur-lg transition-all duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,33,128,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:0_0,0_0] transition-all duration-1000 group-hover:bg-[position:100%_100%,0_0]"></div>
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-2">Ready to scale your intelligence?</h3>
            <p className="text-white/50 text-base font-light">Join 10,000+ engineers building on SAKURA.</p>
          </div>

          <button className="relative z-10 bg-white text-black pl-8 pr-6 py-4 rounded-sm font-semibold text-xs uppercase tracking-widest hover:bg-purple-50 transition-all transform flex items-center gap-4 group/btn">
            Deploy Sakura
            <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                <iconify-icon icon="solar:arrow-right-bold-duotone" class="text-sm"></iconify-icon>
            </div>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Validation