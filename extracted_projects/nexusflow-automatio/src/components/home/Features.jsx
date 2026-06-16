import Reveal from '../ui/Reveal';

export default function Features() {
  return (
    <section
      className="bg-[#0a0a0a] text-neutral-100 font-sans min-h-screen selection:bg-orange-500/30 selection:text-orange-400 overflow-x-hidden relative"
      id="features"
    >
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }

        @keyframes floatFast {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        @keyframes pulseSoft {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.05); }
        }

        @keyframes barGrow1 {
          0%, 100% { height: 30%; }
          50% { height: 42%; }
        }

        @keyframes barGrow2 {
          0%, 100% { height: 50%; }
          50% { height: 68%; }
        }

        @keyframes barGrow3 {
          0%, 100% { height: 78%; }
          50% { height: 96%; }
        }

        @keyframes barGrow4 {
          0%, 100% { height: 40%; }
          50% { height: 24%; }
        }

        .float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .float-fast {
          animation: floatFast 5s ease-in-out infinite;
        }

        .pulse-soft {
          animation: pulseSoft 3s ease-in-out infinite;
        }

        .bar-1 {
          animation: barGrow1 2.8s ease-in-out infinite;
        }

        .bar-2 {
          animation: barGrow2 2.8s ease-in-out infinite 0.15s;
        }

        .bar-3 {
          animation: barGrow3 2.8s ease-in-out infinite 0.3s;
        }

        .bar-4 {
          animation: barGrow4 2.8s ease-in-out infinite 0.45s;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h40v40H0V0zm19 39h2V1h-2v38zm-18-2h38v-2H1v2z\\' fill=\\'rgba(255,255,255,0.02)\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full py-24 md:py-32">
        {/* Header stays constrained */}
        <div className="max-w-full mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-white leading-tight">
                Orchestrate complex logic with <span className="text-orange-500">absolute precision.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg text-neutral-400 font-light max-w-xl mx-auto">
                Build, monitor, and scale your backend operations without writing boilerplate. Everything you need, unified in one platform.
              </p>
            </Reveal>
          </header>
        </div>

        {/* Grid expands wider */}
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[24rem] md:auto-rows-[22rem]">
            {/* Card 1 */}
            <Reveal delay={0} className="md:col-span-2 h-full">
              <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent p-[1px] overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-full">
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[#121212] overflow-hidden">
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute right-12 bottom-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pulse-soft"></div>

                  <div className="p-8 md:p-10 h-full flex flex-col relative z-10">
                    <div className="max-w-md relative z-20">
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-3">
                        Visual Workflow Builder
                      </h3>
                      <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                        Drag, drop, and connect logical nodes to create complex branching scenarios without reading docs.
                      </p>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-[58%] md:h-[62%] pointer-events-none">
                      <div className="float-slow absolute left-[18%] bottom-[22%] w-[48%] max-w-[420px] rounded-2xl border border-white/5 bg-[#1a1a1a]/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md p-4 md:p-5 flex flex-col gap-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"
                            style={{ animationDuration: '3s' }}
                          ></div>
                          <div className="w-10 h-2 rounded-full bg-white/20"></div>
                        </div>
                        <div className="w-full h-9 rounded-lg bg-white/5 border border-white/5"></div>
                      </div>

                      <div className="float-fast absolute right-[7%] bottom-[8%] w-[52%] max-w-[460px] rounded-2xl border border-white/10 bg-[#222]/95 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md p-4 md:p-5 flex flex-col gap-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                          <div className="w-12 h-2 rounded-full bg-white/20"></div>
                        </div>
                        <div className="w-full h-10 rounded-lg bg-white/10 border border-white/5 relative overflow-hidden">
                          <div className="absolute inset-y-0 left-0 bg-orange-500/25 w-[34%]"></div>
                        </div>
                        <div className="w-3/4 h-9 rounded-lg bg-white/5 border border-white/5 mt-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={150} className="md:col-span-1 h-full">
              <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent p-[1px] overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-full">
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[#121212] overflow-hidden flex flex-col justify-between p-8 md:p-10">
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors duration-500">
                      <iconify-icon icon="solar:chart-square-linear" width="24" height="24" style={{ strokeWidth: '1.5px' }}></iconify-icon>
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-white mb-3">Real-time Telemetry</h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      Monitor execution times and payload sizes instantly.
                    </p>
                  </div>

                  <div className="flex items-end gap-2 h-12 w-full mt-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bar-1 w-full bg-white/5 rounded-t-sm"></div>
                    <div className="bar-2 w-full bg-white/5 rounded-t-sm"></div>
                    <div className="bar-3 w-full bg-orange-500 rounded-t-sm shadow-[0_0_15px_rgba(249,115,22,0.3)]"></div>
                    <div className="bar-4 w-full bg-white/5 rounded-t-sm"></div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={250} className="md:col-span-1 h-full">
              <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent p-[1px] overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-full">
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[#121212] overflow-hidden flex flex-col p-8 md:p-10 relative">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors duration-500 relative z-10">
                    <iconify-icon icon="solar:shield-check-linear" width="24" height="24" style={{ strokeWidth: '1.5px' }}></iconify-icon>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-medium tracking-tight text-white mb-3">Enterprise Security</h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      End-to-end encryption and granular role-based access.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-8 right-8 h-24 bg-[#0a0a0a] rounded-t-xl border-t border-x border-white/5 flex flex-col justify-center px-6 gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-orange-500 transition-colors duration-500"></div>
                      <div className="h-1 bg-white/10 rounded-full w-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-3/4">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                      <div className="h-1 bg-white/10 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={350} className="md:col-span-2 h-full">
              <div className="group relative rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent p-[1px] overflow-hidden transition-transform duration-500 hover:-translate-y-1 h-full">
                <div className="absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-[#121212] overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-10 gap-8">
                  <div className="flex-1 relative z-10 flex flex-col w-full">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-orange-400 group-hover:border-orange-500/30 transition-colors duration-500">
                      <iconify-icon icon="solar:document-text-linear" width="24" height="24" style={{ strokeWidth: '1.5px' }}></iconify-icon>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-3">Developer First</h3>
                    <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-sm">
                      Write custom logic snippets in Node.js or Python right within the canvas for edge cases.
                    </p>
                  </div>

                  <div className="w-full md:w-[28rem] shrink-0 rounded-xl bg-[#080808] border border-white/10 p-5 shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors duration-500">
                    <div className="flex gap-1.5 mb-4 opacity-50">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                    </div>

                    <div className="font-mono text-xs md:text-sm leading-relaxed text-neutral-300">
                      <div className="flex">
                        <span className="text-orange-400 mr-2">export</span>
                        <span className="text-purple-400 mr-2">default</span>
                        <span className="text-blue-400 mr-2">async</span>
                      </div>
                      <div className="flex">
                        <span className="text-blue-400">function</span>
                        <span className="text-neutral-300">(</span>
                        <span className="text-orange-300">event</span>
                        <span className="text-neutral-300">) {'{'}</span>
                      </div>
                      <div className="pl-4 flex">
                        <span className="text-orange-400 mr-2">const</span> data = event.payload;
                      </div>
                      <div className="pl-4 flex text-neutral-500 italic mt-1">
                        // Transform data payload
                      </div>
                      <div className="pl-4 flex mt-1">
                        <span className="text-purple-400 mr-2">return</span> {'{'} status: <span className="text-green-400">200</span>, data {'}'};
                      </div>
                      <div>{'}'}</div>
                    </div>

                    <div className="absolute bottom-5 right-5 w-1.5 h-4 bg-orange-500 animate-[pulse_1s_infinite] opacity-0 group-hover:opacity-100 transition-opacity delay-300"></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}