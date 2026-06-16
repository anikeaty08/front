import Reveal from '../ui/Reveal';

export default function Architecture() {
  return (
    <section
      className="relative z-10 w-full py-32 bg-[#050505] border-t border-neutral-900/50 overflow-hidden"
      id="architecture"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <Reveal>
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 lg:px-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl w-full md:w-[65%] leading-[1.05] text-white font-light tracking-tight drop-shadow-sm">
              Architecting Resilient Workflows.
            </h2>
            <p className="text-base md:text-lg text-neutral-400 w-full md:w-[30%] max-w-sm text-balance mb-2 md:mb-4 font-light tracking-wide border-l border-white/10 pl-4">
              Discover purposeful automation and robust integrations engineered to transform daily operations while safeguarding your data.
            </p>
          </header>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 h-auto md:h-[600px] lg:px-8">
          <div className="md:col-span-4 flex flex-col gap-4 lg:gap-6 h-full">
            <Reveal delay={0} className="flex-1">
              <article className="relative border border-neutral-800 h-full overflow-hidden group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 bg-[#0a0a0a] rounded-xl">
                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
                  <h3 className="text-2xl font-medium text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
                    Visual Mapping
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                    Intuitive drag-and-drop canvas for complex data routing, eliminating the need for rigid integration scripts.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={100} className="flex-1">
              <article className="relative border border-neutral-800 h-full overflow-hidden group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 bg-[#111111] rounded-xl p-6 md:p-8 flex flex-col justify-between">
                <div className="relative z-10">
                  <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                    Zero Latency
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                    Edge-deployed configurations ensure sub-millisecond execution globally without cold starts.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal delay={200} className="md:col-span-4 h-full">
            <article className="relative border border-neutral-800 h-full overflow-hidden group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 bg-[#0a0a0a] rounded-xl">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9497e84f-cd43-4bed-8735-bbc8bfb0606f_800w.webp"
                  alt="Security Architecture"
                  className="w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
                  Enterprise Grade Security
                </h3>
                <p className="text-base text-neutral-400 font-light leading-relaxed">
                  SOC2 Type II compliant infrastructure with end-to-end encryption. Granular access controls ensure your data never rests in unauthorized regions.
                </p>
              </div>
            </article>
          </Reveal>

          <div className="md:col-span-4 flex flex-col gap-4 lg:gap-6 h-full">
            <Reveal delay={300} className="h-[60%]">
              <article className="relative overflow-hidden group cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 md:p-8 flex flex-col bg-[#111111] h-full border-neutral-800 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-lg justify-between">
                <div className="relative z-20 w-full pointer-events-none">
                  <h3 className="text-3xl md:text-4xl font-normal text-white tracking-tight leading-snug drop-shadow-md">
                    Ecosystem
                    <br />
                    Renewal.
                  </h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mix-blend-screen group-hover:scale-105 transition-transform duration-700 mt-12">
                  <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-[80px]"></div>

                  <div className="absolute inset-0 animate-[spin_60s_linear_infinite] opacity-80 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <svg
                      viewBox="0 0 400 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[140%] h-[140%] md:w-[160%] md:h-[160%]"
                    >
                      <g opacity="0.6">
                        <ellipse cx="200" cy="200" rx="180" ry="40" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="1 12" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="170" ry="36" stroke="#c2410c" strokeWidth="2" strokeDasharray="1 16" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="160" ry="32" stroke="#f97316" strokeWidth="1.5" strokeDasharray="1 10" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="190" ry="44" stroke="#9a3412" strokeWidth="1.5" strokeDasharray="1 18" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="150" ry="28" stroke="#7c2d12" strokeWidth="2" strokeDasharray="1 14" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="140" ry="24" stroke="#c2410c" strokeWidth="1" strokeDasharray="1 12" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="130" ry="20" stroke="#7c2d12" strokeWidth="1.5" strokeDasharray="1 8" strokeLinecap="round" />
                      </g>

                      <g opacity="0.9" className="animate-[spin_40s_linear_infinite_reverse]" style={{ transformOrigin: '200px 200px' }}>
                        <ellipse cx="200" cy="200" rx="90" ry="90" stroke="#ffedd5" strokeWidth="1.5" strokeDasharray="1 16" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="72" ry="90" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="1 18" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="54" ry="90" stroke="#fdba74" strokeWidth="1.5" strokeDasharray="1 14" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="36" ry="90" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="1 16" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="18" ry="90" stroke="#f97316" strokeWidth="1.5" strokeDasharray="1 18" strokeLinecap="round" />

                        <ellipse cx="200" cy="200" rx="90" ry="72" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="1 16" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="90" ry="54" stroke="#fdba74" strokeWidth="1.5" strokeDasharray="1 18" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="90" ry="36" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="1 14" strokeLinecap="round" />
                        <ellipse cx="200" cy="200" rx="90" ry="18" stroke="#f97316" strokeWidth="1.5" strokeDasharray="1 16" strokeLinecap="round" />
                      </g>

                      <g opacity="0.4" className="animate-[spin_30s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
                        <ellipse cx="200" cy="200" rx="100" ry="100" stroke="#ffedd5" strokeWidth="1" strokeDasharray="1 28" strokeLinecap="round" transform="rotate(45 200 200)" />
                        <ellipse cx="200" cy="200" rx="100" ry="100" stroke="#ffedd5" strokeWidth="1" strokeDasharray="1 28" strokeLinecap="round" transform="rotate(-45 200 200)" />
                      </g>
                    </svg>
                  </div>

                  <div className="absolute inset-0">
                    <div className="absolute top-[35%] left-[42%] w-1.5 h-1.5 bg-orange-100 rounded-full shadow-[0_0_8px_rgba(255,237,213,0.9)] animate-[pulse_2s_ease-in-out_infinite]"></div>
                    <div className="absolute top-[62%] left-[58%] w-1 h-1 bg-orange-300 rounded-full shadow-[0_0_6px_rgba(253,186,116,0.8)] animate-[pulse_3s_ease-in-out_infinite]"></div>
                    <div className="absolute top-[48%] left-[28%] w-1 h-1 bg-orange-400 rounded-full shadow-[0_0_6px_rgba(251,146,60,0.8)] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                    <div className="absolute top-[68%] left-[38%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-[pulse_2.5s_ease-in-out_infinite]"></div>
                    <div className="absolute top-[38%] left-[68%] w-1 h-1 bg-orange-500 rounded-full shadow-[0_0_6px_rgba(249,115,22,0.8)] animate-[pulse_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>

                <div className="relative z-20 mt-auto self-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neutral-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </article>
            </Reveal>

            <Reveal delay={400} className="h-[40%]">
              <article className="relative border border-orange-500/20 h-full overflow-hidden group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl p-6 md:p-8 flex items-center justify-between">
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium text-white mb-1 tracking-tight">
                    View Docs
                  </h3>
                  <p className="text-sm md:text-base text-orange-200 font-light">
                    Explore the API references
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}