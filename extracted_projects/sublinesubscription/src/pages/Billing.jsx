export default function Billing() {
  return (
    <div className="pt-40 pb-24 px-6 max-w-[1200px] mx-auto min-h-[80vh]">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl tracking-tight text-white mb-6 font-geist font-light">Next generation billing logic</h1>
        <p className="text-xl text-[#b0b3b8] max-w-2xl mx-auto font-geist font-light">Automate custom invoice generation, precise tax handling, and bespoke grandfathering terms with our code-first billing engine.</p>
      </div>
      
      <div className="w-full h-[400px] bg-[#0c0d0f] border border-[#2e2e32] rounded-2xl overflow-hidden flex flex-col items-center justify-center relative shadow-2xl group">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.01)_20px,rgba(255,255,255,0.01)_40px)]"></div>
        <div className="text-center relative z-10 p-8 rounded-2xl bg-[#0a0c10]/80 backdrop-blur-md border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform transition-transform duration-500 group-hover:scale-105">
          <iconify-icon icon="solar:server-square-update-linear" width="56" className="text-blue-500 mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse"></iconify-icon>
          <h3 className="text-white text-2xl font-geist mb-3 font-medium tracking-tight">Billing Sandbox Engine</h3>
          <p className="text-[#b0b3b8] font-geist text-[15px] max-w-sm">Interactive workflow diagrams and sandbox testing environment are initializing.</p>
        </div>
      </div>
    </div>
  );
}