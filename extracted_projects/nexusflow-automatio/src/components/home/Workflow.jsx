import Reveal from '../ui/Reveal';

export default function Workflow() {
  return (
    <section
      className="z-10 border-y bg-[#0f0f0f] w-full border-neutral-900/50 py-32 relative"
      id="workflow"
    >
      <style>{`
        @keyframes flow {
          0% { stroke-dashoffset: 20; opacity: 0.2; }
          50% { opacity: 0.8; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
        }
        .line-anim {
          animation: flow 3s linear infinite;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-16">
            Orchestrate your entire stack
          </h2>
        </Reveal>

        <Reveal scale={true}>
          <div className="relative w-full max-w-3xl mx-auto h-[420px] flex items-center justify-center">
            {/* Orbit Rings */}
            <div className="absolute top-1/2 left-1/2 w-[290px] h-[290px] -translate-x-1/2 -translate-y-1/2 border border-neutral-800/40 rounded-full pointer-events-none">
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-500 rounded-full shadow-[0_0_10px_rgba(115,115,115,0.35)]"></div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 w-[430px] h-[430px] -translate-x-1/2 -translate-y-1/2 border border-neutral-800/25 border-dashed rounded-full pointer-events-none">
              <div className="absolute inset-0 animate-[spin_14s_linear_infinite_reverse]">
                <div className="absolute top-[12%] left-[72%] w-2 h-2 bg-neutral-500 rounded-full shadow-[0_0_10px_rgba(115,115,115,0.25)]"></div>
                <div className="absolute bottom-[10%] left-[25%] w-2.5 h-2.5 bg-neutral-600 rounded-full shadow-[0_0_10px_rgba(82,82,82,0.25)]"></div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
              <div className="relative w-[118px] h-[118px]">
                <div className="absolute inset-0 rounded-[28px] bg-orange-500/10 blur-xl"></div>
                <div className="absolute inset-[-8px] rounded-[32px] border border-orange-400/18 animate-[pulse_2.8s_ease-in-out_infinite]"></div>
              </div>
            </div>

            <div className="relative z-20 w-24 h-24 rounded-2xl bg-gradient-to-b from-orange-400 to-orange-600 border border-orange-300/35 flex items-center justify-center shadow-[0_0_35px_rgba(249,115,22,0.22)]">
              <div className="absolute inset-0 rounded-2xl bg-orange-400/10"></div>
              <iconify-icon
                icon="solar:layers-minimalistic-bold"
                className="text-white text-4xl relative z-10"
              ></iconify-icon>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-orange-500/6 blur-3xl pointer-events-none z-0"></div>

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M50,50 L20,20" stroke="rgba(64,64,64,0.7)" strokeWidth="0.35" fill="none" />
              <path d="M50,50 L80,20" stroke="rgba(64,64,64,0.7)" strokeWidth="0.35" fill="none" />
              <path d="M50,50 L20,80" stroke="rgba(64,64,64,0.7)" strokeWidth="0.35" fill="none" />
              <path d="M50,50 L80,80" stroke="rgba(64,64,64,0.7)" strokeWidth="0.35" fill="none" />
              <path d="M50,50 L10,50" stroke="rgba(64,64,64,0.7)" strokeWidth="0.35" fill="none" />
              <path d="M50,50 L90,50" stroke="rgba(64,64,64,0.7)" strokeWidth="0.35" fill="none" />

              <path
                d="M50,50 L20,20"
                stroke="rgba(163,163,163,0.75)"
                strokeWidth="0.55"
                strokeDasharray="4 4"
                strokeLinecap="round"
                fill="none"
                className="line-anim"
              />
              <path
                d="M50,50 L80,20"
                stroke="rgba(163,163,163,0.75)"
                strokeWidth="0.55"
                strokeDasharray="4 4"
                strokeLinecap="round"
                fill="none"
                className="line-anim"
              />
              <path
                d="M50,50 L20,80"
                stroke="rgba(163,163,163,0.75)"
                strokeWidth="0.55"
                strokeDasharray="4 4"
                strokeLinecap="round"
                fill="none"
                className="line-anim"
              />
              <path
                d="M50,50 L80,80"
                stroke="rgba(163,163,163,0.75)"
                strokeWidth="0.55"
                strokeDasharray="4 4"
                strokeLinecap="round"
                fill="none"
                className="line-anim"
              />
              <path
                d="M50,50 L10,50"
                stroke="rgba(163,163,163,0.75)"
                strokeWidth="0.55"
                strokeDasharray="4 4"
                strokeLinecap="round"
                fill="none"
                className="line-anim"
              />
              <path
                d="M50,50 L90,50"
                stroke="rgba(163,163,163,0.75)"
                strokeWidth="0.55"
                strokeDasharray="4 4"
                strokeLinecap="round"
                fill="none"
                className="line-anim"
              />
            </svg>

            <div className="absolute top-[10%] left-[15%] w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800/90 flex items-center justify-center text-neutral-400 z-20 node-anim shadow-[0_0_18px_rgba(0,0,0,0.28)]">
              <iconify-icon icon="solar:database-linear"></iconify-icon>
            </div>
            <div className="absolute top-[10%] right-[15%] w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800/90 flex items-center justify-center text-neutral-400 z-20 node-anim shadow-[0_0_18px_rgba(0,0,0,0.28)]" style={{ animationDelay: '-1s' }}>
              <iconify-icon icon="solar:chat-line-linear"></iconify-icon>
            </div>
            <div className="absolute bottom-[10%] left-[15%] w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800/90 flex items-center justify-center text-neutral-400 z-20 node-anim shadow-[0_0_18px_rgba(0,0,0,0.28)]" style={{ animationDelay: '-2s' }}>
              <iconify-icon icon="solar:bag-linear"></iconify-icon>
            </div>
            <div className="absolute bottom-[10%] right-[15%] w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800/90 flex items-center justify-center text-neutral-400 z-20 node-anim shadow-[0_0_18px_rgba(0,0,0,0.28)]" style={{ animationDelay: '-0.5s' }}>
              <iconify-icon icon="solar:card-linear"></iconify-icon>
            </div>
            <div className="absolute top-[50%] left-[5%] -translate-y-1/2 w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800/90 flex items-center justify-center text-neutral-400 z-20 node-anim shadow-[0_0_18px_rgba(0,0,0,0.28)]" style={{ animationDelay: '-1.5s' }}>
              <iconify-icon icon="solar:cloud-linear"></iconify-icon>
            </div>
            <div className="absolute top-[50%] right-[5%] -translate-y-1/2 w-12 h-12 rounded-xl bg-[#161616] border border-neutral-800/90 flex items-center justify-center text-neutral-400 z-20 node-anim shadow-[0_0_18px_rgba(0,0,0,0.28)]" style={{ animationDelay: '-2.5s' }}>
              <iconify-icon icon="solar:cpu-linear"></iconify-icon>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}