export default function LogoStrip() {
  return (
    <section className="border-y border-[#2e2e32] py-8">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
            <div className="text-xl tracking-tighter flex items-center gap-1 font-geist font-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"></path></svg>Vercel
            </div>
            <div className="text-xl tracking-tight font-geist font-light">BREX</div>
            <div className="text-xl tracking-tight font-geist font-light">RAMP</div>
            <div className="text-xl tracking-tight font-geist font-light">OpenAI</div>
            <div className="text-xl tracking-tight font-geist font-light">coinbase</div>
            <div className="text-xl tracking-tight flex items-center gap-1 font-geist font-light">
                <span className="bg-white text-black rounded-sm px-1 text-sm font-geist">$</span> Cash App
            </div>
            <div className="text-xl tracking-tight font-geist font-light">PLAID</div>
        </div>
    </section>
  );
}