import Reveal from '../ui/Reveal';

export default function DataTransformation() {
  return (
    <section className="overflow-hidden bg-[#050505] w-full border-neutral-900/50 border-b py-32 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
              Transform data on the fly
            </h2>
            <p className="text-neutral-400 text-lg font-light max-w-xl mx-auto">
              No more brittle scripts. Map fields visually and apply powerful transformations instantly.
            </p>
          </div>
        </Reveal>

        <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-0">
          {/* Source Panel */}
          <Reveal delay={0} className="w-full md:w-[42%]">
            <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative z-10 hover:border-neutral-700 transition-colors duration-500">
              <div className="px-5 py-3 border-b border-neutral-800/80 bg-[#111] flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <iconify-icon icon="solar:card-linear" class="text-neutral-400 text-sm"></iconify-icon>
                  <span className="text-xs font-medium text-neutral-300 tracking-wide">Stripe Webhook</span>
                </div>
              </div>
              <div className="py-5 font-mono text-sm leading-loose text-neutral-400 flex-1">
                <div className="px-5">{'{'}</div>
                <div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{ animation: 'highlightRow1 9s infinite' }}>
                  <span className="text-blue-400">"user_id"</span>: <span className="text-green-400">"usr_9x8j2"</span>,
                </div>
                <div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{ animation: 'highlightRow2 9s infinite' }}>
                  <span className="text-blue-400">"full_name"</span>: <span className="text-green-400">"Jane Doe"</span>,
                </div>
                <div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{ animation: 'highlightRow3 9s infinite' }}>
                  <span className="text-blue-400">"amount_cents"</span>: <span className="text-yellow-400">4900</span>,
                </div>
                <div className="px-5 py-1 border-l-2 border-transparent">
                  <span className="text-blue-400">"currency"</span>: <span className="text-green-400">"usd"</span>
                </div>
                <div className="px-5">{'}'}</div>
              </div>
            </div>
          </Reveal>

          {/* Connectors */}
          <div className="flex-1 hidden md:flex items-center justify-center relative z-0 min-w-[4rem]">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-neutral-800 overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" style={{ animation: 'pulseSweep 3s infinite linear' }}></div>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0a0a0a] border border-neutral-700 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:border-orange-500/50 transition-colors">
              <iconify-icon icon="solar:transfer-horizontal-linear" class="text-orange-500 text-lg"></iconify-icon>
            </div>
          </div>

          {/* Destination Panel */}
          <Reveal delay={200} className="w-full md:w-[42%]">
            <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800 shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative z-10 hover:border-neutral-700 transition-colors duration-500">
              <div className="px-5 py-3 border-b border-neutral-800/80 bg-[#111] flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <iconify-icon icon="solar:cloud-linear" class="text-neutral-400 text-sm"></iconify-icon>
                  <span className="text-xs font-medium text-neutral-300 tracking-wide">Salesforce Contact</span>
                </div>
              </div>
              <div className="py-5 font-mono text-sm leading-loose text-neutral-400 flex-1">
                <div className="px-5">{'{'}</div>
                <div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{ animation: 'highlightRow1 9s infinite' }}>
                  <span className="text-purple-400">"ContactId"</span>: <span className="text-green-400">"usr_9x8j2"</span>,
                </div>
                <div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{ animation: 'highlightRow2 9s infinite' }}>
                  <span className="text-purple-400">"FirstName"</span>: <span className="text-green-400">"Jane"</span>,
                </div>
                <div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{ animation: 'highlightRow2 9s infinite' }}>
                  <span className="text-purple-400">"LastName"</span>: <span className="text-green-400">"Doe"</span>,
                </div>
                <div className="px-5 py-1 border-l-2 border-transparent transition-colors duration-300" style={{ animation: 'highlightRow3 9s infinite' }}>
                  <span className="text-purple-400">"Revenue_USD"</span>: <span className="text-yellow-400">49.00</span>
                </div>
                <div className="px-5">{'}'}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}