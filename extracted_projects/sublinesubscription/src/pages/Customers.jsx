export default function Customers() {
  return (
    <div className="pt-40 pb-24 px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl tracking-tight text-white mb-6 font-geist font-light">Trusted by top tier teams</h1>
        <p className="text-xl text-[#b0b3b8] max-w-2xl mx-auto font-geist font-light">See how the world's fastest growing companies scale their revenue operations with Subline.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-[#2e2e32] rounded-2xl p-10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/10 transition-all duration-300 group hover:shadow-2xl hover:shadow-white/5">
          <div className="flex items-center gap-2 text-2xl font-geist text-white mb-8 font-light tracking-tighter">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"></path></svg>Vercel
          </div>
          <p className="text-lg text-[#b0b3b8] mb-10 font-geist leading-relaxed font-light">"Subline completely transformed how we handle usage-based billing. What used to take our finance team weeks is now entirely automated through smart API routing."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-purple-800 border border-white/10 flex items-center justify-center text-white font-medium font-geist text-lg">J</div>
            <div>
              <div className="text-[15px] font-medium text-white font-geist">Jane Doe</div>
              <div className="text-sm text-[#7e828a] font-geist">VP of Finance, Vercel</div>
            </div>
          </div>
        </div>

        <div className="border border-[#2e2e32] rounded-2xl p-10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/10 transition-all duration-300 group hover:shadow-2xl hover:shadow-white/5">
          <div className="flex items-center gap-2 text-2xl font-geist text-white mb-8 font-light tracking-tight">
            <iconify-icon icon="simple-icons:openai" width="28"></iconify-icon> OpenAI
          </div>
          <p className="text-lg text-[#b0b3b8] mb-10 font-geist leading-relaxed font-light">"The dunning automation alone recovered enough revenue to pay for the platform within the first month. Incredible visibility into our subscription metrics."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-700 to-teal-800 border border-white/10 flex items-center justify-center text-white font-medium font-geist text-lg">S</div>
            <div>
              <div className="text-[15px] font-medium text-white font-geist">Sam Rivera</div>
              <div className="text-sm text-[#7e828a] font-geist">Head of Operations, OpenAI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}